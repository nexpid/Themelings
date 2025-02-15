// app/stores/billing/GuildBoostSlotStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun65778: for(var _fun65778_ip = 0; ; ) switch(_fun65778_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun65778_ip = 51; continue _fun65778 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun65778_ip = 92; continue _fun65778;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun65778_ip = 71; continue _fun65778 }
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
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun65779: for(var _fun65779_ip = 0; ; ) switch(_fun65779_ip) {
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
            _fun65779_ip = 76; continue _fun65779;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    options = function(argFoo) { // Original name: handleGuildBoostsUpdate
        entity = argFoo;
        tango = entity.guildBoostSlot;
        mike = {};
        report = _closure1_slot7;
        oscar = mike;
        zulu = copyDataProperties(oscar, report);
        zulu = tango.id;
        mike[zulu] = tango;
        _closure1_slot7 = mike;
        entity = undefined;
        return entity;
    };
    entity = function() { // Original name: handleSubscriptionStoreUpdate
        _fun65783: for(var _fun65783_ip = 0; ; ) switch(_fun65783_ip) {
 0:
            mike = {};
            entity = global;
            report = entity.Object;
            tango = report.values;
            zulu = _closure1_slot7;
            report = tango.bind(report)(zulu);
            zulu = report.length;
            tango = 0;
            zulu = tango < zulu;
            if(!zulu) { _fun65783_ip = 93; continue _fun65783 }
 41:
            oscar = report[tango];
            zulu = oscar.id;
            mike[zulu] = oscar;
            options = _closure1_slot5;
            golf = options.getSubscriptionById;
            zulu = oscar.subscriptionId;
            zulu = golf.bind(options)(zulu);
            oscar['subscription'] = zulu;
            tango = tango + 1;
            zulu = report.length;
            if(tango < zulu) { _fun65783_ip = 41; continue _fun65783 }
 93:
            _closure1_slot7 = mike;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = false;
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildBoostSlotStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.syncWith;
            report = _closure1_slot5;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot10;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'hasFetched';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot6;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'boostSlots';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot7;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getGuildBoostSlot';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot7;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GuildBoostSlotStore';
    golf['displayName'] = mike;
    mike = 7;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleGuildBoostsFetch
        entity = argFoo;
        tango = entity.guildBoostSlots;
        entity = {};
        _closure1_slot7 = entity;
        zulu = tango.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = _closure1_slot7;
            entity = zulu.id;
            mike[entity] = zulu;
            entity = undefined;
            return entity;
        };
        entity = zulu.bind(tango)(entity);
        entity = true;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_BOOST_SLOTS_FETCH_SUCCESS'] = verify;
    mike['GUILD_BOOST_SLOT_UPDATE_SUCCESS'] = options;
    mike['GUILD_BOOST_SLOT_CREATE'] = options;
    mike['GUILD_BOOST_SLOT_UPDATE'] = options;
    tango = function() { // Original name: handleLogout
        entity = {};
        _closure1_slot7 = entity;
        entity = false;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/billing/GuildBoostSlotStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();