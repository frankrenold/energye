$(document).ready(function(){
  $(".backlink").click(function(event) {
      event.preventDefault();
      history.back(1);
  });
});
