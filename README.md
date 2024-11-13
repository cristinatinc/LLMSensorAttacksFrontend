# LLMSensorAttacksFrontend

This is the frontend for our application.
The entire setup is done with NextJS ofr frontend website and Flask for the backend processing, by integrating the two, we have takem the best pof two world for frontend and backend.

Installation steps:

1. NextJS
npx create-next-app@latest physicalintrusiondetection

cd physicalintrusiondetection

    When prompted, choose the following options:

    - Would you like to use TypeScript? Yes
    - Would you like to use ESLint? Yes
    - Would you like to use Tailwind CSS? Yes
    - Would you like to use `src/` directory? Yes
    - Would you like to use App Router? Yes
    - Would you like to customize the default import alias? No
2. Setup flask backend
- inside the application directory:

    mkdir flask-backend
    cd flask-backend

to create venv:
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install flask python-dotenv openai flask-cors

to setup grok api key :

GROQ_API_KEY=your_openai_api_key_here



3.  Implement Next.js Components

run following commands to setup necessary UI components for our frontend template :
npx shadcn@latest init
npx shadcn@latest add button input card label

WORKING SETUP:

BACKEND:
INSIDE physicalintrusiondetection/flask-backend:

 - app.py is the script for flask backend.
 - comprises of functions to 1. connect to LLM 2. take inputs obtained by NextJS and process it

FRONTEND:

physicalintrusiondetection/src/app/page.tsx : set the page layout and call components of the page

physicalintrusiondetection/src/components/AIChatbox.tsx: component to collect user query and generate response. It also maintains conversations between user and LLM model

physicalintrusiondetection/src/components/ProcessInputs.tsx: component to collect user input for attack detection and display classification

PATCHING NEXTJS TO FLASK:

physicalintrusiondetection/next.config.js : to ensure proper routing between NextJS and Flask

RUNNING THE APPLICATION:

OPEN 2 WINDOWS IN THE TERMINAL

IN WINDOW 1:

cd flask-backend
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
python app.py

IN WINDOW 2:

npm run dev

Access it at `http://localhost:3000`