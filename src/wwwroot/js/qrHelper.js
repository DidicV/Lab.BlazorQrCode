var qrCode;

window.qrGenerator = {

       initializeQrCode: function (container) {
        var containerElement = document.getElementById(container);

        if (containerElement !== null && qrCode === undefined) {
            qrCode = new QRious({element: containerElement, size: 300});
        }
    },

    generateQrCode: function (data) {
        // stringify json the data
       const jsonData = JSON.stringify(data);
       qrCode.set({value: jsonData});
    },

    clearQrCode: function () {
        qrCode.set({value: ''});
    }

}