// app/utils/ChannelChatSidebarUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'utils/ChannelChatSidebarUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = 450;
    var3['MIN_CHAT_SIDEBAR_WIDTH'] = var2;
    var2 = 360;
    var3['DEFAULT_PARTICIPANTS_SIDEBAR_WIDTH'] = var2;
    var2 = function(arg1) {
        var1 = arg1;
        var2 = var1.maxWidth;
        var1 = var1.minWidth;
        var1 = var2 <= var1;
        return var1;
    };
    var3['shouldChannelChatFloat'] = var2;
    return var1;
})();