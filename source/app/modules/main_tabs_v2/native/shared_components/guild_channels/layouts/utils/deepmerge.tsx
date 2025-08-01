// app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var2 = global;
    var7 = var2.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var5 = true;
    var4['value'] = var5;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var4);
    var2 = function isObject(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = 'object';
            var1 = typeof var5;
            if(!(var2 === var1)) { _fun0001_ip = 20; continue _fun0001 }
 14:
            var3 = null;
            if(!(var3 === var5)) { _fun0001_ip = 24; continue _fun0001 }
 20:
            var1 = false;
            return var1;
 24:
            var1 = global;
            var2 = var1.Object;
            var2 = var2.getPrototypeOf;
            var4 = 'function';
            var2 = typeof var2;
            if(!(var4 !== var2)) { _fun0001_ip = 85; continue _fun0001 }
 49:
            var2 = var1.Object;
            var2 = var2.prototype;
            var4 = var2.toString;
            var2 = var4.call;
            var4 = var2.bind(var4)(var5);
            var2 = '[object Object]';
            var2 = var2 === var4;
            return var2;
 85:
            var4 = var1.Object;
            var2 = var4.getPrototypeOf;
            var2 = var2.bind(var4)(var5);
            var1 = var1.Object;
            var1 = var1.prototype;
            var1 = var2 === var1;
            if(var1) { _fun0001_ip = 124; continue _fun0001 }
 120:
            var1 = var3 === var2;
 124:
            return var1;
        }
    };
    var _closure1_slot0 = var2;
    var2 = function merge(arg1) {
        var6 = 0;
        var4 = copyRestArgs(var6);
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var6 = arg2;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var6;
                var1 = global;
                var5 = var1.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var6);
                if(var4) { _fun0002_ip = 72; continue _fun0002 }
 37:
                var5 = var1.Object;
                var4 = var5.keys;
                var5 = var4.bind(var5)(var6);
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = arg1;
                        var2 = ['__proto__', 'constructor', 'prototype'];
                        var1 = var2.includes;
                        var1 = var1.bind(var2)(var3);
                        if(var1) { _fun0003_ip = 293; continue _fun0003 }
 29:
                        var7 = global;
                        var5 = var7.Array;
                        var2 = var5.isArray;
                        var1 = _closure3_slot0;
                        var1 = var1[var3];
                        var1 = var2.bind(var5)(var1);
                        if(!var1) { _fun0003_ip = 88; continue _fun0003 }
 61:
                        var5 = var7.Array;
                        var2 = var5.isArray;
                        var1 = _closure3_slot1;
                        var1 = var1[var3];
                        var1 = var2.bind(var5)(var1);
                        if(var1) { _fun0003_ip = 186; continue _fun0003 }
 88:
                        var5 = _closure1_slot0;
                        var2 = _closure3_slot0;
                        var2 = var2[var3];
                        var8 = undefined;
                        var2 = var5.bind(var8)(var2);
                        if(!var2) { _fun0003_ip = 133; continue _fun0003 }
 113:
                        var5 = _closure1_slot0;
                        var2 = _closure3_slot1;
                        var2 = var2[var3];
                        var2 = var5.bind(var8)(var2);
                        if(var2) { _fun0003_ip = 154; continue _fun0003 }
 133:
                        var5 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var2 = var2[var3];
                        var5[var3] = var2;
                        _fun0003_ip = 293; continue _fun0003;
 154:
                        var2 = _closure3_slot0;
                        var6 = _closure1_slot1;
                        var5 = var2[var3];
                        var1 = _closure3_slot1;
                        var1 = var1[var3];
                        var1 = var6.bind(var8)(var5, var1);
                        var2[var3] = var1;
                        _fun0003_ip = 293; continue _fun0003;
 186:
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1.options;
                        var1 = var1.mergeArrays;
                        if(var1) { _fun0003_ip = 221; continue _fun0003 }
 211:
                        var1 = _closure3_slot1;
                        var1 = var1[var3];
                        _fun0003_ip = 289; continue _fun0003;
 221:
                        var6 = var7.Array;
                        var5 = var6.from;
                        var8 = var7.Set;
                        var7 = _closure3_slot0;
                        var9 = var7[var3];
                        var7 = var9.concat;
                        var4 = _closure3_slot1;
                        var4 = var4[var3];
                        var11 = var7.bind(var9)(var4);
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {constructor: {value: var8}});
                        var12 = var7;
                        var4 = new var12[var8](var11, var10);
                        var4 = var4 instanceof Object ? var4 : var7;
                        var1 = var5.bind(var6)(var4);
 289:
                        var2[var3] = var1;
 293:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                return var2;
 72:
                var3 = var1.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var7 = 'Arguments provided to ts-deepmerge must be objects, not arrays.';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1 = {};
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot1 = var2;
    var4 = {};
    var4['mergeArrays'] = var5;
    var _closure1_slot2 = var4;
    var2['options'] = var4;
    var1 = function(arg1, arg2) {
        var8 = 1;
        var5 = copyRestArgs(var8);
        var3 = _closure1_slot1;
        var1 = {};
        var4 = true;
        var1['mergeArrays'] = var4;
        var7 = arg1;
        var8 = var1;
        var4 = copyDataProperties(var8, var7);
        var3['options'] = var1;
        var4 = new Array(0);
        var6 = 0;
        var8 = var4;
        var7 = var5;
        var1 = arraySpread(var8, var7, var6);
        var6 = undefined;
        var8 = var3;
        var7 = var4;
        var1 = apply(var8, var7, var6);
        var2 = _closure1_slot2;
        var3['options'] = var2;
        return var1;
    };
    var2['withOptions'] = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/layouts/utils/deepmerge.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();