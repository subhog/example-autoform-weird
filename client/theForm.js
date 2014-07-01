var schema = new SimpleSchema({
  name: {type: String, label: 'name', max: 80},
  type: {type: String, label: 'type', max: 80},
  nope: {type: String, label: 'nope', max: 80},
});


Template.theForm.helpers({

  schema: function() {
    return schema;
  },

  'classes': function() {
    return '_form ' + ((this.class) ? this.class : '');
  },

});




