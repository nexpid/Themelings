// app/modules/search_v2/native/components/list/SearchMediaImage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getMediaSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = argBar;
            tangon = argBaz;
            zuuluu = argCor;
            if(!(!(oscard > michal))) { _fun00002_ip = 56; continue _fun00001 }
 16:
            entity = new Array(2);
            entity[0] = tangon;
            report = global;
            golfie = report.Math;
            report = golfie.round;
            tangon = tangon / oscard;
            tangon = michal * tangon;
            tangon = report.bind(golfie)(tangon);
            entity[1] = tangon;
            _fun00002_ip = 97; continue _fun00001;
 56:
            tangon = global;
            report = tangon.Math;
            tangon = report.round;
            michal = zuuluu / michal;
            michal = oscard * michal;
            tangon = tangon.bind(report)(michal);
            michal = new Array(2);
            michal[0] = tangon;
            michal[1] = zuuluu;
            entity = michal;
 97:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: SearchMediaObscurityIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            oscard = michal.obscureReason;
            var _closure2_slot0 = oscard;
            verify = michal.height;
            var _closure2_slot1 = verify;
            michal = michal.width;
            var _closure2_slot2 = michal;
            zuuluu = _closure1_slot11;
            tangon = undefined;
            romeon = zuuluu.bind(tangon)();
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            golfie = zuuluu.bind(tangon)();
            report = _closure1_slot0;
            zuuluu = 6;
            zuuluu = option[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.isThemeDark;
            zuuluu = zuuluu.bind(report)(golfie);
            option = 'light';
            if(!zuuluu) { _fun00004_ip = 108; continue _fun00003 }
 104:
            option = 'dark';
 108:
            golfie = _closure1_slot4;
            report = golfie.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = michal;
            michal = function() {
                entity = {};
                zuuluu = _closure2_slot1;
                entity['height'] = zuuluu;
                michal = _closure2_slot2;
                entity['width'] = michal;
                return entity;
            };
            verify = report.bind(golfie)(michal, zuuluu);
            report = _closure1_slot4;
            zuuluu = report.useMemo;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    oscard = 7;
                    michal = michal[oscard];
                    tangon = undefined;
                    michal = report.bind(tangon)(michal);
                    michal = michal.ObscureReason;
                    michal = michal.SPOILER;
                    if(!(michal !== zuuluu)) { _fun00006_ip = 168; continue _fun00005 }
 48:
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = report.bind(tangon)(michal);
                    michal = michal.ObscureReason;
                    michal = michal.EXPLICIT_CONTENT;
                    if(!(michal !== zuuluu)) { _fun00006_ip = 120; continue _fun00005 }
 81:
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = report.bind(tangon)(michal);
                    michal = michal.ObscureReason;
                    michal = michal.POTENTIAL_EXPLICIT_CONTENT;
                    if(!(michal !== zuuluu)) { _fun00006_ip = 116; continue _fun00005 }
 114:
                    return tangon;
 116:
                    michal = null;
                    return michal;
 120:
                    report = _closure1_slot8;
                    zuuluu = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ImageWarningIcon;
                    michal = {};
                    oscard = 'lg';
                    michal['size'] = oscard;
                    michal = report.bind(tangon)(zuuluu, michal);
                    return michal;
 168:
                    zuuluu = _closure1_slot8;
                    michal = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 8;
                    entity = report[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.SpoilerIcon;
                    entity = {};
                    report = 'lg';
                    entity['size'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            offset = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot9;
            entity = {};
            golfie = _closure1_slot8;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            report = 10;
            report = foxtra[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['blurTheme'] = option;
            option = _closure1_slot6;
            foxtra = option.absoluteFill;
            option = new Array(2);
            option[0] = foxtra;
            option[1] = verify;
            report['style'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            oscard = oscard != offset;
            if(!oscard) { _fun00004_ip = 313; continue _fun00003 }
 262:
            verify = _closure1_slot8;
            option = _closure1_slot7;
            golfie = {};
            yankee = _closure1_slot6;
            foxtra = yankee.absoluteFill;
            yankee = new Array(2);
            yankee[0] = foxtra;
            romeon = romeon.container;
            yankee[1] = romeon;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 313:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: SearchMediaImage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            option = michal.containerStyle;
            verify = michal.uri;
            var _closure2_slot0 = verify;
            result = michal.placeholder;
            output = michal.placeholderVersion;
            zuuluu = michal.obscureReason;
            oscard = michal.renderFallback;
            kiloes = michal.imageHeight;
            var _closure2_slot1 = kiloes;
            yankee = michal.imageWidth;
            var _closure2_slot2 = yankee;
            offset = _closure1_slot4;
            golfie = offset.useMemo;
            report = new Array(2);
            report[0] = kiloes;
            report[1] = yankee;
            tangon = function() {
                entity = {};
                zuuluu = _closure2_slot1;
                entity['height'] = zuuluu;
                michal = _closure2_slot2;
                entity['width'] = michal;
                return entity;
            };
            backup = golfie.bind(offset)(tangon, report);
            golfie = _closure1_slot4;
            report = golfie.useMemo;
            tangon = new Array(1);
            tangon[0] = verify;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    michal = entity != michal;
                    if(!michal) { _fun00010_ip = 30; continue _fun00009 }
 16:
                    michal = {};
                    zuuluu = _closure2_slot0;
                    michal['uri'] = zuuluu;
                    entity = michal;
 30:
                    return entity;
                }
            };
            foxtra = report.bind(golfie)(entity, tangon);
            entity = null;
            if(!(entity != foxtra)) { _fun00008_ip = 529; continue _fun00007 }
 141:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 7;
            tangon = golfie[tangon];
            golfie = undefined;
            report = report.bind(golfie)(tangon);
            tangon = report.getObscuredAlt;
            romeon = tangon.bind(report)(zuuluu);
            tangon = entity != zuuluu;
            verify = null;
            if(!tangon) { _fun00008_ip = 212; continue _fun00007 }
 183:
            offset = _closure1_slot8;
            report = _closure1_slot13;
            tangon = {};
            tangon['obscureReason'] = zuuluu;
            tangon['height'] = kiloes;
            tangon['width'] = yankee;
            verify = offset.bind(golfie)(report, tangon);
 212:
            offset = _closure1_slot0;
            tangon = _closure1_slot2;
            report = 11;
            tangon = tangon[report];
            offset = offset.bind(golfie)(tangon);
            tangon = offset.isAndroid;
            tangon = tangon.bind(offset)();
            if(!tangon) { _fun00008_ip = 251; continue _fun00007 }
 244:
            if(!(entity == zuuluu)) { _fun00008_ip = 446; continue _fun00007 }
 251:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            sizing = romeon;
            if(!zuuluu) { _fun00008_ip = 340; continue _fun00007 }
 283:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 12;
            tangon = yankee[zuuluu];
            tangon = offset.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.jes7FB;
            sizing = tangon.bind(report)(zuuluu);
 340:
            report = _closure1_slot10;
            tangon = _closure1_slot7;
            zuuluu = {};
            zuuluu['style'] = option;
            kiloes = _closure1_slot8;
            yankee = _closure1_slot0;
            echoed = _closure1_slot2;
            offset = 13;
            offset = echoed[offset];
            offset = yankee.bind(golfie)(offset);
            yankee = offset.ImageWithPlaceholder;
            offset = {};
            offset['style'] = backup;
            echoed = foxtra.uri;
            offset['uri'] = echoed;
            offset['placeholder'] = result;
            offset['placeholderVersion'] = output;
            offset['alt'] = sizing;
            yankee = kiloes.bind(golfie)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            offset[1] = verify;
            zuuluu['children'] = offset;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            return zuuluu;
 446:
            report = _closure1_slot10;
            tangon = _closure1_slot7;
            zuuluu = {};
            zuuluu['style'] = option;
            yankee = _closure1_slot8;
            offset = _closure1_slot5;
            option = {};
            option['style'] = backup;
            option['source'] = foxtra;
            foxtra = 10;
            option['blurRadius'] = foxtra;
            foxtra = 'cover';
            option['resizeMode'] = foxtra;
            option['accessibilityLabel'] = romeon;
            offset = yankee.bind(golfie)(offset, option);
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            zuuluu['children'] = option;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            return zuuluu;
 529:
            zuuluu = entity != oscard;
            entity = null;
            if(!zuuluu) { _fun00008_ip = 564; continue _fun00007 }
 538:
            report = _closure1_slot8;
            tangon = _closure1_slot9;
            zuuluu = {};
            michal = undefined;
            oscard = oscard.bind(michal)();
            zuuluu['children'] = oscard;
            entity = report.bind(michal)(tangon, zuuluu);
 564:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ImageBackground;
    var _closure1_slot5 = golfie;
    golfie = tangon.StyleSheet;
    var _closure1_slot6 = golfie;
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'justifyContent': 'center', 'alignItems': 'center'};
    tangon['container'] = verify;
    verify = {'justifyContent': 'center', 'alignItems': 'center'};
    tangon['sound'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/SearchMediaImage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: SearchAttachmentMediaImage
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            verify = entity.attachment;
            var _closure2_slot0 = verify;
            foxtra = entity.channelId;
            romeon = entity.authorId;
            zuuluu = entity.scale;
            oscard = entity.imageHeight;
            report = entity.imageWidth;
            yankee = entity.containerStyle;
            golfie = entity.renderFallback;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            kiloes = verify.width;
            backup = verify.height;
            offset = _closure1_slot1;
            sizing = _closure1_slot2;
            option = 14;
            option = sizing[option];
            sizing = offset.bind(tangon)(option);
            option = null;
            offset = option != backup;
            if(!offset) { _fun00012_ip = 108; continue _fun00011 }
 104:
            offset = option != kiloes;
 108:
            option = '[SearchMediaImage] Attachment image dimensions should not be null.';
            option = sizing.bind(tangon)(offset, option);
            offset = _closure1_slot12;
            echoed = report * zuuluu;
            result = oscard * zuuluu;
            ctrled = undefined;
            source = kiloes;
            update = backup;
            offset = ctrled[offset](source, update, echoed, result, output);
            option = _closure1_slot3;
            zuuluu = 2;
            option = option.bind(tangon)(offset, zuuluu);
            zuuluu = 0;
            sizing = option[zuuluu];
            zuuluu = 1;
            kiloes = option[zuuluu];
            option = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 15;
            zuuluu = backup[zuuluu];
            offset = option.bind(tangon)(zuuluu);
            zuuluu = offset.getAttachmentThumbnailURI;
            offset = zuuluu.bind(offset)(verify, sizing, kiloes);
            zuuluu = 16;
            zuuluu = backup[zuuluu];
            option = option.bind(tangon)(zuuluu);
            zuuluu = option.useShouldRedactExplicitContent;
            foxtra = zuuluu.bind(option)(foxtra, romeon);
            _closure2_slot1 = foxtra;
            romeon = _closure1_slot4;
            option = romeon.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = foxtra;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getObscureReasonForAttachment;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            option = option.bind(romeon)(michal, zuuluu);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot14;
            entity = {};
            entity['containerStyle'] = yankee;
            entity['uri'] = offset;
            offset = verify.placeholder;
            entity['placeholder'] = offset;
            verify = verify.placeholder_version;
            entity['placeholderVersion'] = verify;
            entity['obscureReason'] = option;
            entity['renderFallback'] = golfie;
            entity['imageHeight'] = oscard;
            entity['imageWidth'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['SearchAttachmentMediaImage'] = tangon;
    tangon = function(argFoo) { // Original name: SearchEmbedMediaImage
        entity = argFoo;
        sizing = entity.embed;
        var _closure2_slot0 = sizing;
        backup = entity.messageId;
        var _closure2_slot1 = backup;
        output = entity.channelId;
        var _closure2_slot2 = output;
        romeon = entity.authorId;
        zuuluu = entity.scale;
        oscard = entity.imageHeight;
        report = entity.imageWidth;
        kiloes = entity.hasSpoilerEmbeds;
        var _closure2_slot3 = kiloes;
        yankee = entity.containerStyle;
        golfie = entity.renderFallback;
        option = _closure1_slot0;
        foxtra = _closure1_slot2;
        tangon = 17;
        verify = foxtra[tangon];
        tangon = undefined;
        offset = option.bind(tangon)(verify);
        verify = offset.getEmbedImage;
        verify = verify.bind(offset)(sizing);
        result = _closure1_slot1;
        offset = 14;
        offset = foxtra[offset];
        echoed = result.bind(tangon)(offset);
        offset = null;
        result = offset != verify;
        offset = '[SearchMediaImage] Embed image should not be null.';
        offset = echoed.bind(tangon)(result, offset);
        update = _closure1_slot12;
        sequen = verify.width;
        vacuum = verify.height;
        ctrled = report * zuuluu;
        source = oscard * zuuluu;
        config = undefined;
        result = config[update](sequen, vacuum, ctrled, source, update);
        offset = _closure1_slot3;
        zuuluu = 2;
        offset = offset.bind(tangon)(result, zuuluu);
        zuuluu = 0;
        echoed = offset[zuuluu];
        zuuluu = 1;
        result = offset[zuuluu];
        zuuluu = 15;
        zuuluu = foxtra[zuuluu];
        offset = option.bind(tangon)(zuuluu);
        zuuluu = offset.getEmbedMediaURI;
        offset = zuuluu.bind(offset)(verify, echoed, result);
        zuuluu = 16;
        zuuluu = foxtra[zuuluu];
        option = option.bind(tangon)(zuuluu);
        zuuluu = option.useShouldRedactExplicitContent;
        foxtra = zuuluu.bind(option)(output, romeon);
        var _closure2_slot4 = foxtra;
        romeon = _closure1_slot4;
        option = romeon.useMemo;
        zuuluu = new Array(5);
        zuuluu[0] = output;
        zuuluu[1] = sizing;
        zuuluu[2] = kiloes;
        zuuluu[3] = backup;
        zuuluu[4] = foxtra;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.getObscureReasonForEmbed;
            romeon = _closure2_slot0;
            yankee = _closure2_slot2;
            offset = _closure2_slot1;
            verify = _closure2_slot3;
            option = _closure2_slot4;
            foxtra = golfie;
            entity = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
            return entity;
        };
        option = option.bind(romeon)(michal, zuuluu);
        zuuluu = _closure1_slot8;
        michal = _closure1_slot14;
        entity = {};
        entity['containerStyle'] = yankee;
        entity['uri'] = offset;
        offset = verify.placeholder;
        entity['placeholder'] = offset;
        verify = verify.placeholderVersion;
        entity['placeholderVersion'] = verify;
        entity['obscureReason'] = option;
        entity['renderFallback'] = golfie;
        entity['imageHeight'] = oscard;
        entity['imageWidth'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['SearchEmbedMediaImage'] = tangon;
    tangon = function(argFoo) { // Original name: SearchSoundMediaImage
        michal = argFoo;
        offset = michal.height;
        var _closure2_slot0 = offset;
        verify = michal.width;
        var _closure2_slot1 = verify;
        option = michal.containerStyle;
        michal = _closure1_slot11;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        golfie = _closure1_slot4;
        zuuluu = golfie.useMemo;
        michal = new Array(2);
        michal[0] = offset;
        michal[1] = verify;
        entity = function() {
            entity = {};
            zuuluu = _closure2_slot0;
            entity['height'] = zuuluu;
            michal = _closure2_slot1;
            entity['width'] = michal;
            return entity;
        };
        golfie = zuuluu.bind(golfie)(entity, michal);
        zuuluu = _closure1_slot8;
        michal = _closure1_slot7;
        entity = {};
        verify = oscard.sound;
        oscard = new Array(3);
        oscard[0] = verify;
        oscard[1] = option;
        oscard[2] = golfie;
        entity['style'] = oscard;
        golfie = _closure1_slot8;
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        report = 18;
        report = option[report];
        report = oscard.bind(tangon)(report);
        oscard = report.CirclePlayIcon;
        report = {'size': 'lg', 'color': 'interactive-normal'};
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['SearchSoundMediaImage'] = tangon;
    michal = function(argFoo) { // Original name: SearchFileMediaImage
        michal = argFoo;
        option = michal.fileName;
        yankee = michal.height;
        var _closure2_slot0 = yankee;
        offset = michal.width;
        var _closure2_slot1 = offset;
        verify = michal.containerStyle;
        michal = _closure1_slot11;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        golfie = _closure1_slot4;
        zuuluu = golfie.useMemo;
        michal = new Array(2);
        michal[0] = yankee;
        michal[1] = offset;
        entity = function() {
            entity = {};
            zuuluu = _closure2_slot0;
            entity['height'] = zuuluu;
            michal = _closure2_slot1;
            entity['width'] = michal;
            return entity;
        };
        golfie = zuuluu.bind(golfie)(entity, michal);
        zuuluu = _closure1_slot8;
        michal = _closure1_slot7;
        entity = {};
        offset = oscard.sound;
        oscard = new Array(3);
        oscard[0] = offset;
        oscard[1] = verify;
        oscard[2] = golfie;
        entity['style'] = oscard;
        golfie = _closure1_slot8;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        report = 19;
        report = verify[report];
        report = oscard.bind(tangon)(report);
        oscard = report.AttachmentIcon;
        report = {};
        report['fileName'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['SearchFileMediaImage'] = michal;
    return entity;
})();