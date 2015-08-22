describe('A recipe collection', function() {
  it('should exist', function() {
    expect(app.Collections.Recipes).toBeDefined();
  });

  it('should contain recipes', function() {
    var recipes = new app.Collections.Recipes([
      FIXTURES.recipes.noRestrictions,
      FIXTURES.recipes.withEggs
    ]);
    expect(recipes.length).toEqual(2);
    expect(recipes.first() instanceof app.Models.Recipe).toEqual(true);
  });

  it('should consolidate recipe names', function() {
    var recipes = new app.Collections.Recipes([
      FIXTURES.recipes.noRestrictions,
      FIXTURES.recipes.noRestrictions,
      FIXTURES.recipes.withEggs
    ]);

    expect(recipes.getRecipeNames()).toEqual(['Marinara', 'Eggs Benedict']);
  });

  it('should return the most recent recipe of a given name', function() {
    var recipes = new app.Collections.Recipes([
      FIXTURES.recipes.noRestrictionsRecent,
      FIXTURES.recipes.noRestrictions
    ]);

    var newestDate = recipes.getNewestForName('Marinara').get('dateAdded');

    expect(newestDate).toEqual(FIXTURES.recipes.noRestrictionsRecent.dateAdded);
  });
});
