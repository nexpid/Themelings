// app/modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: shouldShowTakeoverForWarnings
        _fun79494: for(var _fun79494_ip = 0; ; ) switch(_fun79494_ip) {
 0:
            tango = argFoo;
            zulu = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot5;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = mike === entity;
                return entity;
            };
            tango = zulu.bind(tango)(entity);
            zulu = tango.length;
            entity = 0;
            entity = zulu > entity;
            if(!entity) { _fun79494_ip = 54; continue _fun79494 }
 36:
            zulu = tango.every;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity == mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 54:
            return entity;
        }
    };
    var _closure1_slot6 = mike;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    options = golf[report];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SafetyWarningTypes;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/self_mod/inappropriate_conversation/InappropriateConversationUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: getSafetyAlertsSettingOrDefault
        _fun79497: for(var _fun79497_ip = 0; ; ) switch(_fun79497_ip) {
 0:
            zulu = _closure1_slot3;
            mike = zulu.getCurrentUser;
            oscar = mike.bind(zulu)();
            mike = null;
            zulu = mike == oscar;
            report = undefined;
            tango = undefined;
            if(zulu) { _fun79497_ip = 39; continue _fun79497 }
 29:
            zulu = oscar.isStaff;
            tango = zulu.bind(oscar)();
 39:
            zulu = true;
            zulu = zulu === tango;
            tango = _closure1_slot2;
            tango = tango.settings;
            oscar = tango.privacy;
            golf = mike == oscar;
            tango = undefined;
            if(golf) { _fun79497_ip = 90; continue _fun79497 }
 70:
            oscar = oscar.inappropriateConversationWarnings;
            golf = mike == oscar;
            tango = undefined;
            if(golf) { _fun79497_ip = 90; continue _fun79497 }
 85:
            tango = oscar.value;
 90:
            mike = mike == tango;
            if(mike) { _fun79497_ip = 100; continue _fun79497 }
 97:
            mike = tango;
 100:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            tango = tango.bind(report)(entity);
            entity = tango.getUserIsTeen;
            entity = entity.bind(tango)();
            if(entity) { _fun79497_ip = 136; continue _fun79497 }
 133:
            entity = zulu;
 136:
            if(!entity) { _fun79497_ip = 142; continue _fun79497 }
 139:
            entity = mike;
 142:
            return entity;
        }
    };
    zulu['getSafetyAlertsSettingOrDefault'] = report;
    report = function(argFoo) { // Original name: getInappropriateConversationTakeoverForChannel
        _fun79498: for(var _fun79498_ip = 0; ; ) switch(_fun79498_ip) {
 0:
            tango = function(argFoo) { // Original name: getTier1WarningsForChannel
                zulu = _closure1_slot4;
                mike = zulu.getChannelSafetyWarnings;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = _closure1_slot5;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = undefined;
            mike = argFoo;
            tango = tango.bind(zulu)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity != mike;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            mike = mike.length;
            zulu = 0;
            if(!(!(mike > zulu))) { _fun79498_ip = 84; continue _fun79498 }
 47:
            mike = tango.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity == mike;
                return entity;
            };
            mike = mike.bind(tango)(entity);
            report = mike.length;
            tango = 1;
            entity = null;
            if(!(tango === report)) { _fun79498_ip = 82; continue _fun79498 }
 78:
            entity = mike[zulu];
 82:
            return entity;
 84:
            entity = null;
            return entity;
        }
    };
    zulu['getInappropriateConversationTakeoverForChannel'] = report;
    tango = function(argFoo) { // Original name: shouldShowInappropriateConversationTakeoverForChannelRecord
        _fun79503: for(var _fun79503_ip = 0; ; ) switch(_fun79503_ip) {
 0:
            mike = argFoo;
            zulu = mike.safetyWarnings;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun79503_ip = 38; continue _fun79503 }
 18:
            tango = _closure1_slot6;
            zulu = mike.safetyWarnings;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 38:
            return entity;
        }
    };
    zulu['shouldShowInappropriateConversationTakeoverForChannelRecord'] = tango;
    zulu['shouldShowTakeoverForWarnings'] = mike;
    return entity;
})();