// app/modules/game_relationships/GameRelationshipStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun61010: for(var _fun61010_ip = 0; ; ) switch(_fun61010_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun61010_ip = 51; continue _fun61010 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun61010_ip = 92; continue _fun61010;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun61010_ip = 71; continue _fun61010 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun61011: for(var _fun61011_ip = 0; ; ) switch(_fun61011_ip) {
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
 70: // try_end0
            _fun61011_ip = 74; continue _fun61011;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: recountRelationshipTypes
        _fun61014: for(var _fun61014_ip = 0; ; ) switch(_fun61014_ip) {
 0:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(mike);
            report = oscar.countBy;
            golf = _closure1_slot11;
            tango = golf.values;
            mike = true;
            tango = tango.bind(golf)(entity, mike);
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.type;
                return entity;
            };
            golf = report.bind(oscar)(tango, mike);
            mike = _closure1_slot7;
            mike = mike.PENDING_INCOMING;
            tango = golf[mike];
            oscar = 0;
            if(!(entity !== tango)) { _fun61014_ip = 84; continue _fun61014 }
 81:
            oscar = tango;
 84:
            tango = _closure1_slot7;
            tango = tango.PENDING_OUTGOING;
            tango = golf[tango];
            report = 0;
            if(!(entity !== tango)) { _fun61014_ip = 107; continue _fun61014 }
 104:
            report = tango;
 107:
            tango = _closure1_slot7;
            tango = tango.FRIEND;
            tango = golf[tango];
            _closure1_slot12 = oscar;
            _closure1_slot13 = report;
            mike = 0;
            if(!(entity !== tango)) { _fun61014_ip = 138; continue _fun61014 }
 135:
            mike = tango;
 138:
            _closure1_slot14 = mike;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: upsert
        report = argFoo;
        tango = _closure1_slot11;
        zulu = tango.set;
        golf = _closure1_slot8;
        oscar = report.id;
        mike = report.applicationId;
        entity = undefined;
        mike = golf.bind(entity)(oscar, mike);
        mike = zulu.bind(tango)(mike, report);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    mike = 0;
    options = oscar[mike];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.RelationshipTypes;
    var _closure1_slot7 = options;
    options = function(argFoo, argBar) { // Original name: GAME_RELATIONSHIP_KEY
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tango = '';
        zulu = argBar;
        mike = '-';
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot8 = options;
    options = function(argFoo) { // Original name: GameRelationshipIndexes_BY_APPLICATION_ID
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = 'app-id-';
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot9 = options;
    options = function(argFoo) { // Original name: GameRelationshipIndexes_BY_USER_ID
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = 'user-id-';
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot10 = options;
    options = 6;
    options = oscar[options];
    options = report.bind(entity)(options);
    yankee = options.SecondaryIndexMap;
    options = yankee.prototype;
    verify = Object.create(options, {constructor: {value: yankee}});
    backup = function(argFoo) { // Original name: gameRelationshipsIndex
        mike = argFoo;
        entity = new Array(0);
        oscar = entity.push;
        golf = _closure1_slot9;
        zulu = mike.applicationId;
        report = undefined;
        zulu = golf.bind(report)(zulu);
        zulu = oscar.bind(entity)(zulu);
        zulu = entity.push;
        tango = _closure1_slot10;
        mike = mike.id;
        mike = tango.bind(report)(mike);
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    foxtrot = function(argFoo) {
        entity = argFoo;
        zulu = entity.since;
        entity = global;
        entity = entity.HermesInternal;
        mike = entity.concat;
        entity = '';
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    kilo = verify;
    options = new kilo[yankee](backup, foxtrot, romeo);
    options = options instanceof Object ? options : verify;
    var _closure1_slot11 = options;
    var _closure1_slot12 = mike;
    var _closure1_slot13 = mike;
    var _closure1_slot14 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GameRelationshipStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot15;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
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
        golf = 'getPendingOutgoingCount';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getGameFriendCount';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getGameFriendsForApplication';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot11;
            zulu = tango.values;
            report = _closure1_slot9;
            mike = undefined;
            entity = argFoo;
            mike = report.bind(mike)(entity);
            entity = true;
            zulu = zulu.bind(tango)(mike, entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot7;
                entity = entity.FRIEND;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getGameRelationshipsForUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = _closure1_slot11;
            zulu = tango.values;
            report = _closure1_slot10;
            mike = undefined;
            entity = argFoo;
            mike = report.bind(mike)(entity);
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getGameRelationshipsForUserByType';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = this;
            mike = argBar;
            var _closure3_slot0 = mike;
            zulu = tango.getGameRelationshipsForUser;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure3_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getGameFriendsForUser';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.getGameRelationshipsForUserByType;
            entity = _closure1_slot7;
            mike = entity.FRIEND;
            entity = argFoo;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getGameRelationshipCount';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot11;
            entity = mike.size;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getGameRelationships';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getGameRelationshipsVersion';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot11;
            entity = entity.version;
            return entity;
        };
        report['value'] = oscar;
        entity[9] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GameRelationshipStore';
    options['displayName'] = mike;
    mike = 9;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleConnectionOpen
        zulu = _closure1_slot11;
        mike = zulu.clear;
        mike = mike.bind(zulu)();
        mike = argFoo;
        tango = mike.gameRelationships;
        zulu = tango.forEach;
        mike = function(argFoo) {
            entity = argFoo;
            zulu = _closure1_slot18;
            mike = {};
            tango = entity.id;
            mike['id'] = tango;
            tango = entity.application_id;
            mike['applicationId'] = tango;
            tango = entity.type;
            mike['type'] = tango;
            tango = entity.since;
            mike['since'] = tango;
            entity = entity.dm_access_type;
            mike['dmAccessType'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleGameRelationshipAdd
        tango = _closure1_slot18;
        entity = argFoo;
        zulu = entity.gameRelationship;
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        mike = _closure1_slot17;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['GAME_RELATIONSHIP_ADD'] = verify;
    tango = function(argFoo) { // Original name: handleGameRelationshipRemove
        entity = argFoo;
        golf = entity.userId;
        oscar = entity.applicationId;
        report = _closure1_slot11;
        tango = report.delete;
        zulu = _closure1_slot8;
        entity = undefined;
        zulu = zulu.bind(entity)(golf, oscar);
        zulu = tango.bind(report)(zulu);
        mike = _closure1_slot17;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['GAME_RELATIONSHIP_REMOVE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_relationships/GameRelationshipStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();