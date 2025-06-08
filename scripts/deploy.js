async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address);
    const NFTxBadge = await ethers.getContractFactory("NFTxBadge");
    const contract = await NFTxBadge.deploy();
    console.log("NFTxBadge deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
