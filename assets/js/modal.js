/*Modal*/
$(".btn_modal").click(()=>{
    $("#modal").css('display', 'flex');
  });

  $("#close_modal").click(()=>{
    $("#modal").css('display', 'none');
  });

  let bgModal = document.getElementById("modal");
  window.onclick = (event) => {
    if (event.target == bgModal) {
      bgModal.style.display = 'none';
    }
  };