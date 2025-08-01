// app/modules/devtools/AnalyticsLogStore.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function resolveFingerprint(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 28; continue _fun0002 }
 9:
            var2 = _closure1_slot7;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            _fun0002_ip = 64; continue _fun0002;
 28:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.extractId;
            var1 = var2.bind(var3)(var4);
 64:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var2;
    var8 = new Array(0);
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var2;
    var2 = new Array(0);
    var _closure1_slot12 = var2;
    var2 = false;
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function AnalyticsLogStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'loggedEvents';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'loggedEventsVersion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'loggedTriggers';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'trackTriggers';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'AnalyticsLogStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleTrack(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = var2.event;
            var1 = var2.properties;
            var7 = var2.fingerprint;
            var3 = _closure1_slot8;
            var3 = var3.isDeveloper;
            if(!var3) { _fun0004_ip = 213; continue _fun0004 }
 40:
            var5 = _closure1_slot10;
            var4 = var5.push;
            var3 = {};
            var8 = _closure1_slot9;
            var9 = parseFloat(var8);
            var8 = var9 + 1;
            _closure1_slot9 = var8;
            var8 = var9.toString;
            var8 = var8.bind(var9)();
            var3['key'] = var8;
            var3['event'] = var6;
            var3['properties'] = var1;
            var6 = _closure1_slot15;
            var1 = undefined;
            var1 = var6.bind(var1)(var7);
            var3['fingerprint'] = var1;
            var1 = global;
            var6 = var1.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var11 = var7;
            var6 = new var11[var6](var10);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['timestamp'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot11;
            var3 = var3 + 1;
            _closure1_slot11 = var3;
            var3 = _closure1_slot10;
            var4 = var3.length;
            var3 = 500;
            if(!(var4 > var3)) { _fun0004_ip = 213; continue _fun0004 }
 172:
            var4 = _closure1_slot10;
            var3 = var4.slice;
            var6 = var1.Math;
            var5 = var6.floor;
            var1 = 250;
            var1 = var5.bind(var6)(var1);
            var1 = -var1;
            var1 = var3.bind(var4)(var1);
            _closure1_slot10 = var1;
 213:
            var1 = undefined;
            return var1;
        }
    };
    var2['TRACK'] = var9;
    var9 = function handleTrackTrigger(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var11 = var1.experimentId;
            var10 = var1.descriptor;
            var9 = var1.exposureType;
            var8 = var1.excluded;
            var7 = var1.location;
            var6 = var1.previouslyTracked;
            var2 = _closure1_slot8;
            var2 = var2.isDeveloper;
            if(!var2) { _fun0005_ip = 58; continue _fun0005 }
 54:
            var2 = _closure1_slot13;
 58:
            if(!var2) { _fun0005_ip = 212; continue _fun0005 }
 64:
            var16 = _closure1_slot12;
            var3 = new Array(1);
            var15 = 0;
            var17 = var3;
            var5 = arraySpread(var17, var16, var15);
            var4 = {};
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var12 = 8;
            var13 = var13[var12];
            var12 = undefined;
            var13 = var14.bind(var12)(var13);
            var12 = var13.v4;
            var12 = var12.bind(var13)();
            var4['key'] = var12;
            var4['experimentId'] = var11;
            var4['descriptor'] = var10;
            var4['exposureType'] = var9;
            var4['excluded'] = var8;
            var4['location'] = var7;
            var4['previouslyTracked'] = var6;
            var6 = global;
            var6 = var6.Date;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var18 = var7;
            var6 = new var18[var6](var17);
            var6 = var6 instanceof Object ? var6 : var7;
            var4['timestamp'] = var6;
            var3[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot12 = var3;
            var4 = var3.length;
            var3 = 500;
            var2 = var4 > var3;
 212:
            if(!var2) { _fun0005_ip = 229; continue _fun0005 }
 215:
            var2 = _closure1_slot12;
            var1 = var2.shift;
            var1 = var1.bind(var2)();
 229:
            var1 = undefined;
            return var1;
        }
    };
    var2['TRACK_TRIGGER'] = var9;
    var9 = function handleSetTrackTriggers(arg1) {
        var1 = arg1;
        var2 = var1.enabled;
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_TRACK_TRIGGERS'] = var9;
    var4 = function handleAnalyticsLogClear() {
        var1 = new Array(0);
        _closure1_slot10 = var1;
        var1 = _closure1_slot11;
        var1 = var1 + 1;
        _closure1_slot11 = var1;
        var1 = new Array(0);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ANALYTICS_LOG_CLEAR'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/AnalyticsLogStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();