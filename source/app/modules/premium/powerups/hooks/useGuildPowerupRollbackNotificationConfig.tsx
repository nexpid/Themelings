// app/modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupRollbackNotificationConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var2 = var6[var2];
            var7 = undefined;
            var6 = var4.bind(var7)(var2);
            var4 = var6.useStateFromStores;
            var8 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var6)(var2, var1);
            var9 = null;
            var2 = var9 == var1;
            var8 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.allPowerups;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var7)(var1);
            var1 = var1.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
            var8 = var2[var1];
case 2:
            var1 = var9 == var8;
            var11 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var8.storeRemovalDate;
case 4:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var4 = var2.bind(var7)(var1);
            var2 = var4.useShouldShowFileUploadRollback;
            var1 = arg2;
            var2 = var2.bind(var4)(var5, var1);
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var9 != var11;
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var9 == var8;
            var2 = undefined;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var8.title;
case 9:
            var2 = var9 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var4 = var9 == var8;
            var2 = undefined;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var8.cost;
case 12:
            var2 = var9 != var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 14:
            var2 = {};
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 4;
            var4 = var13[var4];
            var4 = var5.bind(var7)(var4);
            var4 = var4.DismissibleContent;
            var4 = var4.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION;
            var2['dismissibleContent'] = var4;
            var4 = 5;
            var6 = var13[var4];
            var6 = var5.bind(var7)(var6);
            var16 = var6.intl;
            var15 = var16.formatToPlainString;
            var12 = _closure1_slot1;
            var3 = 6;
            var6 = var13[var3];
            var6 = var12.bind(var7)(var6);
            var14 = var6["6e2ry1"];
            var6 = {};
            var10 = 7;
            var17 = var13[var10];
            var17 = var12.bind(var7)(var17);
            var17 = var17.bind(var7)(var11);
            var6['dateString'] = var17;
            var6 = var15.bind(var16)(var14, var6);
            var2['title'] = var6;
            var4 = var13[var4];
            var4 = var5.bind(var7)(var4);
            var6 = var4.intl;
            var5 = var6.formatToPlainString;
            var3 = var13[var3];
            var3 = var12.bind(var7)(var3);
            var4 = var3.jd8fki;
            var3 = {};
            var14 = var13[var10];
            var14 = var12.bind(var7)(var14);
            var14 = var14.bind(var7)(var11);
            var3['startDate'] = var14;
            var10 = var13[var10];
            var10 = var12.bind(var7)(var10);
            var10 = var10.bind(var7)(var11);
            var3['endDate'] = var10;
            var11 = var9 == var8;
            var10 = undefined;
            if(var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var10 = var8.title;
case 15:
            var3['perkName'] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = var8.cost;
case 17:
            var3['boostCount'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2['description'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();