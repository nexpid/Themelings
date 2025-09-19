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
    var4 = var4.TouchableOpacity;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Fonts;
    var _closure1_slot6 = var7;
    var4 = var4.MarketingURLs;
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
    var4 = 22;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var4 = arg1;
        var1 = {};
        var2 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'minWidth': '100%'};
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 6;
        var9 = var8[var5];
        var6 = undefined;
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var2['gap'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var2['paddingTop'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['paddingHorizontal'] = var9;
        var1['actions'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': null, 'flexWrap': 'wrap'};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['gap'] = var9;
        var1['balanceHeader'] = var2;
        var2 = {'color': null, 'fontFamily': 'ABC Ginto Nord', 'fontSize': 36, 'fontWeight': '700', 'lineHeight': 44, 'textAlignVertical': 'center'};
        var2['color'] = var4;
        var1['balanceText'] = var2;
        var2 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'flex': 1};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['marginBottom'] = var9;
        var1['content'] = var2;
        var2 = {'width': '100%', 'paddingTop': null, 'paddingBottom': null, 'alignItems': 'center', 'position': 'relative', 'flexDirection': 'column'};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var2['paddingTop'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['paddingBottom'] = var9;
        var1['header'] = var2;
        var2 = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.colors;
        var9 = var9.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
        var2['backgroundColor'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.radii;
        var9 = var9.round;
        var2['borderRadius'] = var9;
        var1['infoIconBackground'] = var2;
        var2 = {};
        var9 = 'absolute';
        var2['position'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['left'] = var9;
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var2['top'] = var9;
        var9 = 10;
        var2['zIndex'] = var9;
        var1['infoIconContainer'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'borderRadius': null, 'bottom': 4294967196};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.radii;
        var9 = var9.xl;
        var2['borderRadius'] = var9;
        var1['promotionalBackground'] = var2;
        var2 = {'flex': 1, 'height': 428};
        var1['promotionalBackgroundContainer'] = var2;
        var2 = {'width': '100%', 'height': '100%'};
        var1['promotionalBannerAsset'] = var2;
        var2 = {'width': '100%', 'height': 144};
        var9 = var8[var5];
        var9 = var7.bind(var6)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var2['gap'] = var9;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.spacing;
        var5 = var5.PX_64;
        var2['marginBottom'] = var5;
        var1['promotionalBannerContainer'] = var2;
        var2 = {'color': null, 'fontFamily': null, 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
        var2['color'] = var4;
        var3 = _closure1_slot6;
        var3 = var3.PRIMARY_BOLD;
        var2['fontFamily'] = var3;
        var1['promotionalBannerText'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var31 = var2.balance;
            var1 = var2.onPress;
            var _closure2_slot0 = var1;
            var22 = var2.promoteShopNav;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 36; continue _fun0001 }
 34:
            var22 = true;
 36:
            var27 = var2.promotionConfig;
            if(!(var27 === var4)) { _fun0001_ip = 48; continue _fun0001 }
 46:
            var27 = null;
 48:
            var5 = var2.themeOverride;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 5;
            var2 = var3[var6];
            var10 = var7.bind(var4)(var2);
            var9 = var10.useToken;
            var8 = _closure1_slot1;
            var30 = 6;
            var2 = var3[var30];
            var2 = var8.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.HEADER_PRIMARY;
            var2 = var9.bind(var10)(var2, var5);
            var6 = var3[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useToken;
            var3 = var3[var30];
            var3 = var8.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.HEADER_PRIMARY;
            var12 = var6.bind(var7)(var3);
            if(!(var4 !== var2)) { _fun0001_ip = 167; continue _fun0001 }
 164:
            var12 = var2;
 167:
            var2 = _closure1_slot11;
            var14 = var2.bind(var4)(var12);
            var6 = _closure1_slot3;
            var2 = var6.useRef;
            var21 = null;
            var7 = var2.bind(var6)(var21);
            _closure2_slot1 = var7;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                    if(!(var3 != var4)) { _fun0002_ip = 151; continue _fun0002 }
 143:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
 151:
                    return var1;
                }
            };
            var23 = var3.bind(var6)(var1, var2);
            var3 = var6.useCallback;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure1_slot7;
                var2 = var2.PAID_TERMS_ORBS;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var19 = var3.bind(var6)(var2, var1);
            var3 = var6.useCallback;
            var2 = function() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var6 = _closure1_slot0;
                var2 = 11;
                var2 = var7[var2];
                var4 = var6.bind(var1)(var2);
                var3 = var4.openQuestHome;
                var2 = {};
                var5 = 12;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.MOBILE_ORBS_INTRO_QUEST_ID;
                var2['scrollToQuestId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var18 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var5 = 14;
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
            var11 = var21 != var27;
            var29 = var12;
            if(!var11) { _fun0001_ip = 396; continue _fun0001 }
 386:
            var12 = var27.backgroundImage;
            var11 = var21 != var12;
 396:
            if(!var11) { _fun0001_ip = 405; continue _fun0001 }
 399:
            var11 = var14.promotionalBackgroundContainer;
 405:
            var10[1] = var11;
            var7['style'] = var10;
            var11 = var21 != var27;
            if(!var11) { _fun0001_ip = 430; continue _fun0001 }
 420:
            var10 = var27.backgroundImage;
            var11 = var21 != var10;
 430:
            if(!var11) { _fun0001_ip = 528; continue _fun0001 }
 433:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 15;
            var10 = var17[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var17 = var27.backgroundImage;
            var20 = 'string';
            var17 = typeof var17;
            if(!(var20 !== var17)) { _fun0001_ip = 484; continue _fun0001 }
 476:
            var17 = var27.backgroundImage;
            _fun0001_ip = 499; continue _fun0001;
 484:
            var20 = {};
            var24 = var27.backgroundImage;
            var20['uri'] = var24;
            var17 = var20;
 499:
            var10['source'] = var17;
            var17 = var14.promotionalBackground;
            var10['style'] = var17;
            var17 = 'cover';
            var10['resizeMode'] = var17;
            var11 = var13.bind(var4)(var12, var10);
 528:
            var10 = new Array(6);
            var10[0] = var11;
            var13 = _closure1_slot9;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var11 = 16;
            var11 = var24[var11];
            var11 = var25.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var15 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 28; continue _fun0003 }
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
            var26 = 17;
            var19 = var24[var26];
            var19 = var25.bind(var4)(var19);
            var28 = var19.intl;
            var20 = var28.string;
            var19 = var24[var26];
            var19 = var25.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.B1oJtb;
            var19 = var20.bind(var28)(var19);
            var15['accessibilityLabel'] = var19;
            var19 = {};
            var20 = var14.infoIconBackground;
            var19['style'] = var20;
            var20 = 18;
            var20 = var24[var20];
            var20 = var25.bind(var4)(var20);
            var28 = var20.CircleQuestionIcon;
            var20 = {};
            var32 = 'sm';
            var20['size'] = var32;
            var32 = _closure1_slot1;
            var30 = var24[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.colors;
            var30 = var30.INTERACTIVE_NORMAL;
            var20['color'] = var30;
            var20 = var13.bind(var4)(var28, var20);
            var19['children'] = var20;
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
            var19 = 19;
            var19 = var24[var19];
            var19 = var25.bind(var4)(var19);
            var28 = var19.OrbsIcon;
            var20 = {};
            var19 = 'lg';
            var20['size'] = var19;
            var20['color'] = var29;
            var28 = var13.bind(var4)(var28, var20);
            var20 = new Array(2);
            var20[0] = var28;
            var29 = 20;
            var24 = var24[var29];
            var24 = var25.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {};
            var28 = 'heading-xl/medium';
            var24['variant'] = var28;
            var30 = var14.balanceText;
            var24['style'] = var30;
            var32 = var21 != var31;
            var30 = 0;
            if(!var32) { _fun0001_ip = 908; continue _fun0001 }
 905:
            var30 = var31;
 908:
            var24['children'] = var30;
            var24 = var13.bind(var4)(var25, var24);
            var20[1] = var24;
            var15['children'] = var20;
            var15 = var17.bind(var4)(var12, var15);
            var11['children'] = var15;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var11 = var21 != var27;
            if(!var11) { _fun0001_ip = 963; continue _fun0001 }
 953:
            var12 = var27.bannerImage;
            var11 = var21 != var12;
 963:
            if(!var11) { _fun0001_ip = 1194; continue _fun0001 }
 969:
            var15 = _closure1_slot10;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var14.promotionalBannerContainer;
            var12['style'] = var17;
            var24 = _closure1_slot9;
            var20 = _closure1_slot1;
            var25 = _closure1_slot2;
            var17 = 15;
            var17 = var25[var17];
            var20 = var20.bind(var4)(var17);
            var17 = {};
            var25 = var27.bannerImage;
            var30 = 'string';
            var25 = typeof var25;
            if(!(var30 !== var25)) { _fun0001_ip = 1040; continue _fun0001 }
 1032:
            var25 = var27.bannerImage;
            _fun0001_ip = 1055; continue _fun0001;
 1040:
            var30 = {};
            var31 = var27.bannerImage;
            var30['uri'] = var31;
            var25 = var30;
 1055:
            var17['source'] = var25;
            var25 = var14.promotionalBannerAsset;
            var17['style'] = var25;
            var25 = 'contain';
            var17['resizeMode'] = var25;
            var20 = var24.bind(var4)(var20, var17);
            var17 = new Array(2);
            var17[0] = var20;
            var20 = var27.bannerText;
            var20 = var21 != var20;
            if(!var20) { _fun0001_ip = 1119; continue _fun0001 }
 1105:
            var24 = var27.bannerText;
            var21 = '';
            var20 = var21 !== var24;
 1119:
            if(!var20) { _fun0001_ip = 1180; continue _fun0001 }
 1122:
            var25 = _closure1_slot9;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var29];
            var21 = var24.bind(var4)(var21);
            var24 = var21.Text;
            var21 = {};
            var21['variant'] = var28;
            var28 = var14.promotionalBannerText;
            var21['style'] = var28;
            var27 = var27.bannerText;
            var21['children'] = var27;
            var20 = var25.bind(var4)(var24, var21);
 1180:
            var17[1] = var20;
            var12['children'] = var17;
            var11 = var15.bind(var4)(var13, var12);
 1194:
            var10[4] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var14.actions;
            var11['style'] = var14;
            var20 = _closure1_slot9;
            var27 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 21;
            var14 = var21[var15];
            var14 = var27.bind(var4)(var14);
            var17 = var14.Button;
            var14 = {};
            var24 = var21[var26];
            var24 = var27.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var21[var26];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.WrzJBQ;
            var21 = var24.bind(var25)(var21);
            var14['text'] = var21;
            var21 = 'secondary';
            var24 = var21;
            if(!var22) { _fun0001_ip = 1314; continue _fun0001 }
 1310:
            var24 = 'primary';
 1314:
            var14['variant'] = var24;
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
            if(!var22) { _fun0001_ip = 1429; continue _fun0001 }
 1426:
            var20 = var21;
 1429:
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