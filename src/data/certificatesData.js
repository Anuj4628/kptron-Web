/**
 * Official Company Certificates Data for KPTRON PIPING SOLUTIONS INC.
 * Documented from the actual physical PDF files inside src/assets/certificates/
 * 
 * 1. AA2701190652654_RC22012019.pdf -> Form GST REG-06 Registration Certificate (GSTIN: 27ALCPD7798P1Z9)
 * 2. MSME KPTRON (1).pdf -> Ministry of MSME Udyam Registration Certificate (Reg: UDYAM-MH-19-0267346)
 */

export const certificatesList = [
  {
    id: "gst-certificate",
    title: "GST Registration Certificate",
    formType: "Form GST REG-06 [Rule 10(1)]",
    registrationNumber: "27ALCPD7798P1Z9",
    regLabel: "GSTIN",
    authority: "Government of India — Goods and Services Tax Network",
    shortAuthority: "Government of India (GSTN)",
    jurisdiction: "Mumbai Nodal Division-2, Maharashtra",
    issuedTo: "KPTRON PIPING SOLUTIONS INC.",
    legalName: "PUNMARAM VAGTAJI DEVASHI",
    constitution: "Proprietorship",
    issueDate: "22/01/2019",
    validity: "Regular / Valid From 22/01/2019",
    fileUrl: "/certificates/AA2701190652654_RC22012019.pdf",
    fileName: "AA2701190652654_RC22012019.pdf",
    downloadName: "KPTRON_GST_Registration_Certificate_27ALCPD7798P1Z9.pdf",
    thumbnail: "/certificates/thumbnails/gst_certificate_preview.png",
    pages: 3,
    typeBadge: "Form GST REG-06",
    statusBadge: "Verified Regular Taxpayer",
    description: "Official Registration Certificate issued by the Government of India under Form GST REG-06, certifying KPTRON Piping Solutions Inc. as a registered taxpayer under the Goods and Services Tax Act.",
    highlights: [
      { label: "Registration No. (GSTIN)", value: "27ALCPD7798P1Z9" },
      { label: "Statutory Form", value: "Form GST REG-06" },
      { label: "Trade Name", value: "KPTRON PIPING SOLUTIONS INC." },
      { label: "Legal Name", value: "PUNMARAM VAGTAJI DEVASHI" },
      { label: "Date of Issue", value: "22/01/2019" },
      { label: "Jurisdictional Office", value: "Mumbai Nodal Division-2" }
    ]
  },
  {
    id: "udyam-msme-certificate",
    title: "Udyam Registration Certificate",
    formType: "Ministry of MSME — Government of India",
    registrationNumber: "UDYAM-MH-19-0267346",
    regLabel: "Udyam Reg. No.",
    authority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    shortAuthority: "Ministry of MSME, Govt. of India",
    jurisdiction: "MSME-DFO Mumbai, Maharashtra",
    issuedTo: "KPTRON PIPING SOLUTIONS INC.",
    activity: "Manufacturing",
    enterpriseType: "Micro Enterprise (Manufacturing)",
    issueDate: "03/02/2024",
    incorporationDate: "22/01/2019",
    fileUrl: "/certificates/MSME KPTRON (1).pdf",
    fileName: "MSME KPTRON (1).pdf",
    downloadName: "KPTRON_Udyam_MSME_Registration_Certificate_UDYAM-MH-19-0267346.pdf",
    thumbnail: "/certificates/thumbnails/msme_certificate_preview.png",
    pages: 1,
    typeBadge: "Ministry of MSME",
    statusBadge: "Verified Micro Enterprise",
    description: "Official Udyam Registration Certificate issued by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, recognizing KPTRON Piping Solutions Inc. for industrial manufacturing of tubes, fittings, and non-ferrous metal products.",
    highlights: [
      { label: "Udyam Reg. Number", value: "UDYAM-MH-19-0267346" },
      { label: "Enterprise Classification", value: "Micro (Manufacturing)" },
      { label: "Enterprise Name", value: "KPTRON PIPING SOLUTIONS INC." },
      { label: "Date of Udyam Reg.", value: "03/02/2024" },
      { label: "NIC Code 24106", value: "Manufacture of tube & tube fittings of basic iron and steel" },
      { label: "NIC Code 24201", value: "Manufacture of Copper and other copper products/alloys" }
    ]
  }
];

export const getCertificateById = (id) => {
  return certificatesList.find((c) => c.id === id) || null;
};
