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
    id: 2, // Switched from id: 2
    number: 'BLLM 1A',
    type: 'BLLM',
    barangay: 'Poblacion',
    status: 'Disturbed',
    latitude: 13.191086,
    longitude: 123.600594,
    location: 'By the light post at the Our Lady of the Assumption Parish entrance.', // Changed from 'description' to 'location'
    condition: 'Intact but unidentifiable',
    imageUrl: '/images/Picture7.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'Philippine Luzon Datum of 1911',
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
      date: 'December 27, 28, and 30, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.54,
      latitude: '13.191095882 N',
      longitude: '123.600595780 E',
      height: 126.9338,
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
    }
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
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.187009 N',
      longitude: '123.595687 E',
    },
    staticSurveyDetails: {
      date: 'December 27 and 29, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.52,
      latitude: '13.188726380 N',
      longitude: '123.598730452 E',
      height: 122.6507,
      northing: 1458653.4067,
      easting: 564751.1561,
      ellipsoidalHeight: 69.3089,
    },
    denrRecords: {
      northing: 1463348.292,
      easting: 566007.176,
      longitude: '123 36 32.51071',
      latitude: '13 13 56.97303',
      ellipsoidalHeight: 179.711,
      elevation: 154.555,
    },
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
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458680.2938,
      easting: 565111.7158,
      ellipsoidalHeight: 71.6567,
      latitude: 13.188961710,
      longitude: 123.602057146,
      height: 125.0060,
    },
    staticSurveyDetails: {
      date: 'December 28 and 29, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.90,
      latitude: '13.188969877 N',
      longitude: '123.602074723 E',
      height: 126.1598,
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
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458764.3729,
      easting: 565188.1798,
      ellipsoidalHeight: 71.3980,
      latitude: 13.189720048,
      longitude: 123.602764324,
      height: 124.7470,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.189686 N',
      longitude: '123.602783 E',
    },
    denrRecords: {
      northing: 1458758.909,
      easting: 565189.072,
      longitude: '123 36 04.97172',
      latitude: '13 11 27.68997',
      ellipsoidalHeight: 72.078,
      elevation: 72.498,
    },
  },
  {
    id: 6,
    number: 'BLLM No. 1X',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.188461,
    longitude: 123.597683,
    location: 'Located on an intersection in barangay Inamnan Grande, near Flash Express hub.', // Changed from 'description' to 'location'
    condition:
      'Intact on the ground with little to no signs of tarnishing or any severe destruction, but control number cannot be identified',
    imageUrl: '/images/Picture23.jpg',
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458622.4170,
      easting: 564636.5331,
      ellipsoidalHeight: 71.7506,
      latitude: 13.188448708,
      longitude: 123.597672409,
      height: 125.0905,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.188462 N',
      longitude: '123.597682 E',
    },
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
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458465.8575,
      easting: 564416.4747,
      ellipsoidalHeight: 80.1527,
      latitude: 13.181738261,
      longitude: 123.595639035,
      height: 123.6152,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.189375 N',
      longitude: '123.595798 E',
    },
  },
  {
    id: 8,
    number: 'BLLM No. X',
    type: 'BLLM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.187006,
    longitude: 123.595686,
    location: 'Located on the side of the road near a red gated house', // Changed from 'description' to 'location'
    condition: 'Intact on the ground but control number cannot be identified',
    imageUrl: '/images/Picture4.jpg',
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458465.8575,
      easting: 564416.4747,
      ellipsoidalHeight: 80.1527,
      latitude: 13.180738261,
      longitude: 123.5939035,
      height: 133.4914,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.187005 N',
      longitude: '123.595685 E',
    },
  },
  {
    id: 9,
    number: 'BLLM No. XX',
    type: 'BLLM',
    barangay: 'Ilawod',
    status: 'Disturbed',
    latitude: 13.194103,
    longitude: 123.596811,
    location: 'In front of Nuestra Señora Funeral Homes, by the Ilawod Barangay Hall alley', // Changed from 'description' to 'location'
    condition: 'Intact on the ground but control number cannot be identified',
    imageUrl: '/images/Picture18.jpg',
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1459253.1795,
      easting: 564545.2246,
      ellipsoidalHeight: 72.1495,
      latitude: 13.4152009,
      longitude: 123.596843773,
      height: 125.4720,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.194107 N',
      longitude: '123.596825 E',
    },
  },
  {
    id: 10,
    number: 'BLLM XXX',
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
    number: 'BBM 1',
    type: 'BBM',
    barangay: 'Iraya',
    status: 'Disturbed',
    latitude: 13.190569,
    longitude: 123.601339,
    location: 'Side of Daraga Home Depot', // Changed from 'description' to 'location'
    condition: 'The GCP appears to be no longer attached to the ground',
    imageUrl: '/images/Picture14.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 29, 2024',
      northing: 1458881.9131,
      easting: 565030.3661,
      ellipsoidalHeight: 75.6398,
      latitude: 13.190785855,
      longitude: 123.601311088,
      height: 128.9823,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190694',
      longitude: '123.601340',
    },
    denrRecords: {
      northing: 29639.18,
      easting: 30394.11,
      longitude: '565206.999',
      latitude: '1458770.876',
    },
  },
  {
    id: 12,
    number: 'BBM No. 34',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Undisturbed',
    latitude: 13.190753,
    longitude: 123.598378,
    location:
      'Located on the left side of Osurman Trading building.', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture11.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458878.6639,
      easting: 564713.8463,
      ellipsoidalHeight: 69.1492,
      latitude: 13.190763238,
      longitude: 123.598391170,
      height: 122.4846,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190753 N',
      longitude: '123.598379 E',
    },
    denrRecords: {
      northing: 1458873.227,
      easting: 564714.735,
      longitude: '123 35 49.22830',
      latitude: '13 11 31.44695',
      ellipsoidalHeight: 69.565,
      elevation: 69.976,
    },
  },
  {
    id: 13,
    number: 'BBM 35',
    type: 'BBM',
    barangay: 'Inamnan Grande',
    status: 'Disturbed',
    latitude: 13.189019,
    longitude: 123.600792,
    location: 'Outside Guinobatan Wet market, in front of Dan-Ke Trading', // Changed from 'description' to 'location'
    condition: 'The GCP is moved from its original position',
    imageUrl: '/images/Picture15.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458688.4880,
      easting: 564973.3646,
      latitude: 13.189038735,
      longitude: 123.600781040,
      height: 124.6372,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.189019 N',
      longitude: '123.600793 E',
    },
    denrRecords: {
      northing: 1458683.662,
      easting: 564974.581,
      longitude: '123 35 57.84264',
      latitude: '13 11 25.25797',
      ellipsoidalHeight: 71.904,
      elevation: 72.32,
    },
  },
  {
    id: 14,
    number: 'BBM 36',
    type: 'BBM',
    barangay: 'Poblacion',
    status: 'Disturbed',
    latitude: 13.190061,
    longitude: 123.601767,
    location: 'Near Niones Madrid Dental Clinic', // Changed from 'description' to 'location'
    condition: 'The GCP is not intact on the ground and can be easily moved',
    imageUrl: '/images/Picture1.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190062 N',
      longitude: '123.601767 E',
    },
    denrRecords: {
      northing: 1458796.661,
      easting: 565081.824,
      longitude: '123 36 01.41309',
      latitude: '13 11 28.92686',
      ellipsoidalHeight: 72.073,
      elevation: 72.491,
    },
  },
  {
    id: 15,
    number: 'BBM 37',
    type: 'BBM',
    barangay: 'Poblacion',
    status: 'Undisturbed',
    latitude: 13.190686,
    longitude: 123.600964,
    location:
      'Located at the intersection in front of Centro Guinobatan Museum and Abordo Trading building', // Changed from 'description' to 'location'
    condition: 'Intact and Visible. The control point number is identified',
    imageUrl: '/images/Picture9.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458873.6872,
      easting: 565001.4464,
      ellipsoidalHeight: 72.0114,
      latitude: 13.190712121,
      longitude: 123.601044129,
      height: 125.3535,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190669 N',
      longitude: '123.601072 E',
    },
    denrRecords: {
      northing: 1458868.177,
      easting: 565002.375,
      longitude: '123 35 58.78030',
      latitude: '13 11 31.26032',
      ellipsoidalHeight: 72.638,
      elevation: 73.055,
    },
  },
  {
    id: 16,
    number: 'BBM 47',
    type: 'BBM',
    barangay: 'Inamnan Pequeño',
    status: 'Undisturbed',
    latitude: 13.188075,
    longitude: 123.601481,
    location: 'In Front of Inamnan Pequeño Caltex and Crispy King', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture12.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458603.6841,
      easting: 565044.5595,
      ellipsoidalHeight: 71.8915,
      latitude: 13.188270685,
      longitude: 123.601435947,
      height: 125.2411,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.188251 N',
      longitude: '123.601481 E',
    },
    denrRecords: {
      northing: 1458598.188,
      easting: 565045.449,
      longitude: '123 36 00.18935',
      latitude: '13 11 22.47097',
      ellipsoidalHeight: 72.547,
      elevation: 72.964,
    },
  },
  {
    id: 17,
    number: 'BBM 48',
    type: 'BBM',
    barangay: 'Iraya',
    status: 'Disturbed',
    latitude: 13.188333,
    longitude: 123.601111,
    location: 'Located on the side of Caltex in barangay Iraya', // Changed from 'description' to 'location'
    condition:
      'The GCP is no longer attached to the ground and can be easily moved or displaced',
    imageUrl: '/images/Picture13.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458631.6802,
      easting: 565017.9857,
      ellipsoidalHeight: 71.4276,
      latitude: 13.188524305,
      longitude: 123.601191421,
      height: 124.7759,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13°11\'18" N',
      longitude: '123°36\'04" E',
    },
    denrRecords: {
      northing: 1458627.485,
      easting: 565018.67,
      longitude: '123 35 59.30235',
      latitude: '13 11 23.42646',
      ellipsoidalHeight: 72.008,
      elevation: 72.426,
    },
  },
  {
    id: 18,
    number: 'BBM 50',
    type: 'BBM',
    barangay: 'Ilawod',
    status: 'Undisturbed',
    latitude: 13.191272,
    longitude: 123.597622,
    location:
      'Side of Guinobatan West Central School and in front of Bicol University College of Agriculture and Forestry (BUCAF)', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact and has no signs of any severe dislocation or destruction',
    imageUrl: '/images/Picture17.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458937.3845,
      easting: 564625.7117,
      ellipsoidalHeight: 68.9119,
      latitude: 13.191295878,
      longitude: 123.597579415,
      height: 122.2439,
    },
    staticSurveyDetails: {
      date: 'December 27 and 30, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      latitude: '13.191299636 N',
      longitude: '123.597596969 E',
      height: 123.7213,
      northing: 1458937.8047,
      easting: 564627.6136,
      ellipsoidalHeight: 70.3892,
    },
    denrRecords: {
      northing: 1458931.997,
      easting: 564626.61,
      longitude: '123 35 46.30637',
      latitude: '13 11 33.36627',
      ellipsoidalHeight: 69.609,
      elevation: 70.018,
    },
  },
  {
    id: 19,
    number: 'BBM 50',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Undisturbed',
    latitude: 13.188258,
    longitude: 123.596656,
    location: 'Near MCGI Church', // Changed from 'description' to 'location'
    condition:
      'The GCP is intact with little to no signs of tarnishing or any severe destruction',
    imageUrl: '/images/Picture19.jpg',
    instrumentUsed: 'Tersus Oscar',
    coordinateSystem: 'PRS 92',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458604.9403,
      easting: 564528.8429,
      ellipsoidalHeight: 72.5752,
      latitude: 13.188293026,
      longitude: 123.596678613,
      height: 125.3131,
    },
    staticSurveyDetails: {
      date: 'December 27, 2024',
      epoch: 1441,
      interval: '5s',
      cutOffAngle: 15,
      antennaHeight: 1.80,
      northing: 1458603.4055,
      easting: 564529.3468,
      ellipsoidalHeight: 71.6723,
      latitude: '13.188279142 N',
      longitude: '123.596683228 E',
      height: 125.0103,
    },
    denrRecords: {
      northing: 1458931.997,
      easting: 564626.61,
      longitude: '123 35 46.30637',
      latitude: '13 11 33.36627',
      ellipsoidalHeight: 69.609,
      elevation: 70.018,
    },
  },
  {
    id: 20,
    number: 'BBM No. X',
    type: 'BBM',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.190242,
    longitude: 123.598839,
    location: 'Located on the side of a drainage near a gray house', // Changed from 'description' to 'location'
    condition:
      'Intact on the ground and tilted. Control number cannot be identified',
    imageUrl: '/images/Picture21.jpg',
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458823.4028,
      easting: 564760.7321,
      ellipsoidalHeight: 69.2585,
      latitude: 13.190262743,
      longitude: 123.598822484,
      height: 122.5963,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190241 N',
      longitude: '123.598840 E',
    },
  },
  {
    id: 21,
    number: 'UNKNOWN GCP',
    type: 'Unknown',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.190678,
    longitude: 123.598403,
    location:
      'In front of Osurman Trading, other side of the road from BBM No. 34', // Changed from 'description' to 'location'
    condition: 'Intact but unidentifiable',
    imageUrl: '/images/Picture22.jpg',
    instrumentUsed: 'Tersus Oscar',
    observationDetails: {
      date: 'December 19, 2024',
      epoch: 120,
      northing: 1458870.2406,
      easting: 564705.8607,
      ellipsoidalHeight: 68.9042,
      latitude: 13.190687270,
      longitude: 123.598317322,
      height: 122.2397,
    },
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190671 N',
      longitude: '123.598389 E',
    },
  },
  {
    id: 22,
    number: 'UNKNOWN GCP',
    type: 'Unknown',
    barangay: 'Calzada',
    status: 'Disturbed',
    latitude: 13.190678,
    longitude: 123.594847,
    location: 'Brgy. Calzada, near the Catholic Cemetery in Calzada', // Changed from 'description' to 'location'
    condition: 'Intact but unidentifiable',
    imageUrl: '/images/Picture3.jpg',
    geotagDetails: {
      date: 'December 31, 2024',
      appUsed: 'GPS Map Camera',
      latitude: '13.190679 N',
      longitude: '123.594848 E',
    },
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
