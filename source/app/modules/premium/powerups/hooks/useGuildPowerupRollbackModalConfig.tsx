// app/modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupRollbackModalConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 3;
            var3 = var6[var8];
            var10 = undefined;
            var7 = var4.bind(var10)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var7)(var4, var3);
            var4 = _closure1_slot1;
            var3 = 4;
            var3 = var6[var3];
            var3 = var4.bind(var10)(var3);
            var6 = var3.bind(var10)(var11);
            var4 = null;
            var3 = var4 != var6;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6;
case 2:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var9 = var7.bind(var10)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var8 = var4 == var6;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var6.allPowerups;
            var6 = var4 == var8;
            var7 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 5;
            var6 = var12[var6];
            var6 = var9.bind(var10)(var6);
            var6 = var6.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
            var7 = var8[var6];
case 4:
            var _closure2_slot1 = var7;
            var8 = var4 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var7.storeRemovalDate;
case 7:
            var _closure2_slot2 = var6;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var8 = var12[var8];
            var10 = var9.bind(var10)(var8);
            var9 = var10.useShouldShowFileUploadRollback;
            var8 = arg2;
            var8 = var9.bind(var10)(var11, var8);
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = var8;
case 9:
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4 != var5;
case 11:
            var _closure2_slot3 = var3;
            var5 = _closure1_slot3;
            var4 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var3;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var1 = _closure2_slot2;
                    if(!(var2 != var1)) { _fun0002_ip = 13; continue _fun0002 }
case 16:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 7;
                    var1 = var9[var1];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var1);
                    var1 = _closure2_slot2;
                    var7 = var4.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure1_slot0;
                    var2 = 8;
                    var2 = var9[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL;
                    var1['dismissibleContent'] = var2;
                    var2 = _closure2_slot1;
                    var14 = var2.title;
                    var4 = 9;
                    var2 = var9[var4];
                    var2 = var5.bind(var3)(var2);
                    var13 = var2.intl;
                    var12 = var13.formatToPlainString;
                    var2 = 10;
                    var10 = var9[var2];
                    var10 = var8.bind(var3)(var10);
                    var11 = var10["6e2ry1"];
                    var10 = {};
                    var10['dateString'] = var7;
                    var13 = var12.bind(var13)(var11, var10);
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var12 = var10.concat;
                    var11 = '';
                    var10 = ' ';
                    var10 = var12.bind(var11)(var14, var10, var13);
                    var1['header'] = var10;
                    var4 = var9[var4];
                    var4 = var5.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var3 = var2.jd8fki;
                    var2 = {};
                    var2['startDate'] = var7;
                    var2['endDate'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.title;
                    var2['perkName'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.cost;
                    var2['boostCount'] = var6;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['bodies'] = var2;
                    var2 = false;
                    var1['hasCancelButton'] = var2;
                    return var1;
case 13:
                    var1 = null;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var1, var2);
            var1 = {};
            var1['shouldShow'] = var3;
            var1['modalConfig'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();