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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = {};
            var2 = {};
            var4 = 'transparent';
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 1;
            var7 = var7[var6];
            var6 = undefined;
            var6 = var8.bind(var6)(var7);
            var6 = var6.colors;
            var4 = var6.BACKGROUND_MOD_STRONG;
case 2:
            var2['backgroundColor'] = var4;
            var1['iconBg'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var7 = 1;
            var10 = var8[var7];
            var6 = undefined;
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.WHITE;
            var2['backgroundColor'] = var10;
            var1['iconBgSelected'] = var2;
            var2 = {};
            var2['borderWidth'] = var7;
            var10 = var8[var7];
            var10 = var9.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_VOICE_MUTED;
            var2['borderColor'] = var10;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            var8 = var8.BACKGROUND_VOICE_MUTED;
            var2['backgroundColor'] = var8;
            var1['iconBgVoiceMuted'] = var2;
            var2 = {};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var6)(var8);
            var8 = var8.colors;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var8.WHITE;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var5 = var8.ICON_STRONG;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var5 = var8.INTERACTIVE_TEXT_DEFAULT;
case 9:
            var2['color'] = var5;
            var1['iconFill'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var9 = var5[var7];
            var9 = var8.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.ICON_MUTED;
            var2['color'] = var9;
            var1['iconFillMuted'] = var2;
            var2 = {};
            var9 = var5[var7];
            var9 = var8.bind(var6)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var2['color'] = var9;
            var1['iconFillRed'] = var2;
            var2 = {};
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
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4.WHITE;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var3 = var4.CONTROL_BRAND_FOREGROUND;
case 12:
            var2['backgroundColor'] = var3;
            var1['iconBadgeIndicator'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVoicePanelButtonStyles(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var5 = var7.useDerivedStateFromSharedValue;
        var3 = arg1;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.drawerMode;
            return var1;
        };
        var3 = var5.bind(var7)(var3, var2);
        var5 = _closure1_slot1;
        var2 = 3;
        var2 = var6[var2];
        var5 = var5.bind(var4)(var2);
        var2 = 'VoicePanelStyles';
        var2 = var5.bind(var4)(var2);
        var1 = _closure1_slot3;
        var1 = var1.bind(var4)(var3, var2);
        return var1;
    };
    var3['useVoicePanelButtonStyles'] = var2;
    return var1;
})();