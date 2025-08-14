// app/modules/chat_wallpapers/native/ChatWallpaperSystemMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getMessageContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg2;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 1;
            var3 = var11[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var11[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.+fBFYG;
            var1 = {};
            var5 = arg1;
            var1['username'] = var5;
            var5 = {};
            var9 = 'bindOpenUrl';
            var5['action'] = var9;
            var10 = _closure1_slot1;
            var9 = 2;
            var9 = var11[var9];
            var10 = var10.bind(var6)(var9);
            var9 = var10.getArticleURL;
            var8 = _closure1_slot3;
            var8 = var8.DM_WALLPAPERS;
            var8 = var9.bind(var10)(var8);
            var5['url'] = var8;
            var8 = null;
            var8 = var8 == var7;
            if(var8) { _fun0001_ip = 138; continue _fun0001 }
 132:
            var6 = var7.linkColor;
 138:
            var5['linkColor'] = var6;
            var6 = true;
            var5['medium'] = var6;
            var1['learnMoreLink'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = var4.HelpdeskArticles;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_wallpapers/native/ChatWallpaperSystemMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createChatWallpaperNotAvailableOnMobileSystemMessage(arg1) {
        var4 = arg1;
        var10 = var4.message;
        var7 = var4.theme;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 3;
        var1 = var6[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var8 = var1.bind(var3)(var7);
        var1 = {};
        var7 = _closure1_slot4;
        var9 = _closure1_slot0;
        var2 = 4;
        var2 = var6[var2];
        var9 = var9.bind(var3)(var2);
        var2 = var9.getMessageAuthor;
        var2 = var2.bind(var9)(var10);
        var2 = var2.nick;
        var2 = var7.bind(var3)(var2, var8);
        var1['content'] = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var5.bind(var3)(var2);
        var11 = var2.bind(var3)(var4);
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var3['createChatWallpaperNotAvailableOnMobileSystemMessage'] = var2;
    return var1;
})();