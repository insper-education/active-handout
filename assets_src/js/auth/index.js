import { getUserInfo } from "../apiClient";

const USER_TOKEN_KEY = "active-handout--user-token";
const USER_INFO_KEY = "active-handout--user-data";

export function loadToken() {
  return localStorage.getItem(USER_TOKEN_KEY);
}

export function loadUserInfo() {
  const infoStr = localStorage.getItem(USER_INFO_KEY);
  if (infoStr) {
    try {
      return JSON.parse(infoStr);
    } catch {
      return null;
    }
  }
}

export function initAuth() {
  handleRedirects();
  let token = loadToken();

  const authMenuContainer = document.getElementById("user-menu");
  document.body.addEventListener("htmx:afterSettle", function (evt) {
    if (evt.target == authMenuContainer) {
      if (token) {
        document.getElementById("logout_btn").classList.remove("hidden");

        // show page content if user is logged in
        document.getElementById("content-behind-login")?.classList.remove("hidden");
        document.getElementById("login-needed-message")?.classList.add("hidden");
      } else {
        document.getElementById("login_btn").classList.remove("hidden");
      }
    }
  });

  return token;
}

function handleRedirects() {
  if (location.search.includes("token=")) {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    localStorage.setItem(USER_TOKEN_KEY, token);

    if (token) {
      getUserInfo(token)
        .then((userInfo) => {
          if (userInfo) {
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
          }
        })
        .finally(() => {
          window.location.href = window.location.href.replace(
            window.location.search,
            ""
          );
        });
    } else {
      localStorage.removeItem(USER_INFO_KEY);
      window.location.href = window.location.href.replace(
        window.location.search,
        ""
      );
    }
  }
}
