// app/modules/forums/native/posts/ForumPostMedia.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    backup = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: ForumPostMediaAndroid
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.shouldSpoiler;
            entity = michal.blurTheme;
            oscard = michal.source;
            golfie = michal.androidStyle;
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot7;
            michal = {};
            michal['style'] = golfie;
            michal['source'] = oscard;
            oscard = 0;
            if(!option) { _fun00002_ip = 55; continue _fun00001 }
 52:
            oscard = 10;
 55:
            michal['blurRadius'] = oscard;
            oscard = 'cover';
            michal['resizeMode'] = oscard;
            golfie = _closure1_slot10;
            oscard = _closure1_slot16;
            report = {};
            report['shouldSpoiler'] = option;
            report['blurTheme'] = entity;
            entity = undefined;
            report = golfie.bind(entity)(oscard, report);
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: ForumPostMediaIOS
        entity = argFoo;
        offset = entity.shouldSpoiler;
        verify = entity.blurTheme;
        yankee = entity.source;
        romeon = entity.iosStyle;
        tangon = _closure1_slot12;
        zuuluu = _closure1_slot11;
        michal = {};
        option = _closure1_slot10;
        golfie = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        report = report[entity];
        entity = undefined;
        golfie = golfie.bind(entity)(report);
        report = {};
        report['style'] = romeon;
        report['source'] = yankee;
        yankee = 'cover';
        report['resizeMode'] = yankee;
        golfie = option.bind(entity)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot10;
        golfie = _closure1_slot16;
        oscard = {};
        oscard['shouldSpoiler'] = offset;
        oscard['blurTheme'] = verify;
        oscard = option.bind(entity)(golfie, oscard);
        report[1] = oscard;
        michal['children'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    report = function(argFoo) { // Original name: ForumPostMediaSpoiler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.shouldSpoiler;
            verify = entity.blurTheme;
            entity = _closure1_slot13;
            report = undefined;
            foxtra = entity.bind(report)();
            entity = null;
            if(!michal) { _fun00004_ip = 197; continue _fun00003 }
 36:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot11;
            michal = {};
            option = _closure1_slot10;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = 9;
            oscard = backup[oscard];
            golfie = yankee.bind(report)(oscard);
            oscard = {};
            oscard['blurTheme'] = verify;
            verify = _closure1_slot6;
            verify = verify.absoluteFill;
            oscard['style'] = verify;
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot10;
            option = _closure1_slot5;
            golfie = {};
            romeon = foxtra.spoilerIconContainer;
            golfie['style'] = romeon;
            romeon = _closure1_slot10;
            offset = 10;
            offset = backup[offset];
            yankee = yankee.bind(report)(offset);
            offset = {'style': null, 'height': 30, 'width': 30};
            foxtra = foxtra.spoilerIcon;
            offset['style'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 197:
            return entity;
        }
    };
    var _closure1_slot16 = report;
    entity = function(argFoo) { // Original name: ForumPostMedia
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            entity = _closure1_slot13;
            report = undefined;
            golfie = entity.bind(report)();
            zuuluu = _closure1_slot4;
            entity = zuuluu.useRef;
            michal = null;
            oscard = entity.bind(zuuluu)(michal);
            var _closure2_slot1 = oscard;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.useShouldAgeVerifyForExplicitMedia;
            entity = entity.bind(zuuluu)();
            zuuluu = option.isMediaPost;
            if(zuuluu) { _fun00006_ip = 165; continue _fun00005 }
 81:
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            romeon = _closure1_slot10;
            if(zuuluu) { _fun00006_ip = 141; continue _fun00005 }
 117:
            tangon = _closure1_slot15;
            zuuluu = {};
            output = zuuluu;
            sizing = option;
            verify = copyDataProperties(output, sizing);
            verify = romeon.bind(report)(tangon, zuuluu);
            _fun00006_ip = 163; continue _fun00005;
 141:
            tangon = _closure1_slot14;
            zuuluu = {};
            output = zuuluu;
            sizing = option;
            foxtra = copyDataProperties(output, sizing);
            verify = romeon.bind(report)(tangon, zuuluu);
 163:
            _fun00006_ip = 207; continue _fun00005;
 165:
            romeon = _closure1_slot10;
            tangon = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 12;
            zuuluu = foxtra[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            output = zuuluu;
            sizing = option;
            foxtra = copyDataProperties(output, sizing);
            verify = romeon.bind(report)(tangon, zuuluu);
 207:
            tangon = option.obscureReason;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 14;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(report)(zuuluu);
            zuuluu = zuuluu.ObscureReason;
            zuuluu = zuuluu.EXPLICIT_CONTENT;
            if(!(tangon === zuuluu)) { _fun00006_ip = 255; continue _fun00005 }
 249:
            if(entity) { _fun00006_ip = 452; continue _fun00005 }
 255:
            entity = option.onPress;
            if(!(michal == entity)) { _fun00006_ip = 321; continue _fun00005 }
 264:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            romeon = golfie.mediaContainer;
            tangon = new Array(2);
            tangon[0] = romeon;
            romeon = option.containerStyle;
            tangon[1] = romeon;
            entity['style'] = tangon;
            entity['ref'] = oscard;
            entity['children'] = verify;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00006_ip = 450; continue _fun00005;
 321:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            foxtra = golfie.mediaContainer;
            romeon = new Array(2);
            romeon[0] = foxtra;
            foxtra = option.containerStyle;
            romeon[1] = foxtra;
            michal['style'] = romeon;
            michal['ref'] = oscard;
            backup = _closure1_slot10;
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot2;
            romeon = 15;
            romeon = kiloes[romeon];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.PressableOpacity;
            romeon = {};
            kiloes = _closure1_slot9;
            romeon['androidRippleConfig'] = kiloes;
            kiloes = 0.8;
            romeon['activeOpacity'] = kiloes;
            kiloes = function() { // Original name: onPress
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.onPress;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00008_ip = 41; continue _fun00007 }
 23:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.onPress;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 41:
                    return entity;
                }
            };
            romeon['onPress'] = kiloes;
            romeon['children'] = verify;
            romeon = backup.bind(report)(foxtra, romeon);
            michal['children'] = romeon;
            entity = tangon.bind(report)(zuuluu, michal);
 450:
            _fun00006_ip = 573; continue _fun00005;
 452:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot5;
            michal = {};
            romeon = golfie.mediaContainer;
            golfie = new Array(2);
            golfie[0] = romeon;
            option = option.containerStyle;
            golfie[1] = option;
            michal['style'] = golfie;
            michal['ref'] = oscard;
            option = _closure1_slot10;
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 15;
            oscard = romeon[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.PressableOpacity;
            oscard = {};
            yankee = _closure1_slot9;
            oscard['androidRippleConfig'] = yankee;
            yankee = 0;
            oscard['activeOpacity'] = yankee;
            offset = function() { // Original name: onPress
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 16;
                zuuluu = oscard[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.showAgeVerificationGetStartedModal;
                report = _closure1_slot0;
                michal = 17;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.AgeVerificationModalEntryPoint;
                michal = michal.FORUM_POST_MEDIA_PREVIEW;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard['onPress'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 573:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    tangon = function(argFoo) { // Original name: useSharedMediaProps
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            option = entity.channel;
            verify = entity.media;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 14;
            entity = oscard[entity];
            tangon = undefined;
            golfie = report.bind(tangon)(entity);
            zuuluu = golfie.useShouldObscure;
            entity = {};
            entity['media'] = verify;
            entity['channel'] = option;
            golfie = zuuluu.bind(golfie)(entity);
            zuuluu = _closure1_slot3;
            entity = 2;
            golfie = zuuluu.bind(tangon)(golfie, entity);
            entity = {};
            zuuluu = 0;
            zuuluu = golfie[zuuluu];
            entity['shouldObscure'] = zuuluu;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            entity['obscureReason'] = zuuluu;
            zuuluu = 18;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(tangon)(zuuluu);
            report = oscard.isThemeDark;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.theme;
            report = report.bind(oscard)(zuuluu);
            zuuluu = 'light';
            if(!report) { _fun00010_ip = 143; continue _fun00009 }
 139:
            zuuluu = 'dark';
 143:
            entity['blurTheme'] = zuuluu;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 19;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.GifAutoPlay;
            michal = zuuluu.useSetting;
            zuuluu = michal.bind(zuuluu)();
            michal = 'png';
            if(!zuuluu) { _fun00010_ip = 195; continue _fun00009 }
 193:
            michal = null;
 195:
            entity['format'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = backup.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    verify = option[oscard];
    oscard = argCor;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.View;
    var _closure1_slot5 = verify;
    verify = oscard.StyleSheet;
    var _closure1_slot6 = verify;
    oscard = oscard.ImageBackground;
    var _closure1_slot7 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = backup.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot9 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.jsx;
    var _closure1_slot10 = verify;
    verify = oscard.Fragment;
    var _closure1_slot11 = verify;
    oscard = oscard.jsxs;
    var _closure1_slot12 = oscard;
    oscard = 6;
    oscard = option[oscard];
    offset = golfie.bind(entity)(oscard);
    verify = offset.createStyles;
    oscard = {};
    yankee = {'position': 'relative', 'overflow': 'hidden'};
    oscard['mediaContainer'] = yankee;
    yankee = {};
    foxtra = 7;
    romeon = option[foxtra];
    romeon = backup.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    yankee['borderRadius'] = romeon;
    oscard['thumbnailBorder'] = yankee;
    yankee = {'height': 80, 'width': 80};
    oscard['thumbnail'] = yankee;
    romeon = 'center';
    yankee = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'justifyContent': 'center'};
    oscard['spoilerIconContainer'] = yankee;
    yankee = {};
    foxtra = option[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.PRIMARY_300;
    yankee['color'] = foxtra;
    yankee['alignSelf'] = romeon;
    oscard['spoilerIcon'] = yankee;
    yankee = {'borderRadius': 2, 'overflow': 'hidden'};
    oscard['gridMediaContainer'] = yankee;
    oscard = verify.bind(offset)(oscard);
    var _closure1_slot13 = oscard;
    oscard = 22;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/forums/native/posts/ForumPostMedia.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ForumPostMediaSpoiler'] = report;
    zuuluu['useSharedMediaProps'] = tangon;
    tangon = function(argFoo) { // Original name: ForumPostMediaThumbnail
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = entity.channel;
            output = entity.isLocalDeviceMedia;
            var _closure2_slot0 = output;
            verify = entity.firstMessageId;
            var _closure2_slot1 = verify;
            sizing = entity.media;
            var _closure2_slot2 = sizing;
            foxtra = entity.isEmbed;
            kiloes = entity.embedLeftBorderColor;
            romeon = entity.containerStyle;
            zuuluu = _closure1_slot13;
            tangon = undefined;
            yankee = zuuluu.bind(tangon)();
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 20;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = {};
            golfie = oscard.id;
            zuuluu['threadId'] = golfie;
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.onTapMedia;
            var _closure2_slot3 = zuuluu;
            option = _closure1_slot4;
            golfie = option.useCallback;
            report = new Array(3);
            report[0] = verify;
            report[1] = sizing;
            report[2] = zuuluu;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot3;
                michal = {};
                tangon = _closure2_slot1;
                michal['messageId'] = tangon;
                tangon = _closure2_slot2;
                entity = new Array(1);
                entity[0] = tangon;
                michal['mediaItems'] = entity;
                entity = argFoo;
                michal['containerRef'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = golfie.bind(option)(zuuluu, report);
            golfie = _closure1_slot18;
            zuuluu = {};
            zuuluu['channel'] = oscard;
            zuuluu['media'] = sizing;
            zuuluu = golfie.bind(tangon)(zuuluu);
            offset = zuuluu.shouldObscure;
            verify = zuuluu.obscureReason;
            option = zuuluu.blurTheme;
            result = zuuluu.format;
            var _closure2_slot4 = result;
            backup = _closure1_slot4;
            golfie = backup.useMemo;
            zuuluu = new Array(6);
            zuuluu[0] = result;
            zuuluu[1] = output;
            output = sizing.height;
            zuuluu[2] = output;
            output = sizing.src;
            zuuluu[3] = output;
            output = sizing.width;
            zuuluu[4] = output;
            sizing = sizing.srcIsAnimated;
            zuuluu[5] = sizing;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = {};
                    if(entity) { _fun00014_ip = 130; continue _fun00013 }
 12:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 21;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.getSrcWithWidthAndHeight;
                    entity = {};
                    oscard = _closure2_slot2;
                    golfie = oscard.src;
                    entity['src'] = golfie;
                    golfie = oscard.width;
                    entity['sourceWidth'] = golfie;
                    golfie = oscard.height;
                    entity['sourceHeight'] = golfie;
                    golfie = 320;
                    entity['targetWidth'] = golfie;
                    entity['targetHeight'] = golfie;
                    golfie = _closure2_slot4;
                    entity['format'] = golfie;
                    oscard = oscard.srcIsAnimated;
                    entity['animated'] = oscard;
                    entity = tangon.bind(report)(entity);
                    michal['uri'] = entity;
                    entity = michal;
                    _fun00014_ip = 148; continue _fun00013;
 130:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.src;
                    michal['uri'] = zuuluu;
                    entity = michal;
 148:
                    return entity;
                }
            };
            golfie = golfie.bind(backup)(michal, zuuluu);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot17;
            entity = {};
            backup = yankee.thumbnail;
            entity['iosStyle'] = backup;
            backup = yankee.thumbnail;
            entity['androidStyle'] = backup;
            backup = yankee.thumbnailBorder;
            yankee = new Array(3);
            yankee[0] = backup;
            if(!foxtra) { _fun00012_ip = 342; continue _fun00011 }
 324:
            backup = {};
            sizing = 2;
            backup['borderLeftWidth'] = sizing;
            backup['borderLeftColor'] = kiloes;
            foxtra = backup;
 342:
            yankee[1] = foxtra;
            yankee[2] = romeon;
            entity['containerStyle'] = yankee;
            entity['obscureReason'] = verify;
            verify = null;
            verify = verify != offset;
            if(!verify) { _fun00012_ip = 372; continue _fun00011 }
 369:
            verify = offset;
 372:
            entity['shouldSpoiler'] = verify;
            entity['blurTheme'] = option;
            entity['source'] = golfie;
            entity['onPress'] = report;
            report = oscard.isMediaPost;
            report = report.bind(oscard)();
            entity['isMediaPost'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ForumPostMediaThumbnail'] = tangon;
    michal = function(argFoo) { // Original name: ForumPostGridMedia
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = entity.channel;
            oscard = entity.media;
            var _closure2_slot0 = oscard;
            romeon = entity.targetWidth;
            var _closure2_slot1 = romeon;
            foxtra = entity.targetHeight;
            var _closure2_slot2 = foxtra;
            zuuluu = _closure1_slot13;
            tangon = undefined;
            offset = zuuluu.bind(tangon)();
            golfie = _closure1_slot18;
            zuuluu = {};
            zuuluu['channel'] = report;
            zuuluu['media'] = oscard;
            zuuluu = golfie.bind(tangon)(zuuluu);
            yankee = zuuluu.shouldObscure;
            verify = zuuluu.obscureReason;
            option = zuuluu.blurTheme;
            kiloes = zuuluu.format;
            var _closure2_slot3 = kiloes;
            zuuluu = report.isMediaPost;
            report = zuuluu.bind(report)();
            var _closure2_slot4 = report;
            backup = _closure1_slot4;
            golfie = backup.useMemo;
            sizing = oscard.src;
            zuuluu = new Array(7);
            zuuluu[0] = sizing;
            sizing = oscard.width;
            zuuluu[1] = sizing;
            sizing = oscard.height;
            zuuluu[2] = sizing;
            zuuluu[3] = romeon;
            zuuluu[4] = foxtra;
            zuuluu[5] = kiloes;
            zuuluu[6] = report;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot4;
                    michal = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 21;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.getSrcWithWidthAndHeight;
                    zuuluu = {};
                    golfie = _closure2_slot0;
                    option = golfie.src;
                    zuuluu['src'] = option;
                    option = golfie.width;
                    zuuluu['sourceWidth'] = option;
                    option = golfie.height;
                    zuuluu['sourceHeight'] = option;
                    if(entity) { _fun00018_ip = 132; continue _fun00017 }
 80:
                    entity = _closure2_slot1;
                    option = 4;
                    entity = option * entity;
                    zuuluu['targetWidth'] = entity;
                    entity = _closure2_slot2;
                    entity = option * entity;
                    zuuluu['targetHeight'] = entity;
                    entity = _closure2_slot3;
                    zuuluu['format'] = entity;
                    entity = tangon.bind(report)(zuuluu);
                    michal['uri'] = entity;
                    entity = michal;
                    _fun00018_ip = 173; continue _fun00017;
 132:
                    option = golfie.width;
                    zuuluu['targetWidth'] = option;
                    golfie = golfie.height;
                    zuuluu['targetHeight'] = golfie;
                    oscard = _closure2_slot3;
                    zuuluu['format'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal['uri'] = zuuluu;
                    entity = michal;
 173:
                    return entity;
                }
            };
            golfie = golfie.bind(backup)(michal, zuuluu);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot17;
            entity = {};
            offset = offset.gridMediaContainer;
            entity['containerStyle'] = offset;
            offset = {};
            offset['height'] = foxtra;
            offset['width'] = romeon;
            entity['iosStyle'] = offset;
            offset = {};
            offset['height'] = foxtra;
            offset['width'] = romeon;
            entity['androidStyle'] = offset;
            offset = null;
            offset = offset != yankee;
            if(!offset) { _fun00016_ip = 247; continue _fun00015 }
 244:
            offset = yankee;
 247:
            entity['shouldSpoiler'] = offset;
            entity['obscureReason'] = verify;
            entity['blurTheme'] = option;
            entity['source'] = golfie;
            golfie = oscard.height;
            oscard = oscard.width;
            oscard = golfie >= oscard;
            entity['isPortrait'] = oscard;
            entity['isMediaPost'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ForumPostGridMedia'] = michal;
    return entity;
})();