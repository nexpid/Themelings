// app/modules/main_tabs_v2/native/settings/definitions/SyncThemeSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ThemeTypes;
    var _closure1_slot6 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.3340dX;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.APPEARANCE;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useSyncThemeAcrossClientsValue
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 7;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot4;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.shouldSync;
            entity = 'appearance';
            michal = michal.bind(zuuluu)(entity);
            entity = false;
            entity = entity !== michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onSyncThemeAcrossClientsValueChange
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.setShouldSyncAppearanceSettings;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onValueChange'] = golfie;
    golfie = function() { // Original name: useSyncThemeAcrossClientsDescription
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.GAlmIS;
        michal = michal.bind(zuuluu)(entity);
        entity = michal.trim;
        entity = entity.bind(michal)();
        return entity;
    };
    michal['useDescription'] = golfie;
    tangon = function() { // Original name: useIsSyncThemeAcrossClientsDisabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            oscard = 7;
            tangon = report[oscard];
            option = undefined;
            offset = zuuluu.bind(option)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                entity = _closure1_slot5;
                entity = entity.theme;
                return entity;
            };
            tangon = verify.bind(offset)(golfie, tangon);
            oscard = report[oscard];
            verify = zuuluu.bind(option)(oscard);
            golfie = verify.useStateFromStores;
            offset = _closure1_slot3;
            oscard = new Array(1);
            oscard[0] = offset;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.mobilePendingThemeIndex;
                return entity;
            };
            golfie = golfie.bind(verify)(oscard, entity);
            entity = 9;
            entity = report[entity];
            zuuluu = zuuluu.bind(option)(entity);
            entity = zuuluu.getMobileThemesPresets;
            oscard = entity.bind(zuuluu)();
            entity = null;
            report = entity != golfie;
            zuuluu = null;
            if(!report) { _fun00002_ip = 159; continue _fun00001 }
 129:
            verify = entity == oscard;
            report = undefined;
            if(verify) { _fun00002_ip = 156; continue _fun00001 }
 138:
            oscard = oscard[golfie];
            golfie = entity == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 156; continue _fun00001 }
 151:
            report = oscard.theme;
 156:
            zuuluu = report;
 159:
            if(!(entity == zuuluu)) { _fun00002_ip = 179; continue _fun00001 }
 163:
            entity = _closure1_slot6;
            entity = entity.MIDNIGHT;
            entity = tangon === entity;
            _fun00002_ip = 193; continue _fun00001;
 179:
            michal = _closure1_slot6;
            michal = michal.MIDNIGHT;
            entity = zuuluu === michal;
 193:
            return entity;
        }
    };
    michal['useIsDisabled'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SyncThemeSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();