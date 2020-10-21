(function () {
  // only execute when the user is not logged in
  const currentURL = window.location.href;
  if (
    currentURL === "https://www.moodle.tum.de/login/index.php" ||
    currentURL === "https://www.moodle.tum.de/"
  ) {
    // redirect to the TUMonline login page
    window.location.replace(
      "https://www.moodle.tum.de/Shibboleth.sso/Login?providerId=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&target=https%3A%2F%2Fwww.moodle.tum.de%2Fauth%2Fshibboleth%2Findex.php"
    );

    // when already authenticated it will redirect back to moodle else login and then you will be redirected
  }
})();
