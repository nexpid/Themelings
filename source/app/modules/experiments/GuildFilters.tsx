// app/modules/experiments/GuildFilters.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: isInRange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            options = argBar;
            golf = argBaz;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            verify = 4;
            mike = mike[verify];
            zulu = undefined;
            tango = tango.bind(zulu)(mike);
            mike = argFoo;
            report = tango.bind(zulu)(mike);
            mike = null;
            tango = mike != options;
            oscar = null;
            if(!tango) { _fun00008_ip = 72; continue _fun00007 }
 50:
            offset = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[verify];
            tango = offset.bind(zulu)(tango);
            oscar = tango.bind(zulu)(options);
 72:
            options = mike != golf;
            tango = null;
            if(!options) { _fun00008_ip = 103; continue _fun00007 }
 81:
            options = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[verify];
            entity = options.bind(zulu)(entity);
            tango = entity.bind(zulu)(golf);
 103:
            entity = mike == oscar;
            if(entity) { _fun00008_ip = 124; continue _fun00007 }
 110:
            zulu = report.lesser;
            zulu = zulu.bind(report)(oscar);
            entity = !zulu;
 124:
            if(!entity) { _fun00008_ip = 151; continue _fun00007 }
 127:
            mike = mike == tango;
            if(mike) { _fun00008_ip = 148; continue _fun00007 }
 134:
            zulu = report.greater;
            zulu = zulu.bind(report)(tango);
            mike = !zulu;
 148:
            entity = mike;
 151:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getRangeData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = _closure1_slot6;
            backup = undefined;
            entity = argFoo;
            foxtrot = mike.bind(backup)(entity);
            mike = foxtrot.bind(backup)();
            entity = mike.done;
            romeo = 5;
            yankee = 'max_id';
            offset = 2;
            verify = 0;
            options = 1;
            golf = 'min_id';
            oscar = undefined;
            report = undefined;
            tango = mike;
            zulu = undefined;
            mike = undefined;
            if(entity) { _fun00010_ip = 197; continue _fun00009 }
 62:
            sizing = tango.value;
            entity = _closure1_slot2;
            entity = entity.bind(backup)(sizing, offset);
            echo = entity[verify];
            entity = entity[options];
            output = _closure1_slot0;
            sizing = _closure1_slot1;
            sizing = sizing[romeo];
            output = output.bind(backup)(sizing);
            sizing = output.v3;
            result = sizing.bind(output)(golf);
            output = entity;
            sizing = report;
            if(!(result !== echo)) { _fun00010_ip = 167; continue _fun00009 }
 123:
            update = _closure1_slot0;
            result = _closure1_slot1;
            result = result[romeo];
            update = update.bind(backup)(result);
            result = update.v3;
            result = result.bind(update)(yankee);
            output = oscar;
            sizing = report;
            if(!(result === echo)) { _fun00010_ip = 167; continue _fun00009 }
 161:
            output = oscar;
            sizing = entity;
 167:
            result = foxtrot.bind(backup)();
            entity = result.done;
            oscar = output;
            report = sizing;
            tango = result;
            zulu = oscar;
            mike = report;
            if(!entity) { _fun00010_ip = 62; continue _fun00009 }
 197:
            entity = {};
            entity['min'] = zulu;
            entity['max'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    oscar = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = report[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = report[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = report[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = {};
    oscar = 5;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_ids';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = new Array(0);
            var _closure2_slot0 = mike;
            zulu = _closure1_slot6;
            offset = undefined;
            mike = argFoo;
            verify = zulu.bind(offset)(mike);
            zulu = verify.bind(offset)();
            mike = zulu.done;
            options = 2;
            golf = 0;
            oscar = 1;
            report = 5;
            tango = 'guild_ids';
            if(mike) { _fun00012_ip = 128; continue _fun00011 }
 54:
            romeo = zulu.value;
            mike = _closure1_slot2;
            mike = mike.bind(offset)(romeo, options);
            foxtrot = mike[golf];
            mike = mike[oscar];
            backup = _closure1_slot0;
            romeo = _closure1_slot1;
            romeo = romeo[report];
            backup = backup.bind(offset)(romeo);
            romeo = backup.v3;
            romeo = romeo.bind(backup)(tango);
            if(!(foxtrot === romeo)) { _fun00012_ip = 113; continue _fun00011 }
 109:
            _closure2_slot0 = mike;
 113:
            romeo = verify.bind(offset)();
            mike = romeo.done;
            zulu = romeo;
            if(!mike) { _fun00012_ip = 54; continue _fun00011 }
 128:
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            return entity;
        }
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_id_range';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        tango = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = tango.bind(zulu)(mike);
        zulu = mike.min;
        var _closure2_slot0 = zulu;
        mike = mike.max;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            report = _closure1_slot8;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            mike = undefined;
            entity = argFoo;
            entity = report.bind(mike)(entity, tango, zulu);
            return entity;
        };
        return entity;
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_age_range_days';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        tango = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = tango.bind(zulu)(mike);
        zulu = mike.min;
        var _closure2_slot0 = zulu;
        mike = mike.max;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            report = _closure1_slot8;
            mike = global;
            zulu = mike.Math;
            mike = zulu.floor;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            entity = 6;
            entity = options[entity];
            tango = undefined;
            verify = golf.bind(tango)(entity);
            oscar = verify.age;
            entity = argFoo;
            oscar = oscar.bind(verify)(entity);
            entity = 7;
            entity = options[entity];
            entity = golf.bind(tango)(entity);
            entity = entity.Millis;
            entity = entity.DAY;
            entity = oscar / entity;
            zulu = mike.bind(zulu)(entity);
            mike = _closure2_slot0;
            entity = _closure2_slot1;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        };
        return entity;
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_member_count_range';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        tango = _closure1_slot9;
        zulu = undefined;
        mike = argFoo;
        mike = tango.bind(zulu)(mike);
        zulu = mike.min;
        var _closure2_slot0 = zulu;
        mike = mike.max;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getMemberCount;
                entity = argFoo;
                oscar = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != oscar;
                if(!entity) { _fun00014_ip = 54; continue _fun00013 }
 30:
                report = _closure1_slot8;
                tango = _closure2_slot0;
                zulu = _closure2_slot1;
                mike = undefined;
                entity = report.bind(mike)(oscar, tango, zulu);
 54:
                return entity;
            }
        };
        return entity;
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_has_feature';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        report = _closure1_slot2;
        oscar = undefined;
        tango = argFoo;
        zulu = 1;
        tango = report.bind(oscar)(tango, zulu);
        report = _closure1_slot2;
        mike = 0;
        tango = tango[mike];
        mike = 2;
        mike = report.bind(oscar)(tango, mike);
        mike = mike[zulu];
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot5;
                entity = zulu.getGuild;
                entity = entity.bind(zulu)(oscar);
                zulu = null;
                if(!(zulu == entity)) { _fun00016_ip = 42; continue _fun00015 }
 28:
                report = _closure1_slot3;
                tango = report.getGuild;
                entity = tango.bind(report)(oscar);
 42:
                var _closure3_slot0 = entity;
                entity = zulu != entity;
                if(!entity) { _fun00016_ip = 76; continue _fun00015 }
 53:
                tango = _closure2_slot0;
                zulu = tango.some;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.hasFeature;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 76:
                return entity;
            }
        };
        return entity;
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_hub_types';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        report = _closure1_slot2;
        oscar = undefined;
        tango = argFoo;
        zulu = 1;
        tango = report.bind(oscar)(tango, zulu);
        report = _closure1_slot2;
        mike = 0;
        tango = tango[mike];
        mike = 2;
        mike = report.bind(oscar)(tango, mike);
        mike = mike[zulu];
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot5;
                entity = zulu.getGuild;
                zulu = entity.bind(zulu)(oscar);
                entity = null;
                if(!(entity == zulu)) { _fun00018_ip = 42; continue _fun00017 }
 28:
                report = _closure1_slot3;
                tango = report.getGuild;
                zulu = tango.bind(report)(oscar);
 42:
                var _closure3_slot0 = zulu;
                entity = entity != zulu;
                if(!entity) { _fun00018_ip = 70; continue _fun00017 }
 53:
                zulu = zulu.hubType;
                tango = 'number';
                zulu = typeof zulu;
                entity = tango === zulu;
 70:
                if(!entity) { _fun00018_ip = 96; continue _fun00017 }
 73:
                tango = _closure2_slot0;
                zulu = tango.some;
                mike = function(argFoo) {
                    entity = _closure3_slot0;
                    mike = entity.hubType;
                    entity = argFoo;
                    entity = mike === entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike);
 96:
                return entity;
            }
        };
        return entity;
    };
    mike[verify] = options;
    options = report[oscar];
    offset = golf.bind(entity)(options);
    verify = offset.v3;
    options = 'guild_has_vanity_url';
    verify = verify.bind(offset)(options);
    options = function(argFoo) {
        report = _closure1_slot2;
        oscar = undefined;
        tango = argFoo;
        zulu = 1;
        tango = report.bind(oscar)(tango, zulu);
        report = _closure1_slot2;
        mike = 0;
        tango = tango[mike];
        mike = 2;
        mike = report.bind(oscar)(tango, mike);
        mike = mike[zulu];
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot5;
                entity = mike.getGuild;
                entity = entity.bind(mike)(report);
                mike = null;
                if(!(mike == entity)) { _fun00020_ip = 40; continue _fun00019 }
 26:
                tango = _closure1_slot3;
                zulu = tango.getGuild;
                entity = zulu.bind(tango)(report);
 40:
                if(!(mike != entity)) { _fun00020_ip = 67; continue _fun00019 }
 44:
                entity = entity.vanityURLCode;
                mike = mike != entity;
                entity = _closure2_slot0;
                entity = entity === mike;
                return entity;
 67:
                entity = false;
                return entity;
            }
        };
        return entity;
    };
    mike[verify] = options;
    oscar = report[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.v3;
    oscar = 'guild_in_range_by_hash';
    oscar = golf.bind(options)(oscar);
    tango = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = _closure1_slot6;
            backup = undefined;
            mike = argFoo;
            foxtrot = zulu.bind(backup)(mike);
            zulu = foxtrot.bind(backup)();
            mike = zulu.done;
            romeo = global;
            yankee = null;
            offset = 0;
            verify = 5;
            options = 'target';
            golf = 2;
            oscar = 1;
            report = 'hash_key';
            tango = undefined;
            if(mike) { _fun00022_ip = 211; continue _fun00021 }
 61:
            sizing = zulu.value;
            mike = _closure1_slot2;
            mike = mike.bind(backup)(sizing, golf);
            result = mike[offset];
            mike = mike[oscar];
            output = _closure1_slot0;
            sizing = _closure1_slot1;
            sizing = sizing[verify];
            output = output.bind(backup)(sizing);
            sizing = output.v3;
            sizing = sizing.bind(output)(report);
            if(!(sizing !== result)) { _fun00022_ip = 183; continue _fun00021 }
 116:
            output = _closure1_slot0;
            sizing = _closure1_slot1;
            sizing = sizing[verify];
            output = output.bind(backup)(sizing);
            sizing = output.v3;
            sizing = sizing.bind(output)(options);
            output = tango;
            if(!(sizing === result)) { _fun00022_ip = 190; continue _fun00021 }
 151:
            sizing = romeo.parseInt;
            sizing = sizing.bind(backup)(mike);
            echo = yankee != sizing;
            result = 0;
            if(!echo) { _fun00022_ip = 174; continue _fun00021 }
 171:
            result = sizing;
 174:
            var _closure2_slot1 = result;
            output = sizing;
            _fun00022_ip = 190; continue _fun00021;
 183:
            var _closure2_slot0 = mike;
            output = tango;
 190:
            sizing = foxtrot.bind(backup)();
            mike = sizing.done;
            tango = output;
            zulu = sizing;
            if(!mike) { _fun00022_ip = 61; continue _fun00021 }
 211:
            entity = function(argFoo) {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.v3;
                    options = _closure2_slot0;
                    mike = global;
                    mike = mike.HermesInternal;
                    golf = mike.concat;
                    oscar = '';
                    report = ':';
                    mike = argFoo;
                    mike = golf.bind(oscar)(options, report, mike);
                    mike = zulu.bind(tango)(mike);
                    zulu = 0;
                    if(!(!(mike > zulu))) { _fun00024_ip = 86; continue _fun00023 }
 80:
                    zulu = mike >>> zulu;
                    _fun00024_ip = 90; continue _fun00023;
 86:
                    zulu = mike + mike;
 90:
                    mike = 10000;
                    mike = zulu % mike;
                    entity = _closure2_slot1;
                    entity = mike < entity;
                    return entity;
                }
            };
            return entity;
        }
    };
    mike[oscar] = tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/experiments/GuildFilters.tsx';
    tango = report.bind(oscar)(tango);
    zulu['GUILD_FILTERS'] = mike;
    return entity;
})();