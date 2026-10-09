// Starting league: the SACAA teams, conferences and head coaches. Colors are
// each school's colors; OFF / PIT / DEF are starting ratings (40–99), worked
// out from the SACAA stats sheet (runs, OPS, ERA, WHIP, K/7, fielding) with a
// boost or cut for the level of each conference.

export const START_YEAR = 2030;

export const CONFERENCES = {
  'Pac-10': { abbr: 'P10', color: '#2D68C4' },
  'Mountain West': { abbr: 'MW', color: '#6A2C91' },
  'Big West': { abbr: 'BW', color: '#0E7C86' },
  'West Coast': { abbr: 'WCC', color: '#B3261E' },
  'CCAA': { abbr: 'CCAA', color: '#C99700' },
  'GNAC': { abbr: 'GNAC', color: '#00843D' },
  'PacWest': { abbr: 'PW', color: '#E87722' },
};

// [school, conference, abbr, mascot, color, altColor, OFF, PIT, DEF]
const T = [
  ['Arizona', 'Pac-10', 'ARIZ', 'Wildcats', '#0C234B', '#AB0520', 92, 82, 86],
  ['Arizona State', 'Pac-10', 'ASU', 'Sun Devils', '#8C1D40', '#FFC627', 86, 85, 84],
  ['California', 'Pac-10', 'CAL', 'Golden Bears', '#003262', '#FDB515', 82, 73, 79],
  ['Oregon', 'Pac-10', 'ORE', 'Ducks', '#154733', '#FEE123', 89, 89, 87],
  ['Oregon State', 'Pac-10', 'ORST', 'Beavers', '#DC4405', '#000000', 79, 80, 75],
  ['Stanford', 'Pac-10', 'STAN', 'Cardinal', '#8C1515', '#FFFFFF', 93, 82, 85],
  ['UCLA', 'Pac-10', 'UCLA', 'Bruins', '#2D68C4', '#F2A900', 95, 84, 89],
  ['Washington', 'Pac-10', 'UW', 'Huskies', '#4B2E83', '#B7A57A', 89, 88, 86],
  ['Fresno State', 'Mountain West', 'FRES', 'Bulldogs', '#DB0032', '#002E6D', 65, 73, 69],
  ['Grand Canyon', 'Mountain West', 'GCU', 'Lopes', '#522398', '#000000', 78, 80, 76],
  ['Hawaii', 'Mountain West', 'HAW', 'Rainbow Wahine', '#024731', '#FFFFFF', 67, 71, 72],
  ['Nevada', 'Mountain West', 'NEV', 'Wolf Pack', '#003366', '#807F84', 76, 73, 73],
  ['Portland State', 'Mountain West', 'PRST', 'Vikings', '#154734', '#FFFFFF', 62, 61, 63],
  ['Sacramento State', 'Mountain West', 'SAC', 'Hornets', '#043927', '#C4B581', 71, 72, 68],
  ['San Diego State', 'Mountain West', 'SDSU', 'Aztecs', '#A6192E', '#000000', 70, 72, 73],
  ['San Jose State', 'Mountain West', 'SJSU', 'Spartans', '#0055A2', '#E5A823', 64, 68, 70],
  ['UNLV', 'Mountain West', 'UNLV', 'Rebels', '#CF0A2C', '#666666', 71, 66, 70],
  ['Bakersfield', 'Big West', 'CSUB', 'Roadrunners', '#003594', '#FFC72C', 59, 53, 59],
  ['Cal Baptist', 'Big West', 'CBU', 'Lancers', '#002855', '#A27D4F', 66, 69, 72],
  ['Cal Poly', 'Big West', 'CP', 'Mustangs', '#154734', '#BD8B13', 56, 62, 60],
  ['Cal State Fullerton', 'Big West', 'CSUF', 'Titans', '#00274C', '#FF7900', 69, 70, 69],
  ['Cal State Northridge', 'Big West', 'CSUN', 'Matadors', '#CE1126', '#000000', 63, 63, 63],
  ['Long Beach State', 'Big West', 'LBSU', 'Beach', '#000000', '#F0B323', 68, 68, 68],
  ['UC Davis', 'Big West', 'UCD', 'Aggies', '#022851', '#FFBF00', 62, 67, 62],
  ['UC Riverside', 'Big West', 'UCR', 'Highlanders', '#2D6CC0', '#F1AB00', 59, 60, 59],
  ['UC Santa Barbara', 'Big West', 'UCSB', 'Gauchos', '#003660', '#FEBC11', 70, 67, 68],
  ['Loyola Marymount', 'West Coast', 'LMU', 'Lions', '#AB0C2F', '#00205B', 65, 66, 69],
  ['Pacific', 'West Coast', 'PAC', 'Tigers', '#F47920', '#000000', 62, 61, 64],
  ["Saint Mary's", 'West Coast', 'SMC', 'Gaels', '#06315B', '#D80024', 67, 67, 69],
  ['San Diego', 'West Coast', 'USD', 'Toreros', '#002855', '#75B2DD', 61, 65, 66],
  ['Santa Clara', 'West Coast', 'SCU', 'Broncos', '#862633', '#FFFFFF', 65, 67, 65],
  ['Seattle', 'West Coast', 'SEA', 'Redhawks', '#AA0000', '#FFFFFF', 70, 65, 65],
  ['UC San Diego', 'West Coast', 'UCSD', 'Tritons', '#182B49', '#C69214', 63, 60, 63],
  ['Cal Poly Humboldt', 'CCAA', 'CPH', 'Lumberjacks', '#00563F', '#FFC72C', 65, 61, 60],
  ['Cal State Dominguez Hills', 'CCAA', 'CSDH', 'Toros', '#8C1D40', '#FFC72C', 63, 64, 65],
  ['Cal State East Bay', 'CCAA', 'CSEB', 'Pioneers', '#CC0000', '#000000', 61, 71, 64],
  ['Cal State Monterey Bay', 'CCAA', 'CSMB', 'Otters', '#112E51', '#B5A06B', 64, 62, 63],
  ['Cal State San Bernardino', 'CCAA', 'CSSB', 'Coyotes', '#0065BD', '#000000', 60, 63, 61],
  ['Cal State San Marcos', 'CCAA', 'CSSM', 'Cougars', '#002D72', '#41B6E6', 67, 69, 67],
  ['Chico State', 'CCAA', 'CHI', 'Wildcats', '#9D2235', '#FFFFFF', 55, 69, 60],
  ['San Francisco State', 'CCAA', 'SFSU', 'Gators', '#463077', '#C99700', 62, 57, 61],
  ['Stanislaus State', 'CCAA', 'STNS', 'Warriors', '#B5121B', '#FFC72C', 54, 61, 59],
  ['Central Washington', 'GNAC', 'CWU', 'Wildcats', '#A6192E', '#000000', 58, 45, 48],
  ['Chaminade', 'GNAC', 'CHAM', 'Silverswords', '#003DA5', '#A7A8AA', 52, 50, 51],
  ["Hawai'i Pacific", 'GNAC', 'HPU', 'Sharks', '#00543C', '#000000', 50, 48, 53],
  ["Hawai'i-Hilo", 'GNAC', 'UHH', 'Vulcans', '#CE0E2D', '#000000', 55, 62, 59],
  ["Saint Martin's", 'GNAC', 'SMU', 'Saints', '#C8102E', '#000000', 65, 58, 60],
  ['Western Oregon', 'GNAC', 'WOU', 'Wolves', '#B5121B', '#000000', 55, 52, 52],
  ['Western Washington', 'GNAC', 'WWU', 'Vikings', '#003F87', '#FFFFFF', 64, 62, 63],
  ['Azusa Pacific', 'PacWest', 'APU', 'Cougars', '#000000', '#A6192E', 58, 59, 60],
  ['Biola', 'PacWest', 'BIOL', 'Eagles', '#C8102E', '#002855', 57, 65, 65],
  ['Concordia', 'PacWest', 'CUI', 'Eagles', '#862633', '#FFC72C', 61, 68, 59],
  ['Dominican', 'PacWest', 'DUC', 'Penguins', '#002D72', '#FFFFFF', 54, 63, 61],
  ['Jessup', 'PacWest', 'JESS', 'Warriors', '#002855', '#C99700', 60, 59, 56],
  ['Menlo', 'PacWest', 'MENL', 'Oaks', '#002147', '#C99700', 56, 56, 56],
  ['Vanguard', 'PacWest', 'VAN', 'Lions', '#00205B', '#C8102E', 53, 57, 58],
];

// Names the logo list may know a school by.
export const LOGO_ALIASES = { 'Cal Baptist': 'California Baptist', 'Bakersfield': 'CSU Bakersfield', 'Cal State Northridge': 'CSUN', 'Hawaii': "Hawai'i", 'Loyola Marymount': 'LMU', 'Seattle': 'Seattle U' };

// Head coaches for the first season (editable in the app).
export const COACHES = {
  'Arizona': 'Caitlin Lowe',
  'Arizona State': 'Megan Bartlett',
  'Azusa Pacific': 'Sarah Parten',
  'Bakersfield': 'Letty Olivarez',
  'Biola': 'Kristin Halte',
  'Cal Baptist': 'Brandon Telesco',
  'Cal Poly': 'Jenny Condon',
  'Cal Poly Humboldt': 'Megan Corriea',
  'Cal State Dominguez Hills': 'Katie Garcia',
  'Cal State East Bay': 'Claire Sua-Amundson',
  'Cal State Fullerton': 'Gina Oaks Garcia',
  'Cal State Monterey Bay': 'Emily Montañez',
  'Cal State Northridge': 'Jodi Cox',
  'Cal State San Bernardino': 'Dee Payan',
  'Cal State San Marcos': 'AJ Robinson',
  'California': 'Steve Singleton',
  'Central Washington': 'Ronnie Ladines',
  'Chaminade': 'Dereck Heresa',
  'Chico State': 'Angel Shamblin',
  'Concordia': 'Crystal Rosenthal',
  'Dominican': 'Juliana Santos',
  'Fresno State': 'Charlotte Morgan',
  'Grand Canyon': 'Shannon Hays',
  "Hawai'i Pacific": 'Maya Nakamura',
  "Hawai'i-Hilo": 'Aisha Sueda',
  'Hawaii': 'Panita Thanatharn',
  'Jessup': 'Brie Campbell',
  'Long Beach State': 'Kendall Fearn',
  'Loyola Marymount': 'Tairia Flowers',
  'Menlo': 'McKinsey Thorpe',
  'Nevada': 'Victoria Hayward',
  'Oregon': 'Missy Lombardi',
  'Oregon State': 'Laura Berg',
  'Pacific': 'Sam Duran-Kukuk',
  'Portland State': 'Meadow McWhorter',
  'Sacramento State': 'Lori Perez',
  "Saint Martin's": 'Jake White',
  "Saint Mary's": 'Sonja Garnett',
  'San Diego': 'MJ Knighten',
  'San Diego State': 'Stacey Nuveman Deniz',
  'San Francisco State': 'Alicia Reid',
  'San Jose State': 'Carli Cutler',
  'Santa Clara': 'Gina Carbonatto',
  'Seattle': 'Guy Hirai',
  'Stanford': 'Jessica Allister',
  'Stanislaus State': 'Aja Scheuber',
  'UC Davis': 'Erin Thorpe',
  'UC Riverside': 'Brittney Matta',
  'UC San Diego': 'Nikki Palmer',
  'UC Santa Barbara': 'Chelsea Spencer',
  'UCLA': 'Kelly Inouye-Perez',
  'UNLV': 'Kristie Fox',
  'Vanguard': 'Nicole Thomas',
  'Washington': 'Heather Tarr',
  'Western Oregon': 'Aly Boytz',
  'Western Washington': 'Sheryl Gilmore',
};

export function makeTeam({ school, conference, abbr, mascot = '', coach = '', coachId = null, color = '#555555', altColor = '#dddddd', off = 65, pit = 65, def = 65 }) {
  return {
    school, conference, abbr: abbr || school.replace(/[^A-Za-z ]/g, '').split(/\s+/).map(w => w[0]).join('').slice(0, 4).toUpperCase(),
    mascot, coach, coachId, color, altColor, off, pit, def, base: { off, pit, def }, logoOverride: null,
  };
}

export function seedTeams() {
  const teams = {};
  for (const [school, conference, abbr, mascot, color, altColor, off, pit, def] of T) {
    teams[school] = makeTeam({ school, conference, abbr, mascot, coach: COACHES[school] || '', color, altColor, off, pit, def });
  }
  return teams;
}
