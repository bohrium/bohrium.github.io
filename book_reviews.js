/*title                                date read publ   author            Ov   St   Tr    Hu   TI   HI   SD   review*/
var books = [
["Pleasure of Finding Things Out"   , "2019-04", 1999, "R.P.Feynman"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["A Mathematician's Apology"        , "2019-05", 1940, "G.H.Hardy"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["The Diversity of Life"            , "2016-01", 1992, "E.O.Wilson"     , 1.5, 1  , 0   , 0  , 1  , 0  , 0  , ""],
["Around the World in 80 Days"      , "2016-02", 1873, "J.Verne"        , 0.5, 0  , 0   , 0.5, 0  , 0  , 0.5, ""],
["Wit"                              , "2016-03", 1996, "D.McHale"       , 0.5, 0  , 0   , 1.5, 0  , 0.5, 0.5, ""],
["Street Fighting Mathematics"      , "2016-04", 2010, "S.Mahajan"      , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],
["Algebraic Combinatorics"          , "2016-05", 2013, "R.P.Stanley"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
["Summerhill Radical Child Rearing" , "2016-05", 1960, "A.S.Neill"      , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],/*?*/
["American Born Chinese"            , "2016-06", 2006, "G.L.Yang"       , 1  , 1  , 0   , 0.5, 0.5, 2  , 0.5, ""],
["Surely You're Joking, Mr. Feynman", "2016-06", 1985, "R.P.Feynman"    , 1.5, 0  , 0   , 2  , 0  , 1.5, 1  , ""],

["Godel Escher Bach"                , "2020-07", 1979, "D.Hofstadter"   , 1.5, 2  , 0   , 2  , 1.5, 0  , 2  , ""],
["The Devouring Fungus"             , "2020-07", 1990, "K.Jennings"     , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],
["The Selfish Gene"                 , "2020-08", 1976, "R.Dawkins"      , 0.5, 0  , 0   , 0  , 1.5, 0  , 1  , ""],
["Adventures of Kavalier and Clay"  , "2020-08", 2000, "M.Chabon"       , 1  , 0  , 0.5 , 0  , 0  , 1  , 0.5, ""],
["ANSI C"                           , "2020-09", 1988, "B.W.Kernighan"  , 1  , 0.5, 0   , 0  , 1  , 0  , 0  , ""],
["The Periodic Table"               , "2020-10", 1975, "P.Levi"         , 0.5, 0  , 0.5 , 0  , 1  , 2  , 0  , ""],
["Constitution of the U.S.A."       , "2021-11", 1789, "J.Madison"      , 2  , 1  , 0.5 , 0  , 0.5, 1  , 2  , ""],/*?*/
["Ingredients"                      , "2019-12", 2010, "P.Mirams"       , 0.5, 1  , 0   , 0  , 0.5, 0  , 1  , ""],

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
["An Artist of the Floating World"  , "2018-01", 1986, "K.Ishiguro"     , 2  , 1  , 1   , 0.5, 0  , 1  , 0  , ""],

["A Clockwork Orange"               , "2018-03", 1962, "A.Burgess"      , 2  , 1.5, 0   , 0  , 0  , 2  , 1  , "reviews/a-clockwork-orange.html"],
["Riemannian Geometry"              , "2018-05", 1971, "M.d.Carmo"      , 1  , 0.5, 0   , 0  , 1.5, 0  , 0.5, ""],
["The Planiverse"                   , "2018-07", 1984, "A.K.Dewdney"    , 1  , 0  , 0.5 , 0.5, 1.5, 0.5, 1  , "reviews/planiverse.html"],
["The Armchair Economist"           , "2018-07", 1993, "S.E.Landsburg"  , 2  , 0  , 0   , 0.5, 2  , 1  , 1.5, "reviews/armchair-economist.html"],
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
["Connecticut Yankee in A's Court"  , "2018-12", 1889, "M.Twain"        , 1.5, 1  , 0   , 1.5, 0.5, 0.5, 2  , "reviews/connecticut-yankee.html"],

["Less"                             , "2019-01", 2017, "A.S.Greer"      , 1  , 2  , 1   , 1  , 0  , 2  , 1.5, ""],
["The Odyssey, Wilson"              , "2019-01", 2017, "E.Wilson"       , 2  , 2  , 0   , 0  , 0.5, 0.5, 2  , ""],
["Mother Night"                     , "2019-01", 1962, "K.Vonnegut"     , 1  , 1  , 1   , 0.5, 0  , 1  , 1  , ""],
["12 Rules for Life"                , "2019-02", 2018, "J.B.Peterson"   , 1  , 1  , 1   , 1  , 2  , 1.5, 0  , ""],
["Flowers for Algernon"             , "2019-03", 1966, "D.Keyes"        , 1.5, 1.5, 0   , 0  , 1  , 2  , 2  , ""],
["A Discipline of Programming"      , "2019-04", 1976, "E.W.Dijkstra"   , 2  , 2  , 0   , 0.5, 2  , 0  , 2  , "reviews/discipline-of-programming.html"],
["The Tale of the Unknown Island"   , "2019-06", 1998, "J.Saramango"    , 1  , 2  , 2   , 0  , 0  , 1  , 2  , ""],
["Secret Life of Salvador Dali"     , "2019-09", 1942, "S.Dali"         , 1  , 1  , 0   , 2  , 0.5, 2  , 0  , ""],

["Thinking Fast and Slow"           , "2019-03", 2011, "D.Kahneman"     , 1.5, 0  , 0   , 0  , 2  , 1.5, 1.5, ""],
["Category Theory for Programmers"  , "2019-01", 2017, "B.Milewski"     , 0  , 0.5, 0   , 0  , 0.5, 0  , 0.5, ""],
["The Path to Power"                , "2019-05", 1982, "R.Caro"         , 2  , 0  , 0   , 0.5, 1.5, 2  , 1.5, ""],
["Math Foundations of Stat Mech"    , "2019-06", 1949, "A.I.Kinchin"    , 0.5, 0  , 0.5 , 0  , 1  , 0  , 0  , ""],
["Whales on Stilts"                 , "2019-08", 2005, "M.T.Anderson"   , 0.5, 1  , 0   , 1.5, 0  , 0  , 0  , ""],
["Clue of the Linoleum Lederhosen"  , "2019-08", 2006, "M.T.Anderson"   , 1  , 0  , 0   , 1.5, 0  , 0.5, 0  , ""],
["Naked"                            , "2019-09", 1997, "D.Sedaris"      , 0  , 0  , 0   , 0.5, 0  , 1  , 0  , ""],/*?*/
["The Anatomy of Prose"             , "2019-  ", 1954, "M.Boulton"      , 1  , 1  , 0   , 0  , 1 ,  0  , 0  , ""],

["How to be an Anti-Racist"         , "2020-  ", 2019, "I.X.Kendi"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/

["A Society of Mind"                , "2021-04", 1986, "M.Minsky"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["On Beauty and Being Just"         , "2021-  ", 1999, "E.Scarry"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
["Categories in Context"            , "2021-02", 2016, "E.Riehl"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
["Advanced Mechanics"               , "2021-  ", 2013, "S.G.Rajeev"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Ficciones"                        , "2021-04", 1962, "J.L.Borges"     , 0.5, 1  , 0.5 , 0.5, 0.5, 0  , 0  , ""],/*?*/
["Very Special Relativity"          , "2021-04", 2007, "S.Bais"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Calypso"                          , "2021-06", 2018, "D.Sedaris"      , 0.5, 0.5, 0   , 0.5, 0  , 0.5, 0.5, ""],/*?*/
["Never Let Me Go"                  , "2021-06", 2006, "K.Ishiguro"     , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],

["Modern Natural Philosophy"        , "2021-  ", 1966, "C.Truesdell"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Learning from Data"               , "2021-06", 2012, "Y.S.Abu-Mostafa", 1.5, 0  , 0.5 , 0  , 1  , 0  , 1  , ""],
["Entangled Life"                   , "2021-07", 2020, "M.Sheldrake"    , 0  , 0  , 0   , 0  , 0.5, 0  , 0  , ""],/*?*/
["Concise Algebraic Topology"       , "2021-08", 1999, "J.P.May"        , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],/*?*/
["Fluid Concepts, Analogies"        , "2021-08", 1979, "D.Hofstadter"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Elements of Programming"          , "2021-09", 2008, "A.Stepanov"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Programming in Haskell"           , "2021-10", 2007, "G.Hutton"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Sex Tips from a Gay Man"          , "2021-11", 1997, "D.Anderson"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/

["Essential Tversky"                , "2022-  ", 2018, "Tversky"        , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
["Art of Seminumerical Algorithms"  , "2022-  ", 1997, "D.E.Knuth"      , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
["Perfect Form"                     , "2022-05", 1997, "D.S.Lemo"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Learn You a Haskell"              , "2022-03", 2011, "M.Lipovaca"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["How Surfaces Intersect in Space"  , "2022-04", 1995, "J.S.Carter"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Singularity Theory, Applications" , "2022-05", 1990, "V.I.Arnold"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Differential Forms"               , "2022-07", 1995, "H.Cartan"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Pedestrian Approach to QFT"       , "2022-02", 1972, "E.G.Harris"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["The Extended Phenotype"           , "2021-02", 1982, "R.Dawkins"      , 1.5, 0  , 0   , 0  , 2  , 0  , 1  , ""],/*?*/
["Character of Physical Law"        , "2021-05", 1965, "R.P.Feynman"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Little Schemer"                   , "2022-06", 1974, "D.P.Friedman"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Forms in Algebraic Topology"      , "2022-06", 1995, "R.Bott"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Mechanics"                        , "2022-09", 1976, "L.D.Landau"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Dynamics Geometry Behavior"       , "2022-10", 1982, "R.H.Abraham"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
["QED"                              , "2022-11", 1985, "R.P.Feynman"    , 2  , 0  , 0   , 0.5, 1  , 0.5, 1.5, ""],
["Morse Theory"                     , "2022-12", 1963, "J.Milnor"       , 2  , 2  , 0   , 0  , 0.5, 0  , 1.5, ""],

["Blank Spaces"                     , "2023-07", 2016, "C.Lennox"       , 0.5, 0  , 0   , 0.5, 0  , 1  , 0.5, ""],
["The Mysteries of Pittsburgh"      , "2023-07", 1988, "M.Chabon"       , 1  , 1  , 0.5 , 1  , 0  , 1.5, 1.5, ""],
["The Final Solution"               , "2023-07", 2004, "M.Chabon"       , 1.5, 2  , 0.5 , 0.5, 0  , 0.5, 1.5, ""],
["Machine"                          , "2023-07", 2019, "S.Steinberg"    , 1  , 2  , 1   , 0.5, 0.5, 2  , 2  , ""],


/* ========================================================================= */
/* =  TO READ SOON  ======================================================== */
/* ========================================================================= */

//[""                                 , "2022-  ",     , ""               , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Lolita"                           , "2023-  ",     , "P.Levi"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["At Swim-Two-Birds"                , "2023-  ",     , "F.OBrien"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Neon Bible"                   , "2018-08", 1954, "J.K.Toole"      , 1  , 1.5, 0   , 0  , 0  , 0.5, 0  , ""],

//["The Essential Scalia"             , "2023-  ",     , "A.Scalia"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Constitutionalism"                , "2023-  ",     , "C.H.McIlwain"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Constitutional Design Principles" , "2021-  ", 2006, "D.S.Lutz"       , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],

//["The Sartorialist"                 , "2019-04", 2009, "S.Schuman"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Codex Seraphinianus"              , "2022-  ", 1983, "L.Serafini"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Phase Transitions Critical Points", "2022-  ", 1971, "H.E.Stanley"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Shape of Math Arguments"      , "2019-06", 1988, "A.J.M.vGasteren",1  , 2  , 2   , 0  , 0  , 1  , 2  , ""],
//["Data Structures Algorithms"       , "2022-  ", 1987, "R.E.Tarjan"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Soft Interfaces"                  , "2023-  ",     , "P.G.deGennes"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Why is Sex Fun"                   , "2023-  ",     , "J.Diamond"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Thermal Properties of Solids"     , "2023-  ",     , "H.J.Goldsmid"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* ========================================================================= */
/* =  TO READ EVENTUALLY?  ================================================= */
/* ========================================================================= */


/* -----  governmental design and politics  -------------------------------- */

//["In Defense of Democracy"          , "2023-  ",     , "R.Fuller"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Is This How We Run an Election?"  , "2023-  ",     , "S.Wayne"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Our Undemocratic Constitution"    , "2023-  ",     , "S.Levinson"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Federalist Papers"            , "2023-  ",     , "A.Hamilton"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["On Anarchism"                     , "2023-  ",     , "N.Chomsky"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Against Political Equality"       , "2023-  ", 2019, "T.Bai"          , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Who Rules the World?"             , "2019-05", 2017, "N.Chomsky"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  literature (fiction, humorous and/or gay)  ----------------------- */

//["Cold Comfort Farm"                , "2018-12", 1932, "S.Gibbons"      , 1.5, 0.5, 0   , 2  , 0  , 1  , 0  , ""],
//["Red, White, and Royal Blue"       , "2023-  ",     , "C.Mcquiston"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Portnoy's Complaint"              , "2018-08", 1969, "P.Roth"         , 1  , 0  , 0   , 1  , 0  , 1  , 0  , ""],
//["Pnin"                             , "2018-08", 1957, "V.Nabokov"      , 0  , 0  , 0   , 1  , 0  , 0.5, 0  , ""],
//["Life of Tristam Shandy"           , "2018-08", 1767, "L.Sterne"       , 0  , 1  , 0   , 0  , 0  , 1  , 0  , ""],
//["The Swimming-Pool Library"        , "2019-04", 1988, "A.Hollinghurst" , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Just So Stories"                  , "2018-12", 1902, "R.Kipling"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["White Noise"                      , "2018-11", 1985, "D.DeLillo"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  literature (fiction, reflective and/or nostalgic)  ----------------*/

//["The Sea Birds Are Still Alive"    , "2018-12", 1982, "T.C.Bambara"    , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Leaves of Grass"                 , "2018-12", 1855, "W.Whitman"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Dubliners"                        , "2018-05", 1914, "J.Joyce"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Othello"                          , "2019-04", 1605, "W.Shakespeare"  , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Lincoln in the Bardo"             , "2019-06", 2017, "G.Saunders"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Sweet Thursday"                   , "2018-11", 1954, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Bluest Eye"                       , "2018-09", 1970, "T.Morrison"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Stranger"                    , "2018-08", 1942, "A.Camus"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Song of Solomon"                 , "2018-09", 1977, "T.Morrison"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Something Wicked This Way Comes"  , "2019-03", 1962, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Winesburg, Ohio"                  , "2019-05", 1919, "S.Anderson"     , 0  , 2  , 0   , 0.5, 0  , 1  , 0  , ""],

/* -----  literature (fiction, reflective and/or nostalgic)  ----------------*/

//["Point Counter Point"              , "2023-  ",     , "A.Huxley"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Brave New World"                  , "2018-08", 1932, "A.Huxley"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Sea, The Sea"                 , "2018-08", 1978, "I.Murdoch"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Blue Lotus"                  , "2018-08", 1936, "Herge"          , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["One Hundred Years of Solitude"   , "2018-08", 1967, "G.G.Marquez"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Metamorphosis"               , "2018-08", 1915, "F.Kafka"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Invisible Man"               , "2018-08", 1897, "H.G.Wells"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Prometheus Unbound"              , "2018-08", 1820, "P.B.Shelley"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Oliver Twist"                    , "2018-08", 1839, "C.Dickens"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["On the Road"                     , "2018-08", 1957, "J.Kerouac"      , 0  , 2  , 0   , 0  , 0  , 2  , 0  , ""],
//["Midnight's Children"             , "2018-08", 1981, "S.Rushdie"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Sun Also Rises"              , "2018-08", 1926, "E.Hemingway"    , 0  , 1  , 0   , 0  , 0  , 1  , 0  , ""],

/* -----  literature (essays, memoirs)  ------------------------------------ */

//["On Earth We're Briefly Gorgeous"  , "2018-12",     , "O.Vuong"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Hideous Men and Other Essays"     , "2022-  ",     , "D.F.Wallace"    , 0  , 2  , 0   , 0  , 1  , 0  , 1  , ""],
//["Order of Things"                  , "2021-  ", 1970, "M.Foucault"     , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Letters to a Young Contrarian"    , "2021-  ", 2005, "C.Hitchens"     , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["War Against Cliche"               , "2021-  ", 2000, "M.Amis"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  biography, straightforward memoirs  ------------------------------ */

//["Life of Frederick Douglass"      , "2018-08", 1845, "F.Douglass"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["My Memoirs"                      , "2018-08", 2018, "P.T.Kho"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Enrico Fermi"                     , "2019-06", 1970, "E.Segre"        , 1  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  on art, language, philosophy, cognition  ------------------------- */

//  ["Euthyphro, Apology, Crito, Phaedo", "2018-12", -399, "Plato"          , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Republic"                         , "2018-12", -380, "Plato"          , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Symposium, Phaedrus"              , "2018-12", -370, "Plato"          , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Ethics"                           , "2018-12", -322, "Aristotle"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["The Tipping Point"               , "2018-08", 2000, "M.Gladwell"     , 0.5, 0  , 0   , 0  , 0  , 1  , 0  , ""],
//["The Mismeasure of Man"           , "2018-08", 1981, "S.J.Gould"      , 0  , 0  , 0   , 0  , 1  , 1  , 0  , ""],

//["Math and Plausible Reasoning"     , "2019-03", 1954, "G.Polya"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Sweet Anticipation"               , "2021-  ", 2006, "D.Huron"        , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Mathematics and Humor"            , "2021-  ", 1982, "J.A.Paulos"     , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],

//["The Logic of Scientific Discovery", "2019-01", 1959, "K.Popper"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Enquiry Into Human Understanding" , "2019-03", 1748, "D.Hume"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Critique of Pure Reason"          , "2019-04", 1783, "I.Kant"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Surfaces and Essences"            , "2019-05", 2010, "D.Hofstadter"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["A History of Western Philosophy" , "2018-12", 1945, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["In Praise of Idleness etc"       , "2018-12", 1935, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Conquest of Happiness"       , "2018-09", 1930, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  museums  --------------------------------------------------------- */

//["Book of Sushi"                    , "2021-  ", 1988, "K.Omae"         , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Tibetan Book of the Dead"         , "2021-  ", 1960, "W.Y.EvansWentz" , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Picturing Quantum Processes"      , "2021-  ", 2017, "B.Coecke"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Sensual Quadratic Form"           , "2021-  ", 1997, "J.H.Conway"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Nomography"                       , "2019-  ", 1964, "D.P.Adams"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  fun, honest science  --------------------------------------------- */


//["The Ancestor's Tale"              , "2019-02",     , "R.Dawkins       , 2  , 2  , 0   , 0  , 0  , 0  , 0  , ""],
//["Attention and Effort"             , "2021-  ",     , "Kahneman"       , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Cat's Paws and Catapults"         , "2023-  ",     , "S.Vogel"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Dunes"                            , "2019-03", 2013, "A.Warren"       , 1  , 2  , 0   , 0  , 0  , 0  , 0  , ""],

//["Morphogenesis"                    , "2018-12", 1951, "J.T.Bonner"     , 2  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Foundations of Social Evolution"  , "2021-  ", 1998, "S.A.Frank"      , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Stat Mech and Protein Folding"    , "2018-12", 2005, "K.Huang"        , 1  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Vision"                           , "2019-02", 1982, "D.Marr"         , 2  , 2  , 0   , 0  , 0  , 0  , 0  , ""],

//["On the Origin of Species"         , "2019-02", 1859, "C.Darwin"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Lives of a Cell"                  , "2018-08", 1974, "L.Thomas"       , 0  , 0  , 0   , 0  , 1  , 1  , 0  , ""],
//["Sapiens"                          , "2019-05", 2014, "Y.N.Harari"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Texture of Nervous Systems"       , "2019-03", 1859, "S.R.Cajal"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Chemical History of a Candle"     , "2019-05", 1825, "M.Faraday"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  compelling deductive beauty  ------------------------------------- */

//["Complex Analysis"                 , "2021-  ", 2003, "E.Stein"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Combinatorial Species, Trees"     , "2021-  ", 1998, "G.Labelle"      , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Structure of Classical Mechanics" , "2018-12", 2001, "G.J.Sussman"    , 1  , 2  , 0   , 0.5, 1  , 1  , 1  , ""],
//["Gems of Computer Science"         , "2021-  ", 1998, "U.Schoning"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Functional Data Structures"       , "2021-  ", 1998, "C.Okasaki"      , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Functional Algorithm Design"      , "2021-  ", 2010, "R.Bird"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Advanced Data Structures"         , "2021-  ", 2020, "S.Shailendra"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Finite Dimensional Vector Spaces", "2018-08", 1942, "P.R.Halmos"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Art of Sorting and Searching"     , "2021-  ", 1998, "M.Sipser"       , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Calculating Functional Programs"  , "2021-  ",     , "Gibbons"        , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],

/* -----  how to do cool stuff  -------------------------------------------- */

//["Learning in Embedded Systems"     , "2018-12", 1990, "L.P.Kaelbling"  , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Stats and Scientific Inference"   , "2018-12", 1956, "R.A.Fisher"     , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Computation Despite Noise"        , "2018-12", 1963, "S.Winograd"     , 1  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Cybernetics"                      , "2018-12", 1948, "N.Wiener"       , 2  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["All of Statistics"                , "2018-12", 2004, "L.A.Wasserman"  , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Logic and Integer Programming"    , "2018-12", 2009, "H.P.Williams"   , 2  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["Structured Programming"           , "2019-06", 1972, "O.J.Dahl"       , 1  , 2  , 2   , 0  , 0  , 1  , 2  , ""],

/* -----  curiosity about mathematical physics and physical chemistry  ----- */

//["Unusually Special Relativity"     , "2022-  ", 2021, "A.Dragan"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Gauge Variational Principles"     , "2021-  ", 2010, "D.Bleecker"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Algebraic Topology, Intuitively"  , "2023-  ",     , "H.Sato"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Lectures on h-cobordism Theorem" , "2018-08", 1965, "J.Milnor"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["The Chemical Bond"               , "2018-08", 1978, "J.N.Murrell"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Symmetry in Molecules"           , "2018-08", 1972, "J.M.Hollas"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* -----  stuff I ought to know  ------------------------------------------- */

//["Intelligent Machines"             , "2018-12", 1962, "D.A.Bell"       , 0  , 2  , 0   , 0  , 0  , 0  , 0  , ""],
//["Intro. Lec.s on Convex Optim."    , "2019-06", 2003, "Y.Nesterov"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Art of Fundamental Algorithms"    , "2021-  ", 1968, "D.E.Knuth"      , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Structure of Science Revolutions" , "2019-02", 1962, "T.S.Kuhn"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Radically Elementary Probability" , "2020-  ", 1987, "E.Nelson"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
//["How Charts Lie"                   , "2023-  ",     , "A.Cairo"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Advice for a Young Investigator"  , "2019-06", 1987, "S.R.Cajal"      , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Language Instinct"            , "2019-02", 1994, "S.Pinker"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Art of Doing Science"             , "2021-  ",     , "Hamilton"       , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],

//["Methods of Information Geometry" , "2018-11", 1993, "S.Amari"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Generic Chaining"             , "2020-  ", 2005, "M.Talagrand"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Causal Inference in Statistics"   , "2022-  ", 2021, "J.Pearl"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Complex Analysis, Geometrically"  , "2022-  ", 1990, "S.G.Krantz"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Perturbation Methods"             , "2022-  ", 1991, "J.Hinch"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Measure and Category"             , "2021-  ", 1980, "J.C.Oxtoby"     , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Fermi Pasta Ulam Report"          , "2021-  ", 2008, "G.Gallavotti"   , 0  , 0  , 0   , 0  , 1  , 0  , 0.5, ""],
//["Finite Automata, Algebraically"   , "2021-  ", 2009, "J.Rhodes"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//["Introduction to Algorithms"      , "2018-08", 1989, "T.H.Cormen"     , 1  , 0  , 0   , 0  , 1  , 0  , 0  , ""],
//["Artificial Intelligence"         , "2018-08", 1994, "S.J.Russell"    , 0  , 0  , 0   , 0  , 1  , 0  , 0  , ""],

/* ========================================================================= */
/* =  GIGANTIC RESERVOIR  ================================================== */
/* ========================================================================= */

//["Rabbit, Run"                      , "2019-03", 1962, "J.Updike"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Hunger"                           , "2018-12", 1890, "K.Hamsun"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["The Wretched"                     , "2018-12", 1862, "V.Hugo"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Miguel Street"                    , "2018-12", 1959, "V.S.Naipaul"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["What is Life?"                    , "2019-01", 1944, "E.Schrodinger"  , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["This Boy's Life"                  , "2019-06", 1989, "T.Wolff"        , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["Death in Venice"                  , "2019-02", 1912, "T.Mann"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Opticks"                          , "2019-01", 1704, "I.Newton"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["Epic of Gilgamesh"                , "2018-12",-1200, "Anonymous"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Beowulf"                          , "2018-12", 1000, "Anonymous"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Oresteia"                         , "2018-12", -458, "Aeschylus"      , 1  , 1  , 0   , 1.5, 2  , 0  , 1  , ""],
//  ["Medea"                            , "2018-12", -431, "Euripides"      , 1  , 0  , 0   , 0.5, 0  , 2  , 1  , ""],
//  ["Theban Plays"                     , "2018-12", -429, "Sophocles"      , 1  , 1  , 0   , 1.5, 2  , 0  , 1  , ""],
//  ["Hippolytus"                       , "2018-12", -428, "Euripides"      , 1  , 1  , 2   , 0.5, 0  , 1  , 1  , ""],
//  ["Hecuba"                           , "2018-12", -424, "Euripides"      , 1  , 2  , 0   , 1.5, 0  , 0  , 1  , ""],
//  ["The Clouds"                       , "2018-12", -423, "Aristophanes"   , 0  , 0  , 0   , 1.5, 1  , 0  , 1  , ""],
//  ["Electra"                          , "2018-12", -420, "Euripides"      , 2  , 0  , 2   , 1.5, 0  , 2  , 1  , ""],
//  ["Lysistrata"                       , "2018-12", -411, "Aristophanes"   , 1  , 1  , 0   , 1.5, 2  , 0  , 1  , ""],

//  ["The Frogs"                        , "2018-12", -405, "Aristophanes"   , 1  , 0  , 2   , 0.5, 2  , 1  , 1  , ""],
//  ["Dyskolos"                         , "2018-12", -316, "Menander"       , 1  , 1  , 0   , 1.5, 2  , 0  , 1  , ""],
//  ["Poetics"                          , "2018-12", -335, "Aristotle"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Politics"                         , "2018-12", -322, "Aristotle"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Metaphysics"                      , "2018-12", -322, "Aristotle"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//

//  ["Romeo and Juliet"                 , "2018-12", 1595, "W.Shakespeare"  , 1  , 2  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["King Lear"                        , "2018-12", 1606, "W.Shakespeare"  , 1  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Macbeth"                          , "2018-12", 1606, "W.Shakespeare"  , 2  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Angel Esmeralda"              , "2018-12", 2011, "D.DeLilo"       , 1  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Drown"                            , "2018-12", 1997, "J.Diaz"         , 2  , 1  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["Ramayana"                         , "2018-12", -200, "Valmiki"        , 1  , 2  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Book of the Dead"                 , "2018-12",-1475, "Anonymous"      , 2  , 2  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["On Friendship and Old Age"        , "2018-12",  -50, "M.T.Cicero"     , 1  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Consolation of Philosophy"    , "2018-12",  524, "A.M.S.Boethius" , 2  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Sorrows of Young Werther"     , "2018-08", 1774, "J.W.v.Goethe"   , 1  , 1  , 0   , 0  , 0  , 1  , 0  , ""],

//  ["The Tale of Genji"                , "2018-08", 1021, "M.Shikibu"      , 2  , 1  , 0   , 0  , 0  , 1  , 0  , ""],
//  ["Bardo Thodol"                     , "2018-08", 1386, "K.Lingpa"       , 2  , 1  , 0   , 0  , 0  , 1  , 0  , ""],
//  ["Civilization and Its Discontents" , "2018-11", 1930, "S.Freud"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Boy's Life"                      , "2018-12", 1991, "R.R.McCammon"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["Visual Display of Quant. Info"   , "2018-11", 2001, "E.R.Tufte"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Envisioning Information"         , "2018-11", 1990, "E.R.Tufte"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["East of Eden"                    , "2018-11", 1952, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Malloy"                          , "2018-11", 1951, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["A Room of One's Own"             , "2018-08", 1929, "V.Woolf"        , 0  , 0  , 0   , 0  , 0  , 1  , 0  , ""],
//  ["Unbearable Lightness of Being"   , "2018-08", 1984, "M.Kundera"      , 0  , 0  , 0   , 0  , 0  , 1  , 0  , ""],
//  ["The Vivisector"                  , "2018-09", 1970, "P.White"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Unnameable"                  , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Giving Offense"                  , "2018-09", 1993, "J.M.Coetzee"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Pastures of Heaven"          , "2018-09", 1932, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["A Russian Journal"               , "2018-09", 1948, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Peony"                           , "2018-09", 1948, "P.S.Buck"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

//  ["The Lives of Animals"            , "2018-09", 1999, "J.M.Coetzee"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Conservationist"             , "2018-09", 1974, "N.Gordimer"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Rites of Passage"                , "2018-09", 1980, "W.Golding"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Humboldt's Gift"                 , "2018-09", 1975, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Adventures of Augie March"   , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Voss"                            , "2018-09", 1957, "P.White"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["These 13"                        , "2018-09", 1931, "W.Faulkner"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["The Reivers"                     , "2018-09", 1962, "W.Faulkner"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//  ["Kim"                             , "2018-09", 1901, "R.Kipling"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

/* ========================================================================= */
/* =  TRIED, DID NOT LIKE  ================================================= */
/* ========================================================================= */

//["Teeth of the Comb"                , "2020-  ", 2017, "O.Alomar"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Math of Shape and Form"           , "2020-  ", 1984, "E.A.Lord"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],/*?*/
//["How to Write an Autobio Novel"    , "2019-05", 2018, "A.Chee"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
//["Note to Self"                    , "2018-08", 2017, "C.Franta"       , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],

];

