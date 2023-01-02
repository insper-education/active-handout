# Dashboard

You can add a dashboard with `!!! dashboard`:

!!! dashboard
    This content will be displayed if the user is not logged in.

    Any valid markdown text should be fine here.

    ```
    Example raw text.
    ```

To add the dashboard, define a `tag_tree` in Active Handout's settings (`mkdocs.yml`). Example:

```yml
plugins:
  - active-handout:
      telemetry: true
      backend_url: https://example-backend.com.br/api/
      course_slug: Active Handout Example 2022
      tag_tree:
        - reference:
            - choice
            - parsons-exercise
            - text-exercise
        - grandparent-tag:
            - parent-tag:
                - child-tag
```

!!! important
    You must have telemetry enabled and a backend server running. Most of the computation runs in the backend.

