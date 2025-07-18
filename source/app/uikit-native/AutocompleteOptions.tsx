// app/uikit-native/AutocompleteOptions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AutoCompleteResultTypes;
    var _closure1_slot9 = var8;
    var4 = var4.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MENTION_SENTINEL;
    var _closure1_slot11 = var8;
    var8 = var4.EMOJI_SENTINEL;
    var _closure1_slot12 = var8;
    var8 = var4.CHANNEL_SENTINEL;
    var _closure1_slot13 = var8;
    var4 = var4.COMMAND_SENTINEL;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutocompleteTypes;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EmojiIntention;
    var _closure1_slot16 = var8;
    var8 = var4.EMOJI_MAX_LENGTH;
    var _closure1_slot17 = var8;
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot18 = var4;
    var4 = false;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var8 = var9.debounce;
    var4 = 12;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {'leading': true, 'trailing': true};
    var4 = var8.bind(var9)(var7, var10, var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/AutocompleteOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[1];
            var1 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var3 = false;
 23:
            var _closure2_slot1 = var3;
            if(!(var1 === var2)) { _fun0001_ip = 33; continue _fun0001 }
 31:
            var1 = true;
 33:
            var _closure2_slot2 = var1;
            var1 = {};
            var2 = _closure1_slot15;
            var5 = var2.MENTIONS;
            var3 = {};
            var8 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var8;
            var3['stores'] = var7;
            var7 = function queryResults(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var8 = arg2;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.queryMentionResults;
                    var2 = {};
                    var7 = arg1;
                    var2['query'] = var7;
                    var7 = _closure2_slot0;
                    var2['channel'] = var7;
                    var7 = null;
                    var10 = var7 == var8;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 73; continue _fun0002 }
 67:
                    var9 = var8.canMentionEveryone;
 73:
                    var2['canMentionEveryone'] = var9;
                    var10 = var7 == var8;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 93; continue _fun0002 }
 87:
                    var9 = var8.canMentionHere;
 93:
                    var2['canMentionHere'] = var9;
                    var10 = var7 == var8;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 113; continue _fun0002 }
 107:
                    var9 = var8.canMentionUsers;
 113:
                    var2['canMentionUsers'] = var9;
                    var10 = var7 == var8;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 133; continue _fun0002 }
 127:
                    var9 = var8.canMentionRoles;
 133:
                    var2['canMentionRoles'] = var9;
                    var10 = var7 == var8;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 153; continue _fun0002 }
 147:
                    var9 = var8.canMentionAnyGuildUser;
 153:
                    var2['includeAllGuildUsers'] = var9;
                    var9 = var7 == var8;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 173; continue _fun0002 }
 167:
                    var7 = var8.canMentionNonMentionableRoles;
 173:
                    var2['includeNonMentionableRoles'] = var7;
                    var7 = arg3;
                    var2['request'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var6 = var2.users;
                    var9 = var2.globals;
                    var7 = var2.roles;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var2 = var2.bind(var3)(var1);
                    var5 = var6.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.USER;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var12 = var5.bind(var6)(var1);
                    var1 = new Array(0);
                    var11 = 0;
                    var13 = var1;
                    var11 = arraySpread(var13, var12, var11);
                    var8 = var9.map;
                    var5 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.GLOBAL;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var12 = var8.bind(var9)(var5);
                    var13 = var1;
                    var11 = arraySpread(var13, var12, var11);
                    var6 = var7.map;
                    var4 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.ROLE;
                        var1['type'] = var2;
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var12 = var6.bind(var7)(var4);
                    var13 = var1;
                    var4 = arraySpread(var13, var12, var11);
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
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.matchSentinel;
                var3 = _closure1_slot11;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var2, var1, var3);
                return var1;
            };
            var3['matches'] = var7;
            var1[var5] = var3;
            var5 = var2.CHANNELS;
            var3 = {};
            var7 = function queryResults(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = arg1;
                    var1 = arg2;
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0003_ip = 25; continue _fun0003 }
 19:
                    var5 = var1.channelTypes;
 25:
                    if(!(var2 != var1)) { _fun0003_ip = 38; continue _fun0003 }
 29:
                    var1 = var1.isActiveApplicationCommand;
                    if(var1) { _fun0003_ip = 91; continue _fun0003 }
 38:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.queryChannelResults;
                    var1 = {};
                    var1['query'] = var6;
                    var7 = _closure2_slot0;
                    var1['channel'] = var7;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 147; continue _fun0003;
 91:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var2 = var7[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.queryApplicationCommandChannelResults;
                    var2 = {};
                    var2['query'] = var6;
                    var6 = _closure2_slot0;
                    var2['channel'] = var6;
                    var2['channelTypes'] = var5;
                    var1 = var3.bind(var4)(var2);
 147:
                    var3 = var1.channels;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.CHANNEL;
                        var1['type'] = var4;
                        var1['channel'] = var2;
                        var4 = _closure1_slot6;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isPrivate;
                    var1 = var1.bind(var2)();
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 71; continue _fun0004 }
 23:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.matchSentinel;
                    var4 = _closure1_slot13;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = var5.bind(var6)(var3, var2, var4);
 71:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[var5] = var3;
            var5 = var2.EMOJIS_AND_STICKERS;
            var3 = {};
            var7 = function queryResults(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var3 = arg2;
                    var5 = _closure2_slot2;
                    var12 = 40;
                    if(!var5) { _fun0005_ip = 23; continue _fun0005 }
 21:
                    var12 = 0;
 23:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var10 = 13;
                    var5 = var5[var10];
                    var9 = undefined;
                    var8 = var6.bind(var9)(var5);
                    var6 = var8.queryEmojiResults;
                    var5 = {};
                    var5['query'] = var4;
                    var11 = _closure2_slot0;
                    var5['channel'] = var11;
                    var11 = _closure1_slot16;
                    var11 = var11.CHAT;
                    var5['intention'] = var11;
                    var11 = _closure1_slot10;
                    var11 = var11 + var12;
                    var5['maxCount'] = var11;
                    var5 = var6.bind(var8)(var5);
                    var6 = null;
                    if(!(var6 != var3)) { _fun0005_ip = 163; continue _fun0005 }
 107:
                    var3 = var3.includeEmojiPremiumUpsell;
                    if(!var3) { _fun0005_ip = 163; continue _fun0005 }
 116:
                    var3 = var5.emojis;
                    var3 = var3.locked;
                    var6 = var3.length;
                    var3 = 0;
                    if(!(var6 > var3)) { _fun0005_ip = 163; continue _fun0005 }
 139:
                    var3 = var5.emojis;
                    var3 = var3.unlocked;
                    var6 = var3.length;
                    var3 = 4;
                    if(!(!(var6 < var3))) { _fun0005_ip = 169; continue _fun0005 }
 163:
                    var3 = new Array(0);
                    _fun0005_ip = 213; continue _fun0005;
 169:
                    var8 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.EMOJI_PREMIUM_UPSELL;
                    var8['type'] = var6;
                    var6 = var5.emojis;
                    var6 = var6.locked;
                    var8['results'] = var6;
                    var6 = new Array(1);
                    var6[0] = var8;
                    var3 = var6;
 213:
                    var6 = new Array(0);
                    var8 = _closure2_slot2;
                    if(!var8) { _fun0005_ip = 343; continue _fun0005 }
 224:
                    var8 = _closure1_slot19;
                    if(var8) { _fun0005_ip = 241; continue _fun0005 }
 231:
                    var11 = _closure1_slot5;
                    var8 = var11.hasLoadedStickerPacks;
 241:
                    if(var8) { _fun0005_ip = 280; continue _fun0005 }
 244:
                    var8 = true;
                    _closure1_slot19 = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 14;
                    var8 = var12[var8];
                    var11 = var11.bind(var9)(var8);
                    var8 = var11.fetchStickerPacks;
                    var8 = var8.bind(var11)();
 280:
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
                        var1 = 15;
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
 343:
                    var4 = var6.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.sticker;
                        var1 = {};
                        var3 = _closure1_slot9;
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
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var3 = arg1;
                            var1 = {};
                            var2 = _closure1_slot9;
                            var2 = var2.EMOJI;
                            var1['type'] = var2;
                            var2 = var3.name;
                            var1['name'] = var2;
                            var2 = var3.id;
                            var4 = null;
                            if(!(var4 == var2)) { _fun0006_ip = 49; continue _fun0006 }
 42:
                            var2 = var3.url;
                            _fun0006_ip = 112; continue _fun0006;
 49:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 16;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.getEmojiURL;
                            var5 = {};
                            var9 = var3.id;
                            var5['id'] = var9;
                            var9 = var3.animated;
                            var5['animated'] = var9;
                            var8 = _closure1_slot18;
                            var5['size'] = var8;
                            var2 = var6.bind(var7)(var5);
 112:
                            var1['url'] = var2;
                            var2 = var3.id;
                            var4 = var4 == var2;
                            var2 = undefined;
                            if(!var4) { _fun0006_ip = 135; continue _fun0006 }
 130:
                            var2 = var3.surrogates;
 135:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = arg2;
                    var2 = _closure1_slot12;
                    var1 = arg1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0007_ip = 74; continue _fun0007 }
 20:
                    var4 = var5.length;
                    var2 = 2;
                    var4 = var4 < var2;
                    if(var4) { _fun0007_ip = 48; continue _fun0007 }
 35:
                    var6 = var5.length;
                    var2 = _closure1_slot17;
                    var4 = var6 > var2;
 48:
                    var2 = !var4;
                    if(var4) { _fun0007_ip = 71; continue _fun0007 }
 54:
                    var4 = var5.includes;
                    var3 = _closure1_slot12;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
 71:
                    var1 = var2;
 74:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[var5] = var3;
            var5 = var2.SLASHES;
            var3 = {};
            var7 = function queryResults() {
                var1 = new Array(0);
                return var1;
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = 0;
                    var1 = arg3;
                    var1 = var4 === var1;
                    if(!var1) { _fun0008_ip = 26; continue _fun0008 }
 12:
                    var3 = _closure1_slot14;
                    var2 = arg1;
                    var1 = var2 === var3;
 26:
                    if(!var1) { _fun0008_ip = 54; continue _fun0008 }
 29:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0008_ip = 51; continue _fun0008 }
 39:
                    var3 = arg2;
                    var3 = var3.length;
                    var2 = var4 === var3;
 51:
                    var1 = !var2;
 54:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[var5] = var3;
            var5 = var2.SLASHES_DISCOVERY;
            var3 = {};
            var7 = function queryResults() {
                var1 = new Array(0);
                return var1;
            };
            var3['queryResults'] = var7;
            var7 = function matches(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0009_ip = 19; continue _fun0009 }
 10:
                    var3 = 0;
                    var2 = arg3;
                    var1 = var3 === var2;
 19:
                    if(!var1) { _fun0009_ip = 36; continue _fun0009 }
 22:
                    var3 = _closure1_slot14;
                    var2 = arg1;
                    var1 = var2 === var3;
 36:
                    if(!var1) { _fun0009_ip = 53; continue _fun0009 }
 39:
                    var2 = arg2;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 === var3;
 53:
                    return var1;
                }
            };
            var3['matches'] = var7;
            var1[var5] = var3;
            var3 = var2.CHOICES;
            var2 = {};
            var7 = _closure1_slot4;
            var5 = new Array(2);
            var5[0] = var7;
            var6 = _closure1_slot3;
            var5[1] = var6;
            var2['stores'] = var5;
            var5 = function queryResults(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var9 = arg1;
                    var3 = arg2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 73; continue _fun0010 }
 14:
                    var4 = var3.option;
                    if(!(var2 != var4)) { _fun0010_ip = 73; continue _fun0010 }
 24:
                    var4 = var4.autocomplete;
                    if(!var4) { _fun0010_ip = 73; continue _fun0010 }
 33:
                    var5 = var2 == var3;
                    var8 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0010_ip = 50; continue _fun0010 }
 44:
                    var4 = var3.activeCommand;
 50:
                    if(!(var2 != var4)) { _fun0010_ip = 73; continue _fun0010 }
 54:
                    var5 = var2 == var3;
                    var4 = undefined;
                    if(var5) { _fun0010_ip = 69; continue _fun0010 }
 63:
                    var4 = var3.optionValues;
 69:
                    if(!(var2 == var4)) { _fun0010_ip = 170; continue _fun0010 }
 73:
                    var4 = var2 == var3;
                    var6 = undefined;
                    var7 = undefined;
                    if(var4) { _fun0010_ip = 90; continue _fun0010 }
 84:
                    var7 = var3.choices;
 90:
                    if(!(var2 != var7)) { _fun0010_ip = 164; continue _fun0010 }
 94:
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 13;
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
                        var2 = _closure1_slot9;
                        var2 = var2.CHOICE;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['choice'] = var2;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0010_ip = 168; continue _fun0010;
 164:
                    var4 = new Array(0);
 168:
                    return var4;
 170:
                    var10 = _closure1_slot8;
                    var7 = var10.getGuild;
                    var4 = _closure2_slot0;
                    var6 = var4.guild_id;
                    var11 = var7.bind(var10)(var6);
                    var7 = _closure1_slot20;
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
                    if(!(var2 != var3)) { _fun0010_ip = 429; continue _fun0010 }
 309:
                    var4 = var3.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0010_ip = 339; continue _fun0010 }
 320:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot9;
                        var2 = var2.CHOICE;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['choice'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0010_ip = 427; continue _fun0010;
 339:
                    var3 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.LABEL;
                    var3['type'] = var2;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 17;
                    var4 = var9[var2];
                    var4 = var7.bind(var8)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.41014u;
                    var2 = var4.bind(var6)(var2);
                    var3['label'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
 427:
                    _fun0010_ip = 487; continue _fun0010;
 429:
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
                    var5 = _closure1_slot9;
                    var5 = var5.CHOICE_LOADING;
                    var2['type'] = var5;
                    var1 = var3.bind(var4)(var2);
 487:
                    return var1;
                }
            };
            var2['queryResults'] = var5;
            var4 = function matches() {
                var1 = false;
                return var1;
            };
            var2['matches'] = var4;
            var1[var3] = var2;
            return var1;
        }
    };
    var3['getAutocompleteOptions'] = var2;
    return var1;
})();