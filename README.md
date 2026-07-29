<div align="center">

# 🎯 Staj Faz Çalışmaları


Programlama temellerinden başlayıp kurumsal standartlarda bir **Backend API** projesine
uzanan; gün gün ilerleyen uygulamalı staj çalışmalarım.

<br>

![C#](https://img.shields.io/badge/C%23-.NET%208.0-512BD4?style=for-the-badge&logo=csharp&logoColor=white)
![Backend](https://img.shields.io/badge/Backend-ASP.NET%20Core-5C2D91?style=for-the-badge&logo=dotnet&logoColor=white)
![Database](https://img.shields.io/badge/Veritaban%C4%B1-SQL%20%2F%20PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/Versiyon-Git%20%26%20GitHub-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 📌 Bu Repo Nedir?

Bu depo, staj süresince izlediğim **görev listesini** takip eder. Her gün için üç adım var:

| Adım | Açıklama |
| :---: | :--- |
| 🔍 **Araştırma** | Konunun teorik olarak öğrenilmesi |
| ⌨️ **Pratik** | Öğrenilen konunun kod ile uygulanması |
| 🎯 **Öğrenim Hedefi** | "Neden böyle?" sorusunun cevaplandığı derinleşme |

Her gün ayrı bir **branch** üzerinde geliştirilir, **commit**'lenir, **Pull Request** ile
`main` dalına **merge** edilir. Böylece hem konular öğrenilir hem de gerçek bir ekip
akışı (feature-branch) pratiği yapılır.

---

## 🗺️ Yol Haritası & İlerleme


### 🧩 FAZ 1 — Programlama Temelleri ve Kod Mimarisi

> Programlamanın temel yapıtaşları ve nesne yönelimli düşünce (OOP).

<table>
<tr><th>Durum</th><th>Gün</th><th>Konu</th><th>Pratik Çıktı</th></tr>

<tr><td align="center">✅</td><td><b>H1 · Gün 1</b></td><td>Veri Tipleri &amp; Değişkenler</td><td>İsim / yaş / meslek bilgisini yazdırma · <code>decimal</code> hassasiyet farkı</td></tr>
<tr><td align="center">✅</td><td><b>H1 · Gün 2</b></td><td>If / Else &amp; Karşılaştırma Op.</td><td>Yaşa göre "Ehliyet alabilir / alamaz" · ardışık if vs. else if</td></tr>
<tr><td align="center">✅</td><td>H1 · Gün 3</td><td>Döngüler (for / while)</td><td>1–50 arası çift sayıları yazdırma</td></tr>
<tr><td align="center">✅</td><td>H1 · Gün 4</td><td>Diziler (Arrays)</td><td>5 şehirlik dizi + döngü ile yazdırma</td></tr>
<tr><td align="center">✅</td><td>H1 · Gün 5</td><td>Metotlar &amp; Parametreler</td><td>İki sayıyı toplayan void metot · DRY prensibi</td></tr>
<tr><td align="center">✅</td><td>H2 · Gün 1</td><td>Class &amp; Object</td><td><code>Ogrenci</code> sınıfı ve nesne üretimi</td></tr>
<tr><td align="center">✅</td><td>H2 · Gün 2</td><td>Constructor</td><td><code>Kitap</code> sınıfına zorunlu alan constructor'ı</td></tr>
<tr><td align="center">✅</td><td>H2 · Gün 3</td><td>Encapsulation (get/set)</td><td>Negatif fiyatı engelleyen set bloğu</td></tr>
<tr><td align="center">✅</td><td>H2 · Gün 4</td><td>Inheritance (Kalıtım)</td><td><code>Canli → Kedi, Kopek</code> türetme</td></tr>
<tr><td align="center">✅</td><td>H2 · Gün 5</td><td>List&lt;T&gt; Koleksiyonu</td><td>Liste ekleme / silme / sayma</td></tr>
</table>

### 🗄️ FAZ 2 — Veri Yönetimi ve ORM

> Verinin kalıcı saklanması, ilişkisel veritabanı tasarımı ve Entity Framework Core.

<table>
<tr><th>Durum</th><th>Gün</th><th>Konu</th><th>Pratik Çıktı</th></tr>
<tr><td align="center">✅</td><td>H3 · Gün 1</td><td>İlişkisel Veritabanı (RDBMS)</td><td>SSMS ile <code>Kullanicilar</code> tablosu oluşturma</td></tr>
<tr><td align="center">✅</td><td>H3 · Gün 2</td><td>Temel SQL Sorguları</td><td>SELECT / INSERT / UPDATE / DELETE ile kayıt ekleme &amp; güncelleme</td></tr>
<tr><td align="center">✅</td><td>H3 · Gün 3</td><td>Filtreleme (WHERE, AND, OR)</td><td>Yaşı 18+ ve durumu "Aktif" kullanıcıları listeleme</td></tr>
<tr><td align="center">✅</td><td>H3 · Gün 4</td><td>Sıralama &amp; Arama</td><td>'A' ile başlayanları yaşa göre <code>ORDER BY</code> + <code>LIKE</code></td></tr>
<tr><td align="center">✅</td><td>H3 · Gün 5</td><td>Tablo İlişkileri (PK / FK)</td><td><code>Kategoriler</code> ↔ <code>Urunler</code> foreign key bağı</td></tr>
<tr><td align="center">✅</td><td>H4 · Gün 1</td><td>ORM Nedir?</td><td>Console projesine EF Core + SQL Server NuGet kurulumu</td></tr>
<tr><td align="center">✅</td><td>H4 · Gün 2</td><td>DbContext &amp; DbSet</td><td><code>AppDbContext</code> ve bağlantı ayarları</td></tr>
<tr><td align="center">✅</td><td>H4 · Gün 3</td><td>Code-First &amp; Migrations</td><td><code>Add-Migration</code> + <code>Update-Database</code></td></tr>
<tr><td align="center">✅</td><td>H4 · Gün 4</td><td>Veri Ekleme &amp; Listeleme</td><td>LINQ <code>Select</code> / <code>Where</code> ile ekle-listele</td></tr>
<tr><td align="center">✅</td><td>H4 · Gün 5</td><td>Güncelleme &amp; Silme</td><td>ID=1 kaydını bulup <code>SaveChanges</code> ile güncelleme</td></tr>
</table>

### 🌐 FAZ 3 — Ağ İletişimi ve Web API Geliştirme

> İstemci-sunucu haberleşmesi, HTTP protokolü ve ilk API uç noktaları.

<table>
<tr><th>Durum</th><th>Gün</th><th>Konu</th><th>Pratik Çıktı</th></tr>
<tr><td align="center">⬜</td><td>H5 · Gün 1</td><td>Client &amp; Server Mimarisi</td><td>Postman kurulumu + ücretsiz API'ye GET isteği</td></tr>
<tr><td align="center">⬜</td><td>H5 · Gün 2</td><td>HTTP Metotları</td><td>Postman ile JSON gövdeli POST isteği simülasyonu</td></tr>
<tr><td align="center">⬜</td><td>H5 · Gün 3</td><td>ASP.NET Core Web API Şablonu</td><td>Yeni proje açma &amp; <code>Program.cs</code> incelemesi</td></tr>
<tr><td align="center">⬜</td><td>H5 · Gün 4</td><td>Controller &amp; Routing</td><td><code>OgrenciController</code> + statik string dönen GET</td></tr>
<tr><td align="center">⬜</td><td>H5 · Gün 5</td><td>Swagger Arayüzü</td><td>İlk endpoint'i Swagger üzerinden test etme</td></tr>
<tr><td align="center">⬜</td><td>H6 · Gün 1</td><td>Route Mantığı</td><td>Statik <code>List&lt;Ogrenci&gt;</code> dönen <code>[HttpGet]</code></td></tr>
<tr><td align="center">⬜</td><td>H6 · Gün 2</td><td>FromRoute &amp; FromBody</td><td><code>[HttpGet("{id}")]</code> ile ID'ye göre kayıt bulma</td></tr>
<tr><td align="center">⬜</td><td>H6 · Gün 3</td><td>HTTP Durum Kodları</td><td><code>NotFound()</code> / <code>Ok()</code> (200 · 404 · 400)</td></tr>
<tr><td align="center">⬜</td><td>H6 · Gün 4</td><td>POST ile Veri Ekleme</td><td>Gelen JSON'u yakalayıp listeye ekleyen <code>[HttpPost]</code></td></tr>
<tr><td align="center">⬜</td><td>H6 · Gün 5</td><td>PUT &amp; DELETE</td><td>ID'ye göre güncelleme &amp; silme · Soft-Delete kavramı</td></tr>
</table>

### 🏛️ FAZ 4 — İleri Mimari, Güvenlik ve Standartlar

> Kurumsal standartlar: gevşek bağlılık, hata yönetimi, katmanlı mimari.

<table>
<tr><th>Durum</th><th>Gün</th><th>Konu</th><th>Pratik Çıktı</th></tr>
<tr><td align="center">⬜</td><td>H7 · Gün 1</td><td>Connection String</td><td>Bağlantı dizesini <code>appsettings.json</code>'a ekleme</td></tr>
<tr><td align="center">⬜</td><td>H7 · Gün 2</td><td>Dependency Injection</td><td><code>AppDbContext</code>'i <code>Program.cs</code>'te register etme</td></tr>
<tr><td align="center">⬜</td><td>H7 · Gün 3</td><td>Constructor Injection</td><td><code>UrunlerController</code>'a DbContext enjekte etme</td></tr>
<tr><td align="center">⬜</td><td>H7 · Gün 4</td><td>Asenkron İstek</td><td><code>async/await</code> + <code>ToListAsync()</code> GET endpoint</td></tr>
<tr><td align="center">⬜</td><td>H7 · Gün 5</td><td>Tracking &amp; Kaydetme</td><td><code>SaveChangesAsync()</code> ile gerçek DB'ye ürün ekleme</td></tr>
<tr><td align="center">⬜</td><td>H8 · Gün 1</td><td>DTO Kavramı</td><td><code>UrunResponseDto</code> sınıfı oluşturma</td></tr>
<tr><td align="center">⬜</td><td>H8 · Gün 2</td><td>Manuel Mapping</td><td><code>Urun</code> → <code>UrunResponseDto</code> dönüşümü</td></tr>
<tr><td align="center">⬜</td><td>H8 · Gün 3</td><td>Validation (Fail Fast)</td><td><code>if</code> blokları ile gelen veriyi doğrulama</td></tr>
<tr><td align="center">⬜</td><td>H8 · Gün 4</td><td>try-catch &amp; Hata Yönetimi</td><td>Çökme durumunda 500 Internal Server Error dönme</td></tr>
<tr><td align="center">⬜</td><td>H8 · Gün 5</td><td>LINQ ile Arama</td><td>Ürün isimlerinde <code>Contains</code> ile filtreleme</td></tr>
<tr><td align="center">⬜</td><td>H9 · Gün 1</td><td>Separation of Concerns</td><td><code>Services</code> klasörünün açılması</td></tr>
<tr><td align="center">⬜</td><td>H9 · Gün 2</td><td>Interface</td><td><code>IUrunService</code> arayüzünün tanımlanması</td></tr>
<tr><td align="center">⬜</td><td>H9 · Gün 3</td><td>Servis Implementasyonu</td><td><code>UrunService</code> + DbContext'in servise taşınması</td></tr>
<tr><td align="center">⬜</td><td>H9 · Gün 4</td><td>IoC Container Kaydı</td><td><code>AddScoped</code> ile servisi kaydetme</td></tr>
<tr><td align="center">⬜</td><td>H9 · Gün 5</td><td>Controller Sadeleştirme</td><td>DbContext'i çıkarıp servis metotlarını çağırma (Refactoring)</td></tr>
</table>

### 🎓 FAZ 5 — Bitirme Projesi (MVP)

> Öğrenilen her şeyi birleştirerek sıfırdan kurumsal bir Backend API inşa etmek.

<table>
<tr><td>🗃️ <b>DB</b></td><td>PostgreSQL</td><td>⚙️ <b>ORM</b></td><td>Entity Framework Core</td></tr>
<tr><td>🖥️ <b>Backend</b></td><td>.NET Core Web API</td><td>🐳 <b>Deployment</b></td><td>Docker (docker-compose)</td></tr>
<tr><td>🏗️ <b>Mimari</b></td><td>N-Tier / Temiz Monolitik</td><td>🔐 <b>Güvenlik</b></td><td>JWT &amp; Rol Bazlı Yetki</td></tr>
<tr><td>📄 <b>Doküman</b></td><td>Swagger</td><td>📦 <b>Standart</b></td><td>DTO &amp; Global Exception Handling</td></tr>
</table>

---


> Her hafta kendi klasöründe, her gün ayrı bir proje olarak tutulur.


---

<div align="center">

**👨‍💻 Mirac Bozacıoğlu** 

<sub>Bu README ilerledikçe güncellenir — ✅ tamamlanan, ⬜ bekleyen günleri gösterir.</sub>

</div>
