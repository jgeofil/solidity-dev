from dune_client.client import DuneClient

dune = DuneClient("1rPJE7MnWH9TQq14AC2UhSWLyaeXfHpv")
query_result = dune.get_latest_result(4124453)
print(query_result)
