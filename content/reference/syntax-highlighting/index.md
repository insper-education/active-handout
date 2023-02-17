# Syntax highlighting

To use syntax highlighting you need to enable the following extensions in your `mkdocs.yml`:

```yml
markdown_extensions:
  - pymdownx.inlinehilite
  - pymdownx.superfences
```

You can wrap inline code between backticks (`` ` ``) to apply syntax highlighting. Example: `` `#!python print('Hello world')` `` will be rendered as `#!python print('Hello world')`.

You can also use [Fenced Code Blocks](https://python-markdown.github.io/extensions/fenced_code_blocks/), i.e., wrap multiline code between triple backticks (`` ``` ``). Example:

=== "Result"

    ```python
    def func(arg1, arg2):
        """
        Docstrings
        """
        m = max(arg1, arg2)  # Some comment
        return m

    if __name__=='__main__':
        print(func(21, 32))
    ```

=== "Source"

    ````
    ```python
    def func(arg1, arg2):
        """
        Docstrings
        """
        m = max(arg1, arg2)  # Some comment
        return m

    if __name__=='__main__':
        print(func(21, 32))
    ```
    ````

You can also add line numbers:

=== "Result"

    ```python linenums="1"
    def func(arg1, arg2):
        """
        Docstrings
        """
        m = max(arg1, arg2)  # Some comment
        return m

    if __name__=='__main__':
        print(func(21, 32))
    ```

=== "Source"

    ````
    ```python linenums="1"
    def func(arg1, arg2):
        """
        Docstrings
        """
        m = max(arg1, arg2)  # Some comment
        return m

    if __name__=='__main__':
        print(func(21, 32))
    ```
    ````