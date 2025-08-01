// app/modules/messages/computeGlobalSpoilerDisplay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function computeGlobalSpoilerDisplay(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot4;
            var2 = var2.ALWAYS;
            if(!(var2 !== var3)) { _fun0001_ip = 53; continue _fun0001 }
 20:
            var2 = _closure1_slot4;
            var2 = var2.IF_MODERATOR;
            if(!(var2 !== var3)) { _fun0001_ip = 48; continue _fun0001 }
 34:
            var1 = _closure1_slot4;
            var1 = var1.ON_CLICK;
            var1 = false;
            return var1;
 48:
            var1 = arg2;
            return var1;
 53:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Permissions;
    var _closure1_slot3 = var8;
    var5 = var5.SpoilerRenderSetting;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/computeGlobalSpoilerDisplay.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useShouldDisplaySpoilerObscurity(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 2;
        var3 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var9 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var9;
        var2 = function() {
            var4 = _closure1_slot2;
            var3 = var4.can;
            var1 = _closure1_slot3;
            var2 = var1.MANAGE_MESSAGES;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var7.bind(var8)(var3, var2);
        var2 = _closure1_slot5;
        var1 = 3;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var5 = var1.RenderSpoilers;
        var1 = var5.useSetting;
        var1 = var1.bind(var5)();
        var1 = var2.bind(var4)(var1, var3);
        var1 = !var1;
        return var1;
    };
    var3['useShouldDisplaySpoilerObscurity'] = var2;
    return var1;
})();