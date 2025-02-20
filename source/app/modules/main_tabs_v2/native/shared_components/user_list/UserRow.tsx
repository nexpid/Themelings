// app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: handleCall
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.ensurePrivateChannel;
        michal = argFoo;
        michal = michal.id;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot8;
                zuuluu = tangon.getChannel;
                michal = argFoo;
                tangon = zuuluu.bind(tangon)(michal);
                michal = null;
                if(!(michal != tangon)) { _fun00002_ip = 99; continue _fun00001 }
 26:
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                entity = 14;
                entity = report[entity];
                michal = undefined;
                golfie = zuuluu.bind(michal)(entity);
                entity = tangon.isPrivate;
                oscard = entity.bind(tangon)();
                entity = 'must be a DM';
                entity = golfie.bind(michal)(oscard, entity);
                entity = 15;
                entity = report[entity];
                zuuluu = zuuluu.bind(michal)(entity);
                entity = false;
                entity = zuuluu.bind(michal)(tangon, entity);
                entity = entity.onPress;
                entity = entity.bind(michal)();
 99:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: handleAccept
        golfie = argBar;
        var _closure2_slot0 = golfie;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 16;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.maybeConfirmFriendRequestAccept;
        michal = {};
        option = argFoo;
        option = option.id;
        michal['userId'] = option;
        michal['applicationId'] = golfie;
        oscard = _closure1_slot19;
        michal['location'] = oscard;
        report = function() { // Original name: onConfirm
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity == michal)) { _fun00004_ip = 50; continue _fun00003 }
 13:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.presentFriendRequestAcceptedToast;
                entity = entity.bind(michal)();
                _fun00004_ip = 85; continue _fun00003;
 50:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.presentGameFriendRequestAcceptedToast;
                entity = entity.bind(michal)();
 85:
                entity = undefined;
                return entity;
            }
        };
        michal['onConfirm'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: handleCancel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            entity = null;
            if(!(entity == golfie)) { _fun00006_ip = 92; continue _fun00005 }
 12:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 19;
            michal = tangon[michal];
            zuuluu = undefined;
            verify = report.bind(zuuluu)(michal);
            oscard = verify.cancelFriendRequest;
            report = option.id;
            michal = {};
            offset = _closure1_slot19;
            michal['location'] = offset;
            michal = oscard.bind(verify)(report, michal);
            michal = _closure1_slot0;
            entity = 17;
            entity = tangon[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.presentFriendRequestIgnoredToast;
            entity = entity.bind(michal)();
            _fun00006_ip = 169; continue _fun00005;
 92:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(michal);
            report = oscard.cancelGameFriendRequest;
            michal = {};
            option = option.id;
            michal['userId'] = option;
            michal['applicationId'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = _closure1_slot0;
            entity = 17;
            entity = tangon[entity];
            michal = michal.bind(zuuluu)(entity);
            entity = michal.presentGameFriendRequestIgnoredToast;
            entity = entity.bind(michal)();
 169:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: handleAcceptSuggestion
        report = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 19;
        zuuluu = tangon[entity];
        entity = undefined;
        oscard = report.bind(entity)(zuuluu);
        report = oscard.addRelationship;
        zuuluu = {};
        golfie = argFoo;
        golfie = golfie.id;
        zuuluu['userId'] = golfie;
        golfie = {};
        option = _closure1_slot19;
        golfie['location'] = option;
        zuuluu['context'] = golfie;
        zuuluu['type'] = entity;
        zuuluu['friendToken'] = entity;
        golfie = true;
        zuuluu['fromFriendSuggestion'] = golfie;
        zuuluu = report.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot0;
        michal = 17;
        michal = tangon[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.presentAddedFriendToast;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: UserRowSubLabel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            offset = tangon.user;
            zuuluu = tangon.type;
            oscard = tangon.animate;
            michal = tangon.isGameRelationship;
            verify = tangon.guildId;
            tangon = tangon.applicationId;
            var _closure2_slot0 = tangon;
            report = _closure1_slot18;
            golfie = undefined;
            option = report.bind(golfie)();
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 21;
            report = romeon[report];
            romeon = yankee.bind(golfie)(report);
            yankee = romeon.useStateFromStores;
            foxtra = _closure1_slot6;
            report = new Array(1);
            report[0] = foxtra;
            entity = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getApplication;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = yankee.bind(romeon)(report, entity);
            entity = _closure1_slot12;
            entity = entity.PENDING_INCOMING;
            if(!(zuuluu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 118:
            entity = _closure1_slot12;
            entity = entity.SUGGESTION;
            if(!(zuuluu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 132:
            entity = _closure1_slot12;
            entity = entity.PENDING_OUTGOING;
            if(!(zuuluu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 146:
            report = _closure1_slot14;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 25;
            entity = yankee[entity];
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = {};
            yankee = 'UserRow';
            entity['location'] = yankee;
            yankee = offset.id;
            entity['userId'] = yankee;
            entity['guildId'] = verify;
            verify = option.activityText;
            entity['textStyle'] = verify;
            entity['animate'] = oscard;
            entity = report.bind(golfie)(zuuluu, entity);
            _fun00008_ip = 551; continue _fun00007;
 222:
            if(michal) { _fun00008_ip = 306; continue _fun00007 }
 225:
            report = _closure1_slot14;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 23;
            michal = yankee[michal];
            michal = verify.bind(golfie)(michal);
            zuuluu = michal.Text;
            michal = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            oscard = 24;
            oscard = yankee[oscard];
            verify = verify.bind(golfie)(oscard);
            oscard = verify.getUserTag;
            oscard = oscard.bind(verify)(offset);
            michal['children'] = oscard;
            michal = report.bind(golfie)(zuuluu, michal);
            _fun00008_ip = 548; continue _fun00007;
 306:
            backup = null;
            if(!(backup != foxtra)) { _fun00008_ip = 519; continue _fun00007 }
 315:
            oscard = _closure1_slot15;
            report = _closure1_slot4;
            zuuluu = {};
            verify = option.gameContainer;
            zuuluu['style'] = verify;
            romeon = _closure1_slot14;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 22;
            verify = yankee[verify];
            yankee = offset.bind(golfie)(verify);
            offset = {};
            verify = option.gameIcon;
            offset['style'] = verify;
            verify = 'contain';
            offset['resizeMode'] = verify;
            verify = {};
            sizing = foxtra.getIconURL;
            kiloes = 16;
            kiloes = sizing.bind(foxtra)(kiloes);
            sizing = backup != kiloes;
            backup = '';
            if(!sizing) { _fun00008_ip = 410; continue _fun00007 }
 407:
            backup = kiloes;
 410:
            verify['uri'] = backup;
            offset['source'] = verify;
            verify = true;
            offset['disableColor'] = verify;
            verify = foxtra.id;
            offset = romeon.bind(golfie)(yankee, offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            romeon = _closure1_slot14;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 23;
            offset = backup[offset];
            offset = yankee.bind(golfie)(offset);
            yankee = offset.Text;
            offset = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-secondary'};
            foxtra = foxtra.name;
            offset['children'] = foxtra;
            offset = romeon.bind(golfie)(yankee, offset);
            verify[1] = offset;
            zuuluu['children'] = verify;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            _fun00008_ip = 545; continue _fun00007;
 519:
            oscard = _closure1_slot14;
            report = _closure1_slot4;
            tangon = {};
            option = option.gameIcon;
            tangon['style'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 545:
            michal = zuuluu;
 548:
            entity = michal;
 551:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    foxtra = 8;
    tangon = oscard[foxtra];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserRowModes;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.RelationshipTypes;
    var _closure1_slot12 = option;
    tangon = tangon.StatusTypes;
    var _closure1_slot13 = tangon;
    tangon = 10;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot14 = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsxs;
    var _closure1_slot15 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot16 = tangon;
    tangon = {};
    option = 'call';
    tangon['CALL'] = option;
    option = 'message';
    tangon['MESSAGE'] = option;
    option = 'accept';
    tangon['ACCEPT'] = option;
    option = 'decline';
    tangon['DECLINE'] = option;
    option = 'cancel';
    tangon['CANCEL'] = option;
    option = 'accept-suggestion';
    tangon['ACCEPT_SUGGESTION'] = option;
    option = 'ignore-suggestion';
    tangon['IGNORE_SUGGESTION'] = option;
    option = 'toggle';
    tangon['TOGGLE'] = option;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flexShrink': 0, 'flexGrow': 0};
    tangon['avatar'] = offset;
    offset = {};
    yankee = 12;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_LINK;
    offset['tintColor'] = backup;
    tangon['iconColor'] = offset;
    offset = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0};
    tangon['content'] = offset;
    offset = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0, 'height': '100%', 'justifyContent': 'center'};
    tangon['itemContent'] = offset;
    backup = 'row';
    offset = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignContent': 'center', 'alignItems': 'center'};
    tangon['contentInner'] = offset;
    offset = {'flex': 1, 'marginRight': 12};
    tangon['contentText'] = offset;
    offset = {};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.TEXT_MUTED;
    offset['color'] = kiloes;
    tangon['activityText'] = offset;
    offset = {};
    offset['flexDirection'] = backup;
    tangon['actions'] = offset;
    offset = {'marginLeft': 12, 'alignSelf': 'center'};
    tangon['action'] = offset;
    offset = {};
    offset['marginLeft'] = foxtra;
    tangon['buttonWrapper'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['labelContainer'] = offset;
    offset = {'marginRight': 4, 'paddingTop': 0};
    tangon['roleDot'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tangon['usernameLabelContainer'] = offset;
    offset = {'flexDirection': 'row', 'gap': 4};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.xs;
    offset['cornerRadius'] = yankee;
    tangon['gameContainer'] = offset;
    offset = {'width': 14, 'height': 14};
    tangon['gameIcon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 'Friends_v2';
    var _closure1_slot19 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: UserRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            backup = argFoo;
            sierra = backup.type;
            var _closure2_slot0 = sierra;
            cntext = backup.user;
            var _closure2_slot1 = cntext;
            zuuluu = backup.mode;
            report = undefined;
            if(!(zuuluu === report)) { _fun00010_ip = 47; continue _fun00009 }
 34:
            entity = _closure1_slot11;
            zuuluu = entity.NONE;
 47:
            var _closure2_slot2 = zuuluu;
            golfie = backup.selected;
            if(!(golfie === report)) { _fun00010_ip = 63; continue _fun00009 }
 61:
            golfie = false;
 63:
            result = backup.disabled;
            if(!(result === report)) { _fun00010_ip = 74; continue _fun00009 }
 72:
            result = false;
 74:
            var _closure2_slot3 = result;
            whisks = backup.isOwner;
            if(!(whisks === report)) { _fun00010_ip = 90; continue _fun00009 }
 88:
            whisks = false;
 90:
            var _closure2_slot4 = whisks;
            foxtra = backup.onPress;
            var _closure2_slot5 = foxtra;
            target = backup.onLongPress;
            var _closure2_slot6 = target;
            offset = backup.handleMessage;
            var _closure2_slot7 = offset;
            entity = backup.nickname;
            var _closure2_slot8 = entity;
            record = backup.usernameColor;
            var _closure2_slot9 = record;
            verify = backup.premiumSince;
            var _closure2_slot10 = verify;
            vacuum = backup.guildId;
            var _closure2_slot11 = vacuum;
            ctrled = backup.trailing;
            var _closure2_slot12 = ctrled;
            limora = backup.subLabel;
            var _closure2_slot13 = limora;
            quebec = backup.label;
            var _closure2_slot14 = quebec;
            romeon = backup.accessibilityActions;
            entity = backup.onAccessibilityAction;
            tangon = backup.applicationId;
            var _closure2_slot15 = tangon;
            papara = backup.isGameRelationship;
            if(!(papara === report)) { _fun00010_ip = 224; continue _fun00009 }
 222:
            papara = false;
 224:
            var _closure2_slot16 = papara;
            option = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0};
            yankee = null;
            variable42 = option;
            variable41 = null;
            michal = silentSetPrototypeOf(variable42, variable41);
            variable42 = {};
            variable41 = backup;
            variable40 = option;
            backup = copyDataProperties(variable42, variable41, variable40);
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            var _closure2_slot23 = report;
            var _closure2_slot24 = report;
            var _closure2_slot25 = report;
            var _closure2_slot26 = report;
            option = _closure1_slot18;
            config = option.bind(report)();
            _closure2_slot17 = config;
            kiloes = _closure1_slot1;
            echoed = _closure1_slot2;
            option = 26;
            option = echoed[option];
            option = kiloes.bind(report)(option);
            option = option.bind(report)();
            kiloes = option.analyticsLocations;
            _closure2_slot18 = kiloes;
            output = _closure1_slot0;
            sizing = 21;
            option = echoed[sizing];
            sequen = output.bind(report)(option);
            source = sequen.useStateFromStoresObject;
            option = _closure1_slot5;
            update = new Array(1);
            update[0] = option;
            option = function() {
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.useReducedMotion;
                entity['useReducedMotion'] = zuuluu;
                michal = michal.roleStyle;
                entity['roleStyle'] = michal;
                return entity;
            };
            option = source.bind(sequen)(update, option);
            status = option.useReducedMotion;
            _closure2_slot19 = status;
            option = option.roleStyle;
            _closure2_slot20 = option;
            update = echoed[sizing];
            equals = output.bind(report)(update);
            sequen = equals.useStateFromStoresObject;
            update = _closure1_slot9;
            source = new Array(1);
            source[0] = update;
            update = function() {
                entity = {};
                tangon = _closure1_slot9;
                report = tangon.isMobileOnline;
                michal = _closure2_slot1;
                zuuluu = michal.id;
                zuuluu = report.bind(tangon)(zuuluu);
                entity['isMobileOnline'] = zuuluu;
                zuuluu = tangon.getStatus;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['status'] = michal;
                return entity;
            };
            update = sequen.bind(equals)(source, update);
            variable37 = update.isMobileOnline;
            _closure2_slot21 = variable37;
            variable38 = update.status;
            _closure2_slot22 = variable38;
            update = echoed[sizing];
            equals = output.bind(report)(update);
            sequen = equals.useStateFromStores;
            update = _closure1_slot10;
            source = new Array(1);
            source[0] = update;
            update = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot8;
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00012_ip = 40; continue _fun00011 }
 13:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getNickname;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 40:
                    return entity;
                }
            };
            equals = sequen.bind(equals)(source, update);
            _closure2_slot8 = equals;
            sizing = echoed[sizing];
            sequen = output.bind(report)(sizing);
            source = sequen.useStateFromStores;
            sizing = _closure1_slot7;
            update = new Array(1);
            update[0] = sizing;
            sizing = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getSuggestion;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            variable36 = source.bind(sequen)(update, sizing);
            _closure2_slot23 = variable36;
            sizing = 27;
            sizing = echoed[sizing];
            output = output.bind(report)(sizing);
            sizing = output.useAvatarDecoration;
            output = sizing.bind(output)(cntext, vacuum);
            _closure2_slot24 = output;
            sequen = _closure1_slot3;
            echoed = sequen.useCallback;
            sizing = new Array(2);
            sizing[0] = cntext;
            sizing[1] = foxtra;
            foxtra = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 28; continue _fun00013 }
 13:
                    zuuluu = _closure2_slot5;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = echoed.bind(sequen)(foxtra, sizing);
            foxtra = sequen.useRef;
            foxtra = foxtra.bind(sequen)(cntext);
            _closure2_slot25 = foxtra;
            update = sequen.useEffect;
            echoed = new Array(1);
            echoed[0] = cntext;
            foxtra = function() {
                michal = _closure2_slot25;
                entity = _closure2_slot1;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            foxtra = update.bind(sequen)(foxtra, echoed);
            update = sequen.useMemo;
            echoed = new Array(6);
            echoed[0] = zuuluu;
            echoed[1] = sierra;
            echoed[2] = cntext;
            echoed[3] = offset;
            echoed[4] = tangon;
            echoed[5] = config;
            foxtra = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = new Array(0);
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot11;
                    entity = entity.ACTIONS;
                    if(!(zuuluu === entity)) { _fun00016_ip = 1603; continue _fun00015 }
 33:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot12;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 1139; continue _fun00015 }
 54:
                    entity = _closure1_slot12;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 898; continue _fun00015 }
 71:
                    entity = _closure1_slot12;
                    entity = entity.SUGGESTION;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 551; continue _fun00015 }
 88:
                    entity = _closure1_slot12;
                    entity = entity.FRIEND;
                    tangon = michal.push;
                    zuuluu = {};
                    golfie = _closure1_slot17;
                    entity = golfie.CALL;
                    zuuluu['name'] = entity;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    oscard = 28;
                    entity = sizing[oscard];
                    report = undefined;
                    entity = kiloes.bind(report)(entity);
                    backup = entity.intl;
                    offset = backup.formatToPlainString;
                    entity = sizing[oscard];
                    entity = kiloes.bind(report)(entity);
                    entity = entity.t;
                    option = entity.Q75ddn;
                    entity = {};
                    output = _closure1_slot1;
                    foxtra = 24;
                    result = sizing[foxtra];
                    update = output.bind(report)(result);
                    echoed = update.getName;
                    result = _closure2_slot1;
                    echoed = echoed.bind(update)(result);
                    entity['name'] = echoed;
                    entity = offset.bind(backup)(option, entity);
                    zuuluu['label'] = entity;
                    entity = {};
                    golfie = golfie.MESSAGE;
                    entity['name'] = golfie;
                    golfie = sizing[oscard];
                    golfie = kiloes.bind(report)(golfie);
                    offset = golfie.intl;
                    option = offset.formatToPlainString;
                    oscard = sizing[oscard];
                    oscard = kiloes.bind(report)(oscard);
                    oscard = oscard.t;
                    golfie = oscard.zFfSFR;
                    oscard = {};
                    foxtra = sizing[foxtra];
                    backup = output.bind(report)(foxtra);
                    foxtra = backup.getName;
                    foxtra = foxtra.bind(backup)(result);
                    oscard['name'] = foxtra;
                    oscard = option.bind(offset)(golfie, oscard);
                    entity['label'] = oscard;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    tangon = _closure1_slot15;
                    zuuluu = _closure1_slot4;
                    entity = {};
                    oscard = _closure2_slot17;
                    oscard = oscard.actions;
                    entity['style'] = oscard;
                    offset = _closure1_slot14;
                    golfie = 29;
                    oscard = sizing[golfie];
                    option = output.bind(report)(oscard);
                    oscard = {};
                    foxtra = _closure2_slot17;
                    foxtra = foxtra.action;
                    oscard['styles'] = foxtra;
                    foxtra = 36;
                    foxtra = sizing[foxtra];
                    foxtra = output.bind(report)(foxtra);
                    oscard['source'] = foxtra;
                    foxtra = 37;
                    foxtra = sizing[foxtra];
                    foxtra = kiloes.bind(report)(foxtra);
                    foxtra = foxtra.PhoneCallIcon;
                    oscard['IconComponent'] = foxtra;
                    foxtra = 'neutral';
                    oscard['type'] = foxtra;
                    backup = function() { // Original name: onPress
                        zuuluu = _closure1_slot20;
                        entity = _closure2_slot25;
                        michal = entity.current;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard['onPress'] = backup;
                    option = offset.bind(report)(option, oscard);
                    oscard = new Array(2);
                    oscard[0] = option;
                    offset = _closure1_slot14;
                    golfie = sizing[golfie];
                    option = output.bind(report)(golfie);
                    golfie = {};
                    backup = _closure2_slot17;
                    backup = backup.action;
                    golfie['styles'] = backup;
                    backup = 38;
                    backup = sizing[backup];
                    backup = output.bind(report)(backup);
                    golfie['source'] = backup;
                    backup = 39;
                    backup = sizing[backup];
                    backup = kiloes.bind(report)(backup);
                    backup = backup.ChatIcon;
                    golfie['IconComponent'] = backup;
                    golfie['type'] = foxtra;
                    foxtra = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zuuluu = _closure2_slot7;
                            entity = null;
                            zuuluu = entity == zuuluu;
                            tangon = undefined;
                            entity = undefined;
                            if(zuuluu) { _fun00018_ip = 38; continue _fun00017 }
 20:
                            zuuluu = _closure2_slot7;
                            michal = _closure2_slot25;
                            michal = michal.current;
                            entity = zuuluu.bind(tangon)(michal);
 38:
                            return entity;
                        }
                    };
                    golfie['onPress'] = foxtra;
                    golfie = offset.bind(report)(option, golfie);
                    oscard[1] = golfie;
                    entity['children'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu, entity);
                    _fun00016_ip = 1589; continue _fun00015;
 551:
                    report = michal.push;
                    tangon = {};
                    golfie = _closure1_slot17;
                    entity = golfie.ACCEPT_SUGGESTION;
                    tangon['name'] = entity;
                    source = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    sizing = 28;
                    entity = ctrled[sizing];
                    oscard = undefined;
                    entity = source.bind(oscard)(entity);
                    offset = entity.intl;
                    option = offset.string;
                    entity = ctrled[sizing];
                    entity = source.bind(oscard)(entity);
                    entity = entity.t;
                    entity = entity.ed99+v;
                    entity = option.bind(offset)(entity);
                    tangon['label'] = entity;
                    entity = {};
                    golfie = golfie.IGNORE_SUGGESTION;
                    entity['name'] = golfie;
                    golfie = ctrled[sizing];
                    golfie = source.bind(oscard)(golfie);
                    offset = golfie.intl;
                    option = offset.string;
                    golfie = ctrled[sizing];
                    golfie = source.bind(oscard)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.Tw3a/f;
                    golfie = option.bind(offset)(golfie);
                    entity['label'] = golfie;
                    entity = report.bind(michal)(tangon, entity);
                    report = _closure1_slot14;
                    tangon = _closure1_slot4;
                    entity = {};
                    golfie = _closure2_slot17;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    offset = _closure1_slot14;
                    option = _closure1_slot4;
                    golfie = {};
                    foxtra = _closure2_slot17;
                    foxtra = foxtra.buttonWrapper;
                    golfie['style'] = foxtra;
                    kiloes = _closure1_slot14;
                    foxtra = 34;
                    foxtra = ctrled[foxtra];
                    foxtra = source.bind(oscard)(foxtra);
                    backup = foxtra.Button;
                    foxtra = {'variant': 'secondary', 'size': 'sm'};
                    output = 35;
                    output = ctrled[output];
                    echoed = source.bind(oscard)(output);
                    result = echoed.truncateText;
                    output = ctrled[sizing];
                    output = source.bind(oscard)(output);
                    update = output.intl;
                    output = update.string;
                    sizing = ctrled[sizing];
                    sizing = source.bind(oscard)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.OYkgVl;
                    output = output.bind(update)(sizing);
                    sizing = 8;
                    sizing = result.bind(echoed)(output, sizing);
                    foxtra['text'] = sizing;
                    sizing = function() { // Original name: onPress
                        zuuluu = _closure1_slot23;
                        entity = _closure2_slot25;
                        michal = entity.current;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    foxtra['onPress'] = sizing;
                    foxtra = kiloes.bind(oscard)(backup, foxtra);
                    golfie['children'] = foxtra;
                    golfie = offset.bind(oscard)(option, golfie);
                    entity['children'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, entity);
                    _fun00016_ip = 1589; continue _fun00015;
 898:
                    tangon = michal.push;
                    entity = {};
                    report = _closure1_slot17;
                    report = report.CANCEL;
                    entity['name'] = report;
                    golfie = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    report = 28;
                    option = kiloes[report];
                    oscard = undefined;
                    option = golfie.bind(oscard)(option);
                    offset = option.intl;
                    option = offset.formatToPlainString;
                    report = kiloes[report];
                    report = golfie.bind(oscard)(report);
                    report = report.t;
                    golfie = report.JFJ8Cg;
                    report = {};
                    backup = _closure1_slot1;
                    foxtra = 24;
                    foxtra = kiloes[foxtra];
                    output = backup.bind(oscard)(foxtra);
                    sizing = output.getName;
                    foxtra = _closure2_slot1;
                    foxtra = sizing.bind(output)(foxtra);
                    report['name'] = foxtra;
                    report = option.bind(offset)(golfie, report);
                    entity['label'] = report;
                    entity = tangon.bind(michal)(entity);
                    report = _closure1_slot14;
                    tangon = _closure1_slot4;
                    entity = {};
                    golfie = _closure2_slot17;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    offset = _closure1_slot14;
                    golfie = 29;
                    golfie = kiloes[golfie];
                    option = backup.bind(oscard)(golfie);
                    golfie = {};
                    foxtra = _closure2_slot17;
                    foxtra = foxtra.action;
                    golfie['styles'] = foxtra;
                    foxtra = 30;
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(oscard)(foxtra);
                    golfie['source'] = foxtra;
                    foxtra = 'neutral';
                    golfie['type'] = foxtra;
                    foxtra = function() { // Original name: onPress
                        tangon = _closure1_slot22;
                        michal = _closure2_slot25;
                        zuuluu = michal.current;
                        michal = _closure2_slot15;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    golfie['onPress'] = foxtra;
                    golfie = offset.bind(oscard)(option, golfie);
                    entity['children'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, entity);
                    _fun00016_ip = 1589; continue _fun00015;
 1139:
                    report = michal.push;
                    tangon = {};
                    option = _closure1_slot17;
                    entity = option.DECLINE;
                    tangon['name'] = entity;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    golfie = 28;
                    entity = backup[golfie];
                    oscard = undefined;
                    entity = foxtra.bind(oscard)(entity);
                    result = entity.intl;
                    sizing = result.formatToPlainString;
                    entity = backup[golfie];
                    entity = foxtra.bind(oscard)(entity);
                    entity = entity.t;
                    offset = entity.C9Xe6+;
                    entity = {};
                    kiloes = _closure1_slot1;
                    output = 24;
                    echoed = backup[output];
                    source = kiloes.bind(oscard)(echoed);
                    update = source.getName;
                    echoed = _closure2_slot1;
                    update = update.bind(source)(echoed);
                    entity['name'] = update;
                    entity = sizing.bind(result)(offset, entity);
                    tangon['label'] = entity;
                    entity = {};
                    option = option.ACCEPT;
                    entity['name'] = option;
                    option = backup[golfie];
                    option = foxtra.bind(oscard)(option);
                    sizing = option.intl;
                    offset = sizing.formatToPlainString;
                    golfie = backup[golfie];
                    golfie = foxtra.bind(oscard)(golfie);
                    golfie = golfie.t;
                    option = golfie.6p0yBg;
                    golfie = {};
                    output = backup[output];
                    result = kiloes.bind(oscard)(output);
                    output = result.getName;
                    output = output.bind(result)(echoed);
                    golfie['name'] = output;
                    golfie = offset.bind(sizing)(option, golfie);
                    entity['label'] = golfie;
                    entity = report.bind(michal)(tangon, entity);
                    report = _closure1_slot15;
                    tangon = _closure1_slot4;
                    entity = {};
                    golfie = _closure2_slot17;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    sizing = _closure1_slot14;
                    option = 29;
                    golfie = backup[option];
                    offset = kiloes.bind(oscard)(golfie);
                    golfie = {};
                    output = _closure2_slot17;
                    output = output.action;
                    golfie['styles'] = output;
                    output = 30;
                    output = backup[output];
                    output = kiloes.bind(oscard)(output);
                    golfie['source'] = output;
                    output = 31;
                    output = backup[output];
                    output = foxtra.bind(oscard)(output);
                    output = output.XLargeIcon;
                    golfie['IconComponent'] = output;
                    output = 'neutral';
                    golfie['type'] = output;
                    output = function() { // Original name: onPress
                        tangon = _closure1_slot22;
                        michal = _closure2_slot25;
                        zuuluu = michal.current;
                        michal = _closure2_slot15;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    golfie['onPress'] = output;
                    offset = sizing.bind(oscard)(offset, golfie);
                    golfie = new Array(2);
                    golfie[0] = offset;
                    offset = _closure1_slot14;
                    option = backup[option];
                    verify = kiloes.bind(oscard)(option);
                    option = {};
                    romeon = _closure2_slot17;
                    romeon = romeon.action;
                    option['styles'] = romeon;
                    romeon = 32;
                    romeon = backup[romeon];
                    romeon = kiloes.bind(oscard)(romeon);
                    option['source'] = romeon;
                    romeon = 33;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(oscard)(romeon);
                    romeon = romeon.CheckmarkLargeIcon;
                    option['IconComponent'] = romeon;
                    romeon = 'positive';
                    option['type'] = romeon;
                    yankee = function() { // Original name: onPress
                        tangon = _closure1_slot21;
                        michal = _closure2_slot25;
                        zuuluu = michal.current;
                        michal = _closure2_slot15;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    option['onPress'] = yankee;
                    option = offset.bind(oscard)(verify, option);
                    golfie[1] = option;
                    entity['children'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, entity);
 1589:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    entity['actions'] = zuuluu;
                    return entity;
 1603:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    michal = undefined;
                    entity['actions'] = michal;
                    return entity;
                }
            };
            echoed = update.bind(sequen)(foxtra, echoed);
            foxtra = echoed.accessibilityActions;
            source = echoed.actions;
            _closure2_slot26 = source;
            update = sequen.useCallback;
            echoed = new Array(3);
            echoed[0] = cntext;
            echoed[1] = offset;
            echoed[2] = tangon;
            offset = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    zuuluu = entity.actionName;
                    michal = _closure1_slot17;
                    michal = michal.CALL;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 280; continue _fun00019 }
 34:
                    michal = _closure1_slot17;
                    michal = michal.MESSAGE;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 245; continue _fun00019 }
 51:
                    michal = _closure1_slot17;
                    michal = michal.ACCEPT;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 220; continue _fun00019 }
 68:
                    michal = _closure1_slot17;
                    michal = michal.DECLINE;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 195; continue _fun00019 }
 82:
                    michal = _closure1_slot17;
                    michal = michal.CANCEL;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 195; continue _fun00019 }
 96:
                    michal = _closure1_slot17;
                    michal = michal.ACCEPT_SUGGESTION;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 175; continue _fun00019 }
 110:
                    michal = _closure1_slot17;
                    michal = michal.IGNORE_SUGGESTION;
                    if(!(michal !== zuuluu)) { _fun00020_ip = 128; continue _fun00019 }
 124:
                    michal = undefined;
                    return michal;
 128:
                    zuuluu = _closure2_slot1;
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 20;
                    tangon = tangon[michal];
                    michal = undefined;
                    report = report.bind(michal)(tangon);
                    tangon = report.ignore;
                    zuuluu = zuuluu.id;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 175:
                    tangon = _closure1_slot23;
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    return michal;
 195:
                    report = _closure1_slot22;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot15;
                    michal = undefined;
                    zuuluu = report.bind(michal)(tangon, zuuluu);
                    return michal;
 220:
                    report = _closure1_slot21;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot15;
                    michal = undefined;
                    zuuluu = report.bind(michal)(tangon, zuuluu);
                    return michal;
 245:
                    tangon = _closure2_slot7;
                    michal = null;
                    tangon = michal == tangon;
                    report = undefined;
                    michal = undefined;
                    if(tangon) { _fun00020_ip = 278; continue _fun00019 }
 265:
                    tangon = _closure2_slot7;
                    zuuluu = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu);
 278:
                    return michal;
 280:
                    zuuluu = _closure1_slot20;
                    michal = _closure2_slot1;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            offset = update.bind(sequen)(offset, echoed);
            update = sequen.useCallback;
            echoed = new Array(3);
            echoed[0] = target;
            echoed[1] = cntext;
            echoed[2] = kiloes;
            kiloes = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 30; continue _fun00021 }
 13:
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    _fun00022_ip = 92; continue _fun00021;
 30:
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    michal = 41;
                    michal = entity[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = 40;
                    michal = entity[michal];
                    entity = entity.paths;
                    zuuluu = zuuluu.bind(tangon)(michal, entity);
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zuuluu = entity.default;
                        michal = {};
                        tangon = _closure2_slot1;
                        report = tangon.id;
                        michal['userId'] = report;
                        michal['localUser'] = tangon;
                        entity = _closure2_slot18;
                        michal['sourceAnalyticsLocations'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 92:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = update.bind(sequen)(kiloes, echoed);
            target = sequen.useMemo;
            update = new Array(2);
            update[0] = record;
            update[1] = option;
            echoed = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot9;
                    entity = null;
                    michal = entity != michal;
                    entity = undefined;
                    if(!michal) { _fun00024_ip = 45; continue _fun00023 }
 18:
                    tangon = _closure2_slot20;
                    michal = 'username';
                    entity = undefined;
                    if(!(michal === tangon)) { _fun00024_ip = 45; continue _fun00023 }
 32:
                    michal = {};
                    zuuluu = _closure2_slot9;
                    michal['color'] = zuuluu;
                    entity = michal;
 45:
                    return entity;
                }
            };
            target = target.bind(sequen)(echoed, update);
            update = sequen.useMemo;
            variable39 = config.avatar;
            echoed = new Array(6);
            echoed[0] = variable39;
            echoed[1] = cntext;
            echoed[2] = vacuum;
            echoed[3] = variable38;
            echoed[4] = variable37;
            echoed[5] = output;
            output = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = _closure1_slot14;
                    michal = _closure1_slot1;
                    entity = _closure1_slot2;
                    option = 42;
                    entity = entity[option];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    golfie = _closure2_slot17;
                    golfie = golfie.avatar;
                    entity['style'] = golfie;
                    golfie = _closure2_slot1;
                    entity['user'] = golfie;
                    golfie = _closure2_slot11;
                    entity['guildId'] = golfie;
                    golfie = _closure1_slot13;
                    offset = golfie.OFFLINE;
                    verify = _closure2_slot22;
                    golfie = null;
                    if(!(offset !== verify)) { _fun00026_ip = 88; continue _fun00025 }
 84:
                    golfie = _closure2_slot22;
 88:
                    entity['status'] = golfie;
                    golfie = _closure2_slot21;
                    entity['isMobileOnline'] = golfie;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    oscard = golfie.bind(zuuluu)(oscard);
                    oscard = oscard.AvatarSizes;
                    oscard = oscard.REFRESH_MEDIUM_32;
                    entity['size'] = oscard;
                    report = _closure2_slot24;
                    entity['avatarDecoration'] = report;
                    report = true;
                    entity['autoStatusCutout'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            output = update.bind(sequen)(output, echoed);
            update = sequen.useMemo;
            echoed = new Array(7);
            echoed[0] = quebec;
            echoed[1] = sierra;
            variable37 = yankee == variable36;
            quebec = undefined;
            if(variable37) { _fun00010_ip = 911; continue _fun00009 }
 906:
            quebec = variable36.name;
 911:
            echoed[2] = quebec;
            echoed[3] = equals;
            echoed[4] = cntext;
            echoed[5] = whisks;
            echoed[6] = verify;
            verify = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot14;
                    report = undefined;
                    if(!(report === entity)) { _fun00028_ip = 546; continue _fun00027 }
 16:
                    tangon = _closure1_slot15;
                    zuuluu = _closure1_slot16;
                    entity = {};
                    golfie = _closure2_slot0;
                    oscard = _closure1_slot12;
                    oscard = oscard.SUGGESTION;
                    if(!(golfie === oscard)) { _fun00028_ip = 75; continue _fun00027 }
 47:
                    oscard = _closure2_slot23;
                    golfie = null;
                    option = golfie == oscard;
                    oscard = undefined;
                    if(option) { _fun00028_ip = 71; continue _fun00027 }
 62:
                    option = _closure2_slot23;
                    oscard = option.name;
 71:
                    if(!(golfie == oscard)) { _fun00028_ip = 122; continue _fun00027 }
 75:
                    golfie = _closure2_slot8;
                    oscard = null;
                    if(!(oscard == golfie)) { _fun00028_ip = 120; continue _fun00027 }
 85:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 24;
                    oscard = verify[oscard];
                    verify = option.bind(report)(oscard);
                    option = verify.getName;
                    oscard = _closure2_slot1;
                    golfie = option.bind(verify)(oscard);
 120:
                    _fun00028_ip = 131; continue _fun00027;
 122:
                    oscard = _closure2_slot23;
                    golfie = oscard.name;
 131:
                    oscard = new Array(4);
                    oscard[0] = golfie;
                    golfie = _closure2_slot1;
                    verify = golfie.bot;
                    golfie = null;
                    option = null;
                    if(!verify) { _fun00028_ip = 272; continue _fun00027 }
 156:
                    romeon = _closure1_slot15;
                    offset = _closure1_slot16;
                    verify = {};
                    kiloes = _closure1_slot14;
                    backup = _closure1_slot1;
                    echoed = _closure1_slot2;
                    foxtra = 43;
                    foxtra = echoed[foxtra];
                    backup = backup.bind(report)(foxtra);
                    foxtra = {};
                    result = _closure2_slot1;
                    sizing = result.isVerifiedBot;
                    sizing = sizing.bind(result)();
                    foxtra['verified'] = sizing;
                    output = _closure1_slot0;
                    sizing = 44;
                    sizing = echoed[sizing];
                    output = output.bind(report)(sizing);
                    sizing = output.getBotTagTypeFromUser;
                    sizing = sizing.bind(output)(result);
                    foxtra['type'] = sizing;
                    backup = kiloes.bind(report)(backup, foxtra);
                    foxtra = [' '];
                    foxtra[1] = backup;
                    verify['children'] = foxtra;
                    option = romeon.bind(report)(offset, verify);
 272:
                    oscard[1] = option;
                    verify = _closure2_slot4;
                    option = null;
                    if(!verify) { _fun00028_ip = 399; continue _fun00027 }
 285:
                    romeon = _closure1_slot15;
                    offset = _closure1_slot16;
                    verify = {};
                    kiloes = _closure1_slot14;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    sizing = 22;
                    foxtra = result[sizing];
                    backup = output.bind(report)(foxtra);
                    foxtra = {};
                    sizing = result[sizing];
                    sizing = output.bind(report)(sizing);
                    sizing = sizing.Sizes;
                    sizing = sizing.REFRESH_SMALL_16;
                    foxtra['size'] = sizing;
                    sizing = 45;
                    sizing = result[sizing];
                    sizing = output.bind(report)(sizing);
                    foxtra['source'] = sizing;
                    sizing = true;
                    foxtra['disableColor'] = sizing;
                    backup = kiloes.bind(report)(backup, foxtra);
                    foxtra = [' '];
                    foxtra[1] = backup;
                    verify['children'] = foxtra;
                    option = romeon.bind(report)(offset, verify);
 399:
                    oscard[2] = option;
                    option = _closure2_slot10;
                    option = golfie != option;
                    golfie = null;
                    if(!option) { _fun00028_ip = 530; continue _fun00027 }
 416:
                    offset = _closure1_slot15;
                    verify = _closure1_slot16;
                    option = {};
                    foxtra = _closure1_slot14;
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    backup = 22;
                    yankee = sizing[backup];
                    romeon = kiloes.bind(report)(yankee);
                    yankee = {};
                    backup = sizing[backup];
                    backup = kiloes.bind(report)(backup);
                    backup = backup.Sizes;
                    backup = backup.REFRESH_SMALL_16;
                    yankee['size'] = backup;
                    backup = 46;
                    backup = sizing[backup];
                    backup = kiloes.bind(report)(backup);
                    yankee['source'] = backup;
                    backup = true;
                    yankee['disableColor'] = backup;
                    romeon = foxtra.bind(report)(romeon, yankee);
                    yankee = [' '];
                    yankee[1] = romeon;
                    option['children'] = yankee;
                    golfie = offset.bind(report)(verify, option);
 530:
                    oscard[3] = golfie;
                    entity['children'] = oscard;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00028_ip = 550; continue _fun00027;
 546:
                    entity = _closure2_slot14;
 550:
                    return entity;
                }
            };
            sequen = update.bind(sequen)(verify, echoed);
            update = _closure1_slot3;
            echoed = update.useMemo;
            verify = new Array(7);
            verify[0] = limora;
            verify[1] = cntext;
            verify[2] = sierra;
            verify[3] = status;
            verify[4] = papara;
            verify[5] = vacuum;
            verify[6] = tangon;
            tangon = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot13;
                    report = undefined;
                    if(!(report === entity)) { _fun00030_ip = 87; continue _fun00029 }
 13:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot24;
                    entity = {};
                    oscard = _closure2_slot1;
                    entity['user'] = oscard;
                    oscard = _closure2_slot0;
                    entity['type'] = oscard;
                    oscard = _closure2_slot19;
                    oscard = !oscard;
                    entity['animate'] = oscard;
                    oscard = _closure2_slot16;
                    entity['isGameRelationship'] = oscard;
                    oscard = _closure2_slot11;
                    entity['guildId'] = oscard;
                    oscard = _closure2_slot15;
                    entity['applicationId'] = oscard;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00030_ip = 91; continue _fun00029;
 87:
                    entity = _closure2_slot13;
 91:
                    return entity;
                }
            };
            tangon = echoed.bind(update)(tangon, verify);
            echoed = update.useMemo;
            verify = new Array(4);
            verify[0] = ctrled;
            verify[1] = result;
            verify[2] = zuuluu;
            verify[3] = source;
            oscard = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00032_ip = 54; continue _fun00031 }
 13:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(zuuluu) { _fun00032_ip = 52; continue _fun00031 }
 22:
                    report = _closure2_slot2;
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.ACTIONS;
                    zuuluu = undefined;
                    if(!(report === tangon)) { _fun00032_ip = 49; continue _fun00031 }
 45:
                    zuuluu = _closure2_slot26;
 49:
                    entity = zuuluu;
 52:
                    _fun00032_ip = 58; continue _fun00031;
 54:
                    entity = _closure2_slot12;
 58:
                    return entity;
                }
            };
            verify = echoed.bind(update)(oscard, verify);
            update = _closure1_slot15;
            echoed = _closure1_slot4;
            oscard = {};
            source = config.usernameLabelContainer;
            oscard['style'] = source;
            vacuum = _closure1_slot14;
            ctrled = _closure1_slot0;
            papara = _closure1_slot2;
            source = 23;
            source = papara[source];
            source = ctrled.bind(report)(source);
            ctrled = source.Text;
            source = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            source['style'] = target;
            source['children'] = sequen;
            ctrled = vacuum.bind(report)(ctrled, source);
            source = new Array(2);
            source[0] = ctrled;
            sequen = _closure1_slot14;
            vacuum = _closure1_slot1;
            ctrled = 47;
            ctrled = papara[ctrled];
            vacuum = vacuum.bind(report)(ctrled);
            ctrled = {};
            cntext = cntext.id;
            ctrled['userId'] = cntext;
            ctrled = sequen.bind(report)(vacuum, ctrled);
            source[1] = ctrled;
            oscard['children'] = source;
            ctrled = update.bind(report)(echoed, oscard);
            oscard = 'dot';
            oscard = oscard === option;
            if(!oscard) { _fun00010_ip = 1187; continue _fun00009 }
 1183:
            oscard = yankee != record;
 1187:
            option = ctrled;
            if(!oscard) { _fun00010_ip = 1288; continue _fun00009 }
 1193:
            update = _closure1_slot15;
            echoed = _closure1_slot4;
            oscard = {};
            source = config.labelContainer;
            oscard['style'] = source;
            sequen = _closure1_slot14;
            vacuum = _closure1_slot0;
            cntext = _closure1_slot2;
            source = 48;
            source = cntext[source];
            source = vacuum.bind(report)(source);
            vacuum = source.RoleDot;
            source = {};
            source['color'] = record;
            config = config.roleDot;
            source['containerStyles'] = config;
            vacuum = sequen.bind(report)(vacuum, source);
            source = new Array(2);
            source[0] = vacuum;
            source[1] = ctrled;
            oscard['children'] = source;
            option = update.bind(report)(echoed, oscard);
 1288:
            oscard = {};
            variable42 = oscard;
            variable41 = backup;
            backup = copyDataProperties(variable42, variable41);
            backup = 'disabled';
            oscard[backup] = result;
            backup = 'icon';
            oscard[backup] = output;
            backup = 'onPress';
            oscard[backup] = sizing;
            backup = 'onLongPress';
            oscard[backup] = kiloes;
            if(!(yankee != romeon)) { _fun00010_ip = 1343; continue _fun00009 }
 1340:
            foxtra = romeon;
 1343:
            romeon = 'accessibilityActions';
            oscard[romeon] = foxtra;
            if(!(yankee != entity)) { _fun00010_ip = 1359; continue _fun00009 }
 1356:
            offset = entity;
 1359:
            entity = 'onAccessibilityAction';
            oscard[entity] = offset;
            entity = 'label';
            oscard[entity] = option;
            entity = 'subLabel';
            oscard[entity] = tangon;
            entity = _closure1_slot11;
            entity = entity.TOGGLE;
            if(!(zuuluu !== entity)) { _fun00010_ip = 1459; continue _fun00009 }
 1400:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            entity = 50;
            entity = option[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.TableRow;
            entity = {};
            variable42 = entity;
            variable41 = oscard;
            option = copyDataProperties(variable42, variable41);
            option = 'trailing';
            entity[option] = verify;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 1516; continue _fun00009;
 1459:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 49;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.TableCheckboxRow;
            michal = {};
            variable42 = michal;
            variable41 = oscard;
            oscard = copyDataProperties(variable42, variable41);
            oscard = 'checked';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 1516:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 51;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();