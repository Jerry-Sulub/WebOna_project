let desk = 0;
    $("#nav-desk").click(() => {
      if( desk == 0 )
      {
        $("#one").css('left', '0');
        desk = 1;
      }else
      {
        $("#one").css('left', '-200%');
        desk = 0;
      }
    })

    $("#nav-mob").click(() => {
      if( desk == 0 )
      {
        $("#two").css('left', '0');
        desk = 1;
      }else
      {
        $("#two").css('left', '-200%');
        desk = 0;
      }
    })