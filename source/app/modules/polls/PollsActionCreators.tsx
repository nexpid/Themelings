// app/modules/polls/PollsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    offset = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = offset;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot18;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot18;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: getPollVoteEventProperties
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zulu = new Array(0);
            options = argBar;
            tango = 0;
            verify = zulu;
            golf = 0;
            entity = arraySpread(verify, options, golf);
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            oscar = function(argFoo) { // Original name: _loop
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    entity = _closure2_slot0;
                    tango = null;
                    oscar = tango == entity;
                    entity = undefined;
                    report = undefined;
                    if(oscar) { _fun00010_ip = 65; continue _fun00009 }
 29:
                    golf = _closure2_slot0;
                    oscar = golf.find;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.answer_id;
                        entity = global;
                        tango = entity.parseInt;
                        zulu = _closure3_slot0;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu);
                        entity = mike === entity;
                        return entity;
                    };
                    mike = oscar.bind(golf)(mike);
                    oscar = tango == mike;
                    report = undefined;
                    if(oscar) { _fun00010_ip = 65; continue _fun00009 }
 59:
                    report = mike.poll_media;
 65:
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun00010_ip = 79; continue _fun00009 }
 74:
                    mike = report.text;
 79:
                    if(!(tango != mike)) { _fun00010_ip = 98; continue _fun00009 }
 83:
                    oscar = _closure2_slot1;
                    mike = 1;
                    mike = oscar + mike;
                    _closure2_slot1 = mike;
 98:
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun00010_ip = 113; continue _fun00009 }
 107:
                    mike = report.emoji;
 113:
                    if(!(tango != mike)) { _fun00010_ip = 132; continue _fun00009 }
 117:
                    tango = _closure2_slot2;
                    mike = 1;
                    mike = tango + mike;
                    _closure2_slot2 = mike;
 132:
                    return entity;
                }
            };
            entity = zulu.length;
            entity = tango < entity;
            report = undefined;
            if(!entity) { _fun00008_ip = 77; continue _fun00007 }
 56:
            entity = zulu[tango];
            entity = oscar.bind(report)(entity);
            tango = tango + 1;
            entity = zulu.length;
            if(tango < entity) { _fun00008_ip = 56; continue _fun00007 }
 77:
            entity = {};
            entity['analyticsSelectedAnswerIds'] = zulu;
            zulu = _closure2_slot1;
            entity['selectedTextAnswersCount'] = zulu;
            mike = _closure2_slot2;
            entity['selectedEmojiAnswersCount'] = mike;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: showLurkingAlert
        entity = argFoo;
        mike = entity.guildId;
        var _closure2_slot0 = mike;
        options = entity.title;
        golf = entity.body;
        zulu = _closure1_slot1;
        offset = _closure1_slot3;
        entity = 12;
        mike = offset[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.show;
        mike = {};
        mike['title'] = options;
        mike['body'] = golf;
        verify = _closure1_slot0;
        oscar = 13;
        golf = offset[oscar];
        golf = verify.bind(entity)(golf);
        yankee = golf.intl;
        options = yankee.string;
        golf = offset[oscar];
        golf = verify.bind(entity)(golf);
        golf = golf.t;
        golf = golf.9VLmlZ;
        golf = options.bind(yankee)(golf);
        mike['confirmText'] = golf;
        golf = offset[oscar];
        golf = verify.bind(entity)(golf);
        options = golf.intl;
        golf = options.string;
        oscar = offset[oscar];
        oscar = verify.bind(entity)(oscar);
        oscar = oscar.t;
        oscar = oscar.2m+Sqq;
        oscar = golf.bind(options)(oscar);
        mike['cancelText'] = oscar;
        report = function() { // Original name: onConfirm
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 14;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.joinGuild;
            zulu = _closure2_slot0;
            mike = {};
            oscar = _closure1_slot16;
            oscar = oscar.POLL_ALERT;
            mike['source'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike['onConfirm'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot20 = entity;
    mike = function(argFoo) { // Original name: handleShowVotesForAnswer
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            options = entity.channelId;
            golf = entity.messageId;
            oscar = entity.answerId;
            zulu = _closure1_slot8;
            mike = zulu.getChannel;
            tango = mike.bind(zulu)(options);
            mike = null;
            if(!(mike != tango)) { _fun00012_ip = 354; continue _fun00011 }
 45:
            verify = _closure1_slot5;
            report = verify.isLurking;
            zulu = tango.guild_id;
            zulu = report.bind(verify)(zulu);
            if(zulu) { _fun00012_ip = 223; continue _fun00011 }
 71:
            report = _closure1_slot11;
            zulu = report.getMessage;
            golf = zulu.bind(report)(options, golf);
            if(!(mike != golf)) { _fun00012_ip = 354; continue _fun00011 }
 94:
            zulu = golf.poll;
            if(!(mike != zulu)) { _fun00012_ip = 354; continue _fun00011 }
 107:
            zulu = golf.poll;
            zulu = zulu.answers;
            report = zulu.length;
            zulu = 0;
            if(!(zulu !== report)) { _fun00012_ip = 354; continue _fun00011 }
 133:
            if(!(mike == oscar)) { _fun00012_ip = 174; continue _fun00011 }
 137:
            mike = global;
            report = mike.String;
            mike = golf.poll;
            mike = mike.answers;
            mike = mike[zulu];
            zulu = mike.answer_id;
            mike = undefined;
            oscar = report.bind(mike)(zulu);
 174:
            report = _closure1_slot2;
            zulu = _closure1_slot3;
            mike = 15;
            zulu = zulu[mike];
            mike = undefined;
            report = report.bind(mike)(zulu);
            zulu = report.showVotesForAnswer;
            mike = {};
            mike['message'] = golf;
            mike['initialAnswerId'] = oscar;
            mike = zulu.bind(report)(mike);
            _fun00012_ip = 354; continue _fun00011;
 223:
            zulu = _closure1_slot20;
            mike = {};
            tango = tango.guild_id;
            mike['guildId'] = tango;
            golf = _closure1_slot0;
            options = _closure1_slot3;
            tango = 13;
            report = options[tango];
            entity = undefined;
            report = golf.bind(entity)(report);
            verify = report.intl;
            oscar = verify.string;
            report = options[tango];
            report = golf.bind(entity)(report);
            report = report.t;
            report = report.7LpysL;
            report = oscar.bind(verify)(report);
            mike['title'] = report;
            report = options[tango];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = options[tango];
            tango = golf.bind(entity)(tango);
            tango = tango.t;
            tango = tango.5sHHo6;
            tango = report.bind(oscar)(tango);
            mike['body'] = tango;
            entity = zulu.bind(entity)(mike);
 354:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = mike;
    options = function(argFoo) { // Original name: handleUpdateVoteEditingState
        entity = argFoo;
        report = entity.channelId;
        var _closure2_slot0 = report;
        tango = entity.messageId;
        entity = entity.isEditing;
        var _closure2_slot1 = entity;
        zulu = _closure1_slot14;
        entity = undefined;
        mike = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = argFoo;
                entity = {};
                zulu = _closure2_slot0;
                entity['channelId'] = zulu;
                zulu = global;
                zulu = zulu.Set;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                oscar = report;
                zulu = new oscar[zulu](report);
                zulu = zulu instanceof Object ? zulu : report;
                entity['selectedAnswerIds'] = zulu;
                zulu = false;
                entity['submitting'] = zulu;
                mike = _closure2_slot1;
                entity['editing'] = mike;
                mike = null;
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00014_ip = 82; continue _fun00013 }
 76:
                zulu = tango.showResults;
 82:
                mike = mike != zulu;
                if(!mike) { _fun00014_ip = 92; continue _fun00013 }
 89:
                mike = zulu;
 92:
                entity['showResults'] = mike;
                return entity;
            }
        };
        mike = zulu.bind(entity)(report, tango, mike);
        return entity;
    };
    var _closure1_slot22 = options;
    entity = function(argFoo) { // Original name: getCurrentAnswerIds
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            zulu = entity.messageId;
            mike = _closure1_slot11;
            entity = mike.getMessage;
            entity = entity.bind(mike)(tango, zulu);
            mike = null;
            if(!(mike != entity)) { _fun00016_ip = 66; continue _fun00015 }
 38:
            zulu = entity.reactions;
            mike = zulu.flatMap;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.me_vote;
                    entity = true;
                    if(!(entity !== zulu)) { _fun00018_ip = 21; continue _fun00017 }
 15:
                    entity = new Array(0);
                    _fun00018_ip = 32; continue _fun00017;
 21:
                    mike = mike.emoji;
                    entity = mike.name;
 32:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            _fun00016_ip = 70; continue _fun00015;
 66:
            entity = new Array(0);
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: optimisticallySetAnswers
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _optimisticallySetAnswers
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00020_ip = 274; continue _fun00019 }
 15:
                    verify = mike.channelId;
                    var _closure4_slot0 = verify;
                    options = mike.messageId;
                    var _closure4_slot1 = options;
                    romeo = mike.answerIds;
                    tango = undefined;
                    var _closure4_slot2 = tango;
                    var _closure4_slot3 = tango;
                    SaveGenerator(address=53);
 51:
                    return tango;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 271; continue _fun00019 }
 62:
                    golf = _closure1_slot23;
                    oscar = {};
                    oscar['channelId'] = verify;
                    oscar['messageId'] = options;
                    yankee = golf.bind(tango)(oscar);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    options = 18;
                    verify = golf[options];
                    offset = oscar.bind(tango)(verify);
                    verify = offset.difference;
                    verify = verify.bind(offset)(yankee, romeo);
                    options = golf[options];
                    offset = oscar.bind(tango)(options);
                    options = offset.difference;
                    yankee = options.bind(offset)(romeo, yankee);
                    options = _closure1_slot7;
                    report = options.getId;
                    report = report.bind(options)();
                    _closure4_slot2 = report;
                    options = verify.map;
                    report = function(argFoo) {
                        entity = {};
                        mike = 'MESSAGE_REACTION_REMOVE';
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['id'] = mike;
                        return entity;
                    };
                    backup = options.bind(verify)(report);
                    report = new Array(0);
                    foxtrot = 0;
                    kilo = report;
                    foxtrot = arraySpread(kilo, backup, foxtrot);
                    offset = yankee.map;
                    options = function(argFoo) {
                        entity = {};
                        mike = 'MESSAGE_REACTION_ADD';
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['id'] = mike;
                        return entity;
                    };
                    backup = offset.bind(yankee)(options);
                    kilo = report;
                    options = arraySpread(kilo, backup, foxtrot);
                    _closure4_slot3 = report;
                    report = 19;
                    report = golf[report];
                    report = oscar.bind(tango)(report);
                    oscar = report.Emitter;
                    report = oscar.batched;
                    zulu = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            verify = _closure4_slot3;
                            entity = verify.length;
                            options = 0;
                            mike = options < entity;
                            golf = undefined;
                            report = 20;
                            tango = true;
                            zulu = 21;
                            entity = undefined;
                            if(!mike) { _fun00022_ip = 175; continue _fun00021 }
 39:
                            mike = verify[options];
                            kilo = mike.id;
                            backup = mike.type;
                            yankee = _closure1_slot1;
                            foxtrot = _closure1_slot3;
                            mike = foxtrot[report];
                            romeo = yankee.bind(golf)(mike);
                            yankee = romeo.dispatch;
                            mike = {};
                            mike['type'] = backup;
                            backup = _closure4_slot0;
                            mike['channelId'] = backup;
                            backup = _closure4_slot1;
                            mike['messageId'] = backup;
                            backup = {};
                            backup['id'] = kilo;
                            backup['name'] = kilo;
                            mike['emoji'] = backup;
                            backup = _closure4_slot2;
                            mike['userId'] = backup;
                            mike['optimistic'] = tango;
                            backup = _closure1_slot0;
                            foxtrot = foxtrot[zulu];
                            foxtrot = backup.bind(golf)(foxtrot);
                            foxtrot = foxtrot.ReactionTypes;
                            foxtrot = foxtrot.VOTE;
                            mike['reactionType'] = foxtrot;
                            entity = yankee.bind(romeo)(mike);
                            options = options + 1;
                            mike = verify.length;
                            if(options < mike) { _fun00022_ip = 39; continue _fun00021 }
 175:
                            return entity;
                        }
                    };
                    zulu = report.bind(oscar)(zulu);
                    report = null;
                    if(!(report != zulu)) { _fun00020_ip = 265; continue _fun00019 }
 255:
                    SaveGenerator(address=259);
 257:
                    return zulu;
 259:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 268; continue _fun00019 }
 265:
                    return tango;
 268:
                    return zulu;
 271:
                    return mike;
 274:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    verify = function() { // Original name: handlePollSubmitVote
        entity = undefined;
        tango = _closure1_slot27;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = verify;
    entity = function() { // Original name: _handlePollSubmitVote
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00024_ip = 943; continue _fun00023 }
 15:
                    verify = mike.channelId;
                    options = mike.messageId;
                    zulu = undefined;
                    tango = undefined;
                    yankee = undefined;
                    result = undefined;
                    backup = undefined;
                    sizing = undefined;
                    SaveGenerator(address=41);
 39:
                    return zulu;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00024_ip = 940; continue _fun00023 }
 50:
                    romeo = _closure1_slot8;
                    offset = romeo.getChannel;
                    golf = verify;
                    golf = offset.bind(romeo)(golf);
                    kilo = null;
                    if(!(kilo != golf)) { _fun00024_ip = 937; continue _fun00023 }
 79:
                    output = _closure1_slot5;
                    romeo = output.isLurking;
                    offset = golf.guild_id;
                    offset = romeo.bind(output)(offset);
                    if(offset) { _fun00024_ip = 808; continue _fun00023 }
 105:
                    output = _closure1_slot10;
                    romeo = output.canChatInGuild;
                    offset = golf.guild_id;
                    offset = romeo.bind(output)(offset);
                    if(offset) { _fun00024_ip = 276; continue _fun00023 }
 131:
                    romeo = _closure1_slot1;
                    vacuum = _closure1_slot3;
                    offset = 12;
                    offset = vacuum[offset];
                    output = romeo.bind(zulu)(offset);
                    romeo = output.show;
                    offset = {};
                    control = _closure1_slot0;
                    echo = 13;
                    update = vacuum[echo];
                    update = control.bind(zulu)(update);
                    sequence = update.intl;
                    source = sequence.string;
                    update = vacuum[echo];
                    update = control.bind(zulu)(update);
                    update = update.t;
                    update = update.p245ws;
                    update = source.bind(sequence)(update);
                    offset['title'] = update;
                    update = vacuum[echo];
                    update = control.bind(zulu)(update);
                    source = update.intl;
                    update = source.string;
                    echo = vacuum[echo];
                    echo = control.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.U/uodn;
                    echo = update.bind(source)(echo);
                    offset['body'] = echo;
                    offset = romeo.bind(output)(offset);
                    _fun00024_ip = 937; continue _fun00023;
 276:
                    offset = _closure1_slot13;
                    echo = verify;
                    output = options;
                    offset = offset.bind(zulu)(echo, output);
                    tango = offset;
                    update = _closure1_slot1;
                    source = _closure1_slot3;
                    romeo = 11;
                    romeo = source[romeo];
                    update = update.bind(zulu)(romeo);
                    romeo = kilo != offset;
                    offset = 'Must not be able to vote without existing state!';
                    offset = update.bind(zulu)(romeo, offset);
                    romeo = _closure1_slot23;
                    offset = {};
                    offset['channelId'] = echo;
                    offset['messageId'] = output;
                    yankee = romeo.bind(zulu)(offset);
 350: // try_start_0
                    offset = tango.selectedAnswerIds;
                    tango = offset.values;
                    record = tango.bind(offset)();
                    romeo = new Array(0);
                    config = 0;
                    context = romeo;
                    tango = arraySpread(context, record, config);
                    result = romeo;
                    offset = _closure1_slot14;
                    echo = verify;
                    output = options;
                    tango = function(argFoo) {
                        mike = argFoo;
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        entity = 11;
                        entity = tango[entity];
                        report = undefined;
                        tango = zulu.bind(report)(entity);
                        entity = null;
                        zulu = entity != mike;
                        entity = 'Must not be able to vote without existing state!';
                        entity = tango.bind(report)(zulu, entity);
                        entity = {};
                        golf = entity;
                        oscar = mike;
                        mike = copyDataProperties(golf, oscar);
                        zulu = true;
                        mike = 'submitting';
                        entity[mike] = zulu;
                        zulu = false;
                        mike = 'editing';
                        entity[mike] = zulu;
                        return entity;
                    };
                    tango = offset.bind(zulu)(echo, output, tango);
                    offset = _closure1_slot24;
                    tango = {};
                    tango['channelId'] = echo;
                    tango['messageId'] = output;
                    tango['answerIds'] = romeo;
                    tango = offset.bind(zulu)(tango);
                    SaveGenerator(address=433);
 431:
                    return tango;
 433:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 533; continue _fun00023 }
 439:
                    romeo = _closure1_slot2;
                    output = _closure1_slot3;
                    offset = 22;
                    offset = output[offset];
                    output = romeo.bind(zulu)(offset);
                    romeo = output.submitPollVote;
                    offset = {};
                    echo = verify;
                    offset['channelId'] = echo;
                    echo = options;
                    offset['messageId'] = echo;
                    offset['answerIds'] = result;
                    offset = romeo.bind(output)(offset);
                    SaveGenerator(address=495);
 493:
                    return offset;
 495:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(romeo) { _fun00024_ip = 530; continue _fun00023 }
 501:
                    echo = _closure1_slot14;
                    result = verify;
                    output = options;
                    romeo = function() {
                        entity = undefined;
                        return entity;
                    };
                    romeo = echo.bind(zulu)(result, output, romeo);
 525: // try_end0
                    _fun00024_ip = 937; continue _fun00023;
 530:
                    return offset;
 533:
                    return tango;
 536: // catch_target0
                    CatchBlockStart(arg_register=16);
                    foxtrot = output;
                    offset = _closure1_slot1;
                    echo = _closure1_slot3;
                    tango = 12;
                    tango = echo[tango];
                    romeo = offset.bind(zulu)(tango);
                    offset = romeo.show;
                    tango = {};
                    control = _closure1_slot0;
                    result = 13;
                    update = echo[result];
                    update = control.bind(zulu)(update);
                    source = update.intl;
                    update = source.string;
                    echo = echo[result];
                    echo = control.bind(zulu)(echo);
                    echo = echo.t;
                    echo = echo.iufib2;
                    echo = update.bind(source)(echo);
                    tango['title'] = echo;
                    output = output.getAnyErrorMessage;
                    echo = kilo == output;
                    output = undefined;
                    if(echo) { _fun00024_ip = 652; continue _fun00023 }
 639:
                    update = foxtrot;
                    echo = update.getAnyErrorMessage;
                    output = echo.bind(update)();
 652:
                    sizing = output;
                    if(!(kilo == output)) { _fun00024_ip = 666; continue _fun00023 }
 659:
                    foxtrot = foxtrot.message;
                    _fun00024_ip = 669; continue _fun00023;
 666:
                    foxtrot = sizing;
 669:
                    backup = foxtrot;
                    if(!(kilo == foxtrot)) { _fun00024_ip = 730; continue _fun00023 }
 676:
                    output = _closure1_slot0;
                    foxtrot = _closure1_slot3;
                    kilo = foxtrot[result];
                    kilo = output.bind(zulu)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    foxtrot = foxtrot[result];
                    foxtrot = output.bind(zulu)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.eAn6z8;
                    foxtrot = kilo.bind(sizing)(foxtrot);
                    _fun00024_ip = 733; continue _fun00023;
 730:
                    foxtrot = backup;
 733:
                    tango['body'] = foxtrot;
                    tango = offset.bind(romeo)(tango);
                    offset = _closure1_slot24;
                    tango = {};
                    romeo = verify;
                    tango['channelId'] = romeo;
                    romeo = options;
                    tango['messageId'] = romeo;
                    tango['answerIds'] = yankee;
                    tango = offset.bind(zulu)(tango);
                    SaveGenerator(address=776);
 774:
                    return tango;
 776:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 805; continue _fun00023 }
 782:
                    offset = _closure1_slot14;
                    report = function(argFoo) {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            mike = argFoo;
                            entity = null;
                            if(!(entity == mike)) { _fun00026_ip = 13; continue _fun00025 }
 9:
                            entity = undefined;
                            return entity;
 13:
                            entity = {};
                            report = entity;
                            tango = mike;
                            mike = copyDataProperties(report, tango);
                            zulu = false;
                            mike = 'submitting';
                            entity[mike] = zulu;
                            mike = 'editing';
                            entity[mike] = zulu;
                            return entity;
                        }
                    };
                    report = offset.bind(zulu)(verify, options, report);
                    _fun00024_ip = 937; continue _fun00023;
 805:
                    return tango;
 808:
                    report = _closure1_slot20;
                    tango = {};
                    golf = golf.guild_id;
                    tango['guildId'] = golf;
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    oscar = 13;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    yankee = golf.intl;
                    options = yankee.string;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    golf = golf.t;
                    golf = golf.Qic1FB;
                    golf = options.bind(yankee)(golf);
                    tango['title'] = golf;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    options = golf.intl;
                    golf = options.string;
                    oscar = offset[oscar];
                    oscar = verify.bind(zulu)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.5sHHo6;
                    oscar = golf.bind(options)(oscar);
                    tango['body'] = oscar;
                    tango = report.bind(zulu)(tango);
 937:
                    return zulu;
 940:
                    return mike;
 943:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _handleClearPollVote
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00028_ip = 283; continue _fun00027 }
 15:
                    verify = mike.channelId;
                    var _closure4_slot0 = verify;
                    options = mike.messageId;
                    zulu = undefined;
                    SaveGenerator(address=35);
 33:
                    return zulu;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00028_ip = 280; continue _fun00027 }
 44:
                    golf = _closure1_slot8;
                    report = golf.getChannel;
                    golf = report.bind(golf)(verify);
                    report = null;
                    if(!(report != golf)) { _fun00028_ip = 277; continue _fun00027 }
 70:
                    yankee = _closure1_slot5;
                    offset = yankee.isLurking;
                    report = golf.guild_id;
                    report = offset.bind(yankee)(report);
                    if(report) { _fun00028_ip = 146; continue _fun00027 }
 93:
                    report = _closure1_slot14;
                    tango = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            tango = argFoo;
                            entity = {};
                            mike = _closure4_slot0;
                            entity['channelId'] = mike;
                            mike = global;
                            mike = mike.Set;
                            zulu = mike.prototype;
                            zulu = Object.create(zulu, {constructor: {value: mike}});
                            oscar = zulu;
                            mike = new oscar[mike](report);
                            mike = mike instanceof Object ? mike : zulu;
                            entity['selectedAnswerIds'] = mike;
                            mike = false;
                            entity['submitting'] = mike;
                            entity['editing'] = mike;
                            mike = null;
                            report = mike == tango;
                            zulu = undefined;
                            if(report) { _fun00030_ip = 78; continue _fun00029 }
 72:
                            zulu = tango.showResults;
 78:
                            mike = mike != zulu;
                            if(!mike) { _fun00030_ip = 88; continue _fun00029 }
 85:
                            mike = zulu;
 88:
                            entity['showResults'] = mike;
                            return entity;
                        }
                    };
                    tango = report.bind(zulu)(verify, options, tango);
                    report = _closure1_slot26;
                    tango = {};
                    tango['channelId'] = verify;
                    tango['messageId'] = options;
                    tango = report.bind(zulu)(tango);
                    SaveGenerator(address=134);
 132:
                    return tango;
 134:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00028_ip = 143; continue _fun00027 }
 140:
                    return tango;
 143:
                    return tango;
 146:
                    report = _closure1_slot20;
                    tango = {};
                    golf = golf.guild_id;
                    tango['guildId'] = golf;
                    verify = _closure1_slot0;
                    offset = _closure1_slot3;
                    oscar = 13;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    yankee = golf.intl;
                    options = yankee.string;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    golf = golf.t;
                    golf = golf.B9QnBg;
                    golf = options.bind(yankee)(golf);
                    tango['title'] = golf;
                    golf = offset[oscar];
                    golf = verify.bind(zulu)(golf);
                    options = golf.intl;
                    golf = options.string;
                    oscar = offset[oscar];
                    oscar = verify.bind(zulu)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.BVZCTk;
                    oscar = golf.bind(options)(oscar);
                    tango['body'] = oscar;
                    tango = report.bind(zulu)(tango);
 277:
                    return zulu;
 280:
                    return mike;
 283:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _handlePollActionTapped
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00032_ip = 313; continue _fun00031 }
 15:
                    golf = mike.channelId;
                    oscar = mike.messageId;
                    offset = mike.type;
                    tango = undefined;
                    SaveGenerator(address=36);
 34:
                    return tango;
 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 310; continue _fun00031 }
 45:
                    report = 'submit';
                    if(!(report !== offset)) { _fun00032_ip = 272; continue _fun00031 }
 56:
                    report = 'remove';
                    if(!(report !== offset)) { _fun00032_ip = 237; continue _fun00031 }
 67:
                    report = 'cancel';
                    if(!(report !== offset)) { _fun00032_ip = 206; continue _fun00031 }
 78:
                    report = 'showVotes';
                    if(!(report !== offset)) { _fun00032_ip = 182; continue _fun00031 }
 88:
                    report = 'showVoterDetails';
                    if(!(report !== offset)) { _fun00032_ip = 158; continue _fun00031 }
 98:
                    options = _closure1_slot1;
                    verify = _closure1_slot3;
                    report = 11;
                    report = verify[report];
                    verify = options.bind(tango)(report);
                    report = global;
                    report = report.HermesInternal;
                    options = report.concat;
                    report = 'Unknown poll action type: ';
                    options = options.bind(report)(offset);
                    report = false;
                    report = verify.bind(tango)(report, options);
                    _fun00032_ip = 304; continue _fun00031;
 158:
                    options = _closure1_slot21;
                    report = {};
                    report['channelId'] = golf;
                    report['messageId'] = oscar;
                    report = options.bind(tango)(report);
                    _fun00032_ip = 304; continue _fun00031;
 182:
                    options = {};
                    options['channelId'] = golf;
                    options['messageId'] = oscar;
                    report = function(argFoo) { // Original name: handleShowVotes
                        entity = argFoo;
                        report = entity.channelId;
                        var _closure5_slot0 = report;
                        tango = entity.messageId;
                        var _closure5_slot1 = tango;
                        zulu = _closure1_slot14;
                        entity = undefined;
                        mike = function(argFoo) {
                            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                                report = argFoo;
                                zulu = null;
                                mike = zulu == report;
                                if(mike) { _fun00034_ip = 21; continue _fun00033 }
 12:
                                entity = report.showResults;
                                mike = !entity;
 21:
                                options = _closure1_slot11;
                                golf = options.getMessage;
                                oscar = _closure5_slot0;
                                tango = _closure5_slot1;
                                tango = golf.bind(options)(oscar, tango);
                                oscar = zulu != tango;
                                options = 0;
                                offset = 0;
                                if(!oscar) { _fun00034_ip = 89; continue _fun00033 }
 62:
                                golf = tango.reactions;
                                oscar = golf.reduce;
                                tango = function(argFoo, argBar) {
                                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                                        entity = argBar;
                                        zulu = entity.count_details;
                                        mike = null;
                                        tango = mike == zulu;
                                        entity = undefined;
                                        if(tango) { _fun00036_ip = 26; continue _fun00035 }
 20:
                                        entity = zulu.vote;
 26:
                                        zulu = mike != entity;
                                        mike = 0;
                                        if(!zulu) { _fun00036_ip = 38; continue _fun00035 }
 35:
                                        mike = entity;
 38:
                                        entity = argFoo;
                                        entity = entity + mike;
                                        return entity;
                                    }
                                };
                                offset = oscar.bind(golf)(tango, options);
 89:
                                golf = _closure1_slot1;
                                oscar = _closure1_slot3;
                                tango = 17;
                                oscar = oscar[tango];
                                tango = undefined;
                                verify = golf.bind(tango)(oscar);
                                options = verify.trackWithMetadata;
                                entity = _closure1_slot15;
                                golf = entity.POLL_SHOW_RESULTS_CLICKED;
                                entity = {};
                                oscar = _closure5_slot0;
                                entity['channel_id'] = oscar;
                                yankee = _closure5_slot1;
                                entity['message_id'] = yankee;
                                entity['show_results'] = mike;
                                entity['votes_count'] = offset;
                                entity = options.bind(verify)(golf, entity);
                                entity = {};
                                entity['channelId'] = oscar;
                                oscar = global;
                                oscar = oscar.Set;
                                golf = oscar.prototype;
                                golf = Object.create(golf, {constructor: {value: oscar}});
                                kilo = golf;
                                oscar = new kilo[oscar](backup);
                                oscar = oscar instanceof Object ? oscar : golf;
                                entity['selectedAnswerIds'] = oscar;
                                oscar = zulu == report;
                                golf = undefined;
                                if(oscar) { _fun00034_ip = 220; continue _fun00033 }
 214:
                                golf = report.submitting;
 220:
                                oscar = zulu != golf;
                                if(!oscar) { _fun00034_ip = 230; continue _fun00033 }
 227:
                                oscar = golf;
 230:
                                entity['submitting'] = oscar;
                                oscar = zulu == report;
                                tango = undefined;
                                if(oscar) { _fun00034_ip = 250; continue _fun00033 }
 244:
                                tango = report.submitting;
 250:
                                zulu = zulu != tango;
                                if(!zulu) { _fun00034_ip = 260; continue _fun00033 }
 257:
                                zulu = tango;
 260:
                                entity['editing'] = zulu;
                                entity['showResults'] = mike;
                                return entity;
                            }
                        };
                        mike = zulu.bind(entity)(report, tango, mike);
                        return entity;
                    };
                    report = report.bind(tango)(options);
                    _fun00032_ip = 304; continue _fun00031;
 206:
                    options = _closure1_slot22;
                    report = {};
                    report['channelId'] = golf;
                    report['messageId'] = oscar;
                    verify = false;
                    report['isEditing'] = verify;
                    report = options.bind(tango)(report);
                    _fun00032_ip = 304; continue _fun00031;
 237:
                    report = {};
                    report['channelId'] = golf;
                    report['messageId'] = oscar;
                    zulu = function() { // Original name: handleClearPollVote
                        entity = undefined;
                        tango = _closure1_slot28;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = zulu.bind(tango)(report);
                    SaveGenerator(address=263);
 261:
                    return zulu;
 263:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(!report) { _fun00032_ip = 304; continue _fun00031 }
 269:
                    return zulu;
 272:
                    report = _closure1_slot26;
                    zulu = {};
                    zulu['channelId'] = golf;
                    zulu['messageId'] = oscar;
                    zulu = report.bind(tango)(zulu);
                    SaveGenerator(address=298);
 296:
                    return zulu;
 298:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 307; continue _fun00031 }
 304:
                    return tango;
 307:
                    return zulu;
 310:
                    return mike;
 313:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _createPoll
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00038_ip = 613; continue _fun00037 }
 15:
                    sizing = mike.channel;
                    result = mike.question;
                    options = mike.answers;
                    foxtrot = mike.allowMultiSelect;
                    offset = mike.duration;
                    oscar = mike.layout;
                    verify = oscar;
                    var _closure4_slot0 = oscar;
                    golf = mike.onClose;
                    oscar = undefined;
                    kilo = undefined;
                    var _closure4_slot1 = oscar;
                    romeo = undefined;
                    tango = undefined;
                    SaveGenerator(address=78);
 76:
                    return oscar;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00038_ip = 610; continue _fun00037 }
 87:
                    update = _closure1_slot12;
                    echo = update.getUploads;
                    backup = sizing;
                    output = backup.id;
                    backup = _closure1_slot9;
                    backup = backup.Poll;
                    backup = echo.bind(update)(output, backup);
                    kilo = backup;
                    _closure4_slot1 = backup;
                    output = options;
                    backup = output.map;
                    options = function(argFoo) {
                        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            zulu = _closure4_slot1;
                            tango = null;
                            oscar = tango == zulu;
                            zulu = undefined;
                            verify = undefined;
                            if(oscar) { _fun00040_ip = 51; continue _fun00039 }
 29:
                            golf = _closure4_slot1;
                            oscar = golf.findIndex;
                            mike = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = entity.localCreationAnswerId;
                                entity = mike === entity;
                                return entity;
                            };
                            verify = oscar.bind(golf)(mike);
 51:
                            mike = {};
                            golf = -1;
                            oscar = undefined;
                            if(!(golf !== verify)) { _fun00040_ip = 98; continue _fun00039 }
 65:
                            golf = global;
                            golf = golf.HermesInternal;
                            options = golf.concat;
                            golf = '';
                            options = options.bind(golf)(verify);
                            golf = new Array(1);
                            golf[0] = options;
                            oscar = golf;
 98:
                            mike['attachment_ids'] = oscar;
                            oscar = _closure4_slot0;
                            golf = _closure1_slot0;
                            options = _closure1_slot3;
                            report = 23;
                            report = options[report];
                            report = golf.bind(zulu)(report);
                            report = report.PollLayoutTypes;
                            report = report.DEFAULT;
                            if(!(oscar === report)) { _fun00040_ip = 176; continue _fun00039 }
 146:
                            golf = entity.text;
                            oscar = tango == golf;
                            report = undefined;
                            if(oscar) { _fun00040_ip = 170; continue _fun00039 }
 160:
                            oscar = golf.trim;
                            report = oscar.bind(golf)();
 170:
                            mike['text'] = report;
 176:
                            entity = entity.image;
                            report = tango == entity;
                            zulu = undefined;
                            if(report) { _fun00040_ip = 197; continue _fun00039 }
 191:
                            zulu = entity.emoji;
 197:
                            if(!(tango != zulu)) { _fun00040_ip = 265; continue _fun00039 }
 201:
                            entity = zulu.id;
                            if(!(tango == entity)) { _fun00040_ip = 240; continue _fun00039 }
 210:
                            entity = zulu.optionallyDiverseSequence;
                            if(!(tango != entity)) { _fun00040_ip = 265; continue _fun00039 }
 220:
                            entity = {};
                            tango = zulu.optionallyDiverseSequence;
                            entity['name'] = tango;
                            mike['emoji'] = entity;
                            _fun00040_ip = 265; continue _fun00039;
 240:
                            entity = {};
                            zulu = zulu.id;
                            entity['id'] = zulu;
                            zulu = '';
                            entity['name'] = zulu;
                            mike['emoji'] = entity;
 265:
                            entity = {};
                            entity['poll_media'] = mike;
                            return entity;
                        }
                    };
                    backup = backup.bind(output)(options);
                    options = {};
                    output = {};
                    echo = result;
                    result = echo.trim;
                    result = result.bind(echo)();
                    output['text'] = result;
                    options['question'] = output;
                    options['answers'] = backup;
                    options['allow_multiselect'] = foxtrot;
                    options['duration'] = offset;
                    options['layout_type'] = verify;
                    romeo = options;
 199: // try_start_0
                    options = kilo;
                    verify = null;
                    if(!(verify != options)) { _fun00038_ip = 222; continue _fun00037 }
 208:
                    options = kilo;
                    offset = options.length;
                    options = 0;
                    if(!(!(offset > options))) { _fun00038_ip = 281; continue _fun00037 }
 222:
                    offset = _closure1_slot1;
                    foxtrot = _closure1_slot3;
                    options = 26;
                    options = foxtrot[options];
                    backup = offset.bind(oscar)(options);
                    foxtrot = backup.sendPollMessage;
                    options = sizing;
                    offset = options.id;
                    options = romeo;
                    options = foxtrot.bind(backup)(offset, options);
                    SaveGenerator(address=269);
 267:
                    return options;
 269:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(!offset) { _fun00038_ip = 417; continue _fun00037 }
 278: // try_end0
                    return options;
 281: // try_start_1
                    offset = _closure1_slot7;
                    options = offset.getToken;
                    options = options.bind(offset)();
                    tango = options;
                    options = verify != options;
                    foxtrot = '';
                    if(!options) { _fun00038_ip = 312; continue _fun00037 }
 309:
                    foxtrot = tango;
 312:
                    options = _closure1_slot2;
                    backup = _closure1_slot3;
                    tango = 24;
                    tango = backup[tango];
                    offset = options.bind(oscar)(tango);
                    options = offset.sendPollMessageWithAttachments;
                    tango = {};
                    tango['channel'] = sizing;
                    tango['items'] = kilo;
                    tango['token'] = foxtrot;
                    tango['poll'] = romeo;
                    foxtrot = _closure1_slot0;
                    romeo = 25;
                    romeo = backup[romeo];
                    foxtrot = foxtrot.bind(oscar)(romeo);
                    romeo = foxtrot.createNonce;
                    romeo = romeo.bind(foxtrot)();
                    tango['nonce'] = romeo;
                    yankee = function() { // Original name: maxSizeCallback
                        entity = undefined;
                        return entity;
                    };
                    tango['maxSizeCallback'] = yankee;
                    tango = options.bind(offset)(tango);
                    SaveGenerator(address=411);
 409:
                    return tango;
 411:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun00038_ip = 431; continue _fun00037 }
 417:
                    options = golf;
                    if(!(verify != options)) { _fun00038_ip = 428; continue _fun00037 }
 424:
                    golf = golf.bind(oscar)();
 428: // try_end1
                    return oscar;
 431:
                    return tango;
 434: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    report = options;
                    verify = _closure1_slot0;
                    tango = _closure1_slot3;
                    golf = 27;
                    tango = tango[golf];
                    tango = verify.bind(oscar)(tango);
                    tango = tango.APIError;
                    tango = options instanceof tango;
                    if(tango) { _fun00038_ip = 520; continue _fun00037 }
 472:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    zulu = zulu[golf];
                    zulu = tango.bind(oscar)(zulu);
                    oscar = zulu.APIError;
                    control = report;
                    tango = oscar.prototype;
                    tango = Object.create(tango, {constructor: {value: oscar}});
                    vacuum = tango;
                    zulu = new vacuum[oscar](control, source);
                    tango = zulu instanceof Object ? zulu : tango;
                    _fun00038_ip = 523; continue _fun00037;
 520:
                    tango = report;
 523:
                    zulu = tango.getAnyErrorMessage;
                    tango = zulu.bind(tango)();
                    zulu = 'poll';
                    if(!(zulu === tango)) { _fun00038_ip = 555; continue _fun00037 }
 541:
                    zulu = report;
                    tango = zulu.text;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00038_ip = 560; continue _fun00037 }
 555:
                    zulu = report;
                    _fun00038_ip = 608; continue _fun00037;
 560:
                    tango = {};
                    control = tango;
                    source = report;
                    oscar = copyDataProperties(control, source);
                    oscar = global;
                    golf = oscar.JSON;
                    oscar = golf.parse;
                    report = report.text;
                    oscar = oscar.bind(golf)(report);
                    report = 'body';
                    tango[report] = oscar;
                    zulu = tango;
 608:
                    throw zulu;
 610:
                    return mike;
 613:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: _endPollEarly
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00042_ip = 257; continue _fun00041 }
 13:
                    verify = mike.channelId;
                    options = mike.messageId;
                    report = undefined;
                    SaveGenerator(address=29);
 27:
                    return report;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00042_ip = 254; continue _fun00041 }
 38:
                    oscar = _closure1_slot1;
                    backup = _closure1_slot3;
                    zulu = 12;
                    zulu = backup[zulu];
                    golf = oscar.bind(report)(zulu);
                    oscar = golf.confirm;
                    zulu = {};
                    foxtrot = _closure1_slot0;
                    offset = 13;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(report)(yankee);
                    kilo = yankee.intl;
                    romeo = kilo.string;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(report)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.+rfkTE;
                    yankee = romeo.bind(kilo)(yankee);
                    zulu['title'] = yankee;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(report)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.string;
                    offset = backup[offset];
                    offset = foxtrot.bind(report)(offset);
                    offset = offset.t;
                    offset = offset.H2I1gI;
                    offset = yankee.bind(romeo)(offset);
                    zulu['body'] = offset;
                    zulu = oscar.bind(golf)(zulu);
                    SaveGenerator(address=185);
 183:
                    return zulu;
 185:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00042_ip = 251; continue _fun00041 }
 191:
                    if(!zulu) { _fun00042_ip = 245; continue _fun00041 }
 194:
                    oscar = _closure1_slot2;
                    golf = _closure1_slot3;
                    tango = 22;
                    tango = golf[tango];
                    golf = oscar.bind(report)(tango);
                    oscar = golf.endPollEarly;
                    tango = {};
                    tango['channelId'] = verify;
                    tango['messageId'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=239);
 237:
                    return tango;
 239:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun00042_ip = 248; continue _fun00041 }
 245:
                    return report;
 248:
                    return tango;
 251:
                    return zulu;
 254:
                    return mike;
 257:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot31 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = offset.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = golf[tango];
    tango = offset.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 9;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    offset = tango.getPollState;
    var _closure1_slot13 = offset;
    tango = tango.updatePollState;
    var _closure1_slot14 = tango;
    tango = 10;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    offset = tango.AnalyticEvents;
    var _closure1_slot15 = offset;
    tango = tango.JoinGuildSources;
    var _closure1_slot16 = tango;
    tango = {};
    offset = function(argFoo) { // Original name: handlePollAnswerTapped
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            tango = argFoo;
            offset = tango.answerId;
            var _closure2_slot0 = offset;
            oscar = null;
            zulu = Object.create(oscar);
            entity = 0;
            zulu['answerId'] = entity;
            kilo = {};
            backup = tango;
            foxtrot = zulu;
            zulu = copyDataProperties(kilo, backup, foxtrot);
            entity = undefined;
            var _closure2_slot4 = entity;
            options = zulu.channelId;
            report = zulu.messageId;
            golf = _closure1_slot11;
            tango = golf.getMessage;
            verify = tango.bind(golf)(options, report);
            if(!(oscar == verify)) { _fun00044_ip = 190; continue _fun00043 }
 78:
            golf = _closure1_slot6;
            tango = golf.getMessage;
            tango = tango.bind(golf)(options, report);
            golf = tango.message;
            if(!(oscar == golf)) { _fun00044_ip = 169; continue _fun00043 }
 103:
            yankee = _closure1_slot1;
            romeo = _closure1_slot3;
            golf = 11;
            golf = romeo[golf];
            romeo = yankee.bind(entity)(golf);
            yankee = oscar != verify;
            golf = 'Tapped on a non-existent poll message';
            golf = romeo.bind(entity)(yankee, golf);
            golf = global;
            golf = golf.Error;
            yankee = golf.prototype;
            yankee = Object.create(yankee, {constructor: {value: golf}});
            sizing = yankee;
            golf = new sizing[golf](kilo);
            golf = golf instanceof Object ? golf : yankee;
            throw golf;
 169:
            golf = {};
            golf['channelId'] = options;
            golf['messageId'] = report;
            tango = tango.message;
            golf['message'] = tango;
            _fun00044_ip = 207; continue _fun00043;
 190:
            tango = {};
            tango['message'] = verify;
            tango['channelId'] = options;
            tango['messageId'] = report;
            golf = tango;
 207:
            report = golf.channelId;
            var _closure2_slot1 = report;
            tango = golf.messageId;
            var _closure2_slot2 = tango;
            golf = golf.message;
            var _closure2_slot3 = golf;
            verify = _closure1_slot0;
            yankee = _closure1_slot3;
            options = 16;
            options = yankee[options];
            verify = verify.bind(entity)(options);
            options = verify.computeBasicPollChatData;
            options = options.bind(verify)(golf);
            if(!(oscar == options)) { _fun00044_ip = 271; continue _fun00043 }
 269:
            options = {};
 271:
            verify = options.tapShouldOpenVotersModal;
            options = true;
            if(!(options === verify)) { _fun00044_ip = 309; continue _fun00043 }
 283:
            verify = _closure1_slot21;
            options = {};
            options['channelId'] = report;
            options['messageId'] = tango;
            options['answerId'] = offset;
            options = verify.bind(entity)(options);
            _fun00044_ip = 352; continue _fun00043;
 309:
            golf = golf.poll;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun00044_ip = 330; continue _fun00043 }
 324:
            oscar = golf.allow_multiselect;
 330:
            _closure2_slot4 = oscar;
            zulu = _closure1_slot14;
            mike = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    mike = argFoo;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00046_ip = 313; continue _fun00045 }
 12:
                    entity = {};
                    foxtrot = entity;
                    romeo = mike;
                    mike = copyDataProperties(foxtrot, romeo);
                    mike = global;
                    report = mike.Set;
                    foxtrot = entity.selectedAnswerIds;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    backup = tango;
                    mike = new backup[report](foxtrot, romeo);
                    golf = mike instanceof Object ? mike : tango;
                    entity['selectedAnswerIds'] = golf;
                    tango = golf.has;
                    mike = _closure2_slot0;
                    mike = tango.bind(golf)(mike);
                    if(mike) { _fun00046_ip = 163; continue _fun00045 }
 84:
                    mike = _closure2_slot4;
                    if(mike) { _fun00046_ip = 147; continue _fun00045 }
 91:
                    mike = _closure1_slot17;
                    oscar = undefined;
                    report = mike.bind(oscar)(golf);
                    tango = report.bind(oscar)();
                    mike = tango.done;
                    if(mike) { _fun00046_ip = 147; continue _fun00045 }
 117:
                    options = tango.value;
                    mike = golf.delete;
                    mike = mike.bind(golf)(options);
                    options = report.bind(oscar)();
                    mike = options.done;
                    tango = options;
                    if(!mike) { _fun00046_ip = 117; continue _fun00045 }
 147:
                    tango = golf.add;
                    mike = _closure2_slot0;
                    mike = tango.bind(golf)(mike);
                    _fun00046_ip = 177; continue _fun00045;
 163:
                    tango = golf.delete;
                    mike = _closure2_slot0;
                    mike = tango.bind(golf)(mike);
 177:
                    report = _closure1_slot19;
                    tango = _closure2_slot3;
                    options = tango.poll;
                    verify = zulu == options;
                    oscar = undefined;
                    tango = undefined;
                    if(verify) { _fun00046_ip = 211; continue _fun00045 }
 205:
                    tango = options.answers;
 211:
                    tango = report.bind(oscar)(tango, golf);
                    verify = tango.analyticsSelectedAnswerIds;
                    options = tango.selectedTextAnswersCount;
                    golf = tango.selectedEmojiAnswersCount;
                    report = _closure1_slot1;
                    yankee = _closure1_slot3;
                    tango = 17;
                    tango = yankee[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.trackWithMetadata;
                    mike = _closure1_slot15;
                    tango = mike.POLL_VOTE_SELECTED;
                    mike = {};
                    yankee = _closure2_slot1;
                    mike['channel_id'] = yankee;
                    offset = _closure2_slot2;
                    mike['message_id'] = offset;
                    mike['selected_answer_ids'] = verify;
                    mike['selected_text_answers_count'] = options;
                    mike['selected_emoji_answers_count'] = golf;
                    mike = report.bind(oscar)(tango, mike);
                    return entity;
 313:
                    entity = global;
                    tango = entity.Set;
                    mike = _closure2_slot0;
                    entity = new Array(1);
                    entity[0] = mike;
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    backup = mike;
                    foxtrot = entity;
                    entity = new backup[tango](foxtrot, romeo);
                    mike = entity instanceof Object ? entity : mike;
                    tango = _closure1_slot19;
                    report = _closure2_slot3;
                    oscar = report.poll;
                    golf = zulu == oscar;
                    report = undefined;
                    zulu = undefined;
                    if(golf) { _fun00046_ip = 393; continue _fun00045 }
 387:
                    zulu = oscar.answers;
 393:
                    zulu = tango.bind(report)(zulu, mike);
                    verify = zulu.analyticsSelectedAnswerIds;
                    options = zulu.selectedTextAnswersCount;
                    golf = zulu.selectedEmojiAnswersCount;
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 17;
                    zulu = oscar[zulu];
                    oscar = tango.bind(report)(zulu);
                    report = oscar.trackWithMetadata;
                    entity = _closure1_slot15;
                    tango = entity.POLL_VOTE_SELECTED;
                    entity = {};
                    zulu = _closure2_slot1;
                    entity['channel_id'] = zulu;
                    offset = _closure2_slot2;
                    entity['message_id'] = offset;
                    entity['selected_answer_ids'] = verify;
                    entity['selected_text_answers_count'] = options;
                    entity['selected_emoji_answers_count'] = golf;
                    entity = report.bind(oscar)(tango, entity);
                    entity = {'channelId': null, 'selectedAnswerIds': null, 'submitting': false, 'editing': false, 'showResults': false};
                    entity['channelId'] = zulu;
                    entity['selectedAnswerIds'] = mike;
                    return entity;
                }
            };
            mike = zulu.bind(entity)(report, tango, mike);
 352:
            return entity;
        }
    };
    tango['handlePollAnswerTapped'] = offset;
    tango['handlePollSubmitVote'] = verify;
    tango['handleUpdateVoteEditingState'] = options;
    options = function() { // Original name: handlePollActionTapped
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    tango['handlePollActionTapped'] = options;
    options = function() { // Original name: createPoll
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    tango['createPoll'] = options;
    report = function() { // Original name: endPollEarly
        entity = undefined;
        tango = _closure1_slot31;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    tango['endPollEarly'] = report;
    report = 28;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/polls/PollsActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['handleShowVotesForAnswer'] = mike;
    return entity;
})();