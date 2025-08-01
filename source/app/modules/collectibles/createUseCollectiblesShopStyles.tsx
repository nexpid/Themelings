// app/modules/collectibles/createUseCollectiblesShopStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = function getMidpointColor(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var1 = var3.toRgb;
        var4 = var1.bind(var3)();
        var1 = var2.toRgb;
        var1 = var1.bind(var2)();
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var8 = 2;
        var5 = var7[var8];
        var3 = undefined;
        var9 = var6.bind(var3)(var5);
        var6 = var9.getValueInColorGradientByPercentage;
        var10 = var4.r;
        var5 = new Array(3);
        var5[0] = var10;
        var10 = var4.g;
        var5[1] = var10;
        var4 = var4.b;
        var5[2] = var4;
        var10 = var1.r;
        var4 = new Array(3);
        var4[0] = var10;
        var10 = var1.g;
        var4[1] = var10;
        var1 = var1.b;
        var4[2] = var1;
        var1 = 50;
        var5 = var6.bind(var9)(var5, var4, var1);
        var4 = _closure1_slot3;
        var1 = 3;
        var4 = var4.bind(var3)(var5, var1);
        var5 = 0;
        var6 = var4[var5];
        var5 = 1;
        var5 = var4[var5];
        var4 = var4[var8];
        var2 = _closure1_slot1;
        var1 = var7[var1];
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['r'] = var6;
        var1['g'] = var5;
        var1['b'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = function getBackgroundColors(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var1 = var5.length;
            var3 = 0;
            if(!(var3 === var1)) { _fun0001_ip = 21; continue _fun0001 }
 17:
            var1 = undefined;
            return var1;
 21:
            var1 = var5.length;
            var2 = 1;
            if(!(var2 !== var1)) { _fun0001_ip = 149; continue _fun0001 }
 33:
            var1 = {};
            var6 = var5[var3];
            var1['primary'] = var6;
            var6 = var5[var2];
            var1['secondary'] = var6;
            var8 = _closure1_slot5;
            var9 = var5[var3];
            var6 = var5[var2];
            var7 = undefined;
            var10 = var8.bind(var7)(var9, var6);
            var9 = var10.setAlpha;
            var6 = 0.4;
            var6 = var9.bind(var10)(var6);
            var1['border'] = var6;
            var6 = var5[var3];
            var2 = var5[var2];
            var6 = var8.bind(var7)(var6, var2);
            var2 = var6.isLight;
            var2 = var2.bind(var6)();
            if(var2) { _fun0001_ip = 137; continue _fun0001 }
 129:
            var2 = var4.light;
            _fun0001_ip = 143; continue _fun0001;
 137:
            var2 = var4.dark;
 143:
            var1['label'] = var2;
            _fun0001_ip = 237; continue _fun0001;
 149:
            var2 = {};
            var6 = var5[var3];
            var2['primary'] = var6;
            var6 = var5[var3];
            var2['secondary'] = var6;
            var8 = var5[var3];
            var7 = var8.setAlpha;
            var6 = 0.4;
            var6 = var7.bind(var8)(var6);
            var2['border'] = var6;
            var5 = var5[var3];
            var3 = var5.isLight;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 224; continue _fun0001 }
 216:
            var3 = var4.light;
            _fun0001_ip = 230; continue _fun0001;
 224:
            var3 = var4.dark;
 230:
            var2['label'] = var3;
            var1 = var2;
 237:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function getButtonColors(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var1 = var5.length;
            var3 = 0;
            if(!(var3 === var1)) { _fun0002_ip = 21; continue _fun0002 }
 17:
            var1 = undefined;
            return var1;
 21:
            var1 = var5.length;
            var2 = 1;
            if(!(var2 !== var1)) { _fun0002_ip = 109; continue _fun0002 }
 33:
            var1 = {};
            var6 = var5[var3];
            var1['primary'] = var6;
            var6 = var5[var2];
            var1['secondary'] = var6;
            var8 = _closure1_slot5;
            var7 = var5[var3];
            var6 = var5[var2];
            var2 = undefined;
            var6 = var8.bind(var2)(var7, var6);
            var2 = var6.isLight;
            var2 = var2.bind(var6)();
            if(var2) { _fun0002_ip = 97; continue _fun0002 }
 89:
            var2 = var4.light;
            _fun0002_ip = 103; continue _fun0002;
 97:
            var2 = var4.dark;
 103:
            var1['text'] = var2;
            _fun0002_ip = 167; continue _fun0002;
 109:
            var2 = {};
            var6 = var5[var3];
            var2['primary'] = var6;
            var6 = var5[var3];
            var2['secondary'] = var6;
            var5 = var5[var3];
            var3 = var5.isLight;
            var3 = var3.bind(var5)();
            if(var3) { _fun0002_ip = 154; continue _fun0002 }
 146:
            var3 = var4.light;
            _fun0002_ip = 160; continue _fun0002;
 154:
            var3 = var4.dark;
 160:
            var2['text'] = var3;
            var1 = var2;
 167:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function desaturate(arg1, arg2) {
        var2 = arg1;
        var1 = var2.toHsl;
        var1 = var1.bind(var2)();
        var5 = var1.h;
        var6 = var1.s;
        var4 = var1.l;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['h'] = var5;
        var5 = arg2;
        var5 = var6 * var5;
        var1['s'] = var5;
        var1['l'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/createUseCollectiblesShopStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var9 = undefined;
                var7 = var4.bind(var9)(var3);
                var5 = var7.useStateFromStores;
                var3 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot4;
                    var1 = var1.saturation;
                    return var1;
                };
                var8 = var5.bind(var7)(var4, var3);
                var _closure3_slot0 = var8;
                var5 = null;
                if(!(var5 != var1)) { _fun0003_ip = 409; continue _fun0003 }
 73:
                var3 = {};
                var7 = _closure1_slot6;
                var10 = _closure2_slot0;
                var4 = var1.backgroundColors;
                var4 = var7.bind(var9)(var10, var4);
                var3['backgroundColors'] = var4;
                var7 = _closure1_slot7;
                var4 = var1.buttonColors;
                var4 = var7.bind(var9)(var10, var4);
                var3['buttonColors'] = var4;
                var1 = var1.confettiColors;
                var3['confettiColors'] = var1;
                var1 = 1;
                if(!(var1 !== var8)) { _fun0003_ip = 392; continue _fun0003 }
 145:
                var1 = {};
                var4 = var3.backgroundColors;
                var7 = var5 != var4;
                var4 = undefined;
                if(!var7) { _fun0003_ip = 261; continue _fun0003 }
 162:
                var7 = {};
                var11 = _closure1_slot8;
                var10 = var3.backgroundColors;
                var10 = var10.primary;
                var10 = var11.bind(var9)(var10, var8);
                var7['primary'] = var10;
                var10 = var3.backgroundColors;
                var10 = var10.secondary;
                var10 = var11.bind(var9)(var10, var8);
                var7['secondary'] = var10;
                var10 = var3.backgroundColors;
                var10 = var10.border;
                var10 = var11.bind(var9)(var10, var8);
                var7['border'] = var10;
                var10 = var3.backgroundColors;
                var10 = var10.label;
                var10 = var11.bind(var9)(var10, var8);
                var7['label'] = var10;
                var4 = var7;
 261:
                var1['backgroundColors'] = var4;
                var4 = var3.buttonColors;
                var5 = var5 != var4;
                var4 = undefined;
                if(!var5) { _fun0003_ip = 357; continue _fun0003 }
 281:
                var5 = {};
                var7 = _closure1_slot8;
                var6 = var3.buttonColors;
                var6 = var6.primary;
                var6 = var7.bind(var9)(var6, var8);
                var5['primary'] = var6;
                var6 = var3.buttonColors;
                var6 = var6.secondary;
                var6 = var7.bind(var9)(var6, var8);
                var5['secondary'] = var6;
                var6 = var3.buttonColors;
                var6 = var6.text;
                var6 = var7.bind(var9)(var6, var8);
                var5['text'] = var6;
                var4 = var5;
 357:
                var1['buttonColors'] = var4;
                var5 = var3.confettiColors;
                var4 = var5.map;
                var2 = function(arg1) {
                    var4 = _closure1_slot8;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1, var3);
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var1['confettiColors'] = var2;
                _fun0003_ip = 407; continue _fun0003;
 392:
                var2 = {};
                var13 = var2;
                var12 = var3;
                var3 = copyDataProperties(var13, var12);
                var1 = var2;
 407:
                return var1;
 409:
                var1 = {};
                return var1;
            }
        };
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();