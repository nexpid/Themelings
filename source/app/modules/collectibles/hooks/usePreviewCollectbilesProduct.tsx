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
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileFrameRecord;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/usePreviewCollectbilesProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        var11 = arg1;
        var10 = arg2;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var10;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useShopProductItems;
        var4 = var4.bind(var5)(var11);
        var9 = var4.firstProfileEffect;
        var _closure2_slot2 = var9;
        var8 = var4.firstAvatarDecoration;
        var _closure2_slot3 = var8;
        var7 = var4.firstNameplate;
        var _closure2_slot4 = var7;
        var6 = var4.firstProfileFrame;
        var _closure2_slot5 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(6);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3[5] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = var1.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.CollectiblesItemType;
                var3 = var3.BUNDLE;
                if(!(var5 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot2;
                var3 = _closure2_slot0;
                var5 = var3.items;
                var3 = 1;
                var5 = var6.bind(var4)(var5, var3);
                var3 = 0;
                var7 = var5[var3];
                var3 = _closure1_slot4;
                var3 = var3.bind(var4)(var7);
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure1_slot6;
                var3 = var3.bind(var4)(var7);
                if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot5;
                var3 = var3.bind(var4)(var7);
                if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var3 = _closure1_slot7;
                var3 = var3.bind(var4)(var7);
                if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.setPendingChanges;
                var3 = {};
                var3['profileFrame'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 10; continue _fun0001;
case 8:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.setPendingChanges;
                var3 = {};
                var3['nameplate'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 10; continue _fun0001;
case 6:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.setPendingChanges;
                var3 = {};
                var3['profileEffect'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 10; continue _fun0001;
case 4:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 8;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.setPendingChanges;
                var3 = {};
                var3['avatarDecoration'] = var7;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 10; continue _fun0001;
case 2:
                var3 = {};
                var5 = _closure2_slot3;
                var6 = null;
                if(!(var6 != var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var5 = _closure2_slot3;
                var3['avatarDecoration'] = var5;
case 12:
                var5 = _closure2_slot2;
                if(!(var6 != var5)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var5 = _closure2_slot2;
                var3['profileEffect'] = var5;
case 14:
                var5 = _closure2_slot4;
                if(!(var6 != var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var5 = _closure2_slot4;
                var3['nameplate'] = var5;
case 16:
                var5 = _closure2_slot5;
                if(!(var6 != var5)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                var2 = _closure2_slot5;
                var3['profileFrame'] = var2;
case 18:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 8;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.setPendingChanges;
                var1 = var1.bind(var2)(var3);
case 10:
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 8;
                        var1 = var3[var1];
                        var4 = undefined;
                        var3 = var2.bind(var4)(var1);
                        var2 = var3.setPendingChanges;
                        var1 = {};
                        var1['avatarDecoration'] = var4;
                        var1['profileEffect'] = var4;
                        var1['nameplate'] = var4;
                        var1['profileFrame'] = var4;
                        var1 = var2.bind(var3)(var1);
case 20:
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