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
            var2 = _closure1_slot16;
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
    var _closure1_slot17 = var1;
    var1 = function ProductDetailsActionSheetInner(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var30 = var1.product;
            var _closure2_slot0 = var30;
            var12 = var1.initialVariantIndex;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var12 = 0;
case 12:
            var5 = var1.analyticsLocations;
            if(!(var5 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = new Array(0);
case 14:
            var _closure2_slot1 = var5;
            var27 = var1.paymentGateway;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 18;
            var1 = var15[var1];
            var1 = var9.bind(var4)(var1);
            var3 = var1.OTPACOMOrderExperiment;
            var2 = var3.useConfig;
            var1 = {};
            var7 = 'ProductDetailsActionSheetInner';
            var1['location'] = var7;
            var1 = var2.bind(var3)(var1);
            var2 = var1.enabled;
            var1 = 19;
            var1 = var15[var1];
            var6 = var9.bind(var4)(var1);
            var3 = var6.useAndroidShopOrdersEnabled;
            var1 = {};
            var1['location'] = var7;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot16;
            var34 = var1.bind(var4)();
            var6 = _closure1_slot4;
            var1 = var6.useRef;
            var24 = null;
            var8 = var1.bind(var6)(var24);
            var6 = _closure1_slot4;
            var1 = var6.useRef;
            var10 = var1.bind(var6)(var24);
            _closure2_slot2 = var10;
            var17 = _closure1_slot1;
            var1 = 20;
            var6 = var15[var1];
            var7 = var17.bind(var4)(var6);
            var6 = new Array(1);
            var14 = 0;
            var40 = var6;
            var39 = var5;
            var38 = 0;
            var11 = arraySpread(var40, var39, var38);
            var13 = 21;
            var13 = var15[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var6[10] = var13;
            var13 = 1;
            var11 = var11 + var13;
            var6 = var7.bind(var4)(var6);
            var20 = var6.analyticsLocations;
            var11 = _closure1_slot4;
            var7 = var11.useState;
            var6 = true;
            var7 = var7.bind(var11)(var6);
            var6 = _closure1_slot3;
            var21 = 2;
            var6 = var6.bind(var4)(var7, var21);
            var17 = var6[var14];
            var6 = var6[var13];
            _closure2_slot3 = var6;
            var19 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var30;
            var7 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProductSkuIds;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var19.bind(var4)(var7, var11);
            var11 = _closure1_slot4;
            var7 = var11.useState;
            var11 = var7.bind(var11)(var12);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var11, var21);
            var29 = var7[var14];
            var28 = var7[var13];
            var11 = 22;
            var7 = var15[var11];
            var12 = var9.bind(var4)(var7);
            var7 = var12.getSelectedProduct;
            var12 = var7.bind(var12)(var30, var29);
            var7 = 23;
            var7 = var15[var7];
            var15 = var9.bind(var4)(var7);
            var9 = var15.useTrackPdpClick;
            var7 = {};
            var19 = var12.skuId;
            var7['skuId'] = var19;
            var7['productSkuIds'] = var23;
            var7['analyticsLocations'] = var20;
            var19 = var9.bind(var15)(var7);
            _closure2_slot4 = var19;
            var9 = _closure1_slot4;
            var7 = var9.useState;
            var9 = var7.bind(var9)(var4);
            var7 = _closure1_slot3;
            var7 = var7.bind(var4)(var9, var21);
            var15 = var7[var14];
            var7 = var7[var13];
            _closure2_slot5 = var7;
            var25 = _closure1_slot4;
            var22 = var25.useState;
            var9 = var12.skuId;
            var22 = var22.bind(var25)(var9);
            var9 = _closure1_slot3;
            var9 = var9.bind(var4)(var22, var21);
            var25 = var9[var14];
            var22 = var9[var13];
            var9 = var12.skuId;
            if(!(var9 !== var25)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var9 = var12.skuId;
            var9 = var22.bind(var4)(var9);
            var7 = var7.bind(var4)(var4);
            var15 = undefined;
case 16:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var7 = 24;
            var7 = var26[var7];
            var9 = var25.bind(var4)(var7);
            var7 = var9.usePreviewCollectibleProduct;
            var7 = var7.bind(var9)(var12, var17, var15);
            var7 = 25;
            var7 = var26[var7];
            var9 = var25.bind(var4)(var7);
            var7 = var9.useCollectiblesAnalyticsContext;
            var17 = var7.bind(var9)();
            var9 = _closure1_slot1;
            var7 = 26;
            var7 = var26[var7];
            var9 = var9.bind(var4)(var7);
            var7 = {};
            var22 = 27;
            var31 = var26[var22];
            var31 = var25.bind(var4)(var31);
            var31 = var31.ImpressionTypes;
            var31 = var31.HALFSHEET;
            var7['type'] = var31;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.ImpressionNames;
            var22 = var22.SHOP_PRODUCT_DETAIL;
            var7['name'] = var22;
            var22 = {};
            var25 = var12.skuId;
            var22['sku_id'] = var25;
            var22['location_stack'] = var20;
            var26 = var24 == var17;
            var25 = undefined;
            if(var26) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var25 = var17.cardId;
case 18:
            var22['card_id'] = var25;
            var26 = var24 == var17;
            var25 = undefined;
            if(var26) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var25 = var17.tilePosition;
case 20:
            var22['position_in_section'] = var25;
            var26 = var24 == var17;
            var25 = undefined;
            if(var26) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var25 = var17.sessionId;
case 22:
            var22['shop_session_id'] = var25;
            var22['product_sku_ids'] = var23;
            var7['properties'] = var22;
            var7 = var9.bind(var4)(var7);
            var9 = {};
            var9['product'] = var30;
            var9['variantIndex'] = var29;
            var9['analyticsLocations'] = var20;
            var9['setShouldReset'] = var6;
            var22 = var24 != var17;
            var7 = undefined;
            if(!var22) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var7 = var17;
case 24:
            var9['shopAnalyticsContext'] = var7;
            var7 = function useHandlePreviewPress(arg1) {
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
            var33 = var7.bind(var4)(var9);
            var17 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 28;
            var9 = var7[var9];
            var22 = var17.bind(var4)(var9);
            var9 = var22.useShopProductItems;
            var9 = var9.bind(var22)(var30);
            _closure2_slot6 = var9;
            var9 = var30.type;
            var22 = 14;
            var7 = var7[var22];
            var7 = var17.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.BUNDLE;
            var7 = var9 === var7;
            _closure2_slot7 = var7;
            var23 = _closure1_slot4;
            var17 = var23.useState;
            var9 = function() {
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
            var17 = var17.bind(var23)(var9);
            var9 = _closure1_slot3;
            var9 = var9.bind(var4)(var17, var21);
            var14 = var9[var14];
            var32 = var9[var13];
            _closure2_slot8 = var32;
            var17 = _closure1_slot5;
            var13 = function(arg1) {
                var2 = arg1;
                var4 = _closure2_slot5;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var3 = _closure2_slot8;
                var2 = var2.type;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var31 = var17.bind(var4)(var13, var9);
            if(var7) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var14 = var12.type;
case 36:
            var17 = var24 != var14;
            if(!var17) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var22];
            var9 = var13.bind(var4)(var9);
            var9 = var9.CollectiblesItemType;
            var9 = var9.PROFILE_EFFECT;
            var9 = var14 === var9;
            if(var9) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var21 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var22];
            var13 = var21.bind(var4)(var13);
            var13 = var13.CollectiblesItemType;
            var13 = var13.PROFILE_FRAME;
            var9 = var14 === var13;
case 40:
            if(var9) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var21 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var22];
            var13 = var21.bind(var4)(var13);
            var13 = var13.CollectiblesItemType;
            var13 = var13.AVATAR_DECORATION;
            var9 = var14 === var13;
case 42:
            var17 = var9;
case 38:
            var13 = _closure1_slot5;
            var9 = new Array(2);
            var9[0] = var30;
            var9[1] = var6;
            var6 = function() {
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
            var21 = var13.bind(var4)(var6, var9);
            var13 = _closure1_slot4;
            var9 = var13.useEffect;
            var6 = new Array(2);
            var6[0] = var5;
            var5 = var30.skuId;
            var6[1] = var5;
            var5 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
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
            var5 = var9.bind(var13)(var5, var6);
            var6 = var30.hideBadge;
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 30;
            var9 = var5[var9];
            var23 = var14.bind(var4)(var9);
            var13 = var23.useIsProfileFramesEarlyAccessPhase;
            var9 = 'ProductDetailsActionSheet';
            var9 = var13.bind(var23)(var9);
            var13 = var12.type;
            var5 = var5[var22];
            var5 = var14.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_FRAME;
            var5 = var13 === var5;
            if(!var5) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var5 = var9;
case 46:
            if(!var5) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var5 = !var6;
case 48:
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 10;
            var9 = var22[var9];
            var14 = var13.bind(var4)(var9);
            var9 = var14.useThemeContext;
            var9 = var9.bind(var14)();
            var14 = var9.theme;
            var9 = 11;
            var9 = var22[var9];
            var13 = var13.bind(var4)(var9);
            var9 = var13.isThemeDark;
            var9 = var9.bind(var13)(var14);
            var13 = var12;
            if(!var7) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var13 = var12;
            if(!(var24 != var15)) { _fun0003_ip = 50; continue _fun0003 }
case 52:
            var7 = {};
            var14 = var15.skuId;
            var7['skuId'] = var14;
            var14 = var15.type;
            var7['type'] = var14;
            var14 = new Array(1);
            var14[0] = var15;
            var7['items'] = var14;
            var13 = var7;
case 50:
            if(var5) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var5 = var30.badgeOverride;
            var5 = var24 != var5;
            var22 = null;
            if(var5) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isDynamicProduct;
            var5 = var5.bind(var7)(var13);
            if(!var5) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            if(var6) { _fun0003_ip = 57; continue _fun0003 }
case 59:
            var13 = _closure1_slot13;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var5 = 32;
            var5 = var37[var5];
            var5 = var36.bind(var4)(var5);
            var7 = var5.DynamicBadgeTooltip;
            var5 = {};
            var25 = 12;
            var14 = var37[var25];
            var14 = var36.bind(var4)(var14);
            var23 = var14.intl;
            var15 = var23.string;
            var14 = var37[var25];
            var14 = var36.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["+drfVi"];
            var14 = var15.bind(var23)(var14);
            var5['accessibilityLabel'] = var14;
            var23 = _closure1_slot13;
            var14 = 33;
            var14 = var37[var14];
            var14 = var36.bind(var4)(var14);
            var15 = var14.IconTextBadge;
            var14 = {};
            var26 = 34;
            var26 = var37[var26];
            var26 = var36.bind(var4)(var26);
            var26 = var26.DiceIcon;
            var14['icon'] = var26;
            var26 = var37[var25];
            var26 = var36.bind(var4)(var26);
            var35 = var26.intl;
            var26 = var35.string;
            var25 = var37[var25];
            var25 = var36.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["+drfVi"];
            var25 = var26.bind(var35)(var25);
            var14['label'] = var25;
            var14['isDark'] = var9;
            var14 = var23.bind(var4)(var15, var14);
            var5['children'] = var14;
            var22 = var13.bind(var4)(var7, var5);
            _fun0003_ip = 55; continue _fun0003;
case 57:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var7 = var7.bind(var4)(var5);
            var5 = var7.isOrbsExclusiveProduct;
            var5 = var5.bind(var7)(var12);
            if(!var5) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var5 = !var6;
case 60:
            var22 = null;
            if(!var5) { _fun0003_ip = 55; continue _fun0003 }
case 62:
            var7 = _closure1_slot13;
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var5 = 33;
            var5 = var23[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.IconTextBadge;
            var5 = {};
            var11 = 35;
            var11 = var23[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.OrbsIcon;
            var5['icon'] = var11;
            var11 = 12;
            var13 = var23[var11];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var23[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11["0TmQRG"];
            var11 = var13.bind(var14)(var11);
            var5['label'] = var11;
            var5['isDark'] = var9;
            var22 = var7.bind(var4)(var6, var5);
            _fun0003_ip = 55; continue _fun0003;
case 53:
            var7 = _closure1_slot13;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 31;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'location': 'ProductDetailsActionSheet', 'disablePressable': true};
            var22 = var7.bind(var4)(var6, var5);
case 55:
            var5 = _closure1_slot11;
            var5 = var5.APPLE_ADVANCED_COMMERCE;
            var26 = var27 === var5;
            if(!var26) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var26 = var2;
case 63:
            if(var26) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var2 = _closure1_slot11;
            var2 = var2.GOOGLE;
            var2 = var27 === var2;
            if(!var2) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var2 = var3;
case 67:
            var26 = var2;
case 65:
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 36;
            var2 = var13[var2];
            var2 = var3.bind(var4)(var2);
            var23 = var2.bind(var4)(var12);
            var3 = _closure1_slot13;
            var9 = _closure1_slot0;
            var1 = var13[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var20;
            var7 = _closure1_slot14;
            var5 = 37;
            var5 = var13[var5];
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
case 69:
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
            var8 = 38;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.BottomSheetScrollView;
            var8 = {};
            var25 = false;
            var8['scrollsToTop'] = var25;
            var13 = var34.container;
            var8['style'] = var13;
            var8['ref'] = var10;
            var14 = _closure1_slot14;
            var13 = _closure1_slot8;
            var10 = {};
            var15 = var34.actionButtons;
            var10['style'] = var15;
            if(!var17) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var36 = _closure1_slot13;
            var35 = _closure1_slot17;
            var15 = {};
            var15['handlePreviewPress'] = var33;
            var15['onTrackPress'] = var19;
            var17 = var36.bind(var4)(var35, var15);
case 70:
            var15 = new Array(2);
            var15[0] = var17;
            var36 = _closure1_slot13;
            var35 = _closure1_slot1;
            var37 = _closure1_slot2;
            var17 = 39;
            var17 = var37[var17];
            var35 = var35.bind(var4)(var17);
            var17 = {};
            var17['selectedProduct'] = var12;
            var37 = 'md';
            var17['size'] = var37;
            var17['onTrackPress'] = var19;
            var17 = var36.bind(var4)(var35, var17);
            var15[1] = var17;
            var10['children'] = var15;
            var10 = var14.bind(var4)(var13, var10);
            var13 = new Array(6);
            var13[0] = var10;
            var10 = var24 != var22;
            if(!var10) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var17 = _closure1_slot13;
            var15 = _closure1_slot8;
            var14 = {};
            var34 = var34.badgeWrapper;
            var14['style'] = var34;
            var14['children'] = var22;
            var10 = var17.bind(var4)(var15, var14);
case 72:
            var13[1] = var10;
            var15 = _closure1_slot13;
            var17 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 40;
            var10 = var22[var10];
            var14 = var17.bind(var4)(var10);
            var10 = {};
            var10['product'] = var12;
            var10['handlePreviewPress'] = var33;
            var10['onTrackPress'] = var19;
            var10['onBundleActiveItemTypeChange'] = var32;
            var10['onBundleActiveItemChange'] = var31;
            var10 = var15.bind(var4)(var14, var10);
            var13[2] = var10;
            var15 = _closure1_slot13;
            var10 = 41;
            var10 = var22[var10];
            var14 = var17.bind(var4)(var10);
            var10 = {};
            var10['product'] = var12;
            var10['onTrackPress'] = var19;
            var10 = var15.bind(var4)(var14, var10);
            var13[3] = var10;
            var15 = _closure1_slot13;
            var10 = 42;
            var10 = var22[var10];
            var14 = var17.bind(var4)(var10);
            var10 = {};
            var10['product'] = var30;
            var10['selectedVariantIndex'] = var29;
            var10['onVariantSelect'] = var28;
            var10 = var15.bind(var4)(var14, var10);
            var13[4] = var10;
            var28 = _closure1_slot13;
            var10 = _closure1_slot0;
            var14 = 43;
            var14 = var22[var14];
            var14 = var10.bind(var4)(var14);
            var15 = var14.Spacer;
            var14 = {};
            var29 = 8;
            var29 = var22[var29];
            var29 = var17.bind(var4)(var29);
            var29 = var29.space;
            var29 = var29.PX_16;
            var14['size'] = var29;
            var14 = var28.bind(var4)(var15, var14);
            var13[5] = var14;
            var8['children'] = var13;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot13;
            var9 = 44;
            var9 = var22[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NativePaymentContextProvider;
            var9 = {};
            var13 = new Array(0);
            var9['skuIDs'] = var13;
            var9['activeSubscription'] = var24;
            var15 = _closure1_slot13;
            var13 = 45;
            var13 = var22[var13];
            var14 = var17.bind(var4)(var13);
            var13 = {};
            var13['paymentGateway'] = var27;
            var13['orderRequired'] = var26;
            var27 = var12.skuId;
            var26 = new Array(1);
            var26[0] = var27;
            var13['skuIds'] = var26;
            var13['isGift'] = var25;
            var13['activeSubscription'] = var24;
            var13['initialExternalGatewayFacet'] = var23;
            var18 = function onOrderRetryCancellation() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 46;
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
            var13['onOrderRetryCancellation'] = var18;
            var18 = _closure1_slot13;
            var16 = 47;
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
    var _closure1_slot18 = var1;
    var1 = function ProductDetailsActionSheetWithOrderCTX(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 48;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot11;
            if(var3) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var6 = var2.GOOGLE;
            _fun0007_ip = 76; continue _fun0007;
case 74:
            var6 = var2.APPLE_ADVANCED_COMMERCE;
case 76:
            var3 = _closure1_slot13;
            var2 = _closure1_slot18;
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
    var _closure1_slot19 = var1;
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
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = {};
    var _closure1_slot15 = var4;
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
    var _closure1_slot16 = var4;
    var4 = 49;
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
            if(!(var6 === var4)) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var6 = _closure1_slot15;
case 77:
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
            var1 = 25;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var1['newValue'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot19;
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