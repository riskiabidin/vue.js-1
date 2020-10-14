var app = new Vue({
    el: '#app',
    data: {
        pesan: 'Hai, ini Vue!',
        pesan2: '<b>Hello vue</b>',
        pesan3: 'Hai, riski abidin!',
        tampil: 'ada',

        text: 'halo ini text',
        angka1: 100,
        angka2: 10.3,
        pilihan1: true,
        pilihan2: false,
        array: ['satu', 'dua', 'tiga'],

        bil1: 1,
        bil2: 2,
        hasil: null,

        penjumlahan: null,
        pengurangan: null,
        pembagian: null,
        perkalian: null,

        isi: '',
        isi2: '',
        isi3: '',
        isi4: '',
        keterangan: '',
        keterangan2: '',
        keterangan3: '',
        keterangan4: ''


    },
    computed: {
        jumlah: function () {
            return this.bil1 + this.bil2
        },
        kurang: function () {
            return this.bil1 - this.bil2
        },
        bagi: function () {
            return this.bil1 / this.bil2
        },
        kali: function () {
            return this.bil2 * this.bil1
        }

    },
    methods: {
        diproses() {
            return this.hasil = this.bil1 + this.bil2

        },
        hapushasil() {
            return this.hasil = null
        },
        dihitung() {
            return this.penjumlahan = this.bil1 + this.bil2,
                this.pengurangan = this.bil1 - this.bil2,
                this.perkalian = this.bil1 * this.bil2,
                this.pembagian = this.bil1 / this.bil2


        },
        dihapus() {
            return this.penjumlahan = null,
                this.pengurangan = null,
                this.pembagian = null,
                this.perkalian = null
        },
        ketik: function () {
            this.keterangan2 = 'sedang mengetik ketik'
        },
        ketik2() {
            if (this.isi3 == 'sayang') {
                this.keterangan3 = 'aku sayang padamu'
            }
            else {
                this.keterangan3 = 'mengetik'
            }
        },
        ketik4() {
            if (this.isi4 == '') {
                this.keterangan4 = ''
            }
            else {
                this.keterangan4 = 'sedang mengetik coy...'
            }
        }

    },
    watch: {
        isi: function () {
            this.keterangan = 'sedang mengetik...'
        },
        isi2: 'ketik',
        isi3: 'ketik2',
        isi4: 'ketik4'
    },

});

var app = new Vue({
    el: '#app2',
    data: {
        pesan: 'hai, ini vue',

        tampil: false,
        keterangan: '',

        isi: '',
        isi2: ''


    },
    watch: {
        isi2: 'ketik'
    },
    methods: {
        ketik: function () {
            if (this.isi2 == this.isi) {
                this.keterangan = '<i style="color:green;"> password sama silahkan lanjutkan</i>';
                this.tampil = true;
            } else {
                this.keterangan = '<i style="color:red;">password yang anda inputkan tidak sama</i>';
                this.tampil = false;
            }
        }
    }
})

var app = new Vue({
    el: '#app3',
    data: {
        pesan: '',
        pesan2: '',
        pilih: '',
        ceklis: [],
        select: '',
        select2: ''

    }
});
var app = new Vue({
    el: '#app4',
    data: {
        pesan: 'hello vue',
        imageSrc: 'gambar/ayam.jpeg',
        lebar: 450,
        keterangan: 'ayam goreng'
    }
});

var app = new Vue({
    el: '#app5',
    data: {
        pesan: 'hello vue',
        keterangan: '',
        bilangan1: null,
        bilangan2: null,
        penjumlahan: null,
        pengurangan: null,
        perkalian: null,
        pembagian: null,
        tulis1: '',
        hasiltulis1: '',

        leftx: '',

        tampak: false,
        isEditing: true
    },
    methods: {
        dilihat: function (isi) {
            alert(isi)
        },
        dihitung: function () {

            return this.penjumlahan = this.bilangan1 + this.bilangan2,
                this.pengurangan = this.bilangan1 - this.bilangan2,
                this.perkalian = this.bilangan1 * this.bilangan2,
                this.pembagian = this.bilangan1 / this.bilangan2
        },
        dihapus() {
            return this.bilangan1 = null, this.bilangan2 = null, this.penjumlahan = null, this.pengurangan = null, this.perkalian = null, this.pembagian = null
        },
        xxx() {
            return this.hasiltulis1 = this.tulis1
        },
        left() {
            this.leftx = 'Klik kiri'
        },
        right() {
            return this.leftx = 'Klik kanan'
        }
    }
});

var app = new Vue({
    el: '#app6',
    data: {
        pesan: 'coba',
        kendaraan: ['sepeda', 'sepeda motor', 'mobil'],
        isi: '',
        isi2: '',
        isi3: '',
        isi4: '',

        kendaraan2: [
            { jenis: 'mobil', merk: 'honda', warna: 'merah' },
            { jenis: 'motor', merk: 'yamaha', warna: 'biru' },
            { jenis: 'sepeda', merk: 'polygon', warna: 'abu-abu' },
            { jenis: 'mobil', merk: 'ferari', warna: 'merah' }

        ]
    },
    methods: {
        tambah() {
            this.kendaraan.push(this.isi),
                this.isi = ''
        },
        hapus(index) {
            this.kendaraan.splice(index, 1)
        },
        tambahData() {
            app.kendaraan2.push({ jenis: this.isi2, merk: this.isi3, warna: this.isi4 })
            this.isi2 = ''
            this.isi3 = ''
            this.isi4 = ''

        },
        hapusData(index) {
            this.kendaraan2.splice(index, 1)

        }
    }
});
var mk = new Vue({
    el: '#app7',
    data: {
        pesan: 'coba vue',
        makanan: [
            { nama: 'nasi goreng', harga: 15000, jumlah: 3, total: 45000 },
        ],
        isi1: '',
        isi2: null,
        isi3: null,
        isi4: null,
        jumlah: null,

    },
    methods: {
        tambahData() {
            this.isi4 = this.isi2 * this.isi3,
                mk.makanan.push({
                    nama: this.isi1, harga: this.isi2, jumlah: this.isi3, total: this.isi4
                })
            this.jumlah += this.isi4
            this.isi1 = ''
            this.isi2 = null
            this.isi3 = null
            this.isi4 = null
        },
        hapusData(index) {
            this.makanan.splice(index, 1)


        }
    }
});
var barang = new Vue({
    el: '#app8',
    data: {
        barang: [
            { jenis: 'mie rebus', stock: true },
            { jenis: 'mie goreng', stock: true },
            { jenis: 'chiki', stock: false },
            { jenis: 'minuman soda', stock: false },
            { jenis: 'minyak goreng', stock: false },
            { jenis: 'aneka roti', stock: true },
        ],
        pesan: 'coba vue',
        kendaraan: [
            { jenis: 'mobil', merk: 'honda', warna: 'merah' },
            { jenis: 'motor', merk: 'honda', warna: 'hitam' },
            { jenis: 'sepeda', merk: 'phoenix', warna: 'biru' },
        ],
        cari: ''
    },
    computed: {
        barangAda() {
            return this.barang.filter(b => b.stock)
        },
        barangHabis() {
            return this.barang.filter(b => !b.stock)
        },
        filterKendaraan() {
            return this.kendaraan.filter((kd) => {
                return kd.merk.match(this.cari)
            });
        }
    }
});
var filter = new Vue({
    el: '#app9',
    data: {
        pesan: 'coba dulu'
    },
    filters: {
        kapital(value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        },
        kecil(value) {
            if (!value) return ''
            value = value.toString()
            return value.toLowerCase()
        },
        terbalik(value){
            if(!value) return ''
            value=value.toString()
            return value.split('').reverse().join('')
        },
        terbalik2(value){
            if(!value) return ''
            value=value.toString()
            return value.split(' ').reverse().join(' ')
        },
        capitalize(value){
            if(!value) return ''
            value=value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});