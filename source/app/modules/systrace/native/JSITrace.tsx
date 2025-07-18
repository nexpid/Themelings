// app/modules/systrace/native/JSITrace.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native1;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/systrace/native/JSITrace.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isJSITraceEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 63; continue _fun0001 }
 43:
            var2 = _closure1_slot3;
            var3 = var2.JSITrace;
            var2 = var3.isEnabled;
            var1 = var2.bind(var3)();
 63:
            return var1;
        }
    };
    var3['isJSITraceEnabled'] = var4;
    var4 = function setJSITraceEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 61; continue _fun0002 }
 37:
            var2 = _closure1_slot3;
            var4 = var2.JSITrace;
            var3 = var4.setEnabled;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
 61:
            return var1;
        }
    };
    var3['setJSITraceEnabled'] = var4;
    var4 = function installJSITrace() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var4.bind(var2)(var1);
            var1 = var4.isAndroid;
            var1 = var1.bind(var4)();
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0003_ip = 77; continue _fun0003 }
 43:
            var3 = _closure1_slot3;
            var4 = var3.JSITrace;
            var3 = null;
            var3 = var3 == var4;
            var2 = undefined;
            if(var3) { _fun0003_ip = 74; continue _fun0003 }
 64:
            var3 = var4.install;
            var2 = var3.bind(var4)();
 74:
            var1 = var2;
 77:
            return var1;
        }
    };
    var3['installJSITrace'] = var4;
    var4 = function beginSection(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.jsitrace_beginSection;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['beginSection'] = var4;
    var4 = function beginAyncSection(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = var4.jsitrace_beginAsyncSection;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['beginAyncSection'] = var4;
    var4 = function endSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 == var3)) { _fun0004_ip = 28; continue _fun0004 }
 9:
            var2 = _closure1_slot0;
            var1 = var2.jsitrace_endSection;
            var1 = var1.bind(var2)();
            _fun0004_ip = 46; continue _fun0004;
 28:
            var2 = _closure1_slot0;
            var1 = var2.jsitrace_endSection;
            var1 = var1.bind(var2)(var3);
 46:
            var1 = undefined;
            return var1;
        }
    };
    var3['endSection'] = var4;
    var4 = function endAsyncSection(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = var4.jsitrace_endAsyncSection;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['endAsyncSection'] = var4;
    var2 = function setCounter(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.jsitrace_setCounter;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['setCounter'] = var2;
    return var1;
})();