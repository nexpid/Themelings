// app/modules/app_startup/native/NativeAppStartup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function linkFromAppsFlyer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
case 36: // try_start_0
            var1 = global;
            var3 = var1.URL;
            var7 = var5;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = var1.searchParams;
            var2 = var3.get;
            var1 = 'fromAppsFlyer';
            var2 = var2.bind(var3)(var1);
case 28: // try_end0
            var1 = 'true';
            var1 = var1 === var2;
            return var1;
case 37: // catch_target0
            CatchBlockStart(arg_register=0);
            var4 = _closure1_slot19;
            var3 = var4.error;
            var2 = {};
            var2['url'] = var5;
            var2['error'] = var1;
            var1 = 'Failed to parse URL in linkFromAppsFlyer';
            var1 = var3.bind(var4)(var1, var2);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function getInitialURLs() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _getInitialURLs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var3 = new Array(0);
                    var2 = _closure1_slot9;
                    var5 = var2.DeepLinkManager;
                    var2 = var5.getInitialURL;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=43);
case 40:
                    return var2;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var6 = null;
                    if(!(var6 != var2)) { _fun0005_ip = 30; continue _fun0005 }
case 44:
                    var5 = var2.url;
                    if(!(var6 == var5)) { _fun0005_ip = 45; continue _fun0005 }
case 30:
                    var7 = _closure1_slot7;
                    var5 = var7.getInitialURL;
                    var5 = var5.bind(var7)();
                    SaveGenerator(address=85);
case 46:
                    return var5;
case 47:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    if(!(var6 != var5)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var7 = var3.push;
                    var6 = {};
                    var6['url'] = var5;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var8 = 14;
                    var9 = var9[var8];
                    var8 = undefined;
                    var8 = var10.bind(var8)(var9);
                    var8 = var8.DeeplinkSource;
                    var8 = var8.ReactNativeLinking;
                    var6['source'] = var8;
                    var6 = var7.bind(var3)(var6);
                    _fun0005_ip = 50; continue _fun0005;
case 48:
                    return var5;
case 45:
                    var6 = _closure1_slot28;
                    var5 = var2.url;
                    var7 = undefined;
                    var5 = var6.bind(var7)(var5);
                    if(var5) { _fun0005_ip = 52; continue _fun0005 }
case 16:
                    var6 = var3.push;
                    var5 = {};
                    var8 = var2.url;
                    var5['url'] = var8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var8 = 14;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.DeeplinkSource;
                    var8 = var8.OS;
                    var5['source'] = var8;
                    var5 = var6.bind(var3)(var5);
                    _fun0005_ip = 50; continue _fun0005;
case 52:
                    var5 = var2.isDeferred;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 14;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.DeeplinkSource;
                    if(var5) { _fun0005_ip = 10; continue _fun0005 }
case 53:
                    var6 = var4.AppsFlyer;
                    _fun0005_ip = 25; continue _fun0005;
case 10:
                    var6 = var4.AppsFlyerDeferred;
case 25:
                    var5 = var3.push;
                    var4 = {};
                    var7 = var2.url;
                    var4['url'] = var7;
                    var4['source'] = var6;
                    var4 = var5.bind(var3)(var4);
case 50:
                    return var3;
case 42:
                    return var2;
case 38:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function handleURL(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = 'handleURL';
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        var4 = var2.default;
        var3 = arg1;
        var2 = arg2;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function sharedInit() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = function handleNotification(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var5);
                    _fun0007_ip = 56; continue _fun0007;
case 54:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var1 = var4[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var1);
                    var6 = 'receiveNotification';
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var7.bind(var2)(var6, var1);
                    var1 = var1.default;
                    var1 = var1.bind(var2)(var5);
                    var1 = 12;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var2 = var1.extraProperties;
                    var1 = true;
                    var2['tapped_notification'] = var1;
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var5 = function handleLocalNotification(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun0008_ip = 9; continue _fun0008;
case 54:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = 'LocalPushNotificationActionCreators';
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var5.bind(var2)(var4, var1);
                    var1 = var1.receiveLocalNotification;
                    var1 = var1.bind(var2)(var3);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot4 = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 17;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var10 = var3.Emitter;
            var9 = var10.injectBatchEmitChanges;
            var8 = _closure1_slot0;
            var3 = 18;
            var3 = var7[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.batchUpdates;
            var3 = var9.bind(var10)(var3);
            var3 = 19;
            var3 = var7[var3];
            var3 = var8.bind(var4)(var3);
            var8 = var3.TelemetryRingLifecycle;
            var3 = var8.initialize;
            var3 = var3.bind(var8)();
            var10 = _closure1_slot7;
            var9 = var10.addEventListener;
            var8 = 'url';
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.url;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot20;
                    if(!(var4 !== var3)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    _closure1_slot20 = var3;
                    var3 = _closure1_slot25;
                    var2 = var3.then;
                    var1 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = _closure1_slot19;
                            var3 = var4.log;
                            var6 = _closure3_slot0;
                            var2 = global;
                            var1 = var2.HermesInternal;
                            var7 = var1.concat;
                            var1 = 'Handling URL: ';
                            var1 = var7.bind(var1)(var6);
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 20;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var4 = var7.mark;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'Handle URL ';
                            var3 = var3.bind(var2)(var6);
                            var2 = '❗';
                            var2 = var4.bind(var7)(var2, var3);
                            var4 = _closure1_slot31;
                            var3 = {};
                            var3['url'] = var6;
                            var2 = _closure1_slot28;
                            var2 = var2.bind(var1)(var6);
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var5 = 14;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.DeeplinkSource;
                            if(var2) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                            var2 = var5.OS;
                            _fun0010_ip = 61; continue _fun0010;
case 59:
                            var2 = var5.AppsFlyer;
case 61:
                            var3['source'] = var2;
                            var2 = false;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var8, var3);
            var9 = _closure1_slot8;
            var8 = var9.ignoreLogs;
            var3 = ['Non-serializable values were found in the navigation state', 'Overriding previous layout animation with new one before the first began', 'Check the render method of `SceneView`', 'Open debugger to view warnings.'];
            var3 = var8.bind(var9)(var3);
            var3 = 21;
            var8 = var7[var3];
            var9 = var6.bind(var4)(var8);
            var8 = var9.getInitialBundleDownloaded;
            var10 = var8.bind(var9)();
            var9 = var10.then;
            var8 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var4 = null;
                    var2 = var4 != var1;
                    if(!var2) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                    var3 = var1.versionRequired;
                    var2 = var4 != var3;
case 62:
                    if(!var2) { _fun0011_ip = 64; continue _fun0011 }
case 58:
                    var5 = _closure1_slot19;
                    var4 = var5.verbose;
                    var7 = var1.versionRequired;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Get initial downloaded bundle ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.prepareUpdate;
                    var1 = var1.versionRequired;
                    var1 = var2.bind(var3)(var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var8 = var7[var3];
            var11 = var6.bind(var4)(var8);
            var10 = var11.addEventListener;
            var9 = 'downloaded';
            var8 = function(arg1) {
                var1 = arg1;
                var4 = var1.versionRequired;
                var5 = _closure1_slot19;
                var3 = var5.verbose;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'Bundle Event: bundle downloaded for ';
                var2 = var6.bind(var2)(var4);
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.prepareUpdate;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var8 = var10.bind(var11)(var9, var8);
            var8 = var7[var3];
            var9 = var6.bind(var4)(var8);
            var8 = var9.getInitialOtaUpdateChecked;
            var10 = var8.bind(var9)();
            var9 = var10.then;
            var8 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.metrics;
                    var4 = _closure1_slot19;
                    var2 = var4.verbose;
                    var1 = 'Initial OTA update check metrics';
                    var1 = var2.bind(var4)(var1, var3);
                    var2 = _closure1_slot26;
                    var1 = undefined;
                    var5 = var2.bind(var1)(var3);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 21;
                    if(var2) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                    var8 = var3.value;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var7 = var7.bind(var1)(var2);
                    var2 = var7.emitOtaMetric;
                    var2 = var2.bind(var7)(var8);
                    var7 = var5.bind(var1)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0012_ip = 66; continue _fun0012 }
case 65:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.addEventListener;
            var6 = 'otaUpdateChecked';
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.metrics;
                    var4 = _closure1_slot19;
                    var2 = var4.verbose;
                    var1 = 'OTA update check metrics';
                    var1 = var2.bind(var4)(var1, var3);
                    var2 = _closure1_slot26;
                    var1 = undefined;
                    var5 = var2.bind(var1)(var3);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 21;
                    if(var2) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                    var8 = var3.value;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var4];
                    var7 = var7.bind(var1)(var2);
                    var2 = var7.emitOtaMetric;
                    var2 = var2.bind(var7)(var8);
                    var7 = var5.bind(var1)();
                    var2 = var7.done;
                    var3 = var7;
                    if(!var2) { _fun0013_ip = 66; continue _fun0013 }
case 65:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var6, var3);
            var6 = _closure1_slot12;
            var3 = var6.getState;
            var6 = var3.bind(var6)();
            var3 = _closure1_slot6;
            var3 = var3.currentState;
            if(!(var6 !== var3)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 15;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = 'handleAppStateChange';
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var7.bind(var4)(var6, var3);
            var6 = var3.default;
            var3 = _closure1_slot6;
            var3 = var3.currentState;
            var3 = var6.bind(var4)(var3);
case 67:
            var8 = _closure1_slot6;
            var7 = var8.addEventListener;
            var6 = 'change';
            var3 = function(arg1) {
                var6 = arg1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 12;
                var5 = var4[var2];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var5 = var5.imports;
                var7 = var5.appStateChangeStart;
                var5 = var7.record;
                var5 = var5.bind(var7)();
                var5 = 20;
                var5 = var4[var5];
                var7 = var3.bind(var1)(var5);
                var5 = var7.resumeTracing;
                var5 = var5.bind(var7)();
                var5 = 24;
                var5 = var4[var5];
                var8 = var3.bind(var1)(var5);
                var7 = var8.addBreadcrumb;
                var5 = {};
                var9 = global;
                var9 = var9.HermesInternal;
                var10 = var9.concat;
                var9 = 'App state changed to ';
                var9 = var10.bind(var9)(var6);
                var5['message'] = var9;
                var9 = 'appState';
                var5['category'] = var9;
                var5 = var7.bind(var8)(var5);
                var5 = 15;
                var5 = var4[var5];
                var8 = var3.bind(var1)(var5);
                var7 = 'handleAppStateChange';
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var8.bind(var1)(var7, var5);
                var5 = var5.default;
                var5 = var5.bind(var1)(var6);
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.imports;
                var3 = var2.appStateChangeEnd;
                var2 = var3.record;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot9;
            var6 = var3.Hosts;
            var3 = null;
            if(!(var3 != var6)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var3 = _closure1_slot9;
            var8 = var3.Hosts;
            var7 = var8.setHosts;
            var3 = global;
            var6 = var3.location;
            var10 = var6.protocol;
            var6 = var3.window;
            var6 = var6.GLOBAL_ENV;
            var9 = var6.API_ENDPOINT;
            var6 = var3.HermesInternal;
            var6 = var6.concat;
            var12 = '';
            var6 = var6.bind(var12)(var10, var9);
            var9 = var3.location;
            var11 = var9.protocol;
            var9 = var3.window;
            var9 = var9.GLOBAL_ENV;
            var10 = var9.CDN_HOST;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var3 = '//';
            var3 = var9.bind(var12)(var11, var3, var10);
            var3 = var7.bind(var8)(var6, var3);
case 69:
            var3 = false;
            var _closure2_slot0 = var3;
            var3 = new Array(0);
            var _closure2_slot1 = var3;
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 27;
            var7 = var6[var1];
            var10 = var3.bind(var4)(var7);
            var9 = var10.addNotificationEventListener;
            var8 = 'notification';
            var7 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot19;
                    var4 = var5.log;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Push notification received, the app state is ';
                    var3 = var6.bind(var3)(var2);
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure1_slot13;
                    var1 = var1.ACTIVE;
                    if(!(var2 !== var1)) { _fun0014_ip = 9; continue _fun0014 }
case 71:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var8, var7);
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.addNotificationEventListener;
            var1 = 'localNotification';
            var1 = var3.bind(var4)(var1, var5);
            var1 = {};
            var2 = function onStorageInitialize() {
                var2 = true;
                _closure2_slot0 = var2;
                var4 = _closure2_slot1;
                var3 = var4.forEach;
                var2 = _closure2_slot3;
                var2 = var3.bind(var4)(var2);
                var4 = _closure2_slot2;
                var3 = var4.forEach;
                var2 = _closure2_slot4;
                var2 = var3.bind(var4)(var2);
                var3 = _closure2_slot1;
                var2 = 0;
                var3['length'] = var2;
                var1 = _closure2_slot2;
                var1['length'] = var2;
                var1 = undefined;
                return var1;
            };
            var1['onStorageInitialize'] = var2;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function _trackFirstLaunched() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 72; continue _fun0015 }
case 39:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var7 = 28;
                    var2 = var2[var7];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var8 = var2.Storage;
                    var6 = var8.get;
                    var2 = _closure1_slot14;
                    var5 = var2.APP_FIRST_LAUNCHED;
                    var2 = true;
                    var2 = var6.bind(var8)(var5, var2);
                    if(!var2) { _fun0015_ip = 73; continue _fun0015 }
case 35:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 29;
                    var2 = var11[var2];
                    var9 = var5.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot14;
                    var6 = var2.APP_FIRST_LAUNCHED;
                    var5 = {};
                    var10 = _closure1_slot0;
                    var2 = 30;
                    var2 = var11[var2];
                    var10 = var10.bind(var3)(var2);
                    var2 = var10.isAndroid;
                    var2 = var2.bind(var10)();
                    var10 = _closure1_slot18;
                    if(var2) { _fun0015_ip = 74; continue _fun0015 }
case 75:
                    var2 = var10.IOS;
                    _fun0015_ip = 76; continue _fun0015;
case 74:
                    var2 = var10.ANDROID;
case 76:
                    var5['platform'] = var2;
                    var2 = _closure1_slot9;
                    var11 = var2.InstallReferrer;
                    var2 = null;
                    var10 = var2 == var11;
                    var2 = undefined;
                    if(var10) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                    var10 = var11.get;
                    var2 = var10.bind(var11)();
case 77:
                    SaveGenerator(address=195);
case 79:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                    var5['referrer'] = var2;
                    var5 = var8.bind(var9)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.Storage;
                    var6 = var7.set;
                    var4 = _closure1_slot14;
                    var5 = var4.APP_FIRST_LAUNCHED;
                    var4 = false;
                    var4 = var6.bind(var7)(var5, var4);
case 73:
                    return var3;
case 80:
                    return var2;
case 72:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot33 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function loadStorage() {
        var1 = undefined;
        var4 = _closure1_slot35;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function _loadStorage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 82; continue _fun0016 }
case 63:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
case 83: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var7 = 12;
                    var3 = var8[var7];
                    var3 = var6.bind(var2)(var3);
                    var6 = var3.loadStorage;
                    var3 = var6.recordStart;
                    var3 = var3.bind(var6)();
                    var6 = _closure1_slot0;
                    var3 = 28;
                    var3 = var8[var3];
                    var3 = var6.bind(var2)(var3);
                    var9 = var3.Storage;
                    var8 = var9.refresh;
                    var6 = _closure1_slot17;
                    var3 = new Array(0);
                    var3 = var8.bind(var9)(var3, var6);
                    SaveGenerator(address=103);
case 84:
                    return var3;
case 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                    _closure4_slot0 = var3;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var8 = var5[var7];
                    var8 = var6.bind(var2)(var8);
                    var9 = var8.loadStorage;
                    var8 = var9.recordEnd;
                    var8 = var8.bind(var9)();
                    var5 = var5[var7];
                    var5 = var6.bind(var2)(var5);
                    var6 = var5.parseStorage;
                    var5 = var6.measureAsync;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.parse;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
case 16: // try_end0
                    _fun0016_ip = 88; continue _fun0016;
case 86:
                    return var3;
case 89: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot19;
                    var4 = var5.error;
                    var3 = 'Unable to load Storage';
                    var3 = var4.bind(var5)(var3, var6);
case 88:
                    return var2;
case 82:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot35 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function loadKvStorage() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0: // try_start_0
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 32;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
case 90: // try_end0
            _fun0017_ip = 11; continue _fun0017;
case 91: // catch_target0
            CatchBlockStart(arg_register=2);
            var5 = _closure1_slot19;
            var4 = var5.warn;
            var2 = 'DatabaseManager.initialize errored.';
            var2 = var4.bind(var5)(var2, var3);
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.captureException;
            var1 = var1.bind(var2)(var3);
case 11:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function initializeIntl() {
        var1 = undefined;
        var4 = _closure1_slot38;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function _initializeIntl() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 92; continue _fun0018 }
case 63:
                    var2 = arg1;
                    var5 = var2.log;
                    var7 = undefined;
                    var _closure4_slot0 = var7;
                    SaveGenerator(address=30);
case 34:
                    return var7;
case 3:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 93; continue _fun0018 }
case 94:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 34;
                    var3 = var6[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.preloadAllIntlMessageFiles;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=76);
case 95:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 97; continue _fun0018 }
case 47:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var4 = 35;
                    var4 = var10[var4];
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.waitForAllDefaultIntlMessagesLoaded;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=119);
case 98:
                    return var4;
case 99:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                    if(!var5) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 20;
                    var5 = var10[var5];
                    var12 = var6.bind(var7)(var5);
                    var11 = var12.markAndLog;
                    var10 = _closure1_slot19;
                    var6 = '🌎';
                    var5 = 'i18n loaded';
                    var5 = var11.bind(var12)(var10, var6, var5);
case 102:
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var6 = 37;
                    var6 = var5[var6];
                    var10 = var10.bind(var7)(var6);
                    var6 = 36;
                    var6 = var5[var6];
                    var5 = var5.paths;
                    var5 = var10.bind(var7)(var6, var5);
                    SaveGenerator(address=222);
case 104:
                    return var5;
case 105:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 106; continue _fun0018 }
case 107:
                    var6 = var5.default;
                    _closure4_slot0 = var6;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=245);
case 108:
                    return var6;
case 109:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0018_ip = 12; continue _fun0018 }
case 110:
                    var9 = _closure1_slot10;
                    var8 = function() {
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var8 = var9.bind(var7)(var8);
                    return var7;
case 12:
                    return var6;
case 106:
                    return var5;
case 100:
                    return var4;
case 97:
                    return var3;
case 93:
                    return var2;
case 92:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot38 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function _init() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 111; continue _fun0019 }
case 63:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var3 = _closure1_slot24;
                    var2 = _closure1_slot23;
                    var2 = var2.Full;
                    if(!(var3 === var2)) { _fun0019_ip = 112; continue _fun0019 }
case 94:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 24;
                    var2 = var6[var2];
                    var6 = var3.bind(var4)(var2);
                    var3 = var6.addBreadcrumb;
                    var2 = {};
                    var7 = 'Init called when already initialized';
                    var2['message'] = var7;
                    var2 = var3.bind(var6)(var2);
                    _fun0019_ip = 113; continue _fun0019;
case 112:
                    var3 = _closure1_slot24;
                    var2 = _closure1_slot23;
                    var2 = var2.HeadlessRan;
                    var6 = var3 === var2;
                    var2 = _closure1_slot23;
                    var2 = var2.Full;
                    _closure1_slot24 = var2;
                    var14 = undefined;
                    if(var6) { _fun0019_ip = 114; continue _fun0019 }
case 115:
                    var2 = _closure1_slot32;
                    var2 = var2.bind(var4)();
                    var14 = var2.onStorageInitialize;
case 114:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 30;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 38;
                    var3 = var9[var3];
                    var7 = var7.bind(var4)(var3);
                    if(var2) { _fun0019_ip = 116; continue _fun0019 }
case 77:
                    var2 = var7.lockOrientationForiOS;
                    var2 = var2.bind(var7)();
                    _fun0019_ip = 117; continue _fun0019;
case 116:
                    var3 = var7.unlockOrientation;
                    var2 = {};
                    var9 = false;
                    var2['unlockAfterRotatingToPreviousLock'] = var9;
                    var2 = var3.bind(var7)(var2);
case 117:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var9 = 12;
                    var2 = var11[var9];
                    var3 = var13.bind(var4)(var2);
                    var2 = _closure1_slot6;
                    var7 = var2.currentState;
                    var2 = _closure1_slot13;
                    var2 = var2.BACKGROUND;
                    var2 = var7 === var2;
                    var3['didBackgroundApp'] = var2;
                    var2 = var11[var9];
                    var2 = var13.bind(var4)(var2);
                    var2 = var2.imports;
                    var3 = var2.loadStorageStart;
                    var2 = var3.record;
                    var2 = var2.bind(var3)();
                    var3 = global;
                    var10 = var3.Promise;
                    var7 = var10.all;
                    var2 = _closure1_slot29;
                    var12 = var2.bind(var4)();
                    var2 = new Array(5);
                    var2[0] = var12;
                    var12 = 27;
                    var12 = var11[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = var13.getInitialNotification;
                    var15 = var12.bind(var13)();
                    var13 = var15.catch;
                    var12 = function() {
                        var1 = null;
                        return var1;
                    };
                    var12 = var13.bind(var15)(var12);
                    var2[1] = var12;
                    var12 = _closure1_slot34;
                    var12 = var12.bind(var4)();
                    var2[2] = var12;
                    var12 = _closure1_slot36;
                    var12 = var12.bind(var4)();
                    var2[3] = var12;
                    var13 = _closure1_slot0;
                    var15 = 37;
                    var12 = var11[var15];
                    var13 = var13.bind(var4)(var12);
                    var12 = 39;
                    var12 = var11[var12];
                    var11 = var11.paths;
                    var13 = var13.bind(var4)(var12, var11);
                    var12 = var13.then;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.default;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var11 = var12.bind(var13)(var11);
                    var2[4] = var11;
                    var2 = var7.bind(var10)(var2);
                    SaveGenerator(address=466);
case 118:
                    return var2;
case 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 120; continue _fun0019 }
case 121:
                    var10 = _closure1_slot4;
                    var7 = 2;
                    var12 = var10.bind(var4)(var2, var7);
                    var11 = 0;
                    var19 = var12[var11];
                    var10 = 1;
                    var17 = var12[var10];
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var12 = var12[var9];
                    var12 = var13.bind(var4)(var12);
                    var12 = var12.imports;
                    var13 = var12.loadStorageEnd;
                    var12 = var13.record;
                    var12 = var12.bind(var13)();
                    if(var6) { _fun0019_ip = 122; continue _fun0019 }
case 123:
                    var13 = _closure1_slot37;
                    var12 = {};
                    var16 = true;
                    var12['log'] = var16;
                    var13 = var13.bind(var4)(var12);
                    _fun0019_ip = 124; continue _fun0019;
case 122:
                    var16 = var3.Promise;
                    var12 = var16.resolve;
                    var13 = var12.bind(var16)();
case 124:
                    var16 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var20 = 20;
                    var12 = var12[var20];
                    var21 = var16.bind(var4)(var12);
                    var18 = var21.markAndLog;
                    var16 = _closure1_slot19;
                    var22 = '🏃';
                    var12 = 'The initial promise has resolved';
                    var12 = var18.bind(var21)(var16, var22, var12);
                    var12 = null;
                    var16 = var12 != var19;
                    if(!var16) { _fun0019_ip = 125; continue _fun0019 }
case 126:
                    var18 = var19.length;
                    var16 = var18 > var11;
case 125:
                    if(!var16) { _fun0019_ip = 127; continue _fun0019 }
case 128:
                    var21 = _closure1_slot19;
                    var18 = var21.log;
                    var16 = 'initialURLs';
                    var16 = var18.bind(var21)(var16, var19);
case 127:
                    if(!(var12 != var17)) { _fun0019_ip = 129; continue _fun0019 }
case 130:
                    var21 = _closure1_slot19;
                    var18 = var21.log;
                    var16 = 'initialNotification';
                    var16 = var18.bind(var21)(var16, var17);
case 129:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var21 = 28;
                    var16 = var16[var21];
                    var16 = var18.bind(var4)(var16);
                    var23 = var16.Storage;
                    var18 = var23.get;
                    var16 = _closure1_slot15;
                    var16 = var18.bind(var23)(var16);
                    if(!(var12 == var16)) { _fun0019_ip = 131; continue _fun0019 }
case 132:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var16 = var16[var21];
                    var16 = var18.bind(var4)(var16);
                    var23 = var16.Storage;
                    var21 = var23.set;
                    var18 = _closure1_slot15;
                    var24 = var3.Date;
                    var16 = var24.now;
                    var16 = var16.bind(var24)();
                    var16 = var21.bind(var23)(var18, var16);
case 131:
                    var16 = function trackFirstLaunched() {
                        var1 = undefined;
                        var4 = _closure1_slot33;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var16 = var16.bind(var4)();
                    if(var6) { _fun0019_ip = 133; continue _fun0019 }
case 134:
                    var16 = _closure1_slot41;
                    var16 = var16.bind(var4)();
                    if(!(var12 != var14)) { _fun0019_ip = 133; continue _fun0019 }
case 135:
                    var14 = var14.bind(var4)();
case 133:
                    var18 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var16 = 15;
                    var14 = var14[var16];
                    var21 = var18.bind(var4)(var14);
                    var18 = 'DispatcherBridge';
                    var14 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var14 = var21.bind(var4)(var18, var14);
                    var18 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var14 = var14[var20];
                    var21 = var18.bind(var4)(var14);
                    if(var6) { _fun0019_ip = 136; continue _fun0019 }
case 137:
                    var20 = var21.time;
                    var18 = 'Flux.initialize()';
                    var14 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 17;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.initialize;
                        var3 = var3.bind(var4)();
                        var4 = _closure1_slot19;
                        var3 = var4.verbose;
                        var2 = 'Flux has initialized';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var14 = var20.bind(var21)(var22, var18, var14);
                    _fun0019_ip = 138; continue _fun0019;
case 136:
                    var20 = var21.markAndLog;
                    var18 = _closure1_slot19;
                    var14 = 'Flux already initialized.';
                    var14 = var20.bind(var21)(var18, var22, var14);
case 138:
                    var18 = _closure1_slot1;
                    var20 = _closure1_slot3;
                    var14 = 41;
                    var14 = var20[var14];
                    var14 = var18.bind(var4)(var14);
                    var14 = var14.bind(var4)();
                    var18 = _closure1_slot0;
                    var14 = 42;
                    var14 = var20[var14];
                    var18 = var18.bind(var4)(var14);
                    var14 = var18.setupLibdiscoreTimersMonitor;
                    var14 = var14.bind(var18)();
                    var18 = var19.forEach;
                    var14 = function(arg1) {
                        var4 = arg1;
                        var2 = var4.url;
                        _closure1_slot20 = var2;
                        var3 = _closure1_slot31;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var4, var2);
                        return var1;
                    };
                    var14 = var18.bind(var19)(var14);
                    var18 = var12 != var17;
                    var14 = false;
                    if(!var18) { _fun0019_ip = 139; continue _fun0019 }
case 140:
                    var19 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var16 = var18[var16];
                    var21 = var19.bind(var4)(var16);
                    var20 = 'receiveNotification';
                    var16 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var16 = var21.bind(var4)(var20, var16);
                    var16 = var16.default;
                    var18 = var18[var9];
                    var18 = var19.bind(var4)(var18);
                    var19 = var18.extraProperties;
                    var18 = true;
                    var19['tapped_notification'] = var18;
                    var14 = var16.bind(var4)(var17);
case 139:
                    if(var14) { _fun0019_ip = 141; continue _fun0019 }
case 142:
                    var16 = _closure1_slot11;
                    var14 = var16.getChannelId;
                    var18 = var14.bind(var16)();
                    if(!(var12 != var18)) { _fun0019_ip = 141; continue _fun0019 }
case 143:
                    var16 = _closure1_slot1;
                    var20 = _closure1_slot3;
                    var14 = 43;
                    var14 = var20[var14];
                    var17 = var16.bind(var4)(var14);
                    var16 = var17.fetchMessages;
                    var14 = {'channelId': null, 'isPreload': true, 'skipLocalFetch': true};
                    var14['channelId'] = var18;
                    var19 = _closure1_slot0;
                    var18 = 44;
                    var18 = var20[var18];
                    var18 = var19.bind(var4)(var18);
                    var18 = var18.INITIAL_MESSAGE_FETCH_KEY;
                    var14['fetchKey'] = var18;
                    var14 = var16.bind(var17)(var14);
case 141:
                    var14 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var9 = var16[var9];
                    var9 = var14.bind(var4)(var9);
                    var9 = var9.imports;
                    var14 = var9.loadMiniCacheStart;
                    var9 = var14.record;
                    var9 = var9.bind(var14)();
                    var17 = var3.Promise;
                    var9 = var17.prototype;
                    var14 = Object.create(var9, {constructor: {value: var17}});
                    var27 = function(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 37;
                        var4 = var3[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = 45;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var4 = var5.bind(var1)(var4, var3);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var4 = var1.default;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 46;
                            var2 = var5[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.computeInitialNavigationState;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot4;
                            var1 = 1;
                            var2 = var2.bind(var5)(var3, var1);
                            var1 = 0;
                            var3 = var2[var1];
                            var2 = var4.loadCacheAsync;
                            var1 = function() {
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 47;
                                var2 = var5[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var2 = var2.default;
                                var3 = 48;
                                var3 = var5[var3];
                                var3 = var4.bind(var1)(var3);
                                var3 = var3.default;
                                var6 = 49;
                                var6 = var5[var6];
                                var7 = var4.bind(var1)(var6);
                                var6 = var7.updateSaturation;
                                var3 = var3.saturation;
                                var3 = var6.bind(var7)(var3);
                                var3 = 50;
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.updateTheme;
                                var2 = var2.theme;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var1 = var2.bind(var4)(var3, var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var28 = var14;
                    var9 = new var28[var17](var27, var26);
                    var17 = var9 instanceof Object ? var9 : var14;
                    var14 = _closure1_slot2;
                    var9 = 51;
                    var9 = var16[var9];
                    var14 = var14.bind(var4)(var9);
                    var9 = var14.getToken;
                    var9 = var9.bind(var14)();
                    if(!(var12 == var9)) { _fun0019_ip = 144; continue _fun0019 }
case 145:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var9 = 52;
                    var9 = var14[var9];
                    var12 = var12.bind(var4)(var9);
                    var9 = var12.beginLoadedExperimentsTimeout;
                    var9 = var9.bind(var12)();
                    var9 = var12.getPromise;
                    var16 = var9.bind(var12)();
                    _fun0019_ip = 146; continue _fun0019;
case 144:
                    var12 = var3.Promise;
                    var9 = var12.resolve;
                    var16 = var9.bind(var12)();
case 146:
                    var14 = var3.Promise;
                    var12 = var14.all;
                    var9 = new Array(2);
                    var9[0] = var17;
                    var9[1] = var16;
                    var14 = var12.bind(var14)(var9);
                    var12 = var14.then;
                    var9 = function() {
                        var2 = _closure1_slot22;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var9 = var12.bind(var14)(var9);
                    var12 = var3.Promise;
                    var9 = var12.all;
                    var16 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var3 = var14[var15];
                    var18 = var16.bind(var4)(var3);
                    var3 = 53;
                    var17 = var14[var3];
                    var3 = var14.paths;
                    var17 = var18.bind(var4)(var17, var3);
                    var3 = new Array(6);
                    var3[0] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 54;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[1] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 55;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[2] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 56;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[3] = var17;
                    var15 = var14[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = 57;
                    var15 = var14[var15];
                    var14 = var14.paths;
                    var14 = var16.bind(var4)(var15, var14);
                    var3[4] = var14;
                    var3[5] = var13;
                    var3 = var9.bind(var12)(var3);
                    SaveGenerator(address=1571);
case 147:
                    return var3;
case 148:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0019_ip = 149; continue _fun0019 }
case 150:
                    var12 = _closure1_slot4;
                    var9 = 5;
                    var9 = var12.bind(var4)(var3, var9);
                    var11 = var9[var11];
                    var10 = var9[var10];
                    var12 = var10.default;
                    var7 = var9[var7];
                    var11 = var7.default;
                    var7 = 3;
                    var7 = var9[var7];
                    var10 = var7.default;
                    _closure4_slot0 = var10;
                    var7 = 4;
                    var7 = var9[var7];
                    var9 = var12.registerNotificationCategories;
                    var9 = var9.bind(var12)();
                    var9 = var12.registerListener;
                    var9 = var9.bind(var12)();
                    var9 = var11.loadServer;
                    var9 = var9.bind(var11)();
                    var9 = var10.addChangeListener;
                    var8 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.setApplicationIconBadgeNumber;
                        var5 = _closure4_slot0;
                        var2 = var5.getTotalMentionCount;
                        var2 = var2.bind(var5)();
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    if(var6) { _fun0019_ip = 151; continue _fun0019 }
case 152:
                    var6 = var7.init;
                    var6 = var6.bind(var7)();
case 151:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 58;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = 59;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.initSessionHeartbeatScheduler;
                    var5 = var5.bind(var6)();
case 113:
                    return var4;
case 149:
                    return var3;
case 120:
                    return var2;
case 111:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot39 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function _initHeadlessTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 153; continue _fun0020 }
case 39:
                    var3 = _closure1_slot24;
                    var2 = _closure1_slot23;
                    var2 = var2.None;
                    if(!(var3 === var2)) { _fun0020_ip = 154; continue _fun0020 }
case 155:
                    var2 = _closure1_slot23;
                    var2 = var2.HeadlessRan;
                    _closure1_slot24 = var2;
                    var2 = _closure1_slot32;
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    var3 = var2.onStorageInitialize;
                    var6 = global;
                    var8 = var6.Promise;
                    var7 = var8.all;
                    var2 = _closure1_slot34;
                    var9 = var2.bind(var5)();
                    var2 = new Array(3);
                    var2[0] = var9;
                    var9 = _closure1_slot36;
                    var9 = var9.bind(var5)();
                    var2[1] = var9;
                    var10 = _closure1_slot37;
                    var9 = {};
                    var11 = false;
                    var9['log'] = var11;
                    var9 = var10.bind(var5)(var9);
                    var2[2] = var9;
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=136);
case 156:
                    return var2;
case 157:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0020_ip = 158; continue _fun0020 }
case 159:
                    var7 = _closure1_slot41;
                    var7 = var7.bind(var5)();
                    var3 = var3.bind(var5)();
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var7 = 60;
                    var7 = var3[var7];
                    var7 = var9.bind(var5)(var7);
                    var7 = 40;
                    var7 = var3[var7];
                    var7 = var9.bind(var5)(var7);
                    var8 = _closure1_slot1;
                    var7 = 17;
                    var7 = var3[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.initialize;
                    var7 = var7.bind(var8)();
                    var8 = 37;
                    var7 = var3[var8];
                    var11 = var9.bind(var5)(var7);
                    var7 = 45;
                    var10 = var3[var7];
                    var7 = var3.paths;
                    var11 = var11.bind(var5)(var10, var7);
                    var10 = var11.then;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var4 = var1.default;
                        var3 = var4.loadCacheAsync;
                        var2 = {};
                        var1 = 'other';
                        var2['page'] = var1;
                        var1 = function() {
                            var2 = _closure1_slot22;
                            var1 = var2.resolve;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var7 = var10.bind(var11)(var7);
                    var7 = var6.Promise;
                    var6 = var7.all;
                    var8 = var3[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = 57;
                    var8 = var3[var8];
                    var3 = var3.paths;
                    var8 = var9.bind(var5)(var8, var3);
                    var3 = new Array(1);
                    var3[0] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=320);
case 160:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0020_ip = 161; continue _fun0020 }
case 27:
                    var7 = _closure1_slot4;
                    var6 = 1;
                    var7 = var7.bind(var5)(var3, var6);
                    var6 = 0;
                    var7 = var7[var6];
                    var6 = var7.init;
                    var6 = var6.bind(var7)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 41;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.bind(var5)();
case 154:
                    var4 = undefined;
                    return var4;
case 161:
                    return var3;
case 158:
                    return var2;
case 153:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function initializeTokenStorage() {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var7 = 28;
            var3 = var1[var7];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.Storage;
            var4 = var5.get;
            var3 = _closure1_slot16;
            var3 = var4.bind(var5)(var3);
            var5 = null;
            if(!(var5 != var3)) { _fun0021_ip = 162; continue _fun0021 }
case 163:
            var6 = _closure1_slot19;
            var4 = var6.verbose;
            var3 = 'No need to apply token storage fix as token already exists.';
            var3 = var4.bind(var6)(var3);
            _fun0021_ip = 164; continue _fun0021;
case 162:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 30;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0021_ip = 101; continue _fun0021 }
case 13:
            var3 = _closure1_slot9;
            var3 = var3.DCDFastConnectManager;
            var8 = var3.token;
            _fun0021_ip = 59; continue _fun0021;
case 101:
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 31;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getConstants;
            var3 = var3.bind(var4)();
            var8 = var3.token;
case 59:
            if(!(var5 == var8)) { _fun0021_ip = 165; continue _fun0021 }
case 166:
            var6 = _closure1_slot19;
            var4 = var6.log;
            var3 = 'Cannot apply token storage fix as token not in NSUserDefaults.';
            var3 = var4.bind(var6)(var3);
            _fun0021_ip = 164; continue _fun0021;
case 165:
            var6 = _closure1_slot19;
            var4 = var6.log;
            var3 = 'Applying token storage fix.';
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var4.bind(var1)(var3);
            var6 = var3.Storage;
            var4 = var6.set;
            var3 = _closure1_slot16;
            var3 = var4.bind(var6)(var3, var8);
case 164:
            var6 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 51;
            var8 = var4[var3];
            var9 = var6.bind(var1)(var8);
            var8 = var9.init;
            var8 = var8.bind(var9)();
            var3 = var4[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getToken;
            var3 = var3.bind(var6)();
            var3 = var5 != var3;
            var6 = _closure1_slot0;
            var4 = var4[var7];
            var4 = var6.bind(var1)(var4);
            var7 = var4.Storage;
            var6 = var7.get;
            var4 = _closure1_slot16;
            var4 = var6.bind(var7)(var4);
            var7 = var5 != var4;
            var6 = _closure1_slot19;
            var5 = var6.verbose;
            var4 = {};
            var4['storageHasToken'] = var7;
            var4['tokenManagerHasToken'] = var3;
            var3 = 'Token manager has initialized';
            var3 = var5.bind(var6)(var3, var4);
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var9 = global;
    var10 = var9.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var14 = 0;
    var4 = var7[var14];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var13 = 1;
    var4 = var7[var13];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var12 = 2;
    var4 = var7[var12];
    var4 = var6.bind(var1)(var4);
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AppState;
    var _closure1_slot6 = var5;
    var5 = var4.Linking;
    var _closure1_slot7 = var5;
    var5 = var4.LogBox;
    var _closure1_slot8 = var5;
    var4 = var4.NativeModules;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.subscribeToIntlLoadingSuccess;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AppStates;
    var _closure1_slot13 = var5;
    var5 = var4.AnalyticEvents;
    var _closure1_slot14 = var5;
    var5 = var4.FIRST_RUN_DATE_KEY;
    var _closure1_slot15 = var5;
    var5 = var4.TOKEN_KEY;
    var _closure1_slot16 = var5;
    var5 = var4.STORAGE_SECURE_KEYS;
    var _closure1_slot17 = var5;
    var4 = var4.Platforms;
    var _closure1_slot18 = var4;
    var5 = 12;
    var4 = var7[var5];
    var4 = var8.bind(var1)(var4);
    var10 = var4.loadImports;
    var4 = var10.recordEnd;
    var4 = var4.bind(var10)();
    var4 = 13;
    var4 = var7[var4];
    var11 = var8.bind(var1)(var4);
    var4 = var11.prototype;
    var10 = Object.create(var4, {constructor: {value: var11}});
    var17 = 'index.native.tsx';
    var18 = var10;
    var4 = new var18[var11](var17, var16);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot19 = var4;
    var4 = null;
    var _closure1_slot20 = var4;
    var4 = 33;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Future;
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var18 = var10;
    var4 = new var18[var4](var17);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot22 = var4;
    var10 = {};
    var10['None'] = var14;
    var11 = 'None';
    var10[var14] = var11;
    var10['HeadlessRan'] = var13;
    var11 = 'HeadlessRan';
    var10[var13] = var11;
    var10['Full'] = var12;
    var11 = 'Full';
    var10[var12] = var11;
    var _closure1_slot23 = var10;
    var10 = var10.None;
    var _closure1_slot24 = var10;
    var11 = var9.Promise;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var17 = function(arg1) {
        var1 = arg1;
        var _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var18 = var10;
    var9 = new var18[var11](var17, var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot25 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var8 = var5.loadIndex;
    var5 = var8.recordEnd;
    var5 = var5.bind(var8)();
    var5 = 61;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_startup/native/NativeAppStartup.tsx';
    var5 = var6.bind(var7)(var5);
    var3['applicationReady'] = var4;
    var4 = function init() {
        var1 = undefined;
        var4 = _closure1_slot39;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['init'] = var4;
    var2 = function initHeadlessTask() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initHeadlessTask'] = var2;
    return var1;
})();