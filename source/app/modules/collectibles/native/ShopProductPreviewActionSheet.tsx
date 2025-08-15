// app/modules/collectibles/native/ShopProductPreviewActionSheet.tsx
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
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = var6[var10];
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
    var9 = {};
    var9['flex'] = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ShopProductPreviewActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ShopProductPreviewActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.product;
            var _closure2_slot0 = var18;
            var7 = var2.analyticsLocations;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 31; continue _fun0001 }
 27:
            var7 = new Array(0);
 31:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot9;
            var19 = var2.bind(var4)();
            var6 = _closure1_slot4;
            var2 = var6.useRef;
            var3 = null;
            var9 = var2.bind(var6)(var3);
            var2 = var6.useRef;
            var12 = var2.bind(var6)(var3);
            var10 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 10;
            var2 = var21[var5];
            var11 = var10.bind(var4)(var2);
            var2 = new Array(1);
            var8 = 0;
            var26 = var2;
            var25 = var7;
            var24 = 0;
            var14 = arraySpread(var26, var25, var24);
            var3 = 11;
            var3 = var21[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var2[var14] = var3;
            var3 = 1;
            var14 = var14 + var3;
            var2 = var11.bind(var4)(var2);
            var16 = var2.analyticsLocations;
            var2 = 12;
            var2 = var21[var2];
            var11 = var10.bind(var4)(var2);
            var10 = var11.useConfig;
            var2 = {};
            var14 = 'ShopPDPV2';
            var2['location'] = var14;
            var2 = var10.bind(var11)(var2);
            var14 = var2.enabled;
            var10 = var6.useState;
            var2 = true;
            var2 = var10.bind(var6)(var2);
            var20 = _closure1_slot3;
            var11 = 2;
            var2 = var20.bind(var4)(var2, var11);
            var22 = var2[var8];
            var2 = var2[var3];
            _closure2_slot2 = var2;
            var10 = _closure1_slot0;
            var15 = 13;
            var15 = var21[var15];
            var17 = var10.bind(var4)(var15);
            var15 = var17.usePreviewCollectibleProduct;
            var15 = var15.bind(var17)(var18, var22);
            var17 = {};
            var17['product'] = var18;
            var17['analyticsLocations'] = var16;
            var17['setShouldReset'] = var2;
            var15 = function useHandlePreviewPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.product;
                    var _closure3_slot0 = var3;
                    var9 = var2.analyticsLocations;
                    var _closure3_slot1 = var9;
                    var11 = var2.setShouldReset;
                    var _closure3_slot2 = var11;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 6;
                    var7 = var6[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.useCurrentUser;
                    var10 = var7.bind(var8)();
                    var _closure3_slot3 = var10;
                    var8 = _closure1_slot4;
                    var7 = var8.useCallback;
                    var4 = new Array(4);
                    var4[0] = var3;
                    var4[1] = var11;
                    var10 = var10.id;
                    var4[2] = var10;
                    var4[3] = var9;
                    var1 = function() {
                        var3 = _closure3_slot2;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot3;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var5 = true;
                        var2['isPreviewingChanges'] = var5;
                        var4 = _closure3_slot1;
                        var2['sourceAnalyticsLocations'] = var4;
                        var4 = function onClose() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openProductDetailActionSheet;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['product'] = var5;
                            var4 = _closure3_slot1;
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
                    if(!(var4 === var3)) { _fun0002_ip = 156; continue _fun0002 }
 154:
                    return var2;
 156:
                    return var1;
                }
            };
            var15 = var15.bind(var4)(var17);
            var22 = _closure1_slot5;
            var17 = new Array(2);
            var17[0] = var18;
            var17[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(var4 === var3)) { _fun0003_ip = 64; continue _fun0003 }
 53:
                    var3 = _closure2_slot2;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
 64:
                    return var1;
                }
            };
            var17 = var22.bind(var4)(var2, var17);
            var2 = var6.useState;
            var2 = var2.bind(var6)(var3);
            var2 = var20.bind(var4)(var2, var11);
            var11 = var2[var8];
            _closure2_slot3 = var11;
            var2 = var2[var3];
            _closure2_slot4 = var2;
            var8 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var2 = var2.layout;
                    var4 = var2.height;
                    var3 = _closure2_slot3;
                    if(!(var4 !== var3)) { _fun0004_ip = 57; continue _fun0004 }
 30:
                    var3 = _closure2_slot4;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var8.bind(var6)(var2, var3);
            var3 = var6.useEffect;
            var2 = new Array(2);
            var2[0] = var7;
            var7 = var18.skuId;
            var2[1] = var7;
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
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
            var1 = 15;
            var1 = var21[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var5 = var21[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var16;
            var7 = 16;
            var7 = var21[var7];
            var7 = var10.bind(var4)(var7);
            var8 = var7.BottomSheet;
            var7 = {'scrollable': true, 'startExpanded': true};
            var7['ref'] = var9;
            var11 = _closure1_slot8;
            var9 = 17;
            var9 = var21[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.BottomSheetScrollView;
            var9 = {};
            var9['onLayout'] = var20;
            var20 = false;
            var9['scrollsToTop'] = var20;
            var20 = var19.container;
            var19 = new Array(1);
            var19[0] = var20;
            var9['style'] = var19;
            var9['ref'] = var12;
            var20 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 18;
            var12 = var12[var19];
            var12 = var20.bind(var4)(var12);
            if(var14) { _fun0001_ip = 593; continue _fun0001 }
 585:
            var14 = var12.ProductPreviewV2;
            _fun0001_ip = 599; continue _fun0001;
 593:
            var14 = var12.PreviewContentPerSegment;
 599:
            var12 = {};
            var12['product'] = var18;
            var12['handlePreviewPress'] = var15;
            var14 = var3.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot7;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var19];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ProductDetailsV2;
            var13 = {};
            var13['product'] = var18;
            var13['onBuy'] = var17;
            var13['analyticsLocations'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
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