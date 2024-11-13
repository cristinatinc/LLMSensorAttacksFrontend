from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from langchain_groq import ChatGroq

app = Flask(__name__)
CORS(app)

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    input1 = data['input1']
    input2 = data['input2']
    result = f"Processed: {input1} and {input2}"
    return jsonify({"result": result})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data['query']
    chat_model = ChatGroq(
        model="llama-3.1-70b-versatile",
        temperature=0,
        max_tokens=None,
        timeout=None,
        max_retries=2,
    )

    response = chat_model.invoke(user_query)
    
    ai_response = response.content
    return jsonify({"response": ai_response})

if __name__ == '__main__':
    app.run(debug=True)