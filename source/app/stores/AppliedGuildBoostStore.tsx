// app/stores/AppliedGuildBoostStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun105318: for(var _fun105318_ip = 0; ; ) switch(_fun105318_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun105318_ip = 51; continue _fun105318 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun105318_ip = 92; continue _fun105318;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun105318_ip = 71; continue _fun105318 }
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
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun105319: for(var _fun105319_ip = 0; ; ) switch(_fun105319_ip) {
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
            _fun105319_ip = 76; continue _fun105319;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    options = function() { // Original name: handleModifyingAppliedBoostStart
        entity = true;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
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
    mike = {};
    var _closure1_slot5 = mike;
    mike = null;
    var _closure1_slot6 = mike;
    golf = new Array(0);
    var _closure1_slot7 = golf;
    golf = false;
    var _closure1_slot8 = golf;
    var _closure1_slot9 = golf;
    var _closure1_slot10 = mike;
    var _closure1_slot11 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: AppliedGuildBoostStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
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
        entity = 'getAppliedGuildBoostsForGuild';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun105325: for(var _fun105325_ip = 0; ; ) switch(_fun105325_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot5;
                tango = entity[zulu];
                entity = null;
                tango = entity != tango;
                if(!tango) { _fun105325_ip = 37; continue _fun105325 }
 23:
                mike = _closure1_slot5;
                mike = mike[zulu];
                entity = mike.subscriptions;
 37:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'getLastFetchedAtForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun105326: for(var _fun105326_ip = 0; ; ) switch(_fun105326_ip) {
 0:
                zulu = argFoo;
                entity = _closure1_slot5;
                tango = entity[zulu];
                entity = null;
                tango = entity != tango;
                if(!tango) { _fun105326_ip = 37; continue _fun105326 }
 23:
                mike = _closure1_slot5;
                mike = mike[zulu];
                entity = mike.lastFetchedAt;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getCurrentUserAppliedBoosts';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getAppliedGuildBoost';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = _closure1_slot7;
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure3_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isModifyingAppliedBoost';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot9;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'applyBoostError';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot10;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'unapplyBoostError';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'cooldownEndsAt';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot6;
            return entity;
        };
        report['get'] = golf;
        entity[7] = report;
        report = {};
        golf = 'isFetchingCurrentUserAppliedBoosts';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot8;
            return entity;
        };
        report['get'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'AppliedGuildBoostStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleAppliedBoostsForGuildFetchSuccess
        entity = argFoo;
        zulu = entity.guildId;
        tango = entity.appliedBoosts;
        mike = _closure1_slot5;
        entity = {};
        entity['subscriptions'] = tango;
        tango = global;
        report = tango.Date;
        tango = report.now;
        tango = tango.bind(report)();
        entity['lastFetchedAt'] = tango;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_APPLIED_BOOSTS_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAppliedBoostsForuserFetchSuccess
        entity = argFoo;
        mike = entity.appliedGuildBoosts;
        zulu = false;
        _closure1_slot8 = zulu;
        _closure1_slot7 = mike;
        entity = undefined;
        return entity;
    };
    mike['USER_APPLIED_BOOSTS_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleAppliedBoostCooldownFetch
        entity = argFoo;
        mike = entity.endsAt;
        _closure1_slot6 = mike;
        entity = undefined;
        return entity;
    };
    mike['APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS'] = verify;
    mike['GUILD_UNAPPLY_BOOST_START'] = options;
    mike['GUILD_APPLY_BOOST_START'] = options;
    options = function(argFoo) { // Original name: handleApplyBoostSuccess
        entity = argFoo;
        tango = entity.appliedGuildBoost;
        entity = global;
        report = entity.Set;
        mike = tango.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.id;
            return entity;
        };
        verify = mike.bind(tango)(entity);
        mike = report.prototype;
        mike = Object.create(mike, {constructor: {value: report}});
        offset = mike;
        entity = new offset[report](verify, options);
        entity = entity instanceof Object ? entity : mike;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        golf = 0;
        verify = entity;
        options = tango;
        golf = arraySpread(verify, options, golf);
        oscar = _closure1_slot7;
        report = oscar.filter;
        zulu = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.has;
            entity = argFoo;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        options = report.bind(oscar)(zulu);
        verify = entity;
        zulu = arraySpread(verify, options, golf);
        _closure1_slot7 = entity;
        entity = null;
        _closure1_slot10 = entity;
        entity = false;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_APPLY_BOOST_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleApplyBoostFail
        entity = argFoo;
        mike = entity.error;
        zulu = false;
        _closure1_slot9 = zulu;
        _closure1_slot10 = mike;
        entity = undefined;
        return entity;
    };
    mike['GUILD_APPLY_BOOST_FAIL'] = options;
    options = function(argFoo) { // Original name: handleUnapplyBoostSuccess
        mike = argFoo;
        mike = mike.boostId;
        var _closure2_slot0 = mike;
        tango = _closure1_slot7;
        zulu = tango.filter;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.id;
            entity = _closure2_slot0;
            entity = mike !== entity;
            return entity;
        };
        entity = zulu.bind(tango)(entity);
        _closure1_slot7 = entity;
        entity = false;
        _closure1_slot9 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_UNAPPLY_BOOST_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleUnapplyBoostFail
        entity = argFoo;
        mike = entity.error;
        zulu = false;
        _closure1_slot9 = zulu;
        _closure1_slot11 = mike;
        entity = undefined;
        return entity;
    };
    mike['GUILD_UNAPPLY_BOOST_FAIL'] = options;
    tango = function() { // Original name: handleUserAppliedBoostsFetchStart
        entity = true;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    mike['USER_APPLIED_BOOSTS_FETCH_START'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/AppliedGuildBoostStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();