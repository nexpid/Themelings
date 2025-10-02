// app/modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx
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
    var4 = 'modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationIneligibleReasons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreatorMonetizationIneligibleReasons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var1 = var2[var1];
            var2 = undefined;
            var3 = var3.bind(var2)(var1);
            var1 = arg1;
            var5 = var3.bind(var2)(var1);
            var1 = null;
            var3 = var1 == var5;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.flatMap;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.checked;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var1.key;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var1 = new Array(0);
case 6:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 2:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['useCreatorMonetizationIneligibleReasons'] = var2;
    return var1;
})();