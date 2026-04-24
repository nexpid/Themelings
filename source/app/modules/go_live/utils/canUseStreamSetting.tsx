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
            var8 = arg2;
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
            var2 = var5 != var1;
            var4 = false;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var3.quality;
            var6 = _closure1_slot3;
            var6 = var6.HIGH_STREAMING_QUALITY;
            if(!(var7 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var3.quality;
            var6 = _closure1_slot3;
            var6 = var6.MID_STREAMING_QUALITY;
            var1 = false;
            if(!(var7 === var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 1;
            var7 = var12[var6];
            var10 = undefined;
            var9 = var11.bind(var10)(var7);
            var7 = var9.canStreamQuality;
            var6 = var12[var6];
            var6 = var11.bind(var10)(var6);
            var6 = var6.StreamQuality;
            var6 = var6.MID;
            var1 = var7.bind(var9)(var6, var8);
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 1;
            var6 = var11[var2];
            var9 = undefined;
            var7 = var10.bind(var9)(var6);
            var6 = var7.canStreamQuality;
            var2 = var11[var2];
            var2 = var10.bind(var9)(var2);
            var2 = var2.StreamQuality;
            var2 = var2.HIGH;
            var1 = var6.bind(var7)(var2, var8);
case 12:
            var4 = var1;
case 6:
            var2 = var3.guildPremiumTier;
            var1 = var4;
            if(!(var5 != var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var4;
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
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
case 15:
            var1 = var2;
case 13:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();