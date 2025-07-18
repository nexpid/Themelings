// discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function compareArrays(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var1 = var2.length;
            var5 = 0;
            if(!(var5 < var1)) { _fun0001_ip = 67; continue _fun0001 }
 17:
            var1 = var3.length;
            var1 = var5 < var1;
            var5 = 0;
            if(!var1) { _fun0001_ip = 67; continue _fun0001 }
 31:
            var6 = var2[var5];
            var4 = var3[var5];
            var1 = var5;
            if(!(var6 == var4)) { _fun0001_ip = 83; continue _fun0001 }
 46:
            var5 = var1 + 1;
            var4 = var2.length;
            if(!(var5 < var4)) { _fun0001_ip = 67; continue _fun0001 }
 58:
            var4 = var3.length;
            if(var5 < var4) { _fun0001_ip = 31; continue _fun0001 }
 67:
            var5 = var2.length;
            var4 = var3.length;
            var4 = var5 - var4;
            return var4;
 83:
            var2 = var2[var1];
            var1 = var3[var1];
            var1 = var2 - var1;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function _generatePairwiseFingerprint() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var13 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 325; continue _fun0002 }
 13:
                    var4 = global;
                    var8 = var4.Promise;
                    var5 = var8.all;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 1;
                    var2 = var9[var6];
                    var7 = undefined;
                    var14 = var10.bind(var7)(var2);
                    var12 = var14.generateKeyFingerprint;
                    var11 = arg2;
                    var2 = arg3;
                    var11 = var12.bind(var14)(var13, var11, var2);
                    var2 = new Array(2);
                    var2[0] = var11;
                    var9 = var9[var6];
                    var12 = var10.bind(var7)(var9);
                    var11 = var12.generateKeyFingerprint;
                    var10 = arg4;
                    var9 = arg5;
                    var9 = var11.bind(var12)(var13, var10, var9);
                    var2[1] = var9;
                    var2 = var5.bind(var8)(var2);
                    SaveGenerator(address=120);
 118:
                    return var2;
 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 322; continue _fun0002 }
 129:
                    var8 = var2.sort;
                    var5 = _closure1_slot5;
                    var5 = var8.bind(var2)(var5);
                    var10 = var4.Uint8Array;
                    var5 = 0;
                    var8 = var2[var5];
                    var9 = var8.byteLength;
                    var8 = var2[var6];
                    var8 = var8.byteLength;
                    var17 = var9 + var8;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var18 = var9;
                    var8 = new var18[var10](var17, var16);
                    var8 = var8 instanceof Object ? var8 : var9;
                    var10 = var8.set;
                    var9 = var2[var5];
                    var9 = var10.bind(var8)(var9, var5);
                    var9 = var8.set;
                    var6 = var2[var6];
                    var5 = var2[var5];
                    var5 = var5.byteLength;
                    var5 = var9.bind(var8)(var6, var5);
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 2;
                    var5 = var9[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.scryptAsync;
                    var5 = _closure1_slot3;
                    var3 = _closure1_slot4;
                    var3 = var6.bind(var7)(var8, var5, var3);
                    SaveGenerator(address=281);
 279:
                    return var3;
 281:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 319; continue _fun0002 }
 287:
                    var4 = var4.Uint8Array;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var18 = var5;
                    var17 = var3;
                    var4 = new var18[var4](var17, var16);
                    var4 = var4 instanceof Object ? var4 : var5;
                    return var4;
 319:
                    return var3;
 322:
                    return var2;
 325:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = native3;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var22 = var4.Uint8Array;
    var21 = var22.of;
    var38 = 36;
    var37 = 202;
    var36 = 177;
    var17 = 122;
    var33 = 248;
    var32 = 236;
    var31 = 43;
    var30 = 130;
    var29 = 180;
    var28 = 18;
    var27 = 185;
    var26 = 45;
    var25 = 171;
    var24 = 25;
    var23 = 46;
    var39 = var22;
    var35 = var17;
    var34 = var17;
    var4 = var39[var21](var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
    var _closure1_slot3 = var4;
    var4 = {'N': 16384, 'r': 8, 'p': 2, 'dkLen': 64};
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/libdave/package/src/PairwiseFingerprint.ts';
    var4 = var5.bind(var6)(var4);
    var2 = function generatePairwiseFingerprint() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['generatePairwiseFingerprint'] = var2;
    return var1;
})();