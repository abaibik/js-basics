function PostEs5(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

PostEs5.prototype.edit = function (text) {
  this.text = text;
};

function AttachedPostEs5(author, text, date) {
  PostEs5.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;

AttachedPostEs5.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

class PostEs6 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  }
}

class AttachedPostEs6 extends PostEs6 {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}
