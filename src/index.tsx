import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import BreedSelectorForm from './components/BreedSelectorForm';
import BreedSelectorForm2 from './components/BreedSelectorForm2';
import BreedSelectorForm3 from './components/BreedSelectorForm3';
import DogImage from './components/DogImage';
import RandomDogImage from './components/RandomDogImage';
import RandomDogImages from './components/RandomDogImages';
import { Todos } from './components/Todos/Todo';
import { DogImageProvider } from './contexts/DogImageContext';

const App = () => {
    return (
        <div>
            <h1>IT WORKS</h1>
            <p>Yeah boiii ii</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit sequi est nesciunt quam quasi ad quia. Exercitationem, recusandae aut. Hic unde laboriosam nemo sint architecto, ea impedit suscipit soluta.</p>
            <Todos />
            {/* <RandomDogImage /> */}
            {/* <RandomDogImages /> */}
            <DogImageProvider>
                {/* <BreedSelectorForm /> */}
                {/* <BreedSelectorForm2 /> */}
                <BreedSelectorForm3 />
                <DogImage />
            </DogImageProvider>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
