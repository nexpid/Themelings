// app/modules/activities/useFetchDeveloperActivityShelfItems.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var7 = native3;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DevShelfFetchState;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useFetchDeveloperActivityShelfItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFetchDeveloperActivityShelfItems() {
        var6 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 2;
        var3 = var8[var3];
        var4 = undefined;
        var5 = var6.bind(var4)(var3);
        var3 = var5.useIsActivitiesEnabledForCurrentPlatform;
        var7 = var3.bind(var5)();
        var _closure2_slot0 = var7;
        var3 = 3;
        var3 = var8[var3];
        var3 = var6.bind(var4)(var3);
        var5 = var3.DeveloperMode;
        var3 = var5.getSetting;
        var5 = var3.bind(var5)();
        var _closure2_slot1 = var5;
        var3 = 4;
        var3 = var8[var3];
        var9 = var6.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var3;
        var4 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getFetchState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var6 = var8.bind(var9)(var6, var4, var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                if(!var1) { _fun0001_ip = 14; continue _fun0001 }
 10:
                var1 = _closure2_slot1;
 14:
                if(!var1) { _fun0001_ip = 38; continue _fun0001 }
 17:
                var3 = _closure2_slot2;
                var2 = _closure1_slot4;
                var2 = var2.INITIALIZED;
                var1 = var3 === var2;
 38:
                if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchDeveloperApplications;
                var1 = var1.bind(var2)();
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var3['useFetchDeveloperActivityShelfItems'] = var2;
    return var1;
})();