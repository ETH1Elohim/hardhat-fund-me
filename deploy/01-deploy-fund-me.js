// module.exports = async(hre) => {
//     const {getNamedAccounts, deployments} = hre }
// hre.getNamedAccounts
// hre.deployments

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // when going for localhost or hardhat network we want to use a mock
    // https://docs.chain.link/docs/ethereum-addresses for different chains - insert in PriceConverter.sol priceFeed
}
