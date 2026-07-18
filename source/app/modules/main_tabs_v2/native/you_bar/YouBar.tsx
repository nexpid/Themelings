// app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
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
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Pressable;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot12 = var8;
    var8 = var4.YOU_BAR_PADDING;
    var _closure1_slot13 = var8;
    var8 = var4.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot14 = var8;
    var8 = var4.YOU_BAR_AVATAR_LARGE_SIZE;
    var _closure1_slot15 = var8;
    var8 = var4.YOU_BAR_AVATAR_SIZE;
    var _closure1_slot16 = var8;
    var4 = var4.YOU_BAR_BUTTON_HIT_SLOP;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ME;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot20 = var8;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var11 = 13;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.shadows;
    var16 = var14.SHADOW_HIGH;
    var17 = var10;
    var14 = copyDataProperties(var17, var16);
    var4['youRow'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var10['marginRight'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.YOU_BAR_BORDER_RADIUS;
    var10['borderRadius'] = var11;
    var4['youPressable'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function YouBarTsx3(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function YouBarTsx4(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot22;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 14;
            var3 = var1[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var7 = var3.width;
            var5 = _closure1_slot0;
            var3 = 15;
            var6 = var1[var3];
            var9 = var5.bind(var4)(var6);
            var6 = var9.useIsMobileQuestDockRenderedBase;
            var3 = var1[var3];
            var11 = var5.bind(var4)(var3);
            var3 = var11.useMobileQuestDock;
            var3 = var3.bind(var11)();
            var19 = var6.bind(var9)(var3);
            var _closure2_slot0 = var19;
            var3 = 16;
            var3 = var1[var3];
            var6 = var5.bind(var4)(var3);
            var3 = var6.useDrawerWidth;
            var6 = var3.bind(var6)();
            var3 = 17;
            var3 = var1[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.isChatBesideChannelList;
            var3 = 18;
            var1 = var1[var3];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useYouBarHorizontalMargin;
            var1 = var1.bind(var5)();
            var _closure2_slot1 = var1;
            var16 = 2;
            var5 = var16 * var1;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var25 = var7 - var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var25 = var6 - var5;
case 4:
            var _closure2_slot2 = var25;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = var8[var3];
            var5 = var6.bind(var4)(var3);
            var3 = var5.useYouBarBottomMargin;
            var14 = var3.bind(var5)();
            var _closure2_slot3 = var14;
            var3 = 19;
            var3 = var8[var3];
            var5 = var6.bind(var4)(var3);
            var3 = var5.useConnectionBannerHeight;
            var11 = var3.bind(var5)();
            var _closure2_slot4 = var11;
            var13 = _closure1_slot5;
            var5 = var13.useMemo;
            var3 = new Array(2);
            var3[0] = var25;
            var3[1] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['marginHorizontal'] = var3;
                var4 = _closure1_slot12;
                var1['height'] = var4;
                var3 = _closure1_slot13;
                var1['padding'] = var3;
                var2 = _closure2_slot2;
                var1['width'] = var2;
                return var1;
            };
            var28 = var5.bind(var13)(var1, var3);
            var1 = 20;
            var3 = var8[var1];
            var7 = var6.bind(var4)(var3);
            var5 = var7.useSharedValue;
            var3 = false;
            var15 = var5.bind(var7)(var3);
            var _closure2_slot5 = var15;
            var3 = var8[var1];
            var7 = var6.bind(var4)(var3);
            var5 = var7.useAnimatedStyle;
            var3 = function r() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 21;
                    var3 = var8[var4];
                    var5 = undefined;
                    var11 = var6.bind(var5)(var3);
                    var10 = var11.withSpring;
                    var9 = _closure2_slot3;
                    var3 = _closure2_slot4;
                    var9 = var9 + var3;
                    var3 = _closure1_slot14;
                    var3 = var10.bind(var11)(var9, var3);
                    var1['marginBottom'] = var3;
                    var3 = {};
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var5 = var6.withSpring;
                    var8 = _closure2_slot5;
                    var4 = var8.get;
                    var9 = var4.bind(var8)();
                    var8 = 1;
                    var4 = var8;
                    if(!var9) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var7 = _closure2_slot0;
                    var4 = var8;
                    if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var4 = 0.98;
case 5:
                    var2 = _closure1_slot14;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['scale'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var17 = 21;
            var17 = var8[var17];
            var17 = var6.bind(var4)(var17);
            var17 = var17.withSpring;
            var9['withSpring'] = var17;
            var9['barMarginBottom'] = var14;
            var9['connectionBannerHeight'] = var11;
            var11 = _closure1_slot14;
            var9['YOU_BAR_SPRING_CONFIG'] = var11;
            var9['isPressedValue'] = var15;
            var9['isQuestRendered'] = var19;
            var3['__closure'] = var9;
            var9 = 7314807713815.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot23;
            var3['__initData'] = var9;
            var27 = var5.bind(var7)(var3);
            var3 = 22;
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var5 = var7.useICYMIEnabled;
            var3 = 'TabsNavigator';
            var9 = var5.bind(var7)(var3);
            var3 = 23;
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var5 = var7.useYouBarCoachmark;
            var3 = {};
            var3['isQuestRendered'] = var19;
            var5 = var5.bind(var7)(var3);
            var7 = var5.animatedRef;
            var3 = var5.visibleContent;
            var _closure2_slot6 = var3;
            var14 = var5.markAsDismissed;
            var _closure2_slot7 = var14;
            var5 = var13.useRef;
            var5 = var5.bind(var13)(var14);
            var _closure2_slot8 = var5;
            var5 = var13.useRef;
            var5 = var5.bind(var13)(var3);
            var _closure2_slot9 = var5;
            var11 = var13.useEffect;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var3;
            var3 = function() {
                var3 = _closure2_slot9;
                var2 = _closure2_slot6;
                var3['current'] = var2;
                var2 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var13)(var3, var5);
            var5 = 24;
            var3 = var8[var5];
            var14 = var6.bind(var4)(var3);
            var13 = var14.useStateFromStores;
            var3 = _closure1_slot11;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var13.bind(var14)(var11, var3);
            var3 = 25;
            var3 = var8[var3];
            var13 = var6.bind(var4)(var3);
            var11 = var13.useNameplate;
            var3 = {};
            var3['user'] = var17;
            var26 = var11.bind(var13)(var3);
            var11 = null;
            var13 = var11 != var26;
            var14 = _closure1_slot1;
            var3 = 26;
            var3 = var8[var3];
            var14 = var14.bind(var4)(var3);
            var3 = var14.useName;
            var3 = var3.bind(var14)(var17);
            var _closure2_slot10 = var3;
            var3 = 27;
            var3 = var8[var3];
            var14 = var6.bind(var4)(var3);
            var3 = var14.useCustomStatusActivity;
            var14 = var3.bind(var14)();
            var3 = 28;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useGameMentionsAsPlainText;
            var17 = var11 == var14;
            var3 = undefined;
            if(var17) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var14.state;
case 8:
            var3 = var6.bind(var8)(var3);
            var _closure2_slot11 = var3;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var5];
            var17 = var6.bind(var4)(var5);
            var14 = var17.useStateFromStores;
            var5 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 == var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = undefined;
                    return var3;
case 10:
                    var5 = _closure1_slot10;
                    var4 = var5.getStatus;
                    var5 = var4.bind(var5)();
                    var4 = _closure2_slot11;
                    if(!(var2 == var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var3 = var4.humanizeStatus;
                    var5 = var3.bind(var4)(var5);
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var5 = _closure2_slot11;
case 14:
                    var1 = var6;
                    if(!(var2 != var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ', ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 15:
                    return var1;
                }
            };
            var24 = var14.bind(var17)(var8, var5);
            var8 = _closure1_slot5;
            var17 = var8.useMemo;
            var14 = function() {
                var2 = {};
                var1 = 'open-settings';
                var2['name'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 29;
                var3 = var7[var1];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["3/IlR0"];
                var1 = var3.bind(var4)(var1);
                var2['label'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var5 = new Array(0);
            var23 = var17.bind(var8)(var14, var5);
            var17 = var8.useCallback;
            var14 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'open-settings';
                    if(!(var1 === var2)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.openUserSettings;
                    var1 = var1.bind(var2)();
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = new Array(0);
            var22 = var17.bind(var8)(var14, var5);
            var5 = var8.useRef;
            var5 = var5.bind(var8)(var11);
            var _closure2_slot12 = var5;
            var5 = var8.useState;
            var29 = 0;
            var14 = var5.bind(var8)(var29);
            var5 = _closure1_slot4;
            var16 = var5.bind(var4)(var14, var16);
            var14 = var16[var29];
            var5 = 1;
            var5 = var16[var5];
            var _closure2_slot13 = var5;
            var16 = var8.useRef;
            var5 = true;
            var16 = var16.bind(var8)(var5);
            var _closure2_slot14 = var16;
            var18 = var8.useEffect;
            var17 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = function checkYouScreenPresence() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var1)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                            var4 = _closure3_slot0;
                            var1 = var4.getState;
                            var6 = var1.bind(var4)();
                            var7 = var2 != var6;
                            if(!var7) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                            var4 = var6.routes;
                            var1 = var6.index;
                            var1 = var4[var1];
                            var8 = var2 == var1;
                            var4 = undefined;
                            if(var8) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                            var4 = var1.name;
case 23:
                            var1 = 'main';
                            var7 = var1 === var4;
case 21:
                            var4 = _closure2_slot14;
                            var4 = var4.current;
                            var4 = !var4;
                            if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                            var4 = var7;
case 25:
                            if(!var4) { _fun0006_ip = 15; continue _fun0006 }
case 27:
                            var9 = _closure2_slot13;
                            var8 = undefined;
                            var4 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var4 = var9.bind(var8)(var4);
case 15:
                            var4 = _closure2_slot14;
                            var4['current'] = var7;
                            var7 = var2 == var6;
                            var8 = undefined;
                            var4 = undefined;
                            if(var7) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                            var7 = var6.routes;
                            var6 = var2 == var7;
                            var4 = undefined;
                            if(var6) { _fun0006_ip = 28; continue _fun0006 }
case 30:
                            var6 = var7.some;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = 'you';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var4 = var6.bind(var7)(var5);
case 28:
                            if(var4) { _fun0006_ip = 19; continue _fun0006 }
case 31:
                            var4 = _closure2_slot12;
                            var4 = var4.current;
                            if(!(var2 != var4)) { _fun0006_ip = 19; continue _fun0006 }
case 32:
                            var4 = _closure2_slot12;
                            var5 = var4.current;
                            var4 = 'press';
                            if(!(var4 !== var5)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 33;
                            var4 = var6[var4];
                            var6 = var5.bind(var8)(var4);
                            var5 = var6.assertNever;
                            var4 = _closure2_slot12;
                            var4 = var4.current;
                            var4 = var5.bind(var6)(var4);
                            _fun0006_ip = 35; continue _fun0006;
case 33:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 32;
                            var5 = var9[var4];
                            var6 = var7.bind(var8)(var5);
                            var5 = var6.triggerHapticFeedback;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.HapticFeedbackTypes;
                            var4 = var4.SOFT;
                            var4 = var5.bind(var6)(var4);
                            var5 = _closure3_slot0;
                            var4 = var5.navigate;
                            var3 = 'you';
                            var3 = var4.bind(var5)(var3);
case 35:
                            var1 = _closure2_slot12;
                            var1['current'] = var2;
case 19:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 31;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    return var2;
case 36:
                    var2 = var5.bind(var2)();
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var _closure3_slot1 = var2;
                    var1 = function() {
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                }
            };
            var16 = new Array(0);
            var16 = var18.bind(var8)(var17, var16);
            var18 = var8.useMemo;
            var17 = new Array(1);
            var17[0] = var15;
            var16 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 34;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.debounce;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 31;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var4)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                        var5 = var4.getState;
                        var6 = var5.bind(var4)();
                        var7 = var3 == var6;
                        var5 = undefined;
                        if(var7) { _fun0007_ip = 40; continue _fun0007 }
case 17:
                        var8 = var6.routes;
                        var6 = var3 == var8;
                        var5 = undefined;
                        if(var6) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                        var7 = var8.some;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = 'you';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var5 = var7.bind(var8)(var6);
case 40:
                        if(var5) { _fun0007_ip = 42; continue _fun0007 }
case 38:
                        if(!(var3 != var4)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 32;
                        var3 = var7[var2];
                        var5 = var6.bind(var1)(var3);
                        var3 = var5.triggerHapticFeedback;
                        var2 = var7[var2];
                        var2 = var6.bind(var1)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.SOFT;
                        var2 = var3.bind(var5)(var2);
                        var3 = var4.navigate;
                        var2 = 'you';
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure2_slot5;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
case 43:
                        return var1;
case 42:
                        var3 = _closure2_slot12;
                        var2 = 'press';
                        var3['current'] = var2;
                        return var1;
                    }
                };
                var2 = 500;
                var1 = {'leading': true, 'trailing': false};
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var18 = var18.bind(var8)(var16, var17);
            var20 = var8.useCallback;
            var17 = _closure1_slot3;
            var16 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 36;
                        var5 = var2[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = 35;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var5, var2);
                        SaveGenerator(address=57);
case 47:
                        return var2;
case 48:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0008_ip = 49; continue _fun0008 }
case 24:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 32;
                        var5 = var8[var4];
                        var6 = var7.bind(var3)(var5);
                        var5 = var6.triggerHapticFeedback;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.HapticFeedbackTypes;
                        var4 = var4.SOFT;
                        var4 = var5.bind(var6)(var4);
                        var4 = var2.showYouAccountActionSheet;
                        var4 = var4.bind(var2)();
                        var6 = _closure2_slot5;
                        var5 = var6.set;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 49:
                        return var2;
case 45:
                        return var1;
                    }
                };
                return var1;
            };
            var17 = var17.bind(var4)(var16);
            var16 = new Array(1);
            var16[0] = var15;
            var16 = var20.bind(var8)(var17, var16);
            var21 = var8.useCallback;
            var20 = new Array(1);
            var20[0] = var15;
            var17 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = var21.bind(var8)(var17, var20);
            var20 = var8.useCallback;
            var17 = new Array(1);
            var17[0] = var15;
            var15 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var17 = var20.bind(var8)(var15, var17);
            var30 = var8.useCallback;
            var20 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 37;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.coerceGuildsRoute;
                    var6 = _closure1_slot1;
                    var3 = 38;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.bind(var1)();
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 32;
                    var6 = var9[var5];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.triggerHapticFeedback;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.SOFT;
                    var5 = var6.bind(var7)(var5);
                    var4 = var4.params;
                    var6 = var3 == var4;
                    var5 = undefined;
                    if(var6) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var5 = var4.guildId;
case 52:
                    var4 = _closure1_slot18;
                    if(!(var5 !== var4)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var5 = _closure2_slot9;
                    var6 = var5.current;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 40;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.DismissibleContent;
                    var5 = var5.YOU_BAR_DM_SWIPE_COACHMARK;
                    if(!(var6 === var5)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var6 = _closure2_slot8;
                    var5 = var6.current;
                    var4 = _closure1_slot19;
                    var4 = var4.TAKE_ACTION;
                    var4 = var5.bind(var6)(var4);
case 56:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 39;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToGuild;
                    var4 = _closure1_slot18;
                    var4 = var5.bind(var6)(var4);
                    _fun0009_ip = 50; continue _fun0009;
case 54:
                    var5 = _closure1_slot9;
                    var4 = var5.getLastSelectedGuildId;
                    var4 = var4.bind(var5)();
                    if(!(var3 != var4)) { _fun0009_ip = 50; continue _fun0009 }
case 58:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 39;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToGuild;
                    var2 = var2.bind(var3)(var4);
case 50:
                    return var1;
                }
            };
            var15 = new Array(0);
            var20 = var30.bind(var8)(var20, var15);
            var _closure2_slot15 = var20;
            var30 = var8.useContext;
            var31 = _closure1_slot1;
            var15 = 41;
            var15 = var3[var15];
            var15 = var31.bind(var4)(var15);
            var30 = var30.bind(var8)(var15);
            var15 = var30.gesture;
            var _closure2_slot16 = var15;
            var30 = var30.translateX;
            var _closure2_slot17 = var30;
            var3 = var3[var1];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useSharedValue;
            var3 = var3.bind(var6)(var29);
            var _closure2_slot18 = var3;
            var6 = var8.useMemo;
            var3 = new Array(3);
            var3[0] = var20;
            var3[1] = var15;
            var3[2] = var14;
            var2 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 42;
                var2 = var10[var2];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.simultaneousWithExternalGesture;
                var2 = _closure2_slot16;
                var5 = var3.bind(var5)(var2);
                var3 = var5.activeOffsetX;
                var2 = 50;
                var5 = var3.bind(var5)(var2);
                var3 = var5.failOffsetX;
                var2 = -10;
                var5 = var3.bind(var5)(var2);
                var3 = var5.failOffsetY;
                var2 = new Array(2);
                var7 = -40;
                var2[0] = var7;
                var7 = 40;
                var2[1] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onBegin;
                var2 = function s() {
                    var3 = _closure2_slot18;
                    var2 = var3.set;
                    var4 = _closure2_slot17;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var7 = {};
                var11 = _closure2_slot18;
                var7['startingTranslateX'] = var11;
                var11 = _closure2_slot17;
                var7['translateX'] = var11;
                var2['__closure'] = var7;
                var7 = 13002049298724.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot26;
                var2['__initData'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function n(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg2;
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.abs;
                        var6 = _closure2_slot18;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var6 = _closure2_slot17;
                        var1 = var6.get;
                        var1 = var1.bind(var6)();
                        var1 = var5 - var1;
                        var3 = var3.bind(var4)(var1);
                        var1 = 10;
                        if(!(var3 >= var1)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var11 = _closure2_slot18;
                var7['startingTranslateX'] = var11;
                var11 = _closure2_slot17;
                var7['translateX'] = var11;
                var2['__closure'] = var7;
                var7 = 11728992116193.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot25;
                var2['__initData'] = var7;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onEnd;
                var1 = function t(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg2;
                        if(!var1) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot15;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var7 = 20;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot15;
                var5['handleNavBetweenGuildsAndDMs'] = var6;
                var1['__closure'] = var5;
                var5 = 2931771790779.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot24;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var6.bind(var8)(var2, var3);
            var8 = !var19;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 43;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.AVATAR_SIZE_MAP;
            if(var8) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var2 = _closure1_slot16;
            var20 = var3[var2];
            _fun0001_ip = 65; continue _fun0001;
case 63:
            var2 = _closure1_slot15;
            var20 = var3[var2];
case 65:
            var3 = _closure1_slot21;
            var6 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = var15[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var1['ref'] = var7;
            var29 = var12.youRow;
            var7 = new Array(3);
            var7[0] = var29;
            var7[1] = var28;
            var7[2] = var27;
            var1['style'] = var7;
            var1['shouldRasterizeIOS'] = var5;
            var7 = _closure1_slot20;
            var5 = 44;
            var5 = var15[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['hasNameplate'] = var13;
            var5['isLargeAvatar'] = var8;
            var5['barWidth'] = var25;
            var5['isQuestRendered'] = var19;
            var5['avatarSize'] = var20;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var6 = var11 != var26;
            if(!var6) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var15 = _closure1_slot20;
            var8 = _closure1_slot1;
            var27 = _closure1_slot2;
            var7 = 45;
            var7 = var27[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['nameplate'] = var26;
            var7['barWidth'] = var25;
            var7['isQuestRendered'] = var19;
            var7['avatarSize'] = var20;
            var6 = var15.bind(var4)(var8, var7);
case 66:
            var5[1] = var6;
            var8 = _closure1_slot20;
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var6 = 42;
            var6 = var20[var6];
            var6 = var27.bind(var4)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var14;
            var15 = _closure1_slot7;
            var14 = {};
            var25 = var12.youPressable;
            var14['style'] = var25;
            var25 = {};
            var26 = 'transparent';
            var25['color'] = var26;
            var14['android_ripple'] = var25;
            var25 = 'button';
            var14['accessibilityRole'] = var25;
            var14['accessibilityLabel'] = var24;
            var24 = 29;
            var25 = var20[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var20[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.cSgdvE;
            var24 = var25.bind(var26)(var24);
            var14['accessibilityHint'] = var24;
            var14['accessibilityActions'] = var23;
            var14['onAccessibilityAction'] = var22;
            var14['onPressIn'] = var21;
            var14['onPressOut'] = var17;
            var14['onPress'] = var18;
            var14['onLongPress'] = var16;
            var16 = _closure1_slot17;
            var14['hitSlop'] = var16;
            var17 = _closure1_slot1;
            var16 = 46;
            var16 = var20[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['isQuestRendered'] = var19;
            var16['onAvatarPress'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var14['children'] = var16;
            var14 = var8.bind(var4)(var15, var14);
            var6['children'] = var14;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var14 = _closure1_slot20;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 47;
            var9 = var15[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 68:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot20;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 48;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot27 = var4;
    var4 = var7.memo;
    var2 = function YouBarThemed() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 24;
        var1 = var9[var1];
        var4 = undefined;
        var7 = var2.bind(var4)(var1);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var1 = _closure1_slot8;
            var1 = var1.gradientPreset;
            return var1;
        };
        var5 = var5.bind(var7)(var3, var1);
        var3 = _closure1_slot21;
        var1 = 49;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot20;
        var7 = _closure1_slot1;
        var5 = 50;
        var5 = var9[var5];
        var10 = var7.bind(var4)(var5);
        var5 = {};
        var10 = var8.bind(var4)(var10, var5);
        var5 = new Array(3);
        var5[0] = var10;
        var10 = _closure1_slot27;
        var6 = {};
        var6 = var8.bind(var4)(var10, var6);
        var5[1] = var6;
        var6 = 51;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();