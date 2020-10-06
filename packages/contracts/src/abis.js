import erc20Abi from "./abis/erc20.json";
import ownableAbi from "./abis/ownable.json";
import bidenAbi from "./abis/Biden.json";
import yearnAbi from "./abis/yearn.json";
import uniswapPairAbi from "./abis/uniswapv2pair.json";

const abis = {
  erc20: erc20Abi,
  mintableErc20: bidenAbi,
  yearn: yearnAbi,
  ownable: ownableAbi,
  uniswapPair: uniswapPairAbi,
};

export default abis;
