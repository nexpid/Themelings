// app/stores/MessageStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot29;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00006_ip = 55; continue _fun00005 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00006_ip = 323; continue _fun00005 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golfie) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot31;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golfie = _closure1_slot31;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tangon) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    foxtra = function() { // Original name: handleConnectionOpen
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 21;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.forEach;
        zuuluu = function(argFoo) {
            oscard = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.commit;
            report = oscard.mutate;
            michal = {'ready': false, 'loadingMore': false};
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot25;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    yankee = function() { // Original name: handleCleanup
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 21;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.channelId;
                tangon = _closure1_slot12;
                michal = tangon.getChannel;
                tangon = michal.bind(tangon)(zuuluu);
                michal = null;
                if(!(michal == tangon)) { _fun00012_ip = 64; continue _fun00011 }
 31:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.clear;
                entity = entity.bind(michal)(zuuluu);
 64:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    offset = function() { // Original name: handleRelationshipUpdate
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 21;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            oscard = argFoo;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.commit;
            report = oscard.reset;
            golfie = oscard.map;
            michal = function(argFoo) {
                report = argFoo;
                tangon = report.set;
                zuuluu = _closure1_slot18;
                michal = zuuluu.isBlockedForMessage;
                zuuluu = michal.bind(zuuluu)(report);
                michal = 'blocked';
                tangon = tangon.bind(report)(michal, zuuluu);
                zuuluu = tangon.set;
                michal = _closure1_slot18;
                entity = michal.isIgnoredForMessage;
                michal = entity.bind(michal)(report);
                entity = 'ignored';
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            michal = golfie.bind(oscard)(michal);
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    entity = function(argFoo) { // Original name: performAuthorUpdate
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 21;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                report = _closure1_slot12;
                tangon = report.getChannel;
                entity = oscard.channelId;
                tangon = tangon.bind(report)(entity);
                entity = null;
                golfie = entity == tangon;
                entity = undefined;
                report = undefined;
                if(golfie) { _fun00014_ip = 45; continue _fun00013 }
 40:
                report = tangon.guild_id;
 45:
                tangon = _closure2_slot0;
                if(!(report === tangon)) { _fun00014_ip = 134; continue _fun00013 }
 56:
                report = new Array(0);
                var _closure3_slot0 = report;
                tangon = false;
                var _closure3_slot1 = tangon;
                golfie = oscard.forEach;
                tangon = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        oscard = argFoo;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 27;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getMessageAuthor;
                        michal = michal.bind(zuuluu)(oscard);
                        option = michal.nick;
                        golfie = michal.colorString;
                        michal = oscard.nick;
                        if(!(option === michal)) { _fun00016_ip = 90; continue _fun00015 }
 61:
                        michal = oscard.colorString;
                        if(!(golfie === michal)) { _fun00016_ip = 90; continue _fun00015 }
 71:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(oscard);
                        _fun00016_ip = 136; continue _fun00015;
 90:
                        zuuluu = true;
                        _closure3_slot1 = zuuluu;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.push;
                        report = oscard.merge;
                        michal = {};
                        michal['nick'] = option;
                        michal['colorString'] = golfie;
                        michal = report.bind(oscard)(michal);
                        michal = zuuluu.bind(tangon)(michal);
 136:
                        return entity;
                    }
                };
                tangon = golfie.bind(oscard)(tangon);
                zuuluu = _closure3_slot1;
                if(!zuuluu) { _fun00014_ip = 134; continue _fun00013 }
 92:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 21;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.commit;
                michal = oscard.reset;
                michal = michal.bind(oscard)(report);
                michal = zuuluu.bind(tangon)(michal);
 134:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot32 = entity;
    verify = function(argFoo) { // Original name: handleReaction
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            entity = offset.type;
            var _closure2_slot1 = entity;
            verify = offset.channelId;
            golfie = offset.messageId;
            option = offset.userId;
            entity = offset.emoji;
            var _closure2_slot2 = entity;
            entity = offset.reactionType;
            var _closure2_slot3 = entity;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.get;
            oscard = tangon.bind(oscard)(verify);
            tangon = null;
            if(!(tangon != oscard)) { _fun00018_ip = 201; continue _fun00017 }
 94:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 28;
            tangon = yankee[tangon];
            verify = verify.bind(entity)(tangon);
            tangon = verify.shouldApplyReaction;
            tangon = tangon.bind(verify)(offset);
            if(tangon) { _fun00018_ip = 132; continue _fun00017 }
 128:
            tangon = false;
            return tangon;
 132:
            verify = _closure1_slot11;
            tangon = verify.getId;
            tangon = tangon.bind(verify)();
            tangon = tangon === option;
            var _closure2_slot4 = tangon;
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    golfie = argFoo;
                    zuuluu = _closure2_slot1;
                    entity = 'MESSAGE_REACTION_ADD';
                    if(!(entity !== zuuluu)) { _fun00020_ip = 45; continue _fun00019 }
 18:
                    report = golfie.removeReaction;
                    tangon = _closure2_slot2;
                    zuuluu = _closure2_slot4;
                    entity = _closure2_slot3;
                    entity = report.bind(golfie)(tangon, zuuluu, entity);
                    _fun00020_ip = 79; continue _fun00019;
 45:
                    oscard = golfie.addReaction;
                    yankee = _closure2_slot2;
                    offset = _closure2_slot4;
                    zuuluu = _closure2_slot0;
                    verify = zuuluu.colors;
                    option = _closure2_slot3;
                    romeon = golfie;
                    entity = romeon[oscard](yankee, offset, verify, option, golfie);
 79:
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 201:
            entity = false;
            return entity;
        }
    };
    romeon = function(argFoo) { // Original name: handleMessageSendFailedAutomod
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            michal = entity.type;
            var _closure2_slot0 = michal;
            option = entity.messageData;
            report = option.message;
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 29;
            oscard = tangon[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.getFailedMessageId;
            golfie = oscard.bind(golfie)(option);
            option = report.channelId;
            oscard = _closure1_slot1;
            report = 21;
            tangon = tangon[report];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getOrCreate;
            oscard = tangon.bind(oscard)(option);
            tangon = oscard.has;
            tangon = tangon.bind(oscard)(golfie);
            if(tangon) { _fun00022_ip = 110; continue _fun00021 }
 106:
            tangon = false;
            return tangon;
 110:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.embeds;
                    entity = null;
                    entity = entity == report;
                    golfie = undefined;
                    michal = undefined;
                    if(entity) { _fun00024_ip = 66; continue _fun00023 }
 22:
                    zuuluu = report.filter;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 30;
                    entity = option[entity];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.isNotAutomodEmbed;
                    entity = zuuluu.bind(report)(entity);
                    michal = entity.length;
 66:
                    entity = 0;
                    report = tangon;
                    if(!(michal > entity)) { _fun00024_ip = 94; continue _fun00023 }
 75:
                    zuuluu = tangon.set;
                    michal = 'embeds';
                    entity = new Array(0);
                    report = zuuluu.bind(tangon)(michal, entity);
 94:
                    zuuluu = _closure2_slot0;
                    michal = 'MESSAGE_SEND_FAILED_AUTOMOD';
                    entity = report;
                    if(!(michal === zuuluu)) { _fun00024_ip = 177; continue _fun00023 }
 112:
                    tangon = report.set;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 23;
                    zuuluu = option[zuuluu];
                    golfie = oscard.bind(golfie)(zuuluu);
                    oscard = golfie.addFlag;
                    zuuluu = report.flags;
                    michal = _closure1_slot22;
                    michal = michal.EPHEMERAL;
                    zuuluu = oscard.bind(golfie)(zuuluu, michal);
                    michal = 'flags';
                    entity = tangon.bind(report)(michal, zuuluu);
 177:
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    michal = global;
    kiloes = michal.Object;
    backup = kiloes.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = backup.bind(kiloes)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 11;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot14 = option;
    option = 12;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot15 = option;
    option = 13;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot16 = option;
    option = 14;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot17 = option;
    option = 15;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot18 = option;
    option = 16;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot19 = option;
    option = 17;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot20 = option;
    option = 18;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot21 = option;
    option = 19;
    option = oscard[option];
    option = report.bind(entity)(option);
    backup = option.MessageFlags;
    var _closure1_slot22 = backup;
    backup = option.MessageStates;
    var _closure1_slot23 = backup;
    option = option.Permissions;
    var _closure1_slot24 = option;
    michal = michal.Set;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    echoed = option;
    michal = new echoed[michal](result);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot25 = michal;
    michal = 20;
    michal = oscard[michal];
    option = golfie.bind(entity)(michal);
    michal = option.prototype;
    backup = Object.create(michal, {constructor: {value: option}});
    michal = 'MessageStore';
    echoed = backup;
    result = michal;
    option = new echoed[option](result, output);
    option = option instanceof Object ? option : backup;
    var _closure1_slot26 = option;
    option = false;
    var _closure1_slot27 = option;
    option = 34;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    backup = option.Store;
    option = function(argFoo) {
        tangon = function() { // Original name: MessageStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot28;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            foxtra = tangon.waitFor;
            vacuum = _closure1_slot21;
            ctrled = _closure1_slot12;
            source = _closure1_slot13;
            update = _closure1_slot15;
            echoed = _closure1_slot10;
            result = _closure1_slot19;
            output = _closure1_slot20;
            sizing = _closure1_slot16;
            kiloes = _closure1_slot18;
            backup = _closure1_slot14;
            sequen = tangon;
            michal = sequen[foxtra](vacuum, ctrled, source, update, echoed, result, output, sizing, kiloes, backup, foxtra);
            zuuluu = tangon.syncWith;
            entity = _closure1_slot9;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = undefined;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(15);
        entity[0] = report;
        report = {};
        golfie = 'getMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot9;
                michal = tangon.hasViewingRoles;
                michal = michal.bind(tangon)();
                if(!michal) { _fun00026_ip = 157; continue _fun00025 }
 28:
                tangon = _closure1_slot12;
                michal = tangon.getChannel;
                golfie = michal.bind(tangon)(zuuluu);
                michal = null;
                michal = michal == golfie;
                report = undefined;
                oscard = undefined;
                if(michal) { _fun00026_ip = 65; continue _fun00025 }
 55:
                michal = golfie.getGuildId;
                oscard = michal.bind(golfie)();
 65:
                tangon = _closure1_slot9;
                michal = tangon.isViewingRoles;
                michal = michal.bind(tangon)(oscard);
                if(!michal) { _fun00026_ip = 157; continue _fun00025 }
 83:
                oscard = _closure1_slot17;
                tangon = oscard.can;
                michal = _closure1_slot24;
                michal = michal.VIEW_CHANNEL;
                michal = tangon.bind(oscard)(michal, golfie);
                if(michal) { _fun00026_ip = 157; continue _fun00025 }
 112:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 21;
                michal = oscard[michal];
                michal = tangon.bind(report)(michal);
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                offset = tangon;
                verify = zuuluu;
                michal = new offset[michal](verify, option);
                michal = michal instanceof Object ? michal : tangon;
                return michal;
 157:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.getOrCreate;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getMessage';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getOrCreate;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.get;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLastEditableMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            oscard = this;
            tangon = _closure1_slot21;
            zuuluu = tangon.getCurrentUser;
            zuuluu = zuuluu.bind(tangon)();
            var _closure3_slot0 = zuuluu;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 24;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            report = oscard.getMessages;
            michal = argFoo;
            report = report.bind(oscard)(michal);
            michal = report.toArray;
            michal = michal.bind(report)();
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.reverse;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 32;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    zuuluu = michal.bind(tangon)(entity);
                    report = _closure3_slot0;
                    michal = null;
                    report = michal == report;
                    michal = undefined;
                    if(report) { _fun00028_ip = 52; continue _fun00027 }
 43:
                    entity = _closure3_slot0;
                    michal = entity.id;
 52:
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getLastChatCommandMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = _closure1_slot21;
            michal = zuuluu.getCurrentUser;
            michal = michal.bind(zuuluu)();
            var _closure3_slot0 = michal;
            zuuluu = tangon.getMessages;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.toArray;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.reverse;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu.interaction;
                    oscard = null;
                    tangon = oscard == entity;
                    michal = undefined;
                    report = undefined;
                    if(tangon) { _fun00030_ip = 27; continue _fun00029 }
 22:
                    report = entity.type;
 27:
                    golfie = _closure1_slot0;
                    entity = _closure1_slot2;
                    option = 33;
                    entity = entity[option];
                    entity = golfie.bind(michal)(entity);
                    entity = entity.InteractionTypes;
                    entity = entity.APPLICATION_COMMAND;
                    entity = report === entity;
                    if(!entity) { _fun00030_ip = 122; continue _fun00029 }
 69:
                    golfie = zuuluu.interactionData;
                    verify = oscard == golfie;
                    report = undefined;
                    if(verify) { _fun00030_ip = 89; continue _fun00029 }
 84:
                    report = golfie.type;
 89:
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    tangon = golfie.bind(michal)(tangon);
                    tangon = tangon.ApplicationCommandType;
                    tangon = tangon.CHAT;
                    entity = report === tangon;
 122:
                    if(!entity) { _fun00030_ip = 170; continue _fun00029 }
 125:
                    zuuluu = zuuluu.interaction;
                    zuuluu = zuuluu.user;
                    zuuluu = zuuluu.id;
                    report = _closure3_slot0;
                    report = oscard == report;
                    michal = undefined;
                    if(report) { _fun00030_ip = 166; continue _fun00029 }
 157:
                    tangon = _closure3_slot0;
                    michal = tangon.id;
 166:
                    entity = zuuluu === michal;
 170:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getLastMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            report = this;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 24;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            tangon = report.getMessages;
            entity = argFoo;
            tangon = tangon.bind(report)(entity);
            entity = tangon.toArray;
            entity = entity.bind(tangon)();
            michal = michal.bind(zuuluu)(entity);
            entity = michal.reverse;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.get;
            entity = 0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getLastNonCurrentUserMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            oscard = this;
            tangon = _closure1_slot21;
            zuuluu = tangon.getCurrentUser;
            zuuluu = zuuluu.bind(tangon)();
            var _closure3_slot0 = zuuluu;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 24;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            report = oscard.getMessages;
            michal = argFoo;
            report = report.bind(oscard)(michal);
            michal = report.toArray;
            michal = michal.bind(report)();
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.reverse;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    entity = entity.author;
                    michal = entity.id;
                    tangon = _closure3_slot0;
                    entity = null;
                    tangon = entity == tangon;
                    entity = undefined;
                    if(tangon) { _fun00032_ip = 41; continue _fun00031 }
 32:
                    zuuluu = _closure3_slot0;
                    entity = zuuluu.id;
 41:
                    entity = michal !== entity;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'jumpedMessageId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.get;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = null;
                zuuluu = zuuluu == michal;
                if(zuuluu) { _fun00034_ip = 53; continue _fun00033 }
 47:
                entity = michal.jumpTargetId;
 53:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'focusedMessageId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.get;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = null;
                zuuluu = zuuluu == michal;
                if(zuuluu) { _fun00036_ip = 53; continue _fun00035 }
 47:
                entity = michal.focusTargetId;
 53:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'hasPresent';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00038_ip = 53; continue _fun00037 }
 47:
                entity = zuuluu.ready;
 53:
                if(!entity) { _fun00038_ip = 66; continue _fun00037 }
 56:
                michal = zuuluu.hasPresent;
                entity = michal.bind(zuuluu)();
 66:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'isReady';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getOrCreate;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.ready;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'whenReady';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = argBar;
            var _closure3_slot2 = michal;
            michal = zuuluu.addConditionalChangeListener;
            entity = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    tangon = _closure3_slot0;
                    zuuluu = tangon.isReady;
                    michal = _closure3_slot1;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = undefined;
                    if(michal) { _fun00040_ip = 29; continue _fun00039 }
 27:
                    return zuuluu;
 29:
                    michal = global;
                    michal = michal.setImmediate;
                    entity = _closure3_slot2;
                    entity = michal.bind(zuuluu)(entity);
                    entity = false;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'isLoadingMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getOrCreate;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.loadingMore;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'hasCurrentUserSentMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = _closure1_slot21;
            michal = zuuluu.getCurrentUser;
            michal = michal.bind(zuuluu)();
            var _closure3_slot0 = michal;
            zuuluu = tangon.getMessages;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.findNewest;
            entity = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = argFoo;
                    entity = entity.author;
                    michal = entity.id;
                    tangon = _closure3_slot0;
                    entity = null;
                    tangon = entity == tangon;
                    entity = undefined;
                    if(tangon) { _fun00042_ip = 41; continue _fun00041 }
 32:
                    zuuluu = _closure3_slot0;
                    entity = zuuluu.id;
 41:
                    entity = michal === entity;
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'hasCurrentUserSentMessageSinceAppStart';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot27;
            return entity;
        };
        report['value'] = oscard;
        entity[14] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = option.bind(entity)(backup);
    option['displayName'] = michal;
    michal = 35;
    michal = oscard[michal];
    result = golfie.bind(entity)(michal);
    michal = {};
    backup = function(argFoo) { // Original name: handleBackgroundSyncChannelMessages
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            result = entity.changesByChannelId;
            sizing = result;
            entity = undefined;
            yankee = global;
            offset = 'Skipping background message sync for ';
            verify = ' cached:';
            option = ' ready:';
            golfie = ' hasMoreAfter:';
            oscard = ' isConnected:';
            report = 22;
            tangon = 21;
            zuuluu = null;
            michal = undefined;
            for(foxtra in sizing)
 70:
            {
 82:
                update = foxtra;
                source = _closure1_slot1;
                echoed = _closure1_slot2;
                echoed = echoed[tangon];
                source = source.bind(entity)(echoed);
                echoed = source.get;
                sequen = echoed.bind(source)(update);
                if(zuuluu == sequen) { _fun00044_ip = 70; continue _fun00043 }
 116:
                source = _closure1_slot0;
                echoed = _closure1_slot2;
                echoed = echoed[report];
                echoed = source.bind(entity)(echoed);
                source = echoed.default;
                echoed = source.isConnected;
                echoed = echoed.bind(source)();
                source = sequen.cached;
                if(source) { _fun00044_ip = 237; continue _fun00043 }
 157:
                if(!echoed) { _fun00044_ip = 237; continue _fun00043 }
 160:
                vacuum = _closure1_slot26;
                ctrled = vacuum.log;
                equals = sequen.cached;
                limora = sequen.ready;
                status = sequen.hasMoreAfter;
                source = yankee.HermesInternal;
                source = source.concat;
                variable37 = offset;
                variable36 = update;
                quebec = verify;
                whisks = option;
                sierra = golfie;
                target = oscard;
                papara = echoed;
                source = variable37[source](variable36, quebec, equals, whisks, limora, sierra, status, target, papara, cntext);
                source = ctrled.bind(vacuum)(source);
                michal = echoed;
                _fun00044_ip = 70; continue _fun00043;
 237:
                vacuum = sequen.mergeDelta;
                source = result[update];
                ctrled = source.new_messages;
                source = result[update];
                source = source.modified_messages;
                update = result[update];
                update = update.deleted_message_ids;
                update = vacuum.bind(sequen)(ctrled, source, update);
                michal = echoed;
                _fun00044_ip = 70; continue _fun00043;
            }
 290:
            return entity;
        }
    };
    michal['BACKGROUND_SYNC_CHANNEL_MESSAGES'] = backup;
    michal['CONNECTION_OPEN'] = foxtra;
    michal['OVERLAY_INITIALIZE'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleCacheLoaded
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            zuuluu = _closure1_slot30;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 31;
            michal = michal[entity];
            entity = undefined;
            report = tangon.bind(entity)(michal);
            tangon = report.entries;
            michal = argFoo;
            michal = michal.messages;
            michal = tangon.bind(report)(michal);
            verify = zuuluu.bind(entity)(michal);
            zuuluu = verify.bind(entity)();
            michal = zuuluu.done;
            option = 2;
            golfie = 0;
            oscard = 1;
            report = 21;
            tangon = true;
            if(michal) { _fun00046_ip = 177; continue _fun00045 }
 79:
            yankee = zuuluu.value;
            michal = _closure1_slot8;
            michal = michal.bind(entity)(yankee, option);
            kiloes = michal[golfie];
            backup = michal[oscard];
            yankee = _closure1_slot1;
            michal = _closure1_slot2;
            romeon = michal[report];
            foxtra = yankee.bind(entity)(romeon);
            romeon = foxtra.getOrCreate;
            foxtra = romeon.bind(foxtra)(kiloes);
            romeon = foxtra.addCachedMessages;
            romeon = romeon.bind(foxtra)(backup, tangon);
            michal = michal[report];
            yankee = yankee.bind(entity)(michal);
            michal = yankee.commit;
            michal = michal.bind(yankee)(romeon);
            yankee = verify.bind(entity)();
            michal = yankee.done;
            zuuluu = yankee;
            if(!michal) { _fun00046_ip = 79; continue _fun00045 }
 177:
            return entity;
        }
    };
    michal['CACHE_LOADED'] = foxtra;
    foxtra = function() { // Original name: handleLoadMessages
        entity = true;
        return entity;
    };
    michal['LOAD_MESSAGES'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleLoadMessagesSuccess
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            verify = entity.channelId;
            option = entity.isBefore;
            golfie = entity.isAfter;
            foxtra = entity.jump;
            romeon = entity.hasMoreBefore;
            yankee = entity.hasMoreAfter;
            backup = entity.messages;
            offset = entity.isStale;
            tangon = entity.truncate;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            zuuluu = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.getOrCreate;
            verify = zuuluu.bind(oscard)(verify);
            oscard = verify.loadComplete;
            zuuluu = {};
            zuuluu['newMessages'] = backup;
            zuuluu['isBefore'] = option;
            zuuluu['isAfter'] = golfie;
            zuuluu['jump'] = foxtra;
            zuuluu['hasMoreBefore'] = romeon;
            zuuluu['hasMoreAfter'] = yankee;
            zuuluu['cached'] = offset;
            offset = true;
            zuuluu['hasFetched'] = offset;
            oscard = oscard.bind(verify)(zuuluu);
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            if(zuuluu) { _fun00048_ip = 168; continue _fun00047 }
 156:
            tangon = !option;
            if(!tangon) { _fun00048_ip = 165; continue _fun00047 }
 162:
            tangon = !golfie;
 165:
            zuuluu = tangon;
 168:
            if(zuuluu) { _fun00048_ip = 183; continue _fun00047 }
 171:
            tangon = option;
            if(!tangon) { _fun00048_ip = 180; continue _fun00047 }
 177:
            tangon = golfie;
 180:
            zuuluu = tangon;
 183:
            tangon = oscard;
            if(zuuluu) { _fun00048_ip = 201; continue _fun00047 }
 189:
            zuuluu = oscard.truncate;
            tangon = zuuluu.bind(oscard)(option, golfie);
 201:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    michal['LOAD_MESSAGES_SUCCESS'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleLoadMessagesFailure
        entity = argFoo;
        golfie = entity.channelId;
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 21;
        report = tangon[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(report);
        report = oscard.getOrCreate;
        oscard = report.bind(oscard)(golfie);
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.commit;
        report = oscard.mutate;
        michal = {'loadingMore': false, 'error': true};
        michal = report.bind(oscard)(michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['LOAD_MESSAGES_FAILURE'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleLoadMessagesSuccessCached
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            offset = entity.channelId;
            romeon = entity.jump;
            golfie = entity.focus;
            oscard = entity.before;
            verify = entity.after;
            yankee = entity.limit;
            tangon = entity.truncate;
            option = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            zuuluu = entity[report];
            entity = undefined;
            option = option.bind(entity)(zuuluu);
            zuuluu = option.getOrCreate;
            offset = zuuluu.bind(option)(offset);
            zuuluu = null;
            if(!(zuuluu != romeon)) { _fun00050_ip = 98; continue _fun00049 }
 86:
            option = romeon.present;
            if(option) { _fun00050_ip = 235; continue _fun00049 }
 98:
            foxtra = zuuluu == golfie;
            option = undefined;
            if(foxtra) { _fun00050_ip = 112; continue _fun00049 }
 107:
            option = golfie.messageId;
 112:
            if(!(zuuluu == option)) { _fun00050_ip = 215; continue _fun00049 }
 116:
            foxtra = zuuluu == romeon;
            option = undefined;
            if(foxtra) { _fun00050_ip = 130; continue _fun00049 }
 125:
            option = romeon.messageId;
 130:
            if(!(zuuluu == option)) { _fun00050_ip = 171; continue _fun00049 }
 134:
            foxtra = zuuluu == oscard;
            if(!foxtra) { _fun00050_ip = 145; continue _fun00049 }
 141:
            foxtra = zuuluu == verify;
 145:
            option = offset;
            if(foxtra) { _fun00050_ip = 246; continue _fun00049 }
 151:
            backup = offset.loadFromCache;
            foxtra = zuuluu != oscard;
            option = backup.bind(offset)(foxtra, yankee);
            _fun00050_ip = 246; continue _fun00049;
 171:
            output = offset.jumpToMessage;
            ctrled = romeon.messageId;
            source = romeon.flash;
            update = romeon.offset;
            echoed = romeon.returnMessageId;
            result = romeon.jumpType;
            vacuum = offset;
            option = vacuum[output](ctrled, source, update, echoed, result, output);
            _fun00050_ip = 246; continue _fun00049;
 215:
            romeon = offset.focusOnMessage;
            golfie = golfie.messageId;
            option = romeon.bind(offset)(golfie);
            _fun00050_ip = 246; continue _fun00049;
 235:
            golfie = offset.jumpToPresent;
            option = golfie.bind(offset)(yankee);
 246:
            golfie = zuuluu == tangon;
            if(golfie) { _fun00050_ip = 267; continue _fun00049 }
 253:
            tangon = zuuluu == oscard;
            if(!tangon) { _fun00050_ip = 264; continue _fun00049 }
 260:
            tangon = zuuluu == verify;
 264:
            golfie = tangon;
 267:
            if(golfie) { _fun00050_ip = 284; continue _fun00049 }
 270:
            tangon = zuuluu != oscard;
            if(!tangon) { _fun00050_ip = 281; continue _fun00049 }
 277:
            tangon = zuuluu != verify;
 281:
            golfie = tangon;
 284:
            tangon = option;
            if(golfie) { _fun00050_ip = 310; continue _fun00049 }
 290:
            golfie = option.truncate;
            oscard = zuuluu != oscard;
            zuuluu = zuuluu != verify;
            tangon = golfie.bind(option)(oscard, zuuluu);
 310:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    michal['LOAD_MESSAGES_SUCCESS_CACHED'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleLocalMessagesLoaded
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.getOrCreate;
            tangon = michal.channelId;
            golfie = oscard.bind(golfie)(tangon);
            tangon = golfie.cached;
            tangon = !tangon;
            if(!tangon) { _fun00052_ip = 62; continue _fun00051 }
 56:
            tangon = golfie.ready;
 62:
            if(tangon) { _fun00052_ip = 117; continue _fun00051 }
 65:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.commit;
            oscard = golfie.addCachedMessages;
            report = michal.messages;
            michal = michal.stale;
            michal = oscard.bind(golfie)(report, michal);
            michal = zuuluu.bind(tangon)(michal);
 117:
            return entity;
        }
    };
    michal['LOCAL_MESSAGES_LOADED'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleLoadMessageInteractionDataSuccess
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golfie = entity.messageId;
            option = entity.channelId;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.get;
            oscard = tangon.bind(oscard)(option);
            tangon = null;
            if(!(tangon != oscard)) { _fun00054_ip = 120; continue _fun00053 }
 60:
            tangon = oscard.has;
            tangon = tangon.bind(oscard)(golfie);
            if(!tangon) { _fun00054_ip = 120; continue _fun00053 }
 73:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.set;
                entity = _closure2_slot0;
                michal = entity.interactionData;
                entity = 'interactionData';
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 120:
            entity = false;
            return entity;
        }
    };
    michal['LOAD_MESSAGE_INTERACTION_DATA_SUCCESS'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleTruncateMessages
        entity = argFoo;
        verify = entity.channelId;
        option = entity.truncateBottom;
        golfie = entity.truncateTop;
        tangon = _closure1_slot26;
        zuuluu = tangon.log;
        michal = global;
        michal = michal.HermesInternal;
        offset = michal.concat;
        sizing = 'Truncating messages for ';
        backup = ' bottom:';
        romeon = ' top:';
        kiloes = verify;
        foxtra = option;
        yankee = golfie;
        michal = sizing[offset](kiloes, backup, foxtra, romeon, yankee, offset);
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot1;
        report = _closure1_slot2;
        michal = 21;
        tangon = report[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(tangon);
        tangon = oscard.getOrCreate;
        oscard = tangon.bind(oscard)(verify);
        tangon = oscard.truncate;
        tangon = tangon.bind(oscard)(option, golfie);
        michal = report[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.commit;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['TRUNCATE_MESSAGES'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleClearMessages
        entity = argFoo;
        report = entity.channelId;
        tangon = _closure1_slot26;
        zuuluu = tangon.log;
        entity = global;
        entity = entity.HermesInternal;
        oscard = entity.concat;
        entity = 'Clearing messages for ';
        entity = oscard.bind(entity)(report);
        entity = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 21;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.clear;
        zuuluu = zuuluu.bind(tangon)(report);
        zuuluu = _closure1_slot25;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    michal['CLEAR_MESSAGES'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleIncomingMessage
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            yankee = entity.channelId;
            oscard = entity.message;
            entity = entity.isPushNotification;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            golfie = 21;
            zuuluu = zuuluu[golfie];
            tangon = undefined;
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getOrCreate;
            report = zuuluu.bind(report)(yankee);
            if(entity) { _fun00056_ip = 244; continue _fun00055 }
 61:
            entity = report.ready;
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00056_ip = 242; continue _fun00055 }
 79:
            option = oscard.nonce;
            zuuluu = null;
            zuuluu = zuuluu != option;
            if(!zuuluu) { _fun00056_ip = 113; continue _fun00055 }
 94:
            verify = oscard.state;
            option = _closure1_slot23;
            option = option.SENDING;
            zuuluu = verify !== option;
 113:
            if(!zuuluu) { _fun00056_ip = 136; continue _fun00055 }
 116:
            offset = _closure1_slot25;
            verify = offset.has;
            option = oscard.nonce;
            zuuluu = verify.bind(offset)(option);
 136:
            verify = report;
            if(!zuuluu) { _fun00056_ip = 179; continue _fun00055 }
 142:
            option = report.remove;
            zuuluu = oscard.nonce;
            verify = option.bind(report)(zuuluu);
            romeon = _closure1_slot25;
            offset = romeon.delete;
            option = oscard.nonce;
            option = offset.bind(romeon)(option);
 179:
            option = verify.receiveMessage;
            offset = _closure1_slot13;
            zuuluu = offset.isAtBottom;
            offset = zuuluu.bind(offset)(yankee);
            zuuluu = true;
            zuuluu = zuuluu === offset;
            verify = option.bind(verify)(oscard, zuuluu);
            option = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            option = option.bind(tangon)(zuuluu);
            zuuluu = option.commit;
            zuuluu = zuuluu.bind(option)(verify);
            entity = undefined;
 242:
            _fun00056_ip = 320; continue _fun00055;
 244:
            yankee = _closure1_slot26;
            offset = yankee.log;
            verify = oscard.id;
            option = oscard.channel_id;
            zuuluu = 'Inserting message tapped on from a push notification';
            zuuluu = offset.bind(yankee)(zuuluu, verify, option);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[golfie];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.commit;
            michal = report.receivePushNotification;
            michal = michal.bind(report)(oscard);
            michal = zuuluu.bind(tangon)(michal);
            entity = undefined;
 320:
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleSendFailed
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            golfie = entity.messageId;
            entity = entity.reason;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getOrCreate;
            oscard = tangon.bind(oscard)(option);
            tangon = null;
            if(!(tangon != oscard)) { _fun00058_ip = 176; continue _fun00057 }
 67:
            option = oscard.has;
            option = option.bind(oscard)(golfie);
            if(!option) { _fun00058_ip = 176; continue _fun00057 }
 80:
            verify = oscard.get;
            option = true;
            offset = verify.bind(oscard)(golfie, option);
            verify = tangon == offset;
            tangon = undefined;
            if(verify) { _fun00058_ip = 112; continue _fun00057 }
 102:
            verify = offset.isPoll;
            tangon = verify.bind(offset)();
 112:
            if(!(option !== tangon)) { _fun00058_ip = 135; continue _fun00057 }
 116:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    report = argFoo;
                    tangon = report.set;
                    entity = _closure1_slot23;
                    zuuluu = entity.SEND_FAILED;
                    entity = 'state';
                    oscard = tangon.bind(report)(entity, zuuluu);
                    entity = oscard.isCommandType;
                    entity = entity.bind(oscard)();
                    if(entity) { _fun00060_ip = 99; continue _fun00059 }
 47:
                    tangon = _closure2_slot0;
                    report = null;
                    entity = oscard;
                    if(!(report != tangon)) { _fun00060_ip = 199; continue _fun00059 }
 63:
                    golfie = oscard.set;
                    tangon = _closure2_slot0;
                    tangon = report != tangon;
                    report = '';
                    if(!tangon) { _fun00060_ip = 87; continue _fun00059 }
 83:
                    report = _closure2_slot0;
 87:
                    tangon = 'interactionError';
                    entity = golfie.bind(oscard)(tangon, report);
                    _fun00060_ip = 199; continue _fun00059;
 99:
                    report = oscard.set;
                    golfie = _closure2_slot0;
                    tangon = null;
                    golfie = tangon != golfie;
                    tangon = '';
                    if(!golfie) { _fun00060_ip = 125; continue _fun00059 }
 121:
                    tangon = _closure2_slot0;
 125:
                    zuuluu = 'interactionError';
                    report = report.bind(oscard)(zuuluu, tangon);
                    tangon = report.set;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 23;
                    oscard = oscard[zuuluu];
                    zuuluu = undefined;
                    golfie = golfie.bind(zuuluu)(oscard);
                    oscard = golfie.addFlag;
                    zuuluu = report.flags;
                    michal = _closure1_slot22;
                    michal = michal.EPHEMERAL;
                    zuuluu = oscard.bind(golfie)(zuuluu, michal);
                    michal = 'flags';
                    entity = tangon.bind(report)(michal, zuuluu);
 199:
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            _fun00058_ip = 146; continue _fun00057;
 135:
            zuuluu = oscard.remove;
            tangon = zuuluu.bind(oscard)(golfie);
 146:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 176:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_SEND_FAILED'] = foxtra;
    michal['MESSAGE_SEND_FAILED_AUTOMOD'] = romeon;
    michal['MESSAGE_EDIT_FAILED_AUTOMOD'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageUpdate
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            michal = entity.message;
            golfie = michal.id;
            entity = entity.message;
            option = entity.channel_id;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getOrCreate;
            oscard = tangon.bind(oscard)(option);
            tangon = null;
            if(!(tangon != oscard)) { _fun00062_ip = 131; continue _fun00061 }
 71:
            tangon = oscard.has;
            tangon = tangon.bind(oscard)(golfie);
            if(!tangon) { _fun00062_ip = 131; continue _fun00061 }
 84:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 25;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.updateMessageRecord;
                entity = _closure2_slot0;
                michal = entity.message;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 131:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_UPDATE'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageExplicitContentScanTimeout
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            option = entity.messageId;
            oscard = entity.channelId;
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            michal = entity[report];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.get;
            golfie = michal.bind(tangon)(oscard);
            michal = null;
            if(!(michal != golfie)) { _fun00064_ip = 131; continue _fun00063 }
 54:
            michal = golfie.has;
            michal = michal.bind(golfie)(option);
            if(!michal) { _fun00064_ip = 131; continue _fun00063 }
 67:
            oscard = golfie.update;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = 26;
            tangon = michal[tangon];
            tangon = verify.bind(entity)(tangon);
            tangon = tangon.handleExplicitMediaScanTimeoutForMessage;
            tangon = oscard.bind(golfie)(option, tangon);
            zuuluu = _closure1_slot1;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 131:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageDelete
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            entity = argFoo;
            tangon = entity.id;
            oscard = entity.channelId;
            report = _closure1_slot1;
            entity = _closure1_slot2;
            golfie = 21;
            zuuluu = entity[golfie];
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            zuuluu = report.getOrCreate;
            verify = zuuluu.bind(report)(oscard);
            option = null;
            if(!(option != verify)) { _fun00066_ip = 212; continue _fun00065 }
 58:
            zuuluu = verify.has;
            zuuluu = zuuluu.bind(verify)(tangon);
            if(!zuuluu) { _fun00066_ip = 212; continue _fun00065 }
 74:
            zuuluu = verify.revealedMessageId;
            report = verify;
            if(!(zuuluu === tangon)) { _fun00066_ip = 157; continue _fun00065 }
 87:
            zuuluu = verify.getAfter;
            offset = zuuluu.bind(verify)(tangon);
            if(!(option != offset)) { _fun00066_ip = 111; continue _fun00065 }
 102:
            zuuluu = offset.blocked;
            if(zuuluu) { _fun00066_ip = 131; continue _fun00065 }
 111:
            oscard = verify.mutate;
            zuuluu = {};
            zuuluu['revealedMessageId'] = option;
            zuuluu = oscard.bind(verify)(zuuluu);
            _fun00066_ip = 154; continue _fun00065;
 131:
            option = verify.mutate;
            oscard = {};
            offset = offset.id;
            oscard['revealedMessageId'] = offset;
            zuuluu = option.bind(verify)(oscard);
 154:
            report = zuuluu;
 157:
            zuuluu = report.remove;
            oscard = zuuluu.bind(report)(tangon);
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.commit;
            zuuluu = zuuluu.bind(report)(oscard);
            zuuluu = _closure1_slot25;
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 212:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_DELETE'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageDeleteBulk
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            entity = argFoo;
            tangon = entity.ids;
            option = entity.channelId;
            entity = undefined;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            golfie = 21;
            report = report[golfie];
            oscard = oscard.bind(entity)(report);
            report = oscard.getOrCreate;
            report = report.bind(oscard)(option);
            verify = null;
            if(!(verify != report)) { _fun00068_ip = 275; continue _fun00067 }
 65:
            oscard = report.removeMany;
            offset = oscard.bind(report)(tangon);
            _closure2_slot0 = offset;
            if(!(report !== offset)) { _fun00068_ip = 271; continue _fun00067 }
 87:
            report = offset.revealedMessageId;
            oscard = offset;
            if(!(verify != report)) { _fun00068_ip = 226; continue _fun00067 }
 103:
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 24;
            report = yankee[report];
            yankee = option.bind(entity)(report);
            option = yankee.some;
            report = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.revealedMessageId;
                entity = argFoo;
                entity = michal === entity;
                return entity;
            };
            report = option.bind(yankee)(tangon, report);
            oscard = offset;
            if(!report) { _fun00068_ip = 226; continue _fun00067 }
 146:
            option = offset.getAfter;
            report = offset.revealedMessageId;
            yankee = option.bind(offset)(report);
            if(!(verify != yankee)) { _fun00068_ip = 176; continue _fun00067 }
 167:
            report = yankee.blocked;
            if(report) { _fun00068_ip = 196; continue _fun00067 }
 176:
            option = offset.mutate;
            report = {};
            report['revealedMessageId'] = verify;
            report = option.bind(offset)(report);
            _fun00068_ip = 219; continue _fun00067;
 196:
            verify = offset.mutate;
            option = {};
            yankee = yankee.id;
            option['revealedMessageId'] = yankee;
            report = verify.bind(offset)(option);
 219:
            _closure2_slot0 = report;
            oscard = report;
 226:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.commit;
            zuuluu = zuuluu.bind(report)(oscard);
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                zuuluu = _closure1_slot25;
                michal = zuuluu.delete;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
 271:
            entity = false;
            return entity;
 275:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_DELETE_BULK'] = romeon;
    romeon = function(argFoo) { // Original name: handleMessageReveal
        entity = argFoo;
        option = entity.channelId;
        golfie = entity.messageId;
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 21;
        report = tangon[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(report);
        report = oscard.getOrCreate;
        oscard = report.bind(oscard)(option);
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.commit;
        report = oscard.mutate;
        michal = {};
        michal['revealedMessageId'] = golfie;
        michal = report.bind(oscard)(michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['MESSAGE_REVEAL'] = romeon;
    romeon = function(argFoo) { // Original name: handleThreadCreateLocal
        entity = argFoo;
        golfie = entity.channelId;
        zuuluu = _closure1_slot1;
        report = _closure1_slot2;
        michal = 21;
        tangon = report[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(tangon);
        tangon = oscard.getOrCreate;
        golfie = tangon.bind(oscard)(golfie);
        oscard = golfie.loadComplete;
        tangon = {'newMessages': null, 'hasMoreAfter': false, 'hasMoreBefore': false};
        option = new Array(0);
        tangon['newMessages'] = option;
        tangon = oscard.bind(golfie)(tangon);
        michal = report[michal];
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.commit;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['THREAD_CREATE_LOCAL'] = romeon;
    michal['CHANNEL_DELETE'] = yankee;
    michal['THREAD_DELETE'] = yankee;
    michal['GUILD_DELETE'] = yankee;
    michal['RELATIONSHIP_ADD'] = offset;
    michal['RELATIONSHIP_UPDATE'] = offset;
    michal['RELATIONSHIP_REMOVE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildMembersChunkBatch
        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
            zuuluu = _closure1_slot30;
            entity = argFoo;
            michal = entity.chunks;
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00070_ip = 69; continue _fun00069 }
 35:
            oscard = _closure1_slot32;
            michal = zuuluu.value;
            michal = michal.guildId;
            michal = oscard.bind(entity)(michal);
            oscard = tangon.bind(entity)();
            michal = oscard.done;
            zuuluu = oscard;
            if(!michal) { _fun00070_ip = 35; continue _fun00069 }
 69:
            return entity;
        }
    };
    michal['GUILD_MEMBERS_CHUNK_BATCH'] = offset;
    offset = function(argFoo) { // Original name: handleThreadMemberListUpdate
        zuuluu = _closure1_slot32;
        entity = argFoo;
        michal = entity.guildId;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['THREAD_MEMBER_LIST_UPDATE'] = offset;
    michal['MESSAGE_REACTION_ADD'] = verify;
    offset = function(argFoo) { // Original name: handleReactionBatch
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            golfie = entity.messageId;
            entity = entity.reactions;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.get;
            oscard = tangon.bind(oscard)(option);
            tangon = null;
            if(!(tangon != oscard)) { _fun00072_ip = 113; continue _fun00071 }
 66:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.addReactionBatch;
                    michal = _closure2_slot0;
                    report = _closure1_slot21;
                    entity = report.getCurrentUser;
                    report = entity.bind(report)();
                    entity = null;
                    oscard = entity == report;
                    entity = undefined;
                    if(oscard) { _fun00074_ip = 48; continue _fun00073 }
 43:
                    entity = report.id;
 48:
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 113:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_REACTION_ADD_MANY'] = offset;
    michal['MESSAGE_REACTION_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveAllReactions
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            golfie = entity.messageId;
            tangon = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            zuuluu = entity[report];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.get;
            oscard = zuuluu.bind(tangon)(oscard);
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00076_ip = 103; continue _fun00075 }
 54:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                zuuluu = tangon.set;
                michal = 'reactions';
                entity = new Array(0);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 103:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_REACTION_REMOVE_ALL'] = verify;
    verify = function(argFoo) { // Original name: handleRemoveEmojiReactions
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            golfie = entity.messageId;
            entity = entity.emoji;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot1;
            entity = _closure1_slot2;
            report = 21;
            tangon = entity[report];
            entity = undefined;
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.get;
            oscard = tangon.bind(oscard)(option);
            tangon = null;
            if(!(tangon != oscard)) { _fun00078_ip = 113; continue _fun00077 }
 66:
            tangon = oscard.update;
            zuuluu = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.removeReactionsForEmoji;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(oscard)(golfie, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
 113:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_REACTION_REMOVE_EMOJI'] = verify;
    verify = function() { // Original name: handleLogout
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 21;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.forEach;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.clear;
            michal = argFoo;
            michal = michal.channelId;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot25;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleUploadStart
        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
            entity = argFoo;
            entity = entity.message;
            zuuluu = entity.nonce;
            michal = null;
            if(!(michal != zuuluu)) { _fun00080_ip = 43; continue _fun00079 }
 20:
            zuuluu = _closure1_slot25;
            michal = zuuluu.add;
            entity = entity.nonce;
            entity = michal.bind(zuuluu)(entity);
 43:
            entity = undefined;
            return entity;
        }
    };
    michal['UPLOAD_START'] = verify;
    verify = function(argFoo) { // Original name: handleUploadFail
        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            michal = entity.messageRecord;
            zuuluu = null;
            tangon = zuuluu == michal;
            entity = undefined;
            golfie = undefined;
            if(tangon) { _fun00082_ip = 33; continue _fun00081 }
 27:
            golfie = michal.nonce;
 33:
            if(!(zuuluu != golfie)) { _fun00082_ip = 177; continue _fun00081 }
 40:
            report = _closure1_slot25;
            tangon = report.has;
            tangon = tangon.bind(report)(golfie);
            if(!tangon) { _fun00082_ip = 177; continue _fun00081 }
 60:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            report = 21;
            tangon = tangon[report];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getOrCreate;
            tangon = tangon.bind(oscard)(option);
            oscard = tangon.get;
            option = oscard.bind(tangon)(golfie);
            if(!(zuuluu != option)) { _fun00082_ip = 179; continue _fun00081 }
 105:
            zuuluu = tangon.remove;
            oscard = zuuluu.bind(tangon)(golfie);
            tangon = oscard.merge;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            tangon = tangon.bind(oscard)(zuuluu);
            oscard = _closure1_slot25;
            zuuluu = oscard.delete;
            zuuluu = zuuluu.bind(oscard)(golfie);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[report];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.commit;
            michal = michal.bind(zuuluu)(tangon);
 177:
            return entity;
 179:
            return entity;
        }
    };
    michal['UPLOAD_FAIL'] = verify;
    tangon = function(argFoo) { // Original name: handleLocalIncomingMesssage
        _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
            entity = argFoo;
            tangon = entity.message;
            zuuluu = _closure1_slot21;
            entity = zuuluu.getCurrentUser;
            zuuluu = entity.bind(zuuluu)();
            report = null;
            entity = report != tangon;
            if(!entity) { _fun00084_ip = 43; continue _fun00083 }
 33:
            oscard = tangon.author;
            entity = report != oscard;
 43:
            if(!entity) { _fun00084_ip = 50; continue _fun00083 }
 46:
            entity = report != zuuluu;
 50:
            if(!entity) { _fun00084_ip = 73; continue _fun00083 }
 53:
            tangon = tangon.author;
            tangon = tangon.id;
            zuuluu = zuuluu.id;
            entity = tangon === zuuluu;
 73:
            if(!entity) { _fun00084_ip = 82; continue _fun00083 }
 76:
            entity = true;
            _closure1_slot27 = entity;
 82:
            entity = undefined;
            return entity;
        }
    };
    michal['LOCAL_MESSAGE_CREATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    echoed = tangon;
    output = michal;
    michal = new echoed[option](result, output, sizing);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 36;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/MessageStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();