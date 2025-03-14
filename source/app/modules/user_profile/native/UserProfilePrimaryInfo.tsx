// app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    sizing = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = sizing;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: DisplayName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.user;
            var _closure2_slot0 = zuuluu;
            yankee = michal.name;
            var _closure2_slot1 = yankee;
            tangon = michal.userProfileType;
            romeon = michal.onPress;
            offset = michal.accessibilityHint;
            verify = michal.showChevron;
            report = undefined;
            if(!(verify === report)) { _fun00002_ip = 54; continue _fun00001 }
 52:
            verify = false;
 54:
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            zuuluu = _closure1_slot15;
            option = zuuluu.bind(report)();
            _closure2_slot2 = option;
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.bind(report)(tangon);
            zuuluu = zuuluu.headingVariant;
            _closure2_slot3 = zuuluu;
            oscard = function() { // Original name: renderDisplayName
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                oscard = _closure2_slot3;
                entity['variant'] = oscard;
                report = _closure2_slot1;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            golfie = function() { // Original name: renderBotTag
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = michal.isSystemUser;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00004_ip = 249; continue _fun00003 }
 23:
                    michal = _closure2_slot0;
                    entity = michal.isClyde;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00004_ip = 152; continue _fun00003 }
 40:
                    entity = _closure2_slot0;
                    michal = entity.bot;
                    entity = null;
                    if(!michal) { _fun00004_ip = 150; continue _fun00003 }
 55:
                    report = _closure1_slot12;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 10;
                    michal = verify[golfie];
                    tangon = undefined;
                    zuuluu = option.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    michal['style'] = offset;
                    golfie = verify[golfie];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.Types;
                    golfie = golfie.BOT;
                    michal['type'] = golfie;
                    option = _closure2_slot0;
                    golfie = option.isVerifiedBot;
                    golfie = golfie.bind(option)();
                    michal['verified'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 150:
                    _fun00004_ip = 247; continue _fun00003;
 152:
                    report = _closure1_slot12;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 10;
                    michal = verify[golfie];
                    tangon = undefined;
                    zuuluu = option.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    michal['style'] = offset;
                    golfie = verify[golfie];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.Types;
                    golfie = golfie.AI;
                    michal['type'] = golfie;
                    option = _closure2_slot0;
                    golfie = option.isVerifiedBot;
                    golfie = golfie.bind(option)();
                    michal['verified'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 247:
                    _fun00004_ip = 344; continue _fun00003;
 249:
                    report = _closure1_slot12;
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 10;
                    michal = verify[golfie];
                    tangon = undefined;
                    zuuluu = option.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot2;
                    offset = offset.botTag;
                    michal['style'] = offset;
                    golfie = verify[golfie];
                    golfie = option.bind(tangon)(golfie);
                    golfie = golfie.Types;
                    golfie = golfie.SYSTEM_DM;
                    michal['type'] = golfie;
                    golfie = _closure2_slot0;
                    oscard = golfie.isVerifiedBot;
                    oscard = oscard.bind(golfie)();
                    michal['verified'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 344:
                    return entity;
                }
            };
            entity = null;
            if(!(entity != romeon)) { _fun00002_ip = 266; continue _fun00001 }
 115:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 11;
            entity = foxtra[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = romeon;
            romeon = 'button';
            entity['accessibilityRole'] = romeon;
            entity['accessibilityLabel'] = yankee;
            entity['accessibilityHint'] = offset;
            option = option.displayName;
            entity['style'] = option;
            offset = oscard.bind(report)();
            option = new Array(3);
            option[0] = offset;
            offset = golfie.bind(report)();
            option[1] = offset;
            if(!verify) { _fun00002_ip = 250; continue _fun00001 }
 200:
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            offset = 12;
            offset = foxtra[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.ChevronSmallDownIcon;
            offset = {'size': 'sm', 'color': 'icon-muted'};
            verify = romeon.bind(report)(yankee, offset);
 250:
            option[2] = verify;
            entity['children'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 306; continue _fun00001;
 266:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot5;
            michal = {};
            option = oscard.bind(report)();
            oscard = new Array(2);
            oscard[0] = option;
            golfie = golfie.bind(report)();
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 306:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    tangon = function(argFoo) { // Original name: UserTagAndPronouns
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            verify = zuuluu.userTag;
            var _closure2_slot0 = verify;
            output = zuuluu.pronouns;
            var _closure2_slot1 = output;
            report = zuuluu.userProfileType;
            foxtra = zuuluu.onPressUserTag;
            var _closure2_slot2 = foxtra;
            michal = zuuluu.userTagAccessibilityHint;
            var _closure2_slot3 = michal;
            result = zuuluu.onPressPronouns;
            sizing = zuuluu.pronounsAccessibilityHint;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            zuuluu = _closure1_slot15;
            golfie = zuuluu.bind(tangon)();
            yankee = null;
            oscard = yankee != output;
            if(!oscard) { _fun00006_ip = 100; continue _fun00005 }
 89:
            option = output.length;
            zuuluu = 0;
            oscard = option > zuuluu;
 100:
            zuuluu = _closure1_slot18;
            zuuluu = zuuluu.bind(tangon)(report);
            update = zuuluu.textVariant;
            _closure2_slot4 = update;
            option = _closure1_slot3;
            report = option.useCallback;
            zuuluu = new Array(4);
            zuuluu[0] = foxtra;
            zuuluu[1] = update;
            zuuluu[2] = verify;
            zuuluu[3] = michal;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 176; continue _fun00007 }
 16:
                    report = _closure1_slot12;
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 9;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = tangon.bind(oscard)(michal);
                    tangon = michal.Text;
                    michal = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                    golfie = _closure2_slot4;
                    michal['variant'] = golfie;
                    golfie = _closure2_slot0;
                    michal['children'] = golfie;
                    golfie = report.bind(oscard)(tangon, michal);
                    tangon = _closure2_slot2;
                    michal = golfie;
                    if(!(entity != tangon)) { _fun00008_ip = 174; continue _fun00007 }
 99:
                    report = _closure1_slot12;
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = verify[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = zuuluu.PressableOpacity;
                    zuuluu = {};
                    verify = _closure2_slot2;
                    zuuluu['onPress'] = verify;
                    verify = 'button';
                    zuuluu['accessibilityRole'] = verify;
                    verify = _closure2_slot0;
                    zuuluu['accessibilityLabel'] = verify;
                    option = _closure2_slot3;
                    zuuluu['accessibilityHint'] = option;
                    zuuluu['children'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu);
 174:
                    return michal;
 176:
                    return entity;
                }
            };
            report = report.bind(option)(michal, zuuluu);
            kiloes = function() { // Original name: renderPronouns
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'variant': null, 'color': 'header-primary', 'lineClamp': 1};
                oscard = _closure2_slot4;
                entity['variant'] = oscard;
                report = _closure2_slot1;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            zuuluu = _closure1_slot13;
            michal = _closure1_slot5;
            entity = {};
            golfie = golfie.detailsText;
            entity['style'] = golfie;
            golfie = report.bind(tangon)();
            report = new Array(2);
            report[0] = golfie;
            if(!oscard) { _fun00006_ip = 370; continue _fun00005 }
 202:
            verify = _closure1_slot13;
            option = _closure1_slot14;
            golfie = {};
            echoed = _closure1_slot12;
            backup = _closure1_slot0;
            source = _closure1_slot2;
            offset = 9;
            offset = source[offset];
            offset = backup.bind(tangon)(offset);
            backup = offset.Text;
            offset = {};
            offset['variant'] = update;
            update = 'header-primary';
            offset['color'] = update;
            update = _closure1_slot8;
            offset['children'] = update;
            backup = echoed.bind(tangon)(backup, offset);
            offset = new Array(2);
            offset[0] = backup;
            if(!(yankee == foxtra)) { _fun00006_ip = 289; continue _fun00005 }
 283:
            yankee = kiloes.bind(tangon)();
            _fun00006_ip = 356; continue _fun00005;
 289:
            backup = _closure1_slot12;
            foxtra = _closure1_slot0;
            echoed = _closure1_slot2;
            romeon = 11;
            romeon = echoed[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.PressableOpacity;
            romeon = {};
            romeon['onPress'] = result;
            result = 'button';
            romeon['accessibilityRole'] = result;
            romeon['accessibilityLabel'] = output;
            romeon['accessibilityHint'] = sizing;
            kiloes = kiloes.bind(tangon)();
            romeon['children'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, romeon);
 356:
            offset[1] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 370:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    entity = function(argFoo) { // Original name: ProfileBadge
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            foxtra = entity.source;
            var _closure2_slot0 = foxtra;
            oscard = entity.id;
            var _closure2_slot1 = oscard;
            sizing = entity.label;
            var _closure2_slot2 = sizing;
            golfie = entity.badgeSize;
            verify = entity.userId;
            report = entity.userProfileType;
            entity = entity.showToastOnPress;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00010_ip = 63; continue _fun00009 }
 61:
            entity = true;
 63:
            var _closure2_slot3 = tangon;
            michal = _closure1_slot15;
            backup = michal.bind(tangon)();
            zuuluu = null;
            michal = zuuluu != golfie;
            kiloes = undefined;
            if(!michal) { _fun00010_ip = 102; continue _fun00009 }
 89:
            michal = {};
            michal['width'] = golfie;
            michal['height'] = golfie;
            kiloes = michal;
 102:
            golfie = _closure1_slot3;
            michal = golfie.useRef;
            yankee = michal.bind(golfie)(zuuluu);
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            michal = 13;
            michal = output[michal];
            option = golfie.bind(tangon)(michal);
            michal = option.useTieredTenureBadgeClickHandler;
            michal = michal.bind(option)(oscard, verify, report);
            _closure2_slot3 = michal;
            michal = 14;
            option = output[michal];
            option = golfie.bind(tangon)(option);
            verify = option.intl;
            option = verify.formatToPlainString;
            michal = output[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            golfie = michal.A0LN9v;
            michal = {};
            michal['badgeLabel'] = sizing;
            sizing = option.bind(verify)(golfie, michal);
            michal = _closure1_slot10;
            michal = michal.YOU_SCREEN;
            michal = report === michal;
            if(!michal) { _fun00010_ip = 240; continue _fun00009 }
 229:
            golfie = 'string';
            report = typeof oscard;
            michal = golfie === report;
 240:
            golfie = null;
            if(!michal) { _fun00010_ip = 287; continue _fun00009 }
 245:
            report = _closure1_slot12;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['targetRef'] = yankee;
            michal['badgeId'] = oscard;
            golfie = report.bind(tangon)(zuuluu, michal);
 287:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot14;
            report = {};
            verify = _closure1_slot12;
            if(entity) { _fun00010_ip = 389; continue _fun00009 }
 304:
            oscard = _closure1_slot4;
            entity = {};
            output = backup.badge;
            option = new Array(2);
            option[0] = output;
            option[1] = kiloes;
            entity['style'] = option;
            entity['source'] = foxtra;
            option = true;
            entity['accessible'] = option;
            option = 'image';
            entity['accessibilityRole'] = option;
            entity['accessibilityLabel'] = sizing;
            entity['ref'] = yankee;
            oscard = verify.bind(tangon)(oscard, entity);
            entity = new Array(2);
            entity[0] = oscard;
            entity[1] = golfie;
            report['children'] = entity;
            entity = report;
            _fun00010_ip = 513; continue _fun00009;
 389:
            option = _closure1_slot0;
            output = _closure1_slot2;
            oscard = 11;
            oscard = output[oscard];
            oscard = option.bind(tangon)(oscard);
            option = oscard.PressableOpacity;
            oscard = {};
            output = 'image';
            oscard['accessibilityRole'] = output;
            oscard['accessibilityLabel'] = sizing;
            romeon = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 28; continue _fun00011 }
 13:
                    zuuluu = _closure2_slot3;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00012_ip = 241; continue _fun00011;
 28:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 16;
                    michal = tangon[michal];
                    verify = undefined;
                    oscard = zuuluu.bind(verify)(michal);
                    zuuluu = oscard.open;
                    michal = {};
                    golfie = _closure2_slot2;
                    option = global;
                    option = option.HermesInternal;
                    offset = option.concat;
                    option = 'PROFILE_BADGE-';
                    option = offset.bind(option)(golfie);
                    michal['key'] = option;
                    michal['content'] = golfie;
                    golfie = _closure2_slot0;
                    michal['icon'] = golfie;
                    michal = zuuluu.bind(oscard)(michal);
                    michal = _closure2_slot1;
                    zuuluu = _closure1_slot0;
                    entity = 17;
                    entity = tangon[entity];
                    entity = zuuluu.bind(verify)(entity);
                    entity = entity.QUEST_COMPLETED_BADGE;
                    if(!(michal === entity)) { _fun00012_ip = 241; continue _fun00011 }
 140:
                    michal = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 18;
                    entity = offset[entity];
                    tangon = michal.bind(verify)(entity);
                    zuuluu = tangon.track;
                    entity = _closure1_slot11;
                    michal = entity.QUEST_CONTENT_VIEWED;
                    entity = {};
                    option = _closure1_slot0;
                    report = 19;
                    report = offset[report];
                    golfie = option.bind(verify)(report);
                    oscard = golfie.getContentProperties;
                    report = 20;
                    report = offset[report];
                    report = option.bind(verify)(report);
                    report = report.QuestContent;
                    report = report.QUEST_BADGE;
                    yankee = oscard.bind(golfie)(report);
                    romeon = entity;
                    report = copyDataProperties(romeon, yankee);
                    entity = zuuluu.bind(tangon)(michal, entity);
 241:
                    entity = undefined;
                    return entity;
                }
            };
            oscard['onPress'] = romeon;
            oscard['ref'] = yankee;
            romeon = _closure1_slot12;
            yankee = _closure1_slot4;
            offset = {};
            sizing = backup.badge;
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = kiloes;
            offset['style'] = backup;
            offset['source'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            oscard['children'] = offset;
            option = verify.bind(tangon)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            report['children'] = oscard;
            entity = report;
 513:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    michal = function(argFoo) { // Original name: ProfileBadgeRows
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            foxtra = michal.userId;
            var _closure2_slot0 = foxtra;
            zuuluu = michal.guildId;
            entity = michal.isTryItOut;
            tangon = michal.style;
            var _closure2_slot1 = tangon;
            verify = michal.userProfileType;
            var _closure2_slot2 = verify;
            romeon = michal.showToastOnPress;
            var _closure2_slot3 = romeon;
            tangon = undefined;
            var _closure2_slot8 = tangon;
            michal = _closure1_slot15;
            option = michal.bind(tangon)();
            var _closure2_slot4 = option;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 21;
            michal = yankee[michal];
            michal = golfie.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)(foxtra, zuuluu);
            michal = _closure1_slot18;
            michal = michal.bind(tangon)(verify);
            verify = michal.badgeSize;
            var _closure2_slot5 = verify;
            offset = michal.badgeRowHorizontalPadding;
            var _closure2_slot6 = offset;
            michal = 17;
            michal = yankee[michal];
            michal = golfie.bind(tangon)(michal);
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = golfie.map;
            michal = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tangon = _closure1_slot21;
                zuuluu = {};
                oscard = entity.id;
                zuuluu['id'] = oscard;
                golfie = _closure2_slot0;
                zuuluu['userId'] = golfie;
                golfie = {};
                verify = _closure1_slot7;
                option = entity.icon;
                michal = undefined;
                option = verify.bind(michal)(option);
                golfie['uri'] = option;
                zuuluu['source'] = golfie;
                golfie = entity.description;
                zuuluu['label'] = golfie;
                golfie = _closure2_slot5;
                zuuluu['badgeSize'] = golfie;
                golfie = _closure2_slot2;
                zuuluu['userProfileType'] = golfie;
                oscard = _closure2_slot3;
                zuuluu['showToastOnPress'] = oscard;
                entity = entity.id;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            yankee = zuuluu.bind(golfie)(michal);
            var _closure2_slot7 = yankee;
            if(!entity) { _fun00014_ip = 190; continue _fun00013 }
 169:
            zuuluu = golfie.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = 'premium';
                entity = entity === michal;
                return entity;
            };
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = null;
            entity = michal == zuuluu;
 190:
            if(!entity) { _fun00014_ip = 359; continue _fun00013 }
 196:
            michal = yankee.push;
            golfie = _closure1_slot12;
            zuuluu = _closure1_slot21;
            entity = {};
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            backup = 22;
            backup = output[backup];
            backup = kiloes.bind(tangon)(backup);
            entity['source'] = backup;
            backup = 'premium';
            entity['id'] = backup;
            entity['userId'] = foxtra;
            backup = _closure1_slot0;
            foxtra = 14;
            kiloes = output[foxtra];
            kiloes = backup.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.formatToPlainString;
            foxtra = output[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            backup = foxtra.8zbGNT;
            foxtra = {};
            output = global;
            output = output.Date;
            result = output.prototype;
            result = Object.create(result, {constructor: {value: output}});
            source = result;
            output = new source[output](update);
            output = output instanceof Object ? output : result;
            foxtra['date'] = output;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            entity['label'] = foxtra;
            entity['badgeSize'] = verify;
            entity['showToastOnPress'] = romeon;
            entity = golfie.bind(tangon)(zuuluu, entity);
            entity = michal.bind(yankee)(entity);
 359:
            entity = _closure1_slot6;
            entity = entity.bind(tangon)();
            entity = entity.width;
            _closure2_slot8 = entity;
            golfie = _closure1_slot3;
            zuuluu = golfie.useMemo;
            michal = new Array(4);
            michal[0] = yankee;
            michal[1] = offset;
            michal[2] = verify;
            michal[3] = entity;
            entity = function() {
                oscard = global;
                tangon = oscard.Math;
                zuuluu = tangon.floor;
                option = _closure2_slot8;
                michal = _closure1_slot9;
                golfie = 2;
                michal = golfie * michal;
                option = option - michal;
                michal = _closure2_slot6;
                michal = golfie * michal;
                verify = _closure2_slot5;
                golfie = 8;
                golfie = verify + golfie;
                michal = option - michal;
                michal = michal / golfie;
                option = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = option;
                tangon = oscard.Array;
                zuuluu = tangon.from;
                michal = {};
                golfie = oscard.Math;
                oscard = golfie.ceil;
                report = _closure2_slot7;
                report = report.length;
                report = report / option;
                report = oscard.bind(golfie)(report);
                michal['length'] = report;
                entity = function(argFoo, argBar) {
                    oscard = argBar;
                    tangon = _closure2_slot7;
                    zuuluu = tangon.slice;
                    report = _closure3_slot0;
                    michal = oscard * report;
                    entity = 1;
                    entity = oscard + entity;
                    entity = entity * report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            verify = option.badges;
            option = new Array(1);
            option[0] = verify;
            entity['style'] = option;
            option = 'list';
            entity['accessibilityRole'] = option;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 14;
            option = yankee[oscard];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            oscard = yankee[oscard];
            oscard = offset.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.VWV0y8;
            oscard = option.bind(verify)(oscard);
            entity['accessibilityLabel'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                report = _closure1_slot12;
                tangon = _closure1_slot5;
                zuuluu = {};
                entity = _closure2_slot4;
                oscard = entity.badgeRow;
                entity = new Array(3);
                entity[0] = oscard;
                oscard = {};
                golfie = _closure2_slot6;
                oscard['paddingHorizontal'] = golfie;
                entity[1] = oscard;
                michal = _closure2_slot1;
                entity[2] = michal;
                zuuluu['style'] = entity;
                entity = argFoo;
                zuuluu['children'] = entity;
                michal = undefined;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = michal;
    entity = function(argFoo) { // Original name: ClanTag
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            kiloes = entity.user;
            golfie = entity.userProfileType;
            offset = entity.style;
            yankee = entity.showToastOnPress;
            report = undefined;
            if(!(yankee === report)) { _fun00016_ip = 33; continue _fun00015 }
 31:
            yankee = false;
 33:
            entity = _closure1_slot15;
            option = entity.bind(report)();
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 23;
            entity = tangon[entity];
            oscard = zuuluu.bind(report)(entity);
            zuuluu = oscard.getUserPrimaryGuild;
            tangon = null;
            verify = tangon == kiloes;
            entity = undefined;
            if(verify) { _fun00016_ip = 87; continue _fun00015 }
 81:
            entity = kiloes.primaryGuild;
 87:
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.tag;
            zuuluu = zuuluu.guildId;
            oscard = _closure1_slot18;
            oscard = oscard.bind(report)(golfie);
            backup = oscard.badgeSize;
            golfie = oscard.clanTagBadgeSize;
            romeon = oscard.clanTagHorizontalPadding;
            oscard = oscard.clanTagTextVariant;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 24;
            verify = sizing[verify];
            foxtra = foxtra.bind(report)(verify);
            verify = foxtra.isAndroid;
            verify = verify.bind(foxtra)();
            foxtra = 4;
            sizing = foxtra;
            if(!verify) { _fun00016_ip = 176; continue _fun00015 }
 173:
            sizing = 2;
 176:
            output = _closure1_slot0;
            result = _closure1_slot2;
            verify = 9;
            verify = result[verify];
            verify = output.bind(report)(verify);
            verify = verify.TextStyleSheet;
            verify = verify[oscard];
            verify = verify.fontSize;
            verify = verify + sizing;
            sizing = tangon == entity;
            entity = null;
            if(sizing) { _fun00016_ip = 350; continue _fun00015 }
 228:
            zuuluu = tangon == zuuluu;
            entity = null;
            if(zuuluu) { _fun00016_ip = 350; continue _fun00015 }
 237:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot1;
            sizing = _closure1_slot2;
            michal = 25;
            michal = sizing[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            kiloes = kiloes.id;
            michal['userId'] = kiloes;
            yankee = !yankee;
            michal['disabledTooltip'] = yankee;
            yankee = option.clanTag;
            option = new Array(3);
            option[0] = yankee;
            yankee = {};
            foxtra = backup + foxtra;
            yankee['minHeight'] = foxtra;
            yankee['paddingHorizontal'] = romeon;
            option[1] = yankee;
            option[2] = offset;
            michal['containerStyles'] = option;
            option = {};
            option['lineHeight'] = verify;
            michal['textStyle'] = option;
            michal['badgeSize'] = golfie;
            michal['textVariant'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 350:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    offset = verify[entity];
    golfie = argCor;
    entity = undefined;
    golfie = golfie.bind(entity)(offset);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.Image;
    var _closure1_slot4 = offset;
    offset = golfie.View;
    var _closure1_slot5 = offset;
    golfie = golfie.useWindowDimensions;
    var _closure1_slot6 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.getBadgeAsset;
    var _closure1_slot7 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.DIVIDER_DOT;
    var _closure1_slot8 = offset;
    offset = golfie.PROFILE_SIDE_PADDING;
    var _closure1_slot9 = offset;
    offset = golfie.UserProfileType;
    var _closure1_slot10 = offset;
    output = 4;
    golfie = verify[output];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot11 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    romeon = golfie.ClanTagBadgeSize;
    golfie = 6;
    yankee = verify[golfie];
    yankee = option.bind(entity)(yankee);
    yankee = yankee.jsx;
    var _closure1_slot12 = yankee;
    yankee = verify[golfie];
    yankee = option.bind(entity)(yankee);
    yankee = yankee.jsxs;
    var _closure1_slot13 = yankee;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot14 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    foxtra = option.bind(entity)(golfie);
    yankee = foxtra.createStyles;
    golfie = {};
    backup = {};
    kiloes = 'column';
    backup['flexDirection'] = kiloes;
    golfie['container'] = backup;
    backup = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4};
    golfie['displayName'] = backup;
    kiloes = 8;
    backup = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 8};
    golfie['details'] = backup;
    backup = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignContent': 'center', 'paddingVertical': 2};
    golfie['detailsText'] = backup;
    backup = {};
    backup['marginLeft'] = output;
    golfie['botTag'] = backup;
    backup = {'alignSelf': 'center', 'borderRadius': null, 'columnGap': 4};
    output = verify[kiloes];
    output = sizing.bind(entity)(output);
    output = output.radii;
    output = output.sm;
    backup['borderRadius'] = output;
    golfie['clanTag'] = backup;
    backup = {};
    output = 'contain';
    backup['resizeMode'] = output;
    golfie['badge'] = backup;
    backup = {'alignSelf': 'center', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'rowGap': 8};
    golfie['badges'] = backup;
    backup = {'borderRadius': null, 'paddingVertical': 2, 'justifyContent': 'flex-start', 'flexDirection': 'row', 'marginRight': 'auto', 'columnGap': 4};
    kiloes = verify[kiloes];
    kiloes = sizing.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.sm;
    backup['borderRadius'] = kiloes;
    golfie['badgeRow'] = backup;
    golfie = yankee.bind(foxtra)(golfie);
    var _closure1_slot15 = golfie;
    golfie = {'headingVariant': 'heading-xl/bold', 'textVariant': 'text-md/normal', 'badgeSize': 20, 'badgeRowHorizontalPadding': 7, 'clanTagBadgeSize': null, 'clanTagTextVariant': 'text-sm/medium', 'clanTagHorizontalPadding': 8};
    yankee = romeon.SIZE_16;
    golfie['clanTagBadgeSize'] = yankee;
    var _closure1_slot16 = golfie;
    golfie = {};
    yankee = offset.PREVIEW;
    offset = {'headingVariant': 'heading-lg/bold', 'textVariant': 'text-sm/normal', 'badgeSize': 16, 'badgeRowHorizontalPadding': 6, 'clanTagBadgeSize': null, 'clanTagTextVariant': 'text-xs/medium', 'clanTagHorizontalPadding': 6};
    romeon = romeon.SIZE_12;
    offset['clanTagBadgeSize'] = romeon;
    golfie[yankee] = offset;
    var _closure1_slot17 = golfie;
    golfie = function(argFoo) { // Original name: getStyleConfig
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            entity = undefined;
            if(!zuuluu) { _fun00018_ip = 19; continue _fun00017 }
 8:
            michal = _closure1_slot17;
            entity = michal[zuuluu];
 19:
            michal = null;
            if(!(michal == entity)) { _fun00018_ip = 32; continue _fun00017 }
 25:
            entity = _closure1_slot16;
 32:
            return entity;
        }
    };
    var _closure1_slot18 = golfie;
    golfie = 27;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/user_profile/native/UserProfilePrimaryInfo.tsx';
    golfie = option.bind(verify)(golfie);
    oscard = function(argFoo) { // Original name: UserProfilePrimaryInfo
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            output = michal.user;
            sizing = michal.guildId;
            record = michal.displayName;
            ctrled = michal.pronouns;
            oscard = michal.style;
            entity = michal.badgeContainerBackground;
            backup = michal.userProfileType;
            romeon = michal.onPressDisplayName;
            yankee = michal.displayNameAccessibilityHint;
            source = michal.onPressUserTag;
            update = michal.userTagAccessibilityHint;
            echoed = michal.onPressPronouns;
            result = michal.pronounsAccessibilityHint;
            option = michal.showChevron;
            foxtra = michal.showBadgeToastOnPress;
            michal = _closure1_slot15;
            tangon = undefined;
            verify = michal.bind(tangon)();
            kiloes = {};
            kiloes['backgroundColor'] = entity;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 26;
            report = zuuluu[entity];
            golfie = michal.bind(tangon)(report);
            report = golfie.useName;
            config = report.bind(golfie)(output);
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useUserTag;
            sequen = entity.bind(michal)(output);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot5;
            entity = {};
            golfie = verify.container;
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot12;
            oscard = _closure1_slot19;
            report = {};
            report['user'] = output;
            cntext = '';
            vacuum = config;
            if(!(cntext !== record)) { _fun00020_ip = 227; continue _fun00019 }
 215:
            cntext = null;
            if(!(cntext != record)) { _fun00020_ip = 224; continue _fun00019 }
 221:
            config = record;
 224:
            vacuum = config;
 227:
            report['name'] = vacuum;
            report['userProfileType'] = backup;
            report['onPress'] = romeon;
            report['accessibilityHint'] = yankee;
            report['showChevron'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot5;
            oscard = {};
            verify = verify.details;
            oscard['style'] = verify;
            romeon = _closure1_slot12;
            yankee = _closure1_slot20;
            verify = {};
            config = output.isProvisional;
            vacuum = null;
            if(config) { _fun00020_ip = 308; continue _fun00019 }
 305:
            vacuum = sequen;
 308:
            verify['userTag'] = vacuum;
            verify['pronouns'] = ctrled;
            verify['userProfileType'] = backup;
            verify['onPressUserTag'] = source;
            verify['userTagAccessibilityHint'] = update;
            verify['onPressPronouns'] = echoed;
            verify['pronounsAccessibilityHint'] = result;
            yankee = romeon.bind(tangon)(yankee, verify);
            verify = new Array(3);
            verify[0] = yankee;
            result = _closure1_slot12;
            romeon = _closure1_slot23;
            yankee = {};
            yankee['user'] = output;
            yankee['userProfileType'] = backup;
            yankee['style'] = kiloes;
            yankee['showToastOnPress'] = foxtra;
            yankee = result.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            romeon = _closure1_slot12;
            yankee = _closure1_slot22;
            offset = {};
            output = output.id;
            offset['userId'] = output;
            offset['guildId'] = sizing;
            offset['style'] = kiloes;
            offset['userProfileType'] = backup;
            offset['showToastOnPress'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = oscard;
    zuuluu['DisplayName'] = report;
    zuuluu['UserTagAndPronouns'] = tangon;
    zuuluu['ProfileBadgeRows'] = michal;
    return entity;
})();