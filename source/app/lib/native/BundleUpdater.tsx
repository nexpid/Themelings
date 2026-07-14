// app/lib/native/BundleUpdater.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.NativeModules;
    var8 = var7.NativeEventEmitter;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var10 = var9.bind(var1)(var7);
    var7 = var10.prototype;
    var9 = Object.create(var7, {constructor: {value: var10}});
    var13 = 'BundleUpdater';
    var14 = var9;
    var7 = new var14[var10](var13, var12);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot7 = var7;
    var4 = var4.BundleUpdaterManager;
    var _closure1_slot8 = var4;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var14 = var7;
    var13 = var4;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot9 = var4;
    var4 = {'downloaded': 'BundleDownloaded', 'otaUpdateChecked': 'OtaUpdateChecked'};
    var _closure1_slot10 = var4;
    var2 = function() {
        var5 = function BundleUpdater() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot1 = var5;
        var4 = _closure1_slot5;
        var1 = {};
        var3 = 'getInitialBundleDownloaded';
        var1['key'] = var3;
        var3 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getInitialBundleDownloaded;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(13);
        var3[0] = var1;
        var1 = {};
        var7 = 'getInitialOtaUpdateChecked';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getInitialOtaUpdateChecked;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[1] = var1;
        var1 = {};
        var7 = 'addEventListener';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot10;
            var2 = arg1;
            var4 = var3[var2];
            var3 = _closure1_slot9;
            var2 = var3.addListener;
            var1 = arg2;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var3[2] = var1;
        var1 = {};
        var7 = 'checkForUpdateAndReload';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.checkForUpdateAndReload;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var3[3] = var1;
        var1 = {};
        var7 = 'verifyOtaFiles';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.verifyOtaFiles;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[4] = var1;
        var1 = {};
        var7 = 'getBuildOverrideCookieContents';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getBuildOverrideCookieContents;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[5] = var1;
        var1 = {};
        var7 = 'setBuildOverrideCookieHeader';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.setBuildOverrideCookieHeader;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var7;
        var3[6] = var1;
        var1 = {};
        var7 = 'getOtaRootPath';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getOtaRootPath;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[7] = var1;
        var1 = {};
        var7 = 'getOtaStatus';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getOtaStatus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[8] = var1;
        var1 = {};
        var7 = 'getManifestInfo';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = var2.getManifestInfo;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var7;
        var3[9] = var1;
        var1 = {};
        var7 = 'setupOTAAssetFallback';
        var1['key'] = var7;
        var8 = _closure1_slot3;
        var2 = undefined;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 8;
                    var4 = var2[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = 7;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=90);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var2.default;
                    var5 = null;
                    var6 = var2;
                    if(!(var5 != var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var4;
case 10:
                    var5 = var6.addCustomSourceTransformer;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isLoadedFromFileSystem;
                            var1 = var1.bind(var2)();
                            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var1 = null;
                            return var1;
case 12:
                            var1 = var2.scaledAssetURLNearBundle;
                            var3 = var1.bind(var2)();
                            var4 = _closure1_slot8;
                            var2 = var4.resolvedOTAAssetURI;
                            var1 = var3.uri;
                            var4 = var2.bind(var4)(var1);
                            var2 = var3.uri;
                            var1 = null;
                            if(!(var4 !== var2)) { _fun0002_ip = 7; continue _fun0002 }
case 14:
                            var2 = {};
                            var6 = var2;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var3 = 'uri';
                            var2[2] = var4;
                            var1 = var2;
case 7:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
case 4:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function setupOTAAssetFallback() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var7;
        var3[10] = var1;
        var1 = {};
        var7 = 'emitOtaMetric';
        var1['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.match;
            var3 = arg1;
            var6 = var4.bind(var5)(var3);
            var5 = var6.with;
            var4 = {};
            var3 = 'OtaCheckAttempt';
            var4['type'] = var3;
            var3 = function(arg1) {
                var6 = arg1;
                var4 = _closure1_slot7;
                var3 = var4.verbose;
                var2 = 'OTA check attempt';
                var2 = var3.bind(var4)(var2, var6);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var5 = var4[var2];
                var2 = undefined;
                var8 = var3.bind(var2)(var5);
                var7 = var8.track;
                var1 = _closure1_slot6;
                var5 = var1.MOBILE_OTA_CHECK_ATTEMPT;
                var1 = {};
                var9 = var6.result;
                var1['result'] = var9;
                var9 = var6.durationSeconds;
                var1['duration_seconds'] = var9;
                var9 = var6.bytesReceived;
                var1['bytes_received'] = var9;
                var9 = var6.error;
                var1['error'] = var9;
                var9 = var6.usedStreaming;
                var1['used_streaming'] = var9;
                var1 = var7.bind(var8)(var5, var1);
                var1 = 11;
                var1 = var4[var1];
                var3 = var3.bind(var2)(var1);
                var2 = var3.increment;
                var5 = _closure2_slot1;
                var4 = var5.prepareOtaMetricForDatadog;
                var1 = ['result'];
                var1 = var4.bind(var5)(var6, var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4, var3);
            var4 = var5.with;
            var3 = {};
            var6 = 'OtaAssetDownloadAttempt';
            var3['type'] = var6;
            var2 = function(arg1) {
                var6 = arg1;
                var4 = _closure1_slot7;
                var3 = var4.verbose;
                var2 = 'OTA asset download attempt';
                var2 = var3.bind(var4)(var2, var6);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var5 = var4[var2];
                var2 = undefined;
                var8 = var3.bind(var2)(var5);
                var7 = var8.track;
                var1 = _closure1_slot6;
                var5 = var1.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT;
                var1 = {};
                var9 = var6.result;
                var1['result'] = var9;
                var9 = var6.durationSeconds;
                var1['duration_seconds'] = var9;
                var9 = var6.error;
                var1['error'] = var9;
                var9 = var6.url;
                var1['url'] = var9;
                var9 = var6.statusCode;
                var1['status_code'] = var9;
                var9 = var6.bytesReceived;
                var1['bytes_received'] = var9;
                var1 = var7.bind(var8)(var5, var1);
                var1 = 11;
                var1 = var4[var1];
                var3 = var3.bind(var2)(var1);
                var2 = var3.increment;
                var5 = _closure2_slot1;
                var4 = var5.prepareOtaMetricForDatadog;
                var1 = ['result', 'statusCode'];
                var1 = var4.bind(var5)(var6, var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.exhaustive;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var7;
        var3[11] = var1;
        var1 = {};
        var7 = 'prepareOtaMetricForDatadog';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var4 = arguments[1];
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = new Array(0);
case 15:
                var1 = {};
                var3 = var3.type;
                var1['name'] = var3;
                var3 = var4.map;
                var2 = function(arg1) {
                    var5 = arg1;
                    var1 = _closure3_slot0;
                    var4 = var1[var5];
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ':';
                    var1 = var3.bind(var2)(var5, var1, var4);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['tags'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[12] = var1;
        var1 = null;
        var1 = var4.bind(var2)(var5, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/native/BundleUpdater.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();