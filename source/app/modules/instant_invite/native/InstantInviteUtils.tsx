// app/modules/instant_invite/native/InstantInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    oscard = tangon.Linking;
    var _closure1_slot3 = oscard;
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = verify[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.InviteTargetTypes;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.IOS_COPY_TO_PASTEBOARD;
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    report = tangon.AnalyticEvents;
    var _closure1_slot15 = report;
    report = tangon.InviteOptionsType;
    var _closure1_slot16 = report;
    tangon = tangon.Permissions;
    var _closure1_slot17 = tangon;
    oscard = function(argFoo, argBar, argBaz) { // Original name: showInstantInviteActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            report = argBaz;
            yankee = {'isActionSheet': true, 'location': 'IOS Instant Invite Action Sheet Mount'};
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            verify = 12;
            zuuluu = entity[verify];
            entity = undefined;
            offset = tangon.bind(entity)(zuuluu);
            option = offset.track;
            zuuluu = _closure1_slot15;
            tangon = zuuluu.OPEN_POPOUT;
            zuuluu = {};
            romeon = 'Instant Invite';
            zuuluu['type'] = romeon;
            zuuluu['source'] = oscard;
            zuuluu = option.bind(offset)(tangon, zuuluu);
            tangon = null;
            option = tangon == report;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 102; continue _fun00001 }
 96:
            zuuluu = report.stream;
 102:
            if(!(tangon == zuuluu)) { _fun00002_ip = 161; continue _fun00001 }
 106:
            option = tangon == report;
            zuuluu = undefined;
            if(option) { _fun00002_ip = 121; continue _fun00001 }
 115:
            zuuluu = report.targetApplicationId;
 121:
            if(!(tangon != zuuluu)) { _fun00002_ip = 354; continue _fun00001 }
 128:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.EMBEDDED_APPLICATION;
            yankee['targetType'] = zuuluu;
            zuuluu = report.targetApplicationId;
            yankee['targetApplicationId'] = zuuluu;
            _fun00002_ip = 354; continue _fun00001;
 161:
            romeon = report.stream;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.STREAM;
            yankee['targetType'] = zuuluu;
            zuuluu = romeon.ownerId;
            yankee['targetUserId'] = zuuluu;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 13;
            option = zuuluu[option];
            foxtra = offset.bind(entity)(option);
            offset = foxtra.getStreamerApplication;
            option = _closure1_slot10;
            foxtra = offset.bind(foxtra)(romeon, option);
            option = _closure1_slot1;
            zuuluu = zuuluu[verify];
            offset = option.bind(entity)(zuuluu);
            verify = offset.track;
            zuuluu = _closure1_slot15;
            option = zuuluu.OPEN_MODAL;
            zuuluu = {};
            backup = 'Send Stream Invite';
            zuuluu['type'] = backup;
            backup = yankee.location;
            zuuluu['location'] = backup;
            romeon = romeon.ownerId;
            zuuluu['other_user_id'] = romeon;
            backup = tangon == foxtra;
            romeon = undefined;
            if(backup) { _fun00002_ip = 305; continue _fun00001 }
 300:
            romeon = foxtra.id;
 305:
            zuuluu['application_id'] = romeon;
            backup = tangon == foxtra;
            romeon = undefined;
            if(backup) { _fun00002_ip = 324; continue _fun00001 }
 319:
            romeon = foxtra.name;
 324:
            zuuluu['application_name'] = romeon;
            backup = tangon == foxtra;
            romeon = undefined;
            if(backup) { _fun00002_ip = 343; continue _fun00001 }
 338:
            romeon = foxtra.id;
 343:
            zuuluu['game_id'] = romeon;
            zuuluu = verify.bind(offset)(option, zuuluu);
 354:
            zuuluu = tangon == report;
            option = undefined;
            if(zuuluu) { _fun00002_ip = 369; continue _fun00001 }
 363:
            option = report.createInvite;
 369:
            zuuluu = false;
            zuuluu = zuuluu !== option;
            if(!zuuluu) { _fun00002_ip = 396; continue _fun00001 }
 378:
            verify = tangon == report;
            option = undefined;
            if(verify) { _fun00002_ip = 392; continue _fun00001 }
 387:
            option = report.code;
 392:
            zuuluu = tangon == option;
 396:
            if(!zuuluu) { _fun00002_ip = 447; continue _fun00001 }
 399:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 14;
            zuuluu = verify[zuuluu];
            offset = option.bind(entity)(zuuluu);
            verify = offset.init;
            zuuluu = golfie.getGuildId;
            option = zuuluu.bind(golfie)();
            zuuluu = golfie.id;
            zuuluu = verify.bind(offset)(option, zuuluu, yankee);
 447:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = {};
            michal['channel'] = golfie;
            michal['source'] = oscard;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 492; continue _fun00001 }
 486:
            oscard = report.guildScheduledEventId;
 492:
            michal['guildScheduledEventId'] = oscard;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 512; continue _fun00001 }
 506:
            oscard = report.targetApplicationId;
 512:
            michal['targetApplicationId'] = oscard;
            oscard = tangon == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 531; continue _fun00001 }
 526:
            tangon = report.code;
 531:
            michal['code'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot18 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: showVanityUrlInviteActionSheet
        tangon = argBaz;
        zuuluu = _closure1_slot1;
        report = _closure1_slot2;
        entity = 12;
        oscard = report[entity];
        entity = undefined;
        option = zuuluu.bind(entity)(oscard);
        golfie = option.track;
        michal = _closure1_slot15;
        oscard = michal.OPEN_POPOUT;
        michal = {};
        verify = 'Vanity URL Invite';
        michal['type'] = verify;
        michal['source'] = tangon;
        michal = golfie.bind(option)(oscard, michal);
        michal = 15;
        michal = report[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = {};
        report = argFoo;
        report = report.vanityURLCode;
        michal['vanityURLCode'] = report;
        report = argBar;
        michal['channel'] = report;
        michal['source'] = tangon;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot19 = report;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: trackOptionClicked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            romeon = argFoo;
            offset = argBar;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            foxtra = 16;
            michal = tangon[foxtra];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.parseExtraDataFromInviteKey;
            michal = michal.bind(zuuluu)(romeon);
            report = _closure1_slot9;
            zuuluu = report.getInvite;
            michal = michal.baseCode;
            golfie = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot1;
            michal = 12;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot15;
            zuuluu = michal.INSTANT_INVITE_OPTION_CLICKED;
            michal = {};
            option = argBaz;
            michal['invite_type'] = option;
            option = null;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 120; continue _fun00003 }
 115:
            verify = offset.guild_id;
 120:
            michal['guild_id'] = verify;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 138; continue _fun00003 }
 133:
            verify = offset.id;
 138:
            michal['channel_id'] = verify;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[foxtra];
            yankee = yankee.bind(entity)(verify);
            verify = yankee.parseInviteCodeFromInviteKey;
            verify = verify.bind(yankee)(romeon);
            michal['invite_code'] = verify;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 189; continue _fun00003 }
 184:
            verify = offset.type;
 189:
            michal['invite_channel_type'] = verify;
            verify = _closure1_slot11;
            oscard = verify.getCurrentUser;
            verify = oscard.bind(verify)();
            offset = option == verify;
            oscard = undefined;
            if(offset) { _fun00004_ip = 221; continue _fun00003 }
 216:
            oscard = verify.id;
 221:
            michal['invite_inviter_id'] = oscard;
            oscard = argCor;
            michal['location'] = oscard;
            verify = option == golfie;
            oscard = undefined;
            if(verify) { _fun00004_ip = 262; continue _fun00003 }
 242:
            golfie = golfie.target_application;
            option = option == golfie;
            oscard = undefined;
            if(option) { _fun00004_ip = 262; continue _fun00003 }
 257:
            oscard = golfie.id;
 262:
            michal['application_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    golfie = 25;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/instant_invite/native/InstantInviteUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: showInstantInviteActionSheetForChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.getChannel;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00006_ip = 38; continue _fun00005 }
 26:
            michal = _closure1_slot18;
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
 38:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['showInstantInviteActionSheetForChannel'] = golfie;
    zuuluu['showInstantInviteActionSheet'] = oscard;
    zuuluu['showVanityUrlInviteActionSheet'] = report;
    zuuluu['trackOptionClicked'] = tangon;
    tangon = function(argFoo) {
        entity = argFoo;
        return entity;
    };
    zuuluu['getShareMessage'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            report = argBar;
            oscard = argCor;
            zuuluu = arguments[4];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            zuuluu = true;
 20:
            foxtra = null;
            if(!(foxtra != golfie)) { _fun00008_ip = 381; continue _fun00007 }
 29:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 16;
            tangon = verify[tangon];
            option = option.bind(entity)(tangon);
            tangon = option.parseExtraDataFromInviteKey;
            yankee = tangon.bind(option)(golfie);
            offset = _closure1_slot9;
            option = offset.getInvite;
            tangon = yankee.baseCode;
            romeon = option.bind(offset)(tangon);
            option = _closure1_slot1;
            tangon = 12;
            tangon = verify[tangon];
            offset = option.bind(entity)(tangon);
            verify = offset.track;
            tangon = _closure1_slot15;
            option = tangon.INSTANT_INVITE_SHARED;
            tangon = {};
            kiloes = foxtra == report;
            backup = undefined;
            if(kiloes) { _fun00008_ip = 131; continue _fun00007 }
 126:
            backup = report.guild_id;
 131:
            tangon['guild_id'] = backup;
            kiloes = foxtra == report;
            backup = undefined;
            if(kiloes) { _fun00008_ip = 149; continue _fun00007 }
 144:
            backup = report.id;
 149:
            tangon['channel_id'] = backup;
            backup = yankee.baseCode;
            tangon['invite_code'] = backup;
            kiloes = foxtra == report;
            backup = undefined;
            if(kiloes) { _fun00008_ip = 178; continue _fun00007 }
 173:
            backup = report.type;
 178:
            tangon['invite_channel_type'] = backup;
            kiloes = _closure1_slot11;
            backup = kiloes.getCurrentUser;
            kiloes = backup.bind(kiloes)();
            sizing = foxtra == kiloes;
            backup = undefined;
            if(sizing) { _fun00008_ip = 210; continue _fun00007 }
 205:
            backup = kiloes.id;
 210:
            tangon['invite_inviter_id'] = backup;
            yankee = yankee.guildScheduledEventId;
            tangon['invite_guild_scheduled_event_id'] = yankee;
            tangon['location'] = oscard;
            backup = foxtra == romeon;
            yankee = undefined;
            if(backup) { _fun00008_ip = 261; continue _fun00007 }
 241:
            romeon = romeon.target_application;
            foxtra = foxtra == romeon;
            yankee = undefined;
            if(foxtra) { _fun00008_ip = 261; continue _fun00007 }
 256:
            yankee = romeon.id;
 261:
            tangon['application_id'] = yankee;
            tangon = verify.bind(offset)(option, tangon);
            if(!zuuluu) { _fun00008_ip = 304; continue _fun00007 }
 275:
            tangon = _closure1_slot20;
            zuuluu = _closure1_slot16;
            result = zuuluu.SHARE;
            source = undefined;
            update = golfie;
            echoed = report;
            output = oscard;
            zuuluu = source[tangon](update, echoed, result, output, sizing);
 304:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 17;
            zuuluu = tangon[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.hideActionSheet;
            zuuluu = zuuluu.bind(report)();
            zuuluu = _closure1_slot0;
            michal = 18;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.showShareActionSheet;
            zuuluu = {};
            michal = argBaz;
            zuuluu['message'] = michal;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.includes;
                    michal = _closure1_slot14;
                    michal = zuuluu.bind(tangon)(michal);
                    if(michal) { _fun00010_ip = 55; continue _fun00009 }
 23:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.presentInviteSent;
                    entity = entity.bind(michal)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, oscard, michal);
 381:
            return entity;
        }
    };
    zuuluu['handleOpenShareSheet'] = tangon;
    tangon = function(argFoo, argBar, argBaz) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            zuuluu = arguments[3];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00012_ip = 17; continue _fun00011 }
 15:
            zuuluu = true;
 17:
            romeon = null;
            if(!(romeon != oscard)) { _fun00012_ip = 332; continue _fun00011 }
 26:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 16;
            tangon = option[tangon];
            golfie = verify.bind(entity)(tangon);
            tangon = golfie.parseExtraDataFromInviteKey;
            offset = tangon.bind(golfie)(oscard);
            golfie = _closure1_slot1;
            tangon = 20;
            tangon = option[tangon];
            tangon = golfie.bind(entity)(tangon);
            yankee = tangon.bind(entity)(oscard);
            tangon = 21;
            tangon = option[tangon];
            verify = verify.bind(entity)(tangon);
            tangon = verify.copy;
            tangon = tangon.bind(verify)(yankee);
            yankee = _closure1_slot9;
            verify = yankee.getInvite;
            tangon = offset.baseCode;
            yankee = verify.bind(yankee)(tangon);
            tangon = 12;
            tangon = option[tangon];
            verify = golfie.bind(entity)(tangon);
            option = verify.track;
            tangon = _closure1_slot15;
            golfie = tangon.COPY_INSTANT_INVITE;
            tangon = {};
            backup = romeon == report;
            foxtra = undefined;
            if(backup) { _fun00012_ip = 168; continue _fun00011 }
 163:
            foxtra = report.guild_id;
 168:
            tangon['server'] = foxtra;
            backup = romeon == report;
            foxtra = undefined;
            if(backup) { _fun00012_ip = 187; continue _fun00011 }
 182:
            foxtra = report.id;
 187:
            tangon['channel'] = foxtra;
            backup = romeon == report;
            foxtra = undefined;
            if(backup) { _fun00012_ip = 205; continue _fun00011 }
 200:
            foxtra = report.type;
 205:
            tangon['channel_type'] = foxtra;
            foxtra = argBaz;
            tangon['location'] = foxtra;
            foxtra = offset.baseCode;
            tangon['code'] = foxtra;
            offset = offset.guildScheduledEventId;
            tangon['guild_scheduled_event_id'] = offset;
            foxtra = romeon == yankee;
            offset = undefined;
            if(foxtra) { _fun00012_ip = 267; continue _fun00011 }
 247:
            yankee = yankee.target_application;
            romeon = romeon == yankee;
            offset = undefined;
            if(romeon) { _fun00012_ip = 267; continue _fun00011 }
 262:
            offset = yankee.id;
 267:
            tangon['application_id'] = offset;
            tangon = option.bind(verify)(golfie, tangon);
            if(!zuuluu) { _fun00012_ip = 302; continue _fun00011 }
 281:
            tangon = _closure1_slot20;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.COPY;
            zuuluu = tangon.bind(entity)(oscard, report, zuuluu);
 302:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 19;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.presentLinkCopied;
            michal = michal.bind(zuuluu)();
 332:
            return entity;
        }
    };
    zuuluu['handleCopy'] = tangon;
    tangon = function(argFoo, argBar, argBaz) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            option = argBaz;
            var _closure2_slot0 = zuuluu;
            entity = argBar;
            var _closure2_slot1 = entity;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 17;
            golfie = oscard[entity];
            entity = undefined;
            verify = report.bind(entity)(golfie);
            golfie = verify.hideActionSheet;
            golfie = golfie.bind(verify)();
            golfie = _closure1_slot7;
            tangon = golfie.getPendingSettings;
            tangon = tangon.bind(golfie)();
            var _closure2_slot2 = tangon;
            tangon = 14;
            tangon = oscard[tangon];
            golfie = report.bind(entity)(tangon);
            oscard = golfie.openSettings;
            report = zuuluu.guild_id;
            tangon = zuuluu.id;
            zuuluu = null;
            verify = zuuluu != option;
            zuuluu = 'Instant Invite Action Sheet';
            if(!verify) { _fun00014_ip = 118; continue _fun00013 }
 115:
            zuuluu = option;
 118:
            offset = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot1;
                    oscard = null;
                    if(!(oscard == michal)) { _fun00016_ip = 84; continue _fun00015 }
 13:
                    report = _closure1_slot18;
                    tangon = _closure2_slot0;
                    zuuluu = {};
                    michal = false;
                    zuuluu['createInvite'] = michal;
                    michal = _closure2_slot2;
                    golfie = oscard == michal;
                    michal = undefined;
                    option = undefined;
                    if(golfie) { _fun00016_ip = 58; continue _fun00015 }
 48:
                    golfie = _closure2_slot2;
                    option = golfie.targetApplicationId;
 58:
                    verify = oscard != option;
                    golfie = undefined;
                    if(!verify) { _fun00016_ip = 70; continue _fun00015 }
 67:
                    golfie = option;
 70:
                    zuuluu['targetApplicationId'] = golfie;
                    michal = report.bind(michal)(tangon, oscard, zuuluu);
                    _fun00016_ip = 94; continue _fun00015;
 84:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 94:
                    entity = undefined;
                    return entity;
                }
            };
            backup = golfie;
            foxtra = report;
            romeon = tangon;
            yankee = zuuluu;
            michal = backup[oscard](foxtra, romeon, yankee, offset, verify);
            return entity;
        }
    };
    zuuluu['handlePressSettings'] = tangon;
    tangon = function(argFoo) { // Original name: isAppInstalled
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 22;
            report = report[zuuluu];
            zuuluu = undefined;
            report = oscard.bind(zuuluu)(report);
            zuuluu = report.isAndroid;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00018_ip = 83; continue _fun00017 }
 46:
            zuuluu = global;
            report = zuuluu.Promise;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            golfie = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                tangon = _closure1_slot3;
                zuuluu = tangon.canOpenURL;
                golfie = _closure2_slot0;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = '';
                michal = '://app';
                michal = oscard.bind(report)(golfie, michal);
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            option = zuuluu;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : zuuluu;
            _fun00018_ip = 106; continue _fun00017;
 83:
            michal = _closure1_slot4;
            zuuluu = michal.DCDSend;
            michal = zuuluu.isPackageInstalled;
            entity = michal.bind(zuuluu)(tangon);
 106:
            return entity;
        }
    };
    zuuluu['isAppInstalled'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            tangon = argCor;
            oscard = _closure1_slot6;
            zuuluu = oscard.getChannel;
            entity = argBar;
            zuuluu = zuuluu.bind(oscard)(entity);
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00020_ip = 66; continue _fun00019 }
 32:
            offset = _closure1_slot8;
            verify = offset.getDefaultChannel;
            option = report.id;
            entity = _closure1_slot17;
            golfie = entity.CREATE_INSTANT_INVITE;
            entity = true;
            zuuluu = verify.bind(offset)(option, entity, golfie);
 66:
            option = _closure1_slot1;
            entity = _closure1_slot2;
            yankee = 23;
            golfie = entity[yankee];
            entity = undefined;
            option = option.bind(entity)(golfie);
            golfie = oscard != zuuluu;
            verify = 'Channel cannot be null';
            golfie = option.bind(entity)(golfie, verify);
            golfie = report.vanityURLCode;
            if(!(oscard != golfie)) { _fun00020_ip = 131; continue _fun00019 }
 114:
            option = report.vanityURLCode;
            golfie = '';
            if(!(golfie === option)) { _fun00020_ip = 266; continue _fun00019 }
 131:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 24;
            golfie = offset[golfie];
            romeon = option.bind(entity)(golfie);
            offset = romeon.getInviteChannelId;
            option = zuuluu.id;
            golfie = argBaz;
            offset = offset.bind(romeon)(option, golfie);
            if(!(oscard != offset)) { _fun00020_ip = 277; continue _fun00019 }
 175:
            option = _closure1_slot6;
            golfie = option.getChannel;
            golfie = golfie.bind(option)(offset);
            if(!(oscard == golfie)) { _fun00020_ip = 227; continue _fun00019 }
 193:
            backup = _closure1_slot8;
            foxtra = backup.getDefaultChannel;
            romeon = report.id;
            option = _closure1_slot17;
            offset = option.CREATE_INSTANT_INVITE;
            option = true;
            golfie = foxtra.bind(backup)(romeon, option, offset);
 227:
            offset = _closure1_slot1;
            option = _closure1_slot2;
            option = option[yankee];
            option = offset.bind(entity)(option);
            oscard = oscard != golfie;
            oscard = option.bind(entity)(oscard, verify);
            oscard = _closure1_slot18;
            oscard = oscard.bind(entity)(golfie, tangon);
            _fun00020_ip = 277; continue _fun00019;
 266:
            michal = _closure1_slot19;
            michal = michal.bind(entity)(report, zuuluu, tangon);
 277:
            return entity;
        }
    };
    zuuluu['handleOpenInviteActionsheet'] = tangon;
    michal = function() {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = _closure1_slot12;
            entity = michal.getDisplayedInviteCode;
            golfie = entity.bind(michal)();
            michal = _closure1_slot5;
            entity = michal.getDisplayedGuildTemplateCode;
            oscard = entity.bind(michal)();
            zuuluu = null;
            michal = zuuluu != golfie;
            entity = null;
            if(!michal) { _fun00022_ip = 57; continue _fun00021 }
 42:
            report = _closure1_slot9;
            michal = report.getInvite;
            entity = michal.bind(report)(golfie);
 57:
            report = zuuluu != oscard;
            michal = null;
            if(!report) { _fun00022_ip = 81; continue _fun00021 }
 66:
            report = _closure1_slot5;
            tangon = report.getGuildTemplate;
            michal = tangon.bind(report)(oscard);
 81:
            entity = zuuluu != entity;
            if(entity) { _fun00022_ip = 92; continue _fun00021 }
 88:
            entity = zuuluu != michal;
 92:
            return entity;
        }
    };
    zuuluu['hasDeferredInvite'] = michal;
    return entity;
})();