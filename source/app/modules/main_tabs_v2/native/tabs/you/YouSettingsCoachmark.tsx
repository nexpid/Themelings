// app/modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouSettingsCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function YouSettingsCoachmark(arg1) {
        var4 = arg1;
        var5 = var4.buttonRef;
        var1 = null;
        var3 = Object.create(var1);
        var2 = 0;
        var3['buttonRef'] = var2;
        var9 = {};
        var8 = var4;
        var7 = var3;
        var4 = copyDataProperties(var9, var8, var7);
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var2 = var3.useCoachmark;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useYouSettingsCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.disabled;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 0;
            var2 = var6[var2];
            var4 = undefined;
            var7 = var3.bind(var4)(var2);
            var3 = var7.useReferralProgramCoachmark;
            var2 = {};
            var2['disabled'] = var5;
            var2 = var3.bind(var7)(var2);
            var3 = _closure1_slot1;
            var1 = 1;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['disabled'] = var5;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3;
case 2:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useYouSettingsCoachmark'] = var2;
    return var1;
})();