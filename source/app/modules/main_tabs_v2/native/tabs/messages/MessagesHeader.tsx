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
    var4 = var4.spacing;
    var16 = var4.PX_16;
    var _closure1_slot8 = var16;
    var4 = var7[var11];
    var4 = var13.bind(var1)(var4);
    var4 = var4.spacing;
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
    var15 = var15.spacing;
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
            var13 = var3.scrollPosition;
            var _closure2_slot1 = var13;
            var3 = _closure1_slot10;
            var4 = undefined;
            var9 = var3.bind(var4)();
            var _closure2_slot2 = var9;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 5;
            var5 = var15[var5];
            var7 = var3.bind(var4)(var5);
            var5 = 'MessagesHeader';
            var24 = var7.bind(var4)(var5);
            var7 = _closure1_slot3;
            var8 = var7.useMemo;
            var5 = new Array(2);
            var5[0] = var9;
            var5[1] = var2;
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
            var5 = var8.bind(var7)(var2, var5);
            var2 = 9;
            var2 = var15[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useConfig;
            var2 = {};
            var10 = 'Messages Header';
            var2['location'] = var10;
            var2 = var3.bind(var8)(var2);
            var14 = var2.enabled;
            var20 = var2.changeIcon;
            var8 = _closure1_slot0;
            var11 = 10;
            var2 = var15[var11];
            var10 = var8.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
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
            var12 = {};
            var16 = 11;
            var16 = var15[var16];
            var16 = var8.bind(var4)(var16);
            var16 = var16.withSpring;
            var12['withSpring'] = var16;
            var12['scrollPosition'] = var13;
            var2['__closure'] = var12;
            var12 = 17233409273245.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot11;
            var2['__initData'] = var12;
            var10 = var3.bind(var10)(var2);
            var2 = 12;
            var2 = var15[var2];
            var2 = var8.bind(var4)(var2);
            var12 = var2.MobileHomeDrawerExperiment;
            var3 = var12.useConfig;
            var2 = {};
            var13 = 'messages-header';
            var2['location'] = var13;
            var2 = var3.bind(var12)(var2);
            var13 = var2.enableHome;
            var12 = var7.useCallback;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
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
            var27 = var12.bind(var7)(var3, var2);
            var12 = var7.useCallback;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
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
            var22 = var12.bind(var7)(var3, var2);
            var12 = var7.useCallback;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
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
                    var2 = 14;
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
            var16 = var12.bind(var7)(var3, var2);
            var3 = var7.useCallback;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
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
            var18 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var7 = var9.headerPanelTitle;
            var5['style'] = var7;
            var12 = _closure1_slot6;
            var7 = 15;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'color': 'mobile-text-heading-primary', 'variant': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var15 = 'redesign/heading-18/bold';
            if(!var24) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = 'heading-lg/semibold';
case 11:
            var7['variant'] = var15;
            var21 = _closure1_slot0;
            var15 = _closure1_slot2;
            var23 = 16;
            var17 = var15[var23];
            var17 = var21.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var15 = var15[var23];
            var15 = var21.bind(var4)(var15);
            var15 = var15.t;
            if(var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var13 = var15.OIgYlQ;
            var13 = var17.bind(var19)(var13);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var15 = var15.YUU0RF;
            var13 = var17.bind(var19)(var15);
case 15:
            var7['children'] = var13;
            var8 = var12.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var17 = _closure1_slot6;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 17;
            var8 = var13[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8 = var17.bind(var4)(var12, var8);
            var7[1] = var8;
            var5['children'] = var7;
            var7 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var12 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var15 = var9.headerPanelButtons;
            var7['style'] = var15;
            var15 = _closure1_slot0;
            var21 = 18;
            var13 = var13[var21];
            var13 = var15.bind(var4)(var13);
            var15 = var13.IconButton;
            var13 = {'onPress': null, 'variant': 'secondary', 'size': 'sm'};
            var13['onPress'] = var16;
            var19 = 'sm';
            if(var24) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var16 = 20;
            var16 = var28[var16];
            var16 = var25.bind(var4)(var16);
            var25 = var16.MagnifyingGlassIcon;
            var16 = {};
            var16['size'] = var19;
            var16 = var26.bind(var4)(var25, var16);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var25 = 19;
            var25 = var28[var25];
            var16 = var26.bind(var4)(var25);
case 18:
            var13['icon'] = var16;
            var16 = _closure1_slot0;
            var25 = _closure1_slot2;
            var26 = var25[var23];
            var26 = var16.bind(var4)(var26);
            var29 = var26.intl;
            var28 = var29.string;
            var26 = var25[var23];
            var26 = var16.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26["5h0QOP"];
            var26 = var28.bind(var29)(var26);
            var13['accessibilityLabel'] = var26;
            var15 = var17.bind(var4)(var15, var13);
            var13 = new Array(4);
            var13[0] = var15;
            var17 = _closure1_slot6;
            var26 = _closure1_slot1;
            var15 = 21;
            var15 = var25[var15];
            var26 = var26.bind(var4)(var15);
            var15 = {'noMargin': true, 'onPress': null, 'alternateVariant': true};
            var15['onPress'] = var27;
            var15 = var17.bind(var4)(var26, var15);
            var13[1] = var15;
            var15 = 22;
            var15 = var25[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'variant': 'secondary', 'grow': true, 'size': 'sm', 'icon': null, 'onPress': null, 'maxFontSizeMultiplier': 1};
            if(var24) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var26 = _closure1_slot6;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 24;
            var24 = var27[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.UserPlusIcon;
            var24 = {};
            var24['size'] = var19;
            var24 = var26.bind(var4)(var25, var24);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var26 = _closure1_slot1;
            var27 = _closure1_slot2;
            var25 = 23;
            var25 = var27[var25];
            var24 = var26.bind(var4)(var25);
case 21:
            var15['icon'] = var24;
            var15['onPress'] = var22;
            var26 = _closure1_slot0;
            var22 = _closure1_slot2;
            var24 = var22[var23];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var22[var23];
            var22 = var26.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.zIJnA6;
            var22 = var24.bind(var25)(var22);
            var15['text'] = var22;
            var15 = var17.bind(var4)(var16, var15);
            var13[2] = var15;
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var17 = _closure1_slot6;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var21];
            var15 = var16.bind(var4)(var15);
            var16 = var15.IconButton;
            var15 = {'variant': 'primary', 'icon': null, 'size': 'sm'};
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            if(var20) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var20 = 26;
            var20 = var24[var20];
            var20 = var22.bind(var4)(var20);
            var21 = var20.ChatPlusIcon;
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var20 = 25;
            var20 = var24[var20];
            var20 = var22.bind(var4)(var20);
            var21 = var20.PlusLargeIcon;
case 26:
            var20 = {};
            var20['size'] = var19;
            var24 = _closure1_slot1;
            var19 = _closure1_slot2;
            var22 = 4;
            var22 = var19[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.colors;
            var22 = var22.WHITE;
            var20['color'] = var22;
            var20 = var17.bind(var4)(var21, var20);
            var15['icon'] = var20;
            var22 = _closure1_slot0;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.jD1qzM;
            var19 = var20.bind(var21)(var19);
            var15['accessibilityLabel'] = var19;
            var15['onPress'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 22:
            var13[3] = var14;
            var7['children'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var11 = var9.headerBorder;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 27;
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