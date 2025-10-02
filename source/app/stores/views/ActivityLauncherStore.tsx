// app/stores/views/ActivityLauncherStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function startActivityLaunchTimeout(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot13;
            var3 = var1[var4];
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot13;
            var3 = var1[var4];
            var1 = var3.stop;
            var1 = var1.bind(var3)();
case 6:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var3 = var3.Timeout;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var10 = var6;
            var3 = new var10[var3](var9);
            var3 = var3 instanceof Object ? var3 : var6;
            var7 = var3.start;
            var6 = arg3;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'ACTIVITY_LAUNCH_FAIL';
                var1['type'] = var4;
                var5 = _closure2_slot0;
                var1['applicationId'] = var5;
                var4 = _closure2_slot1;
                var1['activityType'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var7.bind(var3)(var6, var5);
            var2 = _closure1_slot13;
            var2[var4] = var3;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function handleActivityStateChanged(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var1 = arg3;
            var3 = var1.applicationId;
            var6 = var1.remotePartyId;
            var1 = _closure1_slot10;
            var1 = var1.COMPLETE;
            if(!(var7 !== var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = _closure1_slot12;
            var8 = var1[var3];
            var4 = null;
            if(!(var4 == var8)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var8 = {};
case 10:
            var1 = {};
            var1['state'] = var7;
            var1['remotePartyId'] = var6;
            var8[var5] = var1;
            var1 = _closure1_slot12;
            var1[var3] = var8;
            var1 = _closure1_slot10;
            var1 = var1.FAILED;
            if(!(var7 !== var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = _closure1_slot10;
            var1 = var1.LOADING;
            var1 = var7 === var1;
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var4 != var6;
case 14:
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = _closure1_slot15;
            var4 = undefined;
            var1 = 15000;
            var1 = var6.bind(var4)(var3, var5, var1);
            _fun0003_ip = 16; continue _fun0003;
case 12:
            var6 = _closure1_slot15;
            var4 = undefined;
            var1 = 120000;
            var1 = var6.bind(var4)(var3, var5, var1);
case 16:
            var1 = undefined;
            return var1;
case 8:
            var1 = _closure1_slot12;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = delete var1[var5];
case 18:
            var1 = _closure1_slot13;
            var1 = var1[var3];
            var1 = var4 != var1;
            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var4 = _closure1_slot13;
            var5 = var4[var3];
            var4 = var5.stop;
            var4 = var4.bind(var5)();
            var2 = _closure1_slot13;
            var1 = delete var2[var3];
case 20:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var9 = function handleActivityComplete(arg1) {
        var5 = _closure1_slot16;
        var2 = _closure1_slot10;
        var4 = var2.COMPLETE;
        var1 = _closure1_slot11;
        var3 = var1.JOIN;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var1 = function handleActivityUpdate() {
        var2 = global;
        var4 = var2.Object;
        var3 = var4.entries;
        var2 = _closure1_slot12;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var1 = var6[Symbol.iterator];
                var6 = var1().next;
                var4 = var6().value;
                var3 = var1;
                var2 = undefined;
                var5 = var3 === var2;
                var3 = undefined;
                if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var3 = var4;
case 22:
                var4 = undefined;
                if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var7 = var6().value;
                var6 = var1;
                var6 = var6 === var2;
                var4 = undefined;
                var5 = var6;
                if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 6:
                var4 = var7;
                var5 = var6;
case 24:
                if(var5) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var1.return();
case 26:
                var1 = {};
                var1['applicationId'] = var3;
                var3 = _closure1_slot11;
                var3 = var3.JOIN;
                var3 = var4[var3];
                var4 = null;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var2 = var3.remotePartyId;
case 28:
                var1['remotePartyId'] = var2;
                return var1;
            }
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.remotePartyId;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var7 = var1.applicationId;
                var6 = var1.remotePartyId;
                var3 = _closure1_slot8;
                var1 = var3.getApplicationActivity;
                var4 = var1.bind(var3)(var7);
                var3 = _closure1_slot9;
                var1 = var3.getApplicationActivity;
                var5 = var1.bind(var3)(var7);
                var8 = null;
                var9 = var8 == var4;
                var1 = undefined;
                var3 = undefined;
                if(var9) { _fun0005_ip = 30; continue _fun0005 }
case 27:
                var4 = var4.party;
                var9 = var8 == var4;
                var3 = undefined;
                if(var9) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var3 = var4.id;
case 30:
                var3 = var3 !== var6;
                if(!var3) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var9 = var8 == var5;
                var4 = undefined;
                if(var9) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var5 = var5.party;
                var8 = var8 == var5;
                var4 = undefined;
                if(var8) { _fun0005_ip = 34; continue _fun0005 }
case 36:
                var4 = var5.id;
case 34:
                var3 = var4 !== var6;
case 32:
                if(var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var5 = _closure1_slot16;
                var3 = _closure1_slot10;
                var4 = var3.COMPLETE;
                var2 = _closure1_slot11;
                var3 = var2.JOIN;
                var2 = {};
                var2['applicationId'] = var7;
                var2['remotePartyId'] = var6;
                var2 = var5.bind(var1)(var4, var3, var2);
                var2 = true;
                _closure2_slot0 = var2;
case 37:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ActivityActionStates;
    var _closure1_slot10 = var8;
    var2 = var2.ActivityActionTypes;
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ActivityLauncherStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 39; continue _fun0006 }
case 6:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 40; continue _fun0006;
case 39:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 40:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(2);
            var2[0] = var5;
            var5 = _closure1_slot9;
            var2[1] = var5;
            var1 = _closure1_slot17;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var5 = var2[var1];
                var3 = null;
                var2 = var3 == var5;
                var1 = undefined;
                if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                var2 = arg2;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 41; continue _fun0007 }
case 43:
                var1 = var2.state;
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStates';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ActivityLauncherStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.activityLauncherStates;
        var2 = {};
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function ACTIVITY_JOIN_LOADING(arg1) {
        var5 = _closure1_slot16;
        var2 = _closure1_slot10;
        var4 = var2.LOADING;
        var1 = _closure1_slot11;
        var3 = var1.JOIN;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var2['ACTIVITY_JOIN_LOADING'] = var10;
    var10 = function ACTIVITY_JOIN_FAILED(arg1) {
        var5 = _closure1_slot16;
        var2 = _closure1_slot10;
        var4 = var2.FAILED;
        var1 = _closure1_slot11;
        var3 = var1.JOIN;
        var2 = undefined;
        var1 = arg1;
        var1 = var5.bind(var2)(var4, var3, var1);
        return var1;
    };
    var2['ACTIVITY_JOIN_FAILED'] = var10;
    var2['ACTIVITY_JOIN'] = var9;
    var2['EMBEDDED_ACTIVITY_CLOSE'] = var9;
    var4 = function handleActivityLaunchFail(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var2 = var1.activityType;
            var1 = _closure1_slot12;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var1)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var2['ACTIVITY_LAUNCH_FAIL'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/views/ActivityLauncherStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();