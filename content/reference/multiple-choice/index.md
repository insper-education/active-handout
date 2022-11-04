# Multiple Choice Exercises

This plugin adds Multiple Choice Exercises to a page. As with all plugins, it uses admonitions to indicate where the exercise should be placed.

The choices are written as unordered lists using the ascii checkbox `[ ]` for options. The correct answer is indicated by a filled checkbox (`[x]`). Any number of choices are allowed. A text explaining the correct answer is also required and it will be shown after the student answers the quiz.

You can choose to display the quiz in one or two column format as you see fit for your activity

## Recommended uses

* Memorization of simple concepts
* Recalling definitions or technical terms used in previous sessions
* Practising the application of simple formulas or algorithms in new data

## Syntax

Try answering the quiz bellow. Answers persist page refreshes, so students won't loose their progress after the end of a session.

```
!!! exercise choice "Question"
    Text of the question.

    - [ ] option 1
    - [ ] option 2
    - [X] correct option


    !!! answer
        Text explaining correct answer. Only shown after option is selected.
```

!!! exercise choice "Question"
    Text of the question.

    - [ ] option 1
    - [ ] option 2
    - [X] correct option

    !!! answer
        Text explaining correct answer. Only shown after option is selected.

#### two columns

```
!!! exercise choice two-cols
    Text of the question.

    - [ ] option 1
    - [ ] option 2
    - [X] correct option

    !!! answer
        Text explaining correct answer. Only shown after option is selected.
```

!!! exercise choice two-cols
    Text of the question.

    - [ ] option 1
    - [ ] option 2
    - [X] correct option

    !!! answer
        Text explaining correct answer. Only shown after option is selected.

