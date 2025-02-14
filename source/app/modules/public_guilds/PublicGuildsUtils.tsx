// app/modules/public_guilds/PublicGuildsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID;
    var _closure1_slot3 = golf;
    golf = tango.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID;
    var _closure1_slot4 = golf;
    tango = tango.ENABLE_COMMUNITY_FLOW_MODAL_KEY;
    var _closure1_slot5 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/public_guilds/PublicGuildsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isPublicSystemMessage
        _fun69375: for(var _fun69375_ip = 0; ; ) switch(_fun69375_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            entity = mike[entity];
            mike = undefined;
            entity = report.bind(mike)(entity);
            entity = entity.bind(mike)(tango);
            if(!entity) { _fun69375_ip = 55; continue _fun69375 }
 36:
            mike = tango.messageReference;
            report = mike.guild_id;
            mike = _closure1_slot3;
            entity = report === mike;
 55:
            if(entity) { _fun69375_ip = 95; continue _fun69375 }
 58:
            report = tango.author;
            mike = null;
            mike = mike != report;
            if(!mike) { _fun69375_ip = 92; continue _fun69375 }
 73:
            tango = tango.author;
            tango = tango.id;
            zulu = _closure1_slot4;
            mike = tango === zulu;
 92:
            entity = mike;
 95:
            return entity;
        }
    };
    zulu['isPublicSystemMessage'] = tango;
    tango = function() { // Original name: getPublicSystemMessageAvatar
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['getPublicSystemMessageAvatar'] = tango;
    mike = function(argFoo) {
        oscar = argFoo;
        zulu = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 4;
        mike = verify[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.USER_FLOW_TRANSITION;
        mike = {};
        options = _closure1_slot5;
        mike['flow_type'] = options;
        options = oscar.fromStep;
        mike['from_step'] = options;
        options = oscar.toStep;
        mike['to_step'] = options;
        options = _closure1_slot0;
        golf = 5;
        golf = verify[golf];
        options = options.bind(entity)(golf);
        golf = options.collectGuildAnalyticsMetadata;
        oscar = oscar.guildId;
        offset = golf.bind(options)(oscar);
        yankee = mike;
        oscar = copyDataProperties(yankee, offset);
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackEnableCommunityFlow'] = mike;
    return entity;
})();