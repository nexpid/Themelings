// app/modules/remixing/RemixingUtils.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function() { // Original name: _sendLocalFile
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar, argBaz, argCorge, argGrault) {
            entity = function* (argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    tango = argBar;
                    yankee = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 390; continue _fun00001 }
 19:
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 10;
                    mike = zulu[mike];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(mike);
                    mike = oscar.getImageDimensionsIfMissing;
                    output = oscar;
                    sizing = report;
                    kilo = undefined;
                    backup = undefined;
                    foxtrot = tango;
                    mike = output[mike](sizing, kilo, backup, foxtrot, romeo);
                    SaveGenerator(address=71);
 69:
                    return mike;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00002_ip = 387; continue _fun00001 }
 80:
                    offset = {};
                    offset['uri'] = report;
                    offset['originalUri'] = report;
                    report = argBaz;
                    offset['mimeType'] = report;
                    report = mike.width;
                    offset['width'] = report;
                    report = mike.height;
                    offset['height'] = report;
                    offset['filename'] = tango;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 11;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    tango = tango.UploadPlatform;
                    tango = tango.REACT_NATIVE;
                    offset['platform'] = tango;
                    tango = true;
                    offset['isRemix'] = tango;
                    report = _closure1_slot9;
                    tango = report.getChannel;
                    verify = tango.bind(report)(yankee);
                    report = _closure1_slot8;
                    tango = report.getToken;
                    report = tango.bind(report)();
                    tango = null;
                    oscar = tango != report;
                    golf = '';
                    if(!oscar) { _fun00002_ip = 211; continue _fun00001 }
 208:
                    golf = report;
 211:
                    oscar = _closure1_slot0;
                    romeo = _closure1_slot2;
                    report = 12;
                    report = romeo[report];
                    report = oscar.bind(zulu)(report);
                    report = report.CloudUpload;
                    oscar = report.prototype;
                    oscar = Object.create(oscar, {constructor: {value: report}});
                    output = oscar;
                    sizing = offset;
                    kilo = yankee;
                    report = new output[report](sizing, kilo, backup);
                    offset = report instanceof Object ? report : oscar;
                    if(!(tango != verify)) { _fun00002_ip = 384; continue _fun00001 }
 267:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 13;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.uploadLocalFiles;
                    tango = {};
                    tango['channel'] = verify;
                    verify = new Array(1);
                    verify[0] = offset;
                    tango['items'] = verify;
                    tango['token'] = golf;
                    golf = {};
                    verify = _closure1_slot16;
                    options = argGrault;
                    options = verify.bind(zulu)(options);
                    golf['content'] = options;
                    options = false;
                    golf['tts'] = options;
                    options = new Array(0);
                    golf['invalidEmojis'] = options;
                    options = new Array(0);
                    golf['validNonShortcutEmojis'] = options;
                    tango['parsedMessage'] = golf;
                    golf = function() { // Original name: maxSizeCallback
                        entity = undefined;
                        return entity;
                    };
                    tango['maxSizeCallback'] = golf;
                    tango = report.bind(oscar)(tango);
 384:
                    return zulu;
 387:
                    return mike;
 390:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    tango = function(argFoo, argBar) { // Original name: getRemixSourceFromAttachment
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            var _closure2_slot0 = tango;
            golf = null;
            if(!(golf != tango)) { _fun00004_ip = 321; continue _fun00003 }
 21:
            mike = tango.width;
            if(!(golf != mike)) { _fun00004_ip = 321; continue _fun00003 }
 33:
            mike = tango.width;
            report = 0;
            if(!(!(mike <= report))) { _fun00004_ip = 321; continue _fun00003 }
 47:
            mike = tango.height;
            if(!(golf != mike)) { _fun00004_ip = 321; continue _fun00003 }
 59:
            mike = tango.height;
            if(!(!(mike <= report))) { _fun00004_ip = 321; continue _fun00003 }
 71:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            report = 14;
            oscar = oscar[report];
            report = undefined;
            offset = options.bind(report)(oscar);
            verify = offset.urlMatchesFileExtension;
            options = tango.url;
            oscar = _closure1_slot14;
            oscar = verify.bind(offset)(options, oscar);
            if(oscar) { _fun00004_ip = 321; continue _fun00003 }
 123:
            verify = _closure1_slot9;
            options = verify.getChannel;
            oscar = zulu.channel_id;
            oscar = options.bind(verify)(oscar);
            options = tango.proxy_url;
            if(!(golf != options)) { _fun00004_ip = 166; continue _fun00003 }
 152:
            verify = tango.proxy_url;
            options = '';
            if(!(options === verify)) { _fun00004_ip = 173; continue _fun00003 }
 166:
            yankee = tango.url;
            _fun00004_ip = 179; continue _fun00003;
 173:
            yankee = tango.proxy_url;
 179:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 15;
            mike = verify[mike];
            offset = options.bind(report)(mike);
            verify = offset.getMobileOptimizedSrc;
            options = tango.width;
            mike = tango.height;
            options = verify.bind(offset)(yankee, options, mike);
            verify = zulu.attachments;
            mike = verify.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(verify)(entity);
            entity = {};
            entity['uri'] = options;
            options = zulu.channel_id;
            entity['channelId'] = options;
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun00004_ip = 276; continue _fun00003 }
 271:
            report = oscar.guild_id;
 276:
            entity['guildId'] = report;
            report = tango.width;
            entity['width'] = report;
            tango = tango.height;
            entity['height'] = tango;
            tango = false;
            entity['local'] = tango;
            zulu = zulu.id;
            entity['messageId'] = zulu;
            entity['mediaIndex'] = mike;
            return entity;
 321:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.NativeModules;
    var _closure1_slot6 = verify;
    report = report.Image;
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.REMIX_VIEW_MODAL_KEY;
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AnalyticEvents;
    var _closure1_slot12 = options;
    options = report.AnalyticsObjects;
    var _closure1_slot13 = options;
    options = report.GIF_RE_IOS;
    var _closure1_slot14 = options;
    report = report.NOOP;
    var _closure1_slot15 = report;
    report = function(argFoo) { // Original name: composeRemixMessageContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            entity = '';
            if(mike) { _fun00006_ip = 60; continue _fun00005 }
 16:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 9;
            mike = zulu[mike];
            zulu = undefined;
            mike = report.bind(zulu)(mike);
            tango = mike.bind(zulu)(tango);
            zulu = tango.join;
            mike = ' ';
            entity = zulu.bind(tango)(mike);
 60:
            return entity;
        }
    };
    var _closure1_slot16 = report;
    report = 27;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/remixing/RemixingUtils.native.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: sendLocalFile
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendLocalFile'] = report;
    report = function(argFoo) { // Original name: useDominantColorsFromImage
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot5;
        tango = report.useState;
        zulu = new Array(0);
        golf = tango.bind(report)(zulu);
        tango = _closure1_slot3;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(golf, entity);
        entity = 0;
        entity = tango[entity];
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot1 = zulu;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun00008_ip = 97; continue _fun00007 }
 13:
                mike = _closure1_slot6;
                tango = mike.ImageManager;
                zulu = tango.getDominantColors;
                oscar = _closure1_slot7;
                report = oscar.resolveAssetSource;
                mike = {};
                golf = _closure2_slot0;
                mike['uri'] = golf;
                mike = report.bind(oscar)(mike);
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    tango = argFoo;
                    zulu = _closure2_slot1;
                    mike = tango.map;
                    entity = function(argFoo) {
                        mike = argFoo;
                        entity = 0;
                        foxtrot = mike[entity];
                        entity = 1;
                        yankee = mike[entity];
                        entity = 2;
                        verify = mike[entity];
                        entity = global;
                        entity = entity.HermesInternal;
                        tango = entity.concat;
                        backup = 'rgba(';
                        mike = ', ';
                        options = ', 1)';
                        romeo = mike;
                        offset = mike;
                        entity = backup[tango](foxtrot, romeo, yankee, offset, verify, options, golf);
                        return entity;
                    };
                    mike = mike.bind(tango)(entity);
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = _closure1_slot15;
                entity = mike.bind(zulu)(entity);
 97:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useDominantColorsFromImage'] = report;
    report = function(argFoo, argBar) { // Original name: getRemixSourceFromSelectedMedia
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argBar;
            mike = null;
            if(!(mike != entity)) { _fun00010_ip = 37; continue _fun00009 }
 9:
            zulu = entity.mediaType;
            mike = 'image';
            if(!(mike === zulu)) { _fun00010_ip = 37; continue _fun00009 }
 23:
            zulu = entity.sourceType;
            mike = 'attachment';
            if(!(mike !== zulu)) { _fun00010_ip = 41; continue _fun00009 }
 37:
            mike = undefined;
            return mike;
 41:
            tango = _closure1_slot18;
            zulu = entity.source;
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        }
    };
    zulu['getRemixSourceFromSelectedMedia'] = report;
    zulu['getRemixSourceFromAttachment'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: remixImage
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argBaz;
            report = _closure1_slot18;
            entity = undefined;
            tango = argFoo;
            mike = argBar;
            golf = report.bind(entity)(tango, mike);
            var _closure2_slot0 = golf;
            mike = null;
            if(!(mike != golf)) { _fun00012_ip = 324; continue _fun00011 }
 39:
            tango = _closure1_slot10;
            report = tango.initializeIfNeeded;
            report = report.bind(tango)();
            report = tango.startRemixing;
            report = report.bind(tango)();
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            report = 16;
            report = offset[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.enterRemixing;
            golf = report.bind(oscar)(golf);
            oscar = golf.then;
            report = function() {
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 17;
                tango = zulu[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.pushLazy;
                options = _closure1_slot0;
                tango = 19;
                tango = zulu[tango];
                options = options.bind(entity)(tango);
                tango = 18;
                tango = zulu[tango];
                zulu = zulu.paths;
                tango = options.bind(entity)(tango, zulu);
                zulu = {};
                options = _closure2_slot0;
                zulu['source'] = options;
                options = function() { // Original name: onEnter
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 20;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.hideActionSheet;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['onEnter'] = options;
                golf = function() { // Original name: onExit
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 17;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.pop;
                    entity = entity.bind(mike)();
                    return entity;
                };
                zulu['onExit'] = golf;
                mike = _closure1_slot11;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            oscar = oscar.bind(golf)(report);
            report = oscar.catch;
            zulu = function() {
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 21;
                mike = options[entity];
                entity = undefined;
                tango = golf.bind(entity)(mike);
                zulu = tango.presentError;
                mike = 22;
                report = options[mike];
                report = golf.bind(entity)(report);
                oscar = report.intl;
                report = oscar.string;
                mike = options[mike];
                mike = golf.bind(entity)(mike);
                mike = mike.t;
                mike = mike.HxKEh4;
                mike = report.bind(oscar)(mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            zulu = tango.getSessionId;
            oscar = zulu.bind(tango)();
            mike = mike == verify;
            zulu = undefined;
            if(mike) { _fun00012_ip = 153; continue _fun00011 }
 148:
            zulu = verify.location;
 153:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            yankee = 23;
            mike = mike[yankee];
            mike = tango.bind(entity)(mike);
            mike = mike.MESSAGE_REMIX_TAG;
            if(!(mike !== zulu)) { _fun00012_ip = 210; continue _fun00011 }
 183:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[yankee];
            mike = tango.bind(entity)(mike);
            mike = mike.MESSAGE_REMIX_BUTTON;
            if(!(mike === zulu)) { _fun00012_ip = 324; continue _fun00011 }
 210:
            offset = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 24;
            mike = golf[mike];
            report = offset.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot12;
            zulu = mike.REMIXING_BADGE_PRESSED;
            mike = {};
            mike['remixing_session_id'] = oscar;
            oscar = {};
            romeo = verify.section;
            oscar['section'] = romeo;
            verify = verify.location;
            golf = golf[yankee];
            golf = offset.bind(entity)(golf);
            golf = golf.MESSAGE_REMIX_TAG;
            if(!(verify !== golf)) { _fun00012_ip = 299; continue _fun00011 }
 287:
            golf = _closure1_slot13;
            golf = golf.MESSAGE_REMIX_BUTTON;
            _fun00012_ip = 309; continue _fun00011;
 299:
            options = _closure1_slot13;
            golf = options.BADGE;
 309:
            oscar['object'] = golf;
            mike['location'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 324:
            return entity;
        }
    };
    zulu['remixImage'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: showRemixActionSheet
        report = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 20;
        tango = mike[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        tango = _closure1_slot0;
        zulu = 19;
        zulu = mike[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = 25;
        zulu = mike[zulu];
        mike = mike.paths;
        tango = tango.bind(entity)(zulu, mike);
        zulu = {};
        mike = argFoo;
        zulu['message'] = mike;
        mike = argBar;
        zulu['analyticsLocation'] = mike;
        mike = argBaz;
        zulu['onClose'] = mike;
        mike = 'REMIXING_ENTRYPOINT_ACTION_SHEET';
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    zulu['showRemixActionSheet'] = tango;
    mike = function(argFoo) { // Original name: getRemixMentions
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golf = argFoo;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 9;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = null;
            tango = entity == golf;
            entity = undefined;
            if(tango) { _fun00014_ip = 64; continue _fun00013 }
 39:
            oscar = golf.reduce;
            report = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    report = zulu.MentionElementTypes;
                    tango = report.has;
                    zulu = mike.type;
                    zulu = tango.bind(report)(zulu);
                    if(!zulu) { _fun00016_ip = 71; continue _fun00015 }
 55:
                    zulu = entity.push;
                    mike = mike.mention;
                    mike = zulu.bind(entity)(mike);
 71:
                    return entity;
                }
            };
            tango = new Array(0);
            entity = oscar.bind(golf)(report, tango);
 64:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getRemixMentions'] = mike;
    return entity;
})();