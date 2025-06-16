
# Dicoding Academy 


**Satria nur saputro**<br>
**satrianursaputro06@gmail.com**


Lakukan proses di atas menggunakan dataset review product https://drive.google.com/file/d/1qn5WXp-H95_FL_Rx5oqvfZaflYdHsnrF/view?usp=sharing


**Permasalahan**:
melakukan sentiment analysis salah satu aplikasi dari marketplace app pada review-review product.

**! Ingat**<br>
Kolom Ratings adalah target.

**solusi**: menerapkan classification untuk mengetahui feedback konsumen dalam mengkategorikan rating 1-5




# Domain Proyek

Melakukan melakukan sentiment analysis salah satu aplikasi dari marketplace app pada review-review product, dikarenakan sulitnya seorang bisnis dalam mendapatkan feedback atau saran dalam product yang dibuat dari mulai prasana tahap pembuatan sampai diterima ketangan konsumen, perlu adanya sebuah solus agar bisnis lebih cepat untuk mendapatkan insight lebih feedback feedback yang diterima


# Business Understanding

## Permasalahan:


1.   Kenapa pentingnya AI diterapkan pada masalah ini ?
2.   Bagaimana memahami pentingnya feedback pengguna ?
3.   Apa dampak rating dalam product ?

## Goal:



1.   Bidang AI diterapkan dalam permasalahan ini yaitu kemudahan dalam mengkategorikan sebuah feedback sehingga sebuah perusahaan dapat ber-intropeksi dan mengedepankan inovasi serta pelayanan lebih baik
2.   Sebuah feedback dari konsumen merupakan sebuah data atau saran/review product yang kita punya, sehingga kita lebih bisa mengetahui apa saja kekurangan & kelebihan produk kita serta melihat pasar konsumen apa yang mereka mau dari berbagai inovasi product yang kita sediakan untuk dibeli konsumen
3.   Pentingnya sebuah rating yaitu kualitas kepercayaan konsumen semakin tinggi, validasi sebuah brand, dan peningkatan penjualan terhadap seo sebuah marketplace


## Solution statements
 
 

1.   Mencoba melakuakan Feature TF-IDF, BoW, Feature selection
2.   Menggunakan finetunning sebuah model dengan algoritma SGD
3.   Melakukan validasi menggunakan random shufflesplit dan cross_validation





# Data Understanding

## variabel


itemId : id produk

category: category produk

name : nama produk	

rating: rating produk

originalRating : rating semula

reviewTitle : judul review

reviewContent : isi review

likeCount : jumlah suka product

upVotes : votes produk	
downVotes : votes produk

helpful: boolen manfaat produk
relevanceScore : score relevan product
boughtDate : tanggal penjualan
clientType : jenis kliean
retrievedDate : tanggal diterima

## catatan
tahap yang digunakan dalam masalah ini hanya menggunakan variabel rating dan review content

# Data Preparation

-melakukan data akusisi

-melakukan cleansing data

-melakukan preprocessing : 

1.   casefolding
2.   normalisasi
3.   stopword

-feature engginering

1.   TF-IDF
2.   Bow
3.   Feature Selection



# Modeling


kelebihan SGD: 


1.   Cocok untuk masalah classification
2.   Digunakan untuk masalah supervised
3.   algoritma sederhana cepat
4.   bagus untuk untuk data tidak begitu banyak


kekurangan SGD:


1.   machine learning tradisional
2.   jika banyak data akan kesulitan dalam mencapai akurasi optimal
3.   beberapa masalah data tidak dapat dikategorika algoritma ini bagus dengan algoritma yang lain




menggunakan algoritma SGD dengan fine tunning 

*   loss="hinge", penalty="l2", max_iter=5

serta split dataset 80%:20%, training dan testing



# Evaluasi

menggunakan 

1.   confusion matrix
2.   recall
3.   precision
4.   f1


Juga shufflesplit dan cross_validation untuk menguji accuracy model


# Resume

setelah melakukan text preprocessing dan feature enginnering kemudian dilakukan modelling data , dengan train dan test dibagi 80 % : 20 % kemudian tetapi perlu dingat train ini data rating 5 terlalu banyak dibangding dengan rating lainnya, fitur merupakan review dari pembeli dan target yaitu rating yang digunakan , kemudian dilakukan pemodelan, setelah dilakukan melakukan evaluasi report matrix, jumlah salah dan benar dalam redict, dan juga cross validasi, setelah itu dilakukan deployment model terhadap data inputan baru sehingga dapat di kategorikan mana yang review sentiment pembeli masuk ke kategori rating berapa.

terakhir tidak lupa membuat wordcloud berdasarkan rating pembeli.
dari beberapa proses modelling saya gunakan dengan beberapa algoritma kalsifikasi seperti KNN,SGD, Naive bayes, MLP, random forest,dan decision tree. Saya memilih SGD karena prosesnya cepat dan nilai akurasi lebih baik daripada algoritma klasifikasi lainnya. dengan averange acc 79,5%.