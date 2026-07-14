// app/modules/conversations/components/native/useConversationsHeaderButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CONVERSATION_HAS_MORE_EXPIRATION_MS;
    var _closure1_slot5 = var7;
    var7 = var4.MOBILE_FETCH_LIMIT;
    var _closure1_slot6 = var7;
    var4 = var4.MOBILE_PREVIEW_MESSAGE_COUNT;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/useConversationsHeaderButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConversationsHeaderButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var9 = undefined;
            var7 = var4.bind(var9)(var2);
            var6 = var7.useIsTopicalNavEnabled;
            var4 = var5.guild_id;
            var2 = 'channel_header';
            var7 = var6.bind(var7)(var4, var2);
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var8[var2];
            var2 = var6.bind(var9)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_TEXT;
            var7 = var4 === var2;
case 2:
            var _closure2_slot1 = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 6;
            var2 = var10[var2];
            var6 = var8.bind(var9)(var2);
            var4 = var6.useConversationBackoffRef;
            var11 = var5.id;
            var2 = new Array(1);
            var2[0] = var11;
            var6 = var4.bind(var6)(var2);
            var _closure2_slot2 = var6;
            var14 = _closure1_slot3;
            var11 = var14.useCallback;
            var2 = function() {
                var1 = function fetchPage() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var1;
                var5 = _closure1_slot2;
                var4 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var3 = _closure2_slot1;
                            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7: // try_start_0
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 7;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.fetchChannelConversations;
                            var3 = {'channelId': null, 'guildId': null, 'direction': 'before', 'anchor': null, 'limit': null, 'isJump': true, 'throwOnError': true};
                            var6 = _closure2_slot0;
                            var8 = var6.id;
                            var3['channelId'] = var8;
                            var6 = var6.guild_id;
                            var3['guildId'] = var6;
                            var6 = _closure1_slot6;
                            var3['limit'] = var6;
                            var6 = {};
                            var7 = _closure1_slot7;
                            var6['limit'] = var7;
                            var3['hydrateMessages'] = var6;
                            var3 = var4.bind(var5)(var3);
                            SaveGenerator(address=128);
case 8:
                            return var3;
case 9:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var4 = _closure2_slot2;
                            var5 = var4.current;
                            var4 = var5.succeed;
                            var4 = var4.bind(var5)();
case 12: // try_end0
                            _fun0002_ip = 6; continue _fun0002;
case 10:
                            return var3;
case 13: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var2 = _closure2_slot2;
                            var4 = var2.current;
                            var3 = var4.fail;
                            var2 = _closure3_slot1;
                            var2 = var3.bind(var4)(var2);
case 6:
                            var2 = undefined;
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var5.bind(var4)(var2);
                var _closure3_slot0 = var2;
                return var1;
            };
            var4 = var2.bind(var9)();
            var12 = var5.id;
            var2 = new Array(4);
            var2[0] = var12;
            var12 = var5.guild_id;
            var2[1] = var12;
            var2[2] = var7;
            var2[3] = var6;
            var11 = var11.bind(var14)(var4, var2);
            var _closure2_slot3 = var11;
            var12 = var14.useEffect;
            var2 = var5.id;
            var4 = new Array(4);
            var4[0] = var2;
            var2 = var5.guild_id;
            var4[1] = var2;
            var4[2] = var7;
            var4[3] = var11;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure1_slot4;
                    var4 = var5.hasChannelData;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 14:
                    if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var5 = _closure1_slot4;
                    var4 = var5.isPendingFetch;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 16:
                    if(var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var14)(var2, var4);
            var4 = 8;
            var2 = var10[var4];
            var17 = var8.bind(var9)(var2);
            var16 = var17.useStateFromStores;
            var2 = _closure1_slot4;
            var15 = new Array(1);
            var15[0] = var2;
            var12 = var5.id;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var4 = _closure1_slot4;
                var3 = var4.getEdgeMarker;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = 'after';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15, var12, var13);
            var _closure2_slot4 = var15;
            var13 = var14.useEffect;
            var12 = new Array(3);
            var12[0] = var15;
            var12[1] = var7;
            var12[2] = var11;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 20; continue _fun0004 }
case 22:
                    var4 = _closure2_slot4;
                    var3 = _closure1_slot5;
                    var5 = var4 + var3;
                    var3 = global;
                    var6 = var3.Date;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    var5 = var5 - var4;
                    var4 = 0;
                    if(!(!(var5 > var4))) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var6 = _closure2_slot3;
                    var4 = undefined;
                    var4 = var6.bind(var4)();
case 20:
                    var4 = undefined;
                    return var4;
case 23:
                    var4 = var3.setTimeout;
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3, var5);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var11 = var13.bind(var14)(var11, var12);
            var4 = var10[var4];
            var10 = var8.bind(var9)(var4);
            var9 = var10.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = var5.id;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannelConversations;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = var3.length;
case 25:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var8, var2, var4);
            var _closure2_slot5 = var2;
            if(!var7) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var4 = 0;
            var7 = var2 > var4;
case 29:
            var _closure2_slot6 = var7;
            var4 = _closure1_slot3;
            var8 = var4.useRef;
            var3 = null;
            var3 = var8.bind(var4)(var3);
            var _closure2_slot7 = var3;
            var8 = var4.useEffect;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var2;
            var2 = var5.id;
            var3[2] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 5:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3 !== var2;
case 31:
                    if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var2 = _closure2_slot7;
                    var5 = _closure2_slot0;
                    var1 = var5.id;
                    var2['current'] = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.ConversationsAnalytics;
                    var2 = var3.trackEntrypointImpression;
                    var1 = {};
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var4 = _closure2_slot5;
                    var1['conversationCount'] = var4;
                    var1 = var2.bind(var3)(var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var4)(var2, var3);
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var7;
            var2[1] = var6;
            var6 = var5.id;
            var2[2] = var6;
            var5 = var5.guild_id;
            var2[3] = var5;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var3 = null;
                    var1 = null;
                    if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                    var2 = {};
                    var2['source'] = var3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 10;
                    var3 = var8[var3];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.PaperIcon;
                    var2['IconComponent'] = var3;
                    var3 = function onPress() {
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 9;
                        var2 = var4[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var7 = var2.ConversationsAnalytics;
                        var6 = var7.trackTopicsUnitImpression;
                        var2 = {};
                        var5 = _closure2_slot0;
                        var8 = var5.id;
                        var2['channelId'] = var8;
                        var8 = new Array(0);
                        var2['conversationIds'] = var8;
                        var8 = false;
                        var2['isFocusMode'] = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 11;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openConversationNavigator;
                        var2 = {};
                        var6 = var5.id;
                        var2['channelId'] = var6;
                        var5 = var5.guild_id;
                        var2['guildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var3;
                    var3 = 12;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.u54FxB;
                    var3 = var4.bind(var5)(var3);
                    var2['accessibilityLabel'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useConversationsHeaderButton'] = var2;
    return var1;
})();