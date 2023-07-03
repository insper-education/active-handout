import { loadToken, loadUserInfo } from "../auth";

export function initDashboard() {
  if (!dashboardEnabled) return;

  const container = document.querySelector(".dashboard-container");
  if (!container) return;

  if (!htmx?.trigger) {
    console.error("htmx is not loaded. Can't init dashboard.");
    showDashboardContainer(container);
    return;
  }
  const userInfo = loadUserInfo();
  const token = loadToken();
  if (!userInfo || !token) {
    console.error(
      "No user info or token found. Container was found, but dashboard can't loaded."
    );
    showDashboardContainer(container);
    return;
  }
  if (!tagTree) {
    console.error(
      "No tag tree found. Container was found, but dashboard can't loaded."
    );
    showDashboardContainer(container);
    return;
  }

  container.setAttribute("hx-headers", `{"Authorization": "Token ${token}"}`);
  htmx.trigger(container, "token-ready");
  showDashboardContainer(container);
}

function showDashboardContainer(container) {
  container.classList.add("ready");
}
