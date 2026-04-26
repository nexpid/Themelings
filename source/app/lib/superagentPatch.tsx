// app/lib/superagentPatch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var4;
    var1 = function isAnalyticsEndpoint(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
case 2: // try_start_0
            var2 = global;
            var4 = var2.URL;
            var5 = var1;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var2 = var2 instanceof Object ? var2 : var3;
            var4 = var2.pathname;
            var3 = _closure1_slot8;
            var2 = var3.test;
            var2 = var2.bind(var3)(var4);
case 3: // try_end0
            return var2;
case 4: // catch_target0
            CatchBlockStart(arg_register=1);
            var3 = _closure1_slot8;
            var2 = var3.test;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = 0;
    var5 = var4[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.AbortCodes;
    var _closure1_slot5 = var5;
    var5 = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'];
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var6.bind(var1)(var5);
    var6 = var5.parse;
    var5 = global;
    var5 = var5.JSON;
    var5 = var5.parse;
    var6[''] = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var3.bind(var1)(var5);
    var5 = var5.IdGenerator;
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var11 = var6;
    var5 = new var11[var5](var10);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot7 = var5;
    var5 = /\/api(\/v\d+)?\/science/;
    var _closure1_slot8 = var5;
    var5 = 5;
    var6 = var4[var5];
    var8 = var3.bind(var1)(var6);
    var7 = var8.setRequestPatch;
    var6 = {};
    var9 = function prepareRequest(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = var6;
            var _closure2_slot0 = var6;
            var1 = undefined;
            var7 = undefined;
            var3 = function maybeTrackRequest(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg1;
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 16;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var5 = _closure2_slot0;
                    var7 = var5.url;
                    var1['url'] = var7;
                    var5 = var5.method;
                    var1['method'] = var5;
                    var5 = null;
                    var7 = var5 == var6;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var5 = var6.status;
case 7:
                    var1['status_code'] = var5;
                    var5 = global;
                    var7 = var5.Math;
                    var6 = var7.round;
                    var8 = var5.performance;
                    var5 = var8.now;
                    var8 = var5.bind(var8)();
                    var5 = _closure2_slot1;
                    var5 = var8 - var5;
                    var5 = var6.bind(var7)(var5);
                    var1['duration_ms'] = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = false;
                    _closure2_slot2 = var1;
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot3 = var3;
            var11 = _closure1_slot0;
            var3 = _closure1_slot3;
            var8 = 6;
            var8 = var3[var8];
            var8 = var11.bind(var1)(var8);
            var13 = var8.default;
            var8 = 7;
            var8 = var3[var8];
            var8 = var11.bind(var1)(var8);
            var8 = var8.default;
            var9 = 8;
            var9 = var3[var9];
            var9 = var11.bind(var1)(var9);
            var10 = var9.default;
            var9 = 9;
            var9 = var3[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.default;
            var12 = 10;
            var12 = var3[var12];
            var12 = var11.bind(var1)(var12);
            var12 = var12.default;
            var15 = 11;
            var3 = var3[var15];
            var3 = var11.bind(var1)(var3);
            var11 = var3.isPlatformEmbedded;
            var3 = global;
            var16 = var3.performance;
            var14 = var16.now;
            var14 = var14.bind(var16)();
            var _closure2_slot1 = var14;
            var14 = var6.url;
            var6 = 0;
            var14 = var14[var6];
            var6 = '/';
            if(!(var6 === var14)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var6 = var5;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var14 = 5;
            var14 = var17[var14];
            var16 = var16.bind(var1)(var14);
            var14 = var16.getAPIBaseURL;
            var16 = var14.bind(var16)();
            var14 = var6.url;
            var14 = var16 + var14;
            var6['url'] = var14;
            var6 = var6.header;
            var17 = 'Authorization';
            var6 = var17 in var6;
            if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var14 = var5;
            var16 = var14.header;
            var14 = 'authorization';
            var6 = var14 in var16;
case 11:
            if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var16 = var5;
            var14 = var16.set;
            var6 = var13.getToken;
            var6 = var6.bind(var13)();
            var6 = var14.bind(var16)(var17, var6);
case 13:
            var14 = _closure1_slot0;
            var16 = _closure1_slot3;
            var6 = 12;
            var6 = var16[var6];
            var14 = var14.bind(var1)(var6);
            var6 = var14.updateDynamicSuperProperties;
            var6 = var6.bind(var14)();
            var6 = var12.getSuperPropertiesBase64;
            var17 = var6.bind(var12)();
            var6 = null;
            if(!(var6 != var17)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var16 = var5;
            var14 = var16.set;
            var12 = 'X-Super-Properties';
            var12 = var14.bind(var16)(var12, var17);
case 15:
            var12 = var13.getFingerprint;
            var17 = var12.bind(var13)();
            var12 = var6 != var17;
            if(!var12) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var14 = '';
            var12 = var14 !== var17;
case 17:
            if(!var12) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var16 = var5;
            var14 = var16.set;
            var12 = 'X-Fingerprint';
            var12 = var14.bind(var16)(var12, var17);
case 19:
            var12 = var13.getInstallationForTracking;
            var16 = var12.bind(var13)();
            var12 = var6 != var16;
            if(!var12) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var13 = '';
            var12 = var13 !== var16;
case 21:
            if(!var12) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var14 = var5;
            var13 = var14.set;
            var12 = 'X-Installation-ID';
            var12 = var13.bind(var14)(var12, var16);
case 23:
            if(!var11) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var12 = new Array(0);
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var11 = 13;
            var11 = var13[var11];
            var11 = var14.bind(var1)(var11);
            var13 = var13[var15];
            var14 = var14.bind(var1)(var13);
            var13 = var14.isAndroid;
            var13 = var13.bind(var14)();
            if(var13) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var11 = var11.NativeModules;
            var13 = var11.LocalizationManager;
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 14;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var13 = var11.default;
case 29:
            if(!(var6 != var13)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = var13.getConstants;
            var11 = var11.bind(var13)();
            var11 = var11.Languages;
            if(!(var6 == var11)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = new Array(0);
case 32:
            var12 = var11;
case 30:
            var11 = function populateQValues(arg1) {
                var4 = arg1;
                var2 = 10;
                var _closure3_slot0 = var2;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var5 = _closure3_slot0;
                        var2 = 10;
                        if(!(var2 !== var5)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var5 = var1.push;
                        var8 = _closure3_slot0;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var6 = '';
                        var2 = ';q=0.';
                        var2 = var7.bind(var6)(var4, var2, var8);
                        var2 = var5.bind(var1)(var2);
                        _fun0004_ip = 36; continue _fun0004;
case 34:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var4);
case 36:
                        var2 = global;
                        var6 = var2.Math;
                        var5 = var6.max;
                        var2 = _closure3_slot0;
                        var4 = 1;
                        var2 = var2 - var4;
                        var2 = var5.bind(var6)(var2, var4);
                        _closure3_slot0 = var2;
                        return var1;
                    }
                };
                var1 = new Array(0);
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.join;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var1)(var12);
            var13 = var5;
            var12 = var13.set;
            var11 = 'Accept-Language';
            var11 = var12.bind(var13)(var11, var14);
case 25:
            var13 = var5;
            var12 = var13.set;
            var11 = var10.locale;
            var10 = 'X-Discord-Locale';
            var10 = var12.bind(var13)(var10, var11);
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var10 = 15;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var13 = var10.bind(var1)();
            if(!(var6 != var13)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var12 = var5;
            var11 = var12.set;
            var10 = 'X-Discord-Timezone';
            var10 = var11.bind(var12)(var10, var13);
case 37:
            var10 = var8.getDebugOptionsHeaderValue;
            var13 = var10.bind(var8)();
            var10 = var6 != var13;
            if(!var10) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var11 = '';
            var10 = var11 !== var13;
case 39:
            if(!var10) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var12 = var5;
            var11 = var12.set;
            var10 = 'X-Debug-Options';
            var10 = var11.bind(var12)(var10, var13);
case 41:
            var8 = var8.isTracingRequests;
            if(!var8) { _fun0002_ip = 9; continue _fun0002 }
case 43:
            var8 = var9.getCurrentUser;
            var8 = var8.bind(var9)();
            var10 = _closure1_slot7;
            var9 = var10.generate;
            var12 = var6 == var8;
            var11 = undefined;
            if(var12) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var11 = var8.id;
case 44:
            var12 = var6 != var11;
            var8 = '0';
            if(!var12) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var8 = var11;
case 46:
            var11 = var9.bind(var10)(var8);
            var7 = var11;
            var10 = var5;
            var9 = var10.set;
            var8 = 'x-client-trace-id';
            var8 = var9.bind(var10)(var8, var11);
case 48: // try_start_0
            var9 = _closure1_slot9;
            var11 = var3.URL;
            var8 = var5;
            var20 = var8.url;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var21 = var10;
            var8 = new var21[var11](var20, var19);
            var8 = var8 instanceof Object ? var8 : var10;
            var8 = var8.pathname;
            var8 = var9.bind(var1)(var8);
            if(var8) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var12 = var7;
            var7 = var3.URLSearchParams;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var21 = var8;
            var7 = new var21[var7](var20);
            var8 = var7 instanceof Object ? var7 : var8;
            var10 = var8.append;
            var7 = var3.HermesInternal;
            var11 = var7.concat;
            var9 = '@http.x_client_trace_id:"';
            var7 = '"';
            var9 = var11.bind(var9)(var12, var7);
            var7 = 'query';
            var7 = var10.bind(var8)(var7, var9);
            var10 = var8.append;
            var9 = 'showAllSpans';
            var7 = 'true';
            var7 = var10.bind(var8)(var9, var7);
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 4;
            var7 = var10[var7];
            var10 = var9.bind(var1)(var7);
            var9 = var10.toURLSafe;
            var7 = var8.toString;
            var11 = var7.bind(var8)();
            var7 = var3.HermesInternal;
            var8 = var7.concat;
            var7 = 'traces?';
            var8 = var8.bind(var7)(var11);
            var7 = 'https://datadog.discord.tools/apm/';
            var7 = var9.bind(var10)(var8, var7);
            if(!(var6 != var7)) { _fun0002_ip = 49; continue _fun0002 }
case 51:
            var6 = var7.toString;
            var6 = var6.bind(var7)();
case 49: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 52: // catch_target0
            CatchBlockStart(arg_register=5);
case 9:
            var7 = var5.url;
            var6 = _closure1_slot9;
            var6 = var6.bind(var1)(var7);
            var6 = !var6;
            var _closure2_slot2 = var6;
            var6 = _closure1_slot2;
            var7 = _closure1_slot3;
            var4 = 17;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.report;
            var10 = var5.method;
            var9 = var5.url;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var4 = 'Sending ';
            var3 = ' to ';
            var4 = var8.bind(var4)(var10, var3, var9);
            var3 = 'Network';
            var3 = var6.bind(var7)(var3, var4);
            var6 = var5.on;
            var4 = 'response';
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var4 = null;
                    var1 = var4 != var3;
                    var5 = null;
                    if(!var1) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var2 = var3.status;
                    var1 = 400;
                    var1 = var2 >= var1;
                    var5 = null;
                    if(!var1) { _fun0005_ip = 53; continue _fun0005 }
case 55:
                    var5 = var3.text;
case 53:
                    var1 = var4 == var5;
                    var14 = '';
                    if(var1) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'and body: ';
                    var14 = var2.bind(var1)(var5);
case 56:
                    var5 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var2);
                    var6 = var7.report;
                    var5 = _closure2_slot0;
                    var13 = var5.method;
                    var12 = var5.url;
                    var4 = var4 == var3;
                    var11 = undefined;
                    if(var4) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var11 = var3.status;
case 58:
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var10 = var4.concat;
                    var22 = 'Completed ';
                    var20 = ' to ';
                    var18 = ' with status: ';
                    var16 = ' ';
                    var21 = var13;
                    var19 = var12;
                    var17 = var11;
                    var15 = var14;
                    var5 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14);
                    var4 = 'Network';
                    var4 = var6.bind(var7)(var4, var5);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var3 = var6.bind(var5)(var4, var3);
            var4 = var5.on;
            var3 = 'error';
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = arg1;
                    var3 = arg2;
                    var5 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var10 = var5.bind(var1)(var2);
                    var9 = var10.report;
                    var5 = _closure2_slot0;
                    var17 = var5.method;
                    var16 = var5.url;
                    var6 = null;
                    var5 = var6 == var8;
                    var15 = undefined;
                    if(var5) { _fun0006_ip = 60; continue _fun0006 }
case 34:
                    var15 = var8.status;
case 60:
                    var5 = var6 == var3;
                    var14 = undefined;
                    if(var5) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var14 = var3.text;
case 61:
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var13 = var5.concat;
                    var25 = 'Failed ';
                    var23 = ' to ';
                    var21 = ' with status ';
                    var19 = ' and body: ';
                    var24 = var17;
                    var22 = var16;
                    var20 = var15;
                    var18 = var14;
                    var7 = var25[var13](var24, var23, var22, var21, var20, var19, var18, var17);
                    var5 = 'Network';
                    var5 = var9.bind(var10)(var5, var7);
                    if(!(var6 != var8)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var5 = 'parse';
                    var5 = var5 in var8;
                    if(!var5) { _fun0006_ip = 63; continue _fun0006 }
case 65:
                    var5 = var8.parse;
                    if(!var5) { _fun0006_ip = 63; continue _fun0006 }
case 66:
                    var9 = _closure1_slot6;
                    var7 = var9.includes;
                    var5 = _closure2_slot0;
                    var5 = var5.url;
                    var5 = var7.bind(var9)(var5);
                    var9 = '[FILTERED]';
                    if(!var5) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var5 = _closure2_slot0;
                    var7 = var5.xhr;
                    var10 = var6 == var7;
                    var5 = undefined;
                    if(var10) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var11 = var7.responseText;
                    var6 = var6 == var11;
                    var5 = undefined;
                    if(var6) { _fun0006_ip = 69; continue _fun0006 }
case 71:
                    var10 = var11.slice;
                    var7 = 0;
                    var6 = 1000;
                    var5 = var10.bind(var11)(var7, var6);
case 69:
                    var9 = var5;
case 67:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.addBreadcrumb;
                    var4 = {'category': 'superagent', 'message': 'Failed to parse HTTP response.'};
                    var7 = {};
                    var10 = _closure2_slot0;
                    var11 = var10.method;
                    var7['method'] = var11;
                    var10 = var10.url;
                    var7['url'] = var10;
                    var7['responseText'] = var9;
                    var8 = var8.status;
                    var7['status'] = var8;
                    var4['data'] = var7;
                    var4 = var5.bind(var6)(var4);
case 63:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var6['prepareRequest'] = var9;
    var9 = function interceptResponse(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var10 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var10;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var3 = var10.statusCode;
            var1 = 400;
            if(!(var1 === var3)) { _fun0007_ip = 72; continue _fun0007 }
case 53:
            var1 = var10.body;
            var3 = null;
            if(!(var3 != var1)) { _fun0007_ip = 72; continue _fun0007 }
case 57:
            var1 = var1.captcha_key;
            if(var1) { _fun0007_ip = 73; continue _fun0007 }
case 72:
            var3 = var10.statusCode;
            var1 = 401;
            if(!(var1 === var3)) { _fun0007_ip = 74; continue _fun0007 }
case 8:
            var1 = var10.body;
            var5 = null;
            var3 = var5 == var1;
            var7 = undefined;
            var6 = undefined;
            if(var3) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var6 = var1.code;
case 75:
            var1 = _closure1_slot5;
            var1 = var1.MFA_REQUIRED;
            if(!(var6 === var1)) { _fun0007_ip = 74; continue _fun0007 }
case 77:
            var1 = var10.body;
            if(!(var5 != var1)) { _fun0007_ip = 74; continue _fun0007 }
case 78:
            var1 = var1.mfa;
            if(var1) { _fun0007_ip = 79; continue _fun0007 }
case 74:
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 23;
            var1 = var8[var1];
            var9 = undefined;
            var12 = var5.bind(var9)(var1);
            var8 = var12.isLimitedAccessErrorCode;
            var5 = var10.statusCode;
            var13 = var10.body;
            var11 = null;
            var14 = var11 == var13;
            var1 = undefined;
            if(var14) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            var1 = var13.code;
case 80:
            var1 = var8.bind(var12)(var5, var1);
            var8 = _closure1_slot0;
            var5 = _closure1_slot3;
            if(var1) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            var1 = 25;
            var1 = var5[var1];
            var14 = var8.bind(var9)(var1);
            var13 = var14.isLimitedAccessErrorCode;
            var12 = var10.statusCode;
            var15 = var10.body;
            var16 = var11 == var15;
            var1 = undefined;
            if(var16) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var1 = var15.code;
case 84:
            var1 = var13.bind(var14)(var12, var1);
            if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 86:
            var12 = var10.statusCode;
            var1 = 403;
            var1 = var1 === var12;
            if(!var1) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var10 = var10.body;
            var12 = var11 == var10;
            var11 = undefined;
            if(var12) { _fun0007_ip = 89; continue _fun0007 }
case 90:
            var11 = var10.code;
case 89:
            var10 = _closure1_slot5;
            var10 = var10.RESTRICTED_HOURS_ACTIVE;
            var1 = var11 === var10;
case 87:
            if(!var1) { _fun0007_ip = 91; continue _fun0007 }
case 92:
            var12 = _closure1_slot0;
            var10 = _closure1_slot3;
            var11 = 20;
            var11 = var10[var11];
            var12 = var12.bind(var9)(var11);
            var11 = 27;
            var11 = var10[var11];
            var10 = var10.paths;
            var12 = var12.bind(var9)(var11, var10);
            var11 = var12.then;
            var10 = function(arg1) {
                var1 = arg1;
                var2 = var1.openRestrictedHoursModal;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var1 = false;
case 91:
            _fun0007_ip = 93; continue _fun0007;
case 20:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var10 = 20;
            var10 = var6[var10];
            var11 = var11.bind(var9)(var10);
            var10 = 26;
            var10 = var6[var10];
            var6 = var6.paths;
            var11 = var11.bind(var9)(var10, var6);
            var10 = var11.then;
            var6 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.default;
                    var1 = _closure2_slot0;
                    var4 = var1.body;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                    var2 = var4.guild_id;
case 94:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6);
            var1 = false;
case 93:
            _fun0007_ip = 96; continue _fun0007;
case 82:
            var6 = 20;
            var6 = var5[var6];
            var8 = var8.bind(var9)(var6);
            var6 = 24;
            var6 = var5[var6];
            var5 = var5.paths;
            var8 = var8.bind(var9)(var6, var5);
            var6 = var8.then;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.default;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var6.bind(var8)(var5);
            var1 = false;
case 96:
            _fun0007_ip = 97; continue _fun0007;
case 79:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 20;
            var5 = var3[var5];
            var6 = var6.bind(var7)(var5);
            var5 = 22;
            var5 = var3[var5];
            var3 = var3.paths;
            var6 = var6.bind(var7)(var5, var3);
            var5 = var6.then;
            var3 = function(arg1) {
                var1 = arg1;
                var5 = var1.openMFAModal;
                var2 = _closure2_slot0;
                var2 = var2.body;
                var4 = var2.mfa;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.catch;
            var3 = var3.bind(var5)(var4);
            var1 = true;
case 97:
            _fun0007_ip = 98; continue _fun0007;
case 73:
            var3 = global;
            var6 = var3.Promise;
            var5 = var6.all;
            var9 = _closure1_slot0;
            var7 = _closure1_slot3;
            var8 = 20;
            var3 = var7[var8];
            var10 = undefined;
            var12 = var9.bind(var10)(var3);
            var3 = 19;
            var11 = var7[var3];
            var3 = var7.paths;
            var11 = var12.bind(var10)(var11, var3);
            var3 = new Array(2);
            var3[0] = var11;
            var8 = var7[var8];
            var9 = var9.bind(var10)(var8);
            var8 = 21;
            var8 = var7[var8];
            var7 = var7.paths;
            var7 = var9.bind(var10)(var8, var7);
            var3[1] = var7;
            var6 = var5.bind(var6)(var3);
            var5 = var6.then;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var7 = arg1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var8 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var9 = var7().value;
                    var10 = var2;
                    var10 = var10 === var8;
                    var3 = var10;
                    if(var10) { _fun0009_ip = 99; continue _fun0009 }
case 100:
                    var6 = var9;
case 99: // try_start_0
                    var9 = var6;
                    var5 = var9.default;
case 101: // try_end0
                    var6 = undefined;
                    var9 = var3;
                    if(var9) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                    var7 = var7().value;
                    var9 = var2;
                    var9 = var9 === var8;
                    var3 = var9;
                    if(var9) { _fun0009_ip = 102; continue _fun0009 }
case 104:
                    var6 = var7;
case 102: // try_start_1
                    var4 = var6.extractCaptchaPropsFromResponse;
case 56: // try_end1
                    var6 = var3;
                    if(var6) { _fun0009_ip = 7; continue _fun0009 }
case 62:
                    var2.return();
case 7:
                    var6 = var5;
                    var5 = var6.showCaptchaAsync;
                    var7 = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.body;
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 105: // catch_target1
                    CatchBlockStart(arg_register=0);
                    _fun0009_ip = 106; continue _fun0009;
case 107: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0009_ip = 106; continue _fun0009;
case 78:
                    CatchBlockStart(arg_register=0);
case 106:
                    if(var3) { _fun0009_ip = 108; continue _fun0009 }
case 59:
                    var2.return();
case 108:
                    throw var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.then;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.captcha_key;
                    var4 = var1.captcha_rqtoken;
                    var1 = var1.captcha_session_id;
                    var3 = {};
                    var3['X-Captcha-Key'] = var2;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0010_ip = 109; continue _fun0010 }
case 110:
                    var3['X-Captcha-Rqtoken'] = var4;
case 109:
                    if(!(var2 != var1)) { _fun0010_ip = 111; continue _fun0010 }
case 103:
                    var3['X-Captcha-Session-Id'] = var1;
case 111:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.catch;
            var2 = var2.bind(var3)(var4);
            var1 = true;
case 98:
            return var1;
        }
    };
    var6['interceptResponse'] = var9;
    var6 = var7.bind(var8)(var6);
    var5 = var4[var5];
    var6 = var3.bind(var1)(var5);
    var5 = var6.setAwaitOnline;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                    var6 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var8 = 17;
                    var4 = var3[var8];
                    var2 = undefined;
                    var11 = var6.bind(var2)(var4);
                    var10 = var11.report;
                    var4 = global;
                    var6 = var4.HermesInternal;
                    var12 = var6.concat;
                    var7 = 'Request to ';
                    var6 = ' failed, will retry.';
                    var6 = var12.bind(var7)(var9, var6);
                    var7 = 'Network';
                    var6 = var10.bind(var11)(var7, var6);
                    var6 = _closure1_slot1;
                    var10 = 28;
                    var3 = var3[var10];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.isOnline;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var10];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.awaitOnline;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=147);
case 5:
                    return var3;
case 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 117; continue _fun0011 }
case 118:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.report;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'Network detected online, retrying ';
                    var4 = var8.bind(var4)(var9);
                    var4 = var5.bind(var6)(var7, var4);
                    _fun0011_ip = 114; continue _fun0011;
case 117:
                    return var3;
case 114:
                    return var2;
case 112:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var2 = var5.bind(var6)(var2);
    var2 = 29;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'lib/superagentPatch.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();