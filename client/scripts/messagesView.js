// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // let roomname = Rooms.selected;
    MessagesView.$chats.empty();
    let roomname = $('#roomSelector').val();
    let messages = Messages.getMessages();
    // console.log(messages);

    // iterate over the selected messages based on current room.
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['roomname'] === roomname) {
        // send each message to renderMessage.
        MessagesView.renderMessage(messages[i]);
      }
      // MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // call messageView, create our html template w/ username and message string.
    $('#chats').append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // console.log($(event.target).text());

    // push the current username to friends.js data structure
    Friends.addFriend($(event.target).text());
  }

};