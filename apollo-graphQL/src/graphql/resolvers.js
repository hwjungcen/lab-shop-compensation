const resolvers = {
    Order: {
        // set Query
    }
    Inventory: {
        // set Query
    }
    Delivery: {
        // set Query
    }

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
