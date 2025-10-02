// app/modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var11;
    var8 = function GenericHeaderTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.title;
            var _closure2_slot0 = var3;
            var10 = var2.subtitle;
            var3 = var2.color;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'header-primary';
case 2:
            var _closure2_slot1 = var3;
            var12 = var2.subtitleColor;
            if(!(var12 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = 'header-secondary';
case 4:
            var3 = var2.icon;
            var _closure2_slot2 = var3;
            var2 = var2.variant;
            if(!(var2 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 'heading-md/bold';
case 6:
            var _closure2_slot3 = var2;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot8;
            var11 = var2.bind(var4)();
            _closure2_slot4 = var11;
            var3 = function renderTitle(arg1) {
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var5 = arg1;
                var1['accessibilityRole'] = var5;
                var5 = 1;
                var1['lineClamp'] = var5;
                var5 = _closure2_slot3;
                var1['variant'] = var5;
                var5 = _closure2_slot1;
                var1['color'] = var5;
                var5 = _closure2_slot4;
                var5 = var5.headerText;
                var1['style'] = var5;
                var7 = _closure2_slot2;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = _closure2_slot0;
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = null;
            if(!(var1 != var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {'accessible': true, 'accessibilityRole': 'header'};
            var8 = var3.bind(var4)();
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 6;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'lineClamp': 1, 'variant': 'text-xs/medium'};
            var7['color'] = var12;
            var11 = var11.subtitleText;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var1['children'] = var6;
            var1 = var5.bind(var4)(var2, var1);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = 'header';
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot10 = var8;
    var7 = function renderGenericTitle(arg1) {
        var1 = arg1;
        var1 = var1.children;
        var4 = _closure1_slot7;
        var3 = _closure1_slot10;
        var2 = {};
        var2['title'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var7;
    var6 = function HeaderTextButton(arg1) {
        var3 = arg1;
        var7 = var3.labelStyle;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['labelStyle'] = var1;
        var11 = {};
        var10 = var3;
        var9 = var2;
        var10 = copyDataProperties(var11, var10, var9);
        var2 = _closure1_slot8;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 7;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.HeaderBackButton;
        var1 = {};
        var8 = var6.backButtonLabel;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['labelStyle'] = var6;
        var6 = true;
        var1['labelVisible'] = var6;
        var6 = function backImage() {
            var1 = null;
            return var1;
        };
        var1['backImage'] = var6;
        var11 = var1;
        var5 = copyDataProperties(var11, var10);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var6;
    var5 = function getRenderBackImage(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.PressableNavigatorBackIcon;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var6 = _closure2_slot0;
            var5 = 'navigation';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        return var1;
    };
    var _closure1_slot13 = var5;
    var1 = function HeaderChannelActions(arg1) {
        var1 = arg1;
        var5 = var1.route;
        var6 = var1.screenIndex;
        var2 = _closure1_slot8;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 16;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = var7.headerRightContainer;
        var1['containerStyle'] = var7;
        var9 = var5.params;
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var5 = 'screenIndex';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var4);
    var1 = 0;
    var9 = var11[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var14 = var4.bind(var1)(var9);
    var _closure1_slot3 = var14;
    var4 = 1;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.MIN_HEADER_HEIGHT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var9 = var4.jsxs;
    var _closure1_slot6 = var9;
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var11[var4];
    var13 = var10.bind(var1)(var4);
    var12 = var13.createStyles;
    var4 = {};
    var9 = {};
    var15 = 16;
    var9['marginRight'] = var15;
    var4['headerRightContainer'] = var9;
    var9 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 1, 'borderColor': null, 'borderBottomWidth': 1};
    var16 = 5;
    var15 = var11[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var15;
    var18 = 'center';
    var15 = var11[var16];
    var15 = var17.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var15;
    var4['headerWrapper'] = var9;
    var9 = 20;
    var15 = {'padding': 8, 'zIndex': 100, 'width': 40, 'height': 40, 'borderRadius': 20};
    var4['actionButtonPressable'] = var15;
    var15 = {};
    var19 = var11[var16];
    var19 = var17.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.INTERACTIVE_NORMAL;
    var15['tintColor'] = var19;
    var4['actionButtonIcon'] = var15;
    var15 = {'textAlign': 'center', 'fontSize': 18};
    var4['headerText'] = var15;
    var15 = {};
    var15['textAlign'] = var18;
    var4['subtitleText'] = var15;
    var15 = {};
    var18 = 6;
    var18 = var11[var18];
    var18 = var10.bind(var1)(var18);
    var18 = var18.TextStyleSheet;
    var21 = var18.text-md/semibold;
    var22 = var15;
    var18 = copyDataProperties(var22, var21);
    var16 = var11[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.colors;
    var17 = var16.TEXT_BRAND;
    var16 = 'color';
    var15[var16] = var17;
    var4['backButtonLabel'] = var15;
    var4 = var12.bind(var13)(var4);
    var _closure1_slot8 = var4;
    var13 = var14.memo;
    var12 = function HeaderInner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.navigation;
            var13 = var1.options;
            var17 = var1.back;
            var14 = var1.route;
            var6 = var1.shouldHandleSafeArea;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = true;
case 11:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot8;
            var3 = var3.bind(var4)();
            _closure2_slot0 = var3;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 11;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = var5.top;
            var16 = 0;
            if(!var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var16 = var5;
case 13:
            _closure2_slot1 = var16;
            var7 = var13.headerLeft;
            if(!(var4 === var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = _closure1_slot13;
            var7 = var5.bind(var4)(var12);
case 15:
            var11 = var13.headerTitle;
            var8 = var13.headerRight;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var9 = var6.bind(var4)(var5);
            var5 = var9.useTheme;
            var5 = var5.bind(var9)();
            var5 = var5.colors;
            var9 = var5.text;
            var5 = 13;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.useGradientTop;
            var15 = var5.bind(var6)();
            _closure2_slot2 = var15;
            var10 = _closure1_slot3;
            var6 = var10.useMemo;
            var5 = new Array(3);
            var5[0] = var16;
            var5[1] = var15;
            var5[2] = var3;
            var3 = function() {
                var1 = _closure2_slot0;
                var2 = var1.headerWrapper;
                var1 = new Array(3);
                var1[0] = var2;
                var2 = _closure2_slot2;
                var1[1] = var2;
                var2 = {};
                var4 = _closure2_slot1;
                var2['paddingTop'] = var4;
                var4 = _closure2_slot1;
                var3 = _closure1_slot5;
                var3 = var4 + var3;
                var2['minHeight'] = var3;
                var1[2] = var2;
                return var1;
            };
            var5 = var6.bind(var10)(var3, var5);
            var6 = 'string';
            var3 = typeof var11;
            var15 = var6 === var3;
            if(var15) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = null;
            var10 = var11;
            if(!(var3 == var11)) { _fun0002_ip = 19; continue _fun0002 }
case 17:
            var10 = _closure1_slot11;
case 19:
            var6 = _closure1_slot3;
            var3 = var6.useLayoutEffect;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.DeprecatedLayoutAnimation;
                var1 = {};
                var4 = 0;
                var1['duration'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var6 = null;
            var18 = var6 == var17;
            var16 = undefined;
            if(var18) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var16 = var17.title;
case 20:
            var5['label'] = var16;
            var16 = var12.isFocused;
            var16 = var16.bind(var12)();
            if(!var16) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var17 = var12.canGoBack;
            var16 = var17.bind(var12)();
case 22:
            var5['canGoBack'] = var16;
            var5['tintColor'] = var9;
            var7 = var7.bind(var4)(var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = {};
            if(var15) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var13 = var13.title;
            if(!(var6 == var13)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var13 = var14.name;
case 26:
            var11 = var13;
case 24:
            var7['children'] = var11;
            var7['tintColor'] = var9;
            var7 = var10.bind(var4)(var7);
            var5[1] = var7;
            var7 = var6 == var8;
            var6 = undefined;
            if(var7) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var7 = {};
            var10 = var12.isFocused;
            var10 = var10.bind(var12)();
            if(!var10) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = var12.canGoBack;
            var10 = var11.bind(var12)();
case 30:
            var7['canGoBack'] = var10;
            var7['tintColor'] = var9;
            var6 = var8.bind(var4)(var7);
case 28:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 15;
            var1 = var1[var7];
            var5 = undefined;
            var6 = var6.bind(var5)(var1);
            var1 = ['back'];
            var1 = var6.bind(var5)(var3, var2, var1);
            var6 = !var1;
            var1 = !var6;
            if(var6) { _fun0003_ip = 32; continue _fun0003 }
case 4:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var3 = var3.back;
            var6 = null;
            if(!(var6 == var3)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var3 = {};
case 33:
            var2 = var2.back;
            if(!(var6 == var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var2 = {};
case 35:
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var4 = var13.bind(var14)(var12, var4);
    var _closure1_slot9 = var4;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/main_tabs_v2/native/shared_components/HeaderShared.tsx';
    var9 = var10.bind(var11)(var9);
    var3['GenericHeaderTitle'] = var8;
    var3['renderGenericTitle'] = var7;
    var3['HeaderTextButton'] = var6;
    var6 = function getRenderHeaderTextButton(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            var4 = _closure1_slot7;
            var3 = _closure1_slot12;
            var2 = {};
            var5 = _closure2_slot0;
            var2['label'] = var5;
            var1 = _closure2_slot1;
            var2['onPress'] = var1;
            var6 = arg1;
            var7 = var2;
            var1 = copyDataProperties(var7, var6);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        return var1;
    };
    var3['getRenderHeaderTextButton'] = var6;
    var6 = function renderHeader(arg1) {
        var4 = _closure1_slot7;
        var3 = _closure1_slot9;
        var2 = {};
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['renderHeader'] = var6;
    var3['getRenderBackImage'] = var5;
    var5 = function getRenderModalBackImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = function() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['navigation'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            return var2;
case 37:
            return var1;
        }
    };
    var3['getRenderModalBackImage'] = var5;
    var5 = function getRenderModalCloseImage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var2 = function() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['navigation'] = var5;
                var5 = 'close';
                var1['type'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            return var2;
case 37:
            return var1;
        }
    };
    var3['getRenderModalCloseImage'] = var5;
    var3['Header'] = var4;
    var4 = function getDefaultStackHeaderProps(arg1) {
        var1 = {};
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = arg1;
        var3 = var5.bind(var4)(var3);
        var1['headerLeft'] = var3;
        var2 = _closure1_slot11;
        var1['headerTitle'] = var2;
        var2 = false;
        var1['headerBackVisible'] = var2;
        return var1;
    };
    var3['getDefaultStackHeaderProps'] = var4;
    var4 = function getDefaultChannelStackHeaderProps(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = var1.name;
            var6 = 'none';
            var3 = 'channel';
            var1 = var6;
            if(!(var3 === var4)) { _fun0006_ip = 6; continue _fun0006 }
case 39:
            var3 = var5.getState;
            var3 = var3.bind(var5)();
            var7 = var3.routes;
            var4 = var7.findIndex;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.key;
                var1 = _closure2_slot0;
                var1 = var1.key;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var7)(var3);
            var4 = null;
            var4 = var4 != var3;
            var1 = var6;
            if(!var4) { _fun0006_ip = 6; continue _fun0006 }
case 40:
            var1 = var3;
case 6:
            var _closure2_slot1 = var1;
            var1 = {};
            var4 = _closure1_slot13;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var1['headerLeft'] = var3;
            var3 = function headerTitle() {
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot0;
                var8 = var6.params;
                var9 = var1;
                var6 = copyDataProperties(var9, var8);
                var7 = true;
                var6 = 'isNavigationScreen';
                var1[var6] = var7;
                var6 = _closure2_slot1;
                var5 = 'screenIndex';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['headerTitle'] = var3;
            var2 = function headerRight() {
                var4 = _closure1_slot7;
                var3 = _closure1_slot14;
                var2 = {};
                var5 = _closure2_slot0;
                var2['route'] = var5;
                var1 = _closure2_slot1;
                var2['screenIndex'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['headerRight'] = var2;
            var2 = false;
            var1['headerBackVisible'] = var2;
            return var1;
        }
    };
    var3['getDefaultChannelStackHeaderProps'] = var4;
    var2 = function HeaderIconButton(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var7 = var1.accessibilityLabel;
            var6 = var1.onPress;
            var9 = var1.source;
            var8 = var1.resizeMode;
            var10 = var1.color;
            var1 = _closure1_slot8;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 18;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var1['accessibilityLabel'] = var7;
            var7 = var11.actionButtonPressable;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot7;
            var6 = _closure1_slot1;
            var5 = 19;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var12 = null;
            if(!(var12 == var10)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var11 = var11.actionButtonIcon;
            var10 = var11.tintColor;
case 41:
            var5['color'] = var10;
            var5['source'] = var9;
            var5['resizeMode'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HeaderIconButton'] = var2;
    return var1;
})();