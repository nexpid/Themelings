// app/modules/captcha/tooling/CaptchaTestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var8 = global;
    var9 = var8.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var10 = var8.Object;
    var9 = var10.entries;
    var5 = 0;
    var4 = var7[var5];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.HCaptchaDifficulty;
    var10 = var9.bind(var10)(var4);
    var9 = var10.map;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var2 = var5().value;
            var3 = var1;
            var7 = undefined;
            var4 = var3 === var7;
            var3 = undefined;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
 24:
            var3 = var2;
 27:
            var2 = undefined;
            if(var4) { _fun0001_ip = 57; continue _fun0001 }
 32:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var2 = undefined;
            var4 = var5;
            if(var5) { _fun0001_ip = 57; continue _fun0001 }
 51:
            var2 = var6;
            var4 = var5;
 57:
            if(var4) { _fun0001_ip = 63; continue _fun0001 }
 60:
            var1.return();
 63:
            var1 = {};
            var1['label'] = var3;
            var1['value'] = var2;
            return var1;
        }
    };
    var10 = var9.bind(var10)(var4);
    var9 = var10.filter;
    var4 = function isHCaptchaDifficulty(arg1) {
        var1 = arg1;
        var1 = var1.value;
        var2 = 'string';
        var1 = typeof var1;
        var1 = var2 !== var1;
        return var1;
    };
    var4 = var9.bind(var10)(var4);
    var9 = var8.Object;
    var8 = var9.entries;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CaptchaDeciderType;
    var8 = var8.bind(var9)(var5);
    var5 = var8.map;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var2 = var5().value;
            var3 = var1;
            var7 = undefined;
            var4 = var3 === var7;
            var3 = undefined;
            if(var4) { _fun0002_ip = 27; continue _fun0002 }
 24:
            var3 = var2;
 27:
            var2 = undefined;
            if(var4) { _fun0002_ip = 57; continue _fun0002 }
 32:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var2 = undefined;
            var4 = var5;
            if(var5) { _fun0002_ip = 57; continue _fun0002 }
 51:
            var2 = var6;
            var4 = var5;
 57:
            if(var4) { _fun0002_ip = 63; continue _fun0002 }
 60:
            var1.return();
 63:
            var1 = {};
            var1['label'] = var3;
            var1['value'] = var2;
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/captcha/tooling/CaptchaTestUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['HCAPTCHA_DIFFICULTY_OPTIONS'] = var4;
    var3['CAPTCHA_DECIDER_TYPE_OPTIONS'] = var2;
    return var1;
})();