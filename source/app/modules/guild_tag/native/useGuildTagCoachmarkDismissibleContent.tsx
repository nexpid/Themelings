// app/modules/guild_tag/native/useGuildTagCoachmarkDismissibleContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/native/useGuildTagCoachmarkDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildTagCoachmarkDismissibleContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 0;
            var2 = var4[var2];
            var6 = undefined;
            var7 = var3.bind(var6)(var2);
            var5 = var7.useCanSeeGuildTagCoachmark;
            var2 = arg1;
            var8 = var5.bind(var7)(var2);
            var2 = 1;
            var2 = var4[var2];
            var5 = var3.bind(var6)(var2);
            var2 = var5.useIsMobileQuestDockVisible;
            var2 = var2.bind(var5)();
            var5 = var2.isVisible;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.useSelectedTimeRecurringDismissibleContent;
            var2 = null;
            if(!var8) { _fun0001_ip = 126; continue _fun0001 }
 89:
            var2 = null;
            if(var5) { _fun0001_ip = 126; continue _fun0001 }
 94:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.GUILD_TAG_AVAILABLE_COACHMARK;
 126:
            var1 = {};
            var5 = 1800000;
            var1['cooldownDurationMs'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useGuildTagCoachmarkDismissibleContent'] = var2;
    return var1;
})();