// app/modules/activate_device/ActivateDeviceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.PlatformTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activate_device/ActivateDeviceUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function clientIdToActivateDevicePlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 1;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var1 = var1.ConsoleOAuthApplications;
            var1 = var1.PLAYSTATION_APPLICATION_ID;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var3.bind(var5)(var1);
            var1 = var1.ConsoleOAuthApplications;
            var3 = var1.PLAYSTATION_STAGING_APPLICATION_ID;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot2;
            var1 = var3.PLAYSTATION_STAGING;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = _closure1_slot2;
            var1 = var2.PLAYSTATION;
case 4:
            return var1;
        }
    };
    var3['clientIdToActivateDevicePlatform'] = var2;
    return var1;
})();