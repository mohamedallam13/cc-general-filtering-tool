# CC General Filtering Tool

A Google Apps Script WebApp for filtering and displaying data from Google Sheets based on multiple user-defined parameters. Built with a client/server split architecture.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Features

- Multi-parameter filtering over Google Sheets data
- Dynamic results table with conditional column display
- Real-time filter updates without page reload
- Clean, minimal filter UI
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Database | Google Sheets                   |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
cc-general-filtering-tool/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Filter controls and results table UI
    └── server/          # doGet(), Sheets data access and filtering logic
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/cc-general-filtering-tool.git
   cd cc-general-filtering-tool
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "CC Filtering Tool" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Who has access**: Anyone (or restrict as needed)
4. Click **Deploy** and copy the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
