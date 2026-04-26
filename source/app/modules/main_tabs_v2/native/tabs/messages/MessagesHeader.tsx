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
            var1 = var2.height;
            var _closure2_slot0 = var1;
            var17 = var2.scrollPosition;
            var _closure2_slot1 = var17;
            var2 = _closure1_slot10;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot2 = var10;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var5 = var2.bind(var4)(var3);
            var3 = 'MessagesHeader';
            var15 = var5.bind(var4)(var3);
            var9 = _closure1_slot3;
            var5 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
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
            var5 = var5.bind(var9)(var1, var3);
            var3 = _closure1_slot0;
            var1 = 9;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useYouBarEnabled;
            var11 = 'Messages Header';
            var3 = var1.bind(var3)(var11);
            var1 = 10;
            var1 = var8[var1];
            var8 = var2.bind(var4)(var1);
            var2 = var8.useConfig;
            var1 = {};
            var9 = 'Messages Header No YouBar Do Not Use';
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var11;
case 2:
            var1['location'] = var9;
            var2 = var2.bind(var8)(var1);
            var1 = var2.enabled;
            var9 = var2.changeIcon;
            var16 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = 11;
            var8 = var2[var12];
            var13 = var16.bind(var4)(var8);
            var11 = var13.useAnimatedStyle;
            var8 = function c() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot1;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    var5 = var5 > var2;
                    if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = 1;
case 4:
                    var2 = var3.bind(var4)(var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var18 = 12;
            var18 = var2[var18];
            var18 = var16.bind(var4)(var18);
            var18 = var18.withSpring;
            var14['withSpring'] = var18;
            var14['scrollPosition'] = var17;
            var8['__closure'] = var14;
            var14 = 17233409273245.0;
            var8['__workletHash'] = var14;
            var14 = _closure1_slot11;
            var8['__initData'] = var14;
            var11 = var11.bind(var13)(var8);
            var8 = 13;
            var8 = var2[var8];
            var8 = var16.bind(var4)(var8);
            var14 = var8.MobileHomeDrawerExperiment;
            var13 = var14.useConfig;
            var8 = {};
            var17 = 'messages-header';
            var8['location'] = var17;
            var8 = var13.bind(var14)(var8);
            var14 = var8.enableHome;
            var17 = _closure1_slot3;
            var18 = var17.useCallback;
            var13 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = var4.navigate;
                    var2 = 'message-requests';
                    var2 = var3.bind(var4)(var2);
case 6:
                    return var1;
                }
            };
            var8 = new Array(0);
            var23 = var18.bind(var17)(var13, var8);
            var18 = var17.useCallback;
            var13 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 8; continue _fun0004 }
case 7:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'add-friends';
                    var3['screen'] = var2;
                    var2 = {'sourcePage': 'Messages Tab', 'presentation': 'card'};
                    var3['params'] = var2;
                    var2 = 'friends';
                    var2 = var4.bind(var5)(var2, var3);
case 8:
                    return var1;
                }
            };
            var8 = new Array(0);
            var20 = var18.bind(var17)(var13, var8);
            var18 = var17.useCallback;
            var13 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var5 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var5)) { _fun0005_ip = 8; continue _fun0005 }
case 7:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.navigateToSearchWithPrefetch;
                    var2 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.DMS;
                    var2['type'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
case 8:
                    return var1;
                }
            };
            var8 = new Array(0);
            var21 = var18.bind(var17)(var13, var8);
            var13 = var17.useCallback;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var4 = null;
                    var2 = var4 == var3;
                    var5 = var3;
                    if(var2) { _fun0006_ip = 9; continue _fun0006 }
case 10:
                    var3 = var3.current;
                    var2 = var4 == var3;
                    var5 = var3;
case 9:
                    if(var2) { _fun0006_ip = 11; continue _fun0006 }
case 12:
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
case 11:
                    return var1;
                }
            };
            var6 = new Array(0);
            var8 = var13.bind(var17)(var8, var6);
            var18 = _closure1_slot1;
            var6 = 16;
            var6 = var2[var6];
            var13 = var18.bind(var4)(var6);
            var6 = 'bespoke';
            var6 = var13.bind(var4)(var6);
            var13 = 17;
            var13 = var2[var13];
            var16 = var16.bind(var4)(var13);
            var13 = var16.useToken;
            var17 = 4;
            var2 = var2[var17];
            var2 = var18.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.HEADER_ICON_BUTTON_VARIANT;
            var18 = var13.bind(var16)(var2);
            var16 = null;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = null;
            if(!var1) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 18;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {'variant': 'primary', 'icon': null, 'size': 'sm'};
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = 20;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var13 = var9.ChatPlusIcon;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var9 = 19;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var13 = var9.PlusLargeIcon;
case 18:
            var9 = {};
            var19 = 'sm';
            var9['size'] = var19;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = var22[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.colors;
            var17 = var17.WHITE;
            var9['color'] = var17;
            var9 = var3.bind(var4)(var13, var9);
            var1['icon'] = var9;
            var19 = _closure1_slot0;
            var9 = 21;
            var13 = var22[var9];
            var13 = var19.bind(var4)(var13);
            var17 = var13.intl;
            var13 = var17.string;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.jD1qzM;
            var9 = var13.bind(var17)(var9);
            var1['accessibilityLabel'] = var9;
            var1['onPress'] = var8;
            var16 = var3.bind(var4)(var2, var1);
case 13:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = {};
            var8 = var10.headerPanelTitle;
            var5['style'] = var8;
            var13 = _closure1_slot6;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 22;
            var8 = var17[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'color': 'mobile-text-heading-primary', 'variant': null, 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
            var17 = 'redesign/heading-18/bold';
            if(!var15) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var17 = 'heading-lg/semibold';
case 19:
            var8['variant'] = var17;
            var25 = _closure1_slot0;
            var17 = _closure1_slot2;
            var24 = 21;
            var19 = var17[var24];
            var19 = var25.bind(var4)(var19);
            var22 = var19.intl;
            var19 = var22.string;
            var17 = var17[var24];
            var17 = var25.bind(var4)(var17);
            var17 = var17.t;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var14 = var17.OIgYlQ;
            var14 = var19.bind(var22)(var14);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var17 = var17.YUU0RF;
            var14 = var19.bind(var22)(var17);
case 23:
            var8['children'] = var14;
            var9 = var13.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var14 = _closure1_slot6;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var9 = 23;
            var9 = var17[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var9 = var14.bind(var4)(var13, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var8 = var3.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var13 = _closure1_slot7;
            var9 = _closure1_slot4;
            var8 = {};
            var14 = var10.headerPanelButtons;
            var8['style'] = var14;
            var17 = var15;
            if(!var17) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = var16;
case 24:
            var14 = new Array(5);
            var14[0] = var17;
            var22 = _closure1_slot6;
            var19 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 18;
            var17 = var25[var17];
            var17 = var19.bind(var4)(var17);
            var19 = var17.IconButton;
            var17 = {};
            var17['onPress'] = var21;
            var17['variant'] = var18;
            var25 = 'sm';
            var17['size'] = var25;
            if(var15) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var26 = _closure1_slot6;
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 25;
            var18 = var27[var18];
            var18 = var21.bind(var4)(var18);
            var21 = var18.MagnifyingGlassIcon;
            var18 = {};
            var18['size'] = var25;
            var18 = var26.bind(var4)(var21, var18);
            _fun0001_ip = 28; continue _fun0001;
case 26:
            var26 = _closure1_slot1;
            var27 = _closure1_slot2;
            var21 = 24;
            var21 = var27[var21];
            var18 = var26.bind(var4)(var21);
case 28:
            var17['icon'] = var18;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var26 = var21[var24];
            var26 = var18.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var21[var24];
            var26 = var18.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26["5h0QOP"];
            var26 = var27.bind(var28)(var26);
            var17['accessibilityLabel'] = var26;
            var17 = var22.bind(var4)(var19, var17);
            var14[1] = var17;
            var19 = _closure1_slot6;
            var22 = _closure1_slot1;
            var17 = 26;
            var17 = var21[var17];
            var22 = var22.bind(var4)(var17);
            var17 = {'noMargin': true, 'onPress': null, 'alternateVariant': true};
            var17['onPress'] = var23;
            var17 = var19.bind(var4)(var22, var17);
            var14[2] = var17;
            var17 = 27;
            var17 = var21[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Button;
            var17 = {'variant': 'secondary', 'grow': true, 'size': 'sm', 'icon': null, 'onPress': null, 'maxFontSizeMultiplier': 1};
            if(var15) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var23 = _closure1_slot6;
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 29;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.UserPlusIcon;
            var21 = {};
            var21['size'] = var25;
            var21 = var23.bind(var4)(var22, var21);
            _fun0001_ip = 31; continue _fun0001;
case 29:
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var22 = 28;
            var22 = var25[var22];
            var21 = var23.bind(var4)(var22);
case 31:
            var17['icon'] = var21;
            var17['onPress'] = var20;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var24];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var24];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.zIJnA6;
            var20 = var21.bind(var22)(var20);
            var17['text'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14[3] = var17;
            var15 = !var15;
            if(!var15) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var16;
case 32:
            var14[4] = var15;
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
    var5 = 30;
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