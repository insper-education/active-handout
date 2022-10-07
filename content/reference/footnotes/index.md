# Footnotes

You can add [footnotes]()[^1] using the following syntax:

[^1]: Footnote example.

```md
The [footnote text]()[^1] will be displayed to the
right on larger displays or as a modal on smaller displays.

[^1]: The footnote text can go wherever you prefer.
```

You must always indicate the referenced text with a link without href followed by a `[^some-id]` where `some-id` is whatever you want.

## Markdown

You can use [regular markdown]()[^2] inside the footnote. This feature uses Python Markdown's footnote extension: https://python-markdown.github.io/extensions/footnotes/

[^2]: You can use regular markdown here, so images should work:

    ![](./monty-python.jpg)

## Work in progress

The current implementation has a few known bugs:

1. Avoid starting or ending the document with long footnotes, as they are **always** vertically centered on the reference;
2. Avoid adding two footnotes too close from each other, because they may overlap.
