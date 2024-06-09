export type HamsterKombatUpgrade = {
  name: string;
  tab: 'Markets' | 'PR&Team' | 'Legal' | 'Specials' | '';
  count: string;
  total: string;
};

export const HAMSTER_KOMBAT_UPGRADES: Pick<HamsterKombatUpgrade, 'name' | 'tab'>[] = [
  {
    name: 'Fan tokens',
    tab: 'Markets',
  },
  {
    name: 'Staking',
    tab: 'Markets',
  },
  {
    name: 'BTC pairs',
    tab: 'Markets',
  },
  {
    name: 'ETH pairs',
    tab: 'Markets',
  },
  {
    name: 'Top 10 cmc pairs',
    tab: 'Markets',
  },
  {
    name: 'GameFi tokens',
    tab: 'Markets',
  },
  {
    name: 'Defi2.0 tokens',
    tab: 'Markets',
  },
  {
    name: 'SocialFi tokens',
    tab: 'Markets',
  },
  {
    name: 'Meme coins',
    tab: 'Markets',
  },
  {
    name: 'Shit coins',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x10',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x20',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x30',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x50',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x75',
    tab: 'Markets',
  },
  {
    name: 'Margin trading x100',
    tab: 'Markets',
  },
  {
    name: 'Derivatives',
    tab: 'Markets',
  },
  {
    name: 'Prediction markets',
    tab: 'Markets',
  },
  {
    name: 'Web3 integrations',
    tab: 'Markets',
  },
  {
    name: 'DAO',
    tab: 'Markets',
  },
  {
    name: 'P2P trading',
    tab: 'Markets',
  },
  {
    name: 'Trading bots',
    tab: 'Markets',
  },

  {
    name: 'Support team',
    tab: 'PR&Team',
  },
  {
    name: 'HamsterBook',
    tab: 'PR&Team',
  },
  {
    name: 'X',
    tab: 'PR&Team',
  },
  {
    name: 'Cointelegraph',
    tab: 'PR&Team',
  },
  {
    name: 'HamsterTube',
    tab: 'PR&Team',
  },
  {
    name: 'HamsterGram',
    tab: 'PR&Team',
  },
  {
    name: 'TikTok',
    tab: 'PR&Team',
  },
  {
    name: 'Coindesk',
    tab: 'PR&Team',
  },
  {
    name: 'Influencers',
    tab: 'PR&Team',
  },
  {
    name: 'CEO',
    tab: 'PR&Team',
  },
  {
    name: 'IT team',
    tab: 'PR&Team',
  },
  {
    name: 'Marketing',
    tab: 'PR&Team',
  },
  {
    name: 'Partnership program',
    tab: 'PR&Team',
  },
  {
    name: 'Product team',
    tab: 'PR&Team',
  },
  {
    name: 'BisDev team',
    tab: 'PR&Team',
  },
  {
    name: 'Two factor authentication',
    tab: 'PR&Team',
  },
  {
    name: 'UX and UI team',
    tab: 'PR&Team',
  },
  {
    name: 'Security team',
    tab: 'PR&Team',
  },
  {
    name: 'QA team',
    tab: 'PR&Team',
  },
  {
    name: 'Antihacking shield',
    tab: 'PR&Team',
  },
  {
    name: 'Risk managment team',
    tab: 'PR&Team',
  },
  {
    name: 'Security Audition',
    tab: 'PR&Team',
  },
  {
    name: 'Anonymous transactions ban',
    tab: 'PR&Team',
  },
  {
    name: 'Blocking suspicious accounts',
    tab: 'PR&Team',
  },
  {
    name: 'Tokenomics expert',
    tab: 'PR&Team',
  },
  {
    name: 'Consensys Explorer pass',
    tab: 'PR&Team',
  },
  {
    name: 'VC Labs',
    tab: 'PR&Team',
  },
  {
    name: 'Compliance officer',
    tab: 'PR&Team',
  },
  {
    name: 'Welcome to Amsterdam',
    tab: 'PR&Team',
  },

  {
    name: 'KYC',
    tab: 'Legal',
  },
  {
    name: 'KYB',
    tab: 'Legal',
  },
  {
    name: 'Legal opinion',
    tab: 'Legal',
  },
  {
    name: 'SEC transparancy',
    tab: 'Legal',
  },
  {
    name: 'Anti money loundering',
    tab: 'Legal',
  },
  {
    name: 'License UAE',
    tab: 'Legal',
  },
  {
    name: 'License Europe',
    tab: 'Legal',
  },
  {
    name: 'License Asia',
    tab: 'Legal',
  },
  {
    name: 'License South America',
    tab: 'Legal',
  },
  {
    name: 'License Australia',
    tab: 'Legal',
  },
  {
    name: 'License North America',
    tab: 'Legal',
  },
  {
    name: 'License Nigeria',
    tab: 'Legal',
  },
  {
    name: 'License Japan',
    tab: 'Legal',
  },
  {
    name: 'License Ethiopia',
    tab: 'Legal',
  },

  {
    name: 'Hamster Kombat merch',
    tab: 'Specials',
  },
  {
    name: 'TON + Hamster Kombat = Success',
    tab: 'Specials',
  },
  {
    name: 'Consensus Piranha Pass',
    tab: 'Specials',
  },
  {
    name: 'Web3 academy launch',
    tab: 'Specials',
  },
  {
    name: 'Youtube Gold Button',
    tab: 'Specials',
  },
  {
    name: 'Hamster Youtube Channel',
    tab: 'Specials',
  },
  {
    name: 'Hamster daily show',
    tab: 'Specials',
  },
  {
    name: 'Bitcoin Pizza Day',
    tab: 'Specials',
  },
  {
    name: 'Top 10 Global Ranking',
    tab: 'Specials',
  },
  {
    name: 'Hamster AI',
    tab: 'Specials',
  },
  {
    name: 'Venom Blockchain',
    tab: 'Specials',
  },
  {
    name: 'Ad contract with a football club',
    tab: 'Specials',
  },
  {
    name: 'Special Hamster Conference',
    tab: 'Specials',
  },
  {
    name: 'There are two chairs...',
    tab: 'Specials',
  },
  {
    name: 'Apps Center Listing',
    tab: 'Specials',
  },
  {
    name: 'Bogdanoff is calling',
    tab: 'Specials',
  },
  {
    name: 'NFT Collection Launch',
    tab: 'Specials',
  },
  {
    name: 'Short squeeze',
    tab: 'Specials',
  },
  {
    name: 'Long squeeze',
    tab: 'Specials',
  },
  {
    name: 'Villa for the DEV team',
    tab: 'Specials',
  },
  {
    name: 'USDT on TON',
    tab: 'Specials',
  },
  {
    name: '21 000 000 CEOs',
    tab: 'Specials',
  },
];

export function useHamsterKombat() {}

