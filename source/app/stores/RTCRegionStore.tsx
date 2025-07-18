// app/stores/RTCRegionStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var7 = 1;
    var2 = var5[var7];
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
    var2 = {'preferredRegions': null, 'lastTestTimestamp': null, 'lastGeoRankedOrder': null};
    var _closure1_slot7 = var2;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.HOUR;
    var2 = var7 * var2;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function RTCRegionStore() {
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
                var1 = _closure1_slot10;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 16; continue _fun0003 }
 9:
                var2 = _closure1_slot7;
 16:
                _closure1_slot8 = var2;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldIncludePreferredRegion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var2 = var1.preferredRegions;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPreferredRegion';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot8;
                var4 = var1.preferredRegions;
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0004_ip = 30; continue _fun0004 }
 24:
                var3 = 0;
                var2 = var4[var3];
 30:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0004_ip = 42; continue _fun0004 }
 39:
                var1 = var2;
 42:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPreferredRegions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.preferredRegions;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getRegion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0005_ip = 13; continue _fun0005 }
 9:
                var1 = undefined;
                return var1;
 13:
                var3 = var4.substr;
                var2 = var4.search;
                var1 = /\d/;
                var2 = var2.bind(var4)(var1);
                var1 = 0;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'shouldPerformLatencyTest';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure1_slot8;
                var1 = var1.preferredRegions;
                var3 = null;
                var1 = var3 === var1;
                if(var1) { _fun0006_ip = 80; continue _fun0006 }
 22:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.isEqual;
                var4 = _closure1_slot8;
                var5 = var4.lastGeoRankedOrder;
                if(!(var3 == var5)) { _fun0006_ip = 68; continue _fun0006 }
 64:
                var5 = new Array(0);
 68:
                var4 = arg1;
                var4 = var6.bind(var7)(var4, var5);
                var1 = !var4;
 80:
                if(var1) { _fun0006_ip = 134; continue _fun0006 }
 83:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot8;
                var5 = var5.lastTestTimestamp;
                var6 = var3 != var5;
                var3 = 0;
                if(!var6) { _fun0006_ip = 122; continue _fun0006 }
 119:
                var3 = var5;
 122:
                var3 = var4 - var3;
                var2 = _closure1_slot9;
                var1 = var3 >= var2;
 134:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'RTCRegionStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.preferredRegion;
            if(var2) { _fun0007_ip = 22; continue _fun0007 }
 12:
            var2 = null;
            var1['preferredRegions'] = var2;
            _fun0007_ip = 42; continue _fun0007;
 22:
            var3 = var1.preferredRegion;
            var2 = new Array(1);
            var2[0] = var3;
            var1['preferredRegions'] = var2;
 42:
            var2 = delete var1.preferredRegion;
            return var1;
        }
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var4 = function handleCompletedRTCLatencyTest(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.latencyRankedRegions;
            var3 = var2.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0008_ip = 55; continue _fun0008 }
 20:
            var4 = _closure1_slot8;
            var3 = var1.geoRankedRegions;
            var4['lastGeoRankedOrder'] = var3;
            var2 = _closure1_slot8;
            var1 = var1.latencyRankedRegions;
            var2['preferredRegions'] = var1;
 55:
            var2 = _closure1_slot8;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['lastTestTimestamp'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['RTC_LATENCY_TEST_COMPLETE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/RTCRegionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();