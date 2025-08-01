// app/modules/gateway/native/fast_connect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var4 = function createFastConnectSocket() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = global;
            var1 = var1.window;
            var2 = var1.WebSocket;
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 46; continue _fun0001 }
 20:
            var3 = _closure1_slot7;
            var2 = var3.log;
            var1 = 'Skipping fast_connect because `window.WebSocket` does not exist.';
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 59; continue _fun0001;
 46:
            var2 = function newWebSocket() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var11 = 4;
                    var2 = var1[var11];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0002_ip = 57; continue _fun0002 }
 39:
                    var2 = _closure1_slot4;
                    var2 = var2.DCDCompressionManager;
                    var8 = var2.supportsZstd;
                    _fun0002_ip = 93; continue _fun0002;
 57:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 11;
                    var2 = var6[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.getConstants;
                    var2 = var2.bind(var4)();
                    var8 = var2.supportsZstd;
 93:
                    var13 = 'zlib-stream';
                    if(!var8) { _fun0002_ip = 108; continue _fun0002 }
 102:
                    var13 = 'zstd-stream';
 108:
                    var4 = global;
                    var2 = var4.window;
                    var2 = var2.GLOBAL_ENV;
                    var18 = var2.GATEWAY_ENDPOINT;
                    var2 = var4.window;
                    var2 = var2.GLOBAL_ENV;
                    var16 = var2.API_VERSION;
                    var2 = var4.HermesInternal;
                    var9 = var2.concat;
                    var19 = '';
                    var17 = '/?encoding=json&v=';
                    var15 = '&compress=';
                    var14 = var13;
                    var7 = var19[var9](var18, var17, var16, var15, var14, var13);
                    var9 = _closure1_slot7;
                    var6 = var9.log;
                    var2 = '[FAST CONNECT] ';
                    var2 = var2 + var7;
                    var2 = var6.bind(var9)(var2);
                    var6 = var4.Date;
                    var2 = var6.now;
                    var2 = var2.bind(var6)();
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 12;
                    var2 = var9[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.bind(var1)(var7);
                    var9 = var4.parseFloat;
                    var6 = var2._socketId;
                    var9 = var9.bind(var1)(var6);
                    var6 = var4.isNaN;
                    var6 = var6.bind(var1)(var9);
                    if(var6) { _fun0002_ip = 567; continue _fun0002 }
 283:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var11];
                    var10 = var10.bind(var1)(var6);
                    var6 = var10.isAndroid;
                    var6 = var6.bind(var10)();
                    if(var8) { _fun0002_ip = 371; continue _fun0002 }
 312:
                    if(var6) { _fun0002_ip = 338; continue _fun0002 }
 315:
                    var8 = _closure1_slot4;
                    var10 = var8.DCDCompressionManager;
                    var8 = var10.enableZlibStreamSupport;
                    var8 = var8.bind(var10)(var9);
                    _fun0002_ip = 431; continue _fun0002;
 338:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var8 = 11;
                    var8 = var11[var8];
                    var10 = var10.bind(var1)(var8);
                    var8 = var10.enableZlibStreamSupport;
                    var8 = var8.bind(var10)(var9);
                    _fun0002_ip = 431; continue _fun0002;
 371:
                    if(var6) { _fun0002_ip = 400; continue _fun0002 }
 374:
                    var6 = _closure1_slot4;
                    var10 = var6.DCDCompressionManager;
                    var8 = var10.enableZstdStreamSupport;
                    var6 = 0;
                    var6 = var8.bind(var10)(var9, var6);
                    _fun0002_ip = 431; continue _fun0002;
 400:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 11;
                    var6 = var10[var6];
                    var8 = var8.bind(var1)(var6);
                    var6 = var8.enableZstdStreamSupport;
                    var6 = var6.bind(var8)(var9);
 431:
                    var6 = {'open': false, 'gateway': null, 'identify': false, 'messages': null, 'clientState': null};
                    var6['gateway'] = var7;
                    var7 = new Array(0);
                    var6['messages'] = var7;
                    var _closure3_slot1 = var6;
                    var7 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.mark;
                        var4 = '🌐';
                        var3 = 'Fastconnect socket opened';
                        var3 = var5.bind(var6)(var4, var3);
                        var5 = _closure1_slot7;
                        var4 = var5.log;
                        var3 = global;
                        var6 = var3.Date;
                        var2 = var6.now;
                        var7 = var2.bind(var6)();
                        var6 = _closure3_slot0;
                        var9 = var7 - var6;
                        var6 = _closure3_slot1;
                        var8 = var6.identify;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'connected and identified in ';
                        var3 = 'ms didIdentify:';
                        var3 = var7.bind(var6)(var9, var3, var8);
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure3_slot1;
                        var2 = true;
                        var3['open'] = var2;
                        return var1;
                    };
                    var2['onopen'] = var7;
                    var7 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.mark;
                        var3 = '🌐';
                        var2 = 'Fastconnect socket close';
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = global;
                        var3 = var2.window;
                        var2 = null;
                        var3['_ws'] = var2;
                        return var1;
                    };
                    var2['onerror'] = var7;
                    var2['onclose'] = var7;
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.mark;
                        var3 = '🌐';
                        var2 = 'Fastconnect socket message';
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = _closure3_slot1;
                        var4 = var2.messages;
                        var3 = var4.push;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onmessage'] = var5;
                    var5 = var4.window;
                    var4 = {};
                    var4['ws'] = var2;
                    var4['state'] = var6;
                    var5['_ws'] = var4;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 13;
                    var4 = var6[var4];
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.mark;
                    var5 = '🌐';
                    var4 = 'Fastconnect socket created';
                    var4 = var6.bind(var7)(var5, var4);
                    _fun0002_ip = 595; continue _fun0002;
 567:
                    var5 = _closure1_slot7;
                    var4 = var5.log;
                    var3 = var2._socketId;
                    var2 = '[FAST CONNECT] Unable to create socketId from NaN value ';
                    var2 = var4.bind(var5)(var2, var3);
 595:
                    return var1;
                }
            };
            var1 = undefined;
            var1 = var2.bind(var1)();
 59:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.NativeModules;
    var _closure1_slot4 = var8;
    var8 = var5.Platform;
    var5 = var5.AppState;
    var _closure1_slot5 = var5;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var7[var8];
    var10 = var9.bind(var1)(var8);
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var13 = 'FAST CONNECT';
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var10 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot7 = var10;
    var9 = var10.info;
    var8 = var5.currentState;
    var5 = 'initial app state (import time)';
    var5 = var9.bind(var10)(var5, var8);
    var5 = var4.bind(var1)();
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gateway/native/fast_connect.tsx';
    var5 = var6.bind(var7)(var5);
    var3['createFastConnectSocket'] = var4;
    var4 = function closeFastConnectSocket() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = global;
            var2 = var1.window;
            var3 = var2._ws;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 60; continue _fun0003 }
 20:
            var3 = var1.window;
            var3 = var3._ws;
            var4 = var3.ws;
            var3 = var4.close;
            var3 = var3.bind(var4)();
            var1 = var1.window;
            var1['_ws'] = var2;
 60:
            var1 = undefined;
            return var1;
        }
    };
    var3['closeFastConnectSocket'] = var4;
    var2 = function identifyWebSocket() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = global;
            var1 = var1.window;
            var2 = var1._ws;
            var1 = null;
            if(!(var1 == var2)) { _fun0004_ip = 46; continue _fun0004 }
 20:
            var3 = _closure1_slot7;
            var2 = var3.log;
            var1 = 'Skipping identifyWebSocket because socket is null';
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 95; continue _fun0004;
 46:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.beginFastConnect;
            var2 = var3.measure;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = var2.loadFastConnectNativeModule;
                    var3 = var4.measure;
                    var2 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 4;
                            var1 = var4[var1];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if(var1) { _fun0006_ip = 55; continue _fun0006 }
 37:
                            var1 = _closure1_slot4;
                            var1 = var1.DCDFastConnectManager;
                            var1 = var1.token;
                            _fun0006_ip = 106; continue _fun0006;
 55:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 5;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getConstants;
                            var2 = var2.bind(var3)();
                            var3 = var2.token;
                            var2 = null;
                            var4 = var2 != var3;
                            if(!var4) { _fun0006_ip = 103; continue _fun0006 }
 100:
                            var2 = var3;
 103:
                            var1 = var2;
 106:
                            return var1;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var10 = null;
                    if(!(var10 != var4)) { _fun0005_ip = 63; continue _fun0005 }
 55:
                    var2 = '';
                    if(!(var2 === var4)) { _fun0005_ip = 89; continue _fun0005 }
 63:
                    var5 = _closure1_slot7;
                    var3 = var5.log;
                    var2 = 'Skipping fast_connect because we could not find a token to connect with.';
                    var2 = var3.bind(var5)(var2);
                    _fun0005_ip = 803; continue _fun0005;
 89:
                    var5 = global;
                    var2 = var5.window;
                    var3 = var2._ws;
                    var2 = var3.ws;
                    var3 = var3.state;
                    var6 = var2._socketId;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var13 = 4;
                    var2 = var2[var13];
                    var7 = var7.bind(var1)(var2);
                    var2 = var7.isAndroid;
                    var2 = var2.bind(var7)();
                    if(var2) { _fun0005_ip = 169; continue _fun0005 }
 152:
                    var2 = _closure1_slot4;
                    var2 = var2.DCDFastConnectManager;
                    var2 = var2.userId;
                    _fun0005_ip = 204; continue _fun0005;
 169:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 5;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getConstants;
                    var7 = var7.bind(var8)();
                    var2 = var7.userId;
 204:
                    var7 = var10 != var2;
                    var12 = null;
                    if(!var7) { _fun0005_ip = 216; continue _fun0005 }
 213:
                    var12 = var2;
 216:
                    var9 = _closure1_slot7;
                    var8 = var9.info;
                    var2 = _closure1_slot5;
                    var7 = var2.currentState;
                    var2 = 'prepareIdentify: app state: ';
                    var2 = var8.bind(var9)(var2, var7);
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var9 = 6;
                    var2 = var2[var9];
                    var7 = var7.bind(var1)(var2);
                    var2 = var7.getLatestTaskRunOn;
                    var7 = var2.bind(var7)();
                    var2 = var10 != var7;
                    var17 = null;
                    if(!var2) { _fun0005_ip = 316; continue _fun0005 }
 287:
                    var8 = var5.Date;
                    var2 = var8.now;
                    var2 = var2.bind(var8)();
                    var7 = var2 - var7;
                    var2 = 1000;
                    var17 = var7 / var2;
 316:
                    var2 = {};
                    var2['token'] = var4;
                    var8 = {};
                    var16 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var4 = var7[var4];
                    var14 = var16.bind(var1)(var4);
                    var4 = var14.getSuperProperties;
                    var21 = var4.bind(var14)();
                    var22 = var8;
                    var4 = copyDataProperties(var22, var21);
                    var4 = _closure1_slot5;
                    var14 = var4.currentState;
                    var4 = 'client_app_state';
                    var8[var4] = var14;
                    var4 = true;
                    var14 = 'is_fast_connect';
                    var8[var14] = var4;
                    var14 = _closure1_slot1;
                    var15 = var7[var9];
                    var18 = var14.bind(var1)(var15);
                    var15 = var18.getHeadlessTasks;
                    var18 = var15.bind(var18)();
                    var15 = 'latest_headless_tasks';
                    var8[var15] = var18;
                    var15 = 'latest_headless_task_run_seconds_before';
                    var8[var15] = var17;
                    var15 = 8;
                    var15 = var7[var15];
                    var16 = var16.bind(var1)(var15);
                    var15 = var16.describeConnectionReasons;
                    var16 = var15.bind(var16)();
                    var15 = 'gateway_connect_reasons';
                    var8[var15] = var16;
                    var2['properties'] = var8;
                    var8 = _closure1_slot0;
                    var15 = 9;
                    var15 = var7[var15];
                    var16 = var8.bind(var1)(var15);
                    var15 = var16.getClientCapabilities;
                    var15 = var15.bind(var16)();
                    var2['capabilities'] = var15;
                    var15 = {};
                    var16 = {};
                    var15['guild_versions'] = var16;
                    var2['client_state'] = var15;
                    var9 = var7[var9];
                    var14 = var14.bind(var1)(var9);
                    var9 = var14.clear;
                    var9 = var9.bind(var14)();
                    var15 = var5.JSON;
                    var14 = var15.stringify;
                    var9 = {};
                    var16 = 2;
                    var9['op'] = var16;
                    var9['d'] = var2;
                    var9 = var14.bind(var15)(var9);
                    var7 = var7[var13];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.isAndroid;
                    var7 = var7.bind(var8)();
                    if(var7) { _fun0005_ip = 664; continue _fun0005 }
 588:
                    var7 = _closure1_slot4;
                    var13 = var7.DCDFastConnectManager;
                    var8 = var13.prepareIdentify;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var7 = 10;
                    var7 = var15[var7];
                    var14 = var14.bind(var1)(var7);
                    var7 = var14.isCacheEnabled;
                    var14 = var7.bind(var14)();
                    var7 = null;
                    if(!var14) { _fun0005_ip = 643; continue _fun0005 }
 639:
                    var7 = _closure1_slot6;
 643:
                    var23 = var13;
                    var22 = var12;
                    var21 = var9;
                    var20 = var6;
                    var19 = var7;
                    var7 = var23[var8](var22, var21, var20, var19, var18);
                    _fun0005_ip = 785; continue _fun0005;
 664:
                    var8 = var10 == var12;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 682; continue _fun0005 }
 673:
                    var8 = var12.toString;
                    var7 = var8.bind(var12)();
 682:
                    var8 = var10 != var7;
                    var10 = null;
                    if(!var8) { _fun0005_ip = 694; continue _fun0005 }
 691:
                    var10 = var7;
 694:
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var7 = 5;
                    var7 = var13[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.prepareIdentify;
                    var5 = var5.parseFloat;
                    var6 = var5.bind(var1)(var6);
                    var12 = _closure1_slot0;
                    var5 = 10;
                    var5 = var13[var5];
                    var12 = var12.bind(var1)(var5);
                    var5 = var12.isCacheEnabled;
                    var12 = var5.bind(var12)();
                    var5 = undefined;
                    if(!var12) { _fun0005_ip = 766; continue _fun0005 }
 762:
                    var5 = _closure1_slot6;
 766:
                    var23 = var8;
                    var22 = var10;
                    var21 = var9;
                    var20 = var6;
                    var19 = var5;
                    var5 = var23[var7](var22, var21, var20, var19, var18);
 785:
                    var2 = var2.client_state;
                    var3['identify'] = var4;
                    var3['clientState'] = var2;
 803:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 95:
            var1 = undefined;
            return var1;
        }
    };
    var3['identifyWebSocket'] = var2;
    return var1;
})();