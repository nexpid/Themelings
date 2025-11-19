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
    var4 = var8.CHAT_INPUT_TIMING_CONFIG;
    var8 = var8.ChatInputActionType;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot7 = var9;
    var8 = var8.Fragment;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var4;
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
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = "function ChatInputActionsTsx1(){const{withTiming,showPhotosOnly,CHAT_INPUT_ACTION_BUTTON_WIDTH,actionButtonsWidth,timingConfig}=this.__closure;return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?CHAT_INPUT_ACTION_BUTTON_WIDTH:actionButtonsWidth,timingConfig)};}";
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.canStartThreads;
            var _closure2_slot0 = var14;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var15 = var1.isAppLauncherEnabled;
            var18 = var1.keyboardType;
            var2 = var1.onPressAction;
            var _closure2_slot2 = var2;
            var2 = var1.shouldPhotosButtonBeDisabled;
            var _closure2_slot3 = var2;
            var2 = var1.shouldShowGiftButton;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot10;
            var8 = var1.bind(var4)();
            var _closure2_slot4 = var8;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 7;
            var1 = var21[var1];
            var5 = var23.bind(var4)(var1);
            var3 = var5.useClientThemesOverride;
            var1 = var8.themedChatInput;
            var1 = var3.bind(var5)(var1);
            var _closure2_slot5 = var1;
            var1 = 8;
            var1 = var21[var1];
            var1 = var23.bind(var4)(var1);
            var5 = var1.ChatInputIaMobileExperiment;
            var3 = var5.useConfig;
            var1 = {};
            var9 = 'ChatInputActions';
            var1['location'] = var9;
            var1 = var3.bind(var5)(var1);
            var16 = var1.moveAppsToOverflow;
            var10 = var1.moveThreadToOverflow;
            var3 = var1.moveGiftToOverflow;
            var5 = _closure1_slot1;
            var1 = 9;
            var1 = var21[var1];
            var9 = var5.bind(var4)(var1);
            var1 = {};
            var5 = true;
            var1['includeCustomKeyboard'] = var5;
            var11 = var9.bind(var4)(var1);
            var1 = 10;
            var1 = var21[var1];
            var12 = var23.bind(var4)(var1);
            var9 = var12.useKeyboardContextForType;
            var20 = 11;
            var1 = var21[var20];
            var1 = var23.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var9.bind(var12)(var1);
            var13 = var1.keyboardWillOpen;
            var1 = 12;
            var1 = var21[var1];
            var9 = var23.bind(var4)(var1);
            var1 = var9.useIsShowingAppLauncherWithoutDedicatedAppButton;
            var22 = var1.bind(var9)();
            var _closure2_slot6 = var22;
            var24 = _closure1_slot4;
            var9 = var24.useState;
            var1 = false;
            var1 = var9.bind(var24)(var1);
            var25 = _closure1_slot3;
            var19 = 2;
            var9 = var25.bind(var4)(var1, var19);
            var1 = 0;
            var12 = var9[var1];
            var17 = 1;
            var9 = var9[var17];
            var _closure2_slot7 = var9;
            var9 = var24.useState;
            var9 = var9.bind(var24)(var5);
            var9 = var25.bind(var4)(var9, var19);
            var1 = var9[var1];
            var9 = var9[var17];
            var _closure2_slot8 = var9;
            var19 = var24.useMemo;
            var17 = function() {
                var1 = {};
                var3 = function onDismissActions(arg1) {
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var3 = function onShowActions(arg1) {
                    var4 = _closure2_slot7;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onShowActions'] = var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var2 = function showActionsImperativeApi() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var1['showActionsImperativeApi'] = var2;
                return var1;
            };
            var9 = new Array(0);
            var9 = var19.bind(var24)(var17, var9);
            var19 = var9.showActionsImperativeApi;
            var17 = var24.useImperativeHandle;
            var9 = arg2;
            var9 = var17.bind(var24)(var9, var19);
            var9 = new Array(0);
            var19 = var9.push;
            var17 = {};
            var24 = _closure1_slot6;
            var24 = var24.PHOTOS;
            var17['type'] = var24;
            var21 = var21[var20];
            var21 = var23.bind(var4)(var21);
            var21 = var21.KeyboardTypes;
            var21 = var21.MEDIA;
            var21 = var18 === var21;
            if(var21) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var22;
case 2:
            var17['active'] = var21;
            var17 = var19.bind(var9)(var17);
            if(!var15) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = !var16;
case 4:
            if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var9.push;
            var15 = {};
            var17 = _closure1_slot6;
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
case 6:
            var5 = var5 === var14;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = var13;
case 10:
            if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var12;
case 12:
            var5 = var11;
case 8:
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = !var10;
case 14:
            _closure2_slot9 = var5;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = !var3;
case 18:
            if(!var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.NITRO_GIFT;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
            _fun0001_ip = 20; continue _fun0001;
case 16:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.THREAD;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
case 20:
            var14 = !var1;
            _closure2_slot10 = var14;
            var1 = var9.length;
            var13 = _closure1_slot5;
            var11 = var1 * var13;
            _closure2_slot11 = var11;
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 13;
            var1 = var12[var5];
            var3 = var16.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function k() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {'overflow': 'hidden', 'opacity': 1};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot10;
                    if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var3 = _closure2_slot11;
                    _fun0002_ip = 24; continue _fun0002;
case 22:
                    var3 = _closure1_slot5;
case 24:
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['width'] = var2;
                    return var1;
                }
            };
            var10 = {};
            var15 = 14;
            var15 = var12[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withTiming;
            var10['withTiming'] = var15;
            var10['showPhotosOnly'] = var14;
            var10['CHAT_INPUT_ACTION_BUTTON_WIDTH'] = var13;
            var10['actionButtonsWidth'] = var11;
            var13 = _closure1_slot9;
            var10['timingConfig'] = var13;
            var1['__closure'] = var10;
            var10 = 2324760422184.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot11;
            var1['__initData'] = var10;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = arg2;
                    var2 = var1.type;
                    var6 = var1.active;
                    var1 = _closure1_slot6;
                    var1 = var1.PHOTOS;
                    if(!(var1 !== var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = _closure1_slot6;
                    var1 = var1.APPS;
                    if(!(var1 !== var2)) { _fun0003_ip = 27; continue _fun0003 }
case 23:
                    var1 = _closure1_slot6;
                    var1 = var1.THREAD;
                    if(!(var1 !== var2)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var1 = _closure1_slot6;
                    var1 = var1.NITRO_GIFT;
                    if(!(var1 !== var2)) { _fun0003_ip = 28; continue _fun0003 }
case 30:
                    var1 = undefined;
                    return var1;
case 28:
                    var8 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var9 = _closure2_slot0;
                    var2['canStartThreads'] = var9;
                    var9 = _closure2_slot1;
                    var2['channel'] = var9;
                    var9 = _closure2_slot2;
                    var2['onPress'] = var9;
                    var9 = _closure2_slot4;
                    var9 = var9.buttonWrapper;
                    var2['styleButtonWrapper'] = var9;
                    var9 = _closure2_slot5;
                    var2['styleButton'] = var9;
                    var1 = _closure2_slot9;
                    var2['shouldShowThread'] = var1;
                    var1 = 'gift-or-thread';
                    var1 = var8.bind(var4)(var3, var2, var1);
                    return var1;
case 27:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['active'] = var6;
                    var9 = _closure2_slot1;
                    var1['channel'] = var9;
                    var9 = _closure2_slot2;
                    var1['onPress'] = var9;
                    var9 = _closure2_slot5;
                    var1['styleButton'] = var9;
                    var8 = _closure2_slot4;
                    var8 = var8.activeBrand;
                    var1['styleActiveIcon'] = var8;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
case 25:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 15;
                    var1 = var9[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = _closure1_slot0;
                    var7 = 16;
                    var10 = var9[var7];
                    var10 = var8.bind(var3)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var9[var7];
                    var10 = var8.bind(var3)(var10);
                    var10 = var10.t;
                    var10 = var10.aDZSuz;
                    var10 = var11.bind(var12)(var10);
                    var1['accessibilityLabel'] = var10;
                    var10 = var9[var7];
                    var10 = var8.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.o7j1jA;
                    var7 = var10.bind(var11)(var7);
                    var1['accessibilityHint'] = var7;
                    var7 = {};
                    var7['expanded'] = var6;
                    var1['accessibilityState'] = var7;
                    var1['active'] = var6;
                    var7 = _closure2_slot4;
                    var7 = var7.activeBrand;
                    var1['activeIconStyle'] = var7;
                    var7 = _closure2_slot3;
                    var1['disabled'] = var7;
                    var7 = 12;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.MediaKeyboardButtonIcon;
                    var1['IconComponent'] = var7;
                    var7 = function onPress(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = _closure2_slot2;
                            var2 = _closure2_slot6;
                            var1 = _closure1_slot6;
                            if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                            var3 = var1.PHOTOS;
                            _fun0004_ip = 33; continue _fun0004;
case 31:
                            var3 = var1.APPS;
case 33:
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        }
                    };
                    var1['onPress'] = var7;
                    var6 = _closure2_slot5;
                    var1['style'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();