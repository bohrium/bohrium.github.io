var books = [
//["Peaceful Pill Handbook",          "2017-02", 2006, "P.Nitschke     ", 0  , 0  , 0.5, 1.5, 0.5, ""],
["Pale Fire",                       "2017-03", 1962, "V.Nabokov      ", 1.5, 1  , 1  , 0.5, 0  , 
    "    Written in 1962 by Vladimir Nabokov, author of 'Lolita', " +
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
["A Confederacy of Dunces",         "2017-04", 1980, "J.K.Toole      ", 2  , 2  , 0.5, 0  , 1  , ""],
["Zen in the Art of Writing",       "2017-05", 1990, "R.Bradbury     ", 0  , 0  , 0  , 1  , 0.5, ""],
["To Friend Who Didn't Save M'Life","2017-06", 1990, "H.Guibert      ", 2  , 0.5, 1  , 0.5, 2  , ""],
["Martian Chronicles",              "2017-06", 1950, "R.Bradbury     ", 1  , 0  , 2  , 0  , 0  , ""],
["Running with Scissors",           "2017-06", 2002, "A.Burroughs    ", 1.5, 2  , 0  , 0  , 1  , ""],
["Cannery Row",                     "2017-06", 1945, "J.Steinbeck    ", 1  , 0.5, 0.5, 0  , 0.5, ""],
["Fahrenheit 451",                  "2017-07", 1953, "R.Bradbury     ", 0  , 0  , 0  , 0  , 0  , ""],
["Topology from Differential View", "2017-07", 1965, "J.Milnor       ", 2  , 0  , 0.5, 2  , 0  , ""],
["How to Do Things Right",          "2017-07", 1972, "R.Hills        ", 1.5, 1  , 0.5, 0.5, 0.5, ""],
["Me Talk Pretty One Day",          "2017-10", 2000, "D.Sedaris      ", 1  , 1  , 1  , 0  , 0.5, ""],
["An Artist of the Floating World", "2018-01", 1986, "K.Ishiguro     ", 2  , 0.5, 0.5, 0  , 1  , ""],
["A Clockwork Orange",              "2018-03", 1962, "A.Burgess      ", 2  , 0  , 1  , 0  , 2  , ""], 
["Riemannian Geometry",             "2018-05", 1971, "M.d.Carmo      ", 1  , 0  , 0.5, 1.5, 0  , ""],
["The Planiverse",                  "2018-07", 1984, "A.K.Dewdney    ", 1  , 0.5, 0.5, 1.5, 0.5,
    "This book is a puzzle wrapped in a travelogue inside software documentation. " + 
    "What do I feel upon reading it?  Enchantment.  Possibility.  Creative impulse. " + 
    "Dewdney's is a work of world-building; but, unlike Tolkien or Lewis, he invites the reader to join the fun. " +
    "The principles are few: the world is to be as similar as possible to ours, except in 2 space dimensions only. " +
    "From this explode page after page of surprising delights: " +
    "wouldn't creatures with a full-length digestive tract fall apart?  Well, not if they possess zipper(!) mechanism! " +
    "How would one design doors?  Hinges?  Steam engines? " + 
    "What would the visual arts be like, burdened and liberated by huge ambiguities of depth and direction? " +
    "On the one-dimensional surface of a disc planet, how would beings accomplish or avoid tasks such as walking past each other? " +
    "And so on... " +
    "<br><br>" +
    "Reading 'Planiverse' is like living a new life.  One grows accustomed to once-unfamiliar facts of life: " +
    "scaling laws (1D 'surfaces' are unexpectedly small compared to 2D 'volumes'); " +
    "the ease of enclosing a volume and, dually, the difficulty of crossing trajectories, wires, neurons, and other connections; " + 
    "and a certain cooperation seemingly necessary of a society all squished together.[*] " +
    "<br><br>" +
    "Speaking of scaling laws, one loose thread is Dewdney's treatment of physics in the plane. " +
    "For instance, gravity and electricity are posited to obey a 1/r force law. " +
    "This comes from one reasonable generalization of 3D Newton's 1/r<sup>2</sup> law but not from what to me is the most reasonable generalization. " +
    "Specifically, in d dimensions, Dewdney would expect a 1/r<sup>d-1</sup> law because the force 'spreads out along a sphere'. " +
    "But there is no 'conservation of force' to enforce the force-flux along concentric spheres to agree. " +
    "Why, then, should force 'spread'?  Why should anything 'spread' at all? " +
    "Without recourse to measurement, we prefer to maximize elegance. " +
    "I see most elegance in theories of fields, not forces; these theories suggest an alternate generalization. " +
    "The analysis (for light, not gravity: I know too little about gravity!) might begin with a (2+1)-dimensional potential A<sup>a</sup>, " +
    "differentiation of which yields a 3 x 3 antisymmetric field tensor F<sup>ab</sup>. " + 
    "F has 1 magnetic component (a pseudoscalar) and 2 electric components (a vector). " +
    "Next, we write a lagrangian with kinetic term prop to F<sub>ab</sub> F<sup>ab</sup> and source term prop to A<sub>a</sub> J<sup>a</sup>. " +
    "Conservation of charge (d<sub>a</sub> J<sup>a</sup> = 0) implies that --- for any scalar f --- " +
    "(d<sub>a</sub> f) J<sup>a</sup> = d<sub>a</sub> (f J<sup>a</sup>) is a total derivative and thus immaterial. " +
    "We thus recognize a gauge freedom; let us fix a Lorenz(t?) gauge so that d<sub>a</sub> A<sup>a</sup> = 0. " +
    "From this, the Euler Lagrange equations tell us J<sup>b</sup> is prop to d<sub>a</sub> d<sup>a</sup> A<sup>b</sup> - d<sub>a</sub> d<sup>b</sup> A<sup>b</sup> = d<sub>a</sub> d<sup>a</sup> A<sup>b</sup>. " +
    "Thus, we recover light. " + 
    "How about time-invariant solutions to a point charge? " +
    "In 2 space dimensions, on the x axis, (x<sup>2</sup> + y<sup>2</sup>)<sup>s/2</sup> has laplacian s(s-1)x<sup>s-2</sup> + s x<sup>s-2</sup>. " + 
    "We easily generalize to the result that in d space dimensions, r<sup>s</sup> has laplacian s(s+d-2)r<sup>s-2</sup>. " + 
    "For this to vanish away from the origin, we need s=0 or s=2-d.  In 2 dimensions, this means the only time-invariant potentials are constant! " +
    "<strong>Though light is possible, static Coulomb forces are not!</strong>[**] " +
    "I bet developing electromagnetism and Hydrogen in n dimensions would be a great exercise in a chemistry course. " +
    "Alas, I lack time to work this out further[***]. " +
    "<br><br>" +
    "At first, I dismissed others' comparisons between Dewdney's 'Planiverse' and Abbott's 'Flatland'. " +
    "The former is a beautifully detailed tour of a fantastically different life; " +
    "the latter, a silly social critique involving polygons. " +
    "Where the former's earnestness and enthusiasm succeed in absorbing us into a new world, " +
    "the latter's attempt to stir our imaginations, with all its didactic dreariness, falls flat. " +
    "'Planiverse', then, is not only a successor to 'Flatland': it is an upgrade. " +
    "<br><br>" +
    "[*] Would the USSR have thrived in 2 dimensions?  I imagine a new branch of political theory sensitive to spatial dimension. " +
    "What can engineering tell us about current cultural degrees of freedom? " + 
    "<br><br>" +
    "[**] We could have arrived at the same conclusion by identifying 2D solutions with 3D solutions that happen to be invariant across one space axis. " +
    "<br><br>" +
    "[***] In the words of Tate, 'I think it is very interesting, but I don't have time to be interested in everything that's interesting'. "
],
["The Armchair Economist",          "2018-07", 1993, "S.E.Landsburg  ", 2  , 0.5, 0  , 2  , 1  ,
    "Economics is fun!  So I've learned from the 'Armchair Economist', a treasury of thought experiments and " +
    "an invitation to puzzle over human behavior.  The book, beginning with the axiom that 'people respond to incentives', " +
    "asks in a multitude of scenarios: based on observed actions, what incentives are present?  based on observed incentives, what actions should follow? " +
    "<br><br>" +
    "Though the book sparkles with beautiful insights " +
    "(such as Coase's theorem, mechanisms to elicit truthful responses[*], and the presence of bias in certain inflation measurements), " +
    "two chapters are particularly delicious: 'Why Popcorn Costs More at the Movies and Why the Obvious Answer is Wrong' and 'The Iowa Car Crop'. " + 
    "The Popcorn chapter introduces a mystery, a solution, objections, counterobjections, countercounterobjections, and so on (I had to ponder it a while); " +
    "it reaches a partially satisfying fixpoint, but its main delights, for me, lie in " +
    "the ideas invoked along the way and the air of possibility we are left with. " +
    "The Iowa chapter, by contrast, presents a gleaming, self-contained argument. " +
    "<br><br>" +
    "I much appreciate Landsburg's discussion of the urgency and nontriviality of determining our goals.[**] " +
    "As policy makers, we may design incentives to elicit behaviors and hence outcomes, but what outcomes do we seek? " +
    "Landsburg raises this question in 'Telling Right from Wrong', the book's most important chapter. " +
    "He proposes no grand solution, but the question itself is worth asking.  After this chapter, economic efficiency is the " +
    "precisely stated but only approximately accurate answer assumed. " +
    "<br><br>" +
    "The book closes with ludicrous policy suggestions and a salty complaint about environmentalism. " +
    "I value these for the thought they provoke --- " +
    "for instance, if we condemn the collusion of companies, why do we laud political bipartisanship? " +
    "The analogy intrigues, but it smells fishy.  The question is, whence exactly comes that smell?[***] " +
    "--- but I don't value them very much. " +
    "" +
    "<br><br>" +
    "[*] To the book's examples I would add the following: how can one extract a true probability distribution from a reticent meteorologist? " +
    "One wishes to incentivize the reported and true probabilities to be similar; " +
    "however, the rewards can depend only on the reported probabilities and the single actual outcome. " +
    "Answer: use logarithmic rewards!  That is, if the meteorologist says it will rain with chance p, then when it rains, reward her with log(p) dollars, " +
    "and when it doesn't, reward her with log(1-p) dollars.  This is just cross entropy loss in machine learning. " +
    "Speaking of ML, Nihar Shah shows that a multiplicative mechanism for crowdsource labeling is optimal --- see 'Double or Nothing' (JMLR 2016). " +
    "<br><br>" +
    "[**] I used to walk with a professor --- Igor Markov --- to office hours after his lecture. " +
    "Once, as we ascended a spiral staircase, I remarked to him that it was always better to walk the inner circumference: " +
    "that way, one travels a shorter distance.  He immediately asked me: 'what if I want a workout?'. " +
    "<br><br>" +
    "[***] Here's an issue my roommate Ryan and I grapple with: when gut and reasoning differ, what should one do?"],

["Ficciones",                       "2018-07", 1962, "J.L.Borges     ", 1  , 0.5, 2  , 0.5, 0  , ""],
["How to Write an Autobio Novel",   "2018-07", 2018, "A.Chee         ", 1.5, 0  , 2  , 0  , 2  , ""],
["Foundation",                      "2018-08", 1951, "I.Asimov       ", 1  , 0  , 0  , 0.5, 1  , ""],
["Portnoy's Complaint",             "2018-08", 1969, "P.Roth         ", 1  , 1  , 0  , 0  , 1  , ""],
["Reasons to Stay Alive",           "2018-07", 2015, "M.Haig         ", 0  , 0  , 0  , 0  , 1.5, ""],
["How to Write a Sentence",         "2018-07", 2011, "S.Fish         ", 0  , 0  , 0.5, 0.5, 0  , ""],
["The Tipping Point",               "2018-07", 2000, "M.Gladwell     ", 0.5, 0  , 0  , 0  , 1  , ""],
["Naked",                           "2018-07", 1997, "D.Sedaris      ", 1  , 0.5, 0  , 0  , 1  , ""],
["The Selfish Gene",                "2018-08", 1976, "R.Dawkins      ", 2  , 0  , 0  , 2  , 0  , ""],
["The Periodic Table",              "2018-08", 1975, "P.Levi         ", 1  , 1  , 2  , 0  , 0  , ""],

["Adventures of Kavalier and Clay", "2018-07", 2000, "M.Chabon       ", 2  , 1  , 1  , 0  , 1  , ""],
["Secret Life of Salvador Dali",    "2018-07", 1942, "S.Dali         ", 1.5, 2  , 1  , 0.5, 0  , ""],
["Neon Bible",                      "2018-07", 1954, "J.K.Toole      ", 1  , 0  , 1.5, 0  , 0.5, ""],
["Cold Comfort Farm",               "2018-07", 1932, "S.Gibbons      ", 1.5, 2  , 0.5, 0  , 1  , ""],
["Winesburg, Ohio",                 "2018-07", 1919, "S.Anderson     ", 0  , 0.5, 2  , 0  , 1  , ""],
["Thinking Fast and Slow",          "2018-07", 2011, "D.Kahneman     ", 1  , 0  , 0  , 1.5, 1  , ""],
["Pnin",                            "2018-07", 1957, "V.Nabokov      ", 0  , 1  , 0  , 0  , 0.5, ""],
["Connecticut Yankee in A's Court", "2018-07", 1889, "M.Twain        ", 1  , 1  , 0  , 0  , 0  , ""],
["The Anatomy of Prose",            "2018-07", 1954, "M.Boulton      ", 1  , 0  , 1  , 1 ,  0  , ""],
["On the Road",                     "2018-08", 1957, "J.Kerouac      ", 0  , 0  , 2  , 0  , 2  , ""],
["The Sun Also Rises",              "2018-08", 1926, "E.Hemingway    ", 0  , 0  , 1  , 0  , 1  , ""],
["Introduction to Algorithms",      "2018-08", 1989, "T.H.Cormen     ", 1  , 0  , 0  , 1  , 0  , ""],
["Artificial Intelligence",         "2018-08", 1994, "S.J.Russell    ", 0  , 0  , 0  , 1  , 0  , ""],
["Learning from Data",              "2018-08", 2012, "Y.S.Abu-Mostafa", 1.5, 0  , 0  , 1  , 0  , ""],
["Discipline of Programming",       "2018-08", 1976, "E.W.Dijkstra   ", 1.5, 0  , 0  , 2  , 0  , ""],
["Diversity of Life",               "2018-08", 1992, "E.O.Wilson     ", 1.5, 0  , 1  , 1  , 0  , ""],
["The #1 Ladies' Detective Agency", "2018-08", 1998, "A.M.Smith      ", 2  , 2  , 1  , 0  , 1  , ""],

["A Separate Peace",                "2018-07", 1959, "J.Knowles      ", 0  , 0  , 0  , 0  , 2  , ""],
["Category Theory for Programmers", "2018-08", 2017, "B.Milewski     ", 0  , 0  , 0  , 1  , 0  , ""],
["A Room of One's Own",             "2018-08", 1929, "V.Woolf        ", 0  , 0  , 0  , 0  , 0  , ""],
["Note to Self",                    "2018-07", 2017, "C.Franta       ", 0  , 0  , 1  , 0  , 0  , ""],
["The Language Instinct",           "2018-07", 1994, "S.Pinker       ", 1  , 0  , 0  , 1  , 1  , ""],
["The Remains of the Day",          "2018-07", 1989, "K.Ishiguro     ", 1  , 0  , 1  , 0  , 2  , ""],
["Life of Tristam Shandy",          "2018-07", 1767, "L.Sterne       ", 1  , 0  , 0  , 0  , 1  , ""],
["Unbearable Lightness of Being",   "2018-08", 1984, "M.Kundera      ", 0  , 0  , 0  , 0  , 1  , ""],
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
