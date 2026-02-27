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
    var14 = 4;
    var4 = var6[var14];
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
    var10 = {'position': 'absolute', 'height': '45%', 'width': '100%', 'padding': 10, 'flex': 1, 'bottom': 0, 'overflow': 'hidden', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var4['regularMetadataContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var14;
    var4['assetName'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%'};
    var14 = 6;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.spacing;
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
            var12 = var1.product;
            var6 = var1.isPremiumUser;
            var _closure2_slot0 = var6;
            var8 = var1.styles;
            var5 = var1.collectibleProductState;
            var3 = var1.isFetchingGoogleSkus;
            var9 = var1.preferVCPrice;
            var2 = var1.isDisabled;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var4 = 7;
            var7 = var16[var4];
            var4 = undefined;
            var10 = var15.bind(var4)(var7);
            var7 = var10.useDefaultVariantIndex;
            var11 = var7.bind(var10)(var12);
            var7 = 8;
            var7 = var16[var7];
            var10 = var15.bind(var4)(var7);
            var7 = var10.getSelectedProduct;
            var11 = var7.bind(var10)(var12, var11);
            var _closure2_slot1 = var11;
            var7 = 9;
            var7 = var16[var7];
            var12 = var15.bind(var4)(var7);
            var10 = var12.getFormattedPriceForCollectiblesProduct;
            var7 = true;
            var14 = var10.bind(var12)(var11, var6, var7);
            var10 = 10;
            var10 = var16[var10];
            var17 = var15.bind(var4)(var10);
            var12 = var17.isVirtualCurrencyEnabled;
            var10 = {};
            var18 = 'CollectiblesShopCardCardDetailsV2.PriceDescription';
            var10['location'] = var18;
            var10 = var12.bind(var17)(var10);
            var10 = var10.enabled;
            var _closure2_slot2 = var10;
            var18 = _closure1_slot3;
            var19 = var18.useMemo;
            var17 = new Array(2);
            var17[0] = var11;
            var17[1] = var6;
            var12 = function() {
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
                var1['isPremiumUser'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var19.bind(var18)(var12, var17);
            var _closure2_slot3 = var12;
            var19 = var18.useMemo;
            var17 = new Array(2);
            var17[0] = var11;
            var17[1] = var6;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
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
            var17 = var19.bind(var18)(var11, var17);
            var11 = 12;
            var11 = var16[var11];
            var15 = var15.bind(var4)(var11);
            var11 = var15.useFetchVirtualCurrencyBalance;
            var11 = var11.bind(var15)();
            var11 = var11.balance;
            var _closure2_slot4 = var11;
            var16 = var18.useMemo;
            var15 = new Array(3);
            var15[0] = var11;
            var15[1] = var10;
            var15[2] = var12;
            var13 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot4;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var3 = _closure2_slot3;
                    var3 = var3.amount;
                    var2 = _closure2_slot4;
                    var1 = var3 <= var2;
case 2:
                    return var1;
                }
            };
            var13 = var16.bind(var18)(var13, var15);
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = null;
            if(!(var3 != var14)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var3 = 'partiallyOwnedBundle';
            if(!(var3 !== var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = 'purchased';
            if(!(var3 !== var5)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = 'nitroUpsell';
            if(!(var3 !== var5)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = 'nitroClaim';
            if(!(var3 !== var5)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = null;
            if(!(var2 != var12)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            if(!(var2 != var11)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            if(!var10) { _fun0001_ip = 19; continue _fun0001 }
case 22:
            if(!(var7 !== var9)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(var13) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            if(!(var2 != var14)) { _fun0001_ip = 23; continue _fun0001 }
case 19:
            var2 = {};
            var7 = var8.priceDescription;
            var2['style'] = var7;
            var7 = var6;
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = _closure1_slot7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 18;
            var6 = var11[var6];
            var6 = var9.bind(var4)(var6);
            var9 = var6.NitroWheelIcon;
            var6 = {'size': 'xs', 'color': 'mobile-text-heading-primary'};
            var11 = var8.wheelIcon;
            var6['style'] = var11;
            var7 = var10.bind(var4)(var9, var6);
case 26:
            var6 = new Array(3);
            var6[0] = var7;
            var11 = _closure1_slot7;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 14;
            var7 = var16[var9];
            var7 = var19.bind(var4)(var7);
            var10 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var18 = var8.text;
            var15 = new Array(2);
            var15[0] = var18;
            var18 = 17;
            var16 = var16[var18];
            var19 = var19.bind(var4)(var16);
            var16 = var19.isAndroid;
            var16 = var16.bind(var19)();
            if(!var16) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var16 = var8.androidTextPadding;
case 28:
            var15[1] = var16;
            var7['style'] = var15;
            var7['children'] = var14;
            var7 = var11.bind(var4)(var10, var7);
            var6[1] = var7;
            var7 = 0;
            var7 = var17 > var7;
            if(!var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var11 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = var15[var9];
            var9 = var16.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'color': 'text-feedback-positive', 'variant': 'text-xs/semibold', 'lineClamp': 1};
            var19 = var8.discountPercentage;
            var14 = new Array(3);
            var14[0] = var19;
            var19 = var8.text;
            var14[1] = var19;
            var15 = var15[var18];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isAndroid;
            var16 = var15.bind(var16)();
            var15 = undefined;
            if(!var16) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var15 = var8.androidTextPadding;
case 32:
            var14[2] = var15;
            var9['style'] = var14;
            var14 = global;
            var14 = var14.HermesInternal;
            var16 = var14.concat;
            var15 = '-';
            var14 = '%';
            var14 = var16.bind(var15)(var17, var14);
            var9['children'] = var14;
            var7 = var11.bind(var4)(var10, var9);
case 30:
            var6[2] = var7;
            var2['children'] = var6;
            _fun0001_ip = 34; continue _fun0001;
case 23:
            var6 = {};
            var9 = var8.priceDescription;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var10 = 1;
            var11 = false;
            if(!(var11 === var13)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var10 = 0.5;
case 35:
            var9['opacity'] = var10;
            var7[1] = var9;
            var6['style'] = var7;
            var11 = _closure1_slot7;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 16;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var9 = var7.OrbsIcon;
            var7 = {'size': 'xxs', 'color': 'mobile-text-heading-primary'};
            var10 = var8.wheelIcon;
            var7['style'] = var10;
            var9 = var11.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            var9 = 14;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var13 = 15;
            var14 = var16[var13];
            var14 = var15.bind(var4)(var14);
            var18 = var14.intl;
            var17 = var18.formatToPlainString;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.W4DfeF;
            var13 = {};
            var19 = var12.amount;
            var13['orbAmount'] = var19;
            var13 = var17.bind(var18)(var14, var13);
            var9['accessibilityLabel'] = var13;
            var14 = var8.text;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = 17;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var14 = var14.bind(var15)();
            if(!var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var14 = var8.androidTextPadding;
case 37:
            var13[1] = var14;
            var9['style'] = var13;
            var12 = var12.amount;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var7[1] = var9;
            var6['children'] = var7;
            var2 = var6;
case 34:
            var2 = var5.bind(var4)(var3, var2);
            _fun0001_ip = 39; continue _fun0001;
case 17:
            var6 = _closure1_slot7;
            var5 = _closure1_slot4;
            var3 = {};
            var7 = var8.priceDescription;
            var3['style'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 14;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var10 = var8.text;
            var7['style'] = var10;
            var10 = 15;
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
case 39:
            return var2;
case 15:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 15;
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
case 13:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 15;
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
case 11:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var9 = var8.text;
            var6['style'] = var9;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.6cfuDj;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 9:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var8.priceDescription;
            var2['style'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 14;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var8 = var8.text;
            var6['style'] = var8;
            var8 = 15;
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
case 8:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
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
        var1 = arg1;
        var12 = var1.product;
        var17 = var1.collectibleProductState;
        var15 = var1.preferVCPrice;
        var14 = var1.isDisabled;
        var1 = _closure1_slot9;
        var4 = undefined;
        var18 = var1.bind(var4)();
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 19;
        var1 = var13[var1];
        var2 = var6.bind(var4)(var1);
        var1 = var2.useCurrentUser;
        var3 = var1.bind(var2)();
        var10 = _closure1_slot1;
        var1 = 20;
        var1 = var13[var1];
        var2 = var10.bind(var4)(var1);
        var1 = var2.canUseCollectibles;
        var19 = var1.bind(var2)(var3);
        var1 = 21;
        var1 = var13[var1];
        var3 = var6.bind(var4)(var1);
        var2 = var3.useToken;
        var1 = 6;
        var1 = var13[var1];
        var1 = var10.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.BACKGROUND_BASE_LOW;
        var9 = var2.bind(var3)(var1);
        var1 = 22;
        var2 = var13[var1];
        var5 = var6.bind(var4)(var2);
        var3 = var5.hexToRgbaString;
        var2 = var13[var1];
        var11 = var6.bind(var4)(var2);
        var7 = var11.hexWithOpacity;
        var2 = 0.9;
        var2 = var7.bind(var11)(var9, var2);
        var11 = var3.bind(var5)(var2);
        var2 = var13[var1];
        var3 = var6.bind(var4)(var2);
        var2 = var3.hexToRgbaString;
        var1 = var13[var1];
        var7 = var6.bind(var4)(var1);
        var5 = var7.hexWithOpacity;
        var1 = 0;
        var1 = var5.bind(var7)(var9, var1);
        var20 = var2.bind(var3)(var1);
        var1 = 23;
        var1 = var13[var1];
        var2 = var6.bind(var4)(var1);
        var1 = var2.getBaseProductName;
        var7 = var1.bind(var2)(var12);
        var1 = 24;
        var1 = var13[var1];
        var5 = var6.bind(var4)(var1);
        var3 = var5.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.isFetchingGoogleSkus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var16 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot8;
        var1 = 25;
        var1 = var13[var1];
        var2 = var10.bind(var4)(var1);
        var1 = {};
        var21 = var18.regularMetadataContainer;
        var5 = new Array(1);
        var5[0] = var21;
        var1['style'] = var5;
        var5 = new Array(3);
        var5[0] = var20;
        var5[1] = var11;
        var5[2] = var9;
        var1['colors'] = var5;
        var5 = [0, 0.4, 1];
        var1['locations'] = var5;
        var5 = _closure1_slot6;
        var9 = var5.START;
        var1['start'] = var9;
        var5 = var5.END;
        var1['end'] = var5;
        var11 = _closure1_slot7;
        var5 = 14;
        var5 = var13[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'style': null, 'variant': 'heading-sm/bold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
        var9 = var18.assetName;
        var5['style'] = var9;
        var5['children'] = var7;
        var6 = var11.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var7 = _closure1_slot4;
        var6 = {};
        var9 = var18.priceVariantsContainer;
        var6['style'] = var9;
        var9 = _closure1_slot10;
        var8 = {};
        var8['product'] = var12;
        var8['isPremiumUser'] = var19;
        var8['styles'] = var18;
        var8['collectibleProductState'] = var17;
        var8['isFetchingGoogleSkus'] = var16;
        var8['preferVCPrice'] = var15;
        var8['isDisabled'] = var14;
        var9 = var11.bind(var4)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 26;
        var9 = var13[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9['product'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var6['children'] = var8;
        var6 = var3.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();