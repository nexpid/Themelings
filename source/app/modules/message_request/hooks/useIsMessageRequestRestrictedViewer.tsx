// app/modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx
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
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useIsMessageRequestRestrictedViewer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsMessageRequestRestrictedViewer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 0;
            var1 = var6[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var1);
            var1 = var3.useIsExplicitlyVerifiedAdult;
            var1 = var1.bind(var3)();
            var3 = 1;
            var3 = var6[var3];
            var7 = var8.bind(var5)(var3);
            var4 = var7.useIsSettingTeenByDefault;
            var3 = 2;
            var3 = var6[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.SettingsDefaultFeature;
            var3 = var3.MESSAGE_REQUEST_RESTRICTIONS;
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.useConfig;
            var2 = {};
            var6 = arg1;
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['useIsMessageRequestRestrictedViewer'] = var2;
    return var1;
})();