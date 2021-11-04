class kartya{
    constructor(elem, adat, index){
        this.elem=elem;
        
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.adat.index=index;
        this.setAdatok(this.adat);
        this.elem.on("click",()=>{
            this.kattint();
        });
    }

    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src",ertekek.eleresiut);
        this.leiras.html(ertekek.leiras);
    }
    kattint(){
        let esemeny=new CustomEvent("kepkattint",{detail:this.adat});
        window.dispatchEvent(esemeny);
    }
}