// app/modules/favorites/useIsFavoritesGuildVisible.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isFavoritesGuildVisible(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var5 = undefined;
            var9 = var3.bind(var5)(var1);
            var8 = var9.getCurrentConfig;
            var7 = {};
            var1 = 'isFavoritesGuildVisible';
            var7['location'] = var1;
            var3 = {};
            var1 = false;
            var3['autoTrackExposure'] = var1;
            var7 = var8.bind(var9)(var7, var3);
            var3 = var7.canShow;
            var7 = var7.isFavoritesPerk;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            return var1;
case 4:
            var3 = var6.getFavoriteChannels;
            var9 = var3.bind(var6)();
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 5;
            var3 = var3[var6];
            var7 = var7.bind(var5)(var3);
            var3 = var7.isEmpty;
            var3 = var3.bind(var7)(var9);
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var7 = 6;
            var7 = var2[var7];
            var8 = var3.bind(var5)(var7);
            var7 = var8.keys;
            var8 = var7.bind(var8)(var9);
            var7 = var8.filter;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var2 = var4.getChannel;
                    var1 = arg1;
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var6;
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = var6.isPrivate;
                    var2 = var2.bind(var6)();
                    var4 = !var2;
                    var2 = !var4;
                    if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure2_slot1;
                    var4 = var5.can;
                    var3 = _closure1_slot6;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = var4.bind(var5)(var3, var6);
case 10:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4);
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isEmpty;
            var2 = var2.bind(var3)(var4);
            var2 = !var2;
            return var2;
case 6:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Permissions;
    var _closure1_slot6 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/favorites/useIsFavoritesGuildVisible.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsFavoritesGuildVisible() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var4 = undefined;
            var8 = var5.bind(var4)(var1);
            var3 = var8.useFavoritesServerExperiment;
            var1 = 'useIsFavoritesGuildVisible';
            var1 = var3.bind(var8)(var1);
            var3 = var1.canShow;
            var _closure2_slot0 = var3;
            var1 = var1.isFavoritesPerk;
            var3 = 7;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.useStateFromStores;
            var7 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = _closure1_slot3;
            var3[1] = var7;
            var6 = _closure1_slot4;
            var3[2] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot3;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
case 12:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = !var1;
            var1 = !var3;
            if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['isFavoritesGuildVisible'] = var2;
    return var1;
})();