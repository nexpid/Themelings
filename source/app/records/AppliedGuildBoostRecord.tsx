// app/records/AppliedGuildBoostRecord.tsx
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
        report = function(argFoo) { // Original name: AppliedGuildBoostRecord
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                report = this;
                oscar = _closure1_slot0;
                tango = _closure2_slot0;
                mike = undefined;
                oscar = oscar.bind(mike)(report, tango);
                entity = _closure1_slot5;
                entity = entity.bind(mike)(report, tango);
                mike = zulu.id;
                entity['id'] = mike;
                mike = zulu.guildId;
                entity['guildId'] = mike;
                mike = zulu.userId;
                entity['userId'] = mike;
                mike = zulu.user;
                entity['user'] = mike;
                mike = zulu.ended;
                entity['ended'] = mike;
                tango = zulu.endsAt;
                mike = null;
                tango = mike != tango;
                if(!tango) { _fun00006_ip = 115; continue _fun00005 }
 109:
                mike = zulu.endsAt;
 115:
                entity['endsAt'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot4;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot1;
        entity = {};
        oscar = 'createFromServer';
        entity['key'] = oscar;
        mike = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                mike = tango.id;
                entity['id'] = mike;
                mike = tango.guild_id;
                entity['guildId'] = mike;
                mike = tango.user;
                golf = null;
                if(!(golf == mike)) { _fun00008_ip = 49; continue _fun00007 }
 41:
                mike = tango.user_id;
                _fun00008_ip = 59; continue _fun00007;
 49:
                report = tango.user;
                mike = report.id;
 59:
                entity['userId'] = mike;
                mike = tango.user;
                entity['user'] = mike;
                mike = tango.ended;
                entity['ended'] = mike;
                mike = tango.ends_at;
                report = golf != mike;
                mike = null;
                if(!report) { _fun00008_ip = 148; continue _fun00007 }
 98:
                oscar = tango.ends_at;
                report = '';
                mike = null;
                if(!(report !== oscar)) { _fun00008_ip = 148; continue _fun00007 }
 114:
                report = global;
                oscar = report.Date;
                options = tango.ends_at;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                verify = report;
                tango = new verify[oscar](options, golf);
                mike = tango instanceof Object ? tango : report;
 148:
                entity['endsAt'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                verify = mike;
                options = entity;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = null;
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 6;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'records/AppliedGuildBoostRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();