# Tabbed content

To use [Tabbed Content](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/), enable the following extension in your `mkdocs.yml`:

```yml
markdown_extensions:
  - pymdownx.tabbed:
      alternate_style: true
```

To create a tab, start the line with `===` followed by the quoted title. If there is more than one consecutive tab, they will be grouped together. Example:

```
=== "Tab 1"

    Some content in tab 1

=== "Tab 2"

    Some content in tab 2
```

Will be rendered as:

=== "Tab 1"

    Some content in tab 1

=== "Tab 2"

    Some content in tab 2

If you have too many tabs, a scroll and left/right buttons will be added:

=== "Tab 1"
    Some content in tab 1
=== "Tab 2"
    Some content in tab 2
=== "Tab 3"
    Some content in tab 3
=== "Tab 4"
    Some content in tab 4
=== "Tab 5"
    Some content in tab 5
=== "Tab 6"
    Some content in tab 6
=== "Tab 7"
    Some content in tab 7
=== "Tab 8"
    Some content in tab 8
=== "Tab 9"
    Some content in tab 9
=== "Tab 10"
    Some content in tab 10
