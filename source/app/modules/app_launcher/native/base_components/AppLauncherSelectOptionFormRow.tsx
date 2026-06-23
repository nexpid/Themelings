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
    var12 = var12.BACKGROUND_SURFACE_HIGH;
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
case 0:
            var3 = arg1;
            var15 = var3.style;
            var13 = var3.option;
            var9 = var3.selected;
            var1 = var3.selectedItemName;
            var _closure2_slot0 = var1;
            var8 = var3.unselectedSubLabel;
            var _closure2_slot1 = var8;
            var16 = var3.autoFocus;
            var2 = {'style': 0, 'option': 0, 'selected': 0, 'selectedItemName': 0, 'unselectedSubLabel': 0, 'autoFocus': 0};
            var6 = null;
            var19 = var2;
            var18 = null;
            var1 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var3;
            var17 = var2;
            var5 = copyDataProperties(var19, var18, var17);
            var1 = _closure1_slot4;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = var5.onPress;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 4;
            var1 = var14[var1];
            var2 = var11.bind(var4)(var1);
            var1 = var2.useAnimationDelayedAutoFocus;
            var1 = var1.bind(var2)(var16, var3);
            var3 = _closure1_slot3;
            var1 = 5;
            var1 = var14[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {'start': true, 'end': true};
            var16 = var10.formRow;
            var10 = new Array(2);
            var10[0] = var16;
            var10[1] = var15;
            var1['style'] = var10;
            var10 = 6;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {};
            var14 = 'text-md/medium';
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = 'text-sm/medium';
case 2:
            var10['variant'] = var14;
            var14 = 'text-default';
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 'interactive-text-default';
case 4:
            var10['color'] = var14;
            var14 = 1;
            var10['lineClamp'] = var14;
            var13 = var13.displayName;
            var10['children'] = var13;
            var10 = var3.bind(var4)(var11, var10);
            var1['label'] = var10;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var6 != var8;
            var6 = null;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = function() {
                var4 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/normal', 'color': 'text-muted', 'lineClamp': 1};
                var5 = _closure2_slot1;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
case 8:
            _fun0001_ip = 10; continue _fun0001;
case 6:
            var6 = function() {
                var4 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/medium', 'color': 'text-default', 'lineClamp': 1};
                var5 = _closure2_slot0;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
case 10:
            var1['subLabel'] = var6;
            var8 = _closure1_slot3;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 7;
            var6 = var11[var9];
            var6 = var10.bind(var4)(var6);
            var7 = var6.Icon;
            var6 = {};
            var13 = _closure1_slot1;
            var12 = 8;
            var12 = var11[var12];
            var12 = var13.bind(var4)(var12);
            var6['source'] = var12;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.IconSizes;
            var9 = var9.SMALL_20;
            var6['size'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var19 = var1;
            var18 = var5;
            var5 = copyDataProperties(var19, var18);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();