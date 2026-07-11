// app/modules/badges/BadgeIdResolution.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var7);
    var8 = var1.Set;
    var9 = var1.Object;
    var7 = var9.values;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.LEGACY_BADGE_ID_MAP;
    var12 = var7.bind(var9)(var4);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/badges/BadgeIdResolution.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function legacyBadgeIdToBadgeId(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.LEGACY_BADGE_ID_MAP;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['legacyBadgeIdToBadgeId'] = var4;
    var4 = function resolveProfileBadgeId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.LEGACY_BADGE_ID_MAP;
            var1 = var1[var5];
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var3 = var4.bind(var2)(var3);
            var4 = var3.BadgeId;
            var3 = var5.toUpperCase;
            var3 = var3.bind(var5)();
            var3 = var4[var3];
            var5 = 'number';
            var4 = typeof var3;
            var2 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var3['resolveProfileBadgeId'] = var4;
    var2 = function isLegacyBadgeId(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isLegacyBadgeId'] = var2;
    return var1;
})();