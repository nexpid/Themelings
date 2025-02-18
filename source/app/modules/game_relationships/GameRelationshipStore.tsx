// app/modules/game_relationships/GameRelationshipStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot16;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: recountRelationshipTypes
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(michal);
            report = oscard.countBy;
            golfie = _closure1_slot11;
            tangon = golfie.values;
            michal = true;
            tangon = tangon.bind(golfie)(entity, michal);
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.type;
                return entity;
            };
            golfie = report.bind(oscard)(tangon, michal);
            michal = _closure1_slot7;
            michal = michal.PENDING_INCOMING;
            tangon = golfie[michal];
            oscard = 0;
            if(!(entity !== tangon)) { _fun00006_ip = 84; continue _fun00005 }
 81:
            oscard = tangon;
 84:
            tangon = _closure1_slot7;
            tangon = tangon.PENDING_OUTGOING;
            tangon = golfie[tangon];
            report = 0;
            if(!(entity !== tangon)) { _fun00006_ip = 107; continue _fun00005 }
 104:
            report = tangon;
 107:
            tangon = _closure1_slot7;
            tangon = tangon.FRIEND;
            tangon = golfie[tangon];
            _closure1_slot12 = oscard;
            _closure1_slot13 = report;
            michal = 0;
            if(!(entity !== tangon)) { _fun00006_ip = 138; continue _fun00005 }
 135:
            michal = tangon;
 138:
            _closure1_slot14 = michal;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: upsert
        report = argFoo;
        tangon = _closure1_slot11;
        zuuluu = tangon.set;
        golfie = _closure1_slot8;
        oscard = report.id;
        michal = report.applicationId;
        entity = undefined;
        michal = golfie.bind(entity)(oscard, michal);
        michal = zuuluu.bind(tangon)(michal, report);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    michal = 0;
    option = oscard[michal];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RelationshipTypes;
    var _closure1_slot7 = option;
    option = function(argFoo, argBar) { // Original name: GAME_RELATIONSHIP_KEY
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argBar;
        michal = '-';
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot8 = option;
    option = function(argFoo) { // Original name: GameRelationshipIndexes_BY_APPLICATION_ID
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'app-id-';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot9 = option;
    option = function(argFoo) { // Original name: GameRelationshipIndexes_BY_USER_ID
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = 'user-id-';
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot10 = option;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    yankee = option.SecondaryIndexMap;
    option = yankee.prototype;
    verify = Object.create(option, {constructor: {value: yankee}});
    backup = function(argFoo) { // Original name: gameRelationshipsIndex
        michal = argFoo;
        entity = new Array(0);
        oscard = entity.push;
        golfie = _closure1_slot9;
        zuuluu = michal.applicationId;
        report = undefined;
        zuuluu = golfie.bind(report)(zuuluu);
        zuuluu = oscard.bind(entity)(zuuluu);
        zuuluu = entity.push;
        tangon = _closure1_slot10;
        michal = michal.id;
        michal = tangon.bind(report)(michal);
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    foxtra = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.since;
        entity = global;
        entity = entity.HermesInternal;
        michal = entity.concat;
        entity = '';
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    kiloes = verify;
    option = new kiloes[yankee](backup, foxtra, romeon);
    option = option instanceof Object ? option : verify;
    var _closure1_slot11 = option;
    var _closure1_slot12 = michal;
    var _closure1_slot13 = michal;
    var _closure1_slot14 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GameRelationshipStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot15;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getPendingIncomingCount';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golfie = 'getPendingOutgoingCount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getGameFriendCount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getGameFriendsForApplication';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot11;
            zuuluu = tangon.values;
            report = _closure1_slot9;
            michal = undefined;
            entity = argFoo;
            michal = report.bind(michal)(entity);
            entity = true;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot7;
                entity = entity.FRIEND;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getGameRelationshipsForUser';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = _closure1_slot11;
            zuuluu = tangon.values;
            report = _closure1_slot10;
            michal = undefined;
            entity = argFoo;
            michal = report.bind(michal)(entity);
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getGameRelationshipsForUserByType';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = this;
            michal = argBar;
            var _closure3_slot0 = michal;
            zuuluu = tangon.getGameRelationshipsForUser;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure3_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getGameFriendsForUser';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.getGameRelationshipsForUserByType;
            entity = _closure1_slot7;
            michal = entity.FRIEND;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getGameRelationshipCount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot11;
            entity = michal.size;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getGameRelationships';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getGameRelationshipsVersion';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot11;
            entity = entity.version;
            return entity;
        };
        report['value'] = oscard;
        entity[9] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GameRelationshipStore';
    option['displayName'] = michal;
    michal = 9;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        zuuluu = _closure1_slot11;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        michal = argFoo;
        tangon = michal.gameRelationships;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            entity = argFoo;
            zuuluu = _closure1_slot18;
            michal = {};
            tangon = entity.id;
            michal['id'] = tangon;
            tangon = entity.application_id;
            michal['applicationId'] = tangon;
            tangon = entity.type;
            michal['type'] = tangon;
            tangon = entity.since;
            michal['since'] = tangon;
            entity = entity.dm_access_type;
            michal['dmAccessType'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot17;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipAdd
        tangon = _closure1_slot18;
        entity = argFoo;
        zuuluu = entity.gameRelationship;
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        michal = _closure1_slot17;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['GAME_RELATIONSHIP_ADD'] = verify;
    tangon = function(argFoo) { // Original name: handleGameRelationshipRemove
        entity = argFoo;
        golfie = entity.userId;
        oscard = entity.applicationId;
        report = _closure1_slot11;
        tangon = report.delete;
        zuuluu = _closure1_slot8;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(golfie, oscard);
        zuuluu = tangon.bind(report)(zuuluu);
        michal = _closure1_slot17;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['GAME_RELATIONSHIP_REMOVE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_relationships/GameRelationshipStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();