// app/modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun127717: for(var _fun127717_ip = 0; ; ) switch(_fun127717_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun127717_ip = 46; continue _fun127717 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun127717_ip = 55; continue _fun127717 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun127717_ip = 345; continue _fun127717 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun127717_ip = 323; continue _fun127717 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun127717_ip = 283; continue _fun127717 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun127717_ip = 270; continue _fun127717 }
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
            if(!golf) { _fun127717_ip = 163; continue _fun127717 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun127717_ip = 179; continue _fun127717 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun127717_ip = 249; continue _fun127717 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun127717_ip = 249; continue _fun127717 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun127717_ip = 234; continue _fun127717 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun127717_ip = 247; continue _fun127717 }
 234:
            verify = _closure1_slot27;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun127717_ip = 265; continue _fun127717;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun127717_ip = 283; continue _fun127717;
 270:
            golf = _closure1_slot27;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun127717_ip = 323; continue _fun127717 }
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
            if(!tango) { _fun127717_ip = 330; continue _fun127717 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun127718: for(var _fun127718_ip = 0; ; ) switch(_fun127718_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun127718_ip = 56; continue _fun127718 }
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
                    _fun127718_ip = 67; continue _fun127718;
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
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun127719: for(var _fun127719_ip = 0; ; ) switch(_fun127719_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun127719_ip = 23; continue _fun127719 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun127719_ip = 33; continue _fun127719 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun127719_ip = 70; continue _fun127719 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun127719_ip = 55; continue _fun127719 }
 70:
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun127720: for(var _fun127720_ip = 0; ; ) switch(_fun127720_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot29;
            entity = entity.bind(zulu)();
            if(entity) { _fun127720_ip = 51; continue _fun127720 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun127720_ip = 92; continue _fun127720;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun127720_ip = 71; continue _fun127720 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun127721: for(var _fun127721_ip = 0; ; ) switch(_fun127721_ip) {
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
            _fun127721_ip = 76; continue _fun127721;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: _superPropGet
        _fun127724: for(var _fun127724_ip = 0; ; ) switch(_fun127724_ip) {
 0:
            report = argFoo;
            golf = argBaz;
            var _closure2_slot0 = golf;
            oscar = _closure1_slot8;
            zulu = _closure1_slot7;
            entity = 1;
            tango = 3;
            options = entity & tango;
            entity = report;
            if(!options) { _fun127724_ip = 44; continue _fun127724 }
 39:
            entity = report.prototype;
 44:
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = argBar;
            entity = oscar.bind(report)(zulu, entity, golf);
            var _closure2_slot1 = entity;
            zulu = 2;
            zulu = zulu & tango;
            if(!zulu) { _fun127724_ip = 82; continue _fun127724 }
 75:
            entity = function(argFoo) {
                tango = _closure2_slot1;
                zulu = tango.apply;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
 82:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.useChannelDetailsStore;
    var _closure1_slot12 = options;
    tango = tango.getIsChannelDetailsSearchActive;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isTextChannel;
    var _closure1_slot15 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot21 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot22 = tango;
    tango = 19;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageStates;
    var _closure1_slot23 = tango;
    tango = function(argFoo) { // Original name: log
        _fun127726: for(var _fun127726_ip = 0; ; ) switch(_fun127726_ip) {
 0:
            golf = 0;
            entity = copyRestArgs(golf);
            entity = _closure1_slot24;
            zulu = null;
            if(!(zulu == entity)) { _fun127726_ip = 64; continue _fun127726 }
 19:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 20;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.getQuestLogger;
            zulu = {};
            oscar = 'QuestMobileEmbedVisibilityManager';
            zulu['location'] = oscar;
            entity = tango.bind(report)(zulu);
 64:
            var _closure1_slot24 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = tango;
    tango = 32;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: QuestMobileEmbedVisibilityManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot4;
            oscar = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(golf, oscar);
            report = _closure1_slot28;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = report.bind(tango)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 21;
            report = golf[report];
            golf = oscar.bind(tango)(report);
            report = {};
            oscar = 50;
            report['max'] = oscar;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            foxtrot = oscar;
            romeo = report;
            report = new foxtrot[golf](romeo, yankee);
            report = report instanceof Object ? report : oscar;
            entity['impressionCache'] = report;
            report = {};
            entity['questStatuses'] = report;
            entity['chatChannelId'] = tango;
            entity['previousChatChannelId'] = tango;
            report = {};
            entity['channelsWithChatOpen'] = report;
            entity['_isEnabled'] = tango;
            tango = function(argFoo) {
                _fun127729: for(var _fun127729_ip = 0; ; ) switch(_fun127729_ip) {
 0:
                    entity = argFoo;
                    entity = entity.payload;
                    zulu = entity.visibleMessages;
                    entity = entity.source;
                    mike = _closure3_slot0;
                    mike = mike.isEnabled;
                    if(!mike) { _fun127729_ip = 322; continue _fun127729 }
 39:
                    mike = _closure1_slot25;
                    offset = undefined;
                    mike = mike.bind(offset)();
                    tango = new Array(0);
                    mike = _closure1_slot26;
                    verify = mike.bind(offset)(zulu);
                    zulu = verify.bind(offset)();
                    mike = zulu.done;
                    options = 0;
                    golf = global;
                    oscar = 100;
                    report = 22;
                    if(mike) { _fun127729_ip = 300; continue _fun127729 }
 90:
                    mike = zulu.value;
                    backup = mike.message;
                    romeo = mike.percentVisible;
                    sizing = mike.state;
                    mike = backup.codedLinks;
                    mike = mike.length;
                    mike = mike <= options;
                    if(mike) { _fun127729_ip = 167; continue _fun127729 }
 129:
                    foxtrot = _closure1_slot23;
                    output = foxtrot.SENDING;
                    kilo = new Array(2);
                    kilo[0] = output;
                    foxtrot = foxtrot.SEND_FAILED;
                    kilo[1] = foxtrot;
                    foxtrot = kilo.includes;
                    mike = foxtrot.bind(kilo)(sizing);
 167:
                    if(mike) { _fun127729_ip = 282; continue _fun127729 }
 170:
                    foxtrot = _closure1_slot25;
                    mike = backup.id;
                    mike = backup.content;
                    sizing = golf.Math;
                    kilo = sizing.round;
                    mike = oscar * romeo;
                    mike = kilo.bind(sizing)(mike);
                    mike = foxtrot.bind(offset)(mike);
                    foxtrot = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[report];
                    mike = foxtrot.bind(offset)(mike);
                    mike = mike.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
                    if(!(romeo > mike)) { _fun127729_ip = 282; continue _fun127729 }
 236:
                    romeo = tango.push;
                    foxtrot = _closure3_slot0;
                    mike = foxtrot.findQuestEmbedsInMessage;
                    echo = mike.bind(foxtrot)(backup);
                    mike = new Array(0);
                    update = mike;
                    result = 0;
                    foxtrot = arraySpread(update, echo, result);
                    update = romeo;
                    echo = mike;
                    result = tango;
                    mike = apply(update, echo, result);
 282:
                    romeo = verify.bind(offset)();
                    mike = romeo.done;
                    zulu = romeo;
                    if(!mike) { _fun127729_ip = 90; continue _fun127729 }
 300:
                    zulu = _closure3_slot0;
                    mike = zulu.updateImpressionsForVisibleEmbeds;
                    entity = {};
                    entity['visibleEmbeds'] = tango;
                    entity = mike.bind(zulu)(entity);
 322:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVisibleMessagesChanged'] = tango;
            tango = function(argFoo) {
                zulu = argFoo;
                var _closure4_slot0 = zulu;
                entity = new Array(0);
                var _closure4_slot1 = entity;
                tango = global;
                tango = tango.Set;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                golf = report;
                tango = new golf[tango](oscar);
                tango = tango instanceof Object ? tango : report;
                var _closure4_slot2 = tango;
                tango = zulu.codedLinks;
                zulu = tango.forEach;
                mike = function(argFoo, argBar) {
                    _fun127731: for(var _fun127731_ip = 0; ; ) switch(_fun127731_ip) {
 0:
                        mike = argFoo;
                        tango = mike.type;
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 23;
                        zulu = zulu[entity];
                        entity = undefined;
                        zulu = report.bind(entity)(zulu);
                        zulu = zulu.CodedLinkType;
                        zulu = zulu.QUESTS_EMBED;
                        if(!(tango === zulu)) { _fun127731_ip = 139; continue _fun127731 }
 49:
                        tango = mike.code;
                        report = _closure4_slot2;
                        zulu = report.has;
                        zulu = zulu.bind(report)(tango);
                        if(zulu) { _fun127731_ip = 139; continue _fun127731 }
 74:
                        oscar = _closure4_slot1;
                        report = oscar.push;
                        zulu = {};
                        zulu['questId'] = tango;
                        golf = argBar;
                        zulu['questContentPosition'] = golf;
                        golf = _closure4_slot0;
                        options = golf.id;
                        zulu['messageId'] = options;
                        golf = golf.channel_id;
                        zulu['channelId'] = golf;
                        zulu = report.bind(oscar)(zulu);
                        zulu = _closure4_slot2;
                        mike = zulu.add;
                        mike = mike.bind(zulu)(tango);
 139:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['findQuestEmbedsInMessage'] = tango;
            tango = function(argFoo) {
                _fun127732: for(var _fun127732_ip = 0; ; ) switch(_fun127732_ip) {
 0:
                    entity = argFoo;
                    report = entity.visibleEmbeds;
                    mike = _closure1_slot26;
                    entity = undefined;
                    verify = mike.bind(entity)(report);
                    tango = verify.bind(entity)();
                    zulu = tango.done;
                    options = 24;
                    golf = false;
                    oscar = null;
                    if(zulu) { _fun127732_ip = 205; continue _fun127732 }
 48:
                    zulu = tango.value;
                    romeo = zulu.questId;
                    sizing = zulu.questContentPosition;
                    backup = zulu.messageId;
                    kilo = zulu.channelId;
                    yankee = _closure1_slot21;
                    zulu = yankee.getQuest;
                    foxtrot = zulu.bind(yankee)(romeo);
                    if(!(oscar != foxtrot)) { _fun127732_ip = 203; continue _fun127732 }
 94:
                    romeo = _closure3_slot0;
                    yankee = romeo.ensureImpression;
                    zulu = {};
                    zulu['quest'] = foxtrot;
                    result = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[options];
                    output = result.bind(entity)(output);
                    output = output.QuestContent;
                    output = output.QUEST_EMBED_MOBILE;
                    zulu['questContent'] = output;
                    zulu['triggeredByStatusChange'] = golf;
                    zulu['questContentPosition'] = sizing;
                    zulu['channelId'] = kilo;
                    zulu['messageId'] = backup;
                    foxtrot = foxtrot.id;
                    zulu['questId'] = foxtrot;
                    zulu['questDecisionId'] = entity;
                    zulu = yankee.bind(romeo)(zulu);
                    yankee = verify.bind(entity)();
                    zulu = yankee.done;
                    tango = yankee;
                    if(zulu) { _fun127732_ip = 205; continue _fun127732 }
 198:
                    _fun127732_ip = 48; continue _fun127732;
 203:
                    return entity;
 205:
                    tango = _closure3_slot0;
                    zulu = tango.stopMany;
                    mike = {};
                    mike['visibleEmbeds'] = report;
                    report = true;
                    mike['shouldDeleteHiddenEmbeds'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity['updateImpressionsForVisibleEmbeds'] = tango;
            tango = function(argFoo) {
                _fun127733: for(var _fun127733_ip = 0; ; ) switch(_fun127733_ip) {
 0:
                    tango = argFoo;
                    options = tango.quest;
                    zulu = null;
                    mike = Object.create(zulu);
                    entity = 0;
                    mike['quest'] = entity;
                    backup = {};
                    foxtrot = tango;
                    romeo = mike;
                    oscar = copyDataProperties(backup, foxtrot, romeo);
                    entity = _closure3_slot0;
                    tango = entity.getCacheKey;
                    report = tango.bind(entity)(oscar);
                    tango = entity.impressionCache;
                    entity = tango.get;
                    offset = entity.bind(tango)(report);
                    tango = zulu != offset;
                    entity = undefined;
                    golf = undefined;
                    if(!tango) { _fun127733_ip = 85; continue _fun127733 }
 78:
                    tango = zulu != offset;
                    golf = offset;
 85:
                    if(!tango) { _fun127733_ip = 94; continue _fun127733 }
 88:
                    tango = golf.isRunning;
 94:
                    if(tango) { _fun127733_ip = 259; continue _fun127733 }
 100:
                    tango = offset;
                    if(!(zulu != tango)) { _fun127733_ip = 131; continue _fun127733 }
 107:
                    verify = offset.clone;
                    golf = {};
                    yankee = oscar.triggeredByStatusChange;
                    golf['triggeredByStatusChange'] = yankee;
                    tango = verify.bind(offset)(golf);
 131:
                    if(!(zulu == tango)) { _fun127733_ip = 204; continue _fun127733 }
 135:
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 22;
                    zulu = verify[zulu];
                    zulu = golf.bind(entity)(zulu);
                    golf = zulu.QuestContentImpression;
                    zulu = {};
                    zulu['questOrQuests'] = options;
                    backup = zulu;
                    foxtrot = oscar;
                    oscar = copyDataProperties(backup, foxtrot);
                    oscar = golf.prototype;
                    oscar = Object.create(oscar, {constructor: {value: golf}});
                    kilo = oscar;
                    backup = zulu;
                    zulu = new kilo[golf](backup, foxtrot);
                    tango = zulu instanceof Object ? zulu : oscar;
 204:
                    zulu = _closure3_slot0;
                    zulu = zulu.isChatViewable;
                    if(!zulu) { _fun127733_ip = 226; continue _fun127733 }
 217:
                    oscar = tango.isRunning;
                    zulu = !oscar;
 226:
                    if(!zulu) { _fun127733_ip = 238; continue _fun127733 }
 229:
                    zulu = tango.start;
                    zulu = zulu.bind(tango)();
 238:
                    mike = _closure3_slot0;
                    zulu = mike.impressionCache;
                    mike = zulu.set;
                    mike = mike.bind(zulu)(report, tango);
 259:
                    return entity;
                }
            };
            entity['ensureImpression'] = tango;
            tango = function(argFoo) {
                _fun127734: for(var _fun127734_ip = 0; ; ) switch(_fun127734_ip) {
 0:
                    entity = argFoo;
                    tango = entity.key;
                    zulu = entity.shouldDelete;
                    entity = _closure3_slot0;
                    report = entity.impressionCache;
                    entity = report.get;
                    golf = entity.bind(report)(tango);
                    oscar = null;
                    entity = oscar == golf;
                    report = undefined;
                    options = undefined;
                    if(entity) { _fun127734_ip = 56; continue _fun127734 }
 50:
                    options = golf.isRunning;
 56:
                    entity = oscar != options;
                    if(!entity) { _fun127734_ip = 66; continue _fun127734 }
 63:
                    entity = options;
 66:
                    if(!(oscar != golf)) { _fun127734_ip = 80; continue _fun127734 }
 70:
                    oscar = golf.stop;
                    oscar = oscar.bind(golf)();
 80:
                    if(!zulu) { _fun127734_ip = 115; continue _fun127734 }
 83:
                    zulu = _closure1_slot25;
                    zulu = zulu.bind(report)();
                    mike = _closure3_slot0;
                    zulu = mike.impressionCache;
                    mike = zulu.del;
                    mike = mike.bind(zulu)(tango);
 115:
                    return entity;
                }
            };
            entity['stopOne'] = tango;
            tango = function() {
                _fun127735: for(var _fun127735_ip = 0; ; ) switch(_fun127735_ip) {
 0:
                    mike = arguments[0];
                    entity = undefined;
                    if(!(mike === entity)) { _fun127735_ip = 30; continue _fun127735 }
 9:
                    zulu = {};
                    tango = new Array(0);
                    zulu['visibleEmbeds'] = tango;
                    tango = false;
                    zulu['shouldDeleteHiddenEmbeds'] = tango;
                    mike = zulu;
 30:
                    report = mike.visibleEmbeds;
                    if(!(report === entity)) { _fun127735_ip = 44; continue _fun127735 }
 40:
                    report = new Array(0);
 44:
                    golf = mike.shouldDeleteHiddenEmbeds;
                    if(!(golf === entity)) { _fun127735_ip = 56; continue _fun127735 }
 54:
                    golf = false;
 56:
                    mike = global;
                    tango = mike.Set;
                    zulu = report.map;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = zulu.getCacheKey;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    yankee = zulu.bind(report)(mike);
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    romeo = zulu;
                    mike = new romeo[tango](yankee, offset);
                    oscar = mike instanceof Object ? mike : zulu;
                    zulu = _closure1_slot26;
                    mike = _closure3_slot0;
                    tango = mike.impressionCache;
                    mike = tango.keys;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun127735_ip = 208; continue _fun127735 }
 149:
                    offset = zulu.value;
                    mike = oscar.has;
                    mike = mike.bind(oscar)(offset);
                    if(mike) { _fun127735_ip = 193; continue _fun127735 }
 167:
                    verify = _closure3_slot0;
                    options = verify.stopOne;
                    mike = {};
                    mike['key'] = offset;
                    mike['shouldDelete'] = golf;
                    mike = options.bind(verify)(mike);
 193:
                    options = tango.bind(entity)();
                    mike = options.done;
                    zulu = options;
                    if(!mike) { _fun127735_ip = 149; continue _fun127735 }
 208:
                    return entity;
                }
            };
            entity['stopMany'] = tango;
            tango = function(argFoo) {
                mike = argFoo;
                entity = mike.channelId;
                tango = mike.messageId;
                mike = mike.questId;
                zulu = ':';
                entity = entity + zulu;
                entity = entity + tango;
                entity = entity + zulu;
                entity = entity + mike;
                return entity;
            };
            entity['getCacheKey'] = tango;
            tango = function(argFoo) {
                zulu = argFoo;
                mike = zulu.split;
                entity = ':';
                tango = mike.bind(zulu)(entity);
                zulu = _closure1_slot3;
                mike = undefined;
                entity = 3;
                zulu = zulu.bind(mike)(tango, entity);
                entity = {};
                mike = 0;
                mike = zulu[mike];
                entity['channelId'] = mike;
                mike = 1;
                mike = zulu[mike];
                entity['messageId'] = mike;
                mike = 2;
                mike = zulu[mike];
                entity['questId'] = mike;
                return entity;
            };
            entity['parseCacheKey'] = tango;
            tango = function() {
                _fun127739: for(var _fun127739_ip = 0; ; ) switch(_fun127739_ip) {
 0:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 25;
                    entity = report[entity];
                    zulu = undefined;
                    mike = tango.bind(zulu)(entity);
                    entity = mike.isChannelFocused;
                    entity = entity.bind(mike)();
                    mike = 26;
                    mike = report[mike];
                    zulu = tango.bind(zulu)(mike);
                    mike = zulu.getCurrentNavigationRouteName;
                    zulu = mike.bind(zulu)();
                    if(!entity) { _fun127739_ip = 68; continue _fun127739 }
 60:
                    mike = 'channel';
                    entity = mike === zulu;
 68:
                    return entity;
                }
            };
            entity['isOnChannelNavigationRoute'] = tango;
            tango = function() {
                _fun127740: for(var _fun127740_ip = 0; ; ) switch(_fun127740_ip) {
 0:
                    entity = _closure3_slot0;
                    zulu = entity.chatChannelId;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun127740_ip = 46; continue _fun127740 }
 22:
                    tango = _closure1_slot13;
                    mike = _closure3_slot0;
                    zulu = mike.chatChannelId;
                    mike = undefined;
                    entity = tango.bind(mike)(zulu);
 46:
                    return entity;
                }
            };
            entity['isSearchShowing'] = tango;
            tango = function() {
                _fun127741: for(var _fun127741_ip = 0; ; ) switch(_fun127741_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.chatChannelId;
                    mike = null;
                    if(!(mike != entity)) { _fun127741_ip = 530; continue _fun127741 }
 22:
                    report = _closure1_slot10;
                    zulu = report.isOpen;
                    zulu = zulu.bind(report)();
                    if(zulu) { _fun127741_ip = 516; continue _fun127741 }
 45:
                    report = _closure1_slot19;
                    zulu = report.getState;
                    oscar = zulu.bind(report)();
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 27;
                    report = report[zulu];
                    zulu = undefined;
                    report = golf.bind(zulu)(report);
                    report = report.AppStates;
                    report = report.ACTIVE;
                    if(!(oscar === report)) { _fun127741_ip = 504; continue _fun127741 }
 100:
                    golf = _closure1_slot16;
                    oscar = golf.getChannel;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    report = oscar.bind(golf)(report);
                    oscar = mike == report;
                    options = undefined;
                    if(oscar) { _fun127741_ip = 138; continue _fun127741 }
 133:
                    options = report.type;
 138:
                    golf = _closure1_slot11;
                    oscar = golf.getChatOpen;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    golf = oscar.bind(golf)(report);
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    offset = 28;
                    report = report[offset];
                    report = oscar.bind(zulu)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_STAGE_VOICE;
                    oscar = options === report;
                    if(!oscar) { _fun127741_ip = 205; continue _fun127741 }
 202:
                    oscar = golf;
 205:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 26;
                    report = yankee[report];
                    verify = verify.bind(zulu)(report);
                    report = verify.getOpenModalKey;
                    verify = report.bind(verify)();
                    report = _closure3_slot0;
                    romeo = report.chatChannelId;
                    report = global;
                    report = report.HermesInternal;
                    yankee = report.concat;
                    report = 'voice-channel-';
                    report = yankee.bind(report)(romeo);
                    if(!(mike != verify)) { _fun127741_ip = 289; continue _fun127741 }
 273:
                    if(!(verify !== report)) { _fun127741_ip = 289; continue _fun127741 }
 277:
                    report = _closure1_slot25;
                    report = report.bind(zulu)();
                    report = false;
                    return report;
 289:
                    verify = _closure3_slot0;
                    report = verify.isSearchShowing;
                    report = report.bind(verify)();
                    if(report) { _fun127741_ip = 492; continue _fun127741 }
 309:
                    verify = _closure1_slot18;
                    report = verify.getAlert;
                    report = report.bind(verify)();
                    if(!(mike == report)) { _fun127741_ip = 480; continue _fun127741 }
 330:
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = verify.bind(zulu)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_VOICE;
                    report = options === report;
                    if(!report) { _fun127741_ip = 369; continue _fun127741 }
 366:
                    report = golf;
 369:
                    mike = mike != options;
                    if(!mike) { _fun127741_ip = 385; continue _fun127741 }
 376:
                    golf = _closure1_slot15;
                    mike = golf.bind(zulu)(options);
 385:
                    options = _closure1_slot14;
                    golf = options.getState;
                    options = golf.bind(options)();
                    golf = options.isAnyVoicePanelOpen;
                    golf = golf.bind(options)();
                    verify = _closure3_slot0;
                    options = verify.isOnChannelNavigationRoute;
                    options = options.bind(verify)();
                    if(!mike) { _fun127741_ip = 429; continue _fun127741 }
 426:
                    mike = options;
 429:
                    if(!mike) { _fun127741_ip = 435; continue _fun127741 }
 432:
                    mike = !golf;
 435:
                    if(!mike) { _fun127741_ip = 441; continue _fun127741 }
 438:
                    mike = !oscar;
 441:
                    if(!mike) { _fun127741_ip = 447; continue _fun127741 }
 444:
                    mike = !report;
 447:
                    if(mike) { _fun127741_ip = 453; continue _fun127741 }
 450:
                    mike = oscar;
 453:
                    if(mike) { _fun127741_ip = 459; continue _fun127741 }
 456:
                    mike = report;
 459:
                    report = _closure1_slot25;
                    tango = _closure3_slot0;
                    tango = tango.chatChannelId;
                    tango = report.bind(zulu)(tango);
                    return mike;
 480:
                    mike = _closure1_slot25;
                    mike = mike.bind(zulu)();
                    mike = false;
                    return mike;
 492:
                    mike = _closure1_slot25;
                    mike = mike.bind(zulu)();
                    mike = false;
                    return mike;
 504:
                    mike = _closure1_slot25;
                    mike = mike.bind(zulu)();
                    mike = false;
                    return mike;
 516:
                    mike = _closure1_slot25;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    entity = false;
                    return entity;
 530:
                    mike = _closure1_slot25;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    entity = false;
                    return entity;
                }
            };
            entity['getIsChatViewable'] = tango;
            tango = function() {
                _fun127742: for(var _fun127742_ip = 0; ; ) switch(_fun127742_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure1_slot26;
                    mike = _closure3_slot0;
                    tango = mike.impressionCache;
                    mike = tango.keys;
                    mike = mike.bind(tango)();
                    golf = zulu.bind(entity)(mike);
                    zulu = golf.bind(entity)();
                    mike = zulu.done;
                    oscar = false;
                    report = null;
                    tango = zulu;
                    zulu = undefined;
                    if(mike) { _fun127742_ip = 271; continue _fun127742 }
 68:
                    foxtrot = tango.value;
                    mike = _closure3_slot0;
                    offset = mike.impressionCache;
                    mike = offset.get;
                    backup = mike.bind(offset)(foxtrot);
                    if(!(report != backup)) { _fun127742_ip = 253; continue _fun127742 }
 100:
                    offset = _closure3_slot0;
                    mike = offset.parseCacheKey;
                    mike = mike.bind(offset)(foxtrot);
                    mike = mike.channelId;
                    offset = backup.isRunning;
                    if(!offset) { _fun127742_ip = 170; continue _fun127742 }
 129:
                    yankee = _closure1_slot25;
                    romeo = _closure3_slot0;
                    offset = romeo.chatChannelId;
                    offset = yankee.bind(entity)(offset);
                    yankee = romeo.stopOne;
                    offset = {};
                    offset['key'] = foxtrot;
                    offset['shouldDelete'] = oscar;
                    offset = yankee.bind(romeo)(offset);
 170:
                    offset = _closure3_slot0;
                    offset = offset.chatChannelId;
                    zulu = mike;
                    if(!(zulu === offset)) { _fun127742_ip = 253; continue _fun127742 }
 187:
                    romeo = _closure1_slot25;
                    offset = _closure3_slot0;
                    yankee = offset.chatChannelId;
                    yankee = romeo.bind(entity)(yankee);
                    romeo = backup.clone;
                    yankee = {};
                    yankee['triggeredByStatusChange'] = oscar;
                    romeo = romeo.bind(backup)(yankee);
                    yankee = romeo.start;
                    yankee = yankee.bind(romeo)();
                    yankee = offset.impressionCache;
                    offset = yankee.set;
                    offset = offset.bind(yankee)(foxtrot, romeo);
                    zulu = mike;
 253:
                    offset = golf.bind(entity)();
                    mike = offset.done;
                    tango = offset;
                    if(!mike) { _fun127742_ip = 68; continue _fun127742 }
 271:
                    return entity;
                }
            };
            entity['updateImpressionsForChatBecameViewable'] = tango;
            tango = function() {
                _fun127743: for(var _fun127743_ip = 0; ; ) switch(_fun127743_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.isChatViewable;
                    if(mike) { _fun127743_ip = 45; continue _fun127743 }
 16:
                    zulu = _closure1_slot25;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    zulu = _closure3_slot0;
                    mike = zulu.stopMany;
                    mike = mike.bind(zulu)();
                    _fun127743_ip = 59; continue _fun127743;
 45:
                    mike = _closure3_slot0;
                    entity = mike.updateImpressionsForChatBecameViewable;
                    entity = entity.bind(mike)();
 59:
                    entity = undefined;
                    return entity;
                }
            };
            entity['refreshImpressions'] = tango;
            tango = function() {
                _fun127744: for(var _fun127744_ip = 0; ; ) switch(_fun127744_ip) {
 0:
                    entity = _closure3_slot0;
                    mike = entity.getIsChatViewable;
                    mike = mike.bind(entity)();
                    entity = entity.isChatViewable;
                    entity = mike !== entity;
                    if(!entity) { _fun127744_ip = 65; continue _fun127744 }
 30:
                    report = _closure1_slot25;
                    tango = undefined;
                    tango = report.bind(tango)();
                    zulu = _closure3_slot0;
                    zulu['isChatViewable'] = mike;
                    mike = zulu.refreshImpressions;
                    mike = mike.bind(zulu)();
                    entity = true;
 65:
                    return entity;
                }
            };
            entity['checkChatViewable'] = tango;
            tango = function() {
                _fun127745: for(var _fun127745_ip = 0; ; ) switch(_fun127745_ip) {
 0:
                    zulu = _closure3_slot0;
                    mike = zulu.isOnChannelNavigationRoute;
                    mike = mike.bind(zulu)();
                    zulu = zulu.wasOnChannelNavigationRoute;
                    if(!(mike !== zulu)) { _fun127745_ip = 60; continue _fun127745 }
 27:
                    tango = _closure1_slot25;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
                    entity = _closure3_slot0;
                    zulu = entity.checkChatViewable;
                    zulu = zulu.bind(entity)();
                    entity['wasOnChannelNavigationRoute'] = mike;
 60:
                    entity = undefined;
                    return entity;
                }
            };
            entity['checkIsOnChannelNavigationRoute'] = tango;
            tango = function() {
                _fun127746: for(var _fun127746_ip = 0; ; ) switch(_fun127746_ip) {
 0:
                    zulu = _closure3_slot0;
                    mike = zulu.isSearchShowing;
                    mike = mike.bind(zulu)();
                    zulu = zulu.wasSearchShowing;
                    if(!(mike !== zulu)) { _fun127746_ip = 60; continue _fun127746 }
 27:
                    tango = _closure1_slot25;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
                    entity = _closure3_slot0;
                    zulu = entity.checkChatViewable;
                    zulu = zulu.bind(entity)();
                    entity['wasSearchShowing'] = mike;
 60:
                    entity = undefined;
                    return entity;
                }
            };
            entity['checkSearchShowing'] = tango;
            tango = function(argFoo) {
                _fun127747: for(var _fun127747_ip = 0; ; ) switch(_fun127747_ip) {
 0:
                    tango = _closure3_slot0;
                    entity = tango.chatChannelId;
                    tango['previousChatChannelId'] = entity;
                    entity = argFoo;
                    tango['chatChannelId'] = entity;
                    report = _closure1_slot25;
                    entity = tango.previousChatChannelId;
                    zulu = tango.chatChannelId;
                    entity = undefined;
                    zulu = report.bind(entity)(zulu);
                    report = tango.stopMany;
                    zulu = {};
                    oscar = true;
                    zulu['shouldDeleteHiddenEmbeds'] = oscar;
                    zulu = report.bind(tango)(zulu);
                    zulu = tango.checkChatViewable;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun127747_ip = 101; continue _fun127747 }
 87:
                    zulu = _closure3_slot0;
                    mike = zulu.refreshImpressions;
                    mike = mike.bind(zulu)();
 101:
                    return entity;
                }
            };
            entity['onChannelChanged'] = tango;
            tango = function() {
                _fun127748: for(var _fun127748_ip = 0; ; ) switch(_fun127748_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 26;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getOpenModalKey;
                    zulu = mike.bind(zulu)();
                    report = _closure3_slot0;
                    report = report.previouslyOpenModalKey;
                    if(!(zulu !== report)) { _fun127748_ip = 87; continue _fun127748 }
 52:
                    report = _closure1_slot25;
                    mike = _closure3_slot0;
                    tango = mike.previouslyOpenModalKey;
                    tango = report.bind(entity)(tango);
                    tango = mike.checkChatViewable;
                    tango = tango.bind(mike)();
                    mike['previouslyOpenModalKey'] = zulu;
 87:
                    return entity;
                }
            };
            entity['checkOpenModalKey'] = tango;
            tango = function() {
                _fun127749: for(var _fun127749_ip = 0; ; ) switch(_fun127749_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    mike = _closure3_slot0;
                    mike = mike.isEnabled;
                    if(!mike) { _fun127749_ip = 497; continue _fun127749 }
 32:
                    mike = _closure1_slot21;
                    foxtrot = mike.quests;
                    mike = global;
                    tango = mike.Set;
                    mike = foxtrot.keys;
                    record = mike.bind(foxtrot)();
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    context = zulu;
                    mike = new context[tango](record, config);
                    romeo = mike instanceof Object ? mike : zulu;
                    zulu = _closure1_slot26;
                    mike = _closure3_slot0;
                    tango = mike.impressionCache;
                    mike = tango.keys;
                    mike = mike.bind(tango)();
                    yankee = zulu.bind(entity)(mike);
                    zulu = yankee.bind(entity)();
                    mike = zulu.done;
                    offset = true;
                    verify = null;
                    options = 29;
                    golf = zulu;
                    oscar = undefined;
                    report = undefined;
                    tango = undefined;
                    zulu = undefined;
                    if(mike) { _fun127749_ip = 497; continue _fun127749 }
 140:
                    vacuum = golf.value;
                    sizing = _closure3_slot0;
                    mike = sizing.parseCacheKey;
                    update = mike.bind(sizing)(vacuum);
                    sizing = romeo.has;
                    mike = update.questId;
                    mike = sizing.bind(romeo)(mike);
                    sizing = zulu;
                    if(!mike) { _fun127749_ip = 476; continue _fun127749 }
 185:
                    output = foxtrot.get;
                    mike = update.questId;
                    echo = output.bind(foxtrot)(mike);
                    mike = _closure3_slot0;
                    output = mike.questStatuses;
                    mike = update.questId;
                    result = output[mike];
                    mike = verify != echo;
                    output = null;
                    if(!mike) { _fun127749_ip = 258; continue _fun127749 }
 230:
                    source = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[options];
                    source = source.bind(entity)(mike);
                    mike = source.getQuestStatus;
                    output = mike.bind(source)(echo);
 258:
                    oscar = echo;
                    sizing = zulu;
                    tango = output;
                    report = result;
                    if(!(tango !== report)) { _fun127749_ip = 476; continue _fun127749 }
 277:
                    mike = _closure3_slot0;
                    source = mike.questStatuses;
                    update = update.questId;
                    source[update] = output;
                    mike = mike.isChatViewable;
                    oscar = echo;
                    report = result;
                    tango = output;
                    sizing = zulu;
                    if(!mike) { _fun127749_ip = 476; continue _fun127749 }
 321:
                    mike = _closure3_slot0;
                    update = mike.impressionCache;
                    mike = update.get;
                    mike = mike.bind(update)(vacuum);
                    source = verify == mike;
                    update = undefined;
                    if(source) { _fun127749_ip = 356; continue _fun127749 }
 350:
                    update = mike.isRunning;
 356:
                    oscar = echo;
                    report = result;
                    tango = output;
                    sizing = mike;
                    if(!(offset === update)) { _fun127749_ip = 476; continue _fun127749 }
 372:
                    if(!(verify == echo)) { _fun127749_ip = 416; continue _fun127749 }
 376:
                    control = _closure3_slot0;
                    source = control.stopOne;
                    update = {};
                    update['key'] = vacuum;
                    update['shouldDelete'] = offset;
                    update = source.bind(control)(update);
                    oscar = echo;
                    report = result;
                    tango = output;
                    sizing = mike;
                    _fun127749_ip = 476; continue _fun127749;
 416:
                    source = mike.clone;
                    update = {};
                    update['triggeredByStatusChange'] = offset;
                    control = source.bind(mike)(update);
                    update = control.start;
                    update = update.bind(control)();
                    update = _closure3_slot0;
                    source = update.impressionCache;
                    update = source.set;
                    update = update.bind(source)(vacuum, control);
                    oscar = echo;
                    report = result;
                    tango = output;
                    sizing = mike;
 476:
                    output = yankee.bind(entity)();
                    mike = output.done;
                    zulu = sizing;
                    golf = output;
                    if(!mike) { _fun127749_ip = 140; continue _fun127749 }
 497:
                    return entity;
                }
            };
            entity['handleQuestStoreChanged'] = tango;
            tango = function() {
                _fun127750: for(var _fun127750_ip = 0; ; ) switch(_fun127750_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    tango = _closure3_slot0;
                    tango = tango.isEnabled;
                    if(!tango) { _fun127750_ip = 252; continue _fun127750 }
 32:
                    report = _closure1_slot17;
                    tango = report.getChannelId;
                    tango = tango.bind(report)();
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    if(!(tango !== report)) { _fun127750_ip = 252; continue _fun127750 }
 63:
                    golf = _closure1_slot16;
                    oscar = golf.getChannel;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    offset = oscar.bind(golf)(report);
                    golf = null;
                    oscar = golf == offset;
                    report = undefined;
                    if(oscar) { _fun127750_ip = 103; continue _fun127750 }
 98:
                    report = offset.type;
 103:
                    oscar = golf != report;
                    if(!oscar) { _fun127750_ip = 199; continue _fun127750 }
 110:
                    options = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 28;
                    verify = yankee[report];
                    verify = options.bind(entity)(verify);
                    verify = verify.ChannelTypes;
                    romeo = verify.GUILD_STAGE_VOICE;
                    verify = new Array(2);
                    verify[0] = romeo;
                    report = yankee[report];
                    report = options.bind(entity)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_VOICE;
                    verify[1] = report;
                    options = verify.includes;
                    yankee = golf == offset;
                    report = undefined;
                    if(yankee) { _fun127750_ip = 194; continue _fun127750 }
 189:
                    report = offset.type;
 194:
                    oscar = options.bind(verify)(report);
 199:
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    report = golf != report;
                    if(!report) { _fun127750_ip = 219; continue _fun127750 }
 216:
                    report = oscar;
 219:
                    if(report) { _fun127750_ip = 252; continue _fun127750 }
 222:
                    report = _closure1_slot25;
                    zulu = _closure3_slot0;
                    mike = zulu.chatChannelId;
                    mike = report.bind(entity)(mike);
                    mike = zulu.onChannelChanged;
                    mike = mike.bind(zulu)(tango);
 252:
                    return entity;
                }
            };
            entity['handleSelectedChannelStoreChanged'] = tango;
            tango = function() {
                _fun127751: for(var _fun127751_ip = 0; ; ) switch(_fun127751_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure1_slot10;
                    mike = zulu.isOpen;
                    zulu = mike.bind(zulu)();
                    report = _closure3_slot0;
                    report = report.isEnabled;
                    if(!report) { _fun127751_ip = 57; continue _fun127751 }
 43:
                    oscar = _closure3_slot0;
                    oscar = oscar.wasActionSheetOpen;
                    report = zulu !== oscar;
 57:
                    if(!report) { _fun127751_ip = 88; continue _fun127751 }
 60:
                    tango = _closure1_slot25;
                    tango = tango.bind(entity)();
                    mike = _closure3_slot0;
                    tango = mike.checkChatViewable;
                    tango = tango.bind(mike)();
                    mike['wasActionSheetOpen'] = zulu;
 88:
                    return entity;
                }
            };
            entity['handleActionSheetStoreChanged'] = tango;
            tango = function() {
                _fun127752: for(var _fun127752_ip = 0; ; ) switch(_fun127752_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure3_slot0;
                    zulu = zulu.isEnabled;
                    if(!zulu) { _fun127752_ip = 121; continue _fun127752 }
 29:
                    report = _closure1_slot19;
                    zulu = report.getState;
                    report = zulu.bind(report)();
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 27;
                    zulu = golf[zulu];
                    zulu = oscar.bind(entity)(zulu);
                    zulu = zulu.AppStates;
                    zulu = zulu.ACTIVE;
                    zulu = report === zulu;
                    report = _closure3_slot0;
                    report = report.wasAppActive;
                    if(!(report !== zulu)) { _fun127752_ip = 121; continue _fun127752 }
 93:
                    tango = _closure1_slot25;
                    tango = tango.bind(entity)();
                    mike = _closure3_slot0;
                    tango = mike.checkChatViewable;
                    tango = tango.bind(mike)();
                    mike['wasAppActive'] = zulu;
 121:
                    return entity;
                }
            };
            entity['handleAppStateStoreChanged'] = tango;
            tango = function() {
                _fun127753: for(var _fun127753_ip = 0; ; ) switch(_fun127753_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure3_slot0;
                    zulu = zulu.isEnabled;
                    if(!zulu) { _fun127753_ip = 95; continue _fun127753 }
 29:
                    report = _closure1_slot14;
                    zulu = report.getState;
                    report = zulu.bind(report)();
                    zulu = report.isAnyVoicePanelOpen;
                    zulu = zulu.bind(report)();
                    report = _closure3_slot0;
                    report = report.wasAnyVoicePanelOpen;
                    if(!(zulu !== report)) { _fun127753_ip = 95; continue _fun127753 }
 67:
                    tango = _closure1_slot25;
                    tango = tango.bind(entity)();
                    mike = _closure3_slot0;
                    tango = mike.checkChatViewable;
                    tango = tango.bind(mike)();
                    mike['wasAnyVoicePanelOpen'] = zulu;
 95:
                    return entity;
                }
            };
            entity['handleVoicePanelStoreChanged'] = tango;
            tango = function() {
                _fun127754: for(var _fun127754_ip = 0; ; ) switch(_fun127754_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.isEnabled;
                    if(!mike) { _fun127754_ip = 30; continue _fun127754 }
 16:
                    mike = _closure3_slot0;
                    entity = mike.checkSearchShowing;
                    entity = entity.bind(mike)();
 30:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelDetailsStoreChanged'] = tango;
            tango = function() {
                _fun127755: for(var _fun127755_ip = 0; ; ) switch(_fun127755_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure3_slot0;
                    zulu = zulu.isEnabled;
                    if(!zulu) { _fun127755_ip = 536; continue _fun127755 }
 32:
                    tango = _closure1_slot11;
                    zulu = tango.getAllChatOpen;
                    tango = zulu.bind(tango)();
                    report = _closure1_slot26;
                    oscar = global;
                    golf = oscar.Set;
                    verify = oscar.Object;
                    options = verify.keys;
                    zulu = _closure3_slot0;
                    zulu = zulu.channelsWithChatOpen;
                    sequence = options.bind(verify)(zulu);
                    zulu = new Array(0);
                    vacuum = 0;
                    config = zulu;
                    vacuum = arraySpread(config, sequence, vacuum);
                    verify = oscar.Object;
                    oscar = verify.keys;
                    sequence = oscar.bind(verify)(tango);
                    config = zulu;
                    oscar = arraySpread(config, sequence, vacuum);
                    oscar = golf.prototype;
                    oscar = Object.create(oscar, {constructor: {value: golf}});
                    record = oscar;
                    config = zulu;
                    zulu = new record[golf](config, sequence);
                    zulu = zulu instanceof Object ? zulu : oscar;
                    backup = report.bind(entity)(zulu);
                    report = backup.bind(entity)();
                    zulu = report.done;
                    foxtrot = null;
                    romeo = 28;
                    yankee = report;
                    offset = undefined;
                    verify = undefined;
                    options = undefined;
                    golf = undefined;
                    if(zulu) { _fun127755_ip = 514; continue _fun127755 }
 181:
                    oscar = yankee.value;
                    report = _closure1_slot16;
                    zulu = report.getChannel;
                    source = zulu.bind(report)(oscar);
                    report = foxtrot == source;
                    zulu = undefined;
                    if(report) { _fun127755_ip = 214; continue _fun127755 }
 209:
                    zulu = source.type;
 214:
                    echo = offset;
                    result = verify;
                    output = options;
                    sizing = golf;
                    if(!(foxtrot != zulu)) { _fun127755_ip = 388; continue _fun127755 }
 233:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    update = zulu[romeo];
                    update = report.bind(entity)(update);
                    update = update.ChannelTypes;
                    control = update.GUILD_STAGE_VOICE;
                    update = new Array(2);
                    update[0] = control;
                    zulu = zulu[romeo];
                    zulu = report.bind(entity)(zulu);
                    zulu = zulu.ChannelTypes;
                    zulu = zulu.GUILD_VOICE;
                    update[1] = zulu;
                    report = update.includes;
                    control = foxtrot == source;
                    zulu = undefined;
                    if(control) { _fun127755_ip = 314; continue _fun127755 }
 309:
                    zulu = source.type;
 314:
                    zulu = report.bind(update)(zulu);
                    echo = offset;
                    result = verify;
                    output = options;
                    sizing = golf;
                    if(!zulu) { _fun127755_ip = 388; continue _fun127755 }
 334:
                    zulu = _closure3_slot0;
                    zulu = zulu.channelsWithChatOpen;
                    source = zulu[oscar];
                    report = foxtrot != source;
                    if(!report) { _fun127755_ip = 358; continue _fun127755 }
 355:
                    report = source;
 358:
                    update = tango[oscar];
                    zulu = foxtrot != update;
                    if(!zulu) { _fun127755_ip = 372; continue _fun127755 }
 369:
                    zulu = update;
 372:
                    echo = source;
                    result = update;
                    output = report;
                    sizing = zulu;
                    if(!(output === sizing)) { _fun127755_ip = 420; continue _fun127755 }
 388:
                    update = backup.bind(entity)();
                    report = update.done;
                    offset = echo;
                    verify = result;
                    options = output;
                    golf = sizing;
                    yankee = update;
                    if(report) { _fun127755_ip = 514; continue _fun127755 }
 415:
                    _fun127755_ip = 181; continue _fun127755;
 420:
                    if(!zulu) { _fun127755_ip = 437; continue _fun127755 }
 423:
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    if(!(oscar === report)) { _fun127755_ip = 499; continue _fun127755 }
 437:
                    if(zulu) { _fun127755_ip = 483; continue _fun127755 }
 440:
                    zulu = _closure3_slot0;
                    report = zulu.previousChatChannelId;
                    zulu = zulu.chatChannelId;
                    if(!(report !== zulu)) { _fun127755_ip = 483; continue _fun127755 }
 460:
                    golf = _closure3_slot0;
                    report = golf.onChannelChanged;
                    zulu = golf.previousChatChannelId;
                    zulu = report.bind(golf)(zulu);
                    _fun127755_ip = 514; continue _fun127755;
 483:
                    report = _closure3_slot0;
                    zulu = report.checkChatViewable;
                    zulu = zulu.bind(report)();
                    _fun127755_ip = 514; continue _fun127755;
 499:
                    report = _closure3_slot0;
                    zulu = report.onChannelChanged;
                    zulu = zulu.bind(report)(oscar);
 514:
                    zulu = _closure3_slot0;
                    mike = {};
                    config = mike;
                    sequence = tango;
                    tango = copyDataProperties(config, sequence);
                    zulu['channelsWithChatOpen'] = mike;
 536:
                    return entity;
                }
            };
            entity['handleChannelRTCStoreChanged'] = tango;
            tango = function() {
                _fun127756: for(var _fun127756_ip = 0; ; ) switch(_fun127756_ip) {
 0:
                    mike = _closure1_slot25;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure3_slot0;
                    zulu = zulu.isEnabled;
                    if(!zulu) { _fun127756_ip = 53; continue _fun127756 }
 29:
                    zulu = _closure3_slot0;
                    mike = zulu.checkIsOnChannelNavigationRoute;
                    mike = mike.bind(zulu)();
                    mike = zulu.checkOpenModalKey;
                    mike = mike.bind(zulu)();
 53:
                    return entity;
                }
            };
            entity['handleNavigationStateChanged'] = tango;
            tango = function() {
                mike = _closure1_slot25;
                entity = undefined;
                mike = mike.bind(entity)();
                zulu = _closure3_slot0;
                mike = zulu.checkIsOnChannelNavigationRoute;
                mike = mike.bind(zulu)();
                return entity;
            };
            entity['handleScreenStoreChanged'] = tango;
            tango = function() {
                _fun127758: for(var _fun127758_ip = 0; ; ) switch(_fun127758_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.isEnabled;
                    if(!mike) { _fun127758_ip = 83; continue _fun127758 }
 16:
                    tango = _closure1_slot18;
                    mike = tango.getAlert;
                    tango = mike.bind(tango)();
                    mike = null;
                    mike = mike != tango;
                    tango = _closure3_slot0;
                    tango = tango.wasAlertOpen;
                    if(!(mike !== tango)) { _fun127758_ip = 83; continue _fun127758 }
 53:
                    tango = _closure1_slot25;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
                    entity = _closure3_slot0;
                    zulu = entity.checkChatViewable;
                    zulu = zulu.bind(entity)();
                    entity['wasAlertOpen'] = mike;
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleAlertStoreChanged'] = tango;
            tango = function() {
                entity = undefined;
                return entity;
            };
            entity['unsubscribeFromVoicePanelStore'] = tango;
            zulu = function() {
                entity = undefined;
                return entity;
            };
            entity['unsubscribeFromChannelDetailsStore'] = zulu;
            zulu = global;
            zulu = zulu.Map;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            foxtrot = tango;
            zulu = new foxtrot[zulu](romeo);
            oscar = zulu instanceof Object ? zulu : tango;
            report = oscar.set;
            tango = _closure1_slot21;
            zulu = entity.handleQuestStoreChanged;
            oscar = report.bind(oscar)(tango, zulu);
            report = oscar.set;
            tango = _closure1_slot17;
            zulu = entity.handleSelectedChannelStoreChanged;
            oscar = report.bind(oscar)(tango, zulu);
            report = oscar.set;
            tango = _closure1_slot10;
            zulu = entity.handleActionSheetStoreChanged;
            oscar = report.bind(oscar)(tango, zulu);
            report = oscar.set;
            tango = _closure1_slot19;
            zulu = entity.handleAppStateStoreChanged;
            oscar = report.bind(oscar)(tango, zulu);
            report = oscar.set;
            tango = _closure1_slot20;
            zulu = entity.handleScreenStoreChanged;
            oscar = report.bind(oscar)(tango, zulu);
            report = oscar.set;
            tango = _closure1_slot11;
            zulu = entity.handleChannelRTCStoreChanged;
            report = report.bind(oscar)(tango, zulu);
            tango = report.set;
            zulu = _closure1_slot18;
            mike = entity.handleAlertStoreChanged;
            mike = tango.bind(report)(zulu, mike);
            entity['stores'] = mike;
            mike = {};
            zulu = entity.handleVisibleMessagesChanged;
            mike['QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'isEnabled';
        report['key'] = entity;
        entity = function() { // Original name: get
            _fun127761: for(var _fun127761_ip = 0; ; ) switch(_fun127761_ip) {
 0:
                entity = this;
                mike = entity._isEnabled;
                zulu = null;
                if(!(zulu == mike)) { _fun127761_ip = 67; continue _fun127761 }
 15:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 30;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.shouldCalculateMobileMessageVisibilityPercentages;
                zulu = {};
                oscar = _closure1_slot22;
                oscar = oscar.EMBED_MOBILE;
                zulu['location'] = oscar;
                mike = tango.bind(report)(zulu);
 67:
                entity['_isEnabled'] = mike;
                entity = entity._isEnabled;
                return entity;
            }
        };
        report['get'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = '_initialize';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun127762: for(var _fun127762_ip = 0; ; ) switch(_fun127762_ip) {
 0:
                oscar = this;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 31;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getRootNavigationRef;
                golf = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != golf)) { _fun127762_ip = 66; continue _fun127762 }
 44:
                report = golf.addListener;
                tango = oscar.handleNavigationStateChanged;
                zulu = 'state';
                zulu = report.bind(golf)(zulu, tango);
 66:
                report = _closure1_slot14;
                tango = report.subscribe;
                zulu = oscar.handleVoicePanelStoreChanged;
                zulu = tango.bind(report)(zulu);
                oscar['unsubscribeFromVoicePanelStore'] = zulu;
                report = _closure1_slot12;
                tango = report.subscribe;
                zulu = oscar.handleChannelDetailsStoreChanged;
                zulu = tango.bind(report)(zulu);
                oscar['unsubscribeFromChannelDetailsStore'] = zulu;
                report = _closure1_slot30;
                yankee = _closure2_slot0;
                offset = '_initialize';
                options = 3;
                romeo = undefined;
                verify = oscar;
                zulu = romeo[report](yankee, offset, verify, options, golf);
                mike = new Array(0);
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun127763: for(var _fun127763_ip = 0; ; ) switch(_fun127763_ip) {
 0:
                oscar = this;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 31;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getRootNavigationRef;
                golf = zulu.bind(tango)();
                zulu = null;
                if(!(zulu != golf)) { _fun127763_ip = 66; continue _fun127763 }
 44:
                report = golf.removeListener;
                tango = oscar.handleNavigationStateChanged;
                zulu = 'state';
                zulu = report.bind(golf)(zulu, tango);
 66:
                zulu = oscar.unsubscribeFromVoicePanelStore;
                zulu = zulu.bind(oscar)();
                zulu = oscar.unsubscribeFromChannelDetailsStore;
                zulu = zulu.bind(oscar)();
                report = _closure1_slot30;
                yankee = _closure2_slot0;
                offset = '_terminate';
                options = 3;
                romeo = undefined;
                verify = oscar;
                zulu = romeo[report](yankee, offset, verify, options, golf);
                mike = new Array(0);
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();