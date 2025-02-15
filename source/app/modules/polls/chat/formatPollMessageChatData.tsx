// app/modules/polls/chat/formatPollMessageChatData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    yankee = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = verify;
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
            verify = _closure1_slot13;
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
            golf = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    report = function(argFoo, argBar) { // Original name: reactionForId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argBar;
            zulu = _closure1_slot12;
            entity = undefined;
            mike = argFoo;
            options = zulu.bind(entity)(mike);
            zulu = options.bind(entity)();
            mike = zulu.done;
            golf = global;
            oscar = '';
            report = 'number';
            tango = zulu;
            if(mike) { _fun00008_ip = 131; continue _fun00007 }
 45:
            mike = tango.value;
            zulu = mike.emoji;
            zulu = zulu.id;
            zulu = typeof zulu;
            if(!(report !== zulu)) { _fun00008_ip = 81; continue _fun00007 }
 68:
            zulu = mike.emoji;
            zulu = zulu.id;
            _fun00008_ip = 108; continue _fun00007;
 81:
            offset = mike.emoji;
            yankee = offset.id;
            offset = golf.HermesInternal;
            offset = offset.concat;
            zulu = offset.bind(oscar)(yankee);
 108:
            if(!(zulu !== verify)) { _fun00008_ip = 129; continue _fun00007 }
 112:
            offset = options.bind(entity)();
            zulu = offset.done;
            tango = offset;
            if(zulu) { _fun00008_ip = 131; continue _fun00007 }
 127:
            _fun00008_ip = 45; continue _fun00007;
 129:
            return mike;
 131:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: transformPollEmoji
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            golf = undefined;
            if(!(entity === golf)) { _fun00010_ip = 14; continue _fun00009 }
 12:
            entity = {};
 14:
            mike = entity.animateEmoji;
            if(!(mike === golf)) { _fun00010_ip = 26; continue _fun00009 }
 24:
            mike = false;
 26:
            options = entity.size;
            if(!(options === golf)) { _fun00010_ip = 38; continue _fun00009 }
 35:
            options = 48;
 38:
            report = null;
            if(!(report == tango)) { _fun00010_ip = 46; continue _fun00009 }
 44:
            return golf;
 46:
            oscar = tango.animated;
            zulu = oscar;
            if(!(report == oscar)) { _fun00010_ip = 122; continue _fun00009 }
 59:
            entity = tango.id;
            zulu = oscar;
            if(!(report != entity)) { _fun00010_ip = 122; continue _fun00009 }
 71:
            verify = _closure1_slot4;
            oscar = verify.getCustomEmojiById;
            entity = tango.id;
            entity = oscar.bind(verify)(entity);
            verify = report == entity;
            oscar = undefined;
            if(verify) { _fun00010_ip = 109; continue _fun00009 }
 103:
            oscar = entity.animated;
 109:
            entity = report != oscar;
            if(!entity) { _fun00010_ip = 119; continue _fun00009 }
 116:
            entity = oscar;
 119:
            zulu = entity;
 122:
            entity = undefined;
            if(!mike) { _fun00010_ip = 134; continue _fun00009 }
 127:
            mike = report != zulu;
            entity = zulu;
 134:
            if(!mike) { _fun00010_ip = 140; continue _fun00009 }
 137:
            mike = entity;
 140:
            entity = {};
            zulu = tango.id;
            oscar = report == zulu;
            zulu = null;
            if(oscar) { _fun00010_ip = 183; continue _fun00009 }
 156:
            offset = tango.id;
            oscar = global;
            oscar = oscar.HermesInternal;
            verify = oscar.concat;
            oscar = '';
            zulu = verify.bind(oscar)(offset);
 183:
            entity['id'] = zulu;
            zulu = tango.name;
            entity['name'] = zulu;
            zulu = tango.id;
            if(!(report != zulu)) { _fun00010_ip = 212; continue _fun00009 }
 205:
            zulu = tango.name;
            _fun00010_ip = 251; continue _fun00009;
 212:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 9;
            oscar = offset[oscar];
            offset = verify.bind(golf)(oscar);
            verify = offset.convertSurrogateToName;
            oscar = tango.name;
            zulu = verify.bind(offset)(oscar);
 251:
            entity['displayName'] = zulu;
            zulu = tango.id;
            if(!(report != zulu)) { _fun00010_ip = 320; continue _fun00009 }
 264:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            oscar = report.bind(golf)(zulu);
            report = oscar.getEmojiURL;
            zulu = {};
            verify = tango.id;
            zulu['id'] = verify;
            zulu['animated'] = mike;
            zulu['size'] = options;
            zulu = report.bind(oscar)(zulu);
            _fun00010_ip = 359; continue _fun00009;
 320:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 10;
            report = options[report];
            oscar = oscar.bind(golf)(report);
            report = oscar.getURL;
            tango = tango.name;
            zulu = report.bind(oscar)(tango);
 359:
            entity['src'] = zulu;
            entity['animated'] = mike;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tango = function(argFoo) { // Original name: isPollMessageDirectlyInteractive
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            mike = zulu.poll;
            entity = null;
            entity = entity == mike;
            if(entity) { _fun00012_ip = 51; continue _fun00011 }
 18:
            oscar = _closure1_slot7;
            report = oscar.getMessage;
            tango = zulu.channel_id;
            mike = zulu.id;
            mike = report.bind(oscar)(tango, mike);
            entity = mike === zulu;
 51:
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    mike = function(argFoo, argBar) { // Original name: computeBasicPollChatData
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            control = argFoo;
            mike = argBar;
            entity = arguments[2];
            update = undefined;
            if(!(entity === update)) { _fun00014_ip = 17; continue _fun00013 }
 15:
            entity = {};
 17:
            zulu = entity.formattedExpirationLabel;
            result = control.poll;
            echo = null;
            if(!(echo == result)) { _fun00014_ip = 37; continue _fun00013 }
 35:
            return update;
 37:
            report = control.state;
            tango = _closure1_slot10;
            tango = tango.SENT;
            golf = report === tango;
            backup = '';
            if(!golf) { _fun00014_ip = 110; continue _fun00013 }
 66:
            if(!(echo == zulu)) { _fun00014_ip = 107; continue _fun00013 }
 70:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 12;
            tango = oscar[tango];
            oscar = report.bind(update)(tango);
            report = oscar.formatExpirationLabel;
            tango = result.expiry;
            zulu = report.bind(oscar)(tango);
 107:
            backup = zulu;
 110:
            verify = echo == backup;
            if(!verify) { _fun00014_ip = 120; continue _fun00013 }
 117:
            verify = golf;
 120:
            if(!(echo == mike)) { _fun00014_ip = 149; continue _fun00013 }
 124:
            report = _closure1_slot9;
            zulu = control.getChannelId;
            tango = zulu.bind(control)();
            zulu = control.id;
            mike = report.bind(update)(tango, zulu);
 149:
            if(!(echo == mike)) { _fun00014_ip = 157; continue _fun00013 }
 153:
            mike = _closure1_slot11;
 157:
            report = mike.selectedAnswerIds;
            tango = mike.submitting;
            offset = mike.editing;
            mike = mike.showResults;
            yankee = control.reactions;
            zulu = _closure1_slot16;
            oscar = zulu.bind(update)(control);
            zulu = yankee;
            options = true;
            if(oscar) { _fun00014_ip = 274; continue _fun00013 }
 204:
            kilo = _closure1_slot7;
            foxtrot = kilo.getMessage;
            romeo = control.channel_id;
            oscar = control.id;
            foxtrot = foxtrot.bind(kilo)(romeo, oscar);
            oscar = control.isSearchHit;
            oscar = !oscar;
            if(!oscar) { _fun00014_ip = 246; continue _fun00013 }
 242:
            oscar = echo != foxtrot;
 246:
            kilo = echo == foxtrot;
            romeo = undefined;
            if(kilo) { _fun00014_ip = 261; continue _fun00013 }
 255:
            romeo = foxtrot.reactions;
 261:
            if(!(echo != romeo)) { _fun00014_ip = 268; continue _fun00013 }
 265:
            yankee = romeo;
 268:
            zulu = yankee;
            options = oscar;
 274:
            yankee = report.size;
            oscar = 0;
            foxtrot = yankee > oscar;
            yankee = zulu.some;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.me_vote;
                entity = true;
                entity = entity === mike;
                return entity;
            };
            yankee = yankee.bind(zulu)(oscar);
            romeo = !offset;
            oscar = zulu;
            if(!romeo) { _fun00014_ip = 317; continue _fun00013 }
 314:
            romeo = yankee;
 317:
            zulu = romeo;
            if(romeo) { _fun00014_ip = 326; continue _fun00013 }
 323:
            zulu = verify;
 326:
            if(zulu) { _fun00014_ip = 332; continue _fun00013 }
 329:
            zulu = mike;
 332:
            kilo = golf;
            if(!golf) { _fun00014_ip = 341; continue _fun00013 }
 338:
            kilo = options;
 341:
            if(!kilo) { _fun00014_ip = 362; continue _fun00013 }
 344:
            sizing = !yankee;
            if(sizing) { _fun00014_ip = 353; continue _fun00013 }
 350:
            sizing = offset;
 353:
            if(sizing) { _fun00014_ip = 359; continue _fun00013 }
 356:
            sizing = zulu;
 359:
            kilo = sizing;
 362:
            source = _closure1_slot5;
            output = source.getChannel;
            sizing = control.getChannelId;
            sizing = sizing.bind(control)();
            output = output.bind(source)(sizing);
            sizing = echo == output;
            source = undefined;
            if(sizing) { _fun00014_ip = 420; continue _fun00013 }
 395:
            sizing = output.getGuildId;
            sizing = echo == sizing;
            source = undefined;
            if(sizing) { _fun00014_ip = 420; continue _fun00013 }
 410:
            sizing = output.getGuildId;
            source = sizing.bind(output)();
 420:
            sizing = echo != source;
            echo = null;
            if(!sizing) { _fun00014_ip = 444; continue _fun00013 }
 429:
            output = _closure1_slot6;
            sizing = output.getSelfMember;
            echo = sizing.bind(output)(source);
 444:
            sizing = _closure1_slot0;
            source = _closure1_slot2;
            entity = 13;
            entity = source[entity];
            output = sizing.bind(update)(entity);
            entity = output.hasAutomodQuarantinedProfile;
            output = entity.bind(output)(echo);
            entity = 14;
            entity = source[entity];
            sizing = sizing.bind(update)(entity);
            entity = sizing.isMemberCommunicationDisabled;
            sizing = entity.bind(sizing)(echo);
            entity = {};
            entity['poll'] = result;
            entity['canTapAnswers'] = kilo;
            kilo = romeo;
            if(!kilo) { _fun00014_ip = 519; continue _fun00013 }
 516:
            kilo = golf;
 519:
            if(!kilo) { _fun00014_ip = 525; continue _fun00013 }
 522:
            kilo = !verify;
 525:
            entity['canRemoveVote'] = kilo;
            entity['canShowVoteCounts'] = zulu;
            kilo = !tango;
            if(!kilo) { _fun00014_ip = 544; continue _fun00013 }
 541:
            kilo = foxtrot;
 544:
            if(!kilo) { _fun00014_ip = 550; continue _fun00013 }
 547:
            kilo = !romeo;
 550:
            if(!kilo) { _fun00014_ip = 556; continue _fun00013 }
 553:
            kilo = golf;
 556:
            if(!kilo) { _fun00014_ip = 562; continue _fun00013 }
 559:
            kilo = !output;
 562:
            if(!kilo) { _fun00014_ip = 568; continue _fun00013 }
 565:
            kilo = !sizing;
 568:
            entity['canSubmitVote'] = kilo;
            entity['expirationLabel'] = backup;
            entity['hasSelectedAnswer'] = foxtrot;
            entity['hasVoted'] = romeo;
            entity['hasVoteRecorded'] = yankee;
            entity['isEditingVote'] = offset;
            entity['isExpired'] = verify;
            entity['isInteractive'] = options;
            entity['isSent'] = golf;
            entity['reactions'] = oscar;
            entity['selectedAnswerIds'] = report;
            entity['submitting'] = tango;
            entity['tapShouldOpenVotersModal'] = zulu;
            entity['showResults'] = mike;
            return entity;
        }
    };
    var _closure1_slot17 = mike;
    offset = global;
    foxtrot = offset.Object;
    romeo = foxtrot.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = yankee.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = verify[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 5;
    golf = verify[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 6;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.getPollState;
    var _closure1_slot9 = golf;
    golf = 7;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    yankee = golf.EMPTY_STRING_SNOWFLAKE_ID;
    golf = golf.MessageStates;
    var _closure1_slot10 = golf;
    golf = {'channelId': null, 'selectedAnswerIds': null, 'submitting': false, 'editing': false, 'showResults': false};
    golf['channelId'] = yankee;
    offset = offset.Set;
    yankee = offset.prototype;
    yankee = Object.create(yankee, {constructor: {value: offset}});
    output = yankee;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : yankee;
    golf['selectedAnswerIds'] = offset;
    var _closure1_slot11 = golf;
    golf = 22;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/polls/chat/formatPollMessageChatData.tsx';
    golf = options.bind(verify)(golf);
    oscar = function(argFoo, argBar) { // Original name: formatPollMessageChatData
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscar = argFoo;
            entity = arguments[2];
            kilo = undefined;
            if(!(entity === kilo)) { _fun00016_ip = 16; continue _fun00015 }
 14:
            entity = {};
 16:
            mike = entity.animateEmoji;
            if(!(mike === kilo)) { _fun00016_ip = 28; continue _fun00015 }
 26:
            mike = false;
 28:
            var _closure2_slot0 = mike;
            output = entity.theme;
            if(!(output === kilo)) { _fun00016_ip = 46; continue _fun00015 }
 42:
            output = 'dark';
 46:
            entity = entity.formattedExpirationLabel;
            var _closure2_slot1 = kilo;
            var _closure2_slot2 = kilo;
            var _closure2_slot3 = kilo;
            var _closure2_slot4 = kilo;
            var _closure2_slot5 = kilo;
            var _closure2_slot6 = kilo;
            var _closure2_slot7 = kilo;
            var _closure2_slot8 = kilo;
            var _closure2_slot9 = kilo;
            var _closure2_slot10 = kilo;
            var _closure2_slot11 = kilo;
            var _closure2_slot12 = kilo;
            var _closure2_slot13 = kilo;
            var _closure2_slot14 = kilo;
            var _closure2_slot15 = kilo;
            context = oscar.poll;
            mike = null;
            if(!(mike != context)) { _fun00016_ip = 295; continue _fun00015 }
 127:
            tango = _closure1_slot8;
            zulu = tango.getCurrentUser;
            golf = zulu.bind(tango)();
            if(!(mike != golf)) { _fun00016_ip = 295; continue _fun00015 }
 150:
            zulu = _closure1_slot3;
            zulu = zulu.useReducedMotion;
            _closure2_slot1 = zulu;
            report = _closure1_slot5;
            tango = report.getChannel;
            zulu = oscar.getChannelId;
            zulu = zulu.bind(oscar)();
            tango = tango.bind(report)(zulu);
            zulu = mike == tango;
            report = undefined;
            if(zulu) { _fun00016_ip = 222; continue _fun00015 }
 197:
            zulu = tango.getGuildId;
            zulu = mike == zulu;
            report = undefined;
            if(zulu) { _fun00016_ip = 222; continue _fun00015 }
 212:
            zulu = tango.getGuildId;
            report = zulu.bind(tango)();
 222:
            tango = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 15;
            zulu = options[zulu];
            tango = tango.bind(kilo)(zulu);
            zulu = tango.getAvatarUrl;
            tango = zulu.bind(tango)(golf, report);
            result = context.answers;
            sizing = context.layout_type;
            _closure2_slot2 = sizing;
            report = _closure1_slot17;
            zulu = {};
            zulu['formattedExpirationLabel'] = entity;
            entity = argBar;
            entity = report.bind(kilo)(oscar, entity, zulu);
            if(!(mike == entity)) { _fun00016_ip = 297; continue _fun00015 }
 295:
            return kilo;
 297:
            offset = entity.canTapAnswers;
            update = entity.canRemoveVote;
            golf = entity.canShowVoteCounts;
            control = entity.canSubmitVote;
            _closure2_slot3 = control;
            mike = entity.expirationLabel;
            if(!(kilo === mike)) { _fun00016_ip = 390; continue _fun00015 }
 335:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 16;
            report = verify[zulu];
            report = options.bind(kilo)(report);
            oscar = report.intl;
            report = oscar.string;
            zulu = verify[zulu];
            zulu = options.bind(kilo)(zulu);
            zulu = zulu.t;
            zulu = zulu.e+J3JS;
            mike = report.bind(oscar)(zulu);
 390:
            _closure2_slot4 = mike;
            options = entity.hasSelectedAnswer;
            _closure2_slot5 = options;
            oscar = entity.hasVoted;
            _closure2_slot6 = oscar;
            source = entity.isEditingVote;
            report = entity.isExpired;
            _closure2_slot7 = report;
            yankee = entity.isInteractive;
            vacuum = entity.reactions;
            _closure2_slot8 = vacuum;
            mike = entity.selectedAnswerIds;
            _closure2_slot9 = mike;
            mike = entity.submitting;
            _closure2_slot10 = mike;
            echo = entity.tapShouldOpenVotersModal;
            entity = entity.showResults;
            _closure2_slot11 = entity;
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 17;
            mike = verify[mike];
            romeo = zulu.bind(kilo)(mike);
            mike = romeo.getTotalVotes;
            record = mike.bind(romeo)(vacuum);
            _closure2_slot12 = record;
            papa = 16;
            mike = verify[papa];
            mike = zulu.bind(kilo)(mike);
            sequence = mike.intl;
            vacuum = sequence.formatToPlainString;
            mike = verify[papa];
            mike = zulu.bind(kilo)(mike);
            mike = mike.t;
            romeo = mike.XRkuoa;
            mike = {};
            config = record.toLocaleString;
            config = config.bind(record)();
            mike['count'] = config;
            mike = vacuum.bind(sequence)(romeo, mike);
            _closure2_slot13 = mike;
            mike = global;
            vacuum = mike.Math;
            romeo = vacuum.max;
            sequence = result.map;
            mike = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure1_slot14;
                    mike = _closure2_slot8;
                    entity = argFoo;
                    report = entity.answer_id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    entity = '';
                    entity = tango.bind(entity)(report);
                    report = undefined;
                    zulu = zulu.bind(report)(mike, entity);
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun00018_ip = 85; continue _fun00017 }
 64:
                    zulu = zulu.count_details;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun00018_ip = 85; continue _fun00017 }
 79:
                    mike = zulu.vote;
 85:
                    zulu = entity != mike;
                    entity = 0;
                    if(!zulu) { _fun00018_ip = 97; continue _fun00017 }
 94:
                    entity = mike;
 97:
                    return entity;
                }
            };
            sierra = sequence.bind(result)(mike);
            mike = new Array(0);
            status = 0;
            lima = mike;
            sequence = arraySpread(lima, sierra, status);
            lima = romeo;
            sierra = mike;
            status = vacuum;
            mike = apply(lima, sierra, status);
            _closure2_slot14 = mike;
            romeo = result.map;
            mike = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    backup = argFoo;
                    report = backup.answer_id;
                    tango = global;
                    entity = tango.HermesInternal;
                    zulu = entity.concat;
                    entity = '';
                    foxtrot = zulu.bind(entity)(report);
                    report = _closure1_slot14;
                    entity = _closure2_slot8;
                    golf = undefined;
                    kilo = report.bind(golf)(entity, foxtrot);
                    options = null;
                    entity = options == kilo;
                    verify = undefined;
                    if(entity) { _fun00020_ip = 87; continue _fun00019 }
 66:
                    entity = kilo.count_details;
                    report = options == entity;
                    verify = undefined;
                    if(report) { _fun00020_ip = 87; continue _fun00019 }
 81:
                    verify = entity.vote;
 87:
                    offset = options != verify;
                    report = 0;
                    entity = 0;
                    if(!offset) { _fun00020_ip = 101; continue _fun00019 }
 98:
                    entity = verify;
 101:
                    var _closure3_slot0 = entity;
                    verify = _closure2_slot12;
                    offset = 0;
                    if(!(offset !== verify)) { _fun00020_ip = 123; continue _fun00019 }
 115:
                    verify = _closure2_slot12;
                    offset = entity / verify;
 123:
                    yankee = _closure2_slot9;
                    verify = yankee.has;
                    yankee = verify.bind(yankee)(foxtrot);
                    verify = _closure2_slot14;
                    romeo = entity >= verify;
                    if(!romeo) { _fun00020_ip = 152; continue _fun00019 }
 148:
                    romeo = report !== entity;
 152:
                    verify = _closure2_slot6;
                    entity = undefined;
                    if(!verify) { _fun00020_ip = 183; continue _fun00019 }
 161:
                    sizing = options == kilo;
                    report = undefined;
                    if(sizing) { _fun00020_ip = 176; continue _fun00019 }
 170:
                    report = kilo.me_vote;
 176:
                    verify = options != report;
                    entity = report;
 183:
                    if(!verify) { _fun00020_ip = 189; continue _fun00019 }
 186:
                    verify = entity;
 189:
                    kilo = {};
                    kilo['didSelfVote'] = verify;
                    entity = _closure2_slot6;
                    kilo['hasVoted'] = entity;
                    entity = _closure2_slot7;
                    kilo['isExpired'] = entity;
                    kilo['isSelected'] = yankee;
                    kilo['isLeader'] = romeo;
                    entity = _closure2_slot11;
                    kilo['showResults'] = entity;
                    options = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 8;
                    entity = entity[report];
                    options = options.bind(golf)(entity);
                    entity = options.match;
                    output = entity.bind(options)(kilo);
                    sizing = output.with;
                    entity = true;
                    kilo = {'isExpired': true, 'isLeader': true, 'didSelfVote': true};
                    options = function() {
                        entity = 'victorSelected';
                        return entity;
                    };
                    output = sizing.bind(output)(kilo, options);
                    sizing = output.with;
                    kilo = {'isExpired': true, 'isLeader': true, 'didSelfVote': false};
                    options = function() {
                        entity = 'victorNotSelected';
                        return entity;
                    };
                    output = sizing.bind(output)(kilo, options);
                    sizing = output.with;
                    kilo = {'isExpired': true, 'didSelfVote': true};
                    options = function() {
                        entity = 'loserSelected';
                        return entity;
                    };
                    output = sizing.bind(output)(kilo, options);
                    sizing = output.with;
                    kilo = {};
                    kilo['isExpired'] = entity;
                    options = function() {
                        entity = 'notVoted';
                        return entity;
                    };
                    output = sizing.bind(output)(kilo, options);
                    sizing = output.with;
                    kilo = {'didSelfVote': true, 'isExpired': false};
                    options = function() {
                        entity = 'voted';
                        return entity;
                    };
                    output = sizing.bind(output)(kilo, options);
                    sizing = output.with;
                    kilo = {'hasVoted': true, 'isExpired': false};
                    options = function() {
                        entity = 'notVoted';
                        return entity;
                    };
                    sizing = sizing.bind(output)(kilo, options);
                    kilo = sizing.with;
                    options = {};
                    options['isSelected'] = entity;
                    entity = function() {
                        entity = 'selected';
                        return entity;
                    };
                    sizing = kilo.bind(sizing)(options, entity);
                    kilo = sizing.with;
                    options = {'isExpired': false, 'showResults': true};
                    entity = function() {
                        entity = 'notVoted';
                        return entity;
                    };
                    kilo = kilo.bind(sizing)(options, entity);
                    options = kilo.otherwise;
                    entity = function() {
                        entity = 'normalVote';
                        return entity;
                    };
                    options = options.bind(kilo)(entity);
                    entity = {};
                    entity['answerId'] = foxtrot;
                    foxtrot = {};
                    kilo = backup.poll_media;
                    kilo = kilo.text;
                    foxtrot['text'] = kilo;
                    output = _closure1_slot15;
                    kilo = backup.poll_media;
                    sizing = kilo.emoji;
                    kilo = {};
                    result = _closure2_slot0;
                    kilo['animateEmoji'] = result;
                    kilo = output.bind(golf)(sizing, kilo);
                    foxtrot['emoji'] = kilo;
                    kilo = backup.poll_media;
                    kilo = kilo.sticker_id;
                    foxtrot['stickerId'] = kilo;
                    backup = backup.poll_media;
                    backup = backup.attachment_ids;
                    foxtrot['attachmentIds'] = backup;
                    entity['pollMedia'] = foxtrot;
                    entity['isSelected'] = yankee;
                    yankee = _closure2_slot7;
                    if(!yankee) { _fun00020_ip = 628; continue _fun00019 }
 625:
                    yankee = romeo;
 628:
                    entity['isVictor'] = yankee;
                    entity['didSelfVote'] = verify;
                    entity['style'] = options;
                    options = _closure2_slot10;
                    if(!options) { _fun00020_ip = 658; continue _fun00019 }
 651:
                    verify = _closure2_slot1;
                    options = !verify;
 658:
                    entity['shouldAnimateTransition'] = options;
                    verify = tango.Math;
                    options = verify.round;
                    tango = 100;
                    tango = tango * offset;
                    tango = options.bind(verify)(tango);
                    entity['votesPercentage'] = tango;
                    tango = _closure1_slot0;
                    options = _closure1_slot2;
                    report = options[report];
                    oscar = tango.bind(golf)(report);
                    report = oscar.match;
                    zulu = _closure2_slot2;
                    oscar = report.bind(oscar)(zulu);
                    report = oscar.with;
                    zulu = 18;
                    zulu = options[zulu];
                    zulu = tango.bind(golf)(zulu);
                    zulu = zulu.PollLayoutTypes;
                    tango = zulu.IMAGE_ONLY_ANSWERS;
                    zulu = function() {
                        mike = _closure3_slot0;
                        entity = mike.toLocaleString;
                        tango = entity.bind(mike)();
                        entity = global;
                        entity = entity.HermesInternal;
                        zulu = entity.concat;
                        mike = '(';
                        entity = ')';
                        entity = zulu.bind(mike)(tango, entity);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango, zulu);
                    zulu = tango.otherwise;
                    mike = function() {
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        entity = 16;
                        zulu = oscar[entity];
                        mike = undefined;
                        zulu = report.bind(mike)(zulu);
                        tango = zulu.intl;
                        zulu = tango.formatToPlainString;
                        entity = oscar[entity];
                        entity = report.bind(mike)(entity);
                        entity = entity.t;
                        mike = entity.XRkuoa;
                        entity = {};
                        oscar = _closure3_slot0;
                        report = oscar.toLocaleString;
                        report = report.bind(oscar)();
                        entity['count'] = report;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity['votes'] = mike;
                    return entity;
                }
            };
            config = romeo.bind(result)(mike);
            sequence = 8;
            mike = verify[sequence];
            result = zulu.bind(kilo)(mike);
            romeo = result.match;
            mike = {};
            mike['isExpired'] = report;
            mike['canSubmitVote'] = control;
            mike['hasVoted'] = oscar;
            mike['isEditingVote'] = source;
            mike['canRemoveVote'] = update;
            mike['isInteractive'] = yankee;
            mike['showResults'] = entity;
            control = romeo.bind(result)(mike);
            result = control.with;
            romeo = {};
            update = false;
            romeo['isInteractive'] = update;
            mike = function() {
                entity = undefined;
                return entity;
            };
            control = result.bind(control)(romeo, mike);
            result = control.with;
            romeo = {};
            vacuum = true;
            romeo['isExpired'] = vacuum;
            mike = function() {
                entity = undefined;
                return entity;
            };
            control = result.bind(control)(romeo, mike);
            result = control.with;
            romeo = {};
            romeo['isEditingVote'] = vacuum;
            mike = function() {
                entity = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.JwkNU1;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                mike = 'button';
                entity['presentation'] = mike;
                mike = _closure2_slot5;
                entity['enabled'] = mike;
                mike = 'submit';
                entity['type'] = mike;
                return entity;
            };
            control = result.bind(control)(romeo, mike);
            result = control.with;
            romeo = {};
            romeo['canRemoveVote'] = vacuum;
            mike = function() {
                entity = {'label': null, 'presentation': 'secondaryButton', 'enabled': true, 'type': 'remove'};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.XhQEh4;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                return entity;
            };
            control = result.bind(control)(romeo, mike);
            result = control.with;
            romeo = {'hasVoted': false, 'showResults': true};
            mike = function() {
                entity = {'label': null, 'presentation': 'secondaryButton', 'enabled': true, 'type': 'showVotes'};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.gNj6Ii;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                return entity;
            };
            result = result.bind(control)(romeo, mike);
            romeo = result.otherwise;
            mike = function() {
                entity = {};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.JwkNU1;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                mike = 'button';
                entity['presentation'] = mike;
                mike = _closure2_slot3;
                entity['enabled'] = mike;
                mike = 'submit';
                entity['type'] = mike;
                return entity;
            };
            romeo = romeo.bind(result)(mike);
            mike = 19;
            mike = verify[mike];
            zulu = zulu.bind(kilo)(mike);
            mike = zulu.isIOS;
            result = mike.bind(zulu)();
            control = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[papa];
            zulu = control.bind(kilo)(zulu);
            verify = zulu.intl;
            zulu = verify.string;
            mike = mike[papa];
            mike = control.bind(kilo)(mike);
            mike = mike.t;
            if(result) { _fun00016_ip = 956; continue _fun00015 }
 943:
            result = mike.cHfFqq;
            result = zulu.bind(verify)(result);
            _fun00016_ip = 967; continue _fun00015;
 956:
            mike = mike.PVATMz;
            result = zulu.bind(verify)(mike);
 967:
            _closure2_slot15 = result;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[sequence];
            verify = zulu.bind(kilo)(mike);
            zulu = verify.match;
            mike = {};
            mike['isExpired'] = report;
            mike['isInteractive'] = yankee;
            mike['isEditingVote'] = source;
            source = zulu.bind(verify)(mike);
            verify = source.with;
            zulu = {'isInteractive': false, 'isExpired': false};
            mike = function() {
                entity = {'label': null, 'presentation': 'text', 'enabled': false};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.trrip6;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                return entity;
            };
            source = verify.bind(source)(zulu, mike);
            verify = source.with;
            zulu = {};
            zulu['isEditingVote'] = vacuum;
            mike = function() {
                entity = {'label': null, 'presentation': 'textButton', 'enabled': true, 'type': 'cancel'};
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 16;
                zulu = golf[mike];
                report = undefined;
                zulu = oscar.bind(report)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = oscar.bind(report)(mike);
                mike = mike.t;
                mike = mike.ETE/oK;
                mike = zulu.bind(tango)(mike);
                entity['label'] = mike;
                return entity;
            };
            verify = verify.bind(source)(zulu, mike);
            zulu = verify.otherwise;
            mike = function() {
                entity = {'label': null, 'secondaryLabel': null, 'accessibilityHint': null, 'presentation': 'text', 'enabled': true, 'type': 'showVoterDetails'};
                zulu = _closure2_slot13;
                entity['label'] = zulu;
                zulu = _closure2_slot4;
                entity['secondaryLabel'] = zulu;
                mike = _closure2_slot15;
                entity['accessibilityHint'] = mike;
                return entity;
            };
            zulu = zulu.bind(verify)(mike);
            mike = undefined;
            if(!yankee) { _fun00016_ip = 1184; continue _fun00015 }
 1094:
            mike = undefined;
            if(report) { _fun00016_ip = 1184; continue _fun00015 }
 1099:
            mike = undefined;
            if(oscar) { _fun00016_ip = 1184; continue _fun00015 }
 1104:
            mike = undefined;
            if(entity) { _fun00016_ip = 1184; continue _fun00015 }
 1109:
            entity = {'label': null, 'presentation': 'textButton', 'enabled': true, 'type': 'showVotes'};
            record = _closure1_slot0;
            verify = _closure1_slot2;
            source = verify[papa];
            source = record.bind(kilo)(source);
            control = source.intl;
            source = control.string;
            verify = verify[papa];
            verify = record.bind(kilo)(verify);
            verify = verify.t;
            verify = verify./KHAUF;
            verify = source.bind(control)(verify);
            entity['label'] = verify;
            mike = entity;
 1184:
            verify = context.allow_multiselect;
            control = _closure1_slot0;
            source = _closure1_slot2;
            entity = source[sequence];
            papa = control.bind(kilo)(entity);
            record = papa.match;
            entity = {};
            entity['isInteractive'] = yankee;
            entity['isExpired'] = report;
            entity['canSelectMultipleAnswers'] = verify;
            target = record.bind(papa)(entity);
            papa = target.with;
            record = {};
            record['isInteractive'] = update;
            entity = function() {
                entity = undefined;
                return entity;
            };
            target = papa.bind(target)(record, entity);
            papa = target.with;
            record = {};
            record['isExpired'] = vacuum;
            entity = function() {
                entity = undefined;
                return entity;
            };
            target = papa.bind(target)(record, entity);
            papa = target.with;
            record = {};
            record['canSelectMultipleAnswers'] = vacuum;
            entity = function() {
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 16;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.yCXvxc;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            papa = papa.bind(target)(record, entity);
            record = papa.otherwise;
            entity = function() {
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 16;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.9Y2wKC;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            record = record.bind(papa)(entity);
            entity = {};
            context = context.question;
            entity['question'] = context;
            entity['promptLabel'] = record;
            entity['answers'] = config;
            source = source[sequence];
            sequence = control.bind(kilo)(source);
            control = sequence.match;
            source = {};
            source['tapShouldOpenVotersModal'] = echo;
            source['canTapAnswers'] = offset;
            source['canSelectMultipleAnswers'] = verify;
            config = control.bind(sequence)(source);
            sequence = config.with;
            control = {};
            control['tapShouldOpenVotersModal'] = vacuum;
            source = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.PollChatAnswerInteractionType;
                entity = entity.LIST;
                return entity;
            };
            config = sequence.bind(config)(control, source);
            sequence = config.with;
            control = {};
            control['canTapAnswers'] = update;
            source = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.PollChatAnswerInteractionType;
                entity = entity.LIST;
                return entity;
            };
            sequence = sequence.bind(config)(control, source);
            control = sequence.with;
            source = {};
            source['canSelectMultipleAnswers'] = update;
            update = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.PollChatAnswerInteractionType;
                entity = entity.RADIO_BUTTONS;
                return entity;
            };
            control = control.bind(sequence)(source, update);
            source = control.with;
            update = {};
            update['canSelectMultipleAnswers'] = vacuum;
            backup = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.PollChatAnswerInteractionType;
                entity = entity.CHECKBOXES;
                return entity;
            };
            update = source.bind(control)(update, backup);
            backup = update.exhaustive;
            backup = backup.bind(update)();
            entity['answersInteraction'] = backup;
            backup = undefined;
            if(!echo) { _fun00016_ip = 1522; continue _fun00015 }
 1519:
            backup = result;
 1522:
            entity['answerTapAccessibilityLabel'] = backup;
            entity['layoutType'] = sizing;
            backup = _closure1_slot1;
            result = _closure1_slot2;
            foxtrot = 21;
            foxtrot = result[foxtrot];
            backup = backup.bind(kilo)(foxtrot);
            foxtrot = {};
            foxtrot['theme'] = output;
            foxtrot['layoutType'] = sizing;
            foxtrot = backup.bind(kilo)(foxtrot);
            entity['resources'] = foxtrot;
            foxtrot = 'normal';
            entity['containerStyle'] = foxtrot;
            entity['primaryAction'] = romeo;
            entity['isInteractive'] = yankee;
            entity['canTapAnswers'] = offset;
            entity['canSelectMultipleAnswers'] = verify;
            entity['hasSelectedAnswer'] = options;
            entity['canShowVoteCounts'] = golf;
            entity['hasVoted'] = oscar;
            entity['isExpired'] = report;
            entity['myAvatarUrl'] = tango;
            entity['secondaryAction'] = zulu;
            entity['tertiaryAction'] = mike;
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['reactionForId'] = report;
    zulu['isPollMessageDirectlyInteractive'] = tango;
    zulu['computeBasicPollChatData'] = mike;
    return entity;
})();