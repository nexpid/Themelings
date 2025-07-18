// app/modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot9 = var4;
    var4 = function useCreatorMonetizationRestrictions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 4;
            var1 = var5[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 49; continue _fun0002 }
 16:
                    var2 = _closure2_slot0;
                    var4 = var2.features;
                    var3 = var4.has;
                    var2 = _closure1_slot9;
                    var2 = var2.CREATOR_MONETIZABLE_RESTRICTED;
                    var1 = var3.bind(var4)(var2);
 49:
                    if(!var1) { _fun0002_ip = 93; continue _fun0002 }
 52:
                    var6 = _closure1_slot5;
                    var4 = var6.getMonetizationRestrictionsFetchState;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var6)(var3);
                    var2 = _closure1_slot6;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
 93:
                    if(!var1) { _fun0002_ip = 153; continue _fun0002 }
 96:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchMonetizationRestrictions;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['signal'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 153:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var4);
            var1 = null;
            var4 = var1 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 90; continue _fun0001 }
 85:
            var1 = var3.id;
 90:
            var _closure2_slot2 = var1;
            var1 = {};
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 6;
            var8 = var7[var3];
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStoresArray;
            var6 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getMonetizationRestrictions;
                    var6 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var6)) { _fun0003_ip = 32; continue _fun0003 }
 26:
                    var1 = _closure1_slot8;
                    _fun0003_ip = 36; continue _fun0003;
 32:
                    var1 = _closure2_slot2;
 36:
                    var1 = var3.bind(var4)(var1);
                    if(!(var2 == var1)) { _fun0003_ip = 49; continue _fun0003 }
 45:
                    var1 = new Array(0);
 49:
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var9, var8);
            var1['restrictions'] = var8;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getMonetizationRestrictionsFetchState;
                    var6 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var6)) { _fun0004_ip = 32; continue _fun0004 }
 26:
                    var2 = _closure1_slot8;
                    _fun0004_ip = 36; continue _fun0004;
 32:
                    var2 = _closure2_slot2;
 36:
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot6;
                    var1 = var1.FETCHING;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var1['restrictionsLoading'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 6;
            var2 = var4[var2];
            var6 = undefined;
            var5 = var3.bind(var6)(var2);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var4.bind(var5)(var3, var1, var2);
            var1 = _closure1_slot10;
            var1 = var1.bind(var6)(var8);
            var10 = var1.restrictions;
            var2 = var1.restrictionsLoading;
            var1 = {};
            var5 = null;
            var4 = var5 == var8;
            var3 = undefined;
            if(var4) { _fun0005_ip = 131; continue _fun0005 }
 105:
            var11 = var8.features;
            var9 = var11.has;
            var4 = _closure1_slot9;
            var4 = var4.CREATOR_MONETIZABLE;
            var3 = var9.bind(var11)(var4);
 131:
            if(var3) { _fun0005_ip = 172; continue _fun0005 }
 134:
            var9 = var5 == var8;
            var4 = undefined;
            if(var9) { _fun0005_ip = 169; continue _fun0005 }
 143:
            var12 = var8.features;
            var11 = var12.has;
            var9 = _closure1_slot9;
            var9 = var9.CREATOR_MONETIZABLE_PROVISIONAL;
            var4 = var11.bind(var12)(var9);
 169:
            var3 = var4;
 172:
            var3 = !var3;
            if(var3) { _fun0005_ip = 265; continue _fun0005 }
 178:
            if(var2) { _fun0005_ip = 214; continue _fun0005 }
 181:
            var9 = _closure1_slot0;
            var11 = _closure1_slot3;
            var4 = 7;
            var4 = var11[var4];
            var9 = var9.bind(var6)(var4);
            var4 = var9.isRestrictedFromShowingGuildPurchaseEntryPoints;
            var4 = var4.bind(var9)(var10);
            _fun0005_ip = 262; continue _fun0005;
 214:
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0005_ip = 249; continue _fun0005 }
 223:
            var9 = var8.features;
            var8 = var9.has;
            var7 = _closure1_slot9;
            var7 = var7.CREATOR_MONETIZABLE_RESTRICTED;
            var6 = var8.bind(var9)(var7);
 249:
            var5 = var5 == var6;
            if(var5) { _fun0005_ip = 259; continue _fun0005 }
 256:
            var5 = var6;
 259:
            var4 = var5;
 262:
            var3 = var4;
 265:
            var1['shouldHideGuildPurchaseEntryPoints'] = var3;
            var1['restrictionsLoading'] = var2;
            return var1;
        }
    };
    var3['useShouldHideGuildPurchaseEntryPoints'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 6;
            var2 = var5[var2];
            var6 = undefined;
            var7 = var3.bind(var6)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var7)(var3, var1, var2);
            var1 = _closure1_slot10;
            var1 = var1.bind(var6)(var5);
            var7 = var1.restrictions;
            var2 = var1.restrictionsLoading;
            if(var2) { _fun0006_ip = 128; continue _fun0006 }
 95:
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 7;
            var1 = var8[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isRestrictedFromUpdatingCreatorMonetizationSettings;
            var3 = var1.bind(var3)(var7);
            _fun0006_ip = 178; continue _fun0006;
 128:
            var1 = null;
            var7 = var1 == var5;
            var6 = undefined;
            if(var7) { _fun0006_ip = 165; continue _fun0006 }
 139:
            var9 = var5.features;
            var8 = var9.has;
            var7 = _closure1_slot9;
            var7 = var7.CREATOR_MONETIZABLE_RESTRICTED;
            var6 = var8.bind(var9)(var7);
 165:
            var1 = var1 == var6;
            if(var1) { _fun0006_ip = 175; continue _fun0006 }
 172:
            var1 = var6;
 175:
            var3 = var1;
 178:
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0006_ip = 216; continue _fun0006 }
 187:
            var6 = var5.features;
            var5 = var6.has;
            var4 = _closure1_slot9;
            var4 = var4.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING;
            var4 = var5.bind(var6)(var4);
            var1 = !var4;
 216:
            var5 = !var1;
            var1 = {};
            var4 = var3;
            if(var4) { _fun0006_ip = 230; continue _fun0006 }
 227:
            var4 = var5;
 230:
            var1['shouldRestrictUpdatingCreatorMonetizationSettings'] = var4;
            var3 = !var3;
            var1['allowSelfRemoveMonetization'] = var3;
            var1['restrictionsLoading'] = var2;
            return var1;
        }
    };
    var3['useShouldRestrictUpdatingCreatorMonetizationSettings'] = var4;
    var2 = function(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 6;
        var3 = var7[var3];
        var4 = undefined;
        var9 = var6.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var8.bind(var9)(var5, var2, var3);
        var1 = _closure1_slot10;
        var1 = var1.bind(var4)(var2);
        var5 = var1.restrictions;
        var2 = var1.restrictionsLoading;
        var1 = {};
        var3 = 7;
        var3 = var7[var3];
        var4 = var6.bind(var4)(var3);
        var3 = var4.isRestrictedFromMonetizationReapplication;
        var3 = var3.bind(var4)(var5);
        var1['isMonetizationReapplicationDisabled'] = var3;
        var1['restrictionsLoading'] = var2;
        return var1;
    };
    var3['useIsMonetizationReapplicationDisabled'] = var2;
    return var1;
})();