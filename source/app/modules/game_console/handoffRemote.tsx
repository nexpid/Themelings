// app/modules/game_console/handoffRemote.tsx
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
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/handoffRemote.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: handoffRemote
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            report = argBar;
            entity = zulu.sessionId;
            tango = null;
            mike = tango != entity;
            oscar = '';
            if(!mike) { _fun00002_ip = 28; continue _fun00001 }
 25:
            oscar = entity;
 28:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 1;
            offset = verify[golf];
            entity = undefined;
            yankee = options.bind(entity)(offset);
            offset = yankee.remoteDisconnect;
            offset = offset.bind(yankee)(oscar);
            golf = verify[golf];
            options = options.bind(entity)(golf);
            golf = options.disconnectRemote;
            golf = golf.bind(options)();
            golf = oscar;
            if(!(tango == report)) { _fun00002_ip = 95; continue _fun00001 }
 90:
            report = zulu.channelId;
 95:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 2;
            oscar = verify[oscar];
            options = options.bind(entity)(oscar);
            oscar = tango != report;
            tango = 'attempted to transfer to unknown channel';
            tango = options.bind(entity)(oscar, tango);
            oscar = zulu.selfMute;
            options = _closure1_slot3;
            tango = options.isSelfMute;
            tango = tango.bind(options)();
            if(!(oscar !== tango)) { _fun00002_ip = 185; continue _fun00001 }
 155:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            tango = 3;
            tango = options[tango];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.toggleSelfMute;
            tango = tango.bind(oscar)();
 185:
            tango = zulu.selfDeaf;
            oscar = _closure1_slot3;
            zulu = oscar.isSelfDeaf;
            zulu = zulu.bind(oscar)();
            if(!(tango !== zulu)) { _fun00002_ip = 239; continue _fun00001 }
 209:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 3;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.toggleSelfDeaf;
            zulu = zulu.bind(tango)();
 239:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            mike = tango[mike];
            oscar = zulu.bind(entity)(mike);
            mike = 'discord_client';
            mike = oscar.bind(entity)(report, mike, golf);
            mike = 5;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.selectVoiceChannel;
            mike = false;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    zulu['handoffRemote'] = mike;
    return entity;
})();