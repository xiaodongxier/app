$(function () {
    var bgColor = [
        "linear-gradient(45deg, #ff9a9e66 0%, #fad0c466 99%, #fad0c466 100%)",
        "linear-gradient(to top, #a18cd166 0%, #fbc2eb66 100%)",
        "linear-gradient(to top, #fad0c466 0%, #ffd1ff66 100%)",
        "linear-gradient(to right, #ffecd266 0%, #fcb69f66 100%)",
        "linear-gradient(to right, #ff817766 0%, #ff867a66 0%, #ff8c7f66 21%, #f9918566 52%, #cf556c66 78%, #b12a5b66 100%)",
        "linear-gradient(to top, #ff9a9e66 0%, #fecfef66 99%, #fecfef66 100%)",
        "linear-gradient(120deg, #f6d36566 0%, #fda08566 100%)",
        "linear-gradient(to top, #fbc2eb66 0%, #a6c1ee66 100%)",
        "linear-gradient(to top, #fdcbf166 0%, #fdcbf166 1%, #e6dee966 100%)",
        "linear-gradient(120deg, #a1c4fd66 0%, #c2e9fb66 100%)",
        "linear-gradient(120deg, #d4fc7966 0%, #96e6a166 100%)",
        "linear-gradient(120deg, #84fab066 0%, #8fd3f466 100%)",
        "linear-gradient(to top, #cfd9df66 0%, #e2ebf066 100%)",
        "linear-gradient(120deg, #a6c0fe66 0%, #f6808466 100%)",
        "linear-gradient(120deg, #fccb9066 0%, #d57eeb66 100%)",
        "linear-gradient(120deg, #e0c3fc66 0%, #8ec5fc66 100%)",
        "linear-gradient(120deg, #f093fb66 0%, #f5576c66 100%)",
        "linear-gradient(120deg, #fdfbfb66 0%, #ebedee66 100%)",
        "linear-gradient(to right, #4facfe66 0%, #00f2fe66 100%)",
        "linear-gradient(to right, #43e97b66 0%, #38f9d766 100%)",
        "linear-gradient(to right, #fa709a66 0%, #fee14066 100%)",
        "linear-gradient(to top, #30cfd066 0%, #33086766 100%)",
        "linear-gradient(to top, #a8edea66 0%, #fed6e366 100%)",
        "linear-gradient(to top, #5ee7df66 0%, #b490ca66 100%)",
        "linear-gradient(to top, #d299c266 0%, #fef9d766 100%)",
        "linear-gradient(135deg, #f5f7fa66 0%, #c3cfe266 100%)",
        "radial-gradient(circle 248px at center, #16d9e366 0%, #30c7ec66 47%, #46aef766 100%)",
        "linear-gradient(135deg, #667eea66 0%, #764ba266 100%)",
        "linear-gradient(135deg, #fdfcfb66 0%, #e2d1c366 100%)",
        "linear-gradient(120deg, #89f7fe66 0%, #66a6ff66 100%)",
        "linear-gradient(to top, #fddb9266 0%, #d1fdff66 100%)",
        "linear-gradient(to top, #9890e366 0%, #b1f4cf66 100%)",
        "linear-gradient(to top, #ebc0fd66 0%, #d9ded866 100%)",
        "linear-gradient(to top, #96fbc466 0%, #f9f58666 100%)",
        "linear-gradient(180deg, #2af59866 0%, #009efd66 100%)",
        "linear-gradient(to top, #cd9cf266 0%, #f6f3ff66 100%)",
        "linear-gradient(to right, #e4afcb66 0%, #b8cbb866 0%, #b8cbb866 0%, #e2c58b66 30%, #c2ce9c66 64%, #7edbdc66 100%)",
        "linear-gradient(to right, #b8cbb866 0%, #b8cbb866 0%, #b465da66 0%, #cf6cc966 33%, #ee609c66 66%, #ee609c66 100%)",
        "linear-gradient(to right, #6a11cb66 0%, #2575fc66 100%)",
        // "linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)",
        "linear-gradient(to top, #37ecba66 0%, #72afd366 100%)",
        "linear-gradient(to top, #ebbba766 0%, #cfc7f866 100%)",
        "linear-gradient(to top, #fff1eb66 0%, #ace0f966 100%)",
        "linear-gradient(to right, #eea2a266 0%, #bbc1bf66 19%, #57c6e166 42%, #b49fda66 79%, #7ac5d866 100%)",
        "linear-gradient(to top, #c471f566 0%, #fa71cd66 100%)",
        "linear-gradient(to top, #48c6ef66 0%, #6f86d666 100%)",
        "linear-gradient(to right, #f78ca066 0%, #f9748f66 19%, #fd868c66 60%, #fe9a8b66 100%)",
        "linear-gradient(to top, #feada666 0%, #f5efef66 100%)",
        "linear-gradient(to top, #e6e9f066 0%, #eef1f566 100%)",
        "linear-gradient(to top, #accbee66 0%, #e7f0fd66 100%)",
        "linear-gradient(-20deg, #e9defa66 0%, #fbfcdb66 100%)",
        "linear-gradient(to top, #c1dfc466 0%, #deecdd66 100%)",
        "linear-gradient(to top, #0ba36066 0%, #3cba9266 100%)",
        "linear-gradient(to top, #00c6fb66 0%, #005bea66 100%)",
        "linear-gradient(to right, #74ebd566 0%, #9face666 100%)",
        "linear-gradient(to top, #6a85b666 0%, #bac8e066 100%)",
        "linear-gradient(to top, #a3bded66 0%, #6991c766 100%)",
        "linear-gradient(to top, #9795f066 0%, #fbc8d466 100%)",
        "linear-gradient(to top, #a7a6cb66 0%, #8989ba66 52%, #8989ba66 100%)",
        "linear-gradient(to top, #3f51b166 0%, #5a55ae66 13%, #7b5fac66 25%, #8f6aae66 38%, #a86aa466 50%, #cc6b8e66 62%, #f1827166 75%, #f3a46966 87%, #f7c97866 100%)",
        "linear-gradient(to top, #fcc5e466 0%, #fda34b66 15%, #ff788266 35%, #c8699e66 52%, #7046aa66 71%, #0c1db866 87%, #020f7566 100%)",
        "linear-gradient(to top, #dbdcd766 0%, #dddcd766 24%, #e2c9cc66 30%, #e7627d66 46%, #b8235a66 59%, #80135766 71%, #3d163566 84%, #1c1a2766 100%)",
        "linear-gradient(to top, #f43b4766 0%, #453a9466 100%)",
        "linear-gradient(to top, #4fb57666 0%, #44c48966 30%, #28a9ae66 46%, #28a2b766 59%, #4c778866 71%, #6c4f6366 86%, #432c3966 100%)",
        "linear-gradient(to top, #0250c566 0%, #d43f8d66 100%)",
        "linear-gradient(to top, #88d3ce66 0%, #6e45e266 100%)",
        "linear-gradient(to top, #d9afd966 0%, #97d9e166 100%)",
        "linear-gradient(to top, #7028e466 0%, #e5b2ca66 100%)",
        "linear-gradient(15deg, #13547a66 0%, #80d0c766 100%)",
        "linear-gradient(to left, #BDBBBE66 0%, #9D9EA366 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
        "linear-gradient(to top, #50528566 0%, #585e9266 12%, #65689f66 25%, #7474b066 37%, #7e7ebb66 50%, #8389c766 62%, #9795d466 75%, #a2a1dc66 87%, #b5aee466 100%)",
        "linear-gradient(to top, #ff084466 0%, #ffb19966 100%)",
        // "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
        "linear-gradient(45deg, #93a5cf66 0%, #e4efe966 100%)",
        // "linear-gradient(to right, #43434366 0%, black 100%)",
        "linear-gradient(to top, #0c348366 0%, #a2b6df66 100%, #6b8cce66 100%, #a2b6df66 100%)",
        "linear-gradient(45deg, #93a5cf66 0%, #e4efe966 100%)",
        "linear-gradient(to right, #92fe9d66 0%, #00c9ff66 100%)",
        "linear-gradient(to right, #ff758c66 0%, #ff7eb366 100%)",
        "linear-gradient(to right, #868f9666 0%, #59616466 100%)",
        "linear-gradient(to top, #c7908166 0%, #dfa57966 100%)",
        "linear-gradient(45deg, #8baaaa66 0%, #ae8b9c66 100%)",
        "linear-gradient(to right, #f8360066 0%, #f9d42366 100%)",
        "linear-gradient(-20deg, #b721ff66 0%, #21d4fd66 100%)",
        "linear-gradient(-20deg, #6e45e266 0%, #88d3ce66 100%)",
        "linear-gradient(-20deg, #d558c866 0%, #24d29266 100%)",
        "linear-gradient(60deg, #abecd666 0%, #fbed9666 100%)",
        "linear-gradient(to top, #d5d4d066 0%, #d5d4d066 1%, #eeeeec66 31%, #efeeec66 75%, #e9e9e766 100%)",
        "linear-gradient(to top, #5f72bd66 0%, #9b23ea66 100%)",
        "linear-gradient(to top, #09203f66 0%, #53789566 100%)",
        "linear-gradient(-20deg, #ddd6f366 0%, #faaca866 100%, #faaca866 100%)",
        "linear-gradient(-20deg, #dcb0ed66 0%, #99c99c66 100%)",
        "linear-gradient(to top, #f3e7e966 0%, #e3eeff66 99%, #e3eeff66 100%)",
        "linear-gradient(to top, #c71d6f66 0%, #d0969366 100%)",
        "linear-gradient(60deg, #96deda66 0%, #50c9c366 100%)",
        "linear-gradient(to top, #f7706266 0%, #fe519666 100%)",
        "linear-gradient(to top, #c4c5c766 0%, #dcdddf66 52%, #ebebeb66 100%)",
        "linear-gradient(to right, #a8caba66 0%, #5d415766 100%)",
        "linear-gradient(60deg, #29323c66 0%, #48556366 100%)",
        "linear-gradient(-60deg, #16a08566 0%, #f4d03f66 100%)",
        "linear-gradient(-60deg, #ff585866 0%, #f0981966 100%)",
        "linear-gradient(-20deg, #2b587666 0%, #4e437666 100%)",
        "linear-gradient(-20deg, #00cdac66 0%, #8ddad566 100%)",
        "linear-gradient(to top, #4481eb66 0%, #04befe66 100%)",
        "linear-gradient(to top, #dad4ec66 0%, #dad4ec66 1%, #f3e7e966 100%)",
        "linear-gradient(45deg, #874da266 0%, #c43a3066 100%)",
        "linear-gradient(to top, #4481eb66 0%, #04befe66 100%)",
        "linear-gradient(to top, #e8198b66 0%, #c7eafd66 100%)",
        // "radial-gradient(73% 147%, #EADFDF66 59%, #ECE2DF66 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)",
        "linear-gradient(-20deg, #f794a466 0%, #fdd6bd66 100%)",
        "linear-gradient(60deg, #64b3f466 0%, #c2e59c66 100%)",
        "linear-gradient(to top, #3b41c566 0%, #a981bb66 49%, #ffc8a966 100%)",
        "linear-gradient(to top, #0fd85066 0%, #f9f04766 100%)",
        "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e066 26%, #efefef66 48%, #d9d9d966 75%, #bcbcbc66 100%)",
        "linear-gradient(45deg, #ee9ca766 0%, #ffdde166 100%)",
        "linear-gradient(to right, #3ab5b066 0%, #3d99be66 31%, #56317a66 100%)",
        // // "radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)",
        "linear-gradient(to top, #209cff66 0%, #68e0cf66 100%)",
        "linear-gradient(to top, #bdc2e866 0%, #bdc2e866 1%, #e6dee966 100%)",
        "linear-gradient(to top, #e6b98066 0%, #eacda366 100%)",
        "linear-gradient(to top, #1e3c7266 0%, #1e3c7266 1%, #2a529866 100%)",
        "linear-gradient(to top, #d5dee766 0%, #ffafbd66 0%, #c9ffbf66 100%)",
        "linear-gradient(to top, #9be15d66 0%, #00e3ae66 100%)",
        "linear-gradient(to right, #ed6ea066 0%, #ec8c6966 100%)",
        "linear-gradient(to right, #ffc3a066 0%, #ffafbd66 100%)",
        "linear-gradient(to top, #cc208e66 0%, #6713d266 100%)",
        "linear-gradient(to top, #b3ffab66 0%, #12fff766 100%)",
        "linear-gradient(-45deg, #FFC79666 0%, #FF6B9566 100%)",
        "linear-gradient(to right, #24394966 0%, #517fa466 100%)",
        "linear-gradient(-20deg, #fc607666 0%, #ff9a4466 100%)",
        "linear-gradient(to top, #dfe9f366 0%, white 100%)",
        "linear-gradient(to right, #00dbde66 0%, #fc00ff66 100%)",
        "linear-gradient(to right, #f9d42366 0%, #ff4e5066 100%)",
        "linear-gradient(to top, #50cc7f66 0%, #f5d10066 100%)",
        "linear-gradient(to right, #0acffe66 0%, #495aff66 100%)",
        "linear-gradient(-20deg, #61616166 0%, #9bc5c366 100%)",
        // "radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)",
        "linear-gradient(60deg, #3d339366 0%, #2b76b966 37%, #2cacd166 65%, #35eb9366 100%)",
        "linear-gradient(to top, #df89b566 0%, #bfd9fe66 100%)",
        "linear-gradient(to right, #ed6ea066 0%, #ec8c6966 100%)",
        "linear-gradient(to right, #d7d2cc66 0%, #30435266 100%)",
        "linear-gradient(to top, #e14fad66 0%, #f9d42366 100%)",
        "linear-gradient(to top, #b224ef66 0%, #7579ff66 100%)",
        "linear-gradient(to right, #c1c16166 0%, #c1c16166 0%, #d4d4b166 100%)",
        "linear-gradient(to right, #ec77ab66 0%, #7873f566 100%)",
        "linear-gradient(to top, #007adf66 0%, #00ecbc66 100%)",
        "linear-gradient(-225deg, #20E2D766 0%, #F9FEA566 100%)",
        "linear-gradient(-225deg, #2CD8D566 0%, #C5C1FF66 56%, #FFBAC366 100%)",
        "linear-gradient(-225deg, #2CD8D566 0%, #6B8DD666 48%, #8E37D766 100%)",
        "linear-gradient(-225deg, #DFFFCD66 0%, #90F9C466 48%, #39F3BB66 100%)",
        "linear-gradient(-225deg, #5D9FFF66 0%, #B8DCFF66 48%, #6BBBFF66 100%)",
        "linear-gradient(-225deg, #A8BFFF66 0%, #884D8066 100%)",
        "linear-gradient(-225deg, #5271C466 0%, #B19FFF66 48%, #ECA1FE66 100%)",
        "linear-gradient(-225deg, #FFE29F66 0%, #FFA99F66 48%, #FF719A66 100%)",
        "linear-gradient(-225deg, #22E1FF66 0%, #1D8FE166 48%, #625EB166 100%)",
        "linear-gradient(-225deg, #B6CEE866 0%, #F578DC66 100%)",
        "linear-gradient(-225deg, #FFFEFF66 0%, #D7FFFE66 100%)",
        "linear-gradient(-225deg, #E3FDF566 0%, #FFE6FA66 100%)",
        "linear-gradient(-225deg, #7DE2FC66 0%, #B9B6E566 100%)",
        "linear-gradient(-225deg, #CBBACC66 0%, #2580B366 100%)",
        "linear-gradient(-225deg, #B7F8DB66 0%, #50A7C266 100%)",
        "linear-gradient(-225deg, #7085B666 0%, #87A7D966 50%, #DEF3F866 100%)",
        "linear-gradient(-225deg, #77FFD266 0%, #6297DB66 48%, #1EECFF66 100%)",
        "linear-gradient(-225deg, #AC32E466 0%, #7918F266 48%, #4801FF66 100%)",
        "linear-gradient(-225deg, #D4FFEC66 0%, #57F2CC66 48%, #4596FB66 100%)",
        "linear-gradient(-225deg, #9EFBD366 0%, #57E9F266 48%, #45D4FB66 100%)",
        "linear-gradient(-225deg, #473B7B66 0%, #3584A766 51%, #30D2BE66 100%)",
        "linear-gradient(-225deg, #65379B66 0%, #886AEA66 53%, #6457C666 100%)",
        "linear-gradient(-225deg, #A445B266 0%, #D4187266 52%, #FF006666 100%)",
        "linear-gradient(-225deg, #7742B266 0%, #F180FF66 52%, #FD8BD966 100%)",
        "linear-gradient(-225deg, #FF3CAC66 0%, #562B7C66 52%, #2B86C566 100%)",
        "linear-gradient(-225deg, #FF057C66 0%, #8D0B9366 50%, #32157566 100%)",
        "linear-gradient(-225deg, #FF057C66 0%, #7C64D566 48%, #4CC3FF66 100%)",
        "linear-gradient(-225deg, #69EACB66 0%, #EACCF866 48%, #6654F166 100%)",
        "linear-gradient(-225deg, #23155766 0%, #44107A66 29%, #FF136166 67%, #FFF80066 100%)",
        "linear-gradient(-225deg, #3D4E8166 0%, #5753C966 48%, #6E7FF366 100%)"
    ];
    var applist = $(".col-pc-12.content > ul > li");
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < applist.length; i++) {
        applist.eq(i).css({
            "background": bgColor[random(0, bgColor.length)]
        })
    }
})