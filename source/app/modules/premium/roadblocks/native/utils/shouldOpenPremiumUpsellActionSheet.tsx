// app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function _maybeOpenPremiumUpsellActionSheet(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 0;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = true;
        return var1;
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeOpenPremiumUpsellActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.initialUpsellKey;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 1;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.UPLOAD;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.GLOBAL_EMOJI;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.ANIMATED_EMOJI;
            if(!(var2 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.SOUNDBOARD;
            if(!(var2 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = false;
            return var2;
case 8:
            var4 = _closure1_slot3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SOUNDBOARD_EVERYWHERE;
            var2 = var4.bind(var3)(var2);
            var2 = true;
            return var2;
case 6:
            var4 = _closure1_slot3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.ANIMATED_EMOJIS;
            var2 = var4.bind(var3)(var2);
            var2 = true;
            return var2;
case 4:
            var4 = _closure1_slot3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.EMOJIS_EVERYWHERE;
            var2 = var4.bind(var3)(var2);
            var2 = true;
            return var2;
case 2:
            var2 = _closure1_slot3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.INCREASED_FILE_UPLOAD_SIZE;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();