var books = [
["Peaceful Pill Handbook",          "2017-02", 2006, "P.Nitschke     ", 0  , 0  , 0.5, 1.5, 0.5, 
    "In short: Nembutal injections are a peaceful but legally inaccessible way to go."],
["Pale Fire",                       "2017-03", 1962, "V.Nabokov      ", 1.5, 1  , 1  , 0.5, 0  , 
    "    Written in 1962 by Vladimir Nabokov, author of 'Lolita'," +
    "'Pale Fire' stands as a text in 4 parts and 3 layers, with 2-fold symmetry and hidden unity. " +
    "On the surface, the book is not a novel but a poem with thorough annotations. " +
    "The poem, a beautiful meditation on the nature of death by the late John Shade, begins:<br><br>" +
    "    I was the shadow of the waxwing slain<br>" +
    "    By the false azure in the windowpane;<br>" +
    "    I was the smudge of ashen fluff---and I<br>" +
    "    Lived on, flew on, in the reflected sky.<br><br>" +
    "We see a bird smashing itself against a window that looks like the sky. " +
    "It dies at an invisible boundary between the real and the reflected. " +
    "But the poet imagines that the bird flies on in the reflected space beyond the window. " +
    "Shade continues to depict symmetry between parallel worlds (life and afterlife, the profound and the mundane)" +
    "and to examine the shared boundary of each pair.<br><br>" +
    "    The theme of parallel worlds continues beyond the poem, " +
    "for we soon discover the poem's extensive commentary to be rich itself in plot, symbol, and suspense. " +
    "Indeed, the footnotes to the poem (totaling perhaps 85% of the printed ink) are written by one Dr. Charles Kinbote, " +
    "a harmless but delusional gay vegetarian who reads (really misreads) the poem in increasingly divergent senses. " +
    "Kinbote glosses the poem as a veiled chronicle of a king's exile from the distant nothern state of Zembla" +
    "--- and the reader sees that Kinbote believes himself to be that country's king.<br><br>" +
    "    But as the commentator's self-descriptions become decreasing likely, we search for yet another level of meaning: " +
    "who is Kinbote, truly?  Is he as harmless as he seems?  Where lies the boundary between his myth and Shade's reality" +
    "--- if such a boundary exists at all? " +
    "The novel is littered with clues or seeming clues, and I myself have not been satisfied.<br><br>" +
    "    Perhaps the mystery cannot be resolved.    And perhaps that is the point.    Shade's poem recounts his excitement" +
    "upon discovering that his near-death vision of a 'white fountain' had been matched by another's near-death vision of the same, " +
    "only to learn, in disappointment, that the latter had actually forseen a 'white mountain'. " +
    "Nobokov's world is just a little too rich for such a pattern to survive. " +
    "So, as if probing a vector field on a sphere, we can achieve local order in our understanding of the novel's three threads, " +
    "but global consistency seems forever out of reach. " +
    "I like this, for it seems an antidote to my addiction to seeking fundamental pattern. " +
    "Ultimately, there may be no one canonically elegant perspective of Gaussian Distributions --- only many good ones. " +
    "One selects and develops a personal perspective through commentary. " +
    "And as Kinbote decrees: 'for better or worse, it is the commentator who has the last word.' "],
["A Confederacy of Dunces",         "2017-04", 1980, "J.K.Toole      ", 2  , 2  , 0.5, 0  , 1  , 
    "Hilarious!"],
["Zen in the Art of Writing",       "2017-05", 1990, "R.Bradbury     ", 0  , 0  , 0  , 1  , 0.5, 
    "Keep a notebook"],
["To Friend Who Didn't Save M'Life","2017-06", 1990, "H.Guibert      ", 2  , 0.5, 1  , 0.5, 2  , 
    "Gripping.  Confusing ending."],
["Martian Chronicles",              "2017-06", 1950, "R.Bradbury     ", 1  , 0  , 2  , 0  , 0  , 
    "Highest poetry."],
["Running with Scissors",           "2017-06", 2002, "A.Burroughs    ", 1.5, 2  , 0  , 0  , 1  , 
    "Hilarious."],
["Cannery Row",                     "2017-06", 1945, "J.Steinbeck    ", 1  , 0.5, 0.5, 0  , 0.5, ""],
["Fahrenheit 451",                  "2017-07", 1953, "R.Bradbury     ", 0  , 0  , 0  , 0  , 0  , ""],
["Topology from Differential View", "2017-07", 1965, "J.Milnor       ", 2  , 0  , 0.5, 2  , 0  , 
    "Beautifully presented"],
["How to Do Things Right",          "2017-07", 1972, "R.Hills        ", 1.5, 1  , 0.5, 0.5, 0.5, 
    "A funny antidote to my own curmudgeonliness."],
["Me Talk Pretty One Day",          "2017-10", 2000, "D.Sedaris      ", 1  , 1  , 1  , 0  , 0.5, 
    "Relatable."],
["An Artist of the Floating World", "2018-01", 1986, "K.Ishiguro     ", 2  , 0.5, 0.5, 0  , 1  , ""],
["A Clockwork Orange",              "2018-03", 1962, "A.Burgess      ", 2  , 0  , 1  , 0  , 2  , 
    "Music."],
["Riemannian Geometry",             "2018-05", 1971, "M.d.Carmo      ", 1  , 0  , 0.5, 1.5, 0  , ""],
["Planiverse",                      "2018-07", 1984, "A.K.Dewdney    ", 1  , 0.5, 0.5, 2  , 0  , ""],

["Reasons to Stay Alive",           "2018-07", 2015, "M.Haig         ", 0  , 0  , 0  , 0  , 1.5, ""],
["How to Write a Sentence",         "2018-07", 2011, "S.Fish         ", 0.5, 0  , 0.5, 0.5, 0  , ""],
["Neon Bible",                      "2018-07", 1954, "J.K.Toole      ", 1  , 0  , 1.5, 0  , 0.5, ""],
["Cold Comfort Farm",               "2018-07", 1932, "S.Gibbons      ", 1.5, 2  , 0.5, 0  , 1  , ""],
["Winesburg, Ohio",                 "2018-07", 1919, "S.Anderson     ", 0  , 0.5, 2  , 0  , 1  , ""],
["Thinking Fast and Slow",          "2018-07", 2011, "D.Kahneman     ", 1  , 0  , 0  , 1.5, 1  , ""],
["Pnin",                            "2018-07", 1957, "V.Nabokov      ", 0  , 1  , 0  , 0  , 0.5, ""],
["Secret Life of Salvador Dali",    "2018-07", 1942, "S.Dali         ", 1.5, 2  , 1  , 0.5, 0  , ""],
["Adventures of Kavalier and Clay", "2018-07", 2000, "M.Chabon       ", 2  , 1  , 1  , 0  , 1  , ""],
["A Connecticut Yankee",            "2018-07", 1889, "M.Twain        ", 1  , 1  , 0  , 0  , 0  , ""],
["Ficciones",                       "2018-07", 1962, "J.L.Borges     ", 1  , 0.5, 2  , 0.5, 0  , ""],
["The Anatomy of Prose",            "2018-07", 1954, "M.Boulton      ", 1  , 0  , 1  , 1 ,  0  , ""],
["On the Road",                     "2018-08", 1957, "J.Kerouac      ", 0  , 0  , 2  , 0  , 2  , ""],
["The Sun Also Rises",              "2018-08", 1926, "E.Hemingway    ", 0  , 0  , 1  , 0  , 1  , ""],
["Selfish Gene",                    "2018-08", 1976, "R.Dawkins      ", 2  , 0  , 0  , 2  , 0  , ""],
["The Periodic Table",              "2018-08", 1975, "P.Levi         ", 1  , 1  , 2  , 0  , 0  , ""],
["Introduction to Algorithms",      "2018-08", 1989, "T.H.Cormen     ", 1  , 0  , 0  , 1  , 0  , ""],
["Artificial Intelligence",         "2018-08", 1994, "S.J.Russell    ", 0  , 0  , 0  , 1  , 0  , ""],
["Learning from Data",              "2018-08", 2012, "Y.S.Abu-Mostafa", 1.5, 0  , 0  , 1  , 0  , ""],
["Discipline of Programming",       "2018-08", 1976, "E.W.Dijkstra   ", 1.5, 0  , 0  , 2  , 0  , ""],
["Diversity of Life",               "2018-08", 1992, "E.O.Wilson     ", 1.5, 0  , 1  , 1  , 0  , ""],
["The #1 Ladies' Detective Agency", "2018-08", 1998, "A.M.Smith      ", 2  , 2  , 1  , 0  , 1  , ""],

["A Separate Peace",                "2018-07", 1959, "J.Knowles      ", 0  , 0  , 0  , 0  , 2  , ""],
["Category Theory for Programmers", "2018-08", 2017, "B.Milewski     ", 0  , 0  , 0  , 1  , 0  , ""],
["Foundation",                      "2018-08", 1951, "I.Asimov       ", 0  , 0  , 0  , 1  , 0  , ""],
["A Room of One's Own",             "2018-08", 1929, "V.Woolf        ", 0  , 0  , 0  , 0  , 0  , ""],
["Note to Self",                    "2018-07", 2017, "C.Franta       ", 0  , 0  , 1  , 0  , 0  , ""],
["The Language Instinct",           "2018-07", 1994, "S.Pinker       ", 1  , 0  , 0  , 1  , 1  , ""],
["How to Write an Autobio Novel",   "2018-07", 2018, "A.Chee         ", 1  , 1  , 1  , 0  , 1  , ""],
["The Remains of the Day",          "2018-07", 1989, "K.Ishiguro     ", 1  , 0  , 1  , 0  , 2  , ""],
["Life of Tristam Shandy",          "2018-07", 1767, "L.Sterne       ", 1  , 0  , 0  , 0  , 1  , ""],
["Unbearable Lightness of Being",   "2018-08", 1984, "M.Kundera      ", 0  , 0  , 0  , 0  , 1  , ""],
["Portnoy's Complaint",             "2018-08", 1969, "P.Roth         ", 1  , 0  , 2  , 0  , 0  , ""],
["Midnight's Children",             "2018-08", 1981, "S.Rushdie      ", 0  , 0  , 0  , 0  , 0  , ""],
["Lives of a Cell",                 "2018-08", 1974, "L.Thomas       ", 0  , 0  , 0  , 1  , 1  , ""],
["The Double Helix",                "2018-08", 1968, "J.D.Watson     ", 0  , 0  , 0  , 0  , 1  , ""],
["The Mismeasure of Man",           "2018-08", 1981, "S.J.Gould      ", 0  , 0  , 0  , 1  , 1  , ""],
["Boy Erased",                      "2018-08", 2016, "G.Conley       ", 0  , 1  , 0  , 0  , 2  , ""],

["Gulliver's Travels",              "2018-04", 1726, "J.Swift        ", 0  , 0  , 0  , 0  , 0  , ""],
["Math of the Transcendental",      "2018-04", 2014, "A.Badiou       ", 0.5, 0  , 0  , 1.5, 0  , ""],
["Love in the Time of Cholera",     "2018-04", 1985, "G.G.Marquez    ", 0  , 0  , 0  , 0  , 0  , ""],
["Life: a User's Manual",           "2018-05", 1978, "G.Perec        ", 0  , 0  , 0  , 0  , 0  , ""],
["The World According to Garp",     "2018-05", 1978, "J.Irving       ", 0  , 0  , 0  , 0  , 0  , ""],
["De Profundis",                    "2018-06", 1905, "O.Wilde        ", 0  , 0  , 0  , 0  , 0  , ""],
["White Noise",                     "2018-06", 1985, "D.DeLillo      ", 0  , 0  , 0  , 0  , 0  , ""],
["Flowers in the Mirror",           "2018-06", 1827, "L.Ruzhen       ", 0  , 0  , 0  , 0  , 0  , ""],
["20,000 Leagues Under the Sea",    "2018-06", 1870, "J.Verne        ", 0  , 0  , 0  , 0  , 0  , ""],
["Leaves of Grass",                 "2018-06", 1855, "W.Whitman      ", 0  , 0  , 0  , 0  , 0  , ""],
["A Boy's Own Story",               "2018-07", 1982, "E.White        ", 0  , 0  , 0  , 0  , 0  , ""],
["The Catcher in the Rye",          "2018-07", 1951, "J.D.Salinger   ", 0  , 0  , 0  , 0  , 0  , ""],
["Mysteries of Pittsburgh",         "2018-07", 1988, "M.Chabon       ", 0  , 0  , 0  , 0  , 0  , ""],
["The Corrections",                 "2018-07", 2001, "J.Franzen      ", 0  , 0  , 0  , 0  , 0  , ""],
["The Adventures of Augie March",   "2018-07", 1953, "S.Bellow       ", 0  , 0  , 0  , 0  , 0  , ""],
["Brief Wondrous Life of Oscar Wao","2018-07", 2007, "J.Diaz         ", 0  , 0  , 0  , 0  , 0  , ""],
];
