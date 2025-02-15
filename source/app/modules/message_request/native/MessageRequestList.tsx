// app/modules/message_request/native/MessageRequestList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: PendingMessageRequestRow
        _fun120434: for(var _fun120434_ip = 0; ; ) switch(_fun120434_ip) {
 0:
            entity = argFoo;
            backup = entity.messageRequest;
            mike = entity.goToMessageRequestPreview;
            var _closure2_slot0 = mike;
            options = entity.isLastRow;
            entity = entity.hasSingleMessageRequest;
            var _closure2_slot1 = entity;
            mike = _closure1_slot10;
            tango = undefined;
            vacuum = mike.bind(tango)();
            status = backup.user;
            var _closure2_slot2 = status;
            mike = backup.channel;
            var _closure2_slot3 = mike;
            offset = mike.id;
            var _closure2_slot4 = offset;
            verify = _closure1_slot3;
            oscar = verify.useCallback;
            zulu = function() {
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 7;
                mike = golf[entity];
                entity = undefined;
                tango = oscar.bind(entity)(mike);
                zulu = tango.open;
                mike = {};
                options = 'MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE';
                mike['key'] = options;
                offset = _closure1_slot0;
                report = 6;
                options = golf[report];
                options = offset.bind(entity)(options);
                verify = options.intl;
                options = verify.string;
                report = golf[report];
                report = offset.bind(entity)(report);
                report = report.t;
                report = report.EDYbS0;
                report = options.bind(verify)(report);
                mike['content'] = report;
                report = 8;
                report = golf[report];
                report = oscar.bind(entity)(report);
                mike['icon'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = new Array(0);
            oscar = oscar.bind(verify)(zulu, mike);
            verify = _closure1_slot3;
            zulu = verify.useCallback;
            mike = new Array(2);
            mike[0] = offset;
            mike[1] = entity;
            entity = function() {
                _fun120436: for(var _fun120436_ip = 0; ; ) switch(_fun120436_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun120436_ip = 76; continue _fun120436 }
 10:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 9;
                    report = tango[zulu];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.transitionToChannel;
                    mike = _closure2_slot4;
                    mike = report.bind(oscar)(mike);
                    mike = _closure1_slot1;
                    entity = 10;
                    entity = tango[entity];
                    mike = mike.bind(zulu)(entity);
                    entity = mike.pop;
                    entity = entity.bind(mike)();
 76:
                    entity = undefined;
                    return entity;
                }
            };
            verify = zulu.bind(verify)(entity, mike);
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 11;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useMessageRequestActions;
            entity = {};
            entity['user'] = status;
            entity['onAcceptSuccess'] = verify;
            entity['onError'] = oscar;
            entity = mike.bind(zulu)(entity);
            mike = entity.acceptMessageRequest;
            var _closure2_slot5 = mike;
            mike = entity.rejectMessageRequest;
            var _closure2_slot6 = mike;
            context = entity.isAcceptLoading;
            update = entity.isRejectLoading;
            config = entity.isUserProfileLoading;
            sequence = entity.isOptimisticAccepted;
            echo = entity.isOptimisticRejected;
            control = function() { // Original name: handleRejectMessageRequest
                zulu = _closure2_slot6;
                entity = _closure2_slot3;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot7 = control;
            target = function() { // Original name: handleAcceptMessageRequest
                zulu = _closure2_slot5;
                entity = _closure2_slot3;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot8 = target;
            verify = function() { // Original name: handleSelectRow
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 12;
                zulu = zulu[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.track;
                mike = _closure1_slot7;
                tango = mike.MESSAGE_REQUEST_PREVIEW_VIEWED;
                zulu = {};
                mike = false;
                zulu['is_spam'] = mike;
                golf = _closure2_slot3;
                golf = golf.id;
                zulu['channel_id'] = golf;
                golf = _closure2_slot2;
                golf = golf.id;
                zulu['other_user_id'] = golf;
                zulu = report.bind(oscar)(tango, zulu);
                mike = _closure2_slot0;
                mike = mike.bind(entity)();
                return entity;
            };
            var _closure2_slot9 = verify;
            source = context;
            if(source) { _fun120434_ip = 276; continue _fun120434 }
 273:
            source = update;
 276:
            if(source) { _fun120434_ip = 282; continue _fun120434 }
 279:
            source = config;
 282:
            if(source) { _fun120434_ip = 288; continue _fun120434 }
 285:
            source = sequence;
 288:
            if(source) { _fun120434_ip = 294; continue _fun120434 }
 291:
            source = echo;
 294:
            zulu = _closure1_slot9;
            sierra = _closure1_slot0;
            oscar = _closure1_slot2;
            sizing = 13;
            entity = oscar[sizing];
            entity = sierra.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = verify;
            record = 'button';
            entity['accessibilityRole'] = record;
            offset = {};
            verify = _closure1_slot11;
            verify = verify.ACCEPT_MESSAGE_REQUEST;
            offset['name'] = verify;
            papa = 6;
            verify = oscar[papa];
            verify = sierra.bind(tango)(verify);
            romeo = verify.intl;
            yankee = romeo.string;
            verify = oscar[papa];
            verify = sierra.bind(tango)(verify);
            verify = verify.t;
            verify = verify.hSLLWl;
            verify = yankee.bind(romeo)(verify);
            offset['label'] = verify;
            verify = new Array(3);
            verify[0] = offset;
            offset = {};
            yankee = _closure1_slot11;
            yankee = yankee.IGNORE_MESSAGE_REQUEST;
            offset['name'] = yankee;
            yankee = oscar[papa];
            yankee = sierra.bind(tango)(yankee);
            foxtrot = yankee.intl;
            romeo = foxtrot.string;
            yankee = oscar[papa];
            yankee = sierra.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.fIBuSE;
            yankee = romeo.bind(foxtrot)(yankee);
            offset['label'] = yankee;
            verify[1] = offset;
            offset = {};
            yankee = _closure1_slot11;
            yankee = yankee.PREVIEW_MESSAGE_REQUEST;
            offset['name'] = yankee;
            yankee = oscar[papa];
            yankee = sierra.bind(tango)(yankee);
            foxtrot = yankee.intl;
            romeo = foxtrot.string;
            yankee = oscar[papa];
            yankee = sierra.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.HjgsKC;
            yankee = romeo.bind(foxtrot)(yankee);
            offset['label'] = yankee;
            verify[2] = offset;
            entity['accessibilityActions'] = verify;
            report = function(argFoo) { // Original name: onAccessibilityAction
                _fun120440: for(var _fun120440_ip = 0; ; ) switch(_fun120440_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    mike = entity.actionName;
                    zulu = _closure1_slot11;
                    zulu = zulu.ACCEPT_MESSAGE_REQUEST;
                    if(!(zulu !== mike)) { _fun120440_ip = 93; continue _fun120440 }
 31:
                    zulu = _closure1_slot11;
                    zulu = zulu.IGNORE_MESSAGE_REQUEST;
                    if(!(zulu !== mike)) { _fun120440_ip = 78; continue _fun120440 }
 45:
                    entity = _closure1_slot11;
                    entity = entity.PREVIEW_MESSAGE_REQUEST;
                    if(!(entity !== mike)) { _fun120440_ip = 63; continue _fun120440 }
 59:
                    entity = undefined;
                    return entity;
 63:
                    mike = _closure2_slot9;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
 78:
                    mike = _closure2_slot7;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
 93:
                    mike = _closure2_slot8;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            entity['onAccessibilityAction'] = report;
            report = vacuum.pressableRow;
            entity['style'] = report;
            offset = _closure1_slot9;
            verify = _closure1_slot5;
            report = {};
            yankee = vacuum.rowContainer;
            report['style'] = yankee;
            foxtrot = _closure1_slot8;
            romeo = _closure1_slot1;
            yankee = 14;
            yankee = oscar[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = {};
            kilo = backup.channel;
            yankee['channel'] = kilo;
            backup = backup.user;
            yankee['otherUser'] = backup;
            romeo = foxtrot.bind(tango)(romeo, yankee);
            yankee = new Array(2);
            yankee[0] = romeo;
            backup = _closure1_slot9;
            foxtrot = _closure1_slot5;
            romeo = {};
            kilo = vacuum.actionContainer;
            romeo['style'] = kilo;
            result = _closure1_slot8;
            kilo = oscar[sizing];
            kilo = sierra.bind(tango)(kilo);
            output = kilo.PressableOpacity;
            kilo = {};
            kilo['accessibilityRole'] = record;
            lima = oscar[papa];
            lima = sierra.bind(tango)(lima);
            equality = lima.intl;
            whiskey = equality.formatToPlainString;
            oscar = oscar[papa];
            oscar = sierra.bind(tango)(oscar);
            oscar = oscar.t;
            lima = oscar.6p0yBg;
            sierra = {};
            oscar = null;
            variable36 = oscar == status;
            quebec = undefined;
            if(variable36) { _fun120434_ip = 757; continue _fun120434 }
 748:
            variable36 = status.toString;
            quebec = variable36.bind(status)();
 757:
            sierra['name'] = quebec;
            sierra = whiskey.bind(equality)(lima, sierra);
            kilo['accessibilityLabel'] = sierra;
            kilo['onPress'] = target;
            kilo['disabled'] = source;
            sierra = vacuum.actionButton;
            target = new Array(2);
            target[0] = sierra;
            sierra = vacuum.acceptButton;
            target[1] = sierra;
            kilo['style'] = target;
            if(context) { _fun120434_ip = 898; continue _fun120434 }
 810:
            if(config) { _fun120434_ip = 898; continue _fun120434 }
 813:
            if(sequence) { _fun120434_ip = 898; continue _fun120434 }
 816:
            context = _closure1_slot8;
            sierra = _closure1_slot1;
            lima = _closure1_slot2;
            target = 15;
            sequence = lima[target];
            config = sierra.bind(tango)(sequence);
            sequence = {};
            target = lima[target];
            target = sierra.bind(tango)(target);
            target = target.Sizes;
            target = target.SMALL;
            sequence['size'] = target;
            target = true;
            sequence['disableColor'] = target;
            target = 16;
            target = lima[target];
            target = sierra.bind(tango)(target);
            sequence['source'] = target;
            sequence = context.bind(tango)(config, sequence);
            _fun120434_ip = 924; continue _fun120434;
 898:
            target = _closure1_slot8;
            context = _closure1_slot4;
            config = {};
            sierra = vacuum.activityIndicator;
            config['style'] = sierra;
            sequence = target.bind(tango)(context, config);
 924:
            kilo['children'] = sequence;
            output = result.bind(tango)(output, kilo);
            kilo = new Array(2);
            kilo[0] = output;
            result = _closure1_slot8;
            config = _closure1_slot0;
            sequence = _closure1_slot2;
            sizing = sequence[sizing];
            sizing = config.bind(tango)(sizing);
            output = sizing.PressableOpacity;
            sizing = {};
            sizing['accessibilityRole'] = record;
            record = sequence[papa];
            record = config.bind(tango)(record);
            context = record.intl;
            record = context.formatToPlainString;
            sequence = sequence[papa];
            sequence = config.bind(tango)(sequence);
            sequence = sequence.t;
            config = sequence.C9Xe6+;
            sequence = {};
            target = oscar == status;
            papa = undefined;
            if(target) { _fun120434_ip = 1034; continue _fun120434 }
 1025:
            target = status.toString;
            papa = target.bind(status)();
 1034:
            sequence['name'] = papa;
            sequence = record.bind(context)(config, sequence);
            sizing['accessibilityLabel'] = sequence;
            sizing['onPress'] = control;
            sizing['disabled'] = source;
            source = vacuum.actionButton;
            sizing['style'] = source;
            if(update) { _fun120434_ip = 1154; continue _fun120434 }
 1069:
            if(echo) { _fun120434_ip = 1154; continue _fun120434 }
 1072:
            source = _closure1_slot8;
            sequence = _closure1_slot1;
            config = _closure1_slot2;
            control = 15;
            echo = config[control];
            update = sequence.bind(tango)(echo);
            echo = {};
            control = config[control];
            control = sequence.bind(tango)(control);
            control = control.Sizes;
            control = control.SMALL;
            echo['size'] = control;
            control = true;
            echo['disableColor'] = control;
            control = 17;
            control = config[control];
            control = sequence.bind(tango)(control);
            echo['source'] = control;
            echo = source.bind(tango)(update, echo);
            _fun120434_ip = 1180; continue _fun120434;
 1154:
            control = _closure1_slot8;
            source = _closure1_slot4;
            update = {};
            vacuum = vacuum.activityIndicator;
            update['style'] = vacuum;
            echo = control.bind(tango)(source, update);
 1180:
            sizing['children'] = echo;
            sizing = result.bind(tango)(output, sizing);
            kilo[1] = sizing;
            romeo['children'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[1] = romeo;
            report['children'] = yankee;
            verify = offset.bind(tango)(verify, report);
            report = new Array(2);
            report[0] = verify;
            oscar = null;
            if(options) { _fun120434_ip = 1281; continue _fun120434 }
 1231:
            verify = _closure1_slot8;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 18;
            golf = offset[golf];
            golf = options.bind(tango)(golf);
            options = golf.FormDivider;
            golf = {'iconPush': true, 'outer': true};
            oscar = verify.bind(tango)(options, golf);
 1281:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityIndicator;
    var _closure1_slot4 = golf;
    golf = tango.View;
    var _closure1_slot5 = golf;
    tango = tango.FlatList;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'marginTop': 6, 'marginBottom': 10};
    offset = 5;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = romeo;
    tango['sectionContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': 14, 'marginBottom': 12};
    tango['rowContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'flex-start', 'height': '100%'};
    tango['actionContainer'] = verify;
    verify = {'backgroundColor': null, 'tintColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'height': 32, 'width': 32};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.INTERACTIVE_NORMAL;
    verify['tintColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.lg;
    verify['borderRadius'] = romeo;
    tango['actionButton'] = verify;
    verify = {};
    romeo = 16;
    verify['marginRight'] = romeo;
    tango['acceptButton'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.md;
    verify['borderRadius'] = romeo;
    tango['pressableRow'] = verify;
    verify = {'height': 16, 'width': 16};
    tango['activityIndicator'] = verify;
    verify = {'flex': 1, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['list'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'accept-message-request';
    tango['ACCEPT_MESSAGE_REQUEST'] = golf;
    golf = 'ignore-message-request';
    tango['IGNORE_MESSAGE_REQUEST'] = golf;
    golf = 'preview-message-request';
    tango['PREVIEW_MESSAGE_REQUEST'] = golf;
    var _closure1_slot11 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/native/MessageRequestList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MessageRequestList
        _fun120441: for(var _fun120441_ip = 0; ; ) switch(_fun120441_ip) {
 0:
            entity = argFoo;
            entity = entity.goToMessageRequestPreview;
            var _closure2_slot0 = entity;
            entity = _closure1_slot10;
            tango = undefined;
            options = entity.bind(tango)();
            var _closure2_slot1 = options;
            mike = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 19;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            verify = entity.bottom;
            entity = 20;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.bind(tango)();
            var _closure2_slot2 = mike;
            zulu = _closure1_slot0;
            entity = 21;
            entity = oscar[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.useListHasSingleMessageRequest;
            entity = entity.bind(zulu)();
            var _closure2_slot3 = entity;
            entity = mike.length;
            yankee = 0;
            if(!(yankee !== entity)) { _fun120441_ip = 288; continue _fun120441 }
 125:
            oscar = ['header-section'];
            kilo = 1;
            output = oscar;
            sizing = mike;
            entity = arraySpread(output, sizing, kilo);
            zulu = _closure1_slot8;
            mike = _closure1_slot6;
            entity = {};
            offset = options.list;
            options = new Array(2);
            options[0] = offset;
            offset = {};
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            romeo = 23;
            romeo = backup[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = foxtrot.isAndroid;
            romeo = romeo.bind(foxtrot)();
            yankee = 0;
            if(!romeo) { _fun120441_ip = 211; continue _fun120441 }
 208:
            yankee = verify;
 211:
            offset['marginBottom'] = yankee;
            options[1] = offset;
            entity['style'] = options;
            options = {};
            offset = 0.01;
            options['right'] = offset;
            entity['scrollIndicatorInsets'] = options;
            options = {};
            options['paddingBottom'] = verify;
            verify = 12;
            options['paddingTop'] = verify;
            entity['contentContainerStyle'] = options;
            golf = function(argFoo) { // Original name: renderItem
                _fun120442: for(var _fun120442_ip = 0; ; ) switch(_fun120442_ip) {
 0:
                    entity = argFoo;
                    entity = entity.item;
                    var _closure3_slot0 = entity;
                    tango = 'string';
                    zulu = typeof entity;
                    if(!(tango !== zulu)) { _fun120442_ip = 154; continue _fun120442 }
 28:
                    report = _closure1_slot8;
                    tango = _closure1_slot12;
                    zulu = {};
                    zulu['messageRequest'] = entity;
                    mike = function() { // Original name: goToMessageRequestPreview
                        zulu = _closure2_slot0;
                        entity = _closure3_slot0;
                        entity = entity.channel;
                        mike = entity.id;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu['goToMessageRequestPreview'] = mike;
                    mike = entity.channel;
                    options = mike.id;
                    golf = _closure2_slot2;
                    verify = golf.length;
                    mike = 1;
                    mike = verify - mike;
                    verify = golf[mike];
                    mike = null;
                    offset = mike == verify;
                    mike = undefined;
                    golf = undefined;
                    if(offset) { _fun120442_ip = 114; continue _fun120442 }
 104:
                    verify = verify.channel;
                    golf = verify.id;
 114:
                    golf = options === golf;
                    zulu['isLastRow'] = golf;
                    oscar = _closure2_slot3;
                    zulu['hasSingleMessageRequest'] = oscar;
                    entity = entity.channel;
                    entity = entity.id;
                    entity = report.bind(mike)(tango, zulu, entity);
                    _fun120442_ip = 313; continue _fun120442;
 154:
                    report = _closure1_slot8;
                    tango = _closure1_slot5;
                    zulu = {};
                    oscar = _closure2_slot1;
                    oscar = oscar.sectionContainer;
                    zulu['style'] = oscar;
                    options = _closure1_slot8;
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    mike = 24;
                    oscar = backup[mike];
                    mike = undefined;
                    oscar = offset.bind(mike)(oscar);
                    golf = oscar.Text;
                    oscar = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    verify = 6;
                    yankee = backup[verify];
                    yankee = offset.bind(mike)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.format;
                    verify = backup[verify];
                    verify = offset.bind(mike)(verify);
                    verify = verify.t;
                    offset = verify.evH4YW;
                    verify = {};
                    foxtrot = _closure2_slot2;
                    foxtrot = foxtrot.length;
                    verify['pendingRequestNumber'] = foxtrot;
                    verify = yankee.bind(romeo)(offset, verify);
                    oscar['children'] = verify;
                    oscar = options.bind(mike)(golf, oscar);
                    zulu['children'] = oscar;
                    entity = report.bind(mike)(tango, zulu);
 313:
                    return entity;
                }
            };
            entity['renderItem'] = golf;
            entity['data'] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 288:
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 22;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            options = _closure1_slot0;
            report = 6;
            oscar = verify[report];
            oscar = options.bind(tango)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            report = verify[report];
            report = options.bind(tango)(report);
            report = report.t;
            report = report.SXrqTU;
            report = oscar.bind(golf)(report);
            entity['bodyText'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();