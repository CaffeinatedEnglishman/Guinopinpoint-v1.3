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
    latitude?: number | string;
    longitude?: number | string;
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
  discrepancyDetails?: {
    firstDenrRecord?: {
      northing: number | null;
      easting: number | null;
    } | null;
    secondDenrRecord?: {
      northing: number | null;
      easting: number | null;
    } | null;
    DenrRecord?: {
      northing?: number | null;
      easting?: number | null;
    } | null;
};
}
export const gcpData: GCP[] = [
  {
    id: 1,
    number: 'BLLM 1',
    type: 'BLLM',
    barangay: 'Ilawod', // Updated barangay
    status: 'Undisturbed',
    latitude: 13.191561,
    longitude: 123.599164,
    location: 'Near Guinobatan Municipal Hall', // Changed from 'description' to 'location'
    condition: 'Intact on the ground. The control number is identifiable',
    imageUrl: '/images/Picture5.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
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
    discrepancyDetails: {
      firstDenrRecord: {
        northing: 0.00009999983013,
        easting: 0,
      },
      secondDenrRecord: {
        northing: 28.7687,
        easting: 4.8452,
      },
    },
  },
  {
    id: 2,
    number: 'BLLM 1A',
    type: 'BLLM',
    barangay: 'Poblacion',
    status: 'Disturbed',
    latitude: 13.191100878,
    longitude: 123.600585176,
    location: 'By the light post at the Our Lady of the Assumption Parish entrance.',
    condition: 'Intact but unidentifiable',
    imageUrl: '/images/Picture7.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458916.5790,
      easting: 564951.5932,
      ellipsoidalHeight: 70.9271,
      longitude: 13.191100878,
      latitude: 123.600585176,
      height: 124.2670,
    },
    staticSurveyDetails: {
      date: 'December 27 and 30, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.54,
      latitude: '13.191095882 N',
      longitude: '123.600595780 E',
      northing: 1458916.0290,
      easting: 564952.7441,
      ellipsoidalHeight: 73.5938,
    },
    denrRecords: {
      northing: 1458967.5244,
      easting: 564795.8464,
      longitude: '123 35 51.93',
      latitude: '13 11 34.51',
      ellipsoidalHeight: 69.8,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0,
        easting: 0.00009999994654,
      },
    },
  },
  {
    id: 3,
    number: 'BLLM 80',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Undisturbed',
    latitude: 13.187009,
    longitude: 123.595687,
    location: 'Located on the side of the road near the entrance to Morga Hills',
    condition: 'The GCP is intact with minimal signs of tarnishing and chipped edges',
    imageUrl: '/images/Picture20.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2025',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      latitude: '13.231429N',
      longitude: '123.610388E',
      northing: 1463348.291,
      easting: 566007.1755,
    },
    denrRecords: {
      northing: 1463348.292,
      easting: 566007.176,
      longitude: '123 36 32.51071',
      latitude: '13 13 56.97303',
      ellipsoidalHeight: 179.711,
      elevation: 154.555,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 4380.7118,
        easting: 1211.1645,
      },
    },
  },
  {
    id: 4,
    number: 'BLLM 153',
    type: 'BLLM',
    barangay: 'Iraya',
    status: 'Undisturbed',
    latitude: 13.18896171,
    longitude: 123.602057146,
    location: 'At the Barangay Hall building of barangay Iraya, Guinobatan',
    condition: 'The control point is intact, visible, and well-maintained with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture10.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'December 28 and 29, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.90,
      latitude: '13.188969877 N',
      longitude: '123.602074723 E',
      northing: 1458681.2018,
      easting: 56513.6218,
      ellipsoidalHeight: 72.8105,
    },
    denrRecords: {
      northing: 1458674.785,
      easting: 565112.692,
      longitude: '123 36 02.42850',
      latitude: '13 11 24.95838',
      ellipsoidalHeight: 72.357,
      elevation: 72.776,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.0002000001259,
        easting: 0.0002000000095,
      },
    },
  },
  {
    id: 5,
    number: 'BLLM 154',
    type: 'BLLM',
    barangay: 'Iraya',
    status: 'Undisturbed',
    latitude: 13.189686,
    longitude: 123.602786,
    location: 'BLLM 153 is located on the sidewalk of Guinobatan East Central School in front of the Motortrade building',
    condition: 'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture16.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      latitude: '13.231429N',
      longitude: '123.610388E',
      northing: 1458759.099,
      easting: 565188.3631,
    },
    denrRecords: {
      northing: 1458758.909,
      easting: 565189.072,
      longitude: '123 36 04.97172',
      latitude: '13 11 27.68997',
      ellipsoidalHeight: 72.078,
      elevation: 72.498,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.09620000003,
        easting: 0.7089000001,
      },
    },
  },
  {
    id: 6,
    number: 'BLLM 1X',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Unidentified',
    latitude: 13.188461,
    longitude: 123.597683,
    location: 'Located on an intersection in barangay Inamnan Grande, near Flash Express hub.',
    condition: 'Intact on the ground with little to no signs of tarnishing or any severe destruction, but control number cannot be identified.',
    imageUrl: '/images/Picture23.jpg',
    instrumentUsed: 'Tersus Oscar',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: "13.18844189",
      longitude: "123.5976679",
      northing: 1458621.661,
      easting: 564636.0424,
    },
  },
  {
    id: 7,
    number: 'BLLM 71',
    type: 'BLLM',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.189375,
    longitude: 123.595797,
    location: 'Near Calzada Barangay Hall',
    condition: 'Intact and Visible but the control point number cannot be identified.',
    imageUrl: '/images/Picture8.jpg',
    instrumentUsed: 'Tersus Oscar',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.779,
      latitude: "1318939506",
      longitude: "123.5957793",
      northing: 1458726.633,
      easting: 564431.0656,
    },
    denrRecords: {
      northing: 29639.18,
      easting: 30394.11,
      longitude: '565206.999',
      latitude: '1458770.876',
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 4.6359,
        easting: 1.4734,
      },
    },
  },
  {
    id: 8,
    number: 'BLLM X',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Unidentified',
    latitude: 13.187006,
    longitude: 123.595686,
    location: 'Located on the side of the road near a red gated house',
    condition: 'Intact on the ground but control number cannot be identified.',
    imageUrl: '/images/Picture4.jpg',
    instrumentUsed: 'Tersus Oscar',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.668,
      latitude: "13.18702378",
      longitude: "123.5956026",
      northing: 1458464.247,
      easting: 564412.5329,
    },
  },
  {
    id: 9,
    number: 'BBM 1',
    type: 'BBM',
    barangay: 'Iraya',
    status: 'Disturbed',
    latitude: 13.190569,
    longitude: 123.601339,
    location: 'Side of Daraga Home Depot',
    condition: 'The GCP appears to be no longer attached to the ground',
    imageUrl: '/images/Picture14.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.658,
      latitude: '13.18407868N',
      longitude: '123.6012471E',
      northing: 1458881.996,
      easting: 565023.4292,
    },
    denrRecords: {
      northing: 29639.18,
      easting: 30394.11,
      longitude: '565206.999',
      latitude: '1458770.876',
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 111.1196,
        easting: 183.5698,
      },
    },
  },
  {
    id: 10,
    number: 'BBM 34',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Undisturbed',
    latitude: 13.190753,
    longitude: 123.598378,
    location: 'Located on the left side of Osurman Trading building.',
    condition: 'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture11.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: '13.18407706N',
      longitude: '123.5983585E',
      northing: 1458879.472,
      easting: 564710.3045,
    },
    denrRecords: {
      northing: 1458873.227,
      easting: 564714.735,
      longitude: '123 35 49.22830',
      latitude: '13 11 31.44695',
      ellipsoidalHeight: 69.565,
      elevation: 69.976,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 6.2451,
        easting: 4.4305,
      },
    },
  },
  {
    id: 11,
    number: 'BBM 35',
    type: 'BBM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.189019,
    longitude: 123.600792,
    location: 'Outside Guinobatan Wet market, in front of Dan-Ke Trading',
    condition: 'The GCP is moved from its original position',
    imageUrl: '/images/Picture15.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.307,
      latitude: '13.18391667N',
      longitude: '123.6007881E',
      northing: 1458683.551,
      easting: 564974.0444,
    },
    denrRecords: {
      northing: 1458683.662,
      easting: 564974.581,
      longitude: '123 35 57.84264',
      latitude: '13 11 25.25797',
      ellipsoidalHeight: 71.904,
      elevation: 72.32,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.1107000001,
        easting: 0.5366,
      },
    },
  },
  {
    id: 12,
    number: 'BBM 36',
    type: 'BBM',
    barangay: 'Poblacion',
    status: 'Disturbed',
    latitude: 13.190061,
    longitude: 123.601767,
    location: 'Near Niones Madrid Dental Clinic',
    condition: 'The GCP is not intact on the ground and can be easily moved',
    imageUrl: '/images/Picture1.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: '13.18401017N',
      longitude: '123.6017534E',
      northing: 1458806.338,
      easting: 565078.4958,
    },
    denrRecords: {
      northing: 1458796.661,
      easting: 565081.824,
      longitude: '123 36 01.41309',
      latitude: '13 11 28.92686',
      ellipsoidalHeight: 72.073,
      elevation: 72.491,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 9.677,
        easting: 3.3282,
      },
    },
  },
  {
    id: 13,
    number: 'BBM 37',
    type: 'BBM',
    barangay: 'Poblacion',
    status: 'Undisturbed',
    latitude: 13.190686,
    longitude: 123.601075,
    location:
      'Located at the intersection in front of Centro Guinobatan Museum and Abordo Trading building', // Changed from 'description' to 'location'
    condition: 'Intact and Visible. The control point number is identified',
    imageUrl: '/images/Picture9.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: '13.18408333N',
      longitude: '123.6010503E',
      northing: 1458868.19,
      easting: 565002.3997,
    },
    denrRecords: {
      northing: 1458868.177,
      easting: 565002.375,
      longitude: '123 35 58.78030',
      latitude: '13 11 31.26032',
      ellipsoidalHeight: 72.638,
      elevation: 73.055,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.01280000014,
        easting: 0.02469999995,
      },
    },
  },
  {
    id: 14,
    number: 'BBM 47',
    type: 'BBM',
    barangay: 'Inamnan Pequeño',
    status: 'Disturbed',
    latitude: 13.188075,
    longitude: 123.601481,
    location: 'In Front of Inamnan Pequeño Caltex and Crispy King',
    condition: 'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture12.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: '13.18382975N',
      longitude: '123.6014461E',
      northing: 1458598.826,
      easting: 565044.7277,
    },
    denrRecords: {
      northing: 1458598.188,
      easting: 565045.449,
      longitude: '123 36 00.18935',
      latitude: '13 11 22.47097',
      ellipsoidalHeight: 72.547,
      elevation: 72.964,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.6383,
        easting: 0.7213,
      },
    },
  },
  {
    id: 15,
    number: 'BBM 48',
    type: 'BBM',
    barangay: 'Iraya',
    status: 'Disturbed',
    latitude: 13.188333,
    longitude: 123.601111,
    location: 'Located on the side of Caltex Iraya',
    condition: 'The GCP is no longer attached to the ground and can be easily moved or displaced',
    imageUrl: '/images/Picture13.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'January 11-13, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.8,
      latitude: '13.18386111N',
      longitude: '123.6011969E',
      northing: 1458626.717,
      easting: 565018.2341,
    },
    denrRecords: {
      northing: 1458627.485,
      easting: 565018.67,
      longitude: '123 35 59.30235',
      latitude: '13 11 23.42646',
      ellipsoidalHeight: 72.008,
      elevation: 72.426,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.7684000002,
        easting: 0.4359,
      },
    },
  },
  {
    id: 16,
    number: 'BBM 50 (GWCS)',
    type: 'BBM',
    barangay: 'Ilawod',
    status: 'Undisturbed',
    latitude: 13.188258,
    longitude: 123.596656,
    location:
      'Side of Guinobatan West Central School and in front of Bicol University College of Agriculture and Forestry (BUCAF)', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture17.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'December 27 and 30, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      latitude: '13.191299636 N',
      longitude: '123.597596969 E',
      northing: 1458937.8047,
      easting: 564627.6136,
    },
    denrRecords: {
      northing: 1458931.997,
      easting: 564626.61,
      longitude: '123 35 46.30637',
      latitude: '13 11 33.36627',
      ellipsoidalHeight: 69.609,
      elevation: 70.018,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 0.000900000101,
        easting: 0.0004999999655,
      },
    },
  },
  {
    id: 17,
    number: 'BBM 50 (MCGI)',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.188258,
    longitude: 123.596656,
    location: 'Near MCGI church',
    condition: 'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture19.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    staticSurveyDetails: {
      date: 'December 27, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      northing: 1458603.4055,
      easting: 564529.3468,
      latitude: '13.188279142 N',
      longitude: '123.596683228 E',
    },
    denrRecords: {
      northing: 1458931.997,
      easting: 564626.61,
      longitude: '123 35 46.30637',
      latitude: '13 11 33.36627',
      ellipsoidalHeight: 69.609,
      elevation: 70.018,
    },
    discrepancyDetails: {
      DenrRecord: {
        northing: 1110.7361,
        easting: 343.4756,
      },
    },
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
