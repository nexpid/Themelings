// app/modules/payments/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _signOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = var2.orderId;
                    var3 = var2.expectedRevision;
                    var10 = var2.loadId;
                    var12 = undefined;
                    var8 = undefined;
                    var4 = undefined;
                    SaveGenerator(address=41);
case 4:
                    return var12;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var8 = {};
                    var5 = var3;
                    var6 = null;
                    if(!(var6 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = var8;
                    var5['expected_revision'] = var3;
case 8:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var3 = var5.bind(var12)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.post;
                    var3 = {};
                    var13 = _closure1_slot3;
                    var11 = var13.ORDER_SIGN;
                    var9 = var11.bind(var13)(var9);
                    var3['url'] = var9;
                    var3['body'] = var8;
                    var8 = var10;
                    var9 = var6 != var8;
                    var8 = undefined;
                    if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = var10;
                    var9 = '';
                    var8 = undefined;
                    if(!(var9 !== var11)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
                    var9 = {};
                    var9['load_id'] = var10;
                    var8 = var9;
case 10:
                    var3['context'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=183);
case 13:
                    return var3;
case 14:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var4 = var3;
                    var5 = var3.body;
                    if(!(var6 != var5)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var4 = var4.body;
case 19: // try_end0
                    return var4;
case 17: // try_start_1
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var14 = 'Invalid sign order response';
                    var15 = var5;
                    var4 = new var15[var6](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 15: // try_end1
                    return var3;
case 20: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    throw var3;
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
    var1 = function _getOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var3 = arg1;
case 3: // try_start_0
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.ORDER_GET;
                    var7 = var3;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=87);
case 23:
                    return var2;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var5 = var2.body;
                    var4 = var5;
                    if(var5) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var4 = null;
case 27: // try_end0
                    return var4;
case 25:
                    return var2;
case 29: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var8 = _closure1_slot4;
                    var6 = var8.error;
                    var4 = {};
                    var4['error'] = var5;
                    var7 = var3;
                    var4['orderId'] = var7;
                    var3 = 'failed to fetch order';
                    var3 = var6.bind(var8)(var3, var4);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureBillingException;
                    var2 = {};
                    var6 = {};
                    var8 = 'OrderActionCreators_getOrder';
                    var6['source'] = var8;
                    var2['tags'] = var6;
                    var6 = {};
                    var6['orderId'] = var7;
                    var2['extra'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
                    var2 = null;
                    return var2;
case 21:
                    return var1;
                }
            };
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'OrderActionCreators';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/OrderActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function signOrder() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['signOrder'] = var4;
    var2 = function getOrder() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getOrder'] = var2;
    return var1;
})();