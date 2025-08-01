// app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var1 = function DevToolsPersistedStoresActionSheet(arg1) {
        var1 = arg1;
        var13 = var1.store;
        var _closure2_slot0 = var13;
        var1 = var1.close;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot8;
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 22;
        var1 = var12[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var7 = _closure1_slot8;
        var5 = 23;
        var5 = var12[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var8 = var13.getName;
        var8 = var8.bind(var13)();
        var5['title'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['header'] = var5;
        var7 = _closure1_slot8;
        var8 = 24;
        var5 = var12[var8];
        var5 = var9.bind(var3)(var5);
        var5 = var5.ActionSheetRow;
        var6 = var5.Group;
        var5 = {};
        var10 = _closure1_slot8;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.ActionSheetRow;
        var8 = {'variant': 'danger', 'label': 'Clear persisted store', 'subLabel': 'App restart required to re-init the cleared store'};
        var11 = function onPress() {
            var3 = _closure2_slot0;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.open;
            var3 = {'key': 'DevToolsPersistedStoresActionSheet', 'content': 'Store cleared from persisted storage'};
            var3 = var4.bind(var5)(var3);
            var2 = _closure2_slot1;
            var2 = var2.bind(var1)();
            return var1;
        };
        var8['onPress'] = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var15.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var11 = var4.bind(var1)(var7);
    var _closure1_slot4 = var11;
    var8 = 2;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PersistedStore;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var12 = var5.bind(var1)(var4);
    var7 = var12.createStyles;
    var4 = {};
    var13 = {};
    var14 = 7;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_PRIMARY;
    var13['backgroundColor'] = var16;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var13['paddingHorizontal'] = var16;
    var13['flex'] = var9;
    var4['container'] = var13;
    var13 = {'backgroundColor': null, 'verticalAlign': 'middle', 'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var13['backgroundColor'] = var14;
    var4['sectionHeader'] = var13;
    var4 = var7.bind(var12)(var4);
    var _closure1_slot10 = var4;
    var7 = var11.memo;
    var4 = function() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {'label': 'Disable Database', 'start': true};
        var5 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.database;
                var5 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var5)) { _fun0001_ip = 103; continue _fun0001 }
 41:
                var4 = var5.disable;
                var3 = 'via UserSettingsDatabaseControls';
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {'key': 'disable_database', 'content': 'Database has been disabled.'};
                var2 = var3.bind(var4)(var2);
 103:
                return var1;
            }
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var11)(var4);
    var _closure1_slot11 = var4;
    var7 = var11.memo;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var4 = undefined;
            var8 = var2.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var6 = _closure1_slot1;
            var3 = 12;
            var3 = var5[var3];
            var3 = var6.bind(var4)(var3);
            var6 = new Array(2);
            var6[0] = var3;
            var3 = _closure1_slot7;
            var6[1] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.database;
                var4 = _closure1_slot7;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot8;
            var1 = 8;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {'label': null, 'start': true, 'end': true};
            var5 = null;
            var8 = var5 == var6;
            var7 = 'No active database.';
            if(var8) { _fun0002_ip = 133; continue _fun0002 }
 128:
            var7 = var6.name;
 133:
            var1['label'] = var7;
            var7 = var5 != var6;
            var5 = undefined;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 148:
            var8 = var6.handle;
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'Handle: ';
            var5 = var7.bind(var6)(var8);
 178:
            var1['subLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var11)(var4);
    var _closure1_slot12 = var4;
    var7 = var11.memo;
    var4 = function() {
        var4 = _closure1_slot8;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {'label': 'Disable + Remove Database', 'end': true};
        var5 = function onPress() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var2 = var4[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.replaceDisableAllDatabases;
            var2 = 'via UserSettingsDatabaseControls';
            var2 = var5.bind(var6)(var2);
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {'key': 'disable_database_and_remove', 'content': 'Database has been removed.'};
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var7.bind(var11)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var4['DATABASE_CONTROLS'] = var10;
    var7 = 'DATABASE_CONTROLS';
    var4[var10] = var7;
    var4['DATABASE_CURRENT'] = var9;
    var7 = 'DATABASE_CURRENT';
    var4[var9] = var7;
    var4['PERSISTED_STORES'] = var8;
    var7 = 'PERSISTED_STORES';
    var4[var8] = var7;
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DevToolsDataStorageScreen() {
        var2 = _closure1_slot10;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var _closure2_slot0 = var5;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 13;
        var2 = var9[var2];
        var2 = var7.bind(var4)(var2);
        var12 = var2.bind(var4)();
        var2 = 14;
        var2 = var9[var2];
        var2 = var7.bind(var4)(var2);
        var11 = var2.bind(var4)();
        var2 = 15;
        var2 = var9[var2];
        var2 = var7.bind(var4)(var2);
        var10 = var2.bind(var4)();
        var2 = 16;
        var2 = var9[var2];
        var2 = var7.bind(var4)(var2);
        var8 = var2.bind(var4)();
        var13 = _closure1_slot4;
        var14 = var13.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var2 = var1.PersistedStore;
            var1 = var2.getAll;
            var5 = var1.bind(var2)();
            var2 = var5.filter;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var1 = _closure1_slot6;
                    var1 = var3 instanceof var1;
                    if(!var1) { _fun0003_ip = 64; continue _fun0003 }
 17:
                    var2 = var3.getName;
                    var3 = var2.bind(var3)();
                    var2 = var3.toLocaleLowerCase;
                    var4 = var2.bind(var3)();
                    var3 = var4.includes;
                    var5 = _closure3_slot0;
                    var2 = var5.toLocaleLowerCase;
                    var2 = var2.bind(var5)();
                    var1 = var3.bind(var4)(var2);
 64:
                    return var1;
                }
            };
            var2 = var2.bind(var5)(var1);
            var _closure3_slot1 = var2;
            var1 = {};
            var4 = _closure1_slot14;
            var6 = var4.DATABASE_CONTROLS;
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var4.DATABASE_CURRENT;
            var5[1] = var6;
            var4 = var4.PERSISTED_STORES;
            var5[2] = var4;
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure1_slot14;
                    var3 = var3.DATABASE_CONTROLS;
                    if(!(var3 !== var2)) { _fun0004_ip = 99; continue _fun0004 }
 20:
                    var3 = _closure1_slot14;
                    var3 = var3.DATABASE_CURRENT;
                    if(!(var3 !== var2)) { _fun0004_ip = 94; continue _fun0004 }
 34:
                    var1 = _closure1_slot14;
                    var1 = var1.PERSISTED_STORES;
                    if(!(var1 !== var2)) { _fun0004_ip = 52; continue _fun0004 }
 48:
                    var1 = undefined;
                    return var1;
 52:
                    var1 = _closure3_slot1;
                    var2 = var1.length;
                    var1 = 0;
                    var4 = var2 > var1;
                    var2 = 1;
                    var1 = var2;
                    if(!var4) { _fun0004_ip = 88; continue _fun0004 }
 79:
                    var3 = _closure3_slot1;
                    var1 = var3.length;
 88:
                    var1 = var2 + var1;
                    return var1;
 94:
                    var1 = 1;
                    return var1;
 99:
                    var1 = 2;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var1['sections'] = var3;
            var1['persistedStores'] = var2;
            return var1;
        };
        var2 = new Array(0);
        var2 = var14.bind(var13)(var3, var2);
        var _closure2_slot1 = var2;
        var14 = var13.useState;
        var3 = function() {
            var3 = _closure2_slot1;
            var2 = undefined;
            var1 = '';
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var15 = var14.bind(var13)(var3);
        var14 = _closure1_slot3;
        var3 = 2;
        var14 = var14.bind(var4)(var15, var3);
        var3 = 0;
        var3 = var14[var3];
        var15 = var3.sections;
        var16 = var3.persistedStores;
        var _closure2_slot2 = var16;
        var3 = 1;
        var3 = var14[var3];
        var _closure2_slot3 = var3;
        var14 = var13.useCallback;
        var3 = new Array(2);
        var3[0] = var16;
        var3[1] = var2;
        var2 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var3;
                var2 = _closure1_slot14;
                var2 = var2.DATABASE_CONTROLS;
                if(!(var2 !== var4)) { _fun0005_ip = 378; continue _fun0005 }
 32:
                var2 = _closure1_slot14;
                var2 = var2.DATABASE_CURRENT;
                if(!(var2 !== var4)) { _fun0005_ip = 350; continue _fun0005 }
 49:
                var2 = _closure1_slot14;
                var2 = var2.PERSISTED_STORES;
                if(!(var2 !== var4)) { _fun0005_ip = 67; continue _fun0005 }
 63:
                var2 = null;
                return var2;
 67:
                var4 = 0;
                if(!(var4 !== var3)) { _fun0005_ip = 248; continue _fun0005 }
 76:
                var8 = 1;
                if(!(var8 === var3)) { _fun0005_ip = 99; continue _fun0005 }
 83:
                var2 = _closure2_slot2;
                var2 = var2.length;
                if(!(var4 !== var2)) { _fun0005_ip = 194; continue _fun0005 }
 99:
                var6 = _closure1_slot8;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var4 = var2.TableRow;
                var2 = {};
                var7 = _closure2_slot2;
                var8 = var3 - var8;
                var9 = var7[var8];
                var8 = var9.getName;
                var8 = var8.bind(var9)();
                var2['label'] = var8;
                var7 = var7.length;
                var7 = var3 === var7;
                var2['end'] = var7;
                var7 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.openLazy;
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    var2 = {};
                    var7 = _closure1_slot15;
                    var2['default'] = var7;
                    var4 = var3.bind(var4)(var2);
                    var3 = {};
                    var7 = _closure2_slot2;
                    var8 = _closure3_slot0;
                    var2 = 1;
                    var2 = var8 - var2;
                    var2 = var7[var2];
                    var3['store'] = var2;
                    var2 = function close() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var1 = 'DevToolsPersistedStoresActionSheet';
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3['close'] = var2;
                    var2 = 'DevToolsPersistedStoresActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                };
                var2['onPress'] = var7;
                var2 = var6.bind(var5)(var4, var2);
                return var2;
 194:
                var6 = _closure1_slot8;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var4 = var2.TableRow;
                var2 = {'label': 'No results found.', 'end': true};
                var2 = var6.bind(var5)(var4, var2);
                return var2;
 248:
                var6 = _closure1_slot8;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 8;
                var2 = var11[var2];
                var5 = undefined;
                var2 = var8.bind(var5)(var2);
                var4 = var2.TableRow;
                var2 = {};
                var9 = _closure1_slot8;
                var7 = 17;
                var7 = var11[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.SearchField;
                var7 = {};
                var11 = 'md';
                var7['size'] = var11;
                var10 = function onChange(arg1) {
                    var3 = _closure2_slot3;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var1);
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var7['onChange'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var2['label'] = var7;
                var7 = true;
                var2['start'] = var7;
                var2 = var6.bind(var5)(var4, var2);
                return var2;
 350:
                var4 = 0;
                var2 = null;
                if(!(var4 === var3)) { _fun0005_ip = 376; continue _fun0005 }
 358:
                var7 = _closure1_slot8;
                var6 = _closure1_slot12;
                var5 = undefined;
                var4 = {};
                var2 = var7.bind(var5)(var6, var4);
 376:
                return var2;
 378:
                var2 = 0;
                if(!(var2 !== var3)) { _fun0005_ip = 415; continue _fun0005 }
 384:
                var2 = 1;
                if(!(var2 !== var3)) { _fun0005_ip = 395; continue _fun0005 }
 391:
                var2 = null;
                return var2;
 395:
                var5 = _closure1_slot8;
                var4 = _closure1_slot13;
                var3 = undefined;
                var2 = {};
                var2 = var5.bind(var3)(var4, var2);
                return var2;
 415:
                var4 = _closure1_slot8;
                var3 = _closure1_slot11;
                var2 = undefined;
                var1 = {};
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            }
        };
        var14 = var14.bind(var13)(var2, var3);
        var3 = var13.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var7 = arg1;
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                var5 = _closure2_slot0;
                var5 = var5.sectionHeader;
                var1['style'] = var5;
                var5 = _closure1_slot14;
                var8 = var5.DATABASE_CONTROLS;
                var5 = 'Database Controls';
                if(!(var8 !== var7)) { _fun0006_ip = 132; continue _fun0006 }
 90:
                var8 = _closure1_slot14;
                var8 = var8.DATABASE_CURRENT;
                var5 = 'Database (Current)';
                if(!(var8 !== var7)) { _fun0006_ip = 132; continue _fun0006 }
 110:
                var6 = _closure1_slot14;
                var6 = var6.PERSISTED_STORES;
                var5 = undefined;
                if(!(var6 === var7)) { _fun0006_ip = 132; continue _fun0006 }
 126:
                var5 = 'Persisted Stores';
 132:
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var13 = var3.bind(var13)(var1, var2);
        var3 = _closure1_slot8;
        var1 = 20;
        var1 = var9[var1];
        var2 = var7.bind(var4)(var1);
        var1 = {};
        var1['sections'] = var15;
        var1['renderItem'] = var14;
        var1['renderSectionHeader'] = var13;
        var13 = var12.bottom;
        var12 = 7;
        var12 = var9[var12];
        var12 = var7.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var12 = var13 + var12;
        var1['insetEnd'] = var12;
        var1['itemSize'] = var11;
        var1['sectionHeaderSize'] = var10;
        var10 = 'windowSize';
        var1['estimatedListSize'] = var10;
        var1['placeholderConfig'] = var8;
        var8 = true;
        var1['wrapChildren'] = var8;
        var8 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot8;
        var6 = 21;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();