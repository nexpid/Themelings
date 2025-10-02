// app/modules/user_profile/hooks/useUserProfileConnections.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useUserProfileConnections.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileConnections(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var4 = undefined;
            var8 = var6.bind(var4)(var2);
            var5 = var8.usePlatformAllowed;
            var2 = {};
            var9 = true;
            var2['forUserProfile'] = var9;
            var5 = var5.bind(var8)(var2);
            var _closure2_slot1 = var5;
            var2 = 3;
            var2 = var7[var2];
            var8 = var6.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getUserProfile;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var8)(var6, var2);
            var _closure2_slot2 = var2;
            var3 = _closure1_slot3;
            var6 = null;
            var7 = var6 == var2;
            var6 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.connectedAccounts;
case 2:
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
                    var2 = var4.connectedAccounts;
case 4:
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot2;
                    var3 = var1.connectedAccounts;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            var6 = var1.type;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var7 = 4;
                            var1 = var1[var7];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.get;
                            var3 = var1.bind(var3)(var6);
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var5 = var5.bind(var4)(var2);
                            var2 = var5.isSupported;
                            var1 = var2.bind(var5)(var6);
case 8:
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = _closure2_slot1;
                            var1 = var2.bind(var4)(var3);
case 10:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 12; continue _fun0002;
case 6:
                    var1 = _closure1_slot5;
case 12:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();