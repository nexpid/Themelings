// app/modules/queries/ArraySearch.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot1;
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
            golf = _closure1_slot1;
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
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot0 = entity;
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
    var _closure1_slot1 = entity;
    entity = function(argFoo, argBar) { // Original name: sortGroup
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.sort;
        entity = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                options = argFoo;
                golf = argBar;
                mike = _closure1_slot0;
                entity = _closure2_slot0;
                oscar = undefined;
                report = mike.bind(oscar)(entity);
                zulu = report.bind(oscar)();
                mike = zulu.done;
                entity = 0;
                tango = zulu;
                if(mike) { _fun00008_ip = 78; continue _fun00007 }
 44:
                mike = tango.value;
                mike = mike.bind(oscar)(options, golf);
                if(!(entity === mike)) { _fun00008_ip = 76; continue _fun00007 }
 59:
                verify = report.bind(oscar)();
                zulu = verify.done;
                tango = verify;
                if(zulu) { _fun00008_ip = 78; continue _fun00007 }
 74:
                _fun00008_ip = 44; continue _fun00007;
 76:
                return mike;
 78:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/queries/ArraySearch.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: queryData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argBar;
            mike = zulu.limit;
            entity = null;
            report = entity != mike;
            tango = inf;
            if(!report) { _fun00010_ip = 33; continue _fun00009 }
 30:
            tango = mike;
 33:
            golf = zulu.filterPredicates;
            if(!(entity == golf)) { _fun00010_ip = 47; continue _fun00009 }
 43:
            golf = new Array(0);
 47:
            report = function(argFoo, argBar) { // Original name: applyFilters
                zulu = argFoo;
                mike = argBar;
                var _closure3_slot0 = mike;
                mike = zulu.filter;
                entity = function(argFoo) {
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    zulu = _closure3_slot0;
                    mike = zulu.every;
                    entity = function(argFoo) {
                        zulu = _closure4_slot0;
                        mike = argFoo;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = undefined;
            mike = argFoo;
            options = report.bind(verify)(mike, golf);
            mike = zulu.bucketPredicates;
            if(!(entity != mike)) { _fun00010_ip = 92; continue _fun00009 }
 75:
            mike = zulu.bucketPredicates;
            report = mike.length;
            mike = 0;
            if(!(!(report > mike))) { _fun00010_ip = 102; continue _fun00009 }
 92:
            mike = new Array(1);
            mike[0] = options;
            _fun00010_ip = 171; continue _fun00009;
 102:
            report = options.length;
            if(!(!(tango >= report))) { _fun00010_ip = 141; continue _fun00009 }
 111:
            golf = zulu.bucketPredicates;
            if(!(entity == golf)) { _fun00010_ip = 125; continue _fun00009 }
 121:
            golf = new Array(0);
 125:
            report = function(argFoo, argBar, argBaz) { // Original name: applyBucketing
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    offset = argFoo;
                    verify = argBaz;
                    entity = new Array(0);
                    zulu = _closure1_slot0;
                    golf = undefined;
                    mike = argBar;
                    oscar = zulu.bind(golf)(mike);
                    zulu = oscar.bind(golf)();
                    mike = zulu.done;
                    report = 0;
                    tango = zulu;
                    zulu = undefined;
                    if(mike) { _fun00012_ip = 192; continue _fun00011 }
 51:
                    sizing = tango.value;
                    romeo = new Array(0);
                    foxtrot = new Array(0);
                    mike = _closure1_slot0;
                    kilo = mike.bind(golf)(offset);
                    backup = kilo.bind(golf)();
                    mike = backup.done;
                    if(mike) { _fun00012_ip = 138; continue _fun00011 }
 85:
                    output = backup.value;
                    mike = sizing.bind(golf)(output);
                    if(mike) { _fun00012_ip = 110; continue _fun00011 }
 98:
                    mike = romeo.push;
                    mike = mike.bind(romeo)(output);
                    _fun00012_ip = 120; continue _fun00011;
 110:
                    mike = foxtrot.push;
                    mike = mike.bind(foxtrot)(output);
 120:
                    result = kilo.bind(golf)();
                    mike = result.done;
                    backup = result;
                    zulu = output;
                    if(!mike) { _fun00012_ip = 85; continue _fun00011 }
 138:
                    mike = entity.push;
                    mike = mike.bind(entity)(foxtrot);
                    foxtrot = entity.reduce;
                    mike = function(argFoo, argBar) {
                        entity = argBar;
                        mike = entity.length;
                        entity = argFoo;
                        entity = mike + entity;
                        return entity;
                    };
                    mike = foxtrot.bind(entity)(mike, report);
                    if(!(!(mike >= verify))) { _fun00012_ip = 192; continue _fun00011 }
 171:
                    foxtrot = oscar.bind(golf)();
                    mike = foxtrot.done;
                    tango = foxtrot;
                    offset = romeo;
                    if(!mike) { _fun00012_ip = 51; continue _fun00011 }
 192:
                    return entity;
                }
            };
            report = report.bind(verify)(options, golf, tango);
            _fun00010_ip = 168; continue _fun00009;
 141:
            golf = zulu.bucketPredicates;
            if(!(entity == golf)) { _fun00010_ip = 155; continue _fun00009 }
 151:
            golf = new Array(0);
 155:
            oscar = function(argFoo, argBar) { // Original name: applyBucketingSingleIteration
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    golf = argBar;
                    entity = global;
                    zulu = entity.Array;
                    yankee = golf.length;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    romeo = mike;
                    entity = new romeo[zulu](yankee, offset);
                    zulu = entity instanceof Object ? entity : mike;
                    mike = zulu.fill;
                    entity = null;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.map;
                    entity = function() {
                        entity = new Array(0);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    zulu = _closure1_slot0;
                    oscar = undefined;
                    mike = argFoo;
                    report = zulu.bind(oscar)(mike);
                    zulu = report.bind(oscar)();
                    mike = zulu.done;
                    tango = 0;
                    if(mike) { _fun00014_ip = 176; continue _fun00013 }
 99:
                    verify = zulu.value;
                    mike = golf.length;
                    mike = tango < mike;
                    offset = 0;
                    if(!mike) { _fun00014_ip = 161; continue _fun00013 }
 118:
                    mike = golf[offset];
                    options = mike.bind(golf)(verify);
                    mike = offset;
                    if(options) { _fun00014_ip = 147; continue _fun00013 }
 133:
                    offset = mike + 1;
                    options = golf.length;
                    if(offset < options) { _fun00014_ip = 118; continue _fun00013 }
 145:
                    _fun00014_ip = 161; continue _fun00013;
 147:
                    options = entity[mike];
                    mike = options.push;
                    mike = mike.bind(options)(verify);
 161:
                    options = report.bind(oscar)();
                    mike = options.done;
                    zulu = options;
                    if(!mike) { _fun00014_ip = 99; continue _fun00013 }
 176:
                    return entity;
                }
            };
            report = oscar.bind(verify)(options, golf);
 168:
            mike = report;
 171:
            options = zulu.sortComparers;
            if(!(entity == options)) { _fun00010_ip = 185; continue _fun00009 }
 181:
            options = new Array(0);
 185:
            zulu = new Array(0);
            entity = _closure1_slot0;
            oscar = entity.bind(verify)(mike);
            report = oscar.bind(verify)();
            entity = report.done;
            mike = 0;
            if(entity) { _fun00010_ip = 285; continue _fun00009 }
 215:
            offset = _closure1_slot2;
            entity = report.value;
            foxtrot = offset.bind(verify)(entity, options);
            offset = zulu.push;
            entity = new Array(0);
            backup = entity;
            romeo = 0;
            yankee = arraySpread(backup, foxtrot, romeo);
            backup = offset;
            foxtrot = entity;
            romeo = zulu;
            entity = apply(backup, foxtrot, romeo);
            entity = zulu.length;
            if(!(!(entity >= tango))) { _fun00010_ip = 285; continue _fun00009 }
 270:
            offset = oscar.bind(verify)();
            entity = offset.done;
            report = offset;
            if(!entity) { _fun00010_ip = 215; continue _fun00009 }
 285:
            entity = zulu.slice;
            entity = entity.bind(zulu)(mike, tango);
            return entity;
        }
    };
    zulu['queryData'] = mike;
    return entity;
})();