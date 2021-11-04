$(function () {
  const kepAdat = [
    {
      cim: "1. kep címe",
      eleresiut: "kepek/VA.jpg",
      leiras: "Boldog szülinaport",
    },
    {
      cim: "2. kep címe",
      eleresiut: "kepek/VA2.jpg",
      leiras: "Torta1",
    },
    {
      cim: "3. kep címe",
      eleresiut: "kepek/VA3.jpg",
      leiras: "Torta2",
    },
  ];
  let aktIndex=0;

  const szuloelem = $("#galeria");
  const sablonElem = $(".kartyak");
  //   for (let i = 0; i < kepAdat.length; i++) {
  //     let ujElem = sablonElem.clone().appendTo(szuloelem);
  //     const ujKartya = new kartya(ujElem, kepAdat[i]);
  //   }
  kepAdat.forEach(function(elem,index) {
    let ujElem = sablonElem.clone().appendTo(szuloelem);
    const ujKartya = new kartya(ujElem, elem, index);
  });
  


    const szuloelem2 = $(".fokep");
    let ujElem = sablonElem.clone().appendTo(szuloelem2);
    const nagyKartya = new kartya(ujElem, kepAdat[aktIndex], aktIndex);
    $(window).on("kepkattint",(event)=>{
        console.log(event.detail);
        // $(".fokep h3").html(event.detail.cim);
        // $(".fokep img").attr("src",event.detail.eleresiut);
        // $(".fokep p").html(event.detail.leiras);
        nagyKartya.setAdatok(event.detail);
        aktIndex=event.detail.index;
      });

    $("#bal").on("click",function(){
        aktIndex--;
        if(aktIndex<0){
            aktIndex=kepAdat.length-1;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
    $("#jobb").on("click",function(){
        aktIndex++;
        if(aktIndex>kepAdat.length-1){
            aktIndex=0;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    }); 

    
    sablonElem.remove();
});
