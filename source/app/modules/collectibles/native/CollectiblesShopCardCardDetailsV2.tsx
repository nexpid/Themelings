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
    var4 = 1;
    var4 = var6[var4];
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
    var8 = var4.CurrencyCodes;
    var _closure1_slot6 = var8;
    var4 = var4.VerticalGradient;
    var _closure1_slot7 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.jsxs;
    var _closure1_slot9 = var8;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'height': '50%', 'width': '100%', 'padding': 10, 'flex': 1, 'bottom': 0, 'overflow': 'hidden', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var14 = 6;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var4['regularMetadataContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var13;
    var4['assetName'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['priceDescription'] = var10;
    var10 = {};
    var10['paddingLeft'] = var12;
    var4['discountPercentage'] = var10;
    var10 = {'marginTop': 0, 'marginRight': 3};
    var4['wheelIcon'] = var10;
    var10 = {};
    var10['paddingBottom'] = var11;
    var4['androidTextPadding'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.product;
            var7 = var1.isPremiumUser;
            var6 = var1.styles;
            var3 = var1.collectibleProductState;
            var2 = var1.isFetchingGoogleSkus;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 7;
            var9 = var9[var4];
            var4 = undefined;
            var11 = var10.bind(var4)(var9);
            var10 = var11.getPriceForCollectiblesProduct;
            var9 = true;
            var12 = var10.bind(var11)(var8, var7, var9);
            var _closure2_slot0 = var12;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var9 = new Array(1);
            var9[0] = var12;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0002_ip = 100; continue _fun0002 }
 18:
                    var2 = _closure2_slot0;
                    var2 = var2.priceString;
                    if(!(var4 == var2)) { _fun0002_ip = 87; continue _fun0002 }
 32:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.formatPrice;
                    var2 = _closure2_slot0;
                    var4 = var2.amount;
                    var2 = var2.currency;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0002_ip = 97; continue _fun0002;
 87:
                    var3 = _closure2_slot0;
                    var2 = var3.priceString;
 97:
                    var1 = var2;
 100:
                    return var1;
                }
            };
            var13 = var10.bind(var11)(var5, var9);
            if(!var2) { _fun0001_ip = 121; continue _fun0001 }
 112:
            var2 = null;
            if(!(var2 != var12)) { _fun0001_ip = 1290; continue _fun0001 }
 121:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getProductDiscount;
            var2 = var2.bind(var5)(var8, var7);
            var16 = var2.discountPercentage;
            var2 = 'partiallyOwnedBundle';
            if(!(var2 !== var3)) { _fun0001_ip = 1162; continue _fun0001 }
 172:
            var2 = 'purchased';
            if(!(var2 !== var3)) { _fun0001_ip = 1034; continue _fun0001 }
 183:
            var2 = 'nitroUpsell';
            if(!(var2 !== var3)) { _fun0001_ip = 906; continue _fun0001 }
 194:
            var2 = 'nitroClaim';
            if(!(var2 !== var3)) { _fun0001_ip = 776; continue _fun0001 }
 207:
            var2 = null;
            var2 = var2 == var12;
            var3 = undefined;
            if(var2) { _fun0001_ip = 224; continue _fun0001 }
 218:
            var3 = var12.currency;
 224:
            var2 = _closure1_slot6;
            var2 = var2.DISCORD_ORB;
            if(!(var3 !== var2)) { _fun0001_ip = 589; continue _fun0001 }
 241:
            var5 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var6.priceDescription;
            var2['style'] = var8;
            var8 = var7;
            if(!var8) { _fun0001_ip = 327; continue _fun0001 }
 267:
            var10 = _closure1_slot8;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 15;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.NitroWheelIcon;
            var7 = {'size': 'xs', 'color': 'header-primary'};
            var11 = var6.wheelIcon;
            var7['style'] = var11;
            var8 = var10.bind(var4)(var9, var7);
 327:
            var7 = new Array(3);
            var7[0] = var8;
            var11 = _closure1_slot8;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 11;
            var8 = var14[var9];
            var8 = var15.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var17 = 14;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if(!var15) { _fun0001_ip = 410; continue _fun0001 }
 404:
            var14 = var6.androidTextPadding;
 410:
            var8['style'] = var14;
            var8['children'] = var13;
            var8 = var11.bind(var4)(var10, var8);
            var7[1] = var8;
            var8 = 0;
            var8 = var16 > var8;
            if(!var8) { _fun0001_ip = 570; continue _fun0001 }
 440:
            var11 = _closure1_slot8;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = var14[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'color': 'text-positive', 'variant': 'text-xs/semibold', 'lineClamp': 1};
            var18 = var6.discountPercentage;
            var13 = new Array(2);
            var13[0] = var18;
            var14 = var14[var17];
            var15 = var15.bind(var4)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = undefined;
            if(!var15) { _fun0001_ip = 523; continue _fun0001 }
 517:
            var14 = var6.androidTextPadding;
 523:
            var13[1] = var14;
            var9['style'] = var13;
            var13 = global;
            var13 = var13.HermesInternal;
            var15 = var13.concat;
            var14 = '-';
            var13 = '%';
            var13 = var15.bind(var14)(var16, var13);
            var9['children'] = var13;
            var8 = var11.bind(var4)(var10, var9);
 570:
            var7[2] = var8;
            var2['children'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            _fun0001_ip = 774; continue _fun0001;
 589:
            var7 = _closure1_slot9;
            var5 = _closure1_slot4;
            var3 = {};
            var8 = var6.priceDescription;
            var3['style'] = var8;
            var11 = _closure1_slot8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 13;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.OrbsIcon;
            var8 = {'size': 'xs', 'color': 'header-primary'};
            var10 = var6.wheelIcon;
            var8['style'] = var10;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 11;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var13 = 14;
            var13 = var15[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.isAndroid;
            var14 = var13.bind(var14)();
            var13 = undefined;
            if(!var14) { _fun0001_ip = 740; continue _fun0001 }
 734:
            var13 = var6.androidTextPadding;
 740:
            var9['style'] = var13;
            var12 = var12.amount;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var3['children'] = var8;
            var2 = var7.bind(var4)(var5, var3);
 774:
            return var2;
 776:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 11;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 12;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.rt69oq;
            var9 = var10.bind(var11)(var9);
            var7['children'] = var9;
            var7 = var5.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 906:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 11;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 12;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.sEAnVF;
            var9 = var10.bind(var11)(var9);
            var7['children'] = var9;
            var7 = var5.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 1034:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 11;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 12;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.6cfuDg;
            var9 = var10.bind(var11)(var9);
            var7['children'] = var9;
            var7 = var5.bind(var4)(var8, var7);
            var2['children'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 1162:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.priceDescription;
            var2['style'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var8 = 12;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.BEjTio;
            var8 = var9.bind(var10)(var8);
            var6['children'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 1290:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopPricePlaceholder;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var8.bind(var7)(var4);
    var _closure1_slot12 = var8;
    var4 = 'PriceDescription';
    var8['displayName'] = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = var3.product;
            var _closure2_slot0 = var1;
            var3 = var3.collectibleProductState;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot11;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var _closure2_slot2 = var8;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var3 = var9.useCurrentUser;
            var10 = var3.bind(var9)();
            var11 = _closure1_slot1;
            var3 = 17;
            var3 = var6[var3];
            var9 = var11.bind(var5)(var3);
            var3 = var9.canUseCollectibles;
            var3 = var3.bind(var9)(var10);
            var _closure2_slot3 = var3;
            var3 = 18;
            var3 = var6[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useToken;
            var3 = 6;
            var3 = var6[var3];
            var3 = var11.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_PRIMARY;
            var9 = var9.bind(var10)(var3);
            var3 = 19;
            var10 = var6[var3];
            var12 = var4.bind(var5)(var10);
            var11 = var12.hexToRgbaString;
            var10 = var6[var3];
            var14 = var4.bind(var5)(var10);
            var13 = var14.hexWithOpacity;
            var10 = 0.75;
            var10 = var13.bind(var14)(var9, var10);
            var10 = var11.bind(var12)(var10);
            var11 = var6[var3];
            var12 = var4.bind(var5)(var11);
            var11 = var12.hexToRgbaString;
            var3 = var6[var3];
            var14 = var4.bind(var5)(var3);
            var13 = var14.hexWithOpacity;
            var3 = 0;
            var3 = var13.bind(var14)(var9, var3);
            var11 = var11.bind(var12)(var3);
            var3 = 20;
            var3 = var6[var3];
            var12 = var4.bind(var5)(var3);
            var6 = var12.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var12)(var4, var3);
            var _closure2_slot4 = var3;
            var6 = function renderMetadataContent() {
                var4 = _closure1_slot9;
                var3 = _closure1_slot10;
                var2 = {};
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.Text;
                var5 = {'style': null, 'variant': 'heading-sm/bold', 'color': 'header-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
                var10 = _closure2_slot2;
                var11 = var10.assetName;
                var5['style'] = var11;
                var11 = _closure2_slot0;
                var12 = var11.name;
                var5['children'] = var12;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot12;
                var6 = {};
                var6['product'] = var11;
                var11 = _closure2_slot3;
                var6['isPremiumUser'] = var11;
                var6['styles'] = var10;
                var10 = _closure2_slot1;
                var6['collectibleProductState'] = var10;
                var9 = _closure2_slot4;
                var6['isFetchingGoogleSkus'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0003_ip = 315; continue _fun0003 }
 310:
            var2 = var1.type;
 315:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 === var1)) { _fun0003_ip = 395; continue _fun0003 }
 351:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = var8.regularMetadataContainer;
            var4 = new Array(1);
            var4[0] = var12;
            var1['style'] = var4;
            var4 = var6.bind(var5)();
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 497; continue _fun0003;
 395:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 22;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var12 = var8.regularMetadataContainer;
            var8 = new Array(1);
            var8[0] = var12;
            var2['style'] = var8;
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var10;
            var8[2] = var9;
            var2['colors'] = var8;
            var7 = _closure1_slot7;
            var8 = var7.START;
            var2['start'] = var8;
            var7 = var7.END;
            var2['end'] = var7;
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 497:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();