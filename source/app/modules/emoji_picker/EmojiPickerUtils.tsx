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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var1 = function searchTypeForIntention(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot18;
            var2 = var2.REACTION;
            if(!(var2 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 29:
            var2 = _closure1_slot18;
            var2 = var2.AUTO_SUGGESTION;
            if(!(var2 !== var3)) { _fun0004_ip = 2; continue _fun0004 }
case 37:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI;
            return var2;
case 2:
            var2 = _closure1_slot15;
            var2 = var2.EMOJI_AUTO_SUGGESTION;
            return var2;
case 36:
            var1 = _closure1_slot15;
            var1 = var1.EMOJI_REACTION;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function loadIdPayload(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var1 = '';
            if(!(var1 === var3)) { _fun0005_ip = 40; continue _fun0005 }
case 38:
            var1 = {};
            _fun0005_ip = 41; continue _fun0005;
case 40:
            var2 = {};
            var2['load_id'] = var3;
            var1 = var2;
case 41:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var6 = function useFrequentlyUsedEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
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
        var3 = 16;
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
    var _closure1_slot26 = var6;
    var5 = function useFrequentlyUsedReactionEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
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
        var3 = 16;
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
    var _closure1_slot27 = var5;
    var4 = function useFavoriteEmojis(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
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
        var3 = 16;
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
    var _closure1_slot28 = var4;
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
    var11 = var7.EmojiDisabledReasons;
    var _closure1_slot17 = var11;
    var7 = var7.EmojiIntention;
    var _closure1_slot18 = var7;
    var7 = 8;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.ExpressionPickerViewType;
    var _closure1_slot19 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.PremiumUpsellTypes;
    var _closure1_slot20 = var7;
    var7 = /-/g;
    var _closure1_slot21 = var7;
    var7 = 23;
    var7 = var10[var7];
    var13 = var9.bind(var1)(var7);
    var12 = var13.throttle;
    var7 = 24;
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
        var1 = 12;
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
    var8 = 26;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/emoji_picker/EmojiPickerUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function initializeSearch(arg1) {
        var1 = arg1;
        var9 = var1.intention;
        var6 = var1.location;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 10;
        var2 = var4[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var2 = var5.v4;
        var10 = var2.bind(var5)();
        var7 = var10.replace;
        var5 = _closure1_slot21;
        var2 = '';
        var7 = var7.bind(var10)(var5, var2);
        var2 = 11;
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.EmojiPickerStore;
        var2 = var3.setAnalyticsId;
        var2 = var2.bind(var3)(var7);
        var3 = _closure1_slot1;
        var2 = 12;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.SEARCH_OPENED;
        var2 = {};
        var8 = _closure1_slot24;
        var8 = var8.bind(var1)(var9);
        var2['search_type'] = var8;
        var2['load_id'] = var7;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['initializeSearch'] = var8;
    var8 = function useEmojiCategories(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var14 = arg1;
            var16 = arg2;
            var15 = arguments[2];
            var5 = arguments[3];
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var16;
            var6 = undefined;
            if(!(var15 === var6)) { _fun0006_ip = 42; continue _fun0006 }
case 34:
            var2 = null;
            var3 = var2 == var16;
            var2 = undefined;
            if(var3) { _fun0006_ip = 5; continue _fun0006 }
case 43:
            var3 = var16.getGuildId;
            var2 = var3.bind(var16)();
case 5:
            var15 = var2;
case 42:
            var _closure2_slot2 = var15;
            if(!(var5 === var6)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var5 = false;
case 44:
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
            var3 = 13;
            var3 = var18[var3];
            var7 = var4.bind(var6)(var3);
            var3 = var7.maybeFetchTopEmojisByGuild;
            var3 = var3.bind(var7)(var15);
            var3 = _closure1_slot16;
            var7 = var3.bind(var6)(var14);
            _closure2_slot4 = var7;
            var3 = _closure1_slot26;
            var9 = var3.bind(var6)(var15);
            _closure2_slot5 = var9;
            var3 = _closure1_slot27;
            var10 = var3.bind(var6)(var15);
            _closure2_slot6 = var10;
            var3 = _closure1_slot28;
            var8 = var3.bind(var6)(var15);
            _closure2_slot7 = var8;
            var11 = _closure1_slot1;
            var3 = 14;
            var3 = var18[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.bind(var6)(var15, var14);
            var13 = var3.topEmojis;
            var12 = var3.newlyAddedEmojis;
            var3 = 15;
            var3 = var18[var3];
            var11 = var11.bind(var6)(var3);
            var3 = {};
            var3['topEmojis'] = var13;
            var3['newlyAddedEmojis'] = var12;
            var3 = var11.bind(var6)(var3);
            var12 = var3.allEmojis;
            _closure2_slot8 = var12;
            var3 = 16;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot2;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var1 = var2.name;
case 46:
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
            var3 = 17;
            var3 = var18[var3];
            var13 = var4.bind(var6)(var3);
            var3 = var13.isPremium;
            var13 = var3.bind(var13)(var19);
            _closure2_slot11 = var13;
            var3 = 18;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var20 = function getEmojiUnavailableReasons(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 20;
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
                    var _closure3_slot1 = var20;
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
                    var7 = 19;
                    var8 = var11[var7];
                    var17 = undefined;
                    var8 = var10.bind(var17)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var17)(var7);
                    var7 = var7.t;
                    var7 = var7.f0Ezmv;
                    var7 = var8.bind(var9)(var7);
                    var6['name'] = var7;
                    var7 = _closure1_slot8;
                    var7 = var7.SOUNDMOJI;
                    var6['id'] = var7;
                    var7 = false;
                    var6['isNitroLocked'] = var7;
                    var16 = var4.GUILD;
                    var4 = _closure1_slot22;
                    var15 = var4.bind(var17)(var5);
                    var5 = var15.bind(var17)();
                    var4 = var5.done;
                    var14 = null;
                    var13 = 0;
                    var12 = var5;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var22 = var12.value;
                    var4 = _closure1_slot9;
                    var4 = var4.GUILD;
                    var31 = undefined;
                    if(!(var16 === var4)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var21 = _closure1_slot5;
                    var4 = var21.getGuild;
                    var31 = var4.bind(var21)(var22);
case 50:
                    var25 = var10;
                    var24 = var9;
                    var23 = var8;
                    var22 = var7;
                    var21 = var5;
                    if(!(var14 != var31)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var26 = var19.get;
                    var4 = var31.id;
                    var30 = var26.bind(var19)(var4);
                    var11 = var30;
                    var25 = var10;
                    var24 = var9;
                    var23 = var8;
                    var22 = var7;
                    var21 = var5;
                    if(!(var14 != var30)) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                    var4 = var30.length;
                    var11 = var30;
                    var25 = var10;
                    var24 = var9;
                    var23 = var8;
                    var22 = var7;
                    var21 = var5;
                    if(!(var13 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 55:
                    var26 = var20.bind(var17)(var30);
                    var29 = var26.emojisDisabled;
                    var4 = var26.emojisUnfiltered;
                    var28 = var26.emojisPremiumLockedCount;
                    var27 = var26.emojiNitroLocked;
                    var4 = var4.length;
                    var11 = var30;
                    var25 = var29;
                    var24 = var28;
                    var23 = var27;
                    var22 = var7;
                    var21 = var5;
                    if(!(var13 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 56:
                    var32 = _closure1_slot4;
                    var26 = var32.getHiddenEmojiIds;
                    var4 = var31.id;
                    var26 = var26.bind(var32)(var4);
                    var4 = _closure1_slot9;
                    var32 = var4.GUILD;
                    var4 = null;
                    if(!(var16 === var32)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var32 = {};
                    var33 = _closure1_slot9;
                    var33 = var33.GUILD;
                    var32['type'] = var33;
                    var32['guild'] = var31;
                    var33 = _closure2_slot11;
                    var33 = !var33;
                    if(!var33) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var33 = var27;
case 59:
                    if(!var33) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var34 = var30.length;
                    var33 = var28 === var34;
case 61:
                    var32['isNitroLocked'] = var33;
                    var32['emojis'] = var30;
                    var32['emojisDisabled'] = var29;
                    var32['emojisHidden'] = var26;
                    var4 = var32;
case 57:
                    var11 = var30;
                    var25 = var29;
                    var24 = var28;
                    var23 = var27;
                    var22 = var26;
                    var21 = var4;
                    if(!(var14 != var4)) { _fun0008_ip = 52; continue _fun0008 }
case 63:
                    var32 = var31.id;
                    var31 = _closure2_slot2;
                    if(!(var32 !== var31)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    var31 = var18.push;
                    var31 = var31.bind(var18)(var4);
                    var11 = var30;
                    var25 = var29;
                    var24 = var28;
                    var23 = var27;
                    var22 = var26;
                    var21 = var4;
                    _fun0008_ip = 52; continue _fun0008;
case 64:
                    var31 = var18.unshift;
                    var31 = var31.bind(var18)(var4);
                    var11 = var30;
                    var25 = var29;
                    var24 = var28;
                    var23 = var27;
                    var22 = var26;
                    var21 = var4;
case 52:
                    var26 = var15.bind(var17)();
                    var4 = var26.done;
                    var10 = var25;
                    var9 = var24;
                    var8 = var23;
                    var7 = var22;
                    var5 = var21;
                    var12 = var26;
                    if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 48:
                    var3 = _closure1_slot4;
                    var4 = var3.categories;
                    var3 = var4.reduce;
                    var5 = _closure2_slot12;
                    if(!var5) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0008_ip = 68; continue _fun0008 }
case 66:
                    var2 = new Array(0);
                    _fun0008_ip = 69; continue _fun0008;
case 68:
                    var5 = new Array(1);
                    var5[0] = var6;
                    var2 = var5;
case 69:
                    var1 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var7 = arg2;
                            var2 = _closure1_slot8;
                            var2 = var2.TOP_GUILD_EMOJI;
                            if(!(var7 !== var2)) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                            var2 = _closure1_slot8;
                            var2 = var2.RECENT;
                            if(!(var7 !== var2)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                            var2 = _closure1_slot8;
                            var2 = var2.FAVORITES;
                            if(!(var7 !== var2)) { _fun0009_ip = 74; continue _fun0009 }
case 45:
                            var2 = _closure1_slot8;
                            var2 = var2.CUSTOM;
                            if(!(var7 !== var2)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
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
                            _fun0009_ip = 77; continue _fun0009;
case 75:
                            var5 = _closure3_slot0;
                            var3 = _closure2_slot4;
                            if(var3) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                            var4 = _closure3_slot0;
                            var3 = var4.filter;
                            var2 = function(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.type;
                                    var1 = _closure1_slot9;
                                    var1 = var1.GUILD;
                                    if(!(var3 !== var1)) { _fun0010_ip = 37; continue _fun0010 }
case 80:
                                    var1 = var2.type;
                                    var1 = false;
                                    _fun0010_ip = 4; continue _fun0010;
case 37:
                                    var2 = var2.guild;
                                    var3 = var2.id;
                                    var2 = _closure2_slot2;
                                    var1 = var3 === var2;
case 4:
                                    return var1;
                                }
                            };
                            var5 = var3.bind(var4)(var2);
case 78:
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
                            _fun0009_ip = 77; continue _fun0009;
case 74:
                            var3 = _closure3_slot1;
                            var2 = _closure2_slot7;
                            var12 = undefined;
                            var2 = var3.bind(var12)(var2);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0009_ip = 81; continue _fun0009 }
case 83:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.FAVORITES;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 19;
                            var9 = var13[var8];
                            var9 = var11.bind(var12)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var13[var8];
                            var8 = var11.bind(var12)(var8);
                            var8 = var8.t;
                            var8 = var8.y3LQCG;
                            var8 = var9.bind(var10)(var8);
                            var2['name'] = var8;
                            var8 = false;
                            var2['isNitroLocked'] = var8;
                            var2['emojis'] = var5;
                            var2['emojisDisabled'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0009_ip = 77; continue _fun0009;
case 81:
                            return var1;
case 72:
                            var3 = _closure3_slot1;
                            var2 = _closure1_slot18;
                            var2 = var2.REACTION;
                            var8 = new Array(2);
                            var8[0] = var2;
                            var2 = _closure1_slot18;
                            var2 = var2.DEFAULT_REACT_EMOJI;
                            var8[1] = var2;
                            var5 = var8.includes;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var8)(var2);
                            if(var2) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                            var2 = _closure2_slot5;
                            _fun0009_ip = 86; continue _fun0009;
case 84:
                            var2 = _closure2_slot6;
case 86:
                            var12 = undefined;
                            var2 = var3.bind(var12)(var2);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0009_ip = 87; continue _fun0009 }
case 59:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.RECENT;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var11 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var8 = 19;
                            var9 = var13[var8];
                            var9 = var11.bind(var12)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var13[var8];
                            var8 = var11.bind(var12)(var8);
                            var8 = var8.t;
                            var8 = var8["5TvaSm"];
                            var8 = var9.bind(var10)(var8);
                            var2['name'] = var8;
                            var8 = false;
                            var2['isNitroLocked'] = var8;
                            var2['emojis'] = var5;
                            var2['emojisDisabled'] = var4;
                            var2 = var3.bind(var1)(var2);
                            _fun0009_ip = 77; continue _fun0009;
case 87:
                            return var1;
case 70:
                            var3 = _closure3_slot1;
                            var2 = _closure2_slot8;
                            var11 = undefined;
                            var2 = var3.bind(var11)(var2);
                            var4 = var2.emojisDisabled;
                            var5 = var2.emojisUnfiltered;
                            var2 = null;
                            if(!(var2 != var5)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                            var3 = var5.length;
                            var2 = 0;
                            if(!(var2 !== var3)) { _fun0009_ip = 89; continue _fun0009 }
case 91:
                            var3 = var1.push;
                            var2 = {};
                            var8 = _closure1_slot9;
                            var8 = var8.TOP_GUILD_EMOJI;
                            var2['type'] = var8;
                            var2['id'] = var7;
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 19;
                            var8 = var12[var6];
                            var8 = var7.bind(var11)(var8);
                            var9 = var8.intl;
                            var8 = var9.formatToPlainString;
                            var6 = var12[var6];
                            var6 = var7.bind(var11)(var6);
                            var6 = var6.t;
                            var7 = var6.W6Wi1X;
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
case 77:
                            return var1;
case 89:
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
    var8 = function getUnicodeEmojiCategories() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
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
    var8 = function trackPremiumSettingsPaneOpened(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg1;
            var6 = null;
            var3 = var6 == var8;
            var1 = undefined;
            var2 = undefined;
            if(var3) { _fun0011_ip = 71; continue _fun0011 }
case 92:
            var3 = var8.getGuildId;
            var2 = var3.bind(var8)();
case 71:
            var9 = var6 != var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 22;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot11;
            var3 = var2.PREMIUM_PROMOTION_OPENED;
            var2 = {};
            var10 = _closure1_slot12;
            if(var9) { _fun0011_ip = 93; continue _fun0011 }
case 94:
            var9 = var10.DM_CHANNEL;
            _fun0011_ip = 95; continue _fun0011;
case 93:
            var9 = var10.GUILD_CHANNEL;
case 95:
            var2['location_page'] = var9;
            if(!(var6 == var8)) { _fun0011_ip = 96; continue _fun0011 }
case 97:
            var6 = _closure1_slot13;
            var6 = var6.CUSTOM_STATUS_MODAL;
            _fun0011_ip = 98; continue _fun0011;
case 96:
            var7 = _closure1_slot13;
            var6 = var7.EMOJI_PICKER_POPOUT;
case 98:
            var2['location_section'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackPremiumSettingsPaneOpened'] = var8;
    var8 = function trackEmojiSearchStart(arg1, arg2) {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 12;
        var2 = var9[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.SEARCH_STARTED;
        var2 = {};
        var8 = _closure1_slot24;
        var7 = arg2;
        var7 = var8.bind(var1)(var7);
        var2['search_type'] = var7;
        var7 = arg1;
        var2['location'] = var7;
        var7 = _closure1_slot25;
        var8 = _closure1_slot0;
        var6 = 11;
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var8 = var6.EmojiPickerStore;
        var6 = var8.getAnalyticsId;
        var6 = var6.bind(var8)();
        var10 = var7.bind(var1)(var6);
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackEmojiSearchStart'] = var8;
    var8 = function trackEmojiSearchResultsViewed(arg1) {
        var1 = arg1;
        var11 = var1.totalResults;
        var10 = var1.numEmojiLocked;
        var8 = var1.location;
        var9 = var1.searchQuery;
        var13 = var1.intention;
        var7 = var1.loadId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.SEARCH_RESULT_VIEWED;
        var2 = {};
        var12 = _closure1_slot24;
        var12 = var12.bind(var1)(var13);
        var2['search_type'] = var12;
        var2['total_results'] = var11;
        var2['num_results_locked'] = var10;
        var2['query'] = var9;
        var2['location'] = var8;
        var6 = _closure1_slot25;
        var14 = var6.bind(var1)(var7);
        var15 = var2;
        var6 = copyDataProperties(var15, var14);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackEmojiSearchResultsViewed'] = var8;
    var8 = function trackEmojiSearchSelect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var14 = var1.emoji;
            var10 = var1.emojiSuggestions;
            var11 = var1.searchQuery;
            var13 = var1.isLocked;
            var16 = var1.location;
            var3 = var1.intention;
            var8 = var1.index;
            var7 = var1.messageId;
            var15 = var14.uniqueName;
            var9 = null;
            if(!(var9 == var15)) { _fun0012_ip = 30; continue _fun0012 }
case 44:
            var15 = var14.name;
case 30:
            var2 = _closure1_slot24;
            var1 = undefined;
            var17 = var2.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.SEARCH_RESULT_SELECTED;
            var2 = {};
            var2['search_type'] = var17;
            var2['location'] = var16;
            var16 = var14.guildId;
            var2['expression_guild_id'] = var16;
            var16 = var14.id;
            var2['emoji_id'] = var16;
            var2['emoji_name'] = var15;
            var15 = var14.id;
            var15 = var9 != var15;
            var2['is_custom'] = var15;
            var14 = var14.animated;
            var2['is_animated'] = var14;
            var2['is_locked'] = var13;
            var2['query'] = var11;
            var2['index_num'] = var8;
            var11 = _closure1_slot25;
            var13 = var9 == var10;
            var8 = undefined;
            if(var13) { _fun0012_ip = 99; continue _fun0012 }
case 100:
            var8 = var10.loadId;
case 99:
            if(!(var9 == var8)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var12 = var13.bind(var1)(var12);
            var13 = var12.EmojiPickerStore;
            var12 = var13.getAnalyticsId;
            var8 = var12.bind(var13)();
case 101:
            var18 = var11.bind(var1)(var8);
            var19 = var2;
            var8 = copyDataProperties(var19, var18);
            var8 = var9 == var10;
            var11 = undefined;
            if(var8) { _fun0012_ip = 103; continue _fun0012 }
case 104:
            var8 = var10.results;
            var12 = var9 == var8;
            var11 = undefined;
            if(var12) { _fun0012_ip = 103; continue _fun0012 }
case 105:
            var11 = var8.length;
case 103:
            var8 = 'total_results';
            var2[7] = var11;
            var11 = var9 == var10;
            var8 = undefined;
            if(var11) { _fun0012_ip = 106; continue _fun0012 }
case 107:
            var11 = var10.results;
            var9 = var9 == var11;
            var8 = undefined;
            if(var9) { _fun0012_ip = 106; continue _fun0012 }
case 108:
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.emoji;
                var1 = var1.id;
                return var1;
            };
            var10 = var10.bind(var11)(var9);
            var9 = var10.filter;
            var6 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var9.bind(var10)(var6);
case 106:
            var6 = 'emoji_suggestion_ids';
            var2[5] = var8;
            var6 = 'message_id';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSearchSelect'] = var8;
    var8 = function trackEmojiSearchEmpty(arg1) {
        var1 = arg1;
        var8 = var1.location;
        var9 = var1.searchQuery;
        var11 = var1.intention;
        var7 = var1.loadId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.trackWithMetadata;
        var2 = _closure1_slot11;
        var3 = var2.SEARCH_RESULT_EMPTY;
        var2 = {};
        var10 = _closure1_slot24;
        var10 = var10.bind(var1)(var11);
        var2['search_type'] = var10;
        var2['query'] = var9;
        var2['location'] = var8;
        var6 = _closure1_slot25;
        var12 = var6.bind(var1)(var7);
        var13 = var2;
        var6 = copyDataProperties(var13, var12);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackEmojiSearchEmpty'] = var8;
    var8 = function trackEmojiFocus(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = var1.emoji;
            var11 = var1.subCategory;
            var6 = var1.position;
            var8 = var1.newlyAddedHighlight;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
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
            if(var10) { _fun0013_ip = 109; continue _fun0013 }
case 110:
            var10 = var11.toString;
            var9 = var10.bind(var11)();
case 109:
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
    var8 = function trackEmojiSelect(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var15 = var2.emoji;
            var18 = var2.location;
            var3 = var2.pickerIntention;
            var14 = var2.category;
            var16 = var2.subCategory;
            var1 = undefined;
            if(!(var16 === var1)) { _fun0014_ip = 111; continue _fun0014 }
case 112:
            var4 = _closure1_slot10;
            var16 = var4.NONE;
case 111:
            var13 = var2.position;
            var12 = var2.newlyAddedHighlight;
            var11 = var2.isBurstReaction;
            var7 = var2.messageId;
            var10 = var2.lockedReason;
            var8 = var2.visibleRowIndex;
            var2 = _closure1_slot18;
            var2 = var2.REACTION;
            if(!(var2 !== var3)) { _fun0014_ip = 113; continue _fun0014 }
case 114:
            var2 = _closure1_slot18;
            var2 = var2.STATUS;
            if(!(var2 !== var3)) { _fun0014_ip = 115; continue _fun0014 }
case 116:
            var2 = _closure1_slot20;
            var19 = var2.EMOJI_PICKER_EMOJI_CLICKED;
            _fun0014_ip = 117; continue _fun0014;
case 115:
            var2 = _closure1_slot20;
            var19 = var2.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
            _fun0014_ip = 117; continue _fun0014;
case 113:
            var3 = _closure1_slot20;
            if(var11) { _fun0014_ip = 118; continue _fun0014 }
case 119:
            var2 = var3.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
            _fun0014_ip = 120; continue _fun0014;
case 118:
            var2 = var3.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED;
case 120:
            var19 = var2;
case 117:
            var17 = var15.uniqueName;
            var6 = null;
            if(!(var6 == var17)) { _fun0014_ip = 121; continue _fun0014 }
case 122:
            var17 = var15.name;
case 121:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            if(!(var6 == var10)) { _fun0014_ip = 123; continue _fun0014 }
case 124:
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_PICKER_EXPRESSION_SELECTED;
            _fun0014_ip = 21; continue _fun0014;
case 123:
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
case 21:
            var2 = {};
            var2['type'] = var19;
            var2['location'] = var18;
            var18 = var15.id;
            var2['expression_id'] = var18;
            var2['expression_name'] = var17;
            var17 = var15.guildId;
            var2['expression_guild_id'] = var17;
            var17 = var15.id;
            var17 = var6 != var17;
            var2['is_custom'] = var17;
            var15 = var15.animated;
            var2['is_animated'] = var15;
            var2['expression_picker_section'] = var14;
            var15 = var6 == var16;
            var14 = undefined;
            if(var15) { _fun0014_ip = 125; continue _fun0014 }
case 126:
            var15 = var16.toString;
            var14 = var15.bind(var16)();
case 125:
            var2['expression_section'] = var14;
            var2['emoji_position'] = var13;
            var2['newly_added_highlight'] = var12;
            var2['is_burst'] = var11;
            var2['message_id'] = var7;
            var6 = var6 != var10;
            if(!var6) { _fun0014_ip = 127; continue _fun0014 }
case 128:
            var7 = {};
            var9 = _closure1_slot17;
            var9 = var9[var10];
            var7['locked_reason'] = var9;
            var7['visible_row_index'] = var8;
            var6 = var7;
case 127:
            var21 = var2;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackEmojiSelect'] = var8;
    var8 = function trackEmojiFavorited(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var6 = var1.emoji;
            var10 = var1.location;
            var7 = var6.uniqueName;
            var8 = null;
            if(!(var8 == var7)) { _fun0015_ip = 41; continue _fun0015 }
case 71:
            var7 = var6.name;
case 41:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot11;
            var3 = var2.EXPRESSION_FAVORITED;
            var2 = {};
            var2['location'] = var10;
            var9 = _closure1_slot19;
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
    var7 = function getAriaIdForEmojiCategory(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var4 = var1.type;
            var2 = _closure1_slot9;
            var2 = var2.GUILD;
            if(!(var4 !== var2)) { _fun0016_ip = 129; continue _fun0016 }
case 34:
            var1 = var1.id;
            _fun0016_ip = 28; continue _fun0016;
case 129:
            var2 = null;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0016_ip = 130; continue _fun0016 }
case 131:
            var2 = var3.name;
case 130:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['getAriaIdForEmojiCategory'] = var7;
    var7 = function getStringForEmojiCategory(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = _closure1_slot8;
            var3 = var3.TOP_GUILD_EMOJI;
            if(!(var3 !== var2)) { _fun0017_ip = 132; continue _fun0017 }
case 71:
            var3 = _closure1_slot8;
            var3 = var3.RECENT;
            if(!(var3 !== var2)) { _fun0017_ip = 133; continue _fun0017 }
case 73:
            var3 = _closure1_slot8;
            var3 = var3.FAVORITES;
            if(!(var3 !== var2)) { _fun0017_ip = 134; continue _fun0017 }
case 45:
            var3 = _closure1_slot8;
            var3 = var3.ACTIVITY;
            if(!(var3 !== var2)) { _fun0017_ip = 135; continue _fun0017 }
case 94:
            var3 = _closure1_slot8;
            var3 = var3.FLAGS;
            if(!(var3 !== var2)) { _fun0017_ip = 136; continue _fun0017 }
case 137:
            var3 = _closure1_slot8;
            var3 = var3.FOOD;
            if(!(var3 !== var2)) { _fun0017_ip = 68; continue _fun0017 }
case 138:
            var3 = _closure1_slot8;
            var3 = var3.NATURE;
            if(!(var3 !== var2)) { _fun0017_ip = 139; continue _fun0017 }
case 140:
            var3 = _closure1_slot8;
            var3 = var3.OBJECTS;
            if(!(var3 !== var2)) { _fun0017_ip = 141; continue _fun0017 }
case 142:
            var3 = _closure1_slot8;
            var3 = var3.PEOPLE;
            if(!(var3 !== var2)) { _fun0017_ip = 143; continue _fun0017 }
case 120:
            var3 = _closure1_slot8;
            var3 = var3.SYMBOLS;
            if(!(var3 !== var2)) { _fun0017_ip = 144; continue _fun0017 }
case 16:
            var3 = _closure1_slot8;
            var3 = var3.TRAVEL;
            if(!(var3 !== var2)) { _fun0017_ip = 145; continue _fun0017 }
case 146:
            var3 = _closure1_slot8;
            var3 = var3.PREMIUM_UPSELL;
            if(!(var3 !== var2)) { _fun0017_ip = 147; continue _fun0017 }
case 148:
            var3 = _closure1_slot8;
            var3 = var3.SOUNDMOJI;
            if(!(var3 !== var2)) { _fun0017_ip = 149; continue _fun0017 }
case 123:
            var3 = null;
            if(!(var3 != var5)) { _fun0017_ip = 150; continue _fun0017 }
case 151:
            var2 = var5;
case 150:
            return var2;
case 149:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.f0Ezmv;
            var2 = var3.bind(var4)(var2);
            return var2;
case 147:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.pAF6xE;
            var2 = var3.bind(var4)(var2);
            return var2;
case 145:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.w33hIP;
            var2 = var3.bind(var4)(var2);
            return var2;
case 144:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.QXMYAb;
            var2 = var3.bind(var4)(var2);
            return var2;
case 143:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.GX594D;
            var2 = var3.bind(var4)(var2);
            return var2;
case 141:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.gWm7Mk;
            var2 = var3.bind(var4)(var2);
            return var2;
case 139:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.egIBDH;
            var2 = var3.bind(var4)(var2);
            return var2;
case 68:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.ldm9aY;
            var2 = var3.bind(var4)(var2);
            return var2;
case 136:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.vvaizu;
            var2 = var3.bind(var4)(var2);
            return var2;
case 135:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.O783tR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 134:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.y3LQCG;
            var2 = var3.bind(var4)(var2);
            return var2;
case 133:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2["5TvaSm"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 132:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.W6Wi1X;
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
            var1 = 25;
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
        var2 = 16;
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
                if(!(var2 !== var6)) { _fun0018_ip = 152; continue _fun0018 }
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
case 152:
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
            var1 = 25;
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
        var3 = 16;
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
                if(!var1) { _fun0019_ip = 130; continue _fun0019 }
case 92:
                var5 = _closure1_slot4;
                var4 = var5.getDisambiguatedEmojiContext;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var3 = var4.isFavoriteEmojiWithoutFetchingLatest;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
case 130:
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
            var1 = 25;
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
        var3 = 16;
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
            if(!(var2 != var4)) { _fun0020_ip = 96; continue _fun0020 }
case 38:
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
                    if(!(var3 == var1)) { _fun0021_ip = 153; continue _fun0021 }
case 154:
                    var1 = var2.name;
case 153:
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
            if(var1) { _fun0020_ip = 97; continue _fun0020 }
case 30:
            var1 = var3.includes;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot10;
            if(var1) { _fun0020_ip = 155; continue _fun0020 }
case 156:
            var1 = var3.NONE;
            _fun0020_ip = 157; continue _fun0020;
case 155:
            var1 = var3.NEWLY_ADDED_EMOJI;
case 157:
            _fun0020_ip = 13; continue _fun0020;
case 97:
            var2 = _closure1_slot10;
            var1 = var2.TOP_GUILD_EMOJI;
case 13:
            return var1;
case 96:
            var1 = _closure1_slot10;
            var1 = var1.NONE;
            return var1;
        }
    };
    var3['getEmojiSubCategory'] = var4;
    var2 = function getSearchPlaceholder(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = _closure1_slot18;
            var3 = var1.REACTION;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0022_ip = 158; continue _fun0022 }
case 29:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.KgK5qg;
            var1 = var3.bind(var4)(var1);
            _fun0022_ip = 120; continue _fun0022;
case 158:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var3 = var2.t;
            var2 = arg2;
            if(var2) { _fun0022_ip = 159; continue _fun0022 }
case 160:
            var2 = var3["6any2A"];
            var2 = var4.bind(var5)(var2);
            _fun0022_ip = 161; continue _fun0022;
case 159:
            var3 = var3.h7ES+n;
            var2 = var4.bind(var5)(var3);
case 161:
            var1 = var2;
case 120:
            return var1;
        }
    };
    var3['getSearchPlaceholder'] = var2;
    return var1;
})();