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
    var4 = var4.VerticalGradient;
    var _closure1_slot6 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var8 = var4.jsxs;
    var _closure1_slot8 = var8;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
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
    var _closure1_slot10 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.product;
            var7 = var1.isPremiumUser;
            var6 = var1.styles;
            var3 = var1.collectibleProductState;
            var2 = var1.isFetchingGoogleSkus;
            var9 = var1.preferVCPrice;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var4 = 7;
            var8 = var16[var4];
            var4 = undefined;
            var11 = var13.bind(var4)(var8);
            var10 = var11.getFormattedPriceForCollectiblesProduct;
            var8 = true;
            var14 = var10.bind(var11)(var15, var7, var8);
            var10 = 8;
            var10 = var16[var10];
            var12 = var13.bind(var4)(var10);
            var11 = var12.isVirtualCurrencyEnabled;
            var10 = {};
            var17 = 'CollectiblesShopCardCardDetailsV2.PriceDescription';
            var10['location'] = var17;
            var10 = var11.bind(var12)(var10);
            var10 = var10.enabled;
            var _closure2_slot0 = var10;
            var11 = 9;
            var11 = var16[var11];
            var17 = var13.bind(var4)(var11);
            var12 = var17.getProductOrbPrice;
            var11 = {};
            var11['product'] = var15;
            var11['isPremiumUser'] = var7;
            var12 = var12.bind(var17)(var11);
            var _closure2_slot1 = var12;
            var11 = 10;
            var11 = var16[var11];
            var13 = var13.bind(var4)(var11);
            var11 = var13.useFetchVirtualCurrencyBalance;
            var11 = var11.bind(var13)();
            var11 = var11.balance;
            var _closure2_slot2 = var11;
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var13 = new Array(3);
            var13[0] = var12;
            var13[1] = var11;
            var13[2] = var10;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 18:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 31:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 40:
                    var3 = _closure2_slot1;
                    var3 = var3.amount;
                    var2 = _closure2_slot2;
                    var1 = var3 <= var2;
 58:
                    return var1;
                }
            };
            var13 = var16.bind(var17)(var5, var13);
            if(!var2) { _fun0001_ip = 246; continue _fun0001 }
 237:
            var2 = null;
            if(!(var2 != var14)) { _fun0001_ip = 1416; continue _fun0001 }
 246:
            var5 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 12;
            var2 = var16[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getProductDiscount;
            var2 = var2.bind(var5)(var15, var7);
            var17 = var2.discountPercentage;
            var2 = 'partiallyOwnedBundle';
            if(!(var2 !== var3)) { _fun0001_ip = 1292; continue _fun0001 }
 297:
            var2 = 'purchased';
            if(!(var2 !== var3)) { _fun0001_ip = 1168; continue _fun0001 }
 308:
            var2 = 'nitroUpsell';
            if(!(var2 !== var3)) { _fun0001_ip = 1044; continue _fun0001 }
 319:
            var2 = 'nitroClaim';
            if(!(var2 !== var3)) { _fun0001_ip = 918; continue _fun0001 }
 332:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = null;
            if(!(var2 != var12)) { _fun0001_ip = 373; continue _fun0001 }
 346:
            if(!(var2 != var11)) { _fun0001_ip = 373; continue _fun0001 }
 350:
            if(!var10) { _fun0001_ip = 373; continue _fun0001 }
 353:
            if(!(var8 !== var9)) { _fun0001_ip = 703; continue _fun0001 }
 360:
            if(var13) { _fun0001_ip = 703; continue _fun0001 }
 366:
            if(!(var2 != var14)) { _fun0001_ip = 703; continue _fun0001 }
 373:
            var2 = {};
            var8 = var6.priceDescription;
            var2['style'] = var8;
            var8 = var7;
            if(!var8) { _fun0001_ip = 451; continue _fun0001 }
 391:
            var10 = _closure1_slot7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 17;
            var7 = var11[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.NitroWheelIcon;
            var7 = {'size': 'xs', 'color': 'header-primary'};
            var11 = var6.wheelIcon;
            var7['style'] = var11;
            var8 = var10.bind(var4)(var9, var7);
 451:
            var7 = new Array(3);
            var7[0] = var8;
            var11 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 13;
            var8 = var15[var9];
            var8 = var16.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var18 = 16;
            var15 = var15[var18];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isAndroid;
            var16 = var15.bind(var16)();
            var15 = undefined;
            if(!var16) { _fun0001_ip = 530; continue _fun0001 }
 524:
            var15 = var6.androidTextPadding;
 530:
            var8['style'] = var15;
            var8['children'] = var14;
            var8 = var11.bind(var4)(var10, var8);
            var7[1] = var8;
            var8 = 0;
            var8 = var17 > var8;
            if(!var8) { _fun0001_ip = 690; continue _fun0001 }
 560:
            var11 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = var15[var9];
            var9 = var16.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'color': 'text-positive', 'variant': 'text-xs/semibold', 'lineClamp': 1};
            var19 = var6.discountPercentage;
            var14 = new Array(2);
            var14[0] = var19;
            var15 = var15[var18];
            var16 = var16.bind(var4)(var15);
            var15 = var16.isAndroid;
            var16 = var15.bind(var16)();
            var15 = undefined;
            if(!var16) { _fun0001_ip = 643; continue _fun0001 }
 637:
            var15 = var6.androidTextPadding;
 643:
            var14[1] = var15;
            var9['style'] = var14;
            var14 = global;
            var14 = var14.HermesInternal;
            var16 = var14.concat;
            var15 = '-';
            var14 = '%';
            var14 = var16.bind(var15)(var17, var14);
            var9['children'] = var14;
            var8 = var11.bind(var4)(var10, var9);
 690:
            var7[2] = var8;
            var2['children'] = var7;
            _fun0001_ip = 910; continue _fun0001;
 703:
            var7 = {};
            var9 = var6.priceDescription;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var10 = 1;
            var11 = false;
            if(!(var11 === var13)) { _fun0001_ip = 740; continue _fun0001 }
 730:
            var10 = 0.5;
 740:
            var9['opacity'] = var10;
            var8[1] = var9;
            var7['style'] = var8;
            var11 = _closure1_slot7;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 15;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var9 = var8.OrbsIcon;
            var8 = {'size': 'xs', 'color': 'header-primary'};
            var10 = var6.wheelIcon;
            var8['style'] = var10;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 13;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.isAndroid;
            var14 = var13.bind(var14)();
            var13 = undefined;
            if(!var14) { _fun0001_ip = 879; continue _fun0001 }
 873:
            var13 = var6.androidTextPadding;
 879:
            var9['style'] = var13;
            var12 = var12.amount;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var7['children'] = var8;
            var2 = var7;
 910:
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 918:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 14;
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
 1044:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 14;
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
 1168:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var6.priceDescription;
            var2['style'] = var7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var9 = 14;
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
 1292:
            var5 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.priceDescription;
            var2['style'] = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 13;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var8 = 14;
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
 1416:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopPricePlaceholder;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var8.bind(var7)(var4);
    var _closure1_slot11 = var8;
    var4 = 'PriceDescription';
    var8['displayName'] = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = var3.product;
            var _closure2_slot0 = var1;
            var4 = var3.collectibleProductState;
            var _closure2_slot1 = var4;
            var3 = var3.preferVCPrice;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot10;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var _closure2_slot3 = var8;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 18;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var3 = var9.useCurrentUser;
            var10 = var3.bind(var9)();
            var11 = _closure1_slot1;
            var3 = 19;
            var3 = var6[var3];
            var9 = var11.bind(var5)(var3);
            var3 = var9.canUseCollectibles;
            var3 = var3.bind(var9)(var10);
            var _closure2_slot4 = var3;
            var3 = 20;
            var3 = var6[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useToken;
            var3 = 6;
            var3 = var6[var3];
            var3 = var11.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_PRIMARY;
            var9 = var9.bind(var10)(var3);
            var3 = 21;
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
            var3 = 22;
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
            var _closure2_slot5 = var3;
            var6 = function renderMetadataContent() {
                var4 = _closure1_slot8;
                var3 = _closure1_slot9;
                var2 = {};
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.Text;
                var5 = {'style': null, 'variant': 'heading-sm/bold', 'color': 'header-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
                var10 = _closure2_slot3;
                var11 = var10.assetName;
                var5['style'] = var11;
                var11 = _closure2_slot0;
                var12 = var11.name;
                var5['children'] = var12;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot11;
                var6 = {};
                var6['product'] = var11;
                var11 = _closure2_slot4;
                var6['isPremiumUser'] = var11;
                var6['styles'] = var10;
                var10 = _closure2_slot1;
                var6['collectibleProductState'] = var10;
                var10 = _closure2_slot5;
                var6['isFetchingGoogleSkus'] = var10;
                var9 = _closure2_slot2;
                var6['preferVCPrice'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0003_ip = 325; continue _fun0003 }
 320:
            var2 = var1.type;
 325:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            if(!(var2 === var1)) { _fun0003_ip = 405; continue _fun0003 }
 361:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = var8.regularMetadataContainer;
            var4 = new Array(1);
            var4[0] = var12;
            var1['style'] = var4;
            var4 = var6.bind(var5)();
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 507; continue _fun0003;
 405:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 24;
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
            var7 = _closure1_slot6;
            var8 = var7.START;
            var2['start'] = var8;
            var7 = var7.END;
            var2['end'] = var7;
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 507:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCardDetailsV2.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();