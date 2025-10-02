// app/stores/SessionsStore.tsx
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var4 = function handleUpdate(arg1) {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = arg1;
        var3 = var1.sessions;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var2 = _closure1_slot9;
            var1 = var3.sessionId;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var5[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var6.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var9 = var7.Object;
    var8 = var9.freeze;
    var7 = new Array(0);
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var7 = var7.Store;
    var2 = function(arg1) {
        var4 = function SessionsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSessions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSession';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot7;
                var1 = var2.getSessionId;
                var3 = var1.bind(var2)();
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = var4.getSessionById;
                var1 = var2.bind(var4)(var3);
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getRemoteActivities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getSessionId;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.find;
                var3 = _closure1_slot9;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.active;
                        if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                        var3 = var2.sessionId;
                        var2 = _closure3_slot0;
                        var1 = var3 !== var2;
case 10:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var3 = null;
                if(!(var3 == var2)) { _fun0004_ip = 12; continue _fun0004 }
case 5:
                var1 = _closure1_slot8;
                _fun0004_ip = 13; continue _fun0004;
case 12:
                var1 = var2.activities;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getHiddenActivities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getSessionId;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.find;
                var3 = _closure1_slot9;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.active;
                        if(!var1) { _fun0007_ip = 10; continue _fun0007 }
case 11:
                        var3 = var2.sessionId;
                        var2 = _closure3_slot0;
                        var1 = var3 !== var2;
case 10:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var4 = null;
                if(!(var4 != var2)) { _fun0006_ip = 14; continue _fun0006 }
case 5:
                var3 = var2.hiddenActivities;
                if(!(var4 == var3)) { _fun0006_ip = 15; continue _fun0006 }
case 14:
                var1 = _closure1_slot8;
                _fun0006_ip = 16; continue _fun0006;
case 15:
                var1 = var2.hiddenActivities;
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSessionById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getActiveSession';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.find;
            var2 = _closure1_slot9;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.active;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getRemoteApplicationActivity';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                var5 = _closure1_slot7;
                var3 = var5.getSessionId;
                var3 = var3.bind(var5)();
                var _closure3_slot1 = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 6;
                var5 = var5[var3];
                var3 = undefined;
                var7 = var6.bind(var3)(var5);
                var6 = var7.find;
                var5 = _closure1_slot9;
                var2 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.active;
                        if(!var1) { _fun0009_ip = 10; continue _fun0009 }
case 11:
                        var3 = var2.sessionId;
                        var2 = _closure3_slot1;
                        var1 = var3 !== var2;
case 10:
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5, var2);
                if(!(var1 != var5)) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                var7 = var5.activities;
                var6 = var7.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                if(!(var1 == var2)) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                var6 = var5.hiddenActivities;
                var5 = var1 == var6;
                var3 = undefined;
                if(var5) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var5 = var6.find;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var6)(var4);
case 23:
                var2 = var3;
case 21:
                return var2;
case 19:
                return var1;
case 17:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'SessionsStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var4;
    var2['SESSIONS_REPLACE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SessionsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();