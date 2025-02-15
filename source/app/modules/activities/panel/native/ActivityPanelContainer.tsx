// app/modules/activities/panel/native/ActivityPanelContainer.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function() { // Original name: ActivityPanelContainer
        _fun121261: for(var _fun121261_ip = 0; ; ) switch(_fun121261_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            report = undefined;
            golf = zulu.bind(report)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot5;
            tango = new Array(3);
            tango[0] = entity;
            entity = _closure1_slot3;
            tango[1] = entity;
            entity = _closure1_slot4;
            tango[2] = entity;
            zulu = function() {
                _fun121262: for(var _fun121262_ip = 0; ; ) switch(_fun121262_ip) {
 0:
                    mike = _closure1_slot5;
                    entity = mike.getConnectedActivityChannelId;
                    tango = entity.bind(mike)();
                    report = null;
                    if(!(report != tango)) { _fun121262_ip = 142; continue _fun121262 }
 23:
                    mike = _closure1_slot3;
                    entity = mike.getChannel;
                    golf = entity.bind(mike)(tango);
                    entity = report == golf;
                    mike = undefined;
                    oscar = undefined;
                    if(entity) { _fun121262_ip = 53; continue _fun121262 }
 48:
                    oscar = golf.type;
 53:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 6;
                    entity = verify[entity];
                    entity = options.bind(mike)(entity);
                    entity = entity.ChannelTypes;
                    entity = entity.GUILD_TEXT;
                    entity = oscar === entity;
                    if(entity) { _fun121262_ip = 140; continue _fun121262 }
 92:
                    report = report == golf;
                    oscar = undefined;
                    if(report) { _fun121262_ip = 111; continue _fun121262 }
 101:
                    report = golf.isPrivate;
                    oscar = report.bind(golf)();
 111:
                    report = true;
                    mike = undefined;
                    if(!(report === oscar)) { _fun121262_ip = 137; continue _fun121262 }
 119:
                    report = _closure1_slot4;
                    zulu = report.getVoiceChannelId;
                    zulu = zulu.bind(report)();
                    mike = zulu !== tango;
 137:
                    entity = mike;
 140:
                    return entity;
 142:
                    entity = false;
                    return entity;
                }
            };
            entity = new Array(0);
            zulu = oscar.bind(golf)(tango, zulu, entity);
            entity = null;
            if(!zulu) { _fun121261_ip = 139; continue _fun121261 }
 83:
            tango = _closure1_slot6;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 7;
            mike = options[mike];
            zulu = golf.bind(report)(mike);
            mike = {};
            oscar = 8;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 139:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/ActivityPanelContainer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();