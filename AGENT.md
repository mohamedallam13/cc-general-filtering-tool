# AGENT.md — cc-general-filtering-tool

## Purpose
A general-purpose Google Apps Script WebApp for filtering and displaying data from Google Sheets. Client/server split architecture.

## Structure
```
cc-general-filtering-tool/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (filter UI)
    └── server/          ← GAS server-side scripts (Sheets data access)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Data store:** Google Sheets
- **Pattern:** Multi-parameter filtering over sheet data
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
