let lunchMenuItems = {
	"Appetizer": {
		"Seafood": {
			"TEMPURA": "$5.00",
			"SHUMAI (shrimp)": "$3.50",
			"FRIED CALAMARI": "$4.00",
			"FRIED SOFT SHELL CRAB": "$5.50",
			"BROILED CLAMS, JAPANESE STLYE": "$4.75",
			"SCALLOPS, BUTTER YAKI or TERIYAKI": "$4.95",
			"BROILED JAPANESE SQUID": "$5.50"
		},
		"Meat": {
			"GYOZA": "$3.75",
			"BEEF NEGIMAKI (scallions rolled in beef)": "$4.95",
			"HARUMARI": "$3.75"
		},
		"Poultry": {
			"YAKITORI (chicken shish kebab)": "$4.00",
			"CHICKEN KARAAGE (deep fried seasoned chicken)": "$3.75",
			"CHICKEN MIYOSHI MAKI (ham, cheese, scallions rolled in chicken)": "$4.00",
			"CHICKEN TEMPURA": "$4.75"
		},
		"Vegetable": {
			"BROILED EGGPLANT (Japanese style)": "$3.95",
			"COLD BEAN CURD": "$3.50",
			"HOT BEAN CURD": "$4.25",
			"FRIED BEAN CURD": "$4.00",
			"VEGETABLES TEMPURA": "$4.00",
			"STEAMED VEGETABLES": "$2.50",
			"EDAMAME (soybeans)": "$2.00"
		},
		"Soup": {
			"MISO SOUP (tofu & seaweed)": "$1.00",
			"CLEAR SOUP (tofu & seaweed)": "$1.00"
		},
		"Salad": {
			"SALAD (with house dressing)": "$1.25",
			"MOYASHI SALAD (bean sprout)": "$1.25",
			"MOYASHI SALAD (bean sprout w/ crab meat)": "$2.50",
			"SEAWEED SALAD": "$3.00"
		}
	},
	"From the Sushi Bar Appetizer": {
		"SUSHI": "$6.25",
		"SASHIMI": "$7.50",
		"SUNOMONO (marinated seafood & vegetables)": {
			"A. EBI SU (shrimp & vegetables)": "$5.25",
			"B. KANA SU (crab meat & vegetables)": "$5.25",
			"C. TAKO SU (octopus & vegetables)": "$5.25",
			"D COMBINATIONS": "$6.00"
		}		
	},
	"Sushi": {
		"SHOGUN (the most assorted Sushi)"	: "$9.00",
		"MARIKO (assorted Sushi)" 			: "$8.00",
		"MAGURO (only Tuna)"				: "$13.00",
		"SUSHI MIYOSHI"						: "$25.00"
	},
	"Sashimi": {
		"Maguro (only Tuna)"				: "$14.50",
		"SASHIMI (assorted ocean delight, served with fluffy steamed rice)" : "$11.00",
		"SASHIMI MIYOSHI": "$27.00"
	},
	"Chirashi": {
		"CHIRASHI (fresh raw fish, pickled vegetables topped in seasoned rice)": "$10.00",
		"TEKKA DON (fresh tuna topped in seasoned rice)" : "$11.00"
	},
	"Makimono (Rolls)": {
		"FUTOMAKI (crab meat, egg, vegetables and seasoned rice rolled in seaweed)" : "$8.00",
		"KAPPA MAKI (cucumber & seasoned rice rolled in seaweed)": "$6.50",
		"OSHINKO MAKI (Japanese pickled vegetables & seasoned rice rolled in seaweed)" : "$6.50",
		"NORI MAKI (seasoned rice & cooked gourd strips rolled in seaweed)" : "$6.50",
		"TEKKA MAKI (tuna & seasoned rice rolled in seaweed)": "$8.50",
		"CALIFORNIA ROLLS (avocado, crab meat, cucumber)" : {
			"A. REGULAR (rice inside)" : "$8.00",
			"B. DOUBLE (rice inside & outisde)" : "$8.50",
			"C. HAND ROLL (cornet)" : "$8.00"
		},
		"SHRIMP TEMPURA (shrimps & vegetables dipped & deep fried, w/sauce over rice)": "$7.50",
		"SCALLOPS BUTTER YAKI or TERIYAKI (served with vegetables & rice)": "$6.95",
		"SALMON BUTTER YAKI or TERIYAKI (served with vegetables & rice)": "$6:75",
		"SHUMAI (shrimps & vegetables in a thin dough & deep fried w/ vegetables & rice)" : "$5.95",
		"TROUT BROILED (butter, teriyaki, or ginger sauce w/ vegetables & rice)" : "6.75"
	},
	"Beef": {
		"GINGER STEAK (thinly sliced beef w/ ginger sauce w/ vegetables & rice)": "$6.75",
		"FILET MIGNON TERIYAKI (gourmet teriyaki sauce & broiled to your taste, w/ mushrooms, vegetables & rice)" : "$8.95",
		"GYOZA (meat & vegetables in a thin dough, & pan fried, w/ vegetables & rice)": "$5.95",
		"BEEF NEGIMAKI (scallions rolled in beef w/ teriyaki sauce, w/ vegetables & rice)": "$7.50",
		"SUKIYAKI (thinly sliced beef w/ sukiyaki suace w/ vegetables & fluffy steamed rice)": "$7.95",
		"BEEF TERIYAKI (beef w/ teriyaki sauce broied to your taste w/ mushrooms, vegetables & rice)" :"$7.95"
	},
	"Poultry": {
		"CHICKEN TEMPURA (chicken & vegetables, batter dipped & deep fried w/ special sauce & rice)": "$6.50",
		"CHICKEN TERIYAKI (chicken w/ teriyaki sauce, mushrooms, vegetables & rice)": "$6.50",
		"CHIKI KATSU (golden deep fried chicken breast w/ special sauce, vegetables & rice)": "$6.50",
		"YAKITORI (broiled, seasoned chicken on bamboo skewers w/ vegetables & rice)": "$6.50",
		"KARAAGE (chicken seasoned /w ginger sauce & crispy fried, w/ vegetables & rice)": "$6.50",
		"GINGER CHICKEN (chicken w/ ginger sauce, vegetables & rice)": "$7.00"
	},
	"Pork": {
		"PORK TERIYAKI (pork w/ teriyaki sauce, mushrooms, vegetables & rice)": "$6.50",
		"GINGER PORK (thinly sliced pork w/ ginger sauce, vegetables & rice)": "$7.00",
		"TONKATSU (golden deep fried pork cutlet w/ special sauce, vegetables & rice)": "$6.50"
	},
	"Rice Delicacies": {
		"KATSU DON (pork culet)": "$6.50",
		"TEMPURA DON": "$6.50",
		"OYAKO DON (chicken & egg)": "$5.95",
		"UNAJU (broied eel)": "$9.50",
		"BEEF DON": "$6.50"
	},
	"Miyoshi Combination": {
		"WITH SUSHI": {
			"A. SUSHI, CHICKEN TERIYAKI & GYOZA": "$8.50",
			"B. SUSHI, PORK CUTLET & GYOZA": "$8.50",
			"C. SUSHI, BEEF STEAK TERIYAKI & GYOZA": "$9.25",
			"D. SUSHI, CHICKEN & SHRIMP TEMPURA & GYOZA": "$9.25"
		},
		"WITHOUT SUSHI": {
			"E. HARUMAKI (egg rolls), CHICKEN TERIYAKI & GYOZA": "$8.50",
			"F. HARUMAKI, PORK CUTLET & GYOZA": "$8.50",
			"G. HARUMAKI, BEEF STEAK TERIYAKI & GYOZA": "$9.25",
			"H. HARUMAKI, CHICKEN & SHRIMP TEMPURA & GYOZA": "$9.25"
		}
	},
	"Lunch Box (served w/ rice)": {
		"PORK LUNCH BOX": "$6.50",
		"BEEF LUNCH BOX": "$6.50",
		"CHICKEN LUNCH BOX": "6.50"
	},
	"Udon": {
		"NABEYAKI UDON (tempura, vegetables, egg & noodles cooked in soup)": "$7.25",
		"TEMPURA UDON (tempura, vegetables & noodles cooked in soup)": "$6.75",
		"BEEF UDON (beef, vegetables & noodles cooked in soup)": "$6.50",
		"PORK UDON (pork, vegetables & noodles cooked in soup)": "$6.50",
		"CHICKEN UDON (chicken, vegetables & noodles cooked in soup)": "$6.50"
	},
	"Yakisoba": {
		"BEEF YAKISOBA (sauteed noodles w/ beef & vegetables)": "$6.00",
		"PORK YAKISOBA (sauteed noodles w/ pork & vegetables)": "$6.00",
		"CHICKEN YAKISOBA (sauteed noodles w/ chicken & vegetables)": "$6.00",
		"SHRIMP YAKISOBA (sauteed noodles w/ shrimp & vegetables)": "$6.00",
	},
	"Side Dish": {
		"YASAI ITAME (sauteed vegetables)": {
			"A. ONLY VEGETABLES": "$4.00",
			"B. with BEEF": "$5.00",
			"C. with CHICKEN": "$4.75",
			"D. with PORK": "$4.75",
			"E. with SHRIMP": "$5.00",

		}
	}
}

let dinnerMenuItems = {
	"Appetizer": {
		"Seafood": {
			"TEMPURA": "$5.50",
			"RAINBOW TROUT TEMPURA": "$4.95",
			"SHUMAI (shrimp)": "$4.00",
			"FRIED CALAMARI": "$4.25",
			"FRIED SOFT SHELL CRAB (in season)": "$6.00",
			"BROILED CLAMS, JAPANESE STLYE": "$4.75",
			"SCALLOPS, BUTTER YAKI or TERIYAKI": "$5.25",
			"BROILED JAPANESE SQUID": "$6.00"
		},
		"Meat": {
			"GYOZA": "$4.00",
			"BEEF NEGIMAKI (scallions rolled in beef)": "$5.25",
			"HARUMARI": "$4.00"
		},
		"Poultry": {
			"YAKITORI (chicken shish kebab)": "$4.25",
			"CHICKEN KARAAGE (deep fried seasoned chicken)": "$4.00",
			"CHICKEN MIYOSHI MAKI (ham, cheese, scallions rolled in chicken)": "$4.50",
			"CHICKEN TEMPURA": "$4.75"
		},
		"Vegetable": {
			"BROILED EGGPLANT (Japanese style)": "$3.95",
			"COLD BEAN CURD": "$3.50",
			"HOT BEAN CURD": "$4.50",
			"FRIED BEAN CURD": "$4.50",
			"VEGETABLES TEMPURA": "$4.00",
			"STEAMED VEGETABLES": "$3.00",
			"EDAMAME (soybeans)": "$3.00",
			"MIYOSHI APPETIZER": "$6.50"
		},
		"Soup": {
			"MISO SOUP (tofu & seaweed)": "$1.25",
			"CLEAR SOUP (tofu & seaweed)": "$1.25",
			"GYOZA SOUP (gyoza, bean sprout, mushrooms & scallions)": "$3.50"
		},
		"Salad": {
			"SALAD (with house dressing)": "$1.50",
			"MOYASHI SALAD (bean sprout)": "$1.50",
			"CRAB MEAT SALAD (crab meat & bean sprout)": "$3.00",
			"SEAWEED SALAD": "$3.00"
		}
	},
	"From the Sushi Bar Appetizer": {
		"SUSHI": "$6.25",
		"SASHIMI": "$7.50",
		"SUNOMONO (marinated seafood & vegetables)": {
			"A. EBI SU (shrimp & vegetables)": "$5.25",
			"B. KANA SU (crab meat & vegetables)": "$5.25",
			"C. TAKO SU (octopus & vegetables)": "$5.25",
			"D COMBINATIONS": "$6.00"
		}		
	},
	"Tempura": {
		"SHRIMP TEMPURA (7 jumbo shrimps & vegetables)": "$12.95",
		"RAINBOW TROUT TEMPURA (strips of fresh trout & vegetables)": "$9.75",
		"CHICKEN TEMPURA (strips of chicken breast & vegetables)": "$9.75",
		"VEGETABLES TEMPURA (vegetables only)": "$7.95",
		"MIXED TEMPURA (shimp, chicken, crab meat & vegetables)": "$12.50",
		"SOFT SHELL CRAB TEMPURA (in season. tender soft shell crab & vegetables)": "$9.75",
		"LOBSTER TEMPURA (lobster tail & vegetables)": "$16.50",
	},
	"Seafood": {
		"SHRIMP TERIYAKI (sauteed jumbo shrumps w/ teriyaki sauce, sauteed fresh mushroom & vegetables)": "$12.95",
		"SCALLOPS, BUTTER YAKI or TERIYAKI (sauteed in butter or teriyaki sauce, w/ vegetables)" : "$12.00",
		"SOFT SHELL CRABS (in season, deep fried soft shell crabs w/ special soft, servered w/ vegetables)": "$15.00",
		"SHUMAI DINNER (finely chopped shrimps & vegetables in a thin dough & deep fried, served w/ vegetables)": "$9.50",
		"IKA SHOGA YAKI (broiled imported Japanese squid w/ ginger sauce & vegetables)": "$12.95",
		"KING CRAB LEGS (broiled Alaskan king crab legs w/ special sauce & vegetables)": "$14.75",
		"RAINBOW TROUT (served w/ vegetables)": {
			"A. With Ginger Sauce": "$9.75",
			"B. With Teriyaki Sauce": "$9.75",
			"C. Deep fried": "$9.75"
		},
		"LOBSTER TAIL, BUTTER YAKI or TERIYAKI (served w/ vegetables)": {
			"A. Single": "$16.00",
			"B. Twin": "$31.00"
		},
		"MIYOSHI SEAFOOD PLATTER (combination of ocean delight)": "$15.00",		
	},
	"Beef": {
		"BEEF TERIYAKI (teriyak sauce & broiled to your taste, w/ mushrooms & vegetables)": "$12.95",
		"BEEF NEGIMAKI (scallions rolled in thinly sliced sirlion steak w/ teriyaki sauce & vegetables)": "$12.95",
		"FILET MIGNON TERIYAKI (tender filet mignon broiled to your taste, sauteed fresh mushrooms w/ teriyaki sauce & vegetables)": "$14.50",
		"GYOZA DINNER (home-made gyoza: meat & vegetables in a thin dough & pan-fried w/ vegetables)": "$8.50",
		"GINGER STEAK (thinly sliced beef w/ ginger sauce & vegetables)": "$9.95",
		"BEEF CUTLET (golden deep fried sirloin steak w/ special sauce & vegetables)": "$13.50",
		"MIYOSHI STEAK (ginger sauce & broiled to your taste, w/ mushrooms & rice)": "$13.50"
	},
	"Poultry": {
		"CHICKEN TERIYAKI (boneless chicken & sauteed fresh mushrooms w/ teriyaki sauce & vegetables)": "$9.95",
		"CHICKEN KARAAGE (cubed chicken, seasoned w/ ginger sauce & crispy fried, served w/ vegetables)": "$9.95",
		"YAKITORI (broiled seasoned chicken on bamboo skewers w/ vegetables & rice)": "$9.95",
		"CHIKI KATSU (golden deep fried chicken breast w/ special sauce & vegetables)": "$9.95",
		"CHICKEN MIYOSHI MAKI (ham, cheese & scallions rolled in chicken breast, served w/ vegetables)": "$11.95",
		"SESAME CHICKEN (boneless chicken seasoned w/ sesami oil, soy sauce, sake & ginger, broiled, served w/ vegetables)": "$10.50",
		"CHICKEN TEMPURA (chicken, batter dipped & deep fried, served w/ special sauce)": "$9.95"
	},
	"Pork": {
		"PORK TERIYAKI (pork w/ teriyaki sauce, sauteed fresh mushrooms & vegetables)": "$9.95",
		"GINGER PORK (sauteed thinly sliced pork loin w/ ginger sauce & vegetables)": "$9.95",
		"TOKATSU (golden deep fried prok cutlet w/ special sauce & vegetables)": "$9.95"
	},
	"Vegetables": {
		"TOFU TERIYAKI (fried bean curd w/ teriyaki sauce served with mushroom & vegetables)": "$9.95",
		"VEGETABLES TEMPURA (vegetables batter dipped & deep fried, served w/ special sauce)": "$7.95"
	},
	"Miyoshi Combination Dinner": {
		"FILET MIGNON TERIYAKI": {
			"& LOBSTER TAIL": "$24.00",
			"& ALASKAN KING CRAB LEGS": "$19.50",
			"& SCALLOPS": "$18.00",
			"& SALMON STEAK": "$18.00",
			"& RAINBOW TROUT": "$18.00",
			"& CHICKEN TERIYAKI": "$17.50",
			"& SHRIMP TEMPURA": "$19.00",
			"& JAPANESE SQUID (Imported)": "$18.00",
			"& SOFT SHELL CRAB TEMPURA": "$19.00"
		},
		"BEEF STEAK TERIYAKI": {
			"& LOBSTER TAIL": "$23.00",
			"& ALASKAN KING CRAB LEGS": "$18.50",
			"& SCALLOPS": "$17.50",
			"& SALMON STEAK": "$17.50",
			"& RAINBOW TROUT": "$17.50",
			"& CHICKEN TERIYAKI": "$17.00",
			"& SHRIMP TEMPURA": "$18.00",
			"& JAPANESE SQUID (Imported)": "$17.50",
			"& SOFT SHELL CRAB TEMPURA": "$18.00"
		},
		"CHICKEN TERIYAKI": {
			"& LOBSTER TAIL": "$22.00",
			"& ALASKAN KING CRAB LEGS": "$17.50",
			"& SCALLOPS": "$17.00",
			"& SALMON STEAK": "$17.00",
			"& RAINBOW TROUT": "$17.00",
			"& BEEF TERIYAKI": "$17.00",
			"& SHRIMP TEMPURA": "$18.00",
			"& JAPANESE SQUID (Imported)": "$17.00",
			"& SOFT SHELL CRAB TEMPURA": "$17.00"
		}
	},
	"Odd Couple Combination": {
		"(served w/ Rice, Vegetables, Gyoza, Sushi, Sashimi)": "",
		"FILET MIGNON": "$19.00",
		"BEEF STEAK TERIYAKI": "$18.75",
		"CHICKEN TERIYAKI": "$16.50",
		"CHICKEN KARAAGE": "$16.50",
		"CHICKEN KATSU": "$16.50",
		"PORK TERIYAKI": "$16.50",
		"PORK KATSU": "$16.50",
		"ALASKAN KING CRAB LEGS": "$18.50",
		"SCALLOPS BUTTER OR TERIYAKI": "$17.50",
		"SALMON STEAK": "$17.50",
		"RAINBOW TROUT TEMURA": "$17.50",
		"RAINBOW TROUT TERIKYAKI": "$17.50",
		"SHRIMP TEMPURA": "$17.50",
		"SHRIMP TERIYAKI": "$18.00",
		"SOFT SHELL CRAB TEMPURA": "$18.00",
		"LOBSTER TAIL TEMPURA": "$23.00",
		"JAPANESE SQUID TEMPURA": "$16.50"
	},
	"Iron Pot Dish": {
		"BEEF SUKIYAKI": "$12.50",
		"CHICKEN SUKIYAKI": "$12.00",
		"SEAFOOD SUKIYAKI": "$13.95"
	},
	"Nabemono (Japanese Bouillabaisse)": {
		"YOSE NABE (filled w/ variety of seafoods & vegetables)": "$12.95",
		"SALMON NABE (filled w/ salmon & vegetables)": "$12.50",
		"BEEF NABE (filled w/ thinly sliced beef & vegetables)": "$11.75",
		"PORK NABE (filled w/ thinly sliced pork & fresh vegetables)": "$11.75",
		"CHICKEN NABE (filled w/ sliced chicken & vegetables)": "$11.75"
	},
	"Udon": {
		"NABEYAKI UDON (udon, tempura, vegetables & egg)" : "$8.95",
		"TEMPURA UDON": "$8.50",
		"BEEF UDON": "$8.00",
		"PORK UDON": "$8.00",
		"CHICKEN UDON": "$8.00",
		"VEGETABLE UDON": "$6.95"
	},
	"Rice Delicacies": {
		"All Don dishes served w/ sliced onion, scallion & egg cooked in sauce on top of rice": "",
		"KATSU DON (pork culet)": "$10.00",
		"CHICKEN KATSU DON (chicken cutlet)": "$10.00",
		"TROUT KATSU DON (rainbow trout)": "$9.75",
		"TEMPURA DON": "$9.75",
		"OYAKO DON (chicken)": "$7.95",
		"BEEF DON": "$9.75",
		"PORK DON": "$9.75",
		"UNAJU (imported eel broiled w/ delicious sauce, on top of rice)": "$13.50"
	},
	"Children's Menu": {
		"STEAK TERIYAKI": "$7.95",
		"CHICKEN TERIYAKI": "$6.50",
		"PORK TERIYAKI": "$6.50",
		"NEGIMAKI": "$7.50",
		"YAKITORI": "$6.50",
		"HARUMAKI (Japanese egg roll)": "$5.95",
		"SHUMAI": "$5.95",
		"CHICKEN KARAAGE": "$6.50"
	},
	"Side Dish": {
		"YASAI ITAME (sauteed vegetables)": {
			"A. ONLY VEGETABLES": "$4.25",
			"B. with BEEF": "$5.00",
			"C. with CHICKEN": "$4.75",
			"D. with PORK": "$4.75",
			"E. with SHRIMP": "$5.00",
			"F. with CRAB MEAT": "$5.00"
		},
		"SAUTEED FRESH MUSHROOMS": "$3.00",
		"STEAMED VEGETABLES": "$3.50"
	}
}

let sushiMenuItems = {
	"Sushi & Sashimi a la carte": {
		"MAGURO (tuna)": "$2.00",
		"MAGURO (white tuna)": "$2.00",
		"HAMACHI (yellow tail)": "$2.50",
		"SAKE (salmon fresh)": "$2.00",
		"SAKE (salmon smoked)": "$2.50",
		"HIRAME (fluke)": "$2.00",
		"SABA (mackerel)": "$1.95",
		"SAWARA (Spanish makerel)": "$2.00",
		"UNAGI (eel)": "$2.50",
		"EBI (shrimp)": "$1.95",
		"IKA (squid)": "$2.00",
		"TAKO (octopus)": "$2.25",
		"KANI (crab stick)": "$1.95",
		"TAMAGO (egg)": "$1.75",
		"MASAGO (fish eggs)": "$2.00",
		"IKURA (salmon roe)": "$2.50",
		"UNI (sea urchin)": "$3.00",
		"AMAEBI (sweet shrimp)": "M.P.",
		"TUNA TORO (tuna belly)": "M.P.",
		"MIRUGAI (giant clam)": "M.P.",
		"TAI (red snapper)": "$2.00",
		"SUZUKI (striped bass)": "$2.00",
		"HOKKIGAI (red clam)" :"$2.00",
		"HOTATE (scallop)": "$2.50"
	},
	"Special Sushi Roll":  {
		"SPECIAL TUNA ROLL (avocado, cucumber, fish eggs & tuna on the outside)": "$4.95",
		"ROCK'N ROLL (eel, avocado, cucumber & fish eggs, inside out)": "$3.95",
		"TAHITIAN ROLL (tuna, avocado, cucumber & macadamias nuts)": "$4.00",
		"TONGAN ROLL (cooked shrimp, cucumber, avocado & fish eggs)": "$3.50",
		"SHRIMP TEMPURA ROLL (shrimp, cucumber & fish eggs)": "$3.50",
		"SPIDER ROLL (soft shell crab & cucumber, inside out)": "$5.50",
		"HOT ROLL (deep fried white fish, crab, scallion, inside out)": "$4.50",
		"RAINBOW ROLL (salmon, tuna, snapper, crab, avocado, cucumber & fish eggs)": "$9.50",
		"DRAGON ROLL (eel, crab, avocado, cucumber & sesame seeds)": "$9.50",
		"PHIADELPHIA ROLL (smoked salmon, avocado & cream cheese)": "$5.00",
		"ALASKAN ROLL (smoked salmon, avacado, cucumber)": "$4.50",
		"BOSTON ROLL (shrimp, cucumber, lettuce & mayonnaise)": "$3.95",
		"CALIFORNIA ROLLS (avocado, crab meat, cucumber, etc)": {
			"A. REGULAR (rice inside)": "$3.25",
			"B. DOUBLE (rice inside and out)": "$3.75",
			"C. HAND ROLL (cornet)": "$3.25"
		}
	},
	"Hot and Spicy Roll": {
		"MEXICAN ROLL (tuna, scallion & hot mayonnaise, inside out)": "$3.95",
		"HAWAIIAN ROLL (spicy marinated tuna, scallion & hot pepper)": "$3.95",
		"SPICY SALMON ROLL (salmon, scallion & hot mayonnaise, inside out)": "$3.95",
		"SPICY SCALLOP ROLL (scallop, scallion & hot mayonnaise, inside out)": "$4.95",
		"SPICY CALIFORNIA ROLL (crab meat, avocado, cucumber & hot mayonnaise)": "$4.00"
	},
	"Regular Roll": {
		"KAPPA MAKI (cucumber)": "$2.75",
		"OSHINKO MAKI (pickled vegetables)": "$2.75",
		"NORI MAKI (cooked gourd strips)": "$3.00",
		"UNAKYU MAKI (imported broiled eel & cucumber)": "$4.00",
		"SAKE MAKI (salmon)": "$3.75",
		"TEKKA MAKI (tuna)": "$3.75",
		"KANI MAKI (crab meat)": "$3.25",
		"SALMON SKIN ROLL (cooked salmon skin)": "$3.75",
		"SMOKED SALMON ROLL": "$4.00",
		"HAMACHI MAKI (yellow tail)": "$4.00",
		"SABA MAKI (makerel)": "$3.25",
		"FUTOMAKI": "$4.50"
	}

}

let lunchMenuTable = document.getElementById('lunchMenuTable');
let dinnerMenuTable = document.getElementById('dinnerMenuTable');
let sushiMenuTable = document.getElementById('sushiMenuTable');

function populateTable(menuItems, menuTable) {
	for (let item in menuItems) {
		let itemTitle = document.createElement('th');
		itemTitle.className = "menu-item-title";
		itemTitle.colSpan = 2;
		itemTitle.innerHTML = item;
		menuTable.appendChild(itemTitle);

		for (let dish in menuItems[item]) {
			if (menuItems[item][dish] instanceof Object) {
				let tableRowElem = document.createElement('tr');
				let nameElem = document.createElement('td');
				nameElem.className = "menu-item";
				nameElem.innerHTML = dish;

				tableRowElem.appendChild(nameElem);
				menuTable.appendChild(tableRowElem);

				for (let innerDish in menuItems[item][dish]) {
					populateTableRow(innerDish, menuItems[item][dish][innerDish], true, menuTable);
				}
			} else {
				populateTableRow(dish, menuItems[item][dish], false, menuTable);
			}
		}
	}
}

function populateTableRow(dish, price, innerItem, menuTable) {
	let tableRowElem = document.createElement('tr');
	let nameElem = document.createElement('td');
	let priceElem = document.createElement('td');

	priceElem.className = "menu-item-price";

	innerItem ? nameElem.className = "menu-item inner-items" : "menu-item";

	nameElem.innerHTML = dish;
	priceElem.innerHTML = price;

	tableRowElem.appendChild(nameElem);
	tableRowElem.appendChild(priceElem);

	menuTable.appendChild(tableRowElem);
}

let lunchBtn = document.getElementById('lunchBtn');
let dinnerBtn = document.getElementById('dinnerBtn');
let sushiBtn = document.getElementById('sushiBtn');

let lunchMenu = document.getElementById('lunchMenuContainer');
let dinnerMenu = document.getElementById('dinnerMenuContainer');
let sushiMenu = document.getElementById('sushiMenuContainer');

lunchBtn.addEventListener('click', ()=> {
	lunchMenu.className += ' slide-in';
});
dinnerBtn.addEventListener('click', ()=> {
	dinnerMenu.className += ' slide-in';
});
sushiBtn.addEventListener('click', ()=> {
	sushiMenu.className += ' slide-in';
});

function closeMenuContainer() {
	lunchMenu.className = 'menu-container lunch';
	dinnerMenu.className = 'menu-container dinner';
	sushiMenu.className = 'menu-container sushi';
}

populateTable(lunchMenuItems, lunchMenuTable);
populateTable(dinnerMenuItems, dinnerMenuTable);
populateTable(sushiMenuItems, sushiMenuTable);