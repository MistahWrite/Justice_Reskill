function encryptText() {
    var text_to_encrypt = document.getElementById("text").value;
    console.log("text_to_encrypt = " + text_to_encrypt);

    console.log("TEST");

    var output_value="";
    for(var i = 0; i < text_to_encrypt.length; i++) {
        output_value += text_to_encrypt.charCodeAt(i).toString(2) + " ";
    }
    document.getElementById("encrypted_text").value = output_value;
    return output_value;

}