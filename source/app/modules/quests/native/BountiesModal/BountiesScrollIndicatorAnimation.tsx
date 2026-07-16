// app/modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 3;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_48;
        var2['width'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
        var3 = var3.PX_48;
        var2['height'] = var3;
        var1['image'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesScrollIndicatorAnimation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesScrollIndicatorAnimation() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot4;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.APNGPlayer;
            var1 = {};
            var8 = _closure1_slot1;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var1['url'] = var7;
            var7 = var6.image;
            var1['style'] = var7;
            var7 = true;
            var1['autoplay'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var3 = var9.bind(var5)(var2);
            var2 = {};
            var7 = {};
            var8 = 6;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var7['uri'] = var8;
            var2['source'] = var7;
            var6 = var6.image;
            var2['style'] = var6;
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();