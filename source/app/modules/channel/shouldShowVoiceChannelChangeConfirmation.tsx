// app/modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: shouldShowVoiceChannelChangeConfirmation
        _fun104592: for(var _fun104592_ip = 0; ; ) switch(_fun104592_ip) {
 0:
            oscar = argFoo;
            entity = _closure1_slot1;
            entity = entity.disableVoiceChannelChangeAlert;
            if(entity) { _fun104592_ip = 196; continue _fun104592 }
 22:
            mike = _closure1_slot0;
            entity = mike.getRemoteSessionId;
            report = entity.bind(mike)();
            tango = _closure1_slot4;
            mike = tango.getVoiceStateForSession;
            golf = _closure1_slot2;
            entity = golf.getId;
            entity = entity.bind(golf)();
            entity = mike.bind(tango)(entity, report);
            tango = null;
            if(!(tango == entity)) { _fun104592_ip = 192; continue _fun104592 }
 72:
            mike = _closure1_slot4;
            entity = mike.isCurrentClientInVoiceChannel;
            entity = entity.bind(mike)();
            if(entity) { _fun104592_ip = 93; continue _fun104592 }
 89:
            entity = false;
            return entity;
 93:
            report = _closure1_slot4;
            mike = report.isInChannel;
            entity = oscar.id;
            entity = mike.bind(report)(entity);
            if(entity) { _fun104592_ip = 188; continue _fun104592 }
 116:
            report = _closure1_slot3;
            mike = report.getGuild;
            entity = oscar.getGuildId;
            entity = entity.bind(oscar)();
            mike = mike.bind(report)(entity);
            report = tango == mike;
            entity = undefined;
            if(report) { _fun104592_ip = 155; continue _fun104592 }
 149:
            entity = mike.afkChannelId;
 155:
            entity = tango == entity;
            if(entity) { _fun104592_ip = 186; continue _fun104592 }
 162:
            tango = _closure1_slot4;
            zulu = tango.isInChannel;
            mike = mike.afkChannelId;
            mike = zulu.bind(tango)(mike);
            entity = !mike;
 186:
            return entity;
 188:
            entity = false;
            return entity;
 192:
            entity = false;
            return entity;
 196:
            entity = false;
            return entity;
        }
    };
    zulu['shouldShowVoiceChannelChangeConfirmation'] = mike;
    return entity;
})();