// app/modules/action_sheet/native/components/EmojiRowUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.MessageFlags;
    var _closure1_slot2 = golf;
    golf = tango.MessageStates;
    var _closure1_slot3 = golf;
    tango = tango.MessageTypes;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/action_sheet/native/components/EmojiRowUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) {
        _fun91126: for(var _fun91126_ip = 0; ; ) switch(_fun91126_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            mike = argBaz;
            if(!entity) { _fun91126_ip = 15; continue _fun91126 }
 12:
            entity = mike;
 15:
            if(!entity) { _fun91126_ip = 40; continue _fun91126 }
 18:
            tango = zulu.state;
            mike = _closure1_slot3;
            mike = mike.SEND_FAILED;
            entity = tango !== mike;
 40:
            if(!entity) { _fun91126_ip = 65; continue _fun91126 }
 43:
            tango = zulu.type;
            mike = _closure1_slot4;
            mike = mike.THREAD_STARTER_MESSAGE;
            entity = tango !== mike;
 65:
            if(!entity) { _fun91126_ip = 90; continue _fun91126 }
 68:
            tango = zulu.type;
            mike = _closure1_slot4;
            mike = mike.GUILD_INVITE_REMINDER;
            entity = tango !== mike;
 90:
            if(!entity) { _fun91126_ip = 148; continue _fun91126 }
 93:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 1;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.hasFlag;
            zulu = zulu.flags;
            mike = _closure1_slot2;
            mike = mike.EPHEMERAL;
            mike = tango.bind(report)(zulu, mike);
            entity = !mike;
 148:
            return entity;
        }
    };
    zulu['shouldShowEmojiRow'] = mike;
    return entity;
})();