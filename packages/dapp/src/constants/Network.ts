export enum ChainId {
    mainnet = 1,
    ropsten = 3,
    rinkeby = 4,
    goerli = 5,
    kovan = 42,
}

export type NetworkConfig = {
    name: string;
    explorerLink: string;
};

export const networkConfigs: Record<string, NetworkConfig> = {
    [ChainId.mainnet]: {
        name: 'Ethereum',
        explorerLink: 'https://etherscan.io',
    },
    [ChainId.ropsten]: {
        name: 'Ethereum ropsten',
        explorerLink: 'https://etherscan.io',
    },
    [ChainId.rinkeby]: {
        name: 'Ethereum Rinkeby',
        explorerLink: 'https://rinkeby.etherscan.io',
    },
    [ChainId.goerli]: {
        name: 'Ethereum Görli',
        explorerLink: 'https://goerli.etherscan.io',
    },
    [ChainId.kovan]: {
        name: 'Ethereum kovan',
        explorerLink: 'https://kovan.etherscan.io',
    },
}

export const ActiveNetwork: ChainId = ChainId.goerli;

export const ETH_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const ETH_NAME = "Ethereum ETH";
export const ETH_SYMBOL = "ETH";
