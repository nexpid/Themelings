// app/modules/messages/native/renderer/MessageWithContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: DataMessage
        zuuluu = argFoo;
        report = zuuluu.children;
        entity = null;
        michal = Object.create(entity);
        entity = 0;
        michal['children'] = entity;
        verify = {};
        option = zuuluu;
        golfie = michal;
        oscard = copyDataProperties(verify, option, golfie);
        tangon = _closure1_slot9;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 7;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.DataWithChildren;
        entity = {};
        entity['rowProps'] = oscard;
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: MessageRowWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.row;
            oscard = zuuluu.children;
            result = entity.message;
            var _closure2_slot0 = result;
            sizing = entity.isEditing;
            ctrled = entity.separatorBefore;
            papara = entity.canAddNewReactions;
            sierra = entity.reactionsTheme;
            zuuluu = entity.highlightJumpedOnceOnly;
            tangon = undefined;
            source = tangon !== zuuluu;
            if(!source) { _fun00002_ip = 67; continue _fun00001 }
 64:
            source = zuuluu;
 67:
            update = entity.messageFrame;
            echoed = entity.truncation;
            vacuum = entity.renderContentOnly;
            backup = entity.addReactionLabel;
            zuuluu = entity.alwaysShowAddReaction;
            foxtra = tangon !== zuuluu;
            if(!foxtra) { _fun00002_ip = 107; continue _fun00001 }
 104:
            foxtra = zuuluu;
 107:
            option = entity.overrideBackgroundHighlight;
            romeon = entity.canReply;
            yankee = entity.canEdit;
            report = _closure1_slot3;
            zuuluu = report.useContext;
            verify = _closure1_slot1;
            record = _closure1_slot2;
            entity = 8;
            entity = record[entity];
            entity = verify.bind(tangon)(entity);
            entity = zuuluu.bind(report)(entity);
            verify = _closure1_slot0;
            zuuluu = 9;
            zuuluu = record[zuuluu];
            report = verify.bind(tangon)(zuuluu);
            zuuluu = report.useMessageRendererTheme;
            output = zuuluu.bind(report)();
            offset = _closure1_slot3;
            report = offset.useContext;
            zuuluu = 10;
            zuuluu = record[zuuluu];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RenderMessageOptionsContext;
            zuuluu = report.bind(offset)(zuuluu);
            offset = zuuluu.enableSwipeActions;
            kiloes = _closure1_slot3;
            report = kiloes.useContext;
            zuuluu = 11;
            zuuluu = record[zuuluu];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.JumpContext;
            report = report.bind(kiloes)(zuuluu);
            target = report.scrollToMessageId;
            kiloes = report.jumpTargetId;
            status = report.jumpType;
            zuuluu = report.jumpSequenceId;
            config = report.focusTargetId;
            report = result.id;
            sequen = report === kiloes;
            report = 12;
            kiloes = record[report];
            whisks = verify.bind(tangon)(kiloes);
            limora = whisks.useStateFromStores;
            kiloes = _closure1_slot4;
            cntext = new Array(1);
            cntext[0] = kiloes;
            kiloes = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            cntext = limora.bind(whisks)(cntext, kiloes);
            kiloes = record[report];
            equals = verify.bind(tangon)(kiloes);
            whisks = equals.useStateFromStores;
            kiloes = _closure1_slot6;
            limora = new Array(1);
            limora[0] = kiloes;
            kiloes = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getMessage;
                entity = _closure2_slot0;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            kiloes = whisks.bind(equals)(limora, kiloes);
            report = record[report];
            record = verify.bind(tangon)(report);
            verify = record.useStateFromStores;
            limora = _closure1_slot5;
            report = new Array(1);
            report[0] = limora;
            michal = function() {
                entity = _closure1_slot5;
                entity = entity.gradientPreset;
                return entity;
            };
            record = verify.bind(record)(report, michal);
            report = {};
            michal = undefined;
            if(!sequen) { _fun00002_ip = 424; continue _fun00001 }
 421:
            michal = zuuluu;
 424:
            report['_jumpSequenceId'] = michal;
            verify = null;
            if(!(verify == entity)) { _fun00002_ip = 465; continue _fun00001 }
 437:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 13;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.Message;
            _fun00002_ip = 469; continue _fun00001;
 465:
            zuuluu = _closure1_slot11;
 469:
            michal = _closure1_slot9;
            entity = {};
            entity['canAddNewReactions'] = papara;
            quebec = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 14;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            variable36 = whisks.intl;
            equals = variable36.string;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.lfIHs7;
            whisks = equals.bind(variable36)(whisks);
            entity['addNewReactionAccessibilityLabel'] = whisks;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            variable36 = whisks.intl;
            equals = variable36.string;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.Kfcszs;
            whisks = equals.bind(variable36)(whisks);
            entity['addNewBurstReactionAccessibilityLabel'] = whisks;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            variable36 = whisks.intl;
            equals = variable36.string;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.5IEsGx;
            whisks = equals.bind(variable36)(whisks);
            entity['replyAccessibilityLabel'] = whisks;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            variable36 = whisks.intl;
            equals = variable36.string;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.I3ltXF;
            whisks = equals.bind(variable36)(whisks);
            entity['forwardAccessibilityLabel'] = whisks;
            whisks = limora[papara];
            whisks = quebec.bind(tangon)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            limora = limora[papara];
            limora = quebec.bind(tangon)(limora);
            limora = limora.t;
            limora = limora.rBIGBA;
            limora = whisks.bind(equals)(limora);
            entity['threadAccessibilityLabel'] = limora;
            entity['reactionsTheme'] = sierra;
            record = verify != record;
            entity['usingGradientTheme'] = record;
            record = result.id;
            record = record === target;
            entity['scrollTo'] = record;
            record = result.id;
            record = record === target;
            if(!record) { _fun00002_ip = 818; continue _fun00001 }
 776:
            if(cntext) { _fun00002_ip = 815; continue _fun00001 }
 779:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            target = 15;
            target = limora[target];
            target = sierra.bind(tangon)(target);
            target = target.JumpTypes;
            target = target.INSTANT;
            cntext = status === target;
 815:
            record = !cntext;
 818:
            entity['animated'] = record;
            entity['jumped'] = sequen;
            sequen = result.id;
            sequen = sequen === config;
            entity['focused'] = sequen;
            cntext = _closure1_slot0;
            sequen = _closure1_slot2;
            config = sequen[papara];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = sequen[papara];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.IOS/dX;
            sequen = config.bind(record)(sequen);
            entity['highlightLabel'] = sequen;
            entity['renderContentOnly'] = vacuum;
            entity['separatorBefore'] = ctrled;
            entity['highlightJumpedOnceOnly'] = source;
            entity['messageFrame'] = update;
            entity['truncation'] = echoed;
            entity['addReactionLabel'] = backup;
            entity['alwaysShowAddReaction'] = foxtra;
            if(!(verify == option)) { _fun00002_ip = 990; continue _fun00001 }
 938:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            verify = 16;
            verify = backup[verify];
            backup = foxtra.bind(tangon)(verify);
            foxtra = backup.createBackgroundHighlight;
            verify = {};
            verify['message'] = result;
            verify['theme'] = output;
            verify['isEditing'] = sizing;
            verify['isAutomodBlockedMessage'] = kiloes;
            option = foxtra.bind(backup)(verify);
 990:
            entity['backgroundHighlight'] = option;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 16;
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.createSwipeActions;
            golfie = offset;
            if(!offset) { _fun00002_ip = 1030; continue _fun00001 }
 1027:
            golfie = romeon;
 1030:
            if(!offset) { _fun00002_ip = 1036; continue _fun00001 }
 1033:
            offset = yankee;
 1036:
            golfie = option.bind(verify)(golfie, offset);
            entity['swipeActions'] = golfie;
            variable38 = entity;
            variable37 = report;
            report = copyDataProperties(variable38, variable37);
            report = 'children';
            entity[report] = oscard;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RowType;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageFlags;
    var _closure1_slot8 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 37;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/MessageWithContent.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: MessageWithContent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.row;
            update = entity.messageContent;
            option = _closure1_slot3;
            oscard = option.useContext;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 10;
            tangon = entity[tangon];
            report = undefined;
            tangon = zuuluu.bind(report)(tangon);
            tangon = tangon.RenderMessageOptionsContext;
            tangon = oscard.bind(option)(tangon);
            sizing = tangon.renderCodedLinks;
            output = tangon.renderGiftCode;
            kiloes = tangon.renderActivityInstanceEmbed;
            foxtra = tangon.renderActivityInviteEmbed;
            result = tangon.renderThreadEmbeds;
            offset = tangon.renderReplies;
            romeon = tangon.renderPolls;
            option = _closure1_slot3;
            oscard = option.useContext;
            yankee = _closure1_slot1;
            verify = 8;
            tangon = entity[verify];
            tangon = yankee.bind(report)(tangon);
            tangon = oscard.bind(option)(tangon);
            entity = entity[verify];
            entity = zuuluu.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.REPLIED_MESSAGE;
            echoed = tangon === entity;
            if(echoed) { _fun00004_ip = 195; continue _fun00003 }
 162:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = zuuluu.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.THREAD_EMBED;
            echoed = tangon === entity;
 195:
            backup = golfie.message;
            entity = golfie.canShowImages;
            yankee = report === entity;
            if(yankee) { _fun00004_ip = 216; continue _fun00003 }
 213:
            yankee = entity;
 216:
            entity = golfie.renderContentOnly;
            ctrled = golfie.pushFeedbackType;
            option = _closure1_slot10;
            oscard = _closure1_slot0;
            source = _closure1_slot2;
            zuuluu = 7;
            zuuluu = source[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            oscard = zuuluu.DataWithChildren;
            zuuluu = {};
            source = 'message';
            zuuluu['keyPath'] = source;
            zuuluu['rowProps'] = update;
            entity = !entity;
            if(!entity) { _fun00004_ip = 283; continue _fun00003 }
 280:
            entity = offset;
 283:
            if(!entity) { _fun00004_ip = 327; continue _fun00003 }
 286:
            update = backup.type;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            offset = 17;
            offset = vacuum[offset];
            offset = source.bind(report)(offset);
            offset = offset.MessageTypes;
            offset = offset.REPLY;
            entity = update === offset;
 327:
            if(!entity) { _fun00004_ip = 366; continue _fun00003 }
 330:
            source = _closure1_slot9;
            update = _closure1_slot1;
            vacuum = _closure1_slot2;
            offset = 18;
            offset = vacuum[offset];
            update = update.bind(report)(offset);
            offset = {};
            offset['message'] = backup;
            entity = source.bind(report)(update, offset);
 366:
            offset = new Array(17);
            offset[0] = entity;
            entity = !echoed;
            if(echoed) { _fun00004_ip = 383; continue _fun00003 }
 380:
            entity = result;
 383:
            if(!entity) { _fun00004_ip = 407; continue _fun00003 }
 386:
            echoed = backup.hasFlag;
            result = _closure1_slot8;
            result = result.HAS_THREAD;
            entity = echoed.bind(backup)(result);
 407:
            if(!entity) { _fun00004_ip = 446; continue _fun00003 }
 410:
            update = _closure1_slot9;
            echoed = _closure1_slot1;
            source = _closure1_slot2;
            result = 19;
            result = source[result];
            echoed = echoed.bind(report)(result);
            result = {};
            result['message'] = backup;
            entity = update.bind(report)(echoed, result);
 446:
            offset[1] = entity;
            entity = null;
            result = entity != ctrled;
            if(!result) { _fun00004_ip = 500; continue _fun00003 }
 459:
            source = _closure1_slot9;
            update = _closure1_slot1;
            vacuum = _closure1_slot2;
            echoed = 20;
            echoed = vacuum[echoed];
            update = update.bind(report)(echoed);
            echoed = {};
            echoed['message'] = backup;
            echoed['pushFeedbackType'] = ctrled;
            result = source.bind(report)(update, echoed);
 500:
            offset[2] = result;
            echoed = backup.hasFlag;
            result = _closure1_slot8;
            result = result.EPHEMERAL;
            result = echoed.bind(backup)(result);
            if(!result) { _fun00004_ip = 564; continue _fun00003 }
 528:
            source = _closure1_slot9;
            update = _closure1_slot1;
            ctrled = _closure1_slot2;
            echoed = 21;
            echoed = ctrled[echoed];
            update = update.bind(report)(echoed);
            echoed = {};
            echoed['message'] = backup;
            result = source.bind(report)(update, echoed);
 564:
            offset[3] = result;
            if(!output) { _fun00004_ip = 607; continue _fun00003 }
 571:
            update = _closure1_slot9;
            echoed = _closure1_slot1;
            source = _closure1_slot2;
            result = 22;
            result = source[result];
            echoed = echoed.bind(report)(result);
            result = {};
            result['message'] = backup;
            output = update.bind(report)(echoed, result);
 607:
            offset[4] = output;
            if(!sizing) { _fun00004_ip = 650; continue _fun00003 }
 614:
            echoed = _closure1_slot9;
            result = _closure1_slot1;
            update = _closure1_slot2;
            output = 23;
            output = update[output];
            result = result.bind(report)(output);
            output = {};
            output['message'] = backup;
            sizing = echoed.bind(report)(result, output);
 650:
            offset[5] = sizing;
            if(!kiloes) { _fun00004_ip = 667; continue _fun00003 }
 657:
            sizing = backup.activityInstance;
            kiloes = entity != sizing;
 667:
            if(!kiloes) { _fun00004_ip = 726; continue _fun00003 }
 670:
            sizing = backup.interaction;
            result = entity == sizing;
            output = undefined;
            if(result) { _fun00004_ip = 690; continue _fun00003 }
 685:
            output = sizing.type;
 690:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            sizing = 24;
            sizing = echoed[sizing];
            sizing = result.bind(report)(sizing);
            sizing = sizing.InteractionTypes;
            sizing = sizing.APPLICATION_COMMAND;
            kiloes = output === sizing;
 726:
            if(!kiloes) { _fun00004_ip = 765; continue _fun00003 }
 729:
            result = _closure1_slot9;
            output = _closure1_slot1;
            echoed = _closure1_slot2;
            sizing = 25;
            sizing = echoed[sizing];
            output = output.bind(report)(sizing);
            sizing = {};
            sizing['message'] = backup;
            kiloes = result.bind(report)(output, sizing);
 765:
            offset[6] = kiloes;
            if(!foxtra) { _fun00004_ip = 782; continue _fun00003 }
 772:
            kiloes = backup.author;
            foxtra = entity != kiloes;
 782:
            if(!foxtra) { _fun00004_ip = 795; continue _fun00003 }
 785:
            kiloes = backup.activity;
            foxtra = entity != kiloes;
 795:
            if(!foxtra) { _fun00004_ip = 845; continue _fun00003 }
 798:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kiloes = 26;
            kiloes = result[kiloes];
            sizing = sizing.bind(report)(kiloes);
            kiloes = {};
            kiloes['message'] = backup;
            result = backup.activity;
            kiloes['activity'] = result;
            foxtra = output.bind(report)(sizing, kiloes);
 845:
            offset[7] = foxtra;
            result = _closure1_slot9;
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            foxtra = 27;
            foxtra = output[foxtra];
            sizing = kiloes.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            foxtra = result.bind(report)(sizing, foxtra);
            offset[8] = foxtra;
            sizing = _closure1_slot9;
            foxtra = 28;
            foxtra = output[foxtra];
            kiloes = kiloes.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            foxtra = sizing.bind(report)(kiloes, foxtra);
            offset[9] = foxtra;
            kiloes = backup.id;
            foxtra = backup.channel_id;
            foxtra = kiloes === foxtra;
            if(!foxtra) { _fun00004_ip = 974; continue _fun00003 }
 938:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kiloes = 29;
            kiloes = result[kiloes];
            sizing = sizing.bind(report)(kiloes);
            kiloes = {};
            kiloes['message'] = backup;
            foxtra = output.bind(report)(sizing, kiloes);
 974:
            offset[10] = foxtra;
            sizing = backup.type;
            output = _closure1_slot0;
            foxtra = _closure1_slot2;
            kiloes = 17;
            foxtra = foxtra[kiloes];
            foxtra = output.bind(report)(foxtra);
            foxtra = foxtra.MessageTypes;
            foxtra = foxtra.PREMIUM_REFERRAL;
            foxtra = sizing === foxtra;
            if(!foxtra) { _fun00004_ip = 1058; continue _fun00003 }
 1022:
            result = _closure1_slot9;
            output = _closure1_slot1;
            echoed = _closure1_slot2;
            sizing = 30;
            sizing = echoed[sizing];
            output = output.bind(report)(sizing);
            sizing = {};
            sizing['message'] = backup;
            foxtra = result.bind(report)(output, sizing);
 1058:
            offset[11] = foxtra;
            if(!yankee) { _fun00004_ip = 1101; continue _fun00003 }
 1065:
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            foxtra = 31;
            foxtra = result[foxtra];
            sizing = sizing.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            yankee = output.bind(report)(sizing, foxtra);
 1101:
            offset[12] = yankee;
            sizing = _closure1_slot9;
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 32;
            yankee = output[yankee];
            foxtra = foxtra.bind(report)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = sizing.bind(report)(foxtra, yankee);
            offset[13] = yankee;
            yankee = backup.isPoll;
            foxtra = yankee.bind(backup)();
            yankee = null;
            if(!foxtra) { _fun00004_ip = 1201; continue _fun00003 }
 1160:
            yankee = null;
            if(!romeon) { _fun00004_ip = 1201; continue _fun00003 }
 1165:
            sizing = _closure1_slot9;
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            romeon = 33;
            romeon = output[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['message'] = backup;
            yankee = sizing.bind(report)(foxtra, romeon);
 1201:
            offset[14] = yankee;
            foxtra = backup.type;
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[kiloes];
            yankee = romeon.bind(report)(yankee);
            yankee = yankee.MessageTypes;
            romeon = yankee.VOICE_HANGOUT_INVITE;
            yankee = null;
            if(!(foxtra === romeon)) { _fun00004_ip = 1281; continue _fun00003 }
 1245:
            kiloes = _closure1_slot9;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 34;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['message'] = backup;
            yankee = kiloes.bind(report)(foxtra, romeon);
 1281:
            offset[15] = yankee;
            foxtra = _closure1_slot9;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            yankee = 35;
            yankee = kiloes[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[16] = yankee;
            zuuluu['children'] = offset;
            oscard = option.bind(report)(oscard, zuuluu);
            zuuluu = entity != tangon;
            if(!zuuluu) { _fun00004_ip = 1375; continue _fun00003 }
 1342:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = option.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.BLOCKED_MESSAGE;
            zuuluu = tangon !== entity;
 1375:
            entity = oscard;
            if(zuuluu) { _fun00004_ip = 1406; continue _fun00003 }
 1381:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot12;
            michal = {};
            michal['row'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1406:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: generateMessageRowData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            zuuluu = argBar;
            sizing = verify.changeType;
            yankee = verify.message;
            sierra = verify.roleStyle;
            status = verify.isFirst;
            foxtra = verify.isEditing;
            output = verify.separatorBefore;
            vacuum = verify.scrollTo;
            kiloes = verify.animated;
            golfie = verify.canAddNewReactions;
            sequen = verify.reactionsTheme;
            source = verify.jumped;
            update = verify.focused;
            entity = verify.isSystemDM;
            oscard = undefined;
            papara = oscard !== entity;
            if(!papara) { _fun00006_ip = 95; continue _fun00005 }
 92:
            papara = entity;
 95:
            entity = verify.canShowImages;
            target = oscard === entity;
            if(target) { _fun00006_ip = 111; continue _fun00005 }
 108:
            target = entity;
 111:
            entity = verify.highlightJumpedOnceOnly;
            backup = oscard !== entity;
            if(!backup) { _fun00006_ip = 127; continue _fun00005 }
 124:
            backup = entity;
 127:
            romeon = verify.messageFrame;
            offset = verify.truncation;
            result = verify.renderContentOnly;
            option = verify.addReactionLabel;
            cntext = verify.pushFeedbackType;
            entity = verify.alwaysShowAddReaction;
            report = oscard !== entity;
            if(!report) { _fun00006_ip = 173; continue _fun00005 }
 170:
            report = entity;
 173:
            tangon = verify.overrideBackgroundHighlight;
            record = verify.showContentInventoryEntryFallbackEmbed;
            entity = {};
            echoed = _closure1_slot7;
            echoed = echoed.MESSAGE;
            entity['type'] = echoed;
            config = _closure1_slot1;
            echoed = _closure1_slot2;
            ctrled = 36;
            ctrled = echoed[ctrled];
            config = config.bind(oscard)(ctrled);
            ctrled = {};
            ctrled['options'] = zuuluu;
            ctrled['message'] = yankee;
            ctrled['roleStyle'] = sierra;
            ctrled['isFirst'] = status;
            ctrled['isEditing'] = foxtra;
            ctrled['canShowImages'] = target;
            ctrled['isSystemDM'] = papara;
            papara = false;
            ctrled['isInlineReplyPreview'] = papara;
            ctrled['pushFeedbackType'] = cntext;
            ctrled['renderContentOnly'] = result;
            ctrled['showContentInventoryEntryFallbackEmbed'] = record;
            ctrled = config.bind(oscard)(ctrled);
            entity['message'] = ctrled;
            entity['canAddNewReactions'] = golfie;
            ctrled = _closure1_slot0;
            golfie = 14;
            config = echoed[golfie];
            config = ctrled.bind(oscard)(config);
            cntext = config.intl;
            record = cntext.string;
            config = echoed[golfie];
            config = ctrled.bind(oscard)(config);
            config = config.t;
            config = config.lfIHs7;
            config = record.bind(cntext)(config);
            entity['addNewReactionAccessibilityLabel'] = config;
            config = echoed[golfie];
            config = ctrled.bind(oscard)(config);
            cntext = config.intl;
            record = cntext.string;
            config = echoed[golfie];
            config = ctrled.bind(oscard)(config);
            config = config.t;
            config = config.Kfcszs;
            config = record.bind(cntext)(config);
            entity['addNewBurstReactionAccessibilityLabel'] = config;
            entity['reactionsTheme'] = sequen;
            entity['scrollTo'] = vacuum;
            entity['jumped'] = source;
            entity['focused'] = update;
            update = echoed[golfie];
            update = ctrled.bind(oscard)(update);
            source = update.intl;
            update = source.string;
            echoed = echoed[golfie];
            echoed = ctrled.bind(oscard)(echoed);
            echoed = echoed.t;
            echoed = echoed.IOS/dX;
            echoed = update.bind(source)(echoed);
            entity['highlightLabel'] = echoed;
            entity['renderContentOnly'] = result;
            entity['separatorBefore'] = output;
            entity['changeType'] = sizing;
            entity['animated'] = kiloes;
            entity['highlightJumpedOnceOnly'] = backup;
            entity['messageFrame'] = romeon;
            entity['truncation'] = offset;
            entity['addReactionLabel'] = option;
            entity['alwaysShowAddReaction'] = report;
            romeon = null;
            if(!(romeon == tangon)) { _fun00006_ip = 599; continue _fun00005 }
 520:
            option = _closure1_slot1;
            offset = _closure1_slot2;
            report = 16;
            report = offset[report];
            offset = option.bind(oscard)(report);
            option = offset.createBackgroundHighlight;
            report = {};
            report['message'] = yankee;
            backup = argBaz;
            report['theme'] = backup;
            report['isEditing'] = foxtra;
            backup = _closure1_slot6;
            foxtra = backup.getMessage;
            yankee = yankee.id;
            yankee = foxtra.bind(backup)(yankee);
            yankee = romeon != yankee;
            report['isAutomodBlockedMessage'] = yankee;
            tangon = option.bind(offset)(report);
 599:
            entity['backgroundHighlight'] = tangon;
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 16;
            tangon = option[tangon];
            option = report.bind(oscard)(tangon);
            report = option.createSwipeActions;
            tangon = zuuluu.enableSwipeActions;
            if(!tangon) { _fun00006_ip = 645; continue _fun00005 }
 639:
            tangon = verify.canReply;
 645:
            zuuluu = zuuluu.enableSwipeActions;
            if(!zuuluu) { _fun00006_ip = 660; continue _fun00005 }
 654:
            zuuluu = verify.canEdit;
 660:
            zuuluu = report.bind(option)(tangon, zuuluu);
            entity['swipeActions'] = zuuluu;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = michal[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            option = zuuluu.intl;
            tangon = option.string;
            zuuluu = michal[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.5IEsGx;
            zuuluu = tangon.bind(option)(zuuluu);
            entity['replyAccessibilityLabel'] = zuuluu;
            zuuluu = michal[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            option = zuuluu.intl;
            tangon = option.string;
            zuuluu = michal[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.I3ltXF;
            zuuluu = tangon.bind(option)(zuuluu);
            entity['forwardAccessibilityLabel'] = zuuluu;
            zuuluu = michal[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = michal[golfie];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.rBIGBA;
            michal = zuuluu.bind(tangon)(michal);
            entity['threadAccessibilityLabel'] = michal;
            return entity;
        }
    };
    zuuluu['generateMessageRowData'] = michal;
    return entity;
})();