// app/modules/conversations/components/native/useConversationsHeaderButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CONVERSATION_HAS_MORE_EXPIRATION_MS;
    var _closure1_slot4 = var7;
    var4 = var4.MOBILE_FETCH_LIMIT;
    var _closure1_slot5 = var4;
    var4 = 10;
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
            var3 = 3;
            var3 = var6[var3];
            var8 = undefined;
            var7 = var4.bind(var8)(var3);
            var6 = var7.useIsConversationDebugUXEnabled;
            var4 = var5.guild_id;
            var3 = 'channel_header';
            var7 = var6.bind(var7)(var4, var3);
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.type;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var3 = var6.bind(var8)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_TEXT;
            var7 = var4 === var3;
case 2:
            var _closure2_slot1 = var7;
            var4 = _closure1_slot2;
            var9 = var4.useEffect;
            var3 = var5.id;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var5.guild_id;
            var6[1] = var3;
            var6[2] = var7;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var1 = !var1;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot3;
                    var3 = var4.hasChannelData;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 4:
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot3;
                    var3 = var4.isPendingFetch;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 6:
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchChannelConversations;
                    var1 = {'channelId': null, 'guildId': null, 'direction': 'before', 'anchor': null, 'limit': null, 'isJump': true};
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var1['channelId'] = var6;
                    var5 = var5.guild_id;
                    var1['guildId'] = var5;
                    var4 = _closure1_slot5;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var4)(var3, var6);
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var10 = var9[var3];
            var14 = var6.bind(var8)(var10);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot3;
            var12 = new Array(1);
            var12[0] = var2;
            var10 = var5.id;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var4 = _closure1_slot3;
                var3 = var4.getEdgeMarker;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = 'after';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var10 = var13.bind(var14)(var12, var10, var11);
            var _closure2_slot2 = var10;
            var12 = var4.useEffect;
            var11 = new Array(4);
            var11[0] = var10;
            var11[1] = var7;
            var10 = var5.id;
            var11[2] = var10;
            var10 = var5.guild_id;
            var11[3] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot4;
                    var4 = var3 + var2;
                    var2 = global;
                    var5 = var2.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var5 = var4 - var3;
                    var4 = function handleRefresh() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.fetchChannelConversations;
                        var2 = {'channelId': null, 'guildId': null, 'direction': 'before', 'anchor': null, 'limit': null, 'isJump': true};
                        var6 = _closure2_slot0;
                        var7 = var6.id;
                        var2['channelId'] = var7;
                        var6 = var6.guild_id;
                        var2['guildId'] = var6;
                        var5 = _closure1_slot5;
                        var2['limit'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = 0;
                    if(!(!(var5 > var3))) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = undefined;
                    var3 = var4.bind(var3)();
case 10:
                    var3 = undefined;
                    return var3;
case 13:
                    var3 = var2.setTimeout;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4, var5);
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
            var10 = var12.bind(var4)(var10, var11);
            var3 = var9[var3];
            var9 = var6.bind(var8)(var3);
            var8 = var9.useStateFromStores;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = var5.id;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getChannelConversations;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var3.length;
case 15:
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var1 = var2;
case 17:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var6, var2, var3);
            var _closure2_slot3 = var6;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var7;
            var2[1] = var6;
            var6 = var5.id;
            var2[2] = var6;
            var5 = var5.guild_id;
            var2[3] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var1 = null;
                    if(!var4) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var4 = _closure2_slot3;
                    var2 = 0;
                    var1 = null;
                    if(!(var2 !== var4)) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                    var2 = {};
                    var2['source'] = var3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var3 = 7;
                    var3 = var8[var3];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.PaperIcon;
                    var2['IconComponent'] = var3;
                    var3 = function onPress() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openConversationBottomSheet;
                        var2 = {};
                        var5 = _closure2_slot0;
                        var6 = var5.id;
                        var2['channelId'] = var6;
                        var5 = var5.guild_id;
                        var2['guildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var3;
                    var3 = 9;
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
case 19:
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