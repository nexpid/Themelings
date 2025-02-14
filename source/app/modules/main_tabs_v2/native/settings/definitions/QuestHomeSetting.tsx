// app/modules/main_tabs_v2/native/settings/definitions/QuestHomeSetting.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    tango = mike.RendererType;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.UserSettingsSections;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.QuestsExperimentLocations;
    var _closure1_slot2 = mike;
    mike = {};
    tango = tango.ROUTE;
    mike['type'] = tango;
    tango = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 5;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.JALI2N;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = tango;
    tango = function() { // Original name: useQuestHomeSettingPredicate
        _fun96375: for(var _fun96375_ip = 0; ; ) switch(_fun96375_ip) {
 0:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            zulu = undefined;
            golf = tango.bind(zulu)(entity);
            mike = golf.useIsMobileGlobalDiscoveryEnabled;
            entity = {};
            options = 'useQuestHomeSettingPredicate';
            entity['location'] = options;
            mike = mike.bind(golf)(entity);
            entity = 4;
            entity = oscar[entity];
            tango = tango.bind(zulu)(entity);
            zulu = tango.useIsEligibleForQuests;
            entity = {};
            report = _closure1_slot2;
            report = report.QUEST_HOME_MOBILE;
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            if(!entity) { _fun96375_ip = 93; continue _fun96375 }
 90:
            entity = !mike;
 93:
            return entity;
        }
    };
    mike['usePredicate'] = tango;
    tango = null;
    mike['parent'] = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsIcon;
    mike['IconComponent'] = tango;
    tango = {};
    options = options.QUESTS;
    tango['route'] = options;
    golf = function() { // Original name: getComponent
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        entity = entity.default;
        return entity;
    };
    tango['getComponent'] = golf;
    mike['screen'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/definitions/QuestHomeSetting.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();