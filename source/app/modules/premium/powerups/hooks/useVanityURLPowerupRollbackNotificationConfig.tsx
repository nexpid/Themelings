// app/modules/premium/powerups/hooks/useVanityURLPowerupRollbackNotificationConfig.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useVanityURLPowerupRollbackNotificationConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVanityURLPowerupRollbackNotificationConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var6 = var4[var2];
            var10 = undefined;
            var11 = var3.bind(var10)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.features;
case 2:
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var7, var6);
            var2 = var4[var2];
            var4 = var3.bind(var10)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var13 = null;
            var2 = var13 == var1;
            var4 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.allPowerups;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var3.bind(var10)(var1);
            var1 = var1.VANITY_URL_POWERUP_SKU_ID;
            var4 = var2[var1];
case 4:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var2.bind(var10)(var1);
            var1 = var1.bind(var10)(var8, var4);
            var3 = _closure1_slot0;
            var2 = 7;
            var2 = var6[var2];
            var6 = var3.bind(var10)(var2);
            var3 = var6.useVanityURLPerkRollbackEnabled;
            var2 = arg2;
            var3 = var3.bind(var6)(var8, var2);
            var2 = var13 == var4;
            var14 = var4;
            var9 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var14.storeRemovalDate;
case 6:
            var2 = var13 == var7;
            var4 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.has;
            var2 = _closure1_slot6;
            var2 = var2.PARTNERED;
            var4 = var6.bind(var7)(var2);
case 8:
            var2 = var13 != var4;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var4;
case 10:
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var13 != var9;
case 12:
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = !var2;
case 14:
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var1.type;
            var1 = _closure1_slot5;
            var1 = var1.POWERUP_ACTIVATED;
            var3 = var2 === var1;
case 16:
            var1 = {};
            var1['shouldShow'] = var3;
            var2 = null;
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = {};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 8;
            var4 = var7[var6];
            var4 = var8.bind(var10)(var4);
            var12 = var4.intl;
            var11 = var12.formatToPlainString;
            var8 = _closure1_slot1;
            var4 = 9;
            var7 = var7[var4];
            var7 = var8.bind(var10)(var7);
            var8 = var7.mgoPkU;
            var7 = {};
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var14.title;
case 20:
            var7['perkName'] = var13;
            var7 = var11.bind(var12)(var8, var7);
            var3['title'] = var7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = var12[var6];
            var6 = var7.bind(var10)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var11 = _closure1_slot1;
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var5 = var4.UT9pkI;
            var4 = {};
            var8 = 10;
            var8 = var12[var8];
            var8 = var11.bind(var10)(var8);
            var8 = var8.bind(var10)(var9);
            var4['dateString'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var3['description'] = var4;
            var2 = var3;
case 18:
            var1['notificationConfig'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();