# Toast Notifications

This page illustrates how to create toast (or snackbar) notifications. This is intended for plugin development and probably shouldn't be called directly from the markdown content.

In your plugin, whenever you want to show a toast notification, just call `notification.toast()`:

```javascript
notification.toast("Go crazy!", { bgColor: "#FFFF00", color: "#ff4498" });
notification.toast('bgColor "danger"', { bgColor: "danger" });
notification.toast("Notification with click event (reload page)", {
  onClick: () => window.location.reload(),
});
notification.toast("Toasts have an optional timeout argument", {
  timeout: 3000,
});
```

The following values are accepted for `bgColor`:

- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: var(--md-primary-fg-color)">primary (your theme's primary color)</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #448aff">note</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00b0ff">abstract</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00b0ff">summary</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00b0ff">tldr</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00b8d4">info</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00b8d4">todo</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00bfa5">tip</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00bfa5">hint</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00bfa5">important</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00c853">success</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00c853">check</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #00c853">done</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #64dd17">question</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #64dd17">help</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #64dd17">faq</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff9100">warning</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff9100">caution</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff9100">attention</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff5252">failure</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff5252">fail</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff5252">missing</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff1744">danger</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #ff1744">error</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #f50057">bug</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #7c4dff">example</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #9e9e9e">quote</span>
- <span style="display: block; padding: 0.2rem 0.5rem; color: white; background-color: #9e9e9e">cite</span>
- a color in hex notation (e.g. <span style="padding: 0.2rem; color: white; background-color: #FF00FF">"#FF00FF"</span>)

<script type="module">
import notification from "../../js/notification.js";

notification.toast("Go crazy!", { bgColor: "#FFFF00", color: "#ff4498" });
notification.toast('bgColor "danger"', { bgColor: "danger" });
notification.toast("Notification with click event (reload page)", {
  onClick: () => window.location.reload(),
});
notification.toast("Toasts have an optional timeout argument", {
  timeout: 3000,
});

</script>
