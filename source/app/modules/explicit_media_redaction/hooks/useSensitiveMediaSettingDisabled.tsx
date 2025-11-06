// app/modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx
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
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/hooks/useSensitiveMediaSettingDisabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSensitiveMediaSettingDisabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var1);
            var1 = var2.useIsParentallyControlled;
            var1 = var1.bind(var2)();
            var2 = 1;
            var2 = var6[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useIsVerifiedTeen;
            var2 = var2.bind(var3)();
            var3 = 2;
            var3 = var6[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.useIsGidgetPawtectEnabled;
            var3 = 'explicit_media_redaction_utils';
            var3 = var4.bind(var5)(var3);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useSensitiveMediaSettingDisabled'] = var2;
    return var1;
})();