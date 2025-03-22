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
            source = entity.separatorBefore;
            cntext = entity.canAddNewReactions;
            status = entity.reactionsTheme;
            update = entity.messageFrame;
            echoed = entity.truncation;
            ctrled = entity.renderContentOnly;
            backup = entity.addReactionLabel;
            zuuluu = entity.alwaysShowAddReaction;
            tangon = undefined;
            foxtra = tangon !== zuuluu;
            if(!foxtra) { _fun00002_ip = 91; continue _fun00001 }
 88:
            foxtra = zuuluu;
 91:
            option = entity.overrideBackgroundHighlight;
            romeon = entity.canReply;
            yankee = entity.canEdit;
            report = _closure1_slot3;
            zuuluu = report.useContext;
            verify = _closure1_slot1;
            config = _closure1_slot2;
            entity = 8;
            entity = config[entity];
            entity = verify.bind(tangon)(entity);
            entity = zuuluu.bind(report)(entity);
            verify = _closure1_slot0;
            zuuluu = 9;
            zuuluu = config[zuuluu];
            report = verify.bind(tangon)(zuuluu);
            zuuluu = report.useMessageRendererTheme;
            output = zuuluu.bind(report)();
            offset = _closure1_slot3;
            report = offset.useContext;
            zuuluu = 10;
            zuuluu = config[zuuluu];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RenderMessageOptionsContext;
            zuuluu = report.bind(offset)(zuuluu);
            offset = zuuluu.enableSwipeActions;
            kiloes = _closure1_slot3;
            report = kiloes.useContext;
            zuuluu = 11;
            zuuluu = config[zuuluu];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.JumpContext;
            report = report.bind(kiloes)(zuuluu);
            papara = report.scrollToMessageId;
            kiloes = report.jumpTargetId;
            target = report.jumpType;
            zuuluu = report.jumpSequenceId;
            sequen = report.focusTargetId;
            report = result.id;
            vacuum = report === kiloes;
            report = 12;
            kiloes = config[report];
            limora = verify.bind(tangon)(kiloes);
            sierra = limora.useStateFromStores;
            kiloes = _closure1_slot4;
            record = new Array(1);
            record[0] = kiloes;
            kiloes = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            record = sierra.bind(limora)(record, kiloes);
            kiloes = config[report];
            whisks = verify.bind(tangon)(kiloes);
            limora = whisks.useStateFromStores;
            kiloes = _closure1_slot6;
            sierra = new Array(1);
            sierra[0] = kiloes;
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
            kiloes = limora.bind(whisks)(sierra, kiloes);
            report = config[report];
            config = verify.bind(tangon)(report);
            verify = config.useStateFromStores;
            sierra = _closure1_slot5;
            report = new Array(1);
            report[0] = sierra;
            michal = function() {
                entity = _closure1_slot5;
                entity = entity.gradientPreset;
                return entity;
            };
            config = verify.bind(config)(report, michal);
            report = {};
            michal = undefined;
            if(!vacuum) { _fun00002_ip = 408; continue _fun00001 }
 405:
            michal = zuuluu;
 408:
            report['_jumpSequenceId'] = michal;
            verify = null;
            if(!(verify == entity)) { _fun00002_ip = 449; continue _fun00001 }
 421:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 13;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.Message;
            _fun00002_ip = 453; continue _fun00001;
 449:
            zuuluu = _closure1_slot11;
 453:
            michal = _closure1_slot9;
            entity = {};
            entity['canAddNewReactions'] = cntext;
            equals = _closure1_slot0;
            sierra = _closure1_slot2;
            cntext = 14;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            quebec = limora.intl;
            whisks = quebec.string;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            limora = limora.t;
            limora = limora.lfIHs7;
            limora = whisks.bind(quebec)(limora);
            entity['addNewReactionAccessibilityLabel'] = limora;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            quebec = limora.intl;
            whisks = quebec.string;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            limora = limora.t;
            limora = limora.Kfcszs;
            limora = whisks.bind(quebec)(limora);
            entity['addNewBurstReactionAccessibilityLabel'] = limora;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            quebec = limora.intl;
            whisks = quebec.string;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            limora = limora.t;
            limora = limora.5IEsGx;
            limora = whisks.bind(quebec)(limora);
            entity['replyAccessibilityLabel'] = limora;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            quebec = limora.intl;
            whisks = quebec.string;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            limora = limora.t;
            limora = limora.I3ltXF;
            limora = whisks.bind(quebec)(limora);
            entity['forwardAccessibilityLabel'] = limora;
            limora = sierra[cntext];
            limora = equals.bind(tangon)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            sierra = sierra[cntext];
            sierra = equals.bind(tangon)(sierra);
            sierra = sierra.t;
            sierra = sierra.rBIGBA;
            sierra = limora.bind(whisks)(sierra);
            entity['threadAccessibilityLabel'] = sierra;
            entity['reactionsTheme'] = status;
            config = verify != config;
            entity['usingGradientTheme'] = config;
            config = result.id;
            config = config === papara;
            entity['scrollTo'] = config;
            config = result.id;
            config = config === papara;
            if(!config) { _fun00002_ip = 802; continue _fun00001 }
 760:
            if(record) { _fun00002_ip = 799; continue _fun00001 }
 763:
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            papara = 15;
            papara = sierra[papara];
            papara = status.bind(tangon)(papara);
            papara = papara.JumpTypes;
            papara = papara.INSTANT;
            record = target === papara;
 799:
            config = !record;
 802:
            entity['animated'] = config;
            entity['jumped'] = vacuum;
            vacuum = result.id;
            vacuum = vacuum === sequen;
            entity['focused'] = vacuum;
            record = _closure1_slot0;
            vacuum = _closure1_slot2;
            sequen = vacuum[cntext];
            sequen = record.bind(tangon)(sequen);
            config = sequen.intl;
            sequen = config.string;
            vacuum = vacuum[cntext];
            vacuum = record.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.IOS/dX;
            vacuum = sequen.bind(config)(vacuum);
            entity['highlightLabel'] = vacuum;
            entity['renderContentOnly'] = ctrled;
            entity['separatorBefore'] = source;
            entity['messageFrame'] = update;
            entity['truncation'] = echoed;
            entity['addReactionLabel'] = backup;
            entity['alwaysShowAddReaction'] = foxtra;
            if(!(verify == option)) { _fun00002_ip = 969; continue _fun00001 }
 917:
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
 969:
            entity['backgroundHighlight'] = option;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 16;
            golfie = verify[golfie];
            verify = option.bind(tangon)(golfie);
            option = verify.createSwipeActions;
            golfie = offset;
            if(!offset) { _fun00002_ip = 1009; continue _fun00001 }
 1006:
            golfie = romeon;
 1009:
            if(!offset) { _fun00002_ip = 1015; continue _fun00001 }
 1012:
            offset = yankee;
 1015:
            golfie = option.bind(verify)(golfie, offset);
            entity['swipeActions'] = golfie;
            variable37 = entity;
            variable36 = report;
            report = copyDataProperties(variable37, variable36);
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
            kiloes = verify.changeType;
            yankee = verify.message;
            status = verify.roleStyle;
            target = verify.isFirst;
            foxtra = verify.isEditing;
            sizing = verify.separatorBefore;
            ctrled = verify.scrollTo;
            backup = verify.animated;
            golfie = verify.canAddNewReactions;
            vacuum = verify.reactionsTheme;
            update = verify.jumped;
            echoed = verify.focused;
            entity = verify.isSystemDM;
            oscard = undefined;
            cntext = oscard !== entity;
            if(!cntext) { _fun00006_ip = 95; continue _fun00005 }
 92:
            cntext = entity;
 95:
            entity = verify.canShowImages;
            papara = oscard === entity;
            if(papara) { _fun00006_ip = 111; continue _fun00005 }
 108:
            papara = entity;
 111:
            romeon = verify.messageFrame;
            offset = verify.truncation;
            output = verify.renderContentOnly;
            option = verify.addReactionLabel;
            record = verify.pushFeedbackType;
            entity = verify.alwaysShowAddReaction;
            report = oscard !== entity;
            if(!report) { _fun00006_ip = 157; continue _fun00005 }
 154:
            report = entity;
 157:
            tangon = verify.overrideBackgroundHighlight;
            config = verify.showContentInventoryEntryFallbackEmbed;
            entity = {};
            result = _closure1_slot7;
            result = result.MESSAGE;
            entity['type'] = result;
            sequen = _closure1_slot1;
            result = _closure1_slot2;
            source = 36;
            source = result[source];
            sequen = sequen.bind(oscard)(source);
            source = {};
            source['options'] = zuuluu;
            source['message'] = yankee;
            source['roleStyle'] = status;
            source['isFirst'] = target;
            source['isEditing'] = foxtra;
            source['canShowImages'] = papara;
            source['isSystemDM'] = cntext;
            cntext = false;
            source['isInlineReplyPreview'] = cntext;
            source['pushFeedbackType'] = record;
            source['renderContentOnly'] = output;
            source['showContentInventoryEntryFallbackEmbed'] = config;
            source = sequen.bind(oscard)(source);
            entity['message'] = source;
            entity['canAddNewReactions'] = golfie;
            source = _closure1_slot0;
            golfie = 14;
            sequen = result[golfie];
            sequen = source.bind(oscard)(sequen);
            record = sequen.intl;
            config = record.string;
            sequen = result[golfie];
            sequen = source.bind(oscard)(sequen);
            sequen = sequen.t;
            sequen = sequen.lfIHs7;
            sequen = config.bind(record)(sequen);
            entity['addNewReactionAccessibilityLabel'] = sequen;
            sequen = result[golfie];
            sequen = source.bind(oscard)(sequen);
            record = sequen.intl;
            config = record.string;
            sequen = result[golfie];
            sequen = source.bind(oscard)(sequen);
            sequen = sequen.t;
            sequen = sequen.Kfcszs;
            sequen = config.bind(record)(sequen);
            entity['addNewBurstReactionAccessibilityLabel'] = sequen;
            entity['reactionsTheme'] = vacuum;
            entity['scrollTo'] = ctrled;
            entity['jumped'] = update;
            entity['focused'] = echoed;
            echoed = result[golfie];
            echoed = source.bind(oscard)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = result[golfie];
            result = source.bind(oscard)(result);
            result = result.t;
            result = result.IOS/dX;
            result = echoed.bind(update)(result);
            entity['highlightLabel'] = result;
            entity['renderContentOnly'] = output;
            entity['separatorBefore'] = sizing;
            entity['changeType'] = kiloes;
            entity['animated'] = backup;
            entity['messageFrame'] = romeon;
            entity['truncation'] = offset;
            entity['addReactionLabel'] = option;
            entity['alwaysShowAddReaction'] = report;
            romeon = null;
            if(!(romeon == tangon)) { _fun00006_ip = 578; continue _fun00005 }
 499:
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
 578:
            entity['backgroundHighlight'] = tangon;
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 16;
            tangon = option[tangon];
            option = report.bind(oscard)(tangon);
            report = option.createSwipeActions;
            tangon = zuuluu.enableSwipeActions;
            if(!tangon) { _fun00006_ip = 624; continue _fun00005 }
 618:
            tangon = verify.canReply;
 624:
            zuuluu = zuuluu.enableSwipeActions;
            if(!zuuluu) { _fun00006_ip = 639; continue _fun00005 }
 633:
            zuuluu = verify.canEdit;
 639:
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