// app/modules/premium/native/OrderStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function clearOrder() {
        var1 = null;
        _closure1_slot10 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GPlayBillingResult;
    var _closure1_slot7 = var2;
    var2 = false;
    var _closure1_slot8 = var2;
    var _closure1_slot9 = var2;
    var8 = null;
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function OrderStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'isUpdatingOrder';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'currentOrderId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isSigningInProgress';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'OrderStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleOrderCreateStart(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0003_ip = 22; continue _fun0003 }
 9:
            var1 = true;
            _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
 22:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_CREATE_START'] = var9;
    var9 = function handleOrderCreateSuccess(arg1) {
        var1 = arg1;
        var2 = var1.orderId;
        var3 = false;
        _closure1_slot8 = var3;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ORDER_CREATE_SUCCESS'] = var9;
    var9 = function handleOrderCreateFail(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0004_ip = 26; continue _fun0004 }
 9:
            var4 = false;
            _closure1_slot8 = var4;
            _closure1_slot10 = var3;
            var1 = undefined;
            return var1;
 26:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_CREATE_FAIL'] = var9;
    var9 = function handleOrderUpdateStart(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0005_ip = 22; continue _fun0005 }
 9:
            var1 = true;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
 22:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_UPDATE_START'] = var9;
    var9 = function handleOrderUpdateSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0006_ip = 22; continue _fun0006 }
 9:
            var1 = false;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
 22:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_UPDATE_SUCCESS'] = var9;
    var9 = function handleOrderUpdateFail(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0007_ip = 22; continue _fun0007 }
 9:
            var1 = false;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
 22:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_UPDATE_FAIL'] = var9;
    var9 = function handleOrderMarkSigningStart(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0008_ip = 22; continue _fun0008 }
 9:
            var1 = true;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
 22:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_MARK_SIGNING_START'] = var9;
    var9 = function handleOrderMarkSigningSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0009_ip = 32; continue _fun0009 }
 9:
            var4 = false;
            _closure1_slot9 = var4;
            var4 = true;
            _closure1_slot11 = var4;
            _closure1_slot10 = var3;
            var1 = undefined;
            return var1;
 32:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_MARK_SIGNING_SUCCESS'] = var9;
    var9 = function handleOrderMarkSigningFail(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var3 = null;
            if(!(var2 != var3)) { _fun0010_ip = 26; continue _fun0010 }
 9:
            var4 = false;
            _closure1_slot9 = var4;
            _closure1_slot10 = var3;
            var1 = undefined;
            return var1;
 26:
            var5 = "Cannot destructure 'undefined' or 'null'.";
            var6 = var2;
            var1 = throwTypeError(var6, var5);
            var1 = undefined;
            throw var1;
        }
    };
    var2['ORDER_MARK_SIGNING_FAIL'] = var9;
    var9 = function handleGPlayPurchaseVerificationFailed(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0011_ip = 24; continue _fun0011 }
 9:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            return var1;
 24:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['GPLAY_PURCHASE_VERIFICATION_FAILED'] = var9;
    var9 = function handleGPlayUpdatePurchaseState(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.billingResult;
            var1 = _closure1_slot7;
            var1 = var1.OK;
            if(!(var3 !== var1)) { _fun0012_ip = 38; continue _fun0012 }
 26:
            var3 = _closure1_slot13;
            var1 = undefined;
            var1 = var3.bind(var1)();
            _fun0012_ip = 141; continue _fun0012;
 38:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0012_ip = 145; continue _fun0012 }
 72:
            var3 = _closure1_slot10;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 145; continue _fun0012 }
 82:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 7;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.markOrderAsSigningInProgress;
            var3 = _closure1_slot10;
            var5 = var4.bind(var5)(var3);
            var4 = var5.catch;
            var3 = function() {
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot10 = var1;
 141:
            var1 = undefined;
            return var1;
 145:
            var1 = false;
            return var1;
        }
    };
    var2['GPLAY_UPDATE_PURCHASE_STATE'] = var9;
    var4 = function handlePaymentModalOpen(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0013_ip = 24; continue _fun0013 }
 9:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            return var1;
 24:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['PAYMENT_MODAL_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/OrderStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();