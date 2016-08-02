const problemsController = (function(){

  function createProblem(){

    var $title = $('.problemTitle').val()
    var $question = $('.problemQuestion').val()
    var $solution = $('.problemSolution').val()
    var problem = new Problem($title, $question, $solution)
    // $('body').append(`${problem.title}`)

  }
  // debugger
  // function deleteProblem(){
  //
  // }


  return {
    createProblem
    // deleteProblem
  }
}())


// def create
//   params  -> representation of the user input
//   User.create(params)
//   render ''
// end
//1.  go through the flow of mvc -> write it out
// 2. take a look jquery cheat sheet -> select elements, modify elements
// create the user model, add instance methods to
