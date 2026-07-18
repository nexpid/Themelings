// app/modules/age_assurance/AgeVerificationIncodeWebViewConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function postToNativeWebView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var1 = var1.window;
            var3 = var1.ReactNativeWebView;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.postMessage;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {};
    var1 = 'completed';
    var4['COMPLETED'] = var1;
    var1 = 'cancelled';
    var4['CANCELLED'] = var1;
    var1 = 'error';
    var4['ERROR'] = var1;
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/age_assurance/AgeVerificationIncodeWebViewConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = '/age-verification/incode';
    var3['AGE_VERIFICATION_INCODE_PATH'] = var5;
    var5 = '__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__';
    var3['AGE_VERIFICATION_INCODE_PARAMS_KEY'] = var5;
    var5 = 2;
    var3['AGE_VERIFICATION_INCODE_PARAMS_SCHEMA_VERSION'] = var5;
    var5 = 'Verification.Result';
    var3['VERIFICATION_RESULT_EVENT_TYPE'] = var5;
    var5 = 'Verification.CaptureComplete';
    var3['VERIFICATION_CAPTURE_COMPLETE_EVENT_TYPE'] = var5;
    var5 = 'Verification.FallbackRequest';
    var3['VERIFICATION_FALLBACK_REQUEST_EVENT_TYPE'] = var5;
    var5 = '__DISCORD_APPLY_INCODE_FALLBACK_SESSION__';
    var3['INCODE_FALLBACK_SESSION_CALLBACK_KEY'] = var5;
    var3['AgeVerificationIncodeResultStatus'] = var4;
    var4 = function readInjectedIncodeParams() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var1 = var1.window;
            var2 = var1.__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = 'object';
            var3 = typeof var2;
            if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var10 = var2.schemaVersion;
            var9 = var2.apiUrl;
            var8 = var2.sessionToken;
            var7 = var2.consentId;
            var4 = var2.interviewId;
            var6 = var2.theme;
            var5 = var2.method;
            if(!(var1 != var10)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = 2;
            var2 = null;
            if(!(var3 === var10)) { _fun0002_ip = 9; continue _fun0002 }
case 7:
            var10 = 'string';
            var3 = typeof var9;
            var2 = null;
            if(!(var10 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = typeof var8;
            var2 = null;
            if(!(var10 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var3 = typeof var7;
            var2 = null;
            if(!(var10 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 12:
            var3 = typeof var4;
            var2 = null;
            if(!(var10 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 13:
            if(!(var1 != var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = typeof var6;
            var2 = null;
            if(!(var10 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 14:
            var3 = {};
            var3['apiUrl'] = var9;
            var3['sessionToken'] = var8;
            var3['consentId'] = var7;
            var3['interviewId'] = var4;
            var7 = var1 != var6;
            var4 = null;
            if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = var6;
case 16:
            var3['theme'] = var4;
            var6 = var1 != var5;
            var4 = null;
            if(!var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = var5;
case 18:
            var3['method'] = var4;
            var2 = var3;
case 9:
            return var2;
case 4:
            return var1;
        }
    };
    var3['readInjectedIncodeParams'] = var4;
    var4 = function buildIncodeParamsInjection(arg1, arg2) {
        var6 = {};
        var13 = arg1;
        var14 = var6;
        var1 = copyDataProperties(var14, var13);
        var2 = 2;
        var1 = 'schemaVersion';
        var6[0] = var2;
        var1 = global;
        var4 = var1.JSON;
        var3 = var4.stringify;
        var5 = var1.JSON;
        var2 = var5.stringify;
        var2 = var2.bind(var5)(var6);
        var10 = var3.bind(var4)(var2);
        var4 = var1.JSON;
        var3 = var4.stringify;
        var2 = arg2;
        var14 = var3.bind(var4)(var2);
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var15 = 'if (window.location.origin === ';
        var13 = ') { window.';
        var12 = '__DISCORD_AGE_VERIFICATION_INCODE_PARAMS__';
        var11 = ' = JSON.parse(';
        var9 = '); } true;';
        var1 = var15[var6](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var3['buildIncodeParamsInjection'] = var4;
    var4 = function parseIncodeWebViewMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = 'string';
            var2 = typeof var6;
            var4 = var6;
            if(!(var5 === var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var2 = global;
            var3 = var2.JSON;
            var2 = var3.parse;
            var4 = var2.bind(var3)(var6);
case 22:
            var2 = var1 == var4;
            var6 = undefined;
            if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = var4.eventType;
case 24:
            var2 = 'Verification.CaptureComplete';
            if(!(var6 !== var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = var1 == var4;
            var6 = undefined;
            if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var6 = var4.eventType;
case 28:
            var2 = 'Verification.FallbackRequest';
            if(!(var6 !== var2)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var2 = var1 == var4;
            var3 = undefined;
            if(var2) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var3 = var4.eventType;
case 32:
            var2 = 'Verification.Result';
            if(!(var3 === var2)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var6 = var4.status;
            var3 = _closure1_slot0;
            var3 = var3.COMPLETED;
            if(!(var6 !== var3)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var3 = _closure1_slot0;
            var3 = var3.CANCELLED;
            if(!(var6 !== var3)) { _fun0003_ip = 36; continue _fun0003 }
case 38:
            var2 = _closure1_slot0;
            var3 = var2.ERROR;
            var2 = null;
            if(!(var6 === var3)) { _fun0003_ip = 39; continue _fun0003 }
case 36:
            var3 = {};
            var7 = 'result';
            var3['kind'] = var7;
            var3['status'] = var6;
            var2 = var3;
case 39:
            return var2;
case 34:
            return var1;
case 30:
            var2 = var4.previousInterviewId;
            var3 = typeof var2;
            var2 = null;
            if(!(var5 === var3)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = var4.previousInterviewId;
            var6 = var3.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var6)) { _fun0003_ip = 40; continue _fun0003 }
case 42:
            var3 = {};
            var6 = 'fallback_request';
            var3['kind'] = var6;
            var6 = var4.previousInterviewId;
            var3['previousInterviewId'] = var6;
            var2 = var3;
case 40:
            return var2;
case 26:
            var2 = var4.interviewId;
            var3 = typeof var2;
            var2 = null;
            if(!(var5 === var3)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var3 = var4.interviewId;
            var5 = var3.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var5)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
            var3 = {};
            var5 = 'capture_complete';
            var3['kind'] = var5;
            var4 = var4.interviewId;
            var3['interviewId'] = var4;
            var2 = var3;
case 43:
            return var2;
case 20:
            return var1;
        }
    };
    var3['parseIncodeWebViewMessage'] = var4;
    var4 = function postIncodeResult(arg1) {
        var3 = _closure1_slot1;
        var1 = global;
        var4 = var1.JSON;
        var2 = var4.stringify;
        var1 = {};
        var5 = 'Verification.Result';
        var1['eventType'] = var5;
        var5 = arg1;
        var1['status'] = var5;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['postIncodeResult'] = var4;
    var4 = function postIncodeCaptureComplete(arg1) {
        var3 = _closure1_slot1;
        var1 = global;
        var4 = var1.JSON;
        var2 = var4.stringify;
        var1 = {};
        var5 = 'Verification.CaptureComplete';
        var1['eventType'] = var5;
        var5 = arg1;
        var1['interviewId'] = var5;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['postIncodeCaptureComplete'] = var4;
    var4 = function postIncodeFallbackRequest(arg1) {
        var3 = _closure1_slot1;
        var1 = global;
        var4 = var1.JSON;
        var2 = var4.stringify;
        var1 = {};
        var5 = 'Verification.FallbackRequest';
        var1['eventType'] = var5;
        var5 = arg1;
        var1['previousInterviewId'] = var5;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['postIncodeFallbackRequest'] = var4;
    var2 = function buildIncodeFallbackSessionInjection(arg1) {
        var1 = global;
        var4 = var1.JSON;
        var3 = var4.stringify;
        var6 = var1.JSON;
        var5 = var6.stringify;
        var2 = arg1;
        var2 = var5.bind(var6)(var2);
        var6 = var3.bind(var4)(var2);
        var4 = var1.JSON;
        var3 = var4.stringify;
        var2 = '__DISCORD_APPLY_INCODE_FALLBACK_SESSION__';
        var8 = var3.bind(var4)(var2);
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var11 = '(function(){var detail=JSON.parse(';
        var9 = ');var key=';
        var7 = ';var n=0;var apply=function(){var cb=window[key];if(typeof cb==="function"){cb(detail);return true;}return false;};if(apply()){return;}var id=setInterval(function(){n+=1;if(apply()||n>40){clearInterval(id);}},50);})();true;';
        var10 = var6;
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['buildIncodeFallbackSessionInjection'] = var2;
    return var1;
})();