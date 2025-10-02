// app/modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = {};
    var4 = function getRobloxSubgameURL(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 1;
                    var2 = var5[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.canOpenUrlScheme;
                    var2 = 'roblox';
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=53);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 2;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = var6.ROBLOX_DEFERRED_WEB_URL;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var6)(var3);
                    _fun0001_ip = 10; continue _fun0001;
case 8:
                    var5 = var6.ROBLOX_PROTOCOL_URL;
                    var4 = _closure2_slot0;
                    var3 = var5.bind(var6)(var4);
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['getRobloxSubgameURL'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();