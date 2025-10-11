// app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function Header(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var20 = var2.channelId;
            var _closure2_slot0 = var20;
            var19 = var2.screenIndex;
            var1 = var2.guildId;
            var _closure2_slot1 = var1;
            var25 = var2.isNavigationScreen;
            var _closure2_slot2 = var25;
            var6 = var2.frame;
            var _closure2_slot3 = var6;
            var5 = var2.isMIDNIGHTTheme;
            var _closure2_slot4 = var5;
            var18 = var2.showCreateThread;
            var14 = var2.isBackEnabled;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 8;
            var2 = var13[var2];
            var4 = undefined;
            var3 = var11.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot5 = var2;
            var3 = _closure1_slot14;
            var21 = var3.bind(var4)();
            var _closure2_slot6 = var21;
            var8 = _closure1_slot1;
            var3 = 9;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var17 = var3.top;
            var _closure2_slot7 = var17;
            var3 = 10;
            var3 = var13[var3];
            var8 = var11.bind(var4)(var3);
            var3 = var8.useGradientTop;
            var12 = var3.bind(var8)();
            var _closure2_slot8 = var12;
            var3 = 11;
            var3 = var13[var3];
            var9 = var11.bind(var4)(var3);
            var8 = var9.useYouBarEnabled;
            var3 = 'channel header';
            var3 = var8.bind(var9)(var3);
            var _closure2_slot9 = var3;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var16 = var21.headerWrapper;
            var8 = new Array(8);
            var8[0] = var16;
            var16 = var21.headerWithFadingFrame;
            var8[1] = var16;
            var16 = var21.headerWithFadingFrameMidnight;
            var8[2] = var16;
            var8[3] = var12;
            var8[4] = var6;
            var8[5] = var5;
            var8[6] = var17;
            var8[7] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var2 = var1.headerWrapper;
                    var1 = new Array(5);
                    var1[0] = var2;
                    var2 = _closure2_slot8;
                    var1[1] = var2;
                    var2 = _closure2_slot3;
                    var3 = null;
                    var5 = var3 == var2;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot9;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot6;
                    var2 = var5.headerWithFadingFrame;
case 2:
                    var1[2] = var2;
                    var2 = _closure2_slot3;
                    var5 = var3 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var5 = _closure2_slot4;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var5 = _closure2_slot6;
                    var2 = var5.headerWithFadingFrameMidnight;
case 5:
                    var1[3] = var2;
                    var2 = _closure2_slot3;
                    if(!(var3 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = {};
                    var5 = _closure2_slot7;
                    var2['paddingTop'] = var5;
                    var3 = _closure1_slot6;
                    var3 = var5 + var3;
                    var2['minHeight'] = var3;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var3 = {};
                    var4 = _closure2_slot7;
                    var3['marginTop'] = var4;
                    var4 = _closure1_slot6;
                    var3['minHeight'] = var4;
                    var2 = var3;
case 10:
                    var1[4] = var2;
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var3, var8);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var25;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure2_slot5;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var2, var3);
            var _closure2_slot10 = var12;
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot8;
                    var1 = var3 !== var2;
case 13:
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var2 = {};
            var3 = 12;
            var3 = var13[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.ServerIcon;
            var2['IconComponent'] = var3;
            var3 = 13;
            var8 = var13[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var13[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.WYj55e;
            var3 = var8.bind(var9)(var3);
            var2['label'] = var3;
            var3 = function action() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.navigateToRootTab;
                var2 = {'screen': 'guilds', 'guildId': null, 'channelId': null, 'resetRoot': false, 'drawerOpen': false};
                var6 = _closure2_slot1;
                var2['guildId'] = var6;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['action'] = var3;
            var8 = new Array(1);
            var8[0] = var2;
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = 16;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.PressableNavigatorBackIcon;
            var1 = {};
            var1['onPress'] = var12;
            var16 = var3.bind(var4)(var11, var1);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var1 = 15;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ContextMenu;
            var1 = {'triggerOnLongPress': true, 'align': 'below'};
            var1['items'] = var8;
            var7 = function children(arg1) {
                var3 = arg1;
                var6 = var3.ref;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['ref'] = var1;
                var9 = {};
                var8 = var3;
                var7 = var2;
                var8 = copyDataProperties(var9, var8, var7);
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PressableNavigatorBackIcon;
                var1 = {};
                var1['ref'] = var6;
                var9 = var1;
                var5 = copyDataProperties(var9, var8);
                var6 = _closure2_slot10;
                var5 = 'onPress';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['children'] = var7;
            var16 = var3.bind(var4)(var2, var1);
case 17:
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var8 = null;
            var9 = var8 != var6;
            var7 = null;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = null;
            if(!var5) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var5 = {};
            var12 = var21.midnightFrameCover;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var13 = _closure1_slot5;
            var13 = var17 + var13;
            var12['height'] = var13;
            var11[1] = var12;
            var5['style'] = var11;
            var7 = var9.bind(var4)(var8, var5);
case 18:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot4;
            var7 = {};
            var7['style'] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var21.headerBottomBorder;
            var10['style'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 17;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.LayerScope;
            var11 = {};
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var22 = _closure1_slot11;
            var17 = _closure1_slot4;
            var14 = {};
            var23 = var21.spacer;
            var14['style'] = var23;
            var16 = var22.bind(var4)(var17, var14);
case 21:
            var14 = new Array(3);
            var14[0] = var16;
            var24 = _closure1_slot11;
            var16 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 18;
            var17 = var22[var17];
            var23 = var16.bind(var4)(var17);
            var17 = {};
            var17['channelId'] = var20;
            var17['isNavigationScreen'] = var25;
            var17['screenIndex'] = var19;
            var17['showCreateThread'] = var18;
            var17 = var24.bind(var4)(var23, var17);
            var14[1] = var17;
            var17 = _closure1_slot11;
            var15 = 19;
            var15 = var22[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var21 = var21.actions;
            var15['containerStyle'] = var21;
            var15['channelId'] = var20;
            var15['screenIndex'] = var19;
            var15['showCreateThread'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var14 = 0;
    var7 = var6[var14];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var17 = 1;
    var4 = var6[var17];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var16 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.HEADER_CORNER_RADIUS;
    var _closure1_slot5 = var15;
    var13 = var4.MIDNIGHT_BORDER_WIDTH;
    var4 = var4.MIN_HEADER_HEIGHT;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var8;
    var8 = var4.ME;
    var _closure1_slot8 = var8;
    var4 = var4.ThemeTypes;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var8 = var4.jsxs;
    var _closure1_slot12 = var8;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var17;
    var4['container'] = var10;
    var10 = {};
    var10['borderLeftWidth'] = var13;
    var11 = 7;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_STRONG;
    var10['borderLeftColor'] = var18;
    var10['borderTopWidth'] = var13;
    var18 = 'transparent';
    var10['borderTopColor'] = var18;
    var4['midnightContainerBorder'] = var10;
    var10 = {};
    var10['flex'] = var17;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var18;
    var4['contentContainer'] = var10;
    var10 = {};
    var10['borderLeftWidth'] = var13;
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_STRONG;
    var10['borderLeftColor'] = var18;
    var4['midnightContentContainerBorder'] = var10;
    var10 = {};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var18;
    var4['containerEmpty'] = var10;
    var10 = {'zIndex': 1, 'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0};
    var18 = var6[var11];
    var18 = var12.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var18;
    var4['headerWrapper'] = var10;
    var10 = {};
    var20 = var16.absoluteFillObject;
    var21 = var10;
    var16 = copyDataProperties(var21, var20);
    var16 = 'top';
    var10[var16] = var1;
    var16 = 'height';
    var10[var16] = var17;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.BORDER_STRONG;
    var16 = 'backgroundColor';
    var10[var16] = var17;
    var4['headerBottomBorder'] = var10;
    var10 = {};
    var10['borderTopLeftRadius'] = var15;
    var4['headerWithFadingFrame'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_STRONG;
    var10['borderLeftColor'] = var15;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_STRONG;
    var10['borderTopColor'] = var15;
    var10['borderLeftWidth'] = var13;
    var10['borderTopWidth'] = var13;
    var4['headerWithFadingFrameMidnight'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var15;
    var15 = 'absolute';
    var10['position'] = var15;
    var15 = -var13;
    var10['left'] = var15;
    var10['top'] = var14;
    var10['width'] = var13;
    var4['midnightFrameCover'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginRight'] = var13;
    var4['actions'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['width'] = var11;
    var4['spacer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function StandaloneChannelScreen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var16 = var1.guildId;
            var17 = var1.channelId;
            var20 = var1.isNavigationScreen;
            var21 = var1.frame;
            var _closure2_slot0 = var21;
            var2 = var1.showCreateThread;
            var19 = var1.screenIndex;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot14;
            var6 = var1.bind(var4)();
            var _closure2_slot1 = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot2 = var1;
            var1 = 20;
            var1 = var9[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useIsSwipeToMemberListEnabled;
            var1 = var1.bind(var3)();
            var10 = _closure1_slot1;
            var3 = 21;
            var3 = var9[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.bind(var4)(var17);
            var18 = var3.needSubscriptionToAccess;
            var3 = 22;
            var3 = var9[var3];
            var9 = var7.bind(var4)(var3);
            var7 = var9.useCanSeeOnboardingHome;
            var14 = null;
            var3 = var16;
            if(!(var14 == var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var3 = _closure1_slot7;
case 23:
            var15 = var7.bind(var9)(var3);
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var26 = var3.bind(var7)(var14);
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 23;
            var3 = var13[var3];
            var3 = var10.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var3 = _closure1_slot9;
            var3 = var3.MIDNIGHT;
            var11 = var7 === var3;
            _closure2_slot3 = var11;
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var7 = new Array(4);
            var7[0] = var21;
            var7[1] = var11;
            var3 = var6.container;
            var7[2] = var3;
            var3 = var6.midnightContainerBorder;
            var7[3] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.container;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var4 = _closure2_slot3;
                    var2 = undefined;
                    if(!var4) { _fun0006_ip = 25; continue _fun0006 }
case 3:
                    var3 = _closure2_slot1;
                    var2 = var3.midnightContainerBorder;
case 25:
                    var1[1] = var2;
                    return var1;
                }
            };
            var7 = var9.bind(var12)(var3, var7);
            var22 = _closure1_slot3;
            var12 = var22.useMemo;
            var9 = new Array(4);
            var9[0] = var21;
            var9[1] = var11;
            var3 = var6.contentContainer;
            var9[2] = var3;
            var3 = var6.midnightContentContainerBorder;
            var9[3] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.contentContainer;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = undefined;
                    if(!var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var4 = _closure2_slot3;
                    var2 = undefined;
                    if(!var4) { _fun0007_ip = 27; continue _fun0007 }
case 29:
                    var3 = _closure2_slot1;
                    var2 = var3.midnightContentContainerBorder;
case 27:
                    var1[1] = var2;
                    return var1;
                }
            };
            var12 = var12.bind(var22)(var3, var9);
            var9 = _closure1_slot0;
            var3 = 24;
            var3 = var13[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.useIsForumChannelSearchActive;
            var3 = var3.bind(var9)(var17);
            var9 = 25;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.bind(var4)();
            var9 = var9.isChatLockedOpen;
            var13 = !var9;
            if(var13) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var13 = var20;
case 30:
            if(!var13) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var13 = !var3;
case 32:
            _closure2_slot4 = var13;
            if(!(var14 != var17)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            if(!(var14 != var16)) { _fun0005_ip = 34; continue _fun0005 }
case 36:
            var10 = _closure1_slot11;
            var9 = _closure1_slot15;
            var3 = {};
            var3['channelId'] = var17;
            var3['frame'] = var21;
            var3['guildId'] = var16;
            var3['isNavigationScreen'] = var20;
            var3['screenIndex'] = var19;
            var3['isMIDNIGHTTheme'] = var11;
            var3['showCreateThread'] = var2;
            var3['isBackEnabled'] = var13;
            var9 = var10.bind(var4)(var9, var3);
            var3 = _closure1_slot10;
            var3 = var3.ROLE_SUBSCRIPTIONS;
            if(!(var17 !== var3)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            if(var18) { _fun0005_ip = 37; continue _fun0005 }
case 39:
            var3 = _closure1_slot10;
            var3 = var3.GUILD_HOME;
            if(!(var17 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = _closure1_slot10;
            var3 = var3.MEMBER_SAFETY;
            if(!(var17 !== var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = _closure1_slot12;
            if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var10 = _closure1_slot13;
            var2 = {};
            var11 = new Array(2);
            var11[0] = var9;
            var22 = _closure1_slot11;
            var21 = _closure1_slot4;
            var20 = {};
            var20['style'] = var12;
            var25 = _closure1_slot11;
            var24 = _closure1_slot1;
            var27 = _closure1_slot2;
            var23 = 33;
            var23 = var27[var23];
            var24 = var24.bind(var4)(var23);
            var23 = {};
            var23['guildId'] = var16;
            var23['channelId'] = var17;
            var23['chatInputRef'] = var26;
            var23['screenIndex'] = var19;
            var23 = var25.bind(var4)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var11[1] = var20;
            var2['children'] = var11;
            var11 = var3.bind(var4)(var10, var2);
            var10 = _closure1_slot11;
            if(var1) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var20 = false;
            var1['accessible'] = var20;
            var21 = {};
            var20 = 'escape';
            var21['name'] = var20;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 13;
            var22 = var25[var20];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var25[var20];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.13/7kZ;
            var20 = var22.bind(var23)(var20);
            var21['label'] = var20;
            var20 = new Array(1);
            var20[0] = var21;
            var1['accessibilityActions'] = var20;
            var5 = function onAccessibilityAction(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'escape';
                    var1 = var1 === var2;
                    if(!var1) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var1 = _closure2_slot4;
case 48:
                    if(!var1) { _fun0008_ip = 50; continue _fun0008 }
case 26:
                    var2 = _closure2_slot2;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onAccessibilityAction'] = var5;
            var1['children'] = var11;
            var1 = var10.bind(var4)(var2, var1);
            _fun0005_ip = 51; continue _fun0005;
case 46:
            var5 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 34;
            var2 = var20[var2];
            var5 = var5.bind(var4)(var2);
            var2 = {};
            var2['style'] = var7;
            var2['channelId'] = var17;
            var2['screenIndex'] = var19;
            var2['isBackEnabled'] = var13;
            var2['children'] = var11;
            var1 = var10.bind(var4)(var5, var2);
case 51:
            return var1;
case 44:
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var12;
            var5 = new Array(2);
            var5[0] = var9;
            var13 = _closure1_slot11;
            var11 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 32;
            var10 = var20[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.CreateThreadView;
            var10 = {};
            var10['channelId'] = var17;
            var10['screenIndex'] = var19;
            var10 = var13.bind(var4)(var11, var10);
            var5[1] = var10;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 42:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 31;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guildId'] = var16;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 40:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var5 = new Array(2);
            var5[0] = var9;
            var13 = _closure1_slot11;
            var11 = _closure1_slot4;
            var10 = {};
            var10['style'] = var12;
            var14 = null;
            if(!var15) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var20 = _closure1_slot11;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 30;
            var15 = var21[var15];
            var19 = var19.bind(var4)(var15);
            var15 = {};
            var15['guildId'] = var16;
            var14 = var20.bind(var4)(var19, var15);
case 52:
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5[1] = var10;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 37:
            var3 = _closure1_slot12;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var5 = new Array(2);
            var5[0] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot4;
            var9 = {};
            var9['style'] = var12;
            var15 = _closure1_slot11;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 28;
            var12 = var19[var12];
            var13 = var14.bind(var4)(var12);
            var12 = {};
            var20 = true;
            var12['absolute'] = var20;
            var13 = var15.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot11;
            var13 = 29;
            var13 = var19[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['guildId'] = var16;
            var16 = undefined;
            if(!var18) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var16 = var17;
case 54:
            var13['gatedChannelId'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5[1] = var9;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 34:
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var6 = var6.containerEmpty;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 26;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = _closure1_slot0;
            var8 = 27;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.EmptyChannelNoTextChannels;
            var5['Illustration'] = var8;
            var8 = 13;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.ai6Lbm;
            var9 = var10.bind(var13)(var9);
            var5['title'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.LTr+x8;
            var8 = var9.bind(var10)(var8);
            var5['body'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();