# Amimono Counter (あみものカウンター)

Next.js 製のシンプルな編み物カウンターアプリです。
「段」と「目」を切り替えながら、+ / – ボタンでカウントアップ・ダウンできます。
ローカルにデータを保存するため、ページを閉じても進捗を保持します。

---

##  主な機能

- 🧵 「段」と「目」のカウント切り替え
- ➕➖ ボタンによるカウントアップ・ダウン
- 💾 ローカルストレージによるデータ保持
- 🔄 全リセット
- 📱 モバイル対応（片手操作しやすいUI）

---

## 使用技術

| 分類 | 使用技術 |
|------|-----------|
| Framework | [Next.js 15 (App Router)](https://nextjs.org/) |
| Library | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Lint & Format | ESLint (Flat Config), Prettier |
| Hosting | [Vercel](https://vercel.com/) |

---

## セットアップ

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

アプリは http://localhost:3000 で確認できます。

---

##  ディレクトリ構成

```
amimono-counter/
├─ app/
│  ├─ layout.tsx      # メタデータ・全体レイアウト
│  └─ page.tsx        # メイン画面（段・目カウンター）
├─ components/
│  ├─ CounterDisplay.tsx
│  ├─ CounterControls.tsx
│  ├─ ModeToggle.tsx
│  └─ RecordList.tsx
├─ hooks/
│  ├─ useKnittingCounter.ts
│  └─ useLocalStorage.ts
├─ public/
│  └─ icons, favicon など
└─ README.md
```