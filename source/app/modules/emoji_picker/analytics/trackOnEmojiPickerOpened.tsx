// app/modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function trackOnEmojiPickerOpened(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.intention;
            var16 = var1.containerWidth;
            var13 = var1.rowSize;
            var10 = var1.isBurstReaction;
            var8 = var1.analyticsObject;
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var4 = _closure1_slot6;
            var1 = var4.getChannelId;
            var1 = var1.bind(var4)();
            var17 = var2.bind(var3)(var1);
            var6 = null;
            var2 = var6 == var17;
            var1 = undefined;
            var4 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var17.getGuildId;
            var4 = var2.bind(var17)();
case 2:
            var2 = _closure1_slot8;
            var2 = var2.REACTION;
            if(!(var9 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot4;
            var2 = var2.emojiFrecencyWithoutFetchingLatest;
            var3 = var2.frequently;
            var2 = var3.slice;
            var12 = var2.bind(var3)();
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = _closure1_slot4;
            var2 = var2.emojiReactionFrecencyWithoutFetchingLatest;
            var3 = var2.frequently;
            var2 = var3.slice;
            var12 = var2.bind(var3)();
case 6:
            if(!(var6 == var17)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var22 = new Array(0);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var5 = _closure1_slot4;
            var3 = var5.getDisambiguatedEmojiContext;
            var2 = var17.getGuildId;
            var2 = var2.bind(var17)();
            var2 = var3.bind(var5)(var2);
            var22 = var2.favoriteEmojisWithoutFetchingLatest;
case 9:
            var2 = _closure1_slot8;
            var2 = var2.REACTION;
            if(!(var9 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot4;
            var2 = var2.emojiFrecencyWithoutFetchingLatest;
            var3 = var2.numFrequentlyItems;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var2 = _closure1_slot4;
            var2 = var2.emojiReactionFrecencyWithoutFetchingLatest;
            var3 = var2.numFrequentlyItems;
case 12:
            var2 = var12.slice;
            var5 = 0;
            var18 = var2.bind(var12)(var5, var3);
            if(!(var6 == var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = new Array(0);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var3 = _closure1_slot4;
            var2 = var3.getGuildEmoji;
            var14 = var2.bind(var3)(var4);
case 15:
            var4 = _closure1_slot4;
            var3 = var4.getDisambiguatedEmojiContext;
            var12 = var6 == var17;
            var2 = undefined;
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var17.getGuildId;
            var2 = var12.bind(var17)();
case 16:
            var2 = var3.bind(var4)(var2);
            var4 = var2.groupedCustomEmojis;
            if(!(var6 == var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = {};
case 18:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.values;
            var4 = var2.bind(var3)(var4);
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.length;
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var12 = var3.bind(var4)(var2, var5);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.getTopAndNewlyAddedEmojis;
            var2 = {};
            var15 = var6 == var17;
            var5 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = var17.getGuildId;
            var5 = var15.bind(var17)();
case 20:
            var2['guildId'] = var5;
            var2['pickerIntention'] = var9;
            var2 = var3.bind(var4)(var2);
            var17 = var2.topEmojis;
            var15 = var2.newlyAddedEmojis;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var3 = var5.getEmojiHotrail;
            var2 = {};
            var2['topEmojis'] = var17;
            var2['newlyAddedEmojis'] = var15;
            var2['rowSize'] = var13;
            var2 = var3.bind(var5)(var2);
            var15 = var2.visibleTopEmojis;
            var13 = var2.visibleNewlyAddedEmojis;
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var2 = var2.REACTION;
            if(!(var9 !== var2)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot7;
            var3 = var2.EXPRESSION_PICKER_OPENED;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var2 = _closure1_slot7;
            var3 = var2.REACTION_PICKER_OPENED;
case 24:
            var2 = {};
            var2['width'] = var16;
            var16 = _closure1_slot9;
            var16 = var16.EMOJI;
            var2['tab'] = var16;
            var16 = false;
            var2['badged'] = var16;
            var16 = var22.length;
            var2['num_expressions_favorites'] = var16;
            var17 = var22.filter;
            var16 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var1 = var2.animated;
case 25:
                    return var1;
                }
            };
            var16 = var17.bind(var22)(var16);
            var16 = var16.length;
            var2['num_animated_expressions_favorites'] = var16;
            var21 = var22.filter;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var16 = 10;
            var17 = var20[var16];
            var17 = var19.bind(var1)(var17);
            var17 = var17.isCustomEmoji;
            var17 = var21.bind(var22)(var17);
            var17 = var17.length;
            var2['num_custom_expressions_favorites'] = var17;
            var21 = var22.filter;
            var17 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var17 = var21.bind(var22)(var17);
            var17 = var17.length;
            var2['num_standard_expressions_favorites'] = var17;
            var17 = var18.length;
            var2['num_expressions_frecent'] = var17;
            var21 = var18.filter;
            var17 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = var2.animated;
case 25:
                    return var1;
                }
            };
            var17 = var21.bind(var18)(var17);
            var17 = var17.length;
            var2['num_animated_expressions_frecent'] = var17;
            var17 = var18.filter;
            var16 = var20[var16];
            var16 = var19.bind(var1)(var16);
            var16 = var16.isCustomEmoji;
            var16 = var17.bind(var18)(var16);
            var16 = var16.length;
            var2['num_custom_expressions_frecent'] = var16;
            var17 = var18.filter;
            var16 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var16 = var16.length;
            var2['num_standard_expressions_frecent'] = var16;
            var14 = var14.length;
            var2['num_current_guild_expressions'] = var14;
            var2['num_custom_expressions_total'] = var12;
            var12 = var15.length;
            var2['num_expressions_top_server'] = var12;
            var14 = var15.filter;
            var12 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var12 = var14.bind(var15)(var12);
            var12 = var12.length;
            var2['num_animated_expressions_top_server'] = var12;
            var12 = var13.length;
            var2['num_expressions_newly_added'] = var12;
            var12 = var13.filter;
            var11 = function(arg1) {
                var1 = arg1;
                var1 = var1.animated;
                return var1;
            };
            var11 = var12.bind(var13)(var11);
            var11 = var11.length;
            var2['num_animated_expressions_newly_added'] = var11;
            var7 = _closure1_slot8;
            var7 = var7.REACTION;
            var7 = var9 === var7;
            if(!var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = {};
            var9['is_burst'] = var10;
            var7 = var9;
case 27:
            var24 = var2;
            var23 = var7;
            var7 = copyDataProperties(var24, var23);
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var7 = {};
            var7['location_object'] = var8;
            var6 = var7;
case 29:
            var24 = var2;
            var23 = var6;
            var6 = copyDataProperties(var24, var23);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.EmojiIntention;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ExpressionPickerViewType;
    var _closure1_slot9 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emoji_picker/analytics/trackOnEmojiPickerOpened.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useTrackOnEmojiPickerOpenedForReactions(arg1) {
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.current;
                var4 = var2.intention;
                var3 = _closure1_slot8;
                var3 = var3.REACTION;
                if(!(var4 === var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var3 = _closure1_slot10;
                var1 = _closure2_slot0;
                var2 = var1.current;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 31:
                var1 = undefined;
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useTrackOnEmojiPickerOpenedForReactions'] = var2;
    return var1;
})();