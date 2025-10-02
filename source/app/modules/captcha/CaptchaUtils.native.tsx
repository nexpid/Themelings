// app/modules/captcha/CaptchaUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.CAPTCHA_MODAL_KEY;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function showCaptcha(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = arguments[2];
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = {};
case 2:
            var11 = var2.sitekey;
            var10 = var2.captchaService;
            var7 = var2.options;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 3;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var12 = _closure1_slot0;
            var4 = 5;
            var4 = var3[var4];
            var12 = var12.bind(var1)(var4);
            var4 = 4;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var12.bind(var1)(var4, var3);
            var3 = _closure1_slot4;
            var2 = {};
            var2['sitekey'] = var11;
            var2['captchaService'] = var10;
            var10 = function onCaptchaVerify(arg1, arg2) {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = arg1;
                var2['captcha_key'] = var1;
                var1 = arg2;
                var2['captcha_rqtoken'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onCaptchaVerify'] = var10;
            var9 = function close() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.hideActionSheet;
                var1 = _closure1_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['close'] = var9;
            var15 = var2;
            var14 = var8;
            var8 = copyDataProperties(var15, var14);
            var15 = var2;
            var14 = var7;
            var7 = copyDataProperties(var15, var14);
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['showCaptcha'] = var7;
    var7 = function showCaptchaAsync(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = {};
case 4:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var3;
            var3 = var2.sitekey;
            _closure2_slot1 = var3;
            var3 = var2.captchaService;
            _closure2_slot2 = var3;
            var3 = var2.captchaSessionId;
            _closure2_slot3 = var3;
            var2 = var2.options;
            _closure2_slot4 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var4 = var3[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var5 = _closure1_slot0;
                var4 = 5;
                var4 = var3[var4];
                var5 = var5.bind(var1)(var4);
                var4 = 4;
                var4 = var3[var4];
                var3 = var3.paths;
                var5 = var5.bind(var1)(var4, var3);
                var4 = _closure1_slot4;
                var3 = {};
                var9 = _closure2_slot1;
                var3['sitekey'] = var9;
                var9 = _closure2_slot2;
                var3['captchaService'] = var9;
                var9 = function onCaptchaVerify(arg1, arg2) {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var1 = arg1;
                    var2['captcha_key'] = var1;
                    var1 = arg2;
                    var2['captcha_rqtoken'] = var1;
                    var1 = _closure2_slot3;
                    var2['captcha_session_id'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onCaptchaVerify'] = var9;
                var9 = function onReject(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 6;
                        var3 = var1[var5];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.CaptchaError;
                        var4 = var3.CANCEL;
                        var3 = arg1;
                        if(!(var3 !== var4)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = _closure3_slot1;
                        var3 = global;
                        var7 = var3.Error;
                        var9 = _closure2_slot2;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var6 = 'Failed to display captcha for service ';
                        var3 = '.';
                        var11 = var8.bind(var6)(var9, var3);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var12 = var6;
                        var3 = new var12[var7](var11, var10);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var4.bind(var1)(var3);
                        _fun0003_ip = 8; continue _fun0003;
case 6:
                        var3 = _closure3_slot1;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.CaptchaCancelError;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var12 = var4;
                        var2 = new var12[var2](var11);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2 = var3.bind(var1)(var2);
case 8:
                        return var1;
                    }
                };
                var3['onReject'] = var9;
                var8 = function close() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hideActionSheet;
                    var1 = _closure1_slot4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['close'] = var8;
                var12 = _closure2_slot0;
                var13 = var3;
                var8 = copyDataProperties(var13, var12);
                var12 = _closure2_slot4;
                var13 = var3;
                var2 = copyDataProperties(var13, var12);
                var10 = 'stack';
                var14 = var7;
                var13 = var5;
                var12 = var4;
                var11 = var3;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            };
            var7 = var2;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var2['showCaptchaAsync'] = var7;
    var4 = function useIsCaptchaModalOpen() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot3;
            var2 = var3.getKey;
            var2 = var2.bind(var3)();
            var1 = _closure1_slot4;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useIsCaptchaModalOpen'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/CaptchaUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();