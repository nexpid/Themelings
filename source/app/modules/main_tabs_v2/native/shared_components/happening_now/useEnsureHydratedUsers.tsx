// app/modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/useEnsureHydratedUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useEnsureHydratedUsers(arg1, arg2) {
        var8 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = var1.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = {};
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1[var3] = var2;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = {};
case 4:
                return var1;
            }
        };
        var5 = var5.bind(var6)(var3, var4);
        var4 = var6.useEffect;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var3 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var3 = _closure1_slot3;
                    var2 = var3.requestMember;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var4);
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var6)(var2, var3);
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useSubscribeGuildMembers;
        var2 = 'useEnsureHydratedUsers';
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var3['useEnsureHydratedUsers'] = var2;
    return var1;
})();