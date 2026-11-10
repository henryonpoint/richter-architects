const SECTORS = ["Government / Institutional","Museum / Visitor","Educational","Commercial / Industrial","Residential","Religious"];

const PROJECTS = [
 {slug:"columbus-lpoe", name:"US Land Port of Entry", place:"Columbus, New Mexico", client:"U.S. General Services Administration", sectors:[0],
  awards:["AIA COTE Top Ten Award, 2020","GSA Honor Award for Architecture, 2022","GSA Honor Award for Landscape Architecture, 2022","Texas Society of Architects Design Award, 2020","AIA New Mexico Honor Award, 2020","Brick in Architecture Best in Class, 2020"],
  credit:"Photography by Robert Reck and David Richter",
  text:["A port of entry from Mexico to a small New Mexican village made famous by Pancho Villa's incursion more than a century ago. The entirely new facility echoes the traditional colors of New Mexico and the Chihuahuan desert.","Interiors are flooded with diffused north light from clerestories, and terraced landscaping that captures and holds rainwater gives the port a park-like atmosphere."]},
 {slug:"manila-american-cemetery-visitor-center", name:"Manila American Cemetery Visitor Center", place:"Manila, Philippines", client:"American Battle Monuments Commission", sectors:[1],
  awards:["AIA International Region Award, 2019","AIA Corpus Christi Award of Merit, 2022"],
  text:["Located in the heart of Manila at the historic Manila American Cemetery, the visitor center provides historic orientation to visitors from around the world and amplifies the message implicit in the largest American military cemetery on foreign soil.","Set within dense tropical landscape, the building defers to the existing memorial and directs the visitor's attention to the vast arrays of headstones that are the true centerpiece of the site."]},
 {slug:"port-of-corpus-christi", name:"Port of Corpus Christi Administration Building", place:"Corpus Christi, Texas", client:"Port of Corpus Christi", sectors:[0,3],
  awards:["Brick in Architecture Bronze Award, Commercial, 2021"],
  text:["The new administration building for the port authority sits at the mouth of the inner harbor. The design explores the duality and dialogue between land and sea.","Brick and concrete on the landside meet glass on the waterside, and carefully framed views register the Port's role as the connection between the two."]},
 {slug:"del-mar-academic-and-music-2", name:"Del Mar College General Academic and Music Building II", place:"Corpus Christi, Texas", client:"Del Mar College", sectors:[2],
  awards:["AIA Corpus Christi Mayor's Choice Award, 2022","AIA Corpus Christi Award of Merit, 2022","Brick in Architecture Bronze Award, 2022","Brick in Architecture Bronze Award, Educational, 2021"],
  credit:"Design Architect: Richter Architects. Associate Architect: BRW Architects",
  facts:"130,000 square feet",
  text:["Phase II completes the new facilities for the Music Department begun in Phase I, adding rehearsal rooms, faculty studios, practice rooms and music classrooms, along with academic space for Math, English, Social Sciences, Speech and Philosophy.","The building is a cluster of volumes linked on upper floors by glazed bridges. Between them, wind and sun protected courtyards, gardens, amphitheaters and loggias connect teaching spaces and faculty offices with daylight and views."]},
 {slug:"del-mar-music-1", name:"Del Mar College Music Building, Phase I", place:"Corpus Christi, Texas", client:"Del Mar College", sectors:[2],
  awards:["AIA Corpus Christi Merit Award, 2016"],
  text:["An addition and renovation for a community college music program with a nationally recognized reputation, including two recording studios, a rehearsal hall, music laboratories and classrooms.","The campus's traditional buff brick and pink cast stone are joined by a curved, self-shading curtain wall on the east. Its concave face serves as both acoustic and visual backdrop for an amphitheater in the east courtyard."]},
 {slug:"west-pecos-safety-rest-area", name:"TxDOT West Pecos County Safety Rest Area", place:"Fort Stockton, Texas", client:"Texas Department of Transportation", sectors:[1,0],
  awards:["AIA Corpus Christi Award of Excellence, 2019","AIA Corpus Christi People's Choice Award, 2019","Korean Institute of Architects, 100 Architects of the Year, 2018"],
  text:["An interstate rest area on I-10 at the eastern approach to the Davis Mountains, drawing on the geology, ecology and cultural history of the West Texas desert.","Restrooms, exhibits, picnic areas, play spaces and nature trails give travelers real relief from the road. The land itself, its wide sky and exposed strata, is the core inspiration, captured in both intimate details and distant horizons."]},
 {slug:"national-museum-of-the-pacific-war", name:"National Museum of the Pacific War", place:"Fredericksburg, Texas", client:"The Admiral Nimitz Foundation and the Texas Historical Commission", sectors:[1],
  awards:["AIA Corpus Christi Honor Award, 2009"],
  text:["An addition and renovation creating the George H.W. Bush Gallery, composed as a series of simple one-story stone facades linked by courtyards and low stone walls that respect the historic district.","An outer layer is scaled to the neighborhood streetscape, while an inner layer steps up to express the museum's national significance. Materials and details recall both World War II military construction and Texas Hill Country building traditions."]},
 {slug:"pacific-combat-zone", name:"Pacific Combat Zone, Phase I", place:"Fredericksburg, Texas", client:"The Admiral Nimitz Foundation and the Texas Historical Commission", sectors:[1],
  awards:["AIA Corpus Christi Honor Award, 2016"],
  text:["Spanning half a city block, the Pacific Combat Zone houses more than a dozen operational World War II combat vehicles, an Avenger torpedo bomber and a PT boat. Phase I adds an arrival building, museum store, orientation plaza and public restrooms.","Cast concrete and corrugated metal refer to the bunkers and temporary military structures of the Pacific theater. The museum's emphasis is on education and remembrance of human sacrifice."]},
 {slug:"harte-research-institute", name:"Harte Research Institute for Gulf of Mexico Studies", place:"Corpus Christi, Texas", client:"Texas A&M University System", sectors:[2,0],
  awards:["National Brick in Architecture Gold Award, 2007","AIA Corpus Christi Citation Award, 2009"],
  text:["Dedicated to the marine and coastal sustainability of the Gulf, the building embodies the Institute's research, education and public policy mission, with laboratories, offices, classrooms and a conference center.","Brick, stainless steel and glass are handled with precision in the science spaces and more freely in the public areas. East and west exposures are minimized, while north-facing public spaces open to the bay under suspended light shelves and vaulted ceilings."]},
 {slug:"voestalpine", name:"Voestalpine Administration Building", place:"Portland, Texas", client:"Voestalpine Texas, LLC", sectors:[3],
  awards:["AGC Texas Outstanding Construction Award, 2015","AIA Corpus Christi Award of Merit, 2019"],
  text:["A design-build operations office for a new Austrian-owned steel plant, delivered on a demanding schedule and to European corporate standards.","The building celebrates steel, exposing elements usually concealed such as metal studs and lath. A deeply shaded west entry reduces energy use, and a monumental stair frames the plant's 400-foot process tower."]},
 {slug:"tornillo-port-of-entry", name:"Tornillo-Guadalupe Land Port of Entry", place:"El Paso County, Texas", client:"U.S. General Services Administration", sectors:[0],
  awards:["AIA Corpus Christi Award of Merit, 2019","LEED Gold"],
  text:["A commercial vehicle inspection facility on 117 acres of former irrigated farmland, conceived as a vest-pocket desert micro-ecology within the region's green agricultural setting.","Locally quarried stone carries the colors of the desert, corrugated steel recalls regional farm buildings, and precast concrete canopies integrate inspection technology, ventilation, daylight and room for expansion."]},
 {slug:"ysleta-port-of-entry", name:"Ysleta Land Port of Entry", place:"El Paso, Texas", client:"U.S. General Services Administration", sectors:[0],
  awards:["AIA Corpus Christi Citation Award, 2013","LEED Silver"],
  text:["New commercial inspection canopies, exit booths and secondary inspection stations, with expansions and renovations to vehicular, pedestrian and commercial operations.","Red brick relates to the existing buildings of the region, while the rhythm of the canopies echoes the mountain horizon that defines El Paso."]},
 {slug:"texas-travel-information-center", name:"Texas Travel Information Center", place:"Amarillo, Texas", client:"TxDOT Travel Division", sectors:[1,0],
  awards:["Texas Society of Architects Honor Award, 2004","AIA Corpus Christi Merit Award, 2005"],
  text:["A visitor center at a sprawling freeway site near the Amarillo airport, conceived as an inverted form of nearby Palo Duro Canyon rising from a created creek.","Banded walls express the canyon's layered strata and the natural forces that formed it, set within grassland cut by water."]},
 {slug:"brooks-county-safety-rest-area", name:"TxDOT Brooks County Safety Rest Area", place:"Falfurrias, Texas", client:"Texas Department of Transportation", sectors:[1,0],
  awards:["National AIA Honor Award, 1999","Texas Society of Architects 25-Year Award, 2023","Texas Society of Architects Honor Award, 1998 and 2002"],
  text:["A cluster of modest restroom buildings anchors a grassy quadrangle beneath live oaks. Considered the gateway to the Lower Rio Grande Valley, the rest area grows out of the earth and echoes the region's history in scale, form and texture."]},
 {slug:"kenedy-county-safety-rest-area", name:"TxDOT Kenedy County Safety Rest Area", place:"Kenedy County, Texas", client:"Texas Department of Transportation", sectors:[1,0],
  awards:["Texas Society of Architects Honor Award, 2002","AIA Corpus Christi Honor Award, 2002"],
  text:["Set in the highway median through South Texas ranch country, the rest area reflects a blend of Mexican tradition with ranching and oil industry heritage.","Like historic rural train stations, vaulted bent-pipe trusses carry heavy planked wood roofs. The trusses hold branding-iron medallions of renowned local ranches, continuing the region's blacksmith craft."]},
 {slug:"rose-house", name:"Rose House", place:"Wimberley, Texas", client:"Private residence", sectors:[4],
  awards:["AIA Corpus Christi People's Choice Award, 2016"],
  text:["Nestled into a hillside dense with live oaks, the house is designed to embrace the Hill Country. Bedrooms and studios sit within the foliage, while larger open rooms take in the long views.","Two rectangular volumes set at an angle form a private entry court and open toward a terraced garden. A gallery linking them displays the owners' folk art collection, in a palette of native limestone, site-harvested stone, wood and muted color."]},
 {slug:"turpin-west-house", name:"Turpin West House", place:"Corpus Christi, Texas", client:"Private residence", sectors:[4],
  awards:["AIA Corpus Christi Merit Award, 2016"],
  text:["A very small, modest and well-crafted home for a recently retired couple, fitted into an established neighborhood.","Planned with the efficiency of a sailboat, the house relies on daylight and natural ventilation for most of the year and opens to outdoor rooms for herb gardens, birds and butterflies."]},
 {slug:"st-marks-episcopal-church", name:"St. Mark's Episcopal Church", place:"Corpus Christi, Texas", client:"Episcopal Church Corporation of West Texas", sectors:[5],
  awards:["Texas Society of Architects Honor Award, 1990","AIA Corpus Christi Honor Award, 1991"],
  facts:"8,500 square feet",
  text:["A new multipurpose building for a neighborhood parish, with a suburban site master-planned as a cloistered compound around a courtyard.","A basilica-form hall with an acoustically adjustable ceiling and movable partitions serves worship, education and fellowship."]}
];

const FEATURED = ["columbus-lpoe","manila-american-cemetery-visitor-center","port-of-corpus-christi","del-mar-music-1","west-pecos-safety-rest-area","national-museum-of-the-pacific-war"];

const BOARDS = [
 {name:"Caddo Mounds Cultural Center, Phase II", img:"on-the-boards/03"},
 {name:"Levi Jordan Visitor Center", img:"on-the-boards/01"},
 {name:"TxDOT Nolan County Safety Rest Area", img:"on-the-boards/04"}
];

const LEADERSHIP = [
 {name:"David Richter", role:"FAIA, President", img:"img/people/david-richter.jpg"},
 {name:"Elizabeth Chu Richter", role:"FAIA, Chief Executive Officer", img:"img/people/elizabeth-chu-richter.jpg"},
 {name:"Maya Richter Hernandez", role:"AIA, Principal Architect", img:"img/people/maya-richter-hernandez.jpg"},
 {name:"Elissa Richter", role:"AIA, Principal Architect", img:"img/people/elissa-richter.jpg"},
 {name:"Aaron Geiser", role:"Senior Project Manager", img:"img/people/aaron-geiser.jpg"}
];

const PRINCIPALS = [
 ["David Richter","FAIA"],["Elizabeth Chu Richter","FAIA"],["Samuel Morris","AIA"],
 ["Maya Richter Hernandez","AIA"],["Elissa Ling Richter","AIA"],["Frank Trimble","AIA"]
];

const SERVICES = ["Master Planning","Programming","Architectural Design","Interior Design","Construction Documents","Construction Administration and Management"];

const AWARDS = [
 [2023,[["Texas Society of Architects 25-Year Award","Brooks County Safety Rest Area, Falfurrias, TX"]]],
 [2022,[["GSA Honor Award for Architecture","US Land Port of Entry, Columbus, NM"],["GSA Honor Award for Landscape Architecture","US Land Port of Entry, Columbus, NM"],["AIA Corpus Christi Award of Excellence","Indian Point Pavilion, Portland, TX"],["AIA Corpus Christi Award of Excellence","US Land Port of Entry, Columbus, NM"],["AIA Corpus Christi Award of Merit","Manila American Cemetery Visitor Center, Manila, Philippines"],["AIA Corpus Christi Award of Merit","Del Mar College General Academics and Music Building II"],["AIA Corpus Christi Mayor's Choice Award","Del Mar College General Academics and Music Building II"],["Brick in Architecture Bronze Award","Del Mar College General Academics and Music Building II"]]],
 [2021,[["Texas Society of Architects Medal for Lifetime Achievement","David Richter, FAIA and Elizabeth Chu Richter, FAIA"],["Brick in Architecture Bronze Award, Educational","Del Mar Academic and Music Phase II, Corpus Christi, TX"],["Brick in Architecture Bronze Award, Commercial","Port of Corpus Christi Office Building, Corpus Christi, TX"]]],
 [2020,[["AIA COTE Top Ten Award","US Land Port of Entry, Columbus, NM"],["Texas Society of Architects Design Award","US Land Port of Entry, Columbus, NM"],["AIA New Mexico Honor Award","US Land Port of Entry, Columbus, NM"],["Brick in Architecture Best in Class, Commercial","US Land Port of Entry, Columbus, NM"],["AIA Corpus Christi Firm of the Year","Richter Architects"]]],
 [2019,[["AIA International Region Award","Manila American Cemetery Visitor Center, Manila, Philippines"],["AIA Corpus Christi Award of Excellence","TxDOT West Pecos County Safety Rest Area, Fort Stockton, TX"],["AIA Corpus Christi People's Choice Award","TxDOT West Pecos County Safety Rest Area, Fort Stockton, TX"],["AIA Corpus Christi Award of Merit","Voestalpine Administration Building"],["AIA Corpus Christi Award of Merit","Tornillo Land Port of Entry, El Paso, TX"],["AIA Corpus Christi Award of Merit","San Patricio Municipal Water District, San Patricio County, TX"]]],
 [2018,[["100 Architects of the Year","Korean Institute of Architects"]]],
 [2016,[["AIA Corpus Christi Honor Award","Pacific Combat Zone, Phase I, Fredericksburg, TX"],["AIA Corpus Christi Merit Award","Del Mar Music Building Phase I, Corpus Christi, TX"],["AIA Corpus Christi Merit Award","Turpin West House, Corpus Christi, TX"],["AIA Corpus Christi People's Choice Award","Rose House, Wimberley, TX"]]],
 [2015,[["AGC Texas Building Branch Outstanding Construction Award","Voestalpine Administration Building"]]],
 [2013,[["AIA Corpus Christi Citation Award","Ysleta Land Port of Entry, El Paso, TX"],["AIA Corpus Christi Citation Award","University of Texas Marine Science Institute, Port Aransas, TX"]]],
 [2011,[["Texas Society of Architects Architecture Firm Award","Richter Architects"]]],
 [2010,[["National Brick in Architecture Bronze Award","Rose Haggar Park Pavilion, Dallas, TX"]]],
 [2009,[["AIA Corpus Christi Citation Award","Harte Research Institute for Gulf of Mexico Studies"],["AIA Corpus Christi Citation Award","Del Mar Health Sciences and Technology Center"],["AIA Corpus Christi Honor Award","National Museum of the Pacific War, Fredericksburg, TX"],["TASA/TASB Award for Design, Value and Public Participation","West Oso High School, Corpus Christi, TX"]]],
 [2007,[["National Brick in Architecture Gold Award","Harte Research Institute for Gulf of Mexico Studies"]]],
 [2006,[["National Brick in Architecture Gold Award","Oak Park Elementary School, Corpus Christi, TX"],["TASB/TASA Citation Award","Oak Park Elementary School, Corpus Christi, TX"]]],
 [2005,[["AIA Corpus Christi Honor Award","RTA Southside Transfer Station, Corpus Christi, TX"],["AIA Corpus Christi Honor Award","Oak Park Elementary School, Corpus Christi, TX"],["AIA Corpus Christi Merit Award","Texas Travel Information Center, Amarillo, TX"]]],
 [2004,[["Texas Society of Architects Honor Award","Texas Travel Information Center, Amarillo, TX"]]],
 [2003,[["National Brick in Architecture Award","Congressman Solomon P. Ortiz International Center"]]],
 [2002,[["AIA Corpus Christi Honor Award","Kenedy County Safety Rest Area"],["AIA Corpus Christi Merit Award","Mustang Island Episcopal Conference Center"],["AIA Corpus Christi Citation Award","Mustang Island Episcopal Conference Center"],["Texas Society of Architects Honor Award","Congressman Solomon P. Ortiz International Center"],["Texas Society of Architects Honor Award","Kenedy County Safety Rest Area"],["Texas Society of Architects Honor Award","Brooks County Safety Rest Area"]]],
 [2001,[["Brick in Architecture Award","Brooks County Safety Rest Area"]]],
 [1999,[["National AIA Honor Award","Brooks County Safety Rest Area"],["AIA Corpus Christi Honor Award","Crocker House, Corpus Christi, TX"],["AIA Corpus Christi Merit Award","Grace Presbyterian Church, Corpus Christi, TX"]]],
 [1998,[["Texas Society of Architects Honor Award","Brooks County Safety Rest Area"]]],
 [1997,[["Texas Society of Architects Honor Award","Hulings Gatehouse Studio and Renovation, Corpus Christi, TX"]]],
 [1995,[["NEA / U.S. Department of Transportation Honor Award","Staples Street Bus Stops, Corpus Christi, TX"],["AIA Corpus Christi Honor Award","Citizens Bank Staples Branch"],["AIA Corpus Christi Honor Award","First Baptist Church Education Addition"],["AIA Corpus Christi Honor Award","Rangel Residence"],["AIA Corpus Christi Merit Award","Falfurrias State Bank"]]],
 [1991,[["AIA Corpus Christi Citation Award","Greenwood Branch Library Addition"],["AIA Corpus Christi Honor Award","St. Mark's Episcopal Church"],["AIA Corpus Christi Merit Award","Del Mar College Fine Arts Center"],["AIA Corpus Christi Citation Award","The Bank of Corpus Christi, Esplanade"]]],
 [1990,[["Texas Society of Architects Honor Award","St. Mark's Episcopal Church"]]],
 [1988,[["TASA/TASB/TSA Exhibit of School Architecture Honor Award","Menger School Addition and Renovation"],["AIA Corpus Christi Honor Award","Richter House"],["AIA Corpus Christi Merit Award","YWCA of Corpus Christi"],["AIA Corpus Christi Citation Award","Nueces County Community Center"],["AIA Corpus Christi Citation Award","Corpus Christi City Hall"]]],
 [1986,[["Corpus Christi Landmark Commission Award","The Water Street Market"],["Texas Society of Architects Jury Commendation","La Perla Gallery"],["Texas Society of Architects Jury Commendation","Water Street Market"]]],
 [1985,[["Corpus Christi Landmark Commission Award","The Guaranty Title Building"],["AIA Corpus Christi Honor Award","Las Palmas Shopping Center"],["AIA Corpus Christi Honor Award","La Perla Gallery"],["AIA Corpus Christi Merit Award","The Water Street Market"]]]
];

const IMG={"brooks-county-safety-rest-area":{"hero":[1981,1322],"g":[["01",1500,1000],["02",1500,924],["03",1088,725],["04",899,599],["05",1125,1500],["06",1000,1500],["07",1062,1500],["08",1088,1360],["09",1088,1413]]},"columbus-lpoe":{"hero":[2000,1082],"g":[["01",1500,1000],["02",1500,921],["03",1500,1000],["04",1025,683],["05",1500,1125],["06",1500,1000],["07",1500,985],["08",1500,1072],["09",1071,1500],["10",1500,844]]},"del-mar-academic-and-music-2":{"hero":[2000,1334],"g":[["01",1500,1000],["02",800,533]]},"del-mar-music-1":{"hero":[2000,1334],"g":[["01",1500,1412],["02",1000,1500],["03",1500,1000],["04",1000,1500],["05",1000,1500],["06",1020,1476],["07",1088,725],["08",1500,1100]]},"harte-research-institute":{"hero":[1440,900],"g":[["01",1500,1000],["02",1440,900],["03",750,482],["04",990,1500],["05",983,1500],["06",1440,900],["07",999,1500],["08",1500,1007],["09",1500,1000],["10",1114,1500]]},"kenedy-county-safety-rest-area":{"hero":[2000,1359],"g":[["01",1500,952],["02",1500,1012],["03",1500,1125],["04",1500,1125],["06",1013,1500],["07",1500,1092]]},"manila-american-cemetery-visitor-center":{"hero":[2000,1334],"g":[["01",1500,1007],["02",1500,990],["03",1500,1000],["04",1500,987],["05",1500,988],["06",1500,1013],["07",1500,1000],["08",1500,1000],["09",999,1500],["10",1500,844]]},"national-museum-of-the-pacific-war":{"hero":[2000,1375],"g":[["01",1020,680],["02",1500,1027],["03",1020,738],["04",1500,932],["05",1500,1105],["06",1500,596],["07",1020,1198],["08",968,1500],["09",999,1500],["10",1020,1307]]},"pacific-combat-zone":{"hero":[1440,900],"g":[["01",1500,1000],["02",1440,900],["03",1440,900],["04",999,1500],["05",1440,900],["06",1440,900]]},"port-of-corpus-christi":{"hero":[2000,1174],"g":[["01",1500,936],["02",1500,1033],["03",1500,1000],["04",1500,1002],["05",1500,994],["06",1500,1000],["07",1000,1500],["08",1090,1500],["09",1500,1026],["10",1037,1500]]},"rose-house":{"hero":[1440,900],"g":[["01",1440,900],["02",1440,900],["03",1440,900],["04",1440,900]]},"st-marks-episcopal-church":{"hero":[1800,1200],"g":[["01",1500,1000],["02",1000,1500],["03",1000,1500],["04",1500,1000]]},"texas-travel-information-center":{"hero":[1895,1438],"g":[["01",1500,1131],["02",1500,1131],["03",1500,1143],["04",1088,1236],["05",1125,1500],["06",1088,1376],["07",1088,1376]]},"tornillo-port-of-entry":{"hero":[2000,1315],"g":[["01",1231,775],["02",1235,778],["03",1231,774],["04",1233,770],["05",1243,783]]},"turpin-west-house":{"hero":[997,671],"g":[["01",1363,900],["02",1350,900],["03",1100,900],["04",900,1350]]},"voestalpine":{"hero":[2000,1334],"g":[["01",1500,994],["02",1017,1500],["03",999,1500],["04",999,1500],["05",999,1500],["06",1500,1000],["07",1500,1000],["08",1500,1317]]},"west-pecos-safety-rest-area":{"hero":[2000,892],"g":[["01",1500,872],["02",1500,1125],["03",1125,1500],["04",999,1500],["05",1500,1000],["06",1500,1434],["07",1500,1000],["08",1500,1000],["09",1500,676],["10",1500,809]]},"ysleta-port-of-entry":{"hero":[1440,900],"g":[["01",1440,900],["02",1440,900],["03",900,1440],["04",900,1440]]}};
