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
    var2 = function useGameNameAndCoverImage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var15 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var15;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var9 = undefined;
            var3 = var6.bind(var9)(var2);
            var2 = var3.useDetectableGameSupplementalData;
            var2 = var2.bind(var3)(var15);
            var11 = var2.coverImageUrl;
            var7 = var2.localizedName;
            var3 = var2.isFetching;
            var2 = 3;
            var10 = var8[var2];
            var16 = var6.bind(var9)(var10);
            var14 = var16.useStateFromStores;
            var10 = _closure1_slot3;
            var13 = new Array(1);
            var13[0] = var10;
            var12 = new Array(1);
            var12[0] = var15;
            var10 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getDetectableGame;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var14.bind(var16)(var13, var10, var12);
            var2 = var8[var2];
            var12 = var6.bind(var9)(var2);
            var8 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot4;
                    var3 = var4.canFetch;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var6, var1, var2);
            var1 = {};
            var6 = null;
            var12 = var6 != var15;
            var8 = undefined;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var6 == var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 4;
            var12 = var14[var12];
            var14 = var13.bind(var9)(var12);
            var13 = var14.getGameAssetURL;
            var12 = {};
            var12['id'] = var15;
            var16 = var6 == var10;
            var15 = undefined;
            if(var16) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var10.cover_image_hash;
case 8:
            var12['hash'] = var15;
            var15 = true;
            var12['keepAspectRatio'] = var15;
            var11 = var13.bind(var14)(var12);
case 6:
            var8 = var11;
case 4:
            var1['coverImageUrl'] = var8;
            if(!(var6 == var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = var6 == var10;
            var8 = undefined;
            if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var10.name;
case 12:
            var7 = var8;
case 10:
            if(!(var6 != var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var7;
case 14:
            if(!(var6 == var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
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
case 16:
            var1['gameName'] = var4;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var3;
case 18:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();