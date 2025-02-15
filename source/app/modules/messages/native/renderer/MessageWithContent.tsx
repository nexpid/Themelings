// app/modules/messages/native/renderer/MessageWithContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: DataMessage
        zulu = argFoo;
        report = zulu.children;
        entity = null;
        mike = Object.create(entity);
        entity = 0;
        mike['children'] = entity;
        verify = {};
        options = zulu;
        golf = mike;
        oscar = copyDataProperties(verify, options, golf);
        tango = _closure1_slot9;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 7;
        entity = zulu[entity];
        zulu = undefined;
        entity = mike.bind(zulu)(entity);
        mike = entity.DataWithChildren;
        entity = {};
        entity['rowProps'] = oscar;
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: MessageRowWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = zulu.row;
            oscar = zulu.children;
            result = entity.message;
            var _closure2_slot0 = result;
            sizing = entity.isEditing;
            control = entity.separatorBefore;
            papa = entity.canAddNewReactions;
            sierra = entity.reactionsTheme;
            zulu = entity.highlightJumpedOnceOnly;
            tango = undefined;
            source = tango !== zulu;
            if(!source) { _fun00002_ip = 67; continue _fun00001 }
 64:
            source = zulu;
 67:
            update = entity.messageFrame;
            echo = entity.truncation;
            vacuum = entity.renderContentOnly;
            backup = entity.addReactionLabel;
            zulu = entity.alwaysShowAddReaction;
            foxtrot = tango !== zulu;
            if(!foxtrot) { _fun00002_ip = 107; continue _fun00001 }
 104:
            foxtrot = zulu;
 107:
            options = entity.overrideBackgroundHighlight;
            romeo = entity.canReply;
            yankee = entity.canEdit;
            report = _closure1_slot3;
            zulu = report.useContext;
            verify = _closure1_slot1;
            record = _closure1_slot2;
            entity = 8;
            entity = record[entity];
            entity = verify.bind(tango)(entity);
            entity = zulu.bind(report)(entity);
            verify = _closure1_slot0;
            zulu = 9;
            zulu = record[zulu];
            report = verify.bind(tango)(zulu);
            zulu = report.useMessageRendererTheme;
            output = zulu.bind(report)();
            offset = _closure1_slot3;
            report = offset.useContext;
            zulu = 10;
            zulu = record[zulu];
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.RenderMessageOptionsContext;
            zulu = report.bind(offset)(zulu);
            offset = zulu.enableSwipeActions;
            kilo = _closure1_slot3;
            report = kilo.useContext;
            zulu = 11;
            zulu = record[zulu];
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.JumpContext;
            report = report.bind(kilo)(zulu);
            target = report.scrollToMessageId;
            kilo = report.jumpTargetId;
            status = report.jumpType;
            zulu = report.jumpSequenceId;
            config = report.focusTargetId;
            report = result.id;
            sequence = report === kilo;
            report = 12;
            kilo = record[report];
            whiskey = verify.bind(tango)(kilo);
            lima = whiskey.useStateFromStores;
            kilo = _closure1_slot4;
            context = new Array(1);
            context[0] = kilo;
            kilo = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            context = lima.bind(whiskey)(context, kilo);
            kilo = record[report];
            equality = verify.bind(tango)(kilo);
            whiskey = equality.useStateFromStores;
            kilo = _closure1_slot6;
            lima = new Array(1);
            lima[0] = kilo;
            kilo = function() {
                zulu = _closure1_slot6;
                mike = zulu.getMessage;
                entity = _closure2_slot0;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            kilo = whiskey.bind(equality)(lima, kilo);
            report = record[report];
            record = verify.bind(tango)(report);
            verify = record.useStateFromStores;
            lima = _closure1_slot5;
            report = new Array(1);
            report[0] = lima;
            mike = function() {
                entity = _closure1_slot5;
                entity = entity.gradientPreset;
                return entity;
            };
            record = verify.bind(record)(report, mike);
            report = {};
            mike = undefined;
            if(!sequence) { _fun00002_ip = 430; continue _fun00001 }
 427:
            mike = zulu;
 430:
            report['_jumpSequenceId'] = mike;
            verify = null;
            if(!(verify == entity)) { _fun00002_ip = 471; continue _fun00001 }
 443:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 13;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            zulu = entity.Message;
            _fun00002_ip = 475; continue _fun00001;
 471:
            zulu = _closure1_slot12;
 475:
            mike = _closure1_slot9;
            entity = {};
            entity['canAddNewReactions'] = papa;
            quebec = _closure1_slot0;
            lima = _closure1_slot2;
            papa = 14;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            variable36 = whiskey.intl;
            equality = variable36.string;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.lfIHs7;
            whiskey = equality.bind(variable36)(whiskey);
            entity['addNewReactionAccessibilityLabel'] = whiskey;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            variable36 = whiskey.intl;
            equality = variable36.string;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.Kfcszs;
            whiskey = equality.bind(variable36)(whiskey);
            entity['addNewBurstReactionAccessibilityLabel'] = whiskey;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            variable36 = whiskey.intl;
            equality = variable36.string;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.5IEsGx;
            whiskey = equality.bind(variable36)(whiskey);
            entity['replyAccessibilityLabel'] = whiskey;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            variable36 = whiskey.intl;
            equality = variable36.string;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.I3ltXF;
            whiskey = equality.bind(variable36)(whiskey);
            entity['forwardAccessibilityLabel'] = whiskey;
            whiskey = lima[papa];
            whiskey = quebec.bind(tango)(whiskey);
            equality = whiskey.intl;
            whiskey = equality.string;
            lima = lima[papa];
            lima = quebec.bind(tango)(lima);
            lima = lima.t;
            lima = lima.rBIGBA;
            lima = whiskey.bind(equality)(lima);
            entity['threadAccessibilityLabel'] = lima;
            entity['reactionsTheme'] = sierra;
            record = verify != record;
            entity['usingGradientTheme'] = record;
            record = result.id;
            record = record === target;
            entity['scrollTo'] = record;
            record = result.id;
            record = record === target;
            if(!record) { _fun00002_ip = 824; continue _fun00001 }
 782:
            if(context) { _fun00002_ip = 821; continue _fun00001 }
 785:
            sierra = _closure1_slot0;
            lima = _closure1_slot2;
            target = 15;
            target = lima[target];
            target = sierra.bind(tango)(target);
            target = target.JumpTypes;
            target = target.INSTANT;
            context = status === target;
 821:
            record = !context;
 824:
            entity['animated'] = record;
            entity['jumped'] = sequence;
            sequence = result.id;
            sequence = sequence === config;
            entity['focused'] = sequence;
            context = _closure1_slot0;
            sequence = _closure1_slot2;
            config = sequence[papa];
            config = context.bind(tango)(config);
            record = config.intl;
            config = record.string;
            sequence = sequence[papa];
            sequence = context.bind(tango)(sequence);
            sequence = sequence.t;
            sequence = sequence.IOS/dX;
            sequence = config.bind(record)(sequence);
            entity['highlightLabel'] = sequence;
            entity['renderContentOnly'] = vacuum;
            entity['separatorBefore'] = control;
            entity['highlightJumpedOnceOnly'] = source;
            entity['messageFrame'] = update;
            entity['truncation'] = echo;
            entity['addReactionLabel'] = backup;
            entity['alwaysShowAddReaction'] = foxtrot;
            if(!(verify == options)) { _fun00002_ip = 996; continue _fun00001 }
 944:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            verify = 16;
            verify = backup[verify];
            backup = foxtrot.bind(tango)(verify);
            foxtrot = backup.createBackgroundHighlight;
            verify = {};
            verify['message'] = result;
            verify['theme'] = output;
            verify['isEditing'] = sizing;
            verify['isAutomodBlockedMessage'] = kilo;
            options = foxtrot.bind(backup)(verify);
 996:
            entity['backgroundHighlight'] = options;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 16;
            golf = verify[golf];
            verify = options.bind(tango)(golf);
            options = verify.createSwipeActions;
            golf = offset;
            if(!offset) { _fun00002_ip = 1036; continue _fun00001 }
 1033:
            golf = romeo;
 1036:
            if(!offset) { _fun00002_ip = 1042; continue _fun00001 }
 1039:
            offset = yankee;
 1042:
            golf = options.bind(verify)(golf, offset);
            entity['swipeActions'] = golf;
            variable38 = entity;
            variable37 = report;
            report = copyDataProperties(variable38, variable37);
            report = 'children';
            entity[report] = oscar;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RowType;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageFlags;
    var _closure1_slot8 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot11 = tango;
    tango = 37;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/MessageWithContent.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: MessageWithContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.row;
            update = entity.messageContent;
            golf = _closure1_slot3;
            oscar = golf.useContext;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            tango = 10;
            report = mike[tango];
            tango = undefined;
            report = zulu.bind(tango)(report);
            report = report.RenderMessageOptionsContext;
            report = oscar.bind(golf)(report);
            sizing = report.renderCodedLinks;
            output = report.renderGiftCode;
            kilo = report.renderActivityInstanceEmbed;
            foxtrot = report.renderActivityInviteEmbed;
            result = report.renderThreadEmbeds;
            offset = report.renderReplies;
            romeo = report.renderPolls;
            golf = _closure1_slot3;
            oscar = golf.useContext;
            yankee = _closure1_slot1;
            verify = 8;
            report = mike[verify];
            report = yankee.bind(tango)(report);
            report = oscar.bind(golf)(report);
            mike = mike[verify];
            mike = zulu.bind(tango)(mike);
            mike = mike.NestedMessageType;
            mike = mike.REPLIED_MESSAGE;
            echo = report === mike;
            if(echo) { _fun00004_ip = 195; continue _fun00003 }
 162:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[verify];
            mike = zulu.bind(tango)(mike);
            mike = mike.NestedMessageType;
            mike = mike.THREAD_EMBED;
            echo = report === mike;
 195:
            backup = options.message;
            mike = options.canShowImages;
            yankee = tango === mike;
            if(yankee) { _fun00004_ip = 216; continue _fun00003 }
 213:
            yankee = mike;
 216:
            mike = options.renderContentOnly;
            control = options.pushFeedbackType;
            golf = _closure1_slot10;
            oscar = _closure1_slot0;
            source = _closure1_slot2;
            zulu = 7;
            zulu = source[zulu];
            zulu = oscar.bind(tango)(zulu);
            oscar = zulu.DataWithChildren;
            zulu = {};
            source = 'message';
            zulu['keyPath'] = source;
            zulu['rowProps'] = update;
            mike = !mike;
            if(!mike) { _fun00004_ip = 283; continue _fun00003 }
 280:
            mike = offset;
 283:
            if(!mike) { _fun00004_ip = 327; continue _fun00003 }
 286:
            update = backup.type;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            offset = 17;
            offset = vacuum[offset];
            offset = source.bind(tango)(offset);
            offset = offset.MessageTypes;
            offset = offset.REPLY;
            mike = update === offset;
 327:
            if(!mike) { _fun00004_ip = 366; continue _fun00003 }
 330:
            source = _closure1_slot9;
            update = _closure1_slot1;
            vacuum = _closure1_slot2;
            offset = 18;
            offset = vacuum[offset];
            update = update.bind(tango)(offset);
            offset = {};
            offset['message'] = backup;
            mike = source.bind(tango)(update, offset);
 366:
            offset = new Array(17);
            offset[0] = mike;
            mike = !echo;
            if(echo) { _fun00004_ip = 383; continue _fun00003 }
 380:
            mike = result;
 383:
            if(!mike) { _fun00004_ip = 407; continue _fun00003 }
 386:
            echo = backup.hasFlag;
            result = _closure1_slot8;
            result = result.HAS_THREAD;
            mike = echo.bind(backup)(result);
 407:
            if(!mike) { _fun00004_ip = 446; continue _fun00003 }
 410:
            update = _closure1_slot9;
            echo = _closure1_slot1;
            source = _closure1_slot2;
            result = 19;
            result = source[result];
            echo = echo.bind(tango)(result);
            result = {};
            result['message'] = backup;
            mike = update.bind(tango)(echo, result);
 446:
            offset[1] = mike;
            mike = null;
            result = mike != control;
            if(!result) { _fun00004_ip = 500; continue _fun00003 }
 459:
            source = _closure1_slot9;
            update = _closure1_slot1;
            vacuum = _closure1_slot2;
            echo = 20;
            echo = vacuum[echo];
            update = update.bind(tango)(echo);
            echo = {};
            echo['message'] = backup;
            echo['pushFeedbackType'] = control;
            result = source.bind(tango)(update, echo);
 500:
            offset[2] = result;
            echo = backup.hasFlag;
            result = _closure1_slot8;
            result = result.EPHEMERAL;
            result = echo.bind(backup)(result);
            if(!result) { _fun00004_ip = 564; continue _fun00003 }
 528:
            source = _closure1_slot9;
            update = _closure1_slot1;
            control = _closure1_slot2;
            echo = 21;
            echo = control[echo];
            update = update.bind(tango)(echo);
            echo = {};
            echo['message'] = backup;
            result = source.bind(tango)(update, echo);
 564:
            offset[3] = result;
            if(!output) { _fun00004_ip = 607; continue _fun00003 }
 571:
            update = _closure1_slot9;
            echo = _closure1_slot1;
            source = _closure1_slot2;
            result = 22;
            result = source[result];
            echo = echo.bind(tango)(result);
            result = {};
            result['message'] = backup;
            output = update.bind(tango)(echo, result);
 607:
            offset[4] = output;
            if(!sizing) { _fun00004_ip = 650; continue _fun00003 }
 614:
            echo = _closure1_slot9;
            result = _closure1_slot1;
            update = _closure1_slot2;
            output = 23;
            output = update[output];
            result = result.bind(tango)(output);
            output = {};
            output['message'] = backup;
            sizing = echo.bind(tango)(result, output);
 650:
            offset[5] = sizing;
            if(!kilo) { _fun00004_ip = 667; continue _fun00003 }
 657:
            sizing = backup.activityInstance;
            kilo = mike != sizing;
 667:
            if(!kilo) { _fun00004_ip = 726; continue _fun00003 }
 670:
            sizing = backup.interaction;
            result = mike == sizing;
            output = undefined;
            if(result) { _fun00004_ip = 690; continue _fun00003 }
 685:
            output = sizing.type;
 690:
            result = _closure1_slot0;
            echo = _closure1_slot2;
            sizing = 24;
            sizing = echo[sizing];
            sizing = result.bind(tango)(sizing);
            sizing = sizing.InteractionTypes;
            sizing = sizing.APPLICATION_COMMAND;
            kilo = output === sizing;
 726:
            if(!kilo) { _fun00004_ip = 765; continue _fun00003 }
 729:
            result = _closure1_slot9;
            output = _closure1_slot1;
            echo = _closure1_slot2;
            sizing = 25;
            sizing = echo[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            sizing['message'] = backup;
            kilo = result.bind(tango)(output, sizing);
 765:
            offset[6] = kilo;
            if(!foxtrot) { _fun00004_ip = 782; continue _fun00003 }
 772:
            kilo = backup.author;
            foxtrot = mike != kilo;
 782:
            if(!foxtrot) { _fun00004_ip = 795; continue _fun00003 }
 785:
            kilo = backup.activity;
            foxtrot = mike != kilo;
 795:
            if(!foxtrot) { _fun00004_ip = 845; continue _fun00003 }
 798:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kilo = 26;
            kilo = result[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            kilo['message'] = backup;
            result = backup.activity;
            kilo['activity'] = result;
            foxtrot = output.bind(tango)(sizing, kilo);
 845:
            offset[7] = foxtrot;
            result = _closure1_slot9;
            kilo = _closure1_slot1;
            output = _closure1_slot2;
            foxtrot = 27;
            foxtrot = output[foxtrot];
            sizing = kilo.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['message'] = backup;
            foxtrot = result.bind(tango)(sizing, foxtrot);
            offset[8] = foxtrot;
            sizing = _closure1_slot9;
            foxtrot = 28;
            foxtrot = output[foxtrot];
            kilo = kilo.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['message'] = backup;
            foxtrot = sizing.bind(tango)(kilo, foxtrot);
            offset[9] = foxtrot;
            kilo = backup.id;
            foxtrot = backup.channel_id;
            foxtrot = kilo === foxtrot;
            if(!foxtrot) { _fun00004_ip = 974; continue _fun00003 }
 938:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kilo = 29;
            kilo = result[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            kilo['message'] = backup;
            foxtrot = output.bind(tango)(sizing, kilo);
 974:
            offset[10] = foxtrot;
            sizing = backup.type;
            output = _closure1_slot0;
            foxtrot = _closure1_slot2;
            kilo = 17;
            foxtrot = foxtrot[kilo];
            foxtrot = output.bind(tango)(foxtrot);
            foxtrot = foxtrot.MessageTypes;
            foxtrot = foxtrot.PREMIUM_REFERRAL;
            foxtrot = sizing === foxtrot;
            if(!foxtrot) { _fun00004_ip = 1058; continue _fun00003 }
 1022:
            result = _closure1_slot9;
            output = _closure1_slot1;
            echo = _closure1_slot2;
            sizing = 30;
            sizing = echo[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            sizing['message'] = backup;
            foxtrot = result.bind(tango)(output, sizing);
 1058:
            offset[11] = foxtrot;
            if(!yankee) { _fun00004_ip = 1101; continue _fun00003 }
 1065:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            foxtrot = 31;
            foxtrot = result[foxtrot];
            sizing = sizing.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['message'] = backup;
            yankee = output.bind(tango)(sizing, foxtrot);
 1101:
            offset[12] = yankee;
            sizing = _closure1_slot9;
            foxtrot = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 32;
            yankee = output[yankee];
            foxtrot = foxtrot.bind(tango)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = sizing.bind(tango)(foxtrot, yankee);
            offset[13] = yankee;
            yankee = backup.isPoll;
            foxtrot = yankee.bind(backup)();
            yankee = null;
            if(!foxtrot) { _fun00004_ip = 1201; continue _fun00003 }
 1160:
            yankee = null;
            if(!romeo) { _fun00004_ip = 1201; continue _fun00003 }
 1165:
            sizing = _closure1_slot9;
            foxtrot = _closure1_slot1;
            output = _closure1_slot2;
            romeo = 33;
            romeo = output[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            romeo['message'] = backup;
            yankee = sizing.bind(tango)(foxtrot, romeo);
 1201:
            offset[14] = yankee;
            foxtrot = backup.type;
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[kilo];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.MessageTypes;
            romeo = yankee.VOICE_HANGOUT_INVITE;
            yankee = null;
            if(!(foxtrot === romeo)) { _fun00004_ip = 1281; continue _fun00003 }
 1245:
            kilo = _closure1_slot9;
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            romeo = 34;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(tango)(romeo);
            romeo = {};
            romeo['message'] = backup;
            yankee = kilo.bind(tango)(foxtrot, romeo);
 1281:
            offset[15] = yankee;
            foxtrot = _closure1_slot9;
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            yankee = 35;
            yankee = kilo[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[16] = yankee;
            zulu['children'] = offset;
            golf = golf.bind(tango)(oscar, zulu);
            mike = mike != report;
            if(!mike) { _fun00004_ip = 1375; continue _fun00003 }
 1342:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.NestedMessageType;
            zulu = zulu.BLOCKED_MESSAGE;
            mike = report !== zulu;
 1375:
            report = golf;
            if(mike) { _fun00004_ip = 1406; continue _fun00003 }
 1381:
            oscar = _closure1_slot9;
            zulu = _closure1_slot13;
            mike = {};
            mike['row'] = options;
            mike['children'] = golf;
            report = oscar.bind(tango)(zulu, mike);
 1406:
            zulu = _closure1_slot9;
            mike = _closure1_slot11;
            entity = {};
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: generateMessageRowData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            zulu = argBar;
            sizing = verify.changeType;
            yankee = verify.message;
            sierra = verify.roleStyle;
            status = verify.isFirst;
            foxtrot = verify.isEditing;
            output = verify.separatorBefore;
            vacuum = verify.scrollTo;
            kilo = verify.animated;
            golf = verify.canAddNewReactions;
            sequence = verify.reactionsTheme;
            source = verify.jumped;
            update = verify.focused;
            entity = verify.isSystemDM;
            oscar = undefined;
            papa = oscar !== entity;
            if(!papa) { _fun00006_ip = 95; continue _fun00005 }
 92:
            papa = entity;
 95:
            entity = verify.canShowImages;
            target = oscar === entity;
            if(target) { _fun00006_ip = 111; continue _fun00005 }
 108:
            target = entity;
 111:
            entity = verify.highlightJumpedOnceOnly;
            backup = oscar !== entity;
            if(!backup) { _fun00006_ip = 127; continue _fun00005 }
 124:
            backup = entity;
 127:
            romeo = verify.messageFrame;
            offset = verify.truncation;
            result = verify.renderContentOnly;
            options = verify.addReactionLabel;
            context = verify.pushFeedbackType;
            entity = verify.alwaysShowAddReaction;
            report = oscar !== entity;
            if(!report) { _fun00006_ip = 173; continue _fun00005 }
 170:
            report = entity;
 173:
            tango = verify.overrideBackgroundHighlight;
            record = verify.showContentInventoryEntryFallbackEmbed;
            entity = {};
            echo = _closure1_slot7;
            echo = echo.MESSAGE;
            entity['type'] = echo;
            config = _closure1_slot1;
            echo = _closure1_slot2;
            control = 36;
            control = echo[control];
            config = config.bind(oscar)(control);
            control = {};
            control['options'] = zulu;
            control['message'] = yankee;
            control['roleStyle'] = sierra;
            control['isFirst'] = status;
            control['isEditing'] = foxtrot;
            control['canShowImages'] = target;
            control['isSystemDM'] = papa;
            papa = false;
            control['isInlineReplyPreview'] = papa;
            control['pushFeedbackType'] = context;
            control['renderContentOnly'] = result;
            control['showContentInventoryEntryFallbackEmbed'] = record;
            control = config.bind(oscar)(control);
            entity['message'] = control;
            entity['canAddNewReactions'] = golf;
            control = _closure1_slot0;
            golf = 14;
            config = echo[golf];
            config = control.bind(oscar)(config);
            context = config.intl;
            record = context.string;
            config = echo[golf];
            config = control.bind(oscar)(config);
            config = config.t;
            config = config.lfIHs7;
            config = record.bind(context)(config);
            entity['addNewReactionAccessibilityLabel'] = config;
            config = echo[golf];
            config = control.bind(oscar)(config);
            context = config.intl;
            record = context.string;
            config = echo[golf];
            config = control.bind(oscar)(config);
            config = config.t;
            config = config.Kfcszs;
            config = record.bind(context)(config);
            entity['addNewBurstReactionAccessibilityLabel'] = config;
            entity['reactionsTheme'] = sequence;
            entity['scrollTo'] = vacuum;
            entity['jumped'] = source;
            entity['focused'] = update;
            update = echo[golf];
            update = control.bind(oscar)(update);
            source = update.intl;
            update = source.string;
            echo = echo[golf];
            echo = control.bind(oscar)(echo);
            echo = echo.t;
            echo = echo.IOS/dX;
            echo = update.bind(source)(echo);
            entity['highlightLabel'] = echo;
            entity['renderContentOnly'] = result;
            entity['separatorBefore'] = output;
            entity['changeType'] = sizing;
            entity['animated'] = kilo;
            entity['highlightJumpedOnceOnly'] = backup;
            entity['messageFrame'] = romeo;
            entity['truncation'] = offset;
            entity['addReactionLabel'] = options;
            entity['alwaysShowAddReaction'] = report;
            romeo = null;
            if(!(romeo == tango)) { _fun00006_ip = 599; continue _fun00005 }
 520:
            options = _closure1_slot1;
            offset = _closure1_slot2;
            report = 16;
            report = offset[report];
            offset = options.bind(oscar)(report);
            options = offset.createBackgroundHighlight;
            report = {};
            report['message'] = yankee;
            backup = argBaz;
            report['theme'] = backup;
            report['isEditing'] = foxtrot;
            backup = _closure1_slot6;
            foxtrot = backup.getMessage;
            yankee = yankee.id;
            yankee = foxtrot.bind(backup)(yankee);
            yankee = romeo != yankee;
            report['isAutomodBlockedMessage'] = yankee;
            tango = options.bind(offset)(report);
 599:
            entity['backgroundHighlight'] = tango;
            report = _closure1_slot1;
            options = _closure1_slot2;
            tango = 16;
            tango = options[tango];
            options = report.bind(oscar)(tango);
            report = options.createSwipeActions;
            tango = zulu.enableSwipeActions;
            if(!tango) { _fun00006_ip = 645; continue _fun00005 }
 639:
            tango = verify.canReply;
 645:
            zulu = zulu.enableSwipeActions;
            if(!zulu) { _fun00006_ip = 660; continue _fun00005 }
 654:
            zulu = verify.canEdit;
 660:
            zulu = report.bind(options)(tango, zulu);
            entity['swipeActions'] = zulu;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            options = zulu.intl;
            tango = options.string;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.5IEsGx;
            zulu = tango.bind(options)(zulu);
            entity['replyAccessibilityLabel'] = zulu;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            options = zulu.intl;
            tango = options.string;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.I3ltXF;
            zulu = tango.bind(options)(zulu);
            entity['forwardAccessibilityLabel'] = zulu;
            zulu = mike[golf];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = mike[golf];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.rBIGBA;
            mike = zulu.bind(tango)(mike);
            entity['threadAccessibilityLabel'] = mike;
            return entity;
        }
    };
    zulu['generateMessageRowData'] = mike;
    return entity;
})();