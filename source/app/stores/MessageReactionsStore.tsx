// app/stores/MessageReactionsStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = argCor;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot14;
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
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    option = function(argFoo) { // Original name: handleReaction
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.type;
            option = entity.messageId;
            zuuluu = entity.userId;
            golfie = entity.emoji;
            oscard = entity.reactionType;
            tangon = _closure1_slot12;
            entity = tangon.ensure;
            entity = entity.bind(tangon)(option, golfie, oscard);
            tangon = 'MESSAGE_REACTION_ADD';
            if(!(tangon !== report)) { _fun00006_ip = 70; continue _fun00005 }
 58:
            tangon = entity.users;
            tangon = delete tangon[zuuluu];
            _fun00006_ip = 101; continue _fun00005;
 70:
            tangon = _closure1_slot10;
            michal = tangon.getUser;
            michal = michal.bind(tangon)(zuuluu);
            tangon = null;
            if(!(tangon != michal)) { _fun00006_ip = 101; continue _fun00005 }
 91:
            entity = entity.users;
            entity[zuuluu] = michal;
 101:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 8;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = function() {
        report = function() { // Original name: Reaction
            zuuluu = this;
            tangon = _closure1_slot5;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = false;
            zuuluu['fetched'] = michal;
            michal = {};
            zuuluu['users'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot6;
        entity = {};
        zuuluu = 'ensure';
        entity['key'] = zuuluu;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argBar;
                option = entity.name;
                entity = entity.id;
                tangon = null;
                michal = tangon != entity;
                golfie = '';
                oscard = golfie;
                if(!michal) { _fun00008_ip = 32; continue _fun00007 }
 29:
                oscard = entity;
 32:
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                kiloes = argFoo;
                michal = ':';
                verify = argBaz;
                sizing = golfie;
                backup = michal;
                foxtra = option;
                romeon = michal;
                yankee = oscard;
                offset = michal;
                zuuluu = sizing[report](kiloes, backup, foxtra, romeon, yankee, offset, verify, option);
                michal = _closure1_slot11;
                entity = michal[zuuluu];
                if(!(tangon == entity)) { _fun00008_ip = 119; continue _fun00007 }
 92:
                tangon = _closure2_slot0;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                sizing = report;
                tangon = new sizing[tangon](kiloes);
                entity = tangon instanceof Object ? tangon : report;
 119:
                michal[zuuluu] = entity;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = undefined;
        entity = null;
        entity = tangon.bind(michal)(report, entity, zuuluu);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot12 = michal;
    michal = 10;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: MessageReactionsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot5;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot13;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot6;
        report = {};
        oscard = 'getReactions';
        report['key'] = oscard;
        entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                option = argFoo;
                golfie = argBar;
                oscard = argBaz;
                report = argGra;
                zuuluu = _closure1_slot12;
                entity = zuuluu.ensure;
                entity = entity.bind(zuuluu)(golfie, oscard, report);
                zuuluu = entity.fetched;
                if(zuuluu) { _fun00010_ip = 175; continue _fun00009 }
 44:
                tangon = _closure1_slot9;
                zuuluu = tangon.getChannel;
                offset = zuuluu.bind(tangon)(option);
                zuuluu = null;
                tangon = zuuluu != offset;
                verify = null;
                if(!tangon) { _fun00010_ip = 79; continue _fun00009 }
 69:
                tangon = offset.getGuildId;
                verify = tangon.bind(offset)();
 79:
                if(!(zuuluu != verify)) { _fun00010_ip = 101; continue _fun00009 }
 83:
                tangon = _closure1_slot7;
                zuuluu = tangon.isLurking;
                zuuluu = zuuluu.bind(tangon)(verify);
                if(zuuluu) { _fun00010_ip = 171; continue _fun00009 }
 101:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getReactors;
                michal = {};
                michal['channelId'] = option;
                michal['messageId'] = golfie;
                michal['emoji'] = oscard;
                oscard = argCor;
                michal['limit'] = oscard;
                michal['type'] = report;
                michal = zuuluu.bind(tangon)(michal);
                michal = true;
                entity['fetched'] = michal;
                _fun00010_ip = 175; continue _fun00009;
 171:
                michal = undefined;
                return michal;
 175:
                entity = entity.users;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'MessageReactionsStore';
    golfie['displayName'] = michal;
    michal = 11;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = verify;
    michal['MESSAGE_REACTION_ADD'] = option;
    michal['MESSAGE_REACTION_REMOVE'] = option;
    tangon = function(argFoo) { // Original name: handleAddUserReactions
        michal = argFoo;
        golfie = michal.messageId;
        zuuluu = michal.users;
        oscard = michal.emoji;
        report = michal.reactionType;
        tangon = _closure1_slot12;
        michal = tangon.ensure;
        michal = michal.bind(tangon)(golfie, oscard, report);
        var _closure2_slot0 = michal;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            report = argFoo;
            entity = _closure2_slot0;
            zuuluu = entity.users;
            michal = report.id;
            entity = _closure1_slot8;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            golfie = tangon;
            oscard = report;
            entity = new golfie[entity](oscard, report);
            entity = entity instanceof Object ? entity : tangon;
            zuuluu[michal] = entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['MESSAGE_REACTION_ADD_USERS'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/MessageReactionsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();