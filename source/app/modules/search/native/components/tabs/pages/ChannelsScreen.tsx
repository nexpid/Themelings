// app/modules/search/native/components/tabs/pages/ChannelsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getVoiceStates(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var3 = arg3;
            var4 = var1.isGuildStageVoice;
            var4 = var4.bind(var1)();
            if(!var4) { _fun0001_ip = 25; continue _fun0001 }
 22:
            var2 = var3;
 25:
            var1 = var1.id;
            var1 = var2[var1];
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 47; continue _fun0001 }
 40:
            var1 = _closure1_slot5;
 47:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_VOICE_STATES;
    var _closure1_slot5 = var8;
    var8 = var4.SearchListItemTypes;
    var _closure1_slot6 = var8;
    var4 = var4.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function ChannelsScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var6 = var2.searchContext;
            var _closure2_slot0 = var6;
            var7 = var2.onViewableItemsChanged;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 4;
            var9 = var4[var8];
            var5 = undefined;
            var10 = var3.bind(var5)(var9);
            var9 = var10.useTextChannelSearchResults;
            var13 = var9.bind(var10)();
            var _closure2_slot1 = var13;
            var8 = var4[var8];
            var9 = var3.bind(var5)(var8);
            var8 = var9.useVoiceChannelSearchResults;
            var12 = var8.bind(var9)();
            var _closure2_slot2 = var12;
            var9 = _closure1_slot1;
            var8 = 5;
            var8 = var4[var8];
            var10 = var9.bind(var5)(var8);
            var8 = var6.guildId;
            var11 = var10.bind(var5)(var8);
            var _closure2_slot3 = var11;
            var8 = 6;
            var8 = var4[var8];
            var9 = var9.bind(var5)(var8);
            var8 = var6.guildId;
            var14 = var9.bind(var5)(var8);
            var _closure2_slot4 = var14;
            var8 = 7;
            var9 = var4[var8];
            var15 = var3.bind(var5)(var9);
            var10 = var15.useOnPressGuildTextChannel;
            var9 = {};
            var9['searchContext'] = var6;
            var9 = var10.bind(var15)(var9);
            var _closure2_slot5 = var9;
            var8 = var4[var8];
            var15 = var3.bind(var5)(var8);
            var10 = var15.useOnPressGuildVoiceChannel;
            var8 = {};
            var8['searchContext'] = var6;
            var8 = var10.bind(var15)(var8);
            var _closure2_slot6 = var8;
            var16 = _closure1_slot4;
            var15 = var16.useState;
            var10 = function(arg1) {
                var2 = arg1;
                var1 = var2.isInitialSearchQuery;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var15.bind(var16)(var6, var10);
            var _closure2_slot7 = var15;
            var10 = 8;
            var10 = var4[var10];
            var17 = var3.bind(var5)(var10);
            var16 = var17.useFullscreenPlaceholderCount;
            var10 = {};
            var18 = _closure1_slot7;
            var10['placeholderHeight'] = var18;
            var18 = 1;
            var10['numColumns'] = var18;
            var18 = var16.bind(var17)(var10);
            var _closure2_slot8 = var18;
            var10 = _closure1_slot3;
            var17 = var10.useCallback;
            var16 = new Array(4);
            var16[0] = var9;
            var16[1] = var6;
            var9 = var13.length;
            var16[2] = var9;
            var9 = var12.length;
            var16[3] = var9;
            var9 = function(arg1, arg2) {
                var6 = arg1;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackSearchResultClicked;
                var2 = {};
                var7 = _closure2_slot0;
                var2['searchContext'] = var7;
                var2['channelId'] = var6;
                var6 = arg2;
                var2['index'] = var6;
                var6 = _closure2_slot1;
                var6 = var6.length;
                var5 = _closure2_slot2;
                var5 = var5.length;
                var5 = var6 + var5;
                var2['totalSearchResults'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var17 = var17.bind(var10)(var9, var16);
            var _closure2_slot9 = var17;
            var16 = var10.useCallback;
            var9 = new Array(4);
            var9[0] = var8;
            var9[1] = var6;
            var8 = var13.length;
            var9[2] = var8;
            var8 = var12.length;
            var9[3] = var8;
            var8 = function(arg1, arg2) {
                var6 = arg1;
                var2 = _closure2_slot6;
                var1 = undefined;
                var2 = var2.bind(var1)(var6);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackSearchResultClicked;
                var2 = {};
                var7 = _closure2_slot0;
                var2['searchContext'] = var7;
                var2['channelId'] = var6;
                var6 = arg2;
                var2['index'] = var6;
                var6 = _closure2_slot1;
                var6 = var6.length;
                var5 = _closure2_slot2;
                var5 = var5.length;
                var5 = var6 + var5;
                var2['totalSearchResults'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16 = var16.bind(var10)(var8, var9);
            var _closure2_slot10 = var16;
            var9 = var10.useMemo;
            var8 = new Array(8);
            var8[0] = var18;
            var8[1] = var17;
            var8[2] = var16;
            var8[3] = var15;
            var8[4] = var14;
            var8[5] = var13;
            var8[6] = var12;
            var8[7] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var7 = 0;
                    var _closure3_slot1 = var7;
                    var3 = _closure2_slot1;
                    var3 = var3.length;
                    if(!(var3 > var7)) { _fun0003_ip = 165; continue _fun0003 }
 35:
                    var4 = var1.push;
                    var3 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.SECTION;
                    var3['type'] = var5;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 10;
                    var9 = var13[var8];
                    var11 = undefined;
                    var9 = var12.bind(var11)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var13[var8];
                    var8 = var12.bind(var11)(var8);
                    var8 = var8.t;
                    var8 = var8.nIfr0d;
                    var8 = var9.bind(var10)(var8);
                    var5['title'] = var8;
                    var3['props'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot1;
                    var5 = var3.forEach;
                    var4 = function(arg1, arg2) {
                        var6 = arg1;
                        var3 = _closure3_slot1;
                        var2 = arg2;
                        var2 = var3 + var2;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var4 = _closure1_slot6;
                        var4 = var4.GUILD_TEXT_CHANNEL;
                        var1['type'] = var4;
                        var4 = {};
                        var7 = var6.channel;
                        var4['channel'] = var7;
                        var6 = var6.lastMessageId;
                        var4['lastMessageId'] = var6;
                        var5 = function onPress(arg1) {
                            var4 = _closure2_slot9;
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var4['onPress'] = var5;
                        var1['props'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var3 = var3.length;
                    var3 = var7 + var3;
                    _closure3_slot1 = var3;
 165:
                    var3 = _closure2_slot2;
                    var3 = var3.length;
                    if(!(var3 > var7)) { _fun0003_ip = 330; continue _fun0003 }
 181:
                    var4 = var1.push;
                    var3 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.SECTION;
                    var3['type'] = var5;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 10;
                    var10 = var13[var9];
                    var8 = undefined;
                    var10 = var12.bind(var8)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var8)(var9);
                    var9 = var9.t;
                    var9 = var9.CYnO4u;
                    var9 = var10.bind(var11)(var9);
                    var5['title'] = var9;
                    var3['props'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot4;
                    var3 = function createSorter(arg1, arg2) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = arg2;
                        var _closure4_slot1 = var2;
                        var1 = function(arg1, arg2) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var6 = _closure1_slot9;
                                var1 = arg1;
                                var1 = var1.channel;
                                var5 = _closure4_slot0;
                                var4 = _closure4_slot1;
                                var2 = undefined;
                                var3 = var6.bind(var2)(var1, var5, var4);
                                var1 = arg2;
                                var1 = var1.channel;
                                var2 = var6.bind(var2)(var1, var5, var4);
                                var4 = var3.length;
                                var1 = var2.length;
                                var4 = var4 < var1;
                                var1 = 1;
                                if(var4) { _fun0004_ip = 98; continue _fun0004 }
 70:
                                var3 = var3.length;
                                var2 = var2.length;
                                var3 = var3 > var2;
                                var2 = 0;
                                if(!var3) { _fun0004_ip = 95; continue _fun0004 }
 89:
                                var2 = -1;
 95:
                                var1 = var2;
 98:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var5 = var3.bind(var8)(var5, var4);
                    var4 = _closure2_slot2;
                    var3 = var4.sort;
                    var4 = var3.bind(var4)(var5);
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var6 = arg1;
                            var3 = _closure3_slot1;
                            var2 = arg2;
                            var2 = var3 + var2;
                            var _closure4_slot0 = var2;
                            var3 = _closure3_slot0;
                            var2 = var3.push;
                            var1 = {};
                            var4 = _closure1_slot6;
                            var4 = var4.GUILD_VOICE_CHANNEL;
                            var1['type'] = var4;
                            var4 = {};
                            var8 = var6.channel;
                            var4['channel'] = var8;
                            var10 = _closure2_slot3;
                            var8 = var6.channel;
                            var8 = var8.id;
                            var10 = var10[var8];
                            var8 = null;
                            if(!(var8 == var10)) { _fun0005_ip = 93; continue _fun0005 }
 89:
                            var10 = _closure1_slot5;
 93:
                            var4['voiceStates'] = var10;
                            var9 = _closure2_slot4;
                            var6 = var6.channel;
                            var6 = var6.id;
                            var6 = var9[var6];
                            if(!(var8 == var6)) { _fun0005_ip = 124; continue _fun0005 }
 120:
                            var6 = _closure1_slot5;
 124:
                            var4['speakerVoiceStates'] = var6;
                            var5 = function onPress(arg1) {
                                var4 = _closure2_slot10;
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var4['onPress'] = var5;
                            var1['props'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 330:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0003_ip = 427; continue _fun0003 }
 337:
                    var2 = var1.length;
                    if(!(var7 === var2)) { _fun0003_ip = 427; continue _fun0003 }
 346:
                    var2 = _closure2_slot8;
                    var2 = var7 < var2;
                    var4 = global;
                    var3 = 'message-placeholder-';
                    var7 = 0;
                    if(!var2) { _fun0003_ip = 427; continue _fun0003 }
 370:
                    var8 = var1.push;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var9 = var9.MESSAGE_PLACEHOLDER;
                    var2['type'] = var9;
                    var9 = var4.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var3)(var7);
                    var2['key'] = var9;
                    var2 = var8.bind(var1)(var2);
                    var7 = var7 + 1;
                    var2 = _closure2_slot8;
                    if(var7 < var2) { _fun0003_ip = 370; continue _fun0003 }
 427:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var1, var8);
            var1 = 11;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var3 = var4.useMessageTabCountsErrorText;
            var1 = {};
            var1['searchContext'] = var6;
            var6 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0002_ip = 526; continue _fun0002 }
 474:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var9 = _closure1_slot7;
            var1['estimatedItemSize'] = var9;
            var1['data'] = var8;
            var1['onViewableItemsChanged'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 562; continue _fun0002;
 526:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 562:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/pages/ChannelsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();