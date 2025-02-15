// app/modules/guild_scheduled_events/utils/EntityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar) { // Original name: _getLocationFromEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBar;
            entity = _closure1_slot1;
            zulu = entity.EXTERNAL;
            entity = argFoo;
            zulu = entity === zulu;
            if(!zulu) { _fun00002_ip = 32; continue _fun00001 }
 26:
            entity = null;
            zulu = entity != mike;
 32:
            if(!zulu) { _fun00002_ip = 43; continue _fun00001 }
 35:
            entity = 'location';
            zulu = entity in mike;
 43:
            entity = null;
            if(!zulu) { _fun00002_ip = 53; continue _fun00001 }
 48:
            entity = mike.location;
 53:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildScheduledEventEntityTypes;
    var _closure1_slot1 = golf;
    tango = tango.EntityChannelTypes;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/utils/EntityUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getChannelFromEvent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            report = zulu.entity_type;
            mike = zulu.channel_id;
            entity = _closure1_slot2;
            report = report in entity;
            if(!report) { _fun00004_ip = 34; continue _fun00003 }
 28:
            entity = null;
            report = entity != mike;
 34:
            entity = undefined;
            if(!report) { _fun00004_ip = 75; continue _fun00003 }
 39:
            report = _closure1_slot0;
            tango = report.getChannel;
            zulu = zulu.channel_id;
            zulu = tango.bind(report)(zulu);
            tango = null;
            tango = tango != zulu;
            mike = undefined;
            if(!tango) { _fun00004_ip = 72; continue _fun00003 }
 69:
            mike = zulu;
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    zulu['getChannelFromEvent'] = tango;
    tango = function(argFoo) { // Original name: getLocationFromEvent
        entity = argFoo;
        tango = _closure1_slot3;
        zulu = entity.entity_type;
        mike = entity.entity_metadata;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['getLocationFromEvent'] = tango;
    tango = function(argFoo) { // Original name: getLocationFromEventData
        entity = argFoo;
        tango = _closure1_slot3;
        zulu = entity.entityType;
        mike = entity.entityMetadata;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['getLocationFromEventData'] = tango;
    mike = function(argFoo) { // Original name: getChannelTypeFromEntity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot1;
            entity = entity.VOICE;
            if(!(zulu !== entity)) { _fun00006_ip = 36; continue _fun00005 }
 20:
            entity = _closure1_slot1;
            tango = entity.STAGE_INSTANCE;
            entity = undefined;
            if(!(zulu === tango)) { _fun00006_ip = 44; continue _fun00005 }
 36:
            mike = _closure1_slot2;
            entity = mike[zulu];
 44:
            return entity;
        }
    };
    zulu['getChannelTypeFromEntity'] = mike;
    return entity;
})();