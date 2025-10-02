// app/modules/captcha/CaptchaStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = {};
        var1['captchaServeVolume'] = var2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/captcha/CaptchaStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useCaptchaStore'] = var4;
    var4 = function isCaptchaStoreVolumeEmpty() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.keys;
        var4 = _closure1_slot4;
        var1 = var4.getState;
        var1 = var1.bind(var4)();
        var1 = var1.captchaServeVolume;
        var1 = var2.bind(var3)(var1);
        var2 = var1.length;
        var1 = 0;
        var1 = var1 === var2;
        return var1;
    };
    var3['isCaptchaStoreVolumeEmpty'] = var4;
    var4 = function incrementCaptchaServeVolume(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var5;
                    if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var5.captchaServeVolume;
                    var2 = var3 in var2;
                    var3 = {};
                    var4 = {};
                    var9 = var5.captchaServeVolume;
                    var10 = var4;
                    var7 = copyDataProperties(var10, var9);
                    var6 = _closure2_slot0;
                    var7 = 1;
                    if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4[var6] = var7;
                    var3['captchaServeVolume'] = var4;
                    var2 = var3;
                    _fun0001_ip = 6; continue _fun0001;
case 4:
                    var5 = var5.captchaServeVolume;
                    var5 = var5[var6];
                    var5 = var5 + var7;
                    var4[var6] = var5;
                    var3['captchaServeVolume'] = var4;
                    var2 = var3;
case 6:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['incrementCaptchaServeVolume'] = var4;
    var2 = function flushCaptchaServeVolume() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var13 = global;
            var4 = var13.Object;
            var3 = var4.entries;
            var5 = _closure1_slot4;
            var1 = var5.getState;
            var1 = var1.bind(var5)();
            var1 = var1.captchaServeVolume;
            var12 = var3.bind(var4)(var1);
            var1 = var12.length;
            var11 = 0;
            var3 = var11 < var1;
            var1 = undefined;
            var4 = 2;
            var10 = 1;
            var9 = 3;
            var8 = 4;
            var7 = 'user_flow:';
            var6 = true;
            var5 = 0;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var14 = var12[var5];
            var3 = _closure1_slot3;
            var3 = var3.bind(var1)(var14, var4);
            var18 = var3[var11];
            var16 = var3[var10];
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = var17[var9];
            var15 = var14.bind(var1)(var3);
            var14 = var15.distribution;
            var3 = {};
            var19 = _closure1_slot0;
            var17 = var17[var8];
            var17 = var19.bind(var1)(var17);
            var17 = var17.MetricEvents;
            var17 = var17.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
            var3['name'] = var17;
            var17 = var13.HermesInternal;
            var17 = var17.concat;
            var18 = var17.bind(var7)(var18);
            var17 = new Array(1);
            var17[0] = var18;
            var3['tags'] = var17;
            var3 = var14.bind(var15)(var3, var16, var6);
            var5 = var5 + 1;
            var3 = var12.length;
            if(var5 < var3) { _fun0002_ip = 8; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.setState;
                var1 = {};
                var4 = {};
                var1['captchaServeVolume'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['flushCaptchaServeVolume'] = var2;
    return var1;
})();