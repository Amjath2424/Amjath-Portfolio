var typed = new Typed(".text", {
    strings: ["Sotfware Developer", "Student", "Coder"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function SendMail(){
    var params = {
        from_name: document.getElementById("fullname").Value,
        email_id: document.getElementById("email_id").Value,
        
        message : document.getElementById("message").Value,
    }
    emailjs.send("service_974alsd","template_8dzhmkd",params).then(function (res){
        alert("Success!" + res.status);
    })
}
