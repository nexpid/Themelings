// app/modules/premium/promotions/MarketingComponentHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/promotions/MarketingComponentHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useThemeAndReducedMotionAwareAssetUrl(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var6 = var1.bind(var7)();
            var3 = _closure1_slot0;
            var1 = 2;
            var1 = var5[var1];
            var8 = var3.bind(var7)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var3 = var5.bind(var8)(var3, var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var5 = var5.bind(var7)(var2);
            var2 = var5.isThemeDark;
            var2 = var2.bind(var5)(var6);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = arg2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var4.lightUrl;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var2 = var4.lightStaticUrl;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 4:
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4.darkUrl;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var3 = var4.darkStaticUrl;
case 13:
            var2 = var3;
case 10:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useThemeAndReducedMotionAwareAssetUrl'] = var2;
    return var1;
})();