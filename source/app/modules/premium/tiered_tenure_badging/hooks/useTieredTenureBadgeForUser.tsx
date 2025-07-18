// app/modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/hooks/useTieredTenureBadgeForUser.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTieredTenureBadgeForUser(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var6 = null;
                var3 = var6 != var3;
                var4 = null;
                if(!var3) { _fun0001_ip = 42; continue _fun0001 }
 20:
                var5 = _closure1_slot2;
                var3 = var5.getUserProfile;
                var1 = _closure2_slot0;
                var4 = var3.bind(var5)(var1);
 42:
                var1 = var6 == var4;
                var3 = undefined;
                if(var1) { _fun0001_ip = 57; continue _fun0001 }
 51:
                var3 = var4.premiumSince;
 57:
                var7 = var6 == var4;
                var1 = null;
                if(var7) { _fun0001_ip = 119; continue _fun0001 }
 66:
                var3 = var6 == var3;
                var1 = null;
                if(var3) { _fun0001_ip = 119; continue _fun0001 }
 75:
                var3 = var6 == var4;
                var5 = undefined;
                if(var3) { _fun0001_ip = 97; continue _fun0001 }
 84:
                var4 = var4.badges;
                var3 = var6 == var4;
                var5 = var4;
 97:
                if(var3) { _fun0001_ip = 115; continue _fun0001 }
 100:
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getTieredTenureBadge;
                        var2 = arg1;
                        var2 = var2.id;
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 57; continue _fun0002 }
 50:
                        var _closure3_slot0 = var3;
 57:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
 115:
                var1 = _closure3_slot0;
 119:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useTieredTenureBadgeForUser'] = var2;
    return var1;
})();