// app/components_native/chat/Messages.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot77;
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
            golf = _closure1_slot77;
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
    var _closure1_slot76 = entity;
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
    var _closure1_slot77 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot79;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot78 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00010_ip = 76; continue _fun00009;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot79 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot79 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot10 = golf;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.findNodeHandle;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot21 = tango;
    tango = 19;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot22 = tango;
    tango = 20;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot23 = tango;
    tango = 21;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot24 = tango;
    tango = 22;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot25 = tango;
    tango = 23;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot26 = tango;
    tango = 24;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot27 = tango;
    tango = 25;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot28 = tango;
    tango = 26;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot29 = tango;
    tango = 27;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot30 = tango;
    tango = 28;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useChannelPollInteractions;
    var _closure1_slot31 = tango;
    tango = 29;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot32 = tango;
    tango = 30;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot33 = tango;
    tango = 31;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot34 = tango;
    tango = 32;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot35 = tango;
    tango = 33;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot36 = tango;
    tango = 34;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot37 = tango;
    tango = 35;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot38 = tango;
    tango = 36;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot39 = tango;
    tango = 37;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot40 = tango;
    tango = 38;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot41 = tango;
    tango = 39;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot42 = tango;
    tango = 40;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot43 = tango;
    tango = 41;
    verify = oscar[tango];
    verify = options.bind(entity)(verify);
    var _closure1_slot44 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getUserCommunicationDisabledVersion;
    var _closure1_slot45 = tango;
    tango = 42;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot46 = tango;
    tango = 43;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot47 = tango;
    tango = 44;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot48 = tango;
    tango = 45;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot49 = tango;
    tango = 46;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot50 = tango;
    tango = 47;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot51 = tango;
    tango = 48;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot52 = tango;
    tango = 49;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot53 = tango;
    tango = 50;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot54 = tango;
    tango = 51;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot55 = tango;
    tango = 52;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot56 = tango;
    tango = 53;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.AnalyticEvents;
    var _closure1_slot57 = verify;
    verify = tango.ChannelTypes;
    var _closure1_slot58 = verify;
    verify = tango.ChannelTypesSets;
    var _closure1_slot59 = verify;
    verify = tango.GuildFeatures;
    var _closure1_slot60 = verify;
    verify = tango.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot61 = verify;
    verify = tango.ME;
    var _closure1_slot62 = verify;
    verify = tango.MessageFlags;
    var _closure1_slot63 = verify;
    verify = tango.MessageTypes;
    var _closure1_slot64 = verify;
    tango = tango.Permissions;
    var _closure1_slot65 = tango;
    tango = 54;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot66 = tango;
    tango = 55;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Changeset;
    var _closure1_slot67 = verify;
    verify = tango.RowType;
    var _closure1_slot68 = verify;
    tango = tango.SeparatorType;
    var _closure1_slot69 = tango;
    tango = 56;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot70 = verify;
    tango = tango.PremiumTypes;
    var _closure1_slot71 = tango;
    tango = 57;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot72 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot73 = tango;
    tango = 58;
    tango = oscar[tango];
    verify = options.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'Messages';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot74 = tango;
    options = golf.Component;
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: Messages
            golf = this;
            foxtrot = 0;
            options = copyRestArgs(foxtrot);
            entity = _closure1_slot5;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            tango = _closure1_slot78;
            entity = new Array(0);
            foxtrot = entity;
            romeo = options;
            yankee = 0;
            options = arraySpread(foxtrot, romeo, yankee);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = null;
            entity['_isMounted'] = tango;
            oscar = -1;
            entity['_layoutTimer'] = oscar;
            oscar = false;
            entity['animated'] = oscar;
            entity['hasHandledScroll'] = oscar;
            entity['isAtBottom'] = oscar;
            entity['isNearBottom'] = oscar;
            entity['isNearTop'] = oscar;
            entity['decelerating'] = oscar;
            entity['dragging'] = oscar;
            entity['hasMoreMessagesAfterForLastUpdate'] = oscar;
            golf = new Array(0);
            entity['pendingUpdatesQueue'] = golf;
            entity['animatingStickerMessageId'] = tango;
            entity['_loaded'] = oscar;
            golf = _closure1_slot10;
            oscar = golf.createRef;
            oscar = oscar.bind(golf)();
            entity['_chatRef'] = oscar;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 59;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            offset = oscar.ChatUpdatesQueue;
            oscar = offset.prototype;
            golf = Object.create(oscar, {constructor: {value: offset}});
            foxtrot = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity._chatRef;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity !== zulu)) { _fun00012_ip = 53; continue _fun00011 }
 24:
                    tango = _closure1_slot11;
                    mike = _closure3_slot0;
                    mike = mike._chatRef;
                    zulu = mike.current;
                    mike = undefined;
                    entity = tango.bind(mike)(zulu);
 53:
                    return entity;
                }
            };
            romeo = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.applyNativeRowsUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            backup = golf;
            oscar = new backup[offset](foxtrot, romeo, yankee);
            oscar = oscar instanceof Object ? oscar : golf;
            entity['_chatUpdatesQueue'] = oscar;
            oscar = {'shouldForceRender': false, 'hasJumpedToOriginalPost': false};
            entity['state'] = oscar;
            golf = _closure1_slot1;
            oscar = 60;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            verify = oscar.prototype;
            verify = Object.create(verify, {constructor: {value: oscar}});
            backup = verify;
            oscar = new backup[oscar](foxtrot);
            oscar = oscar instanceof Object ? oscar : verify;
            entity['chatManager'] = oscar;
            oscar = 61;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            backup = golf;
            oscar = new backup[oscar](foxtrot);
            oscar = oscar instanceof Object ? oscar : golf;
            entity['rowGenerator'] = oscar;
            entity['handlers'] = tango;
            tango = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 62;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.find;
                mike = _closure3_slot0;
                mike = mike.props;
                report = mike.messages;
                mike = report.toArray;
                mike = mike.bind(report)();
                entity = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        tango = entity.id;
                        zulu = entity.nonce;
                        entity = _closure4_slot0;
                        entity = tango === entity;
                        if(entity) { _fun00014_ip = 36; continue _fun00013 }
 28:
                        mike = _closure4_slot0;
                        entity = zulu === mike;
 36:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity['getMessage'] = tango;
            tango = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.props;
                    zulu = entity.channel;
                    entity = zulu.isForumPost;
                    entity = entity.bind(zulu)();
                    if(!entity) { _fun00016_ip = 101; continue _fun00015 }
 30:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 63;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.castChannelIdAsMessageId;
                    zulu = _closure3_slot0;
                    tango = zulu.props;
                    tango = tango.channelId;
                    tango = report.bind(oscar)(tango);
                    zulu = zulu.props;
                    zulu = zulu.messages;
                    zulu = zulu.jumpTargetId;
                    entity = tango === zulu;
 101:
                    if(!entity) { _fun00016_ip = 122; continue _fun00015 }
 104:
                    mike = _closure3_slot0;
                    mike = mike.state;
                    mike = mike.hasJumpedToOriginalPost;
                    entity = !mike;
 122:
                    return entity;
                }
            };
            entity['shouldJumpToOriginalPost'] = tango;
            tango = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tango = argFoo;
                    report = arguments[1];
                    zulu = arguments[2];
                    var _closure4_slot0 = tango;
                    entity = undefined;
                    if(!(report === entity)) { _fun00018_ip = 23; continue _fun00017 }
 21:
                    report = false;
 23:
                    var _closure4_slot1 = report;
                    if(!(zulu === entity)) { _fun00018_ip = 66; continue _fun00017 }
 31:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 64;
                    report = golf[report];
                    report = oscar.bind(entity)(report);
                    report = report.JumpTypes;
                    zulu = report.INSTANT;
 66:
                    var _closure4_slot2 = zulu;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00018_ip = 100; continue _fun00017 }
 76:
                    zulu = global;
                    tango = zulu.setTimeout;
                    zulu = function() {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            tango = _closure3_slot0;
                            mike = tango.findMessageRow;
                            entity = _closure4_slot0;
                            mike = mike.bind(tango)(entity);
                            tango = null;
                            if(!(tango != mike)) { _fun00020_ip = 245; continue _fun00019 }
 34:
                            entity = _closure3_slot0;
                            entity = entity._chatRef;
                            entity = entity.current;
                            if(!(tango != entity)) { _fun00020_ip = 245; continue _fun00019 }
 56:
                            tango = _closure4_slot1;
                            entity = false;
                            if(!tango) { _fun00020_ip = 148; continue _fun00019 }
 65:
                            offset = _closure3_slot0;
                            verify = offset.updateRows;
                            options = _closure4_slot0;
                            result = _closure4_slot2;
                            romeo = _closure1_slot0;
                            report = _closure1_slot2;
                            tango = 64;
                            tango = report[tango];
                            report = undefined;
                            tango = romeo.bind(report)(tango);
                            tango = tango.JumpTypes;
                            foxtrot = tango.INSTANT;
                            vacuum = offset;
                            control = false;
                            source = undefined;
                            update = options;
                            echo = options;
                            output = options;
                            sizing = false;
                            kilo = false;
                            backup = false;
                            tango = vacuum[verify](control, source, update, echo, result, output, sizing, kilo, backup, foxtrot, romeo);
                            entity = true;
 148:
                            if(entity) { _fun00020_ip = 245; continue _fun00019 }
 151:
                            report = _closure1_slot1;
                            verify = _closure1_slot2;
                            tango = 65;
                            tango = verify[tango];
                            options = undefined;
                            report = report.bind(options)(tango);
                            tango = report.scrollTo;
                            zulu = _closure3_slot0;
                            zulu = zulu._chatRef;
                            zulu = zulu.current;
                            mike = mike.index;
                            oscar = _closure4_slot2;
                            golf = _closure1_slot0;
                            entity = 64;
                            entity = verify[entity];
                            entity = golf.bind(options)(entity);
                            entity = entity.JumpTypes;
                            entity = entity.ANIMATED;
                            entity = oscar === entity;
                            entity = tango.bind(report)(zulu, mike, entity);
 245:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = 50;
                    mike = tango.bind(entity)(zulu, mike);
 100:
                    return entity;
                }
            };
            entity['maybeRescrollToMessageId'] = tango;
            tango = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure3_slot0;
                    mike = mike._chatUpdatesQueue;
                    mike = mike.isBlocking;
                    if(mike) { _fun00022_ip = 101; continue _fun00021 }
 27:
                    mike = zulu.isLoadingAtTop;
                    if(!mike) { _fun00022_ip = 62; continue _fun00021 }
 36:
                    mike = _closure3_slot0;
                    mike = mike.decelerating;
                    if(mike) { _fun00022_ip = 79; continue _fun00021 }
 49:
                    mike = _closure3_slot0;
                    mike = mike.dragging;
                    if(mike) { _fun00022_ip = 79; continue _fun00021 }
 62:
                    tango = _closure3_slot0;
                    mike = tango.applyNativeRowsUpdate;
                    mike = mike.bind(tango)(zulu);
                    _fun00022_ip = 121; continue _fun00021;
 79:
                    mike = _closure3_slot0;
                    tango = mike._chatUpdatesQueue;
                    mike = tango.add;
                    mike = mike.bind(tango)(zulu);
                    _fun00022_ip = 121; continue _fun00021;
 101:
                    entity = _closure3_slot0;
                    mike = entity._chatUpdatesQueue;
                    entity = mike.add;
                    entity = entity.bind(mike)(zulu);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            entity['updateNativeRows'] = tango;
            tango = function(argFoo) {
                entity = argFoo;
                options = entity.rows;
                zulu = entity.hasMoreMessagesAfter;
                verify = entity.scrollPosition;
                mike = _closure3_slot0;
                report = mike.isLoadingAtTop;
                tango = entity.rows;
                entity = mike.hasMoreMessagesAfterForLastUpdate;
                offset = report.bind(mike)(tango, entity);
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 65;
                tango = tango[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                oscar = golf.updateRows;
                tango = mike._chatRef;
                report = tango.current;
                tango = {};
                tango['isLoadingAtTop'] = offset;
                tango['scrollPosition'] = verify;
                tango = oscar.bind(golf)(report, options, tango);
                mike['hasMoreMessagesAfterForLastUpdate'] = zulu;
                return entity;
            };
            entity['applyNativeRowsUpdate'] = tango;
            tango = function(argFoo, argBar) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argBar;
                    if(entity) { _fun00024_ip = 10; continue _fun00023 }
 6:
                    entity = false;
                    return entity;
 10:
                    mike = _closure1_slot76;
                    report = undefined;
                    entity = argFoo;
                    tango = mike.bind(report)(entity);
                    mike = tango.bind(report)();
                    entity = mike.done;
                    zulu = mike;
                    if(entity) { _fun00024_ip = 98; continue _fun00023 }
 42:
                    entity = zulu.value;
                    golf = entity.changeType;
                    mike = _closure1_slot67;
                    mike = mike.INSERT;
                    if(!(golf !== mike)) { _fun00024_ip = 84; continue _fun00023 }
 67:
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(mike) { _fun00024_ip = 98; continue _fun00023 }
 82:
                    _fun00024_ip = 42; continue _fun00023;
 84:
                    mike = entity.index;
                    entity = 1;
                    entity = mike <= entity;
                    return entity;
 98:
                    entity = false;
                    return entity;
                }
            };
            entity['isLoadingAtTop'] = tango;
            tango = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    kilo = arguments[0];
                    backup = arguments[1];
                    tango = arguments[2];
                    foxtrot = arguments[3];
                    verify = arguments[4];
                    romeo = arguments[5];
                    yankee = arguments[6];
                    offset = arguments[7];
                    options = arguments[8];
                    entity = undefined;
                    if(!(kilo === entity)) { _fun00026_ip = 35; continue _fun00025 }
 33:
                    kilo = false;
 35:
                    if(!(backup === entity)) { _fun00026_ip = 67; continue _fun00025 }
 39:
                    mike = global;
                    mike = mike.Set;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    echo = zulu;
                    mike = new echo[mike](result);
                    backup = mike instanceof Object ? mike : zulu;
 67:
                    if(!(tango === entity)) { _fun00026_ip = 73; continue _fun00025 }
 71:
                    tango = null;
 73:
                    if(!(foxtrot === entity)) { _fun00026_ip = 79; continue _fun00025 }
 77:
                    foxtrot = null;
 79:
                    if(!(verify === entity)) { _fun00026_ip = 118; continue _fun00025 }
 83:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 64;
                    mike = report[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.JumpTypes;
                    verify = mike.ANIMATED;
 118:
                    if(!(romeo === entity)) { _fun00026_ip = 124; continue _fun00025 }
 122:
                    romeo = null;
 124:
                    if(!(yankee === entity)) { _fun00026_ip = 130; continue _fun00025 }
 128:
                    yankee = false;
 130:
                    if(!(offset === entity)) { _fun00026_ip = 136; continue _fun00025 }
 134:
                    offset = false;
 136:
                    if(!(options === entity)) { _fun00026_ip = 142; continue _fun00025 }
 140:
                    options = false;
 142:
                    mike = _closure3_slot0;
                    mike = mike._chatRef;
                    mike = mike.current;
                    oscar = null;
                    if(!(oscar != mike)) { _fun00026_ip = 668; continue _fun00025 }
 169:
                    mike = _closure3_slot0;
                    golf = mike.createRows;
                    report = {};
                    report['forced'] = kilo;
                    report['updateMessageIds'] = backup;
                    report['scrollToMessageId'] = tango;
                    report['jumpTargetId'] = foxtrot;
                    report['focusTargetId'] = romeo;
                    report['ignoreEmbedDescriptionCache'] = yankee;
                    report['messagesNewlyLoaded'] = offset;
                    offset = arguments[9];
                    report['overrideJumpType'] = offset;
                    offset = golf.bind(mike)(report);
                    report = mike._loaded;
                    if(!(oscar != offset)) { _fun00026_ip = 253; continue _fun00025 }
 239:
                    golf = offset.length;
                    mike = 0;
                    if(!(!(golf > mike))) { _fun00026_ip = 448; continue _fun00025 }
 253:
                    mike = _closure3_slot0;
                    mike = mike._loaded;
                    if(!mike) { _fun00026_ip = 292; continue _fun00025 }
 266:
                    mike = _closure3_slot0;
                    golf = mike._chatUpdatesQueue;
                    mike = golf.hasUpdates;
                    mike = mike.bind(golf)();
                    if(mike) { _fun00026_ip = 423; continue _fun00025 }
 292:
                    mike = _closure3_slot0;
                    mike = mike._loaded;
                    if(mike) { _fun00026_ip = 374; continue _fun00025 }
 305:
                    if(!(oscar != offset)) { _fun00026_ip = 374; continue _fun00025 }
 309:
                    golf = offset.length;
                    mike = 0;
                    if(!(mike === golf)) { _fun00026_ip = 374; continue _fun00025 }
 320:
                    golf = _closure1_slot1;
                    yankee = _closure1_slot2;
                    mike = 65;
                    mike = yankee[mike];
                    yankee = golf.bind(entity)(mike);
                    golf = yankee.fadeIn;
                    mike = _closure3_slot0;
                    mike = mike._chatRef;
                    mike = mike.current;
                    mike = golf.bind(yankee)(mike);
                    _fun00026_ip = 594; continue _fun00025;
 374:
                    mike = oscar == tango;
                    if(mike) { _fun00026_ip = 395; continue _fun00025 }
 381:
                    yankee = _closure3_slot0;
                    golf = yankee.shouldJumpToOriginalPost;
                    mike = golf.bind(yankee)();
 395:
                    if(mike) { _fun00026_ip = 594; continue _fun00025 }
 401:
                    golf = _closure3_slot0;
                    mike = golf.scrollToMessageId;
                    mike = mike.bind(golf)(tango, verify, options);
                    _fun00026_ip = 594; continue _fun00025;
 423:
                    mike = _closure3_slot0;
                    golf = mike._chatUpdatesQueue;
                    mike = golf.tryFlush;
                    mike = mike.bind(golf)();
                    _fun00026_ip = 594; continue _fun00025;
 448:
                    mike = _closure3_slot0;
                    golf = true;
                    mike['_loaded'] = golf;
                    mike = mike.props;
                    options = mike.messages;
                    mike = mike.selectedSummary;
                    oscar = oscar != mike;
                    golf = undefined;
                    if(!oscar) { _fun00026_ip = 533; continue _fun00025 }
 486:
                    mike = mike.startId;
                    golf = undefined;
                    if(!(mike === tango)) { _fun00026_ip = 533; continue _fun00025 }
 498:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 65;
                    mike = oscar[mike];
                    mike = tango.bind(entity)(mike);
                    mike = mike.ChatScrollPosition;
                    golf = mike.MIDDLE;
 533:
                    oscar = _closure3_slot0;
                    tango = oscar.updateNativeRows;
                    mike = {};
                    mike['rows'] = offset;
                    options = options.hasMoreAfter;
                    mike['hasMoreMessagesAfter'] = options;
                    verify = oscar.isLoadingAtTop;
                    options = oscar.hasMoreMessagesAfterForLastUpdate;
                    options = verify.bind(oscar)(offset, options);
                    mike['isLoadingAtTop'] = options;
                    mike['scrollPosition'] = golf;
                    mike = tango.bind(oscar)(mike);
 594:
                    mike = _closure3_slot0;
                    mike = mike._loaded;
                    if(!mike) { _fun00026_ip = 621; continue _fun00025 }
 607:
                    tango = _closure3_slot0;
                    tango = tango._loaded;
                    mike = tango !== report;
 621:
                    if(!mike) { _fun00026_ip = 639; continue _fun00025 }
 624:
                    zulu = _closure3_slot0;
                    zulu = zulu.props;
                    mike = zulu.isResourceChannel;
 639:
                    if(!mike) { _fun00026_ip = 668; continue _fun00025 }
 642:
                    mike = global;
                    tango = mike.setTimeout;
                    zulu = function() {
                        mike = _closure3_slot0;
                        entity = mike.scrollToTopMessage;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    mike = 100;
                    mike = tango.bind(entity)(zulu, mike);
 668:
                    return entity;
                }
            };
            entity['updateRows'] = tango;
            tango = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    oscar = argFoo;
                    report = arguments[1];
                    verify = arguments[2];
                    entity = undefined;
                    if(!(report === entity)) { _fun00028_ip = 52; continue _fun00027 }
 17:
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 64;
                    mike = golf[mike];
                    mike = zulu.bind(entity)(mike);
                    mike = mike.JumpTypes;
                    report = mike.ANIMATED;
 52:
                    if(!(verify === entity)) { _fun00028_ip = 58; continue _fun00027 }
 56:
                    verify = false;
 58:
                    var _closure4_slot0 = entity;
                    var _closure4_slot1 = entity;
                    mike = _closure3_slot0;
                    mike = mike.props;
                    mike = mike.useReducedMotion;
                    if(mike) { _fun00028_ip = 126; continue _fun00027 }
 87:
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 64;
                    zulu = offset[zulu];
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.JumpTypes;
                    zulu = zulu.INSTANT;
                    mike = report === zulu;
 126:
                    zulu = !mike;
                    _closure4_slot0 = zulu;
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 66;
                    report = offset[report];
                    golf = golf.bind(entity)(report);
                    report = golf.isIOS;
                    golf = report.bind(golf)();
                    report = _closure3_slot0;
                    if(golf) { _fun00028_ip = 281; continue _fun00027 }
 173:
                    golf = report.findMessageRow;
                    golf = golf.bind(report)(oscar);
                    _closure4_slot1 = golf;
                    offset = null;
                    if(!(offset != golf)) { _fun00028_ip = 339; continue _fun00027 }
 197:
                    if(verify) { _fun00028_ip = 255; continue _fun00027 }
 200:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    verify = 65;
                    verify = yankee[verify];
                    offset = offset.bind(entity)(verify);
                    verify = offset.scrollTo;
                    options = _closure3_slot0;
                    options = options._chatRef;
                    options = options.current;
                    golf = golf.index;
                    golf = verify.bind(offset)(options, golf, zulu);
                    _fun00028_ip = 339; continue _fun00027;
 255:
                    golf = global;
                    options = golf.setTimeout;
                    golf = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 65;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        report = oscar.scrollIntoView;
                        mike = _closure3_slot0;
                        mike = mike._chatRef;
                        tango = mike.current;
                        zulu = _closure4_slot1;
                        zulu = zulu.index;
                        mike = _closure4_slot0;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    tango = 5;
                    tango = options.bind(entity)(golf, tango);
                    _fun00028_ip = 339; continue _fun00027;
 281:
                    tango = report.maybeRescrollToMessageId;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 64;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    mike = mike.JumpTypes;
                    if(zulu) { _fun00028_ip = 324; continue _fun00027 }
 316:
                    zulu = mike.INSTANT;
                    _fun00028_ip = 330; continue _fun00027;
 324:
                    zulu = mike.ANIMATED;
 330:
                    mike = true;
                    mike = tango.bind(report)(oscar, mike, zulu);
 339:
                    return entity;
                }
            };
            entity['scrollToMessageId'] = tango;
            tango = function(argFoo) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = _closure3_slot0;
                zulu = mike.chatManager;
                mike = zulu.getPreviousRows;
                zulu = mike.bind(zulu)();
                mike = zulu.find;
                entity = function(argFoo) {
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.message;
                        entity = null;
                        entity = entity != zulu;
                        if(!entity) { _fun00030_ip = 38; continue _fun00029 }
 17:
                        mike = mike.message;
                        zulu = mike.id;
                        mike = _closure4_slot0;
                        entity = zulu === mike;
 38:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['findMessageRow'] = tango;
            tango = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    backup = entity.isAtBottom;
                    foxtrot = entity.isNearBottom;
                    romeo = entity.isNearTop;
                    yankee = entity.dragging;
                    offset = entity.decelerating;
                    verify = entity.shouldShowJumpToPresent;
                    options = entity.isFirstMessageVisible;
                    oscar = entity.firstVisibleMessageIndex;
                    output = entity.firstVisibleMessagePercentVisible;
                    report = entity.lastVisibleMessageIndex;
                    update = entity.changesetUpdateId;
                    sizing = entity.lastVisibleMessagePercentVisible;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 67;
                    mike = mike[entity];
                    entity = undefined;
                    golf = zulu.bind(entity)(mike);
                    tango = golf.getChangesetIdForChat;
                    zulu = _closure3_slot0;
                    zulu = zulu._chatRef;
                    zulu = zulu.current;
                    echo = tango.bind(golf)(zulu);
                    if(!(update !== echo)) { _fun00032_ip = 209; continue _fun00031 }
 140:
                    zulu = _closure3_slot0;
                    zulu = zulu.props;
                    zulu = zulu.isStaff;
                    if(!zulu) { _fun00032_ip = 381; continue _fun00031 }
 161:
                    result = _closure1_slot74;
                    golf = result.log;
                    zulu = _closure3_slot0;
                    zulu = zulu.props;
                    vacuum = zulu.channelId;
                    sequence = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                    config = result;
                    control = update;
                    source = echo;
                    zulu = config[golf](sequence, vacuum, control, source, update);
                    _fun00032_ip = 381; continue _fun00031;
 209:
                    golf = _closure3_slot0;
                    mike = golf.props;
                    tango = mike.visibleMessagesWindowHandler;
                    zulu = golf.handleVisibleMessagesChange;
                    mike = {};
                    mike['firstVisibleMessageIndex'] = oscar;
                    mike['lastVisibleMessageIndex'] = report;
                    mike['firstVisibleMessagePercentVisible'] = output;
                    mike['lastVisibleMessagePercentVisible'] = sizing;
                    sizing = _closure1_slot0;
                    output = _closure1_slot2;
                    kilo = 68;
                    kilo = output[kilo];
                    kilo = sizing.bind(entity)(kilo);
                    kilo = kilo.QuestsVisibleMessagesChangedSource;
                    kilo = kilo.SCROLL;
                    mike['source'] = kilo;
                    mike = zulu.bind(golf)(mike);
                    zulu = golf.handleScroll;
                    mike = {};
                    mike['isAtBottom'] = backup;
                    mike['isNearBottom'] = foxtrot;
                    mike['isNearTop'] = romeo;
                    mike['dragging'] = yankee;
                    mike['decelerating'] = offset;
                    mike['shouldShowJumpToPresent'] = verify;
                    mike['isFirstMessageVisible'] = options;
                    mike = zulu.bind(golf)(mike);
                    zulu = tango.handleScrollPosition;
                    mike = {};
                    golf = golf.chatManager;
                    golf = golf._rows;
                    mike['rows'] = golf;
                    mike['firstVisibleMessageIndex'] = oscar;
                    mike['lastVisibleMessageIndex'] = report;
                    mike = zulu.bind(tango)(mike);
 381:
                    return entity;
                }
            };
            entity['handleScrollPosition'] = tango;
            tango = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zulu = argFoo;
                    options = zulu.isAtBottom;
                    golf = zulu.isNearBottom;
                    entity = undefined;
                    if(!(golf === entity)) { _fun00034_ip = 25; continue _fun00033 }
 23:
                    golf = false;
 25:
                    oscar = zulu.isNearTop;
                    if(!(oscar === entity)) { _fun00034_ip = 37; continue _fun00033 }
 35:
                    oscar = false;
 37:
                    report = zulu.dragging;
                    if(!(report === entity)) { _fun00034_ip = 49; continue _fun00033 }
 47:
                    report = false;
 49:
                    tango = zulu.decelerating;
                    if(!(tango === entity)) { _fun00034_ip = 61; continue _fun00033 }
 59:
                    tango = false;
 61:
                    foxtrot = zulu.shouldShowJumpToPresent;
                    if(!(foxtrot === entity)) { _fun00034_ip = 73; continue _fun00033 }
 71:
                    foxtrot = false;
 73:
                    var _closure4_slot0 = foxtrot;
                    romeo = zulu.isFirstMessageVisible;
                    if(!(romeo === entity)) { _fun00034_ip = 89; continue _fun00033 }
 87:
                    romeo = false;
 89:
                    var _closure4_slot1 = entity;
                    yankee = _closure3_slot0;
                    verify = yankee.props;
                    verify = verify.messages;
                    _closure4_slot1 = verify;
                    offset = yankee.handleScrollCallbacks;
                    verify = {};
                    verify['isAtBottom'] = options;
                    verify['isNearBottom'] = golf;
                    verify['isNearTop'] = oscar;
                    verify['dragging'] = report;
                    verify['decelerating'] = tango;
                    verify['shouldShowJumpToPresent'] = foxtrot;
                    verify['isFirstMessageVisible'] = romeo;
                    verify = offset.bind(yankee)(verify);
                    if(!verify) { _fun00034_ip = 241; continue _fun00033 }
 166:
                    zulu = _closure3_slot0;
                    zulu['isAtBottom'] = options;
                    zulu['isNearBottom'] = golf;
                    zulu['isNearTop'] = oscar;
                    zulu['dragging'] = report;
                    zulu['decelerating'] = tango;
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 69;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 70;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.updateShouldShowJumpToPresentButton;
                            mike = _closure4_slot0;
                            if(mike) { _fun00036_ip = 51; continue _fun00035 }
 41:
                            report = _closure4_slot1;
                            mike = report.hasMoreAfter;
 51:
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
 241:
                    return entity;
                }
            };
            entity['handleScroll'] = tango;
            tango = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = _closure3_slot0;
                    zulu = entity._isMounted;
                    entity = null;
                    entity = entity != zulu;
                    if(entity) { _fun00038_ip = 38; continue _fun00037 }
 22:
                    zulu = _closure3_slot0;
                    tango = zulu._layoutTimer;
                    zulu = 0;
                    entity = tango >= zulu;
 38:
                    if(entity) { _fun00038_ip = 93; continue _fun00037 }
 41:
                    entity = global;
                    tango = entity.clearTimeout;
                    mike = _closure3_slot0;
                    zulu = mike._layoutTimer;
                    report = undefined;
                    zulu = tango.bind(report)(zulu);
                    tango = entity.setTimeout;
                    zulu = mike.flushLayout;
                    entity = 1;
                    entity = tango.bind(report)(zulu, entity);
                    mike['_layoutTimer'] = entity;
 93:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleLayout'] = tango;
            tango = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike._isMounted;
                    verify = null;
                    if(!(verify == mike)) { _fun00040_ip = 285; continue _fun00039 }
 24:
                    mike = _closure3_slot0;
                    zulu = true;
                    mike['_isMounted'] = zulu;
                    report = global;
                    oscar = report.clearTimeout;
                    zulu = mike._layoutTimer;
                    golf = undefined;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = -1;
                    mike['_layoutTimer'] = zulu;
                    oscar = mike.props;
                    zulu = oscar.messages;
                    mike = oscar.isMessagesReady;
                    oscar = oscar.oldestUnreadMessageId;
                    var _closure4_slot0 = oscar;
                    sizing = _closure3_slot0;
                    kilo = sizing.updateRows;
                    if(mike) { _fun00040_ip = 118; continue _fun00039 }
 109:
                    mike = kilo.bind(sizing)();
                    _fun00040_ip = 271; continue _fun00039;
 118:
                    update = zulu.jumpTargetId;
                    echo = zulu.jumpTargetId;
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 64;
                    offset = offset[options];
                    offset = yankee.bind(golf)(offset);
                    offset = offset.JumpTypes;
                    result = offset.INSTANT;
                    output = zulu.focusTargetId;
                    control = false;
                    vacuum = sizing;
                    source = undefined;
                    offset = vacuum[kilo](control, source, update, echo, result, output, sizing);
                    offset = zulu.jumpTargetId;
                    if(!(verify == offset)) { _fun00040_ip = 220; continue _fun00039 }
 192:
                    if(!(verify != oscar)) { _fun00040_ip = 271; continue _fun00039 }
 196:
                    oscar = report.setTimeout;
                    report = function() {
                        tango = _closure3_slot0;
                        zulu = tango.scrollToMessageId;
                        mike = _closure4_slot0;
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 64;
                        report = report[entity];
                        entity = undefined;
                        entity = oscar.bind(entity)(report);
                        entity = entity.JumpTypes;
                        entity = entity.INSTANT;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    tango = 50;
                    tango = oscar.bind(golf)(report, tango);
                    _fun00040_ip = 271; continue _fun00039;
 220:
                    report = _closure3_slot0;
                    tango = report.scrollToMessageId;
                    zulu = zulu.jumpTargetId;
                    oscar = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[options];
                    mike = oscar.bind(golf)(mike);
                    mike = mike.JumpTypes;
                    mike = mike.INSTANT;
                    mike = tango.bind(report)(zulu, mike);
 271:
                    mike = _closure3_slot0;
                    entity = mike.recordTimings;
                    entity = entity.bind(mike)();
 285:
                    entity = undefined;
                    return entity;
                }
            };
            entity['flushLayout'] = tango;
            tango = function() {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = true;
                    entity['animated'] = mike;
                    entity = entity.props;
                    oscar = entity.channelId;
                    golf = entity.messages;
                    entity = golf.hasMoreBefore;
                    if(!entity) { _fun00042_ip = 49; continue _fun00041 }
 40:
                    mike = golf.loadingMore;
                    entity = !mike;
 49:
                    if(!entity) { _fun00042_ip = 132; continue _fun00041 }
 52:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 71;
                    entity = zulu[entity];
                    report = undefined;
                    zulu = mike.bind(report)(entity);
                    mike = zulu.fetchMessages;
                    entity = {};
                    entity['channelId'] = oscar;
                    oscar = golf.first;
                    oscar = oscar.bind(golf)();
                    golf = null;
                    golf = golf == oscar;
                    if(golf) { _fun00042_ip = 113; continue _fun00041 }
 108:
                    report = oscar.id;
 113:
                    entity['before'] = report;
                    tango = _closure1_slot61;
                    entity['limit'] = tango;
                    entity = mike.bind(zulu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity['loadMoreBefore'] = tango;
            tango = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = true;
                    entity['animated'] = mike;
                    entity = entity.props;
                    oscar = entity.channelId;
                    golf = entity.messages;
                    entity = golf.hasMoreAfter;
                    if(!entity) { _fun00044_ip = 49; continue _fun00043 }
 40:
                    mike = golf.loadingMore;
                    entity = !mike;
 49:
                    if(!entity) { _fun00044_ip = 132; continue _fun00043 }
 52:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 71;
                    entity = zulu[entity];
                    report = undefined;
                    zulu = mike.bind(report)(entity);
                    mike = zulu.fetchMessages;
                    entity = {};
                    entity['channelId'] = oscar;
                    oscar = golf.last;
                    oscar = oscar.bind(golf)();
                    golf = null;
                    golf = golf == oscar;
                    if(golf) { _fun00044_ip = 113; continue _fun00043 }
 108:
                    report = oscar.id;
 113:
                    entity['after'] = report;
                    tango = _closure1_slot61;
                    entity['limit'] = tango;
                    entity = mike.bind(zulu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity['loadMoreAfter'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapImage;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapImage'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapChannel'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressChannel'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapAttachmentLink;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapAttachmentLink'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressAttachmentLink;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressAttachmentLink'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapCall;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapCall'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapMention;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapMention'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapCommandMention;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapCommandMention'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressCommandMention;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressCommandMention'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapLink;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapLink'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressLink;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressLink'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapReaction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapReaction'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressReaction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressReaction'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleOpenSticker;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleOpenSticker'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                tango = entity.bind(mike)();
                zulu = tango.handleOpenProfile;
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 72;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                entity = entity.AVATAR;
                mike = new Array(1);
                mike[0] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity['handleTapAvatar'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapUsername;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapUsername'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                tango = entity.bind(mike)();
                zulu = tango.handleOpenProfile;
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 72;
                mike = mike[entity];
                entity = undefined;
                entity = report.bind(entity)(mike);
                entity = entity.USERNAME;
                mike = new Array(1);
                mike[0] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity['handleLongPressUsername'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapThreadEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapThreadEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapReply;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapReply'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSummary;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSummary'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSummaryJump;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSummaryJump'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressMessage;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressMessage'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleInitiateReply;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleInitiateReply'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleInitiateEdit;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleInitiateEdit'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleInitiateThread;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleInitiateThread'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapMessage;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapMessage'] = tango;
            tango = function(argFoo) {
                entity = _closure3_slot0;
                mike = entity.getHandlers;
                report = mike.bind(entity)();
                tango = report.handleTapSeparator;
                zulu = entity.loadMoreBefore;
                mike = entity.loadMoreAfter;
                entity = argFoo;
                entity = tango.bind(report)(entity, zulu, mike);
                return entity;
            };
            entity['handleTapSeparator'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapUploadProgressClose;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapUploadProgressClose'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapCancelUploadItem;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapCancelUploadItem'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapInviteEmbedAccept;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapInviteEmbedAccept'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapInviteEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapInviteEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapJoinActivity;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapJoinActivity'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapGiftCodeEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapGiftCodeEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapGiftCodeAccept;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapGiftCodeAccept'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapReferralRedeem;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapReferralRedeem'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapEmoji;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapEmoji'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapTimestamp;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapTimestamp'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapRoleIcon;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapRoleIcon'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapGameIcon;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapGameIcon'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSuppressNotificationsIcon;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSuppressNotificationsIcon'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapConnectionsRoleTag;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapConnectionsRoleTag'] = tango;
            tango = function() {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                mike = entity.bind(mike)();
                entity = mike.handleTapTimeoutIcon;
                entity = entity.bind(mike)();
                return entity;
            };
            entity['handleTapTimeoutIcon'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapButtonActionComponent;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapButtonActionComponent'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSelectActionComponent;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSelectActionComponent'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapWelcomeReply;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapWelcomeReply'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapInviteToSpeak;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapInviteToSpeak'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapAutoModerationActions;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapAutoModerationActions'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapAutoModerationFeedback;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapAutoModerationFeedback'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapFollowForumPost;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapFollowForumPost'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapShareForumPost;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapShareForumPost'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapReactionOverflow;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapReactionOverflow'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleCopyText;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleCopyText'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapOpTag;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapOpTag'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapTag;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapTag'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapRemix;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapRemix'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleMediaAttachmentPlaybackStarted;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleMediaAttachmentPlaybackStarted'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleMediaAttachmentPlaybackEnded;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleMediaAttachmentPlaybackEnded'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleVoiceMessagePlaybackFailed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handlerVoiceMessagePlaybackFailed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapActivityBookmarkEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapActivityBookmarkEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapActivityInstanceEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapActivityInstanceEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapPostPreviewEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapPostPreviewEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapDismissMediaPostSharePrompt;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapDismissMediaPostSharePrompt'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapChannelPromptButton;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapChannelPromptButton'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapObscuredMediaLearnMore;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapObscuredMediaLearnMore'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.onTapObscuredMediaToggle;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapObscuredMediaToggle'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSafetyPolicyNoticeEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSafetyPolicyNoticeEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSafetySystemNotificationCta;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSafetySystemNotificationCta'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapPollAnswer;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapPollAnswer'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapPollSubmitVote;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapPollSubmitVote'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapPollAction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapPollAction'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleLongPressPollImage;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleLongPressPollImage'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapCtaButton;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapCtaButton'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleMessageAccessibilityAction;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleMessageAccessibilityAction'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapForwardFooter;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapForwardFooter'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapInlineForward;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapInlineForward'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapClanTagChiplet;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapClanTagChiplet'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapContentInventoryEntryEmbed;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapContentInventoryEntryEmbed'] = tango;
            tango = function(argFoo) {
                mike = _closure3_slot0;
                entity = mike.getHandlers;
                zulu = entity.bind(mike)();
                mike = zulu.handleTapSoundmoji;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['handleTapSoundmoji'] = tango;
            tango = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.props;
                    zulu = entity.channel;
                    entity = entity.canChat;
                    if(!entity) { _fun00046_ip = 55; continue _fun00045 }
 26:
                    report = _closure1_slot50;
                    tango = report.can;
                    mike = _closure1_slot65;
                    mike = mike.ADD_REACTIONS;
                    entity = tango.bind(report)(mike, zulu);
 55:
                    if(entity) { _fun00046_ip = 68; continue _fun00045 }
 58:
                    mike = zulu.isPrivate;
                    entity = mike.bind(zulu)();
 68:
                    return entity;
                }
            };
            entity['canAddNewReactions'] = tango;
            tango = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 73;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getNativeSyntheticEventData;
                    mike = argFoo;
                    mike = zulu.bind(tango)(mike);
                    oscar = mike.messageId;
                    zulu = _closure3_slot0;
                    golf = zulu.animatingStickerMessageId;
                    zulu = global;
                    report = zulu.Set;
                    zulu = new Array(1);
                    zulu[0] = oscar;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    offset = tango;
                    verify = zulu;
                    zulu = new offset[report](verify, options);
                    report = zulu instanceof Object ? zulu : tango;
                    tango = null;
                    if(!(tango != golf)) { _fun00048_ip = 112; continue _fun00047 }
 102:
                    zulu = report.add;
                    zulu = zulu.bind(report)(golf);
 112:
                    zulu = _closure3_slot0;
                    tango = null;
                    if(!(golf !== oscar)) { _fun00048_ip = 125; continue _fun00047 }
 122:
                    tango = oscar;
 125:
                    zulu['animatingStickerMessageId'] = tango;
                    tango = _closure3_slot0;
                    zulu = tango.updateRows;
                    mike = true;
                    mike = zulu.bind(tango)(mike, report);
                    return entity;
                }
            };
            entity['handleLongPressSticker'] = tango;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                mike = entity.description;
                oscar = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 74;
                report = zulu[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(report);
                report = oscar.openLazy;
                golf = _closure1_slot0;
                tango = 76;
                tango = zulu[tango];
                golf = golf.bind(entity)(tango);
                tango = 75;
                tango = zulu[tango];
                zulu = zulu.paths;
                tango = golf.bind(entity)(tango, zulu);
                zulu = {};
                zulu['description'] = mike;
                mike = true;
                zulu['showBackdrop'] = mike;
                mike = 'MediaViewerAltTextSheet';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            entity['handleTapShowAltText'] = tango;
            tango = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    report = arguments[0];
                    entity = undefined;
                    if(!(report === entity)) { _fun00050_ip = 11; continue _fun00049 }
 9:
                    report = true;
 11:
                    mike = _closure3_slot0;
                    zulu = mike.props;
                    oscar = zulu.useReducedMotion;
                    tango = mike.handleScrollCallbacks;
                    zulu = {};
                    golf = true;
                    zulu['isAtBottom'] = golf;
                    zulu = tango.bind(mike)(zulu);
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 65;
                    zulu = golf[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.scrollToBottom;
                    mike = mike._chatRef;
                    mike = mike.current;
                    if(!report) { _fun00050_ip = 95; continue _fun00049 }
 92:
                    report = !oscar;
 95:
                    mike = zulu.bind(tango)(mike, report);
                    return entity;
                }
            };
            entity['scrollToBottom'] = tango;
            tango = function() {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    report = arguments[0];
                    entity = undefined;
                    if(!(report === entity)) { _fun00052_ip = 11; continue _fun00051 }
 9:
                    report = true;
 11:
                    mike = _closure3_slot0;
                    zulu = mike.props;
                    oscar = zulu.useReducedMotion;
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 65;
                    zulu = golf[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.scrollToTop;
                    mike = mike._chatRef;
                    mike = mike.current;
                    if(!report) { _fun00052_ip = 75; continue _fun00051 }
 72:
                    report = !oscar;
 75:
                    mike = zulu.bind(tango)(mike, report);
                    return entity;
                }
            };
            entity['scrollToTop'] = tango;
            tango = function(argFoo) {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    oscar = arguments[1];
                    entity = undefined;
                    if(!(oscar === entity)) { _fun00054_ip = 11; continue _fun00053 }
 9:
                    oscar = true;
 11:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 65;
                    mike = tango[mike];
                    report = zulu.bind(entity)(mike);
                    tango = report.scrollToRelativeOffset;
                    zulu = _closure3_slot0;
                    zulu = zulu._chatRef;
                    zulu = zulu.current;
                    if(!oscar) { _fun00054_ip = 79; continue _fun00053 }
 61:
                    mike = _closure3_slot0;
                    mike = mike.props;
                    mike = mike.useReducedMotion;
                    oscar = !mike;
 79:
                    mike = argFoo;
                    mike = tango.bind(report)(zulu, mike, oscar);
                    return entity;
                }
            };
            entity['scrollToRelativeOffset'] = tango;
            tango = function() {
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    entity = _closure3_slot0;
                    zulu = entity.chatManager;
                    entity = zulu.getPreviousRows;
                    entity = entity.bind(zulu)();
                    tango = entity.length;
                    zulu = 0;
                    if(!(tango > zulu)) { _fun00056_ip = 101; continue _fun00055 }
 34:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 65;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.scrollTo;
                    mike = _closure3_slot0;
                    mike = mike._chatRef;
                    zulu = mike.current;
                    mike = entity.length;
                    entity = 1;
                    mike = mike - entity;
                    entity = false;
                    entity = tango.bind(report)(zulu, mike, entity);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            entity['scrollToTopMessage'] = tango;
            tango = _closure1_slot4;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00058_ip = 402; continue _fun00057 }
 12:
                        mike = undefined;
                        var _closure5_slot0 = mike;
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        verify = zulu.channel;
                        report = zulu.useReducedMotion;
                        _closure5_slot0 = report;
                        zulu = verify.isForumPost;
                        zulu = zulu.bind(verify)();
                        if(!zulu) { _fun00058_ip = 399; continue _fun00057 }
 61:
                        zulu = _closure3_slot0;
                        zulu = zulu.isNearTop;
                        if(zulu) { _fun00058_ip = 399; continue _fun00057 }
 77:
                        offset = _closure3_slot0;
                        options = offset.getMessage;
                        yankee = _closure1_slot1;
                        zulu = _closure1_slot2;
                        foxtrot = 63;
                        zulu = zulu[foxtrot];
                        romeo = yankee.bind(mike)(zulu);
                        yankee = romeo.castChannelIdAsMessageId;
                        zulu = verify.id;
                        zulu = yankee.bind(romeo)(zulu);
                        zulu = options.bind(offset)(zulu);
                        options = null;
                        if(!(options != zulu)) { _fun00058_ip = 286; continue _fun00057 }
 140:
                        yankee = _closure3_slot0;
                        offset = yankee.findMessageRow;
                        romeo = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[foxtrot];
                        foxtrot = romeo.bind(mike)(zulu);
                        romeo = foxtrot.castChannelIdAsMessageId;
                        zulu = verify.id;
                        zulu = romeo.bind(foxtrot)(zulu);
                        zulu = offset.bind(yankee)(zulu);
                        if(!(options != zulu)) { _fun00058_ip = 283; continue _fun00057 }
 192:
                        offset = _closure1_slot1;
                        yankee = _closure1_slot2;
                        options = 65;
                        options = yankee[options];
                        yankee = offset.bind(mike)(options);
                        offset = yankee.scrollTo;
                        oscar = _closure3_slot0;
                        oscar = oscar._chatRef;
                        options = oscar.current;
                        oscar = zulu.index;
                        report = !report;
                        report = offset.bind(yankee)(options, oscar, report);
                        report = global;
                        oscar = report.setTimeout;
                        report = zulu.index;
                        zulu = 10;
                        report = zulu * report;
                        zulu = function() {
                            zulu = _closure3_slot0;
                            mike = zulu.scrollToTop;
                            entity = _closure5_slot0;
                            entity = !entity;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = oscar.bind(mike)(zulu, report);
                        _fun00058_ip = 399; continue _fun00057;
 283:
                        return mike;
 286:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        zulu = 71;
                        zulu = oscar[zulu];
                        oscar = report.bind(mike)(zulu);
                        report = oscar.fetchMessages;
                        zulu = {};
                        options = verify.id;
                        zulu['channelId'] = options;
                        options = {};
                        verify = verify.id;
                        options['messageId'] = verify;
                        verify = false;
                        options['flash'] = verify;
                        zulu['jump'] = options;
                        golf = _closure1_slot61;
                        zulu['limit'] = golf;
                        zulu = report.bind(oscar)(zulu);
                        SaveGenerator(address=364);
 362:
                        return zulu;
 364:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00058_ip = 396; continue _fun00057 }
 370:
                        report = global;
                        oscar = report.setTimeout;
                        report = function() {
                            zulu = _closure3_slot0;
                            mike = zulu.scrollToTop;
                            entity = _closure5_slot0;
                            entity = !entity;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        tango = 50;
                        tango = oscar.bind(mike)(report, tango);
                        _fun00058_ip = 399; continue _fun00057;
 396:
                        return zulu;
 399:
                        return mike;
 402:
                        return entity;
                    }
                };
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            entity['handleTapNavBar'] = zulu;
            zulu = function() {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.chatInputRef;
                    report = entity.keyboardType;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 66;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(zulu);
                    zulu = oscar.isIOS;
                    zulu = zulu.bind(oscar)();
                    if(!zulu) { _fun00060_ip = 76; continue _fun00059 }
 62:
                    tango = _closure1_slot66;
                    tango = tango.SYSTEM;
                    zulu = report !== tango;
 76:
                    if(!zulu) { _fun00060_ip = 100; continue _fun00059 }
 79:
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun00060_ip = 100; continue _fun00059 }
 90:
                    mike = zulu.closeCustomKeyboard;
                    mike = mike.bind(zulu)();
 100:
                    return entity;
                }
            };
            entity['handleTapTableView'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                golf = entity.firstVisibleMessageIndex;
                oscar = entity.lastVisibleMessageIndex;
                report = entity.firstVisibleMessagePercentVisible;
                entity = entity.lastVisibleMessagePercentVisible;
                tango = _closure3_slot0;
                zulu = tango.handleVisibleMessagesChange;
                mike = {};
                mike['firstVisibleMessageIndex'] = golf;
                mike['lastVisibleMessageIndex'] = oscar;
                mike['firstVisibleMessagePercentVisible'] = report;
                mike['lastVisibleMessagePercentVisible'] = entity;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 68;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                report = report.QuestsVisibleMessagesChangedSource;
                report = report.FIRST_LAYOUT;
                mike['source'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleFirstLayout'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                golf = entity.firstVisibleMessageIndex;
                oscar = entity.lastVisibleMessageIndex;
                report = entity.firstVisibleMessagePercentVisible;
                entity = entity.lastVisibleMessagePercentVisible;
                tango = _closure3_slot0;
                zulu = tango.handleVisibleMessagesChange;
                mike = {};
                mike['firstVisibleMessageIndex'] = golf;
                mike['lastVisibleMessageIndex'] = oscar;
                mike['firstVisibleMessagePercentVisible'] = report;
                mike['lastVisibleMessagePercentVisible'] = entity;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 68;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                report = report.QuestsVisibleMessagesChangedSource;
                report = report.VISIBILITY_CHANGED;
                mike['source'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleMessageVisibilityChanged'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                golf = entity.nativeEvent;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 77;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot57;
                zulu = mike.MEDIA_PLAY_FINISHED;
                mike = {};
                options = golf.playWallTimeMs;
                mike['play_time_sec'] = options;
                options = golf.playWallTimeMs;
                mike['play_wall_time_ms'] = options;
                options = golf.firstPlayWaitingMs;
                mike['first_play_waiting_ms'] = options;
                options = golf.stallCount;
                mike['stall_count'] = options;
                options = golf.stallMs;
                mike['stall_ms'] = options;
                options = golf.seekCount;
                mike['seek_count'] = options;
                options = null;
                mike['seek_waiting_ms'] = options;
                verify = golf.mediaSource;
                mike['media_source'] = verify;
                verify = golf.mimeType;
                mike['mime_type'] = verify;
                mike['file_size'] = options;
                golf = golf.fileDurationSec;
                mike['file_duration_sec'] = golf;
                golf = _closure1_slot49;
                oscar = golf.getType;
                oscar = oscar.bind(golf)();
                mike['connection_type'] = oscar;
                oscar = golf.getEffectiveConnectionSpeed;
                oscar = oscar.bind(golf)();
                mike['effective_connection_speed'] = oscar;
                oscar = golf.getServiceProvider;
                oscar = oscar.bind(golf)();
                mike['service_provider'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            entity['handleMediaPlayFinishedAnalytics'] = zulu;
            zulu = function() {
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.props;
                    mike = zulu.messages;
                    report = zulu.channel;
                    golf = mike.jumpReturnTargetId;
                    zulu = null;
                    if(!(zulu != golf)) { _fun00062_ip = 95; continue _fun00061 }
 35:
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 71;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(tango);
                    tango = oscar.jumpToMessage;
                    zulu = {};
                    options = report.id;
                    zulu['channelId'] = options;
                    zulu['messageId'] = golf;
                    golf = true;
                    zulu['flash'] = golf;
                    zulu = tango.bind(oscar)(zulu);
                    _fun00062_ip = 199; continue _fun00061;
 95:
                    zulu = mike.loadingMore;
                    if(zulu) { _fun00062_ip = 199; continue _fun00061 }
 104:
                    mike = mike.hasMoreAfter;
                    if(mike) { _fun00062_ip = 129; continue _fun00061 }
 113:
                    mike = _closure3_slot0;
                    entity = mike.scrollToBottom;
                    entity = entity.bind(mike)();
                    _fun00062_ip = 199; continue _fun00061;
 129:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 71;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchMessages;
                    entity = {};
                    report = report.id;
                    entity['channelId'] = report;
                    tango = _closure1_slot61;
                    entity['limit'] = tango;
                    tango = {};
                    report = true;
                    tango['present'] = report;
                    entity['jump'] = tango;
                    entity = mike.bind(zulu)(entity);
 199:
                    entity = undefined;
                    return entity;
                }
            };
            entity['jumpToPresent'] = zulu;
            zulu = function() {
                _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 78;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.getCurrentConfig;
                    zulu = {};
                    oscar = 'Messages';
                    zulu['location'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    report = zulu.enabled;
                    options = _closure3_slot0;
                    zulu = options.props;
                    if(report) { _fun00064_ip = 409; continue _fun00063 }
 69:
                    report = zulu.useReducedMotion;
                    golf = zulu.oldestUnreadMessageId;
                    verify = options.chatManager;
                    oscar = verify.getPreviousRows;
                    offset = oscar.bind(verify)();
                    oscar = options.findMessageRow;
                    oscar = oscar.bind(options)(golf);
                    golf = null;
                    if(!(golf != oscar)) { _fun00064_ip = 509; continue _fun00063 }
 117:
                    oscar = oscar.index;
                    yankee = oscar + 1;
                    oscar = offset.length;
                    verify = yankee;
                    if(!(yankee < oscar)) { _fun00064_ip = 265; continue _fun00063 }
 140:
                    oscar = offset[yankee];
                    golf = oscar.type;
                    oscar = _closure1_slot68;
                    oscar = oscar.SEPARATOR;
                    verify = yankee;
                    if(!(golf === oscar)) { _fun00064_ip = 265; continue _fun00063 }
 166:
                    oscar = offset[yankee];
                    golf = oscar.id;
                    oscar = _closure1_slot69;
                    oscar = oscar.UNREAD;
                    options = yankee;
                    verify = options;
                    if(!(golf !== oscar)) { _fun00064_ip = 265; continue _fun00063 }
 195:
                    yankee = options + 1;
                    oscar = offset.length;
                    verify = yankee;
                    if(!(yankee < oscar)) { _fun00064_ip = 265; continue _fun00063 }
 210:
                    oscar = offset[yankee];
                    golf = oscar.type;
                    oscar = _closure1_slot68;
                    oscar = oscar.SEPARATOR;
                    verify = yankee;
                    if(!(golf === oscar)) { _fun00064_ip = 265; continue _fun00063 }
 236:
                    oscar = offset[yankee];
                    golf = oscar.id;
                    oscar = _closure1_slot69;
                    oscar = oscar.UNREAD;
                    options = yankee;
                    verify = options;
                    if(golf !== oscar) { _fun00064_ip = 195; continue _fun00063 }
 265:
                    golf = _closure3_slot0;
                    oscar = golf.shouldJumpToOriginalPost;
                    oscar = oscar.bind(golf)();
                    if(oscar) { _fun00064_ip = 393; continue _fun00063 }
 282:
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 65;
                    oscar = options[oscar];
                    options = golf.bind(entity)(oscar);
                    golf = options.scrollTo;
                    oscar = _closure3_slot0;
                    oscar = oscar._chatRef;
                    oscar = oscar.current;
                    if(report) { _fun00064_ip = 383; continue _fun00063 }
 326:
                    offset = _closure3_slot0;
                    offset = offset.props;
                    offset = offset.messages;
                    yankee = offset.jumpType;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    offset = 64;
                    offset = foxtrot[offset];
                    offset = romeo.bind(entity)(offset);
                    offset = offset.JumpTypes;
                    offset = offset.INSTANT;
                    report = yankee === offset;
 383:
                    report = !report;
                    report = golf.bind(options)(oscar, verify, report);
 393:
                    report = _closure3_slot0;
                    tango = report.loadMoreBefore;
                    tango = tango.bind(report)();
                    _fun00064_ip = 509; continue _fun00063;
 409:
                    oscar = zulu.channel;
                    report = _closure1_slot52;
                    tango = report.ackMessageId;
                    zulu = oscar.id;
                    report = tango.bind(report)(zulu);
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 71;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.jumpToMessage;
                    mike = {};
                    golf = oscar.id;
                    mike['channelId'] = golf;
                    golf = null;
                    if(!(golf == report)) { _fun00064_ip = 482; continue _fun00063 }
 477:
                    report = oscar.id;
 482:
                    mike['messageId'] = report;
                    report = 1;
                    mike['offset'] = report;
                    report = 'Mark As Read';
                    mike['context'] = report;
                    mike = zulu.bind(tango)(mike);
 509:
                    return entity;
                }
            };
            entity['scrollToNewMessages'] = zulu;
            zulu = function() {
                entity = _closure3_slot0;
                entity = entity._chatRef;
                return entity;
            };
            entity['getChatRef'] = zulu;
            zulu = function() {
                mike = _closure3_slot0;
                golf = false;
                mike['animated'] = golf;
                mike['hasHandledScroll'] = golf;
                mike['isNearBottom'] = golf;
                mike['isAtBottom'] = golf;
                mike['isNearTop'] = golf;
                mike['decelerating'] = golf;
                mike['dragging'] = golf;
                mike['hasMoreMessagesAfterForLastUpdate'] = golf;
                entity = new Array(0);
                mike['pendingUpdatesQueue'] = entity;
                mike['_loaded'] = golf;
                entity = null;
                mike['animatingStickerMessageId'] = entity;
                zulu = mike.chatManager;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 70;
                tango = report[entity];
                entity = undefined;
                oscar = oscar.bind(entity)(tango);
                tango = oscar.updateShouldShowJumpToPresentButton;
                tango = tango.bind(oscar)(golf);
                tango = _closure1_slot1;
                zulu = 65;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.clearRows;
                mike = mike._chatRef;
                mike = mike.current;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['clearRows'] = zulu;
            mike = function(argFoo) {
                _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.forced;
                    var _closure4_slot0 = zulu;
                    zulu = entity.updateMessageIds;
                    var _closure4_slot1 = zulu;
                    zulu = entity.scrollToMessageId;
                    var _closure4_slot2 = zulu;
                    zulu = entity.jumpTargetId;
                    var _closure4_slot3 = zulu;
                    zulu = entity.focusTargetId;
                    var _closure4_slot4 = zulu;
                    zulu = entity.ignoreEmbedDescriptionCache;
                    var _closure4_slot5 = zulu;
                    zulu = entity.messagesNewlyLoaded;
                    var _closure4_slot6 = zulu;
                    entity = entity.overrideJumpType;
                    var _closure4_slot7 = entity;
                    entity = _closure3_slot0;
                    tango = entity.props;
                    entity = tango.channel;
                    var _closure4_slot8 = entity;
                    report = tango.messages;
                    var _closure4_slot9 = report;
                    zulu = tango.isMessagesReady;
                    oscar = tango.uploads;
                    var _closure4_slot10 = oscar;
                    oscar = tango.roleStyle;
                    var _closure4_slot11 = oscar;
                    oscar = tango.oldestUnreadMessageId;
                    var _closure4_slot12 = oscar;
                    oscar = tango.replyingMessageId;
                    var _closure4_slot13 = oscar;
                    oscar = tango.inlineAttachmentMedia;
                    var _closure4_slot14 = oscar;
                    oscar = tango.inlineEmbedMedia;
                    var _closure4_slot15 = oscar;
                    oscar = tango.renderEmbeds;
                    var _closure4_slot16 = oscar;
                    oscar = tango.renderReactions;
                    var _closure4_slot17 = oscar;
                    oscar = tango.renderInlineForwardButton;
                    var _closure4_slot18 = oscar;
                    oscar = tango.animateEmoji;
                    var _closure4_slot19 = oscar;
                    oscar = tango.gifAutoPlay;
                    var _closure4_slot20 = oscar;
                    oscar = tango.useReducedMotion;
                    var _closure4_slot21 = oscar;
                    oscar = tango.currentUserId;
                    var _closure4_slot22 = oscar;
                    oscar = tango.renderCommunicationDisabled;
                    var _closure4_slot23 = oscar;
                    oscar = tango.selectedSummary;
                    var _closure4_slot24 = oscar;
                    oscar = tango.theme;
                    var _closure4_slot25 = oscar;
                    oscar = tango.enableSwipeActions;
                    var _closure4_slot26 = oscar;
                    oscar = tango.isResourceChannel;
                    var _closure4_slot27 = oscar;
                    oscar = tango.shouldObscureSpoiler;
                    var _closure4_slot28 = oscar;
                    oscar = tango.shouldDisableInteractiveComponents;
                    var _closure4_slot29 = oscar;
                    oscar = tango.shouldFilterKeywords;
                    var _closure4_slot30 = oscar;
                    oscar = tango.fromICYMITab;
                    var _closure4_slot31 = oscar;
                    tango = tango.unloadableContentEntryMessageIds;
                    var _closure4_slot32 = tango;
                    tango = null;
                    oscar = tango != entity;
                    entity = null;
                    if(!oscar) { _fun00066_ip = 426; continue _fun00065 }
 363:
                    report = tango != report;
                    entity = null;
                    if(!report) { _fun00066_ip = 426; continue _fun00065 }
 372:
                    entity = null;
                    if(!zulu) { _fun00066_ip = 426; continue _fun00065 }
 377:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 79;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    tango = zulu.firstRowGenerator;
                    zulu = tango.measure;
                    mike = function() {
                        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                            golf = _closure3_slot0;
                            zulu = golf.chatManager;
                            mike = zulu.setup;
                            options = _closure4_slot9;
                            mike = mike.bind(zulu)(options);
                            tango = golf.rowGenerator;
                            zulu = tango.setOptions;
                            mike = {};
                            report = _closure4_slot14;
                            mike['inlineAttachmentMedia'] = report;
                            report = _closure4_slot15;
                            mike['inlineEmbedMedia'] = report;
                            report = _closure4_slot16;
                            mike['renderEmbeds'] = report;
                            report = _closure4_slot17;
                            mike['renderReactions'] = report;
                            mike['renderShortcuts'] = report;
                            report = _closure4_slot18;
                            mike['renderInlineForwardButton'] = report;
                            report = _closure4_slot19;
                            mike['animateEmoji'] = report;
                            report = golf.animatingStickerMessageId;
                            mike['animatingStickerMessageId'] = report;
                            report = golf.props;
                            report = report.containerWidth;
                            mike['constrainedWidth'] = report;
                            report = _closure4_slot20;
                            mike['gifAutoPlay'] = report;
                            report = _closure4_slot23;
                            mike['renderCommunicationDisabled'] = report;
                            report = _closure4_slot5;
                            mike['ignoreEmbedDescriptionCache'] = report;
                            report = _closure4_slot26;
                            mike['enableSwipeActions'] = report;
                            report = _closure4_slot28;
                            mike['shouldObscureSpoiler'] = report;
                            report = _closure4_slot29;
                            mike['shouldDisableInteractiveComponents'] = report;
                            report = _closure4_slot30;
                            mike['shouldFilterKeywords'] = report;
                            mike = zulu.bind(tango)(mike);
                            zulu = _closure1_slot76;
                            tango = _closure1_slot1;
                            report = _closure1_slot2;
                            mike = 80;
                            mike = report[mike];
                            report = undefined;
                            tango = tango.bind(report)(mike);
                            mike = {};
                            verify = _closure4_slot8;
                            mike['channel'] = verify;
                            mike['messages'] = options;
                            options = _closure4_slot10;
                            mike['uploads'] = options;
                            options = _closure4_slot12;
                            mike['oldestUnreadMessageId'] = options;
                            options = _closure4_slot13;
                            mike['replyingMessageId'] = options;
                            options = _closure4_slot22;
                            mike['currentUserId'] = options;
                            options = _closure4_slot21;
                            mike['useReducedMotion'] = options;
                            options = golf.canAddNewReactions;
                            options = options.bind(golf)();
                            mike['canAddNewReactions'] = options;
                            options = _closure4_slot24;
                            mike['selectedSummary'] = options;
                            options = golf.chatManager;
                            mike['chatManager'] = options;
                            options = _closure4_slot11;
                            mike['roleStyle'] = options;
                            options = golf._loaded;
                            mike['loaded'] = options;
                            golf = golf.animated;
                            mike['animated'] = golf;
                            golf = _closure4_slot0;
                            mike['forced'] = golf;
                            golf = _closure4_slot1;
                            mike['updateMessageIds'] = golf;
                            golf = _closure4_slot2;
                            mike['scrollToMessageId'] = golf;
                            golf = _closure4_slot3;
                            mike['jumpTargetId'] = golf;
                            golf = _closure4_slot7;
                            mike['overrideJumpType'] = golf;
                            golf = _closure4_slot4;
                            mike['focusTargetId'] = golf;
                            golf = _closure4_slot25;
                            mike['theme'] = golf;
                            golf = _closure4_slot27;
                            mike['isResourceChannel'] = golf;
                            golf = _closure4_slot6;
                            mike['messagesNewlyLoaded'] = golf;
                            golf = _closure4_slot31;
                            mike['fromICYMITab'] = golf;
                            oscar = _closure4_slot32;
                            mike['unloadableContentEntryMessageIds'] = oscar;
                            mike = tango.bind(report)(mike);
                            tango = zulu.bind(report)(mike);
                            zulu = tango.bind(report)();
                            mike = zulu.done;
                            if(mike) { _fun00068_ip = 533; continue _fun00067 }
 475:
                            options = zulu.value;
                            mike = _closure3_slot0;
                            golf = mike.rowGenerator;
                            oscar = golf.generate;
                            golf = oscar.bind(golf)(options);
                            oscar = mike.chatManager;
                            mike = oscar.createRow;
                            mike = mike.bind(oscar)(golf);
                            oscar = tango.bind(report)();
                            mike = oscar.done;
                            zulu = oscar;
                            if(!mike) { _fun00068_ip = 475; continue _fun00067 }
 533:
                            entity = _closure3_slot0;
                            mike = entity.chatManager;
                            entity = mike.createChangeset;
                            entity = entity.bind(mike)();
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike);
 426:
                    return entity;
                }
            };
            entity['createRows'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot6;
        report = {};
        entity = 'getHandlers';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                tango = entity.handlers;
                zulu = null;
                if(!(zulu == tango)) { _fun00070_ip = 85; continue _fun00069 }
 21:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 81;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                tango = zulu.MessagesHandlers;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                oscar = function() {
                    _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                        entity = {};
                        mike = _closure3_slot0;
                        tango = mike.getMessage;
                        entity['getMessage'] = tango;
                        tango = mike.props;
                        tango = tango.chatInputRef;
                        entity['chatInputRef'] = tango;
                        tango = mike.props;
                        tango = tango.channelId;
                        entity['selectedChannelId'] = tango;
                        tango = mike.props;
                        tango = tango.messages;
                        tango = tango.revealedMessageId;
                        entity['revealedMessageId'] = tango;
                        tango = mike.props;
                        tango = tango.uploads;
                        entity['uploads'] = tango;
                        tango = mike.props;
                        tango = tango.paymentsBlocked;
                        entity['paymentsBlocked'] = tango;
                        mike = mike.props;
                        oscar = mike.customHandlers;
                        tango = null;
                        golf = tango == oscar;
                        report = undefined;
                        if(golf) { _fun00072_ip = 133; continue _fun00071 }
 127:
                        report = oscar.onTransitionToChannel;
 133:
                        entity['onTransitionToChannel'] = report;
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        zulu = zulu.customHandlers;
                        tango = tango == zulu;
                        mike = undefined;
                        if(tango) { _fun00072_ip = 168; continue _fun00071 }
 162:
                        mike = zulu.onTransitionToThread;
 168:
                        entity['onTransitionToThread'] = mike;
                        return entity;
                    }
                };
                golf = zulu;
                mike = new golf[tango](oscar, report);
                mike = mike instanceof Object ? mike : zulu;
                entity['handlers'] = mike;
 85:
                entity = entity.handlers;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golf = 'componentDidMount';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                zulu = this;
                tango = zulu.maybeRescrollToMessageId;
                entity = zulu.props;
                report = entity.customHandlers;
                entity = null;
                oscar = entity == report;
                entity = undefined;
                mike = undefined;
                if(oscar) { _fun00074_ip = 41; continue _fun00073 }
 33:
                mike = report.rescrollToMessegeId;
 41:
                mike = tango.bind(zulu)(mike);
                mike = zulu.flushLayout;
                mike = mike.bind(zulu)();
                mike = zulu.recordTimings;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'recordTimings';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                mike = this;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 79;
                zulu = zulu[entity];
                entity = undefined;
                golf = tango.bind(entity)(zulu);
                oscar = golf.recordMessageRender;
                zulu = mike.props;
                report = zulu.channelId;
                zulu = mike.props;
                options = zulu.messages;
                tango = options.map;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                tango = tango.bind(options)(zulu);
                zulu = mike.props;
                zulu = zulu.messages;
                zulu = zulu.hasFetched;
                if(zulu) { _fun00076_ip = 137; continue _fun00075 }
 94:
                options = mike.props;
                options = options.messages;
                options = options.ready;
                if(!options) { _fun00076_ip = 134; continue _fun00075 }
 114:
                verify = mike.props;
                verify = verify.messages;
                verify = verify.cached;
                options = !verify;
 134:
                zulu = options;
 137:
                mike = mike.props;
                mike = mike.messages;
                offset = mike.hasMoreAfter;
                backup = golf;
                foxtrot = report;
                romeo = tango;
                yankee = zulu;
                mike = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'componentWillUnmount';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = false;
            mike['_isMounted'] = entity;
            entity = global;
            tango = entity.clearTimeout;
            zulu = mike._layoutTimer;
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            zulu = mike._chatUpdatesQueue;
            mike = zulu.cleanup;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'shouldComponentUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                zulu = argFoo;
                tango = this;
                mike = _closure1_slot1;
                entity = _closure1_slot2;
                options = 82;
                entity = entity[options];
                oscar = undefined;
                golf = mike.bind(oscar)(entity);
                mike = tango.state;
                entity = argBar;
                entity = golf.bind(oscar)(mike, entity);
                entity = !entity;
                if(entity) { _fun00078_ip = 142; continue _fun00077 }
 51:
                golf = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[options];
                verify = golf.bind(oscar)(mike);
                golf = tango.props;
                mike = ['interactionStates'];
                mike = verify.bind(oscar)(golf, zulu, mike);
                mike = !mike;
                if(mike) { _fun00078_ip = 139; continue _fun00077 }
 96:
                golf = _closure1_slot1;
                report = _closure1_slot2;
                report = report[options];
                report = golf.bind(oscar)(report);
                tango = tango.props;
                tango = tango.interactionStates;
                zulu = zulu.interactionStates;
                zulu = report.bind(oscar)(tango, zulu);
                mike = !zulu;
 139:
                entity = mike;
 142:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'componentDidUpdate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                tango = argFoo;
                zulu = this;
                var _closure3_slot0 = zulu;
                var _closure3_slot1 = tango;
                entity = zulu._isMounted;
                foxtrot = null;
                if(!(foxtrot == entity)) { _fun00080_ip = 38; continue _fun00079 }
 28:
                entity = zulu.flushLayout;
                entity = entity.bind(zulu)();
 38:
                entity = zulu.props;
                entity = entity.currentUserId;
                if(!(foxtrot != entity)) { _fun00080_ip = 3137; continue _fun00079 }
 56:
                entity = zulu.props;
                entity = entity.messages;
                report = tango.messages;
                golf = tango.channelId;
                oscar = zulu.props;
                oscar = oscar.channelId;
                if(!(golf !== oscar)) { _fun00080_ip = 148; continue _fun00079 }
 92:
                oscar = zulu.clearRows;
                oscar = oscar.bind(zulu)();
                options = _closure1_slot1;
                golf = _closure1_slot2;
                oscar = 83;
                golf = golf[oscar];
                oscar = undefined;
                options = options.bind(oscar)(golf);
                golf = options.clearChannelDimensions;
                oscar = zulu.props;
                oscar = oscar.channelId;
                oscar = golf.bind(options)(oscar);
 148:
                oscar = tango.isMessagesAckable;
                oscar = !oscar;
                if(!oscar) { _fun00080_ip = 171; continue _fun00079 }
 160:
                golf = zulu.props;
                oscar = golf.isMessagesAckable;
 171:
                if(!oscar) { _fun00080_ip = 182; continue _fun00079 }
 174:
                oscar = false;
                zulu['hasHandledScroll'] = oscar;
 182:
                oscar = zulu.shouldJumpToOriginalPost;
                oscar = oscar.bind(zulu)();
                if(!oscar) { _fun00080_ip = 244; continue _fun00079 }
 195:
                golf = zulu.scrollToTop;
                oscar = false;
                oscar = golf.bind(zulu)(oscar);
                report = report.jumpSequenceId;
                entity = entity.jumpSequenceId;
                if(!(report === entity)) { _fun00080_ip = 244; continue _fun00079 }
 224:
                report = zulu.setState;
                entity = {};
                oscar = true;
                entity['hasJumpedToOriginalPost'] = oscar;
                entity = report.bind(zulu)(entity);
 244:
                entity = zulu.props;
                romeo = entity.isMessagesReady;
                if(!romeo) { _fun00080_ip = 272; continue _fun00079 }
 258:
                entity = zulu.props;
                entity = entity.isMessagesCached;
                romeo = !entity;
 272:
                if(!romeo) { _fun00080_ip = 281; continue _fun00079 }
 275:
                romeo = tango.isMessagesCached;
 281:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                entity = 84;
                report = report[entity];
                entity = undefined;
                golf = oscar.bind(entity)(report);
                oscar = zulu.props;
                report = {};
                options = zulu.isAtBottom;
                report['isAtBottom'] = options;
                verify = zulu.chatManager;
                options = verify.getPreviousMessages;
                options = options.bind(verify)();
                options = foxtrot != options;
                report['hasPreviousMessages'] = options;
                report = golf.bind(entity)(oscar, report, tango);
                yankee = report.scrollToMessageId;
                offset = report.jumpTargetId;
                verify = report.jumpType;
                options = report.minimizeScrolling;
                golf = report.focusTargetId;
                oscar = tango.inlineAttachmentMedia;
                report = zulu.props;
                report = report.inlineAttachmentMedia;
                oscar = oscar !== report;
                if(oscar) { _fun00080_ip = 433; continue _fun00079 }
 412:
                kilo = tango.inlineEmbedMedia;
                report = zulu.props;
                report = report.inlineEmbedMedia;
                oscar = kilo !== report;
 433:
                if(oscar) { _fun00080_ip = 457; continue _fun00079 }
 436:
                kilo = tango.renderEmbeds;
                report = zulu.props;
                report = report.renderEmbeds;
                oscar = kilo !== report;
 457:
                if(oscar) { _fun00080_ip = 481; continue _fun00079 }
 460:
                kilo = tango.renderReactions;
                report = zulu.props;
                report = report.renderReactions;
                oscar = kilo !== report;
 481:
                if(oscar) { _fun00080_ip = 505; continue _fun00079 }
 484:
                kilo = tango.animateEmoji;
                report = zulu.props;
                report = report.animateEmoji;
                oscar = kilo !== report;
 505:
                if(oscar) { _fun00080_ip = 529; continue _fun00079 }
 508:
                kilo = tango.animateStickers;
                report = zulu.props;
                report = report.animateStickers;
                oscar = kilo !== report;
 529:
                if(oscar) { _fun00080_ip = 553; continue _fun00079 }
 532:
                kilo = tango.gifAutoPlay;
                report = zulu.props;
                report = report.gifAutoPlay;
                oscar = kilo !== report;
 553:
                if(oscar) { _fun00080_ip = 577; continue _fun00079 }
 556:
                kilo = tango.containerWidth;
                report = zulu.props;
                report = report.containerWidth;
                oscar = kilo !== report;
 577:
                if(oscar) { _fun00080_ip = 601; continue _fun00079 }
 580:
                kilo = tango.guildSystemChannelFlags;
                report = zulu.props;
                report = report.guildSystemChannelFlags;
                oscar = kilo !== report;
 601:
                if(oscar) { _fun00080_ip = 625; continue _fun00079 }
 604:
                kilo = tango.userSettingsLocale;
                report = zulu.props;
                report = report.userSettingsLocale;
                oscar = kilo !== report;
 625:
                if(oscar) { _fun00080_ip = 649; continue _fun00079 }
 628:
                kilo = tango.roleStyle;
                report = zulu.props;
                report = report.roleStyle;
                oscar = kilo !== report;
 649:
                if(oscar) { _fun00080_ip = 673; continue _fun00079 }
 652:
                kilo = tango.canSendMessages;
                report = zulu.props;
                report = report.canSendMessages;
                oscar = kilo !== report;
 673:
                if(oscar) { _fun00080_ip = 697; continue _fun00079 }
 676:
                kilo = tango.showPushFeedback;
                report = zulu.props;
                report = report.showPushFeedback;
                oscar = kilo !== report;
 697:
                if(oscar) { _fun00080_ip = 721; continue _fun00079 }
 700:
                kilo = tango.selectedSummary;
                report = zulu.props;
                report = report.selectedSummary;
                oscar = kilo !== report;
 721:
                if(oscar) { _fun00080_ip = 745; continue _fun00079 }
 724:
                kilo = tango.shouldObscureSpoiler;
                report = zulu.props;
                report = report.shouldObscureSpoiler;
                oscar = kilo !== report;
 745:
                if(oscar) { _fun00080_ip = 769; continue _fun00079 }
 748:
                kilo = tango.shouldFilterKeywords;
                report = zulu.props;
                report = report.shouldFilterKeywords;
                oscar = kilo !== report;
 769:
                if(oscar) { _fun00080_ip = 793; continue _fun00079 }
 772:
                kilo = tango.explicitMediaFalsePositiveInfo;
                report = zulu.props;
                report = report.explicitMediaFalsePositiveInfo;
                oscar = kilo !== report;
 793:
                if(oscar) { _fun00080_ip = 817; continue _fun00079 }
 796:
                kilo = tango.renderInlineForwardButton;
                report = zulu.props;
                report = report.renderInlineForwardButton;
                oscar = kilo !== report;
 817:
                if(oscar) { _fun00080_ip = 841; continue _fun00079 }
 820:
                kilo = tango.isStaff;
                report = zulu.props;
                report = report.isStaff;
                oscar = kilo !== report;
 841:
                if(oscar) { _fun00080_ip = 865; continue _fun00079 }
 844:
                kilo = tango.messageShortcutsEnabled;
                report = zulu.props;
                report = report.messageShortcutsEnabled;
                oscar = kilo !== report;
 865:
                if(oscar) { _fun00080_ip = 909; continue _fun00079 }
 868:
                report = argBar;
                kilo = report.shouldForceRender;
                report = zulu.state;
                report = report.shouldForceRender;
                report = kilo !== report;
                if(!report) { _fun00080_ip = 906; continue _fun00079 }
 895:
                kilo = zulu.state;
                report = kilo.shouldForceRender;
 906:
                oscar = report;
 909:
                kilo = tango.resolvingGiftCodes;
                report = zulu.props;
                report = report.resolvingGiftCodes;
                target = kilo !== report;
                if(target) { _fun00080_ip = 954; continue _fun00079 }
 933:
                kilo = tango.resolvedGiftCodes;
                report = zulu.props;
                report = report.resolvedGiftCodes;
                target = kilo !== report;
 954:
                if(target) { _fun00080_ip = 978; continue _fun00079 }
 957:
                kilo = tango.acceptingGiftCodes;
                report = zulu.props;
                report = report.acceptingGiftCodes;
                target = kilo !== report;
 978:
                var _closure3_slot2 = target;
                papa = tango.uploads;
                report = zulu.props;
                context = report.uploads;
                kilo = _closure1_slot1;
                report = _closure1_slot2;
                sierra = 82;
                report = report[sierra];
                sizing = kilo.bind(entity)(report);
                kilo = tango.interactionStates;
                report = zulu.props;
                report = report.interactionStates;
                report = sizing.bind(entity)(kilo, report);
                update = !report;
                var _closure3_slot3 = update;
                kilo = tango.channelPolls;
                report = zulu.props;
                report = report.channelPolls;
                output = kilo !== report;
                var _closure3_slot4 = output;
                kilo = tango.interactionComponentStatesVersion;
                report = zulu.props;
                report = report.interactionComponentStatesVersion;
                echo = kilo !== report;
                var _closure3_slot5 = echo;
                kilo = tango.shouldDisableInteractiveComponents;
                report = zulu.props;
                report = report.shouldDisableInteractiveComponents;
                report = kilo !== report;
                var _closure3_slot6 = report;
                kilo = tango.communicationDisabledVersion;
                report = zulu.props;
                report = report.communicationDisabledVersion;
                config = kilo !== report;
                var _closure3_slot7 = config;
                kilo = tango.failedMessagesVersion;
                report = zulu.props;
                report = report.failedMessagesVersion;
                sequence = kilo !== report;
                var _closure3_slot8 = sequence;
                kilo = tango.renderCommunicationDisabled;
                report = zulu.props;
                report = report.renderCommunicationDisabled;
                source = kilo !== report;
                var _closure3_slot9 = source;
                vacuum = tango.forwardGuildsVersion;
                report = zulu.props;
                control = report.forwardGuildsVersion;
                report = zulu.props;
                kilo = report.channel;
                report = kilo.isForumPost;
                result = report.bind(kilo)();
                if(!result) { _fun00080_ip = 1260; continue _fun00079 }
 1239:
                kilo = tango.isFollowingForumPost;
                report = zulu.props;
                report = report.isFollowingForumPost;
                result = kilo !== report;
 1260:
                var _closure3_slot10 = result;
                kilo = tango.showMediaPostSharePrompt;
                report = zulu.props;
                report = report.showMediaPostSharePrompt;
                sizing = kilo !== report;
                var _closure3_slot11 = sizing;
                kilo = tango.unloadedContentEntryMessageIds;
                report = zulu.props;
                report = report.unloadedContentEntryMessageIds;
                kilo = kilo !== report;
                var _closure3_slot12 = kilo;
                record = tango.invalidApplicationIds;
                report = zulu.props;
                report = report.invalidApplicationIds;
                report = record !== report;
                var _closure3_slot13 = report;
                status = tango.activityInstanceIds;
                record = zulu.props;
                record = record.activityInstanceIds;
                record = status !== record;
                if(record) { _fun00080_ip = 1384; continue _fun00079 }
 1363:
                lima = tango.activityParticipants;
                status = zulu.props;
                status = status.activityParticipants;
                record = lima !== status;
 1384:
                if(record) { _fun00080_ip = 1408; continue _fun00079 }
 1387:
                lima = tango.applicationAssetFetchingIds;
                status = zulu.props;
                status = status.applicationAssetFetchingIds;
                record = lima !== status;
 1408:
                if(record) { _fun00080_ip = 1432; continue _fun00079 }
 1411:
                lima = tango.activityInstancePresenceDetails;
                status = zulu.props;
                status = status.activityInstancePresenceDetails;
                record = lima !== status;
 1432:
                if(record) { _fun00080_ip = 1456; continue _fun00079 }
 1435:
                lima = tango.messagesWithActivitiesLaunching;
                status = zulu.props;
                status = status.messagesWithActivitiesLaunching;
                record = lima !== status;
 1456:
                if(record) { _fun00080_ip = 1462; continue _fun00079 }
 1459:
                record = report;
 1462:
                var _closure3_slot14 = record;
                status = _closure1_slot0;
                report = _closure1_slot2;
                report = report[sierra];
                lima = status.bind(entity)(report);
                sierra = lima.areArraysShallowEqual;
                status = tango.resolvedReferralTrialOfferIds;
                report = zulu.props;
                report = report.resolvedReferralTrialOfferIds;
                report = sierra.bind(lima)(status, report);
                report = !report;
                if(report) { _fun00080_ip = 1539; continue _fun00079 }
 1518:
                sierra = tango.referralTrialOfferId;
                status = zulu.props;
                status = status.referralTrialOfferId;
                report = sierra !== status;
 1539:
                if(report) { _fun00080_ip = 1563; continue _fun00079 }
 1542:
                sierra = tango.isPremiumTier2User;
                status = zulu.props;
                status = status.isPremiumTier2User;
                report = sierra !== status;
 1563:
                var _closure3_slot15 = report;
                if(oscar) { _fun00080_ip = 2501; continue _fun00079 }
 1573:
                if(target) { _fun00080_ip = 2501; continue _fun00079 }
 1579:
                if(!(papa === context)) { _fun00080_ip = 2501; continue _fun00079 }
 1586:
                if(record) { _fun00080_ip = 2501; continue _fun00079 }
 1592:
                context = tango.messages;
                record = zulu.props;
                record = record.messages;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1616:
                context = tango.editingMessageId;
                record = zulu.props;
                record = record.editingMessageId;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1640:
                context = tango.replyingMessageId;
                record = zulu.props;
                record = record.replyingMessageId;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1664:
                context = tango.voiceStateChannelId;
                record = zulu.props;
                record = record.voiceStateChannelId;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1688:
                context = tango.messageAuthorActivities;
                record = zulu.props;
                record = record.messageAuthorActivities;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1712:
                context = tango.oldestUnreadMessageId;
                record = zulu.props;
                record = record.oldestUnreadMessageId;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1736:
                context = tango.invites;
                record = zulu.props;
                record = record.invites;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1760:
                context = tango.appDirectoryEmbedApplications;
                record = zulu.props;
                record = record.appDirectoryEmbedApplications;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1784:
                context = tango.invalidAppDirectoryEmbedApplicationIds;
                record = zulu.props;
                record = record.invalidAppDirectoryEmbedApplicationIds;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1808:
                context = tango.appDirectoryEmbedApplicationFetchStates;
                record = zulu.props;
                record = record.appDirectoryEmbedApplicationFetchStates;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1832:
                context = tango.guildTemplates;
                record = zulu.props;
                record = record.guildTemplates;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1856:
                context = tango.buildOverrides;
                record = zulu.props;
                record = record.buildOverrides;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1880:
                context = tango.quests;
                record = zulu.props;
                record = record.quests;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1904:
                context = tango.isFetchingCurrentQuests;
                record = zulu.props;
                record = record.isFetchingCurrentQuests;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1928:
                context = tango.participantsLength;
                record = zulu.props;
                record = record.participantsLength;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1952:
                context = tango.isMessagesReady;
                record = zulu.props;
                record = record.isMessagesReady;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 1976:
                context = tango.channelThreadsVersion;
                record = zulu.props;
                record = record.channelThreadsVersion;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2000:
                context = tango.rsvpVersion;
                record = zulu.props;
                record = record.rsvpVersion;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2024:
                context = tango.repliedIds;
                record = zulu.props;
                record = record.repliedIds;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2048:
                context = tango.hasLoadedExperiments;
                record = zulu.props;
                record = record.hasLoadedExperiments;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2072:
                context = tango.isMessageRequest;
                record = zulu.props;
                record = record.isMessageRequest;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2096:
                context = tango.isSpamMessageRequest;
                record = zulu.props;
                record = record.isSpamMessageRequest;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2120:
                context = tango.currentUserCommunicationDisabled;
                record = zulu.props;
                record = record.currentUserCommunicationDisabled;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2144:
                context = tango.userSettingsLocale;
                record = zulu.props;
                record = record.userSettingsLocale;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2168:
                context = tango.selectedSummary;
                record = zulu.props;
                record = record.selectedSummary;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2192:
                context = tango.showPushFeedback;
                record = zulu.props;
                record = record.showPushFeedback;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2216:
                context = tango.cacheStoreLoaded;
                record = zulu.props;
                record = record.cacheStoreLoaded;
                if(!(context === record)) { _fun00080_ip = 2501; continue _fun00079 }
 2240:
                if(config) { _fun00080_ip = 2501; continue _fun00079 }
 2246:
                if(sequence) { _fun00080_ip = 2501; continue _fun00079 }
 2252:
                if(!(vacuum === control)) { _fun00080_ip = 2501; continue _fun00079 }
 2259:
                if(source) { _fun00080_ip = 2501; continue _fun00079 }
 2265:
                if(update) { _fun00080_ip = 2501; continue _fun00079 }
 2271:
                if(echo) { _fun00080_ip = 2501; continue _fun00079 }
 2277:
                if(result) { _fun00080_ip = 2501; continue _fun00079 }
 2283:
                if(!(foxtrot == offset)) { _fun00080_ip = 2501; continue _fun00079 }
 2290:
                if(!(foxtrot == golf)) { _fun00080_ip = 2501; continue _fun00079 }
 2297:
                echo = tango.androidKeyboardHeight;
                result = zulu.props;
                result = result.androidKeyboardHeight;
                if(!(echo === result)) { _fun00080_ip = 2501; continue _fun00079 }
 2321:
                echo = tango.mediaPostPreviewEmbeds;
                result = zulu.props;
                result = result.mediaPostPreviewEmbeds;
                if(!(echo === result)) { _fun00080_ip = 2501; continue _fun00079 }
 2345:
                echo = tango.shouldObscureSpoiler;
                result = zulu.props;
                result = result.shouldObscureSpoiler;
                if(!(echo === result)) { _fun00080_ip = 2501; continue _fun00079 }
 2369:
                echo = tango.shouldFilterKeywords;
                result = zulu.props;
                result = result.shouldFilterKeywords;
                if(!(echo === result)) { _fun00080_ip = 2501; continue _fun00079 }
 2390:
                echo = tango.shouldDisableInteractiveComponents;
                result = zulu.props;
                result = result.shouldDisableInteractiveComponents;
                if(!(echo === result)) { _fun00080_ip = 2501; continue _fun00079 }
 2411:
                if(output) { _fun00080_ip = 2501; continue _fun00079 }
 2414:
                if(sizing) { _fun00080_ip = 2501; continue _fun00079 }
 2417:
                output = tango.threadStartingReferenceMessage;
                sizing = zulu.props;
                sizing = sizing.threadStartingReferenceMessage;
                if(!(output === sizing)) { _fun00080_ip = 2501; continue _fun00079 }
 2438:
                output = tango.renderForwardBreadcrumb;
                sizing = zulu.props;
                sizing = sizing.renderForwardBreadcrumb;
                if(!(output === sizing)) { _fun00080_ip = 2501; continue _fun00079 }
 2459:
                if(kilo) { _fun00080_ip = 2501; continue _fun00079 }
 2462:
                sizing = tango.applications;
                kilo = zulu.props;
                kilo = kilo.applications;
                if(!(sizing === kilo)) { _fun00080_ip = 2501; continue _fun00079 }
 2483:
                if(report) { _fun00080_ip = 2501; continue _fun00079 }
 2486:
                report = zulu.recordTimings;
                report = report.bind(zulu)();
                _fun00080_ip = 3137; continue _fun00079;
 2501:
                kilo = zulu._isMounted;
                report = true;
                if(!(report === kilo)) { _fun00080_ip = 3141; continue _fun00079 }
 2516:
                report = global;
                report = report.Set;
                kilo = report.prototype;
                kilo = Object.create(kilo, {constructor: {value: report}});
                variable42 = kilo;
                report = new variable42[report](variable41);
                report = report instanceof Object ? report : kilo;
                var _closure3_slot16 = report;
                sizing = tango.editingMessageId;
                kilo = zulu.props;
                kilo = kilo.editingMessageId;
                if(!(sizing !== kilo)) { _fun00080_ip = 2631; continue _fun00079 }
 2569:
                kilo = zulu.props;
                kilo = kilo.editingMessageId;
                if(!(foxtrot != kilo)) { _fun00080_ip = 2605; continue _fun00079 }
 2584:
                sizing = report.add;
                kilo = zulu.props;
                kilo = kilo.editingMessageId;
                kilo = sizing.bind(report)(kilo);
 2605:
                kilo = tango.editingMessageId;
                if(!(foxtrot != kilo)) { _fun00080_ip = 2631; continue _fun00079 }
 2615:
                sizing = report.add;
                kilo = tango.editingMessageId;
                kilo = sizing.bind(report)(kilo);
 2631:
                sizing = tango.replyingMessageId;
                kilo = zulu.props;
                kilo = kilo.replyingMessageId;
                if(!(sizing !== kilo)) { _fun00080_ip = 2714; continue _fun00079 }
 2652:
                kilo = zulu.props;
                kilo = kilo.replyingMessageId;
                if(!(foxtrot != kilo)) { _fun00080_ip = 2688; continue _fun00079 }
 2667:
                sizing = report.add;
                kilo = zulu.props;
                kilo = kilo.replyingMessageId;
                kilo = sizing.bind(report)(kilo);
 2688:
                kilo = tango.replyingMessageId;
                if(!(foxtrot != kilo)) { _fun00080_ip = 2714; continue _fun00079 }
 2698:
                sizing = report.add;
                kilo = tango.replyingMessageId;
                kilo = sizing.bind(report)(kilo);
 2714:
                sizing = tango.isMessagesReady;
                kilo = zulu.props;
                kilo = kilo.isMessagesReady;
                if(!(sizing === kilo)) { _fun00080_ip = 2798; continue _fun00079 }
 2735:
                sizing = tango.isCallActive;
                kilo = zulu.props;
                kilo = kilo.isCallActive;
                if(!(sizing === kilo)) { _fun00080_ip = 2798; continue _fun00079 }
 2756:
                sizing = tango.voiceStateChannelId;
                kilo = zulu.props;
                kilo = kilo.voiceStateChannelId;
                if(!(sizing === kilo)) { _fun00080_ip = 2798; continue _fun00079 }
 2777:
                sizing = tango.participantsLength;
                kilo = zulu.props;
                kilo = kilo.participantsLength;
                if(!(sizing !== kilo)) { _fun00080_ip = 2886; continue _fun00079 }
 2798:
                kilo = _closure1_slot1;
                sizing = _closure1_slot2;
                backup = 62;
                backup = sizing[backup];
                output = kilo.bind(entity)(backup);
                sizing = output.find;
                backup = zulu.props;
                kilo = backup.messages;
                backup = kilo.toArray;
                kilo = backup.bind(kilo)();
                backup = kilo.reverse;
                kilo = backup.bind(kilo)();
                backup = function(argFoo) {
                    entity = argFoo;
                    mike = entity.type;
                    entity = _closure1_slot64;
                    entity = entity.CALL;
                    entity = mike === entity;
                    return entity;
                };
                backup = sizing.bind(output)(kilo, backup);
                if(!(foxtrot != backup)) { _fun00080_ip = 2886; continue _fun00079 }
 2871:
                kilo = report.add;
                backup = backup.id;
                backup = kilo.bind(report)(backup);
 2886:
                kilo = tango.channelThreadsVersion;
                backup = zulu.props;
                backup = backup.channelThreadsVersion;
                backup = kilo !== backup;
                var _closure3_slot17 = backup;
                kilo = tango.rsvpVersion;
                backup = zulu.props;
                backup = backup.rsvpVersion;
                backup = kilo !== backup;
                var _closure3_slot18 = backup;
                kilo = tango.repliedIds;
                backup = zulu.props;
                backup = backup.repliedIds;
                backup = kilo !== backup;
                var _closure3_slot19 = backup;
                kilo = tango.hasLoadedExperiments;
                backup = zulu.props;
                backup = backup.hasLoadedExperiments;
                backup = kilo !== backup;
                var _closure3_slot20 = backup;
                backup = tango.communicationDisabledVersion;
                kilo = foxtrot != backup;
                foxtrot = -1;
                if(!kilo) { _fun00080_ip = 3008; continue _fun00079 }
 3005:
                foxtrot = backup;
 3008:
                var _closure3_slot21 = foxtrot;
                tango = tango.cacheStoreLoaded;
                tango = !tango;
                if(!tango) { _fun00080_ip = 3035; continue _fun00079 }
 3024:
                foxtrot = zulu.props;
                tango = foxtrot.cacheStoreLoaded;
 3035:
                var _closure3_slot22 = tango;
                foxtrot = zulu.props;
                backup = foxtrot.messages;
                foxtrot = backup.forEach;
                mike = function(argFoo) {
                    _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                        entity = argFoo;
                        zulu = _closure3_slot20;
                        if(!zulu) { _fun00082_ip = 38; continue _fun00081 }
 13:
                        tango = entity.type;
                        zulu = _closure1_slot64;
                        zulu = zulu.USER_JOIN;
                        if(!(tango !== zulu)) { _fun00082_ip = 1500; continue _fun00081 }
 38:
                        zulu = _closure3_slot19;
                        if(!zulu) { _fun00082_ip = 116; continue _fun00081 }
 45:
                        tango = entity.type;
                        zulu = _closure1_slot64;
                        zulu = zulu.REPLY;
                        if(!(tango === zulu)) { _fun00082_ip = 116; continue _fun00081 }
 67:
                        zulu = entity.messageReference;
                        tango = null;
                        if(!(tango != zulu)) { _fun00082_ip = 116; continue _fun00081 }
 79:
                        tango = _closure3_slot0;
                        tango = tango.props;
                        report = tango.repliedIds;
                        tango = report.has;
                        zulu = zulu.message_id;
                        zulu = tango.bind(report)(zulu);
                        if(zulu) { _fun00082_ip = 1477; continue _fun00081 }
 116:
                        zulu = _closure3_slot17;
                        if(!zulu) { _fun00082_ip = 153; continue _fun00081 }
 123:
                        tango = entity.hasFlag;
                        zulu = _closure1_slot63;
                        zulu = zulu.HAS_THREAD;
                        zulu = tango.bind(entity)(zulu);
                        if(zulu) { _fun00082_ip = 1456; continue _fun00081 }
 153:
                        zulu = _closure3_slot18;
                        if(!zulu) { _fun00082_ip = 180; continue _fun00081 }
 160:
                        zulu = entity.codedLinks;
                        tango = zulu.length;
                        zulu = 0;
                        if(!(!(tango > zulu))) { _fun00082_ip = 1435; continue _fun00081 }
 180:
                        zulu = _closure3_slot9;
                        if(zulu) { _fun00082_ip = 1414; continue _fun00081 }
 190:
                        zulu = _closure3_slot7;
                        if(!zulu) { _fun00082_ip = 268; continue _fun00081 }
 197:
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        tango = zulu.guildId;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00082_ip = 268; continue _fun00081 }
 217:
                        oscar = _closure1_slot45;
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        report = zulu.guildId;
                        zulu = entity.author;
                        tango = zulu.id;
                        zulu = undefined;
                        tango = oscar.bind(zulu)(report, tango);
                        zulu = _closure3_slot21;
                        if(!(!(tango > zulu))) { _fun00082_ip = 1414; continue _fun00081 }
 268:
                        zulu = _closure3_slot8;
                        if(!zulu) { _fun00082_ip = 308; continue _fun00081 }
 275:
                        zulu = entity.author;
                        tango = zulu.id;
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        zulu = zulu.currentUserId;
                        if(!(tango !== zulu)) { _fun00082_ip = 1393; continue _fun00081 }
 308:
                        zulu = _closure3_slot3;
                        if(!zulu) { _fun00082_ip = 365; continue _fun00081 }
 315:
                        zulu = _closure3_slot1;
                        tango = zulu.interactionStates;
                        zulu = entity.id;
                        tango = tango[zulu];
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        report = zulu.interactionStates;
                        zulu = entity.id;
                        zulu = report[zulu];
                        if(!(tango === zulu)) { _fun00082_ip = 1369; continue _fun00081 }
 365:
                        zulu = _closure3_slot5;
                        if(!zulu) { _fun00082_ip = 434; continue _fun00081 }
 372:
                        zulu = _closure3_slot1;
                        report = zulu.interactionComponentStates;
                        tango = report.get;
                        zulu = entity.id;
                        tango = tango.bind(report)(zulu);
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        oscar = zulu.interactionComponentStates;
                        report = oscar.get;
                        zulu = entity.id;
                        zulu = report.bind(oscar)(zulu);
                        if(!(tango === zulu)) { _fun00082_ip = 1345; continue _fun00081 }
 434:
                        zulu = _closure3_slot6;
                        if(!zulu) { _fun00082_ip = 461; continue _fun00081 }
 441:
                        zulu = entity.components;
                        tango = zulu.length;
                        zulu = 0;
                        if(!(zulu === tango)) { _fun00082_ip = 1321; continue _fun00081 }
 461:
                        zulu = _closure3_slot4;
                        if(!zulu) { _fun00082_ip = 518; continue _fun00081 }
 468:
                        zulu = _closure3_slot1;
                        tango = zulu.channelPolls;
                        zulu = entity.id;
                        tango = tango[zulu];
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        report = zulu.channelPolls;
                        zulu = entity.id;
                        zulu = report[zulu];
                        if(!(tango === zulu)) { _fun00082_ip = 1297; continue _fun00081 }
 518:
                        zulu = _closure3_slot12;
                        if(!zulu) { _fun00082_ip = 587; continue _fun00081 }
 525:
                        zulu = _closure3_slot1;
                        report = zulu.unloadedContentEntryMessageIds;
                        tango = report.has;
                        zulu = entity.id;
                        tango = tango.bind(report)(zulu);
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        oscar = zulu.unloadedContentEntryMessageIds;
                        report = oscar.has;
                        zulu = entity.id;
                        zulu = report.bind(oscar)(zulu);
                        if(!(tango === zulu)) { _fun00082_ip = 1273; continue _fun00081 }
 587:
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        tango = zulu.channel;
                        zulu = tango.isForumPost;
                        zulu = zulu.bind(tango)();
                        if(!zulu) { _fun00082_ip = 690; continue _fun00081 }
 614:
                        zulu = _closure3_slot10;
                        if(zulu) { _fun00082_ip = 628; continue _fun00081 }
 621:
                        zulu = _closure3_slot11;
                        if(!zulu) { _fun00082_ip = 690; continue _fun00081 }
 628:
                        tango = entity.id;
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 63;
                        report = report[zulu];
                        zulu = undefined;
                        oscar = oscar.bind(zulu)(report);
                        report = oscar.castChannelIdAsMessageId;
                        zulu = _closure3_slot0;
                        zulu = zulu.props;
                        zulu = zulu.channelId;
                        zulu = report.bind(oscar)(zulu);
                        if(!(tango !== zulu)) { _fun00082_ip = 1249; continue _fun00081 }
 690:
                        zulu = _closure3_slot14;
                        if(!zulu) { _fun00082_ip = 712; continue _fun00081 }
 697:
                        tango = entity.activityInstance;
                        zulu = null;
                        if(!(zulu == tango)) { _fun00082_ip = 1225; continue _fun00081 }
 712:
                        tango = entity.author;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00082_ip = 1519; continue _fun00081 }
 727:
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        options = 85;
                        report = report[options];
                        golf = undefined;
                        offset = oscar.bind(golf)(report);
                        verify = offset.messageAuthorActivitiesChanged;
                        oscar = _closure3_slot1;
                        report = _closure3_slot0;
                        report = report.props;
                        report = verify.bind(offset)(entity, oscar, report);
                        if(report) { _fun00082_ip = 1201; continue _fun00081 }
 784:
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        report = report[options];
                        offset = oscar.bind(golf)(report);
                        verify = offset.codedLinksChanged;
                        oscar = _closure3_slot1;
                        report = _closure3_slot0;
                        report = report.props;
                        report = verify.bind(offset)(entity, oscar, report);
                        if(report) { _fun00082_ip = 1201; continue _fun00081 }
 833:
                        report = _closure3_slot2;
                        if(!report) { _fun00082_ip = 889; continue _fun00081 }
 840:
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        report = report[options];
                        offset = oscar.bind(golf)(report);
                        verify = offset.giftCodesChanged;
                        oscar = _closure3_slot1;
                        report = _closure3_slot0;
                        report = report.props;
                        report = verify.bind(offset)(entity, oscar, report);
                        if(report) { _fun00082_ip = 1201; continue _fun00081 }
 889:
                        oscar = _closure1_slot1;
                        report = _closure1_slot2;
                        report = report[options];
                        options = oscar.bind(golf)(report);
                        golf = options.mediaPostPreviewEmbedsChanged;
                        oscar = _closure3_slot1;
                        report = _closure3_slot0;
                        report = report.props;
                        report = golf.bind(options)(entity, oscar, report);
                        if(report) { _fun00082_ip = 1201; continue _fun00081 }
 938:
                        report = _closure3_slot22;
                        if(!report) { _fun00082_ip = 962; continue _fun00081 }
 945:
                        oscar = entity.embeds;
                        golf = oscar.length;
                        oscar = 0;
                        report = golf > oscar;
 962:
                        if(!report) { _fun00082_ip = 984; continue _fun00081 }
 965:
                        golf = _closure3_slot16;
                        oscar = golf.add;
                        report = entity.id;
                        report = oscar.bind(golf)(report);
 984:
                        report = entity.type;
                        tango = _closure1_slot64;
                        tango = tango.THREAD_STARTER_MESSAGE;
                        tango = report === tango;
                        if(!tango) { _fun00082_ip = 1035; continue _fun00081 }
 1006:
                        report = _closure3_slot1;
                        oscar = report.threadStartingReferenceMessage;
                        report = _closure3_slot0;
                        report = report.props;
                        report = report.threadStartingReferenceMessage;
                        tango = oscar !== report;
 1035:
                        if(!tango) { _fun00082_ip = 1057; continue _fun00081 }
 1038:
                        oscar = _closure3_slot16;
                        report = oscar.add;
                        tango = entity.id;
                        tango = report.bind(oscar)(tango);
 1057:
                        tango = _closure3_slot13;
                        if(!tango) { _fun00082_ip = 1073; continue _fun00081 }
 1064:
                        report = entity.applicationId;
                        tango = zulu != report;
 1073:
                        if(!tango) { _fun00082_ip = 1101; continue _fun00081 }
 1076:
                        report = _closure3_slot1;
                        golf = report.invalidApplicationIds;
                        oscar = golf.includes;
                        report = entity.applicationId;
                        tango = oscar.bind(golf)(report);
 1101:
                        if(!tango) { _fun00082_ip = 1123; continue _fun00081 }
 1104:
                        oscar = _closure3_slot16;
                        report = oscar.add;
                        tango = entity.id;
                        tango = report.bind(oscar)(tango);
 1123:
                        tango = _closure3_slot15;
                        if(!tango) { _fun00082_ip = 1519; continue _fun00081 }
 1133:
                        oscar = entity.referralTrialOfferId;
                        zulu = zulu != oscar;
                        if(!zulu) { _fun00082_ip = 1171; continue _fun00081 }
 1146:
                        tango = _closure3_slot0;
                        tango = tango.props;
                        report = tango.resolvedReferralTrialOfferIds;
                        tango = report.includes;
                        zulu = tango.bind(report)(oscar);
 1171:
                        if(!zulu) { _fun00082_ip = 1519; continue _fun00081 }
 1177:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1201:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1225:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1249:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1273:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1297:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1321:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1345:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1369:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1393:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1414:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1435:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1456:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        _fun00082_ip = 1519; continue _fun00081;
 1477:
                        report = _closure3_slot16;
                        tango = report.add;
                        zulu = entity.id;
                        zulu = tango.bind(report)(zulu);
                        zulu = undefined;
                        return zulu;
 1500:
                        zulu = _closure3_slot16;
                        mike = zulu.add;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
 1519:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = foxtrot.bind(backup)(mike);
                mike = zulu.updateRows;
                variable42 = zulu;
                variable41 = oscar;
                variable40 = report;
                variable39 = yankee;
                variable38 = offset;
                variable37 = verify;
                variable36 = golf;
                quebec = tango;
                equality = romeo;
                whiskey = options;
                mike = variable42[mike](variable41, variable40, variable39, variable38, variable37, variable36, quebec, equality, whiskey, lima);
                tango = zulu.setState;
                mike = {};
                report = false;
                mike['shouldForceRender'] = report;
                mike = tango.bind(zulu)(mike);
                mike = zulu.recordTimings;
                mike = mike.bind(zulu)();
 3137:
                mike = undefined;
                return mike;
 3141:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'handleScrollCallbacks';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = zulu.isAtBottom;
                verify = zulu.isNearBottom;
                tango = undefined;
                if(!(verify === tango)) { _fun00084_ip = 26; continue _fun00083 }
 24:
                verify = false;
 26:
                yankee = zulu.isNearTop;
                if(!(yankee === tango)) { _fun00084_ip = 38; continue _fun00083 }
 36:
                yankee = false;
 38:
                romeo = zulu.dragging;
                if(!(romeo === tango)) { _fun00084_ip = 50; continue _fun00083 }
 48:
                romeo = false;
 50:
                foxtrot = zulu.decelerating;
                if(!(foxtrot === tango)) { _fun00084_ip = 62; continue _fun00083 }
 60:
                foxtrot = false;
 62:
                report = zulu.isFirstMessageVisible;
                if(!(report === tango)) { _fun00084_ip = 74; continue _fun00083 }
 72:
                report = false;
 74:
                zulu = entity.props;
                options = zulu.messages;
                oscar = zulu.channel;
                zulu = zulu.onScroll;
                golf = null;
                if(!(golf != oscar)) { _fun00084_ip = 364; continue _fun00083 }
 105:
                golf = options.length;
                offset = 0;
                if(!(offset === golf)) { _fun00084_ip = 128; continue _fun00083 }
 116:
                golf = options.loadingMore;
                if(golf) { _fun00084_ip = 364; continue _fun00083 }
 128:
                golf = options.loadingMore;
                golf = !golf;
                if(!golf) { _fun00084_ip = 149; continue _fun00083 }
 140:
                if(romeo) { _fun00084_ip = 146; continue _fun00083 }
 143:
                romeo = foxtrot;
 146:
                golf = romeo;
 149:
                if(!golf) { _fun00084_ip = 167; continue _fun00083 }
 152:
                romeo = entity.pendingUpdatesQueue;
                romeo = romeo.length;
                golf = offset === romeo;
 167:
                romeo = entity.isNearTop;
                if(romeo) { _fun00084_ip = 206; continue _fun00083 }
 176:
                if(!yankee) { _fun00084_ip = 206; continue _fun00083 }
 179:
                yankee = options.hasMoreBefore;
                if(!yankee) { _fun00084_ip = 206; continue _fun00083 }
 188:
                if(!golf) { _fun00084_ip = 206; continue _fun00083 }
 191:
                yankee = entity.loadMoreBefore;
                yankee = yankee.bind(entity)();
                _fun00084_ip = 332; continue _fun00083;
 206:
                yankee = entity.isNearBottom;
                if(yankee) { _fun00084_ip = 242; continue _fun00083 }
 215:
                if(!verify) { _fun00084_ip = 242; continue _fun00083 }
 218:
                options = options.hasMoreAfter;
                if(!options) { _fun00084_ip = 242; continue _fun00083 }
 227:
                if(!golf) { _fun00084_ip = 242; continue _fun00083 }
 230:
                golf = entity.loadMoreAfter;
                golf = golf.bind(entity)();
                _fun00084_ip = 332; continue _fun00083;
 242:
                golf = entity.isAtBottom;
                golf = golf === mike;
                if(!golf) { _fun00084_ip = 261; continue _fun00083 }
 255:
                golf = entity.hasHandledScroll;
 261:
                if(golf) { _fun00084_ip = 332; continue _fun00083 }
 264:
                options = _closure1_slot1;
                verify = _closure1_slot2;
                golf = 83;
                golf = verify[golf];
                verify = options.bind(tango)(golf);
                options = verify.updateChannelDimensions;
                golf = oscar.id;
                oscar = 0;
                if(!mike) { _fun00084_ip = 306; continue _fun00083 }
 303:
                oscar = 1;
 306:
                sizing = 1;
                echo = verify;
                result = golf;
                output = oscar;
                kilo = 0;
                mike = echo[options](result, output, sizing, kilo, backup);
                mike = true;
                entity['hasHandledScroll'] = mike;
 332:
                mike = {};
                mike['isFirstMessageVisible'] = report;
                mike = zulu.bind(tango)(mike);
                mike = entity._chatUpdatesQueue;
                entity = mike.tryFlush;
                entity = entity.bind(mike)();
                entity = true;
                return entity;
 364:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getVisibleMessages';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                zulu = argFoo;
                mike = this;
                backup = zulu.firstVisibleMessageIndex;
                foxtrot = zulu.lastVisibleMessageIndex;
                romeo = zulu.firstVisibleMessagePercentVisible;
                yankee = zulu.lastVisibleMessagePercentVisible;
                offset = undefined;
                var _closure3_slot0 = offset;
                verify = null;
                if(!(verify != backup)) { _fun00086_ip = 351; continue _fun00085 }
 47:
                if(!(verify != foxtrot)) { _fun00086_ip = 351; continue _fun00085 }
 54:
                zulu = 0;
                if(!(!(backup < zulu))) { _fun00086_ip = 351; continue _fun00085 }
 63:
                if(!(!(foxtrot < zulu))) { _fun00086_ip = 351; continue _fun00085 }
 70:
                zulu = mike.chatManager;
                zulu = zulu._rows;
                if(!(verify != zulu)) { _fun00086_ip = 351; continue _fun00085 }
 89:
                zulu = mike.chatManager;
                zulu = zulu._messages;
                if(!(verify != zulu)) { _fun00086_ip = 351; continue _fun00085 }
 108:
                zulu = global;
                zulu = zulu.Map;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                vacuum = tango;
                zulu = new vacuum[zulu](control);
                options = zulu instanceof Object ? zulu : tango;
                _closure3_slot0 = options;
                kilo = backup >= foxtrot;
                golf = 1;
                report = backup;
                tango = undefined;
                zulu = undefined;
                if(!kilo) { _fun00086_ip = 303; continue _fun00085 }
 163:
                kilo = mike.chatManager;
                kilo = kilo._rows;
                echo = kilo[report];
                sizing = tango;
                kilo = zulu;
                if(!(verify != echo)) { _fun00086_ip = 287; continue _fun00085 }
 189:
                result = echo.type;
                output = _closure1_slot68;
                output = output.MESSAGE;
                sizing = tango;
                kilo = zulu;
                if(!(result === output)) { _fun00086_ip = 287; continue _fun00085 }
 214:
                result = echo.message;
                update = verify == result;
                output = undefined;
                if(update) { _fun00086_ip = 233; continue _fun00085 }
 228:
                output = result.id;
 233:
                sizing = result;
                kilo = zulu;
                if(!(verify != output)) { _fun00086_ip = 287; continue _fun00085 }
 243:
                output = romeo;
                if(!(report !== backup)) { _fun00086_ip = 260; continue _fun00085 }
 250:
                output = golf;
                if(!(report === foxtrot)) { _fun00086_ip = 260; continue _fun00085 }
 257:
                output = yankee;
 260:
                update = options.set;
                echo = echo.message;
                echo = echo.id;
                echo = update.bind(options)(echo, output);
                kilo = output;
                sizing = result;
 287:
                report = report - 1;
                tango = sizing;
                zulu = kilo;
                if(report >= foxtrot) { _fun00086_ip = 163; continue _fun00085 }
 303:
                mike = mike.chatManager;
                tango = mike._messages;
                zulu = tango.filter;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                        mike = argFoo;
                        entity = {};
                        entity['message'] = mike;
                        report = _closure3_slot0;
                        tango = report.get;
                        zulu = mike.id;
                        tango = tango.bind(report)(zulu);
                        zulu = null;
                        report = zulu != tango;
                        zulu = 1;
                        if(!report) { _fun00088_ip = 46; continue _fun00087 }
 43:
                        zulu = tango;
 46:
                        entity['percentVisible'] = zulu;
                        mike = mike.state;
                        entity['state'] = mike;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
 351:
                entity = new Array(0);
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'handleVisibleMessagesChange';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                entity = argFoo;
                tango = this;
                var _closure3_slot0 = tango;
                offset = entity.firstVisibleMessageIndex;
                golf = entity.firstVisibleMessagePercentVisible;
                options = entity.lastVisibleMessageIndex;
                oscar = entity.lastVisibleMessagePercentVisible;
                verify = entity.source;
                entity = undefined;
                var _closure3_slot1 = entity;
                report = tango.getVisibleMessages;
                mike = {};
                mike['firstVisibleMessageIndex'] = offset;
                mike['lastVisibleMessageIndex'] = options;
                mike['firstVisibleMessagePercentVisible'] = golf;
                mike['lastVisibleMessagePercentVisible'] = oscar;
                oscar = report.bind(tango)(mike);
                report = oscar.length;
                mike = 0;
                if(!(!(report <= mike))) { _fun00090_ip = 229; continue _fun00089 }
 96:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                report = 86;
                report = options[report];
                options = golf.bind(entity)(report);
                golf = options.questsVisibleMobileMessagesChanged;
                report = {};
                report['visibleMessages'] = oscar;
                report['source'] = verify;
                report = golf.bind(options)(report);
                report = tango.props;
                report = report.shouldTrackAnnouncementMessageViews;
                if(!report) { _fun00090_ip = 229; continue _fun00089 }
 155:
                tango = tango.props;
                report = tango.guildId;
                tango = null;
                if(!(tango != report)) { _fun00090_ip = 229; continue _fun00089 }
 171:
                tango = new Array(0);
                _closure3_slot1 = tango;
                report = oscar.forEach;
                zulu = function(argFoo) {
                    _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                        entity = argFoo;
                        mike = entity.message;
                        report = mike.messageReference;
                        tango = null;
                        oscar = tango == report;
                        entity = undefined;
                        zulu = undefined;
                        if(oscar) { _fun00092_ip = 32; continue _fun00091 }
 27:
                        zulu = report.guild_id;
 32:
                        zulu = tango != zulu;
                        if(!zulu) { _fun00092_ip = 49; continue _fun00091 }
 39:
                        report = mike.webhookId;
                        zulu = tango != report;
 49:
                        if(!zulu) { _fun00092_ip = 76; continue _fun00091 }
 52:
                        oscar = mike.hasFlag;
                        report = _closure1_slot63;
                        report = report.IS_CROSSPOST;
                        zulu = oscar.bind(mike)(report);
 76:
                        golf = mike.hasFlag;
                        oscar = _closure1_slot63;
                        oscar = oscar.EPHEMERAL;
                        oscar = golf.bind(mike)(oscar);
                        if(oscar) { _fun00092_ip = 336; continue _fun00091 }
 106:
                        oscar = _closure3_slot0;
                        oscar = oscar.props;
                        oscar = oscar.channel;
                        oscar = oscar.type;
                        report = _closure1_slot58;
                        report = report.GUILD_ANNOUNCEMENT;
                        if(!(oscar !== report)) { _fun00092_ip = 148; continue _fun00091 }
 142:
                        if(!zulu) { _fun00092_ip = 336; continue _fun00091 }
 148:
                        if(!zulu) { _fun00092_ip = 161; continue _fun00091 }
 151:
                        report = mike.messageReference;
                        if(!(tango == report)) { _fun00092_ip = 177; continue _fun00091 }
 161:
                        report = _closure3_slot0;
                        report = report.props;
                        oscar = report.channelId;
                        _fun00092_ip = 188; continue _fun00091;
 177:
                        report = mike.messageReference;
                        oscar = report.channel_id;
 188:
                        if(!zulu) { _fun00092_ip = 215; continue _fun00091 }
 191:
                        options = mike.messageReference;
                        verify = tango == options;
                        report = undefined;
                        if(verify) { _fun00092_ip = 211; continue _fun00091 }
 206:
                        report = options.guild_id;
 211:
                        if(!(tango == report)) { _fun00092_ip = 231; continue _fun00091 }
 215:
                        report = _closure3_slot0;
                        report = report.props;
                        report = report.guildId;
                        _fun00092_ip = 242; continue _fun00091;
 231:
                        options = mike.messageReference;
                        report = options.guild_id;
 242:
                        if(!zulu) { _fun00092_ip = 255; continue _fun00091 }
 245:
                        zulu = mike.messageReference;
                        if(!(tango == zulu)) { _fun00092_ip = 262; continue _fun00091 }
 255:
                        options = mike.id;
                        _fun00092_ip = 274; continue _fun00091;
 262:
                        mike = mike.messageReference;
                        options = mike.message_id;
 274:
                        tango = _closure3_slot1;
                        zulu = tango.push;
                        mike = {};
                        mike['messageId'] = options;
                        golf = _closure3_slot0;
                        options = golf.props;
                        options = options.channelId;
                        mike['channelId'] = options;
                        golf = golf.props;
                        golf = golf.guildId;
                        mike['guildId'] = golf;
                        mike['sourceChannelId'] = oscar;
                        mike['sourceGuildId'] = report;
                        mike = zulu.bind(tango)(mike);
 336:
                        return entity;
                    }
                };
                zulu = report.bind(oscar)(zulu);
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 87;
                mike = report[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.handleMessageListVisibilityChange;
                mike = mike.bind(zulu)(tango);
 229:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            report = this;
            entity = report.props;
            yankee = entity.scrollEnabled;
            verify = entity.animateEmoji;
            offset = entity.onPressKey;
            foxtrot = entity.style;
            options = entity.children;
            golf = entity.HACK_fixModalInteraction;
            romeo = entity.alwaysRespectKeyboard;
            oscar = entity.shouldCalculateMessageVisibilityPercentages;
            tango = _closure1_slot72;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 88;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            backup = report._chatRef;
            entity['ref'] = backup;
            entity['style'] = foxtrot;
            foxtrot = true;
            entity['inverted'] = foxtrot;
            entity['alwaysRespectKeyboard'] = romeo;
            entity['scrollEnabled'] = yankee;
            yankee = report.handleLayout;
            entity['onLayout'] = yankee;
            yankee = report.handleScrollPosition;
            entity['onChatScrollPosition'] = yankee;
            yankee = report.handleTapImage;
            entity['onTapImage'] = yankee;
            yankee = report.handleTapChannel;
            entity['onTapChannel'] = yankee;
            yankee = report.handleLongPressChannel;
            entity['onLongPressChannel'] = yankee;
            yankee = report.handleTapAttachmentLink;
            entity['onTapAttachmentLink'] = yankee;
            yankee = report.handleLongPressAttachmentLink;
            entity['onLongPressAttachmentLink'] = yankee;
            yankee = report.handleTapCall;
            entity['onTapCall'] = yankee;
            yankee = report.handleTapMention;
            entity['onTapMention'] = yankee;
            yankee = report.handleTapCommandMention;
            entity['onTapCommandMention'] = yankee;
            yankee = report.handleLongPressCommandMention;
            entity['onLongPressCommandMention'] = yankee;
            yankee = report.handleTapLink;
            entity['onTapLink'] = yankee;
            yankee = report.handleLongPressLink;
            entity['onLongPressLink'] = yankee;
            yankee = report.handleTapReaction;
            entity['onTapReaction'] = yankee;
            yankee = report.handleLongPressReaction;
            entity['onLongPressReaction'] = yankee;
            yankee = report.handleTapAvatar;
            entity['onTapAvatar'] = yankee;
            yankee = report.handleTapUsername;
            entity['onTapUsername'] = yankee;
            yankee = report.handleLongPressUsername;
            entity['onLongPressUsername'] = yankee;
            yankee = report.handleOpenSticker;
            entity['onTapSticker'] = yankee;
            yankee = report.handleLongPressSticker;
            entity['onLongPressSticker'] = yankee;
            yankee = report.handleLongPressMessage;
            entity['onLongPressMessage'] = yankee;
            yankee = report.handleInitiateReply;
            entity['onInitiateReply'] = yankee;
            yankee = report.handleInitiateEdit;
            entity['onInitiateEdit'] = yankee;
            yankee = report.handleInitiateThread;
            entity['onInitiateThread'] = yankee;
            yankee = report.handleTapMessage;
            entity['onTapMessage'] = yankee;
            yankee = report.handleTapSeparator;
            entity['onTapSeparator'] = yankee;
            yankee = report.handleTapInviteEmbed;
            entity['onTapInviteEmbed'] = yankee;
            yankee = report.handleTapInviteEmbedAccept;
            entity['onTapInviteEmbedAccept'] = yankee;
            yankee = report.handleTapJoinActivity;
            entity['onTapJoinActivity'] = yankee;
            entity['onPressKey'] = offset;
            entity['animateEmoji'] = verify;
            verify = report.handleTapGiftCodeEmbed;
            entity['onTapGiftCodeEmbed'] = verify;
            verify = report.handleTapUploadProgressClose;
            entity['onTapUploadProgressClose'] = verify;
            verify = report.handleTapCancelUploadItem;
            entity['onTapCancelUploadItem'] = verify;
            verify = report.handleTapReply;
            entity['onTapMessageReply'] = verify;
            verify = report.handleTapSummary;
            entity['onTapSummary'] = verify;
            verify = report.handleTapSummaryJump;
            entity['onTapSummaryJump'] = verify;
            verify = report.handleTapGiftCodeAccept;
            entity['onTapGiftCodeAccept'] = verify;
            verify = report.handleTapReferralRedeem;
            entity['onTapReferralRedeem'] = verify;
            verify = report.handleTapThreadEmbed;
            entity['onTapThreadEmbed'] = verify;
            verify = report.handleTapEmoji;
            entity['onTapEmoji'] = verify;
            verify = report.handleTapTimestamp;
            entity['onTapTimestamp'] = verify;
            verify = report.handleTapRoleIcon;
            entity['onTapRoleIcon'] = verify;
            verify = report.handleTapGameIcon;
            entity['onTapGameIcon'] = verify;
            verify = report.handleTapSuppressNotificationsIcon;
            entity['onTapSuppressNotificationsIcon'] = verify;
            verify = report.handleTapConnectionsRoleTag;
            entity['onTapConnectionsRoleTag'] = verify;
            verify = report.handleTapTimeoutIcon;
            entity['onTapTimeoutIcon'] = verify;
            verify = report.handleTapButtonActionComponent;
            entity['onTapButtonActionComponent'] = verify;
            verify = report.handleTapSelectActionComponent;
            entity['onTapSelectActionComponent'] = verify;
            verify = report.handleTapWelcomeReply;
            entity['onTapWelcomeReply'] = verify;
            verify = report.handleTapInviteToSpeak;
            entity['onTapInviteToSpeak'] = verify;
            verify = report.handleTapAutoModerationActions;
            entity['onTapAutoModerationActions'] = verify;
            verify = report.handleTapAutoModerationFeedback;
            entity['onTapAutoModerationFeedback'] = verify;
            verify = report.handleTapFollowForumPost;
            entity['onTapFollowForumPost'] = verify;
            verify = report.handleTapShareForumPost;
            entity['onTapShareForumPost'] = verify;
            verify = report.handleTapReactionOverflow;
            entity['onTapReactionOverflow'] = verify;
            verify = report.handleTapNavBar;
            entity['onTapNavBar'] = verify;
            verify = report.handleCopyText;
            entity['onTapCopyText'] = verify;
            verify = report.handleTapOpTag;
            entity['onTapOpTag'] = verify;
            verify = report.handleTapTag;
            entity['onTapTag'] = verify;
            verify = report.handleTapRemix;
            entity['onTapRemix'] = verify;
            verify = report.handleMediaAttachmentPlaybackEnded;
            entity['onMediaAttachmentPlaybackEnded'] = verify;
            verify = report.handleMediaAttachmentPlaybackStarted;
            entity['onMediaAttachmentPlaybackStarted'] = verify;
            verify = report.handlerVoiceMessagePlaybackFailed;
            entity['onVoiceMessagePlaybackFailed'] = verify;
            verify = report.handleTapShowAltText;
            entity['onTapShowAltText'] = verify;
            verify = report.handleTapActivityBookmarkEmbed;
            entity['onTapActivityBookmarkEmbed'] = verify;
            verify = report.handleTapActivityInstanceEmbed;
            entity['onTapActivityInstanceEmbed'] = verify;
            verify = report.handleTapPostPreviewEmbed;
            entity['onTapPostPreviewEmbed'] = verify;
            verify = report.handleTapDismissMediaPostSharePrompt;
            entity['onTapDismissMediaPostSharePrompt'] = verify;
            verify = report.handleTapChannelPromptButton;
            entity['onTapChannelPromptButton'] = verify;
            verify = report.handleTapObscuredMediaLearnMore;
            entity['onTapObscuredMediaLearnMore'] = verify;
            verify = report.handleTapObscuredMediaToggle;
            entity['onTapObscuredMediaToggle'] = verify;
            verify = report.handleTapSafetyPolicyNoticeEmbed;
            entity['onTapSafetyPolicyNoticeEmbed'] = verify;
            verify = report.handleTapSafetySystemNotificationCta;
            entity['onTapSafetySystemNotificationCta'] = verify;
            verify = report.handleTapPollAnswer;
            entity['onTapPollAnswer'] = verify;
            verify = report.handleTapPollSubmitVote;
            entity['onTapPollSubmitVote'] = verify;
            verify = report.handleTapPollAction;
            entity['onTapPollAction'] = verify;
            verify = report.handleLongPressPollImage;
            entity['onLongPressPollImage'] = verify;
            verify = report.handleTapCtaButton;
            entity['onTapCtaButton'] = verify;
            verify = report.handleMessageAccessibilityAction;
            entity['onMessageAccessibilityAction'] = verify;
            verify = report.handleTapForwardFooter;
            entity['onTapForwardFooter'] = verify;
            verify = report.handleTapInlineForward;
            entity['onTapInlineForward'] = verify;
            verify = report.handleTapClanTagChiplet;
            entity['onTapClanTagChiplet'] = verify;
            verify = report.handleTapContentInventoryEntryEmbed;
            entity['onTapContentInventoryEntryEmbed'] = verify;
            verify = report.handleTapSoundmoji;
            entity['onTapSoundmoji'] = verify;
            entity['children'] = options;
            entity['HACK_fixModalInteraction'] = golf;
            golf = report.handleTapTableView;
            entity['onTapTableView'] = golf;
            golf = report.handleFirstLayout;
            entity['onFirstLayout'] = golf;
            golf = report.handleMediaPlayFinishedAnalytics;
            entity['onMediaPlayFinishedAnalytics'] = golf;
            entity['shouldCalculateMessageVisibilityPercentages'] = oscar;
            report = report.handleMessageVisibilityChanged;
            entity['onMessageVisibilityChanged'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = oscar;
        entity[9] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(options);
    var _closure1_slot75 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
            offset = argFoo;
            golf = offset.channel;
            var _closure2_slot0 = golf;
            output = offset.messages;
            variable84 = golf.id;
            var _closure2_slot1 = variable84;
            mike = golf.getGuildId;
            variable86 = mike.bind(golf)();
            var _closure2_slot2 = variable86;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = 89;
            mike = mike[zulu];
            tango = undefined;
            verify = report.bind(tango)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot46;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                zulu = _closure1_slot46;
                mike = zulu.getGuild;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = options.bind(verify)(report, mike);
            var _closure2_slot3 = report;
            foxtrot = null;
            mike = foxtrot == report;
            variable39 = undefined;
            if(mike) { _fun00094_ip = 119; continue _fun00093 }
 113:
            variable39 = report.systemChannelFlags;
 119:
            result = _closure1_slot0;
            update = _closure1_slot2;
            mike = update[zulu];
            romeo = result.bind(tango)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot41;
            verify = new Array(1);
            verify[0] = mike;
            options = function() {
                mike = _closure1_slot41;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            variable85 = yankee.bind(romeo)(verify, options, mike);
            var _closure2_slot4 = variable85;
            mike = 93;
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.InlineAttachmentMedia;
            options = verify.useSetting;
            variable95 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.InlineEmbedMedia;
            options = verify.useSetting;
            variable94 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.RenderEmbeds;
            options = verify.useSetting;
            variable93 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.RenderReactions;
            options = verify.useSetting;
            variable92 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.DeveloperMode;
            options = verify.useSetting;
            variable88 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.AnimateEmoji;
            options = verify.useSetting;
            variable99 = options.bind(verify)();
            options = update[mike];
            options = result.bind(tango)(options);
            verify = options.AnimateStickers;
            options = verify.useSetting;
            variable98 = options.bind(verify)();
            mike = update[mike];
            mike = result.bind(tango)(mike);
            options = mike.GifAutoPlay;
            mike = options.useSetting;
            variable96 = mike.bind(options)();
            mike = update[zulu];
            romeo = result.bind(tango)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot40;
            verify = new Array(1);
            verify[0] = mike;
            options = function() {
                entity = _closure1_slot40;
                entity = entity.theme;
                return entity;
            };
            mike = new Array(0);
            verify = yankee.bind(romeo)(verify, options, mike);
            echo = _closure1_slot1;
            mike = 94;
            mike = update[mike];
            backup = echo.bind(tango)(mike);
            romeo = backup.useExperiment;
            yankee = {};
            mike = 'MessagesConnected';
            yankee['location'] = mike;
            options = {};
            vacuum = false;
            options['autoTrackExposure'] = vacuum;
            options = romeo.bind(backup)(yankee, options);
            romeo = options.showShortcutsConditions;
            options = 95;
            options = update[options];
            backup = result.bind(tango)(options);
            yankee = backup.useMessageForwardingExperiment;
            options = {};
            options['location'] = mike;
            options = yankee.bind(backup)(options);
            variable90 = options.hasInlineForwardButton;
            options = 96;
            options = update[options];
            yankee = result.bind(tango)(options);
            options = yankee.useIsScreenReaderEnabled;
            variable91 = options.bind(yankee)();
            options = 97;
            options = update[options];
            options = result.bind(tango)(options);
            backup = options.MessageForwardBreadcrumbExperiment;
            yankee = backup.useExperiment;
            options = {};
            options['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = vacuum;
            mike = yankee.bind(backup)(options, mike);
            variable89 = mike.showForwardBreadcrumb;
            mike = function(argFoo) { // Original name: useMessageAuthorActivities
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                oscar = _closure1_slot10;
                report = oscar.useMemo;
                tango = new Array(1);
                tango[0] = zulu;
                zulu = function() {
                    entity = {};
                    var _closure4_slot0 = entity;
                    tango = _closure3_slot0;
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                            entity = argFoo;
                            mike = entity.author;
                            zulu = null;
                            mike = zulu != mike;
                            if(!mike) { _fun00096_ip = 28; continue _fun00095 }
 18:
                            tango = entity.activity;
                            mike = zulu != tango;
 28:
                            if(!mike) { _fun00096_ip = 53; continue _fun00095 }
 31:
                            mike = _closure4_slot0;
                            entity = entity.author;
                            entity = entity.id;
                            mike[entity] = zulu;
 53:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                oscar = report.bind(oscar)(zulu, tango);
                var _closure3_slot1 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 89;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useStateFromStoresObject;
                mike = _closure1_slot51;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = new Array(1);
                mike[0] = oscar;
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 62;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.mapValues;
                    mike = _closure3_slot1;
                    entity = function(argFoo, argBar) {
                        zulu = _closure1_slot51;
                        mike = zulu.getPrimaryActivity;
                        entity = argBar;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            variable79 = mike.bind(tango)(output);
            mike = function(argFoo) { // Original name: useFetchMessageApplications
                mike = argFoo;
                var _closure3_slot0 = mike;
                tango = _closure1_slot10;
                report = tango.useMemo;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = function() {
                    entity = global;
                    zulu = entity.Set;
                    tango = zulu.prototype;
                    tango = Object.create(tango, {constructor: {value: zulu}});
                    golf = tango;
                    zulu = new golf[zulu](oscar);
                    zulu = zulu instanceof Object ? zulu : tango;
                    var _closure4_slot0 = zulu;
                    report = _closure3_slot0;
                    tango = report.forEach;
                    mike = function(argFoo) {
                        _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                            entity = argFoo;
                            mike = entity.applicationId;
                            tango = null;
                            mike = tango != mike;
                            if(!mike) { _fun00098_ip = 26; continue _fun00097 }
 17:
                            zulu = entity.application;
                            mike = tango == zulu;
 26:
                            if(!mike) { _fun00098_ip = 51; continue _fun00097 }
 29:
                            zulu = _closure4_slot0;
                            mike = zulu.add;
                            entity = entity.applicationId;
                            entity = mike.bind(zulu)(entity);
 51:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = tango.bind(report)(mike);
                    mike = entity.Array;
                    entity = mike.from;
                    entity = entity.bind(mike)(zulu);
                    return entity;
                };
                report = report.bind(tango)(mike, zulu);
                var _closure3_slot1 = report;
                zulu = tango.useRef;
                mike = new Array(0);
                mike = zulu.bind(tango)(mike);
                var _closure3_slot2 = mike;
                zulu = tango.useEffect;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 82;
                        mike = mike[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(mike);
                        oscar = golf.areArraysShallowEqual;
                        report = _closure3_slot1;
                        zulu = _closure3_slot2;
                        zulu = zulu.current;
                        zulu = oscar.bind(golf)(report, zulu);
                        if(zulu) { _fun00100_ip = 172; continue _fun00099 }
 56:
                        report = _closure1_slot1;
                        offset = _closure1_slot2;
                        zulu = 90;
                        zulu = offset[zulu];
                        golf = report.bind(entity)(zulu);
                        oscar = golf.fetchApplications;
                        zulu = 62;
                        zulu = offset[zulu];
                        report = report.bind(entity)(zulu);
                        zulu = _closure3_slot1;
                        options = report.bind(entity)(zulu);
                        report = options.filter;
                        verify = _closure1_slot0;
                        tango = 91;
                        tango = offset[tango];
                        tango = verify.bind(entity)(tango);
                        tango = tango.isNotNullish;
                        report = report.bind(options)(tango);
                        tango = report.uniq;
                        report = tango.bind(report)();
                        tango = report.value;
                        report = tango.bind(report)();
                        tango = false;
                        tango = oscar.bind(golf)(report, tango);
                        mike = _closure3_slot2;
                        mike['current'] = zulu;
 172:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            mike = mike.bind(tango)(output);
            mike = update[zulu];
            kilo = result.bind(tango)(mike);
            backup = kilo.useStateFromStores;
            mike = _closure1_slot48;
            yankee = new Array(1);
            yankee[0] = mike;
            options = function() {
                mike = _closure1_slot48;
                entity = mike.getInvites;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            variable78 = backup.bind(kilo)(yankee, options, mike);
            mike = update[zulu];
            kilo = result.bind(tango)(mike);
            backup = kilo.useStateFromStoresObject;
            mike = _closure1_slot14;
            yankee = new Array(1);
            yankee[0] = mike;
            options = function() {
                entity = {};
                zulu = _closure1_slot14;
                mike = zulu.getApplications;
                mike = mike.bind(zulu)();
                entity['appDirectoryEmbedApplications'] = mike;
                mike = zulu.getInvalidApplicationIds;
                mike = mike.bind(zulu)();
                entity['invalidAppDirectoryEmbedApplicationIds'] = mike;
                mike = zulu.getApplicationFetchStates;
                mike = mike.bind(zulu)();
                entity['appDirectoryEmbedApplicationFetchStates'] = mike;
                return entity;
            };
            mike = new Array(0);
            mike = backup.bind(kilo)(yankee, options, mike);
            variable77 = mike.appDirectoryEmbedApplications;
            variable76 = mike.invalidAppDirectoryEmbedApplicationIds;
            variable69 = mike.appDirectoryEmbedApplicationFetchStates;
            mike = update[zulu];
            kilo = result.bind(tango)(mike);
            backup = kilo.useStateFromStoresArray;
            mike = _closure1_slot16;
            yankee = new Array(1);
            yankee[0] = mike;
            options = function() {
                mike = _closure1_slot16;
                entity = mike.getFetchingOrFailedFetchingIds;
                entity = entity.bind(mike)();
                return entity;
            };
            variable75 = backup.bind(kilo)(yankee, options);
            options = update[zulu];
            kilo = result.bind(tango)(options);
            backup = kilo.useStateFromStoresArray;
            options = _closure1_slot15;
            yankee = new Array(1);
            yankee[0] = options;
            options = function() {
                mike = _closure1_slot15;
                entity = mike.getFetchingIds;
                entity = entity.bind(mike)();
                return entity;
            };
            variable74 = backup.bind(kilo)(yankee, options);
            options = update[zulu];
            source = result.bind(tango)(options);
            sizing = source.useStateFromStoresArray;
            options = _closure1_slot13;
            kilo = new Array(1);
            kilo[0] = options;
            backup = new Array(1);
            backup[0] = variable84;
            yankee = function() {
                tango = _closure1_slot13;
                zulu = tango.getEmbeddedActivitiesForChannel;
                mike = _closure2_slot1;
                tango = zulu.bind(tango)(mike);
                zulu = tango.map;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.launchId;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 91;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isNotNullish;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable72 = sizing.bind(source)(kilo, yankee, backup);
            yankee = update[zulu];
            sizing = result.bind(tango)(yankee);
            kilo = sizing.useStateFromStoresArray;
            backup = new Array(2);
            backup[0] = options;
            yankee = _closure1_slot51;
            backup[1] = yankee;
            yankee = function() {
                _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    oscar = function(argFoo) { // Original name: _loop
                        _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                            report = argFoo;
                            var _closure4_slot0 = report;
                            tango = _closure1_slot51;
                            zulu = tango.findActivity;
                            oscar = report.userIds;
                            mike = oscar.values;
                            oscar = mike.bind(oscar)();
                            mike = oscar.next;
                            mike = mike.bind(oscar)();
                            mike = mike.value;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.application_id;
                                entity = _closure4_slot0;
                                entity = entity.applicationId;
                                entity = mike === entity;
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike, entity);
                            tango = null;
                            oscar = tango == mike;
                            entity = undefined;
                            zulu = undefined;
                            if(oscar) { _fun00104_ip = 83; continue _fun00103 }
 77:
                            zulu = mike.details;
 83:
                            if(!(tango != zulu)) { _fun00104_ip = 144; continue _fun00103 }
 87:
                            tango = _closure3_slot0;
                            zulu = tango.push;
                            options = report.launchId;
                            golf = mike.details;
                            mike = global;
                            mike = mike.HermesInternal;
                            oscar = mike.concat;
                            report = '';
                            mike = ':';
                            mike = oscar.bind(report)(options, mike, golf);
                            mike = zulu.bind(tango)(mike);
 144:
                            return entity;
                        }
                    };
                    zulu = _closure1_slot76;
                    report = _closure1_slot13;
                    tango = report.getEmbeddedActivitiesForChannel;
                    mike = _closure2_slot1;
                    mike = tango.bind(report)(mike);
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun00102_ip = 90; continue _fun00101 }
 65:
                    mike = zulu.value;
                    mike = oscar.bind(report)(mike);
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00102_ip = 65; continue _fun00101 }
 90:
                    return entity;
                }
            };
            variable70 = kilo.bind(sizing)(backup, yankee);
            yankee = update[zulu];
            sizing = result.bind(tango)(yankee);
            kilo = sizing.useStateFromStoresArray;
            backup = new Array(1);
            backup[0] = options;
            yankee = function() {
                entity = global;
                zulu = entity.Set;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                golf = tango;
                zulu = new golf[zulu](oscar);
                zulu = zulu instanceof Object ? zulu : tango;
                var _closure3_slot0 = zulu;
                report = _closure1_slot13;
                tango = report.getEmbeddedActivitiesByChannel;
                report = tango.bind(report)();
                tango = report.forEach;
                mike = function(argFoo, argBar) {
                    zulu = argFoo;
                    mike = argBar;
                    var _closure4_slot0 = mike;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        entity = argFoo;
                        zulu = entity.userIds;
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            zulu = _closure3_slot0;
                            mike = zulu.add;
                            golf = _closure4_slot0;
                            entity = global;
                            entity = entity.HermesInternal;
                            oscar = entity.concat;
                            report = '';
                            tango = ':';
                            entity = argFoo;
                            entity = oscar.bind(report)(golf, tango, entity);
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                mike = entity.Array;
                entity = mike.from;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            variable71 = kilo.bind(sizing)(backup, yankee);
            yankee = update[zulu];
            kilo = result.bind(tango)(yankee);
            backup = kilo.useStateFromStoresArray;
            yankee = new Array(1);
            yankee[0] = options;
            options = function() {
                _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                    entity = new Array(0);
                    zulu = _closure1_slot76;
                    tango = _closure1_slot13;
                    mike = tango.getLaunchStates;
                    mike = mike.bind(tango)();
                    verify = undefined;
                    options = zulu.bind(verify)(mike);
                    zulu = options.bind(verify)();
                    mike = zulu.done;
                    golf = 0;
                    oscar = null;
                    report = 2;
                    tango = 1;
                    if(mike) { _fun00106_ip = 150; continue _fun00105 }
 56:
                    yankee = zulu.value;
                    mike = _closure1_slot3;
                    mike = mike.bind(verify)(yankee, report);
                    yankee = mike[golf];
                    mike = mike[tango];
                    yankee = mike.isLaunching;
                    if(!yankee) { _fun00106_ip = 98; continue _fun00105 }
 88:
                    romeo = mike.componentId;
                    yankee = oscar != romeo;
 98:
                    if(!yankee) { _fun00106_ip = 116; continue _fun00105 }
 101:
                    romeo = mike.componentId;
                    romeo = romeo.length;
                    yankee = romeo > golf;
 116:
                    if(!yankee) { _fun00106_ip = 135; continue _fun00105 }
 119:
                    yankee = entity.push;
                    mike = mike.componentId;
                    mike = yankee.bind(entity)(mike);
 135:
                    yankee = options.bind(verify)();
                    mike = yankee.done;
                    zulu = yankee;
                    if(!mike) { _fun00106_ip = 56; continue _fun00105 }
 150:
                    return entity;
                }
            };
            variable73 = backup.bind(kilo)(yankee, options);
            options = update[zulu];
            backup = result.bind(tango)(options);
            yankee = backup.useStateFromStoresArray;
            options = new Array(1);
            options[0] = mike;
            mike = function() {
                mike = _closure1_slot16;
                entity = mike.getApplications;
                mike = entity.bind(mike)();
                entity = new Array(1);
                entity[0] = mike;
                return entity;
            };
            mike = yankee.bind(backup)(options, mike);
            sequence = _closure1_slot3;
            options = 1;
            mike = sequence.bind(tango)(mike, options);
            control = 0;
            sizing = mike[control];
            mike = update[zulu];
            kilo = result.bind(tango)(mike);
            backup = kilo.useStateFromStores;
            mike = _closure1_slot29;
            yankee = new Array(1);
            yankee[0] = mike;
            mike = function() {
                mike = _closure1_slot29;
                entity = mike.getMediaPostEmbeds;
                entity = entity.bind(mike)();
                return entity;
            };
            variable68 = backup.bind(kilo)(yankee, mike);
            mike = update[zulu];
            source = result.bind(tango)(mike);
            kilo = source.useStateFromStores;
            mike = _closure1_slot26;
            backup = new Array(1);
            backup[0] = mike;
            yankee = function() {
                mike = _closure1_slot26;
                entity = mike.getGuildTemplates;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            variable67 = kilo.bind(source)(backup, yankee, mike);
            mike = update[zulu];
            source = result.bind(tango)(mike);
            kilo = source.useStateFromStores;
            mike = _closure1_slot17;
            backup = new Array(1);
            backup[0] = mike;
            yankee = function() {
                mike = _closure1_slot17;
                entity = mike.getBuildOverrides;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            variable66 = kilo.bind(source)(backup, yankee, mike);
            mike = 98;
            mike = update[mike];
            backup = result.bind(tango)(mike);
            yankee = backup.useQuests;
            mike = {};
            kilo = 'cache-or-network';
            mike['fetchPolicy'] = kilo;
            mike = yankee.bind(backup)(mike);
            variable65 = mike.quests;
            variable64 = mike.isFetchingCurrentQuests;
            yankee = output.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot64;
                entity = entity.PREMIUM_REFERRAL;
                entity = mike === entity;
                return entity;
            };
            backup = yankee.bind(output)(mike);
            yankee = backup.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.referralTrialOfferId;
                return entity;
            };
            backup = yankee.bind(backup)(mike);
            yankee = backup.filter;
            mike = 91;
            mike = update[mike];
            mike = result.bind(tango)(mike);
            mike = mike.isNotNullish;
            mike = yankee.bind(backup)(mike);
            var _closure2_slot5 = mike;
            mike = update[zulu];
            kilo = result.bind(tango)(mike);
            backup = kilo.useStateFromStoresArray;
            mike = _closure1_slot32;
            yankee = new Array(1);
            yankee[0] = mike;
            mike = function() {
                zulu = _closure2_slot5;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                        zulu = _closure1_slot32;
                        mike = zulu.getRelevantUserTrialOffer;
                        entity = argFoo;
                        mike = mike.bind(zulu)(entity);
                        entity = null;
                        zulu = entity == mike;
                        entity = undefined;
                        if(zulu) { _fun00108_ip = 37; continue _fun00107 }
 32:
                        entity = mike.id;
 37:
                        return entity;
                    }
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 91;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isNotNullish;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = backup.bind(kilo)(yankee, mike);
            mike = 99;
            mike = update[mike];
            backup = result.bind(tango)(mike);
            yankee = backup.useTrialOffer;
            mike = _closure1_slot70;
            backup = yankee.bind(backup)(mike);
            mike = update[zulu];
            config = result.bind(tango)(mike);
            source = config.useStateFromStores;
            mike = _closure1_slot54;
            yankee = new Array(1);
            yankee[0] = mike;
            mike = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 100;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.isPremiumExactly;
                report = _closure1_slot54;
                mike = report.getCurrentUser;
                mike = mike.bind(report)();
                entity = _closure1_slot71;
                entity = entity.TIER_2;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            yankee = source.bind(config)(yankee, mike);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot42;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = variable84;
            mike = function() {
                zulu = _closure1_slot42;
                mike = zulu.getEditingMessageId;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable63 = record.bind(context)(config, mike, source);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot34;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = variable84;
            mike = function() {
                _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                    zulu = _closure1_slot34;
                    mike = zulu.getPendingReply;
                    entity = _closure2_slot1;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00110_ip = 46; continue _fun00109 }
 36:
                    mike = mike.message;
                    entity = mike.id;
 46:
                    return entity;
                }
            };
            variable62 = record.bind(context)(config, mike, source);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot52;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = variable84;
            mike = function() {
                zulu = _closure1_slot52;
                mike = zulu.getOldestUnreadMessageId;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable61 = record.bind(context)(config, mike, source);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot47;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = variable86;
            mike = function() {
                _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00112_ip = 38; continue _fun00111 }
 16:
                    tango = _closure1_slot47;
                    zulu = tango.canChatInGuild;
                    mike = _closure2_slot2;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            variable60 = record.bind(context)(config, mike, source);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot50;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = golf;
            mike = function() {
                tango = _closure1_slot50;
                zulu = tango.can;
                entity = _closure1_slot65;
                mike = entity.SEND_MESSAGES;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            variable59 = record.bind(context)(config, mike, source);
            mike = 101;
            mike = update[mike];
            mike = echo.bind(tango)(mike);
            variable58 = mike.bind(tango)(variable84);
            mike = update[zulu];
            record = result.bind(tango)(mike);
            config = record.useStateFromStores;
            mike = _closure1_slot55;
            source = new Array(1);
            source[0] = mike;
            echo = new Array(1);
            echo[0] = variable85;
            mike = function() {
                tango = _closure1_slot55;
                zulu = tango.getUserVoiceChannelId;
                mike = _closure1_slot62;
                entity = _closure2_slot4;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            variable57 = config.bind(record)(source, mike, echo);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot35;
            config = new Array(1);
            config[0] = mike;
            source = new Array(1);
            source[0] = golf;
            echo = function() {
                _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                    entity = _closure1_slot59;
                    tango = entity.THREADS;
                    zulu = tango.has;
                    entity = _closure2_slot0;
                    entity = entity.type;
                    zulu = zulu.bind(tango)(entity);
                    tango = null;
                    entity = null;
                    if(!zulu) { _fun00114_ip = 116; continue _fun00113 }
 42:
                    zulu = _closure2_slot0;
                    zulu = zulu.parent_id;
                    zulu = tango != zulu;
                    entity = null;
                    if(!zulu) { _fun00114_ip = 116; continue _fun00113 }
 61:
                    tango = _closure1_slot35;
                    zulu = tango.getMessageByReference;
                    mike = {};
                    report = _closure2_slot0;
                    oscar = report.parent_id;
                    mike['channel_id'] = oscar;
                    oscar = report.id;
                    mike['message_id'] = oscar;
                    report = report.guild_id;
                    mike['guild_id'] = report;
                    mike = zulu.bind(tango)(mike);
                    entity = mike.message;
 116:
                    return entity;
                }
            };
            source = record.bind(context)(config, echo, source);
            echo = update[zulu];
            papa = result.bind(tango)(echo);
            context = papa.useStateFromStoresObject;
            echo = _closure1_slot43;
            record = new Array(1);
            record[0] = echo;
            config = function() {
                entity = {};
                zulu = _closure1_slot43;
                mike = zulu.getResolvingCodes;
                mike = mike.bind(zulu)();
                entity['resolvingGiftCodes'] = mike;
                mike = zulu.getResolvedCodes;
                mike = mike.bind(zulu)();
                entity['resolvedGiftCodes'] = mike;
                mike = zulu.getAcceptingCodes;
                mike = mike.bind(zulu)();
                entity['acceptingGiftCodes'] = mike;
                return entity;
            };
            echo = new Array(0);
            echo = context.bind(papa)(record, config, echo);
            variable56 = echo.resolvingGiftCodes;
            variable55 = echo.resolvedGiftCodes;
            variable54 = echo.acceptingGiftCodes;
            echo = update[zulu];
            papa = result.bind(tango)(echo);
            context = papa.useStateFromStores;
            echo = _closure1_slot19;
            record = new Array(1);
            record[0] = echo;
            config = new Array(1);
            config[0] = variable84;
            echo = function() {
                zulu = _closure1_slot19;
                mike = zulu.getParticipants;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                entity = entity.length;
                return entity;
            };
            variable53 = context.bind(papa)(record, echo, config);
            echo = update[zulu];
            papa = result.bind(tango)(echo);
            context = papa.useStateFromStores;
            echo = _closure1_slot53;
            record = new Array(1);
            record[0] = echo;
            config = new Array(1);
            config[0] = variable84;
            echo = function() {
                zulu = _closure1_slot53;
                mike = zulu.getFiles;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable52 = context.bind(papa)(record, echo, config);
            echo = update[zulu];
            context = result.bind(tango)(echo);
            record = context.useStateFromStores;
            config = new Array(1);
            config[0] = mike;
            echo = new Array(1);
            echo[0] = variable84;
            mike = function() {
                zulu = _closure1_slot35;
                mike = zulu.getReplyIdsForChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable51 = record.bind(context)(config, mike, echo);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot12;
            config = new Array(1);
            config[0] = mike;
            echo = function() {
                entity = _closure1_slot12;
                entity = entity.useReducedMotion;
                return entity;
            };
            variable50 = record.bind(context)(config, echo);
            echo = update[zulu];
            record = result.bind(tango)(echo);
            config = record.useStateFromStores;
            echo = new Array(1);
            echo[0] = mike;
            mike = function() {
                entity = _closure1_slot12;
                entity = entity.roleStyle;
                return entity;
            };
            variable87 = config.bind(record)(echo, mike);
            mike = update[zulu];
            context = result.bind(tango)(mike);
            record = context.useStateFromStores;
            mike = _closure1_slot38;
            config = new Array(1);
            config[0] = mike;
            echo = new Array(1);
            echo[0] = variable84;
            mike = function() {
                zulu = _closure1_slot38;
                mike = zulu.getChannelThreadsVersion;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable49 = record.bind(context)(config, mike, echo);
            mike = update[zulu];
            record = result.bind(tango)(mike);
            config = record.useStateFromStoresObject;
            mike = _closure1_slot28;
            echo = new Array(1);
            echo[0] = mike;
            mike = function() {
                mike = _closure1_slot28;
                entity = mike.getMessageInteractionStates;
                entity = entity.bind(mike)();
                return entity;
            };
            variable44 = config.bind(record)(echo, mike);
            mike = update[zulu];
            papa = result.bind(tango)(mike);
            context = papa.useStateFromStores;
            mike = _closure1_slot27;
            record = new Array(1);
            record[0] = mike;
            mike = 102;
            mike = update[mike];
            mike = result.bind(tango)(mike);
            r102 = mike.isVersionEqual;
            r104 = function() {
                zulu = _closure1_slot27;
                entity = zulu.getInteractionComponentStates;
                mike = entity.bind(zulu)();
                entity = new Array(2);
                entity[0] = mike;
                mike = zulu.getInteractionComponentStateVersion;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            r103 = new Array(0);
            r106 = papa;
            r105 = record;
            mike = r106[context](r105, r104, r103, r102, r101);
            echo = 2;
            mike = sequence.bind(tango)(mike, echo);
            variable43 = mike[control];
            variable42 = mike[options];
            mike = update[zulu];
            config = result.bind(tango)(mike);
            sequence = config.useStateFromStores;
            mike = _closure1_slot20;
            control = new Array(1);
            control[0] = mike;
            mike = function() {
                entity = _closure1_slot20;
                entity = entity.hasLoadedExperiments;
                return entity;
            };
            variable40 = sequence.bind(config)(control, mike);
            mike = 103;
            mike = update[mike];
            sequence = result.bind(tango)(mike);
            control = sequence.useIsSpamMessageRequest;
            mike = golf.id;
            variable80 = control.bind(sequence)(mike);
            mike = 104;
            mike = update[mike];
            update = result.bind(tango)(mike);
            result = update.useIsMessageRequest;
            mike = golf.id;
            variable81 = result.bind(update)(mike);
            variable41 = foxtrot != output;
            if(!variable41) { _fun00094_ip = 2281; continue _fun00093 }
 2263:
            mike = output.ready;
            if(mike) { _fun00094_ip = 2278; continue _fun00093 }
 2272:
            mike = output.cached;
 2278:
            variable41 = mike;
 2281:
            variable83 = foxtrot != output;
            if(!variable83) { _fun00094_ip = 2294; continue _fun00093 }
 2288:
            variable83 = output.cached;
 2294:
            variable82 = foxtrot != output;
            if(!variable82) { _fun00094_ip = 2307; continue _fun00093 }
 2301:
            variable82 = output.ready;
 2307:
            if(!variable82) { _fun00094_ip = 2319; continue _fun00093 }
 2310:
            mike = output.loadingMore;
            variable82 = !mike;
 2319:
            result = _closure1_slot0;
            update = _closure1_slot2;
            mike = update[zulu];
            config = result.bind(tango)(mike);
            sequence = config.useStateFromStores;
            mike = _closure1_slot25;
            control = new Array(1);
            control[0] = mike;
            mike = function() {
                mike = _closure1_slot25;
                entity = mike.getRsvpVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            variable48 = sequence.bind(config)(control, mike);
            mike = update[zulu];
            config = result.bind(tango)(mike);
            sequence = config.useStateFromStores;
            mike = _closure1_slot24;
            control = new Array(1);
            control[0] = mike;
            mike = function() {
                mike = _closure1_slot24;
                entity = mike.getMessagesVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            variable47 = sequence.bind(config)(control, mike);
            mike = update[zulu];
            config = result.bind(tango)(mike);
            sequence = config.useStateFromStores;
            mike = _closure1_slot44;
            control = new Array(1);
            control[0] = mike;
            mike = function() {
                mike = _closure1_slot44;
                entity = mike.getCommunicationDisabledVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            variable46 = sequence.bind(config)(control, mike);
            mike = update[zulu];
            config = result.bind(tango)(mike);
            sequence = config.useStateFromStores;
            mike = _closure1_slot50;
            control = new Array(1);
            control[0] = mike;
            mike = function() {
                tango = _closure1_slot50;
                zulu = tango.can;
                entity = _closure1_slot65;
                mike = entity.MODERATE_MEMBERS;
                entity = _closure2_slot3;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            variable37 = sequence.bind(config)(control, mike);
            mike = 105;
            mike = update[mike];
            update = result.bind(tango)(mike);
            result = update.useCurrentUserCommunicationDisabled;
            control = foxtrot == report;
            mike = undefined;
            if(control) { _fun00094_ip = 2515; continue _fun00093 }
 2510:
            mike = report.id;
 2515:
            result = result.bind(update)(mike);
            mike = _closure1_slot3;
            mike = mike.bind(tango)(result, echo);
            variable38 = mike[options];
            options = _closure1_slot0;
            r100 = _closure1_slot2;
            mike = r100[zulu];
            update = options.bind(tango)(mike);
            echo = update.useStateFromStores;
            mike = _closure1_slot39;
            result = new Array(1);
            result[0] = mike;
            mike = function() {
                entity = _closure1_slot39;
                entity = entity.locale;
                return entity;
            };
            variable36 = echo.bind(update)(result, mike);
            mike = _closure1_slot1;
            result = 106;
            result = r100[result];
            control = mike.bind(tango)(result);
            update = control.useExperiment;
            echo = {};
            result = '41de6d_2';
            echo['location'] = result;
            result = {};
            result['autoTrackExposure'] = vacuum;
            result = update.bind(control)(echo, result);
            quebec = result.paymentsBlocked;
            result = r100[zulu];
            control = options.bind(tango)(result);
            update = control.useStateFromStores;
            result = _closure1_slot37;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                _fun00115: for(var _fun00116_ip = 0; ; ) switch(_fun00116_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = zulu.isForumPost;
                    entity = entity.bind(zulu)();
                    zulu = !entity;
                    entity = !zulu;
                    if(zulu) { _fun00116_ip = 48; continue _fun00115 }
 26:
                    tango = _closure1_slot37;
                    zulu = tango.hasJoined;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 48:
                    return entity;
                }
            };
            equality = update.bind(control)(echo, result);
            result = r100[zulu];
            control = options.bind(tango)(result);
            update = control.useStateFromStores;
            result = _closure1_slot30;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                zulu = _closure1_slot30;
                mike = zulu.shouldDisplayPrompt;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            whiskey = update.bind(control)(echo, result);
            result = r100[zulu];
            control = options.bind(tango)(result);
            update = control.useStateFromStores;
            result = _closure1_slot33;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                mike = _closure1_slot33;
                entity = mike.isEligible;
                entity = entity.bind(mike)();
                return entity;
            };
            sierra = update.bind(control)(echo, result);
            result = r100[zulu];
            control = options.bind(tango)(result);
            update = control.useStateFromStores;
            result = _closure1_slot18;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                mike = _closure1_slot18;
                entity = mike.getLazyCacheStatus;
                entity = entity.bind(mike)();
                return entity;
            };
            lima = update.bind(control)(echo, result);
            result = r100[zulu];
            control = options.bind(tango)(result);
            update = control.useStateFromStoresObject;
            result = _closure1_slot56;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                _fun00117: for(var _fun00118_ip = 0; ; ) switch(_fun00118_ip) {
 0:
                    entity = {};
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 66;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isAndroid;
                    tango = zulu.bind(tango)();
                    zulu = 0;
                    if(!tango) { _fun00118_ip = 51; continue _fun00117 }
 41:
                    tango = _closure1_slot56;
                    zulu = tango.keyboardHeight;
 51:
                    entity['androidKeyboardHeight'] = zulu;
                    mike = _closure1_slot56;
                    mike = mike.keyboardType;
                    entity['keyboardType'] = mike;
                    return entity;
                }
            };
            result = update.bind(control)(echo, result);
            status = result.androidKeyboardHeight;
            context = result.keyboardType;
            result = 107;
            result = r100[result];
            echo = options.bind(tango)(result);
            result = echo.useChannelSummariesExperiment;
            result = result.bind(echo)(golf);
            var _closure2_slot6 = result;
            echo = r100[zulu];
            vacuum = options.bind(tango)(echo);
            control = vacuum.useStateFromStores;
            echo = _closure1_slot36;
            update = new Array(1);
            update[0] = echo;
            echo = new Array(2);
            echo[0] = result;
            result = golf.id;
            echo[1] = result;
            result = function() {
                _fun00119: for(var _fun00120_ip = 0; ; ) switch(_fun00120_ip) {
 0:
                    zulu = _closure2_slot6;
                    entity = null;
                    if(!zulu) { _fun00120_ip = 39; continue _fun00119 }
 12:
                    tango = _closure1_slot36;
                    zulu = tango.selectedSummary;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 39:
                    return entity;
                }
            };
            papa = control.bind(vacuum)(update, result, echo);
            result = r100[zulu];
            vacuum = options.bind(tango)(result);
            control = vacuum.useStateFromStores;
            result = _closure1_slot22;
            update = new Array(1);
            update[0] = result;
            echo = function() {
                zulu = _closure1_slot22;
                mike = zulu.getSelectedSummary;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            target = control.bind(vacuum)(update, echo);
            echo = r100[zulu];
            control = options.bind(tango)(echo);
            update = control.useStateFromStores;
            echo = new Array(1);
            echo[0] = result;
            result = function() {
                zulu = _closure1_slot22;
                mike = zulu.isGravitySelectedChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = update.bind(control)(echo, result);
            result = {};
            result['guild'] = report;
            result['channel'] = golf;
            result['messages'] = output;
            result['isMessagesReady'] = variable41;
            report = function(argFoo) { // Original name: useShouldTrackAnnouncementMessageViews
                _fun00121: for(var _fun00122_ip = 0; ; ) switch(_fun00122_ip) {
 0:
                    entity = argFoo;
                    verify = entity.guild;
                    offset = entity.channel;
                    var _closure3_slot0 = offset;
                    golf = entity.messages;
                    var _closure3_slot1 = golf;
                    options = entity.isMessagesReady;
                    var _closure3_slot2 = options;
                    zulu = undefined;
                    var _closure3_slot3 = zulu;
                    tango = null;
                    report = tango == verify;
                    entity = undefined;
                    if(report) { _fun00122_ip = 80; continue _fun00121 }
 56:
                    oscar = verify.hasFeature;
                    report = _closure1_slot60;
                    report = report.COMMUNITY;
                    entity = oscar.bind(verify)(report);
 80:
                    verify = tango != entity;
                    if(!verify) { _fun00122_ip = 90; continue _fun00121 }
 87:
                    verify = entity;
 90:
                    _closure3_slot3 = verify;
                    oscar = _closure1_slot10;
                    report = oscar.useMemo;
                    yankee = offset.type;
                    tango = new Array(5);
                    tango[0] = yankee;
                    offset = offset.guild_id;
                    tango[1] = offset;
                    tango[2] = verify;
                    tango[3] = options;
                    tango[4] = golf;
                    mike = function() {
                        _fun00123: for(var _fun00124_ip = 0; ; ) switch(_fun00124_ip) {
 0:
                            entity = _closure3_slot0;
                            mike = entity.type;
                            entity = _closure1_slot58;
                            entity = entity.GUILD_ANNOUNCEMENT;
                            entity = mike === entity;
                            if(!entity) { _fun00124_ip = 36; continue _fun00123 }
 32:
                            entity = _closure3_slot3;
 36:
                            mike = _closure3_slot2;
                            if(!mike) { _fun00124_ip = 67; continue _fun00123 }
 43:
                            report = _closure3_slot1;
                            tango = report.some;
                            zulu = function(argFoo) {
                                _fun00125: for(var _fun00126_ip = 0; ; ) switch(_fun00126_ip) {
 0:
                                    report = argFoo;
                                    entity = report.messageReference;
                                    zulu = null;
                                    entity = zulu != entity;
                                    if(!entity) { _fun00126_ip = 28; continue _fun00125 }
 18:
                                    mike = report.webhookId;
                                    entity = zulu != mike;
 28:
                                    if(!entity) { _fun00126_ip = 55; continue _fun00125 }
 31:
                                    tango = report.hasFlag;
                                    mike = _closure1_slot63;
                                    mike = mike.IS_CROSSPOST;
                                    entity = tango.bind(report)(mike);
 55:
                                    if(!entity) { _fun00126_ip = 74; continue _fun00125 }
 58:
                                    mike = _closure3_slot0;
                                    mike = mike.guild_id;
                                    entity = zulu != mike;
 74:
                                    return entity;
                                }
                            };
                            mike = tango.bind(report)(zulu);
 67:
                            if(entity) { _fun00124_ip = 73; continue _fun00123 }
 70:
                            entity = mike;
 73:
                            return entity;
                        }
                    };
                    report = report.bind(oscar)(mike, tango);
                    mike = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 92;
                    entity = tango[entity];
                    tango = mike.bind(zulu)(entity);
                    zulu = tango.useExperiment;
                    mike = {};
                    entity = '41de6d_1';
                    mike['location'] = entity;
                    entity = {};
                    report = !report;
                    entity['disable'] = report;
                    report = true;
                    entity['autoTrackExposure'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = entity.enabled;
                    return entity;
                }
            };
            record = report.bind(tango)(result);
            report = 108;
            report = r100[report];
            result = options.bind(tango)(report);
            report = result.useShouldDisplaySpoilerObscurity;
            config = report.bind(result)(golf);
            control = _closure1_slot10;
            update = control.useEffect;
            result = new Array(2);
            result[0] = variable84;
            result[1] = variable86;
            report = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 87;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.handleChannelSelect;
                entity = entity.bind(mike)();
                entity = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 87;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.handleChannelSelect;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                return entity;
            };
            report = update.bind(control)(report, result);
            report = 109;
            report = r100[report];
            update = options.bind(tango)(report);
            result = update.useShouldDisableInteractiveComponents;
            report = golf.id;
            sequence = result.bind(update)(report);
            result = _closure1_slot31;
            report = golf.id;
            vacuum = result.bind(tango)(report);
            report = r100[zulu];
            variable45 = options.bind(tango)(report);
            control = variable45.useStateFromStores;
            report = _closure1_slot21;
            update = new Array(1);
            update[0] = report;
            result = new Array(1);
            result[0] = variable84;
            report = function() {
                zulu = _closure1_slot21;
                mike = zulu.getChannelFpInfo;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            control = control.bind(variable45)(update, report, result);
            report = 110;
            report = r100[report];
            report = mike.bind(tango)(report);
            variable97 = report.bind(tango)();
            report = 111;
            report = r100[report];
            report = mike.bind(tango)(report);
            report = report.bind(tango)(output);
            result = report.unloadedContentEntryMessageIds;
            output = report.unloadableContentEntryMessageIds;
            report = r100[zulu];
            variable100 = options.bind(tango)(report);
            variable45 = variable100.useStateFromStores;
            report = _closure1_slot54;
            update = new Array(1);
            update[0] = report;
            report = function() {
                _fun00127: for(var _fun00128_ip = 0; ; ) switch(_fun00128_ip) {
 0:
                    mike = _closure1_slot54;
                    entity = mike.getCurrentUser;
                    tango = entity.bind(mike)();
                    entity = null;
                    zulu = entity == tango;
                    mike = undefined;
                    if(zulu) { _fun00128_ip = 37; continue _fun00127 }
 27:
                    zulu = tango.isStaff;
                    mike = zulu.bind(tango)();
 37:
                    entity = entity != mike;
                    if(!entity) { _fun00128_ip = 47; continue _fun00127 }
 44:
                    entity = mike;
 47:
                    return entity;
                }
            };
            variable100 = variable45.bind(variable100)(update, report);
            report = 112;
            report = r100[report];
            update = options.bind(tango)(report);
            report = update.useShouldFilterKeywords;
            update = report.bind(update)();
            zulu = r100[zulu];
            variable45 = options.bind(tango)(zulu);
            report = variable45.useStateFromStores;
            r101 = _closure1_slot23;
            zulu = new Array(1);
            zulu[0] = r101;
            entity = function() {
                mike = _closure1_slot23;
                entity = mike.getVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            variable45 = report.bind(variable45)(zulu, entity);
            zulu = _closure1_slot73;
            report = 113;
            entity = r100[report];
            mike = mike.bind(tango)(entity);
            entity = {};
            report = r100[report];
            report = options.bind(tango)(report);
            report = report.Profiles;
            report = report.Messages;
            entity['profile'] = report;
            report = golf.isThread;
            golf = report.bind(golf)();
            if(!golf) { _fun00094_ip = 3420; continue _fun00093 }
 3381:
            r100 = _closure1_slot72;
            options = _closure1_slot1;
            r101 = _closure1_slot2;
            report = 114;
            report = r101[report];
            options = options.bind(tango)(report);
            report = {};
            r101 = true;
            report['absolute'] = r101;
            golf = r100.bind(tango)(options, report);
 3420:
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot72;
            golf = _closure1_slot75;
            oscar = {};
            r100 = argBar;
            oscar['ref'] = r100;
            oscar['theme'] = verify;
            oscar['isStaff'] = variable100;
            oscar['animateEmoji'] = variable99;
            oscar['animateStickers'] = variable98;
            oscar['containerWidth'] = variable97;
            oscar['gifAutoPlay'] = variable96;
            oscar['inlineAttachmentMedia'] = variable95;
            oscar['inlineEmbedMedia'] = variable94;
            oscar['renderEmbeds'] = variable93;
            oscar['renderReactions'] = variable92;
            if(!variable90) { _fun00094_ip = 3501; continue _fun00093 }
 3498:
            variable90 = !variable91;
 3501:
            oscar['renderInlineForwardButton'] = variable90;
            oscar['renderForwardBreadcrumb'] = variable89;
            oscar['developerMode'] = variable88;
            oscar['roleStyle'] = variable87;
            oscar['guildId'] = variable86;
            oscar['currentUserId'] = variable85;
            oscar['channelId'] = variable84;
            oscar['isMessagesReady'] = variable41;
            oscar['isMessagesCached'] = variable83;
            oscar['isMessagesAckable'] = variable82;
            oscar['isMessageRequest'] = variable81;
            oscar['isSpamMessageRequest'] = variable80;
            oscar['messageAuthorActivities'] = variable79;
            oscar['invites'] = variable78;
            oscar['appDirectoryEmbedApplications'] = variable77;
            oscar['invalidAppDirectoryEmbedApplicationIds'] = variable76;
            oscar['invalidApplicationIds'] = variable75;
            oscar['applicationAssetFetchingIds'] = variable74;
            oscar['messagesWithActivitiesLaunching'] = variable73;
            oscar['activityInstanceIds'] = variable72;
            oscar['activityParticipants'] = variable71;
            oscar['activityInstancePresenceDetails'] = variable70;
            oscar['appDirectoryEmbedApplicationFetchStates'] = variable69;
            oscar['mediaPostPreviewEmbeds'] = variable68;
            oscar['guildTemplates'] = variable67;
            oscar['buildOverrides'] = variable66;
            oscar['quests'] = variable65;
            oscar['isFetchingCurrentQuests'] = variable64;
            oscar['editingMessageId'] = variable63;
            oscar['replyingMessageId'] = variable62;
            oscar['oldestUnreadMessageId'] = variable61;
            oscar['canChat'] = variable60;
            oscar['canSendMessages'] = variable59;
            oscar['isCallActive'] = variable58;
            oscar['voiceStateChannelId'] = variable57;
            oscar['resolvingGiftCodes'] = variable56;
            oscar['resolvedGiftCodes'] = variable55;
            oscar['acceptingGiftCodes'] = variable54;
            oscar['participantsLength'] = variable53;
            oscar['uploads'] = variable52;
            oscar['repliedIds'] = variable51;
            oscar['useReducedMotion'] = variable50;
            oscar['channelThreadsVersion'] = variable49;
            oscar['rsvpVersion'] = variable48;
            oscar['failedMessagesVersion'] = variable47;
            oscar['communicationDisabledVersion'] = variable46;
            oscar['forwardGuildsVersion'] = variable45;
            oscar['interactionStates'] = variable44;
            oscar['interactionComponentStates'] = variable43;
            oscar['interactionComponentStatesVersion'] = variable42;
            if(!variable40) { _fun00094_ip = 3755; continue _fun00093 }
 3752:
            variable40 = variable41;
 3755:
            oscar['hasLoadedExperiments'] = variable40;
            oscar['guildSystemChannelFlags'] = variable39;
            oscar['currentUserCommunicationDisabled'] = variable38;
            oscar['renderCommunicationDisabled'] = variable37;
            oscar['userSettingsLocale'] = variable36;
            oscar['paymentsBlocked'] = quebec;
            oscar['isFollowingForumPost'] = equality;
            oscar['showMediaPostSharePrompt'] = whiskey;
            oscar['showPushFeedback'] = sierra;
            sierra = 'initializing';
            sierra = sierra !== lima;
            oscar['cacheStoreLoaded'] = sierra;
            oscar['androidKeyboardHeight'] = status;
            if(!(foxtrot != target)) { _fun00094_ip = 3827; continue _fun00093 }
 3824:
            papa = target;
 3827:
            oscar['selectedSummary'] = papa;
            oscar['keyboardType'] = context;
            oscar['shouldTrackAnnouncementMessageViews'] = record;
            oscar['shouldObscureSpoiler'] = config;
            oscar['shouldDisableInteractiveComponents'] = sequence;
            oscar['channelPolls'] = vacuum;
            oscar['explicitMediaFalsePositiveInfo'] = control;
            oscar['threadStartingReferenceMessage'] = source;
            oscar['shouldFilterKeywords'] = update;
            oscar['fromICYMITab'] = echo;
            oscar['unloadedContentEntryMessageIds'] = result;
            oscar['unloadableContentEntryMessageIds'] = output;
            oscar['applications'] = sizing;
            oscar['resolvedReferralTrialOfferIds'] = kilo;
            kilo = foxtrot == backup;
            foxtrot = undefined;
            if(kilo) { _fun00094_ip = 3911; continue _fun00093 }
 3906:
            foxtrot = backup.id;
 3911:
            oscar['referralTrialOfferId'] = foxtrot;
            oscar['isPremiumTier2User'] = yankee;
            yankee = 'all';
            yankee = yankee === romeo;
            oscar['messageShortcutsEnabled'] = yankee;
            r105 = oscar;
            r104 = offset;
            offset = copyDataProperties(r105, r104);
            oscar = options.bind(tango)(golf, oscar, verify);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 115;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/chat/Messages.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();