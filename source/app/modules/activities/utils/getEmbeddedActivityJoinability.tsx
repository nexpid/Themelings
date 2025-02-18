// app/modules/activities/utils/getEmbeddedActivityJoinability.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getEmbeddedActivityJoinability
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            romeon = zuuluu.userId;
            foxtra = zuuluu.activity;
            yankee = zuuluu.application;
            golfie = zuuluu.channelId;
            entity = zuuluu.currentUser;
            michal = zuuluu.isActivitiesEnabledForCurrentPlatform;
            tangon = zuuluu.ChannelStore;
            option = zuuluu.VoiceStateStore;
            verify = zuuluu.PermissionStore;
            oscard = zuuluu.GuildStore;
            zuuluu = null;
            if(!(zuuluu != romeon)) { _fun00002_ip = 599; continue _fun00001 }
 69:
            backup = zuuluu == entity;
            offset = undefined;
            report = undefined;
            if(backup) { _fun00002_ip = 86; continue _fun00001 }
 80:
            report = entity.nsfwAllowed;
 86:
            entity = false;
            if(!(entity === report)) { _fun00002_ip = 131; continue _fun00001 }
 92:
            entity = zuuluu == yankee;
            report = undefined;
            if(entity) { _fun00002_ip = 122; continue _fun00001 }
 101:
            entity = yankee.embeddedActivityConfig;
            backup = zuuluu == entity;
            report = undefined;
            if(backup) { _fun00002_ip = 122; continue _fun00001 }
 116:
            report = entity.requires_age_gate;
 122:
            entity = true;
            if(!(entity !== report)) { _fun00002_ip = 584; continue _fun00001 }
 131:
            if(michal) { _fun00002_ip = 149; continue _fun00001 }
 137:
            michal = _closure1_slot9;
            michal = michal.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return michal;
 149:
            report = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 6;
            michal = backup[michal];
            report = report.bind(offset)(michal);
            backup = zuuluu == yankee;
            michal = undefined;
            if(backup) { _fun00002_ip = 199; continue _fun00001 }
 178:
            yankee = yankee.embeddedActivityConfig;
            backup = zuuluu == yankee;
            michal = undefined;
            if(backup) { _fun00002_ip = 199; continue _fun00001 }
 193:
            michal = yankee.supported_platforms;
 199:
            michal = report.bind(offset)(michal);
            if(michal) { _fun00002_ip = 219; continue _fun00001 }
 207:
            michal = _closure1_slot9;
            michal = michal.ACTIVITY_NOT_SUPPORTED_ON_OS;
            return michal;
 219:
            report = golfie;
            if(!(zuuluu == report)) { _fun00002_ip = 270; continue _fun00001 }
 226:
            yankee = option.getVoiceStateForSession;
            backup = zuuluu == foxtra;
            michal = undefined;
            if(backup) { _fun00002_ip = 247; continue _fun00001 }
 241:
            michal = foxtra.session_id;
 247:
            yankee = yankee.bind(option)(romeon, michal);
            romeon = zuuluu == yankee;
            michal = undefined;
            if(romeon) { _fun00002_ip = 267; continue _fun00001 }
 262:
            michal = yankee.channelId;
 267:
            report = michal;
 270:
            if(!(zuuluu != report)) { _fun00002_ip = 572; continue _fun00001 }
 277:
            michal = tangon.getChannel;
            golfie = michal.bind(tangon)(golfie);
            if(!(zuuluu != golfie)) { _fun00002_ip = 560; continue _fun00001 }
 294:
            michal = golfie.isPrivate;
            michal = michal.bind(golfie)();
            if(michal) { _fun00002_ip = 548; continue _fun00001 }
 310:
            michal = golfie.getGuildId;
            tangon = michal.bind(golfie)();
            if(!(zuuluu != tangon)) { _fun00002_ip = 536; continue _fun00001 }
 327:
            michal = oscard.getGuild;
            michal = michal.bind(oscard)(tangon);
            tangon = zuuluu == michal;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 352; continue _fun00001 }
 346:
            zuuluu = michal.afkChannelId;
 352:
            michal = golfie.id;
            if(!(zuuluu !== michal)) { _fun00002_ip = 524; continue _fun00001 }
 364:
            zuuluu = option.getCurrentClientVoiceChannelId;
            michal = golfie.getGuildId;
            michal = michal.bind(golfie)();
            tangon = zuuluu.bind(option)(michal);
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.isChannelFull;
            zuuluu = michal.bind(zuuluu)(golfie, option, oscard);
            oscard = verify.can;
            michal = _closure1_slot8;
            michal = michal.CONNECT;
            michal = oscard.bind(verify)(michal, golfie);
            option = verify.can;
            oscard = _closure1_slot8;
            oscard = oscard.USE_EMBEDDED_ACTIVITIES;
            oscard = option.bind(verify)(oscard, golfie);
            if(oscard) { _fun00002_ip = 477; continue _fun00001 }
 465:
            oscard = _closure1_slot9;
            oscard = oscard.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return oscard;
 477:
            oscard = golfie.isVocal;
            oscard = oscard.bind(golfie)();
            if(!oscard) { _fun00002_ip = 548; continue _fun00001 }
 490:
            if(!(tangon !== report)) { _fun00002_ip = 548; continue _fun00001 }
 494:
            if(zuuluu) { _fun00002_ip = 512; continue _fun00001 }
 497:
            if(michal) { _fun00002_ip = 548; continue _fun00001 }
 500:
            michal = _closure1_slot9;
            michal = michal.NO_CHANNEL_CONNECT_PERMISSION;
            return michal;
 512:
            michal = _closure1_slot9;
            michal = michal.CHANNEL_FULL;
            return michal;
 524:
            michal = _closure1_slot9;
            michal = michal.IS_AFK_CHANNEL;
            return michal;
 536:
            michal = _closure1_slot9;
            michal = michal.NO_GUILD;
            return michal;
 548:
            michal = _closure1_slot9;
            michal = michal.CAN_JOIN;
            return michal;
 560:
            michal = _closure1_slot9;
            michal = michal.NO_CHANNEL;
            return michal;
 572:
            entity = _closure1_slot9;
            entity = entity.NO_CHANNEL;
            return entity;
 584:
            entity = _closure1_slot9;
            entity = entity.ACTIVITY_AGE_GATED;
            return entity;
 599:
            entity = _closure1_slot9;
            entity = entity.NO_USER;
            return entity;
        }
    };
    var _closure1_slot10 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    backup = 0;
    tangon = option[backup];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    foxtra = 1;
    tangon = option[foxtra];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    romeon = 2;
    tangon = option[romeon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    yankee = 3;
    tangon = option[yankee];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    offset = 4;
    tangon = option[offset];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    verify = 5;
    tangon = option[verify];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot8 = tangon;
    tangon = {};
    tangon['CAN_JOIN'] = backup;
    oscard = 'CAN_JOIN';
    tangon[backup] = oscard;
    tangon['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = foxtra;
    oscard = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    tangon[foxtra] = oscard;
    tangon['NO_CHANNEL_CONNECT_PERMISSION'] = romeon;
    oscard = 'NO_CHANNEL_CONNECT_PERMISSION';
    tangon[romeon] = oscard;
    tangon['CHANNEL_FULL'] = yankee;
    oscard = 'CHANNEL_FULL';
    tangon[yankee] = oscard;
    tangon['NO_CHANNEL'] = offset;
    oscard = 'NO_CHANNEL';
    tangon[offset] = oscard;
    tangon['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = verify;
    oscard = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    tangon[verify] = oscard;
    verify = 6;
    tangon['ACTIVITY_NOT_SUPPORTED_ON_OS'] = verify;
    oscard = 'ACTIVITY_NOT_SUPPORTED_ON_OS';
    tangon[verify] = oscard;
    verify = 7;
    tangon['ACTIVITY_AGE_GATED'] = verify;
    oscard = 'ACTIVITY_AGE_GATED';
    tangon[verify] = oscard;
    verify = 8;
    tangon['NO_USER'] = verify;
    oscard = 'NO_USER';
    tangon[verify] = oscard;
    verify = 9;
    tangon['IS_AFK_CHANNEL'] = verify;
    oscard = 'IS_AFK_CHANNEL';
    tangon[verify] = oscard;
    oscard = 10;
    tangon['NO_GUILD'] = oscard;
    verify = 'NO_GUILD';
    tangon[oscard] = verify;
    var _closure1_slot9 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/utils/getEmbeddedActivityJoinability.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['EmbeddedActivityJoinability'] = tangon;
    michal = function(argFoo) { // Original name: useEmbeddedActivityJoinability
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.userId;
            var _closure2_slot0 = oscard;
            yankee = michal.activity;
            var _closure2_slot1 = yankee;
            verify = michal.channelId;
            var _closure2_slot2 = verify;
            offset = michal.application;
            var _closure2_slot3 = offset;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 8;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.useIsActivitiesEnabledForCurrentPlatform;
            zuuluu = null;
            option = zuuluu != verify;
            zuuluu = undefined;
            if(!option) { _fun00004_ip = 95; continue _fun00003 }
 92:
            zuuluu = verify;
 95:
            golfie = tangon.bind(golfie)(zuuluu);
            _closure2_slot4 = golfie;
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 9;
            option = romeon[zuuluu];
            kiloes = tangon.bind(report)(option);
            backup = kiloes.useStateFromStores;
            option = _closure1_slot6;
            foxtra = new Array(1);
            foxtra[0] = option;
            option = function() {
                michal = _closure1_slot6;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = backup.bind(kiloes)(foxtra, option);
            _closure2_slot5 = option;
            zuuluu = romeon[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStores;
            romeon = _closure1_slot3;
            zuuluu = new Array(4);
            zuuluu[0] = romeon;
            romeon = _closure1_slot7;
            zuuluu[1] = romeon;
            romeon = _closure1_slot5;
            zuuluu[2] = romeon;
            michal = _closure1_slot4;
            zuuluu[3] = michal;
            michal = new Array(6);
            michal[0] = yankee;
            michal[1] = offset;
            michal[2] = verify;
            michal[3] = option;
            michal[4] = golfie;
            michal[5] = oscard;
            entity = function() {
                zuuluu = _closure1_slot10;
                michal = {};
                report = _closure2_slot0;
                michal['userId'] = report;
                report = _closure2_slot1;
                michal['activity'] = report;
                report = _closure2_slot3;
                michal['application'] = report;
                report = _closure2_slot2;
                michal['channelId'] = report;
                report = _closure2_slot5;
                michal['currentUser'] = report;
                tangon = _closure2_slot4;
                michal['isActivitiesEnabledForCurrentPlatform'] = tangon;
                tangon = _closure1_slot3;
                michal['ChannelStore'] = tangon;
                tangon = _closure1_slot7;
                michal['VoiceStateStore'] = tangon;
                tangon = _closure1_slot5;
                michal['PermissionStore'] = tangon;
                entity = _closure1_slot4;
                michal['GuildStore'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useEmbeddedActivityJoinability'] = michal;
    return entity;
})();