// app/modules/captcha/useCaptchaModalEffects.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/captcha/useCaptchaModalEffects.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCaptchaModalEffects(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.onReject;
            var _closure2_slot0 = var3;
            var2 = var2.analyticsType;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 33; continue _fun0001 }
 27:
            var2 = 'Guild Join Captcha';
 33:
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var6;
            var5 = _closure1_slot3;
            var7 = var5.useRef;
            var4 = true;
            var4 = var7.bind(var5)(var4);
            _closure2_slot2 = var4;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        if(!var2) { _fun0002_ip = 71; continue _fun0002 }
 15:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 71; continue _fun0002 }
 25:
                        var3 = _closure2_slot0;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.CaptchaError;
                        var1 = var1.CANCEL;
                        var1 = var3.bind(var2)(var1);
 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var4.bind(var6)(var3);
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.OPEN_MODAL;
                var1 = {};
                var5 = _closure2_slot1;
                var1['type'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot2;
                        var1 = var1.current;
                        if(!var1) { _fun0003_ip = 71; continue _fun0003 }
 15:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.track;
                        var1 = _closure1_slot4;
                        var2 = var1.MODAL_DISMISSED;
                        var1 = {};
                        var5 = _closure2_slot1;
                        var1['type'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();