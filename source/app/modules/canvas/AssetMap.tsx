// app/modules/canvas/AssetMap.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var8 = metroImportDefault;
        var12 = exports;
        var9 = dependencyMap;
        var5 = require;
        var6 = var8;
        var2 = var12;
        var3 = var9;
        var1 = function _loadAssetMap() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var2 = _closure1_slot6;
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
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var6 = arg1;
                                var2 = var6[Symbol.iterator];
                                var6 = var2().next;
                                var4 = var6().value;
                                var3 = var2;
                                var8 = undefined;
                                var3 = var3 === var8;
                                var5 = undefined;
                                if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                                var5 = var4;
case 4:
                                var _closure5_slot0 = var5;
                                var4 = undefined;
                                if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var7 = var6().value;
                                var6 = var2;
                                var6 = var6 === var8;
                                var4 = undefined;
                                var3 = var6;
                                if(var6) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                                var4 = var7;
                                var3 = var6;
case 6:
                                var _closure5_slot1 = var4;
                                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var2.return();
case 9:
                                var3 = _closure4_slot0;
                                var2 = var3.loadRemoteImage;
                                var3 = var2.bind(var3)(var5, var4);
                                var2 = var3.catch;
                                var1 = function(arg1) {
                                    var6 = _closure1_slot4;
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
case 11:
                        return var2;
case 12:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        return var3;
case 13:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot7 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot7 = var1;
        var1 = global;
        var11 = var1.Object;
        var10 = var11.defineProperty;
        var7 = {};
        var1 = true;
        var7['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var12, var1, var7);
        var1 = 0;
        var7 = var9[var1];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var _closure1_slot1 = var7;
        var7 = 1;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot2 = var7;
        var7 = 2;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var _closure1_slot3 = var7;
case 13: // try_start_0
        var8 = var5;
        var9 = var3;
        var7 = 3;
        var7 = var9[var7];
        var7 = var8.bind(var1)(var7);
        var7 = var7.Skia;
        var _closure1_slot0 = var7;
case 15: // try_end0
        _fun0001_ip = 16; continue _fun0001;
case 17: // catch_target0
        CatchBlockStart(arg_register=6);
        var7 = null;
        _closure1_slot0 = var7;
case 16:
        var7 = var3;
        var3 = 4;
        var3 = var7[var3];
        var8 = var6.bind(var1)(var3);
        var3 = var8.prototype;
        var6 = Object.create(var3, {constructor: {value: var8}});
        var15 = 'AssetMap';
        var16 = var6;
        var3 = new var16[var8](var15, var14);
        var3 = var3 instanceof Object ? var3 : var6;
        var _closure1_slot4 = var3;
        var3 = ['./fonts/ggsans-400-normal.ttf', './fonts/ggsans-700-bold.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-400-normal.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-700-bold.ttf'];
        var _closure1_slot5 = var3;
        var3 = function() {
            var4 = _closure1_slot2;
            var3 = function AssetMap() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = this;
                    var5 = _closure1_slot1;
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var3, var4);
                    var4 = {};
                    var3['assets'] = var4;
                    var5 = _closure1_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = _closure1_slot0;
                    var4 = var2.TypefaceFontProvider;
                    var2 = var4.Make;
                    var2 = var2.bind(var4)();
                    var3['fontManager'] = var2;
case 18:
                    return var1;
                }
            };
            var _closure2_slot1 = var3;
            var5 = {};
            var2 = 'loadFonts';
            var5['key'] = var2;
            var2 = function value() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 10; continue _fun0005 }
case 20:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.all;
                    var5 = _closure1_slot5;
                    var4 = var5.map;
                    var6 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0006_ip = 2; continue _fun0006 }
case 21:
                                    var2 = _closure1_slot0;
                                    var5 = var2.Data;
                                    var4 = var5.fromURI;
                                    var2 = arg1;
                                    var2 = var4.bind(var5)(var2);
                                    SaveGenerator(address=38);
case 22:
                                    return var2;
case 7:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0006_ip = 13; continue _fun0006 }
case 23:
                                    var3 = _closure1_slot0;
                                    var4 = var3.Typeface;
                                    var3 = var4.MakeFreeTypeFaceFromData;
                                    var3 = var3.bind(var4)(var2);
                                    var4 = null;
                                    if(!(var4 != var3)) { _fun0006_ip = 14; continue _fun0006 }
case 24:
                                    var5 = _closure3_slot0;
                                    var6 = var5.fontManager;
                                    if(!(var4 != var6)) { _fun0006_ip = 14; continue _fun0006 }
case 25:
                                    var5 = var6.registerFont;
                                    var4 = 'gg sans';
                                    var4 = var5.bind(var6)(var3, var4);
case 14:
                                    return var3;
case 13:
                                    return var2;
case 2:
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
                    var1 = undefined;
                    var1 = var6.bind(var1)();
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 26; continue _fun0005;
case 10:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var1 = var2.bind(var3)();
case 26:
                    return var1;
                }
            };
            var5['value'] = var2;
            var2 = new Array(4);
            var2[0] = var5;
            var5 = {};
            var7 = 'loadRemoteImage';
            var5['key'] = var7;
            var8 = _closure1_slot3;
            var1 = undefined;
            var7 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var4 = _closure1_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                        var2 = _closure1_slot0;
                        var5 = var2.Data;
                        var4 = var5.fromURI;
                        var2 = arg2;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=51);
case 31:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 33; continue _fun0007 }
case 8:
                        var3 = _closure1_slot0;
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
case 33:
                        return var2;
case 29:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
case 27:
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
        var3 = var3.bind(var1)();
        var _closure1_slot6 = var3;
        var6 = var5;
        var5 = 5;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/canvas/AssetMap.tsx';
        var5 = var6.bind(var7)(var5);
        var2['default'] = var3;
        var4 = function loadAssetMap() {
            var1 = undefined;
            var4 = _closure1_slot7;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2['loadAssetMap'] = var4;
        var2['AssetMap'] = var3;
        return var1;
    }
})();