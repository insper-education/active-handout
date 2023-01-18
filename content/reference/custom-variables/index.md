# Custom Variables

You can use custom {{var1}} to easy adjust informations shared across several pages or to easy ajust course offers without having to review all text {{var2}}. To use custom variables you must declare a variable and put it under two brackets {{ var_name }}, then declare the variables in the `mkdocs.yml`.

```
You can use custom {{var1_}} to easy adjust informations
shared across several pages or to easy ajust course offers
without having to review all text {{ var2_}}. 
```

Variables are located in `mkdocs.yml` config file under `custom_variables`:

```yml
custom_variables:
  var1: "*variables*"
  var2: material
```

## Markdown

You can use markdown inside the variables, but remember to put it inside "".

## Contributing

It uses Jinja2 to process the text and replace the variable:

- *active-handout-plugins-py/src/active_handout_plugins/templating.py*
