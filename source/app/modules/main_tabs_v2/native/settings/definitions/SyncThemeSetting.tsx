// app/modules/main_tabs_v2/native/settings/definitions/SyncThemeSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.MobileSetting;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.RendererType;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ThemeTypes;
    var _closure1_slot6 = mike;
    mike = {};
    options = options.TOGGLE;
    mike['type'] = options;
    options = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.3340dX;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = options;
    golf = golf.APPEARANCE;
    mike['parent'] = golf;
    golf = function() { // Original name: useSyncThemeAcrossClientsValue
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 7;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot4;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.shouldSync;
            entity = 'appearance';
            mike = mike.bind(zulu)(entity);
            entity = false;
            entity = entity !== mike;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useValue'] = golf;
    golf = function(argFoo) { // Original name: onSyncThemeAcrossClientsValueChange
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.setShouldSyncAppearanceSettings;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['onValueChange'] = golf;
    golf = function() { // Original name: useSyncThemeAcrossClientsDescription
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.GAlmIS;
        mike = mike.bind(zulu)(entity);
        entity = mike.trim;
        entity = entity.bind(mike)();
        return entity;
    };
    mike['useDescription'] = golf;
    tango = function() { // Original name: useIsSyncThemeAcrossClientsDisabled
        _fun97325: for(var _fun97325_ip = 0; ; ) switch(_fun97325_ip) {
 0:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            oscar = 7;
            tango = report[oscar];
            options = undefined;
            offset = zulu.bind(options)(tango);
            verify = offset.useStateFromStores;
            tango = _closure1_slot5;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                entity = _closure1_slot5;
                entity = entity.theme;
                return entity;
            };
            tango = verify.bind(offset)(golf, tango);
            oscar = report[oscar];
            verify = zulu.bind(options)(oscar);
            golf = verify.useStateFromStores;
            offset = _closure1_slot3;
            oscar = new Array(1);
            oscar[0] = offset;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.mobilePendingThemeIndex;
                return entity;
            };
            golf = golf.bind(verify)(oscar, entity);
            entity = 9;
            entity = report[entity];
            zulu = zulu.bind(options)(entity);
            entity = zulu.getMobileThemesPresets;
            oscar = entity.bind(zulu)();
            entity = null;
            report = entity != golf;
            zulu = null;
            if(!report) { _fun97325_ip = 160; continue _fun97325 }
 129:
            verify = entity == oscar;
            report = undefined;
            if(verify) { _fun97325_ip = 157; continue _fun97325 }
 138:
            oscar = oscar[golf];
            golf = entity == oscar;
            report = undefined;
            if(golf) { _fun97325_ip = 157; continue _fun97325 }
 151:
            report = oscar.theme;
 157:
            zulu = report;
 160:
            if(!(entity == zulu)) { _fun97325_ip = 180; continue _fun97325 }
 164:
            entity = _closure1_slot6;
            entity = entity.MIDNIGHT;
            entity = tango === entity;
            _fun97325_ip = 194; continue _fun97325;
 180:
            mike = _closure1_slot6;
            mike = mike.MIDNIGHT;
            entity = zulu === mike;
 194:
            return entity;
        }
    };
    mike['useIsDisabled'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/SyncThemeSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();