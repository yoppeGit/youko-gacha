// メニューデータ
const menuData = [
  {name: '1hチャージ', chargeHour: 1, shishaOption: 0, leastOneOrder: 1, normalMenu: 1, eventMenu: 1, price: 1000},
  {name: '推し活セット', chargeHour: 1, shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 2400},
  {name: '2hシーシャセット', chargeHour: 2, shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 4400},
  {name: 'シーシャshort8g(目安1h)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1500},
  {name: 'シーシャmiddum10g(目安1.5h)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 2000},
  {name: 'シーシャlarge12g(目安2h)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 2500},
  {name: 'アイスホース', chargeHour: '', shishaOption: 1, leastOneOrder: 0, normalMenu: 0, eventMenu: 0, price: 550},
  {name: '指名シーシャ', chargeHour: '', shishaOption: 1, leastOneOrder: 0, normalMenu: 0, eventMenu: 0, price: 300},
  {name: 'ソフトドリンク', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 600},
  {name: 'アルコールドリンク', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 800},
  {name: 'チャーハン', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1200},
  {name: 'ゴマ団子(3個)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1200},
  {name: '唐揚げ(5個)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1200},
  {name: 'キャストオリカク/ドリンク', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1200},
  {name: 'キャストショット', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1800},
  {name: 'キャストフード(チャーハン)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1800},
  {name: 'キャストフード(ゴマ団子)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1800},
  {name: 'キャストフード(唐揚げ)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1800},
  {name: 'チェキ落書き無', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1000},
  {name: 'チェキ落書き有', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 1300},
  {name: 'チップ5枚', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 2400},
  {name: 'チップ10枚', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 4400},
  {name: '[ノンアルシャンパン]シャンメリー(通常時)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 0, price: 3600},
  {name: '[ノンアルシャンパン]シャンメリー(イベント時)', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 0, eventMenu: 1, price: 4800},
  {name: '[ノンアルシャンパン]モーブ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 6000},
  {name: '[ノンアルシャンパン]デュック', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 12000},
  {name: '[ノンアルシャンパン]シャルドネ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 24000},
  {name: '[ノンアルシャンパン]オリシャンシルバー', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 36000},
  {name: '[ノンアルシャンパン]オリシャンゴールド', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 60000},
  {name: '[ノンアルシャンパン]オリシャンブラック', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 96000},
  {name: '[アルコールシャンパン]リステル', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 12000},
  {name: '[アルコールシャンパン]マバム', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 24000},
  {name: '[アルコールシャンパン]モエN.I.R', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 60000},
  {name: '[アルコールシャンパン]ドンペリ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 180000},
  {name: '[アルコールシャンパン]アルマンド', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 300000},
  {name: '[飾りボトル]フィリコ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 120000},
  {name: '[飾りボトル]キャラフィリコ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 216000},
  {name: '[飾りボトル]シンデレラ', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 30000},
  {name: '[飾りボトル]エンジェル', chargeHour: '', shishaOption: 0, leastOneOrder: 0, normalMenu: 1, eventMenu: 1, price: 240000}
];

// 滞在時間にぴったりのチャージ/セット構成をランダム選択する関数
function getRandomChargeItems(targetHours) {
  const chargeMenus = menuData.filter(m => typeof m.chargeHour === 'number' && m.chargeHour > 0);
  
  function findCombination(remainingHours) {
    if (remainingHours === 0) return [];
    const validMenus = chargeMenus.filter(m => m.chargeHour <= remainingHours);
    if (validMenus.length === 0) return null;
    
    const shuffled = [...validMenus].sort(() => Math.random() - 0.5);
    for (const menu of shuffled) {
      const res = findCombination(remainingHours - menu.chargeHour);
      if (res !== null) {
        return [menu, ...res];
      }
    }
    return null;
  }
  
  return findCombination(targetHours) || [];
}

// 【修正】指定された滞在時間を満たすために絶対に必要な最小金額を正しく計算する関数
function calcMinRequiredBudget(stayHours) {
  const chargeMenus = menuData.filter(m => typeof m.chargeHour === 'number' && m.chargeHour > 0);
  const minOneOrderPrice = Math.min(...menuData.filter(m => m.leastOneOrder === 1).map(m => m.price));

  // 滞在時間を満たすチャージメニューの最小金額の組み合わせを探索
  function findMinPriceCombination(remainingHours) {
    if (remainingHours === 0) return 0;
    let minCost = Infinity;
    
    for (const menu of chargeMenus) {
      if (menu.chargeHour <= remainingHours) {
        const subCost = findMinPriceCombination(remainingHours - menu.chargeHour);
        if (subCost !== Infinity) {
          minCost = Math.min(minCost, menu.price + subCost);
        }
      }
    }
    return minCost;
  }

  const minChargeTotal = findMinPriceCombination(stayHours);
  if (minChargeTotal === Infinity) return stayHours * 1000 + minOneOrderPrice;

  // 「1hチャージ」が含まれている個数分、必須ワンオーダー（ソフトドリンク等）の最安値が加算される仕組みを考慮
  const initialItems = getRandomChargeItems(stayHours);
  const oneOrderCount = initialItems.filter(m => m.leastOneOrder === 1).length;

  return minChargeTotal + (oneOrderCount * minOneOrderPrice);
}

// シーシャがすでに頼まれているか確認
function hasShishaOrder(items) {
  return items.some(item => item.name.includes('シーシャ') || item.shishaOption === 1);
}

document.getElementById('gacha-btn').addEventListener('click', () => {
    const budgetType = document.getElementById('budget-type').value;
    const inputBudget = parseInt(document.getElementById('budget-amount').value, 10) || 0;
    const stayHours = parseInt(document.getElementById('stay-hours').value, 10) || 1;
    
    const minRequiredBudget = calcMinRequiredBudget(stayHours);
    const resultContentElem = document.getElementById('result-content');
    
    // 【仕様B】予算不足判定
    if (budgetType === "max" && inputBudget < minRequiredBudget) {
        resultContentElem.innerHTML = `
            <div class="error-container">
                <p class="error-title">帰れ</p>
                <p class="error-subtitle">最低でも${minRequiredBudget}円は必要です。ATM行ってきてください。</p>
            </div>
        `;
        document.getElementById('result-area').style.display = 'block';
        return;
    }

    let selectedItems = [];
    let totalPrice = 0;

    // 【仕様A】滞在時間に合わせたチャージメニュー選定
    const initialChargeItems = getRandomChargeItems(stayHours);
    initialChargeItems.forEach(item => {
        selectedItems.push(item);
        totalPrice += item.price;
    });

    if (budgetType === "max" && totalPrice > inputBudget) {
        resultContentElem.innerHTML = `
            <div class="error-container">
                <p class="error-title">帰れ</p>
                <p class="error-subtitle">最低でも${totalPrice}円は必要です。ATM行ってきてください。</p>
            </div>
        `;
        document.getElementById('result-area').style.display = 'block';
        return;
    }

    // 追加抽選ループ
    const maxAttempts = 100;
    for (let i = 0; i < maxAttempts; i++) {
        const isShishaOrdered = hasShishaOrder(selectedItems);
        const availableMenus = menuData.filter(m => {
            if (m.shishaOption === 1 && !isShishaOrdered) return false;
            return true;
        });

        if (budgetType === "max") {
            const selectable = availableMenus.filter(m => totalPrice + m.price <= inputBudget);
            if (selectable.length === 0) break;
            
            const randomMenu = selectable[Math.floor(Math.random() * selectable.length)];
            selectedItems.push(randomMenu);
            totalPrice += randomMenu.price;
        } else {
            if (totalPrice >= inputBudget) break;
            
            const randomMenu = availableMenus[Math.floor(Math.random() * availableMenus.length)];
            selectedItems.push(randomMenu);
            totalPrice += randomMenu.price;
        }
    }

    // 【仕様D】同じメニューをまとめて集計
    const groupedMap = new Map();
    selectedItems.forEach(item => {
        if (groupedMap.has(item.name)) {
            const existing = groupedMap.get(item.name);
            existing.count += 1;
            existing.subtotal += item.price;
        } else {
            groupedMap.set(item.name, {
                name: item.name,
                price: item.price,
                count: 1,
                subtotal: item.price
            });
        }
    });

    let diffText = "";
    if (budgetType === "max") {
        diffText = `お釣り: ${inputBudget - totalPrice}円`;
    } else {
        diffText = totalPrice >= inputBudget ? `目標を ${totalPrice - inputBudget}円 超過` : `目標に届かず`;
    }

    let menuListHTML = Array.from(groupedMap.values()).map(item => `
        <li class="menu-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}円</span>
            <span class="item-count">× ${item.count}</span>
            <span class="item-subtotal">${item.subtotal}円</span>
        </li>
    `).join('');

    resultContentElem.innerHTML = `
        <div class="total-container">
            <div class="total-row">
                <span>合計金額:</span>
                <span class="final-total">${totalPrice}円</span>
            </div>
            <div class="total-row" style="font-size: 13px; color: #666;">
                <span>差額（またはお釣り）:</span>
                <span>${diffText}</span>
            </div>
        </div>
        <p>ーーー 明細 ーーー</p>
        <div class="menu-header">
            <span class="item-name">メニュー名</span>
            <span class="item-price">単価</span>
            <span class="item-count">点数</span>
            <span class="item-subtotal">小計</span>
        </div>
        <ul class="menu-list">
            ${menuListHTML}
        </ul>
    `;

    document.getElementById('result-area').style.display = 'block';
});