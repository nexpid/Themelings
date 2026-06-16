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
            var5 = _closure1_slot11;
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
            var3 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
            var25 = var1.product;
            var _closure2_slot0 = var25;
            var15 = var1.initialVariantIndex;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var15 = 0;
case 12:
            var2 = var1.analyticsLocations;
            if(!(var2 === var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = new Array(0);
case 14:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var1 = _closure1_slot16;
            var31 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var14 = null;
            var8 = var1.bind(var3)(var14);
            var3 = _closure1_slot4;
            var1 = var3.useRef;
            var13 = var1.bind(var3)(var14);
            _closure2_slot2 = var13;
            var16 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 18;
            var3 = var9[var1];
            var5 = var16.bind(var4)(var3);
            var3 = new Array(1);
            var7 = 0;
            var38 = var3;
            var37 = var2;
            var36 = 0;
            var6 = arraySpread(var38, var37, var36);
            var10 = 19;
            var10 = var9[var10];
            var10 = var16.bind(var4)(var10);
            var10 = var10.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
            var3[5] = var10;
            var10 = 1;
            var6 = var6 + var10;
            var3 = var5.bind(var4)(var3);
            var16 = var3.analyticsLocations;
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var3 = true;
            var5 = var5.bind(var6)(var3);
            var3 = _closure1_slot3;
            var19 = 2;
            var3 = var3.bind(var4)(var5, var19);
            var18 = var3[var7];
            var3 = var3[var10];
            _closure2_slot3 = var3;
            var17 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var25;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getProductSkuIds;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var17.bind(var4)(var5, var6);
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var6 = var5.bind(var6)(var15);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var6, var19);
            var24 = var5[var7];
            var23 = var5[var10];
            var6 = _closure1_slot0;
            var5 = 20;
            var5 = var9[var5];
            var15 = var6.bind(var4)(var5);
            var5 = var15.getSelectedProduct;
            var17 = var5.bind(var15)(var25, var24);
            var5 = 21;
            var5 = var9[var5];
            var9 = var6.bind(var4)(var5);
            var6 = var9.useTrackPdpClick;
            var5 = {};
            var15 = var17.skuId;
            var5['skuId'] = var15;
            var5['productSkuIds'] = var20;
            var5['analyticsLocations'] = var16;
            var15 = var6.bind(var9)(var5);
            _closure2_slot4 = var15;
            var6 = _closure1_slot4;
            var5 = var6.useState;
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot3;
            var5 = var5.bind(var4)(var6, var19);
            var9 = var5[var7];
            var5 = var5[var10];
            _closure2_slot5 = var5;
            var22 = _closure1_slot4;
            var21 = var22.useState;
            var6 = var17.skuId;
            var21 = var21.bind(var22)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var21, var19);
            var22 = var6[var7];
            var21 = var6[var10];
            var6 = var17.skuId;
            if(!(var6 !== var22)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = var17.skuId;
            var6 = var21.bind(var4)(var6);
            var5 = var5.bind(var4)(var4);
            var9 = undefined;
case 16:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 22;
            var5 = var22[var5];
            var6 = var21.bind(var4)(var5);
            var5 = var6.usePreviewCollectibleProduct;
            var5 = var5.bind(var6)(var17, var18, var9);
            var5 = 23;
            var5 = var22[var5];
            var6 = var21.bind(var4)(var5);
            var5 = var6.useCollectiblesAnalyticsContext;
            var9 = var5.bind(var6)();
            var6 = _closure1_slot1;
            var5 = 24;
            var5 = var22[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var18 = 25;
            var26 = var22[var18];
            var26 = var21.bind(var4)(var26);
            var26 = var26.ImpressionTypes;
            var26 = var26.HALFSHEET;
            var5['type'] = var26;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.ImpressionNames;
            var18 = var18.SHOP_PRODUCT_DETAIL;
            var5['name'] = var18;
            var18 = {};
            var21 = var17.skuId;
            var18['sku_id'] = var21;
            var18['location_stack'] = var16;
            var22 = var14 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var21 = var9.cardId;
case 18:
            var18['card_id'] = var21;
            var22 = var14 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var21 = var9.tilePosition;
case 20:
            var18['position_in_section'] = var21;
            var22 = var14 == var9;
            var21 = undefined;
            if(var22) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var21 = var9.sessionId;
case 22:
            var18['shop_session_id'] = var21;
            var18['product_sku_ids'] = var20;
            var5['properties'] = var18;
            var5 = var6.bind(var4)(var5);
            var6 = {};
            var6['product'] = var25;
            var6['variantIndex'] = var24;
            var6['analyticsLocations'] = var16;
            var6['setShouldReset'] = var3;
            var18 = var14 != var9;
            var5 = undefined;
            if(!var18) { _fun0003_ip = 24; continue _fun0003 }
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
            var28 = var5.bind(var4)(var6);
            var18 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 26;
            var6 = var5[var6];
            var9 = var18.bind(var4)(var6);
            var6 = var9.useShopProductItems;
            var6 = var6.bind(var9)(var25);
            _closure2_slot6 = var6;
            var6 = var25.type;
            var9 = 14;
            var5 = var5[var9];
            var5 = var18.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.BUNDLE;
            var5 = var6 === var5;
            _closure2_slot7 = var5;
            var20 = _closure1_slot4;
            var18 = var20.useState;
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
            var18 = var18.bind(var20)(var6);
            var6 = _closure1_slot3;
            var6 = var6.bind(var4)(var18, var19);
            var7 = var6[var7];
            var27 = var6[var10];
            _closure2_slot8 = var27;
            var18 = _closure1_slot5;
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
            var26 = var18.bind(var4)(var10, var6);
            if(var5) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var7 = var17.type;
case 36:
            var22 = var14 != var7;
            if(!var22) { _fun0003_ip = 38; continue _fun0003 }
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
            var22 = var5;
case 38:
            var6 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var25;
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
                var1 = 27;
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
            var2 = var25.hideBadge;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 28;
            var3 = var5[var3];
            var10 = var7.bind(var4)(var3);
            var6 = var10.useIsProfileFramesEarlyAccessPhase;
            var3 = 'ProductDetailsActionSheet';
            var3 = var6.bind(var10)(var3);
            var6 = var17.type;
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
            var3 = _closure1_slot12;
            var9 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = var19[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var16;
            var7 = _closure1_slot13;
            var5 = 29;
            var5 = var19[var5];
            var5 = var9.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'scrollable': true, 'startExpanded': true};
            var20 = function onExpand() {
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
            var5['onExpand'] = var20;
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
            var11 = _closure1_slot13;
            var8 = 30;
            var8 = var19[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.BottomSheetScrollView;
            var8 = {};
            var19 = false;
            var8['scrollsToTop'] = var19;
            var19 = var31.container;
            var8['style'] = var19;
            var8['ref'] = var13;
            var20 = _closure1_slot13;
            var19 = _closure1_slot8;
            var13 = {};
            var21 = var31.actionButtons;
            var13['style'] = var21;
            if(!var22) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var30 = _closure1_slot12;
            var29 = _closure1_slot17;
            var21 = {};
            var21['handlePreviewPress'] = var28;
            var21['onTrackPress'] = var15;
            var22 = var30.bind(var4)(var29, var21);
case 51:
            var21 = new Array(2);
            var21[0] = var22;
            var30 = _closure1_slot12;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 31;
            var22 = var32[var22];
            var29 = var29.bind(var4)(var22);
            var22 = {};
            var22['selectedProduct'] = var17;
            var32 = 'md';
            var22['size'] = var32;
            var22['onTrackPress'] = var15;
            var22 = var30.bind(var4)(var29, var22);
            var21[1] = var22;
            var13['children'] = var21;
            var13 = var20.bind(var4)(var19, var13);
            var20 = new Array(6);
            var20[0] = var13;
            if(!var10) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var21 = _closure1_slot13;
            var19 = _closure1_slot14;
            var13 = {};
            var30 = _closure1_slot12;
            var29 = _closure1_slot8;
            var22 = {};
            var31 = var31.badgeWrapper;
            var22['style'] = var31;
            var35 = _closure1_slot12;
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var31 = 32;
            var31 = var34[var31];
            var32 = var33.bind(var4)(var31);
            var31 = {'location': 'ProductDetailsActionSheet', 'disablePressable': true};
            var31 = var35.bind(var4)(var32, var31);
            var22['children'] = var31;
            var29 = var30.bind(var4)(var29, var22);
            var22 = new Array(2);
            var22[0] = var29;
            var31 = _closure1_slot12;
            var30 = _closure1_slot0;
            var29 = 33;
            var29 = var34[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.Spacer;
            var29 = {};
            var32 = 8;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.space;
            var32 = var32.PX_16;
            var29['size'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var22[1] = var29;
            var13['children'] = var22;
            var10 = var21.bind(var4)(var19, var13);
case 53:
            var20[1] = var10;
            var22 = _closure1_slot12;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 34;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var17;
            var10['handlePreviewPress'] = var28;
            var10['onTrackPress'] = var15;
            var10['onBundleActiveItemTypeChange'] = var27;
            var10['onBundleActiveItemChange'] = var26;
            var10 = var22.bind(var4)(var21, var10);
            var20[2] = var10;
            var22 = _closure1_slot12;
            var10 = 35;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var17;
            var10['onTrackPress'] = var15;
            var10 = var22.bind(var4)(var21, var10);
            var20[3] = var10;
            var22 = _closure1_slot12;
            var10 = 36;
            var10 = var19[var10];
            var21 = var13.bind(var4)(var10);
            var10 = {};
            var10['product'] = var25;
            var10['selectedVariantIndex'] = var24;
            var10['onVariantSelect'] = var23;
            var10 = var22.bind(var4)(var21, var10);
            var20[4] = var10;
            var23 = _closure1_slot12;
            var10 = _closure1_slot0;
            var21 = 33;
            var21 = var19[var21];
            var21 = var10.bind(var4)(var21);
            var22 = var21.Spacer;
            var21 = {};
            var24 = 8;
            var24 = var19[var24];
            var24 = var13.bind(var4)(var24);
            var24 = var24.space;
            var24 = var24.PX_16;
            var21['size'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[5] = var21;
            var8['children'] = var20;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot12;
            var9 = 37;
            var9 = var19[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.NativePaymentContextProvider;
            var9 = {};
            var20 = new Array(0);
            var9['skuIDs'] = var20;
            var9['activeSubscription'] = var14;
            var14 = _closure1_slot12;
            var12 = 38;
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
    var _closure1_slot18 = var1;
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
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
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
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductDetailsActionSheet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var6 = var3.shopAnalyticsContext;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var6 = _closure1_slot15;
case 55:
            var1 = null;
            var2 = Object.create(var1);
            var1 = 0;
            var2['shopAnalyticsContext'] = var1;
            var11 = {};
            var10 = var3;
            var9 = var2;
            var10 = copyDataProperties(var11, var10, var9);
            var3 = _closure1_slot12;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 23;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var1['newValue'] = var6;
            var7 = _closure1_slot12;
            var6 = _closure1_slot18;
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