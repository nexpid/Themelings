// app/modules/main_tabs_v2/native/you_bar/YouBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var4 = var6[var15];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 2;
    var7 = var6[var12];
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
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.YOU_BAR_HEIGHT;
    var _closure1_slot12 = var11;
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
    var10 = {};
    var13 = 13;
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.modules;
    var16 = var16.mobile;
    var16 = var16.YOU_BAR_BORDER_RADIUS;
    var10['borderRadius'] = var16;
    var4['youBorderRadius'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 0, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': 'transparent'};
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.shadows;
    var18 = var16.SHADOW_HIGH;
    var19 = var10;
    var16 = copyDataProperties(var19, var18);
    var4['youRow'] = var10;
    var10 = {};
    var10['borderWidth'] = var15;
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_MUTED;
    var10['borderColor'] = var16;
    var16 = var6[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.modules;
    var16 = var16.mobile;
    var16 = var16.YOU_BAR_BORDER_RADIUS;
    var10['borderRadius'] = var16;
    var16 = var11 / var12;
    var10['borderTopLeftRadius'] = var16;
    var16 = var11 / var12;
    var10['borderBottomLeftRadius'] = var16;
    var4['youRowFloating'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 8};
    var4['youRowRight'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var10['marginRight'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.modules;
    var13 = var13.mobile;
    var13 = var13.YOU_BAR_BORDER_RADIUS;
    var10['borderRadius'] = var13;
    var4['youPressable'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'right': 0, 'height': 1};
    var11 = var11 / var12;
    var10['top'] = var11;
    var4['dmSwipeCoachmarkAnchor'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function YouBarTsx1(){const{withSpring,barMarginBottom,connectionBannerHeight,YOU_BAR_SPRING_CONFIG,isPressedValue,isQuestRendered}=this.__closure;return{marginBottom:withSpring(barMarginBottom+connectionBannerHeight,YOU_BAR_SPRING_CONFIG),transform:[{scale:withSpring(isPressedValue.get()&&!isQuestRendered?0.98:1,YOU_BAR_SPRING_CONFIG)}]};}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function YouBarTsx2(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,youBarBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,YOU_BAR_HEIGHT}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(isQuestRendered?questDockAnimatedBottomLeftRadius.get():YOU_BAR_HEIGHT/2,YOU_BAR_SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function YouBarTsx3(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,youBarBorderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():youBarBorderRadius,YOU_BAR_SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function YouBarTsx4(_,success){const{runOnJS,handleNavBetweenGuildsAndDMs}=this.__closure;if(!success)return;runOnJS(handleNavBetweenGuildsAndDMs)();}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function YouBarTsx5(_,manager){const{startingTranslateX,translateX}=this.__closure;if(Math.abs(startingTranslateX.get()-translateX.get())>=10){manager.fail();}}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function YouBarTsx6(){const{startingTranslateX,translateX}=this.__closure;startingTranslateX.set(translateX.get());}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var8 = var7.memo;
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot22;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 17;
            var3 = var2[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var7 = var3.width;
            var3 = _closure1_slot0;
            var5 = 18;
            var6 = var2[var5];
            var9 = var3.bind(var4)(var6);
            var6 = var9.useIsMobileQuestDockRenderedBase;
            var5 = var2[var5];
            var11 = var3.bind(var4)(var5);
            var5 = var11.useMobileQuestDock;
            var5 = var5.bind(var11)();
            var19 = var6.bind(var9)(var5);
            var _closure2_slot0 = var19;
            var5 = 19;
            var5 = var2[var5];
            var6 = var3.bind(var4)(var5);
            var5 = var6.useDrawerWidth;
            var6 = var5.bind(var6)();
            var5 = 20;
            var5 = var2[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var8 = var5.isChatBesideChannelList;
            var5 = 21;
            var2 = var2[var5];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useYouBarHorizontalMargin;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var42 = 2;
            var3 = var42 * var2;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var28 = var7 - var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var28 = var6 - var3;
case 4:
            var _closure2_slot2 = var28;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = var6[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useYouBarBottomMargin;
            var13 = var5.bind(var7)();
            var _closure2_slot3 = var13;
            var5 = 22;
            var5 = var6[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useConnectionBannerHeight;
            var11 = var5.bind(var7)();
            var _closure2_slot4 = var11;
            var16 = _closure1_slot5;
            var7 = var16.useMemo;
            var5 = new Array(2);
            var5[0] = var28;
            var5[1] = var2;
            var2 = function() {
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
            var8 = var7.bind(var16)(var2, var5);
            var26 = 23;
            var2 = var6[var26];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useSharedValue;
            var32 = false;
            var14 = var2.bind(var5)(var32);
            var _closure2_slot5 = var14;
            var2 = var6[var26];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useAnimatedStyle;
            var2 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 24;
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
            var34 = 24;
            var15 = var6[var34];
            var15 = var3.bind(var4)(var15);
            var15 = var15.withSpring;
            var9['withSpring'] = var15;
            var9['barMarginBottom'] = var13;
            var9['connectionBannerHeight'] = var11;
            var11 = _closure1_slot14;
            var9['YOU_BAR_SPRING_CONFIG'] = var11;
            var9['isPressedValue'] = var14;
            var9['isQuestRendered'] = var19;
            var2['__closure'] = var9;
            var9 = 7314807713815.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot23;
            var2['__initData'] = var9;
            var7 = var5.bind(var7)(var2);
            var2 = 25;
            var2 = var6[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useICYMIEnabled;
            var2 = 'TabsNavigator';
            var9 = var5.bind(var9)(var2);
            var2 = var16.useRef;
            var11 = null;
            var33 = var2.bind(var16)(var11);
            var15 = _closure1_slot1;
            var2 = 26;
            var2 = var6[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.bind(var4)(var33, var19);
            var _closure2_slot6 = var2;
            var5 = var16.useRef;
            var5 = var5.bind(var16)(var2);
            var _closure2_slot7 = var5;
            var13 = var16.useEffect;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot6;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var13.bind(var16)(var2, var5);
            var5 = 15;
            var2 = var6[var5];
            var17 = var3.bind(var4)(var2);
            var16 = var17.useStateFromStores;
            var2 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var16.bind(var17)(var13, var2);
            var2 = 16;
            var2 = var6[var2];
            var17 = var3.bind(var4)(var2);
            var13 = var17.useNameplate;
            var2 = {};
            var2['user'] = var16;
            var2['guildId'] = var4;
            var27 = var13.bind(var17)(var2);
            var13 = var11 != var27;
            var2 = function useBackgroundColor() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 14;
                    var1 = var5[var7];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var1);
                    var8 = var10.useToken;
                    var9 = _closure1_slot1;
                    var2 = 13;
                    var1 = var5[var2];
                    var1 = var9.bind(var6)(var1);
                    var1 = var1.colors;
                    var1 = var1.MOBILE_FLOATINGBAR_BACKGROUND;
                    var1 = var8.bind(var10)(var1);
                    var7 = var5[var7];
                    var8 = var4.bind(var6)(var7);
                    var7 = var8.useToken;
                    var2 = var5[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.colors;
                    var2 = var2.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE;
                    var2 = var7.bind(var8)(var2);
                    var7 = 15;
                    var7 = var5[var7];
                    var9 = var4.bind(var6)(var7);
                    var8 = var9.useStateFromStores;
                    var3 = _closure1_slot11;
                    var7 = new Array(1);
                    var7[0] = var3;
                    var3 = function() {
                        var2 = _closure1_slot11;
                        var1 = var2.getCurrentUser;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7, var3);
                    var3 = 16;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.useNameplate;
                    var3 = {};
                    var3['user'] = var7;
                    var3['guildId'] = var6;
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var35 = var2.bind(var4)();
            var2 = 27;
            var2 = var6[var2];
            var15 = var15.bind(var4)(var2);
            var2 = var15.useName;
            var2 = var2.bind(var15)(var16);
            var _closure2_slot8 = var2;
            var2 = 28;
            var2 = var6[var2];
            var15 = var3.bind(var4)(var2);
            var2 = var15.useCustomStatusActivity;
            var15 = var2.bind(var15)();
            var2 = 29;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useGameMentionsAsPlainText;
            var16 = var11 == var15;
            var2 = undefined;
            if(var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var15.state;
case 10:
            var2 = var3.bind(var6)(var2);
            var _closure2_slot9 = var2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var5];
            var16 = var3.bind(var4)(var5);
            var15 = var16.useStateFromStores;
            var5 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 == var6)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = undefined;
                    return var3;
case 12:
                    var5 = _closure1_slot10;
                    var4 = var5.getStatus;
                    var5 = var4.bind(var5)();
                    var4 = _closure2_slot9;
                    if(!(var2 == var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 27;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var3 = var4.humanizeStatus;
                    var5 = var3.bind(var4)(var5);
                    _fun0004_ip = 16; continue _fun0004;
case 14:
                    var5 = _closure2_slot9;
case 16:
                    var1 = var6;
                    if(!(var2 != var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = '';
                    var2 = ', ';
                    var1 = var4.bind(var3)(var6, var2, var5);
case 17:
                    return var1;
                }
            };
            var24 = var15.bind(var16)(var6, var5);
            var5 = _closure1_slot5;
            var16 = var5.useMemo;
            var15 = function() {
                var2 = {};
                var1 = 'open-settings';
                var2['name'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 30;
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
            var6 = new Array(0);
            var23 = var16.bind(var5)(var15, var6);
            var16 = var5.useCallback;
            var15 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'open-settings';
                    if(!(var1 === var2)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.openUserSettings;
                    var1 = var1.bind(var2)();
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = new Array(0);
            var22 = var16.bind(var5)(var15, var6);
            var6 = var5.useRef;
            var6 = var6.bind(var5)(var11);
            var _closure2_slot10 = var6;
            var6 = var5.useState;
            var30 = 0;
            var15 = var6.bind(var5)(var30);
            var6 = _closure1_slot4;
            var15 = var6.bind(var4)(var15, var42);
            var6 = var15[var30];
            var39 = 1;
            var15 = var15[var39];
            var _closure2_slot11 = var15;
            var16 = var5.useRef;
            var15 = true;
            var16 = var16.bind(var5)(var15);
            var _closure2_slot12 = var16;
            var18 = var5.useEffect;
            var17 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 32;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var5 = var3.bind(var4)();
                    var _closure3_slot0 = var5;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    return var2;
case 21:
                    var4 = function checkYouScreenPresence() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var1 = var2.getState;
                            var7 = var1.bind(var2)();
                            var3 = null;
                            var5 = var3 != var7;
                            if(!var5) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                            var2 = var7.routes;
                            var1 = var7.index;
                            var1 = var2[var1];
                            var8 = var3 == var1;
                            var2 = undefined;
                            if(var8) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                            var2 = var1.name;
case 25:
                            var1 = 'main';
                            var5 = var1 === var2;
case 23:
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            var1 = !var1;
                            if(!var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                            var1 = var5;
case 27:
                            if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                            var9 = _closure2_slot11;
                            var8 = undefined;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var1 = var9.bind(var8)(var1);
case 29:
                            var1 = _closure2_slot12;
                            var1['current'] = var5;
                            var8 = var3 == var7;
                            var1 = undefined;
                            var5 = undefined;
                            if(var8) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                            var8 = var7.routes;
                            var7 = var3 == var8;
                            var5 = undefined;
                            if(var7) { _fun0007_ip = 31; continue _fun0007 }
case 33:
                            var7 = var8.some;
                            var6 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = 'you';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var5 = var7.bind(var8)(var6);
case 31:
                            if(var5) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                            var5 = _closure2_slot10;
                            var5 = var5.current;
                            if(!(var3 != var5)) { _fun0007_ip = 34; continue _fun0007 }
case 36:
                            var5 = _closure2_slot10;
                            var6 = var5.current;
                            var5 = 'press';
                            if(!(var5 !== var6)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 34;
                            var5 = var7[var5];
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.assertNever;
                            var5 = _closure2_slot10;
                            var5 = var5.current;
                            var5 = var6.bind(var7)(var5);
                            _fun0007_ip = 39; continue _fun0007;
case 37:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 33;
                            var6 = var9[var5];
                            var7 = var8.bind(var1)(var6);
                            var6 = var7.triggerHapticFeedback;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.HapticFeedbackTypes;
                            var5 = var5.SOFT;
                            var5 = var6.bind(var7)(var5);
                            var6 = _closure3_slot0;
                            var5 = var6.navigate;
                            var4 = 'you';
                            var4 = var5.bind(var6)(var4);
case 39:
                            var2 = _closure2_slot10;
                            var2['current'] = var3;
case 34:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var2)();
                    var3 = var5.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var5)(var2, var4);
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
            var16 = var18.bind(var5)(var17, var16);
            var16 = var12.youBorderRadius;
            var29 = var16.borderRadius;
            var _closure2_slot13 = var29;
            var36 = _closure1_slot1;
            var16 = 35;
            var17 = var2[var16];
            var17 = var36.bind(var4)(var17);
            var25 = var17.bind(var4)(var29);
            var _closure2_slot14 = var25;
            var16 = var2[var16];
            var17 = var36.bind(var4)(var16);
            var31 = _closure1_slot12;
            var16 = var31 / var42;
            var37 = var17.bind(var4)(var29, var16);
            var _closure2_slot15 = var37;
            var16 = var2[var26];
            var18 = var3.bind(var4)(var16);
            var17 = var18.useAnimatedStyle;
            var16 = function le() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 24;
                    var3 = var3[var7];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0008_ip = 40; continue _fun0008 }
case 15:
                    var4 = _closure2_slot13;
                    _fun0008_ip = 41; continue _fun0008;
case 40:
                    var10 = _closure2_slot14;
                    var3 = var10.get;
                    var4 = var3.bind(var10)();
case 41:
                    var3 = _closure1_slot14;
                    var3 = var8.bind(var9)(var4, var3);
                    var1['borderTopRightRadius'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                    var4 = _closure2_slot13;
                    _fun0008_ip = 44; continue _fun0008;
case 42:
                    var10 = _closure2_slot14;
                    var3 = var10.get;
                    var4 = var3.bind(var10)();
case 44:
                    var3 = _closure1_slot14;
                    var3 = var8.bind(var9)(var4, var3);
                    var1['borderTopLeftRadius'] = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var7 = _closure1_slot12;
                    var3 = 2;
                    var3 = var7 / var3;
                    _fun0008_ip = 47; continue _fun0008;
case 45:
                    var7 = _closure2_slot15;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 47:
                    var2 = _closure1_slot14;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderBottomLeftRadius'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var21 = var2[var34];
            var21 = var3.bind(var4)(var21);
            var21 = var21.withSpring;
            var20['withSpring'] = var21;
            var20['isQuestRendered'] = var19;
            var20['questDockAnimatedBorderRadius'] = var25;
            var20['youBarBorderRadius'] = var29;
            var21 = _closure1_slot14;
            var20['YOU_BAR_SPRING_CONFIG'] = var21;
            var20['questDockAnimatedBottomLeftRadius'] = var37;
            var20['YOU_BAR_HEIGHT'] = var31;
            var16['__closure'] = var20;
            var20 = 5120319083315.0;
            var16['__workletHash'] = var20;
            var20 = _closure1_slot24;
            var16['__initData'] = var20;
            var31 = var17.bind(var18)(var16);
            var16 = var2[var26];
            var18 = var3.bind(var4)(var16);
            var17 = var18.useAnimatedStyle;
            var16 = function ce() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 24;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0009_ip = 40; continue _fun0009 }
case 15:
                    var3 = _closure2_slot13;
                    _fun0009_ip = 41; continue _fun0009;
case 40:
                    var7 = _closure2_slot14;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 41:
                    var2 = _closure1_slot14;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopRightRadius'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var34 = var2[var34];
            var34 = var3.bind(var4)(var34);
            var34 = var34.withSpring;
            var20['withSpring'] = var34;
            var20['isQuestRendered'] = var19;
            var20['questDockAnimatedBorderRadius'] = var25;
            var20['youBarBorderRadius'] = var29;
            var20['YOU_BAR_SPRING_CONFIG'] = var21;
            var16['__closure'] = var20;
            var20 = 14616734907875.0;
            var16['__workletHash'] = var20;
            var20 = _closure1_slot25;
            var16['__initData'] = var20;
            var25 = var17.bind(var18)(var16);
            var18 = var5.useMemo;
            var17 = new Array(1);
            var17[0] = var14;
            var16 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.debounce;
                var3 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 32;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var4)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
                        var5 = var4.getState;
                        var6 = var5.bind(var4)();
                        var7 = var3 == var6;
                        var5 = undefined;
                        if(var7) { _fun0010_ip = 50; continue _fun0010 }
case 19:
                        var8 = var6.routes;
                        var6 = var3 == var8;
                        var5 = undefined;
                        if(var6) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                        var7 = var8.some;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.name;
                            var1 = 'you';
                            var1 = var1 === var2;
                            return var1;
                        };
                        var5 = var7.bind(var8)(var6);
case 50:
                        if(var5) { _fun0010_ip = 52; continue _fun0010 }
case 48:
                        if(!(var3 != var4)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 33;
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
case 53:
                        return var1;
case 52:
                        var3 = _closure2_slot10;
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
            var18 = var18.bind(var5)(var16, var17);
            var20 = var5.useCallback;
            var17 = _closure1_slot3;
            var16 = function* () {
                var1 = function* anon_0_() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 38;
                        var5 = var2[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = 37;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var2 = var6.bind(var3)(var5, var2);
                        SaveGenerator(address=57);
case 57:
                        return var2;
case 25:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 33;
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
case 58:
                        return var2;
case 55:
                        return var1;
                    }
                };
                return var1;
            };
            var17 = var17.bind(var4)(var16);
            var16 = new Array(1);
            var16[0] = var14;
            var16 = var20.bind(var5)(var17, var16);
            var21 = var5.useCallback;
            var20 = new Array(1);
            var20[0] = var14;
            var17 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = var21.bind(var5)(var17, var20);
            var20 = var5.useCallback;
            var17 = new Array(1);
            var17[0] = var14;
            var14 = function() {
                var3 = _closure2_slot5;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var17 = var20.bind(var5)(var14, var17);
            var34 = var5.useCallback;
            var20 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 39;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.coerceGuildsRoute;
                    var6 = _closure1_slot1;
                    var3 = 40;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.bind(var1)();
                    var4 = var4.bind(var5)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0012_ip = 60; continue _fun0012 }
case 23:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 33;
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
                    if(var6) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var5 = var4.guildId;
case 61:
                    var4 = _closure1_slot18;
                    if(!(var5 !== var4)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                    var6 = _closure2_slot7;
                    var5 = var6.current;
                    var4 = _closure1_slot19;
                    var4 = var4.TAKE_ACTION;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 41;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToGuild;
                    var4 = _closure1_slot18;
                    var4 = var5.bind(var6)(var4);
                    _fun0012_ip = 60; continue _fun0012;
case 63:
                    var5 = _closure1_slot9;
                    var4 = var5.getLastSelectedGuildId;
                    var4 = var4.bind(var5)();
                    if(!(var3 != var4)) { _fun0012_ip = 60; continue _fun0012 }
case 65:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 41;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToGuild;
                    var2 = var2.bind(var3)(var4);
case 60:
                    return var1;
                }
            };
            var14 = new Array(0);
            var20 = var34.bind(var5)(var20, var14);
            var _closure2_slot16 = var20;
            var34 = var5.useContext;
            var14 = 42;
            var14 = var2[var14];
            var14 = var36.bind(var4)(var14);
            var34 = var34.bind(var5)(var14);
            var14 = var34.gesture;
            var _closure2_slot17 = var14;
            var34 = var34.translateX;
            var _closure2_slot18 = var34;
            var2 = var2[var26];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSharedValue;
            var2 = var2.bind(var3)(var30);
            var _closure2_slot19 = var2;
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var20;
            var2[1] = var14;
            var2[2] = var6;
            var1 = function() {
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 43;
                var2 = var10[var2];
                var8 = undefined;
                var2 = var9.bind(var8)(var2);
                var3 = var2.Gesture;
                var2 = var3.Pan;
                var5 = var2.bind(var3)();
                var3 = var5.simultaneousWithExternalGesture;
                var2 = _closure2_slot17;
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
                var2 = function o() {
                    var3 = _closure2_slot19;
                    var2 = var3.set;
                    var4 = _closure2_slot18;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var7 = {};
                var11 = _closure2_slot19;
                var7['startingTranslateX'] = var11;
                var11 = _closure2_slot18;
                var7['translateX'] = var11;
                var2['__closure'] = var7;
                var7 = 947626928166.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot28;
                var2['__initData'] = var7;
                var5 = var3.bind(var5)(var2);
                var3 = var5.onTouchesMove;
                var2 = function r(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg2;
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.abs;
                        var6 = _closure2_slot19;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var6 = _closure2_slot18;
                        var1 = var6.get;
                        var1 = var1.bind(var6)();
                        var1 = var5 - var1;
                        var3 = var3.bind(var4)(var1);
                        var1 = 10;
                        if(!(var3 >= var1)) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
case 66:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var11 = _closure2_slot19;
                var7['startingTranslateX'] = var11;
                var11 = _closure2_slot18;
                var7['translateX'] = var11;
                var2['__closure'] = var7;
                var7 = 11572712813799.0;
                var2['__workletHash'] = var7;
                var7 = _closure1_slot27;
                var2['__initData'] = var7;
                var3 = var3.bind(var5)(var2);
                var2 = var3.onEnd;
                var1 = function t(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg2;
                        if(!var1) { _fun0014_ip = 26; continue _fun0014 }
case 68:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot16;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
case 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var7 = 23;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                var7 = var7.runOnJS;
                var5['runOnJS'] = var7;
                var6 = _closure2_slot16;
                var5['handleNavBetweenGuildsAndDMs'] = var6;
                var1['__closure'] = var5;
                var5 = 12811308695485.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot26;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var6 = !var19;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 44;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.AVATAR_SIZE_MAP;
            if(var6) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var1 = _closure1_slot16;
            var20 = var2[var1];
            _fun0001_ip = 71; continue _fun0001;
case 69:
            var1 = _closure1_slot15;
            var20 = var2[var1];
case 71:
            var1 = 4;
            var44 = var20 - var1;
            var3 = _closure1_slot21;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var26];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var34 = var12.youRow;
            var5 = new Array(3);
            var5[0] = var34;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var5 = {};
            var5['ref'] = var33;
            var5['collapsable'] = var32;
            var32 = var12.dmSwipeCoachmarkAnchor;
            var5['style'] = var32;
            var5['aria-hidden'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var15 = _closure1_slot20;
            var40 = _closure1_slot1;
            var41 = _closure1_slot2;
            if(var6) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var6 = var41[var26];
            var6 = var40.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var32 = {};
            var8 = 'absolute';
            var32['position'] = var8;
            var8 = new Array(5);
            var8[0] = var32;
            var32 = var12.youRowFloating;
            var8[1] = var32;
            var32 = {};
            var32['width'] = var28;
            var33 = _closure1_slot12;
            var32['height'] = var33;
            var32['backgroundColor'] = var35;
            var8[2] = var32;
            var32 = {'borderTopRightRadius': 0, 'borderTopLeftRadius': 0};
            var8[3] = var32;
            var8[4] = var31;
            var6['style'] = var8;
            var6 = var15.bind(var4)(var7, var6);
            _fun0001_ip = 74; continue _fun0001;
case 72:
            var7 = 45;
            var7 = var41[var7];
            var8 = var40.bind(var4)(var7);
            var7 = {};
            var31 = {};
            var32 = 'absolute';
            var31['position'] = var32;
            var7['style'] = var31;
            var33 = _closure1_slot21;
            var32 = _closure1_slot6;
            var31 = {};
            var34 = {};
            var34['width'] = var28;
            var36 = _closure1_slot12;
            var34['height'] = var36;
            var37 = 'transparent';
            var34['backgroundColor'] = var37;
            var31['style'] = var34;
            var34 = {};
            var37 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': null, 'backgroundColor': 'black'};
            var38 = var36 / var42;
            var38 = var38 - var39;
            var37['bottom'] = var38;
            var34['style'] = var37;
            var37 = var15.bind(var4)(var32, var34);
            var34 = new Array(3);
            var34[0] = var37;
            var37 = {};
            var38 = {'position': 'absolute', 'top': null, 'left': null, 'right': 0, 'bottom': 0, 'backgroundColor': 'black'};
            var43 = var36 / var42;
            var38['top'] = var43;
            var39 = var44 - var39;
            var38['left'] = var39;
            var37['style'] = var38;
            var37 = var15.bind(var4)(var32, var37);
            var34[1] = var37;
            var37 = 46;
            var37 = var41[var37];
            var38 = var40.bind(var4)(var37);
            var37 = {};
            var39 = {'position': 'absolute', 'top': null, 'width': 8};
            var43 = var36 / var42;
            var39['top'] = var43;
            var43 = 8;
            var43 = var44 - var43;
            var39['left'] = var43;
            var42 = var36 / var42;
            var39['height'] = var42;
            var37['style'] = var39;
            var39 = 47;
            var39 = var41[var39];
            var39 = var40.bind(var4)(var39);
            var40 = '#000000';
            var41 = var39.bind(var4)(var40);
            var39 = var41.alpha;
            var41 = var39.bind(var41)(var30);
            var39 = var41.hex;
            var41 = var39.bind(var41)();
            var39 = new Array(2);
            var39[0] = var41;
            var39[1] = var40;
            var37['colors'] = var39;
            var39 = {'x': 0, 'y': 0};
            var37['start'] = var39;
            var39 = {'x': 1, 'y': 0};
            var37['end'] = var39;
            var39 = [0, 1];
            var37['locations'] = var39;
            var39 = 'none';
            var37['pointerEvents'] = var39;
            var37 = var15.bind(var4)(var38, var37);
            var34[2] = var37;
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var7['maskElement'] = var31;
            var31 = {};
            var34 = var12.youRowFloating;
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var34['width'] = var28;
            var34['height'] = var36;
            var34['backgroundColor'] = var35;
            var33[1] = var34;
            var31['style'] = var33;
            var31 = var15.bind(var4)(var32, var31);
            var7['children'] = var31;
            var6 = var15.bind(var4)(var8, var7);
case 74:
            var5[1] = var6;
            var6 = null;
            if(!var13) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var15 = _closure1_slot20;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var26];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var26 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderTopLeftRadius': 0, 'borderBottomRightRadius': null, 'borderBottomLeftRadius': 0, 'overflow': 'hidden'};
            var26['left'] = var20;
            var30 = 0;
            if(var19) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var30 = var29;
case 77:
            var26['borderTopRightRadius'] = var30;
            var26['borderBottomRightRadius'] = var29;
            var20 = var28 - var20;
            var26['width'] = var20;
            var20 = new Array(2);
            var20[0] = var26;
            var20[1] = var25;
            var7['style'] = var20;
            var20 = 'none';
            var7['pointerEvents'] = var20;
            var26 = _closure1_slot20;
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 48;
            var20 = var28[var20];
            var25 = var25.bind(var4)(var20);
            var20 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var20['nameplate'] = var27;
            var20 = var26.bind(var4)(var25, var20);
            var7['children'] = var20;
            var6 = var15.bind(var4)(var8, var7);
case 75:
            var5[2] = var6;
            var8 = _closure1_slot20;
            var27 = _closure1_slot0;
            var20 = _closure1_slot2;
            var6 = 43;
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
            var24 = 30;
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
            var16 = 49;
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
            var5[3] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot6;
            var6 = {};
            var12 = var12.youRowRight;
            var6['style'] = var12;
            var11 = null;
            if(!var9) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var14 = _closure1_slot20;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 50;
            var9 = var15[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['hasNameplate'] = var13;
            var11 = var14.bind(var4)(var12, var9);
case 79:
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot20;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 51;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['hasNameplate'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot29 = var4;
    var4 = var7.memo;
    var2 = function YouBarThemed() {
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 15;
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
        var1 = 52;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var1['gradient'] = var5;
        var8 = _closure1_slot20;
        var7 = _closure1_slot1;
        var5 = 53;
        var5 = var9[var5];
        var10 = var7.bind(var4)(var5);
        var5 = {};
        var10 = var8.bind(var4)(var10, var5);
        var5 = new Array(3);
        var5[0] = var10;
        var10 = _closure1_slot29;
        var6 = {};
        var6 = var8.bind(var4)(var10, var6);
        var5[1] = var6;
        var6 = 54;
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
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/YouBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();