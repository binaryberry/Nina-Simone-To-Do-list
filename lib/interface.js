$('document').ready(function() {
         
          if(localStorage.getItem('todos') === null){
          	localStorage.setItem('todos','')
          }
          if(localStorage.getItem('completedtodos') === null){
          	localStorage.setItem('completedtodos','')
          }
          
          window.todos = localStorage.getItem('todos').split(',');
          window.completedtodos = localStorage.getItem('completedtodos').split(',');
          todos.forEach(function(item) {
            addTodo(item)
          });

        });

        var addTodo = function(item) {
          if(item !=='') {
            var dt = $('<dt>').text(item).append('   <a href="#">x</a>');
            dt.children().on('click', function() {
              dt.addClass("completed");
              completedTodo(item); 
              for(var i = todos.length - 1; i >= 0; i--) {
          			if(todos[i] === item) {
             				todos.splice(i, 1);
             				localStorage.setItem('todos', window.todos.toString())
          			}
  			     }
            })
            $('dl').append(dt);
            $('input').val('');
          }
        }
        var saveTodo = function(item) {
          	window.todos.push(item);
          	localStorage.setItem('todos', window.todos.toString()); 
         }
        var completedTodo = function(item) {
         	window.completedtodos.push(item);
          	localStorage.setItem('completedtodos', window.completedtodos.toString()); 
         }
        $('#add-todo').on('click', function() {
          var item = $('input').val();
            addTodo(item);
            saveTodo(item);
        });
        $('input').on('keyup', function() {
          if(event.keyCode === 13) {
            var item = $('input').val();
              addTodo(item);
              saveTodo(item);
          }
        });