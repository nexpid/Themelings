// app/modules/collectibles/hooks/useHasExpiredShopBlocks.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot3 = var7;
    var4 = var4.useState;
    var _closure1_slot4 = var4;
    var4 = function getNextBlockExpiration(arg1) {
        var4 = arg1;
        var2 = null;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var5 = var4.type;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 2;
                var3 = var1[var6];
                var1 = undefined;
                var3 = var7.bind(var1)(var3);
                var3 = var3.ShopBlockType;
                var3 = var3.IMMERSIVE_BANNER;
                if(!(var5 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var4.type;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ShopBlockType;
                var2 = var2.COUNTDOWN_TIMER;
                var3 = null;
                if(!(var5 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = var4.endTime;
                var2 = var5.getTime;
                var3 = var2.bind(var5)();
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = var4.endTime;
                var2 = null;
                var5 = var2 != var5;
                if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var4.endTime;
                var4 = var5.getTime;
                var2 = var4.bind(var5)();
case 6:
                var3 = var2;
case 4:
                var4 = _closure2_slot0;
                var5 = null;
                var4 = var5 == var4;
                if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var5 = var5 != var3;
                if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var6 = _closure2_slot0;
                var5 = var3 < var6;
case 10:
                var4 = var5;
case 8:
                if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                _closure2_slot0 = var3;
case 12:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useHasExpiredShopBlocks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 600000;
    var3['COLLECTIBLES_SHOP_HOME_CACHE_DURATION'] = var4;
    var2 = function(arg1, arg2, arg3) {
        var6 = arg1;
        var8 = arg2;
        var7 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot4;
        var5 = undefined;
        var1 = false;
        var9 = var4.bind(var5)(var1);
        var4 = _closure1_slot2;
        var1 = 2;
        var9 = var4.bind(var5)(var9, var1);
        var1 = 0;
        var1 = var9[var1];
        var4 = 1;
        var4 = var9[var4];
        var _closure2_slot3 = var4;
        var4 = _closure1_slot3;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = _closure1_slot5;
                var4 = _closure2_slot0;
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var4 = _closure2_slot1;
                if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var4 = _closure2_slot2;
                if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                var4 = null;
                if(!(var4 != var6)) { _fun0002_ip = 14; continue _fun0002 }
case 17:
                var4 = global;
                var7 = var4.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var8 = var6 - var5;
                var5 = 0;
                if(!(!(var8 <= var5))) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var6 = _closure2_slot3;
                var5 = false;
                var5 = var6.bind(var1)(var5);
                var6 = var4.setTimeout;
                var7 = var4.Math;
                var5 = var7.min;
                var4 = 2147483647;
                var5 = var5.bind(var7)(var4, var8);
                var4 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var6.bind(var1)(var4, var5);
                var _closure3_slot0 = var4;
                var3 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var3;
case 18:
                var4 = _closure2_slot3;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                _fun0002_ip = 20; continue _fun0002;
case 14:
                var3 = _closure2_slot3;
                var2 = false;
                var2 = var3.bind(var1)(var2);
case 20:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useHasExpiredShopBlocks'] = var2;
    return var1;
})();