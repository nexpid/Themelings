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
            option = entity.textVariant;
            golfie = entity.lineClamp;
            report = entity.onTextLayout;
            verify = entity.isPlaceholderText;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00004_ip = 46; continue _fun00003 }
 44:
            verify = false;
 46:
            michal = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 8;
            entity = offset[entity];
            zuuluu = michal.bind(tangon)(entity);
            entity = zuuluu.useFontScale;
            romeon = entity.bind(zuuluu)();
            entity = 9;
            zuuluu = offset[entity];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.TextStyleSheet;
            zuuluu = zuuluu[option];
            zuuluu = zuuluu.lineHeight;
            sizing = zuuluu * romeon;
            zuuluu = _closure1_slot9;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            entity['variant'] = option;
            option = 'text-normal';
            if(!verify) { _fun00004_ip = 150; continue _fun00003 }
 144:
            option = 'text-muted';
 150:
            entity['color'] = option;
            entity['lineClamp'] = golfie;
            entity['onTextLayout'] = report;
            report = {};
            golfie = 10;
            golfie = sizing / golfie;
            report['paddingVertical'] = golfie;
            entity['style'] = report;
            golfie = null;
            option = golfie == output;
            report = undefined;
            if(option) { _fun00004_ip = 198; continue _fun00003 }
 193:
            report = output.id;
 198:
            if(!(golfie == report)) { _fun00004_ip = 307; continue _fun00003 }
 202:
            option = golfie == output;
            report = undefined;
            if(option) { _fun00004_ip = 216; continue _fun00003 }
 211:
            report = output.name;
 216:
            report = golfie != report;
            golfie = null;
            if(!report) { _fun00004_ip = 302; continue _fun00003 }
 225:
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
 302:
            _fun00004_ip = 477; continue _fun00003;
 307:
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
 477:
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.UserProfileType;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMOJI_URL_BASE_SIZE;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot7 = option;
    option = tangon.Fragment;
    var _closure1_slot8 = option;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = {};
            michal = {};
            zuuluu = 'relative';
            michal['position'] = zuuluu;
            entity['container'] = michal;
            michal = {};
            option = _closure1_slot1;
            report = _closure1_slot2;
            oscard = 7;
            golfie = report[oscard];
            report = undefined;
            golfie = option.bind(report)(golfie);
            option = golfie.colors;
            if(tangon) { _fun00008_ip = 62; continue _fun00007 }
 54:
            golfie = option.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
            _fun00008_ip = 68; continue _fun00007;
 62:
            golfie = option.CUSTOM_STATUS_BUBBLE_BG;
 68:
            michal['backgroundColor'] = golfie;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[oscard];
            golfie = option.bind(report)(golfie);
            golfie = golfie.colors;
            if(tangon) { _fun00008_ip = 105; continue _fun00007 }
 97:
            tangon = golfie.REDESIGN_BUTTON_SECONDARY_BORDER;
            _fun00008_ip = 111; continue _fun00007;
 105:
            tangon = golfie.BORDER_FAINT;
 111:
            michal['borderColor'] = tangon;
            tangon = 1;
            michal['borderWidth'] = tangon;
            entity['bubble'] = michal;
            michal = {'alignSelf': 'flex-start', 'alignItems': 'center', 'justifyContent': 'center'};
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.radii;
            golfie = golfie.lg;
            michal['borderRadius'] = golfie;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.shadows;
            offset = golfie.SHADOW_LOW;
            yankee = michal;
            golfie = copyDataProperties(yankee, offset);
            option = -14;
            golfie = 'top';
            michal[golfie] = option;
            entity['statusBubble'] = michal;
            michal = {'position': 'absolute', 'top': 0, 'left': 0, 'opacity': 0};
            entity['statusBubbleMeasureable'] = michal;
            michal = {'position': 'absolute', 'top': 4294967266, 'width': 12, 'height': 12};
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.radii;
            golfie = golfie.round;
            michal['borderRadius'] = golfie;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.shadows;
            offset = golfie.SHADOW_LOW;
            yankee = michal;
            golfie = copyDataProperties(yankee, offset);
            entity['smallCircle'] = michal;
            michal = {'position': 'absolute', 'top': 4294967288, 'left': 12, 'width': 20, 'height': 20};
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.radii;
            golfie = golfie.round;
            michal['borderRadius'] = golfie;
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.shadows;
            offset = golfie.SHADOW_LOW;
            yankee = michal;
            golfie = copyDataProperties(yankee, offset);
            entity['largeCircle'] = michal;
            michal = {'position': 'absolute', 'top': -7.5, 'left': 13, 'width': 16, 'height': 16, 'borderWidth': 0};
            golfie = zuuluu[oscard];
            golfie = tangon.bind(report)(golfie);
            golfie = golfie.radii;
            golfie = golfie.round;
            michal['borderTopLeftRadius'] = golfie;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.round;
            michal['borderTopRightRadius'] = zuuluu;
            entity['largeCircleInner'] = michal;
            michal = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 6, 'marginTop': 1};
            entity['addStatusButton'] = michal;
            michal = {};
            zuuluu = -1;
            michal['marginTop'] = zuuluu;
            entity['addStatusIcon'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {'textVariant': 'text-md/normal', 'emojiOnlyEmojiSize': 32, 'textMinWidth': 42, 'statusBubblePaddingHorizontal': 12, 'statusBubblePaddingVertical': 7};
    var _closure1_slot11 = tangon;
    tangon = {};
    option = golfie.PREVIEW;
    golfie = {'textVariant': 'text-sm/normal', 'emojiOnlyEmojiSize': 26, 'textMinWidth': 53, 'statusBubblePaddingHorizontal': 10, 'statusBubblePaddingVertical': 6};
    tangon[option] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileCustomStatusBubble.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileCustomStatusBubble
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.customStatusActivity;
            report = entity.userProfileType;
            zuuluu = entity.hasCustomProfileTheme;
            romeon = entity.editEnabled;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00010_ip = 37; continue _fun00009 }
 35:
            romeon = false;
 37:
            michal = entity.showFullStatus;
            if(!(michal === tangon)) { _fun00010_ip = 49; continue _fun00009 }
 47:
            michal = false;
 49:
            var _closure2_slot0 = michal;
            result = entity.onPressTruncatedStatus;
            var _closure2_slot1 = result;
            golfie = entity.style;
            option = entity.emojiOnlyStyle;
            update = entity.previewEmoji;
            vacuum = entity.previewText;
            entity = entity.placeholderText;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            michal = _closure1_slot10;
            echoed = michal.bind(tangon)(zuuluu);
            _closure2_slot2 = echoed;
            zuuluu = undefined;
            if(!report) { _fun00010_ip = 165; continue _fun00009 }
 157:
            michal = _closure1_slot12;
            zuuluu = michal[report];
 165:
            yankee = null;
            if(!(yankee == zuuluu)) { _fun00010_ip = 175; continue _fun00009 }
 171:
            zuuluu = _closure1_slot11;
 175:
            michal = zuuluu.textVariant;
            _closure2_slot3 = michal;
            ctrled = zuuluu.emojiOnlyEmojiSize;
            _closure2_slot4 = ctrled;
            sequen = zuuluu.textMinWidth;
            michal = zuuluu.statusBubblePaddingHorizontal;
            zuuluu = zuuluu.statusBubblePaddingVertical;
            offset = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 14;
            report = foxtra[report];
            offset = offset.bind(tangon)(report);
            report = offset.useUserProfileAnalyticsContext;
            report = report.bind(offset)();
            report = report.trackUserProfileAction;
            _closure2_slot5 = report;
            if(!(tangon !== vacuum)) { _fun00010_ip = 265; continue _fun00009 }
 257:
            report = '';
            if(!(report === vacuum)) { _fun00010_ip = 282; continue _fun00009 }
 265:
            offset = yankee == verify;
            report = undefined;
            if(offset) { _fun00010_ip = 279; continue _fun00009 }
 274:
            report = verify.state;
 279:
            vacuum = report;
 282:
            foxtra = yankee != vacuum;
            if(!foxtra) { _fun00010_ip = 297; continue _fun00009 }
 289:
            report = '';
            foxtra = report !== vacuum;
 297:
            if(!(tangon === update)) { _fun00010_ip = 319; continue _fun00009 }
 301:
            offset = yankee == verify;
            report = undefined;
            if(offset) { _fun00010_ip = 316; continue _fun00009 }
 310:
            report = verify.emoji;
 316:
            update = report;
 319:
            _closure2_slot6 = update;
            report = yankee != update;
            verify = report;
            if(!report) { _fun00010_ip = 336; continue _fun00009 }
 333:
            verify = !foxtra;
 336:
            _closure2_slot7 = verify;
            offset = !foxtra;
            if(foxtra) { _fun00010_ip = 349; continue _fun00009 }
 346:
            offset = !report;
 349:
            if(!offset) { _fun00010_ip = 356; continue _fun00009 }
 352:
            offset = tangon !== entity;
 356:
            if(!offset) { _fun00010_ip = 367; continue _fun00009 }
 359:
            foxtra = '';
            offset = foxtra !== entity;
 367:
            _closure2_slot8 = offset;
            if(!offset) { _fun00010_ip = 377; continue _fun00009 }
 374:
            vacuum = entity;
 377:
            _closure2_slot9 = vacuum;
            backup = yankee != vacuum;
            if(!backup) { _fun00010_ip = 396; continue _fun00009 }
 388:
            entity = '';
            backup = entity !== vacuum;
 396:
            _closure2_slot10 = backup;
            entity = backup;
            if(entity) { _fun00010_ip = 409; continue _fun00009 }
 406:
            entity = report;
 409:
            foxtra = !entity;
            if(entity) { _fun00010_ip = 418; continue _fun00009 }
 415:
            foxtra = romeon;
 418:
            sizing = _closure1_slot4;
            offset = sizing.useState;
            report = false;
            offset = offset.bind(sizing)(report);
            report = _closure1_slot3;
            output = 2;
            source = report.bind(tangon)(offset, output);
            report = 0;
            offset = source[report];
            sizing = 1;
            sizing = source[sizing];
            _closure2_slot11 = sizing;
            source = {};
            sizing = 0;
            if(!backup) { _fun00010_ip = 474; continue _fun00009 }
 471:
            sizing = sequen;
 474:
            source['minWidth'] = sizing;
            sizing = 0;
            if(!verify) { _fun00010_ip = 492; continue _fun00009 }
 484:
            output = output * zuuluu;
            sizing = ctrled + output;
 492:
            source['minHeight'] = sizing;
            if(backup) { _fun00010_ip = 505; continue _fun00009 }
 500:
            report = 0;
            if(!foxtra) { _fun00010_ip = 508; continue _fun00009 }
 505:
            report = zuuluu;
 508:
            source['paddingVertical'] = report;
            source['paddingHorizontal'] = michal;
            _closure2_slot12 = source;
            backup = {};
            backup['top'] = zuuluu;
            backup['bottom'] = zuuluu;
            backup['left'] = michal;
            backup['right'] = michal;
            if(entity) { _fun00010_ip = 547; continue _fun00009 }
 542:
            if(foxtra) { _fun00010_ip = 547; continue _fun00009 }
 545:
            return yankee;
 547:
            sizing = function() { // Original name: handlePressAddOrEditStatus
                zuuluu = _closure2_slot5;
                michal = {};
                entity = 'PRESS_EDIT_CUSTOM_STATUS';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 15;
                zuuluu = golfie[zuuluu];
                tangon = oscard.bind(entity)(zuuluu);
                zuuluu = tangon.hideActionSheet;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = _closure1_slot0;
                michal = 16;
                michal = golfie[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openEditCustomStatusModal;
                michal = {};
                report = 'UserProfileCustomStatusBubble';
                michal['location'] = report;
                report = 17;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                oscard = report.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
                report = new Array(1);
                report[0] = oscard;
                michal['analyticsLocations'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            output = function() { // Original name: renderStatusContent
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot10;
                    if(entity) { _fun00012_ip = 59; continue _fun00011 }
 10:
                    zuuluu = _closure2_slot7;
                    oscard = undefined;
                    entity = undefined;
                    if(!zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 21:
                    report = _closure1_slot7;
                    tangon = _closure1_slot15;
                    zuuluu = {};
                    golfie = _closure2_slot6;
                    zuuluu['emoji'] = golfie;
                    golfie = _closure2_slot4;
                    zuuluu['size'] = golfie;
                    entity = report.bind(oscard)(tangon, zuuluu);
 57:
                    _fun00012_ip = 132; continue _fun00011;
 59:
                    report = _closure1_slot7;
                    tangon = _closure1_slot14;
                    zuuluu = {};
                    oscard = _closure2_slot9;
                    zuuluu['text'] = oscard;
                    oscard = _closure2_slot8;
                    zuuluu['isPlaceholderText'] = oscard;
                    oscard = _closure2_slot6;
                    zuuluu['emoji'] = oscard;
                    oscard = _closure2_slot3;
                    zuuluu['textVariant'] = oscard;
                    oscard = _closure2_slot0;
                    michal = 2;
                    if(!oscard) { _fun00012_ip = 119; continue _fun00011 }
 117:
                    michal = undefined;
 119:
                    zuuluu['lineClamp'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 132:
                    return entity;
                }
            };
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            ctrled = 18;
            zuuluu = entity[ctrled];
            zuuluu = michal.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.formatToPlainString;
            entity = entity[ctrled];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.UpF5QU;
            entity = {};
            sequen = yankee == update;
            config = undefined;
            if(sequen) { _fun00010_ip = 625; continue _fun00009 }
 620:
            config = update.name;
 625:
            record = yankee != config;
            update = '';
            sequen = update;
            if(!record) { _fun00010_ip = 642; continue _fun00009 }
 639:
            sequen = config;
 642:
            entity['emoji'] = sequen;
            sequen = yankee != vacuum;
            if(!sequen) { _fun00010_ip = 657; continue _fun00009 }
 654:
            update = vacuum;
 657:
            entity['status'] = update;
            update = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = new Array(2);
            report[0] = golfie;
            golfie = undefined;
            if(!verify) { _fun00010_ip = 693; continue _fun00009 }
 690:
            golfie = option;
 693:
            report[1] = golfie;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            report = {};
            vacuum = echoed.bubble;
            verify = new Array(2);
            verify[0] = vacuum;
            vacuum = echoed.smallCircle;
            verify[1] = vacuum;
            report['style'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(4);
            report[0] = golfie;
            verify = _closure1_slot7;
            option = _closure1_slot5;
            golfie = {};
            sequen = echoed.bubble;
            vacuum = new Array(2);
            vacuum[0] = sequen;
            sequen = echoed.largeCircle;
            vacuum[1] = sequen;
            golfie['style'] = vacuum;
            golfie = verify.bind(tangon)(option, golfie);
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
                    michal = _closure2_slot10;
                    if(!michal) { _fun00014_ip = 184; continue _fun00013 }
 36:
                    tangon = _closure1_slot7;
                    zuuluu = _closure1_slot5;
                    michal = {};
                    oscard = _closure2_slot2;
                    golfie = oscard.bubble;
                    oscard = new Array(4);
                    oscard[0] = golfie;
                    golfie = _closure2_slot2;
                    golfie = golfie.statusBubble;
                    oscard[1] = golfie;
                    golfie = _closure2_slot12;
                    oscard[2] = golfie;
                    golfie = _closure2_slot2;
                    golfie = golfie.statusBubbleMeasureable;
                    oscard[3] = golfie;
                    michal['style'] = oscard;
                    golfie = _closure1_slot7;
                    oscard = _closure1_slot14;
                    report = {};
                    option = _closure2_slot9;
                    report['text'] = option;
                    option = _closure2_slot8;
                    report['isPlaceholderText'] = option;
                    option = _closure2_slot6;
                    report['emoji'] = option;
                    entity = _closure2_slot3;
                    report['textVariant'] = entity;
                    entity = function(argFoo) { // Original name: onTextLayout
                        zuuluu = _closure2_slot11;
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
            vacuum = echoed.bubble;
            verify = new Array(3);
            verify[0] = vacuum;
            vacuum = echoed.statusBubble;
            verify[1] = vacuum;
            verify[2] = source;
            oscard['style'] = verify;
            vacuum = _closure1_slot7;
            source = _closure1_slot5;
            verify = {};
            config = echoed.bubble;
            sequen = new Array(2);
            sequen[0] = config;
            config = echoed.largeCircleInner;
            sequen[1] = config;
            verify['style'] = sequen;
            source = vacuum.bind(tangon)(source, verify);
            verify = new Array(2);
            verify[0] = source;
            if(foxtra) { _fun00010_ip = 1122; continue _fun00009 }
 914:
            if(romeon) { _fun00010_ip = 999; continue _fun00009 }
 917:
            if(!(yankee != result)) { _fun00010_ip = 924; continue _fun00009 }
 921:
            if(offset) { _fun00010_ip = 930; continue _fun00009 }
 924:
            offset = output.bind(tangon)();
            _fun00010_ip = 997; continue _fun00009;
 930:
            foxtra = _closure1_slot7;
            romeon = _closure1_slot0;
            source = _closure1_slot2;
            yankee = 19;
            yankee = source[yankee];
            yankee = romeon.bind(tangon)(yankee);
            romeon = yankee.PressableOpacity;
            yankee = {};
            source = 'button';
            yankee['accessibilityRole'] = source;
            yankee['accessibilityLabel'] = update;
            yankee['onPress'] = result;
            yankee['hitSlop'] = backup;
            result = output.bind(tangon)();
            yankee['children'] = result;
            offset = foxtra.bind(tangon)(romeon, yankee);
 997:
            _fun00010_ip = 1117; continue _fun00009;
 999:
            foxtra = _closure1_slot7;
            vacuum = _closure1_slot0;
            result = _closure1_slot2;
            yankee = 19;
            yankee = result[yankee];
            yankee = vacuum.bind(tangon)(yankee);
            romeon = yankee.PressableOpacity;
            yankee = {};
            source = 'button';
            yankee['accessibilityRole'] = source;
            yankee['accessibilityLabel'] = update;
            update = result[ctrled];
            update = vacuum.bind(tangon)(update);
            source = update.intl;
            update = source.string;
            result = result[ctrled];
            result = vacuum.bind(tangon)(result);
            result = result.t;
            result = result.QdHxoq;
            result = update.bind(source)(result);
            yankee['accessibilityHint'] = result;
            yankee['onPress'] = sizing;
            yankee['hitSlop'] = backup;
            output = output.bind(tangon)();
            yankee['children'] = output;
            offset = foxtra.bind(tangon)(romeon, yankee);
 1117:
            _fun00010_ip = 1419; continue _fun00009;
 1122:
            foxtra = _closure1_slot9;
            source = _closure1_slot0;
            result = _closure1_slot2;
            yankee = 19;
            yankee = result[yankee];
            yankee = source.bind(tangon)(yankee);
            romeon = yankee.PressableOpacity;
            yankee = {};
            output = 'button';
            yankee['accessibilityRole'] = output;
            output = result[ctrled];
            output = source.bind(tangon)(output);
            vacuum = output.intl;
            update = vacuum.string;
            output = result[ctrled];
            output = source.bind(tangon)(output);
            output = output.t;
            output = output.Vq4UmZ;
            output = update.bind(vacuum)(output);
            yankee['accessibilityLabel'] = output;
            yankee['onPress'] = sizing;
            yankee['hitSlop'] = backup;
            backup = echoed.addStatusButton;
            yankee['style'] = backup;
            output = _closure1_slot7;
            backup = 20;
            backup = result[backup];
            backup = source.bind(tangon)(backup);
            sizing = backup.CirclePlusIcon;
            backup = {};
            vacuum = _closure1_slot1;
            update = 7;
            update = result[update];
            update = vacuum.bind(tangon)(update);
            update = update.colors;
            update = update.REDESIGN_BUTTON_SECONDARY_TEXT;
            backup['color'] = update;
            update = 'xs';
            backup['size'] = update;
            echoed = echoed.addStatusIcon;
            backup['style'] = echoed;
            sizing = output.bind(tangon)(sizing, backup);
            backup = new Array(2);
            backup[0] = sizing;
            output = _closure1_slot7;
            kiloes = 9;
            kiloes = result[kiloes];
            kiloes = source.bind(tangon)(kiloes);
            sizing = kiloes.Text;
            kiloes = {'variant': 'text-md/medium', 'color': 'redesign-button-secondary-text'};
            echoed = result[ctrled];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = result[ctrled];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.Vq4UmZ;
            result = echoed.bind(update)(result);
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 1419:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();