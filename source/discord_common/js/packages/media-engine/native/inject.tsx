// discord_common/js/packages/media-engine/native/inject.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = function assertInjected() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 17; continue _fun0001 }
 13:
            var1 = undefined;
            return var1;
 17:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Native dependencies have not been injected.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/inject.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function inject(arg1) {
        var1 = arg1;
        var _closure1_slot0 = var1;
        var1 = undefined;
        return var1;
    };
    var3['inject'] = var4;
    var4 = function supported() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var2 = _closure1_slot0;
        var1 = var2.supported;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['supported'] = var4;
    var4 = function supportsFeature(arg1) {
        var3 = _closure1_slot3;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var3 = _closure1_slot0;
        var2 = var3.supportsFeature;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['supportsFeature'] = var4;
    var4 = function setProcessPriority(arg1) {
        var3 = _closure1_slot3;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var4 = _closure1_slot0;
        var3 = var4.setProcessPriority;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setProcessPriority'] = var4;
    var4 = function getVoiceEngine() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = _closure1_slot1;
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 43; continue _fun0002 }
 23:
            var3 = _closure1_slot0;
            var1 = var3.getVoiceEngine;
            var1 = var1.bind(var3)();
            var _closure1_slot1 = var1;
            _fun0002_ip = 47; continue _fun0002;
 43:
            var1 = _closure1_slot1;
 47:
            return var1;
        }
    };
    var3['getVoiceEngine'] = var4;
    var2 = function getVoiceFilters() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = _closure1_slot2;
            var1 = null;
            if(!(var1 == var3)) { _fun0003_ip = 43; continue _fun0003 }
 23:
            var3 = _closure1_slot0;
            var1 = var3.getVoiceFilters;
            var1 = var1.bind(var3)();
            var _closure1_slot2 = var1;
            _fun0003_ip = 47; continue _fun0003;
 43:
            var1 = _closure1_slot2;
 47:
            return var1;
        }
    };
    var3['getVoiceFilters'] = var2;
    return var1;
})();