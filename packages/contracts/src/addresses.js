// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
// const addresses = {
//   ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
//   bidenErc20: '0x39e7f52ae509a51678b541018bd4811b6af09fea',
//   trumpERC20: '0xc732ea7fffa34e25573a318bd9c2bc986939f972',
//   yearnTot: '0x76348db6ed0fA79d24D2711a106CFD0178f75Fd0',
//   yearnTob: '0x3588566a971fFD3E0bBdA19e16704b49a3010A82',
//   lpToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
//   bidenPools: [
//     {
//       name: 'ETH/yJOE',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
//       lpToken: '0x30cb1626b55f2d9e4a58996d4d991cd1200df21a',
//       yearn: '',
//       uniURL:
//         'https://uniswap.info/pair/0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
//     },
//     {
//       name: 'DAI',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
//       lpToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
//       yearn: '0x3588566a971fFD3E0bBdA19e16704b49a3010A82',
//     },
//   ],
//   trumpPools: [
//     {
//       name: 'ETH/yDON',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
//       lpToken: '0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
//       yearn: '',
//       uniURL:
//         'https://uniswap.info/pair/0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
//     },
//     {
//       name: 'DAI',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
//       lpToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
//       yearn: '0x76348db6ed0fA79d24D2711a106CFD0178f75Fd0',
//     },
//   ],
// }

// Kovan
// const addresses = {
//   ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
//   bidenErc20: '0x05166e9009ff175ba0555a0dde44af904d8100eb',
//   trumpERC20: '0x3cc1e1fd1c90a79258aa4203599228056ae30a5b',
//   yearnTot: '0xA089e090DC66EaD15f1044E6c7b5C217921592f4',
//   yearnTob: '0x6c8862ED7060660846c86B10aFf756E186FE7761',
//   lpToken: '0x588C7F9f4Ae4AA0bcEc91847BD65F180c718E8F3',
//   bidenPools: [
//     {
//       name: 'ETH/yJOE',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
//       lpToken: '0x05166e9009ff175ba0555a0dde44af904d8100eb',
//       yearn: '0x4113F7C629cCbB3d0f385526593ddFab4bbf1c02',
//       uniURL:
//         'https://uniswap.info/pair/0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
//     },
//     {
//       name: 'DAI',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
//       lpToken: '0x588C7F9f4Ae4AA0bcEc91847BD65F180c718E8F3',
//       yearn: '0x6c8862ED7060660846c86B10aFf756E186FE7761',
//     },
//   ],
//   trumpPools: [
//     {
//       name: 'ETH/yDON',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
//       lpToken: '0x3cc1e1fd1c90a79258aa4203599228056ae30a5b',
//       yearn: '0x0a44488D3EedE00A3693418F3F902ad11158847F',
//       uniURL:
//         'https://uniswap.info/pair/0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
//     },
//     {
//       name: 'DAI',
//       pairLogo:
//         'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
//       lpToken: '0x588C7F9f4Ae4AA0bcEc91847BD65F180c718E8F3',
//       yearn: '0xA089e090DC66EaD15f1044E6c7b5C217921592f4',
//     },
//   ],
// }

const addresses = {
  ceaErc20: '0xc1C0472c0C80bCcDC7F5D01A376Bd97a734B8815',
  bidenErc20: '0x39E7f52ae509A51678b541018bd4811B6AF09feA',
  trumpERC20: '0xc732eA7fFfa34e25573a318bD9c2BC986939F972',
  yearnTot: '0xef3a5E8009AFDC47df4f78Cd9a97122587FAE215',
  yearnTob: '0xa0ACF1eba15491c1848bEc8BEdA46AD34B24e395',
  lpToken: '0x588C7F9f4Ae4AA0bcEc91847BD65F180c718E8F3',
  bidenPools: [
    {
      name: 'ETH/yJOE',
      pairLogo:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
      lpToken: '0x30cb1626b55f2d9e4a58996d4d991cd1200df21a',
      yearn: '0xa0ACF1eba15491c1848bEc8BEdA46AD34B24e395',
      uniURL:
        'https://uniswap.info/pair/0x30cb1626b55f2d9e4a58996d4d991cd1200df21a',
    },
    {
      name: 'DAI',
      pairLogo:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
      lpToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      yearn: '0x3588566a971fFD3E0bBdA19e16704b49a3010A82',
    },
  ],
  trumpPools: [
    {
      name: 'ETH/yDON',
      pairLogo:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
      lpToken: '0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
      yearn: '0xef3a5E8009AFDC47df4f78Cd9a97122587FAE215',
      uniURL:
        'https://uniswap.info/pair/0x1b126b6ff4e6fb6707f6f115ead7aba3fa01866b',
    },
    {
      name: 'DAI',
      pairLogo:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000001876eB1444c986fD502e618c587430/logo.png',
      lpToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      yearn: '0x76348db6ed0fA79d24D2711a106CFD0178f75Fd0',
    },
  ],
}

export default addresses
