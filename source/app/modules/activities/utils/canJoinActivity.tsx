// app/modules/activities/utils/canJoinActivity.tsx
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
    golf = tango.ActivityFlags;
    var _closure1_slot3 = golf;
    golf = tango.ChannelTypes;
    var _closure1_slot4 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/canJoinActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: canJoinActivity
        _fun80536: for(var _fun80536_ip = 0; ; ) switch(_fun80536_ip) {
 0:
            entity = argFoo;
            sizing = entity.user;
            kilo = entity.activity;
            romeo = entity.application;
            backup = entity.channelId;
            foxtrot = entity.currentUser;
            mike = entity.isEmbedded;
            offset = entity.ChannelStore;
            golf = entity.GuildStore;
            oscar = entity.GuildMemberCountStore;
            echo = entity.RelationshipStore;
            output = entity.SelectedChannelStore;
            verify = entity.VoiceStateStore;
            options = entity.PermissionStore;
            entity = offset.getChannel;
            yankee = entity.bind(offset)(backup);
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 1;
            entity = tango[entity];
            tango = undefined;
            report = report.bind(tango)(entity);
            entity = report.getIsActivitiesEnabledForCurrentPlatform;
            yankee = entity.bind(report)(yankee);
            entity = null;
            if(!(entity != sizing)) { _fun80536_ip = 575; continue _fun80536 }
 133:
            if(!mike) { _fun80536_ip = 143; continue _fun80536 }
 136:
            if(!(entity == backup)) { _fun80536_ip = 465; continue _fun80536 }
 143:
            result = _closure1_slot0;
            update = _closure1_slot2;
            report = 3;
            report = update[report];
            result = result.bind(tango)(report);
            report = result.isDesktop;
            report = report.bind(result)();
            if(report) { _fun80536_ip = 183; continue _fun80536 }
 176:
            if(mike) { _fun80536_ip = 183; continue _fun80536 }
 179:
            mike = false;
            return mike;
 183:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            result = 4;
            mike = mike[result];
            report = report.bind(tango)(mike);
            mike = _closure1_slot3;
            mike = mike.PARTY_PRIVACY_FRIENDS;
            mike = report.bind(tango)(kilo, mike);
            if(!mike) { _fun80536_ip = 244; continue _fun80536 }
 222:
            report = echo.isFriend;
            mike = sizing.id;
            mike = report.bind(echo)(mike);
            if(mike) { _fun80536_ip = 461; continue _fun80536 }
 244:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[result];
            report = report.bind(tango)(mike);
            mike = _closure1_slot3;
            mike = mike.PARTY_PRIVACY_VOICE_CHANNEL;
            mike = report.bind(tango)(kilo, mike);
            if(mike) { _fun80536_ip = 284; continue _fun80536 }
 280:
            mike = false;
            return mike;
 284:
            report = offset.getChannel;
            mike = output.getVoiceChannelId;
            mike = mike.bind(output)();
            output = report.bind(offset)(mike);
            if(!(entity != output)) { _fun80536_ip = 457; continue _fun80536 }
 311:
            result = verify.isInChannel;
            report = output.id;
            mike = sizing.id;
            mike = result.bind(verify)(report, mike);
            if(!mike) { _fun80536_ip = 457; continue _fun80536 }
 336:
            report = output.type;
            mike = _closure1_slot4;
            mike = mike.DM;
            if(!(mike !== report)) { _fun80536_ip = 453; continue _fun80536 }
 355:
            mike = _closure1_slot4;
            mike = mike.GROUP_DM;
            if(!(mike !== report)) { _fun80536_ip = 453; continue _fun80536 }
 369:
            report = golf.getGuild;
            mike = output.getGuildId;
            mike = mike.bind(output)();
            mike = report.bind(golf)(mike);
            if(!(entity != mike)) { _fun80536_ip = 449; continue _fun80536 }
 393:
            output = mike.hasFeature;
            report = _closure1_slot5;
            report = report.COMMUNITY;
            report = output.bind(mike)(report);
            if(report) { _fun80536_ip = 449; continue _fun80536 }
 417:
            report = oscar.getMemberCount;
            mike = mike.id;
            report = report.bind(oscar)(mike);
            entity = entity != report;
            if(!entity) { _fun80536_ip = 447; continue _fun80536 }
 440:
            mike = 100;
            entity = report < mike;
 447:
            return entity;
 449:
            entity = false;
            return entity;
 453:
            entity = true;
            return entity;
 457:
            entity = false;
            return entity;
 461:
            entity = true;
            return entity;
 465:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            entity = 2;
            mike = report[entity];
            oscar = oscar.bind(tango)(mike);
            mike = {};
            sizing = sizing.id;
            mike['userId'] = sizing;
            mike['activity'] = kilo;
            mike['channelId'] = backup;
            mike['currentUser'] = foxtrot;
            mike['application'] = romeo;
            mike['isActivitiesEnabledForCurrentPlatform'] = yankee;
            mike['ChannelStore'] = offset;
            mike['VoiceStateStore'] = verify;
            mike['PermissionStore'] = options;
            mike['GuildStore'] = golf;
            mike = oscar.bind(tango)(mike);
            zulu = _closure1_slot0;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.EmbeddedActivityJoinability;
            entity = entity.CAN_JOIN;
            entity = mike === entity;
            return entity;
 575:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();