// app/modules/chat_input/native/action_buttons/ChatInputActions.tsx
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
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['actions'] = var10;
    var10 = {};
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_SECONDARY_BG;
    var10['backgroundColor'] = var13;
    var4['themedChatInput'] = var10;
    var10 = {};
    var13 = 7;
    var14 = var6[var13];
    var14 = var5.bind(var1)(var14);
    var14 = var14.SMALL_BUTTON_HEIGHT;
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var13 = var13.SMALL_BUTTON_PADDING;
    var13 = var14 + var13;
    var10['maxHeight'] = var13;
    var4['buttonWrapper'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CHAT_INPUT_ACTION_ICON_ACTIVE_TINT;
    var10['tintColor'] = var11;
    var4['activeBrand'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = "function ChatInputActionsTsx1(){const{chatInputFloating,withTiming,showPhotosOnly,actionButtonWidth,actionButtonsWidth,timingConfig}=this.__closure;if(chatInputFloating){return{opacity:1};}return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?actionButtonWidth:actionButtonsWidth,timingConfig)};}";
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.canStartThreads;
            var _closure2_slot0 = var17;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var19 = var1.isAppLauncherEnabled;
            var _closure2_slot2 = var19;
            var21 = var1.keyboardType;
            var27 = var1.onPressAction;
            var _closure2_slot3 = var27;
            var3 = var1.shouldPhotosButtonBeDisabled;
            var _closure2_slot4 = var3;
            var5 = var1.shouldShowGiftButton;
            var29 = var1.canUpload;
            var _closure2_slot5 = var29;
            var30 = var1.canPostPolls;
            var _closure2_slot6 = var30;
            var26 = var1.onPollsPress;
            var _closure2_slot7 = var26;
            var9 = var1.onAttachPress;
            var _closure2_slot8 = var9;
            var1 = var1.photosButtonExternalRef;
            var _closure2_slot9 = var1;
            var4 = undefined;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 8;
            var1 = var22[var1];
            var8 = var24.bind(var4)(var1);
            var3 = var8.useMobileVisualRefreshConfig;
            var1 = {};
            var10 = 'ChatInputActions';
            var1['location'] = var10;
            var1 = var3.bind(var8)(var1);
            var31 = var1.enabled;
            var _closure2_slot10 = var31;
            var13 = var1.chatInputFloating;
            var _closure2_slot11 = var13;
            var1 = _closure1_slot11;
            var8 = var1.bind(var4)();
            var _closure2_slot12 = var8;
            var1 = 9;
            var1 = var22[var1];
            var10 = var24.bind(var4)(var1);
            var3 = var10.useClientThemesOverride;
            var1 = var8.themedChatInput;
            var1 = var3.bind(var10)(var1);
            var _closure2_slot13 = var1;
            var12 = 10;
            var1 = var22[var12];
            var14 = var24.bind(var4)(var1);
            var10 = var14.useToken;
            var3 = _closure1_slot1;
            var11 = 6;
            var1 = var22[var11];
            var1 = var3.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var10 = var10.bind(var14)(var1);
            var1 = var22[var12];
            var15 = var24.bind(var4)(var1);
            var14 = var15.useToken;
            var1 = var22[var11];
            var1 = var3.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.CHAT_INPUT_ACTION_BUTTON_MARGIN;
            var1 = var14.bind(var15)(var1);
            var12 = var22[var12];
            var14 = var24.bind(var4)(var12);
            var12 = var14.useToken;
            var11 = var22[var11];
            var11 = var3.bind(var4)(var11);
            var11 = var11.modules;
            var11 = var11.mobile;
            var11 = var11.CHAT_INPUT_ACTION_BUTTON_GAP;
            var11 = var12.bind(var14)(var11);
            var20 = 2;
            var1 = var20 * var1;
            var15 = var10 + var1;
            var _closure2_slot14 = var15;
            var1 = 11;
            var1 = var22[var1];
            var12 = var3.bind(var4)(var1);
            var1 = {};
            var10 = true;
            var1['includeCustomKeyboard'] = var10;
            var12 = var12.bind(var4)(var1);
            var1 = 12;
            var1 = var22[var1];
            var16 = var24.bind(var4)(var1);
            var14 = var16.useKeyboardContextForType;
            var23 = 13;
            var1 = var22[var23];
            var1 = var24.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var14.bind(var16)(var1);
            var16 = var1.keyboardWillOpen;
            var1 = 14;
            var1 = var22[var1];
            var1 = var3.bind(var4)(var1);
            var28 = var1.bind(var4)(var2);
            var _closure2_slot15 = var28;
            var25 = _closure1_slot4;
            var2 = var25.useState;
            var1 = false;
            var1 = var2.bind(var25)(var1);
            var18 = _closure1_slot3;
            var1 = var18.bind(var4)(var1, var20);
            var2 = 0;
            var14 = var1[var2];
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot16 = var1;
            var1 = var25.useState;
            var1 = var1.bind(var25)(var10);
            var18 = var18.bind(var4)(var1, var20);
            var1 = var18[var2];
            var18 = var18[var3];
            var _closure2_slot17 = var18;
            var20 = var25.useRef;
            var18 = null;
            var18 = var20.bind(var25)(var18);
            var _closure2_slot18 = var18;
            var32 = var25.useMemo;
            var20 = function() {
                var1 = {};
                var3 = function onDismissActions(arg1) {
                    var4 = _closure2_slot16;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot17;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var3 = function onShowActions(arg1) {
                    var4 = _closure2_slot16;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot17;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onShowActions'] = var3;
                var3 = function focusPhotosButton() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setAccessibilityFocus;
                    var2 = {};
                    var5 = _closure2_slot18;
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
            var18 = new Array(0);
            var18 = var32.bind(var25)(var20, var18);
            var32 = var18.showActionsImperativeApi;
            var20 = var25.useImperativeHandle;
            var18 = arg2;
            var18 = var20.bind(var25)(var18, var32);
            var20 = var25.useMemo;
            var18 = new Array(9);
            var18[0] = var31;
            var18[1] = var30;
            var18[2] = var17;
            var18[3] = var19;
            var18[4] = var29;
            var18[5] = var28;
            var18[6] = var27;
            var18[7] = var26;
            var18[8] = var9;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = new Array(0);
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    return var1;
case 2:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot15;
                    var2 = !var3;
case 4:
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var6 = var6[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    var3 = var6.isImageCaptureIntentSupported;
                    var2 = var3.bind(var6)();
case 6:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
                    var10 = var9[var6];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.uje3P9;
                    var6 = var10.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = 18;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.CameraIcon;
                    var2['IconComponent'] = var6;
                    var6 = function action() {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.CAMERA;
                        var2 = undefined;
                        var1 = {};
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 8:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
                    var10 = var9[var6];
                    var7 = undefined;
                    var10 = var8.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.t;
                    var6 = var6.Zmm6dN;
                    var6 = var10.bind(var11)(var6);
                    var2['label'] = var6;
                    var6 = 19;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.ImageIcon;
                    var2['IconComponent'] = var6;
                    var6 = function action() {
                        var4 = _closure2_slot3;
                        var1 = _closure1_slot5;
                        var3 = var1.ALL_PHOTOS;
                        var2 = undefined;
                        var1 = {};
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 10:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
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
                    var6 = 20;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.PollsIcon;
                    var2['IconComponent'] = var6;
                    var6 = _closure2_slot7;
                    var2['action'] = var6;
                    var2 = var3.bind(var1)(var2);
case 12:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
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
                    var6 = 21;
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
case 14:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var3 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 17;
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
                    var6 = 22;
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
case 16:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 17;
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
                    var5 = 23;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.AttachmentIcon;
                    var2['IconComponent'] = var5;
                    var4 = _closure2_slot8;
                    var2['action'] = var4;
                    var2 = var3.bind(var1)(var2);
case 18:
                    return var1;
                }
            };
            var9 = var20.bind(var25)(var9, var18);
            var _closure2_slot19 = var9;
            var20 = var25.useCallback;
            var18 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
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
            var9 = var20.bind(var25)(var18, var9);
            var _closure2_slot20 = var9;
            var20 = var25.useCallback;
            var18 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
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
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = new Array(0);
            var9 = var20.bind(var25)(var18, var9);
            var _closure2_slot21 = var9;
            var9 = new Array(0);
            var20 = var9.push;
            var18 = {};
            var25 = _closure1_slot5;
            var25 = var25.PHOTOS;
            var18['type'] = var25;
            var22 = var22[var23];
            var22 = var24.bind(var4)(var22);
            var22 = var22.KeyboardTypes;
            var22 = var22.MEDIA;
            var22 = var21 === var22;
            if(var22) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var24 = var13;
            if(!var24) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var23];
            var25 = var26.bind(var4)(var25);
            var25 = var25.KeyboardTypes;
            var25 = var25.APP_LAUNCHER;
            var24 = var21 === var25;
case 24:
            var22 = var24;
case 22:
            var18['active'] = var22;
            var18 = var20.bind(var9)(var18);
            var18 = !var13;
            if(!var18) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var18 = var19;
case 26:
            if(!var18) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var19 = var9.push;
            var18 = {};
            var20 = _closure1_slot5;
            var20 = var20.APPS;
            var18['type'] = var20;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var23];
            var20 = var22.bind(var4)(var20);
            var20 = var20.KeyboardTypes;
            var20 = var20.APP_LAUNCHER;
            var20 = var21 === var20;
            var18['active'] = var20;
            var18 = var19.bind(var9)(var18);
case 28:
            var10 = var10 === var17;
            if(!var10) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            if(var12) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var12 = var16;
case 32:
            if(var12) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var12 = var14;
case 34:
            var10 = var12;
case 30:
            _closure2_slot22 = var10;
            if(var13) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            if(var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 40:
            var10 = var9.push;
            var5 = {};
            var12 = _closure1_slot5;
            var12 = var12.NITRO_GIFT;
            var5['type'] = var12;
            var5 = var10.bind(var9)(var5);
            _fun0001_ip = 36; continue _fun0001;
case 38:
            var10 = var9.push;
            var5 = {};
            var12 = _closure1_slot5;
            var12 = var12.THREAD;
            var5['type'] = var12;
            var5 = var10.bind(var9)(var5);
case 36:
            var16 = !var1;
            _closure2_slot23 = var16;
            var1 = var9.length;
            var1 = var1 > var3;
            var2 = 0;
            if(!var1) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var1 = var9.length;
            var1 = var1 - var3;
            var2 = var1 * var11;
case 41:
            var1 = var9.length;
            var1 = var1 * var15;
            var12 = var1 + var2;
            _closure2_slot24 = var12;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 25;
            var1 = var14[var5];
            var3 = var18.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function it() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var1 = {'overflow': 'hidden', 'opacity': 1};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var3 = _closure2_slot23;
                    if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var3 = _closure2_slot24;
                    _fun0004_ip = 47; continue _fun0004;
case 45:
                    var3 = _closure2_slot14;
case 47:
                    var2 = _closure1_slot10;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['width'] = var2;
                    _fun0004_ip = 48; continue _fun0004;
case 43:
                    var2 = {};
                    var3 = 1;
                    var2['opacity'] = var3;
                    var1 = var2;
case 48:
                    return var1;
                }
            };
            var10 = {};
            var10['chatInputFloating'] = var13;
            var17 = 26;
            var17 = var14[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.withTiming;
            var10['withTiming'] = var17;
            var10['showPhotosOnly'] = var16;
            var10['actionButtonWidth'] = var15;
            var10['actionButtonsWidth'] = var12;
            var15 = _closure1_slot10;
            var10['timingConfig'] = var15;
            var1['__closure'] = var10;
            var10 = 11213591113353.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot12;
            var1['__initData'] = var10;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = _closure1_slot1;
            var5 = var14[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var14 = var8.actions;
            var8 = new Array(3);
            var8[0] = var14;
            var8[1] = var10;
            var10 = {};
            var10['gap'] = var11;
            var11 = undefined;
            if(var13) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var11 = var12;
case 49:
            var10['maxWidth'] = var11;
            var8[2] = var10;
            var5['style'] = var8;
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = var1.type;
                    var9 = var1.active;
                    var _closure3_slot0 = var9;
                    var1 = _closure1_slot5;
                    var1 = var1.PHOTOS;
                    if(!(var1 !== var3)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var1 = _closure1_slot5;
                    var1 = var1.APPS;
                    if(!(var1 !== var3)) { _fun0005_ip = 12; continue _fun0005 }
case 53:
                    var1 = _closure1_slot5;
                    var1 = var1.ALL_PHOTOS;
                    if(!(var1 !== var3)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var1 = _closure1_slot5;
                    var1 = var1.THREAD;
                    if(!(var1 !== var3)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var1 = _closure1_slot5;
                    var1 = var1.NITRO_GIFT;
                    if(!(var1 !== var3)) { _fun0005_ip = 56; continue _fun0005 }
case 58:
                    var1 = undefined;
                    return var1;
case 56:
                    var8 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var1 = var4[var1];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var1);
                    var3 = {};
                    var10 = _closure2_slot23;
                    var10 = !var10;
                    var3['accessible'] = var10;
                    var10 = _closure2_slot0;
                    var3['canStartThreads'] = var10;
                    var10 = _closure2_slot1;
                    var3['channel'] = var10;
                    var10 = _closure2_slot3;
                    var3['onPress'] = var10;
                    var10 = _closure2_slot12;
                    var10 = var10.buttonWrapper;
                    var3['styleButtonWrapper'] = var10;
                    var10 = _closure2_slot13;
                    var3['styleButton'] = var10;
                    var1 = _closure2_slot22;
                    var3['shouldShowThread'] = var1;
                    var1 = 'gift-or-thread';
                    var1 = var8.bind(var5)(var4, var3, var1);
                    return var1;
case 54:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 28;
                    var1 = var12[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var11 = _closure1_slot0;
                    var8 = 17;
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
                    var10 = _closure2_slot23;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var10 = {};
                    var10['expanded'] = var9;
                    var1['accessibilityState'] = var10;
                    var1['active'] = var9;
                    var10 = _closure2_slot12;
                    var10 = var10.activeBrand;
                    var1['activeIconStyle'] = var10;
                    var10 = _closure2_slot5;
                    var10 = !var10;
                    var1['disabled'] = var10;
                    var10 = 19;
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
                    var8 = _closure2_slot13;
                    var1['style'] = var8;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    return var1;
case 12:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 31;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var10 = _closure2_slot23;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var1['active'] = var9;
                    var10 = _closure2_slot1;
                    var1['channel'] = var10;
                    var10 = _closure2_slot3;
                    var1['onPress'] = var10;
                    var10 = _closure2_slot13;
                    var1['styleButton'] = var10;
                    var8 = _closure2_slot12;
                    var8 = var8.activeBrand;
                    var1['styleActiveIcon'] = var8;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    return var1;
case 51:
                    var1 = _closure2_slot10;
                    if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 59:
                    var1 = _closure2_slot19;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0005_ip = 60; continue _fun0005 }
case 17:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 28;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var11 = _closure2_slot9;
                    var10 = null;
                    if(!(var10 == var11)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var10 = _closure2_slot18;
                    _fun0005_ip = 63; continue _fun0005;
case 61:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 29;
                    var11 = var13[var11];
                    var14 = var12.bind(var4)(var11);
                    var13 = var14.mergeRefs;
                    var12 = _closure2_slot18;
                    var11 = _closure2_slot9;
                    var10 = var13.bind(var14)(var12, var11);
case 63:
                    var1['ref'] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var12 = 17;
                    var13 = var11[var12];
                    var13 = var10.bind(var4)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var11[var12];
                    var13 = var10.bind(var4)(var13);
                    var13 = var13.t;
                    var13 = var13.aDZSuz;
                    var13 = var14.bind(var15)(var13);
                    var1['accessibilityLabel'] = var13;
                    var13 = var11[var12];
                    var13 = var10.bind(var4)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var11[var12];
                    var12 = var10.bind(var4)(var12);
                    var12 = var12.t;
                    var12 = var12.o7j1jA;
                    var12 = var13.bind(var14)(var12);
                    var1['accessibilityHint'] = var12;
                    var12 = {};
                    var12['expanded'] = var9;
                    var1['accessibilityState'] = var12;
                    var1['active'] = var9;
                    var9 = _closure2_slot12;
                    var9 = var9.activeBrand;
                    var1['activeIconStyle'] = var9;
                    var9 = _closure2_slot4;
                    var1['disabled'] = var9;
                    var9 = 30;
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
                    var10 = _closure2_slot11;
                    var9 = undefined;
                    if(var10) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var9 = _closure2_slot13;
case 64:
                    var1['style'] = var9;
                    var1 = var5.bind(var4)(var3, var1, var6);
                    _fun0005_ip = 66; continue _fun0005;
case 60:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 27;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.ContextMenu;
                    var2 = {'items': null, 'triggerOnLongPress': true, 'align': 'above'};
                    var9 = _closure2_slot19;
                    var2['items'] = var9;
                    var9 = _closure2_slot20;
                    var2['onOpen'] = var9;
                    var8 = _closure2_slot21;
                    var2['onClose'] = var8;
                    var7 = function children(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.ref;
                            var10 = var1.accessibilityActions;
                            var9 = var1.onAccessibilityAction;
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 28;
                            var1 = var8[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = _closure1_slot0;
                            var6 = 29;
                            var6 = var8[var6];
                            var12 = var7.bind(var3)(var6);
                            var11 = var12.mergeRefs;
                            var14 = new Array(3);
                            var14[0] = var5;
                            var5 = _closure2_slot18;
                            var14[1] = var5;
                            var5 = _closure2_slot9;
                            var14[2] = var5;
                            var13 = var14.filter;
                            var5 = global;
                            var5 = var5.Boolean;
                            var16 = var13.bind(var14)(var5);
                            var5 = new Array(0);
                            var15 = 0;
                            var17 = var5;
                            var13 = arraySpread(var17, var16, var15);
                            var17 = var11;
                            var16 = var5;
                            var15 = var12;
                            var5 = apply(var17, var16, var15);
                            var1['ref'] = var5;
                            var5 = 17;
                            var11 = var8[var5];
                            var11 = var7.bind(var3)(var11);
                            var13 = var11.intl;
                            var12 = var13.string;
                            var11 = var8[var5];
                            var11 = var7.bind(var3)(var11);
                            var11 = var11.t;
                            var11 = var11.aDZSuz;
                            var11 = var12.bind(var13)(var11);
                            var1['accessibilityLabel'] = var11;
                            var11 = var8[var5];
                            var11 = var7.bind(var3)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.o7j1jA;
                            var5 = var11.bind(var12)(var5);
                            var1['accessibilityHint'] = var5;
                            var11 = {};
                            var5 = _closure3_slot0;
                            var11['expanded'] = var5;
                            var1['accessibilityState'] = var11;
                            var1['accessibilityActions'] = var10;
                            var1['onAccessibilityAction'] = var9;
                            var1['active'] = var5;
                            var5 = _closure2_slot12;
                            var5 = var5.activeBrand;
                            var1['activeIconStyle'] = var5;
                            var5 = _closure2_slot4;
                            var1['disabled'] = var5;
                            var5 = 30;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.MediaKeyboardButtonIcon;
                            var1['IconComponent'] = var5;
                            var5 = function onPress(arg1) {
                                var4 = _closure2_slot3;
                                var1 = _closure1_slot5;
                                var3 = var1.PHOTOS;
                                var2 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var2)(var1, var3);
                                return var1;
                            };
                            var1['onPress'] = var5;
                            var7 = _closure2_slot11;
                            var5 = undefined;
                            if(var7) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                            var5 = _closure2_slot13;
case 67:
                            var1['style'] = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        }
                    };
                    var2['children'] = var7;
                    var1 = var5.bind(var4)(var3, var2, var6);
case 66:
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
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();