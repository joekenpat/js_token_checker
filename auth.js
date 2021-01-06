//write messages to page body
const notify = (txt) => {
  alert(txt);
};

// handle redirection to routes
const redirect = (url) => {
  let origin = window.location.origin;
  window.location.href = new URL(url, origin).href;
};

//list of protective routes
const protective_paths = ["/admin.html"];

//add url origin to paths
var protective_paths_with_origin = [];
protective_paths.map((path) => {
  protective_paths_with_origin.push(new URL(path, window.location.origin).href);
});

//get all link on page
var page_links = document.links;

for (var i = 0; i < page_links.length; i++) {
  if (protective_paths_with_origin.includes(page_links[i].href)) {
    page_links[i].addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        check_auth();
      },
      false
    );
  }
}

//check for local token
const check_auth = async () => {
  if (localStorage.getItem("test_token") === null) {
    if (window.location.pathname === "/login.html") {
      notify("Enter login Details");
    } else {
      notify("You are not logged in");
      setTimeout(() => {
        redirect("/login.html");
      }, 2000);
    }
  } else {
    //can do some futher validation on the token
    if (window.location.pathname === "/login.html") {
      notify("You are already logged in, redirecting you");
      setTimeout(() => {
        redirect("/admin.html");
      }, 2000);
    } else {
      notify("You are logged in");
    }
  }
  return false;
};
