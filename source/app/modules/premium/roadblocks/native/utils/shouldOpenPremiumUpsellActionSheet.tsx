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
 0:
            var6 = arg2;
            var2 = null;
            var1 = var2 == var6;
            if(var1) { _fun0001_ip = 60; continue _fun0001 }
 12:
            var2 = var2 != var6;
            if(!var2) { _fun0001_ip = 57; continue _fun0001 }
 19:
            var5 = var6.getCurrentConfig;
            var4 = {};
            var3 = 'isUpsellEnabled';
            var4['location'] = var3;
            var3 = {};
            var7 = true;
            var3['autoTrackExposure'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = var3.enabled;
 57:
            var1 = var2;
 60:
            if(var1) { _fun0001_ip = 86; continue _fun0001 }
 63:
            var4 = _closure1_slot3;
            var3 = var4.get;
            var2 = 'premium_roadblocks';
            var1 = var3.bind(var4)(var2);
 86:
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 130; continue _fun0001 }
 95:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 130:
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
 0:
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
            if(!(var2 !== var4)) { _fun0002_ip = 386; continue _fun0002 }
 53:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.GLOBAL_EMOJI;
            if(!(var2 !== var4)) { _fun0002_ip = 343; continue _fun0002 }
 89:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.ANIMATED_EMOJI;
            if(!(var2 !== var4)) { _fun0002_ip = 300; continue _fun0002 }
 125:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.SOUNDBOARD;
            if(!(var2 !== var4)) { _fun0002_ip = 257; continue _fun0002 }
 158:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.APP_ICONS;
            if(!(var2 !== var4)) { _fun0002_ip = 195; continue _fun0002 }
 191:
            var2 = false;
            return var2;
 195:
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
 257:
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
 300:
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
 343:
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
 386:
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