// app/components_native/ChatView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecord;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var11 = var11.hairlineWidth;
    var10['borderTopWidth'] = var11;
    var11 = 13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MODIFIER_ACCENT;
    var10['borderTopColor'] = var13;
    var4['empty'] = var10;
    var10 = {'flex': 1, 'overflow': 'hidden'};
    var4['messages'] = var10;
    var10 = {'justifyContent': 'flex-start', 'overflow': 'hidden', 'flex': 1};
    var4['chat'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['chatBackground'] = var10;
    var10 = {'position': 'absolute', 'height': '100%', 'width': '100%', 'opacity': 0, 'flex': 1, 'left': 0, 'top': 0};
    var4['overlay'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.memo;
    var2 = function ChatView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var15 = var3.guildId;
            var _closure2_slot0 = var15;
            var14 = var3.channelId;
            var _closure2_slot1 = var14;
            var18 = var3.chatInputRef;
            var _closure2_slot2 = var18;
            var1 = var3.scrollEnabled;
            var _closure2_slot3 = var1;
            var1 = var3.messagesCustomHandlers;
            var _closure2_slot4 = var1;
            var2 = var3.isResourceChannelView;
            var _closure2_slot5 = var2;
            var1 = var3.HACK_fixModalInteraction;
            var _closure2_slot6 = var1;
            var1 = var3.alwaysRespectKeyboard;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 91; continue _fun0001 }
 89:
            var1 = false;
 91:
            var _closure2_slot7 = var1;
            var5 = var3.secondaryTextFieldRef;
            var _closure2_slot8 = var5;
            var5 = var3.setNoExtractUI;
            var _closure2_slot9 = var5;
            var5 = var3.screenIndex;
            var _closure2_slot10 = var5;
            var5 = var3.disableGradient;
            if(!(var5 === var4)) { _fun0001_ip = 137; continue _fun0001 }
 135:
            var5 = false;
 137:
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
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var _closure2_slot33 = var4;
            var _closure2_slot34 = var4;
            var _closure2_slot35 = var4;
            var _closure2_slot36 = var4;
            var _closure2_slot37 = var4;
            var _closure2_slot38 = var4;
            var _closure2_slot39 = var4;
            var3 = _closure1_slot17;
            var13 = var3.bind(var4)();
            _closure2_slot11 = var13;
            var24 = _closure1_slot4;
            var9 = var24.useEffect;
            var8 = new Array(1);
            var8[0] = var14;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.loadThread;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var9.bind(var24)(var3, var8);
            var8 = var24.useEffect;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(var1) { _fun0002_ip = 45; continue _fun0002 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
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
            var1 = var8.bind(var24)(var1, var3);
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 16;
            var1 = var20[var12];
            var9 = var23.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var8.bind(var9)(var3, var1);
            _closure2_slot12 = var1;
            var8 = var24.useMemo;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var14;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var4 = _closure2_slot12;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 21; continue _fun0003 }
 15:
                    var4 = _closure2_slot12;
                    _fun0003_ip = 118; continue _fun0003;
 21:
                    var7 = _closure1_slot8;
                    var6 = {};
                    var8 = _closure2_slot1;
                    var6['id'] = var8;
                    var8 = _closure1_slot13;
                    var8 = var8.GUILD_TEXT;
                    var6['type'] = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 17;
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
                    var2 = _closure2_slot12;
                    var2 = var3 == var2;
                    var1['channelIsLoading'] = var2;
                    return var1;
                }
            };
            var1 = var8.bind(var24)(var1, var3);
            var11 = var1.channelIsLoading;
            var16 = var1.channel;
            _closure2_slot13 = var16;
            var1 = 18;
            var1 = var20[var1];
            var3 = var23.bind(var4)(var1);
            var1 = var3.useShouldAgeGateChannel;
            var10 = var1.bind(var3)(var14);
            var19 = _closure1_slot1;
            var1 = 19;
            var1 = var20[var1];
            var1 = var19.bind(var4)(var1);
            var1 = var1.bind(var4)(var15);
            _closure2_slot14 = var1;
            var3 = 20;
            var3 = var20[var3];
            var8 = var23.bind(var4)(var3);
            var3 = var8.useShowWelcomeModal;
            var17 = var3.bind(var8)(var15, var14);
            _closure2_slot15 = var17;
            var3 = 21;
            var3 = var20[var3];
            var8 = var23.bind(var4)(var3);
            var3 = var8.useIsMessageSwipeActionsEnabled;
            var3 = var3.bind(var8)();
            _closure2_slot16 = var3;
            var3 = var20[var12];
            var22 = var23.bind(var4)(var3);
            var21 = var22.useStateFromStores;
            var3 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var3;
            var8 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var21.bind(var22)(var9, var8, var3);
            _closure2_slot17 = var3;
            var3 = var24.useRef;
            var3 = var3.bind(var24)(var14);
            _closure2_slot18 = var3;
            var3 = var24.useRef;
            var21 = null;
            var8 = var3.bind(var24)(var21);
            _closure2_slot19 = var8;
            var3 = 22;
            var3 = var20[var3];
            var9 = var19.bind(var4)(var3);
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
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
            var3 = var9.bind(var4)(var3);
            _closure2_slot20 = var3;
            var3 = var16.isForumPost;
            var22 = var3.bind(var16)();
            _closure2_slot21 = var22;
            var3 = 24;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var9 = 25;
            var9 = var20[var9];
            var9 = var19.bind(var4)(var9);
            var9 = var9.bind(var4)(var14);
            _closure2_slot22 = var9;
            var19 = var24.useState;
            var9 = false;
            var25 = var19.bind(var24)(var9);
            var24 = _closure1_slot3;
            var19 = 2;
            var25 = var24.bind(var4)(var25, var19);
            var19 = 0;
            var19 = var25[var19];
            _closure2_slot23 = var19;
            var24 = 1;
            var24 = var25[var24];
            _closure2_slot24 = var24;
            var20 = var20[var12];
            var25 = var23.bind(var4)(var20);
            var24 = var25.useStateFromStores;
            var20 = _closure1_slot6;
            var23 = new Array(1);
            var23[0] = var20;
            var20 = function() {
                var1 = _closure1_slot6;
                var1 = var1.saturation;
                return var1;
            };
            var20 = var24.bind(var25)(var23, var20);
            _closure2_slot25 = var20;
            if(!var3) { _fun0001_ip = 824; continue _fun0001 }
 778:
            var20 = _closure1_slot13;
            var23 = var20.GUILD_VOICE;
            var24 = new Array(2);
            var24[0] = var23;
            var20 = var20.GUILD_STAGE_VOICE;
            var24[1] = var20;
            var23 = var24.includes;
            var20 = var16.type;
            var20 = var23.bind(var24)(var20);
            var3 = !var20;
 824:
            _closure2_slot26 = var3;
            var3 = _closure1_slot0;
            var20 = _closure1_slot2;
            var23 = var20[var12];
            var26 = var3.bind(var4)(var23);
            var25 = var26.useStateFromStoresObject;
            var23 = _closure1_slot10;
            var24 = new Array(1);
            var24[0] = var23;
            var23 = new Array(3);
            var23[0] = var14;
            var23[1] = var19;
            var23[2] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot10;
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
                    var4 = _closure2_slot5;
                    var2 = !var4;
 86:
                    var1['shouldRenderBegginingRow'] = var2;
                    var2 = _closure2_slot23;
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
                    var5 = 26;
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
            var2 = var25.bind(var26)(var24, var2, var23);
            var23 = var2.shouldRenderPlaceholder;
            _closure2_slot27 = var23;
            var23 = var2.shouldRenderBegginingRow;
            _closure2_slot28 = var23;
            var2 = var2.showStickyHeader;
            _closure2_slot29 = var2;
            var2 = var20[var12];
            var25 = var3.bind(var4)(var2);
            var24 = var25.useStateFromStores;
            var2 = _closure1_slot11;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var24.bind(var25)(var23, var2);
            _closure2_slot30 = var2;
            var2 = var20[var12];
            var24 = var3.bind(var4)(var2);
            var23 = var24.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = _closure2_slot30;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var23.bind(var24)(var3, var2);
            _closure2_slot31 = var23;
            var3 = _closure1_slot1;
            var2 = 27;
            var2 = var20[var2];
            var20 = var3.bind(var4)(var2);
            var3 = var20.useExperiment;
            var2 = {};
            var24 = var21 == var23;
            var21 = undefined;
            if(var24) { _fun0001_ip = 1047; continue _fun0001 }
 1042:
            var21 = var23.guild_id;
 1047:
            var2['guildId'] = var21;
            var21 = 'ChatView';
            var2['location'] = var21;
            var2 = var3.bind(var20)(var2);
            var2 = var2.enabled;
            _closure2_slot32 = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var12];
            var23 = var2.bind(var4)(var12);
            var21 = var23.useStateFromStores;
            var12 = _closure1_slot12;
            var20 = new Array(1);
            var20[0] = var12;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot13;
                    var5 = var1.type;
                    var1 = _closure1_slot13;
                    var4 = var1.DM;
                    var1 = null;
                    if(!(var5 === var4)) { _fun0005_ip = 60; continue _fun0005 }
 31:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var5 = _closure2_slot13;
                    var2 = var5.getRecipientId;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 60:
                    return var1;
                }
            };
            var12 = var21.bind(var23)(var20, var12);
            _closure2_slot33 = var12;
            var12 = _closure1_slot4;
            var21 = var12.useCallback;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var19;
            var19 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.isFirstMessageVisible;
                    var3 = _closure2_slot21;
                    if(!var3) { _fun0006_ip = 27; continue _fun0006 }
 19:
                    var4 = _closure2_slot23;
                    var3 = var1 === var4;
 27:
                    if(!var3) { _fun0006_ip = 44; continue _fun0006 }
 30:
                    var3 = _closure2_slot24;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var21.bind(var12)(var19, var20);
            _closure2_slot34 = var19;
            var20 = var12.useCallback;
            var19 = new Array(1);
            var19[0] = var18;
            var18 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.keyCommand;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 45; continue _fun0007 }
 34:
                    var1 = var2.handlePressKey;
                    var1 = var1.bind(var2)(var3);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var20.bind(var12)(var18, var19);
            _closure2_slot35 = var18;
            var20 = var12.useCallback;
            var19 = new Array(1);
            var19[0] = var8;
            var18 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot19;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 28; continue _fun0008 }
 18:
                    var1 = var2.scrollToNewMessages;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var20.bind(var12)(var18, var19);
            _closure2_slot36 = var18;
            var19 = var12.useCallback;
            var18 = new Array(1);
            var18[0] = var8;
            var8 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot19;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 28; continue _fun0009 }
 18:
                    var1 = var2.jumpToPresent;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var19.bind(var12)(var8, var18);
            _closure2_slot37 = var8;
            var19 = var12.useLayoutEffect;
            var18 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.trackAppUIViewed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = new Array(0);
            var8 = var19.bind(var12)(var18, var8);
            var19 = var12.useEffect;
            var18 = new Array(1);
            var18[0] = var14;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.fetchSummaries;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var19.bind(var12)(var8, var18);
            var8 = var12.useRef;
            var8 = var8.bind(var12)(var9);
            _closure2_slot38 = var8;
            var9 = var12.useEffect;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var17;
            var8[2] = var1;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot38;
                    var2 = var2.current;
                    if(var2) { _fun0010_ip = 179; continue _fun0010 }
 20:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0010_ip = 109; continue _fun0010 }
 27:
                    var2 = _closure2_slot15;
                    if(!var2) { _fun0010_ip = 179; continue _fun0010 }
 37:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.openWelcomeActionSheet;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var6 = function onHide() {
                        var2 = _closure2_slot38;
                        var1 = false;
                        var2['current'] = var1;
                        return var1;
                    };
                    var2['onHide'] = var6;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot38;
                    var2 = true;
                    var3['current'] = var2;
                    _fun0010_ip = 179; continue _fun0010;
 109:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.open;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['guildId'] = var6;
                    var5 = function onHide() {
                        var2 = _closure2_slot38;
                        var1 = false;
                        var2['current'] = var1;
                        return var1;
                    };
                    var2['onHide'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot38;
                    var1 = true;
                    var2['current'] = var1;
 179:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var9.bind(var12)(var1, var8);
            var9 = var12.useEffect;
            var1 = var16.id;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure2_slot18;
                var1 = _closure2_slot13;
                var1 = var1.id;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var9.bind(var12)(var1, var8);
            var9 = var12.useEffect;
            var8 = function() {
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.clearOldestUnreadMessageId;
                    var2 = _closure2_slot18;
                    var2 = var2.current;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var9.bind(var12)(var8, var1);
            var1 = 32;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useIsMessagesFunctionalComponentEnabled;
            var1 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            if(var1) { _fun0001_ip = 1444; continue _fun0001 }
 1435:
            var1 = 34;
            var1 = var8[var1];
            _fun0001_ip = 1451; continue _fun0001;
 1444:
            var3 = 33;
            var1 = var8[var3];
 1451:
            var1 = var2.bind(var4)(var1);
            _closure2_slot39 = var1;
            var8 = function renderMessagesWrapper() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var5 = _closure1_slot14;
                    var2 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var1 = 35;
                    var1 = var14[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var1 = _closure2_slot11;
                    var1 = var1.messages;
                    var2['style'] = var1;
                    var1 = _closure2_slot1;
                    var2['channelId'] = var1;
                    var13 = _closure1_slot0;
                    var1 = 36;
                    var1 = var14[var1];
                    var1 = var13.bind(var4)(var1);
                    var7 = var1.LayerScope;
                    var1 = {};
                    var11 = _closure1_slot15;
                    var8 = 37;
                    var8 = var14[var8];
                    var8 = var13.bind(var4)(var8);
                    var10 = var8.StickyWrapper;
                    var8 = {};
                    var12 = _closure2_slot29;
                    var8['initiallyShowHeader'] = var12;
                    var12 = 38;
                    var12 = var14[var12];
                    var12 = var13.bind(var4)(var12);
                    var13 = var12.StickyHeader;
                    var12 = {};
                    var14 = _closure2_slot29;
                    var12['show'] = var14;
                    var15 = _closure2_slot32;
                    if(!var15) { _fun0011_ip = 159; continue _fun0011 }
 149:
                    var16 = _closure2_slot33;
                    var14 = null;
                    var15 = var14 != var16;
 159:
                    if(!var15) { _fun0011_ip = 172; continue _fun0011 }
 162:
                    var16 = _closure2_slot31;
                    var14 = null;
                    var15 = var14 != var16;
 172:
                    if(!var15) { _fun0011_ip = 231; continue _fun0011 }
 175:
                    var17 = _closure1_slot14;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 39;
                    var14 = var18[var14];
                    var14 = var16.bind(var4)(var14);
                    var16 = var14.RingToVoiceBanner;
                    var14 = {};
                    var18 = _closure2_slot33;
                    var14['recipientUser'] = var18;
                    var18 = _closure2_slot31;
                    var14['voiceChannel'] = var18;
                    var15 = var17.bind(var4)(var16, var14);
 231:
                    var14 = new Array(2);
                    var14[0] = var15;
                    var20 = _closure1_slot14;
                    var19 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var16 = 40;
                    var16 = var15[var16];
                    var17 = var19.bind(var4)(var16);
                    var16 = {};
                    var18 = _closure2_slot13;
                    var16['channel'] = var18;
                    var18 = _closure2_slot36;
                    var16['scrollToNewMessages'] = var18;
                    var16 = var20.bind(var4)(var17, var16);
                    var14[1] = var16;
                    var12['children'] = var14;
                    var13 = var11.bind(var4)(var13, var12);
                    var12 = new Array(6);
                    var12[0] = var13;
                    var16 = _closure1_slot15;
                    var14 = _closure2_slot39;
                    var13 = {};
                    var17 = _closure2_slot7;
                    var13['alwaysRespectKeyboard'] = var17;
                    var17 = _closure2_slot13;
                    var13['channel'] = var17;
                    var21 = _closure2_slot10;
                    var13['screenIndex'] = var21;
                    var22 = _closure2_slot2;
                    var13['chatInputRef'] = var22;
                    var17 = _closure2_slot17;
                    var13['connected'] = var17;
                    var17 = _closure2_slot4;
                    var13['customHandlers'] = var17;
                    var17 = _closure2_slot16;
                    var13['enableSwipeActions'] = var17;
                    var17 = _closure2_slot6;
                    var13['HACK_fixModalInteraction'] = var17;
                    var17 = _closure2_slot22;
                    var13['isResourceChannel'] = var17;
                    var17 = _closure2_slot35;
                    var13['onPressKey'] = var17;
                    var17 = _closure2_slot34;
                    var13['onScroll'] = var17;
                    var17 = _closure2_slot19;
                    var13['ref'] = var17;
                    var17 = _closure2_slot3;
                    var13['scrollEnabled'] = var17;
                    var17 = _closure2_slot11;
                    var18 = var17.chat;
                    var17 = new Array(2);
                    var17[0] = var18;
                    var18 = _closure2_slot11;
                    var18 = var18.chatBackground;
                    var17[1] = var18;
                    var13['style'] = var17;
                    var17 = _closure2_slot20;
                    var13['visibleMessagesWindowHandler'] = var17;
                    var17 = 41;
                    var17 = var15[var17];
                    var18 = var19.bind(var4)(var17);
                    var17 = {};
                    var17['ref'] = var22;
                    var22 = _closure2_slot13;
                    var17['channel'] = var22;
                    var22 = _closure2_slot22;
                    var17['isResourceChannel'] = var22;
                    var17['screenIndex'] = var21;
                    var21 = _closure2_slot8;
                    var17['secondaryTextFieldRef'] = var21;
                    var21 = _closure2_slot9;
                    var17['setNoExtractUI'] = var21;
                    var18 = var20.bind(var4)(var18, var17);
                    var17 = new Array(2);
                    var17[0] = var18;
                    var18 = 42;
                    var18 = var15[var18];
                    var19 = var19.bind(var4)(var18);
                    var18 = {};
                    var21 = _closure2_slot1;
                    var18['channelId'] = var21;
                    var22 = _closure2_slot13;
                    var21 = var22.getGuildId;
                    var21 = var21.bind(var22)();
                    var18['guildId'] = var21;
                    var21 = _closure2_slot28;
                    var18['shouldRender'] = var21;
                    var18 = var20.bind(var4)(var19, var18);
                    var17[1] = var18;
                    var13['children'] = var17;
                    var13 = var16.bind(var4)(var14, var13);
                    var12[1] = var13;
                    var14 = _closure1_slot0;
                    var13 = 43;
                    var13 = var15[var13];
                    var14 = var14.bind(var4)(var13);
                    var13 = var14.isAndroid;
                    var15 = var13.bind(var14)();
                    var14 = null;
                    if(var15) { _fun0011_ip = 709; continue _fun0011 }
 655:
                    var17 = _closure1_slot14;
                    var16 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var15 = 44;
                    var15 = var18[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = {};
                    var18 = _closure2_slot13;
                    var18 = var18.id;
                    var15['channelId'] = var18;
                    var18 = _closure2_slot19;
                    var15['messagesRef'] = var18;
                    var14 = var17.bind(var4)(var16, var15);
 709:
                    var12[2] = var14;
                    var14 = _closure2_slot26;
                    if(!var14) { _fun0011_ip = 759; continue _fun0011 }
 720:
                    var17 = _closure1_slot14;
                    var16 = _closure1_slot5;
                    var15 = {};
                    var18 = 'none';
                    var15['pointerEvents'] = var18;
                    var18 = _closure2_slot11;
                    var18 = var18.overlay;
                    var15['style'] = var18;
                    var14 = var17.bind(var4)(var16, var15);
 759:
                    var12[3] = var14;
                    var15 = _closure2_slot17;
                    var14 = null;
                    if(!var15) { _fun0011_ip = 839; continue _fun0011 }
 772:
                    var15 = _closure2_slot27;
                    var14 = null;
                    if(var15) { _fun0011_ip = 839; continue _fun0011 }
 781:
                    var17 = _closure1_slot14;
                    var16 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var15 = 45;
                    var15 = var18[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = {};
                    var18 = _closure2_slot1;
                    var15['channelId'] = var18;
                    var18 = _closure2_slot10;
                    var15['screenIndex'] = var18;
                    var18 = _closure2_slot37;
                    var15['didTapJump'] = var18;
                    var14 = var17.bind(var4)(var16, var15);
 839:
                    var12[4] = var14;
                    var14 = _closure2_slot27;
                    var13 = null;
                    if(!var14) { _fun0011_ip = 884; continue _fun0011 }
 852:
                    var16 = _closure1_slot14;
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 46;
                    var14 = var17[var14];
                    var15 = var15.bind(var4)(var14);
                    var14 = {};
                    var13 = var16.bind(var4)(var15, var14);
 884:
                    var12[5] = var13;
                    var8['children'] = var12;
                    var8 = var11.bind(var4)(var10, var8);
                    var1['children'] = var8;
                    var1 = var5.bind(var4)(var7, var1);
                    var2['children'] = var1;
                    var1 = _closure2_slot25;
                    var7 = var5.bind(var4)(var3, var2, var1);
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var5 = new Array(3);
                    var5[0] = var7;
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 47;
                    var6 = var10[var6];
                    var11 = var7.bind(var4)(var6);
                    var6 = {};
                    var9 = _closure2_slot1;
                    var6['channelId'] = var9;
                    var6 = var8.bind(var4)(var11, var6);
                    var5[1] = var6;
                    var6 = 48;
                    var6 = var10[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var6['channelId'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[2] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var3 = _closure1_slot15;
            var2 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 49;
            var1 = var17[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = _closure1_slot0;
            var9 = var17[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.Profiles;
            var9 = var9.ChatView;
            var1['profile'] = var9;
            var9 = !var5;
            if(!var9) { _fun0001_ip = 1568; continue _fun0001 }
 1529:
            var17 = _closure1_slot14;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 50;
            var5 = var18[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var18 = true;
            var5['absolute'] = var18;
            var9 = var17.bind(var4)(var12, var5);
 1568:
            var5 = new Array(2);
            var5[0] = var9;
            var9 = function fe(arg1, arg2) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 51;
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
            var6 = 52;
            var6 = var17[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.shouldNSFWGateGuild;
            var6 = var6.bind(var12)(var15);
            if(var6) { _fun0001_ip = 2049; continue _fun0001 }
 1620:
            if(!var11) { _fun0001_ip = 1649; continue _fun0001 }
 1623:
            var12 = _closure1_slot7;
            var6 = var12.isConnected;
            var6 = var6.bind(var12)();
            if(var6) { _fun0001_ip = 1649; continue _fun0001 }
 1640:
            var6 = var8.bind(var4)();
            _fun0001_ip = 2047; continue _fun0001;
 1649:
            if(var11) { _fun0001_ip = 1863; continue _fun0001 }
 1655:
            if(var10) { _fun0001_ip = 1803; continue _fun0001 }
 1661:
            var10 = var16.isDirectory;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1746; continue _fun0001 }
 1674:
            var10 = var16.isForumLikeChannel;
            var10 = var10.bind(var16)();
            if(var10) { _fun0001_ip = 1693; continue _fun0001 }
 1687:
            var8 = var8.bind(var4)();
            _fun0001_ip = 1744; continue _fun0001;
 1693:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 58;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'ForumChannel';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1744:
            _fun0001_ip = 1801; continue _fun0001;
 1746:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 57;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var16;
            var10['guildId'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildDirectory';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1801:
            _fun0001_ip = 1858; continue _fun0001;
 1803:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 56;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['guildId'] = var15;
            var10['channelId'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var11 = 'GuildNSFW';
            var11 = var9.bind(var4)(var10, var11);
            var8 = var10;
 1858:
            _fun0001_ip = 2044; continue _fun0001;
 1863:
            var12 = _closure1_slot14;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 54;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.empty;
            var10['style'] = var13;
            var16 = _closure1_slot0;
            var13 = 55;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.EmptyChannelNoTextChannels;
            var10['Illustration'] = var13;
            var13 = 17;
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
 2044:
            var6 = var8;
 2047:
            _fun0001_ip = 2096; continue _fun0001;
 2049:
            var10 = _closure1_slot14;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 53;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7 = var10.bind(var4)(var8, var7);
            var8 = 'NsfwGateChat';
            var8 = var9.bind(var4)(var7, var8);
            var6 = var7;
 2096:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 59;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/ChatView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();