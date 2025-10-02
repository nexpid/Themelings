// app/modules/captcha/tooling/CaptchaTestActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _testCaptcha() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot3;
                    var6 = var6.CAPTCHA_TEST;
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['decider'] = var7;
                    var7 = arg2;
                    var6['options'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=97);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var8[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var5 = {};
    var4 = 'hCaptchaRqdata';
    var5['HCAPTCHA_RQDATA'] = var4;
    var4 = 'SmiteRqdata';
    var5['SMITE_RQDATA'] = var4;
    var4 = 'Recaptcha';
    var5['RECAPTCHA'] = var4;
    var4 = 'RecaptchaEnterprise';
    var5['RECAPTCHA_ENTERPRISE'] = var4;
    var4 = {};
    var4['EASY'] = var9;
    var6 = 'EASY';
    var4[var9] = var6;
    var9 = 2;
    var4['MODERATE'] = var9;
    var6 = 'MODERATE';
    var4[var9] = var6;
    var6 = 3;
    var4['DIFFICULT'] = var6;
    var9 = 'DIFFICULT';
    var4[var6] = var9;
    var10 = 4;
    var4['VERY_DIFFICULT'] = var10;
    var9 = 'VERY_DIFFICULT';
    var4[var10] = var9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/captcha/tooling/CaptchaTestActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['CaptchaDeciderType'] = var5;
    var3['HCaptchaDifficulty'] = var4;
    var2 = function testCaptcha() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['testCaptcha'] = var2;
    return var1;
})();