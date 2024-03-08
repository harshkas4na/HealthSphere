from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Enable CORS with credentials support
genai.configure(api_key="API_KEY")
generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 1024,
}
safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]
model = genai.GenerativeModel(
    model_name="gemini-pro", generation_config=generation_config, safety_settings=safety_settings
)

@app.route("/app", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        age = request.form["age"]
        weight = request.form["weight"]
        height = request.form["height"]
        diseases = request.form["diseases"]
        diet_preference = request.form["diet_preference"]
        goals = request.form["goals"]

        prompt = f"You are a nutritionist. You have to help a user to make a diet plan. Firstly greet him/her. Then: Write a diet plan for a user named {name} which has {weight} kg weight, {height} cm height, and is {age} years old. They have the following diseases: {diseases}. Their diet preference is {diet_preference}. Their goal is {goals}."

        try:
            response = model.generate_content(prompt)
            return jsonify({"response": response.text}), 200, {"Access-Control-Allow-Credentials": "true"}
        except Exception as e:
            return jsonify({"error": str(e)}), 500, {"Access-Control-Allow-Credentials": "true"}
    elif request.method == "GET":
        # Handle GET request
        return "This is a GET request"
    else:
        return jsonify({"error": "Method not allowed"}), 405  # Return error for unsupported methods

if __name__ == "__main__":
    app.run(debug=True, port=5000)
