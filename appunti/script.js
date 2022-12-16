var app = new Vue({
    el: "#vueContainer",
    data: {
        width: 10,
        bigScreen: true,
        menuIsVisible: false,
        menuItems: [
            {
                name: "Appunti",
                pageSrc: "../appunti"
            },
            {
                name: "LaTeX",
                pageSrc: "../LaTeX"
            },
            {
                name: "Informatica",
                pageSrc: "../informatica"
            }
        ],
        news: [
        	{
                title: "Geometria A - mod 1",
                date: "29/11/22",
                text: "Appunti del corso di Geometria A - mod 1 tenuto dal prof. L.E. Sola Conde",
                link: "https://davideborra.notion.site/Geometria-A-f587dd8f407f40cf8c3097028891a791",
                linkText: "Geometria A",
                show: false
            },
            {
                title: "Analisi Matematica A - mod 1",
                date: "9/12/22",
                text: "Trascrizioni delle esercitazioni di Analisi tenute da S. Vercellesi",
                link: "https://github.com/dborra03/esercitazione-analisi-A-2022-23",
                linkText: "Analisi A - GitHub",
                show: false
            },
        ]
    },
    mounted(){
        this.width = window.innerWidth;
        if (this.width < 800){
            this.bigScreen=false;
        };
    },
    methods: {
        showMenu(){
            this.menuIsVisible = !this.menuIsVisible && !this.bigScreen;
        },
        showText(index){
            this.news[index].show = !this.news[index].show;
        },
        easterEgg(){
            alert(42);
        }
    }
});
