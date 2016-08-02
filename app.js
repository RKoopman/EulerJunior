const Store = {
  problems: []
}


$(function() {
  $('.newProblem').on('submit', function(){
    problemsController.createProblem()
  })

})
