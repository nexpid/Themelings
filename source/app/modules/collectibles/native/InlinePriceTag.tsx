// app/modules/collectibles/native/InlinePriceTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot7 = var7;
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['priceTag'] = var10;
    var10 = {'textDecorationLine': 'line-through', 'textDecorationStyle': 'solid', 'opacity': 0.7};
    var7['strikedPrice'] = var10;
    var10 = {};
    var7['regularPrice'] = var10;
    var10 = {'width': 20, 'height': 20, 'marginLeft': 8, 'marginRight': 4};
    var7['nitroIcon'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['container'] = var10;
    var10 = {};
    var12 = 'underline';
    var10['textDecorationLine'] = var12;
    var7['underline'] = var10;
    var10 = {};
    var12 = -2;
    var10['marginBottom'] = var12;
    var7['subscribeNowPressable'] = var10;
    var10 = {};
    var10['paddingBottom'] = var11;
    var7['androidTextPadding'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var7 = function PriceTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.priceFormatted;
            var10 = var1.style;
            var8 = var1.color;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 25:
            var8 = 'interactive-active';
 31:
            var7 = var1.icon;
            var11 = var1.variant;
            if(!(var11 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 45:
            var11 = 'text-md/medium';
 49:
            var5 = var1.accessibilityLabel;
            var2 = _closure1_slot10;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var11;
            var11 = var9.priceTag;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var1['style'] = var9;
            var1['color'] = var8;
            var1['accessibilityLabel'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = {};
            var2 = {'backgroundColor': 'rgba(46, 204, 113, 0.25)', 'flexDirection': 'row', 'flexShrink': 1, 'borderRadius': null, 'paddingHorizontal': 6, 'marginLeft': 6};
            var7 = 1;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 17;
            var6 = var5[var3];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var6 = var6.radii;
            var6 = var6.xs;
            var6 = var6 - var7;
            var2['borderRadius'] = var6;
            var7 = _closure1_slot0;
            var6 = 16;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isAndroid;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0002_ip = 97; continue _fun0002 }
 95:
            var5 = 0;
 97:
            var2['paddingTop'] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var3 = undefined;
            if(!var4) { _fun0002_ip = 136; continue _fun0002 }
 133:
            var3 = 2;
 136:
            var2['paddingBottom'] = var3;
            var1['discount'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function BundleDiscountV2(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.product;
            var3 = var1.eligibleForPremiumDiscount;
            var1 = _closure1_slot12;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getProductDiscount;
            var1 = var1.bind(var2)(var4, var3);
            var10 = var1.discountPercentage;
            var1 = 0;
            var2 = var10 <= var1;
            var1 = null;
            if(var2) { _fun0003_ip = 182; continue _fun0003 }
 77:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.discount;
            var2['style'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/normal', 'color': 'text-positive'};
            var9 = ['-'];
            var9[1] = var10;
            var10 = '%';
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 182:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/InlinePriceTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InlinePriceTag(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var18 = var1.product;
            var2 = _closure1_slot10;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var _closure2_slot0 = var22;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCurrentUser;
            var8 = var2.bind(var6)();
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var7 = var6.bind(var4)(var2);
            var2 = var7.canUseCollectibles;
            var17 = var2.bind(var7)(var8);
            var2 = 9;
            var2 = var5[var2];
            var6 = var6.bind(var4)(var2);
            var2 = _closure1_slot6;
            var2 = var2.SHOP_PRODUCT_DETAILS;
            var15 = var6.bind(var4)(var2);
            var7 = 10;
            var2 = var5[var7];
            var9 = var3.bind(var4)(var2);
            var8 = var9.getFormattedPriceForCollectiblesProduct;
            var2 = false;
            var6 = true;
            var19 = var8.bind(var9)(var18, var2, var6);
            var2 = 11;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            if(!var2) { _fun0004_ip = 195; continue _fun0004 }
 186:
            var2 = null;
            if(!(var2 != var19)) { _fun0004_ip = 954; continue _fun0004 }
 195:
            var2 = null;
            if(!(var2 != var19)) { _fun0004_ip = 952; continue _fun0004 }
 204:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var5 = var5.bind(var4)(var3);
            var3 = var5.getFormattedPriceForCollectiblesProduct;
            var20 = var3.bind(var5)(var18, var6, var6);
            var6 = _closure1_slot7;
            var5 = _closure1_slot4;
            var3 = {};
            var7 = var22.container;
            var3['style'] = var7;
            var11 = _closure1_slot8;
            var10 = _closure1_slot11;
            var7 = {};
            var7['priceFormatted'] = var19;
            var8 = 'heading-md/semibold';
            if(!var17) { _fun0004_ip = 279; continue _fun0004 }
 277:
            var8 = undefined;
 279:
            var7['variant'] = var8;
            if(var17) { _fun0004_ip = 294; continue _fun0004 }
 286:
            var8 = var22.regularPrice;
            _fun0004_ip = 300; continue _fun0004;
 294:
            var8 = var22.strikedPrice;
 300:
            var7['style'] = var8;
            var21 = 'interactive-active';
            var7['color'] = var21;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var28 = 13;
            var12 = var8[var28];
            var12 = var9.bind(var4)(var12);
            var16 = var12.intl;
            var14 = var16.formatToPlainString;
            var12 = var8[var28];
            var12 = var9.bind(var4)(var12);
            var12 = var12.t;
            var13 = var12.sPvyr6;
            var12 = {};
            var12['price'] = var19;
            var12 = var14.bind(var16)(var13, var12);
            var7['accessibilityLabel'] = var12;
            var10 = var11.bind(var4)(var10, var7);
            var7 = new Array(3);
            var7[0] = var10;
            var10 = var18.type;
            var16 = 14;
            var8 = var8[var16];
            var8 = var9.bind(var4)(var8);
            var8 = var8.CollectiblesItemType;
            var9 = var8.BUNDLE;
            var8 = null;
            if(!(var10 === var9)) { _fun0004_ip = 463; continue _fun0004 }
 432:
            var8 = null;
            if(var17) { _fun0004_ip = 463; continue _fun0004 }
 437:
            var11 = _closure1_slot8;
            var10 = _closure1_slot13;
            var9 = {};
            var9['product'] = var18;
            var9['eligibleForPremiumDiscount'] = var17;
            var8 = var11.bind(var4)(var10, var9);
 463:
            var7[1] = var8;
            var8 = var2 != var20;
            if(!var8) { _fun0004_ip = 936; continue _fun0004 }
 477:
            var11 = _closure1_slot7;
            var10 = _closure1_slot9;
            var9 = {};
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 15;
            var12 = var19[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.NitroWheelIcon;
            var12 = {};
            var19 = 'interactive-normal';
            if(!var17) { _fun0004_ip = 531; continue _fun0004 }
 528:
            var19 = var21;
 531:
            var12['color'] = var19;
            var19 = var22.nitroIcon;
            var12['style'] = var19;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var19 = _closure1_slot8;
            if(var17) { _fun0004_ip = 762; continue _fun0004 }
 569:
            var14 = _closure1_slot3;
            var13 = {};
            var13['onPress'] = var15;
            var15 = var22.subscribeNowPressable;
            var13['style'] = var15;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var15 = 6;
            var15 = var25[var15];
            var15 = var24.bind(var4)(var15);
            var21 = var15.Text;
            var15 = {'variant': 'text-md/normal', 'color': 'interactive-normal'};
            var23 = 16;
            var23 = var25[var23];
            var24 = var24.bind(var4)(var23);
            var23 = var24.isAndroid;
            var24 = var23.bind(var24)();
            var23 = undefined;
            if(!var24) { _fun0004_ip = 660; continue _fun0004 }
 654:
            var23 = var22.androidTextPadding;
 660:
            var15['style'] = var23;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var25 = var23[var28];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var23 = var23[var28];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.Kxw2LS;
            var23 = {};
            var23['price'] = var20;
            var27 = function subscribeNowHook(arg1, arg2) {
                var5 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var1 = 'text-md/normal';
                var2['variant'] = var1;
                var1 = _closure2_slot0;
                var1 = var1.underline;
                var2['style'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var23['subscribeNowHook'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var15['children'] = var23;
            var15 = var19.bind(var4)(var21, var15);
            var13['children'] = var15;
            var13 = var19.bind(var4)(var14, var13);
            _fun0004_ip = 847; continue _fun0004;
 762:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = 6;
            var14 = var24[var14];
            var14 = var23.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-md/medium', 'color': 'interactive-active'};
            var21 = 16;
            var21 = var24[var21];
            var23 = var23.bind(var4)(var21);
            var21 = var23.isAndroid;
            var23 = var21.bind(var23)();
            var21 = undefined;
            if(!var23) { _fun0004_ip = 833; continue _fun0004 }
 827:
            var21 = var22.androidTextPadding;
 833:
            var14['style'] = var21;
            var14['children'] = var20;
            var13 = var19.bind(var4)(var15, var14);
 847:
            var12[1] = var13;
            var15 = var18.type;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var13 = var14.bind(var4)(var13);
            var13 = var13.CollectiblesItemType;
            var14 = var13.BUNDLE;
            var13 = null;
            if(!(var15 === var14)) { _fun0004_ip = 922; continue _fun0004 }
 891:
            var13 = null;
            if(!var17) { _fun0004_ip = 922; continue _fun0004 }
 896:
            var16 = _closure1_slot8;
            var15 = _closure1_slot13;
            var14 = {};
            var14['product'] = var18;
            var14['eligibleForPremiumDiscount'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 922:
            var12[2] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 936:
            var7[2] = var8;
            var3['children'] = var7;
            var3 = var6.bind(var4)(var5, var3);
            return var3;
 952:
            return var2;
 954:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopPricePlaceholder;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();