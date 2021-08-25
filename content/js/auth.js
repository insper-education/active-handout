const TOKEN_KEY = "user-token";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const handleTokenAndRefresh = (token) => {
  setToken(token);
  console.log(token);
  const params = new URLSearchParams(window.location.search);
  params.delete("token");
  console.log(params.toString(), token);
  if (!params.toString()) {
    // No more params
    const href = window.location.href;
    window.location.href = href.substring(0, href.indexOf("?"));
  } else {
    // Still some remaining params
    window.location.search = params.toString();
  }
};

{
  const authConfig = window.ihandout_config.auth;
  if (authConfig && authConfig.url) {
    const wathUrlPattern = authConfig["watch-urls"];

    const pathnameRegex = new RegExp(wathUrlPattern);
    const hasAuth = !!window.location.pathname.match(pathnameRegex);

    if (hasAuth) {
      const params = new URLSearchParams(window.location.search);
      let token = params.get("token");
      if (token) {
        handleTokenAndRefresh(token);
      } else if (!getToken()) {
        const authUrl = `${authConfig.url}?redirectTo=${window.location.href}`;
        window.location.href = authUrl;
      }
    }
  }
}
