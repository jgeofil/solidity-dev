const { test } = require("node:test");
const assert = require("node:assert");
const { getBlockByNumber, getNFTsForOwner, getCoins, getAssetTransfers } = require("./main.js");

test("getBlockByNumber fetches finalized block", async () => {
	const data = await getBlockByNumber("finalized", false);
	assert.ok(data);
	assert.strictEqual(data.jsonrpc, "2.0");
});

test("getBlockByNumber fetches block 0x1", async () => {
	const data = await getBlockByNumber("0x1", true);
	assert.ok(data);
	assert.strictEqual(data.jsonrpc, "2.0");
});

test("getBlockByNumber fetches latest block", async () => {
	const data = await getBlockByNumber("latest", true);
	assert.ok(data);
	assert.strictEqual(data.jsonrpc, "2.0");
});

test("getBlockByNumber fetches earliest block", async () => {
	const data = await getBlockByNumber("earliest", false);
	assert.ok(data);
	assert.strictEqual(data.jsonrpc, "2.0");
});

test("getBlockByNumber fetches pending block", async () => {
	const data = await getBlockByNumber("pending", false);
	assert.ok(data);
	assert.strictEqual(data.jsonrpc, "2.0");
});

test("getNFTsForOwner fetches NFTs", async () => {
	const res = await getNFTsForOwner("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", true, 1);
	const data = await res.json();
	assert.ok(data);
});

test("getCoins fetches token balances", async () => {
	const res = await getCoins();
	const data = await res.json();
	assert.ok(data);
});

test("getAssetTransfers fetches transfers", async () => {
	const res = await getAssetTransfers();
	const data = await res.json();
	assert.ok(data);
});
