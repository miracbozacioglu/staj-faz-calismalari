<div align="center">

# 🚀 Staj Faz Çalışmaları

### Öner Bilişim A.Ş. · Yazılım Geliştirme Stajı

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
<tr><td align="center">⬜</td><td>H1 · Gün 3</td><td>Döngüler (for / while)</td><td>1–50 arası çift sayıları yazdırma</td></tr>
<tr><td align="center">⬜</td><td>H1 · Gün 4</td><td>Diziler (Arrays)</td><td>5 şehirlik dizi + döngü ile yazdırma</td></tr>
<tr><td align="center">⬜</td><td>H1 · Gün 5</td><td>Metotlar &amp; Parametreler</td><td>İki sayıyı toplayan void metot · DRY prensibi</td></tr>
<tr><td align="center">⬜</td><td>H2 · Gün 1</td><td>Class &amp; Object</td><td><code>Ogrenci</code> sınıfı ve nesne üretimi</td></tr>
<tr><td align="center">⬜</td><td>H2 · Gün 2</td><td>Constructor</td><td><code>Kitap</code> sınıfına zorunlu alan constructor'ı</td></tr>
<tr><td align="center">⬜</td><td>H2 · Gün 3</td><td>Encapsulation (get/set)</td><td>Negatif fiyatı engelleyen set bloğu</td></tr>
<tr><td align="center">⬜</td><td>H2 · Gün 4</td><td>Inheritance (Kalıtım)</td><td><code>Canli → Kedi, Kopek</code> türetme</td></tr>
<tr><td align="center">⬜</td><td>H2 · Gün 5</td><td>List&lt;T&gt; Koleksiyonu</td><td>Liste ekleme / silme / sayma</td></tr>
</table>

### 🗄️ FAZ 2 — Veri Yönetimi ve ORM

> Verinin kalıcı saklanması, ilişkisel veritabanı tasarımı ve Entity Framework Core.

<table>
<tr><th>Durum</th><th>Konu Başlıkları</th></tr>
<tr><td align="center">⬜</td><td><b>Hafta 3 · SQL:</b> RDBMS &amp; tablolar · SELECT/INSERT/UPDATE/DELETE · WHERE, AND, OR · ORDER BY &amp; LIKE · Primary/Foreign Key</td></tr>
<tr><td align="center">⬜</td><td><b>Hafta 4 · EF Core:</b> ORM mantığı · DbContext &amp; DbSet · Code-First Migrations · LINQ ile ekleme/listeleme · Update &amp; Delete (SaveChanges)</td></tr>
</table>

### 🌐 FAZ 3 — Ağ İletişimi ve Web API Geliştirme

> İstemci-sunucu haberleşmesi, HTTP protokolü ve ilk API uç noktaları.

<table>
<tr><th>Durum</th><th>Konu Başlıkları</th></tr>
<tr><td align="center">⬜</td><td><b>Hafta 5 · Web API'ye Giriş:</b> Client/Server · HTTP metotları · Program.cs · Controller &amp; Routing · Swagger</td></tr>
<tr><td align="center">⬜</td><td><b>Hafta 6 · CRUD API:</b> RESTful route'lar · FromRoute/FromBody · HTTP durum kodları · POST/PUT/DELETE işlemleri</td></tr>
</table>

### 🏛️ FAZ 4 — İleri Mimari, Güvenlik ve Standartlar

> Kurumsal standartlar: gevşek bağlılık, hata yönetimi, katmanlı mimari.

<table>
<tr><th>Durum</th><th>Konu Başlıkları</th></tr>
<tr><td align="center">⬜</td><td><b>Hafta 7 · Gerçek Veritabanı:</b> appsettings.json · Dependency Injection · Constructor Injection · async/await · Tracking &amp; SaveChangesAsync</td></tr>
<tr><td align="center">⬜</td><td><b>Hafta 8 · DTO &amp; Hata Kontrolü:</b> DTO kavramı · Manuel mapping · Validation (Fail Fast) · try-catch &amp; 500 · LINQ arama</td></tr>
<tr><td align="center">⬜</td><td><b>Hafta 9 · Servis Katmanı:</b> Separation of Concerns · Interface · Servis implementasyonu · AddScoped · Controller sadeleştirme</td></tr>
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
