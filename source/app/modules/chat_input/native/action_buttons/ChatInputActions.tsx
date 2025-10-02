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
    var13 = var8.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var4 = var8.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var _closure1_slot5 = var4;
    var4 = var8.CHAT_INPUT_MORE_BUTTON_WIDTH;
    var _closure1_slot6 = var4;
    var4 = var8.CHAT_INPUT_TIMING_CONFIG;
    var8 = var8.ChatInputActionType;
    var _closure1_slot7 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot8 = var9;
    var9 = var8.Fragment;
    var _closure1_slot9 = var9;
    var8 = var8.jsxs;
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['actions'] = var10;
    var10 = {};
    var11 = 5;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CARD_SECONDARY_BG;
    var10['backgroundColor'] = var14;
    var4['themedChatInput'] = var10;
    var10 = {};
    var14 = 6;
    var15 = var6[var14];
    var15 = var5.bind(var1)(var15);
    var15 = var15.SMALL_BUTTON_HEIGHT;
    var14 = var6[var14];
    var14 = var5.bind(var1)(var14);
    var14 = var14.SMALL_BUTTON_PADDING;
    var14 = var15 + var14;
    var10['maxHeight'] = var14;
    var4['buttonWrapper'] = var10;
    var10 = {'marginLeft': 8, 'marginRight': 4, 'paddingTop': 8, 'paddingBottom': 8, 'width': 24};
    var10['height'] = var13;
    var4['moreButton'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_BRAND;
    var10['tintColor'] = var11;
    var4['activeBrand'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = "function ChatInputActionsTsx1(){const{withTiming,showActions,timingConfig,interpolate,showPhotosOnly,CHAT_INPUT_ACTION_BUTTON_WIDTH,actionButtonsWidth}=this.__closure;return{overflow:'hidden',opacity:withTiming(showActions?1:0,timingConfig),width:withTiming(interpolate(showActions?1:0,[0,1],[0,showPhotosOnly?CHAT_INPUT_ACTION_BUTTON_WIDTH:actionButtonsWidth]),timingConfig)};}";
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = "function ChatInputActionsTsx2(){const{withTiming,showActions,timingConfig,interpolate,CHAT_INPUT_MORE_BUTTON_WIDTH}=this.__closure;return{overflow:'hidden',opacity:withTiming(showActions?0:1,timingConfig),width:withTiming(interpolate(showActions?0:1,[0,1],[0,CHAT_INPUT_MORE_BUTTON_WIDTH]),timingConfig)};}";
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.canStartThreads;
            var _closure2_slot0 = var10;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var12 = var1.isAppLauncherEnabled;
            var18 = var1.keyboardType;
            var2 = var1.onPressAction;
            var _closure2_slot2 = var2;
            var2 = var1.shouldPhotosButtonBeDisabled;
            var _closure2_slot3 = var2;
            var2 = var1.shouldShowHideChatInputButton;
            var6 = var1.shouldShowGiftButton;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot12;
            var14 = var1.bind(var4)();
            var _closure2_slot4 = var14;
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 7;
            var3 = var1[var3];
            var8 = var11.bind(var4)(var3);
            var7 = var8.useClientThemesOverride;
            var3 = var14.themedChatInput;
            var3 = var7.bind(var8)(var3);
            var _closure2_slot5 = var3;
            var7 = _closure1_slot1;
            var3 = 8;
            var3 = var1[var3];
            var8 = var7.bind(var4)(var3);
            var7 = {};
            var3 = true;
            var7['includeCustomKeyboard'] = var3;
            var7 = var8.bind(var4)(var7);
            var8 = 9;
            var8 = var1[var8];
            var9 = var11.bind(var4)(var8);
            var8 = var9.useKeyboardContextForType;
            var20 = 10;
            var1 = var1[var20];
            var1 = var11.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var8.bind(var9)(var1);
            var9 = var1.keyboardWillOpen;
            var19 = _closure1_slot4;
            var8 = var19.useState;
            var1 = false;
            var1 = var8.bind(var19)(var1);
            var17 = _closure1_slot3;
            var16 = 2;
            var11 = var17.bind(var4)(var1, var16);
            var1 = 0;
            var8 = var11[var1];
            var13 = 1;
            var11 = var11[var13];
            var _closure2_slot6 = var11;
            var11 = var19.useState;
            var11 = var11.bind(var19)(var3);
            var11 = var17.bind(var4)(var11, var16);
            var1 = var11[var1];
            var11 = var11[var13];
            var _closure2_slot7 = var11;
            var16 = var19.useMemo;
            var13 = function() {
                var1 = {};
                var3 = function onDismissActions(arg1) {
                    var4 = _closure2_slot6;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var3 = function onShowActions(arg1) {
                    var4 = _closure2_slot6;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onShowActions'] = var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var3 = function showActionsImperativeApi() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var1['showActionsImperativeApi'] = var3;
                var2 = function onShowActions() {
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onShowActions'] = var2;
                return var1;
            };
            var11 = new Array(0);
            var11 = var16.bind(var19)(var13, var11);
            var17 = var11.showActionsImperativeApi;
            var11 = var11.onShowActions;
            var16 = var19.useImperativeHandle;
            var13 = arg2;
            var13 = var16.bind(var19)(var13, var17);
            var17 = new Array(0);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var17.push;
            var13 = {};
            var19 = _closure1_slot7;
            var19 = var19.HIDE_CHAT_INPUT;
            var13['type'] = var19;
            var13 = var16.bind(var17)(var13);
case 2:
            var16 = var17.push;
            var13 = {};
            var19 = _closure1_slot7;
            var19 = var19.PHOTOS;
            var13['type'] = var19;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var20];
            var19 = var21.bind(var4)(var19);
            var19 = var19.KeyboardTypes;
            var19 = var19.MEDIA;
            var19 = var18 === var19;
            var13['active'] = var19;
            var13 = var16.bind(var17)(var13);
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var17.push;
            var12 = {};
            var16 = _closure1_slot7;
            var16 = var16.APPS;
            var12['type'] = var16;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.KeyboardTypes;
            var16 = var16.APP_LAUNCHER;
            var16 = var18 === var16;
            var12['active'] = var16;
            var12 = var13.bind(var17)(var12);
case 4:
            var3 = var3 === var10;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var9;
case 8:
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var8;
case 10:
            var3 = var7;
case 6:
            _closure2_slot8 = var3;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var7 = var17.push;
            var6 = {};
            var8 = _closure1_slot7;
            var8 = var8.NITRO_GIFT;
            var6['type'] = var8;
            var6 = var7.bind(var17)(var6);
            _fun0001_ip = 15; continue _fun0001;
case 12:
            if(!var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var17.push;
            var3 = {};
            var7 = _closure1_slot7;
            var7 = var7.THREAD;
            var3['type'] = var7;
            var3 = var6.bind(var17)(var3);
case 15:
            var9 = var1;
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = !var2;
case 17:
            _closure2_slot9 = var9;
            var18 = !var1;
            _closure2_slot10 = var18;
            var1 = var17.length;
            var16 = _closure1_slot5;
            var19 = var1 * var16;
            _closure2_slot11 = var19;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var1 = var13[var6];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function k() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 12;
                    var3 = var3[var4];
                    var8 = undefined;
                    var10 = var5.bind(var8)(var3);
                    var7 = var10.withTiming;
                    var5 = _closure2_slot9;
                    var6 = 0;
                    if(!var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = 1;
case 19:
                    var5 = _closure1_slot11;
                    var5 = var7.bind(var10)(var6, var5);
                    var1['opacity'] = var5;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var5 = var7.bind(var8)(var4);
                    var4 = var5.withTiming;
                    var6 = 11;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.interpolate;
                    var6 = _closure2_slot9;
                    var9 = 0;
                    if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var9 = 1;
case 21:
                    var6 = _closure2_slot10;
                    if(var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var3 = _closure2_slot11;
                    _fun0002_ip = 25; continue _fun0002;
case 23:
                    var3 = _closure1_slot5;
case 25:
                    var6 = [0];
                    var6[1] = var3;
                    var3 = [0, 1];
                    var3 = var7.bind(var8)(var9, var3, var6);
                    var2 = _closure1_slot11;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['width'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var10 = 12;
            var8 = var13[var10];
            var8 = var12.bind(var4)(var8);
            var8 = var8.withTiming;
            var7['withTiming'] = var8;
            var7['showActions'] = var9;
            var8 = _closure1_slot11;
            var7['timingConfig'] = var8;
            var20 = var13[var6];
            var20 = var12.bind(var4)(var20);
            var20 = var20.interpolate;
            var7['interpolate'] = var20;
            var7['showPhotosOnly'] = var18;
            var7['CHAT_INPUT_ACTION_BUTTON_WIDTH'] = var16;
            var7['actionButtonsWidth'] = var19;
            var1['__closure'] = var7;
            var7 = 10943726791298.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot13;
            var1['__initData'] = var7;
            var18 = var2.bind(var3)(var1);
            var1 = var13[var6];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function Y() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var2 = 'hidden';
                    var1['overflow'] = var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 12;
                    var3 = var3[var4];
                    var8 = undefined;
                    var10 = var5.bind(var8)(var3);
                    var7 = var10.withTiming;
                    var5 = _closure2_slot9;
                    var9 = 1;
                    var6 = var9;
                    if(!var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = 0;
case 26:
                    var5 = _closure1_slot11;
                    var5 = var7.bind(var10)(var6, var5);
                    var1['opacity'] = var5;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = var10[var4];
                    var5 = var7.bind(var8)(var4);
                    var4 = var5.withTiming;
                    var6 = 11;
                    var6 = var10[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.interpolate;
                    var3 = _closure2_slot9;
                    if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 28:
                    var9 = 0;
case 21:
                    var3 = _closure1_slot6;
                    var6 = [0];
                    var6[1] = var3;
                    var3 = [0, 1];
                    var3 = var7.bind(var8)(var9, var3, var6);
                    var2 = _closure1_slot11;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['width'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.withTiming;
            var7['withTiming'] = var10;
            var7['showActions'] = var9;
            var7['timingConfig'] = var8;
            var8 = var13[var6];
            var8 = var12.bind(var4)(var8);
            var8 = var8.interpolate;
            var7['interpolate'] = var8;
            var8 = _closure1_slot6;
            var7['CHAT_INPUT_MORE_BUTTON_WIDTH'] = var8;
            var1['__closure'] = var7;
            var7 = 980499559780.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot14;
            var1['__initData'] = var7;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var5 = var13[var6];
            var5 = var7.bind(var4)(var5);
            var10 = var5.View;
            var5 = {};
            var20 = var14.actions;
            var16 = new Array(3);
            var16[0] = var20;
            var16[1] = var18;
            var18 = {};
            var18['maxWidth'] = var19;
            var16[2] = var18;
            var5['style'] = var16;
            var16 = var17.map;
            var15 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var2 = var1.type;
                    var6 = var1.active;
                    var1 = _closure1_slot7;
                    var1 = var1.HIDE_CHAT_INPUT;
                    if(!(var1 !== var2)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var1 = _closure1_slot7;
                    var1 = var1.PHOTOS;
                    if(!(var1 !== var2)) { _fun0004_ip = 31; continue _fun0004 }
case 19:
                    var1 = _closure1_slot7;
                    var1 = var1.APPS;
                    if(!(var1 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var1 = _closure1_slot7;
                    var1 = var1.THREAD;
                    if(!(var1 !== var2)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var1 = _closure1_slot7;
                    var1 = var1.NITRO_GIFT;
                    if(!(var1 !== var2)) { _fun0004_ip = 34; continue _fun0004 }
case 36:
                    var1 = undefined;
                    return var1;
case 34:
                    var9 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var10 = _closure2_slot0;
                    var2['canStartThreads'] = var10;
                    var10 = _closure2_slot1;
                    var2['channel'] = var10;
                    var10 = _closure2_slot9;
                    var10 = !var10;
                    var2['disabled'] = var10;
                    var10 = _closure2_slot2;
                    var2['onPress'] = var10;
                    var10 = _closure2_slot4;
                    var10 = var10.buttonWrapper;
                    var2['styleButtonWrapper'] = var10;
                    var10 = _closure2_slot5;
                    var2['styleButton'] = var10;
                    var1 = _closure2_slot8;
                    var2['shouldShowThread'] = var1;
                    var1 = 'gift-or-thread';
                    var1 = var9.bind(var4)(var3, var2, var1);
                    return var1;
case 32:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['active'] = var6;
                    var10 = _closure2_slot1;
                    var1['channel'] = var10;
                    var10 = _closure2_slot9;
                    var10 = !var10;
                    var1['disabled'] = var10;
                    var10 = _closure2_slot2;
                    var1['onPress'] = var10;
                    var10 = _closure2_slot5;
                    var1['styleButton'] = var10;
                    var9 = _closure2_slot4;
                    var9 = var9.activeBrand;
                    var1['styleActiveIcon'] = var9;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
case 31:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 13;
                    var1 = var13[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var12 = _closure1_slot0;
                    var9 = 14;
                    var10 = var13[var9];
                    var10 = var12.bind(var3)(var10);
                    var14 = var10.intl;
                    var11 = var14.string;
                    var10 = var13[var9];
                    var10 = var12.bind(var3)(var10);
                    var10 = var10.t;
                    var10 = var10.aDZSu7;
                    var10 = var11.bind(var14)(var10);
                    var1['accessibilityLabel'] = var10;
                    var10 = var13[var9];
                    var10 = var12.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.o7j1jI;
                    var9 = var10.bind(var11)(var9);
                    var1['accessibilityHint'] = var9;
                    var9 = {};
                    var9['expanded'] = var6;
                    var1['accessibilityState'] = var9;
                    var1['active'] = var6;
                    var10 = _closure2_slot4;
                    var10 = var10.activeBrand;
                    var1['activeIconStyle'] = var10;
                    var10 = _closure2_slot9;
                    var10 = !var10;
                    if(var10) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var10 = _closure2_slot3;
case 37:
                    var1['disabled'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 16;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.MediaKeyboardButtonIcon;
                    var1['IconComponent'] = var10;
                    var10 = function onPress(arg1) {
                        var4 = _closure2_slot2;
                        var1 = _closure1_slot7;
                        var3 = var1.PHOTOS;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var10;
                    var9 = _closure2_slot5;
                    var1['style'] = var9;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
case 29:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 13;
                    var1 = var10[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = 14;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var13 = var11.intl;
                    var12 = var13.string;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.mAdygY;
                    var11 = var12.bind(var13)(var11);
                    var1['accessibilityLabel'] = var11;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.nAmmoq;
                    var8 = var11.bind(var12)(var8);
                    var1['accessibilityHint'] = var8;
                    var1['active'] = var6;
                    var8 = _closure2_slot4;
                    var8 = var8.activeBrand;
                    var1['activeIconStyle'] = var8;
                    var8 = _closure2_slot9;
                    var8 = !var8;
                    var1['disabled'] = var8;
                    var8 = 15;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.ChevronSmallLeftIcon;
                    var1['IconComponent'] = var8;
                    var7 = function onPress(arg1) {
                        var4 = _closure2_slot2;
                        var1 = _closure1_slot7;
                        var3 = var1.HIDE_CHAT_INPUT;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var7;
                    var6 = _closure2_slot5;
                    var1['style'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var15 = var16.bind(var17)(var15);
            var5['children'] = var15;
            var10 = var8.bind(var4)(var10, var5);
            var5 = new Array(2);
            var5[0] = var10;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var9;
            var9 = 19;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var10 = var9.PressableOpacity;
            var9 = {};
            var14 = var14.moreButton;
            var9['style'] = var14;
            var14 = 'button';
            var9['accessibilityRole'] = var14;
            var14 = 14;
            var15 = var13[var14];
            var15 = var12.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var12.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.UKOtz8;
            var14 = var15.bind(var16)(var14);
            var9['accessibilityLabel'] = var14;
            var9['onPress'] = var11;
            var11 = 20;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ChevronSmallRightIcon;
            var11 = {};
            var11 = var8.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
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
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();