function MailOrder() {
  var parameters = {
    collectorname: document.getElementById("Collector-name").value,
    collectoremail: document.getElementById("Collector-email").value,
    subscriberemail: document.getElementById("subscriber-email").value,
    collectorphone: document.getElementById("Collector-phone").value,
    collectormessage: document.getElementById("Collector-message").value,
    artsize: document.querySelector("input[name='Size-Price']:checked").value,
    styleframe: document.querySelector("input[name='framing-style']:checked")
      .value,
    styleart: document.querySelector("input[name='art-style']:checked").value,
  };
  emailjs
    .send("service_n7vj3nc", "template_prwm9ew", parameters)
    .then(function (res) {
      console.log("Success!!" + res.status); /* alert - Helps know which is working*/
    });
}
