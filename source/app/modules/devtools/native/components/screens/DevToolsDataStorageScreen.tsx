// app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    kilo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: DevToolsPersistedStoresActionSheet
        entity = argFoo;
        foxtrot = entity.store;
        var _closure2_slot0 = foxtrot;
        entity = entity.close;
        var _closure2_slot1 = entity;
        tango = _closure1_slot8;
        verify = _closure1_slot0;
        romeo = _closure1_slot2;
        entity = 22;
        entity = romeo[entity];
        zulu = undefined;
        entity = verify.bind(zulu)(entity);
        mike = entity.ActionSheet;
        entity = {};
        golf = _closure1_slot8;
        report = 23;
        report = romeo[report];
        report = verify.bind(zulu)(report);
        oscar = report.BottomSheetTitleHeader;
        report = {};
        options = foxtrot.getName;
        options = options.bind(foxtrot)();
        report['title'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['header'] = report;
        golf = _closure1_slot8;
        options = 24;
        report = romeo[options];
        report = verify.bind(zulu)(report);
        report = report.ActionSheetRow;
        oscar = report.Group;
        report = {};
        offset = _closure1_slot8;
        options = romeo[options];
        options = verify.bind(zulu)(options);
        verify = options.ActionSheetRow;
        options = {'variant': 'danger', 'label': 'Clear persisted store', 'subLabel': 'App restart required to re-init the cleared store'};
        yankee = function() { // Original name: onPress
            zulu = _closure2_slot0;
            entity = zulu.clear;
            entity = entity.bind(zulu)();
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 10;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.open;
            zulu = {'key': 'DevToolsPersistedStoresActionSheet', 'content': 'Store cleared from persisted storage'};
            zulu = tango.bind(report)(zulu);
            mike = _closure2_slot1;
            mike = mike.bind(entity)();
            return entity;
        };
        options['onPress'] = yankee;
        options = offset.bind(zulu)(verify, options);
        report['children'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    offset = 0;
    tango = oscar[offset];
    entity = undefined;
    tango = kilo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    verify = 1;
    golf = oscar[verify];
    tango = argCorge;
    yankee = tango.bind(entity)(golf);
    var _closure1_slot4 = yankee;
    options = 2;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PersistedStore;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    romeo = report.bind(entity)(tango);
    golf = romeo.createStyles;
    tango = {};
    foxtrot = {};
    backup = 7;
    sizing = oscar[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_PRIMARY;
    foxtrot['backgroundColor'] = sizing;
    sizing = oscar[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_12;
    foxtrot['paddingHorizontal'] = sizing;
    foxtrot['flex'] = verify;
    tango['container'] = foxtrot;
    foxtrot = {'backgroundColor': null, 'verticalAlign': 'middle', 'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    backup = oscar[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    foxtrot['backgroundColor'] = backup;
    tango['sectionHeader'] = foxtrot;
    tango = golf.bind(romeo)(tango);
    var _closure1_slot10 = tango;
    golf = yankee.memo;
    tango = function() {
        tango = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 8;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {'label': 'Disable Database', 'start': true};
        report = function() { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.database;
                report = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != report)) { _fun00002_ip = 103; continue _fun00001 }
 41:
                tango = report.disable;
                zulu = 'via UserSettingsDatabaseControls';
                zulu = tango.bind(report)(zulu);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 10;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.open;
                mike = {'key': 'disable_database', 'content': 'Database has been disabled.'};
                mike = zulu.bind(tango)(mike);
 103:
                return entity;
            }
        };
        entity['onPress'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    tango = golf.bind(yankee)(tango);
    var _closure1_slot11 = tango;
    golf = yankee.memo;
    tango = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 11;
            zulu = report[zulu];
            tango = undefined;
            options = mike.bind(tango)(zulu);
            golf = options.useStateFromStores;
            oscar = _closure1_slot1;
            zulu = 12;
            zulu = report[zulu];
            zulu = oscar.bind(tango)(zulu);
            oscar = new Array(2);
            oscar[0] = zulu;
            zulu = _closure1_slot7;
            oscar[1] = zulu;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.database;
                tango = _closure1_slot7;
                entity = tango.getId;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar, zulu);
            zulu = _closure1_slot8;
            entity = 8;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {'label': null, 'start': true, 'end': true};
            report = null;
            options = report == oscar;
            golf = 'No active database.';
            if(options) { _fun00004_ip = 129; continue _fun00003 }
 124:
            golf = oscar.name;
 129:
            entity['label'] = golf;
            golf = report != oscar;
            report = undefined;
            if(!golf) { _fun00004_ip = 174; continue _fun00003 }
 144:
            options = oscar.handle;
            oscar = global;
            oscar = oscar.HermesInternal;
            golf = oscar.concat;
            oscar = 'Handle: ';
            report = golf.bind(oscar)(options);
 174:
            entity['subLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = golf.bind(yankee)(tango);
    var _closure1_slot12 = tango;
    golf = yankee.memo;
    tango = function() {
        tango = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 8;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {'label': 'Disable + Remove Database', 'end': true};
        report = function() { // Original name: onPress
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 12;
            mike = tango[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.replaceDisableAllDatabases;
            mike = 'via UserSettingsDatabaseControls';
            mike = report.bind(oscar)(mike);
            mike = 10;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.open;
            mike = {'key': 'disable_database_and_remove', 'content': 'Database has been removed.'};
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['onPress'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    tango = golf.bind(yankee)(tango);
    var _closure1_slot13 = tango;
    tango = {};
    tango['DATABASE_CONTROLS'] = offset;
    golf = 'DATABASE_CONTROLS';
    tango[offset] = golf;
    tango['DATABASE_CURRENT'] = verify;
    golf = 'DATABASE_CURRENT';
    tango[verify] = golf;
    tango['PERSISTED_STORES'] = options;
    golf = 'PERSISTED_STORES';
    tango[options] = golf;
    var _closure1_slot14 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: DevToolsDataStorageScreen
        mike = _closure1_slot10;
        tango = undefined;
        report = mike.bind(tango)();
        var _closure2_slot0 = report;
        golf = _closure1_slot1;
        verify = _closure1_slot2;
        mike = 13;
        mike = verify[mike];
        mike = golf.bind(tango)(mike);
        romeo = mike.bind(tango)();
        mike = 14;
        mike = verify[mike];
        mike = golf.bind(tango)(mike);
        yankee = mike.bind(tango)();
        mike = 15;
        mike = verify[mike];
        mike = golf.bind(tango)(mike);
        offset = mike.bind(tango)();
        mike = 16;
        mike = verify[mike];
        mike = golf.bind(tango)(mike);
        options = mike.bind(tango)();
        foxtrot = _closure1_slot4;
        backup = foxtrot.useCallback;
        zulu = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            entity = report.bind(entity)(mike);
            mike = entity.PersistedStore;
            entity = mike.getAll;
            report = entity.bind(mike)();
            mike = report.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure1_slot6;
                    entity = zulu instanceof entity;
                    if(!entity) { _fun00006_ip = 64; continue _fun00005 }
 17:
                    mike = zulu.getName;
                    zulu = mike.bind(zulu)();
                    mike = zulu.toLocaleLowerCase;
                    tango = mike.bind(zulu)();
                    zulu = tango.includes;
                    report = _closure3_slot0;
                    mike = report.toLocaleLowerCase;
                    mike = mike.bind(report)();
                    entity = zulu.bind(tango)(mike);
 64:
                    return entity;
                }
            };
            mike = mike.bind(report)(entity);
            var _closure3_slot1 = mike;
            entity = {};
            tango = _closure1_slot14;
            oscar = tango.DATABASE_CONTROLS;
            report = new Array(3);
            report[0] = oscar;
            oscar = tango.DATABASE_CURRENT;
            report[1] = oscar;
            tango = tango.PERSISTED_STORES;
            report[2] = tango;
            tango = report.map;
            zulu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = argFoo;
                    zulu = _closure1_slot14;
                    zulu = zulu.DATABASE_CONTROLS;
                    if(!(zulu !== mike)) { _fun00008_ip = 99; continue _fun00007 }
 20:
                    zulu = _closure1_slot14;
                    zulu = zulu.DATABASE_CURRENT;
                    if(!(zulu !== mike)) { _fun00008_ip = 94; continue _fun00007 }
 34:
                    entity = _closure1_slot14;
                    entity = entity.PERSISTED_STORES;
                    if(!(entity !== mike)) { _fun00008_ip = 52; continue _fun00007 }
 48:
                    entity = undefined;
                    return entity;
 52:
                    entity = _closure3_slot1;
                    mike = entity.length;
                    entity = 0;
                    tango = mike > entity;
                    mike = 1;
                    entity = mike;
                    if(!tango) { _fun00008_ip = 88; continue _fun00007 }
 79:
                    zulu = _closure3_slot1;
                    entity = zulu.length;
 88:
                    entity = mike + entity;
                    return entity;
 94:
                    entity = 1;
                    return entity;
 99:
                    entity = 2;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            entity['sections'] = zulu;
            entity['persistedStores'] = mike;
            return entity;
        };
        mike = new Array(0);
        mike = backup.bind(foxtrot)(zulu, mike);
        var _closure2_slot1 = mike;
        backup = foxtrot.useState;
        zulu = function() {
            zulu = _closure2_slot1;
            mike = undefined;
            entity = '';
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        kilo = backup.bind(foxtrot)(zulu);
        backup = _closure1_slot3;
        zulu = 2;
        backup = backup.bind(tango)(kilo, zulu);
        zulu = 0;
        zulu = backup[zulu];
        kilo = zulu.sections;
        sizing = zulu.persistedStores;
        var _closure2_slot2 = sizing;
        zulu = 1;
        zulu = backup[zulu];
        var _closure2_slot3 = zulu;
        backup = foxtrot.useCallback;
        zulu = new Array(2);
        zulu[0] = sizing;
        zulu[1] = mike;
        mike = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                var _closure3_slot0 = zulu;
                mike = _closure1_slot14;
                mike = mike.DATABASE_CONTROLS;
                if(!(mike !== tango)) { _fun00010_ip = 378; continue _fun00009 }
 32:
                mike = _closure1_slot14;
                mike = mike.DATABASE_CURRENT;
                if(!(mike !== tango)) { _fun00010_ip = 350; continue _fun00009 }
 49:
                mike = _closure1_slot14;
                mike = mike.PERSISTED_STORES;
                if(!(mike !== tango)) { _fun00010_ip = 67; continue _fun00009 }
 63:
                mike = null;
                return mike;
 67:
                tango = 0;
                if(!(tango !== zulu)) { _fun00010_ip = 248; continue _fun00009 }
 76:
                options = 1;
                if(!(options === zulu)) { _fun00010_ip = 99; continue _fun00009 }
 83:
                mike = _closure2_slot2;
                mike = mike.length;
                if(!(tango !== mike)) { _fun00010_ip = 194; continue _fun00009 }
 99:
                oscar = _closure1_slot8;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 8;
                mike = report[mike];
                report = undefined;
                mike = tango.bind(report)(mike);
                tango = mike.TableRow;
                mike = {};
                golf = _closure2_slot2;
                options = zulu - options;
                verify = golf[options];
                options = verify.getName;
                options = options.bind(verify)();
                mike['label'] = options;
                golf = golf.length;
                golf = zulu === golf;
                mike['end'] = golf;
                golf = function() { // Original name: onPress
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.openLazy;
                    mike = global;
                    tango = mike.Promise;
                    zulu = tango.resolve;
                    mike = {};
                    golf = _closure1_slot15;
                    mike['default'] = golf;
                    tango = zulu.bind(tango)(mike);
                    zulu = {};
                    golf = _closure2_slot2;
                    options = _closure3_slot0;
                    mike = 1;
                    mike = options - mike;
                    mike = golf[mike];
                    zulu['store'] = mike;
                    mike = function() { // Original name: close
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideActionSheet;
                        entity = 'DevToolsPersistedStoresActionSheet';
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu['close'] = mike;
                    mike = 'DevToolsPersistedStoresActionSheet';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                };
                mike['onPress'] = golf;
                mike = oscar.bind(report)(tango, mike);
                return mike;
 194:
                oscar = _closure1_slot8;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 8;
                mike = report[mike];
                report = undefined;
                mike = tango.bind(report)(mike);
                tango = mike.TableRow;
                mike = {'label': 'No results found.', 'end': true};
                mike = oscar.bind(report)(tango, mike);
                return mike;
 248:
                oscar = _closure1_slot8;
                options = _closure1_slot0;
                yankee = _closure1_slot2;
                mike = 8;
                mike = yankee[mike];
                report = undefined;
                mike = options.bind(report)(mike);
                tango = mike.TableRow;
                mike = {};
                verify = _closure1_slot8;
                golf = 17;
                golf = yankee[golf];
                golf = options.bind(report)(golf);
                options = golf.SearchField;
                golf = {};
                yankee = 'md';
                golf['size'] = yankee;
                offset = function(argFoo) { // Original name: onChange
                    zulu = _closure2_slot3;
                    tango = _closure2_slot1;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(entity);
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                golf['onChange'] = offset;
                golf = verify.bind(report)(options, golf);
                mike['label'] = golf;
                golf = true;
                mike['start'] = golf;
                mike = oscar.bind(report)(tango, mike);
                return mike;
 350:
                tango = 0;
                mike = null;
                if(!(tango === zulu)) { _fun00010_ip = 376; continue _fun00009 }
 358:
                golf = _closure1_slot8;
                oscar = _closure1_slot12;
                report = undefined;
                tango = {};
                mike = golf.bind(report)(oscar, tango);
 376:
                return mike;
 378:
                mike = 0;
                if(!(mike !== zulu)) { _fun00010_ip = 415; continue _fun00009 }
 384:
                mike = 1;
                if(!(mike !== zulu)) { _fun00010_ip = 395; continue _fun00009 }
 391:
                mike = null;
                return mike;
 395:
                report = _closure1_slot8;
                tango = _closure1_slot13;
                zulu = undefined;
                mike = {};
                mike = report.bind(zulu)(tango, mike);
                return mike;
 415:
                tango = _closure1_slot8;
                zulu = _closure1_slot11;
                mike = undefined;
                entity = {};
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            }
        };
        backup = backup.bind(foxtrot)(mike, zulu);
        zulu = foxtrot.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                golf = argFoo;
                tango = _closure1_slot8;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 19;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                report = _closure2_slot0;
                report = report.sectionHeader;
                entity['style'] = report;
                report = _closure1_slot14;
                options = report.DATABASE_CONTROLS;
                report = 'Database Controls';
                if(!(options !== golf)) { _fun00012_ip = 132; continue _fun00011 }
 90:
                options = _closure1_slot14;
                options = options.DATABASE_CURRENT;
                report = 'Database (Current)';
                if(!(options !== golf)) { _fun00012_ip = 132; continue _fun00011 }
 110:
                oscar = _closure1_slot14;
                oscar = oscar.PERSISTED_STORES;
                report = undefined;
                if(!(oscar === golf)) { _fun00012_ip = 132; continue _fun00011 }
 126:
                report = 'Persisted Stores';
 132:
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        foxtrot = zulu.bind(foxtrot)(entity, mike);
        zulu = _closure1_slot8;
        entity = 20;
        entity = verify[entity];
        mike = golf.bind(tango)(entity);
        entity = {};
        entity['sections'] = kilo;
        entity['renderItem'] = backup;
        entity['renderSectionHeader'] = foxtrot;
        foxtrot = romeo.bottom;
        romeo = 7;
        romeo = verify[romeo];
        romeo = golf.bind(tango)(romeo);
        romeo = romeo.spacing;
        romeo = romeo.PX_16;
        romeo = foxtrot + romeo;
        entity['insetEnd'] = romeo;
        entity['itemSize'] = yankee;
        entity['sectionHeaderSize'] = offset;
        offset = 'windowSize';
        entity['estimatedListSize'] = offset;
        entity['placeholderConfig'] = options;
        options = true;
        entity['wrapChildren'] = options;
        options = zulu.bind(tango)(mike, entity);
        zulu = _closure1_slot9;
        mike = _closure1_slot5;
        entity = {};
        report = report.container;
        entity['style'] = report;
        report = new Array(2);
        report[0] = options;
        options = _closure1_slot8;
        oscar = 21;
        oscar = verify[oscar];
        golf = golf.bind(tango)(oscar);
        oscar = {};
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();