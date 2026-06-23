// app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function AppLauncherCommandViewFooter(arg1) {
        var1 = arg1;
        var11 = var1.enableSubmit;
        var19 = var1.onSubmit;
        var6 = var1.animatedStyle;
        var2 = var1.onHeightChange;
        var _closure2_slot0 = var2;
        var7 = var1.isSending;
        var _closure2_slot1 = var7;
        var15 = var1.footerStickyInsetBottom;
        var1 = _closure1_slot23;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var2 = _closure1_slot6;
        var1 = var2.useState;
        var22 = 0;
        var2 = var1.bind(var2)(var22);
        var1 = _closure1_slot5;
        var5 = 2;
        var1 = var1.bind(var4)(var2, var5);
        var20 = var1[var22];
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot2 = var1;
        var13 = _closure1_slot0;
        var17 = _closure1_slot3;
        var1 = 14;
        var1 = var17[var1];
        var9 = var13.bind(var4)(var1);
        var8 = var9.useStateFromStores;
        var1 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot10;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var14 = var8.bind(var9)(var3, var1);
        var _closure2_slot3 = var14;
        var8 = _closure1_slot6;
        var3 = var8.useState;
        var1 = false;
        var3 = var3.bind(var8)(var1);
        var1 = _closure1_slot5;
        var1 = var1.bind(var4)(var3, var5);
        var8 = var1[var22];
        var _closure2_slot4 = var8;
        var1 = var1[var2];
        var _closure2_slot5 = var1;
        var9 = 15;
        var1 = var17[var9];
        var3 = var13.bind(var4)(var1);
        var2 = var3.useAnimatedStyle;
        var1 = function h() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot4;
                var2 = {};
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var7 = 16;
                var4 = var4[var7];
                var9 = undefined;
                var12 = var5.bind(var9)(var4);
                var11 = var12.withTiming;
                var5 = _closure2_slot1;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var8 = 1;
                if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var8 = 0;
case 6:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var10 = 17;
                var4 = var5[var10];
                var4 = var6.bind(var9)(var4);
                var4 = var4.timingStandard;
                var4 = var11.bind(var12)(var8, var4);
                var2['opacity'] = var4;
                var4 = {};
                var5 = var5[var7];
                var7 = var6.bind(var9)(var5);
                var6 = var7.withTiming;
                var5 = _closure2_slot1;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var5 = 0;
                if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var5 = 100;
case 8:
                var8 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var10];
                var1 = var8.bind(var9)(var1);
                var1 = var1.timingStandard;
                var1 = var6.bind(var7)(var5, var1);
                var4['translateX'] = var1;
                var1 = new Array(1);
                var1[0] = var4;
                var2['transform'] = var1;
                var1 = var2;
                _fun0001_ip = 10; continue _fun0001;
case 4:
                var4 = 1;
                var2['opacity'] = var4;
                var4 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 15;
                var5 = var15[var12];
                var13 = undefined;
                var7 = var14.bind(var13)(var5);
                var6 = var7.withDelay;
                var5 = 16;
                var5 = var15[var5];
                var11 = var14.bind(var13)(var5);
                var10 = var11.withTiming;
                var5 = 17;
                var5 = var15[var5];
                var5 = var14.bind(var13)(var5);
                var19 = var5.timingStandard;
                var8 = function e() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 15;
                    var1 = var5[var1];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var1);
                    var6 = var7.runOnJS;
                    var1 = 18;
                    var2 = var5[var1];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.triggerHapticFeedback;
                    var2 = var6.bind(var7)(var2);
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = {};
                var12 = var15[var12];
                var12 = var14.bind(var13)(var12);
                var12 = var12.runOnJS;
                var5['runOnJS'] = var12;
                var12 = 18;
                var16 = var15[var12];
                var16 = var14.bind(var13)(var16);
                var16 = var16.triggerHapticFeedback;
                var5['triggerHapticFeedback'] = var16;
                var12 = var15[var12];
                var12 = var14.bind(var13)(var12);
                var12 = var12.HapticFeedbackTypes;
                var5['HapticFeedbackTypes'] = var12;
                var8['__closure'] = var5;
                var5 = 8545458901090.0;
                var8['__workletHash'] = var5;
                var3 = _closure1_slot25;
                var8['__initData'] = var3;
                var20 = -4;
                var18 = 'respect-motion-settings';
                var21 = var11;
                var17 = var8;
                var5 = var21[var10](var20, var19, var18, var17, var16);
                var3 = 100;
                var3 = var6.bind(var7)(var3, var5);
                var4['translateX'] = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2['transform'] = var3;
                var1 = var2;
case 10:
                _fun0001_ip = 11; continue _fun0001;
case 2:
                var1 = {};
case 11:
                return var1;
            }
        };
        var5 = {};
        var5['shouldReduceMotion'] = var14;
        var5['isPressedDown'] = var8;
        var8 = var17[var9];
        var8 = var13.bind(var4)(var8);
        var8 = var8.withDelay;
        var5['withDelay'] = var8;
        var8 = 16;
        var8 = var17[var8];
        var8 = var13.bind(var4)(var8);
        var8 = var8.withTiming;
        var5['withTiming'] = var8;
        var8 = 17;
        var8 = var17[var8];
        var8 = var13.bind(var4)(var8);
        var8 = var8.timingStandard;
        var5['timingStandard'] = var8;
        var8 = var17[var9];
        var8 = var13.bind(var4)(var8);
        var8 = var8.runOnJS;
        var5['runOnJS'] = var8;
        var8 = 18;
        var14 = var17[var8];
        var14 = var13.bind(var4)(var14);
        var14 = var14.triggerHapticFeedback;
        var5['triggerHapticFeedback'] = var14;
        var8 = var17[var8];
        var8 = var13.bind(var4)(var8);
        var8 = var8.HapticFeedbackTypes;
        var5['HapticFeedbackTypes'] = var8;
        var5['isSending'] = var7;
        var1['__closure'] = var5;
        var5 = 576353278359.0;
        var1['__workletHash'] = var5;
        var5 = _closure1_slot24;
        var1['__initData'] = var5;
        var14 = var2.bind(var3)(var1);
        var3 = _closure1_slot21;
        var16 = _closure1_slot1;
        var1 = var17[var9];
        var1 = var16.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var5 = function onLayout(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var4 = _closure2_slot2;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var5 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)(var3);
case 12:
                return var1;
            }
        };
        var1['onLayout'] = var5;
        var7 = var10.footerContainer;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot20;
        var5 = 19;
        var5 = var17[var5];
        var6 = var16.bind(var4)(var5);
        var5 = {};
        var8 = {'width': '100%', 'top': 4294967284, 'bottom': null, 'left': null, 'position': 'absolute'};
        var15 = -var15;
        var8['bottom'] = var15;
        var15 = var10.footerContainer;
        var15 = var15.paddingHorizontal;
        var8['left'] = var15;
        var5['style'] = var8;
        var8 = _closure1_slot18;
        var8 = var8.START;
        var5['start'] = var8;
        var8 = {};
        var8['x'] = var22;
        var15 = 12;
        var20 = var20 + var15;
        var20 = var15 / var20;
        var8['y'] = var20;
        var5['end'] = var8;
        var8 = 20;
        var8 = var17[var8];
        var21 = var13.bind(var4)(var8);
        var20 = var21.hexWithOpacity;
        var8 = var10.linearGradient;
        var8 = var8.backgroundColor;
        var20 = var20.bind(var21)(var8, var22);
        var8 = new Array(2);
        var8[0] = var20;
        var20 = var10.linearGradient;
        var20 = var20.backgroundColor;
        var8[1] = var20;
        var5['colors'] = var8;
        var8 = 'none';
        var5['pointerEvents'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot20;
        var6 = 21;
        var6 = var17[var6];
        var6 = var13.bind(var4)(var6);
        var7 = var6.BaseTextButton;
        var6 = {};
        var6['onPress'] = var19;
        var19 = function onPressIn() {
            var3 = _closure2_slot5;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var6['onPressIn'] = var19;
        var18 = function onPressOut() {
            var3 = _closure2_slot5;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var6['onPressOut'] = var18;
        var11 = !var11;
        var6['disabled'] = var11;
        var10 = var10.submitButton;
        var6['style'] = var10;
        var10 = 22;
        var11 = var17[var10];
        var11 = var13.bind(var4)(var11);
        var18 = var11.intl;
        var11 = var18.string;
        var10 = var17[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.TXNS7S;
        var10 = var11.bind(var18)(var10);
        var6['text'] = var10;
        var11 = _closure1_slot20;
        var9 = var17[var9];
        var9 = var16.bind(var4)(var9);
        var10 = var9.View;
        var9 = {};
        var9['style'] = var14;
        var14 = _closure1_slot20;
        var12 = 23;
        var12 = var17[var12];
        var12 = var13.bind(var4)(var12);
        var13 = var12.SendMessageIcon;
        var12 = {};
        var18 = {};
        var19 = 8;
        var18['marginLeft'] = var19;
        var12['style'] = var18;
        var15 = var17[var15];
        var15 = var16.bind(var4)(var15);
        var15 = var15.unsafe_rawColors;
        var15 = var15.WHITE;
        var12['color'] = var15;
        var15 = 'sm';
        var12['size'] = var15;
        var12 = var14.bind(var4)(var13, var12);
        var9['children'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['icon'] = var9;
        var9 = 'end';
        var6['iconPosition'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function AppLauncherCommandViewInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var12 = var2.command;
            var _closure2_slot0 = var12;
            var41 = var2.context;
            var _closure2_slot1 = var41;
            var9 = var2.section;
            var13 = var2.preSelectedCommand;
            var3 = var2.loading;
            var1 = var2.hasPermissions;
            var47 = var2.installOnDemand;
            var _closure2_slot2 = var47;
            var45 = var2.sectionName;
            var _closure2_slot3 = var45;
            var44 = var2.analyticsLocation;
            var _closure2_slot4 = var44;
            var20 = var2.onCommandExecuted;
            var _closure2_slot5 = var20;
            var4 = undefined;
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
            var _closure2_slot40 = var4;
            var _closure2_slot41 = var4;
            var _closure2_slot42 = var4;
            var _closure2_slot43 = var4;
            var _closure2_slot44 = var4;
            var _closure2_slot45 = var4;
            var _closure2_slot46 = var4;
            var _closure2_slot47 = var4;
            var _closure2_slot48 = var4;
            var _closure2_slot49 = var4;
            var _closure2_slot50 = var4;
            var _closure2_slot51 = var4;
            var _closure2_slot52 = var4;
            var _closure2_slot53 = var4;
            var _closure2_slot54 = var4;
            var _closure2_slot55 = var4;
            var _closure2_slot56 = var4;
            var _closure2_slot57 = var4;
            var _closure2_slot58 = var4;
            var _closure2_slot59 = var4;
            var _closure2_slot60 = var4;
            var _closure2_slot61 = var4;
            var2 = _closure1_slot23;
            var5 = var2.bind(var4)();
            var _closure2_slot6 = var5;
            var2 = _closure1_slot15;
            var7 = var2.bind(var4)();
            var _closure2_slot7 = var7;
            var8 = _closure1_slot0;
            var2 = _closure1_slot3;
            var32 = 24;
            var2 = var2[var32];
            var8 = var8.bind(var4)(var2);
            var2 = var8.useRequiredAppLauncherContext;
            var2 = var2.bind(var8)();
            var46 = var2.keyboardCloseReasonRef;
            var _closure2_slot8 = var46;
            var8 = var2.entrypoint;
            var _closure2_slot9 = var8;
            var42 = var2.chatInputRef;
            var _closure2_slot10 = var42;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var2 = null;
            var28 = var10.bind(var11)(var2);
            var _closure2_slot11 = var28;
            var14 = _closure1_slot6;
            var11 = var14.useRef;
            var10 = {};
            var10 = var11.bind(var14)(var10);
            var _closure2_slot12 = var10;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var15 = 0;
            var10 = var10.bind(var11)(var15);
            var _closure2_slot13 = var10;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var10 = var10.bind(var11)(var15);
            var _closure2_slot14 = var10;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var10 = var10.bind(var11)(var15);
            var _closure2_slot15 = var10;
            var10 = var2 == var13;
            var11 = undefined;
            if(var10) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var11 = var13.commandId;
case 14:
            var14 = var2 == var12;
            var10 = undefined;
            if(var14) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var10 = var12.id;
case 16:
            var19 = null;
            if(!(var11 === var10)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var11 = var2 == var13;
            var10 = undefined;
            if(var11) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var10 = var13.prefilledOptions;
case 20:
            var11 = var2 != var10;
            var19 = null;
            if(!var11) { _fun0003_ip = 18; continue _fun0003 }
case 22:
            var19 = var10;
case 18:
            _closure2_slot16 = var19;
            var10 = var41.channel;
            var35 = var10.guild_id;
            _closure2_slot17 = var35;
            var26 = _closure1_slot0;
            var38 = _closure1_slot3;
            var10 = 14;
            var10 = var38[var10];
            var16 = var26.bind(var4)(var10);
            var14 = var16.useStateFromStores;
            var10 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getRolesSnapshot;
                var1 = _closure2_slot17;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var14.bind(var16)(var11, var10);
            _closure2_slot18 = var23;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var30 = false;
            var10 = var10.bind(var11)(var30);
            _closure2_slot19 = var10;
            var16 = _closure1_slot6;
            var14 = var16.useRef;
            var10 = global;
            var17 = var10.Date;
            var11 = var17.now;
            var11 = var11.bind(var17)();
            var11 = var14.bind(var16)(var11);
            _closure2_slot20 = var11;
            var14 = _closure1_slot6;
            var11 = var14.useRef;
            var11 = var11.bind(var14)(var2);
            _closure2_slot21 = var11;
            var14 = _closure1_slot6;
            var11 = var14.useRef;
            var11 = var11.bind(var14)(var30);
            _closure2_slot22 = var11;
            var17 = _closure1_slot6;
            var16 = var17.useEffect;
            var14 = new Array(1);
            var14[0] = var12;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var3 = undefined;
                    return var3;
case 23:
                    var3 = _closure2_slot20;
                    var3 = var3.current;
                    var _closure3_slot0 = var3;
                    var3 = _closure2_slot19;
                    var3 = var3.current;
                    var _closure3_slot1 = var3;
                    var2 = _closure2_slot21;
                    var2 = var2.current;
                    var _closure3_slot2 = var2;
                    var1 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = _closure2_slot22;
                            var1 = var1.current;
                            if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = _closure3_slot0;
                            var8 = var2 - var1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 25;
                            var2 = var4[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot16;
                            var2 = var1.APP_LAUNCHER_COMMAND_CLOSED;
                            var1 = {};
                            var1['time_spent'] = var8;
                            var6 = _closure2_slot0;
                            var8 = var6.options;
                            var6 = null;
                            var9 = var6 == var8;
                            if(var9) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var7 = var8.length;
case 27:
                            var8 = var6 != var7;
                            var6 = 0;
                            if(!var8) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                            var6 = var7;
case 29:
                            var1['num_options'] = var6;
                            var6 = _closure3_slot1;
                            var1['used_options'] = var6;
                            var5 = _closure3_slot2;
                            var1['last_used_option_type'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 25:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var11 = var16.bind(var17)(var11, var14);
            var16 = _closure1_slot6;
            var14 = var16.useCallback;
            var11 = new Array(3);
            var11[0] = var42;
            var11[1] = var46;
            var11[2] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var3 = _closure2_slot8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 24;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.AppLauncherKeyboardCloseReason;
                    var2 = var2.BACK;
                    var3['current'] = var2;
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0006_ip = 33; continue _fun0006;
case 31:
                    var2 = _closure2_slot7;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var14.bind(var16)(var7, var11);
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var7 = new Array(0);
            var14 = var14.bind(var16)(var7);
            var7 = _closure1_slot5;
            var27 = 2;
            var7 = var7.bind(var4)(var14, var27);
            var36 = var7[var15];
            var24 = 1;
            var7 = var7[var24];
            _closure2_slot23 = var7;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var7 = new Array(0);
            var14 = var14.bind(var16)(var7);
            var7 = _closure1_slot5;
            var14 = var7.bind(var4)(var14, var27);
            var7 = var14[var15];
            _closure2_slot24 = var7;
            var14 = var14[var24];
            _closure2_slot25 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useRef;
            var14 = var10.Set;
            var18 = var14.prototype;
            var18 = Object.create(var18, {constructor: {value: var14}});
            var53 = var18;
            var14 = new var53[var14](var52);
            var14 = var14 instanceof Object ? var14 : var18;
            var14 = var16.bind(var17)(var14);
            _closure2_slot26 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useState;
            var14 = new Array(0);
            var16 = var16.bind(var17)(var14);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var27);
            var39 = var14[var15];
            _closure2_slot27 = var39;
            var14 = var14[var24];
            _closure2_slot28 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useRef;
            var14 = var10.Set;
            var18 = var14.prototype;
            var18 = Object.create(var18, {constructor: {value: var14}});
            var53 = var18;
            var14 = new var53[var14](var52);
            var14 = var14 instanceof Object ? var14 : var18;
            var14 = var16.bind(var17)(var14);
            _closure2_slot29 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useState;
            var14 = new Array(0);
            var16 = var16.bind(var17)(var14);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var27);
            var34 = var14[var15];
            var14 = var14[var24];
            _closure2_slot30 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useRef;
            var14 = {};
            var14 = var16.bind(var17)(var14);
            _closure2_slot31 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useState;
            var14 = {};
            var16 = var16.bind(var17)(var14);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var27);
            var31 = var14[var15];
            _closure2_slot32 = var31;
            var14 = var14[var24];
            _closure2_slot33 = var14;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var22 = true;
            var16 = var14.bind(var16)(var22);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var27);
            var21 = var14[var15];
            var14 = var14[var24];
            _closure2_slot34 = var14;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var10 = var10.Set;
            var17 = var10.prototype;
            var17 = Object.create(var17, {constructor: {value: var10}});
            var53 = var17;
            var10 = new var53[var10](var52);
            var10 = var10 instanceof Object ? var10 : var17;
            var14 = var14.bind(var16)(var10);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var14, var27);
            var14 = var10[var15];
            _closure2_slot35 = var14;
            var10 = var10[var24];
            _closure2_slot36 = var10;
            var16 = _closure1_slot6;
            var10 = var16.useState;
            var16 = var10.bind(var16)(var15);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var16, var27);
            var25 = var10[var15];
            _closure2_slot37 = var25;
            var10 = var10[var24];
            _closure2_slot38 = var10;
            var16 = _closure1_slot6;
            var10 = var16.useState;
            var16 = var10.bind(var16)(var2);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var16, var27);
            var29 = var10[var15];
            _closure2_slot39 = var29;
            var10 = var10[var24];
            _closure2_slot40 = var10;
            var33 = _closure1_slot1;
            var10 = 26;
            var16 = var38[var10];
            var17 = var33.bind(var4)(var16);
            var16 = {'includeCustomKeyboardHeight': false, 'includeKeyboardHeight': true};
            var16 = var17.bind(var4)(var16);
            var16 = var16.insets;
            var16 = var16.bottom;
            var10 = var38[var10];
            var17 = var33.bind(var4)(var10);
            var10 = {'includeCustomKeyboardHeight': false, 'includeKeyboardHeight': true};
            var10 = var17.bind(var4)(var10);
            var10 = var10.insets;
            var18 = _closure1_slot6;
            var17 = var18.useState;
            var18 = var17.bind(var18)(var15);
            var17 = _closure1_slot5;
            var18 = var17.bind(var4)(var18, var27);
            var17 = var18[var15];
            var18 = var18[var24];
            var10 = var10.bottom;
            var24 = var10 + var17;
            var10 = 12;
            var17 = var38[var10];
            var17 = var33.bind(var4)(var17);
            var17 = var17.space;
            var17 = var17.PX_16;
            var24 = var24 + var17;
            _closure2_slot41 = var24;
            var10 = var38[var10];
            var10 = var33.bind(var4)(var10);
            var10 = var10.space;
            var10 = var10.PX_16;
            var16 = var16 + var10;
            _closure2_slot42 = var16;
            var27 = 15;
            var10 = var38[var27];
            var17 = var26.bind(var4)(var10);
            var10 = var17.useSharedValue;
            var17 = var10.bind(var17)(var30);
            _closure2_slot43 = var17;
            var10 = var38[var27];
            var26 = var26.bind(var4)(var10);
            var10 = var26.useSharedValue;
            var10 = var10.bind(var26)(var15);
            _closure2_slot44 = var10;
            var43 = _closure1_slot6;
            var40 = var43.useCallback;
            var26 = new Array(3);
            var26[0] = var25;
            var26[1] = var24;
            var26[2] = var10;
            var25 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot37;
                    var1 = _closure2_slot41;
                    var6 = var2 - var1;
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var7 = 13;
                    var2 = var1[var7];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.COLLAPSED_HEADER_HEIGHT;
                    var9 = var6 - var2;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var6 = _closure2_slot15;
                    var6 = var6.current;
                    var8 = var6 - var9;
                    var10 = _closure2_slot44;
                    var6 = var10.get;
                    var10 = var6.bind(var10)();
                    var6 = 0;
                    if(!(!(var10 < var6))) { _fun0007_ip = 25; continue _fun0007 }
case 31:
                    if(!(var8 > var6)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var10 = _closure2_slot44;
                    var6 = var10.get;
                    var6 = var6.bind(var10)();
                    if(!(var6 > var8)) { _fun0007_ip = 37; continue _fun0007 }
case 39:
                    var6 = _closure2_slot11;
                    var10 = var6.current;
                    if(!(var2 != var10)) { _fun0007_ip = 37; continue _fun0007 }
case 40:
                    var8 = var10.scrollToEnd;
                    var6 = {};
                    var11 = true;
                    var6['animated'] = var11;
                    var6 = var8.bind(var10)(var6);
                    _fun0007_ip = 37; continue _fun0007;
case 25:
                    var6 = _closure2_slot11;
                    var10 = var6.current;
                    if(!(var2 != var10)) { _fun0007_ip = 37; continue _fun0007 }
case 41:
                    var8 = var10.scrollTo;
                    var6 = {'y': 0, 'animated': true};
                    var6 = var8.bind(var10)(var6);
                    _fun0007_ip = 37; continue _fun0007;
case 35:
                    var6 = _closure2_slot12;
                    var8 = var6.current;
                    var6 = var5.name;
                    var6 = var8[var6];
                    var5 = var5.required;
                    if(var5) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var5 = _closure2_slot14;
                    var5 = var5.current;
                    _fun0007_ip = 44; continue _fun0007;
case 42:
                    var8 = _closure2_slot13;
                    var5 = var8.current;
case 44:
                    var5 = var6 + var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.COLLAPSED_HEADER_HEIGHT;
                    var6 = var5 - var4;
                    var5 = _closure2_slot44;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4 + var9;
                    var7 = _closure2_slot44;
                    var5 = var7.get;
                    var5 = var5.bind(var7)();
                    if(!(!(var6 < var5))) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    if(!(var6 > var4)) { _fun0007_ip = 37; continue _fun0007 }
case 45:
                    var3 = _closure2_slot11;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0007_ip = 37; continue _fun0007 }
case 47:
                    var3 = var4.scrollTo;
                    var2 = {};
                    var5 = global;
                    var8 = var5.Math;
                    var7 = var8.max;
                    var5 = 2;
                    var5 = var9 / var5;
                    var6 = var6 - var5;
                    var5 = 0;
                    var5 = var7.bind(var8)(var5, var6);
                    var2['y'] = var5;
                    var5 = true;
                    var2['animated'] = var5;
                    var2 = var3.bind(var4)(var2);
case 37:
                    return var1;
                }
            };
            var25 = var40.bind(var43)(var25, var26);
            _closure2_slot45 = var25;
            var48 = _closure1_slot6;
            var43 = var48.useCallback;
            var26 = var41.channel;
            var26 = var26.guild_id;
            var40 = new Array(3);
            var40[0] = var26;
            var26 = var41.channel;
            var26 = var26.id;
            var40[1] = var26;
            var40[2] = var31;
            var26 = function(arg1, arg2) {
                var2 = arg1;
                var10 = arg2;
                var1 = _closure2_slot31;
                var4 = var1.current;
                var1 = var2.name;
                var4[var1] = var10;
                var5 = _closure2_slot33;
                var4 = {};
                var14 = _closure2_slot32;
                var15 = var4;
                var1 = copyDataProperties(var15, var14);
                var7 = var2.name;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 27;
                var6 = var12[var1];
                var1 = undefined;
                var9 = var11.bind(var1)(var6);
                var8 = var9.validateOptionContent;
                var6 = {};
                var6['option'] = var2;
                var6['content'] = var10;
                var10 = _closure2_slot1;
                var13 = var10.channel;
                var13 = var13.guild_id;
                var6['guildId'] = var13;
                var10 = var10.channel;
                var10 = var10.id;
                var6['channelId'] = var10;
                var10 = false;
                var6['allowEmptyValues'] = var10;
                var10 = 28;
                var10 = var12[var10];
                var10 = var11.bind(var1)(var10);
                var10 = var10.CommandOrigin;
                var10 = var10.APPLICATION_LAUNCHER;
                var6['commandOrigin'] = var10;
                var6 = var8.bind(var9)(var6);
                var4[6] = var6;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot19;
                var4 = true;
                var5['current'] = var4;
                var3 = _closure2_slot21;
                var2 = var2.type;
                var3['current'] = var2;
                return var1;
            };
            var40 = var43.bind(var48)(var26, var40);
            _closure2_slot46 = var40;
            var26 = 29;
            var26 = var38[var26];
            var26 = var33.bind(var4)(var26);
            var48 = var26.bind(var4)(var12);
            _closure2_slot47 = var48;
            var38 = _closure1_slot6;
            var33 = var38.useEffect;
            var26 = new Array(6);
            var26[0] = var35;
            var26[1] = var12;
            var49 = var2 == var48;
            var43 = undefined;
            if(var49) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var43 = var48.id;
case 48:
            var26[2] = var43;
            var26[3] = var19;
            var26[4] = var23;
            var19 = var41.channel;
            var19 = var19.id;
            var26[5] = var19;
            var19 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var8 = null;
                    var4 = var8 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
case 50:
                    var4 = _closure2_slot47;
                    var6 = var8 == var4;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 12; continue _fun0008 }
case 13:
                    var6 = _closure2_slot47;
                    var4 = var6.id;
case 12:
                    if(!(var5 !== var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var4 = new Array(0);
                    var _closure3_slot0 = var4;
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var5 = new Array(0);
                    var _closure3_slot2 = var5;
                    var5 = {};
                    var _closure3_slot3 = var5;
                    var6 = _closure2_slot31;
                    var5 = {};
                    var6['current'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var8 == var5;
                    var7 = undefined;
                    if(var5) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var6 = _closure2_slot0;
                    var6 = var6.options;
                    var5 = var8 == var6;
                    var7 = var6;
case 54:
                    if(var5) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var10 = arg1;
                            var _closure4_slot0 = var10;
                            var3 = var10.required;
                            var2 = true;
                            if(!(var2 === var3)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                            var4 = _closure3_slot2;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var10);
                            var3 = _closure2_slot31;
                            var5 = var3.current;
                            var4 = var10.name;
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var3 = 30;
                            var3 = var11[var3];
                            var8 = undefined;
                            var12 = var9.bind(var8)(var3);
                            var6 = var12.getInitialOptionValues;
                            var3 = {};
                            var3['option'] = var10;
                            var13 = _closure2_slot16;
                            var3['prefilledValues'] = var13;
                            var13 = _closure2_slot17;
                            var3['guildId'] = var13;
                            var13 = _closure2_slot18;
                            var3['roles'] = var13;
                            var3 = var6.bind(var12)(var3);
                            var5[var4] = var3;
                            var4 = _closure3_slot3;
                            var3 = var10.name;
                            var2 = 27;
                            var2 = var11[var2];
                            var6 = var9.bind(var8)(var2);
                            var5 = var6.validateOptionContent;
                            var2 = {};
                            var2['option'] = var10;
                            var12 = _closure2_slot31;
                            var13 = var12.current;
                            var12 = var10.name;
                            var12 = var13[var12];
                            var2['content'] = var12;
                            var12 = _closure2_slot17;
                            var2['guildId'] = var12;
                            var7 = _closure2_slot1;
                            var7 = var7.channel;
                            var7 = var7.id;
                            var2['channelId'] = var7;
                            var7 = false;
                            var2['allowEmptyValues'] = var7;
                            var7 = 28;
                            var7 = var11[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.CommandOrigin;
                            var7 = var7.APPLICATION_LAUNCHER;
                            var2['commandOrigin'] = var7;
                            var2 = var5.bind(var6)(var2);
                            var4[var3] = var2;
                            _fun0009_ip = 60; continue _fun0009;
case 58:
                            var3 = _closure2_slot16;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                            var3 = _closure2_slot16;
                            var2 = var3.some;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = _closure4_slot0;
                                var1 = var1.name;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            if(var1) { _fun0009_ip = 63; continue _fun0009 }
case 61:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var10);
                            _fun0009_ip = 60; continue _fun0009;
case 63:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var10);
                            var2 = _closure2_slot31;
                            var4 = var2.current;
                            var3 = var10.name;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var2 = 30;
                            var2 = var9[var2];
                            var7 = undefined;
                            var11 = var8.bind(var7)(var2);
                            var5 = var11.getInitialOptionValues;
                            var2 = {};
                            var2['option'] = var10;
                            var12 = _closure2_slot16;
                            var2['prefilledValues'] = var12;
                            var12 = _closure2_slot17;
                            var2['guildId'] = var12;
                            var12 = _closure2_slot18;
                            var2['roles'] = var12;
                            var2 = var5.bind(var11)(var2);
                            var4[var3] = var2;
                            var3 = _closure3_slot3;
                            var2 = var10.name;
                            var1 = 27;
                            var1 = var9[var1];
                            var5 = var8.bind(var7)(var1);
                            var4 = var5.validateOptionContent;
                            var1 = {};
                            var1['option'] = var10;
                            var11 = _closure2_slot31;
                            var11 = var11.current;
                            var10 = var10.name;
                            var10 = var11[var10];
                            var1['content'] = var10;
                            var10 = _closure2_slot17;
                            var1['guildId'] = var10;
                            var6 = _closure2_slot1;
                            var6 = var6.channel;
                            var6 = var6.id;
                            var1['channelId'] = var6;
                            var6 = false;
                            var1['allowEmptyValues'] = var6;
                            var6 = 28;
                            var6 = var9[var6];
                            var6 = var8.bind(var7)(var6);
                            var6 = var6.CommandOrigin;
                            var6 = var6.APPLICATION_LAUNCHER;
                            var1['commandOrigin'] = var6;
                            var1 = var4.bind(var5)(var1);
                            var3[var2] = var1;
case 60:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
case 56:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 31;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.batchUpdates;
                    var5 = function() {
                        var5 = _closure2_slot33;
                        var4 = _closure3_slot3;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot23;
                        var4 = _closure3_slot2;
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot25;
                        var9 = _closure3_slot0;
                        var4 = new Array(0);
                        var8 = 0;
                        var10 = var4;
                        var8 = arraySpread(var10, var9, var8);
                        var9 = _closure3_slot1;
                        var10 = var4;
                        var6 = arraySpread(var10, var9, var8);
                        var4 = var5.bind(var1)(var4);
                        var5 = _closure2_slot28;
                        var4 = _closure3_slot1;
                        var4 = var5.bind(var1)(var4);
                        var4 = _closure2_slot30;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot36;
                        var2 = global;
                        var2 = var2.Set;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var11 = var4;
                        var2 = new var11[var2](var10);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var5 = _closure2_slot26;
                    var6 = var5.current;
                    var5 = var6.clear;
                    var5 = var5.bind(var6)();
                    var6 = var4.forEach;
                    var5 = function(arg1) {
                        var1 = _closure2_slot26;
                        var3 = var1.current;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var1.name;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var4)(var5);
                    var3 = _closure2_slot29;
                    var5 = var3.current;
                    var3 = var5.clear;
                    var3 = var3.bind(var5)();
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        var1 = _closure2_slot29;
                        var3 = var1.current;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var1.name;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 52:
                    return var1;
                }
            };
            var19 = var33.bind(var38)(var19, var26);
            var26 = _closure1_slot0;
            var19 = _closure1_slot3;
            var33 = 32;
            var33 = var19[var33];
            var38 = var26.bind(var4)(var33);
            var33 = var38.useCommandContext;
            var48 = var33.bind(var38)(var41);
            _closure2_slot48 = var48;
            var43 = _closure1_slot6;
            var38 = var43.useCallback;
            var33 = new Array(9);
            var33[0] = var25;
            var33[1] = var42;
            var33[2] = var12;
            var33[3] = var48;
            var33[4] = var17;
            var33[5] = var46;
            var33[6] = var20;
            var33[7] = var31;
            var33[8] = var45;
            var20 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0010_ip = 64; continue _fun0010 }
case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 33;
                    var2 = var4[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.getFirstInvalidOption;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot32;
                    var5 = var4.bind(var5)(var3, var2);
                    if(!(var6 == var5)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var3 = _closure2_slot34;
                    var2 = false;
                    var2 = var3.bind(var9)(var2);
                    var4 = _closure2_slot43;
                    var2 = var4.set;
                    var3 = true;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure2_slot22;
                    var2['current'] = var3;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var2 = 35;
                    var2 = var12[var2];
                    var4 = var11.bind(var9)(var2);
                    var3 = var4.executeAppLauncherCommand;
                    var2 = {};
                    var16 = _closure2_slot0;
                    var2['command'] = var16;
                    var10 = 36;
                    var10 = var12[var10];
                    var15 = var11.bind(var9)(var10);
                    var14 = var15.parseOptionValuesForSend;
                    var10 = _closure2_slot48;
                    var13 = var10.channel;
                    var10 = _closure2_slot31;
                    var10 = var10.current;
                    var10 = var14.bind(var15)(var13, var16, var10);
                    var2['optionValues'] = var10;
                    var10 = _closure2_slot48;
                    var2['context'] = var10;
                    var10 = _closure2_slot3;
                    var2['sectionName'] = var10;
                    var10 = 28;
                    var10 = var12[var10];
                    var10 = var11.bind(var9)(var10);
                    var10 = var10.CommandOrigin;
                    var10 = var10.APP_LAUNCHER_APPLICATION_VIEW;
                    var2['commandOrigin'] = var10;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() {
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 18;
                        var3 = var6[var2];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var3);
                        var3 = var4.triggerHapticFeedback;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var3.bind(var4)(var2);
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = function() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var4 = _closure2_slot8;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 24;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.AppLauncherKeyboardCloseReason;
                                var3 = var3.COMMAND;
                                var4['current'] = var3;
                                var3 = _closure2_slot10;
                                var5 = var3.current;
                                var4 = null;
                                if(!(var4 != var5)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                                var3 = var5.closeCustomKeyboard;
                                var3 = var3.bind(var5)();
case 67:
                                var3 = _closure2_slot5;
                                if(!(var4 != var3)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                                var2 = _closure2_slot5;
                                var2 = var2.bind(var1)();
case 69:
                                return var1;
                            }
                        };
                        var2 = 300;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() {
                        var4 = _closure2_slot34;
                        var1 = undefined;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure2_slot43;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0010_ip = 64; continue _fun0010;
case 65:
                    var2 = _closure2_slot36;
                    var1 = global;
                    var4 = var1.Set;
                    var10 = var1.Object;
                    var3 = var10.keys;
                    var1 = _closure2_slot32;
                    var19 = var3.bind(var10)(var1);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var20 = var3;
                    var1 = new var20[var4](var19, var18);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var1 = var2.bind(var9)(var1);
                    var1 = _closure2_slot45;
                    var1 = var1.bind(var9)(var5);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 25;
                    var1 = var3[var1];
                    var4 = var2.bind(var9)(var1);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot16;
                    var2 = var1.APPLICATION_COMMAND_VALIDATION_FAILED;
                    var1 = {};
                    var8 = _closure2_slot0;
                    var10 = var8.applicationId;
                    var1['application_id'] = var10;
                    var10 = var8.rootCommand;
                    var11 = var6 == var10;
                    var8 = undefined;
                    if(var11) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var8 = var10.id;
case 71:
                    var1['command_id'] = var8;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 34;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ApplicationCommandOptionType;
                    var8 = var5.type;
                    var9 = var6 != var8;
                    var6 = 3;
                    if(!var9) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var6 = var8;
case 73:
                    var6 = var7[var6];
                    var1['argument_type'] = var6;
                    var5 = var5.required;
                    var1['is_required'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var46 = var38.bind(var43)(var20, var33);
            _closure2_slot49 = var46;
            var20 = _closure1_slot12;
            var20 = var20.bind(var4)(var22, var22);
            var20 = _closure1_slot11;
            var20 = var20.bind(var4)(var41, var22, var22);
            var43 = _closure1_slot6;
            var38 = var43.useCallback;
            var33 = _closure1_slot4;
            var20 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 37;
                        var2 = var4[var2];
                        var4 = undefined;
                        var6 = var5.bind(var4)(var2);
                        var5 = var6.installApplicationOnDemandIfNeeded;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var7 = var7.applicationId;
                        var2['applicationId'] = var7;
                        var7 = _closure2_slot1;
                        var9 = var7.type;
                        var8 = 'channel';
                        var7 = undefined;
                        if(!(var8 === var9)) { _fun0012_ip = 81; continue _fun0012 }
case 38:
                        var8 = _closure2_slot1;
                        var7 = var8.channel;
case 81:
                        var2['channel'] = var7;
                        var7 = _closure2_slot0;
                        var7 = var7.integration_types;
                        var2['commandIntegrationTypes'] = var7;
                        var7 = {};
                        var8 = _closure2_slot9;
                        var7['entrypoint'] = var8;
                        var8 = _closure2_slot4;
                        var7['location'] = var8;
                        var8 = _closure2_slot3;
                        var7['sectionName'] = var8;
                        var2['appLauncherContext'] = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=171);
case 82:
                        return var2;
case 83:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                        var5 = var2.isAuthorized;
                        if(var5) { _fun0012_ip = 77; continue _fun0012 }
case 86:
                        return var4;
case 77:
                        var4 = _closure2_slot49;
                        var3 = undefined;
                        var4 = var4.bind(var3)();
                        return var3;
case 84:
                        return var2;
case 79:
                        var2 = undefined;
                        return var2;
case 75:
                        return var1;
                    }
                };
                return var1;
            };
            var33 = var33.bind(var4)(var20);
            var20 = new Array(7);
            var20[0] = var47;
            var20[1] = var12;
            var20[2] = var41;
            var20[3] = var46;
            var20[4] = var45;
            var20[5] = var44;
            var20[6] = var8;
            var20 = var38.bind(var43)(var33, var20);
            var38 = _closure1_slot1;
            var33 = 38;
            var33 = var19[var33];
            var43 = var38.bind(var4)(var33);
            var33 = {};
            var33['ignoreKeyboard'] = var22;
            var33 = var43.bind(var4)(var33);
            var43 = var33.height;
            _closure2_slot50 = var43;
            var33 = 39;
            var33 = var19[var33];
            var33 = var38.bind(var4)(var33);
            var33 = var33.bind(var4)();
            var38 = var33.maximum;
            _closure2_slot51 = var38;
            var32 = var19[var32];
            var33 = var26.bind(var4)(var32);
            var32 = var33.useRequiredAppLauncherContext;
            var32 = var32.bind(var33)();
            var44 = var32.bottomSheetPosition;
            _closure2_slot52 = var44;
            var19 = var19[var27];
            var32 = var26.bind(var4)(var19);
            var26 = var32.useAnimatedStyle;
            var19 = function tt() {
                var1 = {};
                var3 = {};
                var5 = _closure2_slot52;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = _closure2_slot50;
                var5 = var5 - var2;
                var2 = _closure2_slot51;
                var2 = var5 + var2;
                var4 = _closure2_slot42;
                var2 = -var2;
                var2 = var2 - var4;
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var33 = {};
            var33['bottomSheetPosition'] = var44;
            var33['screenHeight'] = var43;
            var33['maxHeight'] = var38;
            var33['footerStickyInsetBottom'] = var16;
            var19['__closure'] = var33;
            var33 = 3470381437387.0;
            var19['__workletHash'] = var33;
            var33 = _closure1_slot26;
            var19['__initData'] = var33;
            var19 = var26.bind(var32)(var19);
            var33 = _closure1_slot6;
            var32 = var33.useCallback;
            var26 = new Array(2);
            var26[0] = var14;
            var26[1] = var25;
            var25 = function(arg1) {
                var3 = arg1;
                var5 = _closure2_slot35;
                var4 = var5.delete;
                var1 = var3.name;
                var1 = var4.bind(var5)(var1);
                var5 = _closure2_slot36;
                var1 = global;
                var6 = var1.Set;
                var7 = _closure2_slot35;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var8 = var4;
                var1 = new var8[var6](var7, var6);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot45;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var25 = var32.bind(var33)(var25, var26);
            _closure2_slot53 = var25;
            var33 = _closure1_slot6;
            var32 = var33.useCallback;
            var26 = new Array(2);
            var26[0] = var14;
            var38 = var2 == var29;
            var25 = undefined;
            if(var38) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var25 = var29.name;
case 87:
            var26[1] = var25;
            var25 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure2_slot35;
                    var4 = var5.add;
                    var1 = var3.name;
                    var1 = var4.bind(var5)(var1);
                    var5 = _closure2_slot36;
                    var1 = global;
                    var6 = var1.Set;
                    var7 = _closure2_slot35;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var8 = var4;
                    var1 = new var8[var6](var7, var6);
                    var4 = var1 instanceof Object ? var1 : var4;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var5 = var3.name;
                    var4 = _closure2_slot39;
                    var3 = null;
                    var6 = var3 == var4;
                    var4 = undefined;
                    if(var6) { _fun0013_ip = 89; continue _fun0013 }
case 90:
                    var6 = _closure2_slot39;
                    var4 = var6.name;
case 89:
                    if(!(var5 === var4)) { _fun0013_ip = 81; continue _fun0013 }
case 38:
                    var2 = _closure2_slot40;
                    var2 = var2.bind(var1)(var3);
case 81:
                    return var1;
                }
            };
            var38 = var32.bind(var33)(var25, var26);
            _closure2_slot54 = var38;
            var33 = _closure1_slot6;
            var32 = var33.useCallback;
            var26 = new Array(1);
            var26[0] = var12;
            var25 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot16;
                    var2 = var1.APPLICATION_COMMAND_OPTION_PRESSED;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.applicationId;
                    var1['application_id'] = var7;
                    var6 = var6.id;
                    var1['command_id'] = var6;
                    var6 = var5.name;
                    var1['option_name'] = var6;
                    var5 = var5.type;
                    var1['option_type'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 91:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var32.bind(var33)(var25, var26);
            _closure2_slot55 = var25;
            var33 = _closure1_slot6;
            var32 = var33.useCallback;
            var26 = new Array(4);
            var26[0] = var42;
            var41 = var41.channel;
            var26[1] = var41;
            var26[2] = var38;
            var26[3] = var25;
            var25 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var3 = {};
                    var1 = _closure1_slot19;
                    var1 = var1.APP_LAUNCHER;
                    var3['target'] = var1;
                    var3['option'] = var6;
                    var _closure3_slot1 = var3;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 40;
                    var7 = var10[var2];
                    var1 = undefined;
                    var8 = var9.bind(var1)(var7);
                    var7 = var8.getMediaKeyboardDraftType;
                    var3 = var3.target;
                    var8 = var7.bind(var8)(var3);
                    var _closure3_slot2 = var8;
                    var7 = var6.type;
                    var3 = 34;
                    var3 = var10[var3];
                    var3 = var9.bind(var1)(var3);
                    var3 = var3.ApplicationCommandOptionType;
                    var3 = var3.ATTACHMENT;
                    var9 = undefined;
                    if(!(var7 === var3)) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                    var9 = var6.fileTypes;
case 93:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var3 = 41;
                    var3 = var12[var3];
                    var7 = var11.bind(var1)(var3);
                    var3 = var7.getFileTypeFiltering;
                    var3 = var3.bind(var7)(var9);
                    var7 = var3.allowedExtensions;
                    var _closure3_slot3 = var7;
                    var9 = var3.validateFilenames;
                    var _closure3_slot4 = var9;
                    var9 = var3.showInvalidFileTypeAlert;
                    var _closure3_slot5 = var9;
                    var10 = var3.mediaFilesAllowed;
                    var13 = function onAttachFileParams(arg1) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = {};
                        var3 = _closure2_slot1;
                        var3 = var3.channel;
                        var1['channel'] = var3;
                        var3 = 1;
                        var1['uploadLimit'] = var3;
                        var3 = _closure3_slot3;
                        var1['extensions'] = var3;
                        var3 = function onDismissKeyboard() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 42;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.hideMediaKeyboardActionSheet;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['onDismissKeyboard'] = var3;
                        var3 = _closure1_slot17;
                        var1['onRestoreKeyboard'] = var3;
                        var2 = function onSelectFiles(arg1) {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                var4 = arg1;
                                var1 = _closure3_slot3;
                                var1 = var1.length;
                                var3 = 0;
                                if(!(var1 > var3)) { _fun0016_ip = 89; continue _fun0016 }
case 95:
                                var6 = _closure3_slot4;
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 43;
                                var1 = var5[var1];
                                var5 = undefined;
                                var8 = var7.bind(var5)(var1);
                                var7 = var8.getFileFromUploadItem;
                                var1 = var4[var3];
                                var1 = var7.bind(var8)(var1);
                                var7 = var1.filename;
                                var1 = new Array(1);
                                var1[0] = var7;
                                var1 = var6.bind(var5)(var1);
                                if(var1) { _fun0016_ip = 89; continue _fun0016 }
case 96:
                                var1 = _closure3_slot5;
                                var1 = var1.bind(var5)();
                                return var1;
case 89:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 40;
                                var5 = var5[var1];
                                var1 = undefined;
                                var8 = var6.bind(var1)(var5);
                                var7 = var8.addAttachmentForCommand;
                                var6 = _closure2_slot1;
                                var6 = var6.channel;
                                var13 = var6.id;
                                var12 = _closure2_slot10;
                                var11 = var4[var3];
                                var10 = _closure3_slot1;
                                var9 = _closure4_slot0;
                                var14 = var8;
                                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                                return var1;
                            }
                        };
                        var1['onSelectFiles'] = var2;
                        return var1;
                    };
                    var _closure3_slot6 = var13;
                    var3 = _closure2_slot55;
                    var3 = var3.bind(var1)(var6);
                    var3 = 44;
                    var3 = var12[var3];
                    var11 = var11.bind(var1)(var3);
                    var3 = var11.dismissGlobalKeyboard;
                    var3 = var3.bind(var11)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    if(var10) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                    var2 = var4[var2];
                    var11 = var3.bind(var1)(var2);
                    var10 = var11.handleAttachFile;
                    var2 = {};
                    var12 = 45;
                    var12 = var4[var12];
                    var12 = var3.bind(var1)(var12);
                    var12 = var12.UploadOrigin;
                    var12 = var12.FILE_ATTACHMENT;
                    var14 = var13.bind(var1)(var12);
                    var15 = var2;
                    var12 = copyDataProperties(var15, var14);
                    var2 = var10.bind(var11)(var2);
                    _fun0015_ip = 99; continue _fun0015;
case 97:
                    var2 = 42;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showMediaKeyboardActionSheet;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var9 = var9.channel;
                    var2['channel'] = var9;
                    var2['draftType'] = var8;
                    var2['extensions'] = var7;
                    var7 = 1;
                    var2['uploadLimit'] = var7;
                    var7 = false;
                    var2['disableWhenReachedLimit'] = var7;
                    var7 = var6.name;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var2['includedUploadIds'] = var6;
                    var6 = function onAttachPress() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 40;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.handleAttachFile;
                        var2 = {};
                        var6 = _closure3_slot6;
                        var5 = 45;
                        var5 = var8[var5];
                        var5 = var7.bind(var1)(var5);
                        var5 = var5.UploadOrigin;
                        var5 = var5.FILE_ATTACHMENT;
                        var9 = var6.bind(var1)(var5);
                        var10 = var2;
                        var5 = copyDataProperties(var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onAttachPress'] = var6;
                    var6 = function onPressCamera(arg1) {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 40;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.handleCameraDialog;
                        var2 = {};
                        var6 = _closure3_slot6;
                        var5 = 45;
                        var5 = var8[var5];
                        var5 = var7.bind(var1)(var5);
                        var5 = var5.UploadOrigin;
                        var5 = var5.IMAGE_PICKER;
                        var9 = var6.bind(var1)(var5);
                        var10 = var2;
                        var5 = copyDataProperties(var10, var9);
                        var6 = arg1;
                        var5 = 'previewType';
                        var2[4] = var6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPressCamera'] = var6;
                    var6 = function onPressItem(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var1 = arg1;
                            var8 = var1.channelId;
                            var6 = var1.item;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 42;
                            var3 = var2[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var3);
                            var3 = var7.hideMediaKeyboardActionSheet;
                            var3 = var3.bind(var7)();
                            var3 = 40;
                            var2 = var2[var3];
                            var5 = var5.bind(var1)(var2);
                            var2 = var5.mediaNodeToUploadItem;
                            var7 = var2.bind(var5)(var6);
                            var5 = _closure3_slot3;
                            var6 = var5.length;
                            var5 = 0;
                            if(!(var6 > var5)) { _fun0017_ip = 100; continue _fun0017 }
case 101:
                            var6 = _closure3_slot4;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var5 = 43;
                            var5 = var10[var5];
                            var9 = var9.bind(var1)(var5);
                            var5 = var9.getFileFromUploadItem;
                            var5 = var5.bind(var9)(var7);
                            var9 = var5.filename;
                            var5 = new Array(1);
                            var5[0] = var9;
                            var5 = var6.bind(var1)(var5);
                            if(var5) { _fun0017_ip = 100; continue _fun0017 }
case 9:
                            var5 = _closure3_slot5;
                            var5 = var5.bind(var1)();
                            return var5;
case 100:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = var10[var3];
                            var6 = var9.bind(var1)(var3);
                            var5 = var6.addAttachmentForCommand;
                            var14 = _closure2_slot10;
                            var12 = _closure3_slot1;
                            var2 = 45;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.UploadOrigin;
                            var11 = var2.IMAGE_PICKER;
                            var16 = var6;
                            var15 = var8;
                            var13 = var7;
                            var2 = var16[var5](var15, var14, var13, var12, var11, var10);
                            return var1;
                        }
                    };
                    var2['onPressItem'] = var6;
                    var6 = function onViewAll() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 40;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var8.bind(var1)(var2);
                        var3 = var4.handleViewAllDialog;
                        var2 = {};
                        var7 = _closure3_slot6;
                        var6 = 45;
                        var6 = var9[var6];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.UploadOrigin;
                        var6 = var6.IMAGE_PICKER;
                        var10 = var7.bind(var1)(var6);
                        var11 = var2;
                        var6 = copyDataProperties(var11, var10);
                        var6 = _closure3_slot2;
                        var5 = 'draftType';
                        var2[4] = var6;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onViewAll'] = var6;
                    var6 = function onManageLimited() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 40;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.handleLimitedPickerDialog;
                        var2 = {};
                        var6 = 42;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.hideMediaKeyboardActionSheet;
                        var2['onDismissKeyboard'] = var6;
                        var5 = _closure1_slot17;
                        var2['onRestoreKeyboard'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onManageLimited'] = var6;
                    var6 = function onClose() {
                        var3 = _closure2_slot54;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onClose'] = var6;
                    var5 = function onBack() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideMediaKeyboardActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onBack'] = var5;
                    var2 = var3.bind(var4)(var2);
case 99:
                    return var1;
                }
            };
            var25 = var32.bind(var33)(var25, var26);
            _closure2_slot56 = var25;
            var26 = _closure1_slot1;
            var32 = _closure1_slot3;
            var25 = 46;
            var25 = var32[var25];
            var26 = var26.bind(var4)(var25);
            var25 = function() {
                var3 = _closure2_slot45;
                var2 = _closure2_slot39;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var26.bind(var4)(var25);
            var25 = var26.setLatch;
            _closure2_slot57 = var25;
            var26 = var26.tryCallback;
            _closure2_slot58 = var26;
            var41 = _closure1_slot6;
            var38 = var41.useCallback;
            var33 = function(arg1) {
                var2 = _closure2_slot13;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.y;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var32 = new Array(0);
            var32 = var38.bind(var41)(var33, var32);
            var41 = _closure1_slot6;
            var38 = var41.useCallback;
            var33 = new Array(1);
            var33[0] = var26;
            var26 = function(arg1) {
                var3 = _closure2_slot14;
                var2 = arg1;
                var2 = var2.nativeEvent;
                var2 = var2.layout;
                var2 = var2.y;
                var3['current'] = var2;
                var2 = _closure2_slot58;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var38 = var38.bind(var41)(var26, var33);
            var41 = _closure1_slot6;
            var33 = var41.useCallback;
            var26 = new Array(2);
            var26[0] = var29;
            var26[1] = var25;
            var25 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg2;
                    var4 = _closure2_slot12;
                    var5 = var4.current;
                    var2 = var3.name;
                    var2 = var5[var2];
                    var5 = null;
                    var2 = var5 == var2;
                    var7 = var4.current;
                    var6 = var3.name;
                    var4 = arg1;
                    var4 = var4.nativeEvent;
                    var4 = var4.layout;
                    var4 = var4.y;
                    var7[var6] = var4;
                    if(!var2) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                    var4 = _closure2_slot39;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0018_ip = 101; continue _fun0018 }
case 104:
                    var5 = _closure2_slot39;
                    var4 = var5.name;
case 101:
                    var3 = var3.name;
                    var2 = var4 === var3;
case 102:
                    if(!var2) { _fun0018_ip = 105; continue _fun0018 }
case 38:
                    var3 = _closure2_slot57;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
case 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var33.bind(var41)(var25, var26);
            _closure2_slot59 = var25;
            var33 = _closure1_slot6;
            var26 = var33.useCallback;
            var25 = new Array(7);
            var25[0] = var39;
            var25[1] = var7;
            var25[2] = var40;
            var25[3] = var35;
            var25[4] = var23;
            var35 = var2 == var12;
            var23 = undefined;
            if(var35) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var23 = var12.applicationId;
case 106:
            var25[5] = var23;
            var35 = var2 == var12;
            var23 = undefined;
            if(var35) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var23 = var12.id;
case 108:
            var25[6] = var23;
            var23 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure2_slot26;
                    var3 = var1.current;
                    var2 = var3.add;
                    var1 = var6.name;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot28;
                    var13 = _closure2_slot27;
                    var2 = new Array(1);
                    var12 = 0;
                    var14 = var2;
                    var4 = arraySpread(var14, var13, var12);
                    var2[3] = var6;
                    var1 = 1;
                    var1 = var4 + var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot30;
                    var5 = _closure2_slot24;
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        var1 = _closure2_slot26;
                        var3 = var1.current;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.name;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot40;
                    var2 = var2.bind(var1)(var6);
                    var7 = _closure2_slot46;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 30;
                    var3 = var5[var3];
                    var10 = var4.bind(var1)(var3);
                    var9 = var10.getInitialOptionValues;
                    var3 = {};
                    var3['option'] = var6;
                    var11 = new Array(0);
                    var3['prefilledValues'] = var11;
                    var11 = _closure2_slot17;
                    var3['guildId'] = var11;
                    var11 = _closure2_slot18;
                    var3['roles'] = var11;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var1)(var6, var3);
                    var7 = _closure2_slot19;
                    var3 = true;
                    var7['current'] = var3;
                    var7 = _closure2_slot21;
                    var3 = var6.type;
                    var7['current'] = var3;
                    var3 = 25;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot16;
                    var3 = var2.APPLICATION_COMMAND_OPTIONAL_OPTION_ADDED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var9 = null;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0019_ip = 110; continue _fun0019 }
case 111:
                    var10 = _closure2_slot0;
                    var7 = var10.applicationId;
case 110:
                    var2['application_id'] = var7;
                    var7 = _closure2_slot0;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0019_ip = 112; continue _fun0019 }
case 113:
                    var8 = _closure2_slot0;
                    var7 = var8.id;
case 112:
                    var2['command_id'] = var7;
                    var7 = var6.name;
                    var2['option_name'] = var7;
                    var6 = var6.type;
                    var2['option_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var33 = var26.bind(var33)(var23, var25);
            var26 = _closure1_slot6;
            var25 = var26.useCallback;
            var23 = new Array(7);
            var23[0] = var39;
            var23[1] = var7;
            var23[2] = var31;
            var23[3] = var14;
            var31 = var2 == var29;
            var14 = undefined;
            if(var31) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var14 = var29.name;
case 114:
            var23[4] = var14;
            var29 = var2 == var12;
            var14 = undefined;
            if(var29) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var14 = var12.applicationId;
case 116:
            var23[5] = var14;
            var29 = var2 == var12;
            var14 = undefined;
            if(var29) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var14 = var12.id;
case 118:
            var23[6] = var14;
            var14 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var1 = _closure2_slot26;
                    var4 = var1.current;
                    var3 = var4.delete;
                    var1 = var6.name;
                    var1 = var3.bind(var4)(var1);
                    var1 = _closure2_slot29;
                    var4 = var1.current;
                    var3 = var4.delete;
                    var1 = var6.name;
                    var1 = var3.bind(var4)(var1);
                    var4 = _closure2_slot28;
                    var5 = _closure2_slot27;
                    var3 = var5.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure3_slot0;
                        var1 = var1.name;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var3 = var3.bind(var5)(var1);
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot30;
                    var5 = _closure2_slot24;
                    var4 = var5.filter;
                    var2 = function(arg1) {
                        var1 = _closure2_slot26;
                        var3 = var1.current;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.name;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = var6.name;
                    var2 = delete var3[var2];
                    var2 = _closure2_slot31;
                    var3 = var2.current;
                    var2 = var6.name;
                    var2 = delete var3[var2];
                    var3 = _closure2_slot32;
                    var2 = var6.name;
                    var2 = delete var3[var2];
                    var3 = _closure2_slot33;
                    var2 = {};
                    var11 = _closure2_slot32;
                    var12 = var2;
                    var4 = copyDataProperties(var12, var11);
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure2_slot35;
                    var3 = var4.delete;
                    var2 = var6.name;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot36;
                    var2 = global;
                    var5 = var2.Set;
                    var12 = _closure2_slot35;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var13 = var4;
                    var2 = new var13[var5](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var2 = var3.bind(var1)(var2);
                    var3 = var6.name;
                    var2 = _closure2_slot39;
                    var9 = null;
                    var4 = var9 == var2;
                    var2 = undefined;
                    if(var4) { _fun0020_ip = 120; continue _fun0020 }
case 121:
                    var4 = _closure2_slot39;
                    var2 = var4.name;
case 120:
                    if(!(var3 === var2)) { _fun0020_ip = 122; continue _fun0020 }
case 123:
                    var2 = _closure2_slot40;
                    var2 = var2.bind(var1)(var9);
case 122:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 25;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot16;
                    var3 = var2.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0020_ip = 124; continue _fun0020 }
case 125:
                    var10 = _closure2_slot0;
                    var7 = var10.applicationId;
case 124:
                    var2['application_id'] = var7;
                    var7 = _closure2_slot0;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0020_ip = 126; continue _fun0020 }
case 127:
                    var8 = _closure2_slot0;
                    var7 = var8.id;
case 126:
                    var2['command_id'] = var7;
                    var7 = var6.name;
                    var2['option_name'] = var7;
                    var6 = var6.type;
                    var2['option_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var14 = var25.bind(var26)(var14, var23);
            _closure2_slot60 = var14;
            var26 = _closure1_slot6;
            var25 = var26.useCallback;
            var23 = function(arg1) {
                var3 = _closure2_slot38;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var14 = new Array(0);
            var14 = var25.bind(var26)(var23, var14);
            var29 = _closure1_slot6;
            var26 = var29.useCallback;
            var25 = function(arg1, arg2) {
                var1 = arg2;
                var2 = _closure2_slot15;
                var2['current'] = var1;
                return var1;
            };
            var23 = new Array(0);
            var26 = var26.bind(var29)(var25, var23);
            var23 = var36.length;
            var25 = var23 > var15;
            var7 = var7.length;
            var15 = var7 > var15;
            var23 = var25;
            if(var25) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var23 = var15;
case 128:
            var29 = var2 == var13;
            var7 = undefined;
            if(var29) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var7 = var13.prefilledOptions;
case 130:
            var7 = var2 != var7;
            _closure2_slot61 = var7;
            var13 = _closure1_slot0;
            var29 = _closure1_slot3;
            var7 = 47;
            var7 = var29[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.AppLauncherEntrypoint;
            var7 = var7.VOICE;
            if(!(var8 !== var7)) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var7 = 48;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var13 = var7.BottomSheetScrollView;
            _fun0003_ip = 134; continue _fun0003;
case 132:
            var13 = _closure1_slot9;
case 134:
            if(var3) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            if(!(var2 != var12)) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            if(var1) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var3 = _closure1_slot20;
            var2 = _closure1_slot32;
            var1 = {};
            var1['command'] = var12;
            var1['onPressBack'] = var11;
            var7 = var3.bind(var4)(var2, var1);
            _fun0003_ip = 141; continue _fun0003;
case 139:
            var3 = _closure1_slot21;
            var2 = _closure1_slot22;
            var1 = {};
            var8 = {};
            var8['ref'] = var28;
            var29 = var5.optionsContainer;
            var28 = new Array(1);
            var28[0] = var29;
            var8['contentContainerStyle'] = var28;
            var28 = {};
            var28['bottom'] = var24;
            var8['scrollIndicatorInsets'] = var28;
            var8['scrollToOverflowEnabled'] = var22;
            var8['onContentSizeChange'] = var26;
            var8['preserveScrollMomentum'] = var22;
            var8['lockableScrollableContentOffsetY'] = var10;
            var22 = 'handled';
            var8['keyboardShouldPersistTaps'] = var22;
            var22 = 'never';
            var8['contentInsetAdjustmentBehavior'] = var22;
            var8['automaticallyAdjustContentInsets'] = var30;
            var8['onLayout'] = var14;
            var8['automaticallyAdjustsScrollIndicatorInsets'] = var30;
            var28 = _closure1_slot21;
            var22 = _closure1_slot7;
            var14 = {};
            var26 = var5.commandNameContainer;
            var14['style'] = var26;
            var41 = _closure1_slot20;
            var35 = _closure1_slot0;
            var31 = _closure1_slot3;
            var26 = 49;
            var29 = var31[var26];
            var29 = var35.bind(var4)(var29);
            var40 = var29.Text;
            var29 = {'variant': 'heading-lg/bold', 'color': 'text-default'};
            var42 = var12.displayName;
            var29['children'] = var42;
            var40 = var41.bind(var4)(var40, var29);
            var29 = new Array(2);
            var29[0] = var40;
            var40 = _closure1_slot20;
            var31 = var31[var26];
            var31 = var35.bind(var4)(var31);
            var35 = var31.Text;
            var31 = {'variant': 'heading-sm/medium', 'color': 'text-default'};
            var41 = var12.displayDescription;
            var31['children'] = var41;
            var31 = var40.bind(var4)(var35, var31);
            var29[1] = var31;
            var14['children'] = var29;
            var22 = var28.bind(var4)(var22, var14);
            var14 = new Array(6);
            var14[0] = var22;
            var22 = var25;
            if(!var22) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var31 = _closure1_slot20;
            var29 = _closure1_slot7;
            var28 = {};
            var35 = var5.requiredOptionsContainer;
            var28['style'] = var35;
            var28['onLayout'] = var32;
            var35 = var36.map;
            var32 = function(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot20;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 50;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['option'] = var1;
                    var8 = 0;
                    var6 = arg2;
                    if(!(var8 === var6)) { _fun0021_ip = 66; continue _fun0021 }
case 144:
                    var6 = _closure2_slot61;
                    if(var6) { _fun0021_ip = 66; continue _fun0021 }
case 145:
                    var6 = _closure1_slot14;
                    var6 = var6.FIRST_REQUIRED_OPTION;
                    _fun0021_ip = 104; continue _fun0021;
case 66:
                    var7 = _closure1_slot14;
                    var6 = var7.NONE;
case 104:
                    var2['autoFocusType'] = var6;
                    var7 = _closure2_slot35;
                    var2['editedOptions'] = var7;
                    var7 = _closure2_slot59;
                    var2['onOptionViewLayout'] = var7;
                    var7 = _closure2_slot53;
                    var2['onStartEditing'] = var7;
                    var7 = _closure2_slot54;
                    var2['onEndEditing'] = var7;
                    var7 = _closure2_slot46;
                    var2['onOptionValueChange'] = var7;
                    var7 = _closure2_slot55;
                    var2['onPressOption'] = var7;
                    var7 = _closure2_slot56;
                    var2['onPressAttachmentOption'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var7 = _closure2_slot32;
                    var2['optionValidationResults'] = var7;
                    var7 = _closure2_slot40;
                    var2['setFocusedOption'] = var7;
                    var7 = _closure2_slot0;
                    var2['command'] = var7;
                    var6 = _closure2_slot31;
                    var2['optionValues'] = var6;
                    var1 = var1.name;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var32 = var35.bind(var36)(var32);
            var28['children'] = var32;
            var22 = var31.bind(var4)(var29, var28);
case 142:
            var14[1] = var22;
            var22 = !var25;
            if(var25) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var22 = var23;
case 146:
            if(!var22) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var29 = _closure1_slot20;
            var28 = _closure1_slot7;
            var25 = {};
            var31 = var5.noRequiredOptionsCalloutContainer;
            var25['style'] = var31;
            var35 = _closure1_slot20;
            var42 = _closure1_slot0;
            var43 = _closure1_slot3;
            var31 = var43[var26];
            var31 = var42.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-sm/medium', 'color': 'text-strong'};
            var36 = {};
            var40 = 'center';
            var36['textAlign'] = var40;
            var31['style'] = var36;
            var36 = 22;
            var40 = var43[var36];
            var40 = var42.bind(var4)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var36 = var43[var36];
            var36 = var42.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.HS2KtY;
            var36 = var40.bind(var41)(var36);
            var31['children'] = var36;
            var31 = var35.bind(var4)(var32, var31);
            var25['children'] = var31;
            var22 = var29.bind(var4)(var28, var25);
case 148:
            var14[2] = var22;
            var22 = !var23;
            if(var23) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var28 = _closure1_slot20;
            var25 = _closure1_slot7;
            var23 = {};
            var29 = var5.noOptionCalloutContainer;
            var23['style'] = var29;
            var32 = _closure1_slot20;
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var29 = var42[var26];
            var29 = var41.bind(var4)(var29);
            var31 = var29.Text;
            var29 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var35 = {};
            var36 = 'center';
            var35['textAlign'] = var36;
            var29['style'] = var35;
            var35 = 22;
            var36 = var42[var35];
            var36 = var41.bind(var4)(var36);
            var40 = var36.intl;
            var36 = var40.string;
            var35 = var42[var35];
            var35 = var41.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.G8lEFB;
            var35 = var36.bind(var40)(var35);
            var29['children'] = var35;
            var29 = var32.bind(var4)(var31, var29);
            var23['children'] = var29;
            var22 = var28.bind(var4)(var25, var23);
case 150:
            var14[3] = var22;
            if(!var15) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var25 = _closure1_slot21;
            var23 = _closure1_slot22;
            var22 = {};
            var29 = _closure1_slot20;
            var36 = _closure1_slot0;
            var35 = _closure1_slot3;
            var26 = var35[var26];
            var26 = var36.bind(var4)(var26);
            var28 = var26.Text;
            var26 = {'style': null, 'variant': 'text-md/normal', 'color': 'text-default'};
            var31 = var5.optionalOptionsSectionTitle;
            var26['style'] = var31;
            var31 = 22;
            var32 = var35[var31];
            var32 = var36.bind(var4)(var32);
            var40 = var32.intl;
            var32 = var40.string;
            var31 = var35[var31];
            var31 = var36.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31["5C107K"];
            var31 = var32.bind(var40)(var31);
            var26['children'] = var31;
            var28 = var29.bind(var4)(var28, var26);
            var26 = new Array(3);
            var26[0] = var28;
            var32 = _closure1_slot20;
            var31 = _closure1_slot1;
            var28 = var35[var27];
            var28 = var31.bind(var4)(var28);
            var29 = var28.View;
            var28 = {};
            var40 = var5.optionalOptionsContainer;
            var28['style'] = var40;
            var28['onLayout'] = var38;
            var28['collapsable'] = var30;
            var38 = var39.map;
            var37 = function(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = arg1;
                    var10 = arg2;
                    var5 = _closure1_slot20;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 50;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot6;
                    var9 = var7.optionalOptionsChild;
                    var7 = new Array(3);
                    var7[0] = var9;
                    var9 = 0;
                    var9 = var9 === var10;
                    if(!var9) { _fun0022_ip = 154; continue _fun0022 }
case 103:
                    var11 = _closure2_slot6;
                    var9 = var11.optionalOptionsFirstChild;
case 154:
                    var7[1] = var9;
                    var9 = _closure2_slot27;
                    var11 = var9.length;
                    var9 = 1;
                    var9 = var11 - var9;
                    var9 = var10 === var9;
                    if(!var9) { _fun0022_ip = 105; continue _fun0022 }
case 155:
                    var10 = _closure2_slot6;
                    var9 = var10.optionalOptionsLastChild;
case 105:
                    var7[2] = var9;
                    var2['style'] = var7;
                    var2['option'] = var1;
                    var7 = _closure2_slot29;
                    var10 = var7.current;
                    var9 = var10.has;
                    var7 = var1.name;
                    var7 = var9.bind(var10)(var7);
                    var8 = _closure1_slot14;
                    if(var7) { _fun0022_ip = 156; continue _fun0022 }
case 157:
                    var7 = var8.OPTIONAL_OPTION_ADDED;
                    _fun0022_ip = 158; continue _fun0022;
case 156:
                    var7 = var8.NONE;
case 158:
                    var2['autoFocusType'] = var7;
                    var7 = _closure2_slot60;
                    var2['onDismiss'] = var7;
                    var7 = _closure2_slot35;
                    var2['editedOptions'] = var7;
                    var7 = _closure2_slot59;
                    var2['onOptionViewLayout'] = var7;
                    var7 = _closure2_slot53;
                    var2['onStartEditing'] = var7;
                    var7 = _closure2_slot54;
                    var2['onEndEditing'] = var7;
                    var7 = _closure2_slot46;
                    var2['onOptionValueChange'] = var7;
                    var7 = _closure2_slot55;
                    var2['onPressOption'] = var7;
                    var7 = _closure2_slot56;
                    var2['onPressAttachmentOption'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.channel;
                    var2['channel'] = var7;
                    var7 = _closure2_slot32;
                    var2['optionValidationResults'] = var7;
                    var7 = _closure2_slot40;
                    var2['setFocusedOption'] = var7;
                    var7 = _closure2_slot0;
                    var2['command'] = var7;
                    var7 = _closure2_slot31;
                    var2['optionValues'] = var7;
                    var6 = _closure2_slot29;
                    var8 = var6.current;
                    var7 = var8.has;
                    var6 = var1.name;
                    var6 = var7.bind(var8)(var6);
                    var2['isPreSelectedOption'] = var6;
                    var1 = var1.name;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var37 = var38.bind(var39)(var37);
            var28['children'] = var37;
            var28 = var32.bind(var4)(var29, var28);
            var26[1] = var28;
            var29 = _closure1_slot20;
            var27 = var35[var27];
            var27 = var31.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var32 = 51;
            var32 = var35[var32];
            var32 = var36.bind(var4)(var32);
            var32 = var32.LayoutAnimation;
            var27['layout'] = var32;
            var27['collapsable'] = var30;
            var32 = _closure1_slot20;
            var30 = 52;
            var30 = var35[var30];
            var31 = var31.bind(var4)(var30);
            var30 = {};
            var35 = var5.optionalOptionList;
            var30['style'] = var35;
            var30['options'] = var34;
            var30['onSelectOption'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var27['children'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var26[2] = var27;
            var22['children'] = var26;
            var15 = var25.bind(var4)(var23, var22);
case 152:
            var14[4] = var15;
            var23 = _closure1_slot20;
            var22 = _closure1_slot0;
            var25 = _closure1_slot3;
            var15 = 53;
            var15 = var25[var15];
            var15 = var22.bind(var4)(var15);
            var22 = var15.Spacer;
            var15 = {};
            var15['size'] = var24;
            var15 = var23.bind(var4)(var22, var15);
            var14[5] = var15;
            var8['children'] = var14;
            var13 = var3.bind(var4)(var13, var8);
            var8 = new Array(2);
            var8[0] = var13;
            var15 = _closure1_slot20;
            var14 = _closure1_slot27;
            var13 = {};
            var13['enableSubmit'] = var21;
            var13['onSubmit'] = var20;
            var13['animatedStyle'] = var19;
            var13['onHeightChange'] = var18;
            var13['isSending'] = var17;
            var13['footerStickyInsetBottom'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var8[1] = var13;
            var1['children'] = var8;
            var7 = var3.bind(var4)(var2, var1);
case 141:
            _fun0003_ip = 159; continue _fun0003;
case 137:
            var3 = _closure1_slot20;
            var2 = _closure1_slot31;
            var1 = {};
            var1['onPressBack'] = var11;
            var7 = var3.bind(var4)(var2, var1);
case 159:
            _fun0003_ip = 160; continue _fun0003;
case 135:
            var3 = _closure1_slot20;
            var2 = _closure1_slot30;
            var1 = {};
            var7 = var3.bind(var4)(var2, var1);
case 160:
            var3 = _closure1_slot21;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot20;
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 13;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AppLauncherCommandViewHeader;
            var6 = {};
            var6['command'] = var12;
            var6['onPressBack'] = var11;
            var6['scrollOffsetY'] = var10;
            var6['section'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function AppLauncherCommandView(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var11 = var1.command;
            var _closure2_slot0 = var11;
            var13 = var1.context;
            var3 = var1.section;
            var14 = var1.preSelectedCommand;
            var6 = var1.analyticsLocation;
            var8 = var1.installOnDemand;
            var7 = var1.sectionName;
            var19 = var1.expandBottomSheet;
            var _closure2_slot1 = var19;
            var5 = var1.onCommandExecuted;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var12 = _closure1_slot1;
            var15 = _closure1_slot3;
            var9 = 54;
            var9 = var15[var9];
            var17 = var12.bind(var4)(var9);
            var10 = var13.channel;
            var9 = null;
            var16 = var9 != var10;
            var10 = 'channel should not be null';
            var10 = var17.bind(var4)(var16, var10);
            var10 = 55;
            var10 = var15[var10];
            var10 = var12.bind(var4)(var10);
            var21 = var10.bind(var4)();
            var _closure2_slot2 = var21;
            var27 = var13.channel;
            var10 = function usePreSelectedCommand(arg1, arg2, arg3, arg4) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var7 = arg1;
                    var10 = arg2;
                    var13 = arg3;
                    var12 = arg4;
                    var _closure3_slot0 = var13;
                    var _closure3_slot1 = var12;
                    var3 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 56;
                    var2 = var5[var2];
                    var8 = undefined;
                    var9 = var3.bind(var8)(var2);
                    var6 = var9.useCommand;
                    var3 = {};
                    var3['channel'] = var7;
                    var5 = 'channel';
                    var3['type'] = var5;
                    var15 = null;
                    var11 = var15 == var10;
                    var2 = undefined;
                    if(var11) { _fun0024_ip = 161; continue _fun0024 }
case 162:
                    var2 = var10.commandId;
case 161:
                    var2 = var6.bind(var9)(var3, var2);
                    var11 = var2.command;
                    var _closure3_slot2 = var11;
                    var6 = var2.application;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var2['channel'] = var7;
                    var2['type'] = var5;
                    var5 = true;
                    var3 = var3.bind(var8)(var2, var5, var5);
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var8)(var5, var5);
                    var5 = var15 != var6;
                    var10 = null;
                    if(!var5) { _fun0024_ip = 163; continue _fun0024 }
case 164:
                    var9 = var2.result;
                    var14 = var15 == var9;
                    var5 = undefined;
                    if(var14) { _fun0024_ip = 165; continue _fun0024 }
case 25:
                    var14 = var9.sections;
                    var9 = var6.id;
                    var9 = var14[var9];
                    var14 = var15 == var9;
                    var5 = undefined;
                    if(var14) { _fun0024_ip = 165; continue _fun0024 }
case 86:
                    var5 = var9.descriptor;
case 165:
                    if(!(var15 == var5)) { _fun0024_ip = 43; continue _fun0024 }
case 166:
                    var14 = var3.result;
                    var16 = var15 == var14;
                    var9 = undefined;
                    if(var16) { _fun0024_ip = 167; continue _fun0024 }
case 168:
                    var16 = var14.sections;
                    var14 = var6.id;
                    var14 = var16[var14];
                    var9 = var14.descriptor;
case 167:
                    var5 = var9;
case 43:
                    var10 = var5;
case 163:
                    var _closure3_slot3 = var10;
                    var14 = var15 != var6;
                    if(!var14) { _fun0024_ip = 65; continue _fun0024 }
case 169:
                    var9 = var3.result;
                    var16 = var15 == var9;
                    var5 = undefined;
                    if(var16) { _fun0024_ip = 170; continue _fun0024 }
case 52:
                    var9 = var9.sections;
                    var6 = var6.id;
                    var5 = var9[var6];
case 170:
                    var14 = var15 != var5;
case 65:
                    var9 = _closure1_slot6;
                    var6 = var9.useRef;
                    var5 = false;
                    var5 = var6.bind(var9)(var5);
                    var _closure3_slot4 = var5;
                    var9 = _closure1_slot6;
                    var6 = var9.useEffect;
                    var5 = new Array(4);
                    var5[0] = var11;
                    var5[1] = var10;
                    var5[2] = var13;
                    var5[3] = var12;
                    var4 = function() {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                            var2 = _closure3_slot2;
                            var4 = null;
                            var2 = var4 == var2;
                            if(var2) { _fun0025_ip = 59; continue _fun0025 }
case 92:
                            var3 = _closure3_slot3;
                            var2 = var4 == var3;
case 59:
                            if(var2) { _fun0025_ip = 80; continue _fun0025 }
case 171:
                            var3 = _closure3_slot4;
                            var2 = var3.current;
case 80:
                            if(var2) { _fun0025_ip = 172; continue _fun0025 }
case 173:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var5 = 57;
                            var2 = var8[var5];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var2);
                            var3 = var4.trackCommandSelected;
                            var2 = {};
                            var9 = _closure3_slot2;
                            var2['command'] = var9;
                            var5 = var8[var5];
                            var7 = var7.bind(var6)(var5);
                            var6 = var7.getCommandTriggerSection;
                            var5 = _closure3_slot3;
                            var5 = var6.bind(var7)(var5);
                            var2['triggerSection'] = var5;
                            var5 = _closure3_slot0;
                            var2['location'] = var5;
                            var5 = _closure3_slot1;
                            var2['sectionName'] = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure3_slot4;
                            var1 = true;
                            var2['current'] = var1;
case 172:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var6.bind(var9)(var4, var5);
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 58;
                    var4 = var12[var4];
                    var6 = var9.bind(var8)(var4);
                    var5 = var6.usePermissionContext;
                    var4 = 34;
                    var4 = var12[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.ApplicationCommandType;
                    var9 = var4.CHAT;
                    var4 = new Array(1);
                    var4[0] = var9;
                    var13 = var5.bind(var6)(var7, var4);
                    if(!(var15 != var10)) { _fun0024_ip = 174; continue _fun0024 }
case 72:
                    if(!(var15 != var11)) { _fun0024_ip = 174; continue _fun0024 }
case 175:
                    var5 = var13.hasBaseAccessPermissions;
                    var12 = var13.context;
                    var19 = var13.userId;
                    var18 = var13.roleIds;
                    var17 = var13.isImpersonating;
                    var6 = var15 == var12;
                    var4 = undefined;
                    if(var6) { _fun0024_ip = 176; continue _fun0024 }
case 177:
                    var4 = var12.guild_id;
case 176:
                    var4 = var15 != var4;
                    var16 = null;
                    if(!var4) { _fun0024_ip = 178; continue _fun0024 }
case 179:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 59;
                    var4 = var7[var4];
                    var9 = var6.bind(var8)(var4);
                    var7 = var9.computeAllowedForUser;
                    var24 = var10.permissions;
                    var23 = var12.guild_id;
                    var25 = var9;
                    var22 = var19;
                    var21 = var18;
                    var20 = var17;
                    var16 = var25[var7](var24, var23, var22, var21, var20, var19);
case 178:
                    var6 = var15 == var12;
                    var4 = undefined;
                    if(var6) { _fun0024_ip = 180; continue _fun0024 }
case 181:
                    var4 = var12.guild_id;
case 180:
                    var4 = var15 != var4;
                    var15 = null;
                    if(!var4) { _fun0024_ip = 182; continue _fun0024 }
case 183:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 59;
                    var4 = var7[var4];
                    var9 = var6.bind(var8)(var4);
                    var7 = var9.computeAllowedForChannel;
                    var6 = var10.permissions;
                    var4 = var12.guild_id;
                    var15 = var7.bind(var9)(var6, var12, var4);
case 182:
                    var7 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 59;
                    var1 = var9[var4];
                    var12 = var7.bind(var8)(var1);
                    var6 = var12.hasAccess;
                    var1 = {};
                    var1['applicationAllowedForUser'] = var16;
                    var1['applicationAllowedForChannel'] = var15;
                    var15 = var10.botId;
                    var1['commandBotId'] = var15;
                    var1['isGuildInstalled'] = var14;
                    var6 = var6.bind(var12)(var11, var13, var1);
                    var1 = {};
                    var1['command'] = var11;
                    var1['sectionDescriptor'] = var10;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.HasAccessResult;
                    var4 = var4.ALLOWED;
                    var4 = var6 === var4;
                    if(!var4) { _fun0024_ip = 184; continue _fun0024 }
case 185:
                    var4 = var5;
case 184:
                    var1['hasPermission'] = var4;
                    var4 = var2.fetchState;
                    var4 = var4.fetching;
                    if(var4) { _fun0024_ip = 186; continue _fun0024 }
case 187:
                    var5 = var3.fetchState;
                    var4 = var5.fetching;
case 186:
                    var1['loading'] = var4;
                    return var1;
case 174:
                    var1 = {'command': null, 'sectionDescriptor': null, 'hasPermission': false};
                    var2 = var2.fetchState;
                    var2 = var2.fetching;
                    if(var2) { _fun0024_ip = 188; continue _fun0024 }
case 189:
                    var3 = var3.fetchState;
                    var2 = var3.fetching;
case 188:
                    var1['loading'] = var2;
                    return var1;
                }
            };
            var28 = undefined;
            var26 = var14;
            var25 = var6;
            var24 = var7;
            var12 = var28[var10](var27, var26, var25, var24, var23);
            var17 = var12.command;
            var15 = var12.sectionDescriptor;
            var10 = var12.hasPermission;
            var12 = var12.loading;
            var _closure2_slot3 = var12;
            if(!(var9 != var11)) { _fun0023_ip = 190; continue _fun0023 }
case 191:
            var17 = var11;
case 190:
            if(!(var9 != var3)) { _fun0023_ip = 168; continue _fun0023 }
case 35:
            var15 = var3;
case 168:
            var16 = _closure1_slot0;
            var18 = _closure1_slot3;
            var3 = 24;
            var3 = var18[var3];
            var16 = var16.bind(var4)(var3);
            var3 = var16.useRequiredAppLauncherContext;
            var3 = var3.bind(var16)();
            var20 = var3.bottomSheetExpandReasonRef;
            _closure2_slot4 = var20;
            var22 = var9 != var17;
            if(!var22) { _fun0023_ip = 120; continue _fun0023 }
case 192:
            var3 = var17.options;
            if(!(var9 == var3)) { _fun0023_ip = 193; continue _fun0023 }
case 194:
            var3 = new Array(0);
case 193:
            var16 = var3.length;
            var3 = 0;
            var22 = var16 > var3;
case 120:
            _closure2_slot5 = var22;
            var18 = _closure1_slot6;
            var16 = var18.useEffect;
            var3 = new Array(6);
            var3[0] = var11;
            var3[1] = var22;
            var3[2] = var12;
            var3[3] = var21;
            var3[4] = var20;
            var3[5] = var19;
            var2 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0026_ip = 195; continue _fun0026 }
case 76:
                    var3 = _closure2_slot5;
                    if(var3) { _fun0026_ip = 196; continue _fun0026 }
case 197:
                    var4 = _closure2_slot3;
                    var4 = !var4;
                    if(!var4) { _fun0026_ip = 198; continue _fun0026 }
case 171:
                    var6 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var6;
case 198:
                    var3 = var4;
case 196:
                    var2 = var3;
case 195:
                    if(!var2) { _fun0026_ip = 199; continue _fun0026 }
case 200:
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var3 = var3.COMMAND_VIEW;
                    var4['current'] = var3;
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0026_ip = 199; continue _fun0026 }
case 201:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 199:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var16.bind(var18)(var2, var3);
            var3 = _closure1_slot20;
            var2 = _closure1_slot28;
            var1 = {};
            var18 = var9 != var17;
            var16 = undefined;
            if(!var18) { _fun0023_ip = 124; continue _fun0023 }
case 202:
            var16 = var17;
case 124:
            var1['command'] = var16;
            var1['context'] = var13;
            var16 = var9 != var15;
            var13 = undefined;
            if(!var16) { _fun0023_ip = 203; continue _fun0023 }
case 127:
            var13 = var15;
case 203:
            var1['section'] = var13;
            var15 = var9 != var14;
            var13 = null;
            if(!var15) { _fun0023_ip = 204; continue _fun0023 }
case 37:
            var13 = var14;
case 204:
            var1['preSelectedCommand'] = var13;
            var1['loading'] = var12;
            var9 = var9 != var11;
            if(var9) { _fun0023_ip = 72; continue _fun0023 }
case 205:
            var9 = var10;
case 72:
            var1['hasPermissions'] = var9;
            var1['installOnDemand'] = var8;
            var1['sectionName'] = var7;
            var1['analyticsLocation'] = var6;
            var1['onCommandExecuted'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function LoadingState() {
        var4 = _closure1_slot20;
        var3 = _closure1_slot7;
        var2 = {};
        var5 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
        var2['style'] = var5;
        var7 = _closure1_slot20;
        var6 = _closure1_slot8;
        var5 = {};
        var1 = 'large';
        var5['size'] = var1;
        var1 = undefined;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function NotFoundState(arg1) {
        var1 = arg1;
        var13 = var1.onPressBack;
        var1 = _closure1_slot23;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var14 = _closure1_slot0;
        var15 = _closure1_slot3;
        var1 = 30;
        var1 = var15[var1];
        var3 = var14.bind(var4)(var1);
        var2 = var3.useLogAppLauncherEmptyStateView;
        var1 = 47;
        var1 = var15[var1];
        var1 = var14.bind(var4)(var1);
        var1 = var1.AppLauncherEmptyStateType;
        var1 = var1.COMMAND_NOT_FOUND;
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot20;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var12.emptyStateContainer;
        var1['style'] = var5;
        var7 = _closure1_slot20;
        var5 = 53;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.EmptyState;
        var5 = {};
        var9 = var12.emptyState;
        var5['style'] = var9;
        var10 = _closure1_slot1;
        var9 = 60;
        var9 = var15[var9];
        var9 = var10.bind(var4)(var9);
        var5['lightSource'] = var9;
        var9 = 61;
        var9 = var15[var9];
        var9 = var10.bind(var4)(var9);
        var5['darkSource'] = var9;
        var11 = 22;
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var16 = var9.intl;
        var10 = var16.string;
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.pX/qb9;
        var9 = var10.bind(var16)(var9);
        var5['title'] = var9;
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var16 = var9.intl;
        var10 = var16.string;
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.exOQVY;
        var9 = var10.bind(var16)(var9);
        var5['body'] = var9;
        var10 = _closure1_slot20;
        var8 = 21;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.BaseTextButton;
        var8 = {'shrink': true, 'size': 'sm', 'variant': 'secondary'};
        var8['onPress'] = var13;
        var13 = var12.failureStateButtonPill;
        var8['pillStyle'] = var13;
        var12 = var12.failureStateButtonWrapper;
        var8['style'] = var12;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11["/g10LC"];
        var11 = var12.bind(var13)(var11);
        var8['text'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function NoPermsState(arg1) {
        var1 = arg1;
        var14 = var1.onPressBack;
        var17 = var1.command;
        var1 = _closure1_slot23;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var1 = 30;
        var1 = var16[var1];
        var3 = var15.bind(var4)(var1);
        var2 = var3.useLogAppLauncherEmptyStateView;
        var1 = 47;
        var1 = var16[var1];
        var1 = var15.bind(var4)(var1);
        var1 = var1.AppLauncherEmptyStateType;
        var1 = var1.COMMAND_NO_PERMISSIONS;
        var1 = var2.bind(var3)(var1);
        var3 = _closure1_slot21;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var13.emptyStateContainer;
        var1['style'] = var5;
        var7 = _closure1_slot21;
        var6 = _closure1_slot7;
        var5 = {};
        var8 = var13.commandNameContainer;
        var5['style'] = var8;
        var12 = _closure1_slot20;
        var10 = 49;
        var8 = var16[var10];
        var8 = var15.bind(var4)(var8);
        var11 = var8.Text;
        var8 = {'variant': 'heading-lg/bold', 'color': 'text-default'};
        var18 = var17.displayName;
        var8['children'] = var18;
        var11 = var12.bind(var4)(var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var12 = _closure1_slot20;
        var10 = var16[var10];
        var10 = var15.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'variant': 'heading-sm/medium', 'color': 'text-default'};
        var17 = var17.displayDescription;
        var10['children'] = var17;
        var10 = var12.bind(var4)(var11, var10);
        var8[1] = var10;
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot20;
        var6 = 53;
        var6 = var16[var6];
        var6 = var15.bind(var4)(var6);
        var7 = var6.EmptyState;
        var6 = {};
        var10 = var13.emptyState;
        var6['style'] = var10;
        var11 = _closure1_slot1;
        var10 = 62;
        var10 = var16[var10];
        var10 = var11.bind(var4)(var10);
        var6['lightSource'] = var10;
        var10 = 63;
        var10 = var16[var10];
        var10 = var11.bind(var4)(var10);
        var6['darkSource'] = var10;
        var12 = 22;
        var10 = var16[var12];
        var10 = var15.bind(var4)(var10);
        var17 = var10.intl;
        var11 = var17.string;
        var10 = var16[var12];
        var10 = var15.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.TzufcR;
        var10 = var11.bind(var17)(var10);
        var6['title'] = var10;
        var10 = var16[var12];
        var10 = var15.bind(var4)(var10);
        var17 = var10.intl;
        var11 = var17.string;
        var10 = var16[var12];
        var10 = var15.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.I/O+A1;
        var10 = var11.bind(var17)(var10);
        var6['body'] = var10;
        var11 = _closure1_slot20;
        var9 = 21;
        var9 = var16[var9];
        var9 = var15.bind(var4)(var9);
        var10 = var9.BaseTextButton;
        var9 = {'shrink': true, 'size': 'sm', 'variant': 'secondary'};
        var9['onPress'] = var14;
        var14 = var13.failureStateButtonPill;
        var9['pillStyle'] = var14;
        var13 = var13.failureStateButtonWrapper;
        var9['style'] = var13;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12["/g10LC"];
        var12 = var13.bind(var14)(var12);
        var9['text'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot32 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var7 = var4.ActivityIndicator;
    var _closure1_slot8 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useContextIndexState;
    var _closure1_slot11 = var7;
    var4 = var4.useUserIndexState;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AppLauncherOptionAutoFocusType;
    var _closure1_slot14 = var7;
    var7 = var4.useAppLauncherNavigation;
    var _closure1_slot15 = var7;
    var14 = var4.DEFAULT_CONTENT_PADDING;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot16 = var7;
    var7 = var4.NOOP;
    var _closure1_slot17 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot18 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot19 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.jsxs;
    var _closure1_slot21 = var7;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['height'] = var10;
    var10 = 12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = 13;
    var15 = var6[var13];
    var15 = var5.bind(var1)(var15);
    var16 = var15.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_4;
    var15 = var16 + var15;
    var9['paddingTop'] = var15;
    var9['paddingHorizontal'] = var14;
    var9['paddingBottom'] = var14;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var9['backgroundColor'] = var15;
    var4['optionsContainer'] = var9;
    var15 = 24;
    var9 = {'marginTop': 24, 'gap': 24};
    var4['requiredOptionsContainer'] = var9;
    var9 = {};
    var4['optionalOptionsContainer'] = var9;
    var9 = {};
    var9['marginBottom'] = var15;
    var4['optionalOptionsChild'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['optionalOptionsFirstChild'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['optionalOptionsLastChild'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'bottom': 0, 'right': 0};
    var9['paddingHorizontal'] = var14;
    var4['footerContainer'] = var9;
    var9 = {'flex': 1, 'overflow': 'hidden'};
    var4['submitButton'] = var9;
    var9 = {};
    var14 = 36;
    var9['marginTop'] = var14;
    var4['optionalOptionsSectionTitle'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['optionalOptionList'] = var9;
    var9 = {'paddingVertical': 16, 'paddingHorizontal': 12, 'backgroundColor': null, 'marginTop': 24};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var4['noRequiredOptionsCalloutContainer'] = var9;
    var9 = {'padding': 16, 'backgroundColor': null, 'marginTop': 24};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var4['noOptionCalloutContainer'] = var9;
    var9 = {'backgroundColor': 'transparent', 'justifyContent': 'flex-start', 'paddingTop': 30};
    var4['emptyState'] = var9;
    var9 = {};
    var13 = var6[var13];
    var13 = var5.bind(var1)(var13);
    var14 = var13.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var13 = var14 + var13;
    var9['paddingTop'] = var13;
    var9['flex'] = var12;
    var4['emptyStateContainer'] = var9;
    var9 = {'marginTop': 24, 'alignSelf': 'center'};
    var4['failureStateButtonWrapper'] = var9;
    var9 = {'borderRadius': null, 'paddingHorizontal': 12, 'paddingVertical': 8};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var9['borderRadius'] = var12;
    var4['failureStateButtonPill'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'textAlign': 'center'};
    var4['commandNameContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var9['backgroundColor'] = var10;
    var4['linearGradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = "function AppLauncherCommandViewScreenTsx1(){const{shouldReduceMotion,isPressedDown,withDelay,withTiming,timingStandard,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,isSending}=this.__closure;if(shouldReduceMotion)return{};if(isPressedDown){return{opacity:1,transform:[{translateX:withDelay(100,withTiming(-4,timingStandard,'respect-motion-settings',function(){return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}))}]};}return{opacity:withTiming(isSending.get()?0:1,timingStandard),transform:[{translateX:withTiming(isSending.get()?100:0,timingStandard)}]};}";
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function AppLauncherCommandViewScreenTsx2(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;return runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function AppLauncherCommandViewScreenTsx3(){const{bottomSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=bottomSheetPosition.get()-screenHeight+maxHeight;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = 64;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherCommandViewScreen(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var1 = var1.route;
            var1 = var1.params;
            var13 = var1.command;
            var12 = var1.context;
            var11 = var1.section;
            var10 = var1.preSelectedCommand;
            var7 = var1.analyticsLocation;
            var9 = var1.installOnDemand;
            var8 = var1.sectionName;
            var6 = var1.expandBottomSheet;
            var2 = var1.onCommandExecuted;
            var4 = var12.type;
            var3 = 'channel';
            var1 = null;
            if(!(var3 === var4)) { _fun0027_ip = 206; continue _fun0027 }
case 70:
            var5 = _closure1_slot20;
            var4 = _closure1_slot29;
            var3 = {};
            var3['command'] = var13;
            var3['context'] = var12;
            var3['section'] = var11;
            var3['preSelectedCommand'] = var10;
            var3['installOnDemand'] = var9;
            var3['sectionName'] = var8;
            var3['analyticsLocation'] = var7;
            var3['expandBottomSheet'] = var6;
            var3['onCommandExecuted'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 206:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();