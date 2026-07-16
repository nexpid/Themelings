// app/modules/home_drawer/native/isHomeDrawerChannelMuted.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isThread;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/isHomeDrawerChannelMuted.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsHomeDrawerChannelMuted() {
        var3 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 3;
        var4 = var7[var1];
        var2 = undefined;
        var6 = var3.bind(var2)(var4);
        var5 = var6.useStateFromStores;
        var9 = _closure1_slot2;
        var4 = new Array(2);
        var4[0] = var9;
        var8 = _closure1_slot4;
        var4[1] = var8;
        var1 = var7[var1];
        var1 = var3.bind(var2)(var1);
        var10 = var1.statesWillNeverBeEqual;
        var12 = function() {
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot3;
                    var4 = var2.type;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = _closure1_slot2;
                    var5 = var6.isMuted;
                    var4 = var2.id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                    if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                    var5 = var2.id;
                    _fun0001_ip = 7; continue _fun0001;
case 5:
                    var5 = var2.parent_id;
case 7:
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot4;
                    var3 = var4.isGuildOrCategoryOrChannelMuted;
                    var2 = var2.guild_id;
                    var1 = var3.bind(var4)(var2, var5);
case 8:
                    return var1;
case 4:
                    var1 = true;
                    return var1;
                }
            };
            return var1;
        };
        var11 = new Array(0);
        var14 = var6;
        var13 = var4;
        var1 = var14[var5](var13, var12, var11, var10, var9);
        return var1;
    };
    var3['useIsHomeDrawerChannelMuted'] = var2;
    return var1;
})();