const data = [
  {
    "Recipe": "Fried Egg",
    "Ingredients": "[Egg]",
    "Raw Ingredients": "[Egg]",
    "Recipe Source": "Farmhouse upgrade"
  },
  {
    "Recipe": "Omelet",
    "Ingredients": "[Egg, Milk]",
    "Raw Ingredients": "[Egg, Milk]",
    "Recipe Source": "Queen of Sauce, Spring 28, Year 1"
  },
  {
    "Recipe": "Salad",
    "Ingredients": "[Leek, Dandelion, Vinegar]",
    "Raw Ingredients": "[Leek, Dandelion, Vinegar]",
    "Recipe Source": "Emily - 3 Hearts"
  },
  {
    "Recipe": "Cheese Cauliflower",
    "Ingredients": "[Cauliflower, Cheese]",
    "Raw Ingredients": "[Cauliflower, Cheese]",
    "Recipe Source": "Pam - 3 Hearts"
  },
  {
    "Recipe": "Baked Fish",
    "Ingredients": "[Sunfish, Bream, Wheat Flour]",
    "Raw Ingredients": "[Sunfish, Bream, Wheat Flour]",
    "Recipe Source": "Queen of Sauce, Summer 7, Year 1"
  },
  {
    "Recipe": "Parsnip Soup",
    "Ingredients": "[Parsnip, Milk, Vinegar]",
    "Raw Ingredients": "[Parsnip, Milk, Vinegar]",
    "Recipe Source": "Caroline - 3 Hearts"
  },
  {
    "Recipe": "Vegetable Medley",
    "Ingredients": "[Tomato, Beet]",
    "Raw Ingredients": "[Tomato, Beet]",
    "Recipe Source": "Caroline - 7 Hearts"
  },
  {
    "Recipe": "Complete Breakfast",
    "Ingredients": "[Fried Egg, Milk, Hashbrowns, Pancakes]",
    "Raw Ingredients": "[Egg, Milk, Potato, Oil, Wheat Flour, Egg]",
    "Recipe Source": "Queen of Sauce, Spring 21, Year 2"
  },
  {
    "Recipe": "Fried Calamari",
    "Ingredients": "[Squid, Wheat Flour, Oil]",
    "Raw Ingredients": "[Squid, Wheat Flour, Oil]",
    "Recipe Source": "Jodi - 3 Hearts"
  },
  {
    "Recipe": "Strange Bun",
    "Ingredients": "[Wheat Flour, Periwinkle, Void Mayo]",
    "Raw Ingredients": "[Wheat Flour, Periwinkle, Void Mayo]",
    "Recipe Source": "Shane - 7 Hearts"
  },
  {
    "Recipe": "Lucky Lunch",
    "Ingredients": "[Sea Cucumber, Corn, Blue Jazz]",
    "Raw Ingredients": "[Sea Cucumber, Corn, Blue Jazz]",
    "Recipe Source": "Queen of Sauce, Spring 28, Year 2"
  },
  {
    "Recipe": "Fried Mushroom",
    "Ingredients": "[Common Mushroom, Morel, Oil]",
    "Raw Ingredients": "[Common Mushroom, Morel, Oil]",
    "Recipe Source": "Demetrius - 3 Hearts"
  },
  {
    "Recipe": "Pizza",
    "Ingredients": "[Wheat Flour, Tomato, Cheese]",
    "Raw Ingredients": "[Wheat Flour, Tomato, Cheese]",
    "Recipe Source": "Queen of Sauce, Spring 7, Year 2"
  },
  {
    "Recipe": "Bean Hotpot",
    "Ingredients": "[Green Bean, Green Bean]",
    "Raw Ingredients": "[Green Bean, Green Bean]",
    "Recipe Source": "Clint - 7 Hearts"
  },
  {
    "Recipe": "Glazed Yams",
    "Ingredients": "[Yam, Sugar]",
    "Raw Ingredients": "[Yam, Sugar]",
    "Recipe Source": "Queen of Sauce, Fall 21, Year 1"
  },
  {
    "Recipe": "Carp Surprise",
    "Ingredients": "[Carp, Carp, Carp, Carp]",
    "Raw Ingredients": "[Carp, Carp, Carp, Carp]",
    "Recipe Source": "Queen of Sauce, Summer 7, Year 2"
  },
  {
    "Recipe": "Hashbrowns",
    "Ingredients": "[Potato, Oil]",
    "Raw Ingredients": "[Potato, Oil]",
    "Recipe Source": "Queen of Sauce, Spring 14, Year 2"
  },
  {
    "Recipe": "Pancakes",
    "Ingredients": "[Wheat Flour, Egg]",
    "Raw Ingredients": "[Wheat Flour, Egg]",
    "Recipe Source": "Queen of Sauce, Summer 14, Year 1"
  },
  {
    "Recipe": "Salmon Dinner",
    "Ingredients": "[Salmon, Amaranth, Kale]",
    "Raw Ingredients": "[Salmon, Amaranth, Kale]",
    "Recipe Source": "Gus - 3 Hearts"
  },
  {
    "Recipe": "Fish Taco",
    "Ingredients": "[Tuna, Tortilla, Red Cabbage, Mayo]",
    "Raw Ingredients": "[Tuna, Corn, Red Cabbage, Mayo]",
    "Recipe Source": "Linus - 7 Hearts"
  },
  {
    "Recipe": "Crispy Bass",
    "Ingredients": "[Largemouth Bass, Wheat Flour, Oil]",
    "Raw Ingredients": "[Largemouth Bass, Wheat Flour, Oil]",
    "Recipe Source": "Kent - 3 Hearts"
  },
  {
    "Recipe": "Pepper Poppers",
    "Ingredients": "[Hot Pepper, Cheese]",
    "Raw Ingredients": "[Hot Pepper, Cheese]",
    "Recipe Source": "Shane - 3 Hearts"
  },
  {
    "Recipe": "Bread",
    "Ingredients": "[Wheat Flour]",
    "Raw Ingredients": "[Wheat Flour]",
    "Recipe Source": "Queen of Sauce, Summer 28, Year 1"
  },
  {
    "Recipe": "Tom Kha Soup",
    "Ingredients": "[Coconut, Shrimp, Common Mushroom]",
    "Raw Ingredients": "[Coconut, Shrimp, Common Mushroom]",
    "Recipe Source": "Sandy - 7 Hearts"
  },
  {
    "Recipe": "Trout Soup",
    "Ingredients": "[Rainbow Trout, Green Algae]",
    "Raw Ingredients": "[Rainbow Trout, Green Algae]",
    "Recipe Source": "Queen of Sauce, Fall 14, Year 1"
  },
  {
    "Recipe": "Chocolate Cake",
    "Ingredients": "[Wheat Flour, Sugar, Egg]",
    "Raw Ingredients": "[Wheat Flour, Sugar, Egg]",
    "Recipe Source": "Queen of Sauce, Winter 14, Year 1"
  },
  {
    "Recipe": "Pink Cake",
    "Ingredients": "[Melon, Wheat Flour, Sugar, Egg]",
    "Raw Ingredients": "[Melon, Wheat Flour, Sugar, Egg]",
    "Recipe Source": "Queen of Sauce, Summer 21, Year 2"
  },
  {
    "Recipe": "Rhubarb Pie",
    "Ingredients": "[Rhubarb, Wheat Flour, Sugar]",
    "Raw Ingredients": "[Rhubarb, Wheat Flour, Sugar]",
    "Recipe Source": "Marnie - 7 Hearts"
  },
  {
    "Recipe": "Cookie",
    "Ingredients": "[Wheat Flour, Sugar, Egg]",
    "Raw Ingredients": "[Wheat Flour, Sugar, Egg]",
    "Recipe Source": "Evelyn - 4-Heart Event"
  },
  {
    "Recipe": "Spaghetti",
    "Ingredients": "[Wheat Flour, Tomato]",
    "Raw Ingredients": "[Wheat Flour, Tomato]",
    "Recipe Source": "Lewis - 3 Hearts"
  },
  {
    "Recipe": "Fried Eel",
    "Ingredients": "[Eel, Oil]",
    "Raw Ingredients": "[Eel, Oil]",
    "Recipe Source": "George - 3 Hearts"
  },
  {
    "Recipe": "Spicy Eel",
    "Ingredients": "[Eel, Hot Pepper]",
    "Raw Ingredients": "[Eel, Hot Pepper]",
    "Recipe Source": "George - 7 Hearts"
  },
  {
    "Recipe": "Sashimi",
    "Ingredients": "[Fish]",
    "Raw Ingredients": "[Fish]",
    "Recipe Source": "Linus - 3 Hearts"
  },
  {
    "Recipe": "Maki Roll",
    "Ingredients": "[Fish, Seaweed, Rice]",
    "Raw Ingredients": "[Fish, Seaweed, Rice]",
    "Recipe Source": "Queen of Sauce, Summer 21, Year 1"
  },
  {
    "Recipe": "Tortilla",
    "Ingredients": "[Corn]",
    "Raw Ingredients": "[Corn]",
    "Recipe Source": "Queen of Sauce, Fall 7, Year 1"
  },
  {
    "Recipe": "Red Plate",
    "Ingredients": "[Red Cabbage, Radish]",
    "Raw Ingredients": "[Red Cabbage, Radish]",
    "Recipe Source": "Emily - 7 Hearts"
  },
  {
    "Recipe": "Eggplant Parmesan",
    "Ingredients": "[Eggplant, Tomato]",
    "Raw Ingredients": "[Eggplant, Tomato]",
    "Recipe Source": "Lewis - 7 Hearts"
  },
  {
    "Recipe": "Rice Pudding",
    "Ingredients": "[Milk, Sugar, Rice]",
    "Raw Ingredients": "[Milk, Sugar, Rice]",
    "Recipe Source": "Evelyn - 7 Hearts"
  },
  {
    "Recipe": "Ice Cream",
    "Ingredients": "[Milk, Sugar]",
    "Raw Ingredients": "[Milk, Sugar]",
    "Recipe Source": "Jodi - 7 Hearts"
  },
  {
    "Recipe": "Blueberry Tart",
    "Ingredients": "[Blueberry, Wheat Flour, Sugar, Egg]",
    "Raw Ingredients": "[Blueberry, Wheat Flour, Sugar, Egg]",
    "Recipe Source": "Pierre - 3 Hearts"
  },
  {
    "Recipe": "Autumn's Bounty",
    "Ingredients": "[Yam, Pumpkin]",
    "Raw Ingredients": "[Yam, Pumpkin]",
    "Recipe Source": "Demetrius - 7 Hearts"
  },
  {
    "Recipe": "Pumpkin Soup",
    "Ingredients": "[Pumpkin, Milk]",
    "Raw Ingredients": "[Pumpkin, Milk]",
    "Recipe Source": "Robin - 7 Hearts"
  },
  {
    "Recipe": "Super Meal",
    "Ingredients": "[Bok Choy, Cranberries, Artichoke]",
    "Raw Ingredients": "[Bok Choy, Cranberries, Artichoke]",
    "Recipe Source": "Kent - 7 Hearts"
  },
  {
    "Recipe": "Cranberry Sauce",
    "Ingredients": "[Cranberries, Sugar]",
    "Raw Ingredients": "[Cranberries, Sugar]",
    "Recipe Source": "Gus - 7 Hearts"
  },
  {
    "Recipe": "Stuffing",
    "Ingredients": "[Bread, Cranberries, Hazelnut]",
    "Raw Ingredients": "[Bread, Cranberries, Hazelnut]",
    "Recipe Source": "Pam - 7 Hearts"
  },
  {
    "Recipe": "Farmer's Lunch",
    "Ingredients": "[Omelet, Parsnip]",
    "Raw Ingredients": "[Egg, Milk, Parsnip]",
    "Recipe Source": "Farming Level 3"
  },
  {
    "Recipe": "Survival Burger",
    "Ingredients": "[Bread, Cave Carrot, Eggplant]",
    "Raw Ingredients": "[Bread, Cave Carrot, Eggplant]",
    "Recipe Source": "Foraging Level 8"
  },
  {
    "Recipe": "Dish O' The Sea",
    "Ingredients": "[Sardine, Sardine, Potato, Oil]",
    "Raw Ingredients": "[Sardine, Sardine, Potato, Oil]",
    "Recipe Source": "Fishing Level 3"
  },
  {
    "Recipe": "Miner's Treat",
    "Ingredients": "[Cave Carrot, Cave Carrot, Sugar, Milk]",
    "Raw Ingredients": "[Cave Carrot, Cave Carrot, Sugar, Milk]",
    "Recipe Source": "Mining Level 3"
  },
  {
    "Recipe": "Roots Platter",
    "Ingredients": "[Cave Carrot, Winter Root]",
    "Raw Ingredients": "[Cave Carrot, Winter Root]",
    "Recipe Source": "Combat Level 3"
  },
  {
    "Recipe": "Triple Shot Espresso",
    "Ingredients": "[Coffee, Coffee, Coffee]",
    "Raw Ingredients": "[Coffee, Coffee, Coffee]",
    "Recipe Source": "Stardrop Saloon - 5,000g"
  },
  {
    "Recipe": "Seafoam Pudding",
    "Ingredients": "[Flounder, Midnight Carp, Squid Ink]",
    "Raw Ingredients": "[Flounder, Midnight Carp, Squid Ink]",
    "Recipe Source": "Fishing Level 9"
  },
  {
    "Recipe": "Algae Soup",
    "Ingredients": "[Green Algae, Green Algae, Green Algae, Green Algae]",
    "Raw Ingredients": "[Green Algae, Green Algae, Green Algae, Green Algae]",
    "Recipe Source": "Clint - 3 Hearts"
  },
  {
    "Recipe": "Pale Broth",
    "Ingredients": "[White Algae, White Algae]",
    "Raw Ingredients": "[White Algae, White Algae]",
    "Recipe Source": "Marnie - 3 Hearts"
  },
  {
    "Recipe": "Plum Pudding",
    "Ingredients": "[Wild Plum, Wild Plum, Wheat Flour, Sugar]",
    "Raw Ingredients": "[Wild Plum, Wild Plum, Wheat Flour, Sugar]",
    "Recipe Source": "Queen of Sauce, Winter 7, Year 1"
  },
  {
    "Recipe": "Artichoke Dip",
    "Ingredients": "[Artichoke, Milk]",
    "Raw Ingredients": "[Artichoke, Milk]",
    "Recipe Source": "Queen of Sauce, Fall 28, Year 1"
  },
  {
    "Recipe": "Stir Fry",
    "Ingredients": "[Cave Carrot, Common Mushroom, Kale, Oil]",
    "Raw Ingredients": "[Cave Carrot, Common Mushroom, Kale, Oil]",
    "Recipe Source": "Queen of Sauce, Spring 7, Year 1"
  },
  {
    "Recipe": "Roasted Hazelnuts",
    "Ingredients": "[Hazelnut, Hazelnut, Hazelnut]",
    "Raw Ingredients": "[Hazelnut, Hazelnut, Hazelnut]",
    "Recipe Source": "Queen of Sauce, Summer 28, Year 2"
  },
  {
    "Recipe": "Pumpkin Pie",
    "Ingredients": "[Pumpkin, Wheat Flour, Milk, Sugar]",
    "Raw Ingredients": "[Pumpkin, Wheat Flour, Milk, Sugar]",
    "Recipe Source": "Queen of Sauce, Winter 21, Year 1"
  },
  {
    "Recipe": "Radish Salad",
    "Ingredients": "[Oil, Vinegar, Radish]",
    "Raw Ingredients": "[Oil, Vinegar, Radish]",
    "Recipe Source": "Queen of Sauce, Spring 21, Year 1"
  },
  {
    "Recipe": "Fruit Salad",
    "Ingredients": "[Blueberry, Melon, Apricot]",
    "Raw Ingredients": "[Blueberry, Melon, Apricot]",
    "Recipe Source": "Queen of Sauce, Fall 7, Year 2"
  },
  {
    "Recipe": "Blackberry Cobbler",
    "Ingredients": "[Blackberry, Blackberry, Sugar, Wheat Flour]",
    "Raw Ingredients": "[Blackberry, Blackberry, Sugar, Wheat Flour]",
    "Recipe Source": "Queen of Sauce, Fall 14, Year 2"
  },
  {
    "Recipe": "Cranberry Candy",
    "Ingredients": "[Cranberries, Apple, Sugar]",
    "Raw Ingredients": "[Cranberries, Apple, Sugar]",
    "Recipe Source": "Queen of Sauce, Winter 28, Year 1"
  },
  {
    "Recipe": "Bruschetta",
    "Ingredients": "[Bread, Oil, Tomato]",
    "Raw Ingredients": "[Bread, Oil, Tomato]",
    "Recipe Source": "Queen of Sauce, Winter 21, Year 2"
  },
  {
    "Recipe": "Coleslaw",
    "Ingredients": "[Red Cabbage, Vinegar, Mayo]",
    "Raw Ingredients": "[Red Cabbage, Vinegar, Mayo]",
    "Recipe Source": "Queen of Sauce, Spring 14, Year 1"
  },
  {
    "Recipe": "Fiddlehead Risotto",
    "Ingredients": "[Oil, Fiddlehead Fern, Garlic]",
    "Raw Ingredients": "[Oil, Fiddlehead Fern, Garlic]",
    "Recipe Source": "Queen of Sauce, Fall 28, Year 2"
  },
  {
    "Recipe": "Poppyseed Muffin",
    "Ingredients": "[Poppy, Wheat Flour, Sugar]",
    "Raw Ingredients": "[Poppy, Wheat Flour, Sugar]",
    "Recipe Source": "Queen of Sauce, Winter 7, Year 2"
  },
  {
    "Recipe": "Chowder",
    "Ingredients": "[Clam, Milk]",
    "Raw Ingredients": "[Clam, Milk]",
    "Recipe Source": "Willy - 3 Hearts"
  },
  {
    "Recipe": "Fish Stew",
    "Ingredients": "[Crayfish, Mussel, Periwinkle, Tomato]",
    "Raw Ingredients": "[Crayfish, Mussel, Periwinkle, Tomato]",
    "Recipe Source": "Willy - 7 Hearts"
  },
  {
    "Recipe": "Escargot",
    "Ingredients": "[Snail, Garlic]",
    "Raw Ingredients": "[Snail, Garlic]",
    "Recipe Source": "Willy - 5 Hearts"
  },
  {
    "Recipe": "Lobster Bisque",
    "Ingredients": "[Lobster, Milk]",
    "Raw Ingredients": "[Lobster, Milk]",
    "Recipe Source": "Willy - 9 Hearts or Queen of Sauce, Winter 14, Year 2"
  },
  {
    "Recipe": "Maple Bar",
    "Ingredients": "[Maple Syrup, Sugar, Wheat Flour]",
    "Raw Ingredients": "[Maple Syrup, Sugar, Wheat Flour]",
    "Recipe Source": "Queen of Sauce, Summer 14, Year 2"
  },
  {
    "Recipe": "Crab Cakes",
    "Ingredients": "[Crab, Wheat Flour, Egg, Oil]",
    "Raw Ingredients": "[Crab, Wheat Flour, Egg, Oil]",
    "Recipe Source": "Queen of Sauce, Fall 21, Year 2"
  },
  {
    "Recipe": "Shrimp Cocktail",
    "Ingredients": "[Tomato, Shrimp, Wild Horseradish]",
    "Raw Ingredients": "[Tomato, Shrimp, Wild Horseradish]",
    "Recipe Source": "Queen of Sauce, Winter 28, Year 2"
  },
  {
    "Recipe": "Ginger Ale",
    "Ingredients": "[Ginger, Ginger, Ginger, Sugar]",
    "Raw Ingredients": "[Ginger, Ginger, Ginger, Sugar]",
    "Recipe Source": "Volcano Dwarf Shop - 1,000g"
  },
  {
    "Recipe": "Banana Pudding",
    "Ingredients": "[Banana, Milk, Sugar]",
    "Raw Ingredients": "[Banana, Milk, Sugar]",
    "Recipe Source": "Ginger Island Trader - 30 Bone Fragments"
  },
  {
    "Recipe": "Mango Sticky Rice",
    "Ingredients": "[Mango, Coconut, Rice]",
    "Raw Ingredients": "[Mango, Coconut, Rice]",
    "Recipe Source": "Leo - 7 Hearts"
  },
  {
    "Recipe": "Poi",
    "Ingredients": "[Taro Root, Taro Root, Taro Root, Taro Root]",
    "Raw Ingredients": "[Taro Root, Taro Root, Taro Root, Taro Root]",
    "Recipe Source": "Leo - 3 Hearts"
  },
  {
    "Recipe": "Tropical Curry",
    "Ingredients": "[Coconut, Pineapple, Hot Pepper]",
    "Raw Ingredients": "[Coconut, Pineapple, Hot Pepper]",
    "Recipe Source": "Ginger Island Resort - 2,000g"
  },
  {
    "Recipe": "Squid Ink Ravioli",
    "Ingredients": "[Squid Ink, Wheat Flour, Tomato]",
    "Raw Ingredients": "[Squid Ink, Wheat Flour, Tomato]",
    "Recipe Source": "Combat Level 9"
  },
  {
    "Recipe": "Moss Soup",
    "Ingredients": "[Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss]",
    "Raw Ingredients": "[Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss, Moss]",
    "Recipe Source": "Foraging Level 3"
  }
]

 // counting the total number of each ingredient
function countIngredients(data) {
	const ingredientsCount = {};
	const rawIngredientsCount = {};
	data.forEach(recipe => {
		const ingredientsArray = recipe.Ingredients.slice(1, -1).split(','); // Parse the ingredients string into an array
		const rawIngredientsArray = recipe["Raw Ingredients"].slice(1, -1).split(','); // Parse the raw ingredients string into an array
		ingredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim(); // Remove any whitespace from the ingredient
			if (ingredientsCount[ingredient]) {
				ingredientsCount[ingredient]++;
			} else {
				ingredientsCount[ingredient] = 1;
			}
		});
		rawIngredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim(); // Remove any whitespace from the ingredient
			if (rawIngredientsCount[ingredient]) {
				rawIngredientsCount[ingredient]++;
			} else {
				rawIngredientsCount[ingredient] = 1;
			}
		});
	});
	return { ingredientsCount, rawIngredientsCount };
}

// update the ingredients list
function updateIngredientsList(ingredientsCount, listId) {
	const ingredientsList = document.getElementById(listId);
	ingredientsList.innerHTML = '';
	Object.keys(ingredientsCount).forEach(ingredient => {
		if (ingredientsCount[ingredient] > 0) {
			const li = document.createElement('li');
			li.textContent = `${ingredient}: ${ingredientsCount[ingredient]}`;
			ingredientsList.appendChild(li);
		}
	});
}

// handle checking/unchecking of recipes
function handleRecipeCheck(event) {
	const checked = event.target.checked;
	const recipeName = event.target.dataset.recipe;
	const recipe = data.find(recipe => recipe.Recipe === recipeName);
	if (checked) {
		// Subtract ingredients from total count
		const ingredientsArray = recipe.Ingredients.slice(1, -1).split(',');
		const rawIngredientsArray = recipe["Raw Ingredients"].slice(1, -1).split(',');
		ingredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim();
			if (ingredientsCount[ingredient]) {
				ingredientsCount[ingredient]--;
			}
		});
		rawIngredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim();
			if (rawIngredientsCount[ingredient]) {
				rawIngredientsCount[ingredient]--;
			}
		});
	} else {
		// Add ingredients back to total count
		const ingredientsArray = recipe.Ingredients.slice(1, -1).split(',');
		const rawIngredientsArray = recipe["Raw Ingredients"].slice(1, -1).split(',');
		ingredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim();
			if (ingredientsCount[ingredient] !== undefined) {
				ingredientsCount[ingredient]++;
			}
		});
		rawIngredientsArray.forEach(ingredient => {
			ingredient = ingredient.trim();
			if (rawIngredientsCount[ingredient] !== undefined) {
				rawIngredientsCount[ingredient]++;
			}
		});
	}
	updateIngredientsList(ingredientsCount, 'ingredients');
	updateIngredientsList(rawIngredientsCount, 'raw-ingredients');
}

// initialize the ingredients count
const { ingredientsCount, rawIngredientsCount } = countIngredients(data);

// populate recipes list
const recipesList = document.getElementById('recipes');
data.forEach(recipe => {
	const li = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.dataset.recipe = recipe.Recipe;
	checkbox.addEventListener('change', handleRecipeCheck);
	li.appendChild(checkbox);

	const recipeText = document.createTextNode(recipe.Recipe);
	const sourceSpan = document.createElement('span');
	sourceSpan.textContent = recipe["Recipe Source"] || ''; // use an empty string if source is undefined
	sourceSpan.className = 'tooltip'; // add a class for styling

	li.appendChild(recipeText);
	li.appendChild(sourceSpan);

	recipesList.appendChild(li);
});

// initialize the ingredients list
updateIngredientsList(ingredientsCount, 'ingredients');
updateIngredientsList(rawIngredientsCount, 'raw-ingredients');