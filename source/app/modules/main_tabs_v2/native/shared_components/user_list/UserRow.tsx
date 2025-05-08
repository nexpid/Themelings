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
            if(!(zuuluu !== entity)) { _fun00008_ip = 212; continue _fun00007 }
 118:
            entity = _closure1_slot12;
            entity = entity.SUGGESTION;
            if(!(zuuluu !== entity)) { _fun00008_ip = 212; continue _fun00007 }
 132:
            entity = _closure1_slot12;
            entity = entity.PENDING_OUTGOING;
            if(!(zuuluu !== entity)) { _fun00008_ip = 212; continue _fun00007 }
 146:
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
            _fun00008_ip = 541; continue _fun00007;
 212:
            if(michal) { _fun00008_ip = 296; continue _fun00007 }
 215:
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
            _fun00008_ip = 538; continue _fun00007;
 296:
            backup = null;
            if(!(backup != foxtra)) { _fun00008_ip = 509; continue _fun00007 }
 305:
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
            if(!sizing) { _fun00008_ip = 400; continue _fun00007 }
 397:
            backup = kiloes;
 400:
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
            _fun00008_ip = 535; continue _fun00007;
 509:
            oscard = _closure1_slot14;
            report = _closure1_slot4;
            tangon = {};
            option = option.gameIcon;
            tangon['style'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 535:
            michal = zuuluu;
 538:
            entity = michal;
 541:
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
    foxtra = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    option['usernameLabelContainer'] = foxtra;
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
            whisks = romeon.type;
            var _closure2_slot0 = whisks;
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
            foxtra = romeon.onPress;
            var _closure2_slot5 = foxtra;
            source = romeon.onLongPress;
            var _closure2_slot6 = source;
            yankee = romeon.handleMessage;
            var _closure2_slot7 = yankee;
            entity = romeon.nickname;
            var _closure2_slot8 = entity;
            target = romeon.usernameColor;
            var _closure2_slot9 = target;
            papara = romeon.roleColors;
            var _closure2_slot10 = papara;
            variable36 = romeon.premiumSince;
            var _closure2_slot11 = variable36;
            record = romeon.guildId;
            var _closure2_slot12 = record;
            config = romeon.trailing;
            var _closure2_slot13 = config;
            equals = romeon.subLabel;
            var _closure2_slot14 = equals;
            variable39 = romeon.label;
            var _closure2_slot15 = variable39;
            backup = romeon.accessibilityActions;
            tangon = romeon.onAccessibilityAction;
            verify = romeon.applicationId;
            var _closure2_slot16 = verify;
            sierra = romeon.isGameRelationship;
            if(!(sierra === report)) { _fun00010_ip = 234; continue _fun00009 }
 232:
            sierra = false;
 234:
            var _closure2_slot17 = sierra;
            entity = romeon.isNameplatedRow;
            if(!(entity === report)) { _fun00010_ip = 250; continue _fun00009 }
 248:
            entity = false;
 250:
            offset = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'roleColors': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0, 'isNameplatedRow': 0};
            zuuluu = null;
            variable48 = offset;
            variable47 = null;
            michal = silentSetPrototypeOf(variable48, variable47);
            variable48 = {};
            variable47 = romeon;
            variable46 = offset;
            sizing = copyDataProperties(variable48, variable47, variable46);
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
            var _closure2_slot28 = report;
            var _closure2_slot29 = report;
            offset = _closure1_slot18;
            cntext = offset.bind(report)();
            _closure2_slot18 = cntext;
            romeon = _closure1_slot1;
            variable41 = _closure1_slot2;
            offset = 26;
            offset = variable41[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.bind(report)();
            offset = offset.analyticsLocations;
            _closure2_slot19 = offset;
            ctrled = _closure1_slot0;
            kiloes = 21;
            romeon = variable41[kiloes];
            echoed = ctrled.bind(report)(romeon);
            result = echoed.useStateFromStoresObject;
            romeon = _closure1_slot5;
            output = new Array(1);
            output[0] = romeon;
            romeon = function() {
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.useReducedMotion;
                entity['useReducedMotion'] = zuuluu;
                michal = michal.roleStyle;
                entity['roleStyle'] = michal;
                return entity;
            };
            romeon = result.bind(echoed)(output, romeon);
            limora = romeon.useReducedMotion;
            _closure2_slot20 = limora;
            romeon = romeon.roleStyle;
            _closure2_slot21 = romeon;
            output = variable41[kiloes];
            vacuum = ctrled.bind(report)(output);
            echoed = vacuum.useStateFromStoresObject;
            output = _closure1_slot9;
            result = new Array(1);
            result[0] = output;
            output = function() {
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
            output = echoed.bind(vacuum)(result, output);
            variable43 = output.isMobileOnline;
            _closure2_slot22 = variable43;
            variable44 = output.status;
            _closure2_slot23 = variable44;
            output = variable41[kiloes];
            vacuum = ctrled.bind(report)(output);
            echoed = vacuum.useStateFromStores;
            output = _closure1_slot10;
            result = new Array(1);
            result[0] = output;
            output = function() {
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
            variable38 = echoed.bind(vacuum)(result, output);
            _closure2_slot8 = variable38;
            kiloes = variable41[kiloes];
            echoed = ctrled.bind(report)(kiloes);
            result = echoed.useStateFromStores;
            kiloes = _closure1_slot7;
            output = new Array(1);
            output[0] = kiloes;
            kiloes = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getSuggestion;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            variable40 = result.bind(echoed)(output, kiloes);
            _closure2_slot24 = variable40;
            kiloes = 27;
            kiloes = variable41[kiloes];
            output = ctrled.bind(report)(kiloes);
            kiloes = output.useAvatarDecoration;
            echoed = kiloes.bind(output)(status, record);
            _closure2_slot25 = echoed;
            sequen = _closure1_slot3;
            output = sequen.useCallback;
            kiloes = new Array(2);
            kiloes[0] = status;
            kiloes[1] = foxtra;
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
            result = output.bind(sequen)(foxtra, kiloes);
            foxtra = sequen.useRef;
            foxtra = foxtra.bind(sequen)(status);
            _closure2_slot26 = foxtra;
            output = sequen.useEffect;
            kiloes = new Array(1);
            kiloes[0] = status;
            foxtra = function() {
                michal = _closure2_slot26;
                entity = _closure2_slot1;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            foxtra = output.bind(sequen)(foxtra, kiloes);
            output = sequen.useMemo;
            kiloes = new Array(6);
            kiloes[0] = option;
            kiloes[1] = whisks;
            kiloes[2] = status;
            kiloes[3] = yankee;
            kiloes[4] = verify;
            kiloes[5] = cntext;
            foxtra = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = new Array(0);
                    zuuluu = _closure2_slot2;
                    entity = _closure1_slot11;
                    entity = entity.ACTIONS;
                    if(!(zuuluu === entity)) { _fun00016_ip = 1607; continue _fun00015 }
 33:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot12;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 1143; continue _fun00015 }
 54:
                    entity = _closure1_slot12;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 902; continue _fun00015 }
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
                    oscard = _closure2_slot18;
                    oscard = oscard.actions;
                    entity['style'] = oscard;
                    offset = _closure1_slot14;
                    golfie = 29;
                    oscard = sizing[golfie];
                    option = output.bind(report)(oscard);
                    oscard = {};
                    foxtra = _closure2_slot18;
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
                        entity = _closure2_slot26;
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
                    backup = _closure2_slot18;
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
                            michal = _closure2_slot26;
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
                    _fun00016_ip = 1593; continue _fun00015;
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
                    golfie = _closure2_slot18;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    offset = _closure1_slot14;
                    option = _closure1_slot4;
                    golfie = {};
                    foxtra = _closure2_slot18;
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
                        entity = _closure2_slot26;
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
                    _fun00016_ip = 1593; continue _fun00015;
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
                    golfie = _closure2_slot18;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    offset = _closure1_slot14;
                    golfie = 29;
                    golfie = kiloes[golfie];
                    option = backup.bind(oscard)(golfie);
                    golfie = {};
                    foxtra = _closure2_slot18;
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
                        michal = _closure2_slot26;
                        zuuluu = michal.current;
                        michal = _closure2_slot16;
                        entity = undefined;
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    golfie['onPress'] = foxtra;
                    golfie = offset.bind(oscard)(option, golfie);
                    entity['children'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, entity);
                    _fun00016_ip = 1593; continue _fun00015;
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
                    golfie = _closure2_slot18;
                    golfie = golfie.actions;
                    entity['style'] = golfie;
                    sizing = _closure1_slot14;
                    option = 29;
                    golfie = backup[option];
                    offset = kiloes.bind(oscard)(golfie);
                    golfie = {};
                    output = _closure2_slot18;
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
                        michal = _closure2_slot26;
                        zuuluu = michal.current;
                        michal = _closure2_slot16;
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
                    romeon = _closure2_slot18;
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
                        michal = _closure2_slot26;
                        zuuluu = michal.current;
                        michal = _closure2_slot16;
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
            foxtra = output.bind(sequen)(foxtra, kiloes);
            kiloes = foxtra.accessibilityActions;
            vacuum = foxtra.actions;
            _closure2_slot27 = vacuum;
            output = sequen.useCallback;
            foxtra = new Array(3);
            foxtra[0] = status;
            foxtra[1] = yankee;
            foxtra[2] = verify;
            yankee = function(argFoo) {
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
                    zuuluu = _closure2_slot16;
                    michal = undefined;
                    zuuluu = report.bind(michal)(tangon, zuuluu);
                    return michal;
 220:
                    report = _closure1_slot22;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot16;
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
            foxtra = output.bind(sequen)(yankee, foxtra);
            output = sequen.useCallback;
            yankee = new Array(3);
            yankee[0] = source;
            yankee[1] = status;
            yankee[2] = offset;
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
                        entity = _closure2_slot19;
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
            output = output.bind(sequen)(offset, yankee);
            offset = 42;
            offset = variable41[offset];
            source = ctrled.bind(report)(offset);
            yankee = source.useNameplate;
            offset = {};
            quebec = 'UserRow';
            offset['location'] = quebec;
            offset['user'] = status;
            offset = yankee.bind(source)(offset);
            variable42 = sequen.useMemo;
            source = new Array(2);
            source[0] = target;
            source[1] = romeon;
            yankee = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot9;
                    entity = null;
                    michal = entity != michal;
                    entity = undefined;
                    if(!michal) { _fun00024_ip = 45; continue _fun00023 }
 18:
                    tangon = _closure2_slot21;
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
            yankee = variable42.bind(sequen)(yankee, source);
            _closure2_slot28 = yankee;
            variable42 = sequen.useMemo;
            variable45 = cntext.avatar;
            source = new Array(6);
            source[0] = variable45;
            source[1] = status;
            source[2] = record;
            source[3] = variable44;
            source[4] = variable43;
            source[5] = echoed;
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
                    golfie = _closure2_slot18;
                    golfie = golfie.avatar;
                    entity['style'] = golfie;
                    golfie = _closure2_slot1;
                    entity['user'] = golfie;
                    golfie = _closure2_slot12;
                    entity['guildId'] = golfie;
                    golfie = _closure1_slot13;
                    offset = golfie.OFFLINE;
                    verify = _closure2_slot23;
                    golfie = null;
                    if(!(offset !== verify)) { _fun00026_ip = 88; continue _fun00025 }
 84:
                    golfie = _closure2_slot23;
 88:
                    entity['status'] = golfie;
                    golfie = _closure2_slot22;
                    entity['isMobileOnline'] = golfie;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    oscard = golfie.bind(zuuluu)(oscard);
                    oscard = oscard.AvatarSizes;
                    oscard = oscard.REFRESH_MEDIUM_32;
                    entity['size'] = oscard;
                    report = _closure2_slot25;
                    entity['avatarDecoration'] = report;
                    report = true;
                    entity['autoStatusCutout'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            echoed = variable42.bind(sequen)(echoed, source);
            source = 44;
            source = variable41[source];
            ctrled = ctrled.bind(report)(source);
            source = ctrled.canUseEnhancedRoleColors;
            quebec = source.bind(ctrled)(record, quebec);
            _closure2_slot29 = quebec;
            ctrled = sequen.useMemo;
            source = new Array(11);
            source[0] = variable39;
            source[1] = whisks;
            variable41 = zuuluu == variable40;
            variable39 = undefined;
            if(variable41) { _fun00010_ip = 1012; continue _fun00009 }
 1007:
            variable39 = variable40.name;
 1012:
            source[2] = variable39;
            source[3] = variable38;
            source[4] = status;
            source[5] = variable37;
            source[6] = variable36;
            source[7] = quebec;
            source[8] = papara;
            source[9] = romeon;
            source[10] = yankee;
            yankee = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot15;
                    tangon = undefined;
                    if(!(tangon === entity)) { _fun00028_ip = 881; continue _fun00027 }
 16:
                    entity = _closure2_slot29;
                    if(!entity) { _fun00028_ip = 35; continue _fun00027 }
 23:
                    zuuluu = _closure2_slot21;
                    michal = 'username';
                    entity = michal === zuuluu;
 35:
                    if(!entity) { _fun00028_ip = 48; continue _fun00027 }
 38:
                    zuuluu = _closure2_slot10;
                    michal = null;
                    entity = michal != zuuluu;
 48:
                    if(!entity) { _fun00028_ip = 67; continue _fun00027 }
 51:
                    michal = _closure2_slot10;
                    zuuluu = michal.primaryColor;
                    michal = null;
                    entity = michal != zuuluu;
 67:
                    if(!entity) { _fun00028_ip = 86; continue _fun00027 }
 70:
                    michal = _closure2_slot10;
                    zuuluu = michal.secondaryColor;
                    michal = null;
                    entity = michal != zuuluu;
 86:
                    zuuluu = _closure2_slot0;
                    michal = _closure1_slot12;
                    michal = michal.SUGGESTION;
                    if(!(zuuluu === michal)) { _fun00028_ip = 135; continue _fun00027 }
 107:
                    michal = _closure2_slot24;
                    zuuluu = null;
                    oscard = zuuluu == michal;
                    michal = undefined;
                    if(oscard) { _fun00028_ip = 131; continue _fun00027 }
 122:
                    oscard = _closure2_slot24;
                    michal = oscard.name;
 131:
                    if(!(zuuluu == michal)) { _fun00028_ip = 188; continue _fun00027 }
 135:
                    zuuluu = _closure2_slot8;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00028_ip = 182; continue _fun00027 }
 145:
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 24;
                    michal = oscard[michal];
                    oscard = zuuluu.bind(tangon)(michal);
                    zuuluu = oscard.getName;
                    michal = _closure2_slot1;
                    foxtra = zuuluu.bind(oscard)(michal);
                    _fun00028_ip = 186; continue _fun00027;
 182:
                    foxtra = _closure2_slot8;
 186:
                    _fun00028_ip = 197; continue _fun00027;
 188:
                    michal = _closure2_slot24;
                    foxtra = michal.name;
 197:
                    oscard = _closure1_slot15;
                    zuuluu = _closure1_slot16;
                    michal = {};
                    golfie = _closure2_slot1;
                    golfie = golfie.bot;
                    verify = null;
                    offset = null;
                    if(!golfie) { _fun00028_ip = 340; continue _fun00027 }
 224:
                    romeon = _closure1_slot15;
                    yankee = _closure1_slot16;
                    golfie = {};
                    sizing = _closure1_slot14;
                    kiloes = _closure1_slot1;
                    update = _closure1_slot2;
                    backup = 45;
                    backup = update[backup];
                    kiloes = kiloes.bind(tangon)(backup);
                    backup = {};
                    echoed = _closure2_slot1;
                    output = echoed.isVerifiedBot;
                    output = output.bind(echoed)();
                    backup['verified'] = output;
                    result = _closure1_slot0;
                    output = 46;
                    output = update[output];
                    result = result.bind(tangon)(output);
                    output = result.getBotTagTypeFromUser;
                    output = output.bind(result)(echoed);
                    backup['type'] = output;
                    kiloes = sizing.bind(tangon)(kiloes, backup);
                    backup = [' '];
                    backup[1] = kiloes;
                    golfie['children'] = backup;
                    offset = romeon.bind(tangon)(yankee, golfie);
 340:
                    golfie = new Array(3);
                    golfie[0] = offset;
                    yankee = _closure2_slot4;
                    offset = null;
                    if(!yankee) { _fun00028_ip = 471; continue _fun00027 }
 357:
                    backup = _closure1_slot15;
                    romeon = _closure1_slot16;
                    yankee = {};
                    output = _closure1_slot14;
                    echoed = _closure1_slot1;
                    update = _closure1_slot2;
                    result = 22;
                    kiloes = update[result];
                    sizing = echoed.bind(tangon)(kiloes);
                    kiloes = {};
                    result = update[result];
                    result = echoed.bind(tangon)(result);
                    result = result.Sizes;
                    result = result.REFRESH_SMALL_16;
                    kiloes['size'] = result;
                    result = 47;
                    result = update[result];
                    result = echoed.bind(tangon)(result);
                    kiloes['source'] = result;
                    result = true;
                    kiloes['disableColor'] = result;
                    sizing = output.bind(tangon)(sizing, kiloes);
                    kiloes = [' '];
                    kiloes[1] = sizing;
                    yankee['children'] = kiloes;
                    offset = backup.bind(tangon)(romeon, yankee);
 471:
                    golfie[1] = offset;
                    offset = _closure2_slot11;
                    offset = verify != offset;
                    verify = null;
                    if(!offset) { _fun00028_ip = 602; continue _fun00027 }
 488:
                    romeon = _closure1_slot15;
                    yankee = _closure1_slot16;
                    offset = {};
                    sizing = _closure1_slot14;
                    result = _closure1_slot1;
                    echoed = _closure1_slot2;
                    output = 22;
                    backup = echoed[output];
                    kiloes = result.bind(tangon)(backup);
                    backup = {};
                    output = echoed[output];
                    output = result.bind(tangon)(output);
                    output = output.Sizes;
                    output = output.REFRESH_SMALL_16;
                    backup['size'] = output;
                    output = 48;
                    output = echoed[output];
                    output = result.bind(tangon)(output);
                    backup['source'] = output;
                    output = true;
                    backup['disableColor'] = output;
                    kiloes = sizing.bind(tangon)(kiloes, backup);
                    backup = [' '];
                    backup[1] = kiloes;
                    offset['children'] = backup;
                    verify = romeon.bind(tangon)(yankee, offset);
 602:
                    golfie[2] = verify;
                    michal['children'] = golfie;
                    yankee = oscard.bind(tangon)(zuuluu, michal);
                    oscard = _closure1_slot15;
                    if(entity) { _fun00028_ip = 697; continue _fun00027 }
 623:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 23;
                    entity = zuuluu[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.Text;
                    entity = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    zuuluu = _closure2_slot28;
                    entity['style'] = zuuluu;
                    zuuluu = new Array(2);
                    zuuluu[0] = foxtra;
                    zuuluu[1] = yankee;
                    entity['children'] = zuuluu;
                    entity = oscard.bind(tangon)(michal, entity);
                    _fun00028_ip = 879; continue _fun00027;
 697:
                    zuuluu = _closure1_slot16;
                    michal = {};
                    offset = _closure1_slot14;
                    verify = _closure1_slot1;
                    romeon = _closure1_slot2;
                    golfie = 49;
                    golfie = romeon[golfie];
                    verify = verify.bind(tangon)(golfie);
                    golfie = {};
                    backup = _closure2_slot10;
                    kiloes = backup.primaryColor;
                    sizing = new Array(3);
                    sizing[0] = kiloes;
                    kiloes = backup.secondaryColor;
                    sizing[1] = kiloes;
                    backup = backup.tertiaryColor;
                    sizing[2] = backup;
                    kiloes = sizing.filter;
                    backup = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    backup = kiloes.bind(sizing)(backup);
                    golfie['colors'] = backup;
                    backup = 'text-md/semibold';
                    golfie['variant'] = backup;
                    golfie['children'] = foxtra;
                    verify = offset.bind(tangon)(verify, golfie);
                    golfie = new Array(2);
                    golfie[0] = verify;
                    offset = _closure1_slot14;
                    verify = _closure1_slot0;
                    option = 23;
                    option = romeon[option];
                    option = verify.bind(tangon)(option);
                    verify = option.Text;
                    option = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    option['children'] = yankee;
                    option = offset.bind(tangon)(verify, option);
                    golfie[1] = option;
                    michal['children'] = golfie;
                    entity = oscard.bind(tangon)(zuuluu, michal);
 879:
                    return entity;
 881:
                    zuuluu = _closure1_slot14;
                    michal = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 23;
                    entity = oscard[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.Text;
                    entity = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    oscard = _closure2_slot28;
                    entity['style'] = oscard;
                    report = _closure2_slot15;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            sequen = ctrled.bind(sequen)(yankee, source);
            ctrled = _closure1_slot3;
            source = ctrled.useMemo;
            yankee = new Array(7);
            yankee[0] = equals;
            yankee[1] = status;
            yankee[2] = whisks;
            yankee[3] = limora;
            yankee[4] = sierra;
            yankee[5] = record;
            yankee[6] = verify;
            verify = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot14;
                    report = undefined;
                    if(!(report === entity)) { _fun00030_ip = 87; continue _fun00029 }
 13:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot25;
                    entity = {};
                    oscard = _closure2_slot1;
                    entity['user'] = oscard;
                    oscard = _closure2_slot0;
                    entity['type'] = oscard;
                    oscard = _closure2_slot20;
                    oscard = !oscard;
                    entity['animate'] = oscard;
                    oscard = _closure2_slot17;
                    entity['isGameRelationship'] = oscard;
                    oscard = _closure2_slot12;
                    entity['guildId'] = oscard;
                    oscard = _closure2_slot16;
                    entity['applicationId'] = oscard;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00030_ip = 91; continue _fun00029;
 87:
                    entity = _closure2_slot14;
 91:
                    return entity;
                }
            };
            verify = source.bind(ctrled)(verify, yankee);
            source = ctrled.useMemo;
            yankee = new Array(4);
            yankee[0] = config;
            yankee[1] = update;
            yankee[2] = option;
            yankee[3] = vacuum;
            oscard = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure2_slot13;
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
                    zuuluu = _closure2_slot27;
 49:
                    entity = zuuluu;
 52:
                    _fun00032_ip = 58; continue _fun00031;
 54:
                    entity = _closure2_slot13;
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
            vacuum = new Array(2);
            vacuum[0] = sequen;
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
            vacuum[1] = sequen;
            oscard['children'] = vacuum;
            sequen = ctrled.bind(report)(source, oscard);
            oscard = 'dot';
            oscard = oscard !== romeon;
            if(oscard) { _fun00010_ip = 1261; continue _fun00009 }
 1247:
            romeon = zuuluu == target;
            if(!romeon) { _fun00010_ip = 1258; continue _fun00009 }
 1254:
            romeon = zuuluu == papara;
 1258:
            oscard = romeon;
 1261:
            romeon = sequen;
            if(oscard) { _fun00010_ip = 1366; continue _fun00009 }
 1267:
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
 1366:
            oscard = {};
            variable48 = oscard;
            variable47 = sizing;
            sizing = copyDataProperties(variable48, variable47);
            sizing = 'disabled';
            oscard[sizing] = update;
            sizing = 'icon';
            oscard[sizing] = echoed;
            sizing = 'onPress';
            oscard[sizing] = result;
            sizing = 'onLongPress';
            oscard[sizing] = output;
            if(!(zuuluu != backup)) { _fun00010_ip = 1421; continue _fun00009 }
 1418:
            kiloes = backup;
 1421:
            backup = 'accessibilityActions';
            oscard[backup] = kiloes;
            if(!(zuuluu != tangon)) { _fun00010_ip = 1437; continue _fun00009 }
 1434:
            foxtra = tangon;
 1437:
            tangon = 'onAccessibilityAction';
            oscard[tangon] = foxtra;
            tangon = 'label';
            oscard[tangon] = romeon;
            tangon = 'subLabel';
            oscard[tangon] = verify;
            tangon = _closure1_slot11;
            tangon = tangon.TOGGLE;
            if(!(option !== tangon)) { _fun00010_ip = 1615; continue _fun00009 }
 1481:
            if(!(zuuluu != offset)) { _fun00010_ip = 1488; continue _fun00009 }
 1485:
            if(entity) { _fun00010_ip = 1547; continue _fun00009 }
 1488:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            entity = 54;
            entity = option[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.TableRow;
            entity = {};
            variable48 = entity;
            variable47 = oscard;
            option = copyDataProperties(variable48, variable47);
            option = 'trailing';
            entity[option] = yankee;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 1613; continue _fun00009;
 1547:
            option = _closure1_slot14;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 53;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.UserNameplateRow;
            zuuluu = {};
            variable48 = zuuluu;
            variable47 = oscard;
            verify = copyDataProperties(variable48, variable47);
            verify = 'trailing';
            zuuluu[verify] = yankee;
            verify = 'nameplate';
            zuuluu[verify] = offset;
            entity = option.bind(report)(tangon, zuuluu);
 1613:
            _fun00010_ip = 1672; continue _fun00009;
 1615:
            tangon = _closure1_slot14;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 52;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.TableCheckboxRow;
            michal = {};
            variable48 = michal;
            variable47 = oscard;
            oscard = copyDataProperties(variable48, variable47);
            oscard = 'checked';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 1672:
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