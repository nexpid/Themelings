// app/modules/touch_analytics/TouchEventAnalyticsManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
    var1 = function truncate(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.length;
            var4 = 4096;
            var1 = var5;
            if(!(var2 > var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var5.slice;
            var2 = 0;
            var1 = var3.bind(var5)(var2, var4);
case 6:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function onTouchEvent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var1 = undefined;
            var19 = undefined;
            var17 = undefined;
            var13 = undefined;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
case 8: // try_start_0
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot9;
            var3 = var2.TOUCH_EVENT;
            var2 = {};
            var9 = var7;
            var8 = var9.eventType;
            var2['touch_action_type'] = var8;
            var8 = var9.timestamp;
            var2['client_timestamp_ms'] = var8;
            var8 = var9.screenX;
            var2['screen_x'] = var8;
            var8 = var9.screenY;
            var2['screen_y'] = var8;
            var8 = var9.viewX;
            var2['view_x'] = var8;
            var8 = var9.viewY;
            var2['view_y'] = var8;
            var8 = var9.totalMemoryMB;
            var2['total_memory_mb'] = var8;
            var18 = _closure1_slot15;
            var8 = global;
            var15 = var8.String;
            var14 = var9.memoryBreakdown;
            var19 = var14;
            var9 = null;
            var20 = var9 != var14;
            var16 = '';
            var14 = var16;
            if(!var20) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var14 = var19;
case 9:
            var14 = var15.bind(var1)(var14);
            var15 = 4096;
            var14 = var18.bind(var1)(var14, var15);
            var2['memory_breakdown'] = var14;
            var14 = _closure1_slot15;
            var6 = var8.String;
            var18 = var7;
            var18 = var18.viewHierarchy;
            var17 = var18;
            var18 = var9 != var18;
            if(!var18) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var16 = var17;
case 11:
            var6 = var6.bind(var1)(var16);
            var6 = var14.bind(var1)(var6, var15);
            var2['view_hierarchy'] = var6;
            var6 = var7;
            var6 = var6.gesture;
            var13 = var6;
            var14 = var9 != var6;
            var6 = null;
            if(!var14) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = var13;
case 13:
            var2['gesture'] = var6;
            var6 = var7;
            var6 = var6.windowName;
            var12 = var6;
            var13 = var9 != var6;
            var6 = null;
            if(!var13) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var6 = var12;
case 15:
            var2['window_name'] = var6;
            var6 = var7;
            var6 = var6.hitTestDurationUs;
            var12 = var9 != var6;
            var6 = null;
            if(!var12) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var13 = var8.Number;
            var12 = var7;
            var12 = var12.hitTestDurationUs;
            var6 = var13.bind(var1)(var12);
case 17:
            var2['hit_test_duration_us'] = var6;
            var6 = var7;
            var6 = var6.distance;
            var11 = var6;
            var12 = var9 != var6;
            var6 = null;
            if(!var12) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = var11;
case 19:
            var2['distance'] = var6;
            var6 = var7;
            var6 = var6.durationMs;
            var10 = var6;
            var11 = var9 != var6;
            var6 = null;
            if(!var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var6 = var10;
case 21:
            var2['duration_ms'] = var6;
            var6 = var7;
            var6 = var6.velocity;
            var11 = 'number';
            var10 = typeof var6;
            var6 = null;
            if(!(var11 === var10)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var13 = var8.Number;
            var12 = var13.isFinite;
            var10 = var7;
            var10 = var10.velocity;
            var10 = var12.bind(var13)(var10);
            var6 = null;
            if(!var10) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            var10 = var7;
            var6 = var10.velocity;
case 23:
            var2['velocity'] = var6;
            var6 = var7;
            var6 = var6.scaleFactor;
            var10 = typeof var6;
            var6 = null;
            if(!(var11 === var10)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var11 = var8.Number;
            var10 = var11.isFinite;
            var8 = var7;
            var8 = var8.scaleFactor;
            var8 = var10.bind(var11)(var8);
            var6 = null;
            if(!var8) { _fun0003_ip = 26; continue _fun0003 }
case 28:
            var6 = var7.scaleFactor;
case 26:
            var2['scale_factor'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 29: // try_end0
            _fun0003_ip = 30; continue _fun0003;
case 31: // catch_target0
            CatchBlockStart(arg_register=1);
case 30:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function updateEnabledState() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = undefined;
            var5 = undefined;
            var4 = _closure1_slot8;
            var2 = var4.getCurrentUser;
            var7 = var2.bind(var4)();
            var4 = null;
            var6 = var4 == var7;
            var2 = undefined;
            if(var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var6 = var7.isStaff;
            var2 = var6.bind(var7)();
case 32:
            var6 = true;
            var2 = var6 === var2;
            if(!var2) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var7 = _closure1_slot10;
            if(var7) { _fun0004_ip = 34; continue _fun0004 }
case 36: // try_start_0
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var10 = 9;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.enableTouchLogging;
            var7 = var7.bind(var8)();
            _closure1_slot11 = var6;
            var7 = _closure1_slot13;
            if(!(var4 == var7)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var12 = var8.bind(var1)(var7);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var13 = var8;
            var7 = new var13[var9](var12, var11);
            var7 = var7 instanceof Object ? var7 : var8;
            _closure1_slot13 = var7;
case 37:
            var7 = _closure1_slot12;
            if(!(var4 == var7)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var10 = _closure1_slot13;
            var9 = var10.addListener;
            var8 = _closure1_slot16;
            var7 = 'touchEvent';
            var7 = var9.bind(var10)(var7, var8);
            _closure1_slot12 = var7;
case 39:
            _closure1_slot10 = var6;
case 41: // try_end0
            _fun0004_ip = 42; continue _fun0004;
case 9: // catch_target0
            CatchBlockStart(arg_register=5);
            var6 = _closure1_slot11;
            if(!var6) { _fun0004_ip = 43; continue _fun0004 }
case 44: // try_start_1
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 9;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.disableTouchLogging;
            var6 = var6.bind(var7)();
case 45: // try_end1
            _fun0004_ip = 46; continue _fun0004;
case 47: // catch_target1
            CatchBlockStart(arg_register=5);
case 46:
            var6 = false;
            _closure1_slot11 = var6;
case 43:
            var6 = _closure1_slot12;
            var5 = var6;
            if(!(var4 != var6)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var6 = var5;
            var5 = var6.remove;
            var5 = var5.bind(var6)();
case 48:
            _closure1_slot12 = var4;
            var5 = false;
            _closure1_slot10 = var5;
            _fun0004_ip = 42; continue _fun0004;
case 34:
            if(var2) { _fun0004_ip = 42; continue _fun0004 }
case 50:
            var2 = _closure1_slot10;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = _closure1_slot11;
            if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 51:
            var2 = false;
            _closure1_slot10 = var2;
            var6 = _closure1_slot12;
            if(!(var4 != var6)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var5 = var6.remove;
            var5 = var5.bind(var6)();
case 53:
            _closure1_slot12 = var4;
            var4 = _closure1_slot11;
            if(!var4) { _fun0004_ip = 42; continue _fun0004 }
case 55: // try_start_2
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 9;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.disableTouchLogging;
            var4 = var4.bind(var5)();
case 56: // try_end2
            _fun0004_ip = 57; continue _fun0004;
case 58: // catch_target2
            CatchBlockStart(arg_register=3);
case 57:
            _closure1_slot11 = var2;
case 42:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var4.NativeEventEmitter;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = false;
    var _closure1_slot10 = var4;
    var _closure1_slot11 = var4;
    var4 = null;
    var _closure1_slot12 = var4;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function TouchEventAnalyticsManager() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 61; continue _fun0005;
case 59:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 61:
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = _closure1_slot17;
            var1 = undefined;
            var3 = var4.bind(var1)();
            var3 = _closure1_slot8;
            var2 = var3.addChangeListener;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot8;
                var3 = var4.removeChangeListener;
                var1 = _closure1_slot17;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot12;
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var3 = var4.remove;
                var3 = var3.bind(var4)();
case 62:
                _closure1_slot12 = var1;
                var1 = false;
                _closure1_slot10 = var1;
                var3 = _closure1_slot11;
                if(!var3) { _fun0006_ip = 64; continue _fun0006 }
case 65: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.disableTouchLogging;
                var3 = var3.bind(var4)();
case 66: // try_end0
                _fun0006_ip = 67; continue _fun0006;
case 68: // catch_target0
                CatchBlockStart(arg_register=2);
case 67:
                _closure1_slot11 = var1;
case 64:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/touch_analytics/TouchEventAnalyticsManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();