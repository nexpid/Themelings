// app/modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useShopProductItems;
        var4 = var4.bind(var5)(var9);
        var7 = var4.firstProfileEffect;
        var _closure2_slot2 = var7;
        var6 = var4.firstAvatarDecoration;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var6 = var3.type;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 3;
                var4 = var4[var9];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.BUNDLE;
                if(!(var6 === var4)) { _fun0001_ip = 76; continue _fun0001 }
 55:
                var4 = _closure2_slot2;
                var6 = null;
                if(!(var6 != var4)) { _fun0001_ip = 76; continue _fun0001 }
 65:
                var4 = _closure2_slot3;
                if(!(var6 == var4)) { _fun0001_ip = 278; continue _fun0001 }
 76:
                var7 = _closure1_slot2;
                var4 = _closure2_slot0;
                var6 = var4.items;
                var4 = 1;
                var6 = var7.bind(var5)(var6, var4);
                var4 = 0;
                var7 = var6[var4];
                var _closure3_slot0 = var7;
                var4 = null;
                if(!(var4 != var7)) { _fun0001_ip = 276; continue _fun0001 }
 118:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var8 = 5;
                var8 = var4[var8];
                var10 = var6.bind(var5)(var8);
                var8 = var10.match;
                var7 = var7.type;
                var11 = var8.bind(var10)(var7);
                var10 = var11.with;
                var7 = var4[var9];
                var7 = var6.bind(var5)(var7);
                var7 = var7.CollectiblesItemType;
                var8 = var7.AVATAR_DECORATION;
                var7 = function() {
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
                var11 = var10.bind(var11)(var8, var7);
                var10 = var11.with;
                var7 = var4[var9];
                var7 = var6.bind(var5)(var7);
                var7 = var7.CollectiblesItemType;
                var8 = var7.PROFILE_EFFECT;
                var7 = function() {
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
                var8 = var10.bind(var11)(var8, var7);
                var7 = var8.with;
                var4 = var4[var9];
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
                var4 = var7.bind(var8)(var6, var4);
                _fun0001_ip = 342; continue _fun0001;
 276:
                return var5;
 278:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 4;
                var7 = var6[var3];
                var9 = var4.bind(var5)(var7);
                var8 = var9.setPendingAvatarDecoration;
                var7 = _closure2_slot3;
                var7 = var8.bind(var9)(var7);
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.setPendingProfileEffectId;
                var2 = _closure2_slot2;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
 342:
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