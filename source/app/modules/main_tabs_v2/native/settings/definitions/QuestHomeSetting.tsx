// app/modules/main_tabs_v2/native/settings/definitions/QuestHomeSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
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
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    tangon = michal.RendererType;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.QuestsExperimentLocations;
    var _closure1_slot2 = michal;
    michal = {};
    tangon = tangon.ROUTE;
    michal['type'] = tangon;
    tangon = function() { // Original name: title
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
        entity = entity.JALI2N;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = tangon;
    tangon = function() { // Original name: useQuestHomeSettingPredicate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            entity = oscard[entity];
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(entity);
            michal = golfie.useIsMobileGlobalDiscoveryEnabled;
            entity = {};
            option = 'useQuestHomeSettingPredicate';
            entity['location'] = option;
            michal = michal.bind(golfie)(entity);
            entity = 4;
            entity = oscard[entity];
            tangon = tangon.bind(zuuluu)(entity);
            zuuluu = tangon.useIsEligibleForQuests;
            entity = {};
            report = _closure1_slot2;
            report = report.QUEST_HOME_MOBILE;
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            if(!entity) { _fun00002_ip = 93; continue _fun00001 }
 90:
            entity = !michal;
 93:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = null;
    michal['parent'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsIcon;
    michal['IconComponent'] = tangon;
    tangon = {};
    option = option.QUESTS;
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
    tangon = 'modules/main_tabs_v2/native/settings/definitions/QuestHomeSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();