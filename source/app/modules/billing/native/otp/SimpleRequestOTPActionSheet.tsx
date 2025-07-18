// app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsxs;
    var _closure1_slot11 = var8;
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'PaymentFlowTest.android';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot13 = var4;
    var4 = function GiftPurchaseSKUView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.selectedSkuId;
            var _closure2_slot0 = var16;
            var11 = var1.giftRecipientId;
            var13 = var1.giftMessage;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var20 = var1.bind(var4)();
            var19 = _closure1_slot5;
            var2 = var19.useState;
            var1 = false;
            var2 = var2.bind(var19)(var1);
            var1 = _closure1_slot4;
            var17 = 2;
            var1 = var1.bind(var4)(var2, var17);
            var6 = 0;
            var2 = var1[var6];
            var _closure2_slot1 = var2;
            var5 = 1;
            var1 = var1[var5];
            var _closure2_slot2 = var1;
            var7 = _closure1_slot7;
            var1 = var7.getCurrentUser;
            var8 = var1.bind(var7)();
            var _closure2_slot3 = var8;
            var7 = var19.useRef;
            var1 = {};
            var1 = var7.bind(var19)(var1);
            var _closure2_slot4 = var1;
            var9 = _closure1_slot0;
            var1 = 11;
            var1 = var15[var1];
            var7 = var9.bind(var4)(var1);
            var1 = var7.useNativeGiftContext;
            var1 = var1.bind(var7)();
            var14 = var1.giftStyle;
            var12 = 12;
            var1 = var15[var12];
            var21 = var9.bind(var4)(var1);
            var18 = var21.useStateFromStores;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var18.bind(var21)(var7, var1);
            var1 = 13;
            var1 = var15[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useFetchCollectiblesProduct;
            var9 = var1.bind(var9)(var16);
            var1 = var9.product;
            var _closure2_slot5 = var1;
            var15 = var9.isFetching;
            var21 = var19.useEffect;
            var18 = new Array(1);
            var18[0] = var16;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 53; continue _fun0002 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var21.bind(var19)(var9, var18);
            var18 = var19.useMemo;
            var9 = new Array(3);
            var9[0] = var1;
            var9[1] = var8;
            var9[2] = var16;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 170; continue _fun0003 }
 16:
                    var3 = _closure2_slot5;
                    var3 = var3.googleSkuIds;
                    if(!(var2 != var3)) { _fun0003_ip = 170; continue _fun0003 }
 33:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 15;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.isPremium;
                    var5 = _closure2_slot3;
                    var4 = _closure1_slot10;
                    var4 = var4.TIER_2;
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = _closure2_slot5;
                    var5 = var5.googleSkuIds;
                    var3 = _closure1_slot9;
                    if(var4) { _fun0003_ip = 113; continue _fun0003 }
 101:
                    var4 = var3.MOBILE;
                    var4 = var5[var4];
                    _fun0003_ip = 123; continue _fun0003;
 113:
                    var3 = var3.MOBILE_PREMIUM_TIER_2;
                    var4 = var5[var3];
 123:
                    if(!(var2 != var4)) { _fun0003_ip = 157; continue _fun0003 }
 127:
                    var2 = global;
                    var5 = var2.Object;
                    var3 = var5.values;
                    var2 = _closure2_slot5;
                    var2 = var2.googleSkuIds;
                    var2 = var3.bind(var5)(var2);
                    _fun0003_ip = 168; continue _fun0003;
 157:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
 168:
                    return var2;
 170:
                    var3 = _closure1_slot13;
                    var2 = var3.warn;
                    var5 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'No googleSkuIds available for product: ';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    return var1;
                }
            };
            var21 = var18.bind(var19)(var8, var9);
            var _closure2_slot6 = var21;
            var18 = var19.useMemo;
            var9 = new Array(1);
            var9[0] = var21;
            var8 = function() {
                var2 = _closure2_slot6;
                var1 = var2.sort;
                var3 = var1.bind(var2)();
                var2 = var3.join;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var18.bind(var19)(var8, var9);
            var _closure2_slot7 = var8;
            var18 = var19.useEffect;
            var9 = new Array(3);
            var9[0] = var21;
            var9[1] = var2;
            var9[2] = var8;
            var8 = function() {
                var2 = function _loadGoogleSkus() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 218; continue _fun0004 }
 10:
                                var3 = _closure2_slot7;
                                var6 = null;
                                if(!(var6 != var3)) { _fun0004_ip = 46; continue _fun0004 }
 23:
                                var3 = _closure2_slot4;
                                var4 = var3.current;
                                var3 = _closure2_slot7;
                                var3 = var4[var3];
                                if(var3) { _fun0004_ip = 213; continue _fun0004 }
 46:
                                var3 = _closure2_slot6;
                                var4 = var3.length;
                                var3 = 0;
                                if(!(var3 !== var4)) { _fun0004_ip = 213; continue _fun0004 }
 64:
                                var3 = _closure2_slot1;
                                if(var3) { _fun0004_ip = 213; continue _fun0004 }
 74:
                                var3 = _closure2_slot2;
                                var4 = undefined;
                                var7 = true;
                                var3 = var3.bind(var4)(var7);
 87: // try_start_0
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 16;
                                var3 = var8[var3];
                                var8 = var5.bind(var4)(var3);
                                var5 = var8.loadInAppSkus;
                                var3 = _closure2_slot6;
                                var3 = var5.bind(var8)(var3);
                                SaveGenerator(address=129);
 127:
                                return var3;
 129:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0004_ip = 173; continue _fun0004 }
 135:
                                var5 = _closure2_slot7;
                                if(!(var6 != var5)) { _fun0004_ip = 160; continue _fun0004 }
 143:
                                var5 = _closure2_slot4;
                                var6 = var5.current;
                                var5 = _closure2_slot7;
                                var6[var5] = var7;
 160:
                                var6 = _closure2_slot2;
                                var5 = false;
                                var5 = var6.bind(var4)(var5);
 171: // try_end0
                                _fun0004_ip = 213; continue _fun0004;
 173:
                                return var3;
 176: // catch_target0
                                CatchBlockStart(arg_register=6);
                                var6 = _closure1_slot13;
                                var5 = var6.error;
                                var3 = 'Unable to fetch product IDs from Google Play store:';
                                var3 = var5.bind(var6)(var3, var7);
                                var3 = _closure2_slot2;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
 213:
                                var2 = undefined;
                                return var2;
 218:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function loadGoogleSkus() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var8 = var18.bind(var19)(var8, var9);
            var8 = null;
            var18 = var1;
            if(!(var8 == var18)) { _fun0001_ip = 410; continue _fun0001 }
 393:
            var9 = {};
            var9['skuId'] = var16;
            var16 = {};
            var9['googleSkuIds'] = var16;
            var18 = var9;
 410:
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 17;
            var9 = var19[var9];
            var16 = var16.bind(var4)(var9);
            var9 = {};
            var9['product'] = var18;
            var18 = function onPurchaseComplete() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var9['onPurchaseComplete'] = var18;
            var18 = function onPurchaseError() {
                var3 = _closure1_slot13;
                var2 = var3.error;
                var1 = 'Purchase error occurred';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9['onPurchaseError'] = var18;
            var18 = function onPurchasePending() {
                var3 = _closure1_slot13;
                var2 = var3.info;
                var1 = 'Purchase is pending';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9['onPurchasePending'] = var18;
            var18 = {};
            var19 = true;
            var18['isGift'] = var19;
            var19 = {};
            var19['recipient_id'] = var11;
            var19['custom_message'] = var13;
            var19['gift_style'] = var14;
            var18['options'] = var19;
            var9['giftParams'] = var18;
            var9 = var16.bind(var4)(var9);
            _closure2_slot8 = var9;
            var9 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 413; continue _fun0005 }
 10: // try_start_0
                            var2 = _closure2_slot5;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0005_ip = 186; continue _fun0005 }
 26:
                            var2 = _closure2_slot5;
                            var2 = var2.googleSkuIds;
                            if(!(var4 != var2)) { _fun0005_ip = 83; continue _fun0005 }
 40:
                            var2 = _closure2_slot6;
                            var4 = var2.length;
                            var2 = 0;
                            if(!(var2 !== var4)) { _fun0005_ip = 83; continue _fun0005 }
 55:
                            var4 = _closure2_slot8;
                            var2 = undefined;
                            var2 = var4.bind(var2)();
                            SaveGenerator(address=69);
 67:
                            return var2;
 69:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 80; continue _fun0005 }
 75: // try_end0
                            _fun0005_ip = 408; continue _fun0005;
 80:
                            return var2;
 83: // try_start_1
                            var5 = _closure1_slot13;
                            var4 = var5.error;
                            var3 = _closure2_slot5;
                            var8 = var3.skuId;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var3 = 'No Google SKU IDs available for product ';
                            var3 = var7.bind(var3)(var8);
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.show;
                            var2 = {'title': 'Product Not Available', 'body': 'This product is not available for purchase on Google Play.'};
                            var2 = var3.bind(var4)(var2);
 181: // try_end1
                            var2 = undefined;
                            return var2;
 186: // try_start_2
                            var5 = _closure1_slot13;
                            var4 = var5.error;
                            var3 = 'Cannot proceed with purchase: collectibleProduct is undefined';
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.show;
                            var2 = {'title': 'Product Not Found', 'body': 'The product information could not be loaded. Please try again.'};
                            var2 = var3.bind(var4)(var2);
 256: // try_end2
                            var2 = undefined;
                            return var2;
 261: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=8);
                            var6 = var9;
                            var5 = _closure1_slot13;
                            var4 = var5.warn;
                            var3 = 'Error creating gift purchase:';
                            var3 = var4.bind(var5)(var3, var9);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var5 = 'Gift Purchase Failed';
                            var2['title'] = var5;
                            var8 = null;
                            var8 = var8 == var9;
                            if(var8) { _fun0005_ip = 347; continue _fun0005 }
 339:
                            var8 = var6;
                            var7 = var8.message;
 347:
                            var5 = var7;
                            if(var7) { _fun0005_ip = 372; continue _fun0005 }
 353:
                            var7 = global;
                            var8 = var7.JSON;
                            var7 = var8.stringify;
                            var5 = var7.bind(var8)(var6);
 372:
                            var7 = var5;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'Error: ';
                            var5 = var6.bind(var5)(var7);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
 408:
                            var2 = undefined;
                            return var2;
 413:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function submitGiftPurchase() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var16 = var9.bind(var4)();
            var19 = _closure1_slot5;
            var18 = var19.useMemo;
            var9 = new Array(1);
            var9[0] = var1;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 95; continue _fun0006 }
 13:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 20;
                    var1 = var7[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var1);
                    var1 = var8.getFormattedPriceForCollectiblesProduct;
                    var6 = _closure2_slot5;
                    var5 = true;
                    var8 = var1.bind(var8)(var6, var5, var5);
                    var1 = new Array(2);
                    var1[0] = var8;
                    var2 = var7[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.getFormattedPriceForCollectiblesProduct;
                    var2 = false;
                    var2 = var3.bind(var4)(var6, var2, var5);
                    var1[1] = var2;
                    _fun0006_ip = 105; continue _fun0006;
 95:
                    var1 = ['Loading...', 'Loading...'];
 105:
                    return var1;
                }
            };
            var9 = var18.bind(var19)(var3, var9);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var9, var17);
            var18 = var3[var6];
            var19 = var3[var5];
            if(var15) { _fun0001_ip = 582; continue _fun0001 }
 579:
            var15 = var2;
 582:
            if(var15) { _fun0001_ip = 589; continue _fun0001 }
 585:
            var15 = var8 == var1;
 589:
            var3 = _closure1_slot11;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var17 = 24;
            var1['spacing'] = var17;
            var9 = {};
            var21 = var20.top;
            var9['paddingTop'] = var21;
            var20 = var20.bottom;
            var9['paddingBottom'] = var20;
            var9['paddingHorizontal'] = var12;
            var1['style'] = var9;
            var9 = 22;
            var5 = var5[var9];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/medium', 'color': 'always-white'};
            var20 = var8 == var7;
            var12 = undefined;
            if(var20) { _fun0001_ip = 703; continue _fun0001 }
 698:
            var12 = var7.name;
 703:
            var7 = ['Gifting '];
            var7[1] = var12;
            var12 = ' to ';
            var7[2] = var12;
            var7[3] = var11;
            var12 = ' ';
            var7[4] = var12;
            var11 = '\n';
            var7[5] = var11;
            var20 = 'Regular price: ';
            var7[6] = var20;
            var7[7] = var19;
            var7[8] = var12;
            var7[9] = var11;
            var19 = 'Premium price: ';
            var7[10] = var19;
            var7[11] = var18;
            var7[12] = var12;
            var7[13] = var11;
            var11 = var8 != var13;
            var12 = 'No message';
            var8 = var12;
            if(!var11) { _fun0001_ip = 842; continue _fun0001 }
 807:
            var11 = '';
            var8 = var12;
            if(!(var11 !== var13)) { _fun0001_ip = 842; continue _fun0001 }
 818:
            var11 = global;
            var11 = var11.HermesInternal;
            var12 = var11.concat;
            var11 = 'Message: ';
            var8 = var12.bind(var11)(var13);
 842:
            var7[14] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var11 = _closure1_slot12;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 23;
            var7 = var12[var6];
            var7 = var13.bind(var4)(var7);
            var8 = var7.Card;
            var7 = {};
            var12 = var12[var17];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var17 = 'primary';
            var12['variant'] = var17;
            var17 = 'Send Gift';
            if(!var15) { _fun0001_ip = 936; continue _fun0001 }
 930:
            var17 = 'Loading...';
 936:
            var12['text'] = var17;
            var12['onPress'] = var16;
            var12['disabled'] = var15;
            var12 = var11.bind(var4)(var13, var12);
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.Card;
            var6 = {};
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-md/medium', 'color': 'always-white'};
            var12 = ['Select style: '];
            var12[1] = var14;
            var9['children'] = var12;
            var11 = var8.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var10 = 25;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function SimpleRequestOTPActionSheet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var11 = var1.selectedSkuId;
            var14 = var1.requestType;
            var10 = var1.giftRecipientId;
            var9 = var1.giftMessage;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 26;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.v4;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 27;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getBasePurchaseFlowAnalyticsFields;
                var1 = {};
                var4 = true;
                var1['isGift'] = var4;
                var4 = _closure2_slot0;
                var1['analyticsLoadId'] = var4;
                var4 = new Array(0);
                var1['analyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var5.bind(var6)(var2, var3);
            var2 = 'giftSku';
            if(!(var2 === var14)) { _fun0007_ip = 121; continue _fun0007 }
 108:
            var2 = null;
            if(!(var2 != var11)) { _fun0007_ip = 121; continue _fun0007 }
 114:
            if(!(var2 == var10)) { _fun0007_ip = 272; continue _fun0007 }
 121:
            var5 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var17 = _closure1_slot12;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 22;
            var6 = var15[var12];
            var6 = var13.bind(var4)(var6);
            var16 = var6.Text;
            var6 = {'variant': 'text-lg/bold', 'color': 'info-warning-text', 'children': 'Gift purchasing is the only supported feature on Android in this version.'};
            var16 = var17.bind(var4)(var16, var6);
            var6 = new Array(2);
            var6[0] = var16;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/normal', 'color': 'info-warning-text'};
            var15 = null;
            var16 = var15 != var14;
            var15 = 'none';
            if(!var16) { _fun0007_ip = 232; continue _fun0007 }
 229:
            var15 = var14;
 232:
            var14 = ['Request type: '];
            var14[1] = var15;
            var12['children'] = var14;
            var12 = var5.bind(var4)(var13, var12);
            var6[1] = var12;
            var2['children'] = var6;
            var5 = var5.bind(var4)(var3, var2);
            _fun0007_ip = 370; continue _fun0007;
 272:
            var6 = _closure1_slot12;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 11;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.NativeGiftContextProvider;
            var2 = {};
            var2['basePurchaseAnalytics'] = var8;
            var8 = function onClose() {
                var1 = undefined;
                return var1;
            };
            var2['onClose'] = var8;
            var7 = function setCurrentAnalyticsStep() {
                var1 = undefined;
                return var1;
            };
            var2['setCurrentAnalyticsStep'] = var7;
            var8 = _closure1_slot14;
            var7 = {};
            var7['selectedSkuId'] = var11;
            var7['giftRecipientId'] = var10;
            var7['giftMessage'] = var9;
            var7 = var6.bind(var4)(var8, var7);
            var2['children'] = var7;
            var5 = var6.bind(var4)(var3, var2);
 370:
            var3 = _closure1_slot12;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 28;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 29;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.NativePaymentContextProvider;
        var1 = {};
        var6 = new Array(0);
        var1['skuIDs'] = var6;
        var6 = null;
        var1['activeSubscription'] = var6;
        var6 = _closure1_slot15;
        var5 = {};
        var8 = arg1;
        var9 = var5;
        var7 = copyDataProperties(var9, var8);
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();