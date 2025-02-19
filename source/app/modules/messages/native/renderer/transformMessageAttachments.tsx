// app/modules/messages/native/renderer/transformMessageAttachments.tsx
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
    tangon = tangon.AttachmentType;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageAttachmentFlags;
    var _closure1_slot4 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/transformMessageAttachments.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: transformMessageAttachments
        michal = argFoo;
        tangon = michal.attachments;
        zuuluu = michal.uploadAttachments;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.shouldInlineAttachmentMedia;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.gifAutoPlay;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.viewImageDescriptions;
        var _closure2_slot3 = zuuluu;
        zuuluu = michal.useReducedMotion;
        var _closure2_slot4 = zuuluu;
        zuuluu = michal.shouldObscureSpoiler;
        var _closure2_slot5 = zuuluu;
        zuuluu = michal.themedBackgroundColor;
        var _closure2_slot6 = zuuluu;
        zuuluu = michal.shouldObscureExplicitMedia;
        var _closure2_slot7 = zuuluu;
        zuuluu = michal.shouldAgeVerify;
        var _closure2_slot8 = zuuluu;
        michal = michal.colors;
        var _closure2_slot9 = michal;
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                michal = zuuluu.flags;
                entity = null;
                entity = entity == michal;
                if(entity) { _fun00002_ip = 72; continue _fun00001 }
 17:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 2;
                report = report[tangon];
                tangon = undefined;
                report = oscard.bind(tangon)(report);
                tangon = report.hasFlag;
                zuuluu = zuuluu.flags;
                michal = _closure1_slot4;
                michal = michal.IS_THUMBNAIL;
                michal = tangon.bind(report)(zuuluu, michal);
                entity = !michal;
 72:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        entity = function(argFoo, argBar) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                golfie = argFoo;
                tangon = argBar;
                target = golfie.proxy_url;
                status = golfie.url;
                yankee = golfie.filename;
                sequen = golfie.size;
                output = golfie.width;
                ctrled = golfie.height;
                update = golfie.description;
                echoed = golfie.duration_secs;
                result = golfie.waveform;
                offset = golfie.id;
                verify = golfie.placeholder;
                option = golfie.placeholder_version;
                entity = golfie.flags;
                oscard = _closure1_slot0;
                romeon = _closure1_slot2;
                michal = 3;
                foxtra = romeon[michal];
                report = undefined;
                backup = oscard.bind(report)(foxtra);
                foxtra = backup.isImageFile;
                sizing = foxtra.bind(backup)(yankee);
                foxtra = romeon[michal];
                backup = oscard.bind(report)(foxtra);
                foxtra = backup.isAudioFile;
                foxtra = foxtra.bind(backup)(yankee);
                michal = romeon[michal];
                oscard = oscard.bind(report)(michal);
                michal = oscard.isVideoFile;
                kiloes = michal.bind(oscard)(yankee);
                vacuum = sizing;
                if(vacuum) { _fun00004_ip = 162; continue _fun00003 }
 159:
                vacuum = kiloes;
 162:
                michal = _closure2_slot0;
                yankee = null;
                michal = yankee != michal;
                if(!michal) { _fun00004_ip = 191; continue _fun00003 }
 178:
                romeon = _closure2_slot0;
                romeon = romeon.length;
                michal = tangon < romeon;
 191:
                romeon = undefined;
                if(!michal) { _fun00004_ip = 204; continue _fun00003 }
 196:
                michal = _closure2_slot0;
                romeon = michal[tangon];
 204:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                cntext = 2;
                michal = michal[cntext];
                source = tangon.bind(report)(michal);
                backup = source.hasFlag;
                michal = yankee != entity;
                record = 0;
                tangon = 0;
                if(!michal) { _fun00004_ip = 244; continue _fun00003 }
 241:
                tangon = entity;
 244:
                michal = _closure1_slot4;
                michal = michal.IS_ANIMATED;
                tangon = backup.bind(source)(tangon, michal);
                if(!sizing) { _fun00004_ip = 271; continue _fun00003 }
 263:
                if(!(yankee != output)) { _fun00004_ip = 271; continue _fun00003 }
 267:
                if(!(yankee == ctrled)) { _fun00004_ip = 345; continue _fun00003 }
 271:
                michal = kiloes;
                if(!michal) { _fun00004_ip = 291; continue _fun00003 }
 277:
                backup = _closure2_slot1;
                if(backup) { _fun00004_ip = 288; continue _fun00003 }
 284:
                backup = yankee != romeon;
 288:
                michal = backup;
 291:
                source = undefined;
                config = status;
                if(!michal) { _fun00004_ip = 396; continue _fun00003 }
 299:
                michal = status;
                if(!(yankee != target)) { _fun00004_ip = 316; continue _fun00003 }
 306:
                backup = '?format=webp';
                michal = target + backup;
 316:
                backup = status;
                if(!(yankee != target)) { _fun00004_ip = 337; continue _fun00003 }
 323:
                papara = '';
                backup = status;
                if(!(papara !== target)) { _fun00004_ip = 337; continue _fun00003 }
 334:
                backup = target;
 337:
                source = backup;
                config = michal;
                _fun00004_ip = 396; continue _fun00003;
 345:
                backup = _closure1_slot1;
                papara = _closure1_slot2;
                michal = 4;
                michal = papara[michal];
                papara = backup.bind(report)(michal);
                backup = papara.getImageSrc;
                michal = _closure2_slot2;
                sierra = !michal;
                quebec = papara;
                equals = target;
                whisks = output;
                limora = ctrled;
                config = quebec[backup](equals, whisks, limora, sierra, status);
                source = undefined;
 396:
                backup = output;
                if(!(yankee != romeon)) { _fun00004_ip = 420; continue _fun00003 }
 403:
                michal = romeon.width;
                backup = output;
                if(!(michal > record)) { _fun00004_ip = 420; continue _fun00003 }
 415:
                backup = romeon.width;
 420:
                michal = ctrled;
                if(!(yankee != romeon)) { _fun00004_ip = 444; continue _fun00003 }
 427:
                output = romeon.height;
                michal = ctrled;
                if(!(output > record)) { _fun00004_ip = 444; continue _fun00003 }
 439:
                michal = romeon.height;
 444:
                ctrled = _closure2_slot1;
                output = 0;
                if(!ctrled) { _fun00004_ip = 470; continue _fun00003 }
 453:
                output = 0;
                if(!vacuum) { _fun00004_ip = 470; continue _fun00003 }
 458:
                ctrled = yankee != backup;
                output = 0;
                if(!ctrled) { _fun00004_ip = 470; continue _fun00003 }
 467:
                output = backup;
 470:
                ctrled = _closure2_slot1;
                backup = 0;
                if(!ctrled) { _fun00004_ip = 496; continue _fun00003 }
 479:
                backup = 0;
                if(!vacuum) { _fun00004_ip = 496; continue _fun00003 }
 484:
                ctrled = yankee != michal;
                backup = 0;
                if(!ctrled) { _fun00004_ip = 496; continue _fun00003 }
 493:
                backup = michal;
 496:
                ctrled = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[cntext];
                ctrled = ctrled.bind(report)(michal);
                michal = ctrled.hasFlag;
                cntext = yankee != entity;
                record = 0;
                if(!cntext) { _fun00004_ip = 531; continue _fun00003 }
 528:
                record = entity;
 531:
                entity = _closure1_slot4;
                entity = entity.IS_CLIP;
                entity = michal.bind(ctrled)(record, entity);
                michal = undefined;
                if(!entity) { _fun00004_ip = 662; continue _fun00003 }
 552:
                entity = {};
                papara = _closure1_slot0;
                target = _closure1_slot2;
                ctrled = 5;
                record = target[ctrled];
                record = papara.bind(report)(record);
                cntext = record.intl;
                record = cntext.string;
                ctrled = target[ctrled];
                ctrled = papara.bind(report)(ctrled);
                ctrled = ctrled.t;
                ctrled = ctrled.gESDiY;
                ctrled = record.bind(cntext)(ctrled);
                entity['attachmentTagText'] = ctrled;
                ctrled = 'clip';
                entity['attachmentTagIconType'] = ctrled;
                ctrled = _closure2_slot9;
                record = ctrled.clipTagBackgroundColor;
                entity['attachmentTagBackgroundColor'] = record;
                ctrled = ctrled.clipTagTextColor;
                entity['attachmentTagTextColor'] = ctrled;
                michal = entity;
 662:
                entity = {};
                ctrled = config;
                if(!(yankee != romeon)) { _fun00004_ip = 706; continue _fun00003 }
 671:
                record = romeon.localUri;
                ctrled = config;
                if(!(yankee != record)) { _fun00004_ip = 706; continue _fun00003 }
 684:
                ctrled = config;
                if(!vacuum) { _fun00004_ip = 706; continue _fun00003 }
 690:
                vacuum = _closure2_slot1;
                ctrled = config;
                if(!vacuum) { _fun00004_ip = 706; continue _fun00003 }
 700:
                ctrled = romeon.localUri;
 706:
                entity['url'] = ctrled;
                entity['videoUrl'] = source;
                vacuum = _closure1_slot1;
                source = _closure1_slot2;
                ctrled = 6;
                ctrled = source[ctrled];
                ctrled = vacuum.bind(report)(ctrled);
                ctrled = ctrled.bind(report)(golfie);
                entity['filename'] = ctrled;
                ctrled = 7;
                ctrled = source[ctrled];
                vacuum = vacuum.bind(report)(ctrled);
                ctrled = vacuum.filesize;
                ctrled = ctrled.bind(vacuum)(sequen);
                entity['size'] = ctrled;
                entity['description'] = update;
                sequen = _closure1_slot0;
                update = 5;
                ctrled = source[update];
                ctrled = sequen.bind(report)(ctrled);
                config = ctrled.intl;
                vacuum = config.string;
                ctrled = source[update];
                ctrled = sequen.bind(report)(ctrled);
                ctrled = ctrled.t;
                ctrled = ctrled.jCV1T0;
                vacuum = vacuum.bind(config)(ctrled);
                ctrled = vacuum.toUpperCase;
                ctrled = ctrled.bind(vacuum)();
                entity['alt'] = ctrled;
                ctrled = source[update];
                ctrled = sequen.bind(report)(ctrled);
                vacuum = ctrled.intl;
                ctrled = vacuum.string;
                source = source[update];
                source = sequen.bind(report)(source);
                source = source.t;
                source = source.fSiQ3N;
                source = ctrled.bind(vacuum)(source);
                entity['altTextHint'] = source;
                source = _closure2_slot3;
                entity['showDescription'] = source;
                entity['durationSecs'] = echoed;
                entity['waveform'] = result;
                entity['width'] = output;
                entity['height'] = backup;
                output = _closure1_slot0;
                backup = _closure1_slot2;
                result = backup[update];
                result = output.bind(report)(result);
                echoed = result.intl;
                result = echoed.string;
                backup = backup[update];
                backup = output.bind(report)(backup);
                output = backup.t;
                if(kiloes) { _fun00004_ip = 981; continue _fun00003 }
 968:
                backup = output.IPzNKC;
                backup = result.bind(echoed)(backup);
                _fun00004_ip = 992; continue _fun00003;
 981:
                output = output.BEWw//;
                backup = result.bind(echoed)(output);
 992:
                entity['hint'] = backup;
                output = _closure1_slot0;
                backup = _closure1_slot2;
                result = backup[update];
                result = output.bind(report)(result);
                echoed = result.intl;
                result = echoed.string;
                backup = backup[update];
                backup = output.bind(report)(backup);
                output = backup.t;
                if(kiloes) { _fun00004_ip = 1054; continue _fun00003 }
 1041:
                backup = output.fKyfcX;
                backup = result.bind(echoed)(backup);
                _fun00004_ip = 1065; continue _fun00003;
 1054:
                output = output./SCpvr;
                backup = result.bind(echoed)(output);
 1065:
                entity['role'] = backup;
                backup = _closure1_slot3;
                if(sizing) { _fun00004_ip = 1107; continue _fun00003 }
 1077:
                if(kiloes) { _fun00004_ip = 1099; continue _fun00003 }
 1080:
                if(foxtra) { _fun00004_ip = 1091; continue _fun00003 }
 1083:
                foxtra = backup.OTHER;
                _fun00004_ip = 1097; continue _fun00003;
 1091:
                foxtra = backup.AUDIO;
 1097:
                _fun00004_ip = 1105; continue _fun00003;
 1099:
                foxtra = backup.VIDEO;
 1105:
                _fun00004_ip = 1113; continue _fun00003;
 1107:
                foxtra = backup.IMAGE;
 1113:
                entity['attachmentType'] = foxtra;
                entity['id'] = offset;
                offset = _closure2_slot4;
                offset = !offset;
                entity['isAnimated'] = offset;
                foxtra = yankee == romeon;
                offset = undefined;
                if(foxtra) { _fun00004_ip = 1149; continue _fun00003 }
 1143:
                offset = romeon.uploaderId;
 1149:
                entity['uploaderId'] = offset;
                foxtra = yankee == romeon;
                offset = undefined;
                if(foxtra) { _fun00004_ip = 1169; continue _fun00003 }
 1163:
                offset = romeon.uploaderItemId;
 1169:
                entity['uploaderItemId'] = offset;
                offset = _closure2_slot6;
                yankee = yankee != offset;
                offset = undefined;
                if(!yankee) { _fun00004_ip = 1191; continue _fun00003 }
 1187:
                offset = _closure2_slot6;
 1191:
                entity['backgroundColor'] = offset;
                entity['placeholder'] = verify;
                entity['placeholderVersion'] = option;
                option = 1000;
                entity['mediaViewerBufferForPlaybackMs'] = option;
                entity['mediaViewerBufferForPlaybackAfterRebufferMs'] = option;
                option = 20000;
                entity['mediaViewerMinBufferMs'] = option;
                entity['mediaViewerMaxBufferMs'] = option;
                option = false;
                entity['mediaViewerEnableDecoderFallback'] = option;
                option = true;
                entity['mediaViewerEnableAsyncBufferQueueing'] = option;
                entity['srcIsAnimated'] = tangon;
                tangon = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 8;
                zuuluu = option[zuuluu];
                report = tangon.bind(report)(zuuluu);
                tangon = report.getAttachmentObscurityProps;
                zuuluu = {};
                zuuluu['attachment'] = golfie;
                golfie = _closure2_slot5;
                zuuluu['shouldObscureSpoiler'] = golfie;
                golfie = _closure2_slot7;
                zuuluu['shouldObscureExplicitMedia'] = golfie;
                oscard = _closure2_slot8;
                zuuluu['shouldAgeVerify'] = oscard;
                whisks = tangon.bind(report)(zuuluu);
                equals = entity;
                zuuluu = copyDataProperties(equals, whisks);
                equals = entity;
                whisks = michal;
                michal = copyDataProperties(equals, whisks);
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();