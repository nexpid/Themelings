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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isAvatarDecorationRecord;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isNameplateRecord;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileEffectRecord;
    var _closure1_slot6 = var4;
    var4 = 8;
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
        var1 = 5;
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
                var2 = _closure2_slot0;
                var5 = var2.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.CollectiblesItemType;
                var3 = var3.BUNDLE;
                if(!(var5 === var3)) { _fun0001_ip = 74; continue _fun0001 }
 53:
                var3 = _closure2_slot2;
                var6 = null;
                if(!(var6 != var3)) { _fun0001_ip = 74; continue _fun0001 }
 63:
                var3 = _closure2_slot3;
                if(!(var6 == var3)) { _fun0001_ip = 247; continue _fun0001 }
 74:
                var7 = _closure1_slot2;
                var3 = _closure2_slot0;
                var5 = var3.items;
                var3 = 1;
                var5 = var7.bind(var4)(var5, var3);
                var3 = 0;
                var7 = var5[var3];
                var3 = _closure1_slot4;
                var3 = var3.bind(var4)(var7);
                if(var3) { _fun0001_ip = 214; continue _fun0001 }
 115:
                var3 = _closure1_slot6;
                var3 = var3.bind(var4)(var7);
                if(var3) { _fun0001_ip = 178; continue _fun0001 }
 127:
                var3 = _closure1_slot5;
                var3 = var3.bind(var4)(var7);
                if(!var3) { _fun0001_ip = 346; continue _fun0001 }
 142:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.setGlobalPendingNameplate;
                var3 = var3.bind(var5)(var7);
                _fun0001_ip = 346; continue _fun0001;
 178:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.setPendingProfileEffect;
                var3 = var3.bind(var5)(var7);
                _fun0001_ip = 346; continue _fun0001;
 214:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.setPendingAvatarDecoration;
                var3 = var3.bind(var5)(var7);
                _fun0001_ip = 346; continue _fun0001;
 247:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 7;
                var8 = var3[var5];
                var10 = var7.bind(var4)(var8);
                var9 = var10.setPendingAvatarDecoration;
                var8 = _closure2_slot3;
                var8 = var9.bind(var10)(var8);
                var3 = var3[var5];
                var8 = var7.bind(var4)(var3);
                var7 = var8.setPendingProfileEffect;
                var3 = _closure2_slot2;
                var3 = var7.bind(var8)(var3);
                var3 = _closure2_slot4;
                if(!(var6 != var3)) { _fun0001_ip = 346; continue _fun0001 }
 314:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.setGlobalPendingNameplate;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
 346:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0002_ip = 86; continue _fun0002 }
 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 7;
                        var5 = var4[var1];
                        var3 = undefined;
                        var6 = var2.bind(var3)(var5);
                        var5 = var6.setPendingAvatarDecoration;
                        var5 = var5.bind(var6)(var3);
                        var5 = var4[var1];
                        var6 = var2.bind(var3)(var5);
                        var5 = var6.setPendingProfileEffect;
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