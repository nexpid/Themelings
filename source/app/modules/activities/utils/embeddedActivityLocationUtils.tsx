// app/modules/activities/utils/embeddedActivityLocationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = /^i-[^-]+-cl-[^-]+-\d+-(\d+)$/;
    var _closure1_slot0 = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/embeddedActivityLocationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLocationChannelId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'channel_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 31; continue _fun00001 }
 26:
            entity = michal.channel_id;
 31:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationChannelId'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLocationGuildId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'guild_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 31; continue _fun00003 }
 26:
            entity = michal.guild_id;
 31:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationGuildId'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLocationStartingChannelId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00006_ip = 13; continue _fun00005 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'starting_channel_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00006_ip = 32; continue _fun00005 }
 26:
            entity = michal.starting_channel_id;
 32:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationStartingChannelId'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLocationStartingGuildId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00008_ip = 13; continue _fun00007 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'starting_guild_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00008_ip = 36; continue _fun00007 }
 28:
            entity = michal.starting_guild_id;
 36:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationStartingGuildId'] = tangon;
    michal = function(argFoo) { // Original name: getStartingChannelIdForContextlessInstanceId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = 'string';
            entity = typeof zuuluu;
            if(!(michal !== entity)) { _fun00010_ip = 18; continue _fun00009 }
 14:
            entity = undefined;
            return entity;
 18:
            michal = zuuluu.match;
            entity = _closure1_slot0;
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            zuuluu = entity != tangon;
            michal = undefined;
            if(!zuuluu) { _fun00010_ip = 54; continue _fun00009 }
 47:
            zuuluu = 1;
            michal = tangon[zuuluu];
 54:
            zuuluu = '0';
            entity = undefined;
            if(!(zuuluu !== michal)) { _fun00010_ip = 69; continue _fun00009 }
 66:
            entity = michal;
 69:
            return entity;
        }
    };
    zuuluu['getStartingChannelIdForContextlessInstanceId'] = michal;
    return entity;
})();