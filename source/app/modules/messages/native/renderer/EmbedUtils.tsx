// app/modules/messages/native/renderer/EmbedUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.Image;
    var _closure1_slot0 = var5;
    var8 = var4.Object;
    var5 = var8.freeze;
    var10 = var4.Set;
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var13 = ['YouTube', 'TikTok'];
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/EmbedUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getAssetUriForEmbed(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.resolveAssetSource;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = var1.uri;
        return var1;
    };
    var3['getAssetUriForEmbed'] = var5;
    var3['SUPPORTED_VIDEO_PARTNERS'] = var4;
    var2 = function shouldPlayVideoInline(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var2 = var3.has;
            var1 = null;
            var5 = var1 != var4;
            var1 = '';
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4;
case 2:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['shouldPlayVideoInline'] = var2;
    return var1;
})();