// app/actions/AuditLogActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: isLoading
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot3;
            entity = entity.isLoading;
            if(entity) { _fun00002_ip = 26; continue _fun00001 }
 16:
            michal = _closure1_slot3;
            entity = michal.isLoadingNextPage;
 26:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: makeRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argBar;
            golfie = michal.before;
            oscard = michal.userId;
            entity = michal.targetId;
            zuuluu = michal.action;
            michal = null;
            if(!(michal == oscard)) { _fun00004_ip = 44; continue _fun00003 }
 31:
            tangon = _closure1_slot3;
            oscard = tangon.userIdFilter;
 44:
            if(!(michal == zuuluu)) { _fun00004_ip = 61; continue _fun00003 }
 48:
            tangon = _closure1_slot3;
            zuuluu = tangon.actionFilter;
 61:
            if(!(michal == entity)) { _fun00004_ip = 80; continue _fun00003 }
 65:
            tangon = _closure1_slot3;
            entity = tangon.targetIdFilter;
 80:
            tangon = {};
            option = _closure1_slot5;
            tangon['limit'] = option;
            if(!(michal != golfie)) { _fun00004_ip = 104; continue _fun00003 }
 98:
            tangon['before'] = golfie;
 104:
            if(!(michal != oscard)) { _fun00004_ip = 114; continue _fun00003 }
 108:
            tangon['user_id'] = oscard;
 114:
            if(!(michal != zuuluu)) { _fun00004_ip = 124; continue _fun00003 }
 118:
            tangon['action_type'] = zuuluu;
 124:
            if(!(michal != entity)) { _fun00004_ip = 134; continue _fun00003 }
 128:
            tangon['target_id'] = entity;
 134:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.get;
            entity = {};
            golfie = _closure1_slot4;
            oscard = golfie.GUILD_AUDIT_LOG;
            report = argFoo;
            report = oscard.bind(golfie)(report);
            entity['url'] = report;
            entity['query'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: fetchLogs
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot6;
            entity = undefined;
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00006_ip = 130; continue _fun00005 }
 21:
            tangon = null;
            if(!(tangon != report)) { _fun00006_ip = 130; continue _fun00005 }
 27:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 3;
            tangon = golfie[tangon];
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.dispatch;
            tangon = {};
            option = 'AUDIT_LOG_FETCH_START';
            tangon['type'] = option;
            tangon = oscard.bind(golfie)(tangon);
            tangon = _closure1_slot7;
            zuuluu = {};
            oscard = argBar;
            zuuluu['userId'] = oscard;
            oscard = argCor;
            zuuluu['action'] = oscard;
            oscard = argBaz;
            zuuluu['targetId'] = oscard;
            report = tangon.bind(entity)(report, zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                romeon = entity.audit_log_entries;
                yankee = entity.integrations;
                offset = entity.users;
                verify = entity.webhooks;
                option = entity.guild_scheduled_events;
                golfie = entity.auto_moderation_rules;
                oscard = entity.threads;
                report = entity.application_commands;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                foxtra = 'AUDIT_LOG_FETCH_SUCCESS';
                michal['type'] = foxtra;
                michal['logs'] = romeon;
                michal['integrations'] = yankee;
                michal['users'] = offset;
                michal['webhooks'] = verify;
                michal['guildScheduledEvents'] = option;
                michal['automodRules'] = golfie;
                michal['threads'] = oscard;
                michal['applicationCommands'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'AUDIT_LOG_FETCH_FAIL';
                entity['type'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 130:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Endpoints;
    var _closure1_slot4 = option;
    report = report.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/AuditLogActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['fetchLogs'] = tangon;
    tangon = function(argFoo) { // Original name: fetchNextLogPage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            verify = arguments[1];
            entity = undefined;
            if(!(verify === entity)) { _fun00008_ip = 16; continue _fun00007 }
 14:
            verify = false;
 16:
            tangon = _closure1_slot3;
            tangon = tangon.hasOlderLogs;
            if(!tangon) { _fun00008_ip = 194; continue _fun00007 }
 35:
            tangon = _closure1_slot6;
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00008_ip = 194; continue _fun00007 }
 49:
            oscard = null;
            if(!(oscard != report)) { _fun00008_ip = 194; continue _fun00007 }
 58:
            tangon = _closure1_slot3;
            golfie = tangon.logs;
            option = golfie.length;
            tangon = 1;
            tangon = option - tangon;
            tangon = golfie[tangon];
            golfie = oscard != tangon;
            oscard = null;
            if(!golfie) { _fun00008_ip = 98; continue _fun00007 }
 93:
            oscard = tangon.id;
 98:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 3;
            tangon = option[tangon];
            option = golfie.bind(entity)(tangon);
            golfie = option.dispatch;
            tangon = {};
            offset = 'AUDIT_LOG_FETCH_NEXT_PAGE_START';
            tangon['type'] = offset;
            tangon['before'] = oscard;
            tangon['isGroupedFetch'] = verify;
            tangon = golfie.bind(option)(tangon);
            tangon = _closure1_slot7;
            zuuluu = {};
            zuuluu['before'] = oscard;
            report = tangon.bind(entity)(report, zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                romeon = entity.audit_log_entries;
                yankee = entity.integrations;
                offset = entity.users;
                verify = entity.webhooks;
                option = entity.guild_scheduled_events;
                golfie = entity.auto_moderation_rules;
                oscard = entity.threads;
                report = entity.application_commands;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                foxtra = 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS';
                michal['type'] = foxtra;
                michal['logs'] = romeon;
                michal['integrations'] = yankee;
                michal['users'] = offset;
                michal['webhooks'] = verify;
                michal['guildScheduledEvents'] = option;
                michal['automodRules'] = golfie;
                michal['threads'] = oscard;
                michal['applicationCommands'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {};
                tangon = 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL';
                entity['type'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 194:
            return entity;
        }
    };
    zuuluu['fetchNextLogPage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: filterByAction
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot6;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00010_ip = 96; continue _fun00009 }
 22:
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 96; continue _fun00009 }
 28:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 3;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.dispatch;
            oscard = {};
            verify = 'AUDIT_LOG_FILTER_BY_ACTION';
            oscard['type'] = verify;
            oscard['action'] = report;
            oscard = golfie.bind(option)(oscard);
            michal = _closure1_slot8;
            backup = undefined;
            foxtra = tangon;
            romeon = null;
            yankee = null;
            offset = report;
            michal = backup[michal](foxtra, romeon, yankee, offset, verify);
            return michal;
 96:
            return entity;
        }
    };
    zuuluu['filterByAction'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: filterByUserId
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = _closure1_slot6;
            entity = undefined;
            report = report.bind(entity)();
            if(report) { _fun00012_ip = 86; continue _fun00011 }
 22:
            report = null;
            if(!(report != zuuluu)) { _fun00012_ip = 86; continue _fun00011 }
 28:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 3;
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.dispatch;
            report = {};
            option = 'AUDIT_LOG_FILTER_BY_USER';
            report['type'] = option;
            report['userId'] = tangon;
            report = oscard.bind(golfie)(report);
            michal = _closure1_slot8;
            michal = michal.bind(entity)(zuuluu, tangon);
            return michal;
 86:
            return entity;
        }
    };
    zuuluu['filterByUserId'] = tangon;
    michal = function(argFoo, argBar) { // Original name: filterByTargetId
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot6;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00014_ip = 88; continue _fun00013 }
 22:
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00014_ip = 88; continue _fun00013 }
 28:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 3;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.dispatch;
            oscard = {};
            verify = 'AUDIT_LOG_FILTER_BY_TARGET';
            oscard['type'] = verify;
            oscard['targetId'] = report;
            oscard = golfie.bind(option)(oscard);
            michal = _closure1_slot8;
            michal = michal.bind(entity)(tangon, zuuluu, report);
            return michal;
 88:
            return entity;
        }
    };
    zuuluu['filterByTargetId'] = michal;
    return entity;
})();