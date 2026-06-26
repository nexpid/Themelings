// app/modules/premium/powerups/utils/fileUpload.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/fileUpload.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowFileUploadRollback(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var7 = undefined;
            var5 = var4.bind(var7)(var3);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var5 = null;
            var3 = var5 == var1;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.allPowerups;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
            var4 = var3[var1];
case 2:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 4;
            var1 = var9[var1];
            var1 = var3.bind(var7)(var1);
            var3 = var1.bind(var7)(var8, var4);
            var6 = _closure1_slot0;
            var1 = 5;
            var1 = var9[var1];
            var7 = var6.bind(var7)(var1);
            var6 = var7.useFileUpload250MbPowerupRollbackEnabled;
            var1 = arg2;
            var1 = var6.bind(var7)(var8, var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5 != var4;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var4.storeRemovalDate;
            var1 = var5 != var4;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.type;
            var2 = _closure1_slot4;
            var2 = var2.POWERUP_ACTIVATED;
            var1 = var3 === var2;
case 8:
            return var1;
        }
    };
    var3['useShouldShowFileUploadRollback'] = var2;
    return var1;
})();