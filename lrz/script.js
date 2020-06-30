(function () {
  // only execute when the user is on the single sign on site
  const currentURL = window.location.href;
  if (
    currentURL.includes("https://tumidp.lrz.de/idp/profile/SAML2/Redirect/SSO")
  ) {
    // select "stay signed in"

    document.getElementById("donotcache").value = "";
    document.getElementById("donotcache-dummy").checked = true;
  }
})();
