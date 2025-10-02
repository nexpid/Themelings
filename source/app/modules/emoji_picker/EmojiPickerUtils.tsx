// app/modules/emoji_picker/EmojiPickerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot21;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot21;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var6 = function useFrequentlyUsedEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = _closure2_slot0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.getFrequentlyUsedEmojisWithoutFetchingLatest;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var6;
    var5 = function useFrequentlyUsedReactionEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = _closure2_slot0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.getFrequentlyUsedReactionEmojisWithoutFetchingLatest;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var5;
    var4 = function useFavoriteEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            var1 = var1.favoriteEmojisWithoutFetchingLatest;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var10[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.EmojiCategories;
    var _closure1_slot8 = var11;
    var11 = var7.EmojiCategoryTypes;
    var _closure1_slot9 = var11;
    var7 = var7.EmojiSubCategory;
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot11 = var11;
    var11 = var7.AnalyticsPages;
    var _closure1_slot12 = var11;
    var11 = var7.AnalyticsSections;
    var _closure1_slot13 = var11;
    var11 = var7.AutoCompleteResultTypes;
    var _closure1_slot14 = var11;
    var7 = var7.SearchTypes;
    var _closure1_slot15 = var7;
    var7 = 7;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var11 = var7.isExternalEmojiAllowedForIntention;
    var _closure1_slot16 = var11;
    var7 = var7.EmojiIntention;
    var _closure1_slot17 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ExpressionPickerViewType;
    var _closure1_slot18 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.PremiumUpsellTypes;
    var _closure1_slot19 = var7;
    var7 = 22;
    var7 = var10[var7];
    var13 = var9.bind(var1)(var7);
    var12 = var13.throttle;
    var7 = 23;
    var7 = var10[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Millis;
    var11 = var7.HALF_SECOND;
    var8 = function(arg1) {
        var1 = arg1;
        var7 = var1.emojiSuggestions;
        var6 = var1.analyticsLocation;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.AUTO_SUGGEST_DISPLAYED;
        var2 = {};
        var8 = _closure1_slot14;
        var8 = var8.EMOJI;
        var2['suggestion_type'] = var8;
        var8 = var7.results;
        var8 = var8.length;
        var2['suggestion_quantity'] = var8;
        var10 = var7.results;
        var9 = var10.filter;
        var8 = function(arg1) {
            var1 = arg1;
            var1 = var1.emoji;
            var2 = var1.id;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var8 = var9.bind(var10)(var8);
        var8 = var8.length;
        var2['custom_quantity'] = var8;
        var7 = var7.loadId;
        var2['load_id'] = var7;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7 = {'leading': false, 'trailing': true};
    var7 = var12.bind(var13)(var8, var11, var7);
    var8 = 25;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/emoji_picker/EmojiPickerUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var14 = arg1;
            var16 = arg2;
            var15 = arguments[2];
            var5 = arguments[3];
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var16;
            var6 = undefined;
            if(!(var15 === var6)) { _fun0004_ip = 36; continue _fun0004 }
case 34:
            var2 = null;
            var3 = var2 == var16;
            var2 = undefined;
            if(var3) { _fun0004_ip = 5; continue _fun0004 }
case 37:
            var3 = var16.getGuildId;
            var2 = var3.bind(var16)();
case 5:
            var15 = var2;
case 36:
            var _closure2_slot2 = var15;
            if(!(var5 === var6)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var5 = false;
case 38:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var _closure2_slot9 = var6;
            var _closure2_slot10 = var6;
            var _closure2_slot11 = var6;
            var _closure2_slot12 = var6;
            var4 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 10;
            var3 = var18[var3];
            var7 = var4.bind(var6)(var3);
            var3 = var7.maybeFetchTopEmojisByGuild;
            var3 = var3.bind(var7)(var15);
            var3 = _closure1_slot16;
            var7 = var3.bind(var6)(var14);
            _closure2_slot4 = var7;
            var3 = _closure1_slot22;
            var9 = var3.bind(var6)(var15);
            _closure2_slot5 = var9;
            var3 = _closure1_slot23;
            var10 = var3.bind(var6)(var15);
            _closure2_slot6 = var10;
            var3 = _closure1_slot24;
            var8 = var3.bind(var6)(var15);
            _closure2_slot7 = var8;
            var11 = _closure1_slot1;
            var3 = 11;
            var3 = var18[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.bind(var6)(var15, var14);
            var13 = var3.topEmojis;
            var12 = var3.newlyAddedEmojis;
            var3 = 12;
            var3 = var18[var3];
            var11 = var11.bind(var6)(var3);
            var3 = {};
            var3['topEmojis'] = var13;
            var3['newlyAddedEmojis'] = var12;
            var3 = var11.bind(var6)(var3);
            var12 = var3.allEmojis;
            _closure2_slot8 = var12;
            var3 = 13;
            var11 = var18[var3];
            var20 = var4.bind(var6)(var11);
            var19 = var20.useStateFromStores;
            var11 = _closure1_slot4;
            var17 = new Array(1);
            var17[0] = var11;
            var13 = new Array(1);
            var13[0] = var15;
            var11 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getDisambiguatedEmojiContext;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var19.bind(var20)(var17, var11, var13);
            _closure2_slot9 = var17;
            var11 = var18[var3];
            var20 = var4.bind(var6)(var11);
            var19 = var20.useStateFromStores;
            var11 = _closure1_slot5;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var1 = var2.name;
case 40:
                    return var1;
                }
            };
            var11 = var19.bind(var20)(var13, var11);
            _closure2_slot10 = var11;
            var3 = var18[var3];
            var20 = var4.bind(var6)(var3);
            var19 = var20.useStateFromStores;
            var3 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var19.bind(var20)(var13, var3);
            var3 = 14;
            var3 = var18[var3];
            var13 = var4.bind(var6)(var3);
            var3 = var13.isPremium;
            var13 = var3.bind(var13)(var19);
            _closure2_slot11 = var13;
            var3 = 15;
            var3 = var18[var3];
            var6 = var4.bind(var6)(var3);
            var4 = var6.useSoundmojiEmojiPickerSectionExperiment;
            var3 = {};
            var18 = 'useEmojiCategories';
            var3['location'] = var18;
            var6 = var4.bind(var6)(var3);
            _closure2_slot12 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(13);
            var2[0] = var17;
            var2[1] = var16;
            var2[2] = var15;
            var2[3] = var14;
            var2[4] = var13;
            var2[5] = var12;
            var2[6] = var11;
            var2[7] = var10;
            var2[8] = var9;
            var2[9] = var8;
            var2[10] = var7;
            var2[11] = var6;
            var2[12] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot9;
                    var3 = var4.getGroupedCustomEmoji;
                    var19 = var3.bind(var4)();
                    var5 = _closure1_slot6;
                    var4 = var5.getFlattenedGuildIds;
                    var5 = var4.bind(var5)();
                    var18 = new Array(0);
                    var _closure3_slot0 = var18;
                    var6 = {};
                    var4 = _closure1_slot9;
                    var7 = var4.SOUNDMOJI;
                    var6['type'] = var7;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 16;
                    var8 = var11[var7];
                    var17 = undefined;
                    var8 = var10.bind(var17)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var17)(var7);
                    var7 = var7.t;
                    var7 = var7.f0Ezmp;
                    var7 = var8.bind(var9)(var7);
                    var6['name'] = var7;
                    var7 = _closure1_slot8;
                    var7 = var7.SOUNDMOJI;
                    var6['id'] = var7;
                    var7 = false;
                    var6['isNitroLocked'] = var7;
                    var16 = function getEmojiUnavailableReasons(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getEmojiUnavailableReasons;
                        var1 = {};
                        var4 = arg1;
                        var1['categoryEmojis'] = var4;
                        var5 = _closure2_slot1;
                        var1['channel'] = var5;
                        var5 = _closure2_slot2;
                        var1['guildId'] = var5;
                        var4 = _closure2_slot0;
                        var1['intention'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var _closure3_slot1 = var16;
                    var15 = var4.GUILD;
                    var4 = _closure1_slot20;
                    var14 = var4.bind(var17)(var5);
                    var5 = var14.bind(var17)();
                    var4 = var5.done;
                    var13 = null;
                    var12 = 0;
                    var11 = var5;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var21 = var11.value;
                    var4 = _closure1_slot9;
                    var4 = var4.GUILD;
                    var28 = undefined;
                    if(!(var15 === var4)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var20 = _closure1_slot5;
                    var4 = var20.getGuild;
                    var28 = var4.bind(var20)(var21);
case 44:
                    var23 = var9;
                    var22 = var8;
                    var21 = var7;
                    var20 = var5;
                    if(!(var13 != var28)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = var13 == var19;
                    var27 = undefined;
                    if(var4) { _fun0006_ip = 48; continue _fun0006 }
case 24:
                    var4 = var28.id;
                    var27 = var19[var4];
case 48:
                    var10 = var27;
                    var23 = var9;
                    var22 = var8;
                    var21 = var7;
                    var20 = var5;
                    if(!(var13 != var27)) { _fun0006_ip = 46; continue _fun0006 }
case 49:
                    var4 = var27.length;
                    var10 = var27;
                    var23 = var9;
                    var22 = var8;
                    var21 = var7;
                    var20 = var5;
                    if(!(var12 !== var4)) { _fun0006_ip = 46; continue _fun0006 }
case 8:
                    var24 = var16.bind(var17)(var27);
                    var26 = var24.emojisDisabled;
                    var4 = var24.emojisUnfiltered;
                    var25 = var24.emojisPremiumLockedCount;
                    var24 = var24.emojiNitroLocked;
                    var4 = var4.length;
                    var10 = var27;
                    var23 = var26;
                    var22 = var25;
                    var21 = var24;
                    var20 = var5;
                    if(!(var12 !== var4)) { _fun0006_ip = 46; continue _fun0006 }
case 50:
                    var4 = _closure1_slot9;
                    var29 = var4.GUILD;
                    var4 = null;
                    if(!(var15 === var29)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var29 = {};
                    var30 = _closure1_slot9;
                    var30 = var30.GUILD;
                    var29['type'] = var30;
                    var29['guild'] = var28;
                    var30 = _closure2_slot11;
                    var30 = !var30;
                    if(!var30) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var30 = var24;
case 53:
                    if(!var30) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var31 = var27.length;
                    var30 = var25 === var31;
case 55:
                    var29['isNitroLocked'] = var30;
                    var29['emojis'] = var27;
                    var29['emojisDisabled'] = var26;
                    var4 = var29;
case 51:
                    var10 = var27;
                    var23 = var26;
                    var22 = var25;
                    var21 = var24;
                    var20 = var4;
                    if(!(var13 != var4)) { _fun0006_ip = 46; continue _fun0006 }
case 57:
                    var29 = var28.id;
                    var28 = _closure2_slot2;
                    if(!(var29 !== var28)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var28 = var18.push;
                    var28 = var28.bind(var18)(var4);
                    var10 = var27;
                    var23 = var26;
                    var22 = var25;
                    var21 = var24;
                    var20 = var4;
                    _fun0006_ip = 46; continue _fun0006;
case 58:
                    var28 = var18.unshift;
                    var28 = var28.bind(var18)(var4);
                    var10 = var27;
                    var23 = var26;
                    var22 = var25;
                    var21 = var24;
                    var20 = var4;
case 46:
                    var24 = var14.bind(var17)();
                    var4 = var24.done;
                    var9 = var23;
                    var8 = var22;
                    var7 = var21;
                    var5 = var20;
                    var11 = var24;
                    if(!var4) { _fun0006_ip = 43; continue _fun0006 }
case 42:
                    var3 = _closure1_slot4;
                    var4 = var3.categories;
                    var3 = var4.reduce;
                    var5 = _closure2_slot12;
                    if(!var5) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0006_ip = 62; continue _fun0006 }
case 60:
                    var2 = new Array(0);
                    _fun0006_ip = 63; continue _fun0006;
case 62:
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2 = var5;
case 63:
                    var1 = function(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var7 = arg2;
                            var2 = _closure1_slot8;
                            var2 = var2.TOP_GUILD_EMOJI;
                            if(!(var7 !== var2)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                            var2 = _closure1_slot8;
                            var2 = var2.RECENT;
                            if(!(var7 !== var2)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                            var2 = _closure1_slot8;
                            var2 = var2.FAVORITES;
                            if(!(var7 !== var2)) { _fun0007_ip = 68; continue _fun0007 }
case 39:
                            var2 = _closure1_slot8;
                            var2 = var2.CUSTOM;
                            if(!(var7 !== var2)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                            var3 = var1.push;
                            var2 = {};
                            var4 = _closure1_slot9;
                            var4 = var4.UNICODE;
                            var2['type'] = var4;
                            var2['id'] = var7;
                            var2['name'] = var7;
                            var4 = false;
                            var2['isNitroLocked'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0007_ip = 71; continue _fun0007;
case 69:
                            var5 = _closure3_slot0;
                            var3 = _closure2_slot4;
                            if(var3) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                            var4 = _closure3_slot0;
                            var3 = var4.filter;
                            var2 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.type;
                                    var1 = _closure1_slot9;
                                    var1 = var1.GUILD;
                                    var1 = var3 === var1;
                                    if(!var1) { _fun0008_ip = 5; continue _fun0008 }
case 34:
                                    var2 = var2.guild;
                                    var3 = var2.id;
                                    var2 = _closure2_slot2;
                                    var1 = var3 === var2;
case 5:
                                    return var1;
                                }
                            };
                            var5 = var3.bind(var4)(var2);
case 72:
                            var3 = var1.push;
                            var2 = new Array(0);
                            var14 = 0;
                            var16 = var2;
                            var15 = var5;
                            var4 = arraySpread(var16, var15, var14);
                            var16 = var3;
                            var15 = var2;
                            var14 = var1;
                            var2 = apply(var16, var15, var14);
                            _fun0007_ip = 71; continue _fun0007;
case 68:
                            var3 = _closure3_slot1;
                            var2 = _closure2_slot7;
                            var12 = undefined;
                            var2 = var3.bind(var12)(var2);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0007_ip = 74; continue _fun0007 }
case 76:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.FAVORITES;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 16;
                            var9 = var13[var8];
                            var9 = var11.bind(var12)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var13[var8];
                            var8 = var11.bind(var12)(var8);
                            var8 = var8.t;
                            var8 = var8.y3LQCA;
                            var8 = var9.bind(var10)(var8);
                            var2['name'] = var8;
                            var8 = false;
                            var2['isNitroLocked'] = var8;
                            var2['emojis'] = var5;
                            var2['emojisDisabled'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0007_ip = 71; continue _fun0007;
case 74:
                            return var1;
case 66:
                            var2 = _closure1_slot17;
                            var3 = var2.REACTION;
                            var5 = new Array(2);
                            var5[0] = var3;
                            var2 = var2.DEFAULT_REACT_EMOJI;
                            var5[1] = var2;
                            var4 = var5.includes;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                            var3 = _closure2_slot5;
                            _fun0007_ip = 79; continue _fun0007;
case 77:
                            var3 = _closure2_slot6;
case 79:
                            var2 = _closure3_slot1;
                            var12 = undefined;
                            var2 = var2.bind(var12)(var3);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0007_ip = 80; continue _fun0007 }
case 51:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.RECENT;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 16;
                            var9 = var13[var8];
                            var9 = var11.bind(var12)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var13[var8];
                            var8 = var11.bind(var12)(var8);
                            var8 = var8.t;
                            var8 = var8.5TvaSk;
                            var8 = var9.bind(var10)(var8);
                            var2['name'] = var8;
                            var8 = false;
                            var2['isNitroLocked'] = var8;
                            var2['emojis'] = var5;
                            var2['emojisDisabled'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0007_ip = 71; continue _fun0007;
case 80:
                            return var1;
case 64:
                            var3 = _closure3_slot1;
                            var2 = _closure2_slot8;
                            var11 = undefined;
                            var2 = var3.bind(var11)(var2);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0007_ip = 82; continue _fun0007 }
case 84:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.TOP_GUILD_EMOJI;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 16;
                            var8 = var12[var6];
                            var8 = var7.bind(var11)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var6 = var12[var6];
                            var6 = var7.bind(var11)(var6);
                            var6 = var6.t;
                            var7 = var6.W6Wi1d;
                            var6 = {};
                            var10 = _closure2_slot10;
                            var6['guildName'] = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var2['name'] = var6;
                            var6 = false;
                            var2['isNitroLocked'] = var6;
                            var2['emojis'] = var5;
                            var2['emojisDisabled'] = var4;
                            var2 = var3.bind(var1)(var2);
case 71:
                            return var1;
case 82:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useEmojiCategories'] = var8;
    var8 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 18;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getCategories;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = _closure1_slot9;
            var3 = var3.UNICODE;
            var1['type'] = var3;
            var1['id'] = var2;
            var1['name'] = var2;
            var2 = false;
            var1['isNitroLocked'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getUnicodeEmojiCategories'] = var8;
    var8 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg1;
            var6 = null;
            var3 = var6 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var3) { _fun0009_ip = 65; continue _fun0009 }
case 85:
            var3 = var8.getGuildId;
            var2 = var3.bind(var8)();
case 65:
            var9 = var6 != var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot11;
            var3 = var2.PREMIUM_PROMOTION_OPENED;
            var2 = {};
            var10 = _closure1_slot12;
            if(var9) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var9 = var10.DM_CHANNEL;
            _fun0009_ip = 88; continue _fun0009;
case 86:
            var9 = var10.GUILD_CHANNEL;
case 88:
            var2['location_page'] = var9;
            if(!(var6 == var8)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var6 = _closure1_slot13;
            var6 = var6.CUSTOM_STATUS_MODAL;
            _fun0009_ip = 91; continue _fun0009;
case 89:
            var7 = _closure1_slot13;
            var6 = var7.EMOJI_PICKER_POPOUT;
case 91:
            var2['location_section'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackPremiumSettingsPaneOpened'] = var8;
    var8 = function(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.SEARCH_STARTED;
            var2 = {};
            var6 = null;
            if(!(var6 != var8)) { _fun0010_ip = 92; continue _fun0010 }
case 36:
            var6 = _closure1_slot17;
            var6 = var6.REACTION;
            if(!(var8 !== var6)) { _fun0010_ip = 93; continue _fun0010 }
case 92:
            var6 = _closure1_slot15;
            var6 = var6.EMOJI;
            _fun0010_ip = 94; continue _fun0010;
case 93:
            var7 = _closure1_slot15;
            var6 = var7.EMOJI_REACTION;
case 94:
            var2['search_type'] = var6;
            var6 = arg1;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSearchStart'] = var8;
    var8 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg5;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.SEARCH_RESULT_VIEWED;
            var2 = {};
            var6 = null;
            if(!(var6 != var8)) { _fun0011_ip = 92; continue _fun0011 }
case 36:
            var6 = _closure1_slot17;
            var6 = var6.REACTION;
            if(!(var8 !== var6)) { _fun0011_ip = 93; continue _fun0011 }
case 92:
            var6 = _closure1_slot15;
            var6 = var6.EMOJI;
            _fun0011_ip = 94; continue _fun0011;
case 93:
            var7 = _closure1_slot15;
            var6 = var7.EMOJI_REACTION;
case 94:
            var2['search_type'] = var6;
            var6 = arg1;
            var2['total_results'] = var6;
            var6 = arg2;
            var2['num_results_locked'] = var6;
            var6 = arg4;
            var2['query'] = var6;
            var6 = arg3;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSearchResultsViewed'] = var8;
    var8 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var12 = var1.emoji;
            var9 = var1.emojiSuggestions;
            var10 = var1.searchQuery;
            var11 = var1.isLocked;
            var14 = var1.location;
            var15 = var1.intention;
            var6 = var1.index;
            var13 = var12.uniqueName;
            var8 = null;
            if(!(var8 == var13)) { _fun0012_ip = 7; continue _fun0012 }
case 28:
            var13 = var12.name;
case 7:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var3 = var5[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.match;
            var17 = var3.bind(var4)(var15);
            var16 = var17.with;
            var3 = _closure1_slot17;
            var15 = var3.REACTION;
            var4 = function() {
                var1 = _closure1_slot15;
                var1 = var1.EMOJI_REACTION;
                return var1;
            };
            var16 = var16.bind(var17)(var15, var4);
            var15 = var16.with;
            var4 = var3.AUTO_SUGGESTION;
            var3 = function() {
                var1 = _closure1_slot15;
                var1 = var1.EMOJI_AUTO_SUGGESTION;
                return var1;
            };
            var15 = var15.bind(var16)(var4, var3);
            var4 = var15.otherwise;
            var3 = function() {
                var1 = _closure1_slot15;
                var1 = var1.EMOJI;
                return var1;
            };
            var15 = var4.bind(var15)(var3);
            var4 = _closure1_slot1;
            var3 = 20;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.SEARCH_RESULT_SELECTED;
            var2 = {};
            var2['search_type'] = var15;
            var2['location'] = var14;
            var14 = var12.guildId;
            var2['expression_guild_id'] = var14;
            var14 = var12.id;
            var2['emoji_id'] = var14;
            var2['emoji_name'] = var13;
            var13 = var12.id;
            var13 = var8 != var13;
            var2['is_custom'] = var13;
            var12 = var12.animated;
            var2['is_animated'] = var12;
            var2['is_locked'] = var11;
            var2['query'] = var10;
            var2['index_num'] = var6;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0012_ip = 49; continue _fun0012 }
case 95:
            var6 = var9.loadId;
case 49:
            var2['load_id'] = var6;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0012_ip = 26; continue _fun0012 }
case 96:
            var10 = var9.results;
            var11 = var8 == var10;
            var6 = undefined;
            if(var11) { _fun0012_ip = 26; continue _fun0012 }
case 97:
            var6 = var10.length;
case 26:
            var2['total_results'] = var6;
            var10 = var8 == var9;
            var6 = undefined;
            if(var10) { _fun0012_ip = 98; continue _fun0012 }
case 99:
            var10 = var9.results;
            var8 = var8 == var10;
            var6 = undefined;
            if(var8) { _fun0012_ip = 98; continue _fun0012 }
case 100:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.emoji;
                var1 = var1.id;
                return var1;
            };
            var9 = var9.bind(var10)(var8);
            var8 = var9.filter;
            var7 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var6 = var8.bind(var9)(var7);
case 98:
            var2['emoji_suggestion_ids'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSearchSelect'] = var8;
    var8 = function(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.SEARCH_RESULT_EMPTY;
        var2 = {};
        var6 = _closure1_slot15;
        var6 = var6.EMOJI;
        var2['search_type'] = var6;
        var6 = arg2;
        var2['query'] = var6;
        var6 = arg1;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackEmojiSearchEmpty'] = var8;
    var8 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = var1.emoji;
            var11 = var1.subCategory;
            var6 = var1.position;
            var8 = var1.newlyAddedHighlight;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_PICKER_EXPRESSION_FOCUS;
            var2 = {};
            var9 = null;
            var10 = var9 == var11;
            var9 = undefined;
            if(var10) { _fun0013_ip = 94; continue _fun0013 }
case 101:
            var10 = var11.toString;
            var9 = var10.bind(var11)();
case 94:
            var2['expression_section'] = var9;
            var2['newly_added_highlight'] = var8;
            var8 = var7.id;
            var2['emoji_id'] = var8;
            var8 = var7.name;
            var2['emoji_name'] = var8;
            var7 = var7.animated;
            var2['emoji_animated'] = var7;
            var2['emoji_position'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiFocus'] = var8;
    var8 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var12 = var2.emoji;
            var14 = var2.location;
            var4 = var2.pickerIntention;
            var10 = var2.category;
            var11 = var2.subCategory;
            var1 = undefined;
            if(!(var11 === var1)) { _fun0014_ip = 102; continue _fun0014 }
case 103:
            var3 = _closure1_slot10;
            var11 = var3.NONE;
case 102:
            var8 = var2.position;
            var7 = var2.newlyAddedHighlight;
            var6 = var2.isBurstReaction;
            var3 = _closure1_slot17;
            var3 = var3.REACTION;
            if(!(var3 !== var4)) { _fun0014_ip = 91; continue _fun0014 }
case 104:
            var3 = _closure1_slot17;
            var3 = var3.STATUS;
            if(!(var3 !== var4)) { _fun0014_ip = 13; continue _fun0014 }
case 105:
            var3 = _closure1_slot19;
            var15 = var3.EMOJI_PICKER_EMOJI_CLICKED;
            _fun0014_ip = 106; continue _fun0014;
case 13:
            var3 = _closure1_slot19;
            var15 = var3.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            _fun0014_ip = 106; continue _fun0014;
case 91:
            var4 = _closure1_slot19;
            if(var6) { _fun0014_ip = 73; continue _fun0014 }
case 107:
            var3 = var4.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            _fun0014_ip = 108; continue _fun0014;
case 73:
            var3 = var4.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED;
case 108:
            var15 = var3;
case 106:
            var13 = var12.uniqueName;
            var9 = null;
            if(!(var9 == var13)) { _fun0014_ip = 14; continue _fun0014 }
case 15:
            var13 = var12.name;
case 14:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 20;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_PICKER_EXPRESSION_SELECTED;
            var2 = {};
            var2['type'] = var15;
            var2['location'] = var14;
            var14 = var12.id;
            var2['expression_id'] = var14;
            var2['expression_name'] = var13;
            var13 = var12.guildId;
            var2['expression_guild_id'] = var13;
            var13 = var12.id;
            var13 = var9 != var13;
            var2['is_custom'] = var13;
            var12 = var12.animated;
            var2['is_animated'] = var12;
            var2['expression_picker_section'] = var10;
            var10 = var9 == var11;
            var9 = undefined;
            if(var10) { _fun0014_ip = 109; continue _fun0014 }
case 110:
            var10 = var11.toString;
            var9 = var10.bind(var11)();
case 109:
            var2['expression_section'] = var9;
            var2['emoji_position'] = var8;
            var2['newly_added_highlight'] = var7;
            var2['is_burst'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSelect'] = var8;
    var8 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.emoji;
            var10 = var1.location;
            var7 = var6.uniqueName;
            var8 = null;
            if(!(var8 == var7)) { _fun0015_ip = 3; continue _fun0015 }
case 111:
            var7 = var6.name;
case 3:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_FAVORITED;
            var2 = {};
            var2['location'] = var10;
            var9 = _closure1_slot18;
            var9 = var9.EMOJI;
            var2['expression_type'] = var9;
            var9 = var6.id;
            var2['expression_id'] = var9;
            var2['expression_name'] = var7;
            var7 = var6.guildId;
            var2['expression_guild_id'] = var7;
            var7 = var6.id;
            var7 = var8 != var7;
            var2['is_custom'] = var7;
            var6 = var6.animated;
            var2['is_animated'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiFavorited'] = var8;
    var3['throttledTrackEmojiAutoSuggestDisplayed'] = var7;
    var7 = function(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var4 = var1.type;
            var2 = _closure1_slot9;
            var2 = var2.GUILD;
            if(!(var4 !== var2)) { _fun0016_ip = 41; continue _fun0016 }
case 34:
            var1 = var1.id;
            _fun0016_ip = 28; continue _fun0016;
case 41:
            var2 = null;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0016_ip = 112; continue _fun0016 }
case 113:
            var2 = var3.name;
case 112:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['getAriaIdForEmojiCategory'] = var7;
    var7 = function(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = _closure1_slot8;
            var3 = var3.TOP_GUILD_EMOJI;
            if(!(var3 !== var2)) { _fun0017_ip = 114; continue _fun0017 }
case 65:
            var3 = _closure1_slot8;
            var3 = var3.RECENT;
            if(!(var3 !== var2)) { _fun0017_ip = 115; continue _fun0017 }
case 67:
            var3 = _closure1_slot8;
            var3 = var3.FAVORITES;
            if(!(var3 !== var2)) { _fun0017_ip = 116; continue _fun0017 }
case 39:
            var3 = _closure1_slot8;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var2)) { _fun0017_ip = 117; continue _fun0017 }
case 87:
            var3 = _closure1_slot8;
            var3 = var3.FLAGS;
            if(!(var3 !== var2)) { _fun0017_ip = 118; continue _fun0017 }
case 119:
            var3 = _closure1_slot8;
            var3 = var3.FOOD;
            if(!(var3 !== var2)) { _fun0017_ip = 120; continue _fun0017 }
case 121:
            var3 = _closure1_slot8;
            var3 = var3.NATURE;
            if(!(var3 !== var2)) { _fun0017_ip = 122; continue _fun0017 }
case 123:
            var3 = _closure1_slot8;
            var3 = var3.OBJECTS;
            if(!(var3 !== var2)) { _fun0017_ip = 124; continue _fun0017 }
case 125:
            var3 = _closure1_slot8;
            var3 = var3.PEOPLE;
            if(!(var3 !== var2)) { _fun0017_ip = 57; continue _fun0017 }
case 126:
            var3 = _closure1_slot8;
            var3 = var3.SYMBOLS;
            if(!(var3 !== var2)) { _fun0017_ip = 127; continue _fun0017 }
case 16:
            var3 = _closure1_slot8;
            var3 = var3.TRAVEL;
            if(!(var3 !== var2)) { _fun0017_ip = 128; continue _fun0017 }
case 129:
            var3 = _closure1_slot8;
            var3 = var3.PREMIUM_UPSELL;
            if(!(var3 !== var2)) { _fun0017_ip = 130; continue _fun0017 }
case 131:
            var3 = _closure1_slot8;
            var3 = var3.SOUNDMOJI;
            if(!(var3 !== var2)) { _fun0017_ip = 132; continue _fun0017 }
case 133:
            var3 = null;
            if(!(var3 != var5)) { _fun0017_ip = 134; continue _fun0017 }
case 135:
            var2 = var5;
case 134:
            return var2;
case 132:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.f0Ezmp;
            var2 = var3.bind(var4)(var2);
            return var2;
case 130:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.pAF6xM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 128:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.w33hIC;
            var2 = var3.bind(var4)(var2);
            return var2;
case 127:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.QXMYAQ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 57:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.GX594O;
            var2 = var3.bind(var4)(var2);
            return var2;
case 124:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.gWm7Mj;
            var2 = var3.bind(var4)(var2);
            return var2;
case 122:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.egIBDA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 120:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.ldm9aW;
            var2 = var3.bind(var4)(var2);
            return var2;
case 118:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.vvaizs;
            var2 = var3.bind(var4)(var2);
            return var2;
case 117:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.O783tb;
            var2 = var3.bind(var4)(var2);
            return var2;
case 116:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.y3LQCA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 115:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.5TvaSk;
            var2 = var3.bind(var4)(var2);
            return var2;
case 114:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.W6Wi1d;
            var1 = {};
            var1['guildName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getStringForEmojiCategory'] = var7;
    var7 = function useEmojiSearchResults(arg1, arg2, arg3, arg4) {
        var14 = arg1;
        var13 = arg2;
        var12 = arg3;
        var10 = arg4;
        var _closure2_slot0 = var14;
        var _closure2_slot1 = var13;
        var _closure2_slot2 = var12;
        var _closure2_slot3 = var10;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2 = new Array(0);
        var2 = var5.bind(var6)(var4, var2);
        var2 = _closure1_slot16;
        var8 = undefined;
        var11 = var2.bind(var8)(var12);
        var _closure2_slot4 = var11;
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 13;
        var4 = var9[var2];
        var6 = var7.bind(var8)(var4);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(5);
        var3[0] = var14;
        var3[1] = var13;
        var3[2] = var12;
        var3[3] = var11;
        var3[4] = var10;
        var2 = var9[var2];
        var2 = var7.bind(var8)(var2);
        var15 = var2.statesWillNeverBeEqual;
        var17 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = _closure2_slot0;
                var3 = var4.replace;
                var1 = /^:/;
                var2 = '';
                var4 = var3.bind(var4)(var1, var2);
                var3 = var4.replace;
                var1 = /:$/;
                var6 = var3.bind(var4)(var1, var2);
                var1 = null;
                if(!(var2 !== var6)) { _fun0018_ip = 136; continue _fun0018 }
case 30:
                var4 = _closure1_slot4;
                var3 = var4.searchWithoutFetchingLatest;
                var2 = {};
                var7 = _closure2_slot1;
                var2['channel'] = var7;
                var2['query'] = var6;
                var6 = 0;
                var2['count'] = var6;
                var6 = _closure2_slot2;
                var2['intention'] = var6;
                var6 = _closure2_slot4;
                var2['includeExternalGuilds'] = var6;
                var5 = _closure2_slot3;
                var2['showOnlyUnicode'] = var5;
                var1 = var3.bind(var4)(var2);
case 136:
                return var1;
            }
        };
        var19 = var6;
        var18 = var4;
        var16 = var3;
        var1 = var19[var5](var18, var17, var16, var15, var14);
        return var1;
    };
    var3['useEmojiSearchResults'] = var7;
    var3['useFrequentlyUsedEmojis'] = var6;
    var3['useFrequentlyUsedReactionEmojis'] = var5;
    var3['useFavoriteEmojis'] = var4;
    var4 = function useIsFavoriteEmoji(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0019_ip = 112; continue _fun0019 }
case 85:
                var5 = _closure1_slot4;
                var4 = var5.getDisambiguatedEmojiContext;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = var4.isFavoriteEmojiWithoutFetchingLatest;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
case 112:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsFavoriteEmoji'] = var4;
    var4 = function useEmojiInPriorityOrder(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = var2.FrecencyUserSettingsActionCreators;
            var2 = var3.loadIfNecessary;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3 = new Array(0);
        var3 = var5.bind(var6)(var4, var3);
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getDisambiguatedEmojiContext;
            var1 = _closure2_slot0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.getEmojiInPriorityOrderWithoutFetchingLatest;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useEmojiInPriorityOrder'] = var4;
    var4 = function getEmojiSubCategory(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var2 = null;
            if(!(var2 != var4)) { _fun0020_ip = 89; continue _fun0020 }
case 137:
            var3 = var6.map;
            var2 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.id;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0021_ip = 29; continue _fun0021 }
case 32:
                    var1 = var2.uniqueName;
case 29:
                    if(!(var3 == var1)) { _fun0021_ip = 138; continue _fun0021 }
case 139:
                    var1 = var2.name;
case 138:
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2);
            var3 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var3.bind(var5)(var1);
            var1 = var2.includes;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0020_ip = 90; continue _fun0020 }
case 30:
            var1 = var3.includes;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot10;
            if(var1) { _fun0020_ip = 140; continue _fun0020 }
case 104:
            var1 = var3.NONE;
            _fun0020_ip = 105; continue _fun0020;
case 140:
            var1 = var3.NEWLY_ADDED_EMOJI;
case 105:
            _fun0020_ip = 13; continue _fun0020;
case 90:
            var2 = _closure1_slot10;
            var1 = var2.TOP_GUILD_EMOJI;
case 13:
            return var1;
case 89:
            var1 = _closure1_slot10;
            var1 = var1.NONE;
            return var1;
        }
    };
    var3['getEmojiSubCategory'] = var4;
    var2 = function getSearchPlaceholder(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = _closure1_slot17;
            var3 = var1.REACTION;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0022_ip = 101; continue _fun0022 }
case 29:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.KgK5qq;
            var1 = var3.bind(var4)(var1);
            _fun0022_ip = 126; continue _fun0022;
case 101:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var3 = var2.t;
            var2 = arg2;
            if(var2) { _fun0022_ip = 106; continue _fun0022 }
case 141:
            var2 = var3.6any2N;
            var2 = var4.bind(var5)(var2);
            _fun0022_ip = 142; continue _fun0022;
case 106:
            var3 = var3.h7ES+v;
            var2 = var4.bind(var5)(var3);
case 142:
            var1 = var2;
case 126:
            return var1;
        }
    };
    var3['getSearchPlaceholder'] = var2;
    return var1;
})();