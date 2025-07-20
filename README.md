# 🎬 Movie World

Modern bir film keşif uygulaması - TMDB API'si kullanarak filmler hakkında bilgi edinebileceğiniz responsive web uygulaması.

## ✨ Özellikler

- 🎥 Popüler filmleri keşfedin
- 🔍 Film arama ve filtreleme
- 📱 Responsive tasarım (mobil uyumlu)
- 🌙 Dark/Light tema desteği
- ⭐ Favori filmler listesi (WatchList)
- 🎯 Film detay sayfaları
- 🎨 Modern UI/UX tasarım

## 🚀 Teknolojiler

- **React** - UI kütüphanesi
- **Vite** - Geliştirme sunucusu ve build aracı
- **React Router** - Sayfa yönlendirme
- **Bootstrap** - CSS framework
- **Bootstrap Icons** - İkonlar
- **Context API** - State yönetimi
- **TMDB API** - Film verileri

## 📦 Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone <your-repo-url>
   cd movie-world
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Environment dosyasını oluşturun**
   ```bash
   cp .env.example .env
   ```

4. **TMDB API anahtarınızı ekleyin**
   - [TMDB](https://www.themoviedb.org/settings/api) adresinden API key alın
   - `.env` dosyasında `VITE_TMDB_API_KEY` değerini güncelleyin

5. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

## 🌐 Environment Variables

`.env` dosyasında aşağıdaki değişkenleri tanımlayın:

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_LANGUAGE=tr-TR
```

## 📱 Kullanım

- Ana sayfada popüler filmler görüntülenir
- Arama çubuğu ile film arayabilirsiniz
- Film kartlarına tıklayarak detay sayfasına geçebilirsiniz
- WatchList'e film ekleyip çıkarabilirsiniz
- Tema değiştirici ile dark/light mod arası geçiş yapabilirsiniz

## 🛠️ Geliştirme

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

## 🎨 Tema Sistemi

Uygulama Context API kullanarak tema yönetimi yapar:
- Dark tema: Koyu renkler
- Light tema: Açık renkler
- Tüm komponenler otomatik olarak tema değişikliğine uyum sağlar

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Branch'i push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun
