// Handle login form submission
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    window.location.href = "page.html";
    //alert(`Username: ${username}\nPassword: ${password}`);

    // You can replace the alert with your actual login logic.
});

// Initialize Google Sign-In
// Initialize Google Sign-In
gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: '1065806393030-5l9rb4o7n2q8iobr13qav76em98rkl75.apps.googleusercontent.com'
    }).then(function (auth2) {
        // You can attach the click handler for your Google Sign-In button here
        var options = new gapi.auth2.SigninOptionsBuilder();
        options.setLoginHint('shreyasm8055@gmail..com'); // Replace with the user's email
        auth2.attachClickHandler('google-signin', options, onSignIn, onFailure);
    });
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userEmail = profile.getEmail();
    var userDisplayName = profile.getName();
    var userProfileImage = profile.getImageUrl();

    // Construct the URL with user information as parameters
    var pageUrl = "page.html?email=" + encodeURIComponent(userEmail) + "&name=" + encodeURIComponent(userDisplayName) + "&image=" + encodeURIComponent(userProfileImage);

    // Redirect to the page.html with user information
    window.location.href = pageUrl;
}

function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}

      function handleCredentialResponse(googleUser) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', ' https://shreyasm8055.github.io/log/');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
          console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + id_token);
      }
    

