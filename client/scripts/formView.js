// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    // event listener for submit button, invoke handleSubmit
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#message').on('click', () => { FormView.setStatus(false); });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API
    let newText = $('#message').val();
    // create message object to hold current rendered Room, username at global, text in the form;
    let newMessage = {
      username: App.username,
      text: newText,
      roomname: $('#roomSelector').val()
    };
    // post using Parse.create(messageObj)
    Parse.create(newMessage);
    // MessagesView.render();
    App.fetch();
    // App.fetch(App.stopSpinner);


    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};