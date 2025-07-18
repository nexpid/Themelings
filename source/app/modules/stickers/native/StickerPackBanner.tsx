// app/modules/stickers/native/StickerPackBanner.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot2 = var7;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPackBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.containerStyle;
            var8 = var1.style;
            var4 = var1.stickerPack;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var5 = undefined;
            var3 = var2.bind(var5)(var1);
            var2 = var3.getStickerPackBannerAssetUrl;
            var1 = 1024;
            var10 = var2.bind(var3)(var4, var1);
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0001_ip = 132; continue _fun0001 }
 72:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var2['style'] = var7;
            var7 = _closure1_slot2;
            var6 = {};
            var9 = {};
            var9['uri'] = var10;
            var6['source'] = var9;
            var6['style'] = var8;
            var8 = 'contain';
            var6['resizeMode'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 132:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();