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
            tangon = tangon.applicationId;
            var _closure2_slot0 = tangon;
            report = _closure1_slot19;
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
            if(!(zuuluu !== entity)) { _fun00008_ip = 210; continue _fun00007 }
 116:
            entity = _closure1_slot12;
            entity = entity.SUGGESTION;
            if(!(zuuluu !== entity)) { _fun00008_ip = 210; continue _fun00007 }
 130:
            entity = _closure1_slot12;
            entity = entity.PENDING_OUTGOING;
            if(!(zuuluu !== entity)) { _fun00008_ip = 210; continue _fun00007 }
 144:
            report = _closure1_slot14;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 25;
            entity = yankee[entity];
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = {};
            yankee = offset.id;
            entity['userId'] = yankee;
            entity['guildId'] = verify;
            verify = option.activityText;
            entity['textStyle'] = verify;
            entity['animate'] = oscard;
            entity = report.bind(golfie)(zuuluu, entity);
            _fun00008_ip = 540; continue _fun00007;
 210:
            if(michal) { _fun00008_ip = 294; continue _fun00007 }
 213:
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
            _fun00008_ip = 537; continue _fun00007;
 294:
            backup = null;
            if(!(backup != foxtra)) { _fun00008_ip = 508; continue _fun00007 }
 303:
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
            if(!sizing) { _fun00008_ip = 398; continue _fun00007 }
 395:
            backup = kiloes;
 398:
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
            _fun00008_ip = 534; continue _fun00007;
 508:
            oscard = _closure1_slot14;
            report = _closure1_slot4;
            tangon = {};
            option = option.gameIcon;
            tangon['style'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 534:
            michal = zuuluu;
 537:
            entity = michal;
 540:
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
    backup = 8;
    tangon = oscard[backup];
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot14 = option;
    option = tangon.jsxs;
    var _closure1_slot15 = option;
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
    foxtra = {};
    yankee = 12;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.TEXT_LINK;
    foxtra['tintColor'] = kiloes;
    option['iconColor'] = foxtra;
    foxtra = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0};
    option['content'] = foxtra;
    foxtra = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0, 'height': '100%', 'justifyContent': 'center'};
    option['itemContent'] = foxtra;
    kiloes = 'row';
    foxtra = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignContent': 'center', 'alignItems': 'center'};
    option['contentInner'] = foxtra;
    foxtra = {'flex': 1, 'marginRight': 12};
    option['contentText'] = foxtra;
    foxtra = {};
    foxtra['flexDirection'] = kiloes;
    option['actions'] = foxtra;
    foxtra = {'marginLeft': 12, 'alignSelf': 'center'};
    option['action'] = foxtra;
    foxtra = {};
    foxtra['marginLeft'] = backup;
    option['buttonWrapper'] = foxtra;
    foxtra = {'flexDirection': 'row', 'alignItems': 'center'};
    option['labelContainer'] = foxtra;
    foxtra = {'marginRight': 4, 'paddingTop': 0};
    option['roleDot'] = foxtra;
    foxtra = {'display': 'flex', 'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    option['usernameLabelContainer'] = foxtra;
    foxtra = {'display': 'flex', 'flexShrink': 1};
    option['usernameLabel'] = foxtra;
    option = verify.bind(offset)(option);
    var _closure1_slot18 = option;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_SECONDARY;
    offset['color'] = foxtra;
    tangon['activityText'] = offset;
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
    var _closure1_slot19 = tangon;
    tangon = 'Friends_v2';
    var _closure1_slot20 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: UserRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            romeon = argFoo;
            quebec = romeon.type;
            var _closure2_slot0 = quebec;
            status = romeon.user;
            var _closure2_slot1 = status;
            option = romeon.mode;
            report = undefined;
            if(!(option === report)) { _fun00010_ip = 47; continue _fun00009 }
 34:
            entity = _closure1_slot11;
            option = entity.NONE;
 47:
            var _closure2_slot2 = option;
            golfie = romeon.selected;
            if(!(golfie === report)) { _fun00010_ip = 63; continue _fun00009 }
 61:
            golfie = false;
 63:
            update = romeon.disabled;
            if(!(update === report)) { _fun00010_ip = 74; continue _fun00009 }
 72:
            update = false;
 74:
            var _closure2_slot3 = update;
            variable37 = romeon.isOwner;
            if(!(variable37 === report)) { _fun00010_ip = 90; continue _fun00009 }
 88:
            variable37 = false;
 90:
            var _closure2_slot4 = variable37;
            kiloes = romeon.onPress;
            var _closure2_slot5 = kiloes;
            variable42 = romeon.onLongPress;
            var _closure2_slot6 = variable42;
            foxtra = romeon.handleMessage;
            var _closure2_slot7 = foxtra;
            entity = romeon.nickname;
            var _closure2_slot8 = entity;
            target = romeon.usernameColor;
            var _closure2_slot9 = target;
            papara = romeon.roleColors;
            yankee = romeon.premiumSince;
            var _closure2_slot10 = yankee;
            ctrled = romeon.guildId;
            var _closure2_slot11 = ctrled;
            record = romeon.trailing;
            var _closure2_slot12 = record;
            variable36 = romeon.subLabel;
            var _closure2_slot13 = variable36;
            variable38 = romeon.label;
            var _closure2_slot14 = variable38;
            backup = romeon.accessibilityActions;
            tangon = romeon.onAccessibilityAction;
            verify = romeon.applicationId;
            var _closure2_slot15 = verify;
            limora = romeon.isGameRelationship;
            if(!(limora === report)) { _fun00010_ip = 230; continue _fun00009 }
 228:
            limora = false;
 230:
            var _closure2_slot16 = limora;
            entity = romeon.isNameplatedRow;
            if(!(entity === report)) { _fun00010_ip = 246; continue _fun00009 }
 244:
            entity = false;
 246:
            offset = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'roleColors': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0, 'isNameplatedRow': 0};
            zuuluu = null;
            variable46 = offset;
            variable45 = null;
            michal = silentSetPrototypeOf(variable46, variable45);
            variable46 = {};
            variable45 = romeon;
            variable44 = offset;
            sizing = copyDataProperties(variable46, variable45, variable44);
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
            offset = _closure1_slot18;
            cntext = offset.bind(report)();
            _closure2_slot17 = cntext;
            romeon = _closure1_slot1;
            sequen = _closure1_slot2;
            offset = 26;
            offset = sequen[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.bind(report)();
            offset = offset.analyticsLocations;
            _closure2_slot18 = offset;
            vacuum = _closure1_slot0;
            output = 21;
            romeon = sequen[output];
            source = vacuum.bind(report)(romeon);
            echoed = source.useStateFromStoresObject;
            romeon = _closure1_slot5;
            result = new Array(1);
            result[0] = romeon;
            romeon = function() {
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.useReducedMotion;
                entity['useReducedMotion'] = zuuluu;
                michal = michal.roleStyle;
                entity['roleStyle'] = michal;
                return entity;
            };
            romeon = echoed.bind(source)(result, romeon);
            equals = romeon.useReducedMotion;
            _closure2_slot19 = equals;
            romeon = romeon.roleStyle;
            _closure2_slot20 = romeon;
            result = sequen[output];
            config = vacuum.bind(report)(result);
            source = config.useStateFromStoresObject;
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
            result = source.bind(config)(echoed, result);
            variable39 = result.isMobileOnline;
            _closure2_slot21 = variable39;
            variable41 = result.status;
            _closure2_slot22 = variable41;
            result = sequen[output];
            config = vacuum.bind(report)(result);
            source = config.useStateFromStores;
            result = _closure1_slot10;
            echoed = new Array(1);
            echoed[0] = result;
            result = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot8;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00012_ip = 42; continue _fun00011 }
 13:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getNickname;
                    entity = _closure2_slot1;
                    entity = entity.id;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00012_ip = 46; continue _fun00011;
 42:
                    entity = _closure2_slot8;
 46:
                    return entity;
                }
            };
            source = source.bind(config)(echoed, result);
            _closure2_slot8 = source;
            output = sequen[output];
            config = vacuum.bind(report)(output);
            echoed = config.useStateFromStores;
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
            variable40 = echoed.bind(config)(result, output);
            _closure2_slot23 = variable40;
            output = 27;
            output = sequen[output];
            result = vacuum.bind(report)(output);
            output = result.useAvatarDecoration;
            echoed = output.bind(result)(status, ctrled);
            _closure2_slot24 = echoed;
            sierra = _closure1_slot3;
            result = sierra.useCallback;
            output = new Array(2);
            output[0] = status;
            output[1] = kiloes;
            kiloes = function() {
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
            result = result.bind(sierra)(kiloes, output);
            kiloes = sierra.useRef;
            kiloes = kiloes.bind(sierra)(status);
            _closure2_slot25 = kiloes;
            config = sierra.useEffect;
            output = new Array(1);
            output[0] = status;
            kiloes = function() {
                michal = _closure2_slot25;
                entity = _closure2_slot1;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            kiloes = config.bind(sierra)(kiloes, output);
            config = sierra.useMemo;
            output = new Array(6);
            output[0] = option;
            output[1] = quebec;
            output[2] = status;
            output[3] = foxtra;
            output[4] = verify;
            output[5] = cntext;
            kiloes = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = new Array(0);
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot11;
                    entity = entity.ACTIONS;
                    if(!(zuuluu === entity)) { _fun00016_ip = 1595; continue _fun00015 }
 33:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot12;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 1135; continue _fun00015 }
 54:
                    entity = _closure1_slot12;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 896; continue _fun00015 }
 71:
                    entity = _closure1_slot12;
                    entity = entity.SUGGESTION;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 547; continue _fun00015 }
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
                    _fun00016_ip = 1581; continue _fun00015;
 547:
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
                    _fun00016_ip = 1581; continue _fun00015;
 896:
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
                    _fun00016_ip = 1581; continue _fun00015;
 1135:
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
 1581:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    entity['actions'] = zuuluu;
                    return entity;
 1595:
                    entity = {};
                    entity['accessibilityActions'] = michal;
                    michal = undefined;
                    entity['actions'] = michal;
                    return entity;
                }
            };
            output = config.bind(sierra)(kiloes, output);
            kiloes = output.accessibilityActions;
            config = output.actions;
            _closure2_slot26 = config;
            whisks = sierra.useCallback;
            output = new Array(3);
            output[0] = status;
            output[1] = foxtra;
            output[2] = verify;
            foxtra = function(argFoo) {
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
                    if(tangon) { _fun00020_ip = 278; continue _fun00019 }
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
            foxtra = whisks.bind(sierra)(foxtra, output);
            whisks = sierra.useCallback;
            output = new Array(3);
            output[0] = variable42;
            output[1] = status;
            output[2] = offset;
            offset = function() {
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
                    _fun00022_ip = 90; continue _fun00021;
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
 90:
                    entity = undefined;
                    return entity;
                }
            };
            output = whisks.bind(sierra)(offset, output);
            offset = 42;
            offset = sequen[offset];
            sequen = vacuum.bind(report)(offset);
            vacuum = sequen.useNameplate;
            offset = {};
            offset['user'] = status;
            offset = vacuum.bind(sequen)(offset);
            whisks = sierra.useMemo;
            sequen = new Array(2);
            sequen[0] = target;
            sequen[1] = romeon;
            vacuum = function() {
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
            whisks = whisks.bind(sierra)(vacuum, sequen);
            sequen = sierra.useMemo;
            variable42 = cntext.avatar;
            vacuum = new Array(6);
            vacuum[0] = variable42;
            vacuum[1] = status;
            vacuum[2] = ctrled;
            vacuum[3] = variable41;
            vacuum[4] = variable39;
            vacuum[5] = echoed;
            echoed = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
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
            echoed = sequen.bind(sierra)(echoed, vacuum);
            sequen = sierra.useMemo;
            vacuum = new Array(5);
            vacuum[0] = variable38;
            vacuum[1] = quebec;
            variable41 = zuuluu == variable40;
            variable39 = undefined;
            if(variable41) { _fun00010_ip = 936; continue _fun00009 }
 931:
            variable39 = variable40.name;
 936:
            vacuum[2] = variable39;
            vacuum[3] = source;
            vacuum[4] = status;
            source = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot14;
                    tangon = undefined;
                    if(!(tangon === entity)) { _fun00028_ip = 126; continue _fun00027 }
 13:
                    report = _closure2_slot0;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.SUGGESTION;
                    if(!(report === zuuluu)) { _fun00028_ip = 62; continue _fun00027 }
 34:
                    zuuluu = _closure2_slot23;
                    report = null;
                    oscard = report == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00028_ip = 58; continue _fun00027 }
 49:
                    oscard = _closure2_slot23;
                    zuuluu = oscard.name;
 58:
                    if(!(report == zuuluu)) { _fun00028_ip = 115; continue _fun00027 }
 62:
                    report = _closure2_slot8;
                    zuuluu = null;
                    if(!(zuuluu == report)) { _fun00028_ip = 109; continue _fun00027 }
 72:
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 24;
                    entity = report[entity];
                    tangon = zuuluu.bind(tangon)(entity);
                    zuuluu = tangon.getName;
                    entity = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00028_ip = 113; continue _fun00027;
 109:
                    entity = _closure2_slot8;
 113:
                    _fun00028_ip = 124; continue _fun00027;
 115:
                    zuuluu = _closure2_slot23;
                    entity = zuuluu.name;
 124:
                    _fun00028_ip = 130; continue _fun00027;
 126:
                    entity = _closure2_slot14;
 130:
                    return entity;
                }
            };
            sierra = sequen.bind(sierra)(source, vacuum);
            vacuum = _closure1_slot3;
            sequen = vacuum.useMemo;
            source = new Array(4);
            source[0] = variable38;
            source[1] = status;
            source[2] = variable37;
            source[3] = yankee;
            yankee = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot14;
                    tangon = undefined;
                    if(!(tangon !== entity)) { _fun00030_ip = 15; continue _fun00029 }
 13:
                    return tangon;
 15:
                    zuuluu = _closure1_slot15;
                    michal = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 23;
                    entity = report[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.Text;
                    entity = {};
                    report = 'text-md/semibold';
                    entity['variant'] = report;
                    report = _closure2_slot1;
                    report = report.bot;
                    oscard = null;
                    option = null;
                    if(!report) { _fun00030_ip = 190; continue _fun00029 }
 74:
                    yankee = _closure1_slot15;
                    verify = _closure1_slot16;
                    report = {};
                    backup = _closure1_slot14;
                    foxtra = _closure1_slot1;
                    result = _closure1_slot2;
                    romeon = 44;
                    romeon = result[romeon];
                    foxtra = foxtra.bind(tangon)(romeon);
                    romeon = {};
                    output = _closure2_slot1;
                    kiloes = output.isVerifiedBot;
                    kiloes = kiloes.bind(output)();
                    romeon['verified'] = kiloes;
                    sizing = _closure1_slot0;
                    kiloes = 45;
                    kiloes = result[kiloes];
                    sizing = sizing.bind(tangon)(kiloes);
                    kiloes = sizing.getBotTagTypeFromUser;
                    kiloes = kiloes.bind(sizing)(output);
                    romeon['type'] = kiloes;
                    foxtra = backup.bind(tangon)(foxtra, romeon);
                    romeon = [' '];
                    romeon[1] = foxtra;
                    report['children'] = romeon;
                    option = yankee.bind(tangon)(verify, report);
 190:
                    report = new Array(3);
                    report[0] = option;
                    verify = _closure2_slot4;
                    option = null;
                    if(!verify) { _fun00030_ip = 321; continue _fun00029 }
 207:
                    romeon = _closure1_slot15;
                    yankee = _closure1_slot16;
                    verify = {};
                    kiloes = _closure1_slot14;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    sizing = 22;
                    foxtra = result[sizing];
                    backup = output.bind(tangon)(foxtra);
                    foxtra = {};
                    sizing = result[sizing];
                    sizing = output.bind(tangon)(sizing);
                    sizing = sizing.Sizes;
                    sizing = sizing.REFRESH_SMALL_16;
                    foxtra['size'] = sizing;
                    sizing = 46;
                    sizing = result[sizing];
                    sizing = output.bind(tangon)(sizing);
                    foxtra['source'] = sizing;
                    sizing = true;
                    foxtra['disableColor'] = sizing;
                    backup = kiloes.bind(tangon)(backup, foxtra);
                    foxtra = [' '];
                    foxtra[1] = backup;
                    verify['children'] = foxtra;
                    option = romeon.bind(tangon)(yankee, verify);
 321:
                    report[1] = option;
                    golfie = _closure2_slot10;
                    golfie = oscard != golfie;
                    oscard = null;
                    if(!golfie) { _fun00030_ip = 452; continue _fun00029 }
 338:
                    verify = _closure1_slot15;
                    option = _closure1_slot16;
                    golfie = {};
                    romeon = _closure1_slot14;
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    foxtra = 22;
                    offset = kiloes[foxtra];
                    yankee = backup.bind(tangon)(offset);
                    offset = {};
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(tangon)(foxtra);
                    foxtra = foxtra.Sizes;
                    foxtra = foxtra.REFRESH_SMALL_16;
                    offset['size'] = foxtra;
                    foxtra = 47;
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(tangon)(foxtra);
                    offset['source'] = foxtra;
                    foxtra = true;
                    offset['disableColor'] = foxtra;
                    yankee = romeon.bind(tangon)(yankee, offset);
                    offset = [' '];
                    offset[1] = yankee;
                    golfie['children'] = offset;
                    oscard = verify.bind(tangon)(option, golfie);
 452:
                    report[2] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            sequen = sequen.bind(vacuum)(yankee, source);
            source = vacuum.useMemo;
            yankee = new Array(7);
            yankee[0] = variable36;
            yankee[1] = status;
            yankee[2] = quebec;
            yankee[3] = equals;
            yankee[4] = limora;
            yankee[5] = ctrled;
            yankee[6] = verify;
            verify = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure2_slot13;
                    report = undefined;
                    if(!(report === entity)) { _fun00032_ip = 87; continue _fun00031 }
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
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00032_ip = 91; continue _fun00031;
 87:
                    entity = _closure2_slot13;
 91:
                    return entity;
                }
            };
            verify = source.bind(vacuum)(verify, yankee);
            source = vacuum.useMemo;
            yankee = new Array(4);
            yankee[0] = record;
            yankee[1] = update;
            yankee[2] = option;
            yankee[3] = config;
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
            yankee = source.bind(vacuum)(oscard, yankee);
            source = _closure1_slot1;
            vacuum = _closure1_slot2;
            oscard = 48;
            oscard = vacuum[oscard];
            source = source.bind(report)(oscard);
            oscard = status.id;
            quebec = source.bind(report)(ctrled, oscard);
            ctrled = _closure1_slot0;
            source = 49;
            source = vacuum[source];
            ctrled = ctrled.bind(report)(source);
            source = ctrled.useProcessColorStringsArray;
            equals = source.bind(ctrled)(papara);
            if(!quebec) { _fun00010_ip = 1152; continue _fun00009 }
 1144:
            oscard = 'username';
            quebec = oscard === romeon;
 1152:
            if(!quebec) { _fun00010_ip = 1167; continue _fun00009 }
 1155:
            source = equals.length;
            oscard = 1;
            quebec = source > oscard;
 1167:
            ctrled = _closure1_slot15;
            source = _closure1_slot4;
            oscard = {};
            vacuum = cntext.usernameLabelContainer;
            oscard['style'] = vacuum;
            record = _closure1_slot14;
            config = _closure1_slot0;
            limora = _closure1_slot2;
            vacuum = 23;
            vacuum = limora[vacuum];
            vacuum = config.bind(report)(vacuum);
            config = vacuum.Text;
            vacuum = {'gradientColors': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            limora = undefined;
            if(!quebec) { _fun00010_ip = 1238; continue _fun00009 }
 1235:
            limora = equals;
 1238:
            vacuum['gradientColors'] = limora;
            equals = cntext.usernameLabel;
            limora = new Array(2);
            limora[0] = equals;
            limora[1] = whisks;
            vacuum['style'] = limora;
            vacuum['children'] = sierra;
            config = record.bind(report)(config, vacuum);
            vacuum = new Array(3);
            vacuum[0] = config;
            vacuum[1] = sequen;
            record = _closure1_slot14;
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            sequen = 50;
            sequen = sierra[sequen];
            config = config.bind(report)(sequen);
            sequen = {};
            status = status.id;
            sequen['userId'] = status;
            sequen = record.bind(report)(config, sequen);
            vacuum[2] = sequen;
            oscard['children'] = vacuum;
            sequen = ctrled.bind(report)(source, oscard);
            oscard = 'dot';
            oscard = oscard !== romeon;
            if(oscard) { _fun00010_ip = 1368; continue _fun00009 }
 1354:
            romeon = zuuluu == target;
            if(!romeon) { _fun00010_ip = 1365; continue _fun00009 }
 1361:
            romeon = zuuluu == papara;
 1365:
            oscard = romeon;
 1368:
            romeon = sequen;
            if(oscard) { _fun00010_ip = 1473; continue _fun00009 }
 1374:
            ctrled = _closure1_slot15;
            source = _closure1_slot4;
            oscard = {};
            vacuum = cntext.labelContainer;
            oscard['style'] = vacuum;
            record = _closure1_slot14;
            config = _closure1_slot0;
            status = _closure1_slot2;
            vacuum = 51;
            vacuum = status[vacuum];
            vacuum = config.bind(report)(vacuum);
            config = vacuum.RoleDot;
            vacuum = {};
            vacuum['color'] = target;
            vacuum['colors'] = papara;
            cntext = cntext.roleDot;
            vacuum['containerStyles'] = cntext;
            config = record.bind(report)(config, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            vacuum[1] = sequen;
            oscard['children'] = vacuum;
            romeon = ctrled.bind(report)(source, oscard);
 1473:
            oscard = {};
            variable46 = oscard;
            variable45 = sizing;
            sizing = copyDataProperties(variable46, variable45);
            sizing = 'disabled';
            oscard[sizing] = update;
            sizing = 'icon';
            oscard[sizing] = echoed;
            sizing = 'onPress';
            oscard[sizing] = result;
            sizing = 'onLongPress';
            oscard[sizing] = output;
            if(!(zuuluu != backup)) { _fun00010_ip = 1528; continue _fun00009 }
 1525:
            kiloes = backup;
 1528:
            backup = 'accessibilityActions';
            oscard[backup] = kiloes;
            if(!(zuuluu != tangon)) { _fun00010_ip = 1544; continue _fun00009 }
 1541:
            foxtra = tangon;
 1544:
            tangon = 'onAccessibilityAction';
            oscard[tangon] = foxtra;
            tangon = 'label';
            oscard[tangon] = romeon;
            tangon = 'subLabel';
            oscard[tangon] = verify;
            tangon = _closure1_slot11;
            tangon = tangon.TOGGLE;
            if(!(option !== tangon)) { _fun00010_ip = 1722; continue _fun00009 }
 1588:
            if(!(zuuluu != offset)) { _fun00010_ip = 1595; continue _fun00009 }
 1592:
            if(entity) { _fun00010_ip = 1654; continue _fun00009 }
 1595:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            entity = 54;
            entity = option[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.TableRow;
            entity = {};
            variable46 = entity;
            variable45 = oscard;
            option = copyDataProperties(variable46, variable45);
            option = 'trailing';
            entity[option] = yankee;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 1720; continue _fun00009;
 1654:
            option = _closure1_slot14;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 53;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.UserNameplateRow;
            zuuluu = {};
            variable46 = zuuluu;
            variable45 = oscard;
            verify = copyDataProperties(variable46, variable45);
            verify = 'trailing';
            zuuluu[verify] = yankee;
            verify = 'nameplate';
            zuuluu[verify] = offset;
            entity = option.bind(report)(tangon, zuuluu);
 1720:
            _fun00010_ip = 1779; continue _fun00009;
 1722:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 52;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.TableCheckboxRow;
            michal = {};
            variable46 = michal;
            variable45 = oscard;
            oscard = copyDataProperties(variable46, variable45);
            oscard = 'checked';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 1779:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 55;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();