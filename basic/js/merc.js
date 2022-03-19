function createfn(){
    //debugger;
    var element = document.createElement("div");
    var para = document.createTextNode('The man who mistook his wife for a hat');
     para.className = "mystyle";
    element.appendChild(para);
    document.getElementsByTagName('body')[0].appendChild(element);

    }
    window.onload=createfn();