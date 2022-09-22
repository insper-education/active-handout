# Syntax highlighting

You can wrap inline code between backticks (`` ` ``) to apply syntax highlighting. Example: `` `#!python print('Hello world')` `` will be rendered as `#!python print('Hello world')`.

You can also wrap multiline code between triple backticks (`` ``` ``). Example:

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

Will be rendered as:

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
