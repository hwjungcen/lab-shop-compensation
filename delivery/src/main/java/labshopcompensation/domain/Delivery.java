package labshopcompensation.domain;

import labshopcompensation.domain.DeliveryStarted;
import labshopcompensation.DeliveryApplication;
import javax.persistence.*;

import org.springframework.beans.BeanUtils;

import java.util.List;
import lombok.Data;
import java.util.Date;


@Entity
@Table(name="Delivery_table")
@Data

public class Delivery  {


    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    
    
    
    
    
    private Long id;
    
    
    
    
    
    private String address;
    
    
    
    
    
    private String customerId;
    
    
    
    
    
    private Integer quantity;
    
    
    
    
    
    private Long orderId;

    @PostPersist
    public void onPostPersist(){


        DeliveryStarted deliveryStarted = new DeliveryStarted(this);
        deliveryStarted.publishAfterCommit();

    }

    public static DeliveryRepository repository(){
        DeliveryRepository deliveryRepository = DeliveryApplication.applicationContext.getBean(DeliveryRepository.class);
        return deliveryRepository;
    }




    public static void addToDeliveryList(OrderPlaced orderPlaced){

        /** Example 1:  new item */
        Delivery delivery = new Delivery();
        delivery.setAddress(orderPlaced.getAddress());
        delivery.setCustomerId(orderPlaced.getCustomerId());
        delivery.setOrderId(orderPlaced.getId());
        delivery.setQuantity(orderPlaced.getQty());
        
        repository().save(delivery);

        

        /** Example 2:  finding and process
        
        repository().findById(orderPlaced.get???()).ifPresent(delivery->{
            
            delivery // do something
            repository().save(delivery);


         });
        */

        
    }
    public static void removeDelivery(OrderCancelled orderCancelled){

        /** Example 1:  new item 
        Delivery delivery = new Delivery();
        repository().save(delivery);

        */

        /** Example 2:  finding and process */
        
        repository().findByOrderId(orderCancelled.getId()).ifPresent(delivery->{
                       
            repository().delete(delivery);
            

         });

        
    }


}
