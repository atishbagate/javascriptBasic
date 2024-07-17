// object definition
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
      console.log(this.name + "studies in grade" + this.grade + ".");
    },
  };
  // object definition
const student2 = {
    name: "Jimmy ",
    grade: " 6",
  };

  // the object student2 is borrowing introduction method from student1
let result= student1.introduction.bind(student2);

// invoking introduction() function
result();
