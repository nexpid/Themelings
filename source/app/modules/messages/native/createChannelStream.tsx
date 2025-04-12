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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
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
    tangon = 12;
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
            michal = entity.canAddNewReactions;
            var _closure2_slot5 = michal;
            michal = entity.selectedSummary;
            var _closure2_slot6 = michal;
            michal = entity.chatManager;
            var _closure2_slot7 = michal;
            oscard = entity.roleStyle;
            var _closure2_slot8 = oscard;
            golfie = entity.forced;
            var _closure2_slot9 = golfie;
            michal = entity.updateMessageIds;
            var _closure2_slot10 = michal;
            michal = entity.isResourceChannel;
            var _closure2_slot11 = michal;
            michal = entity.fromICYMITab;
            var _closure2_slot12 = michal;
            entity = entity.unloadableContentEntryMessageIds;
            var _closure2_slot13 = entity;
            option = undefined;
            var _closure2_slot16 = option;
            var _closure2_slot17 = option;
            var _closure2_slot18 = option;
            var _closure2_slot19 = option;
            entity = new Array(0);
            var _closure2_slot14 = entity;
            yankee = {};
            var _closure2_slot15 = yankee;
            verify = _closure1_slot10;
            michal = offset.slice;
            offset = michal.bind(offset)();
            michal = offset.reverse;
            michal = michal.bind(offset)();
            offset = verify.bind(option)(michal);
            verify = offset.bind(option)();
            michal = verify.done;
            if(michal) { _fun00008_ip = 275; continue _fun00007 }
 225:
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
            if(!michal) { _fun00008_ip = 225; continue _fun00007 }
 275:
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
            _closure2_slot16 = michal;
            michal = new Array(0);
            _closure2_slot17 = michal;
            verify = function(argFoo) { // Original name: insertMessage
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot17;
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 127; continue _fun00011 }
 22:
                    michal = _closure2_slot16;
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
                    report = _closure2_slot17;
                    zuuluu = report.unshift;
                    michal = new Array(1);
                    michal[0] = tangon;
                    michal = zuuluu.bind(report)(michal);
                    _fun00012_ip = 150; continue _fun00011;
 127:
                    zuuluu = _closure2_slot17;
                    michal = zuuluu.unshift;
                    entity = new Array(1);
                    entity[0] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 150:
                    entity = undefined;
                    return entity;
                }
            };
            _closure2_slot18 = verify;
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
                    report = _closure2_slot18;
                    report = report.bind(entity)(tangon);
                    oscard = _closure2_slot2;
                    report = zuuluu.id;
                    if(!(oscard === report)) { _fun00014_ip = 84; continue _fun00013 }
 75:
                    tangon = tangon.id;
                    _closure2_slot2 = tangon;
 84:
                    michal = _closure2_slot18;
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
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.determineChangeType;
                    entity = {};
                    oscard = argFoo;
                    entity['message'] = oscard;
                    oscard = _closure2_slot10;
                    entity['updateMessageIds'] = oscard;
                    report = _closure2_slot9;
                    entity['forced'] = report;
                    entity = michal.bind(zuuluu)(entity, tangon);
                    return entity;
                }
            };
            _closure2_slot19 = verify;
            verify = michal.forEach;
            zuuluu = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    yankee = argFoo;
                    tangon = argBar;
                    var _closure3_slot0 = yankee;
                    entity = yankee.length;
                    update = 1;
                    entity = entity - update;
                    verify = yankee[entity];
                    var _closure3_slot1 = verify;
                    entity = _closure2_slot17;
                    entity = entity.length;
                    entity = entity - update;
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
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.push;
                    entity = {};
                    offset = _closure1_slot7;
                    offset = offset.LOAD_AFTER;
                    entity['rowType'] = offset;
                    offset = _closure2_slot9;
                    foxtra = _closure1_slot6;
                    if(offset) { _fun00018_ip = 125; continue _fun00017 }
 117:
                    offset = foxtra.NOOP;
                    _fun00018_ip = 131; continue _fun00017;
 125:
                    offset = foxtra.UPDATE;
 131:
                    entity['changeType'] = offset;
                    offset = _closure2_slot8;
                    entity['roleStyle'] = offset;
                    offset = _closure2_slot1;
                    offset = offset.loadingMore;
                    entity['isLoading'] = offset;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    option = 7;
                    offset = sizing[option];
                    backup = undefined;
                    offset = kiloes.bind(backup)(offset);
                    foxtra = offset.intl;
                    offset = foxtra.string;
                    option = sizing[option];
                    option = kiloes.bind(backup)(option);
                    option = option.t;
                    option = option.XBlaiI;
                    option = offset.bind(foxtra)(option);
                    entity['text'] = option;
                    entity = michal.bind(zuuluu)(entity);
 226:
                    entity = _closure2_slot1;
                    michal = entity.hasMoreBefore;
                    if(!michal) { _fun00018_ip = 242; continue _fun00017 }
 239:
                    michal = romeon;
 242:
                    zuuluu = _closure2_slot16;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(verify);
                    if(!zuuluu) { _fun00018_ip = 263; continue _fun00017 }
 256:
                    option = _closure2_slot12;
                    zuuluu = !option;
 263:
                    option = null;
                    foxtra = null;
                    if(romeon) { _fun00018_ip = 292; continue _fun00017 }
 270:
                    offset = _closure2_slot17;
                    tangon = tangon + update;
                    tangon = offset[tangon];
                    tangon = tangon[golfie];
                    foxtra = tangon.timestamp;
 292:
                    if(romeon) { _fun00018_ip = 341; continue _fun00017 }
 295:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 8;
                    tangon = offset[tangon];
                    offset = golfie.bind(entity)(tangon);
                    golfie = offset.isSameDay;
                    tangon = verify.timestamp;
                    golfie = golfie.bind(offset)(tangon, foxtra);
                    tangon = true;
                    if(!golfie) { _fun00018_ip = 446; continue _fun00017 }
 341:
                    offset = _closure2_slot0;
                    golfie = offset.isDM;
                    golfie = golfie.bind(offset)();
                    if(!golfie) { _fun00018_ip = 371; continue _fun00017 }
 358:
                    offset = _closure2_slot1;
                    offset = offset.hasMoreBefore;
                    golfie = !offset;
 371:
                    if(!golfie) { _fun00018_ip = 377; continue _fun00017 }
 374:
                    golfie = romeon;
 377:
                    if(golfie) { _fun00018_ip = 439; continue _fun00017 }
 380:
                    foxtra = _closure2_slot0;
                    offset = foxtra.isThread;
                    offset = offset.bind(foxtra)();
                    if(!offset) { _fun00018_ip = 414; continue _fun00017 }
 397:
                    backup = _closure2_slot0;
                    foxtra = backup.isForumPost;
                    foxtra = foxtra.bind(backup)();
                    offset = !foxtra;
 414:
                    if(!offset) { _fun00018_ip = 430; continue _fun00017 }
 417:
                    foxtra = _closure2_slot1;
                    foxtra = foxtra.hasMoreBefore;
                    offset = !foxtra;
 430:
                    if(!offset) { _fun00018_ip = 436; continue _fun00017 }
 433:
                    offset = romeon;
 436:
                    golfie = offset;
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
                            tangon = _closure2_slot19;
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
                            yankee = _closure2_slot8;
                            tangon['roleStyle'] = yankee;
                            tangon['message'] = romeon;
                            foxtra = _closure2_slot0;
                            yankee = foxtra.isSystemDM;
                            yankee = yankee.bind(foxtra)();
                            tangon['isSystemDM'] = yankee;
                            yankee = _closure3_slot1;
                            yankee = romeon === yankee;
                            tangon['isFirst'] = yankee;
                            yankee = _closure2_slot5;
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
                    romeon = {'roleStyle': null, 'message': null, 'isFirst': true, 'content': null, 'text': '', 'revealed': false};
                    golfie = _closure2_slot8;
                    romeon['roleStyle'] = golfie;
                    romeon['message'] = verify;
                    echoed = true;
                    golfie = new Array(0);
                    romeon['content'] = golfie;
                    result = false;
                    offset = _closure2_slot14;
                    golfie = offset.length;
                    golfie = golfie - update;
                    golfie = offset[golfie];
                    offset = verify.blocked;
                    if(offset) { _fun00018_ip = 1538; continue _fun00017 }
 526:
                    offset = verify.ignored;
                    if(offset) { _fun00018_ip = 1303; continue _fun00017 }
 538:
                    offset = _closure1_slot10;
                    sizing = offset.bind(entity)(yankee);
                    yankee = sizing.bind(entity)();
                    offset = yankee.done;
                    kiloes = 11;
                    backup = 9;
                    foxtra = 10;
                    if(offset) { _fun00018_ip = 1765; continue _fun00017 }
 574:
                    sequen = yankee.value;
                    target = sequen !== verify;
                    vacuum = _closure1_slot4;
                    ctrled = vacuum.isEditing;
                    offset = _closure2_slot0;
                    source = offset.id;
                    offset = sequen.id;
                    config = ctrled.bind(vacuum)(source, offset);
                    if(config) { _fun00018_ip = 629; continue _fun00017 }
 616:
                    source = _closure2_slot3;
                    offset = sequen.id;
                    config = source === offset;
 629:
                    vacuum = _closure1_slot3;
                    ctrled = vacuum.getPushFeedback;
                    source = sequen.channel_id;
                    offset = sequen.id;
                    papara = ctrled.bind(vacuum)(source, offset);
                    ctrled = _closure1_slot0;
                    offset = _closure1_slot2;
                    source = offset[backup];
                    vacuum = ctrled.bind(entity)(source);
                    ctrled = vacuum.canReplyToMessage;
                    source = _closure2_slot0;
                    cntext = ctrled.bind(vacuum)(source, sequen);
                    source = _closure1_slot1;
                    offset = offset[foxtra];
                    source = source.bind(entity)(offset);
                    offset = _closure2_slot4;
                    record = source.bind(entity)(sequen, offset);
                    if(!record) { _fun00018_ip = 751; continue _fun00017 }
 716:
                    source = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[kiloes];
                    ctrled = source.bind(entity)(offset);
                    source = ctrled.isNonModInLockedThread;
                    offset = _closure2_slot0;
                    offset = source.bind(ctrled)(offset);
                    record = !offset;
 751:
                    ctrled = _closure2_slot15;
                    source = ctrled.hasOwnProperty;
                    offset = sequen.id;
                    offset = source.bind(ctrled)(offset);
                    if(offset) { _fun00018_ip = 786; continue _fun00017 }
 774:
                    offset = _closure2_slot19;
                    vacuum = offset.bind(entity)(sequen, echoed);
                    _fun00018_ip = 814; continue _fun00017;
 786:
                    source = _closure2_slot15;
                    offset = sequen.id;
                    ctrled = source[offset];
                    source = _closure2_slot7;
                    offset = source.determineChangeTypeForUploadProgress;
                    vacuum = offset.bind(source)(ctrled);
 814:
                    offset = _closure2_slot6;
                    offset = option != offset;
                    if(!offset) { _fun00018_ip = 844; continue _fun00017 }
 825:
                    source = _closure2_slot6;
                    ctrled = source.endId;
                    source = sequen.id;
                    offset = ctrled === source;
 844:
                    if(!offset) { _fun00018_ip = 860; continue _fun00017 }
 847:
                    source = _closure2_slot6;
                    source = source.count;
                    offset = source > update;
 860:
                    if(!offset) { _fun00018_ip = 931; continue _fun00017 }
 863:
                    ctrled = _closure2_slot14;
                    source = ctrled.push;
                    offset = {};
                    status = _closure1_slot9;
                    status = status.SUMMARY;
                    offset['rowType'] = status;
                    status = _closure2_slot19;
                    status = status.bind(entity)(sequen);
                    offset['changeType'] = status;
                    status = _closure2_slot8;
                    offset['roleStyle'] = status;
                    status = _closure2_slot6;
                    offset['summary'] = status;
                    offset['isBeforeContent'] = result;
                    offset = source.bind(ctrled)(offset);
 931:
                    ctrled = _closure2_slot14;
                    source = ctrled.push;
                    offset = {};
                    status = _closure2_slot8;
                    offset['roleStyle'] = status;
                    offset['message'] = sequen;
                    sierra = _closure2_slot0;
                    status = sierra.isSystemDM;
                    status = status.bind(sierra)();
                    offset['isSystemDM'] = status;
                    status = sequen === verify;
                    offset['isFirst'] = status;
                    offset['isEditing'] = config;
                    config = !target;
                    if(target) { _fun00018_ip = 1001; continue _fun00017 }
 994:
                    target = _closure2_slot11;
                    config = !target;
 1001:
                    if(!config) { _fun00018_ip = 1022; continue _fun00017 }
 1004:
                    target = tangon;
                    if(target) { _fun00018_ip = 1013; continue _fun00017 }
 1010:
                    target = zuuluu;
 1013:
                    if(target) { _fun00018_ip = 1019; continue _fun00017 }
 1016:
                    target = michal;
 1019:
                    config = target;
 1022:
                    offset['separatorBefore'] = config;
                    config = _closure2_slot5;
                    offset['canAddNewReactions'] = config;
                    config = _closure2_slot11;
                    offset['renderContentOnly'] = config;
                    target = option == papara;
                    config = undefined;
                    if(target) { _fun00018_ip = 1060; continue _fun00017 }
 1054:
                    config = papara.pushType;
 1060:
                    offset['pushFeedbackType'] = config;
                    config = _closure2_slot11;
                    config = !config;
                    if(!config) { _fun00018_ip = 1078; continue _fun00017 }
 1075:
                    config = cntext;
 1078:
                    offset['canReply'] = config;
                    config = _closure2_slot11;
                    config = !config;
                    if(!config) { _fun00018_ip = 1096; continue _fun00017 }
 1093:
                    config = record;
 1096:
                    offset['canEdit'] = config;
                    config = _closure1_slot8;
                    config = config.MESSAGE;
                    offset['rowType'] = config;
                    offset['changeType'] = vacuum;
                    vacuum = _closure2_slot13;
                    config = option == vacuum;
                    vacuum = undefined;
                    if(config) { _fun00018_ip = 1153; continue _fun00017 }
 1134:
                    cntext = _closure2_slot13;
                    record = cntext.has;
                    config = sequen.id;
                    vacuum = record.bind(cntext)(config);
 1153:
                    offset['showContentInventoryEntryFallbackEmbed'] = vacuum;
                    offset = source.bind(ctrled)(offset);
                    offset = _closure2_slot6;
                    offset = option != offset;
                    if(!offset) { _fun00018_ip = 1193; continue _fun00017 }
 1174:
                    source = _closure2_slot6;
                    ctrled = source.startId;
                    source = sequen.id;
                    offset = ctrled === source;
 1193:
                    if(!offset) { _fun00018_ip = 1209; continue _fun00017 }
 1196:
                    source = _closure2_slot6;
                    source = source.count;
                    offset = source > update;
 1209:
                    if(!offset) { _fun00018_ip = 1280; continue _fun00017 }
 1212:
                    ctrled = _closure2_slot14;
                    source = ctrled.push;
                    offset = {};
                    vacuum = _closure1_slot9;
                    vacuum = vacuum.SUMMARY;
                    offset['rowType'] = vacuum;
                    vacuum = _closure2_slot19;
                    vacuum = vacuum.bind(entity)(sequen);
                    offset['changeType'] = vacuum;
                    vacuum = _closure2_slot8;
                    offset['roleStyle'] = vacuum;
                    vacuum = _closure2_slot6;
                    offset['summary'] = vacuum;
                    offset['isBeforeContent'] = echoed;
                    offset = source.bind(ctrled)(offset);
 1280:
                    source = sizing.bind(entity)();
                    offset = source.done;
                    yankee = source;
                    if(offset) { _fun00018_ip = 1765; continue _fun00017 }
 1298:
                    _fun00018_ip = 574; continue _fun00017;
 1303:
                    if(!(option != golfie)) { _fun00018_ip = 1333; continue _fun00017 }
 1307:
                    foxtra = golfie.rowType;
                    offset = _closure1_slot8;
                    offset = offset.IGNORED_GROUP;
                    yankee = golfie;
                    if(!(foxtra !== offset)) { _fun00018_ip = 1447; continue _fun00017 }
 1333:
                    offset = _closure2_slot19;
                    backup = offset.bind(entity)(verify);
                    offset = _closure1_slot6;
                    offset = offset.NOOP;
                    offset = backup === offset;
                    if(!offset) { _fun00018_ip = 1377; continue _fun00017 }
 1362:
                    sizing = _closure2_slot7;
                    kiloes = sizing.getIgnored;
                    offset = kiloes.bind(sizing)(verify);
 1377:
                    if(!offset) { _fun00018_ip = 1390; continue _fun00017 }
 1380:
                    offset = _closure1_slot6;
                    backup = offset.INSERT;
 1390:
                    offset = {};
                    whisks = offset;
                    limora = romeon;
                    kiloes = copyDataProperties(whisks, limora);
                    foxtra = _closure1_slot8;
                    kiloes = foxtra.IGNORED_GROUP;
                    foxtra = 'rowType';
                    offset[foxtra] = kiloes;
                    foxtra = 'changeType';
                    offset[foxtra] = backup;
                    backup = _closure2_slot14;
                    foxtra = backup.push;
                    foxtra = foxtra.bind(backup)(offset);
                    yankee = offset;
 1447:
                    offset = report.bind(entity)(yankee);
                    foxtra = _closure1_slot0;
                    sizing = _closure1_slot2;
                    offset = 7;
                    backup = sizing[offset];
                    backup = foxtra.bind(entity)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.formatToPlainString;
                    offset = sizing[offset];
                    offset = foxtra.bind(entity)(offset);
                    offset = offset.t;
                    foxtra = offset.VFWjc3;
                    offset = {};
                    sizing = yankee.content;
                    sizing = sizing.length;
                    offset['count'] = sizing;
                    offset = backup.bind(kiloes)(foxtra, offset);
                    yankee['text'] = offset;
                    _fun00018_ip = 1765; continue _fun00017;
 1538:
                    if(!(option != golfie)) { _fun00018_ip = 1565; continue _fun00017 }
 1542:
                    offset = golfie.rowType;
                    option = _closure1_slot8;
                    option = option.BLOCKED_GROUP;
                    if(!(offset !== option)) { _fun00018_ip = 1679; continue _fun00017 }
 1565:
                    option = _closure2_slot19;
                    yankee = option.bind(entity)(verify);
                    option = _closure1_slot6;
                    option = option.NOOP;
                    option = yankee === option;
                    if(!option) { _fun00018_ip = 1609; continue _fun00017 }
 1594:
                    backup = _closure2_slot7;
                    foxtra = backup.getBlocked;
                    option = foxtra.bind(backup)(verify);
 1609:
                    if(!option) { _fun00018_ip = 1622; continue _fun00017 }
 1612:
                    option = _closure1_slot6;
                    yankee = option.INSERT;
 1622:
                    option = {};
                    whisks = option;
                    limora = romeon;
                    romeon = copyDataProperties(whisks, limora);
                    offset = _closure1_slot8;
                    romeon = offset.BLOCKED_GROUP;
                    offset = 'rowType';
                    option[offset] = romeon;
                    offset = 'changeType';
                    option[offset] = yankee;
                    yankee = _closure2_slot14;
                    offset = yankee.push;
                    offset = offset.bind(yankee)(option);
                    golfie = option;
 1679:
                    report = report.bind(entity)(golfie);
                    option = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 7;
                    offset = romeon[report];
                    offset = option.bind(entity)(offset);
                    yankee = offset.intl;
                    offset = yankee.formatToPlainString;
                    report = romeon[report];
                    report = option.bind(entity)(report);
                    report = report.t;
                    option = report.+FcYMz;
                    report = {};
                    romeon = golfie.content;
                    romeon = romeon.length;
                    report['count'] = romeon;
                    report = offset.bind(yankee)(option, report);
                    golfie['text'] = report;
 1765:
                    if(!tangon) { _fun00018_ip = 1908; continue _fun00017 }
 1771:
                    tangon = _closure2_slot11;
                    if(tangon) { _fun00018_ip = 1908; continue _fun00017 }
 1781:
                    tangon = _closure2_slot19;
                    offset = tangon.bind(entity)(verify);
                    tangon = _closure1_slot6;
                    tangon = tangon.UPDATE;
                    if(!(offset === tangon)) { _fun00018_ip = 1817; continue _fun00017 }
 1807:
                    tangon = _closure1_slot6;
                    offset = tangon.NOOP;
 1817:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 8;
                    tangon = golfie[tangon];
                    option = report.bind(entity)(tangon);
                    golfie = option.dateFormat;
                    report = verify.timestamp;
                    tangon = 'LL';
                    option = golfie.bind(option)(report, tangon);
                    golfie = _closure2_slot14;
                    report = golfie.push;
                    tangon = {};
                    yankee = _closure1_slot9;
                    yankee = yankee.DAY;
                    tangon['rowType'] = yankee;
                    tangon['changeType'] = offset;
                    offset = _closure2_slot8;
                    tangon['roleStyle'] = offset;
                    tangon['text'] = option;
                    tangon = report.bind(golfie)(tangon);
 1908:
                    if(!zuuluu) { _fun00018_ip = 1918; continue _fun00017 }
 1911:
                    tangon = _closure2_slot11;
                    zuuluu = !tangon;
 1918:
                    if(!zuuluu) { _fun00018_ip = 2052; continue _fun00017 }
 1924:
                    report = _closure2_slot14;
                    tangon = report.push;
                    zuuluu = {};
                    option = _closure1_slot9;
                    option = option.UNREAD;
                    zuuluu['rowType'] = option;
                    option = _closure2_slot19;
                    option = option.bind(entity)(verify);
                    zuuluu['changeType'] = option;
                    option = _closure2_slot8;
                    zuuluu['roleStyle'] = option;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golfie = 7;
                    option = yankee[golfie];
                    option = offset.bind(entity)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = yankee[golfie];
                    golfie = offset.bind(entity)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.q7hm3t;
                    option = option.bind(verify)(golfie);
                    golfie = option.toUpperCase;
                    golfie = golfie.bind(option)();
                    zuuluu['text'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
 2052:
                    if(!michal) { _fun00018_ip = 2062; continue _fun00017 }
 2055:
                    zuuluu = _closure2_slot11;
                    michal = !zuuluu;
 2062:
                    if(!michal) { _fun00018_ip = 2215; continue _fun00017 }
 2068:
                    tangon = _closure2_slot14;
                    zuuluu = tangon.push;
                    michal = {};
                    golfie = _closure1_slot7;
                    golfie = golfie.LOAD_BEFORE;
                    michal['rowType'] = golfie;
                    golfie = _closure2_slot9;
                    option = _closure1_slot6;
                    if(golfie) { _fun00018_ip = 2116; continue _fun00017 }
 2108:
                    golfie = option.NOOP;
                    _fun00018_ip = 2122; continue _fun00017;
 2116:
                    golfie = option.UPDATE;
 2122:
                    michal['changeType'] = golfie;
                    golfie = _closure2_slot8;
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
 2215:
                    return entity;
                }
            };
            zuuluu = verify.bind(michal)(zuuluu);
            zuuluu = michal.length;
            michal = 0;
            michal = michal === zuuluu;
            if(!michal) { _fun00008_ip = 373; continue _fun00007 }
 364:
            zuuluu = report.loadingMore;
            michal = !zuuluu;
 373:
            if(!michal) { _fun00008_ip = 394; continue _fun00007 }
 376:
            zuuluu = report.hasMoreAfter;
            if(zuuluu) { _fun00008_ip = 391; continue _fun00007 }
 385:
            zuuluu = report.hasMoreBefore;
 391:
            michal = zuuluu;
 394:
            if(!michal) { _fun00008_ip = 545; continue _fun00007 }
 400:
            zuuluu = entity.push;
            michal = {};
            verify = report.hasMoreBefore;
            offset = _closure1_slot7;
            if(verify) { _fun00008_ip = 428; continue _fun00007 }
 420:
            verify = offset.LOAD_AFTER;
            _fun00008_ip = 434; continue _fun00007;
 428:
            verify = offset.LOAD_BEFORE;
 434:
            michal['rowType'] = verify;
            verify = _closure1_slot6;
            if(golfie) { _fun00008_ip = 454; continue _fun00007 }
 446:
            golfie = verify.NOOP;
            _fun00008_ip = 460; continue _fun00007;
 454:
            golfie = verify.UPDATE;
 460:
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
 545:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();