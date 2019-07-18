from google.cloud import bigquery
import os

def query(license_num):
	os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("insuremi-a604216a8f1a.json")
	client = bigquery.Client(project='insuremi')
	query = """
			select * from `insuremi.profiles.profile` where license_num = '{}'
			""".format(license_num)
	query_job = client.query(query)
	for row in query_job:
		print(row)

query('1234590')