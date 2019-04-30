 $(document).ready(function() {

 	alert("Don't forget to check the footer when you're done looking at this awesome site");

     //hide the dog catcher by default on page start
      $(".domainName").hide();

      var hideStatus = false;

 
        //SHOW AND HIDE EVENTS
        $(".question").on("click", function() {


          // if true
          if(hideStatus == false){
              
              
              $(".domainName").show();

              hideStatus = true;
          } 
          else{
             
              $(".domainName").hide();
              hideStatus = false;
          }


      });
 



 
 });
