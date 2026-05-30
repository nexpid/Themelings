// app/modules/collectibles/native/ProductDetailsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ProductDetailsActionSheetInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var25 = var1.product;
            var _closure2_slot0 = var25;
            var20 = var1.initialVariantIndex;
            var4 = undefined;
            if(!(var20 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = 0;
case 2:
            var2 = var1.analyticsLocations;
            if(!(var2 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = new Array(0);
case 4:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot14;
            var29 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var14 = null;
            var8 = var1.bind(var3)(var14);
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var13 = var1.bind(var3)(var14);
            _closure2_slot2 = var13;
            var6 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 12;
            var3 = var19[var1];
            var5 = var6.bind(var4)(var3);
            var3 = new Array(1);
            var15 = 0;
            var36 = var3;
            var35 = var2;
            var34 = 0;
            var9 = arraySpread(var36, var35, var34);
            var7 = 13;
            var7 = var19[var7];
            var7 = var6.bind(var4)(var7);
            var7 = var7.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var3[8] = var7;
            var7 = 1;
            var9 = var9 + var7;
            var3 = var5.bind(var4)(var3);
            var16 = var3.analyticsLocations;
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var3 = true;
            var5 = var5.bind(var9)(var3);
            var3 = _closure1_slot3;
            var18 = 2;
            var3 = var3.bind(var4)(var5, var18);
            var9 = var3[var15];
            var3 = var3[var7];
            _closure2_slot3 = var3;
            var17 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var25;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProductSkuIds;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var17.bind(var4)(var5, var10);
            var17 = _closure1_slot4;
            var5 = var17.useState;
            var17 = var5.bind(var17)(var20);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var17, var18);
            var24 = var5[var15];
            var23 = var5[var7];
            var18 = _closure1_slot0;
            var5 = 14;
            var5 = var19[var5];
            var7 = var18.bind(var4)(var5);
            var5 = var7.getSelectedProduct;
            var17 = var5.bind(var7)(var25, var24);
            var5 = 15;
            var5 = var19[var5];
            var15 = var18.bind(var4)(var5);
            var7 = var15.useTrackPdpClick;
            var5 = {};
            var20 = var17.skuId;
            var5['skuId'] = var20;
            var5['productSkuIds'] = var10;
            var5['analyticsLocations'] = var16;
            var15 = var7.bind(var15)(var5);
            _closure2_slot4 = var15;
            var5 = 16;
            var5 = var19[var5];
            var7 = var18.bind(var4)(var5);
            var5 = var7.usePreviewCollectibleProduct;
            var5 = var5.bind(var7)(var17, var9);
            var5 = 17;
            var5 = var19[var5];
            var7 = var18.bind(var4)(var5);
            var5 = var7.useCollectiblesAnalyticsContext;
            var7 = var5.bind(var7)();
            var5 = 18;
            var5 = var19[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var9 = 19;
            var20 = var19[var9];
            var20 = var18.bind(var4)(var20);
            var20 = var20.ImpressionTypes;
            var20 = var20.HALFSHEET;
            var5['type'] = var20;
            var9 = var19[var9];
            var9 = var18.bind(var4)(var9);
            var9 = var9.ImpressionNames;
            var9 = var9.SHOP_PRODUCT_DETAIL;
            var5['name'] = var9;
            var9 = {};
            var18 = var17.skuId;
            var9['sku_id'] = var18;
            var9['location_stack'] = var16;
            var19 = var14 == var7;
            var18 = undefined;
            if(var19) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = var7.cardId;
case 6:
            var9['card_id'] = var18;
            var19 = var14 == var7;
            var18 = undefined;
            if(var19) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var18 = var7.tilePosition;
case 8:
            var9['position_in_section'] = var18;
            var19 = var14 == var7;
            var18 = undefined;
            if(var19) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var18 = var7.sessionId;
case 10:
            var9['shop_session_id'] = var18;
            var9['product_sku_ids'] = var10;
            var5['properties'] = var9;
            var5 = var6.bind(var4)(var5);
            var6 = {};
            var6['product'] = var25;
            var6['variantIndex'] = var24;
            var6['analyticsLocations'] = var16;
            var6['setShouldReset'] = var3;
            var9 = var14 != var7;
            var5 = undefined;
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var7;
case 12:
            var6['shopAnalyticsContext'] = var5;
            var5 = function useHandlePreviewPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.product;
                    var _closure3_slot0 = var3;
                    var13 = var2.variantIndex;
                    var _closure3_slot1 = var13;
                    var10 = var2.analyticsLocations;
                    var _closure3_slot2 = var10;
                    var9 = var2.shopAnalyticsContext;
                    var _closure3_slot3 = var9;
                    var12 = var2.setShouldReset;
                    var _closure3_slot4 = var12;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var7 = var6[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var7);
                    var7 = var8.useCurrentUser;
                    var11 = var7.bind(var8)();
                    var _closure3_slot5 = var11;
                    var8 = _closure1_slot4;
                    var7 = var8.useCallback;
                    var4 = new Array(6);
                    var4[0] = var3;
                    var4[1] = var13;
                    var4[2] = var12;
                    var11 = var11.id;
                    var4[3] = var11;
                    var4[4] = var10;
                    var4[5] = var9;
                    var1 = function() {
                        var3 = _closure3_slot4;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot5;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var5 = true;
                        var2['isPreviewingChanges'] = var5;
                        var4 = _closure3_slot2;
                        var2['sourceAnalyticsLocations'] = var4;
                        var4 = function onClose() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openProductDetailsActionSheet;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['product'] = var5;
                            var5 = _closure3_slot1;
                            var1['initialVariantIndex'] = var5;
                            var5 = _closure3_slot2;
                            var1['analyticsLocations'] = var5;
                            var4 = _closure3_slot3;
                            var1['shopAnalyticsContext'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['onClose'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var7.bind(var8)(var1, var4);
                    var4 = var3.type;
                    var3 = 11;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.NAMEPLATE;
                    if(!(var4 === var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    return var2;
case 14:
                    return var1;
                }
            };
            var26 = var5.bind(var4)(var6);
            var6 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var25;
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var4 === var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot3;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 16:
                    return var1;
                }
            };
            var18 = var6.bind(var4)(var3, var5);
            var6 = _closure1_slot4;
            var5 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var25.skuId;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
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
            var2 = var5.bind(var6)(var2, var3);
            var2 = var25.hideBadge;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 21;
            var3 = var9[var3];
            var6 = var7.bind(var4)(var3);
            var5 = var6.useIsProfileFramesEarlyAccessPhase;
            var3 = 'ProductDetailsActionSheet';
            var3 = var5.bind(var6)(var3);
            var6 = var17.type;
            var5 = 11;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_FRAME;
            var10 = var6 === var5;
            if(!var10) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var3;
case 18:
            if(!var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = !var2;
case 20:
            var3 = _closure1_slot10;
            var9 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = var21[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var16;
            var7 = _closure1_slot12;
            var5 = 22;
            var5 = var21[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'scrollable': true, 'startExpanded': true};
            var19 = function onExpand() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0004_ip = 4; continue _fun0004 }
case 22:
                    var3 = var4.scrollToEnd;
                    var2 = {};
                    var5 = true;
                    var2['animated'] = var5;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var5['onExpand'] = var19;
            var11 = function onDismiss() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot8;
                var2 = var1.CLOSE_DETAIL;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onDismiss'] = var11;
            var5['ref'] = var8;
            var11 = _closure1_slot12;
            var8 = 23;
            var8 = var21[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.BottomSheetScrollView;
            var8 = {};
            var19 = false;
            var8['scrollsToTop'] = var19;
            var19 = var29.container;
            var8['style'] = var19;
            var8['ref'] = var13;
            var20 = _closure1_slot10;
            var19 = _closure1_slot1;
            var13 = 24;
            var13 = var21[var13];
            var19 = var19.bind(var4)(var13);
            var13 = {};
            var13['selectedProduct'] = var17;
            var21 = var29.wishlistButton;
            var13['style'] = var21;
            var21 = 'md';
            var13['size'] = var21;
            var13['onTrackPress'] = var15;
            var13 = var20.bind(var4)(var19, var13);
            var20 = new Array(6);
            var20[0] = var13;
            if(!var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var21 = _closure1_slot12;
            var19 = _closure1_slot11;
            var13 = {};
            var28 = _closure1_slot10;
            var27 = _closure1_slot7;
            var22 = {};
            var29 = var29.badgeWrapper;
            var22['style'] = var29;
            var33 = _closure1_slot10;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var29 = 25;
            var29 = var32[var29];
            var30 = var31.bind(var4)(var29);
            var29 = {'location': 'ProductDetailsActionSheet', 'disablePressable': true};
            var29 = var33.bind(var4)(var30, var29);
            var22['children'] = var29;
            var27 = var28.bind(var4)(var27, var22);
            var22 = new Array(2);
            var22[0] = var27;
            var29 = _closure1_slot10;
            var28 = _closure1_slot0;
            var27 = 26;
            var27 = var32[var27];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Spacer;
            var27 = {};
            var30 = 7;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.spacing;
            var30 = var30.PX_16;
            var27['size'] = var30;
            var27 = var29.bind(var4)(var28, var27);
            var22[1] = var27;
            var13['children'] = var22;
            var10 = var21.bind(var4)(var19, var13);
case 23:
            var20[1] = var10;
            var22 = _closure1_slot10;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 27;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var17;
            var10['handlePreviewPress'] = var26;
            var10['onTrackPress'] = var15;
            var10 = var22.bind(var4)(var21, var10);
            var20[2] = var10;
            var22 = _closure1_slot10;
            var10 = 28;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var17;
            var10['onTrackPress'] = var15;
            var10 = var22.bind(var4)(var21, var10);
            var20[3] = var10;
            var22 = _closure1_slot10;
            var10 = 29;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var25;
            var10['selectedVariantIndex'] = var24;
            var10['onVariantSelect'] = var23;
            var10 = var22.bind(var4)(var21, var10);
            var20[4] = var10;
            var23 = _closure1_slot10;
            var10 = _closure1_slot0;
            var21 = 26;
            var21 = var19[var21];
            var21 = var10.bind(var4)(var21);
            var22 = var21.Spacer;
            var21 = {};
            var24 = 7;
            var24 = var19[var24];
            var24 = var13.bind(var4)(var24);
            var24 = var24.spacing;
            var24 = var24.PX_16;
            var21['size'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[5] = var21;
            var8['children'] = var20;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var9 = 30;
            var9 = var19[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NativePaymentContextProvider;
            var9 = {};
            var20 = new Array(0);
            var9['skuIDs'] = var20;
            var9['activeSubscription'] = var14;
            var14 = _closure1_slot10;
            var12 = 31;
            var12 = var19[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['onBuy'] = var18;
            var12['product'] = var17;
            var12['analyticsLocations'] = var16;
            var12['onTrackPress'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = var4.useCallback;
    var _closure1_slot5 = var7;
    var4 = var4.useMemo;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopCtaEnum;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.Fragment;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = {};
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'flex': 1};
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'right': null, 'zIndex': 2};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['right'] = var12;
    var4['wishlistButton'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': null, 'zIndex': 2};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['left'] = var10;
    var4['badgeWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductDetailsActionSheet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var6 = var3.shopAnalyticsContext;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var6 = _closure1_slot13;
case 25:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['shopAnalyticsContext'] = var1;
            var11 = {};
            var10 = var3;
            var9 = var2;
            var10 = copyDataProperties(var11, var10, var9);
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var1['newValue'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot15;
            var5 = {};
            var11 = var5;
            var8 = copyDataProperties(var11, var10);
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();