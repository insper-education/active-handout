# Simple code editor

You can add a simple code editor such as this:

!!! code-editor
    ```{.py .filename-python_example}
    --8<-- "reference/code-editor/python_example.py"
    ```

    ```html
    --8<-- "reference/code-editor/html-example.html"
    ```

    ```{.css .readonly-file .filename-base}
    --8<-- "reference/code-editor/base.css"
    ```

    ```{.css .hidden-file .filename-hidden}
    --8<-- "reference/code-editor/hidden.css"
    ```

## Source code

```
!!! code-editor
    ```{.py .filename-python_example}
    --8<-- "reference/code-editor/python_example.py"
    ```

    ```html
    --8<-- "reference/code-editor/html-example.html"
    ```

    ```{.css .readonly-file .filename-base}
    --8<-- "reference/code-editor/base.css"
    ```

    ```{.css .hidden-file .filename-hidden}
    --8<-- "reference/code-editor/hidden.css"
    ```
```

## Add Javascript

You can add some Javascript to handle editor content changes:

```js
const editors = document.getElementsByClassName("code-editor");
for (let editor of editors) {
  editor.addEventListener("contentchanged", (ev) => {
    const filename = ev.detail.filename;
    const code = ev.detail.code;
    console.log(`Content of file ${filename} changed to:\n${code}`);
  })
}
```

<script>

  const editors = document.getElementsByClassName("code-editor");
  for (let editor of editors) {
    editor.addEventListener("contentchanged", (ev) => {
        const filename = ev.detail.filename;
        const code = ev.detail.code;
        console.log(`Content of file ${filename} changed to:\n${code}`);
    })
  }

</script>
