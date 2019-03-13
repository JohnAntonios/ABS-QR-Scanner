function openQRCamera(node) {
	let reader = new FileReader();
	reader.onload = function() {
		node.value = " ";
		qrcode.callback = function(res) {
			if (res instanceof Error) {
				console.log("No QR code found.");
			} else {
				node.parentNode.previousElementSibling.value = res;
			}
		};
		qrcode.decode(reader.result);
	};
	reader.readAsDataURL(node.files[0]);
}
