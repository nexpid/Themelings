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
            var11 = arguments[0];
            var8 = undefined;
            if(!(var11 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = true;
case 2:
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var5 = var3.bind(var8)(var2);
            var4 = var5.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getMembers;
                var2 = var2.bind(var3)();
                var1['premiumGroupMembers'] = var2;
                var2 = var3.getPremiumGroupSubscriptionId;
                var2 = var2.bind(var3)();
                var1['premiumGroupSubscriptionId'] = var2;
                var2 = var3.hasFetchedMembers;
                var2 = var2.bind(var3)();
                var1['hasFetchedMembers'] = var2;
                var2 = var3.isFetchingMembers;
                var2 = var2.bind(var3)();
                var1['isFetchingMembers'] = var2;
                var2 = var3.isFetchingMembership;
                var2 = var2.bind(var3)();
                var1['isFetchingMembership'] = var2;
                var2 = var3.isUpdatingMembers;
                var2 = var2.bind(var3)();
                var1['isUpdatingMembers'] = var2;
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var5 = var3.premiumGroupMembers;
            var10 = var3.premiumGroupSubscriptionId;
            _closure2_slot1 = var10;
            var9 = var3.hasFetchedMembers;
            _closure2_slot2 = var9;
            var2 = var3.isFetchingMembers;
            var4 = var3.isFetchingMembership;
            var3 = var3.isUpdatingMembers;
            var7 = _closure1_slot3;
            var6 = new Array(3);
            var6[0] = var11;
            var6[1] = var10;
            var6[2] = var9;
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
            var1 = var7.bind(var8)(var1, var6);
            var1 = {};
            var1['premiumGroupMembers'] = var5;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var4;
case 8:
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3;
case 10:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();