// app/modules/settings/native/renderer/SettingRendererUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function transformSettingTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = 'string';
            var2 = typeof var3;
            var1 = var3;
            if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            var1 = var3.bind(var2)();
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getSettingTitle(arg1) {
        var9 = arg1;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var1 = var6[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.SETTING_RENDERER_CONFIG;
        var1 = var1[var9];
        var5 = _closure1_slot1;
        var4 = 8;
        var4 = var6[var4];
        var6 = var5.bind(var3)(var4);
        var5 = var1.title;
        var4 = null;
        var5 = var4 != var5;
        var4 = global;
        var4 = var4.HermesInternal;
        var8 = var4.concat;
        var7 = 'Setting ';
        var4 = ' is missing a title.';
        var4 = var8.bind(var7)(var9, var4);
        var4 = var6.bind(var3)(var5, var4);
        var2 = _closure1_slot7;
        var1 = var1.title;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = function getSearchResultIconComponent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var3 = var1.SETTING_RENDERER_CONFIG;
            var1 = arg1;
            var1 = var3[var1];
            var3 = var1.type;
            var4 = _closure1_slot4;
            var4 = var4.RADIO;
            if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot4;
            var4 = var4.CHECKBOX;
            if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var4 = _closure1_slot4;
            var4 = var4.VOLUME_SLIDER;
            if(!(var4 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
            var2 = _closure1_slot4;
            var2 = var2.SLIDER;
            if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 8:
            var1 = var1.IconComponent;
            return var1;
case 4:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function isSupportedSearchResultSettingData(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.has;
        var1 = arg1;
        var1 = var1.type;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var9 = var6.ListItemType;
    var _closure1_slot3 = var9;
    var9 = var6.NodeType;
    var _closure1_slot4 = var9;
    var6 = var6.SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES;
    var _closure1_slot5 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.AnalyticsPages;
    var _closure1_slot6 = var6;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/settings/native/renderer/SettingRendererUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function onRouteSettingOnPress(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.navigation;
            var _closure2_slot0 = var3;
            var3 = var2.screen;
            var _closure2_slot1 = var3;
            var3 = var2.preNavigationAction;
            var2 = function goToScreen() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = function onPress() {
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 2;
                        var2 = var6[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var5 = var7.setSection;
                        var2 = _closure2_slot1;
                        var4 = var2.route;
                        var4 = var5.bind(var7)(var4);
                        var5 = _closure1_slot0;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.trackUserSettingsPaneViewed;
                        var4 = {};
                        var7 = var2.route;
                        var4['destinationPane'] = var7;
                        var7 = {};
                        var8 = _closure1_slot6;
                        var8 = var8.USER_SETTINGS;
                        var7['page'] = var8;
                        var4['source'] = var7;
                        var4 = var5.bind(var6)(var4);
                        var4 = _closure2_slot0;
                        var3 = var4.navigate;
                        var2 = var2.route;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var _closure3_slot0 = var4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getKeyboardIsOpen;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0004_ip = 11; continue _fun0004 }
case 9:
                    var4 = var4.bind(var1)();
                    _fun0004_ip = 12; continue _fun0004;
case 11:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dismissGlobalKeyboard;
                    var3 = var3.bind(var4)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = function() {
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
case 12:
                    return var1;
                }
            };
            var1 = null;
            var5 = var1 == var3;
            var1 = undefined;
            var4 = undefined;
            if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 10:
            var4 = var3.bind(var1)(var2);
case 13:
            var3 = false;
            if(!(var3 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var2.bind(var1)();
case 14:
            return var1;
        }
    };
    var3['onRouteSettingOnPress'] = var6;
    var3['transformSettingTitle'] = var5;
    var3['getSettingTitle'] = var4;
    var4 = function getSettingSearchableTitles() {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.entries;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var5 = var5[var1];
        var1 = undefined;
        var1 = var6.bind(var1)(var5);
        var1 = var1.SETTING_RENDERER_CONFIG;
        var4 = var3.bind(var4)(var1);
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var3 = var6().value;
                var4 = var2;
                var1 = undefined;
                var4 = var4 === var1;
                var5 = undefined;
                if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var5 = var3;
case 16:
                var3 = undefined;
                if(var4) { _fun0005_ip = 5; continue _fun0005 }
case 18:
                var7 = var6().value;
                var6 = var2;
                var6 = var6 === var1;
                var3 = undefined;
                var4 = var6;
                if(var6) { _fun0005_ip = 5; continue _fun0005 }
case 10:
                var3 = var7;
                var4 = var6;
case 5:
                if(var4) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2.return();
case 19:
                var2 = var3.unsearchable;
                var7 = var3.title;
                var6 = var3.additionalSearchTerms;
                if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var3 = null;
                var2 = var3 == var7;
case 21:
                if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = new Array(2);
                var2[0] = var5;
                var5 = _closure1_slot7;
                var7 = var5.bind(var1)(var7);
                var5 = new Array(1);
                var5[0] = var7;
                var7 = null;
                if(!(var7 != var6)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var7 = global;
                var8 = var7.Array;
                var7 = var8.isArray;
                var8 = var7.bind(var8)(var6);
                var7 = var6;
                if(var8) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var7 = var6.bind(var1)();
case 27:
                _fun0005_ip = 29; continue _fun0005;
case 25:
                var7 = new Array(0);
case 29:
                var9 = 1;
                var11 = var5;
                var10 = var7;
                var6 = arraySpread(var11, var10, var9);
                var2[1] = var5;
                var2 = var3.bind(var4)(var2);
case 23:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getSettingSearchableTitles'] = var4;
    var4 = function getSettingScreens() {
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var3 = global;
        var4 = var3.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var9 = var5;
        var4 = new var9[var4](var8);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure2_slot1 = var4;
        var5 = var3.Object;
        var4 = var5.entries;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 7;
        var6 = var6[var3];
        var3 = undefined;
        var3 = var7.bind(var3)(var6);
        var3 = var3.SETTING_RENDERER_CONFIG;
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var3 = var5[Symbol.iterator];
                var5 = var3().next;
                var2 = var5().value;
                var4 = var3;
                var1 = undefined;
                var4 = var4 === var1;
                var7 = undefined;
                if(var4) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var7 = var2;
case 16:
                var2 = undefined;
                if(var4) { _fun0006_ip = 5; continue _fun0006 }
case 18:
                var6 = var5().value;
                var5 = var3;
                var5 = var5 === var1;
                var2 = undefined;
                var4 = var5;
                if(var5) { _fun0006_ip = 5; continue _fun0006 }
case 10:
                var2 = var6;
                var4 = var5;
case 5:
                if(var4) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var3.return();
case 19:
                var4 = var2.type;
                var3 = _closure1_slot4;
                var3 = var3.ROUTE;
                if(!(var4 === var3)) { _fun0006_ip = 30; continue _fun0006 }
case 7:
                var6 = _closure2_slot1;
                var5 = var6.has;
                var4 = var2.screen;
                var4 = var4.route;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var6 = _closure2_slot0;
                var5 = var6.push;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var2.screen;
                var4[1] = var7;
                var4 = var5.bind(var6)(var4);
                var4 = _closure2_slot1;
                var3 = var4.add;
                var2 = var2.screen;
                var2 = var2.route;
                var2 = var3.bind(var4)(var2);
case 30:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getSettingScreens'] = var4;
    var4 = function toSettingListItems(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = new Array(0);
        var _closure2_slot1 = var1;
        var3 = arg1;
        var4 = var3.sections;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var5 = var4.settings;
                var3 = var5.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.isBlocked;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = !var1;
                    return var1;
                };
                var6 = var3.bind(var5)(var1);
                var _closure3_slot0 = var6;
                var3 = var6.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var8 = _closure2_slot1;
                var7 = var8.push;
                var3 = {};
                var9 = _closure1_slot3;
                var9 = var9.SECTION_HEADER;
                var3['type'] = var9;
                var9 = var4.label;
                var3['label'] = var9;
                var3 = var7.bind(var8)(var3);
                var3 = var6.forEach;
                var2 = function(arg1, arg2) {
                    var7 = arg1;
                    var6 = arg2;
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = {};
                    var5 = _closure1_slot3;
                    var5 = var5.SECTION_ROW;
                    var2['type'] = var5;
                    var2['setting'] = var7;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.SETTING_RENDERER_CONFIG;
                    var5 = var5[var7];
                    var2['settingData'] = var5;
                    var5 = 0;
                    var5 = var5 === var6;
                    var2['start'] = var5;
                    var5 = _closure3_slot0;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var2['end'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var6)(var2);
                var3 = var4.subLabel;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 32; continue _fun0007 }
case 31:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = {};
                var5 = _closure1_slot3;
                var5 = var5.SECTION_FOOTER;
                var1['type'] = var5;
                var4 = var4.subLabel;
                var1['label'] = var4;
                var1 = var2.bind(var3)(var1);
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toSettingListItems'] = var4;
    var4 = function getSettingListSearchResultItems(arg1) {
        var4 = arg1;
        var5 = new Array(0);
        var _closure2_slot0 = var5;
        var3 = var4.forEach;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.SETTING_RENDERER_CONFIG;
                var7 = var3[var6];
                var4 = var7.parent;
                var3 = null;
                if(!(var3 == var4)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var3 = _closure1_slot10;
                var3 = var3.bind(var1)(var7);
                if(var3) { _fun0008_ip = 19; continue _fun0008 }
case 36:
                return var1;
case 19:
                var5 = _closure2_slot0;
                var4 = var5.push;
                var3 = {};
                var3['category'] = var6;
                var3['setting'] = var6;
                var3['data'] = var7;
                var3 = var4.bind(var5)(var3);
                _fun0008_ip = 37; continue _fun0008;
case 34:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var5 = var4[var2];
                var7 = var3.bind(var1)(var5);
                var5 = var7.getHighestLevelAncestor;
                var7 = var5.bind(var7)(var6);
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getNearestRouteAncestorDataOrSelf;
                var5 = var2.bind(var3)(var6);
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = {};
                var2['category'] = var7;
                var2['setting'] = var6;
                var2['data'] = var5;
                var2 = var3.bind(var4)(var2);
case 37:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.sortBy;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.category;
            return var1;
        };
        var4 = var3.bind(var4)(var5, var1);
        var _closure2_slot1 = var4;
        var1 = new Array(0);
        var _closure2_slot2 = var1;
        var3 = global;
        var3 = var3.Set;
        var5 = var3.prototype;
        var5 = Object.create(var5, {constructor: {value: var3}});
        var8 = var5;
        var3 = new var8[var3](var7);
        var3 = var3 instanceof Object ? var3 : var5;
        var _closure2_slot3 = var3;
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var10 = var1.category;
                var6 = var1.setting;
                var12 = var1.data;
                var2 = _closure1_slot8;
                var1 = undefined;
                var8 = var2.bind(var1)(var6);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getBreadcrumbs;
                var7 = var2.bind(var3)(var6);
                var3 = _closure2_slot3;
                var2 = var3.has;
                var2 = var2.bind(var3)(var10);
                var11 = !var2;
                var2 = var3.add;
                var2 = var2.bind(var3)(var10);
                var4 = _closure2_slot2;
                var3 = var4.push;
                var2 = {};
                var13 = _closure1_slot3;
                var13 = var13.SETTING_SEARCH_RESULT;
                var2['type'] = var13;
                var2['settingData'] = var12;
                var2['title'] = var8;
                var8 = undefined;
                if(!var11) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                var9 = _closure1_slot9;
                var8 = var9.bind(var1)(var10);
case 38:
                var2['IconComponent'] = var8;
                var2['breadcrumbs'] = var7;
                var2['setting'] = var6;
                var6 = arg2;
                var2['index'] = var6;
                var5 = _closure2_slot1;
                var5 = var5.length;
                var2['total'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getSettingListSearchResultItems'] = var4;
    var4 = function getScoredSettingListSearchResultItems(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var8 = arg1;
            var6 = arg3;
            var _closure2_slot0 = var8;
            var1 = new Array(0);
            var _closure2_slot1 = var1;
            var3 = arg2;
            if(var3) { _fun0010_ip = 23; continue _fun0010 }
case 40:
            var3 = global;
            var4 = var3.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var11 = var5;
            var4 = new var11[var4](var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var _closure2_slot2 = var4;
            var4 = var3.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var11 = var5;
            var4 = new var11[var4](var10);
            var7 = var4 instanceof Object ? var4 : var5;
            var _closure2_slot3 = var7;
            var5 = var8.forEach;
            var4 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.setting;
                    var3 = var1.score;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.getHighestLevelAncestor;
                    var5 = var2.bind(var4)(var8);
                    var7 = var3;
                    if(!(var5 === var8)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
                    var2 = 0.05;
                    var7 = var3 + var2;
case 41:
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var4 = var3.bind(var4)(var5);
                    var3 = null;
                    var6 = var3 != var4;
                    var11 = 0;
                    if(!var6) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    var11 = var4;
case 43:
                    var9 = _closure2_slot3;
                    var6 = var9.set;
                    var4 = global;
                    var10 = var4.Math;
                    var4 = var10.max;
                    var4 = var4.bind(var10)(var11, var7);
                    var4 = var6.bind(var9)(var5, var4);
                    var6 = _closure2_slot2;
                    var4 = var6.get;
                    var4 = var4.bind(var6)(var5);
                    if(!(var3 == var4)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
                    var4 = new Array(0);
case 45:
                    var6 = var4.push;
                    var3 = {};
                    var3['setting'] = var8;
                    var3['score'] = var7;
                    var3 = var6.bind(var4)(var3);
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    return var1;
                }
            };
            var4 = var5.bind(var8)(var4);
            var5 = var3.Array;
            var4 = var5.from;
            var3 = var7.entries;
            var3 = var3.bind(var7)();
            var5 = var4.bind(var5)(var3);
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                var3 = 1;
                var2 = var1[var3];
                var1 = arg1;
                var1 = var1[var3];
                var1 = var2 - var1;
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                    var1 = var4;
case 47:
                    if(var3) { _fun0012_ip = 49; continue _fun0012 }
case 50:
                    var2.return();
case 49:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = 0;
            var _closure2_slot4 = var3;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var4 = var2.bind(var3)(var4);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0013_ip = 51; continue _fun0013 }
case 18:
                    var3 = var4.sort;
                    var2 = function(arg1, arg2) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var4 = arg2;
                            var6 = var3.setting;
                            var5 = _closure3_slot0;
                            var1 = -1;
                            if(!(var6 !== var5)) { _fun0014_ip = 52; continue _fun0014 }
case 40:
                            var6 = var4.setting;
                            var5 = _closure3_slot0;
                            var2 = 1;
                            if(!(var6 !== var5)) { _fun0014_ip = 15; continue _fun0014 }
case 53:
                            var4 = var4.score;
                            var3 = var3.score;
                            var2 = var4 - var3;
case 15:
                            var1 = var2;
case 52:
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = function(arg1, arg2) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.setting;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 7;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.SETTING_RENDERER_CONFIG;
                            var5 = var4[var2];
                            var6 = var5.parent;
                            var4 = null;
                            if(!(var4 == var6)) { _fun0015_ip = 41; continue _fun0015 }
case 54:
                            var4 = _closure1_slot10;
                            var4 = var4.bind(var1)(var5);
                            var7 = var2;
                            if(var4) { _fun0015_ip = 55; continue _fun0015 }
case 56:
                            return var1;
case 41:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 9;
                            var6 = var9[var4];
                            var10 = var8.bind(var1)(var6);
                            var6 = var10.getHighestLevelAncestor;
                            var7 = var6.bind(var10)(var2);
                            var4 = var9[var4];
                            var8 = var8.bind(var1)(var4);
                            var4 = var8.getNearestRouteAncestorDataOrSelf;
                            var5 = var4.bind(var8)(var2);
case 55:
                            var4 = {};
                            var6 = _closure1_slot3;
                            var6 = var6.SETTING_SEARCH_RESULT;
                            var4['type'] = var6;
                            var4['settingData'] = var5;
                            var5 = _closure1_slot8;
                            var5 = var5.bind(var1)(var2);
                            var4['title'] = var5;
                            var8 = 0;
                            var6 = arg2;
                            var5 = undefined;
                            if(!(var8 === var6)) { _fun0015_ip = 57; continue _fun0015 }
case 25:
                            var6 = _closure1_slot9;
                            var5 = var6.bind(var1)(var7);
case 57:
                            var4['IconComponent'] = var5;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 9;
                            var3 = var6[var3];
                            var5 = var5.bind(var1)(var3);
                            var3 = var5.getBreadcrumbs;
                            var3 = var3.bind(var5)(var2);
                            var4['breadcrumbs'] = var3;
                            var4['setting'] = var2;
                            var3 = _closure2_slot4;
                            var4['index'] = var3;
                            var3 = _closure2_slot0;
                            var3 = var3.length;
                            var4['total'] = var3;
                            var3 = _closure2_slot4;
                            var3 = var3 + 1;
                            _closure2_slot4 = var3;
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var2 = var2.bind(var3)(var4);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
case 23:
            var5 = 0;
            var7 = var5 < var6;
            var3 = 1;
            var2 = 0;
            if(!var7) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var8 = var1.push;
            var7 = {};
            var9 = _closure1_slot3;
            var9 = var9.SECTION_ROW_PLACEHOLDER;
            var7['type'] = var9;
            var9 = var5 === var2;
            var7['start'] = var9;
            var9 = var6 - var3;
            var9 = var2 === var9;
            var7['end'] = var9;
            var7 = var8.bind(var1)(var7);
            var2 = var2 + 1;
            if(var2 < var6) { _fun0010_ip = 59; continue _fun0010 }
case 58:
            return var1;
        }
    };
    var3['getScoredSettingListSearchResultItems'] = var4;
    var2 = function getInitialScrollIndex(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = var3.findLastIndex;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot3;
                    var1 = var1.SECTION_ROW;
                    var1 = var3 === var1;
                    if(!var1) { _fun0017_ip = 60; continue _fun0017 }
case 50:
                    var3 = var2.setting;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 60:
                    return var1;
                }
            };
            var4 = var2.bind(var3)(var1);
            var1 = 1;
            if(!(var1 === var4)) { _fun0016_ip = 61; continue _fun0016 }
case 62:
            var1 = undefined;
            return var1;
case 61:
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var1 = 0;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['getInitialScrollIndex'] = var2;
    return var1;
})();