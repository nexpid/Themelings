// app/modules/foreground_service/mobile/ForegroundServiceManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function socketToken(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'ForegroundService:';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function ForegroundServiceManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = global;
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['serviceNotifications'] = var4;
            var4 = 1;
            var3['serviceNotificationIdentifier'] = var4;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure3_slot0;
                    var2 = var2.serviceNotifications;
                    var2 = var2.size;
                    var5 = 0;
                    if(!(!(var2 > var5))) { _fun0002_ip = 51; continue _fun0002 }
 24:
                    var2 = _closure1_slot8;
                    var3 = var2.ForegroundServiceModule;
                    var2 = var3.stopService;
                    var2 = var2.bind(var3)();
                    _fun0002_ip = 109; continue _fun0002;
 51:
                    var2 = _closure1_slot8;
                    var3 = var2.ForegroundServiceModule;
                    var2 = var3.startService;
                    var1 = _closure3_slot0;
                    var4 = var1.serviceNotifications;
                    var1 = var4.values;
                    var7 = var1.bind(var4)();
                    var1 = new Array(0);
                    var8 = var1;
                    var6 = 0;
                    var4 = arraySpread(var8, var7, var6);
                    var1 = var2.bind(var3)(var1);
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'addServiceHandler';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1) {
                var4 = _closure3_slot0;
                var3 = var4.serviceNotificationIdentifier;
                var2 = var4.serviceNotificationIdentifier;
                var2 = var2 + 1;
                var4['serviceNotificationIdentifier'] = var2;
                var2 = var4.updateServiceHandler;
                var1 = _closure3_slot1;
                var1 = var2.bind(var4)(var3, var1);
                var2 = arg1;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updateServiceHandler';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var5 = arg2;
                var2 = this;
                var1 = null;
                if(!(var1 != var5)) { _fun0003_ip = 171; continue _fun0003 }
 18:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 7;
                var3 = var7[var3];
                var7 = undefined;
                var6 = var6.bind(var7)(var3);
                var8 = var2.serviceNotifications;
                var3 = var8.get;
                var3 = var3.bind(var8)(var4);
                var3 = var6.bind(var7)(var3, var5);
                if(var3) { _fun0003_ip = 261; continue _fun0003 }
 71:
                var3 = var5.usesGateway;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 6;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                if(var3) { _fun0003_ip = 122; continue _fun0003 }
 100:
                var8 = var6.stopRequest;
                var3 = _closure1_slot11;
                var3 = var3.bind(var7)(var4);
                var3 = var8.bind(var6)(var3);
                _fun0003_ip = 142; continue _fun0003;
 122:
                var3 = var6.setRequestedBy;
                var1 = _closure1_slot11;
                var1 = var1.bind(var7)(var4);
                var1 = var3.bind(var6)(var1);
 142:
                var3 = var2.serviceNotifications;
                var1 = var3.set;
                var1 = var1.bind(var3)(var4, var5);
                var1 = var2.handleChange;
                var1 = var1.bind(var2)();
                _fun0003_ip = 261; continue _fun0003;
 171:
                var3 = var2.serviceNotifications;
                var1 = var3.has;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0003_ip = 261; continue _fun0003 }
 190:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var6 = undefined;
                var5 = var5.bind(var6)(var3);
                var3 = var5.stopRequest;
                var1 = _closure1_slot11;
                var1 = var1.bind(var6)(var4);
                var1 = var3.bind(var5)(var1);
                var3 = var2.serviceNotifications;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                var1 = var2.handleChange;
                var1 = var1.bind(var2)();
 261:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'removeServiceHandler';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var3 = var4.updateServiceHandler;
            var2 = arg1;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isForegroundServiceRunning';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = _closure1_slot8;
            var3 = var1.ForegroundServiceModule;
            var2 = var3.isServiceRunning;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ForegroundServiceLifecycleManager() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot9;
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot9;
            var1 = var2.terminate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'addServiceHandler';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.addServiceHandler;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'updateServiceHandler';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = _closure1_slot9;
            var3 = var4.updateServiceHandler;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'removeServiceHandler';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.removeServiceHandler;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isForegroundServiceRunning';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.isForegroundServiceRunning;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/foreground_service/mobile/ForegroundServiceManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();