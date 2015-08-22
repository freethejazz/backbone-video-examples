FIXTURES = window.FIXTURES || {};

FIXTURES.recipes = {
  noRestrictions: {
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
  },
  withNuts: {
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
  },
  withEggs: {
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
  },
  withMeat: {
    name: 'Chicken Parmesan',
    ingredients: [
      {
      baseIngredient: 'Chicken',
      isMeat: true,
      quantity: '1 breast',
      modifier: ''
    },
    {
      baseIngredient: 'Mozzerella Cheese',
      quantity: '8 ounces',
      modifier: 'shredded'
    },
    {
      baseIngredient: 'Pasta Sauce',
      quantity: '1 jar',
      modifier: ''
    },
    {
      baseIngredient: 'Breadcrumbs',
      quantity: '1 cup',
      modifier: ''
    }
    ]
  }
};
