// app/modules/messages/native/createChannelStream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
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
    golfie = tangon.Changeset;
    var _closure1_slot6 = golfie;
    golfie = tangon.LoadingType;
    var _closure1_slot7 = golfie;
    golfie = tangon.RowType;
    var _closure1_slot8 = golfie;
    tangon = tangon.SeparatorType;
    var _closure1_slot9 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/createChannelStream.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createChannelStream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            report = entity.messages;
            var _closure2_slot1 = report;
            offset = entity.uploads;
            michal = entity.oldestUnreadMessageId;
            var _closure2_slot2 = michal;
            michal = entity.replyingMessageId;
            var _closure2_slot3 = michal;
            michal = entity.currentUserId;
            var _closure2_slot4 = michal;
            michal = entity.useReducedMotion;
            var _closure2_slot5 = michal;
            michal = entity.canAddNewReactions;
            var _closure2_slot6 = michal;
            michal = entity.selectedSummary;
            var _closure2_slot7 = michal;
            michal = entity.chatManager;
            var _closure2_slot8 = michal;
            oscard = entity.roleStyle;
            var _closure2_slot9 = oscard;
            michal = entity.loaded;
            var _closure2_slot10 = michal;
            michal = entity.animated;
            var _closure2_slot11 = michal;
            golfie = entity.forced;
            var _closure2_slot12 = golfie;
            michal = entity.updateMessageIds;
            var _closure2_slot13 = michal;
            michal = entity.scrollToMessageId;
            var _closure2_slot14 = michal;
            michal = entity.jumpTargetId;
            var _closure2_slot15 = michal;
            michal = entity.overrideJumpType;
            var _closure2_slot16 = michal;
            michal = entity.focusTargetId;
            var _closure2_slot17 = michal;
            michal = entity.isResourceChannel;
            var _closure2_slot18 = michal;
            michal = entity.messagesNewlyLoaded;
            var _closure2_slot19 = michal;
            michal = entity.fromICYMITab;
            var _closure2_slot20 = michal;
            entity = entity.unloadableContentEntryMessageIds;
            var _closure2_slot21 = entity;
            option = undefined;
            var _closure2_slot24 = option;
            var _closure2_slot25 = option;
            var _closure2_slot26 = option;
            var _closure2_slot27 = option;
            entity = new Array(0);
            var _closure2_slot22 = entity;
            yankee = {};
            var _closure2_slot23 = yankee;
            verify = _closure1_slot10;
            michal = offset.slice;
            offset = michal.bind(offset)();
            michal = offset.reverse;
            michal = michal.bind(offset)();
            offset = verify.bind(option)(michal);
            verify = offset.bind(option)();
            michal = verify.done;
            if(michal) { _fun00008_ip = 355; continue _fun00007 }
 305:
            romeon = verify.value;
            backup = _closure1_slot5;
            foxtra = backup.getMessageForFile;
            michal = romeon.id;
            michal = foxtra.bind(backup)(michal);
            michal = michal.nonce;
            yankee[michal] = romeon;
            romeon = offset.bind(option)();
            michal = romeon.done;
            verify = romeon;
            if(!michal) { _fun00008_ip = 305; continue _fun00007 }
 355:
            michal = function(argFoo) { // Original name: unreadFilter
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot0;
                    entity = michal.isForumPost;
                    entity = entity.bind(michal)();
                    report = tangon.id;
                    michal = _closure2_slot2;
                    report = report === michal;
                    if(entity) { _fun00010_ip = 41; continue _fun00009 }
 36:
                    entity = report;
                    _fun00010_ip = 104; continue _fun00009;
 41:
                    michal = report;
                    if(!report) { _fun00010_ip = 101; continue _fun00009 }
 47:
                    tangon = tangon.id;
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    report = 4;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = golfie.bind(report)(oscard);
                    report = oscard.castChannelIdAsMessageId;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(oscard)(zuuluu);
                    michal = tangon !== zuuluu;
 101:
                    entity = michal;
 104:
                    return entity;
                }
            };
            _closure2_slot24 = michal;
            michal = new Array(0);
            _closure2_slot25 = michal;
            verify = function(argFoo) { // Original name: insertMessage
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot25;
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 127; continue _fun00011 }
 22:
                    michal = _closure2_slot24;
                    golfie = undefined;
                    michal = michal.bind(golfie)(tangon);
                    if(michal) { _fun00012_ip = 127; continue _fun00011 }
 36:
                    report = zuuluu.length;
                    michal = 1;
                    michal = report - michal;
                    oscard = zuuluu[michal];
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 5;
                    michal = option[michal];
                    report = report.bind(golfie)(michal);
                    michal = _closure2_slot0;
                    michal = report.bind(golfie)(michal, oscard, tangon);
                    if(michal) { _fun00012_ip = 102; continue _fun00011 }
 89:
                    michal = zuuluu.unshift;
                    michal = michal.bind(zuuluu)(tangon);
                    _fun00012_ip = 150; continue _fun00011;
 102:
                    report = _closure2_slot25;
                    zuuluu = report.unshift;
                    michal = new Array(1);
                    michal[0] = tangon;
                    michal = zuuluu.bind(report)(michal);
                    _fun00012_ip = 150; continue _fun00011;
 127:
                    zuuluu = _closure2_slot25;
                    michal = zuuluu.unshift;
                    entity = new Array(1);
                    entity[0] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 150:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot26 = verify;
            offset = report.forEach;
            verify = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(michal);
                    report = oscard.tryCreateInjectedMessage;
                    tangon = _closure2_slot0;
                    tangon = report.bind(oscard)(zuuluu, tangon);
                    report = null;
                    if(!(report != tangon)) { _fun00014_ip = 84; continue _fun00013 }
 53:
                    report = _closure2_slot26;
                    report = report.bind(entity)(tangon);
                    oscard = _closure2_slot2;
                    report = zuuluu.id;
                    if(!(oscard === report)) { _fun00014_ip = 84; continue _fun00013 }
 75:
                    tangon = tangon.id;
                    _closure2_slot2 = tangon;
 84:
                    michal = _closure2_slot26;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            verify = offset.bind(report)(verify);
            verify = function(argFoo) { // Original name: determineChangeType
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = arguments[1];
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00016_ip = 11; continue _fun00015 }
 9:
                    tangon = false;
 11:
                    zuuluu = _closure2_slot8;
                    michal = zuuluu.determineChangeType;
                    entity = {};
                    oscard = argFoo;
                    entity['message'] = oscard;
                    oscard = _closure2_slot13;
                    entity['updateMessageIds'] = oscard;
                    report = _closure2_slot12;
                    entity['forced'] = report;
                    entity = michal.bind(zuuluu)(entity, tangon);
                    return entity;
                }
            };
            _closure2_slot27 = verify;
            verify = michal.forEach;
            zuuluu = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    yankee = argFoo;
                    tangon = argBar;
                    var _closure3_slot0 = yankee;
                    entity = yankee.length;
                    source = 1;
                    entity = entity - source;
                    offset = yankee[entity];
                    var _closure3_slot1 = offset;
                    entity = _closure2_slot25;
                    entity = entity.length;
                    entity = entity - source;
                    romeon = tangon === entity;
                    golfie = 0;
                    entity = golfie === tangon;
                    if(!entity) { _fun00018_ip = 71; continue _fun00017 }
 61:
                    michal = _closure2_slot1;
                    entity = michal.hasMoreAfter;
 71:
                    if(!entity) { _fun00018_ip = 226; continue _fun00017 }
 77:
                    zuuluu = _closure2_slot22;
                    michal = zuuluu.push;
                    entity = {};
                    verify = _closure1_slot7;
                    verify = verify.LOAD_AFTER;
                    entity['rowType'] = verify;
                    verify = _closure2_slot12;
                    foxtra = _closure1_slot6;
                    if(verify) { _fun00018_ip = 125; continue _fun00017 }
 117:
                    verify = foxtra.NOOP;
                    _fun00018_ip = 131; continue _fun00017;
 125:
                    verify = foxtra.UPDATE;
 131:
                    entity['changeType'] = verify;
                    verify = _closure2_slot9;
                    entity['roleStyle'] = verify;
                    verify = _closure2_slot1;
                    verify = verify.loadingMore;
                    entity['isLoading'] = verify;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    option = 7;
                    verify = sizing[option];
                    backup = undefined;
                    verify = kiloes.bind(backup)(verify);
                    foxtra = verify.intl;
                    verify = foxtra.string;
                    option = sizing[option];
                    option = kiloes.bind(backup)(option);
                    option = option.t;
                    option = option.XBlaiI;
                    option = verify.bind(foxtra)(option);
                    entity['text'] = option;
                    entity = michal.bind(zuuluu)(entity);
 226:
                    entity = _closure2_slot1;
                    michal = entity.hasMoreBefore;
                    if(!michal) { _fun00018_ip = 242; continue _fun00017 }
 239:
                    michal = romeon;
 242:
                    zuuluu = _closure2_slot24;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(offset);
                    if(!zuuluu) { _fun00018_ip = 263; continue _fun00017 }
 256:
                    option = _closure2_slot20;
                    zuuluu = !option;
 263:
                    verify = null;
                    foxtra = null;
                    if(romeon) { _fun00018_ip = 292; continue _fun00017 }
 270:
                    option = _closure2_slot25;
                    tangon = tangon + source;
                    tangon = option[tangon];
                    tangon = tangon[golfie];
                    foxtra = tangon.timestamp;
 292:
                    if(romeon) { _fun00018_ip = 341; continue _fun00017 }
 295:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 8;
                    tangon = option[tangon];
                    option = golfie.bind(entity)(tangon);
                    golfie = option.isSameDay;
                    tangon = offset.timestamp;
                    golfie = golfie.bind(option)(tangon, foxtra);
                    tangon = true;
                    if(!golfie) { _fun00018_ip = 446; continue _fun00017 }
 341:
                    option = _closure2_slot0;
                    golfie = option.isDM;
                    golfie = golfie.bind(option)();
                    if(!golfie) { _fun00018_ip = 371; continue _fun00017 }
 358:
                    option = _closure2_slot1;
                    option = option.hasMoreBefore;
                    golfie = !option;
 371:
                    if(!golfie) { _fun00018_ip = 377; continue _fun00017 }
 374:
                    golfie = romeon;
 377:
                    if(golfie) { _fun00018_ip = 439; continue _fun00017 }
 380:
                    foxtra = _closure2_slot0;
                    option = foxtra.isThread;
                    option = option.bind(foxtra)();
                    if(!option) { _fun00018_ip = 414; continue _fun00017 }
 397:
                    backup = _closure2_slot0;
                    foxtra = backup.isForumPost;
                    foxtra = foxtra.bind(backup)();
                    option = !foxtra;
 414:
                    if(!option) { _fun00018_ip = 430; continue _fun00017 }
 417:
                    foxtra = _closure2_slot1;
                    foxtra = foxtra.hasMoreBefore;
                    option = !foxtra;
 430:
                    if(!option) { _fun00018_ip = 436; continue _fun00017 }
 433:
                    option = romeon;
 436:
                    golfie = option;
 439:
                    tangon = false;
                    if(!golfie) { _fun00018_ip = 446; continue _fun00017 }
 444:
                    tangon = true;
 446:
                    report = function(argFoo) { // Original name: processHiddenMessageRow
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure1_slot10;
                            zuuluu = _closure3_slot0;
                            golfie = undefined;
                            oscard = tangon.bind(golfie)(zuuluu);
                            report = oscard.bind(golfie)();
                            tangon = report.done;
                            if(tangon) { _fun00020_ip = 232; continue _fun00019 }
 42:
                            romeon = report.value;
                            tangon = _closure2_slot27;
                            verify = tangon.bind(golfie)(romeon);
                            tangon = _closure1_slot6;
                            tangon = tangon.NOOP;
                            tangon = verify !== tangon;
                            if(!tangon) { _fun00020_ip = 93; continue _fun00019 }
 73:
                            offset = entity.changeType;
                            verify = _closure1_slot6;
                            verify = verify.NOOP;
                            tangon = offset === verify;
 93:
                            if(!tangon) { _fun00020_ip = 112; continue _fun00019 }
 96:
                            tangon = _closure1_slot6;
                            tangon = tangon.UPDATE;
                            entity['changeType'] = tangon;
 112:
                            offset = entity.content;
                            verify = offset.unshift;
                            tangon = {};
                            yankee = _closure1_slot8;
                            yankee = yankee.MESSAGE;
                            tangon['rowType'] = yankee;
                            yankee = _closure1_slot6;
                            yankee = yankee.NOOP;
                            tangon['changeType'] = yankee;
                            yankee = _closure2_slot9;
                            tangon['roleStyle'] = yankee;
                            tangon['message'] = romeon;
                            foxtra = _closure2_slot0;
                            yankee = foxtra.isSystemDM;
                            yankee = yankee.bind(foxtra)();
                            tangon['isSystemDM'] = yankee;
                            yankee = _closure3_slot1;
                            yankee = romeon === yankee;
                            tangon['isFirst'] = yankee;
                            yankee = _closure2_slot6;
                            tangon['canAddNewReactions'] = yankee;
                            tangon = verify.bind(offset)(tangon);
                            verify = oscard.bind(golfie)();
                            tangon = verify.done;
                            report = verify;
                            if(!tangon) { _fun00020_ip = 42; continue _fun00019 }
 232:
                            michal = _closure3_slot1;
                            tangon = michal.id;
                            zuuluu = _closure2_slot1;
                            zuuluu = zuuluu.revealedMessageId;
                            zuuluu = tangon === zuuluu;
                            entity['revealed'] = zuuluu;
                            michal = michal.id;
                            entity['context'] = michal;
                            return entity;
                        }
                    };
                    foxtra = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    golfie = _closure2_slot9;
                    foxtra['roleStyle'] = golfie;
                    foxtra['message'] = offset;
                    update = true;
                    golfie = new Array(0);
                    foxtra['content'] = golfie;
                    echoed = false;
                    option = _closure2_slot22;
                    golfie = option.length;
                    golfie = golfie - source;
                    golfie = option[golfie];
                    option = offset.blocked;
                    if(option) { _fun00018_ip = 1680; continue _fun00017 }
 522:
                    option = offset.ignored;
                    if(option) { _fun00018_ip = 1445; continue _fun00017 }
 534:
                    option = _closure1_slot10;
                    output = option.bind(entity)(yankee);
                    yankee = output.bind(entity)();
                    option = yankee.done;
                    sizing = 12;
                    kiloes = 11;
                    backup = 9;
                    romeon = 10;
                    if(option) { _fun00018_ip = 1907; continue _fun00017 }
 573:
                    config = yankee.value;
                    status = config !== offset;
                    sequen = _closure1_slot4;
                    vacuum = sequen.isEditing;
                    option = _closure2_slot0;
                    ctrled = option.id;
                    option = config.id;
                    record = vacuum.bind(sequen)(ctrled, option);
                    if(record) { _fun00018_ip = 628; continue _fun00017 }
 615:
                    ctrled = _closure2_slot3;
                    option = config.id;
                    record = ctrled === option;
 628:
                    sequen = _closure1_slot3;
                    vacuum = sequen.getPushFeedback;
                    ctrled = config.channel_id;
                    option = config.id;
                    target = vacuum.bind(sequen)(ctrled, option);
                    vacuum = _closure1_slot0;
                    option = _closure1_slot2;
                    ctrled = option[backup];
                    sequen = vacuum.bind(entity)(ctrled);
                    vacuum = sequen.canReplyToMessage;
                    ctrled = _closure2_slot0;
                    papara = vacuum.bind(sequen)(ctrled, config);
                    ctrled = _closure1_slot1;
                    option = option[romeon];
                    ctrled = ctrled.bind(entity)(option);
                    option = _closure2_slot4;
                    cntext = ctrled.bind(entity)(config, option);
                    if(!cntext) { _fun00018_ip = 750; continue _fun00017 }
 715:
                    ctrled = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[kiloes];
                    vacuum = ctrled.bind(entity)(option);
                    ctrled = vacuum.isNonModInLockedThread;
                    option = _closure2_slot0;
                    option = ctrled.bind(vacuum)(option);
                    cntext = !option;
 750:
                    vacuum = _closure2_slot23;
                    ctrled = vacuum.hasOwnProperty;
                    option = config.id;
                    option = ctrled.bind(vacuum)(option);
                    if(option) { _fun00018_ip = 785; continue _fun00017 }
 773:
                    option = _closure2_slot27;
                    sequen = option.bind(entity)(config, update);
                    _fun00018_ip = 813; continue _fun00017;
 785:
                    ctrled = _closure2_slot23;
                    option = config.id;
                    vacuum = ctrled[option];
                    ctrled = _closure2_slot8;
                    option = ctrled.determineChangeTypeForUploadProgress;
                    sequen = option.bind(ctrled)(vacuum);
 813:
                    option = _closure2_slot7;
                    option = verify != option;
                    if(!option) { _fun00018_ip = 843; continue _fun00017 }
 824:
                    ctrled = _closure2_slot7;
                    vacuum = ctrled.endId;
                    ctrled = config.id;
                    option = vacuum === ctrled;
 843:
                    if(!option) { _fun00018_ip = 859; continue _fun00017 }
 846:
                    ctrled = _closure2_slot7;
                    ctrled = ctrled.count;
                    option = ctrled > source;
 859:
                    if(!option) { _fun00018_ip = 930; continue _fun00017 }
 862:
                    vacuum = _closure2_slot22;
                    ctrled = vacuum.push;
                    option = {};
                    sierra = _closure1_slot9;
                    sierra = sierra.SUMMARY;
                    option['rowType'] = sierra;
                    sierra = _closure2_slot27;
                    sierra = sierra.bind(entity)(config);
                    option['changeType'] = sierra;
                    sierra = _closure2_slot9;
                    option['roleStyle'] = sierra;
                    sierra = _closure2_slot7;
                    option['summary'] = sierra;
                    option['isBeforeContent'] = echoed;
                    option = ctrled.bind(vacuum)(option);
 930:
                    option = _closure2_slot16;
                    if(!(verify == option)) { _fun00018_ip = 950; continue _fun00017 }
 938:
                    option = _closure2_slot1;
                    limora = option.jumpType;
                    _fun00018_ip = 954; continue _fun00017;
 950:
                    limora = _closure2_slot16;
 954:
                    vacuum = _closure2_slot22;
                    ctrled = vacuum.push;
                    option = {};
                    sierra = _closure2_slot9;
                    option['roleStyle'] = sierra;
                    option['message'] = config;
                    whisks = _closure2_slot0;
                    sierra = whisks.isSystemDM;
                    sierra = sierra.bind(whisks)();
                    option['isSystemDM'] = sierra;
                    sierra = config === offset;
                    option['isFirst'] = sierra;
                    option['isEditing'] = record;
                    record = !status;
                    if(status) { _fun00018_ip = 1024; continue _fun00017 }
 1017:
                    status = _closure2_slot18;
                    record = !status;
 1024:
                    if(!record) { _fun00018_ip = 1045; continue _fun00017 }
 1027:
                    status = tangon;
                    if(status) { _fun00018_ip = 1036; continue _fun00017 }
 1033:
                    status = zuuluu;
 1036:
                    if(status) { _fun00018_ip = 1042; continue _fun00017 }
 1039:
                    status = michal;
 1042:
                    record = status;
 1045:
                    option['separatorBefore'] = record;
                    record = _closure2_slot6;
                    option['canAddNewReactions'] = record;
                    record = config.id;
                    status = _closure2_slot14;
                    record = record === status;
                    option['scrollTo'] = record;
                    record = config.id;
                    record = record === status;
                    if(!record) { _fun00018_ip = 1132; continue _fun00017 }
 1089:
                    status = _closure2_slot5;
                    if(status) { _fun00018_ip = 1129; continue _fun00017 }
 1096:
                    whisks = _closure1_slot0;
                    sierra = _closure1_slot2;
                    sierra = sierra[sizing];
                    sierra = whisks.bind(entity)(sierra);
                    sierra = sierra.JumpTypes;
                    sierra = sierra.INSTANT;
                    status = limora === sierra;
 1129:
                    record = !status;
 1132:
                    option['animated'] = record;
                    status = config.id;
                    record = _closure2_slot15;
                    record = status === record;
                    option['jumped'] = record;
                    status = config.id;
                    record = _closure2_slot17;
                    record = status === record;
                    option['focused'] = record;
                    option['highlightJumpedOnceOnly'] = update;
                    record = _closure2_slot18;
                    option['renderContentOnly'] = record;
                    status = verify == target;
                    record = undefined;
                    if(status) { _fun00018_ip = 1202; continue _fun00017 }
 1196:
                    record = target.pushType;
 1202:
                    option['pushFeedbackType'] = record;
                    record = _closure2_slot18;
                    record = !record;
                    if(!record) { _fun00018_ip = 1220; continue _fun00017 }
 1217:
                    record = papara;
 1220:
                    option['canReply'] = record;
                    record = _closure2_slot18;
                    record = !record;
                    if(!record) { _fun00018_ip = 1238; continue _fun00017 }
 1235:
                    record = cntext;
 1238:
                    option['canEdit'] = record;
                    record = _closure1_slot8;
                    record = record.MESSAGE;
                    option['rowType'] = record;
                    option['changeType'] = sequen;
                    sequen = _closure2_slot21;
                    record = verify == sequen;
                    sequen = undefined;
                    if(record) { _fun00018_ip = 1295; continue _fun00017 }
 1276:
                    papara = _closure2_slot21;
                    cntext = papara.has;
                    record = config.id;
                    sequen = cntext.bind(papara)(record);
 1295:
                    option['showContentInventoryEntryFallbackEmbed'] = sequen;
                    option = ctrled.bind(vacuum)(option);
                    option = _closure2_slot7;
                    option = verify != option;
                    if(!option) { _fun00018_ip = 1335; continue _fun00017 }
 1316:
                    ctrled = _closure2_slot7;
                    vacuum = ctrled.startId;
                    ctrled = config.id;
                    option = vacuum === ctrled;
 1335:
                    if(!option) { _fun00018_ip = 1351; continue _fun00017 }
 1338:
                    ctrled = _closure2_slot7;
                    ctrled = ctrled.count;
                    option = ctrled > source;
 1351:
                    if(!option) { _fun00018_ip = 1422; continue _fun00017 }
 1354:
                    vacuum = _closure2_slot22;
                    ctrled = vacuum.push;
                    option = {};
                    sequen = _closure1_slot9;
                    sequen = sequen.SUMMARY;
                    option['rowType'] = sequen;
                    sequen = _closure2_slot27;
                    sequen = sequen.bind(entity)(config);
                    option['changeType'] = sequen;
                    sequen = _closure2_slot9;
                    option['roleStyle'] = sequen;
                    sequen = _closure2_slot7;
                    option['summary'] = sequen;
                    option['isBeforeContent'] = update;
                    option = ctrled.bind(vacuum)(option);
 1422:
                    ctrled = output.bind(entity)();
                    option = ctrled.done;
                    yankee = ctrled;
                    if(option) { _fun00018_ip = 1907; continue _fun00017 }
 1440:
                    _fun00018_ip = 573; continue _fun00017;
 1445:
                    if(!(verify != golfie)) { _fun00018_ip = 1475; continue _fun00017 }
 1449:
                    romeon = golfie.rowType;
                    option = _closure1_slot8;
                    option = option.IGNORED_GROUP;
                    yankee = golfie;
                    if(!(romeon !== option)) { _fun00018_ip = 1589; continue _fun00017 }
 1475:
                    option = _closure2_slot27;
                    backup = option.bind(entity)(offset);
                    option = _closure1_slot6;
                    option = option.NOOP;
                    option = backup === option;
                    if(!option) { _fun00018_ip = 1519; continue _fun00017 }
 1504:
                    sizing = _closure2_slot8;
                    kiloes = sizing.getIgnored;
                    option = kiloes.bind(sizing)(offset);
 1519:
                    if(!option) { _fun00018_ip = 1532; continue _fun00017 }
 1522:
                    option = _closure1_slot6;
                    backup = option.INSERT;
 1532:
                    option = {};
                    quebec = option;
                    equals = foxtra;
                    kiloes = copyDataProperties(quebec, equals);
                    romeon = _closure1_slot8;
                    kiloes = romeon.IGNORED_GROUP;
                    romeon = 'rowType';
                    option[romeon] = kiloes;
                    romeon = 'changeType';
                    option[romeon] = backup;
                    backup = _closure2_slot22;
                    romeon = backup.push;
                    romeon = romeon.bind(backup)(option);
                    yankee = option;
 1589:
                    option = report.bind(entity)(yankee);
                    romeon = _closure1_slot0;
                    sizing = _closure1_slot2;
                    option = 7;
                    backup = sizing[option];
                    backup = romeon.bind(entity)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.formatToPlainString;
                    option = sizing[option];
                    option = romeon.bind(entity)(option);
                    option = option.t;
                    romeon = option.VFWjc3;
                    option = {};
                    sizing = yankee.content;
                    sizing = sizing.length;
                    option['count'] = sizing;
                    option = backup.bind(kiloes)(romeon, option);
                    yankee['text'] = option;
                    _fun00018_ip = 1907; continue _fun00017;
 1680:
                    if(!(verify != golfie)) { _fun00018_ip = 1707; continue _fun00017 }
 1684:
                    yankee = golfie.rowType;
                    option = _closure1_slot8;
                    option = option.BLOCKED_GROUP;
                    if(!(yankee !== option)) { _fun00018_ip = 1821; continue _fun00017 }
 1707:
                    option = _closure2_slot27;
                    romeon = option.bind(entity)(offset);
                    option = _closure1_slot6;
                    option = option.NOOP;
                    option = romeon === option;
                    if(!option) { _fun00018_ip = 1751; continue _fun00017 }
 1736:
                    kiloes = _closure2_slot8;
                    backup = kiloes.getBlocked;
                    option = backup.bind(kiloes)(offset);
 1751:
                    if(!option) { _fun00018_ip = 1764; continue _fun00017 }
 1754:
                    option = _closure1_slot6;
                    romeon = option.INSERT;
 1764:
                    option = {};
                    quebec = option;
                    equals = foxtra;
                    foxtra = copyDataProperties(quebec, equals);
                    yankee = _closure1_slot8;
                    foxtra = yankee.BLOCKED_GROUP;
                    yankee = 'rowType';
                    option[yankee] = foxtra;
                    yankee = 'changeType';
                    option[yankee] = romeon;
                    romeon = _closure2_slot22;
                    yankee = romeon.push;
                    yankee = yankee.bind(romeon)(option);
                    golfie = option;
 1821:
                    report = report.bind(entity)(golfie);
                    option = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    report = 7;
                    yankee = foxtra[report];
                    yankee = option.bind(entity)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.formatToPlainString;
                    report = foxtra[report];
                    report = option.bind(entity)(report);
                    report = report.t;
                    option = report.+FcYMz;
                    report = {};
                    foxtra = golfie.content;
                    foxtra = foxtra.length;
                    report['count'] = foxtra;
                    report = yankee.bind(romeon)(option, report);
                    golfie['text'] = report;
 1907:
                    if(!tangon) { _fun00018_ip = 2050; continue _fun00017 }
 1913:
                    tangon = _closure2_slot18;
                    if(tangon) { _fun00018_ip = 2050; continue _fun00017 }
 1923:
                    tangon = _closure2_slot27;
                    yankee = tangon.bind(entity)(offset);
                    tangon = _closure1_slot6;
                    tangon = tangon.UPDATE;
                    if(!(yankee === tangon)) { _fun00018_ip = 1959; continue _fun00017 }
 1949:
                    tangon = _closure1_slot6;
                    yankee = tangon.NOOP;
 1959:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 8;
                    tangon = golfie[tangon];
                    option = report.bind(entity)(tangon);
                    golfie = option.dateFormat;
                    report = offset.timestamp;
                    tangon = 'LL';
                    option = golfie.bind(option)(report, tangon);
                    golfie = _closure2_slot22;
                    report = golfie.push;
                    tangon = {};
                    romeon = _closure1_slot9;
                    romeon = romeon.DAY;
                    tangon['rowType'] = romeon;
                    tangon['changeType'] = yankee;
                    yankee = _closure2_slot9;
                    tangon['roleStyle'] = yankee;
                    tangon['text'] = option;
                    tangon = report.bind(golfie)(tangon);
 2050:
                    if(!zuuluu) { _fun00018_ip = 2060; continue _fun00017 }
 2053:
                    tangon = _closure2_slot18;
                    zuuluu = !tangon;
 2060:
                    if(!zuuluu) { _fun00018_ip = 2249; continue _fun00017 }
 2066:
                    report = _closure2_slot22;
                    tangon = report.push;
                    zuuluu = {};
                    option = _closure1_slot9;
                    option = option.UNREAD;
                    zuuluu['rowType'] = option;
                    option = _closure2_slot27;
                    option = option.bind(entity)(offset);
                    zuuluu['changeType'] = option;
                    option = _closure2_slot9;
                    zuuluu['roleStyle'] = option;
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 7;
                    option = romeon[golfie];
                    option = yankee.bind(entity)(option);
                    offset = option.intl;
                    option = offset.string;
                    golfie = romeon[golfie];
                    golfie = yankee.bind(entity)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.q7hm3t;
                    option = option.bind(offset)(golfie);
                    golfie = option.toUpperCase;
                    golfie = golfie.bind(option)();
                    zuuluu['text'] = golfie;
                    golfie = _closure2_slot10;
                    golfie = !golfie;
                    if(golfie) { _fun00018_ip = 2203; continue _fun00017 }
 2199:
                    golfie = _closure2_slot19;
 2203:
                    if(!golfie) { _fun00018_ip = 2220; continue _fun00017 }
 2206:
                    option = _closure2_slot1;
                    option = option.jumpTargetId;
                    golfie = verify == option;
 2220:
                    zuuluu['scrollTo'] = golfie;
                    golfie = _closure2_slot11;
                    if(!golfie) { _fun00018_ip = 2239; continue _fun00017 }
 2232:
                    option = _closure2_slot5;
                    golfie = !option;
 2239:
                    zuuluu['animated'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
 2249:
                    if(!michal) { _fun00018_ip = 2259; continue _fun00017 }
 2252:
                    zuuluu = _closure2_slot18;
                    michal = !zuuluu;
 2259:
                    if(!michal) { _fun00018_ip = 2412; continue _fun00017 }
 2265:
                    tangon = _closure2_slot22;
                    zuuluu = tangon.push;
                    michal = {};
                    golfie = _closure1_slot7;
                    golfie = golfie.LOAD_BEFORE;
                    michal['rowType'] = golfie;
                    golfie = _closure2_slot12;
                    option = _closure1_slot6;
                    if(golfie) { _fun00018_ip = 2313; continue _fun00017 }
 2305:
                    golfie = option.NOOP;
                    _fun00018_ip = 2319; continue _fun00017;
 2313:
                    golfie = option.UPDATE;
 2319:
                    michal['changeType'] = golfie;
                    golfie = _closure2_slot9;
                    michal['roleStyle'] = golfie;
                    oscard = _closure2_slot1;
                    oscard = oscard.loadingMore;
                    michal['isLoading'] = oscard;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 7;
                    oscard = verify[report];
                    oscard = option.bind(entity)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = verify[report];
                    report = option.bind(entity)(report);
                    report = report.t;
                    report = report.XBlaiI;
                    report = oscard.bind(golfie)(report);
                    michal['text'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 2412:
                    return entity;
                }
            };
            zuuluu = verify.bind(michal)(zuuluu);
            zuuluu = michal.length;
            michal = 0;
            michal = michal === zuuluu;
            if(!michal) { _fun00008_ip = 453; continue _fun00007 }
 444:
            zuuluu = report.loadingMore;
            michal = !zuuluu;
 453:
            if(!michal) { _fun00008_ip = 474; continue _fun00007 }
 456:
            zuuluu = report.hasMoreAfter;
            if(zuuluu) { _fun00008_ip = 471; continue _fun00007 }
 465:
            zuuluu = report.hasMoreBefore;
 471:
            michal = zuuluu;
 474:
            if(!michal) { _fun00008_ip = 625; continue _fun00007 }
 480:
            zuuluu = entity.push;
            michal = {};
            verify = report.hasMoreBefore;
            offset = _closure1_slot7;
            if(verify) { _fun00008_ip = 508; continue _fun00007 }
 500:
            verify = offset.LOAD_AFTER;
            _fun00008_ip = 514; continue _fun00007;
 508:
            verify = offset.LOAD_BEFORE;
 514:
            michal['rowType'] = verify;
            verify = _closure1_slot6;
            if(golfie) { _fun00008_ip = 534; continue _fun00007 }
 526:
            golfie = verify.NOOP;
            _fun00008_ip = 540; continue _fun00007;
 534:
            golfie = verify.UPDATE;
 540:
            michal['changeType'] = golfie;
            michal['roleStyle'] = oscard;
            report = report.loadingMore;
            michal['isLoading'] = report;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 7;
            report = verify[tangon];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.XBlaiI;
            tangon = report.bind(oscard)(tangon);
            michal['text'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 625:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();