// app/modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx
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
    tango = 0;
    options = oscar[tango];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useChannelsUserCanStartStageIn
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            oscar = null;
            tango = oscar == zulu;
            report = undefined;
            mike = undefined;
            if(tango) { _fun00002_ip = 23; continue _fun00001 }
 18:
            mike = zulu.id;
 23:
            zulu = oscar != mike;
            oscar = null;
            if(!zulu) { _fun00002_ip = 35; continue _fun00001 }
 32:
            oscar = mike;
 35:
            var _closure2_slot0 = oscar;
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 3;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStoresArray;
            golf = _closure1_slot2;
            zulu = new Array(2);
            zulu[0] = golf;
            mike = _closure1_slot4;
            zulu[1] = mike;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                tango = _closure1_slot2;
                zulu = tango.getChannels;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                entity = _closure1_slot3;
                tango = mike[entity];
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        mike = argBar;
                        zulu = mike.channel;
                        tango = zulu.isGuildStageVoice;
                        tango = tango.bind(zulu)();
                        if(!tango) { _fun00004_ip = 116; continue _fun00003 }
 24:
                        golf = mike.channel;
                        oscar = _closure1_slot4;
                        verify = undefined;
                        if(!(oscar === verify)) { _fun00004_ip = 46; continue _fun00003 }
 42:
                        oscar = _closure1_slot4;
 46:
                        mike = golf.isGuildStageVoice;
                        mike = mike.bind(golf)();
                        report = !mike;
                        mike = !report;
                        if(report) { _fun00004_ip = 103; continue _fun00003 }
 65:
                        report = oscar.can;
                        options = _closure1_slot0;
                        offset = _closure1_slot1;
                        tango = 2;
                        tango = offset[tango];
                        tango = options.bind(verify)(tango);
                        tango = tango.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                        mike = report.bind(oscar)(tango, golf);
 103:
                        if(!mike) { _fun00004_ip = 116; continue _fun00003 }
 106:
                        mike = entity.push;
                        mike = mike.bind(entity)(zulu);
 116:
                        return entity;
                    }
                };
                entity = new Array(0);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useChannelsUserCanStartStageIn'] = mike;
    return entity;
})();