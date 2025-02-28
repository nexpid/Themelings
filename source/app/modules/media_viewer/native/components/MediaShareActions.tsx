// app/modules/media_viewer/native/components/MediaShareActions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: useMediaShareActions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = michal.source;
            var _closure2_slot0 = tangon;
            backup = michal.disableDownload;
            var _closure2_slot1 = backup;
            oscard = michal.shareable;
            var _closure2_slot2 = oscard;
            output = undefined;
            var _closure2_slot13 = output;
            offset = tangon.channelId;
            var _closure2_slot3 = offset;
            zuuluu = tangon.messageId;
            var _closure2_slot4 = zuuluu;
            kiloes = _closure1_slot0;
            result = _closure1_slot2;
            report = 8;
            report = result[report];
            verify = kiloes.bind(output)(report);
            option = verify.useStateFromStores;
            report = _closure1_slot6;
            golfie = new Array(3);
            golfie[0] = report;
            report = _closure1_slot4;
            golfie[1] = report;
            report = _closure1_slot7;
            golfie[2] = report;
            report = new Array(2);
            report[0] = offset;
            report[1] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure1_slot6;
                    report = oscard.getMessage;
                    tangon = _closure2_slot3;
                    entity = _closure2_slot4;
                    entity = report.bind(oscard)(tangon, entity);
                    tangon = null;
                    if(!(tangon == entity)) { _fun00004_ip = 55; continue _fun00003 }
 36:
                    golfie = _closure1_slot7;
                    oscard = golfie.getMessage;
                    report = _closure2_slot4;
                    entity = oscard.bind(golfie)(report);
 55:
                    if(!(tangon == entity)) { _fun00004_ip = 78; continue _fun00003 }
 59:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getMessage;
                    michal = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(michal);
 78:
                    return entity;
                }
            };
            sizing = option.bind(verify)(golfie, zuuluu, report);
            var _closure2_slot5 = sizing;
            zuuluu = 9;
            zuuluu = result[zuuluu];
            report = kiloes.bind(output)(zuuluu);
            zuuluu = report.shouldAgeVerifyForExplicitMedia;
            option = zuuluu.bind(report)();
            zuuluu = 10;
            zuuluu = result[zuuluu];
            golfie = kiloes.bind(output)(zuuluu);
            report = golfie.getAttachmentObscurityProps;
            zuuluu = {'attachment': null, 'shouldObscureSpoiler': true, 'shouldObscureExplicitMedia': false};
            zuuluu['attachment'] = tangon;
            source = false;
            zuuluu['shouldAgeVerify'] = option;
            zuuluu = report.bind(golfie)(zuuluu);
            golfie = zuuluu.obscure;
            var _closure2_slot6 = golfie;
            verify = _closure1_slot3;
            option = verify.useCallback;
            report = new Array(1);
            report[0] = tangon;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.hideActionSheet;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure2_slot0;
                    tangon = tangon.videoURI;
                    report = null;
                    if(!(report == tangon)) { _fun00006_ip = 170; continue _fun00005 }
 54:
                    tangon = _closure2_slot0;
                    tangon = tangon.sourceURI;
                    if(!(report != tangon)) { _fun00006_ip = 222; continue _fun00005 }
 71:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 13;
                    tangon = option[tangon];
                    offset = golfie.bind(entity)(tangon);
                    verify = offset.urlMatchesFileExtension;
                    report = _closure2_slot0;
                    oscard = report.sourceURI;
                    tangon = _closure1_slot8;
                    tangon = verify.bind(offset)(oscard, tangon);
                    oscard = 12;
                    oscard = option[oscard];
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.downloadMediaAsset;
                    report = report.sourceURI;
                    option = _closure1_slot9;
                    if(tangon) { _fun00006_ip = 156; continue _fun00005 }
 148:
                    tangon = option.IMAGE;
                    _fun00006_ip = 162; continue _fun00005;
 156:
                    tangon = option.GIF;
 162:
                    tangon = oscard.bind(golfie)(report, tangon);
                    _fun00006_ip = 222; continue _fun00005;
 170:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 12;
                    tangon = oscard[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.downloadMediaAsset;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.videoURI;
                    michal = _closure1_slot9;
                    michal = michal.VIDEO;
                    michal = tangon.bind(report)(zuuluu, michal);
 222:
                    return entity;
                }
            };
            verify = option.bind(verify)(zuuluu, report);
            var _closure2_slot7 = verify;
            offset = _closure1_slot3;
            option = offset.useCallback;
            report = new Array(1);
            report[0] = tangon;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 11;
                michal = tangon[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                michal = report.hideActionSheet;
                michal = michal.bind(report)();
                michal = 14;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = _closure2_slot0;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = option.bind(offset)(zuuluu, report);
            var _closure2_slot8 = option;
            yankee = _closure1_slot3;
            offset = yankee.useCallback;
            report = new Array(1);
            report[0] = tangon;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.hideActionSheet;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.sourceURI;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00008_ip = 116; continue _fun00007 }
 54:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.handleClick;
                    michal = {};
                    report = _closure2_slot0;
                    report = report.sourceURI;
                    michal['href'] = report;
                    report = function() { // Original name: onConfirm
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 16;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.openURL;
                        michal = _closure2_slot0;
                        michal = michal.sourceURI;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal['onConfirm'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 116:
                    return entity;
                }
            };
            yankee = offset.bind(yankee)(zuuluu, report);
            var _closure2_slot9 = yankee;
            romeon = _closure1_slot3;
            offset = romeon.useCallback;
            report = new Array(2);
            report[0] = sizing;
            report[1] = tangon;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 11;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.hideActionSheet;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure2_slot5;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00010_ip = 247; continue _fun00009 }
 51:
                    tangon = _closure2_slot0;
                    oscard = tangon.accessoryType;
                    tangon = 'embed';
                    if(!(tangon === oscard)) { _fun00010_ip = 157; continue _fun00009 }
 69:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 17;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.openForwardModal;
                    tangon = {};
                    option = _closure2_slot5;
                    tangon['message'] = option;
                    option = 'media-viewer';
                    tangon['source'] = option;
                    tangon['initialSelectedDestinations'] = entity;
                    option = {};
                    verify = _closure2_slot0;
                    offset = verify.mediaIndex;
                    verify = new Array(1);
                    verify[0] = offset;
                    option['onlyEmbedIndices'] = verify;
                    tangon['forwardOptions'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    _fun00010_ip = 247; continue _fun00009;
 157:
                    tangon = _closure2_slot0;
                    golfie = tangon.attachmentId;
                    if(!(zuuluu != golfie)) { _fun00010_ip = 247; continue _fun00009 }
 171:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 17;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openForwardModal;
                    michal = {};
                    report = _closure2_slot5;
                    michal['message'] = report;
                    report = 'media-viewer';
                    michal['source'] = report;
                    michal['initialSelectedDestinations'] = entity;
                    report = {};
                    oscard = new Array(1);
                    oscard[0] = golfie;
                    report['onlyAttachmentIds'] = oscard;
                    michal['forwardOptions'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 247:
                    return entity;
                }
            };
            foxtra = offset.bind(romeon)(zuuluu, report);
            var _closure2_slot10 = foxtra;
            romeon = _closure1_slot3;
            offset = romeon.useCallback;
            report = new Array(1);
            report[0] = tangon;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(michal);
                    michal = tangon.hideActionSheet;
                    michal = michal.bind(tangon)();
                    oscard = _closure1_slot5;
                    report = oscard.getChannel;
                    tangon = _closure2_slot0;
                    tangon = tangon.channelId;
                    report = report.bind(oscard)(tangon);
                    tangon = null;
                    if(!(tangon != report)) { _fun00012_ip = 157; continue _fun00011 }
 67:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 18;
                    zuuluu = verify[zuuluu];
                    oscard = option.bind(entity)(zuuluu);
                    report = oscard.transitionToMessage;
                    michal = _closure2_slot0;
                    tangon = michal.channelId;
                    zuuluu = michal.messageId;
                    michal = {};
                    golfie = 19;
                    golfie = verify[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = option.getChatLayout;
                    golfie = golfie.bind(option)();
                    golfie = golfie.isChatLockedOpen;
                    golfie = !golfie;
                    if(golfie) { _fun00012_ip = 145; continue _fun00011 }
 143:
                    golfie = undefined;
 145:
                    michal['navigationReplace'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 157:
                    return entity;
                }
            };
            romeon = offset.bind(romeon)(zuuluu, report);
            var _closure2_slot11 = romeon;
            echoed = _closure1_slot3;
            offset = echoed.useCallback;
            report = new Array(1);
            report[0] = tangon;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    report = _closure1_slot1;
                    entity = _closure1_slot2;
                    tangon = 11;
                    zuuluu = entity[tangon];
                    entity = undefined;
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.hideActionSheet;
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = _closure2_slot0;
                    golfie = zuuluu.attachmentId;
                    zuuluu = null;
                    if(!(zuuluu != golfie)) { _fun00014_ip = 151; continue _fun00013 }
 54:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    tangon = zuuluu[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.openLazy;
                    verify = _closure1_slot0;
                    tangon = 21;
                    tangon = zuuluu[tangon];
                    verify = verify.bind(entity)(tangon);
                    tangon = 20;
                    tangon = zuuluu[tangon];
                    zuuluu = zuuluu.paths;
                    tangon = verify.bind(entity)(tangon, zuuluu);
                    zuuluu = _closure1_slot10;
                    michal = {};
                    option = _closure2_slot0;
                    verify = option.messageId;
                    michal['messageId'] = verify;
                    option = option.channelId;
                    michal['channelId'] = option;
                    michal['attachmentId'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
 151:
                    return entity;
                }
            };
            offset = offset.bind(echoed)(zuuluu, report);
            var _closure2_slot12 = offset;
            zuuluu = 22;
            zuuluu = result[zuuluu];
            update = kiloes.bind(output)(zuuluu);
            echoed = update.useMessageForwardingExperiment;
            report = {};
            zuuluu = 'MediaShareActions';
            report['location'] = zuuluu;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = source;
            zuuluu = echoed.bind(update)(report, zuuluu);
            zuuluu = zuuluu.canForwardMessages;
            report = 23;
            report = result[report];
            kiloes = kiloes.bind(output)(report);
            report = kiloes.useCanForwardMessage;
            report = report.bind(kiloes)(sizing);
            if(!report) { _fun00002_ip = 508; continue _fun00001 }
 505:
            report = zuuluu;
 508:
            if(!report) { _fun00002_ip = 543; continue _fun00001 }
 511:
            kiloes = tangon.attachmentId;
            zuuluu = null;
            zuuluu = zuuluu != kiloes;
            if(zuuluu) { _fun00002_ip = 540; continue _fun00001 }
 526:
            kiloes = tangon.accessoryType;
            tangon = 'embed';
            zuuluu = tangon === kiloes;
 540:
            report = zuuluu;
 543:
            _closure2_slot13 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(10);
            michal[0] = backup;
            michal[1] = foxtra;
            michal[2] = romeon;
            michal[3] = yankee;
            michal[4] = offset;
            michal[5] = verify;
            michal[6] = option;
            michal[7] = golfie;
            michal[8] = oscard;
            michal[9] = report;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = new Array(0);
                    zuuluu = _closure2_slot1;
                    michal = true;
                    if(!(michal !== zuuluu)) { _fun00016_ip = 124; continue _fun00015 }
 17:
                    zuuluu = entity.push;
                    michal = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 24;
                    report = offset[report];
                    option = undefined;
                    report = verify.bind(option)(report);
                    report = report.DownloadIcon;
                    michal['IconComponent'] = report;
                    report = 25;
                    oscard = offset[report];
                    oscard = verify.bind(option)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = offset[report];
                    report = verify.bind(option)(report);
                    report = report.t;
                    report = report.R3BPHx;
                    report = oscard.bind(golfie)(report);
                    michal['label'] = report;
                    report = _closure2_slot7;
                    michal['action'] = report;
                    michal = zuuluu.bind(entity)(michal);
 124:
                    michal = _closure2_slot13;
                    if(!michal) { _fun00016_ip = 236; continue _fun00015 }
 131:
                    zuuluu = entity.push;
                    michal = {};
                    golfie = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscard = 26;
                    oscard = offset[oscard];
                    verify = undefined;
                    oscard = golfie.bind(verify)(oscard);
                    michal['IconComponent'] = oscard;
                    option = _closure1_slot0;
                    report = 25;
                    oscard = offset[report];
                    oscard = option.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = offset[report];
                    report = option.bind(verify)(report);
                    report = report.t;
                    report = report.I3ltXF;
                    report = oscard.bind(golfie)(report);
                    michal['label'] = report;
                    report = _closure2_slot10;
                    michal['action'] = report;
                    michal = zuuluu.bind(entity)(michal);
 236:
                    michal = _closure2_slot2;
                    if(!michal) { _fun00016_ip = 350; continue _fun00015 }
 243:
                    zuuluu = entity.push;
                    michal = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 27;
                    report = offset[report];
                    option = undefined;
                    report = verify.bind(option)(report);
                    report = report.ShareIcon;
                    michal['IconComponent'] = report;
                    report = 25;
                    oscard = offset[report];
                    oscard = verify.bind(option)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = offset[report];
                    report = verify.bind(option)(report);
                    report = report.t;
                    report = report.RDE0SU;
                    report = oscard.bind(golfie)(report);
                    michal['label'] = report;
                    report = _closure2_slot8;
                    michal['action'] = report;
                    michal = zuuluu.bind(entity)(michal);
 350:
                    zuuluu = entity.push;
                    michal = {};
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 28;
                    golfie = oscard[golfie];
                    verify = undefined;
                    golfie = option.bind(verify)(golfie);
                    michal['iconSource'] = golfie;
                    yankee = _closure1_slot0;
                    offset = 25;
                    golfie = oscard[offset];
                    golfie = yankee.bind(verify)(golfie);
                    foxtra = golfie.intl;
                    romeon = foxtra.string;
                    golfie = oscard[offset];
                    golfie = yankee.bind(verify)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.q5jLJC;
                    golfie = romeon.bind(foxtra)(golfie);
                    michal['label'] = golfie;
                    golfie = _closure2_slot9;
                    michal['action'] = golfie;
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = entity.push;
                    michal = {};
                    golfie = 29;
                    golfie = oscard[golfie];
                    golfie = option.bind(verify)(golfie);
                    michal['iconSource'] = golfie;
                    golfie = oscard[offset];
                    golfie = yankee.bind(verify)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    oscard = oscard[offset];
                    oscard = yankee.bind(verify)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.+TSRGB;
                    oscard = golfie.bind(option)(oscard);
                    michal['label'] = oscard;
                    oscard = _closure2_slot11;
                    michal['action'] = oscard;
                    michal = zuuluu.bind(entity)(michal);
                    michal = _closure2_slot6;
                    if(!michal) { _fun00016_ip = 648; continue _fun00015 }
 549:
                    zuuluu = entity.push;
                    michal = {};
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    oscard = 30;
                    oscard = report[oscard];
                    oscard = option.bind(verify)(oscard);
                    oscard = oscard.ImageWarningIcon;
                    michal['IconComponent'] = oscard;
                    oscard = report[offset];
                    oscard = option.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = report[offset];
                    report = option.bind(verify)(report);
                    report = report.t;
                    report = report.ZH7P2t;
                    report = oscard.bind(golfie)(report);
                    michal['label'] = report;
                    tangon = _closure2_slot12;
                    michal['action'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 648:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.GIF_RE_IOS;
    var _closure1_slot8 = option;
    report = report.MediaType;
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot11 = report;
    report = 33;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/components/MediaShareActions.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: MediaShareActionSheet
        entity = argFoo;
        oscard = entity.source;
        report = entity.disableDownload;
        tangon = entity.shareable;
        zuuluu = _closure1_slot12;
        michal = {};
        michal['source'] = oscard;
        michal['disableDownload'] = report;
        michal['shareable'] = tangon;
        tangon = undefined;
        verify = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot11;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 31;
        entity = golfie[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.ActionSheet;
        entity = {};
        report = 32;
        report = golfie[report];
        report = oscard.bind(tangon)(report);
        report = report.ActionSheetRow;
        oscard = report.Group;
        report = {};
        option = verify.map;
        golfie = function(argFoo, argBar) {
            entity = argFoo;
            report = _closure1_slot11;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 32;
            michal = option[oscard];
            tangon = undefined;
            michal = golfie.bind(tangon)(michal);
            zuuluu = michal.ActionSheetRow;
            michal = {};
            oscard = option[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.ActionSheetRow;
            golfie = oscard.Icon;
            oscard = {};
            option = entity.IconComponent;
            oscard['IconComponent'] = option;
            option = entity.iconSource;
            oscard['source'] = option;
            oscard = report.bind(tangon)(golfie, oscard);
            michal['icon'] = oscard;
            oscard = entity.action;
            michal['onPress'] = oscard;
            entity = entity.label;
            michal['label'] = entity;
            entity = argBar;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        };
        golfie = option.bind(verify)(golfie);
        report['children'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['useMediaShareActions'] = michal;
    return entity;
})();