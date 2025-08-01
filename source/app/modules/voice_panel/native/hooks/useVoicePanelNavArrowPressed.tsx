// app/modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoicePanelNavArrowPressed() {
        var4 = _closure1_slot2;
        var3 = var4.useContext;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 2;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var3.bind(var4)(var2);
        var8 = var2.focused;
        var _closure2_slot0 = var8;
        var5 = var2.setFocused;
        var _closure2_slot1 = var5;
        var6 = var2.dismissPanel;
        var _closure2_slot2 = var6;
        var7 = var2.controlsSpecs;
        var _closure2_slot3 = var7;
        var3 = var4.useCallback;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = var3.get;
                var5 = var1.bind(var3)();
                var4 = null;
                var6 = var4 == var5;
                var3 = undefined;
                var1 = undefined;
                if(var6) { _fun0001_ip = 34; continue _fun0001 }
 29:
                var1 = var5.id;
 34:
                if(!(var4 != var1)) { _fun0001_ip = 73; continue _fun0001 }
 38:
                var5 = _closure2_slot3;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var5 = var1.mode;
                var1 = _closure1_slot3;
                var1 = var1.DRAWER;
                if(!(var5 === var1)) { _fun0001_ip = 83; continue _fun0001 }
 73:
                var1 = _closure2_slot2;
                var1 = var1.bind(var3)();
                _fun0001_ip = 94; continue _fun0001;
 83:
                var2 = _closure2_slot1;
                var2 = var2.bind(var3)(var4);
                var1 = true;
 94:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();