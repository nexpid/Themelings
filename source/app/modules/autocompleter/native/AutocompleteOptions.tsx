// app/modules/autocompleter/native/AutocompleteOptions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toGameResults(arg1, arg2) {
        var4 = arg1;
        var3 = var4.slice;
        var2 = 0;
        var1 = arg2;
        var3 = var3.bind(var4)(var2, var1);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var2 = _closure1_slot10;
            var2 = var2.GAME_MENTION;
            var1['type'] = var2;
            var2 = arg1;
            var1['game'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AutoCompleteResultTypes;
    var _closure1_slot10 = var8;
    var4 = var4.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MENTION_SENTINEL;
    var _closure1_slot12 = var8;
    var8 = var4.EMOJI_SENTINEL;
    var _closure1_slot13 = var8;
    var8 = var4.CHANNEL_SENTINEL;
    var _closure1_slot14 = var8;
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutocompleteTypes;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EmojiIntention;
    var _closure1_slot17 = var8;
    var8 = var4.EMOJI_MAX_LENGTH;
    var _closure1_slot18 = var8;
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot19 = var4;
    var4 = false;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var8 = var9.debounce;
    var4 = 13;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {'leading': true, 'trailing': true};
    var4 = var8.bind(var9)(var7, var10, var4);
    var _closure1_slot21 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/native/AutocompleteOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAutocompleteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[1];
            var1 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot1 = var3;
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = true;
case 4:
            var _closure2_slot2 = var1;
            var1 = {};
            var2 = _closure1_slot16;
            var5 = var2.MENTIONS;
            var3 = {};
            var8 = _closure1_slot8;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = _closure1_slot5;
            var7[1] = var8;
            var3['stores'] = var7;
            var7 = function queryResults(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var12 = arg1;
                    var5 = arg2;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var6.bind(var3)(var2);
                    var7 = var8.queryMentionResults;
                    var6 = {};
                    var6['query'] = var12;
                    var2 = _closure2_slot0;
                    var6['channel'] = var2;
                    var2 = null;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = var5.canMentionEveryone;
case 6:
                    var6['canMentionEveryone'] = var9;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = var5.canMentionHere;
case 8:
                    var6['canMentionHere'] = var9;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = var5.canMentionUsers;
case 10:
                    var6['canMentionUsers'] = var9;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = var5.canMentionRoles;
case 12:
                    var6['canMentionRoles'] = var9;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = var5.canMentionAnyGuildUser;
case 14:
                    var6['includeAllGuildUsers'] = var9;
                    var10 = var2 == var5;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var9 = var5.canMentionNonMentionableRoles;
case 16:
                    var6['includeNonMentionableRoles'] = var9;
                    var9 = arg3;
                    var6['request'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.users;
                    var10 = var6.globals;
                    var8 = var6.roles;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 15;
                    var6 = var11[var6];
                    var11 = var9.bind(var3)(var6);
                    var9 = var11.getGameMentionsAutocompleteConfig;
                    var6 = 'mentions autocomplete';
                    var6 = var9.bind(var11)(var6);
                    var9 = var2 == var5;
                    var11 = undefined;
                    if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var11 = var5.canMentionGames;
case 18:
                    var9 = true;
                    if(!(var9 === var11)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var9 = var6.enabled;
                    if(!var9) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                    var6 = var6.combineMentionAutocomplete;
                    if(!var6) { _fun0002_ip = 20; continue _fun0002 }
case 23:
                    var9 = var12.length;
                    var6 = 0;
                    if(!(var9 > var6)) { _fun0002_ip = 20; continue _fun0002 }
case 24:
                    if(!(var2 != var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var5 = var5.isActiveApplicationCommand;
                    if(!var5) { _fun0002_ip = 25; continue _fun0002 }
case 20:
                    var5 = new Array(0);
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var9 = _closure1_slot22;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 16;
                    var6 = var13[var6];
                    var11 = var11.bind(var3)(var6);
                    var6 = var11.queryGamesAutocomplete;
                    var6 = var6.bind(var11)(var12);
                    if(!(var2 == var6)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var6 = new Array(0);
case 28:
                    var2 = 1;
                    var5 = var9.bind(var3)(var6, var2);
case 27:
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var2 = var2.bind(var3)(var1);
                    var6 = var7.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot10;
                        var2 = var2.USER;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var15 = var6.bind(var7)(var1);
                    var1 = new Array(0);
                    var14 = 0;
                    var16 = var1;
                    var14 = arraySpread(var16, var15, var14);
                    var9 = var10.map;
                    var6 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot10;
                        var2 = var2.GLOBAL;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var15 = var9.bind(var10)(var6);
                    var16 = var1;
                    var14 = arraySpread(var16, var15, var14);
                    var7 = var8.map;
                    var4 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot10;
                        var2 = var2.ROLE;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var15 = var7.bind(var8)(var4);
                    var16 = var1;
                    var14 = arraySpread(var16, var15, var14);
                    var16 = var1;
                    var15 = var5;
                    var4 = arraySpread(var16, var15, var14);
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var1 = var1.bind(var2)();
                    return var1;
                }
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2) {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.matchSentinel;
                var3 = _closure1_slot12;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var2, var1, var3);
                return var1;
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var5 = var2.GAME_MENTIONS;
            var3 = {};
            var7 = new Array(1);
            var7[0] = var8;
            var3['stores'] = var7;
            var7 = function queryResults(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.getGameMentionsAutocompleteConfig;
                    var2 = 'game_mentions autocomplete';
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.enabled;
                    if(!var3) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var2 = var2.combineMentionAutocomplete;
                    if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 32:
                    var3 = var6.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0003_ip = 30; continue _fun0003 }
case 33:
                    var3 = _closure1_slot22;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 16;
                    var2 = var7[var2];
                    var5 = var5.bind(var4)(var2);
                    var2 = var5.queryGamesAutocomplete;
                    var2 = var2.bind(var5)(var6);
                    var5 = null;
                    if(!(var5 == var2)) { _fun0003_ip = 34; continue _fun0003 }
case 10:
                    var2 = new Array(0);
case 34:
                    var1 = _closure1_slot11;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0003_ip = 12; continue _fun0003;
case 30:
                    var1 = new Array(0);
case 12:
                    return var1;
                }
            };
            var3['queryResults'] = var7;
            var7 = function matches() {
                var1 = false;
                return var1;
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var5 = var2.CHANNELS;
            var3 = {};
            var7 = function queryResults(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var1 = arg2;
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var5 = var1.channelTypes;
case 35:
                    if(!(var2 != var1)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var1 = var1.isActiveApplicationCommand;
                    if(var1) { _fun0004_ip = 39; continue _fun0004 }
case 37:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.queryChannelResults;
                    var1 = {};
                    var1['query'] = var6;
                    var7 = _closure2_slot0;
                    var1['channel'] = var7;
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 40; continue _fun0004;
case 39:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.queryApplicationCommandChannelResults;
                    var2 = {};
                    var2['query'] = var6;
                    var6 = _closure2_slot0;
                    var2['channel'] = var6;
                    var2['channelTypes'] = var5;
                    var1 = var3.bind(var4)(var2);
case 40:
                    var3 = var1.channels;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var4 = _closure1_slot10;
                        var4 = var4.CHANNEL;
                        var1['type'] = var4;
                        var1['channel'] = var2;
                        var4 = _closure1_slot7;
                        var3 = var4.getChannel;
                        var2 = var2.parent_id;
                        var2 = var3.bind(var4)(var2);
                        var1['category'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var1 = var1.bind(var2)();
                    var1 = !var1;
                    if(!var1) { _fun0005_ip = 41; continue _fun0005 }
case 2:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.matchSentinel;
                    var4 = _closure1_slot14;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = var5.bind(var6)(var3, var2, var4);
case 41:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var5 = var2.EMOJIS_AND_STICKERS;
            var3 = {};
            var7 = function queryResults(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot2;
                    var12 = 40;
                    if(!var5) { _fun0006_ip = 2; continue _fun0006 }
case 3:
                    var12 = 0;
case 2:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var10 = 14;
                    var5 = var5[var10];
                    var9 = undefined;
                    var8 = var6.bind(var9)(var5);
                    var6 = var8.queryEmojiResults;
                    var5 = {};
                    var5['query'] = var4;
                    var11 = _closure2_slot0;
                    var5['channel'] = var11;
                    var11 = _closure1_slot17;
                    var11 = var11.CHAT;
                    var5['intention'] = var11;
                    var11 = _closure1_slot11;
                    var11 = var11 + var12;
                    var5['maxCount'] = var11;
                    var5 = var6.bind(var8)(var5);
                    var6 = null;
                    if(!(var6 != var3)) { _fun0006_ip = 42; continue _fun0006 }
case 11:
                    var3 = var3.includeEmojiPremiumUpsell;
                    if(!var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = var5.emojis;
                    var3 = var3.locked;
                    var6 = var3.length;
                    var3 = 0;
                    if(!(var6 > var3)) { _fun0006_ip = 42; continue _fun0006 }
case 44:
                    var3 = var5.emojis;
                    var3 = var3.unlocked;
                    var6 = var3.length;
                    var3 = 4;
                    if(!(!(var6 < var3))) { _fun0006_ip = 45; continue _fun0006 }
case 42:
                    var3 = new Array(0);
                    _fun0006_ip = 46; continue _fun0006;
case 45:
                    var8 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.EMOJI_PREMIUM_UPSELL;
                    var8['type'] = var6;
                    var6 = var5.emojis;
                    var6 = var6.locked;
                    var8['results'] = var6;
                    var6 = new Array(1);
                    var6[0] = var8;
                    var3 = var6;
case 46:
                    var6 = new Array(0);
                    var8 = _closure2_slot2;
                    if(!var8) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var8 = _closure1_slot20;
                    if(var8) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var11 = _closure1_slot6;
                    var8 = var11.hasLoadedStickerPacks;
case 49:
                    if(var8) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var8 = true;
                    _closure1_slot20 = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 17;
                    var8 = var12[var8];
                    var11 = var11.bind(var9)(var8);
                    var8 = var11.fetchStickerPacks;
                    var8 = var8.bind(var11)();
case 51:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var9 = var8.bind(var9)(var7);
                    var8 = var9.queryStickers;
                    var7 = new Array(1);
                    var7[0] = var4;
                    var1 = _closure2_slot0;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var1 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.StickerSendability;
                        var2 = var1.SENDABLE;
                        var1 = arg2;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var4[1] = var1;
                    var1 = true;
                    var6 = var8.bind(var9)(var7, var1, var4);
case 47:
                    var4 = var6.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.sticker;
                        var1 = {};
                        var3 = _closure1_slot10;
                        var3 = var3.STICKER;
                        var1['type'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var1['sticker'] = var2;
                        return var1;
                    };
                    var14 = var4.bind(var6)(var1);
                    var1 = new Array(0);
                    var13 = 0;
                    var15 = var1;
                    var13 = arraySpread(var15, var14, var13);
                    var5 = var5.emojis;
                    var6 = var5.unlocked;
                    var5 = var6.map;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var1 = {};
                            var2 = _closure1_slot10;
                            var2 = var2.EMOJI;
                            var1['type'] = var2;
                            var2 = var3.name;
                            var1['name'] = var2;
                            var2 = var3.id;
                            var4 = null;
                            if(!(var4 == var2)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                            var2 = var3.url;
                            _fun0007_ip = 55; continue _fun0007;
case 53:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 19;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.getEmojiURL;
                            var5 = {};
                            var9 = var3.id;
                            var5['id'] = var9;
                            var9 = var3.animated;
                            var5['animated'] = var9;
                            var8 = _closure1_slot19;
                            var5['size'] = var8;
                            var2 = var6.bind(var7)(var5);
case 55:
                            var1['url'] = var2;
                            var2 = var3.id;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if(!var4) { _fun0007_ip = 56; continue _fun0007 }
case 30:
                            var2 = var3.surrogates;
case 56:
                            var1['surrogates'] = var2;
                            return var1;
                        }
                    };
                    var14 = var5.bind(var6)(var2);
                    var15 = var1;
                    var13 = arraySpread(var15, var14, var13);
                    var15 = var1;
                    var14 = var3;
                    var2 = arraySpread(var15, var14, var13);
                    return var1;
                }
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg2;
                    var2 = _closure1_slot13;
                    var1 = arg1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0008_ip = 6; continue _fun0008 }
case 57:
                    var4 = var5.length;
                    var2 = 2;
                    var4 = var4 < var2;
                    if(var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var6 = var5.length;
                    var2 = _closure1_slot18;
                    var4 = var6 > var2;
case 58:
                    var2 = !var4;
                    if(var4) { _fun0008_ip = 41; continue _fun0008 }
case 60:
                    var4 = var5.includes;
                    var3 = _closure1_slot13;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
case 41:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var5 = var2.SLASHES;
            var3 = {};
            var7 = function queryResults() {
                var1 = new Array(0);
                return var1;
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = 0;
                    var1 = arg3;
                    var1 = var4 === var1;
                    if(!var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = _closure1_slot15;
                    var2 = arg1;
                    var1 = var2 === var3;
case 61:
                    if(!var1) { _fun0009_ip = 60; continue _fun0009 }
case 38:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var3 = arg2;
                    var3 = var3.length;
                    var2 = var4 === var3;
case 63:
                    var1 = !var2;
case 60:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var5 = var2.SLASHES_DISCOVERY;
            var3 = {};
            var7 = function queryResults() {
                var1 = new Array(0);
                return var1;
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0010_ip = 36; continue _fun0010 }
case 65:
                    var3 = 0;
                    var2 = arg3;
                    var1 = var3 === var2;
case 36:
                    if(!var1) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure1_slot15;
                    var2 = arg1;
                    var1 = var2 === var3;
case 66:
                    if(!var1) { _fun0010_ip = 31; continue _fun0010 }
case 64:
                    var2 = arg2;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
case 31:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[4] = var3;
            var3 = var2.CHOICES;
            var2 = {};
            var7 = _closure1_slot4;
            var5 = new Array(2);
            var5[0] = var7;
            var6 = _closure1_slot3;
            var5[1] = var6;
            var2['stores'] = var5;
            var5 = function queryResults(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var9 = arg1;
                    var3 = arg2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 33; continue _fun0011 }
case 68:
                    var4 = var3.option;
                    if(!(var2 != var4)) { _fun0011_ip = 33; continue _fun0011 }
case 69:
                    var4 = var4.autocomplete;
                    if(!var4) { _fun0011_ip = 33; continue _fun0011 }
case 4:
                    var5 = var2 == var3;
                    var8 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var4 = var3.activeCommand;
case 70:
                    if(!(var2 != var4)) { _fun0011_ip = 33; continue _fun0011 }
case 60:
                    var5 = var2 == var3;
                    var4 = undefined;
                    if(var5) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var4 = var3.optionValues;
case 72:
                    if(!(var2 == var4)) { _fun0011_ip = 74; continue _fun0011 }
case 33:
                    var4 = var2 == var3;
                    var6 = undefined;
                    var7 = undefined;
                    if(var4) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                    var7 = var3.choices;
case 75:
                    if(!(var2 != var7)) { _fun0011_ip = 77; continue _fun0011 }
case 8:
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 14;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.queryChoiceResults;
                    var4 = {};
                    var4['query'] = var9;
                    var4['choices'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var6 = var4.choices;
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot10;
                        var2 = var2.CHOICE;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['choice'] = var2;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0011_ip = 78; continue _fun0011;
case 77:
                    var4 = new Array(0);
case 78:
                    return var4;
case 74:
                    var10 = _closure1_slot9;
                    var7 = var10.getGuild;
                    var4 = _closure2_slot0;
                    var6 = var4.guild_id;
                    var11 = var7.bind(var10)(var6);
                    var7 = _closure1_slot21;
                    var6 = {};
                    var10 = var3.activeCommand;
                    var6['command'] = var10;
                    var10 = var3.optionValues;
                    var6['optionValues'] = var10;
                    var10 = {};
                    var10['channel'] = var4;
                    var10['guild'] = var11;
                    var11 = {};
                    var12 = var3.option;
                    var12 = var12.name;
                    var11['name'] = var12;
                    var11['query'] = var9;
                    var10['autocomplete'] = var11;
                    var6['context'] = var10;
                    var6 = var7.bind(var8)(var6);
                    var7 = _closure1_slot3;
                    var6 = var7.getAutocompleteChoices;
                    var4 = var4.id;
                    var3 = var3.option;
                    var3 = var3.name;
                    var3 = var6.bind(var7)(var4, var3, var9);
                    if(!(var2 != var3)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                    var4 = var3.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot10;
                        var2 = var2.CHOICE;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['choice'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0011_ip = 83; continue _fun0011;
case 81:
                    var3 = {};
                    var2 = _closure1_slot10;
                    var2 = var2.LABEL;
                    var3['type'] = var2;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 20;
                    var4 = var9[var2];
                    var4 = var7.bind(var8)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2["41014u"];
                    var2 = var4.bind(var6)(var2);
                    var3['label'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 83:
                    _fun0011_ip = 84; continue _fun0011;
case 79:
                    var2 = global;
                    var4 = var2.Array;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var15 = 4;
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.fill;
                    var2 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.CHOICE_LOADING;
                    var2['type'] = var5;
                    var1 = var3.bind(var4)(var2);
case 84:
                    return var1;
                }
            };
            var2['queryResults'] = var5;
            var4 = function matches() {
                var1 = false;
                return var1;
            };
            var2['matches'] = var4;
            var1[2] = var2;
            return var1;
        }
    };
    var3['getAutocompleteOptions'] = var2;
    return var1;
})();