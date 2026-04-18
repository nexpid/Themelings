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
            var2 = arg1;
            var3 = var2.height;
            var _closure2_slot0 = var3;
            var14 = var2.scrollPosition;
            var _closure2_slot1 = var14;
            var2 = _closure1_slot10;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot2 = var10;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 5;
            var5 = var16[var5];
            var6 = var2.bind(var4)(var5);
            var5 = 'MessagesHeader';
            var25 = var6.bind(var4)(var5);
            var8 = _closure1_slot3;
            var6 = var8.useMemo;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var3;
            var3 = function() {
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
            var5 = var6.bind(var8)(var3, var5);
            var3 = 9;
            var3 = var16[var3];
            var9 = var2.bind(var4)(var3);
            var6 = var9.useConfig;
            var3 = {};
            var11 = 'Messages Header';
            var3['location'] = var11;
            var3 = var6.bind(var9)(var3);
            var15 = var3.enabled;
            var21 = var3.changeIcon;
            var9 = _closure1_slot0;
            var12 = 10;
            var3 = var16[var12];
            var11 = var9.bind(var4)(var3);
            var6 = var11.useAnimatedStyle;
            var3 = function c() {
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
            var13 = {};
            var17 = 11;
            var17 = var16[var17];
            var17 = var9.bind(var4)(var17);
            var17 = var17.withSpring;
            var13['withSpring'] = var17;
            var13['scrollPosition'] = var14;
            var3['__closure'] = var13;
            var13 = 17233409273245.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot11;
            var3['__initData'] = var13;
            var11 = var6.bind(var11)(var3);
            var3 = 12;
            var3 = var16[var3];
            var3 = var9.bind(var4)(var3);
            var13 = var3.MobileHomeDrawerExperiment;
            var6 = var13.useConfig;
            var3 = {};
            var14 = 'messages-header';
            var3['location'] = var14;
            var3 = var6.bind(var13)(var3);
            var14 = var3.enableHome;
            var13 = var8.useCallback;
            var6 = function() {
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
            var3 = new Array(0);
            var28 = var13.bind(var8)(var6, var3);
            var13 = var8.useCallback;
            var6 = function() {
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
            var3 = new Array(0);
            var23 = var13.bind(var8)(var6, var3);
            var13 = var8.useCallback;
            var6 = function() {
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
            var3 = new Array(0);
            var17 = var13.bind(var8)(var6, var3);
            var6 = var8.useCallback;
            var3 = function() {
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
            var19 = var6.bind(var8)(var3, var1);
            var1 = 15;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'bespoke';
            var6 = var2.bind(var4)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var8 = var10.headerPanelTitle;
            var5['style'] = var8;
            var13 = _closure1_slot6;
            var8 = 16;
            var8 = var16[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'color': 'mobile-text-heading-primary', 'variant': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var16 = 'redesign/heading-18/bold';
            if(!var25) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var16 = 'heading-lg/semibold';
case 11:
            var8['variant'] = var16;
            var22 = _closure1_slot0;
            var16 = _closure1_slot2;
            var24 = 17;
            var18 = var16[var24];
            var18 = var22.bind(var4)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var16 = var16[var24];
            var16 = var22.bind(var4)(var16);
            var16 = var16.t;
            if(var14) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = var16.OIgYlQ;
            var14 = var18.bind(var20)(var14);
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var16 = var16.YUU0RF;
            var14 = var18.bind(var20)(var16);
case 15:
            var8['children'] = var14;
            var9 = var13.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var18 = _closure1_slot6;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 18;
            var9 = var14[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var9 = var18.bind(var4)(var13, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var8 = var3.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot7;
            var9 = _closure1_slot4;
            var8 = {};
            var16 = var10.headerPanelButtons;
            var8['style'] = var16;
            var16 = _closure1_slot0;
            var22 = 19;
            var14 = var14[var22];
            var14 = var16.bind(var4)(var14);
            var16 = var14.IconButton;
            var14 = {'onPress': null, 'variant': 'secondary', 'size': 'sm'};
            var14['onPress'] = var17;
            var20 = 'sm';
            if(var25) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var29 = _closure1_slot2;
            var17 = 21;
            var17 = var29[var17];
            var17 = var26.bind(var4)(var17);
            var26 = var17.MagnifyingGlassIcon;
            var17 = {};
            var17['size'] = var20;
            var17 = var27.bind(var4)(var26, var17);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var27 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 20;
            var26 = var29[var26];
            var17 = var27.bind(var4)(var26);
case 18:
            var14['icon'] = var17;
            var17 = _closure1_slot0;
            var26 = _closure1_slot2;
            var27 = var26[var24];
            var27 = var17.bind(var4)(var27);
            var30 = var27.intl;
            var29 = var30.string;
            var27 = var26[var24];
            var27 = var17.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27["5h0QOP"];
            var27 = var29.bind(var30)(var27);
            var14['accessibilityLabel'] = var27;
            var16 = var18.bind(var4)(var16, var14);
            var14 = new Array(4);
            var14[0] = var16;
            var18 = _closure1_slot6;
            var27 = _closure1_slot1;
            var16 = 22;
            var16 = var26[var16];
            var27 = var27.bind(var4)(var16);
            var16 = {'noMargin': true, 'onPress': null, 'alternateVariant': true};
            var16['onPress'] = var28;
            var16 = var18.bind(var4)(var27, var16);
            var14[1] = var16;
            var16 = 23;
            var16 = var26[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Button;
            var16 = {'variant': 'secondary', 'grow': true, 'size': 'sm', 'icon': null, 'onPress': null, 'maxFontSizeMultiplier': 1};
            if(var25) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = 25;
            var25 = var28[var25];
            var25 = var26.bind(var4)(var25);
            var26 = var25.UserPlusIcon;
            var25 = {};
            var25['size'] = var20;
            var25 = var27.bind(var4)(var26, var25);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var26 = 24;
            var26 = var28[var26];
            var25 = var27.bind(var4)(var26);
case 21:
            var16['icon'] = var25;
            var16['onPress'] = var23;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var25 = var23[var24];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var23 = var23[var24];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.zIJnA6;
            var23 = var25.bind(var26)(var23);
            var16['text'] = var23;
            var16 = var18.bind(var4)(var17, var16);
            var14[2] = var16;
            if(!var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = _closure1_slot6;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var22];
            var16 = var17.bind(var4)(var16);
            var17 = var16.IconButton;
            var16 = {'variant': 'primary', 'icon': null, 'size': 'sm'};
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            if(var21) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var21 = 27;
            var21 = var25[var21];
            var21 = var23.bind(var4)(var21);
            var22 = var21.ChatPlusIcon;
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var21 = 26;
            var21 = var25[var21];
            var21 = var23.bind(var4)(var21);
            var22 = var21.PlusLargeIcon;
case 26:
            var21 = {};
            var21['size'] = var20;
            var25 = _closure1_slot1;
            var20 = _closure1_slot2;
            var23 = 4;
            var23 = var20[var23];
            var23 = var25.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.WHITE;
            var21['color'] = var23;
            var21 = var18.bind(var4)(var22, var21);
            var16['icon'] = var21;
            var23 = _closure1_slot0;
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.jD1qzM;
            var20 = var21.bind(var22)(var20);
            var16['accessibilityLabel'] = var20;
            var16['onPress'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 22:
            var14[3] = var15;
            var8['children'] = var14;
            var8 = var13.bind(var4)(var9, var8);
            var5[1] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
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
    var5 = 28;
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