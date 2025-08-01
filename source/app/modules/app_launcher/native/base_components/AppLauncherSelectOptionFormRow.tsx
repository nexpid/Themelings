// app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center', 'flex': 1};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['formRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherSelectOptionFormRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var14 = var3.style;
            var12 = var3.option;
            var8 = var3.selected;
            var1 = var3.selectedItemName;
            var _closure2_slot0 = var1;
            var15 = var3.autoFocus;
            var2 = {'style': 0, 'option': 0, 'selected': 0, 'selectedItemName': 0, 'autoFocus': 0};
            var18 = var2;
            var17 = null;
            var1 = silentSetPrototypeOf(var18, var17);
            var18 = {};
            var17 = var3;
            var16 = var2;
            var5 = copyDataProperties(var18, var17, var16);
            var1 = _closure1_slot4;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = var5.onPress;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 4;
            var1 = var13[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useAnimationDelayedAutoFocus;
            var1 = var1.bind(var2)(var15, var3);
            var3 = _closure1_slot3;
            var1 = 5;
            var1 = var13[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {'start': true, 'end': true};
            var15 = var9.formRow;
            var9 = new Array(2);
            var9[0] = var15;
            var9[1] = var14;
            var1['style'] = var9;
            var9 = 6;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {};
            var13 = 'text-md/medium';
            if(!var8) { _fun0001_ip = 207; continue _fun0001 }
 203:
            var13 = 'text-sm/medium';
 207:
            var9['variant'] = var13;
            var13 = 'text-normal';
            if(!var8) { _fun0001_ip = 226; continue _fun0001 }
 220:
            var13 = 'interactive-normal';
 226:
            var9['color'] = var13;
            var13 = 1;
            var9['lineClamp'] = var13;
            var12 = var12.displayName;
            var9['children'] = var12;
            var9 = var3.bind(var4)(var11, var9);
            var1['label'] = var9;
            var6 = null;
            if(!var8) { _fun0001_ip = 269; continue _fun0001 }
 262:
            var6 = function() {
                var4 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/medium', 'color': 'text-normal', 'lineClamp': 1};
                var5 = _closure2_slot0;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
 269:
            var1['subLabel'] = var6;
            var8 = _closure1_slot3;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 7;
            var6 = var11[var9];
            var7 = var13.bind(var4)(var6);
            var6 = {};
            var12 = 8;
            var12 = var11[var12];
            var12 = var13.bind(var4)(var12);
            var6['source'] = var12;
            var10 = _closure1_slot0;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.IconSizes;
            var9 = var9.SMALL_20;
            var6['size'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var18 = var1;
            var17 = var5;
            var5 = copyDataProperties(var18, var17);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();