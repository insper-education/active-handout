# Toast Notifications

This page illustrates how to create toast (or snackbar) notifications. This is intended for plugin development and probably shouldn't be called directly from the markdown content.

In your plugin, whenever you want to show a toast notification, just call `notification.toast()`:

```javascript
notification.toast("Go crazy!", { bgColor: "#5301c8", color: "#ff4498" });
notification.toast('bgColor "note"', { bgColor: "note" });
notification.toast('bgColor "summary"', { bgColor: "summary" });
notification.toast('bgColor "info"', { bgColor: "info" });
notification.toast('bgColor "hint"', { bgColor: "hint" });
notification.toast('bgColor "success"', { bgColor: "success" });
notification.toast('bgColor "question"', { bgColor: "question" });
notification.toast('bgColor "warning"', { bgColor: "warning" });
notification.toast('bgColor "failure"', { bgColor: "failure" });
notification.toast('bgColor "danger"', { bgColor: "danger" });
notification.toast('bgColor "bug"', { bgColor: "bug" });
notification.toast('bgColor "example"', { bgColor: "example" });
notification.toast('bgColor "quote"', { bgColor: "quote" });
notification.toast("Notification with reload", {
  onClick: () => window.location.reload(),
});
notification.toast("You can notify the user with a toast");
notification.toast("You can create as many toasts as you want");
notification.toast("Toasts have an optional timeout argument", {
  timeout: 3000,
});
```

<script type="module">
import notification from "/js/notification.js";

notification.toast("Go crazy!", { bgColor: "#5301c8", color: "#ff4498" });
notification.toast('bgColor "note"', { bgColor: "note" });
notification.toast('bgColor "summary"', { bgColor: "summary" });
notification.toast('bgColor "info"', { bgColor: "info" });
notification.toast('bgColor "hint"', { bgColor: "hint" });
notification.toast('bgColor "success"', { bgColor: "success" });
notification.toast('bgColor "question"', { bgColor: "question" });
notification.toast('bgColor "warning"', { bgColor: "warning" });
notification.toast('bgColor "failure"', { bgColor: "failure" });
notification.toast('bgColor "danger"', { bgColor: "danger" });
notification.toast('bgColor "bug"', { bgColor: "bug" });
notification.toast('bgColor "example"', { bgColor: "example" });
notification.toast('bgColor "quote"', { bgColor: "quote" });
notification.toast("Notification with reload", {
  onClick: () => window.location.reload(),
});
notification.toast("You can notify the user with a toast");
notification.toast("You can create as many toasts as you want");
notification.toast("Toasts have an optional timeout argument", { timeout: 3000 });
</script>
