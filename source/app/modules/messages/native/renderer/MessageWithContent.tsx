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
        tangon = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 6;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: MessageRowWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.row;
            report = zuuluu.children;
            output = entity.message;
            var _closure2_slot0 = output;
            kiloes = entity.isEditing;
            update = entity.separatorBefore;
            ctrled = entity.canAddNewReactions;
            sequen = entity.reactionsTheme;
            echoed = entity.messageFrame;
            result = entity.truncation;
            source = entity.renderContentOnly;
            foxtra = entity.addReactionLabel;
            zuuluu = entity.alwaysShowAddReaction;
            tangon = undefined;
            romeon = tangon !== zuuluu;
            if(!romeon) { _fun00002_ip = 91; continue _fun00001 }
 88:
            romeon = zuuluu;
 91:
            golfie = entity.overrideBackgroundHighlight;
            yankee = entity.canReply;
            offset = entity.canEdit;
            option = _closure1_slot3;
            zuuluu = option.useContext;
            verify = _closure1_slot1;
            vacuum = _closure1_slot2;
            entity = 7;
            entity = vacuum[entity];
            entity = verify.bind(tangon)(entity);
            entity = zuuluu.bind(option)(entity);
            option = _closure1_slot0;
            zuuluu = 8;
            zuuluu = vacuum[zuuluu];
            verify = option.bind(tangon)(zuuluu);
            zuuluu = verify.useMessageRendererTheme;
            sizing = zuuluu.bind(verify)();
            backup = _closure1_slot3;
            verify = backup.useContext;
            zuuluu = 9;
            zuuluu = vacuum[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RenderMessageOptionsContext;
            zuuluu = verify.bind(backup)(zuuluu);
            verify = zuuluu.enableSwipeActions;
            zuuluu = 10;
            backup = vacuum[zuuluu];
            cntext = option.bind(tangon)(backup);
            record = cntext.useStateFromStores;
            backup = _closure1_slot5;
            config = new Array(1);
            config[0] = backup;
            backup = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getMessage;
                entity = _closure2_slot0;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            backup = record.bind(cntext)(config, backup);
            zuuluu = vacuum[zuuluu];
            vacuum = option.bind(tangon)(zuuluu);
            option = vacuum.useStateFromStores;
            config = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = config;
            michal = function() {
                entity = _closure1_slot4;
                entity = entity.gradientPreset;
                return entity;
            };
            vacuum = option.bind(vacuum)(zuuluu, michal);
            option = null;
            if(!(option == entity)) { _fun00002_ip = 323; continue _fun00001 }
 295:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 11;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.Message;
            _fun00002_ip = 327; continue _fun00001;
 323:
            zuuluu = _closure1_slot10;
 327:
            michal = _closure1_slot8;
            entity = {};
            entity['canAddNewReactions'] = ctrled;
            config = _closure1_slot0;
            record = _closure1_slot2;
            ctrled = 12;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            target = cntext.intl;
            papara = target.string;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            cntext = cntext.t;
            cntext = cntext.lfIHs7;
            cntext = papara.bind(target)(cntext);
            entity['addNewReactionAccessibilityLabel'] = cntext;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            target = cntext.intl;
            papara = target.string;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            cntext = cntext.t;
            cntext = cntext.5IEsGx;
            cntext = papara.bind(target)(cntext);
            entity['replyAccessibilityLabel'] = cntext;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            target = cntext.intl;
            papara = target.string;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            cntext = cntext.t;
            cntext = cntext.I3ltXF;
            cntext = papara.bind(target)(cntext);
            entity['forwardAccessibilityLabel'] = cntext;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            target = cntext.intl;
            papara = target.string;
            cntext = record[ctrled];
            cntext = config.bind(tangon)(cntext);
            cntext = cntext.t;
            cntext = cntext.rBIGBA;
            cntext = papara.bind(target)(cntext);
            entity['threadAccessibilityLabel'] = cntext;
            entity['reactionsTheme'] = sequen;
            vacuum = option != vacuum;
            entity['usingGradientTheme'] = vacuum;
            vacuum = record[ctrled];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = record[ctrled];
            ctrled = config.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.IOS/dX;
            ctrled = vacuum.bind(sequen)(ctrled);
            entity['highlightLabel'] = ctrled;
            entity['renderContentOnly'] = source;
            entity['separatorBefore'] = update;
            entity['messageFrame'] = echoed;
            entity['truncation'] = result;
            entity['addReactionLabel'] = foxtra;
            entity['alwaysShowAddReaction'] = romeon;
            if(!(option == golfie)) { _fun00002_ip = 693; continue _fun00001 }
 642:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 13;
            option = foxtra[option];
            foxtra = romeon.bind(tangon)(option);
            romeon = foxtra.createBackgroundHighlight;
            option = {};
            option['message'] = output;
            option['theme'] = sizing;
            option['isEditing'] = kiloes;
            option['isAutomodBlockedMessage'] = backup;
            golfie = romeon.bind(foxtra)(option);
 693:
            entity['backgroundHighlight'] = golfie;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 13;
            oscard = option[oscard];
            option = golfie.bind(tangon)(oscard);
            golfie = option.createSwipeActions;
            oscard = verify;
            if(!verify) { _fun00002_ip = 733; continue _fun00001 }
 730:
            oscard = yankee;
 733:
            if(!verify) { _fun00002_ip = 739; continue _fun00001 }
 736:
            verify = offset;
 739:
            oscard = golfie.bind(option)(oscard, verify);
            entity['swipeActions'] = oscard;
            entity['children'] = report;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RowType;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageFlags;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 32;
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
            echoed = entity.messageContent;
            option = _closure1_slot3;
            oscard = option.useContext;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 9;
            tangon = entity[tangon];
            report = undefined;
            tangon = zuuluu.bind(report)(tangon);
            tangon = tangon.RenderMessageOptionsContext;
            tangon = oscard.bind(option)(tangon);
            kiloes = tangon.renderCodedLinks;
            sizing = tangon.renderGiftCode;
            foxtra = tangon.renderActivityInviteEmbed;
            output = tangon.renderThreadEmbeds;
            offset = tangon.renderReplies;
            romeon = tangon.renderPolls;
            option = _closure1_slot3;
            oscard = option.useContext;
            yankee = _closure1_slot1;
            verify = 7;
            tangon = entity[verify];
            tangon = yankee.bind(report)(tangon);
            tangon = oscard.bind(option)(tangon);
            entity = entity[verify];
            entity = zuuluu.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.REPLIED_MESSAGE;
            result = tangon === entity;
            if(result) { _fun00004_ip = 189; continue _fun00003 }
 156:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = zuuluu.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.THREAD_EMBED;
            result = tangon === entity;
 189:
            backup = golfie.message;
            entity = golfie.canShowImages;
            yankee = report === entity;
            if(yankee) { _fun00004_ip = 210; continue _fun00003 }
 207:
            yankee = entity;
 210:
            entity = golfie.renderContentOnly;
            source = golfie.pushFeedbackType;
            option = _closure1_slot9;
            oscard = _closure1_slot0;
            update = _closure1_slot2;
            zuuluu = 6;
            zuuluu = update[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            oscard = zuuluu.DataWithChildren;
            zuuluu = {};
            update = 'message';
            zuuluu['keyPath'] = update;
            zuuluu['rowProps'] = echoed;
            entity = !entity;
            if(!entity) { _fun00004_ip = 277; continue _fun00003 }
 274:
            entity = offset;
 277:
            if(!entity) { _fun00004_ip = 321; continue _fun00003 }
 280:
            echoed = backup.type;
            update = _closure1_slot0;
            ctrled = _closure1_slot2;
            offset = 14;
            offset = ctrled[offset];
            offset = update.bind(report)(offset);
            offset = offset.MessageTypes;
            offset = offset.REPLY;
            entity = echoed === offset;
 321:
            if(!entity) { _fun00004_ip = 360; continue _fun00003 }
 324:
            update = _closure1_slot8;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot2;
            offset = 15;
            offset = ctrled[offset];
            echoed = echoed.bind(report)(offset);
            offset = {};
            offset['message'] = backup;
            entity = update.bind(report)(echoed, offset);
 360:
            offset = new Array(16);
            offset[0] = entity;
            entity = !result;
            if(result) { _fun00004_ip = 377; continue _fun00003 }
 374:
            entity = output;
 377:
            if(!entity) { _fun00004_ip = 401; continue _fun00003 }
 380:
            result = backup.hasFlag;
            output = _closure1_slot7;
            output = output.HAS_THREAD;
            entity = result.bind(backup)(output);
 401:
            if(!entity) { _fun00004_ip = 440; continue _fun00003 }
 404:
            echoed = _closure1_slot8;
            result = _closure1_slot1;
            update = _closure1_slot2;
            output = 16;
            output = update[output];
            result = result.bind(report)(output);
            output = {};
            output['message'] = backup;
            entity = echoed.bind(report)(result, output);
 440:
            offset[1] = entity;
            entity = null;
            output = entity != source;
            if(!output) { _fun00004_ip = 494; continue _fun00003 }
 453:
            update = _closure1_slot8;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot2;
            result = 17;
            result = ctrled[result];
            echoed = echoed.bind(report)(result);
            result = {};
            result['message'] = backup;
            result['pushFeedbackType'] = source;
            output = update.bind(report)(echoed, result);
 494:
            offset[2] = output;
            result = backup.hasFlag;
            output = _closure1_slot7;
            output = output.EPHEMERAL;
            output = result.bind(backup)(output);
            if(!output) { _fun00004_ip = 558; continue _fun00003 }
 522:
            update = _closure1_slot8;
            echoed = _closure1_slot1;
            source = _closure1_slot2;
            result = 18;
            result = source[result];
            echoed = echoed.bind(report)(result);
            result = {};
            result['message'] = backup;
            output = update.bind(report)(echoed, result);
 558:
            offset[3] = output;
            if(!sizing) { _fun00004_ip = 601; continue _fun00003 }
 565:
            echoed = _closure1_slot8;
            result = _closure1_slot1;
            update = _closure1_slot2;
            output = 19;
            output = update[output];
            result = result.bind(report)(output);
            output = {};
            output['message'] = backup;
            sizing = echoed.bind(report)(result, output);
 601:
            offset[4] = sizing;
            if(!kiloes) { _fun00004_ip = 644; continue _fun00003 }
 608:
            result = _closure1_slot8;
            output = _closure1_slot1;
            echoed = _closure1_slot2;
            sizing = 20;
            sizing = echoed[sizing];
            output = output.bind(report)(sizing);
            sizing = {};
            sizing['message'] = backup;
            kiloes = result.bind(report)(output, sizing);
 644:
            offset[5] = kiloes;
            if(!foxtra) { _fun00004_ip = 661; continue _fun00003 }
 651:
            kiloes = backup.author;
            foxtra = entity != kiloes;
 661:
            if(!foxtra) { _fun00004_ip = 674; continue _fun00003 }
 664:
            kiloes = backup.activity;
            foxtra = entity != kiloes;
 674:
            if(!foxtra) { _fun00004_ip = 724; continue _fun00003 }
 677:
            output = _closure1_slot8;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kiloes = 21;
            kiloes = result[kiloes];
            sizing = sizing.bind(report)(kiloes);
            kiloes = {};
            kiloes['message'] = backup;
            result = backup.activity;
            kiloes['activity'] = result;
            foxtra = output.bind(report)(sizing, kiloes);
 724:
            offset[6] = foxtra;
            result = _closure1_slot8;
            kiloes = _closure1_slot1;
            output = _closure1_slot2;
            foxtra = 22;
            foxtra = output[foxtra];
            sizing = kiloes.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            foxtra = result.bind(report)(sizing, foxtra);
            offset[7] = foxtra;
            sizing = _closure1_slot8;
            foxtra = 23;
            foxtra = output[foxtra];
            kiloes = kiloes.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            foxtra = sizing.bind(report)(kiloes, foxtra);
            offset[8] = foxtra;
            kiloes = backup.id;
            foxtra = backup.channel_id;
            foxtra = kiloes === foxtra;
            if(!foxtra) { _fun00004_ip = 853; continue _fun00003 }
 817:
            output = _closure1_slot8;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            kiloes = 24;
            kiloes = result[kiloes];
            sizing = sizing.bind(report)(kiloes);
            kiloes = {};
            kiloes['message'] = backup;
            foxtra = output.bind(report)(sizing, kiloes);
 853:
            offset[9] = foxtra;
            sizing = backup.type;
            output = _closure1_slot0;
            foxtra = _closure1_slot2;
            kiloes = 14;
            foxtra = foxtra[kiloes];
            foxtra = output.bind(report)(foxtra);
            foxtra = foxtra.MessageTypes;
            foxtra = foxtra.PREMIUM_REFERRAL;
            foxtra = sizing === foxtra;
            if(!foxtra) { _fun00004_ip = 937; continue _fun00003 }
 901:
            result = _closure1_slot8;
            output = _closure1_slot1;
            echoed = _closure1_slot2;
            sizing = 25;
            sizing = echoed[sizing];
            output = output.bind(report)(sizing);
            sizing = {};
            sizing['message'] = backup;
            foxtra = result.bind(report)(output, sizing);
 937:
            offset[10] = foxtra;
            if(!yankee) { _fun00004_ip = 980; continue _fun00003 }
 944:
            output = _closure1_slot8;
            sizing = _closure1_slot1;
            result = _closure1_slot2;
            foxtra = 26;
            foxtra = result[foxtra];
            sizing = sizing.bind(report)(foxtra);
            foxtra = {};
            foxtra['message'] = backup;
            yankee = output.bind(report)(sizing, foxtra);
 980:
            offset[11] = yankee;
            sizing = _closure1_slot8;
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 27;
            yankee = output[yankee];
            foxtra = foxtra.bind(report)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = sizing.bind(report)(foxtra, yankee);
            offset[12] = yankee;
            yankee = backup.isPoll;
            foxtra = yankee.bind(backup)();
            yankee = null;
            if(!foxtra) { _fun00004_ip = 1080; continue _fun00003 }
 1039:
            yankee = null;
            if(!romeon) { _fun00004_ip = 1080; continue _fun00003 }
 1044:
            sizing = _closure1_slot8;
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            romeon = 28;
            romeon = output[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['message'] = backup;
            yankee = sizing.bind(report)(foxtra, romeon);
 1080:
            offset[13] = yankee;
            foxtra = backup.type;
            romeon = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[kiloes];
            yankee = romeon.bind(report)(yankee);
            yankee = yankee.MessageTypes;
            romeon = yankee.VOICE_HANGOUT_INVITE;
            yankee = null;
            if(!(foxtra === romeon)) { _fun00004_ip = 1160; continue _fun00003 }
 1124:
            kiloes = _closure1_slot8;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 29;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = {};
            romeon['message'] = backup;
            yankee = kiloes.bind(report)(foxtra, romeon);
 1160:
            offset[14] = yankee;
            foxtra = _closure1_slot8;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            yankee = 30;
            yankee = kiloes[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee['message'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[15] = yankee;
            zuuluu['children'] = offset;
            oscard = option.bind(report)(oscard, zuuluu);
            zuuluu = entity != tangon;
            if(!zuuluu) { _fun00004_ip = 1254; continue _fun00003 }
 1221:
            option = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[verify];
            entity = option.bind(report)(entity);
            entity = entity.NestedMessageType;
            entity = entity.BLOCKED_MESSAGE;
            zuuluu = tangon !== entity;
 1254:
            entity = oscard;
            if(zuuluu) { _fun00004_ip = 1285; continue _fun00003 }
 1260:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot11;
            michal = {};
            michal['row'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1285:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: generateMessageRowData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            zuuluu = argBar;
            backup = verify.changeType;
            yankee = verify.message;
            record = verify.roleStyle;
            config = verify.isFirst;
            foxtra = verify.isEditing;
            kiloes = verify.separatorBefore;
            golfie = verify.canAddNewReactions;
            result = verify.reactionsTheme;
            entity = verify.isSystemDM;
            oscard = undefined;
            vacuum = oscard !== entity;
            if(!vacuum) { _fun00006_ip = 71; continue _fun00005 }
 68:
            vacuum = entity;
 71:
            entity = verify.canShowImages;
            sequen = oscard === entity;
            if(sequen) { _fun00006_ip = 87; continue _fun00005 }
 84:
            sequen = entity;
 87:
            romeon = verify.messageFrame;
            offset = verify.truncation;
            sizing = verify.renderContentOnly;
            option = verify.addReactionLabel;
            ctrled = verify.pushFeedbackType;
            entity = verify.alwaysShowAddReaction;
            report = oscard !== entity;
            if(!report) { _fun00006_ip = 133; continue _fun00005 }
 130:
            report = entity;
 133:
            tangon = verify.overrideBackgroundHighlight;
            source = verify.showContentInventoryEntryFallbackEmbed;
            entity = {};
            output = _closure1_slot6;
            output = output.MESSAGE;
            entity['type'] = output;
            update = _closure1_slot1;
            output = _closure1_slot2;
            echoed = 31;
            echoed = output[echoed];
            update = update.bind(oscard)(echoed);
            echoed = {};
            echoed['options'] = zuuluu;
            echoed['message'] = yankee;
            echoed['roleStyle'] = record;
            echoed['isFirst'] = config;
            echoed['isEditing'] = foxtra;
            echoed['canShowImages'] = sequen;
            echoed['isSystemDM'] = vacuum;
            vacuum = false;
            echoed['isInlineReplyPreview'] = vacuum;
            echoed['pushFeedbackType'] = ctrled;
            echoed['renderContentOnly'] = sizing;
            echoed['showContentInventoryEntryFallbackEmbed'] = source;
            echoed = update.bind(oscard)(echoed);
            entity['message'] = echoed;
            entity['canAddNewReactions'] = golfie;
            update = _closure1_slot0;
            golfie = 12;
            echoed = output[golfie];
            echoed = update.bind(oscard)(echoed);
            ctrled = echoed.intl;
            source = ctrled.string;
            echoed = output[golfie];
            echoed = update.bind(oscard)(echoed);
            echoed = echoed.t;
            echoed = echoed.lfIHs7;
            echoed = source.bind(ctrled)(echoed);
            entity['addNewReactionAccessibilityLabel'] = echoed;
            entity['reactionsTheme'] = result;
            result = output[golfie];
            result = update.bind(oscard)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[golfie];
            output = update.bind(oscard)(output);
            output = output.t;
            output = output.IOS/dX;
            output = result.bind(echoed)(output);
            entity['highlightLabel'] = output;
            entity['renderContentOnly'] = sizing;
            entity['separatorBefore'] = kiloes;
            entity['changeType'] = backup;
            entity['messageFrame'] = romeon;
            entity['truncation'] = offset;
            entity['addReactionLabel'] = option;
            entity['alwaysShowAddReaction'] = report;
            romeon = null;
            if(!(romeon == tangon)) { _fun00006_ip = 484; continue _fun00005 }
 406:
            option = _closure1_slot1;
            offset = _closure1_slot2;
            report = 13;
            report = offset[report];
            offset = option.bind(oscard)(report);
            option = offset.createBackgroundHighlight;
            report = {};
            report['message'] = yankee;
            backup = argBaz;
            report['theme'] = backup;
            report['isEditing'] = foxtra;
            backup = _closure1_slot5;
            foxtra = backup.getMessage;
            yankee = yankee.id;
            yankee = foxtra.bind(backup)(yankee);
            yankee = romeon != yankee;
            report['isAutomodBlockedMessage'] = yankee;
            tangon = option.bind(offset)(report);
 484:
            entity['backgroundHighlight'] = tangon;
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 13;
            tangon = option[tangon];
            option = report.bind(oscard)(tangon);
            report = option.createSwipeActions;
            tangon = zuuluu.enableSwipeActions;
            if(!tangon) { _fun00006_ip = 530; continue _fun00005 }
 524:
            tangon = verify.canReply;
 530:
            zuuluu = zuuluu.enableSwipeActions;
            if(!zuuluu) { _fun00006_ip = 545; continue _fun00005 }
 539:
            zuuluu = verify.canEdit;
 545:
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