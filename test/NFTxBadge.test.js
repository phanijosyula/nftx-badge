const { expect } = require("chai");

describe("NFTxBadge", function () {
  it("Should mint and assign a badge", async function () {
    const [owner, user] = await ethers.getSigners();
    const NFTxBadge = await ethers.getContractFactory("NFTxBadge");
    const badge = await NFTxBadge.deploy();
    await badge.mintBadge(user.address, "ipfs://badgeuri");
    expect(await badge.hasBadge(user.address)).to.be.true;
    expect(await badge.ownerOf(0)).to.equal(user.address);
  });
});
