// app/modules/activities/getURLForApplication.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var4 = function getNonTestModeUrlForApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = global;
            var1 = var2.window;
            var1 = var1.GLOBAL_ENV;
            var6 = var1.ACTIVITY_APPLICATION_HOST;
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0001_ip = 60; continue _fun0001 }
 29:
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = 'https://';
            var3 = arg1;
            var2 = '.';
            var1 = var5.bind(var4)(var3, var2, var6);
 60:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var2 = function isUsingDevShelfActivityUrlOverride() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot1;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.useActivityUrlOverride;
            if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 26:
            var4 = var2.activityUrlOverride;
            var3 = null;
            var1 = var3 != var4;
 38:
            if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 41:
            var3 = var2.activityUrlOverride;
            var2 = '';
            var1 = var2 !== var3;
 55:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var7[var1];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var7[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var7 = var7[var6];
    var6 = native2;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/getURLForApplication.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function getURLForApplication(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot3;
            var3 = undefined;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 64; continue _fun0003 }
 19:
            var5 = _closure1_slot0;
            var1 = var5.inTestModeForEmbeddedApplication;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0003_ip = 50; continue _fun0003 }
 39:
            var1 = _closure1_slot2;
            var1 = var1.bind(var3)(var4);
            _fun0003_ip = 62; continue _fun0003;
 50:
            var3 = _closure1_slot0;
            var1 = var3.testModeOriginURL;
 62:
            _fun0003_ip = 84; continue _fun0003;
 64:
            var3 = _closure1_slot1;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var1 = var2.activityUrlOverride;
 84:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['getNonTestModeUrlForApplication'] = var4;
    var3['isUsingDevShelfActivityUrlOverride'] = var2;
    return var1;
})();