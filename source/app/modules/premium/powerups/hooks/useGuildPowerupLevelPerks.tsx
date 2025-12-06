// app/modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_FEATURE_TO_PERK;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupLevelPerks(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var8;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {'includeEmojis': true, 'includeStickers': true, 'includeSoundboards': true};
case 2:
            var7 = var2.includeEmojis;
            var _closure2_slot1 = var7;
            var6 = var2.includeStickers;
            var _closure2_slot2 = var6;
            var5 = var2.includeSoundboards;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = new Array(0);
                    var2 = _closure1_slot4;
                    var7 = undefined;
                    var2 = var2.bind(var7)();
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = var3.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 2;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.PerkIcons;
                    var8 = var8.EMOJI;
                    var2['perkIcon'] = var8;
                    var8 = 3;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var11 = var8.intl;
                    var10 = var11.formatToPlainString;
                    var9 = _closure1_slot1;
                    var8 = 4;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.NXvV0+;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var13 = var12.features;
                    var13 = var13.total_emoji_slots;
                    var8['totalEmojis'] = var13;
                    var12 = var12.features;
                    var12 = var12.additional_emoji_slots;
                    var8['additionalEmojis'] = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['description'] = var8;
                    var2 = var6.bind(var3)(var2);
case 4:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = var3.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 2;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.PerkIcons;
                    var8 = var8.STICKER;
                    var2['perkIcon'] = var8;
                    var8 = 3;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var11 = var8.intl;
                    var10 = var11.formatToPlainString;
                    var9 = _closure1_slot1;
                    var8 = 4;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.ZEvvPz;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var13 = var12.features;
                    var13 = var13.total_sticker_slots;
                    var8['totalStickers'] = var13;
                    var12 = var12.features;
                    var12 = var12.additional_sticker_slots;
                    var8['additionalStickers'] = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['description'] = var8;
                    var2 = var6.bind(var3)(var2);
case 6:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = var3.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 2;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.PerkIcons;
                    var8 = var8.SOUNDBOARD;
                    var2['perkIcon'] = var8;
                    var8 = 3;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var11 = var8.intl;
                    var10 = var11.formatToPlainString;
                    var9 = _closure1_slot1;
                    var8 = 4;
                    var8 = var12[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.s9u/E7;
                    var8 = {};
                    var12 = _closure2_slot0;
                    var13 = var12.features;
                    var13 = var13.total_sound_slots;
                    var8['totalSoundboards'] = var13;
                    var12 = var12.features;
                    var12 = var12.additional_sound_slots;
                    var8['additionalSoundboards'] = var12;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['description'] = var8;
                    var2 = var6.bind(var3)(var2);
case 8:
                    var2 = var3.concat;
                    var5 = _closure2_slot0;
                    var5 = var5.features;
                    var6 = var5.features;
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var2[var1];
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.filter;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 5;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.isNotNullish;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();