// app/modules/go_live/utils/getSoundshareAnalyticsContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/getSoundshareAnalyticsContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSoundshareAnalyticsContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = null;
            if(!(var7 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var4.sourcePid;
            var5 = var7 != var8;
            var3 = undefined;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = var6.getGameForPID;
            var6 = var5.bind(var6)(var8);
            var8 = var7 == var6;
            var5 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.name;
case 6:
            var7 = var7 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var6.id;
case 8:
            var2 = var1;
            var3 = var5;
case 4:
            var1 = {};
            var4 = var4.soundshareSession;
            var1['soundshare_session'] = var4;
            var1['share_game_name'] = var3;
            var1['share_game_id'] = var2;
            return var1;
case 2:
            var1 = {};
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();