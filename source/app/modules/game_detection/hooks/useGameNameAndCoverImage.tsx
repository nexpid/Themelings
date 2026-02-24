// app/modules/game_detection/hooks/useGameNameAndCoverImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/hooks/useGameNameAndCoverImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameNameAndCoverImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var _closure2_slot0 = var13;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 2;
            var2 = var10[var2];
            var9 = undefined;
            var3 = var6.bind(var9)(var2);
            var2 = var3.useDetectableGameSupplementalData;
            var2 = var2.bind(var3)(var13);
            var7 = var2.coverImageUrl;
            var4 = var2.localizedName;
            var3 = var2.isFetching;
            var2 = 3;
            var8 = var10[var2];
            var14 = var6.bind(var9)(var8);
            var12 = var14.useStateFromStores;
            var8 = _closure1_slot3;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getDetectableGame;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var12.bind(var14)(var11, var8);
            var2 = var10[var2];
            var10 = var6.bind(var9)(var2);
            var6 = var10.useStateFromStores;
            var11 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.canFetch;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var10)(var2, var1);
            var1 = {};
            var6 = null;
            if(!(var6 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 4;
            var10 = var12[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.getGameAssetURL;
            var10 = {};
            var10['id'] = var13;
            var14 = var6 == var8;
            var13 = undefined;
            if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var8.cover_image_hash;
case 4:
            var10['hash'] = var13;
            var13 = true;
            var10['keepAspectRatio'] = var13;
            var7 = var11.bind(var12)(var10);
case 2:
            var1['coverImageUrl'] = var7;
            if(!(var6 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var6 == var8;
            var7 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8.name;
case 8:
            var4 = var7;
case 6:
            if(!(var6 == var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.GIWFlF;
            var4 = var6.bind(var7)(var5);
case 10:
            var1['gameName'] = var4;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var3;
case 12:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();