console.log(saveAs);
document.getElementById("saveAs").addEventListener("click", (ev)=>{
    html2canvas(document.querySelector("#card-wrapper")).then((canvas)=>{
        document.body.appendChild(canvas);
        canvas.toBlob((blob)=>{
            saveAs(blob, "instagram_card_creator_" + new Date().getTime() + ".png");
        });
    }).catch((e)=>{
        console.error(e);
        alert("Something went wrong");
    });
});
