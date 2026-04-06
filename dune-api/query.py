from dune_client.client import DuneClient

dune = DuneClient("$DUNE_API_KEY")
query_result = dune.get_latest_result(4124453)
