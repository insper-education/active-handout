# Dashboard

You can add a dashboard with `!!! dashboard`:

!!! dashboard

To add the dashboard, define a `tag_tree` in Active Handout's settings (`mkdocs.yml`). Example:

```yml
plugins:
  - active-handout:
      telemetry: true
      backend_url: https://example-backend.com.br/api/
      course_slug: Active Handout Example 2022
      tag_tree:
        parsons-exercise: Parsons Exercise
        long-text: Long text exercise
        text-exercise: Regular text exercise
        short-text: Short text exercise
        grandparent-tag:
          name: Grandparent
          children:
            parent-tag:
              name: Parent
              children:
                child-tag: "Tag"
```

!!! important
    You must have telemetry enabled and a backend server running. Most of the computation runs in the backend.

