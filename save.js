const saveCard_button = document.getElementById("saveCard_button");

saveCard_button.addEventListener("click", () => {

    html2canvas(nameCard).then((canvas) => {

        canvas.toBlob((blob) => {

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = "StellaSora_Card.png";

            document.body.appendChild(link);
            link.click();
            link.remove();

            URL.revokeObjectURL(url);

        }, "image/png");

    });

});