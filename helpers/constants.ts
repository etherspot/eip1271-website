const REDIRECT = {
	SHARE_WITH_FRIENDS: `https://twitter.com/intent/tweet?text=Together%2C%20let's%20help%20bring%20the%20world%20one%20step%20closer%20to%20a%20more%20open%20and%20accessible%20decentralized%20future.%20%23accountabstraction%20%23EIP1271&url=https%3A%2F%2Feip1271.io%2F%23`,
	ASK_TO_ADD: (twitterHandle: string) =>
		`https://twitter.com/intent/tweet?text=Hey%20@${twitterHandle?.replace(
			"https://twitter.com/",
			"",
		)}%20team%2C%20it's%20time%20to%20upgrade%20the%20%23UX%20in%20%23Web3%20to%20the%20next%20level.%20Let's%20make%20it%20happen%20by%20incorporating%20support%20for%20%23EIP1271.%20Your%20users%20will%20be%20thrilled%20with%20this%20%23accountabstraction%20upgrade!%20&url=https%3A%2F%2Feip1271.io`,
	SUBMIT_PROJECT: "https://github.com/etherspot/eip1271-website",
	ETHERSPOT: "https://etherspot.io/",
	PILLAR: "https://pillar.fi/",
	ASK_ON_DISCORD: "https://discord.etherspot.io/",
	ETHERSPOT_EIP1271_MODULE: "https://github.com/etherspot/eip1271-verification-util/",
	SIGNATURE_VALIDATOR: "https://github.com/AmbireTech/signature-validator/",
	VITALIK_TWEET: "https://twitter.com/VitalikButerin/status/1576267880542633984",
};

export default REDIRECT;
