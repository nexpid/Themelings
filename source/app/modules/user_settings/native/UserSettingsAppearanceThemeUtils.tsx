// app/modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    report = tango.AnalyticEvents;
    var _closure1_slot3 = report;
    tango = tango.ThemeTypes;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    yankee = tango.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    tango = tango.REDESIGN_STANDARD_BACKGROUND_THEMES;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.AnalyticsPremiumFeatureNames;
    var _closure1_slot5 = report;
    oscar = function(argFoo) { // Original name: trackClientThemeUpdated
        entity = argFoo;
        options = entity.isPersisted;
        golf = entity.isSynced;
        verify = entity.themeName;
        oscar = entity.analyticsLocations;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot3;
        zulu = mike.CLIENT_THEME_UPDATED;
        mike = {};
        offset = _closure1_slot5;
        offset = offset.CLIENT_THEME;
        mike['feature_name'] = offset;
        mike['theme_name'] = verify;
        mike['is_persisted'] = options;
        mike['is_synced'] = golf;
        mike['location_stack'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot6 = oscar;
    report = tango.length;
    var _closure1_slot7 = report;
    offset = yankee.reduce;
    golf = function(argFoo, argBar, argBaz) {
        entity = {};
        report = argFoo;
        oscar = entity;
        mike = copyDataProperties(oscar, report);
        mike = argBar;
        zulu = mike.id;
        tango = _closure1_slot7;
        mike = argBaz;
        mike = mike + tango;
        entity[zulu] = mike;
        return entity;
    };
    tango = {};
    tango = offset.bind(yankee)(golf, tango);
    var _closure1_slot8 = tango;
    golf = 7;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar, argBaz) {
        _fun97200: for(var _fun97200_ip = 0; ; ) switch(_fun97200_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot6;
            entity = {};
            zulu = true;
            entity['isPersisted'] = zulu;
            zulu = argBaz;
            entity['isSynced'] = zulu;
            tango = report.colors;
            zulu = null;
            if(!(zulu != tango)) { _fun97200_ip = 77; continue _fun97200 }
 38:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 3;
            golf = golf[tango];
            tango = undefined;
            tango = options.bind(tango)(golf);
            golf = tango.BackgroundGradientPresetId;
            tango = report.id;
            tango = golf[tango];
            _fun97200_ip = 107; continue _fun97200;
 77:
            verify = report.theme;
            golf = global;
            golf = golf.HermesInternal;
            options = golf.concat;
            golf = 'default ';
            tango = options.bind(golf)(verify);
 107:
            entity['themeName'] = tango;
            tango = argBar;
            entity['analyticsLocations'] = tango;
            tango = undefined;
            entity = oscar.bind(tango)(entity);
            oscar = report.theme;
            entity = _closure1_slot4;
            entity = entity.MIDNIGHT;
            if(!(oscar === entity)) { _fun97200_ip = 180; continue _fun97200 }
 147:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 4;
            entity = golf[entity];
            golf = oscar.bind(tango)(entity);
            oscar = golf.setShouldSyncAppearanceSettings;
            entity = false;
            entity = oscar.bind(golf)(entity);
 180:
            oscar = report.theme;
            entity = 'system';
            if(!(entity !== oscar)) { _fun97200_ip = 287; continue _fun97200 }
 194:
            entity = report.colors;
            if(!(zulu != entity)) { _fun97200_ip = 287; continue _fun97200 }
 203:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            options = zulu.bind(tango)(entity);
            golf = options.updateBackgroundGradientPreset;
            entity = report.id;
            entity = golf.bind(options)(entity);
            entity = 4;
            entity = oscar[entity];
            oscar = zulu.bind(tango)(entity);
            zulu = oscar.saveClientTheme;
            entity = {};
            golf = report.id;
            entity['backgroundGradientPresetId'] = golf;
            golf = report.theme;
            entity['theme'] = golf;
            entity = zulu.bind(oscar)(entity);
            _fun97200_ip = 353; continue _fun97200;
 287:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 5;
            mike = oscar[mike];
            golf = zulu.bind(tango)(mike);
            mike = golf.resetBackgroundGradientPreset;
            mike = mike.bind(golf)();
            mike = 4;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.saveClientTheme;
            mike = {};
            report = report.theme;
            mike['theme'] = report;
            entity = zulu.bind(tango)(mike);
 353:
            return entity;
        }
    };
    zulu['handleSaveTheme'] = golf;
    zulu['trackClientThemeUpdated'] = oscar;
    zulu['STANDARD_BACKGROUND_THEME_BUFFER'] = report;
    zulu['PRESET_ID_TO_CAROUSEL_INDEX_MAP'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) {
        _fun97201: for(var _fun97201_ip = 0; ; ) switch(_fun97201_ip) {
 0:
            entity = argFoo;
            tango = argBaz;
            report = argCorge;
            zulu = null;
            if(!(zulu == entity)) { _fun97201_ip = 66; continue _fun97201 }
 17:
            zulu = 'system';
            oscar = argBar;
            if(oscar) { _fun97201_ip = 30; continue _fun97201 }
 27:
            zulu = report;
 30:
            var _closure2_slot0 = zulu;
            zulu = tango.findIndex;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.theme;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = 0;
            tango = zulu >= mike;
            if(!tango) { _fun97201_ip = 64; continue _fun97201 }
 61:
            mike = zulu;
 64:
            return mike;
 66:
            mike = _closure1_slot8;
            entity = entity.id;
            entity = mike[entity];
            return entity;
        }
    };
    zulu['getUserThemeIndex'] = mike;
    return entity;
})();