// app/utils/HighlightJsAnsiLanguage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun53290: for(var _fun53290_ip = 0; ; ) switch(_fun53290_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun53290_ip = 46; continue _fun53290 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun53290_ip = 55; continue _fun53290 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun53290_ip = 343; continue _fun53290 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun53290_ip = 323; continue _fun53290 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun53290_ip = 283; continue _fun53290 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun53290_ip = 270; continue _fun53290 }
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
            if(!golf) { _fun53290_ip = 163; continue _fun53290 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun53290_ip = 179; continue _fun53290 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun53290_ip = 249; continue _fun53290 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun53290_ip = 249; continue _fun53290 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun53290_ip = 234; continue _fun53290 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun53290_ip = 247; continue _fun53290 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun53290_ip = 265; continue _fun53290;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun53290_ip = 283; continue _fun53290;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun53290_ip = 323; continue _fun53290 }
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
            if(!tango) { _fun53290_ip = 330; continue _fun53290 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun53291: for(var _fun53291_ip = 0; ; ) switch(_fun53291_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun53291_ip = 56; continue _fun53291 }
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
                    _fun53291_ip = 67; continue _fun53291;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun53292: for(var _fun53292_ip = 0; ; ) switch(_fun53292_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun53292_ip = 23; continue _fun53292 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun53292_ip = 33; continue _fun53292 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun53292_ip = 70; continue _fun53292 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun53292_ip = 55; continue _fun53292 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: makeAnsiRuleCategory
        _fun53293: for(var _fun53293_ip = 0; ; ) switch(_fun53293_ip) {
 0:
            tango = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = ['0'];
            verify = argBaz;
            options = 1;
            offset = report;
            mike = arraySpread(offset, verify, options);
            var _closure2_slot1 = report;
            mike = argCorge;
            if(!mike) { _fun53293_ip = 94; continue _fun53293 }
 45:
            zulu = report.push;
            mike = global;
            oscar = mike.Object;
            mike = oscar.keys;
            verify = mike.bind(oscar)(tango);
            mike = new Array(0);
            options = 0;
            offset = mike;
            oscar = arraySpread(offset, verify, options);
            offset = zulu;
            verify = mike;
            options = report;
            mike = apply(offset, verify, options);
 94:
            mike = global;
            zulu = mike.Object;
            mike = zulu.entries;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun53294: for(var _fun53294_ip = 0; ; ) switch(_fun53294_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu[Symbol.iterator];
                    zulu = entity().next;
                    tango = zulu().value;
                    mike = entity;
                    oscar = undefined;
                    mike = mike === oscar;
                    report = undefined;
                    if(mike) { _fun53294_ip = 27; continue _fun53294 }
 24:
                    report = tango;
 27:
                    tango = undefined;
                    if(mike) { _fun53294_ip = 57; continue _fun53294 }
 32:
                    golf = zulu().value;
                    zulu = entity;
                    zulu = zulu === oscar;
                    tango = undefined;
                    mike = zulu;
                    if(zulu) { _fun53294_ip = 57; continue _fun53294 }
 51:
                    tango = golf;
                    mike = zulu;
 57:
                    if(mike) { _fun53294_ip = 63; continue _fun53294 }
 60:
                    entity.return();
 63:
                    romeo = _closure2_slot0;
                    verify = _closure2_slot1;
                    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: makeAnsiRule
                        entity = argBaz;
                        var _closure4_slot0 = entity;
                        entity = argCorge;
                        var _closure4_slot1 = entity;
                        entity = {};
                        zulu = global;
                        zulu = zulu.HermesInternal;
                        golf = zulu.concat;
                        oscar = 'ansi-';
                        report = argFoo;
                        tango = '-';
                        zulu = argBar;
                        zulu = golf.bind(oscar)(report, tango, zulu);
                        entity['className'] = zulu;
                        zulu = true;
                        entity['endsParent'] = zulu;
                        zulu = _closure1_slot4;
                        entity['begin'] = zulu;
                        mike = function(argFoo, argBar) { // Original name: on:begin
                            _fun53296: for(var _fun53296_ip = 0; ; ) switch(_fun53296_ip) {
 0:
                                zulu = argBar;
                                mike = argFoo;
                                entity = 1;
                                tango = mike[entity];
                                mike = tango.split;
                                entity = ';';
                                tango = mike.bind(tango)(entity);
                                entity = zulu.data;
                                mike = entity.isOn;
                                entity = undefined;
                                if(!(entity === mike)) { _fun53296_ip = 57; continue _fun53296 }
 44:
                                report = zulu.data;
                                mike = false;
                                report['isOn'] = mike;
 57:
                                mike = _closure1_slot5;
                                options = mike.bind(entity)(tango);
                                tango = options.bind(entity)();
                                mike = tango.done;
                                golf = true;
                                oscar = false;
                                if(mike) { _fun53296_ip = 157; continue _fun53296 }
 88:
                                offset = tango.value;
                                mike = _closure4_slot0;
                                if(!(offset !== mike)) { _fun53296_ip = 131; continue _fun53296 }
 101:
                                verify = _closure4_slot1;
                                mike = verify.includes;
                                mike = mike.bind(verify)(offset);
                                if(!mike) { _fun53296_ip = 142; continue _fun53296 }
 118:
                                mike = zulu.data;
                                mike['isOn'] = oscar;
                                _fun53296_ip = 142; continue _fun53296;
 131:
                                mike = zulu.data;
                                mike['isOn'] = golf;
 142:
                                verify = options.bind(entity)();
                                mike = verify.done;
                                tango = verify;
                                if(!mike) { _fun53296_ip = 88; continue _fun53296 }
 157:
                                mike = zulu.data;
                                mike = mike.isOn;
                                if(mike) { _fun53296_ip = 183; continue _fun53296 }
 171:
                                mike = zulu.ignoreMatch;
                                mike = mike.bind(zulu)();
 183:
                                return entity;
                            }
                        };
                        entity['on:begin'] = mike;
                        return entity;
                    };
                    foxtrot = undefined;
                    yankee = tango;
                    offset = report;
                    entity = foxtrot[entity](romeo, yankee, offset, verify, options);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    mike = true;
    report['value'] = mike;
    mike = '__esModule';
    mike = oscar.bind(golf)(zulu, mike, report);
    mike = {1: 'bold', 4: 'underline'};
    var _closure1_slot0 = mike;
    mike = {30: 'black', 31: 'red', 32: 'green', 33: 'yellow', 34: 'blue', 35: 'magenta', 36: 'cyan', 37: 'white'};
    var _closure1_slot1 = mike;
    mike = {40: 'black', 41: 'red', 42: 'green', 43: 'yellow', 44: 'blue', 45: 'magenta', 46: 'cyan', 47: 'white'};
    var _closure1_slot2 = mike;
    mike = /\x1B\[(\d+(?:[:;]\d+)*)m/;
    var _closure1_slot3 = mike;
    oscar = entity.RegExp;
    options = mike.source;
    entity = entity.HermesInternal;
    golf = entity.concat;
    report = '(?=';
    entity = ')';
    yankee = golf.bind(report)(options, entity);
    report = oscar.prototype;
    report = Object.create(report, {constructor: {value: oscar}});
    romeo = report;
    entity = new romeo[oscar](yankee, offset);
    entity = entity instanceof Object ? entity : report;
    var _closure1_slot4 = entity;
    report = argPlugh;
    entity = 0;
    oscar = report[entity];
    report = argBar;
    entity = undefined;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'utils/HighlightJsAnsiLanguage.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: highlightJsAnsiLanguage
        _fun53297: for(var _fun53297_ip = 0; ; ) switch(_fun53297_ip) {
 0:
            yankee = _closure1_slot7;
            backup = _closure1_slot1;
            kilo = 'foreground';
            foxtrot = ['38', '39'];
            golf = true;
            sizing = undefined;
            romeo = true;
            backup = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
            mike = new Array(1);
            zulu = 0;
            kilo = mike;
            foxtrot = 0;
            report = arraySpread(kilo, backup, foxtrot);
            backup = _closure1_slot2;
            kilo = 'background';
            foxtrot = ['48', '49'];
            sizing = undefined;
            backup = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
            kilo = mike;
            foxtrot = report;
            report = arraySpread(kilo, backup, foxtrot);
            backup = _closure1_slot0;
            kilo = 'style';
            foxtrot = new Array(0);
            romeo = false;
            sizing = undefined;
            backup = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
            kilo = mike;
            foxtrot = report;
            entity = arraySpread(kilo, backup, foxtrot);
            report = {};
            oscar = 'ansi-control-sequence';
            report['className'] = oscar;
            oscar = _closure1_slot3;
            report['begin'] = oscar;
            oscar = {};
            options = _closure1_slot4;
            oscar['end'] = options;
            oscar['endsParent'] = golf;
            report['starts'] = oscar;
            mike[entity] = report;
            report = 1;
            entity = entity + report;
            entity = mike.length;
            entity = zulu < entity;
            if(!entity) { _fun53297_ip = 218; continue _fun53297 }
 182:
            oscar = mike[zulu];
            golf = mike.slice;
            entity = zulu + report;
            entity = golf.bind(mike)(entity);
            oscar['contains'] = entity;
            zulu = zulu + 1;
            entity = mike.length;
            if(zulu < entity) { _fun53297_ip = 182; continue _fun53297 }
 218:
            entity = {};
            zulu = {};
            tango = _closure1_slot4;
            zulu['begin'] = tango;
            zulu['contains'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['contains'] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['ANSI_CONTROL_SEQUENCE_RE'] = mike;
    return entity;
})();