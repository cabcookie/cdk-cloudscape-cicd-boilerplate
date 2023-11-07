type IDataProvider = Array<TAirport>;

export class DataProvider {
  getData(): IDataProvider {
    return airports;
  }
}

export interface EmptyDataSet {
  noDataTitle: string;
  noDataDescription?: string;
  createRecordText?: string;
}

export interface DataNamingConventions extends EmptyDataSet {
  singular: string;
  plural: string;
  loadingText: string;
  filterText: string;
  findText: string;
  countPlural: string;
  dataProperties: string;
}

export type TAirport = {
  name: string;
  city: string;
  shortName: string;
  numberOfRunways: number;
  open?: string;
}

const airports: Array<TAirport> = [
  {
    name: "Leonardo da Vinci–Fiumicino Airport",
    city: "Rome",
    shortName: "FCO",
    numberOfRunways: 2,
    open: "06:00-23:00"
  },
  {
    name: "Adolfo Suárez Madrid–Barajas Airport",
    city: "Madrid",
    shortName: "MAD",
    numberOfRunways: 4,
    open: "05:00-01:00"
  },
  {
    name: "Amsterdam Airport Schiphol",
    city: "Amsterdam",
    shortName: "AMS",
    numberOfRunways: 6,
    open: "05:00-23:00"
  },
  {
    name: "Frankfurt Airport",
    city: "Frankfurt",
    shortName: "FRA",
    numberOfRunways: 4,
    open: "05:00-23:00"
  },
  {
    name: "London Heathrow Airport",
    city: "London",
    shortName: "LHR",
    numberOfRunways: 2,
    open: "05:00-22:00"
  },
  {
    name: "Paris Charles de Gaulle Airport",
    city: "Paris",
    shortName: "CDG",
    numberOfRunways: 4,
    open: "05:00-23:00"
  },
  {
    name: "Istanbul Airport",
    city: "Istanbul",
    shortName: "IST",
    numberOfRunways: 3,
    open: "24 hours"
  },
  {
    name: "Munich Airport",
    city: "Munich",
    shortName: "MUC",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Barcelona–El Prat Airport",
    city: "Barcelona",
    shortName: "BCN",
    numberOfRunways: 2,
    open: "04:00-01:00" 
  },
  {
    name: "Palma de Mallorca Airport",
    city: "Palma",
    shortName: "PMI",
    numberOfRunways: 1,
    open: "04:00-23:00"
  },
  {
    name: "Milan Malpensa Airport",
    city: "Milan",
    shortName: "MXP",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Copenhagen Airport",
    city: "Copenhagen",
    shortName: "CPH",
    numberOfRunways: 3,
    open: "24 hours"
  },
  {
    name: "Zurich Airport",
    city: "Zurich",
    shortName: "ZRH",
    numberOfRunways: 3,
    open: "05:00-23:00"
  },
  {
    name: "Dublin Airport",
    city: "Dublin",
    shortName: "DUB",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Brussels Airport",
    city: "Brussels",
    shortName: "BRU",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Vienna International Airport",
    city: "Vienna",
    shortName: "VIE",
    numberOfRunways: 3,
    open: "05:00-23:00"
  },
  {
    name: "Lisbon Airport",
    city: "Lisbon",
    shortName: "LIS",
    numberOfRunways: 2,
    open: "05:00-01:00"
  },
  {
    name: "Berlin Brandenburg Airport",
    city: "Berlin",
    shortName: "BER",
    numberOfRunways: 2,
    open: "24 hours"
  },
  {
    name: "Athens International Airport",
    city: "Athens",
    shortName: "ATH",
    numberOfRunways: 2,
    open: "05:00-02:00"
  },
  {
    name: "Warsaw Chopin Airport",
    city: "Warsaw",
    shortName: "WAW",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Geneva Airport",
    city: "Geneva",
    shortName: "GVA",
    numberOfRunways: 1,
    open: "05:00-23:00"
  },
  {
    name: "Budapest Ferenc Liszt International Airport",
    city: "Budapest",
    shortName: "BUD",
    numberOfRunways: 2,
    open: "24 hours"
  },
  {
    name: "Stockholm Arlanda Airport",
    city: "Stockholm", 
    shortName: "ARN",
    numberOfRunways: 3,
    open: "24 hours"
  },
  {
    name: "Prague Václav Havel Airport",
    city: "Prague",
    shortName: "PRG",
    numberOfRunways: 3,
    open: "05:00-23:00"
  },
  {
    name: "Nice Côte d'Azur Airport",
    city: "Nice",
    shortName: "NCE",
    numberOfRunways: 2,
    open: "06:00-23:00"
  },
  {
    name: "Lyon Saint-Exupéry Airport",
    city: "Lyon",
    shortName: "LYS",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Hamburg Airport",
    city: "Hamburg",
    shortName: "HAM",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Stuttgart Airport",
    city: "Stuttgart",
    shortName: "STR",
    numberOfRunways: 1, 
    open: "06:00-23:00"
  },
  {
    name: "Düsseldorf Airport",
    city: "Düsseldorf",
    shortName: "DUS",
    numberOfRunways: 2,
    open: "05:00-23:00"
  },
  {
    name: "Gatwick Airport", 
    city: "London",
    shortName: "LGW",
    numberOfRunways: 1,
    open: "00:01-23:30"
  },
  {
    name: "Manchester Airport",
    city: "Manchester",
    shortName: "MAN",
    numberOfRunways: 2,
    open: "24 hours"
  },
  {
    name: "Oslo Airport",
    city: "Oslo",
    shortName: "OSL",
    numberOfRunways: 2,
    open: "24 hours" 
  },
  {
    name: "Moscow Sheremetyevo International Airport",
    city: "Moscow",
    shortName: "SVO",
    numberOfRunways: 2,
    open: "24 hours"
  },
  {
    name: "John Lennon Airport",
    city: "Liverpool",
    shortName: "LPL",
    numberOfRunways: 1,
    open: "05:00-21:00"
  },
  {
    name: "Eindhoven Airport",
    city: "Eindhoven",
    shortName: "EIN",
    numberOfRunways: 1,
    open: "06:00-23:00"
  },
  {
    name: "Kraków John Paul II International Airport",
    city: "Krakow",
    shortName: "KRK", 
    numberOfRunways: 1,
    open: "05:00-23:00"
  },
  {
    name: "Katowice International Airport",
    city: "Katowice",
    shortName: "KTW",
    numberOfRunways: 1,
    open: "05:00-23:00"
  },
];
