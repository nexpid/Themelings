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
            report = null;
            if(!(report != oscard)) { _fun00002_ip = 357; continue _fun00001 }
 51:
            verify = _closure1_slot6;
            zuuluu = verify.includes;
            michal = oscard.type;
            michal = zuuluu.bind(verify)(michal);
            if(michal) { _fun00002_ip = 88; continue _fun00001 }
 76:
            michal = _closure1_slot8;
            michal = michal.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
            return michal;
 88:
            verify = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            michal = zuuluu[michal];
            zuuluu = undefined;
            verify = verify.bind(zuuluu)(michal);
            michal = verify.getIsActivitiesEnabledForCurrentPlatform;
            michal = michal.bind(verify)();
            if(michal) { _fun00002_ip = 135; continue _fun00001 }
 123:
            michal = _closure1_slot8;
            michal = michal.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return michal;
 135:
            if(!(report != oscard)) { _fun00002_ip = 345; continue _fun00001 }
 142:
            michal = oscard.isPrivate;
            michal = michal.bind(oscard)();
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 158:
            michal = oscard.getGuildId;
            verify = michal.bind(oscard)();
            if(!(report != verify)) { _fun00002_ip = 333; continue _fun00001 }
 175:
            michal = offset.getGuild;
            michal = michal.bind(offset)(verify);
            report = report == michal;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 200; continue _fun00001 }
 194:
            zuuluu = michal.afkChannelId;
 200:
            michal = oscard.id;
            if(!(zuuluu !== michal)) { _fun00002_ip = 321; continue _fun00001 }
 209:
            zuuluu = option.can;
            michal = _closure1_slot7;
            michal = michal.CONNECT;
            michal = zuuluu.bind(option)(michal, oscard);
            report = option.can;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.USE_EMBEDDED_ACTIVITIES;
            zuuluu = report.bind(option)(zuuluu, oscard);
            if(zuuluu) { _fun00002_ip = 268; continue _fun00001 }
 256:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return zuuluu;
 268:
            report = golfie.getCurrentClientVoiceChannelId;
            zuuluu = oscard.getGuildId;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = report.bind(golfie)(zuuluu);
            report = oscard.isVocal;
            report = report.bind(oscard)();
            if(!report) { _fun00002_ip = 345; continue _fun00001 }
 302:
            if(!(zuuluu !== tangon)) { _fun00002_ip = 345; continue _fun00001 }
 306:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 309:
            michal = _closure1_slot8;
            michal = michal.NO_CHANNEL_CONNECT_PERMISSION;
            return michal;
 321:
            michal = _closure1_slot8;
            michal = michal.IS_AFK_CHANNEL;
            return michal;
 333:
            michal = _closure1_slot8;
            michal = michal.NO_GUILD;
            return michal;
 345:
            entity = _closure1_slot8;
            entity = entity.CAN_LAUNCH;
            return entity;
 357:
            entity = _closure1_slot8;
            entity = entity.NO_CHANNEL;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    backup = 0;
    report = option[backup];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    foxtra = 1;
    report = option[foxtra];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    romeon = 2;
    report = option[romeon];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    yankee = 3;
    report = option[yankee];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    offset = 4;
    report = option[offset];
    report = golfie.bind(entity)(report);
    report = report.SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
    var _closure1_slot6 = report;
    verify = 5;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot7 = report;
    report = {};
    report['CAN_LAUNCH'] = backup;
    oscard = 'CAN_LAUNCH';
    report[backup] = oscard;
    report['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = foxtra;
    oscard = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    report[foxtra] = oscard;
    report['NO_CHANNEL_CONNECT_PERMISSION'] = romeon;
    oscard = 'NO_CHANNEL_CONNECT_PERMISSION';
    report[romeon] = oscard;
    report['NO_CHANNEL'] = yankee;
    oscard = 'NO_CHANNEL';
    report[yankee] = oscard;
    report['NO_GUILD'] = offset;
    oscard = 'NO_GUILD';
    report[offset] = oscard;
    report['IS_AFK_CHANNEL'] = verify;
    oscard = 'IS_AFK_CHANNEL';
    report[verify] = oscard;
    verify = 6;
    report['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = verify;
    oscard = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    report[verify] = oscard;
    verify = 7;
    report['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL'] = verify;
    oscard = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL';
    report[verify] = oscard;
    var _closure1_slot8 = report;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/utils/getEmbeddedActivityLaunchability.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['EmbeddedActivityLaunchability'] = report;
    zuuluu['getEmbeddedActivityLaunchability'] = tangon;
    tangon = function(argFoo) { // Original name: getEmbeddedActivityLaunchabilityForChannel
        zuuluu = _closure1_slot9;
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
            zuuluu = _closure1_slot9;
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
            michal = _closure1_slot8;
            michal = michal.CAN_LAUNCH;
            if(!(michal !== zuuluu)) { _fun00004_ip = 155; continue _fun00003 }
 23:
            michal = _closure1_slot8;
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