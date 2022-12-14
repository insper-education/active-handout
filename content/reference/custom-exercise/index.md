# Custom Exercises

You can also create custom exercises. Start by creating a mkdocs hook file (e.g. `hooks/custom_exercise.py`). You need to register the hook in your `mkdocs.yml` with (path is relative to the `mkdocs.yml` file):

```yml
hooks:
  - hooks/custom_exercise.py
```

In your hook file, create a `on_startup` function and register the visitor builder function. Example:

```python
import random
from active_handout_plugins import register_exercise_visitor_builder, ExerciseAdmonition

def on_startup(*args, **kwargs):
    register_exercise_visitor_builder(RandomQuestionExercise, 4)

class RandomQuestionExercise(ExerciseAdmonition):
    def __init__(self, *args, **kwargs) -> None:
        super().__init__('exercise', ['random-question'], *args, **kwargs)

    def create_exercise_form(self, el, submission_form):
        questions = ["What's your name?", "What is the answer to life, the universe and everything?"]

        return f'''
        <p>{random.choice(questions)}</p>
        <input type="text" value="" name="data"/>
        <input class="ah-button ah-button--primary" type="submit" value="Submit"/>
        '''
```

## Syntax

```
!!! exercise random-question
    You can add text here
```

!!! exercise random-question
    You can add text here
