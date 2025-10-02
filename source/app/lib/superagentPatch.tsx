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
    var5 = /\\/api(\\/v\d+)?\\/science/;
    var _closure1_slot8 = var5;
    var5 = 5;
    var6 = var4[var5];
    var8 = var3.bind(var1)(var6);
    var7 = var8.setRequestPatch;
    var6 = {};
    var9 = function prepareRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = var5;
            var _closure2_slot0 = var5;
            var1 = undefined;
            var7 = undefined;
            var13 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 6;
            var6 = var10[var6];
            var6 = var13.bind(var1)(var6);
            var12 = var6.default;
            var6 = 7;
            var6 = var10[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var6.default;
            var8 = 8;
            var8 = var10[var8];
            var8 = var13.bind(var1)(var8);
            var9 = var8.default;
            var8 = 9;
            var8 = var10[var8];
            var8 = var13.bind(var1)(var8);
            var8 = var8.default;
            var11 = 10;
            var11 = var10[var11];
            var11 = var13.bind(var1)(var11);
            var11 = var11.default;
            var14 = 11;
            var10 = var10[var14];
            var10 = var13.bind(var1)(var10);
            var10 = var10.isPlatformEmbedded;
            var13 = var5.url;
            var5 = 0;
            var13 = var13[var5];
            var5 = '/';
            if(!(var5 === var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3;
            var15 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = 5;
            var13 = var16[var13];
            var15 = var15.bind(var1)(var13);
            var13 = var15.getAPIBaseURL;
            var15 = var13.bind(var15)();
            var13 = var5.url;
            var13 = var15 + var13;
            var5['url'] = var13;
            var5 = var5.header;
            var16 = 'Authorization';
            var5 = var16 in var5;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var3;
            var15 = var13.header;
            var13 = 'authorization';
            var5 = var13 in var15;
case 4:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var3;
            var13 = var15.set;
            var5 = var12.getToken;
            var5 = var5.bind(var12)();
            var5 = var13.bind(var15)(var16, var5);
case 6:
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var5 = 12;
            var5 = var15[var5];
            var13 = var13.bind(var1)(var5);
            var5 = var13.updateDynamicSuperProperties;
            var5 = var5.bind(var13)();
            var5 = var11.getSuperPropertiesBase64;
            var16 = var5.bind(var11)();
            var5 = null;
            if(!(var5 != var16)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var3;
            var13 = var15.set;
            var11 = 'X-Super-Properties';
            var11 = var13.bind(var15)(var11, var16);
case 8:
            var11 = var12.getFingerprint;
            var15 = var11.bind(var12)();
            var11 = var5 != var15;
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = '';
            var11 = var12 !== var15;
case 10:
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var3;
            var12 = var13.set;
            var11 = 'X-Fingerprint';
            var11 = var12.bind(var13)(var11, var15);
case 12:
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = new Array(0);
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var10 = 13;
            var10 = var12[var10];
            var10 = var13.bind(var1)(var10);
            var12 = var12[var14];
            var13 = var13.bind(var1)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var10.NativeModules;
            var12 = var10.LocalizationManager;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var10 = 14;
            var10 = var14[var10];
            var10 = var13.bind(var1)(var10);
            var12 = var10.default;
case 18:
            if(!(var5 != var12)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = var12.getConstants;
            var10 = var10.bind(var12)();
            var10 = var10.Languages;
            if(!(var5 == var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = new Array(0);
case 21:
            var11 = var10;
case 19:
            var10 = function populateQValues(arg1) {
                var4 = arg1;
                var2 = 10;
                var _closure3_slot0 = var2;
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var4 = arg2;
                        var5 = _closure3_slot0;
                        var2 = 10;
                        if(!(var2 !== var5)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                        var5 = var1.push;
                        var8 = _closure3_slot0;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var6 = '';
                        var2 = ';q=0.';
                        var2 = var7.bind(var6)(var4, var2, var8);
                        var2 = var5.bind(var1)(var2);
                        _fun0002_ip = 25; continue _fun0002;
case 23:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var4);
case 25:
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
            var13 = var10.bind(var1)(var11);
            var12 = var3;
            var11 = var12.set;
            var10 = 'Accept-Language';
            var10 = var11.bind(var12)(var10, var13);
case 14:
            var12 = var3;
            var11 = var12.set;
            var10 = var9.locale;
            var9 = 'X-Discord-Locale';
            var9 = var11.bind(var12)(var9, var10);
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var9 = 15;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var12 = var9.bind(var1)();
            if(!(var5 != var12)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var11 = var3;
            var10 = var11.set;
            var9 = 'X-Discord-Timezone';
            var9 = var10.bind(var11)(var9, var12);
case 26:
            var9 = var6.getDebugOptionsHeaderValue;
            var12 = var9.bind(var6)();
            var9 = var5 != var12;
            if(!var9) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var10 = '';
            var9 = var10 !== var12;
case 28:
            if(!var9) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var11 = var3;
            var10 = var11.set;
            var9 = 'X-Debug-Options';
            var9 = var10.bind(var11)(var9, var12);
case 30:
            var6 = var6.isTracingRequests;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 32:
            var6 = var8.getCurrentUser;
            var6 = var6.bind(var8)();
            var9 = _closure1_slot7;
            var8 = var9.generate;
            var11 = var5 == var6;
            var10 = undefined;
            if(var11) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var10 = var6.id;
case 33:
            var11 = var5 != var10;
            var6 = '0';
            if(!var11) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var10;
case 35:
            var10 = var8.bind(var9)(var6);
            var7 = var10;
            var9 = var3;
            var8 = var9.set;
            var6 = 'x-client-trace-id';
            var6 = var8.bind(var9)(var6, var10);
case 37: // try_start_0
            var6 = global;
            var10 = var6.URL;
            var8 = var3;
            var19 = var8.url;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var20 = var9;
            var8 = new var20[var10](var19, var18);
            var8 = var8 instanceof Object ? var8 : var9;
            var10 = var8.pathname;
            var9 = _closure1_slot8;
            var8 = var9.test;
            var8 = var8.bind(var9)(var10);
            if(var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var12 = var7;
            var7 = var6.URLSearchParams;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var20 = var8;
            var7 = new var20[var7](var19);
            var10 = var7 instanceof Object ? var7 : var8;
            var9 = var10.append;
            var7 = var6.HermesInternal;
            var11 = var7.concat;
            var8 = '@http.x_client_trace_id:"';
            var7 = '"';
            var8 = var11.bind(var8)(var12, var7);
            var7 = 'query';
            var7 = var9.bind(var10)(var7, var8);
            var9 = var10.append;
            var8 = 'showAllSpans';
            var7 = 'true';
            var7 = var9.bind(var10)(var8, var7);
            var8 = _closure1_slot1;
            var9 = _closure1_slot3;
            var7 = 4;
            var7 = var9[var7];
            var9 = var8.bind(var1)(var7);
            var8 = var9.toURLSafe;
            var7 = var10.toString;
            var10 = var7.bind(var10)();
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'traces?';
            var7 = var7.bind(var6)(var10);
            var6 = 'https://datadog.discord.tools/apm/';
            var6 = var8.bind(var9)(var7, var6);
            if(!(var5 != var6)) { _fun0001_ip = 38; continue _fun0001 }
case 40:
            var5 = var6.toString;
            var5 = var5.bind(var6)();
case 38: // try_end0
            _fun0001_ip = 2; continue _fun0001;
case 41: // catch_target0
            CatchBlockStart(arg_register=4);
case 2:
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var4 = 16;
            var4 = var6[var4];
            var7 = var5.bind(var1)(var4);
            var6 = var7.report;
            var5 = var3;
            var10 = var5.method;
            var9 = var5.url;
            var3 = global;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = null;
                    var1 = var3 != var2;
                    var5 = null;
                    if(!var1) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var4 = var2.status;
                    var1 = 400;
                    var1 = var4 >= var1;
                    var5 = null;
                    if(!var1) { _fun0003_ip = 42; continue _fun0003 }
case 44:
                    var5 = var2.text;
case 42:
                    var1 = var3 == var5;
                    var12 = '';
                    if(var1) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'and body: ';
                    var12 = var4.bind(var1)(var5);
case 45:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.report;
                    var6 = _closure2_slot0;
                    var11 = var6.method;
                    var10 = var6.url;
                    var3 = var3 == var2;
                    var9 = undefined;
                    if(var3) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var9 = var2.status;
case 47:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var8 = var2.concat;
                    var20 = 'Completed ';
                    var18 = ' to ';
                    var16 = ' with status: ';
                    var14 = ' ';
                    var19 = var11;
                    var17 = var10;
                    var15 = var9;
                    var13 = var12;
                    var3 = var20[var8](var19, var18, var17, var16, var15, var14, var13, var12);
                    var2 = 'Network';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var3 = var6.bind(var5)(var4, var3);
            var4 = var5.on;
            var3 = 'error';
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var3 = arg2;
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 16;
                    var4 = var4[var1];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var4);
                    var7 = var9.report;
                    var4 = _closure2_slot0;
                    var16 = var4.method;
                    var15 = var4.url;
                    var4 = null;
                    var5 = var4 == var6;
                    var14 = undefined;
                    if(var5) { _fun0004_ip = 49; continue _fun0004 }
case 23:
                    var14 = var6.status;
case 49:
                    var5 = var4 == var3;
                    var13 = undefined;
                    if(var5) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var13 = var3.text;
case 50:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var12 = var3.concat;
                    var24 = 'Failed ';
                    var22 = ' to ';
                    var20 = ' with status ';
                    var18 = ' and body: ';
                    var23 = var16;
                    var21 = var15;
                    var19 = var14;
                    var17 = var13;
                    var5 = var24[var12](var23, var22, var21, var20, var19, var18, var17, var16);
                    var3 = 'Network';
                    var3 = var7.bind(var9)(var3, var5);
                    if(!(var4 != var6)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var3 = 'parse';
                    var3 = var3 in var6;
                    if(!var3) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                    var3 = var6.parse;
                    if(!var3) { _fun0004_ip = 52; continue _fun0004 }
case 55:
                    var7 = _closure1_slot6;
                    var5 = var7.includes;
                    var3 = _closure2_slot0;
                    var3 = var3.url;
                    var3 = var5.bind(var7)(var3);
                    var7 = '[FILTERED]';
                    if(!var3) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var3 = _closure2_slot0;
                    var5 = var3.xhr;
                    var9 = var4 == var5;
                    var3 = undefined;
                    if(var9) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var10 = var5.responseText;
                    var4 = var4 == var10;
                    var3 = undefined;
                    if(var4) { _fun0004_ip = 58; continue _fun0004 }
case 60:
                    var9 = var10.slice;
                    var5 = 0;
                    var4 = 1000;
                    var3 = var9.bind(var10)(var5, var4);
case 58:
                    var7 = var3;
case 56:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.addBreadcrumb;
                    var2 = {'category': 'superagent', 'message': 'Failed to parse HTTP response.'};
                    var5 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.method;
                    var5['method'] = var9;
                    var8 = var8.url;
                    var5['url'] = var8;
                    var5['responseText'] = var7;
                    var6 = var6.status;
                    var5['status'] = var6;
                    var2['data'] = var5;
                    var2 = var3.bind(var4)(var2);
case 52:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var6['prepareRequest'] = var9;
    var9 = function interceptResponse(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var13 = arg1;
            var4 = arg3;
            var _closure2_slot0 = var13;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var3 = var13.statusCode;
            var1 = 400;
            if(!(var1 === var3)) { _fun0005_ip = 61; continue _fun0005 }
case 42:
            var1 = var13.body;
            var3 = null;
            if(!(var3 != var1)) { _fun0005_ip = 61; continue _fun0005 }
case 46:
            var1 = var1.captcha_key;
            if(var1) { _fun0005_ip = 62; continue _fun0005 }
case 61:
            var3 = var13.statusCode;
            var1 = 401;
            if(!(var1 === var3)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var1 = var13.body;
            var5 = null;
            var3 = var5 == var1;
            var7 = undefined;
            var6 = undefined;
            if(var3) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var6 = var1.code;
case 65:
            var1 = _closure1_slot5;
            var1 = var1.MFA_REQUIRED;
            if(!(var6 === var1)) { _fun0005_ip = 63; continue _fun0005 }
case 67:
            var1 = var13.body;
            if(!(var5 != var1)) { _fun0005_ip = 63; continue _fun0005 }
case 68:
            var1 = var1.mfa;
            if(var1) { _fun0005_ip = 69; continue _fun0005 }
case 63:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 22;
            var1 = var6[var1];
            var9 = undefined;
            var11 = var5.bind(var9)(var1);
            var8 = var11.isLimitedAccessErrorCode;
            var6 = var13.statusCode;
            var12 = var13.body;
            var1 = null;
            var14 = var1 == var12;
            var5 = undefined;
            if(var14) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var5 = var12.code;
case 70:
            var6 = var8.bind(var11)(var6, var5);
            var8 = _closure1_slot0;
            var5 = _closure1_slot3;
            if(var6) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var6 = 24;
            var6 = var5[var6];
            var12 = var8.bind(var9)(var6);
            var11 = var12.isLimitedAccessErrorCode;
            var6 = var13.statusCode;
            var14 = var13.body;
            var15 = var1 == var14;
            var1 = undefined;
            if(var15) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var1 = var14.code;
case 74:
            var1 = var11.bind(var12)(var6, var1);
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            if(var1) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var1 = 26;
            var1 = var6[var1];
            var12 = var11.bind(var9)(var1);
            var1 = var12.isBlockedByProxyErrorCode;
            var1 = var1.bind(var12)(var13);
            var12 = !var1;
            var1 = !var12;
            if(var12) { _fun0005_ip = 78; continue _fun0005 }
case 79:
            var13 = _closure1_slot0;
            var10 = _closure1_slot3;
            var12 = 19;
            var12 = var10[var12];
            var13 = var13.bind(var9)(var12);
            var12 = 27;
            var12 = var10[var12];
            var10 = var10.paths;
            var13 = var13.bind(var9)(var12, var10);
            var12 = var13.then;
            var10 = function(arg1) {
                var1 = arg1;
                var2 = var1.handleBlockedByProxy;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var10 = var12.bind(var13)(var10);
            var1 = false;
case 78:
            _fun0005_ip = 80; continue _fun0005;
case 76:
            var10 = 19;
            var10 = var6[var10];
            var11 = var11.bind(var9)(var10);
            var10 = 25;
            var10 = var6[var10];
            var6 = var6.paths;
            var11 = var11.bind(var9)(var10, var6);
            var10 = var11.then;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.default;
                    var1 = _closure2_slot0;
                    var4 = var1.body;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var2 = var4.guild_id;
case 81:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var6);
            var1 = false;
case 80:
            _fun0005_ip = 83; continue _fun0005;
case 72:
            var6 = 19;
            var6 = var5[var6];
            var8 = var8.bind(var9)(var6);
            var6 = 23;
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
case 83:
            _fun0005_ip = 84; continue _fun0005;
case 69:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 19;
            var5 = var3[var5];
            var6 = var6.bind(var7)(var5);
            var5 = 21;
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
case 84:
            _fun0005_ip = 33; continue _fun0005;
case 62:
            var3 = global;
            var6 = var3.Promise;
            var5 = var6.all;
            var9 = _closure1_slot0;
            var7 = _closure1_slot3;
            var8 = 19;
            var3 = var7[var8];
            var10 = undefined;
            var12 = var9.bind(var10)(var3);
            var3 = 18;
            var11 = var7[var3];
            var3 = var7.paths;
            var11 = var12.bind(var10)(var11, var3);
            var3 = new Array(2);
            var3[0] = var11;
            var8 = var7[var8];
            var9 = var9.bind(var10)(var8);
            var8 = 20;
            var8 = var7[var8];
            var7 = var7.paths;
            var7 = var9.bind(var10)(var8, var7);
            var3[1] = var7;
            var6 = var5.bind(var6)(var3);
            var5 = var6.then;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(var10) { _fun0007_ip = 85; continue _fun0007 }
case 86:
                    var6 = var9;
case 85: // try_start_0
                    var9 = var6;
                    var5 = var9.default;
case 87: // try_end0
                    var6 = undefined;
                    var9 = var3;
                    if(var9) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var7 = var7().value;
                    var9 = var2;
                    var9 = var9 === var8;
                    var3 = var9;
                    if(var9) { _fun0007_ip = 88; continue _fun0007 }
case 90:
                    var6 = var7;
case 88: // try_start_1
                    var4 = var6.extractCaptchaPropsFromResponse;
case 45: // try_end1
                    var6 = var3;
                    if(var6) { _fun0007_ip = 91; continue _fun0007 }
case 51:
                    var2.return();
case 91:
                    var6 = var5;
                    var5 = var6.showCaptchaAsync;
                    var7 = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.body;
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 92: // catch_target1
                    CatchBlockStart(arg_register=0);
                    _fun0007_ip = 93; continue _fun0007;
case 94: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0007_ip = 93; continue _fun0007;
case 68:
                    CatchBlockStart(arg_register=0);
case 93:
                    if(var3) { _fun0007_ip = 95; continue _fun0007 }
case 48:
                    var2.return();
case 95:
                    throw var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.then;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.captcha_key;
                    var4 = var1.captcha_rqtoken;
                    var1 = var1.captcha_session_id;
                    var3 = {};
                    var3['X-Captcha-Key'] = var2;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0008_ip = 96; continue _fun0008 }
case 97:
                    var3['X-Captcha-Rqtoken'] = var4;
case 96:
                    if(!(var2 != var1)) { _fun0008_ip = 98; continue _fun0008 }
case 89:
                    var3['X-Captcha-Session-Id'] = var1;
case 98:
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
case 33:
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 99; continue _fun0009 }
case 100:
                    var6 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var8 = 16;
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
                    if(var3) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var10];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.awaitOnline;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=147);
case 103:
                    return var3;
case 104:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 105; continue _fun0009 }
case 106:
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
                    _fun0009_ip = 101; continue _fun0009;
case 105:
                    return var3;
case 101:
                    return var2;
case 99:
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