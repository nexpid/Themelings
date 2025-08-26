// app/modules/collectibles/native/AvatarDecorationSampleV2.tsx
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
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var5 = arg1;
        var1 = {};
        var2 = {};
        var3 = 'absolute';
        var2['position'] = var3;
        var4 = 0.8333333333333334;
        var6 = var5 * var4;
        var2['height'] = var6;
        var6 = var5 * var4;
        var2['width'] = var6;
        var5 = var5 * var4;
        var4 = 2;
        var4 = var5 / var4;
        var2['borderRadius'] = var4;
        var4 = 0.8;
        var2['opacity'] = var4;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var4 = 4;
        var5 = var5[var4];
        var4 = undefined;
        var4 = var6.bind(var4)(var5);
        var4 = var4.colors;
        var4 = var4.BG_BASE_SECONDARY;
        var2['backgroundColor'] = var4;
        var1['avatar'] = var2;
        var2 = {};
        var4 = 1;
        var2['opacity'] = var4;
        var1['threeTierBundle'] = var2;
        var2 = {};
        var2['position'] = var3;
        var1['avatarDecoration'] = var2;
        var2 = {};
        var3 = 0.4;
        var2['opacity'] = var3;
        var1['purchased'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/AvatarDecorationSampleV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.item;
            var13 = var1.size;
            var8 = var1.avatarSource;
            var12 = var1.animate;
            var11 = var1.isPurchased;
            var16 = var1.threeTierBundle;
            var1 = _closure1_slot8;
            var4 = undefined;
            var15 = var1.bind(var4)(var13);
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var14.type;
            var5 = _closure1_slot0;
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.AVATAR_DECORATION;
            var2 = var2 === var1;
            var1 = 'Item must be Avatar Decoration';
            var1 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var17 = var15.avatar;
            var10 = new Array(3);
            var10[0] = var17;
            var17 = var11;
            if(!var11) { _fun0001_ip = 166; continue _fun0001 }
 160:
            var17 = var15.purchased;
 166:
            var10[1] = var17;
            if(!var16) { _fun0001_ip = 179; continue _fun0001 }
 173:
            var16 = var15.threeTierBundle;
 179:
            var10[2] = var16;
            var5['style'] = var10;
            var10 = 'contain';
            var5['resizeMode'] = var10;
            var10 = null;
            if(!(var10 == var8)) { _fun0001_ip = 222; continue _fun0001 }
 202:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 7;
            var10 = var17[var10];
            var8 = var16.bind(var4)(var10);
 222:
            var5['source'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot4;
            var6 = {};
            var16 = var15.avatarDecoration;
            var10 = new Array(2);
            var10[0] = var16;
            if(!var11) { _fun0001_ip = 273; continue _fun0001 }
 267:
            var11 = var15.purchased;
 273:
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot5;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 8;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['avatarDecoration'] = var14;
            var9['size'] = var13;
            var9['animate'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 0.8333333333333334;
    var3['avatarPlaceholderSizeRatio'] = var2;
    return var1;
})();