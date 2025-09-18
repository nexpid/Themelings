// app/modules/remixing/native/hooks/useTransforms.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useTransforms.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.useSharedValue;
            var1 = arg3;
            var2 = var2.bind(var5)(var1);
            var1 = global;
            var6 = var1.Object;
            var5 = var6.isFrozen;
            var5 = var5.bind(var6)(var3);
            if(var5) { _fun0001_ip = 81; continue _fun0001 }
 65:
            var6 = var3[var4];
            var5 = null;
            if(!(var5 == var6)) { _fun0001_ip = 79; continue _fun0001 }
 75:
            var3[var4] = var2;
 79:
            return var2;
 81:
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var7 = 'transformMap was touched on the UI thread and locked, invalid state.';
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();