# Authentication

This plugin adds token-based authentication to a page.

## Setting up `config.yml`

Define the following in your `config.yml`:

```yml
auth:
  url: http://localhost:8000/login
  watch-urls: "pathname-regex-here"
```

* `url` is the address of the authentication server.
* `watch-urls` is a regular expression that should match all pages that require authentication.

## Using token

You can get the token by importing the function from `auth.js` and calling `getToken()`:

```javascript
import { getToken } from "./auth.js"; // You may need to adapt the path

const token = getToken();
```

Or you can get it yourself from the `localStorage`:

```javascript
const token = localStorage.getItem("user-token");
```

## Example

<p id="token-msg">User is not logged in</p>

<button id="logout" style="background-color: var(--md-primary-fg-color); color: var(--md-primary-bg-color); border-radius: 3px; padding: 0.5rem 1rem;">Logout</button>

<script>
    const token = localStorage.getItem("user-token");
    const logout = document.getElementById("logout");
    if (token) {
        const container = document.getElementById("token-msg")
        container.innerHTML = `User is logged in. Token is ${token}`;
        logout.onclick = () => {
            localStorage.removeItem("user-token");
            window.location.reload();
        }
    }


</script>
