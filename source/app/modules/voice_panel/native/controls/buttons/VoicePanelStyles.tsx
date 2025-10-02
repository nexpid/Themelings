// app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Colors;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 2;
            var9 = var5[var7];
            var6 = undefined;
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BG_MOD_STRONG;
            var2['backgroundColor'] = var9;
            var1['iconBg'] = var2;
            var2 = {};
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.WHITE;
            var2['backgroundColor'] = var5;
            var1['iconBgSelected'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var8 = var5.colors;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var8.WHITE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = var8.INTERACTIVE_NORMAL;
case 4:
            var2['color'] = var5;
            var1['iconFill'] = var2;
            var2 = {};
            var5 = _closure1_slot3;
            var5 = var5.RED_400;
            var2['color'] = var5;
            var1['iconFillRed'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var8.bind(var6)(var5);
            var5 = var5.colors;
            var5 = var5.BLACK;
            var2['color'] = var5;
            var1['iconFillSelected'] = var2;
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.colors;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var4.WHITE;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var3 = var4.CONTROL_BRAND_FOREGROUND;
case 7:
            var2['backgroundColor'] = var3;
            var1['iconBadgeIndicator'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoicePanelButtonStyles(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var5 = var6.useDerivedStateFromSharedValue;
        var4 = arg1;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.drawerMode;
            return var1;
        };
        var2 = var5.bind(var6)(var4, var2);
        var1 = _closure1_slot4;
        var1 = var1.bind(var3)(var2);
        return var1;
    };
    var3['useVoicePanelButtonStyles'] = var2;
    return var1;
})();