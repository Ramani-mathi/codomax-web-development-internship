let viewWorkBtn = document.getElementById("viewWorkBtn");
let introText = document.getElementById("introText");

viewWorkBtn.addEventListener("click",function(){
    introText.textContent = "Thanks for visiting my Portfolio";
});


let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",
    function() {
        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }
        else{
            topBtn.style.display = "none";
        }
    }
);

topBtn.addEventListener("click",
    function(){
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        });
    });