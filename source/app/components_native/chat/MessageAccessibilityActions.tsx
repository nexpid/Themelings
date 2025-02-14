// app/components_native/chat/MessageAccessibilityActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    tango = {};
    report = 'view_profile';
    tango['VIEW_PROFILE'] = report;
    report = 'add_reaction';
    tango['ADD_REACTION'] = report;
    report = 'reply';
    tango['REPLY'] = report;
    var _closure1_slot5 = tango;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'components_native/chat/MessageAccessibilityActions.tsx';
    report = oscar.bind(golf)(report);
    zulu['MessageAccessibilityAction'] = tango;
    tango = function(argFoo) { // Original name: getMessageAccessibilityActionFromLabel
        mike = {};
        golf = _closure1_slot0;
        options = _closure1_slot1;
        zulu = 3;
        tango = options[zulu];
        oscar = undefined;
        tango = golf.bind(oscar)(tango);
        verify = tango.intl;
        report = verify.string;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.iXAna2;
        report = report.bind(verify)(tango);
        entity = _closure1_slot5;
        tango = entity.VIEW_PROFILE;
        mike[report] = tango;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        verify = tango.intl;
        report = verify.string;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.lfIHs7;
        report = report.bind(verify)(tango);
        tango = entity.ADD_REACTION;
        mike[report] = tango;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        report = tango.intl;
        tango = report.string;
        zulu = options[zulu];
        zulu = golf.bind(oscar)(zulu);
        zulu = zulu.t;
        zulu = zulu.5IEsGx;
        zulu = tango.bind(report)(zulu);
        entity = entity.REPLY;
        mike[zulu] = entity;
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    zulu['getMessageAccessibilityActionFromLabel'] = tango;
    mike = function(argFoo, argBar) { // Original name: createMessageAccessibilityActions
        _fun72669: for(var _fun72669_ip = 0; ; ) switch(_fun72669_ip) {
 0:
            oscar = argBar;
            entity = null;
            mike = entity == oscar;
            verify = undefined;
            report = undefined;
            if(mike) { _fun72669_ip = 26; continue _fun72669 }
 16:
            mike = oscar.getGuildId;
            report = mike.bind(oscar)();
 26:
            if(!(entity != report)) { _fun72669_ip = 402; continue _fun72669 }
 33:
            if(!(entity != oscar)) { _fun72669_ip = 402; continue _fun72669 }
 40:
            zulu = _closure1_slot2;
            mike = zulu.canChatInGuild;
            mike = mike.bind(zulu)(report);
            if(!mike) { _fun72669_ip = 87; continue _fun72669 }
 61:
            golf = _closure1_slot3;
            report = golf.can;
            zulu = _closure1_slot4;
            zulu = zulu.ADD_REACTIONS;
            mike = report.bind(golf)(zulu, oscar);
 87:
            if(mike) { _fun72669_ip = 112; continue _fun72669 }
 90:
            zulu = entity == oscar;
            entity = undefined;
            if(zulu) { _fun72669_ip = 109; continue _fun72669 }
 99:
            zulu = oscar.isPrivate;
            entity = zulu.bind(oscar)();
 109:
            mike = entity;
 112:
            zulu = {};
            options = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 3;
            report = entity[offset];
            report = options.bind(verify)(report);
            golf = report.intl;
            report = golf.string;
            entity = entity[offset];
            entity = options.bind(verify)(entity);
            entity = entity.t;
            entity = entity.iXAna2;
            entity = report.bind(golf)(entity);
            zulu['label'] = entity;
            entity = _closure1_slot5;
            entity = entity.VIEW_PROFILE;
            zulu['name'] = entity;
            entity = new Array(1);
            entity[0] = zulu;
            if(!mike) { _fun72669_ip = 280; continue _fun72669 }
 198:
            zulu = entity.push;
            mike = {};
            yankee = _closure1_slot0;
            report = _closure1_slot1;
            golf = report[offset];
            golf = yankee.bind(verify)(golf);
            options = golf.intl;
            golf = options.string;
            report = report[offset];
            report = yankee.bind(verify)(report);
            report = report.t;
            report = report.lfIHs7;
            report = golf.bind(options)(report);
            mike['label'] = report;
            report = _closure1_slot5;
            report = report.ADD_REACTION;
            mike['name'] = report;
            mike = zulu.bind(entity)(mike);
 280:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 4;
            mike = report[mike];
            report = zulu.bind(verify)(mike);
            zulu = report.canReplyToMessage;
            mike = argFoo;
            mike = zulu.bind(report)(oscar, mike);
            if(!mike) { _fun72669_ip = 400; continue _fun72669 }
 318:
            zulu = entity.push;
            mike = {};
            options = _closure1_slot0;
            report = _closure1_slot1;
            oscar = report[offset];
            oscar = options.bind(verify)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = report[offset];
            report = options.bind(verify)(report);
            report = report.t;
            report = report.5IEsGx;
            report = oscar.bind(golf)(report);
            mike['label'] = report;
            tango = _closure1_slot5;
            tango = tango.REPLY;
            mike['name'] = tango;
            mike = zulu.bind(entity)(mike);
 400:
            return entity;
 402:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['createMessageAccessibilityActions'] = mike;
    return entity;
})();