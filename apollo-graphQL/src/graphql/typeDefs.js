import {gql} from 'apollo-server';

const typeDefs = gql`
    scalar Date
    scalar Long
    scalar Double
    scalar Integer

    type Order {
    	id: Long! 
			productId: String 
			qty: Integer 
			customerId: String 
			amount: Double 
			status: String 
			address: String
    }
    type Inventory {
    	id: Long! 
			stock: Long
    }
    type Delivery {
    	id: Long! 
			address: String 
			customerId: String 
			quantity: Integer 
			orderId: Long
    }

    type Query {
      orders: [Order]
      order(id: Long!): Order
      inventories: [Inventory]
      inventory(id: Long!): Inventory
      deliveries: [Delivery]
      delivery(id: Long!): Delivery
    }
`;

export default typeDefs;

