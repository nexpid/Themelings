// app/modules/chat_wallpapers/models/ChatWallpaperTypes.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_wallpapers/models/ChatWallpaperTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fromServerWallpaper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 41; continue _fun0001 }
 14:
            var2 = {};
            var4 = var3.wallpaper_id;
            var2['wallpaperId'] = var4;
            var3 = var3.setter_id;
            var2['setterId'] = var3;
            var1 = var2;
 41:
            return var1;
        }
    };
    var3['fromServerWallpaper'] = var4;
    var2 = function fromServerChatWallpaperMetadata(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.label;
        var1['label'] = var3;
        var3 = var2.default;
        var1['default'] = var3;
        var3 = var2.variants;
        var1['variants'] = var3;
        var3 = var2.is_blurred;
        var1['isBlurred'] = var3;
        var2 = var2.design_group_id;
        var1['designGroupId'] = var2;
        return var1;
    };
    var3['fromServerChatWallpaperMetadata'] = var2;
    return var1;
})();