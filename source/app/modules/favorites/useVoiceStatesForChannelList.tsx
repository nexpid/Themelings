// app/modules/favorites/useVoiceStatesForChannelList.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/useVoiceStatesForChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoiceStatesForChannelList(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot2;
        var3[1] = var7;
        var2 = _closure1_slot4;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure2_slot0;
                var3 = _closure1_slot5;
                if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot4;
                var3 = var4.getFavoriteChannels;
                var4 = var3.bind(var4)();
                var3 = {};
                var8 = var4;
                var4 = null;
                for(var5 in var8)
case 4:
                {
case 5:
                    var11 = var5;
                    var12 = _closure1_slot2;
                    var10 = var12.getChannel;
                    var13 = var10.bind(var12)(var11);
                    if(var4 == var13) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var12 = _closure1_slot3;
                    var10 = var12.getVoiceStatesForChannel;
                    var10 = var10.bind(var12)(var13);
                    var3[var11] = var10;
                    _fun0001_ip = 4; continue _fun0001;
                }
case 7:
                return var3;
case 2:
                var3 = _closure1_slot3;
                var2 = var3.getVoiceStates;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();