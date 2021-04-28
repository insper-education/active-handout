# Markdown 

Here we have examples of general use of markdown and specific cases that only work with the infrastructure we are proposing here that will not work elsewhere (github wiki, ...) 

Other references:

- General markdown:
    - https://commonmark.org/help/
    - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
    - https://www.markdownguide.org/basic-syntax/

- Specific:
    - https://squidfunk.github.io/mkdocs-material/reference/abbreviations/

## Headers

To create a heading, add `#` in front of a word or phrase. The
number of `#` impacts the heading level.

## `# Heading level 1`
## `## Heading level 2`
### `### Heading level 3`
#### `#### Heading level 4`

## Text

A new paragraph is created by a one or more empty lines, line break (enter) wont impact on the result.

*Markdown:*

```
Saci is
a character in Brazilian folklore.
He is a one-legged black or bi-racial youngster, who smokes a pipe and wears a magical red cap that enables him to disappear and reappear wherever he wishes (usually in the middle of a dust devil). Considered an annoying prankster in most parts of Brazil, and a potentially dangerous and malicious creature in others, he nevertheless grants wishes to anyone who manages to trap him or steal his magic cap. However, his cap is often depicted as having a bad smell. Most people who claimed to have stolen this cap say they can never wash the smell away.

The legend says that a person can trap a Saci inside a bottle when he is in the form of a dust devil. 
```

*Result:*

Saci is 
a character in Brazilian folklore. 
He is a one-legged black or bi-racial youngster, who smokes a pipe and wears a magical red cap that enables him to disappear and reappear wherever he wishes (usually in the middle of a dust devil). Considered an annoying prankster in most parts of Brazil, and a potentially dangerous and malicious creature in others, he nevertheless grants wishes to anyone who manages to trap him or steal his magic cap. However, his cap is often depicted as having a bad smell. Most people who claimed to have stolen this cap say they can never wash the smell away.

The legend says that a person can trap a Saci inside a bottle when he is in the form of a dust devil. 

> source: Wikipedia 

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
    - [ ] 
 
 
 
    ```

    *Result:*
    
    - [ ] No checked
    - [x] Checked item
    
## Emojis

You can use emojis from the list:

- https://github.com/caiyongji/emoji-list

*Markdown:*

```
:two_hearts: :star:
```

*Result:*

:two_hearts: :star:

## Emphasis

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

## Box

You can use box as fallowing:

*Markdown:*

```
!!! note 
    You can create different types of box:
    
    - note, example, warning, info, tip, danger
    
    You only need to change `!!! TYPE`
```

```
!!! example "Modify the title"
    It is possible to modify the box title.
    
    !!! warning
        A box inside a box is also possible.
```

```
!!! danger ""
    This is a box without title.
```

```
??? info 
    You can create a box thas is expandable.
    
    ```
    ...
    
    
    
    oi!
    ```
```

*Result:*

!!! note 
    You can create different types of box:
    
    - note, example, warning, info, tip, danger
    
    You only need to change `!!! TYPE`
    
!!! example "Modify the title"
    It is possible to modify the box title.
    
    !!! warning
        A box inside a box is also possible.

!!! danger ""
    This is a box without title.
    
??? info 
    You can create a box thas is expandable.
    
    ```txt
    ...
    
    
    
    oi!
    ```
 
## Code and Syntax Highlighting

You can include code, citation or no formatted text in two ways: inline or block:

*Markdown:*

Inline `code` has `back-ticks around` it. Block code are fenced by lines with three back-ticks  <code>```</code>, you can highlight it by providing the language.

No highlight:

    ```

    
    Emp      ty spaces
    paragraph     
    ```

Code highlight:

    ```c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```
    
Block diagram:

    ```
    x---------x           x---------x
    |         |           |         |
    | uc      |           | LCD     |
    |   ------|    spi    |-------  |
    |   | spi | <---/---> | ili  |  |
    x---------x           x---------x
    ```

*Result:*

Inline `code` has `back-ticks around` it. Block code are fenced by lines with three back-ticks  <code>```</code>, you can highlight it by providing the language.

No highlight

```


Emp      ty spaces
paragraph     
```

Code highlight:

```c
#include <stdio.h>
 int main(void) {
  printf("Hello world!\n");
  return 0;
}
```

Block diagram:

```
  x---------x           x---------x
  |         |           |         |
  | uc      |           | LCD     |
  |   ------|    spi    |-------  |
  |   | spi | <---/---> | ili  |  |
  x---------x           x---------x
```

### tabbed

You can use tabbed to provide another version of the same content.

*Markdown:*

```
=== "C"
    ``` c
    #include <stdio.h>

    int main(void) {
    printf("Hello world!\n");
    return 0;
    }
    ```

=== "C++"
    ``` c++
    #include <iostream>

    int main(void) {
    std::cout << "Hello world!" << std::endl;
    return 0;
    }
    ```
```

*Result:*

=== "C"
    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"
    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

## Multimidia

To insert a youtube vídeo go to the youtube page, right click on video and copy embedded code:

*Markdown:*

```
<iframe width="630" height="450" src="https://www.youtube.com/embed/UIGsSLCoIhM"
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture" allowfullscreen></iframe>
```

*Result:*

<iframe width="630" height="450" src="https://www.youtube.com/embed/UIGsSLCoIhM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

!!! tip
    You can adjust the size of the video by modifying fields `width` and `heigth`
 

