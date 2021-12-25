
         document.addEventListener('scroll' , 
         function(){
             document.querySelector('.GoUpBtn').style.display = "block";
         }
      )

      window.addEventListener('keydown' , checkKeyPress);

       function checkKeyPress(key){
           if(key.keyCode == "27"){
               document.querySelector('#bg-modal').style.display = "none";
               document.querySelector('body').style.overflow = "auto";
       }}

      document.querySelector('.GoUpBtn').addEventListener('click',
       function(){
         window.scrollTo(0,0);
      });

      document.getElementById('SearchBox').addEventListener('click',
      function(){
         document.querySelector('#bg-modal').style.display = "flex";
         document.querySelector('body').style.overflow = "hidden";
         window.scrollTo(0,0);
         });
         
      document.getElementById('Cards-OpenSearch').addEventListener('click',
        function(){
            document.querySelector('#bg-modal').style.display = "flex";
            document.querySelector('body').style.overflow = "hidden";
            window.scrollTo(0,0);
        }
      );   
      
      document.getElementById('CloseSerach').addEventListener('click',
         function(){
         document.querySelector('#bg-modal').style.display = "none";
         document.querySelector('body').style.overflow = "auto";
      });

      $(".HomePageShop").owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 2000, 
     autoplayHoverPause: true, 
   });