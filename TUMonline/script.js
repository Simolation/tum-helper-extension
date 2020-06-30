(function () {
  // directly open the login window in TUMonline when not signed in
  if (
    !(typeof detail === "undefined") &&
    detail.location.href.includes("webnav.willkommen")
  ) {
    detail.location = "wbanmeldung.durchfuehren";
  }
})();
