// app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            entity = zuuluu[entity];
            report = undefined;
            option = golfie.bind(report)(entity);
            oscard = option.useStateFromStoresObject;
            entity = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure1_slot2;
                    entity = entity.settings;
                    report = entity.textAndImages;
                    zuuluu = null;
                    oscard = zuuluu == report;
                    tangon = undefined;
                    entity = undefined;
                    if(oscard) { _fun00004_ip = 38; continue _fun00003 }
 32:
                    entity = report.explicitContentSettings;
 38:
                    if(!(zuuluu == entity)) { _fun00004_ip = 72; continue _fun00003 }
 42:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot1;
                    michal = 2;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.getExplicitContentSettingOrDefault;
                    entity = michal.bind(zuuluu)();
 72:
                    return entity;
                }
            };
            oscard = oscard.bind(option)(tangon, entity);
            entity = {};
            tangon = 2;
            zuuluu = zuuluu[tangon];
            verify = golfie.bind(report)(zuuluu);
            option = verify.resolveSettingWithDefaults;
            zuuluu = {};
            golfie = null;
            yankee = golfie == oscard;
            offset = undefined;
            if(yankee) { _fun00002_ip = 95; continue _fun00001 }
 89:
            offset = oscard.explicitContentGuilds;
 95:
            zuuluu['setting'] = offset;
            zuuluu = option.bind(verify)(zuuluu);
            entity['explicitContentGuilds'] = zuuluu;
            option = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[tangon];
            verify = option.bind(report)(zuuluu);
            option = verify.resolveSettingWithDefaults;
            zuuluu = {};
            yankee = golfie == oscard;
            offset = undefined;
            if(yankee) { _fun00002_ip = 150; continue _fun00001 }
 144:
            offset = oscard.explicitContentNonFriendDm;
 150:
            zuuluu['setting'] = offset;
            offset = true;
            zuuluu['isDm'] = offset;
            zuuluu = option.bind(verify)(zuuluu);
            entity['explicitContentNonFriendDm'] = zuuluu;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[tangon];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.resolveSettingWithDefaults;
            michal = {'setting': null, 'isDm': true, 'isFriend': true};
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 220; continue _fun00001 }
 214:
            report = oscard.explicitContentFriendDm;
 220:
            michal['setting'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['explicitContentFriendDm'] = michal;
            return entity;
        }
    };
    zuuluu['useExplicitContentSettingOrDefault'] = michal;
    return entity;
})();