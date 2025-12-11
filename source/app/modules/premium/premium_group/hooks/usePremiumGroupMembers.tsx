// app/modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx
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
    var4 = var4.useEffect;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePremiumGroupMembers() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arguments[0];
            var6 = undefined;
            if(!(var8 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 2;
            var2 = var10[var5];
            var12 = var9.bind(var6)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getMembers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var12)(var7, var3);
            var7 = var10[var5];
            var13 = var9.bind(var6)(var7);
            var12 = var13.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var2;
            var7 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getPremiumGroupSubscriptionId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var12.bind(var13)(var11, var7);
            _closure2_slot1 = var7;
            var5 = var10[var5];
            var10 = var9.bind(var6)(var5);
            var9 = var10.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.hasFetchedMembers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var10)(var5, var2);
            _closure2_slot2 = var2;
            var5 = _closure1_slot3;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var7;
            var4[2] = var2;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'PREMIUM_GROUP_MEMBERSHIP_REQUEST';
                    var1['type'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 4; continue _fun0002;
case 6:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'PREMIUM_GROUP_MEMBERS_REQUEST';
                    var1['type'] = var5;
                    var4 = _closure2_slot1;
                    var1['subscriptionId'] = var4;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['premiumGroupMembers'] = var3;
            var2 = !var2;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();