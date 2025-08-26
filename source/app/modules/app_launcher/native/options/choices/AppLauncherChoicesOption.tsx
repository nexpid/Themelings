// app/modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var4 = 4;
    var12 = var6[var4];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_SURFACE_RAISED;
    var10['backgroundColor'] = var12;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.radii;
    var4 = var4.lg;
    var10['borderRadius'] = var4;
    var4 = 'center';
    var10['alignItems'] = var4;
    var4 = 12;
    var10['padding'] = var4;
    var7['container'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherChoicesOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var16 = var2.style;
            var11 = var2.option;
            var _closure2_slot0 = var11;
            var3 = var2.initialValue;
            var _closure2_slot1 = var3;
            var7 = var2.onSelect;
            var _closure2_slot2 = var7;
            var9 = var2.onOpenChoicesSheet;
            var _closure2_slot3 = var9;
            var10 = var2.onDismissChoicesSheet;
            var _closure2_slot4 = var10;
            var3 = var2.autoFocus;
            var13 = var2.hasError;
            var2 = _closure1_slot6;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 72; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'text';
                    if(!(var3 === var4)) { _fun0002_ip = 72; continue _fun0002 }
 30:
                    var3 = _closure2_slot0;
                    var6 = var3.choices;
                    var3 = var1 == var6;
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 68; continue _fun0002 }
 49:
                    var5 = var6.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.displayName;
                        var1 = _closure2_slot1;
                        var1 = var1.text;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var3);
 68:
                    if(!(var1 == var4)) { _fun0002_ip = 76; continue _fun0002 }
 72:
                    var1 = undefined;
                    return var1;
 76:
                    var1 = {};
                    var1['choice'] = var4;
                    var2 = _closure2_slot0;
                    var3 = var2.choices;
                    var2 = var3.indexOf;
                    var2 = var2.bind(var3)(var4);
                    var1['index'] = var2;
                    return var1;
                }
            };
            var12 = var5.bind(var8)(var2);
            var5 = _closure1_slot3;
            var2 = 2;
            var2 = var5.bind(var4)(var12, var2);
            var5 = 0;
            var12 = var2[var5];
            var _closure2_slot5 = var12;
            var14 = 1;
            var2 = var2[var14];
            var _closure2_slot6 = var2;
            var5 = var8.useCallback;
            var2 = new Array(5);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var7;
            var2[3] = var11;
            var7 = null;
            var10 = var7 == var12;
            var9 = undefined;
            if(var10) { _fun0001_ip = 181; continue _fun0001 }
 176:
            var9 = var12.index;
 181:
            var2[4] = var9;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 5;
                    var5 = var3[var5];
                    var6 = var7.bind(var1)(var5);
                    var5 = var6.dismissGlobalKeyboard;
                    var5 = var5.bind(var6)();
                    var5 = _closure1_slot1;
                    var4 = 6;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = 8;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 7;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['option'] = var7;
                    var8 = _closure2_slot5;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 133; continue _fun0003 }
 124:
                    var8 = _closure2_slot5;
                    var7 = var8.index;
 133:
                    var3['initChoiceIndex'] = var7;
                    var7 = function onChoiceSelect(arg1, arg2) {
                        var3 = arg1;
                        var5 = _closure2_slot6;
                        var4 = {};
                        var4['choice'] = var3;
                        var1 = arg2;
                        var4['index'] = var1;
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var3['onChoiceSelect'] = var7;
                    var2 = _closure2_slot4;
                    var3['onDismiss'] = var2;
                    var2 = 'AppLauncherChoicesActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var1, var2);
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var2 = var10.bind(var4)(var1);
            var1 = var2.useAnimationDelayedAutoFocus;
            var1 = var1.bind(var2)(var3, var5);
            var3 = _closure1_slot5;
            var9 = 10;
            var1 = var8[var9];
            var1 = var10.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {'start': true, 'end': true};
            var17 = var15.container;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var1['style'] = var15;
            var1['hasError'] = var13;
            var13 = 11;
            var8 = var8[var13];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {};
            var16 = var7 == var12;
            var15 = 'text-sm/medium';
            if(!var16) { _fun0001_ip = 322; continue _fun0001 }
 318:
            var15 = 'text-md/medium';
 322:
            var8['variant'] = var15;
            var16 = var7 == var12;
            var15 = 'interactive-normal';
            if(!var16) { _fun0001_ip = 345; continue _fun0001 }
 339:
            var15 = 'text-normal';
 345:
            var8['color'] = var15;
            var8['lineClamp'] = var14;
            var11 = var11.displayName;
            var8['children'] = var11;
            var8 = var3.bind(var4)(var10, var8);
            var1['label'] = var8;
            var8 = var7 != var12;
            var7 = null;
            if(!var8) { _fun0001_ip = 443; continue _fun0001 }
 382:
            var11 = _closure1_slot5;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-md/medium', 'color': 'text-normal', 'lineClamp': 1};
            var12 = var12.choice;
            var12 = var12.displayName;
            var8['children'] = var12;
            var7 = var11.bind(var4)(var10, var8);
 443:
            var1['subLabel'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var7.bind(var4)(var6);
            var7 = var6.FormArrow;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var1['trailing'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();