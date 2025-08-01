// app/modules/canvas/AssetMap.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _loadAssetMap() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 118; continue _fun0001 }
 9:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var2 = _closure1_slot7;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var9 = var3;
                    var2 = new var9[var2](var8);
                    var3 = var2 instanceof Object ? var2 : var3;
                    _closure4_slot0 = var3;
                    var2 = global;
                    var7 = var2.Object;
                    var6 = var7.entries;
                    var5 = arg1;
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.map;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var6 = arg1;
                            var2 = var6[Symbol.iterator];
                            var6 = var2().next;
                            var4 = var6().value;
                            var3 = var2;
                            var8 = undefined;
                            var3 = var3 === var8;
                            var5 = undefined;
                            if(var3) { _fun0002_ip = 29; continue _fun0002 }
 26:
                            var5 = var4;
 29:
                            var _closure5_slot0 = var5;
                            var4 = undefined;
                            if(var3) { _fun0002_ip = 63; continue _fun0002 }
 38:
                            var7 = var6().value;
                            var6 = var2;
                            var6 = var6 === var8;
                            var4 = undefined;
                            var3 = var6;
                            if(var6) { _fun0002_ip = 63; continue _fun0002 }
 57:
                            var4 = var7;
                            var3 = var6;
 63:
                            var _closure5_slot1 = var4;
                            if(var3) { _fun0002_ip = 73; continue _fun0002 }
 70:
                            var2.return();
 73:
                            var3 = _closure4_slot0;
                            var2 = var3.loadRemoteImage;
                            var3 = var2.bind(var3)(var5, var4);
                            var2 = var3.catch;
                            var1 = function(arg1) {
                                var6 = _closure1_slot5;
                                var5 = var6.warn;
                                var8 = _closure5_slot0;
                                var7 = _closure5_slot1;
                                var10 = 'Failed to load canvas asset';
                                var9 = arg1;
                                var11 = var6;
                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var2.Promise;
                    var2 = var4.all;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=106);
 104:
                    return var2;
 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 115; continue _fun0001 }
 112:
                    return var3;
 115:
                    return var2;
 118:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'AssetMap';
    var13 = var5;
    var2 = new var13[var8](var12, var11);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot5 = var2;
    var2 = ['./fonts/ggsans-400-normal.ttf', './fonts/ggsans-700-bold.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-400-normal.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-700-bold.ttf'];
    var _closure1_slot6 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function AssetMap() {
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot1;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = {};
            var3['assets'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.Skia;
            var4 = var2.TypefaceFontProvider;
            var2 = var4.Make;
            var2 = var2.bind(var4)();
            var3['fontManager'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'loadFonts';
        var5['key'] = var2;
        var2 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.Skia;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.all;
            var5 = _closure1_slot6;
            var4 = var5.map;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 109; continue _fun0003 }
 7:
                            var2 = _closure3_slot1;
                            var4 = var2.Data;
                            var3 = var4.fromURI;
                            var2 = arg1;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=38);
 36:
                            return var2;
 38:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 106; continue _fun0003 }
 44:
                            var3 = _closure3_slot1;
                            var4 = var3.Typeface;
                            var3 = var4.MakeFreeTypeFaceFromData;
                            var3 = var3.bind(var4)(var2);
                            var4 = null;
                            if(!(var4 != var3)) { _fun0003_ip = 103; continue _fun0003 }
 71:
                            var5 = _closure3_slot0;
                            var6 = var5.fontManager;
                            if(!(var4 != var6)) { _fun0003_ip = 103; continue _fun0003 }
 85:
                            var5 = var6.registerFont;
                            var4 = 'gg sans';
                            var4 = var5.bind(var6)(var3, var4);
 103:
                            return var3;
 106:
                            return var2;
 109:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var1.bind(var6)();
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var2;
        var2 = new Array(4);
        var2[0] = var5;
        var5 = {};
        var7 = 'loadRemoteImage';
        var5['key'] = var7;
        var8 = _closure1_slot4;
        var1 = undefined;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 125; continue _fun0004 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.Skia;
                    var5 = var3.Data;
                    var4 = var5.fromURI;
                    var2 = arg2;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=62);
 60:
                    return var2;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 122; continue _fun0004 }
 68:
                    var4 = var3.Image;
                    var3 = var4.MakeImageFromEncoded;
                    var5 = var3.bind(var4)(var2);
                    var3 = this;
                    var4 = var3.assets;
                    var3 = arg1;
                    var4[var3] = var5;
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.resolve;
                    var3 = var3.bind(var4)();
                    return var3;
 122:
                    return var2;
 125:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function loadRemoteImage() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var2 = var1.assets;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'has';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.assets;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var6;
        var2[3] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot7 = var2;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/canvas/AssetMap.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var4 = function loadAssetMap() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['loadAssetMap'] = var4;
    var3['AssetMap'] = var2;
    return var1;
})();