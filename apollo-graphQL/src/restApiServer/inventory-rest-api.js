import {RESTDataSource} from 'apollo-datasource-rest';

class inventoryRestApi extends RESTDataSource {
    constructor() {
        super();
        // dev for Local
            this.baseURL = 'http://localhost:8082';
        // dev for IDE
            // this.baseURL = 'http://8082-ide-xxxxxxxxxx.kuberez.io'
        // prod
            // this.baseURL = 'https://inventory:8080';
    }

    async getInventories() {
        const data = await this.get('/inventories', {})
        var value = this.stringToJson(data);
        // return retunVal
        return value._embedded.inventories;
    }

    // GET
    async getInventory(id) {
        const data = await this.get(`/inventories/${id}`, {})
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

export default inventoryRestApi;



