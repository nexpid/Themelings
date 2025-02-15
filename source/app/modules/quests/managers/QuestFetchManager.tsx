// app/modules/quests/managers/QuestFetchManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun127698: for(var _fun127698_ip = 0; ; ) switch(_fun127698_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun127698_ip = 51; continue _fun127698 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun127698_ip = 92; continue _fun127698;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun127698_ip = 71; continue _fun127698 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun127699: for(var _fun127699_ip = 0; ; ) switch(_fun127699_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun127699_ip = 76; continue _fun127699;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    verify = 5;
    tango = oscar[verify];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot8 = tango;
    tango = 7;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.DAY;
    var _closure1_slot9 = options;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.Millis;
    offset = options.MINUTE;
    options = 30;
    options = options * offset;
    var _closure1_slot10 = options;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.SECOND;
    options = verify * options;
    var _closure1_slot11 = options;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.MINUTE;
    options = verify * options;
    var _closure1_slot12 = options;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.HOUR;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: QuestFetchManager
            golf = this;
            zulu = 0;
            yankee = 0;
            options = copyRestArgs(yankee);
            tango = _closure1_slot2;
            oscar = _closure2_slot0;
            report = undefined;
            tango = tango.bind(report)(golf, oscar);
            tango = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = options;
            verify = 0;
            options = arraySpread(yankee, offset, verify);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = global;
            report = tango.Date;
            tango = report.now;
            tango = tango.bind(report)();
            entity['instantiatedAt'] = tango;
            tango = null;
            entity['initialFetchTimerId'] = tango;
            entity['recurringFetchTimerId'] = tango;
            entity['lastFetchAttemptedAt'] = zulu;
            entity['lastFetchedQuestForLocaleChangeAt'] = zulu;
            zulu = function() {
                mike = _closure3_slot0;
                entity = global;
                zulu = entity.Date;
                entity = zulu.now;
                entity = entity.bind(zulu)();
                mike['lastFetchAttemptedAt'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleQuestsFetchCurrentQuestsBegin'] = zulu;
            zulu = function() {
                options = global;
                report = options.window;
                tango = report.clearTimeout;
                mike = _closure3_slot0;
                zulu = mike.initialFetchTimerId;
                zulu = tango.bind(report)(zulu);
                report = options.window;
                tango = report.clearTimeout;
                zulu = mike.recurringFetchTimerId;
                zulu = tango.bind(report)(zulu);
                golf = options.window;
                oscar = golf.setInterval;
                report = _closure1_slot10;
                tango = function() {
                    _fun127706: for(var _fun127706_ip = 0; ; ) switch(_fun127706_ip) {
 0:
                        entity = global;
                        zulu = entity.Date;
                        mike = zulu.now;
                        tango = mike.bind(zulu)();
                        zulu = _closure3_slot0;
                        zulu = zulu.lastFetchAttemptedAt;
                        tango = tango - zulu;
                        zulu = _closure1_slot9;
                        if(!(tango > zulu)) { _fun127706_ip = 80; continue _fun127706 }
 45:
                        mike = _closure3_slot0;
                        zulu = entity.Date;
                        entity = zulu.now;
                        entity = entity.bind(zulu)();
                        mike['lastFetchAttemptedAt'] = entity;
                        entity = mike._fetch;
                        entity = entity.bind(mike)();
 80:
                        entity = undefined;
                        return entity;
                    }
                };
                tango = oscar.bind(golf)(tango, report);
                mike['recurringFetchTimerId'] = tango;
                report = options.window;
                tango = report.setTimeout;
                golf = options.Math;
                oscar = golf.floor;
                verify = options.Math;
                options = verify.random;
                options = options.bind(verify)();
                zulu = _closure1_slot11;
                zulu = options * zulu;
                zulu = oscar.bind(golf)(zulu);
                entity = function() {
                    _fun127707: for(var _fun127707_ip = 0; ; ) switch(_fun127707_ip) {
 0:
                        entity = _closure1_slot7;
                        mike = entity.lastFetchedCurrentQuests;
                        entity = 0;
                        if(!(entity === mike)) { _fun127707_ip = 36; continue _fun127707 }
 19:
                        mike = _closure3_slot0;
                        entity = mike._fetch;
                        entity = entity.bind(mike)();
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = tango.bind(report)(entity, zulu);
                mike['initialFetchTimerId'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handlePostConnectionOpen'] = zulu;
            zulu = function() {
                entity = undefined;
                return entity;
            };
            entity['handleRunningGamesChange'] = zulu;
            zulu = function(argFoo) {
                _fun127709: for(var _fun127709_ip = 0; ; ) switch(_fun127709_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.partial;
                    entity = mike.settings;
                    mike = mike.wasSaved;
                    tango = entity.proto;
                    entity = 'localization';
                    tango = entity in tango;
                    entity = !tango;
                    if(!tango) { _fun127709_ip = 44; continue _fun127709 }
 41:
                    entity = !zulu;
 44:
                    if(entity) { _fun127709_ip = 50; continue _fun127709 }
 47:
                    entity = mike;
 50:
                    if(entity) { _fun127709_ip = 98; continue _fun127709 }
 53:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    mike = _closure3_slot0;
                    mike = mike.lastFetchedQuestForLocaleChangeAt;
                    zulu = zulu - mike;
                    mike = _closure1_slot12;
                    entity = zulu <= mike;
 98:
                    if(entity) { _fun127709_ip = 141; continue _fun127709 }
 101:
                    mike = _closure3_slot0;
                    entity = global;
                    zulu = entity.Date;
                    entity = zulu.now;
                    entity = entity.bind(zulu)();
                    mike['lastFetchedQuestForLocaleChangeAt'] = entity;
                    entity = mike._fetch;
                    entity = entity.bind(mike)();
 141:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleUserSettingsProtoUpdate'] = zulu;
            mike = function() {
                entity = global;
                report = entity.window;
                tango = report.clearTimeout;
                mike = _closure3_slot0;
                zulu = mike.initialFetchTimerId;
                zulu = tango.bind(report)(zulu);
                tango = entity.window;
                zulu = tango.clearTimeout;
                entity = mike.recurringFetchTimerId;
                entity = zulu.bind(tango)(entity);
                entity = 0;
                mike['lastFetchAttemptedAt'] = entity;
                mike['lastFetchedQuestForLocaleChangeAt'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleLogout'] = mike;
            mike = {};
            zulu = entity.handleQuestsFetchCurrentQuestsBegin;
            mike['QUESTS_FETCH_CURRENT_QUESTS_BEGIN'] = zulu;
            zulu = entity.handlePostConnectionOpen;
            mike['POST_CONNECTION_OPEN'] = zulu;
            zulu = entity.handleRunningGamesChange;
            mike['RUNNING_GAMES_CHANGE'] = zulu;
            zulu = entity.handleUserSettingsProtoUpdate;
            mike['USER_SETTINGS_PROTO_UPDATE'] = zulu;
            zulu = entity.handleLogout;
            mike['LOGOUT'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot6;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot3;
        report = {};
        oscar = '_fetch';
        report['key'] = oscar;
        entity = function() { // Original name: value
            _fun127711: for(var _fun127711_ip = 0; ; ) switch(_fun127711_ip) {
 0:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                report = tango.bind(entity)(mike);
                tango = report.getIsEligibleForQuests;
                mike = {};
                oscar = _closure1_slot8;
                oscar = oscar.QUESTS_MANAGER;
                mike['location'] = oscar;
                mike = tango.bind(report)(mike);
                if(!mike) { _fun127711_ip = 68; continue _fun127711 }
 55:
                tango = _closure1_slot7;
                tango = tango.isFetchingCurrentQuests;
                mike = !tango;
 68:
                if(!mike) { _fun127711_ip = 198; continue _fun127711 }
 74:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = 9;
                tango = oscar[mike];
                golf = report.bind(entity)(tango);
                tango = golf.fetchCurrentQuests;
                tango = tango.bind(golf)();
                tango = 10;
                tango = oscar[tango];
                oscar = report.bind(entity)(tango);
                report = oscar.getIsEligibleForSeparateDecisionEndpoint;
                tango = {};
                golf = _closure1_slot8;
                golf = golf.QUESTS_MANAGER;
                tango['location'] = golf;
                tango = report.bind(oscar)(tango);
                if(!tango) { _fun127711_ip = 198; continue _fun127711 }
 146:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                mike = oscar[mike];
                tango = report.bind(entity)(mike);
                zulu = tango.fetchQuestToDeliver;
                mike = 11;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                mike = mike.QuestPlacement;
                mike = mike.MOBILE_HOME_DOCK_AREA;
                mike = zulu.bind(tango)(mike);
 198:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    backup = tango;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/managers/QuestFetchManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();