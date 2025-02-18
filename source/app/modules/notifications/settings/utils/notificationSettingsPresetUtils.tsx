// app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.UserNotificationSettings;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot3 = tangon;
    tangon = {};
    report = 'all_messages';
    tangon['ALL_MESSAGES'] = report;
    report = 'mentions';
    tangon['MENTIONS'] = report;
    report = 'nothing';
    tangon['NOTHING'] = report;
    report = 'custom';
    tangon['CUSTOM'] = report;
    var _closure1_slot4 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['Presets'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: presetFromSettings
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.match;
        zuuluu = new Array(2);
        oscard = argBar;
        zuuluu[0] = oscard;
        oscard = argFoo;
        zuuluu[1] = oscard;
        golfie = tangon.bind(report)(zuuluu);
        oscard = golfie.with;
        zuuluu = _closure1_slot2;
        tangon = zuuluu.ALL_MESSAGES;
        report = new Array(2);
        report[0] = tangon;
        michal = _closure1_slot3;
        tangon = michal.ALL_MESSAGES;
        report[1] = tangon;
        tangon = function() {
            entity = _closure1_slot4;
            entity = entity.ALL_MESSAGES;
            return entity;
        };
        golfie = oscard.bind(golfie)(report, tangon);
        oscard = golfie.with;
        tangon = zuuluu.ONLY_MENTIONS;
        report = new Array(2);
        report[0] = tangon;
        tangon = michal.UNSET;
        report[1] = tangon;
        tangon = function() {
            entity = _closure1_slot4;
            entity = entity.MENTIONS;
            return entity;
        };
        golfie = oscard.bind(golfie)(report, tangon);
        oscard = golfie.with;
        tangon = zuuluu.ONLY_MENTIONS;
        report = new Array(2);
        report[0] = tangon;
        tangon = michal.ONLY_MENTIONS;
        report[1] = tangon;
        tangon = function() {
            entity = _closure1_slot4;
            entity = entity.MENTIONS;
            return entity;
        };
        golfie = oscard.bind(golfie)(report, tangon);
        oscard = golfie.with;
        tangon = zuuluu.NO_MESSAGES;
        report = new Array(2);
        report[0] = tangon;
        tangon = michal.UNSET;
        report[1] = tangon;
        tangon = function() {
            entity = _closure1_slot4;
            entity = entity.NOTHING;
            return entity;
        };
        report = oscard.bind(golfie)(report, tangon);
        tangon = report.with;
        oscard = zuuluu.NO_MESSAGES;
        zuuluu = new Array(2);
        zuuluu[0] = oscard;
        michal = michal.ONLY_MENTIONS;
        zuuluu[1] = michal;
        michal = function() {
            entity = _closure1_slot4;
            entity = entity.NOTHING;
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu, michal);
        michal = zuuluu.otherwise;
        entity = function() {
            entity = _closure1_slot4;
            entity = entity.CUSTOM;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['presetFromSettings'] = tangon;
    tangon = function(argFoo) { // Original name: presetName
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.match;
        zuuluu = argFoo;
        oscard = tangon.bind(report)(zuuluu);
        report = oscard.with;
        michal = _closure1_slot4;
        tangon = michal.ALL_MESSAGES;
        zuuluu = function() {
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.hZrr6u;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = report.bind(oscard)(tangon, zuuluu);
        report = oscard.with;
        tangon = michal.MENTIONS;
        zuuluu = function() {
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.y59NJi;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = report.bind(oscard)(tangon, zuuluu);
        report = oscard.with;
        tangon = michal.NOTHING;
        zuuluu = function() {
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.pGn/bG;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon = report.bind(oscard)(tangon, zuuluu);
        zuuluu = tangon.with;
        michal = michal.CUSTOM;
        entity = function() {
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.32yow8;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = michal.exhaustive;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['presetName'] = tangon;
    michal = function(argFoo, argBar) { // Original name: arePresetSettingsUnset
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00002_ip = 32; continue _fun00001 }
 15:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.UNSET;
            entity = report !== zuuluu;
 32:
            if(entity) { _fun00002_ip = 62; continue _fun00001 }
 35:
            michal = michal != tangon;
            if(!michal) { _fun00002_ip = 59; continue _fun00001 }
 42:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.NULL;
            michal = tangon !== zuuluu;
 59:
            entity = michal;
 62:
            entity = !entity;
            return entity;
        }
    };
    zuuluu['arePresetSettingsUnset'] = michal;
    return entity;
})();