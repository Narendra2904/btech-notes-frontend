// script.js (cleaned, full)
// --- 1. CONFIGURATION ---
const years = [
  { id: 1, label: '1st Year' },
  { id: 2, label: '2nd Year' },
  { id: 3, label: '3rd Year' },
  { id: 4, label: '4th Year' }
];

const branches = ['CSE', 'CSE(AIML)', 'CSE(DS)','CSE(Design)', 'ECE', 'EEE', 'CIV', 'MECH'];

// --- 2. MANIFEST ---
const manifest = {
  "CSE": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Advanced Communication Architecture', file: 'ACA.pdf', syllabus: 'ACA_Syllabus.pdf' },
        { title: 'Computer Graphics', file: 'CG.pdf', syllabus: 'CG_Syllabus.pdf' },
        { title: 'Computer Networks', file: 'CN.pdf', syllabus: 'CN_Syllabus.pdf' },
        { title: 'Data Analytics', file: 'DA.pdf', syllabus: 'DA_Syllabus.pdf' },
        { title: 'Design and analysis of Algorithms', file: 'DAA.pdf', syllabus: 'DAA_Syllabus.pdf' },
        { title: 'Distributed Databases', file: 'DDB.pdf', syllabus: 'DDB_Syllabus.pdf' },
        { title: 'DevOps', file: 'DEV.pdf', syllabus: 'DEV_Syllabus.pdf' },
        { title: 'Image Processing', file: 'IP.pdf', syllabus: 'IP_Syllabus.pdf' },
        { title: 'information retrieval Systems', file: 'IRS.pdf', syllabus: 'IRS_Syllabus.pdf' },
        { title: 'Natural Language Processing', file: 'NLP.pdf', syllabus: 'NLP_Syllabus.pdf' },
        { title: 'Principles of Programming Languages', file: 'PPL.pdf', syllabus: 'PPL_Syllabus.pdf' },
        { title: 'Quantum Computing', file: 'QC.pdf', syllabus: 'QC_Syllabus.pdf' }
      ],
      2: [
        { title: 'Artificial Intelligence', file: 'AI.pdf', syllabus: 'AI_Syllabus.pdf' },
        { title: 'Formal Language and Automata Theory', file: 'FLAT.pdf', syllabus: 'FLAT_Syllabus.pdf' },
        { title: 'Full Stack Development', file: 'FSD.pdf', syllabus: 'FSD_Syllabus.pdf' },
        { title: 'Internet of things', file: 'IOT.pdf', syllabus: 'IOT_Syllabus.pdf' },
        { title: 'Mobile Application Development', file: 'MAD.pdf', syllabus: 'MAD_Syllabus.pdf' },
        { title: 'MAchine Learning', file: 'ML.pdf', syllabus: 'ML_Syllabus.pdf' },
        { title: 'Scripting Languages', file: 'SL.pdf', syllabus: 'SL_Syllabus.pdf' },
        { title: 'Software Testing Methodologies', file: 'STM.pdf', syllabus: 'STM_Syllabus.pdf' }
      ]
    },
    4: {
      1: [
        { title: 'Cloud Computing', file: 'CC.pdf', syllabus: 'CC_Syllabus.pdf' },
        { title: 'Software Process and Project Management', file: 'SPPM.pdf', syllabus: 'SPPM_Syllabus.pdf' },
        { title: 'Cryptography amd Network Security', file: 'CNS.pdf', syllabus: 'CNS_Syllabus.pdf' },
        { title: 'Compiler Design', file: 'CD.pdf', syllabus: 'CD_Syllabus.pdf' },
        { title: 'UTILIZATION OF ELECTRIC ENERGY', file: 'UEE.pdf', syllabus: 'UEE_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "CSE(AIML)": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Business Economics and financial Analysis', file: 'BEFA.pdf', syllabus: 'BEFA_Syllabus.pdf' },
        { title: 'Computer Graphics', file: 'CG.pdf', syllabus: 'CG_Syllabus.pdf' },
        { title: 'Computer Networks', file: 'CN.pdf', syllabus: 'CN_Syllabus.pdf' },
        { title: 'Design and Analysis of Algorithms', file: 'DAA.pdf', syllabus: 'DAA_Syllabus.pdf' },
        { title: 'Graph Theory', file: 'GT.pdf', syllabus: 'GT_Syllabus.pdf' },
        { title: 'Design and Analysis of Algorithms', file: 'DAA.pdf', syllabus: 'DAA_Syllabus.pdf' },
        { title: 'Introduction to DataScience', file: 'IDS.pdf', syllabus: 'IDS_Syllabus.pdf' },
        { title: 'Image Processing', file: 'IP.pdf', syllabus: 'IP_Syllabus.pdf' },
        { title: 'Machine Learning ', file: 'ML.pdf', syllabus: 'ML_Syllabus.pdf' },
        { title: 'Web Programming', file: 'WP.pdf', syllabus: 'WP_Syllabus.pdf' }
        
      ],
      2: [
        { title: 'Artificial Intelligence', file: 'AI.pdf', syllabus: 'AI_Syllabus.pdf' },
        { title: 'Information Retrieval Systems', file: 'IRS.pdf', syllabus: 'IRS_Syllabus.pdf' },
        { title: 'Computer Vision and Robotics', file: 'CVR.pdf', syllabus: 'CVR_Syllabus.pdf' },
        { title: 'Data Warehouse and Business Intelligence', file: 'DWBI.pdf', syllabus: 'DWBI_Syllabus.pdf' },
        { title: 'Natural Language Processing', file: 'NLP.pdf', syllabus: 'NLP_Syllabus.pdf' },
        { title: 'Pattern Recognition', file: 'PR.pdf', syllabus: 'PR_Syllabus.pdf' },
        { title: 'Software Testing Methodologies', file: 'STM.pdf', syllabus: 'STM_Syllabus.pdf' },
        { title: 'Knowledge Representation and Reasoning', file: 'KRR.pdf', syllabus: 'KRR_Syllabus.pdf' }
      ]
    },
    4: {
      1: [
        { title: 'Profession practice, Law & Ethics ', file: 'PPLE.pdf', syllabus: 'PPLE_Syllabus.pdf' },
        { title: 'Nature Inspired Computing', file: 'NIC.pdf', syllabus: 'NIC_Syllabus.pdf' },
        { title: 'Scripting Languages', file: 'SL.pdf', syllabus: 'SL_Syllabus.pdf' },
        { title: 'Mobile Computing', file: 'MC.pdf', syllabus: 'MC_Syllabus.pdf' },
        { title: 'Deep Learning', file: 'DL.pdf', syllabus: 'DL_Syllabus.pdf' },
        { title: 'Remote sensing & GIS', file: 'RSGIS.pdf', syllabus: 'RSGIS_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "ECE": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Business Economics and financial Analysis', file: 'BEFA.pdf', syllabus: 'BEFA_Syllabus.pdf' },
        { title: 'Computer Organization and Operating Systems', file: 'COOS.pdf', syllabus: 'COOS_Syllabus.pdf' },
        { title: 'Control Systems', file: 'CS.pdf', syllabus: 'CS_Syllabus.pdf' },
        { title: 'Data Communication and Computer Networks', file: 'DCCN.pdf', syllabus: 'DCCN_Syllabus.pdf' },
        { title: 'Electronic Measuring Instruments', file: 'EMI.pdf', syllabus: 'EMI_Syllabus.pdf' },
        { title: 'IOT Architectures and Protocols', file: 'IAP.pdf', syllabus: 'IAP_Syllabus.pdf' },
        { title: 'MicroControllers', file: 'MC.pdf', syllabus: 'MC_Syllabus.pdf' }
      ],
      2: [
        { title: 'Antennas and wave Propogation', file: 'AWP.pdf', syllabus: 'AWP_Syllabus.pdf' },
        { title: 'Digital Image Processing', file: 'DIP.pdf', syllabus: 'DIP_Syllabus.pdf' },
        { title: 'Digital Signal Processing', file: 'DSP.pdf', syllabus: 'DSP_Syllabus.pdf' },
        { title: 'Embedded System Design', file: 'ESD.pdf', syllabus: 'ESD_Syllabus.pdf' },
        { title: 'Mobile Communication and Networks', file: 'MCN.pdf', syllabus: 'MCN_Syllabus.pdf' },
        { title: 'VLSO Design', file: 'VLSI.pdf', syllabus: 'VLSI_Syllabus.pdf' }
      ]
    },
    4: {
      1: [
        { title: 'MicroWave and Optical Communications', file: 'MWOC.pdf', syllabus: 'MWOC_Syllabus.pdf' },
        { title: 'Professional Practice, Law & Ethics', file: 'PPLE.pdf', syllabus: 'PPLE_Syllabus.pdf' },
        { title: 'Software Engineering', file: 'SE.pdf', syllabus: 'SE_Syllabus.pdf' },
        { title: 'Radar Systems', file: 'RS.pdf', syllabus: 'RS_Syllabus.pdf' },
        { title: 'Satellite Communication', file: 'SC.pdf', syllabus: 'SC_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "CSE(DS)": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    4: {
      1: [
        { title: 'Predictive Analytics', file: 'PA.pdf', syllabus: 'PA_Syllabus.pdf' },
        { title: 'Web and Social Media analytics', file: 'WSMA.pdf', syllabus: 'WSMA_Syllabus.pdf' },
        { title: 'Remote Sensing & GIS', file: 'RSGIS.pdf', syllabus: 'RSGIS_Syllabus.pdf' },
        { title: 'Cloud Computing', file: 'CC.pdf', syllabus: 'CC_Syllabus.pdf' },
        { title: 'Natural Language Processing', file: 'NLP.pdf', syllabus: 'NLP_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "CSE(Design)": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Computer Graphics', file: 'CG.pdf', syllabus: 'CG_Syllabus.pdf' },
        { title: 'Computer Networks', file: 'CN.pdf', syllabus: 'CN_Syllabus.pdf' },
        { title: 'Data Analytics', file: 'DA.pdf', syllabus: 'DA_Syllabus.pdf' },
        { title: 'Distributed Databases', file: 'DDB.pdf', syllabus: 'DDB_Syllabus.pdf' },
        { title: 'Design Thinking', file: 'DT.pdf', syllabus: 'DT_Syllabus.pdf' },
        { title: 'Embedded Systems', file: 'ES.pdf', syllabus: 'ES_Syllabus.pdf' },
        { title: 'Image Processing', file: 'IP.pdf', syllabus: 'IP_Syllabus.pdf' },
        { title: 'information retrieval Systems', file: 'IRS.pdf', syllabus: 'IRS_Syllabus.pdf' },
        { title: 'Natural Language Processing', file: 'NLP.pdf', syllabus: 'NLP_Syllabus.pdf' },
        { title: 'System Management', file: 'SM.pdf', syllabus: 'SM_Syllabus.pdf' },
        { title: 'Quantum Computing', file: 'QC.pdf', syllabus: 'QC_Syllabus.pdf' }
      ],
      2: [
        { title: 'Advanced Communication Architecture', file: 'ACA.pdf', syllabus: 'ACA_Syllabus.pdf' },
        { title: 'Intro to Engineering Design', file: 'IED.pdf', syllabus: 'IED_Syllabus.pdf' },
        { title: 'Formal Language and Automata Theory', file: 'FLAT.pdf', syllabus: 'FLAT_Syllabus.pdf' },
        { title: 'Full Stack Development', file: 'FSD.pdf', syllabus: 'FSD_Syllabus.pdf' },
        { title: 'Internet of things', file: 'IOT.pdf', syllabus: 'IOT_Syllabus.pdf' },
        { title: 'Mobile Application Development', file: 'MAD.pdf', syllabus: 'MAD_Syllabus.pdf' },
        { title: 'Machine Learning', file: 'ML.pdf', syllabus: 'ML_Syllabus.pdf' },
        { title: 'Scripting Languages', file: 'SL.pdf', syllabus: 'SL_Syllabus.pdf' },
        { title: 'Software Testing Methodologies', file: 'STM.pdf', syllabus: 'STM_Syllabus.pdf' }
      ]
    },
    4: {
      1: [
        { title: 'Compiler Design', file: 'CD.pdf', syllabus: 'CD_Syllabus.pdf' },
        { title: 'Cloud Computing', file: 'CC.pdf', syllabus: 'CC_Syllabus.pdf' },
        { title: 'Electronic Sensors', file: 'ES.pdf', syllabus: 'ES_Syllabus.pdf' },
        { title: 'Design Drawing and Visualization', file: 'DDV.pdf', syllabus: 'DDV_Syllabus.pdf' },
        { title: 'Agile Methodology', file: 'AM.pdf', syllabus: 'AM_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "EEE": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Business Economics and financial Analysis', file: 'BEFA.pdf', syllabus: 'BEFA_Syllabus.pdf' },
        { title: 'Computer Aided Electrical Machine Design', file: 'CAEMD.pdf', syllabus: 'CAEMD_Syllabus.pdf' },
        { title: 'Control Systems', file: 'CS.pdf', syllabus: 'CS_Syllabus.pdf' },
        { title: 'High Voltage Engineering', file: 'HVE.pdf', syllabus: 'HVE_Syllabus.pdf' },
        { title: 'IOT Applications in EE', file: 'IOTA.pdf', syllabus: 'IOTA_Syllabus.pdf' },
        { title: 'Micro Processors and Micro Controllers', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Power Electronics', file: 'PE.pdf', syllabus: 'PE_Syllabus.pdf' }

      ],
      2: [
        { title: 'Digital Signal Processing', file: 'DSP.pdf', syllabus: 'DSP_Syllabus.pdf' },
        { title: 'Fundamental of Electric Vehicles', file: 'FEV.pdf', syllabus: 'FEV_Syllabus.pdf' },
        { title: 'Cyber Physical Systems', file: 'CPS.pdf', syllabus: 'CPS_Syllabus.pdf' },
        { title: 'Power Semiconductor Drives', file: 'PSD.pdf', syllabus: 'PSD_Syllabus.pdf' },
        { title: 'Power System opration and control', file: 'PSOC.pdf', syllabus: 'PSOC_Syllabus.pdf' },
        { title: 'Power System Protection', file: 'PSP.pdf', syllabus: 'PSP_Syllabus.pdf' },
        { title: 'Renewable Energy Resources', file: 'RES.pdf', syllabus: 'RES_Syllabus.pdf' },
        { title: 'Wind and Solar Energy Systems', file: 'WSES.pdf', syllabus: 'WSES_Syllabus.pdf' }

        
      ]
    },
    4: {
      1: [
        { title: 'Power Electric Applications to renewable Energy Systems', file: 'PEA.pdf', syllabus: 'PEA_Syllabus.pdf' },
        { title: 'Fundamentals of Management for Engineers', file: 'FME.pdf', syllabus: 'FME_Syllabus.pdf' },
        { title: 'Software Engineerings', file: 'SE.pdf', syllabus: 'SE_Syllabus.pdf' },
        { title: 'Electric and Hybrid Vehicles', file: 'EHV.pdf', syllabus: 'EHV_Syllabus.pdf' },
        { title: 'HVDC Transmission', file: 'HVDC.pdf', syllabus: 'HVDC_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "CIV": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
        { title: 'Geotechnical Engineering', file: 'GE.pdf', syllabus: 'GE_Syllabus.pdf' },
        { title: 'Business Economics & Financial Analysis', file: 'BEFA - Unit 1.pdf', syllabus: 'BEFA_Syllabus.pdf' },
        { title: 'Hydrology & Water Resources Eng.', file: 'HWRE - Unit 1.pdf', syllabus: 'HWRE_Syllabus.pdf' },
        { title: 'Transportation Engineering', file: 'TE - Unit 1.pdf', syllabus: 'TE_Syllabus.pdf' },
        { title: 'Structural Analysis', file: 'SA.pdf', syllabus: 'SA_Syllabus.pdf' },
        { title: 'Structural Engineering I', file: 'SE1.pdf', syllabus: 'SE1_Syllabus.pdf' }
],
     2: [
        { title: 'Environmental Engineering', file: 'EE - Unit 1.pdf', syllabus: 'EE_Syllabus.pdf' },
        { title: 'Foundation Engineering', file: 'FE - Unit 1.pdf', syllabus: 'FE_Syllabus.pdf' },
        { title: 'Structural Engineering II', file: 'SE2.pdf', syllabus: 'SE2_Syllabus.pdf' },
        { title: 'Disaster Preparedness & Planning Mgmt', file: 'DPPM.pdf', syllabus: 'DPPM_Syllabus.pdf' },
        { title: 'Geomatic Applications in CIVIL Engn', file: 'GA.pdf', syllabus: 'GA_Syllabus.pdf' },     
        { title: 'Bridge Management System', file: 'BMS.pdf', syllabus: 'BMS_Syllabus.pdf' },
        { title: 'Environmental Impact Assessment', file: 'EIA.pdf', syllabus: 'EIA_Syllabus.pdf' },
        { title: 'Green Building Technologies', file: 'GBT.pdf', syllabus: 'GBT_Syllabus.pdf' },
        { title: 'Smart Cities Planning & Mgmt', file: 'SCPM.pdf', syllabus: 'SCPM_Syllabus.pdf' }
],
    },
    4: {
      1: [
        { title: 'Quantum Survey and Valuation', file: 'QSV.pdf', syllabus: 'QSV_Syllabus.pdf' },
        { title: 'Project Management', file: 'PM.pdf', syllabus: 'PM_Syllabus.pdf' },
        { title: 'Software Engineering', file: 'SE.pdf', syllabus: 'SE_Syllabus.pdf' },
        { title: 'Prestressed Concrete', file: 'PC.pdf', syllabus: 'PC_Syllabus.pdf' },
        { title: 'Ground Improvement Techniques', file: 'GIT.pdf', syllabus: 'GIT_Syllabus.pdf' },
        { title: 'Ground Water Hydrology', file: 'GWH.pdf', syllabus: 'GWH_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  },
  "MECH": {
    1: {
      1: [
        { title: 'Mathematics-I', file: 'Maths1.pdf', syllabus: 'Maths1_Syllabus.pdf' },
        { title: 'Applied Physics', file: 'Physics.pdf', syllabus: 'Physics_Syllabus.pdf' },
        { title: 'Prog. for Problem Solving', file: 'PPS.pdf', syllabus: 'PPS_Syllabus.pdf' },
        { title: 'Engineering Workshop', file: 'Workshop.pdf', syllabus: 'Workshop_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    },
    2: {
      1: [
        { title: 'Discrete Mathematics', file: 'DM.pdf', syllabus: 'DM_Syllabus.pdf' },
        { title: 'Digital Logic Design', file: 'DLD.pdf', syllabus: 'DLD_Syllabus.pdf' }
      ],
      2: []
    },
    3: {
      1: [
  { title: 'Dynamics of Machinery', file: 'DOM - Unit 1.pdf', syllabus: 'DOM_Syllabus.pdf' },
  { title: 'CAD/CAM', file: 'CADCAM - Unit 1.pdf', syllabus: 'CADCAM_Syllabus.pdf' },
  { title: 'Business Economics & Financial Analysis', file: 'BEFA - Unit 1.pdf', syllabus: 'BEFA_Syllabus.pdf' },
  { title: 'Finite Element Methods', file: 'Finite Element Methods.pdf', syllabus: 'FE_Syllabus.pdf' },
  { title: 'Metrology & Machine Tools', file: 'MMT.pdf', syllabus: 'MMT_Syllabus.pdf' },
  { title: 'Design of Machine Elements', file: 'DOME.pdf', syllabus: 'DOME_Syllabus.pdf' },
  { title: 'Steam Power and Jet Propulsion', file: 'SJTP.pdf', syllabus: 'STJP_Syllabus.pdf' }
],
      2: [
      { title: 'Heat Transfer', file: 'Heat-Transfer.pdf', syllabus: 'HT_Syllabus.pdf' },
      { title: 'Operational Research', file: 'OR.pdf', syllabus: 'OR_Syllabus.pdf' },
      { title: 'Production Planning & Control', file: 'PPC.pdf', syllabus: 'PPC_Syllabus.pdf' },
      { title: 'Renewable Energy Sources', file: 'RES.pdf', syllabus: 'RES_Syllabus.pdf' },
      { title: 'Unconventional Machining Process', file: 'UMP.pdf', syllabus: 'UMP_Syllabus.pdf' },
      { title: 'Basic Mechanical Engineering', file: 'BME.pdf', syllabus: 'BME_Syllabus.pdf' },
      { title: 'Modern Practice in Architecture', file: 'MPA.pdf', syllabus: 'MPA_Syllabus.pdf' },
      { title: 'Machine Design', file: 'MD.pdf', syllabus: 'MD_Syllabus.pdf' }
    ]
    },
    4: {
      1: [
        { title: 'Industrial Management', file: 'IM.pdf', syllabus: 'IM_Syllabus.pdf' },
        { title: 'refrigerator & Air Conditioning', file: 'RAC.pdf', syllabus: 'RAC_Syllabus.pdf' },
        { title: 'Software Engineering', file: 'SE.pdf', syllabus: 'SE_Syllabus.pdf' },
        { title: 'Automation in Manufacturing', file: 'AIM.pdf', syllabus: 'AIM_Syllabus.pdf' },
        { title: 'Automobile Engineering', file: 'AM.pdf', syllabus: 'AM_Syllabus.pdf' },
        { title: 'Fluid Power System', file: 'FPS.pdf', syllabus: 'FPS_Syllabus.pdf' }
      ],
      2: [
        { title: 'Mathematics-II', file: 'Maths2.pdf', syllabus: 'Maths2_Syllabus.pdf' },
        { title: 'Data Structures', file: 'DS.pdf', syllabus: 'DS_Syllabus.pdf' },
        { title: 'English', file: 'English.pdf', syllabus: 'English_Syllabus.pdf' },
        { title: 'Basic Electrical Eng', file: 'BEE.pdf', syllabus: 'BEE_Syllabus.pdf' }
      ]
    }
  }
};

// --- 3. STATE MANAGEMENT ---
let state = { year: null, branch: null, semester: null, subjectFile: null };

// --- 4. DOM ELEMENTS ---
const els = {
  yearContainer: document.getElementById('year-container'),
  branchSection: document.getElementById('branch-section'),
  branchContainer: document.getElementById('branch-container'),
  semSection: document.getElementById('semester-section'),
  resourcesSection: document.getElementById('resources-section'),
  notesContainer: document.getElementById('notes-container'),
  sylContainer: document.getElementById('syllabus-container'),
  breadcrumb: document.getElementById('breadcrumb-text'),
  leftTitle: document.getElementById('left-title')
};

// --- 5. HELPER FUNCTIONS ---
function esc(s){ return String(s || ''); }

function buildAssetUrl(branch, year, semester, filename){
  const encodedFile = encodeURIComponent(filename);
  return `assets/${branch}/year${year}/sem${semester}/${encodedFile}`;
}

function getSubjectsFromManifest(year, branch, semester){
  if(!branch || !year || !semester) return [];
  const branchObj = manifest[branch];
  if(!branchObj) return [];
  const yearObj = branchObj[year];
  if(!yearObj) return [];
  return yearObj[semester] || [];
}

function getSyllabus(year, branch, semester, subjects){
  const base = `assets/${branch}/year${year}/sem${semester}`;
  
  const list = [];

  if(subjects && subjects.length > 0){
    subjects.forEach(sub => {
      if(sub.syllabus) {
        list.push({ 
          title: `${sub.title} Syllabus`, 
          date: 'Subject Specific', 
          url: `${base}/${sub.syllabus}` 
        });
      }
    });
  }

  if(list.length === 0) {
    list.push({ title: `${branch} R23 Syllabus Copy`, date: 'Full Sem', url: `${base}/syllabus-r23.pdf` });
  }

  list.push({ title: 'Academic Calendar', date: 'Common', url: `${base}/academic-calendar.pdf` });

  return list;
}

// --- 6. CORE LOGIC: SUBJECT FOLDERS & 5 UNITS ---

function createSubjectFolderDOM(subject) {
  const folder = document.createElement('div');
  folder.className = 'subject-folder group relative bg-white border-2 border-black p-4 shadow-[4px_4px_0] fade-in mb-4';

  const sylLink = subject.syllabus 
    ? `<a href="${buildAssetUrl(state.branch, state.year, state.semester, subject.syllabus)}" target="_blank" class="text-xs font-bold text-pink-600 hover:underline hover:bg-pink-100 px-2 py-1 border-2 border-transparent hover:border-pink-300 transition-all mr-2">SYLLABUS</a>` 
    : '';

  folder.innerHTML = `
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="bg-blue-200 p-3 border-2 border-black"><i data-lucide="folder" class="w-6 h-6"></i></div>
        <div>
          <div class="font-bold text-lg">${esc(subject.title)}</div>
          <div class="text-xs text-gray-600 font-mono">${esc(subject.file)}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        ${sylLink}
        <a class="text-sm underline open-subject-pdf hidden md:block" target="_blank" rel="noopener noreferrer"></a>
        <button class="toggle-units px-4 py-2 border-2 border-black bg-yellow-300 hover:bg-yellow-400 font-bold text-sm uppercase transition-colors">Open Folder</button>
      </div>
    </div>
    <div class="units-area mt-4 hidden border-t-2 border-dashed border-gray-300 pt-4"></div>
  `;

  const openLink = folder.querySelector('.open-subject-pdf');
  openLink.href = buildAssetUrl(state.branch, state.year, state.semester, subject.file);

  const toggleBtn = folder.querySelector('.toggle-units');
  const unitsArea = folder.querySelector('.units-area');

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (unitsArea.classList.contains('hidden')) {
      const units = getUnitsForSubject(subject.file);
      unitsArea.innerHTML = renderUnitsHTML(units);
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
      unitsArea.classList.remove('hidden');
      toggleBtn.textContent = 'Close Folder';
      toggleBtn.classList.replace('bg-yellow-300', 'bg-white');
    } else {
      unitsArea.classList.add('hidden');
      toggleBtn.textContent = 'Open Folder';
      toggleBtn.classList.replace('bg-white', 'bg-yellow-300');
    }
  });

  return folder;
}

function getUnitsForSubject(subjectFile) {
  const baseName = subjectFile.replace(/\.pdf$/i, ''); 
  const units = [];
  for (let i = 1; i <= 5; i++) {
    const filename = `${baseName} - Unit ${i}.pdf`;
    units.push({ title: `Unit ${i}`, filename });
  }
  return units;
}

function renderUnitsHTML(units) {
  return `
    <div class="unit-grid grid grid-cols-1 sm:grid-cols-2 gap-3">
      ${units.map(u => {
        const url = buildAssetUrl(state.branch, state.year, state.semester, u.filename);
        return `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="block no-underline group/unit">
            <div class="bg-zinc-50 border-2 border-black p-3 hover:bg-yellow-100 transition-colors flex items-center gap-3">
              <div class="p-2 bg-white border-2 border-black text-pink-500 group-hover/unit:text-black transition-colors">
                <i data-lucide="file-text" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="font-bold text-sm">${esc(u.title)}</div>
                <div class="text-[10px] text-gray-500 font-mono truncate max-w-[150px]">${esc(u.filename)}</div>
              </div>
            </div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

// --- 7. OTHER RENDERERS ---

function createSyllabusCard(item){
  return `
    <a href="${encodeURI(item.url)}" target="_blank" class="group block no-underline">
      <div class="relative bg-white border-2 border-black p-5 shadow-[4px_4px_0] hover:shadow-[8px_8px_0] transition-all mb-4">
        <div class="flex items-start gap-4">
          <div class="p-3 border-2 border-black bg-pink-300">
            <i data-lucide="check-circle" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 class="font-bold text-lg leading-tight mb-2">${esc(item.title)}</h3>
            <div class="text-sm text-gray-600 font-mono">${item.date || ''}</div>
          </div>
        </div>
      </div>
    </a>
  `;
}

// --- 8. RENDER HELPERS ---

function renderYears(){
  if(!els.yearContainer) return;
  els.yearContainer.innerHTML = years.map(y => {
    const active = state.year === y.id ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-gray-400 hover:text-white';
    return `<button onclick="setYear(${y.id})" class="h-32 border-2 border-white/20 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${active}">
      <span class="text-5xl font-black">${y.id}</span>
      <span class="uppercase tracking-widest text-xs font-bold font-mono">Year</span>
    </button>`;
  }).join('');
}

function renderBranches(){
  if(!els.branchContainer) return;
  els.branchContainer.innerHTML = branches.map((b, idx) => {
    const active = state.branch === b ? 'bg-black text-white' : 'bg-white text-black hover:bg-pink-100';
    return `<button onclick="setBranch('${b}')" class="py-4 border-2 border-black font-black text-xl neo-shadow hover:translate-y-[-2px] transition-transform ${active}">${b}</button>`;
  }).join('');
}

function renderSemesters(){
  [1,2].forEach(num => {
    const btn = document.getElementById(`sem-btn-${num}`);
    if(!btn) return;
    btn.className = (state.semester === num) 
      ? "flex-1 py-6 border-2 border-black font-black text-xl bg-black text-white" 
      : "flex-1 py-6 border-2 border-black font-black text-xl hover:bg-yellow-400 bg-white transition-all";
  });
}

// --- 9. ACTION HANDLERS ---

window.setYear = function(y){
  state.year = y; state.branch = null; state.semester = null;
  renderYears(); renderBranches();
  if (els.branchSection) els.branchSection.classList.remove('hidden');
  if (els.semSection) els.semSection.classList.add('hidden');
  if (els.resourcesSection) els.resourcesSection.classList.add('hidden');
  els.branchSection && els.branchSection.scrollIntoView({ behavior:'smooth', block:'start' });
}

window.setBranch = function(b){
  state.branch = b; state.semester = null;
  renderBranches(); renderSemesters();
  if (els.semSection) els.semSection.classList.remove('hidden');
  if (els.resourcesSection) els.resourcesSection.classList.add('hidden');
  els.semSection && els.semSection.scrollIntoView({ behavior:'smooth', block:'center' });
}

window.setSemester = function(s){
  state.semester = s;
  renderSemesters();

  const subjects = getSubjectsFromManifest(state.year, state.branch, state.semester);
  
  if(subjects.length === 0){
    els.notesContainer.innerHTML = `<div class="p-4 border-2 border-black bg-yellow-100 font-bold">No subjects found for ${state.branch} Year ${state.year} Sem ${state.semester}. Check script.js manifest.</div>`;
  } else {
    els.notesContainer.innerHTML = '';
    subjects.forEach(sub => {
      const dom = createSubjectFolderDOM(sub);
      els.notesContainer.appendChild(dom);
    });
  }

  const syllabus = getSyllabus(state.year, state.branch, state.semester, subjects);
  els.sylContainer.innerHTML = syllabus.map(s => createSyllabusCard(s)).join('');

  if (els.breadcrumb) {
    els.breadcrumb.innerHTML = `
      <button onclick="setYear(${state.year})" class="text-blue-800 hover:text-pink-600 hover:underline font-black uppercase transition-colors">YEAR ${state.year}</button> 
      <span class="text-gray-400 font-bold mx-1">/</span>
      <button onclick="setBranch('${state.branch}')" class="text-blue-800 hover:text-pink-600 hover:underline font-black uppercase transition-colors">${state.branch}</button> 
      <span class="text-gray-400 font-bold mx-1">/</span>
      <span class="bg-black text-white px-2 font-bold">SEM ${state.semester}</span>
    `;
  }

  els.resourcesSection.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
  els.resourcesSection.scrollIntoView({ behavior:'smooth', block:'start' });
}

// --- 10. INITIALIZATION & SOCIAL MODAL ---

document.addEventListener('DOMContentLoaded', () => {
  renderYears();
  renderBranches();
  
  const semContainer = document.getElementById('semester-container');
  if (semContainer) {
    semContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-sem]');
      if (btn) setSemester(Number(btn.getAttribute('data-sem')));
    });
  }

  // SOCIAL MODAL LOGIC (keeps modal in index.html)
  window.openSocialModal = (type) => {
    const modal = document.getElementById('social-modal');
    const title = document.getElementById('modal-title');
    const links = document.getElementById('modal-links');
    const iconContainer = document.getElementById('modal-icon-container');
    if(!modal) return;
    
    modal.classList.remove('hidden');
    title.textContent = type.toUpperCase();

    const socialData = {
      instagram: {
        title: "Instagram",
        icon: "instagram",
        color: "bg-pink-400",
        links: [
          { name: "Madhan Myana", url: "https://www.instagram.com/madhan.myana/" },
          { name: "Narendra Yenagandula", url: "https://instagram.com/narendra_yenagandula" }
        ]
      },
      linkedin: {
        title: "LinkedIn",
        icon: "linkedin",
        color: "bg-blue-400",
        links: [
          { name: "Madhan Myana", url: "https://www.linkedin.com/in/madhan-myana-7ab90a335/" },
          { name: "Narendra Yenagandula", url: "https://www.linkedin.com/in/narendra-yenagandula/" }
        ]
      },
      github: {
        title: "GitHub",
        icon: "github",
        color: "bg-gray-200",
        links: [
          { name: "Madhan Myana", url: "https://github.com/madhanmyana" },
          { name: "Narendra Yenagandula", url: "https://github.com/Narendra2904" }
        ]
      }
    };

    const data = socialData[type] || socialData['linkedin'];
    iconContainer.className = `inline-flex p-3 border-2 border-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${data.color}`;
    iconContainer.innerHTML = `<i data-lucide="${data.icon}" class="w-8 h-8 text-black"></i>`;
    title.innerText = data.title;

    links.innerHTML = data.links.map(link => `
      <a href="${link.url}" target="_blank" class="block border-2 border-black p-4 font-bold hover:bg-black hover:text-white transition-colors mb-4">
        <span>${link.name}</span> <span class="float-right">→</span>
      </a>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  };

  window.closeSocialModal = () => {
    const modal = document.getElementById('social-modal');
    if (modal) modal.classList.add('hidden');
  };

  if (window.lucide) window.lucide.createIcons();
});

// --- 11. FEEDBACK FORM HANDLER ---
window.handleFeedback = function(e) {
  e.preventDefault();
  const text = document.getElementById('feedback-text').value;
  
  if(!text) return;

  const subject = "Website Feedback: Back.Benchers";
  const emailTo = "yenagandula.narendra@gmail.com"; 
  
  const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  window.location.href = mailtoLink;
  
  document.getElementById('feedback-text').value = '';
  alert("Opening your email client to send feedback!");
};
