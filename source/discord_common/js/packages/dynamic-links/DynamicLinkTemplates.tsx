// discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx
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
    var4 = '../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getInviteDynamicLinkTemplate(arg1) {
        var1 = global;
        var2 = var1.location;
        var12 = var2.protocol;
        var2 = var1.window;
        var2 = var2.GLOBAL_ENV;
        var10 = var2.INVITE_HOST;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var13 = '';
        var11 = '//';
        var9 = '/';
        var8 = arg1;
        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var3['getInviteDynamicLinkTemplate'] = var4;
    var4 = function getGuildTemplateDynamicLinkTemplate(arg1) {
        var1 = global;
        var2 = var1.location;
        var12 = var2.protocol;
        var2 = var1.window;
        var2 = var2.GLOBAL_ENV;
        var10 = var2.GUILD_TEMPLATE_HOST;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var13 = '';
        var11 = '//';
        var9 = '/';
        var8 = arg1;
        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var3['getGuildTemplateDynamicLinkTemplate'] = var4;
    var4 = function getDefaultDynamicLinkTemplate() {
        var1 = global;
        var2 = var1.location;
        var10 = var2.protocol;
        var2 = var1.window;
        var2 = var2.GLOBAL_ENV;
        var8 = var2.WEBAPP_ENDPOINT;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var11 = '';
        var9 = '//';
        var7 = '/channels/@me';
        var1 = var11[var4](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getDefaultDynamicLinkTemplate'] = var4;
    var2 = function getChannelDynamicLinkTemplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = global;
            var2 = var1.location;
            var6 = var2.protocol;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var5 = var2.WEBAPP_ENDPOINT;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = '@me';
case 2:
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var13 = '';
            var11 = '//';
            var9 = '/channels/';
            var12 = var6;
            var10 = var5;
            var8 = var7;
            var1 = var13[var4](var12, var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var3['getChannelDynamicLinkTemplate'] = var2;
    return var1;
})();