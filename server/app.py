from flask import Flask, jsonify
import random
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def load_quotes(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)
    
@app.route('/api/cat')
def get_cat():
    cats = load_quotes('data/cats.json')
    return jsonify({'cat': random.choice(cats)})

@app.route('/api/affirmation')
def get_affirmation():
    affirmations = load_quotes('data/affirmations.json')
    return jsonify({'affirmation': random.choice(affirmations)})

@app.route('/api/insult')
def get_insult():
    insults = load_quotes('data/insults.json')
    return jsonify({'insult': random.choice(insults)})

@app.route('/api/badass')
def get_badass():
    quotes = load_quotes('data/bbquotes.json')
    return jsonify({'quote': random.choice(quotes)})

if __name__ == '__main__':
    app.run(debug=True)