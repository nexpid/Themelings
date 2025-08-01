// app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useIsFeatureUpsellEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.featureEnabledPredicate;
            var _closure2_slot0 = var3;
            var9 = var2.FeatureExperiment;
            var4 = var2.experimentEnabledPredicate;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 38; continue _fun0001 }
 33:
            var4 = function p(arg1) {
                var1 = arg1;
                var1 = var1.enabled;
                return var1;
            };
 38:
            var8 = _closure1_slot3;
            var6 = var8.useContext;
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 4;
            var5 = var7[var5];
            var5 = var10.bind(var3)(var5);
            var11 = var6.bind(var8)(var5);
            var6 = _closure1_slot0;
            var5 = 5;
            var8 = var7[var5];
            var13 = var6.bind(var3)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var12.bind(var13)(var10, var8);
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.get;
                var1 = 'premium_roadblocks';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var6)(var2, var1);
            var5 = null;
            var6 = var5 == var9;
            var2 = undefined;
            if(var6) { _fun0001_ip = 219; continue _fun0001 }
 168:
            var8 = var9.useExperiment;
            var7 = {};
            var6 = 'useIsFeatureUpsellEnabled';
            var7['location'] = var6;
            var6 = {};
            var12 = !var10;
            if(!var12) { _fun0001_ip = 197; continue _fun0001 }
 194:
            var12 = var11;
 197:
            var6['autoTrackExposure'] = var12;
            if(var10) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var10 = !var11;
 208:
            var6['disable'] = var10;
            var2 = var8.bind(var9)(var7, var6);
 219:
            if(var1) { _fun0001_ip = 226; continue _fun0001 }
 222:
            var1 = var5 == var2;
 226:
            if(var1) { _fun0001_ip = 234; continue _fun0001 }
 229:
            var1 = var4.bind(var3)(var2);
 234:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = 'modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSoundboardSectionNitroLocked(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg2;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.SoundboardSoundGridSectionType;
            var1 = var1.GUILD;
            var1 = var3 === var1;
            if(!var1) { _fun0002_ip = 69; continue _fun0002 }
 52:
            var2 = var2.guild;
            var3 = var2.id;
            var2 = arg1;
            var1 = var3 !== var2;
 69:
            return var1;
        }
    };
    var3['isSoundboardSectionNitroLocked'] = var4;
    var4 = function useIsPremiumFileUploadUpsellEnabled() {
        var3 = _closure1_slot6;
        var2 = {};
        var5 = function featureEnabledPredicate(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.canUploadLargeFiles;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['featureEnabledPredicate'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.PremiumFileUploadUpsellExperiment;
        var2['FeatureExperiment'] = var5;
        var4 = function experimentEnabledPredicate(arg1) {
            var1 = arg1;
            var1 = var1.showInlineUpsell;
            return var1;
        };
        var2['experimentEnabledPredicate'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsPremiumFileUploadUpsellEnabled'] = var4;
    var4 = function useIsPremiumAppIconUpsellEnabled() {
        var3 = _closure1_slot6;
        var2 = {};
        var4 = function featureEnabledPredicate(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.canUsePremiumAppIcons;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2['featureEnabledPredicate'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var4 = var4.PremiumAppIconsUpsellExperiment;
        var2['FeatureExperiment'] = var4;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsPremiumAppIconUpsellEnabled'] = var4;
    var2 = function getUpsellType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 8;
            var2 = var2[var5];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.ANIMATED_EMOJIS;
            if(!(var2 !== var6)) { _fun0003_ip = 518; continue _fun0003 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.EMOJIS_EVERYWHERE;
            if(!(var2 !== var6)) { _fun0003_ip = 484; continue _fun0003 }
 83:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.INCREASED_FILE_UPLOAD_SIZE;
            if(!(var2 !== var6)) { _fun0003_ip = 450; continue _fun0003 }
 119:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SOUNDBOARD_EVERYWHERE;
            if(!(var2 !== var6)) { _fun0003_ip = 416; continue _fun0003 }
 155:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.CLIENT_THEMES;
            if(!(var2 !== var6)) { _fun0003_ip = 382; continue _fun0003 }
 191:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.APP_ICONS;
            if(!(var2 !== var6)) { _fun0003_ip = 348; continue _fun0003 }
 227:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SAVED_MESSAGES;
            if(!(var2 !== var6)) { _fun0003_ip = 314; continue _fun0003 }
 260:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = 'Missing featureName: ';
            var4 = var4.bind(var2)(var6);
            var2 = false;
            var2 = var5.bind(var3)(var2, var4);
            return var3;
 314:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.FOR_LATER;
            return var2;
 348:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.APP_ICONS;
            return var2;
 382:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.CLIENT_THEMES;
            return var2;
 416:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.SOUNDBOARD;
            return var2;
 450:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.UPLOAD;
            return var2;
 484:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.GLOBAL_EMOJI;
            return var2;
 518:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.UpsellTypes;
            var1 = var1.ANIMATED_EMOJI;
            return var1;
        }
    };
    var3['getUpsellType'] = var2;
    return var1;
})();