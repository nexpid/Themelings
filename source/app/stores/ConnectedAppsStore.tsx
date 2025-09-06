// app/stores/ConnectedAppsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function ConnectedAppsStore() {
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
                var1 = _closure1_slot8;
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
        var1 = 'isConnected';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot7;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'connections';
        var5['key'] = var7;
        var7 = function get() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.values;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot7;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAllConnections';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ConnectedAppsStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.connectedApps;
        var2 = {};
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot7 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var8;
    var8 = function handleAppConnection(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.application;
            var1 = var5.id;
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 128; continue _fun0003 }
 19:
            var2 = var5.id;
            var3 = _closure1_slot7;
            var3 = var3[var2];
            if(!(var4 == var3)) { _fun0003_ip = 101; continue _fun0003 }
 39:
            var4 = _closure1_slot7;
            var3 = {};
            var6 = 0;
            var3['count'] = var6;
            var6 = var5.id;
            var3['id'] = var6;
            var6 = var5.name;
            var3['name'] = var6;
            var6 = var5.icon;
            var3['icon'] = var6;
            var5 = var5.coverImage;
            var3['coverImage'] = var5;
            var5 = false;
            var3['authenticated'] = var5;
            var4[var2] = var3;
 101:
            var1 = _closure1_slot7;
            var2 = var1[var2];
            var1 = var2.count;
            var1 = var1 + 1;
            var2['count'] = var1;
            var1 = undefined;
            return var1;
 128:
            var1 = false;
            return var1;
        }
    };
    var2['RPC_APP_CONNECTED'] = var8;
    var8 = function handleAppAuthenticated(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.application;
            var2 = var1.id;
            var4 = null;
            var2 = var4 != var2;
            if(!var2) { _fun0004_ip = 42; continue _fun0004 }
 22:
            var5 = _closure1_slot7;
            var3 = var1.id;
            var3 = var5[var3];
            var2 = var4 != var3;
 42:
            if(!var2) { _fun0004_ip = 69; continue _fun0004 }
 45:
            var2 = _closure1_slot7;
            var1 = var1.id;
            var2 = var2[var1];
            var1 = true;
            var2['authenticated'] = var1;
 69:
            var1 = undefined;
            return var1;
        }
    };
    var2['RPC_APP_AUTHENTICATED'] = var8;
    var4 = function handleAppDisconnection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.application;
            var2 = var1.id;
            var4 = null;
            var2 = var4 != var2;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
 22:
            var5 = _closure1_slot7;
            var3 = var1.id;
            var3 = var5[var3];
            var2 = var4 != var3;
 42:
            if(!var2) { _fun0005_ip = 114; continue _fun0005 }
 45:
            var4 = _closure1_slot7;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = var4.count;
            var3 = var3 - 1;
            var4['count'] = var3;
            var4 = _closure1_slot7;
            var3 = var1.id;
            var3 = var4[var3];
            var4 = var3.count;
            var3 = 0;
            if(!(var3 === var4)) { _fun0005_ip = 114; continue _fun0005 }
 101:
            var2 = _closure1_slot7;
            var1 = var1.id;
            var1 = delete var2[var1];
 114:
            var1 = undefined;
            return var1;
        }
    };
    var2['RPC_APP_DISCONNECTED'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ConnectedAppsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();