// app/modules/guild/usePostableChannelCount.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild/usePostableChannelCount.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSendMessageChannelCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 3;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot3;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot3;
                    zulu = tango.getChannels;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    entity = _closure1_slot4;
                    entity = mike[entity];
                    mike = null;
                    if(!(mike == entity)) { _fun00004_ip = 43; continue _fun00003 }
 39:
                    entity = new Array(0);
 43:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango, entity, zulu);
            zulu = tango.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun00002_ip = 106; continue _fun00001 }
 84:
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.channel;
                zulu = _closure1_slot5;
                mike = zulu.can;
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                report = 4;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.combine;
                entity = _closure1_slot6;
                report = entity.SEND_MESSAGES;
                entity = entity.VIEW_CHANNEL;
                entity = oscar.bind(golf)(report, entity);
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity = mike.length;
 106:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();