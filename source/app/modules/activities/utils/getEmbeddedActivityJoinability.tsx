// app/modules/activities/utils/getEmbeddedActivityJoinability.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: getEmbeddedActivityJoinability
        _fun71620: for(var _fun71620_ip = 0; ; ) switch(_fun71620_ip) {
 0:
            zulu = argFoo;
            romeo = zulu.userId;
            foxtrot = zulu.activity;
            yankee = zulu.application;
            golf = zulu.channelId;
            entity = zulu.currentUser;
            mike = zulu.isActivitiesEnabledForCurrentPlatform;
            tango = zulu.ChannelStore;
            options = zulu.VoiceStateStore;
            verify = zulu.PermissionStore;
            oscar = zulu.GuildStore;
            zulu = null;
            if(!(zulu != romeo)) { _fun71620_ip = 599; continue _fun71620 }
 69:
            backup = zulu == entity;
            offset = undefined;
            report = undefined;
            if(backup) { _fun71620_ip = 86; continue _fun71620 }
 80:
            report = entity.nsfwAllowed;
 86:
            entity = false;
            if(!(entity === report)) { _fun71620_ip = 131; continue _fun71620 }
 92:
            entity = zulu == yankee;
            report = undefined;
            if(entity) { _fun71620_ip = 122; continue _fun71620 }
 101:
            entity = yankee.embeddedActivityConfig;
            backup = zulu == entity;
            report = undefined;
            if(backup) { _fun71620_ip = 122; continue _fun71620 }
 116:
            report = entity.requires_age_gate;
 122:
            entity = true;
            if(!(entity !== report)) { _fun71620_ip = 584; continue _fun71620 }
 131:
            if(mike) { _fun71620_ip = 149; continue _fun71620 }
 137:
            mike = _closure1_slot9;
            mike = mike.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            return mike;
 149:
            report = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 6;
            mike = backup[mike];
            report = report.bind(offset)(mike);
            backup = zulu == yankee;
            mike = undefined;
            if(backup) { _fun71620_ip = 199; continue _fun71620 }
 178:
            yankee = yankee.embeddedActivityConfig;
            backup = zulu == yankee;
            mike = undefined;
            if(backup) { _fun71620_ip = 199; continue _fun71620 }
 193:
            mike = yankee.supported_platforms;
 199:
            mike = report.bind(offset)(mike);
            if(mike) { _fun71620_ip = 219; continue _fun71620 }
 207:
            mike = _closure1_slot9;
            mike = mike.ACTIVITY_NOT_SUPPORTED_ON_OS;
            return mike;
 219:
            report = golf;
            if(!(zulu == report)) { _fun71620_ip = 270; continue _fun71620 }
 226:
            yankee = options.getVoiceStateForSession;
            backup = zulu == foxtrot;
            mike = undefined;
            if(backup) { _fun71620_ip = 247; continue _fun71620 }
 241:
            mike = foxtrot.session_id;
 247:
            yankee = yankee.bind(options)(romeo, mike);
            romeo = zulu == yankee;
            mike = undefined;
            if(romeo) { _fun71620_ip = 267; continue _fun71620 }
 262:
            mike = yankee.channelId;
 267:
            report = mike;
 270:
            if(!(zulu != report)) { _fun71620_ip = 572; continue _fun71620 }
 277:
            mike = tango.getChannel;
            golf = mike.bind(tango)(golf);
            if(!(zulu != golf)) { _fun71620_ip = 560; continue _fun71620 }
 294:
            mike = golf.isPrivate;
            mike = mike.bind(golf)();
            if(mike) { _fun71620_ip = 548; continue _fun71620 }
 310:
            mike = golf.getGuildId;
            tango = mike.bind(golf)();
            if(!(zulu != tango)) { _fun71620_ip = 536; continue _fun71620 }
 327:
            mike = oscar.getGuild;
            mike = mike.bind(oscar)(tango);
            tango = zulu == mike;
            zulu = undefined;
            if(tango) { _fun71620_ip = 352; continue _fun71620 }
 346:
            zulu = mike.afkChannelId;
 352:
            mike = golf.id;
            if(!(zulu !== mike)) { _fun71620_ip = 524; continue _fun71620 }
 364:
            zulu = options.getCurrentClientVoiceChannelId;
            mike = golf.getGuildId;
            mike = mike.bind(golf)();
            tango = zulu.bind(options)(mike);
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 7;
            mike = yankee[mike];
            zulu = zulu.bind(offset)(mike);
            mike = zulu.isChannelFull;
            zulu = mike.bind(zulu)(golf, options, oscar);
            oscar = verify.can;
            mike = _closure1_slot8;
            mike = mike.CONNECT;
            mike = oscar.bind(verify)(mike, golf);
            options = verify.can;
            oscar = _closure1_slot8;
            oscar = oscar.USE_EMBEDDED_ACTIVITIES;
            oscar = options.bind(verify)(oscar, golf);
            if(oscar) { _fun71620_ip = 477; continue _fun71620 }
 465:
            oscar = _closure1_slot9;
            oscar = oscar.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            return oscar;
 477:
            oscar = golf.isVocal;
            oscar = oscar.bind(golf)();
            if(!oscar) { _fun71620_ip = 548; continue _fun71620 }
 490:
            if(!(tango !== report)) { _fun71620_ip = 548; continue _fun71620 }
 494:
            if(zulu) { _fun71620_ip = 512; continue _fun71620 }
 497:
            if(mike) { _fun71620_ip = 548; continue _fun71620 }
 500:
            mike = _closure1_slot9;
            mike = mike.NO_CHANNEL_CONNECT_PERMISSION;
            return mike;
 512:
            mike = _closure1_slot9;
            mike = mike.CHANNEL_FULL;
            return mike;
 524:
            mike = _closure1_slot9;
            mike = mike.IS_AFK_CHANNEL;
            return mike;
 536:
            mike = _closure1_slot9;
            mike = mike.NO_GUILD;
            return mike;
 548:
            mike = _closure1_slot9;
            mike = mike.CAN_JOIN;
            return mike;
 560:
            mike = _closure1_slot9;
            mike = mike.NO_CHANNEL;
            return mike;
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    backup = 0;
    tango = options[backup];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    foxtrot = 1;
    tango = options[foxtrot];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    romeo = 2;
    tango = options[romeo];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    yankee = 3;
    tango = options[yankee];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    offset = 4;
    tango = options[offset];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    verify = 5;
    tango = options[verify];
    tango = golf.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot8 = tango;
    tango = {};
    tango['CAN_JOIN'] = backup;
    oscar = 'CAN_JOIN';
    tango[backup] = oscar;
    tango['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = foxtrot;
    oscar = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    tango[foxtrot] = oscar;
    tango['NO_CHANNEL_CONNECT_PERMISSION'] = romeo;
    oscar = 'NO_CHANNEL_CONNECT_PERMISSION';
    tango[romeo] = oscar;
    tango['CHANNEL_FULL'] = yankee;
    oscar = 'CHANNEL_FULL';
    tango[yankee] = oscar;
    tango['NO_CHANNEL'] = offset;
    oscar = 'NO_CHANNEL';
    tango[offset] = oscar;
    tango['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = verify;
    oscar = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    tango[verify] = oscar;
    verify = 6;
    tango['ACTIVITY_NOT_SUPPORTED_ON_OS'] = verify;
    oscar = 'ACTIVITY_NOT_SUPPORTED_ON_OS';
    tango[verify] = oscar;
    verify = 7;
    tango['ACTIVITY_AGE_GATED'] = verify;
    oscar = 'ACTIVITY_AGE_GATED';
    tango[verify] = oscar;
    verify = 8;
    tango['NO_USER'] = verify;
    oscar = 'NO_USER';
    tango[verify] = oscar;
    verify = 9;
    tango['IS_AFK_CHANNEL'] = verify;
    oscar = 'IS_AFK_CHANNEL';
    tango[verify] = oscar;
    oscar = 10;
    tango['NO_GUILD'] = oscar;
    verify = 'NO_GUILD';
    tango[oscar] = verify;
    var _closure1_slot9 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/activities/utils/getEmbeddedActivityJoinability.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['EmbeddedActivityJoinability'] = tango;
    mike = function(argFoo) { // Original name: useEmbeddedActivityJoinability
        _fun71621: for(var _fun71621_ip = 0; ; ) switch(_fun71621_ip) {
 0:
            mike = argFoo;
            oscar = mike.userId;
            var _closure2_slot0 = oscar;
            yankee = mike.activity;
            var _closure2_slot1 = yankee;
            verify = mike.channelId;
            var _closure2_slot2 = verify;
            offset = mike.application;
            var _closure2_slot3 = offset;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 8;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.useIsActivitiesEnabledForCurrentPlatform;
            zulu = null;
            options = zulu != verify;
            zulu = undefined;
            if(!options) { _fun71621_ip = 95; continue _fun71621 }
 92:
            zulu = verify;
 95:
            golf = tango.bind(golf)(zulu);
            _closure2_slot4 = golf;
            tango = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 9;
            options = romeo[zulu];
            kilo = tango.bind(report)(options);
            backup = kilo.useStateFromStores;
            options = _closure1_slot6;
            foxtrot = new Array(1);
            foxtrot[0] = options;
            options = function() {
                mike = _closure1_slot6;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            options = backup.bind(kilo)(foxtrot, options);
            _closure2_slot5 = options;
            zulu = romeo[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStores;
            romeo = _closure1_slot3;
            zulu = new Array(4);
            zulu[0] = romeo;
            romeo = _closure1_slot7;
            zulu[1] = romeo;
            romeo = _closure1_slot5;
            zulu[2] = romeo;
            mike = _closure1_slot4;
            zulu[3] = mike;
            mike = new Array(6);
            mike[0] = yankee;
            mike[1] = offset;
            mike[2] = verify;
            mike[3] = options;
            mike[4] = golf;
            mike[5] = oscar;
            entity = function() {
                zulu = _closure1_slot10;
                mike = {};
                report = _closure2_slot0;
                mike['userId'] = report;
                report = _closure2_slot1;
                mike['activity'] = report;
                report = _closure2_slot3;
                mike['application'] = report;
                report = _closure2_slot2;
                mike['channelId'] = report;
                report = _closure2_slot5;
                mike['currentUser'] = report;
                tango = _closure2_slot4;
                mike['isActivitiesEnabledForCurrentPlatform'] = tango;
                tango = _closure1_slot3;
                mike['ChannelStore'] = tango;
                tango = _closure1_slot7;
                mike['VoiceStateStore'] = tango;
                tango = _closure1_slot5;
                mike['PermissionStore'] = tango;
                entity = _closure1_slot4;
                mike['GuildStore'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useEmbeddedActivityJoinability'] = mike;
    return entity;
})();