// app/modules/collectibles/native/ProductDetailsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PreviewProfileTrigger(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.handlePreviewPress;
            var _closure2_slot0 = var7;
            var1 = var1.onTrackPress;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot17;
            var3 = var2.bind(var4)();
            var _closure2_slot2 = var3;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var9 = var5.bind(var4)(var2);
            var2 = var9.useThemeContext;
            var2 = var2.bind(var9)();
            var9 = var2.theme;
            var2 = 11;
            var2 = var10[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isThemeLight;
            var2 = var2.bind(var5)(var9);
            var5 = _closure1_slot12;
            var5 = var5.MIDNIGHT;
            var5 = var9 === var5;
            var _closure2_slot3 = var5;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.previewProfileButtonDark;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = var3.previewProfileButtonLight;
case 4:
            _closure2_slot4 = var5;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3.previewProfileButtonDarkPressed;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var2 = var3.previewProfileButtonLightPressed;
case 7:
            _closure2_slot5 = var2;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                var4 = _closure2_slot1;
                var1 = _closure1_slot9;
                var3 = var1.FULL_PROFILE_PREVIEW_BUTTON;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot0;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = function style(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.pressed;
                    var1 = _closure2_slot2;
                    var4 = var1.previewProfileButton;
                    var1 = new Array(4);
                    var1[0] = var4;
                    var4 = _closure2_slot4;
                    var1[1] = var4;
                    var4 = _closure2_slot3;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure2_slot2;
                    var4 = var5.previewProfileButtonMidnight;
case 8:
                    var1[2] = var4;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot5;
case 10:
                    var1[3] = var2;
                    return var1;
                }
            };
            var1['style'] = var6;
            var1['onPress'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var7 = var10[var5];
            var7 = var6.bind(var4)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["3Qcx6K"];
            var5 = var7.bind(var9)(var5);
            var1['accessibilityLabel'] = var5;
            var7 = _closure1_slot13;
            var5 = 13;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.EyeIcon;
            var5 = {};
            var9 = 'md';
            var5['size'] = var9;
            var9 = _closure1_slot1;
            var8 = 8;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.INTERACTIVE_ICON_DEFAULT;
            var5['color'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function ProductDetailsActionSheetInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var29 = var1.product;
            var _closure2_slot0 = var29;
            var19 = var1.initialVariantIndex;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var19 = 0;
case 12:
            var2 = var1.analyticsLocations;
            if(!(var2 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = new Array(0);
case 14:
            var _closure2_slot1 = var2;
            var25 = var1.paymentGateway;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 18;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var5 = var1.OTPACOMOrderExperiment;
            var3 = var5.useConfig;
            var1 = {};
            var7 = 'ProductDetailsActionSheetInner';
            var1['location'] = var7;
            var1 = var3.bind(var5)(var1);
            var23 = var1.enabled;
            var1 = _closure1_slot17;
            var35 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var18 = null;
            var8 = var1.bind(var3)(var18);
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var13 = var1.bind(var3)(var18);
            _closure2_slot2 = var13;
            var12 = _closure1_slot1;
            var1 = 19;
            var3 = var9[var1];
            var5 = var12.bind(var4)(var3);
            var3 = new Array(1);
            var7 = 0;
            var42 = var3;
            var41 = var2;
            var40 = 0;
            var11 = arraySpread(var42, var41, var40);
            var10 = 20;
            var10 = var9[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var3[10] = var10;
            var10 = 1;
            var11 = var11 + var10;
            var3 = var5.bind(var4)(var3);
            var20 = var3.analyticsLocations;
            var11 = _closure1_slot4;
            var5 = var11.useState;
            var3 = true;
            var5 = var5.bind(var11)(var3);
            var3 = _closure1_slot3;
            var14 = 2;
            var3 = var3.bind(var4)(var5, var14);
            var11 = var3[var7];
            var3 = var3[var10];
            _closure2_slot3 = var3;
            var15 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var29;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProductSkuIds;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var15.bind(var4)(var5, var12);
            var12 = _closure1_slot4;
            var5 = var12.useState;
            var12 = var5.bind(var12)(var19);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var12, var14);
            var28 = var5[var7];
            var27 = var5[var10];
            var5 = 21;
            var5 = var9[var5];
            var12 = var6.bind(var4)(var5);
            var5 = var12.getSelectedProduct;
            var12 = var5.bind(var12)(var29, var28);
            var5 = 22;
            var5 = var9[var5];
            var9 = var6.bind(var4)(var5);
            var6 = var9.useTrackPdpClick;
            var5 = {};
            var19 = var12.skuId;
            var5['skuId'] = var19;
            var5['productSkuIds'] = var15;
            var5['analyticsLocations'] = var20;
            var19 = var6.bind(var9)(var5);
            _closure2_slot4 = var19;
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var6, var14);
            var9 = var5[var7];
            var5 = var5[var10];
            _closure2_slot5 = var5;
            var22 = _closure1_slot4;
            var21 = var22.useState;
            var6 = var12.skuId;
            var21 = var21.bind(var22)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var21, var14);
            var22 = var6[var7];
            var21 = var6[var10];
            var6 = var12.skuId;
            if(!(var6 !== var22)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var12.skuId;
            var6 = var21.bind(var4)(var6);
            var5 = var5.bind(var4)(var4);
            var9 = undefined;
case 16:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 23;
            var5 = var22[var5];
            var6 = var21.bind(var4)(var5);
            var5 = var6.usePreviewCollectibleProduct;
            var5 = var5.bind(var6)(var12, var11, var9);
            var5 = 24;
            var5 = var22[var5];
            var6 = var21.bind(var4)(var5);
            var5 = var6.useCollectiblesAnalyticsContext;
            var9 = var5.bind(var6)();
            var6 = _closure1_slot1;
            var5 = 25;
            var5 = var22[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = 26;
            var24 = var22[var11];
            var24 = var21.bind(var4)(var24);
            var24 = var24.ImpressionTypes;
            var24 = var24.HALFSHEET;
            var5['type'] = var24;
            var11 = var22[var11];
            var11 = var21.bind(var4)(var11);
            var11 = var11.ImpressionNames;
            var11 = var11.SHOP_PRODUCT_DETAIL;
            var5['name'] = var11;
            var11 = {};
            var21 = var12.skuId;
            var11['sku_id'] = var21;
            var11['location_stack'] = var20;
            var22 = var18 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var21 = var9.cardId;
case 18:
            var11['card_id'] = var21;
            var22 = var18 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var21 = var9.tilePosition;
case 20:
            var11['position_in_section'] = var21;
            var22 = var18 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var21 = var9.sessionId;
case 22:
            var11['shop_session_id'] = var21;
            var11['product_sku_ids'] = var15;
            var5['properties'] = var11;
            var5 = var6.bind(var4)(var5);
            var6 = {};
            var6['product'] = var29;
            var6['variantIndex'] = var28;
            var6['analyticsLocations'] = var20;
            var6['setShouldReset'] = var3;
            var11 = var18 != var9;
            var5 = undefined;
            if(!var11) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var5 = var9;
case 24:
            var6['shopAnalyticsContext'] = var5;
            var5 = function useHandlePreviewPress(arg1) {
                var2 = arg1;
                var10 = var2.product;
                var _closure3_slot0 = var10;
                var9 = var2.variantIndex;
                var _closure3_slot1 = var9;
                var6 = var2.analyticsLocations;
                var _closure3_slot2 = var6;
                var5 = var2.shopAnalyticsContext;
                var _closure3_slot3 = var5;
                var8 = var2.setShouldReset;
                var _closure3_slot4 = var8;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.useCurrentUser;
                var7 = var3.bind(var4)();
                var _closure3_slot5 = var7;
                var4 = _closure1_slot4;
                var3 = var4.useCallback;
                var2 = new Array(6);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var7 = var7.id;
                var2[3] = var7;
                var2[4] = var6;
                var2[5] = var5;
                var1 = function() {
                    var3 = _closure3_slot4;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 16;
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
                        var1 = 17;
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
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var32 = var5.bind(var4)(var6);
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 27;
            var6 = var5[var6];
            var9 = var11.bind(var4)(var6);
            var6 = var9.useShopProductItems;
            var6 = var6.bind(var9)(var29);
            _closure2_slot6 = var6;
            var6 = var29.type;
            var9 = 14;
            var5 = var5[var9];
            var5 = var11.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.BUNDLE;
            var5 = var6 === var5;
            _closure2_slot7 = var5;
            var15 = _closure1_slot4;
            var11 = var15.useState;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = undefined;
                    return var2;
case 26:
                    var2 = _closure2_slot6;
                    var3 = var2.firstProfileEffect;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var3 = _closure2_slot6;
                    var3 = var3.firstAvatarDecoration;
                    if(!(var2 == var3)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var1 = _closure2_slot6;
                    var1 = var1.firstNameplate;
                    var2 = var2 != var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.CollectiblesItemType;
                    var1 = var2.NAMEPLATE;
case 32:
                    _fun0004_ip = 34; continue _fun0004;
case 30:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.CollectiblesItemType;
                    var1 = var2.AVATAR_DECORATION;
case 34:
                    _fun0004_ip = 35; continue _fun0004;
case 28:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.CollectiblesItemType;
                    var1 = var2.PROFILE_EFFECT;
case 35:
                    return var1;
                }
            };
            var11 = var11.bind(var15)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var11, var14);
            var7 = var6[var7];
            var31 = var6[var10];
            _closure2_slot8 = var31;
            var11 = _closure1_slot5;
            var10 = function(arg1) {
                var2 = arg1;
                var4 = _closure2_slot5;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var3 = _closure2_slot8;
                var2 = var2.type;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = new Array(0);
            var30 = var11.bind(var4)(var10, var6);
            if(var5) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = var12.type;
case 36:
            var26 = var18 != var7;
            if(!var26) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var9];
            var5 = var6.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_EFFECT;
            var5 = var7 === var5;
            if(var5) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var10.bind(var4)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.PROFILE_FRAME;
            var5 = var7 === var6;
case 40:
            if(var5) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var10.bind(var4)(var6);
            var6 = var6.CollectiblesItemType;
            var6 = var6.AVATAR_DECORATION;
            var5 = var7 === var6;
case 42:
            var26 = var5;
case 38:
            var6 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var29;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.CollectiblesItemType;
                    var3 = var3.BUNDLE;
                    if(!(var4 === var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var3 = _closure2_slot3;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 44:
                    return var1;
                }
            };
            var21 = var6.bind(var4)(var3, var5);
            var6 = _closure1_slot4;
            var5 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var29.skuId;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot10;
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
            var2 = var29.hideBadge;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 29;
            var3 = var5[var3];
            var10 = var7.bind(var4)(var3);
            var6 = var10.useIsProfileFramesEarlyAccessPhase;
            var3 = 'ProductDetailsActionSheet';
            var3 = var6.bind(var10)(var3);
            var6 = var12.type;
            var5 = var5[var9];
            var5 = var7.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_FRAME;
            var10 = var6 === var5;
            if(!var10) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var10 = var3;
case 46:
            if(!var10) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var10 = !var2;
case 48:
            var3 = _closure1_slot13;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = var14[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var20;
            var7 = _closure1_slot14;
            var5 = 30;
            var5 = var14[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'scrollable': true, 'startExpanded': true};
            var11 = function onExpand() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = var1.current;
                    var1 = null;
                    var2 = var1 == var4;
                    var1 = undefined;
                    if(var2) { _fun0006_ip = 14; continue _fun0006 }
case 50:
                    var3 = var4.scrollToEnd;
                    var2 = {};
                    var5 = true;
                    var2['animated'] = var5;
                    var1 = var3.bind(var4)(var2);
case 14:
                    return var1;
                }
            };
            var5['onExpand'] = var11;
            var11 = function onDismiss() {
                var3 = _closure2_slot4;
                var1 = _closure1_slot9;
                var2 = var1.CLOSE_DETAIL;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onDismiss'] = var11;
            var5['ref'] = var8;
            var11 = _closure1_slot14;
            var8 = 31;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.BottomSheetScrollView;
            var8 = {};
            var22 = false;
            var8['scrollsToTop'] = var22;
            var14 = var35.container;
            var8['style'] = var14;
            var8['ref'] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot8;
            var13 = {};
            var24 = var35.actionButtons;
            var13['style'] = var24;
            if(!var26) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var34 = _closure1_slot13;
            var33 = _closure1_slot18;
            var24 = {};
            var24['handlePreviewPress'] = var32;
            var24['onTrackPress'] = var19;
            var26 = var34.bind(var4)(var33, var24);
case 51:
            var24 = new Array(2);
            var24[0] = var26;
            var34 = _closure1_slot13;
            var33 = _closure1_slot1;
            var36 = _closure1_slot2;
            var26 = 32;
            var26 = var36[var26];
            var33 = var33.bind(var4)(var26);
            var26 = {};
            var26['selectedProduct'] = var12;
            var36 = 'md';
            var26['size'] = var36;
            var26['onTrackPress'] = var19;
            var26 = var34.bind(var4)(var33, var26);
            var24[1] = var26;
            var13['children'] = var24;
            var14 = var15.bind(var4)(var14, var13);
            var13 = new Array(6);
            var13[0] = var14;
            if(!var10) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var24 = _closure1_slot14;
            var15 = _closure1_slot15;
            var14 = {};
            var34 = _closure1_slot13;
            var33 = _closure1_slot8;
            var26 = {};
            var35 = var35.badgeWrapper;
            var26['style'] = var35;
            var39 = _closure1_slot13;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var35 = 33;
            var35 = var38[var35];
            var36 = var37.bind(var4)(var35);
            var35 = {'location': 'ProductDetailsActionSheet', 'disablePressable': true};
            var35 = var39.bind(var4)(var36, var35);
            var26['children'] = var35;
            var33 = var34.bind(var4)(var33, var26);
            var26 = new Array(2);
            var26[0] = var33;
            var35 = _closure1_slot13;
            var34 = _closure1_slot0;
            var33 = 34;
            var33 = var38[var33];
            var33 = var34.bind(var4)(var33);
            var34 = var33.Spacer;
            var33 = {};
            var36 = 8;
            var36 = var38[var36];
            var36 = var37.bind(var4)(var36);
            var36 = var36.space;
            var36 = var36.PX_16;
            var33['size'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var26[1] = var33;
            var14['children'] = var26;
            var10 = var24.bind(var4)(var15, var14);
case 53:
            var13[1] = var10;
            var26 = _closure1_slot13;
            var14 = _closure1_slot1;
            var24 = _closure1_slot2;
            var10 = 35;
            var10 = var24[var10];
            var15 = var14.bind(var4)(var10);
            var10 = {};
            var10['product'] = var12;
            var10['handlePreviewPress'] = var32;
            var10['onTrackPress'] = var19;
            var10['onBundleActiveItemTypeChange'] = var31;
            var10['onBundleActiveItemChange'] = var30;
            var10 = var26.bind(var4)(var15, var10);
            var13[2] = var10;
            var26 = _closure1_slot13;
            var10 = 36;
            var10 = var24[var10];
            var15 = var14.bind(var4)(var10);
            var10 = {};
            var10['product'] = var12;
            var10['onTrackPress'] = var19;
            var10 = var26.bind(var4)(var15, var10);
            var13[3] = var10;
            var26 = _closure1_slot13;
            var10 = 37;
            var10 = var24[var10];
            var15 = var14.bind(var4)(var10);
            var10 = {};
            var10['product'] = var29;
            var10['selectedVariantIndex'] = var28;
            var10['onVariantSelect'] = var27;
            var10 = var26.bind(var4)(var15, var10);
            var13[4] = var10;
            var27 = _closure1_slot13;
            var10 = _closure1_slot0;
            var15 = 34;
            var15 = var24[var15];
            var15 = var10.bind(var4)(var15);
            var26 = var15.Spacer;
            var15 = {};
            var28 = 8;
            var28 = var24[var28];
            var28 = var14.bind(var4)(var28);
            var28 = var28.space;
            var28 = var28.PX_16;
            var15['size'] = var28;
            var15 = var27.bind(var4)(var26, var15);
            var13[5] = var15;
            var8['children'] = var13;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot13;
            var9 = 38;
            var9 = var24[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NativePaymentContextProvider;
            var9 = {};
            var13 = new Array(0);
            var9['skuIDs'] = var13;
            var9['activeSubscription'] = var18;
            var15 = _closure1_slot13;
            var13 = 39;
            var13 = var24[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['paymentGateway'] = var25;
            if(!var23) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var24 = _closure1_slot11;
            var24 = var24.APPLE_ADVANCED_COMMERCE;
            var23 = var25 === var24;
case 55:
            var13['orderRequired'] = var23;
            var24 = var12.skuId;
            var23 = new Array(1);
            var23[0] = var24;
            var13['skuIds'] = var23;
            var13['isGift'] = var22;
            var13['activeSubscription'] = var18;
            var17 = function onOrderRetryCancellation() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 40;
                var2 = var6[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.hideActionSheet;
                var4 = _closure1_slot0;
                var1 = 17;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.PRODUCT_DETAILS_ACTION_SHEET_KEY;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13['onOrderRetryCancellation'] = var17;
            var18 = _closure1_slot13;
            var17 = _closure1_slot1;
            var22 = _closure1_slot2;
            var16 = 41;
            var16 = var22[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var16['onBuy'] = var21;
            var16['product'] = var12;
            var16['analyticsLocations'] = var20;
            var16['onTrackPress'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var13['children'] = var16;
            var12 = var12.skuId;
            var12 = var15.bind(var4)(var14, var13, var12);
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
    var _closure1_slot19 = var1;
    var1 = function ProductDetailsActionSheetWithOrderCTX(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 42;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot11;
            if(var3) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var6 = var2.GOOGLE;
            _fun0007_ip = 59; continue _fun0007;
case 57:
            var6 = var2.APPLE_ADVANCED_COMMERCE;
case 59:
            var3 = _closure1_slot13;
            var2 = _closure1_slot19;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var5 = 'paymentGateway';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var7 = var4.Pressable;
    var _closure1_slot7 = var7;
    var4 = var4.View;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopCtaEnum;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PaymentGateways;
    var _closure1_slot11 = var7;
    var4 = var4.ThemeTypes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = {};
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'flex': 1};
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'right': null, 'zIndex': 2, 'flexDirection': 'row'};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['right'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['actionButtons'] = var9;
    var9 = {'width': null, 'height': null, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'borderWidth': 1};
    var12 = 9;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.MEDIUM_BUTTON_HEIGHT;
    var9['width'] = var13;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.MEDIUM_BUTTON_HEIGHT;
    var9['height'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_SECONDARY_BORDER_DEFAULT;
    var9['borderColor'] = var12;
    var4['previewProfileButton'] = var9;
    var9 = {};
    var12 = 10;
    var13 = var6[var12];
    var16 = var5.bind(var1)(var13);
    var14 = var16.setColorOpacity;
    var15 = 'white';
    var13 = 0.72;
    var13 = var14.bind(var16)(var15, var13);
    var9['backgroundColor'] = var13;
    var4['previewProfileButtonLight'] = var9;
    var9 = {};
    var12 = var6[var12];
    var14 = var5.bind(var1)(var12);
    var13 = var14.setColorOpacity;
    var12 = 0.62;
    var12 = var13.bind(var14)(var15, var12);
    var9['backgroundColor'] = var12;
    var4['previewProfileButtonLightPressed'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var9['backgroundColor'] = var12;
    var4['previewProfileButtonDark'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
    var9['backgroundColor'] = var12;
    var4['previewProfileButtonDarkPressed'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var9['borderColor'] = var12;
    var4['previewProfileButtonMidnight'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': null, 'zIndex': 2};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['left'] = var10;
    var4['badgeWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductDetailsActionSheet(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var6 = var3.shopAnalyticsContext;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var6 = _closure1_slot16;
case 60:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['shopAnalyticsContext'] = var1;
            var11 = {};
            var10 = var3;
            var9 = var2;
            var10 = copyDataProperties(var11, var10, var9);
            var3 = _closure1_slot13;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 24;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var1['newValue'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot20;
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