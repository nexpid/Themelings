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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/hooks/useGameNameAndCoverImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameNameAndCoverImage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var14;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var8 = undefined;
            var5 = var6.bind(var8)(var2);
            var2 = var5.useGameWithSupplementalData;
            var2 = var2.bind(var5)(var14);
            var10 = var2.data;
            var2 = var2.isLoading;
            var5 = 2;
            var5 = var7[var5];
            var7 = var6.bind(var8)(var5);
            var6 = var7.useStateFromStores;
            var9 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var9;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getDetectableGame;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var7)(var5, var1);
            var1 = {};
            var5 = null;
            var7 = var5 != var14;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var5 == var10;
            var7 = undefined;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var10.supplementalData;
            var12 = var5 == var11;
            var7 = undefined;
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = var11.coverImageUrl;
case 4:
            if(!(var5 == var7)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 3;
            var11 = var13[var11];
            var13 = var12.bind(var8)(var11);
            var12 = var13.getGameAssetURL;
            var11 = {};
            var11['id'] = var14;
            var15 = var5 == var9;
            var14 = undefined;
            if(var15) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var14 = var9.cover_image_hash;
case 9:
            var11['hash'] = var14;
            var14 = true;
            var11['keepAspectRatio'] = var14;
            var7 = var12.bind(var13)(var11);
case 7:
            var6 = var7;
case 2:
            var1['coverImageUrl'] = var6;
            var7 = var5 == var10;
            var6 = undefined;
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var10.supplementalData;
            var11 = var5 == var7;
            var6 = undefined;
            if(var11) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var6 = var7.name;
case 11:
            if(!(var5 == var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var5 == var10;
            var7 = undefined;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var10.name;
case 16:
            var6 = var7;
case 14:
            if(!(var5 == var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = var5 == var9;
            var7 = undefined;
            if(var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var9.name;
case 20:
            var6 = var7;
case 18:
            if(!(var5 != var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var6;
case 22:
            if(!(var5 == var3)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.GIWFlF;
            var3 = var5.bind(var6)(var4);
case 24:
            var1['gameName'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();