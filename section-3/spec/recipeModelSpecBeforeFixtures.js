describe('A recipe', function() {
  it('should exist', function() {
    expect(app.Models.Recipe).toBeDefined();
  });

  it('should have certain defaults', function() {
    var recipe = new app.Models.Recipe();

    expect(recipe.get('name')).toEqual('Unnamed');
    expect(recipe.get('rating')).toEqual(0);
    expect(recipe.get('ingredients').length).toEqual(0);
    expect(recipe.get('instructions').length).toEqual(0);
  });

  it('should identify if it has nuts', function() {
    var noRestrictions = new app.Models.Recipe({
      name: 'Marinara',
      ingredients: [
        {
          baseIngredient: 'pomodoros',
          quantity: '8',
          modifier: 'crushed'
        },
        {
          baseIngredient: 'onion',
          quantity: '1',
          modifier: 'chopped'
        },
        {
          baseIngredient: 'garlic',
          quantity: '2 clove',
          modifier: 'minced'
        }
      ]
    });

    var withNuts = new app.Models.Recipe({
      name: 'Broccoli with Butter Sauce',
      ingredients: [
        {
          baseIngredient: 'broccoli',
          quantity: '1 head',
          modifier: ''
        },
        {
          baseIngredient: 'butter',
          quantity: '3 tablespoons',
          modifier: 'melted'
        },
        {
          baseIngredient: 'lemon',
          quantity: '1/4',
          modifier: 'juiced'
        },
        {
          baseIngredient: 'almonds',
          isNut: true,
          quantity: '1/2 cup',
          modifier: 'slivered'
        }
      ]
    });
    
    expect(noRestrictions.containsNuts()).toBeFalsy();
    expect(withNuts.containsNuts()).toBeTruthy();
  });
  it('should identify if it has eggs', function() {
    var noRestrictions = new app.Models.Recipe({
      name: 'Marinara',
      ingredients: [
        {
          baseIngredient: 'pomodoros',
          quantity: '8',
          modifier: 'crushed'
        },
        {
          baseIngredient: 'onion',
          quantity: '1',
          modifier: 'chopped'
        },
        {
          baseIngredient: 'garlic',
          quantity: '2 clove',
          modifier: 'minced'
        }
      ]
    });

    var withEggs = new app.Models.Recipe({
      name: 'Eggs Benedict',
      ingredients: [
        {
          baseIngredient: 'Eggs',
          isEggs: true,
          quantity: '4',
          modifier: ''
        },
        {
          baseIngredient: 'English Muffin',
          quantity: '2',
          modifier: ''
        },
        {
          baseIngredient: 'Canadian Bacon',
          quantity: '4 slices',
          modifier: 'julienned'
        },
        {
          baseIngredient: 'Hollandaise sauce',
          quantity: '1/2 cup',
          modifier: ''
        }
      ]
    });
    
    expect(noRestrictions.containsEggs()).toBeFalsy();
    expect(withEggs.containsEggs()).toBeTruthy();
  });
});
