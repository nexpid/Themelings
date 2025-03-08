// app/modules/activities/utils/canJoinActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityFlags;
    var _closure1_slot3 = golfie;
    golfie = tangon.ChannelTypes;
    var _closure1_slot4 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/canJoinActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: canJoinActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.user;
            kiloes = entity.activity;
            romeon = entity.application;
            backup = entity.channelId;
            foxtra = entity.currentUser;
            michal = entity.isEmbedded;
            offset = entity.ChannelStore;
            golfie = entity.GuildStore;
            oscard = entity.GuildMemberCountStore;
            echoed = entity.RelationshipStore;
            output = entity.SelectedChannelStore;
            verify = entity.VoiceStateStore;
            option = entity.PermissionStore;
            entity = offset.getChannel;
            yankee = entity.bind(offset)(backup);
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            entity = tangon[entity];
            tangon = undefined;
            report = report.bind(tangon)(entity);
            entity = report.getIsActivitiesEnabledForCurrentPlatform;
            yankee = entity.bind(report)(yankee);
            entity = null;
            if(!(entity != sizing)) { _fun00002_ip = 625; continue _fun00001 }
 133:
            if(!michal) { _fun00002_ip = 143; continue _fun00001 }
 136:
            if(!(entity == backup)) { _fun00002_ip = 515; continue _fun00001 }
 143:
            if(!michal) { _fun00002_ip = 193; continue _fun00001 }
 146:
            if(!(entity == backup)) { _fun00002_ip = 193; continue _fun00001 }
 150:
            result = _closure1_slot1;
            update = _closure1_slot2;
            report = 3;
            report = update[report];
            result = result.bind(tangon)(report);
            report = _closure1_slot3;
            report = report.CONTEXTLESS;
            report = result.bind(tangon)(kiloes, report);
            if(report) { _fun00002_ip = 193; continue _fun00001 }
 189:
            report = false;
            return report;
 193:
            result = _closure1_slot0;
            update = _closure1_slot2;
            report = 4;
            report = update[report];
            result = result.bind(tangon)(report);
            report = result.isDesktop;
            report = report.bind(result)();
            if(report) { _fun00002_ip = 233; continue _fun00001 }
 226:
            if(michal) { _fun00002_ip = 233; continue _fun00001 }
 229:
            michal = false;
            return michal;
 233:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            result = 3;
            michal = michal[result];
            report = report.bind(tangon)(michal);
            michal = _closure1_slot3;
            michal = michal.PARTY_PRIVACY_FRIENDS;
            michal = report.bind(tangon)(kiloes, michal);
            if(!michal) { _fun00002_ip = 294; continue _fun00001 }
 272:
            report = echoed.isFriend;
            michal = sizing.id;
            michal = report.bind(echoed)(michal);
            if(michal) { _fun00002_ip = 511; continue _fun00001 }
 294:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[result];
            report = report.bind(tangon)(michal);
            michal = _closure1_slot3;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            michal = report.bind(tangon)(kiloes, michal);
            if(michal) { _fun00002_ip = 334; continue _fun00001 }
 330:
            michal = false;
            return michal;
 334:
            report = offset.getChannel;
            michal = output.getVoiceChannelId;
            michal = michal.bind(output)();
            output = report.bind(offset)(michal);
            if(!(entity != output)) { _fun00002_ip = 507; continue _fun00001 }
 361:
            result = verify.isInChannel;
            report = output.id;
            michal = sizing.id;
            michal = result.bind(verify)(report, michal);
            if(!michal) { _fun00002_ip = 507; continue _fun00001 }
 386:
            report = output.type;
            michal = _closure1_slot4;
            michal = michal.DM;
            if(!(michal !== report)) { _fun00002_ip = 503; continue _fun00001 }
 405:
            michal = _closure1_slot4;
            michal = michal.GROUP_DM;
            if(!(michal !== report)) { _fun00002_ip = 503; continue _fun00001 }
 419:
            report = golfie.getGuild;
            michal = output.getGuildId;
            michal = michal.bind(output)();
            michal = report.bind(golfie)(michal);
            if(!(entity != michal)) { _fun00002_ip = 499; continue _fun00001 }
 443:
            output = michal.hasFeature;
            report = _closure1_slot5;
            report = report.COMMUNITY;
            report = output.bind(michal)(report);
            if(report) { _fun00002_ip = 499; continue _fun00001 }
 467:
            report = oscard.getMemberCount;
            michal = michal.id;
            report = report.bind(oscard)(michal);
            entity = entity != report;
            if(!entity) { _fun00002_ip = 497; continue _fun00001 }
 490:
            michal = 100;
            entity = report < michal;
 497:
            return entity;
 499:
            entity = false;
            return entity;
 503:
            entity = true;
            return entity;
 507:
            entity = false;
            return entity;
 511:
            entity = true;
            return entity;
 515:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 2;
            michal = report[entity];
            oscard = oscard.bind(tangon)(michal);
            michal = {};
            sizing = sizing.id;
            michal['userId'] = sizing;
            michal['activity'] = kiloes;
            michal['channelId'] = backup;
            michal['currentUser'] = foxtra;
            michal['application'] = romeon;
            michal['isActivitiesEnabledForCurrentPlatform'] = yankee;
            michal['ChannelStore'] = offset;
            michal['VoiceStateStore'] = verify;
            michal['PermissionStore'] = option;
            michal['GuildStore'] = golfie;
            michal = oscard.bind(tangon)(michal);
            zuuluu = _closure1_slot0;
            entity = report[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.EmbeddedActivityJoinability;
            entity = entity.CAN_JOIN;
            entity = michal === entity;
            return entity;
 625:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();