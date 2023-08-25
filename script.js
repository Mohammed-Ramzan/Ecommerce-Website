let list = document.querySelectorAll(".header-list");

            list.forEach((li)=>{
                li.addEventListener("click", function(){
                    removeList();
                    li.classList.add("active")
                })
            })
            function removeList(){
            list.forEach(li=>{
                li.classList.remove("active");
            })
        }
        let items = document.querySelectorAll(".item");
        items.forEach((item)=>{
            item.addEventListener("click", function(){
                location.href = "product-detail.html"
            })
        })

let end = "01 Dec 2023 12:05 AM";
let times = document.querySelectorAll(".time");
function all() {
    let date = new Date(end);
    let newDate = new Date();
    let deff = (date - newDate) / 1000;
    if (deff < 0) return;
    times[0].innerText = `${Math.floor(deff / 86400)}D :`;
    times[1].innerText = ` ${Math.floor(deff / 3600 % 24)}H :`;
    times[2].innerText = ` ${Math.floor(deff / 60 % 60)}M :`;
    times[3].innerText = ` ${Math.floor(deff) % 60}S`;
}
setInterval("all()", 1000);

let start = 0;
function cont(x){
 clearInterval(interval);
   start = start + x;
   slides(start)
 }
 
   function slides(num) {
     let slides = document.getElementsByClassName("slide");
     if(num == slides.length){
       start = 0;
       num = 0;
     }
     if(num < 0){
       start = slides.length-1;
         num = slides.length-1;
     }
     for(let slide of slides){
       slide.style.display= "none";
     }
     slides[num].style.display = "block";
     
   }
   slides(start)
   function count(){
     start++;
     slides(start)
   }
 let interval = setInterval(count, 2000);
