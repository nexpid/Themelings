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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRedeemVirtualCurrency(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var14 = _closure1_slot5;
            var9 = undefined;
            var2 = '';
            var2 = var14.bind(var9)(var2);
            var13 = _closure1_slot4;
            var12 = 2;
            var2 = var13.bind(var9)(var2, var12);
            var4 = 0;
            var3 = var2[var4];
            var11 = 1;
            var2 = var2[var11];
            var _closure2_slot0 = var2;
            var2 = new Array(0);
            var2 = var14.bind(var9)(var2);
            var2 = var13.bind(var9)(var2, var12);
            var6 = var2[var4];
            var _closure2_slot1 = var6;
            var2 = var2[var11];
            var _closure2_slot2 = var2;
            var10 = null;
            var2 = var14.bind(var9)(var10);
            var2 = var13.bind(var9)(var2, var12);
            var5 = var2[var4];
            var _closure2_slot3 = var5;
            var2 = var2[var11];
            var _closure2_slot4 = var2;
            var2 = false;
            var2 = var14.bind(var9)(var2);
            var2 = var13.bind(var9)(var2, var12);
            var4 = var2[var4];
            var2 = var2[var11];
            var _closure2_slot5 = var2;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 5;
            var2 = var12[var2];
            var12 = var11.bind(var9)(var2);
            var11 = var12.useConfig;
            var2 = {};
            var13 = 'orb_checkout_modal';
            var2['location'] = var13;
            var2 = var11.bind(var12)(var2);
            var12 = var2.enabled;
            var _closure2_slot6 = var12;
            var11 = var10 == var8;
            var2 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var8.order;
case 2:
            var8 = var10 != var2;
            var13 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var2;
case 4:
            var _closure2_slot7 = var13;
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
                            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var8 = arg1;
                            var6 = undefined;
                            var7 = undefined;
                            var4 = undefined;
                            var5 = null;
                            if(!(var5 == var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 6;
                            var3 = var10[var3];
                            var10 = var9.bind(var6)(var3);
                            var9 = var10.get1PShopApplicationIdForSKU;
                            var3 = var8;
                            var2 = var9.bind(var10)(var3);
case 8:
                            var7 = var2;
case 10: // try_start_0
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
case 11:
                            return var2;
case 12:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                            var3 = var2.body;
                            var4 = var3;
                            if(!(var5 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var3 = new Array(0);
                            _fun0002_ip = 17; continue _fun0002;
case 15:
                            var3 = var4;
case 17: // try_end0
                            return var3;
case 13:
                            return var2;
case 18: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var2 = new Array(0);
                            return var2;
case 6:
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
            var11 = var10.bind(var9)(var8, var2);
            var _closure2_slot8 = var11;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var16 = arg1;
                            var18 = arg2;
                            var15 = arg3;
                            var4 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var12 = undefined;
                            var11 = undefined;
                            var14 = undefined;
                            var5 = _closure2_slot7;
                            var17 = null;
                            if(!(var17 != var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var8 = _closure2_slot5;
                            var5 = true;
                            var5 = var8.bind(var4)(var5);
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var4)(var17);
case 23: // try_start_0
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var5 = 9;
                            var5 = var13[var5];
                            var13 = var9.bind(var4)(var5);
                            var9 = var13.signOrder;
                            var5 = {};
                            var19 = _closure2_slot7;
                            var19 = var19.id;
                            var5['orderId'] = var19;
                            var19 = _closure2_slot7;
                            var19 = var19.revision;
                            var5['expectedRevision'] = var19;
                            var5['loadId'] = var18;
                            var5 = var9.bind(var13)(var5);
                            SaveGenerator(address=143);
case 24:
                            return var5;
case 25:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                            if(var9) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                            var10 = var5;
                            var13 = var5.status;
                            var9 = _closure1_slot9;
                            var9 = var9.SIGNED;
                            if(!(var13 === var9)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                            var13 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var9 = 6;
                            var9 = var18[var9];
                            var13 = var13.bind(var4)(var9);
                            var9 = var13.get1PShopApplicationIdForSKU;
                            var18 = var16;
                            var13 = var9.bind(var13)(var18);
                            var12 = var13;
                            var9 = _closure2_slot8;
                            var9 = var9.bind(var4)(var18, var13);
                            SaveGenerator(address=228);
case 30:
                            return var9;
case 31:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                            if(var13) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                            var11 = var9;
                            var13 = var9.length;
                            var18 = 0;
                            if(!(var18 !== var13)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                            var19 = _closure2_slot2;
                            var13 = var11;
                            var13 = var19.bind(var4)(var13);
                            var19 = _closure2_slot5;
                            var13 = false;
                            var13 = var19.bind(var4)(var13);
                            var13 = var15;
                            if(!(var17 != var13)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                            var13 = var15;
                            var11 = var13.bind(var4)(var11);
                            _fun0003_ip = 36; continue _fun0003;
case 34:
                            var13 = global;
                            var20 = var13.Promise;
                            var11 = var20.prototype;
                            var19 = Object.create(var11, {constructor: {value: var20}});
                            var22 = function(arg1) {
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = 500;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var23 = var19;
                            var11 = new var23[var20](var22, var21);
                            var11 = var11 instanceof Object ? var11 : var19;
                            SaveGenerator(address=335);
case 38:
                            return var11;
case 39:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=18);
                            if(var19) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                            var19 = _closure2_slot8;
                            var12 = var19.bind(var4)(var16, var12);
                            SaveGenerator(address=355);
case 42:
                            return var12;
case 43:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=15);
                            if(var16) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                            var14 = var12;
                            var16 = var12.length;
                            if(!(var18 !== var16)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                            var18 = _closure2_slot2;
                            var16 = var14;
                            var16 = var18.bind(var4)(var16);
                            var18 = _closure2_slot5;
                            var16 = false;
                            var16 = var18.bind(var4)(var16);
                            var16 = var15;
                            if(!(var17 != var16)) { _fun0003_ip = 36; continue _fun0003 }
case 48:
                            var14 = var15.bind(var4)(var14);
case 36: // try_end0
                            _fun0003_ip = 49; continue _fun0003;
case 46: // try_start_1
                            var15 = var13.Error;
                            var13 = var15.prototype;
                            var14 = Object.create(var13, {constructor: {value: var15}});
                            var22 = 'No entitlements found after order signing';
                            var23 = var14;
                            var13 = new var23[var15](var22, var21);
                            var13 = var13 instanceof Object ? var13 : var14;
                            throw var13;
case 44: // try_end1
                            return var12;
case 40:
                            return var11;
case 32:
                            return var9;
case 28: // try_start_2
                            var9 = var10;
                            var7 = var9;
                            var9 = var9.errors;
                            if(!var9) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                            var9 = var7;
                            var9 = var9.errors;
                            var11 = var9.length;
                            var9 = 0;
                            if(!(!(var11 > var9))) { _fun0003_ip = 52; continue _fun0003 }
case 50:
                            var9 = var10;
                            var11 = var9.status;
                            var9 = _closure1_slot9;
                            var9 = var9.DRAFT;
                            if(!(var11 !== var9)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                            var9 = global;
                            var11 = var9.Error;
                            var12 = var10.status;
                            var9 = var9.HermesInternal;
                            var10 = var9.concat;
                            var9 = 'Unexpected order status: ';
                            var22 = var10.bind(var9)(var12);
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {constructor: {value: var11}});
                            var23 = var10;
                            var9 = new var23[var11](var22, var21);
                            var9 = var9 instanceof Object ? var9 : var10;
                            throw var9;
case 53:
                            var9 = global;
                            var11 = var9.Error;
                            var9 = var11.prototype;
                            var10 = Object.create(var9, {constructor: {value: var11}});
                            var22 = 'Order could not be signed.';
                            var23 = var10;
                            var9 = new var23[var11](var22, var21);
                            var9 = var9 instanceof Object ? var9 : var10;
                            throw var9;
case 52:
                            var10 = var7.errors;
                            var6 = var10;
                            var9 = var10.includes;
                            var7 = 2000;
                            var7 = var9.bind(var10)(var7);
                            if(var7) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                            var9 = var6;
                            var7 = var9.join;
                            var6 = ', ';
                            var10 = var7.bind(var9)(var6);
                            var6 = global;
                            var7 = var6.HermesInternal;
                            var9 = var7.concat;
                            var7 = 'Order signing failed with errors: ';
                            var22 = var9.bind(var7)(var10);
                            var6 = var6.Error;
                            var7 = var6.prototype;
                            var7 = Object.create(var7, {constructor: {value: var6}});
                            var23 = var7;
                            var6 = new var23[var6](var22, var21);
                            var6 = var6 instanceof Object ? var6 : var7;
                            throw var6;
case 55:
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 8;
                            var6 = var9[var7];
                            var11 = var10.bind(var4)(var6);
                            var6 = var11.prototype;
                            var10 = Object.create(var6, {constructor: {value: var11}});
                            var22 = 'Insufficient balance';
                            var23 = var10;
                            var6 = new var23[var11](var22, var21);
                            var6 = var6 instanceof Object ? var6 : var10;
                            var8 = _closure1_slot0;
                            var7 = var9[var7];
                            var7 = var8.bind(var4)(var7);
                            var7 = var7.ErrorCodes;
                            var7 = var7.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE;
                            var6['code'] = var7;
                            throw var6;
case 26: // try_end2
                            return var5;
case 57: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=7);
                            var3 = var8;
                            var9 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var7 = 8;
                            var6 = var6[var7];
                            var6 = var9.bind(var4)(var6);
                            var6 = var8 instanceof var6;
                            if(var6) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var4)(var5);
                            var22 = var3;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {constructor: {value: var7}});
                            var23 = var6;
                            var5 = new var23[var7](var22, var21);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0003_ip = 60; continue _fun0003;
case 58:
                            var5 = var3;
case 60:
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
case 49:
                            return var4;
case 21:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var3 = var6.prototype;
                            var5 = Object.create(var3, {constructor: {value: var6}});
                            var22 = 'Order not created yet';
                            var23 = var5;
                            var3 = new var23[var6](var22, var21);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot5;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 19:
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
            var2 = new Array(2);
            var2[0] = var13;
            var2[1] = var11;
            var11 = var10.bind(var9)(var8, var2);
            var _closure2_slot9 = var11;
            var8 = function(arg1, arg2, arg3) {
                var1 = arg3;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
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
                        if(!(var4 != var5)) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)(var3);
case 61:
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
            var _closure2_slot10 = var2;
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
                    if(var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var6 = _closure2_slot10;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4, var3);
                    _fun0005_ip = 65; continue _fun0005;
case 63:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var5, var4, var3);
case 65:
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
                    if(!(var3 != var2)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
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
                    _fun0006_ip = 68; continue _fun0006;
case 66:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var2 = _closure2_slot1;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0006_ip = 14; continue _fun0006 }
case 69:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = '';
                    var2 = var4.bind(var3)(var2);
                    _fun0006_ip = 68; continue _fun0006;
case 14:
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
                            if(var3) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                            var1 = var2.name;
case 71:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
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
                    if(!(var10 === var8)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var14 = 'SKU';
case 73:
                    var8 = var11.join;
                    var9 = ', ';
                    var13 = var8.bind(var11)(var9);
                    var8 = _closure2_slot1;
                    var8 = var8.length;
                    var12 = 'IDs';
                    if(!(var10 === var8)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                    var12 = 'ID';
case 75:
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
case 68:
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