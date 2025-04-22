// app/modules/activities/utils/embeddedActivityLocationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function(argFoo) { // Original name: getStartingGuildChannelIdsForContextlessInstanceId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = 'string';
            entity = typeof zuuluu;
            if(!(michal === entity)) { _fun00002_ip = 107; continue _fun00001 }
 14:
            michal = zuuluu.match;
            entity = _closure1_slot0;
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != tangon)) { _fun00002_ip = 90; continue _fun00001 }
 38:
            entity = {};
            report = 1;
            golfie = tangon[report];
            oscard = '0';
            zuuluu = undefined;
            if(!(oscard !== golfie)) { _fun00002_ip = 63; continue _fun00001 }
 59:
            zuuluu = tangon[report];
 63:
            entity['guildId'] = zuuluu;
            zuuluu = 2;
            report = tangon[zuuluu];
            michal = undefined;
            if(!(oscard !== report)) { _fun00002_ip = 84; continue _fun00001 }
 80:
            michal = tangon[zuuluu];
 84:
            entity['channelId'] = michal;
            _fun00002_ip = 105; continue _fun00001;
 90:
            michal = {};
            zuuluu = undefined;
            michal['guildId'] = zuuluu;
            michal['channelId'] = zuuluu;
            entity = michal;
 105:
            return entity;
 107:
            entity = {};
            michal = undefined;
            entity['guildId'] = michal;
            entity['channelId'] = michal;
            return entity;
        }
    };
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = /^i-[^-]+-cl-[^-]+-(\d+)-(\d+)$/;
    var _closure1_slot0 = entity;
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/utils/embeddedActivityLocationUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: getEmbeddedActivityLocationChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'channel_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 31; continue _fun00003 }
 26:
            entity = michal.channel_id;
 31:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationChannelId'] = report;
    report = function(argFoo) { // Original name: getEmbeddedActivityLocationGuildId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00006_ip = 13; continue _fun00005 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'guild_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00006_ip = 31; continue _fun00005 }
 26:
            entity = michal.guild_id;
 31:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationGuildId'] = report;
    report = function(argFoo) { // Original name: getEmbeddedActivityLocationStartingChannelId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00008_ip = 13; continue _fun00007 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'starting_channel_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00008_ip = 32; continue _fun00007 }
 26:
            entity = michal.starting_channel_id;
 32:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationStartingChannelId'] = report;
    report = function(argFoo) { // Original name: getEmbeddedActivityLocationStartingGuildId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(entity == michal)) { _fun00010_ip = 13; continue _fun00009 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = 'starting_guild_id';
            zuuluu = entity in michal;
            entity = undefined;
            if(!zuuluu) { _fun00010_ip = 36; continue _fun00009 }
 28:
            entity = michal.starting_guild_id;
 36:
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLocationStartingGuildId'] = report;
    zuuluu['getStartingGuildChannelIdsForContextlessInstanceId'] = tangon;
    michal = function(argFoo) { // Original name: getStartingChannelIdForContextlessInstanceId
        zuuluu = _closure1_slot1;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        entity = entity.channelId;
        return entity;
    };
    zuuluu['getStartingChannelIdForContextlessInstanceId'] = michal;
    return entity;
})();