// discord_common/js/shared/utils/SnowflakeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    oscar = function(argFoo) { // Original name: extractTimestamp
        entity = global;
        zulu = entity.Math;
        mike = zulu.floor;
        report = entity.Number;
        tango = undefined;
        entity = argFoo;
        tango = report.bind(tango)(entity);
        entity = 4194304;
        entity = tango / entity;
        mike = mike.bind(zulu)(entity);
        entity = _closure1_slot4;
        entity = mike + entity;
        return entity;
    };
    var _closure1_slot6 = oscar;
    report = function(argFoo) { // Original name: fromTimestamp
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot4;
            entity = argFoo;
            report = entity - zulu;
            entity = '0';
            zulu = 0;
            if(!(!(report <= zulu))) { _fun00002_ip = 77; continue _fun00001 }
 26:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 2;
            zulu = tango[zulu];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            tango = zulu.bind(tango)(report);
            zulu = tango.shiftLeft;
            mike = _closure1_slot5;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.toString;
            entity = mike.bind(zulu)();
 77:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = verify[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = verify[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    golf = 1420070400000.0;
    var _closure1_slot4 = golf;
    mike = 22;
    var _closure1_slot5 = mike;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: SnowflakeSequence
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = 0;
            zulu['seq'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'next';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = this;
                zulu = mike.seq;
                entity = 4095;
                if(!(!(zulu > entity))) { _fun00004_ip = 39; continue _fun00003 }
 19:
                entity = mike.seq;
                entity = parseFloat(entity);
                zulu = entity + 1;
                mike['seq'] = zulu;
                return entity;
 39:
                entity = global;
                zulu = entity.Error;
                tango = mike.seq;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'Snowflake sequence number overflow: ';
                report = mike.bind(entity)(tango);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                oscar = mike;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = 0;
            entity = this;
            entity['seq'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    options = 3;
    verify = verify[options];
    options = argBar;
    offset = options.bind(entity)(verify);
    verify = offset.fileFinishedImporting;
    options = '../discord_common/js/shared/utils/SnowflakeUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['DISCORD_EPOCH'] = golf;
    golf = 4095;
    zulu['MAX_SNOWFLAKE_SEQ'] = golf;
    zulu['extractTimestamp'] = oscar;
    zulu['fromTimestamp'] = report;
    report = function(argFoo, argBar) { // Original name: fromTimestampWithSequence
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argBar;
            zulu = _closure1_slot4;
            mike = argFoo;
            oscar = mike - zulu;
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = 0;
            if(!(!(oscar <= mike))) { _fun00006_ip = 48; continue _fun00005 }
 45:
            mike = oscar;
 48:
            zulu = zulu.bind(report)(mike);
            mike = zulu.shiftLeft;
            entity = _closure1_slot5;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.add;
            entity = tango.next;
            entity = entity.bind(tango)();
            mike = mike.bind(zulu)(entity);
            entity = mike.toString;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['fromTimestampWithSequence'] = report;
    report = function(argFoo) { // Original name: atPreviousMillisecond
        zulu = _closure1_slot7;
        tango = _closure1_slot6;
        mike = undefined;
        entity = argFoo;
        tango = tango.bind(mike)(entity);
        entity = 1;
        entity = tango - entity;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['atPreviousMillisecond'] = report;
    report = function(argFoo) { // Original name: age
        entity = global;
        mike = entity.Date;
        entity = mike.now;
        mike = entity.bind(mike)();
        tango = _closure1_slot6;
        zulu = undefined;
        entity = argFoo;
        entity = tango.bind(zulu)(entity);
        entity = mike - entity;
        return entity;
    };
    zulu['age'] = report;
    report = function(argFoo, argBar) { // Original name: compare
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            options = argBar;
            entity = 0;
            if(!(verify !== options)) { _fun00008_ip = 108; continue _fun00007 }
 12:
            zulu = null;
            tango = zulu == options;
            golf = 1;
            mike = golf;
            if(tango) { _fun00008_ip = 105; continue _fun00007 }
 27:
            tango = zulu == verify;
            oscar = -1;
            zulu = oscar;
            if(tango) { _fun00008_ip = 102; continue _fun00007 }
 43:
            report = verify.length;
            tango = options.length;
            report = report > tango;
            tango = golf;
            if(report) { _fun00008_ip = 99; continue _fun00007 }
 63:
            offset = verify.length;
            report = options.length;
            offset = offset < report;
            report = oscar;
            if(offset) { _fun00008_ip = 96; continue _fun00007 }
 83:
            options = verify > options;
            if(!options) { _fun00008_ip = 93; continue _fun00007 }
 90:
            oscar = golf;
 93:
            report = oscar;
 96:
            tango = report;
 99:
            zulu = tango;
 102:
            mike = zulu;
 105:
            entity = mike;
 108:
            return entity;
        }
    };
    zulu['compare'] = report;
    tango = function(argFoo) { // Original name: isProbablyAValidSnowflake
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            mike = zulu;
            entity = null;
            if(!(entity != zulu)) { _fun00010_ip = 79; continue _fun00009 }
 12:
            tango = /^\d{17,19}$/;
            zulu = tango.test;
            entity = mike;
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun00010_ip = 46; continue _fun00009 }
 42:
            entity = false;
            return entity;
 46: // try_start_0
            tango = _closure1_slot6;
            zulu = mike;
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            entity = _closure1_slot4;
            entity = mike >= entity;
 71: // try_end0
            return entity;
 73: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = false;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    zulu['isProbablyAValidSnowflake'] = tango;
    zulu['SnowflakeSequence'] = mike;
    return entity;
})();