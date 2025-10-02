// app/modules/avatar_decorations/native/AvatarDecorationUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.DECORATION_TO_AVATAR_RATIO;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/avatar_decorations/native/AvatarDecorationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getDecorationSizeForAvatarSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = 'number';
            var1 = typeof var4;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
            var1 = var4 * var1;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var3 = var3.AVATAR_SIZE_MAP;
            var3 = var3[var4];
            var2 = _closure1_slot3;
            var1 = var3 * var2;
case 4:
            return var1;
        }
    };
    var3['getDecorationSizeForAvatarSize'] = var4;
    var4 = function getDecorationCutoutForAvatarCutout(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var7;
            var5 = null;
            var1 = var6;
            if(!(var5 != var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = {};
            var3 = var6.direction;
            var2['direction'] = var3;
            var3 = var6.radius;
            var2['radius'] = var3;
            var8 = var6.inset;
            var9 = var5 != var8;
            var3 = 0;
            if(!var9) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = var8;
case 7:
            var3 = var3 + var7;
            var2['inset'] = var3;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var7 = var7[var3];
            var3 = undefined;
            var7 = var8.bind(var3)(var7);
            var7 = var7.CutoutType;
            var7 = var7.RECTANGULAR;
            var2['imageType'] = var7;
            var6 = var6.nativeCutouts;
            var5 = var5 == var6;
            if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var5 = var6.map;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var2;
                var3 = copyDataProperties(var7, var6);
                var4 = var2.x;
                var3 = _closure2_slot0;
                var5 = var4 + var3;
                var4 = 'x';
                var1[var4] = var5;
                var2 = var2.y;
                var3 = var2 + var3;
                var2 = 'y';
                var1[var2] = var3;
                return var1;
            };
            var3 = var5.bind(var6)(var4);
case 9:
            var2['nativeCutouts'] = var3;
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['getDecorationCutoutForAvatarCutout'] = var4;
    var2 = function openAvatarDecorationActionSheet(arg1) {
        var1 = arg1;
        var9 = var1.user;
        var8 = var1.guildId;
        var7 = var1.currentAvatarDecoration;
        var2 = var1.analyticsLocations;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var5 = 2;
        var10 = var3[var5];
        var1 = undefined;
        var11 = var6.bind(var1)(var10);
        var10 = var11.hideActionSheet;
        var10 = var10.bind(var11)();
        var5 = var3[var5];
        var6 = var6.bind(var1)(var5);
        var5 = var6.openLazy;
        var10 = _closure1_slot0;
        var4 = 4;
        var4 = var3[var4];
        var10 = var10.bind(var1)(var4);
        var4 = 3;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var10.bind(var1)(var4, var3);
        var3 = {};
        var3['user'] = var9;
        var3['guildId'] = var8;
        var3['currentAvatarDecoration'] = var7;
        var3['analyticsLocations'] = var2;
        var2 = 'Edit Avatar Decoration';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['openAvatarDecorationActionSheet'] = var2;
    return var1;
})();