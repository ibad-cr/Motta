const langData = {
    en: ['Limited Time Only: Up to 60% off Dining Furniture', 'Shop Now','Track Order', 'Help Center' , 'Compare', 'Wishlist', 'Shop by Category' , 'Home & Garden', 'Electronics', 'Fashion',
    'Jewelry & Accessories', 'Sports & Entertainment', 'Mother & Kids', 'Beauty & Health', 'Toys & Games', 
    'Automobiles & Motorcycles', 'Collectibles & Art', 'Tools & Home Improvement', 'Home', 'Shop', 'Features', 'Pages',
    'Blog', 'Shop Today’s Deals', 'NEW ARRIVALS', 'Hot Right Now', 'Retro Remixed For The Futuren Starting at $110', 'Shop Now',
    'Today’s Best Deals', 'See All Deals' ,'Small Appliances' ,'Up to 40% off Kitchen Products.', 'Show Now', 'Premium Beauty', 'Up to 25% off Hair Care Products.',
    'Show Now', 'Indoor Furniture', 'Save 30% Today, Even on Furniture' , 'Show Now', 'Cell Phones & Smartphones', 'Up to 15% off Cell Phones Products',
    'Show Now', 'Flash Deals', 'Ends in', 'See All Deals', 'Money Back Guarantee', 'Get the item you ordered or your money back','Learn More',
    'Free Shipping', 'Free Shipping On Orders Over$100', 'Details', '24/7 Customer Service', 'Want to talk to a person? Choosechat or call us',
    'Get Support'] ,

    az: ['Yalnız Məhdud Zaman: Yemək Mebelinə 60%-ə qədər endirim', 'İndi alış-veriş edin','Sifarişi izləyin' ,'Yardım Mərkəzi' , 'Müqayisə et', 'İstək siyahısı','Kateqoriyaya görə Alış-veriş' ,
    'Ev və Bağça', 'Elektronik', 'Moda', 'Zərgərlik  ve Aksesuarlar', 'İdman və Əyləncə', 'Ana və Uşaqlar', 'Gözəllik və Sağlamlıq',
    'Oyuncaqlar və Oyunlar', 'Avtomobillər və Motosikllər', 'Kolleksiya və İncəsənət', 'Alətlər və Ev Təkmilləşdirməsi',
    'Ev', 'Mağaza', 'Xüsusiyyətləri', 'Səhifələr', 'Bloq', 'Bugünkü Endirimləri Alın', 'YENİ GƏLƏNLƏR', 'İndi isti',
    '110$-dan başlayan gələcək üçün retro remiks', 'İndi alış-veriş edin', 'Günün Ən Yaxşı Sövdələşmələri', 'Bütün Sövdələşmələrə Baxın',
    'Kiçik məişət texnikası', 'Mətbəx məhsullarına 40%-ə qədər endirim.','İndi alış-veriş edin', 'Premium Gözəllik', 'Saça Qulluq Məhsullarına 25%-ə qədər endirim.',
    'İndi alış-veriş edin', 'Daxili Mebel', 'Bu gün hətta mebeldə 30% qənaət edin', 'İndi alış-veriş edin', 'Mobil Telefonlar və Smartfonlar',
    'Mobil Telefon Məhsullarına 15%-ə qədər endirim', 'İndi alış-veriş edin', 'Flash Sövdələşmələr', 'Bitir', 'Bütün Sövdələşmələrə Baxın',
    'Pul Geri Zəmanət', 'Sifariş etdiyiniz məhsulu və ya pulunuzu geri alın', 'Daha ətraflı', 'Pulsuz çatdırılma', '100$-dan yuxarı Sifarişlərdə Çatdırılma Pulsuzdur',
    'Təfərrüatlar', '24/7 Müştəri Xidmətləri', 'Bir insanla danışmaq istəyirsiniz? Söhbət seçin və ya bizə zəng edin', 'Dəstək alın']
}


const language = document.querySelectorAll('.change');
const btn = document.querySelector('.mybutton-js');
const spannn = document.querySelector('.spanen');

if (localStorage.getItem("Button") === null) {
    localStorage.setItem("Button" , "AZ")
} else {
    btn.onclick =()=>{
        if (spannn.innerHTML === 'AZ') {
            for (let i in langData.az) {
                language[i].innerHTML = langData.az[i];
            }
            spannn.innerHTML = 'EN';
            localStorage.setItem("Button", "AZ");
        }
    
        
        else {
            for (let i in langData.en) {
                language[i].innerHTML = langData.en[i];
            }
            spannn.innerHTML = 'AZ';
            localStorage.setItem("Button", "EN");
        }
    }
}

if (localStorage.getItem("Button") === "EN") {
    for (let i in langData.en) {
        language[i].innerHTML = langData.en[i];
    }
    spannn.innerHTML = 'AZ';
} else {
    for (let i in langData.az) {
        language[i].innerHTML = langData.az[i];
    }
    spannn.innerHTML = 'EN';
}



const mode = document.querySelector('#dr-and-lg')
const button_change = document.querySelector('.changeall');

if (localStorage.getItem("mode") === null){
    localStorage.setItem("mode", "light");
} else {
    button_change.onclick =()=>{
        if(button_change.innerHTML == 'Dark') {
            mode.className = 'dark';
            localStorage.setItem("mode", "dark");
            button_change.innerHTML = 'Light';
            mode.style.transition = '0.5s';
        }
        
        else {
            button_change.innerHTML = 'Dark';
            localStorage.setItem("mode", "light");
            mode.className = 'light';
            mode.style.transition = '0.5s';
        }
    }
}
if (localStorage.getItem("mode") === 'light') {
    mode.className = 'light';
    // uiu
    
} else {
    mode.className = 'dark';   
}


