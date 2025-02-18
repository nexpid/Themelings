// app/components_native/chat/MessagesUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot8 = golfie;
    golfie = tangon.MessageEmbedTypes;
    var _closure1_slot9 = golfie;
    tangon = tangon.MessageTypes;
    var _closure1_slot10 = tangon;
    tangon = 28;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/chat/MessagesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: getLongPressSelectedMedia
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            golfie = argBar;
            entity = argBaz;
            verify = argCor;
            option = argGra;
            tangon = offset.type;
            michal = _closure1_slot10;
            michal = michal.THREAD_STARTER_MESSAGE;
            report = offset;
            if(!(tangon === michal)) { _fun00002_ip = 93; continue _fun00001 }
 42:
            michal = offset.messageReference;
            tangon = null;
            report = offset;
            if(!(tangon != michal)) { _fun00002_ip = 93; continue _fun00001 }
 57:
            romeon = _closure1_slot3;
            yankee = romeon.getMessageByReference;
            michal = offset.messageReference;
            michal = yankee.bind(romeon)(michal);
            michal = michal.message;
            report = offset;
            if(!(tangon != michal)) { _fun00002_ip = 93; continue _fun00001 }
 90:
            report = michal;
 93:
            tangon = 'attachment';
            if(!(tangon !== entity)) { _fun00002_ip = 583; continue _fun00001 }
 104:
            michal = 'embed';
            if(!(michal !== entity)) { _fun00002_ip = 337; continue _fun00001 }
 115:
            offset = 'component';
            if(!(offset !== entity)) { _fun00002_ip = 127; continue _fun00001 }
 123:
            entity = null;
            return entity;
 127:
            entity = null;
            if(!(entity != verify)) { _fun00002_ip = 335; continue _fun00001 }
 136:
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 7;
            michal = yankee[michal];
            yankee = undefined;
            foxtra = romeon.bind(yankee)(michal);
            romeon = foxtra.flattenComponents;
            michal = report.components;
            michal = romeon.bind(foxtra)(michal);
            verify = michal[verify];
            if(!(entity != verify)) { _fun00002_ip = 333; continue _fun00001 }
 186:
            romeon = verify.type;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 8;
            michal = backup[michal];
            michal = foxtra.bind(yankee)(michal);
            michal = michal.ComponentType;
            michal = michal.MEDIA_GALLERY;
            if(!(romeon !== michal)) { _fun00002_ip = 229; continue _fun00001 }
 227:
            return entity;
 229:
            if(!(entity != option)) { _fun00002_ip = 331; continue _fun00001 }
 233:
            michal = verify.items;
            michal = michal[option];
            if(!(entity != michal)) { _fun00002_ip = 329; continue _fun00001 }
 247:
            option = michal.media;
            michal = {};
            michal['sourceType'] = offset;
            michal['source'] = verify;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 6;
            verify = romeon[verify];
            yankee = offset.bind(yankee)(verify);
            offset = yankee.isVideoContentType;
            verify = option.contentType;
            offset = offset.bind(yankee)(verify);
            verify = 'image';
            if(!offset) { _fun00002_ip = 312; continue _fun00001 }
 308:
            verify = 'video';
 312:
            michal['mediaType'] = verify;
            option = option.url;
            michal['mediaUrl'] = option;
            return michal;
 329:
            return entity;
 331:
            return entity;
 333:
            return entity;
 335:
            return entity;
 337:
            entity = report.embeds;
            michal = entity[golfie];
            var _closure2_slot0 = michal;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 581; continue _fun00001 }
 360:
            verify = function(argFoo, argBar) { // Original name: getEmbedMedia
                entity = {};
                michal = 'embed';
                entity['sourceType'] = michal;
                michal = _closure2_slot0;
                entity['source'] = michal;
                michal = argFoo;
                entity['mediaType'] = michal;
                michal = argBar;
                entity['mediaUrl'] = michal;
                return entity;
            };
            option = michal.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.IMAGE;
            if(!(option === zuuluu)) { _fun00002_ip = 398; continue _fun00001 }
 386:
            zuuluu = michal.url;
            if(!(entity == zuuluu)) { _fun00002_ip = 562; continue _fun00001 }
 398:
            option = michal.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GIFV;
            if(!(option === zuuluu)) { _fun00002_ip = 426; continue _fun00001 }
 417:
            zuuluu = michal.url;
            if(!(entity == zuuluu)) { _fun00002_ip = 543; continue _fun00001 }
 426:
            option = michal.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.RICH;
            if(!(option === zuuluu)) { _fun00002_ip = 495; continue _fun00001 }
 445:
            option = michal.image;
            yankee = entity == option;
            offset = undefined;
            zuuluu = undefined;
            if(yankee) { _fun00002_ip = 467; continue _fun00001 }
 462:
            zuuluu = option.url;
 467:
            if(!(entity == zuuluu)) { _fun00002_ip = 520; continue _fun00001 }
 471:
            option = michal.video;
            yankee = entity == option;
            zuuluu = undefined;
            if(yankee) { _fun00002_ip = 491; continue _fun00001 }
 486:
            zuuluu = option.url;
 491:
            if(!(entity == zuuluu)) { _fun00002_ip = 497; continue _fun00001 }
 495:
            return entity;
 497:
            zuuluu = michal.video;
            option = zuuluu.url;
            zuuluu = 'video';
            zuuluu = verify.bind(offset)(zuuluu, option);
            return zuuluu;
 520:
            zuuluu = michal.image;
            option = zuuluu.url;
            zuuluu = 'image';
            zuuluu = verify.bind(offset)(zuuluu, option);
            return zuuluu;
 543:
            offset = michal.url;
            option = undefined;
            zuuluu = 'video';
            zuuluu = verify.bind(option)(zuuluu, offset);
            return zuuluu;
 562:
            option = michal.url;
            zuuluu = undefined;
            michal = 'image';
            michal = verify.bind(zuuluu)(michal, option);
            return michal;
 581:
            return entity;
 583:
            entity = report.attachments;
            zuuluu = entity[golfie];
            entity = null;
            if(!(entity == zuuluu)) { _fun00002_ip = 631; continue _fun00001 }
 599:
            michal = report.getContentMessage;
            report = michal.bind(report)();
            option = entity == report;
            michal = undefined;
            if(option) { _fun00002_ip = 628; continue _fun00001 }
 618:
            report = report.attachments;
            michal = report[golfie];
 628:
            zuuluu = michal;
 631:
            michal = entity == zuuluu;
            entity = null;
            if(michal) { _fun00002_ip = 810; continue _fun00001 }
 643:
            michal = {};
            michal['sourceType'] = tangon;
            michal['source'] = zuuluu;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            verify = 6;
            tangon = tangon[verify];
            option = undefined;
            golfie = report.bind(option)(tangon);
            report = golfie.isVideoFile;
            tangon = zuuluu.filename;
            report = report.bind(golfie)(tangon);
            tangon = 'video';
            if(report) { _fun00002_ip = 792; continue _fun00001 }
 700:
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[verify];
            offset = golfie.bind(option)(report);
            golfie = offset.isAudioFile;
            report = zuuluu.filename;
            golfie = golfie.bind(offset)(report);
            report = 'audio';
            if(golfie) { _fun00002_ip = 789; continue _fun00001 }
 741:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[verify];
            option = golfie.bind(option)(oscard);
            golfie = option.isImageFile;
            oscard = zuuluu.filename;
            golfie = golfie.bind(option)(oscard);
            oscard = 'file';
            if(!golfie) { _fun00002_ip = 786; continue _fun00001 }
 782:
            oscard = 'image';
 786:
            report = oscard;
 789:
            tangon = report;
 792:
            michal['mediaType'] = tangon;
            zuuluu = zuuluu.url;
            michal['mediaUrl'] = zuuluu;
            entity = michal;
 810:
            return entity;
        }
    };
    zuuluu['getLongPressSelectedMedia'] = tangon;
    tangon = function(argFoo) { // Original name: toObscuredMedia
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.sourceType;
            entity = 'attachment';
            if(!(entity !== michal)) { _fun00004_ip = 91; continue _fun00003 }
 17:
            tangon = zuuluu.sourceType;
            michal = 'embed';
            entity = null;
            if(!(michal === tangon)) { _fun00004_ip = 89; continue _fun00003 }
 33:
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 9;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            tangon = tangon.ObscuredMediaTypes;
            tangon = tangon.Embed;
            michal['type'] = tangon;
            tangon = zuuluu.source;
            michal['media'] = tangon;
            entity = michal;
 89:
            _fun00004_ip = 147; continue _fun00003;
 91:
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 9;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            tangon = tangon.ObscuredMediaTypes;
            tangon = tangon.Attachment;
            michal['type'] = tangon;
            zuuluu = zuuluu.source;
            michal['media'] = zuuluu;
            entity = michal;
 147:
            return entity;
        }
    };
    zuuluu['toObscuredMedia'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: handleAddOrRemoveReaction
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            offset = argFoo;
            golfie = argBar;
            verify = argBaz;
            option = arguments[3];
            oscard = arguments[4];
            entity = undefined;
            if(!(option === entity)) { _fun00006_ip = 23; continue _fun00005 }
 21:
            option = false;
 23:
            if(!(oscard === entity)) { _fun00006_ip = 62; continue _fun00005 }
 27:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.ReactionLocations;
            oscard = michal.MESSAGE;
 62:
            michal = golfie.getGuildId;
            sizing = michal.bind(golfie)();
            zuuluu = _closure1_slot7;
            michal = zuuluu.getCurrentUser;
            backup = michal.bind(zuuluu)();
            michal = null;
            zuuluu = michal == backup;
            kiloes = undefined;
            if(zuuluu) { _fun00006_ip = 104; continue _fun00005 }
 99:
            kiloes = backup.id;
 104:
            yankee = michal != sizing;
            if(!yankee) { _fun00006_ip = 126; continue _fun00005 }
 111:
            tangon = _closure1_slot6;
            zuuluu = tangon.canChatInGuild;
            yankee = zuuluu.bind(tangon)(sizing);
 126:
            zuuluu = michal != sizing;
            if(!zuuluu) { _fun00006_ip = 164; continue _fun00005 }
 133:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            tangon = 11;
            tangon = foxtra[tangon];
            romeon = romeon.bind(entity)(tangon);
            tangon = romeon.shouldShowMembershipVerificationGate;
            zuuluu = tangon.bind(romeon)(sizing);
 164:
            tangon = michal != sizing;
            foxtra = null;
            if(!tangon) { _fun00006_ip = 198; continue _fun00005 }
 173:
            tangon = michal != kiloes;
            foxtra = null;
            if(!tangon) { _fun00006_ip = 198; continue _fun00005 }
 182:
            romeon = _closure1_slot5;
            tangon = romeon.getMember;
            foxtra = tangon.bind(romeon)(sizing, kiloes);
 198:
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            tangon = 12;
            tangon = kiloes[tangon];
            romeon = romeon.bind(entity)(tangon);
            tangon = romeon.isMemberCommunicationDisabled;
            tangon = tangon.bind(romeon)(foxtra);
            romeon = golfie.isArchivedLockedThread;
            romeon = romeon.bind(golfie)();
            if(romeon) { _fun00006_ip = 752; continue _fun00005 }
 245:
            if(!(michal == verify)) { _fun00006_ip = 306; continue _fun00005 }
 249:
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            romeon = 16;
            romeon = kiloes[romeon];
            kiloes = foxtra.bind(entity)(romeon);
            foxtra = kiloes.handleAddNewReactions;
            romeon = {};
            romeon['burst'] = option;
            ctrled = kiloes;
            source = golfie;
            update = offset;
            echoed = oscard;
            result = romeon;
            romeon = ctrled[foxtra](source, update, echoed, result, output);
            _fun00006_ip = 908; continue _fun00005;
 306:
            if(!option) { _fun00006_ip = 390; continue _fun00005 }
 309:
            romeon = verify.me_burst;
            foxtra = !romeon;
            romeon = true;
            if(!(romeon === foxtra)) { _fun00006_ip = 390; continue _fun00005 }
 324:
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            romeon = 17;
            romeon = kiloes[romeon];
            foxtra = foxtra.bind(entity)(romeon);
            romeon = foxtra.isPremium;
            romeon = romeon.bind(foxtra)(backup);
            if(romeon) { _fun00006_ip = 390; continue _fun00005 }
 358:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 16;
            romeon = backup[romeon];
            foxtra = foxtra.bind(entity)(romeon);
            romeon = foxtra.handleOutOfSuperReactions;
            romeon = romeon.bind(foxtra)();
            return romeon;
 390:
            romeon = verify.me;
            foxtra = true;
            if(!(foxtra !== romeon)) { _fun00006_ip = 631; continue _fun00005 }
 405:
            if(!option) { _fun00006_ip = 421; continue _fun00005 }
 408:
            romeon = verify.me_burst;
            if(!(foxtra !== romeon)) { _fun00006_ip = 631; continue _fun00005 }
 421:
            if(zuuluu) { _fun00006_ip = 575; continue _fun00005 }
 427:
            romeon = golfie.isPrivate;
            romeon = romeon.bind(golfie)();
            if(romeon) { _fun00006_ip = 446; continue _fun00005 }
 440:
            if(!yankee) { _fun00006_ip = 575; continue _fun00005 }
 446:
            if(tangon) { _fun00006_ip = 575; continue _fun00005 }
 452:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 10;
            tangon = romeon[tangon];
            backup = yankee.bind(entity)(tangon);
            foxtra = backup.addReaction;
            source = golfie.id;
            echoed = verify.emoji;
            tangon = {};
            tangon['burst'] = option;
            ctrled = backup;
            update = offset;
            result = oscard;
            output = tangon;
            tangon = ctrled[foxtra](source, update, echoed, result, output, sizing);
            tangon = option;
            if(tangon) { _fun00006_ip = 571; continue _fun00005 }
 518:
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 18;
            yankee = kiloes[yankee];
            foxtra = romeon.bind(entity)(yankee);
            romeon = foxtra.triggerHapticFeedback;
            backup = _closure1_slot1;
            yankee = 19;
            yankee = kiloes[yankee];
            yankee = backup.bind(entity)(yankee);
            yankee = yankee.IMPACT_LIGHT;
            tangon = romeon.bind(foxtra)(yankee);
 571:
            tangon = undefined;
            return tangon;
 575:
            if(!zuuluu) { _fun00006_ip = 908; continue _fun00005 }
 581:
            zuuluu = golfie.getGuildId;
            tangon = zuuluu.bind(golfie)();
            if(!(michal != tangon)) { _fun00006_ip = 908; continue _fun00005 }
 598:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 20;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.openMemberVerificationModal;
            michal = michal.bind(zuuluu)(tangon);
            return michal;
 631:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            romeon = zuuluu.bind(entity)(michal);
            yankee = romeon.triggerHapticFeedback;
            foxtra = _closure1_slot1;
            michal = 19;
            michal = tangon[michal];
            michal = foxtra.bind(entity)(michal);
            michal = michal.IMPACT_LIGHT;
            michal = yankee.bind(romeon)(michal);
            michal = 10;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.removeReaction;
            michal = {};
            yankee = golfie.id;
            michal['channelId'] = yankee;
            michal['messageId'] = offset;
            verify = verify.emoji;
            michal['emoji'] = verify;
            michal['location'] = oscard;
            oscard = {};
            oscard['burst'] = option;
            michal['options'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            michal = undefined;
            return michal;
 752:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 13;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.open;
            michal = {};
            oscard = 'ARCHIVED_POST_REACTIONS_DISABLED_TOAST';
            michal['key'] = oscard;
            oscard = golfie.isForumPost;
            oscard = oscard.bind(golfie)();
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 14;
            option = yankee[golfie];
            option = offset.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(entity)(golfie);
            golfie = golfie.t;
            if(oscard) { _fun00006_ip = 862; continue _fun00005 }
 847:
            oscard = golfie.X2L3OT;
            oscard = option.bind(verify)(oscard);
            _fun00006_ip = 875; continue _fun00005;
 862:
            golfie = golfie.EJQrFh;
            oscard = option.bind(verify)(golfie);
 875:
            michal['content'] = oscard;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 15;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            michal['icon'] = report;
            michal = zuuluu.bind(tangon)(michal);
 908:
            return entity;
        }
    };
    zuuluu['handleAddOrRemoveReaction'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: handleToggleFollowForumPost
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 18;
            zuuluu = tangon[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(zuuluu);
            oscard = golfie.triggerHapticFeedback;
            zuuluu = _closure1_slot1;
            michal = 19;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.IMPACT_LIGHT;
            michal = oscard.bind(golfie)(michal);
            michal = 21;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            michal = argBar;
            if(michal) { _fun00008_ip = 99; continue _fun00007 }
 79:
            zuuluu = tangon.joinThread;
            michal = 'iOS Forum Toolbar';
            michal = zuuluu.bind(tangon)(report, michal);
            _fun00008_ip = 117; continue _fun00007;
 99:
            zuuluu = tangon.leaveThread;
            michal = 'iOS Forum Toolbar';
            michal = zuuluu.bind(tangon)(report, michal);
 117:
            return entity;
        }
    };
    zuuluu['handleToggleFollowForumPost'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: handleCopyLinkForumPost
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            verify = argBar;
            oscard = _closure1_slot4;
            entity = oscard.getChannel;
            option = entity.bind(oscard)(verify);
            report = oscard.getChannel;
            zuuluu = null;
            golfie = zuuluu == option;
            entity = undefined;
            tangon = undefined;
            if(golfie) { _fun00010_ip = 44; continue _fun00009 }
 38:
            tangon = option.parent_id;
 44:
            golfie = report.bind(oscard)(tangon);
            report = zuuluu == golfie;
            tangon = undefined;
            if(report) { _fun00010_ip = 68; continue _fun00009 }
 58:
            report = golfie.isMediaChannel;
            tangon = report.bind(golfie)();
 68:
            offset = zuuluu != tangon;
            if(!offset) { _fun00010_ip = 78; continue _fun00009 }
 75:
            offset = tangon;
 78:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 22;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.trackForumPostLinkCopied;
            tangon = {};
            tangon['postId'] = verify;
            yankee = argBaz;
            tangon['location'] = yankee;
            tangon = report.bind(oscard)(tangon);
            if(!offset) { _fun00010_ip = 175; continue _fun00009 }
 126:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 23;
            tangon = oscard[tangon];
            yankee = report.bind(entity)(tangon);
            oscard = yankee.trackWithMetadata;
            tangon = _closure1_slot8;
            report = tangon.MEDIA_POST_SHARE_PROMPT_CLICKED;
            tangon = {};
            tangon['media_post_id'] = verify;
            tangon = oscard.bind(yankee)(report, tangon);
 175:
            report = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 18;
            tangon = romeon[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.triggerHapticFeedback;
            yankee = _closure1_slot1;
            tangon = 19;
            tangon = romeon[tangon];
            tangon = yankee.bind(entity)(tangon);
            tangon = tangon.IMPACT_LIGHT;
            tangon = report.bind(oscard)(tangon);
            if(!(zuuluu != option)) { _fun00010_ip = 289; continue _fun00009 }
 232:
            oscard = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 24;
            zuuluu = yankee[zuuluu];
            report = oscard.bind(entity)(zuuluu);
            tangon = report.copy;
            zuuluu = 25;
            zuuluu = yankee[zuuluu];
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.getChannelLinkToCopy;
            zuuluu = zuuluu.bind(oscard)(option, golfie);
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00010_ip = 387; continue _fun00009;
 289:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 24;
            zuuluu = golfie[zuuluu];
            report = oscard.bind(entity)(zuuluu);
            tangon = report.copy;
            zuuluu = 25;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(entity)(zuuluu);
            golfie = option.getChannelPermalink;
            zuuluu = true;
            oscard = undefined;
            if(!(zuuluu === offset)) { _fun00010_ip = 372; continue _fun00009 }
 341:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 26;
            zuuluu = yankee[zuuluu];
            offset = offset.bind(entity)(zuuluu);
            zuuluu = offset.castChannelIdAsMessageId;
            oscard = zuuluu.bind(offset)(verify);
 372:
            zuuluu = argFoo;
            zuuluu = golfie.bind(option)(zuuluu, verify, oscard);
            zuuluu = tangon.bind(report)(zuuluu);
 387:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 27;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.presentLinkCopied;
            michal = michal.bind(zuuluu)();
            return entity;
        }
    };
    zuuluu['handleCopyLinkForumPost'] = michal;
    return entity;
})();