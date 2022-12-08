
    $("#arrow_up").click(()=>{
        $("html, body").animate({
          scrollTop : 0
        }, 600);
        return false;
      });
      $("#arrow_up").fadeOut();
      $(window).scroll(()=>{
        if($(this).scrollTop() > 600)
        {
          $("#arrow_up").fadeIn();
        }else
        {
          $("#arrow_up").fadeOut();
        }
      });