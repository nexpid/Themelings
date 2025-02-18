// app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLaunchability
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            michal = entity.ChannelStore;
            offset = entity.GuildStore;
            option = entity.PermissionStore;
            golfie = entity.VoiceStateStore;
            entity = michal.getChannel;
            oscard = entity.bind(michal)(tangon);
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 5;
            michal = zuuluu[michal];
            zuuluu = undefined;
            report = report.bind(zuuluu)(michal);
            michal = report.getIsContextlessActivitiesExperimentEnabled;
            michal = michal.bind(report)();
            if(michal) { _fun00002_ip = 98; continue _fun00001 }
 80:
            michal = null;
            if(!(michal == oscard)) { _fun00002_ip = 98; continue _fun00001 }
 86:
            michal = _closure1_slot7;
            michal = michal.NO_CHANNEL;
            return michal;
 98:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 6;
            michal = verify[michal];
            report = report.bind(zuuluu)(michal);
            michal = report.getIsActivitiesEnabledForCurrentPlatform;
            michal = michal.bind(report)(oscard);
            if(michal) { _fun00002_ip = 144; continue _fun00001 }
 132:
            michal = _closure1_slot7;
            michal = michal.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return michal;
 144:
            report = null;
            if(!(report != oscard)) { _fun00002_ip = 356; continue _fun00001 }
 153:
            michal = oscard.isPrivate;
            michal = michal.bind(oscard)();
            if(michal) { _fun00002_ip = 356; continue _fun00001 }
 169:
            michal = oscard.getGuildId;
            verify = michal.bind(oscard)();
            if(!(report != verify)) { _fun00002_ip = 344; continue _fun00001 }
 186:
            michal = offset.getGuild;
            michal = michal.bind(offset)(verify);
            report = report == michal;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 211; continue _fun00001 }
 205:
            zuuluu = michal.afkChannelId;
 211:
            michal = oscard.id;
            if(!(zuuluu !== michal)) { _fun00002_ip = 332; continue _fun00001 }
 220:
            zuuluu = option.can;
            michal = _closure1_slot6;
            michal = michal.CONNECT;
            michal = zuuluu.bind(option)(michal, oscard);
            report = option.can;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.USE_EMBEDDED_ACTIVITIES;
            zuuluu = report.bind(option)(zuuluu, oscard);
            if(zuuluu) { _fun00002_ip = 279; continue _fun00001 }
 267:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return zuuluu;
 279:
            report = golfie.getCurrentClientVoiceChannelId;
            zuuluu = oscard.getGuildId;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = report.bind(golfie)(zuuluu);
            report = oscard.isVocal;
            report = report.bind(oscard)();
            if(!report) { _fun00002_ip = 356; continue _fun00001 }
 313:
            if(!(zuuluu !== tangon)) { _fun00002_ip = 356; continue _fun00001 }
 317:
            if(michal) { _fun00002_ip = 356; continue _fun00001 }
 320:
            michal = _closure1_slot7;
            michal = michal.NO_CHANNEL_CONNECT_PERMISSION;
            return michal;
 332:
            michal = _closure1_slot7;
            michal = michal.IS_AFK_CHANNEL;
            return michal;
 344:
            michal = _closure1_slot7;
            michal = michal.NO_GUILD;
            return michal;
 356:
            entity = _closure1_slot7;
            entity = entity.CAN_LAUNCH;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    foxtra = 0;
    report = option[foxtra];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    romeon = 1;
    report = option[romeon];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    yankee = 2;
    report = option[yankee];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    offset = 3;
    report = option[offset];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    verify = 4;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot6 = report;
    report = {};
    report['CAN_LAUNCH'] = foxtra;
    oscard = 'CAN_LAUNCH';
    report[foxtra] = oscard;
    report['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = romeon;
    oscard = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    report[romeon] = oscard;
    report['NO_CHANNEL_CONNECT_PERMISSION'] = yankee;
    oscard = 'NO_CHANNEL_CONNECT_PERMISSION';
    report[yankee] = oscard;
    report['NO_CHANNEL'] = offset;
    oscard = 'NO_CHANNEL';
    report[offset] = oscard;
    report['NO_GUILD'] = verify;
    oscard = 'NO_GUILD';
    report[verify] = oscard;
    verify = 5;
    report['IS_AFK_CHANNEL'] = verify;
    oscard = 'IS_AFK_CHANNEL';
    report[verify] = oscard;
    verify = 6;
    report['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = verify;
    oscard = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    report[verify] = oscard;
    var _closure1_slot7 = report;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/utils/getEmbeddedActivityLaunchability.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['EmbeddedActivityLaunchability'] = report;
    zuuluu['getEmbeddedActivityLaunchability'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLaunchabilityForChannel
        zuuluu = _closure1_slot8;
        michal = {};
        tangon = argFoo;
        michal['channelId'] = tangon;
        tangon = _closure1_slot2;
        michal['ChannelStore'] = tangon;
        tangon = _closure1_slot3;
        michal['GuildStore'] = tangon;
        tangon = _closure1_slot4;
        michal['PermissionStore'] = tangon;
        entity = _closure1_slot5;
        michal['VoiceStateStore'] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['getEmbeddedActivityLaunchabilityForChannel'] = tangon;
    tangon = function(argFoo) { // Original name: useEmbeddedActivityLaunchability
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 7;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot2;
        zuuluu = new Array(4);
        zuuluu[0] = golfie;
        golfie = _closure1_slot3;
        zuuluu[1] = golfie;
        golfie = _closure1_slot4;
        zuuluu[2] = golfie;
        michal = _closure1_slot5;
        zuuluu[3] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure1_slot8;
            michal = {};
            tangon = _closure2_slot0;
            michal['channelId'] = tangon;
            tangon = _closure1_slot2;
            michal['ChannelStore'] = tangon;
            tangon = _closure1_slot3;
            michal['GuildStore'] = tangon;
            tangon = _closure1_slot4;
            michal['PermissionStore'] = tangon;
            entity = _closure1_slot5;
            michal['VoiceStateStore'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useEmbeddedActivityLaunchability'] = tangon;
    michal = function(argFoo) { // Original name: getEmbeddedActivityLaunchabilityLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot7;
            michal = michal.CAN_LAUNCH;
            if(!(michal !== zuuluu)) { _fun00004_ip = 155; continue _fun00003 }
 23:
            michal = _closure1_slot7;
            michal = michal.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            if(!(michal !== zuuluu)) { _fun00004_ip = 96; continue _fun00003 }
 37:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 8;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.j29zCg;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 96:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 8;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.hHGrW1;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 155:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 8;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.qJvTKS;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getEmbeddedActivityLaunchabilityLabel'] = michal;
    return entity;
})();