/*title                                date read publ   author            Ov   St   Tr   Hu   TI   HI   SD   review*/
var books = [
//-------  15  ----------------------------------------------------------------
["Fluid Concepts, Creative Analogy" , "2012-01", 1979, "D.Hofstadter"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Surely You're Joking, Mr. Feynman", "2012-04", 1985, "R.P.Feynman"    , 1.5, 0  , 0  , 2  , 0  , 1.5, 1  , ""],
["Around the World in 80 Days"      , "2012-07", 1873, "J.Verne"        , 0.5, 0  , 0  , 0.5, 0  , 0  , 0.5, ""],
["Presidential Anecdotes"           , "2012-  ", 1996, "P.F.Boller"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Huckleberry Finn"                 , "2012-08", 1885, "M.Twain"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["I am a Strange Loop"              , "2012-01", 2007, "D.Hofstadter"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Tales from the Brothers Grimm"    , "2012-02", 1812, "J.Grimm"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["The Know-It-All"                  , "2012-02", 2004, "A.J.Jacobs"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

["The Magical Maze"                 , "2012-  ", 1997, "I.Stewart"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["The Original Sherlock Holmes"     , "2012-08", 1905, "A.C.Doyle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Cabinet of Math Curiosities"      , "2012-08", 2008, "I.Stewart"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Chased by Sea Monsters"           , "2012-08", 2004, "N.Marven"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Future is Wild"               , "2012-08", 2002, "D.Dixon"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Number Devil"                 , "2012-  ", 1997, "H.Enzensberger" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["The I Hate Mathematics Book"      , "2012-  ", 1975, "M.Burns"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Masters of Deception"             , "2012-  ", 2004, "A.Seckel"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/

["Aha Gotcha"                       , "2012-  ",     , "M.Gardener"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Aha Insight"                      , "2012-  ",     , "M.Gardener"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Flatterland"                      , "2012-  ", 1991, "I.Stewart"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Order of Things"              , "2012-  ",     , "B.A.Kipfer"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Stick to Comics, Monkey Brain!"   , "2012-  ", 2008, "S.Adams"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Bill Peet, Autobiography"         , "2012-  ",     , "B.Peet"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Journey of Edward Tulane"         , "2012-  ",     , "K.DiCamillo"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Group Theory in the Bedroom"      , "2013-08", 2008, "B.Hayes"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//-------  scioly year  -------------------------------------------------------
["Freshman Lectures on Physics"     , "2013-11",     , "R.P.Feynman"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Constitution of the U.S.A."       , "2013-11", 1789, "J.Madison"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["American Born Chinese"            , "2013-01", 2006, "G.L.Yang"       , 1  , 1  , 0  , 0.5, 0.5, 2  , 0.5, ""],
["Wit"                              , "2013-04", 1996, "D.McHale"       , 0.5, 0  , 0  , 1.5, 0  , 0.5, 0.5, ""],
["The Devouring Fungus"             , "2013-04", 1990, "K.Jennings"     , 1  , 0  , 0  , 0  , 1  , 2  , 0.5, ""],
["Godel Escher Bach"                , "2013-06", 1979, "D.Hofstadter"   , 1.5, 2  , 0  , 2  , 1.5, 0  , 2  , ""],
["Connecticut Yankee in A's Court"  , "2013-12", 1889, "M.Twain"        , 1.5, 1  , 0  , 1.5, 0.5, 0.5, 2  , "reviews/connecticut-yankee.html"],
["Cartoon Microeconomics"           , "2013-12",     , ""               , 1.5, 1  , 0  , 1.5, 0.5, 0.5, 2  , ""],

["M is for Magic"                   , "2013-  ", 2007, "N.Gaiman"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Konigsburg Collection"        , "2013-  ",     , "E.L.Konigsburg" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Hyperbole and a Half"             , "2013-  ", 2013, "A.Brosh"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Diversity of Life"            , "2013-09", 1992, "E.O.Wilson"     , 1.5, 1  , 0  , 0  , 1  , 0  , 0  , ""],
["Deviations from the Beaten Track" , "2013-  ", 2005, "R.P.Feynman"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Letters of the Century"           , "2013-  ", 1999, "L.Grunwald"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["A Mathematician's Apology"        , "2013-08", 1940, "G.H.Hardy"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Men of Mathematics"               , "2014-  ", 1937, "E.T.Bell"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

["Metamagical Themas"               , "2014-  ",     , "D.Hofstadter"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Pleasure of Finding Things Out"   , "2014-08", 1999, "R.P.Feynman"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Great Physicists"                 , "2014-  ", 2001, "W.H.Cropper"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Physics, Astronomy, Math"         , "2014-  ", 1991, "T.Ferris"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["The Tao is Silent"                , "2012-  ",     , "R.M.Smullyan"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["B.C., Philosophical Fantasies"    , "2012-  ",     , "R.M.Smullyan"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Calvin and Hobbes, Collected"     , "2012-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Frank Lloyd Wright Revealed"      , "2012-  ",     , "R.King"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//-------  moving out year  ---------------------------------------------------

["Abraham Lincoln, Vampire Hunter"  , "2014-11",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["ANSI C"                           , "2014-09", 1988, "B.W.Kernighan"  , 1  , 0.5, 0  , 0  , 1  , 0  , 0  , ""],
["Medea"                            , "2014-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Kingpin"                          , "2014-  ", 2011, "K.Poulsen"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Modern Physics"                   , "2014-  ",     , "K.Krane"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Modern Quantum Mechanics"         , "2014-  ",     , "J.J.Sakurai"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["What is the Name of this Book?"   , "2012-  ",     , "R.M.Smullyan"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["The Lady or the Tiger?"           , "2012-  ",     , "R.M.Smullyan"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//-------  18  ----------------------------------------------------------------
["The Periodic Table"               , "2015-10", 1975, "P.Levi"         , 0.5, 0  , 0.5, 0  , 0.5, 2  , 0  , ""],
["The Selfish Gene"                 , "2015-07", 1976, "R.Dawkins"      , 0.5, 0  , 0  , 0  , 1.5, 0  , 1  , ""],
["Ingredients"                      , "2019-12", 2010, "P.Mirams"       , 0.5, 1  , 0  , 0  , 0.5, 0  , 1  , ""],/*TODO REVIEW*/
["The Flame Alphabet"               , "2012-11", 2012, "B.Marcus"       , 0.5, 0  , 0  , 0  , 0  , 0  , 0.5, ""],
["The Wild Numbers"                 , "2012-11", 1998, "P.Schogt"       , 0.5, 0  , 0  , 0  , 0  , 0  , 1  , ""],
    /**/
    /**/
    /**/

//-------  coming out year  ---------------------------------------------------
["Selected Writings on Computing"   , "2012-  ",     , "E.W.Dijkstra"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
["Adventures of Kavalier and Clay"  , "2016-03", 2000, "M.Chabon"       , 1  , 0  , 0.5 , 0  , 0  , 1  , 0.5, ""],
    /**/
    /**/
    /**/
    /**/
    /**/
    /**/

//-------  20  ----------------------------------------------------------------
["Cat's Cradle"                     , "2017-01", 1963, "K.Vonnegut"     , 1  , 1  , 0.5 , 1  , 0.5, 0  , 2  , ""],
["Slaughterhouse Five"              , "2017-01", 1969, "K.Vonnegut"     , 0.5, 0.5, 0   , 1  , 0.5, 0.5, 0  , ""],
["Pale Fire"                        , "2017-03", 1962, "V.Nabokov"      , 1.5, 1  , 0   , 1  , 0.5, 0  , 0.5, "reviews/pale-fire.html"],
["A Confederacy of Dunces"          , "2017-04", 1980, "J.K.Toole"      , 2  , 0.5, 0   , 2  , 0  , 1  , 2  , ""],
["Zen in the Art of Writing"        , "2017-05", 1990, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0.5, 0  , ""],
["Galapagos"                        , "2017-05", 1985, "K.Vonnegut"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["O Friend Who Didn't Save My Life" , "2017-06", 1990, "H.Guibert"      , 2  , 1.5, 1   , 0.5, 0.5, 2  , 0.5, ""],
["Martian Chronicles"               , "2017-06", 1950, "R.Bradbury"     , 1  , 1  , 2   , 0  , 0  , 0  , 1  , ""],

["Running with Scissors"            , "2017-06", 2002, "A.Burroughs"    , 1.5, 0  , 0   , 2  , 0  , 1  , 1  , ""],
["Cannery Row"                      , "2017-06", 1945, "J.Steinbeck"    , 1  , 0.5, 0   , 0.5, 0  , 0.5, 0  , ""],
["Hebdomeros"                       , "2017-06", 1964, "G.d.Chirico"    , 0  , 2  , 1   , 0  , 0  , 1  , 0  , ""],
["Fahrenheit 451"                   , "2017-07", 1953, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0  , 1  , ""],
["Topology: a Differential View"    , "2017-07", 1965, "J.Milnor"       , 2  , 2  , 0   , 0  , 2  , 0  , 2  , ""],
["How to Do Things Right"           , "2017-07", 1972, "R.Hills"        , 1.5, 0.5, 0   , 2  , 0.5, 0.5, 0  , ""],
["Me Talk Pretty One Day"           , "2017-10", 2000, "D.Sedaris"      , 1  , 0.5, 0.5 , 1  , 0  , 0.5, 0  , ""],
["The Armchair Economist"           , "2018-07", 1993, "S.E.Landsburg"  , 2  , 0  , 0   , 0.5, 2  , 1  , 1.5, "reviews/armchair-economist.html"],

//-------  self injury year  --------------------------------------------------
["An Artist of the Floating World"  , "2018-01", 1986, "K.Ishiguro"     , 2  , 1  , 1   , 0.5, 0  , 1  , 0  , ""],
["A Clockwork Orange"               , "2018-03", 1962, "A.Burgess"      , 2  , 1.5, 0   , 0  , 0  , 2  , 1  , "reviews/a-clockwork-orange.html"],
["Riemannian Geometry"              , "2018-05", 1971, "M.d.Carmo"      , 1  , 0.5, 0   , 0  , 1.5, 0  , 0.5, ""],
["Ficciones"                        , "2021-04", 1962, "J.L.Borges"     , 0.5, 1  , 0.5 , 0.5, 0.5, 0  , 0  , ""],/*TODO REVIEW?*/
["The Planiverse"                   , "2018-07", 1984, "A.K.Dewdney"    , 1  , 0  , 0.5 , 0.5, 1.5, 0.5, 1  , "reviews/planiverse.html"],
["The Time Machine"                 , "2018-07", 1895, "H.G.Wells"      , 0.5, 0.5, 0.5 , 0  , 0  , 0.5, 0  , "reviews/time-machine.html"],
["Symbols, Signals and Noise"       , "2018-08", 1961, "J.R.Pierce"     , 1.5, 0  , 0.5 , 0  , 1.5, 1  , 2  , "reviews/symbols-signals-noise.html"],
["Foundation"                       , "2018-08", 1951, "I.Asimov"       , 1  , 0  , 1   , 0.5, 0  , 0.5, 1  , ""],//"reviews/foundation.html"],

["The Back Passage"                 , "2018-08", 2006, "J.Lear"         , 0  , 0  , 0   , 1  , 0  , 1  , 1  , ""],
["The #1 Ladies' Detective Agency"  , "2018-08", 1998, "A.M.Smith"      , 1  , 1  , 0   , 1  , 1  , 1  , 0  , ""],
["A Separate Peace"                 , "2018-08", 1959, "J.Knowles"      , 2  , 0  , 1.5 , 0.5, 0  , 2  , 2  , ""],//"reviews/a-separate-peace.html"],
["The Remains of the Day"           , "2018-08", 1989, "K.Ishiguro"     , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],
["Incident of the Dog in the Night" , "2018-09", 2003, "M.Haddon"       , 1  , 0.5, 0.5 , 0  , 0.5, 1.5, 2  , ""],
["The Corrections"                  , "2018-10", 2001, "J.Franzen"      , 0.5, 0.5, 0   , 0.5, 0.5, 0.5, 0.5, ""],
["Brief Wondrous Life of Oscar Wao" , "2018-12", 2007, "J.Diaz"         , 1  , 1.5, 1   , 2  , 0.5, 0.5, 2  , ""],
["Hamlet"                           , "2018-12", 1601, "W.Shakespeare"  , 1  , 2  , 0   , 0.5, 1  , 1  , 1  , ""],

//-------  mit and facebook year  ---------------------------------------------
["Less"                             , "2019-01", 2017, "A.S.Greer"      , 1  , 2  , 1   , 1  , 0  , 2  , 1.5, ""],
["The Odyssey, Wilson"              , "2019-01", 2017, "E.Wilson"       , 2  , 2  , 0   , 0  , 0.5, 0.5, 2  , ""],
["Mother Night"                     , "2019-01", 1962, "K.Vonnegut"     , 1  , 1  , 1   , 0.5, 0  , 1  , 1  , ""],
["12 Rules for Life"                , "2019-02", 2018, "J.B.Peterson"   , 1  , 1  , 1   , 1  , 2  , 1.5, 0  , ""],
["Flowers for Algernon"             , "2019-03", 1966, "D.Keyes"        , 1.5, 1.5, 0   , 0  , 1  , 2  , 2  , ""],
["A Discipline of Programming"      , "2019-04", 1976, "E.W.Dijkstra"   , 2  , 2  , 0   , 0.5, 2  , 0  , 2  , ""],/*TODO REVIEW*///"reviews/discipline-of-programming.html"],
["The Tale of the Unknown Island"   , "2019-06", 1998, "J.Saramango"    , 1  , 2  , 2   , 0  , 0  , 1  , 2  , ""],
["Secret Life of Salvador Dali"     , "2019-09", 1942, "S.Dali"         , 1  , 1  , 0   , 2  , 0.5, 2  , 0  , ""],

//["Cosmic Constitutional Theory"     , "2019-12",     , "J.W.Harvey"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW*/
//["Six Amendements"                  , "2019-12",     , "J.P.Stevens"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW*/
//["Great Cases in Constitutional Law", "2019-12",     , ""               , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW*/

["The Extended Phenotype"           , "2016-11", 1982, "R.Dawkins"      , 1.5, 0  , 0   , 0  , 2  , 0  , 1  , ""],/*TODO REVIEW?*/
["Thinking Fast and Slow"           , "2019-03", 2011, "D.Kahneman"     , 1.5, 0  , 0   , 0  , 2  , 1.5, 1.5, ""],
["Category Theory for Programmers"  , "2019-01", 2017, "B.Milewski"     , 0  , 0.5, 0   , 0  , 0.5, 0  , 0.5, ""],
["The Path to Power"                , "2019-05", 1982, "R.Caro"         , 2  , 0  , 0   , 0.5, 1.5, 2  , 1.5, ""],
["Math Foundations of Stat Mech"    , "2019-06", 1949, "A.I.Kinchin"    , 0.5, 0  , 0.5 , 0  , 1  , 0  , 0  , ""],
["Naked"                            , "2019-09", 1997, "D.Sedaris"      , 0  , 0  , 0   , 0.5, 0  , 1  , 0  , ""],/*TODO REVIEW*/
["The Anatomy of Prose"             , "2019-  ", 1954, "M.Boulton"      , 1  , 1  , 0   , 0  , 1 ,  0  , 0  , ""],/*TODO REVIEW*/
    /**/


//-------  covid year A  ------------------------------------------------------
["How to be an Anti-Racist"         , "2020-  ", 2019, "I.X.Kendi"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Entangled Life"                   , "2021-07", 2020, "M.Sheldrake"    , 0  , 0  , 0   , 0  , 0.5, 0  , 0  , ""],/*TODO: REWVIEW?*/
    /**/
    /**/
    /**/
    /**/
    /**/
    /**/

//-------  covid year B  ------------------------------------------------------
["A Society of Mind"                , "2021-04", 1986, "M.Minsky"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["On Beauty and Being Just"         , "2021-  ", 1999, "E.Scarry"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Categories in Context"            , "2021-02", 2016, "E.Riehl"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Advanced Mechanics"               , "2021-  ", 2013, "S.G.Rajeev"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Very Special Relativity"          , "2021-04", 2007, "S.Bais"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Calypso"                          , "2021-06", 2018, "D.Sedaris"      , 0.5, 0.5, 0   , 0.5, 0  , 0.5, 0.5, ""],/*TODO REVIEW?*/
["Never Let Me Go"                  , "2021-06", 2006, "K.Ishiguro"     , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],
["Modern Natural Philosophy"        , "2021-  ", 1966, "C.Truesdell"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["Learning from Data"               , "2021-06", 2012, "Y.S.Abu-Mostafa", 0  , 0  , 0.5 , 0  , 0  , 0  , 0  , ""],
["Concise Algebraic Topology"       , "2021-08", 1999, "J.P.May"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Programming in Haskell"           , "2021-10", 2007, "G.Hutton"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Little Schemer"                   , "2022-06", 1974, "D.P.Friedman"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Learn You a Haskell"              , "2022-03", 2011, "M.Lipovaca"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
    /**/
    /**/
    /**/

//-------  25  ----------------------------------------------------------------
["Differential Forms"               , "2022-07", 1995, "H.Cartan"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Forms in Algebraic Topology"      , "2022-06", 1995, "R.Bott"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Morse Theory"                     , "2022-12", 1963, "J.Milnor"       , 2  , 2  , 0   , 0  , 0.5, 0  , 1.5, ""],
["Character of Physical Law"        , "2022-05", 1965, "R.P.Feynman"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["QED"                              , "2022-11", 1985, "R.P.Feynman"    , 2  , 0  , 0   , 0.5, 1  , 0.5, 1.5, ""],
["Mechanics"                        , "2022-09", 1976, "L.D.Landau"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REREAD, REVIEW?*/
    /**/
    /**/

    /**/
    /**/
    /**/
    /**/
    /**/
    /**/
    /**/
    /**/

//-------  now  ---------------------------------------------------------------
["Dynamics Geometry Behavior"       , "2022-10", 1982, "R.H.Abraham"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
["Blank Spaces"                     , "2023-07", 2016, "C.Lennox"       , 0.5, 0  , 0   , 0.5, 0  , 1  , 0.5, ""],
["The Mysteries of Pittsburgh"      , "2023-07", 1988, "M.Chabon"       , 1  , 1  , 0.5 , 1  , 0  , 1.5, 1.5, ""],
["The Final Solution"               , "2023-07", 2004, "M.Chabon"       , 1.5, 2  , 0.5 , 0.5, 0  , 0.5, 1.5, ""],
["Machine"                          , "2023-07", 2019, "S.Steinberg"    , 1  , 2  , 1   , 0.5, 0.5, 2  , 2  , ""],
["Jekyll and Hyde"                  , "2023-07", 1886, "R.L.Stevenson"  , 1  , 0.5, 0.5 , 0  , 0  , 1  , 2  , ""],
];


//["The Essential Scalia"             , "2023-  ", 2020, "A.Scalia"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Euphonics"                        , "2023-  ", 2023, "J.Woodhouse"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Tour through Mathematical Logic"  , "2023-  ",     , "R.S.Wolf"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Philosophy of Set Theory"         , "2023-  ",     , "M.Tiles"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],


//["Dear American Airlines"           , "2023-  ",     , "J.MileS"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Cat's Paws and Catapults"         , "2023-  ",     , "S.Vogel"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Art of Swedish Death Cleaning"    , "2023-  ",     , "M.Magnusson"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Dictionary of Obscure Sorrows"    , "2023-  ",     , "J.Koenig"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Letters to a Young Contrarian"    , "2023-  ", 2005, "C.Hitchens"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Modest Defence of Publick Stews"  , "2023-  ",     , "B.Mandeville"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Gay Kama Sutra"               , "2023-  ",     , "C.Spencer"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Hatred of Music"              , "2023-  ",     , "P.Quignard"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Government Inspector"         , "2023-  ",     , "N.Gogol"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Overcoat and Other Stories"   , "2023-  ", 1842, "N.Gogol"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Dead Souls"                       , "2023-  ", 1842, "N.Gogol"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Death in Venice"                  , "2023-  ", 1912, "T.Mann"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Felix Krull"                      , "2023-  ", 1954, "T.Mann"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Lolita"                           , "2023-  ", 1955, "V.Nabokov"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Lectures on Gogol"                , "2023-  ",     , "V.Nabokov"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *

//["Madame Bovary"                    , "2023-  ", 1856, "G.Flaubert"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Memoirs of a Woman of Pleasure"   , "2023-  ",     , "J.Cleland"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Ulysses"                          , "2023-  ", 1922, "J.Joyce"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Craft of Tone-Setting"            , "2023-  ",     , "P.Hindemith"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Rhythmic Structure of Music"      , "2023-  ",     , "G.W.Cooper"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Radically Elementary Probability" , "2023-  ", 1987, "E.Nelson"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Kinetic Theory of Dense Gases"    , "2023-  ",     , "S.A.Rice"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *

//["Norse Mythology for Bostonians"   , "2023-  ",     , "R.Geirsson"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Why is Sex Fun"                   , "2023-  ", 1997, "J.Diamond"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *

//["Summerhill Radical Child Rearing" , "2023-  ", 1960, "A.S.Neill"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2016?*/
//["How Surfaces Intersect in Space"  , "2023-  ", 1995, "J.S.Carter"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2019?*/
//["Singularity Theory, Applications" , "2023-  ", 1990, "V.I.Arnold"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2021?*/
//["Sex Tips from a Gay Man"          , "2023-  ", 1997, "D.Anderson"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2020?*/
//["The Shape of Math Arguments"      , "2023-  ", 1988, "A.J.M.vGasteren", 0  , 0  , 2  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2020?*/
//["Functional Data Structures"       , "2023-  ", 1998, "C.Okasaki"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2020?*/

//["On Earth We're Briefly Gorgeous"  , "2023-  ",     , "O.Vuong"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Hideous Men and Other Essays"     , "2023-  ",     , "D.F.Wallace"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Constitutional Design Principles" , "2023-  ", 2006, "D.S.Lutz"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Neon Bible"                   , "2023-  ", 1954, "J.K.Toole"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Song of Achilles"                 , "2023-  ",     , "M.Miller"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Is This How We Run an Election?"  , "2023-  ",     , "S.Wayne"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Our Undemocratic Constitution"    , "2023-  ",     , "S.Levinson"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Constitutionalism"                , "2023-  ",     , "C.H.McIlwain"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Book of Sushi"                    , "2021-  ", 1988, "K.Omae"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Tibetan Book of the Dead"         , "2021-  ", 1960, "W.Y.EvansWentz" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Picturing Quantum Processes"      , "2021-  ", 2017, "B.Coecke"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Sensual Quadratic Form"           , "2021-  ", 1997, "J.H.Conway"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Nomography"                       , "2019-  ", 1964, "D.P.Adams"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Sartorialist"                 , "2019-04", 2009, "S.Schuman"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Morphogenesis"                    , "2018-12", 1951, "J.T.Bonner"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Foundations of Social Evolution"  , "2021-  ", 1998, "S.A.Frank"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Stat Mech and Protein Folding"    , "2018-12", 2005, "K.Huang"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Vision"                           , "2019-02", 1982, "D.Marr"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Thermal Properties of Solids"     , "2023-  ", 1965, "H.J.Goldsmid"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Soft Interfaces"                  , "2023-  ", 1994, "P.G.deGennes"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["The Solid-Liquid Interface"       , "2023-  ",     , "D.P.Woodruff"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Temperatures Very High and Low"   , "2023-  ",     , "M.W.Zemansky"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *





//["Puddnhead Wilson"                 , "2023-  ",     , "M.Twain"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Doctor Faustus"                   , "2023-  ", 1947, "T.Mann"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["As I Lay Dying"                   , "2023-  ", 1930, "W.Faulkner"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Stories: Man With No Idea, etc"   , "2023-  ", 1978, "T.M.Hirsch"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *

//["The Ancestor's Tale"              , "2019-02",     , "R.Dawkins       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Attention and Effort"             , "2021-  ",     , "Kahneman"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Dunes"                            , "2019-03", 2013, "A.Warren"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["At Swim-Two-Birds"                , "2023-  ", 1939, "F.OBrien"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Nine Stories (Bananafish etc)"    , "2023-  ", 1953, "J.D.Salinger"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Lost in the Fun House"            , "2023-  ", 1968, "J.Barth"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["How Charts Lie"                   , "2023-  ",     , "A.Cairo"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["In Defense of Democracy"          , "2023-  ",     , "R.Fuller"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], *
//["Data Structures Algorithms"       , "2023-  ", 1987, "R.E.Tarjan"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Gems of Computer Science"         , "2023-  ", 1998, "U.Schoning"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Combinatorial Species, Trees"     , "2023-  ", 1998, "G.Labelle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Advanced Data Structures"         , "2023-  ", 2020, "S.Shailendra"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Exercises in Style"               , "2023-  ", 1947, "R.Queneau"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Swimming-Pool Library"        , "2023-  ", 1988, "A.Hollinghurst" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Puddnhead Wilson"                 , "2023-  ",     , "M.Twain"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

];



//
//[""                                 , "2023-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//

//["Codex Seraphinianus"              , "2022-  ", 1983, "L.Serafini"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["To Mock a Mockingbird"            , "2012-  ",     , "R.M.Smullyan"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Cube Made Interesting"        , "2023-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Galois Theory"                    , "2023-  ",     , "I.Stewart"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Induction and Analogy in Math"    , "2023-  ", 1954, "G.Polya"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Mathematical Omnibus"             , "2023-  ", 2007, "D.Fuchs"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Automatic Control Systems"        , "2023-  ", 2003, "B.C.Kuo"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Nature of Statistical Learning"   , "2023-  ", 1995, "V.N.Vapnik"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Mathematical Omnibus"             , "2023-  ", 2007, "D.Fuchs"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["37 Bamboos Growing in India"      , "2023-  ", 2007, "S.S.R.Bennet"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Adaptation in Systems"            , "2023-  ", 1992, "J.H.Holland"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Prometheus Unbound"               , "2023-  ", 1898, "P.B.Shelley"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Predicate Calculus, Programs"     , "2023-  ", 1988, "E.W.Dijkstra"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Animal Camouflage"                , "2023-  ",     , "A.Portman"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["First Course in Nomography"       , "2023-  ",     , "S.Brodetsky"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Catastrophic Universe"        , "2023-  ",     , "A.G.Pacholczyk" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["How the World Works"              , "2019-05", 2012, "N.Chomsky"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Matrix Computations"              , "2019-05", 2013, "G.H.Golub"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Geometric Mechanics on Manifolds" , "2019-05", 2005, "O.Calin"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Castable Polyurethane Elastomers" , "2019-05", 2008, "I.Clemitson"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Art and Craft of Poetry"          , "2019-05", 1994, "M.J.Bugeja"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Learning in Embedded Systems"     , "2018-12", 1990, "L.P.Kaelbling"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Watership Down"                   , "2018-12",     , "R.Adams"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Patterns of Survival"             , "2018-12",     , "L.J.Milne"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["New Hacker's Dictionary"          , "2018-12", 1991, "E.S.Raymond"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Literate Programming"             , "2018-12", 1992, "D.E.Knuth"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Hitchhiker's Guide to the Galaxy" , "2012-  ",     , "D.Adams"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*TODO REVIEW?*/
//["Poetry Like Bread"                , "2012-  ", 2000, "M.Espada"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Computational Complexity"         , "2012-  ", 2009, "S.Arora"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["How to Count"                     , "2012-  ",     , "R.B.J.T.Allenby", 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Quantum Statistical Mechanics"    , "2012-  ", 2009, "W.C.Schieve"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* ========================================================================= */
/* =  TO READ SOON  ======================================================== */
/* ========================================================================= */

//["Essential Tversky"                , "2023-  ", 2018, "Tversky"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* ========================================================================= */
/* =  PARTLY READ; EAGER TO CONTINUE  ====================================== */
/* ========================================================================= */

//["Street Fighting Mathematics"      , "2016-04", 2010, "S.Mahajan"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2016?*/
//["Algebraic Combinatorics"          , "2016-05", 2013, "R.P.Stanley"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2016?*/
//["Art of Seminumerical Algorithms"  , "2022-  ", 1997, "D.E.Knuth"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2022?*/
//["Pedestrian Approach to QFT"       , "2022-02", 1972, "E.G.Harris"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2022?*/
//["Elements of Programming"          , "2021-09", 2008, "A.Stepanov"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*NOTE: mostly finished ~ 2020?*/

/* ========================================================================= */
/* =  NOT QUITE FITTING IN REVIEWED BOOKS  ================================= */
/* ========================================================================= */


/* ========================================================================= */
/* =  TO READ EVENTUALLY?  ================================================= */
/* ========================================================================= */


/* -----  governmental design and politics  -------------------------------- */

//["The Federalist Papers"            , "2023-  ",     , "A.Hamilton"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["On Anarchism"                     , "2023-  ",     , "N.Chomsky"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Against Political Equality"       , "2023-  ", 2019, "T.Bai"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Who Rules the World?"             , "2019-05", 2017, "N.Chomsky"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  literature (fiction, humorous and/or gay)  ----------------------- */

//["Cold Comfort Farm"                , "2018-12", 1932, "S.Gibbons"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Red, White, and Royal Blue"       , "2023-  ",     , "C.Mcquiston"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Portnoy's Complaint"              , "2018-08", 1969, "P.Roth"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Pnin"                             , "2018-08", 1957, "V.Nabokov"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Life of Tristam Shandy"           , "2018-08", 1767, "L.Sterne"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Just So Stories"                  , "2018-12", 1902, "R.Kipling"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["White Noise"                      , "2018-11", 1985, "D.DeLillo"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Sot-Weed Factor"              , "2023-  ", 1950, "J.Barth"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Giles Goat-Boy"                   , "2023-  ", 1966, "J.Barth"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Emma"                             , "2023-  ",     , "J.Austen"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  literature (fiction, reflective and/or nostalgic)  ----------------*/

//["The Sea Birds Are Still Alive"    , "2018-12", 1982, "T.C.Bambara"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Leaves of Grass"                  , "2018-12", 1855, "W.Whitman"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Dubliners"                        , "2018-05", 1914, "J.Joyce"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Othello"                          , "2019-04", 1605, "W.Shakespeare"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Lincoln in the Bardo"             , "2019-06", 2017, "G.Saunders"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Sweet Thursday"                   , "2018-11", 1954, "J.Steinbeck"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Bluest Eye"                       , "2018-09", 1970, "T.Morrison"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Stranger"                     , "2018-08", 1942, "A.Camus"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Song of Solomon"                  , "2018-09", 1977, "T.Morrison"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Something Wicked This Way Comes"  , "2019-03", 1962, "R.Bradbury"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Winesburg, Ohio"                  , "2019-05", 1919, "S.Anderson"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Killers; Old Man and the Sea" , "2023-  ",     , "E.Hemingway"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  literature (other)  ----------------*/

//["Walk by Swann's Place"            , "2023-  ", 1913, "M.Proust"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Invitation to a Beheading"        , "2023-  ",     , "V.Nabokov"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Selected Olinger Stories"         , "2023-  ",     , "J.Updike"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Country of the Blind"             , "2023-  ",     , "H.G.Wells"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["One Thousand and One Nights"      , "2023-  ",     ,                  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["In Watermelon Sugar"              , "2023-  ",     , "R.Brautigan"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["All About H Hatterr"              , "2023-  ",     , "G.V.Desani"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Metamorphosis"                , "2023-  ", 1915, "F.Kafka"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Suicide Club"                 , "2023-  ", 1878, "R.L.Stevenson"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],


//["Windup Bird Chronicle"            , "2023-  ",     , "H.Murakami"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["God of Small Things"              , "2023-  ",     , "A.Roy"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Paradise Lost"                    , "2023-  ",     , "J.Milton"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Iliad and Odyssey"            , "2023-  ",     , "W.Marris"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""], // inspired faulkner
//["The Iliad and Odyssey"            , "2023-  ",     , "E.Wilson"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Iliad and Odyssey"            , "2023-  ",     , "R.Lombardo"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Iliad and Odyssey"            , "2023-  ",     , "R.Fagles"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Iliad and Odyssey"            , "2023-  ",     , "R.Lattimore"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Circe"                            , "2023-  ",     , "M.Miller"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Penelopiad"                       , "2023-  ",     , "M.Atwood"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Ransom"                           , "2023-  ",     , "D.Malouf"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["As I Lay Dying"                   , "2023-  ",     , "W.Falkner"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Cold Mountain"                    , "2023-  ",     , "C.Frazier"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//
//["The Metamorphosis"                , "2023-  ", 1915, "F.Kafka"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//
//["Point Counter Point"              , "2023-  ",     , "A.Huxley"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Brave New World"                  , "2018-08", 1932, "A.Huxley"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Sea, The Sea"                 , "2018-08", 1978, "I.Murdoch"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Blue Lotus"                   , "2018-08", 1936, "Herge"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["One Hundred Years of Solitude"    , "2018-08", 1967, "G.G.Marquez"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Invisible Man"                , "2018-08", 1897, "H.G.Wells"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Prometheus Unbound"               , "2018-08", 1820, "P.B.Shelley"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Oliver Twist"                     , "2018-08", 1839, "C.Dickens"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["On the Road"                      , "2018-08", 1957, "J.Kerouac"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Midnight's Children"              , "2018-08", 1981, "S.Rushdie"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Sun Also Rises"               , "2018-08", 1926, "E.Hemingway"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["A Room of One's Own"              , "2023-  ", 1929, "V.Woolf"        , 0  , 0  , 0  , 0  , 0  , 1  , 0  , ""],
//["Bleak House"                      , "2023-  ", 1853, "C.Dickens"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Great Expectations"               , "2023-  ",     , "C.Dickens"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Dead"                         , "2023-  ", 1914, "J.Joyce"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Mansfield Park"                   , "2023-  ", 1814, "J.Austen"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Signal Man"                   , "2023-  ", 1866, "C.Dickens"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["A Simple Heart"                   , "2023-  ", 1877, "G.Flaubert"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Anna Karenin"                     , "2023-  ", 1877, "L.Tolstoy"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Death of Ivan Ilyich"             , "2023-  ", 1886, "L.Tolstoy"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Trial"                        , "2023-  ", 1925, "F.Kafka         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Plan of a Novel"                  , "2023-  ", 1816, "J.Austen"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Happiest I've Been"           , "2023-  ",     , "J.Updike"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Moby Dick"                        , "2023-  ", 1851, "H.Melville"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Billy Budd"                       , "2023-  ", 1891, "H.Melville"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  literature (essays, memoirs)  ------------------------------------ */

//["Order of Things"                  , "2021-  ", 1970, "M.Foucault"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["War Against Cliche"               , "2021-  ", 2000, "M.Amis"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  biography, straightforward memoirs  ------------------------------ */

//["Double Helix"                     , "2023-  ", 1968, "J.D.Watson"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["A Great Improvisation"            , "2023-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Life of Frederick Douglass"       , "2018-08", 1845, "F.Douglass"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["My Memoirs"                       , "2018-08", 2018, "P.T.Kho"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Enrico Fermi"                     , "2019-06", 1970, "E.Segre"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  on art, language, philosophy, cognition  ------------------------- */

//["Euthyphro, Apology, Crito, Phaedo", "2018-12", -399, "Plato"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Republic"                         , "2018-12", -380, "Plato"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Symposium, Phaedrus"              , "2018-12", -370, "Plato"          , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Ethics"                           , "2018-12", -322, "Aristotle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Tipping Point"                , "2018-08", 2000, "M.Gladwell"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Mismeasure of Man"            , "2018-08", 1981, "S.J.Gould"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Math and Plausible Reasoning"     , "2019-03", 1954, "G.Polya"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Sweet Anticipation"               , "2021-  ", 2006, "D.Huron"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Mathematics and Humor"            , "2021-  ", 1982, "J.A.Paulos"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Logic of Scientific Discovery", "2019-01", 1959, "K.Popper"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Enquiry Into Human Understanding" , "2019-03", 1748, "D.Hume"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Critique of Pure Reason"          , "2019-04", 1783, "I.Kant"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Surfaces and Essences"            , "2019-05", 2010, "D.Hofstadter"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["A History of Western Philosophy"  , "2018-12", 1945, "B.Russell"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["In Praise of Idleness etc"        , "2018-12", 1935, "B.Russell"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Conquest of Happiness"        , "2018-09", 1930, "B.Russell"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Te of Piglet"                     , "2023-  ",     , "B.Hoff"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Webster's Unafraid Dictionary"    , "2023-  ",     , ""               , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  museums  --------------------------------------------------------- */

//["Book of Sushi"                    , "2021-  ", 1988, "K.Omae"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Tibetan Book of the Dead"         , "2021-  ", 1960, "W.Y.EvansWentz" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Picturing Quantum Processes"      , "2021-  ", 2017, "B.Coecke"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Sensual Quadratic Form"           , "2021-  ", 1997, "J.H.Conway"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Nomography"                       , "2019-  ", 1964, "D.P.Adams"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Sartorialist"                 , "2019-04", 2009, "S.Schuman"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  fun, honest science  --------------------------------------------- */

//["Morphogenesis"                    , "2018-12", 1951, "J.T.Bonner"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Foundations of Social Evolution"  , "2021-  ", 1998, "S.A.Frank"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Stat Mech and Protein Folding"    , "2018-12", 2005, "K.Huang"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Vision"                           , "2019-02", 1982, "D.Marr"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["On the Origin of Species"         , "2019-02", 1859, "C.Darwin"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Lives of a Cell"                  , "2018-08", 1974, "L.Thomas"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Sapiens"                          , "2019-05", 2014, "Y.N.Harari"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Texture of Nervous Systems"       , "2019-03", 1859, "S.R.Cajal"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Chemical History of a Candle"     , "2019-05", 1825, "M.Faraday"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  compelling deductive beauty  ------------------------------------- */

//["Complex Analysis"                 , "2021-  ", 2003, "E.Stein"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Structure of Classical Mechanics" , "2018-12", 2001, "G.J.Sussman"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Functional Algorithm Design"      , "2021-  ", 2010, "R.Bird"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Finite Dimensional Vector Spaces" , "2018-08", 1942, "P.R.Halmos"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Art of Sorting and Searching"     , "2021-  ", 1998, "D.Knuth"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Calculating Functional Programs"  , "2021-  ",     , "Gibbons"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Six Easy Pieces"                  , "2023-  ",     , "R.P.Feynman"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  how to do cool stuff  -------------------------------------------- */

//["Stats and Scientific Inference"   , "2018-12", 1956, "R.A.Fisher"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Computation Despite Noise"        , "2018-12", 1963, "S.Winograd"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Cybernetics"                      , "2018-12", 1948, "N.Wiener"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["All of Statistics"                , "2018-12", 2004, "L.A.Wasserman"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Logic and Integer Programming"    , "2018-12", 2009, "H.P.Williams"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Structured Programming"           , "2019-06", 1972, "O.J.Dahl"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  curiosity about mathematical physics and physical chemistry  ----- */

//["Phase Transitions Critical Points", "2022-  ", 1971, "H.E.Stanley"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Very Special Relativity"          , "2023-  ",     , "S.Bais"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Unusually Special Relativity"     , "2022-  ", 2021, "A.Dragan"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Gauge Variational Principles"     , "2021-  ", 2010, "D.Bleecker"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Algebraic Topology, Intuitively"  , "2023-  ",     , "H.Sato"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Lectures on h-cobordism Theorem"  , "2018-08", 1965, "J.Milnor"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Chemical Bond"                , "2018-08", 1978, "J.N.Murrell"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Symmetry in Molecules"            , "2018-08", 1972, "J.M.Hollas"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* -----  stuff I ought to know  ------------------------------------------- */

//["Intelligent Machines"             , "2018-12", 1962, "D.A.Bell"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Intro. Lec.s on Convex Optim."    , "2019-06", 2003, "Y.Nesterov"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Art of Fundamental Algorithms"    , "2021-  ", 1968, "D.E.Knuth"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Structure of Science Revolutions" , "2019-02", 1962, "T.S.Kuhn"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Advice for a Young Investigator"  , "2019-06", 1987, "S.R.Cajal"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Language Instinct"            , "2019-02", 1994, "S.Pinker"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Art of Doing Science"             , "2021-  ",     , "Hamilton"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Methods of Information Geometry"  , "2018-11", 1993, "S.Amari"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Generic Chaining"             , "2020-  ", 2005, "M.Talagrand"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Causal Inference in Statistics"   , "2022-  ", 2021, "J.Pearl"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Complex Analysis, Geometrically"  , "2022-  ", 1990, "S.G.Krantz"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Perturbation Methods"             , "2022-  ", 1991, "J.Hinch"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Measure and Category"             , "2021-  ", 1980, "J.C.Oxtoby"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Fermi Pasta Ulam Report"          , "2021-  ", 2008, "G.Gallavotti"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Finite Automata, Algebraically"   , "2021-  ", 2009, "J.Rhodes"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Introduction to Algorithms"       , "2018-08", 1989, "T.H.Cormen"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Artificial Intelligence"          , "2018-08", 1994, "S.J.Russell"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

/* ========================================================================= */
/* =  GIGANTIC RESERVOIR  ================================================== */
/* ========================================================================= */

//["Rabbit, Run"                      , "2019-03", 1962, "J.Updike"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Hunger"                           , "2018-12", 1890, "K.Hamsun"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Wretched"                     , "2018-12", 1862, "V.Hugo"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Miguel Street"                    , "2018-12", 1959, "V.S.Naipaul"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["What is Life?"                    , "2019-01", 1944, "E.Schrodinger"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["This Boy's Life"                  , "2019-06", 1989, "T.Wolff"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Death in Venice"                  , "2019-02", 1912, "T.Mann"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Opticks"                          , "2019-01", 1704, "I.Newton"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Epic of Gilgamesh"                , "2018-12",-1200, "Anonymous"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Beowulf"                          , "2018-12", 1000, "Anonymous"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Oresteia"                         , "2018-12", -458, "Aeschylus"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Medea"                            , "2018-12", -431, "Euripides"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Theban Plays"                     , "2018-12", -429, "Sophocles"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Hippolytus"                       , "2018-12", -428, "Euripides"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Hecuba"                           , "2018-12", -424, "Euripides"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Clouds"                       , "2018-12", -423, "Aristophanes"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Electra"                          , "2018-12", -420, "Euripides"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Lysistrata"                       , "2018-12", -411, "Aristophanes"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Frogs"                        , "2018-12", -405, "Aristophanes"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Dyskolos"                         , "2018-12", -316, "Menander"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Poetics"                          , "2018-12", -335, "Aristotle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Politics"                         , "2018-12", -322, "Aristotle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Metaphysics"                      , "2018-12", -322, "Aristotle"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//

//["Romeo and Juliet"                 , "2018-12", 1595, "W.Shakespeare"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["King Lear"                        , "2018-12", 1606, "W.Shakespeare"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Macbeth"                          , "2018-12", 1606, "W.Shakespeare"  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Angel Esmeralda"              , "2018-12", 2011, "D.DeLilo"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Drown"                            , "2018-12", 1997, "J.Diaz"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Ramayana"                         , "2018-12", -200, "Valmiki"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Book of the Dead"                 , "2018-12",-1475, "Anonymous"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["On Friendship and Old Age"        , "2018-12",  -50, "M.T.Cicero"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Consolation of Philosophy"    , "2018-12",  524, "A.M.S.Boethius" , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Sorrows of Young Werther"     , "2018-08", 1774, "J.W.v.Goethe"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Tale of Genji"                , "2018-08", 1021, "M.Shikibu"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Bardo Thodol"                     , "2018-08", 1386, "K.Lingpa"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Civilization and Its Discontents" , "2018-11", 1930, "S.Freud"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Boy's Life"                       , "2018-12", 1991, "R.R.McCammon"   , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["Visual Display of Quant. Info"    , "2018-11", 2001, "E.R.Tufte"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Envisioning Information"          , "2018-11", 1990, "E.R.Tufte"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["East of Eden"                     , "2018-11", 1952, "J.Steinbeck"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Malloy"                           , "2018-11", 1951, "S.Bellow"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["A Room of One's Own"              , "2018-08", 1929, "V.Woolf"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Unbearable Lightness of Being"    , "2018-08", 1984, "M.Kundera"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Vivisector"                   , "2018-09", 1970, "P.White"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Unnameable"                   , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Giving Offense"                   , "2018-09", 1993, "J.M.Coetzee"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Pastures of Heaven"           , "2018-09", 1932, "J.Steinbeck"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["A Russian Journal"                , "2018-09", 1948, "J.Steinbeck"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Peony"                            , "2018-09", 1948, "P.S.Buck"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],

//["The Lives of Animals"             , "2018-09", 1999, "J.M.Coetzee"    , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Conservationist"              , "2018-09", 1974, "N.Gordimer"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Rites of Passage"                 , "2018-09", 1980, "W.Golding"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Humboldt's Gift"                  , "2018-09", 1975, "S.Bellow"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Adventures of Augie March"    , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Voss"                             , "2018-09", 1957, "P.White"        , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["These 13"                         , "2018-09", 1931, "W.Faulkner"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["The Reivers"                      , "2018-09", 1962, "W.Faulkner"     , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Kim"                              , "2018-09", 1901, "R.Kipling"      , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],


/* ========================================================================= */
/* =  TRIED, DID NOT LIKE  ================================================= */
/* ========================================================================= */

//["Teeth of the Comb"                , "2020-  ", 2017, "O.Alomar"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Math of Shape and Form"           , "2020-  ", 1984, "E.A.Lord"       , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],/*?*/
//["How to Write an Autobio Novel"    , "2019-05", 2018, "A.Chee"         , 0  , 0  , 0  , 0  , 0  , 0  , 0  , ""],
//["Note to Self"                     , "2018-08", 2017, "C.Franta"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Perfect Form"                     , "2022-05", 1997, "D.S.Lemo"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],


