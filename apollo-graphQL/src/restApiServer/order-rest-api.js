import {RESTDataSource} from 'apollo-datasource-rest';

class orderRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8081';
        // dev for IDE
            // this.baseURL = 'http://8081-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://order:8080';
    }

    async getOrders() {
        const data = await this.get('/orders', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.orders;
    }

    // GET
    async getOrder(id) {
        const data = await this.get(`/orders/${id}`, {})
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

export default orderRestApi;



