$(function () {
    // var bgColor = [ "#ff9a9e80", "#fad0c4", "#fad0c4", "#a18cd1", "#fbc2eb", "#fad0c4", "#ffd1ff", "#ffecd2", "#fcb69f", "#ff8177", "#ff867a", "#ff8c7f", "#f99185", "#cf556c", "#b12a5b", "#ff9a9e", "#fecfef", "#fecfef", "#f6d365", "#fda085", "#fbc2eb", "#a6c1ee", "#fdcbf1", "#fdcbf1", "#e6dee9", "#a1c4fd", "#c2e9fb", "#d4fc79", "#96e6a1", "#84fab0", "#8fd3f4", "#cfd9df", "#e2ebf0", "#a6c0fe", "#f68084", "#fccb90", "#d57eeb", "#e0c3fc", "#8ec5fc", "#f093fb", "#f5576c", "#fdfbfb", "#ebedee", "#4facfe", "#00f2fe", "#43e97b", "#38f9d7", "#fa709a", "#fee140", "#30cfd0", "#330867", "#a8edea", "#fed6e3", "#5ee7df", "#b490ca", "#d299c2", "#fef9d7", "#f5f7fa", "#c3cfe2", "#16d9e3", "#30c7ec", "#46aef7", "#667eea", "#764ba2", "#fdfcfb", "#e2d1c3", "#89f7fe", "#66a6ff", "#fddb92", "#d1fdff", "#9890e3", "#b1f4cf", "#ebc0fd", "#d9ded8", "#96fbc4", "#f9f586", "#2af598", "#009efd", "#cd9cf2", "#f6f3ff", "#e4afcb", "#b8cbb8", "#b8cbb8", "#e2c58b", "#c2ce9c", "#7edbdc", "#b8cbb8", "#b8cbb8", "#b465da", "#cf6cc9", "#ee609c", "#ee609c", "#6a11cb", "#2575fc", "#37ecba", "#72afd3", "#ebbba7", "#cfc7f8", "#fff1eb", "#ace0f9", "#eea2a2", "#bbc1bf", "#57c6e1", "#b49fda", "#7ac5d8", "#c471f5", "#fa71cd", "#48c6ef", "#6f86d6", "#f78ca0", "#f9748f", "#fd868c", "#fe9a8b", "#feada6", "#f5efef", "#e6e9f0", "#eef1f5", "#accbee", "#e7f0fd", "#e9defa", "#fbfcdb", "#c1dfc4", "#deecdd", "#0ba360", "#3cba92", "#00c6fb", "#005bea", "#74ebd5", "#9face6", "#6a85b6", "#bac8e0", "#a3bded", "#6991c7", "#9795f0", "#fbc8d4", "#a7a6cb", "#8989ba", "#8989ba", "#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978", "#fcc5e4", "#fda34b", "#ff7882", "#c8699e", "#7046aa", "#0c1db8", "#020f75", "#dbdcd7", "#dddcd7", "#e2c9cc", "#e7627d", "#b8235a", "#801357", "#3d1635", "#1c1a27", "#f43b47", "#453a94", "#4fb576", "#44c489", "#28a9ae", "#28a2b7", "#4c7788", "#6c4f63", "#432c39", "#0250c5", "#d43f8d", "#88d3ce", "#6e45e2", "#d9afd9", "#97d9e1", "#7028e4", "#e5b2ca", "#13547a", "#80d0c7", "#BDBBBE", "#9D9EA3", "#505285", "#585e92", "#65689f", "#7474b0", "#7e7ebb", "#8389c7", "#9795d4", "#a2a1dc", "#b5aee4", "#ff0844", "#ffb199", "#93a5cf", "#e4efe9", "#434343", "#0c3483", "#a2b6df", "#6b8cce", "#a2b6df", "#93a5cf", "#e4efe9", "#92fe9d", "#00c9ff", "#ff758c", "#ff7eb3", "#868f96", "#596164", "#c79081", "#dfa579", "#8baaaa", "#ae8b9c", "#f83600", "#f9d423", "#b721ff", "#21d4fd", "#6e45e2", "#88d3ce", "#d558c8", "#24d292", "#abecd6", "#fbed96", "#d5d4d0", "#d5d4d0", "#eeeeec", "#efeeec", "#e9e9e7", "#5f72bd", "#9b23ea", "#09203f", "#537895", "#ddd6f3", "#faaca8", "#faaca8", "#dcb0ed", "#99c99c", "#f3e7e9", "#e3eeff", "#e3eeff", "#c71d6f", "#d09693", "#96deda", "#50c9c3", "#f77062", "#fe5196", "#c4c5c7", "#dcdddf", "#ebebeb", "#a8caba", "#5d4157", "#29323c", "#485563", "#16a085", "#f4d03f", "#ff5858", "#f09819", "#2b5876", "#4e4376", "#00cdac", "#8ddad5", "#4481eb", "#04befe", "#dad4ec", "#dad4ec", "#f3e7e9", "#874da2", "#c43a30", "#4481eb", "#04befe", "#e8198b", "#c7eafd", "#EADFDF", "#ECE2DF", "#f794a4", "#fdd6bd", "#64b3f4", "#c2e59c", "#3b41c5", "#a981bb", "#ffc8a9", "#0fd850", "#f9f047", "#e0e0e0", "#efefef", "#d9d9d9", "#bcbcbc", "#ee9ca7", "#ffdde1", "#3ab5b0", "#3d99be", "#56317a", "#209cff", "#68e0cf", "#bdc2e8", "#bdc2e8", "#e6dee9", "#e6b980", "#eacda3", "#1e3c72", "#1e3c72", "#2a5298", "#d5dee7", "#ffafbd", "#c9ffbf", "#9be15d", "#00e3ae", "#ed6ea0", "#ec8c69", "#ffc3a0", "#ffafbd", "#cc208e", "#6713d2", "#b3ffab", "#12fff7", "#FFC796", "#FF6B95", "#243949", "#517fa4", "#fc6076", "#ff9a44", "#dfe9f3", "#00dbde", "#fc00ff", "#f9d423", "#ff4e50", "#50cc7f", "#f5d100", "#0acffe", "#495aff", "#616161", "#9bc5c3", "#3d3393", "#2b76b9", "#2cacd1", "#35eb93", "#df89b5", "#bfd9fe", "#ed6ea0", "#ec8c69", "#d7d2cc", "#304352", "#e14fad", "#f9d423", "#b224ef", "#7579ff", "#c1c161", "#c1c161", "#d4d4b1", "#ec77ab", "#7873f5", "#007adf", "#00ecbc", "#20E2D7", "#F9FEA5", "#2CD8D5", "#C5C1FF", "#FFBAC3", "#2CD8D5", "#6B8DD6", "#8E37D7", "#DFFFCD", "#90F9C4", "#39F3BB", "#5D9FFF", "#B8DCFF", "#6BBBFF", "#A8BFFF", "#884D80", "#5271C4", "#B19FFF", "#ECA1FE", "#FFE29F", "#FFA99F", "#FF719A", "#22E1FF", "#1D8FE1", "#625EB1", "#B6CEE8", "#F578DC", "#FFFEFF", "#D7FFFE", "#E3FDF5", "#FFE6FA", "#7DE2FC", "#B9B6E5", "#CBBACC", "#2580B3", "#B7F8DB", "#50A7C2", "#7085B6", "#87A7D9", "#DEF3F8", "#77FFD2", "#6297DB", "#1EECFF", "#AC32E4", "#7918F2", "#4801FF", "#D4FFEC", "#57F2CC", "#4596FB", "#9EFBD3", "#57E9F2", "#45D4FB", "#473B7B", "#3584A7", "#30D2BE", "#65379B", "#886AEA", "#6457C6", "#A445B2", "#D41872", "#FF0066", "#7742B2", "#F180FF", "#FD8BD9", "#FF3CAC", "#562B7C", "#2B86C5", "#FF057C", "#8D0B93", "#321575", "#FF057C", "#7C64D5", "#4CC3FF", "#69EACB", "#EACCF8", "#6654F1", "#231557", "#44107A", "#FF1361", "#FFF800", "#3D4E81", "#5753C9", "#6E7FF3"];;
    // 半透明.5
    var bgColor = [ "#ff9a9e80", "#fad0c480", "#fad0c480", "#a18cd180", "#fbc2eb80", "#fad0c480", "#ffd1ff80", "#ffecd280", "#fcb69f80", "#ff817780", "#ff867a80", "#ff8c7f80", "#f9918580", "#cf556c80", "#b12a5b80", "#ff9a9e80", "#fecfef80", "#fecfef80", "#f6d36580", "#fda08580", "#fbc2eb80", "#a6c1ee80", "#fdcbf180", "#fdcbf180", "#e6dee980", "#a1c4fd80", "#c2e9fb80", "#d4fc7980", "#96e6a180", "#84fab080", "#8fd3f480", "#cfd9df80", "#e2ebf080", "#a6c0fe80", "#f6808480", "#fccb9080", "#d57eeb80", "#e0c3fc80", "#8ec5fc80", "#f093fb80", "#f5576c80", "#fdfbfb80", "#ebedee80", "#4facfe80", "#00f2fe80", "#43e97b80", "#38f9d780", "#fa709a80", "#fee14080", "#30cfd080", "#33086780", "#a8edea80", "#fed6e380", "#5ee7df80", "#b490ca80", "#d299c280", "#fef9d780", "#f5f7fa80", "#c3cfe280", "#16d9e380", "#30c7ec80", "#46aef780", "#667eea80", "#764ba280", "#fdfcfb80", "#e2d1c380", "#89f7fe80", "#66a6ff80", "#fddb9280", "#d1fdff80", "#9890e380", "#b1f4cf80", "#ebc0fd80", "#d9ded880", "#96fbc480", "#f9f58680", "#2af59880", "#009efd80", "#cd9cf280", "#f6f3ff80", "#e4afcb80", "#b8cbb880", "#b8cbb880", "#e2c58b80", "#c2ce9c80", "#7edbdc80", "#b8cbb880", "#b8cbb880", "#b465da80", "#cf6cc980", "#ee609c80", "#ee609c80", "#6a11cb80", "#2575fc80", "#37ecba80", "#72afd380", "#ebbba780", "#cfc7f880", "#fff1eb80", "#ace0f980", "#eea2a280", "#bbc1bf80", "#57c6e180", "#b49fda80", "#7ac5d880", "#c471f580", "#fa71cd80", "#48c6ef80", "#6f86d680", "#f78ca080", "#f9748f80", "#fd868c80", "#fe9a8b80", "#feada680", "#f5efef80", "#e6e9f080", "#eef1f580", "#accbee80", "#e7f0fd80", "#e9defa80", "#fbfcdb80", "#c1dfc480", "#deecdd80", "#0ba36080", "#3cba9280", "#00c6fb80", "#005bea80", "#74ebd580", "#9face680", "#6a85b680", "#bac8e080", "#a3bded80", "#6991c780", "#9795f080", "#fbc8d480", "#a7a6cb80", "#8989ba80", "#8989ba80", "#3f51b180", "#5a55ae80", "#7b5fac80", "#8f6aae80", "#a86aa480", "#cc6b8e80", "#f1827180", "#f3a46980", "#f7c97880", "#fcc5e480", "#fda34b80", "#ff788280", "#c8699e80", "#7046aa80", "#0c1db880", "#020f7580", "#dbdcd780", "#dddcd780", "#e2c9cc80", "#e7627d80", "#b8235a80", "#80135780", "#3d163580", "#1c1a2780", "#f43b4780", "#453a9480", "#4fb57680", "#44c48980", "#28a9ae80", "#28a2b780", "#4c778880", "#6c4f6380", "#432c3980", "#0250c580", "#d43f8d80", "#88d3ce80", "#6e45e280", "#d9afd980", "#97d9e180", "#7028e480", "#e5b2ca80", "#13547a80", "#80d0c780", "#BDBBBE80", "#9D9EA380", "#50528580", "#585e9280", "#65689f80", "#7474b080", "#7e7ebb80", "#8389c780", "#9795d480", "#a2a1dc80", "#b5aee480", "#ff084480", "#ffb19980", "#93a5cf80", "#e4efe980", "#43434380", "#0c348380", "#a2b6df80", "#6b8cce80", "#a2b6df80", "#93a5cf80", "#e4efe980", "#92fe9d80", "#00c9ff80", "#ff758c80", "#ff7eb380", "#868f9680", "#59616480", "#c7908180", "#dfa57980", "#8baaaa80", "#ae8b9c80", "#f8360080", "#f9d42380", "#b721ff80", "#21d4fd80", "#6e45e280", "#88d3ce80", "#d558c880", "#24d29280", "#abecd680", "#fbed9680", "#d5d4d080", "#d5d4d080", "#eeeeec80", "#efeeec80", "#e9e9e780", "#5f72bd80", "#9b23ea80", "#09203f80", "#53789580", "#ddd6f380", "#faaca880", "#faaca880", "#dcb0ed80", "#99c99c80", "#f3e7e980", "#e3eeff80", "#e3eeff80", "#c71d6f80", "#d0969380", "#96deda80", "#50c9c380", "#f7706280", "#fe519680", "#c4c5c780", "#dcdddf80", "#ebebeb80", "#a8caba80", "#5d415780", "#29323c80", "#48556380", "#16a08580", "#f4d03f80", "#ff585880", "#f0981980", "#2b587680", "#4e437680", "#00cdac80", "#8ddad580", "#4481eb80", "#04befe80", "#dad4ec80", "#dad4ec80", "#f3e7e980", "#874da280", "#c43a3080", "#4481eb80", "#04befe80", "#e8198b80", "#c7eafd80", "#EADFDF80", "#ECE2DF80", "#f794a480", "#fdd6bd80", "#64b3f480", "#c2e59c80", "#3b41c580", "#a981bb80", "#ffc8a980", "#0fd85080", "#f9f04780", "#e0e0e080", "#efefef80", "#d9d9d980", "#bcbcbc80", "#ee9ca780", "#ffdde180", "#3ab5b080", "#3d99be80", "#56317a80", "#209cff80", "#68e0cf80", "#bdc2e880", "#bdc2e880", "#e6dee980", "#e6b98080", "#eacda380", "#1e3c7280", "#1e3c7280", "#2a529880", "#d5dee780", "#ffafbd80", "#c9ffbf80", "#9be15d80", "#00e3ae80", "#ed6ea080", "#ec8c6980", "#ffc3a080", "#ffafbd80", "#cc208e80", "#6713d280", "#b3ffab80", "#12fff780", "#FFC79680", "#FF6B9580", "#24394980", "#517fa480", "#fc607680", "#ff9a4480", "#dfe9f380", "#00dbde80", "#fc00ff80", "#f9d42380", "#ff4e5080", "#50cc7f80", "#f5d10080", "#0acffe80", "#495aff80", "#61616180", "#9bc5c380", "#3d339380", "#2b76b980", "#2cacd180", "#35eb9380", "#df89b580", "#bfd9fe80", "#ed6ea080", "#ec8c6980", "#d7d2cc80", "#30435280", "#e14fad80", "#f9d42380", "#b224ef80", "#7579ff80", "#c1c16180", "#c1c16180", "#d4d4b180", "#ec77ab80", "#7873f580", "#007adf80", "#00ecbc80", "#20E2D780", "#F9FEA580", "#2CD8D580", "#C5C1FF80", "#FFBAC380", "#2CD8D580", "#6B8DD680", "#8E37D780", "#DFFFCD80", "#90F9C480", "#39F3BB80", "#5D9FFF80", "#B8DCFF80", "#6BBBFF80", "#A8BFFF80", "#884D8080", "#5271C480", "#B19FFF80", "#ECA1FE80", "#FFE29F80", "#FFA99F80", "#FF719A80", "#22E1FF80", "#1D8FE180", "#625EB180", "#B6CEE880", "#F578DC80", "#FFFEFF80", "#D7FFFE80", "#E3FDF580", "#FFE6FA80", "#7DE2FC80", "#B9B6E580", "#CBBACC80", "#2580B380", "#B7F8DB80", "#50A7C280", "#7085B680", "#87A7D980", "#DEF3F880", "#77FFD280", "#6297DB80", "#1EECFF80", "#AC32E480", "#7918F280", "#4801FF80", "#D4FFEC80", "#57F2CC80", "#4596FB80", "#9EFBD380", "#57E9F280", "#45D4FB80", "#473B7B80", "#3584A780", "#30D2BE80", "#65379B80", "#886AEA80", "#6457C680", "#A445B280", "#D4187280", "#FF006680", "#7742B280", "#F180FF80", "#FD8BD980", "#FF3CAC80", "#562B7C80", "#2B86C580", "#FF057C80", "#8D0B9380", "#32157580", "#FF057C80", "#7C64D580", "#4CC3FF80", "#69EACB80", "#EACCF880", "#6654F180", "#23155780", "#44107A80", "#FF136180", "#FFF80080", "#3D4E8180", "#5753C980", "#6E7FF3"];;
    var applist = $(".col-pc-12.content > ul > li");
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for(var i=0;i<applist.length;i++){
        applist.eq(i).css({
            "background": bgColor[random(0, bgColor.length)]
        })
    }
})




// var list  = $(".gradient__copy_button");
// for(var i=0;i<list.length;i++){
//     console.log(list.eq(i).attr("data-full-screen-gradient"))
// }

// $("body").before('<textarea id="textarea" class="video_con" style="width: 96%;height: 200px;border: 1px solid red;margin:0 2%;font-size: .16rem;""></textarea id="">')
// $(".cms").click(function () {
//     var templateId = $(".gradient__copy_button");
//     var content = "";
//     for (var i = 0; i < templateId.length; i++) {
//         content += " 图片地址:" + templateId.eq(i).attr("data-full-screen-gradient") + "\n\n"
//     }
//     $("#textarea").val(content)
// })