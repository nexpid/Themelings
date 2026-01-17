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
            var19 = var1.canUpload;
            var _closure2_slot4 = var19;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var1 = _closure1_slot10;
            var8 = var1.bind(var4)();
            var _closure2_slot5 = var8;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 7;
            var1 = var24[var1];
            var5 = var26.bind(var4)(var1);
            var3 = var5.useClientThemesOverride;
            var1 = var8.themedChatInput;
            var1 = var3.bind(var5)(var1);
            var _closure2_slot6 = var1;
            var1 = 8;
            var1 = var24[var1];
            var1 = var26.bind(var4)(var1);
            var5 = var1.ChatInputIaMobileExperiment;
            var3 = var5.useConfig;
            var1 = {};
            var9 = 'ChatInputActions';
            var1['location'] = var9;
            var1 = var3.bind(var5)(var1);
            var16 = var1.moveAppsToOverflow;
            var10 = var1.moveThreadToOverflow;
            var3 = var1.moveGiftToOverflow;
            var17 = var1.showAllPhotosInInputBar;
            var5 = _closure1_slot1;
            var1 = 9;
            var1 = var24[var1];
            var9 = var5.bind(var4)(var1);
            var1 = {};
            var5 = true;
            var1['includeCustomKeyboard'] = var5;
            var11 = var9.bind(var4)(var1);
            var1 = 10;
            var1 = var24[var1];
            var12 = var26.bind(var4)(var1);
            var9 = var12.useKeyboardContextForType;
            var20 = 11;
            var1 = var24[var20];
            var1 = var26.bind(var4)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var1 = var9.bind(var12)(var1);
            var13 = var1.keyboardWillOpen;
            var1 = 12;
            var1 = var24[var1];
            var9 = var26.bind(var4)(var1);
            var1 = var9.useIsShowingAppLauncherWithoutDedicatedAppButton;
            var25 = var1.bind(var9)();
            var _closure2_slot7 = var25;
            var27 = _closure1_slot4;
            var1 = var27.useState;
            var21 = false;
            var1 = var1.bind(var27)(var21);
            var28 = _closure1_slot3;
            var23 = 2;
            var9 = var28.bind(var4)(var1, var23);
            var1 = 0;
            var12 = var9[var1];
            var22 = 1;
            var9 = var9[var22];
            var _closure2_slot8 = var9;
            var9 = var27.useState;
            var9 = var9.bind(var27)(var5);
            var9 = var28.bind(var4)(var9, var23);
            var1 = var9[var1];
            var9 = var9[var22];
            var _closure2_slot9 = var9;
            var23 = var27.useMemo;
            var22 = function() {
                var1 = {};
                var3 = function onDismissActions(arg1) {
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot9;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismissActions'] = var3;
                var3 = function onShowActions(arg1) {
                    var4 = _closure2_slot8;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot9;
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
            var9 = var23.bind(var27)(var22, var9);
            var23 = var9.showActionsImperativeApi;
            var22 = var27.useImperativeHandle;
            var9 = arg2;
            var9 = var22.bind(var27)(var9, var23);
            var9 = new Array(0);
            var23 = var9.push;
            var22 = {};
            var27 = _closure1_slot6;
            var27 = var27.PHOTOS;
            var22['type'] = var27;
            var24 = var24[var20];
            var24 = var26.bind(var4)(var24);
            var24 = var24.KeyboardTypes;
            var24 = var24.MEDIA;
            var24 = var18 === var24;
            if(var24) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var24 = var25;
case 2:
            var22['active'] = var24;
            var22 = var23.bind(var9)(var22);
            if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = var19;
case 4:
            if(!var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var19 = var9.push;
            var17 = {};
            var22 = _closure1_slot6;
            var22 = var22.ALL_PHOTOS;
            var17['type'] = var22;
            var17['active'] = var21;
            var17 = var19.bind(var9)(var17);
case 6:
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = !var16;
case 8:
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
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
case 10:
            var5 = var5 === var14;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var13;
case 14:
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var12;
case 16:
            var5 = var11;
case 12:
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = !var10;
case 18:
            _closure2_slot10 = var5;
            if(var5) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!var2) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = !var3;
case 22:
            if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.NITRO_GIFT;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var3 = var9.push;
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5.THREAD;
            var2['type'] = var5;
            var2 = var3.bind(var9)(var2);
case 24:
            var14 = !var1;
            _closure2_slot11 = var14;
            var1 = var9.length;
            var13 = _closure1_slot5;
            var11 = var1 * var13;
            _closure2_slot12 = var11;
            var16 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 13;
            var1 = var12[var5];
            var3 = var16.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function Y() {
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
                    var6 = _closure2_slot11;
                    if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var3 = _closure2_slot12;
                    _fun0002_ip = 28; continue _fun0002;
case 26:
                    var3 = _closure1_slot5;
case 28:
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
                    if(!(var1 !== var2)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var1 = _closure1_slot6;
                    var1 = var1.APPS;
                    if(!(var1 !== var2)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var1 = _closure1_slot6;
                    var1 = var1.ALL_PHOTOS;
                    if(!(var1 !== var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var1 = _closure1_slot6;
                    var1 = var1.THREAD;
                    if(!(var1 !== var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var1 = _closure1_slot6;
                    var1 = var1.NITRO_GIFT;
                    if(!(var1 !== var2)) { _fun0003_ip = 35; continue _fun0003 }
case 37:
                    var1 = undefined;
                    return var1;
case 35:
                    var9 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var10 = _closure2_slot11;
                    var10 = !var10;
                    var2['accessible'] = var10;
                    var10 = _closure2_slot0;
                    var2['canStartThreads'] = var10;
                    var10 = _closure2_slot1;
                    var2['channel'] = var10;
                    var10 = _closure2_slot2;
                    var2['onPress'] = var10;
                    var10 = _closure2_slot5;
                    var10 = var10.buttonWrapper;
                    var2['styleButtonWrapper'] = var10;
                    var10 = _closure2_slot6;
                    var2['styleButton'] = var10;
                    var1 = _closure2_slot10;
                    var2['shouldShowThread'] = var1;
                    var1 = 'gift-or-thread';
                    var1 = var9.bind(var4)(var3, var2, var1);
                    return var1;
case 33:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 15;
                    var1 = var12[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var11 = _closure1_slot0;
                    var9 = 16;
                    var10 = var12[var9];
                    var10 = var11.bind(var3)(var10);
                    var13 = var10.intl;
                    var10 = var13.string;
                    var9 = var12[var9];
                    var9 = var11.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.ZT24In;
                    var9 = var10.bind(var13)(var9);
                    var1['accessibilityLabel'] = var9;
                    var10 = _closure2_slot11;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var10 = {};
                    var10['expanded'] = var6;
                    var1['accessibilityState'] = var10;
                    var1['active'] = var6;
                    var10 = _closure2_slot5;
                    var10 = var10.activeBrand;
                    var1['activeIconStyle'] = var10;
                    var10 = _closure2_slot4;
                    var10 = !var10;
                    var1['disabled'] = var10;
                    var10 = 18;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.ImageIcon;
                    var1['IconComponent'] = var10;
                    var10 = function onPress(arg1) {
                        var4 = _closure2_slot2;
                        var1 = _closure1_slot6;
                        var3 = var1.ALL_PHOTOS;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var10;
                    var9 = _closure2_slot6;
                    var1['style'] = var9;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
case 31:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = _closure2_slot11;
                    var10 = !var10;
                    var1['accessible'] = var10;
                    var1['active'] = var6;
                    var10 = _closure2_slot1;
                    var1['channel'] = var10;
                    var10 = _closure2_slot2;
                    var1['onPress'] = var10;
                    var10 = _closure2_slot6;
                    var1['styleButton'] = var10;
                    var9 = _closure2_slot5;
                    var9 = var9.activeBrand;
                    var1['styleActiveIcon'] = var9;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
case 29:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 15;
                    var1 = var10[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var9 = _closure1_slot0;
                    var8 = 16;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var13 = var11.intl;
                    var12 = var13.string;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.aDZSuz;
                    var11 = var12.bind(var13)(var11);
                    var1['accessibilityLabel'] = var11;
                    var11 = var10[var8];
                    var11 = var9.bind(var3)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.o7j1jA;
                    var8 = var11.bind(var12)(var8);
                    var1['accessibilityHint'] = var8;
                    var8 = {};
                    var8['expanded'] = var6;
                    var1['accessibilityState'] = var8;
                    var1['active'] = var6;
                    var8 = _closure2_slot5;
                    var8 = var8.activeBrand;
                    var1['activeIconStyle'] = var8;
                    var8 = _closure2_slot3;
                    var1['disabled'] = var8;
                    var8 = 12;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.MediaKeyboardButtonIcon;
                    var1['IconComponent'] = var8;
                    var7 = function onPress(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = _closure2_slot2;
                            var2 = _closure2_slot7;
                            var1 = _closure1_slot6;
                            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                            var3 = var1.PHOTOS;
                            _fun0004_ip = 40; continue _fun0004;
case 38:
                            var3 = var1.APPS;
case 40:
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        }
                    };
                    var1['onPress'] = var7;
                    var6 = _closure2_slot6;
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();