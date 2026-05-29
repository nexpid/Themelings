// app/modules/payments/OrderActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _signOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var11 = var2.orderId;
                    var7 = var2.expectedRevision;
                    var12 = var2.loadId;
                    var9 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=41);
case 8:
                    return var9;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var10 = {};
                    var5 = null;
                    if(!(var5 != var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var10;
                    var4['expected_revision'] = var7;
case 12: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 9;
                    var4 = var8[var4];
                    var4 = var7.bind(var9)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.post;
                    var4 = {};
                    var14 = _closure1_slot8;
                    var13 = var14.ORDER_SIGN;
                    var11 = var13.bind(var14)(var11);
                    var4['url'] = var11;
                    var4['body'] = var10;
                    var10 = var12;
                    var11 = var5 != var10;
                    var10 = undefined;
                    if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var13 = var12;
                    var11 = '';
                    var10 = undefined;
                    if(!(var11 !== var13)) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var11 = {};
                    var11['load_id'] = var12;
                    var10 = var11;
case 14:
                    var4['context'] = var10;
                    var10 = true;
                    var4['rejectWithError'] = var10;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=180);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = var4;
case 21: // try_end0
                    var7 = var6;
                    var7 = var7.body;
                    if(!(var5 != var7)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = var6.body;
                    return var6;
case 22:
                    var6 = global;
                    var8 = var6.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var15 = 'Invalid sign order response';
                    var16 = var7;
                    var6 = new var16[var8](var15, var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 19:
                    return var4;
case 24: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var3 = var7;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 9;
                    var6 = var10[var6];
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.HTTPResponseError;
                    var6 = var7 instanceof var6;
                    if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var6 = var3;
                    var7 = var6.status;
                    var6 = 400;
                    if(!(var6 === var7)) { _fun0002_ip = 25; continue _fun0002 }
case 27:
                    var6 = var3;
                    var7 = var6.body;
                    var5 = var5 != var7;
                    if(!var5) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var8 = 'object';
                    var6 = typeof var7;
                    var5 = var8 === var6;
case 28:
                    if(!var5) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var6 = 'id';
                    var5 = var6 in var7;
case 30:
                    if(!var5) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var6 = 'status';
                    var5 = var6 in var7;
case 32:
                    if(var5) { _fun0002_ip = 34; continue _fun0002 }
case 25:
                    var5 = var3;
                    throw var5;
case 34:
                    var5 = _closure1_slot10;
                    var15 = var3.body;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var16 = var4;
                    var3 = new var16[var5](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 10:
                    return var2;
case 6:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _getOrder() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var3 = arg1;
case 7: // try_start_0
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot8;
                    var8 = var9.ORDER_GET;
                    var7 = var3;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=87);
case 37:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var5 = var2.body;
                    var4 = var5;
                    if(var5) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var4 = null;
case 41: // try_end0
                    return var4;
case 39:
                    return var2;
case 43: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var8 = _closure1_slot9;
                    var6 = var8.error;
                    var4 = {};
                    var4['error'] = var5;
                    var7 = var3;
                    var4['orderId'] = var7;
                    var3 = 'failed to fetch order';
                    var3 = var6.bind(var8)(var3, var4);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 10;
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
case 35:
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
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'OrderActionCreators';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var7[var4];
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var3 = function OrderSigningFailedWithConstraintsError(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var9 = ['Order signing failed due to unsatisfied constraints'];
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 5; continue _fun0004 }
case 44:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0004_ip = 41; continue _fun0004;
case 5:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 41:
                var1 = var2.bind(var3)(var4, var1);
                var2 = arg1;
                var1['order'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var _closure1_slot10 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/payments/OrderActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['OrderSigningFailedWithConstraintsError'] = var4;
    var4 = function signOrder() {
        var1 = undefined;
        var4 = _closure1_slot12;
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
        var4 = _closure1_slot13;
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