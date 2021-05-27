class Game {
  run() {
    questionArray.forEach(function (value) {
      let message = `${value.question}\n`;
      value.answers.forEach(function (answer, index) {
        const protoAnswer = `${index + 1}. ${answer}\n`;
        message += protoAnswer;
      });

      const availableAnswers = [1, 2, 3, 4];

      while (true) {
        const userAnswer = parseInt(prompt(message));
        if (isNaN(userAnswer)) {
          return;
        }
        if (!availableAnswers.includes(userAnswer)) {
          alert("Необходимо ввести одно из чисел: 1, 2, 3, или 4.");
          continue;
        }

        this.check(userAnswer - 1, value.rightAnswer);
        break;
      }
    }, this);

    alert(
      `Поздравляем, игра окончена! Вы ответили правильно на ${player.score} из ${questionArray.length} вопросов.`
    );
  }

  check(userAnswer, rightAnswer) {
    if (userAnswer === rightAnswer) {
      player.score++;
    }
  }
}
