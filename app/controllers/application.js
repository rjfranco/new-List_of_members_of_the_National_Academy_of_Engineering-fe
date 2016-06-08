import Ember from 'ember';

export default Ember.Controller.extend({

  randomMember: Em.computed( function() {

    let list_of_lists = [
      [
        "Thomas J. Overbye",
        "University of Illinois, Urbana-Champaign"
      ],
      [
        "Mark G. Adamiak",
        "GE Multilin"
      ],
      [
        "Max W. Carbon",
        "University of Wisconsin, Madison"
      ],
      [
        "Mujid S. Kazimi",
        "Massachusetts Institute of Technology"
      ],
      [
        "Kaushik Rajashekara",
        "Rolls-Royce Corporation"
      ],
      [
        "Linos J. Jacovides",
        "Paphos Consulting"
      ],
      [
        "Fred C. Lee",
        "Virginia Polytechnic Institute and State University"
      ],
      [
        "Ralph D. Masiello",
        "Kema, Inc."
      ],
      [
        "John M. Undrill",
        "John Undrill LLC"
      ],
      [
        "Einar V. Larsen",
        "GE Energy"
      ],
      [
        "Ali Mosleh",
        "University of Maryland"
      ],
      [
        "Arthur H. Rosenfeld",
        "University of California, Lawrence Berkeley National Laboratory"
      ],
      [
        "Stephen D. Umans",
        "Independent consultant"
      ]
    ];

    return list_of_lists[Math.floor(Math.random()*list_of_lists.length)]
  })
});



// , ["Howard J. Bruschi", "Westinghouse Electric Company"], ["Thomas A. Lipo", "University of Wisconsin, Madison"], ["George Apostolakis", "Nuclear Regulatory Commission"], ["John J. Dorning", "University of Virginia"], ["James L. Kirtley, Jr.", "Massachusetts Institute of Technology"], ["Adrian Zaccaria", "Bechtel Group, Inc."], ["L. Berkley Davis", "GE Energy"], ["Richard G. Farmer", "Arizona State University"], ["Lawrence L. Kazmerski", "National Renewable Energy Laboratory"], ["Brian Stott", "Stott Inc."], ["Carson W. Taylor", "Bonneville Power Administration"], ["Bruce F. Wollenberg", "University of Minnesota"], ["Vernon L. Chartier", "Independent consultant"], ["Vijay Vittal", "Arizona State University"], ["Anjan Bose", "Washington State University"], ["Bernard L. Cohen", "University of Pittsburgh"], ["Oliver D. Kingsley, Jr.", "Auburn University"], ["Richard A. Meserve", "Carnegie Institution for Science"], ["Charles W. Pryor, Jr.", "Urenco Investments Inc."], ["Peter W. Sauer", "University of Illinois at Urbana-Champaign"], ["Douglas M. Chapin", "MPR Associates, Inc."], ["Edmund O. Schweitzer, III", "Schweitzer Engineering Laboratories, Inc."], ["William Cavanaugh, III", "Raleigh, NC"], ["Frederick J. Moody", "Independent consultant"], ["Theodore Rockwell", "MPR Associates, Inc."], ["John P. Holdren", "Executive Office of the President of the U.S."], ["William J. McNutt", "Berkshire Transformer Consultants, Inc."], ["Donald R. Olander", "University of California, Berkeley"], ["John J. Vithayathil", "Independent consultant"], ["Andrew R. Hileman", "Independent consultant"], ["Stanley Kaplan", "Bayesian Systems, Inc."], ["James J. Markowsky", "American Electric Power Service Corporation"], ["B. Don Russell, Jr.", "Texas A&M University"], ["Charles L. Wagner", "Independent consultant"], ["Michael L. Corradini", "University of Wisconsin, Madison"], ["D. Bruce Montgomery", "Magplane Technology"], ["Theofanis G. Theofanous", "University of California, Santa Barbara"], ["William F. Tinney", "Independent consultant"], ["James E. Van Ness", "Northwestern University"], ["Gerald T. Heydt", "Arizona State University"], ["William E. Kastenberg", "University of California, Berkeley"], ["Zack T. Pate", "World Association of Nuclear Operations (WANO)"], ["John F. Ahearne", "Sigma Xi, The Scientific Research Society"], ["Abdel-Aziz A. Fouad", "Iowa State University"], ["Warren F. (Pete) Miller, Jr.", "U.S. Department of Energy"], ["James S. Thorp", "Virginia Polytechnic Institute and State University"], ["Robert W. Deutsch", "RWD Technologies, Inc."], ["Stanley H. Horowitz", "Independent consultant"], ["Richard E. Balzhiser", "Electric Power Research Institute, Inc."], ["John G. Kassakian", "Massachusetts Institute of Technology"], ["Richard T. Lahey, Jr.", "Rensselaer Polytechnic Institute"], ["Richard B. Priory", "Duke Energy Corporation"], ["Philip R. Clark", "GPU Nuclear Corporation"], ["B. John Garrick", "Independent consultant"], ["Gerald L. Kulcinski", "University of Wisconsin, Madison"], ["Arun G. Phadke", "Virginia Polytechnic Institute and State University"], ["Alvin W. Trivelpiece", "Oak Ridge National Laboratory"], ["E. Linn Draper, Jr.", "American Electric Power Company, Inc."], ["John H. Nuckolls", "E.O. Lawrence Livermore National Laboratory"], ["Cordell Reed", "Commonwealth Edison Company"], ["James Frederick Jackson", "Nuclear Regulatory Commission"], ["Walter B. Loewenstein", "Independent consultant"], ["Eugene R. McGrath", "Consolidated Edison Company of New York"], ["Donald A. Brand", "Pacific Gas and Electric Company"], ["James D. Callen", "University of Wisconsin, Madison"], ["Murray W. Rosenthal", "Oak Ridge National Laboratory"], ["John H. Sununu", "JHS Associates, Ltd."], ["Eugene P. Wilkinson", "Institute of Nuclear Power Operations"], ["Stig A. Annestrand", "Annestrands, Inc."], ["Harold K. Forsen", "Bechtel Corporation"], ["Harold N. Scherer, Jr.", "Commonwealth Electric Company"], ["Charles E. Till", "Argonne National Laboratory"], ["Narain G. Hingorani", "Independent consultant"], ["Frank D. Judge", "GE Nuclear Energy"], ["George A. Maneatis", "Pacific Gas and Electric Company"], ["Ronald R. Parker", "Massachusetts Institute of Technology"], ["Neil E. Todreas", "Massachusetts Institute of Technology"], ["William A. Chittenden", "Sargent & Lundy"], ["Robert W. Conn", "Kavli Foundation"], ["Lawrence T. Papay", "PQR, LLC"], ["William F. Allen", "Stone & Webster, Inc."], ["Kaye D. Lathrop", "Stanford University"], ["Eugene C. Sakshaug", "Independent consultant"], ["F. Paul de Mello", "Independent consultant"], ["Walter J. McCarthy, Jr.", "Detroit Edison Company"], ["Thomas J. Murrin", "Fordham University"], ["Ralph S. Gens", "Bonneville Power Administration"], ["Willis S. White, Jr.", "American Electric Power Company, Inc."], ["Kent F. Hansen", "Massachusetts Institute of Technology"], ["Lionel O. Barthold", "Power Technologies, Inc."], ["Robert J. Creagan", "Westinghouse Electric Corporation"], ["John C. Fisher", "GE Corporate Research and Development"], ["Elias P. Gyftopoulos", "Massachusetts Institute of Technology"], ["Dean B. Harrington", "General Electric Company"], ["Leonard J. Koch", "Illinois Power Company"], ["John W. Landis", "Public Safety Standards Group"], ["Henry E. Stone", "Independent consultant"], ["Seymour Baron", "Medical University of South Carolina"], ["John W. Batchelor", "Westinghouse Electric Corporation"], ["Wallace B. Behnke", "Commonwealth Edison Company"], ["John E. Dolan", "American Electric Power Service Corporation"], ["John W. Kalb", "The Ohio Brass Company"], ["Gregory S. Vassell", "Independent consultant"], ["Gerald L. Wilson", "Massachusetts Institute of Technology"], ["John G. Anderson", "Independent consultant"], ["Francis M. Staszesky", "Boston Edison Company"], ["Theodore Stern", "Buyers United Inc."], ["Joseph M. Hendrie", "Brookhaven National Laboratory"], ["Charles H. Holley", "General Electric Company"], ["Milton Levenson", "Independent consultant"], ["Herbert H. Woodson", "The University of Texas"], ["Wm. Howard Arnold", "Westinghouse Electric Corporation"], ["James L. Everett, III", "PECO Energy"], ["Salomon Levy", "Levy & Associates"], ["David Okrent", "University of California, Los Angeles"], ["John J. Taylor", "Electric Power Research Institute, Inc."], ["Woodrow E. Johnson", "Westinghouse Electric Corporation"], ["Hilliard W. Paige", "General Electric Company"], ["Karl P. Cohen", "General Electric Company"]]
