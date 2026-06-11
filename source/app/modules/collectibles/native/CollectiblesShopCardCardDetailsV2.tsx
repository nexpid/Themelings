// app/modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var11 = 2;
    var4 = var6[var11];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var12 = 3;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot6 = var4;
    var16 = 4;
    var4 = var6[var16];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'height': '45%', 'width': '100%', 'padding': 10, 'flex': 1, 'bottom': 0, 'overflow': 'hidden', 'borderBottomLeftRadius': null, 'borderBottomRightRadius': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var14 = 6;
    var17 = var6[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10['borderBottomLeftRadius'] = var17;
    var17 = var6[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10['borderBottomRightRadius'] = var17;
    var4['regularMetadataContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var16;
    var4['assetName'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%'};
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_4;
    var10['gap'] = var14;
    var4['priceVariantsContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    var4['priceDescription'] = var10;
    var10 = {};
    var10['flexShrink'] = var13;
    var4['text'] = var10;
    var10 = {};
    var10['paddingLeft'] = var12;
    var4['discountPercentage'] = var10;
    var10 = {'marginTop': 0, 'marginRight': 3};
    var4['wheelIcon'] = var10;
    var10 = {};
    var10['paddingBottom'] = var11;
    var4['androidTextPadding'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.product;
            var7 = var1.hasShopDiscount;
            var _closure2_slot0 = var7;
            var10 = var1.discountSource;
            var8 = var1.styles;
            var5 = var1.collectibleProductState;
            var3 = var1.isFetchingGoogleSkus;
            var9 = var1.preferVCPrice;
            var2 = var1.isDisabled;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var4 = 7;
            var6 = var17[var4];
            var4 = undefined;
            var11 = var15.bind(var4)(var6);
            var6 = var11.useDefaultVariantIndex;
            var13 = var6.bind(var11)(var14);
            var6 = 8;
            var6 = var17[var6];
            var11 = var15.bind(var4)(var6);
            var6 = var11.getSelectedProduct;
            var11 = var6.bind(var11)(var14, var13);
            var _closure2_slot1 = var11;
            var6 = 9;
            var6 = var17[var6];
            var14 = var15.bind(var4)(var6);
            var13 = var14.getFormattedPriceForCollectiblesProduct;
            var6 = true;
            var13 = var13.bind(var14)(var11, var7, var6);
            var18 = _closure1_slot3;
            var19 = var18.useMemo;
            var16 = new Array(2);
            var16[0] = var11;
            var16[1] = var7;
            var14 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProductOrbPrice;
                var1 = {};
                var5 = _closure2_slot1;
                var1['product'] = var5;
                var4 = _closure2_slot0;
                var1['hasShopDiscount'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var19.bind(var18)(var14, var16);
            var _closure2_slot2 = var14;
            var19 = var18.useMemo;
            var16 = new Array(2);
            var16[0] = var11;
            var16[1] = var7;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getProductDiscount;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.discountPercentage;
                return var1;
            };
            var16 = var19.bind(var18)(var11, var16);
            var11 = 11;
            var11 = var17[var11];
            var15 = var15.bind(var4)(var11);
            var11 = var15.useFetchVirtualCurrencyBalance;
            var11 = var11.bind(var15)();
            var11 = var11.balance;
            var _closure2_slot3 = var11;
            var17 = var18.useMemo;
            var15 = new Array(2);
            var15[0] = var11;
            var15[1] = var14;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = null;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot3;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var3 = _closure2_slot2;
                    var3 = var3.amount;
                    var2 = _closure2_slot3;
                    var1 = var3 <= var2;
case 2:
                    return var1;
                }
            };
            var15 = var17.bind(var18)(var12, var15);
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = null;
            if(!(var3 != var13)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var3 = 'partiallyOwnedBundle';
            if(!(var3 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 'purchased';
            if(!(var3 !== var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = 'nitroUpsell';
            if(!(var3 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = 'nitroClaim';
            if(!(var3 !== var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = null;
            if(!(var2 != var14)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(!(var2 != var11)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            if(!(var6 !== var9)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            if(var15) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(!(var2 == var13)) { _fun0001_ip = 18; continue _fun0001 }
case 21:
            var2 = {};
            var9 = var8.priceDescription;
            var6 = new Array(2);
            var6[0] = var9;
            var9 = {};
            var11 = 1;
            var12 = false;
            if(!(var12 === var15)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = 0.5;
case 24:
            var9['opacity'] = var11;
            var6[1] = var9;
            var2['style'] = var6;
            var12 = _closure1_slot7;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 15;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var9 = var6.OrbsIcon;
            var6 = {'size': 'xxs', 'color': 'mobile-text-heading-primary'};
            var11 = var8.wheelIcon;
            var6['style'] = var11;
            var9 = var12.bind(var4)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = 13;
            var9 = var19[var9];
            var9 = var18.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var15 = 14;
            var17 = var19[var15];
            var17 = var18.bind(var4)(var17);
            var21 = var17.intl;
            var20 = var21.formatToPlainString;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15.W4DfeF;
            var15 = {};
            var22 = var14.amount;
            var15['orbAmount'] = var22;
            var15 = var20.bind(var21)(var17, var15);
            var9['accessibilityLabel'] = var15;
            var17 = var8.text;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = 16;
            var17 = var19[var17];
            var18 = var18.bind(var4)(var17);
            var17 = var18.isAndroid;
            var17 = var17.bind(var18)();
            if(!var17) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var17 = var8.androidTextPadding;
case 26:
            var15[1] = var17;
            var9['style'] = var15;
            var14 = var14.amount;
            var9['children'] = var14;
            var9 = var12.bind(var4)(var11, var9);
            var6[1] = var9;
            var2['children'] = var6;
            _fun0001_ip = 28; continue _fun0001;
case 18:
            var6 = {};
            var9 = var8.priceDescription;
            var6['style'] = var9;
            var9 = var7;
            if(!var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 10;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.ShopDiscountSource;
            var7 = var7.THIRDPARTY;
            if(!(var10 !== var7)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var11 = _closure1_slot7;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 18;
            var7 = var12[var7];
            var7 = var10.bind(var4)(var7);
            var10 = var7.NitroWheelIcon;
            var7 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
            var12 = var8.wheelIcon;
            var7['style'] = var12;
            var7 = var11.bind(var4)(var10, var7);
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var12 = _closure1_slot7;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TagIcon;
            var10 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
            var14 = var8.wheelIcon;
            var10['style'] = var14;
            var7 = var12.bind(var4)(var11, var10);
case 33:
            var9 = var7;
case 29:
            var7 = new Array(3);
            var7[0] = var9;
            var12 = _closure1_slot7;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 13;
            var9 = var15[var10];
            var9 = var18.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var17 = var8.text;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = 16;
            var15 = var15[var17];
            var18 = var18.bind(var4)(var15);
            var15 = var18.isAndroid;
            var15 = var15.bind(var18)();
            if(!var15) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var15 = var8.androidTextPadding;
case 34:
            var14[1] = var15;
            var9['style'] = var14;
            var9['children'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            var7[1] = var9;
            var9 = 0;
            var9 = var16 > var9;
            if(!var9) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var12 = _closure1_slot7;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = var14[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'color': 'text-feedback-positive', 'variant': 'text-xs/semibold', 'lineClamp': 1};
            var18 = var8.discountPercentage;
            var13 = new Array(3);
            var13[0] = var18;
            var18 = var8.text;
            var13[1] = var18;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if(!var15) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var14 = var8.androidTextPadding;
case 38:
            var13[2] = var14;
            var10['style'] = var13;
            var13 = global;
            var13 = var13.HermesInternal;
            var15 = var13.concat;
            var14 = '-';
            var13 = '%';
            var13 = var15.bind(var14)(var16, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 36:
            var7[2] = var9;
            var6['children'] = var7;
            var2 = var6;
case 28:
            var2 = var5.bind(var4)(var3, var2);
            _fun0001_ip = 40; continue _fun0001;
case 16:
            var6 = _closure1_slot7;
            var5 = _closure1_slot4;
            var3 = {};
            var7 = var8.priceDescription;
            var3['style'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 13;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var10 = var8.text;
            var7['style'] = var10;
            var10 = 14;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.wu4gyV;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var6.bind(var4)(var9, var7);
            var3['children'] = var7;
            var2 = var6.bind(var4)(var5, var3);
case 40:
            return var2;
case 14:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.rt69oo;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 12:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.sEAnVH;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 10:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9["6cfuDj"];
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 8:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 13;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var8 = var8.text;
            var6['style'] = var8;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.BEjTij;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 7:
            var3 = _closure1_slot7;
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
    var8 = var8.bind(var7)(var4);
    var _closure1_slot10 = var8;
    var4 = 'PriceDescription';
    var8['displayName'] = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var14 = var1.product;
            var18 = var1.collectibleProductState;
            var16 = var1.preferVCPrice;
            var15 = var1.isDisabled;
            var6 = var1.hidePrice;
            var1 = _closure1_slot9;
            var4 = undefined;
            var19 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useCurrentUser;
            var3 = var1.bind(var3)();
            var1 = 20;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useIsProfileFramesEarlyAccessPhase;
            var1 = 'CollectiblesShopCardCardDetailsV2';
            var1 = var2.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var5 = var7.bind(var4)(var2);
            var2 = var5.getProductType;
            var5 = var2.bind(var5)(var14);
            var2 = 21;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            var1 = var5 === var2;
case 41:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 22;
            var2 = var7[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.canUseShopDiscounts;
            var21 = var2.bind(var5)(var3);
            if(var21) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var21 = var1;
case 43:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.getShopDiscountSource;
            var20 = var1.bind(var2)(var3);
            var1 = 23;
            var1 = var10[var1];
            var5 = var7.bind(var4)(var1);
            var3 = var5.useToken;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOW;
            var8 = var3.bind(var5)(var1);
            var1 = 24;
            var3 = var10[var1];
            var9 = var7.bind(var4)(var3);
            var5 = var9.hexToRgbaString;
            var3 = var10[var1];
            var13 = var7.bind(var4)(var3);
            var12 = var13.hexWithOpacity;
            var3 = 0.9;
            var3 = var12.bind(var13)(var8, var3);
            var12 = var5.bind(var9)(var3);
            var3 = var10[var1];
            var5 = var7.bind(var4)(var3);
            var3 = var5.hexToRgbaString;
            var1 = var10[var1];
            var13 = var7.bind(var4)(var1);
            var9 = var13.hexWithOpacity;
            var1 = 0;
            var1 = var9.bind(var13)(var8, var1);
            var13 = var3.bind(var5)(var1);
            var1 = 25;
            var1 = var10[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.getProductName;
            var9 = var1.bind(var3)(var14);
            var1 = 26;
            var1 = var10[var1];
            var17 = var7.bind(var4)(var1);
            var5 = var17.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var5.bind(var17)(var3, var1);
            var3 = _closure1_slot8;
            var1 = 27;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var22 = var19.regularMetadataContainer;
            var5 = new Array(1);
            var5[0] = var22;
            var1['style'] = var5;
            var5 = new Array(3);
            var5[0] = var13;
            var5[1] = var12;
            var5[2] = var8;
            var1['colors'] = var5;
            var5 = [0, 0.4, 1];
            var1['locations'] = var5;
            var5 = _closure1_slot6;
            var8 = var5.START;
            var1['start'] = var8;
            var5 = var5.END;
            var1['end'] = var5;
            var8 = _closure1_slot7;
            var5 = 13;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-sm/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var10 = var19.assetName;
            var5['style'] = var10;
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var19.priceVariantsContainer;
            var7['style'] = var10;
            var13 = _closure1_slot7;
            var12 = _closure1_slot10;
            var10 = {};
            var10['product'] = var14;
            var10['hasShopDiscount'] = var21;
            var10['discountSource'] = var20;
            var10['styles'] = var19;
            var10['collectibleProductState'] = var18;
            var10['isFetchingGoogleSkus'] = var17;
            var10['preferVCPrice'] = var16;
            var10['isDisabled'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 28;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['product'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 45:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();