// app/stores/ConsentStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = false;
    var _closure1_slot5 = var2;
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = null;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConsentStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'hasConsented';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot7;
                var4 = var1[var3];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0003_ip = 39; continue _fun0003 }
 23:
                var2 = _closure1_slot7;
                var2 = var2[var3];
                var1 = var2.consented;
 39:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'consents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'fetchedConsents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'receivedConsentsInConnectionOpen';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAuthenticationConsentRequired';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ConsentStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleConnectionOpen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.consents;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 51; continue _fun0004 }
 15:
            var1 = {};
            var5 = _closure1_slot7;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var6 = var1;
            var5 = var3;
            var3 = copyDataProperties(var6, var5);
            _closure1_slot7 = var1;
            var1 = true;
            _closure1_slot6 = var1;
 51:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.consents;
        var1 = {};
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot7 = var1;
        var1 = true;
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var8;
    var8 = function handleUpdateConsents(arg1) {
        var1 = arg1;
        var3 = var1.consents;
        var1 = {};
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot7 = var1;
        var1 = true;
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var2['UPDATE_CONSENTS'] = var8;
    var8 = function handleConsentRequired(arg1) {
        var1 = arg1;
        var2 = var1.consentRequired;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_CONSENT_REQUIRED'] = var8;
    var4 = function handleLogout() {
        var1 = null;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ConsentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();