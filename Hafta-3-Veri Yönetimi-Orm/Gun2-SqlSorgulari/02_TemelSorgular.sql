USE KullanicilarDb;
GO

-- INSERT: yeni kayıt ekleme
INSERT INTO Kullanicilar (Ad, Soyad, KayitTarihi)
VALUES ('Ayşe', 'Demir', '2024-03-15');

-- SELECT: tüm kayıtları okuma
SELECT * FROM Kullanicilar;

-- UPDATE: mevcut bir kaydı güncelleme
UPDATE Kullanicilar
SET Ad = 'Ayşe Nur'
WHERE KullaniciID = 3;

-- Güncellemeyi doğrula
SELECT * FROM Kullanicilar;