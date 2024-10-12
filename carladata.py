import requests
from bs4 import BeautifulSoup
import json
import csv
from datetime import datetime

url = "https://www.zillow.com/home-values/30775/cartersville-ga/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

response = requests.get(url, headers=headers)
print(f"Status Code: {response.status_code}")

soup = BeautifulSoup(response.text, 'html.parser')

next_data = soup.find('script', {'id': '__NEXT_DATA__'})

if next_data:
    try:
        data = json.loads(next_data.string)
        zhvi_range = data['props']['pageProps']['odpMarketAnalytics']['zhviRange']
        print(f"Found {len(zhvi_range)} ZHVI data points!")

        # Prepare data for CSV
        csv_data = []
        for item in zhvi_range:
            date = datetime.strptime(item['timePeriodEnd'], '%Y-%m-%d').date()
            value = item['dataValue']
            csv_data.append([date, value])

        # Sort data by date (oldest to newest)
        csv_data.sort(key=lambda x: x[0])

        # Write to CSV
        with open('cartersville_zhvi_data.csv', 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(['Date', 'ZHVI'])  # Header
            writer.writerows(csv_data)

        print(f"Data has been written to cartersville_zhvi_data.csv")

    except json.JSONDecodeError:
        print("Error decoding JSON data")
    except KeyError as e:
        print(f"KeyError: {e}. The expected data structure was not found.")
else:
    print("__NEXT_DATA__ script not found. Printing page content:")
    print(soup.prettify()[:1000])  # Print first 1000 characters of the page