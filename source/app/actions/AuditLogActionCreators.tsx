// app/actions/AuditLogActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: isLoading
        _fun125511: for(var _fun125511_ip = 0; ; ) switch(_fun125511_ip) {
 0:
            entity = _closure1_slot3;
            entity = entity.isLoading;
            if(entity) { _fun125511_ip = 26; continue _fun125511 }
 16:
            mike = _closure1_slot3;
            entity = mike.isLoadingNextPage;
 26:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: makeRequest
        _fun125512: for(var _fun125512_ip = 0; ; ) switch(_fun125512_ip) {
 0:
            mike = argBar;
            golf = mike.before;
            oscar = mike.userId;
            entity = mike.targetId;
            zulu = mike.action;
            mike = null;
            if(!(mike == oscar)) { _fun125512_ip = 44; continue _fun125512 }
 31:
            tango = _closure1_slot3;
            oscar = tango.userIdFilter;
 44:
            if(!(mike == zulu)) { _fun125512_ip = 61; continue _fun125512 }
 48:
            tango = _closure1_slot3;
            zulu = tango.actionFilter;
 61:
            if(!(mike == entity)) { _fun125512_ip = 80; continue _fun125512 }
 65:
            tango = _closure1_slot3;
            entity = tango.targetIdFilter;
 80:
            tango = {};
            options = _closure1_slot5;
            tango['limit'] = options;
            if(!(mike != golf)) { _fun125512_ip = 104; continue _fun125512 }
 98:
            tango['before'] = golf;
 104:
            if(!(mike != oscar)) { _fun125512_ip = 114; continue _fun125512 }
 108:
            tango['user_id'] = oscar;
 114:
            if(!(mike != zulu)) { _fun125512_ip = 124; continue _fun125512 }
 118:
            tango['action_type'] = zulu;
 124:
            if(!(mike != entity)) { _fun125512_ip = 134; continue _fun125512 }
 128:
            tango['target_id'] = entity;
 134:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.get;
            entity = {};
            golf = _closure1_slot4;
            oscar = golf.GUILD_AUDIT_LOG;
            report = argFoo;
            report = oscar.bind(golf)(report);
            entity['url'] = report;
            entity['query'] = tango;
            tango = true;
            entity['oldFormErrors'] = tango;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: fetchLogs
        _fun125513: for(var _fun125513_ip = 0; ; ) switch(_fun125513_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot6;
            entity = undefined;
            tango = tango.bind(entity)();
            if(tango) { _fun125513_ip = 130; continue _fun125513 }
 21:
            tango = null;
            if(!(tango != report)) { _fun125513_ip = 130; continue _fun125513 }
 27:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 3;
            tango = golf[tango];
            golf = oscar.bind(entity)(tango);
            oscar = golf.dispatch;
            tango = {};
            options = 'AUDIT_LOG_FETCH_START';
            tango['type'] = options;
            tango = oscar.bind(golf)(tango);
            tango = _closure1_slot7;
            zulu = {};
            oscar = argBar;
            zulu['userId'] = oscar;
            oscar = argCorge;
            zulu['action'] = oscar;
            oscar = argBaz;
            zulu['targetId'] = oscar;
            report = tango.bind(entity)(report, zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                romeo = entity.audit_log_entries;
                yankee = entity.integrations;
                offset = entity.users;
                verify = entity.webhooks;
                options = entity.guild_scheduled_events;
                golf = entity.auto_moderation_rules;
                oscar = entity.threads;
                report = entity.application_commands;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                foxtrot = 'AUDIT_LOG_FETCH_SUCCESS';
                mike['type'] = foxtrot;
                mike['logs'] = romeo;
                mike['integrations'] = yankee;
                mike['users'] = offset;
                mike['webhooks'] = verify;
                mike['guildScheduledEvents'] = options;
                mike['automodRules'] = golf;
                mike['threads'] = oscar;
                mike['applicationCommands'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'AUDIT_LOG_FETCH_FAIL';
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return mike;
 130:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Endpoints;
    var _closure1_slot4 = options;
    report = report.AUDIT_LOG_PAGE_LIMIT;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/AuditLogActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['fetchLogs'] = tango;
    tango = function(argFoo) { // Original name: fetchNextLogPage
        _fun125516: for(var _fun125516_ip = 0; ; ) switch(_fun125516_ip) {
 0:
            report = argFoo;
            verify = arguments[1];
            entity = undefined;
            if(!(verify === entity)) { _fun125516_ip = 16; continue _fun125516 }
 14:
            verify = false;
 16:
            tango = _closure1_slot3;
            tango = tango.hasOlderLogs;
            if(!tango) { _fun125516_ip = 194; continue _fun125516 }
 35:
            tango = _closure1_slot6;
            tango = tango.bind(entity)();
            if(tango) { _fun125516_ip = 194; continue _fun125516 }
 49:
            oscar = null;
            if(!(oscar != report)) { _fun125516_ip = 194; continue _fun125516 }
 58:
            tango = _closure1_slot3;
            golf = tango.logs;
            options = golf.length;
            tango = 1;
            tango = options - tango;
            tango = golf[tango];
            golf = oscar != tango;
            oscar = null;
            if(!golf) { _fun125516_ip = 98; continue _fun125516 }
 93:
            oscar = tango.id;
 98:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            tango = 3;
            tango = options[tango];
            options = golf.bind(entity)(tango);
            golf = options.dispatch;
            tango = {};
            offset = 'AUDIT_LOG_FETCH_NEXT_PAGE_START';
            tango['type'] = offset;
            tango['before'] = oscar;
            tango['isGroupedFetch'] = verify;
            tango = golf.bind(options)(tango);
            tango = _closure1_slot7;
            zulu = {};
            zulu['before'] = oscar;
            report = tango.bind(entity)(report, zulu);
            tango = report.then;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.body;
                romeo = entity.audit_log_entries;
                yankee = entity.integrations;
                offset = entity.users;
                verify = entity.webhooks;
                options = entity.guild_scheduled_events;
                golf = entity.auto_moderation_rules;
                oscar = entity.threads;
                report = entity.application_commands;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                foxtrot = 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS';
                mike['type'] = foxtrot;
                mike['logs'] = romeo;
                mike['integrations'] = yankee;
                mike['users'] = offset;
                mike['webhooks'] = verify;
                mike['guildScheduledEvents'] = options;
                mike['automodRules'] = golf;
                mike['threads'] = oscar;
                mike['applicationCommands'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.dispatch;
                entity = {};
                tango = 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL';
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return mike;
 194:
            return entity;
        }
    };
    zulu['fetchNextLogPage'] = tango;
    tango = function(argFoo, argBar) { // Original name: filterByAction
        _fun125519: for(var _fun125519_ip = 0; ; ) switch(_fun125519_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot6;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun125519_ip = 96; continue _fun125519 }
 22:
            zulu = null;
            if(!(zulu != tango)) { _fun125519_ip = 96; continue _fun125519 }
 28:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 3;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.dispatch;
            oscar = {};
            verify = 'AUDIT_LOG_FILTER_BY_ACTION';
            oscar['type'] = verify;
            oscar['action'] = report;
            oscar = golf.bind(options)(oscar);
            mike = _closure1_slot8;
            backup = undefined;
            foxtrot = tango;
            romeo = null;
            yankee = null;
            offset = report;
            mike = backup[mike](foxtrot, romeo, yankee, offset, verify);
            return mike;
 96:
            return entity;
        }
    };
    zulu['filterByAction'] = tango;
    tango = function(argFoo, argBar) { // Original name: filterByUserId
        _fun125520: for(var _fun125520_ip = 0; ; ) switch(_fun125520_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            report = _closure1_slot6;
            entity = undefined;
            report = report.bind(entity)();
            if(report) { _fun125520_ip = 86; continue _fun125520 }
 22:
            report = null;
            if(!(report != zulu)) { _fun125520_ip = 86; continue _fun125520 }
 28:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 3;
            report = golf[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.dispatch;
            report = {};
            options = 'AUDIT_LOG_FILTER_BY_USER';
            report['type'] = options;
            report['userId'] = tango;
            report = oscar.bind(golf)(report);
            mike = _closure1_slot8;
            mike = mike.bind(entity)(zulu, tango);
            return mike;
 86:
            return entity;
        }
    };
    zulu['filterByUserId'] = tango;
    mike = function(argFoo, argBar) { // Original name: filterByTargetId
        _fun125521: for(var _fun125521_ip = 0; ; ) switch(_fun125521_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot6;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun125521_ip = 88; continue _fun125521 }
 22:
            zulu = null;
            if(!(zulu != tango)) { _fun125521_ip = 88; continue _fun125521 }
 28:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 3;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.dispatch;
            oscar = {};
            verify = 'AUDIT_LOG_FILTER_BY_TARGET';
            oscar['type'] = verify;
            oscar['targetId'] = report;
            oscar = golf.bind(options)(oscar);
            mike = _closure1_slot8;
            mike = mike.bind(entity)(tango, zulu, report);
            return mike;
 88:
            return entity;
        }
    };
    zulu['filterByTargetId'] = mike;
    return entity;
})();