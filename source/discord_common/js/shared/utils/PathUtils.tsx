// discord_common/js/shared/utils/PathUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var5 = function getAuthenticationPath(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arguments[1];
            var3 = arguments[2];
            var10 = arguments[3];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = null;
case 2:
            if(!(var3 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = true;
case 4:
            if(!(var10 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = '';
case 6:
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.WEBAPP_ENDPOINT;
            var4 = null;
            var6 = var4 != var2;
            var7 = '';
            var2 = var7;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var1.window;
            var6 = var6.GLOBAL_ENV;
            var2 = var6.WEBAPP_ENDPOINT;
case 8:
            var4 = var4 != var8;
            var6 = var7;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var1.encodeURIComponent;
            var8 = var4.bind(var5)(var8);
            var4 = var1.HermesInternal;
            var5 = var4.concat;
            var4 = '?redirect_to=';
            var6 = var5.bind(var4)(var8);
case 10:
            var4 = var10.length;
            var8 = 0;
            var5 = var10;
            if(!(var8 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var6.length;
            if(!(var8 !== var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var1.HermesInternal;
            var8 = var4.concat;
            var4 = '&';
            var4 = var8.bind(var4)(var10);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var8 = var1.HermesInternal;
            var9 = var8.concat;
            var8 = '?';
            var4 = var9.bind(var8)(var10);
case 16:
            var5 = var4;
case 12:
            var4 = var7;
            if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var2;
case 17:
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var14 = '/';
            var13 = arg1;
            var16 = var7;
            var15 = var4;
            var12 = var6;
            var11 = var5;
            var1 = var16[var3](var15, var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function UnescapedPathParam(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['value'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'toString';
        var1['key'] = var5;
        var2 = function value() {
            var1 = this;
            var1 = var1.value;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot2 = var4;
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = '../discord_common/js/shared/utils/PathUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function getLoginPath(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = true;
case 19:
            if(!(var5 === var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var5 = '';
case 21:
            var3 = _closure1_slot3;
            var10 = 'login';
            var9 = arg1;
            var11 = undefined;
            var8 = var6;
            var7 = var5;
            var1 = var11[var3](var10, var9, var8, var7, var6);
            return var1;
        }
    };
    var3['getLoginPath'] = var6;
    var3['getAuthenticationPath'] = var5;
    var3['UnescapedPathParam'] = var4;
    var2 = function wrapPaths(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = {};
            var _closure2_slot2 = var1;
            var6 = function _loop() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var5 = 'function';
                    var4 = typeof var3;
                    if(!(var5 === var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot3;
                    var2 = function(arg1) {
                        var9 = 0;
                        var6 = copyRestArgs(var9);
                        var3 = _closure3_slot0;
                        var4 = _closure2_slot1;
                        var1 = function encodePathArguments(arg1, arg2) {
                            var3 = arg1;
                            var2 = arg2;
                            var _closure5_slot0 = var2;
                            var2 = var3.map;
                            var1 = function(arg1) {
                                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                    var4 = arg1;
                                    var3 = null;
                                    var1 = var4;
                                    if(!(var3 != var1)) { _fun0005_ip = 25; continue _fun0005 }
case 20:
                                    var2 = _closure1_slot2;
                                    var2 = var4 instanceof var2;
                                    if(var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                                    var2 = _closure5_slot0;
                                    if(!(var3 != var2)) { _fun0005_ip = 11; continue _fun0005 }
case 28:
                                    var2 = global;
                                    var3 = var2.String;
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var4);
                                    var2 = var3.split;
                                    var5 = '';
                                    var6 = var2.bind(var3)(var5);
                                    var3 = var6.map;
                                    var2 = function(arg1) {
                                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                            var4 = arg1;
                                            var3 = _closure5_slot0;
                                            var2 = null;
                                            if(!(var2 != var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                                            var2 = _closure5_slot0;
                                            var1 = var2.includes;
                                            var2 = var1.bind(var2)(var4);
                                            var1 = var4;
                                            if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 29:
                                            var2 = global;
                                            var3 = var2.encodeURIComponent;
                                            var2 = undefined;
                                            var1 = var3.bind(var2)(var4);
case 31:
                                            return var1;
                                        }
                                    };
                                    var3 = var3.bind(var6)(var2);
                                    var2 = var3.join;
                                    var2 = var2.bind(var3)(var5);
                                    _fun0005_ip = 32; continue _fun0005;
case 11:
                                    var3 = global;
                                    var5 = var3.encodeURIComponent;
                                    var3 = undefined;
                                    var2 = var5.bind(var3)(var4);
case 32:
                                    _fun0005_ip = 33; continue _fun0005;
case 26:
                                    var3 = var4.toString;
                                    var2 = var3.bind(var4)();
case 33:
                                    var1 = var2;
case 25:
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = undefined;
                        var8 = var1.bind(var2)(var6, var4);
                        var1 = new Array(0);
                        var9 = var1;
                        var7 = 0;
                        var4 = arraySpread(var9, var8, var7);
                        var9 = var3;
                        var8 = var1;
                        var7 = undefined;
                        var1 = apply(var9, var8, var7);
                        return var1;
                    };
                    var5[var4] = var2;
                    var2 = undefined;
                    return var2;
case 23:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot3;
                    var2[var1] = var3;
                    var1 = 1;
                    return var1;
                }
            };
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var5 = var2.bind(var3)(var4);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = undefined;
            if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 34:
            var2 = var5[var4];
            var _closure2_slot3 = var2;
            var2 = var6.bind(var3)();
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0003_ip = 34; continue _fun0003 }
case 8:
            return var1;
        }
    };
    var3['wrapPaths'] = var2;
    return var1;
})();