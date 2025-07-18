// app/modules/favorites/useIsFavoritesGuildVisible.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isFavoritesGuildVisible(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var7) { _fun0001_ip = 216; continue _fun0001 }
 93:
            if(var3) { _fun0001_ip = 98; continue _fun0001 }
 96:
            return var1;
 98:
            var3 = var6.getFavoriteChannels;
            var9 = var3.bind(var6)();
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 5;
            var3 = var3[var6];
            var7 = var7.bind(var5)(var3);
            var3 = var7.isEmpty;
            var3 = var3.bind(var7)(var9);
            if(var3) { _fun0001_ip = 214; continue _fun0001 }
 142:
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
 0:
                    var4 = _closure2_slot0;
                    var2 = var4.getChannel;
                    var1 = arg1;
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var6;
                    if(!var1) { _fun0002_ip = 80; continue _fun0002 }
 29:
                    var2 = var6.isPrivate;
                    var2 = var2.bind(var6)();
                    var4 = !var2;
                    var2 = !var4;
                    if(!var4) { _fun0002_ip = 77; continue _fun0002 }
 48:
                    var5 = _closure2_slot1;
                    var4 = var5.can;
                    var3 = _closure1_slot6;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = var4.bind(var5)(var3, var6);
 77:
                    var1 = var2;
 80:
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
 214:
            return var1;
 216:
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
 0:
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
 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0004_ip = 38; continue _fun0004 }
 10:
                    var6 = _closure1_slot7;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot3;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = var6.bind(var2)(var5, var4, var3);
 38:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = !var1;
            var1 = !var3;
            if(!var3) { _fun0003_ip = 130; continue _fun0003 }
 127:
            var1 = var2;
 130:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['isFavoritesGuildVisible'] = var2;
    return var1;
})();