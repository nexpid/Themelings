// app/modules/user_profile/native/UserProfileCustomStatusBubble.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: EmojiImage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.emojiId;
            report = entity.size;
            romeon = entity.animated;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            romeon = false;
 28:
            oscard = entity.style;
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 10;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnimateEmoji;
            entity = michal.useSetting;
            yankee = entity.bind(michal)();
            zuuluu = _closure1_slot7;
            golfie = _closure1_slot1;
            entity = 11;
            entity = option[entity];
            michal = golfie.bind(tangon)(entity);
            entity = {};
            foxtra = {};
            foxtra['height'] = report;
            foxtra['width'] = report;
            report = new Array(2);
            report[0] = foxtra;
            report[1] = oscard;
            entity['style'] = report;
            report = {};
            oscard = 12;
            oscard = option[oscard];
            option = golfie.bind(tangon)(oscard);
            golfie = option.getEmojiURL;
            oscard = {};
            oscard['id'] = offset;
            offset = global;
            offset = offset.Boolean;
            offset = offset.bind(tangon)(romeon);
            if(!offset) { _fun00002_ip = 165; continue _fun00001 }
 162:
            offset = yankee;
 165:
            oscard['animated'] = offset;
            verify = _closure1_slot6;
            oscard['size'] = verify;
            oscard = golfie.bind(option)(oscard);
            report['uri'] = oscard;
            entity['source'] = report;
            report = 'contain';
            entity['resizeMode'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: TextStatusContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.text;
            output = entity.emoji;
            verify = entity.textVariant;
            option = entity.lineClamp;
            golfie = entity.onTextLayout;
            offset = entity.isPlaceholderText;
            tangon = undefined;
            if(!(offset === tangon)) { _fun00004_ip = 46; continue _fun00003 }
 44:
            offset = false;
 46:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 8;
            michal = entity[michal];
            report = zuuluu.bind(tangon)(michal);
            michal = report.useFontScale;
            michal = michal.bind(report)();
            romeon = 9;
            entity = entity[romeon];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.TextStyleSheet;
            entity = entity[verify];
            entity = entity.lineHeight;
            sizing = entity * michal;
            report = {};
            entity = 10;
            entity = sizing / entity;
            report['paddingVertical'] = entity;
            entity = offset;
            if(!entity) { _fun00004_ip = 145; continue _fun00003 }
 131:
            michal = {};
            zuuluu = 'italic';
            michal['fontStyle'] = zuuluu;
            entity = michal;
 145:
            source = report;
            update = entity;
            entity = copyDataProperties(source, update);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[romeon];
            entity = michal.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            entity['variant'] = verify;
            verify = 'text-normal';
            if(!offset) { _fun00004_ip = 202; continue _fun00003 }
 196:
            verify = 'text-muted';
 202:
            entity['color'] = verify;
            entity['lineClamp'] = option;
            entity['onTextLayout'] = golfie;
            entity['style'] = report;
            golfie = null;
            option = golfie == output;
            report = undefined;
            if(option) { _fun00004_ip = 236; continue _fun00003 }
 231:
            report = output.id;
 236:
            if(!(golfie == report)) { _fun00004_ip = 345; continue _fun00003 }
 240:
            option = golfie == output;
            report = undefined;
            if(option) { _fun00004_ip = 254; continue _fun00003 }
 249:
            report = output.name;
 254:
            report = golfie != report;
            golfie = null;
            if(!report) { _fun00004_ip = 340; continue _fun00003 }
 263:
            verify = _closure1_slot9;
            option = _closure1_slot8;
            report = {};
            romeon = output.name;
            offset = new Array(2);
            offset[0] = romeon;
            backup = _closure1_slot7;
            foxtra = _closure1_slot5;
            romeon = {};
            kiloes = {};
            result = 0.4;
            result = result * sizing;
            kiloes['width'] = result;
            romeon['style'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            offset[1] = romeon;
            report['children'] = offset;
            golfie = verify.bind(tangon)(option, report);
 340:
            _fun00004_ip = 515; continue _fun00003;
 345:
            verify = _closure1_slot9;
            option = _closure1_slot8;
            report = {};
            foxtra = _closure1_slot7;
            romeon = _closure1_slot5;
            offset = {};
            kiloes = _closure1_slot13;
            backup = {};
            result = output.id;
            backup['emojiId'] = result;
            result = 0.9;
            result = result * sizing;
            backup['size'] = result;
            output = output.animated;
            backup['animated'] = output;
            output = {};
            echoed = 0.1;
            result = -sizing;
            result = echoed * result;
            output['marginBottom'] = result;
            backup['style'] = output;
            backup = foxtra.bind(tangon)(kiloes, backup);
            offset['children'] = backup;
            romeon = foxtra.bind(tangon)(romeon, offset);
            offset = new Array(2);
            offset[0] = romeon;
            foxtra = _closure1_slot7;
            romeon = _closure1_slot5;
            yankee = {};
            backup = {};
            kiloes = 0.5;
            kiloes = kiloes * sizing;
            backup['width'] = kiloes;
            yankee['style'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            golfie = verify.bind(tangon)(option, report);
 515:
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: EmojiOnlyStatusContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.emoji;
            verify = entity.size;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.AnimateEmoji;
            michal = zuuluu.useSetting;
            yankee = michal.bind(zuuluu)();
            report = null;
            zuuluu = report == golfie;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 71; continue _fun00005 }
 66:
            michal = golfie.id;
 71:
            michal = report != michal;
            oscard = undefined;
            if(!michal) { _fun00006_ip = 169; continue _fun00005 }
 80:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 12;
            michal = option[michal];
            option = zuuluu.bind(tangon)(michal);
            zuuluu = option.getEmojiURL;
            michal = {};
            offset = golfie.id;
            michal['id'] = offset;
            offset = global;
            romeon = offset.Boolean;
            foxtra = report == golfie;
            offset = undefined;
            if(foxtra) { _fun00006_ip = 140; continue _fun00005 }
 134:
            offset = golfie.animated;
 140:
            offset = romeon.bind(tangon)(offset);
            if(!offset) { _fun00006_ip = 151; continue _fun00005 }
 148:
            offset = yankee;
 151:
            michal['animated'] = offset;
            offset = _closure1_slot6;
            michal['size'] = offset;
            oscard = zuuluu.bind(option)(michal);
 169:
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            option = _closure1_slot2;
            entity = 13;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            option = {};
            option['fontSize'] = verify;
            entity['textEmojiStyle'] = option;
            option = {};
            option['width'] = verify;
            option['height'] = verify;
            entity['fastImageStyle'] = option;
            entity['src'] = oscard;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00006_ip = 241; continue _fun00005 }
 236:
            oscard = golfie.name;
 241:
            golfie = report != oscard;
            report = '';
            if(!golfie) { _fun00006_ip = 255; continue _fun00005 }
 252:
            report = oscard;
 255:
            entity['name'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.UserProfileThemeTypes;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMOJI_URL_BASE_SIZE;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot7 = verify;
    verify = tangon.Fragment;
    var _closure1_slot8 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = {};
            tangon = 'relative';
            michal['position'] = tangon;
            entity['container'] = michal;
            michal = {};
            option = _closure1_slot1;
            report = _closure1_slot2;
            golfie = 7;
            report = report[golfie];
            oscard = undefined;
            report = option.bind(oscard)(report);
            option = report.colors;
            if(zuuluu) { _fun00008_ip = 62; continue _fun00007 }
 54:
            report = option.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
            _fun00008_ip = 68; continue _fun00007;
 62:
            report = option.CUSTOM_STATUS_BUBBLE_BG;
 68:
            michal['backgroundColor'] = report;
            option = _closure1_slot1;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(oscard)(report);
            report = report.colors;
            if(zuuluu) { _fun00008_ip = 105; continue _fun00007 }
 97:
            zuuluu = report.REDESIGN_BUTTON_SECONDARY_BORDER;
            _fun00008_ip = 111; continue _fun00007;
 105:
            zuuluu = report.BORDER_FAINT;
 111:
            michal['borderColor'] = zuuluu;
            zuuluu = 1;
            michal['borderWidth'] = zuuluu;
            entity['bubble'] = michal;
            michal = {'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center'};
            zuuluu = 'flex-start';
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.radii;
            option = option.lg;
            michal['borderRadius'] = option;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.shadows;
            offset = option.SHADOW_LOW;
            yankee = michal;
            option = copyDataProperties(yankee, offset);
            verify = -14;
            option = 'top';
            michal[option] = verify;
            entity['statusBubble'] = michal;
            michal = {'position': 'absolute', 'top': 0, 'left': 0, 'opacity': 0};
            entity['statusBubbleMeasureable'] = michal;
            michal = {'position': 'absolute', 'top': 4294967266, 'width': 12, 'height': 12};
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.radii;
            option = option.round;
            michal['borderRadius'] = option;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.shadows;
            offset = option.SHADOW_LOW;
            yankee = michal;
            option = copyDataProperties(yankee, offset);
            entity['smallCircle'] = michal;
            michal = {'position': 'absolute', 'top': 4294967288, 'left': 12, 'width': 20, 'height': 20};
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.radii;
            option = option.round;
            michal['borderRadius'] = option;
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.shadows;
            offset = option.SHADOW_LOW;
            yankee = michal;
            option = copyDataProperties(yankee, offset);
            entity['largeCircle'] = michal;
            michal = {'position': 'absolute', 'top': -7.5, 'left': 13, 'width': 16, 'height': 16, 'borderWidth': 0};
            option = tangon[golfie];
            option = report.bind(oscard)(option);
            option = option.radii;
            option = option.round;
            michal['borderTopLeftRadius'] = option;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.radii;
            tangon = tangon.round;
            michal['borderTopRightRadius'] = tangon;
            entity['largeCircleInner'] = michal;
            michal = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 6, 'marginTop': 1};
            entity['addStatusButton'] = michal;
            michal = {};
            tangon = -1;
            michal['marginTop'] = tangon;
            entity['addStatusIcon'] = michal;
            michal = {'marginBottom': 2, 'alignSelf': 'flex-start'};
            entity['labelRowContainer'] = michal;
            michal = {};
            michal['alignItems'] = zuuluu;
            entity['statusBubbleLeftAligned'] = michal;
            return entity;
        }
    };
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {'textVariant': 'text-md/normal', 'emojiOnlyEmojiSize': 32, 'textMinWidth': 42, 'statusBubblePaddingHorizontal': 12, 'statusBubblePaddingVertical': 7};
    var _closure1_slot11 = tangon;
    tangon = {};
    verify = option.PREVIEW;
    option = {'textVariant': 'text-sm/normal', 'emojiOnlyEmojiSize': 26, 'textMinWidth': 53, 'statusBubblePaddingHorizontal': 10, 'statusBubblePaddingVertical': 6};
    tangon[verify] = option;
    var _closure1_slot12 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            output = entity.customStatusActivity;
            zuuluu = entity.themeType;
            michal = entity.hasCustomProfileTheme;
            report = entity.editEnabled;
            tangon = undefined;
            foxtra = tangon !== report;
            if(!foxtra) { _fun00010_ip = 41; continue _fun00009 }
 38:
            foxtra = report;
 41:
            golfie = entity.showFullStatus;
            report = tangon !== golfie;
            if(!report) { _fun00010_ip = 57; continue _fun00009 }
 54:
            report = golfie;
 57:
            var _closure2_slot0 = report;
            echoed = entity.onPressTruncatedStatus;
            var _closure2_slot1 = echoed;
            golfie = entity.style;
            option = entity.emojiOnlyStyle;
            vacuum = entity.previewEmoji;
            sequen = entity.previewText;
            verify = entity.previewLabel;
            yankee = entity.placeholderText;
            entity = entity.prompt;
            var _closure2_slot2 = entity;
            entity = _closure1_slot10;
            ctrled = entity.bind(tangon)(michal);
            var _closure2_slot3 = ctrled;
            entity = undefined;
            if(!zuuluu) { _fun00010_ip = 145; continue _fun00009 }
 137:
            michal = _closure1_slot12;
            entity = michal[zuuluu];
 145:
            romeon = null;
            if(!(romeon == entity)) { _fun00010_ip = 155; continue _fun00009 }
 151:
            entity = _closure1_slot11;
 155:
            michal = entity.textVariant;
            var _closure2_slot4 = michal;
            source = entity.emojiOnlyEmojiSize;
            var _closure2_slot5 = source;
            cntext = entity.textMinWidth;
            michal = entity.statusBubblePaddingHorizontal;
            zuuluu = entity.statusBubblePaddingVertical;
            report = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 14;
            entity = offset[entity];
            report = report.bind(tangon)(entity);
            entity = report.useUserProfileAnalyticsContext;
            entity = entity.bind(report)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot6 = entity;
            if(!(tangon !== sequen)) { _fun00010_ip = 245; continue _fun00009 }
 237:
            entity = '';
            if(!(entity === sequen)) { _fun00010_ip = 262; continue _fun00009 }
 245:
            report = romeon == output;
            entity = undefined;
            if(report) { _fun00010_ip = 259; continue _fun00009 }
 254:
            entity = output.state;
 259:
            sequen = entity;
 262:
            entity = romeon != sequen;
            if(!entity) { _fun00010_ip = 277; continue _fun00009 }
 269:
            report = '';
            entity = report !== sequen;
 277:
            if(!(tangon === vacuum)) { _fun00010_ip = 299; continue _fun00009 }
 281:
            offset = romeon == output;
            report = undefined;
            if(offset) { _fun00010_ip = 296; continue _fun00009 }
 290:
            report = output.emoji;
 296:
            vacuum = report;
 299:
            var _closure2_slot7 = vacuum;
            report = romeon != vacuum;
            record = report;
            if(!report) { _fun00010_ip = 316; continue _fun00009 }
 313:
            record = !entity;
 316:
            var _closure2_slot8 = record;
            update = !entity;
            if(entity) { _fun00010_ip = 329; continue _fun00009 }
 326:
            update = !report;
 329:
            if(!update) { _fun00010_ip = 336; continue _fun00009 }
 332:
            update = tangon !== yankee;
 336:
            if(!update) { _fun00010_ip = 347; continue _fun00009 }
 339:
            offset = '';
            update = offset !== yankee;
 347:
            var _closure2_slot9 = update;
            if(!update) { _fun00010_ip = 357; continue _fun00009 }
 354:
            sequen = yankee;
 357:
            var _closure2_slot10 = sequen;
            backup = romeon != sequen;
            if(!backup) { _fun00010_ip = 376; continue _fun00009 }
 368:
            offset = '';
            backup = offset !== sequen;
 376:
            var _closure2_slot11 = backup;
            if(entity) { _fun00010_ip = 386; continue _fun00009 }
 383:
            entity = report;
 386:
            if(entity) { _fun00010_ip = 401; continue _fun00009 }
 389:
            report = !foxtra;
            if(!report) { _fun00010_ip = 398; continue _fun00009 }
 395:
            report = update;
 398:
            entity = report;
 401:
            sizing = !entity;
            if(entity) { _fun00010_ip = 410; continue _fun00009 }
 407:
            sizing = foxtra;
 410:
            offset = romeon != output;
            report = null;
            if(!offset) { _fun00010_ip = 444; continue _fun00009 }
 419:
            result = _closure1_slot1;
            config = _closure1_slot2;
            offset = 15;
            offset = config[offset];
            offset = result.bind(tangon)(offset);
            report = offset.bind(tangon)(output);
 444:
            if(!(romeon != verify)) { _fun00010_ip = 451; continue _fun00009 }
 448:
            report = verify;
 451:
            var _closure2_slot12 = report;
            verify = romeon != report;
            var _closure2_slot13 = verify;
            output = _closure1_slot4;
            offset = output.useState;
            report = false;
            offset = offset.bind(output)(report);
            report = _closure1_slot3;
            result = 2;
            config = report.bind(tangon)(offset, result);
            report = 0;
            offset = config[report];
            output = 1;
            output = config[output];
            var _closure2_slot14 = output;
            config = {};
            output = 0;
            if(!backup) { _fun00010_ip = 519; continue _fun00009 }
 516:
            output = cntext;
 519:
            config['minWidth'] = output;
            output = 0;
            if(!record) { _fun00010_ip = 537; continue _fun00009 }
 529:
            result = result * zuuluu;
            output = source + result;
 537:
            config['minHeight'] = output;
            if(backup) { _fun00010_ip = 553; continue _fun00009 }
 545:
            if(sizing) { _fun00010_ip = 553; continue _fun00009 }
 548:
            report = 0;
            if(!verify) { _fun00010_ip = 556; continue _fun00009 }
 553:
            report = zuuluu;
 556:
            config['paddingVertical'] = report;
            config['paddingHorizontal'] = michal;
            var _closure2_slot15 = config;
            backup = {};
            backup['top'] = zuuluu;
            backup['bottom'] = zuuluu;
            backup['left'] = michal;
            backup['right'] = michal;
            output = _closure1_slot4;
            michal = output.useRef;
            verify = michal.bind(output)(romeon);
            var _closure2_slot16 = verify;
            report = output.useImperativeHandle;
            zuuluu = argBar;
            michal = function() {
                entity = _closure2_slot16;
                entity = entity.current;
                return entity;
            };
            michal = report.bind(output)(zuuluu, michal);
            if(entity) { _fun00010_ip = 633; continue _fun00009 }
 628:
            if(sizing) { _fun00010_ip = 633; continue _fun00009 }
 631:
            return romeon;
 633:
            output = function() { // Original name: handlePressAddOrEditStatus
                zuuluu = _closure2_slot6;
                michal = {};
                entity = 'PRESS_EDIT_CUSTOM_STATUS';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                zuuluu = 16;
                zuuluu = option[zuuluu];
                tangon = golfie.bind(entity)(zuuluu);
                zuuluu = tangon.hideActionSheet;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = _closure1_slot0;
                michal = 17;
                michal = option[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openEditCustomStatusModal;
                michal = {};
                oscard = 'UserProfileCustomStatusBubble';
                michal['location'] = oscard;
                oscard = 18;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                golfie = oscard.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
                oscard = new Array(1);
                oscard[0] = golfie;
                michal['analyticsLocations'] = oscard;
                report = _closure2_slot2;
                michal['prompt'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            result = function() { // Original name: renderStatusContent
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    option = _closure2_slot13;
                    if(!option) { _fun00012_ip = 89; continue _fun00011 }
 10:
                    report = _closure1_slot7;
                    tangon = _closure1_slot5;
                    zuuluu = {};
                    oscard = _closure2_slot3;
                    oscard = oscard.labelRowContainer;
                    zuuluu['style'] = oscard;
                    verify = _closure1_slot7;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 19;
                    oscard = oscard[entity];
                    entity = undefined;
                    golfie = golfie.bind(entity)(oscard);
                    oscard = {};
                    offset = _closure2_slot12;
                    oscard['label'] = offset;
                    oscard = verify.bind(entity)(golfie, oscard);
                    zuuluu['children'] = oscard;
                    option = report.bind(entity)(tangon, zuuluu);
 89:
                    entity = _closure2_slot11;
                    if(entity) { _fun00012_ip = 177; continue _fun00011 }
 96:
                    zuuluu = _closure2_slot8;
                    oscard = undefined;
                    entity = undefined;
                    if(!zuuluu) { _fun00012_ip = 175; continue _fun00011 }
 107:
                    report = _closure1_slot9;
                    tangon = _closure1_slot8;
                    zuuluu = {};
                    golfie = new Array(2);
                    golfie[0] = option;
                    yankee = _closure1_slot7;
                    offset = _closure1_slot15;
                    verify = {};
                    romeon = _closure2_slot7;
                    verify['emoji'] = romeon;
                    romeon = _closure2_slot5;
                    verify['size'] = romeon;
                    verify = yankee.bind(oscard)(offset, verify);
                    golfie[1] = verify;
                    zuuluu['children'] = golfie;
                    entity = report.bind(oscard)(tangon, zuuluu);
 175:
                    _fun00012_ip = 282; continue _fun00011;
 177:
                    report = _closure1_slot9;
                    tangon = _closure1_slot8;
                    zuuluu = {};
                    oscard = new Array(2);
                    oscard[0] = option;
                    verify = _closure1_slot7;
                    option = _closure1_slot14;
                    golfie = {};
                    offset = _closure2_slot10;
                    golfie['text'] = offset;
                    offset = _closure2_slot9;
                    golfie['isPlaceholderText'] = offset;
                    offset = _closure2_slot7;
                    golfie['emoji'] = offset;
                    offset = _closure2_slot4;
                    golfie['textVariant'] = offset;
                    offset = _closure2_slot0;
                    michal = 2;
                    if(!offset) { _fun00012_ip = 255; continue _fun00011 }
 253:
                    michal = undefined;
 255:
                    golfie['lineClamp'] = michal;
                    michal = undefined;
                    golfie = verify.bind(michal)(option, golfie);
                    oscard[1] = golfie;
                    zuuluu['children'] = oscard;
                    entity = report.bind(michal)(tangon, zuuluu);
 282:
                    return entity;
                }
            };
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            source = 20;
            zuuluu = entity[source];
            zuuluu = michal.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.formatToPlainString;
            entity = entity[source];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.UpF5QU;
            entity = {};
            cntext = romeon == vacuum;
            papara = undefined;
            if(cntext) { _fun00010_ip = 711; continue _fun00009 }
 706:
            papara = vacuum.name;
 711:
            target = romeon != papara;
            vacuum = '';
            cntext = vacuum;
            if(!target) { _fun00010_ip = 728; continue _fun00009 }
 725:
            cntext = papara;
 728:
            entity['emoji'] = cntext;
            cntext = romeon != sequen;
            if(!cntext) { _fun00010_ip = 743; continue _fun00009 }
 740:
            vacuum = sequen;
 743:
            entity['status'] = vacuum;
            vacuum = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = new Array(2);
            report[0] = golfie;
            golfie = undefined;
            if(!record) { _fun00010_ip = 779; continue _fun00009 }
 776:
            golfie = option;
 779:
            report[1] = golfie;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            report = {};
            cntext = ctrled.bubble;
            sequen = new Array(2);
            sequen[0] = cntext;
            cntext = ctrled.smallCircle;
            sequen[1] = cntext;
            report['style'] = sequen;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(4);
            report[0] = golfie;
            sequen = _closure1_slot7;
            option = _closure1_slot5;
            golfie = {};
            papara = ctrled.bubble;
            cntext = new Array(2);
            cntext[0] = papara;
            papara = ctrled.largeCircle;
            cntext[1] = papara;
            golfie['style'] = cntext;
            golfie = sequen.bind(tangon)(option, golfie);
            report[1] = golfie;
            oscard = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 184; continue _fun00013 }
 16:
                    michal = _closure2_slot0;
                    if(michal) { _fun00014_ip = 184; continue _fun00013 }
 26:
                    michal = _closure2_slot11;
                    if(!michal) { _fun00014_ip = 184; continue _fun00013 }
 36:
                    tangon = _closure1_slot7;
                    zuuluu = _closure1_slot5;
                    michal = {};
                    oscard = _closure2_slot3;
                    golfie = oscard.bubble;
                    oscard = new Array(4);
                    oscard[0] = golfie;
                    golfie = _closure2_slot3;
                    golfie = golfie.statusBubble;
                    oscard[1] = golfie;
                    golfie = _closure2_slot15;
                    oscard[2] = golfie;
                    golfie = _closure2_slot3;
                    golfie = golfie.statusBubbleMeasureable;
                    oscard[3] = golfie;
                    michal['style'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = _closure1_slot14;
                    report = {};
                    option = _closure2_slot10;
                    report['text'] = option;
                    option = _closure2_slot9;
                    report['isPlaceholderText'] = option;
                    option = _closure2_slot7;
                    report['emoji'] = option;
                    entity = _closure2_slot4;
                    report['textVariant'] = entity;
                    entity = function(argFoo) { // Original name: onTextLayout
                        zuuluu = _closure2_slot14;
                        entity = argFoo;
                        entity = entity.nativeEvent;
                        entity = entity.lines;
                        michal = entity.length;
                        entity = 2;
                        michal = michal > entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report['onTextLayout'] = entity;
                    entity = undefined;
                    report = golfie.bind(entity)(oscard, report);
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
 184:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = oscard.bind(tangon)();
            report[2] = oscard;
            option = _closure1_slot9;
            golfie = _closure1_slot5;
            oscard = {};
            cntext = ctrled.bubble;
            sequen = new Array(4);
            sequen[0] = cntext;
            cntext = ctrled.statusBubble;
            sequen[1] = cntext;
            sequen[2] = config;
            config = !record;
            if(record) { _fun00010_ip = 950; continue _fun00009 }
 944:
            config = ctrled.statusBubbleLeftAligned;
 950:
            sequen[3] = config;
            oscard['style'] = sequen;
            oscard['ref'] = verify;
            config = _closure1_slot7;
            sequen = _closure1_slot5;
            verify = {};
            cntext = ctrled.bubble;
            record = new Array(2);
            record[0] = cntext;
            cntext = ctrled.largeCircleInner;
            record[1] = cntext;
            verify['style'] = record;
            sequen = config.bind(tangon)(sequen, verify);
            verify = new Array(2);
            verify[0] = sequen;
            if(sizing) { _fun00010_ip = 1228; continue _fun00009 }
 1020:
            if(foxtra) { _fun00010_ip = 1105; continue _fun00009 }
 1023:
            if(!(romeon != echoed)) { _fun00010_ip = 1030; continue _fun00009 }
 1027:
            if(offset) { _fun00010_ip = 1036; continue _fun00009 }
 1030:
            offset = result.bind(tangon)();
            _fun00010_ip = 1103; continue _fun00009;
 1036:
            sizing = _closure1_slot7;
            foxtra = _closure1_slot0;
            sequen = _closure1_slot2;
            romeon = 21;
            romeon = sequen[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.PressableOpacity;
            romeon = {};
            sequen = 'button';
            romeon['accessibilityRole'] = sequen;
            romeon['accessibilityLabel'] = vacuum;
            romeon['onPress'] = echoed;
            romeon['hitSlop'] = backup;
            echoed = result.bind(tangon)();
            romeon['children'] = echoed;
            offset = sizing.bind(tangon)(foxtra, romeon);
 1103:
            _fun00010_ip = 1223; continue _fun00009;
 1105:
            sizing = _closure1_slot7;
            config = _closure1_slot0;
            echoed = _closure1_slot2;
            romeon = 21;
            romeon = echoed[romeon];
            romeon = config.bind(tangon)(romeon);
            foxtra = romeon.PressableOpacity;
            romeon = {};
            sequen = 'button';
            romeon['accessibilityRole'] = sequen;
            romeon['accessibilityLabel'] = vacuum;
            vacuum = echoed[source];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            echoed = echoed[source];
            echoed = config.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.QdHxoq;
            echoed = vacuum.bind(sequen)(echoed);
            romeon['accessibilityHint'] = echoed;
            romeon['onPress'] = output;
            romeon['hitSlop'] = backup;
            result = result.bind(tangon)();
            romeon['children'] = result;
            offset = sizing.bind(tangon)(foxtra, romeon);
 1223:
            _fun00010_ip = 1579; continue _fun00009;
 1228:
            if(update) { _fun00010_ip = 1285; continue _fun00009 }
 1231:
            result = _closure1_slot0;
            romeon = _closure1_slot2;
            foxtra = romeon[source];
            foxtra = result.bind(tangon)(foxtra);
            sizing = foxtra.intl;
            foxtra = sizing.string;
            romeon = romeon[source];
            romeon = result.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.Vq4UmZ;
            result = foxtra.bind(sizing)(romeon);
            _fun00010_ip = 1288; continue _fun00009;
 1285:
            result = yankee;
 1288:
            foxtra = _closure1_slot9;
            sizing = _closure1_slot0;
            echoed = _closure1_slot2;
            yankee = 21;
            yankee = echoed[yankee];
            yankee = sizing.bind(tangon)(yankee);
            romeon = yankee.PressableOpacity;
            yankee = {};
            vacuum = 'button';
            yankee['accessibilityRole'] = vacuum;
            vacuum = echoed[source];
            vacuum = sizing.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            source = echoed[source];
            source = sizing.bind(tangon)(source);
            source = source.t;
            source = source.Vq4UmZ;
            source = vacuum.bind(sequen)(source);
            yankee['accessibilityLabel'] = source;
            yankee['onPress'] = output;
            yankee['hitSlop'] = backup;
            backup = ctrled.addStatusButton;
            yankee['style'] = backup;
            source = _closure1_slot7;
            backup = 22;
            backup = echoed[backup];
            backup = sizing.bind(tangon)(backup);
            output = backup.CirclePlusIcon;
            backup = {};
            sequen = _closure1_slot1;
            vacuum = 7;
            vacuum = echoed[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.colors;
            vacuum = vacuum.REDESIGN_BUTTON_SECONDARY_TEXT;
            backup['color'] = vacuum;
            vacuum = 'xs';
            backup['size'] = vacuum;
            ctrled = ctrled.addStatusIcon;
            backup['style'] = ctrled;
            output = source.bind(tangon)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot7;
            kiloes = 9;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            sizing = kiloes.Text;
            kiloes = {};
            echoed = 'text-md/medium';
            if(!update) { _fun00010_ip = 1518; continue _fun00009 }
 1512:
            echoed = 'text-md/normal';
 1518:
            kiloes['variant'] = echoed;
            echoed = 'redesign-button-secondary-text';
            kiloes['color'] = echoed;
            echoed = undefined;
            if(!update) { _fun00010_ip = 1551; continue _fun00009 }
 1537:
            update = {};
            source = 'italic';
            update['fontStyle'] = source;
            echoed = update;
 1551:
            kiloes['style'] = echoed;
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 1579:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileCustomStatusBubble.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();