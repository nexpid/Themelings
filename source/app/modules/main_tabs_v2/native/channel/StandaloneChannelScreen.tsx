// app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function Header(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var19 = var2.channelId;
            var _closure2_slot0 = var19;
            var18 = var2.screenIndex;
            var1 = var2.guildId;
            var _closure2_slot1 = var1;
            var24 = var2.isNavigationScreen;
            var _closure2_slot2 = var24;
            var6 = var2.frame;
            var _closure2_slot3 = var6;
            var5 = var2.isMIDNIGHTTheme;
            var _closure2_slot4 = var5;
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
            var20 = var3.bind(var4)();
            var _closure2_slot6 = var20;
            var8 = _closure1_slot1;
            var3 = 9;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var21 = var3.top;
            var _closure2_slot7 = var21;
            var3 = 10;
            var3 = var13[var3];
            var9 = var11.bind(var4)(var3);
            var3 = var9.useIsForumChannelSearchActive;
            var14 = var3.bind(var9)(var19);
            var3 = 11;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var17 = var3.isChatLockedOpen;
            var3 = 12;
            var3 = var13[var3];
            var8 = var11.bind(var4)(var3);
            var3 = var8.useGradientTop;
            var3 = var3.bind(var8)();
            var _closure2_slot8 = var3;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var12 = var20.headerWrapper;
            var8 = new Array(7);
            var8[0] = var12;
            var12 = var20.headerWithFadingFrame;
            var8[1] = var12;
            var12 = var20.headerWithFadingFrameMidnight;
            var8[2] = var12;
            var8[3] = var3;
            var8[4] = var6;
            var8[5] = var5;
            var8[6] = var21;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot6;
                    var2 = var1.headerWrapper;
                    var1 = new Array(5);
                    var1[0] = var2;
                    var2 = _closure2_slot8;
                    var1[1] = var2;
                    var2 = _closure2_slot3;
                    var3 = null;
                    var5 = var3 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 54; continue _fun0002 }
 44:
                    var5 = _closure2_slot6;
                    var2 = var5.headerWithFadingFrame;
 54:
                    var1[2] = var2;
                    var2 = _closure2_slot3;
                    var5 = var3 != var2;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 90; continue _fun0002 }
 71:
                    var5 = _closure2_slot4;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 90; continue _fun0002 }
 80:
                    var5 = _closure2_slot6;
                    var2 = var5.headerWithFadingFrameMidnight;
 90:
                    var1[3] = var2;
                    var2 = _closure2_slot3;
                    if(!(var3 == var2)) { _fun0002_ip = 131; continue _fun0002 }
 102:
                    var2 = {};
                    var5 = _closure2_slot7;
                    var2['paddingTop'] = var5;
                    var3 = _closure1_slot6;
                    var3 = var5 + var3;
                    var2['minHeight'] = var3;
                    _fun0002_ip = 156; continue _fun0002;
 131:
                    var3 = {};
                    var4 = _closure2_slot7;
                    var3['marginTop'] = var4;
                    var4 = _closure1_slot6;
                    var3['minHeight'] = var4;
                    var2 = var3;
 156:
                    var1[4] = var2;
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var3, var8);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var24;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
 10:
                    var2 = _closure2_slot5;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var2, var3);
            var _closure2_slot9 = var12;
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 31; continue _fun0004 }
 16:
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot8;
                    var1 = var3 !== var2;
 31:
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var2 = {};
            var3 = 13;
            var3 = var13[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.ServerIcon;
            var2['IconComponent'] = var3;
            var3 = 14;
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
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.navigateToRootTab;
                var2 = {};
                var5 = 'guilds';
                var2['screen'] = var5;
                var6 = _closure2_slot1;
                var2['guildId'] = var6;
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var5 = false;
                var2['resetRoot'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['action'] = var3;
            var8 = new Array(1);
            var8[0] = var2;
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var1) { _fun0001_ip = 494; continue _fun0001 }
 462:
            var1 = 17;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.PressableNavigatorBackIcon;
            var1 = {};
            var1['onPress'] = var12;
            var16 = var3.bind(var4)(var11, var1);
            _fun0001_ip = 548; continue _fun0001;
 494:
            var1 = 16;
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
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.PressableNavigatorBackIcon;
                var1 = {};
                var1['ref'] = var6;
                var9 = var1;
                var5 = copyDataProperties(var9, var8);
                var6 = _closure2_slot9;
                var5 = 'onPress';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['children'] = var7;
            var16 = var3.bind(var4)(var2, var1);
 548:
            var3 = _closure1_slot12;
            var2 = _closure1_slot13;
            var1 = {};
            var8 = null;
            var9 = var8 != var6;
            var7 = null;
            if(!var9) { _fun0001_ip = 626; continue _fun0001 }
 569:
            var7 = null;
            if(!var5) { _fun0001_ip = 626; continue _fun0001 }
 574:
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var5 = {};
            var12 = var20.midnightFrameCover;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var13 = _closure1_slot5;
            var13 = var21 + var13;
            var12['height'] = var13;
            var11[1] = var12;
            var5['style'] = var11;
            var7 = var9.bind(var4)(var8, var5);
 626:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot4;
            var7 = {};
            var7['style'] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var20.headerBottomBorder;
            var10['style'] = var13;
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 18;
            var11 = var21[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.LayerScope;
            var11 = {};
            if(!var17) { _fun0001_ip = 720; continue _fun0001 }
 717:
            if(!var24) { _fun0001_ip = 723; continue _fun0001 }
 720:
            if(!var14) { _fun0001_ip = 749; continue _fun0001 }
 723:
            var21 = _closure1_slot11;
            var17 = _closure1_slot4;
            var14 = {};
            var22 = var20.spacer;
            var14['style'] = var22;
            var16 = var21.bind(var4)(var17, var14);
 749:
            var14 = new Array(3);
            var14[0] = var16;
            var23 = _closure1_slot11;
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var17 = 19;
            var17 = var21[var17];
            var22 = var16.bind(var4)(var17);
            var17 = {};
            var17['channelId'] = var19;
            var17['isNavigationScreen'] = var24;
            var17['screenIndex'] = var18;
            var17 = var23.bind(var4)(var22, var17);
            var14[1] = var17;
            var17 = _closure1_slot11;
            var15 = 20;
            var15 = var21[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var20 = var20.actions;
            var15['containerStyle'] = var20;
            var15['channelId'] = var19;
            var15['screenIndex'] = var18;
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
    var4 = native4;
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
 0:
            var1 = arg1;
            var16 = var1.guildId;
            var17 = var1.channelId;
            var11 = var1.isNavigationScreen;
            var13 = var1.frame;
            var _closure2_slot0 = var13;
            var2 = var1.showCreateThread;
            var19 = var1.screenIndex;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot14;
            var6 = var1.bind(var4)();
            var _closure2_slot1 = var6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 21;
            var1 = var9[var1];
            var5 = var7.bind(var4)(var1);
            var1 = var5.useIsSwipeToMemberListEnabled;
            var1 = var1.bind(var5)();
            var10 = _closure1_slot1;
            var5 = 22;
            var5 = var9[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.bind(var4)(var17);
            var18 = var5.needSubscriptionToAccess;
            var5 = 23;
            var5 = var9[var5];
            var9 = var7.bind(var4)(var5);
            var7 = var9.useCanSeeOnboardingHome;
            var14 = null;
            var5 = var16;
            if(!(var14 == var5)) { _fun0005_ip = 152; continue _fun0005 }
 148:
            var5 = _closure1_slot7;
 152:
            var15 = var7.bind(var9)(var5);
            var7 = _closure1_slot3;
            var5 = var7.useRef;
            var24 = var5.bind(var7)(var14);
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 24;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.bind(var4)();
            var5 = _closure1_slot9;
            var5 = var5.MIDNIGHT;
            var10 = var7 === var5;
            _closure2_slot2 = var10;
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var7 = new Array(4);
            var7[0] = var13;
            var7[1] = var10;
            var5 = var6.container;
            var7[2] = var5;
            var5 = var6.midnightContainerBorder;
            var7[3] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.container;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(!var4) { _fun0006_ip = 54; continue _fun0006 }
 35:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    if(!var4) { _fun0006_ip = 54; continue _fun0006 }
 44:
                    var3 = _closure2_slot1;
                    var2 = var3.midnightContainerBorder;
 54:
                    var1[1] = var2;
                    return var1;
                }
            };
            var7 = var9.bind(var12)(var5, var7);
            var12 = _closure1_slot3;
            var9 = var12.useMemo;
            var5 = new Array(4);
            var5[0] = var13;
            var5[1] = var10;
            var20 = var6.contentContainer;
            var5[2] = var20;
            var20 = var6.midnightContentContainerBorder;
            var5[3] = var20;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.contentContainer;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var4 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = undefined;
                    if(!var4) { _fun0007_ip = 55; continue _fun0007 }
 36:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    if(!var4) { _fun0007_ip = 55; continue _fun0007 }
 45:
                    var3 = _closure2_slot1;
                    var2 = var3.midnightContentContainerBorder;
 55:
                    var1[1] = var2;
                    return var1;
                }
            };
            var12 = var9.bind(var12)(var3, var5);
            if(!(var14 != var17)) { _fun0005_ip = 944; continue _fun0005 }
 327:
            if(!(var14 != var16)) { _fun0005_ip = 944; continue _fun0005 }
 334:
            var9 = _closure1_slot11;
            var5 = _closure1_slot15;
            var3 = {};
            var3['channelId'] = var17;
            var3['frame'] = var13;
            var3['guildId'] = var16;
            var3['isNavigationScreen'] = var11;
            var3['screenIndex'] = var19;
            var3['isMIDNIGHTTheme'] = var10;
            var9 = var9.bind(var4)(var5, var3);
            var3 = _closure1_slot10;
            var3 = var3.ROLE_SUBSCRIPTIONS;
            if(!(var17 !== var3)) { _fun0005_ip = 790; continue _fun0005 }
 395:
            if(var18) { _fun0005_ip = 790; continue _fun0005 }
 401:
            var3 = _closure1_slot10;
            var3 = var3.GUILD_HOME;
            if(!(var17 !== var3)) { _fun0005_ip = 687; continue _fun0005 }
 418:
            var3 = _closure1_slot12;
            if(var2) { _fun0005_ip = 606; continue _fun0005 }
 428:
            var5 = _closure1_slot13;
            var2 = {};
            var10 = new Array(2);
            var10[0] = var9;
            var20 = _closure1_slot11;
            var13 = _closure1_slot4;
            var11 = {};
            var11['style'] = var12;
            var23 = _closure1_slot11;
            var22 = _closure1_slot1;
            var25 = _closure1_slot2;
            var21 = 31;
            var21 = var25[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['guildId'] = var16;
            var21['channelId'] = var17;
            var21['chatInputRef'] = var24;
            var21['screenIndex'] = var19;
            var21 = var23.bind(var4)(var22, var21);
            var11['children'] = var21;
            var11 = var20.bind(var4)(var13, var11);
            var10[1] = var11;
            var2['children'] = var10;
            var11 = var3.bind(var4)(var5, var2);
            var10 = _closure1_slot11;
            if(var1) { _fun0005_ip = 559; continue _fun0005 }
 537:
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var1['children'] = var11;
            var1 = var10.bind(var4)(var2, var1);
            _fun0005_ip = 604; continue _fun0005;
 559:
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 32;
            var2 = var13[var2];
            var5 = var5.bind(var4)(var2);
            var2 = {};
            var2['style'] = var7;
            var2['channelId'] = var17;
            var2['screenIndex'] = var19;
            var2['children'] = var11;
            var1 = var10.bind(var4)(var5, var2);
 604:
            return var1;
 606:
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var12;
            var5 = new Array(2);
            var5[0] = var9;
            var13 = _closure1_slot11;
            var11 = _closure1_slot0;
            var20 = _closure1_slot2;
            var10 = 30;
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
 687:
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
            if(!var15) { _fun0005_ip = 764; continue _fun0005 }
 728:
            var20 = _closure1_slot11;
            var19 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 29;
            var15 = var21[var15];
            var19 = var19.bind(var4)(var15);
            var15 = {};
            var15['guildId'] = var16;
            var14 = var20.bind(var4)(var19, var15);
 764:
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5[1] = var10;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 790:
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
            var12 = 27;
            var12 = var19[var12];
            var13 = var14.bind(var4)(var12);
            var12 = {};
            var20 = true;
            var12['absolute'] = var20;
            var13 = var15.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot11;
            var13 = 28;
            var13 = var19[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['guildId'] = var16;
            var16 = undefined;
            if(!var18) { _fun0005_ip = 903; continue _fun0005 }
 900:
            var16 = var17;
 903:
            var13['gatedChannelId'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5[1] = var9;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 944:
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
            var5 = 25;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = _closure1_slot0;
            var8 = 26;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.EmptyChannelNoTextChannels;
            var5['Illustration'] = var8;
            var8 = 14;
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
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();