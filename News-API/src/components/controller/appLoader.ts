import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ea7add58b72548da81ebb8105e3c112c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
