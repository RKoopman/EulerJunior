var problemsController = (function(){

  function createProblem(){
    debugger
    var $title = $('.problemTitle').val()
    var $question = $('.problemQuestion').val()
    var $solution = $('.problemSolution').val()
    new Problem($title, $question, $solution)
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
