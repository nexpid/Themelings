// app/modules/read_states/trackAckMessages.tsx
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
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/read_states/trackAckMessages.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackAckMessages
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            mike = _closure1_slot2;
            entity = mike.getChannel;
            verify = entity.bind(mike)(golf);
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot6;
            zulu = mike.ACK_MESSAGES;
            mike = {};
            mike['channel_id'] = golf;
            golf = null;
            options = golf == verify;
            golf = undefined;
            if(options) { _fun00002_ip = 85; continue _fun00001 }
 75:
            options = verify.getGuildId;
            golf = options.bind(verify)();
 85:
            mike['guild_id'] = golf;
            golf = global;
            options = golf.location;
            mike['location'] = options;
            options = golf.Object;
            golf = options.values;
            verify = _closure1_slot4;
            oscar = verify.getGuilds;
            oscar = oscar.bind(verify)();
            options = golf.bind(options)(oscar);
            golf = options.map;
            oscar = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot3;
                tango = report.hasUnread;
                zulu = entity.id;
                kilo = tango.bind(report)(zulu);
                tango = report.getMentionCount;
                zulu = entity.id;
                foxtrot = tango.bind(report)(zulu);
                zulu = _closure1_slot5;
                tango = zulu.isMuted;
                mike = entity.id;
                yankee = tango.bind(zulu)(mike);
                mike = zulu.resolveGuildUnreadSetting;
                verify = mike.bind(zulu)(entity);
                output = entity.id;
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                result = '';
                entity = ',';
                sizing = entity;
                backup = entity;
                romeo = entity;
                offset = entity;
                entity = result[zulu](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify, options);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            mike['guild_unread_statuses'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();