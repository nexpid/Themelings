// discord_common/js/packages/libdave/package/src/KeyFingerprint.ts
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _generateKeyFingerprint() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var4 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = 0;
                    if(!(var9 === var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = var4.byteLength;
                    if(!(var9 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = var6.length;
                    if(!(var9 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var2 = global;
                    var5 = var2.BigInt;
                    var3 = undefined;
                    var7 = var5.bind(var3)(var6);
                    var3 = 0n;
                    if(!(!(var7 < var3))) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var13 = 2n;
                    var12 = 64n;
                    var3 = exponentiationOperator(var13, var12);
                    if(!(!(var7 >= var3))) { _fun0001_ip = 10; continue _fun0001 }
case 12:
                    var6 = var2.Uint8Array;
                    var3 = var4.byteLength;
                    var8 = 2;
                    var11 = var8 + var3;
                    var3 = var6.prototype;
                    var5 = Object.create(var3, {constructor: {value: var6}});
                    var3 = 8;
                    var13 = var11 + var3;
                    var14 = var5;
                    var3 = new var14[var6](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var5 = var3.set;
                    var5 = var5.bind(var3)(var4, var8);
                    var11 = var2.DataView;
                    var13 = var3.buffer;
                    var6 = var11.prototype;
                    var6 = Object.create(var6, {constructor: {value: var11}});
                    var14 = var6;
                    var5 = new var14[var11](var13, var12);
                    var6 = var5 instanceof Object ? var5 : var6;
                    var5 = var6.setUint16;
                    var5 = var5.bind(var6)(var9, var10);
                    var5 = var6.setBigUint64;
                    var4 = var4.byteLength;
                    var4 = var8 + var4;
                    var4 = var5.bind(var6)(var4, var7);
                    return var3;
case 10:
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'user ID out of range';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 8:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'zero-length user ID';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 6:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'zero-length key';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 4:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'unsupported fingerprint format version';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot1 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/libdave/package/src/KeyFingerprint.ts';
    var4 = var5.bind(var6)(var4);
    var2 = function generateKeyFingerprint() {
        var1 = undefined;
        var4 = _closure1_slot1;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['generateKeyFingerprint'] = var2;
    return var1;
})();