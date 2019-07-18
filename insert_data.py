from google.cloud import bigquery
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("insuremi-a604216a8f1a.json")

client = bigquery.Client(project='insuremi')
dataset_id = 'profiles'
table_id = 'test'  # replace with your table ID
table_ref = client.dataset(dataset_id).table(table_id)
table = client.get_table(table_ref)

rows_to_insert = [
    (u'Ni', 119),
    (u'An', 127)
]

client.insert_rows(table, rows_to_insert)  # API request