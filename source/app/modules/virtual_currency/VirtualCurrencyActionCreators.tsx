// app/modules/virtual_currency/VirtualCurrencyActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function fetchVirtualCurrencyBalance() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = function _fetchVirtualCurrencyBalance() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 3;
                    var6 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.wait;
                    var6 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VIRTUAL_CURRENCY_BALANCE_FETCH';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 4;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var8 = var6.HTTP;
                    var7 = var8.get;
                    var6 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.VIRTUAL_CURRENCY_USER_BALANCE;
                    var6['url'] = var9;
                    var9 = false;
                    var6['rejectWithError'] = var9;
                    var6 = var7.bind(var8)(var6);
                    SaveGenerator(address=116);
case 5:
                    return var6;
case 6:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var6.body;
                    var10 = var7.balance;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS';
                    var7['type'] = var11;
                    var7['balance'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var7 = var6.body;
case 9: // try_end0
                    return var7;
case 7:
                    return var6;
case 10: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var4 = var7;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var8 = 5;
                    var6 = var6[var8];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.BillingError;
                    var6 = var7 instanceof var6;
                    if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var2)(var6);
                    var8 = var6.BillingError;
                    var12 = var4;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var13 = var7;
                    var6 = new var13[var8](var12, var11);
                    var6 = var6 instanceof Object ? var6 : var7;
                    _fun0001_ip = 13; continue _fun0001;
case 11:
                    var6 = var4;
case 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _redeemVirtualCurrencyForSKU() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = var2.skuId;
                    var13 = var3;
                    var _closure4_slot0 = var3;
                    var18 = var2.loadId;
                    var10 = var2.onRedeemStart;
                    var12 = var2.onRedeemSucceed;
                    var5 = var2.onRedeemFail;
                    var2 = var2.shouldRefetchBalance;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = true;
case 16:
                    var8 = var2;
                    var14 = undefined;
                    var4 = undefined;
                    SaveGenerator(address=79);
case 18:
                    return var3;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 3;
                    var15 = var15[var11];
                    var16 = var16.bind(var3)(var15);
                    var15 = var16.wait;
                    var7 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VIRTUAL_CURRENCY_REDEEM_START';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['skuId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var7 = var15.bind(var16)(var7);
                    var7 = null;
                    if(!(var7 != var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var10 = var10.bind(var3)();
case 22: // try_start_0
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var10 = 4;
                    var10 = var16[var10];
                    var10 = var15.bind(var3)(var10);
                    var16 = var10.HTTP;
                    var15 = var16.post;
                    var10 = {};
                    var20 = _closure1_slot4;
                    var19 = var20.VIRTUAL_CURRENCY_SKU_REDEEM;
                    var17 = var13;
                    var17 = var19.bind(var20)(var17);
                    var10['url'] = var17;
                    var17 = {};
                    var17['checkout_session_id'] = var18;
                    var10['body'] = var17;
                    var17 = false;
                    var10['rejectWithError'] = var17;
                    var10 = var15.bind(var16)(var10);
                    SaveGenerator(address=222);
case 24:
                    return var10;
case 25:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=14);
                    if(var15) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var15 = var10.body;
                    var14 = var15;
                    if(!(var7 != var15)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var15 = global;
                    var17 = var15.Array;
                    var16 = var17.isArray;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
                    if(!var15) { _fun0002_ip = 28; continue _fun0002 }
case 30:
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var11];
                    var17 = var16.bind(var3)(var15);
                    var16 = var17.dispatch;
                    var15 = {};
                    var18 = 'VIRTUAL_CURRENCY_REDEEM_SUCCESS';
                    var15['type'] = var18;
                    var18 = var13;
                    var15['skuId'] = var18;
                    var18 = var14;
                    var15['entitlements'] = var18;
                    var15 = var16.bind(var17)(var15);
                    var15 = var8;
                    if(!var15) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var15 = _closure1_slot6;
                    var15 = var15.bind(var3)();
case 31:
                    var15 = var12;
                    if(!(var7 != var15)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var15 = var12;
                    var12 = var14;
                    var12 = var15.bind(var3)(var12);
case 33:
                    var12 = var14;
case 35: // try_end0
                    return var12;
case 28: // try_start_1
                    var12 = global;
                    var12 = var12.Error;
                    var17 = var14;
                    var14 = var12.prototype;
                    var14 = Object.create(var14, {constructor: {value: var12}});
                    var16 = 'Could not read entitlements from Virtual Currency redemption response. Response: ';
                    var23 = var14;
                    var22 = var16;
                    var21 = var17;
                    var12 = new var23[var12](var22, var21, var20);
                    var12 = var12 instanceof Object ? var12 : var14;
                    var15 = _closure1_slot5;
                    var14 = var15.error;
                    var14 = var14.bind(var15)(var16, var17);
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var14 = 6;
                    var14 = var16[var14];
                    var16 = var15.bind(var3)(var14);
                    var15 = var16.captureException;
                    var14 = {};
                    var17 = {};
                    var18 = 'virtual_currency';
                    var17['app_context'] = var18;
                    var14['tags'] = var17;
                    var14 = var15.bind(var16)(var12, var14);
                    throw var12;
case 26: // try_end1
                    return var10;
case 36: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=11);
                    var9 = var12;
                    var15 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var14 = 5;
                    var10 = var10[var14];
                    var10 = var15.bind(var3)(var10);
                    var10 = var10.BillingError;
                    var10 = var12 instanceof var10;
                    if(var10) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var14];
                    var10 = var12.bind(var3)(var10);
                    var14 = var10.BillingError;
                    var22 = var9;
                    var12 = var14.prototype;
                    var12 = Object.create(var12, {constructor: {value: var14}});
                    var23 = var12;
                    var10 = new var23[var14](var22, var21);
                    var12 = var10 instanceof Object ? var10 : var12;
                    _fun0002_ip = 39; continue _fun0002;
case 37:
                    var12 = var9;
case 39:
                    var4 = var12;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var11];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var14 = 'VIRTUAL_CURRENCY_REDEEM_FAIL';
                    var9['type'] = var14;
                    var9['skuId'] = var13;
                    var9['error'] = var12;
                    var9 = var10.bind(var11)(var9);
                    if(!var8) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)();
case 40:
                    var6 = var5;
                    if(!(var7 != var6)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var4 = var5.bind(var3)(var4);
case 42:
                    return var3;
case 20:
                    return var2;
case 14:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'VirtualCurrencyActionCreators';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot5 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/VirtualCurrencyActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['fetchVirtualCurrencyBalance'] = var4;
    var4 = function redeemVirtualCurrencyForSKU() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['redeemVirtualCurrencyForSKU'] = var4;
    var2 = function setBalancePillOverlay(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY';
        var1['type'] = var4;
        var4 = arg1;
        var1['balancePillOverlay'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['setBalancePillOverlay'] = var2;
    return var1;
})();