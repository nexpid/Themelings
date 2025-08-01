// app/modules/user_settings/native/components/UserSettingsSurveyChangelogOverride.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function SurveyOverrideInfoActionSheet(arg1) {
        var1 = arg1;
        var10 = var1.survey;
        var4 = _closure1_slot9;
        var6 = _closure1_slot0;
        var8 = _closure1_slot3;
        var1 = 8;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var11 = _closure1_slot9;
        var7 = 9;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var9 = var7.BottomSheetTitleHeader;
        var7 = {};
        var12 = 'Last Survey Data';
        var7['title'] = var12;
        var7 = var11.bind(var3)(var9, var7);
        var1['header'] = var7;
        var7 = _closure1_slot9;
        var5 = 10;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.ActionSheetRow;
        var6 = var5.Group;
        var5 = {};
        var8 = global;
        var9 = var8.Object;
        var8 = var9.entries;
        var10 = var8.bind(var9)(var10);
        var9 = var10.map;
        var8 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var7 = var3().value;
                var2 = var1;
                var5 = undefined;
                var2 = var2 === var5;
                var4 = undefined;
                if(var2) { _fun0001_ip = 29; continue _fun0001 }
 26:
                var4 = var7;
 29:
                var11 = undefined;
                if(var2) { _fun0001_ip = 59; continue _fun0001 }
 34:
                var7 = var3().value;
                var3 = var1;
                var3 = var3 === var5;
                var11 = undefined;
                var2 = var3;
                if(var3) { _fun0001_ip = 59; continue _fun0001 }
 53:
                var11 = var7;
                var2 = var3;
 59:
                var _closure3_slot0 = var11;
                if(var2) { _fun0001_ip = 69; continue _fun0001 }
 66:
                var1.return();
 69:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 10;
                var1 = var8[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.ActionSheetRow;
                var1 = {};
                var1['label'] = var4;
                var8 = null;
                var9 = var8 != var11;
                var8 = 'null';
                if(!var9) { _fun0001_ip = 140; continue _fun0001 }
 121:
                var9 = global;
                var10 = var9.JSON;
                var9 = var10.stringify;
                var8 = var9.bind(var10)(var11);
 140:
                var1['subLabel'] = var8;
                var9 = _closure1_slot9;
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 11;
                var7 = var10[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.CopyIcon;
                var7 = {};
                var7 = var9.bind(var5)(var8, var7);
                var1['icon'] = var7;
                var6 = function onPress() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.copy;
                        var6 = _closure3_slot0;
                        var2 = null;
                        var6 = var2 != var6;
                        var2 = 'null';
                        if(!var6) { _fun0002_ip = 74; continue _fun0002 }
 51:
                        var6 = global;
                        var7 = var6.JSON;
                        var6 = var7.stringify;
                        var5 = _closure3_slot0;
                        var2 = var6.bind(var7)(var5);
 74:
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['onPress'] = var6;
                var1 = var3.bind(var5)(var2, var1, var4);
                return var1;
            }
        };
        var8 = var9.bind(var10)(var8);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function SurveyOverrideActionSheet() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getSurveyOverride;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0004_ip = 31; continue _fun0004 }
 28:
                    var1 = var2;
 31:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var4 = undefined;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var12 = var2[var1];
            var _closure2_slot0 = var12;
            var1 = 1;
            var13 = var2[var1];
            var3 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 8;
            var1 = var10[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var11 = _closure1_slot9;
            var5 = 9;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.BottomSheetTitleHeader;
            var5 = {};
            var14 = 'Survey Override';
            var5['title'] = var14;
            var5 = var11.bind(var4)(var8, var5);
            var1['header'] = var5;
            var11 = _closure1_slot9;
            var5 = 13;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.TextInput;
            var5 = {'label': 'Survey Override', 'size': 'md', 'placeholder': 'Enter the ID of the Survey you want to test', 'onChange': null, 'isClearable': true};
            var5['onChange'] = var13;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot9;
            var6 = 14;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var10 = '';
            var11 = var10 === var12;
            var10 = 'Fetch Survey';
            if(!var11) { _fun0003_ip = 237; continue _fun0003 }
 231:
            var10 = 'Reset Survey Override';
 237:
            var6['text'] = var10;
            var10 = 'destructive';
            if(var11) { _fun0003_ip = 270; continue _fun0003 }
 250:
            var11 = null;
            var12 = var11 == var12;
            var11 = 'primary';
            if(!var12) { _fun0003_ip = 267; continue _fun0003 }
 263:
            var11 = 'secondary';
 267:
            var10 = var11;
 270:
            var6['variant'] = var10;
            var9 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0005_ip = 57; continue _fun0005 }
 15:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.overrideSurvey;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 95; continue _fun0005;
 57:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.overrideSurvey;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
 95:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'SurveyOverrideActionSheet';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function SurveyInfo() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 17;
            var1 = var9[var1];
            var4 = undefined;
            var5 = var7.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentSurvey;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot1;
            var1 = 18;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var11 = var1.bind(var4)(var2);
            var _closure2_slot0 = var11;
            var3 = _closure1_slot10;
            var1 = 19;
            var1 = var9[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {};
            var5 = 'Surveys';
            var1['title'] = var5;
            var13 = _closure1_slot9;
            var6 = 20;
            var5 = var9[var6];
            var5 = var7.bind(var4)(var5);
            var12 = var5.TableRow;
            var5 = {'label': 'Survey override', 'subLabel': 'Force a survey to be shown.', 'arrow': true};
            var14 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.openLazy;
                var2 = global;
                var6 = var2.Promise;
                var3 = var6.resolve;
                var2 = {};
                var7 = _closure1_slot13;
                var2['default'] = var7;
                var3 = var3.bind(var6)(var2);
                var2 = 'SurveyOverrideActionSheet';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5['onPress'] = var14;
            var12 = var13.bind(var4)(var12, var5);
            var5 = new Array(2);
            var5[0] = var12;
            var8 = _closure1_slot9;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRow;
            var6 = {};
            var9 = 'Previous survey data';
            var6['label'] = var9;
            var9 = null;
            var13 = var9 == var11;
            var12 = undefined;
            if(!var13) { _fun0006_ip = 225; continue _fun0006 }
 219:
            var12 = 'No survey data';
 225:
            var6['subLabel'] = var12;
            var12 = var9 != var11;
            var6['arrow'] = var12;
            var11 = var9 != var11;
            var9 = undefined;
            if(!var11) { _fun0006_ip = 255; continue _fun0006 }
 248:
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.openLazy;
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = {};
                var7 = _closure1_slot12;
                var2['default'] = var7;
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var2 = _closure2_slot0;
                var3['survey'] = var2;
                var2 = 'SurveyOverrideInfoActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
 255:
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function ChangelogOverrideDebuggingActionSheet() {
        var4 = _closure1_slot9;
        var6 = _closure1_slot0;
        var8 = _closure1_slot3;
        var1 = 8;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var10 = _closure1_slot9;
        var5 = 9;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var7 = var5.BottomSheetTitleHeader;
        var5 = {};
        var11 = 'Changelog Debugging';
        var5['title'] = var11;
        var5 = var10.bind(var3)(var7, var5);
        var1['header'] = var5;
        var7 = _closure1_slot9;
        var5 = 21;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var8 = 'text-md/semibold';
        var5['variant'] = var8;
        var8 = global;
        var12 = var8.JSON;
        var11 = var12.stringify;
        var10 = _closure1_slot7;
        var9 = var10.getStateForDebugging;
        var10 = var9.bind(var10)();
        var9 = '\t';
        var10 = var11.bind(var12)(var10, var3, var9);
        var8 = var8.HermesInternal;
        var9 = var8.concat;
        var8 = '';
        var8 = var9.bind(var8)(var10);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function ChangelogOverrideActionSheet() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.overrideId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var4 = undefined;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var12 = var2[var1];
            var _closure2_slot0 = var12;
            var1 = 1;
            var13 = var2[var1];
            var3 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 8;
            var1 = var10[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var11 = _closure1_slot9;
            var5 = 9;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.BottomSheetTitleHeader;
            var5 = {};
            var14 = 'Changelog Override';
            var5['title'] = var14;
            var5 = var11.bind(var4)(var8, var5);
            var1['header'] = var5;
            var11 = _closure1_slot9;
            var5 = 13;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.TextInput;
            var5 = {'label': 'Changelog Override', 'size': 'md', 'placeholder': 'Enter the ID of the changelog you want to test', 'onChange': null, 'isClearable': true};
            var5['onChange'] = var13;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot9;
            var6 = 14;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var10 = '';
            var11 = var10 === var12;
            var10 = 'Fetch Changelog';
            if(!var11) { _fun0007_ip = 237; continue _fun0007 }
 231:
            var10 = 'Reset Changelog Override';
 237:
            var6['text'] = var10;
            var10 = 'destructive';
            if(var11) { _fun0007_ip = 270; continue _fun0007 }
 250:
            var11 = null;
            var12 = var11 == var12;
            var11 = 'primary';
            if(!var12) { _fun0007_ip = 267; continue _fun0007 }
 263:
            var11 = 'secondary';
 267:
            var10 = var11;
 270:
            var6['variant'] = var10;
            var9 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = '';
                    if(!(var2 !== var3)) { _fun0008_ip = 57; continue _fun0008 }
 15:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.setChangelogOverride;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    _fun0008_ip = 95; continue _fun0008;
 57:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setChangelogOverride;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
 95:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'ChangelogOverrideActionSheet';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function ChangelogInfo() {
        var4 = _closure1_slot10;
        var7 = _closure1_slot0;
        var10 = _closure1_slot3;
        var1 = 19;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var7.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {};
        var5 = 'Changelog';
        var1['title'] = var5;
        var12 = _closure1_slot9;
        var6 = 20;
        var5 = var10[var6];
        var5 = var7.bind(var3)(var5);
        var11 = var5.TableRow;
        var5 = {'label': 'Changelog override', 'subLabel': 'Force a changelog to be shown.', 'arrow': true};
        var13 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.openLazy;
            var2 = global;
            var6 = var2.Promise;
            var3 = var6.resolve;
            var2 = {};
            var7 = _closure1_slot16;
            var2['default'] = var7;
            var3 = var3.bind(var6)(var2);
            var2 = 'ChangelogOverrideActionSheet';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['onPress'] = var13;
        var11 = var12.bind(var3)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot9;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.TableRow;
        var6 = {'label': 'Changelog debugging', 'arrow': true};
        var9 = function onPress() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.openLazy;
            var2 = global;
            var6 = var2.Promise;
            var3 = var6.resolve;
            var2 = {};
            var7 = _closure1_slot15;
            var2['default'] = var7;
            var3 = var3.bind(var6)(var2);
            var2 = 'ChangelogOverrideDebuggingActionSheet';
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6['onPress'] = var9;
        var6 = var8.bind(var3)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['padding'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['scrollView'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function UserSettingsSurveyChangelogOverride() {
        var1 = _closure1_slot11;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var5.scrollView;
        var1['style'] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot0;
        var8 = _closure1_slot3;
        var5 = 23;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Stack;
        var5 = {};
        var8 = 16;
        var5['spacing'] = var8;
        var11 = _closure1_slot9;
        var10 = _closure1_slot14;
        var8 = {};
        var10 = var11.bind(var4)(var10, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var11 = _closure1_slot9;
        var10 = _closure1_slot17;
        var9 = {};
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/components/UserSettingsSurveyChangelogOverride.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();