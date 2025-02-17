// app/modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: castHook
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function() {
            entity = _closure2_slot0;
            return entity;
        };
        return entity;
    };
    var _closure1_slot4 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createPollResultSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = oscar.message;
            entity = entity.embeds;
            tango = 0;
            entity = entity[tango];
            golf = mike.bind(report)(entity);
            entity = null;
            if(!(entity != golf)) { _fun00002_ip = 1056; continue _fun00001 }
 59:
            mike = oscar.message;
            mike = mike.messageReference;
            if(!(entity != mike)) { _fun00002_ip = 1054; continue _fun00001 }
 77:
            verify = oscar.message;
            romeo = oscar.roleStyle;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 1;
            mike = offset[mike];
            options = options.bind(report)(mike);
            mike = options.getMessageAuthorWithProcessedColor;
            options = mike.bind(options)(verify);
            mike = options.nick;
            yankee = options.colorString;
            offset = {};
            offset['username'] = mike;
            mike = {};
            options = 'bindUserMenu';
            mike['action'] = options;
            options = verify.author;
            options = options.id;
            mike['userId'] = options;
            mike['colorString'] = yankee;
            foxtrot = 'username';
            options = null;
            if(!(foxtrot === romeo)) { _fun00002_ip = 182; continue _fun00001 }
 179:
            options = yankee;
 182:
            mike['linkColor'] = options;
            mike['roleColor'] = yankee;
            options = 'dot';
            options = options === romeo;
            if(!options) { _fun00002_ip = 207; continue _fun00001 }
 203:
            options = entity != yankee;
 207:
            mike['shouldShowRoleDot'] = options;
            options = verify.channel_id;
            mike['messageChannelId'] = options;
            options = true;
            mike['medium'] = options;
            offset['usernameOnClick'] = mike;
            mike = golf.questionText;
            offset['title'] = mike;
            mike = {};
            yankee = 'bindJumpToMessage';
            mike['action'] = yankee;
            yankee = verify.messageReference;
            yankee = yankee.channel_id;
            mike['targetChannelId'] = yankee;
            verify = verify.messageReference;
            verify = verify.message_id;
            mike['targetMessageId'] = verify;
            mike['medium'] = options;
            offset['titleOnClick'] = mike;
            mike = golf.totalVotes;
            if(!(tango !== mike)) { _fun00002_ip = 904; continue _fun00001 }
 314:
            mike = global;
            verify = mike.Math;
            options = verify.round;
            yankee = golf.victorAnswerVotes;
            tango = golf.totalVotes;
            yankee = yankee / tango;
            tango = 100;
            tango = yankee * tango;
            verify = options.bind(verify)(tango);
            mike = mike.HermesInternal;
            options = mike.concat;
            tango = '';
            mike = '%';
            romeo = options.bind(tango)(verify, mike);
            mike = golf.victorAnswerId;
            if(!(entity != mike)) { _fun00002_ip = 822; continue _fun00001 }
 393:
            foxtrot = new Array(0);
            kilo = golf.victorEmoji;
            if(!(entity != kilo)) { _fun00002_ip = 673; continue _fun00001 }
 410:
            mike = kilo.id;
            if(!(entity == mike)) { _fun00002_ip = 497; continue _fun00001 }
 419:
            tango = foxtrot.push;
            mike = {};
            options = 'emoji';
            mike['type'] = options;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 4;
            options = yankee[options];
            backup = verify.bind(report)(options);
            yankee = backup.convertSurrogateToName;
            verify = kilo.name;
            options = false;
            options = yankee.bind(backup)(verify, options);
            mike['content'] = options;
            options = kilo.name;
            mike['surrogate'] = options;
            mike = tango.bind(foxtrot)(mike);
            _fun00002_ip = 649; continue _fun00001;
 497:
            tango = foxtrot.push;
            mike = {};
            options = kilo.id;
            mike['id'] = options;
            options = 'customEmoji';
            mike['type'] = options;
            options = kilo.name;
            mike['alt'] = options;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 3;
            backup = yankee[options];
            result = verify.bind(report)(backup);
            output = result.getEmojiURL;
            sizing = {};
            backup = kilo.id;
            sizing['id'] = backup;
            backup = kilo.animated;
            sizing['animated'] = backup;
            backup = _closure1_slot3;
            sizing['size'] = backup;
            sizing = output.bind(result)(sizing);
            mike['src'] = sizing;
            options = yankee[options];
            yankee = verify.bind(report)(options);
            verify = yankee.getEmojiURL;
            options = {};
            kilo = kilo.id;
            options['id'] = kilo;
            kilo = false;
            options['animated'] = kilo;
            options['size'] = backup;
            options = verify.bind(yankee)(options);
            mike['frozenSrc'] = options;
            mike = tango.bind(foxtrot)(mike);
 649:
            tango = foxtrot.push;
            mike = {'type': 'text', 'content': ' '};
            mike = tango.bind(foxtrot)(mike);
 673:
            tango = foxtrot.push;
            mike = {};
            options = 'text';
            mike['type'] = options;
            golf = golf.victorAnswerText;
            mike['content'] = golf;
            mike = tango.bind(foxtrot)(mike);
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 2;
            golf = verify[mike];
            golf = tango.bind(report)(golf);
            options = golf.intl;
            golf = options.formatToParts;
            mike = verify[mike];
            mike = tango.bind(report)(mike);
            mike = mike.t;
            tango = mike.zFwIxM;
            mike = {};
            source = mike;
            update = offset;
            verify = copyDataProperties(source, update);
            yankee = _closure1_slot4;
            verify = {};
            backup = 'strong';
            verify['type'] = backup;
            verify['content'] = foxtrot;
            yankee = yankee.bind(report)(verify);
            verify = 'answerHook';
            mike[verify] = yankee;
            verify = 'percentage';
            mike[verify] = romeo;
            tango = golf.bind(options)(tango, mike);
            _fun00002_ip = 1009; continue _fun00001;
 822:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 2;
            options = yankee[mike];
            options = golf.bind(report)(options);
            verify = options.intl;
            options = verify.formatToParts;
            mike = yankee[mike];
            mike = golf.bind(report)(mike);
            mike = mike.t;
            golf = mike.dqftZ2;
            mike = {};
            source = mike;
            update = offset;
            yankee = copyDataProperties(source, update);
            yankee = 'percentage';
            mike[yankee] = romeo;
            tango = options.bind(verify)(golf, mike);
            _fun00002_ip = 1009; continue _fun00001;
 904:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            mike = 2;
            options = yankee[mike];
            options = golf.bind(report)(options);
            verify = options.intl;
            options = verify.formatToParts;
            mike = yankee[mike];
            mike = golf.bind(report)(mike);
            mike = mike.t;
            golf = mike.9dPxsr;
            mike = {};
            source = mike;
            update = offset;
            offset = copyDataProperties(source, update);
            yankee = _closure1_slot4;
            offset = {'type': 'emoji', 'content': 'frowning', 'surrogate': '😦'};
            yankee = yankee.bind(report)(offset);
            offset = 'sadEmojiHook';
            mike[offset] = yankee;
            tango = options.bind(verify)(golf, mike);
 1009:
            mike = {};
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 6;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            update = zulu.bind(report)(oscar);
            source = mike;
            zulu = copyDataProperties(source, update);
            zulu = 'content';
            mike[zulu] = tango;
            return mike;
 1054:
            return entity;
 1056:
            return entity;
        }
    };
    zulu['createPollResultSystemMessage'] = mike;
    return entity;
})();