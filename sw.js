self.addEventListener("pushsubscriptionchange", event => {
  document.getElementById("p1").innerHTML = event.oldSubscription;
},false);
