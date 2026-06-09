// discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Text/useTypographyVariantRemap.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTypographyVariantRemap(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 0;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useManaContext;
            var1 = var1.bind(var2)();
            var4 = var1.experiments;
            var2 = null;
            var6 = var2 == var4;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.enabledExperiments;
            var4 = var2 == var7;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var7.includes;
            var4 = 'mana-type-consolidation';
            var1 = var6.bind(var7)(var4);
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.remapTypographyVariant;
            var3 = var2 != var1;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var1;
case 5:
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['useTypographyVariantRemap'] = var2;
    return var1;
})();