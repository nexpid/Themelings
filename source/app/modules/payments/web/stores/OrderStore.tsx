// app/modules/payments/web/stores/OrderStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function OrderStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var10 = new Array(2);
                var10[0] = var1;
                var1 = {};
                var7 = function ORDER_CREATE_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderCreateStart;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_CREATE_START'] = var7;
                var7 = function ORDER_CREATE_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderCreateSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_CREATE_SUCCESS'] = var7;
                var7 = function ORDER_CREATE_FAIL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderCreateFail;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_CREATE_FAIL'] = var7;
                var7 = function ORDER_UPDATE_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderUpdateStart;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_UPDATE_START'] = var7;
                var7 = function ORDER_UPDATE_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderUpdateSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_UPDATE_SUCCESS'] = var7;
                var7 = function ORDER_UPDATE_FAIL(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderUpdateFail;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_UPDATE_FAIL'] = var7;
                var7 = function ORDER_DISCARD_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOrderDiscardSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['ORDER_DISCARD_SUCCESS'] = var7;
                var7 = function PAYMENT_MODAL_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handlePaymentModalOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['PAYMENT_MODAL_OPEN'] = var7;
                var10[1] = var1;
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = false;
                var1['_isCreatingOrder'] = var2;
                var1['_isUpdatingOrder'] = var2;
                var2 = null;
                var1['_order'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isCreatingOrder';
        var5['key'] = var1;
        var1 = function get() {
            var1 = this;
            var1 = var1._isCreatingOrder;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'currentOrderId';
        var5['key'] = var7;
        var7 = function get() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var3 = var1._order;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = var3.id;
case 9:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'currentOrder';
        var5['key'] = var7;
        var7 = function get() {
            var1 = this;
            var1 = var1._order;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'currentPaymentGateway';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var3 = var1._order;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 13; continue _fun0004 }
case 10:
                var3 = var3.billing_facet;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var3.payment_gateway;
case 13:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var1 = var2;
case 15:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleOrderCreateStart';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var3 = true;
                var1 = this;
                var1['_isCreatingOrder'] = var3;
                var1 = undefined;
                return var1;
case 17:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleOrderCreateSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var1.orderId;
                var3 = var1.order;
                var1 = false;
                var2['_isCreatingOrder'] = var1;
                var1 = null;
                var4 = var1 != var3;
                if(!var4) { _fun0006_ip = 19; continue _fun0006 }
case 14:
                var1 = var3;
case 19:
                var2['_order'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleOrderCreateFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                var3 = false;
                var1 = this;
                var1['_isCreatingOrder'] = var3;
                var1 = undefined;
                return var1;
case 17:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleOrderUpdateStart';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                var3 = true;
                var1 = this;
                var1['_isUpdatingOrder'] = var3;
                var1 = undefined;
                return var1;
case 17:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleOrderUpdateSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0009_ip = 17; continue _fun0009 }
case 18:
                var3 = false;
                var1 = this;
                var1['_isUpdatingOrder'] = var3;
                var1 = undefined;
                return var1;
case 17:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleOrderUpdateFail';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var2 != var1)) { _fun0010_ip = 17; continue _fun0010 }
case 18:
                var3 = false;
                var1 = this;
                var1['_isUpdatingOrder'] = var3;
                var1 = undefined;
                return var1;
case 17:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleOrderDiscardSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = this;
                var1 = arg1;
                var5 = var1.orderId;
                var6 = var3._order;
                var2 = null;
                var7 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var7) { _fun0011_ip = 20; continue _fun0011 }
case 21:
                var4 = var6.id;
case 20:
                if(!(var4 === var5)) { _fun0011_ip = 22; continue _fun0011 }
case 23:
                var3['_order'] = var2;
                return var1;
case 22:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handlePaymentModalOpen';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var3 = null;
                if(!(var2 != var3)) { _fun0012_ip = 24; continue _fun0012 }
case 18:
                var1 = this;
                var1['_order'] = var3;
                var1 = undefined;
                return var1;
case 24:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var2;
                var1 = throwTypeError(var5, var4);
                var1 = undefined;
                throw var1;
            }
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 'OrderStore';
    var2['displayName'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/web/stores/OrderStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();