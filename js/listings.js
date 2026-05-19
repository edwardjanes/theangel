// ============================================
// LISTINGS PAGE - ASSETS & FILTERING
// ============================================

const assetsData = [
    {
        id: 1,
        name: 'TechVenture AI',
        symbol: 'TECH.AI',
        price: 12.45,
        change: 8.7,
        volume: '2.4M',
        category: 'technology',
        marketCap: '$156M',
        raised: '$4.2M'
    },
    {
        id: 2,
        name: 'HealthFlow',
        symbol: 'HEALTH.FL',
        price: 5.60,
        change: 3.2,
        volume: '890K',
        category: 'healthcare',
        marketCap: '$89M',
        raised: '$2.1M'
    },
    {
        id: 3,
        name: 'GreenEnergy Co',
        symbol: 'GREEN.EN',
        price: 8.92,
        change: -1.5,
        volume: '310K',
        category: 'sustainability',
        marketCap: '$112M',
        raised: '$3.5M'
    },
    {
        id: 4,
        name: 'PayFlow Systems',
        symbol: 'PAY.FLOW',
        price: 15.33,
        change: 12.4,
        volume: '780K',
        category: 'fintech',
        marketCap: '$205M',
        raised: '$5.8M'
    },
    {
        id: 5,
        name: 'ShopEase',
        symbol: 'SHOP.ES',
        price: 7.20,
        change: 5.1,
        volume: '420K',
        category: 'ecommerce',
        marketCap: '$95M',
        raised: '$2.7M'
    },
    {
        id: 6,
        name: 'CloudData Pro',
        symbol: 'CLOUD.PR',
        price: 18.50,
        change: 11.2,
        volume: '556K',
        category: 'technology',
        marketCap: '$278M',
        raised: '$6.5M'
    },
    {
        id: 7,
        name: 'BioMed Solutions',
        symbol: 'BIO.MED',
        price: 22.15,
        change: 15.8,
        volume: '234K',
        category: 'healthcare',
        marketCap: '$334M',
        raised: '$8.2M'
    },
    {
        id: 8,
        name: 'BuildHub Real Estate',
        symbol: 'BUILD.RE',
        price: 11.30,
        change: 2.3,
        volume: '180K',
        category: 'real-estate',
        marketCap: '$170M',
        raised: '$4.5M'
    },
    {
        id: 9,
        name: 'EcoTech Solutions',
        symbol: 'ECO.TECH',
        price: 9.75,
        change: 7.2,
        volume: '340K',
        category: 'sustainability',
        marketCap: '$146M',
        raised: '$3.8M'
    },
    {
        id: 10,
        name: 'SecureVault',
        symbol: 'SECURE.VT',
        price: 19.80,
        change: 9.5,
        volume: '425K',
        category: 'fintech',
        marketCap: '$297M',
        raised: '$7.1M'
    }
];

let filteredAssets = [...assetsData];

document.addEventListener('DOMContentLoaded', function() {
    renderAssets();
    initializeFilters();
    initializeSorting();
});

// ============================================
// RENDER ASSETS GRID
// ============================================

function renderAssets() {
    const grid = document.getElementById('assets-grid');
    
    if (filteredAssets.length === 0) {
        grid.innerHTML = '<div class="no-results"><h3>No assets found</h3><p>Try adjusting your filters</p></div>';
        return;
    }

    grid.innerHTML = filteredAssets.map(asset => `
        <div class="asset-card">
            <div class="asset-header">
                <div class="asset-name">${asset.name}</div>
                <div class="asset-symbol">${asset.symbol}</div>
            </div>
            <div class="asset-body">
                <div class="asset-price-row">
                    <div class="asset-price">$${asset.price.toFixed(2)}</div>
                    <div class="asset-change ${asset.change >= 0 ? 'positive' : 'negative'}">
                        ${asset.change >= 0 ? '+' : ''}${asset.change.toFixed(1)}%
                    </div>
                </div>
                <div class="asset-stats">
                    <div class="stat-item">
                        <div class="stat-label">Market Cap</div>
                        <div class="stat-value">${asset.marketCap}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Volume</div>
                        <div class="stat-value">${asset.volume}</div>
                    </div>
                </div>
                <div class="asset-footer">
                    <button class="btn-view">View</button>
                    <button class="btn-invest">Invest</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to buttons
    document.querySelectorAll('.btn-invest').forEach(btn => {
        btn.addEventListener('click', function() {
            openModal('signup-modal');
        });
    });

    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Asset details coming soon!');
        });
    });
}

// ============================================
// INITIALIZE FILTERS
// ============================================

function initializeFilters() {
    const applyBtn = document.getElementById('apply-filters');
    const resetBtn = document.getElementById('reset-filters');

    applyBtn.addEventListener('click', applyFilters);
    resetBtn.addEventListener('click', resetFilters);

    // Real-time search
    document.getElementById('search').addEventListener('input', applyFilters);
}

function applyFilters() {
    const search = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category').value;
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    filteredAssets = assetsData.filter(asset => {
        const matchesSearch = asset.name.toLowerCase().includes(search) || 
                            asset.symbol.toLowerCase().includes(search);
        const matchesCategory = !category || asset.category === category;
        const matchesPrice = asset.price >= minPrice && asset.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Apply current sort
    const sortValue = document.getElementById('sort').value;
    sortAssets(sortValue);
    renderAssets();
}

function resetFilters() {
    document.getElementById('search').value = '';
    document.getElementById('category').value = '';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.getElementById('sort').value = 'name';

    filteredAssets = [...assetsData];
    sortAssets('name');
    renderAssets();
}

// ============================================
// SORTING
// ============================================

function initializeSorting() {
    document.getElementById('sort').addEventListener('change', function(e) {
        sortAssets(e.target.value);
        renderAssets();
    });
}

function sortAssets(sortBy) {
    switch(sortBy) {
        case 'name':
            filteredAssets.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredAssets.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredAssets.sort((a, b) => b.price - a.price);
            break;
        case 'change-high':
            filteredAssets.sort((a, b) => b.change - a.change);
            break;
        case 'change-low':
            filteredAssets.sort((a, b) => a.change - b.change);
            break;
    }
}
