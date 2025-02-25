this.model.on('change', function(todoId) {
    var text = this.model.get( todoId );
    $("#todos ul").append('<li>' + text + '</li>');
}.bind(this));