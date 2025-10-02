// app/modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var5 = function isRestrictedFromShowingGuildPurchaseEntryPoints(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.includes;
            var2 = _closure1_slot3;
            var2 = var2.NEW_PURCHASES_DISABLED;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function isRestrictedFromUpdatingCreatorMonetizationSettings(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = var4.includes;
            var2 = _closure1_slot3;
            var2 = var2.SETTINGS_READ_ONLY;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var6 = 0;
    var10 = var8[var6];
    var1 = undefined;
    var10 = var9.bind(var1)(var10);
    var _closure1_slot0 = var10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.FetchState;
    var _closure1_slot1 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CreatorMonetizationRestrictions;
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.GuildFeatures;
    var _closure1_slot4 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isRestrictedFromShowingGuildPurchaseEntryPoints'] = var5;
    var5 = function shouldHideGuildPurchaseEntryPoints(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var4 = _closure1_slot0;
            var3 = var4.getMonetizationRestrictionsFetchState;
            var6 = var3.bind(var4)(var7);
            var3 = var4.getMonetizationRestrictions;
            var4 = var3.bind(var4)(var7);
            var5 = _closure1_slot2;
            var3 = var5.getGuild;
            var5 = var3.bind(var5)(var7);
            var3 = _closure1_slot1;
            var3 = var3.FETCHED;
            if(!(var6 !== var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = var5.features;
            var6 = var7.has;
            var5 = _closure1_slot4;
            var5 = var5.CREATOR_MONETIZABLE_RESTRICTED;
            var3 = var6.bind(var7)(var5);
case 8:
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var3;
case 10:
            _fun0003_ip = 12; continue _fun0003;
case 6:
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 12:
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['shouldHideGuildPurchaseEntryPoints'] = var5;
    var3['isRestrictedFromUpdatingCreatorMonetizationSettings'] = var4;
    var4 = function shouldRestrictUpdatingCreatorMonetizationSettings(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var4 = _closure1_slot0;
            var3 = var4.getMonetizationRestrictionsFetchState;
            var6 = var3.bind(var4)(var7);
            var3 = var4.getMonetizationRestrictions;
            var4 = var3.bind(var4)(var7);
            var5 = _closure1_slot2;
            var3 = var5.getGuild;
            var5 = var3.bind(var5)(var7);
            var3 = _closure1_slot1;
            var3 = var3.FETCHED;
            if(!(var6 !== var3)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var6 = var1 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var7 = var5.features;
            var6 = var7.has;
            var5 = _closure1_slot4;
            var5 = var5.CREATOR_MONETIZABLE_RESTRICTED;
            var3 = var6.bind(var7)(var5);
case 8:
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = var3;
case 10:
            _fun0004_ip = 12; continue _fun0004;
case 6:
            var3 = _closure1_slot6;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 12:
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['shouldRestrictUpdatingCreatorMonetizationSettings'] = var4;
    var2 = function isRestrictedFromMonetizationReapplication(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var3 = var4.includes;
            var2 = _closure1_slot3;
            var2 = var2.REAPPLICATION_DISABLED;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['isRestrictedFromMonetizationReapplication'] = var2;
    return var1;
})();