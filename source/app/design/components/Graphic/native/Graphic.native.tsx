// app/design/components/Graphic/native/Graphic.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ImageGraphic(arg1) {
        var1 = arg1;
        var6 = var1.src;
        var2 = _closure1_slot6;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 4;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['source'] = var6;
        var5 = var5.image;
        var1['style'] = var5;
        var5 = 'contain';
        var1['resizeMode'] = var5;
        var5 = true;
        var1['accessibilityElementsHidden'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {'21/9': 2.3333333333333335, '16/9': 1.7777777777777777, '6/4': 1.5, '2/1': 2, '1/1': 1};
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['container'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['image'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Graphic/native/Graphic.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Graphic(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var12 = var3.aspectRatio;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = '16/9';
case 2:
            var8 = var3.style;
            var5 = null;
            var2 = Object.create(var5);
            var1 = 0;
            var2['aspectRatio'] = var1;
            var2['style'] = var1;
            var15 = {};
            var14 = var3;
            var13 = var2;
            var9 = copyDataProperties(var15, var14, var13);
            var1 = _closure1_slot6;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var10 = var7.container;
            var7 = new Array(3);
            var7[0] = var10;
            var10 = {};
            var11 = _closure1_slot5;
            var11 = var11[var12];
            var10['aspectRatio'] = var11;
            var7[1] = var10;
            var7[2] = var8;
            var1['style'] = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 5;
            var7 = var10[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isImage;
            var7 = var7.bind(var8)(var9);
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot4;
            var7 = _closure1_slot7;
            var6 = {};
            var15 = var6;
            var14 = var9;
            var9 = copyDataProperties(var15, var14);
            var5 = var8.bind(var4)(var7, var6);
case 4:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Graphic'] = var2;
    return var1;
})();