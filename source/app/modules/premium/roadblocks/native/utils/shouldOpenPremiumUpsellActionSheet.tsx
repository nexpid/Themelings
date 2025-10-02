// app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _maybeOpenPremiumUpsellActionSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg2;
            var2 = null;
            var1 = var2 == var6;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6.getCurrentConfig;
            var4 = {};
            var3 = 'isUpsellEnabled';
            var4['location'] = var3;
            var3 = {};
            var7 = true;
            var3['autoTrackExposure'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = var3.enabled;
case 4:
            var1 = var2;
case 2:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot3;
            var3 = var4.get;
            var2 = 'premium_roadblocks';
            var1 = var3.bind(var4)(var2);
case 6:
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 8:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function maybeOpenPremiumUpsellActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.initialUpsellKey;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 2;
            var2 = var2[var6];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.UPLOAD;
            if(!(var2 !== var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.GLOBAL_EMOJI;
            if(!(var2 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.ANIMATED_EMOJI;
            if(!(var2 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.SOUNDBOARD;
            if(!(var2 !== var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.APP_ICONS;
            if(!(var2 !== var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = false;
            return var2;
case 18:
            var5 = _closure1_slot4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var4 = var2.APP_ICONS;
            var2 = 4;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.PremiumAppIconsUpsellExperiment;
            var2 = var5.bind(var3)(var4, var2);
            return var2;
case 16:
            var4 = _closure1_slot4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SOUNDBOARD_EVERYWHERE;
            var2 = var4.bind(var3)(var2);
            return var2;
case 14:
            var4 = _closure1_slot4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.ANIMATED_EMOJIS;
            var2 = var4.bind(var3)(var2);
            return var2;
case 12:
            var4 = _closure1_slot4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.EMOJIS_EVERYWHERE;
            var2 = var4.bind(var3)(var2);
            return var2;
case 10:
            var2 = _closure1_slot4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var1 = var1.EntitlementFeatureNames;
            var1 = var1.INCREASED_FILE_UPLOAD_SIZE;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();