const ENDPOINT = "https://eth-mainnet.g.alchemy.com/";
const API_KEY = "AGLXk4pdYCSsDJolemy7CR1ACmRAfpFI";

const url = ENDPOINT + "v2/" + API_KEY;
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

const getBody = (method, params) => {
	return JSON.stringify({
		id: 1,
		jsonrpc: "2.0",
		method: method,
		params: params,
	});
};

const getBlockByNumber = async (blockNumber, fullTransactions) => {
	const body = getBody("eth_getBlockByNumber", [blockNumber, fullTransactions]);
	const response = await fetch(url, {
		method: "POST",
		headers: headers,
		body: body,
	});
	return response.json();
};

const getBlockNumber = async () => {
	const body = getBody("eth_blockNumber", []);
	const response = await fetch(url, {
		method: "POST",
		headers: headers,
		body: body,
	});
	return response.json();
};

const options = { method: "GET", headers: { accept: "application/json" } };

const getNFTsForOwner = async (owner, withMetadata = true, pageSize = 100) => {
	const response = await fetch(
		`${ENDPOINT}nft/v3/${API_KEY}/getNFTsForOwner?owner=${owner}&withMetadata=${withMetadata}&pageSize=${pageSize}`,
		options,
	);
	return response;
};



const getCoinsBody = getBody("alchemy_getTokenBalances", ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", "erc20"]);

const getCoins = async () => {
	const response = await fetch(url, {
		method: "POST",
		headers: headers,
		body: getCoinsBody,
	});
	return response;
};



const getAssetTransfersBody = getBody("alchemy_getAssetTransfers", [
	{
		fromBlock: "0x0",
		toBlock: "latest",
		toAddress: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
		withMetadata: false,
		excludeZeroValue: true,
		maxCount: "0x3e8",
		category: ["external"],
	},
]);

const getAssetTransfers = async () => {
	const response = await fetch(url, {
		method: "POST",
		headers: headers,
		body: getAssetTransfersBody,
	});
	return response;
};



module.exports = { getBlockByNumber, getBlockNumber, getNFTsForOwner, getCoins, getAssetTransfersBody, getAssetTransfers };
