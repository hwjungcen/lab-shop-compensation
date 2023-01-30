const resolvers = {
    Order: {
        delivery: async (root, {deliveryId}, {dataSources}) => {
            var parseLink = root._links.self.href.split('/')
            var orderId = parseLink[parseLink.length - 1]
            return await dataSources.deliveryRestApi.getDeliveryByOrderId(orderId);
            // try {
            //     if (root && root._links.self.href) {
            //         var parseLink = root._links.self.href.split('/')
            //         var getOrderId = parseLink[parseLink.length - 1]
            //         var deliveries = await dataSources.deliveryRestApi.getDeliveries();

            //         if(deliveries){
            //             var rtnVal = null
            //             Object.values(deliveries).forEach(function (delivery) {
            //                 if(delivery && delivery.orderId == getOrderId){
            //                     rtnVal = delivery
            //                 }
            //             })
            //             return rtnVal
            //         }
            //     }
            //     return null;
            // } catch (e) {
            //     return null;
            // }
        },
        
        inventory: async (root, {productId}, {dataSources}) => {
            if (!productId) productId = root.productId

            if (productId) {
                return await dataSources.inventoryRestApi.getInventory(productId);
            }
            return null;
        }
    },
    Inventory: {
        // set Query
    },
    Delivery: {
        // set Query
    },

    Query: {
        order : async (_, { id }, { dataSources }) => {
            return dataSources.orderRestApi.getOrder(id);
        },
        orders : async (_, __, { dataSources }) => {
            return dataSources.orderRestApi.getOrders();
        },
        inventory : async (_, { id }, { dataSources }) => {
            return dataSources.inventoryRestApi.getInventory(id);
        },
        inventories : async (_, __, { dataSources }) => {
            return dataSources.inventoryRestApi.getInventories();
        },
        delivery : async (_, { id }, { dataSources }) => {
            return dataSources.deliveryRestApi.getDelivery(id);
        },
        deliveries : async (_, __, { dataSources }) => {
            return dataSources.deliveryRestApi.getDeliveries();
        },
    }
};

export default resolvers;