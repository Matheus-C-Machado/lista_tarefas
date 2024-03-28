$(document).ready(function() {
  $('#task-form').submit(function(event) {
    event.preventDefault();
    var taskName = $('#task-input').val();
    if (taskName.trim() !== '') {
      var newTask = $('<li>').append($('<span>').addClass('bullet').text('•')).append(' ' + taskName).hide(); // Criar elemento li oculto com um ponto
      $('#task-list').append(newTask); // Adicionar à lista
      newTask.fadeIn(); // Animação de fade-in
      $('#task-input').val('');
    }
  });

  $(document).on('click', '#task-list li', function() {
    $(this).toggleClass('completed');
  });
});