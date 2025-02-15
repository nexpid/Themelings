// app/modules/autocompleter/createAutocompleterResultForChannelId.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
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
    tango = tango.AutocompleterResultTypes;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/autocompleter/createAutocompleterResultForChannelId.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createAutocompleterResultForChannelId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = arguments[1];
            report = arguments[2];
            tango = arguments[3];
            options = undefined;
            if(!(zulu === options)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            zulu = _closure1_slot2;
 22:
            if(!(report === options)) { _fun00002_ip = 33; continue _fun00001 }
 26:
            report = _closure1_slot4;
 33:
            if(!(tango === options)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            tango = _closure1_slot3;
 44:
            mike = zulu.getChannel;
            entity = argFoo;
            golf = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != golf)) { _fun00002_ip = 339; continue _fun00001 }
 66:
            zulu = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 5;
            mike = verify[mike];
            zulu = zulu.bind(options)(mike);
            mike = zulu.computeChannelName;
            tango = mike.bind(zulu)(golf, report, tango);
            zulu = golf.type;
            mike = _closure1_slot6;
            mike = mike.DM;
            if(!(mike !== zulu)) { _fun00002_ip = 271; continue _fun00001 }
 124:
            mike = _closure1_slot6;
            mike = mike.GROUP_DM;
            if(!(mike !== zulu)) { _fun00002_ip = 236; continue _fun00001 }
 138:
            mike = _closure1_slot6;
            mike = mike.GUILD_VOICE;
            if(!(mike !== zulu)) { _fun00002_ip = 201; continue _fun00001 }
 152:
            mike = _closure1_slot6;
            mike = mike.GUILD_STAGE_VOICE;
            if(!(mike !== zulu)) { _fun00002_ip = 201; continue _fun00001 }
 166:
            mike = {};
            zulu = _closure1_slot5;
            zulu = zulu.TEXT_CHANNEL;
            mike['type'] = zulu;
            mike['record'] = golf;
            zulu = 0;
            mike['score'] = zulu;
            mike['comparator'] = tango;
            return mike;
 201:
            mike = {};
            zulu = _closure1_slot5;
            zulu = zulu.VOICE_CHANNEL;
            mike['type'] = zulu;
            mike['record'] = golf;
            zulu = 0;
            mike['score'] = zulu;
            mike['comparator'] = tango;
            return mike;
 236:
            mike = {};
            zulu = _closure1_slot5;
            zulu = zulu.GROUP_DM;
            mike['type'] = zulu;
            mike['record'] = golf;
            zulu = 0;
            mike['score'] = zulu;
            mike['comparator'] = tango;
            return mike;
 271:
            zulu = report.getUser;
            mike = golf.getRecipientId;
            mike = mike.bind(golf)();
            report = zulu.bind(report)(mike);
            zulu = entity == report;
            mike = null;
            if(zulu) { _fun00002_ip = 337; continue _fun00001 }
 301:
            zulu = {};
            oscar = _closure1_slot5;
            oscar = oscar.USER;
            zulu['type'] = oscar;
            zulu['record'] = report;
            report = 0;
            zulu['score'] = report;
            zulu['comparator'] = tango;
            mike = zulu;
 337:
            return mike;
 339:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();