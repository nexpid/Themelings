// app/modules/user_settings/native/defs/SyncThemeSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.AnalyticEvents;
    var _closure1_slot7 = var8;
    var2 = var2.ThemeTypes;
    var _closure1_slot8 = var2;
    var2 = {};
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
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
        var1 = var1.3340dX;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.APPEARANCE;
    var2['parent'] = var7;
    var7 = function useSyncThemeAcrossClientsValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
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
    var2['useValue'] = var7;
    var7 = function onSyncThemeAcrossClientsValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot5;
            var11 = var1.theme;
            var1 = _closure1_slot3;
            var6 = var1.gradientPreset;
            var5 = null;
            var7 = var5 == var6;
            var1 = undefined;
            var3 = undefined;
            if(var7) { _fun0001_ip = 44; continue _fun0001 }
 39:
            var3 = var6.id;
 44:
            var6 = var5 != var3;
            var10 = null;
            if(!var6) { _fun0001_ip = 56; continue _fun0001 }
 53:
            var10 = var3;
 56:
            var3 = _closure1_slot6;
            var3 = var3.settings;
            var6 = var3.appearance;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 102; continue _fun0001 }
 81:
            var6 = var6.clientThemeSettings;
            var7 = var5 == var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 102; continue _fun0001 }
 96:
            var3 = var6.customUserThemeSettings;
 102:
            var9 = var5 != var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
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
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setShouldSyncAppearanceSettings;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['onValueChange'] = var7;
    var7 = function useSyncThemeAcrossClientsDescription() {
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
        var1 = var1.CRtkeH;
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['useDescription'] = var7;
    var4 = function useIsSyncThemeAcrossClientsDisabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 8;
            var4 = var5[var6];
            var8 = undefined;
            var10 = var3.bind(var8)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var1 = _closure1_slot5;
                var1 = var1.theme;
                return var1;
            };
            var4 = var9.bind(var10)(var7, var4);
            var6 = var5[var6];
            var9 = var3.bind(var8)(var6);
            var7 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                var1 = _closure1_slot3;
                var1 = var1.mobilePendingThemeIndex;
                return var1;
            };
            var7 = var7.bind(var9)(var6, var1);
            var1 = 11;
            var1 = var5[var1];
            var3 = var3.bind(var8)(var1);
            var1 = var3.useAllMobileThemes;
            var6 = var1.bind(var3)();
            var1 = null;
            var5 = var1 != var7;
            var3 = null;
            if(!var5) { _fun0002_ip = 160; continue _fun0002 }
 129:
            var9 = var1 == var6;
            var5 = undefined;
            if(var9) { _fun0002_ip = 157; continue _fun0002 }
 138:
            var6 = var6[var7];
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0002_ip = 157; continue _fun0002 }
 151:
            var5 = var6.theme;
 157:
            var3 = var5;
 160:
            if(!(var1 == var3)) { _fun0002_ip = 180; continue _fun0002 }
 164:
            var1 = _closure1_slot8;
            var1 = var1.MIDNIGHT;
            var1 = var4 === var1;
            _fun0002_ip = 194; continue _fun0002;
 180:
            var2 = _closure1_slot8;
            var2 = var2.MIDNIGHT;
            var1 = var3 === var2;
 194:
            return var1;
        }
    };
    var2['useIsDisabled'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SyncThemeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();