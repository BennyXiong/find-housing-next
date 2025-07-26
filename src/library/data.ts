interface ILatLng {
  lat: number;
  lng: number;
}

const edmontonCenter: ILatLng = {
  lat: 53.5461,
  lng: -113.4938,
};

const calgaryCenter: ILatLng = {
  lat: 51.0447,
  lng: -114.0719,
};

interface IGeoLocation {
  id: number;
  name: string;
  operator: string;
  type: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

const edmontonLocations: IGeoLocation[] = [
  {
    id: 1,
    name: 'Britannia Crossing',
    operator: 'The Mustard Seed Society',
    type: 'Below market',
    address: '15807-102 Avenue Edmonton T5P 4P7',
    phone: '(780) 850-0940',
    lat: 53.5444,
    lng: -113.4909,
  },
  {
    id: 2,
    name: 'Hope Mission - Herb Jamieson Centre',
    operator: 'Hope Mission',
    type: 'Emergency Shelter',
    address: '10014 105A Ave NW, Edmonton, AB T5H 0M2',
    phone: '(780) 422-2018',
    lat: 53.5525,
    lng: -113.4934,
  },
  {
    id: 3,
    name: 'Edmonton John Howard Society',
    operator: 'John Howard Society',
    type: 'Transitional Housing',
    address: '10010 105 St NW, Edmonton, AB T5J 1C4',
    phone: '(780) 428-7590',
    lat: 53.5411,
    lng: -113.5005,
  },
  {
    id: 4,
    name: 'Ambrose Place',
    operator: 'Niginan Housing Ventures',
    type: 'Supportive Housing',
    address: '9629 106 Ave NW, Edmonton, AB T5H 0N1',
    phone: '(780) 784-4175',
    lat: 53.5537,
    lng: -113.4768,
  },
  {
    id: 5,
    name: 'McCauley Apartments',
    operator: 'Right at Home Housing Society',
    type: 'Affordable Housing',
    address: '9541 105 Ave NW, Edmonton, AB T5H 0J9',
    phone: '(780) 423-1339',
    lat: 53.5527,
    lng: -113.4787,
  },
  {
    id: 6,
    name: 'Capital Region Housing - Melcor YMCA Village',
    operator: 'Capital Region Housing',
    type: 'Subsidized',
    address: '10350 102 St NW, Edmonton, AB T5J 0A1',
    phone: '(780) 420-6161',
    lat: 53.5446,
    lng: -113.4930,
  },
  {
    id: 7,
    name: 'Lions Seniors Housing Centre',
    operator: 'Edmonton Lions Club',
    type: 'Seniors Housing',
    address: '11113 111 Ave NW, Edmonton, AB T5G 0C6',
    phone: '(780) 479-0120',
    lat: 53.5581,
    lng: -113.5257,
  },
  {
    id: 8,
    name: 'Unity Square Apartments',
    operator: 'Civida',
    type: 'Affordable Housing',
    address: '11648 124 St NW, Edmonton, AB T5M 0K7',
    phone: '(780) 420-6161',
    lat: 53.5631,
    lng: -113.5367,
  },
  {
    id: 9,
    name: 'Norwood Boulevard Apartments',
    operator: 'Homeward Trust',
    type: 'Supportive Housing',
    address: '9516 114 Ave NW, Edmonton, AB T5G 0K7',
    phone: '(780) 496-2630',
    lat: 53.5622,
    lng: -113.4776,
  },
  {
    id: 10,
    name: 'Canora Place',
    operator: 'Greater Edmonton Foundation',
    type: 'Seniors Housing',
    address: '10150 152 St NW, Edmonton, AB T5P 1Z4',
    phone: '(780) 451-1234',
    lat: 53.5460,
    lng: -113.5926,
  }
]

const calgaryLocations: IGeoLocation[] = [
  {
    id: 11,
    name: 'Columbus Court',
    operator: 'Bishop O\'Byrne Housing Association',
    type: 'Affordable Housing',
    address: '905 15 St NW, Calgary, AB T2N 2B2',
    phone: '(403) 265-2090',
    lat: 51.0616,
    lng: -114.1003,
  },
  {
    id: 12,
    name: 'Sunalta House',
    operator: 'Calgary Housing Company',
    type: 'Below Market',
    address: '1515 16 Ave SW, Calgary, AB T3C 0Z5',
    phone: '(587) 390-1200',
    lat: 51.0409,
    lng: -114.0951,
  },
  {
    id: 13,
    name: 'Aurora on the Park',
    operator: 'Horizon Housing Society',
    type: 'Supportive Housing',
    address: '1039 26 Ave SE, Calgary, AB T2G 1R7',
    phone: '(403) 297-1746',
    lat: 51.0277,
    lng: -114.0358,
  },
  {
    id: 14,
    name: 'Madison Place',
    operator: 'Accessible Housing',
    type: 'Accessible Supportive Housing',
    address: '4625 Varsity Dr NW, Calgary, AB T3A 0Z9',
    phone: '(403) 282-1872',
    lat: 51.0875,
    lng: -114.1430,
  },
  {
    id: 15,
    name: 'Rotary Park Lodge',
    operator: 'Silvera for Seniors',
    type: 'Seniors Housing',
    address: '130 8 Ave NE, Calgary, AB T2E 0P9',
    phone: '(403) 276-5541',
    lat: 51.0575,
    lng: -114.0572,
  }
]

interface IGeo {
  center: ILatLng;
  marks: IGeoLocation[];
}

export type Community = "Edmonton" | "Calgary";

export const locationsDict: Record<Community, IGeo> = {
  Edmonton: { center: edmontonCenter, marks: edmontonLocations },
  Calgary: { center: calgaryCenter, marks: calgaryLocations }
}
