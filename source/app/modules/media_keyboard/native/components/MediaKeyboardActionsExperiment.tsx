// app/modules/media_keyboard/native/components/MediaKeyboardActionsExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2025-10-media-keyboard-actions', 'kind': 'user'};
    var9 = {};
    var10 = 'legacy';
    var9['actionsType'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var11 = 'floating';
    var10['actionsType'] = var11;
    var9[1] = var10;
    var10 = {};
    var11 = 'tabs';
    var10['actionsType'] = var11;
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardActionsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMediaKeyboardActionsExperiment() {
        var1 = {};
        var4 = _closure1_slot2;
        var3 = var4.useConfig;
        var2 = {};
        var5 = 'mediaKeyboardActions';
        var2['location'] = var5;
        var2 = var3.bind(var4)(var2);
        var2 = var2.actionsType;
        var1['mediaKeyboardActionsType'] = var2;
        return var1;
    };
    var3['useMediaKeyboardActionsExperiment'] = var4;
    var4 = function useIsMediaKeyboardActionsFloatingOrTabBarEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.ChatInputIaMobileExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var5 = 'mediaKeyboardActions';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.iaUsesFloatingBarForOverflow;
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.actionsType;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'legacy';
            var1 = var2 !== var3;
case 2:
            return var1;
        }
    };
    var3['useIsMediaKeyboardActionsFloatingOrTabBarEnabled'] = var4;
    var2 = function useIsMediaKeyboardActionsFloatingBarEnabled() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.ChatInputIaMobileExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var5 = 'mediaKeyboardActions';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.iaUsesFloatingBarForOverflow;
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.actionsType;
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = 'floating';
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var3['useIsMediaKeyboardActionsFloatingBarEnabled'] = var2;
    return var1;
})();