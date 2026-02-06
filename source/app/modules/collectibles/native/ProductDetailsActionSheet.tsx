// app/modules/collectibles/native/ProductDetailsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'flex': 1};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'right': null, 'zIndex': 2};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['right'] = var10;
    var4['wishlistButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductDetailsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var27 = var1.product;
            var _closure2_slot0 = var27;
            var19 = var1.initialVariantIndex;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = 0;
case 2:
            var1 = var1.analyticsLocations;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = new Array(0);
case 4:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot9;
            var28 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var2 = var6.useRef;
            var14 = null;
            var10 = var2.bind(var6)(var14);
            var2 = var6.useRef;
            var20 = var2.bind(var6)(var14);
            _closure2_slot2 = var20;
            var2 = var6.useState;
            var7 = 0;
            var2 = var2.bind(var6)(var7);
            var9 = _closure1_slot3;
            var8 = 2;
            var2 = var9.bind(var4)(var2, var8);
            var25 = var2[var7];
            var3 = 1;
            var16 = var2[var3];
            var17 = _closure1_slot1;
            var23 = _closure1_slot2;
            var5 = 10;
            var2 = var23[var5];
            var12 = var17.bind(var4)(var2);
            var2 = new Array(1);
            var33 = var2;
            var32 = var1;
            var31 = 0;
            var13 = arraySpread(var33, var32, var31);
            var15 = 11;
            var15 = var23[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var2[var13] = var15;
            var13 = var13 + var3;
            var2 = var12.bind(var4)(var2);
            var17 = var2.analyticsLocations;
            var12 = var6.useState;
            var2 = true;
            var2 = var12.bind(var6)(var2);
            var2 = var9.bind(var4)(var2, var8);
            var22 = var2[var7];
            var2 = var2[var3];
            _closure2_slot3 = var2;
            var12 = _closure1_slot0;
            var13 = 12;
            var13 = var23[var13];
            var18 = var12.bind(var4)(var13);
            var15 = var18.useEnableMobileVariants;
            var13 = 'ProductDetailsActionSheet';
            var13 = var15.bind(var18)(var13);
            var15 = 13;
            var15 = var23[var15];
            var21 = var12.bind(var4)(var15);
            var18 = var21.useMobileWishlistOwnerExperiment;
            var15 = 'ShopProductPreviewActionSheet';
            var15 = var18.bind(var21)(var15);
            var15 = var15.showWishlistButtonInPDP;
            var18 = var6.useState;
            var18 = var18.bind(var6)(var19);
            var18 = var9.bind(var4)(var18, var8);
            var26 = var18[var7];
            var24 = var18[var3];
            var18 = 14;
            var18 = var23[var18];
            var19 = var12.bind(var4)(var18);
            var18 = var19.getSelectedProduct;
            var18 = var18.bind(var19)(var27, var26);
            var19 = 15;
            var19 = var23[var19];
            var21 = var12.bind(var4)(var19);
            var19 = var21.usePreviewCollectibleProduct;
            var19 = var19.bind(var21)(var18, var22);
            var21 = {};
            var21['product'] = var27;
            var21['variantIndex'] = var26;
            var21['analyticsLocations'] = var17;
            var21['setShouldReset'] = var2;
            var19 = function useHandlePreviewPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.product;
                    var _closure3_slot0 = var3;
                    var12 = var2.variantIndex;
                    var _closure3_slot1 = var12;
                    var9 = var2.analyticsLocations;
                    var _closure3_slot2 = var9;
                    var11 = var2.setShouldReset;
                    var _closure3_slot3 = var11;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var7 = var6[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.useCurrentUser;
                    var10 = var7.bind(var8)();
                    var _closure3_slot4 = var10;
                    var8 = _closure1_slot4;
                    var7 = var8.useCallback;
                    var4 = new Array(5);
                    var4[0] = var3;
                    var4[1] = var12;
                    var4[2] = var11;
                    var10 = var10.id;
                    var4[3] = var10;
                    var4[4] = var9;
                    var1 = function() {
                        var3 = _closure3_slot3;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot4;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var5 = true;
                        var2['isPreviewingChanges'] = var5;
                        var4 = _closure3_slot2;
                        var2['sourceAnalyticsLocations'] = var4;
                        var4 = function onClose() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openProductDetailsActionSheet;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['product'] = var5;
                            var5 = _closure3_slot1;
                            var1['initialVariantIndex'] = var5;
                            var4 = _closure3_slot2;
                            var1['analyticsLocations'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['onClose'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var7.bind(var8)(var1, var4);
                    var4 = var3.type;
                    var3 = 9;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var4 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    return var2;
case 6:
                    return var1;
                }
            };
            var22 = var19.bind(var4)(var21);
            var21 = _closure1_slot5;
            var19 = new Array(2);
            var19[0] = var27;
            var19[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var4 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot3;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 8:
                    return var1;
                }
            };
            var19 = var21.bind(var4)(var2, var19);
            var2 = var6.useState;
            var2 = var2.bind(var6)(var3);
            var2 = var9.bind(var4)(var2, var8);
            var8 = var2[var7];
            _closure2_slot4 = var8;
            var2 = var2[var3];
            _closure2_slot5 = var2;
            var7 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var2 = var2.layout;
                    var4 = var2.height;
                    var3 = _closure2_slot4;
                    if(!(var4 !== var3)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot5;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = var7.bind(var6)(var2, var3);
            var3 = var6.useEffect;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = var27.skuId;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = 'Collectibles Shop Details Modal';
                var2['type'] = var6;
                var7 = _closure2_slot1;
                var2['location_stack'] = var7;
                var6 = _closure2_slot0;
                var6 = var6.skuId;
                var2['sku_id'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var1 = 17;
            var1 = var23[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = var23[var5];
            var5 = var12.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var17;
            var9 = _closure1_slot8;
            var7 = 18;
            var7 = var23[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.BottomSheet;
            var7 = {'scrollable': true, 'startExpanded': true};
            var29 = function onExpand() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0005_ip = 4; continue _fun0005 }
case 12:
                    var3 = var4.scrollToEnd;
                    var2 = {};
                    var5 = true;
                    var2['animated'] = var5;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var7['onExpand'] = var29;
            var7['ref'] = var10;
            var10 = 19;
            var10 = var23[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.BottomSheetScrollView;
            var10 = {};
            var10['onLayout'] = var21;
            var21 = false;
            var10['scrollsToTop'] = var21;
            var21 = var28.container;
            var10['style'] = var21;
            var21 = {};
            var21['bottom'] = var25;
            var10['scrollIndicatorInsets'] = var21;
            var10['ref'] = var20;
            if(!var15) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var23 = _closure1_slot7;
            var21 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 20;
            var20 = var29[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['selectedProduct'] = var18;
            var28 = var28.wishlistButton;
            var20['style'] = var28;
            var28 = 'md';
            var20['size'] = var28;
            var15 = var23.bind(var4)(var21, var20);
case 13:
            var21 = new Array(5);
            var21[0] = var15;
            var20 = _closure1_slot7;
            if(var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = 22;
            var13 = var23[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.ProductDetailsActionSheetPreview;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var13 = 21;
            var13 = var28[var13];
            var15 = var23.bind(var4)(var13);
case 17:
            var13 = {};
            var13['product'] = var18;
            var13['handlePreviewPress'] = var22;
            var13 = var20.bind(var4)(var15, var13);
            var21[1] = var13;
            var13 = _closure1_slot7;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var22 = 23;
            var22 = var20[var22];
            var23 = var15.bind(var4)(var22);
            var22 = {};
            var22['product'] = var18;
            var22 = var13.bind(var4)(var23, var22);
            var21[2] = var22;
            var22 = 24;
            var22 = var20[var22];
            var23 = var15.bind(var4)(var22);
            var22 = {};
            var22['product'] = var27;
            var22['selectedVariantIndex'] = var26;
            var22['onVariantSelect'] = var24;
            var22 = var13.bind(var4)(var23, var22);
            var21[3] = var22;
            var22 = 25;
            var22 = var20[var22];
            var23 = var15.bind(var4)(var22);
            var22 = {};
            var24 = 5;
            var24 = var20[var24];
            var24 = var15.bind(var4)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_32;
            var24 = var25 + var24;
            var22['size'] = var24;
            var22 = var13.bind(var4)(var23, var22);
            var21[4] = var22;
            var10['children'] = var21;
            var12 = var9.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot0;
            var11 = 26;
            var11 = var20[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.NativePaymentContextProvider;
            var11 = {};
            var21 = new Array(0);
            var11['skuIDs'] = var21;
            var11['activeSubscription'] = var14;
            var14 = 27;
            var14 = var20[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['onBuy'] = var19;
            var14['product'] = var18;
            var14['analyticsLocations'] = var17;
            var14['onHeightChange'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
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