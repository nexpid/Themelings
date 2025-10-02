// app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
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
    var12 = var4.Fonts;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'backgroundColor': null, 'borderRadius': null, 'padding': 12, 'borderWidth': 2, 'borderColor': 'transparent', 'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var13 = 12;
    var4['container'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.STATUS_DANGER;
    var9['borderColor'] = var14;
    var9['padding'] = var13;
    var4['hasError'] = var9;
    var9 = {'overflow': 'hidden', 'maxHeight': 100, 'flex': 1, 'padding': 0, 'paddingTop': 0};
    var4['stringOptionInput'] = var9;
    var9 = {'fontSize': 16, 'alignSelf': 'center'};
    var12 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_NORMAL;
    var9['color'] = var10;
    var4['inputText'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginBottom'] = var10;
    var4['labelText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherAutocompleteOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.style;
            var3 = var2.option;
            var _closure2_slot0 = var3;
            var3 = var2.onSelect;
            var _closure2_slot1 = var3;
            var3 = var2.onOpenAutocompleteSheet;
            var _closure2_slot2 = var3;
            var3 = var2.onDismissAutocompleteSheet;
            var _closure2_slot3 = var3;
            var3 = var2.channel;
            var _closure2_slot4 = var3;
            var3 = var2.activeCommand;
            var _closure2_slot5 = var3;
            var3 = var2.optionValues;
            var _closure2_slot6 = var3;
            var3 = var2.initialValue;
            var _closure2_slot7 = var3;
            var12 = var2.autoFocus;
            var10 = var2.hasError;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot7;
                    var3 = var1.type;
                    var1 = 'text';
                    if(!(var1 === var3)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = _closure2_slot7;
                    var3 = var1.text;
                    var1 = '';
                    if(!(var1 === var3)) { _fun0002_ip = 5; continue _fun0002 }
case 2:
                    var1 = undefined;
                    return var1;
case 5:
                    var1 = {};
                    var2 = _closure2_slot7;
                    var3 = var2.text;
                    var1['displayName'] = var3;
                    var3 = var2.text;
                    var1['name'] = var3;
                    var2 = var2.text;
                    var1['value'] = var2;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot3;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var9 = var3[var2];
            var _closure2_slot8 = var9;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot9 = var2;
            var2 = _closure1_slot6;
            var8 = var2.bind(var4)();
            var6 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 6:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var5 = var3[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var5);
                    var5 = var6.dismissGlobalKeyboard;
                    var5 = var5.bind(var6)();
                    var5 = _closure1_slot1;
                    var4 = 7;
                    var4 = var3[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = 9;
                    var4 = var3[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = 8;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var4 = var7.bind(var1)(var4, var3);
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3['option'] = var7;
                    var7 = _closure2_slot8;
                    var3['initChoice'] = var7;
                    var7 = function onChoiceSelect(arg1) {
                        var3 = arg1;
                        var4 = _closure2_slot9;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var3['onChoiceSelect'] = var7;
                    var7 = _closure2_slot4;
                    var3['channel'] = var7;
                    var7 = _closure2_slot5;
                    var3['activeCommand'] = var7;
                    var7 = _closure2_slot3;
                    var3['onDismissAutocompleteSheet'] = var7;
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    var3['optionValues'] = var2;
                    var2 = 'AppLauncherAutocompleteActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useAnimationDelayedAutoFocus;
            var1 = var1.bind(var3)(var12, var6);
            var3 = _closure1_slot5;
            var1 = 11;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var6;
            var11 = var8.container;
            var6 = new Array(3);
            var6[0] = var11;
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var8.hasError;
case 7:
            var6[1] = var10;
            var6[2] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 12;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var10 = 'text-md/normal';
            var5['variant'] = var10;
            var8 = var8.inputText;
            var5['style'] = var8;
            var8 = null;
            var10 = var8 != var9;
            var8 = ' ';
            if(!var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var9.displayName;
case 9:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();