    USE KullanicilarDb;
    GO

  
    CREATE TABLE Kategoriler (
        KategoriID INT IDENTITY(1,1) PRIMARY KEY,
        KategoriAdi NVARCHAR(50) NOT NULL
    );
    GO

    CREATE TABLE Urunler (
        UrunID INT IDENTITY(1,1) PRIMARY KEY,
        UrunAdi NVARCHAR(50) NOT NULL,
        Fiyat DECIMAL(10,2) NOT NULL,
        KategoriID INT NOT NULL,
        CONSTRAINT FK_Urunler_Kategoriler
            FOREIGN KEY (KategoriID) REFERENCES Kategoriler(KategoriID)
    );
    GO

    INSERT INTO Kategoriler (KategoriAdi) VALUES ('Elektronik');
    INSERT INTO Kategoriler (KategoriAdi) VALUES ('Kitap');

   
    INSERT INTO Urunler (UrunAdi, Fiyat, KategoriID) VALUES ('Klavye', 250.00, 1);
    INSERT INTO Urunler (UrunAdi, Fiyat, KategoriID) VALUES ('Suç ve Ceza', 90.00, 2);

   
    SELECT Urunler.UrunAdi, Urunler.Fiyat, Kategoriler.KategoriAdi
    FROM Urunler
    JOIN Kategoriler ON Urunler.KategoriID = Kategoriler.KategoriID;