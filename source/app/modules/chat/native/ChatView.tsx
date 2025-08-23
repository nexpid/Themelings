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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecord;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = var11.hairlineWidth;
    var10['borderTopWidth'] = var11;
    var11 = 11;
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
    var _closure1_slot14 = var4;
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
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var2 = _closure1_slot14;
            var13 = var2.bind(var4)();
            _closure2_slot7 = var13;
            var18 = _closure1_slot4;
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
                    var1 = 12;
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
            var20 = 13;
            var1 = var5[var20];
            var10 = var3.bind(var4)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
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
                    var7 = _closure1_slot7;
                    var6 = {};
                    var8 = _closure2_slot1;
                    var6['id'] = var8;
                    var8 = _closure1_slot10;
                    var8 = var8.GUILD_TEXT;
                    var6['type'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 14;
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
            var1 = 15;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useShouldAgeGateChannel;
            var10 = var1.bind(var2)(var14);
            var1 = var5[var20];
            var19 = var3.bind(var4)(var1);
            var17 = var19.useStateFromStores;
            var1 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var1;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var17.bind(var19)(var9, var2, var1);
            _closure2_slot10 = var1;
            var1 = var18.useRef;
            var1 = var1.bind(var18)(var14);
            _closure2_slot11 = var1;
            var1 = var18.useRef;
            var9 = null;
            var1 = var1.bind(var18)(var9);
            _closure2_slot12 = var1;
            var2 = _closure1_slot1;
            var17 = 16;
            var17 = var5[var17];
            var19 = var2.bind(var4)(var17);
            var17 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
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
            var17 = var19.bind(var4)(var17);
            _closure2_slot13 = var17;
            var17 = var16.isForumPost;
            var21 = var17.bind(var16)();
            _closure2_slot14 = var21;
            var17 = 18;
            var17 = var5[var17];
            var17 = var2.bind(var4)(var17);
            var19 = var17.bind(var4)(var14);
            _closure2_slot15 = var19;
            var22 = var18.useState;
            var17 = false;
            var23 = var22.bind(var18)(var17);
            var22 = _closure1_slot3;
            var17 = 2;
            var23 = var22.bind(var4)(var23, var17);
            var17 = 0;
            var17 = var23[var17];
            _closure2_slot16 = var17;
            var22 = 1;
            var22 = var23[var22];
            _closure2_slot17 = var22;
            var22 = var5[var20];
            var25 = var3.bind(var4)(var22);
            var24 = var25.useStateFromStores;
            var22 = _closure1_slot5;
            var23 = new Array(1);
            var23[0] = var22;
            var22 = function() {
                var1 = _closure1_slot5;
                var1 = var1.saturation;
                return var1;
            };
            var22 = var24.bind(var25)(var23, var22);
            _closure2_slot18 = var22;
            var20 = var5[var20];
            var24 = var3.bind(var4)(var20);
            var23 = var24.useStateFromStoresObject;
            var20 = _closure1_slot9;
            var22 = new Array(1);
            var22[0] = var20;
            var20 = new Array(3);
            var20[0] = var14;
            var20[1] = var17;
            var20[2] = var19;
            var19 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot9;
                    var2 = var4.getMessages;
                    var1 = _closure2_slot1;
                    var6 = var2.bind(var4)(var1);
                    var1 = {};
                    var4 = var6.length;
                    var2 = 0;
                    var2 = var2 === var4;
                    if(!var2) { _fun0004_ip = 62; continue _fun0004 }
 41:
                    var4 = var6.loadingMore;
                    if(var4) { _fun0004_ip = 59; continue _fun0004 }
 50:
                    var7 = var6.ready;
                    var4 = !var7;
 59:
                    var2 = var4;
 62:
                    var1['shouldRenderPlaceholder'] = var2;
                    var2 = var6.hasMoreBefore;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 86; continue _fun0004 }
 79:
                    var4 = _closure2_slot15;
                    var2 = !var4;
 86:
                    var1['shouldRenderBegginingRow'] = var2;
                    var2 = _closure2_slot16;
                    if(var2) { _fun0004_ip = 165; continue _fun0004 }
 98:
                    var4 = var6.first;
                    var6 = var4.bind(var6)();
                    var4 = null;
                    var8 = var4 == var6;
                    var7 = undefined;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 126; continue _fun0004 }
 121:
                    var4 = var6.id;
 126:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 19;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.castChannelIdAsMessageId;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3);
                    var2 = var4 !== var3;
 165:
                    var1['showStickyHeader'] = var2;
                    return var1;
                }
            };
            var19 = var23.bind(var24)(var22, var19, var20);
            var20 = var19.shouldRenderPlaceholder;
            _closure2_slot19 = var20;
            var20 = var19.shouldRenderBegginingRow;
            _closure2_slot20 = var20;
            var19 = var19.showStickyHeader;
            _closure2_slot21 = var19;
            var20 = var18.useCallback;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var17;
            var17 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.isFirstMessageVisible;
                    var3 = _closure2_slot14;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
 19:
                    var4 = _closure2_slot16;
                    var3 = var1 === var4;
 27:
                    if(!var3) { _fun0005_ip = 44; continue _fun0005 }
 30:
                    var3 = _closure2_slot17;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var20.bind(var18)(var17, var19);
            _closure2_slot22 = var17;
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
            _closure2_slot23 = var8;
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
            _closure2_slot24 = var8;
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
            _closure2_slot25 = var1;
            var17 = var18.useLayoutEffect;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
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
                var1 = 21;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.loadThread;
                var4 = _closure2_slot1;
                var3 = var3.bind(var6)(var4);
                var3 = _closure1_slot0;
                var2 = 22;
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
                    var1 = 23;
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
            var1 = 24;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsMessagesFunctionalComponentEnabled;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot2;
            if(var1) { _fun0001_ip = 935; continue _fun0001 }
 926:
            var1 = 26;
            var1 = var5[var1];
            _fun0001_ip = 942; continue _fun0001;
 935:
            var3 = 25;
            var1 = var5[var3];
 942:
            var1 = var2.bind(var4)(var1);
            _closure2_slot26 = var1;
            var8 = function renderMessagesWrapper() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot13;
                    var2 = {};
                    var10 = _closure1_slot11;
                    var21 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var1 = 27;
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
                    var5 = 28;
                    var5 = var17[var5];
                    var5 = var16.bind(var1)(var5);
                    var11 = var5.LayerScope;
                    var5 = {};
                    var12 = 29;
                    var12 = var17[var12];
                    var12 = var16.bind(var1)(var12);
                    var13 = var12.StickyWrapper;
                    var12 = {};
                    var14 = _closure2_slot21;
                    var12['initiallyShowHeader'] = var14;
                    var14 = 30;
                    var14 = var17[var14];
                    var14 = var16.bind(var1)(var14);
                    var15 = var14.StickyHeader;
                    var14 = {};
                    var18 = _closure2_slot21;
                    var14['show'] = var18;
                    var18 = 31;
                    var18 = var17[var18];
                    var19 = var21.bind(var1)(var18);
                    var18 = {};
                    var20 = _closure2_slot9;
                    var18['channel'] = var20;
                    var20 = _closure2_slot24;
                    var18['scrollToNewMessages'] = var20;
                    var18 = var10.bind(var1)(var19, var18);
                    var14['children'] = var18;
                    var15 = var10.bind(var1)(var15, var14);
                    var14 = new Array(5);
                    var14[0] = var15;
                    var18 = _closure2_slot26;
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
                    var19 = _closure2_slot23;
                    var15['onPressKey'] = var19;
                    var19 = _closure2_slot22;
                    var15['onScroll'] = var19;
                    var19 = _closure2_slot12;
                    var15['ref'] = var19;
                    var19 = _closure2_slot7;
                    var19 = var19.chat;
                    var15['style'] = var19;
                    var19 = _closure2_slot13;
                    var15['visibleMessagesWindowHandler'] = var19;
                    var19 = 32;
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
                    var20 = 33;
                    var20 = var17[var20];
                    var21 = var21.bind(var1)(var20);
                    var20 = {};
                    var20['channelId'] = var22;
                    var23 = _closure2_slot9;
                    var22 = var23.getGuildId;
                    var22 = var22.bind(var23)();
                    var20['guildId'] = var22;
                    var22 = _closure2_slot20;
                    var20['shouldRender'] = var22;
                    var20 = var10.bind(var1)(var21, var20);
                    var19[1] = var20;
                    var15['children'] = var19;
                    var15 = var4.bind(var1)(var18, var15);
                    var14[1] = var15;
                    var15 = 34;
                    var15 = var17[var15];
                    var16 = var16.bind(var1)(var15);
                    var15 = var16.isAndroid;
                    var17 = var15.bind(var16)();
                    var16 = null;
                    if(var17) { _fun0009_ip = 532; continue _fun0009 }
 478:
                    var19 = _closure1_slot11;
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var17 = 35;
                    var17 = var20[var17];
                    var18 = var18.bind(var1)(var17);
                    var17 = {};
                    var20 = _closure2_slot9;
                    var20 = var20.id;
                    var17['channelId'] = var20;
                    var20 = _closure2_slot12;
                    var17['messagesRef'] = var20;
                    var16 = var19.bind(var1)(var18, var17);
 532:
                    var14[2] = var16;
                    var17 = _closure2_slot10;
                    var16 = null;
                    if(!var17) { _fun0009_ip = 612; continue _fun0009 }
 545:
                    var17 = _closure2_slot19;
                    var16 = null;
                    if(var17) { _fun0009_ip = 612; continue _fun0009 }
 554:
                    var19 = _closure1_slot11;
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var17 = 36;
                    var17 = var20[var17];
                    var18 = var18.bind(var1)(var17);
                    var17 = {};
                    var20 = _closure2_slot1;
                    var17['channelId'] = var20;
                    var20 = _closure2_slot4;
                    var17['screenIndex'] = var20;
                    var20 = _closure2_slot25;
                    var17['didTapJump'] = var20;
                    var16 = var19.bind(var1)(var18, var17);
 612:
                    var14[3] = var16;
                    var16 = _closure2_slot19;
                    var15 = null;
                    if(!var16) { _fun0009_ip = 666; continue _fun0009 }
 625:
                    var18 = _closure1_slot11;
                    var17 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var16 = 37;
                    var16 = var19[var16];
                    var17 = var17.bind(var1)(var16);
                    var16 = {};
                    var19 = _closure2_slot4;
                    var16['screenIndex'] = var19;
                    var15 = var18.bind(var1)(var17, var16);
 666:
                    var14[4] = var15;
                    var12['children'] = var14;
                    var12 = var4.bind(var1)(var13, var12);
                    var5['children'] = var12;
                    var5 = var10.bind(var1)(var11, var5);
                    var7['children'] = var5;
                    var5 = _closure2_slot18;
                    var7 = var10.bind(var1)(var8, var7, var5);
                    var5 = new Array(3);
                    var5[0] = var7;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 38;
                    var6 = var10[var6];
                    var11 = var7.bind(var1)(var6);
                    var6 = {};
                    var9 = _closure2_slot1;
                    var6['channelId'] = var9;
                    var6 = var8.bind(var1)(var11, var6);
                    var5[1] = var6;
                    var6 = 39;
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
            var3 = _closure1_slot12;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = 40;
            var1 = var19[var5];
            var2 = var17.bind(var4)(var1);
            var1 = {};
            var18 = _closure1_slot0;
            var5 = var19[var5];
            var5 = var18.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.ChatView;
            var1['profile'] = var5;
            var18 = _closure1_slot11;
            var5 = 41;
            var5 = var19[var5];
            var17 = var17.bind(var4)(var5);
            var5 = {};
            var5['channelId'] = var14;
            var5['guildId'] = var15;
            var17 = var18.bind(var4)(var17, var5);
            var5 = new Array(3);
            var5[0] = var17;
            var9 = null;
            if(var12) { _fun0001_ip = 1098; continue _fun0001 }
 1059:
            var18 = _closure1_slot11;
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 42;
            var12 = var19[var12];
            var17 = var17.bind(var4)(var12);
            var12 = {};
            var19 = true;
            var12['absolute'] = var19;
            var9 = var18.bind(var4)(var17, var12);
 1098:
            var5[1] = var9;
            var9 = function $(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 43;
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
            var6 = 44;
            var6 = var17[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.shouldNSFWGateGuild;
            var6 = var6.bind(var12)(var15);
            if(var6) { _fun0001_ip = 1575; continue _fun0001 }
 1146:
            if(!var11) { _fun0001_ip = 1175; continue _fun0001 }
 1149:
            var12 = _closure1_slot6;
            var6 = var12.isConnected;
            var6 = var6.bind(var12)();
            if(var6) { _fun0001_ip = 1175; continue _fun0001 }
 1166:
            var6 = var8.bind(var4)();
            _fun0001_ip = 1573; continue _fun0001;
 1175:
            if(var11) { _fun0001_ip = 1389; continue _fun0001 }
 1181:
            if(var10) { _fun0001_ip = 1329; continue _fun0001 }
 1187:
            var10 = var16.isDirectory;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1272; continue _fun0001 }
 1200:
            var10 = var16.isForumLikeChannel;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1219; continue _fun0001 }
 1213:
            var8 = var8.bind(var4)();
            _fun0001_ip = 1270; continue _fun0001;
 1219:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 50;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'ForumChannel';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1270:
            _fun0001_ip = 1327; continue _fun0001;
 1272:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 49;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10['guildId'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildDirectory';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1327:
            _fun0001_ip = 1384; continue _fun0001;
 1329:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 48;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var15;
            var10['channelId'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildNSFW';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1384:
            _fun0001_ip = 1570; continue _fun0001;
 1389:
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 46;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.empty;
            var10['style'] = var13;
            var16 = _closure1_slot0;
            var13 = 47;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.EmptyChannelNoTextChannels;
            var10['Illustration'] = var13;
            var13 = 14;
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
 1570:
            var6 = var8;
 1573:
            _fun0001_ip = 1622; continue _fun0001;
 1575:
            var10 = _closure1_slot11;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 45;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7 = var10.bind(var4)(var8, var7);
            var8 = 'NsfwGateChat';
            var8 = var9.bind(var4)(var7, var8);
            var6 = var7;
 1622:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();