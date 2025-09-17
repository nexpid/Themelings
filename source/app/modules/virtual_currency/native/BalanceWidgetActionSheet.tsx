// app/modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.TouchableOpacity;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Fonts;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var2 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'minWidth': '100%'};
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var8 = 6;
            var9 = var5[var8];
            var7 = undefined;
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['gap'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['paddingTop'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['paddingHorizontal'] = var9;
            var1['actions'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': null, 'flexWrap': 'wrap'};
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_8;
            var2['gap'] = var5;
            var1['balanceHeader'] = var2;
            var2 = {'color': null, 'fontFamily': 'ABC Ginto Nord', 'fontSize': 36, 'fontWeight': '700', 'lineHeight': 44, 'textAlignVertical': 'center'};
            var5 = var7 !== var4;
            var6 = var4;
            if(var5) { _fun0001_ip = 211; continue _fun0001 }
 183:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.colors;
            var6 = var9.HEADER_PRIMARY;
 211:
            var2['color'] = var6;
            var1['balanceText'] = var2;
            var2 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'flex': 1};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['marginBottom'] = var10;
            var1['content'] = var2;
            var2 = {'width': '100%', 'paddingTop': null, 'paddingBottom': null, 'alignItems': 'center', 'position': 'relative', 'flexDirection': 'column'};
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_12;
            var2['paddingTop'] = var10;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['paddingBottom'] = var10;
            var1['header'] = var2;
            var2 = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var10;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.radii;
            var10 = var10.round;
            var2['borderRadius'] = var10;
            var1['infoIconBackground'] = var2;
            var2 = {'width': '100%', 'position': 'absolute'};
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['left'] = var10;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['top'] = var10;
            var1['infoIconContainer'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'borderRadius': null, 'bottom': 4294967196};
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.radii;
            var10 = var10.xl;
            var2['borderRadius'] = var10;
            var1['promotionalBackground'] = var2;
            var2 = {'flex': 1, 'height': 428};
            var1['promotionalBackgroundContainer'] = var2;
            var2 = {'width': '100%', 'height': '100%'};
            var1['promotionalBannerAsset'] = var2;
            var2 = {'width': '100%', 'height': 144};
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_12;
            var2['gap'] = var10;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_64;
            var2['marginBottom'] = var6;
            var1['promotionalBannerContainer'] = var2;
            var2 = {'color': null, 'fontFamily': null, 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
            if(var5) { _fun0001_ip = 663; continue _fun0001 }
 635:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var4 = var5.HEADER_PRIMARY;
 663:
            var2['color'] = var4;
            var3 = _closure1_slot7;
            var3 = var3.PRIMARY_BOLD;
            var2['fontFamily'] = var3;
            var1['promotionalBannerText'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var30 = var2.balance;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var22 = var2.promoteShopNav;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0002_ip = 36; continue _fun0002 }
 34:
            var22 = true;
 36:
            var25 = var2.promotionConfig;
            if(!(var25 === var4)) { _fun0002_ip = 48; continue _fun0002 }
 46:
            var25 = null;
 48:
            var5 = var2.themeOverride;
            var _closure2_slot1 = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var7 = var6.bind(var4)(var2);
            var3 = var7.useToken;
            var9 = _closure1_slot1;
            var29 = 6;
            var2 = var8[var29];
            var2 = var9.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.HEADER_PRIMARY;
            var3 = var3.bind(var7)(var2, var5);
            var2 = _closure1_slot11;
            var14 = var2.bind(var4)(var3);
            var9 = _closure1_slot3;
            var2 = var9.useRef;
            var20 = null;
            var7 = var2.bind(var9)(var20);
            _closure2_slot1 = var7;
            var3 = var9.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var2 = var8[var1];
                    var1 = undefined;
                    var3 = var7.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var8[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var6 = 9;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var10 = var9.COLLECTIBLES_SHOP;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var2['analyticsLocations'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.COLLECTIBLES_SHOP;
                    var2['analyticsSource'] = var6;
                    var5 = _closure1_slot8;
                    var5 = var5.ORBS;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 151; continue _fun0003 }
 143:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
 151:
                    return var1;
                }
            };
            var23 = var3.bind(var9)(var1, var2);
            var3 = var9.useCallback;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var19 = var3.bind(var9)(var2, var1);
            var3 = var9.useCallback;
            var2 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openQuestHome;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var18 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot9;
            var1 = 11;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var5 = 12;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var5['ref'] = var7;
            var7 = true;
            var5['startExpanded'] = var7;
            var7 = function handleComponent() {
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = {};
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var5['handleComponent'] = var7;
            var7 = false;
            var5['handleDisabled'] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var14.content;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var20 != var25;
            if(!var11) { _fun0002_ip = 338; continue _fun0002 }
 328:
            var12 = var25.backgroundImage;
            var11 = var20 != var12;
 338:
            if(!var11) { _fun0002_ip = 347; continue _fun0002 }
 341:
            var11 = var14.promotionalBackgroundContainer;
 347:
            var10[1] = var11;
            var7['style'] = var10;
            var11 = var20 != var25;
            if(!var11) { _fun0002_ip = 372; continue _fun0002 }
 362:
            var10 = var25.backgroundImage;
            var11 = var20 != var10;
 372:
            if(!var11) { _fun0002_ip = 454; continue _fun0002 }
 375:
            var13 = _closure1_slot9;
            var12 = _closure1_slot6;
            var10 = {};
            var17 = var25.backgroundImage;
            var21 = 'string';
            var17 = typeof var17;
            if(!(var21 !== var17)) { _fun0002_ip = 410; continue _fun0002 }
 402:
            var17 = var25.backgroundImage;
            _fun0002_ip = 425; continue _fun0002;
 410:
            var21 = {};
            var24 = var25.backgroundImage;
            var21['uri'] = var24;
            var17 = var21;
 425:
            var10['source'] = var17;
            var17 = var14.promotionalBackground;
            var10['style'] = var17;
            var17 = 'cover';
            var10['resizeMode'] = var17;
            var11 = var13.bind(var4)(var12, var10);
 454:
            var10 = new Array(6);
            var10[0] = var11;
            var13 = _closure1_slot9;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 13;
            var11 = var21[var11];
            var11 = var24.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 28; continue _fun0004 }
 18:
                    var1 = var2.closeActionSheet;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var15 = var14.infoIconContainer;
            var11['style'] = var15;
            var17 = _closure1_slot5;
            var15 = {};
            var15['onPress'] = var19;
            var19 = 'button';
            var15['accessibilityRole'] = var19;
            var26 = 14;
            var19 = var21[var26];
            var19 = var24.bind(var4)(var19);
            var28 = var19.intl;
            var27 = var28.string;
            var19 = var21[var26];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.B1oJtb;
            var19 = var27.bind(var28)(var19);
            var15['accessibilityLabel'] = var19;
            var19 = {};
            var27 = var14.infoIconBackground;
            var19['style'] = var27;
            var27 = 15;
            var27 = var21[var27];
            var27 = var24.bind(var4)(var27);
            var28 = var27.CircleQuestionIcon;
            var27 = {};
            var31 = 'sm';
            var27['size'] = var31;
            var31 = _closure1_slot1;
            var29 = var21[var29];
            var29 = var31.bind(var4)(var29);
            var29 = var29.colors;
            var29 = var29.INTERACTIVE_NORMAL;
            var27['color'] = var29;
            var27 = var13.bind(var4)(var28, var27);
            var19['children'] = var27;
            var19 = var13.bind(var4)(var12, var19);
            var15['children'] = var19;
            var15 = var13.bind(var4)(var17, var15);
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var11 = {};
            var15 = var14.header;
            var11['style'] = var15;
            var17 = _closure1_slot10;
            var15 = {};
            var19 = var14.balanceHeader;
            var15['style'] = var19;
            var28 = 16;
            var19 = var21[var28];
            var19 = var24.bind(var4)(var19);
            var27 = var19.OrbIcon;
            var19 = {};
            var28 = var21[var28];
            var28 = var24.bind(var4)(var28);
            var28 = var28.OrbIconSize;
            var28 = var28.LARGE;
            var19['size'] = var28;
            var27 = var13.bind(var4)(var27, var19);
            var19 = new Array(2);
            var19[0] = var27;
            var28 = 17;
            var21 = var21[var28];
            var21 = var24.bind(var4)(var21);
            var24 = var21.Text;
            var21 = {};
            var27 = 'heading-xl/medium';
            var21['variant'] = var27;
            var29 = var14.balanceText;
            var21['style'] = var29;
            var31 = var20 != var30;
            var29 = 0;
            if(!var31) { _fun0002_ip = 847; continue _fun0002 }
 844:
            var29 = var30;
 847:
            var21['children'] = var29;
            var21 = var13.bind(var4)(var24, var21);
            var19[1] = var21;
            var15['children'] = var19;
            var15 = var17.bind(var4)(var12, var15);
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var11 = var20 != var25;
            if(!var11) { _fun0002_ip = 902; continue _fun0002 }
 892:
            var12 = var25.bannerImage;
            var11 = var20 != var12;
 902:
            if(!var11) { _fun0002_ip = 1117; continue _fun0002 }
 908:
            var15 = _closure1_slot10;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var14.promotionalBannerContainer;
            var12['style'] = var17;
            var21 = _closure1_slot9;
            var19 = _closure1_slot6;
            var17 = {};
            var24 = var25.bannerImage;
            var29 = 'string';
            var24 = typeof var24;
            if(!(var29 !== var24)) { _fun0002_ip = 963; continue _fun0002 }
 955:
            var24 = var25.bannerImage;
            _fun0002_ip = 978; continue _fun0002;
 963:
            var29 = {};
            var30 = var25.bannerImage;
            var29['uri'] = var30;
            var24 = var29;
 978:
            var17['source'] = var24;
            var24 = var14.promotionalBannerAsset;
            var17['style'] = var24;
            var24 = 'contain';
            var17['resizeMode'] = var24;
            var19 = var21.bind(var4)(var19, var17);
            var17 = new Array(2);
            var17[0] = var19;
            var19 = var25.bannerText;
            var19 = var20 != var19;
            if(!var19) { _fun0002_ip = 1042; continue _fun0002 }
 1028:
            var21 = var25.bannerText;
            var20 = '';
            var19 = var20 !== var21;
 1042:
            if(!var19) { _fun0002_ip = 1103; continue _fun0002 }
 1045:
            var24 = _closure1_slot9;
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var28];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {};
            var20['variant'] = var27;
            var27 = var14.promotionalBannerText;
            var20['style'] = var27;
            var25 = var25.bannerText;
            var20['children'] = var25;
            var19 = var24.bind(var4)(var21, var20);
 1103:
            var17[1] = var19;
            var12['children'] = var17;
            var11 = var15.bind(var4)(var13, var12);
 1117:
            var10[4] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var14.actions;
            var11['style'] = var14;
            var20 = _closure1_slot9;
            var25 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 18;
            var14 = var19[var15];
            var14 = var25.bind(var4)(var14);
            var17 = var14.Button;
            var14 = {};
            var21 = var19[var26];
            var21 = var25.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var19 = var19[var26];
            var19 = var25.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.WrzJBQ;
            var19 = var21.bind(var24)(var19);
            var14['text'] = var19;
            var21 = 'secondary';
            var19 = var21;
            if(!var22) { _fun0002_ip = 1237; continue _fun0002 }
 1233:
            var19 = 'primary';
 1237:
            var14['variant'] = var19;
            var19 = 'lg';
            var14['size'] = var19;
            var14['onPress'] = var23;
            var17 = var20.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = _closure1_slot9;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = var20[var15];
            var15 = var25.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {};
            var23 = var20[var26];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var20 = var20[var26];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.SymzJC;
            var20 = var23.bind(var24)(var20);
            var15['text'] = var20;
            var20 = 'primary';
            if(!var22) { _fun0002_ip = 1356; continue _fun0002 }
 1353:
            var20 = var21;
 1356:
            var15['variant'] = var20;
            var15['size'] = var19;
            var15['onPress'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[5] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();