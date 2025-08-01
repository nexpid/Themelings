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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var1 = function getInitialURLs() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _getInitialURLs() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 244; continue _fun0004 }
 10:
                    var3 = new Array(0);
                    var2 = global;
                    var5 = var2.Promise;
                    var4 = var5.all;
                    var7 = _closure1_slot7;
                    var2 = var7.getInitialURL;
                    var7 = var2.bind(var7)();
                    var2 = new Array(2);
                    var2[0] = var7;
                    var7 = _closure1_slot9;
                    var8 = var7.DynamicLinkManager;
                    var7 = var8.getInitialURL;
                    var7 = var7.bind(var8)();
                    var2[1] = var7;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=88);
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 241; continue _fun0004 }
 97:
                    var5 = _closure1_slot4;
                    var8 = undefined;
                    var4 = 2;
                    var5 = var5.bind(var8)(var2, var4);
                    var4 = 0;
                    var9 = var5[var4];
                    var4 = 1;
                    var7 = var5[var4];
                    var4 = null;
                    if(!(var4 != var9)) { _fun0004_ip = 183; continue _fun0004 }
 131:
                    var5 = var3.push;
                    var4 = {};
                    var4['url'] = var9;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var9 = 13;
                    var9 = var11[var9];
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.DeeplinkSource;
                    var9 = var9.OS;
                    var4['source'] = var9;
                    var4 = var5.bind(var3)(var4);
 183:
                    if(!var7) { _fun0004_ip = 238; continue _fun0004 }
 186:
                    var5 = var3.push;
                    var4 = {};
                    var4['url'] = var7;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.DeeplinkSource;
                    var6 = var6.Firebase;
                    var4['source'] = var6;
                    var4 = var5.bind(var3)(var4);
 238:
                    return var3;
 241:
                    return var2;
 244:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function handleURL(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = 'handleURL';
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        var3 = var2.default;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function sharedInit() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = function handleNotification(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0006_ip = 29; continue _fun0006 }
 13:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var5);
                    _fun0006_ip = 111; continue _fun0006;
 29:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 14;
                    var1 = var4[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var1);
                    var6 = 'receiveNotification';
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var7.bind(var2)(var6, var1);
                    var1 = var1.default;
                    var1 = var1.bind(var2)(var5);
                    var1 = 11;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var2 = var1.extraProperties;
                    var1 = true;
                    var2['tapped_notification'] = var1;
 111:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var5 = function handleLocalNotification(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0007_ip = 29; continue _fun0007 }
 13:
                    var2 = _closure2_slot2;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    _fun0007_ip = 86; continue _fun0007;
 29:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = 'LocalPushNotificationActionCreators';
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var5.bind(var2)(var4, var1);
                    var1 = var1.receiveLocalNotification;
                    var1 = var1.bind(var2)(var3);
 86:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot4 = var5;
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 16;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var9 = var3.Emitter;
            var8 = var9.injectBatchEmitChanges;
            var10 = _closure1_slot0;
            var3 = 17;
            var3 = var7[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.batchUpdates;
            var3 = var8.bind(var9)(var3);
            var10 = _closure1_slot7;
            var9 = var10.addEventListener;
            var8 = 'url';
            var3 = function(arg1) {
                var2 = arg1;
                var2 = var2.url;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot23;
                var2 = var3.then;
                var1 = function() {
                    var6 = _closure1_slot18;
                    var3 = var6.log;
                    var5 = _closure3_slot0;
                    var2 = global;
                    var1 = var2.HermesInternal;
                    var7 = var1.concat;
                    var1 = 'Handling URL: ';
                    var1 = var7.bind(var1)(var5);
                    var1 = var3.bind(var6)(var1);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 18;
                    var3 = var6[var1];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var3);
                    var7 = var8.mark;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Handle URL ';
                    var3 = var3.bind(var2)(var5);
                    var2 = '❗';
                    var2 = var7.bind(var8)(var2, var3);
                    var3 = _closure1_slot28;
                    var2 = {};
                    var2['url'] = var5;
                    var5 = _closure1_slot0;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.DeeplinkSource;
                    var4 = var4.OS;
                    var2['source'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var9.bind(var10)(var8, var3);
            var9 = _closure1_slot8;
            var8 = var9.ignoreLogs;
            var3 = ['Non-serializable values were found in the navigation state', 'Overriding previous layout animation with new one before the first began', 'Check the render method of `SceneView`', 'Open debugger to view warnings.'];
            var3 = var8.bind(var9)(var3);
            var3 = 19;
            var8 = var7[var3];
            var9 = var6.bind(var4)(var8);
            var8 = var9.getInitialBundleDownloaded;
            var10 = var8.bind(var9)();
            var9 = var10.then;
            var8 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var4 = null;
                    var2 = var4 != var1;
                    if(!var2) { _fun0008_ip = 22; continue _fun0008 }
 12:
                    var3 = var1.versionRequired;
                    var2 = var4 != var3;
 22:
                    if(!var2) { _fun0008_ip = 112; continue _fun0008 }
 25:
                    var5 = _closure1_slot18;
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
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.prepareUpdate;
                    var1 = var1.versionRequired;
                    var1 = var2.bind(var3)(var1);
 112:
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
                var5 = _closure1_slot18;
                var3 = var5.verbose;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'Bundle Event: bundle downloaded for ';
                var2 = var6.bind(var2)(var4);
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 20;
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.metrics;
                    var4 = _closure1_slot18;
                    var2 = var4.verbose;
                    var1 = 'Initial OTA update check metrics';
                    var1 = var2.bind(var4)(var1, var3);
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var5 = var2.bind(var1)(var3);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 19;
                    if(var2) { _fun0009_ip = 108; continue _fun0009 }
 60:
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
                    if(!var2) { _fun0009_ip = 60; continue _fun0009 }
 108:
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.addEventListener;
            var6 = 'otaUpdateChecked';
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.metrics;
                    var4 = _closure1_slot18;
                    var2 = var4.verbose;
                    var1 = 'OTA update check metrics';
                    var1 = var2.bind(var4)(var1, var3);
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var5 = var2.bind(var1)(var3);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = 19;
                    if(var2) { _fun0010_ip = 108; continue _fun0010 }
 60:
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
                    if(!var2) { _fun0010_ip = 60; continue _fun0010 }
 108:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var6, var3);
            var6 = _closure1_slot11;
            var3 = var6.getState;
            var6 = var3.bind(var6)();
            var3 = _closure1_slot6;
            var3 = var3.currentState;
            if(!(var6 !== var3)) { _fun0005_ip = 368; continue _fun0005 }
 311:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 14;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = 'handleAppStateChange';
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 21;
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
 368:
            var8 = _closure1_slot6;
            var7 = var8.addEventListener;
            var6 = 'change';
            var3 = function(arg1) {
                var6 = arg1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 11;
                var5 = var4[var2];
                var1 = undefined;
                var5 = var3.bind(var1)(var5);
                var5 = var5.imports;
                var7 = var5.appStateChangeStart;
                var5 = var7.record;
                var5 = var5.bind(var7)();
                var5 = 18;
                var5 = var4[var5];
                var7 = var3.bind(var1)(var5);
                var5 = var7.resumeTracing;
                var5 = var5.bind(var7)();
                var5 = 22;
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
                var5 = 14;
                var5 = var4[var5];
                var8 = var3.bind(var1)(var5);
                var7 = 'handleAppStateChange';
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 21;
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
            if(!(var3 != var6)) { _fun0005_ip = 545; continue _fun0005 }
 414:
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
 545:
            var3 = false;
            var _closure2_slot0 = var3;
            var3 = new Array(0);
            var _closure2_slot1 = var3;
            var3 = new Array(0);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 25;
            var7 = var6[var1];
            var10 = var3.bind(var4)(var7);
            var9 = var10.addNotificationEventListener;
            var8 = 'notification';
            var7 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot18;
                    var4 = var5.log;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Push notification received, the app state is ';
                    var3 = var6.bind(var3)(var2);
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure1_slot12;
                    var1 = var1.ACTIVE;
                    if(!(var2 !== var1)) { _fun0011_ip = 87; continue _fun0011 }
 70:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
 87:
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
    var _closure1_slot29 = var1;
    var1 = function _trackFirstLaunched() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 263; continue _fun0012 }
 10:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var7 = 26;
                    var2 = var2[var7];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var8 = var2.Storage;
                    var6 = var8.get;
                    var2 = _closure1_slot13;
                    var5 = var2.APP_FIRST_LAUNCHED;
                    var2 = true;
                    var2 = var6.bind(var8)(var5, var2);
                    if(!var2) { _fun0012_ip = 257; continue _fun0012 }
 70:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 27;
                    var2 = var11[var2];
                    var9 = var5.bind(var3)(var2);
                    var8 = var9.track;
                    var2 = _closure1_slot13;
                    var6 = var2.APP_FIRST_LAUNCHED;
                    var5 = {};
                    var10 = _closure1_slot0;
                    var2 = 28;
                    var2 = var11[var2];
                    var10 = var10.bind(var3)(var2);
                    var2 = var10.isAndroid;
                    var2 = var2.bind(var10)();
                    var10 = _closure1_slot17;
                    if(var2) { _fun0012_ip = 147; continue _fun0012 }
 139:
                    var2 = var10.IOS;
                    _fun0012_ip = 153; continue _fun0012;
 147:
                    var2 = var10.ANDROID;
 153:
                    var5['platform'] = var2;
                    var2 = _closure1_slot9;
                    var11 = var2.InstallReferrer;
                    var2 = null;
                    var10 = var2 == var11;
                    var2 = undefined;
                    if(var10) { _fun0012_ip = 190; continue _fun0012 }
 181:
                    var10 = var11.get;
                    var2 = var10.bind(var11)();
 190:
                    SaveGenerator(address=194);
 192:
                    return var2;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 260; continue _fun0012 }
 200:
                    var5['referrer'] = var2;
                    var5 = var8.bind(var9)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.Storage;
                    var6 = var7.set;
                    var4 = _closure1_slot13;
                    var5 = var4.APP_FIRST_LAUNCHED;
                    var4 = false;
                    var4 = var6.bind(var7)(var5, var4);
 257:
                    return var3;
 260:
                    return var2;
 263:
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
    var1 = function loadStorage() {
        var1 = undefined;
        var4 = _closure1_slot32;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _loadStorage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 213; continue _fun0013 }
 12:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
 18: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var7 = 11;
                    var3 = var8[var7];
                    var3 = var6.bind(var2)(var3);
                    var6 = var3.loadStorage;
                    var3 = var6.recordStart;
                    var3 = var3.bind(var6)();
                    var6 = _closure1_slot0;
                    var3 = 26;
                    var3 = var8[var3];
                    var3 = var6.bind(var2)(var3);
                    var9 = var3.Storage;
                    var8 = var9.refresh;
                    var6 = _closure1_slot16;
                    var3 = new Array(0);
                    var3 = var8.bind(var9)(var3, var6);
                    SaveGenerator(address=103);
 101:
                    return var3;
 103:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0013_ip = 181; continue _fun0013 }
 109:
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
                        var1 = 26;
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
 179: // try_end0
                    _fun0013_ip = 210; continue _fun0013;
 181:
                    return var3;
 184: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot18;
                    var4 = var5.error;
                    var3 = 'Unable to load Storage';
                    var3 = var4.bind(var5)(var3, var6);
 210:
                    return var2;
 213:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function loadKvStorage() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0: // try_start_0
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 30;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
 35: // try_end0
            _fun0014_ip = 96; continue _fun0014;
 37: // catch_target0
            CatchBlockStart(arg_register=2);
            var5 = _closure1_slot18;
            var4 = var5.warn;
            var2 = 'DatabaseManager.initialize errored.';
            var2 = var4.bind(var5)(var2, var3);
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.captureException;
            var1 = var1.bind(var2)(var3);
 96:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function initializeIntl() {
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
    var1 = function _initializeIntl() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 260; continue _fun0015 }
 10:
                    var2 = arg1;
                    var6 = var2.log;
                    var7 = undefined;
                    SaveGenerator(address=25);
 23:
                    return var7;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 257; continue _fun0015 }
 34:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 32;
                    var3 = var8[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.preloadAllIntlMessageFiles;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=71);
 69:
                    return var3;
 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 254; continue _fun0015 }
 80:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 33;
                    var4 = var9[var4];
                    var8 = var8.bind(var7)(var4);
                    var4 = var8.waitForAllDefaultIntlMessagesLoaded;
                    var4 = var4.bind(var8)();
                    SaveGenerator(address=114);
 112:
                    return var4;
 114:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 251; continue _fun0015 }
 123:
                    if(!var6) { _fun0015_ip = 175; continue _fun0015 }
 126:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 18;
                    var6 = var9[var6];
                    var11 = var8.bind(var7)(var6);
                    var10 = var11.markAndLog;
                    var9 = _closure1_slot18;
                    var8 = '🌎';
                    var6 = 'i18n loaded';
                    var6 = var10.bind(var11)(var9, var8, var6);
 175:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var6 = 35;
                    var6 = var5[var6];
                    var8 = var8.bind(var7)(var6);
                    var6 = 34;
                    var6 = var5[var6];
                    var5 = var5.paths;
                    var5 = var8.bind(var7)(var6, var5);
                    SaveGenerator(address=217);
 215:
                    return var5;
 217:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 248; continue _fun0015 }
 223:
                    var6 = var5.default;
                    var6 = var6.bind(var7)();
                    SaveGenerator(address=236);
 234:
                    return var6;
 236:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 245; continue _fun0015 }
 242:
                    return var7;
 245:
                    return var6;
 248:
                    return var5;
 251:
                    return var4;
 254:
                    return var3;
 257:
                    return var2;
 260:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _init() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 1767; continue _fun0016 }
 12:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var3 = _closure1_slot22;
                    var2 = _closure1_slot21;
                    var2 = var2.Full;
                    if(!(var3 === var2)) { _fun0016_ip = 87; continue _fun0016 }
 39:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 22;
                    var2 = var6[var2];
                    var6 = var3.bind(var4)(var2);
                    var3 = var6.addBreadcrumb;
                    var2 = {};
                    var7 = 'Init called when already initialized';
                    var2['message'] = var7;
                    var2 = var3.bind(var6)(var2);
                    _fun0016_ip = 1758; continue _fun0016;
 87:
                    var3 = _closure1_slot22;
                    var2 = _closure1_slot21;
                    var2 = var2.HeadlessRan;
                    var6 = var3 === var2;
                    var2 = _closure1_slot21;
                    var2 = var2.Full;
                    _closure1_slot22 = var2;
                    var9 = undefined;
                    if(var6) { _fun0016_ip = 138; continue _fun0016 }
 124:
                    var2 = _closure1_slot29;
                    var2 = var2.bind(var4)();
                    var9 = var2.onStorageInitialize;
 138:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var16 = 28;
                    var2 = var2[var16];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.isAndroid;
                    var2 = var2.bind(var3)();
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var3 = 36;
                    var3 = var10[var3];
                    var7 = var7.bind(var4)(var3);
                    if(var2) { _fun0016_ip = 202; continue _fun0016 }
 190:
                    var2 = var7.lockOrientationForiOS;
                    var2 = var2.bind(var7)();
                    _fun0016_ip = 222; continue _fun0016;
 202:
                    var3 = var7.unlockOrientation;
                    var2 = {};
                    var10 = false;
                    var2['unlockAfterRotatingToPreviousLock'] = var10;
                    var2 = var3.bind(var7)(var2);
 222:
                    var13 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var14 = 11;
                    var2 = var11[var14];
                    var3 = var13.bind(var4)(var2);
                    var2 = _closure1_slot6;
                    var7 = var2.currentState;
                    var2 = _closure1_slot12;
                    var2 = var2.BACKGROUND;
                    var2 = var7 === var2;
                    var3['didBackgroundApp'] = var2;
                    var2 = var11[var14];
                    var2 = var13.bind(var4)(var2);
                    var2 = var2.imports;
                    var3 = var2.loadStorageStart;
                    var2 = var3.record;
                    var2 = var2.bind(var3)();
                    var3 = global;
                    var10 = var3.Promise;
                    var7 = var10.all;
                    var2 = _closure1_slot26;
                    var12 = var2.bind(var4)();
                    var2 = new Array(5);
                    var2[0] = var12;
                    var12 = 25;
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
                    var12 = _closure1_slot31;
                    var12 = var12.bind(var4)();
                    var2[2] = var12;
                    var12 = _closure1_slot33;
                    var12 = var12.bind(var4)();
                    var2[3] = var12;
                    var13 = _closure1_slot0;
                    var15 = 35;
                    var12 = var11[var15];
                    var13 = var13.bind(var4)(var12);
                    var12 = 37;
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
                    SaveGenerator(address=465);
 463:
                    return var2;
 465:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0016_ip = 1764; continue _fun0016 }
 474:
                    var10 = _closure1_slot4;
                    var7 = 2;
                    var12 = var10.bind(var4)(var2, var7);
                    var11 = 0;
                    var21 = var12[var11];
                    var10 = 1;
                    var18 = var12[var10];
                    var17 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var13 = var12[var14];
                    var13 = var17.bind(var4)(var13);
                    var13 = var13.imports;
                    var19 = var13.loadStorageEnd;
                    var13 = var19.record;
                    var13 = var13.bind(var19)();
                    var19 = _closure1_slot34;
                    var13 = {};
                    var20 = true;
                    var13['log'] = var20;
                    var13 = var19.bind(var4)(var13);
                    var22 = 18;
                    var12 = var12[var22];
                    var23 = var17.bind(var4)(var12);
                    var19 = var23.markAndLog;
                    var17 = _closure1_slot18;
                    var24 = '🏃';
                    var12 = 'The initial promise has resolved';
                    var12 = var19.bind(var23)(var17, var24, var12);
                    var12 = null;
                    var17 = var12 != var21;
                    if(!var17) { _fun0016_ip = 614; continue _fun0016 }
 605:
                    var19 = var21.length;
                    var17 = var19 > var11;
 614:
                    if(!var17) { _fun0016_ip = 639; continue _fun0016 }
 617:
                    var23 = _closure1_slot18;
                    var19 = var23.log;
                    var17 = 'initialURLs';
                    var17 = var19.bind(var23)(var17, var21);
 639:
                    if(!(var12 != var18)) { _fun0016_ip = 665; continue _fun0016 }
 643:
                    var23 = _closure1_slot18;
                    var19 = var23.log;
                    var17 = 'initialNotification';
                    var17 = var19.bind(var23)(var17, var18);
 665:
                    var19 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var23 = 26;
                    var17 = var17[var23];
                    var17 = var19.bind(var4)(var17);
                    var25 = var17.Storage;
                    var19 = var25.get;
                    var17 = _closure1_slot14;
                    var17 = var19.bind(var25)(var17);
                    if(!(var12 == var17)) { _fun0016_ip = 762; continue _fun0016 }
 709:
                    var19 = _closure1_slot0;
                    var17 = _closure1_slot3;
                    var17 = var17[var23];
                    var17 = var19.bind(var4)(var17);
                    var25 = var17.Storage;
                    var23 = var25.set;
                    var19 = _closure1_slot14;
                    var26 = var3.Date;
                    var17 = var26.now;
                    var17 = var17.bind(var26)();
                    var17 = var23.bind(var25)(var19, var17);
 762:
                    var17 = function trackFirstLaunched() {
                        var1 = undefined;
                        var4 = _closure1_slot30;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var17 = var17.bind(var4)();
                    if(var6) { _fun0016_ip = 792; continue _fun0016 }
 776:
                    var17 = _closure1_slot38;
                    var17 = var17.bind(var4)();
                    if(!(var12 != var9)) { _fun0016_ip = 792; continue _fun0016 }
 788:
                    var9 = var9.bind(var4)();
 792:
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var17 = 14;
                    var9 = var9[var17];
                    var23 = var19.bind(var4)(var9);
                    var19 = 'DispatcherBridge';
                    var9 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 38;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var9 = var23.bind(var4)(var19, var9);
                    var19 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var9 = var9[var22];
                    var23 = var19.bind(var4)(var9);
                    if(var6) { _fun0016_ip = 879; continue _fun0016 }
 851:
                    var22 = var23.time;
                    var19 = 'Flux.initialize()';
                    var9 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 16;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.initialize;
                        var3 = var3.bind(var4)();
                        var4 = _closure1_slot18;
                        var3 = var4.verbose;
                        var2 = 'Flux has initialized';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var9 = var22.bind(var23)(var24, var19, var9);
                    _fun0016_ip = 902; continue _fun0016;
 879:
                    var22 = var23.markAndLog;
                    var19 = _closure1_slot18;
                    var9 = 'Flux already initialized.';
                    var9 = var22.bind(var23)(var19, var24, var9);
 902:
                    var19 = _closure1_slot1;
                    var22 = _closure1_slot3;
                    var9 = 39;
                    var9 = var22[var9];
                    var9 = var19.bind(var4)(var9);
                    var9 = var9.bind(var4)();
                    var19 = var21.forEach;
                    var9 = _closure1_slot28;
                    var9 = var19.bind(var21)(var9);
                    var19 = var12 != var18;
                    var9 = false;
                    if(!var19) { _fun0016_ip = 1016; continue _fun0016 }
 949:
                    var21 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var17 = var19[var17];
                    var23 = var21.bind(var4)(var17);
                    var22 = 'receiveNotification';
                    var17 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var17 = var23.bind(var4)(var22, var17);
                    var17 = var17.default;
                    var19 = var19[var14];
                    var19 = var21.bind(var4)(var19);
                    var19 = var19.extraProperties;
                    var19['tapped_notification'] = var20;
                    var9 = var17.bind(var4)(var18);
 1016:
                    if(var9) { _fun0016_ip = 1088; continue _fun0016 }
 1019:
                    var17 = _closure1_slot10;
                    var9 = var17.getChannelId;
                    var19 = var9.bind(var17)();
                    if(!(var12 != var19)) { _fun0016_ip = 1088; continue _fun0016 }
 1037:
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var9 = 40;
                    var9 = var18[var9];
                    var18 = var17.bind(var4)(var9);
                    var17 = var18.fetchMessages;
                    var9 = {'channelId': null, 'isPreload': true, 'skipLocalFetch': true};
                    var9['channelId'] = var19;
                    var9 = var17.bind(var18)(var9);
 1088:
                    var17 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var14 = var9[var14];
                    var14 = var17.bind(var4)(var14);
                    var14 = var14.imports;
                    var17 = var14.loadMiniCacheStart;
                    var14 = var17.record;
                    var14 = var14.bind(var17)();
                    var18 = var3.Promise;
                    var14 = var18.prototype;
                    var17 = Object.create(var14, {constructor: {value: var18}});
                    var29 = function(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 35;
                        var4 = var3[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = 41;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var4 = var5.bind(var1)(var4, var3);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var4 = var1.default;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 42;
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
                                var1 = 43;
                                var2 = var5[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var2 = var2.default;
                                var3 = 44;
                                var3 = var5[var3];
                                var3 = var4.bind(var1)(var3);
                                var3 = var3.default;
                                var6 = 45;
                                var6 = var5[var6];
                                var7 = var4.bind(var1)(var6);
                                var6 = var7.updateSaturation;
                                var3 = var3.saturation;
                                var3 = var6.bind(var7)(var3);
                                var3 = 46;
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
                    var30 = var17;
                    var14 = new var30[var18](var29, var28);
                    var18 = var14 instanceof Object ? var14 : var17;
                    var14 = _closure1_slot0;
                    var9 = var9[var16];
                    var14 = var14.bind(var4)(var9);
                    var9 = var14.isAndroid;
                    var9 = var9.bind(var14)();
                    if(!var9) { _fun0016_ip = 1209; continue _fun0016 }
 1185:
                    var14 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var16 = 47;
                    var9 = var9[var16];
                    var9 = var14.bind(var4)(var9);
                    if(!(var12 == var9)) { _fun0016_ip = 1227; continue _fun0016 }
 1209:
                    var14 = var3.Promise;
                    var9 = var14.resolve;
                    var17 = var9.bind(var14)();
                    _fun0016_ip = 1250; continue _fun0016;
 1227:
                    var14 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var9 = var9[var16];
                    var9 = var14.bind(var4)(var9);
                    var17 = var9.applicationReady;
 1250:
                    var14 = _closure1_slot2;
                    var16 = _closure1_slot3;
                    var9 = 48;
                    var9 = var16[var9];
                    var14 = var14.bind(var4)(var9);
                    var9 = var14.getToken;
                    var9 = var9.bind(var14)();
                    if(!(var12 == var9)) { _fun0016_ip = 1326; continue _fun0016 }
 1284:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var9 = 49;
                    var9 = var14[var9];
                    var12 = var12.bind(var4)(var9);
                    var9 = var12.beginLoadedExperimentsTimeout;
                    var9 = var9.bind(var12)();
                    var9 = var12.getPromise;
                    var16 = var9.bind(var12)();
                    _fun0016_ip = 1342; continue _fun0016;
 1326:
                    var12 = var3.Promise;
                    var9 = var12.resolve;
                    var16 = var9.bind(var12)();
 1342:
                    var14 = var3.Promise;
                    var12 = var14.all;
                    var9 = new Array(3);
                    var9[0] = var18;
                    var9[1] = var17;
                    var9[2] = var16;
                    var14 = var12.bind(var14)(var9);
                    var12 = var14.then;
                    var9 = function() {
                        var2 = _closure1_slot20;
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
                    var3 = 50;
                    var17 = var14[var3];
                    var3 = var14.paths;
                    var17 = var18.bind(var4)(var17, var3);
                    var3 = new Array(6);
                    var3[0] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 51;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[1] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 52;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[2] = var17;
                    var17 = var14[var15];
                    var19 = var16.bind(var4)(var17);
                    var17 = 53;
                    var18 = var14[var17];
                    var17 = var14.paths;
                    var17 = var19.bind(var4)(var18, var17);
                    var3[3] = var17;
                    var15 = var14[var15];
                    var16 = var16.bind(var4)(var15);
                    var15 = 54;
                    var15 = var14[var15];
                    var14 = var14.paths;
                    var14 = var16.bind(var4)(var15, var14);
                    var3[4] = var14;
                    var3[5] = var13;
                    var3 = var9.bind(var12)(var3);
                    SaveGenerator(address=1584);
 1582:
                    return var3;
 1584:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0016_ip = 1761; continue _fun0016 }
 1593:
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
                        var1 = 25;
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
                    if(var6) { _fun0016_ip = 1716; continue _fun0016 }
 1706:
                    var6 = var7.init;
                    var6 = var6.bind(var7)();
 1716:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 55;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = 56;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.initSessionHeartbeatScheduler;
                    var5 = var5.bind(var6)();
 1758:
                    return var4;
 1761:
                    return var3;
 1764:
                    return var2;
 1767:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot36 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function _initHeadlessTask() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 391; continue _fun0017 }
 10:
                    var3 = _closure1_slot22;
                    var2 = _closure1_slot21;
                    var2 = var2.None;
                    if(!(var3 === var2)) { _fun0017_ip = 380; continue _fun0017 }
 34:
                    var2 = _closure1_slot21;
                    var2 = var2.HeadlessRan;
                    _closure1_slot22 = var2;
                    var2 = _closure1_slot29;
                    var5 = undefined;
                    var2 = var2.bind(var5)();
                    var3 = var2.onStorageInitialize;
                    var6 = global;
                    var8 = var6.Promise;
                    var7 = var8.all;
                    var2 = _closure1_slot31;
                    var9 = var2.bind(var5)();
                    var2 = new Array(3);
                    var2[0] = var9;
                    var9 = _closure1_slot33;
                    var9 = var9.bind(var5)();
                    var2[1] = var9;
                    var10 = _closure1_slot34;
                    var9 = {};
                    var11 = false;
                    var9['log'] = var11;
                    var9 = var10.bind(var5)(var9);
                    var2[2] = var9;
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=137);
 135:
                    return var2;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 388; continue _fun0017 }
 146:
                    var7 = _closure1_slot38;
                    var7 = var7.bind(var5)();
                    var3 = var3.bind(var5)();
                    var9 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var7 = 57;
                    var7 = var3[var7];
                    var7 = var9.bind(var5)(var7);
                    var7 = 38;
                    var7 = var3[var7];
                    var7 = var9.bind(var5)(var7);
                    var8 = _closure1_slot1;
                    var7 = 16;
                    var7 = var3[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.initialize;
                    var7 = var7.bind(var8)();
                    var8 = 35;
                    var7 = var3[var8];
                    var11 = var9.bind(var5)(var7);
                    var7 = 41;
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
                            var2 = _closure1_slot20;
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
                    var8 = 54;
                    var8 = var3[var8];
                    var3 = var3.paths;
                    var8 = var9.bind(var5)(var8, var3);
                    var3 = new Array(1);
                    var3[0] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=321);
 319:
                    return var3;
 321:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0017_ip = 385; continue _fun0017 }
 327:
                    var7 = _closure1_slot4;
                    var6 = 1;
                    var7 = var7.bind(var5)(var3, var6);
                    var6 = 0;
                    var7 = var7[var6];
                    var6 = var7.init;
                    var6 = var6.bind(var7)();
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 39;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.bind(var5)();
 380:
                    var4 = undefined;
                    return var4;
 385:
                    return var3;
 388:
                    return var2;
 391:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot37 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function initializeTokenStorage() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot3;
            var7 = 26;
            var3 = var1[var7];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.Storage;
            var4 = var5.get;
            var3 = _closure1_slot15;
            var3 = var4.bind(var5)(var3);
            var5 = null;
            if(!(var5 != var3)) { _fun0018_ip = 77; continue _fun0018 }
 51:
            var6 = _closure1_slot18;
            var4 = var6.verbose;
            var3 = 'No need to apply token storage fix as token already exists.';
            var3 = var4.bind(var6)(var3);
            _fun0018_ip = 249; continue _fun0018;
 77:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 28;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0018_ip = 127; continue _fun0018 }
 109:
            var3 = _closure1_slot9;
            var3 = var3.DCDFastConnectManager;
            var8 = var3.token;
            _fun0018_ip = 163; continue _fun0018;
 127:
            var4 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 29;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getConstants;
            var3 = var3.bind(var4)();
            var8 = var3.token;
 163:
            if(!(var5 == var8)) { _fun0018_ip = 190; continue _fun0018 }
 167:
            var6 = _closure1_slot18;
            var4 = var6.log;
            var3 = 'Cannot apply token storage fix as token not in NSUserDefaults.';
            var3 = var4.bind(var6)(var3);
            _fun0018_ip = 249; continue _fun0018;
 190:
            var6 = _closure1_slot18;
            var4 = var6.log;
            var3 = 'Applying token storage fix.';
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var4.bind(var1)(var3);
            var6 = var3.Storage;
            var4 = var6.set;
            var3 = _closure1_slot15;
            var3 = var4.bind(var6)(var3, var8);
 249:
            var6 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 48;
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
            var4 = _closure1_slot15;
            var4 = var6.bind(var7)(var4);
            var7 = var5 != var4;
            var6 = _closure1_slot18;
            var5 = var6.verbose;
            var4 = {};
            var4['storageHasToken'] = var7;
            var4['tokenManagerHasToken'] = var3;
            var3 = 'Token manager has initialized';
            var3 = var5.bind(var6)(var3, var4);
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AppStates;
    var _closure1_slot12 = var5;
    var5 = var4.AnalyticEvents;
    var _closure1_slot13 = var5;
    var5 = var4.FIRST_RUN_DATE_KEY;
    var _closure1_slot14 = var5;
    var5 = var4.TOKEN_KEY;
    var _closure1_slot15 = var5;
    var5 = var4.STORAGE_SECURE_KEYS;
    var _closure1_slot16 = var5;
    var4 = var4.Platforms;
    var _closure1_slot17 = var4;
    var5 = 11;
    var4 = var7[var5];
    var4 = var8.bind(var1)(var4);
    var10 = var4.loadImports;
    var4 = var10.recordEnd;
    var4 = var4.bind(var10)();
    var4 = 12;
    var4 = var7[var4];
    var11 = var8.bind(var1)(var4);
    var4 = var11.prototype;
    var10 = Object.create(var4, {constructor: {value: var11}});
    var17 = 'index.native.tsx';
    var18 = var10;
    var4 = new var18[var11](var17, var16);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot18 = var4;
    var4 = 31;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Future;
    var10 = var4.prototype;
    var10 = Object.create(var10, {constructor: {value: var4}});
    var18 = var10;
    var4 = new var18[var4](var17);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot20 = var4;
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
    var _closure1_slot21 = var10;
    var10 = var10.None;
    var _closure1_slot22 = var10;
    var11 = var9.Promise;
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var17 = function(arg1) {
        var1 = arg1;
        var _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var18 = var10;
    var9 = new var18[var11](var17, var16);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot23 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var8 = var5.loadIndex;
    var5 = var8.recordEnd;
    var5 = var5.bind(var8)();
    var5 = 58;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_startup/native/NativeAppStartup.tsx';
    var5 = var6.bind(var7)(var5);
    var3['applicationReady'] = var4;
    var4 = function init() {
        var1 = undefined;
        var4 = _closure1_slot36;
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
        var4 = _closure1_slot37;
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