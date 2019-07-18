from google.cloud import bigquery
import os

def insert(data):
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("insuremi-a604216a8f1a.json")

    client = bigquery.Client(project='insuremi')
    dataset_id = 'profiles'
    table_id = 'profile'  # replace with your table ID
    table_ref = client.dataset(dataset_id).table(table_id)
    table = client.get_table(table_ref)

    rows_to_insert = [
        data
    ]

    client.insert_rows(table, rows_to_insert)

insert({'passport_id': 'a',
    'license_num': '11112222',
    'first_name': 'Tgb',
    'last_name': 'Yhn',
    'phone': '0555548688',
    'emergency_contact': '100',
    'age': 6,
    'num_cars': 7,
    'is_owner': True})

# '987654321', '1113336', 'Edc', 'Rfv', '0808080808', 'Mommy', 87, 2, True