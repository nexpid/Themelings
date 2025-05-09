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
    golfie = tangon.UserProfileThemeTypes;
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
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {'textVariant': 'text-md/normal', 'emojiOnlyEmojiSize': 32, 'textMinWidth': 42, 'statusBubblePaddingHorizontal': 12, 'statusBubblePaddingVertical': 7};
    var _closure1_slot11 = tangon;
    tangon = {};
    option = golfie.PREVIEW;
    golfie = {'textVariant': 'text-sm/normal', 'emojiOnlyEmojiSize': 26, 'textMinWidth': 53, 'statusBubblePaddingHorizontal': 10, 'statusBubblePaddingVertical': 6};
    tangon[option] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileCustomStatusBubble.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileCustomStatusBubble
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            output = entity.customStatusActivity;
            report = entity.themeType;
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
            verify = entity.previewEmoji;
            update = entity.previewText;
            offset = entity.previewLabel;
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
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            michal = _closure1_slot10;
            echoed = michal.bind(tangon)(zuuluu);
            _closure2_slot2 = echoed;
            zuuluu = undefined;
            if(!report) { _fun00010_ip = 179; continue _fun00009 }
 171:
            michal = _closure1_slot12;
            zuuluu = michal[report];
 179:
            yankee = null;
            if(!(yankee == zuuluu)) { _fun00010_ip = 189; continue _fun00009 }
 185:
            zuuluu = _closure1_slot11;
 189:
            michal = zuuluu.textVariant;
            _closure2_slot3 = michal;
            sequen = zuuluu.emojiOnlyEmojiSize;
            _closure2_slot4 = sequen;
            config = zuuluu.textMinWidth;
            michal = zuuluu.statusBubblePaddingHorizontal;
            zuuluu = zuuluu.statusBubblePaddingVertical;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            report = 14;
            report = backup[report];
            foxtra = foxtra.bind(tangon)(report);
            report = foxtra.useUserProfileAnalyticsContext;
            report = report.bind(foxtra)();
            report = report.trackUserProfileAction;
            _closure2_slot5 = report;
            if(!(tangon !== update)) { _fun00010_ip = 279; continue _fun00009 }
 271:
            report = '';
            if(!(report === update)) { _fun00010_ip = 296; continue _fun00009 }
 279:
            foxtra = yankee == output;
            report = undefined;
            if(foxtra) { _fun00010_ip = 293; continue _fun00009 }
 288:
            report = output.state;
 293:
            update = report;
 296:
            backup = yankee != update;
            if(!backup) { _fun00010_ip = 311; continue _fun00009 }
 303:
            report = '';
            backup = report !== update;
 311:
            if(!(tangon === verify)) { _fun00010_ip = 333; continue _fun00009 }
 315:
            foxtra = yankee == output;
            report = undefined;
            if(foxtra) { _fun00010_ip = 330; continue _fun00009 }
 324:
            report = output.emoji;
 330:
            verify = report;
 333:
            _closure2_slot6 = verify;
            report = yankee != verify;
            vacuum = report;
            if(!report) { _fun00010_ip = 350; continue _fun00009 }
 347:
            vacuum = !backup;
 350:
            _closure2_slot7 = vacuum;
            foxtra = !backup;
            if(backup) { _fun00010_ip = 363; continue _fun00009 }
 360:
            foxtra = !report;
 363:
            if(!foxtra) { _fun00010_ip = 370; continue _fun00009 }
 366:
            foxtra = tangon !== entity;
 370:
            if(!foxtra) { _fun00010_ip = 381; continue _fun00009 }
 373:
            backup = '';
            foxtra = backup !== entity;
 381:
            _closure2_slot8 = foxtra;
            if(!foxtra) { _fun00010_ip = 391; continue _fun00009 }
 388:
            update = entity;
 391:
            _closure2_slot9 = update;
            sizing = yankee != update;
            if(!sizing) { _fun00010_ip = 410; continue _fun00009 }
 402:
            entity = '';
            sizing = entity !== update;
 410:
            _closure2_slot10 = sizing;
            entity = sizing;
            if(entity) { _fun00010_ip = 423; continue _fun00009 }
 420:
            entity = report;
 423:
            foxtra = !entity;
            if(entity) { _fun00010_ip = 432; continue _fun00009 }
 429:
            foxtra = romeon;
 432:
            backup = yankee != output;
            report = null;
            if(!backup) { _fun00010_ip = 466; continue _fun00009 }
 441:
            source = _closure1_slot1;
            ctrled = _closure1_slot2;
            backup = 15;
            backup = ctrled[backup];
            backup = source.bind(tangon)(backup);
            report = backup.bind(tangon)(output);
 466:
            if(!(yankee != offset)) { _fun00010_ip = 473; continue _fun00009 }
 470:
            report = offset;
 473:
            _closure2_slot11 = report;
            backup = yankee != report;
            _closure2_slot12 = backup;
            output = _closure1_slot4;
            offset = output.useState;
            report = false;
            offset = offset.bind(output)(report);
            report = _closure1_slot3;
            ctrled = 2;
            source = report.bind(tangon)(offset, ctrled);
            report = 0;
            offset = source[report];
            output = 1;
            output = source[output];
            _closure2_slot13 = output;
            source = {};
            output = 0;
            if(!sizing) { _fun00010_ip = 541; continue _fun00009 }
 538:
            output = config;
 541:
            source['minWidth'] = output;
            output = 0;
            if(!vacuum) { _fun00010_ip = 559; continue _fun00009 }
 551:
            ctrled = ctrled * zuuluu;
            output = sequen + ctrled;
 559:
            source['minHeight'] = output;
            if(sizing) { _fun00010_ip = 575; continue _fun00009 }
 567:
            if(foxtra) { _fun00010_ip = 575; continue _fun00009 }
 570:
            report = 0;
            if(!backup) { _fun00010_ip = 578; continue _fun00009 }
 575:
            report = zuuluu;
 578:
            source['paddingVertical'] = report;
            source['paddingHorizontal'] = michal;
            _closure2_slot14 = source;
            backup = {};
            backup['top'] = zuuluu;
            backup['bottom'] = zuuluu;
            backup['left'] = michal;
            backup['right'] = michal;
            if(entity) { _fun00010_ip = 617; continue _fun00009 }
 612:
            if(foxtra) { _fun00010_ip = 617; continue _fun00009 }
 615:
            return yankee;
 617:
            sizing = function() { // Original name: handlePressAddOrEditStatus
                zuuluu = _closure2_slot5;
                michal = {};
                entity = 'PRESS_EDIT_CUSTOM_STATUS';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 16;
                zuuluu = golfie[zuuluu];
                tangon = oscard.bind(entity)(zuuluu);
                zuuluu = tangon.hideActionSheet;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = _closure1_slot0;
                michal = 17;
                michal = golfie[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openEditCustomStatusModal;
                michal = {};
                report = 'UserProfileCustomStatusBubble';
                michal['location'] = report;
                report = 18;
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
                    option = _closure2_slot12;
                    if(!option) { _fun00012_ip = 89; continue _fun00011 }
 10:
                    report = _closure1_slot7;
                    tangon = _closure1_slot5;
                    zuuluu = {};
                    oscard = _closure2_slot2;
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
                    offset = _closure2_slot11;
                    oscard['label'] = offset;
                    oscard = verify.bind(entity)(golfie, oscard);
                    zuuluu['children'] = oscard;
                    option = report.bind(entity)(tangon, zuuluu);
 89:
                    entity = _closure2_slot10;
                    if(entity) { _fun00012_ip = 177; continue _fun00011 }
 96:
                    zuuluu = _closure2_slot7;
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
                    romeon = _closure2_slot6;
                    verify['emoji'] = romeon;
                    romeon = _closure2_slot4;
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
                    offset = _closure2_slot9;
                    golfie['text'] = offset;
                    offset = _closure2_slot8;
                    golfie['isPlaceholderText'] = offset;
                    offset = _closure2_slot6;
                    golfie['emoji'] = offset;
                    offset = _closure2_slot3;
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
            ctrled = 20;
            zuuluu = entity[ctrled];
            zuuluu = michal.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.formatToPlainString;
            entity = entity[ctrled];
            entity = michal.bind(tangon)(entity);
            entity = entity.t;
            michal = entity.UpF5QU;
            entity = {};
            sequen = yankee == verify;
            config = undefined;
            if(sequen) { _fun00010_ip = 695; continue _fun00009 }
 690:
            config = verify.name;
 695:
            record = yankee != config;
            verify = '';
            sequen = verify;
            if(!record) { _fun00010_ip = 712; continue _fun00009 }
 709:
            sequen = config;
 712:
            entity['emoji'] = sequen;
            sequen = yankee != update;
            if(!sequen) { _fun00010_ip = 727; continue _fun00009 }
 724:
            verify = update;
 727:
            entity['status'] = verify;
            update = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            entity = {};
            report = new Array(2);
            report[0] = golfie;
            golfie = undefined;
            if(!vacuum) { _fun00010_ip = 763; continue _fun00009 }
 760:
            golfie = option;
 763:
            report[1] = golfie;
            entity['style'] = report;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            report = {};
            sequen = echoed.bubble;
            verify = new Array(2);
            verify[0] = sequen;
            sequen = echoed.smallCircle;
            verify[1] = sequen;
            report['style'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(4);
            report[0] = golfie;
            verify = _closure1_slot7;
            option = _closure1_slot5;
            golfie = {};
            config = echoed.bubble;
            sequen = new Array(2);
            sequen[0] = config;
            config = echoed.largeCircle;
            sequen[1] = config;
            golfie['style'] = sequen;
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
                    golfie = _closure2_slot14;
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
                        zuuluu = _closure2_slot13;
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
            sequen = echoed.bubble;
            verify = new Array(4);
            verify[0] = sequen;
            sequen = echoed.statusBubble;
            verify[1] = sequen;
            verify[2] = source;
            source = !vacuum;
            if(vacuum) { _fun00010_ip = 934; continue _fun00009 }
 928:
            source = echoed.statusBubbleLeftAligned;
 934:
            verify[3] = source;
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
            if(foxtra) { _fun00010_ip = 1208; continue _fun00009 }
 1000:
            if(romeon) { _fun00010_ip = 1085; continue _fun00009 }
 1003:
            if(!(yankee != result)) { _fun00010_ip = 1010; continue _fun00009 }
 1007:
            if(offset) { _fun00010_ip = 1016; continue _fun00009 }
 1010:
            offset = output.bind(tangon)();
            _fun00010_ip = 1083; continue _fun00009;
 1016:
            foxtra = _closure1_slot7;
            romeon = _closure1_slot0;
            source = _closure1_slot2;
            yankee = 21;
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
 1083:
            _fun00010_ip = 1203; continue _fun00009;
 1085:
            foxtra = _closure1_slot7;
            vacuum = _closure1_slot0;
            result = _closure1_slot2;
            yankee = 21;
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
 1203:
            _fun00010_ip = 1505; continue _fun00009;
 1208:
            foxtra = _closure1_slot9;
            source = _closure1_slot0;
            result = _closure1_slot2;
            yankee = 21;
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
            backup = 22;
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
 1505:
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