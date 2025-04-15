// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = golfie;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    verify = true;
    michal['value'] = verify;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    option = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.useSelectedSearchResult;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.getSelectedGuildId;
    var _closure1_slot5 = option;
    option = michal.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = option;
    option = michal.setSelectedGuildId;
    var _closure1_slot7 = option;
    michal = michal.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot8 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    offset = michal.RendererType;
    tangon = option.GUILD_SETTING_ACTIVITY_STATUS;
    michal = new Array(2);
    michal[0] = tangon;
    tangon = option.GUILD_SETTING_ACTIVITY_JOINING;
    michal[1] = tangon;
    var _closure1_slot10 = michal;
    tangon = {};
    offset = offset.GUILD_SELECTOR;
    tangon['type'] = offset;
    tangon['unsearchable'] = verify;
    verify = function() { // Original name: useSelectedGuildId
        tangon = _closure1_slot4;
        michal = undefined;
        golfie = tangon.bind(michal)();
        var _closure2_slot0 = golfie;
        oscard = _closure1_slot3;
        report = oscard.useEffect;
        tangon = new Array(1);
        tangon[0] = golfie;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot9;
                michal = zuuluu.getFlattenedGuildIds;
                zuuluu = michal.bind(zuuluu)();
                michal = 0;
                zuuluu = zuuluu[michal];
                report = _closure1_slot10;
                tangon = report.includes;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(michal);
                if(!michal) { _fun00002_ip = 53; continue _fun00001 }
 47:
                tangon = null;
                michal = tangon != zuuluu;
 53:
                if(!michal) { _fun00002_ip = 74; continue _fun00001 }
 56:
                report = _closure1_slot5;
                tangon = undefined;
                report = report.bind(tangon)();
                tangon = _closure1_slot6;
                michal = report === tangon;
 74:
                if(!michal) { _fun00002_ip = 88; continue _fun00001 }
 77:
                michal = _closure1_slot7;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
 88:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        entity = _closure1_slot8;
        entity = entity.bind(michal)();
        entity = entity.selectedGuildId;
        return entity;
    };
    tangon['useSelectedGuildId'] = verify;
    option = option.CONTENT_AND_SOCIAL_DISCORD;
    tangon['parent'] = option;
    report = function() { // Original name: onGuildSelectPress
        report = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        tangon = michal[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = report.openLazy;
        oscard = _closure1_slot0;
        zuuluu = 8;
        zuuluu = michal[zuuluu];
        oscard = oscard.bind(entity)(zuuluu);
        zuuluu = 7;
        zuuluu = michal[zuuluu];
        michal = michal.paths;
        zuuluu = oscard.bind(entity)(zuuluu, michal);
        michal = 'SettingsPrivacyAndSafetyGuildSelectActionSheet';
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    tangon['onPress'] = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingGuildSelect.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['GUILD_SPECIFIC_SETTINGS'] = michal;
    return entity;
})();