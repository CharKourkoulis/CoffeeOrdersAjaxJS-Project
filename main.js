

$(function () {
    

    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    function addOrder (order) { 
        var dt = new Date();
                var time = dt.getHours() + ":" + dt.getMinutes();

                $orders.append('<li> Name: ' + order.name +  '&nbsp; &nbsp; &nbsp; &nbsp; Drink: ' + order.drink +        
               '&nbsp; &nbsp; &nbsp; &nbsp; Order Placed: '+ time +'</li>');
     }

   
    $.ajax({
        type: "GET",
        url: 'orders.json',
       
        success: function (orders) {
            
            $.each(orders, function (i,order) { 
                addOrder (order);
            });
        },
        error: function(){ alert("error loading orders");
        }
    });


    
    $('#add-order').on('click', function () {  
        var order = {
            name: $name.val(),
            drink: $drink.val()         
        };
        

        $.ajax({
            type: 'POST',
            url: 'orders.json',
            data: JSON.stringify(order) ,
            dataType: 'json',
            contentType: 'application/json',
            success: function (newOrder) {
                addOrder (newOrder);
            },
                error: function () { 
                    alert("error saving data"); 
                }
        });

    });

          


});

