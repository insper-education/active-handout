import { postTelemetryData } from "./apiClient";
import { loadToken } from "./auth";
import { getKey, setJSONValue, getJSONValue } from "./client-db";
import { addUploadIndicator } from "./upload-indicator";

export function getSubmissionCache(element) {
  const exerciseCache = getJSONValue(element);
  let value = null;
  let submitted = false;
  if (exerciseCache?.value !== null && exerciseCache?.value !== undefined) {
    value = exerciseCache.value;
  }
  if (
    exerciseCache?.submitted !== null &&
    exerciseCache?.submitted !== undefined
  ) {
    submitted = exerciseCache.submitted;
  }
  if (submitted) {
    addUploadIndicator(element);
  }
  return { value, submitted };
}

export function sendAndCacheData(element, value, points, token) {
  const slug = getKey(element);

  setJSONValue(slug, { value, submitted: false });

  if (!token) {
    token = loadToken();
  }

  if (token && telemetryEnabled && backendUrl && courseSlug) {
    postTelemetryData(token, value, slug, extractTags(element), points).then(
      (res) => {
        if (res !== null) {
          setJSONValue(slug, { value, submitted: true });
          addUploadIndicator(element);
        }
      }
    );
  }
}

function extractTags(element) {
  const tags = [];
  const tagPrefix = "tag-";
  for (let className of element.classList) {
    if (className.startsWith(tagPrefix)) {
      tags.push(className.substring(tagPrefix.length));
    }
  }
  return tags;
}
