// app/modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: handleAcceptEventInstantInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.handleNSFWGuildInvite;
            zulu = zulu.bind(tango)(oscar);
            if(zulu) { _fun00002_ip = 209; continue _fun00001 }
 47:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 2;
            zulu = golf[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.isGuildScheduledEventInviteEmbed;
            zulu = zulu.bind(tango)(oscar);
            if(!zulu) { _fun00002_ip = 209; continue _fun00001 }
 84:
            zulu = oscar.code;
            tango = null;
            if(!(tango != zulu)) { _fun00002_ip = 209; continue _fun00001 }
 95:
            options = _closure1_slot3;
            golf = options.getGuildScheduledEvent;
            verify = oscar.guild_scheduled_event;
            offset = tango == verify;
            zulu = undefined;
            if(offset) { _fun00002_ip = 125; continue _fun00001 }
 120:
            zulu = verify.id;
 125:
            zulu = golf.bind(options)(zulu);
            var _closure2_slot0 = zulu;
            if(!(tango != zulu)) { _fun00002_ip = 209; continue _fun00001 }
 138:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.acceptInvite;
            mike = {};
            oscar = oscar.code;
            mike['inviteKey'] = oscar;
            oscar = {};
            golf = 'Guild Scheduled Event Invite Button Embed';
            oscar['location'] = golf;
            mike['context'] = oscar;
            report = function() { // Original name: callback
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.transitionToEventDetailsFromInvite;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike['callback'] = report;
            mike = zulu.bind(tango)(mike);
 209:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();