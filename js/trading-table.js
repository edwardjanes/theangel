// ============================================
// TRADING TABLE - ASSET DATA & INTERACTIONS
// ============================================

const assetData = [
    {
        symbol: 'ANGEL',
        name: 'TheAngel Token',
        price: 1.31,
        change: 5.2,
        volume: '2.4M'
    },
    {
        symbol: 'EJABY',
        name: 'EJABY Token',
        price: 0.79,
        change: -2.1,
        volume: '890K'
    },
    {
        symbol: 'TECH01',
        name: 'Tech Startup Fund',
        price: 12.45,
        change: 8.7,
        volume: '156K'
    },
    {
        symbol: 'HEALTH02',
        name: 'Health Tech Fund',
        price: 5.60,
        change: 3.2,
        volume: '420K'
    },
    {
        symbol: 'GREEN03',
        name: 'Green Energy Fund',
        price: 8.92,
        change: -1.5,
        volume: '310K'
    },
    {
        symbol: 'AI04',
        name: 'AI Innovation Fund',
        price: 15.33,
        change: 12.4,
        volume: '780K'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    populateTradingTable();
    initializeTradingButtons();
});

// ============================================
// POPULATE TRADING TABLE
// ============================================

function populateTradingTable() {
    const tableBody = document.getElementById('trading-body');
    if (!tableBody) return;

    tableBody.innerHTML = assetData.map(asset => `
        <tr>
            <td>
                <div class="asset-name">${asset.name}</div>
                <div style="font-size: 0.85rem; color: #999;">${asset.symbol}</div>
            </td>
            <td>
                <div class="price">$${asset.price.toFixed(2)}</div>
            </td>
            <td>
                <div class="${asset.change >= 0 ? 'change-positive' : 'change-negative'}">
                    ${asset.change >= 0 ? '+' : ''}${asset.change.toFixed(1)}%
                </div>
            </td>
            <td>
                <div class="volume">${asset.volume}</div>
            </td>
            <td>
                <button class="btn-trade" data-symbol="${asset.symbol}">Trade</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// TRADING BUTTON INTERACTIONS
// ============================================

function initializeTradingButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-trade')) {
            const symbol = e.target.dataset.symbol;
            handleTradeClick(symbol);
        }
    });
}

function handleTradeClick(symbol) {
    const asset = assetData.find(a => a.symbol === symbol);
    if (asset) {
        console.log('Trade clicked for:', symbol);
        // Open sign in modal if not logged in
        openModal('signin-modal');
        // In a real app, you would redirect to trading interface
    }
}

// ============================================
// UPDATE ASSET PRICES (SIMULATION)
// ============================================

// Optional: Simulate price updates
function simulatePriceUpdates() {
    setInterval(() => {
        assetData.forEach(asset => {
            // Random price change between -2% and +2%
            const change = (Math.random() - 0.5) * 4;
            asset.price = Math.max(asset.price + (asset.price * change / 100), 0.01);
        });
        populateTradingTable();
    }, 30000); // Update every 30 seconds
}

// Uncomment to enable price updates
// simulatePriceUpdates();

// ============================================
// EXPORT FOR OTHER MODULES
// ============================================

window.assetData = assetData;
window.handleTradeClick = handleTradeClick;
