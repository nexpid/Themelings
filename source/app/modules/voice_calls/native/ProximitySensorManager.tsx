// app/modules/voice_calls/native/ProximitySensorManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot13 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function handleChange() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot10;
                var1 = var2.getCurrentRouteType;
                var8 = var1.bind(var2)();
                var2 = _closure1_slot9;
                var1 = var2.isConnected;
                var5 = var1.bind(var2)();
                var2 = _closure1_slot7;
                var1 = var2.getCurrentEmbeddedActivity;
                var2 = var1.bind(var2)();
                var1 = null;
                var7 = var1 != var2;
                var2 = _closure1_slot8;
                var1 = var2.getAllActiveStreams;
                var1 = var1.bind(var2)();
                var2 = var1.length;
                var1 = 0;
                var6 = var2 > var1;
                var3 = _closure1_slot12;
                var2 = var3.setProximityMonitoringEnabled;
                var1 = _closure1_slot11;
                var1 = var1.RECEIVER;
                var1 = var8 === var1;
                if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var1 = var5;
case 6:
                if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var8.bind(var4)(var5);
                var4 = var5.isIOS;
                var4 = var4.bind(var5)();
                if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var5 = !var7;
                if(var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var5 = !var6;
case 12:
                var4 = var5;
case 10:
                var1 = var4;
case 8:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot14 = var1;
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
        var4 = var7.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.NativeModules;
        var4 = 6;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 9;
        var9 = var6[var4];
        var9 = var7.bind(var1)(var9);
        var _closure1_slot10 = var9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.RouteTypes;
        var _closure1_slot11 = var4;
        var4 = 10;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isIOS;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var4 = 11;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 16; continue _fun0001;
case 14:
        var4 = var8.ProximitySensorManager;
case 16:
        var _closure1_slot12 = var4;
        var4 = 12;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var2 = function(arg1) {
            var3 = function ProximitySensorManager(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = this;
                    var13 = 0;
                    var1 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var1;
                    var11 = 0;
                    var1 = arraySpread(var13, var12, var11);
                    var1 = _closure1_slot5;
                    var9 = var1.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var1 = var9.apply;
                    var1 = var1.bind(var9)(var5, var10);
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var1 = var7.bind(var8)(var9, var10, var6);
case 19:
                    var1 = var3.bind(var4)(var5, var1);
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var6 = var3 instanceof Object ? var3 : var4;
                    var4 = var6.set;
                    var3 = _closure1_slot10;
                    var5 = _closure1_slot14;
                    var4 = var4.bind(var6)(var3, var5);
                    var3 = var4.set;
                    var2 = _closure1_slot9;
                    var2 = var3.bind(var4)(var2, var5);
                    var1['stores'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var3;
            var5 = _closure1_slot6;
            var2 = undefined;
            var4 = arg1;
            var4 = var5.bind(var2)(var3, var4);
            var1 = _closure1_slot2;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var2 = var2.bind(var1)(var4);
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var13 = var4;
        var2 = new var13[var2](var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/voice_calls/native/ProximitySensorManager.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();