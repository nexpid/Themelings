// app/modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/onboarding/hooks/useActivityApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityApplications(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var _closure2_slot0 = var6;
        var7 = var1.fetchesShelf;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 1;
        var1 = var5[var1];
        var5 = undefined;
        var4 = var4.bind(var5)(var1);
        var1 = {};
        var1['guildId'] = var6;
        var5 = var4.bind(var5)(var1);
        var4 = var5.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.application;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                if(!var1) { _fun0001_ip = 56; continue _fun0001 }
 10:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchShelf;
                var1 = {};
                var4 = _closure2_slot0;
                var1['guildId'] = var4;
                var1 = var2.bind(var3)(var1);
 56:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useActivityApplications'] = var2;
    return var1;
})();