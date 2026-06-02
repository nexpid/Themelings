// app/modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MobileVisualRefreshExperiment;
    var2 = var2.definition;
    var2 = var2.name;
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.s3amTp;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var10;
    var10 = function useDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["6e1ir2"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useDescription'] = var10;
    var9 = var9.APPEARANCE;
    var2['parent'] = var9;
    var9 = function useIsInDTesterExperimentVariant() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var4 = _closure1_slot3;
                var3 = var4.getServerAssignment;
                var2 = _closure1_slot5;
                var1 = 'user';
                var2 = var3.bind(var4)(var1, var5, var2);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var2.variantId;
                var2 = 3;
                var1 = var2 === var3;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePredicate'] = var9;
    var9 = function useIsRefreshEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MobileVisualRefreshExperiment;
        var2 = var3.useConfig;
        var1 = {};
        var4 = 'SettingsAppearance';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var2['useValue'] = var9;
    var8 = function onToggleRefresh(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = arg1;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = {'type': 'APEX_EXPERIMENT_OVERRIDE_CREATE', 'experimentName': null, 'variantId': 0};
            var6 = _closure1_slot5;
            var2['experimentName'] = var6;
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = {};
            var6 = 'APEX_EXPERIMENT_OVERRIDE_DELETE';
            var2['type'] = var6;
            var5 = _closure1_slot5;
            var2['experimentName'] = var5;
            var2 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var2['onValueChange'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/MobileVisualRefreshSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();