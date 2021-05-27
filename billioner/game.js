const game = {
  run() {
    questionArray.forEach(function (value) {
      let message = `${value.question}\n`;
      value.answers.forEach(function (answer, index) {
        const protoAnswer = `${index + 1}. ${answer}\n`;
        message += protoAnswer;
      });
      prompt(message);
    });
  },
};
