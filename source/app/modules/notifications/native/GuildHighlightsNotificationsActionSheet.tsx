// app/modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GuildPill
        _fun90692: for(var _fun90692_ip = 0; ; ) switch(_fun90692_ip) {
 0:
            entity = argFoo;
            offset = entity.guild;
            entity = _closure1_slot14;
            tango = undefined;
            verify = entity.bind(tango)();
            zulu = _closure1_slot12;
            mike = _closure1_slot5;
            entity = {};
            report = verify.guildPill;
            entity['style'] = report;
            romeo = _closure1_slot11;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            foxtrot = 10;
            report = yankee[foxtrot];
            options = golf.bind(tango)(report);
            report = {};
            report['guild'] = offset;
            golf = _closure1_slot0;
            foxtrot = yankee[foxtrot];
            foxtrot = golf.bind(tango)(foxtrot);
            foxtrot = foxtrot.GuildIconSizes;
            foxtrot = foxtrot.SMALL_32;
            report['size'] = foxtrot;
            foxtrot = true;
            report['animate'] = foxtrot;
            options = romeo.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot11;
            oscar = 11;
            oscar = yankee[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            verify = verify.guildName;
            oscar['style'] = verify;
            verify = null;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun90692_ip = 184; continue _fun90692 }
 179:
            verify = offset.name;
 184:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: isFeedbackComplete
        _fun90693: for(var _fun90693_ip = 0; ; ) switch(_fun90693_ip) {
 0:
            entity = argFoo;
            zulu = null;
            if(!(zulu == entity)) { _fun90693_ip = 11; continue _fun90693 }
 9:
            entity = {};
 11:
            tango = entity.rating;
            mike = entity.reason;
            entity = _closure1_slot10;
            entity = entity.GOOD;
            entity = tango === entity;
            if(entity) { _fun90693_ip = 47; continue _fun90693 }
 43:
            entity = zulu != mike;
 47:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: isFeedbackGood
        _fun90694: for(var _fun90694_ip = 0; ; ) switch(_fun90694_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun90694_ip = 11; continue _fun90694 }
 9:
            entity = {};
 11:
            mike = entity.rating;
            entity = _closure1_slot10;
            entity = entity.GOOD;
            entity = mike === entity;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    foxtrot = 4;
    tango = oscar[foxtrot];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.HelpdeskArticles;
    var _closure1_slot8 = golf;
    tango = tango.HighlightSettings;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FeedbackRating;
    var _closure1_slot10 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    offset = 8;
    tango = oscar[offset];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    yankee = 'center';
    verify = {'padding': 24, 'alignItems': 'center', 'justifyContent': 'center'};
    tango['contentContainer'] = verify;
    verify = {'alignItems': 'center', 'paddingBottom': 24};
    tango['header'] = verify;
    verify = {};
    verify['marginBottom'] = foxtrot;
    tango['headerTitle'] = verify;
    verify = {};
    verify['textAlign'] = yankee;
    tango['centerText'] = verify;
    verify = {'marginTop': 16, 'alignItems': 'stretch', 'alignSelf': 'stretch', 'paddingBottom': 16};
    tango['feedback'] = verify;
    verify = {'height': 40, 'textAlign': 'center', 'textAlignVertical': 'center'};
    tango['thanks'] = verify;
    verify = {'flex': 1, 'backgroundColor': null, 'marginVertical': 8, 'padding': 0};
    yankee = 9;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtrot;
    tango['settings'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = oscar[offset];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'padding': 8, 'marginBottom': 16, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.round;
    verify['borderRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.shadows;
    kilo = yankee.SHADOW_LOW;
    sizing = verify;
    yankee = copyDataProperties(sizing, kilo);
    tango['guildPill'] = verify;
    verify = {};
    verify['paddingHorizontal'] = offset;
    tango['guildName'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 27;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SummaryFeedbackActionSheet
        _fun90695: for(var _fun90695_ip = 0; ; ) switch(_fun90695_ip) {
 0:
            mike = argFoo;
            entity = mike.guildId;
            var _closure2_slot0 = entity;
            sizing = mike.feedbackSettings;
            var _closure2_slot1 = sizing;
            mike = _closure1_slot13;
            tango = undefined;
            output = mike.bind(tango)();
            yankee = _closure1_slot4;
            mike = yankee.useRef;
            backup = null;
            oscar = mike.bind(yankee)(backup);
            var _closure2_slot2 = oscar;
            mike = yankee.useState;
            mike = mike.bind(yankee)(tango);
            verify = _closure1_slot3;
            options = 2;
            mike = verify.bind(tango)(mike, options);
            report = 0;
            kilo = mike[report];
            var _closure2_slot3 = kilo;
            zulu = 1;
            mike = mike[zulu];
            var _closure2_slot4 = mike;
            mike = yankee.useState;
            offset = false;
            mike = mike.bind(yankee)(offset);
            mike = verify.bind(tango)(mike, options);
            golf = mike[report];
            var _closure2_slot5 = golf;
            mike = mike[zulu];
            var _closure2_slot6 = mike;
            mike = yankee.useState;
            mike = mike.bind(yankee)(offset);
            mike = verify.bind(tango)(mike, options);
            offset = mike[report];
            mike = mike[zulu];
            var _closure2_slot7 = mike;
            options = yankee.useCallback;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = sizing;
            mike = function(argFoo) {
                _fun90696: for(var _fun90696_ip = 0; ; ) switch(_fun90696_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot5;
                    if(mike) { _fun90696_ip = 34; continue _fun90696 }
 13:
                    report = null;
                    oscar = report == tango;
                    zulu = undefined;
                    if(oscar) { _fun90696_ip = 30; continue _fun90696 }
 24:
                    zulu = tango.rating;
 30:
                    mike = report == zulu;
 34:
                    if(mike) { _fun90696_ip = 128; continue _fun90696 }
 37:
                    mike = _closure2_slot1;
                    report = null;
                    mike = report == mike;
                    if(mike) { _fun90696_ip = 64; continue _fun90696 }
 50:
                    zulu = _closure2_slot1;
                    zulu = zulu.onFeedbackCompleted;
                    mike = report == zulu;
 64:
                    if(mike) { _fun90696_ip = 82; continue _fun90696 }
 67:
                    zulu = _closure2_slot1;
                    mike = zulu.onFeedbackCompleted;
                    mike = mike.bind(zulu)(tango);
 82:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 12;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.handleSurveyCleanup;
                    mike = mike.bind(tango)();
                    mike = _closure2_slot6;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 128:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(yankee)(mike, zulu);
            var _closure2_slot8 = mike;
            verify = yankee.useEffect;
            options = new Array(2);
            options[0] = kilo;
            options[1] = mike;
            zulu = function() {
                entity = function() {
                    zulu = _closure2_slot8;
                    mike = _closure2_slot3;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            zulu = verify.bind(yankee)(zulu, options);
            options = yankee.useCallback;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function(argFoo) {
                _fun90699: for(var _fun90699_ip = 0; ; ) switch(_fun90699_ip) {
 0:
                    report = argFoo;
                    mike = _closure2_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)(report);
                    tango = _closure1_slot16;
                    tango = tango.bind(entity)(report);
                    if(tango) { _fun90699_ip = 45; continue _fun90699 }
 32:
                    oscar = _closure2_slot7;
                    tango = true;
                    tango = oscar.bind(entity)(tango);
                    _fun90699_ip = 65; continue _fun90699;
 45:
                    tango = _closure2_slot8;
                    tango = tango.bind(entity)(report);
                    tango = _closure2_slot7;
                    zulu = false;
                    zulu = tango.bind(entity)(zulu);
 65:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 12;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.handleSurveyCleanup;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            options = options.bind(yankee)(mike, zulu);
            verify = yankee.useCallback;
            zulu = function() {
                _fun90700: for(var _fun90700_ip = 0; ; ) switch(_fun90700_ip) {
 0:
                    mike = _closure2_slot2;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun90700_ip = 28; continue _fun90700 }
 18:
                    mike = zulu.expandActionSheet;
                    mike = mike.bind(zulu)();
 28:
                    zulu = _closure2_slot7;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            mike = new Array(0);
            verify = verify.bind(yankee)(zulu, mike);
            zulu = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 13;
            mike = yankee[mike];
            romeo = zulu.bind(tango)(mike);
            yankee = romeo.useStateFromStoresObject;
            mike = _closure1_slot7;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot6;
            zulu[1] = mike;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                report = _closure1_slot6;
                zulu = report.getGuild;
                tango = _closure2_slot0;
                zulu = zulu.bind(report)(tango);
                entity['guild'] = zulu;
                zulu = _closure1_slot7;
                mike = zulu.isMuted;
                mike = mike.bind(zulu)(tango);
                entity['muted'] = mike;
                mike = zulu.getNotifyHighlights;
                mike = mike.bind(zulu)(tango);
                entity['notifyHighlights'] = mike;
                return entity;
            };
            entity = yankee.bind(romeo)(zulu, entity, mike);
            update = entity.guild;
            sequence = entity.muted;
            record = entity.notifyHighlights;
            mike = backup == sizing;
            entity = undefined;
            if(mike) { _fun90695_ip = 375; continue _fun90695 }
 369:
            entity = sizing.reasons;
 375:
            entity = backup != entity;
            control = null;
            if(!entity) { _fun90695_ip = 721; continue _fun90695 }
 387:
            mike = _closure1_slot16;
            mike = mike.bind(tango)(kilo);
            yankee = _closure1_slot11;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            if(mike) { _fun90695_ip = 600; continue _fun90695 }
 414:
            mike = 15;
            mike = vacuum[mike];
            mike = source.bind(tango)(mike);
            zulu = mike.FeedbackForm;
            mike = {};
            romeo = 14;
            result = vacuum[romeo];
            result = source.bind(tango)(result);
            context = result.intl;
            config = context.string;
            result = vacuum[romeo];
            result = source.bind(tango)(result);
            result = result.t;
            result = result.Yzl7Oj;
            result = config.bind(context)(result);
            mike['ratingsBodyLabel'] = result;
            result = vacuum[romeo];
            result = source.bind(tango)(result);
            config = result.intl;
            result = config.string;
            romeo = vacuum[romeo];
            romeo = source.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.g1q5fn;
            romeo = result.bind(config)(romeo);
            mike['reasonsHeaderLabel'] = romeo;
            result = backup == sizing;
            romeo = undefined;
            if(result) { _fun90695_ip = 550; continue _fun90695 }
 544:
            romeo = sizing.reasons;
 550:
            if(!(backup == romeo)) { _fun90695_ip = 558; continue _fun90695 }
 554:
            romeo = new Array(0);
 558:
            mike['reasons'] = romeo;
            if(!(backup == sizing)) { _fun90695_ip = 576; continue _fun90695 }
 567:
            romeo = function() {
                entity = undefined;
                return entity;
            };
            _fun90695_ip = 582; continue _fun90695;
 576:
            romeo = sizing.onFeedbackShown;
 582:
            mike['trackOpen'] = romeo;
            mike['onFeedbackChanged'] = options;
            mike = yankee.bind(tango)(zulu, mike);
            _fun90695_ip = 718; continue _fun90695;
 600:
            zulu = 11;
            zulu = vacuum[zulu];
            zulu = source.bind(tango)(zulu);
            options = zulu.Text;
            zulu = {'style': null, 'variant': 'heading-md/semibold', 'color': 'text-brand'};
            sizing = output.centerText;
            romeo = new Array(2);
            romeo[0] = sizing;
            sizing = output.thanks;
            romeo[1] = sizing;
            zulu['style'] = romeo;
            romeo = 14;
            sizing = vacuum[romeo];
            sizing = source.bind(tango)(sizing);
            result = sizing.intl;
            sizing = result.string;
            romeo = vacuum[romeo];
            romeo = source.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.kZbFIC;
            romeo = sizing.bind(result)(romeo);
            zulu['children'] = romeo;
            mike = yankee.bind(tango)(options, zulu);
 718:
            control = mike;
 721:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 16;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            zulu = mike.bottom;
            report = 0;
            if(!entity) { _fun90695_ip = 767; continue _fun90695 }
 755:
            mike = 148;
            if(!golf) { _fun90695_ip = 764; continue _fun90695 }
 761:
            mike = 64;
 764:
            report = mike;
 767:
            mike = 316;
            mike = mike + report;
            report = mike + zulu;
            golf = !entity;
            if(!entity) { _fun90695_ip = 796; continue _fun90695 }
 787:
            entity = _closure1_slot16;
            golf = entity.bind(tango)(kilo);
 796:
            if(golf) { _fun90695_ip = 818; continue _fun90695 }
 799:
            mike = backup == kilo;
            entity = undefined;
            if(mike) { _fun90695_ip = 814; continue _fun90695 }
 808:
            entity = kilo.rating;
 814:
            golf = backup == entity;
 818:
            zulu = _closure1_slot11;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 17;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {};
            options = true;
            entity['scrollable'] = options;
            entity['ref'] = oscar;
            oscar = undefined;
            if(!golf) { _fun90695_ip = 869; continue _fun90695 }
 866:
            oscar = report;
 869:
            entity['contentHeight'] = oscar;
            entity['startHeight'] = report;
            golf = _closure1_slot11;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 18;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheetScrollView;
            report = {};
            options = output.contentContainer;
            report['contentContainerStyle'] = options;
            options = undefined;
            if(!offset) { _fun90695_ip = 930; continue _fun90695 }
 927:
            options = verify;
 930:
            report['onLayout'] = options;
            offset = _closure1_slot12;
            verify = _closure1_slot5;
            options = {};
            yankee = {};
            romeo = output.header;
            yankee['style'] = romeo;
            result = _closure1_slot11;
            sizing = _closure1_slot15;
            romeo = {};
            romeo['guild'] = update;
            romeo = result.bind(tango)(sizing, romeo);
            sizing = new Array(3);
            sizing[0] = romeo;
            source = _closure1_slot11;
            context = _closure1_slot0;
            lima = _closure1_slot2;
            romeo = 11;
            romeo = lima[romeo];
            romeo = context.bind(tango)(romeo);
            result = romeo.Text;
            romeo = {'style': null, 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            update = output.headerTitle;
            romeo['style'] = update;
            update = 14;
            vacuum = lima[update];
            vacuum = context.bind(tango)(vacuum);
            papa = vacuum.intl;
            config = papa.string;
            vacuum = lima[update];
            vacuum = context.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.o8Bypq;
            vacuum = config.bind(papa)(vacuum);
            romeo['children'] = vacuum;
            romeo = source.bind(tango)(result, romeo);
            sizing[1] = romeo;
            vacuum = _closure1_slot11;
            romeo = 19;
            result = lima[romeo];
            result = context.bind(tango)(result);
            source = result.TextWithIOSLinkWorkaround;
            result = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            config = output.centerText;
            result['style'] = config;
            config = lima[update];
            config = context.bind(tango)(config);
            target = config.intl;
            papa = target.format;
            config = lima[update];
            config = context.bind(tango)(config);
            config = config.t;
            context = config.enfuur;
            config = {};
            sierra = _closure1_slot1;
            status = 20;
            status = lima[status];
            lima = sierra.bind(tango)(status);
            sierra = lima.getArticleURL;
            status = _closure1_slot8;
            status = status.HIGHLIGHTS_NOTIFICATIONS;
            status = sierra.bind(lima)(status);
            config['helpUrl'] = status;
            config = papa.bind(target)(context, config);
            result['children'] = config;
            result = vacuum.bind(tango)(source, result);
            sizing[2] = result;
            yankee['children'] = sizing;
            sizing = offset.bind(tango)(verify, yankee);
            yankee = new Array(4);
            yankee[0] = sizing;
            backup = backup != control;
            if(!backup) { _fun90695_ip = 1327; continue _fun90695 }
 1276:
            source = _closure1_slot11;
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            sizing = 21;
            sizing = vacuum[sizing];
            sizing = result.bind(tango)(sizing);
            result = sizing.View;
            sizing = {};
            vacuum = output.feedback;
            sizing['style'] = vacuum;
            sizing['children'] = control;
            backup = source.bind(tango)(result, sizing);
 1327:
            yankee[1] = backup;
            backup = _closure1_slot17;
            kilo = backup.bind(tango)(kilo);
            backup = !kilo;
            if(kilo) { _fun90695_ip = 1526; continue _fun90695 }
 1349:
            result = _closure1_slot11;
            target = _closure1_slot0;
            config = _closure1_slot2;
            kilo = 22;
            kilo = config[kilo];
            kilo = target.bind(tango)(kilo);
            sizing = kilo.Card;
            kilo = {'style': null, 'shadow': 'low', 'border': 'subtle'};
            source = output.settings;
            kilo['style'] = source;
            vacuum = _closure1_slot11;
            source = 23;
            source = config[source];
            source = target.bind(tango)(source);
            control = source.FormSwitchRow;
            source = {};
            source['disabled'] = sequence;
            context = config[update];
            context = target.bind(tango)(context);
            papa = context.intl;
            context = papa.string;
            config = config[update];
            config = target.bind(tango)(config);
            config = config.t;
            config = config.MVi7LS;
            config = context.bind(papa)(config);
            source['label'] = config;
            if(sequence) { _fun90695_ip = 1494; continue _fun90695 }
 1480:
            config = _closure1_slot9;
            config = config.DISABLED;
            sequence = record === config;
 1494:
            source['value'] = sequence;
            sequence = function(argFoo) { // Original name: onValueChange
                _fun90703: for(var _fun90703_ip = 0; ; ) switch(_fun90703_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 24;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateGuildNotificationSettings;
                    tango = _closure2_slot0;
                    zulu = {};
                    verify = _closure1_slot9;
                    if(mike) { _fun90703_ip = 58; continue _fun90703 }
 50:
                    options = verify.ENABLED;
                    _fun90703_ip = 64; continue _fun90703;
 58:
                    options = verify.DISABLED;
 64:
                    zulu['notify_highlights'] = options;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 25;
                    golf = verify[golf];
                    golf = options.bind(entity)(golf);
                    options = golf.NotificationLabel;
                    golf = options.highlights;
                    mike = !mike;
                    mike = golf.bind(options)(mike);
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            source['onValueChange'] = sequence;
            source = vacuum.bind(tango)(control, source);
            kilo['children'] = source;
            backup = result.bind(tango)(sizing, kilo);
 1526:
            yankee[2] = backup;
            backup = _closure1_slot11;
            sizing = _closure1_slot0;
            kilo = _closure1_slot2;
            romeo = kilo[romeo];
            romeo = sizing.bind(tango)(romeo);
            foxtrot = romeo.TextWithIOSLinkWorkaround;
            romeo = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            output = output.centerText;
            romeo['style'] = output;
            output = kilo[update];
            output = sizing.bind(tango)(output);
            result = output.intl;
            output = result.format;
            kilo = kilo[update];
            kilo = sizing.bind(tango)(kilo);
            kilo = kilo.t;
            sizing = kilo.F9rfLS;
            kilo = {};
            echo = function() { // Original name: notifSettingsHook
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 26;
                mike = tango[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                mike = report.hideActionSheet;
                mike = mike.bind(report)();
                mike = 24;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.open;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            kilo['notifSettingsHook'] = echo;
            kilo = output.bind(result)(sizing, kilo);
            romeo['children'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[3] = romeo;
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();