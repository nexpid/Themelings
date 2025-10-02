// app/modules/collectibles/native/InlinePriceTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var13 = 0;
    var7 = var6[var13];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var6[var12];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
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
    var10 = {};
    var10['marginLeft'] = var13;
    var7['nitroIconSubscribeNow'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-start', 'justifyContent': 'space-between'};
    var7['container'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['priceTagRow'] = var10;
    var10 = {'flexDirection': 'column', 'alignItems': 'flex-start'};
    var7['priceTagColumn'] = var10;
    var10 = {};
    var13 = 'underline';
    var10['textDecorationLine'] = var13;
    var7['underline'] = var10;
    var10 = {'marginBottom': 4294967294, 'marginTop': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var13 = 6;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginTop'] = var13;
    var7['subscribeNowPressable'] = var10;
    var10 = {};
    var10['paddingBottom'] = var12;
    var7['androidTextPadding'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var7['orbsIcon'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var7['disabled'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var7 = function PriceTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.priceFormatted;
            var13 = var1.style;
            var11 = var1.color;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 'interactive-active';
case 2:
            var7 = var1.icon;
            var14 = var1.variant;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 'text-md/medium';
case 4:
            var10 = var1.accessibilityLabel;
            var1 = _closure1_slot10;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 7;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var6['variant'] = var14;
            var14 = var12.priceTag;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var6['style'] = var12;
            var6['color'] = var11;
            var6['accessibilityLabel'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var7;
    var7 = function OrbsPriceTag(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.vcData;
            var8 = var1.isProductDisabled;
            var1 = _closure1_slot10;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var2 = var14.enabled;
            var13 = null;
            var1 = null;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var14.price;
            var2 = var13 != var2;
            var1 = null;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var16.priceTagRow;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var14.canAfford;
            var7 = !var7;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = var8;
case 9:
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var16.disabled;
case 11:
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot11;
            var6 = {};
            var11 = var14.price;
            var12 = var13 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var12 = var11.amount;
            var11 = var12.toString;
            var10 = var11.bind(var12)();
case 13:
            var6['priceFormatted'] = var10;
            var10 = 'text-md/semibold';
            var6['variant'] = var10;
            var12 = _closure1_slot7;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 8;
            var9 = var15[var9];
            var9 = var10.bind(var5)(var9);
            var11 = var9.OrbsIcon;
            var9 = {'color': 'interactive-active', 'size': 'sm'};
            var16 = var16.orbsIcon;
            var9['style'] = var16;
            var9 = var12.bind(var5)(var11, var9);
            var6['icon'] = var9;
            var9 = 9;
            var11 = var15[var9];
            var11 = var10.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var9 = var15[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var10 = var9.a/Y8PD;
            var9 = {};
            var14 = var14.price;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var15 = var14.amount;
            var14 = var15.toString;
            var13 = var14.bind(var15)();
case 15:
            var9['orbAmount'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['accessibilityLabel'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = {'backgroundColor': 'rgba(46, 204, 113, 0.25)', 'flexDirection': 'row', 'flexShrink': 1, 'borderRadius': null, 'paddingHorizontal': 6, 'marginLeft': 6};
            var7 = 1;
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var6 = var5[var3];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var6 = var6.radii;
            var6 = var6.xs;
            var6 = var6 - var7;
            var2['borderRadius'] = var6;
            var7 = _closure1_slot0;
            var6 = 19;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isAndroid;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0003_ip = 10; continue _fun0003 }
case 17:
            var5 = 0;
case 10:
            var2['paddingTop'] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var3 = undefined;
            if(!var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = 2;
case 18:
            var2['paddingBottom'] = var3;
            var1['discount'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function BundleDiscountV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var3 = var1.eligibleForPremiumDiscount;
            var1 = _closure1_slot13;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getProductDiscount;
            var1 = var1.bind(var2)(var4, var3);
            var10 = var1.discountPercentage;
            var1 = 0;
            var2 = var10 <= var1;
            var1 = null;
            if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.discount;
            var2['style'] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 7;
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
case 20:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/InlinePriceTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InlinePriceTag(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var21 = var1.product;
            var2 = _closure1_slot10;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var _closure2_slot0 = var17;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCurrentUser;
            var8 = var2.bind(var6)();
            var6 = _closure1_slot1;
            var2 = 11;
            var2 = var5[var2];
            var7 = var6.bind(var4)(var2);
            var2 = var7.canUseCollectibles;
            var20 = var2.bind(var7)(var8);
            var2 = 12;
            var2 = var5[var2];
            var6 = var6.bind(var4)(var2);
            var2 = _closure1_slot6;
            var2 = var2.SHOP_PRODUCT_DETAILS;
            var16 = var6.bind(var4)(var2);
            var2 = 13;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useProductDisableState;
            var2 = var21.skuId;
            var2 = var6.bind(var7)(var2);
            var7 = var2.isDisabled;
            var9 = 14;
            var2 = var5[var9];
            var10 = var3.bind(var4)(var2);
            var8 = var10.getFormattedPriceForCollectiblesProduct;
            var2 = false;
            var6 = true;
            var24 = var8.bind(var10)(var21, var2, var6);
            var2 = 15;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useVirtualCurrencyData;
            var8 = var2.bind(var8)(var21, var20);
            var2 = 16;
            var2 = var5[var2];
            var10 = var3.bind(var4)(var2);
            var5 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var10)(var3, var2);
            if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = null;
            if(!(var2 != var24)) { _fun0005_ip = 24; continue _fun0005 }
case 22:
            var5 = null;
            if(!(var5 != var24)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getFormattedPriceForCollectiblesProduct;
            var31 = var2.bind(var3)(var21, var6, var6);
            var6 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var17.container;
            var2['style'] = var9;
            var9 = {};
            var10 = var17.priceTagColumn;
            var9['style'] = var10;
            var10 = {};
            var11 = var17.priceTagRow;
            var10['style'] = var11;
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var11 = {};
            var11['priceFormatted'] = var24;
            var12 = 'heading-md/semibold';
            if(!var20) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var12 = undefined;
case 27:
            var11['variant'] = var12;
            if(var20) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var12 = var17.regularPrice;
            _fun0005_ip = 31; continue _fun0005;
case 29:
            var12 = var17.strikedPrice;
case 31:
            var11['style'] = var12;
            var25 = 'interactive-active';
            var11['color'] = var25;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var26 = 9;
            var18 = var12[var26];
            var18 = var13.bind(var4)(var18);
            var23 = var18.intl;
            var22 = var23.formatToPlainString;
            var18 = var12[var26];
            var18 = var13.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.sPvyr6;
            var18 = {};
            var18['price'] = var24;
            var18 = var22.bind(var23)(var19, var18);
            var11['accessibilityLabel'] = var18;
            var14 = var15.bind(var4)(var14, var11);
            var11 = new Array(3);
            var11[0] = var14;
            var14 = var21.type;
            var19 = 18;
            var12 = var12[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.CollectiblesItemType;
            var13 = var12.BUNDLE;
            var12 = null;
            if(!(var14 === var13)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var12 = null;
            if(var20) { _fun0005_ip = 32; continue _fun0005 }
case 34:
            var15 = _closure1_slot7;
            var14 = _closure1_slot14;
            var13 = {};
            var13['product'] = var21;
            var13['eligibleForPremiumDiscount'] = var20;
            var12 = var15.bind(var4)(var14, var13);
case 32:
            var11[1] = var12;
            var12 = var5 != var31;
            if(!var12) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var12 = var20;
case 35:
            if(!var12) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var13 = {'priceFormatted': null, 'variant': 'text-md/medium', 'color': 'interactive-active'};
            var13['priceFormatted'] = var31;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = var23[var26];
            var18 = var22.bind(var4)(var18);
            var28 = var18.intl;
            var27 = var28.formatToPlainString;
            var18 = var23[var26];
            var18 = var22.bind(var4)(var18);
            var18 = var18.t;
            var24 = var18.kWkpdH;
            var18 = {};
            var18['price'] = var31;
            var18 = var27.bind(var28)(var24, var18);
            var13['accessibilityLabel'] = var18;
            var18 = 19;
            var18 = var23[var18];
            var22 = var22.bind(var4)(var18);
            var18 = var22.isAndroid;
            var22 = var18.bind(var22)();
            var18 = undefined;
            if(!var22) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var18 = var17.androidTextPadding;
case 39:
            var13['style'] = var18;
            var23 = _closure1_slot7;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 20;
            var18 = var24[var18];
            var18 = var22.bind(var4)(var18);
            var22 = var18.NitroWheelIcon;
            var18 = {};
            var24 = 'interactive-normal';
            if(!var20) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var24 = var25;
case 41:
            var18['color'] = var24;
            var24 = var17.nitroIcon;
            var18['style'] = var24;
            var18 = var23.bind(var4)(var22, var18);
            var13['icon'] = var18;
            var12 = var15.bind(var4)(var14, var13);
case 37:
            var11[2] = var12;
            var10['children'] = var11;
            var11 = var6.bind(var4)(var3, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var5 != var31;
            if(!var11) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var11 = !var20;
case 43:
            if(!var11) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var14 = _closure1_slot9;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var17.priceTagRow;
            var12['style'] = var15;
            var18 = _closure1_slot3;
            var15 = {};
            var15['onPress'] = var16;
            var16 = var17.subscribeNowPressable;
            var15['style'] = var16;
            var23 = _closure1_slot7;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var16 = 20;
            var16 = var24[var16];
            var16 = var22.bind(var4)(var16);
            var22 = var16.NitroWheelIcon;
            var16 = {};
            var24 = 'interactive-normal';
            if(!var20) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var24 = var25;
case 47:
            var16['color'] = var24;
            var25 = var17.nitroIcon;
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var17.nitroIconSubscribeNow;
            var24[1] = var25;
            var16['style'] = var24;
            var16 = var23.bind(var4)(var22, var16);
            var22 = new Array(2);
            var22[0] = var16;
            var25 = _closure1_slot7;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var16 = 7;
            var16 = var28[var16];
            var16 = var27.bind(var4)(var16);
            var24 = var16.Text;
            var23 = {'variant': 'text-md/normal', 'color': 'interactive-normal'};
            var16 = 19;
            var16 = var28[var16];
            var27 = var27.bind(var4)(var16);
            var16 = var27.isAndroid;
            var27 = var16.bind(var27)();
            var16 = undefined;
            if(!var27) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var16 = var17.androidTextPadding;
case 49:
            var23['style'] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var27 = var16[var26];
            var27 = var17.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.format;
            var26 = var16[var26];
            var26 = var17.bind(var4)(var26);
            var26 = var26.t;
            var27 = var26.Kxw2LS;
            var26 = {};
            var26['price'] = var31;
            var30 = function subscribeNowHook(arg1, arg2) {
                var5 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
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
            var26['subscribeNowHook'] = var30;
            var26 = var28.bind(var29)(var27, var26);
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var22[1] = var23;
            var15['children'] = var22;
            var18 = var14.bind(var4)(var18, var15);
            var15 = new Array(2);
            var15[0] = var18;
            var18 = var21.type;
            var16 = var16[var19];
            var16 = var17.bind(var4)(var16);
            var16 = var16.CollectiblesItemType;
            var17 = var16.BUNDLE;
            var16 = null;
            if(!(var18 === var17)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var16 = null;
            if(!var20) { _fun0005_ip = 51; continue _fun0005 }
case 53:
            var19 = _closure1_slot7;
            var18 = _closure1_slot14;
            var17 = {};
            var17['product'] = var21;
            var17['eligibleForPremiumDiscount'] = var20;
            var16 = var19.bind(var4)(var18, var17);
case 51:
            var15[1] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 45:
            var10[1] = var11;
            var9['children'] = var10;
            var10 = var6.bind(var4)(var3, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var8.enabled;
            if(!var10) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var11 = var8.price;
            var10 = var5 != var11;
case 54:
            if(!var10) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var13 = _closure1_slot7;
            var12 = _closure1_slot12;
            var11 = {};
            var11['vcData'] = var8;
            var11['isProductDisabled'] = var7;
            var10 = var13.bind(var4)(var12, var11);
case 56:
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 25:
            var3 = var8.enabled;
            var2 = null;
            if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var3 = var8.price;
            var3 = var5 != var3;
            var2 = null;
            if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 60:
            var6 = _closure1_slot7;
            var5 = _closure1_slot12;
            var3 = {};
            var3['vcData'] = var8;
            var3['isProductDisabled'] = var7;
            var2 = var6.bind(var4)(var5, var3);
case 58:
            return var2;
case 24:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
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