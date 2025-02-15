// app/modules/guild_onboarding/useFlattenedChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
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
            verify = _closure1_slot5;
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
            golf = _closure1_slot5;
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
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: getFlattenedChannels
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argBaz;
            entity = arguments[3];
            mike = argBar;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = offset;
            oscar = undefined;
            if(!(entity === oscar)) { _fun00008_ip = 27; continue _fun00007 }
 25:
            entity = false;
 27:
            var _closure2_slot2 = entity;
            var _closure2_slot3 = oscar;
            var _closure2_slot4 = oscar;
            var _closure2_slot5 = oscar;
            report = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 1;
            zulu = golf[entity];
            options = report.bind(oscar)(zulu);
            yankee = _closure1_slot3;
            verify = yankee.getMutableGuildChannelsForGuild;
            zulu = argFoo;
            zulu = verify.bind(yankee)(zulu);
            options = options.bind(oscar)(zulu);
            zulu = options.values;
            verify = zulu.bind(options)();
            options = verify.groupBy;
            zulu = 'parent_id';
            options = options.bind(verify)(zulu);
            zulu = options.value;
            zulu = zulu.bind(options)();
            _closure2_slot3 = zulu;
            zulu = golf[entity];
            zulu = report.bind(oscar)(zulu);
            verify = zulu.bind(oscar)(offset);
            options = verify.map;
            zulu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = argFoo;
                    entity = mike.isCategory;
                    entity = entity.bind(mike)();
                    if(entity) { _fun00010_ip = 24; continue _fun00009 }
 16:
                    entity = mike.parent_id;
                    _fun00010_ip = 29; continue _fun00009;
 24:
                    entity = mike.id;
 29:
                    return entity;
                }
            };
            romeo = options.bind(verify)(zulu);
            verify = romeo.filter;
            yankee = _closure1_slot0;
            zulu = 2;
            options = golf[zulu];
            options = yankee.bind(oscar)(options);
            options = options.isNotNullish;
            verify = verify.bind(romeo)(options);
            options = verify.uniq;
            romeo = options.bind(verify)();
            verify = romeo.map;
            options = function(argFoo) {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = verify.bind(romeo)(options);
            options = verify.filter;
            zulu = golf[zulu];
            zulu = yankee.bind(oscar)(zulu);
            zulu = zulu.isNotNullish;
            verify = options.bind(verify)(zulu);
            options = verify.sortBy;
            zulu = 'position';
            options = options.bind(verify)(zulu);
            zulu = options.value;
            zulu = zulu.bind(options)();
            options = global;
            yankee = options.Set;
            verify = zulu.map;
            options = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = verify.bind(zulu)(options);
            verify = yankee.prototype;
            verify = Object.create(verify, {constructor: {value: yankee}});
            kilo = verify;
            options = new kilo[yankee](backup, foxtrot);
            options = options instanceof Object ? options : verify;
            _closure2_slot4 = options;
            verify = offset.filter;
            options = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.isCategory;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun00012_ip = 57; continue _fun00011 }
 16:
                    tango = zulu.parent_id;
                    mike = null;
                    mike = mike != tango;
                    if(!mike) { _fun00012_ip = 54; continue _fun00011 }
 31:
                    report = _closure2_slot4;
                    tango = report.has;
                    zulu = zulu.parent_id;
                    mike = tango.bind(report)(zulu);
 54:
                    entity = mike;
 57:
                    entity = !entity;
                    return entity;
                }
            };
            options = verify.bind(offset)(options);
            _closure2_slot5 = options;
            entity = golf[entity];
            golf = report.bind(oscar)(entity);
            report = golf.sortBy;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = argFoo;
                    entity = mike.isGuildVocal;
                    entity = entity.bind(mike)();
                    zulu = mike.position;
                    if(entity) { _fun00014_ip = 26; continue _fun00013 }
 21:
                    entity = zulu;
                    _fun00014_ip = 36; continue _fun00013;
 26:
                    mike = 10000;
                    entity = zulu + mike;
 36:
                    return entity;
                }
            };
            entity = report.bind(golf)(options, entity);
            _closure2_slot5 = entity;
            report = function(argFoo) { // Original name: _loop
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tango = _closure2_slot2;
                    if(tango) { _fun00016_ip = 33; continue _fun00015 }
 19:
                    report = _closure2_slot5;
                    tango = report.push;
                    tango = tango.bind(report)(entity);
 33:
                    oscar = _closure2_slot0;
                    report = oscar.has;
                    tango = entity.id;
                    tango = report.bind(oscar)(tango);
                    if(tango) { _fun00016_ip = 76; continue _fun00015 }
 55:
                    oscar = _closure2_slot1;
                    report = oscar.filter;
                    tango = function(argFoo) {
                        entity = argFoo;
                        mike = entity.parent_id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    oscar = report.bind(oscar)(tango);
                    _fun00016_ip = 89; continue _fun00015;
 76:
                    tango = _closure2_slot3;
                    entity = entity.id;
                    oscar = tango[entity];
 89:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.sortBy;
                    golf = null;
                    if(!(golf == oscar)) { _fun00016_ip = 130; continue _fun00015 }
 126:
                    oscar = new Array(0);
 130:
                    zulu = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            mike = argFoo;
                            entity = mike.isGuildVocal;
                            entity = entity.bind(mike)();
                            zulu = mike.position;
                            if(entity) { _fun00018_ip = 26; continue _fun00017 }
 21:
                            entity = zulu;
                            _fun00018_ip = 36; continue _fun00017;
 26:
                            mike = 10000;
                            entity = zulu + mike;
 36:
                            return entity;
                        }
                    };
                    verify = tango.bind(report)(oscar, zulu);
                    tango = _closure2_slot5;
                    zulu = tango.push;
                    mike = new Array(0);
                    options = 0;
                    offset = mike;
                    report = arraySpread(offset, verify, options);
                    offset = zulu;
                    verify = mike;
                    options = tango;
                    mike = apply(offset, verify, options);
                    return entity;
                }
            };
            mike = _closure1_slot4;
            tango = mike.bind(oscar)(zulu);
            zulu = tango.bind(oscar)();
            mike = zulu.done;
            if(mike) { _fun00008_ip = 408; continue _fun00007 }
 383:
            mike = zulu.value;
            mike = report.bind(oscar)(mike);
            golf = tango.bind(oscar)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun00008_ip = 383; continue _fun00007 }
 408:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_onboarding/useFlattenedChannels.tsx';
    report = oscar.bind(golf)(report);
    zulu['getFlattenedChannels'] = tango;
    mike = function(argFoo, argBar) { // Original name: useFlattenedChannels
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            mike = arguments[2];
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            zulu = argBar;
            var _closure2_slot1 = zulu;
            report = undefined;
            if(!(mike === report)) { _fun00020_ip = 27; continue _fun00019 }
 25:
            mike = false;
 27:
            var _closure2_slot2 = mike;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 3;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStoresArray;
            report = _closure1_slot3;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                oscar = _closure2_slot1;
                tango = mike.bind(zulu)(oscar);
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot3;
                    mike = zulu.getChannel;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                golf = zulu.bind(tango)(mike);
                tango = golf.filter;
                options = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 2;
                zulu = report[zulu];
                report = undefined;
                zulu = options.bind(report)(zulu);
                zulu = zulu.isNotNullish;
                offset = tango.bind(golf)(zulu);
                zulu = _closure1_slot6;
                romeo = _closure2_slot0;
                verify = _closure2_slot2;
                foxtrot = undefined;
                yankee = oscar;
                entity = foxtrot[zulu](romeo, yankee, offset, verify, options);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['useFlattenedChannels'] = mike;
    return entity;
})();