// app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/isVoiceEmbeddedActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isVoiceEmbeddedActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = arguments[1];
            mike = arguments[2];
            verify = undefined;
            if(!(tango === verify)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            tango = _closure1_slot3;
 19:
            if(!(mike === verify)) { _fun00002_ip = 30; continue _fun00001 }
 23:
            mike = _closure1_slot4;
 30:
            zulu = tango.getChannel;
            entity = argFoo;
            golf = zulu.bind(tango)(entity);
            entity = mike.getVoiceChannelId;
            options = entity.bind(mike)();
            oscar = null;
            entity = oscar != golf;
            if(!entity) { _fun00002_ip = 194; continue _fun00001 }
 65:
            zulu = golf.type;
            tango = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 4;
            mike = offset[mike];
            mike = tango.bind(verify)(mike);
            mike = mike.ChannelTypes;
            mike = mike.GUILD_VOICE;
            mike = zulu === mike;
            if(mike) { _fun00002_ip = 191; continue _fun00001 }
 112:
            zulu = golf.isPrivate;
            zulu = zulu.bind(golf)();
            tango = !zulu;
            zulu = !tango;
            if(tango) { _fun00002_ip = 188; continue _fun00001 }
 131:
            tango = golf.id;
            tango = tango === options;
            if(tango) { _fun00002_ip = 185; continue _fun00001 }
 143:
            verify = _closure1_slot5;
            options = verify.getVoiceStatesForChannel;
            golf = golf.id;
            golf = options.bind(verify)(golf);
            options = _closure1_slot2;
            report = options.getId;
            report = report.bind(options)();
            report = golf[report];
            tango = oscar != report;
 185:
            zulu = tango;
 188:
            mike = zulu;
 191:
            entity = mike;
 194:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();