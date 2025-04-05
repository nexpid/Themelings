// app/modules/main_tabs_v2/native/tabs/gravity/media/GravityMediaMosaic.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: isMediaSourceGif
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.isGIFV;
            if(entity) { _fun00002_ip = 73; continue _fun00001 }
 12:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 10;
            zuuluu = option[zuuluu];
            oscard = undefined;
            report = golfie.bind(oscard)(zuuluu);
            tangon = report.urlMatchesFileExtension;
            zuuluu = michal.sourceURI;
            michal = 11;
            michal = option[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.GIF_RE_IOS;
            entity = tangon.bind(report)(zuuluu, michal);
 73:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: MediaMosaicVideo
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.source;
            yankee = entity.height;
            offset = entity.width;
            option = entity.autoplay;
            verify = entity.style;
            michal = _closure1_slot14;
            tangon = undefined;
            golfie = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = 12;
            michal = romeon[michal];
            foxtra = zuuluu.bind(tangon)(michal);
            report = foxtra.useStateFromStores;
            michal = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot8;
                entity = michal.videosMuted;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(foxtra)(zuuluu, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot1;
            entity = 13;
            entity = romeon[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            romeon = {};
            foxtra = oscard.videoURI;
            backup = null;
            if(!(backup == foxtra)) { _fun00004_ip = 136; continue _fun00003 }
 130:
            foxtra = oscard.sourceURI;
 136:
            if(!(backup == foxtra)) { _fun00004_ip = 146; continue _fun00003 }
 140:
            foxtra = oscard.uri;
 146:
            romeon['videoURI'] = foxtra;
            entity['src'] = romeon;
            entity['height'] = yankee;
            entity['width'] = offset;
            offset = false;
            entity['postponeRender'] = offset;
            option = !option;
            entity['paused'] = option;
            entity['muted'] = report;
            option = 'cover';
            entity['resizeMode'] = option;
            offset = golfie.media;
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            entity['style'] = option;
            golfie = golfie.video;
            entity['videoStyle'] = golfie;
            if(report) { _fun00004_ip = 235; continue _fun00003 }
 229:
            report = oscard.isGIFV;
 235:
            entity['disableFocus'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: MediaMosaicImage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.source;
            var _closure2_slot0 = oscard;
            backup = entity.dimensions;
            kiloes = entity.style;
            yankee = entity.isSpoiler;
            entity = _closure1_slot14;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            entity = false;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            offset = 0;
            option = michal[offset];
            var _closure2_slot1 = option;
            entity = 1;
            entity = michal[entity];
            var _closure2_slot2 = entity;
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            golfie = 14;
            entity = sizing[golfie];
            zuuluu = result.bind(tangon)(entity);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: u
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.withTiming;
                    michal = _closure2_slot1;
                    zuuluu = 1;
                    if(!michal) { _fun00008_ip = 47; continue _fun00007 }
 45:
                    zuuluu = 0;
 47:
                    michal = {};
                    oscard = 150;
                    michal['duration'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            report = {};
            output = 15;
            output = sizing[output];
            output = result.bind(tangon)(output);
            output = output.withTiming;
            report['withTiming'] = output;
            report['imageFinishedLoading'] = option;
            entity['__closure'] = report;
            report = 10312910803439.0;
            entity['__workletHash'] = report;
            report = _closure1_slot15;
            entity['__initData'] = report;
            update = michal.bind(zuuluu)(entity);
            report = _closure1_slot4;
            zuuluu = report.useMemo;
            entity = oscard.height;
            michal = new Array(3);
            michal[0] = entity;
            entity = oscard.placeholder;
            michal[1] = entity;
            entity = oscard.width;
            michal[2] = entity;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = entity.placeholder;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 19:
                    entity = undefined;
                    return entity;
 23:
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 16;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.createThumbhashImageFromPlaceholder;
                    michal = _closure2_slot0;
                    zuuluu = michal.placeholder;
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity['uri'] = zuuluu;
                    zuuluu = michal.width;
                    entity['width'] = zuuluu;
                    michal = michal.height;
                    entity['height'] = michal;
                    return entity;
                }
            };
            ctrled = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot12;
            entity = {};
            result = _closure1_slot11;
            option = _closure1_slot1;
            report = sizing[golfie];
            report = option.bind(tangon)(report);
            output = report.View;
            report = {};
            echoed = new Array(2);
            echoed[0] = update;
            update = foxtra.thumbhashMedia;
            echoed[1] = update;
            report['style'] = echoed;
            source = _closure1_slot11;
            echoed = 17;
            echoed = sizing[echoed];
            update = option.bind(tangon)(echoed);
            echoed = {};
            echoed['source'] = ctrled;
            ctrled = new Array(3);
            ctrled[0] = kiloes;
            vacuum = foxtra.media;
            ctrled[1] = vacuum;
            ctrled[2] = backup;
            echoed['style'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            report['children'] = echoed;
            output = result.bind(tangon)(output, report);
            report = new Array(2);
            report[0] = output;
            verify = _closure1_slot11;
            golfie = sizing[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Image;
            golfie = {};
            golfie['source'] = oscard;
            sizing = foxtra.media;
            foxtra = new Array(3);
            foxtra[0] = sizing;
            foxtra[1] = kiloes;
            foxtra[2] = backup;
            golfie['style'] = foxtra;
            romeon = function() { // Original name: onLoadEnd
                zuuluu = _closure2_slot2;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            golfie['onLoadEnd'] = romeon;
            if(!yankee) { _fun00006_ip = 445; continue _fun00005 }
 442:
            offset = 100;
 445:
            golfie['blurRadius'] = offset;
            oscard = oscard.uri;
            oscard = verify.bind(tangon)(option, golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: Media
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            foxtra = michal.source;
            romeon = michal.dimensions;
            entity = michal.initialIndex;
            var _closure2_slot0 = entity;
            verify = michal.handlePressMedia;
            var _closure2_slot1 = verify;
            yankee = michal.style;
            offset = michal.visible;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            michal = _closure1_slot14;
            config = michal.bind(tangon)();
            zuuluu = _closure1_slot4;
            michal = zuuluu.useRef;
            option = null;
            oscard = michal.bind(zuuluu)(option);
            var _closure2_slot2 = oscard;
            report = _closure1_slot4;
            zuuluu = report.useState;
            backup = foxtra.spoiler;
            michal = option != backup;
            if(!michal) { _fun00012_ip = 117; continue _fun00011 }
 114:
            michal = backup;
 117:
            report = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            michal = 0;
            backup = zuuluu[michal];
            _closure2_slot3 = backup;
            michal = 1;
            michal = zuuluu[michal];
            _closure2_slot4 = michal;
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = new Array(3);
            michal[0] = verify;
            michal[1] = entity;
            michal[2] = backup;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot3;
                    if(michal) { _fun00014_ip = 42; continue _fun00013 }
 10:
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    michal = _closure2_slot2;
                    zuuluu['ref'] = michal;
                    michal = _closure2_slot0;
                    zuuluu['initialIndex'] = michal;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00014_ip = 55; continue _fun00013;
 42:
                    zuuluu = _closure2_slot4;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            verify = zuuluu[entity];
            output = michal.bind(tangon)(verify);
            sizing = output.useStateFromStores;
            verify = _closure1_slot8;
            kiloes = new Array(1);
            kiloes[0] = verify;
            verify = function() {
                michal = _closure1_slot8;
                entity = michal.videosMuted;
                entity = entity.bind(michal)();
                return entity;
            };
            source = sizing.bind(output)(kiloes, verify);
            _closure2_slot5 = source;
            entity = zuuluu[entity];
            verify = michal.bind(tangon)(entity);
            zuuluu = verify.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.useReducedMotion;
                return entity;
            };
            verify = zuuluu.bind(verify)(michal, entity);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot5;
            entity = {};
            entity['ref'] = oscard;
            entity['onPress'] = report;
            entity['style'] = romeon;
            oscard = backup;
            if(!oscard) { _fun00012_ip = 488; continue _fun00011 }
 318:
            sizing = _closure1_slot11;
            kiloes = _closure1_slot6;
            report = {};
            output = config.centerContainer;
            report['style'] = output;
            echoed = _closure1_slot11;
            result = _closure1_slot6;
            output = {};
            update = config.spoilerText;
            output['style'] = update;
            sequen = _closure1_slot11;
            target = _closure1_slot0;
            status = _closure1_slot2;
            update = 18;
            update = status[update];
            update = target.bind(tangon)(update);
            vacuum = update.Text;
            update = {'maxFontSizeMultiplier': 1, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            record = 19;
            cntext = status[record];
            cntext = target.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            record = status[record];
            record = target.bind(tangon)(record);
            record = record.t;
            record = record.F+x38P;
            cntext = cntext.bind(papara)(record);
            record = cntext.toUpperCase;
            record = record.bind(cntext)();
            update['children'] = record;
            update = sequen.bind(tangon)(vacuum, update);
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            report['children'] = output;
            oscard = sizing.bind(tangon)(kiloes, report);
 488:
            report = new Array(4);
            report[0] = oscard;
            oscard = foxtra.videoURI;
            oscard = option != oscard;
            if(!oscard) { _fun00012_ip = 512; continue _fun00011 }
 509:
            oscard = !backup;
 512:
            if(!oscard) { _fun00012_ip = 527; continue _fun00011 }
 515:
            kiloes = _closure1_slot16;
            kiloes = kiloes.bind(tangon)(foxtra);
            oscard = !kiloes;
 527:
            if(!oscard) { _fun00012_ip = 533; continue _fun00011 }
 530:
            oscard = verify;
 533:
            if(!oscard) { _fun00012_ip = 676; continue _fun00011 }
 539:
            sizing = _closure1_slot11;
            kiloes = _closure1_slot6;
            verify = {};
            output = config.centerContainer;
            verify['style'] = output;
            echoed = _closure1_slot11;
            result = _closure1_slot6;
            output = {};
            update = config.videoIcon;
            output['style'] = update;
            sequen = _closure1_slot11;
            vacuum = _closure1_slot0;
            papara = _closure1_slot2;
            update = 20;
            update = papara[update];
            update = vacuum.bind(tangon)(update);
            vacuum = update.PlayIcon;
            update = {};
            cntext = _closure1_slot1;
            record = 9;
            record = papara[record];
            record = cntext.bind(tangon)(record);
            record = record.colors;
            record = record.REDESIGN_BUTTON_TERTIARY_TEXT;
            update['color'] = record;
            record = 'lg';
            update['size'] = record;
            update = sequen.bind(tangon)(vacuum, update);
            output['children'] = update;
            output = echoed.bind(tangon)(result, output);
            verify['children'] = output;
            oscard = sizing.bind(tangon)(kiloes, verify);
 676:
            report[1] = oscard;
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            kiloes = 21;
            oscard = oscard[kiloes];
            sizing = verify.bind(tangon)(oscard);
            verify = sizing.isVideo;
            oscard = foxtra.uri;
            verify = verify.bind(sizing)(oscard);
            oscard = null;
            if(!verify) { _fun00012_ip = 1026; continue _fun00011 }
 725:
            verify = _closure1_slot16;
            verify = verify.bind(tangon)(foxtra);
            oscard = null;
            if(verify) { _fun00012_ip = 1026; continue _fun00011 }
 742:
            output = _closure1_slot11;
            sizing = _closure1_slot6;
            verify = {};
            result = config.absoluteContainer;
            verify['style'] = result;
            update = _closure1_slot11;
            echoed = _closure1_slot0;
            vacuum = _closure1_slot2;
            result = 22;
            result = vacuum[result];
            result = echoed.bind(tangon)(result);
            echoed = result.PressableOpacity;
            result = {};
            sequen = config.muteIcon;
            vacuum = new Array(2);
            vacuum[0] = sequen;
            if(source) { _fun00012_ip = 819; continue _fun00011 }
 811:
            sequen = config.iconBgSelected;
            _fun00012_ip = 825; continue _fun00011;
 819:
            sequen = config.iconBg;
 825:
            vacuum[1] = sequen;
            result['style'] = vacuum;
            ctrled = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.setVideosMuted;
                entity = _closure2_slot5;
                entity = !entity;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            result['onPress'] = ctrled;
            ctrled = 0.8;
            result['activeOpacity'] = ctrled;
            sequen = _closure1_slot11;
            vacuum = _closure1_slot0;
            cntext = _closure1_slot2;
            if(source) { _fun00012_ip = 941; continue _fun00011 }
 874:
            source = 25;
            source = cntext[source];
            source = vacuum.bind(tangon)(source);
            ctrled = source.VoiceNormalIcon;
            source = {};
            record = _closure1_slot1;
            config = 9;
            config = cntext[config];
            config = record.bind(tangon)(config);
            config = config.colors;
            config = config.BLACK;
            source['color'] = config;
            config = 'sm';
            source['size'] = config;
            source = sequen.bind(tangon)(ctrled, source);
            _fun00012_ip = 1006; continue _fun00011;
 941:
            ctrled = 24;
            ctrled = cntext[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            vacuum = ctrled.VoiceXIcon;
            ctrled = {};
            record = _closure1_slot1;
            config = 9;
            config = cntext[config];
            config = record.bind(tangon)(config);
            config = config.colors;
            config = config.INTERACTIVE_NORMAL;
            ctrled['color'] = config;
            config = 'sm';
            ctrled['size'] = config;
            source = sequen.bind(tangon)(vacuum, ctrled);
 1006:
            result['children'] = source;
            result = update.bind(tangon)(echoed, result);
            verify['children'] = result;
            oscard = output.bind(tangon)(sizing, verify);
 1026:
            report[2] = oscard;
            verify = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[kiloes];
            kiloes = verify.bind(tangon)(oscard);
            verify = kiloes.isVideo;
            oscard = foxtra.uri;
            oscard = verify.bind(kiloes)(oscard);
            if(oscard) { _fun00012_ip = 1079; continue _fun00011 }
 1067:
            oscard = _closure1_slot16;
            oscard = oscard.bind(tangon)(foxtra);
            if(!oscard) { _fun00012_ip = 1089; continue _fun00011 }
 1079:
            oscard = foxtra.videoURI;
            if(!(option == oscard)) { _fun00012_ip = 1125; continue _fun00011 }
 1089:
            verify = _closure1_slot11;
            option = _closure1_slot18;
            oscard = {};
            oscard['source'] = foxtra;
            oscard['style'] = yankee;
            oscard['dimensions'] = romeon;
            oscard['isSpoiler'] = backup;
            oscard = verify.bind(tangon)(option, oscard);
            _fun00012_ip = 1178; continue _fun00011;
 1125:
            verify = _closure1_slot11;
            option = _closure1_slot17;
            golfie = {};
            golfie['source'] = foxtra;
            foxtra = romeon.height;
            golfie['height'] = foxtra;
            romeon = romeon.width;
            golfie['width'] = romeon;
            golfie['style'] = yankee;
            offset = !offset;
            offset = !offset;
            golfie['autoplay'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1178:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: OneImageRow
        entity = argFoo;
        option = entity.source;
        verify = entity.handlePressMedia;
        michal = entity.widthOverride;
        entity = _closure1_slot14;
        tangon = undefined;
        golfie = entity.bind(tangon)();
        entity = _closure1_slot27;
        offset = entity.bind(tangon)(michal);
        zuuluu = _closure1_slot11;
        michal = _closure1_slot6;
        entity = {};
        yankee = golfie.imageRow;
        oscard = new Array(2);
        oscard[0] = yankee;
        golfie = golfie.topRow;
        oscard[1] = golfie;
        entity['style'] = oscard;
        golfie = _closure1_slot11;
        oscard = _closure1_slot19;
        report = {};
        report['handlePressMedia'] = verify;
        verify = 0;
        report['initialIndex'] = verify;
        report['source'] = option;
        option = {};
        option['width'] = offset;
        verify = 1.5;
        verify = offset / verify;
        option['height'] = verify;
        report['dimensions'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ThreeImagesRow
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.sources;
            offset = entity.start;
            option = entity.end;
            michal = entity.offset;
            var _closure2_slot0 = michal;
            michal = entity.handlePressMedia;
            var _closure2_slot1 = michal;
            zuuluu = entity.widthOverride;
            michal = _closure1_slot14;
            tangon = undefined;
            verify = michal.bind(tangon)();
            michal = _closure1_slot27;
            michal = michal.bind(tangon)(zuuluu);
            var _closure2_slot2 = michal;
            zuuluu = _closure1_slot11;
            michal = _closure1_slot6;
            entity = {};
            yankee = verify.imageRow;
            oscard = new Array(3);
            oscard[0] = yankee;
            if(!offset) { _fun00016_ip = 106; continue _fun00015 }
 100:
            offset = verify.topRow;
 106:
            oscard[1] = offset;
            if(!option) { _fun00016_ip = 119; continue _fun00015 }
 113:
            option = verify.bottomRow;
 119:
            oscard[2] = option;
            entity['style'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                michal = argBar;
                report = _closure1_slot11;
                tangon = _closure1_slot19;
                zuuluu = {};
                entity = _closure2_slot1;
                zuuluu['handlePressMedia'] = entity;
                entity = _closure2_slot0;
                oscard = entity + michal;
                zuuluu['initialIndex'] = oscard;
                oscard = argFoo;
                zuuluu['source'] = oscard;
                oscard = {};
                verify = _closure2_slot2;
                golfie = 3;
                offset = verify / golfie;
                option = 2.6666666666666665;
                offset = offset - option;
                oscard['width'] = offset;
                golfie = verify / golfie;
                golfie = golfie - option;
                oscard['height'] = golfie;
                zuuluu['dimensions'] = oscard;
                michal = entity + michal;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: TwoImagesRow
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golfie = entity.sources;
            michal = entity.handlePressMedia;
            var _closure2_slot0 = michal;
            option = entity.end;
            zuuluu = entity.widthOverride;
            michal = _closure1_slot14;
            tangon = undefined;
            verify = michal.bind(tangon)();
            michal = _closure1_slot27;
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = {};
            oscard = 2;
            offset = zuuluu / oscard;
            offset = offset - oscard;
            michal['width'] = offset;
            zuuluu = zuuluu / oscard;
            oscard = zuuluu - oscard;
            zuuluu = 0.75;
            zuuluu = oscard / zuuluu;
            michal['height'] = zuuluu;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot11;
            michal = _closure1_slot6;
            entity = {};
            offset = verify.imageRow;
            oscard = new Array(3);
            oscard[0] = offset;
            offset = verify.topRow;
            oscard[1] = offset;
            if(!option) { _fun00018_ip = 144; continue _fun00017 }
 138:
            option = verify.bottomRow;
 144:
            oscard[2] = option;
            entity['style'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                report = argBar;
                tangon = _closure1_slot11;
                zuuluu = _closure1_slot19;
                michal = {};
                oscard = _closure2_slot0;
                michal['handlePressMedia'] = oscard;
                michal['initialIndex'] = report;
                oscard = argFoo;
                michal['source'] = oscard;
                entity = _closure2_slot1;
                michal['dimensions'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal, report);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: ThreeImages
        entity = argFoo;
        sizing = entity.sources;
        output = entity.handlePressMedia;
        michal = entity.widthOverride;
        entity = _closure1_slot14;
        tangon = undefined;
        verify = entity.bind(tangon)();
        entity = _closure1_slot27;
        kiloes = entity.bind(tangon)(michal);
        zuuluu = _closure1_slot13;
        michal = _closure1_slot6;
        entity = {};
        oscard = verify.imagesContainer;
        report = new Array(2);
        report[0] = oscard;
        oscard = verify.imageRow;
        report[1] = oscard;
        entity['style'] = report;
        golfie = _closure1_slot11;
        oscard = _closure1_slot6;
        report = {};
        option = verify.leftColumn;
        report['style'] = option;
        yankee = _closure1_slot11;
        romeon = _closure1_slot19;
        option = {};
        option['handlePressMedia'] = output;
        foxtra = 0;
        option['initialIndex'] = foxtra;
        foxtra = sizing[foxtra];
        option['source'] = foxtra;
        result = {};
        foxtra = 2;
        echoed = foxtra * kiloes;
        backup = 3;
        update = echoed / backup;
        echoed = 4;
        echoed = update - echoed;
        result['width'] = echoed;
        echoed = foxtra * kiloes;
        echoed = echoed / backup;
        result['height'] = echoed;
        option['dimensions'] = result;
        option = yankee.bind(tangon)(romeon, option);
        report['children'] = option;
        oscard = golfie.bind(tangon)(oscard, report);
        report = new Array(2);
        report[0] = oscard;
        option = _closure1_slot13;
        golfie = _closure1_slot6;
        oscard = {};
        verify = verify.rightColumn;
        oscard['style'] = verify;
        yankee = _closure1_slot11;
        verify = {};
        verify['handlePressMedia'] = output;
        result = 1;
        verify['initialIndex'] = result;
        result = sizing[result];
        verify['source'] = result;
        result = {};
        echoed = kiloes / backup;
        result['width'] = echoed;
        echoed = kiloes / backup;
        result['height'] = echoed;
        verify['dimensions'] = result;
        yankee = yankee.bind(tangon)(romeon, verify);
        verify = new Array(2);
        verify[0] = yankee;
        yankee = _closure1_slot11;
        offset = {};
        offset['handlePressMedia'] = output;
        offset['initialIndex'] = foxtra;
        foxtra = sizing[foxtra];
        offset['source'] = foxtra;
        foxtra = {};
        sizing = kiloes / backup;
        foxtra['width'] = sizing;
        backup = kiloes / backup;
        foxtra['height'] = backup;
        offset['dimensions'] = foxtra;
        offset = yankee.bind(tangon)(romeon, offset);
        verify[1] = offset;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: FourImages
        entity = argFoo;
        kiloes = entity.sources;
        backup = entity.handlePressMedia;
        michal = entity.widthOverride;
        entity = _closure1_slot14;
        tangon = undefined;
        yankee = entity.bind(tangon)();
        entity = _closure1_slot27;
        entity = entity.bind(tangon)(michal);
        foxtra = {};
        sizing = 2;
        zuuluu = entity / sizing;
        michal = 4;
        zuuluu = zuuluu - michal;
        foxtra['width'] = zuuluu;
        entity = entity / sizing;
        michal = entity - michal;
        entity = 1.5;
        entity = michal / entity;
        foxtra['height'] = entity;
        zuuluu = _closure1_slot13;
        michal = _closure1_slot6;
        entity = {};
        report = yankee.imagesContainer;
        entity['style'] = report;
        golfie = _closure1_slot13;
        oscard = _closure1_slot6;
        report = {};
        verify = yankee.imageRow;
        option = new Array(2);
        option[0] = verify;
        verify = yankee.topRow;
        option[1] = verify;
        report['style'] = option;
        verify = _closure1_slot11;
        romeon = _closure1_slot19;
        option = {};
        option['handlePressMedia'] = backup;
        output = 0;
        option['initialIndex'] = output;
        output = kiloes[output];
        option['source'] = output;
        option['dimensions'] = foxtra;
        verify = verify.bind(tangon)(romeon, option);
        option = new Array(2);
        option[0] = verify;
        output = _closure1_slot11;
        verify = {};
        verify['handlePressMedia'] = backup;
        result = 1;
        verify['initialIndex'] = result;
        result = kiloes[result];
        verify['source'] = result;
        verify['dimensions'] = foxtra;
        verify = output.bind(tangon)(romeon, verify);
        option[1] = verify;
        report['children'] = option;
        oscard = golfie.bind(tangon)(oscard, report);
        report = new Array(2);
        report[0] = oscard;
        option = _closure1_slot13;
        golfie = _closure1_slot6;
        oscard = {};
        output = yankee.imageRow;
        verify = new Array(2);
        verify[0] = output;
        yankee = yankee.bottomRow;
        verify[1] = yankee;
        oscard['style'] = verify;
        yankee = _closure1_slot11;
        verify = {};
        verify['handlePressMedia'] = backup;
        verify['initialIndex'] = sizing;
        sizing = kiloes[sizing];
        verify['source'] = sizing;
        verify['dimensions'] = foxtra;
        yankee = yankee.bind(tangon)(romeon, verify);
        verify = new Array(2);
        verify[0] = yankee;
        yankee = _closure1_slot11;
        offset = {};
        offset['handlePressMedia'] = backup;
        backup = 3;
        offset['initialIndex'] = backup;
        backup = kiloes[backup];
        offset['source'] = backup;
        offset['dimensions'] = foxtra;
        offset = yankee.bind(tangon)(romeon, offset);
        verify[1] = offset;
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: SingleImage
        michal = argFoo;
        yankee = michal.source;
        var _closure2_slot0 = yankee;
        romeon = michal.initialIndex;
        foxtra = michal.handlePressMedia;
        option = michal.visible;
        zuuluu = michal.widthOverride;
        michal = _closure1_slot14;
        tangon = undefined;
        verify = michal.bind(tangon)();
        michal = _closure1_slot27;
        golfie = michal.bind(tangon)(zuuluu);
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot4;
        zuuluu = oscard.useMemo;
        offset = yankee.width;
        michal = new Array(3);
        michal[0] = offset;
        offset = yankee.height;
        michal[1] = offset;
        michal[2] = golfie;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = michal.width;
                michal = michal.height;
                zuuluu = zuuluu / michal;
                michal = 1;
                if(!(!(zuuluu >= michal))) { _fun00020_ip = 109; continue _fun00019 }
 28:
                michal = global;
                oscard = michal.Math;
                report = oscard.min;
                michal = _closure2_slot0;
                tangon = michal.height;
                michal = 330;
                tangon = report.bind(oscard)(tangon, michal);
                report = tangon * zuuluu;
                michal = _closure2_slot1;
                if(!(!(report > michal))) { _fun00020_ip = 86; continue _fun00019 }
 74:
                michal = {};
                michal['width'] = report;
                michal['height'] = tangon;
                _fun00020_ip = 107; continue _fun00019;
 86:
                tangon = {};
                report = _closure2_slot1;
                tangon['width'] = report;
                report = report / zuuluu;
                tangon['height'] = report;
                michal = tangon;
 107:
                return michal;
 109:
                michal = global;
                report = michal.Math;
                tangon = report.min;
                michal = _closure2_slot0;
                michal = michal.width;
                entity = _closure2_slot1;
                michal = tangon.bind(report)(michal, entity);
                entity = {};
                zuuluu = michal / zuuluu;
                entity['height'] = zuuluu;
                entity['width'] = michal;
                return entity;
            }
        };
        offset = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot11;
        michal = _closure1_slot6;
        entity = {};
        oscard = verify.imagesContainer;
        entity['style'] = oscard;
        golfie = _closure1_slot11;
        oscard = _closure1_slot19;
        report = {};
        report['handlePressMedia'] = foxtra;
        report['initialIndex'] = romeon;
        report['source'] = yankee;
        report['dimensions'] = offset;
        verify = verify.singleImage;
        report['style'] = verify;
        report['visible'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    michal = function(argFoo) { // Original name: GravityAttachmentMediaMosaic
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            verify = entity.sources;
            var _closure2_slot0 = verify;
            offset = entity.handlePressMedia;
            var _closure2_slot1 = offset;
            golfie = entity.visible;
            yankee = entity.widthOverride;
            var _closure2_slot2 = yankee;
            tangon = verify.length;
            var _closure2_slot3 = tangon;
            entity = _closure1_slot14;
            oscard = undefined;
            foxtra = entity.bind(oscard)();
            option = _closure1_slot4;
            report = option.useMemo;
            michal = new Array(2);
            michal[0] = tangon;
            michal[1] = verify;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = new Array(0);
                    michal = _closure2_slot3;
                    tangon = 3;
                    michal = michal % tangon;
                    option = 0;
                    zuuluu = tangon;
                    if(!(option !== michal)) { _fun00024_ip = 30; continue _fun00023 }
 27:
                    zuuluu = michal;
 30:
                    oscard = entity.push;
                    golfie = _closure2_slot0;
                    michal = golfie.slice;
                    michal = michal.bind(golfie)(option, zuuluu);
                    michal = oscard.bind(entity)(michal);
                    michal = _closure2_slot3;
                    if(!(zuuluu < michal)) { _fun00024_ip = 103; continue _fun00023 }
 63:
                    golfie = entity.push;
                    option = _closure2_slot0;
                    michal = option.slice;
                    oscard = zuuluu + tangon;
                    michal = michal.bind(option)(zuuluu, oscard);
                    michal = golfie.bind(entity)(michal);
                    michal = _closure2_slot3;
                    zuuluu = oscard;
                    if(zuuluu < michal) { _fun00024_ip = 63; continue _fun00023 }
 103:
                    return entity;
                }
            };
            backup = report.bind(option)(entity, michal);
            var _closure2_slot4 = backup;
            option = 0;
            entity = null;
            if(!(option !== tangon)) { _fun00022_ip = 298; continue _fun00021 }
 112:
            michal = 1;
            if(!(michal !== tangon)) { _fun00022_ip = 251; continue _fun00021 }
 122:
            michal = 3;
            if(!(michal !== tangon)) { _fun00022_ip = 218; continue _fun00021 }
 129:
            michal = 4;
            if(!(michal !== tangon)) { _fun00022_ip = 185; continue _fun00021 }
 136:
            report = _closure1_slot11;
            tangon = _closure1_slot6;
            michal = {};
            foxtra = foxtra.imagesContainer;
            michal['style'] = foxtra;
            foxtra = backup.map;
            romeon = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    oscard = argFoo;
                    report = argBar;
                    entity = oscard.length;
                    golfie = 1;
                    if(!(golfie !== entity)) { _fun00026_ip = 229; continue _fun00025 }
 21:
                    michal = oscard.length;
                    entity = 2;
                    if(!(entity !== michal)) { _fun00026_ip = 158; continue _fun00025 }
 36:
                    michal = 0;
                    option = michal === report;
                    verify = 0;
                    if(option) { _fun00026_ip = 78; continue _fun00025 }
 47:
                    entity = _closure2_slot4;
                    entity = entity[michal];
                    michal = entity.length;
                    zuuluu = report - golfie;
                    entity = 3;
                    entity = entity * zuuluu;
                    verify = michal + entity;
 78:
                    tangon = _closure1_slot11;
                    zuuluu = _closure1_slot21;
                    michal = {};
                    offset = _closure2_slot2;
                    michal['widthOverride'] = offset;
                    offset = _closure2_slot1;
                    michal['handlePressMedia'] = offset;
                    michal['offset'] = verify;
                    michal['sources'] = oscard;
                    michal['start'] = option;
                    entity = _closure2_slot4;
                    entity = entity.length;
                    entity = entity - golfie;
                    entity = report === entity;
                    michal['end'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal, report);
                    return entity;
 158:
                    tangon = _closure1_slot11;
                    zuuluu = _closure1_slot22;
                    michal = {};
                    option = _closure2_slot2;
                    michal['widthOverride'] = option;
                    michal['sources'] = oscard;
                    option = _closure2_slot1;
                    michal['handlePressMedia'] = option;
                    entity = _closure2_slot4;
                    entity = entity.length;
                    entity = entity - golfie;
                    entity = report === entity;
                    michal['end'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal, report);
                    return entity;
 229:
                    tangon = _closure1_slot11;
                    zuuluu = _closure1_slot20;
                    michal = {};
                    entity = _closure2_slot1;
                    michal['handlePressMedia'] = entity;
                    entity = 0;
                    entity = oscard[entity];
                    michal['source'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal, report);
                    return entity;
                }
            };
            romeon = foxtra.bind(backup)(romeon);
            michal['children'] = romeon;
            michal = report.bind(oscard)(tangon, michal);
            _fun00022_ip = 216; continue _fun00021;
 185:
            romeon = _closure1_slot11;
            report = _closure1_slot24;
            tangon = {};
            tangon['widthOverride'] = yankee;
            tangon['handlePressMedia'] = offset;
            tangon['sources'] = verify;
            michal = romeon.bind(oscard)(report, tangon);
 216:
            _fun00022_ip = 249; continue _fun00021;
 218:
            romeon = _closure1_slot11;
            report = _closure1_slot23;
            tangon = {};
            tangon['widthOverride'] = yankee;
            tangon['handlePressMedia'] = offset;
            tangon['sources'] = verify;
            michal = romeon.bind(oscard)(report, tangon);
 249:
            _fun00022_ip = 295; continue _fun00021;
 251:
            report = _closure1_slot11;
            tangon = _closure1_slot25;
            zuuluu = {};
            zuuluu['widthOverride'] = yankee;
            zuuluu['initialIndex'] = option;
            zuuluu['handlePressMedia'] = offset;
            option = verify[option];
            zuuluu['source'] = option;
            zuuluu['visible'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 295:
            entity = michal;
 298:
            return entity;
        }
    };
    var _closure1_slot26 = michal;
    entity = function(argFoo) { // Original name: useMaxWidth
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot4;
            tangon = report.useContext;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 26;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.ICYMIContext;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = null;
            if(!(tangon == entity)) { _fun00028_ip = 143; continue _fun00027 }
 55:
            tangon = tangon == zuuluu;
            option = undefined;
            if(tangon) { _fun00028_ip = 69; continue _fun00027 }
 64:
            option = zuuluu.width;
 69:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 9;
            tangon = golfie[zuuluu];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.spacing;
            tangon = tangon.PX_40;
            tangon = option - tangon;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.spacing;
            zuuluu = zuuluu.PX_12;
            zuuluu = tangon - zuuluu;
            tangon = _closure1_slot10;
            michal = 2;
            michal = michal * tangon;
            entity = zuuluu - michal;
 143:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.Pressable;
    var _closure1_slot5 = verify;
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ICYMI_MARGIN;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot11 = option;
    option = report.Fragment;
    var _closure1_slot12 = option;
    report = report.jsxs;
    var _closure1_slot13 = report;
    report = 8;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = function() {
        entity = {};
        michal = {};
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 9;
        golfie = oscard[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.radii;
        golfie = golfie.xs;
        michal['borderRadius'] = golfie;
        entity['media'] = michal;
        michal = {};
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.colors;
        golfie = golfie.BG_SURFACE_RAISED;
        michal['backgroundColor'] = golfie;
        entity['video'] = michal;
        michal = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
        entity['thumbhashMedia'] = michal;
        michal = {};
        golfie = 4;
        michal['gap'] = golfie;
        entity['container'] = michal;
        michal = {'justifyContent': 'center', 'gap': 4, 'width': '100%'};
        entity['imagesContainer'] = michal;
        michal = {'flexDirection': 'row', 'gap': 4};
        entity['imageRow'] = michal;
        michal = {};
        golfie = 'hidden';
        michal['overflow'] = golfie;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderTopEndRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderTopStartRadius'] = option;
        entity['topRow'] = michal;
        michal = {};
        michal['overflow'] = golfie;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderBottomEndRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderBottomStartRadius'] = option;
        entity['bottomRow'] = michal;
        michal = {};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.colors;
        option = option.BACKGROUND_MOBILE_SECONDARY;
        michal['backgroundColor'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.round;
        michal['borderRadius'] = option;
        option = 16;
        michal['padding'] = option;
        entity['videoIcon'] = michal;
        michal = {'position': 'absolute', 'borderRadius': null, 'padding': null, 'bottom': 8, 'right': 8};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.round;
        michal['borderRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.spacing;
        option = option.PX_4;
        michal['padding'] = option;
        entity['muteIcon'] = michal;
        michal = {};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.colors;
        option = option.INTERACTIVE_ACTIVE;
        michal['backgroundColor'] = option;
        entity['muteIconActive'] = michal;
        michal = {};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.colors;
        option = option.SPOILER_HIDDEN_BACKGROUND;
        michal['backgroundColor'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.spacing;
        option = option.PX_12;
        michal['paddingHorizontal'] = option;
        option = 6;
        michal['paddingVertical'] = option;
        entity['spoilerText'] = michal;
        michal = {};
        michal['overflow'] = golfie;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderTopStartRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderBottomStartRadius'] = option;
        entity['leftColumn'] = michal;
        michal = {};
        michal['overflow'] = golfie;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderTopEndRadius'] = option;
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderBottomEndRadius'] = option;
        option = 2;
        michal['gap'] = option;
        entity['rightColumn'] = michal;
        michal = {};
        michal['overflow'] = golfie;
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.radii;
        golfie = golfie.lg;
        michal['borderRadius'] = golfie;
        entity['singleImage'] = michal;
        michal = {'position': 'absolute', 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'zIndex': 2};
        entity['centerContainer'] = michal;
        michal = {'position': 'absolute', 'width': '100%', 'height': '100%', 'zIndex': 2};
        entity['absoluteContainer'] = michal;
        michal = {};
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.colors;
        golfie = golfie.BG_BASE_SECONDARY;
        michal['backgroundColor'] = golfie;
        entity['iconBg'] = michal;
        michal = {};
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.WHITE;
        michal['backgroundColor'] = zuuluu;
        entity['iconBgSelected'] = michal;
        return entity;
    };
    report = option.bind(verify)(report);
    var _closure1_slot14 = report;
    report = {};
    option = 'function GravityMediaMosaicTsx1(){const{withTiming,imageFinishedLoading}=this.__closure;return{opacity:withTiming(imageFinishedLoading?0:1,{duration:150})};}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = 34;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/media/GravityMediaMosaic.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: GravityMediaMosaic
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            var _closure2_slot0 = michal;
            sizing = entity.widthOverride;
            var _closure2_slot1 = sizing;
            foxtra = entity.visible;
            var _closure2_slot2 = foxtra;
            oscard = undefined;
            var _closure2_slot6 = oscard;
            entity = _closure1_slot14;
            offset = entity.bind(oscard)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 12;
            entity = tangon[entity];
            report = zuuluu.bind(oscard)(entity);
            tangon = report.useStateFromStores;
            entity = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getChannel;
                tangon = _closure2_slot0;
                entity = tangon.getChannelId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = tangon.bind(report)(zuuluu, entity);
            var _closure2_slot3 = romeon;
            report = _closure1_slot4;
            tangon = report.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            entity = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 27;
                zuuluu = golfie[zuuluu];
                report = undefined;
                verify = oscard.bind(report)(zuuluu);
                option = verify.extractMediaSourcesFromMessage;
                tangon = _closure2_slot0;
                zuuluu = 28;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(report)(zuuluu);
                offset = zuuluu.GRAVITY_VALID_EMBED_TYPES;
                backup = verify;
                foxtra = tangon;
                romeon = tangon;
                yankee = undefined;
                option = backup[option](foxtra, romeon, yankee, offset, verify);
                tangon = option.map;
                zuuluu = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 27;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.flattenSource;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = tangon.bind(option)(zuuluu);
                tangon = 29;
                tangon = golfie[tangon];
                oscard = oscard.bind(report)(tangon);
                tangon = oscard.partition;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.accessoryType;
                    entity = 'embed';
                    entity = entity === michal;
                    return entity;
                };
                tangon = tangon.bind(oscard)(zuuluu, michal);
                michal = _closure1_slot3;
                entity = 2;
                tangon = michal.bind(report)(tangon, entity);
                entity = 0;
                michal = tangon[entity];
                entity = {};
                entity['allMediaSources'] = zuuluu;
                zuuluu = 1;
                zuuluu = tangon[zuuluu];
                entity['nonEmbedSources'] = zuuluu;
                entity['embedSources'] = michal;
                return entity;
            };
            zuuluu = tangon.bind(report)(entity, zuuluu);
            entity = zuuluu.allMediaSources;
            var _closure2_slot4 = entity;
            kiloes = zuuluu.nonEmbedSources;
            var _closure2_slot5 = kiloes;
            yankee = zuuluu.embedSources;
            report = _closure1_slot4;
            tangon = report.useCallback;
            option = michal.channel_id;
            zuuluu = new Array(6);
            zuuluu[0] = option;
            option = michal.id;
            zuuluu[1] = option;
            zuuluu[2] = entity;
            option = null;
            backup = option == romeon;
            entity = undefined;
            if(backup) { _fun00030_ip = 212; continue _fun00029 }
 207:
            entity = romeon.guild_id;
 212:
            zuuluu[3] = entity;
            backup = option == romeon;
            entity = undefined;
            if(backup) { _fun00030_ip = 230; continue _fun00029 }
 225:
            entity = romeon.type;
 230:
            zuuluu[4] = entity;
            backup = option == romeon;
            entity = undefined;
            if(backup) { _fun00030_ip = 248; continue _fun00029 }
 243:
            entity = romeon.name;
 248:
            zuuluu[5] = entity;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.ref;
                var _closure3_slot0 = zuuluu;
                entity = entity.initialIndex;
                var _closure3_slot1 = entity;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 30;
                tangon = zuuluu[entity];
                entity = undefined;
                verify = report.bind(entity)(tangon);
                option = verify.trackItemInteraction;
                tangon = _closure2_slot0;
                golfie = tangon.id;
                oscard = 'message';
                tangon = 'press_media';
                tangon = option.bind(verify)(golfie, oscard, tangon);
                tangon = 32;
                tangon = zuuluu[tangon];
                report = report.bind(entity)(tangon);
                tangon = 31;
                tangon = zuuluu[tangon];
                zuuluu = zuuluu.paths;
                tangon = report.bind(entity)(tangon, zuuluu);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.openMediaModal;
                        report = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 33;
                        michal = michal[entity];
                        entity = undefined;
                        verify = report.bind(entity)(michal);
                        option = verify.ack;
                        michal = _closure2_slot0;
                        foxtra = michal.channel_id;
                        offset = michal.id;
                        backup = verify;
                        romeon = true;
                        yankee = true;
                        michal = backup[option](foxtra, romeon, yankee, offset, verify);
                        michal = new Array(0);
                        var _closure4_slot0 = michal;
                        oscard = _closure2_slot4;
                        report = oscard.forEach;
                        zuuluu = function(argFoo) {
                            tangon = _closure4_slot0;
                            zuuluu = tangon.push;
                            michal = {};
                            oscard = argFoo;
                            golfie = michal;
                            entity = copyDataProperties(golfie, oscard);
                            entity = undefined;
                            report = 'embedURI';
                            michal[report] = entity;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = {};
                        report = false;
                        zuuluu['disableDownload'] = report;
                        zuuluu['initialSources'] = michal;
                        michal = _closure3_slot1;
                        zuuluu['initialIndex'] = michal;
                        michal = 'Channel';
                        zuuluu['analyticsSource'] = michal;
                        oscard = _closure2_slot3;
                        michal = null;
                        option = michal == oscard;
                        oscard = undefined;
                        if(option) { _fun00032_ip = 158; continue _fun00031 }
 149:
                        option = _closure2_slot3;
                        oscard = option.guild_id;
 158:
                        zuuluu['guildId'] = oscard;
                        oscard = _closure2_slot0;
                        oscard = oscard.channel_id;
                        zuuluu['channelId'] = oscard;
                        oscard = _closure2_slot3;
                        option = michal == oscard;
                        oscard = undefined;
                        if(option) { _fun00032_ip = 197; continue _fun00031 }
 188:
                        option = _closure2_slot3;
                        oscard = option.type;
 197:
                        zuuluu['channelType'] = oscard;
                        oscard = _closure2_slot3;
                        option = michal == oscard;
                        oscard = undefined;
                        if(option) { _fun00032_ip = 224; continue _fun00031 }
 215:
                        golfie = _closure2_slot3;
                        oscard = golfie.name;
 224:
                        zuuluu['contextName'] = oscard;
                        zuuluu['contextIcon'] = entity;
                        report = _closure3_slot0;
                        report = report.current;
                        oscard = michal != report;
                        michal = undefined;
                        if(!oscard) { _fun00032_ip = 255; continue _fun00031 }
 252:
                        michal = report;
 255:
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            backup = tangon.bind(report)(entity, zuuluu);
            _closure2_slot6 = backup;
            entity = kiloes.length;
            tangon = 0;
            if(!(tangon === entity)) { _fun00030_ip = 294; continue _fun00029 }
 280:
            zuuluu = yankee.length;
            entity = null;
            if(!(tangon !== zuuluu)) { _fun00030_ip = 427; continue _fun00029 }
 294:
            report = _closure1_slot13;
            tangon = _closure1_slot6;
            zuuluu = {};
            offset = offset.container;
            zuuluu['style'] = offset;
            romeon = _closure1_slot11;
            offset = _closure1_slot26;
            golfie = {};
            golfie['widthOverride'] = sizing;
            golfie['sources'] = kiloes;
            golfie['handlePressMedia'] = backup;
            golfie['visible'] = foxtra;
            offset = romeon.bind(oscard)(offset, golfie);
            golfie = new Array(2);
            golfie[0] = offset;
            offset = option == yankee;
            option = undefined;
            if(offset) { _fun00030_ip = 383; continue _fun00029 }
 366:
            offset = yankee.map;
            verify = function(argFoo, argBar) {
                oscard = argBar;
                report = _closure1_slot11;
                tangon = _closure1_slot25;
                zuuluu = {};
                michal = _closure2_slot1;
                zuuluu['widthOverride'] = michal;
                michal = _closure2_slot6;
                zuuluu['handlePressMedia'] = michal;
                michal = _closure2_slot5;
                michal = michal.length;
                michal = oscard + michal;
                zuuluu['initialIndex'] = michal;
                michal = argFoo;
                zuuluu['source'] = michal;
                entity = _closure2_slot2;
                zuuluu['visible'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'gif-';
                michal = michal.bind(entity)(oscard);
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            option = offset.bind(yankee)(verify);
 383:
            golfie[1] = option;
            zuuluu['children'] = golfie;
            option = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            michal = 'message-image-';
            michal = golfie.bind(michal)(option);
            entity = report.bind(oscard)(tangon, zuuluu, michal);
 427:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['GravityAttachmentMediaMosaic'] = michal;
    return entity;
})();