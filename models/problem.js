var Problem = (function(){
  var id = 0
  return class {
    constructor(title, question, solution, difficulty){
     this.title = title
     this.question = question
     this.solution = solution
     this.difficulty = difficulty
     this.id = ++id
     store.problems.push(this)
    }
  }
}())
