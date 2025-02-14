// app/modules/messages/native/renderer/transformMessageAttachments.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AttachmentType;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageAttachmentFlags;
    var _closure1_slot4 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/transformMessageAttachments.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: transformMessageAttachments
        mike = argFoo;
        tango = mike.attachments;
        zulu = mike.uploadAttachments;
        var _closure2_slot0 = zulu;
        zulu = mike.shouldInlineAttachmentMedia;
        var _closure2_slot1 = zulu;
        zulu = mike.gifAutoPlay;
        var _closure2_slot2 = zulu;
        zulu = mike.viewImageDescriptions;
        var _closure2_slot3 = zulu;
        zulu = mike.useReducedMotion;
        var _closure2_slot4 = zulu;
        zulu = mike.shouldObscureSpoiler;
        var _closure2_slot5 = zulu;
        zulu = mike.themedBackgroundColor;
        var _closure2_slot6 = zulu;
        zulu = mike.shouldObscureExplicitMedia;
        var _closure2_slot7 = zulu;
        mike = mike.colors;
        var _closure2_slot8 = mike;
        zulu = tango.filter;
        mike = function(argFoo) {
            _fun69363: for(var _fun69363_ip = 0; ; ) switch(_fun69363_ip) {
 0:
                zulu = argFoo;
                mike = zulu.flags;
                entity = null;
                entity = entity == mike;
                if(entity) { _fun69363_ip = 72; continue _fun69363 }
 17:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 2;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.hasFlag;
                zulu = zulu.flags;
                mike = _closure1_slot4;
                mike = mike.IS_THUMBNAIL;
                mike = tango.bind(report)(zulu, mike);
                entity = !mike;
 72:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.map;
        entity = function(argFoo, argBar) {
            _fun69364: for(var _fun69364_ip = 0; ; ) switch(_fun69364_ip) {
 0:
                golf = argFoo;
                report = argBar;
                target = golf.proxy_url;
                status = golf.url;
                yankee = golf.filename;
                sequence = golf.size;
                output = golf.width;
                control = golf.height;
                update = golf.description;
                echo = golf.duration_secs;
                result = golf.waveform;
                offset = golf.id;
                verify = golf.placeholder;
                options = golf.placeholder_version;
                entity = golf.flags;
                zulu = _closure1_slot0;
                romeo = _closure1_slot2;
                mike = 3;
                foxtrot = romeo[mike];
                oscar = undefined;
                backup = zulu.bind(oscar)(foxtrot);
                foxtrot = backup.isImageFile;
                sizing = foxtrot.bind(backup)(yankee);
                foxtrot = romeo[mike];
                backup = zulu.bind(oscar)(foxtrot);
                foxtrot = backup.isAudioFile;
                foxtrot = foxtrot.bind(backup)(yankee);
                mike = romeo[mike];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.isVideoFile;
                kilo = mike.bind(zulu)(yankee);
                vacuum = sizing;
                if(vacuum) { _fun69364_ip = 162; continue _fun69364 }
 159:
                vacuum = kilo;
 162:
                mike = _closure2_slot0;
                yankee = null;
                mike = yankee != mike;
                if(!mike) { _fun69364_ip = 191; continue _fun69364 }
 178:
                romeo = _closure2_slot0;
                romeo = romeo.length;
                mike = report < romeo;
 191:
                romeo = undefined;
                if(!mike) { _fun69364_ip = 204; continue _fun69364 }
 196:
                mike = _closure2_slot0;
                romeo = mike[report];
 204:
                report = _closure1_slot0;
                mike = _closure1_slot2;
                context = 2;
                mike = mike[context];
                source = report.bind(oscar)(mike);
                backup = source.hasFlag;
                mike = yankee != entity;
                record = 0;
                report = 0;
                if(!mike) { _fun69364_ip = 244; continue _fun69364 }
 241:
                report = entity;
 244:
                mike = _closure1_slot4;
                mike = mike.IS_ANIMATED;
                report = backup.bind(source)(report, mike);
                if(!sizing) { _fun69364_ip = 271; continue _fun69364 }
 263:
                if(!(yankee != output)) { _fun69364_ip = 271; continue _fun69364 }
 267:
                if(!(yankee == control)) { _fun69364_ip = 345; continue _fun69364 }
 271:
                mike = kilo;
                if(!mike) { _fun69364_ip = 291; continue _fun69364 }
 277:
                backup = _closure2_slot1;
                if(backup) { _fun69364_ip = 288; continue _fun69364 }
 284:
                backup = yankee != romeo;
 288:
                mike = backup;
 291:
                source = undefined;
                config = status;
                if(!mike) { _fun69364_ip = 396; continue _fun69364 }
 299:
                mike = status;
                if(!(yankee != target)) { _fun69364_ip = 316; continue _fun69364 }
 306:
                backup = '?format=webp';
                mike = target + backup;
 316:
                backup = status;
                if(!(yankee != target)) { _fun69364_ip = 337; continue _fun69364 }
 323:
                papa = '';
                backup = status;
                if(!(papa !== target)) { _fun69364_ip = 337; continue _fun69364 }
 334:
                backup = target;
 337:
                source = backup;
                config = mike;
                _fun69364_ip = 396; continue _fun69364;
 345:
                backup = _closure1_slot1;
                papa = _closure1_slot2;
                mike = 4;
                mike = papa[mike];
                papa = backup.bind(oscar)(mike);
                backup = papa.getImageSrc;
                mike = _closure2_slot2;
                sierra = !mike;
                quebec = papa;
                equality = target;
                whiskey = output;
                lima = control;
                config = quebec[backup](equality, whiskey, lima, sierra, status);
                source = undefined;
 396:
                backup = output;
                if(!(yankee != romeo)) { _fun69364_ip = 420; continue _fun69364 }
 403:
                mike = romeo.width;
                backup = output;
                if(!(mike > record)) { _fun69364_ip = 420; continue _fun69364 }
 415:
                backup = romeo.width;
 420:
                mike = control;
                if(!(yankee != romeo)) { _fun69364_ip = 444; continue _fun69364 }
 427:
                output = romeo.height;
                mike = control;
                if(!(output > record)) { _fun69364_ip = 444; continue _fun69364 }
 439:
                mike = romeo.height;
 444:
                control = _closure2_slot1;
                output = 0;
                if(!control) { _fun69364_ip = 470; continue _fun69364 }
 453:
                output = 0;
                if(!vacuum) { _fun69364_ip = 470; continue _fun69364 }
 458:
                control = yankee != backup;
                output = 0;
                if(!control) { _fun69364_ip = 470; continue _fun69364 }
 467:
                output = backup;
 470:
                control = _closure2_slot1;
                backup = 0;
                if(!control) { _fun69364_ip = 496; continue _fun69364 }
 479:
                backup = 0;
                if(!vacuum) { _fun69364_ip = 496; continue _fun69364 }
 484:
                control = yankee != mike;
                backup = 0;
                if(!control) { _fun69364_ip = 496; continue _fun69364 }
 493:
                backup = mike;
 496:
                control = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[context];
                control = control.bind(oscar)(mike);
                mike = control.hasFlag;
                context = yankee != entity;
                record = 0;
                if(!context) { _fun69364_ip = 531; continue _fun69364 }
 528:
                record = entity;
 531:
                entity = _closure1_slot4;
                entity = entity.IS_CLIP;
                entity = mike.bind(control)(record, entity);
                mike = undefined;
                if(!entity) { _fun69364_ip = 660; continue _fun69364 }
 552:
                entity = {};
                papa = _closure1_slot0;
                target = _closure1_slot2;
                control = 5;
                record = target[control];
                record = papa.bind(oscar)(record);
                context = record.intl;
                record = context.string;
                control = target[control];
                control = papa.bind(oscar)(control);
                control = control.t;
                control = control.gESDiY;
                control = record.bind(context)(control);
                entity['attachmentTagText'] = control;
                control = 'clip';
                entity['attachmentTagIconType'] = control;
                control = _closure2_slot8;
                record = control.clipTagBackgroundColor;
                entity['attachmentTagBackgroundColor'] = record;
                control = control.clipTagTextColor;
                entity['attachmentTagTextColor'] = control;
                mike = entity;
 660:
                entity = {};
                control = config;
                if(!(yankee != romeo)) { _fun69364_ip = 704; continue _fun69364 }
 669:
                record = romeo.localUri;
                control = config;
                if(!(yankee != record)) { _fun69364_ip = 704; continue _fun69364 }
 682:
                control = config;
                if(!vacuum) { _fun69364_ip = 704; continue _fun69364 }
 688:
                vacuum = _closure2_slot1;
                control = config;
                if(!vacuum) { _fun69364_ip = 704; continue _fun69364 }
 698:
                control = romeo.localUri;
 704:
                entity['url'] = control;
                entity['videoUrl'] = source;
                vacuum = _closure1_slot1;
                source = _closure1_slot2;
                control = 6;
                control = source[control];
                control = vacuum.bind(oscar)(control);
                control = control.bind(oscar)(golf);
                entity['filename'] = control;
                control = 7;
                control = source[control];
                vacuum = vacuum.bind(oscar)(control);
                control = vacuum.filesize;
                control = control.bind(vacuum)(sequence);
                entity['size'] = control;
                entity['description'] = update;
                sequence = _closure1_slot0;
                update = 5;
                control = source[update];
                control = sequence.bind(oscar)(control);
                config = control.intl;
                vacuum = config.string;
                control = source[update];
                control = sequence.bind(oscar)(control);
                control = control.t;
                control = control.jCV1T0;
                vacuum = vacuum.bind(config)(control);
                control = vacuum.toUpperCase;
                control = control.bind(vacuum)();
                entity['alt'] = control;
                control = source[update];
                control = sequence.bind(oscar)(control);
                vacuum = control.intl;
                control = vacuum.string;
                source = source[update];
                source = sequence.bind(oscar)(source);
                source = source.t;
                source = source.fSiQ3N;
                source = control.bind(vacuum)(source);
                entity['altTextHint'] = source;
                source = _closure2_slot3;
                entity['showDescription'] = source;
                entity['durationSecs'] = echo;
                entity['waveform'] = result;
                entity['width'] = output;
                entity['height'] = backup;
                output = _closure1_slot0;
                backup = _closure1_slot2;
                result = backup[update];
                result = output.bind(oscar)(result);
                echo = result.intl;
                result = echo.string;
                backup = backup[update];
                backup = output.bind(oscar)(backup);
                output = backup.t;
                if(kilo) { _fun69364_ip = 975; continue _fun69364 }
 962:
                backup = output.IPzNKC;
                backup = result.bind(echo)(backup);
                _fun69364_ip = 986; continue _fun69364;
 975:
                output = output.BEWw//;
                backup = result.bind(echo)(output);
 986:
                entity['hint'] = backup;
                output = _closure1_slot0;
                backup = _closure1_slot2;
                result = backup[update];
                result = output.bind(oscar)(result);
                echo = result.intl;
                result = echo.string;
                backup = backup[update];
                backup = output.bind(oscar)(backup);
                output = backup.t;
                if(kilo) { _fun69364_ip = 1048; continue _fun69364 }
 1035:
                backup = output.fKyfcX;
                backup = result.bind(echo)(backup);
                _fun69364_ip = 1059; continue _fun69364;
 1048:
                output = output./SCpvr;
                backup = result.bind(echo)(output);
 1059:
                entity['role'] = backup;
                backup = _closure1_slot3;
                if(sizing) { _fun69364_ip = 1101; continue _fun69364 }
 1071:
                if(kilo) { _fun69364_ip = 1093; continue _fun69364 }
 1074:
                if(foxtrot) { _fun69364_ip = 1085; continue _fun69364 }
 1077:
                foxtrot = backup.OTHER;
                _fun69364_ip = 1091; continue _fun69364;
 1085:
                foxtrot = backup.AUDIO;
 1091:
                _fun69364_ip = 1099; continue _fun69364;
 1093:
                foxtrot = backup.VIDEO;
 1099:
                _fun69364_ip = 1107; continue _fun69364;
 1101:
                foxtrot = backup.IMAGE;
 1107:
                entity['attachmentType'] = foxtrot;
                entity['id'] = offset;
                offset = _closure2_slot4;
                offset = !offset;
                entity['isAnimated'] = offset;
                foxtrot = yankee == romeo;
                offset = undefined;
                if(foxtrot) { _fun69364_ip = 1143; continue _fun69364 }
 1137:
                offset = romeo.uploaderId;
 1143:
                entity['uploaderId'] = offset;
                foxtrot = yankee == romeo;
                offset = undefined;
                if(foxtrot) { _fun69364_ip = 1163; continue _fun69364 }
 1157:
                offset = romeo.uploaderItemId;
 1163:
                entity['uploaderItemId'] = offset;
                offset = _closure2_slot6;
                yankee = yankee != offset;
                offset = undefined;
                if(!yankee) { _fun69364_ip = 1185; continue _fun69364 }
 1181:
                offset = _closure2_slot6;
 1185:
                entity['backgroundColor'] = offset;
                entity['placeholder'] = verify;
                entity['placeholderVersion'] = options;
                options = 1000;
                entity['mediaViewerBufferForPlaybackMs'] = options;
                entity['mediaViewerBufferForPlaybackAfterRebufferMs'] = options;
                options = 20000;
                entity['mediaViewerMinBufferMs'] = options;
                entity['mediaViewerMaxBufferMs'] = options;
                options = false;
                entity['mediaViewerEnableDecoderFallback'] = options;
                options = true;
                entity['mediaViewerEnableAsyncBufferQueueing'] = options;
                entity['srcIsAnimated'] = report;
                report = _closure1_slot0;
                options = _closure1_slot2;
                tango = 8;
                tango = options[tango];
                oscar = report.bind(oscar)(tango);
                report = oscar.getAttachmentObscurityProps;
                tango = _closure2_slot5;
                zulu = _closure2_slot7;
                whiskey = report.bind(oscar)(golf, tango, zulu);
                equality = entity;
                zulu = copyDataProperties(equality, whiskey);
                equality = entity;
                whiskey = mike;
                mike = copyDataProperties(equality, whiskey);
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();