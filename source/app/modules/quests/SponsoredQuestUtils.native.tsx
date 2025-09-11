// app/modules/quests/SponsoredQuestUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/SponsoredQuestUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function openSponsoredQuestModal() {
        var1 = undefined;
        return var1;
    };
    var3['openSponsoredQuestModal'] = var4;
    var2 = function createGameSheetHook(arg1) {
        var1 = arg1;
        var2 = var1.applications;
        var2 = var1.popoutTargetElementRef;
        var2 = var1.onGameSheetOpened;
        var1 = var1.onGameSheetClosed;
        var1 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        return var1;
    };
    var3['createGameSheetHook'] = var2;
    return var1;
})();