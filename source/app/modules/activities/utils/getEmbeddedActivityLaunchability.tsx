// app/modules/activities/utils/getEmbeddedActivityLaunchability.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    tango = function(argFoo) { // Original name: getEmbeddedActivityLaunchability
        _fun74002: for(var _fun74002_ip = 0; ; ) switch(_fun74002_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            mike = entity.ChannelStore;
            offset = entity.GuildStore;
            options = entity.PermissionStore;
            golf = entity.VoiceStateStore;
            entity = mike.getChannel;
            oscar = entity.bind(mike)(tango);
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 5;
            mike = zulu[mike];
            zulu = undefined;
            report = report.bind(zulu)(mike);
            mike = report.getIsContextlessActivitiesExperimentEnabled;
            mike = mike.bind(report)();
            if(mike) { _fun74002_ip = 98; continue _fun74002 }
 80:
            mike = null;
            if(!(mike == oscar)) { _fun74002_ip = 98; continue _fun74002 }
 86:
            mike = _closure1_slot7;
            mike = mike.NO_CHANNEL;
            return mike;
 98:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 6;
            mike = verify[mike];
            report = report.bind(zulu)(mike);
            mike = report.getIsActivitiesEnabledForCurrentPlatform;
            mike = mike.bind(report)(oscar);
            if(mike) { _fun74002_ip = 144; continue _fun74002 }
 132:
            mike = _closure1_slot7;
            mike = mike.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return mike;
 144:
            report = null;
            if(!(report != oscar)) { _fun74002_ip = 356; continue _fun74002 }
 153:
            mike = oscar.isPrivate;
            mike = mike.bind(oscar)();
            if(mike) { _fun74002_ip = 356; continue _fun74002 }
 169:
            mike = oscar.getGuildId;
            verify = mike.bind(oscar)();
            if(!(report != verify)) { _fun74002_ip = 344; continue _fun74002 }
 186:
            mike = offset.getGuild;
            mike = mike.bind(offset)(verify);
            report = report == mike;
            zulu = undefined;
            if(report) { _fun74002_ip = 211; continue _fun74002 }
 205:
            zulu = mike.afkChannelId;
 211:
            mike = oscar.id;
            if(!(zulu !== mike)) { _fun74002_ip = 332; continue _fun74002 }
 220:
            zulu = options.can;
            mike = _closure1_slot6;
            mike = mike.CONNECT;
            mike = zulu.bind(options)(mike, oscar);
            report = options.can;
            zulu = _closure1_slot6;
            zulu = zulu.USE_EMBEDDED_ACTIVITIES;
            zulu = report.bind(options)(zulu, oscar);
            if(zulu) { _fun74002_ip = 279; continue _fun74002 }
 267:
            zulu = _closure1_slot7;
            zulu = zulu.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return zulu;
 279:
            report = golf.getCurrentClientVoiceChannelId;
            zulu = oscar.getGuildId;
            zulu = zulu.bind(oscar)();
            zulu = report.bind(golf)(zulu);
            report = oscar.isVocal;
            report = report.bind(oscar)();
            if(!report) { _fun74002_ip = 356; continue _fun74002 }
 313:
            if(!(zulu !== tango)) { _fun74002_ip = 356; continue _fun74002 }
 317:
            if(mike) { _fun74002_ip = 356; continue _fun74002 }
 320:
            mike = _closure1_slot7;
            mike = mike.NO_CHANNEL_CONNECT_PERMISSION;
            return mike;
 332:
            mike = _closure1_slot7;
            mike = mike.IS_AFK_CHANNEL;
            return mike;
 344:
            mike = _closure1_slot7;
            mike = mike.NO_GUILD;
            return mike;
 356:
            entity = _closure1_slot7;
            entity = entity.CAN_LAUNCH;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    foxtrot = 0;
    report = options[foxtrot];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot2 = report;
    romeo = 1;
    report = options[romeo];
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    yankee = 2;
    report = options[yankee];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    offset = 3;
    report = options[offset];
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    verify = 4;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot6 = report;
    report = {};
    report['CAN_LAUNCH'] = foxtrot;
    oscar = 'CAN_LAUNCH';
    report[foxtrot] = oscar;
    report['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = romeo;
    oscar = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    report[romeo] = oscar;
    report['NO_CHANNEL_CONNECT_PERMISSION'] = yankee;
    oscar = 'NO_CHANNEL_CONNECT_PERMISSION';
    report[yankee] = oscar;
    report['NO_CHANNEL'] = offset;
    oscar = 'NO_CHANNEL';
    report[offset] = oscar;
    report['NO_GUILD'] = verify;
    oscar = 'NO_GUILD';
    report[verify] = oscar;
    verify = 5;
    report['IS_AFK_CHANNEL'] = verify;
    oscar = 'IS_AFK_CHANNEL';
    report[verify] = oscar;
    verify = 6;
    report['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = verify;
    oscar = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    report[verify] = oscar;
    var _closure1_slot7 = report;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/activities/utils/getEmbeddedActivityLaunchability.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['EmbeddedActivityLaunchability'] = report;
    zulu['getEmbeddedActivityLaunchability'] = tango;
    tango = function(argFoo) { // Original name: getEmbeddedActivityLaunchabilityForChannel
        zulu = _closure1_slot8;
        mike = {};
        tango = argFoo;
        mike['channelId'] = tango;
        tango = _closure1_slot2;
        mike['ChannelStore'] = tango;
        tango = _closure1_slot3;
        mike['GuildStore'] = tango;
        tango = _closure1_slot4;
        mike['PermissionStore'] = tango;
        entity = _closure1_slot5;
        mike['VoiceStateStore'] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['getEmbeddedActivityLaunchabilityForChannel'] = tango;
    tango = function(argFoo) { // Original name: useEmbeddedActivityLaunchability
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 7;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot2;
        zulu = new Array(4);
        zulu[0] = golf;
        golf = _closure1_slot3;
        zulu[1] = golf;
        golf = _closure1_slot4;
        zulu[2] = golf;
        mike = _closure1_slot5;
        zulu[3] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure1_slot8;
            mike = {};
            tango = _closure2_slot0;
            mike['channelId'] = tango;
            tango = _closure1_slot2;
            mike['ChannelStore'] = tango;
            tango = _closure1_slot3;
            mike['GuildStore'] = tango;
            tango = _closure1_slot4;
            mike['PermissionStore'] = tango;
            entity = _closure1_slot5;
            mike['VoiceStateStore'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useEmbeddedActivityLaunchability'] = tango;
    mike = function(argFoo) { // Original name: getEmbeddedActivityLaunchabilityLabel
        _fun74006: for(var _fun74006_ip = 0; ; ) switch(_fun74006_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot7;
            mike = mike.CAN_LAUNCH;
            if(!(mike !== zulu)) { _fun74006_ip = 155; continue _fun74006 }
 23:
            mike = _closure1_slot7;
            mike = mike.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            if(!(mike !== zulu)) { _fun74006_ip = 96; continue _fun74006 }
 37:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 8;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.j29zCg;
            mike = zulu.bind(tango)(mike);
            return mike;
 96:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 8;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.hHGrW1;
            mike = zulu.bind(tango)(mike);
            return mike;
 155:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 8;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.qJvTKS;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getEmbeddedActivityLaunchabilityLabel'] = mike;
    return entity;
})();