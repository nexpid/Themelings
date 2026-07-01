// app/modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var12 = 1;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var14 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot6 = var5;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var7[var11];
    var4 = var13.bind(var1)(var4);
    var4 = var4.space;
    var16 = var4.PX_16;
    var _closure1_slot8 = var16;
    var4 = var7[var11];
    var4 = var13.bind(var1)(var4);
    var4 = var4.space;
    var15 = var4.PX_8;
    var _closure1_slot9 = var15;
    var4 = 8;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var17 = 'relative';
    var10['position'] = var17;
    var10['padding'] = var16;
    var16 = var7[var11];
    var16 = var13.bind(var1)(var16);
    var16 = var16.modules;
    var16 = var16.mobile;
    var16 = var16.MESSAGES_HEADER_PADDING_BOTTOM;
    var10['paddingBottom'] = var16;
    var4['headerPanel'] = var10;
    var10 = {};
    var10['paddingBottom'] = var15;
    var15 = 'row';
    var10['flexDirection'] = var15;
    var15 = var7[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_8;
    var10['gap'] = var15;
    var15 = 'space-between';
    var10['justifyContent'] = var15;
    var4['headerPanelTitle'] = var10;
    var10 = {};
    var15 = 7;
    var15 = var7[var15];
    var15 = var6.bind(var1)(var15);
    var15 = var15.SMALL_BUTTON_HEIGHT;
    var10['height'] = var15;
    var15 = var7[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.modules;
    var15 = var15.mobile;
    var15 = var15.MESSAGES_HEADER_BUTTON_GAP;
    var10['gap'] = var15;
    var15 = var7[var11];
    var15 = var13.bind(var1)(var15);
    var15 = var15.modules;
    var15 = var15.mobile;
    var15 = var15.MESSAGES_HEADER_BUTTON_LAYOUT;
    var10['flexDirection'] = var15;
    var15 = 'center';
    var10['alignItems'] = var15;
    var4['headerPanelButtons'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var14 = copyDataProperties(var20, var19);
    var11 = var7[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var13 = var11.BORDER_SUBTLE;
    var11 = 'backgroundColor';
    var10[10] = var13;
    var11 = 'top';
    var10[10] = var1;
    var11 = 'height';
    var10[10] = var12;
    var4['headerBorder'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}';
    var4['code'] = var5;
    var _closure1_slot11 = var4;
    var5 = var8.memo;
    var4 = function MessagesHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.height;
            var _closure2_slot0 = var2;
            var11 = var3.scrollPosition;
            var _closure2_slot1 = var11;
            var3 = _closure1_slot10;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var _closure2_slot2 = var10;
            var20 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 5;
            var3 = var17[var3];
            var5 = var20.bind(var4)(var3);
            var3 = 'MessagesHeader';
            var21 = var5.bind(var4)(var3);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var2;
            var2 = function() {
                var1 = _closure2_slot2;
                var2 = var1.headerPanel;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = _closure2_slot0;
                var2['height'] = var3;
                var1[1] = var2;
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            var14 = _closure1_slot0;
            var12 = 9;
            var2 = var17[var12];
            var7 = var14.bind(var4)(var2);
            var3 = var7.useAnimatedStyle;
            var2 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    var5 = var5 > var2;
                    if(!var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = 1;
case 2:
                    var2 = var3.bind(var4)(var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var13 = 10;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.withSpring;
            var9['withSpring'] = var13;
            var9['scrollPosition'] = var11;
            var2['__closure'] = var9;
            var9 = 17233409273245.0;
            var2['__workletHash'] = var9;
            var9 = _closure1_slot11;
            var2['__initData'] = var9;
            var11 = var3.bind(var7)(var2);
            var2 = 11;
            var2 = var17[var2];
            var2 = var14.bind(var4)(var2);
            var7 = var2.MobileHomeDrawerExperiment;
            var3 = var7.useConfig;
            var2 = {};
            var9 = 'messages-header';
            var2['location'] = var9;
            var2 = var3.bind(var7)(var2);
            var15 = var2.enableHome;
            var7 = var6.useCallback;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = var4.navigate;
                    var2 = 'message-requests';
                    var2 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var2 = new Array(0);
            var25 = var7.bind(var6)(var3, var2);
            var7 = var6.useCallback;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 6; continue _fun0004 }
case 5:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'add-friends';
                    var3['screen'] = var2;
                    var2 = {'sourcePage': 'Messages Tab', 'presentation': 'card'};
                    var3['params'] = var2;
                    var2 = 'friends';
                    var2 = var4.bind(var5)(var2, var3);
case 6:
                    return var1;
                }
            };
            var2 = new Array(0);
            var7 = var7.bind(var6)(var3, var2);
            var9 = var6.useCallback;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0005_ip = 6; continue _fun0005 }
case 5:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.navigateToSearchWithPrefetch;
                    var2 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.DMS;
                    var2['type'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
case 6:
                    return var1;
                }
            };
            var2 = new Array(0);
            var18 = var9.bind(var6)(var3, var2);
            var3 = var6.useCallback;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var4 = null;
                    var2 = var4 == var3;
                    var5 = var3;
                    if(var2) { _fun0006_ip = 7; continue _fun0006 }
case 8:
                    var3 = var3.current;
                    var2 = var4 == var3;
                    var5 = var3;
case 7:
                    if(var2) { _fun0006_ip = 9; continue _fun0006 }
case 10:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'new-message';
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = 'Messages Header';
                    var2['sourcePage'] = var6;
                    var3['params'] = var2;
                    var2 = 'friends';
                    var2 = var4.bind(var5)(var2, var3);
case 9:
                    return var1;
                }
            };
            var1 = new Array(0);
            var3 = var3.bind(var6)(var2, var1);
            var1 = 14;
            var1 = var17[var1];
            var2 = var20.bind(var4)(var1);
            var1 = 'bespoke';
            var6 = var2.bind(var4)(var1);
            var9 = _closure1_slot6;
            var22 = 15;
            var1 = var17[var22];
            var1 = var14.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {'variant': 'primary', 'icon': null, 'size': 'sm'};
            var13 = 16;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var16 = var13.PlusLargeIcon;
            var13 = {};
            var24 = 'sm';
            var13['size'] = var24;
            var19 = 4;
            var19 = var17[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.colors;
            var19 = var19.WHITE;
            var13['color'] = var19;
            var13 = var9.bind(var4)(var16, var13);
            var1['icon'] = var13;
            var20 = 17;
            var13 = var17[var20];
            var13 = var14.bind(var4)(var13);
            var19 = var13.intl;
            var16 = var19.string;
            var13 = var17[var20];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.jD1qzM;
            var13 = var16.bind(var19)(var13);
            var1['accessibilityLabel'] = var13;
            var1['onPress'] = var3;
            var16 = var9.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var13 = var10.headerPanelTitle;
            var5['style'] = var13;
            var13 = 18;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'color': 'mobile-text-heading-primary', 'variant': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var17 = 'redesign/heading-18/bold';
            if(!var21) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var17 = 'heading-lg/semibold';
case 11:
            var13['variant'] = var17;
            var26 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var20];
            var19 = var26.bind(var4)(var19);
            var23 = var19.intl;
            var19 = var23.string;
            var17 = var17[var20];
            var17 = var26.bind(var4)(var17);
            var17 = var17.t;
            if(var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var15 = var17.OIgYlQ;
            var15 = var19.bind(var23)(var15);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var17 = var17.YUU0RF;
            var15 = var19.bind(var23)(var17);
case 15:
            var13['children'] = var15;
            var13 = var9.bind(var4)(var14, var13);
            var5['children'] = var13;
            var9 = var9.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var14 = _closure1_slot7;
            var13 = _closure1_slot4;
            var9 = {};
            var15 = var10.headerPanelButtons;
            var9['style'] = var15;
            var19 = _closure1_slot6;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var22];
            var15 = var17.bind(var4)(var15);
            var17 = var15.IconButton;
            var15 = {'onPress': null, 'variant': 'secondary', 'size': 'sm'};
            var15['onPress'] = var18;
            if(var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var23 = _closure1_slot6;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 20;
            var18 = var26[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.MagnifyingGlassIcon;
            var18 = {};
            var18['size'] = var24;
            var18 = var23.bind(var4)(var22, var18);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 19;
            var22 = var26[var22];
            var18 = var23.bind(var4)(var22);
case 18:
            var15['icon'] = var18;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var20];
            var23 = var18.bind(var4)(var23);
            var27 = var23.intl;
            var26 = var27.string;
            var23 = var22[var20];
            var23 = var18.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23["5h0QOP"];
            var23 = var26.bind(var27)(var23);
            var15['accessibilityLabel'] = var23;
            var17 = var19.bind(var4)(var17, var15);
            var15 = new Array(4);
            var15[0] = var17;
            var19 = _closure1_slot6;
            var23 = _closure1_slot1;
            var17 = 21;
            var17 = var22[var17];
            var23 = var23.bind(var4)(var17);
            var17 = {'noMargin': true, 'onPress': null, 'alternateVariant': true};
            var17['onPress'] = var25;
            var17 = var19.bind(var4)(var23, var17);
            var15[1] = var17;
            var17 = 22;
            var17 = var22[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Button;
            var17 = {'variant': 'secondary', 'grow': true, 'shrink': true, 'size': 'sm', 'icon': null, 'onPress': null, 'maxFontSizeMultiplier': 1};
            if(var21) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var23 = _closure1_slot6;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 24;
            var21 = var25[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.UserPlusIcon;
            var21 = {};
            var21['size'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 23;
            var22 = var24[var22];
            var21 = var23.bind(var4)(var22);
case 21:
            var17['icon'] = var21;
            var17['onPress'] = var7;
            var23 = _closure1_slot0;
            var7 = _closure1_slot2;
            var21 = var7[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var7[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.zIJnA6;
            var20 = var21.bind(var22)(var20);
            var17['text'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var15[2] = var17;
            var15[3] = var16;
            var9['children'] = var15;
            var9 = var14.bind(var4)(var13, var9);
            var5[1] = var9;
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.View;
            var7 = {};
            var12 = var10.headerBorder;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function getMessagesHeaderHeight(arg1, arg2) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.min;
        var2 = arg1;
        var1 = 1.75;
        var9 = var3.bind(var4)(var2, var1);
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var2 = var7[var2];
        var5 = undefined;
        var8 = var6.bind(var5)(var2);
        var4 = var8.resolveRefreshToken;
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var7[var2];
        var2 = var3.bind(var5)(var2);
        var2 = var2.modules;
        var2 = var2.mobile;
        var3 = var2.MESSAGES_HEADER_PADDING_BOTTOM;
        var2 = arg2;
        var2 = var4.bind(var8)(var3, var2);
        var3 = 6;
        var3 = var7[var3];
        var8 = var6.bind(var5)(var3);
        var4 = var8.scaleTextLineHeight;
        var3 = 'redesign/heading-18/bold';
        var4 = var4.bind(var8)(var3, var9);
        var3 = _closure1_slot9;
        var4 = var4 + var3;
        var3 = 7;
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.SMALL_BUTTON_HEIGHT;
        var3 = var4 + var3;
        var1 = _closure1_slot8;
        var1 = var3 + var1;
        var1 = var1 + var2;
        return var1;
    };
    var3['getMessagesHeaderHeight'] = var2;
    return var1;
})();