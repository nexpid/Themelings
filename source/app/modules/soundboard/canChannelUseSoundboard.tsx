// app/modules/soundboard/canChannelUseSoundboard.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    tango = function(argFoo) { // Original name: canChannelUseSoundboard
        _fun65639: for(var _fun65639_ip = 0; ; ) switch(_fun65639_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity != tango)) { _fun65639_ip = 129; continue _fun65639 }
 9:
            mike = _closure1_slot4;
            report = mike.CALLABLE;
            zulu = report.has;
            mike = tango.type;
            mike = zulu.bind(report)(mike);
            if(mike) { _fun65639_ip = 125; continue _fun65639 }
 40:
            report = _closure1_slot1;
            zulu = report.can;
            mike = _closure1_slot5;
            mike = mike.USE_SOUNDBOARD;
            zulu = zulu.bind(report)(mike, tango);
            oscar = _closure1_slot1;
            report = oscar.can;
            mike = _closure1_slot5;
            mike = mike.SPEAK;
            mike = report.bind(oscar)(mike, tango);
            tango = tango.type;
            entity = _closure1_slot3;
            entity = entity.GUILD_VOICE;
            entity = tango === entity;
            if(!entity) { _fun65639_ip = 117; continue _fun65639 }
 114:
            entity = zulu;
 117:
            if(!entity) { _fun65639_ip = 123; continue _fun65639 }
 120:
            entity = mike;
 123:
            return entity;
 125:
            entity = true;
            return entity;
 129:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = tango;
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
    var _closure1_slot0 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ChannelTypes;
    var _closure1_slot3 = options;
    options = report.ChannelTypesSets;
    var _closure1_slot4 = options;
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/soundboard/canChannelUseSoundboard.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function() { // Original name: canSelectedVoiceChannelUseSoundboard
        zulu = _closure1_slot2;
        mike = zulu.getVoiceChannelId;
        tango = mike.bind(zulu)();
        zulu = _closure1_slot6;
        mike = _closure1_slot0;
        entity = mike.getChannel;
        mike = entity.bind(mike)(tango);
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['canSelectedVoiceChannelUseSoundboard'] = mike;
    return entity;
})();