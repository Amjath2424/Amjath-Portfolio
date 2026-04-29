if (window.Typed && document.querySelector(".text")) {
    new Typed(".text", {
        strings: ["Associate Software Engineer", "Coder"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
}

function SendMail() {
    const fullNameEl = document.getElementById("fullname");
    const emailEl = document.getElementById("email_id");
    const messageEl = document.getElementById("message");

    if (!fullNameEl || !emailEl || !messageEl) {
        alert("Contact form fields are missing in the HTML.");
        return;
    }

    if (!window.emailjs) {
        alert("Email service is not loaded.");
        return;
    }

    const params = {
        from_name: fullNameEl.value,
        email_id: emailEl.value,
        message: messageEl.value,
    };

    window.emailjs
        .send("service_974alsd", "template_8dzhmkd", params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function () {
            alert("Failed to send message.");
        });
}
