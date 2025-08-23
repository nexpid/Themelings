// app/modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        var10 = arg1;
        var9 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var9;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useShopProductItems;
        var4 = var4.bind(var5)(var10);
        var8 = var4.firstProfileEffect;
        var _closure2_slot2 = var8;
        var7 = var4.firstAvatarDecoration;
        var _closure2_slot3 = var7;
        var6 = var4.firstNameplate;
        var _closure2_slot4 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(5);
        var3[0] = var10;
        var3[1] = var9;
        var3[2] = var8;
        var3[3] = var7;
        var3[4] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var10 = 3;
                var4 = var4[var10];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.BUNDLE;
                if(!(var6 === var4)) { _fun0001_ip = 76; continue _fun0001 }
 55:
                var4 = _closure2_slot2;
                var7 = null;
                if(!(var7 != var4)) { _fun0001_ip = 76; continue _fun0001 }
 65:
                var4 = _closure2_slot3;
                if(!(var7 == var4)) { _fun0001_ip = 278; continue _fun0001 }
 76:
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var6 = var4.items;
                var4 = 1;
                var6 = var8.bind(var5)(var6, var4);
                var4 = 0;
                var8 = var6[var4];
                var _closure3_slot0 = var8;
                var4 = null;
                if(!(var4 != var8)) { _fun0001_ip = 276; continue _fun0001 }
 118:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 5;
                var9 = var4[var9];
                var11 = var6.bind(var5)(var9);
                var9 = var11.match;
                var8 = var8.type;
                var12 = var9.bind(var11)(var8);
                var11 = var12.with;
                var8 = var4[var10];
                var8 = var6.bind(var5)(var8);
                var8 = var8.CollectiblesItemType;
                var9 = var8.AVATAR_DECORATION;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setPendingAvatarDecoration;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var12 = var11.bind(var12)(var9, var8);
                var11 = var12.with;
                var8 = var4[var10];
                var8 = var6.bind(var5)(var8);
                var8 = var8.CollectiblesItemType;
                var9 = var8.PROFILE_EFFECT;
                var8 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setPendingProfileEffectId;
                    var2 = _closure3_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var9 = var11.bind(var12)(var9, var8);
                var8 = var9.with;
                var4 = var4[var10];
                var4 = var6.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var6 = var4.NAMEPLATE;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setGlobalPendingNameplate;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var4 = var8.bind(var9)(var6, var4);
                _fun0001_ip = 382; continue _fun0001;
 276:
                return var5;
 278:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 4;
                var9 = var4[var6];
                var11 = var8.bind(var5)(var9);
                var10 = var11.setPendingAvatarDecoration;
                var9 = _closure2_slot3;
                var9 = var10.bind(var11)(var9);
                var4 = var4[var6];
                var9 = var8.bind(var5)(var4);
                var8 = var9.setPendingProfileEffectId;
                var4 = _closure2_slot2;
                var4 = var4.id;
                var4 = var8.bind(var9)(var4);
                var4 = _closure2_slot4;
                if(!(var7 != var4)) { _fun0001_ip = 382; continue _fun0001 }
 350:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.setGlobalPendingNameplate;
                var2 = _closure2_slot4;
                var2 = var3.bind(var4)(var2);
 382:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0002_ip = 86; continue _fun0002 }
 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 4;
                        var5 = var4[var1];
                        var3 = undefined;
                        var6 = var2.bind(var3)(var5);
                        var5 = var6.setPendingAvatarDecoration;
                        var5 = var5.bind(var6)(var3);
                        var5 = var4[var1];
                        var6 = var2.bind(var3)(var5);
                        var5 = var6.setPendingProfileEffectId;
                        var5 = var5.bind(var6)(var3);
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.setGlobalPendingNameplate;
                        var1 = var1.bind(var2)(var3);
 86:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['usePreviewCollectibleProduct'] = var2;
    return var1;
})();