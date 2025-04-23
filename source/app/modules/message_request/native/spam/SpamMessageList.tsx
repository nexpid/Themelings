// app/modules/message_request/native/spam/SpamMessageList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PendingSpamMessageRequestRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.messageRequest;
            michal = entity.goToMessageRequestPreview;
            var _closure2_slot0 = michal;
            option = entity.isLastRow;
            entity = entity.hasSingleMessageRequest;
            var _closure2_slot1 = entity;
            michal = _closure1_slot10;
            tangon = undefined;
            vacuum = michal.bind(tangon)();
            status = backup.user;
            var _closure2_slot2 = status;
            yankee = backup.channel;
            var _closure2_slot3 = yankee;
            romeon = yankee.id;
            var _closure2_slot4 = romeon;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 7;
            oscard = zuuluu[oscard];
            offset = michal.bind(tangon)(oscard);
            verify = offset.useLongestChannelMessageBeforeReply;
            oscard = yankee.getRecipientId;
            oscard = oscard.bind(yankee)();
            oscard = verify.bind(offset)(romeon, oscard);
            var _closure2_slot5 = oscard;
            yankee = _closure1_slot3;
            offset = yankee.useCallback;
            verify = function() {
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 8;
                michal = golfie[entity];
                entity = undefined;
                tangon = oscard.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = {};
                option = 'MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE';
                michal['key'] = option;
                offset = _closure1_slot0;
                report = 6;
                option = golfie[report];
                option = offset.bind(entity)(option);
                verify = option.intl;
                option = verify.string;
                report = golfie[report];
                report = offset.bind(entity)(report);
                report = report.t;
                report = report.pIQ3h4;
                report = option.bind(verify)(report);
                michal['content'] = report;
                report = 9;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                michal['icon'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = new Array(0);
            oscard = offset.bind(yankee)(verify, oscard);
            yankee = _closure1_slot3;
            offset = yankee.useCallback;
            verify = new Array(2);
            verify[0] = romeon;
            verify[1] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00004_ip = 76; continue _fun00003 }
 10:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 10;
                    report = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = oscard.bind(zuuluu)(report);
                    report = oscard.transitionToChannel;
                    michal = _closure2_slot4;
                    michal = report.bind(oscard)(michal);
                    michal = _closure1_slot1;
                    entity = 11;
                    entity = tangon[entity];
                    michal = michal.bind(zuuluu)(entity);
                    entity = michal.pop;
                    entity = entity.bind(michal)();
 76:
                    entity = undefined;
                    return entity;
                }
            };
            verify = offset.bind(yankee)(entity, verify);
            entity = 12;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.useMessageRequestActions;
            entity = {};
            entity['user'] = status;
            entity['onAcceptSuccess'] = verify;
            entity['onError'] = oscard;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.rejectMessageRequest;
            var _closure2_slot6 = michal;
            cntext = entity.isAcceptLoading;
            update = entity.isRejectLoading;
            config = entity.isUserProfileLoading;
            sequen = entity.isOptimisticAccepted;
            echoed = entity.isOptimisticRejected;
            entity = entity.markAsNotSpam;
            var _closure2_slot7 = entity;
            ctrled = function() { // Original name: handleRejectMessageRequest
                zuuluu = _closure2_slot6;
                entity = _closure2_slot3;
                michal = entity.id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            var _closure2_slot8 = ctrled;
            target = function() { // Original name: handleAcceptMessageRequest
                tangon = _closure2_slot7;
                zuuluu = _closure2_slot3;
                michal = _closure2_slot5;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            var _closure2_slot9 = target;
            verify = function() { // Original name: handleSelectRow
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.track;
                michal = _closure1_slot7;
                tangon = michal.MESSAGE_REQUEST_PREVIEW_VIEWED;
                zuuluu = {};
                michal = true;
                zuuluu['is_spam'] = michal;
                golfie = _closure2_slot3;
                golfie = golfie.id;
                zuuluu['channel_id'] = golfie;
                golfie = _closure2_slot2;
                golfie = golfie.id;
                zuuluu['other_user_id'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal = _closure2_slot0;
                michal = michal.bind(entity)();
                return entity;
            };
            var _closure2_slot10 = verify;
            source = cntext;
            if(source) { _fun00002_ip = 314; continue _fun00001 }
 311:
            source = update;
 314:
            if(source) { _fun00002_ip = 320; continue _fun00001 }
 317:
            source = config;
 320:
            if(source) { _fun00002_ip = 326; continue _fun00001 }
 323:
            source = sequen;
 326:
            if(source) { _fun00002_ip = 332; continue _fun00001 }
 329:
            source = echoed;
 332:
            zuuluu = _closure1_slot9;
            sierra = _closure1_slot0;
            oscard = _closure1_slot2;
            sizing = 14;
            entity = oscard[sizing];
            entity = sierra.bind(tangon)(entity);
            michal = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = verify;
            record = 'button';
            entity['accessibilityRole'] = record;
            offset = {};
            verify = _closure1_slot11;
            verify = verify.ACCEPT_SPAM_MESSAGE;
            offset['name'] = verify;
            papara = 6;
            verify = oscard[papara];
            verify = sierra.bind(tangon)(verify);
            romeon = verify.intl;
            yankee = romeon.string;
            verify = oscard[papara];
            verify = sierra.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.apePSU;
            verify = yankee.bind(romeon)(verify);
            offset['label'] = verify;
            verify = new Array(3);
            verify[0] = offset;
            offset = {};
            yankee = _closure1_slot11;
            yankee = yankee.IGNORE_SPAM_MESSAGE;
            offset['name'] = yankee;
            yankee = oscard[papara];
            yankee = sierra.bind(tangon)(yankee);
            foxtra = yankee.intl;
            romeon = foxtra.string;
            yankee = oscard[papara];
            yankee = sierra.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.MWOV9P;
            yankee = romeon.bind(foxtra)(yankee);
            offset['label'] = yankee;
            verify[1] = offset;
            offset = {};
            yankee = _closure1_slot11;
            yankee = yankee.PREVIEW_SPAM_MESSAGE;
            offset['name'] = yankee;
            yankee = oscard[papara];
            yankee = sierra.bind(tangon)(yankee);
            foxtra = yankee.intl;
            romeon = foxtra.string;
            yankee = oscard[papara];
            yankee = sierra.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.I6PFLC;
            yankee = romeon.bind(foxtra)(yankee);
            offset['label'] = yankee;
            verify[2] = offset;
            entity['accessibilityActions'] = verify;
            report = function(argFoo) { // Original name: onAccessibilityAction
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    michal = entity.actionName;
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.ACCEPT_SPAM_MESSAGE;
                    if(!(zuuluu !== michal)) { _fun00006_ip = 93; continue _fun00005 }
 31:
                    zuuluu = _closure1_slot11;
                    zuuluu = zuuluu.IGNORE_SPAM_MESSAGE;
                    if(!(zuuluu !== michal)) { _fun00006_ip = 78; continue _fun00005 }
 45:
                    entity = _closure1_slot11;
                    entity = entity.PREVIEW_SPAM_MESSAGE;
                    if(!(entity !== michal)) { _fun00006_ip = 63; continue _fun00005 }
 59:
                    entity = undefined;
                    return entity;
 63:
                    michal = _closure2_slot10;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
 78:
                    michal = _closure2_slot8;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
 93:
                    michal = _closure2_slot9;
                    entity = undefined;
                    michal = michal.bind(entity)();
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
            foxtra = _closure1_slot8;
            romeon = _closure1_slot1;
            yankee = 15;
            yankee = oscard[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            kiloes = backup.channel;
            yankee['channel'] = kiloes;
            backup = backup.user;
            yankee['otherUser'] = backup;
            romeon = foxtra.bind(tangon)(romeon, yankee);
            yankee = new Array(2);
            yankee[0] = romeon;
            backup = _closure1_slot9;
            foxtra = _closure1_slot5;
            romeon = {};
            kiloes = vacuum.actionContainer;
            romeon['style'] = kiloes;
            result = _closure1_slot8;
            kiloes = oscard[sizing];
            kiloes = sierra.bind(tangon)(kiloes);
            output = kiloes.PressableOpacity;
            kiloes = {};
            kiloes['accessibilityRole'] = record;
            limora = oscard[papara];
            limora = sierra.bind(tangon)(limora);
            equals = limora.intl;
            whisks = equals.formatToPlainString;
            oscard = oscard[papara];
            oscard = sierra.bind(tangon)(oscard);
            oscard = oscard.t;
            limora = oscard.6p0yBg;
            sierra = {};
            oscard = null;
            variable36 = oscard == status;
            quebec = undefined;
            if(variable36) { _fun00002_ip = 801; continue _fun00001 }
 792:
            variable36 = status.toString;
            quebec = variable36.bind(status)();
 801:
            sierra['name'] = quebec;
            sierra = whisks.bind(equals)(limora, sierra);
            kiloes['accessibilityLabel'] = sierra;
            kiloes['onPress'] = target;
            kiloes['disabled'] = source;
            sierra = vacuum.actionButton;
            target = new Array(2);
            target[0] = sierra;
            sierra = vacuum.acceptButton;
            target[1] = sierra;
            kiloes['style'] = target;
            if(cntext) { _fun00002_ip = 942; continue _fun00001 }
 854:
            if(config) { _fun00002_ip = 942; continue _fun00001 }
 857:
            if(sequen) { _fun00002_ip = 942; continue _fun00001 }
 860:
            cntext = _closure1_slot8;
            sierra = _closure1_slot1;
            limora = _closure1_slot2;
            target = 16;
            sequen = limora[target];
            config = sierra.bind(tangon)(sequen);
            sequen = {};
            target = limora[target];
            target = sierra.bind(tangon)(target);
            target = target.Sizes;
            target = target.SMALL;
            sequen['size'] = target;
            target = true;
            sequen['disableColor'] = target;
            target = 17;
            target = limora[target];
            target = sierra.bind(tangon)(target);
            sequen['source'] = target;
            sequen = cntext.bind(tangon)(config, sequen);
            _fun00002_ip = 968; continue _fun00001;
 942:
            target = _closure1_slot8;
            cntext = _closure1_slot4;
            config = {};
            sierra = vacuum.activityIndicator;
            config['style'] = sierra;
            sequen = target.bind(tangon)(cntext, config);
 968:
            kiloes['children'] = sequen;
            output = result.bind(tangon)(output, kiloes);
            kiloes = new Array(2);
            kiloes[0] = output;
            result = _closure1_slot8;
            config = _closure1_slot0;
            sequen = _closure1_slot2;
            sizing = sequen[sizing];
            sizing = config.bind(tangon)(sizing);
            output = sizing.PressableOpacity;
            sizing = {};
            sizing['accessibilityRole'] = record;
            record = sequen[papara];
            record = config.bind(tangon)(record);
            cntext = record.intl;
            record = cntext.formatToPlainString;
            sequen = sequen[papara];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.t;
            config = sequen.C9Xe6+;
            sequen = {};
            target = oscard == status;
            papara = undefined;
            if(target) { _fun00002_ip = 1078; continue _fun00001 }
 1069:
            target = status.toString;
            papara = target.bind(status)();
 1078:
            sequen['name'] = papara;
            sequen = record.bind(cntext)(config, sequen);
            sizing['accessibilityLabel'] = sequen;
            sizing['onPress'] = ctrled;
            sizing['disabled'] = source;
            source = vacuum.actionButton;
            sizing['style'] = source;
            if(update) { _fun00002_ip = 1198; continue _fun00001 }
 1113:
            if(echoed) { _fun00002_ip = 1198; continue _fun00001 }
 1116:
            source = _closure1_slot8;
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            ctrled = 16;
            echoed = config[ctrled];
            update = sequen.bind(tangon)(echoed);
            echoed = {};
            ctrled = config[ctrled];
            ctrled = sequen.bind(tangon)(ctrled);
            ctrled = ctrled.Sizes;
            ctrled = ctrled.SMALL;
            echoed['size'] = ctrled;
            ctrled = true;
            echoed['disableColor'] = ctrled;
            ctrled = 18;
            ctrled = config[ctrled];
            ctrled = sequen.bind(tangon)(ctrled);
            echoed['source'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            _fun00002_ip = 1224; continue _fun00001;
 1198:
            ctrled = _closure1_slot8;
            source = _closure1_slot4;
            update = {};
            vacuum = vacuum.activityIndicator;
            update['style'] = vacuum;
            echoed = ctrled.bind(tangon)(source, update);
 1224:
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            kiloes[1] = sizing;
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[1] = romeon;
            report['children'] = yankee;
            verify = offset.bind(tangon)(verify, report);
            report = new Array(2);
            report[0] = verify;
            oscard = null;
            if(option) { _fun00002_ip = 1321; continue _fun00001 }
 1275:
            verify = _closure1_slot8;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 19;
            golfie = offset[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.FormDivider;
            golfie = {'iconPush': true, 'outer': true};
            oscard = verify.bind(tangon)(option, golfie);
 1321:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot4 = golfie;
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    tangon = tangon.FlatList;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'marginTop': 6, 'marginBottom': 10};
    offset = 5;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = romeon;
    tangon['sectionContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': 14, 'marginBottom': 12};
    tangon['rowContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'flex-start', 'height': '100%'};
    tangon['actionContainer'] = verify;
    verify = {'backgroundColor': null, 'tintColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'height': 32, 'width': 32};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.INTERACTIVE_NORMAL;
    verify['tintColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.lg;
    verify['borderRadius'] = romeon;
    tangon['actionButton'] = verify;
    verify = {};
    romeon = 16;
    verify['marginRight'] = romeon;
    tangon['acceptButton'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.md;
    verify['borderRadius'] = romeon;
    tangon['pressableRow'] = verify;
    verify = {'height': 16, 'width': 16};
    tangon['activityIndicator'] = verify;
    verify = {'flex': 1, 'paddingHorizontal': 16, 'alignSelf': 'stretch'};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tangon['list'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'accept-spam-message-request';
    tangon['ACCEPT_SPAM_MESSAGE'] = golfie;
    golfie = 'ignore-spam-message-request';
    tangon['IGNORE_SPAM_MESSAGE'] = golfie;
    golfie = 'preview-spam-message-request';
    tangon['PREVIEW_SPAM_MESSAGE'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/native/spam/SpamMessageList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SpamMessageList
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.goToMessageRequestPreview;
            var _closure2_slot0 = entity;
            entity = _closure1_slot10;
            tangon = undefined;
            option = entity.bind(tangon)();
            var _closure2_slot1 = option;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 20;
            entity = oscard[entity];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            verify = entity.bottom;
            offset = _closure1_slot0;
            entity = 21;
            entity = oscard[entity];
            michal = offset.bind(tangon)(entity);
            entity = michal.useSpamMessageRequestCount;
            entity = entity.bind(michal)();
            var _closure2_slot2 = entity;
            entity = 22;
            entity = oscard[entity];
            entity = zuuluu.bind(tangon)(entity);
            michal = entity.bind(tangon)();
            var _closure2_slot3 = michal;
            entity = 23;
            entity = oscard[entity];
            offset = offset.bind(tangon)(entity);
            entity = offset.useListHasSingleSpamMessageRequest;
            entity = entity.bind(offset)();
            var _closure2_slot4 = entity;
            entity = 24;
            entity = oscard[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = function() {
                zuuluu = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 13;
                michal = golfie[entity];
                entity = undefined;
                option = zuuluu.bind(entity)(michal);
                oscard = option.track;
                michal = _closure1_slot7;
                tangon = michal.SPAM_MESSAGE_REQUESTS_VIEWED;
                michal = {};
                verify = _closure2_slot2;
                michal['num_spam_message_requests'] = verify;
                michal = oscard.bind(option)(tangon, michal);
                michal = 25;
                michal = golfie[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.increment;
                michal = {};
                oscard = _closure1_slot0;
                report = 26;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                report = report.MetricEvents;
                report = report.SPAM_MESSAGE_REQUEST_VIEW;
                michal['name'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = michal.length;
            yankee = 0;
            if(!(yankee !== entity)) { _fun00008_ip = 338; continue _fun00007 }
 175:
            oscard = ['header-section'];
            kiloes = 1;
            output = oscard;
            sizing = michal;
            entity = arraySpread(output, sizing, kiloes);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot6;
            entity = {};
            offset = option.list;
            option = new Array(2);
            option[0] = offset;
            offset = {};
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 28;
            romeon = backup[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = foxtra.isAndroid;
            romeon = romeon.bind(foxtra)();
            yankee = 0;
            if(!romeon) { _fun00008_ip = 261; continue _fun00007 }
 258:
            yankee = verify;
 261:
            offset['marginBottom'] = yankee;
            option[1] = offset;
            entity['style'] = option;
            option = {};
            offset = 0.01;
            option['right'] = offset;
            entity['scrollIndicatorInsets'] = option;
            option = {};
            option['paddingBottom'] = verify;
            verify = 12;
            option['paddingTop'] = verify;
            entity['contentContainerStyle'] = option;
            golfie = function(argFoo) { // Original name: renderItem
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    entity = entity.item;
                    var _closure3_slot0 = entity;
                    tangon = 'string';
                    zuuluu = typeof entity;
                    if(!(tangon !== zuuluu)) { _fun00010_ip = 154; continue _fun00009 }
 28:
                    report = _closure1_slot8;
                    tangon = _closure1_slot12;
                    zuuluu = {};
                    zuuluu['messageRequest'] = entity;
                    michal = function() { // Original name: goToMessageRequestPreview
                        zuuluu = _closure2_slot0;
                        entity = _closure3_slot0;
                        entity = entity.channel;
                        michal = entity.id;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu['goToMessageRequestPreview'] = michal;
                    michal = entity.channel;
                    option = michal.id;
                    golfie = _closure2_slot3;
                    verify = golfie.length;
                    michal = 1;
                    michal = verify - michal;
                    verify = golfie[michal];
                    michal = null;
                    offset = michal == verify;
                    michal = undefined;
                    golfie = undefined;
                    if(offset) { _fun00010_ip = 114; continue _fun00009 }
 104:
                    verify = verify.channel;
                    golfie = verify.id;
 114:
                    golfie = option === golfie;
                    zuuluu['isLastRow'] = golfie;
                    oscard = _closure2_slot4;
                    zuuluu['hasSingleMessageRequest'] = oscard;
                    entity = entity.channel;
                    entity = entity.id;
                    entity = report.bind(michal)(tangon, zuuluu, entity);
                    _fun00010_ip = 314; continue _fun00009;
 154:
                    report = _closure1_slot8;
                    tangon = _closure1_slot5;
                    zuuluu = {};
                    oscard = _closure2_slot1;
                    oscard = oscard.sectionContainer;
                    zuuluu['style'] = oscard;
                    option = _closure1_slot8;
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    michal = 29;
                    oscard = backup[michal];
                    michal = undefined;
                    oscard = offset.bind(michal)(oscard);
                    golfie = oscard.Text;
                    oscard = {'variant': 'eyebrow', 'color': 'header-secondary'};
                    verify = 6;
                    yankee = backup[verify];
                    yankee = offset.bind(michal)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.format;
                    verify = backup[verify];
                    verify = offset.bind(michal)(verify);
                    verify = verify.t;
                    offset = verify.aNh5KS;
                    verify = {};
                    foxtra = _closure2_slot3;
                    foxtra = foxtra.length;
                    verify['count'] = foxtra;
                    verify = yankee.bind(romeon)(offset, verify);
                    oscard['children'] = verify;
                    oscard = option.bind(michal)(golfie, oscard);
                    zuuluu['children'] = oscard;
                    entity = report.bind(michal)(tangon, zuuluu);
 314:
                    return entity;
                }
            };
            entity['renderItem'] = golfie;
            entity['data'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 338:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 27;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            option = _closure1_slot0;
            report = 6;
            oscard = verify[report];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(tangon)(report);
            report = report.t;
            report = report.hasFPT;
            report = oscard.bind(golfie)(report);
            entity['bodyText'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();