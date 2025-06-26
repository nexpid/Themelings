// app/modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: castHook
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function() {
            entity = _closure2_slot0;
            return entity;
        };
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createPollResultSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = oscard.message;
            entity = entity.embeds;
            tangon = 0;
            entity = entity[tangon];
            golfie = michal.bind(report)(entity);
            entity = null;
            if(!(entity != golfie)) { _fun00002_ip = 1116; continue _fun00001 }
 59:
            michal = oscard.message;
            michal = michal.messageReference;
            if(!(entity != michal)) { _fun00002_ip = 1114; continue _fun00001 }
 77:
            verify = oscard.message;
            romeon = oscard.roleStyle;
            offset = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 1;
            michal = backup[michal];
            option = offset.bind(report)(michal);
            michal = option.getMessageAuthorWithProcessedColor;
            option = michal.bind(option)(verify);
            michal = option.nick;
            yankee = option.colorString;
            foxtra = option.colorStrings;
            kiloes = option.guildId;
            option = 2;
            option = backup[option];
            backup = offset.bind(report)(option);
            offset = backup.isNativeMessageEligibleForEnhancedRoleColors;
            option = verify.author;
            option = option.id;
            backup = offset.bind(backup)(kiloes, option, romeon);
            offset = {};
            offset['username'] = michal;
            michal = {};
            option = 'bindUserMenu';
            michal['action'] = option;
            option = verify.author;
            option = option.id;
            michal['userId'] = option;
            michal['colorString'] = yankee;
            kiloes = 'username';
            option = null;
            if(!(kiloes === romeon)) { _fun00002_ip = 229; continue _fun00001 }
 226:
            option = yankee;
 229:
            michal['linkColor'] = option;
            michal['roleColor'] = yankee;
            option = null;
            if(!backup) { _fun00002_ip = 247; continue _fun00001 }
 244:
            option = foxtra;
 247:
            michal['roleColors'] = option;
            option = 'dot';
            option = option === romeon;
            if(!option) { _fun00002_ip = 267; continue _fun00001 }
 263:
            option = entity != yankee;
 267:
            michal['shouldShowRoleDot'] = option;
            option = verify.channel_id;
            michal['messageChannelId'] = option;
            option = true;
            michal['medium'] = option;
            offset['usernameOnClick'] = michal;
            michal = golfie.questionText;
            offset['title'] = michal;
            michal = {};
            yankee = 'bindJumpToMessage';
            michal['action'] = yankee;
            yankee = verify.messageReference;
            yankee = yankee.channel_id;
            michal['targetChannelId'] = yankee;
            verify = verify.messageReference;
            verify = verify.message_id;
            michal['targetMessageId'] = verify;
            michal['medium'] = option;
            offset['titleOnClick'] = michal;
            michal = golfie.totalVotes;
            if(!(tangon !== michal)) { _fun00002_ip = 964; continue _fun00001 }
 374:
            michal = global;
            verify = michal.Math;
            option = verify.round;
            yankee = golfie.victorAnswerVotes;
            tangon = golfie.totalVotes;
            yankee = yankee / tangon;
            tangon = 100;
            tangon = yankee * tangon;
            verify = option.bind(verify)(tangon);
            michal = michal.HermesInternal;
            option = michal.concat;
            tangon = '';
            michal = '%';
            romeon = option.bind(tangon)(verify, michal);
            michal = golfie.victorAnswerId;
            if(!(entity != michal)) { _fun00002_ip = 882; continue _fun00001 }
 453:
            foxtra = new Array(0);
            kiloes = golfie.victorEmoji;
            if(!(entity != kiloes)) { _fun00002_ip = 733; continue _fun00001 }
 470:
            michal = kiloes.id;
            if(!(entity == michal)) { _fun00002_ip = 557; continue _fun00001 }
 479:
            tangon = foxtra.push;
            michal = {};
            option = 'emoji';
            michal['type'] = option;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 5;
            option = yankee[option];
            backup = verify.bind(report)(option);
            yankee = backup.convertSurrogateToName;
            verify = kiloes.name;
            option = false;
            option = yankee.bind(backup)(verify, option);
            michal['content'] = option;
            option = kiloes.name;
            michal['surrogate'] = option;
            michal = tangon.bind(foxtra)(michal);
            _fun00002_ip = 709; continue _fun00001;
 557:
            tangon = foxtra.push;
            michal = {};
            option = kiloes.id;
            michal['id'] = option;
            option = 'customEmoji';
            michal['type'] = option;
            option = kiloes.name;
            michal['alt'] = option;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 4;
            backup = yankee[option];
            result = verify.bind(report)(backup);
            output = result.getEmojiURL;
            sizing = {};
            backup = kiloes.id;
            sizing['id'] = backup;
            backup = kiloes.animated;
            sizing['animated'] = backup;
            backup = _closure1_slot3;
            sizing['size'] = backup;
            sizing = output.bind(result)(sizing);
            michal['src'] = sizing;
            option = yankee[option];
            yankee = verify.bind(report)(option);
            verify = yankee.getEmojiURL;
            option = {};
            kiloes = kiloes.id;
            option['id'] = kiloes;
            kiloes = false;
            option['animated'] = kiloes;
            option['size'] = backup;
            option = verify.bind(yankee)(option);
            michal['frozenSrc'] = option;
            michal = tangon.bind(foxtra)(michal);
 709:
            tangon = foxtra.push;
            michal = {'type': 'text', 'content': ' '};
            michal = tangon.bind(foxtra)(michal);
 733:
            tangon = foxtra.push;
            michal = {};
            option = 'text';
            michal['type'] = option;
            golfie = golfie.victorAnswerText;
            michal['content'] = golfie;
            michal = tangon.bind(foxtra)(michal);
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 3;
            golfie = verify[michal];
            golfie = tangon.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.formatToParts;
            michal = verify[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.t;
            tangon = michal.zFwIxM;
            michal = {};
            ctrled = michal;
            source = offset;
            verify = copyDataProperties(ctrled, source);
            yankee = _closure1_slot4;
            verify = {};
            backup = 'strong';
            verify['type'] = backup;
            verify['content'] = foxtra;
            yankee = yankee.bind(report)(verify);
            verify = 'answerHook';
            michal[verify] = yankee;
            verify = 'percentage';
            michal[verify] = romeon;
            tangon = golfie.bind(option)(tangon, michal);
            _fun00002_ip = 1069; continue _fun00001;
 882:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 3;
            option = yankee[michal];
            option = golfie.bind(report)(option);
            verify = option.intl;
            option = verify.formatToParts;
            michal = yankee[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.t;
            golfie = michal.dqftZ2;
            michal = {};
            ctrled = michal;
            source = offset;
            yankee = copyDataProperties(ctrled, source);
            yankee = 'percentage';
            michal[yankee] = romeon;
            tangon = option.bind(verify)(golfie, michal);
            _fun00002_ip = 1069; continue _fun00001;
 964:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 3;
            option = yankee[michal];
            option = golfie.bind(report)(option);
            verify = option.intl;
            option = verify.formatToParts;
            michal = yankee[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.t;
            golfie = michal.9dPxsr;
            michal = {};
            ctrled = michal;
            source = offset;
            offset = copyDataProperties(ctrled, source);
            yankee = _closure1_slot4;
            offset = {'type': 'emoji', 'content': 'frowning', 'surrogate': '😦'};
            yankee = yankee.bind(report)(offset);
            offset = 'sadEmojiHook';
            michal[offset] = yankee;
            tangon = option.bind(verify)(golfie, michal);
 1069:
            michal = {};
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 7;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            source = zuuluu.bind(report)(oscard);
            ctrled = michal;
            zuuluu = copyDataProperties(ctrled, source);
            zuuluu = 'content';
            michal[zuuluu] = tangon;
            return michal;
 1114:
            return entity;
 1116:
            return entity;
        }
    };
    zuuluu['createPollResultSystemMessage'] = michal;
    return entity;
})();