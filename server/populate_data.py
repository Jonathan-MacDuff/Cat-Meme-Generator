import requests
import json
import time
import os

os.makedirs('data', exist_ok=True)

def save_json(data, filename):
    with open(f'data/{filename}', 'w') as f:
        json.dump(data, f, indent=2)

def fetch_cat_images(count=1000):
    print(f"Fetching {count} cat images...")
    cat_urls = set()
    while len(cat_urls) < count:
        response = requests.get('https://api.thecatapi.com/v1/images/search?limit=10')
        if response.ok:
            for item in response.json():
                cat_urls.add(item['url'])
        time.sleep(0.1)
    return list(cat_urls)

def fetch_affirmations(count=47):
    print(f"Fetching {count} affirmations...")
    affirmations = set()

    while len(affirmations) < count:
        response = requests.get('https://www.affirmations.dev/', timeout=5)
        if response.ok:
            affirmations.add(response.json()['affirmation'])
    return list(affirmations)

def fetch_insults(count=500):
    print(f"Fetching {count} insults...")
    insults = set()
    while len(insults) < count:
        response = requests.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        if response.ok:
            insults.add(response.json()['insult'])
        time.sleep(0.05)
    return list(insults)

def fetch_badass_quotes(count=170):
    print(f"Fetching {count} badass quotes...")
    quotes = set()
    while len(quotes) < count:
        response = requests.get('https://api.breakingbadquotes.xyz/v1/quotes')
        if response.ok:
            data=response.json()[0]
            quotes.add(data.get('quote'))
        time.sleep(0.1)
    return list(quotes)

if __name__ == '__main__':
    cats = fetch_cat_images()
    save_json(cats, 'cats.json')

    affirmations = fetch_affirmations()
    save_json(affirmations, 'affirmations.json')

    insults = fetch_insults()
    save_json(insults, 'insults.json')

    badass_quotes = fetch_badass_quotes()
    save_json(badass_quotes, 'bbquotes.json')

    print("All data saved to data/*.json")