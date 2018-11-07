var scrollpos = window.scrollY;
var nav = document.getElementById("stickynav");
if (nav){
    let cls = ["sticky-nav"];
    function add_class_on_scroll() {
        nav.classList.add(cls);
    }
    function remove_class_on_scroll() {
        nav.classList.remove(cls);
    }
    window.addEventListener('scroll', function(){
        scrollpos = window.scrollY;
        if(scrollpos > 0){
            add_class_on_scroll();
        }
        else {
            remove_class_on_scroll();
        }
          // console.log(scrollpos);
      });
  }
  