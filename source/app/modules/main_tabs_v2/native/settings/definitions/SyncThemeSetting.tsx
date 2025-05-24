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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ThemeTypes;
    var _closure1_slot7 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 8;
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
        michal = 10;
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
        entity = 11;
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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 7;
            zuuluu = entity[zuuluu];
            golfie = undefined;
            zuuluu = option.bind(golfie)(zuuluu);
            oscard = zuuluu.ClientThemeColorPickerExperiment;
            report = oscard.useExperiment;
            tangon = {};
            zuuluu = 'SyncThemeSetting';
            tangon['location'] = zuuluu;
            zuuluu = {};
            verify = false;
            zuuluu['autoTrackExposure'] = verify;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            tangon = zuuluu.enabled;
            zuuluu = 8;
            report = entity[zuuluu];
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            entity = entity[zuuluu];
            entity = option.bind(golfie)(entity);
            entity = entity.t;
            entity = entity.GAlmIS;
            report = report.bind(oscard)(entity);
            entity = report.trim;
            oscard = entity.bind(report)();
            entity = oscard;
            if(!tangon) { _fun00002_ip = 220; continue _fun00001 }
 134:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            report = _closure1_slot1;
            michal = 9;
            michal = option[michal];
            michal = report.bind(golfie)(michal);
            michal = michal.xRdYAQ;
            report = zuuluu.bind(tangon)(michal);
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '\n\n';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 220:
            return entity;
        }
    };
    michal['useDescription'] = golfie;
    tangon = function() { // Original name: useIsSyncThemeAcrossClientsDisabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = 10;
            report = tangon[oscard];
            option = undefined;
            offset = michal.bind(option)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                entity = _closure1_slot5;
                entity = entity.theme;
                return entity;
            };
            report = verify.bind(offset)(golfie, report);
            oscard = tangon[oscard];
            verify = michal.bind(option)(oscard);
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
            entity = 12;
            entity = tangon[entity];
            michal = michal.bind(option)(entity);
            entity = michal.getMobileThemesPresets;
            oscard = entity.bind(michal)();
            michal = null;
            entity = michal != golfie;
            tangon = null;
            if(!entity) { _fun00004_ip = 159; continue _fun00003 }
 129:
            verify = michal == oscard;
            entity = undefined;
            if(verify) { _fun00004_ip = 156; continue _fun00003 }
 138:
            oscard = oscard[golfie];
            golfie = michal == oscard;
            entity = undefined;
            if(golfie) { _fun00004_ip = 156; continue _fun00003 }
 151:
            entity = oscard.theme;
 156:
            tangon = entity;
 159:
            entity = _closure1_slot6;
            oscard = entity.settings;
            golfie = michal == oscard;
            entity = undefined;
            if(golfie) { _fun00004_ip = 214; continue _fun00003 }
 178:
            oscard = oscard.appearance;
            golfie = michal == oscard;
            entity = undefined;
            if(golfie) { _fun00004_ip = 214; continue _fun00003 }
 193:
            oscard = oscard.clientThemeSettings;
            golfie = michal == oscard;
            entity = undefined;
            if(golfie) { _fun00004_ip = 214; continue _fun00003 }
 208:
            entity = oscard.customUserThemeSettings;
 214:
            oscard = michal == entity;
            entity = !oscard;
            if(!oscard) { _fun00004_ip = 261; continue _fun00003 }
 224:
            if(!(michal == tangon)) { _fun00004_ip = 244; continue _fun00003 }
 228:
            michal = _closure1_slot7;
            michal = michal.MIDNIGHT;
            michal = report === michal;
            _fun00004_ip = 258; continue _fun00003;
 244:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.MIDNIGHT;
            michal = tangon === zuuluu;
 258:
            entity = michal;
 261:
            return entity;
        }
    };
    michal['useIsDisabled'] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SyncThemeSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();