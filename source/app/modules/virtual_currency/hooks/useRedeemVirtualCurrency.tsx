// app/modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useState;
    var _closure1_slot5 = var7;
    var7 = var4.useEffect;
    var _closure1_slot6 = var7;
    var4 = var4.useCallback;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OrderStatus;
    var _closure1_slot9 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRedeemVirtualCurrency(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = _closure1_slot5;
            var9 = undefined;
            var3 = '';
            var3 = var14.bind(var9)(var3);
            var13 = _closure1_slot4;
            var12 = 2;
            var5 = var13.bind(var9)(var3, var12);
            var4 = 0;
            var3 = var5[var4];
            var11 = 1;
            var5 = var5[var11];
            var _closure2_slot0 = var5;
            var5 = new Array(0);
            var5 = var14.bind(var9)(var5);
            var5 = var13.bind(var9)(var5, var12);
            var6 = var5[var4];
            var _closure2_slot1 = var6;
            var5 = var5[var11];
            var _closure2_slot2 = var5;
            var8 = null;
            var5 = var14.bind(var9)(var8);
            var10 = var13.bind(var9)(var5, var12);
            var5 = var10[var4];
            var _closure2_slot3 = var5;
            var10 = var10[var11];
            var _closure2_slot4 = var10;
            var10 = false;
            var10 = var14.bind(var9)(var10);
            var10 = var13.bind(var9)(var10, var12);
            var4 = var10[var4];
            var10 = var10[var11];
            var _closure2_slot5 = var10;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 5;
            var10 = var12[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.useConfig;
            var10 = {};
            var13 = 'orb_checkout_modal';
            var10['location'] = var13;
            var10 = var11.bind(var12)(var10);
            var12 = var10.enabled;
            var _closure2_slot6 = var12;
            var11 = var8 == var2;
            var10 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var2.order;
case 2:
            var11 = var8 != var10;
            var14 = null;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var10;
case 4:
            var _closure2_slot7 = var14;
            var8 = var8 == var2;
            var11 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var2.onSignFailure;
case 6:
            var _closure2_slot8 = var11;
            var10 = _closure1_slot7;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            var2 = arg2;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var8 = arg1;
                            var6 = undefined;
                            var7 = undefined;
                            var4 = undefined;
                            var5 = null;
                            if(!(var5 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 6;
                            var3 = var10[var3];
                            var10 = var9.bind(var6)(var3);
                            var9 = var10.get1PShopApplicationIdForSKU;
                            var3 = var8;
                            var2 = var9.bind(var10)(var3);
case 10:
                            var7 = var2;
case 12: // try_start_0
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 7;
                            var2 = var10[var2];
                            var2 = var3.bind(var6)(var2);
                            var6 = var2.HTTP;
                            var3 = var6.get;
                            var2 = {};
                            var10 = _closure1_slot8;
                            var9 = var10.ENTITLEMENTS_FOR_APPLICATION;
                            var7 = var9.bind(var10)(var7);
                            var2['url'] = var7;
                            var7 = {};
                            var7['sku_ids'] = var8;
                            var8 = true;
                            var7['exclude_consumed'] = var8;
                            var2['query'] = var7;
                            var7 = false;
                            var2['rejectWithError'] = var7;
                            var2 = var3.bind(var6)(var2);
                            SaveGenerator(address=156);
case 13:
                            return var2;
case 14:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var3 = var2.body;
                            var4 = var3;
                            if(!(var5 == var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var3 = new Array(0);
                            _fun0002_ip = 19; continue _fun0002;
case 17:
                            var3 = var4;
case 19: // try_end0
                            return var3;
case 15:
                            return var2;
case 20: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var2 = new Array(0);
                            return var2;
case 8:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
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
            var8 = var2.bind(var9)();
            var2 = new Array(0);
            var13 = var10.bind(var9)(var8, var2);
            var _closure2_slot9 = var13;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var13 = arg1;
                            var12 = arg2;
                            var16 = arg3;
                            var4 = undefined;
                            var9 = undefined;
                            var11 = undefined;
                            var10 = undefined;
                            var15 = undefined;
                            var5 = undefined;
                            var7 = _closure2_slot7;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var8 = _closure2_slot5;
                            var7 = true;
                            var7 = var8.bind(var4)(var7);
                            var7 = _closure2_slot4;
                            var7 = var7.bind(var4)(var6);
case 25: // try_start_0
                            var14 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var7 = 9;
                            var7 = var17[var7];
                            var17 = var14.bind(var4)(var7);
                            var14 = var17.signOrder;
                            var7 = {};
                            var18 = _closure2_slot7;
                            var18 = var18.id;
                            var7['orderId'] = var18;
                            var18 = var12;
                            var7['loadId'] = var18;
                            var7 = var14.bind(var17)(var7);
                            SaveGenerator(address=129);
case 26:
                            return var7;
case 27:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=13);
                            if(var14) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                            var9 = var7;
                            var17 = var7.status;
                            var14 = _closure1_slot9;
                            var14 = var14.SIGNED;
                            if(!(var17 === var14)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                            var14 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var8 = 6;
                            var8 = var17[var8];
                            var14 = var14.bind(var4)(var8);
                            var8 = var14.get1PShopApplicationIdForSKU;
                            var17 = var13;
                            var14 = var8.bind(var14)(var17);
                            var11 = var14;
                            var8 = _closure2_slot9;
                            var8 = var8.bind(var4)(var17, var14);
                            SaveGenerator(address=214);
case 32:
                            return var8;
case 5:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=13);
                            if(var14) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                            var10 = var8;
                            var14 = var8.length;
                            var18 = 0;
                            if(!(var18 !== var14)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                            var17 = _closure2_slot2;
                            var14 = var10;
                            var14 = var17.bind(var4)(var14);
                            var17 = _closure2_slot5;
                            var14 = false;
                            var14 = var17.bind(var4)(var14);
                            var14 = var16;
                            if(!(var6 != var14)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                            var14 = var16;
                            var10 = var14.bind(var4)(var10);
                            _fun0003_ip = 37; continue _fun0003;
case 35:
                            var14 = global;
                            var19 = var14.Promise;
                            var10 = var19.prototype;
                            var17 = Object.create(var10, {constructor: {value: var19}});
                            var21 = function(arg1) {
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = 500;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var22 = var17;
                            var10 = new var22[var19](var21, var20);
                            var10 = var10 instanceof Object ? var10 : var17;
                            SaveGenerator(address=321);
case 39:
                            return var10;
case 40:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=16);
                            if(var17) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                            var19 = _closure2_slot9;
                            var17 = var13;
                            var11 = var19.bind(var4)(var17, var11);
                            SaveGenerator(address=344);
case 43:
                            return var11;
case 44:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=16);
                            if(var17) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                            var15 = var11;
                            var17 = var11.length;
                            if(!(var18 !== var17)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                            var18 = _closure2_slot2;
                            var17 = var15;
                            var17 = var18.bind(var4)(var17);
                            var18 = _closure2_slot5;
                            var17 = false;
                            var17 = var18.bind(var4)(var17);
                            var17 = var16;
                            if(!(var6 != var17)) { _fun0003_ip = 37; continue _fun0003 }
case 49:
                            var15 = var16.bind(var4)(var15);
case 37: // try_end0
                            _fun0003_ip = 50; continue _fun0003;
case 47: // try_start_1
                            var16 = var14.Error;
                            var14 = var16.prototype;
                            var15 = Object.create(var14, {constructor: {value: var16}});
                            var21 = 'No entitlements found after order signing';
                            var22 = var15;
                            var14 = new var22[var16](var21, var20);
                            var14 = var14 instanceof Object ? var14 : var15;
                            throw var14;
case 45: // try_end1
                            return var11;
case 41:
                            return var10;
case 33:
                            return var8;
case 30: // try_start_2
                            var8 = var9;
                            var8 = var8.errors;
                            if(!(var6 != var8)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                            var8 = var9;
                            var8 = var8.errors;
                            var10 = var8.length;
                            var8 = 0;
                            if(!(!(var10 > var8))) { _fun0003_ip = 53; continue _fun0003 }
case 51:
                            var8 = global;
                            var11 = var8.Error;
                            var10 = var9;
                            var14 = var10.status;
                            var8 = var8.HermesInternal;
                            var10 = var8.concat;
                            var8 = 'Unexpected order status: ';
                            var21 = var10.bind(var8)(var14);
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {constructor: {value: var11}});
                            var22 = var10;
                            var8 = new var22[var11](var21, var20);
                            var8 = var8 instanceof Object ? var8 : var10;
                            throw var8;
case 53:
                            var8 = global;
                            var10 = var8.Error;
                            var14 = var9.errors;
                            var11 = var14.join;
                            var9 = ', ';
                            var11 = var11.bind(var14)(var9);
                            var8 = var8.HermesInternal;
                            var9 = var8.concat;
                            var8 = 'Order signing failed with errors: ';
                            var21 = var9.bind(var8)(var11);
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var22 = var9;
                            var8 = new var22[var10](var21, var20);
                            var8 = var8 instanceof Object ? var8 : var9;
                            throw var8;
case 28: // try_end2
                            return var7;
case 54: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=8);
                            var3 = var9;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 9;
                            var8 = var11[var8];
                            var8 = var10.bind(var4)(var8);
                            var8 = var8.OrderSigningFailedWithConstraintsError;
                            var8 = var9 instanceof var8;
                            if(var8) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                            var9 = var3;
                            var11 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var10 = 8;
                            var8 = var8[var10];
                            var8 = var11.bind(var4)(var8);
                            var8 = var9 instanceof var8;
                            if(var8) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                            var9 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var8 = var8[var10];
                            var10 = var9.bind(var4)(var8);
                            var21 = var3;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {constructor: {value: var10}});
                            var22 = var9;
                            var8 = new var22[var10](var21, var20);
                            var8 = var8 instanceof Object ? var8 : var9;
                            _fun0003_ip = 59; continue _fun0003;
case 57:
                            var8 = var3;
case 59:
                            var5 = var8;
                            var10 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var9 = 10;
                            var8 = var8[var9];
                            var11 = var10.bind(var4)(var8);
                            var10 = var11.isExpectedHttpClientError;
                            var8 = var3;
                            var8 = var10.bind(var11)(var8);
                            if(var8) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var9];
                            var10 = var8.bind(var4)(var7);
                            var9 = var10.captureBillingException;
                            var8 = var3;
                            var7 = global;
                            var7 = var7.Error;
                            var7 = var8 instanceof var7;
                            if(var7) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                            var8 = var5;
                            _fun0003_ip = 64; continue _fun0003;
case 62:
                            var8 = var3;
case 64:
                            var7 = {};
                            var11 = {};
                            var14 = 'orb_redeem_orders_api';
                            var11['source'] = var14;
                            var7['tags'] = var11;
                            var11 = {};
                            var11['skuId'] = var13;
                            var11['loadId'] = var12;
                            var12 = _closure2_slot7;
                            var12 = var12.id;
                            var11['orderId'] = var12;
                            var7['extra'] = var11;
                            var7 = var9.bind(var10)(var8, var7);
case 60:
                            var7 = _closure2_slot4;
                            var5 = var7.bind(var4)(var5);
                            var7 = _closure2_slot5;
                            var5 = false;
                            var5 = var7.bind(var4)(var5);
case 50:
                            return var4;
case 55:
                            var5 = _closure2_slot8;
                            if(!(var6 != var5)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                            var6 = _closure2_slot8;
                            var5 = var3;
                            var5 = var5.order;
                            var5 = var6.bind(var4)(var5);
case 65:
                            var5 = _closure2_slot4;
                            var3 = var5.bind(var4)(var3);
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            var3 = undefined;
                            return var3;
case 23:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var3 = var6.prototype;
                            var5 = Object.create(var3, {constructor: {value: var6}});
                            var21 = 'Order not created yet';
                            var22 = var5;
                            var3 = new var22[var6](var21, var20);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot5;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 21:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
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
            var8 = var2.bind(var9)();
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var11;
            var11 = var10.bind(var9)(var8, var2);
            var _closure2_slot10 = var11;
            var8 = function(arg1, arg2, arg3) {
                var1 = arg3;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.redeemVirtualCurrencyForSKU;
                var1 = {};
                var5 = arg1;
                var1['skuId'] = var5;
                var5 = arg2;
                var1['loadId'] = var5;
                var5 = function onRedeemStart() {
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot4;
                    var2 = null;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onRedeemStart'] = var5;
                var5 = function onRedeemSucceed(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure2_slot2;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var4 = _closure2_slot5;
                        var2 = false;
                        var2 = var4.bind(var1)(var2);
                        var5 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0004_ip = 67; continue _fun0004 }
case 68:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)(var3);
case 67:
                        return var1;
                    }
                };
                var1['onRedeemSucceed'] = var5;
                var4 = function onRedeemFail(arg1) {
                    var4 = _closure2_slot4;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot5;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onRedeemFail'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = new Array(0);
            var2 = var10.bind(var9)(var8, var2);
            var _closure2_slot11 = var2;
            var8 = new Array(3);
            var8[0] = var12;
            var8[1] = var11;
            var8[2] = var2;
            var2 = function(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var4 = arg2;
                    var3 = arg3;
                    var2 = _closure2_slot6;
                    if(var2) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                    var6 = _closure2_slot11;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4, var3);
                    _fun0005_ip = 24; continue _fun0005;
case 69:
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var5, var4, var3);
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var9)(var2, var8);
            var8 = _closure1_slot6;
            var7 = new Array(2);
            var7[0] = var6;
            var7[1] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var6 = var9[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var6);
                    var8 = var6.intl;
                    var6 = var8.format;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.t;
                    var4 = var2["7gHWrd"];
                    var2 = {};
                    var9 = '1 orb';
                    var2['amount'] = var9;
                    var9 = _closure2_slot3;
                    var9 = var9.message;
                    var2['errorMessage'] = var9;
                    var4 = var6.bind(var8)(var4, var2);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var5)(var4);
                    _fun0006_ip = 73; continue _fun0006;
case 71:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0006_ip = 74; continue _fun0006 }
case 26:
                    var2 = _closure2_slot1;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0006_ip = 16; continue _fun0006 }
case 74:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = '';
                    var2 = var4.bind(var3)(var2);
                    _fun0006_ip = 73; continue _fun0006;
case 16:
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.sku;
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if(var3) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                            var1 = var2.name;
case 75:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var5 = var8[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.format;
                    var2 = var8[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.t;
                    var4 = var2.JxNFav;
                    var2 = {};
                    var8 = '1 orb';
                    var2['amountDescription'] = var8;
                    var8 = var11.length;
                    var14 = 'SKUs';
                    var10 = 1;
                    if(!(var10 === var8)) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var14 = 'SKU';
case 77:
                    var8 = var11.join;
                    var9 = ', ';
                    var13 = var8.bind(var11)(var9);
                    var8 = _closure2_slot1;
                    var8 = var8.length;
                    var12 = 'IDs';
                    if(!(var10 === var8)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                    var12 = 'ID';
case 79:
                    var10 = _closure2_slot1;
                    var8 = var10.map;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.join;
                    var15 = var7.bind(var8)(var9);
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var22 = '';
                    var8 = ': ';
                    var18 = '. Entitlement ';
                    var21 = var14;
                    var20 = var8;
                    var19 = var13;
                    var17 = var12;
                    var16 = var8;
                    var7 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14);
                    var2['redeemedItemDescription'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var3)(var2);
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var1, var7);
            var1 = {};
            var1['entitlements'] = var6;
            var1['error'] = var5;
            var1['isSubmitting'] = var4;
            var1['responseMessage'] = var3;
            var1['redeemVirtualCurrency'] = var2;
            return var1;
        }
    };
    var3['useRedeemVirtualCurrency'] = var2;
    return var1;
})();