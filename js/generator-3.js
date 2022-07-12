$("#proccess_btn").click(function() {
    let data1 = document.querySelector("#fileName");
    let data2 = document.querySelector("#quantity");
    if (data1.value == "" || data2.value == "") {
        alert("Please Check The input");
        return;
    }
    let fileNameOriginal = document.querySelector("#fileName").value;
    let fileArr = fileNameOriginal.split(".");
    let quantity = document.querySelector("#quantity").value;
    document.querySelector("#resultDiv").style.display = ""
    document.querySelector("#result").textContent = ``;
    for (let i = 0; i < quantity; i++) {
        let fileName = fileArr[0]
        let fileExtension = fileArr[1]
        document.querySelector("#result").textContent += `"C:\\Program Files\\Sandboxie-Plus\\Start.exe" /box:h${i+1} ${fileName}-${i+1}.${fileExtension}\n`
        if(document.querySelector("#loginBat").checked){
            document.querySelector("#result").textContent += `timeout 7\nlogin.exe\n`
        }
    }
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("download").addEventListener("click", function() {
    // Generate download of hello.txt file with some content
    var text = document.getElementById("result").value;
    var filename = "run_all.bat";

    download(filename, text);
}, false);