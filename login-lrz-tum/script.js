(function () {
  // only execute when the user is on the single sign on site
  const currentURL = window.location.href;
  if (
    currentURL.includes(
      "https://tumidp.lrz.de/idp/profile/SAML2/Redirect/SSO"
    ) ||
    currentURL.includes("https://login.tum.de/idp/profile/SAML2/Redirect/SSO")
  ) {
    // select "stay signed in"
    if (
      document.getElementById("donotcache") &&
      document.getElementById("donotcache-dummy")
    ) {
      document.getElementById("donotcache").value = "";
      document.getElementById("donotcache-dummy").checked = true;
    }
  }
})();
