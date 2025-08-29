// app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PixelRatio;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_ITEM_SIZE;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BADGE_PADDING;
    var _closure1_slot4 = var7;
    var4 = var4.BADGE_SIZE;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function computeGuildsBarCutout(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.position;
            var4 = var1.containerSize;
            var10 = undefined;
            if(!(var4 === var10)) { _fun0001_ip = 27; continue _fun0001 }
 20:
            var4 = _closure1_slot3;
 27:
            var5 = var1.width;
            if(!(var5 === var10)) { _fun0001_ip = 43; continue _fun0001 }
 36:
            var5 = _closure1_slot5;
 43:
            var6 = var1.height;
            if(!(var6 === var10)) { _fun0001_ip = 59; continue _fun0001 }
 52:
            var6 = _closure1_slot5;
 59:
            var2 = var1.padding;
            if(!(var2 === var10)) { _fun0001_ip = 75; continue _fun0001 }
 68:
            var2 = _closure1_slot4;
 75:
            var9 = _closure1_slot2;
            var3 = var9.roundToNearestPixel;
            var11 = 2;
            var1 = var11 * var2;
            var1 = var5 + var1;
            var3 = var3.bind(var9)(var1);
            var5 = var9.roundToNearestPixel;
            var1 = var11 * var2;
            var1 = var6 + var1;
            var5 = var5.bind(var9)(var1);
            var6 = var9.roundToNearestPixel;
            var1 = global;
            var12 = var1.Math;
            var1 = var12.min;
            var1 = var1.bind(var12)(var3, var5);
            var1 = var1 / var11;
            var6 = var6.bind(var9)(var1);
            var1 = {'shape': null, 'x': 0, 'y': 0};
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 3;
            var8 = var11[var8];
            var8 = var9.bind(var10)(var8);
            var8 = var8.CutoutShape;
            var8 = var8.RoundedRect;
            var1['shape'] = var8;
            var1['width'] = var3;
            var1['height'] = var5;
            var1['cornerRadius'] = var6;
            var6 = 'top-right';
            if(!(var6 !== var7)) { _fun0001_ip = 258; continue _fun0001 }
 228:
            var6 = var4 - var3;
            var6 = var6 + var2;
            var1['x'] = var6;
            var5 = var4 - var5;
            var5 = var5 + var2;
            var1['y'] = var5;
            _fun0001_ip = 281; continue _fun0001;
 258:
            var3 = var4 - var3;
            var3 = var3 + var2;
            var1['x'] = var3;
            var2 = -var2;
            var1['y'] = var2;
 281:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();