# Quiz

This plugin adds Multiple Choice Questions to a page. As with all plugins, it uses admonitions to indicate where the question should be placed. 

The choices are written as unordered lists using the ascii checkbox `[ ]` for options. The correct answer is indicated by a filled checkbox (`[x]`). Any number of choices are allowed. A text explaining the correct answer is also required and it will be shown after the student answers the quiz. 

## Syntax

```
!!! question choice
    Text of the question. 

    - [ ] option 1
    - [ ] option 2
    - [X] correct option


    !!! details
        Text explaining correct answer. Only shown after option is selected.
```

Try answering the quiz bellow. Answers persist page refreshes, so students won't loose their progress after the end of a session. 

!!! question choice
    Text of the question. 

    - [ ] option 1
    - [ ] option 2
    - [X] correct option

    !!! details
        Text explaining correct answer. Only shown after option is selected.

## Recommended uses

* Memorization of simple concepts
* Recalling definitions or technical terms used in previous sessions
* Practising the application of simple formulas or algorithms in new data
