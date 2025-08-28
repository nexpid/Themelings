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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecord;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = var11.hairlineWidth;
    var10['borderTopWidth'] = var11;
    var11 = 10;
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
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function ChatView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.alwaysRespectKeyboard;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var1 = false;
 19:
            var _closure2_slot0 = var1;
            var14 = var2.channelId;
            var _closure2_slot1 = var14;
            var8 = var2.chatInputRef;
            var _closure2_slot2 = var8;
            var12 = var2.disableGradient;
            if(!(var12 === var4)) { _fun0001_ip = 54; continue _fun0001 }
 52:
            var12 = false;
 54:
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
            var _closure2_slot23 = var4;
            var2 = _closure1_slot13;
            var13 = var2.bind(var4)();
            _closure2_slot7 = var13;
            var18 = _closure1_slot3;
            var3 = var18.useEffect;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 45; continue _fun0002 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.dismissKeyboard;
                    var1 = var1.bind(var2)();
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var18)(var1, var2);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var19 = 12;
            var1 = var5[var19];
            var10 = var3.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
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
 0:
                    var1 = {};
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 21; continue _fun0003 }
 15:
                    var4 = _closure2_slot8;
                    _fun0003_ip = 118; continue _fun0003;
 21:
                    var7 = _closure1_slot6;
                    var6 = {};
                    var8 = _closure2_slot1;
                    var6['id'] = var8;
                    var8 = _closure1_slot9;
                    var8 = var8.GUILD_TEXT;
                    var6['type'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 13;
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
 118:
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
            var1 = 14;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useShouldAgeGateChannel;
            var10 = var1.bind(var2)(var14);
            var1 = var5[var19];
            var20 = var3.bind(var4)(var1);
            var17 = var20.useStateFromStores;
            var1 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var1;
            var2 = function() {
                var2 = _closure1_slot5;
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
            var17 = 15;
            var17 = var5[var17];
            var20 = var2.bind(var4)(var17);
            var17 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
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
            var17 = 17;
            var17 = var5[var17];
            var17 = var2.bind(var4)(var17);
            var17 = var17.bind(var4)(var14);
            _closure2_slot15 = var17;
            var20 = var5[var19];
            var23 = var3.bind(var4)(var20);
            var22 = var23.useStateFromStores;
            var20 = _closure1_slot4;
            var21 = new Array(1);
            var21[0] = var20;
            var20 = function() {
                var1 = _closure1_slot4;
                var1 = var1.saturation;
                return var1;
            };
            var20 = var22.bind(var23)(var21, var20);
            _closure2_slot16 = var20;
            var19 = var5[var19];
            var22 = var3.bind(var4)(var19);
            var21 = var22.useStateFromStoresObject;
            var19 = _closure1_slot8;
            var20 = new Array(1);
            var20[0] = var19;
            var19 = new Array(2);
            var19[0] = var14;
            var19[1] = var17;
            var17 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot8;
                    var2 = var4.getMessages;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = var2.length;
                    var4 = 0;
                    var4 = var4 === var5;
                    if(!var4) { _fun0004_ip = 62; continue _fun0004 }
 41:
                    var5 = var2.loadingMore;
                    if(var5) { _fun0004_ip = 59; continue _fun0004 }
 50:
                    var6 = var2.ready;
                    var5 = !var6;
 59:
                    var4 = var5;
 62:
                    var1['shouldRenderPlaceholder'] = var4;
                    var2 = var2.hasMoreBefore;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 86; continue _fun0004 }
 79:
                    var3 = _closure2_slot15;
                    var2 = !var3;
 86:
                    var1['shouldRenderBegginingRow'] = var2;
                    return var1;
                }
            };
            var17 = var21.bind(var22)(var20, var17, var19);
            var19 = var17.shouldRenderPlaceholder;
            _closure2_slot17 = var19;
            var17 = var17.shouldRenderBegginingRow;
            _closure2_slot18 = var17;
            var20 = var18.useCallback;
            var19 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot13;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 32; continue _fun0005 }
 18:
                    var2 = var3.onChatViewScrolled;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = new Array(0);
            var17 = var20.bind(var18)(var19, var17);
            _closure2_slot19 = var17;
            var19 = var18.useCallback;
            var17 = new Array(1);
            var17[0] = var8;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.keyCommand;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 45; continue _fun0006 }
 34:
                    var1 = var2.handlePressKey;
                    var1 = var1.bind(var2)(var3);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var18)(var8, var17);
            _closure2_slot20 = var8;
            var19 = var18.useCallback;
            var17 = new Array(1);
            var17[0] = var1;
            var8 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot12;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 28; continue _fun0007 }
 18:
                    var1 = var2.scrollToNewMessages;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var18)(var8, var17);
            _closure2_slot21 = var8;
            var17 = var18.useCallback;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot12;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 28; continue _fun0008 }
 18:
                    var1 = var2.jumpToPresent;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var17.bind(var18)(var1, var8);
            _closure2_slot22 = var1;
            var17 = var18.useLayoutEffect;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
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
                var1 = 19;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.loadThread;
                var4 = _closure2_slot1;
                var3 = var3.bind(var6)(var4);
                var3 = _closure1_slot0;
                var2 = 20;
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
                    var1 = 21;
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
            var1 = 22;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsMessagesFunctionalComponentEnabled;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot2;
            if(var1) { _fun0001_ip = 855; continue _fun0001 }
 846:
            var1 = 24;
            var1 = var5[var1];
            _fun0001_ip = 862; continue _fun0001;
 855:
            var3 = 23;
            var1 = var5[var3];
 862:
            var1 = var2.bind(var4)(var1);
            _closure2_slot23 = var1;
            var8 = function renderMessagesWrapper() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot12;
                    var2 = {};
                    var10 = _closure1_slot10;
                    var21 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var1 = 25;
                    var5 = var17[var1];
                    var1 = undefined;
                    var8 = var21.bind(var1)(var5);
                    var7 = {};
                    var5 = _closure2_slot7;
                    var5 = var5.messages;
                    var7['style'] = var5;
                    var22 = _closure2_slot1;
                    var7['channelId'] = var22;
                    var16 = _closure1_slot0;
                    var5 = 26;
                    var5 = var17[var5];
                    var5 = var16.bind(var1)(var5);
                    var11 = var5.LayerScope;
                    var5 = {};
                    var12 = 27;
                    var12 = var17[var12];
                    var12 = var16.bind(var1)(var12);
                    var13 = var12.StickyWrapper;
                    var12 = {};
                    var18 = true;
                    var12['initiallyShowHeader'] = var18;
                    var14 = 28;
                    var14 = var17[var14];
                    var14 = var16.bind(var1)(var14);
                    var15 = var14.StickyHeader;
                    var14 = {};
                    var14['show'] = var18;
                    var18 = 29;
                    var18 = var17[var18];
                    var19 = var21.bind(var1)(var18);
                    var18 = {};
                    var20 = _closure2_slot9;
                    var18['channel'] = var20;
                    var20 = _closure2_slot13;
                    var18['ref'] = var20;
                    var20 = _closure2_slot21;
                    var18['scrollToNewMessages'] = var20;
                    var18 = var10.bind(var1)(var19, var18);
                    var14['children'] = var18;
                    var15 = var10.bind(var1)(var15, var14);
                    var14 = new Array(5);
                    var14[0] = var15;
                    var18 = _closure2_slot23;
                    var15 = {};
                    var19 = _closure2_slot0;
                    var15['alwaysRespectKeyboard'] = var19;
                    var19 = _closure2_slot9;
                    var15['channel'] = var19;
                    var23 = _closure2_slot4;
                    var15['screenIndex'] = var23;
                    var24 = _closure2_slot2;
                    var15['chatInputRef'] = var24;
                    var19 = _closure2_slot3;
                    var15['HACK_fixModalInteraction'] = var19;
                    var19 = _closure2_slot15;
                    var15['isResourceChannel'] = var19;
                    var19 = _closure2_slot20;
                    var15['onPressKey'] = var19;
                    var19 = _closure2_slot19;
                    var15['onScroll'] = var19;
                    var19 = _closure2_slot12;
                    var15['ref'] = var19;
                    var19 = _closure2_slot7;
                    var19 = var19.chat;
                    var15['style'] = var19;
                    var19 = _closure2_slot14;
                    var15['visibleMessagesWindowHandler'] = var19;
                    var19 = 30;
                    var19 = var17[var19];
                    var20 = var21.bind(var1)(var19);
                    var19 = {};
                    var19['ref'] = var24;
                    var24 = _closure2_slot9;
                    var19['channel'] = var24;
                    var24 = _closure2_slot15;
                    var19['isResourceChannel'] = var24;
                    var19['screenIndex'] = var23;
                    var23 = _closure2_slot5;
                    var19['secondaryTextFieldRef'] = var23;
                    var23 = _closure2_slot6;
                    var19['setNoExtractUI'] = var23;
                    var20 = var10.bind(var1)(var20, var19);
                    var19 = new Array(2);
                    var19[0] = var20;
                    var20 = 31;
                    var20 = var17[var20];
                    var21 = var21.bind(var1)(var20);
                    var20 = {};
                    var20['channelId'] = var22;
                    var23 = _closure2_slot9;
                    var22 = var23.getGuildId;
                    var22 = var22.bind(var23)();
                    var20['guildId'] = var22;
                    var22 = _closure2_slot18;
                    var20['shouldRender'] = var22;
                    var20 = var10.bind(var1)(var21, var20);
                    var19[1] = var20;
                    var15['children'] = var19;
                    var15 = var4.bind(var1)(var18, var15);
                    var14[1] = var15;
                    var15 = 32;
                    var15 = var17[var15];
                    var16 = var16.bind(var1)(var15);
                    var15 = var16.isAndroid;
                    var17 = var15.bind(var16)();
                    var16 = null;
                    if(var17) { _fun0009_ip = 534; continue _fun0009 }
 480:
                    var19 = _closure1_slot10;
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var17 = 33;
                    var17 = var20[var17];
                    var18 = var18.bind(var1)(var17);
                    var17 = {};
                    var20 = _closure2_slot9;
                    var20 = var20.id;
                    var17['channelId'] = var20;
                    var20 = _closure2_slot12;
                    var17['messagesRef'] = var20;
                    var16 = var19.bind(var1)(var18, var17);
 534:
                    var14[2] = var16;
                    var17 = _closure2_slot10;
                    var16 = null;
                    if(!var17) { _fun0009_ip = 614; continue _fun0009 }
 547:
                    var17 = _closure2_slot17;
                    var16 = null;
                    if(var17) { _fun0009_ip = 614; continue _fun0009 }
 556:
                    var19 = _closure1_slot10;
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var17 = 34;
                    var17 = var20[var17];
                    var18 = var18.bind(var1)(var17);
                    var17 = {};
                    var20 = _closure2_slot1;
                    var17['channelId'] = var20;
                    var20 = _closure2_slot4;
                    var17['screenIndex'] = var20;
                    var20 = _closure2_slot22;
                    var17['didTapJump'] = var20;
                    var16 = var19.bind(var1)(var18, var17);
 614:
                    var14[3] = var16;
                    var16 = _closure2_slot17;
                    var15 = null;
                    if(!var16) { _fun0009_ip = 668; continue _fun0009 }
 627:
                    var18 = _closure1_slot10;
                    var17 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var16 = 35;
                    var16 = var19[var16];
                    var17 = var17.bind(var1)(var16);
                    var16 = {};
                    var19 = _closure2_slot4;
                    var16['screenIndex'] = var19;
                    var15 = var18.bind(var1)(var17, var16);
 668:
                    var14[4] = var15;
                    var12['children'] = var14;
                    var12 = var4.bind(var1)(var13, var12);
                    var5['children'] = var12;
                    var5 = var10.bind(var1)(var11, var5);
                    var7['children'] = var5;
                    var5 = _closure2_slot16;
                    var7 = var10.bind(var1)(var8, var7, var5);
                    var5 = new Array(3);
                    var5[0] = var7;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 36;
                    var6 = var10[var6];
                    var11 = var7.bind(var1)(var6);
                    var6 = {};
                    var9 = _closure2_slot1;
                    var6['channelId'] = var9;
                    var6 = var8.bind(var1)(var11, var6);
                    var5[1] = var6;
                    var6 = 37;
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
            var3 = _closure1_slot11;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 38;
            var1 = var19[var5];
            var2 = var17.bind(var4)(var1);
            var1 = {};
            var18 = _closure1_slot0;
            var5 = var19[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.ChatView;
            var1['profile'] = var5;
            var18 = _closure1_slot10;
            var5 = 39;
            var5 = var19[var5];
            var17 = var17.bind(var4)(var5);
            var5 = {};
            var5['channelId'] = var14;
            var5['guildId'] = var15;
            var17 = var18.bind(var4)(var17, var5);
            var5 = new Array(3);
            var5[0] = var17;
            var9 = null;
            if(var12) { _fun0001_ip = 1018; continue _fun0001 }
 979:
            var18 = _closure1_slot10;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 40;
            var12 = var19[var12];
            var17 = var17.bind(var4)(var12);
            var12 = {};
            var19 = true;
            var12['absolute'] = var19;
            var9 = var18.bind(var4)(var17, var12);
 1018:
            var5[1] = var9;
            var9 = function J(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
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
            var6 = 42;
            var6 = var17[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.shouldNSFWGateGuild;
            var6 = var6.bind(var12)(var15);
            if(var6) { _fun0001_ip = 1495; continue _fun0001 }
 1066:
            if(!var11) { _fun0001_ip = 1095; continue _fun0001 }
 1069:
            var12 = _closure1_slot5;
            var6 = var12.isConnected;
            var6 = var6.bind(var12)();
            if(var6) { _fun0001_ip = 1095; continue _fun0001 }
 1086:
            var6 = var8.bind(var4)();
            _fun0001_ip = 1493; continue _fun0001;
 1095:
            if(var11) { _fun0001_ip = 1309; continue _fun0001 }
 1101:
            if(var10) { _fun0001_ip = 1249; continue _fun0001 }
 1107:
            var10 = var16.isDirectory;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1192; continue _fun0001 }
 1120:
            var10 = var16.isForumLikeChannel;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1139; continue _fun0001 }
 1133:
            var8 = var8.bind(var4)();
            _fun0001_ip = 1190; continue _fun0001;
 1139:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 48;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'ForumChannel';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1190:
            _fun0001_ip = 1247; continue _fun0001;
 1192:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 47;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10['guildId'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildDirectory';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1247:
            _fun0001_ip = 1304; continue _fun0001;
 1249:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 46;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var15;
            var10['channelId'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildNSFW';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1304:
            _fun0001_ip = 1490; continue _fun0001;
 1309:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 44;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.empty;
            var10['style'] = var13;
            var16 = _closure1_slot0;
            var13 = 45;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.EmptyChannelNoTextChannels;
            var10['Illustration'] = var13;
            var13 = 13;
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
 1490:
            var6 = var8;
 1493:
            _fun0001_ip = 1542; continue _fun0001;
 1495:
            var10 = _closure1_slot10;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 43;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7 = var10.bind(var4)(var8, var7);
            var8 = 'NsfwGateChat';
            var8 = var9.bind(var4)(var7, var8);
            var6 = var7;
 1542:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();