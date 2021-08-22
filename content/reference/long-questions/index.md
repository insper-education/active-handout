# Long questions

This plugin adds one line text questions to a page. As with all plugins, it uses admonitions to indicate where the question should be placed. 

## Syntax

```
!!! question long
    Text of the question. 

    !!! details
        Correct answer here. Take into account that students will phrase their answers differently and try to include elements that will let them evaluate their own answers.
```

Try answering the question bellow. Answers persist page refreshes, so students won't loose their progress after the end of a session. 

!!! question long
    Text of the question. 

    !!! details
        Correct answer here. Take into account that students will phrase their answers differently and try to include elements that will let them evaluate their own answers.

## Recommended uses

* Writing a single line of code or command
* Identifying/finding something in an diagram or code snippet. 

!!! tip
    Examples of these are "Where does X occur?" or "In what section Y is located?". In this case we do not want to direct the students' gaze into specific parts of the code/image/etc. Instead, students should look at the whole and identify **where** they are supposed to look for what's asked.


## Customization

The "Validate" button text can be customized in `config.yml`. Add the following keys to your `config` object.

```
config:
  short-questions:
      text: "Custom button text here"
```
