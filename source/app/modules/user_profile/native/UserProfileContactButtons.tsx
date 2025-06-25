// app/modules/user_profile/native/UserProfileContactButtons.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ContactButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            foxtra = tangon.icon;
            offset = tangon.label;
            michal = tangon.hasCustomProfileTheme;
            zuuluu = {'icon': 0, 'label': 0, 'hasCustomProfileTheme': 0};
            sizing = null;
            output = zuuluu;
            entity = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = tangon;
            kiloes = zuuluu;
            option = copyDataProperties(output, sizing, kiloes);
            entity = _closure1_slot8;
            tangon = undefined;
            report = entity.bind(tangon)();
            verify = 'secondary';
            if(!michal) { _fun00002_ip = 78; continue _fun00001 }
 74:
            verify = 'primary';
 78:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 7;
            entity = oscard[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.colors;
            if(michal) { _fun00002_ip = 114; continue _fun00001 }
 106:
            backup = entity.REDESIGN_BUTTON_SECONDARY_TEXT;
            _fun00002_ip = 119; continue _fun00001;
 114:
            backup = entity.WHITE;
 119:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            report = report.buttonArea;
            entity['style'] = report;
            golfie = _closure1_slot6;
            oscard = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 8;
            report = romeon[report];
            report = oscard.bind(tangon)(report);
            oscard = report.IconButton;
            report = {};
            romeon = _closure1_slot6;
            yankee = {};
            yankee['color'] = backup;
            yankee = romeon.bind(tangon)(foxtra, yankee);
            report['icon'] = yankee;
            report['label'] = offset;
            report['accessibilityLabel'] = offset;
            report['variant'] = verify;
            output = report;
            sizing = option;
            option = copyDataProperties(output, sizing);
            verify = true;
            option = 'grow';
            report[option] = verify;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: FriendRequestButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            offset = entity.user;
            var _closure2_slot0 = offset;
            option = entity.hasCustomProfileTheme;
            tangon = entity.location;
            oscard = undefined;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            entity = michal.bind(oscard)(entity);
            entity = entity.bind(oscard)();
            zuuluu = entity.newestAnalyticsLocation;
            michal = _closure1_slot0;
            entity = 10;
            entity = report[entity];
            michal = michal.bind(oscard)(entity);
            entity = michal.useUserProfileAnalyticsContext;
            entity = entity.bind(michal)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot1 = entity;
            entity = {};
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 115; continue _fun00003 }
 112:
            zuuluu = tangon;
 115:
            entity['location'] = zuuluu;
            _closure2_slot2 = entity;
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 11;
            entity = yankee[entity];
            report = tangon.bind(oscard)(entity);
            zuuluu = report.useGameFriendsForUser;
            entity = offset.id;
            zuuluu = zuuluu.bind(report)(entity);
            entity = 12;
            entity = yankee[entity];
            romeon = tangon.bind(oscard)(entity);
            report = romeon.useStateFromStores;
            entity = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getRelationshipType;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(romeon)(tangon, entity);
            tangon = _closure1_slot1;
            entity = 13;
            entity = yankee[entity];
            tangon = tangon.bind(oscard)(entity);
            entity = tangon.useName;
            entity = entity.bind(tangon)(offset);
            _closure2_slot3 = entity;
            entity = _closure1_slot5;
            tangon = entity.FRIEND;
            entity = null;
            if(!(report !== tangon)) { _fun00004_ip = 826; continue _fun00003 }
 251:
            tangon = _closure1_slot5;
            tangon = tangon.BLOCKED;
            entity = null;
            if(!(report !== tangon)) { _fun00004_ip = 826; continue _fun00003 }
 270:
            tangon = _closure1_slot5;
            tangon = tangon.PENDING_INCOMING;
            if(!(report !== tangon)) { _fun00004_ip = 661; continue _fun00003 }
 287:
            tangon = _closure1_slot5;
            tangon = tangon.PENDING_OUTGOING;
            if(!(report !== tangon)) { _fun00004_ip = 494; continue _fun00003 }
 304:
            tangon = zuuluu.length;
            zuuluu = 0;
            zuuluu = tangon > zuuluu;
            michal = null;
            if(zuuluu) { _fun00004_ip = 489; continue _fun00003 }
 323:
            report = _closure1_slot6;
            tangon = _closure1_slot9;
            zuuluu = {};
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 19;
            offset = backup[offset];
            offset = foxtra.bind(oscard)(offset);
            offset = offset.UserPlusIcon;
            zuuluu['icon'] = offset;
            offset = 15;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            kiloes = yankee.intl;
            romeon = kiloes.string;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            yankee = yankee.t;
            yankee = yankee.7815aW;
            yankee = romeon.bind(kiloes)(yankee);
            zuuluu['label'] = yankee;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(oscard)(offset);
            offset = offset.t;
            offset = offset.gc9aS0;
            offset = yankee.bind(romeon)(offset);
            zuuluu['accessibilityHint'] = offset;
            zuuluu['hasCustomProfileTheme'] = option;
            offset = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'SEND_FRIEND_REQUEST';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 18;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.addRelationship;
                michal = {};
                oscard = _closure2_slot0;
                oscard = oscard.id;
                michal['userId'] = oscard;
                report = _closure2_slot2;
                michal['context'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = offset;
            michal = report.bind(oscard)(tangon, zuuluu);
 489:
            _fun00004_ip = 656; continue _fun00003;
 494:
            report = _closure1_slot6;
            tangon = _closure1_slot9;
            zuuluu = {};
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 14;
            offset = backup[offset];
            offset = foxtra.bind(oscard)(offset);
            offset = offset.ClockIcon;
            zuuluu['icon'] = offset;
            offset = 15;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            kiloes = yankee.intl;
            romeon = kiloes.string;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            yankee = yankee.t;
            yankee = yankee.L8CBnJ;
            yankee = romeon.bind(kiloes)(yankee);
            zuuluu['label'] = yankee;
            yankee = backup[offset];
            yankee = foxtra.bind(oscard)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = backup[offset];
            offset = foxtra.bind(oscard)(offset);
            offset = offset.t;
            offset = offset.H0Ql7O;
            offset = yankee.bind(romeon)(offset);
            zuuluu['accessibilityHint'] = offset;
            zuuluu['hasCustomProfileTheme'] = option;
            offset = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.confirmCancelFriendRequest;
                michal = {};
                report = _closure2_slot3;
                michal['userDisplayName'] = report;
                report = function() { // Original name: onConfirm
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    entity = 'CANCEL_FRIEND_REQUEST';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 18;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.cancelFriendRequest;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal['onConfirm'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = offset;
            michal = report.bind(oscard)(tangon, zuuluu);
 656:
            _fun00004_ip = 823; continue _fun00003;
 661:
            report = _closure1_slot6;
            tangon = _closure1_slot9;
            zuuluu = {};
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 14;
            verify = foxtra[verify];
            verify = romeon.bind(oscard)(verify);
            verify = verify.ClockIcon;
            zuuluu['icon'] = verify;
            verify = 15;
            offset = foxtra[verify];
            offset = romeon.bind(oscard)(offset);
            backup = offset.intl;
            yankee = backup.string;
            offset = foxtra[verify];
            offset = romeon.bind(oscard)(offset);
            offset = offset.t;
            offset = offset.L8CBnJ;
            offset = yankee.bind(backup)(offset);
            zuuluu['label'] = offset;
            offset = foxtra[verify];
            offset = romeon.bind(oscard)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.H0Ql7O;
            verify = offset.bind(yankee)(verify);
            zuuluu['accessibilityHint'] = verify;
            zuuluu['hasCustomProfileTheme'] = option;
            golfie = function() { // Original name: onPress
                zuuluu = _closure2_slot1;
                michal = {};
                entity = 'ACCEPT_FRIEND_REQUEST';
                michal['action'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 16;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.maybeConfirmFriendRequestAccept;
                michal = {};
                oscard = _closure2_slot0;
                oscard = oscard.id;
                michal['userId'] = oscard;
                report = _closure2_slot2;
                report = report.location;
                michal['location'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 823:
            entity = michal;
 826:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RelationshipTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 'row';
    verify['flexDirection'] = offset;
    offset = 6;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    yankee = offset.LARGE_BUTTON_HEIGHT;
    offset = 24;
    offset = yankee + offset;
    verify['width'] = offset;
    tangon['buttonArea'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileContactButtons
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            yankee = entity.user;
            var _closure2_slot0 = yankee;
            option = entity.disableMessage;
            foxtra = entity.disableCalls;
            offset = entity.location;
            verify = entity.hasCustomProfileTheme;
            report = entity.style;
            config = _closure1_slot0;
            record = _closure1_slot2;
            entity = 10;
            entity = record[entity];
            tangon = undefined;
            michal = config.bind(tangon)(entity);
            entity = michal.useUserProfileAnalyticsContext;
            entity = entity.bind(michal)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot1 = entity;
            entity = function() { // Original name: closeUserProfile
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 20;
                michal = tangon[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                michal = michal.bind(entity)();
                michal = 21;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hideActionSheet;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            var _closure2_slot2 = entity;
            sierra = _closure1_slot1;
            entity = 22;
            michal = record[entity];
            romeon = sierra.bind(tangon)(michal);
            golfie = yankee.id;
            zuuluu = false;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    entity = 'VOICE_CALL';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00008_ip = 42; continue _fun00007 }
 34:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)();
 42:
                    return entity;
                }
            };
            michal = romeon.bind(tangon)(golfie, zuuluu, michal);
            update = michal.handlePress;
            var _closure2_slot3 = update;
            source = michal.text;
            ctrled = michal.inCall;
            vacuum = michal.accessibilityHint;
            entity = record[entity];
            golfie = sierra.bind(tangon)(entity);
            zuuluu = yankee.id;
            michal = true;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    entity = 'VIDEO_CALL';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00010_ip = 44; continue _fun00009 }
 36:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)();
 44:
                    return entity;
                }
            };
            entity = golfie.bind(tangon)(zuuluu, michal, entity);
            sizing = entity.handlePress;
            var _closure2_slot4 = sizing;
            kiloes = entity.text;
            result = entity.inCall;
            echoed = entity.accessibilityHint;
            zuuluu = _closure1_slot7;
            entity = 23;
            entity = record[entity];
            entity = config.bind(tangon)(entity);
            michal = entity.ButtonGroup;
            entity = {'direction': 'horizontal', 'align': 'flex-start', 'justify': 'space-evenly'};
            entity['style'] = report;
            golfie = _closure1_slot6;
            romeon = _closure1_slot9;
            report = {};
            backup = 24;
            backup = record[backup];
            backup = config.bind(tangon)(backup);
            backup = backup.ChatIcon;
            report['icon'] = backup;
            sequen = 15;
            backup = record[sequen];
            backup = config.bind(tangon)(backup);
            papara = backup.intl;
            cntext = papara.string;
            backup = record[sequen];
            backup = config.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.zROXER;
            backup = cntext.bind(papara)(backup);
            report['label'] = backup;
            backup = record[sequen];
            backup = config.bind(tangon)(backup);
            target = backup.intl;
            papara = target.formatToPlainString;
            backup = record[sequen];
            backup = config.bind(tangon)(backup);
            backup = backup.t;
            cntext = backup.zFfSFR;
            backup = {};
            status = 13;
            status = record[status];
            sierra = sierra.bind(tangon)(status);
            status = sierra.getName;
            status = status.bind(sierra)(yankee);
            backup['name'] = status;
            backup = papara.bind(target)(cntext, backup);
            report['accessibilityHint'] = backup;
            backup = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = {};
                    entity = 'SEND_MESSAGE';
                    michal['action'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 42; continue _fun00011 }
 34:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)();
 42:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 25;
                    michal = tangon[michal];
                    oscard = zuuluu.bind(entity)(michal);
                    michal = oscard.popAll;
                    michal = michal.bind(oscard)();
                    michal = 26;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openPrivateChannel;
                    michal = {};
                    report = _closure2_slot0;
                    report = report.id;
                    michal['recipientIds'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            report['onPress'] = backup;
            report['disabled'] = option;
            report['hasCustomProfileTheme'] = verify;
            golfie = golfie.bind(tangon)(romeon, report);
            report = new Array(4);
            report[0] = golfie;
            option = _closure1_slot6;
            golfie = {};
            backup = 27;
            backup = record[backup];
            backup = config.bind(tangon)(backup);
            backup = backup.PhoneCallIcon;
            golfie['icon'] = backup;
            backup = null;
            config = source;
            if(!(backup == config)) { _fun00006_ip = 544; continue _fun00005 }
 492:
            target = _closure1_slot0;
            record = _closure1_slot2;
            cntext = record[sequen];
            cntext = target.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            record = record[sequen];
            record = target.bind(tangon)(record);
            record = record.t;
            record = record.EZgS+/;
            config = cntext.bind(papara)(record);
 544:
            golfie['label'] = config;
            if(!(backup == vacuum)) { _fun00006_ip = 604; continue _fun00005 }
 552:
            papara = _closure1_slot0;
            config = _closure1_slot2;
            record = config[sequen];
            record = papara.bind(tangon)(record);
            cntext = record.intl;
            record = cntext.string;
            config = config[sequen];
            config = papara.bind(tangon)(config);
            config = config.t;
            config = config.focH1t;
            vacuum = record.bind(cntext)(config);
 604:
            golfie['accessibilityHint'] = vacuum;
            if(ctrled) { _fun00006_ip = 619; continue _fun00005 }
 612:
            update = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.confirmStartCall;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
 619:
            golfie['onPress'] = update;
            update = foxtra;
            if(foxtra) { _fun00006_ip = 633; continue _fun00005 }
 629:
            update = backup == source;
 633:
            golfie['disabled'] = update;
            golfie['hasCustomProfileTheme'] = verify;
            golfie = option.bind(tangon)(romeon, golfie);
            report[1] = golfie;
            romeon = _closure1_slot6;
            option = _closure1_slot9;
            golfie = {};
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            update = 28;
            update = ctrled[update];
            update = source.bind(tangon)(update);
            update = update.VideoIcon;
            golfie['icon'] = update;
            update = kiloes;
            if(!(backup == update)) { _fun00006_ip = 751; continue _fun00005 }
 699:
            config = _closure1_slot0;
            source = _closure1_slot2;
            ctrled = source[sequen];
            ctrled = config.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = source[sequen];
            source = config.bind(tangon)(source);
            source = source.t;
            source = source.7AWk5+;
            update = ctrled.bind(vacuum)(source);
 751:
            golfie['label'] = update;
            if(!(backup == echoed)) { _fun00006_ip = 811; continue _fun00005 }
 759:
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            source = update[sequen];
            source = vacuum.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = update[sequen];
            update = vacuum.bind(tangon)(update);
            update = update.t;
            update = update.oCqlGB;
            echoed = source.bind(ctrled)(update);
 811:
            golfie['accessibilityHint'] = echoed;
            if(result) { _fun00006_ip = 826; continue _fun00005 }
 819:
            sizing = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.confirmStartCall;
                entity = _closure2_slot4;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
 826:
            golfie['onPress'] = sizing;
            if(foxtra) { _fun00006_ip = 837; continue _fun00005 }
 833:
            foxtra = backup == kiloes;
 837:
            golfie['disabled'] = foxtra;
            golfie['hasCustomProfileTheme'] = verify;
            golfie = romeon.bind(tangon)(option, golfie);
            report[2] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot10;
            oscard = {};
            oscard['user'] = yankee;
            oscard['location'] = offset;
            oscard['hasCustomProfileTheme'] = verify;
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