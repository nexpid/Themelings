// app/modules/messages/native/createChannelStream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun90017: for(var _fun90017_ip = 0; ; ) switch(_fun90017_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun90017_ip = 46; continue _fun90017 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun90017_ip = 55; continue _fun90017 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun90017_ip = 345; continue _fun90017 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun90017_ip = 323; continue _fun90017 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun90017_ip = 283; continue _fun90017 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun90017_ip = 270; continue _fun90017 }
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
            if(!golf) { _fun90017_ip = 163; continue _fun90017 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun90017_ip = 179; continue _fun90017 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun90017_ip = 249; continue _fun90017 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun90017_ip = 249; continue _fun90017 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun90017_ip = 234; continue _fun90017 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun90017_ip = 247; continue _fun90017 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun90017_ip = 265; continue _fun90017;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun90017_ip = 283; continue _fun90017;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun90017_ip = 323; continue _fun90017 }
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
            if(!tango) { _fun90017_ip = 330; continue _fun90017 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun90018: for(var _fun90018_ip = 0; ; ) switch(_fun90018_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun90018_ip = 56; continue _fun90018 }
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
                    _fun90018_ip = 67; continue _fun90018;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun90019: for(var _fun90019_ip = 0; ; ) switch(_fun90019_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun90019_ip = 23; continue _fun90019 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun90019_ip = 33; continue _fun90019 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun90019_ip = 70; continue _fun90019 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun90019_ip = 55; continue _fun90019 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    tango = report.bind(entity)(tango);
    golf = tango.Changeset;
    var _closure1_slot6 = golf;
    golf = tango.LoadingType;
    var _closure1_slot7 = golf;
    golf = tango.RowType;
    var _closure1_slot8 = golf;
    tango = tango.SeparatorType;
    var _closure1_slot9 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/createChannelStream.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createChannelStream
        _fun90020: for(var _fun90020_ip = 0; ; ) switch(_fun90020_ip) {
 0:
            entity = argFoo;
            mike = entity.channel;
            var _closure2_slot0 = mike;
            report = entity.messages;
            var _closure2_slot1 = report;
            offset = entity.uploads;
            mike = entity.oldestUnreadMessageId;
            var _closure2_slot2 = mike;
            mike = entity.replyingMessageId;
            var _closure2_slot3 = mike;
            mike = entity.currentUserId;
            var _closure2_slot4 = mike;
            mike = entity.useReducedMotion;
            var _closure2_slot5 = mike;
            mike = entity.canAddNewReactions;
            var _closure2_slot6 = mike;
            mike = entity.selectedSummary;
            var _closure2_slot7 = mike;
            mike = entity.chatManager;
            var _closure2_slot8 = mike;
            oscar = entity.roleStyle;
            var _closure2_slot9 = oscar;
            mike = entity.loaded;
            var _closure2_slot10 = mike;
            mike = entity.animated;
            var _closure2_slot11 = mike;
            golf = entity.forced;
            var _closure2_slot12 = golf;
            mike = entity.updateMessageIds;
            var _closure2_slot13 = mike;
            mike = entity.scrollToMessageId;
            var _closure2_slot14 = mike;
            mike = entity.jumpTargetId;
            var _closure2_slot15 = mike;
            mike = entity.overrideJumpType;
            var _closure2_slot16 = mike;
            mike = entity.focusTargetId;
            var _closure2_slot17 = mike;
            mike = entity.isResourceChannel;
            var _closure2_slot18 = mike;
            mike = entity.messagesNewlyLoaded;
            var _closure2_slot19 = mike;
            mike = entity.fromICYMITab;
            var _closure2_slot20 = mike;
            entity = entity.unloadableContentEntryMessageIds;
            var _closure2_slot21 = entity;
            options = undefined;
            var _closure2_slot24 = options;
            var _closure2_slot25 = options;
            var _closure2_slot26 = options;
            var _closure2_slot27 = options;
            entity = new Array(0);
            var _closure2_slot22 = entity;
            yankee = {};
            var _closure2_slot23 = yankee;
            verify = _closure1_slot10;
            mike = offset.slice;
            offset = mike.bind(offset)();
            mike = offset.reverse;
            mike = mike.bind(offset)();
            offset = verify.bind(options)(mike);
            verify = offset.bind(options)();
            mike = verify.done;
            if(mike) { _fun90020_ip = 355; continue _fun90020 }
 305:
            romeo = verify.value;
            backup = _closure1_slot5;
            foxtrot = backup.getMessageForFile;
            mike = romeo.id;
            mike = foxtrot.bind(backup)(mike);
            mike = mike.nonce;
            yankee[mike] = romeo;
            romeo = offset.bind(options)();
            mike = romeo.done;
            verify = romeo;
            if(!mike) { _fun90020_ip = 305; continue _fun90020 }
 355:
            mike = function(argFoo) { // Original name: unreadFilter
                _fun90021: for(var _fun90021_ip = 0; ; ) switch(_fun90021_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot0;
                    entity = mike.isForumPost;
                    entity = entity.bind(mike)();
                    report = tango.id;
                    mike = _closure2_slot2;
                    report = report === mike;
                    if(entity) { _fun90021_ip = 41; continue _fun90021 }
 36:
                    entity = report;
                    _fun90021_ip = 104; continue _fun90021;
 41:
                    mike = report;
                    if(!report) { _fun90021_ip = 101; continue _fun90021 }
 47:
                    tango = tango.id;
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    report = 4;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = golf.bind(report)(oscar);
                    report = oscar.castChannelIdAsMessageId;
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    zulu = report.bind(oscar)(zulu);
                    mike = tango !== zulu;
 101:
                    entity = mike;
 104:
                    return entity;
                }
            };
            _closure2_slot24 = mike;
            mike = new Array(0);
            _closure2_slot25 = mike;
            verify = function(argFoo) { // Original name: insertMessage
                _fun90022: for(var _fun90022_ip = 0; ; ) switch(_fun90022_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot25;
                    mike = 0;
                    zulu = zulu[mike];
                    mike = null;
                    if(!(mike != zulu)) { _fun90022_ip = 127; continue _fun90022 }
 22:
                    mike = _closure2_slot24;
                    golf = undefined;
                    mike = mike.bind(golf)(tango);
                    if(mike) { _fun90022_ip = 127; continue _fun90022 }
 36:
                    report = zulu.length;
                    mike = 1;
                    mike = report - mike;
                    oscar = zulu[mike];
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    mike = 5;
                    mike = options[mike];
                    report = report.bind(golf)(mike);
                    mike = _closure2_slot0;
                    mike = report.bind(golf)(mike, oscar, tango);
                    if(mike) { _fun90022_ip = 102; continue _fun90022 }
 89:
                    mike = zulu.unshift;
                    mike = mike.bind(zulu)(tango);
                    _fun90022_ip = 150; continue _fun90022;
 102:
                    report = _closure2_slot25;
                    zulu = report.unshift;
                    mike = new Array(1);
                    mike[0] = tango;
                    mike = zulu.bind(report)(mike);
                    _fun90022_ip = 150; continue _fun90022;
 127:
                    zulu = _closure2_slot25;
                    mike = zulu.unshift;
                    entity = new Array(1);
                    entity[0] = tango;
                    entity = mike.bind(zulu)(entity);
 150:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot26 = verify;
            offset = report.forEach;
            verify = function(argFoo) {
                _fun90023: for(var _fun90023_ip = 0; ; ) switch(_fun90023_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(mike);
                    report = oscar.tryCreateInjectedMessage;
                    tango = _closure2_slot0;
                    tango = report.bind(oscar)(zulu, tango);
                    report = null;
                    if(!(report != tango)) { _fun90023_ip = 84; continue _fun90023 }
 53:
                    report = _closure2_slot26;
                    report = report.bind(entity)(tango);
                    oscar = _closure2_slot2;
                    report = zulu.id;
                    if(!(oscar === report)) { _fun90023_ip = 84; continue _fun90023 }
 75:
                    tango = tango.id;
                    _closure2_slot2 = tango;
 84:
                    mike = _closure2_slot26;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            verify = offset.bind(report)(verify);
            verify = function(argFoo) { // Original name: determineChangeType
                _fun90024: for(var _fun90024_ip = 0; ; ) switch(_fun90024_ip) {
 0:
                    tango = arguments[1];
                    entity = undefined;
                    if(!(tango === entity)) { _fun90024_ip = 11; continue _fun90024 }
 9:
                    tango = false;
 11:
                    zulu = _closure2_slot8;
                    mike = zulu.determineChangeType;
                    entity = {};
                    oscar = argFoo;
                    entity['message'] = oscar;
                    oscar = _closure2_slot13;
                    entity['updateMessageIds'] = oscar;
                    report = _closure2_slot12;
                    entity['forced'] = report;
                    entity = mike.bind(zulu)(entity, tango);
                    return entity;
                }
            };
            _closure2_slot27 = verify;
            verify = mike.forEach;
            zulu = function(argFoo, argBar) {
                _fun90025: for(var _fun90025_ip = 0; ; ) switch(_fun90025_ip) {
 0:
                    yankee = argFoo;
                    tango = argBar;
                    var _closure3_slot0 = yankee;
                    entity = yankee.length;
                    source = 1;
                    entity = entity - source;
                    offset = yankee[entity];
                    var _closure3_slot1 = offset;
                    entity = _closure2_slot25;
                    entity = entity.length;
                    entity = entity - source;
                    romeo = tango === entity;
                    golf = 0;
                    entity = golf === tango;
                    if(!entity) { _fun90025_ip = 71; continue _fun90025 }
 61:
                    mike = _closure2_slot1;
                    entity = mike.hasMoreAfter;
 71:
                    if(!entity) { _fun90025_ip = 226; continue _fun90025 }
 77:
                    zulu = _closure2_slot22;
                    mike = zulu.push;
                    entity = {};
                    verify = _closure1_slot7;
                    verify = verify.LOAD_AFTER;
                    entity['rowType'] = verify;
                    verify = _closure2_slot12;
                    foxtrot = _closure1_slot6;
                    if(verify) { _fun90025_ip = 125; continue _fun90025 }
 117:
                    verify = foxtrot.NOOP;
                    _fun90025_ip = 131; continue _fun90025;
 125:
                    verify = foxtrot.UPDATE;
 131:
                    entity['changeType'] = verify;
                    verify = _closure2_slot9;
                    entity['roleStyle'] = verify;
                    verify = _closure2_slot1;
                    verify = verify.loadingMore;
                    entity['isLoading'] = verify;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    options = 7;
                    verify = sizing[options];
                    backup = undefined;
                    verify = kilo.bind(backup)(verify);
                    foxtrot = verify.intl;
                    verify = foxtrot.string;
                    options = sizing[options];
                    options = kilo.bind(backup)(options);
                    options = options.t;
                    options = options.XBlaiI;
                    options = verify.bind(foxtrot)(options);
                    entity['text'] = options;
                    entity = mike.bind(zulu)(entity);
 226:
                    entity = _closure2_slot1;
                    mike = entity.hasMoreBefore;
                    if(!mike) { _fun90025_ip = 242; continue _fun90025 }
 239:
                    mike = romeo;
 242:
                    zulu = _closure2_slot24;
                    entity = undefined;
                    zulu = zulu.bind(entity)(offset);
                    if(!zulu) { _fun90025_ip = 263; continue _fun90025 }
 256:
                    options = _closure2_slot20;
                    zulu = !options;
 263:
                    verify = null;
                    foxtrot = null;
                    if(romeo) { _fun90025_ip = 292; continue _fun90025 }
 270:
                    options = _closure2_slot25;
                    tango = tango + source;
                    tango = options[tango];
                    tango = tango[golf];
                    foxtrot = tango.timestamp;
 292:
                    if(romeo) { _fun90025_ip = 341; continue _fun90025 }
 295:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 8;
                    tango = options[tango];
                    options = golf.bind(entity)(tango);
                    golf = options.isSameDay;
                    tango = offset.timestamp;
                    golf = golf.bind(options)(tango, foxtrot);
                    tango = true;
                    if(!golf) { _fun90025_ip = 446; continue _fun90025 }
 341:
                    options = _closure2_slot0;
                    golf = options.isDM;
                    golf = golf.bind(options)();
                    if(!golf) { _fun90025_ip = 371; continue _fun90025 }
 358:
                    options = _closure2_slot1;
                    options = options.hasMoreBefore;
                    golf = !options;
 371:
                    if(!golf) { _fun90025_ip = 377; continue _fun90025 }
 374:
                    golf = romeo;
 377:
                    if(golf) { _fun90025_ip = 439; continue _fun90025 }
 380:
                    foxtrot = _closure2_slot0;
                    options = foxtrot.isThread;
                    options = options.bind(foxtrot)();
                    if(!options) { _fun90025_ip = 414; continue _fun90025 }
 397:
                    backup = _closure2_slot0;
                    foxtrot = backup.isForumPost;
                    foxtrot = foxtrot.bind(backup)();
                    options = !foxtrot;
 414:
                    if(!options) { _fun90025_ip = 430; continue _fun90025 }
 417:
                    foxtrot = _closure2_slot1;
                    foxtrot = foxtrot.hasMoreBefore;
                    options = !foxtrot;
 430:
                    if(!options) { _fun90025_ip = 436; continue _fun90025 }
 433:
                    options = romeo;
 436:
                    golf = options;
 439:
                    tango = false;
                    if(!golf) { _fun90025_ip = 446; continue _fun90025 }
 444:
                    tango = true;
 446:
                    report = function(argFoo) { // Original name: processHiddenMessageRow
                        _fun90026: for(var _fun90026_ip = 0; ; ) switch(_fun90026_ip) {
 0:
                            entity = argFoo;
                            tango = _closure1_slot10;
                            zulu = _closure3_slot0;
                            golf = undefined;
                            oscar = tango.bind(golf)(zulu);
                            report = oscar.bind(golf)();
                            tango = report.done;
                            if(tango) { _fun90026_ip = 232; continue _fun90026 }
 42:
                            romeo = report.value;
                            tango = _closure2_slot27;
                            verify = tango.bind(golf)(romeo);
                            tango = _closure1_slot6;
                            tango = tango.NOOP;
                            tango = verify !== tango;
                            if(!tango) { _fun90026_ip = 93; continue _fun90026 }
 73:
                            offset = entity.changeType;
                            verify = _closure1_slot6;
                            verify = verify.NOOP;
                            tango = offset === verify;
 93:
                            if(!tango) { _fun90026_ip = 112; continue _fun90026 }
 96:
                            tango = _closure1_slot6;
                            tango = tango.UPDATE;
                            entity['changeType'] = tango;
 112:
                            offset = entity.content;
                            verify = offset.unshift;
                            tango = {};
                            yankee = _closure1_slot8;
                            yankee = yankee.MESSAGE;
                            tango['rowType'] = yankee;
                            yankee = _closure1_slot6;
                            yankee = yankee.NOOP;
                            tango['changeType'] = yankee;
                            yankee = _closure2_slot9;
                            tango['roleStyle'] = yankee;
                            tango['message'] = romeo;
                            foxtrot = _closure2_slot0;
                            yankee = foxtrot.isSystemDM;
                            yankee = yankee.bind(foxtrot)();
                            tango['isSystemDM'] = yankee;
                            yankee = _closure3_slot1;
                            yankee = romeo === yankee;
                            tango['isFirst'] = yankee;
                            yankee = _closure2_slot6;
                            tango['canAddNewReactions'] = yankee;
                            tango = verify.bind(offset)(tango);
                            verify = oscar.bind(golf)();
                            tango = verify.done;
                            report = verify;
                            if(!tango) { _fun90026_ip = 42; continue _fun90026 }
 232:
                            mike = _closure3_slot1;
                            tango = mike.id;
                            zulu = _closure2_slot1;
                            zulu = zulu.revealedMessageId;
                            zulu = tango === zulu;
                            entity['revealed'] = zulu;
                            mike = mike.id;
                            entity['context'] = mike;
                            return entity;
                        }
                    };
                    foxtrot = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    golf = _closure2_slot9;
                    foxtrot['roleStyle'] = golf;
                    foxtrot['message'] = offset;
                    update = true;
                    golf = new Array(0);
                    foxtrot['content'] = golf;
                    echo = false;
                    options = _closure2_slot22;
                    golf = options.length;
                    golf = golf - source;
                    golf = options[golf];
                    options = offset.blocked;
                    if(options) { _fun90025_ip = 1684; continue _fun90025 }
 526:
                    options = offset.ignored;
                    if(options) { _fun90025_ip = 1449; continue _fun90025 }
 538:
                    options = _closure1_slot10;
                    output = options.bind(entity)(yankee);
                    yankee = output.bind(entity)();
                    options = yankee.done;
                    sizing = 12;
                    kilo = 11;
                    backup = 9;
                    romeo = 10;
                    if(options) { _fun90025_ip = 1911; continue _fun90025 }
 577:
                    config = yankee.value;
                    status = config !== offset;
                    sequence = _closure1_slot4;
                    vacuum = sequence.isEditing;
                    options = _closure2_slot0;
                    control = options.id;
                    options = config.id;
                    record = vacuum.bind(sequence)(control, options);
                    if(record) { _fun90025_ip = 632; continue _fun90025 }
 619:
                    control = _closure2_slot3;
                    options = config.id;
                    record = control === options;
 632:
                    sequence = _closure1_slot3;
                    vacuum = sequence.getPushFeedback;
                    control = config.channel_id;
                    options = config.id;
                    target = vacuum.bind(sequence)(control, options);
                    vacuum = _closure1_slot0;
                    options = _closure1_slot2;
                    control = options[backup];
                    sequence = vacuum.bind(entity)(control);
                    vacuum = sequence.canReplyToMessage;
                    control = _closure2_slot0;
                    papa = vacuum.bind(sequence)(control, config);
                    control = _closure1_slot1;
                    options = options[romeo];
                    control = control.bind(entity)(options);
                    options = _closure2_slot4;
                    context = control.bind(entity)(config, options);
                    if(!context) { _fun90025_ip = 754; continue _fun90025 }
 719:
                    control = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[kilo];
                    vacuum = control.bind(entity)(options);
                    control = vacuum.isNonModInLockedThread;
                    options = _closure2_slot0;
                    options = control.bind(vacuum)(options);
                    context = !options;
 754:
                    vacuum = _closure2_slot23;
                    control = vacuum.hasOwnProperty;
                    options = config.id;
                    options = control.bind(vacuum)(options);
                    if(options) { _fun90025_ip = 789; continue _fun90025 }
 777:
                    options = _closure2_slot27;
                    sequence = options.bind(entity)(config, update);
                    _fun90025_ip = 817; continue _fun90025;
 789:
                    control = _closure2_slot23;
                    options = config.id;
                    vacuum = control[options];
                    control = _closure2_slot8;
                    options = control.determineChangeTypeForUploadProgress;
                    sequence = options.bind(control)(vacuum);
 817:
                    options = _closure2_slot7;
                    options = verify != options;
                    if(!options) { _fun90025_ip = 847; continue _fun90025 }
 828:
                    control = _closure2_slot7;
                    vacuum = control.endId;
                    control = config.id;
                    options = vacuum === control;
 847:
                    if(!options) { _fun90025_ip = 863; continue _fun90025 }
 850:
                    control = _closure2_slot7;
                    control = control.count;
                    options = control > source;
 863:
                    if(!options) { _fun90025_ip = 934; continue _fun90025 }
 866:
                    vacuum = _closure2_slot22;
                    control = vacuum.push;
                    options = {};
                    sierra = _closure1_slot9;
                    sierra = sierra.SUMMARY;
                    options['rowType'] = sierra;
                    sierra = _closure2_slot27;
                    sierra = sierra.bind(entity)(config);
                    options['changeType'] = sierra;
                    sierra = _closure2_slot9;
                    options['roleStyle'] = sierra;
                    sierra = _closure2_slot7;
                    options['summary'] = sierra;
                    options['isBeforeContent'] = echo;
                    options = control.bind(vacuum)(options);
 934:
                    options = _closure2_slot16;
                    if(!(verify == options)) { _fun90025_ip = 954; continue _fun90025 }
 942:
                    options = _closure2_slot1;
                    lima = options.jumpType;
                    _fun90025_ip = 958; continue _fun90025;
 954:
                    lima = _closure2_slot16;
 958:
                    vacuum = _closure2_slot22;
                    control = vacuum.push;
                    options = {};
                    sierra = _closure2_slot9;
                    options['roleStyle'] = sierra;
                    options['message'] = config;
                    whiskey = _closure2_slot0;
                    sierra = whiskey.isSystemDM;
                    sierra = sierra.bind(whiskey)();
                    options['isSystemDM'] = sierra;
                    sierra = config === offset;
                    options['isFirst'] = sierra;
                    options['isEditing'] = record;
                    record = !status;
                    if(status) { _fun90025_ip = 1028; continue _fun90025 }
 1021:
                    status = _closure2_slot18;
                    record = !status;
 1028:
                    if(!record) { _fun90025_ip = 1049; continue _fun90025 }
 1031:
                    status = tango;
                    if(status) { _fun90025_ip = 1040; continue _fun90025 }
 1037:
                    status = zulu;
 1040:
                    if(status) { _fun90025_ip = 1046; continue _fun90025 }
 1043:
                    status = mike;
 1046:
                    record = status;
 1049:
                    options['separatorBefore'] = record;
                    record = _closure2_slot6;
                    options['canAddNewReactions'] = record;
                    record = config.id;
                    status = _closure2_slot14;
                    record = record === status;
                    options['scrollTo'] = record;
                    record = config.id;
                    record = record === status;
                    if(!record) { _fun90025_ip = 1136; continue _fun90025 }
 1093:
                    status = _closure2_slot5;
                    if(status) { _fun90025_ip = 1133; continue _fun90025 }
 1100:
                    whiskey = _closure1_slot0;
                    sierra = _closure1_slot2;
                    sierra = sierra[sizing];
                    sierra = whiskey.bind(entity)(sierra);
                    sierra = sierra.JumpTypes;
                    sierra = sierra.INSTANT;
                    status = lima === sierra;
 1133:
                    record = !status;
 1136:
                    options['animated'] = record;
                    status = config.id;
                    record = _closure2_slot15;
                    record = status === record;
                    options['jumped'] = record;
                    status = config.id;
                    record = _closure2_slot17;
                    record = status === record;
                    options['focused'] = record;
                    options['highlightJumpedOnceOnly'] = update;
                    record = _closure2_slot18;
                    options['renderContentOnly'] = record;
                    status = verify == target;
                    record = undefined;
                    if(status) { _fun90025_ip = 1206; continue _fun90025 }
 1200:
                    record = target.pushType;
 1206:
                    options['pushFeedbackType'] = record;
                    record = _closure2_slot18;
                    record = !record;
                    if(!record) { _fun90025_ip = 1224; continue _fun90025 }
 1221:
                    record = papa;
 1224:
                    options['canReply'] = record;
                    record = _closure2_slot18;
                    record = !record;
                    if(!record) { _fun90025_ip = 1242; continue _fun90025 }
 1239:
                    record = context;
 1242:
                    options['canEdit'] = record;
                    record = _closure1_slot8;
                    record = record.MESSAGE;
                    options['rowType'] = record;
                    options['changeType'] = sequence;
                    sequence = _closure2_slot21;
                    record = verify == sequence;
                    sequence = undefined;
                    if(record) { _fun90025_ip = 1299; continue _fun90025 }
 1280:
                    papa = _closure2_slot21;
                    context = papa.has;
                    record = config.id;
                    sequence = context.bind(papa)(record);
 1299:
                    options['showContentInventoryEntryFallbackEmbed'] = sequence;
                    options = control.bind(vacuum)(options);
                    options = _closure2_slot7;
                    options = verify != options;
                    if(!options) { _fun90025_ip = 1339; continue _fun90025 }
 1320:
                    control = _closure2_slot7;
                    vacuum = control.startId;
                    control = config.id;
                    options = vacuum === control;
 1339:
                    if(!options) { _fun90025_ip = 1355; continue _fun90025 }
 1342:
                    control = _closure2_slot7;
                    control = control.count;
                    options = control > source;
 1355:
                    if(!options) { _fun90025_ip = 1426; continue _fun90025 }
 1358:
                    vacuum = _closure2_slot22;
                    control = vacuum.push;
                    options = {};
                    sequence = _closure1_slot9;
                    sequence = sequence.SUMMARY;
                    options['rowType'] = sequence;
                    sequence = _closure2_slot27;
                    sequence = sequence.bind(entity)(config);
                    options['changeType'] = sequence;
                    sequence = _closure2_slot9;
                    options['roleStyle'] = sequence;
                    sequence = _closure2_slot7;
                    options['summary'] = sequence;
                    options['isBeforeContent'] = update;
                    options = control.bind(vacuum)(options);
 1426:
                    control = output.bind(entity)();
                    options = control.done;
                    yankee = control;
                    if(options) { _fun90025_ip = 1911; continue _fun90025 }
 1444:
                    _fun90025_ip = 577; continue _fun90025;
 1449:
                    if(!(verify != golf)) { _fun90025_ip = 1479; continue _fun90025 }
 1453:
                    romeo = golf.rowType;
                    options = _closure1_slot8;
                    options = options.IGNORED_GROUP;
                    yankee = golf;
                    if(!(romeo !== options)) { _fun90025_ip = 1593; continue _fun90025 }
 1479:
                    options = _closure2_slot27;
                    backup = options.bind(entity)(offset);
                    options = _closure1_slot6;
                    options = options.NOOP;
                    options = backup === options;
                    if(!options) { _fun90025_ip = 1523; continue _fun90025 }
 1508:
                    sizing = _closure2_slot8;
                    kilo = sizing.getIgnored;
                    options = kilo.bind(sizing)(offset);
 1523:
                    if(!options) { _fun90025_ip = 1536; continue _fun90025 }
 1526:
                    options = _closure1_slot6;
                    backup = options.INSERT;
 1536:
                    options = {};
                    quebec = options;
                    equality = foxtrot;
                    kilo = copyDataProperties(quebec, equality);
                    romeo = _closure1_slot8;
                    kilo = romeo.IGNORED_GROUP;
                    romeo = 'rowType';
                    options[romeo] = kilo;
                    romeo = 'changeType';
                    options[romeo] = backup;
                    backup = _closure2_slot22;
                    romeo = backup.push;
                    romeo = romeo.bind(backup)(options);
                    yankee = options;
 1593:
                    options = report.bind(entity)(yankee);
                    romeo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    options = 7;
                    backup = sizing[options];
                    backup = romeo.bind(entity)(backup);
                    kilo = backup.intl;
                    backup = kilo.formatToPlainString;
                    options = sizing[options];
                    options = romeo.bind(entity)(options);
                    options = options.t;
                    romeo = options.VFWjc3;
                    options = {};
                    sizing = yankee.content;
                    sizing = sizing.length;
                    options['count'] = sizing;
                    options = backup.bind(kilo)(romeo, options);
                    yankee['text'] = options;
                    _fun90025_ip = 1911; continue _fun90025;
 1684:
                    if(!(verify != golf)) { _fun90025_ip = 1711; continue _fun90025 }
 1688:
                    yankee = golf.rowType;
                    options = _closure1_slot8;
                    options = options.BLOCKED_GROUP;
                    if(!(yankee !== options)) { _fun90025_ip = 1825; continue _fun90025 }
 1711:
                    options = _closure2_slot27;
                    romeo = options.bind(entity)(offset);
                    options = _closure1_slot6;
                    options = options.NOOP;
                    options = romeo === options;
                    if(!options) { _fun90025_ip = 1755; continue _fun90025 }
 1740:
                    kilo = _closure2_slot8;
                    backup = kilo.getBlocked;
                    options = backup.bind(kilo)(offset);
 1755:
                    if(!options) { _fun90025_ip = 1768; continue _fun90025 }
 1758:
                    options = _closure1_slot6;
                    romeo = options.INSERT;
 1768:
                    options = {};
                    quebec = options;
                    equality = foxtrot;
                    foxtrot = copyDataProperties(quebec, equality);
                    yankee = _closure1_slot8;
                    foxtrot = yankee.BLOCKED_GROUP;
                    yankee = 'rowType';
                    options[yankee] = foxtrot;
                    yankee = 'changeType';
                    options[yankee] = romeo;
                    romeo = _closure2_slot22;
                    yankee = romeo.push;
                    yankee = yankee.bind(romeo)(options);
                    golf = options;
 1825:
                    report = report.bind(entity)(golf);
                    options = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    report = 7;
                    yankee = foxtrot[report];
                    yankee = options.bind(entity)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.formatToPlainString;
                    report = foxtrot[report];
                    report = options.bind(entity)(report);
                    report = report.t;
                    options = report.+FcYMz;
                    report = {};
                    foxtrot = golf.content;
                    foxtrot = foxtrot.length;
                    report['count'] = foxtrot;
                    report = yankee.bind(romeo)(options, report);
                    golf['text'] = report;
 1911:
                    if(!tango) { _fun90025_ip = 2054; continue _fun90025 }
 1917:
                    tango = _closure2_slot18;
                    if(tango) { _fun90025_ip = 2054; continue _fun90025 }
 1927:
                    tango = _closure2_slot27;
                    yankee = tango.bind(entity)(offset);
                    tango = _closure1_slot6;
                    tango = tango.UPDATE;
                    if(!(yankee === tango)) { _fun90025_ip = 1963; continue _fun90025 }
 1953:
                    tango = _closure1_slot6;
                    yankee = tango.NOOP;
 1963:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 8;
                    tango = golf[tango];
                    options = report.bind(entity)(tango);
                    golf = options.dateFormat;
                    report = offset.timestamp;
                    tango = 'LL';
                    options = golf.bind(options)(report, tango);
                    golf = _closure2_slot22;
                    report = golf.push;
                    tango = {};
                    romeo = _closure1_slot9;
                    romeo = romeo.DAY;
                    tango['rowType'] = romeo;
                    tango['changeType'] = yankee;
                    yankee = _closure2_slot9;
                    tango['roleStyle'] = yankee;
                    tango['text'] = options;
                    tango = report.bind(golf)(tango);
 2054:
                    if(!zulu) { _fun90025_ip = 2064; continue _fun90025 }
 2057:
                    tango = _closure2_slot18;
                    zulu = !tango;
 2064:
                    if(!zulu) { _fun90025_ip = 2251; continue _fun90025 }
 2070:
                    report = _closure2_slot22;
                    tango = report.push;
                    zulu = {};
                    options = _closure1_slot9;
                    options = options.UNREAD;
                    zulu['rowType'] = options;
                    options = _closure2_slot27;
                    options = options.bind(entity)(offset);
                    zulu['changeType'] = options;
                    options = _closure2_slot9;
                    zulu['roleStyle'] = options;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    golf = 7;
                    options = romeo[golf];
                    options = yankee.bind(entity)(options);
                    offset = options.intl;
                    options = offset.string;
                    golf = romeo[golf];
                    golf = yankee.bind(entity)(golf);
                    golf = golf.t;
                    golf = golf.q7hm3t;
                    options = options.bind(offset)(golf);
                    golf = options.toUpperCase;
                    golf = golf.bind(options)();
                    zulu['text'] = golf;
                    golf = _closure2_slot10;
                    golf = !golf;
                    if(golf) { _fun90025_ip = 2205; continue _fun90025 }
 2201:
                    golf = _closure2_slot19;
 2205:
                    if(!golf) { _fun90025_ip = 2222; continue _fun90025 }
 2208:
                    options = _closure2_slot1;
                    options = options.jumpTargetId;
                    golf = verify == options;
 2222:
                    zulu['scrollTo'] = golf;
                    golf = _closure2_slot11;
                    if(!golf) { _fun90025_ip = 2241; continue _fun90025 }
 2234:
                    options = _closure2_slot5;
                    golf = !options;
 2241:
                    zulu['animated'] = golf;
                    zulu = tango.bind(report)(zulu);
 2251:
                    if(!mike) { _fun90025_ip = 2261; continue _fun90025 }
 2254:
                    zulu = _closure2_slot18;
                    mike = !zulu;
 2261:
                    if(!mike) { _fun90025_ip = 2414; continue _fun90025 }
 2267:
                    tango = _closure2_slot22;
                    zulu = tango.push;
                    mike = {};
                    golf = _closure1_slot7;
                    golf = golf.LOAD_BEFORE;
                    mike['rowType'] = golf;
                    golf = _closure2_slot12;
                    options = _closure1_slot6;
                    if(golf) { _fun90025_ip = 2315; continue _fun90025 }
 2307:
                    golf = options.NOOP;
                    _fun90025_ip = 2321; continue _fun90025;
 2315:
                    golf = options.UPDATE;
 2321:
                    mike['changeType'] = golf;
                    golf = _closure2_slot9;
                    mike['roleStyle'] = golf;
                    oscar = _closure2_slot1;
                    oscar = oscar.loadingMore;
                    mike['isLoading'] = oscar;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 7;
                    oscar = verify[report];
                    oscar = options.bind(entity)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = verify[report];
                    report = options.bind(entity)(report);
                    report = report.t;
                    report = report.XBlaiI;
                    report = oscar.bind(golf)(report);
                    mike['text'] = report;
                    mike = zulu.bind(tango)(mike);
 2414:
                    return entity;
                }
            };
            zulu = verify.bind(mike)(zulu);
            zulu = mike.length;
            mike = 0;
            mike = mike === zulu;
            if(!mike) { _fun90020_ip = 453; continue _fun90020 }
 444:
            zulu = report.loadingMore;
            mike = !zulu;
 453:
            if(!mike) { _fun90020_ip = 474; continue _fun90020 }
 456:
            zulu = report.hasMoreAfter;
            if(zulu) { _fun90020_ip = 471; continue _fun90020 }
 465:
            zulu = report.hasMoreBefore;
 471:
            mike = zulu;
 474:
            if(!mike) { _fun90020_ip = 625; continue _fun90020 }
 480:
            zulu = entity.push;
            mike = {};
            verify = report.hasMoreBefore;
            offset = _closure1_slot7;
            if(verify) { _fun90020_ip = 508; continue _fun90020 }
 500:
            verify = offset.LOAD_AFTER;
            _fun90020_ip = 514; continue _fun90020;
 508:
            verify = offset.LOAD_BEFORE;
 514:
            mike['rowType'] = verify;
            verify = _closure1_slot6;
            if(golf) { _fun90020_ip = 534; continue _fun90020 }
 526:
            golf = verify.NOOP;
            _fun90020_ip = 540; continue _fun90020;
 534:
            golf = verify.UPDATE;
 540:
            mike['changeType'] = golf;
            mike['roleStyle'] = oscar;
            report = report.loadingMore;
            mike['isLoading'] = report;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 7;
            report = verify[tango];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            tango = tango.t;
            tango = tango.XBlaiI;
            tango = report.bind(oscar)(tango);
            mike['text'] = tango;
            mike = zulu.bind(entity)(mike);
 625:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();