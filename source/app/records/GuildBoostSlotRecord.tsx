// app/records/GuildBoostSlotRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot6;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot6 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: GuildBoostSlotRecord
            mike = argFoo;
            report = this;
            oscar = _closure1_slot0;
            tango = _closure2_slot0;
            zulu = undefined;
            oscar = oscar.bind(zulu)(report, tango);
            entity = _closure1_slot5;
            entity = entity.bind(zulu)(report, tango);
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.subscriptionId;
            entity['subscriptionId'] = zulu;
            zulu = mike.premiumGuildSubscription;
            entity['premiumGuildSubscription'] = zulu;
            zulu = mike.canceled;
            entity['canceled'] = zulu;
            zulu = mike.cooldownEndsAt;
            entity['cooldownEndsAt'] = zulu;
            mike = mike.subscription;
            entity['subscription'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot4;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot1;
        oscar = {};
        mike = 'isOnCooldown';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = this;
                mike = zulu.cooldownEndsAt;
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun00006_ip = 81; continue _fun00005 }
 18:
                mike = global;
                report = mike.Date;
                oscar = zulu.cooldownEndsAt;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                golf = tango;
                zulu = new golf[report](oscar, report);
                tango = zulu instanceof Object ? zulu : tango;
                zulu = tango.getTime;
                zulu = zulu.bind(tango)();
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                entity = zulu >= mike;
 81:
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(2);
        mike[0] = oscar;
        oscar = {};
        golf = 'isAvailable';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = this;
                mike = zulu.premiumGuildSubscription;
                entity = null;
                entity = entity == mike;
                if(!entity) { _fun00008_ip = 31; continue _fun00007 }
 18:
                mike = zulu.isOnCooldown;
                mike = mike.bind(zulu)();
                entity = !mike;
 31:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'createFromServer';
        oscar['key'] = golf;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                tango = mike.id;
                entity['id'] = tango;
                tango = mike.subscription_id;
                entity['subscriptionId'] = tango;
                report = mike.premium_guild_subscription;
                tango = null;
                report = tango != report;
                if(!report) { _fun00010_ip = 82; continue _fun00009 }
 47:
                report = {};
                oscar = mike.premium_guild_subscription;
                oscar = oscar.id;
                report['id'] = oscar;
                oscar = mike.premium_guild_subscription;
                oscar = oscar.guild_id;
                report['guildId'] = oscar;
                tango = report;
 82:
                entity['premiumGuildSubscription'] = tango;
                tango = mike.canceled;
                entity['canceled'] = tango;
                mike = mike.cooldown_ends_at;
                entity['cooldownEndsAt'] = mike;
                mike = argBar;
                entity['subscription'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                options = mike;
                golf = entity;
                entity = new options[zulu](golf, oscar);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 6;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'records/GuildBoostSlotRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();