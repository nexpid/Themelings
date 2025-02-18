// app/modules/media_channel/MediaChannelExperimentUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    romeon = true;
    tangon['value'] = romeon;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = option[tangon];
    verify = golfie.bind(entity)(report);
    oscard = verify.createExperiment;
    report = {'kind': 'guild', 'id': '2023-03_guild_media_channel', 'label': 'Media Channel'};
    offset = {};
    yankee = false;
    offset['enabled'] = yankee;
    report['defaultConfig'] = offset;
    foxtra = {'id': 1, 'label': 'Enables guild to create a media channel'};
    offset = {};
    offset['enabled'] = romeon;
    foxtra['config'] = offset;
    offset = new Array(1);
    offset[0] = foxtra;
    report['treatments'] = offset;
    report = oscard.bind(verify)(report);
    var _closure1_slot1 = report;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2023-04_guild_media_channel_post_preview_embed_users', 'label': 'Guild Role Subscription Users'};
    offset = {};
    offset['enabledForUser'] = yankee;
    tangon['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Enables for users Guild Media Post Preview Embeds'};
    offset = {};
    offset['enabledForUser'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    tangon['treatments'] = offset;
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot2 = tangon;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/media_channel/MediaChannelExperimentUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['GuildMediaExperiment'] = report;
    report = function(argFoo) { // Original name: useGuildEligibleForMediaChannels
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            golfie = _closure1_slot1;
            oscard = golfie.useExperiment;
            report = {};
            zuuluu = null;
            verify = zuuluu == tangon;
            michal = undefined;
            if(verify) { _fun00002_ip = 34; continue _fun00001 }
 29:
            michal = tangon.id;
 34:
            if(!(zuuluu == michal)) { _fun00002_ip = 42; continue _fun00001 }
 38:
            michal = _closure1_slot0;
 42:
            report['guildId'] = michal;
            michal = '96e84c_1';
            report['location'] = michal;
            michal = {};
            option = true;
            michal['autoTrackExposure'] = option;
            michal = oscard.bind(golfie)(report, michal);
            michal = michal.enabled;
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 90; continue _fun00001 }
 85:
            entity = tangon.id;
 90:
            entity = zuuluu != entity;
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 97:
            entity = michal;
 100:
            return entity;
        }
    };
    zuuluu['useGuildEligibleForMediaChannels'] = report;
    zuuluu['GuildMediaPostPreviewEmbedUsersExperiments'] = tangon;
    tangon = function() { // Original name: useEligibleForGuildMediaChannelPostPreviewEmbed
        tangon = _closure1_slot2;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = '96e84c_2';
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabledForUser;
        return entity;
    };
    zuuluu['useEligibleForGuildMediaChannelPostPreviewEmbed'] = tangon;
    michal = function() { // Original name: isEligibleForGuildMediaChannelPostPreviewEmbed
        tangon = _closure1_slot2;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = '96e84c_3';
        michal['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabledForUser;
        return entity;
    };
    zuuluu['isEligibleForGuildMediaChannelPostPreviewEmbed'] = michal;
    return entity;
})();