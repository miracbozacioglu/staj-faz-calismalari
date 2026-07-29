USE KullanicilarDb;
GO
ALTER TABLE Kullanicilar ADD Yas INT NULL;
ALTER TABLE Kullanicilar ADD Durum NVARCHAR(20) NULL;
GO

UPDATE Kullanicilar SET Yas = 25, Durum = 'Aktif' WHERE KullaniciID = 1;
UPDATE Kullanicilar SET Yas = 16, Durum = 'Aktif' WHERE KullaniciID = 2;
UPDATE Kullanicilar SET Yas = 30, Durum = 'Pasif' WHERE KullaniciID = 3;

-- yaşı 18'den büyük VE durumu Aktif olanlar
SELECT * FROM Kullanicilar
WHERE Yas > 18 AND Durum = 'Aktif';