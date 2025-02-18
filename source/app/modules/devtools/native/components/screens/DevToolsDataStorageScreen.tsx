// app/modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: DevToolsPersistedStoresActionSheet
        entity = argFoo;
        foxtra = entity.store;
        var _closure2_slot0 = foxtra;
        entity = entity.close;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot8;
        verify = _closure1_slot0;
        romeon = _closure1_slot2;
        entity = 22;
        entity = romeon[entity];
        zuuluu = undefined;
        entity = verify.bind(zuuluu)(entity);
        michal = entity.ActionSheet;
        entity = {};
        golfie = _closure1_slot8;
        report = 23;
        report = romeon[report];
        report = verify.bind(zuuluu)(report);
        oscard = report.BottomSheetTitleHeader;
        report = {};
        option = foxtra.getName;
        option = option.bind(foxtra)();
        report['title'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['header'] = report;
        golfie = _closure1_slot8;
        option = 24;
        report = romeon[option];
        report = verify.bind(zuuluu)(report);
        report = report.ActionSheetRow;
        oscard = report.Group;
        report = {};
        offset = _closure1_slot8;
        option = romeon[option];
        option = verify.bind(zuuluu)(option);
        verify = option.ActionSheetRow;
        option = {'variant': 'danger', 'label': 'Clear persisted store', 'subLabel': 'App restart required to re-init the cleared store'};
        yankee = function() { // Original name: onPress
            zuuluu = _closure2_slot0;
            entity = zuuluu.clear;
            entity = entity.bind(zuuluu)();
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 10;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.open;
            zuuluu = {'key': 'DevToolsPersistedStoresActionSheet', 'content': 'Store cleared from persisted storage'};
            zuuluu = tangon.bind(report)(zuuluu);
            michal = _closure2_slot1;
            michal = michal.bind(entity)();
            return entity;
        };
        option['onPress'] = yankee;
        option = offset.bind(zuuluu)(verify, option);
        report['children'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    offset = 0;
    tangon = oscard[offset];
    entity = undefined;
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    verify = 1;
    golfie = oscard[verify];
    tangon = argCor;
    yankee = tangon.bind(entity)(golfie);
    var _closure1_slot4 = yankee;
    option = 2;
    tangon = oscard[option];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PersistedStore;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    romeon = report.bind(entity)(tangon);
    golfie = romeon.createStyles;
    tangon = {};
    foxtra = {};
    backup = 7;
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BACKGROUND_PRIMARY;
    foxtra['backgroundColor'] = sizing;
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_12;
    foxtra['paddingHorizontal'] = sizing;
    foxtra['flex'] = verify;
    tangon['container'] = foxtra;
    foxtra = {'backgroundColor': null, 'verticalAlign': 'middle', 'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    backup = oscard[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    foxtra['backgroundColor'] = backup;
    tangon['sectionHeader'] = foxtra;
    tangon = golfie.bind(romeon)(tangon);
    var _closure1_slot10 = tangon;
    golfie = yankee.memo;
    tangon = function() {
        tangon = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.TableRow;
        entity = {'label': 'Disable Database', 'start': true};
        report = function() { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.database;
                report = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00002_ip = 103; continue _fun00001 }
 41:
                tangon = report.disable;
                zuuluu = 'via UserSettingsDatabaseControls';
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 10;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = {'key': 'disable_database', 'content': 'Database has been disabled.'};
                michal = zuuluu.bind(tangon)(michal);
 103:
                return entity;
            }
        };
        entity['onPress'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    tangon = golfie.bind(yankee)(tangon);
    var _closure1_slot11 = tangon;
    golfie = yankee.memo;
    tangon = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 11;
            zuuluu = report[zuuluu];
            tangon = undefined;
            option = michal.bind(tangon)(zuuluu);
            golfie = option.useStateFromStores;
            oscard = _closure1_slot1;
            zuuluu = 12;
            zuuluu = report[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            oscard = new Array(2);
            oscard[0] = zuuluu;
            zuuluu = _closure1_slot7;
            oscard[1] = zuuluu;
            zuuluu = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 12;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.database;
                tangon = _closure1_slot7;
                entity = tangon.getId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, zuuluu);
            zuuluu = _closure1_slot8;
            entity = 8;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {'label': null, 'start': true, 'end': true};
            report = null;
            option = report == oscard;
            golfie = 'No active database.';
            if(option) { _fun00004_ip = 129; continue _fun00003 }
 124:
            golfie = oscard.name;
 129:
            entity['label'] = golfie;
            golfie = report != oscard;
            report = undefined;
            if(!golfie) { _fun00004_ip = 174; continue _fun00003 }
 144:
            option = oscard.handle;
            oscard = global;
            oscard = oscard.HermesInternal;
            golfie = oscard.concat;
            oscard = 'Handle: ';
            report = golfie.bind(oscard)(option);
 174:
            entity['subLabel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = golfie.bind(yankee)(tangon);
    var _closure1_slot12 = tangon;
    golfie = yankee.memo;
    tangon = function() {
        tangon = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.TableRow;
        entity = {'label': 'Disable + Remove Database', 'end': true};
        report = function() { // Original name: onPress
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 12;
            michal = tangon[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.replaceDisableAllDatabases;
            michal = 'via UserSettingsDatabaseControls';
            michal = report.bind(oscard)(michal);
            michal = 10;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.open;
            michal = {'key': 'disable_database_and_remove', 'content': 'Database has been removed.'};
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['onPress'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    tangon = golfie.bind(yankee)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    tangon['DATABASE_CONTROLS'] = offset;
    golfie = 'DATABASE_CONTROLS';
    tangon[offset] = golfie;
    tangon['DATABASE_CURRENT'] = verify;
    golfie = 'DATABASE_CURRENT';
    tangon[verify] = golfie;
    tangon['PERSISTED_STORES'] = option;
    golfie = 'PERSISTED_STORES';
    tangon[option] = golfie;
    var _closure1_slot14 = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: DevToolsDataStorageScreen
        michal = _closure1_slot10;
        tangon = undefined;
        report = michal.bind(tangon)();
        var _closure2_slot0 = report;
        golfie = _closure1_slot1;
        verify = _closure1_slot2;
        michal = 13;
        michal = verify[michal];
        michal = golfie.bind(tangon)(michal);
        romeon = michal.bind(tangon)();
        michal = 14;
        michal = verify[michal];
        michal = golfie.bind(tangon)(michal);
        yankee = michal.bind(tangon)();
        michal = 15;
        michal = verify[michal];
        michal = golfie.bind(tangon)(michal);
        offset = michal.bind(tangon)();
        michal = 16;
        michal = verify[michal];
        michal = golfie.bind(tangon)(michal);
        option = michal.bind(tangon)();
        foxtra = _closure1_slot4;
        backup = foxtra.useCallback;
        zuuluu = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            entity = report.bind(entity)(michal);
            michal = entity.PersistedStore;
            entity = michal.getAll;
            report = entity.bind(michal)();
            michal = report.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot6;
                    entity = zuuluu instanceof entity;
                    if(!entity) { _fun00006_ip = 64; continue _fun00005 }
 17:
                    michal = zuuluu.getName;
                    zuuluu = michal.bind(zuuluu)();
                    michal = zuuluu.toLocaleLowerCase;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.includes;
                    report = _closure3_slot0;
                    michal = report.toLocaleLowerCase;
                    michal = michal.bind(report)();
                    entity = zuuluu.bind(tangon)(michal);
 64:
                    return entity;
                }
            };
            michal = michal.bind(report)(entity);
            var _closure3_slot1 = michal;
            entity = {};
            tangon = _closure1_slot14;
            oscard = tangon.DATABASE_CONTROLS;
            report = new Array(3);
            report[0] = oscard;
            oscard = tangon.DATABASE_CURRENT;
            report[1] = oscard;
            tangon = tangon.PERSISTED_STORES;
            report[2] = tangon;
            tangon = report.map;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.DATABASE_CONTROLS;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 99; continue _fun00007 }
 20:
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.DATABASE_CURRENT;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 94; continue _fun00007 }
 34:
                    entity = _closure1_slot14;
                    entity = entity.PERSISTED_STORES;
                    if(!(entity !== michal)) { _fun00008_ip = 52; continue _fun00007 }
 48:
                    entity = undefined;
                    return entity;
 52:
                    entity = _closure3_slot1;
                    michal = entity.length;
                    entity = 0;
                    tangon = michal > entity;
                    michal = 1;
                    entity = michal;
                    if(!tangon) { _fun00008_ip = 88; continue _fun00007 }
 79:
                    zuuluu = _closure3_slot1;
                    entity = zuuluu.length;
 88:
                    entity = michal + entity;
                    return entity;
 94:
                    entity = 1;
                    return entity;
 99:
                    entity = 2;
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            entity['sections'] = zuuluu;
            entity['persistedStores'] = michal;
            return entity;
        };
        michal = new Array(0);
        michal = backup.bind(foxtra)(zuuluu, michal);
        var _closure2_slot1 = michal;
        backup = foxtra.useState;
        zuuluu = function() {
            zuuluu = _closure2_slot1;
            michal = undefined;
            entity = '';
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        kiloes = backup.bind(foxtra)(zuuluu);
        backup = _closure1_slot3;
        zuuluu = 2;
        backup = backup.bind(tangon)(kiloes, zuuluu);
        zuuluu = 0;
        zuuluu = backup[zuuluu];
        kiloes = zuuluu.sections;
        sizing = zuuluu.persistedStores;
        var _closure2_slot2 = sizing;
        zuuluu = 1;
        zuuluu = backup[zuuluu];
        var _closure2_slot3 = zuuluu;
        backup = foxtra.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = sizing;
        zuuluu[1] = michal;
        michal = function(argFoo, argBar) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                var _closure3_slot0 = zuuluu;
                michal = _closure1_slot14;
                michal = michal.DATABASE_CONTROLS;
                if(!(michal !== tangon)) { _fun00010_ip = 378; continue _fun00009 }
 32:
                michal = _closure1_slot14;
                michal = michal.DATABASE_CURRENT;
                if(!(michal !== tangon)) { _fun00010_ip = 350; continue _fun00009 }
 49:
                michal = _closure1_slot14;
                michal = michal.PERSISTED_STORES;
                if(!(michal !== tangon)) { _fun00010_ip = 67; continue _fun00009 }
 63:
                michal = null;
                return michal;
 67:
                tangon = 0;
                if(!(tangon !== zuuluu)) { _fun00010_ip = 248; continue _fun00009 }
 76:
                option = 1;
                if(!(option === zuuluu)) { _fun00010_ip = 99; continue _fun00009 }
 83:
                michal = _closure2_slot2;
                michal = michal.length;
                if(!(tangon !== michal)) { _fun00010_ip = 194; continue _fun00009 }
 99:
                oscard = _closure1_slot8;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 8;
                michal = report[michal];
                report = undefined;
                michal = tangon.bind(report)(michal);
                tangon = michal.TableRow;
                michal = {};
                golfie = _closure2_slot2;
                option = zuuluu - option;
                verify = golfie[option];
                option = verify.getName;
                option = option.bind(verify)();
                michal['label'] = option;
                golfie = golfie.length;
                golfie = zuuluu === golfie;
                michal['end'] = golfie;
                golfie = function() { // Original name: onPress
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.openLazy;
                    michal = global;
                    tangon = michal.Promise;
                    zuuluu = tangon.resolve;
                    michal = {};
                    golfie = _closure1_slot15;
                    michal['default'] = golfie;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = {};
                    golfie = _closure2_slot2;
                    option = _closure3_slot0;
                    michal = 1;
                    michal = option - michal;
                    michal = golfie[michal];
                    zuuluu['store'] = michal;
                    michal = function() { // Original name: close
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 18;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hideActionSheet;
                        entity = 'DevToolsPersistedStoresActionSheet';
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu['close'] = michal;
                    michal = 'DevToolsPersistedStoresActionSheet';
                    michal = report.bind(oscard)(tangon, michal, zuuluu);
                    return entity;
                };
                michal['onPress'] = golfie;
                michal = oscard.bind(report)(tangon, michal);
                return michal;
 194:
                oscard = _closure1_slot8;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                michal = 8;
                michal = report[michal];
                report = undefined;
                michal = tangon.bind(report)(michal);
                tangon = michal.TableRow;
                michal = {'label': 'No results found.', 'end': true};
                michal = oscard.bind(report)(tangon, michal);
                return michal;
 248:
                oscard = _closure1_slot8;
                option = _closure1_slot0;
                yankee = _closure1_slot2;
                michal = 8;
                michal = yankee[michal];
                report = undefined;
                michal = option.bind(report)(michal);
                tangon = michal.TableRow;
                michal = {};
                verify = _closure1_slot8;
                golfie = 17;
                golfie = yankee[golfie];
                golfie = option.bind(report)(golfie);
                option = golfie.SearchField;
                golfie = {};
                yankee = 'md';
                golfie['size'] = yankee;
                offset = function(argFoo) { // Original name: onChange
                    zuuluu = _closure2_slot3;
                    tangon = _closure2_slot1;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(entity);
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                golfie['onChange'] = offset;
                golfie = verify.bind(report)(option, golfie);
                michal['label'] = golfie;
                golfie = true;
                michal['start'] = golfie;
                michal = oscard.bind(report)(tangon, michal);
                return michal;
 350:
                tangon = 0;
                michal = null;
                if(!(tangon === zuuluu)) { _fun00010_ip = 376; continue _fun00009 }
 358:
                golfie = _closure1_slot8;
                oscard = _closure1_slot12;
                report = undefined;
                tangon = {};
                michal = golfie.bind(report)(oscard, tangon);
 376:
                return michal;
 378:
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00010_ip = 415; continue _fun00009 }
 384:
                michal = 1;
                if(!(michal !== zuuluu)) { _fun00010_ip = 395; continue _fun00009 }
 391:
                michal = null;
                return michal;
 395:
                report = _closure1_slot8;
                tangon = _closure1_slot13;
                zuuluu = undefined;
                michal = {};
                michal = report.bind(zuuluu)(tangon, michal);
                return michal;
 415:
                tangon = _closure1_slot8;
                zuuluu = _closure1_slot11;
                michal = undefined;
                entity = {};
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            }
        };
        backup = backup.bind(foxtra)(michal, zuuluu);
        zuuluu = foxtra.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                golfie = argFoo;
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 19;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                report = _closure2_slot0;
                report = report.sectionHeader;
                entity['style'] = report;
                report = _closure1_slot14;
                option = report.DATABASE_CONTROLS;
                report = 'Database Controls';
                if(!(option !== golfie)) { _fun00012_ip = 132; continue _fun00011 }
 90:
                option = _closure1_slot14;
                option = option.DATABASE_CURRENT;
                report = 'Database (Current)';
                if(!(option !== golfie)) { _fun00012_ip = 132; continue _fun00011 }
 110:
                oscard = _closure1_slot14;
                oscard = oscard.PERSISTED_STORES;
                report = undefined;
                if(!(oscard === golfie)) { _fun00012_ip = 132; continue _fun00011 }
 126:
                report = 'Persisted Stores';
 132:
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        foxtra = zuuluu.bind(foxtra)(entity, michal);
        zuuluu = _closure1_slot8;
        entity = 20;
        entity = verify[entity];
        michal = golfie.bind(tangon)(entity);
        entity = {};
        entity['sections'] = kiloes;
        entity['renderItem'] = backup;
        entity['renderSectionHeader'] = foxtra;
        foxtra = romeon.bottom;
        romeon = 7;
        romeon = verify[romeon];
        romeon = golfie.bind(tangon)(romeon);
        romeon = romeon.spacing;
        romeon = romeon.PX_16;
        romeon = foxtra + romeon;
        entity['insetEnd'] = romeon;
        entity['itemSize'] = yankee;
        entity['sectionHeaderSize'] = offset;
        offset = 'windowSize';
        entity['estimatedListSize'] = offset;
        entity['placeholderConfig'] = option;
        option = true;
        entity['wrapChildren'] = option;
        option = zuuluu.bind(tangon)(michal, entity);
        zuuluu = _closure1_slot9;
        michal = _closure1_slot5;
        entity = {};
        report = report.container;
        entity['style'] = report;
        report = new Array(2);
        report[0] = option;
        option = _closure1_slot8;
        oscard = 21;
        oscard = verify[oscard];
        golfie = golfie.bind(tangon)(oscard);
        oscard = {};
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();