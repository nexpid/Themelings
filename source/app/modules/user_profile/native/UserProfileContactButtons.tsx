// app/modules/user_profile/native/UserProfileContactButtons.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ContactButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            foxtrot = tango.icon;
            offset = tango.label;
            mike = tango.hasCustomProfileTheme;
            zulu = {'icon': 0, 'label': 0, 'hasCustomProfileTheme': 0};
            sizing = null;
            output = zulu;
            entity = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = tango;
            kilo = zulu;
            options = copyDataProperties(output, sizing, kilo);
            entity = _closure1_slot8;
            tango = undefined;
            report = entity.bind(tango)();
            verify = 'secondary';
            if(!mike) { _fun00002_ip = 74; continue _fun00001 }
 70:
            verify = 'primary';
 74:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 7;
            entity = oscar[entity];
            entity = zulu.bind(tango)(entity);
            entity = entity.colors;
            if(mike) { _fun00002_ip = 110; continue _fun00001 }
 102:
            backup = entity.REDESIGN_BUTTON_SECONDARY_TEXT;
            _fun00002_ip = 116; continue _fun00001;
 110:
            backup = entity.WHITE;
 116:
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = report.buttonArea;
            entity['style'] = report;
            golf = _closure1_slot6;
            oscar = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 8;
            report = romeo[report];
            report = oscar.bind(tango)(report);
            oscar = report.IconButton;
            report = {};
            romeo = _closure1_slot6;
            yankee = {};
            yankee['color'] = backup;
            yankee = romeo.bind(tango)(foxtrot, yankee);
            report['icon'] = yankee;
            report['label'] = offset;
            report['accessibilityLabel'] = offset;
            report['variant'] = verify;
            output = report;
            sizing = options;
            options = copyDataProperties(output, sizing);
            verify = true;
            options = 'grow';
            report[options] = verify;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: FriendRequestButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = mike.user;
            var _closure2_slot0 = entity;
            options = mike.hasCustomProfileTheme;
            zulu = mike.friendToken;
            var _closure2_slot1 = zulu;
            report = mike.location;
            oscar = undefined;
            var _closure2_slot3 = oscar;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 9;
            mike = offset[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.bind(oscar)();
            tango = mike.newestAnalyticsLocation;
            zulu = _closure1_slot0;
            mike = 10;
            mike = offset[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.useUserProfileAnalyticsContext;
            mike = mike.bind(zulu)();
            mike = mike.trackUserProfileAction;
            var _closure2_slot2 = mike;
            zulu = {};
            mike = null;
            if(!(mike != report)) { _fun00004_ip = 121; continue _fun00003 }
 118:
            tango = report;
 121:
            zulu['location'] = tango;
            _closure2_slot3 = zulu;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 11;
            zulu = report[zulu];
            offset = tango.bind(oscar)(zulu);
            zulu = offset.useGameFriendsForUser;
            entity = entity.id;
            zulu = zulu.bind(offset)(entity);
            entity = 12;
            entity = report[entity];
            offset = tango.bind(oscar)(entity);
            report = offset.useStateFromStores;
            entity = _closure1_slot4;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getRelationshipType;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(offset)(tango, entity);
            entity = _closure1_slot5;
            tango = entity.FRIEND;
            entity = null;
            if(!(report !== tango)) { _fun00004_ip = 801; continue _fun00003 }
 226:
            tango = _closure1_slot5;
            tango = tango.BLOCKED;
            entity = null;
            if(!(report !== tango)) { _fun00004_ip = 801; continue _fun00003 }
 245:
            tango = _closure1_slot5;
            tango = tango.PENDING_INCOMING;
            if(!(report !== tango)) { _fun00004_ip = 636; continue _fun00003 }
 262:
            tango = _closure1_slot5;
            tango = tango.PENDING_OUTGOING;
            if(!(report !== tango)) { _fun00004_ip = 469; continue _fun00003 }
 279:
            tango = zulu.length;
            zulu = 0;
            zulu = tango > zulu;
            mike = null;
            if(zulu) { _fun00004_ip = 464; continue _fun00003 }
 298:
            report = _closure1_slot6;
            tango = _closure1_slot9;
            zulu = {};
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 18;
            offset = backup[offset];
            offset = foxtrot.bind(oscar)(offset);
            offset = offset.UserPlusIcon;
            zulu['icon'] = offset;
            offset = 14;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            kilo = yankee.intl;
            romeo = kilo.string;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.7815aW;
            yankee = romeo.bind(kilo)(yankee);
            zulu['label'] = yankee;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = backup[offset];
            offset = foxtrot.bind(oscar)(offset);
            offset = offset.t;
            offset = offset.gc9aS0;
            offset = yankee.bind(romeo)(offset);
            zulu['accessibilityHint'] = offset;
            zulu['hasCustomProfileTheme'] = options;
            offset = function() { // Original name: onPress
                zulu = _closure2_slot2;
                mike = {};
                entity = 'SEND_FRIEND_REQUEST';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 17;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.addRelationship;
                mike = {};
                oscar = _closure2_slot0;
                oscar = oscar.id;
                mike['userId'] = oscar;
                oscar = _closure2_slot1;
                mike['friendToken'] = oscar;
                report = _closure2_slot3;
                mike['context'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu['onPress'] = offset;
            mike = report.bind(oscar)(tango, zulu);
 464:
            _fun00004_ip = 631; continue _fun00003;
 469:
            report = _closure1_slot6;
            tango = _closure1_slot9;
            zulu = {};
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 13;
            offset = backup[offset];
            offset = foxtrot.bind(oscar)(offset);
            offset = offset.ClockIcon;
            zulu['icon'] = offset;
            offset = 14;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            kilo = yankee.intl;
            romeo = kilo.string;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.L8CBnJ;
            yankee = romeo.bind(kilo)(yankee);
            zulu['label'] = yankee;
            yankee = backup[offset];
            yankee = foxtrot.bind(oscar)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = backup[offset];
            offset = foxtrot.bind(oscar)(offset);
            offset = offset.t;
            offset = offset.H0Ql7O;
            offset = yankee.bind(romeo)(offset);
            zulu['accessibilityHint'] = offset;
            zulu['hasCustomProfileTheme'] = options;
            offset = function() { // Original name: onPress
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.confirmCancelFriendRequest;
                mike = {};
                report = _closure2_slot0;
                report = report.username;
                mike['username'] = report;
                report = function() { // Original name: onConfirm
                    tango = _closure2_slot2;
                    zulu = {};
                    entity = 'CANCEL_FRIEND_REQUEST';
                    zulu['action'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 17;
                    zulu = report[zulu];
                    report = tango.bind(entity)(zulu);
                    tango = report.cancelFriendRequest;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    mike = _closure2_slot3;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                mike['onConfirm'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu['onPress'] = offset;
            mike = report.bind(oscar)(tango, zulu);
 631:
            _fun00004_ip = 798; continue _fun00003;
 636:
            report = _closure1_slot6;
            tango = _closure1_slot9;
            zulu = {};
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 13;
            verify = foxtrot[verify];
            verify = romeo.bind(oscar)(verify);
            verify = verify.ClockIcon;
            zulu['icon'] = verify;
            verify = 14;
            offset = foxtrot[verify];
            offset = romeo.bind(oscar)(offset);
            backup = offset.intl;
            yankee = backup.string;
            offset = foxtrot[verify];
            offset = romeo.bind(oscar)(offset);
            offset = offset.t;
            offset = offset.L8CBnJ;
            offset = yankee.bind(backup)(offset);
            zulu['label'] = offset;
            offset = foxtrot[verify];
            offset = romeo.bind(oscar)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(oscar)(verify);
            verify = verify.t;
            verify = verify.H0Ql7O;
            verify = offset.bind(yankee)(verify);
            zulu['accessibilityHint'] = verify;
            zulu['hasCustomProfileTheme'] = options;
            golf = function() { // Original name: onPress
                zulu = _closure2_slot2;
                mike = {};
                entity = 'ACCEPT_FRIEND_REQUEST';
                mike['action'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 15;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.maybeConfirmFriendRequestAccept;
                mike = {};
                oscar = _closure2_slot0;
                oscar = oscar.id;
                mike['userId'] = oscar;
                report = _closure2_slot3;
                report = report.location;
                mike['location'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu['onPress'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 798:
            entity = mike;
 801:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot5 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 'row';
    verify['flexDirection'] = offset;
    offset = 6;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    yankee = offset.LARGE_BUTTON_HEIGHT;
    offset = 24;
    offset = yankee + offset;
    verify['width'] = offset;
    tango['buttonArea'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileContactButtons.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileContactButtons
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            romeo = entity.user;
            var _closure2_slot0 = romeo;
            options = entity.disableMessage;
            backup = entity.disableCalls;
            yankee = entity.friendToken;
            offset = entity.location;
            verify = entity.hasCustomProfileTheme;
            report = entity.style;
            record = _closure1_slot0;
            context = _closure1_slot2;
            entity = 10;
            entity = context[entity];
            tango = undefined;
            mike = record.bind(tango)(entity);
            entity = mike.useUserProfileAnalyticsContext;
            entity = entity.bind(mike)();
            entity = entity.trackUserProfileAction;
            var _closure2_slot1 = entity;
            entity = function() { // Original name: closeUserProfile
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 19;
                mike = tango[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = mike.bind(entity)();
                mike = 20;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            var _closure2_slot2 = entity;
            lima = _closure1_slot1;
            entity = 21;
            mike = context[entity];
            foxtrot = lima.bind(tango)(mike);
            golf = romeo.id;
            zulu = false;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = {};
                    entity = 'VOICE_CALL';
                    zulu['action'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00008_ip = 42; continue _fun00007 }
 34:
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)();
 42:
                    return entity;
                }
            };
            mike = foxtrot.bind(tango)(golf, zulu, mike);
            source = mike.handlePress;
            var _closure2_slot3 = source;
            control = mike.text;
            vacuum = mike.inCall;
            sequence = mike.accessibilityHint;
            entity = context[entity];
            golf = lima.bind(tango)(entity);
            zulu = romeo.id;
            mike = true;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = {};
                    entity = 'VIDEO_CALL';
                    zulu['action'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00010_ip = 44; continue _fun00009 }
 36:
                    mike = _closure2_slot2;
                    mike = mike.bind(entity)();
 44:
                    return entity;
                }
            };
            entity = golf.bind(tango)(zulu, mike, entity);
            output = entity.handlePress;
            var _closure2_slot4 = output;
            sizing = entity.text;
            echo = entity.inCall;
            update = entity.accessibilityHint;
            zulu = _closure1_slot7;
            entity = 22;
            entity = context[entity];
            entity = record.bind(tango)(entity);
            mike = entity.ButtonGroup;
            entity = {'direction': 'horizontal', 'align': 'flex-start', 'justify': 'space-evenly'};
            entity['style'] = report;
            golf = _closure1_slot6;
            foxtrot = _closure1_slot9;
            report = {};
            kilo = 23;
            kilo = context[kilo];
            kilo = record.bind(tango)(kilo);
            kilo = kilo.ChatIcon;
            report['icon'] = kilo;
            config = 14;
            kilo = context[config];
            kilo = record.bind(tango)(kilo);
            target = kilo.intl;
            papa = target.string;
            kilo = context[config];
            kilo = record.bind(tango)(kilo);
            kilo = kilo.t;
            kilo = kilo.zROXER;
            kilo = papa.bind(target)(kilo);
            report['label'] = kilo;
            kilo = context[config];
            kilo = record.bind(tango)(kilo);
            status = kilo.intl;
            target = status.formatToPlainString;
            kilo = context[config];
            kilo = record.bind(tango)(kilo);
            kilo = kilo.t;
            papa = kilo.zFfSFR;
            kilo = {};
            sierra = 24;
            sierra = context[sierra];
            lima = lima.bind(tango)(sierra);
            sierra = lima.getName;
            sierra = sierra.bind(lima)(romeo);
            kilo['name'] = sierra;
            kilo = target.bind(status)(papa, kilo);
            report['accessibilityHint'] = kilo;
            kilo = function() { // Original name: onPress
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = {};
                    entity = 'SEND_MESSAGE';
                    zulu['action'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00012_ip = 42; continue _fun00011 }
 34:
                    zulu = _closure2_slot2;
                    zulu = zulu.bind(entity)();
 42:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 25;
                    zulu = report[zulu];
                    oscar = tango.bind(entity)(zulu);
                    zulu = oscar.popAll;
                    zulu = zulu.bind(oscar)();
                    zulu = 26;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.openPrivateChannel;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            report['onPress'] = kilo;
            report['disabled'] = options;
            report['hasCustomProfileTheme'] = verify;
            golf = golf.bind(tango)(foxtrot, report);
            report = new Array(4);
            report[0] = golf;
            options = _closure1_slot6;
            golf = {};
            kilo = 27;
            kilo = context[kilo];
            kilo = record.bind(tango)(kilo);
            kilo = kilo.PhoneCallIcon;
            golf['icon'] = kilo;
            kilo = null;
            record = control;
            if(!(kilo == record)) { _fun00006_ip = 550; continue _fun00005 }
 498:
            status = _closure1_slot0;
            context = _closure1_slot2;
            papa = context[config];
            papa = status.bind(tango)(papa);
            target = papa.intl;
            papa = target.string;
            context = context[config];
            context = status.bind(tango)(context);
            context = context.t;
            context = context.EZgS+/;
            record = papa.bind(target)(context);
 550:
            golf['label'] = record;
            if(!(kilo == sequence)) { _fun00006_ip = 610; continue _fun00005 }
 558:
            target = _closure1_slot0;
            record = _closure1_slot2;
            context = record[config];
            context = target.bind(tango)(context);
            papa = context.intl;
            context = papa.string;
            record = record[config];
            record = target.bind(tango)(record);
            record = record.t;
            record = record.focH1t;
            sequence = context.bind(papa)(record);
 610:
            golf['accessibilityHint'] = sequence;
            if(vacuum) { _fun00006_ip = 625; continue _fun00005 }
 618:
            source = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.confirmStartCall;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
 625:
            golf['onPress'] = source;
            source = backup;
            if(backup) { _fun00006_ip = 639; continue _fun00005 }
 635:
            source = kilo == control;
 639:
            golf['disabled'] = source;
            golf['hasCustomProfileTheme'] = verify;
            golf = options.bind(tango)(foxtrot, golf);
            report[1] = golf;
            foxtrot = _closure1_slot6;
            options = _closure1_slot9;
            golf = {};
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            source = 28;
            source = vacuum[source];
            source = control.bind(tango)(source);
            source = source.VideoIcon;
            golf['icon'] = source;
            source = sizing;
            if(!(kilo == source)) { _fun00006_ip = 757; continue _fun00005 }
 705:
            record = _closure1_slot0;
            control = _closure1_slot2;
            vacuum = control[config];
            vacuum = record.bind(tango)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = control[config];
            control = record.bind(tango)(control);
            control = control.t;
            control = control.7AWk5+;
            source = vacuum.bind(sequence)(control);
 757:
            golf['label'] = source;
            if(!(kilo == update)) { _fun00006_ip = 817; continue _fun00005 }
 765:
            sequence = _closure1_slot0;
            source = _closure1_slot2;
            control = source[config];
            control = sequence.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = source[config];
            source = sequence.bind(tango)(source);
            source = source.t;
            source = source.oCqlGB;
            update = control.bind(vacuum)(source);
 817:
            golf['accessibilityHint'] = update;
            if(echo) { _fun00006_ip = 832; continue _fun00005 }
 825:
            output = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.confirmStartCall;
                entity = _closure2_slot4;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
 832:
            golf['onPress'] = output;
            if(backup) { _fun00006_ip = 843; continue _fun00005 }
 839:
            backup = kilo == sizing;
 843:
            golf['disabled'] = backup;
            golf['hasCustomProfileTheme'] = verify;
            golf = foxtrot.bind(tango)(options, golf);
            report[2] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot10;
            oscar = {};
            oscar['user'] = romeo;
            oscar['friendToken'] = yankee;
            oscar['location'] = offset;
            oscar['hasCustomProfileTheme'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();