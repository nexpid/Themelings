// app/modules/instant_invite/native/InstantInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    oscar = tango.Linking;
    var _closure1_slot3 = oscar;
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.InviteTargetTypes;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.IOS_COPY_TO_PASTEBOARD;
    var _closure1_slot14 = tango;
    tango = 11;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    report = tango.AnalyticEvents;
    var _closure1_slot15 = report;
    report = tango.InviteOptionsType;
    var _closure1_slot16 = report;
    tango = tango.Permissions;
    var _closure1_slot17 = tango;
    oscar = function(argFoo, argBar, argBaz) { // Original name: showInstantInviteActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            report = argBaz;
            yankee = {'isActionSheet': true, 'location': 'IOS Instant Invite Action Sheet Mount'};
            tango = _closure1_slot1;
            entity = _closure1_slot2;
            verify = 12;
            zulu = entity[verify];
            entity = undefined;
            offset = tango.bind(entity)(zulu);
            options = offset.track;
            zulu = _closure1_slot15;
            tango = zulu.OPEN_POPOUT;
            zulu = {};
            romeo = 'Instant Invite';
            zulu['type'] = romeo;
            zulu['source'] = oscar;
            zulu = options.bind(offset)(tango, zulu);
            tango = null;
            options = tango == report;
            zulu = undefined;
            if(options) { _fun00002_ip = 102; continue _fun00001 }
 96:
            zulu = report.stream;
 102:
            if(!(tango == zulu)) { _fun00002_ip = 161; continue _fun00001 }
 106:
            options = tango == report;
            zulu = undefined;
            if(options) { _fun00002_ip = 121; continue _fun00001 }
 115:
            zulu = report.targetApplicationId;
 121:
            if(!(tango != zulu)) { _fun00002_ip = 354; continue _fun00001 }
 128:
            zulu = _closure1_slot13;
            zulu = zulu.EMBEDDED_APPLICATION;
            yankee['targetType'] = zulu;
            zulu = report.targetApplicationId;
            yankee['targetApplicationId'] = zulu;
            _fun00002_ip = 354; continue _fun00001;
 161:
            romeo = report.stream;
            zulu = _closure1_slot13;
            zulu = zulu.STREAM;
            yankee['targetType'] = zulu;
            zulu = romeo.ownerId;
            yankee['targetUserId'] = zulu;
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            options = 13;
            options = zulu[options];
            foxtrot = offset.bind(entity)(options);
            offset = foxtrot.getStreamerApplication;
            options = _closure1_slot10;
            foxtrot = offset.bind(foxtrot)(romeo, options);
            options = _closure1_slot1;
            zulu = zulu[verify];
            offset = options.bind(entity)(zulu);
            verify = offset.track;
            zulu = _closure1_slot15;
            options = zulu.OPEN_MODAL;
            zulu = {};
            backup = 'Send Stream Invite';
            zulu['type'] = backup;
            backup = yankee.location;
            zulu['location'] = backup;
            romeo = romeo.ownerId;
            zulu['other_user_id'] = romeo;
            backup = tango == foxtrot;
            romeo = undefined;
            if(backup) { _fun00002_ip = 305; continue _fun00001 }
 300:
            romeo = foxtrot.id;
 305:
            zulu['application_id'] = romeo;
            backup = tango == foxtrot;
            romeo = undefined;
            if(backup) { _fun00002_ip = 324; continue _fun00001 }
 319:
            romeo = foxtrot.name;
 324:
            zulu['application_name'] = romeo;
            backup = tango == foxtrot;
            romeo = undefined;
            if(backup) { _fun00002_ip = 343; continue _fun00001 }
 338:
            romeo = foxtrot.id;
 343:
            zulu['game_id'] = romeo;
            zulu = verify.bind(offset)(options, zulu);
 354:
            zulu = tango == report;
            options = undefined;
            if(zulu) { _fun00002_ip = 369; continue _fun00001 }
 363:
            options = report.createInvite;
 369:
            zulu = false;
            zulu = zulu !== options;
            if(!zulu) { _fun00002_ip = 396; continue _fun00001 }
 378:
            verify = tango == report;
            options = undefined;
            if(verify) { _fun00002_ip = 392; continue _fun00001 }
 387:
            options = report.code;
 392:
            zulu = tango == options;
 396:
            if(!zulu) { _fun00002_ip = 447; continue _fun00001 }
 399:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 14;
            zulu = verify[zulu];
            offset = options.bind(entity)(zulu);
            verify = offset.init;
            zulu = golf.getGuildId;
            options = zulu.bind(golf)();
            zulu = golf.id;
            zulu = verify.bind(offset)(options, zulu, yankee);
 447:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 15;
            mike = options[mike];
            zulu = zulu.bind(entity)(mike);
            mike = {};
            mike['channel'] = golf;
            mike['source'] = oscar;
            golf = tango == report;
            oscar = undefined;
            if(golf) { _fun00002_ip = 492; continue _fun00001 }
 486:
            oscar = report.guildScheduledEventId;
 492:
            mike['guildScheduledEventId'] = oscar;
            golf = tango == report;
            oscar = undefined;
            if(golf) { _fun00002_ip = 512; continue _fun00001 }
 506:
            oscar = report.targetApplicationId;
 512:
            mike['targetApplicationId'] = oscar;
            oscar = tango == report;
            tango = undefined;
            if(oscar) { _fun00002_ip = 531; continue _fun00001 }
 526:
            tango = report.code;
 531:
            mike['code'] = tango;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot18 = oscar;
    report = function(argFoo, argBar, argBaz) { // Original name: showVanityUrlInviteActionSheet
        tango = argBaz;
        zulu = _closure1_slot1;
        report = _closure1_slot2;
        entity = 12;
        oscar = report[entity];
        entity = undefined;
        options = zulu.bind(entity)(oscar);
        golf = options.track;
        mike = _closure1_slot15;
        oscar = mike.OPEN_POPOUT;
        mike = {};
        verify = 'Vanity URL Invite';
        mike['type'] = verify;
        mike['source'] = tango;
        mike = golf.bind(options)(oscar, mike);
        mike = 15;
        mike = report[mike];
        zulu = zulu.bind(entity)(mike);
        mike = {};
        report = argFoo;
        report = report.vanityURLCode;
        mike['vanityURLCode'] = report;
        report = argBar;
        mike['channel'] = report;
        mike['source'] = tango;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot19 = report;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackOptionClicked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            romeo = argFoo;
            offset = argBar;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            foxtrot = 16;
            mike = tango[foxtrot];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.parseExtraDataFromInviteKey;
            mike = mike.bind(zulu)(romeo);
            report = _closure1_slot9;
            zulu = report.getInvite;
            mike = mike.baseCode;
            golf = zulu.bind(report)(mike);
            zulu = _closure1_slot1;
            mike = 12;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot15;
            zulu = mike.INSTANT_INVITE_OPTION_CLICKED;
            mike = {};
            options = argBaz;
            mike['invite_type'] = options;
            options = null;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 120; continue _fun00003 }
 115:
            verify = offset.guild_id;
 120:
            mike['guild_id'] = verify;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 138; continue _fun00003 }
 133:
            verify = offset.id;
 138:
            mike['channel_id'] = verify;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[foxtrot];
            yankee = yankee.bind(entity)(verify);
            verify = yankee.parseInviteCodeFromInviteKey;
            verify = verify.bind(yankee)(romeo);
            mike['invite_code'] = verify;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 189; continue _fun00003 }
 184:
            verify = offset.type;
 189:
            mike['invite_channel_type'] = verify;
            verify = _closure1_slot11;
            oscar = verify.getCurrentUser;
            verify = oscar.bind(verify)();
            offset = options == verify;
            oscar = undefined;
            if(offset) { _fun00004_ip = 221; continue _fun00003 }
 216:
            oscar = verify.id;
 221:
            mike['invite_inviter_id'] = oscar;
            oscar = argCorge;
            mike['location'] = oscar;
            verify = options == golf;
            oscar = undefined;
            if(verify) { _fun00004_ip = 262; continue _fun00003 }
 242:
            golf = golf.target_application;
            options = options == golf;
            oscar = undefined;
            if(options) { _fun00004_ip = 262; continue _fun00003 }
 257:
            oscar = golf.id;
 262:
            mike['application_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot20 = tango;
    golf = 25;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/instant_invite/native/InstantInviteUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo) { // Original name: showInstantInviteActionSheetForChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot6;
            zulu = tango.getChannel;
            mike = argFoo;
            tango = zulu.bind(tango)(mike);
            zulu = null;
            if(!(zulu != tango)) { _fun00006_ip = 38; continue _fun00005 }
 26:
            mike = _closure1_slot18;
            entity = undefined;
            entity = mike.bind(entity)(tango, zulu);
 38:
            entity = undefined;
            return entity;
        }
    };
    zulu['showInstantInviteActionSheetForChannel'] = golf;
    zulu['showInstantInviteActionSheet'] = oscar;
    zulu['showVanityUrlInviteActionSheet'] = report;
    zulu['trackOptionClicked'] = tango;
    tango = function(argFoo) {
        entity = argFoo;
        return entity;
    };
    zulu['getShareMessage'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golf = argFoo;
            report = argBar;
            oscar = argCorge;
            zulu = arguments[4];
            entity = undefined;
            if(!(zulu === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            zulu = true;
 20:
            foxtrot = null;
            if(!(foxtrot != golf)) { _fun00008_ip = 381; continue _fun00007 }
 29:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 16;
            tango = verify[tango];
            options = options.bind(entity)(tango);
            tango = options.parseExtraDataFromInviteKey;
            yankee = tango.bind(options)(golf);
            offset = _closure1_slot9;
            options = offset.getInvite;
            tango = yankee.baseCode;
            romeo = options.bind(offset)(tango);
            options = _closure1_slot1;
            tango = 12;
            tango = verify[tango];
            offset = options.bind(entity)(tango);
            verify = offset.track;
            tango = _closure1_slot15;
            options = tango.INSTANT_INVITE_SHARED;
            tango = {};
            kilo = foxtrot == report;
            backup = undefined;
            if(kilo) { _fun00008_ip = 131; continue _fun00007 }
 126:
            backup = report.guild_id;
 131:
            tango['guild_id'] = backup;
            kilo = foxtrot == report;
            backup = undefined;
            if(kilo) { _fun00008_ip = 149; continue _fun00007 }
 144:
            backup = report.id;
 149:
            tango['channel_id'] = backup;
            backup = yankee.baseCode;
            tango['invite_code'] = backup;
            kilo = foxtrot == report;
            backup = undefined;
            if(kilo) { _fun00008_ip = 178; continue _fun00007 }
 173:
            backup = report.type;
 178:
            tango['invite_channel_type'] = backup;
            kilo = _closure1_slot11;
            backup = kilo.getCurrentUser;
            kilo = backup.bind(kilo)();
            sizing = foxtrot == kilo;
            backup = undefined;
            if(sizing) { _fun00008_ip = 210; continue _fun00007 }
 205:
            backup = kilo.id;
 210:
            tango['invite_inviter_id'] = backup;
            yankee = yankee.guildScheduledEventId;
            tango['invite_guild_scheduled_event_id'] = yankee;
            tango['location'] = oscar;
            backup = foxtrot == romeo;
            yankee = undefined;
            if(backup) { _fun00008_ip = 261; continue _fun00007 }
 241:
            romeo = romeo.target_application;
            foxtrot = foxtrot == romeo;
            yankee = undefined;
            if(foxtrot) { _fun00008_ip = 261; continue _fun00007 }
 256:
            yankee = romeo.id;
 261:
            tango['application_id'] = yankee;
            tango = verify.bind(offset)(options, tango);
            if(!zulu) { _fun00008_ip = 304; continue _fun00007 }
 275:
            tango = _closure1_slot20;
            zulu = _closure1_slot16;
            result = zulu.SHARE;
            source = undefined;
            update = golf;
            echo = report;
            output = oscar;
            zulu = source[tango](update, echo, result, output, sizing);
 304:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 17;
            zulu = tango[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.hideActionSheet;
            zulu = zulu.bind(report)();
            zulu = _closure1_slot0;
            mike = 18;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.showShareActionSheet;
            zulu = {};
            mike = argBaz;
            zulu['message'] = mike;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    zulu = tango.includes;
                    mike = _closure1_slot14;
                    mike = zulu.bind(tango)(mike);
                    if(mike) { _fun00010_ip = 55; continue _fun00009 }
 23:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 19;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.presentInviteSent;
                    entity = entity.bind(mike)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, oscar, mike);
 381:
            return entity;
        }
    };
    zulu['handleOpenShareSheet'] = tango;
    tango = function(argFoo, argBar, argBaz) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            zulu = arguments[3];
            entity = undefined;
            if(!(zulu === entity)) { _fun00012_ip = 17; continue _fun00011 }
 15:
            zulu = true;
 17:
            romeo = null;
            if(!(romeo != oscar)) { _fun00012_ip = 332; continue _fun00011 }
 26:
            verify = _closure1_slot0;
            options = _closure1_slot2;
            tango = 16;
            tango = options[tango];
            golf = verify.bind(entity)(tango);
            tango = golf.parseExtraDataFromInviteKey;
            offset = tango.bind(golf)(oscar);
            golf = _closure1_slot1;
            tango = 20;
            tango = options[tango];
            tango = golf.bind(entity)(tango);
            yankee = tango.bind(entity)(oscar);
            tango = 21;
            tango = options[tango];
            verify = verify.bind(entity)(tango);
            tango = verify.copy;
            tango = tango.bind(verify)(yankee);
            yankee = _closure1_slot9;
            verify = yankee.getInvite;
            tango = offset.baseCode;
            yankee = verify.bind(yankee)(tango);
            tango = 12;
            tango = options[tango];
            verify = golf.bind(entity)(tango);
            options = verify.track;
            tango = _closure1_slot15;
            golf = tango.COPY_INSTANT_INVITE;
            tango = {};
            backup = romeo == report;
            foxtrot = undefined;
            if(backup) { _fun00012_ip = 168; continue _fun00011 }
 163:
            foxtrot = report.guild_id;
 168:
            tango['server'] = foxtrot;
            backup = romeo == report;
            foxtrot = undefined;
            if(backup) { _fun00012_ip = 187; continue _fun00011 }
 182:
            foxtrot = report.id;
 187:
            tango['channel'] = foxtrot;
            backup = romeo == report;
            foxtrot = undefined;
            if(backup) { _fun00012_ip = 205; continue _fun00011 }
 200:
            foxtrot = report.type;
 205:
            tango['channel_type'] = foxtrot;
            foxtrot = argBaz;
            tango['location'] = foxtrot;
            foxtrot = offset.baseCode;
            tango['code'] = foxtrot;
            offset = offset.guildScheduledEventId;
            tango['guild_scheduled_event_id'] = offset;
            foxtrot = romeo == yankee;
            offset = undefined;
            if(foxtrot) { _fun00012_ip = 267; continue _fun00011 }
 247:
            yankee = yankee.target_application;
            romeo = romeo == yankee;
            offset = undefined;
            if(romeo) { _fun00012_ip = 267; continue _fun00011 }
 262:
            offset = yankee.id;
 267:
            tango['application_id'] = offset;
            tango = options.bind(verify)(golf, tango);
            if(!zulu) { _fun00012_ip = 302; continue _fun00011 }
 281:
            tango = _closure1_slot20;
            zulu = _closure1_slot16;
            zulu = zulu.COPY;
            zulu = tango.bind(entity)(oscar, report, zulu);
 302:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 19;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.presentLinkCopied;
            mike = mike.bind(zulu)();
 332:
            return entity;
        }
    };
    zulu['handleCopy'] = tango;
    tango = function(argFoo, argBar, argBaz) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            options = argBaz;
            var _closure2_slot0 = zulu;
            entity = argBar;
            var _closure2_slot1 = entity;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 17;
            golf = oscar[entity];
            entity = undefined;
            verify = report.bind(entity)(golf);
            golf = verify.hideActionSheet;
            golf = golf.bind(verify)();
            golf = _closure1_slot7;
            tango = golf.getPendingSettings;
            tango = tango.bind(golf)();
            var _closure2_slot2 = tango;
            tango = 14;
            tango = oscar[tango];
            golf = report.bind(entity)(tango);
            oscar = golf.openSettings;
            report = zulu.guild_id;
            tango = zulu.id;
            zulu = null;
            verify = zulu != options;
            zulu = 'Instant Invite Action Sheet';
            if(!verify) { _fun00014_ip = 118; continue _fun00013 }
 115:
            zulu = options;
 118:
            offset = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure2_slot1;
                    oscar = null;
                    if(!(oscar == mike)) { _fun00016_ip = 84; continue _fun00015 }
 13:
                    report = _closure1_slot18;
                    tango = _closure2_slot0;
                    zulu = {};
                    mike = false;
                    zulu['createInvite'] = mike;
                    mike = _closure2_slot2;
                    golf = oscar == mike;
                    mike = undefined;
                    options = undefined;
                    if(golf) { _fun00016_ip = 58; continue _fun00015 }
 48:
                    golf = _closure2_slot2;
                    options = golf.targetApplicationId;
 58:
                    verify = oscar != options;
                    golf = undefined;
                    if(!verify) { _fun00016_ip = 70; continue _fun00015 }
 67:
                    golf = options;
 70:
                    zulu['targetApplicationId'] = golf;
                    mike = report.bind(mike)(tango, oscar, zulu);
                    _fun00016_ip = 94; continue _fun00015;
 84:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 94:
                    entity = undefined;
                    return entity;
                }
            };
            backup = golf;
            foxtrot = report;
            romeo = tango;
            yankee = zulu;
            mike = backup[oscar](foxtrot, romeo, yankee, offset, verify);
            return entity;
        }
    };
    zulu['handlePressSettings'] = tango;
    tango = function(argFoo) { // Original name: isAppInstalled
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 22;
            report = report[zulu];
            zulu = undefined;
            report = oscar.bind(zulu)(report);
            zulu = report.isAndroid;
            zulu = zulu.bind(report)();
            if(zulu) { _fun00018_ip = 83; continue _fun00017 }
 46:
            zulu = global;
            report = zulu.Promise;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            golf = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                tango = _closure1_slot3;
                zulu = tango.canOpenURL;
                golf = _closure2_slot0;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = '';
                mike = '://app';
                mike = oscar.bind(report)(golf, mike);
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function() {
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            options = zulu;
            entity = new options[report](golf, oscar);
            entity = entity instanceof Object ? entity : zulu;
            _fun00018_ip = 106; continue _fun00017;
 83:
            mike = _closure1_slot4;
            zulu = mike.DCDSend;
            mike = zulu.isPackageInstalled;
            entity = mike.bind(zulu)(tango);
 106:
            return entity;
        }
    };
    zulu['isAppInstalled'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            tango = argCorge;
            oscar = _closure1_slot6;
            zulu = oscar.getChannel;
            entity = argBar;
            zulu = zulu.bind(oscar)(entity);
            oscar = null;
            if(!(oscar == zulu)) { _fun00020_ip = 66; continue _fun00019 }
 32:
            offset = _closure1_slot8;
            verify = offset.getDefaultChannel;
            options = report.id;
            entity = _closure1_slot17;
            golf = entity.CREATE_INSTANT_INVITE;
            entity = true;
            zulu = verify.bind(offset)(options, entity, golf);
 66:
            options = _closure1_slot1;
            entity = _closure1_slot2;
            yankee = 23;
            golf = entity[yankee];
            entity = undefined;
            options = options.bind(entity)(golf);
            golf = oscar != zulu;
            verify = 'Channel cannot be null';
            golf = options.bind(entity)(golf, verify);
            golf = report.vanityURLCode;
            if(!(oscar != golf)) { _fun00020_ip = 131; continue _fun00019 }
 114:
            options = report.vanityURLCode;
            golf = '';
            if(!(golf === options)) { _fun00020_ip = 266; continue _fun00019 }
 131:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 24;
            golf = offset[golf];
            romeo = options.bind(entity)(golf);
            offset = romeo.getInviteChannelId;
            options = zulu.id;
            golf = argBaz;
            offset = offset.bind(romeo)(options, golf);
            if(!(oscar != offset)) { _fun00020_ip = 277; continue _fun00019 }
 175:
            options = _closure1_slot6;
            golf = options.getChannel;
            golf = golf.bind(options)(offset);
            if(!(oscar == golf)) { _fun00020_ip = 227; continue _fun00019 }
 193:
            backup = _closure1_slot8;
            foxtrot = backup.getDefaultChannel;
            romeo = report.id;
            options = _closure1_slot17;
            offset = options.CREATE_INSTANT_INVITE;
            options = true;
            golf = foxtrot.bind(backup)(romeo, options, offset);
 227:
            offset = _closure1_slot1;
            options = _closure1_slot2;
            options = options[yankee];
            options = offset.bind(entity)(options);
            oscar = oscar != golf;
            oscar = options.bind(entity)(oscar, verify);
            oscar = _closure1_slot18;
            oscar = oscar.bind(entity)(golf, tango);
            _fun00020_ip = 277; continue _fun00019;
 266:
            mike = _closure1_slot19;
            mike = mike.bind(entity)(report, zulu, tango);
 277:
            return entity;
        }
    };
    zulu['handleOpenInviteActionsheet'] = tango;
    mike = function() {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            mike = _closure1_slot12;
            entity = mike.getDisplayedInviteCode;
            golf = entity.bind(mike)();
            mike = _closure1_slot5;
            entity = mike.getDisplayedGuildTemplateCode;
            oscar = entity.bind(mike)();
            zulu = null;
            mike = zulu != golf;
            entity = null;
            if(!mike) { _fun00022_ip = 57; continue _fun00021 }
 42:
            report = _closure1_slot9;
            mike = report.getInvite;
            entity = mike.bind(report)(golf);
 57:
            report = zulu != oscar;
            mike = null;
            if(!report) { _fun00022_ip = 81; continue _fun00021 }
 66:
            report = _closure1_slot5;
            tango = report.getGuildTemplate;
            mike = tango.bind(report)(oscar);
 81:
            entity = zulu != entity;
            if(entity) { _fun00022_ip = 92; continue _fun00021 }
 88:
            entity = zulu != mike;
 92:
            return entity;
        }
    };
    zulu['hasDeferredInvite'] = mike;
    return entity;
})();