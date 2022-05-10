const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("FakeNFTMarketplace", function(){
  it("Should return the price of the NFT", async function(){
    const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");
    const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
    await fakeNftMarketplace.deployed()

    const price = await fakeNftMarketplace.getPrice();

    expect(price.toString()).to.equal((0.1*(10**18)).toString())
  })
})
