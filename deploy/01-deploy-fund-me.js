// module.exports = async(hre) => {
//     const {getNamedAccounts, deployments} = hre }
// hre.getNamedAccounts
// hre.deployments

const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // if chainId is X use address Y
    // if chainId is Z use address A

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    // if contract doesn't exist, we deploy minimal version for local testing

    // no matter what chain -> the chainId will be 5
    // yarn hardhat deploy --network <insert network name>

    // when going for localhost or hardhat network we want to use a mock
    // https://docs.chain.link/docs/ethereum-addresses for different chains - insert in PriceConverter.sol priceFeed
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [address], // price feed address
        log: true,
    })
}
