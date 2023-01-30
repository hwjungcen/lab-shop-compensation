import {RESTDataSource} from 'apollo-datasource-rest';

class deliveryRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8083';
        // dev for IDE
            // this.baseURL = 'http://8083-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://delivery:8080';
    }

    async getDeliveries() {
        const data = await this.get('/deliveries', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.deliveries;
    }

    // GET
    async getDelivery(id) {
        const data = await this.get(`/deliveries/${id}`, {})
        var value = this.stringToJson(data);
        return value;
    }

    stringToJson(str){
        if(typeof str == 'string'){
            str = JSON.parse(str);
        }
        return str;
    }
}

export default deliveryRestApi;



