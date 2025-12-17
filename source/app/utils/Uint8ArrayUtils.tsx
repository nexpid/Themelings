// app/utils/Uint8ArrayUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function hasBit(arg1, arg2) {
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
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/Uint8ArrayUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['hasBit'] = var4;
    var4 = function addBit(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(!(var6 <= var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
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
case 4:
            var4 = var1[var3];
            var5 = var5 % var2;
            var2 = 1;
            var2 = var2 << var5;
            var2 = var4 | var2;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['addBit'] = var4;
    var4 = function removeBit(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var3 = _closure1_slot0;
            var2 = undefined;
            var2 = var3.bind(var2)(var1, var5);
            if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
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
case 6:
            return var1;
        }
    };
    var3['removeBit'] = var4;
    var4 = function isUint8Array(arg1) {
        var1 = global;
        var2 = var1.Uint8Array;
        var1 = arg1;
        var1 = var1 instanceof var2;
        return var1;
    };
    var3['isUint8Array'] = var4;
    var2 = function isSerializedUint8Array(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var4 = 'object';
            var3 = typeof var2;
            var1 = var4 === var3;
case 8:
            if(!var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var3 = var2.__tag__;
            var2 = 'uint8array';
            var1 = var2 === var3;
case 10:
            return var1;
        }
    };
    var3['isSerializedUint8Array'] = var2;
    return var1;
})();