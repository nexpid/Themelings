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
        var12 = var1.enableSubmit;
        var13 = var1.onSubmit;
        var8 = var1.animatedStyle;
        var2 = var1.onHeightChange;
        var _closure2_slot0 = var2;
        var16 = var1.isSending;
        var _closure2_slot1 = var16;
        var1 = _closure1_slot23;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var7 = _closure1_slot1;
        var15 = _closure1_slot3;
        var1 = 14;
        var1 = var15[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var17 = var1.bottom;
        var2 = _closure1_slot6;
        var1 = var2.useState;
        var19 = 0;
        var2 = var1.bind(var2)(var19);
        var1 = _closure1_slot5;
        var5 = 2;
        var1 = var1.bind(var4)(var2, var5);
        var20 = var1[var19];
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot2 = var1;
        var14 = _closure1_slot0;
        var1 = 15;
        var1 = var15[var1];
        var18 = var14.bind(var4)(var1);
        var11 = var18.useStateFromStores;
        var1 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot10;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var21 = var11.bind(var18)(var3, var1);
        var _closure2_slot3 = var21;
        var11 = _closure1_slot6;
        var3 = var11.useState;
        var1 = false;
        var3 = var3.bind(var11)(var1);
        var1 = _closure1_slot5;
        var1 = var1.bind(var4)(var3, var5);
        var18 = var1[var19];
        var _closure2_slot4 = var18;
        var1 = var1[var2];
        var _closure2_slot5 = var1;
        var1 = 16;
        var2 = var15[var1];
        var5 = var14.bind(var4)(var2);
        var3 = var5.useAnimatedStyle;
        var2 = function p() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot3;
                if(var2) { _fun0001_ip = 432; continue _fun0001 }
 13:
                var4 = _closure2_slot4;
                var2 = {};
                if(var4) { _fun0001_ip = 203; continue _fun0001 }
 28:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var7 = 17;
                var4 = var4[var7];
                var9 = undefined;
                var12 = var5.bind(var9)(var4);
                var11 = var12.withTiming;
                var5 = _closure2_slot1;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var8 = 1;
                if(!var4) { _fun0001_ip = 76; continue _fun0001 }
 74:
                var8 = 0;
 76:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var10 = 18;
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
                if(!var1) { _fun0001_ip = 149; continue _fun0001 }
 146:
                var5 = 100;
 149:
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
                _fun0001_ip = 430; continue _fun0001;
 203:
                var4 = 1;
                var2['opacity'] = var4;
                var4 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 16;
                var5 = var15[var12];
                var13 = undefined;
                var7 = var14.bind(var13)(var5);
                var6 = var7.withDelay;
                var5 = 17;
                var5 = var15[var5];
                var11 = var14.bind(var13)(var5);
                var10 = var11.withTiming;
                var5 = 18;
                var5 = var15[var5];
                var5 = var14.bind(var13)(var5);
                var19 = var5.timingStandard;
                var8 = function e() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 16;
                    var1 = var5[var1];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var1);
                    var6 = var7.runOnJS;
                    var1 = 19;
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
                var12 = 19;
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
 430:
                _fun0001_ip = 434; continue _fun0001;
 432:
                var1 = {};
 434:
                return var1;
            }
        };
        var11 = {};
        var11['shouldReduceMotion'] = var21;
        var11['isPressedDown'] = var18;
        var18 = var15[var1];
        var18 = var14.bind(var4)(var18);
        var18 = var18.withDelay;
        var11['withDelay'] = var18;
        var18 = 17;
        var18 = var15[var18];
        var18 = var14.bind(var4)(var18);
        var18 = var18.withTiming;
        var11['withTiming'] = var18;
        var18 = 18;
        var18 = var15[var18];
        var18 = var14.bind(var4)(var18);
        var18 = var18.timingStandard;
        var11['timingStandard'] = var18;
        var18 = var15[var1];
        var18 = var14.bind(var4)(var18);
        var18 = var18.runOnJS;
        var11['runOnJS'] = var18;
        var18 = 19;
        var21 = var15[var18];
        var21 = var14.bind(var4)(var21);
        var21 = var21.triggerHapticFeedback;
        var11['triggerHapticFeedback'] = var21;
        var18 = var15[var18];
        var18 = var14.bind(var4)(var18);
        var18 = var18.HapticFeedbackTypes;
        var11['HapticFeedbackTypes'] = var18;
        var11['isSending'] = var16;
        var2['__closure'] = var11;
        var11 = 576353278359.0;
        var2['__workletHash'] = var11;
        var11 = _closure1_slot24;
        var2['__initData'] = var11;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot6 = var2;
        var3 = _closure1_slot21;
        var1 = var15[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var5 = function onLayout(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.height;
                var4 = _closure2_slot2;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var5 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var5)) { _fun0002_ip = 52; continue _fun0002 }
 43:
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)(var3);
 52:
                return var1;
            }
        };
        var1['onLayout'] = var5;
        var11 = var10.footerContainer;
        var5 = new Array(2);
        var5[0] = var11;
        var5[1] = var8;
        var1['style'] = var5;
        var11 = _closure1_slot20;
        var5 = 20;
        var5 = var15[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var16 = {'width': '100%', 'top': 4294967284, 'bottom': null, 'left': null, 'position': 'absolute'};
        var17 = -var17;
        var16['bottom'] = var17;
        var17 = var10.footerContainer;
        var17 = var17.paddingHorizontal;
        var16['left'] = var17;
        var5['style'] = var16;
        var16 = _closure1_slot18;
        var16 = var16.START;
        var5['start'] = var16;
        var16 = {};
        var16['x'] = var19;
        var17 = var10.submitButton;
        var18 = var17.borderRadius;
        var17 = 12;
        var18 = var17 + var18;
        var20 = var20 + var17;
        var17 = var10.submitButton;
        var17 = var17.borderRadius;
        var17 = var20 + var17;
        var17 = var18 / var17;
        var16['y'] = var17;
        var5['end'] = var16;
        var16 = 21;
        var16 = var15[var16];
        var18 = var14.bind(var4)(var16);
        var17 = var18.hexWithOpacity;
        var16 = var10.linearGradient;
        var16 = var16.backgroundColor;
        var17 = var17.bind(var18)(var16, var19);
        var16 = new Array(2);
        var16[0] = var17;
        var17 = var10.linearGradient;
        var17 = var17.backgroundColor;
        var16[1] = var17;
        var5['colors'] = var16;
        var16 = 'none';
        var5['pointerEvents'] = var16;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot20;
        var11 = 22;
        var6 = var15[var11];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['onPress'] = var13;
        var13 = function onPressIn() {
            var3 = _closure2_slot5;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var6['onPressIn'] = var13;
        var13 = function onPressOut() {
            var3 = _closure2_slot5;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var6['onPressOut'] = var13;
        var12 = !var12;
        var6['disabled'] = var12;
        var12 = var10.submitButton;
        var6['style'] = var12;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.ButtonColors;
        var11 = var11.BRAND;
        var6['color'] = var11;
        var11 = 23;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.TXNS7e;
        var11 = var12.bind(var13)(var11);
        var6['text'] = var11;
        var10 = var10.submitButton;
        var10 = var10.borderRadius;
        var6['cornerRadius'] = var10;
        var9 = function renderRightIcon() {
            var4 = _closure1_slot20;
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 16;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var9.bind(var3)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = _closure2_slot6;
            var1['style'] = var6;
            var7 = _closure1_slot20;
            var6 = _closure1_slot0;
            var5 = 24;
            var5 = var10[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.SendMessageIcon;
            var5 = {};
            var8 = {};
            var11 = 8;
            var8['marginLeft'] = var11;
            var5['style'] = var8;
            var8 = 12;
            var8 = var10[var8];
            var8 = var9.bind(var3)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.WHITE_500;
            var5['color'] = var8;
            var8 = 'sm';
            var5['size'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var6['renderRightIcon'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function AppLauncherCommandViewInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var12 = var2.command;
            var _closure2_slot0 = var12;
            var40 = var2.context;
            var _closure2_slot1 = var40;
            var9 = var2.section;
            var13 = var2.preSelectedCommand;
            var3 = var2.loading;
            var1 = var2.hasPermissions;
            var46 = var2.installOnDemand;
            var _closure2_slot2 = var46;
            var44 = var2.sectionName;
            var _closure2_slot3 = var44;
            var43 = var2.analyticsLocation;
            var _closure2_slot4 = var43;
            var19 = var2.onCommandExecuted;
            var _closure2_slot5 = var19;
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
            var10 = _closure1_slot3;
            var2 = 25;
            var2 = var10[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.useRequiredAppLauncherContext;
            var2 = var2.bind(var8)();
            var45 = var2.keyboardCloseReasonRef;
            var _closure2_slot8 = var45;
            var8 = var2.entrypoint;
            var _closure2_slot9 = var8;
            var41 = var2.chatInputRef;
            var _closure2_slot10 = var41;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var2 = null;
            var27 = var10.bind(var11)(var2);
            var _closure2_slot11 = var27;
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
            if(var10) { _fun0003_ip = 471; continue _fun0003 }
 465:
            var11 = var13.commandId;
 471:
            var14 = var2 == var12;
            var10 = undefined;
            if(var14) { _fun0003_ip = 485; continue _fun0003 }
 480:
            var10 = var12.id;
 485:
            var18 = null;
            if(!(var11 === var10)) { _fun0003_ip = 518; continue _fun0003 }
 491:
            var11 = var2 == var13;
            var10 = undefined;
            if(var11) { _fun0003_ip = 506; continue _fun0003 }
 500:
            var10 = var13.prefilledOptions;
 506:
            var11 = var2 != var10;
            var18 = null;
            if(!var11) { _fun0003_ip = 518; continue _fun0003 }
 515:
            var18 = var10;
 518:
            _closure2_slot16 = var18;
            var10 = var40.channel;
            var34 = var10.guild_id;
            _closure2_slot17 = var34;
            var25 = _closure1_slot0;
            var32 = _closure1_slot3;
            var10 = 15;
            var10 = var32[var10];
            var16 = var25.bind(var4)(var10);
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
            var22 = var14.bind(var16)(var11, var10);
            _closure2_slot18 = var22;
            var11 = _closure1_slot6;
            var10 = var11.useRef;
            var29 = false;
            var10 = var10.bind(var11)(var29);
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
            var11 = var11.bind(var14)(var29);
            _closure2_slot22 = var11;
            var17 = _closure1_slot6;
            var16 = var17.useEffect;
            var14 = new Array(1);
            var14[0] = var12;
            var11 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0004_ip = 19; continue _fun0004 }
 15:
                    var3 = undefined;
                    return var3;
 19:
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
 0:
                            var1 = _closure2_slot22;
                            var1 = var1.current;
                            if(var1) { _fun0005_ip = 162; continue _fun0005 }
 18:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = _closure3_slot0;
                            var8 = var2 - var1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 26;
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
                            if(var9) { _fun0005_ip = 117; continue _fun0005 }
 112:
                            var7 = var8.length;
 117:
                            var8 = var6 != var7;
                            var6 = 0;
                            if(!var8) { _fun0005_ip = 129; continue _fun0005 }
 126:
                            var6 = var7;
 129:
                            var1['num_options'] = var6;
                            var6 = _closure3_slot1;
                            var1['used_options'] = var6;
                            var5 = _closure3_slot2;
                            var1['last_used_option_type'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
 162:
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
            var11[0] = var41;
            var11[1] = var45;
            var11[2] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0006_ip = 94; continue _fun0006 }
 20:
                    var3 = _closure2_slot8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 25;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.AppLauncherKeyboardCloseReason;
                    var2 = var2.BACK;
                    var3['current'] = var2;
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 108; continue _fun0006 }
 82:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0006_ip = 108; continue _fun0006;
 94:
                    var2 = _closure2_slot7;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 108:
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
            var37 = 2;
            var7 = var7.bind(var4)(var14, var37);
            var35 = var7[var15];
            var26 = 1;
            var7 = var7[var26];
            _closure2_slot23 = var7;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var7 = new Array(0);
            var14 = var14.bind(var16)(var7);
            var7 = _closure1_slot5;
            var14 = var7.bind(var4)(var14, var37);
            var7 = var14[var15];
            _closure2_slot24 = var7;
            var14 = var14[var26];
            _closure2_slot25 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useRef;
            var14 = var10.Set;
            var20 = var14.prototype;
            var20 = Object.create(var20, {constructor: {value: var14}});
            var52 = var20;
            var14 = new var52[var14](var51);
            var14 = var14 instanceof Object ? var14 : var20;
            var14 = var16.bind(var17)(var14);
            _closure2_slot26 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useState;
            var14 = new Array(0);
            var16 = var16.bind(var17)(var14);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var37);
            var38 = var14[var15];
            _closure2_slot27 = var38;
            var14 = var14[var26];
            _closure2_slot28 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useRef;
            var14 = var10.Set;
            var20 = var14.prototype;
            var20 = Object.create(var20, {constructor: {value: var14}});
            var52 = var20;
            var14 = new var52[var14](var51);
            var14 = var14 instanceof Object ? var14 : var20;
            var14 = var16.bind(var17)(var14);
            _closure2_slot29 = var14;
            var17 = _closure1_slot6;
            var16 = var17.useState;
            var14 = new Array(0);
            var16 = var16.bind(var17)(var14);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var37);
            var33 = var14[var15];
            var14 = var14[var26];
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
            var14 = var14.bind(var4)(var16, var37);
            var30 = var14[var15];
            _closure2_slot32 = var30;
            var14 = var14[var26];
            _closure2_slot33 = var14;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var21 = true;
            var16 = var14.bind(var16)(var21);
            var14 = _closure1_slot5;
            var14 = var14.bind(var4)(var16, var37);
            var20 = var14[var15];
            var14 = var14[var26];
            _closure2_slot34 = var14;
            var16 = _closure1_slot6;
            var14 = var16.useState;
            var10 = var10.Set;
            var17 = var10.prototype;
            var17 = Object.create(var17, {constructor: {value: var10}});
            var52 = var17;
            var10 = new var52[var10](var51);
            var10 = var10 instanceof Object ? var10 : var17;
            var14 = var14.bind(var16)(var10);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var14, var37);
            var14 = var10[var15];
            _closure2_slot35 = var14;
            var10 = var10[var26];
            _closure2_slot36 = var10;
            var16 = _closure1_slot6;
            var10 = var16.useState;
            var16 = var10.bind(var16)(var15);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var16, var37);
            var24 = var10[var15];
            _closure2_slot37 = var24;
            var10 = var10[var26];
            _closure2_slot38 = var10;
            var16 = _closure1_slot6;
            var10 = var16.useState;
            var16 = var10.bind(var16)(var2);
            var10 = _closure1_slot5;
            var10 = var10.bind(var4)(var16, var37);
            var28 = var10[var15];
            _closure2_slot39 = var28;
            var10 = var10[var26];
            _closure2_slot40 = var10;
            var31 = _closure1_slot1;
            var10 = 27;
            var16 = var32[var10];
            var17 = var31.bind(var4)(var16);
            var16 = {'includeCustomKeyboardHeightIOS': false, 'includeCustomKeyboardHeightAndroid': false, 'includeKeyboardHeight': true};
            var16 = var17.bind(var4)(var16);
            var16 = var16.insets;
            var16 = var16.bottom;
            var10 = var32[var10];
            var17 = var31.bind(var4)(var10);
            var10 = {'includeCustomKeyboardHeightIOS': false, 'includeCustomKeyboardHeightAndroid': false, 'includeKeyboardHeight': true};
            var10 = var17.bind(var4)(var10);
            var10 = var10.insets;
            var23 = _closure1_slot6;
            var17 = var23.useState;
            var23 = var17.bind(var23)(var15);
            var17 = _closure1_slot5;
            var17 = var17.bind(var4)(var23, var37);
            var23 = var17[var15];
            var17 = var17[var26];
            var10 = var10.bottom;
            var26 = var10 + var23;
            var10 = 12;
            var23 = var32[var10];
            var23 = var31.bind(var4)(var23);
            var23 = var23.spacing;
            var23 = var23.PX_16;
            var23 = var26 + var23;
            _closure2_slot41 = var23;
            var10 = var32[var10];
            var10 = var31.bind(var4)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var37 = var16 + var10;
            _closure2_slot42 = var37;
            var26 = 16;
            var10 = var32[var26];
            var16 = var25.bind(var4)(var10);
            var10 = var16.useSharedValue;
            var16 = var10.bind(var16)(var29);
            _closure2_slot43 = var16;
            var10 = var32[var26];
            var25 = var25.bind(var4)(var10);
            var10 = var25.useSharedValue;
            var10 = var10.bind(var25)(var15);
            _closure2_slot44 = var10;
            var42 = _closure1_slot6;
            var39 = var42.useCallback;
            var25 = new Array(3);
            var25[0] = var24;
            var25[1] = var23;
            var25[2] = var10;
            var24 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(!(var2 == var5)) { _fun0007_ip = 208; continue _fun0007 }
 62:
                    var6 = _closure2_slot15;
                    var6 = var6.current;
                    var8 = var6 - var9;
                    var10 = _closure2_slot44;
                    var6 = var10.get;
                    var10 = var6.bind(var10)();
                    var6 = 0;
                    if(!(!(var10 < var6))) { _fun0007_ip = 162; continue _fun0007 }
 94:
                    if(!(var8 > var6)) { _fun0007_ip = 393; continue _fun0007 }
 101:
                    var10 = _closure2_slot44;
                    var6 = var10.get;
                    var6 = var6.bind(var10)();
                    if(!(var6 > var8)) { _fun0007_ip = 393; continue _fun0007 }
 121:
                    var6 = _closure2_slot11;
                    var10 = var6.current;
                    if(!(var2 != var10)) { _fun0007_ip = 393; continue _fun0007 }
 137:
                    var8 = var10.scrollToEnd;
                    var6 = {};
                    var11 = true;
                    var6['animated'] = var11;
                    var6 = var8.bind(var10)(var6);
                    _fun0007_ip = 393; continue _fun0007;
 162:
                    var6 = _closure2_slot11;
                    var10 = var6.current;
                    if(!(var2 != var10)) { _fun0007_ip = 393; continue _fun0007 }
 178:
                    var8 = var10.scrollTo;
                    var6 = {'y': 0, 'animated': true};
                    var6 = var8.bind(var10)(var6);
                    _fun0007_ip = 393; continue _fun0007;
 208:
                    var6 = _closure2_slot12;
                    var8 = var6.current;
                    var6 = var5.name;
                    var6 = var8[var6];
                    var5 = var5.required;
                    if(var5) { _fun0007_ip = 246; continue _fun0007 }
 235:
                    var5 = _closure2_slot14;
                    var5 = var5.current;
                    _fun0007_ip = 255; continue _fun0007;
 246:
                    var8 = _closure2_slot13;
                    var5 = var8.current;
 255:
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
                    if(!(!(var6 < var5))) { _fun0007_ip = 324; continue _fun0007 }
 320:
                    if(!(var6 > var4)) { _fun0007_ip = 393; continue _fun0007 }
 324:
                    var3 = _closure2_slot11;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0007_ip = 393; continue _fun0007 }
 337:
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
 393:
                    return var1;
                }
            };
            var24 = var39.bind(var42)(var24, var25);
            _closure2_slot45 = var24;
            var47 = _closure1_slot6;
            var42 = var47.useCallback;
            var25 = var40.channel;
            var25 = var25.guild_id;
            var39 = new Array(3);
            var39[0] = var25;
            var25 = var40.channel;
            var25 = var25.id;
            var39[1] = var25;
            var39[2] = var30;
            var25 = function(arg1, arg2) {
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
                var1 = 28;
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
                var10 = 29;
                var10 = var12[var10];
                var10 = var11.bind(var1)(var10);
                var10 = var10.CommandOrigin;
                var10 = var10.APPLICATION_LAUNCHER;
                var6['commandOrigin'] = var10;
                var6 = var8.bind(var9)(var6);
                var4[var7] = var6;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot19;
                var4 = true;
                var5['current'] = var4;
                var3 = _closure2_slot21;
                var2 = var2.type;
                var3['current'] = var2;
                return var1;
            };
            var39 = var42.bind(var47)(var25, var39);
            _closure2_slot46 = var39;
            var25 = 30;
            var25 = var32[var25];
            var25 = var31.bind(var4)(var25);
            var47 = var25.bind(var4)(var12);
            _closure2_slot47 = var47;
            var32 = _closure1_slot6;
            var31 = var32.useEffect;
            var25 = new Array(6);
            var25[0] = var34;
            var25[1] = var12;
            var48 = var2 == var47;
            var42 = undefined;
            if(var48) { _fun0003_ip = 1644; continue _fun0003 }
 1639:
            var42 = var47.id;
 1644:
            var25[2] = var42;
            var25[3] = var18;
            var25[4] = var22;
            var18 = var40.channel;
            var18 = var18.id;
            var25[5] = var18;
            var18 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot0;
                    var8 = null;
                    var4 = var8 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0008_ip = 31; continue _fun0008 }
 22:
                    var4 = _closure2_slot0;
                    var5 = var4.id;
 31:
                    var4 = _closure2_slot47;
                    var6 = var8 == var4;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 53; continue _fun0008 }
 44:
                    var6 = _closure2_slot47;
                    var4 = var6.id;
 53:
                    if(!(var5 !== var4)) { _fun0008_ip = 264; continue _fun0008 }
 60:
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
                    if(var5) { _fun0008_ip = 131; continue _fun0008 }
 115:
                    var6 = _closure2_slot0;
                    var6 = var6.options;
                    var5 = var8 == var6;
                    var7 = var6;
 131:
                    if(var5) { _fun0008_ip = 151; continue _fun0008 }
 134:
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var10 = arg1;
                            var _closure4_slot0 = var10;
                            var3 = var10.required;
                            var2 = true;
                            if(!(var2 === var3)) { _fun0009_ip = 263; continue _fun0009 }
 24:
                            var4 = _closure3_slot2;
                            var3 = var4.push;
                            var3 = var3.bind(var4)(var10);
                            var3 = _closure2_slot31;
                            var5 = var3.current;
                            var4 = var10.name;
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var3 = 31;
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
                            var2 = 28;
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
                            var7 = 29;
                            var7 = var11[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.CommandOrigin;
                            var7 = var7.APPLICATION_LAUNCHER;
                            var2['commandOrigin'] = var7;
                            var2 = var5.bind(var6)(var2);
                            var4[var3] = var2;
                            _fun0009_ip = 554; continue _fun0009;
 263:
                            var3 = _closure2_slot16;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0009_ip = 301; continue _fun0009 }
 276:
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
                            if(var1) { _fun0009_ip = 323; continue _fun0009 }
 301:
                            var2 = _closure3_slot0;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var10);
                            _fun0009_ip = 554; continue _fun0009;
 323:
                            var3 = _closure3_slot1;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var10);
                            var2 = _closure2_slot31;
                            var4 = var2.current;
                            var3 = var10.name;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var2 = 31;
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
                            var1 = 28;
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
                            var6 = 29;
                            var6 = var9[var6];
                            var6 = var8.bind(var7)(var6);
                            var6 = var6.CommandOrigin;
                            var6 = var6.APPLICATION_LAUNCHER;
                            var1['commandOrigin'] = var6;
                            var1 = var4.bind(var5)(var1);
                            var3[var2] = var1;
 554:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
 151:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 32;
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
 264:
                    return var1;
                }
            };
            var18 = var31.bind(var32)(var18, var25);
            var25 = _closure1_slot0;
            var18 = _closure1_slot3;
            var31 = 33;
            var31 = var18[var31];
            var32 = var25.bind(var4)(var31);
            var31 = var32.useCommandContext;
            var47 = var31.bind(var32)(var40);
            _closure2_slot48 = var47;
            var42 = _closure1_slot6;
            var32 = var42.useCallback;
            var31 = new Array(9);
            var31[0] = var24;
            var31[1] = var41;
            var31[2] = var12;
            var31[3] = var47;
            var31[4] = var16;
            var31[5] = var45;
            var31[6] = var19;
            var31[7] = var30;
            var31[8] = var44;
            var19 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot0;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0010_ip = 496; continue _fun0010 }
 18:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 34;
                    var2 = var4[var2];
                    var9 = undefined;
                    var5 = var3.bind(var9)(var2);
                    var4 = var5.getFirstInvalidOption;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot32;
                    var5 = var4.bind(var5)(var3, var2);
                    if(!(var6 == var5)) { _fun0010_ip = 283; continue _fun0010 }
 70:
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
                    var2 = 36;
                    var2 = var12[var2];
                    var4 = var11.bind(var9)(var2);
                    var3 = var4.executeAppLauncherCommand;
                    var2 = {};
                    var16 = _closure2_slot0;
                    var2['command'] = var16;
                    var10 = 37;
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
                    var10 = 29;
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
                        var2 = 19;
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
 0:
                                var4 = _closure2_slot8;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 25;
                                var3 = var3[var1];
                                var1 = undefined;
                                var3 = var5.bind(var1)(var3);
                                var3 = var3.AppLauncherKeyboardCloseReason;
                                var3 = var3.COMMAND;
                                var4['current'] = var3;
                                var3 = _closure2_slot10;
                                var5 = var3.current;
                                var4 = null;
                                if(!(var4 != var5)) { _fun0011_ip = 75; continue _fun0011 }
 65:
                                var3 = var5.closeCustomKeyboard;
                                var3 = var3.bind(var5)();
 75:
                                var3 = _closure2_slot5;
                                if(!(var4 != var3)) { _fun0011_ip = 91; continue _fun0011 }
 83:
                                var2 = _closure2_slot5;
                                var2 = var2.bind(var1)();
 91:
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
                    _fun0010_ip = 496; continue _fun0010;
 283:
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
                    var1 = 26;
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
                    if(var11) { _fun0010_ip = 421; continue _fun0010 }
 416:
                    var8 = var10.id;
 421:
                    var1['command_id'] = var8;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 35;
                    var7 = var10[var7];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.ApplicationCommandOptionType;
                    var8 = var5.type;
                    var9 = var6 != var8;
                    var6 = 3;
                    if(!var9) { _fun0010_ip = 470; continue _fun0010 }
 467:
                    var6 = var8;
 470:
                    var6 = var7[var6];
                    var1['argument_type'] = var6;
                    var5 = var5.required;
                    var1['is_required'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 496:
                    var1 = undefined;
                    return var1;
                }
            };
            var45 = var32.bind(var42)(var19, var31);
            _closure2_slot49 = var45;
            var19 = _closure1_slot12;
            var19 = var19.bind(var4)(var21, var21);
            var19 = _closure1_slot11;
            var19 = var19.bind(var4)(var40, var21, var21);
            var42 = _closure1_slot6;
            var32 = var42.useCallback;
            var31 = _closure1_slot4;
            var19 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 210; continue _fun0012 }
 10:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0012_ip = 189; continue _fun0012 }
 23:
                        var4 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0012_ip = 205; continue _fun0012 }
 36:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 38;
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
                        if(!(var8 === var9)) { _fun0012_ip = 110; continue _fun0012 }
 101:
                        var8 = _closure2_slot1;
                        var7 = var8.channel;
 110:
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
 169:
                        return var2;
 171:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0012_ip = 202; continue _fun0012 }
 177:
                        var5 = var2.isAuthorized;
                        if(var5) { _fun0012_ip = 189; continue _fun0012 }
 186:
                        return var4;
 189:
                        var4 = _closure2_slot49;
                        var3 = undefined;
                        var4 = var4.bind(var3)();
                        return var3;
 202:
                        return var2;
 205:
                        var2 = undefined;
                        return var2;
 210:
                        return var1;
                    }
                };
                return var1;
            };
            var31 = var31.bind(var4)(var19);
            var19 = new Array(7);
            var19[0] = var46;
            var19[1] = var12;
            var19[2] = var40;
            var19[3] = var45;
            var19[4] = var44;
            var19[5] = var43;
            var19[6] = var8;
            var19 = var32.bind(var42)(var31, var19);
            var32 = _closure1_slot1;
            var31 = 39;
            var31 = var18[var31];
            var42 = var32.bind(var4)(var31);
            var31 = {};
            var31['ignoreKeyboard'] = var21;
            var31 = var42.bind(var4)(var31);
            var43 = var31.height;
            _closure2_slot50 = var43;
            var31 = 40;
            var31 = var18[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.bind(var4)();
            var42 = var31.maximum;
            _closure2_slot51 = var42;
            var44 = _closure1_slot6;
            var32 = var44.useContext;
            var31 = 41;
            var31 = var18[var31];
            var31 = var25.bind(var4)(var31);
            var31 = var31.PortalKeyboardContext;
            var31 = var32.bind(var44)(var31);
            var44 = var31.animatedSheetPosition;
            _closure2_slot52 = var44;
            var18 = var18[var26];
            var31 = var25.bind(var4)(var18);
            var25 = var31.useAnimatedStyle;
            var18 = function nn() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot52;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = 0;
                    if(!var5) { _fun0013_ip = 51; continue _fun0013 }
 22:
                    var6 = _closure2_slot52;
                    var5 = var6.get;
                    var6 = var5.bind(var6)();
                    var5 = _closure2_slot50;
                    var6 = var6 - var5;
                    var5 = _closure2_slot51;
                    var2 = var6 + var5;
 51:
                    var4 = _closure2_slot42;
                    var2 = -var2;
                    var2 = var2 - var4;
                    var3['translateY'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['animatedSheetPosition'] = var44;
            var32['screenHeight'] = var43;
            var32['maxHeight'] = var42;
            var32['footerStickyInsetBottom'] = var37;
            var18['__closure'] = var32;
            var32 = 9092606385392.0;
            var18['__workletHash'] = var32;
            var32 = _closure1_slot26;
            var18['__initData'] = var32;
            var18 = var25.bind(var31)(var18);
            var32 = _closure1_slot6;
            var31 = var32.useCallback;
            var25 = new Array(2);
            var25[0] = var14;
            var25[1] = var24;
            var24 = function(arg1) {
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
            var24 = var31.bind(var32)(var24, var25);
            _closure2_slot53 = var24;
            var32 = _closure1_slot6;
            var31 = var32.useCallback;
            var25 = new Array(2);
            var25[0] = var14;
            var37 = var2 == var28;
            var24 = undefined;
            if(var37) { _fun0003_ip = 2126; continue _fun0003 }
 2121:
            var24 = var28.name;
 2126:
            var25[1] = var24;
            var24 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
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
                    if(var6) { _fun0014_ip = 97; continue _fun0014 }
 88:
                    var6 = _closure2_slot39;
                    var4 = var6.name;
 97:
                    if(!(var5 === var4)) { _fun0014_ip = 110; continue _fun0014 }
 101:
                    var2 = _closure2_slot40;
                    var2 = var2.bind(var1)(var3);
 110:
                    return var1;
                }
            };
            var37 = var31.bind(var32)(var24, var25);
            _closure2_slot54 = var37;
            var32 = _closure1_slot6;
            var31 = var32.useCallback;
            var25 = new Array(1);
            var25[0] = var12;
            var24 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0015_ip = 109; continue _fun0015 }
 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 26;
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
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var31.bind(var32)(var24, var25);
            _closure2_slot55 = var24;
            var32 = _closure1_slot6;
            var31 = var32.useCallback;
            var25 = new Array(4);
            var25[0] = var41;
            var40 = var40.channel;
            var25[1] = var40;
            var25[2] = var37;
            var25[3] = var24;
            var24 = function(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var2 = {};
                var3 = _closure1_slot19;
                var3 = var3.APP_LAUNCHER;
                var2['target'] = var3;
                var2['option'] = var8;
                var _closure3_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 42;
                var6 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.getMediaKeyboardDraftType;
                var2 = var2.target;
                var6 = var6.bind(var7)(var2);
                var _closure3_slot2 = var6;
                var2 = function onAttachFileParams(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var3 = var3.channel;
                    var1['channel'] = var3;
                    var3 = false;
                    var1['pickMultiple'] = var3;
                    var3 = function onDismissKeyboard() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 43;
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
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 42;
                        var2 = var2[var1];
                        var1 = undefined;
                        var8 = var3.bind(var1)(var2);
                        var7 = var8.addAttachmentForCommand;
                        var3 = _closure2_slot1;
                        var3 = var3.channel;
                        var13 = var3.id;
                        var12 = _closure2_slot10;
                        var3 = arg1;
                        var2 = 0;
                        var11 = var3[var2];
                        var10 = _closure3_slot1;
                        var9 = _closure4_slot0;
                        var14 = var8;
                        var2 = var14[var7](var13, var12, var11, var10, var9, var8);
                        return var1;
                    };
                    var1['onSelectFiles'] = var2;
                    return var1;
                };
                var _closure3_slot3 = var2;
                var2 = _closure2_slot55;
                var2 = var2.bind(var1)(var8);
                var2 = 44;
                var2 = var4[var2];
                var9 = var3.bind(var1)(var2);
                var2 = var9.dismissGlobalKeyboard;
                var2 = var2.bind(var9)();
                var2 = 43;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.showMediaKeyboardActionSheet;
                var2 = {};
                var2['applicationCommandOption'] = var8;
                var7 = _closure2_slot1;
                var7 = var7.channel;
                var2['channel'] = var7;
                var2['draftType'] = var6;
                var6 = function onAttachPress() {
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 42;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleAttachFile;
                    var2 = {};
                    var6 = _closure3_slot3;
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
                    var1 = 42;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleCameraDialog;
                    var2 = {};
                    var6 = _closure3_slot3;
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
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onPressCamera'] = var6;
                var6 = function onSelectItem(arg1, arg2) {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 43;
                    var2 = var4[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var2 = var5.hideMediaKeyboardActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 42;
                    var2 = var4[var2];
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.handleSelectAppLauncherItem;
                    var10 = _closure2_slot10;
                    var8 = _closure3_slot1;
                    var11 = arg1;
                    var9 = arg2;
                    var12 = var7;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    return var1;
                };
                var2['onSelectItem'] = var6;
                var6 = function onViewAll() {
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 42;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.handleViewAllDialog;
                    var2 = {};
                    var7 = _closure3_slot3;
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
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onViewAll'] = var6;
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
                    var1 = 43;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideMediaKeyboardActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2['onBack'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var31.bind(var32)(var24, var25);
            _closure2_slot56 = var24;
            var25 = _closure1_slot1;
            var31 = _closure1_slot3;
            var24 = 46;
            var24 = var31[var24];
            var25 = var25.bind(var4)(var24);
            var24 = function() {
                var3 = _closure2_slot45;
                var2 = _closure2_slot39;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var25 = var25.bind(var4)(var24);
            var24 = var25.setLatch;
            _closure2_slot57 = var24;
            var25 = var25.tryCallback;
            _closure2_slot58 = var25;
            var40 = _closure1_slot6;
            var37 = var40.useCallback;
            var32 = function(arg1) {
                var2 = _closure2_slot13;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.y;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var31 = new Array(0);
            var31 = var37.bind(var40)(var32, var31);
            var40 = _closure1_slot6;
            var37 = var40.useCallback;
            var32 = new Array(1);
            var32[0] = var25;
            var25 = function(arg1) {
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
            var37 = var37.bind(var40)(var25, var32);
            var40 = _closure1_slot6;
            var32 = var40.useCallback;
            var25 = new Array(2);
            var25[0] = var28;
            var25[1] = var24;
            var24 = function(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
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
                    if(!var2) { _fun0016_ip = 97; continue _fun0016 }
 66:
                    var4 = _closure2_slot39;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if(var5) { _fun0016_ip = 88; continue _fun0016 }
 79:
                    var5 = _closure2_slot39;
                    var4 = var5.name;
 88:
                    var3 = var3.name;
                    var2 = var4 === var3;
 97:
                    if(!var2) { _fun0016_ip = 113; continue _fun0016 }
 100:
                    var3 = _closure2_slot57;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var32.bind(var40)(var24, var25);
            _closure2_slot59 = var24;
            var32 = _closure1_slot6;
            var25 = var32.useCallback;
            var24 = new Array(7);
            var24[0] = var38;
            var24[1] = var7;
            var24[2] = var39;
            var24[3] = var34;
            var24[4] = var22;
            var34 = var2 == var12;
            var22 = undefined;
            if(var34) { _fun0003_ip = 2425; continue _fun0003 }
 2420:
            var22 = var12.applicationId;
 2425:
            var24[5] = var22;
            var34 = var2 == var12;
            var22 = undefined;
            if(var34) { _fun0003_ip = 2443; continue _fun0003 }
 2438:
            var22 = var12.id;
 2443:
            var24[6] = var22;
            var22 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
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
                    var2[var4] = var6;
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
                    var3 = 31;
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
                    var3 = 26;
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
                    if(var10) { _fun0017_ip = 269; continue _fun0017 }
 260:
                    var10 = _closure2_slot0;
                    var7 = var10.applicationId;
 269:
                    var2['application_id'] = var7;
                    var7 = _closure2_slot0;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0017_ip = 296; continue _fun0017 }
 287:
                    var8 = _closure2_slot0;
                    var7 = var8.id;
 296:
                    var2['command_id'] = var7;
                    var7 = var6.name;
                    var2['option_name'] = var7;
                    var6 = var6.type;
                    var2['option_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var32 = var25.bind(var32)(var22, var24);
            var25 = _closure1_slot6;
            var24 = var25.useCallback;
            var22 = new Array(7);
            var22[0] = var38;
            var22[1] = var7;
            var22[2] = var30;
            var22[3] = var14;
            var30 = var2 == var28;
            var14 = undefined;
            if(var30) { _fun0003_ip = 2503; continue _fun0003 }
 2498:
            var14 = var28.name;
 2503:
            var22[4] = var14;
            var28 = var2 == var12;
            var14 = undefined;
            if(var28) { _fun0003_ip = 2521; continue _fun0003 }
 2516:
            var14 = var12.applicationId;
 2521:
            var22[5] = var14;
            var28 = var2 == var12;
            var14 = undefined;
            if(var28) { _fun0003_ip = 2539; continue _fun0003 }
 2534:
            var14 = var12.id;
 2539:
            var22[6] = var14;
            var14 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
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
                    if(var4) { _fun0018_ip = 282; continue _fun0018 }
 273:
                    var4 = _closure2_slot39;
                    var2 = var4.name;
 282:
                    if(!(var3 === var2)) { _fun0018_ip = 295; continue _fun0018 }
 286:
                    var2 = _closure2_slot40;
                    var2 = var2.bind(var1)(var9);
 295:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 26;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot16;
                    var3 = var2.APPLICATION_COMMAND_OPTIONAL_OPTION_REMOVED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var10 = var9 == var7;
                    var7 = undefined;
                    if(var10) { _fun0018_ip = 358; continue _fun0018 }
 349:
                    var10 = _closure2_slot0;
                    var7 = var10.applicationId;
 358:
                    var2['application_id'] = var7;
                    var7 = _closure2_slot0;
                    var9 = var9 == var7;
                    var7 = undefined;
                    if(var9) { _fun0018_ip = 385; continue _fun0018 }
 376:
                    var8 = _closure2_slot0;
                    var7 = var8.id;
 385:
                    var2['command_id'] = var7;
                    var7 = var6.name;
                    var2['option_name'] = var7;
                    var6 = var6.type;
                    var2['option_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var14 = var24.bind(var25)(var14, var22);
            _closure2_slot60 = var14;
            var25 = _closure1_slot6;
            var24 = var25.useCallback;
            var22 = function(arg1) {
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
            var14 = var24.bind(var25)(var22, var14);
            var28 = _closure1_slot6;
            var25 = var28.useCallback;
            var24 = function(arg1, arg2) {
                var1 = arg2;
                var2 = _closure2_slot15;
                var2['current'] = var1;
                return var1;
            };
            var22 = new Array(0);
            var25 = var25.bind(var28)(var24, var22);
            var22 = var35.length;
            var24 = var22 > var15;
            var7 = var7.length;
            var15 = var7 > var15;
            var22 = var24;
            if(var24) { _fun0003_ip = 2639; continue _fun0003 }
 2636:
            var22 = var15;
 2639:
            var28 = var2 == var13;
            var7 = undefined;
            if(var28) { _fun0003_ip = 2654; continue _fun0003 }
 2648:
            var7 = var13.prefilledOptions;
 2654:
            var7 = var2 != var7;
            _closure2_slot61 = var7;
            var13 = _closure1_slot0;
            var28 = _closure1_slot3;
            var7 = 47;
            var7 = var28[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.AppLauncherEntrypoint;
            var7 = var7.VOICE;
            if(!(var8 !== var7)) { _fun0003_ip = 2726; continue _fun0003 }
 2698:
            var8 = _closure1_slot0;
            var13 = _closure1_slot3;
            var7 = 48;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var13 = var7.BottomSheetScrollView;
            _fun0003_ip = 2730; continue _fun0003;
 2726:
            var13 = _closure1_slot9;
 2730:
            if(var3) { _fun0003_ip = 3881; continue _fun0003 }
 2736:
            if(!(var2 != var12)) { _fun0003_ip = 3858; continue _fun0003 }
 2743:
            if(var1) { _fun0003_ip = 2777; continue _fun0003 }
 2746:
            var3 = _closure1_slot20;
            var2 = _closure1_slot32;
            var1 = {};
            var1['command'] = var12;
            var1['onPressBack'] = var11;
            var7 = var3.bind(var4)(var2, var1);
            _fun0003_ip = 3856; continue _fun0003;
 2777:
            var3 = _closure1_slot21;
            var2 = _closure1_slot22;
            var1 = {};
            var8 = {};
            var8['ref'] = var27;
            var28 = var5.optionsContainer;
            var27 = new Array(1);
            var27[0] = var28;
            var8['contentContainerStyle'] = var27;
            var27 = {};
            var27['bottom'] = var23;
            var8['scrollIndicatorInsets'] = var27;
            var8['scrollToOverflowEnabled'] = var21;
            var8['onContentSizeChange'] = var25;
            var8['preserveScrollMomentum'] = var21;
            var8['lockableScrollableContentOffsetY'] = var10;
            var21 = 'handled';
            var8['keyboardShouldPersistTaps'] = var21;
            var21 = 'never';
            var8['contentInsetAdjustmentBehavior'] = var21;
            var8['automaticallyAdjustContentInsets'] = var29;
            var8['onLayout'] = var14;
            var8['automaticallyAdjustsScrollIndicatorInsets'] = var29;
            var27 = _closure1_slot21;
            var21 = _closure1_slot7;
            var14 = {};
            var25 = var5.commandNameContainer;
            var14['style'] = var25;
            var40 = _closure1_slot20;
            var34 = _closure1_slot0;
            var30 = _closure1_slot3;
            var25 = 49;
            var28 = var30[var25];
            var28 = var34.bind(var4)(var28);
            var39 = var28.Text;
            var28 = {'variant': 'heading-lg/bold', 'color': 'text-normal'};
            var41 = var12.displayName;
            var28['children'] = var41;
            var39 = var40.bind(var4)(var39, var28);
            var28 = new Array(2);
            var28[0] = var39;
            var39 = _closure1_slot20;
            var30 = var30[var25];
            var30 = var34.bind(var4)(var30);
            var34 = var30.Text;
            var30 = {'variant': 'heading-sm/medium', 'color': 'text-normal'};
            var40 = var12.displayDescription;
            var30['children'] = var40;
            var30 = var39.bind(var4)(var34, var30);
            var28[1] = var30;
            var14['children'] = var28;
            var21 = var27.bind(var4)(var21, var14);
            var14 = new Array(6);
            var14[0] = var21;
            var21 = var24;
            if(!var21) { _fun0003_ip = 3092; continue _fun0003 }
 3040:
            var30 = _closure1_slot20;
            var28 = _closure1_slot7;
            var27 = {};
            var34 = var5.requiredOptionsContainer;
            var27['style'] = var34;
            var27['onLayout'] = var31;
            var34 = var35.map;
            var31 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
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
                    if(!(var8 === var6)) { _fun0019_ip = 70; continue _fun0019 }
 48:
                    var6 = _closure2_slot61;
                    if(var6) { _fun0019_ip = 70; continue _fun0019 }
 58:
                    var6 = _closure1_slot14;
                    var6 = var6.FIRST_REQUIRED_OPTION;
                    _fun0019_ip = 80; continue _fun0019;
 70:
                    var7 = _closure1_slot14;
                    var6 = var7.NONE;
 80:
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
            var31 = var34.bind(var35)(var31);
            var27['children'] = var31;
            var21 = var30.bind(var4)(var28, var27);
 3092:
            var14[1] = var21;
            var21 = !var24;
            if(var24) { _fun0003_ip = 3105; continue _fun0003 }
 3102:
            var21 = var22;
 3105:
            if(!var21) { _fun0003_ip = 3254; continue _fun0003 }
 3111:
            var28 = _closure1_slot20;
            var27 = _closure1_slot7;
            var24 = {};
            var30 = var5.noRequiredOptionsCalloutContainer;
            var24['style'] = var30;
            var34 = _closure1_slot20;
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var30 = var42[var25];
            var30 = var41.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-sm/medium', 'color': 'text-primary'};
            var35 = {};
            var39 = 'center';
            var35['textAlign'] = var39;
            var30['style'] = var35;
            var35 = 23;
            var39 = var42[var35];
            var39 = var41.bind(var4)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var35 = var42[var35];
            var35 = var41.bind(var4)(var35);
            var35 = var35.t;
            var35 = var35.HS2Ktb;
            var35 = var39.bind(var40)(var35);
            var30['children'] = var35;
            var30 = var34.bind(var4)(var31, var30);
            var24['children'] = var30;
            var21 = var28.bind(var4)(var27, var24);
 3254:
            var14[2] = var21;
            var21 = !var22;
            if(var22) { _fun0003_ip = 3410; continue _fun0003 }
 3267:
            var27 = _closure1_slot20;
            var24 = _closure1_slot7;
            var22 = {};
            var28 = var5.noOptionCalloutContainer;
            var22['style'] = var28;
            var31 = _closure1_slot20;
            var40 = _closure1_slot0;
            var41 = _closure1_slot3;
            var28 = var41[var25];
            var28 = var40.bind(var4)(var28);
            var30 = var28.Text;
            var28 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var34 = {};
            var35 = 'center';
            var34['textAlign'] = var35;
            var28['style'] = var34;
            var34 = 23;
            var35 = var41[var34];
            var35 = var40.bind(var4)(var35);
            var39 = var35.intl;
            var35 = var39.string;
            var34 = var41[var34];
            var34 = var40.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.G8lEFB;
            var34 = var35.bind(var39)(var34);
            var28['children'] = var34;
            var28 = var31.bind(var4)(var30, var28);
            var22['children'] = var28;
            var21 = var27.bind(var4)(var24, var22);
 3410:
            var14[3] = var21;
            if(!var15) { _fun0003_ip = 3739; continue _fun0003 }
 3420:
            var24 = _closure1_slot21;
            var22 = _closure1_slot22;
            var21 = {};
            var28 = _closure1_slot20;
            var35 = _closure1_slot0;
            var34 = _closure1_slot3;
            var25 = var34[var25];
            var25 = var35.bind(var4)(var25);
            var27 = var25.Text;
            var25 = {'style': null, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var30 = var5.optionalOptionsSectionTitle;
            var25['style'] = var30;
            var30 = 23;
            var31 = var34[var30];
            var31 = var35.bind(var4)(var31);
            var39 = var31.intl;
            var31 = var39.string;
            var30 = var34[var30];
            var30 = var35.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.5C107O;
            var30 = var31.bind(var39)(var30);
            var25['children'] = var30;
            var27 = var28.bind(var4)(var27, var25);
            var25 = new Array(3);
            var25[0] = var27;
            var31 = _closure1_slot20;
            var30 = _closure1_slot1;
            var27 = var34[var26];
            var27 = var30.bind(var4)(var27);
            var28 = var27.View;
            var27 = {};
            var39 = var5.optionalOptionsContainer;
            var27['style'] = var39;
            var27['onLayout'] = var37;
            var27['collapsable'] = var29;
            var37 = var38.map;
            var36 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
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
                    if(!var9) { _fun0020_ip = 77; continue _fun0020 }
 67:
                    var11 = _closure2_slot6;
                    var9 = var11.optionalOptionsFirstChild;
 77:
                    var7[1] = var9;
                    var9 = _closure2_slot27;
                    var11 = var9.length;
                    var9 = 1;
                    var9 = var11 - var9;
                    var9 = var10 === var9;
                    if(!var9) { _fun0020_ip = 114; continue _fun0020 }
 104:
                    var10 = _closure2_slot6;
                    var9 = var10.optionalOptionsLastChild;
 114:
                    var7[2] = var9;
                    var2['style'] = var7;
                    var2['option'] = var1;
                    var7 = _closure2_slot29;
                    var10 = var7.current;
                    var9 = var10.has;
                    var7 = var1.name;
                    var7 = var9.bind(var10)(var7);
                    var8 = _closure1_slot14;
                    if(var7) { _fun0020_ip = 166; continue _fun0020 }
 158:
                    var7 = var8.OPTIONAL_OPTION_ADDED;
                    _fun0020_ip = 172; continue _fun0020;
 166:
                    var7 = var8.NONE;
 172:
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
            var36 = var37.bind(var38)(var36);
            var27['children'] = var36;
            var27 = var31.bind(var4)(var28, var27);
            var25[1] = var27;
            var28 = _closure1_slot20;
            var26 = var34[var26];
            var26 = var30.bind(var4)(var26);
            var27 = var26.View;
            var26 = {};
            var31 = 51;
            var31 = var34[var31];
            var31 = var35.bind(var4)(var31);
            var31 = var31.LayoutAnimation;
            var26['layout'] = var31;
            var26['collapsable'] = var29;
            var31 = _closure1_slot20;
            var29 = 52;
            var29 = var34[var29];
            var30 = var30.bind(var4)(var29);
            var29 = {};
            var34 = var5.optionalOptionList;
            var29['style'] = var34;
            var29['options'] = var33;
            var29['onSelectOption'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[2] = var26;
            var21['children'] = var25;
            var15 = var24.bind(var4)(var22, var21);
 3739:
            var14[4] = var15;
            var22 = _closure1_slot20;
            var21 = _closure1_slot1;
            var24 = _closure1_slot3;
            var15 = 53;
            var15 = var24[var15];
            var21 = var21.bind(var4)(var15);
            var15 = {};
            var15['size'] = var23;
            var15 = var22.bind(var4)(var21, var15);
            var14[5] = var15;
            var8['children'] = var14;
            var13 = var3.bind(var4)(var13, var8);
            var8 = new Array(2);
            var8[0] = var13;
            var15 = _closure1_slot20;
            var14 = _closure1_slot27;
            var13 = {};
            var13['enableSubmit'] = var20;
            var13['onSubmit'] = var19;
            var13['animatedStyle'] = var18;
            var13['onHeightChange'] = var17;
            var13['isSending'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var8[1] = var13;
            var1['children'] = var8;
            var7 = var3.bind(var4)(var2, var1);
 3856:
            _fun0003_ip = 3879; continue _fun0003;
 3858:
            var3 = _closure1_slot20;
            var2 = _closure1_slot31;
            var1 = {};
            var1['onPressBack'] = var11;
            var7 = var3.bind(var4)(var2, var1);
 3879:
            _fun0003_ip = 3897; continue _fun0003;
 3881:
            var3 = _closure1_slot20;
            var2 = _closure1_slot30;
            var1 = {};
            var7 = var3.bind(var4)(var2, var1);
 3897:
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
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
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
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
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
                    if(var11) { _fun0022_ip = 84; continue _fun0022 }
 78:
                    var2 = var10.commandId;
 84:
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
                    if(!var5) { _fun0022_ip = 238; continue _fun0022 }
 147:
                    var9 = var2.result;
                    var14 = var15 == var9;
                    var5 = undefined;
                    if(var14) { _fun0022_ip = 192; continue _fun0022 }
 162:
                    var14 = var9.sections;
                    var9 = var6.id;
                    var9 = var14[var9];
                    var14 = var15 == var9;
                    var5 = undefined;
                    if(var14) { _fun0022_ip = 192; continue _fun0022 }
 186:
                    var5 = var9.descriptor;
 192:
                    if(!(var15 == var5)) { _fun0022_ip = 235; continue _fun0022 }
 196:
                    var14 = var3.result;
                    var16 = var15 == var14;
                    var9 = undefined;
                    if(var16) { _fun0022_ip = 232; continue _fun0022 }
 211:
                    var16 = var14.sections;
                    var14 = var6.id;
                    var14 = var16[var14];
                    var9 = var14.descriptor;
 232:
                    var5 = var9;
 235:
                    var10 = var5;
 238:
                    var _closure3_slot3 = var10;
                    var14 = var15 != var6;
                    if(!var14) { _fun0022_ip = 283; continue _fun0022 }
 249:
                    var9 = var3.result;
                    var16 = var15 == var9;
                    var5 = undefined;
                    if(var16) { _fun0022_ip = 279; continue _fun0022 }
 264:
                    var9 = var9.sections;
                    var6 = var6.id;
                    var5 = var9[var6];
 279:
                    var14 = var15 != var5;
 283:
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
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var2 = _closure3_slot2;
                            var4 = null;
                            var2 = var4 == var2;
                            if(var2) { _fun0023_ip = 24; continue _fun0023 }
 16:
                            var3 = _closure3_slot3;
                            var2 = var4 == var3;
 24:
                            if(var2) { _fun0023_ip = 36; continue _fun0023 }
 27:
                            var3 = _closure3_slot4;
                            var2 = var3.current;
 36:
                            if(var2) { _fun0023_ip = 144; continue _fun0023 }
 39:
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
 144:
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
                    var4 = 35;
                    var4 = var12[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.ApplicationCommandType;
                    var9 = var4.CHAT;
                    var4 = new Array(1);
                    var4[0] = var9;
                    var13 = var5.bind(var6)(var7, var4);
                    if(!(var15 != var10)) { _fun0022_ip = 737; continue _fun0022 }
 416:
                    if(!(var15 != var11)) { _fun0022_ip = 737; continue _fun0022 }
 423:
                    var5 = var13.hasBaseAccessPermissions;
                    var12 = var13.context;
                    var19 = var13.userId;
                    var18 = var13.roleIds;
                    var17 = var13.isImpersonating;
                    var6 = var15 == var12;
                    var4 = undefined;
                    if(var6) { _fun0022_ip = 465; continue _fun0022 }
 460:
                    var4 = var12.guild_id;
 465:
                    var4 = var15 != var4;
                    var16 = null;
                    if(!var4) { _fun0022_ip = 527; continue _fun0022 }
 474:
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
 527:
                    var6 = var15 == var12;
                    var4 = undefined;
                    if(var6) { _fun0022_ip = 541; continue _fun0022 }
 536:
                    var4 = var12.guild_id;
 541:
                    var4 = var15 != var4;
                    var15 = null;
                    if(!var4) { _fun0022_ip = 594; continue _fun0022 }
 550:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 59;
                    var4 = var7[var4];
                    var9 = var6.bind(var8)(var4);
                    var7 = var9.computeAllowedForChannel;
                    var6 = var10.permissions;
                    var4 = var12.guild_id;
                    var15 = var7.bind(var9)(var6, var12, var4);
 594:
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
                    if(!var4) { _fun0022_ip = 698; continue _fun0022 }
 695:
                    var4 = var5;
 698:
                    var1['hasPermission'] = var4;
                    var4 = var2.fetchState;
                    var4 = var4.fetching;
                    if(var4) { _fun0022_ip = 730; continue _fun0022 }
 718:
                    var5 = var3.fetchState;
                    var4 = var5.fetching;
 730:
                    var1['loading'] = var4;
                    return var1;
 737:
                    var1 = {'command': null, 'sectionDescriptor': null, 'hasPermission': false};
                    var2 = var2.fetchState;
                    var2 = var2.fetching;
                    if(var2) { _fun0022_ip = 778; continue _fun0022 }
 766:
                    var3 = var3.fetchState;
                    var2 = var3.fetching;
 778:
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
            if(!(var9 != var11)) { _fun0021_ip = 203; continue _fun0021 }
 200:
            var17 = var11;
 203:
            if(!(var9 != var3)) { _fun0021_ip = 210; continue _fun0021 }
 207:
            var15 = var3;
 210:
            var16 = _closure1_slot0;
            var18 = _closure1_slot3;
            var3 = 25;
            var3 = var18[var3];
            var16 = var16.bind(var4)(var3);
            var3 = var16.useRequiredAppLauncherContext;
            var3 = var3.bind(var16)();
            var20 = var3.bottomSheetExpandReasonRef;
            _closure2_slot4 = var20;
            var22 = var9 != var17;
            if(!var22) { _fun0021_ip = 281; continue _fun0021 }
 257:
            var3 = var17.options;
            if(!(var9 == var3)) { _fun0021_ip = 270; continue _fun0021 }
 266:
            var3 = new Array(0);
 270:
            var16 = var3.length;
            var3 = 0;
            var22 = var16 > var3;
 281:
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0024_ip = 43; continue _fun0024 }
 10:
                    var3 = _closure2_slot5;
                    if(var3) { _fun0024_ip = 40; continue _fun0024 }
 17:
                    var4 = _closure2_slot3;
                    var4 = !var4;
                    if(!var4) { _fun0024_ip = 37; continue _fun0024 }
 27:
                    var6 = _closure2_slot0;
                    var5 = null;
                    var4 = var5 == var6;
 37:
                    var3 = var4;
 40:
                    var2 = var3;
 43:
                    if(!var2) { _fun0024_ip = 111; continue _fun0024 }
 46:
                    var4 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var3 = var3.COMMAND_VIEW;
                    var4['current'] = var3;
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0024_ip = 111; continue _fun0024 }
 103:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
 111:
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
            if(!var18) { _fun0021_ip = 357; continue _fun0021 }
 354:
            var16 = var17;
 357:
            var1['command'] = var16;
            var1['context'] = var13;
            var16 = var9 != var15;
            var13 = undefined;
            if(!var16) { _fun0021_ip = 378; continue _fun0021 }
 375:
            var13 = var15;
 378:
            var1['section'] = var13;
            var15 = var9 != var14;
            var13 = null;
            if(!var15) { _fun0021_ip = 394; continue _fun0021 }
 391:
            var13 = var14;
 394:
            var1['preSelectedCommand'] = var13;
            var1['loading'] = var12;
            var9 = var9 != var11;
            if(var9) { _fun0021_ip = 414; continue _fun0021 }
 411:
            var9 = var10;
 414:
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
        var1 = 31;
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
        var9 = _closure1_slot1;
        var5 = 60;
        var5 = var15[var5];
        var6 = var9.bind(var4)(var5);
        var5 = {};
        var10 = var12.emptyState;
        var5['style'] = var10;
        var10 = 61;
        var10 = var15[var10];
        var10 = var9.bind(var4)(var10);
        var5['lightSource'] = var10;
        var10 = 62;
        var10 = var15[var10];
        var10 = var9.bind(var4)(var10);
        var5['darkSource'] = var10;
        var11 = 23;
        var10 = var15[var11];
        var10 = var14.bind(var4)(var10);
        var17 = var10.intl;
        var16 = var17.string;
        var10 = var15[var11];
        var10 = var14.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.pX/qb2;
        var10 = var16.bind(var17)(var10);
        var5['title'] = var10;
        var10 = var15[var11];
        var10 = var14.bind(var4)(var10);
        var17 = var10.intl;
        var16 = var17.string;
        var10 = var15[var11];
        var10 = var14.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.exOQVV;
        var10 = var16.bind(var17)(var10);
        var5['body'] = var10;
        var10 = _closure1_slot20;
        var16 = 22;
        var8 = var15[var16];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var17 = true;
        var8['shrink'] = var17;
        var17 = var15[var16];
        var17 = var14.bind(var4)(var17);
        var17 = var17.ButtonSizes;
        var17 = var17.SMALL;
        var8['size'] = var17;
        var16 = var15[var16];
        var16 = var14.bind(var4)(var16);
        var16 = var16.ButtonColors;
        var16 = var16.GREY;
        var8['color'] = var16;
        var8['onPress'] = var13;
        var12 = var12.failureStateButton;
        var8['style'] = var12;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11./g10LC;
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
        var1 = 31;
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
        var8 = {'variant': 'heading-lg/bold', 'color': 'text-normal'};
        var18 = var17.displayName;
        var8['children'] = var18;
        var11 = var12.bind(var4)(var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var12 = _closure1_slot20;
        var10 = var16[var10];
        var10 = var15.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'variant': 'heading-sm/medium', 'color': 'text-normal'};
        var17 = var17.displayDescription;
        var10['children'] = var17;
        var10 = var12.bind(var4)(var11, var10);
        var8[1] = var10;
        var5['children'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot20;
        var10 = _closure1_slot1;
        var6 = 60;
        var6 = var16[var6];
        var7 = var10.bind(var4)(var6);
        var6 = {};
        var11 = var13.emptyState;
        var6['style'] = var11;
        var11 = 63;
        var11 = var16[var11];
        var11 = var10.bind(var4)(var11);
        var6['lightSource'] = var11;
        var11 = 64;
        var11 = var16[var11];
        var11 = var10.bind(var4)(var11);
        var6['darkSource'] = var11;
        var12 = 23;
        var11 = var16[var12];
        var11 = var15.bind(var4)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = var16[var12];
        var11 = var15.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.TzufcX;
        var11 = var17.bind(var18)(var11);
        var6['title'] = var11;
        var11 = var16[var12];
        var11 = var15.bind(var4)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = var16[var12];
        var11 = var15.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.I/O+Aw;
        var11 = var17.bind(var18)(var11);
        var6['body'] = var11;
        var11 = _closure1_slot20;
        var17 = 22;
        var9 = var16[var17];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var18 = true;
        var9['shrink'] = var18;
        var18 = var16[var17];
        var18 = var15.bind(var4)(var18);
        var18 = var18.ButtonSizes;
        var18 = var18.SMALL;
        var9['size'] = var18;
        var17 = var16[var17];
        var17 = var15.bind(var4)(var17);
        var17 = var17.ButtonColors;
        var17 = var17.GREY;
        var9['color'] = var17;
        var9['onPress'] = var14;
        var13 = var13.failureStateButton;
        var9['style'] = var13;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12./g10LC;
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
    var14 = 4;
    var4 = var6[var14];
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
    var15 = var4.DEFAULT_CONTENT_PADDING;
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
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = 13;
    var16 = var6[var13];
    var16 = var5.bind(var1)(var16);
    var17 = var16.EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var16 = var17 + var16;
    var9['paddingTop'] = var16;
    var9['paddingHorizontal'] = var15;
    var9['paddingBottom'] = var15;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var16;
    var4['optionsContainer'] = var9;
    var16 = 24;
    var9 = {'marginTop': 24, 'gap': 24};
    var4['requiredOptionsContainer'] = var9;
    var9 = {};
    var4['optionalOptionsContainer'] = var9;
    var9 = {};
    var9['marginBottom'] = var16;
    var4['optionalOptionsChild'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['optionalOptionsFirstChild'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['optionalOptionsLastChild'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'bottom': 0, 'right': 0};
    var9['paddingHorizontal'] = var15;
    var4['footerContainer'] = var9;
    var9 = {'borderRadius': null, 'flex': 1, 'overflow': 'hidden'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var9['borderRadius'] = var15;
    var4['submitButton'] = var9;
    var9 = {};
    var9['marginLeft'] = var14;
    var4['legacySubmitButtonIcon'] = var9;
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
    var14 = var14.BG_SURFACE_RAISED;
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
    var14 = var14.BG_BASE_TERTIARY;
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
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var13 = var14 + var13;
    var9['paddingTop'] = var13;
    var9['flex'] = var12;
    var4['emptyStateContainer'] = var9;
    var9 = {'marginTop': 24, 'alignSelf': 'center', 'borderRadius': null, 'paddingHorizontal': 12, 'paddingVertical': 8};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xxl;
    var9['borderRadius'] = var12;
    var4['failureStateButton'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'textAlign': 'center'};
    var4['commandNameContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
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
    var7 = 'function AppLauncherCommandViewScreenTsx3(){const{animatedSheetPosition,screenHeight,maxHeight,footerStickyInsetBottom}=this.__closure;const animatedSheetOffset=animatedSheetPosition!=null?animatedSheetPosition.get()-screenHeight+maxHeight:0;return{transform:[{translateY:-animatedSheetOffset-footerStickyInsetBottom}]};}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = 65;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/command_view/AppLauncherCommandViewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherCommandViewScreen(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
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
            if(!(var3 === var4)) { _fun0025_ip = 146; continue _fun0025 }
 82:
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
 146:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();