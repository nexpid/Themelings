// app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function Item(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.item;
            var3 = var2.index;
            var _closure2_slot0 = var3;
            var3 = var2.choices;
            var _closure2_slot1 = var3;
            var2 = var2.onChoiceSelect;
            var _closure2_slot2 = var2;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var7 = var3.bind(var6)(var2);
            var3 = var4.type;
            var2 = _closure1_slot8;
            var2 = var2.CHOICE;
            var3 = var3 === var2;
            if(var3) { _fun0001_ip = 117; continue _fun0001 }
 98:
            var8 = var4.type;
            var2 = _closure1_slot8;
            var2 = var2.CHOICE_LOADING;
            var3 = var8 === var2;
 117:
            if(var3) { _fun0001_ip = 139; continue _fun0001 }
 120:
            var8 = var4.type;
            var2 = _closure1_slot8;
            var2 = var2.LABEL;
            var3 = var8 === var2;
 139:
            var2 = 'Invalid autocomplete result type';
            var2 = var7.bind(var6)(var3, var2);
            var2 = _closure1_slot12;
            var2 = var2.bind(var6)();
            _closure2_slot3 = var2;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var3 = function() {
                var1 = global;
                var2 = var1.Math;
                var1 = var2.random;
                var2 = var1.bind(var2)();
                var1 = 100;
                var2 = var1 * var2;
                var1 = 50;
                var1 = var2 + var1;
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var3, var2);
            _closure2_slot4 = var2;
            var2 = function ListItem(arg1) {
                var1 = arg1;
                var6 = var1.label;
                var5 = var1.onPress;
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1['label'] = var6;
                var1['onPress'] = var5;
                var6 = _closure2_slot0;
                var7 = 0;
                var7 = var7 === var6;
                var1['start'] = var7;
                var5 = _closure2_slot1;
                var7 = var5.length;
                var5 = 1;
                var5 = var7 - var5;
                var5 = var6 === var5;
                var1['end'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            _closure2_slot5 = var2;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.match;
            var6 = var2.bind(var3)(var4);
            var4 = var6.with;
            var3 = {};
            var2 = _closure1_slot8;
            var2 = var2.CHOICE;
            var3['type'] = var2;
            var2 = function(arg1) {
                var8 = arg1;
                var _closure3_slot0 = var8;
                var4 = _closure1_slot9;
                var3 = _closure2_slot5;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                var8 = var8.choice;
                var8 = var8.displayName;
                var6['children'] = var8;
                var6 = var4.bind(var1)(var7, var6);
                var2['label'] = var6;
                var5 = function onPress() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 37; continue _fun0002 }
 13:
                        var3 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var2 = var1.choice;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 37:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var2['onPress'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6 = var4.bind(var6)(var3, var2);
            var4 = var6.with;
            var3 = {};
            var2 = _closure1_slot8;
            var2 = var2.LABEL;
            var3['type'] = var2;
            var2 = function(arg1) {
                var9 = arg1;
                var _closure3_slot0 = var9;
                var4 = _closure1_slot9;
                var3 = _closure2_slot5;
                var2 = {};
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                var10 = var9.label;
                var9 = ['"'];
                var9[1] = var10;
                var10 = '"';
                var9[2] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var2['label'] = var6;
                var5 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 60; continue _fun0003 }
 13:
                        var3 = _closure2_slot2;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var4 = var1.label;
                        var2['name'] = var4;
                        var4 = var1.label;
                        var2['value'] = var4;
                        var1 = var1.label;
                        var2['displayName'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 60:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var2['onPress'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var4 = var4.bind(var6)(var3, var2);
            var3 = var4.with;
            var2 = {};
            var5 = _closure1_slot8;
            var5 = var5.CHOICE_LOADING;
            var2['type'] = var5;
            var1 = function() {
                var4 = _closure1_slot9;
                var3 = _closure2_slot5;
                var2 = {};
                var6 = _closure1_slot5;
                var5 = {};
                var7 = _closure2_slot3;
                var7 = var7.commandChoiceLoadingContainer;
                var5['style'] = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot5;
                var7 = {};
                var1 = _closure2_slot3;
                var10 = var1.commandChoiceLoadingItem;
                var1 = new Array(2);
                var1[0] = var10;
                var10 = {};
                var11 = _closure2_slot4;
                var10['width'] = var11;
                var1[1] = var10;
                var7['style'] = var1;
                var1 = undefined;
                var7 = var9.bind(var1)(var8, var7);
                var5['children'] = var7;
                var5 = var4.bind(var1)(var6, var5);
                var2['label'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.exhaustive;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function AutocompleteFailedEmptyState() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 21;
        var1 = var9[var1];
        var2 = var7.bind(var4)(var1);
        var1 = {};
        var6 = var6.emptyState;
        var1['style'] = var6;
        var6 = 22;
        var8 = var9[var6];
        var8 = var7.bind(var4)(var8);
        var1['lightSource'] = var8;
        var6 = var9[var6];
        var6 = var7.bind(var4)(var6);
        var1['darkSource'] = var6;
        var8 = _closure1_slot0;
        var5 = 16;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.rTAbPj;
        var5 = var6.bind(var7)(var5);
        var1['title'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutoCompleteResultTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var11.bind(var1)(var4);
    var8 = var9.debounce;
    var4 = 9;
    var4 = var6[var4];
    var7 = var11.bind(var1)(var4);
    var4 = {'leading': true, 'trailing': true};
    var4 = var8.bind(var9)(var7, var10, var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center'};
    var4['commandChoiceLoadingContainer'] = var9;
    var9 = {};
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var12;
    var12 = 16;
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var10 = 'flex-start';
    var9['alignSelf'] = var10;
    var4['commandChoiceLoadingItem'] = var9;
    var9 = {};
    var10 = 'transparent';
    var9['backgroundColor'] = var10;
    var4['emptyState'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherAutocompleteActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var9 = var2.option;
            var _closure2_slot0 = var9;
            var1 = var2.initChoice;
            var16 = var2.onChoiceSelect;
            var _closure2_slot1 = var16;
            var5 = var2.onDismissAutocompleteSheet;
            var18 = var2.channel;
            var _closure2_slot2 = var18;
            var17 = var2.activeCommand;
            var _closure2_slot3 = var17;
            var2 = var2.optionValues;
            var _closure2_slot4 = var2;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var10 = null;
            var11 = var10 == var1;
            var8 = undefined;
            if(var11) { _fun0004_ip = 116; continue _fun0004 }
 111:
            var8 = var1.name;
 116:
            var11 = var10 != var8;
            var1 = '';
            if(!var11) { _fun0004_ip = 130; continue _fun0004 }
 127:
            var1 = var8;
 130:
            var6 = var3.bind(var6)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var6 = var3.bind(var4)(var6, var1);
            var8 = 0;
            var1 = var6[var8];
            _closure2_slot5 = var1;
            var3 = 1;
            var11 = var6[var3];
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var15 = var3.bind(var6)(var10);
            _closure2_slot6 = var15;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 12;
            var3 = var10[var3];
            var13 = var6.bind(var4)(var3);
            var12 = var13.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = var18.id;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var9.name;
            var6[1] = var3;
            var6[2] = var1;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var7 = var4.getAutocompleteChoices;
                var2 = _closure2_slot2;
                var6 = var2.id;
                var5 = _closure2_slot0;
                var5 = var5.name;
                var3 = _closure2_slot5;
                var3 = var7.bind(var4)(var6, var5, var3);
                var1['autocompleteResults'] = var3;
                var3 = var4.getLastErrored;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['lastErrored'] = var2;
                return var1;
            };
            var6 = var12.bind(var13)(var10, var3, var6);
            var3 = var6.autocompleteResults;
            _closure2_slot7 = var3;
            var6 = var6.lastErrored;
            _closure2_slot8 = var6;
            var13 = _closure1_slot4;
            var12 = var13.useMemo;
            var10 = new Array(3);
            var10[0] = var1;
            var10[1] = var3;
            var10[2] = var6;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = new Array(0);
                    var4 = _closure2_slot5;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0005_ip = 56; continue _fun0005 }
 19:
                    var4 = var1.push;
                    var3 = {};
                    var5 = _closure1_slot8;
                    var5 = var5.LABEL;
                    var3['type'] = var5;
                    var5 = _closure2_slot5;
                    var3['label'] = var5;
                    var3 = var4.bind(var1)(var3);
 56:
                    var3 = _closure2_slot7;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0005_ip = 167; continue _fun0005 }
 66:
                    var3 = _closure2_slot8;
                    if(var3) { _fun0005_ip = 167; continue _fun0005 }
 73:
                    var5 = var1.push;
                    var3 = global;
                    var7 = var3.Array;
                    var3 = var7.prototype;
                    var6 = Object.create(var3, {constructor: {value: var7}});
                    var11 = 4;
                    var12 = var6;
                    var3 = new var12[var7](var11, var10);
                    var7 = var3 instanceof Object ? var3 : var6;
                    var6 = var7.fill;
                    var3 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.CHOICE_LOADING;
                    var3['type'] = var8;
                    var10 = var6.bind(var7)(var3);
                    var3 = new Array(0);
                    var9 = 0;
                    var11 = var3;
                    var6 = arraySpread(var11, var10, var9);
                    var11 = var5;
                    var10 = var3;
                    var9 = var1;
                    var3 = apply(var11, var10, var9);
                    _fun0005_ip = 229; continue _fun0005;
 167:
                    var3 = _closure2_slot7;
                    if(!(var4 != var3)) { _fun0005_ip = 229; continue _fun0005 }
 175:
                    var3 = var1.push;
                    var5 = _closure2_slot7;
                    var4 = var5.map;
                    var2 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot8;
                        var2 = var2.CHOICE;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['choice'] = var2;
                        return var1;
                    };
                    var10 = var4.bind(var5)(var2);
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var4 = arraySpread(var11, var10, var9);
                    var11 = var3;
                    var10 = var2;
                    var9 = var1;
                    var2 = apply(var11, var10, var9);
 229:
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var3, var10);
            _closure2_slot9 = var13;
            var3 = var13.length;
            var8 = var8 === var3;
            if(!var8) { _fun0004_ip = 338; continue _fun0004 }
 335:
            var8 = !var6;
 338:
            var12 = _closure1_slot4;
            var10 = var12.useEffect;
            var3 = new Array(5);
            var3[0] = var18;
            var18 = var9.name;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var2;
            var3[4] = var1;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getGuild;
                    var6 = _closure2_slot2;
                    var3 = var6.guild_id;
                    var5 = var4.bind(var5)(var3);
                    var4 = _closure1_slot11;
                    var3 = {};
                    var1 = _closure2_slot3;
                    var3['command'] = var1;
                    var1 = _closure2_slot4;
                    var3['optionValues'] = var1;
                    var1 = {};
                    var1['channel'] = var6;
                    var1['guild'] = var5;
                    var5 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.name;
                    var5['name'] = var6;
                    var6 = _closure2_slot5;
                    var5['query'] = var6;
                    var1['autocomplete'] = var5;
                    var3['context'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0006_ip = 142; continue _fun0006 }
 117:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
 142:
                    return var1;
                }
            };
            var2 = var10.bind(var12)(var2, var3);
            var12 = _closure1_slot4;
            var10 = var12.useCallback;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var13;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = var1.item;
                var1 = var1.index;
                var4 = _closure1_slot9;
                var3 = _closure1_slot13;
                var2 = {};
                var2['item'] = var5;
                var2['index'] = var1;
                var5 = _closure2_slot1;
                var2['onChoiceSelect'] = var5;
                var1 = _closure2_slot9;
                var2['choices'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var12 = var10.bind(var12)(var2, var3);
            var10 = _closure1_slot4;
            var3 = var10.useCallback;
            var2 = new Array(2);
            var2[0] = var16;
            var2[1] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot5;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0007_ip = 97; continue _fun0007 }
 15:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 62; continue _fun0007 }
 25:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var4 = _closure2_slot5;
                    var2['name'] = var4;
                    var4 = _closure2_slot5;
                    var2['value'] = var4;
                    var1 = _closure2_slot5;
                    var2['displayName'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 62:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
 97:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var3.bind(var10)(var1, var2);
            var3 = _closure1_slot10;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 14;
            var1 = var22[var1];
            var1 = var21.bind(var4)(var1);
            var2 = var1.AppLauncherCommandOptionActionSheet;
            var1 = {};
            var1['option'] = var9;
            var1['onDismiss'] = var5;
            var10 = _closure1_slot9;
            var16 = 15;
            var5 = var22[var16];
            var5 = var21.bind(var4)(var5);
            var9 = var5.AppLauncherListSearchBar;
            var5 = {};
            var18 = 16;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.Wuie9P;
            var18 = var19.bind(var20)(var18);
            var5['placeholder'] = var18;
            var5['onChange'] = var11;
            var11 = true;
            var5['autoFocus'] = var11;
            var18 = 'done';
            var5['returnKeyType'] = var18;
            var5['onSubmitEditing'] = var17;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            if(!var8) { _fun0004_ip = 655; continue _fun0004 }
 620:
            var17 = _closure1_slot9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var16];
            var9 = var10.bind(var4)(var9);
            var10 = var9.AppLauncherListEmptyState;
            var9 = {};
            var8 = var17.bind(var4)(var10, var9);
 655:
            var5[1] = var8;
            var10 = _closure1_slot9;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var16];
            var8 = var9.bind(var4)(var8);
            var9 = var8.AppLauncherList;
            var8 = {};
            var8['ref'] = var15;
            var14 = function keyExtractor(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var2 = _closure1_slot8;
                    var2 = var2.CHOICE;
                    var5 = 'placeholder';
                    if(!(var3 === var2)) { _fun0008_ip = 40; continue _fun0008 }
 29:
                    var1 = var1.choice;
                    var5 = var1.name;
 40:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var2 = '_';
                    var1 = arg2;
                    var1 = var4.bind(var3)(var5, var2, var1);
                    return var1;
                }
            };
            var8['keyExtractor'] = var14;
            var8['data'] = var13;
            var8['renderItem'] = var12;
            var8['scrollEnabled'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5[2] = var8;
            if(!var6) { _fun0004_ip = 747; continue _fun0004 }
 731:
            var9 = _closure1_slot9;
            var8 = _closure1_slot14;
            var7 = {};
            var6 = var9.bind(var4)(var8, var7);
 747:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();