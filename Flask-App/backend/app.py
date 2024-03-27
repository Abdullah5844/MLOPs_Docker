# backend/app.py
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://mongo:27017/")
db = client.your_db
collection = db.users

@app.route('/store', methods=['POST'])
def store():
    data = request.json
    collection.insert_one(data)
    return jsonify({"status": "Data stored"}), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
