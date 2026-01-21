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
    var8 = var4.useState;
    var _closure1_slot5 = var8;
    var8 = var4.useEffect;
    var _closure1_slot6 = var8;
    var8 = var4.useRef;
    var _closure1_slot7 = var8;
    var4 = var4.useCallback;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRedeemVirtualCurrency() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = _closure1_slot5;
            var11 = undefined;
            var3 = '';
            var3 = var13.bind(var11)(var3);
            var12 = _closure1_slot4;
            var10 = 2;
            var5 = var12.bind(var11)(var3, var10);
            var4 = 0;
            var3 = var5[var4];
            var9 = 1;
            var5 = var5[var9];
            var _closure2_slot0 = var5;
            var5 = new Array(0);
            var5 = var13.bind(var11)(var5);
            var5 = var12.bind(var11)(var5, var10);
            var8 = var5[var4];
            var _closure2_slot1 = var8;
            var5 = var5[var9];
            var _closure2_slot2 = var5;
            var6 = null;
            var5 = var13.bind(var11)(var6);
            var5 = var12.bind(var11)(var5, var10);
            var7 = var5[var4];
            var _closure2_slot3 = var7;
            var5 = var5[var9];
            var _closure2_slot4 = var5;
            var5 = false;
            var5 = var13.bind(var11)(var5);
            var5 = var12.bind(var11)(var5, var10);
            var4 = var5[var4];
            var5 = var5[var9];
            var _closure2_slot5 = var5;
            var5 = _closure1_slot7;
            var5 = var5.bind(var11)(var6);
            var _closure2_slot6 = var5;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 5;
            var5 = var13[var5];
            var9 = var6.bind(var11)(var5);
            var6 = var9.useConfig;
            var5 = {};
            var10 = 'orb_checkout_modal';
            var5['location'] = var10;
            var5 = var6.bind(var9)(var5);
            var5 = var5.enabled;
            var _closure2_slot7 = var5;
            var12 = _closure1_slot0;
            var10 = 6;
            var6 = var13[var10];
            var16 = var12.bind(var11)(var6);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot9;
            var14 = new Array(1);
            var14[0] = var9;
            var6 = function() {
                var1 = _closure1_slot9;
                var1 = var1.isCreatingOrder;
                return var1;
            };
            var6 = var15.bind(var16)(var14, var6);
            var10 = var13[var10];
            var13 = var12.bind(var11)(var10);
            var12 = var13.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var1 = _closure1_slot9;
                var1 = var1.currentOrder;
                return var1;
            };
            var9 = var12.bind(var13)(var10, var9);
            var _closure2_slot8 = var9;
            var10 = _closure1_slot6;
            var12 = new Array(2);
            var12[0] = var9;
            var12[1] = var5;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot7;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot8;
                    var3 = null;
                    var2 = var3 != var4;
case 2:
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot6;
                    var3 = var3.current;
                    var4 = null;
                    var5 = var4 == var3;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var3.id;
case 6:
                    var3 = _closure2_slot8;
                    var3 = var3.id;
                    var2 = var4 !== var3;
case 4:
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot8;
                    var2['current'] = var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var12);
            var12 = _closure1_slot8;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var2 = arg2;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var8 = arg1;
                            var6 = undefined;
                            var7 = undefined;
                            var4 = undefined;
                            var5 = null;
                            if(!(var5 == var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 7;
                            var3 = var10[var3];
                            var10 = var9.bind(var6)(var3);
                            var9 = var10.getApplicationIdForOrbSKU;
                            var3 = var8;
                            var2 = var9.bind(var10)(var3);
case 12:
                            var7 = var2;
case 14: // try_start_0
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 8;
                            var2 = var10[var2];
                            var2 = var3.bind(var6)(var2);
                            var6 = var2.HTTP;
                            var3 = var6.get;
                            var2 = {};
                            var10 = _closure1_slot10;
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
case 15:
                            return var2;
case 16:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                            var3 = var2.body;
                            var4 = var3;
                            if(!(var5 == var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                            var3 = new Array(0);
                            _fun0003_ip = 21; continue _fun0003;
case 19:
                            var3 = var4;
case 21: // try_end0
                            return var3;
case 17:
                            return var2;
case 22: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var2 = new Array(0);
                            return var2;
case 10:
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
            var9 = var2.bind(var11)();
            var2 = new Array(0);
            var13 = var12.bind(var11)(var9, var2);
            var _closure2_slot9 = var13;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 3:
                            var17 = arg1;
                            var14 = arg2;
                            var16 = arg3;
                            var4 = undefined;
                            var19 = undefined;
                            var10 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var12 = undefined;
                            var11 = undefined;
                            var15 = undefined;
                            var5 = _closure2_slot6;
                            var5 = var5.current;
                            var19 = var5;
                            var18 = null;
                            if(!(var18 != var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                            var8 = _closure2_slot5;
                            var5 = true;
                            var5 = var8.bind(var4)(var5);
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var4)(var18);
case 26: // try_start_0
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var5 = 10;
                            var5 = var13[var5];
                            var13 = var9.bind(var4)(var5);
                            var9 = var13.signOrder;
                            var5 = {};
                            var20 = var19.id;
                            var5['orderId'] = var20;
                            var19 = var19.revision;
                            var5['expectedRevision'] = var19;
                            var5['loadId'] = var14;
                            var5 = var9.bind(var13)(var5);
                            SaveGenerator(address=145);
case 27:
                            return var5;
case 28:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                            if(var9) { _fun0004_ip = 29; continue _fun0004 }
case 15:
                            var10 = var5;
                            var9 = _closure2_slot6;
                            var9['current'] = var5;
                            var14 = var5.status;
                            var19 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var13 = 11;
                            var9 = var9[var13];
                            var9 = var19.bind(var4)(var9);
                            var9 = var9.OrderStatus;
                            var9 = var9.SIGNED;
                            if(!(var14 === var9)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                            var14 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var9 = 7;
                            var9 = var19[var9];
                            var14 = var14.bind(var4)(var9);
                            var9 = var14.getApplicationIdForOrbSKU;
                            var19 = var17;
                            var14 = var9.bind(var14)(var19);
                            var12 = var14;
                            var9 = _closure2_slot9;
                            var9 = var9.bind(var4)(var19, var14);
                            SaveGenerator(address=262);
case 32:
                            return var9;
case 33:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=13);
                            if(var14) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                            var11 = var9;
                            var14 = var9.length;
                            var19 = 0;
                            if(!(var19 !== var14)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                            var20 = _closure2_slot2;
                            var14 = var11;
                            var14 = var20.bind(var4)(var14);
                            var20 = _closure2_slot5;
                            var14 = false;
                            var14 = var20.bind(var4)(var14);
                            var14 = var16;
                            if(!(var18 != var14)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                            var14 = var16;
                            var11 = var14.bind(var4)(var11);
                            _fun0004_ip = 38; continue _fun0004;
case 36:
                            var14 = global;
                            var21 = var14.Promise;
                            var11 = var21.prototype;
                            var20 = Object.create(var11, {constructor: {value: var21}});
                            var23 = function(arg1) {
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = 500;
                                var1 = var4.bind(var3)(var2, var1);
                                return var1;
                            };
                            var24 = var20;
                            var11 = new var24[var21](var23, var22);
                            var11 = var11 instanceof Object ? var11 : var20;
                            SaveGenerator(address=369);
case 40:
                            return var11;
case 41:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=19);
                            if(var20) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                            var20 = _closure2_slot9;
                            var12 = var20.bind(var4)(var17, var12);
                            SaveGenerator(address=389);
case 44:
                            return var12;
case 45:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                            if(var17) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                            var15 = var12;
                            var17 = var12.length;
                            if(!(var19 !== var17)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                            var19 = _closure2_slot2;
                            var17 = var15;
                            var17 = var19.bind(var4)(var17);
                            var19 = _closure2_slot5;
                            var17 = false;
                            var17 = var19.bind(var4)(var17);
                            var17 = var16;
                            if(!(var18 != var17)) { _fun0004_ip = 38; continue _fun0004 }
case 50:
                            var15 = var16.bind(var4)(var15);
case 38: // try_end0
                            _fun0004_ip = 51; continue _fun0004;
case 48: // try_start_1
                            var16 = var14.Error;
                            var14 = var16.prototype;
                            var15 = Object.create(var14, {constructor: {value: var16}});
                            var23 = 'No entitlements found after order signing';
                            var24 = var15;
                            var14 = new var24[var16](var23, var22);
                            var14 = var14 instanceof Object ? var14 : var15;
                            throw var14;
case 46: // try_end1
                            return var12;
case 42:
                            return var11;
case 34:
                            return var9;
case 30: // try_start_2
                            var9 = var10;
                            var7 = var9;
                            var9 = var9.errors;
                            if(!var9) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                            var9 = var7;
                            var9 = var9.errors;
                            var11 = var9.length;
                            var9 = 0;
                            if(!(!(var11 > var9))) { _fun0004_ip = 54; continue _fun0004 }
case 52:
                            var9 = var10;
                            var11 = var9.status;
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var13];
                            var9 = var12.bind(var4)(var9);
                            var9 = var9.OrderStatus;
                            var9 = var9.DRAFT;
                            if(!(var11 !== var9)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                            var9 = global;
                            var11 = var9.Error;
                            var12 = var10.status;
                            var9 = var9.HermesInternal;
                            var10 = var9.concat;
                            var9 = 'Unexpected order status: ';
                            var23 = var10.bind(var9)(var12);
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {constructor: {value: var11}});
                            var24 = var10;
                            var9 = new var24[var11](var23, var22);
                            var9 = var9 instanceof Object ? var9 : var10;
                            throw var9;
case 55:
                            var9 = global;
                            var11 = var9.Error;
                            var9 = var11.prototype;
                            var10 = Object.create(var9, {constructor: {value: var11}});
                            var23 = 'Order could not be signed.';
                            var24 = var10;
                            var9 = new var24[var11](var23, var22);
                            var9 = var9 instanceof Object ? var9 : var10;
                            throw var9;
case 54:
                            var10 = var7.errors;
                            var6 = var10;
                            var9 = var10.includes;
                            var7 = 2000;
                            var7 = var9.bind(var10)(var7);
                            if(var7) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                            var9 = var6;
                            var7 = var9.join;
                            var6 = ', ';
                            var10 = var7.bind(var9)(var6);
                            var6 = global;
                            var7 = var6.HermesInternal;
                            var9 = var7.concat;
                            var7 = 'Order signing failed with errors: ';
                            var23 = var9.bind(var7)(var10);
                            var6 = var6.Error;
                            var7 = var6.prototype;
                            var7 = Object.create(var7, {constructor: {value: var6}});
                            var24 = var7;
                            var6 = new var24[var6](var23, var22);
                            var6 = var6 instanceof Object ? var6 : var7;
                            throw var6;
case 57:
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 9;
                            var6 = var9[var7];
                            var11 = var10.bind(var4)(var6);
                            var6 = var11.prototype;
                            var10 = Object.create(var6, {constructor: {value: var11}});
                            var23 = 'Insufficient balance';
                            var24 = var10;
                            var6 = new var24[var11](var23, var22);
                            var6 = var6 instanceof Object ? var6 : var10;
                            var8 = _closure1_slot0;
                            var7 = var9[var7];
                            var7 = var8.bind(var4)(var7);
                            var7 = var7.ErrorCodes;
                            var7 = var7.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE;
                            var6['code'] = var7;
                            throw var6;
case 29: // try_end2
                            return var5;
case 59: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=7);
                            var3 = var8;
                            var9 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var7 = 9;
                            var6 = var6[var7];
                            var6 = var9.bind(var4)(var6);
                            var6 = var8 instanceof var6;
                            if(var6) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var4)(var5);
                            var23 = var3;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {constructor: {value: var7}});
                            var24 = var6;
                            var5 = new var24[var7](var23, var22);
                            var5 = var5 instanceof Object ? var5 : var6;
                            _fun0004_ip = 62; continue _fun0004;
case 60:
                            var5 = var3;
case 62:
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var5 = _closure2_slot5;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
case 51:
                            return var4;
case 24:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var3 = var6[var3];
                            var6 = var5.bind(var4)(var3);
                            var3 = var6.prototype;
                            var5 = Object.create(var3, {constructor: {value: var6}});
                            var23 = 'Order not created yet';
                            var24 = var5;
                            var3 = new var24[var6](var23, var22);
                            var5 = var3 instanceof Object ? var3 : var5;
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var5);
                            var3 = _closure2_slot5;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
case 23:
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
            var9 = var2.bind(var11)();
            var2 = new Array(1);
            var2[0] = var13;
            var13 = var12.bind(var11)(var9, var2);
            var _closure2_slot10 = var13;
            var9 = function(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arguments[3];
                    var1 = arg3;
                    var _closure3_slot0 = var1;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0005_ip = 2; continue _fun0005 }
case 63:
                    var4 = false;
case 2:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.redeemVirtualCurrencyForSKU;
                    var1 = {};
                    var6 = arg1;
                    var1['skuId'] = var6;
                    var6 = arg2;
                    var1['loadId'] = var6;
                    var6 = function onRedeemStart() {
                        var4 = _closure2_slot5;
                        var1 = undefined;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot4;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onRedeemStart'] = var6;
                    var6 = function onRedeemSucceed(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                            if(!(var4 != var5)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                            var2 = _closure3_slot0;
                            var2 = var2.bind(var1)(var3);
case 64:
                            return var1;
                        }
                    };
                    var1['onRedeemSucceed'] = var6;
                    var5 = function onRedeemFail(arg1) {
                        var4 = _closure2_slot4;
                        var1 = undefined;
                        var3 = arg1;
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure2_slot5;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onRedeemFail'] = var5;
                    var1['isRental'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = new Array(0);
            var2 = var12.bind(var11)(var9, var2);
            var _closure2_slot11 = var2;
            var9 = new Array(3);
            var9[0] = var5;
            var9[1] = var13;
            var9[2] = var2;
            var2 = function(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = arguments[3];
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0007_ip = 2; continue _fun0007 }
case 63:
                    var2 = false;
case 2:
                    var7 = _closure2_slot7;
                    if(var7) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                    var7 = _closure2_slot11;
                    var12 = undefined;
                    var11 = var6;
                    var10 = var5;
                    var9 = var4;
                    var8 = var2;
                    var7 = var12[var7](var11, var10, var9, var8, var7);
                    _fun0007_ip = 14; continue _fun0007;
case 66:
                    if(var2) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var3)(var6, var5, var4);
case 14:
                    return var3;
case 68:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {constructor: {value: var5}});
                    var11 = 'Rental orders are not supported via Orders API yet';
                    var12 = var4;
                    var2 = new var12[var5](var11, var10);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure2_slot5;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var11)(var2, var9);
            var9 = new Array(2);
            var9[0] = var8;
            var9[1] = var7;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 13;
                    var6 = var9[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var6);
                    var8 = var6.intl;
                    var6 = var8.format;
                    var2 = var9[var2];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.t;
                    var4 = var2.7gHWrd;
                    var2 = {};
                    var9 = '1 orb';
                    var2['amount'] = var9;
                    var9 = _closure2_slot3;
                    var9 = var9.message;
                    var2['errorMessage'] = var9;
                    var4 = var6.bind(var8)(var4, var2);
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var5)(var4);
                    _fun0008_ip = 72; continue _fun0008;
case 70:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var2 = _closure2_slot1;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0008_ip = 18; continue _fun0008 }
case 73:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var2 = '';
                    var2 = var4.bind(var3)(var2);
                    _fun0008_ip = 72; continue _fun0008;
case 18:
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.sku;
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if(var3) { _fun0009_ip = 75; continue _fun0009 }
case 2:
                            var1 = var2.name;
case 75:
                            return var1;
                        }
                    };
                    var11 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 13;
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
                    if(!(var10 === var8)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var14 = 'SKU';
case 76:
                    var8 = var11.join;
                    var9 = ', ';
                    var13 = var8.bind(var11)(var9);
                    var8 = _closure2_slot1;
                    var8 = var8.length;
                    var12 = 'IDs';
                    if(!(var10 === var8)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                    var12 = 'ID';
case 78:
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
case 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var9);
            var1 = {};
            var1['entitlements'] = var8;
            var1['error'] = var7;
            if(var4) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            if(!var5) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var5 = var6;
case 82:
            var4 = var5;
case 80:
            var1['isSubmitting'] = var4;
            var1['responseMessage'] = var3;
            var1['redeemVirtualCurrency'] = var2;
            return var1;
        }
    };
    var3['useRedeemVirtualCurrency'] = var2;
    return var1;
})();