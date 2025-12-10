// app/modules/payments/web/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var2.skuId;
                    var12 = var2.paymentSourceId;
                    var11 = var2.paymentGateway;
                    var14 = var2.loadId;
                    var6 = undefined;
                    var5 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=47);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var13 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 2;
                    var10 = var10[var7];
                    var15 = var13.bind(var6)(var10);
                    var13 = var15.wait;
                    var10 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ORDER_CREATE_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var10 = var13.bind(var15)(var10);
case 8: // try_start_0
                    var5 = {};
                    var13 = var12;
                    var10 = null;
                    if(!(var10 != var13)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var13 = var5;
                    var13['payment_source_id'] = var12;
case 9:
                    var12 = var11;
                    if(!(var10 != var12)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var12 = var5;
                    var12['payment_gateway'] = var11;
case 11:
                    var12 = {};
                    var15 = {};
                    var15['sku_id'] = var8;
                    var8 = 1;
                    var15['quantity'] = var8;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = 3;
                    var13 = var11[var13];
                    var13 = var8.bind(var6)(var13);
                    var13 = var13.ItemPurchaseType;
                    var13 = var13.ONE_TIME;
                    var15['purchase_type'] = var13;
                    var13 = new Array(1);
                    var13[0] = var15;
                    var12['order_line_items'] = var13;
                    var12['billing_facet'] = var5;
                    var5 = 4;
                    var5 = var11[var5];
                    var5 = var8.bind(var6)(var5);
                    var11 = var5.HTTP;
                    var8 = var11.post;
                    var5 = {};
                    var13 = _closure1_slot4;
                    var13 = var13.ORDER_CREATE;
                    var5['url'] = var13;
                    var5['body'] = var12;
                    var12 = var14;
                    var13 = var10 != var12;
                    var12 = undefined;
                    if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var15 = var14;
                    var13 = '';
                    var12 = undefined;
                    if(!(var13 !== var15)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
                    var13 = {};
                    var13['load_id'] = var14;
                    var12 = var13;
case 13:
                    var5['context'] = var12;
                    var12 = true;
                    var5['rejectWithError'] = var12;
                    var5 = var8.bind(var11)(var5);
                    SaveGenerator(address=304);
case 16:
                    return var5;
case 17:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var8 = var5.body;
                    var9 = var8;
                    if(!(var10 != var8)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var8 = var9;
                    var8 = var8.id;
                    if(!(var10 != var8)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
                    var8 = var9;
                    var10 = var8.id;
                    var8 = '';
                    if(!(var8 !== var10)) { _fun0001_ip = 20; continue _fun0001 }
case 23:
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var11 = var10.bind(var6)(var8);
                    var10 = var11.dispatch;
                    var8 = {};
                    var12 = 'ORDER_CREATE_SUCCESS';
                    var8['type'] = var12;
                    var12 = var9;
                    var13 = var12.id;
                    var8['orderId'] = var13;
                    var8['order'] = var12;
                    var8 = var10.bind(var11)(var8);
                    SaveGenerator(address=414);
case 24:
                    return var8;
case 25:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27: // try_end0
                    return var9;
case 26:
                    return var8;
case 20: // try_start_1
                    var8 = global;
                    var10 = var8.Error;
                    var8 = var10.prototype;
                    var9 = Object.create(var8, {constructor: {value: var10}});
                    var16 = 'Invalid order response';
                    var17 = var9;
                    var8 = new var17[var10](var16, var15);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
case 18: // try_end1
                    return var5;
case 28: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_CREATE_FAIL';
                    var3['type'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=510);
case 29:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    throw var4;
case 31:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _updateOrder() {
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
                    if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 3:
                    var10 = var2.orderId;
                    var8 = var2.updates;
                    var4 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=33);
case 33:
                    return var4;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 2;
                    var5 = var5[var6];
                    var11 = var7.bind(var4)(var5);
                    var7 = var11.wait;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'ORDER_UPDATE_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var7.bind(var11)(var5);
case 37: // try_start_0
                    var9 = {};
                    var7 = var8;
                    var5 = 'paymentSourceId';
                    var5 = var5 in var7;
                    if(!var5) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var7 = var9;
                    var5 = {};
                    var8 = var8.paymentSourceId;
                    var5['payment_source_id'] = var8;
                    var7['billing_facet'] = var5;
case 38:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 4;
                    var5 = var8[var5];
                    var5 = var7.bind(var4)(var5);
                    var8 = var5.HTTP;
                    var7 = var8.patch;
                    var5 = {};
                    var13 = _closure1_slot4;
                    var12 = var13.ORDER_UPDATE;
                    var11 = var10;
                    var11 = var12.bind(var13)(var11);
                    var5['url'] = var11;
                    var5['body'] = var9;
                    var9 = true;
                    var5['rejectWithError'] = var9;
                    var5 = var7.bind(var8)(var5);
                    SaveGenerator(address=197);
case 40:
                    return var5;
case 41:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 42:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var9 = var8.bind(var4)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'ORDER_UPDATE_SUCCESS';
                    var7['type'] = var11;
                    var7['orderId'] = var10;
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=251);
case 43:
                    return var7;
case 44:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 45; continue _fun0002 }
case 46: // try_end0
                    _fun0002_ip = 47; continue _fun0002;
case 45:
                    return var7;
case 14:
                    return var5;
case 48: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'ORDER_UPDATE_FAIL';
                    var3['type'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=310);
case 49:
                    return var3;
case 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 51; continue _fun0002 }
case 47:
                    return var4;
case 51:
                    return var3;
case 35:
                    return var2;
case 21:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _signOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 46; continue _fun0003 }
case 3:
                    var9 = var2.orderId;
                    var3 = var2.expectedRevision;
                    var10 = var2.loadId;
                    var12 = undefined;
                    var8 = undefined;
                    var4 = undefined;
                    SaveGenerator(address=41);
case 52:
                    return var12;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 54; continue _fun0003 }
case 55: // try_start_0
                    var8 = {};
                    var5 = var3;
                    var6 = null;
                    if(!(var6 != var5)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                    var5 = var8;
                    var5['expected_revision'] = var3;
case 56:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var5.bind(var12)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.post;
                    var3 = {};
                    var13 = _closure1_slot4;
                    var11 = var13.ORDER_SIGN;
                    var9 = var11.bind(var13)(var9);
                    var3['url'] = var9;
                    var3['body'] = var8;
                    var8 = var10;
                    var9 = var6 != var8;
                    var8 = undefined;
                    if(!var9) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var11 = var10;
                    var9 = '';
                    var8 = undefined;
                    if(!(var9 !== var11)) { _fun0003_ip = 58; continue _fun0003 }
case 60:
                    var9 = {};
                    var9['load_id'] = var10;
                    var8 = var9;
case 58:
                    var3['context'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=185);
case 61:
                    return var3;
case 62:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var4 = var3;
                    var5 = var3.body;
                    if(!(var6 != var5)) { _fun0003_ip = 65; continue _fun0003 }
case 42:
                    var4 = var4.body;
case 66: // try_end0
                    return var4;
case 65: // try_start_1
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var14 = 'Invalid sign order response';
                    var15 = var5;
                    var4 = new var15[var6](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 63: // try_end1
                    return var3;
case 67: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    throw var3;
case 54:
                    return var2;
case 46:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/web/OrderActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createOrder() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createOrder'] = var4;
    var4 = function updateOrder() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateOrder'] = var4;
    var2 = function signOrder() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['signOrder'] = var2;
    return var1;
})();