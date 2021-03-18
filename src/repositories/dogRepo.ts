import { fetchAs } from "../utilities";

type Status = 'error' | 'success';


interface DogApiResponse {
    message: string;
    status: Status;
    error?: string;
}

interface DogApiManyResponse {
    message: string[];
    status: Status;
    error?: string;
}
interface DogApiBreedsResponse {
    message: {
        [name: string]: string[];
    };
    status: Status;
    error?: string;
}

export class DogRepo {
    getRandom = async (): Promise<string> => {
        const data = (await fetchAs<DogApiResponse>('https://dog.ceo/api/breeds/image/random'));
        return data.message;
    }
    
    getRandomOfBreed = async (breed: string): Promise<string> => {
        const data = await fetchAs<DogApiResponse>(`https://dog.ceo/api/breed/${breed}/images/random`);
        if(data.status === 'error') {
            throw new Error(`Breed '${breed}' not found`);
        }

        return data.message;
    }

    getSomeRandom = async (amount: number): Promise<string[]> => {
        const data = await fetchAs<DogApiManyResponse>(`https://dog.ceo/api/breeds/image/random/${amount}`);
        return data.message;
    }

    getBreeds = async (): Promise<string[]> => {
        const data = await fetchAs<DogApiBreedsResponse>(`https://dog.ceo/api/breeds/list/all`);
        const breeds = Object.keys(data.message).flatMap(key => 
            [key, ...data.message[key].map(x => `${key}/${x}`)]
        );
        return breeds;
    }
}