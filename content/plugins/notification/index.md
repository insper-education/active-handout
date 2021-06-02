# Toast Notifications

This page illustrates how to create toast (or snackbar) notifications. This is intended for plugin development and probably shouldn't be called directly from the markdown content.

In your plugin, whenever you want to show a toast notification, just call `notification.toast()`:

```javascript
notification.toast("Go crazy!", { bgColor: "#FFFF00", color: "#ff4498" });
notification.toast('bgColor "question"', { bgColor: "hint" });
notification.toast("Notification with click event (reload page)", {
  onClick: () => window.location.reload(),
});
notification.toast("Toasts have an optional timeout argument", {
  timeout: 3000,
});
```

The following values are accepted for `bgColor`:

* note
* summary
* info
* hint
* success
* question
* warning
* failure
* danger
* bug 
* example
* quote
* a color in hex notation (e.g. "#FF00FF")

<script type="module">
import notification from "/js/notification.js";

notification.toast("Go crazy!", { bgColor: "#FFFF00", color: "#ff4498" });
notification.toast('bgColor "question"', { bgColor: "hint" });
notification.toast("Notification with click event (reload page)", {
  onClick: () => window.location.reload(),
});
notification.toast("Toasts have an optional timeout argument", {
  timeout: 3000,
});

</script>
