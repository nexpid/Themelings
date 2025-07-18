// app/modules/collectibles/native/CollectiblesShopSendGift.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 84; continue _fun0001 }
 7:
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
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 81; continue _fun0001 }
 60:
                    var4 = arg3;
                    var4 = var4.bind(var3)(var2);
                    var5 = arg4;
                    var4 = false;
                    var4 = var5.bind(var3)(var4);
                    return var3;
 81:
                    return var2;
 84:
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
    var4 = native4;
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
 0:
            var2 = arg1;
            var15 = var2.product;
            var _closure2_slot0 = var15;
            var14 = var2.recipientUser;
            var _closure2_slot1 = var14;
            var29 = var2.setRecipientUser;
            var2 = _closure1_slot12;
            var4 = undefined;
            var26 = var2.bind(var4)();
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 9;
            var2 = var16[var2];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot2 = var2;
            var5 = _closure1_slot5;
            var6 = var5.useState;
            var3 = true;
            var3 = var6.bind(var5)(var3);
            var20 = _closure1_slot3;
            var18 = 2;
            var3 = var20.bind(var4)(var3, var18);
            var10 = 0;
            var11 = var3[var10];
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot3 = var3;
            var3 = var5.useState;
            var24 = false;
            var3 = var3.bind(var5)(var24);
            var3 = var20.bind(var4)(var3, var18);
            var12 = var3[var10];
            var3 = var3[var6];
            var _closure2_slot4 = var3;
            var7 = var5.useCallback;
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
            var30 = var7.bind(var5)(var2, var3);
            var7 = _closure1_slot1;
            var2 = 11;
            var2 = var16[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = var2.analyticsLocations;
            var _closure2_slot5 = var13;
            var2 = 12;
            var2 = var16[var2];
            var3 = var7.bind(var4)(var2);
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
            var9 = var5.useMemo;
            var3 = new Array(3);
            var3[0] = var13;
            var13 = var15.skuId;
            var3[1] = var13;
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
            var9 = var9.bind(var5)(var2, var3);
            var _closure2_slot7 = var9;
            var13 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var14;
            var2 = var15.skuId;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot3;
                    var1 = undefined;
                    var3 = true;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 76; continue _fun0003 }
 26:
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
 76:
                    return var1;
                }
            };
            var2 = var13.bind(var5)(var2, var3);
            var13 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var9;
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
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var13.bind(var5)(var2, var3);
            var2 = 15;
            var2 = var16[var2];
            var3 = var19.bind(var4)(var2);
            var2 = var3.useGiftStyles;
            var2 = var2.bind(var3)();
            var3 = var5.useState;
            var2 = var2[var10];
            var2 = var3.bind(var5)(var2);
            var2 = var20.bind(var4)(var2, var18);
            var27 = var2[var10];
            var _closure2_slot8 = var27;
            var25 = var2[var6];
            var2 = var5.useRef;
            var13 = null;
            var17 = var2.bind(var5)(var13);
            var _closure2_slot9 = var17;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var10);
            var3 = var20.bind(var4)(var2, var18);
            var2 = var3[var10];
            var _closure2_slot10 = var2;
            var22 = var3[var6];
            var3 = var5.useState;
            var3 = var3.bind(var5)(var4);
            var3 = var20.bind(var4)(var3, var18);
            var21 = var3[var10];
            var _closure2_slot11 = var21;
            var20 = var3[var6];
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot9;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0004_ip = 51; continue _fun0004 }
 23:
                        var3 = var4.scrollTo;
                        var2 = {};
                        var5 = _closure2_slot10;
                        var2['y'] = var5;
                        var5 = true;
                        var2['animated'] = var5;
                        var1 = var3.bind(var4)(var2);
 51:
                        return var1;
                    }
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var23 = var6.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var27;
            var2[1] = var14;
            var2[2] = var21;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot8;
                    var1['gift_style'] = var3;
                    var4 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var4;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 38; continue _fun0005 }
 29:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
 38:
                    var1['recipient_id'] = var3;
                    var2 = _closure2_slot11;
                    var1['custom_message'] = var2;
                    return var1;
                }
            };
            var10 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var26.container;
            var1['style'] = var5;
            var6 = _closure1_slot6;
            var5 = {};
            var5['ref'] = var17;
            var17 = var26.scrollView;
            var5['contentContainerStyle'] = var17;
            var5['showsVerticalScrollIndicator'] = var24;
            var8 = _closure1_slot10;
            var17 = 16;
            var17 = var16[var17];
            var17 = var19.bind(var4)(var17);
            var18 = var17.GiftBackgroundSelect;
            var17 = {};
            var17['giftStyle'] = var27;
            var17['setGiftStyle'] = var25;
            var17['withConsistentHeight'] = var24;
            var18 = var8.bind(var4)(var18, var17);
            var17 = new Array(6);
            var17[0] = var18;
            var18 = 17;
            var24 = var16[var18];
            var24 = var19.bind(var4)(var24);
            var28 = var24.Text;
            var24 = {};
            var27 = 'text-sm/semibold';
            var24['variant'] = var27;
            var25 = var26.sectionHeader;
            var24['style'] = var25;
            var25 = 18;
            var31 = var16[var25];
            var31 = var19.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var16[var25];
            var31 = var19.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.xFn72t;
            var31 = var32.bind(var33)(var31);
            var24['children'] = var31;
            var24 = var8.bind(var4)(var28, var24);
            var17[1] = var24;
            var24 = 19;
            var24 = var16[var24];
            var28 = var7.bind(var4)(var24);
            var24 = {};
            var24['selectedUser'] = var14;
            var24['onPress'] = var30;
            var24['setSelectedUser'] = var29;
            var24 = var8.bind(var4)(var28, var24);
            var17[2] = var24;
            var18 = var16[var18];
            var18 = var19.bind(var4)(var18);
            var24 = var18.Text;
            var18 = {};
            var18['variant'] = var27;
            var26 = var26.sectionHeader;
            var18['style'] = var26;
            var26 = var16[var25];
            var26 = var19.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var16[var25];
            var25 = var19.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.PpoJzs;
            var25 = var26.bind(var27)(var25);
            var18['children'] = var25;
            var18 = var8.bind(var4)(var24, var18);
            var17[3] = var18;
            var18 = 20;
            var18 = var16[var18];
            var24 = var7.bind(var4)(var18);
            var18 = {};
            var18['product'] = var15;
            var18['recipientUser'] = var14;
            var18['isValidRecipient'] = var11;
            var18 = var8.bind(var4)(var24, var18);
            var17[4] = var18;
            var18 = 21;
            var18 = var16[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.GiftCustomMessage;
            var18 = {};
            var18['onFocusMessage'] = var23;
            var18['setMessagePosition'] = var22;
            var18['customGiftMessage'] = var21;
            var18['setCustomGiftMessage'] = var20;
            var18 = var8.bind(var4)(var19, var18);
            var17[5] = var18;
            var5['children'] = var17;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 22;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['product'] = var15;
            var11 = !var11;
            if(var11) { _fun0002_ip = 990; continue _fun0002 }
 986:
            var11 = var13 == var14;
 990:
            if(var11) { _fun0002_ip = 996; continue _fun0002 }
 993:
            var11 = var12;
 996:
            var6['isPurchaseDisabled'] = var11;
            var6['giftOptions'] = var10;
            var6['baseAnalyticsFields'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopSendGift.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();