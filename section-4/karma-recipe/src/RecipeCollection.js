var app = window.app || {};
app.Collections = app.Collections || {};

app.Collections.Recipes = Backbone.Collection.extend({
  comparator: 'dateAdded',
  model: app.Models.Recipe,
  getRecipeNames: function() {
    return _.uniq(this.pluck('name'));
  },
  getNewestForName: function(recipeName) {
    var variations = this.where({name: recipeName});
    return _.last(variations);
  }
});
