// discord_common/js/shared/utils/PathUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
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
    var5 = 2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/utils/PathUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getLoginPath(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = arguments[1];
            var10 = arguments[2];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var7 = true;
 17:
            if(!(var10 === var4)) { _fun0001_ip = 25; continue _fun0001 }
 21:
            var10 = '';
 25:
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.WEBAPP_ENDPOINT;
            var3 = null;
            var5 = var3 != var2;
            var6 = '';
            var2 = var6;
            if(!var5) { _fun0001_ip = 79; continue _fun0001 }
 61:
            var5 = var1.window;
            var5 = var5.GLOBAL_ENV;
            var2 = var5.WEBAPP_ENDPOINT;
 79:
            var3 = var3 != var8;
            var5 = var6;
            if(!var3) { _fun0001_ip = 122; continue _fun0001 }
 89:
            var3 = var1.encodeURIComponent;
            var8 = var3.bind(var4)(var8);
            var3 = var1.HermesInternal;
            var4 = var3.concat;
            var3 = '?redirect_to=';
            var5 = var4.bind(var3)(var8);
 122:
            var3 = var10.length;
            var8 = 0;
            var4 = var10;
            if(!(var8 !== var3)) { _fun0001_ip = 190; continue _fun0001 }
 136:
            var3 = var5.length;
            if(!(var8 !== var3)) { _fun0001_ip = 167; continue _fun0001 }
 145:
            var3 = var1.HermesInternal;
            var8 = var3.concat;
            var3 = '&';
            var3 = var8.bind(var3)(var10);
            _fun0001_ip = 187; continue _fun0001;
 167:
            var8 = var1.HermesInternal;
            var9 = var8.concat;
            var8 = '?';
            var3 = var9.bind(var8)(var10);
 187:
            var4 = var3;
 190:
            var3 = var6;
            if(!var7) { _fun0001_ip = 199; continue _fun0001 }
 196:
            var3 = var2;
 199:
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var13 = '/login';
            var15 = var6;
            var14 = var3;
            var12 = var5;
            var11 = var4;
            var1 = var15[var2](var14, var13, var12, var11, var10);
            return var1;
        }
    };
    var3['getLoginPath'] = var5;
    var3['UnescapedPathParam'] = var4;
    var2 = function wrapPaths(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = {};
            var _closure2_slot2 = var1;
            var6 = function _loop() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var5 = 'function';
                    var4 = typeof var3;
                    if(!(var5 === var4)) { _fun0003_ip = 53; continue _fun0003 }
 32:
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
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var4 = arg1;
                                    var3 = null;
                                    var1 = var4;
                                    if(!(var3 != var1)) { _fun0004_ip = 124; continue _fun0004 }
 12:
                                    var2 = _closure1_slot2;
                                    var2 = var4 instanceof var2;
                                    if(var2) { _fun0004_ip = 112; continue _fun0004 }
 26:
                                    var2 = _closure5_slot0;
                                    if(!(var3 != var2)) { _fun0004_ip = 95; continue _fun0004 }
 37:
                                    var2 = global;
                                    var3 = var2.String;
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var4);
                                    var2 = var3.split;
                                    var5 = '';
                                    var6 = var2.bind(var3)(var5);
                                    var3 = var6.map;
                                    var2 = function(arg1) {
                                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                            var4 = arg1;
                                            var3 = _closure5_slot0;
                                            var2 = null;
                                            if(!(var2 != var3)) { _fun0005_ip = 36; continue _fun0005 }
 16:
                                            var2 = _closure5_slot0;
                                            var1 = var2.includes;
                                            var2 = var1.bind(var2)(var4);
                                            var1 = var4;
                                            if(var2) { _fun0005_ip = 51; continue _fun0005 }
 36:
                                            var2 = global;
                                            var3 = var2.encodeURIComponent;
                                            var2 = undefined;
                                            var1 = var3.bind(var2)(var4);
 51:
                                            return var1;
                                        }
                                    };
                                    var3 = var3.bind(var6)(var2);
                                    var2 = var3.join;
                                    var2 = var2.bind(var3)(var5);
                                    _fun0004_ip = 110; continue _fun0004;
 95:
                                    var3 = global;
                                    var5 = var3.encodeURIComponent;
                                    var3 = undefined;
                                    var2 = var5.bind(var3)(var4);
 110:
                                    _fun0004_ip = 121; continue _fun0004;
 112:
                                    var3 = var4.toString;
                                    var2 = var3.bind(var4)();
 121:
                                    var1 = var2;
 124:
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
 53:
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
            if(!var2) { _fun0002_ip = 85; continue _fun0002 }
 61:
            var2 = var5[var4];
            var _closure2_slot3 = var2;
            var2 = var6.bind(var3)();
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0002_ip = 61; continue _fun0002 }
 85:
            return var1;
        }
    };
    var3['wrapPaths'] = var2;
    return var1;
})();