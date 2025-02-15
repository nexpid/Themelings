// app/modules/user_settings/native/UserSettingsConnections.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityIndicator;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticsLocations;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['flex'] = verify;
    verify = {};
    offset = 7;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    offset = 12;
    verify['paddingTop'] = offset;
    tango['form'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/UserSettingsConnections.tsx';
    tango = report.bind(oscar)(tango);
    tango = -1;
    zulu['ADD_CONNECTIONS_SHEET_SENTINEL'] = tango;
    mike = function(argFoo) { // Original name: UserSettingsConnections
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            options = entity.selectedPlatformType;
            var _closure2_slot0 = options;
            zulu = _closure1_slot9;
            tango = undefined;
            report = zulu.bind(tango)();
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 8;
            zulu = golf[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            var _closure2_slot1 = zulu;
            oscar = _closure1_slot0;
            zulu = 9;
            verify = golf[zulu];
            romeo = oscar.bind(tango)(verify);
            yankee = romeo.useStateFromStores;
            verify = _closure1_slot6;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            verify = yankee.bind(romeo)(offset, verify);
            var _closure2_slot2 = verify;
            yankee = _closure1_slot3;
            romeo = yankee.useEffect;
            offset = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetch;
                mike = mike.bind(zulu)();
                return entity;
            };
            verify = new Array(0);
            verify = romeo.bind(yankee)(offset, verify);
            offset = yankee.useEffect;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    if(!(entity != mike)) { _fun00004_ip = 164; continue _fun00003 }
 16:
                    mike = _closure2_slot0;
                    entity = -1;
                    if(!(entity !== mike)) { _fun00004_ip = 87; continue _fun00003 }
 30:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 14;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure2_slot0;
                    entity['platformType'] = report;
                    tango = _closure1_slot7;
                    tango = tango.USER_SETTINGS;
                    entity['location'] = tango;
                    entity = mike.bind(zulu)(entity);
                    _fun00004_ip = 164; continue _fun00003;
 87:
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 11;
                    zulu = entity[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.openLazy;
                    report = _closure1_slot0;
                    mike = 13;
                    mike = entity[mike];
                    report = report.bind(oscar)(mike);
                    mike = 12;
                    mike = entity[mike];
                    entity = entity.paths;
                    mike = report.bind(oscar)(mike, entity);
                    entity = 'AddConnection';
                    entity = zulu.bind(tango)(mike, entity);
 164:
                    entity = undefined;
                    return entity;
                }
            };
            options = offset.bind(yankee)(options, verify);
            zulu = golf[zulu];
            options = oscar.bind(tango)(zulu);
            golf = options.useStateFromStoresObject;
            zulu = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                entity = {};
                zulu = _closure1_slot5;
                mike = zulu.isFetching;
                mike = mike.bind(zulu)();
                entity['fetching'] = mike;
                mike = zulu.getAccounts;
                mike = mike.bind(zulu)();
                entity['accounts'] = mike;
                return entity;
            };
            oscar = golf.bind(options)(oscar, zulu);
            zulu = oscar.fetching;
            oscar = oscar.accounts;
            if(zulu) { _fun00002_ip = 329; continue _fun00001 }
 213:
            golf = oscar.length;
            zulu = 0;
            if(!(zulu !== golf)) { _fun00002_ip = 295; continue _fun00001 }
 224:
            zulu = oscar.map;
            mike = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot8;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 16;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                golf = _closure2_slot1;
                mike['theme'] = golf;
                oscar = _closure2_slot2;
                mike['locale'] = oscar;
                mike['account'] = entity;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            golf = zulu.bind(oscar)(mike);
            oscar = _closure1_slot8;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 17;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.Form;
            mike = {};
            options = report.form;
            mike['style'] = options;
            mike['children'] = golf;
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 295:
            oscar = _closure1_slot8;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 15;
            mike = golf[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike = oscar.bind(tango)(zulu, mike);
            return mike;
 329:
            zulu = _closure1_slot8;
            mike = _closure1_slot4;
            entity = {};
            report = report.flex;
            entity['style'] = report;
            report = 'large';
            entity['size'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['UserSettingsConnections'] = mike;
    return entity;
})();