// app/modules/main_tabs_v2/native/settings/definitions/AccountIgnoredUsersSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    tangon = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(tangon);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.MobileSetting;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = {};
    verify = verify.ROUTE;
    michal['type'] = verify;
    verify = 6;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.EyeSlashIcon;
    michal['IconComponent'] = verify;
    verify = function() { // Original name: title
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
        entity = entity.93ZDWF;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    verify = function() { // Original name: useAccountIgnoredUsersSettingDescription
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        michal = 4;
        zuuluu = golfie[michal];
        michal = undefined;
        report = oscard.bind(michal)(zuuluu);
        tangon = report.useStateFromStoresArray;
        entity = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.getIgnoredIDs;
            entity = entity.bind(michal)();
            return entity;
        };
        report = tangon.bind(report)(zuuluu, entity);
        entity = 5;
        zuuluu = golfie[entity];
        zuuluu = oscard.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.format;
        entity = golfie[entity];
        entity = oscard.bind(michal)(entity);
        entity = entity.t;
        michal = entity.rXUeOj;
        entity = {};
        report = report.length;
        entity['numberOfIgnoredUsers'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useDescription'] = verify;
    tangon = tangon.CONTENT_AND_SOCIAL;
    michal['parent'] = tangon;
    tangon = {};
    option = option.IGNORED_USERS;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountIgnoredUsersSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();