# Hafta 5 - Gün 1: Ýstemci-Sunucu Mimarisi ve HTTP

## Yapýlanlar
- Postman kuruldu
- jsonplaceholder.typicode.com test API'sine GET istekleri atýldý
- Farklý endpoint'ler denendi: /users, /users/1, /posts
- Var olmayan bir adrese istek atýlarak 404 Not Found durumu gözlemlendi

## Öðrenilenler
- Ýstemci-sunucu mimarisinde istemci istek (request) gönderir, sunucu yanýt (response) döner.
- HTTP isteði metot, URL, header ve body bilgilerini taþýr; yanýt ise durum kodu, header ve body içerir.
- HTTP stateless'týr: sunucu her isteði baðýmsýz iþler, önceki isteði hatýrlamaz.
- Oturum bilgisi sunucunun belleðinde deðil, her istekte istemci tarafýndan (token/cookie olarak) tekrar gönderilerek taþýnýr.
- Stateless yapý, sunucunun ölçeklenebilir olmasýný saðlar.