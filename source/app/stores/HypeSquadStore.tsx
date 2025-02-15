// app/stores/HypeSquadStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.HypeSquadHouses;
    var _closure1_slot6 = options;
    mike = mike.UserFlags;
    var _closure1_slot7 = mike;
    mike = null;
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: HypeSquadStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'getHouseMembership';
        report['key'] = oscar;
        entity = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'HypeSquadStore';
    options['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: deriveHouseMembershipFromUserFlags
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot5;
            entity = zulu.getCurrentUser;
            tango = entity.bind(zulu)();
            entity = null;
            if(!(entity != tango)) { _fun00006_ip = 140; continue _fun00005 }
 22:
            zulu = tango.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_1;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun00006_ip = 126; continue _fun00005 }
 46:
            zulu = tango.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_2;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun00006_ip = 110; continue _fun00005 }
 70:
            zulu = tango.hasFlag;
            entity = _closure1_slot7;
            entity = entity.HYPESQUAD_ONLINE_HOUSE_3;
            entity = zulu.bind(tango)(entity);
            if(!entity) { _fun00006_ip = 140; continue _fun00005 }
 94:
            entity = _closure1_slot6;
            entity = entity.HOUSE_3;
            _closure1_slot8 = entity;
            _fun00006_ip = 140; continue _fun00005;
 110:
            entity = _closure1_slot6;
            entity = entity.HOUSE_2;
            _closure1_slot8 = entity;
            _fun00006_ip = 140; continue _fun00005;
 126:
            entity = _closure1_slot6;
            entity = entity.HOUSE_1;
            _closure1_slot8 = entity;
 140:
            entity = undefined;
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function() { // Original name: removeHouseMembership
        entity = null;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS'] = verify;
    tango = function(argFoo) { // Original name: setHouseMembership
        entity = argFoo;
        mike = entity.houseID;
        _closure1_slot8 = mike;
        entity = undefined;
        return entity;
    };
    mike['HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/HypeSquadStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();