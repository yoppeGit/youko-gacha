// サイゼリヤの代表的なメニューデータ（価格・カロリー）
const menuData = [
    { name: "ミラノ風ドリア", price: 300, calorie: 521 },
    { name: "タラコソースシシリー風", price: 400, calorie: 554 },
    { name: "カルボナーラ", price: 500, calorie: 735 },
    { name: "マルゲリータピザ", price: 400, calorie: 574 },
    { name: "辛味チキン", price: 300, calorie: 295 },
    { name: "ポップコーンシュリンプ", price: 300, calorie: 215 },
    { name: "エスカルゴのオーブン焼き", price: 400, calorie: 220 },
    { name: "小エビのサラダ", price: 350, calorie: 124 },
    { name: "チキンサラダ", price: 350, calorie: 224 },
    { name: "プチフォッカ", price: 150, calorie: 107 },
    { name: "カリッとポテト", price: 250, calorie: 375 },
    { name: "コーンクリームスープ", price: 150, calorie: 141 },
    { name: "イタリアンジェラート", price: 250, calorie: 122 },
    { name: "ティラミスクラシコ", price: 300, calorie: 229 },
    { name: "セットドリンクバー", price: 200, calorie: 0 },
    { name: "グラスワイン(赤)", price: 100, calorie: 82 },
    { name: "グラスワイン(白)", price: 100, calorie: 82 }
];

document.getElementById('gacha-btn').addEventListener('click', () => {
    // 画面から設定値を取得
    const budgetType = document.getElementById('budget-type').value; // "max" または "min"
    const inputBudget = parseInt(document.getElementById('budget-amount').value, 10) || 1000;

    let totalPrice = 0;
    let totalCalories = 0;
    const selectedItems = [];

    // メニューデータの最低価格を取得（終了判定用）
    const minMenuPrice = Math.min(...menuData.map(m => m.price));

    if (budgetType === "max") {
        // 【最高（〜円以内）】のロジック
        for (let i = 0; i < 50; i++) {
            const randomMenu = menuData[Math.floor(Math.random() * menuData.length)];
            if (totalPrice + randomMenu.price <= inputBudget) {
                selectedItems.push(randomMenu);
                totalPrice += randomMenu.price;
                totalCalories += randomMenu.calorie;
            }
            if (inputBudget - totalPrice < minMenuPrice) {
                break; // これ以上どのメニューも入らなくなったら終了
            }
        }
    } else {
        // 【最低（〜円以上）】のロジック
        // 設定金額を超えるまで、または上限試行回数に達するまでランダムに追加
        for (let i = 0; i < 50; i++) {
            if (totalPrice >= inputBudget) {
                break; // 最低金額を超えたら終了
            }
            const randomMenu = menuData[Math.floor(Math.random() * menuData.length)];
            selectedItems.push(randomMenu);
            totalPrice += randomMenu.price;
            totalCalories += randomMenu.calorie;
        }
    }

    // 画面に結果を表示する処理
    const menuListElem = document.getElementById('menu-list');
    menuListElem.innerHTML = ''; 

    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `<span>${item.name}</span><span>${item.price}円</span>`;
        menuListElem.appendChild(li);
    });

    // 計算結果のテキスト作成
    let diffText = "";
    if (budgetType === "max") {
        diffText = `お釣り: ${inputBudget - totalPrice}円`;
    } else {
        diffText = totalPrice >= inputBudget ? `目標を ${totalPrice - inputBudget}円 超過` : `目標に届かず`;
    }

    // 各項目を画面に反映
    document.getElementById('total-price').textContent = `${totalPrice}円`;
    document.getElementById('change-price').textContent = diffText;
    document.getElementById('total-calories').textContent = `${totalCalories} kcal`;

    // 結果エリアを表示
    document.getElementById('result-area').style.display = 'block';
});
