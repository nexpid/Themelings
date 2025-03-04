// app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    backup = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = backup;
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
    var _closure1_slot21 = entity;
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
        oscard = _closure1_slot20;
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
    var _closure1_slot22 = entity;
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
            offset = _closure1_slot20;
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
    var _closure1_slot23 = entity;
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
        option = _closure1_slot20;
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
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: UserRowSubLabel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            offset = tangon.user;
            zuuluu = tangon.type;
            oscard = tangon.animate;
            michal = tangon.isGameRelationship;
            verify = tangon.guildId;
            report = tangon.applicationId;
            var _closure2_slot0 = report;
            option = tangon.hasNameplate;
            report = _closure1_slot19;
            golfie = undefined;
            option = report.bind(golfie)(option);
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
            if(!(zuuluu !== entity)) { _fun00008_ip = 229; continue _fun00007 }
 125:
            entity = _closure1_slot12;
            entity = entity.SUGGESTION;
            if(!(zuuluu !== entity)) { _fun00008_ip = 229; continue _fun00007 }
 139:
            entity = _closure1_slot12;
            entity = entity.PENDING_OUTGOING;
            if(!(zuuluu !== entity)) { _fun00008_ip = 229; continue _fun00007 }
 153:
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
            _fun00008_ip = 558; continue _fun00007;
 229:
            if(michal) { _fun00008_ip = 313; continue _fun00007 }
 232:
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
            _fun00008_ip = 555; continue _fun00007;
 313:
            backup = null;
            if(!(backup != foxtra)) { _fun00008_ip = 526; continue _fun00007 }
 322:
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
            if(!sizing) { _fun00008_ip = 417; continue _fun00007 }
 414:
            backup = kiloes;
 417:
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
            _fun00008_ip = 552; continue _fun00007;
 526:
            oscard = _closure1_slot14;
            report = _closure1_slot4;
            tangon = {};
            option = option.gameIcon;
            tangon['style'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 552:
            michal = zuuluu;
 555:
            entity = michal;
 558:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
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
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    romeon = 8;
    tangon = oscard[romeon];
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
    option = oscard[tangon];
    offset = report.bind(entity)(option);
    verify = offset.createStyles;
    option = {};
    yankee = {'flexShrink': 0, 'flexGrow': 0};
    option['avatar'] = yankee;
    yankee = {};
    foxtra = 12;
    foxtra = oscard[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_LINK;
    yankee['tintColor'] = foxtra;
    option['iconColor'] = yankee;
    yankee = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0};
    option['content'] = yankee;
    yankee = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0, 'height': '100%', 'justifyContent': 'center'};
    option['itemContent'] = yankee;
    foxtra = 'row';
    yankee = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignContent': 'center', 'alignItems': 'center'};
    option['contentInner'] = yankee;
    yankee = {'flex': 1, 'marginRight': 12};
    option['contentText'] = yankee;
    yankee = {};
    yankee['flexDirection'] = foxtra;
    option['actions'] = yankee;
    yankee = {'marginLeft': 12, 'alignSelf': 'center'};
    option['action'] = yankee;
    yankee = {};
    yankee['marginLeft'] = romeon;
    option['buttonWrapper'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center'};
    option['labelContainer'] = yankee;
    yankee = {'marginRight': 4, 'paddingTop': 0};
    option['roleDot'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    option['usernameLabelContainer'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot18 = option;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            michal = {};
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 12;
            tangon = tangon[oscard];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            golfie = tangon.colors;
            tangon = argFoo;
            if(tangon) { _fun00010_ip = 48; continue _fun00009 }
 40:
            tangon = golfie.TEXT_MUTED;
            _fun00010_ip = 54; continue _fun00009;
 48:
            tangon = golfie.INTERACTIVE_NORMAL;
 54:
            michal['color'] = tangon;
            entity['activityText'] = michal;
            michal = {'flexDirection': 'row', 'gap': 4};
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.xs;
            michal['cornerRadius'] = zuuluu;
            entity['gameContainer'] = michal;
            michal = {'width': 14, 'height': 14};
            entity['gameIcon'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 'Friends_v2';
    var _closure1_slot20 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: UserRow
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argFoo;
            whisks = verify.type;
            var _closure2_slot0 = whisks;
            target = verify.user;
            var _closure2_slot1 = target;
            tangon = verify.mode;
            report = undefined;
            if(!(tangon === report)) { _fun00012_ip = 47; continue _fun00011 }
 34:
            entity = _closure1_slot11;
            tangon = entity.NONE;
 47:
            var _closure2_slot2 = tangon;
            golfie = verify.selected;
            if(!(golfie === report)) { _fun00012_ip = 63; continue _fun00011 }
 61:
            golfie = false;
 63:
            update = verify.disabled;
            if(!(update === report)) { _fun00012_ip = 74; continue _fun00011 }
 72:
            update = false;
 74:
            var _closure2_slot3 = update;
            quebec = verify.isOwner;
            if(!(quebec === report)) { _fun00012_ip = 90; continue _fun00011 }
 88:
            quebec = false;
 90:
            var _closure2_slot4 = quebec;
            kiloes = verify.onPress;
            var _closure2_slot5 = kiloes;
            variable41 = verify.onLongPress;
            var _closure2_slot6 = variable41;
            romeon = verify.handleMessage;
            var _closure2_slot7 = romeon;
            entity = verify.nickname;
            var _closure2_slot8 = entity;
            papara = verify.usernameColor;
            var _closure2_slot9 = papara;
            yankee = verify.premiumSince;
            var _closure2_slot10 = yankee;
            config = verify.guildId;
            var _closure2_slot11 = config;
            sequen = verify.trailing;
            var _closure2_slot12 = sequen;
            equals = verify.subLabel;
            var _closure2_slot13 = equals;
            variable37 = verify.label;
            var _closure2_slot14 = variable37;
            backup = verify.accessibilityActions;
            zuuluu = verify.onAccessibilityAction;
            option = verify.applicationId;
            var _closure2_slot15 = option;
            status = verify.isGameRelationship;
            if(!(status === report)) { _fun00012_ip = 224; continue _fun00011 }
 222:
            status = false;
 224:
            var _closure2_slot16 = status;
            ctrled = verify.isNameplatedRow;
            if(!(ctrled === report)) { _fun00012_ip = 240; continue _fun00011 }
 238:
            ctrled = false;
 240:
            michal = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0, 'isNameplatedRow': 0};
            foxtra = null;
            variable45 = michal;
            variable44 = null;
            entity = silentSetPrototypeOf(variable45, variable44);
            variable45 = {};
            variable44 = verify;
            variable43 = michal;
            sizing = copyDataProperties(variable45, variable44, variable43);
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
            var _closure2_slot27 = report;
            entity = _closure1_slot18;
            cntext = entity.bind(report)();
            _closure2_slot17 = cntext;
            verify = _closure1_slot1;
            source = _closure1_slot2;
            entity = 26;
            entity = source[entity];
            entity = verify.bind(report)(entity);
            entity = entity.bind(report)();
            entity = entity.analyticsLocations;
            _closure2_slot18 = entity;
            offset = _closure1_slot0;
            output = 21;
            verify = source[output];
            vacuum = offset.bind(report)(verify);
            echoed = vacuum.useStateFromStoresObject;
            verify = _closure1_slot5;
            result = new Array(1);
            result[0] = verify;
            verify = function() {
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.useReducedMotion;
                entity['useReducedMotion'] = zuuluu;
                michal = michal.roleStyle;
                entity['roleStyle'] = michal;
                return entity;
            };
            verify = echoed.bind(vacuum)(result, verify);
            limora = verify.useReducedMotion;
            _closure2_slot19 = limora;
            verify = verify.roleStyle;
            _closure2_slot20 = verify;
            result = source[output];
            record = offset.bind(report)(result);
            vacuum = record.useStateFromStoresObject;
            result = _closure1_slot9;
            echoed = new Array(1);
            echoed[0] = result;
            result = function() {
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
            result = vacuum.bind(record)(echoed, result);
            variable39 = result.isMobileOnline;
            _closure2_slot21 = variable39;
            variable40 = result.status;
            _closure2_slot22 = variable40;
            result = source[output];
            record = offset.bind(report)(result);
            vacuum = record.useStateFromStores;
            result = _closure1_slot10;
            echoed = new Array(1);
            echoed[0] = result;
            result = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot8;
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00014_ip = 40; continue _fun00013 }
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
            variable36 = vacuum.bind(record)(echoed, result);
            _closure2_slot8 = variable36;
            output = source[output];
            vacuum = offset.bind(report)(output);
            echoed = vacuum.useStateFromStores;
            output = _closure1_slot7;
            result = new Array(1);
            result[0] = output;
            output = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getSuggestion;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            variable38 = echoed.bind(vacuum)(result, output);
            _closure2_slot23 = variable38;
            output = 27;
            output = source[output];
            result = offset.bind(report)(output);
            output = result.useAvatarDecoration;
            echoed = output.bind(result)(target, config);
            _closure2_slot24 = echoed;
            record = _closure1_slot3;
            result = record.useCallback;
            output = new Array(2);
            output[0] = target;
            output[1] = kiloes;
            kiloes = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00016_ip = 28; continue _fun00015 }
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
            result = result.bind(record)(kiloes, output);
            kiloes = record.useRef;
            kiloes = kiloes.bind(record)(target);
            _closure2_slot25 = kiloes;
            vacuum = record.useEffect;
            output = new Array(1);
            output[0] = target;
            kiloes = function() {
                michal = _closure2_slot25;
                entity = _closure2_slot1;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            kiloes = vacuum.bind(record)(kiloes, output);
            vacuum = record.useMemo;
            output = new Array(6);
            output[0] = tangon;
            output[1] = whisks;
            output[2] = target;
            output[3] = romeon;
            output[4] = option;
            output[5] = cntext;
            kiloes = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = new Array(0);
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot11;
                    entity = entity.ACTIONS;
                    if(!(zuuluu === entity)) { _fun00018_ip = 1607; continue _fun00017 }
 33:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot12;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== zuuluu)) { _fun00018_ip = 1143; continue _fun00017 }
 54:
                    entity = _closure1_slot12;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== zuuluu)) { _fun00018_ip = 902; continue _fun00017 }
 71:
                    entity = _closure1_slot12;
                    entity = entity.SUGGESTION;
                    if(!(entity !== zuuluu)) { _fun00018_ip = 551; continue _fun00017 }
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
                        zuuluu = _closure1_slot21;
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
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = _closure2_slot7;
                            entity = null;
                            zuuluu = entity == zuuluu;
                            tangon = undefined;
                            entity = undefined;
                            if(zuuluu) { _fun00020_ip = 38; continue _fun00019 }
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
                    _fun00018_ip = 1593; continue _fun00017;
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
                        zuuluu = _closure1_slot24;
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
                    _fun00018_ip = 1593; continue _fun00017;
 902:
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
                        tangon = _closure1_slot23;
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
                    _fun00018_ip = 1593; continue _fun00017;
 1143:
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
                        tangon = _closure1_slot23;
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
                        tangon = _closure1_slot22;
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
 1593:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    entity['actions'] = zuuluu;
                    return entity;
 1607:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    michal = undefined;
                    entity['actions'] = michal;
                    return entity;
                }
            };
            output = vacuum.bind(record)(kiloes, output);
            kiloes = output.accessibilityActions;
            vacuum = output.actions;
            _closure2_slot26 = vacuum;
            sierra = record.useCallback;
            output = new Array(3);
            output[0] = target;
            output[1] = romeon;
            output[2] = option;
            romeon = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    zuuluu = entity.actionName;
                    michal = _closure1_slot17;
                    michal = michal.CALL;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 280; continue _fun00021 }
 34:
                    michal = _closure1_slot17;
                    michal = michal.MESSAGE;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 245; continue _fun00021 }
 51:
                    michal = _closure1_slot17;
                    michal = michal.ACCEPT;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 220; continue _fun00021 }
 68:
                    michal = _closure1_slot17;
                    michal = michal.DECLINE;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 195; continue _fun00021 }
 82:
                    michal = _closure1_slot17;
                    michal = michal.CANCEL;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 195; continue _fun00021 }
 96:
                    michal = _closure1_slot17;
                    michal = michal.ACCEPT_SUGGESTION;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 175; continue _fun00021 }
 110:
                    michal = _closure1_slot17;
                    michal = michal.IGNORE_SUGGESTION;
                    if(!(michal !== zuuluu)) { _fun00022_ip = 128; continue _fun00021 }
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
                    tangon = _closure1_slot24;
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    return michal;
 195:
                    report = _closure1_slot23;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot15;
                    michal = undefined;
                    zuuluu = report.bind(michal)(tangon, zuuluu);
                    return michal;
 220:
                    report = _closure1_slot22;
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
                    if(tangon) { _fun00022_ip = 278; continue _fun00021 }
 265:
                    tangon = _closure2_slot7;
                    zuuluu = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu);
 278:
                    return michal;
 280:
                    zuuluu = _closure1_slot21;
                    michal = _closure2_slot1;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            romeon = sierra.bind(record)(romeon, output);
            sierra = record.useCallback;
            output = new Array(3);
            output[0] = variable41;
            output[1] = target;
            output[2] = entity;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00024_ip = 30; continue _fun00023 }
 13:
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    _fun00024_ip = 92; continue _fun00023;
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
            output = sierra.bind(record)(entity, output);
            entity = 42;
            entity = source[entity];
            source = offset.bind(report)(entity);
            offset = source.useNameplate;
            entity = {};
            sierra = 'UserRow';
            entity['location'] = sierra;
            entity['user'] = target;
            ctrled = !ctrled;
            entity['forceHide'] = ctrled;
            offset = offset.bind(source)(entity);
            entity = foxtra != offset;
            _closure2_slot27 = entity;
            sierra = record.useMemo;
            ctrled = new Array(2);
            ctrled[0] = papara;
            ctrled[1] = verify;
            source = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = _closure2_slot9;
                    entity = null;
                    michal = entity != michal;
                    entity = undefined;
                    if(!michal) { _fun00026_ip = 45; continue _fun00025 }
 18:
                    tangon = _closure2_slot20;
                    michal = 'username';
                    entity = undefined;
                    if(!(michal === tangon)) { _fun00026_ip = 45; continue _fun00025 }
 32:
                    michal = {};
                    zuuluu = _closure2_slot9;
                    michal['color'] = zuuluu;
                    entity = michal;
 45:
                    return entity;
                }
            };
            sierra = sierra.bind(record)(source, ctrled);
            ctrled = record.useMemo;
            variable41 = cntext.avatar;
            source = new Array(6);
            source[0] = variable41;
            source[1] = target;
            source[2] = config;
            source[3] = variable40;
            source[4] = variable39;
            source[5] = echoed;
            echoed = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = _closure1_slot14;
                    michal = _closure1_slot1;
                    entity = _closure1_slot2;
                    option = 43;
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
                    if(!(offset !== verify)) { _fun00028_ip = 88; continue _fun00027 }
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
            echoed = ctrled.bind(record)(echoed, source);
            ctrled = record.useMemo;
            source = new Array(7);
            source[0] = variable37;
            source[1] = whisks;
            variable39 = foxtra == variable38;
            variable37 = undefined;
            if(variable39) { _fun00012_ip = 982; continue _fun00011 }
 977:
            variable37 = variable38.name;
 982:
            source[2] = variable37;
            source[3] = variable36;
            source[4] = target;
            source[5] = quebec;
            source[6] = yankee;
            yankee = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot14;
                    report = undefined;
                    if(!(report === entity)) { _fun00030_ip = 546; continue _fun00029 }
 16:
                    tangon = _closure1_slot15;
                    zuuluu = _closure1_slot16;
                    entity = {};
                    golfie = _closure2_slot0;
                    oscard = _closure1_slot12;
                    oscard = oscard.SUGGESTION;
                    if(!(golfie === oscard)) { _fun00030_ip = 75; continue _fun00029 }
 47:
                    oscard = _closure2_slot23;
                    golfie = null;
                    option = golfie == oscard;
                    oscard = undefined;
                    if(option) { _fun00030_ip = 71; continue _fun00029 }
 62:
                    option = _closure2_slot23;
                    oscard = option.name;
 71:
                    if(!(golfie == oscard)) { _fun00030_ip = 122; continue _fun00029 }
 75:
                    golfie = _closure2_slot8;
                    oscard = null;
                    if(!(oscard == golfie)) { _fun00030_ip = 120; continue _fun00029 }
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
                    _fun00030_ip = 131; continue _fun00029;
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
                    if(!verify) { _fun00030_ip = 272; continue _fun00029 }
 156:
                    romeon = _closure1_slot15;
                    offset = _closure1_slot16;
                    verify = {};
                    kiloes = _closure1_slot14;
                    backup = _closure1_slot1;
                    echoed = _closure1_slot2;
                    foxtra = 44;
                    foxtra = echoed[foxtra];
                    backup = backup.bind(report)(foxtra);
                    foxtra = {};
                    result = _closure2_slot1;
                    sizing = result.isVerifiedBot;
                    sizing = sizing.bind(result)();
                    foxtra['verified'] = sizing;
                    output = _closure1_slot0;
                    sizing = 45;
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
                    if(!verify) { _fun00030_ip = 399; continue _fun00029 }
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
                    sizing = 46;
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
                    if(!option) { _fun00030_ip = 530; continue _fun00029 }
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
                    backup = 47;
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
                    _fun00030_ip = 550; continue _fun00029;
 546:
                    entity = _closure2_slot14;
 550:
                    return entity;
                }
            };
            record = ctrled.bind(record)(yankee, source);
            ctrled = _closure1_slot3;
            source = ctrled.useMemo;
            yankee = new Array(8);
            yankee[0] = equals;
            yankee[1] = target;
            yankee[2] = whisks;
            yankee[3] = limora;
            yankee[4] = status;
            yankee[5] = config;
            yankee[6] = option;
            yankee[7] = entity;
            option = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure2_slot13;
                    report = undefined;
                    if(!(report === entity)) { _fun00032_ip = 96; continue _fun00031 }
 13:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot25;
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
                    oscard = _closure2_slot27;
                    entity['hasNameplate'] = oscard;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00032_ip = 100; continue _fun00031;
 96:
                    entity = _closure2_slot13;
 100:
                    return entity;
                }
            };
            option = source.bind(ctrled)(option, yankee);
            source = ctrled.useMemo;
            yankee = new Array(4);
            yankee[0] = sequen;
            yankee[1] = update;
            yankee[2] = tangon;
            yankee[3] = vacuum;
            oscard = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = _closure2_slot12;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00034_ip = 54; continue _fun00033 }
 13:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(zuuluu) { _fun00034_ip = 52; continue _fun00033 }
 22:
                    report = _closure2_slot2;
                    zuuluu = _closure1_slot11;
                    tangon = zuuluu.ACTIONS;
                    zuuluu = undefined;
                    if(!(report === tangon)) { _fun00034_ip = 49; continue _fun00033 }
 45:
                    zuuluu = _closure2_slot26;
 49:
                    entity = zuuluu;
 52:
                    _fun00034_ip = 58; continue _fun00033;
 54:
                    entity = _closure2_slot12;
 58:
                    return entity;
                }
            };
            yankee = source.bind(ctrled)(oscard, yankee);
            ctrled = _closure1_slot15;
            source = _closure1_slot4;
            oscard = {};
            vacuum = cntext.usernameLabelContainer;
            oscard['style'] = vacuum;
            config = _closure1_slot14;
            sequen = _closure1_slot0;
            status = _closure1_slot2;
            vacuum = 23;
            vacuum = status[vacuum];
            vacuum = sequen.bind(report)(vacuum);
            sequen = vacuum.Text;
            vacuum = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            vacuum['style'] = sierra;
            vacuum['children'] = record;
            sequen = config.bind(report)(sequen, vacuum);
            vacuum = new Array(2);
            vacuum[0] = sequen;
            record = _closure1_slot14;
            config = _closure1_slot1;
            sequen = 48;
            sequen = status[sequen];
            config = config.bind(report)(sequen);
            sequen = {};
            target = target.id;
            sequen['userId'] = target;
            sequen = record.bind(report)(config, sequen);
            vacuum[1] = sequen;
            oscard['children'] = vacuum;
            sequen = ctrled.bind(report)(source, oscard);
            oscard = 'dot';
            oscard = oscard === verify;
            if(!oscard) { _fun00012_ip = 1262; continue _fun00011 }
 1258:
            oscard = foxtra != papara;
 1262:
            verify = sequen;
            if(!oscard) { _fun00012_ip = 1363; continue _fun00011 }
 1268:
            ctrled = _closure1_slot15;
            source = _closure1_slot4;
            oscard = {};
            vacuum = cntext.labelContainer;
            oscard['style'] = vacuum;
            record = _closure1_slot14;
            config = _closure1_slot0;
            target = _closure1_slot2;
            vacuum = 49;
            vacuum = target[vacuum];
            vacuum = config.bind(report)(vacuum);
            config = vacuum.RoleDot;
            vacuum = {};
            vacuum['color'] = papara;
            cntext = cntext.roleDot;
            vacuum['containerStyles'] = cntext;
            config = record.bind(report)(config, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            vacuum[1] = sequen;
            oscard['children'] = vacuum;
            verify = ctrled.bind(report)(source, oscard);
 1363:
            oscard = {};
            variable45 = oscard;
            variable44 = sizing;
            sizing = copyDataProperties(variable45, variable44);
            sizing = 'disabled';
            oscard[sizing] = update;
            sizing = 'icon';
            oscard[sizing] = echoed;
            sizing = 'onPress';
            oscard[sizing] = result;
            sizing = 'onLongPress';
            oscard[sizing] = output;
            if(!(foxtra != backup)) { _fun00012_ip = 1418; continue _fun00011 }
 1415:
            kiloes = backup;
 1418:
            backup = 'accessibilityActions';
            oscard[backup] = kiloes;
            if(!(foxtra != zuuluu)) { _fun00012_ip = 1434; continue _fun00011 }
 1431:
            romeon = zuuluu;
 1434:
            zuuluu = 'onAccessibilityAction';
            oscard[zuuluu] = romeon;
            zuuluu = 'label';
            oscard[zuuluu] = verify;
            zuuluu = 'subLabel';
            oscard[zuuluu] = option;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.TOGGLE;
            if(!(tangon !== zuuluu)) { _fun00012_ip = 1593; continue _fun00011 }
 1475:
            option = _closure1_slot14;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            if(entity) { _fun00012_ip = 1537; continue _fun00011 }
 1490:
            entity = 52;
            entity = verify[entity];
            entity = tangon.bind(report)(entity);
            zuuluu = entity.TableRow;
            entity = {};
            variable45 = entity;
            variable44 = oscard;
            romeon = copyDataProperties(variable45, variable44);
            romeon = 'trailing';
            entity[romeon] = yankee;
            entity = option.bind(report)(zuuluu, entity);
            _fun00012_ip = 1591; continue _fun00011;
 1537:
            zuuluu = 51;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.UserNameplateRow;
            zuuluu = {};
            variable45 = zuuluu;
            variable44 = oscard;
            verify = copyDataProperties(variable45, variable44);
            verify = 'trailing';
            zuuluu[verify] = yankee;
            verify = 'nameplate';
            zuuluu[verify] = offset;
            entity = option.bind(report)(tangon, zuuluu);
 1591:
            _fun00012_ip = 1650; continue _fun00011;
 1593:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 50;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.TableCheckboxRow;
            michal = {};
            variable45 = michal;
            variable44 = oscard;
            oscard = copyDataProperties(variable45, variable44);
            oscard = 'checked';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 1650:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 53;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();