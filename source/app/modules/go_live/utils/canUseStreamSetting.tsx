// app/modules/go_live/utils/canUseStreamSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamQualities;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/canUseStreamSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canUseStreamSetting(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var7 = arg2;
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.quality;
            if(!(var5 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.guildPremiumTier;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var3.quality;
            var1 = var5 != var1;
            var4 = false;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var3.quality;
            var6 = _closure1_slot3;
            var6 = var6.HIGH_STREAMING_QUALITY;
            if(!(var6 !== var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot3;
            var6 = var6.MID_STREAMING_QUALITY;
            if(!(var6 !== var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var3.quality;
            var4 = false;
            _fun0001_ip = 6; continue _fun0001;
case 10:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 1;
            var6 = var11[var2];
            var9 = undefined;
            var8 = var10.bind(var9)(var6);
            var6 = var8.canStreamQuality;
            var2 = var11[var2];
            var2 = var10.bind(var9)(var2);
            var2 = var2.StreamQuality;
            var2 = var2.MID;
            var4 = var6.bind(var8)(var2, var7);
            _fun0001_ip = 6; continue _fun0001;
case 8:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 1;
            var2 = var10[var1];
            var8 = undefined;
            var6 = var9.bind(var8)(var2);
            var2 = var6.canStreamQuality;
            var1 = var10[var1];
            var1 = var9.bind(var8)(var1);
            var1 = var1.StreamQuality;
            var1 = var1.HIGH;
            var4 = var2.bind(var6)(var1, var7);
case 6:
            var2 = var3.guildPremiumTier;
            var1 = var4;
            if(!(var5 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var4;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.isGuildBoostedAtLeast;
            var4 = var3.guildPremiumTier;
            var3 = arg3;
            var2 = var5.bind(var6)(var3, var4);
case 14:
            var1 = var2;
case 12:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();