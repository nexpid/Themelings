// app/modules/monitoring/MonitoringAgent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot4 = var5;
    var8 = var2.Set;
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var13 = ['darwin', 'linux', 'win32', 'ios', 'android'];
    var14 = var5;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot5 = var2;
    var2 = {};
    var5 = 'count';
    var2['COUNT'] = var5;
    var5 = 'distribution';
    var2['DISTRIBUTION'] = var5;
    var _closure1_slot6 = var2;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = function MonitoringAgent() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = this;
                var _closure3_slot0 = var5;
                var6 = _closure1_slot2;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var6.bind(var1)(var5, var3);
                var3 = new Array(0);
                var5['_metrics'] = var3;
                var3 = global;
                var7 = var3.setInterval;
                var6 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2._flush;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var3 = 120000;
                var3 = var7.bind(var1)(var6, var3);
                var5['_intervalId'] = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var5 = var7.bind(var1)(var3);
                var3 = var5.NativeModules;
                var5 = var5.NativeEventEmitter;
                var6 = 3;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                if(var6) { _fun0001_ip = 138; continue _fun0001 }
 128:
                var3 = var3.MetricMonitor;
                _fun0001_ip = 163; continue _fun0001;
 138:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var3 = var4.default;
 163:
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var11 = var4;
                var10 = var3;
                var3 = new var11[var5](var10, var9);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var5.addListener;
                var3 = 'logMetric';
                var2 = function(arg1) {
                    var4 = _closure3_slot0;
                    var3 = var4.increment;
                    var2 = arg1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = '_getMetricWithDefaults';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1.name;
                var6 = var1.tags;
                var1 = {};
                var1['name'] = var2;
                var2 = arg2;
                var1['type'] = var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 8;
                var2 = var7[var2];
                var7 = undefined;
                var5 = var5.bind(var7)(var2);
                var2 = var5.getGlobalTagsArray;
                var2 = var2.bind(var5)();
                var1['tags'] = var2;
                var _closure3_slot0 = var1;
                var2 = null;
                if(!(var2 != var6)) { _fun0002_ip = 94; continue _fun0002 }
 79:
                var5 = var6.forEach;
                var3 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.tags;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
 94:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 3;
                var3 = var3[var6];
                var5 = var5.bind(var7)(var3);
                var3 = var5.isWeb;
                var3 = var3.bind(var5)();
                var9 = 'web';
                if(var3) { _fun0002_ip = 183; continue _fun0002 }
 131:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var5 = var5.bind(var7)(var3);
                var3 = var5.getPlatformName;
                var5 = var3.bind(var5)();
                var6 = _closure1_slot5;
                var3 = var6.has;
                var6 = var3.bind(var6)(var5);
                var3 = null;
                if(!var6) { _fun0002_ip = 180; continue _fun0002 }
 177:
                var3 = var5;
 180:
                var9 = var3;
 183:
                if(!(var2 != var9)) { _fun0002_ip = 227; continue _fun0002 }
 187:
                var6 = var1.tags;
                var5 = var6.push;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var3 = 'platform:';
                var3 = var8.bind(var3)(var9);
                var3 = var5.bind(var6)(var3);
 227:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var7)(var3);
                var3 = var3.CurrentReleaseChannel;
                var5 = var2 != var3;
                var6 = null;
                if(!var5) { _fun0002_ip = 312; continue _fun0002 }
 262:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var4 = var4.ReleaseChannelsSets;
                var5 = var4.ALL;
                var4 = var5.has;
                var4 = var4.bind(var5)(var3);
                var6 = null;
                if(!var4) { _fun0002_ip = 312; continue _fun0002 }
 309:
                var6 = var3;
 312:
                if(!(var2 != var6)) { _fun0002_ip = 356; continue _fun0002 }
 316:
                var4 = var1.tags;
                var3 = var4.push;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'release_channel:';
                var2 = var5.bind(var2)(var6);
                var2 = var3.bind(var4)(var2);
 356:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'increment';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0003_ip = 14; continue _fun0003 }
 12:
                var2 = false;
 14:
                var6 = var3._getMetricWithDefaults;
                var4 = _closure1_slot6;
                var5 = var4.COUNT;
                var4 = arg1;
                var6 = var6.bind(var3)(var4, var5);
                var5 = var3._metrics;
                var4 = var5.push;
                var4 = var4.bind(var5)(var6);
                if(var2) { _fun0003_ip = 79; continue _fun0003 }
 61:
                var4 = var3._metrics;
                var5 = var4.length;
                var4 = 100;
                var2 = var5 >= var4;
 79:
                if(!var2) { _fun0003_ip = 92; continue _fun0003 }
 82:
                var2 = var3._flush;
                var2 = var2.bind(var3)();
 92:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'distribution';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arguments[2];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0004_ip = 14; continue _fun0004 }
 12:
                var2 = false;
 14:
                var6 = {};
                var7 = var3._getMetricWithDefaults;
                var4 = _closure1_slot6;
                var5 = var4.DISTRIBUTION;
                var4 = arg1;
                var8 = var7.bind(var3)(var4, var5);
                var9 = var6;
                var4 = copyDataProperties(var9, var8);
                var5 = arg2;
                var4 = 'value';
                var6[var4] = var5;
                var5 = var3._metrics;
                var4 = var5.push;
                var4 = var4.bind(var5)(var6);
                if(var2) { _fun0004_ip = 100; continue _fun0004 }
 82:
                var4 = var3._metrics;
                var5 = var4.length;
                var4 = 100;
                var2 = var5 >= var4;
 100:
                if(!var2) { _fun0004_ip = 113; continue _fun0004 }
 103:
                var2 = var3._flush;
                var2 = var2.bind(var3)();
 113:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_flush';
        var1['key'] = var6;
        var5 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._metrics;
                var3 = var3.length;
                var4 = 0;
                if(!(var3 > var4)) { _fun0005_ip = 169; continue _fun0005 }
 29:
                var9 = var2._metrics;
                var7 = new Array(0);
                var10 = var7;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var _closure3_slot1 = var7;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.HTTP;
                var4 = var5.post;
                var3 = {};
                var6 = _closure1_slot4;
                var6 = var6.METRICS_V2;
                var3['url'] = var6;
                var6 = {};
                var6['metrics'] = var7;
                var7 = {'built_at': '1756491507352', 'build_number': '4566'};
                var6['client_info'] = var7;
                var3['body'] = var6;
                var6 = 1;
                var3['retries'] = var6;
                var6 = true;
                var3['rejectWithError'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1._metrics;
                        var2 = var1.length;
                        var1 = _closure3_slot1;
                        var1 = var1.length;
                        var2 = var2 + var1;
                        var1 = 100;
                        if(!(var2 < var1)) { _fun0006_ip = 78; continue _fun0006 }
 38:
                        var2 = _closure3_slot0;
                        var7 = var2._metrics;
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var6 = arraySpread(var8, var7, var6);
                        var7 = _closure3_slot1;
                        var8 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var2['_metrics'] = var1;
 78:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
 169:
                var1 = new Array(0);
                var2['_metrics'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var14 = var5;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/monitoring/MonitoringAgent.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MetricType'] = var2;
    return var1;
})();