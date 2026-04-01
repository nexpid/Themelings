// app/modules/collectibles/native/CollectiblesShopSendGift.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _validateCollectiblesRecipientAndShowError() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var2);
                    var5 = var6.validateCollectiblesRecipient;
                    var4 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=54);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = arg3;
                    var4 = var4.bind(var3)(var2);
                    var5 = arg4;
                    var4 = false;
                    var4 = var5.bind(var3)(var4);
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ScrollView;
    var _closure1_slot6 = var8;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'paddingTop': null, 'alignItems': 'stretch'};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingTop'] = var13;
    var4['container'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10['paddingBottom'] = var13;
    var4['scrollView'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var10['marginTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginBottom'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingHorizontal'] = var11;
    var11 = 'capitalize';
    var10['textTransform'] = var11;
    var4['sectionHeader'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var16 = var2.product;
            var _closure2_slot0 = var16;
            var15 = var2.recipientUser;
            var _closure2_slot1 = var15;
            var25 = var2.setRecipientUser;
            var8 = var2.lockedRecipient;
            var9 = var2.giftingOrigin;
            var2 = _closure1_slot12;
            var4 = undefined;
            var28 = var2.bind(var4)();
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var2 = 9;
            var2 = var32[var2];
            var3 = var35.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var26 = true;
            var3 = var3.bind(var5)(var26);
            var21 = _closure1_slot3;
            var18 = 2;
            var3 = var21.bind(var4)(var3, var18);
            var11 = 0;
            var12 = var3[var11];
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot3 = var3;
            var3 = var5.useState;
            var19 = false;
            var3 = var3.bind(var5)(var19);
            var3 = var21.bind(var4)(var3, var18);
            var13 = var3[var11];
            var3 = var3[var6];
            var _closure2_slot4 = var3;
            var10 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure2_slot2;
                var3 = var4.navigate;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.ShopGiftScreens;
                var2 = var2.RECIPENT_SELECT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var30 = var10.bind(var5)(var2, var3);
            var3 = _closure1_slot1;
            var2 = 11;
            var2 = var32[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var14 = var2.analyticsLocations;
            var _closure2_slot5 = var14;
            var2 = 12;
            var2 = var32[var2];
            var3 = var3.bind(var4)(var2);
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.v4;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var _closure2_slot6 = var2;
            var10 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var14;
            var14 = var16.skuId;
            var3[1] = var14;
            var3[2] = var2;
            var2 = function() {
                var1 = {'is_gift': true, 'location_stack': null, 'payment_type': 'sku'};
                var3 = _closure2_slot5;
                var1['location_stack'] = var3;
                var3 = _closure2_slot0;
                var3 = var3.skuId;
                var1['sku_id'] = var3;
                var3 = _closure1_slot9;
                var1['application_id'] = var3;
                var2 = _closure2_slot6;
                var1['load_id'] = var2;
                return var1;
            };
            var10 = var10.bind(var5)(var2, var3);
            var _closure2_slot7 = var10;
            var14 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var15;
            var2 = var16.skuId;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var1 = undefined;
                    var3 = true;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure2_slot4;
                    var3 = var6.bind(var1)(var3);
                    var3 = _closure2_slot1;
                    var10 = var3.id;
                    var3 = _closure2_slot0;
                    var9 = var3.skuId;
                    var8 = _closure2_slot3;
                    var2 = function validateCollectiblesRecipientAndShowError() {
                        var1 = undefined;
                        var4 = _closure1_slot13;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var11 = undefined;
                    var7 = var6;
                    var2 = var11[var2](var10, var9, var8, var7, var6);
case 8:
                    return var1;
                }
            };
            var2 = var14.bind(var5)(var2, var3);
            var14 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 14;
                var6 = var5[var3];
                var1 = undefined;
                var9 = var4.bind(var1)(var6);
                var8 = var9.track;
                var2 = _closure1_slot8;
                var7 = var2.PAYMENT_FLOW_STARTED;
                var6 = _closure2_slot7;
                var7 = var8.bind(var9)(var7, var6);
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var3 = var2.PAYMENT_FLOW_LOADED;
                var2 = {};
                var11 = var2;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var7 = 'gift_customization';
                var6 = 'initial_step';
                var2[5] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var14.bind(var5)(var2, var3);
            var2 = 15;
            var2 = var32[var2];
            var3 = var35.bind(var4)(var2);
            var2 = var3.useGiftStyles;
            var2 = var2.bind(var3)();
            var3 = var5.useState;
            var2 = var2[var11];
            var2 = var3.bind(var5)(var2);
            var2 = var21.bind(var4)(var2, var18);
            var27 = var2[var11];
            var _closure2_slot8 = var27;
            var20 = var2[var6];
            var2 = var5.useRef;
            var14 = null;
            var17 = var2.bind(var5)(var14);
            var _closure2_slot9 = var17;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var11);
            var3 = var21.bind(var4)(var2, var18);
            var2 = var3[var11];
            var _closure2_slot10 = var2;
            var23 = var3[var6];
            var3 = var5.useState;
            var3 = var3.bind(var5)(var4);
            var3 = var21.bind(var4)(var3, var18);
            var22 = var3[var11];
            var _closure2_slot11 = var22;
            var21 = var3[var6];
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot9;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var3 = var4.scrollTo;
                        var2 = {};
                        var5 = _closure2_slot10;
                        var2['y'] = var5;
                        var5 = true;
                        var2['animated'] = var5;
                        var1 = var3.bind(var4)(var2);
case 10:
                        return var1;
                    }
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var24 = var6.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var27;
            var2[1] = var15;
            var2[2] = var22;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var1['gift_style'] = var3;
                    var4 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var4;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 12:
                    var1['recipient_id'] = var3;
                    var2 = _closure2_slot11;
                    var1['custom_message'] = var2;
                    return var1;
                }
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var28.container;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var5['ref'] = var17;
            var17 = var28.scrollView;
            var5['contentContainerStyle'] = var17;
            var5['showsVerticalScrollIndicator'] = var19;
            var31 = _closure1_slot10;
            var17 = 16;
            var17 = var32[var17];
            var17 = var35.bind(var4)(var17);
            var18 = var17.GiftBackgroundSelect;
            var17 = {};
            var17['giftStyle'] = var27;
            var17['setGiftStyle'] = var20;
            var17['withConsistentHeight'] = var19;
            var17 = var31.bind(var4)(var18, var17);
            var18 = new Array(6);
            var18[0] = var17;
            var19 = 17;
            var17 = var32[var19];
            var17 = var35.bind(var4)(var17);
            var20 = var17.Text;
            var17 = {};
            var29 = 'text-sm/semibold';
            var17['variant'] = var29;
            var27 = var28.sectionHeader;
            var17['style'] = var27;
            var27 = 18;
            var33 = var32[var27];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var32[var27];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.xFn72s;
            var32 = var33.bind(var34)(var32);
            var17['children'] = var32;
            var17 = var31.bind(var4)(var20, var17);
            var18[1] = var17;
            if(!var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            if(!(var14 == var15)) { _fun0002_ip = 16; continue _fun0002 }
case 14:
            var20 = _closure1_slot10;
            var17 = _closure1_slot1;
            var31 = _closure1_slot2;
            var8 = 20;
            var8 = var31[var8];
            var17 = var17.bind(var4)(var8);
            var8 = {};
            var8['selectedUser'] = var15;
            var8['onPress'] = var30;
            var8['setSelectedUser'] = var25;
            var8 = var20.bind(var4)(var17, var8);
            _fun0002_ip = 17; continue _fun0002;
case 16:
            var25 = _closure1_slot10;
            var20 = _closure1_slot1;
            var30 = _closure1_slot2;
            var17 = 19;
            var17 = var30[var17];
            var20 = var20.bind(var4)(var17);
            var17 = {};
            var17['user'] = var15;
            var8 = var25.bind(var4)(var20, var17);
case 17:
            var18[2] = var8;
            var8 = _closure1_slot10;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var19];
            var19 = var20.bind(var4)(var19);
            var25 = var19.Text;
            var19 = {};
            var19['variant'] = var29;
            var28 = var28.sectionHeader;
            var19['style'] = var28;
            var28 = var17[var27];
            var28 = var20.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var17[var27];
            var27 = var20.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.PpoJzt;
            var27 = var28.bind(var29)(var27);
            var19['children'] = var27;
            var19 = var8.bind(var4)(var25, var19);
            var18[3] = var19;
            var7 = _closure1_slot1;
            var19 = 21;
            var19 = var17[var19];
            var25 = var7.bind(var4)(var19);
            var19 = {};
            var19['product'] = var16;
            var19['recipientUser'] = var15;
            var19['isValidRecipient'] = var12;
            var19['isGift'] = var26;
            var19 = var8.bind(var4)(var25, var19);
            var18[4] = var19;
            var19 = 22;
            var19 = var17[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.GiftCustomMessage;
            var19 = {};
            var19['onFocusMessage'] = var24;
            var19['setMessagePosition'] = var23;
            var19['customGiftMessage'] = var22;
            var19['setCustomGiftMessage'] = var21;
            var19 = var8.bind(var4)(var20, var19);
            var18[5] = var19;
            var5['children'] = var18;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 23;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['product'] = var16;
            var12 = !var12;
            if(var12) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var12 = var14 == var15;
case 18:
            if(var12) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var12 = var13;
case 20:
            var6['isPurchaseDisabled'] = var12;
            var6['giftOptions'] = var11;
            var6['baseAnalyticsFields'] = var10;
            var6['giftingOrigin'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopSendGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();