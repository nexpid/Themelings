// app/modules/guild_scheduled_events/utils/EntityUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar) { // Original name: _getLocationFromEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBar;
            entity = _closure1_slot1;
            zuuluu = entity.EXTERNAL;
            entity = argFoo;
            zuuluu = entity === zuuluu;
            if(!zuuluu) { _fun00002_ip = 32; continue _fun00001 }
 26:
            entity = null;
            zuuluu = entity != michal;
 32:
            if(!zuuluu) { _fun00002_ip = 43; continue _fun00001 }
 35:
            entity = 'location';
            zuuluu = entity in michal;
 43:
            entity = null;
            if(!zuuluu) { _fun00002_ip = 53; continue _fun00001 }
 48:
            entity = michal.location;
 53:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildScheduledEventEntityTypes;
    var _closure1_slot1 = golfie;
    tangon = tangon.EntityChannelTypes;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/utils/EntityUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getChannelFromEvent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            report = zuuluu.entity_type;
            michal = zuuluu.channel_id;
            entity = _closure1_slot2;
            report = report in entity;
            if(!report) { _fun00004_ip = 34; continue _fun00003 }
 28:
            entity = null;
            report = entity != michal;
 34:
            entity = undefined;
            if(!report) { _fun00004_ip = 75; continue _fun00003 }
 39:
            report = _closure1_slot0;
            tangon = report.getChannel;
            zuuluu = zuuluu.channel_id;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = null;
            tangon = tangon != zuuluu;
            michal = undefined;
            if(!tangon) { _fun00004_ip = 72; continue _fun00003 }
 69:
            michal = zuuluu;
 72:
            entity = michal;
 75:
            return entity;
        }
    };
    zuuluu['getChannelFromEvent'] = tangon;
    tangon = function(argFoo) { // Original name: getLocationFromEvent
        entity = argFoo;
        tangon = _closure1_slot3;
        zuuluu = entity.entity_type;
        michal = entity.entity_metadata;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['getLocationFromEvent'] = tangon;
    tangon = function(argFoo) { // Original name: getLocationFromEventData
        entity = argFoo;
        tangon = _closure1_slot3;
        zuuluu = entity.entityType;
        michal = entity.entityMetadata;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['getLocationFromEventData'] = tangon;
    michal = function(argFoo) { // Original name: getChannelTypeFromEntity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot1;
            entity = entity.VOICE;
            if(!(zuuluu !== entity)) { _fun00006_ip = 36; continue _fun00005 }
 20:
            entity = _closure1_slot1;
            tangon = entity.STAGE_INSTANCE;
            entity = undefined;
            if(!(zuuluu === tangon)) { _fun00006_ip = 44; continue _fun00005 }
 36:
            michal = _closure1_slot2;
            entity = michal[zuuluu];
 44:
            return entity;
        }
    };
    zuuluu['getChannelTypeFromEntity'] = michal;
    return entity;
})();