// app/modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    report = tangon.AnalyticEvents;
    var _closure1_slot3 = report;
    tangon = tangon.ThemeTypes;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    yankee = tangon.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    tangon = tangon.REDESIGN_STANDARD_BACKGROUND_THEMES;
    report = 2;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.AnalyticsPremiumFeatureNames;
    var _closure1_slot5 = report;
    oscard = function(argFoo) { // Original name: trackClientThemeUpdated
        entity = argFoo;
        option = entity.isPersisted;
        golfie = entity.isSynced;
        verify = entity.themeName;
        oscard = entity.analyticsLocations;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot3;
        zuuluu = michal.CLIENT_THEME_UPDATED;
        michal = {};
        offset = _closure1_slot5;
        offset = offset.CLIENT_THEME;
        michal['feature_name'] = offset;
        michal['theme_name'] = verify;
        michal['is_persisted'] = option;
        michal['is_synced'] = golfie;
        michal['location_stack'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot6 = oscard;
    report = tangon.length;
    var _closure1_slot7 = report;
    offset = yankee.reduce;
    golfie = function(argFoo, argBar, argBaz) {
        entity = {};
        report = argFoo;
        oscard = entity;
        michal = copyDataProperties(oscard, report);
        michal = argBar;
        zuuluu = michal.id;
        tangon = _closure1_slot7;
        michal = argBaz;
        michal = michal + tangon;
        entity[zuuluu] = michal;
        return entity;
    };
    tangon = {};
    tangon = offset.bind(yankee)(golfie, tangon);
    var _closure1_slot8 = tangon;
    golfie = 7;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/user_settings/native/UserSettingsAppearanceThemeUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar, argBaz) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot6;
            entity = {};
            zuuluu = true;
            entity['isPersisted'] = zuuluu;
            zuuluu = argBaz;
            entity['isSynced'] = zuuluu;
            tangon = report.colors;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 77; continue _fun00001 }
 38:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 3;
            golfie = golfie[tangon];
            tangon = undefined;
            tangon = option.bind(tangon)(golfie);
            golfie = tangon.BackgroundGradientPresetId;
            tangon = report.id;
            tangon = golfie[tangon];
            _fun00002_ip = 106; continue _fun00001;
 77:
            verify = report.theme;
            golfie = global;
            golfie = golfie.HermesInternal;
            option = golfie.concat;
            golfie = 'default ';
            tangon = option.bind(golfie)(verify);
 106:
            entity['themeName'] = tangon;
            tangon = argBar;
            entity['analyticsLocations'] = tangon;
            tangon = undefined;
            entity = oscard.bind(tangon)(entity);
            oscard = report.theme;
            entity = _closure1_slot4;
            entity = entity.MIDNIGHT;
            if(!(oscard === entity)) { _fun00002_ip = 178; continue _fun00001 }
 145:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            golfie = oscard.bind(tangon)(entity);
            oscard = golfie.setShouldSyncAppearanceSettings;
            entity = false;
            entity = oscard.bind(golfie)(entity);
 178:
            oscard = report.theme;
            entity = 'system';
            if(!(entity !== oscard)) { _fun00002_ip = 282; continue _fun00001 }
 191:
            entity = report.colors;
            if(!(zuuluu != entity)) { _fun00002_ip = 282; continue _fun00001 }
 200:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            option = zuuluu.bind(tangon)(entity);
            golfie = option.updateBackgroundGradientPreset;
            entity = report.id;
            entity = golfie.bind(option)(entity);
            entity = 4;
            entity = oscard[entity];
            oscard = zuuluu.bind(tangon)(entity);
            zuuluu = oscard.saveClientTheme;
            entity = {};
            golfie = report.id;
            entity['backgroundGradientPresetId'] = golfie;
            golfie = report.theme;
            entity['theme'] = golfie;
            entity = zuuluu.bind(oscard)(entity);
            _fun00002_ip = 346; continue _fun00001;
 282:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 5;
            michal = oscard[michal];
            golfie = zuuluu.bind(tangon)(michal);
            michal = golfie.resetBackgroundGradientPreset;
            michal = michal.bind(golfie)();
            michal = 4;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.saveClientTheme;
            michal = {};
            report = report.theme;
            michal['theme'] = report;
            entity = zuuluu.bind(tangon)(michal);
 346:
            return entity;
        }
    };
    zuuluu['handleSaveTheme'] = golfie;
    zuuluu['trackClientThemeUpdated'] = oscard;
    zuuluu['STANDARD_BACKGROUND_THEME_BUFFER'] = report;
    zuuluu['PRESET_ID_TO_CAROUSEL_INDEX_MAP'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = argBaz;
            report = argCor;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 66; continue _fun00003 }
 17:
            zuuluu = 'system';
            oscard = argBar;
            if(oscard) { _fun00004_ip = 30; continue _fun00003 }
 27:
            zuuluu = report;
 30:
            var _closure2_slot0 = zuuluu;
            zuuluu = tangon.findIndex;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.theme;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 0;
            tangon = zuuluu >= michal;
            if(!tangon) { _fun00004_ip = 64; continue _fun00003 }
 61:
            michal = zuuluu;
 64:
            return michal;
 66:
            michal = _closure1_slot8;
            entity = entity.id;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['getUserThemeIndex'] = michal;
    return entity;
})();