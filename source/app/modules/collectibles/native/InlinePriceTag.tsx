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
 0:
            var1 = arg1;
            var9 = var1.priceFormatted;
            var13 = var1.style;
            var11 = var1.color;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 25:
            var11 = 'interactive-active';
 31:
            var7 = var1.icon;
            var14 = var1.variant;
            if(!(var14 === var4)) { _fun0001_ip = 49; continue _fun0001 }
 45:
            var14 = 'text-md/medium';
 49:
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
 0:
            var1 = arg1;
            var14 = var1.vcData;
            var1 = _closure1_slot10;
            var5 = undefined;
            var16 = var1.bind(var5)();
            var2 = var14.enabled;
            var13 = null;
            var1 = null;
            if(!var2) { _fun0002_ip = 328; continue _fun0002 }
 37:
            var2 = var14.price;
            var2 = var13 != var2;
            var1 = null;
            if(!var2) { _fun0002_ip = 328; continue _fun0002 }
 55:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var16.priceTagRow;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var14.canAfford;
            var7 = !var7;
            if(!var7) { _fun0002_ip = 96; continue _fun0002 }
 91:
            var7 = var16.disabled;
 96:
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot11;
            var6 = {};
            var11 = var14.price;
            var12 = var13 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 144; continue _fun0002 }
 129:
            var12 = var11.amount;
            var11 = var12.toString;
            var10 = var11.bind(var12)();
 144:
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
            if(var15) { _fun0002_ip = 297; continue _fun0002 }
 282:
            var15 = var14.amount;
            var14 = var15.toString;
            var13 = var14.bind(var15)();
 297:
            var9['orbAmount'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['accessibilityLabel'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 328:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            var6 = 18;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isAndroid;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0003_ip = 97; continue _fun0003 }
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
            if(!var4) { _fun0003_ip = 136; continue _fun0003 }
 133:
            var3 = 2;
 136:
            var2['paddingBottom'] = var3;
            var1['discount'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function BundleDiscountV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var4 = var1.product;
            var3 = var1.eligibleForPremiumDiscount;
            var1 = _closure1_slot13;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 20;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getProductDiscount;
            var1 = var1.bind(var2)(var4, var3);
            var10 = var1.discountPercentage;
            var1 = 0;
            var2 = var10 <= var1;
            var1 = null;
            if(var2) { _fun0004_ip = 182; continue _fun0004 }
 77:
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
 182:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/InlinePriceTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InlinePriceTag(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var20 = var1.product;
            var2 = _closure1_slot10;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var _closure2_slot0 = var16;
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
            var19 = var2.bind(var7)(var8);
            var2 = 12;
            var2 = var5[var2];
            var6 = var6.bind(var4)(var2);
            var2 = _closure1_slot6;
            var2 = var2.SHOP_PRODUCT_DETAILS;
            var15 = var6.bind(var4)(var2);
            var8 = 13;
            var2 = var5[var8];
            var9 = var3.bind(var4)(var2);
            var7 = var9.getFormattedPriceForCollectiblesProduct;
            var2 = false;
            var6 = true;
            var23 = var7.bind(var9)(var20, var2, var6);
            var2 = 14;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useVirtualCurrencyData;
            var7 = var2.bind(var7)(var20, var19);
            var2 = 15;
            var2 = var5[var2];
            var9 = var3.bind(var4)(var2);
            var5 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var9)(var3, var2);
            if(!var2) { _fun0005_ip = 219; continue _fun0005 }
 210:
            var2 = null;
            if(!(var2 != var23)) { _fun0005_ip = 1295; continue _fun0005 }
 219:
            var5 = null;
            if(!(var5 != var23)) { _fun0005_ip = 1247; continue _fun0005 }
 228:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getFormattedPriceForCollectiblesProduct;
            var30 = var2.bind(var3)(var20, var6, var6);
            var6 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var16.container;
            var2['style'] = var8;
            var8 = {};
            var9 = var16.priceTagColumn;
            var8['style'] = var9;
            var9 = {};
            var10 = var16.priceTagRow;
            var9['style'] = var10;
            var14 = _closure1_slot7;
            var13 = _closure1_slot11;
            var10 = {};
            var10['priceFormatted'] = var23;
            var11 = 'heading-md/semibold';
            if(!var19) { _fun0005_ip = 327; continue _fun0005 }
 325:
            var11 = undefined;
 327:
            var10['variant'] = var11;
            if(var19) { _fun0005_ip = 342; continue _fun0005 }
 334:
            var11 = var16.regularPrice;
            _fun0005_ip = 348; continue _fun0005;
 342:
            var11 = var16.strikedPrice;
 348:
            var10['style'] = var11;
            var24 = 'interactive-active';
            var10['color'] = var24;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = 9;
            var17 = var11[var25];
            var17 = var12.bind(var4)(var17);
            var22 = var17.intl;
            var21 = var22.formatToPlainString;
            var17 = var11[var25];
            var17 = var12.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.sPvyr6;
            var17 = {};
            var17['price'] = var23;
            var17 = var21.bind(var22)(var18, var17);
            var10['accessibilityLabel'] = var17;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var13 = var20.type;
            var18 = 17;
            var11 = var11[var18];
            var11 = var12.bind(var4)(var11);
            var11 = var11.CollectiblesItemType;
            var12 = var11.BUNDLE;
            var11 = null;
            if(!(var13 === var12)) { _fun0005_ip = 511; continue _fun0005 }
 480:
            var11 = null;
            if(var19) { _fun0005_ip = 511; continue _fun0005 }
 485:
            var14 = _closure1_slot7;
            var13 = _closure1_slot14;
            var12 = {};
            var12['product'] = var20;
            var12['eligibleForPremiumDiscount'] = var19;
            var11 = var14.bind(var4)(var13, var12);
 511:
            var10[1] = var11;
            var11 = var5 != var30;
            if(!var11) { _fun0005_ip = 525; continue _fun0005 }
 522:
            var11 = var19;
 525:
            if(!var11) { _fun0005_ip = 735; continue _fun0005 }
 531:
            var14 = _closure1_slot7;
            var13 = _closure1_slot11;
            var12 = {'priceFormatted': null, 'variant': 'text-md/medium', 'color': 'interactive-active'};
            var12['priceFormatted'] = var30;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = var22[var25];
            var17 = var21.bind(var4)(var17);
            var27 = var17.intl;
            var26 = var27.formatToPlainString;
            var17 = var22[var25];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var23 = var17.kWkpdH;
            var17 = {};
            var17['price'] = var30;
            var17 = var26.bind(var27)(var23, var17);
            var12['accessibilityLabel'] = var17;
            var17 = 18;
            var17 = var22[var17];
            var21 = var21.bind(var4)(var17);
            var17 = var21.isAndroid;
            var21 = var17.bind(var21)();
            var17 = undefined;
            if(!var21) { _fun0005_ip = 657; continue _fun0005 }
 651:
            var17 = var16.androidTextPadding;
 657:
            var12['style'] = var17;
            var22 = _closure1_slot7;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 19;
            var17 = var23[var17];
            var17 = var21.bind(var4)(var17);
            var21 = var17.NitroWheelIcon;
            var17 = {};
            var23 = 'interactive-normal';
            if(!var19) { _fun0005_ip = 705; continue _fun0005 }
 702:
            var23 = var24;
 705:
            var17['color'] = var23;
            var23 = var16.nitroIcon;
            var17['style'] = var23;
            var17 = var22.bind(var4)(var21, var17);
            var12['icon'] = var17;
            var11 = var14.bind(var4)(var13, var12);
 735:
            var10[2] = var11;
            var9['children'] = var10;
            var10 = var6.bind(var4)(var3, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var5 != var30;
            if(!var10) { _fun0005_ip = 767; continue _fun0005 }
 764:
            var10 = !var19;
 767:
            if(!var10) { _fun0005_ip = 1167; continue _fun0005 }
 773:
            var13 = _closure1_slot9;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var16.priceTagRow;
            var11['style'] = var14;
            var17 = _closure1_slot3;
            var14 = {};
            var14['onPress'] = var15;
            var15 = var16.subscribeNowPressable;
            var14['style'] = var15;
            var22 = _closure1_slot7;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 19;
            var15 = var23[var15];
            var15 = var21.bind(var4)(var15);
            var21 = var15.NitroWheelIcon;
            var15 = {};
            var23 = 'interactive-normal';
            if(!var19) { _fun0005_ip = 857; continue _fun0005 }
 854:
            var23 = var24;
 857:
            var15['color'] = var23;
            var24 = var16.nitroIcon;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = var16.nitroIconSubscribeNow;
            var23[1] = var24;
            var15['style'] = var23;
            var15 = var22.bind(var4)(var21, var15);
            var21 = new Array(2);
            var21[0] = var15;
            var24 = _closure1_slot7;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 7;
            var15 = var27[var15];
            var15 = var26.bind(var4)(var15);
            var23 = var15.Text;
            var22 = {'variant': 'text-md/normal', 'color': 'interactive-normal'};
            var15 = 18;
            var15 = var27[var15];
            var26 = var26.bind(var4)(var15);
            var15 = var26.isAndroid;
            var26 = var15.bind(var26)();
            var15 = undefined;
            if(!var26) { _fun0005_ip = 978; continue _fun0005 }
 972:
            var15 = var16.androidTextPadding;
 978:
            var22['style'] = var15;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var26 = var15[var25];
            var26 = var16.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.format;
            var25 = var15[var25];
            var25 = var16.bind(var4)(var25);
            var25 = var25.t;
            var26 = var25.Kxw2LS;
            var25 = {};
            var25['price'] = var30;
            var29 = function subscribeNowHook(arg1, arg2) {
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
            var25['subscribeNowHook'] = var29;
            var25 = var27.bind(var28)(var26, var25);
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var21[1] = var22;
            var14['children'] = var21;
            var17 = var13.bind(var4)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var17 = var20.type;
            var15 = var15[var18];
            var15 = var16.bind(var4)(var15);
            var15 = var15.CollectiblesItemType;
            var16 = var15.BUNDLE;
            var15 = null;
            if(!(var17 === var16)) { _fun0005_ip = 1153; continue _fun0005 }
 1122:
            var15 = null;
            if(!var19) { _fun0005_ip = 1153; continue _fun0005 }
 1127:
            var18 = _closure1_slot7;
            var17 = _closure1_slot14;
            var16 = {};
            var16['product'] = var20;
            var16['eligibleForPremiumDiscount'] = var19;
            var15 = var18.bind(var4)(var17, var16);
 1153:
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1167:
            var9[1] = var10;
            var8['children'] = var9;
            var9 = var6.bind(var4)(var3, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = var7.enabled;
            if(!var9) { _fun0005_ip = 1207; continue _fun0005 }
 1197:
            var10 = var7.price;
            var9 = var5 != var10;
 1207:
            if(!var9) { _fun0005_ip = 1231; continue _fun0005 }
 1210:
            var12 = _closure1_slot7;
            var11 = _closure1_slot12;
            var10 = {};
            var10['vcData'] = var7;
            var9 = var12.bind(var4)(var11, var10);
 1231:
            var8[1] = var9;
            var2['children'] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 1247:
            var3 = var7.enabled;
            var2 = null;
            if(!var3) { _fun0005_ip = 1293; continue _fun0005 }
 1257:
            var3 = var7.price;
            var3 = var5 != var3;
            var2 = null;
            if(!var3) { _fun0005_ip = 1293; continue _fun0005 }
 1272:
            var6 = _closure1_slot7;
            var5 = _closure1_slot12;
            var3 = {};
            var3['vcData'] = var7;
            var2 = var6.bind(var4)(var5, var3);
 1293:
            return var2;
 1295:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
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