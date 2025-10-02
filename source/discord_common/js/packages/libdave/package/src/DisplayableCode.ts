// discord_common/js/packages/libdave/package/src/DisplayableCode.ts
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = '../discord_common/js/packages/libdave/package/src/DisplayableCode.ts';
    var2 = var4.bind(var5)(var2);
    var2 = function generateDisplayableCode(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var12 = arg2;
            var11 = arg3;
            var1 = var13.byteLength;
            if(!(!(var1 < var12))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var12 % var11;
            var10 = 0;
            if(!(var1 == var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 8;
            if(!(!(var11 > var1))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var3 = var1.BigInt;
            var21 = 10;
            var20 = var11;
            var2 = exponentiationOperator(var21, var20);
            var9 = undefined;
            var8 = var3.bind(var9)(var2);
            var14 = var10 < var12;
            var5 = '';
            var7 = '0';
            var6 = 8n;
            var4 = 0;
            var3 = undefined;
            var2 = var5;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var1.BigInt;
            var16 = var14.bind(var9)(var10);
            var14 = var16;
            var15 = var11;
            if(!(var15 > var10)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var17 = var11 - var15;
            var17 = var4 + var17;
            var17 = var13[var17];
            if(!(var9 !== var17)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var19 = var16 << var6;
            var18 = var1.BigInt;
            var18 = var18.bind(var9)(var17);
            var16 = var19 | var18;
            var15 = var15 - 1;
            var14 = var16;
            var3 = var17;
            if(var15 > var10) { _fun0001_ip = 11; continue _fun0001 }
case 10:
            var15 = var14 % var8;
            var14 = var15.toString;
            var15 = var14.bind(var15)();
            var14 = var15.padStart;
            var14 = var14.bind(var15)(var11, var7);
            var5 = var5 + var14;
            var4 = var4 + var11;
            var2 = var5;
            if(var4 < var12) { _fun0001_ip = 9; continue _fun0001 }
case 8:
            return var2;
case 12:
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var21 = 'Out of bounds access from data array';
            var22 = var2;
            var1 = new var22[var3](var21, var20);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 6:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var21 = 'groupSize must be less than or equal to 8';
            var22 = var2;
            var1 = new var22[var3](var21, var20);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 4:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var21 = 'desiredLength must be a multiple of groupSize';
            var22 = var2;
            var1 = new var22[var3](var21, var20);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var21 = 'data.byteLength must be greater than or equal to desiredLength';
            var22 = var2;
            var1 = new var22[var3](var21, var20);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['generateDisplayableCode'] = var2;
    return var1;
})();