

let index = 0;
$( document ).ready(function() {
    console.log( "ready!" );
    
});

$("#type").on('change',function(){
    console.log(document.querySelector("#type").selectedIndex)
    index = document.querySelector("#type").selectedIndex;
    switch (index) {
        case 1:
            document.querySelector("#honeygain").style = "display:true";
            document.querySelector("#iproyal").style = "display:none";
            document.querySelector("#traffmonetizer").style = "display:none";
            document.querySelector("#resultDiv").style = "display:none";
            break;
        case 2:
            document.querySelector("#honeygain").style = "display:none";
            document.querySelector("#iproyal").style = "display:none";
            document.querySelector("#traffmonetizer").style = "display:none";
            document.querySelector("#resultDiv").style = "display:none";
            break;
        case 3:
            document.querySelector("#honeygain").style = "display:none";
            document.querySelector("#iproyal").style = "display:true";
            document.querySelector("#traffmonetizer").style = "display:none";
            document.querySelector("#resultDiv").style = "display:none";
            break
        case 4:
            document.querySelector("#honeygain").style = "display:none";
            document.querySelector("#iproyal").style = "display:none";
            document.querySelector("#traffmonetizer").style = "display:true";
            document.querySelector("#resultDiv").style = "display:none";
            break;
        default:
            document.querySelector("#honeygain").style = "display:none";
            document.querySelector("#iproyal").style = "display:none";
            document.querySelector("#traffmonetizer").style = "display:none";
            document.querySelector("#resultDiv").style = "display:none";
    }
});
$('#data').on('input', function(e) {
    let data = document.querySelector("#data");
    let dataArr = data.value.split("\n");
    document.querySelector("#counter").textContent = `Proxy count : ${dataArr.length}`
});

$("#proccess_btn").click(function() {
    let data = document.querySelector("#data");
    if (data.value == "") {
        alert("Please Check The input");
        return;
    }
    let dataArr = data.value.split("\n");
    document.querySelector("#result").textContent = "";
    switch (index){
        case 0:
            alert("Please Select Type First");
            break;
        case 1:
            for (let i = 0; i < dataArr.length; i++) {
                let proxy = dataArr[i].split(":");
                let ip = proxy[0]
                let port = proxy[1]
                let email = document.querySelector("#honney-email").value;
                let password = document.querySelector("#honney-password").value;
                document.querySelector("#result").textContent += `docker run -d -i -t --network mynet --privileged -e EMAIL=${email} -e PASSWORD=${password} -e DEVICE=${i+1} -e PROXY_SERVER=${ip} -e PROXY_PORT=${port} honneygainv1\n`
                document.querySelector("#resultDiv").style = "display:true"
                setTimeout(function() {
                    document.querySelector("#resultDiv").scrollIntoView();
                }, 300);
            }
            break;
        case 2:
            for (let i = 0; i < dataArr.length; i++) {
                let proxy = dataArr[i].split(":");
                let ip = proxy[0]
                let port = proxy[1]
                document.querySelector("#result").textContent += `docker run -d -i -t --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v $HOME/earnapp-data-${i+1}:/etc/earnapp --name EarnApp-${i+1} -e PROXY_SERVER=${ip} -e PROXY_PORT=${port} earnappv1\n`
                document.querySelector("#resultDiv").style = "display:true"
                setTimeout(function() {
                    document.querySelector("#resultDiv").scrollIntoView();
                }, 300);
            }
            break;
        case 3:
            for (let i = 0; i < dataArr.length; i++) {
                let proxy = dataArr[i].split(":");
                let ip = proxy[0]
                let port = proxy[1]
                let email = document.querySelector("#royal-email").value;
                let password = document.querySelector("#royal-password").value;
                document.querySelector("#result").textContent += `docker run -d -i -t --network mynet --privileged -e EMAIL=${email} -e PASSWORD=${password} -e DEVICE=${i+1} -e PROXY_SERVER=${ip} -e PROXY_PORT=${port} iproyal-pawnsv1\n`
                document.querySelector("#resultDiv").style = "display:true"
                setTimeout(function() {
                    document.querySelector("#resultDiv").scrollIntoView();
                }, 300);
            }
            break;
        case 4:
            for (let i = 0; i < dataArr.length; i++) {
                let proxy = dataArr[i].split(":");
                let ip = proxy[0]
                let port = proxy[1]
                let token = document.querySelector("#traff-token").value;
                document.querySelector("#result").textContent += `docker run -d -i --privileged -e PROXY_SERVER=${ip} -e PROXY_PORT=${port} -e TOKEN="${token}" traffmonetizerv1\n`
                document.querySelector("#resultDiv").style = "display:true"
                setTimeout(function() {
                    document.querySelector("#resultDiv").scrollIntoView();
                }, 300);
            }
            break;
    }
});
