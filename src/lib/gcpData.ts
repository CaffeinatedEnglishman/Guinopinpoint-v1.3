export interface GCP {
  id: number;
  number: string;
  type: string;
  barangay: string;
  status: string;
  latitude: number;
  longitude: number;
  location: string; // Changed from 'description' to 'location'
  condition: string;
  imageUrl: string;
  // Add new fields here
  instrumentUsed?: string;
  coordinateSystem?: string;
  observationDetails?: {
    date?: string;
    epoch?: number;
    northing?: number;
    easting?: number;
    ellipsoidalHeight?: number;
    longitude?: number;
    latitude?: number;
    height?: number;
  };
  staticSurveyDetails?: {
    date?: string;
    epoch?: number;
    interval?: string;
    cutOffAngle?: number;
    antennaHeight?: number;
    latitude?: string;
    longitude?: string;
    height?: number;
    northing?: number;
    easting?: number;
    ellipsoidalHeight?: number;
  };
  denrRecords?: {
    northing?: number;
    easting?: number;
    longitude?: string;
    latitude?: string;
    ellipsoidalHeight?: number;
    elevation?: number;
  };
  geotagDetails?: {
    date?: string;
    appUsed?: string;
    latitude?: string;
    longitude?: string;
  };
}
export const gcpData: GCP[] = [
  {
    id: 1,
    number: 'BLLM 1',
    type: 'BLLM',
    barangay: 'Poblacion',
    status: 'Undisturbed',
    latitude: 13.191561,
    longitude: 123.599164,
    location: 'Near Guinobatan Municipal Hall', // Changed from 'description' to 'location'
    condition: 'Intact on the ground. The control number is identifiable',
    imageUrl: '/images/Picture5.jpg',
  },
  {
    id: 2, // Switched from id: 2
    number: 'BLLM 1A',
    type: 'BLLM',
    barangay: 'Centro Guinobatan',
    status: 'Disturbed',
    latitude: 13.191086,
    longitude: 123.600594,
    location: 'Near the light post near the entrance of the Catholic Church', // Changed from 'description' to 'location'
    condition: 'Intact but with missing description on top of the GCP',
    imageUrl: '/images/Picture7.jpg',
  },
  {
    id: 3,
    number: 'BLLM 80',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Undisturbed',
    latitude: 13.188622,
    longitude: 123.598747,
    location: 'On the side of the road near the entrance to Morga Hills', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact with minimal signs of tarnishing and chipped edges',
    imageUrl: '/images/Picture20.jpg',
  },
  {
    id: 4,
    number: 'BLLM 153',
    type: 'BLLM',
    barangay: 'Iraya',
    status: 'Undisturbed',
    latitude: 13.189519,
    longitude: 123.602017,
    location: 'At the Barangay Hall building of barangay Iraya, Guinobatan', // Changed from 'description' to 'location'
    condition:
      'The control point is intact, visible, and well-maintained with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture10.jpg',
  },
  {
    id: 5,
    number: 'BLLM 154',
    type: 'BLLM',
    barangay: 'Poblacion',
    status: 'Undisturbed',
    latitude: 13.189686,
    longitude: 123.602786,
    location:
      'BLLM 153 is located on the sidewalk of Guinobatan East Central School in front of the Motortrade building.', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture16.jpg',
  },
  {
    id: 6,
    number: 'BLLM UNKNOWN',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.188461,
    longitude: 123.597683,
    location: 'Located on an intersection near Flash express hub', // Changed from 'description' to 'location'
    condition:
      'Intact on the ground with little to no signs of tarnishing or any severe destruction, but control number cannot be identified',
    imageUrl: '/images/Picture23.jpg',
  },
  {
    id: 7,
    number: 'BLLM 7X',
    type: 'BLLM',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.189375,
    longitude: 123.595797,
    location: 'Near Calzada Barangay Hall', // Changed from 'description' to 'location'
    condition:
      'Intact and Visible but the control point number cannot be identified',
    imageUrl: '/images/Picture8.jpg',
  },
  {
    id: 8,
    number: 'BLLM UNKNOWN',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.187006,
    longitude: 123.595686,
    location: 'Located on the side of the road near a red gated house', // Changed from 'description' to 'location'
    condition: 'Intact on the ground but control number cannot be identified',
    imageUrl: '/images/Picture4.jpg',
  },
  {
    id: 9,
    number: 'BLLM UNKNOWN',
    type: 'BLLM',
    barangay: 'Ilawod',
    status: 'Unidentified',
    latitude: 13.194103,
    longitude: 123.596811,
    location: 'In front of Nuestra Señora Funeral Homes, by the Ilawod Barangay Hall alley', // Changed from 'description' to 'location'
    condition: 'Intact on the ground but control number cannot be identified',
    imageUrl: '/images/Picture18.jpg',
  },
  {
    id: 10,
    number: 'BLLM UNKNOWN',
    type: 'BLLM',
    barangay: 'Inamnan Pequeño',
    status: 'Disturbed',
    latitude: 13.185,
    longitude: 123.599167,
    location: 'Near Inamnan Pequeño Brgy Hall', // Changed from 'description' to 'location'
    condition:
      'The GCP remains intact as of December, 2024. The control number of the GCP cannot be identified',
    imageUrl: '/images/Picture2.jpg',
    instrumentUsed: 'Tersus Oscar',
    geotagDetails: {
      date: 'December 30, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13°11’6”N',
      longitude: '123°25’57”E',
    },
  },
  {
    id: 11,
    number: 'BBM 34',
    type: 'BBM',
    barangay: 'Ilawod',
    status: 'Intact',
    latitude: 13.190753,
    longitude: 123.598378,
    location:
      'Located on the left side of Osurman Trading building in barangay Ilawod', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture11.jpg',
  },
  {
    id: 12,
    number: 'BBM 47',
    type: 'BBM',
    barangay: 'Inamnan Pequeño',
    status: 'Intact',
    latitude: 13.188075,
    longitude: 123.601481,
    location: 'Near Inamnan Pequeño Caltex and Crispy King', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture12.jpg',
  },
  {
    id: 13,
    number: 'BBM 48',
    type: 'BBM',
    barangay: 'Iraya and Inamnan Pequeño',
    status: 'Disturbed',
    latitude: 13.188333,
    longitude: 123.601111,
    location: 'Located on the side of Caltex in barangay Iraya', // Changed from 'description' to 'location'
    condition:
      'The GCP is no longer attached to the ground and can be easily moved or displaced',
    imageUrl: '/images/Picture13.jpg',
  },
  {
    id: 14,
    number: 'BBM 1',
    type: 'BBM',
    barangay: 'Iraya',
    status: 'Disturbed',
    latitude: 13.190569,
    longitude: 123.601339,
    location: 'IDK si barangay', // Changed from 'description' to 'location'
    condition: 'The GCP appears to be no longer attached to the ground',
    imageUrl: '/images/Picture14.jpg',
  },
  {
    id: 15,
    number: 'BBM 35',
    type: 'BBM',
    barangay: 'Iraya, Poblacion, and Inamnan Pequeño',
    status: 'Disturbed',
    latitude: 13.189019,
    longitude: 123.600792,
    location: 'Outside Guinobatan Wet market, in front of Dan-Ke Trading', // Changed from 'description' to 'location'
    condition: 'The GCP is moved from its original position',
    imageUrl: '/images/Picture15.jpg',
  },
  {
    id: 16,
    number: 'BBM 36',
    type: 'BBM',
    barangay: 'Iraya and Poblacion',
    status: 'Disturbed',
    latitude: 13.190061,
    longitude: 123.601767,
    location: 'Near Niones Madrid Dental Clinic', // Changed from 'description' to 'location'
    condition: 'The GCP is not intact on the ground and can be easily moved',
    imageUrl: '/images/Picture1.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 4',
      epoch: 120,
      northing: 1458916.5790,
      easting: 564951.5932,
      ellipsoidalHeight: 70.9271,
      longitude: 13.191621256,
      latitude: 123.599174042,
      height: 70.9271,
    },
    staticSurveyDetails: {
      date: 'December 27, 28, and 30, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      latitude: '13.191603126 N',
      longitude: '123.599145080 E',
      height: 130.3544,
      northing: 1458971.7757,
      easting: 564795.3528,
      ellipsoidalHeight: 77.0194,
    },
    denrRecords: {
      northing: 1458967.579,
      easting: 564796.011,
      longitude: '13 11 34.51105',
      latitude: '123 35 51.93492',
      ellipsoidalHeight: 69.767,
      elevation: 70.179,
    },
  },
  {
    id: 17,
    number: 'BBM 50',
    type: 'BBM',
    barangay: 'Poblacion',
    status: 'Intact',
    latitude: 13.191272,
    longitude: 123.597622,
    location:
      'Side of Guino West Central School and in front of Bicol University College of Agriculture and Forestry (BUCAF)', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture17.jpg',
  },
  {
    id: 18,
    number: 'BBM 37',
    type: 'BBM',
    barangay: 'Poblacion and Iraya',
    status: 'Intact',
    latitude: 13.190686,
    longitude: 123.600964,
    location:
      'Located at the intersection in front of Centro Guinobatan Museum and Abordo Trading building', // Changed from 'description' to 'location'
    condition: 'Intact and Visible. The control point number is identified',
    imageUrl: '/images/Picture9.jpg',
  },
  {
    id: 19,
    number: 'BBM 50',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Intact',
    latitude: 13.188258,
    longitude: 123.596656,
    location: 'Near MCGI', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture19.jpg',
  },
  {
    id: 20,
    number: 'GCP UNKNOWN',
    type: 'Unknown',
    barangay: 'Calzada',
    status: 'Unidentified',
    latitude: 13.190678,
    longitude: 123.594847,
    location: 'Near the Catholic Cemetery in Calzada', // Changed from 'description' to 'location'
    condition: 'Unknown GCP',
    imageUrl: '/images/Picture3.jpg',
  },
  {
    id: 21,
    number: 'BBM UNK',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.190242,
    longitude: 123.598839,
    location: 'On the side of a drainage near a gray house', // Changed from 'description' to 'location'
    condition:
      'Intact on the ground and tilted. Control number cannot be identified',
    imageUrl: '/images/Picture21.jpg',
  },
  {
    id: 22,
    number: 'GCP UNKNOWN',
    type: 'Unknown',
    barangay: 'Calzada',
    status: 'Unidentified',
    latitude: 13.190678,
    longitude: 123.598403,
    location:
      'In front of Osurman Trading, other side of the road from BBM No. 34', // Changed from 'description' to 'location'
    condition: 'Unknown GCP',
    imageUrl: '/images/Picture22.jpg',
  },
  {
    id: 23,
    number: 'BLLM UNKNOWN',
    type: 'BLLM',
    barangay: 'Iraya',
    status: 'Unidentified',
    latitude: 13.193889,
    longitude: 123.596389,
    location: 'In front of Funeral Chapel', // Changed from 'description' to 'location'
    condition: 'Intact on the ground but control number cannot be identified',
    imageUrl: '/images/Picture6.jpg',
  },
];

export const barangaysList = [
  'Calzada',
  'Ilawod',
  'Inamnan Grande',
  'Inamnan Pequeño',
  'Iraya',
  'Poblacion',
];
