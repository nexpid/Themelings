// app/modules/main_tabs_v2/native/settings/definitions/GuildSettingActivityJoining.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.getSelectedGuildId;
    var _closure1_slot2 = golfie;
    michal = michal.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.T+nevL;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    option = function() { // Original name: useDescription
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.b+bVS0;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['useDescription'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useValue
        michal = _closure1_slot3;
        tangon = undefined;
        michal = michal.bind(tangon)();
        zuuluu = michal.selectedGuildId;
        michal = _closure1_slot0;
        report = _closure1_slot1;
        entity = 3;
        entity = report[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.ActivityJoiningRestrictedGuilds;
        entity = michal.useSetting;
        michal = entity.bind(michal)();
        entity = michal.includes;
        entity = entity.bind(michal)(zuuluu);
        entity = !entity;
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = undefined;
            tangon = zuuluu.bind(entity)();
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getSanitizedActivityJoiningRestrictedGuilds;
            oscard = zuuluu.bind(report)();
            zuuluu = argFoo;
            if(zuuluu) { _fun00002_ip = 61; continue _fun00001 }
 49:
            zuuluu = oscard.add;
            zuuluu = zuuluu.bind(oscard)(tangon);
            _fun00002_ip = 71; continue _fun00001;
 61:
            zuuluu = oscard.delete;
            zuuluu = zuuluu.bind(oscard)(tangon);
 71:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.ActivityJoiningRestrictedGuilds;
            zuuluu = tangon.updateSetting;
            michal = new Array(0);
            golfie = 0;
            verify = michal;
            option = oscard;
            report = arraySpread(verify, option, golfie);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['onValueChange'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/GuildSettingActivityJoining.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();