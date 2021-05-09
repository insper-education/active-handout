# Basic text editing with markdown

In this page we show examples of general text editing using Markdown, a plain text way used to write formmated text. 

Other references:

- General markdown:
    - https://commonmark.org/help/
    - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
    - https://www.markdownguide.org/basic-syntax/

- Specific:
    - https://squidfunk.github.io/mkdocs-material/reference/abbreviations/

## Headers

In *Interactive Handouts* headers are used to create the *Table of contents* shown on the right side of the page. To create a heading, add `#` in front of a word or phrase. The number of `#` impacts the heading level. Level 1 headers `# Like this` are reserved for the title of the page. 

## `## Heading level 2`
### `### Heading level 3`
#### `#### Heading level 4`

## Text

Text is added by... just writing text. Paragraphs are separated by an empty line. 

=== "Result"
    This is a single paragraph
    even though it is split in three
    lines.

=== "Markdown"
        This is a single paragraph
        even though it is split in three
        lines.


## Bold, italics and other text emphasis

Possibles text emphasis and modifications:

=== "General"

    *Markdown:*

    ```
    - *Italic*
    - **Bold**
    ```

    *Result:*

    - *Italic*
    - **Bold**

=== "Expanded"
    
    *Markdown:*
    ```
    Text can be {​--deleted--} and replacement text {​++added++}. This can also be
    combined into {​~~one~>a single~~} operation. {​==Highlighting==} is also
    possible {​>>and comments can be added inline<<}.

    More options:
    
    - ==This was marked==
    - ^^This was inserted^^
    - ~~This was deleted~~
    
    Smart Symbols:
    
    - H~2~0
    - A^T^A
    ```
    
    *Result:*
    
    Text can be {​--deleted--} and replacement text {​++added++}. This can also be
    combined into {​~~one~>a single~~} operation. {​==Highlighting==} is also
    possible {​>>and comments can be added inline<<}.

    More options:

    - ==This was marked==
    - ^^This was inserted^^
    - ~~This was deleted~~
    
    Smart Symbols:
    
    - H~2~0
    - A^T^A
    
    > source: https://squidfunk.github.io/mkdocs-material/reference/formatting/


## Lists

Lists can be made as follows:

=== "Unordered list"

    *Markdown:*
    
    ``` md
    - Primeiro item
    - Segundo item
    - Terceiro item
        - Sub item
        - Sub item
    ```
    
    *Result:*
    
    - Primeiro item
    - Segundo item
    - Terceiro item
        - Sub item
        - Sub item
    
=== "Ordered list"

    *Markdown:*
    
    ```
    1. Primeiro item
    1. Segundo item
    1. Terceiro item
        1. Sub item
        1. Sub item
    ```
    
    *Result:*
    
    1. Primeiro item
    1. Segundo item
    1. Terceiro item
        1. Sub item
        1. Sub item
    
=== "Check list"

    *Markdown:*
    
    ```
    - [ ] No checked
    - [x] Checked item
    ```

    *Result:*
    
    - [ ] No checked
    - [x] Checked item
    


## Images 

Images you insert as in plain markdown: ![](image_path), but you have the advantage of being able to change the dimensions with `{width=...}`.

*Markdown:*

```
![](icon-elementos.png)
```

```
![](icon-elementos.png){width=200}
```

*Result:*

![](icon-elementos.png)

![](icon-elementos.png){width=200}
