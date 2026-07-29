let viewWorkBtn = document.getElementById("viewWorkBtn");
let introText = document.getElementById("introText");
let successMessage = document.getElementById("successMessage");

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
            behavior: "smooth"
        });
    });

    let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (message === "") {
        alert("Please enter your message");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email")
    }

    successMessage.textContent = "✔️Form submitted successfullly!";
    successMessage.style.display = "block";

    setTimeout(function(){
        successMessage.style.display = "none";
    },3000);

    contactForm.reset();
});