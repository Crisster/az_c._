window.onload = function(){
    applyCollapsible();
};

function applyCollapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active2");
        var content = this.nextElementSibling;

        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
}
$(document).ready(function(){
			  $("#gg").click(function(){
				$("#ff").slideToggle();
			  });
			});
