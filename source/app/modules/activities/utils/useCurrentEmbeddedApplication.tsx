// app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/useCurrentEmbeddedApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCurrentEmbeddedApplication() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var2 = {};
 11:
            var7 = var2.fetchesApplication;
            if(!(var7 === var1)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var7 = true;
 23:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 1;
            var3 = var8[var5];
            var3 = var6.bind(var1)(var3);
            var4 = var3.bind(var1)();
            var3 = 2;
            var3 = var8[var3];
            var6 = var6.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 83; continue _fun0001 }
 68:
            var8 = var4.applicationId;
            var4 = new Array(1);
            var4[0] = var8;
            _fun0001_ip = 87; continue _fun0001;
 83:
            var4 = new Array(0);
 87:
            var4 = var6.bind(var1)(var4, var7);
            var2 = _closure1_slot2;
            var4 = var2.bind(var1)(var4, var5);
            var2 = 0;
            var2 = var4[var2];
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 121; continue _fun0001 }
 118:
            var1 = var2;
 121:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();