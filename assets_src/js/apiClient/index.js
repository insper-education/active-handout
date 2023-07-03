export async function postTelemetryData(
  token,
  log,
  exerciseSlug,
  exerciseTags,
  points
) {
  if (!telemetryEnabled || !backendUrl || !courseSlug) return false;

  const exercise = {
    course: courseSlug,
    slug: exerciseSlug || "",
    tags: exerciseTags || [],
  };
  if (!Number.isFinite(points)) {
    points = 0;
  }
  return postJSON("/telemetry", { exercise, points: points, log }, token);
}

export async function getUserInfo(token) {
  return getJSON("/user-info", token);
}

export async function getJSON(endpoint, token) {
  const url = buildUrl(endpoint);
  if (!url) return null;

  const init = createInit(token);

  return makeJSONRequest(url, init);
}

export async function postJSON(endpoint, data, token) {
  const url = buildUrl(endpoint);
  if (!url) return null;

  const init = createInit(token);
  init.method = "POST";
  if (data) {
    init.body = JSON.stringify(data);
  }

  return makeJSONRequest(url, init);
}

function makeJSONRequest(url, init) {
  return fetch(url, init)
    .then((response) => response.json())
    .catch((reason) => {
      console.error(reason);
      return null;
    });
}

export function buildUrl(endpoint) {
  if (!backendUrl) return "";

  let url = backendUrl;
  if (!url.endsWith("/")) url += "/";
  if (endpoint.startsWith("/")) endpoint = endpoint.substr(1);
  url += endpoint;

  return new URL(url).href;
}

function createInit(token, contentType) {
  if (!contentType) {
    contentType = "application/json";
  }
  const init = {
    mode: "cors",
    headers: {
      "Content-Type": contentType,
    },
  };

  if (token) {
    init.headers.Authorization = `Token ${token}`;
  }

  return init;
}
