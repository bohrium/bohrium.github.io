/*title                              date read  publ  author             Ov   St   Tr    Hu   TI   HI   SD   review*/
var books = [
["Cat's Cradle"                    , "2017-01", 1963, "K.Vonnegut"     , 1  , 1  , 0.5 , 1  , 0.5, 0  , 2  , ""],
["Slaughterhouse Five"             , "2017-01", 1969, "K.Vonnegut"     , 0.5, 0.5, 0   , 1  , 0.5, 0.5, 0  , ""],
["Pale Fire"                       , "2017-03", 1962, "V.Nabokov"      , 1.5, 1  , 0   , 1  , 0.5, 0  , 0.5, "reviews/pale-fire.html"],
["A Confederacy of Dunces"         , "2017-04", 1980, "J.K.Toole"      , 2  , 0.5, 0   , 2  , 0  , 1  , 2  , ""],
["Zen in the Art of Writing"       , "2017-05", 1990, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0.5, 0  , ""],
["Galapagos"                       , "2017-05", 1985, "K.Vonnegut"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["O Friend Who Didn't Save My Life", "2017-06", 1990, "H.Guibert"      , 2  , 1.5, 1   , 0.5, 0.5, 2  , 0.5, ""],
["Martian Chronicles"              , "2017-06", 1950, "R.Bradbury"     , 1  , 1  , 2   , 0  , 0  , 0  , 1  , ""],

["Running with Scissors"           , "2017-06", 2002, "A.Burroughs"    , 1.5, 0  , 0   , 2  , 0  , 1  , 1  , ""],
["Cannery Row"                     , "2017-06", 1945, "J.Steinbeck"    , 1  , 0.5, 0   , 0.5, 0  , 0.5, 0  , ""],
["Hebdomeros"                      , "2017-06", 1964, "G.d.Chirico"    , 0  , 2  , 1   , 0  , 0  , 1  , 0  , ""],
["Fahrenheit 451"                  , "2017-07", 1953, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0  , 1  , ""],
["Topology: a Differential View"   , "2017-07", 1965, "J.Milnor"       , 2  , 2  , 0   , 0  , 2  , 0  , 2  , ""],
["How to Do Things Right"          , "2017-07", 1972, "R.Hills"        , 1.5, 0.5, 0   , 2  , 0.5, 0.5, 0  , ""],
["Me Talk Pretty One Day"          , "2017-10", 2000, "D.Sedaris"      , 1  , 0.5, 0.5 , 1  , 0  , 0.5, 0  , ""],
["An Artist of the Floating World" , "2018-01", 1986, "K.Ishiguro"     , 2  , 1  , 1   , 0.5, 0  , 1  , 0  , ""],

["A Clockwork Orange"              , "2018-03", 1962, "A.Burgess"      , 2  , 1.5, 0   , 0  , 0  , 2  , 1  , "reviews/a-clockwork-orange.html"], 
["Riemannian Geometry"             , "2018-05", 1971, "M.d.Carmo"      , 1  , 0.5, 0   , 0  , 1.5, 0  , 0.5, ""],
["The Planiverse"                  , "2018-07", 1984, "A.K.Dewdney"    , 1  , 0  , 0.5 , 0.5, 1.5, 0.5, 1  , "reviews/planiverse.html"],
["The Armchair Economist"          , "2018-07", 1993, "S.E.Landsburg"  , 2  , 0  , 0   , 0.5, 2  , 1  , 1.5, "reviews/armchair-economist.html"],
["The Time Machine"                , "2018-07", 1895, "H.G.Wells"      , 0.5, 0.5, 0.5 , 0  , 0  , 0.5, 0  , "reviews/time-machine.html"],
["Symbols, Signals and Noise"      , "2018-08", 1961, "J.R.Pierce"     , 1.5, 0  , 0.5 , 0  , 1.5, 1  , 2  , "reviews/symbols-signals-noise.html"],
["Foundation"                      , "2018-08", 1951, "I.Asimov"       , 1  , 0  , 1   , 0.5, 0  , 0.5, 1  , "reviews/foundation.html"],
["The Back Passage"                , "2018-08", 2006, "J.Lear"         , 0  , 0  , 0   , 1  , 0  , 1  , 1  , ""],

["The #1 Ladies' Detective Agency" , "2018-08", 1998, "A.M.Smith"      , 1  , 1  , 0   , 1  , 1  , 1  , 0  , ""],
["A Separate Peace"                , "2018-08", 1959, "J.Knowles"      , 2  , 2  , 2   , 0.5, 0  , 2  , 2  , "reviews/a-separate-peace.html"],
["The Remains of the Day"          , "2018-08", 1989, "K.Ishiguro"     , 1  , 0  , 0   , 0  , 1  , 2  , 0.5, ""],
["Incident of the Dog in the Night", "2018-09", 2003, "M.Haddon"       , 1  , 0.5, 0.5 , 0  , 0.5, 1.5, 2  , ""],
/*
["Brief Wondrous Life of Oscar Wao", "2018-09", 2007, "J.Diaz"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["How to Write an Autobio Novel"   , "2018-09", 2018, "A.Chee"         , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Naked"                           , "2018-09", 1997, "D.Sedaris"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Dubliners"                       , "2018-09", 1914, "J.Joyce"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["Civilization and Its Discontents", "2018-09", 1930, "S.Freud"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["White Noise"                     , "2018-09", 1985, "D.DeLillo"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Advice for a Young Investigator" , "2018-09", 1987, "S.R.Cajal"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Methods of Information Geometry" , "2018-09", 1993, "S.Amari"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["Lincoln in the Bardo"            , "2018-10", 2017, "G.Saunders"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Cold Comfort Farm"               , "2018-10", 1932, "S.Gibbons"      , 1.5, 0.5, 0   , 2  , 0  , 1  , 0  , ""],
["Leaves of Grass"                 , "2018-10", 1855, "W.Whitman"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Something Wicked This Way Comes" , "2018-10", 1962, "R.Bradbury"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
*/



/*
// to read (HIGH PRIORITY: >= 4.1 on goodreads, or special exception) 
["Boy's Life"                      , "2018-10", 1991, "R.R.McCammon"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Godel Escher Bach"               , "2018-10", 1979, "D.Hofstadter"   , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Periodic Table"              , "2018-10", 1975, "P.Levi"         , 1  , 2  , 0   , 1  , 0  , 0  , 0  , ""],
["Ficciones"                       , "2018-10", 1962, "J.L.Borges"     , 1  , 2  , 0   , 0.5, 0.5, 0  , 0  , ""],
["Secret Life of Salvador Dali"    , "2018-11", 1942, "S.Dali"         , 1.5, 1  , 0   , 2  , 0.5, 0  , 0  , ""],
["Adventures of Kavalier and Clay" , "2018-11", 2000, "M.Chabon"       , 2  , 1  , 0   , 1  , 0  , 1  , 0  , ""],
["The Diversity of Life"           , "2018-11", 1992, "E.O.Wilson"     , 1.5, 1  , 0   , 0  , 1  , 0  , 0  , ""],
["Discipline of Programming"       , "2018-11", 1976, "E.W.Dijkstra"   , 1.5, 0  , 0   , 0  , 2  , 0  , 0  , ""],
["Visual Display of Quant. Info"   , "2018-11", 2001, "E.R.Tufte"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["East of Eden"                    , "2018-11", 1952, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Malloy"                          , "2018-11", 1951, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Sweet Thursday"                  , "2018-11", 1954, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["A History of Western Philosophy" , "2018-12", 1945, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["In Praise of Idleness etc"       , "2018-12", 1935, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Just So Stories"                 , "2018-12", 1902, "R.Kipling"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

// to read (MEDIUM PRIORITY: == 4.0 on goodreads, or special exception) 
["The Periodic Table"              , "2018-08", 1975, "P.Levi"         , 1  , 2  , 0   , 1  , 0  , 0  , 0  , ""],
["The Selfish Gene"                , "2018-08", 1976, "R.Dawkins"      , 2  , 0  , 0   , 0  , 2  , 0  , 0  , ""],
["Thinking Fast and Slow"          , "2018-08", 2011, "D.Kahneman"     , 1  , 0  , 0   , 0  , 1.5, 1  , 0  , ""],
["Flowers for Algernon"            , "2018-08", 1966, "D.Keyes"        , 2  , 1  , 0   , 2  , 0  , 1  , 0  , ""],
["A Room of One's Own"             , "2018-08", 1929, "V.Woolf"        , 0  , 0  , 0   , 0  , 0  , 1  , 0  , ""],
["Note to Self"                    , "2018-08", 2017, "C.Franta"       , 0  , 1  , 0   , 0  , 0  , 0  , 0  , ""],
["Unbearable Lightness of Being"   , "2018-08", 1984, "M.Kundera"      , 0  , 0  , 0   , 0  , 0  , 1  , 0  , ""],
["Lives of a Cell"                 , "2018-08", 1974, "L.Thomas"       , 0  , 0  , 0   , 0  , 1  , 1  , 0  , ""],
["My Memoirs"                      , "2018-08", 2018, "P.T.Kho"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Vivisector"                  , "2018-09", 1970, "P.White"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Unnameable"                  , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Giving Offense"                  , "2018-09", 1993, "J.M.Coetzee"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Pastures of Heaven"          , "2018-09", 1932, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["A Russian Journal"               , "2018-09", 1948, "J.Steinbeck"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Conquest of Happiness"       , "2018-09", 1930, "B.Russell"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Peony"                           , "2018-09", 1948, "P.S.Buck"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

// to read (LOW PRIORITY: <= 3.9 on goodreads, or special exception) 
["Whales on Stilts"                , "2018-08", 2005, "M.T.Anderson"   , 1.5, 1  , 0   , 2  , 0  , 0  , 0  , ""],
["Clue of the Linoleum Lederhosen" , "2018-08", 2006, "M.T.Anderson"   , 2  , 0  , 0   , 2  , 0  , 1  , 0  , ""],
["The Tipping Point"               , "2018-08", 2000, "M.Gladwell"     , 0.5, 0  , 0   , 0  , 0  , 1  , 0  , ""],
["The Anatomy of Prose"            , "2018-08", 1954, "M.Boulton"      , 1  , 1  , 0   , 0  , 1 ,  0  , 0  , ""],
["Connecticut Yankee in A's Court" , "2018-08", 1889, "M.Twain"        , 1  , 0  , 0   , 1  , 0  , 0  , 0  , ""],
["Winesburg, Ohio"                 , "2018-08", 1919, "S.Anderson"     , 0  , 2  , 0   , 0.5, 0  , 1  , 0  , ""],
["On the Road"                     , "2018-08", 1957, "J.Kerouac"      , 0  , 2  , 0   , 0  , 0  , 2  , 0  , ""],
["The Language Instinct"           , "2018-08", 1994, "S.Pinker"       , 1  , 0  , 0   , 0  , 1  , 1  , 0  , ""],
["The Mismeasure of Man"           , "2018-08", 1981, "S.J.Gould"      , 0  , 0  , 0   , 0  , 1  , 1  , 0  , ""],
["Midnight's Children"             , "2018-08", 1981, "S.Rushdie"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Life of Tristam Shandy"          , "2018-08", 1767, "L.Sterne"       , 1  , 0  , 0   , 0  , 0  , 1  , 0  , ""],
["The Sun Also Rises"              , "2018-08", 1926, "E.Hemingway"    , 0  , 1  , 0   , 0  , 0  , 1  , 0  , ""],
["Pnin"                            , "2018-08", 1957, "V.Nabokov"      , 0  , 0  , 0   , 1  , 0  , 0.5, 0  , ""],
["The Neon Bible"                  , "2018-08", 1954, "J.K.Toole"      , 1  , 1.5, 0   , 0  , 0  , 0.5, 0  , ""],
["The Sea, The Sea"                , "2018-08", 1978, "I.Murdoch"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Portnoy's Complaint"             , "2018-08", 1969, "P.Roth"         , 1  , 0  , 0   , 1  , 0  , 1  , 0  , ""],
["The Lives of Animals"            , "2018-09", 1999, "J.M.Coetzee"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""], 
["Bluest Eye"                      , "2018-09", 1970, "T.Morrison"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Song of Solomon"                 , "2018-09", 1977, "T.Morrison"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Conservationist"             , "2018-09", 1974, "N.Gordimer"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Rites of Passage"                , "2018-09", 1980, "W.Golding"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Humboldt's Gift"                 , "2018-09", 1975, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Adventures of Augie March"   , "2018-09", 1953, "S.Bellow"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Voss"                            , "2018-09", 1957, "P.White"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["These 13"                        , "2018-09", 1931, "W.Faulkner"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Reivers"                     , "2018-09", 1962, "W.Faulkner"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Kim"                             , "2018-09", 1901, "R.Kipling"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

// to read (UNSORTED) 
["Category Theory for Programmers" , "2018-08", 2017, "B.Milewski"     , 0  , 0  , 0   , 0  , 1  , 0  , 0  , ""],
["Introduction to Algorithms"      , "2018-08", 1989, "T.H.Cormen"     , 1  , 0  , 0   , 0  , 1  , 0  , 0  , ""],
["Artificial Intelligence"         , "2018-08", 1994, "S.J.Russell"    , 0  , 0  , 0   , 0  , 1  , 0  , 0  , ""],
["Learning from Data"              , "2018-08", 2012, "Y.S.Abu-Mostafa", 1.5, 0  , 0   , 0  , 1  , 0  , 0  , ""],
["Morse Theory"                    , "2018-08", 1963, "J.Milnor"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Lectures on h-cobordism Theorem" , "2018-08", 1965, "J.Milnor"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Chemical Bond"               , "2018-08", 1978, "J.N.Murrell"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Symmetry in Molecules"           , "2018-08", 1972, "J.M.Hollas"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Finite Dimensional Vector Spaces", "2018-08", 1942, "P.R.Halmos"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Math Foundations of Stat Mech"   , "2018-08", 1949, "A.I.Kinchin"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["A Society of Mind"               , "2018-08", 1986, "M.Minsky"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],

["The Stranger"                    , "2018-08", 1942, "A.Camus"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Blue Lotus"                  , "2018-08", 1936, "Herge"          , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Brave New World"                 , "2018-08", 1932, "A.Huxley"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["One Hundred Years of Solitude"   , "2018-08", 1967, "G.G.Marquez"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Metamorphosis"               , "2018-08", 1915, "F.Kafka"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Hunger"                          , "2018-08", 1890, "K.Hamsun"       , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["The Invisible Man"               , "2018-08", 1897, "H.G.Wells"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Around the World in 80 Days"     , "2018-08", 1873, "J.Verne"        , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Life of Frederick Douglass"      , "2018-08", 1845, "F.Douglass"     , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Prometheus Unbound"              , "2018-08", 1820, "P.B.Shelley"    , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
["Oliver Twist"                    , "2018-08", 1839, "C.Dickens"      , 0  , 0  , 0   , 0  , 0  , 0  , 0  , ""],
*/

];
