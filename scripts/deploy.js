const main = async () => {
	const nftContractFactory = await hre.ethers.getContractFactory(
		"ChainBattles"
	);
	const nftContract = await nftContractFactory.deploy();
	await nftContract.deployed();

	console.log("Contract deployed to: ", nftContract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
