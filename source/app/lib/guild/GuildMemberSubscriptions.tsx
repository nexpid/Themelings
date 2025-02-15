// app/lib/guild/GuildMemberSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
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
    golf = 1;
    tango = oscar[golf];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.MINUTE;
    tango = golf * tango;
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GuildMemberSubscriptions
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = {};
            zulu['_subscriptions'] = report;
            report = {};
            zulu['_unsubscriptions'] = report;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 3;
            report = golf[report];
            report = oscar.bind(entity)(report);
            oscar = report.DelayedCall;
            verify = _closure1_slot5;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            options = function() {
                mike = _closure3_slot0;
                entity = mike.flushUnsubscriptions;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = tango;
            mike = new offset[oscar](verify, options, golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['_unsubscribe'] = mike;
            mike = argFoo;
            zulu['_onChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            mike = {};
            entity['_subscriptions'] = mike;
            mike = {};
            entity['_unsubscriptions'] = mike;
            mike = entity._unsubscribe;
            entity = mike.cancel;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(9);
        mike[0] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68521: for(var _fun68521_ip = 0; ; ) switch(_fun68521_ip) {
 0:
                entity = this;
                mike = entity._subscriptions;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                if(!(entity == zulu)) { _fun68521_ip = 24; continue _fun68521 }
 22:
                zulu = {};
 24:
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                entity = mike.keys;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            zulu = entity._subscriptions;
            zulu = delete zulu[mike];
            entity = entity._unsubscriptions;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68523: for(var _fun68523_ip = 0; ; ) switch(_fun68523_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = this;
                entity = mike._subscriptions;
                entity = entity[tango];
                oscar = null;
                if(!(oscar == entity)) { _fun68523_ip = 27; continue _fun68523 }
 25:
                entity = {};
 27:
                report = entity[zulu];
                golf = oscar != report;
                oscar = 0;
                if(!golf) { _fun68523_ip = 43; continue _fun68523 }
 40:
                oscar = report;
 43:
                report = 1;
                oscar = oscar + report;
                entity[zulu] = oscar;
                oscar = mike._subscriptions;
                oscar[tango] = entity;
                entity = entity[zulu];
                if(!(report === entity)) { _fun68523_ip = 94; continue _fun68523 }
 72:
                report = mike._onChange;
                entity = mike.get;
                entity = entity.bind(mike)(tango);
                entity = report.bind(mike)(tango, entity);
 94:
                entity = mike.checkForLeaks;
                entity = entity.bind(mike)(tango, zulu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'isSubscribed';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68524: for(var _fun68524_ip = 0; ; ) switch(_fun68524_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike._subscriptions;
                entity = entity[tango];
                zulu = null;
                entity = zulu != entity;
                if(!entity) { _fun68524_ip = 46; continue _fun68524 }
 25:
                mike = mike._subscriptions;
                tango = mike[tango];
                mike = argBar;
                mike = tango[mike];
                entity = zulu != mike;
 46:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'isSubscribedToAnyMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68526: for(var _fun68526_ip = 0; ; ) switch(_fun68526_ip) {
 0:
                oscar = argFoo;
                tango = argBar;
                entity = this;
                mike = entity.isSubscribed;
                mike = mike.bind(entity)(oscar, tango);
                if(!mike) { _fun68526_ip = 108; continue _fun68526 }
 26:
                mike = entity._unsubscriptions;
                mike = mike[oscar];
                report = null;
                if(!(report == mike)) { _fun68526_ip = 44; continue _fun68526 }
 42:
                mike = {};
 44:
                zulu = mike[tango];
                golf = report != zulu;
                report = 0;
                if(!golf) { _fun68526_ip = 60; continue _fun68526 }
 57:
                report = zulu;
 60:
                zulu = 1;
                report = report + zulu;
                mike[tango] = report;
                report = entity._unsubscriptions;
                report[oscar] = mike;
                mike = mike[tango];
                if(!(zulu === mike)) { _fun68526_ip = 108; continue _fun68526 }
 89:
                zulu = entity._unsubscribe;
                mike = zulu.delay;
                entity = false;
                entity = mike.bind(zulu)(entity);
 108:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'checkForLeaks';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68527: for(var _fun68527_ip = 0; ; ) switch(_fun68527_ip) {
 0:
                oscar = argFoo;
                golf = argBar;
                tango = this;
                entity = tango._subscriptions;
                mike = entity[oscar];
                report = null;
                zulu = report == mike;
                entity = undefined;
                options = undefined;
                if(zulu) { _fun68527_ip = 36; continue _fun68527 }
 32:
                options = mike[golf];
 36:
                verify = report != options;
                mike = 0;
                if(!verify) { _fun68527_ip = 48; continue _fun68527 }
 45:
                mike = options;
 48:
                tango = tango._unsubscriptions;
                oscar = tango[oscar];
                options = report == oscar;
                tango = undefined;
                if(options) { _fun68527_ip = 71; continue _fun68527 }
 67:
                tango = oscar[golf];
 71:
                report = report != tango;
                zulu = 0;
                if(!report) { _fun68527_ip = 83; continue _fun68527 }
 80:
                zulu = tango;
 83:
                golf = mike - zulu;
                tango = 5;
                if(!(golf > tango)) { _fun68527_ip = 181; continue _fun68527 }
 94:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[tango];
                tango = zulu.bind(entity)(mike);
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                yankee = 'GuildMemberSubscriptions';
                romeo = zulu;
                mike = new romeo[tango](yankee, offset);
                tango = mike instanceof Object ? mike : zulu;
                zulu = tango.warn;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = 'GuildMemberSubscriptions.subscribe(...): Potential reference leak! (';
                mike = ' subscriptions)';
                mike = oscar.bind(report)(golf, mike);
                mike = zulu.bind(tango)(mike);
 181:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'flushUnsubscriptions';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun68528: for(var _fun68528_ip = 0; ; ) switch(_fun68528_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                golf = _closure1_slot1;
                entity = _closure1_slot2;
                oscar = 6;
                report = entity[oscar];
                entity = undefined;
                options = golf.bind(entity)(report);
                golf = options.isEmpty;
                report = zulu._unsubscriptions;
                report = golf.bind(options)(report);
                if(report) { _fun68528_ip = 103; continue _fun68528 }
 54:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                tango = tango[oscar];
                oscar = report.bind(entity)(tango);
                report = oscar.forEach;
                tango = zulu._unsubscriptions;
                mike = function(argFoo, argBar) {
                    _fun68529: for(var _fun68529_ip = 0; ; ) switch(_fun68529_ip) {
 0:
                        report = argBar;
                        entity = _closure3_slot0;
                        entity = entity._subscriptions;
                        oscar = entity[report];
                        var _closure4_slot0 = oscar;
                        tango = _closure1_slot1;
                        golf = _closure1_slot2;
                        zulu = 6;
                        verify = golf[zulu];
                        entity = undefined;
                        yankee = tango.bind(entity)(verify);
                        offset = yankee.forEach;
                        verify = argFoo;
                        options = function(argFoo, argBar) {
                            _fun68530: for(var _fun68530_ip = 0; ; ) switch(_fun68530_ip) {
 0:
                                mike = argBar;
                                report = _closure4_slot0;
                                zulu = report[mike];
                                tango = null;
                                golf = tango != zulu;
                                tango = 0;
                                oscar = 0;
                                if(!golf) { _fun68530_ip = 30; continue _fun68530 }
 27:
                                oscar = zulu;
 30:
                                zulu = argFoo;
                                zulu = oscar - zulu;
                                report[mike] = zulu;
                                zulu = _closure4_slot0;
                                zulu = zulu[mike];
                                if(!(zulu <= tango)) { _fun68530_ip = 61; continue _fun68530 }
 53:
                                entity = _closure4_slot0;
                                entity = delete entity[mike];
 61:
                                entity = undefined;
                                return entity;
                            }
                        };
                        options = offset.bind(yankee)(verify, options);
                        zulu = golf[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.isEmpty;
                        zulu = zulu.bind(tango)(oscar);
                        if(!zulu) { _fun68529_ip = 109; continue _fun68529 }
 95:
                        zulu = _closure3_slot0;
                        zulu = zulu._subscriptions;
                        zulu = delete zulu[report];
 109:
                        tango = _closure3_slot0;
                        zulu = tango._onChange;
                        mike = tango.get;
                        mike = mike.bind(tango)(report);
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    }
                };
                mike = report.bind(oscar)(tango, mike);
                mike = {};
                zulu['_unsubscriptions'] = mike;
 103:
                return entity;
            }
        };
        entity['value'] = report;
        mike[8] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/guild/GuildMemberSubscriptions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();