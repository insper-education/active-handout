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
        <input class="my-custom-input-class" type="text" value="" name="answerToQuestion"/>
        <input class="ah-button ah-button--primary" type="submit" value="Submit"/>
        '''
```

## Syntax

```
!!! exercise random-question
    You can add text here
```

## JavaScript

You will also need to add some JavaScript. Example:

```js
const randomExercises = document.querySelectorAll(".admonition.exercise.random-question");
randomExercises.forEach(exercise => {
  const input = exercise.querySelector(".my-custom-input-class");

  exercise.addEventListener("remember", (event) => {
    const answer = input.value;
    const points = 1; // Must be a number between 0 and 1
    // This function should be available in the global object.
    sendAndCacheData(exercise, answer, points);
  });

  // This function should also be available in the global object.
  const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
  // You should try to resubmit the answer if it couldn't be submitted in previous attempts.
  if (prevAnswer !== null) {
    input.value = prevAnswer;
    const inputs = exercise.querySelectorAll("input");
    for (const input of inputs) {
      input.setAttribute("disabled", true);
    }
    exercise.classList.add("done")
    if (!submitted) {
      const points = 1;
      sendAndCacheData(exercise, prevAnswer, points);
    }
  }
});
```

!!! exercise random-question
    You can add text here

<script>
const randomExercises = document.querySelectorAll(".admonition.exercise.random-question");
randomExercises.forEach(exercise => {
    const input = exercise.querySelector(".my-custom-input-class");

    exercise.addEventListener("remember", (event) => {
        const answer = input.value;
        const points = 1; // Must be a number between 0 and 1
        // This function should be available in the global object.
        sendAndCacheData(exercise, answer, points);
    });

    // This function should also be available in the global object.
    const { value: prevAnswer, submitted } = getSubmissionCache(exercise);
    // You should try to resubmit the answer if it couldn't be submitted in previous attempts.
    if (prevAnswer !== null) {
        input.value = prevAnswer;
        const inputs = exercise.querySelectorAll("input");
        for (const input of inputs) {
            input.setAttribute("disabled", true);
        }
        exercise.classList.add("done");

        if (!submitted) {
            const points = 1;
            sendAndCacheData(exercise, prevAnswer, points);
        }
    }
});
</script>
