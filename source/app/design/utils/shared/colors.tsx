// app/design/utils/shared/colors.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/utils/shared/colors.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function flattenColorOverOpaqueBackground(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 0;
            var4 = var2[var7];
            var6 = undefined;
            var5 = var3.bind(var6)(var4);
            var4 = arg1;
            var4 = var5.bind(var6)(var4);
            var2 = var2[var7];
            var3 = var3.bind(var6)(var2);
            var2 = arg2;
            var3 = var3.bind(var6)(var2);
            var2 = var4.rgba;
            var9 = var2.bind(var4)();
            var2 = var3.rgba;
            var11 = var2.bind(var3)();
            var2 = 3;
            var4 = var11[var2];
            var3 = 1;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var9[var2];
            var10 = var3 - var12;
            var2 = global;
            var8 = var2.Math;
            var5 = var8.round;
            var4 = var9[var7];
            var13 = var4 * var12;
            var4 = var11[var7];
            var4 = var4 * var10;
            var4 = var13 + var4;
            var5 = var5.bind(var8)(var4);
            var8 = var2.Math;
            var4 = var8.round;
            var13 = var9[var3];
            var13 = var13 * var12;
            var3 = var11[var3];
            var3 = var3 * var10;
            var3 = var13 + var3;
            var4 = var4.bind(var8)(var3);
            var8 = var2.Math;
            var3 = var8.round;
            var2 = 2;
            var9 = var9[var2];
            var9 = var9 * var12;
            var2 = var11[var2];
            var2 = var2 * var10;
            var2 = var9 + var2;
            var3 = var3.bind(var8)(var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var2 = var2.bind(var6)(var1);
            var1 = var2.rgb;
            var2 = var1.bind(var2)(var5, var4, var3);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var16 = 'Expected solid cutout background color to be opaque';
            var17 = var2;
            var1 = new var17[var3](var16, var15);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['flattenColorOverOpaqueBackground'] = var2;
    return var1;
})();