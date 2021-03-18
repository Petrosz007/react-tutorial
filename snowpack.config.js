/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        'src': '/dist',
        'public': { url: '/', static: true, },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-typescript',
    ],
}