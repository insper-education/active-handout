# Markdown extensions

Markdown supports many extensions that adds other visual elements to text. In this page we describe the ones supported by *Interactive Handouts*.

## Emojis

You can use emojis from the list https://github.com/caiyongji/emoji-list.

=== "Result"
    :two_hearts: :star:
=== "Markdown"
        :two_hearts: :star:

## Box elements

Box elements can be use to emphasize text and add interactivity to a handout. All follow the same syntax:

    !!! TYPE
        content goes here

See examples of static box elements below. 

=== "Result"
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
        Collapsible boxes are also possible. 


=== "Markdown"
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
            Collapsible boxes are also possible. 



## Code and Syntax Highlighting

### Inline code

=== "Result"
    Text surrounded by backticks (the character `` `) is shown in monospaced font, `like this`.  

=== "Markdown"
    ```
    Text surrounded by backticks (the character `` `) is shown in monospaced font, `like this`.  
    ``` 

### Code blocks

Code blocks are started and ended by a line with three backticks. See examples below.

=== "Result"
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

=== "Markdown"

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

## Tabs

Tabs can be used to provide another version of the same content.

=== "Result"
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



=== "Markdown"
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