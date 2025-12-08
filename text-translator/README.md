# Text Translator

A modern text translation web application built with React, TailwindCSS, and RapidAPI.

## Features

- 🌍 Support for 12+ languages
- 🔄 Swap languages with one click
- 💨 Fast and responsive UI
- 🎨 Beautiful gradient design with TailwindCSS
- ⚡ Real-time translation using Google Translate API via RapidAPI

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Get RapidAPI Key**
   - Visit [RapidAPI Google Translate](https://rapidapi.com/googlecloud/api/google-translate1)
   - Sign up for a free account
   - Subscribe to the Google Translate API (free tier available)
   - Copy your API key

3. **Configure API Key**
   - Open `src/App.jsx`
   - Find line with `'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE'`
   - Replace `YOUR_RAPIDAPI_KEY_HERE` with your actual API key

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:5173`

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **RapidAPI** - Translation API integration

## Supported Languages

- English, Spanish, French, German, Italian
- Portuguese, Russian, Japanese, Korean
- Chinese, Arabic, Hindi

## Usage

1. Select source language
2. Select target language
3. Enter text to translate
4. Click "Translate" button
5. View translated text
6. Use swap button to reverse languages
7. Clear button to reset

## License

MIT
