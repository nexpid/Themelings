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
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShowTryItOutButtonInAppLauncher(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.context;
            var6 = var1.application;
            var5 = var1.botUserId;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 0;
            var2 = var9[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.useIsPrimaryAppCommandUsableInAppDM;
            var2 = {};
            var2['context'] = var8;
            var10 = var6.id;
            var2['applicationId'] = var10;
            var2['botUserId'] = var5;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var9[var3];
            var4 = var4.bind(var7)(var3);
            var10 = var8.type;
            var9 = 'channel';
            var3 = undefined;
            if(!(var9 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var8.channel;
case 2:
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 2;
            var1 = var8[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.canLaunchFrame;
            var1 = var1.bind(var4)(var6);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = null;
            var2 = var4 != var5;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = !var3;
case 8:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();