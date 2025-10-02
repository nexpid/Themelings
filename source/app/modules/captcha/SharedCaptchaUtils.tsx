// app/modules/captcha/SharedCaptchaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var8[var5];
    var6 = var6.bind(var1)(var5);
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.incrementCaptchaServeVolume;
    var _closure1_slot5 = var9;
    var9 = var5.flushCaptchaServeVolume;
    var _closure1_slot6 = var9;
    var5 = var5.isCaptchaStoreVolumeEmpty;
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
    var _closure1_slot8 = var5;
    var5 = {};
    var9 = 'cancel';
    var5['CANCEL'] = var9;
    var9 = 'error';
    var5['ERROR'] = var9;
    var9 = 'expired';
    var5['EXPIRED'] = var9;
    var2 = var2.Error;
    var6 = var6.bind(var1)(var2);
    var2 = function(arg1) {
        var3 = function CaptchaCancelError() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var9 = ['Captcha cancelled'];
                var1 = _closure1_slot3;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 7; continue _fun0002;
case 5:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 7:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot0;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/captcha/SharedCaptchaUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['CaptchaError'] = var5;
    var5 = function extractCaptchaPropsFromResponse(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.captcha_service;
            var1['captchaService'] = var2;
            var2 = var3.captcha_sitekey;
            var1['sitekey'] = var2;
            var2 = var3.captcha_session_id;
            var1['captchaSessionId'] = var2;
            var2 = {};
            var4 = var3.captcha_rqdata;
            var2['rqdata'] = var4;
            var4 = var3.captcha_rqtoken;
            var2['rqtoken'] = var4;
            var5 = var3.should_serve_invisible;
            var4 = null;
            var4 = var4 != var5;
            if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = var5;
case 8:
            var2['serveInvisible'] = var4;
            var3 = var3.user_flow;
            var2['userflow'] = var3;
            var1['options'] = var2;
            return var1;
        }
    };
    var3['extractCaptchaPropsFromResponse'] = var5;
    var4 = function emitCaptchaDistributionMetric(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var3 = global;
            var5 = var3.setTimeout;
            var4 = _closure1_slot8;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var3 = var5.bind(var1)(var3, var4);
case 10:
            var3 = _closure1_slot5;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['emitCaptchaDistributionMetric'] = var4;
    var3['CaptchaCancelError'] = var2;
    return var1;
})();