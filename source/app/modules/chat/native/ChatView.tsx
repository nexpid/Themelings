// app/modules/chat/native/ChatView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.jsxs;
    var _closure1_slot10 = var8;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = var11.hairlineWidth;
    var10['borderTopWidth'] = var11;
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var10['borderTopColor'] = var13;
    var4['empty'] = var10;
    var10 = {'flex': 1, 'overflow': 'hidden'};
    var4['messages'] = var10;
    var10 = {'backgroundColor': null, 'justifyContent': 'flex-start', 'overflow': 'hidden', 'flex': 1};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['chat'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function ChatView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.alwaysRespectKeyboard;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var _closure2_slot0 = var1;
            var14 = var2.channelId;
            var _closure2_slot1 = var14;
            var8 = var2.chatInputRef;
            var _closure2_slot2 = var8;
            var12 = var2.disableGradient;
            if(!(var12 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = false;
case 4:
            var15 = var2.guildId;
            var3 = var2.HACK_fixModalInteraction;
            var _closure2_slot3 = var3;
            var3 = var2.screenIndex;
            var _closure2_slot4 = var3;
            var3 = var2.secondaryTextFieldRef;
            var _closure2_slot5 = var3;
            var2 = var2.setNoExtractUI;
            var _closure2_slot6 = var2;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var2 = _closure1_slot12;
            var13 = var2.bind(var4)();
            _closure2_slot7 = var13;
            var18 = _closure1_slot3;
            var3 = var18.useEffect;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var18)(var1, var2);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var19 = 11;
            var1 = var5[var19];
            var10 = var3.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var10)(var2, var1);
            _closure2_slot8 = var1;
            var9 = var18.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var14;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot8;
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var7 = _closure1_slot5;
                    var6 = {};
                    var8 = _closure2_slot1;
                    var6['id'] = var8;
                    var8 = _closure1_slot8;
                    var8 = var8.GUILD_TEXT;
                    var6['type'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 12;
                    var9 = var12[var8];
                    var5 = undefined;
                    var9 = var11.bind(var5)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.ZTNur6;
                    var8 = var9.bind(var10)(var8);
                    var6['name'] = var8;
                    var4 = var7.bind(var5)(var6);
case 10:
                    var1['channel'] = var4;
                    var2 = _closure2_slot8;
                    var2 = var3 == var2;
                    var1['channelIsLoading'] = var2;
                    return var1;
                }
            };
            var1 = var9.bind(var18)(var1, var2);
            var11 = var1.channelIsLoading;
            var16 = var1.channel;
            _closure2_slot9 = var16;
            var1 = 13;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useIsChannelContentGated;
            var10 = var1.bind(var2)(var16);
            var1 = var5[var19];
            var20 = var3.bind(var4)(var1);
            var17 = var20.useStateFromStores;
            var1 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var1;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var17.bind(var20)(var9, var2, var1);
            _closure2_slot10 = var1;
            var1 = var18.useRef;
            var1 = var1.bind(var18)(var14);
            _closure2_slot11 = var1;
            var1 = var18.useRef;
            var9 = null;
            var1 = var1.bind(var18)(var9);
            _closure2_slot12 = var1;
            var2 = var18.useRef;
            var2 = var2.bind(var18)(var9);
            _closure2_slot13 = var2;
            var2 = _closure1_slot1;
            var17 = 14;
            var17 = var5[var17];
            var20 = var2.bind(var4)(var17);
            var17 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var17 = var20.bind(var4)(var17);
            _closure2_slot14 = var17;
            var17 = 16;
            var17 = var5[var17];
            var17 = var2.bind(var4)(var17);
            var17 = var17.bind(var4)(var14);
            _closure2_slot15 = var17;
            var19 = var5[var19];
            var22 = var3.bind(var4)(var19);
            var21 = var22.useStateFromStoresObject;
            var19 = _closure1_slot7;
            var20 = new Array(1);
            var20[0] = var19;
            var19 = new Array(2);
            var19[0] = var14;
            var19[1] = var17;
            var17 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var2 = var4.getMessages;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = var2.length;
                    var4 = 0;
                    var4 = var4 === var5;
                    if(!var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var5 = var2.loadingMore;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var6 = var2.ready;
                    var5 = !var6;
case 13:
                    var4 = var5;
case 11:
                    var1['shouldRenderPlaceholder'] = var4;
                    var2 = var2.hasMoreBefore;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot15;
                    var2 = !var3;
case 15:
                    var1['shouldRenderBegginingRow'] = var2;
                    return var1;
                }
            };
            var17 = var21.bind(var22)(var20, var17, var19);
            var19 = var17.shouldRenderPlaceholder;
            _closure2_slot16 = var19;
            var17 = var17.shouldRenderBegginingRow;
            _closure2_slot17 = var17;
            var20 = var18.useCallback;
            var19 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot13;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var2 = var3.onChatViewScrolled;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = new Array(0);
            var17 = var20.bind(var18)(var19, var17);
            _closure2_slot18 = var17;
            var19 = var18.useCallback;
            var17 = new Array(1);
            var17[0] = var8;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.keyCommand;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 6; continue _fun0006 }
case 19:
                    var1 = var2.handlePressKey;
                    var1 = var1.bind(var2)(var3);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var18)(var8, var17);
            _closure2_slot19 = var8;
            var19 = var18.useCallback;
            var17 = new Array(1);
            var17[0] = var1;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 20; continue _fun0007 }
case 18:
                    var1 = var2.scrollToNewMessages;
                    var1 = var1.bind(var2)();
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var18)(var8, var17);
            _closure2_slot20 = var8;
            var17 = var18.useCallback;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot12;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 20; continue _fun0008 }
case 18:
                    var1 = var2.jumpToPresent;
                    var1 = var1.bind(var2)();
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var17.bind(var18)(var1, var8);
            _closure2_slot21 = var1;
            var17 = var18.useLayoutEffect;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var17.bind(var18)(var8, var1);
            var17 = var18.useEffect;
            var8 = new Array(1);
            var8[0] = var14;
            var1 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 18;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.loadThread;
                var4 = _closure2_slot1;
                var3 = var3.bind(var6)(var4);
                var3 = _closure1_slot0;
                var2 = 19;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchSummaries;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var1 = var17.bind(var18)(var1, var8);
            var17 = var18.useEffect;
            var1 = var16.id;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure2_slot11;
                var1 = _closure2_slot9;
                var1 = var1.id;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var17.bind(var18)(var1, var8);
            var17 = var18.useEffect;
            var8 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.clearOldestUnreadMessageId;
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var17.bind(var18)(var8, var1);
            var1 = 21;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsMessagesFunctionalComponentEnabled;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot2;
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = 23;
            var1 = var5[var1];
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var3 = 22;
            var1 = var5[var3];
case 23:
            var1 = var2.bind(var4)(var1);
            _closure2_slot22 = var1;
            var8 = function renderMessagesWrapper() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var17 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 24;
                    var5 = var12[var1];
                    var1 = undefined;
                    var7 = var17.bind(var1)(var5);
                    var5 = {};
                    var8 = _closure2_slot7;
                    var8 = var8.messages;
                    var5['style'] = var8;
                    var18 = _closure2_slot1;
                    var5['channelId'] = var18;
                    var11 = _closure1_slot9;
                    var8 = 25;
                    var8 = var12[var8];
                    var10 = var17.bind(var1)(var8);
                    var8 = {};
                    var13 = _closure2_slot9;
                    var8['channel'] = var13;
                    var13 = _closure2_slot13;
                    var8['ref'] = var13;
                    var13 = _closure2_slot20;
                    var8['scrollToNewMessages'] = var13;
                    var8 = var11.bind(var1)(var10, var8);
                    var5['stickyHeader'] = var8;
                    var8 = 26;
                    var8 = var12[var8];
                    var10 = var17.bind(var1)(var8);
                    var8 = {};
                    var14 = _closure2_slot22;
                    var13 = {};
                    var15 = _closure2_slot0;
                    var13['alwaysRespectKeyboard'] = var15;
                    var15 = _closure2_slot9;
                    var13['channel'] = var15;
                    var19 = _closure2_slot4;
                    var13['screenIndex'] = var19;
                    var20 = _closure2_slot2;
                    var13['chatInputRef'] = var20;
                    var15 = _closure2_slot3;
                    var13['HACK_fixModalInteraction'] = var15;
                    var15 = _closure2_slot15;
                    var13['isResourceChannel'] = var15;
                    var15 = _closure2_slot19;
                    var13['onPressKey'] = var15;
                    var15 = _closure2_slot18;
                    var13['onScroll'] = var15;
                    var15 = _closure2_slot12;
                    var13['ref'] = var15;
                    var15 = _closure2_slot7;
                    var15 = var15.chat;
                    var13['style'] = var15;
                    var15 = _closure2_slot14;
                    var13['visibleMessagesWindowHandler'] = var15;
                    var15 = 27;
                    var15 = var12[var15];
                    var16 = var17.bind(var1)(var15);
                    var15 = {};
                    var15['ref'] = var20;
                    var20 = _closure2_slot9;
                    var15['channel'] = var20;
                    var20 = _closure2_slot15;
                    var15['isResourceChannel'] = var20;
                    var15['screenIndex'] = var19;
                    var19 = _closure2_slot5;
                    var15['secondaryTextFieldRef'] = var19;
                    var19 = _closure2_slot6;
                    var15['setNoExtractUI'] = var19;
                    var16 = var11.bind(var1)(var16, var15);
                    var15 = new Array(2);
                    var15[0] = var16;
                    var16 = 28;
                    var16 = var12[var16];
                    var17 = var17.bind(var1)(var16);
                    var16 = {};
                    var16['channelId'] = var18;
                    var19 = _closure2_slot9;
                    var18 = var19.getGuildId;
                    var18 = var18.bind(var19)();
                    var16['guildId'] = var18;
                    var18 = _closure2_slot17;
                    var16['shouldRender'] = var18;
                    var16 = var11.bind(var1)(var17, var16);
                    var15[1] = var16;
                    var13['children'] = var15;
                    var13 = var4.bind(var1)(var14, var13);
                    var8['children'] = var13;
                    var10 = var11.bind(var1)(var10, var8);
                    var8 = new Array(4);
                    var8[0] = var10;
                    var11 = _closure1_slot0;
                    var10 = 29;
                    var10 = var12[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.isAndroid;
                    var12 = var10.bind(var11)();
                    var11 = null;
                    if(var12) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                    var14 = _closure1_slot9;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 30;
                    var12 = var15[var12];
                    var13 = var13.bind(var1)(var12);
                    var12 = {};
                    var15 = _closure2_slot9;
                    var15 = var15.id;
                    var12['channelId'] = var15;
                    var15 = _closure2_slot12;
                    var12['messagesRef'] = var15;
                    var11 = var14.bind(var1)(var13, var12);
case 24:
                    var8[1] = var11;
                    var12 = _closure2_slot10;
                    var11 = null;
                    if(!var12) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var12 = _closure2_slot16;
                    var11 = null;
                    if(var12) { _fun0009_ip = 26; continue _fun0009 }
case 28:
                    var14 = _closure1_slot9;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 31;
                    var12 = var15[var12];
                    var13 = var13.bind(var1)(var12);
                    var12 = {};
                    var15 = _closure2_slot1;
                    var12['channelId'] = var15;
                    var15 = _closure2_slot4;
                    var12['screenIndex'] = var15;
                    var15 = _closure2_slot21;
                    var12['didTapJump'] = var15;
                    var11 = var14.bind(var1)(var13, var12);
case 26:
                    var8[2] = var11;
                    var11 = _closure2_slot16;
                    var10 = null;
                    if(!var11) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 32;
                    var11 = var14[var11];
                    var12 = var12.bind(var1)(var11);
                    var11 = {};
                    var14 = _closure2_slot4;
                    var11['screenIndex'] = var14;
                    var10 = var13.bind(var1)(var12, var11);
case 29:
                    var8[3] = var10;
                    var5['children'] = var8;
                    var7 = var4.bind(var1)(var7, var5);
                    var5 = new Array(3);
                    var5[0] = var7;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 33;
                    var6 = var10[var6];
                    var11 = var7.bind(var1)(var6);
                    var6 = {};
                    var9 = _closure2_slot1;
                    var6['channelId'] = var9;
                    var6 = var8.bind(var1)(var11, var6);
                    var5[1] = var6;
                    var6 = 34;
                    var6 = var10[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var6['channelId'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var3 = _closure1_slot10;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 35;
            var1 = var19[var5];
            var2 = var17.bind(var4)(var1);
            var1 = {};
            var18 = _closure1_slot0;
            var5 = var19[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.ChatView;
            var1['profile'] = var5;
            var18 = _closure1_slot9;
            var5 = 36;
            var5 = var19[var5];
            var17 = var17.bind(var4)(var5);
            var5 = {};
            var5['channelId'] = var14;
            var5['guildId'] = var15;
            var17 = var18.bind(var4)(var17, var5);
            var5 = new Array(3);
            var5[0] = var17;
            var9 = null;
            if(var12) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var18 = _closure1_slot9;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 37;
            var12 = var19[var12];
            var17 = var17.bind(var4)(var12);
            var12 = {};
            var19 = true;
            var12['absolute'] = var19;
            var9 = var18.bind(var4)(var17, var12);
case 31:
            var5[1] = var9;
            var9 = function W(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setInterstitial;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                return var1;
            };
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 39;
            var6 = var17[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.shouldNSFWGateGuild;
            var6 = var6.bind(var12)(var15);
            if(var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            if(!var11) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var12 = _closure1_slot4;
            var6 = var12.isConnected;
            var6 = var6.bind(var12)();
            if(var6) { _fun0001_ip = 35; continue _fun0001 }
case 37:
            var6 = var8.bind(var4)();
            _fun0001_ip = 38; continue _fun0001;
case 35:
            if(var11) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            if(var10) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var10 = var16.isDirectory;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var10 = var16.isForumLikeChannel;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var8 = var8.bind(var4)();
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 45;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'ForumChannel';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
case 47:
            _fun0001_ip = 48; continue _fun0001;
case 43:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 44;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10['guildId'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildDirectory';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
case 48:
            _fun0001_ip = 49; continue _fun0001;
case 41:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 43;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var15;
            var10['channelId'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildNSFW';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
case 49:
            _fun0001_ip = 50; continue _fun0001;
case 39:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 41;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.empty;
            var10['style'] = var13;
            var16 = _closure1_slot0;
            var13 = 42;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.EmptyChannelNoTextChannels;
            var10['Illustration'] = var13;
            var13 = 12;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.ai6Lbm;
            var14 = var15.bind(var18)(var14);
            var10['title'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.LTr+x8;
            var13 = var14.bind(var15)(var13);
            var10['body'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'EmptyState';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
case 50:
            var6 = var8;
case 38:
            _fun0001_ip = 51; continue _fun0001;
case 33:
            var10 = _closure1_slot9;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 40;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7 = var10.bind(var4)(var8, var7);
            var8 = 'NsfwGateChat';
            var8 = var9.bind(var4)(var7, var8);
            var6 = var7;
case 51:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();