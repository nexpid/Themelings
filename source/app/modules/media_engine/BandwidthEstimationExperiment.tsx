// app/modules/media_engine/BandwidthEstimationExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot2;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot2;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var2);
    var8 = var9.createExperiment;
    var2 = {'kind': 'user', 'id': '2024-06_rtc_pacer__simulcast', 'label': 'RTC Pacer & Golive Simulcast'};
    var4 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/', 'simulcastEnabled': false};
    var2['defaultConfig'] = var4;
    var11 = {'id': 1, 'label': 'Golive Simulcast without prober 720p@500k'};
    var4 = 1;
    var10 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/', 'simulcastEnabled': true};
    var11['config'] = var10;
    var10 = new Array(6);
    var10[0] = var11;
    var11 = {'id': 2, 'label': 'Golive Simulcast 720p@500k'};
    var12 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe', 'simulcastEnabled': true};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 3, 'label': 'Golive with pacing'};
    var12 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer', 'simulcastEnabled': false};
    var11['config'] = var12;
    var10[2] = var11;
    var11 = {'id': 4, 'label': 'Golive with pacing and probing'};
    var12 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe', 'simulcastEnabled': false};
    var11['config'] = var12;
    var10[3] = var11;
    var11 = {'id': 5, 'label': 'Golive Simulcast 720p@750k'};
    var12 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k', 'simulcastEnabled': true};
    var11['config'] = var12;
    var10[4] = var11;
    var11 = {'id': 6, 'label': 'Golive Simulcast 720p@1000k'};
    var12 = {'enabled': true, 'fullname': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k', 'simulcastEnabled': true};
    var11['config'] = var12;
    var10[5] = var11;
    var2['treatments'] = var10;
    var2 = var8.bind(var9)(var2);
    var _closure1_slot0 = var2;
    var2 = {};
    var8 = function getConfig(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = this;
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = 'e1c55b_1';
            var2['location'] = var1;
            var1 = {};
            var6 = arg1;
            var1['autoTrackExposure'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var4 = var5.supportsBandwidthEstimationExperimentFullname;
            var3 = var1.fullname;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            if(var2) { _fun0004_ip = 76; continue _fun0004 }
 68:
            var2 = false;
            var1['enabled'] = var2;
 76:
            return var1;
        }
    };
    var2['getConfig'] = var8;
    var8 = function supportsBandwidthEstimationExperimentFullname(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg2;
            var3 = this;
            var2 = var3.getMediaEngineExperiments;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 !== var2)) { _fun0005_ip = 93; continue _fun0005 }
 26:
            var1 = _closure1_slot1;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 89; continue _fun0005 }
 52:
            var6 = var2.value;
            var1 = var5.includes;
            var1 = var1.bind(var5)(var6);
            if(var1) { _fun0005_ip = 74; continue _fun0005 }
 70:
            var1 = false;
            return var1;
 74:
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0005_ip = 52; continue _fun0005 }
 89:
            var1 = true;
            return var1;
 93:
            var1 = false;
            return var1;
        }
    };
    var2['supportsBandwidthEstimationExperimentFullname'] = var8;
    var7 = function getMediaEngineExperiments(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = '/';
            var3 = var2.bind(var3)(var1);
            var4 = var3.length;
            var2 = 3;
            var1 = null;
            if(!(var2 === var4)) { _fun0006_ip = 89; continue _fun0006 }
 31:
            var2 = 0;
            var4 = var3[var2];
            var2 = 'bandwidth_estimation';
            var1 = null;
            if(!(var2 === var4)) { _fun0006_ip = 89; continue _fun0006 }
 49:
            var2 = 1;
            var4 = var3[var2];
            var3 = var4.split;
            var2 = ',';
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.length;
                var1 = 0;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 89:
            return var1;
        }
    };
    var2['getMediaEngineExperiments'] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/BandwidthEstimationExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();