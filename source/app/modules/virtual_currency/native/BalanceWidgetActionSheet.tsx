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
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var4 = arg1;
        var1 = {};
        var2 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'minWidth': '100%'};
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 8;
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
        var2 = {'color': null, 'fontFamily': null, 'fontWeight': '600', 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
        var2['color'] = var4;
        var3 = _closure1_slot6;
        var3 = var3.PRIMARY_BOLD;
        var2['fontFamily'] = var3;
        var1['promotionalBannerText'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var28 = var1.balance;
            var3 = var1.useDefaultPromotionConfig;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var3 = true;
 27:
            var24 = var1.promotionConfig;
            if(!(var24 === var4)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var24 = null;
 41:
            var2 = var1.themeOverride;
            var21 = var1.primaryButtonConfig;
            var18 = var1.secondaryButtonConfig;
            var _closure2_slot0 = var4;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 7;
            var1 = var5[var6];
            var10 = var7.bind(var4)(var1);
            var9 = var10.useToken;
            var8 = _closure1_slot1;
            var29 = 8;
            var1 = var5[var29];
            var1 = var8.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.HEADER_PRIMARY;
            var1 = var9.bind(var10)(var1, var2);
            var6 = var5[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.useToken;
            var5 = var5[var29];
            var5 = var8.bind(var4)(var5);
            var5 = var5.colors;
            var5 = var5.HEADER_PRIMARY;
            var5 = var6.bind(var7)(var5);
            if(!(var4 !== var1)) { _fun0001_ip = 174; continue _fun0001 }
 171:
            var5 = var1;
 174:
            var1 = _closure1_slot10;
            var15 = var1.bind(var4)(var5);
            var9 = _closure1_slot3;
            var1 = var9.useRef;
            var20 = null;
            var7 = var1.bind(var9)(var20);
            _closure2_slot0 = var7;
            var8 = var9.useCallback;
            var6 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure1_slot7;
                var2 = var2.PAID_TERMS_ORBS;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var19 = var8.bind(var9)(var6, var1);
            var1 = var20 == var24;
            var26 = var5;
            if(!var1) { _fun0001_ip = 238; continue _fun0001 }
 235:
            var1 = var3;
 238:
            if(!var1) { _fun0001_ip = 385; continue _fun0001 }
 244:
            var1 = var20 != var28;
            var3 = 0;
            if(!var1) { _fun0001_ip = 256; continue _fun0001 }
 253:
            var3 = var28;
 256:
            var1 = 4100;
            var3 = var3 > var1;
            var1 = null;
            if(!var3) { _fun0001_ip = 382; continue _fun0001 }
 271:
            var3 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.default;
            var3['backgroundImage'] = var5;
            var5 = 5;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.default;
            var3['bannerImage'] = var5;
            var5 = 6;
            var6 = var10[var5];
            var6 = var9.bind(var4)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.LaMEFB;
            var5 = var6.bind(var8)(var5);
            var3['bannerText'] = var5;
            var1 = var3;
 382:
            var24 = var1;
 385:
            var1 = var4 === var2;
            if(!var1) { _fun0001_ip = 396; continue _fun0001 }
 392:
            var1 = var20 != var24;
 396:
            var5 = var2;
            if(!var1) { _fun0001_ip = 406; continue _fun0001 }
 402:
            var5 = 'dark';
 406:
            var3 = _closure1_slot8;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var5 = 11;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var5['ref'] = var7;
            var7 = true;
            var5['startExpanded'] = var7;
            var7 = function handleComponent() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = {};
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var5['handleComponent'] = var7;
            var7 = false;
            var5['handleDisabled'] = var7;
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var15.content;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var20 != var24;
            if(!var11) { _fun0001_ip = 533; continue _fun0001 }
 523:
            var12 = var24.backgroundImage;
            var11 = var20 != var12;
 533:
            if(!var11) { _fun0001_ip = 542; continue _fun0001 }
 536:
            var11 = var15.promotionalBackgroundContainer;
 542:
            var10[1] = var11;
            var7['style'] = var10;
            var11 = var20 != var24;
            if(!var11) { _fun0001_ip = 567; continue _fun0001 }
 557:
            var10 = var24.backgroundImage;
            var11 = var20 != var10;
 567:
            if(!var11) { _fun0001_ip = 665; continue _fun0001 }
 570:
            var13 = _closure1_slot8;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 12;
            var10 = var17[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var17 = var24.backgroundImage;
            var22 = 'string';
            var17 = typeof var17;
            if(!(var22 !== var17)) { _fun0001_ip = 621; continue _fun0001 }
 613:
            var17 = var24.backgroundImage;
            _fun0001_ip = 636; continue _fun0001;
 621:
            var22 = {};
            var23 = var24.backgroundImage;
            var22['uri'] = var23;
            var17 = var22;
 636:
            var10['source'] = var17;
            var17 = var15.promotionalBackground;
            var10['style'] = var17;
            var17 = 'cover';
            var10['resizeMode'] = var17;
            var11 = var13.bind(var4)(var12, var10);
 665:
            var10 = new Array(6);
            var10[0] = var11;
            var13 = _closure1_slot8;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 13;
            var11 = var22[var11];
            var11 = var23.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var16 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 28; continue _fun0002 }
 18:
                    var1 = var2.closeActionSheet;
                    var1 = var1.bind(var2)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var16 = var15.infoIconContainer;
            var11['style'] = var16;
            var17 = _closure1_slot5;
            var16 = {};
            var16['onPress'] = var19;
            var19 = 'button';
            var16['accessibilityRole'] = var19;
            var19 = 6;
            var25 = var22[var19];
            var25 = var23.bind(var4)(var25);
            var27 = var25.intl;
            var25 = var27.string;
            var19 = var22[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.B1oJtb;
            var19 = var25.bind(var27)(var19);
            var16['accessibilityLabel'] = var19;
            var19 = {};
            var25 = var15.infoIconBackground;
            var19['style'] = var25;
            var25 = 14;
            var25 = var22[var25];
            var25 = var23.bind(var4)(var25);
            var27 = var25.CircleQuestionIcon;
            var25 = {};
            var30 = 'sm';
            var25['size'] = var30;
            var30 = _closure1_slot1;
            var29 = var22[var29];
            var29 = var30.bind(var4)(var29);
            var29 = var29.colors;
            var29 = var29.INTERACTIVE_NORMAL;
            var25['color'] = var29;
            var25 = var13.bind(var4)(var27, var25);
            var19['children'] = var25;
            var19 = var13.bind(var4)(var12, var19);
            var16['children'] = var19;
            var16 = var13.bind(var4)(var17, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var11 = {};
            var16 = var15.header;
            var11['style'] = var16;
            var17 = _closure1_slot9;
            var16 = {};
            var19 = var15.balanceHeader;
            var16['style'] = var19;
            var19 = 15;
            var19 = var22[var19];
            var19 = var23.bind(var4)(var19);
            var25 = var19.OrbsIcon;
            var19 = {};
            var27 = 'lg';
            var19['size'] = var27;
            var19['color'] = var26;
            var25 = var13.bind(var4)(var25, var19);
            var19 = new Array(2);
            var19[0] = var25;
            var26 = 16;
            var22 = var22[var26];
            var22 = var23.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {};
            var25 = 'heading-xl/medium';
            var22['variant'] = var25;
            var27 = var15.balanceText;
            var22['style'] = var27;
            var29 = var20 != var28;
            var27 = 0;
            if(!var29) { _fun0001_ip = 1045; continue _fun0001 }
 1042:
            var27 = var28;
 1045:
            var22['children'] = var27;
            var22 = var13.bind(var4)(var23, var22);
            var19[1] = var22;
            var16['children'] = var19;
            var16 = var17.bind(var4)(var12, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var11 = var20 != var24;
            if(!var11) { _fun0001_ip = 1100; continue _fun0001 }
 1090:
            var12 = var24.bannerImage;
            var11 = var20 != var12;
 1100:
            if(!var11) { _fun0001_ip = 1331; continue _fun0001 }
 1106:
            var16 = _closure1_slot9;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var15.promotionalBannerContainer;
            var12['style'] = var17;
            var22 = _closure1_slot8;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 12;
            var17 = var23[var17];
            var19 = var19.bind(var4)(var17);
            var17 = {};
            var23 = var24.bannerImage;
            var27 = 'string';
            var23 = typeof var23;
            if(!(var27 !== var23)) { _fun0001_ip = 1177; continue _fun0001 }
 1169:
            var23 = var24.bannerImage;
            _fun0001_ip = 1192; continue _fun0001;
 1177:
            var27 = {};
            var28 = var24.bannerImage;
            var27['uri'] = var28;
            var23 = var27;
 1192:
            var17['source'] = var23;
            var23 = var15.promotionalBannerAsset;
            var17['style'] = var23;
            var23 = 'contain';
            var17['resizeMode'] = var23;
            var19 = var22.bind(var4)(var19, var17);
            var17 = new Array(2);
            var17[0] = var19;
            var19 = var24.bannerText;
            var19 = var20 != var19;
            if(!var19) { _fun0001_ip = 1256; continue _fun0001 }
 1242:
            var22 = var24.bannerText;
            var20 = '';
            var19 = var20 !== var22;
 1256:
            if(!var19) { _fun0001_ip = 1317; continue _fun0001 }
 1259:
            var23 = _closure1_slot8;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var26];
            var20 = var22.bind(var4)(var20);
            var22 = var20.Text;
            var20 = {};
            var20['variant'] = var25;
            var25 = var15.promotionalBannerText;
            var20['style'] = var25;
            var24 = var24.bannerText;
            var20['children'] = var24;
            var19 = var23.bind(var4)(var22, var20);
 1317:
            var17[1] = var19;
            var12['children'] = var17;
            var11 = var16.bind(var4)(var13, var12);
 1331:
            var10[4] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot4;
            var11 = {};
            var15 = var15.actions;
            var11['style'] = var15;
            var17 = _closure1_slot8;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 17;
            var14 = var19[var15];
            var14 = var16.bind(var4)(var14);
            var20 = var14.Button;
            var14 = {'text': null, 'variant': 'primary', 'size': 'lg'};
            var22 = var21.buttonText;
            var14['text'] = var22;
            var21 = var21.onButtonPress;
            var14['onPress'] = var21;
            var20 = var17.bind(var4)(var20, var14);
            var14 = new Array(2);
            var14[0] = var20;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'text': null, 'variant': 'secondary', 'size': 'lg'};
            var19 = var18.buttonText;
            var15['text'] = var19;
            var18 = var18.onButtonPress;
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