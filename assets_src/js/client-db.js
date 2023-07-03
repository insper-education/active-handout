export function getKey(elOrKey) {
  if (typeof elOrKey === "string") {
    return elOrKey;
  }

  if (elOrKey.dataset.slug) {
    return elOrKey.dataset.slug;
  }

  const docAddr = document.location.pathname;
  const slash = docAddr.endsWith("/") ? "" : "/";
  return `${docAddr}${slash}${elOrKey.id}`;
}

export function setValue(elOrKey, value) {
  const key = getKey(elOrKey);
  localStorage[key] = value;
}

export function getValue(elOrKey) {
  const key = getKey(elOrKey);
  return localStorage.getItem(key);
}

export function removeValue(elOrKey) {
  const key = getKey(elOrKey);
  localStorage.removeItem(key);
}

export function setJSONValue(elOrKey, jsonValue) {
  setValue(elOrKey, JSON.stringify(jsonValue));
}

export function getJSONValue(elOrKey) {
  const value = getValue(elOrKey);
  if (!value) {
    return value;
  }
  return JSON.parse(value);
}
