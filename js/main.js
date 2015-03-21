
(function() {
  var draw = {
      square: function() {
          var canvas = document.getElementById("a");
          if (canvas.getContext) {
              var ctx = canvas.getContext("2d");
              
              ctx.fillStyle = "rgb(127,212,247)";
              ctx.fillRect (0, 180, 353, 207);
          }
      }
  }
  
  draw.square();
})();
      
      
      
      
      
      
      


