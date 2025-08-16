// app/modules/voice_panel/native/card/DominantColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function getCachedSourceFromURI(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot8;
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var8 = null;
            if(!(var8 == var1)) { _fun0001_ip = 84; continue _fun0001 }
 26:
            var6 = 'number';
            var5 = typeof var4;
            var3 = var4;
            if(!(var6 !== var5)) { _fun0001_ip = 81; continue _fun0001 }
 40:
            var6 = var8 == var4;
            var5 = null;
            if(var6) { _fun0001_ip = 78; continue _fun0001 }
 49:
            var6 = var4.trim;
            var7 = var6.bind(var4)();
            var6 = '';
            var5 = null;
            if(!(var6 !== var7)) { _fun0001_ip = 78; continue _fun0001 }
 69:
            var6 = {};
            var6['uri'] = var4;
            var5 = var6;
 78:
            var3 = var5;
 81:
            var1 = var3;
 84:
            var3 = _closure1_slot8;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function useDominantRGBFromImage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useRef;
            var1 = true;
            var1 = var4.bind(var5)(var1);
            var _closure2_slot1 = var1;
            var7 = _closure1_slot4;
            var5 = var7.useEffect;
            var4 = function() {
                var1 = function() {
                    var2 = _closure2_slot1;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var7)(var4, var1);
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var8 = null;
            var9 = var8 != var6;
            var7 = undefined;
            var1 = undefined;
            if(!var9) { _fun0002_ip = 94; continue _fun0002 }
 80:
            var10 = _closure1_slot7;
            var9 = var10.get;
            var1 = var9.bind(var10)(var6);
 94:
            if(!(var8 == var1)) { _fun0002_ip = 156; continue _fun0002 }
 98:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 4;
            var8 = var12[var8];
            var10 = var9.bind(var7)(var8);
            var9 = var10.hexToRgb;
            var11 = _closure1_slot1;
            var8 = 5;
            var8 = var12[var8];
            var8 = var11.bind(var7)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.PRIMARY_800;
            var1 = var9.bind(var10)(var8);
 156:
            var5 = var4.bind(var5)(var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var5 = var4.bind(var7)(var5, var1);
            var1 = 0;
            var1 = var5[var1];
            var4 = 1;
            var4 = var5[var4];
            var _closure2_slot2 = var4;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 != var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(!var6) { _fun0003_ip = 43; continue _fun0003 }
 22:
                    var8 = _closure1_slot7;
                    var7 = var8.get;
                    var6 = _closure2_slot0;
                    var3 = var7.bind(var8)(var6);
 43:
                    var _closure3_slot0 = var3;
                    var6 = _closure2_slot0;
                    if(!(var4 != var6)) { _fun0003_ip = 223; continue _fun0003 }
 58:
                    if(!(var4 != var3)) { _fun0003_ip = 83; continue _fun0003 }
 62:
                    var6 = _closure2_slot2;
                    var3 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure3_slot0;
                            var1 = var4;
                            if(!(var3 !== var4)) { _fun0004_ip = 62; continue _fun0004 }
 17:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 6;
                            var3 = var6[var3];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var3);
                            var3 = _closure3_slot0;
                            var3 = var5.bind(var6)(var3, var4);
                            var1 = var4;
                            if(var3) { _fun0004_ip = 62; continue _fun0004 }
 58:
                            var1 = _closure3_slot0;
 62:
                            return var1;
                        }
                    };
                    var3 = var6.bind(var1)(var3);
                    _fun0003_ip = 223; continue _fun0003;
 83:
                    var6 = _closure1_slot9;
                    var5 = _closure2_slot0;
                    var8 = var6.bind(var1)(var5);
                    if(!(var4 != var8)) { _fun0003_ip = 223; continue _fun0003 }
 103:
                    var5 = 'number';
                    var4 = typeof var8;
                    if(!(var5 !== var4)) { _fun0003_ip = 152; continue _fun0003 }
 114:
                    var4 = _closure1_slot5;
                    var6 = var4.ImageManager;
                    var5 = var6.getDominantColors;
                    var7 = _closure1_slot6;
                    var4 = var7.resolveAssetSource;
                    var4 = var4.bind(var7)(var8);
                    var5 = var5.bind(var6)(var4);
                    _fun0003_ip = 188; continue _fun0003;
 152:
                    var4 = _closure1_slot5;
                    var6 = var4.ImageManager;
                    var4 = var6.getDominantColorsLocalAsset;
                    var7 = _closure1_slot6;
                    var3 = var7.resolveAssetSource;
                    var3 = var3.bind(var7)(var8);
                    var5 = var4.bind(var6)(var3);
 188:
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var6 = _closure1_slot3;
                            var1 = arg1;
                            var4 = 0;
                            var5 = var1[var4];
                            var1 = undefined;
                            var3 = 3;
                            var5 = var6.bind(var1)(var5, var3);
                            var3 = {};
                            var4 = var5[var4];
                            var3['r'] = var4;
                            var4 = 1;
                            var4 = var5[var4];
                            var3['g'] = var4;
                            var4 = 2;
                            var4 = var5[var4];
                            var3['b'] = var4;
                            var6 = _closure1_slot7;
                            var5 = var6.set;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var6)(var4, var3);
                            var4 = _closure2_slot1;
                            var4 = var4.current;
                            if(!var4) { _fun0005_ip = 103; continue _fun0005 }
 94:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var1)(var3);
 103:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 223:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.NativeModules;
    var _closure1_slot5 = var9;
    var6 = var6.Image;
    var _closure1_slot6 = var6;
    var6 = 3;
    var9 = var8[var6];
    var13 = var10.bind(var1)(var9);
    var11 = {};
    var9 = 1000;
    var11['max'] = var9;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var17 = var12;
    var16 = var11;
    var11 = new var17[var13](var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot7 = var11;
    var6 = var8[var6];
    var10 = var10.bind(var1)(var6);
    var6 = {};
    var6['max'] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var17 = var9;
    var16 = var6;
    var6 = new var17[var10](var16, var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_panel/native/card/DominantColorUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getCachedSourceFromURI'] = var5;
    var3['useDominantRGBFromImage'] = var4;
    var2 = function useDominantColorFromImage(arg1) {
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var13 = var1.r;
        var11 = var1.g;
        var9 = var1.b;
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var14 = 'rgb(';
        var2 = ', ';
        var8 = ')';
        var12 = var2;
        var10 = var2;
        var1 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var3['useDominantColorFromImage'] = var2;
    return var1;
})();