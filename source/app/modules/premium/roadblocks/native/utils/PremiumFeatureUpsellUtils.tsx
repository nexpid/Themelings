// app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSoundboardSectionNitroLocked(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 0;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.SoundboardSoundGridSectionType;
            var1 = var1.GUILD;
            var1 = var3 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.guild;
            var3 = var2.id;
            var2 = arg1;
            var1 = var3 !== var2;
case 2:
            return var1;
        }
    };
    var3['isSoundboardSectionNitroLocked'] = var4;
    var2 = function getUpsellType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = 1;
            var2 = var2[var5];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.ANIMATED_EMOJIS;
            if(!(var2 !== var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.EMOJIS_EVERYWHERE;
            if(!(var2 !== var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.INCREASED_FILE_UPLOAD_SIZE;
            if(!(var2 !== var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SOUNDBOARD_EVERYWHERE;
            if(!(var2 !== var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.CLIENT_THEMES;
            if(!(var2 !== var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.APP_ICONS;
            if(!(var2 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EntitlementFeatureNames;
            var2 = var2.SAVED_MESSAGES;
            if(!(var2 !== var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
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
case 16:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.FOR_LATER;
            return var2;
case 14:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.APP_ICONS;
            return var2;
case 12:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.CLIENT_THEMES;
            return var2;
case 10:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.SOUNDBOARD;
            return var2;
case 8:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.UPLOAD;
            return var2;
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.UpsellTypes;
            var2 = var2.GLOBAL_EMOJI;
            return var2;
case 4:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
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