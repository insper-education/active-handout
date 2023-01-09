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

    def get_tags(self, el):
        return ['random-question']
