// app/modules/user_settings/native/defs/SyncThemeSetting.tsx
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
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot7 = var2;
    var2 = 10;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["3340dY"];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var10;
    var9 = var9.APPEARANCE;
    var2['parent'] = var9;
    var9 = function useSyncThemeAcrossClientsValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.shouldSync;
            var1 = 'appearance';
            var2 = var2.bind(var3)(var1);
            var1 = false;
            var1 = var1 !== var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var9;
    var9 = function onSyncThemeAcrossClientsValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot5;
            var11 = var1.theme;
            var1 = _closure1_slot3;
            var6 = var1.gradientPreset;
            var5 = null;
            var7 = var5 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.id;
case 2:
            var6 = var5 != var3;
            var10 = null;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var3;
case 4:
            var3 = _closure1_slot6;
            var3 = var3.settings;
            var6 = var3.appearance;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var6.clientThemeSettings;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = var6.customUserThemeSettings;
case 6:
            var9 = var5 != var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.track;
            var3 = _closure1_slot7;
            var6 = var3.SYNC_ACROSS_CLIENTS_TOGGLED;
            var3 = {};
            var3['is_sync_enabled'] = var4;
            var3['base_theme'] = var11;
            var3['client_theme'] = var10;
            var3['has_custom_theme'] = var9;
            var3 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setShouldSyncAppearanceSettings;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var8 = function useSyncThemeAcrossClientsDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.CRtkeH;
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['useDescription'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SyncThemeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();