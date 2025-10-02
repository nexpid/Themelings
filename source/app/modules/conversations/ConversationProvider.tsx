// app/modules/conversations/ConversationProvider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.FETCH_MESSAGE_BEFORE_LIMIT;
    var _closure1_slot7 = var7;
    var7 = var4.FETCH_MESSAGE_AFTER_LIMIT;
    var _closure1_slot8 = var7;
    var4 = var4.FETCH_THREAD_MESSAGE_LIMIT;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/ConversationProvider.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationProvider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.conversationProps;
            var _closure2_slot0 = var13;
            var7 = var1.children;
            var12 = var1.MediaComponent;
            var _closure2_slot1 = var12;
            var3 = var1.trackItemInteraction;
            var _closure2_slot2 = var3;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 6;
            var5 = var6[var5];
            var8 = var9.bind(var4)(var5);
            var5 = var8.useKeyMessage;
            var5 = var5.bind(var8)(var13);
            var _closure2_slot3 = var5;
            var8 = 7;
            var10 = var6[var8];
            var15 = var9.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot4;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot4;
                    var6 = var7.getChannel;
                    var2 = _closure2_slot3;
                    var2 = var2.channel_id;
                    var2 = var6.bind(var7)(var2);
                    if(!(var5 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 4:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var15 = var14.bind(var15)(var11, var10);
            var _closure2_slot4 = var15;
            var6 = var6[var8];
            var11 = var9.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var6 = null;
                    if(!(var6 == var1)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = _closure2_slot0;
                    var1 = var1.guildId;
                    var2 = var6 == var1;
                    var1 = null;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 6:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot4;
                    var7 = var6 == var2;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var7 = _closure2_slot4;
                    var2 = var7.guild_id;
case 9:
                    if(!(var6 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var5 = _closure2_slot0;
                    var2 = var5.guildId;
case 11:
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var9, var6);
            var _closure2_slot5 = var10;
            var14 = _closure1_slot3;
            var11 = var14.useEffect;
            var6 = null;
            var9 = var6 == var15;
            var16 = undefined;
            if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = var15.id;
case 13:
            var9 = new Array(5);
            var9[0] = var16;
            var16 = var13.type;
            var9[1] = var16;
            var16 = var13.messages;
            var16 = var16.length;
            var9[2] = var16;
            var17 = var6 == var10;
            var16 = undefined;
            if(var17) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var16 = var10.id;
case 15:
            var9[3] = var16;
            var16 = var6 == var5;
            var6 = undefined;
            if(var16) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = var5.id;
case 17:
            var9[4] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = 'message';
                    if(!(var1 === var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var1 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var1;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = _closure2_slot3;
                    var1 = var4.id;
case 21:
                    if(!(var2 != var1)) { _fun0004_ip = 19; continue _fun0004 }
case 23:
                    var1 = _closure2_slot4;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var4 = _closure2_slot4;
                    var1 = var4.id;
case 24:
                    if(!(var2 == var1)) { _fun0004_ip = 26; continue _fun0004 }
case 19:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = 'forum_thread';
                    var1 = var1 === var2;
                    if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var2 = _closure2_slot3;
                    var4 = null;
                    var5 = var4 == var2;
                    var2 = undefined;
                    if(var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var5 = _closure2_slot3;
                    var2 = var5.id;
case 29:
                    var1 = var4 != var2;
case 27:
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.fetchMessages;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.id;
                    var2['channelId'] = var8;
                    var8 = _closure1_slot9;
                    var2['limit'] = var8;
                    var8 = true;
                    var2['forICYMI'] = var8;
                    var2['isPreload'] = var8;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure2_slot5;
                    var5 = null;
                    var6 = var5 == var2;
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var6 = _closure2_slot5;
                    var2 = var6.id;
case 33:
                    if(!(var5 != var2)) { _fun0004_ip = 31; continue _fun0004 }
case 35:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var5 = var2.bind(var4)(var1);
                    var4 = var5.preload;
                    var1 = _closure2_slot5;
                    var2 = var1.id;
                    var1 = _closure2_slot3;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var2, var1);
                    _fun0004_ip = 31; continue _fun0004;
case 26:
                    var1 = _closure2_slot0;
                    var1 = var1.messages;
                    var1 = var1.length;
                    var13 = 1;
                    if(!(!(var1 > var13))) { _fun0004_ip = 31; continue _fun0004 }
case 36:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var9 = var2.bind(var3)(var1);
                    var4 = var9.atNextMillisecond;
                    var5 = _closure2_slot3;
                    var1 = var5.id;
                    var4 = var4.bind(var9)(var1);
                    var1 = 9;
                    var9 = var8[var1];
                    var11 = var2.bind(var3)(var9);
                    var10 = var11.fetchMessages;
                    var9 = {};
                    var7 = _closure2_slot4;
                    var12 = var7.id;
                    var9['channelId'] = var12;
                    var12 = _closure1_slot7;
                    var12 = var12 + var13;
                    var9['limit'] = var12;
                    var9['before'] = var4;
                    var4 = true;
                    var9['forICYMI'] = var4;
                    var9['isPreload'] = var4;
                    var9 = var10.bind(var11)(var9);
                    var1 = var8[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {};
                    var7 = var7.id;
                    var1['channelId'] = var7;
                    var6 = _closure1_slot8;
                    var1['limit'] = var6;
                    var5 = var5.id;
                    var1['after'] = var5;
                    var1['forICYMI'] = var4;
                    var1['isPreload'] = var4;
                    var1 = var2.bind(var3)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var14)(var6, var9);
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = var9[var8];
            var17 = var6.bind(var4)(var8);
            var16 = var17.useStateFromStoresArray;
            var8 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var8;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var5;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0005_ip = 37; continue _fun0005 }
case 3:
                    var3 = _closure2_slot3;
                    if(!(var6 != var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var3 = _closure2_slot0;
                    var4 = var3.type;
                    var3 = 'message';
                    if(!(var3 !== var4)) { _fun0005_ip = 39; continue _fun0005 }
case 21:
                    var3 = _closure2_slot0;
                    var5 = var3.messages;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot6;
                            var4 = var5.getMessage;
                            var3 = var1.channel_id;
                            var2 = var1.id;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = null;
                            if(!(var3 != var2)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var1 = var2;
case 40:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 39:
                    var3 = _closure2_slot0;
                    var3 = var3.messages;
                    var3 = var3.length;
                    var8 = 1;
                    if(!(!(var3 > var8))) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var9 = _closure1_slot6;
                    var7 = var9.getMessages;
                    var3 = _closure2_slot3;
                    var5 = var3.channel_id;
                    var9 = var7.bind(var9)(var5);
                    var7 = var9.getManyBefore;
                    var5 = var3.id;
                    var3 = _closure1_slot7;
                    var7 = var7.bind(var9)(var5, var3);
                    if(!(var6 == var7)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var7 = new Array(0);
case 44:
                    var3 = new Array(1);
                    var11 = 0;
                    var13 = var3;
                    var12 = var7;
                    var5 = arraySpread(var13, var12, var11);
                    var7 = _closure2_slot3;
                    var3[var5] = var7;
                    var5 = var5 + var8;
                    var8 = var9.getManyAfter;
                    var7 = var7.id;
                    var4 = _closure1_slot8;
                    var4 = var8.bind(var9)(var7, var4);
                    if(!(var6 == var4)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var4 = new Array(0);
case 46:
                    var13 = var3;
                    var12 = var4;
                    var11 = var5;
                    var4 = arraySpread(var13, var12, var11);
                    return var3;
case 42:
                    var2 = _closure2_slot0;
                    var3 = var2.messages;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot6;
                            var4 = var5.getMessage;
                            var3 = var1.channel_id;
                            var2 = var1.id;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = null;
                            if(!(var3 != var2)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                            var1 = var2;
case 40:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 37:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var16 = var16.bind(var17)(var14, var8, var11);
            _closure2_slot6 = var16;
            var8 = _closure1_slot3;
            var14 = var8.useMemo;
            var11 = new Array(4);
            var11[0] = var13;
            var11[1] = var16;
            var11[2] = var15;
            var11[3] = var10;
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 == var1;
                    var1 = null;
                    if(var2) { _fun0008_ip = 48; continue _fun0008 }
case 3:
                    var2 = _closure2_slot5;
                    var2 = var3 == var2;
                    var1 = null;
                    if(var2) { _fun0008_ip = 48; continue _fun0008 }
case 6:
                    var2 = {};
                    var3 = _closure2_slot0;
                    var5 = var3.id;
                    var2['conversationId'] = var5;
                    var5 = var3.type;
                    var2['type'] = var5;
                    var5 = _closure2_slot6;
                    var2['messages'] = var5;
                    var5 = _closure2_slot4;
                    var2['channel'] = var5;
                    var4 = _closure2_slot5;
                    var2['guild'] = var4;
                    var4 = var3.title;
                    var2['title'] = var4;
                    var3 = var3.description;
                    var2['description'] = var3;
                    var1 = var2;
case 48:
                    return var1;
                }
            };
            var14 = var14.bind(var8)(var10, var11);
            _closure2_slot7 = var14;
            var11 = var8.useMemo;
            var10 = new Array(4);
            var10[0] = var13;
            var10[1] = var14;
            var10[2] = var5;
            var10[3] = var12;
            var5 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['conversationProps'] = var3;
                var3 = _closure2_slot7;
                var1['conversation'] = var3;
                var4 = _closure2_slot7;
                var3 = null;
                var3 = var3 == var4;
                var1['isLoading'] = var3;
                var3 = _closure2_slot3;
                var1['keyMessage'] = var3;
                var2 = _closure2_slot1;
                var1['MediaComponent'] = var2;
                return var1;
            };
            var10 = var11.bind(var8)(var5, var10);
            var11 = var8.useCallback;
            var14 = var13.id;
            var5 = new Array(3);
            var5[0] = var14;
            var13 = var13.type;
            var5[1] = var13;
            var5[2] = var3;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 49; continue _fun0009 }
case 7:
                    var5 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var4 = var1.id;
                    var3 = var1.type;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var5.bind(var2)(var4, var3, var1);
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var11.bind(var8)(var3, var5);
            _closure2_slot8 = var11;
            var5 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var11;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['MediaComponent'] = var3;
                var2 = _closure2_slot8;
                var1['trackItemInteraction'] = var2;
                return var1;
            };
            var8 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot10;
            var5 = 11;
            var1 = var9[var5];
            var1 = var6.bind(var4)(var1);
            var1 = var1.ConversationContext;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var10;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.ConversationRenderContext;
            var6 = var5.Provider;
            var5 = {};
            var5['value'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ConversationProvider'] = var2;
    return var1;
})();