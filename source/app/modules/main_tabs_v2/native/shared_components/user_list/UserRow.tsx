// app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: handleCall
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 13;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.ensurePrivateChannel;
        mike = argFoo;
        mike = mike.id;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot8;
                zulu = tango.getChannel;
                mike = argFoo;
                tango = zulu.bind(tango)(mike);
                mike = null;
                if(!(mike != tango)) { _fun00002_ip = 99; continue _fun00001 }
 26:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                entity = 14;
                entity = report[entity];
                mike = undefined;
                golf = zulu.bind(mike)(entity);
                entity = tango.isPrivate;
                oscar = entity.bind(tango)();
                entity = 'must be a DM';
                entity = golf.bind(mike)(oscar, entity);
                entity = 15;
                entity = report[entity];
                zulu = zulu.bind(mike)(entity);
                entity = false;
                entity = zulu.bind(mike)(tango, entity);
                entity = entity.onPress;
                entity = entity.bind(mike)();
 99:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: handleAccept
        golf = argBar;
        var _closure2_slot0 = golf;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 16;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.maybeConfirmFriendRequestAccept;
        mike = {};
        options = argFoo;
        options = options.id;
        mike['userId'] = options;
        mike['applicationId'] = golf;
        oscar = _closure1_slot19;
        mike['location'] = oscar;
        report = function() { // Original name: onConfirm
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity == mike)) { _fun00004_ip = 50; continue _fun00003 }
 13:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.presentFriendRequestAcceptedToast;
                entity = entity.bind(mike)();
                _fun00004_ip = 85; continue _fun00003;
 50:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.presentGameFriendRequestAcceptedToast;
                entity = entity.bind(mike)();
 85:
                entity = undefined;
                return entity;
            }
        };
        mike['onConfirm'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: handleCancel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            options = argFoo;
            golf = argBar;
            entity = null;
            if(!(entity == golf)) { _fun00006_ip = 92; continue _fun00005 }
 12:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 19;
            mike = tango[mike];
            zulu = undefined;
            verify = report.bind(zulu)(mike);
            oscar = verify.cancelFriendRequest;
            report = options.id;
            mike = {};
            offset = _closure1_slot19;
            mike['location'] = offset;
            mike = oscar.bind(verify)(report, mike);
            mike = _closure1_slot0;
            entity = 17;
            entity = tango[entity];
            mike = mike.bind(zulu)(entity);
            entity = mike.presentFriendRequestIgnoredToast;
            entity = entity.bind(mike)();
            _fun00006_ip = 169; continue _fun00005;
 92:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 18;
            mike = tango[mike];
            zulu = undefined;
            oscar = report.bind(zulu)(mike);
            report = oscar.cancelGameFriendRequest;
            mike = {};
            options = options.id;
            mike['userId'] = options;
            mike['applicationId'] = golf;
            mike = report.bind(oscar)(mike);
            mike = _closure1_slot0;
            entity = 17;
            entity = tango[entity];
            mike = mike.bind(zulu)(entity);
            entity = mike.presentGameFriendRequestIgnoredToast;
            entity = entity.bind(mike)();
 169:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: handleAcceptSuggestion
        report = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 19;
        zulu = tango[entity];
        entity = undefined;
        oscar = report.bind(entity)(zulu);
        report = oscar.addRelationship;
        zulu = {};
        golf = argFoo;
        golf = golf.id;
        zulu['userId'] = golf;
        golf = {};
        options = _closure1_slot19;
        golf['location'] = options;
        zulu['context'] = golf;
        zulu['type'] = entity;
        zulu['friendToken'] = entity;
        golf = true;
        zulu['fromFriendSuggestion'] = golf;
        zulu = report.bind(oscar)(zulu);
        zulu = _closure1_slot0;
        mike = 17;
        mike = tango[mike];
        zulu = zulu.bind(entity)(mike);
        mike = zulu.presentAddedFriendToast;
        mike = mike.bind(zulu)();
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: UserRowSubLabel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            offset = tango.user;
            zulu = tango.type;
            oscar = tango.animate;
            mike = tango.isGameRelationship;
            verify = tango.guildId;
            tango = tango.applicationId;
            var _closure2_slot0 = tango;
            report = _closure1_slot18;
            golf = undefined;
            options = report.bind(golf)();
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 21;
            report = romeo[report];
            romeo = yankee.bind(golf)(report);
            yankee = romeo.useStateFromStores;
            foxtrot = _closure1_slot6;
            report = new Array(1);
            report[0] = foxtrot;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.getApplication;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = yankee.bind(romeo)(report, entity);
            entity = _closure1_slot12;
            entity = entity.PENDING_INCOMING;
            if(!(zulu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 118:
            entity = _closure1_slot12;
            entity = entity.SUGGESTION;
            if(!(zulu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 132:
            entity = _closure1_slot12;
            entity = entity.PENDING_OUTGOING;
            if(!(zulu !== entity)) { _fun00008_ip = 222; continue _fun00007 }
 146:
            report = _closure1_slot14;
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 25;
            entity = yankee[entity];
            zulu = zulu.bind(golf)(entity);
            entity = {};
            yankee = 'UserRow';
            entity['location'] = yankee;
            yankee = offset.id;
            entity['userId'] = yankee;
            entity['guildId'] = verify;
            verify = options.activityText;
            entity['textStyle'] = verify;
            entity['animate'] = oscar;
            entity = report.bind(golf)(zulu, entity);
            _fun00008_ip = 552; continue _fun00007;
 222:
            if(mike) { _fun00008_ip = 306; continue _fun00007 }
 225:
            report = _closure1_slot14;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 23;
            mike = yankee[mike];
            mike = verify.bind(golf)(mike);
            zulu = mike.Text;
            mike = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            oscar = 24;
            oscar = yankee[oscar];
            verify = verify.bind(golf)(oscar);
            oscar = verify.getUserTag;
            oscar = oscar.bind(verify)(offset);
            mike['children'] = oscar;
            mike = report.bind(golf)(zulu, mike);
            _fun00008_ip = 549; continue _fun00007;
 306:
            backup = null;
            if(!(backup != foxtrot)) { _fun00008_ip = 520; continue _fun00007 }
 315:
            oscar = _closure1_slot15;
            report = _closure1_slot4;
            zulu = {};
            verify = options.gameContainer;
            zulu['style'] = verify;
            romeo = _closure1_slot14;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 22;
            verify = yankee[verify];
            yankee = offset.bind(golf)(verify);
            offset = {};
            verify = options.gameIcon;
            offset['style'] = verify;
            verify = 'contain';
            offset['resizeMode'] = verify;
            verify = {};
            sizing = foxtrot.getIconURL;
            kilo = 16;
            kilo = sizing.bind(foxtrot)(kilo);
            sizing = backup != kilo;
            backup = '';
            if(!sizing) { _fun00008_ip = 410; continue _fun00007 }
 407:
            backup = kilo;
 410:
            verify['uri'] = backup;
            offset['source'] = verify;
            verify = true;
            offset['disableColor'] = verify;
            verify = foxtrot.id;
            offset = romeo.bind(golf)(yankee, offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            romeo = _closure1_slot14;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 23;
            offset = backup[offset];
            offset = yankee.bind(golf)(offset);
            yankee = offset.Text;
            offset = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-secondary'};
            foxtrot = foxtrot.name;
            offset['children'] = foxtrot;
            offset = romeo.bind(golf)(yankee, offset);
            verify[1] = offset;
            zulu['children'] = verify;
            zulu = oscar.bind(golf)(report, zulu);
            _fun00008_ip = 546; continue _fun00007;
 520:
            oscar = _closure1_slot14;
            report = _closure1_slot4;
            tango = {};
            options = options.gameIcon;
            tango['style'] = options;
            zulu = oscar.bind(golf)(report, tango);
 546:
            mike = zulu;
 549:
            entity = mike;
 552:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot10 = tango;
    foxtrot = 8;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    tango = tango.UserRowModes;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.RelationshipTypes;
    var _closure1_slot12 = options;
    tango = tango.StatusTypes;
    var _closure1_slot13 = tango;
    tango = 10;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot14 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot15 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot16 = tango;
    tango = {};
    options = 'call';
    tango['CALL'] = options;
    options = 'message';
    tango['MESSAGE'] = options;
    options = 'accept';
    tango['ACCEPT'] = options;
    options = 'decline';
    tango['DECLINE'] = options;
    options = 'cancel';
    tango['CANCEL'] = options;
    options = 'accept-suggestion';
    tango['ACCEPT_SUGGESTION'] = options;
    options = 'ignore-suggestion';
    tango['IGNORE_SUGGESTION'] = options;
    options = 'toggle';
    tango['TOGGLE'] = options;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flexShrink': 0, 'flexGrow': 0};
    tango['avatar'] = offset;
    offset = {};
    yankee = 12;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.TEXT_LINK;
    offset['tintColor'] = backup;
    tango['iconColor'] = offset;
    offset = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0};
    tango['content'] = offset;
    offset = {'marginLeft': 12, 'flexGrow': 1, 'flexShrink': 0, 'height': '100%', 'justifyContent': 'center'};
    tango['itemContent'] = offset;
    backup = 'row';
    offset = {'flexGrow': 1, 'flexShrink': 0, 'flexDirection': 'row', 'alignContent': 'center', 'alignItems': 'center'};
    tango['contentInner'] = offset;
    offset = {'flex': 1, 'marginRight': 12};
    tango['contentText'] = offset;
    offset = {};
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_MUTED;
    offset['color'] = kilo;
    tango['activityText'] = offset;
    offset = {};
    offset['flexDirection'] = backup;
    tango['actions'] = offset;
    offset = {'marginLeft': 12, 'alignSelf': 'center'};
    tango['action'] = offset;
    offset = {};
    offset['marginLeft'] = foxtrot;
    tango['buttonWrapper'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['labelContainer'] = offset;
    offset = {'marginRight': 4, 'paddingTop': 0};
    tango['roleDot'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tango['usernameLabelContainer'] = offset;
    offset = {'flexDirection': 'row', 'gap': 4};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.xs;
    offset['cornerRadius'] = yankee;
    tango['gameContainer'] = offset;
    offset = {'width': 14, 'height': 14};
    tango['gameIcon'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot18 = tango;
    tango = 'Friends_v2';
    var _closure1_slot19 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: UserRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            backup = argFoo;
            sierra = backup.type;
            var _closure2_slot0 = sierra;
            context = backup.user;
            var _closure2_slot1 = context;
            zulu = backup.mode;
            report = undefined;
            if(!(zulu === report)) { _fun00010_ip = 47; continue _fun00009 }
 34:
            entity = _closure1_slot11;
            zulu = entity.NONE;
 47:
            var _closure2_slot2 = zulu;
            golf = backup.selected;
            if(!(golf === report)) { _fun00010_ip = 63; continue _fun00009 }
 61:
            golf = false;
 63:
            result = backup.disabled;
            if(!(result === report)) { _fun00010_ip = 74; continue _fun00009 }
 72:
            result = false;
 74:
            var _closure2_slot3 = result;
            whiskey = backup.isOwner;
            if(!(whiskey === report)) { _fun00010_ip = 90; continue _fun00009 }
 88:
            whiskey = false;
 90:
            var _closure2_slot4 = whiskey;
            foxtrot = backup.onPress;
            var _closure2_slot5 = foxtrot;
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
            control = backup.trailing;
            var _closure2_slot12 = control;
            lima = backup.subLabel;
            var _closure2_slot13 = lima;
            quebec = backup.label;
            var _closure2_slot14 = quebec;
            romeo = backup.accessibilityActions;
            entity = backup.onAccessibilityAction;
            tango = backup.applicationId;
            var _closure2_slot15 = tango;
            papa = backup.isGameRelationship;
            if(!(papa === report)) { _fun00010_ip = 224; continue _fun00009 }
 222:
            papa = false;
 224:
            var _closure2_slot16 = papa;
            options = {'type': 0, 'user': 0, 'mode': 0, 'selected': 0, 'disabled': 0, 'isOwner': 0, 'onPress': 0, 'onLongPress': 0, 'handleMessage': 0, 'nickname': 0, 'usernameColor': 0, 'premiumSince': 0, 'guildId': 0, 'trailing': 0, 'subLabel': 0, 'label': 0, 'accessibilityActions': 0, 'onAccessibilityAction': 0, 'applicationId': 0, 'isGameRelationship': 0};
            yankee = null;
            variable42 = options;
            variable41 = null;
            mike = silentSetPrototypeOf(variable42, variable41);
            variable42 = {};
            variable41 = backup;
            variable40 = options;
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
            options = _closure1_slot18;
            config = options.bind(report)();
            _closure2_slot17 = config;
            kilo = _closure1_slot1;
            echo = _closure1_slot2;
            options = 26;
            options = echo[options];
            options = kilo.bind(report)(options);
            options = options.bind(report)();
            kilo = options.analyticsLocations;
            _closure2_slot18 = kilo;
            output = _closure1_slot0;
            sizing = 21;
            options = echo[sizing];
            sequence = output.bind(report)(options);
            source = sequence.useStateFromStoresObject;
            options = _closure1_slot5;
            update = new Array(1);
            update[0] = options;
            options = function() {
                entity = {};
                mike = _closure1_slot5;
                zulu = mike.useReducedMotion;
                entity['useReducedMotion'] = zulu;
                mike = mike.roleStyle;
                entity['roleStyle'] = mike;
                return entity;
            };
            options = source.bind(sequence)(update, options);
            status = options.useReducedMotion;
            _closure2_slot19 = status;
            options = options.roleStyle;
            _closure2_slot20 = options;
            update = echo[sizing];
            equality = output.bind(report)(update);
            sequence = equality.useStateFromStoresObject;
            update = _closure1_slot9;
            source = new Array(1);
            source[0] = update;
            update = function() {
                entity = {};
                tango = _closure1_slot9;
                report = tango.isMobileOnline;
                mike = _closure2_slot1;
                zulu = mike.id;
                zulu = report.bind(tango)(zulu);
                entity['isMobileOnline'] = zulu;
                zulu = tango.getStatus;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['status'] = mike;
                return entity;
            };
            update = sequence.bind(equality)(source, update);
            variable37 = update.isMobileOnline;
            _closure2_slot21 = variable37;
            variable38 = update.status;
            _closure2_slot22 = variable38;
            update = echo[sizing];
            equality = output.bind(report)(update);
            sequence = equality.useStateFromStores;
            update = _closure1_slot10;
            source = new Array(1);
            source[0] = update;
            update = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot8;
                    zulu = null;
                    if(!(zulu == entity)) { _fun00012_ip = 40; continue _fun00011 }
 13:
                    tango = _closure1_slot10;
                    zulu = tango.getNickname;
                    mike = _closure2_slot1;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 40:
                    return entity;
                }
            };
            equality = sequence.bind(equality)(source, update);
            _closure2_slot8 = equality;
            sizing = echo[sizing];
            sequence = output.bind(report)(sizing);
            source = sequence.useStateFromStores;
            sizing = _closure1_slot7;
            update = new Array(1);
            update[0] = sizing;
            sizing = function() {
                zulu = _closure1_slot7;
                mike = zulu.getSuggestion;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable36 = source.bind(sequence)(update, sizing);
            _closure2_slot23 = variable36;
            sizing = 27;
            sizing = echo[sizing];
            output = output.bind(report)(sizing);
            sizing = output.useAvatarDecoration;
            output = sizing.bind(output)(context, vacuum);
            _closure2_slot24 = output;
            sequence = _closure1_slot3;
            echo = sequence.useCallback;
            sizing = new Array(2);
            sizing[0] = context;
            sizing[1] = foxtrot;
            foxtrot = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot5;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 28; continue _fun00013 }
 13:
                    zulu = _closure2_slot5;
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = echo.bind(sequence)(foxtrot, sizing);
            foxtrot = sequence.useRef;
            foxtrot = foxtrot.bind(sequence)(context);
            _closure2_slot25 = foxtrot;
            update = sequence.useEffect;
            echo = new Array(1);
            echo[0] = context;
            foxtrot = function() {
                mike = _closure2_slot25;
                entity = _closure2_slot1;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            foxtrot = update.bind(sequence)(foxtrot, echo);
            update = sequence.useMemo;
            echo = new Array(6);
            echo[0] = zulu;
            echo[1] = sierra;
            echo[2] = context;
            echo[3] = offset;
            echo[4] = tango;
            echo[5] = config;
            foxtrot = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = new Array(0);
                    zulu = _closure2_slot2;
                    entity = _closure1_slot11;
                    entity = entity.ACTIONS;
                    if(!(zulu === entity)) { _fun00016_ip = 1601; continue _fun00015 }
 33:
                    zulu = _closure2_slot0;
                    entity = _closure1_slot12;
                    entity = entity.PENDING_INCOMING;
                    if(!(entity !== zulu)) { _fun00016_ip = 1137; continue _fun00015 }
 54:
                    entity = _closure1_slot12;
                    entity = entity.PENDING_OUTGOING;
                    if(!(entity !== zulu)) { _fun00016_ip = 898; continue _fun00015 }
 71:
                    entity = _closure1_slot12;
                    entity = entity.SUGGESTION;
                    if(!(entity !== zulu)) { _fun00016_ip = 549; continue _fun00015 }
 88:
                    entity = _closure1_slot12;
                    entity = entity.FRIEND;
                    tango = mike.push;
                    zulu = {};
                    golf = _closure1_slot17;
                    entity = golf.CALL;
                    zulu['name'] = entity;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    oscar = 28;
                    entity = sizing[oscar];
                    report = undefined;
                    entity = kilo.bind(report)(entity);
                    backup = entity.intl;
                    offset = backup.formatToPlainString;
                    entity = sizing[oscar];
                    entity = kilo.bind(report)(entity);
                    entity = entity.t;
                    options = entity.Q75ddn;
                    entity = {};
                    output = _closure1_slot1;
                    foxtrot = 24;
                    result = sizing[foxtrot];
                    update = output.bind(report)(result);
                    echo = update.getName;
                    result = _closure2_slot1;
                    echo = echo.bind(update)(result);
                    entity['name'] = echo;
                    entity = offset.bind(backup)(options, entity);
                    zulu['label'] = entity;
                    entity = {};
                    golf = golf.MESSAGE;
                    entity['name'] = golf;
                    golf = sizing[oscar];
                    golf = kilo.bind(report)(golf);
                    offset = golf.intl;
                    options = offset.formatToPlainString;
                    oscar = sizing[oscar];
                    oscar = kilo.bind(report)(oscar);
                    oscar = oscar.t;
                    golf = oscar.zFfSFR;
                    oscar = {};
                    foxtrot = sizing[foxtrot];
                    backup = output.bind(report)(foxtrot);
                    foxtrot = backup.getName;
                    foxtrot = foxtrot.bind(backup)(result);
                    oscar['name'] = foxtrot;
                    oscar = options.bind(offset)(golf, oscar);
                    entity['label'] = oscar;
                    entity = tango.bind(mike)(zulu, entity);
                    tango = _closure1_slot15;
                    zulu = _closure1_slot4;
                    entity = {};
                    oscar = _closure2_slot17;
                    oscar = oscar.actions;
                    entity['style'] = oscar;
                    offset = _closure1_slot14;
                    golf = 29;
                    oscar = sizing[golf];
                    options = output.bind(report)(oscar);
                    oscar = {};
                    foxtrot = _closure2_slot17;
                    foxtrot = foxtrot.action;
                    oscar['styles'] = foxtrot;
                    foxtrot = 36;
                    foxtrot = sizing[foxtrot];
                    foxtrot = output.bind(report)(foxtrot);
                    oscar['source'] = foxtrot;
                    foxtrot = 37;
                    foxtrot = sizing[foxtrot];
                    foxtrot = kilo.bind(report)(foxtrot);
                    foxtrot = foxtrot.PhoneCallIcon;
                    oscar['IconComponent'] = foxtrot;
                    foxtrot = 'neutral';
                    oscar['type'] = foxtrot;
                    backup = function() { // Original name: onPress
                        zulu = _closure1_slot20;
                        entity = _closure2_slot25;
                        mike = entity.current;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    oscar['onPress'] = backup;
                    options = offset.bind(report)(options, oscar);
                    oscar = new Array(2);
                    oscar[0] = options;
                    offset = _closure1_slot14;
                    golf = sizing[golf];
                    options = output.bind(report)(golf);
                    golf = {};
                    backup = _closure2_slot17;
                    backup = backup.action;
                    golf['styles'] = backup;
                    backup = 38;
                    backup = sizing[backup];
                    backup = output.bind(report)(backup);
                    golf['source'] = backup;
                    backup = 39;
                    backup = sizing[backup];
                    backup = kilo.bind(report)(backup);
                    backup = backup.ChatIcon;
                    golf['IconComponent'] = backup;
                    golf['type'] = foxtrot;
                    foxtrot = function() { // Original name: onPress
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zulu = _closure2_slot7;
                            entity = null;
                            zulu = entity == zulu;
                            tango = undefined;
                            entity = undefined;
                            if(zulu) { _fun00018_ip = 38; continue _fun00017 }
 20:
                            zulu = _closure2_slot7;
                            mike = _closure2_slot25;
                            mike = mike.current;
                            entity = zulu.bind(tango)(mike);
 38:
                            return entity;
                        }
                    };
                    golf['onPress'] = foxtrot;
                    golf = offset.bind(report)(options, golf);
                    oscar[1] = golf;
                    entity['children'] = oscar;
                    zulu = tango.bind(report)(zulu, entity);
                    _fun00016_ip = 1587; continue _fun00015;
 549:
                    report = mike.push;
                    tango = {};
                    golf = _closure1_slot17;
                    entity = golf.ACCEPT_SUGGESTION;
                    tango['name'] = entity;
                    source = _closure1_slot0;
                    control = _closure1_slot2;
                    sizing = 28;
                    entity = control[sizing];
                    oscar = undefined;
                    entity = source.bind(oscar)(entity);
                    offset = entity.intl;
                    options = offset.string;
                    entity = control[sizing];
                    entity = source.bind(oscar)(entity);
                    entity = entity.t;
                    entity = entity.ed99+v;
                    entity = options.bind(offset)(entity);
                    tango['label'] = entity;
                    entity = {};
                    golf = golf.IGNORE_SUGGESTION;
                    entity['name'] = golf;
                    golf = control[sizing];
                    golf = source.bind(oscar)(golf);
                    offset = golf.intl;
                    options = offset.string;
                    golf = control[sizing];
                    golf = source.bind(oscar)(golf);
                    golf = golf.t;
                    golf = golf.Tw3a/f;
                    golf = options.bind(offset)(golf);
                    entity['label'] = golf;
                    entity = report.bind(mike)(tango, entity);
                    report = _closure1_slot14;
                    tango = _closure1_slot4;
                    entity = {};
                    golf = _closure2_slot17;
                    golf = golf.actions;
                    entity['style'] = golf;
                    offset = _closure1_slot14;
                    options = _closure1_slot4;
                    golf = {};
                    foxtrot = _closure2_slot17;
                    foxtrot = foxtrot.buttonWrapper;
                    golf['style'] = foxtrot;
                    kilo = _closure1_slot14;
                    foxtrot = 34;
                    foxtrot = control[foxtrot];
                    foxtrot = source.bind(oscar)(foxtrot);
                    backup = foxtrot.Button;
                    foxtrot = {'variant': 'secondary', 'size': 'sm'};
                    output = 35;
                    output = control[output];
                    echo = source.bind(oscar)(output);
                    result = echo.truncateText;
                    output = control[sizing];
                    output = source.bind(oscar)(output);
                    update = output.intl;
                    output = update.string;
                    sizing = control[sizing];
                    sizing = source.bind(oscar)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.OYkgVl;
                    output = output.bind(update)(sizing);
                    sizing = 8;
                    sizing = result.bind(echo)(output, sizing);
                    foxtrot['text'] = sizing;
                    sizing = function() { // Original name: onPress
                        zulu = _closure1_slot23;
                        entity = _closure2_slot25;
                        mike = entity.current;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    foxtrot['onPress'] = sizing;
                    foxtrot = kilo.bind(oscar)(backup, foxtrot);
                    golf['children'] = foxtrot;
                    golf = offset.bind(oscar)(options, golf);
                    entity['children'] = golf;
                    zulu = report.bind(oscar)(tango, entity);
                    _fun00016_ip = 1587; continue _fun00015;
 898:
                    tango = mike.push;
                    entity = {};
                    report = _closure1_slot17;
                    report = report.CANCEL;
                    entity['name'] = report;
                    golf = _closure1_slot0;
                    kilo = _closure1_slot2;
                    report = 28;
                    options = kilo[report];
                    oscar = undefined;
                    options = golf.bind(oscar)(options);
                    offset = options.intl;
                    options = offset.formatToPlainString;
                    report = kilo[report];
                    report = golf.bind(oscar)(report);
                    report = report.t;
                    golf = report.JFJ8Cg;
                    report = {};
                    backup = _closure1_slot1;
                    foxtrot = 24;
                    foxtrot = kilo[foxtrot];
                    output = backup.bind(oscar)(foxtrot);
                    sizing = output.getName;
                    foxtrot = _closure2_slot1;
                    foxtrot = sizing.bind(output)(foxtrot);
                    report['name'] = foxtrot;
                    report = options.bind(offset)(golf, report);
                    entity['label'] = report;
                    entity = tango.bind(mike)(entity);
                    report = _closure1_slot14;
                    tango = _closure1_slot4;
                    entity = {};
                    golf = _closure2_slot17;
                    golf = golf.actions;
                    entity['style'] = golf;
                    offset = _closure1_slot14;
                    golf = 29;
                    golf = kilo[golf];
                    options = backup.bind(oscar)(golf);
                    golf = {};
                    foxtrot = _closure2_slot17;
                    foxtrot = foxtrot.action;
                    golf['styles'] = foxtrot;
                    foxtrot = 30;
                    foxtrot = kilo[foxtrot];
                    foxtrot = backup.bind(oscar)(foxtrot);
                    golf['source'] = foxtrot;
                    foxtrot = 'neutral';
                    golf['type'] = foxtrot;
                    foxtrot = function() { // Original name: onPress
                        tango = _closure1_slot22;
                        mike = _closure2_slot25;
                        zulu = mike.current;
                        mike = _closure2_slot15;
                        entity = undefined;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    golf['onPress'] = foxtrot;
                    golf = offset.bind(oscar)(options, golf);
                    entity['children'] = golf;
                    zulu = report.bind(oscar)(tango, entity);
                    _fun00016_ip = 1587; continue _fun00015;
 1137:
                    report = mike.push;
                    tango = {};
                    options = _closure1_slot17;
                    entity = options.DECLINE;
                    tango['name'] = entity;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    golf = 28;
                    entity = backup[golf];
                    oscar = undefined;
                    entity = foxtrot.bind(oscar)(entity);
                    result = entity.intl;
                    sizing = result.formatToPlainString;
                    entity = backup[golf];
                    entity = foxtrot.bind(oscar)(entity);
                    entity = entity.t;
                    offset = entity.C9Xe6+;
                    entity = {};
                    kilo = _closure1_slot1;
                    output = 24;
                    echo = backup[output];
                    source = kilo.bind(oscar)(echo);
                    update = source.getName;
                    echo = _closure2_slot1;
                    update = update.bind(source)(echo);
                    entity['name'] = update;
                    entity = sizing.bind(result)(offset, entity);
                    tango['label'] = entity;
                    entity = {};
                    options = options.ACCEPT;
                    entity['name'] = options;
                    options = backup[golf];
                    options = foxtrot.bind(oscar)(options);
                    sizing = options.intl;
                    offset = sizing.formatToPlainString;
                    golf = backup[golf];
                    golf = foxtrot.bind(oscar)(golf);
                    golf = golf.t;
                    options = golf.6p0yBg;
                    golf = {};
                    output = backup[output];
                    result = kilo.bind(oscar)(output);
                    output = result.getName;
                    output = output.bind(result)(echo);
                    golf['name'] = output;
                    golf = offset.bind(sizing)(options, golf);
                    entity['label'] = golf;
                    entity = report.bind(mike)(tango, entity);
                    report = _closure1_slot15;
                    tango = _closure1_slot4;
                    entity = {};
                    golf = _closure2_slot17;
                    golf = golf.actions;
                    entity['style'] = golf;
                    sizing = _closure1_slot14;
                    options = 29;
                    golf = backup[options];
                    offset = kilo.bind(oscar)(golf);
                    golf = {};
                    output = _closure2_slot17;
                    output = output.action;
                    golf['styles'] = output;
                    output = 30;
                    output = backup[output];
                    output = kilo.bind(oscar)(output);
                    golf['source'] = output;
                    output = 31;
                    output = backup[output];
                    output = foxtrot.bind(oscar)(output);
                    output = output.XLargeIcon;
                    golf['IconComponent'] = output;
                    output = 'neutral';
                    golf['type'] = output;
                    output = function() { // Original name: onPress
                        tango = _closure1_slot22;
                        mike = _closure2_slot25;
                        zulu = mike.current;
                        mike = _closure2_slot15;
                        entity = undefined;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    golf['onPress'] = output;
                    offset = sizing.bind(oscar)(offset, golf);
                    golf = new Array(2);
                    golf[0] = offset;
                    offset = _closure1_slot14;
                    options = backup[options];
                    verify = kilo.bind(oscar)(options);
                    options = {};
                    romeo = _closure2_slot17;
                    romeo = romeo.action;
                    options['styles'] = romeo;
                    romeo = 32;
                    romeo = backup[romeo];
                    romeo = kilo.bind(oscar)(romeo);
                    options['source'] = romeo;
                    romeo = 33;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(oscar)(romeo);
                    romeo = romeo.CheckmarkLargeIcon;
                    options['IconComponent'] = romeo;
                    romeo = 'positive';
                    options['type'] = romeo;
                    yankee = function() { // Original name: onPress
                        tango = _closure1_slot21;
                        mike = _closure2_slot25;
                        zulu = mike.current;
                        mike = _closure2_slot15;
                        entity = undefined;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    options['onPress'] = yankee;
                    options = offset.bind(oscar)(verify, options);
                    golf[1] = options;
                    entity['children'] = golf;
                    zulu = report.bind(oscar)(tango, entity);
 1587:
                    entity = {};
                    entity['accessibilityActions'] = mike;
                    entity['actions'] = zulu;
                    return entity;
 1601:
                    entity = {};
                    entity['accessibilityActions'] = mike;
                    mike = undefined;
                    entity['actions'] = mike;
                    return entity;
                }
            };
            echo = update.bind(sequence)(foxtrot, echo);
            foxtrot = echo.accessibilityActions;
            source = echo.actions;
            _closure2_slot26 = source;
            update = sequence.useCallback;
            echo = new Array(3);
            echo[0] = context;
            echo[1] = offset;
            echo[2] = tango;
            offset = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    zulu = entity.actionName;
                    mike = _closure1_slot17;
                    mike = mike.CALL;
                    if(!(mike !== zulu)) { _fun00020_ip = 280; continue _fun00019 }
 34:
                    mike = _closure1_slot17;
                    mike = mike.MESSAGE;
                    if(!(mike !== zulu)) { _fun00020_ip = 245; continue _fun00019 }
 51:
                    mike = _closure1_slot17;
                    mike = mike.ACCEPT;
                    if(!(mike !== zulu)) { _fun00020_ip = 220; continue _fun00019 }
 68:
                    mike = _closure1_slot17;
                    mike = mike.DECLINE;
                    if(!(mike !== zulu)) { _fun00020_ip = 195; continue _fun00019 }
 82:
                    mike = _closure1_slot17;
                    mike = mike.CANCEL;
                    if(!(mike !== zulu)) { _fun00020_ip = 195; continue _fun00019 }
 96:
                    mike = _closure1_slot17;
                    mike = mike.ACCEPT_SUGGESTION;
                    if(!(mike !== zulu)) { _fun00020_ip = 175; continue _fun00019 }
 110:
                    mike = _closure1_slot17;
                    mike = mike.IGNORE_SUGGESTION;
                    if(!(mike !== zulu)) { _fun00020_ip = 128; continue _fun00019 }
 124:
                    mike = undefined;
                    return mike;
 128:
                    zulu = _closure2_slot1;
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 20;
                    tango = tango[mike];
                    mike = undefined;
                    report = report.bind(mike)(tango);
                    tango = report.ignore;
                    zulu = zulu.id;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 175:
                    tango = _closure1_slot23;
                    zulu = _closure2_slot1;
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    return mike;
 195:
                    report = _closure1_slot22;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot15;
                    mike = undefined;
                    zulu = report.bind(mike)(tango, zulu);
                    return mike;
 220:
                    report = _closure1_slot21;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot15;
                    mike = undefined;
                    zulu = report.bind(mike)(tango, zulu);
                    return mike;
 245:
                    tango = _closure2_slot7;
                    mike = null;
                    tango = mike == tango;
                    report = undefined;
                    mike = undefined;
                    if(tango) { _fun00020_ip = 278; continue _fun00019 }
 265:
                    tango = _closure2_slot7;
                    zulu = _closure2_slot1;
                    mike = tango.bind(report)(zulu);
 278:
                    return mike;
 280:
                    zulu = _closure1_slot20;
                    mike = _closure2_slot1;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            offset = update.bind(sequence)(offset, echo);
            update = sequence.useCallback;
            echo = new Array(3);
            echo[0] = target;
            echo[1] = context;
            echo[2] = kilo;
            kilo = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = _closure2_slot6;
                    mike = null;
                    if(!(mike != zulu)) { _fun00022_ip = 30; continue _fun00021 }
 13:
                    zulu = _closure2_slot6;
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    _fun00022_ip = 92; continue _fun00021;
 30:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    mike = 41;
                    mike = entity[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = 40;
                    mike = entity[mike];
                    entity = entity.paths;
                    zulu = zulu.bind(tango)(mike, entity);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.default;
                        mike = {};
                        tango = _closure2_slot1;
                        report = tango.id;
                        mike['userId'] = report;
                        mike['localUser'] = tango;
                        entity = _closure2_slot18;
                        mike['sourceAnalyticsLocations'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 92:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = update.bind(sequence)(kilo, echo);
            target = sequence.useMemo;
            update = new Array(2);
            update[0] = record;
            update[1] = options;
            echo = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    mike = _closure2_slot9;
                    entity = null;
                    mike = entity != mike;
                    entity = undefined;
                    if(!mike) { _fun00024_ip = 45; continue _fun00023 }
 18:
                    tango = _closure2_slot20;
                    mike = 'username';
                    entity = undefined;
                    if(!(mike === tango)) { _fun00024_ip = 45; continue _fun00023 }
 32:
                    mike = {};
                    zulu = _closure2_slot9;
                    mike['color'] = zulu;
                    entity = mike;
 45:
                    return entity;
                }
            };
            target = target.bind(sequence)(echo, update);
            update = sequence.useMemo;
            variable39 = config.avatar;
            echo = new Array(6);
            echo[0] = variable39;
            echo[1] = context;
            echo[2] = vacuum;
            echo[3] = variable38;
            echo[4] = variable37;
            echo[5] = output;
            output = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tango = _closure1_slot14;
                    mike = _closure1_slot1;
                    entity = _closure1_slot2;
                    options = 42;
                    entity = entity[options];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    golf = _closure2_slot17;
                    golf = golf.avatar;
                    entity['style'] = golf;
                    golf = _closure2_slot1;
                    entity['user'] = golf;
                    golf = _closure2_slot11;
                    entity['guildId'] = golf;
                    golf = _closure1_slot13;
                    offset = golf.OFFLINE;
                    verify = _closure2_slot22;
                    golf = null;
                    if(!(offset !== verify)) { _fun00026_ip = 88; continue _fun00025 }
 84:
                    golf = _closure2_slot22;
 88:
                    entity['status'] = golf;
                    golf = _closure2_slot21;
                    entity['isMobileOnline'] = golf;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    oscar = golf.bind(zulu)(oscar);
                    oscar = oscar.AvatarSizes;
                    oscar = oscar.REFRESH_MEDIUM_32;
                    entity['size'] = oscar;
                    report = _closure2_slot24;
                    entity['avatarDecoration'] = report;
                    report = true;
                    entity['autoStatusCutout'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            output = update.bind(sequence)(output, echo);
            update = sequence.useMemo;
            echo = new Array(7);
            echo[0] = quebec;
            echo[1] = sierra;
            variable37 = yankee == variable36;
            quebec = undefined;
            if(variable37) { _fun00010_ip = 911; continue _fun00009 }
 906:
            quebec = variable36.name;
 911:
            echo[2] = quebec;
            echo[3] = equality;
            echo[4] = context;
            echo[5] = whiskey;
            echo[6] = verify;
            verify = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = _closure2_slot14;
                    report = undefined;
                    if(!(report === entity)) { _fun00028_ip = 546; continue _fun00027 }
 16:
                    tango = _closure1_slot15;
                    zulu = _closure1_slot16;
                    entity = {};
                    golf = _closure2_slot0;
                    oscar = _closure1_slot12;
                    oscar = oscar.SUGGESTION;
                    if(!(golf === oscar)) { _fun00028_ip = 75; continue _fun00027 }
 47:
                    oscar = _closure2_slot23;
                    golf = null;
                    options = golf == oscar;
                    oscar = undefined;
                    if(options) { _fun00028_ip = 71; continue _fun00027 }
 62:
                    options = _closure2_slot23;
                    oscar = options.name;
 71:
                    if(!(golf == oscar)) { _fun00028_ip = 122; continue _fun00027 }
 75:
                    golf = _closure2_slot8;
                    oscar = null;
                    if(!(oscar == golf)) { _fun00028_ip = 120; continue _fun00027 }
 85:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 24;
                    oscar = verify[oscar];
                    verify = options.bind(report)(oscar);
                    options = verify.getName;
                    oscar = _closure2_slot1;
                    golf = options.bind(verify)(oscar);
 120:
                    _fun00028_ip = 131; continue _fun00027;
 122:
                    oscar = _closure2_slot23;
                    golf = oscar.name;
 131:
                    oscar = new Array(4);
                    oscar[0] = golf;
                    golf = _closure2_slot1;
                    verify = golf.bot;
                    golf = null;
                    options = null;
                    if(!verify) { _fun00028_ip = 272; continue _fun00027 }
 156:
                    romeo = _closure1_slot15;
                    offset = _closure1_slot16;
                    verify = {};
                    kilo = _closure1_slot14;
                    backup = _closure1_slot1;
                    echo = _closure1_slot2;
                    foxtrot = 43;
                    foxtrot = echo[foxtrot];
                    backup = backup.bind(report)(foxtrot);
                    foxtrot = {};
                    result = _closure2_slot1;
                    sizing = result.isVerifiedBot;
                    sizing = sizing.bind(result)();
                    foxtrot['verified'] = sizing;
                    output = _closure1_slot0;
                    sizing = 44;
                    sizing = echo[sizing];
                    output = output.bind(report)(sizing);
                    sizing = output.getBotTagTypeFromUser;
                    sizing = sizing.bind(output)(result);
                    foxtrot['type'] = sizing;
                    backup = kilo.bind(report)(backup, foxtrot);
                    foxtrot = [' '];
                    foxtrot[1] = backup;
                    verify['children'] = foxtrot;
                    options = romeo.bind(report)(offset, verify);
 272:
                    oscar[1] = options;
                    verify = _closure2_slot4;
                    options = null;
                    if(!verify) { _fun00028_ip = 399; continue _fun00027 }
 285:
                    romeo = _closure1_slot15;
                    offset = _closure1_slot16;
                    verify = {};
                    kilo = _closure1_slot14;
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    sizing = 22;
                    foxtrot = result[sizing];
                    backup = output.bind(report)(foxtrot);
                    foxtrot = {};
                    sizing = result[sizing];
                    sizing = output.bind(report)(sizing);
                    sizing = sizing.Sizes;
                    sizing = sizing.REFRESH_SMALL_16;
                    foxtrot['size'] = sizing;
                    sizing = 45;
                    sizing = result[sizing];
                    sizing = output.bind(report)(sizing);
                    foxtrot['source'] = sizing;
                    sizing = true;
                    foxtrot['disableColor'] = sizing;
                    backup = kilo.bind(report)(backup, foxtrot);
                    foxtrot = [' '];
                    foxtrot[1] = backup;
                    verify['children'] = foxtrot;
                    options = romeo.bind(report)(offset, verify);
 399:
                    oscar[2] = options;
                    options = _closure2_slot10;
                    options = golf != options;
                    golf = null;
                    if(!options) { _fun00028_ip = 530; continue _fun00027 }
 416:
                    offset = _closure1_slot15;
                    verify = _closure1_slot16;
                    options = {};
                    foxtrot = _closure1_slot14;
                    kilo = _closure1_slot1;
                    sizing = _closure1_slot2;
                    backup = 22;
                    yankee = sizing[backup];
                    romeo = kilo.bind(report)(yankee);
                    yankee = {};
                    backup = sizing[backup];
                    backup = kilo.bind(report)(backup);
                    backup = backup.Sizes;
                    backup = backup.REFRESH_SMALL_16;
                    yankee['size'] = backup;
                    backup = 46;
                    backup = sizing[backup];
                    backup = kilo.bind(report)(backup);
                    yankee['source'] = backup;
                    backup = true;
                    yankee['disableColor'] = backup;
                    romeo = foxtrot.bind(report)(romeo, yankee);
                    yankee = [' '];
                    yankee[1] = romeo;
                    options['children'] = yankee;
                    golf = offset.bind(report)(verify, options);
 530:
                    oscar[3] = golf;
                    entity['children'] = oscar;
                    entity = tango.bind(report)(zulu, entity);
                    _fun00028_ip = 550; continue _fun00027;
 546:
                    entity = _closure2_slot14;
 550:
                    return entity;
                }
            };
            sequence = update.bind(sequence)(verify, echo);
            update = _closure1_slot3;
            echo = update.useMemo;
            verify = new Array(7);
            verify[0] = lima;
            verify[1] = context;
            verify[2] = sierra;
            verify[3] = status;
            verify[4] = papa;
            verify[5] = vacuum;
            verify[6] = tango;
            tango = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot13;
                    report = undefined;
                    if(!(report === entity)) { _fun00030_ip = 87; continue _fun00029 }
 13:
                    tango = _closure1_slot14;
                    zulu = _closure1_slot24;
                    entity = {};
                    oscar = _closure2_slot1;
                    entity['user'] = oscar;
                    oscar = _closure2_slot0;
                    entity['type'] = oscar;
                    oscar = _closure2_slot19;
                    oscar = !oscar;
                    entity['animate'] = oscar;
                    oscar = _closure2_slot16;
                    entity['isGameRelationship'] = oscar;
                    oscar = _closure2_slot11;
                    entity['guildId'] = oscar;
                    oscar = _closure2_slot15;
                    entity['applicationId'] = oscar;
                    entity = tango.bind(report)(zulu, entity);
                    _fun00030_ip = 91; continue _fun00029;
 87:
                    entity = _closure2_slot13;
 91:
                    return entity;
                }
            };
            tango = echo.bind(update)(tango, verify);
            echo = update.useMemo;
            verify = new Array(4);
            verify[0] = control;
            verify[1] = result;
            verify[2] = zulu;
            verify[3] = source;
            oscar = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zulu = _closure2_slot12;
                    entity = null;
                    if(!(entity == zulu)) { _fun00032_ip = 54; continue _fun00031 }
 13:
                    zulu = _closure2_slot3;
                    entity = null;
                    if(zulu) { _fun00032_ip = 52; continue _fun00031 }
 22:
                    report = _closure2_slot2;
                    zulu = _closure1_slot11;
                    tango = zulu.ACTIONS;
                    zulu = undefined;
                    if(!(report === tango)) { _fun00032_ip = 49; continue _fun00031 }
 45:
                    zulu = _closure2_slot26;
 49:
                    entity = zulu;
 52:
                    _fun00032_ip = 58; continue _fun00031;
 54:
                    entity = _closure2_slot12;
 58:
                    return entity;
                }
            };
            verify = echo.bind(update)(oscar, verify);
            update = _closure1_slot15;
            echo = _closure1_slot4;
            oscar = {};
            source = config.usernameLabelContainer;
            oscar['style'] = source;
            vacuum = _closure1_slot14;
            control = _closure1_slot0;
            papa = _closure1_slot2;
            source = 23;
            source = papa[source];
            source = control.bind(report)(source);
            control = source.Text;
            source = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            source['style'] = target;
            source['children'] = sequence;
            control = vacuum.bind(report)(control, source);
            source = new Array(2);
            source[0] = control;
            sequence = _closure1_slot14;
            vacuum = _closure1_slot1;
            control = 47;
            control = papa[control];
            vacuum = vacuum.bind(report)(control);
            control = {};
            context = context.id;
            control['userId'] = context;
            control = sequence.bind(report)(vacuum, control);
            source[1] = control;
            oscar['children'] = source;
            control = update.bind(report)(echo, oscar);
            oscar = 'dot';
            oscar = oscar === options;
            if(!oscar) { _fun00010_ip = 1187; continue _fun00009 }
 1183:
            oscar = yankee != record;
 1187:
            options = control;
            if(!oscar) { _fun00010_ip = 1288; continue _fun00009 }
 1193:
            update = _closure1_slot15;
            echo = _closure1_slot4;
            oscar = {};
            source = config.labelContainer;
            oscar['style'] = source;
            sequence = _closure1_slot14;
            vacuum = _closure1_slot0;
            context = _closure1_slot2;
            source = 48;
            source = context[source];
            source = vacuum.bind(report)(source);
            vacuum = source.RoleDot;
            source = {};
            source['color'] = record;
            config = config.roleDot;
            source['containerStyles'] = config;
            vacuum = sequence.bind(report)(vacuum, source);
            source = new Array(2);
            source[0] = vacuum;
            source[1] = control;
            oscar['children'] = source;
            options = update.bind(report)(echo, oscar);
 1288:
            oscar = {};
            variable42 = oscar;
            variable41 = backup;
            backup = copyDataProperties(variable42, variable41);
            backup = 'disabled';
            oscar[backup] = result;
            backup = 'icon';
            oscar[backup] = output;
            backup = 'onPress';
            oscar[backup] = sizing;
            backup = 'onLongPress';
            oscar[backup] = kilo;
            if(!(yankee != romeo)) { _fun00010_ip = 1343; continue _fun00009 }
 1340:
            foxtrot = romeo;
 1343:
            romeo = 'accessibilityActions';
            oscar[romeo] = foxtrot;
            if(!(yankee != entity)) { _fun00010_ip = 1359; continue _fun00009 }
 1356:
            offset = entity;
 1359:
            entity = 'onAccessibilityAction';
            oscar[entity] = offset;
            entity = 'label';
            oscar[entity] = options;
            entity = 'subLabel';
            oscar[entity] = tango;
            entity = _closure1_slot11;
            entity = entity.TOGGLE;
            if(!(zulu !== entity)) { _fun00010_ip = 1459; continue _fun00009 }
 1400:
            tango = _closure1_slot14;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            entity = 50;
            entity = options[entity];
            entity = zulu.bind(report)(entity);
            zulu = entity.TableRow;
            entity = {};
            variable42 = entity;
            variable41 = oscar;
            options = copyDataProperties(variable42, variable41);
            options = 'trailing';
            entity[options] = verify;
            entity = tango.bind(report)(zulu, entity);
            _fun00010_ip = 1516; continue _fun00009;
 1459:
            tango = _closure1_slot14;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 49;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.TableCheckboxRow;
            mike = {};
            variable42 = mike;
            variable41 = oscar;
            oscar = copyDataProperties(variable42, variable41);
            oscar = 'checked';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 1516:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 51;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();