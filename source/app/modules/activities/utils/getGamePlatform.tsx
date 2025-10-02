// app/modules/activities/utils/getGamePlatform.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var7 = var4.ActivityTypes;
    var _closure1_slot2 = var7;
    var4 = var4.ActivityGamePlatforms;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getGamePlatform.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGamePlatform(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.type;
            var2 = var5 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var4.type;
            var2 = _closure1_slot2;
            var2 = var2.PLAYING;
            var1 = null;
            if(!(var6 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var2 = var2.bind(var6)(var4);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4.platform;
            if(!(var5 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot3;
            var2 = var2.DESKTOP;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = var4.platform;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var3 = _closure1_slot3;
            var2 = var3.XBOX;
case 11:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();