
document.getElementById('dashboard').innerHTML = `
  <h2>Crypto Learning Tiers</h2>
  <div><h3>Beginner</h3><p>Wallets, exchanges, basics.</p></div>
  <div><h3>Intermediate</h3><p>Trading, DeFi, strategies.</p></div>
  <div><h3>Advanced</h3><p>Smart contracts, staking, analysis.</p></div>
  <h2>Market Prices (Placeholder)</h2>
  <p>BTC: $XX,XXX | ETH: $X,XXX | USDT: $1.00</p>
`;
// Future: fetch('https://api.coingecko.com/api/v3/simple/price?...')
