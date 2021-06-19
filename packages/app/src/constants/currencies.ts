export const Currencies = {
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x0000000000000000000000000000000000000000",
    decimals: 18,
    active: true,
    gasCurrency: true,
  },
  SUSD: {
    name: "Fake",
    symbol: "SUSD",
    address: process.env.REACT_APP_FK_TOKEN_ADDRESS || "",
    decimals: 18,
    active: true,
  },
};