// app/modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShowTryItOutButtonInAppLauncher(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.context;
            var9 = var1.application;
            var4 = var1.botUserId;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 0;
            var1 = var7[var1];
            var5 = undefined;
            var8 = var3.bind(var5)(var1);
            var3 = var8.useIsPrimaryAppCommandUsableInAppDM;
            var1 = {};
            var1['context'] = var6;
            var9 = var9.id;
            var1['applicationId'] = var9;
            var1['botUserId'] = var4;
            var1 = var3.bind(var8)(var1);
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var8 = var6.type;
            var7 = 'channel';
            var2 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var2 = var6.channel;
 110:
            var2 = var3.bind(var5)(var2);
            if(!var1) { _fun0001_ip = 124; continue _fun0001 }
 118:
            var3 = null;
            var1 = var3 != var4;
 124:
            if(!var1) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var1 = !var2;
 130:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();