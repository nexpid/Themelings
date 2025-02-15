// app/modules/media_channel/MediaChannelExperimentUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    romeo = true;
    tango['value'] = romeo;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot0 = tango;
    tango = 1;
    report = options[tango];
    verify = golf.bind(entity)(report);
    oscar = verify.createExperiment;
    report = {'kind': 'guild', 'id': '2023-03_guild_media_channel', 'label': 'Media Channel'};
    offset = {};
    yankee = false;
    offset['enabled'] = yankee;
    report['defaultConfig'] = offset;
    foxtrot = {'id': 1, 'label': 'Enables guild to create a media channel'};
    offset = {};
    offset['enabled'] = romeo;
    foxtrot['config'] = offset;
    offset = new Array(1);
    offset[0] = foxtrot;
    report['treatments'] = offset;
    report = oscar.bind(verify)(report);
    var _closure1_slot1 = report;
    tango = options[tango];
    verify = golf.bind(entity)(tango);
    oscar = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2023-04_guild_media_channel_post_preview_embed_users', 'label': 'Guild Role Subscription Users'};
    offset = {};
    offset['enabledForUser'] = yankee;
    tango['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Enables for users Guild Media Post Preview Embeds'};
    offset = {};
    offset['enabledForUser'] = romeo;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    tango['treatments'] = offset;
    tango = oscar.bind(verify)(tango);
    var _closure1_slot2 = tango;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/media_channel/MediaChannelExperimentUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['GuildMediaExperiment'] = report;
    report = function(argFoo) { // Original name: useGuildEligibleForMediaChannels
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            golf = _closure1_slot1;
            oscar = golf.useExperiment;
            report = {};
            zulu = null;
            verify = zulu == tango;
            mike = undefined;
            if(verify) { _fun00002_ip = 34; continue _fun00001 }
 29:
            mike = tango.id;
 34:
            if(!(zulu == mike)) { _fun00002_ip = 42; continue _fun00001 }
 38:
            mike = _closure1_slot0;
 42:
            report['guildId'] = mike;
            mike = '96e84c_1';
            report['location'] = mike;
            mike = {};
            options = true;
            mike['autoTrackExposure'] = options;
            mike = oscar.bind(golf)(report, mike);
            mike = mike.enabled;
            report = zulu == tango;
            entity = undefined;
            if(report) { _fun00002_ip = 90; continue _fun00001 }
 85:
            entity = tango.id;
 90:
            entity = zulu != entity;
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 97:
            entity = mike;
 100:
            return entity;
        }
    };
    zulu['useGuildEligibleForMediaChannels'] = report;
    zulu['GuildMediaPostPreviewEmbedUsersExperiments'] = tango;
    tango = function() { // Original name: useEligibleForGuildMediaChannelPostPreviewEmbed
        tango = _closure1_slot2;
        zulu = tango.useExperiment;
        mike = {};
        entity = '96e84c_2';
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabledForUser;
        return entity;
    };
    zulu['useEligibleForGuildMediaChannelPostPreviewEmbed'] = tango;
    mike = function() { // Original name: isEligibleForGuildMediaChannelPostPreviewEmbed
        tango = _closure1_slot2;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = '96e84c_3';
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabledForUser;
        return entity;
    };
    zulu['isEligibleForGuildMediaChannelPostPreviewEmbed'] = mike;
    return entity;
})();