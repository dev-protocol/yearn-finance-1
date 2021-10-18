import BigNumber from 'bignumber.js';

// URLS
export const YEARN_API = 'https://api.yearn.tools/';
export const YEARN_VAULTS_API = 'https://api.yearn.finance/v1/chains/1/vaults/all';
export const GAS_PRICE_API = 'https://gasprice.poa.network/';
export const ZAPPER_GAS_PRICE_API = 'https://api.zapper.fi/v1/gas-price?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241';
export const ETHERSCAN_URL = 'https://etherscan.io/';
export const COVER_API = 'https://api.coverprotocol.com/protocol_data/production';
export const COINGECKO_API = 'https://api.coingecko.com/api/v3'
export const ZAPPER_AFFILIATE_ADDRESS = '0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52';

export const LTV_MAXIMIZER_ADDRESS = '0x6AE0b2d7DaEbd40ed5333b1C2C72f09287bcCa84';
export const CREAM_PRICE_ORACLE_ADDRESS = '0xde19f5a7cf029275be9cec538e81aa298e297266';
export const COMPTROLLER_ADDRESS = '0xAB1c342C7bf5Ec5F02ADEA1c2270670bCa144CbB';
export const IRON_BANK_REGISTRY_ADAPTER = '0xFF0bd2d0C7E9424ccB149ED3757155eEf41a793D';
export const CDP_VAULT_ADDRESS = '0xb1cFF81b9305166ff1EFc49A129ad2AfCd7BCf19';
export const CDP_MANAGER_ADDRESS = '0x0e13ab042eC5AB9Fc6F43979406088B9028F66fA';

export const VAULT_MANAGER_KEYDONIX_ASSET = '0x78727A77028d9130D2772713d570780231E64ECf';
export const VAULT_MANAGER_KEEP3R_ASSET = '0x211A6d4D4F49c0C5814451589d6378FdA614Adb9';
export const VAULT_MANAGER_KEEP3R_SUSHI_ASSET = '0x54ba276a62e7e3e76d362f672f00ed31a983067b';

export const KEEP3R_ORACLE_ADDRESS = '0x73353801921417F465377c8d898c6f4C0270282C';
export const KEEP3R_SUSHI_ORACLE_ADDRESS = '0xf67Ab1c914deE06Ba0F264031885Ea7B276a7cDa';
export const KEYDONIX_ORACLE_ADDRESS = '';
export const UNIT_ORACLE_REGISTRY_ADDRESS = '0x10bBe205832edc371781Cc224Ef202CD98e8f38f';
export const VAULT_MANAGER_PARAMETERS_ADDRESS = '0x203153522B9EAef4aE17c6e99851EE7b2F7D312E';
export const VAULT_PARAMETERS_ADDRESS = '0xb46f8cf42e504efe8bef895f848741daa55e9f1d';
export const VAULT_MANAGER_STANDARD = '0x3e7f1d12a7893Ba8eb9478b779b648DA2bD38ae6';
export const COLLATERAL_REGISTRY_ADDRESS = '0x3db39b538db1123389c77f888a213f1a6dd22ef3';

export const FUSD_ADDRESS = 'FUSD_ADDRESS'

// GENERAL
export const ERROR = 'ERROR';
export const STORE_UPDATED = 'STORE_UPDATED';
export const TX_SUBMITTED = 'TX_SUBMITTED';

export const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
export const CONNECT_WALLET = 'CONNECT_WALLET';

export const CONFIGURE = 'CONFIGURE';
export const CONFIGURE_RETURNED = 'CONFIGURE_RETURNED';

export const ACCOUNT_CONFIGURED = 'ACCOUNT_CONFIGURED';
export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED';

export const CONFIGURE_VAULTS = 'CONFIGURE_VAULTS';
export const VAULTS_CONFIGURED = 'VAULTS_CONFIGURED';

export const CONFIGURE_LENDING = 'CONFIGURE_LENDING';
export const LENDING_CONFIGURED = 'LENDING_CONFIGURED';

export const CONFIGURE_COVER = 'CONFIGURE_COVER';
export const COVER_CONFIGURED = 'COVER_CONFIGURED';

export const CONFIGURE_CDP = 'CONFIGURE_CDP';
export const CDP_CONFIGURED = 'CDP_CONFIGURED';

export const GET_GAS_PRICES = 'GET_GAS_PRICES';
export const GAS_PRICES_RETURNED = 'GAS_PRICES_RETURNED';

// VAULTS
export const VAULTS_UPDATED = 'VAULTS_UPDATED';

export const GET_VAULT_BALANCES = 'GET_VAULT_BALANCES';
export const VAULT_BALANCES_RETURNED = 'VAULT_BALANCES_RETURNED';

export const GET_VAULT_PERFORMANCE = 'GET_VAULT_PERFORMANCE';
export const VAULT_PERFORMANCE_RETURNED = 'VAULT_PERFORMANCE_RETURNED';

export const DEPOSIT_VAULT = 'DEPOSIT_VAULT';
export const DEPOSIT_VAULT_RETURNED = 'DEPOSIT_VAULT_RETURNED';
export const DEPOSIT_VAULT_ZAPPER = 'DEPOSIT_VAULT_ZAPPER';
export const UPDATE_DEPOSIT_STATUS = 'UPDATE_DEPOSIT_STATUS';
export const UPDATE_WITHDRAWAL_STATUS = 'UPDATE_WITHDRAWAL_STATUS';
export const ZAPPER_API_URL = 'https://api.zapper.fi/v1';
export const ZAPPER_API_KEY = '96e0cc51-a62e-42ca-acee-910ea7d2a241';
export const ZAPPER_SLIPPAGE_PERCENTAGE = '0.01';

export const APPROVE_VAULT = 'APPROVE_VAULT';
export const APPROVE_VAULT_RETURNED = 'APPROVE_VAULT_RETURNED';

export const WITHDRAW_VAULT = 'WITHDRAW_VAULT';
export const WITHDRAW_VAULT_ZAPPER = 'WITHDRAW_VAULT_ZAPPER';
export const WITHDRAW_VAULT_RETURNED = 'WITHDRAW_VAULT_RETURNED';

export const GET_VAULT_TRANSACTIONS = 'GET_VAULT_TRANSACTIONS';
export const VAULT_TRANSACTIONS_RETURNED = 'VAULT_TRANSACTIONS_RETURNED';

export const CLAIM_VAULT = 'CLAIM_VAULT';
export const CLAIM_VAULT_RETURNED = 'CLAIM_VAULT_RETURNED';

// ACCOUNT
export const GET_ACCOUNT_BALANCES = 'GET_ACCOUNT_BALANCES';
export const ACCOUNT_BALANCES_RETURNED = 'ACCOUNT_BALANCES_RETURNED';

//COVER
export const COVER_UPDATED = 'COVER_UPDATED';

export const GET_COVER_BALANCES = 'GET_COVER_BALANCES';
export const COVER_BALANCES_RETURNED = 'COVER_BALANCES_RETURNED';

export const APPROVE_COVER = 'APPROVE_COVER';
export const APPROVE_COVER_RETURNED = 'APPROVE_COVER_RETURNED';

export const BUY_COVER = 'BUY_COVER';
export const BUY_COVER_RETURNED = 'BUY_COVER_RETURNED';

export const SELL_COVER = 'SELL_COVER';
export const SELL_COVER_RETURNED = 'SELL_COVER_RETURNED';

//LEND
export const LEND_UPDATED = 'LEND_UPDATED';

export const GET_LENDING_BALANCES = 'GET_LENDING_BALANCES';
export const LENDING_BALANCES_RETURNED = 'LENDING_BALANCES_RETURNED';

export const APPROVE_LEND = 'APPROVE_LEND';
export const APPROVE_LEND_RETURNED = 'APPROVE_LEND_RETURNED';

export const LENDING_SUPPLY_RETURNED = 'LENDING_SUPPLY_RETURNED';
export const LENDING_BORROW_RETURNED = 'LENDING_BORROW_RETURNED';
export const LENDING_REPAY_RETURNED = 'LENDING_REPAY_RETURNED';

export const DEPOSIT_LEND = 'DEPOSIT_LEND';
export const DEPOSIT_LEND_RETURNED = 'DEPOSIT_LEND_RETURNED';

export const WITHDRAW_LEND = 'WITHDRAW_LEND';
export const WITHDRAW_LEND_RETURNED = 'WITHDRAW_LEND_RETURNED';

export const BORROW_LEND = 'BORROW_LEND';
export const BORROW_LEND_RETURNED = 'BORROW_LEND_RETURNED';

export const REPAY_LEND = 'REPAY_LEND';
export const REPAY_LEND_RETURNED = 'REPAY_LEND_RETURNED';

export const ENABLE_COLLATERAL_LEND = 'ENABLE_COLLATERAL_LEND';
export const ENABLE_COLLATERAL_LEND_RETURNED = 'ENABLE_COLLATERAL_LEND_RETURNED';

export const DISABLE_COLLATERAL_LEND = 'DISABLE_COLLATERAL_LEND';
export const DISABLE_COLLATERAL_LEND_RETURNED = 'DISABLE_COLLATERAL_LEND_RETURNED';

//CDP
export const CDP_UPDATED = 'CDP_UPDATED';

export const GET_CDP_BALANCES = 'GET_CDP_BALANCES';
export const CDP_BALANCES_RETURNED = 'CDP_BALANCES_RETURNED';

export const DEPOSIT_BORROW_CDP = 'CDP_DEPOSIT_BORROW';
export const DEPOSIT_BORROW_CDP_RETURNED = 'CDP_DEPOSIT_BORROW_RETURNED';

export const WITHDRAW_REPAY_CDP = 'CDP_WITHDRAW_REPAY';
export const WITHDRAW_REPAY_CDP_RETURNED = 'CDP_WITHDRAW_REPAY_RETURNED';

//LTV
export const GET_MAX = 'GET_MAX';
export const MAX_RETURNED = 'MAX_RETURNED';

export const APPROVE_CDP = 'APPROVE_CDP';
export const APPROVE_CDP_RETURNED = 'APPROVE_CDP_RETURNED';

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0);

export const YVBOOST_VAULT = '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a';

export const SYSTEM_UPDATED = 'SYSTEM_UPDATED';

//FUSD
export const FUSD_UPDATED = 'FUSD_UPDATED';

export const CONFIGURE_FUSD = 'CONFIGURE_FUSD';
export const FUSD_CONFIGURED = 'FUSD_CONFIGURED';

export const GET_FUSD_BALANCES = 'GET_FUSD_BALANCES';
export const FUSD_BALANCES_RETURNED = 'FUSD_BALANCES_RETURNED';

export const APPROVE_FUSD = 'APPROVE_FUSD'
export const FUSD_APPROVED = 'FUSD_APPROVED'

export const MINT_FUSD = 'MINT_FUSD'
export const FUSD_MINTED = 'FUSD_MINTED'

export const BURN_FUSD = 'BURN_FUSD'
export const FUSD_BURNT = 'FUSD_BURNT'
