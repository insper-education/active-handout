# Parsons problems

With this plugin, you can create Parsons problems. For more details and examples, please refer to the following resources:

- https://pamelafox.github.io/faded-parsons-static/
- https://dl.acm.org/doi/10.1145/3411764.3445228

## Getting Started

To utilize the Parsons problems exercises, start by providing an explanation for the student, followed by a code snippet that will be transformed into the exercise. The plugin will automatically mix the lines for you.

The plugin does not supports:

- Distractors 
- Code execution test

### Basic

To use the parsons problems exercises you should provide an explanation for the student fallowing by a code that will became the exercise.   

```
!!! exercise parsons
    Create a dummy code that does nothing:

    ```py
    def teste():
        for i in range(10):
            print(i+2)
        print('abc')
        return 4
    ```
```

!!! exercise parsons
    Create a dummy code that does nothing:

    ```py
    def teste():
        for i in range(10):
            print(i+2)
        print('abc')
        return 4
    ```
    
For different applications or languages, you may choose to exclude indentation in the exercise. To do this, use the `no-indent` option as follows:
    
```
!!! exercise parsons no-indent
    Create a dummy code that does nothing with no idetation:

    ```python
    def teste():
        print('abc')2
        for i in range(10):2
            print(i+2)2
        return 42
    ```
```    

!!! exercise parsons no-indent
    Create a dummy code that does nothing with no idetation:

    ```python
    def teste():
        print('abc')2
        for i in range(10):2
            print(i+2)2
        return 42
    ```
