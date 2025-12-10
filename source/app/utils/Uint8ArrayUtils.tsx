// app/utils/Uint8ArrayUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = function hasBit(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = var5.length;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var7 = var2.Math;
            var6 = var7.floor;
            var2 = 8;
            var3 = var4 / var2;
            var3 = var6.bind(var7)(var3);
            var3 = var5[var3];
            var4 = var4 % var2;
            var2 = 1;
            var2 = var2 << var4;
            var2 = var3 & var2;
            var2 = !var2;
            var1 = !var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot0 = var5;
    var4 = function isSerializedUint8Array(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = 'object';
            var3 = typeof var2;
            var1 = var4 === var3;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.__tag__;
            var2 = 'uint8array';
            var1 = var2 === var3;
case 6:
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var6 = dependencyMap;
    var1 = 0;
    var7 = var6[var1];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/Uint8ArrayUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['hasBit'] = var5;
    var5 = function addBit(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var4 = global;
            var6 = var4.Math;
            var3 = var6.floor;
            var2 = 8;
            var1 = var5 / var2;
            var3 = var3.bind(var6)(var1);
            var6 = var8.length;
            var1 = var8;
            if(!(var6 <= var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = var4.Uint8Array;
            var4 = 1;
            var10 = var3 + var4;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var4 = new var11[var7](var10, var9);
            var4 = var4 instanceof Object ? var4 : var6;
            var7 = var4.set;
            var6 = 0;
            var6 = var7.bind(var4)(var8, var6);
            var1 = var4;
case 8:
            var4 = var1[var3];
            var5 = var5 % var2;
            var2 = 1;
            var2 = var2 << var5;
            var2 = var4 | var2;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['addBit'] = var5;
    var5 = function removeBit(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = _closure1_slot0;
            var2 = undefined;
            var2 = var3.bind(var2)(var1, var5);
            if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var2 = global;
            var6 = var2.Math;
            var4 = var6.floor;
            var2 = 8;
            var3 = var5 / var2;
            var3 = var4.bind(var6)(var3);
            var4 = var1[var3];
            var5 = var5 % var2;
            var2 = 1;
            var2 = var2 << var5;
            var2 = ~var2;
            var2 = var4 & var2;
            var1[var3] = var2;
case 10:
            return var1;
        }
    };
    var3['removeBit'] = var5;
    var5 = function isUint8Array(arg1) {
        var1 = global;
        var2 = var1.Uint8Array;
        var1 = arg1;
        var1 = var1 instanceof var2;
        return var1;
    };
    var3['isUint8Array'] = var5;
    var3['isSerializedUint8Array'] = var4;
    var4 = function uint8ArrayReplacer(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg2;
            var3 = global;
            var1 = var3.Uint8Array;
            var2 = var5 instanceof var1;
            var1 = var5;
            if(!var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var2 = {};
            var4 = 'uint8array';
            var2['__tag__'] = var4;
            var4 = var3.Array;
            var3 = var4.from;
            var3 = var3.bind(var4)(var5);
            var2['data'] = var3;
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['uint8ArrayReplacer'] = var4;
    var2 = function uint8ArrayReviver(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg2;
            var3 = _closure1_slot1;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = var2;
            if(!var3) { _fun0006_ip = 14; continue _fun0006 }
case 4:
            var3 = global;
            var4 = var3.Uint8Array;
            var5 = var2.data;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var1 = var2 instanceof Object ? var2 : var3;
case 14:
            return var1;
        }
    };
    var3['uint8ArrayReviver'] = var2;
    return var1;
})();