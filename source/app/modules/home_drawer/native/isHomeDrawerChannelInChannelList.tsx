// app/modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/isHomeDrawerChannelInChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsHomeDrawerChannelInChannelList() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 1;
        var5 = var7[var1];
        var2 = undefined;
        var6 = var3.bind(var2)(var5);
        var5 = var6.useStateFromStores;
        var8 = _closure1_slot2;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = var7[var1];
        var1 = var3.bind(var2)(var1);
        var9 = var1.statesWillNeverBeEqual;
        var11 = function() {
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.isOptInEnabledForGuild;
                    var1 = var4.guild_id;
                    var1 = var3.bind(var5)(var1);
                    var1 = !var1;
                    if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot2;
                    var2 = var3.isChannelRecordOrParentOptedIn;
                    var1 = var2.bind(var3)(var4);
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var10 = new Array(0);
        var13 = var6;
        var12 = var4;
        var1 = var13[var5](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['useIsHomeDrawerChannelInChannelList'] = var2;
    return var1;
})();