// app/modules/game_console/trackVoiceCallTransfer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_console/trackVoiceCallTransfer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: trackVoiceCallTransfer
        _fun103225: for(var _fun103225_ip = 0; ; ) switch(_fun103225_ip) {
 0:
            golf = argFoo;
            romeo = argBaz;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot5;
            zulu = mike.VOICE_CALL_TRANSFER;
            mike = {};
            options = null;
            offset = options != romeo;
            verify = 'discord_client';
            if(!offset) { _fun103225_ip = 102; continue _fun103225 }
 63:
            yankee = _closure1_slot4;
            offset = yankee.getSessionById;
            yankee = offset.bind(yankee)(romeo);
            romeo = options == yankee;
            offset = undefined;
            if(romeo) { _fun103225_ip = 99; continue _fun103225 }
 87:
            yankee = yankee.clientInfo;
            offset = yankee.os;
 99:
            verify = offset;
 102:
            mike['source_platform'] = verify;
            offset = _closure1_slot2;
            verify = offset.getChannel;
            verify = verify.bind(offset)(golf);
            offset = options == verify;
            options = undefined;
            if(offset) { _fun103225_ip = 137; continue _fun103225 }
 132:
            options = verify.guild_id;
 137:
            mike['guild_id'] = options;
            mike['channel_id'] = golf;
            golf = _closure1_slot3;
            oscar = golf.getRTCConnectionId;
            oscar = oscar.bind(golf)();
            mike['rtc_connection_id'] = oscar;
            oscar = argBar;
            mike['target_platform'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();