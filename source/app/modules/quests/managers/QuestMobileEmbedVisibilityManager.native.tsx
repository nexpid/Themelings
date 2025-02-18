// app/modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
            verify = _closure1_slot27;
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
            golfie = _closure1_slot27;
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
    var _closure1_slot26 = entity;
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
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot7;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot6;
            entity = _closure1_slot29;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00010_ip = 76; continue _fun00009;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: _superPropGet
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            golfie = argBaz;
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot7;
            entity = 1;
            tangon = 3;
            option = entity & tangon;
            entity = report;
            if(!option) { _fun00012_ip = 44; continue _fun00011 }
 39:
            entity = report.prototype;
 44:
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = argBar;
            entity = oscard.bind(report)(zuuluu, entity, golfie);
            var _closure2_slot1 = entity;
            zuuluu = 2;
            zuuluu = zuuluu & tangon;
            if(!zuuluu) { _fun00012_ip = 82; continue _fun00011 }
 75:
            entity = function(argFoo) {
                tangon = _closure2_slot1;
                zuuluu = tangon.apply;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
 82:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.useChannelDetailsStore;
    var _closure1_slot12 = option;
    tangon = tangon.getIsChannelDetailsSearchActive;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isTextChannel;
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot21 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot22 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageStates;
    var _closure1_slot23 = tangon;
    tangon = function(argFoo) { // Original name: log
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = 0;
            entity = copyRestArgs(golfie);
            entity = _closure1_slot24;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00014_ip = 64; continue _fun00013 }
 19:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 20;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getQuestLogger;
            zuuluu = {};
            oscard = 'QuestMobileEmbedVisibilityManager';
            zuuluu['location'] = oscard;
            entity = tangon.bind(report)(zuuluu);
 64:
            var _closure1_slot24 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = tangon;
    tangon = 32;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: QuestMobileEmbedVisibilityManager
            golfie = this;
            romeon = 0;
            option = copyRestArgs(romeon);
            entity = _closure1_slot4;
            oscard = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(golfie, oscard);
            report = _closure1_slot28;
            entity = new Array(0);
            romeon = entity;
            yankee = option;
            offset = 0;
            option = arraySpread(romeon, yankee, offset);
            entity = report.bind(tangon)(golfie, oscard, entity);
            var _closure3_slot0 = entity;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 21;
            report = golfie[report];
            golfie = oscard.bind(tangon)(report);
            report = {};
            oscard = 50;
            report['max'] = oscard;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            foxtra = oscard;
            romeon = report;
            report = new foxtra[golfie](romeon, yankee);
            report = report instanceof Object ? report : oscard;
            entity['impressionCache'] = report;
            report = {};
            entity['questStatuses'] = report;
            entity['chatChannelId'] = tangon;
            entity['previousChatChannelId'] = tangon;
            report = {};
            entity['channelsWithChatOpen'] = report;
            entity['_isEnabled'] = tangon;
            tangon = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    entity = entity.payload;
                    zuuluu = entity.visibleMessages;
                    entity = entity.source;
                    michal = _closure3_slot0;
                    michal = michal.isEnabled;
                    if(!michal) { _fun00016_ip = 322; continue _fun00015 }
 39:
                    michal = _closure1_slot25;
                    offset = undefined;
                    michal = michal.bind(offset)();
                    tangon = new Array(0);
                    michal = _closure1_slot26;
                    verify = michal.bind(offset)(zuuluu);
                    zuuluu = verify.bind(offset)();
                    michal = zuuluu.done;
                    option = 0;
                    golfie = global;
                    oscard = 100;
                    report = 22;
                    if(michal) { _fun00016_ip = 300; continue _fun00015 }
 90:
                    michal = zuuluu.value;
                    backup = michal.message;
                    romeon = michal.percentVisible;
                    sizing = michal.state;
                    michal = backup.codedLinks;
                    michal = michal.length;
                    michal = michal <= option;
                    if(michal) { _fun00016_ip = 167; continue _fun00015 }
 129:
                    foxtra = _closure1_slot23;
                    output = foxtra.SENDING;
                    kiloes = new Array(2);
                    kiloes[0] = output;
                    foxtra = foxtra.SEND_FAILED;
                    kiloes[1] = foxtra;
                    foxtra = kiloes.includes;
                    michal = foxtra.bind(kiloes)(sizing);
 167:
                    if(michal) { _fun00016_ip = 282; continue _fun00015 }
 170:
                    foxtra = _closure1_slot25;
                    michal = backup.id;
                    michal = backup.content;
                    sizing = golfie.Math;
                    kiloes = sizing.round;
                    michal = oscard * romeon;
                    michal = kiloes.bind(sizing)(michal);
                    michal = foxtra.bind(offset)(michal);
                    foxtra = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[report];
                    michal = foxtra.bind(offset)(michal);
                    michal = michal.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
                    if(!(romeon > michal)) { _fun00016_ip = 282; continue _fun00015 }
 236:
                    romeon = tangon.push;
                    foxtra = _closure3_slot0;
                    michal = foxtra.findQuestEmbedsInMessage;
                    echoed = michal.bind(foxtra)(backup);
                    michal = new Array(0);
                    update = michal;
                    result = 0;
                    foxtra = arraySpread(update, echoed, result);
                    update = romeon;
                    echoed = michal;
                    result = tangon;
                    michal = apply(update, echoed, result);
 282:
                    romeon = verify.bind(offset)();
                    michal = romeon.done;
                    zuuluu = romeon;
                    if(!michal) { _fun00016_ip = 90; continue _fun00015 }
 300:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.updateImpressionsForVisibleEmbeds;
                    entity = {};
                    entity['visibleEmbeds'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 322:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleVisibleMessagesChanged'] = tangon;
            tangon = function(argFoo) {
                zuuluu = argFoo;
                var _closure4_slot0 = zuuluu;
                entity = new Array(0);
                var _closure4_slot1 = entity;
                tangon = global;
                tangon = tangon.Set;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                golfie = report;
                tangon = new golfie[tangon](oscard);
                tangon = tangon instanceof Object ? tangon : report;
                var _closure4_slot2 = tangon;
                tangon = zuuluu.codedLinks;
                zuuluu = tangon.forEach;
                michal = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = argFoo;
                        tangon = michal.type;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.CodedLinkType;
                        zuuluu = zuuluu.QUESTS_EMBED;
                        if(!(tangon === zuuluu)) { _fun00018_ip = 139; continue _fun00017 }
 49:
                        tangon = michal.code;
                        report = _closure4_slot2;
                        zuuluu = report.has;
                        zuuluu = zuuluu.bind(report)(tangon);
                        if(zuuluu) { _fun00018_ip = 139; continue _fun00017 }
 74:
                        oscard = _closure4_slot1;
                        report = oscard.push;
                        zuuluu = {};
                        zuuluu['questId'] = tangon;
                        golfie = argBar;
                        zuuluu['questContentPosition'] = golfie;
                        golfie = _closure4_slot0;
                        option = golfie.id;
                        zuuluu['messageId'] = option;
                        golfie = golfie.channel_id;
                        zuuluu['channelId'] = golfie;
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = _closure4_slot2;
                        michal = zuuluu.add;
                        michal = michal.bind(zuuluu)(tangon);
 139:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['findQuestEmbedsInMessage'] = tangon;
            tangon = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    report = entity.visibleEmbeds;
                    michal = _closure1_slot26;
                    entity = undefined;
                    verify = michal.bind(entity)(report);
                    tangon = verify.bind(entity)();
                    zuuluu = tangon.done;
                    option = 24;
                    golfie = false;
                    oscard = null;
                    if(zuuluu) { _fun00020_ip = 205; continue _fun00019 }
 48:
                    zuuluu = tangon.value;
                    romeon = zuuluu.questId;
                    sizing = zuuluu.questContentPosition;
                    backup = zuuluu.messageId;
                    kiloes = zuuluu.channelId;
                    yankee = _closure1_slot21;
                    zuuluu = yankee.getQuest;
                    foxtra = zuuluu.bind(yankee)(romeon);
                    if(!(oscard != foxtra)) { _fun00020_ip = 203; continue _fun00019 }
 94:
                    romeon = _closure3_slot0;
                    yankee = romeon.ensureImpression;
                    zuuluu = {};
                    zuuluu['quest'] = foxtra;
                    result = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[option];
                    output = result.bind(entity)(output);
                    output = output.QuestContent;
                    output = output.QUEST_EMBED_MOBILE;
                    zuuluu['questContent'] = output;
                    zuuluu['triggeredByStatusChange'] = golfie;
                    zuuluu['questContentPosition'] = sizing;
                    zuuluu['channelId'] = kiloes;
                    zuuluu['messageId'] = backup;
                    foxtra = foxtra.id;
                    zuuluu['questId'] = foxtra;
                    zuuluu['questDecisionId'] = entity;
                    zuuluu = yankee.bind(romeon)(zuuluu);
                    yankee = verify.bind(entity)();
                    zuuluu = yankee.done;
                    tangon = yankee;
                    if(zuuluu) { _fun00020_ip = 205; continue _fun00019 }
 198:
                    _fun00020_ip = 48; continue _fun00019;
 203:
                    return entity;
 205:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.stopMany;
                    michal = {};
                    michal['visibleEmbeds'] = report;
                    report = true;
                    michal['shouldDeleteHiddenEmbeds'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity['updateImpressionsForVisibleEmbeds'] = tangon;
            tangon = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = argFoo;
                    option = tangon.quest;
                    zuuluu = null;
                    michal = Object.create(zuuluu);
                    entity = 0;
                    michal['quest'] = entity;
                    backup = {};
                    foxtra = tangon;
                    romeon = michal;
                    oscard = copyDataProperties(backup, foxtra, romeon);
                    entity = _closure3_slot0;
                    tangon = entity.getCacheKey;
                    report = tangon.bind(entity)(oscard);
                    tangon = entity.impressionCache;
                    entity = tangon.get;
                    offset = entity.bind(tangon)(report);
                    tangon = zuuluu != offset;
                    entity = undefined;
                    golfie = undefined;
                    if(!tangon) { _fun00022_ip = 85; continue _fun00021 }
 78:
                    tangon = zuuluu != offset;
                    golfie = offset;
 85:
                    if(!tangon) { _fun00022_ip = 94; continue _fun00021 }
 88:
                    tangon = golfie.isRunning;
 94:
                    if(tangon) { _fun00022_ip = 259; continue _fun00021 }
 100:
                    tangon = offset;
                    if(!(zuuluu != tangon)) { _fun00022_ip = 131; continue _fun00021 }
 107:
                    verify = offset.clone;
                    golfie = {};
                    yankee = oscard.triggeredByStatusChange;
                    golfie['triggeredByStatusChange'] = yankee;
                    tangon = verify.bind(offset)(golfie);
 131:
                    if(!(zuuluu == tangon)) { _fun00022_ip = 204; continue _fun00021 }
 135:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 22;
                    zuuluu = verify[zuuluu];
                    zuuluu = golfie.bind(entity)(zuuluu);
                    golfie = zuuluu.QuestContentImpression;
                    zuuluu = {};
                    zuuluu['questOrQuests'] = option;
                    backup = zuuluu;
                    foxtra = oscard;
                    oscard = copyDataProperties(backup, foxtra);
                    oscard = golfie.prototype;
                    oscard = Object.create(oscard, {constructor: {value: golfie}});
                    kiloes = oscard;
                    backup = zuuluu;
                    zuuluu = new kiloes[golfie](backup, foxtra);
                    tangon = zuuluu instanceof Object ? zuuluu : oscard;
 204:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.isChatViewable;
                    if(!zuuluu) { _fun00022_ip = 226; continue _fun00021 }
 217:
                    oscard = tangon.isRunning;
                    zuuluu = !oscard;
 226:
                    if(!zuuluu) { _fun00022_ip = 238; continue _fun00021 }
 229:
                    zuuluu = tangon.start;
                    zuuluu = zuuluu.bind(tangon)();
 238:
                    michal = _closure3_slot0;
                    zuuluu = michal.impressionCache;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(report, tangon);
 259:
                    return entity;
                }
            };
            entity['ensureImpression'] = tangon;
            tangon = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.key;
                    zuuluu = entity.shouldDelete;
                    entity = _closure3_slot0;
                    report = entity.impressionCache;
                    entity = report.get;
                    golfie = entity.bind(report)(tangon);
                    oscard = null;
                    entity = oscard == golfie;
                    report = undefined;
                    option = undefined;
                    if(entity) { _fun00024_ip = 56; continue _fun00023 }
 50:
                    option = golfie.isRunning;
 56:
                    entity = oscard != option;
                    if(!entity) { _fun00024_ip = 66; continue _fun00023 }
 63:
                    entity = option;
 66:
                    if(!(oscard != golfie)) { _fun00024_ip = 80; continue _fun00023 }
 70:
                    oscard = golfie.stop;
                    oscard = oscard.bind(golfie)();
 80:
                    if(!zuuluu) { _fun00024_ip = 115; continue _fun00023 }
 83:
                    zuuluu = _closure1_slot25;
                    zuuluu = zuuluu.bind(report)();
                    michal = _closure3_slot0;
                    zuuluu = michal.impressionCache;
                    michal = zuuluu.del;
                    michal = michal.bind(zuuluu)(tangon);
 115:
                    return entity;
                }
            };
            entity['stopOne'] = tangon;
            tangon = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = arguments[0];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00026_ip = 30; continue _fun00025 }
 9:
                    zuuluu = {};
                    tangon = new Array(0);
                    zuuluu['visibleEmbeds'] = tangon;
                    tangon = false;
                    zuuluu['shouldDeleteHiddenEmbeds'] = tangon;
                    michal = zuuluu;
 30:
                    report = michal.visibleEmbeds;
                    if(!(report === entity)) { _fun00026_ip = 44; continue _fun00025 }
 40:
                    report = new Array(0);
 44:
                    golfie = michal.shouldDeleteHiddenEmbeds;
                    if(!(golfie === entity)) { _fun00026_ip = 56; continue _fun00025 }
 54:
                    golfie = false;
 56:
                    michal = global;
                    tangon = michal.Set;
                    zuuluu = report.map;
                    michal = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.getCacheKey;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    yankee = zuuluu.bind(report)(michal);
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    romeon = zuuluu;
                    michal = new romeon[tangon](yankee, offset);
                    oscard = michal instanceof Object ? michal : zuuluu;
                    zuuluu = _closure1_slot26;
                    michal = _closure3_slot0;
                    tangon = michal.impressionCache;
                    michal = tangon.keys;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.bind(entity)();
                    michal = zuuluu.done;
                    if(michal) { _fun00026_ip = 208; continue _fun00025 }
 149:
                    offset = zuuluu.value;
                    michal = oscard.has;
                    michal = michal.bind(oscard)(offset);
                    if(michal) { _fun00026_ip = 193; continue _fun00025 }
 167:
                    verify = _closure3_slot0;
                    option = verify.stopOne;
                    michal = {};
                    michal['key'] = offset;
                    michal['shouldDelete'] = golfie;
                    michal = option.bind(verify)(michal);
 193:
                    option = tangon.bind(entity)();
                    michal = option.done;
                    zuuluu = option;
                    if(!michal) { _fun00026_ip = 149; continue _fun00025 }
 208:
                    return entity;
                }
            };
            entity['stopMany'] = tangon;
            tangon = function(argFoo) {
                michal = argFoo;
                entity = michal.channelId;
                tangon = michal.messageId;
                michal = michal.questId;
                zuuluu = ':';
                entity = entity + zuuluu;
                entity = entity + tangon;
                entity = entity + zuuluu;
                entity = entity + michal;
                return entity;
            };
            entity['getCacheKey'] = tangon;
            tangon = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.split;
                entity = ':';
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = _closure1_slot3;
                michal = undefined;
                entity = 3;
                zuuluu = zuuluu.bind(michal)(tangon, entity);
                entity = {};
                michal = 0;
                michal = zuuluu[michal];
                entity['channelId'] = michal;
                michal = 1;
                michal = zuuluu[michal];
                entity['messageId'] = michal;
                michal = 2;
                michal = zuuluu[michal];
                entity['questId'] = michal;
                return entity;
            };
            entity['parseCacheKey'] = tangon;
            tangon = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 25;
                    entity = report[entity];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(entity);
                    entity = michal.isChannelFocused;
                    entity = entity.bind(michal)();
                    michal = 26;
                    michal = report[michal];
                    zuuluu = tangon.bind(zuuluu)(michal);
                    michal = zuuluu.getCurrentNavigationRouteName;
                    zuuluu = michal.bind(zuuluu)();
                    if(!entity) { _fun00028_ip = 68; continue _fun00027 }
 60:
                    michal = 'channel';
                    entity = michal === zuuluu;
 68:
                    return entity;
                }
            };
            entity['isOnChannelNavigationRoute'] = tangon;
            tangon = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure3_slot0;
                    zuuluu = entity.chatChannelId;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00030_ip = 46; continue _fun00029 }
 22:
                    tangon = _closure1_slot13;
                    michal = _closure3_slot0;
                    zuuluu = michal.chatChannelId;
                    michal = undefined;
                    entity = tangon.bind(michal)(zuuluu);
 46:
                    return entity;
                }
            };
            entity['isSearchShowing'] = tangon;
            tangon = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.chatChannelId;
                    michal = null;
                    if(!(michal != entity)) { _fun00032_ip = 530; continue _fun00031 }
 22:
                    report = _closure1_slot10;
                    zuuluu = report.isOpen;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00032_ip = 516; continue _fun00031 }
 45:
                    report = _closure1_slot19;
                    zuuluu = report.getState;
                    oscard = zuuluu.bind(report)();
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 27;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    report = golfie.bind(zuuluu)(report);
                    report = report.AppStates;
                    report = report.ACTIVE;
                    if(!(oscard === report)) { _fun00032_ip = 504; continue _fun00031 }
 100:
                    golfie = _closure1_slot16;
                    oscard = golfie.getChannel;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    report = oscard.bind(golfie)(report);
                    oscard = michal == report;
                    option = undefined;
                    if(oscard) { _fun00032_ip = 138; continue _fun00031 }
 133:
                    option = report.type;
 138:
                    golfie = _closure1_slot11;
                    oscard = golfie.getChatOpen;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    golfie = oscard.bind(golfie)(report);
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    offset = 28;
                    report = report[offset];
                    report = oscard.bind(zuuluu)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_STAGE_VOICE;
                    oscard = option === report;
                    if(!oscard) { _fun00032_ip = 205; continue _fun00031 }
 202:
                    oscard = golfie;
 205:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 26;
                    report = yankee[report];
                    verify = verify.bind(zuuluu)(report);
                    report = verify.getOpenModalKey;
                    verify = report.bind(verify)();
                    report = _closure3_slot0;
                    romeon = report.chatChannelId;
                    report = global;
                    report = report.HermesInternal;
                    yankee = report.concat;
                    report = 'voice-channel-';
                    report = yankee.bind(report)(romeon);
                    if(!(michal != verify)) { _fun00032_ip = 289; continue _fun00031 }
 273:
                    if(!(verify !== report)) { _fun00032_ip = 289; continue _fun00031 }
 277:
                    report = _closure1_slot25;
                    report = report.bind(zuuluu)();
                    report = false;
                    return report;
 289:
                    verify = _closure3_slot0;
                    report = verify.isSearchShowing;
                    report = report.bind(verify)();
                    if(report) { _fun00032_ip = 492; continue _fun00031 }
 309:
                    verify = _closure1_slot18;
                    report = verify.getAlert;
                    report = report.bind(verify)();
                    if(!(michal == report)) { _fun00032_ip = 480; continue _fun00031 }
 330:
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = verify.bind(zuuluu)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_VOICE;
                    report = option === report;
                    if(!report) { _fun00032_ip = 369; continue _fun00031 }
 366:
                    report = golfie;
 369:
                    michal = michal != option;
                    if(!michal) { _fun00032_ip = 385; continue _fun00031 }
 376:
                    golfie = _closure1_slot15;
                    michal = golfie.bind(zuuluu)(option);
 385:
                    option = _closure1_slot14;
                    golfie = option.getState;
                    option = golfie.bind(option)();
                    golfie = option.isAnyVoicePanelOpen;
                    golfie = golfie.bind(option)();
                    verify = _closure3_slot0;
                    option = verify.isOnChannelNavigationRoute;
                    option = option.bind(verify)();
                    if(!michal) { _fun00032_ip = 429; continue _fun00031 }
 426:
                    michal = option;
 429:
                    if(!michal) { _fun00032_ip = 435; continue _fun00031 }
 432:
                    michal = !golfie;
 435:
                    if(!michal) { _fun00032_ip = 441; continue _fun00031 }
 438:
                    michal = !oscard;
 441:
                    if(!michal) { _fun00032_ip = 447; continue _fun00031 }
 444:
                    michal = !report;
 447:
                    if(michal) { _fun00032_ip = 453; continue _fun00031 }
 450:
                    michal = oscard;
 453:
                    if(michal) { _fun00032_ip = 459; continue _fun00031 }
 456:
                    michal = report;
 459:
                    report = _closure1_slot25;
                    tangon = _closure3_slot0;
                    tangon = tangon.chatChannelId;
                    tangon = report.bind(zuuluu)(tangon);
                    return michal;
 480:
                    michal = _closure1_slot25;
                    michal = michal.bind(zuuluu)();
                    michal = false;
                    return michal;
 492:
                    michal = _closure1_slot25;
                    michal = michal.bind(zuuluu)();
                    michal = false;
                    return michal;
 504:
                    michal = _closure1_slot25;
                    michal = michal.bind(zuuluu)();
                    michal = false;
                    return michal;
 516:
                    michal = _closure1_slot25;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    entity = false;
                    return entity;
 530:
                    michal = _closure1_slot25;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    entity = false;
                    return entity;
                }
            };
            entity['getIsChatViewable'] = tangon;
            tangon = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure1_slot26;
                    michal = _closure3_slot0;
                    tangon = michal.impressionCache;
                    michal = tangon.keys;
                    michal = michal.bind(tangon)();
                    golfie = zuuluu.bind(entity)(michal);
                    zuuluu = golfie.bind(entity)();
                    michal = zuuluu.done;
                    oscard = false;
                    report = null;
                    tangon = zuuluu;
                    zuuluu = undefined;
                    if(michal) { _fun00034_ip = 271; continue _fun00033 }
 68:
                    foxtra = tangon.value;
                    michal = _closure3_slot0;
                    offset = michal.impressionCache;
                    michal = offset.get;
                    backup = michal.bind(offset)(foxtra);
                    if(!(report != backup)) { _fun00034_ip = 253; continue _fun00033 }
 100:
                    offset = _closure3_slot0;
                    michal = offset.parseCacheKey;
                    michal = michal.bind(offset)(foxtra);
                    michal = michal.channelId;
                    offset = backup.isRunning;
                    if(!offset) { _fun00034_ip = 170; continue _fun00033 }
 129:
                    yankee = _closure1_slot25;
                    romeon = _closure3_slot0;
                    offset = romeon.chatChannelId;
                    offset = yankee.bind(entity)(offset);
                    yankee = romeon.stopOne;
                    offset = {};
                    offset['key'] = foxtra;
                    offset['shouldDelete'] = oscard;
                    offset = yankee.bind(romeon)(offset);
 170:
                    offset = _closure3_slot0;
                    offset = offset.chatChannelId;
                    zuuluu = michal;
                    if(!(zuuluu === offset)) { _fun00034_ip = 253; continue _fun00033 }
 187:
                    romeon = _closure1_slot25;
                    offset = _closure3_slot0;
                    yankee = offset.chatChannelId;
                    yankee = romeon.bind(entity)(yankee);
                    romeon = backup.clone;
                    yankee = {};
                    yankee['triggeredByStatusChange'] = oscard;
                    romeon = romeon.bind(backup)(yankee);
                    yankee = romeon.start;
                    yankee = yankee.bind(romeon)();
                    yankee = offset.impressionCache;
                    offset = yankee.set;
                    offset = offset.bind(yankee)(foxtra, romeon);
                    zuuluu = michal;
 253:
                    offset = golfie.bind(entity)();
                    michal = offset.done;
                    tangon = offset;
                    if(!michal) { _fun00034_ip = 68; continue _fun00033 }
 271:
                    return entity;
                }
            };
            entity['updateImpressionsForChatBecameViewable'] = tangon;
            tangon = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.isChatViewable;
                    if(michal) { _fun00036_ip = 45; continue _fun00035 }
 16:
                    zuuluu = _closure1_slot25;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.stopMany;
                    michal = michal.bind(zuuluu)();
                    _fun00036_ip = 59; continue _fun00035;
 45:
                    michal = _closure3_slot0;
                    entity = michal.updateImpressionsForChatBecameViewable;
                    entity = entity.bind(michal)();
 59:
                    entity = undefined;
                    return entity;
                }
            };
            entity['refreshImpressions'] = tangon;
            tangon = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = _closure3_slot0;
                    michal = entity.getIsChatViewable;
                    michal = michal.bind(entity)();
                    entity = entity.isChatViewable;
                    entity = michal !== entity;
                    if(!entity) { _fun00038_ip = 65; continue _fun00037 }
 30:
                    report = _closure1_slot25;
                    tangon = undefined;
                    tangon = report.bind(tangon)();
                    zuuluu = _closure3_slot0;
                    zuuluu['isChatViewable'] = michal;
                    michal = zuuluu.refreshImpressions;
                    michal = michal.bind(zuuluu)();
                    entity = true;
 65:
                    return entity;
                }
            };
            entity['checkChatViewable'] = tangon;
            tangon = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.isOnChannelNavigationRoute;
                    michal = michal.bind(zuuluu)();
                    zuuluu = zuuluu.wasOnChannelNavigationRoute;
                    if(!(michal !== zuuluu)) { _fun00040_ip = 60; continue _fun00039 }
 27:
                    tangon = _closure1_slot25;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
                    entity = _closure3_slot0;
                    zuuluu = entity.checkChatViewable;
                    zuuluu = zuuluu.bind(entity)();
                    entity['wasOnChannelNavigationRoute'] = michal;
 60:
                    entity = undefined;
                    return entity;
                }
            };
            entity['checkIsOnChannelNavigationRoute'] = tangon;
            tangon = function() {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.isSearchShowing;
                    michal = michal.bind(zuuluu)();
                    zuuluu = zuuluu.wasSearchShowing;
                    if(!(michal !== zuuluu)) { _fun00042_ip = 60; continue _fun00041 }
 27:
                    tangon = _closure1_slot25;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
                    entity = _closure3_slot0;
                    zuuluu = entity.checkChatViewable;
                    zuuluu = zuuluu.bind(entity)();
                    entity['wasSearchShowing'] = michal;
 60:
                    entity = undefined;
                    return entity;
                }
            };
            entity['checkSearchShowing'] = tangon;
            tangon = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    tangon = _closure3_slot0;
                    entity = tangon.chatChannelId;
                    tangon['previousChatChannelId'] = entity;
                    entity = argFoo;
                    tangon['chatChannelId'] = entity;
                    report = _closure1_slot25;
                    entity = tangon.previousChatChannelId;
                    zuuluu = tangon.chatChannelId;
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    report = tangon.stopMany;
                    zuuluu = {};
                    oscard = true;
                    zuuluu['shouldDeleteHiddenEmbeds'] = oscard;
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = tangon.checkChatViewable;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00044_ip = 101; continue _fun00043 }
 87:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.refreshImpressions;
                    michal = michal.bind(zuuluu)();
 101:
                    return entity;
                }
            };
            entity['onChannelChanged'] = tangon;
            tangon = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 26;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.getOpenModalKey;
                    zuuluu = michal.bind(zuuluu)();
                    report = _closure3_slot0;
                    report = report.previouslyOpenModalKey;
                    if(!(zuuluu !== report)) { _fun00046_ip = 87; continue _fun00045 }
 52:
                    report = _closure1_slot25;
                    michal = _closure3_slot0;
                    tangon = michal.previouslyOpenModalKey;
                    tangon = report.bind(entity)(tangon);
                    tangon = michal.checkChatViewable;
                    tangon = tangon.bind(michal)();
                    michal['previouslyOpenModalKey'] = zuuluu;
 87:
                    return entity;
                }
            };
            entity['checkOpenModalKey'] = tangon;
            tangon = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    michal = _closure3_slot0;
                    michal = michal.isEnabled;
                    if(!michal) { _fun00048_ip = 497; continue _fun00047 }
 32:
                    michal = _closure1_slot21;
                    foxtra = michal.quests;
                    michal = global;
                    tangon = michal.Set;
                    michal = foxtra.keys;
                    record = michal.bind(foxtra)();
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    cntext = zuuluu;
                    michal = new cntext[tangon](record, config);
                    romeon = michal instanceof Object ? michal : zuuluu;
                    zuuluu = _closure1_slot26;
                    michal = _closure3_slot0;
                    tangon = michal.impressionCache;
                    michal = tangon.keys;
                    michal = michal.bind(tangon)();
                    yankee = zuuluu.bind(entity)(michal);
                    zuuluu = yankee.bind(entity)();
                    michal = zuuluu.done;
                    offset = true;
                    verify = null;
                    option = 29;
                    golfie = zuuluu;
                    oscard = undefined;
                    report = undefined;
                    tangon = undefined;
                    zuuluu = undefined;
                    if(michal) { _fun00048_ip = 497; continue _fun00047 }
 140:
                    vacuum = golfie.value;
                    sizing = _closure3_slot0;
                    michal = sizing.parseCacheKey;
                    update = michal.bind(sizing)(vacuum);
                    sizing = romeon.has;
                    michal = update.questId;
                    michal = sizing.bind(romeon)(michal);
                    sizing = zuuluu;
                    if(!michal) { _fun00048_ip = 476; continue _fun00047 }
 185:
                    output = foxtra.get;
                    michal = update.questId;
                    echoed = output.bind(foxtra)(michal);
                    michal = _closure3_slot0;
                    output = michal.questStatuses;
                    michal = update.questId;
                    result = output[michal];
                    michal = verify != echoed;
                    output = null;
                    if(!michal) { _fun00048_ip = 258; continue _fun00047 }
 230:
                    source = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    source = source.bind(entity)(michal);
                    michal = source.getQuestStatus;
                    output = michal.bind(source)(echoed);
 258:
                    oscard = echoed;
                    sizing = zuuluu;
                    tangon = output;
                    report = result;
                    if(!(tangon !== report)) { _fun00048_ip = 476; continue _fun00047 }
 277:
                    michal = _closure3_slot0;
                    source = michal.questStatuses;
                    update = update.questId;
                    source[update] = output;
                    michal = michal.isChatViewable;
                    oscard = echoed;
                    report = result;
                    tangon = output;
                    sizing = zuuluu;
                    if(!michal) { _fun00048_ip = 476; continue _fun00047 }
 321:
                    michal = _closure3_slot0;
                    update = michal.impressionCache;
                    michal = update.get;
                    michal = michal.bind(update)(vacuum);
                    source = verify == michal;
                    update = undefined;
                    if(source) { _fun00048_ip = 356; continue _fun00047 }
 350:
                    update = michal.isRunning;
 356:
                    oscard = echoed;
                    report = result;
                    tangon = output;
                    sizing = michal;
                    if(!(offset === update)) { _fun00048_ip = 476; continue _fun00047 }
 372:
                    if(!(verify == echoed)) { _fun00048_ip = 416; continue _fun00047 }
 376:
                    ctrled = _closure3_slot0;
                    source = ctrled.stopOne;
                    update = {};
                    update['key'] = vacuum;
                    update['shouldDelete'] = offset;
                    update = source.bind(ctrled)(update);
                    oscard = echoed;
                    report = result;
                    tangon = output;
                    sizing = michal;
                    _fun00048_ip = 476; continue _fun00047;
 416:
                    source = michal.clone;
                    update = {};
                    update['triggeredByStatusChange'] = offset;
                    ctrled = source.bind(michal)(update);
                    update = ctrled.start;
                    update = update.bind(ctrled)();
                    update = _closure3_slot0;
                    source = update.impressionCache;
                    update = source.set;
                    update = update.bind(source)(vacuum, ctrled);
                    oscard = echoed;
                    report = result;
                    tangon = output;
                    sizing = michal;
 476:
                    output = yankee.bind(entity)();
                    michal = output.done;
                    zuuluu = sizing;
                    golfie = output;
                    if(!michal) { _fun00048_ip = 140; continue _fun00047 }
 497:
                    return entity;
                }
            };
            entity['handleQuestStoreChanged'] = tangon;
            tangon = function() {
                _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    tangon = _closure3_slot0;
                    tangon = tangon.isEnabled;
                    if(!tangon) { _fun00050_ip = 252; continue _fun00049 }
 32:
                    report = _closure1_slot17;
                    tangon = report.getChannelId;
                    tangon = tangon.bind(report)();
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    if(!(tangon !== report)) { _fun00050_ip = 252; continue _fun00049 }
 63:
                    golfie = _closure1_slot16;
                    oscard = golfie.getChannel;
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    offset = oscard.bind(golfie)(report);
                    golfie = null;
                    oscard = golfie == offset;
                    report = undefined;
                    if(oscard) { _fun00050_ip = 103; continue _fun00049 }
 98:
                    report = offset.type;
 103:
                    oscard = golfie != report;
                    if(!oscard) { _fun00050_ip = 199; continue _fun00049 }
 110:
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 28;
                    verify = yankee[report];
                    verify = option.bind(entity)(verify);
                    verify = verify.ChannelTypes;
                    romeon = verify.GUILD_STAGE_VOICE;
                    verify = new Array(2);
                    verify[0] = romeon;
                    report = yankee[report];
                    report = option.bind(entity)(report);
                    report = report.ChannelTypes;
                    report = report.GUILD_VOICE;
                    verify[1] = report;
                    option = verify.includes;
                    yankee = golfie == offset;
                    report = undefined;
                    if(yankee) { _fun00050_ip = 194; continue _fun00049 }
 189:
                    report = offset.type;
 194:
                    oscard = option.bind(verify)(report);
 199:
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    report = golfie != report;
                    if(!report) { _fun00050_ip = 219; continue _fun00049 }
 216:
                    report = oscard;
 219:
                    if(report) { _fun00050_ip = 252; continue _fun00049 }
 222:
                    report = _closure1_slot25;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.chatChannelId;
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.onChannelChanged;
                    michal = michal.bind(zuuluu)(tangon);
 252:
                    return entity;
                }
            };
            entity['handleSelectedChannelStoreChanged'] = tangon;
            tangon = function() {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.isOpen;
                    zuuluu = michal.bind(zuuluu)();
                    report = _closure3_slot0;
                    report = report.isEnabled;
                    if(!report) { _fun00052_ip = 57; continue _fun00051 }
 43:
                    oscard = _closure3_slot0;
                    oscard = oscard.wasActionSheetOpen;
                    report = zuuluu !== oscard;
 57:
                    if(!report) { _fun00052_ip = 88; continue _fun00051 }
 60:
                    tangon = _closure1_slot25;
                    tangon = tangon.bind(entity)();
                    michal = _closure3_slot0;
                    tangon = michal.checkChatViewable;
                    tangon = tangon.bind(michal)();
                    michal['wasActionSheetOpen'] = zuuluu;
 88:
                    return entity;
                }
            };
            entity['handleActionSheetStoreChanged'] = tangon;
            tangon = function() {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.isEnabled;
                    if(!zuuluu) { _fun00054_ip = 121; continue _fun00053 }
 29:
                    report = _closure1_slot19;
                    zuuluu = report.getState;
                    report = zuuluu.bind(report)();
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 27;
                    zuuluu = golfie[zuuluu];
                    zuuluu = oscard.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppStates;
                    zuuluu = zuuluu.ACTIVE;
                    zuuluu = report === zuuluu;
                    report = _closure3_slot0;
                    report = report.wasAppActive;
                    if(!(report !== zuuluu)) { _fun00054_ip = 121; continue _fun00053 }
 93:
                    tangon = _closure1_slot25;
                    tangon = tangon.bind(entity)();
                    michal = _closure3_slot0;
                    tangon = michal.checkChatViewable;
                    tangon = tangon.bind(michal)();
                    michal['wasAppActive'] = zuuluu;
 121:
                    return entity;
                }
            };
            entity['handleAppStateStoreChanged'] = tangon;
            tangon = function() {
                _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.isEnabled;
                    if(!zuuluu) { _fun00056_ip = 95; continue _fun00055 }
 29:
                    report = _closure1_slot14;
                    zuuluu = report.getState;
                    report = zuuluu.bind(report)();
                    zuuluu = report.isAnyVoicePanelOpen;
                    zuuluu = zuuluu.bind(report)();
                    report = _closure3_slot0;
                    report = report.wasAnyVoicePanelOpen;
                    if(!(zuuluu !== report)) { _fun00056_ip = 95; continue _fun00055 }
 67:
                    tangon = _closure1_slot25;
                    tangon = tangon.bind(entity)();
                    michal = _closure3_slot0;
                    tangon = michal.checkChatViewable;
                    tangon = tangon.bind(michal)();
                    michal['wasAnyVoicePanelOpen'] = zuuluu;
 95:
                    return entity;
                }
            };
            entity['handleVoicePanelStoreChanged'] = tangon;
            tangon = function() {
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.isEnabled;
                    if(!michal) { _fun00058_ip = 30; continue _fun00057 }
 16:
                    michal = _closure3_slot0;
                    entity = michal.checkSearchShowing;
                    entity = entity.bind(michal)();
 30:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelDetailsStoreChanged'] = tangon;
            tangon = function() {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.isEnabled;
                    if(!zuuluu) { _fun00060_ip = 536; continue _fun00059 }
 32:
                    tangon = _closure1_slot11;
                    zuuluu = tangon.getAllChatOpen;
                    tangon = zuuluu.bind(tangon)();
                    report = _closure1_slot26;
                    oscard = global;
                    golfie = oscard.Set;
                    verify = oscard.Object;
                    option = verify.keys;
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.channelsWithChatOpen;
                    sequen = option.bind(verify)(zuuluu);
                    zuuluu = new Array(0);
                    vacuum = 0;
                    config = zuuluu;
                    vacuum = arraySpread(config, sequen, vacuum);
                    verify = oscard.Object;
                    oscard = verify.keys;
                    sequen = oscard.bind(verify)(tangon);
                    config = zuuluu;
                    oscard = arraySpread(config, sequen, vacuum);
                    oscard = golfie.prototype;
                    oscard = Object.create(oscard, {constructor: {value: golfie}});
                    record = oscard;
                    config = zuuluu;
                    zuuluu = new record[golfie](config, sequen);
                    zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
                    backup = report.bind(entity)(zuuluu);
                    report = backup.bind(entity)();
                    zuuluu = report.done;
                    foxtra = null;
                    romeon = 28;
                    yankee = report;
                    offset = undefined;
                    verify = undefined;
                    option = undefined;
                    golfie = undefined;
                    if(zuuluu) { _fun00060_ip = 514; continue _fun00059 }
 181:
                    oscard = yankee.value;
                    report = _closure1_slot16;
                    zuuluu = report.getChannel;
                    source = zuuluu.bind(report)(oscard);
                    report = foxtra == source;
                    zuuluu = undefined;
                    if(report) { _fun00060_ip = 214; continue _fun00059 }
 209:
                    zuuluu = source.type;
 214:
                    echoed = offset;
                    result = verify;
                    output = option;
                    sizing = golfie;
                    if(!(foxtra != zuuluu)) { _fun00060_ip = 388; continue _fun00059 }
 233:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    update = zuuluu[romeon];
                    update = report.bind(entity)(update);
                    update = update.ChannelTypes;
                    ctrled = update.GUILD_STAGE_VOICE;
                    update = new Array(2);
                    update[0] = ctrled;
                    zuuluu = zuuluu[romeon];
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = zuuluu.ChannelTypes;
                    zuuluu = zuuluu.GUILD_VOICE;
                    update[1] = zuuluu;
                    report = update.includes;
                    ctrled = foxtra == source;
                    zuuluu = undefined;
                    if(ctrled) { _fun00060_ip = 314; continue _fun00059 }
 309:
                    zuuluu = source.type;
 314:
                    zuuluu = report.bind(update)(zuuluu);
                    echoed = offset;
                    result = verify;
                    output = option;
                    sizing = golfie;
                    if(!zuuluu) { _fun00060_ip = 388; continue _fun00059 }
 334:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.channelsWithChatOpen;
                    source = zuuluu[oscard];
                    report = foxtra != source;
                    if(!report) { _fun00060_ip = 358; continue _fun00059 }
 355:
                    report = source;
 358:
                    update = tangon[oscard];
                    zuuluu = foxtra != update;
                    if(!zuuluu) { _fun00060_ip = 372; continue _fun00059 }
 369:
                    zuuluu = update;
 372:
                    echoed = source;
                    result = update;
                    output = report;
                    sizing = zuuluu;
                    if(!(output === sizing)) { _fun00060_ip = 420; continue _fun00059 }
 388:
                    update = backup.bind(entity)();
                    report = update.done;
                    offset = echoed;
                    verify = result;
                    option = output;
                    golfie = sizing;
                    yankee = update;
                    if(report) { _fun00060_ip = 514; continue _fun00059 }
 415:
                    _fun00060_ip = 181; continue _fun00059;
 420:
                    if(!zuuluu) { _fun00060_ip = 437; continue _fun00059 }
 423:
                    report = _closure3_slot0;
                    report = report.chatChannelId;
                    if(!(oscard === report)) { _fun00060_ip = 499; continue _fun00059 }
 437:
                    if(zuuluu) { _fun00060_ip = 483; continue _fun00059 }
 440:
                    zuuluu = _closure3_slot0;
                    report = zuuluu.previousChatChannelId;
                    zuuluu = zuuluu.chatChannelId;
                    if(!(report !== zuuluu)) { _fun00060_ip = 483; continue _fun00059 }
 460:
                    golfie = _closure3_slot0;
                    report = golfie.onChannelChanged;
                    zuuluu = golfie.previousChatChannelId;
                    zuuluu = report.bind(golfie)(zuuluu);
                    _fun00060_ip = 514; continue _fun00059;
 483:
                    report = _closure3_slot0;
                    zuuluu = report.checkChatViewable;
                    zuuluu = zuuluu.bind(report)();
                    _fun00060_ip = 514; continue _fun00059;
 499:
                    report = _closure3_slot0;
                    zuuluu = report.onChannelChanged;
                    zuuluu = zuuluu.bind(report)(oscard);
 514:
                    zuuluu = _closure3_slot0;
                    michal = {};
                    config = michal;
                    sequen = tangon;
                    tangon = copyDataProperties(config, sequen);
                    zuuluu['channelsWithChatOpen'] = michal;
 536:
                    return entity;
                }
            };
            entity['handleChannelRTCStoreChanged'] = tangon;
            tangon = function() {
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    michal = _closure1_slot25;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu.isEnabled;
                    if(!zuuluu) { _fun00062_ip = 53; continue _fun00061 }
 29:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.checkIsOnChannelNavigationRoute;
                    michal = michal.bind(zuuluu)();
                    michal = zuuluu.checkOpenModalKey;
                    michal = michal.bind(zuuluu)();
 53:
                    return entity;
                }
            };
            entity['handleNavigationStateChanged'] = tangon;
            tangon = function() {
                michal = _closure1_slot25;
                entity = undefined;
                michal = michal.bind(entity)();
                zuuluu = _closure3_slot0;
                michal = zuuluu.checkIsOnChannelNavigationRoute;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            entity['handleScreenStoreChanged'] = tangon;
            tangon = function() {
                _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.isEnabled;
                    if(!michal) { _fun00064_ip = 83; continue _fun00063 }
 16:
                    tangon = _closure1_slot18;
                    michal = tangon.getAlert;
                    tangon = michal.bind(tangon)();
                    michal = null;
                    michal = michal != tangon;
                    tangon = _closure3_slot0;
                    tangon = tangon.wasAlertOpen;
                    if(!(michal !== tangon)) { _fun00064_ip = 83; continue _fun00063 }
 53:
                    tangon = _closure1_slot25;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)();
                    entity = _closure3_slot0;
                    zuuluu = entity.checkChatViewable;
                    zuuluu = zuuluu.bind(entity)();
                    entity['wasAlertOpen'] = michal;
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleAlertStoreChanged'] = tangon;
            tangon = function() {
                entity = undefined;
                return entity;
            };
            entity['unsubscribeFromVoicePanelStore'] = tangon;
            zuuluu = function() {
                entity = undefined;
                return entity;
            };
            entity['unsubscribeFromChannelDetailsStore'] = zuuluu;
            zuuluu = global;
            zuuluu = zuuluu.Map;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            foxtra = tangon;
            zuuluu = new foxtra[zuuluu](romeon);
            oscard = zuuluu instanceof Object ? zuuluu : tangon;
            report = oscard.set;
            tangon = _closure1_slot21;
            zuuluu = entity.handleQuestStoreChanged;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = oscard.set;
            tangon = _closure1_slot17;
            zuuluu = entity.handleSelectedChannelStoreChanged;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = oscard.set;
            tangon = _closure1_slot10;
            zuuluu = entity.handleActionSheetStoreChanged;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = oscard.set;
            tangon = _closure1_slot19;
            zuuluu = entity.handleAppStateStoreChanged;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = oscard.set;
            tangon = _closure1_slot20;
            zuuluu = entity.handleScreenStoreChanged;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = oscard.set;
            tangon = _closure1_slot11;
            zuuluu = entity.handleChannelRTCStoreChanged;
            report = report.bind(oscard)(tangon, zuuluu);
            tangon = report.set;
            zuuluu = _closure1_slot18;
            michal = entity.handleAlertStoreChanged;
            michal = tangon.bind(report)(zuuluu, michal);
            entity['stores'] = michal;
            michal = {};
            zuuluu = entity.handleVisibleMessagesChanged;
            michal['QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'isEnabled';
        report['key'] = entity;
        entity = function() { // Original name: get
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                entity = this;
                michal = entity._isEnabled;
                zuuluu = null;
                if(!(zuuluu == michal)) { _fun00066_ip = 67; continue _fun00065 }
 15:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 30;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.shouldCalculateMobileMessageVisibilityPercentages;
                zuuluu = {};
                oscard = _closure1_slot22;
                oscard = oscard.EMBED_MOBILE;
                zuuluu['location'] = oscard;
                michal = tangon.bind(report)(zuuluu);
 67:
                entity['_isEnabled'] = michal;
                entity = entity._isEnabled;
                return entity;
            }
        };
        report['get'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = '_initialize';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                oscard = this;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 31;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getRootNavigationRef;
                golfie = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu != golfie)) { _fun00068_ip = 66; continue _fun00067 }
 44:
                report = golfie.addListener;
                tangon = oscard.handleNavigationStateChanged;
                zuuluu = 'state';
                zuuluu = report.bind(golfie)(zuuluu, tangon);
 66:
                report = _closure1_slot14;
                tangon = report.subscribe;
                zuuluu = oscard.handleVoicePanelStoreChanged;
                zuuluu = tangon.bind(report)(zuuluu);
                oscard['unsubscribeFromVoicePanelStore'] = zuuluu;
                report = _closure1_slot12;
                tangon = report.subscribe;
                zuuluu = oscard.handleChannelDetailsStoreChanged;
                zuuluu = tangon.bind(report)(zuuluu);
                oscard['unsubscribeFromChannelDetailsStore'] = zuuluu;
                report = _closure1_slot30;
                yankee = _closure2_slot0;
                offset = '_initialize';
                option = 3;
                romeon = undefined;
                verify = oscard;
                zuuluu = romeon[report](yankee, offset, verify, option, golfie);
                michal = new Array(0);
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                oscard = this;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 31;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getRootNavigationRef;
                golfie = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu != golfie)) { _fun00070_ip = 66; continue _fun00069 }
 44:
                report = golfie.removeListener;
                tangon = oscard.handleNavigationStateChanged;
                zuuluu = 'state';
                zuuluu = report.bind(golfie)(zuuluu, tangon);
 66:
                zuuluu = oscard.unsubscribeFromVoicePanelStore;
                zuuluu = zuuluu.bind(oscard)();
                zuuluu = oscard.unsubscribeFromChannelDetailsStore;
                zuuluu = zuuluu.bind(oscard)();
                report = _closure1_slot30;
                yankee = _closure2_slot0;
                offset = '_terminate';
                option = 3;
                romeon = undefined;
                verify = oscard;
                zuuluu = romeon[report](yankee, offset, verify, option, golfie);
                michal = new Array(0);
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 33;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();