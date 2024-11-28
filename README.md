# PHYSICAL INTRUSION DETECTION FRONTEND

This is the frontend for our application.
The entire setup is done with NextJS ofr frontend website and Flask for the backend processing, by integrating the two, we have takem the best pof two world for frontend and backend.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Explanation of the SETUP](#explanation-of-the-setup)
- [Running the application](#running-the-application)
- [Contributing](#contributing)

## Getting Started
Instructions to help users get the project up and running.
### Installation
#### 1. NextJS

**`application setup`**
```bash
npx create-next-app@latest physicalintrusiondetection
```
**`go into the application `**

```bash
cd physicalintrusiondetection
```
**`When prompted, choose the following options: `**

    - Would you like to use TypeScript? Yes
    - Would you like to use ESLint? Yes
    - Would you like to use Tailwind CSS? Yes
    - Would you like to use `src/` directory? Yes
    - Would you like to use App Router? Yes
    - Would you like to customize the default import alias? No
    
**` Implement Next.js Components: `**

run following commands to setup necessary UI components for our frontend template :
```bash
npx shadcn@latest init
```
```bash
npx shadcn@latest add button input card label
```

#### 2. Setup flask backend

- inside the application directory [/physicalintrusiondetection]:

**`make a directory `**
```bash
mkdir flask-backend
```
**`go into the directory: `**
```bash
cd flask-backend
```
**`to create venv: `**
```bash
python -m venv venv
```
**`activate environment: `**
```bash
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

**`install required packages : `**
```bash
pip install flask python-dotenv langchain-groq flask-cors
```
**`create a .env file inside the folder: `**
```bash
GROQ_API_KEY=your_groq_api_key_here
```

## Explanation of the SETUP

#### BACKEND:
INSIDE physicalintrusiondetection/flask-backend:

 **`app.py `** 
 - is the script for flask backend.
 - comprises of functions to 1. connect to LLM 2. take inputs obtained by NextJS and process it

**`.env `** 
- has the api key to connect to llm model

#### FRONTEND:

**`physicalintrusiondetection/src/app/page.tsx : `** 
    - set the page layout and call components of the page

**`physicalintrusiondetection/src/components/AIChatbox.tsx: `**  
    -component to collect user query and generate response. It also maintains conversations between user and LLM model

**`physicalintrusiondetection/src/components/ProcessInputs.tsx: `** 
    - component to collect user input for attack detection and display classification

#### PATCHING NEXTJS TO FLASK:

**`physicalintrusiondetection/next.config.js : `**
    -to ensure proper routing between NextJS and Flask

## Running the application

#### OPEN 2 WINDOWS IN THE TERMINAL

**`IN WINDOW 1: `**
```bash
cd flask-backend
```

```bash

source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

```bash
python app.py
```


**`IN WINDOW 2: `**
```bash
npm run dev
```

**Access it at `http://localhost:3000` `**

## Contributing

Oana-Cristina Tincu oana.tincu@stud.ubbcluj.ro
Shama Holla  shama.holla@students.uni-mannheim.de
