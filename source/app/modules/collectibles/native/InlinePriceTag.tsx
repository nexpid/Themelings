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
    var4 = var4.ShopCtaEnum;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
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
    var13 = 7;
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
    var _closure1_slot11 = var7;
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
            var11 = 'interactive-text-active';
case 2:
            var7 = var1.icon;
            var14 = var1.variant;
            if(!(var14 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 'text-md/medium';
case 4:
            var10 = var1.accessibilityLabel;
            var1 = _closure1_slot11;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 8;
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
    var _closure1_slot12 = var7;
    var7 = function OrbsPriceTag(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.vcData;
            var8 = var1.isProductDisabled;
            var1 = _closure1_slot11;
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
            var4 = _closure1_slot8;
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
            var8 = _closure1_slot8;
            var7 = _closure1_slot12;
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
            var12 = _closure1_slot8;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 9;
            var9 = var15[var9];
            var9 = var10.bind(var5)(var9);
            var11 = var9.OrbsIcon;
            var9 = {'color': 'interactive-text-active', 'size': 'sm'};
            var16 = var16.orbsIcon;
            var9['style'] = var16;
            var9 = var12.bind(var5)(var11, var9);
            var6['icon'] = var9;
            var9 = 10;
            var11 = var15[var9];
            var11 = var10.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var9 = var15[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var10 = var9.a/Y8PK;
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
    var _closure1_slot13 = var7;
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
            var3 = 7;
            var6 = var5[var3];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var6 = var6.radii;
            var6 = var6.xs;
            var6 = var6 - var7;
            var2['borderRadius'] = var6;
            var7 = _closure1_slot0;
            var6 = 21;
            var5 = var5[var6];
            var7 = var7.bind(var3)(var5);
            var5 = var7.isAndroid;
            var7 = var5.bind(var7)();
            var5 = undefined;
            if(!var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = 0;
case 17:
            var2['paddingTop'] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var5 = var5.bind(var3)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            var3 = undefined;
            if(!var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var3 = 2;
case 19:
            var2['paddingBottom'] = var3;
            var1['discount'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = function BundleDiscountV2(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.product;
            var3 = var1.eligibleForShopDiscount;
            var1 = _closure1_slot14;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getProductDiscount;
            var1 = var1.bind(var2)(var4, var3);
            var10 = var1.discountPercentage;
            var1 = 0;
            var2 = var10 <= var1;
            var1 = null;
            if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.discount;
            var2['style'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/normal', 'color': 'text-feedback-positive'};
            var9 = ['-'];
            var9[1] = var10;
            var10 = '%';
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/InlinePriceTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InlinePriceTag(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var17 = var1.product;
            var1 = var1.onTrackPress;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot11;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var _closure2_slot1 = var22;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useCurrentUser;
            var8 = var2.bind(var6)();
            var20 = 12;
            var2 = var5[var20];
            var6 = var3.bind(var4)(var2);
            var2 = var6.getShopDiscountSource;
            var18 = var2.bind(var6)(var8);
            var6 = _closure1_slot1;
            var2 = 13;
            var2 = var5[var2];
            var7 = var6.bind(var4)(var2);
            var2 = var7.canUseShopDiscounts;
            var12 = var2.bind(var7)(var8);
            var2 = 14;
            var2 = var5[var2];
            var6 = var6.bind(var4)(var2);
            var2 = _closure1_slot7;
            var2 = var2.SHOP_PRODUCT_DETAILS;
            var2 = var6.bind(var4)(var2);
            var _closure2_slot2 = var2;
            var2 = 15;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useProductDisableState;
            var2 = var17.skuId;
            var2 = var6.bind(var7)(var2);
            var7 = var2.isDisabled;
            var9 = 16;
            var2 = var5[var9];
            var10 = var3.bind(var4)(var2);
            var8 = var10.getFormattedPriceForCollectiblesProduct;
            var2 = false;
            var6 = true;
            var29 = var8.bind(var10)(var17, var2, var6);
            var2 = 17;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useVirtualCurrencyData;
            var8 = var2.bind(var8)(var17, var12);
            var2 = 18;
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
            if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var2 = null;
            if(!(var2 != var29)) { _fun0005_ip = 25; continue _fun0005 }
case 23:
            var5 = null;
            if(!(var5 != var29)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getFormattedPriceForCollectiblesProduct;
            var26 = var2.bind(var3)(var17, var6, var6);
            var6 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var22.container;
            var2['style'] = var9;
            var9 = {};
            var10 = var22.priceTagColumn;
            var9['style'] = var10;
            var10 = {};
            var11 = var22.priceTagRow;
            var10['style'] = var11;
            var15 = _closure1_slot8;
            var13 = _closure1_slot12;
            var11 = {};
            var11['priceFormatted'] = var29;
            var14 = 'heading-md/semibold';
            if(!var12) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var14 = undefined;
case 28:
            var11['variant'] = var14;
            if(var12) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var14 = var22.regularPrice;
            _fun0005_ip = 32; continue _fun0005;
case 30:
            var14 = var22.strikedPrice;
case 32:
            var11['style'] = var14;
            var21 = 'interactive-text-active';
            var11['color'] = var21;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var27 = 10;
            var19 = var16[var27];
            var19 = var14.bind(var4)(var19);
            var28 = var19.intl;
            var24 = var28.formatToPlainString;
            var19 = var16[var27];
            var19 = var14.bind(var4)(var19);
            var19 = var19.t;
            var23 = var19.sPvyr8;
            var19 = {};
            var19['price'] = var29;
            var19 = var24.bind(var28)(var23, var19);
            var11['accessibilityLabel'] = var19;
            var13 = var15.bind(var4)(var13, var11);
            var11 = new Array(3);
            var11[0] = var13;
            var15 = var17.type;
            var13 = 20;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.CollectiblesItemType;
            var14 = var13.BUNDLE;
            var13 = null;
            if(!(var15 === var14)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var13 = null;
            if(var12) { _fun0005_ip = 33; continue _fun0005 }
case 35:
            var16 = _closure1_slot8;
            var15 = _closure1_slot15;
            var14 = {};
            var14['product'] = var17;
            var14['eligibleForShopDiscount'] = var12;
            var13 = var16.bind(var4)(var15, var14);
case 33:
            var11[1] = var13;
            var13 = var5 != var26;
            if(!var13) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var13 = var12;
case 36:
            if(!var13) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var16 = _closure1_slot8;
            var15 = _closure1_slot12;
            var14 = {'priceFormatted': null, 'variant': 'text-md/medium', 'color': 'interactive-text-active'};
            var14['priceFormatted'] = var26;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = var23[var27];
            var17 = var19.bind(var4)(var17);
            var29 = var17.intl;
            var28 = var29.formatToPlainString;
            var17 = var23[var27];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var24 = var17.kWkpdG;
            var17 = {};
            var17['price'] = var26;
            var17 = var28.bind(var29)(var24, var17);
            var14['accessibilityLabel'] = var17;
            var17 = 21;
            var17 = var23[var17];
            var19 = var19.bind(var4)(var17);
            var17 = var19.isAndroid;
            var19 = var17.bind(var19)();
            var17 = undefined;
            if(!var19) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var17 = var22.androidTextPadding;
case 40:
            var14['style'] = var17;
            var19 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var20];
            var17 = var19.bind(var4)(var17);
            var17 = var17.ShopDiscountSource;
            var17 = var17.THIRDPARTY;
            if(!(var18 !== var17)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 23;
            var17 = var20[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.NitroWheelIcon;
            var17 = {};
            var17['color'] = var21;
            var20 = var22.nitroIcon;
            var17['style'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            _fun0005_ip = 44; continue _fun0005;
case 42:
            var20 = _closure1_slot8;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 22;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.TagIcon;
            var18 = {};
            var18['color'] = var21;
            var21 = var22.nitroIcon;
            var18['style'] = var21;
            var17 = var20.bind(var4)(var19, var18);
case 44:
            var14['icon'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 38:
            var11[2] = var13;
            var10['children'] = var11;
            var11 = var6.bind(var4)(var3, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var5 != var26;
            if(!var11) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var11 = !var12;
case 45:
            if(!var11) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var14 = _closure1_slot8;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var22.priceTagRow;
            var12['style'] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot3;
            var15 = {};
            var18 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var3 = var2.SUBSCRIBE_NOW;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 49:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var15['onPress'] = var18;
            var18 = var22.subscribeNowPressable;
            var15['style'] = var18;
            var18 = 'button';
            var15['accessibilityRole'] = var18;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 23;
            var18 = var24[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.NitroWheelIcon;
            var18 = {};
            var20 = 'interactive-text-default';
            var18['color'] = var20;
            var21 = var22.nitroIcon;
            var20 = new Array(2);
            var20[0] = var21;
            var21 = var22.nitroIconSubscribeNow;
            var20[1] = var21;
            var18['style'] = var20;
            var19 = var14.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 8;
            var19 = var24[var19];
            var19 = var23.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-md/normal', 'color': 'interactive-text-default'};
            var21 = 21;
            var21 = var24[var21];
            var23 = var23.bind(var4)(var21);
            var21 = var23.isAndroid;
            var23 = var21.bind(var23)();
            var21 = undefined;
            if(!var23) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var21 = var22.androidTextPadding;
case 51:
            var19['style'] = var21;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var23 = var21[var27];
            var23 = var22.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var21 = var21[var27];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.Kxw2LT;
            var21 = {};
            var21['price'] = var26;
            var25 = function subscribeNowHook(arg1, arg2) {
                var5 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var1 = 'text-md/normal';
                var2['variant'] = var1;
                var1 = _closure2_slot1;
                var1 = var1.underline;
                var2['style'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var21['subscribeNowHook'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var19['children'] = var21;
            var19 = var14.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 47:
            var10[1] = var11;
            var9['children'] = var10;
            var10 = var6.bind(var4)(var3, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var8.enabled;
            if(!var10) { _fun0005_ip = 53; continue _fun0005 }
case 54:
            var11 = var8.price;
            var10 = var5 != var11;
case 53:
            if(!var10) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var13 = _closure1_slot8;
            var12 = _closure1_slot13;
            var11 = {};
            var11['vcData'] = var8;
            var11['isProductDisabled'] = var7;
            var10 = var13.bind(var4)(var12, var11);
case 55:
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 26:
            var3 = var8.enabled;
            var2 = null;
            if(!var3) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var3 = var8.price;
            var3 = var5 != var3;
            var2 = null;
            if(!var3) { _fun0005_ip = 57; continue _fun0005 }
case 59:
            var6 = _closure1_slot8;
            var5 = _closure1_slot13;
            var3 = {};
            var3['vcData'] = var8;
            var3['isProductDisabled'] = var7;
            var2 = var6.bind(var4)(var5, var3);
case 57:
            return var2;
case 25:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 19;
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