// app/modules/guild_sidebar/SidebarVisibilityMethodStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/SidebarVisibilityMethodStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SidebarVisibilityMethodStore'] = var4;
    var4 = function setGetVisibleGuildIds(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['getVisibleGuildIds'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['setGetVisibleGuildIds'] = var4;
    var4 = function getVisibleGuildIdsMethod() {
        var2 = _closure1_slot0;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.getVisibleGuildIds;
        return var1;
    };
    var3['getVisibleGuildIdsMethod'] = var4;
    var4 = function setGetVisibleChannelIds(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['getVisibleChannelIds'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['setGetVisibleChannelIds'] = var4;
    var2 = function getVisibleChannelIdsMethod() {
        var2 = _closure1_slot0;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.getVisibleChannelIds;
        return var1;
    };
    var3['getVisibleChannelIdsMethod'] = var2;
    return var1;
})();