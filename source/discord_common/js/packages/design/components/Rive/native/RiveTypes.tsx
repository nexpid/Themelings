// discord_common/js/packages/design/components/Rive/native/RiveTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var7;
    var5 = function kebabify(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = {};
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var7 = var2.bind(var3)(var8);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var4 = undefined;
            var3 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7[var3];
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var6];
            var9 = var10.bind(var4)(var9);
            var9 = var9.bind(var4)(var2);
            var2 = var8[var2];
            var1[var9] = var2;
            var3 = var3 + 1;
            var2 = var7.length;
            if(var3 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var1;
        }
    };
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var2 = 1;
    var4 = var7[var2];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.Fit;
    var4 = var5.bind(var1)(var4);
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Alignment;
    var2 = var5.bind(var1)(var2);
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/design/components/Rive/native/RiveTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['RIVE_FITS'] = var4;
    var3['RIVE_ALIGNMENTS'] = var2;
    return var1;
})();