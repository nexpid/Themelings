// app/lib/NetworkQuality.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function round(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = arguments[1];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = 0;
 14:
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 38; continue _fun0001 }
 20:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.round;
            var1 = var2.bind(var3)(var4);
 38:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.NetworkConnectionTypes;
    var _closure1_slot5 = var7;
    var4 = var4.NetworkConnectionSpeeds;
    var _closure1_slot6 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function NetworkQuality() {
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = var3._initStats;
            var4 = var4.bind(var3)();
            var3['_networkStats'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3['_lastSampleTimestamp'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_initStats';
        var1['key'] = var2;
        var2 = function value() {
            var1 = {};
            var3 = {};
            var1['effectiveConnectionSpeedBuckets'] = var3;
            var3 = {};
            var1['connectionTypeBuckets'] = var3;
            var _closure3_slot0 = var1;
            var4 = global;
            var7 = var4.Object;
            var6 = var7.values;
            var5 = _closure1_slot5;
            var7 = var6.bind(var7)(var5);
            var6 = var7.forEach;
            var5 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.connectionTypeBuckets;
                var2 = 0;
                var1 = arg1;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var5 = var4.Object;
            var4 = var5.values;
            var3 = _closure1_slot6;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = _closure3_slot0;
                var3 = var1.effectiveConnectionSpeedBuckets;
                var2 = 0;
                var1 = arg1;
                var3[var1] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'getStats';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var5 = var1._networkStats;
            var1 = {};
            var4 = _closure1_slot7;
            var7 = var5.connectionTypeBuckets;
            var6 = _closure1_slot5;
            var3 = var6.WIFI;
            var7 = var7[var3];
            var3 = undefined;
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_wifi'] = var7;
            var8 = var5.connectionTypeBuckets;
            var7 = var6.CELLULAR;
            var7 = var8[var7];
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_cellular'] = var7;
            var8 = var5.connectionTypeBuckets;
            var7 = var6.ETHERNET;
            var7 = var8[var7];
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_ethernet'] = var7;
            var8 = var5.connectionTypeBuckets;
            var7 = var6.BLUETOOTH;
            var7 = var8[var7];
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_bluetooth'] = var7;
            var8 = var5.connectionTypeBuckets;
            var7 = var6.OTHER;
            var7 = var8[var7];
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_other'] = var7;
            var8 = var5.connectionTypeBuckets;
            var7 = var6.UNKNOWN;
            var7 = var8[var7];
            var7 = var4.bind(var3)(var7);
            var1['duration_connection_type_unknown'] = var7;
            var7 = var5.connectionTypeBuckets;
            var6 = var6.NONE;
            var6 = var7[var6];
            var6 = var4.bind(var3)(var6);
            var1['duration_connection_type_none'] = var6;
            var7 = var5.effectiveConnectionSpeedBuckets;
            var2 = _closure1_slot6;
            var6 = var2.TWO_G;
            var6 = var7[var6];
            var6 = var4.bind(var3)(var6);
            var1['duration_effective_connection_speed_2g'] = var6;
            var7 = var5.effectiveConnectionSpeedBuckets;
            var6 = var2.THREE_G;
            var6 = var7[var6];
            var6 = var4.bind(var3)(var6);
            var1['duration_effective_connection_speed_3g'] = var6;
            var7 = var5.effectiveConnectionSpeedBuckets;
            var6 = var2.FOUR_G;
            var6 = var7[var6];
            var6 = var4.bind(var3)(var6);
            var1['duration_effective_connection_speed_4g'] = var6;
            var7 = var5.effectiveConnectionSpeedBuckets;
            var6 = var2.FIVE_G;
            var6 = var7[var6];
            var6 = var4.bind(var3)(var6);
            var1['duration_effective_connection_speed_5g'] = var6;
            var5 = var5.effectiveConnectionSpeedBuckets;
            var2 = var2.UNKNOWN;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var1['duration_effective_connection_speed_unknown'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'incrementNetworkStats';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1._lastSampleTimestamp;
                var4 = var2 - var3;
                var3 = 1000;
                var6 = var4 / var3;
                var5 = _closure1_slot4;
                var4 = var5.getEffectiveConnectionSpeed;
                var7 = var4.bind(var5)();
                var4 = _closure1_slot6;
                var4 = var4.SLOW_TWO_G;
                if(!(var7 === var4)) { _fun0002_ip = 67; continue _fun0002 }
 57:
                var4 = _closure1_slot6;
                var7 = var4.TWO_G;
 67:
                var5 = _closure1_slot4;
                var4 = var5.getType;
                var5 = var4.bind(var5)();
                var4 = _closure1_slot5;
                var4 = var4.WIMAX;
                if(!(var5 === var4)) { _fun0002_ip = 105; continue _fun0002 }
 95:
                var3 = _closure1_slot5;
                var5 = var3.WIFI;
 105:
                var3 = var1._networkStats;
                var4 = var3.effectiveConnectionSpeedBuckets;
                var3 = var4[var7];
                var3 = var3 + var6;
                var4[var7] = var3;
                var3 = var1._networkStats;
                var4 = var3.connectionTypeBuckets;
                var3 = var4[var5];
                var3 = var3 + var6;
                var4[var5] = var3;
                var1['_lastSampleTimestamp'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/NetworkQuality.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();