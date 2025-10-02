// app/modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var11 = 0;
    var8 = var7[var11];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var10 = 1;
    var2 = var7[var10];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = var7[var10];
    var2 = var6.bind(var1)(var2);
    var2 = var2.LoadState;
    var _closure1_slot5 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var2 = var2.EmojiCategoryTypes;
    var _closure1_slot6 = var2;
    var8 = 3;
    var2 = var7[var8];
    var2 = var6.bind(var1)(var2);
    var2 = var2.EmojiPickerRenderingDataType;
    var _closure1_slot7 = var2;
    var2 = {};
    var2['PLACEHOLDER'] = var11;
    var5 = 'PLACEHOLDER';
    var2[var11] = var5;
    var2['TITLE'] = var10;
    var5 = 'TITLE';
    var2[var10] = var5;
    var2['EMOJI_ROW'] = var9;
    var5 = 'EMOJI_ROW';
    var2[var9] = var5;
    var2['EMOJI_ROW_SLIM'] = var8;
    var5 = 'EMOJI_ROW_SLIM';
    var2[var8] = var5;
    var8 = 4;
    var2['EMOJI_ROW_NSFW'] = var8;
    var5 = 'EMOJI_ROW_NSFW';
    var2[var8] = var5;
    var8 = 5;
    var2['FOOTER_UPSELL'] = var8;
    var5 = 'FOOTER_UPSELL';
    var2[var8] = var5;
    var8 = 6;
    var2['PREMIUM_INLINE_ROADBLOCK'] = var8;
    var5 = 'PREMIUM_INLINE_ROADBLOCK';
    var2[var8] = var5;
    var8 = 7;
    var2['NATIVE_SECTION'] = var8;
    var5 = 'NATIVE_SECTION';
    var2[var8] = var5;
    var _closure1_slot8 = var2;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emoji_picker/native/components/data/useEmojiPickerData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useEmojiPickerData(arg1) {
        var2 = arg1;
        var7 = var2.emojiSections;
        var _closure2_slot0 = var7;
        var6 = var2.rowSize;
        var _closure2_slot1 = var6;
        var5 = var2.isNativeEmojiPickerEnabled;
        var _closure2_slot2 = var5;
        var8 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var9 = var8.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure1_slot4;
                var3 = var1.loadState;
                var1 = _closure1_slot5;
                var1 = var1.Loaded;
                var1 = var3 === var1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure1_slot5;
                var2 = var2.MaybeLoaded;
                var1 = var3 === var2;
case 2:
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot2;
                var1 = !var2;
case 4:
                return var1;
            }
        };
        var8 = var8.bind(var9)(var4, var3);
        var _closure2_slot3 = var8;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            var1 = {};
            var3 = _closure1_slot8;
            var3 = var3.PLACEHOLDER;
            var1['type'] = var3;
            var4 = false;
            var1['isSectionNitroLocked'] = var4;
            var3 = new Array(1);
            var3[0] = var1;
            var _closure3_slot0 = var3;
            var1 = {};
            var1['data'] = var3;
            var5 = _closure2_slot1;
            var1['rowSize'] = var5;
            var5 = new Array(0);
            var1['headerIndices'] = var5;
            var5 = _closure2_slot3;
            var1['hasGuildData'] = var5;
            var1['hasSearchData'] = var4;
            var1['hasSearchUpsell'] = var4;
            var _closure3_slot1 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var7 = arg2;
                    var1 = var4.isSectionNitroLocked;
                    var6 = true;
                    var8 = var6 === var1;
                    var1 = !var8;
                    var3 = !var1;
                    var2 = var3;
                    if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var1 = 1;
                    var1 = var7 - var1;
                    var5 = var5[var1];
                    var1 = null;
                    var9 = var1 == var5;
                    var1 = undefined;
                    if(var9) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var1 = var5.isSectionNitroLocked;
case 7:
                    var2 = var6 !== var1;
case 6:
                    if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot0;
                    var1 = 1;
                    var1 = var7 + var1;
                    var5 = var5[var1];
                    var1 = null;
                    var7 = var1 == var5;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var1 = var5.isSectionNitroLocked;
case 11:
                    var3 = var6 !== var1;
case 9:
                    var7 = var4.type;
                    var5 = _closure1_slot7;
                    var5 = var5.NATIVE_SECTION;
                    if(!(var7 === var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var9 = _closure3_slot0;
                    var7 = var9.push;
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var5 = var10[var5];
                    var10 = undefined;
                    var5 = var11.bind(var10)(var5);
                    var5 = var5.bind(var10)(var4, var2, var3);
                    var5 = var7.bind(var9)(var5);
                    _fun0002_ip = 15; continue _fun0002;
case 13:
                    if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = _closure3_slot0;
                    var5 = var7.push;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 6;
                    var2 = var12[var2];
                    var10 = undefined;
                    var9 = var9.bind(var10)(var2);
                    var11 = _closure1_slot0;
                    var2 = 7;
                    var2 = var12[var2];
                    var2 = var11.bind(var10)(var2);
                    var2 = var2.PremiumUpsellSectionDividerPosition;
                    var2 = var2.START;
                    var2 = var9.bind(var10)(var2);
                    var2 = var5.bind(var7)(var2);
case 16:
                    var5 = var4.label;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var2 = _closure3_slot0;
                    var9 = var2.push;
                    var7 = {};
                    var10 = _closure1_slot8;
                    var10 = var10.TITLE;
                    var7['type'] = var10;
                    var10 = var4.label;
                    var7['title'] = var10;
                    var7['isSectionNitroLocked'] = var8;
                    var7 = var9.bind(var2)(var7);
                    var5 = _closure3_slot1;
                    var7 = var5.headerIndices;
                    var5 = var7.push;
                    var9 = var2.length;
                    var2 = 1;
                    var2 = var9 - var2;
                    var2 = var5.bind(var7)(var2);
case 18:
                    var2 = global;
                    var7 = var2.Math;
                    var5 = var7.ceil;
                    var2 = var4.emojis;
                    var9 = var2.length;
                    var2 = _closure2_slot1;
                    var2 = var9 / var2;
                    var11 = var5.bind(var7)(var2);
                    var10 = 0;
                    var13 = var10 < var11;
                    var9 = 8;
                    var5 = undefined;
                    var7 = 0;
                    if(!var13) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var13 = _closure2_slot2;
                    if(var13) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var14 = var4.type;
                    var13 = _closure1_slot7;
                    var13 = var13.EMOJI;
                    if(!(var14 !== var13)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var14 = var4.type;
                    var13 = _closure1_slot7;
                    var13 = var13.NSFW;
                    if(!(var14 === var13)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var15 = _closure3_slot0;
                    var14 = var15.push;
                    var13 = {};
                    var16 = _closure1_slot8;
                    var16 = var16.EMOJI_ROW_NSFW;
                    var13['type'] = var16;
                    var13['isSectionNitroLocked'] = var8;
                    var13 = var14.bind(var15)(var13);
                    _fun0002_ip = 26; continue _fun0002;
case 24:
                    var15 = _closure3_slot0;
                    var14 = var15.push;
                    var13 = {};
                    var16 = _closure1_slot8;
                    var16 = var16.EMOJI_ROW;
                    var13['type'] = var16;
                    var13['row'] = var7;
                    var16 = var4.emojis;
                    var13['emojis'] = var16;
                    var16 = var4.emojisDisabled;
                    var13['emojisDisabled'] = var16;
                    var16 = var4.footer;
                    var13['footer'] = var16;
                    var13['isSectionNitroLocked'] = var8;
                    var13 = var14.bind(var15)(var13);
                    _fun0002_ip = 26; continue _fun0002;
case 22:
                    var13 = var10 === var7;
                    if(!var13) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var15 = var4.type;
                    var14 = _closure1_slot7;
                    var14 = var14.EMOJI;
                    var13 = var15 === var14;
case 28:
                    if(!var13) { _fun0002_ip = 26; continue _fun0002 }
case 30:
                    var14 = _closure3_slot1;
                    var13 = var14.hasSearchData;
                    if(var13) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var16 = var4.footer;
                    var15 = _closure1_slot6;
                    var15 = var15.SEARCH_RESULTS;
                    var13 = var16 === var15;
case 31:
                    if(var13) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var16 = var4.footer;
                    var15 = _closure1_slot6;
                    var15 = var15.PREMIUM_UPSELL;
                    var13 = var16 === var15;
case 33:
                    var14['hasSearchData'] = var13;
                    var15 = _closure3_slot0;
                    var14 = var15.push;
                    var16 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var9];
                    var13 = var16.bind(var5)(var13);
                    var13 = var13.bind(var5)(var4);
                    var13 = var14.bind(var15)(var13);
case 26:
                    var7 = var7 + 1;
                    if(var7 < var11) { _fun0002_ip = 21; continue _fun0002 }
case 20:
                    var7 = var4.footer;
                    var4 = _closure1_slot6;
                    var4 = var4.PREMIUM_UPSELL;
                    if(!(var7 === var4)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var4 = _closure3_slot1;
                    var4['hasSearchUpsell'] = var6;
                    var7 = _closure3_slot0;
                    var6 = var7.push;
                    var4 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.FOOTER_UPSELL;
                    var4['type'] = var9;
                    var9 = _closure1_slot6;
                    var9 = var9.PREMIUM_UPSELL;
                    var4['id'] = var9;
                    var4['isSectionNitroLocked'] = var8;
                    var4 = var6.bind(var7)(var4);
case 35:
                    if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 37:
                    var3 = _closure3_slot0;
                    var2 = var3.push;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var6 = _closure1_slot0;
                    var1 = 7;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.PremiumUpsellSectionDividerPosition;
                    var1 = var1.END;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var4;
    var3['EmojiPickerFlashListItemType'] = var2;
    return var1;
})();