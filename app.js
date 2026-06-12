const cards = [
  // Greetings and rescue phrases
  { category: "Greetings", german: "Guten Morgen", english: "Good morning", note: "Use in the morning." },
  { category: "Greetings", german: "Guten Tag", english: "Good day / hello", note: "Useful formal greeting during the day." },
  { category: "Greetings", german: "Guten Abend", english: "Good evening", note: "Use in the evening." },
  { category: "Greetings", german: "Gute Nacht", english: "Good night", note: "Used when leaving for bed or late at night." },
  { category: "Greetings", german: "Hallo", english: "Hello", note: "Informal." },
  { category: "Greetings", german: "Tschüss", english: "Bye", note: "Informal goodbye." },
  { category: "Greetings", german: "Auf Wiedersehen", english: "Goodbye", note: "Formal or neutral goodbye." },
  { category: "Greetings", german: "Bis bald", english: "See you soon", note: "Useful closing phrase." },
  { category: "Greetings", german: "Bis später", english: "See you later", note: "Useful closing phrase." },
  { category: "Greetings", german: "Mach's gut", english: "Take care", note: "Informal." },
  { category: "Greetings", german: "Noch einmal, bitte", english: "Again, please", note: "Use when you need repetition." },
  { category: "Greetings", german: "Bitte langsam", english: "Slowly, please", note: "Very useful for listening/oral exams." },
  { category: "Greetings", german: "Wie bitte?", english: "Pardon? / Sorry?", note: "Use when you did not hear clearly." },
  { category: "Greetings", german: "Ich verstehe nicht", english: "I do not understand", note: "Rescue phrase." },

  // Core questions
  { category: "Core Questions", german: "Wie heißt du?", english: "What is your name? informal", note: "Model: Ich heiße ..." },
  { category: "Core Questions", german: "Wie heißen Sie?", english: "What is your name? formal", note: "Model: Ich heiße ..." },
  { category: "Core Questions", german: "Wie ist dein Name?", english: "What is your name? informal", note: "Model: Mein Name ist ..." },
  { category: "Core Questions", german: "Wer bist du?", english: "Who are you? informal", note: "Model: Ich bin ..." },
  { category: "Core Questions", german: "Wer sind Sie?", english: "Who are you? formal", note: "Model: Ich bin ..." },
  { category: "Core Questions", german: "Wie geht es dir?", english: "How are you? informal", note: "Model: Mir geht es gut." },
  { category: "Core Questions", german: "Wie geht es Ihnen?", english: "How are you? formal", note: "Model: Mir geht es gut." },
  { category: "Core Questions", german: "Woher kommst du?", english: "Where are you from? informal", note: "Model: Ich komme aus ..." },
  { category: "Core Questions", german: "Woher kommen Sie?", english: "Where are you from? formal", note: "Model: Ich komme aus ..." },
  { category: "Core Questions", german: "Wo kommst du her?", english: "Where are you from? informal", note: "Same meaning as Woher kommst du?" },
  { category: "Core Questions", german: "Wo wohnst du?", english: "Where do you live? informal", note: "Model: Ich wohne in ..." },
  { category: "Core Questions", german: "Wo wohnen Sie?", english: "Where do you live? formal", note: "Model: Ich wohne in ..." },
  { category: "Core Questions", german: "Wie alt bist du?", english: "How old are you? informal", note: "Model: Ich bin ... Jahre alt." },
  { category: "Core Questions", german: "Wie alt sind Sie?", english: "How old are you? formal", note: "Model: Ich bin ... Jahre alt." },
  { category: "Core Questions", german: "Was ist dein Beruf?", english: "What is your profession? informal", note: "Model: Ich bin Student/in." },
  { category: "Core Questions", german: "Was machen Sie beruflich?", english: "What do you do professionally? formal", note: "Model: Ich bin ..." },
  { category: "Core Questions", german: "Was studierst du?", english: "What do you study?", note: "Model: Ich studiere ..." },
  { category: "Core Questions", german: "Was ist dein Traumberuf?", english: "What is your dream job?", note: "Model: Mein Traumberuf ist ..." },
  { category: "Core Questions", german: "Wie ist deine Telefonnummer?", english: "What is your telephone number? informal", note: "Model: Meine Telefonnummer ist ..." },
  { category: "Core Questions", german: "Können Sie Ihren Namen buchstabieren?", english: "Can you spell your name? formal", note: "Model: Ja, A-n-n-a." },
  { category: "Core Questions", german: "Kannst du deinen Namen buchstabieren?", english: "Can you spell your name? informal", note: "Model: Ja, M-a-r-k." },
  { category: "Core Questions", german: "Hast du Geschwister?", english: "Do you have siblings?", note: "Model: Ja, ich habe ... / Nein, ich habe keine Geschwister." },

  // Personal answer phrases
  { category: "Personal Answers", german: "Ich heiße ...", english: "My name is ...", note: "Use with Wie heißt du?" },
  { category: "Personal Answers", german: "Mein Name ist ...", english: "My name is ...", note: "Alternative introduction." },
  { category: "Personal Answers", german: "Ich bin ...", english: "I am ...", note: "Identity, age, profession." },
  { category: "Personal Answers", german: "Mir geht es gut", english: "I am well", note: "Answer to Wie geht es?" },
  { category: "Personal Answers", german: "Es geht", english: "So-so / it's okay", note: "Neutral answer." },
  { category: "Personal Answers", german: "Ich komme aus Jamaika", english: "I come from Jamaica", note: "Use aus with origin." },
  { category: "Personal Answers", german: "Ich wohne in Kingston", english: "I live in Kingston", note: "Use in with residence." },
  { category: "Personal Answers", german: "Ich bin zwanzig Jahre alt", english: "I am twenty years old", note: "Change the number for your age." },
  { category: "Personal Answers", german: "Meine Telefonnummer ist ...", english: "My telephone number is ...", note: "Say slowly for listening/oral work." },
  { category: "Personal Answers", german: "Mein Familienname ist ...", english: "My family name is ...", note: "Form vocabulary." },
  { category: "Personal Answers", german: "Mein Vorname ist ...", english: "My first name is ...", note: "Form vocabulary." },
  { category: "Personal Answers", german: "Ich bin ledig", english: "I am single / unmarried", note: "Family status." },
  { category: "Personal Answers", german: "Ich bin verheiratet", english: "I am married", note: "Family status." },
  { category: "Personal Answers", german: "Ich bin nicht verheiratet", english: "I am not married", note: "Uses nicht." },
  { category: "Personal Answers", german: "Mein Traumberuf ist ...", english: "My dream job is ...", note: "Teacher-note phrase." },
  { category: "Personal Answers", german: "Ich studiere ...", english: "I study ...", note: "Student phrase." },

  // Verbs
  { category: "Verbs", german: "sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie/sie sind", english: "to be", note: "Identity and description." },
  { category: "Verbs", german: "heißen: ich heiße, du heißt, er/sie/es heißt, wir heißen, ihr heißt, Sie/sie heißen", english: "to be called", note: "Names." },
  { category: "Verbs", german: "wohnen: ich wohne, du wohnst, er wohnt, wir wohnen, ihr wohnt, Sie wohnen", english: "to live/reside", note: "Regular verb." },
  { category: "Verbs", german: "kommen: ich komme, du kommst, er kommt, wir kommen, ihr kommt, Sie kommen", english: "to come", note: "Origin: Ich komme aus ..." },
  { category: "Verbs", german: "studieren: ich studiere, du studierst, er studiert, wir studieren", english: "to study", note: "Regular verb." },
  { category: "Verbs", german: "essen: ich esse, du isst, er/sie/es isst, wir essen, ihr esst, Sie essen", english: "to eat", note: "Vowel change in du/er/sie/es." },
  { category: "Verbs", german: "trinken: ich trinke, du trinkst, er trinkt, wir trinken", english: "to drink", note: "Regular verb." },
  { category: "Verbs", german: "nehmen: ich nehme, du nimmst, er/sie/es nimmt, wir nehmen", english: "to take", note: "Restaurant phrase: Ich nehme ..." },
  { category: "Verbs", german: "möchten: ich möchte, du möchtest, er möchte, wir möchten", english: "would like", note: "Restaurant phrase: Ich möchte ..." },
  { category: "Verbs", german: "mögen: ich mag, du magst, er mag, wir mögen", english: "to like", note: "Preference phrase: Ich mag ..." },
  { category: "Verbs", german: "machen: ich mache, du machst, er macht, wir machen", english: "to do / make", note: "Was machst du täglich?" },
  { category: "Verbs", german: "können: ich kann, du kannst, er kann, wir können, ihr könnt, Sie können", english: "can / be able to", note: "Modal verb." },
  { category: "Verbs", german: "müssen: ich muss, du musst, er muss, wir müssen, ihr müsst, Sie müssen", english: "must / have to", note: "Modal verb." },
  { category: "Verbs", german: "dürfen: ich darf, du darfst, er darf, wir dürfen, ihr dürft, Sie dürfen", english: "may / be allowed to", note: "Modal verb." },
  { category: "Verbs", german: "aufstehen: Ich stehe um sechs Uhr auf", english: "to get up: I get up at six o'clock", note: "Separable verb." },

  // Articles and grammar phrases
  { category: "Articles & Negation", german: "der Tisch", english: "the table / desk", note: "Masculine definite article." },
  { category: "Articles & Negation", german: "die Uhr", english: "the clock / watch", note: "Feminine definite article." },
  { category: "Articles & Negation", german: "das Buch", english: "the book", note: "Neuter definite article." },
  { category: "Articles & Negation", german: "die Stühle", english: "the chairs", note: "Plural definite article." },
  { category: "Articles & Negation", german: "ein Tisch", english: "a table", note: "Masculine nominative." },
  { category: "Articles & Negation", german: "eine Lampe", english: "a lamp", note: "Feminine nominative." },
  { category: "Articles & Negation", german: "ein Heft", english: "a notebook", note: "Neuter nominative." },
  { category: "Articles & Negation", german: "Das ist ein Buch", english: "That is a book", note: "With sein, use nominative." },
  { category: "Articles & Negation", german: "Das ist kein Stuhl", english: "That is not a chair", note: "Negation with a noun." },
  { category: "Articles & Negation", german: "Ich habe keine Kinder", english: "I have no children", note: "Plural negative article." },
  { category: "Articles & Negation", german: "Ich mag keinen Fisch", english: "I do not like fish", note: "Masculine accusative: keinen." },
  { category: "Articles & Negation", german: "Ich trinke keine Cola", english: "I do not drink cola", note: "Feminine accusative: keine." },
  { category: "Articles & Negation", german: "Die Kamera funktioniert nicht", english: "The camera does not work", note: "Use nicht with the verb phrase." },
  { category: "Articles & Negation", german: "Ich esse einen Hamburger", english: "I eat a hamburger", note: "Masculine accusative: einen." },
  { category: "Articles & Negation", german: "Ich möchte eine Suppe", english: "I would like a soup", note: "Feminine object." },
  { category: "Articles & Negation", german: "Ich möchte ein Brötchen", english: "I would like a roll", note: "Neuter object." },

  // Numbers and time
  { category: "Numbers & Time", german: "null", english: "0", note: "Number." },
  { category: "Numbers & Time", german: "eins", english: "1", note: "Number." },
  { category: "Numbers & Time", german: "zwei", english: "2", note: "Number." },
  { category: "Numbers & Time", german: "drei", english: "3", note: "Number." },
  { category: "Numbers & Time", german: "vier", english: "4", note: "Number." },
  { category: "Numbers & Time", german: "fünf", english: "5", note: "Number." },
  { category: "Numbers & Time", german: "sechs", english: "6", note: "Number." },
  { category: "Numbers & Time", german: "sieben", english: "7", note: "Number." },
  { category: "Numbers & Time", german: "acht", english: "8", note: "Number." },
  { category: "Numbers & Time", german: "neun", english: "9", note: "Number." },
  { category: "Numbers & Time", german: "zehn", english: "10", note: "Number." },
  { category: "Numbers & Time", german: "elf", english: "11", note: "Number." },
  { category: "Numbers & Time", german: "zwölf", english: "12", note: "Number." },
  { category: "Numbers & Time", german: "dreizehn", english: "13", note: "Number." },
  { category: "Numbers & Time", german: "vierzehn", english: "14", note: "Number." },
  { category: "Numbers & Time", german: "fünfzehn", english: "15", note: "Number." },
  { category: "Numbers & Time", german: "sechzehn", english: "16", note: "Number." },
  { category: "Numbers & Time", german: "siebzehn", english: "17", note: "Number." },
  { category: "Numbers & Time", german: "achtzehn", english: "18", note: "Number." },
  { category: "Numbers & Time", german: "neunzehn", english: "19", note: "Number." },
  { category: "Numbers & Time", german: "zwanzig", english: "20", note: "Number." },
  { category: "Numbers & Time", german: "einundzwanzig", english: "21", note: "German says one-and-twenty." },
  { category: "Numbers & Time", german: "dreißig", english: "30", note: "Number." },
  { category: "Numbers & Time", german: "vierzig", english: "40", note: "Number." },
  { category: "Numbers & Time", german: "fünfzig", english: "50", note: "Number." },
  { category: "Numbers & Time", german: "sechzig", english: "60", note: "Number." },
  { category: "Numbers & Time", german: "siebzig", english: "70", note: "Number." },
  { category: "Numbers & Time", german: "achtzig", english: "80", note: "Number." },
  { category: "Numbers & Time", german: "neunzig", english: "90", note: "Number." },
  { category: "Numbers & Time", german: "hundert", english: "100", note: "Number." },
  { category: "Numbers & Time", german: "tausend", english: "1000", note: "Number." },
  { category: "Numbers & Time", german: "Wie spät ist es?", english: "What time is it?", note: "Time question." },
  { category: "Numbers & Time", german: "Wie viel Uhr ist es?", english: "What time is it?", note: "Alternate time question." },
  { category: "Numbers & Time", german: "Es ist acht Uhr", english: "It is eight o'clock", note: "Exact time." },
  { category: "Numbers & Time", german: "Es ist halb neun", english: "It is half past eight", note: "German halb neun means halfway to nine." },
  { category: "Numbers & Time", german: "um sechs Uhr", english: "at six o'clock", note: "Use um for time of an event." },
  { category: "Numbers & Time", german: "von neun bis elf Uhr", english: "from nine until eleven o'clock", note: "Use von ... bis ... for a span." },

  // Daily routine and weekdays
  { category: "Routine", german: "Was machst du täglich?", english: "What do you do every day?", note: "Daily-routine question." },
  { category: "Routine", german: "Um sechs Uhr stehe ich auf", english: "At six o'clock I get up", note: "Separable verb: stehe ... auf." },
  { category: "Routine", german: "Ich putze meine Zähne", english: "I brush my teeth", note: "Routine phrase." },
  { category: "Routine", german: "Um halb sieben frühstücke ich", english: "At half past six I eat breakfast", note: "Time phrase." },
  { category: "Routine", german: "Ich gehe zur Universität", english: "I go to the university", note: "Routine phrase." },
  { category: "Routine", german: "Ich mache Hausaufgaben", english: "I do homework", note: "machen phrase." },
  { category: "Routine", german: "Morgens frühstücke ich", english: "In the mornings I eat breakfast", note: "Time-of-day phrase." },
  { category: "Routine", german: "Nachmittags treffe ich Freunde", english: "In the afternoons I meet friends", note: "Time-of-day phrase." },
  { category: "Routine", german: "Abends sehe ich fern", english: "In the evenings I watch TV", note: "Routine phrase." },
  { category: "Weekdays", german: "Montag", english: "Monday", note: "Weekday." },
  { category: "Weekdays", german: "Dienstag", english: "Tuesday", note: "Weekday." },
  { category: "Weekdays", german: "Mittwoch", english: "Wednesday", note: "Weekday." },
  { category: "Weekdays", german: "Donnerstag", english: "Thursday", note: "Weekday." },
  { category: "Weekdays", german: "Freitag", english: "Friday", note: "Weekday." },
  { category: "Weekdays", german: "Samstag", english: "Saturday", note: "Weekday." },
  { category: "Weekdays", german: "Sonntag", english: "Sunday", note: "Weekday." },
  { category: "Weekdays", german: "Montags gehe ich ins Kino", english: "On Mondays I go to the cinema", note: "No comma needed after Montags." },
  { category: "Weekdays", german: "Dienstags tanze ich", english: "On Tuesdays I dance", note: "Weekday habit." },
  { category: "Weekdays", german: "Donnerstags spiele ich Tennis", english: "On Thursdays I play tennis", note: "Weekday habit." },
  { category: "Weekdays", german: "Sonntags besuche ich meine Familie", english: "On Sundays I visit my family", note: "Weekday habit." },

  // Family
  { category: "Family", german: "die Familie", english: "family", note: "Noun with article." },
  { category: "Family", german: "die Mutter", english: "mother", note: "Noun with article." },
  { category: "Family", german: "der Vater", english: "father", note: "Noun with article." },
  { category: "Family", german: "die Schwester", english: "sister", note: "Noun with article." },
  { category: "Family", german: "der Bruder", english: "brother", note: "Noun with article." },
  { category: "Family", german: "die Eltern", english: "parents", note: "Plural." },
  { category: "Family", german: "die Großmutter / die Oma", english: "grandmother / grandma", note: "Family member." },
  { category: "Family", german: "der Großvater / der Opa", english: "grandfather / grandpa", note: "Family member." },
  { category: "Family", german: "die Tante", english: "aunt", note: "Family member." },
  { category: "Family", german: "der Onkel", english: "uncle", note: "Family member." },
  { category: "Family", german: "die Geschwister", english: "siblings", note: "Usually plural." },
  { category: "Family", german: "Ich habe eine Schwester und einen Bruder", english: "I have a sister and a brother", note: "eine Schwester; einen Bruder." },
  { category: "Family", german: "Ich habe keine Geschwister", english: "I have no siblings", note: "Negative plural." },
  { category: "Family", german: "Meine Mutter ist Lehrerin", english: "My mother is a teacher", note: "Profession phrase." },
  { category: "Family", german: "Mein Vater ist Mechaniker", english: "My father is a mechanic", note: "Profession phrase." },

  // Classroom and household objects
  { category: "Classroom", german: "die Tafel", english: "board", note: "Classroom object." },
  { category: "Classroom", german: "die Tür", english: "door", note: "Classroom object." },
  { category: "Classroom", german: "die Uhr", english: "clock / watch", note: "Classroom or time noun." },
  { category: "Classroom", german: "die Wand", english: "wall", note: "Classroom object." },
  { category: "Classroom", german: "der Bleistift", english: "pencil", note: "Classroom object." },
  { category: "Classroom", german: "der Kugelschreiber / der Kuli", english: "pen", note: "Classroom object." },
  { category: "Classroom", german: "der Tisch", english: "table / desk", note: "Classroom object." },
  { category: "Classroom", german: "der Stuhl", english: "chair", note: "Classroom object." },
  { category: "Classroom", german: "das Buch", english: "book", note: "Classroom object." },
  { category: "Classroom", german: "das Fenster", english: "window", note: "Classroom object." },
  { category: "Classroom", german: "das Heft", english: "notebook", note: "Classroom object." },
  { category: "Classroom", german: "das Papier", english: "paper", note: "Classroom object." },
  { category: "Classroom", german: "der Radiergummi", english: "eraser", note: "Classroom object." },
  { category: "Classroom", german: "das Lineal", english: "ruler", note: "Classroom object." },
  { category: "Classroom", german: "der Papierkorb", english: "wastepaper basket", note: "Classroom object." },
  { category: "Classroom", german: "Wie schreibt man das?", english: "How do you write/spell that?", note: "Useful class phrase." },
  { category: "Classroom", german: "Buchstabieren Sie bitte", english: "Please spell it", note: "Formal instruction." },

  { category: "Home & Rooms", german: "der Elektroherd", english: "electric stove", note: "Household object." },
  { category: "Home & Rooms", german: "der Kühlschrank", english: "refrigerator", note: "Household object." },
  { category: "Home & Rooms", german: "die Spüle", english: "sink", note: "Kitchen object." },
  { category: "Home & Rooms", german: "die Lampe", english: "lamp", note: "Household object." },
  { category: "Home & Rooms", german: "der Stecker", english: "plug", note: "Household object." },
  { category: "Home & Rooms", german: "die Steckdose", english: "socket", note: "Household object." },
  { category: "Home & Rooms", german: "die Batterie", english: "battery", note: "Household object." },
  { category: "Home & Rooms", german: "der Wasserhahn", english: "tap / faucet", note: "Household object." },
  { category: "Home & Rooms", german: "die Kamera", english: "camera", note: "Household/object vocabulary." },
  { category: "Home & Rooms", german: "das Waschbecken", english: "washbasin", note: "Bathroom object." },
  { category: "Home & Rooms", german: "der Taschenrechner", english: "calculator", note: "Object vocabulary." },
  { category: "Home & Rooms", german: "der Topf", english: "pot", note: "Kitchen object." },
  { category: "Home & Rooms", german: "Meine Kamera ist kaputt", english: "My camera is broken", note: "Object problem phrase." },
  { category: "Home & Rooms", german: "Die Batterie ist leer", english: "The battery is empty/dead", note: "Object problem phrase." },
  { category: "Home & Rooms", german: "das Wohnzimmer", english: "living room", note: "Room." },
  { category: "Home & Rooms", german: "das Schlafzimmer", english: "bedroom", note: "Room." },
  { category: "Home & Rooms", german: "die Küche", english: "kitchen", note: "Room." },
  { category: "Home & Rooms", german: "der Flur", english: "hallway", note: "Room/area." },
  { category: "Home & Rooms", german: "das Bad", english: "bathroom", note: "Room." },
  { category: "Home & Rooms", german: "der Balkon", english: "balcony", note: "Apartment feature." },
  { category: "Home & Rooms", german: "die Couch", english: "couch", note: "Furniture." },
  { category: "Home & Rooms", german: "der Sessel", english: "armchair", note: "Furniture." },
  { category: "Home & Rooms", german: "der Spiegel", english: "mirror", note: "Furniture/object." },
  { category: "Home & Rooms", german: "der Schreibtisch", english: "desk", note: "Furniture." },
  { category: "Home & Rooms", german: "der Kleiderschrank", english: "wardrobe", note: "Furniture." },
  { category: "Home & Rooms", german: "der Vorhang", english: "curtain", note: "Furniture/object." },
  { category: "Home & Rooms", german: "Meine Wohnung ist klein, aber hell", english: "My apartment is small but bright", note: "Housing description." },
  { category: "Home & Rooms", german: "Die Wohnung hat eine Küche und ein Bad", english: "The apartment has a kitchen and a bathroom", note: "Housing description." },
  { category: "Home & Rooms", german: "Ich habe keinen Balkon", english: "I do not have a balcony", note: "Negative housing sentence." },

  // Food and restaurant
  { category: "Food & Restaurant", german: "der Hamburger", english: "hamburger", note: "Food." },
  { category: "Food & Restaurant", german: "der Salat", english: "salad", note: "Food." },
  { category: "Food & Restaurant", german: "die Pizza", english: "pizza", note: "Food." },
  { category: "Food & Restaurant", german: "die Suppe", english: "soup", note: "Food." },
  { category: "Food & Restaurant", german: "das Brötchen", english: "bread roll", note: "Food." },
  { category: "Food & Restaurant", german: "das Ei", english: "egg", note: "Food." },
  { category: "Food & Restaurant", german: "der Fisch", english: "fish", note: "Food." },
  { category: "Food & Restaurant", german: "die Kartoffeln", english: "potatoes", note: "Food." },
  { category: "Food & Restaurant", german: "das Gemüse", english: "vegetables", note: "Food." },
  { category: "Food & Restaurant", german: "die Pommes frites", english: "fries", note: "Food." },
  { category: "Food & Restaurant", german: "die Butter", english: "butter", note: "Food." },
  { category: "Food & Restaurant", german: "die Marmelade", english: "jam", note: "Food." },
  { category: "Food & Restaurant", german: "das Mineralwasser", english: "mineral water", note: "Drink." },
  { category: "Food & Restaurant", german: "der Tee", english: "tea", note: "Drink." },
  { category: "Food & Restaurant", german: "der Kaffee", english: "coffee", note: "Drink." },
  { category: "Food & Restaurant", german: "die Cola", english: "cola", note: "Drink." },
  { category: "Food & Restaurant", german: "Was möchten Sie bestellen?", english: "What would you like to order?", note: "Restaurant question." },
  { category: "Food & Restaurant", german: "Ich möchte eine Suppe", english: "I would like a soup", note: "Restaurant answer." },
  { category: "Food & Restaurant", german: "Ich nehme einen Salat", english: "I will take a salad", note: "Restaurant answer." },
  { category: "Food & Restaurant", german: "Was möchten Sie trinken?", english: "What would you like to drink?", note: "Restaurant question." },
  { category: "Food & Restaurant", german: "Ich möchte ein Glas Mineralwasser", english: "I would like a glass of mineral water", note: "Restaurant answer." },
  { category: "Food & Restaurant", german: "Wie viel kostet das?", english: "How much does that cost?", note: "Price question." },
  { category: "Food & Restaurant", german: "Das macht siebzehn Euro", english: "That makes seventeen euros", note: "Price phrase." },
  { category: "Food & Restaurant", german: "das Trinkgeld", english: "the tip", note: "Restaurant vocabulary." },
  { category: "Food & Restaurant", german: "Wie schmeckt das?", english: "How does that taste?", note: "Taste question." },
  { category: "Food & Restaurant", german: "Das schmeckt!", english: "That tastes good!", note: "Taste comment." },
  { category: "Food & Restaurant", german: "Lecker!", english: "Delicious!", note: "Taste comment." },
  { category: "Food & Restaurant", german: "Es gefällt mir", english: "I like it / it pleases me", note: "Preference comment." },
  { category: "Food & Restaurant", german: "Es gefällt mir nicht", english: "I do not like it", note: "Negative preference." },
  { category: "Food & Restaurant", german: "Mein Lieblingsessen ist ...", english: "My favorite food is ...", note: "Teacher-note phrase." },
  { category: "Food & Restaurant", german: "Mein Lieblingsgetränk ist ...", english: "My favorite drink is ...", note: "Teacher-note phrase." },
  { category: "Food & Restaurant", german: "Morgens esse ich ein Brötchen", english: "In the morning I eat a roll", note: "Meal sentence." },
  { category: "Food & Restaurant", german: "Abends esse ich Gemüse und Fisch", english: "In the evening I eat vegetables and fish", note: "Meal sentence." },

  // Hobbies and preferences
  { category: "Hobbies", german: "Was machst du gern in deiner Freizeit?", english: "What do you like to do in your free time?", note: "Hobby question." },
  { category: "Hobbies", german: "Ich lese gern", english: "I like to read", note: "gern phrase." },
  { category: "Hobbies", german: "Ich schwimme gern", english: "I like to swim", note: "gern phrase." },
  { category: "Hobbies", german: "Ich spiele gern Tennis", english: "I like to play tennis", note: "gern phrase." },
  { category: "Hobbies", german: "Ich spiele gern Fußball", english: "I like to play football/soccer", note: "gern phrase." },
  { category: "Hobbies", german: "Ich singe gern", english: "I like to sing", note: "gern phrase." },
  { category: "Hobbies", german: "Ich laufe gern", english: "I like to run", note: "gern phrase." },
  { category: "Hobbies", german: "Ich fotografiere gern", english: "I like to take photographs", note: "gern phrase." },
  { category: "Hobbies", german: "Ich höre gern Musik", english: "I like to listen to music", note: "gern phrase." },
  { category: "Hobbies", german: "Ich treffe gern Freunde", english: "I like to meet friends", note: "gern phrase." },
  { category: "Hobbies", german: "Ich mag lesen", english: "I like reading / to read", note: "mögen + infinitive." },
  { category: "Hobbies", german: "Ich mag Musik", english: "I like music", note: "mögen + noun." },
  { category: "Hobbies", german: "Ich sehe nicht so gern fern", english: "I do not like watching TV that much", note: "Preference phrase." },

  // Postcards and writing
  { category: "Postcards", german: "Liebe Anna,", english: "Dear Anna,", note: "Use Liebe for a female recipient or close friend." },
  { category: "Postcards", german: "Lieber Daniel,", english: "Dear Daniel,", note: "Use Lieber for a male recipient or close friend." },
  { category: "Postcards", german: "die Zeit hier ist schön", english: "the time here is nice", note: "Postcard body phrase." },
  { category: "Postcards", german: "Ich wohne in einem kleinen Hotel", english: "I am staying/living in a small hotel", note: "Postcard sentence." },
  { category: "Postcards", german: "Mein Zimmer hat ein Bad und einen Balkon", english: "My room has a bathroom and a balcony", note: "Postcard/housing sentence." },
  { category: "Postcards", german: "Dann schwimme ich oder lese ein Buch", english: "Then I swim or read a book", note: "Postcard activity." },
  { category: "Postcards", german: "Abends essen wir im Restaurant", english: "In the evenings we eat in the restaurant", note: "Postcard activity." },
  { category: "Postcards", german: "Herzliche Grüße", english: "Warm regards", note: "Postcard closing." },
  { category: "Postcards", german: "Dein / Deine ...", english: "Your ...", note: "Closing signature." },

  // Sentence patterns
  { category: "Sentence Patterns", german: "Ich wohne in Kingston", english: "I live in Kingston", note: "Statement: subject + verb + detail." },
  { category: "Sentence Patterns", german: "Wo wohnst du?", english: "Where do you live?", note: "W-question: question word + verb + subject." },
  { category: "Sentence Patterns", german: "Wohnst du in Kingston?", english: "Do you live in Kingston?", note: "Yes/no question: verb first." },
  { category: "Sentence Patterns", german: "Ich komme aus ...", english: "I come from ...", note: "Use aus for origin." },
  { category: "Sentence Patterns", german: "Ich bin Studentin / Student", english: "I am a student", note: "Identity sentence." },
  { category: "Sentence Patterns", german: "Sie ist klein, aber hell", english: "It is small but bright", note: "Apartment or room description." },
  { category: "Sentence Patterns", german: "Hier kann man Bücher lesen", english: "Here one can read books", note: "Modal verb können." },
  { category: "Sentence Patterns", german: "Man muss leise sprechen", english: "One must speak quietly", note: "Modal verb müssen." },
  { category: "Sentence Patterns", german: "Hier darf man nicht rauchen", english: "One may not smoke here", note: "Modal verb dürfen + nicht." },
];

cards.push(...(window.documentCoverageCards || []));

const deckSelect = document.getElementById("deckSelect");
const searchInput = document.getElementById("searchInput");
const cardCount = document.getElementById("cardCount");
const knownCount = document.getElementById("knownCount");
const reviewCount = document.getElementById("reviewCount");
const activeDeckLabel = document.getElementById("activeDeckLabel");
const cardTitle = document.getElementById("cardTitle");
const cardCategory = document.getElementById("cardCategory");
const cardIndex = document.getElementById("cardIndex");
const faceLabel = document.getElementById("faceLabel");
const cardFront = document.getElementById("cardFront");
const cardHint = document.getElementById("cardHint");
const cardNotes = document.getElementById("cardNotes");
const progressBar = document.getElementById("progressBar");
const cardList = document.getElementById("cardList");
const listSummary = document.getElementById("listSummary");

const buttons = {
  deToEn: document.getElementById("deToEnBtn"),
  enToDe: document.getElementById("enToDeBtn"),
  flashcard: document.getElementById("flashcard"),
  prev: document.getElementById("prevBtn"),
  next: document.getElementById("nextBtn"),
  flip: document.getElementById("flipBtn"),
  known: document.getElementById("knownBtn"),
  review: document.getElementById("reviewBtn"),
  shuffle: document.getElementById("shuffleBtn"),
  reset: document.getElementById("resetBtn"),
};

const storageKey = "germ1001-flashcard-progress-v1";
const ids = cards.map((card, index) => ({ ...card, id: `${card.category}-${index}` }));

const state = {
  deck: "All",
  query: "",
  index: 0,
  flipped: false,
  direction: "de-en",
  order: ids.map((card) => card.id),
  progress: loadProgress(),
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (_error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getDecks() {
  return ["All", ...Array.from(new Set(ids.map((card) => card.category))).sort()];
}

function activeCards() {
  const query = normalize(state.query.trim());
  const byDeck = ids.filter((card) => state.deck === "All" || card.category === state.deck);
  const filtered = query
    ? byDeck.filter((card) =>
        normalize(`${card.german} ${card.english} ${card.note} ${card.category}`).includes(query)
      )
    : byDeck;

  const ordered = state.order
    .map((id) => filtered.find((card) => card.id === id))
    .filter(Boolean);

  const missing = filtered.filter((card) => !state.order.includes(card.id));
  return [...ordered, ...missing];
}

function currentCard() {
  const list = activeCards();
  return list[state.index] || null;
}

function visibleSide(card) {
  const front = state.direction === "de-en" ? card.german : card.english;
  const back = state.direction === "de-en" ? card.english : card.german;
  return state.flipped ? back : front;
}

function hiddenSide(card) {
  return state.direction === "de-en" ? card.english : card.german;
}

function sideLabel() {
  if (state.direction === "de-en") return state.flipped ? "English" : "German";
  return state.flipped ? "German" : "English";
}

function statusFor(card) {
  return state.progress[card.id] || "";
}

function renderDeckOptions() {
  deckSelect.innerHTML = "";
  getDecks().forEach((deck) => {
    const option = document.createElement("option");
    option.value = deck;
    option.textContent = deck === "All" ? "All decks" : deck;
    deckSelect.append(option);
  });
}

function render() {
  const list = activeCards();
  if (state.index >= list.length) state.index = Math.max(0, list.length - 1);
  const card = currentCard();

  cardCount.textContent = list.length.toString();
  knownCount.textContent = Object.values(state.progress).filter((value) => value === "known").length.toString();
  reviewCount.textContent = Object.values(state.progress).filter((value) => value === "review").length.toString();

  activeDeckLabel.textContent = state.deck === "All" ? "All decks" : state.deck;
  cardTitle.textContent = state.query ? `Search: ${state.query}` : "Flashcards";
  listSummary.textContent = list.length ? `${state.index + 1} of ${list.length}` : "No cards";
  progressBar.style.width = list.length ? `${((state.index + 1) / list.length) * 100}%` : "0%";

  buttons.deToEn.classList.toggle("active", state.direction === "de-en");
  buttons.enToDe.classList.toggle("active", state.direction === "en-de");

  if (!card) {
    cardCategory.textContent = "No match";
    cardIndex.textContent = "0 / 0";
    faceLabel.textContent = "";
    cardFront.textContent = "No cards match your search.";
    cardHint.textContent = "Clear the search field or choose another deck.";
    cardNotes.textContent = "No card selected.";
    cardList.innerHTML = `<div class="empty-state">No cards found.</div>`;
    return;
  }

  const status = statusFor(card);
  cardCategory.textContent = status ? `${card.category} · ${status}` : card.category;
  cardIndex.textContent = `${state.index + 1} / ${list.length}`;
  faceLabel.textContent = sideLabel();
  cardFront.textContent = visibleSide(card);
  cardHint.textContent = state.flipped
    ? card.note || "Review the reverse side, then move on."
    : "Tap or press Space to flip.";
  cardNotes.textContent = card.note || "No extra note for this card.";

  buttons.flashcard.classList.toggle("status-known", status === "known");
  buttons.flashcard.classList.toggle("status-review", status === "review");

  renderCardList(list);
}

function renderCardList(list) {
  cardList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach((card, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "mini-card";
    if (index === state.index) item.classList.add("active");
    if (statusFor(card) === "known") item.classList.add("status-known");
    if (statusFor(card) === "review") item.classList.add("status-review");
    item.innerHTML = `<strong>${card.german}</strong><span>${card.category} · ${card.english}</span>`;
    item.addEventListener("click", () => {
      state.index = index;
      state.flipped = false;
      render();
    });
    fragment.append(item);
  });

  cardList.append(fragment);
}

function move(delta) {
  const list = activeCards();
  if (!list.length) return;
  state.index = (state.index + delta + list.length) % list.length;
  state.flipped = false;
  render();
}

function flip() {
  if (!currentCard()) return;
  state.flipped = !state.flipped;
  render();
}

function setStatus(status) {
  const card = currentCard();
  if (!card) return;
  if (state.progress[card.id] === status) {
    delete state.progress[card.id];
  } else {
    state.progress[card.id] = status;
  }
  saveProgress();
  render();
}

function shuffleDeck() {
  const list = activeCards();
  const shuffled = [...list];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const visibleIds = shuffled.map((card) => card.id);
  const hiddenIds = ids.map((card) => card.id).filter((id) => !visibleIds.includes(id));
  state.order = [...visibleIds, ...hiddenIds];
  state.index = 0;
  state.flipped = false;
  render();
}

function resetProgress() {
  state.progress = {};
  saveProgress();
  state.index = 0;
  state.flipped = false;
  render();
}

deckSelect.addEventListener("change", (event) => {
  state.deck = event.target.value;
  state.index = 0;
  state.flipped = false;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.index = 0;
  state.flipped = false;
  render();
});

buttons.deToEn.addEventListener("click", () => {
  state.direction = "de-en";
  state.flipped = false;
  render();
});

buttons.enToDe.addEventListener("click", () => {
  state.direction = "en-de";
  state.flipped = false;
  render();
});

buttons.flashcard.addEventListener("click", flip);
buttons.flip.addEventListener("click", flip);
buttons.prev.addEventListener("click", () => move(-1));
buttons.next.addEventListener("click", () => move(1));
buttons.known.addEventListener("click", () => setStatus("known"));
buttons.review.addEventListener("click", () => setStatus("review"));
buttons.shuffle.addEventListener("click", shuffleDeck);
buttons.reset.addEventListener("click", resetProgress);

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

  if (event.code === "Space") {
    event.preventDefault();
    flip();
  } else if (event.key === "ArrowRight") {
    move(1);
  } else if (event.key === "ArrowLeft") {
    move(-1);
  } else if (event.key.toLowerCase() === "k") {
    setStatus("known");
  } else if (event.key.toLowerCase() === "r") {
    setStatus("review");
  }
});

renderDeckOptions();
render();
