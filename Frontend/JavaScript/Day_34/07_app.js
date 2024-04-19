const student = {
  name: "sanjay",
  marks: 98,
  pro: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); //Parent's scope -> window
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window
    }, 2000);
  },
};
