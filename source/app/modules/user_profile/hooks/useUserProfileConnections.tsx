// app/modules/user_profile/hooks/useUserProfileConnections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(var7) { _fun0001_ip = 125; continue _fun0001 }
 119:
            var6 = var2.connectedAccounts;
 125:
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 28; continue _fun0002 }
 18:
                    var4 = _closure2_slot2;
                    var2 = var4.connectedAccounts;
 28:
                    if(!(var3 != var2)) { _fun0002_ip = 63; continue _fun0002 }
 32:
                    var1 = _closure2_slot2;
                    var3 = var1.connectedAccounts;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                            if(!var1) { _fun0003_ip = 80; continue _fun0003 }
 52:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var5 = var5.bind(var4)(var2);
                            var2 = var5.isSupported;
                            var1 = var2.bind(var5)(var6);
 80:
                            if(!var1) { _fun0003_ip = 95; continue _fun0003 }
 83:
                            var2 = _closure2_slot1;
                            var1 = var2.bind(var4)(var3);
 95:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 70; continue _fun0002;
 63:
                    var1 = _closure1_slot5;
 70:
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