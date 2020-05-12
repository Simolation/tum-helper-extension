(function() {
  
  // only execute when the user is not logged in
  const currentURL = window.location.href
  if (currentURL === "https://www.moodle.tum.de/login/index.php" || currentURL === "https://www.moodle.tum.de/") {

    // redirect to the TUMonline login page
    window.location.replace("https://www.moodle.tum.de/auth/shibboleth/index.php")

    // when already authenticated it will redirect back to moodle else login and then you will be redirected
  }

})();