// app/modules/quests/managers/QuestFetchManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    verify = 5;
    tangon = oscard[verify];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot8 = tangon;
    tangon = 7;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.DAY;
    var _closure1_slot9 = option;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    offset = option.MINUTE;
    option = 30;
    option = option * offset;
    var _closure1_slot10 = option;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.SECOND;
    option = verify * option;
    var _closure1_slot11 = option;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    option = option.Millis;
    option = option.MINUTE;
    option = verify * option;
    var _closure1_slot12 = option;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.HOUR;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: QuestFetchManager
            golfie = this;
            zuuluu = 0;
            yankee = 0;
            option = copyRestArgs(yankee);
            tangon = _closure1_slot2;
            oscard = _closure2_slot0;
            report = undefined;
            tangon = tangon.bind(report)(golfie, oscard);
            tangon = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = option;
            verify = 0;
            option = arraySpread(yankee, offset, verify);
            entity = tangon.bind(report)(golfie, oscard, entity);
            var _closure3_slot0 = entity;
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            entity['instantiatedAt'] = tangon;
            tangon = null;
            entity['initialFetchTimerId'] = tangon;
            entity['recurringFetchTimerId'] = tangon;
            entity['lastFetchAttemptedAt'] = zuuluu;
            entity['lastFetchedQuestForLocaleChangeAt'] = zuuluu;
            zuuluu = function() {
                michal = _closure3_slot0;
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['lastFetchAttemptedAt'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleQuestsFetchCurrentQuestsBegin'] = zuuluu;
            zuuluu = function() {
                option = global;
                report = option.window;
                tangon = report.clearTimeout;
                michal = _closure3_slot0;
                zuuluu = michal.initialFetchTimerId;
                zuuluu = tangon.bind(report)(zuuluu);
                report = option.window;
                tangon = report.clearTimeout;
                zuuluu = michal.recurringFetchTimerId;
                zuuluu = tangon.bind(report)(zuuluu);
                golfie = option.window;
                oscard = golfie.setInterval;
                report = _closure1_slot10;
                tangon = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = global;
                        zuuluu = entity.Date;
                        michal = zuuluu.now;
                        tangon = michal.bind(zuuluu)();
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.lastFetchAttemptedAt;
                        tangon = tangon - zuuluu;
                        zuuluu = _closure1_slot9;
                        if(!(tangon > zuuluu)) { _fun00006_ip = 80; continue _fun00005 }
 45:
                        michal = _closure3_slot0;
                        zuuluu = entity.Date;
                        entity = zuuluu.now;
                        entity = entity.bind(zuuluu)();
                        michal['lastFetchAttemptedAt'] = entity;
                        entity = michal._fetch;
                        entity = entity.bind(michal)();
 80:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon = oscard.bind(golfie)(tangon, report);
                michal['recurringFetchTimerId'] = tangon;
                report = option.window;
                tangon = report.setTimeout;
                golfie = option.Math;
                oscard = golfie.floor;
                verify = option.Math;
                option = verify.random;
                option = option.bind(verify)();
                zuuluu = _closure1_slot11;
                zuuluu = option * zuuluu;
                zuuluu = oscard.bind(golfie)(zuuluu);
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = _closure1_slot7;
                        michal = entity.lastFetchedCurrentQuests;
                        entity = 0;
                        if(!(entity === michal)) { _fun00008_ip = 36; continue _fun00007 }
 19:
                        michal = _closure3_slot0;
                        entity = michal._fetch;
                        entity = entity.bind(michal)();
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = tangon.bind(report)(entity, zuuluu);
                michal['initialFetchTimerId'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handlePostConnectionOpen'] = zuuluu;
            zuuluu = function() {
                entity = undefined;
                return entity;
            };
            entity['handleRunningGamesChange'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.partial;
                    entity = michal.settings;
                    michal = michal.wasSaved;
                    tangon = entity.proto;
                    entity = 'localization';
                    tangon = entity in tangon;
                    entity = !tangon;
                    if(!tangon) { _fun00010_ip = 44; continue _fun00009 }
 41:
                    entity = !zuuluu;
 44:
                    if(entity) { _fun00010_ip = 50; continue _fun00009 }
 47:
                    entity = michal;
 50:
                    if(entity) { _fun00010_ip = 98; continue _fun00009 }
 53:
                    michal = global;
                    zuuluu = michal.Date;
                    michal = zuuluu.now;
                    zuuluu = michal.bind(zuuluu)();
                    michal = _closure3_slot0;
                    michal = michal.lastFetchedQuestForLocaleChangeAt;
                    zuuluu = zuuluu - michal;
                    michal = _closure1_slot12;
                    entity = zuuluu <= michal;
 98:
                    if(entity) { _fun00010_ip = 141; continue _fun00009 }
 101:
                    michal = _closure3_slot0;
                    entity = global;
                    zuuluu = entity.Date;
                    entity = zuuluu.now;
                    entity = entity.bind(zuuluu)();
                    michal['lastFetchedQuestForLocaleChangeAt'] = entity;
                    entity = michal._fetch;
                    entity = entity.bind(michal)();
 141:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleUserSettingsProtoUpdate'] = zuuluu;
            michal = function() {
                entity = global;
                report = entity.window;
                tangon = report.clearTimeout;
                michal = _closure3_slot0;
                zuuluu = michal.initialFetchTimerId;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = entity.window;
                zuuluu = tangon.clearTimeout;
                entity = michal.recurringFetchTimerId;
                entity = zuuluu.bind(tangon)(entity);
                entity = 0;
                michal['lastFetchAttemptedAt'] = entity;
                michal['lastFetchedQuestForLocaleChangeAt'] = entity;
                entity = undefined;
                return entity;
            };
            entity['handleLogout'] = michal;
            michal = {};
            zuuluu = entity.handleQuestsFetchCurrentQuestsBegin;
            michal['QUESTS_FETCH_CURRENT_QUESTS_BEGIN'] = zuuluu;
            zuuluu = entity.handlePostConnectionOpen;
            michal['POST_CONNECTION_OPEN'] = zuuluu;
            zuuluu = entity.handleRunningGamesChange;
            michal['RUNNING_GAMES_CHANGE'] = zuuluu;
            zuuluu = entity.handleUserSettingsProtoUpdate;
            michal['USER_SETTINGS_PROTO_UPDATE'] = zuuluu;
            zuuluu = entity.handleLogout;
            michal['LOGOUT'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot6;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot3;
        report = {};
        oscard = '_fetch';
        report['key'] = oscard;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                report = tangon.bind(entity)(michal);
                tangon = report.getIsEligibleForQuests;
                michal = {};
                oscard = _closure1_slot8;
                oscard = oscard.QUESTS_MANAGER;
                michal['location'] = oscard;
                michal = tangon.bind(report)(michal);
                if(!michal) { _fun00012_ip = 68; continue _fun00011 }
 55:
                tangon = _closure1_slot7;
                tangon = tangon.isFetchingCurrentQuests;
                michal = !tangon;
 68:
                if(!michal) { _fun00012_ip = 198; continue _fun00011 }
 74:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 9;
                tangon = oscard[michal];
                golfie = report.bind(entity)(tangon);
                tangon = golfie.fetchCurrentQuests;
                tangon = tangon.bind(golfie)();
                tangon = 10;
                tangon = oscard[tangon];
                oscard = report.bind(entity)(tangon);
                report = oscard.getIsEligibleForSeparateDecisionEndpoint;
                tangon = {};
                golfie = _closure1_slot8;
                golfie = golfie.QUESTS_MANAGER;
                tangon['location'] = golfie;
                tangon = report.bind(oscard)(tangon);
                if(!tangon) { _fun00012_ip = 198; continue _fun00011 }
 146:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = oscard[michal];
                tangon = report.bind(entity)(michal);
                zuuluu = tangon.fetchQuestToDeliver;
                michal = 11;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.QuestPlacement;
                michal = michal.MOBILE_HOME_DOCK_AREA;
                michal = zuuluu.bind(tangon)(michal);
 198:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    backup = tangon;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/managers/QuestFetchManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();