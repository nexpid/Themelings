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
            _fun00002_ip = 120; continue _fun00001;
 114:
            backup = entity.WHITE;
 120:
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
            michal = entity.friendToken;
            var _closure2_slot1 = michal;
            tangon = entity.location;
            oscard = undefined;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
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
            var _closure2_slot2 = entity;
            entity = {};
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 125; continue _fun00003 }
 122:
            zuuluu = tangon;
 125:
            entity['location'] = zuuluu;
            _closure2_slot3 = entity;
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
            _closure2_slot4 = entity;
            entity = _closure1_slot5;
            tangon = entity.FRIEND;
            entity = null;
            if(!(report !== tangon)) { _fun00004_ip = 836; continue _fun00003 }
 261:
            tangon = _closure1_slot5;
            tangon = tangon.BLOCKED;
            entity = null;
            if(!(report !== tangon)) { _fun00004_ip = 836; continue _fun00003 }
 280:
            tangon = _closure1_slot5;
            tangon = tangon.PENDING_INCOMING;
            if(!(report !== tangon)) { _fun00004_ip = 671; continue _fun00003 }
 297:
            tangon = _closure1_slot5;
            tangon = tangon.PENDING_OUTGOING;
            if(!(report !== tangon)) { _fun00004_ip = 504; continue _fun00003 }
 314:
            tangon = zuuluu.length;
            zuuluu = 0;
            zuuluu = tangon > zuuluu;
            michal = null;
            if(zuuluu) { _fun00004_ip = 499; continue _fun00003 }
 333:
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
                zuuluu = _closure2_slot2;
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
                oscard = _closure2_slot1;
                michal['friendToken'] = oscard;
                report = _closure2_slot3;
                michal['context'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = offset;
            michal = report.bind(oscard)(tangon, zuuluu);
 499:
            _fun00004_ip = 666; continue _fun00003;
 504:
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
                report = _closure2_slot4;
                michal['userDisplayName'] = report;
                report = function() { // Original name: onConfirm
                    tangon = _closure2_slot2;
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
                    michal = _closure2_slot3;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal['onConfirm'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = offset;
            michal = report.bind(oscard)(tangon, zuuluu);
 666:
            _fun00004_ip = 833; continue _fun00003;
 671:
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
                zuuluu = _closure2_slot2;
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
                report = _closure2_slot3;
                report = report.location;
                michal['location'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            zuuluu['onPress'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 833:
            entity = michal;
 836:
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
            romeon = entity.user;
            var _closure2_slot0 = romeon;
            option = entity.disableMessage;
            backup = entity.disableCalls;
            yankee = entity.friendToken;
            offset = entity.location;
            verify = entity.hasCustomProfileTheme;
            report = entity.style;
            record = _closure1_slot0;
            cntext = _closure1_slot2;
            entity = 10;
            entity = cntext[entity];
            tangon = undefined;
            michal = record.bind(tangon)(entity);
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
            limora = _closure1_slot1;
            entity = 22;
            michal = cntext[entity];
            foxtra = limora.bind(tangon)(michal);
            golfie = romeon.id;
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
            michal = foxtra.bind(tangon)(golfie, zuuluu, michal);
            source = michal.handlePress;
            var _closure2_slot3 = source;
            ctrled = michal.text;
            vacuum = michal.inCall;
            sequen = michal.accessibilityHint;
            entity = cntext[entity];
            golfie = limora.bind(tangon)(entity);
            zuuluu = romeon.id;
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
            output = entity.handlePress;
            var _closure2_slot4 = output;
            sizing = entity.text;
            echoed = entity.inCall;
            update = entity.accessibilityHint;
            zuuluu = _closure1_slot7;
            entity = 23;
            entity = cntext[entity];
            entity = record.bind(tangon)(entity);
            michal = entity.ButtonGroup;
            entity = {'direction': 'horizontal', 'align': 'flex-start', 'justify': 'space-evenly'};
            entity['style'] = report;
            golfie = _closure1_slot6;
            foxtra = _closure1_slot9;
            report = {};
            kiloes = 24;
            kiloes = cntext[kiloes];
            kiloes = record.bind(tangon)(kiloes);
            kiloes = kiloes.ChatIcon;
            report['icon'] = kiloes;
            config = 15;
            kiloes = cntext[config];
            kiloes = record.bind(tangon)(kiloes);
            target = kiloes.intl;
            papara = target.string;
            kiloes = cntext[config];
            kiloes = record.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.zROXER;
            kiloes = papara.bind(target)(kiloes);
            report['label'] = kiloes;
            kiloes = cntext[config];
            kiloes = record.bind(tangon)(kiloes);
            status = kiloes.intl;
            target = status.formatToPlainString;
            kiloes = cntext[config];
            kiloes = record.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            papara = kiloes.zFfSFR;
            kiloes = {};
            sierra = 13;
            sierra = cntext[sierra];
            limora = limora.bind(tangon)(sierra);
            sierra = limora.getName;
            sierra = sierra.bind(limora)(romeon);
            kiloes['name'] = sierra;
            kiloes = target.bind(status)(papara, kiloes);
            report['accessibilityHint'] = kiloes;
            kiloes = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = {};
                    entity = 'SEND_MESSAGE';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00012_ip = 42; continue _fun00011 }
 34:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.bind(entity)();
 42:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 25;
                    zuuluu = report[zuuluu];
                    oscard = tangon.bind(entity)(zuuluu);
                    zuuluu = oscard.popAll;
                    zuuluu = zuuluu.bind(oscard)();
                    zuuluu = 26;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.openPrivateChannel;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            report['onPress'] = kiloes;
            report['disabled'] = option;
            report['hasCustomProfileTheme'] = verify;
            golfie = golfie.bind(tangon)(foxtra, report);
            report = new Array(4);
            report[0] = golfie;
            option = _closure1_slot6;
            golfie = {};
            kiloes = 27;
            kiloes = cntext[kiloes];
            kiloes = record.bind(tangon)(kiloes);
            kiloes = kiloes.PhoneCallIcon;
            golfie['icon'] = kiloes;
            kiloes = null;
            record = ctrled;
            if(!(kiloes == record)) { _fun00006_ip = 550; continue _fun00005 }
 498:
            status = _closure1_slot0;
            cntext = _closure1_slot2;
            papara = cntext[config];
            papara = status.bind(tangon)(papara);
            target = papara.intl;
            papara = target.string;
            cntext = cntext[config];
            cntext = status.bind(tangon)(cntext);
            cntext = cntext.t;
            cntext = cntext.EZgS+/;
            record = papara.bind(target)(cntext);
 550:
            golfie['label'] = record;
            if(!(kiloes == sequen)) { _fun00006_ip = 610; continue _fun00005 }
 558:
            target = _closure1_slot0;
            record = _closure1_slot2;
            cntext = record[config];
            cntext = target.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            record = record[config];
            record = target.bind(tangon)(record);
            record = record.t;
            record = record.focH1t;
            sequen = cntext.bind(papara)(record);
 610:
            golfie['accessibilityHint'] = sequen;
            if(vacuum) { _fun00006_ip = 625; continue _fun00005 }
 618:
            source = function() {
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
 625:
            golfie['onPress'] = source;
            source = backup;
            if(backup) { _fun00006_ip = 639; continue _fun00005 }
 635:
            source = kiloes == ctrled;
 639:
            golfie['disabled'] = source;
            golfie['hasCustomProfileTheme'] = verify;
            golfie = option.bind(tangon)(foxtra, golfie);
            report[1] = golfie;
            foxtra = _closure1_slot6;
            option = _closure1_slot9;
            golfie = {};
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot2;
            source = 28;
            source = vacuum[source];
            source = ctrled.bind(tangon)(source);
            source = source.VideoIcon;
            golfie['icon'] = source;
            source = sizing;
            if(!(kiloes == source)) { _fun00006_ip = 757; continue _fun00005 }
 705:
            record = _closure1_slot0;
            ctrled = _closure1_slot2;
            vacuum = ctrled[config];
            vacuum = record.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = ctrled[config];
            ctrled = record.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.7AWk5+;
            source = vacuum.bind(sequen)(ctrled);
 757:
            golfie['label'] = source;
            if(!(kiloes == update)) { _fun00006_ip = 817; continue _fun00005 }
 765:
            sequen = _closure1_slot0;
            source = _closure1_slot2;
            ctrled = source[config];
            ctrled = sequen.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = source[config];
            source = sequen.bind(tangon)(source);
            source = source.t;
            source = source.oCqlGB;
            update = ctrled.bind(vacuum)(source);
 817:
            golfie['accessibilityHint'] = update;
            if(echoed) { _fun00006_ip = 832; continue _fun00005 }
 825:
            output = function() {
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
 832:
            golfie['onPress'] = output;
            if(backup) { _fun00006_ip = 843; continue _fun00005 }
 839:
            backup = kiloes == sizing;
 843:
            golfie['disabled'] = backup;
            golfie['hasCustomProfileTheme'] = verify;
            golfie = foxtra.bind(tangon)(option, golfie);
            report[2] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot10;
            oscard = {};
            oscard['user'] = romeon;
            oscard['friendToken'] = yankee;
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