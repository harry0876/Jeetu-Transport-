(function () {
    var form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = (form.querySelector('[name="name"]') || {}).value || "";
        var phone = (form.querySelector('[name="phone"]') || {}).value || "";
        var service = (form.querySelector('[name="service"]') || {}).value || "";
        var message = (form.querySelector('[name="message"]') || {}).value || "";

        var subject = "Website inquiry — " + (name.trim() || "Jeetu Transport");
        var body =
            "Name: " + name.trim() + "\r\n" +
            "Phone: " + phone.trim() + "\r\n" +
            "Service needed: " + service.trim() + "\r\n\r\n" +
            "Message:\r\n" + message.trim();

        var href =
            "mailto:jeetutransportltd@gmail.com?cc=" +
            encodeURIComponent("jskalha@gmail.com") +
            "&subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);

        if (href.length > 1900) {
            body = body.slice(0, 1500) + "\r\n…(truncated)";
            href =
                "mailto:jeetutransportltd@gmail.com?cc=" +
                encodeURIComponent("jskalha@gmail.com") +
                "&subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(body);
        }

        window.location.href = href;
    });
})();
