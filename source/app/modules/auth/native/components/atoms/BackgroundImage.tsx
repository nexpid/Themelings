// app/modules/auth/native/components/atoms/BackgroundImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/atoms/BackgroundImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BackgroundImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.backgroundImageSource;
            var _closure2_slot0 = var9;
            var8 = var2.backgroundImageCover;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            _closure2_slot2 = var7;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure1_slot6;
                    var3 = var2.absoluteFill;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var5 = _closure2_slot1;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = {};
                    var6 = '100%';
                    var5['width'] = var6;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var5 = {'width': '100%', 'height': '100%'};
case 6:
                    var2[1] = var5;
                    var1['style'] = var2;
                    var5 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var2);
                    var5 = var7.isThemeDark;
                    var2 = _closure2_slot2;
                    var2 = var5.bind(var7)(var2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = 6;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    _fun0002_ip = 11; continue _fun0002;
case 9:
                    var4 = 5;
                    var4 = var7[var4];
                    var2 = var5.bind(var6)(var4);
case 11:
                    _fun0002_ip = 12; continue _fun0002;
case 7:
                    var2 = _closure2_slot0;
case 12:
                    var1['source'] = var2;
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = _closure1_slot6;
            var6 = var6.absoluteFill;
            var1['style'] = var6;
            var6 = _closure1_slot4;
            var5 = {};
            var11 = var5;
            var7 = copyDataProperties(var11, var10);
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();