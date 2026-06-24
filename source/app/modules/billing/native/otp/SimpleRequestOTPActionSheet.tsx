// app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GiftPurchaseSKUView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.selectedSkuId;
            var _closure2_slot0 = var17;
            var12 = var1.giftRecipientId;
            var14 = var1.giftMessage;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 10;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.bind(var4)();
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var1 = false;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot4;
            var18 = 2;
            var1 = var1.bind(var4)(var2, var18);
            var6 = 0;
            var2 = var1[var6];
            var _closure2_slot1 = var2;
            var5 = 1;
            var1 = var1[var5];
            var _closure2_slot2 = var1;
            var7 = _closure1_slot7;
            var1 = var7.getCurrentUser;
            var7 = var1.bind(var7)();
            var _closure2_slot3 = var7;
            var9 = _closure1_slot5;
            var8 = var9.useRef;
            var1 = {};
            var1 = var8.bind(var9)(var1);
            var _closure2_slot4 = var1;
            var11 = _closure1_slot0;
            var1 = 11;
            var1 = var16[var1];
            var8 = var11.bind(var4)(var1);
            var1 = var8.useNativeGiftContext;
            var1 = var1.bind(var8)();
            var15 = var1.giftStyle;
            var9 = 12;
            var1 = var16[var9];
            var20 = var11.bind(var4)(var1);
            var19 = var20.useStateFromStores;
            var1 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var19.bind(var20)(var8, var1);
            var1 = 13;
            var1 = var16[var1];
            var11 = var11.bind(var4)(var1);
            var1 = var11.useFetchCollectiblesProduct;
            var11 = var1.bind(var11)(var17);
            var1 = var11.product;
            var _closure2_slot5 = var1;
            var16 = var11.isFetching;
            var21 = _closure1_slot5;
            var20 = var21.useEffect;
            var19 = new Array(1);
            var19[0] = var17;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchCollectiblesProduct;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var20.bind(var21)(var11, var19);
            var20 = _closure1_slot5;
            var19 = var20.useMemo;
            var11 = new Array(3);
            var11[0] = var1;
            var11[1] = var7;
            var11[2] = var17;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure2_slot5;
                    var3 = var3.googleSkuIds;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 6:
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
                    if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var4 = var3.MOBILE;
                    var4 = var5[var4];
                    _fun0003_ip = 9; continue _fun0003;
case 7:
                    var3 = var3.MOBILE_PREMIUM_TIER_2;
                    var4 = var5[var3];
case 9:
                    if(!(var2 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = global;
                    var5 = var2.Object;
                    var3 = var5.values;
                    var2 = _closure2_slot5;
                    var2 = var2.googleSkuIds;
                    var2 = var3.bind(var5)(var2);
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 12:
                    return var2;
case 4:
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
            var21 = var19.bind(var20)(var7, var11);
            var _closure2_slot6 = var21;
            var20 = _closure1_slot5;
            var19 = var20.useMemo;
            var11 = new Array(1);
            var11[0] = var21;
            var7 = function() {
                var2 = _closure2_slot6;
                var1 = var2.sort;
                var3 = var1.bind(var2)();
                var2 = var3.join;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var19.bind(var20)(var7, var11);
            var _closure2_slot7 = var7;
            var20 = _closure1_slot5;
            var19 = var20.useEffect;
            var11 = new Array(3);
            var11[0] = var21;
            var11[1] = var2;
            var11[2] = var7;
            var7 = function() {
                var2 = function _loadGoogleSkus() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                var3 = _closure2_slot7;
                                var6 = null;
                                if(!(var6 != var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                                var3 = _closure2_slot4;
                                var4 = var3.current;
                                var3 = _closure2_slot7;
                                var3 = var4[var3];
                                if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 15:
                                var3 = _closure2_slot6;
                                var4 = var3.length;
                                var3 = 0;
                                if(!(var3 !== var4)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                                var3 = _closure2_slot1;
                                if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                                var3 = _closure2_slot2;
                                var4 = undefined;
                                var7 = true;
                                var3 = var3.bind(var4)(var7);
case 20: // try_start_0
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 16;
                                var3 = var8[var3];
                                var8 = var5.bind(var4)(var3);
                                var5 = var8.loadInAppSkus;
                                var3 = _closure2_slot6;
                                var3 = var5.bind(var8)(var3);
                                SaveGenerator(address=129);
case 11:
                                return var3;
case 21:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                                var5 = _closure2_slot7;
                                if(!(var6 != var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                                var5 = _closure2_slot4;
                                var6 = var5.current;
                                var5 = _closure2_slot7;
                                var6[var5] = var7;
case 24:
                                var6 = _closure2_slot2;
                                var5 = false;
                                var5 = var6.bind(var4)(var5);
case 26: // try_end0
                                _fun0004_ip = 17; continue _fun0004;
case 22:
                                return var3;
case 27: // catch_target0
                                CatchBlockStart(arg_register=6);
                                var6 = _closure1_slot13;
                                var5 = var6.error;
                                var3 = 'Unable to fetch product IDs from Google Play store:';
                                var3 = var5.bind(var6)(var3, var7);
                                var3 = _closure2_slot2;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
case 17:
                                var2 = undefined;
                                return var2;
case 13:
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
            var7 = var19.bind(var20)(var7, var11);
            var11 = null;
            var19 = var1;
            if(!(var11 == var19)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = {};
            var7['skuId'] = var17;
            var17 = {};
            var7['googleSkuIds'] = var17;
            var19 = var7;
case 28:
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var7 = 17;
            var7 = var20[var7];
            var17 = var17.bind(var4)(var7);
            var7 = {};
            var7['product'] = var19;
            var19 = function onPurchaseComplete() {
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
            var7['onPurchaseComplete'] = var19;
            var19 = function onPurchaseError() {
                var3 = _closure1_slot13;
                var2 = var3.error;
                var1 = 'Purchase error occurred';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7['onPurchaseError'] = var19;
            var19 = function onPurchasePending() {
                var3 = _closure1_slot13;
                var2 = var3.info;
                var1 = 'Purchase is pending';
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7['onPurchasePending'] = var19;
            var19 = {};
            var20 = true;
            var19['isGift'] = var20;
            var20 = {};
            var20['recipient_id'] = var12;
            var20['custom_message'] = var14;
            var20['gift_style'] = var15;
            var19['options'] = var20;
            var7['giftParams'] = var19;
            var7 = var17.bind(var4)(var7);
            _closure2_slot8 = var7;
            var7 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 14: // try_start_0
                            var2 = _closure2_slot5;
                            var4 = null;
                            if(!(var4 != var2)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                            var2 = _closure2_slot5;
                            var2 = var2.googleSkuIds;
                            if(!(var4 != var2)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                            var2 = _closure2_slot6;
                            var4 = var2.length;
                            var2 = 0;
                            if(!(var2 !== var4)) { _fun0005_ip = 33; continue _fun0005 }
case 35:
                            var4 = _closure2_slot8;
                            var2 = undefined;
                            var2 = var4.bind(var2)();
                            SaveGenerator(address=69);
case 36:
                            return var2;
case 37:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 38; continue _fun0005 }
case 39: // try_end0
                            _fun0005_ip = 40; continue _fun0005;
case 38:
                            return var2;
case 33: // try_start_1
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
case 41: // try_end1
                            var2 = undefined;
                            return var2;
case 31: // try_start_2
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
case 42: // try_end2
                            var2 = undefined;
                            return var2;
case 43: // catch_target0 // catch_target1 // catch_target2
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
                            if(var8) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                            var8 = var6;
                            var7 = var8.message;
case 44:
                            var5 = var7;
                            if(var7) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                            var7 = global;
                            var8 = var7.JSON;
                            var7 = var8.stringify;
                            var5 = var7.bind(var8)(var6);
case 46:
                            var7 = var5;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var6 = var5.concat;
                            var5 = 'Error: ';
                            var5 = var6.bind(var5)(var7);
                            var2['body'] = var5;
                            var2 = var3.bind(var4)(var2);
case 40:
                            var2 = undefined;
                            return var2;
case 30:
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
            var17 = var7.bind(var4)();
            var20 = _closure1_slot5;
            var19 = var20.useMemo;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 48; continue _fun0006 }
case 3:
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
                    _fun0006_ip = 49; continue _fun0006;
case 48:
                    var1 = ['Loading...', 'Loading...'];
case 49:
                    return var1;
                }
            };
            var7 = var19.bind(var20)(var3, var7);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var7, var18);
            var19 = var3[var6];
            var20 = var3[var5];
            if(var16) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var16 = var2;
case 50:
            if(var16) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var16 = var11 == var1;
case 52:
            var3 = _closure1_slot11;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var1 = var5[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var18 = 24;
            var1['spacing'] = var18;
            var7 = {};
            var21 = var13.top;
            var7['paddingTop'] = var21;
            var13 = var13.bottom;
            var7['paddingBottom'] = var13;
            var7['paddingHorizontal'] = var9;
            var1['style'] = var7;
            var7 = _closure1_slot11;
            var9 = 22;
            var5 = var5[var9];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/medium', 'color': 'always-white'};
            var21 = var11 == var8;
            var13 = undefined;
            if(var21) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var13 = var8.name;
case 54:
            var8 = ['Gifting '];
            var8[1] = var13;
            var13 = ' to ';
            var8[2] = var13;
            var8[3] = var12;
            var13 = ' ';
            var8[4] = var13;
            var12 = '\n';
            var8[5] = var12;
            var21 = 'Regular price: ';
            var8[6] = var21;
            var8[7] = var20;
            var8[8] = var13;
            var8[9] = var12;
            var20 = 'Premium price: ';
            var8[10] = var20;
            var8[11] = var19;
            var8[12] = var13;
            var8[13] = var12;
            var12 = var11 != var14;
            var13 = 'No message';
            var11 = var13;
            if(!var12) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var12 = '';
            var11 = var13;
            if(!(var12 !== var14)) { _fun0001_ip = 56; continue _fun0001 }
case 58:
            var12 = global;
            var12 = var12.HermesInternal;
            var13 = var12.concat;
            var12 = 'Message: ';
            var11 = var13.bind(var12)(var14);
case 56:
            var8[14] = var11;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
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
            var14 = _closure1_slot12;
            var12 = var12[var18];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var18 = 'primary';
            var12['variant'] = var18;
            var18 = 'Send Gift';
            if(!var16) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var18 = 'Loading...';
case 59:
            var12['text'] = var18;
            var12['onPress'] = var17;
            var12['disabled'] = var16;
            var12 = var14.bind(var4)(var13, var12);
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
            var12 = _closure1_slot11;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-md/medium', 'color': 'always-white'};
            var14 = ['Select style: '];
            var14[1] = var15;
            var9['children'] = var14;
            var11 = var12.bind(var4)(var11, var9);
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
    var _closure1_slot14 = var1;
    var1 = function SimpleRequestOTPActionSheet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var12 = var1.selectedSkuId;
            var15 = var1.requestType;
            var11 = var1.giftRecipientId;
            var10 = var1.giftMessage;
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
            if(!(var2 === var15)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var2 = null;
            if(!(var2 != var12)) { _fun0007_ip = 61; continue _fun0007 }
case 63:
            if(!(var2 == var11)) { _fun0007_ip = 64; continue _fun0007 }
case 61:
            var5 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var17 = _closure1_slot12;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 22;
            var6 = var16[var9];
            var6 = var13.bind(var4)(var6);
            var14 = var6.Text;
            var6 = {'variant': 'text-lg/bold', 'color': 'text-feedback-warning', 'children': 'Gift purchasing is the only supported feature on Android in this version.'};
            var14 = var17.bind(var4)(var14, var6);
            var6 = new Array(2);
            var6[0] = var14;
            var14 = _closure1_slot11;
            var9 = var16[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'text-md/normal', 'color': 'text-feedback-warning'};
            var16 = null;
            var17 = var16 != var15;
            var16 = 'none';
            if(!var17) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var16 = var15;
case 65:
            var15 = ['Request type: '];
            var15[1] = var16;
            var9['children'] = var15;
            var9 = var14.bind(var4)(var13, var9);
            var6[1] = var9;
            var2['children'] = var6;
            var5 = var5.bind(var4)(var3, var2);
            _fun0007_ip = 67; continue _fun0007;
case 64:
            var6 = _closure1_slot12;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
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
            var9 = _closure1_slot12;
            var8 = _closure1_slot14;
            var7 = {};
            var7['selectedSkuId'] = var12;
            var7['giftRecipientId'] = var11;
            var7['giftMessage'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var2['children'] = var7;
            var5 = var6.bind(var4)(var3, var2);
case 67:
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
    var _closure1_slot15 = var1;
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
    var4 = metroImportAll;
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
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SimpleCreateOTPActionSheetWrapper(arg1) {
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
        var7 = _closure1_slot12;
        var6 = _closure1_slot15;
        var5 = {};
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();