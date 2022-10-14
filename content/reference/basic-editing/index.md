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

Basic formatting can be done using simple text annotations. See the example below for some common text formatting.

=== "Result"
    It is very easy to type **bold**, *italic* and `monospaced` text. We can also ==highlight==, ~~strikethrough~~ and ^^underline^^ text. All these **can *be applied* ==together and may span== ^^many words^^.**. We can also put type ^superscript^ and ~subscript~ text.

=== "Markdown"
    ```
    It is very easy to type **bold**, *italic* and `monospaced` text.
    We can also ==highlight==, ~~strikethrough~~ and ^^underline^^ text.
    All these **can *be applied* ==together and may span== ^^many words^^.**.
    We can also put type ^superscript^ and ~subscript~ text.
    ```

Critic plugin expands the annotations:

=== "Result"
    Text can be {--deleted--} and replacement text {++added++}. This can also be
    combined into {~~one~>a single~~} operation. {==Highlighting==} is also
    possible {>>and comments can be added inline<<}.

    More options:

    - ==This was marked==
    - ^^This was inserted^^
    - ~~This was deleted~~

    Smart Symbols:

    - H~2~0
    - A^T^A

=== "Markdown"
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

    > source: https://squidfunk.github.io/mkdocs-material/reference/formatting/
    ```

## Lists

Lists can be made as follows:

=== "Unordered list"
    *Result:*

    - Primeiro item
    - Segundo item
    - Terceiro item
        - Sub item
        - Sub item

    *Markdown:*

    ``` md
    - Primeiro item
    - Segundo item
    - Terceiro item
        - Sub item
        - Sub item
    ```

=== "Ordered list"
    *Result:*

    1. Primeiro item
    1. Segundo item
    1. Terceiro item
        1. Sub item
        1. Sub item

    *Markdown:*

    ```
    1. Primeiro item
    1. Segundo item
    1. Terceiro item
        1. Sub item
        1. Sub item
    ```

=== "Check list"
    *Result:*

    - [ ] No checked
    - [x] Checked item

    *Markdown:*

    ```
    - [ ] No checked
    - [x] Checked item
    ```


## Images

Images you insert as in plain markdown: `![](image_path)`, but you have the advantage of being able to change the dimensions with `{width=...}`.

=== "Result"
    ![](icon-elementos.png)

    ![](icon-elementos.png){width=200}

=== "Markdown"
    ```
    ![](icon-elementos.png)
    ```

    ```
    ![](icon-elementos.png){width=200}
    ```

