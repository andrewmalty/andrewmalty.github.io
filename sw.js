
self.addEventListener("pushsubscriptionchange", event => {
  document.getElementById("p1").innerHTML = event.oldSubscription;
  document.getElementById("p2").innerHTML = event.newSubscription;
},false);
