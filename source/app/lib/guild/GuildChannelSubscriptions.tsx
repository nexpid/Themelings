// app/lib/guild/GuildChannelSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo) { // Original name: serializeChannelRanges
        tango = argFoo;
        entity = {};
        var _closure2_slot0 = entity;
        zulu = tango.forEach;
        mike = function(argFoo, argBar) {
            zulu = _closure2_slot0;
            mike = argFoo;
            entity = argBar;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: GuildChannelSubscriptions
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['_subscriptions'] = mike;
            mike = argFoo;
            zulu['_onChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = {};
            entity = this;
            entity['_subscriptions'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(5);
        mike[0] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = this;
            zulu = _closure1_slot4;
            mike = tango._get;
            entity = argFoo;
            mike = mike.bind(tango)(entity);
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68532: for(var _fun68532_ip = 0; ; ) switch(_fun68532_ip) {
 0:
                entity = this;
                mike = entity._subscriptions;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                if(!(mike == entity)) { _fun68532_ip = 79; continue _fun68532 }
 22:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 2;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                mike = {};
                zulu = 5;
                mike['max'] = zulu;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                oscar = zulu;
                report = mike;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 79:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity._subscriptions;
            entity = argFoo;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68534: for(var _fun68534_ip = 0; ; ) switch(_fun68534_ip) {
 0:
                report = argFoo;
                verify = argBar;
                options = argBaz;
                tango = this;
                entity = tango._get;
                golf = entity.bind(tango)(report);
                zulu = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 3;
                entity = oscar[entity];
                oscar = undefined;
                offset = zulu.bind(oscar)(entity);
                zulu = offset.isEqual;
                entity = golf.get;
                entity = entity.bind(golf)(verify);
                entity = zulu.bind(offset)(entity, options);
                entity = !entity;
                if(!entity) { _fun68534_ip = 120; continue _fun68534 }
 76:
                zulu = golf.set;
                zulu = zulu.bind(golf)(verify, options);
                zulu = tango._subscriptions;
                zulu[report] = golf;
                zulu = tango._onChange;
                mike = _closure1_slot4;
                mike = mike.bind(oscar)(golf);
                mike = zulu.bind(tango)(report, mike);
                entity = true;
 120:
                return entity;
            }
        };
        entity['value'] = report;
        mike[4] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/guild/GuildChannelSubscriptions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    mike = 100;
    zulu['MINIMUM_RANGE'] = mike;
    mike = new Array(1);
    tango = [0, 99];
    mike[0] = tango;
    zulu['DEFAULT_RANGES'] = mike;
    return entity;
})();