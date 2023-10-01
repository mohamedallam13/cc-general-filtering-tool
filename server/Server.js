const request = {
  page: "client/pages/index",
  props: {
    users: [
      // { name: 'Dr. Smith', age: '31', location: 'Cairo', photoURL: 'https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing' },
      // { name: 'Dr. Johnson', age: '32', location: 'Cairo', photoURL: 'https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing' },
      // { name: 'Dr. Doe', age: '33', location: 'Cairo', photoURL: 'https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing' },
      // { name: 'Dr. Allen', age: '34', location: 'Cairo', photoURL: 'https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing'  }
      // Add more professionals as needed

      {
        // "photoURL": "https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing", // Placeholder or actual photo
        "name": "Jana Shreif",
        "email": "janashreif45@gmail.com",
        "mobile": "",
        "facebook": "https://www.facebook.com/jana.shreif.71?mibextid=ZbWKwL",
        "gender": "Female",
        "dob": "10/15/2003",
        "address": "Dar elsalam",
        "district": "Outside Cairo",
        "city": "Greater Cairo (Cairo, Guiza, Qalyubia)",
        "country": "Egypt",
        "education": "Undergrad Student",
        "universitySchool": "Cairo U",
        "major": "Other",
        "occupation": "Non",
        "banCheck": "No",
        "vacancy": "FB Moderator",
        "pastExperience": "Iam AC member at student council in my faculty and HR delegate at TREE *student activity in cairo university *",
        "brief": "I'm jana shreif, 19 years old, iam student at faculty of commerce english section, iam introvert person.",
        "joiningReasons": "To have more experience",
        "activitiesHistory": [
          {
            "activity": "CCT",
            "season": "Camp 15",
            "timestamp": "5/1/2023 23:31:14",
            "Decision": "",
            "Verdicts1": "",
            "Dates": "",
            "Verdicts2": "",
            "Comments": ""
          }
        ]
      },
      {
        // "photoURL": "https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing",
        "name": "Ahmed El-Sayed",
        "email": "ahmed.elsayed@gmail.com",
        "mobile": "+201234567890",
        "facebook": "https://www.facebook.com/ahmed.elsayed",
        "gender": "Male",
        "dob": "11/20/1995",
        "address": "Maadi",
        "district": "Cairo",
        "city": "Greater Cairo",
        "country": "Egypt",
        "education": "Graduate",
        "universitySchool": "Ain Shams University",
        "major": "Engineering",
        "occupation": "Engineer",
        "banCheck": "No",
        "vacancy": "FB Moderator",
        "pastExperience": "Worked as a moderator for various online communities.",
        "brief": "I'm Ahmed, an engineer with a passion for community management.",
        "joiningReasons": "Looking to expand my experience in online community management.",
        "activitiesHistory": [
          {
            "activity": "Community Management",
            "season": "2022",
            "timestamp": "4/15/2023 12:15:10",
            // ... (rest of the fields for this activity) ...
          }
        ]
      },
      {
        // "photoURL": "https://drive.google.com/file/d/1kNVWHNlg0gOT6BNQ5jysb1RJJVALULb2/view?usp=sharing",
        "name": "Fatima Zahra",
        "email": "fatima.zahra@gmail.com",
        "mobile": "+201234567891",
        "facebook": "https://www.facebook.com/fatima.zahra",
        "gender": "Female",
        "dob": "3/5/1998",
        "address": "Nasr City",
        "district": "Cairo",
        "city": "Greater Cairo",
        "country": "Egypt",
        "education": "Undergrad Student",
        "universitySchool": "Al-Azhar University",
        "major": "Medicine",
        "occupation": "Student",
        "banCheck": "No",
        "vacancy": "FB Moderator",
        "pastExperience": "Participated in various student activities and online forums.",
        "brief": "I'm Fatima, a medical student with an interest in online communities.",
        "joiningReasons": "Want to gain experience in managing online communities.",
        "activitiesHistory": [
          {
            "activity": "Medical Forum",
            "season": "2021",
            "timestamp": "2/10/2023 10:10:10",
            // ... (rest of the fields for this activity) ...
          }
        ]
      }
    ]

  }
}



// const request = {
//   page: "professionalsNetworkLoader"
// }


function doGet(e) {
  const aggregatedObj = getApplicants() 
  // const { page, props = {} } = request
  const page = "client/pages/index"
  return _R(page, {aggregatedObj}, { metaData: [{ name: "viewport", content: "width=device-width, initial-scale=1" }] })
}

