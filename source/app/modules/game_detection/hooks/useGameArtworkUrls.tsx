// app/modules/game_detection/hooks/useGameArtworkUrls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function getArtworkUrls(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var1 = arg3;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = null;
            if(!(var3 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = new Array(0);
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getGameAssetURL;
                var1 = {};
                var4 = _closure2_slot0;
                var1['id'] = var4;
                var4 = arg1;
                var1['hash'] = var4;
                var4 = true;
                var1['keepAspectRatio'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 2;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.isNotNullish;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_detection/hooks/useGameArtworkUrls.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getArtworkUrls'] = var4;
    var2 = function useGameArtworkUrls(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var5 = var6.id;
            var2 = new Array(3);
            var2[0] = var5;
            var9 = var6.media;
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var8 = var9.artwork_hashes;
case 7:
            var2[1] = var8;
            var6 = var6.media;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var6.artwork_urls;
case 9:
            var2[2] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.media;
                    var1 = null;
                    var4 = var1 == var3;
                    var5 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = var3.artwork_hashes;
case 11:
                    if(!(var1 == var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot0;
                    var3 = var2.media;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = var3.artwork_urls;
case 15:
                    if(!(var1 != var2)) { _fun0003_ip = 17; continue _fun0003 }
case 13:
                    var4 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var7 = var2.media;
                    var8 = var1 == var7;
                    var2 = undefined;
                    if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = var7.artwork_hashes;
case 18:
                    var6 = _closure2_slot0;
                    var6 = var6.media;
                    var7 = var1 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = var6.artwork_urls;
case 20:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    _fun0003_ip = 22; continue _fun0003;
case 17:
                    var1 = new Array(0);
case 22:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useGameArtworkUrls'] = var2;
    return var1;
})();