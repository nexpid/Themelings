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
        var2 = _closure1_slot7;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot5;
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
    var _closure1_slot8 = var1;
    var1 = function RiveGraphic(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.rive;
            var9 = var1.riveProps;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = {};
case 2:
            var1 = _closure1_slot7;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var8.image;
            var1['style'] = var6;
            var6 = _closure1_slot5;
            var5 = {};
            var11 = var5;
            var10 = var9;
            var9 = copyDataProperties(var11, var10);
            var9 = var8.image;
            var8 = 'style';
            var5[7] = var9;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {'21/9': 2.3333333333333335, '16/9': 1.7777777777777777, '6/4': 1.5, '2/1': 2, '1/1': 1};
    var _closure1_slot6 = var4;
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
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Graphic/native/Graphic.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Graphic(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var10 = var5.aspectRatio;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var10 = '16/9';
case 4:
            var7 = var5.style;
            var2 = null;
            var3 = Object.create(var2);
            var2 = 0;
            var3['aspectRatio'] = var2;
            var3['style'] = var2;
            var13 = {};
            var12 = var5;
            var11 = var3;
            var8 = copyDataProperties(var13, var12, var11);
            var _closure2_slot0 = var8;
            var2 = _closure1_slot7;
            var6 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 5;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.isImage;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var4 = var3.bind(var5)(var1);
                    var3 = var4.isRive;
                    var1 = _closure2_slot0;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!var3) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = _closure1_slot5;
                    var4 = _closure1_slot9;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var10 = var3;
                    var8 = copyDataProperties(var10, var9);
                    var1 = var7.bind(var5)(var4, var3);
case 8:
                    _fun0003_ip = 10; continue _fun0003;
case 6:
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var10 = var2;
                    var6 = copyDataProperties(var10, var9);
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.container;
            var6 = new Array(3);
            var6[0] = var8;
            var8 = {};
            var9 = _closure1_slot6;
            var9 = var9[var10];
            var8['aspectRatio'] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Graphic'] = var2;
    return var1;
})();