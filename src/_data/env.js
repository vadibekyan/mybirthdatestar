const environment = process.env.ELEVENTY_ENV;
const DEV_ENV = 'dev';
const devUrl = 'http://localhost:8080';
const prodUrl = 'https://mybirthdatestar.com';
const isProd = environment !== DEV_ENV;
const url = isProd ? prodUrl : devUrl;

module.exports = {
    environment,
    isProd,
    url,
    tracking: {
        gtag: 'G-',
        pixelId: 'MY',
    },
};