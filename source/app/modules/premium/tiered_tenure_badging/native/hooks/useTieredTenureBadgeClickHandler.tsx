// app/modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_PREMIUM_BADGE_ID;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileThemeTypes;
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTieredTenureBadgeClickHandler(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var8 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.useIsPremiumSubscriber;
            var3 = _closure1_slot5;
            var3 = var3.TIER_2;
            var6 = var4.bind(var6)(var3);
            var _closure2_slot3 = var6;
            var4 = 'string';
            var3 = typeof var7;
            var3 = var4 === var3;
            if(!var3) { _fun0001_ip = 124; continue _fun0001 }
 87:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 7;
            var4 = var11[var4];
            var10 = var10.bind(var5)(var4);
            var4 = var10.getTieredTenureBadge;
            var10 = var4.bind(var10)(var7);
            var4 = null;
            var3 = var4 != var10;
 124:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 8;
            var4 = var11[var4];
            var12 = var10.bind(var5)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var11.bind(var12)(var10, var4);
            var4 = _closure1_slot6;
            var4 = var7 === var4;
            if(!var4) { _fun0001_ip = 203; continue _fun0001 }
 183:
            var11 = null;
            var11 = var11 == var10;
            var5 = undefined;
            if(var11) { _fun0001_ip = 199; continue _fun0001 }
 194:
            var5 = var10.id;
 199:
            var4 = var8 === var5;
 203:
            if(!var4) { _fun0001_ip = 209; continue _fun0001 }
 206:
            var4 = var6;
 209:
            if(var3) { _fun0001_ip = 215; continue _fun0001 }
 212:
            var3 = var4;
 215:
            var _closure2_slot4 = var3;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var3;
            var2[3] = var7;
            var2[4] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot9;
                    var2 = var2.YOU_SCREEN;
                    if(!(var3 !== var2)) { _fun0002_ip = 133; continue _fun0002 }
 24:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var4 = undefined;
                    var8 = var3.bind(var4)(var2);
                    var7 = var8.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var9[var2];
                    var10 = var3.bind(var4)(var2);
                    var2 = 11;
                    var6 = var9[var2];
                    var2 = var9.paths;
                    var6 = var10.bind(var4)(var6, var2);
                    var2 = 13;
                    var2 = var9[var2];
                    var2 = var3.bind(var4)(var2);
                    var13 = var2.TIERED_TENURE_BADGE_ACTION_SHEET_KEY;
                    var3 = {};
                    var2 = _closure2_slot1;
                    var3['userId'] = var2;
                    var11 = 'stack';
                    var15 = var8;
                    var14 = var6;
                    var12 = var3;
                    var2 = var15[var7](var14, var13, var12, var11, var10);
                    _fun0002_ip = 183; continue _fun0002;
 133:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.PREMIUM;
                    var2['screen'] = var6;
                    var2 = var3.bind(var4)(var2);
 183:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 262; continue _fun0002 }
 190:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.TIERED_TENURE_BADGE_CLICKED;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['badge'] = var6;
                    var6 = _closure2_slot1;
                    var1['viewed_user_id'] = var6;
                    var5 = _closure2_slot3;
                    var1['premium_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 262:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = null;
            if(!var3) { _fun0001_ip = 271; continue _fun0001 }
 268:
            var1 = var2;
 271:
            return var1;
        }
    };
    var3['useTieredTenureBadgeClickHandler'] = var2;
    return var1;
})();