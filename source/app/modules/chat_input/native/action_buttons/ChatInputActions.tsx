// app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.CHAT_INPUT_TIMING_CONFIG;
    var9 = var8.ChatInputActionType;
    var _closure1_slot5 = var9;
    var8 = var8.ChatInputOmniButtonActionType;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot8 = var9;
    var8 = var8.Fragment;
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'flexDirection': 'row', 'alignItems': 'center'};
            var1['actions'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var4 = var9[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.CARD_SECONDARY_BG;
            var2['backgroundColor'] = var4;
            var1['themedChatInput'] = var2;
            var2 = {};
            var8 = _closure1_slot0;
            var4 = 7;
            var7 = var9[var4];
            var7 = var8.bind(var5)(var7);
            var7 = var7.SMALL_BUTTON_HEIGHT;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.SMALL_BUTTON_PADDING;
            var4 = var7 + var4;
            var2['maxHeight'] = var4;
            var1['buttonWrapper'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var7 = var4.colors;
            var4 = arg1;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var7.TEXT_BRAND;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var7.ICON_STRONG;
case 4:
            var2['tintColor'] = var4;
            var1['activeBrand'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.radii;
            var7 = var7.sm;
            var2['borderRadius'] = var7;
            var7 = 1;
            var2['borderWidth'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.CONTROL_SECONDARY_BORDER_ACTIVE;
            var2['borderColor'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
            var2['backgroundColor'] = var3;
            var1['activeSurface'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = "function ChatInputActionsTsx1(){const{withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}";
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.canStartThreads;
            var _closure2_slot0 = var14;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var16 = var1.isAppLauncherEnabled;
            var _closure2_slot2 = var16;
            var18 = var1.keyboardType;
            var25 = var1.onPressAction;
            var _closure2_slot3 = var25;
            var2 = var1.shouldPhotosButtonBeDisabled;
            var _closure2_slot4 = var2;
            var2 = var1.shouldShowGiftButton;
            var26 = var1.canUpload;
            var _closure2_slot5 = var26;
            var27 = var1.canPostPolls;
            var _closure2_slot6 = var27;
            var24 = var1.onPollsPress;
            var _closure2_slot7 = var24;
            var9 = var1.onAttachPress;
            var _closure2_slot8 = var9;
            var4 = undefined;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 8;
            var1 = var19[var1];
            var5 = var22.bind(var4)(var1);
            var3 = var5.useMobileVisualRefreshConfig;
            var1 = {};
            var8 = 'ChatInputActions';
            var1['location'] = var8;
            var1 = var3.bind(var5)(var1);
            var5 = var1.enabled;
            var _closure2_slot9 = var5;
            var21 = var1.chatInputHideMore;
            var1 = _closure1_slot11;
            var8 = var1.bind(var4)(var5);
            var _closure2_slot10 = var8;
            var1 = 9;
            var1 = var19[var1];
            var10 = var22.bind(var4)(var1);
            var3 = var10.useClientThemesOverride;
            var1 = var8.themedChatInput;
            var1 = var3.bind(var10)(var1);
            var _closure2_slot11 = var1;
            var11 = 10;
            var1 = var19[var11];
            var13 = var22.bind(var4)(var1);
            var12 = var13.useToken;
            var3 = _closure1_slot1;
            var1 = 6;
            var10 = var19[var1];
            var10 = var3.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var10 = var12.bind(var13)(var10);
            var11 = var19[var11];
            var12 = var22.bind(var4)(var11);
            var11 = var12.useToken;
            var1 = var19[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_MARGIN;
            var1 = var11.bind(var12)(var1);
            var29 = 2;
            var1 = var29 * var1;
            var13 = var10 + var1;
            var _closure2_slot12 = var13;
            var1 = 11;
            var1 = var19[var1];
            var10 = var3.bind(var4)(var1);
            var1 = {};
            var3 = true;
            var1['includeCustomKeyboard'] = var3;
            var10 = var10.bind(var4)(var1);
            var1 = 12;
            var1 = var19[var1];
            var12 = var22.bind(var4)(var1);
            var11 = var12.useKeyboardContextForType;
            var20 = 13;
            var1 = var19[var20];
            var1 = var22.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var11.bind(var12)(var1);
            var12 = var1.keyboardWillOpen;
            var23 = _closure1_slot4;
            var11 = var23.useState;
            var1 = false;
            var1 = var11.bind(var23)(var1);
            var28 = _closure1_slot3;
            var15 = var28.bind(var4)(var1, var29);
            var1 = 0;
            var11 = var15[var1];
            var17 = 1;
            var15 = var15[var17];
            var _closure2_slot13 = var15;
            var15 = var23.useState;
            var15 = var15.bind(var23)(var3);
            var15 = var28.bind(var4)(var15, var29);
            var1 = var15[var1];
            var15 = var15[var17];
            var _closure2_slot14 = var15;
            var17 = var23.useRef;
            var15 = null;
            var15 = var17.bind(var23)(var15);
            var _closure2_slot15 = var15;
            var28 = var23.useMemo;
            var17 = function() {
                var1 = {};
                var3 = function onDismissActions(arg1) {
                    var4 = _closure2_slot13;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot14;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var3 = function onShowActions(arg1) {
                    var4 = _closure2_slot13;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot14;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onShowActions'] = var3;
                var3 = function focusPhotosButton() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setAccessibilityFocus;
                    var2 = {};
                    var5 = _closure2_slot15;
                    var2['ref'] = var5;
                    var5 = 0;
                    var2['delay'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['focusPhotosButton'] = var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var2 = function showActionsImperativeApi() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var1['showActionsImperativeApi'] = var2;
                return var1;
            };
            var15 = new Array(0);
            var15 = var28.bind(var23)(var17, var15);
            var28 = var15.showActionsImperativeApi;
            var17 = var23.useImperativeHandle;
            var15 = arg2;
            var15 = var17.bind(var23)(var15, var28);
            var17 = var23.useMemo;
            var15 = new Array(8);
            var15[0] = var5;
            var15[1] = var27;
            var15[2] = var14;
            var15[3] = var16;
            var15[4] = var26;
            var15[5] = var25;
            var15[6] = var24;
            var15[7] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = new Array(0);
                    if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    return var1;
case 5:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var10 = var9[var6];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.RgIi2B;
                    var6 = var10.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = 16;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.PollsIcon;
                    var2['IconComponent'] = var6;
                    var6 = _closure2_slot7;
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 7:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var10 = var9[var6];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6["7Xm5QI"];
                    var6 = var10.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = 17;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.ThreadPlusIcon;
                    var2['IconComponent'] = var6;
                    var6 = function action() {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.THREAD;
                        var2 = undefined;
                        var1 = {};
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 9:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var10 = var9[var6];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.PHjkRE;
                    var6 = var10.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = 18;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.AppsIcon;
                    var2['IconComponent'] = var6;
                    var5 = function action() {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.APPS;
                        var2 = undefined;
                        var1 = {};
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2['action'] = var5;
                    var2 = var3.bind(var1)(var2);
case 11:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 15;
                    var9 = var8[var5];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.t;
                    var5 = var5["8Hvr3+"];
                    var5 = var9.bind(var10)(var5);
                    var2['label'] = var5;
                    var5 = 19;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.AttachmentIcon;
                    var2['IconComponent'] = var5;
                    var4 = _closure2_slot8;
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
case 13:
                    return var1;
                }
            };
            var9 = var17.bind(var23)(var9, var15);
            var _closure2_slot16 = var9;
            var17 = var23.useCallback;
            var15 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.CHAT_INPUT_OMNI_BUTTON_ACTION;
                var2 = {};
                var6 = _closure1_slot6;
                var6 = var6.OPENED;
                var2['type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var17.bind(var23)(var15, var9);
            var _closure2_slot17 = var9;
            var17 = var23.useCallback;
            var15 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.CHAT_INPUT_OMNI_BUTTON_ACTION;
                    var1 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.CLOSED;
                    var1['type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = new Array(0);
            var9 = var17.bind(var23)(var15, var9);
            var _closure2_slot18 = var9;
            var9 = new Array(0);
            var17 = var9.push;
            var15 = {};
            var23 = _closure1_slot5;
            var23 = var23.PHOTOS;
            var15['type'] = var23;
            var19 = var19[var20];
            var19 = var22.bind(var4)(var19);
            var19 = var19.KeyboardTypes;
            var19 = var19.MEDIA;
            var19 = var18 === var19;
            if(var19) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            if(!var21) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var20];
            var22 = var23.bind(var4)(var22);
            var22 = var22.KeyboardTypes;
            var22 = var22.APP_LAUNCHER;
            var21 = var18 === var22;
case 19:
            var19 = var21;
case 17:
            var15['active'] = var19;
            var15 = var17.bind(var9)(var15);
            var15 = !var5;
            if(!var15) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var15 = var16;
case 21:
            if(!var15) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var16 = var9.push;
            var15 = {};
            var17 = _closure1_slot5;
            var17 = var17.APPS;
            var15['type'] = var17;
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var20];
            var17 = var19.bind(var4)(var17);
            var17 = var17.KeyboardTypes;
            var17 = var17.APP_LAUNCHER;
            var17 = var18 === var17;
            var15['active'] = var17;
            var15 = var16.bind(var9)(var15);
case 23:
            var3 = var3 === var14;
            if(!var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            if(var10) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var10 = var12;
case 27:
            if(var10) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var10 = var11;
case 29:
            var3 = var10;
case 25:
            _closure2_slot19 = var3;
            if(var5) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            if(var3) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            if(!var2) { _fun0002_ip = 31; continue _fun0002 }
case 35:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.NITRO_GIFT;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
            _fun0002_ip = 31; continue _fun0002;
case 33:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.THREAD;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
case 31:
            var14 = !var1;
            _closure2_slot20 = var14;
            var1 = var9.length;
            var11 = var1 * var13;
            _closure2_slot21 = var11;
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 21;
            var1 = var12[var5];
            var3 = var16.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function J() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {'overflow': 'hidden', 'opacity': 1};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot20;
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var3 = _closure2_slot21;
                    _fun0005_ip = 38; continue _fun0005;
case 36:
                    var3 = _closure2_slot12;
case 38:
                    var2 = _closure1_slot10;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['width'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var15 = 22;
            var15 = var12[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withTiming;
            var10['withTiming'] = var15;
            var10['showPhotosOnly'] = var14;
            var10['actionButtonWidth'] = var13;
            var10['actionButtonsWidth'] = var11;
            var13 = _closure1_slot10;
            var10['timingConfig'] = var13;
            var1['__closure'] = var10;
            var10 = 15796492432712.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot12;
            var1['__initData'] = var10;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var12 = var8.actions;
            var8 = new Array(3);
            var8[0] = var12;
            var8[1] = var10;
            var10 = {};
            var10['maxWidth'] = var11;
            var8[2] = var10;
            var5['style'] = var8;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = var1.type;
                    var9 = var1.active;
                    var _closure3_slot0 = var9;
                    var1 = _closure1_slot5;
                    var1 = var1.PHOTOS;
                    if(!(var1 !== var3)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var1 = _closure1_slot5;
                    var1 = var1.APPS;
                    if(!(var1 !== var3)) { _fun0006_ip = 41; continue _fun0006 }
case 36:
                    var1 = _closure1_slot5;
                    var1 = var1.ALL_PHOTOS;
                    if(!(var1 !== var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var1 = _closure1_slot5;
                    var1 = var1.THREAD;
                    if(!(var1 !== var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var1 = _closure1_slot5;
                    var1 = var1.NITRO_GIFT;
                    if(!(var1 !== var3)) { _fun0006_ip = 44; continue _fun0006 }
case 46:
                    var1 = undefined;
                    return var1;
case 44:
                    var8 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = {};
                    var10 = _closure2_slot20;
                    var10 = !var10;
                    var3['accessible'] = var10;
                    var10 = _closure2_slot0;
                    var3['canStartThreads'] = var10;
                    var10 = _closure2_slot1;
                    var3['channel'] = var10;
                    var10 = _closure2_slot3;
                    var3['onPress'] = var10;
                    var10 = _closure2_slot10;
                    var10 = var10.buttonWrapper;
                    var3['styleButtonWrapper'] = var10;
                    var10 = _closure2_slot11;
                    var3['styleButton'] = var10;
                    var1 = _closure2_slot19;
                    var3['shouldShowThread'] = var1;
                    var1 = 'gift-or-thread';
                    var1 = var8.bind(var5)(var4, var3, var1);
                    return var1;
case 42:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 24;
                    var1 = var12[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var11 = _closure1_slot0;
                    var8 = 15;
                    var10 = var12[var8];
                    var10 = var11.bind(var4)(var10);
                    var13 = var10.intl;
                    var10 = var13.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.ZT24In;
                    var8 = var10.bind(var13)(var8);
                    var1['accessibilityLabel'] = var8;
                    var10 = _closure2_slot20;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var10 = {};
                    var10['expanded'] = var9;
                    var1['accessibilityState'] = var10;
                    var1['active'] = var9;
                    var10 = _closure2_slot10;
                    var10 = var10.activeBrand;
                    var1['activeIconStyle'] = var10;
                    var10 = _closure2_slot5;
                    var10 = !var10;
                    var1['disabled'] = var10;
                    var10 = 28;
                    var10 = var12[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.ImageIcon;
                    var1['IconComponent'] = var10;
                    var10 = function onPress(arg1) {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.ALL_PHOTOS;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var10;
                    var8 = _closure2_slot11;
                    var1['style'] = var8;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    return var1;
case 41:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 27;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var10 = _closure2_slot20;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var1['active'] = var9;
                    var10 = _closure2_slot1;
                    var1['channel'] = var10;
                    var10 = _closure2_slot3;
                    var1['onPress'] = var10;
                    var10 = _closure2_slot11;
                    var1['styleButton'] = var10;
                    var8 = _closure2_slot10;
                    var8 = var8.activeBrand;
                    var1['styleActiveIcon'] = var8;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    return var1;
case 39:
                    var1 = _closure2_slot9;
                    if(!var1) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var1 = _closure2_slot16;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0006_ip = 49; continue _fun0006 }
case 47:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var1 = 24;
                    var1 = var14[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var10 = _closure2_slot15;
                    var1['ref'] = var10;
                    var13 = _closure1_slot0;
                    var10 = 15;
                    var11 = var14[var10];
                    var11 = var13.bind(var4)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var10];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.t;
                    var11 = var11.aDZSuz;
                    var11 = var12.bind(var15)(var11);
                    var1['accessibilityLabel'] = var11;
                    var11 = var14[var10];
                    var11 = var13.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.t;
                    var10 = var10.o7j1jA;
                    var10 = var11.bind(var12)(var10);
                    var1['accessibilityHint'] = var10;
                    var10 = {};
                    var10['expanded'] = var9;
                    var1['accessibilityState'] = var10;
                    var1['active'] = var9;
                    var10 = _closure2_slot9;
                    var9 = undefined;
                    if(!var10) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var10 = _closure2_slot10;
                    var9 = var10.activeSurface;
case 50:
                    var1['activeStyle'] = var9;
                    var9 = _closure2_slot10;
                    var9 = var9.activeBrand;
                    var1['activeIconStyle'] = var9;
                    var9 = _closure2_slot4;
                    var1['disabled'] = var9;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 26;
                    var9 = var11[var9];
                    var9 = var10.bind(var4)(var9);
                    var9 = var9.MediaKeyboardButtonIcon;
                    var1['IconComponent'] = var9;
                    var9 = function onPress(arg1) {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.PHOTOS;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var9;
                    var9 = _closure2_slot11;
                    var1['style'] = var9;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    _fun0006_ip = 52; continue _fun0006;
case 49:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ContextMenu;
                    var2 = {'items': null, 'triggerOnLongPress': true, 'align': 'above'};
                    var9 = _closure2_slot16;
                    var2['items'] = var9;
                    var9 = _closure2_slot17;
                    var2['onOpen'] = var9;
                    var8 = _closure2_slot18;
                    var2['onClose'] = var8;
                    var7 = function children(arg1) {
                        var1 = arg1;
                        var13 = var1.ref;
                        var10 = var1.accessibilityActions;
                        var9 = var1.onAccessibilityAction;
                        var4 = _closure1_slot8;
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 24;
                        var1 = var8[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var7 = _closure1_slot0;
                        var5 = 25;
                        var5 = var8[var5];
                        var12 = var7.bind(var3)(var5);
                        var11 = var12.mergeRefs;
                        var6 = _closure2_slot15;
                        var6 = var11.bind(var12)(var13, var6);
                        var1['ref'] = var6;
                        var6 = 15;
                        var11 = var8[var6];
                        var11 = var7.bind(var3)(var11);
                        var13 = var11.intl;
                        var12 = var13.string;
                        var11 = var8[var6];
                        var11 = var7.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.aDZSuz;
                        var11 = var12.bind(var13)(var11);
                        var1['accessibilityLabel'] = var11;
                        var11 = var8[var6];
                        var11 = var7.bind(var3)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.o7j1jA;
                        var6 = var11.bind(var12)(var6);
                        var1['accessibilityHint'] = var6;
                        var11 = {};
                        var6 = _closure3_slot0;
                        var11['expanded'] = var6;
                        var1['accessibilityState'] = var11;
                        var1['accessibilityActions'] = var10;
                        var1['onAccessibilityAction'] = var9;
                        var1['active'] = var6;
                        var6 = _closure2_slot10;
                        var9 = var6.activeSurface;
                        var1['activeStyle'] = var9;
                        var6 = var6.activeBrand;
                        var1['activeIconStyle'] = var6;
                        var6 = _closure2_slot4;
                        var1['disabled'] = var6;
                        var6 = 26;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.MediaKeyboardButtonIcon;
                        var1['IconComponent'] = var6;
                        var6 = function onPress(arg1) {
                            var4 = _closure2_slot3;
                            var1 = _closure1_slot5;
                            var3 = var1.PHOTOS;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var1['onPress'] = var6;
                        var5 = _closure2_slot11;
                        var1['style'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2['children'] = var7;
                    var1 = var5.bind(var4)(var3, var2, var6);
case 52:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInputActions';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();