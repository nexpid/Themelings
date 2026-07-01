// app/modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Pressable;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': null, 'borderWidth': 2};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_MUTED;
    var9['borderColor'] = var12;
    var4['cell'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_500;
    var9['borderColor'] = var10;
    var4['cellSelected'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsServerTagPickerCell.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsServerTagPickerCell(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.size;
            var7 = var1.selected;
            var10 = var1.accessibilityLabel;
            var2 = var1.accessibilityRole;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'radio';
case 2:
            var6 = var1.onPress;
            var5 = var1.children;
            var3 = _closure1_slot4;
            var9 = var3.bind(var4)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 5;
            var3 = var12[var3];
            var12 = var11.bind(var4)(var3);
            var11 = var12.useRadioA11yNative;
            var3 = {};
            var3['selected'] = var7;
            var11 = var11.bind(var12)(var3);
            var3 = 'button';
            if(!(var3 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var2['accessibilityRole'] = var3;
            var3 = {};
            var3['selected'] = var7;
            var2['accessibilityState'] = var3;
            var11 = var2;
case 4:
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var12 = var11.accessibilityRole;
            var1['accessibilityRole'] = var12;
            var11 = var11.accessibilityState;
            var1['accessibilityState'] = var11;
            var1['accessibilityLabel'] = var10;
            var1['onPress'] = var6;
            var10 = var9.cell;
            var6 = new Array(3);
            var6[0] = var10;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var9.cellSelected;
case 6:
            var6[1] = var7;
            var7 = {};
            var7['width'] = var8;
            var7['height'] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();