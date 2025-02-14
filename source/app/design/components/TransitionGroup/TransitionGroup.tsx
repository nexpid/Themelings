// app/design/components/TransitionGroup/TransitionGroup.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun48730: for(var _fun48730_ip = 0; ; ) switch(_fun48730_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun48730_ip = 46; continue _fun48730 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun48730_ip = 55; continue _fun48730 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun48730_ip = 343; continue _fun48730 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun48730_ip = 323; continue _fun48730 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun48730_ip = 283; continue _fun48730 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun48730_ip = 270; continue _fun48730 }
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
            if(!golf) { _fun48730_ip = 163; continue _fun48730 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun48730_ip = 179; continue _fun48730 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun48730_ip = 249; continue _fun48730 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun48730_ip = 249; continue _fun48730 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun48730_ip = 234; continue _fun48730 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun48730_ip = 247; continue _fun48730 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun48730_ip = 265; continue _fun48730;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun48730_ip = 283; continue _fun48730;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun48730_ip = 323; continue _fun48730 }
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
            if(!tango) { _fun48730_ip = 330; continue _fun48730 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun48731: for(var _fun48731_ip = 0; ; ) switch(_fun48731_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun48731_ip = 56; continue _fun48731 }
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
                    _fun48731_ip = 67; continue _fun48731;
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
        _fun48732: for(var _fun48732_ip = 0; ; ) switch(_fun48732_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun48732_ip = 23; continue _fun48732 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun48732_ip = 33; continue _fun48732 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun48732_ip = 70; continue _fun48732 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun48732_ip = 55; continue _fun48732 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: wrapChildrenDefault
        entity = argFoo;
        return entity;
    };
    var _closure1_slot8 = entity;
    tango = function(argFoo) { // Original name: TransitionGroup
        _fun48734: for(var _fun48734_ip = 0; ; ) switch(_fun48734_ip) {
 0:
            entity = argFoo;
            options = entity.items;
            var _closure2_slot0 = options;
            foxtrot = entity.renderItem;
            var _closure2_slot1 = foxtrot;
            backup = entity.getItemKey;
            var _closure2_slot2 = backup;
            golf = entity.wrapChildren;
            tango = undefined;
            if(!(golf === tango)) { _fun48734_ip = 54; continue _fun48734 }
 47:
            golf = _closure1_slot8;
 54:
            zulu = entity.lazyCleanUpDelay;
            var _closure2_slot3 = zulu;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            verify = _closure1_slot1;
            oscar = verify.useRef;
            report = -1;
            report = oscar.bind(verify)(report);
            _closure2_slot4 = report;
            verify = _closure1_slot1;
            oscar = verify.useLayoutEffect;
            report = function() {
                entity = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure2_slot4;
                    mike = entity.current;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            report = oscar.bind(verify)(report);
            verify = _closure1_slot1;
            oscar = verify.useState;
            report = _closure1_slot5;
            oscar = oscar.bind(verify)(report);
            report = _closure1_slot0;
            yankee = 2;
            report = report.bind(tango)(oscar, yankee);
            offset = 1;
            report = report[offset];
            _closure2_slot5 = report;
            verify = _closure1_slot1;
            oscar = verify.useRef;
            report = null;
            oscar = oscar.bind(verify)(report);
            _closure2_slot6 = oscar;
            romeo = _closure1_slot1;
            verify = romeo.useMemo;
            oscar = new Array(4);
            oscar[0] = options;
            oscar[1] = backup;
            oscar[2] = foxtrot;
            oscar[3] = zulu;
            zulu = function() {
                _fun48737: for(var _fun48737_ip = 0; ; ) switch(_fun48737_ip) {
 0:
                    entity = global;
                    tango = entity.Set;
                    mike = _closure2_slot6;
                    report = mike.current;
                    golf = null;
                    zulu = golf == report;
                    oscar = undefined;
                    mike = undefined;
                    if(zulu) { _fun48737_ip = 44; continue _fun48737 }
 35:
                    zulu = report.keys;
                    mike = zulu.bind(report)();
 44:
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    echo = zulu;
                    result = mike;
                    mike = new echo[tango](result, output);
                    zulu = mike instanceof Object ? mike : zulu;
                    var _closure3_slot0 = zulu;
                    tango = entity.Map;
                    entity = _closure2_slot6;
                    result = entity.current;
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    echo = mike;
                    entity = new echo[tango](result, output);
                    entity = entity instanceof Object ? entity : mike;
                    var _closure3_slot1 = entity;
                    offset = function() { // Original name: _loop
                        _fun48738: for(var _fun48738_ip = 0; ; ) switch(_fun48738_ip) {
 0:
                            oscar = _closure2_slot2;
                            tango = _closure3_slot2;
                            entity = undefined;
                            tango = oscar.bind(entity)(tango);
                            var _closure4_slot0 = tango;
                            golf = _closure3_slot1;
                            oscar = golf.get;
                            golf = oscar.bind(golf)(tango);
                            options = null;
                            if(!(options != golf)) { _fun48738_ip = 209; continue _fun48738 }
 50:
                            verify = golf.item;
                            oscar = _closure3_slot2;
                            if(!(verify === oscar)) { _fun48738_ip = 105; continue _fun48738 }
 63:
                            verify = golf.renderItem;
                            oscar = _closure2_slot1;
                            if(!(verify === oscar)) { _fun48738_ip = 105; continue _fun48738 }
 77:
                            offset = golf.state;
                            oscar = _closure1_slot4;
                            verify = oscar.YEETED;
                            oscar = golf;
                            if(!(offset === verify)) { _fun48738_ip = 309; continue _fun48738 }
 105:
                            offset = golf.cleanUp;
                            romeo = golf.state;
                            yankee = _closure1_slot4;
                            yankee = yankee.YEETED;
                            if(!(romeo !== yankee)) { _fun48738_ip = 140; continue _fun48738 }
 133:
                            yankee = golf.state;
                            _fun48738_ip = 150; continue _fun48738;
 140:
                            verify = _closure1_slot4;
                            yankee = verify.ENTERED;
 150:
                            verify = _closure2_slot1;
                            sizing = _closure3_slot2;
                            backup = golf.cleanUp;
                            result = undefined;
                            output = tango;
                            kilo = yankee;
                            romeo = result[verify](output, sizing, kilo, backup, foxtrot);
                            golf = {};
                            foxtrot = _closure3_slot2;
                            golf['item'] = foxtrot;
                            golf['children'] = romeo;
                            golf['state'] = yankee;
                            golf['cleanUp'] = offset;
                            golf['renderItem'] = verify;
                            oscar = golf;
                            _fun48738_ip = 309; continue _fun48738;
 209:
                            golf = _closure2_slot6;
                            golf = golf.current;
                            if(!(options == golf)) { _fun48738_ip = 237; continue _fun48738 }
 222:
                            golf = _closure1_slot4;
                            options = golf.MOUNTED;
                            _fun48738_ip = 250; continue _fun48738;
 237:
                            golf = _closure1_slot4;
                            options = golf.ENTERED;
 250:
                            golf = function() { // Original name: _cleanUp
                                _fun48739: for(var _fun48739_ip = 0; ; ) switch(_fun48739_ip) {
 0:
                                    entity = _closure2_slot6;
                                    golf = entity.current;
                                    tango = null;
                                    report = tango == golf;
                                    entity = undefined;
                                    zulu = undefined;
                                    if(report) { _fun48739_ip = 42; continue _fun48739 }
 25:
                                    oscar = golf.get;
                                    report = _closure4_slot0;
                                    zulu = oscar.bind(golf)(report);
 42:
                                    if(!(tango != zulu)) { _fun48739_ip = 177; continue _fun48739 }
 49:
                                    report = zulu.state;
                                    zulu = _closure1_slot4;
                                    zulu = zulu.YEETED;
                                    if(!(report === zulu)) { _fun48739_ip = 177; continue _fun48739 }
 71:
                                    zulu = _closure2_slot6;
                                    oscar = zulu.current;
                                    if(!(tango != oscar)) { _fun48739_ip = 101; continue _fun48739 }
 84:
                                    report = oscar.delete;
                                    zulu = _closure4_slot0;
                                    zulu = report.bind(oscar)(zulu);
 101:
                                    zulu = _closure2_slot3;
                                    if(!(tango == zulu)) { _fun48739_ip = 122; continue _fun48739 }
 109:
                                    tango = _closure2_slot5;
                                    zulu = {};
                                    zulu = tango.bind(entity)(zulu);
                                    _fun48739_ip = 177; continue _fun48739;
 122:
                                    tango = global;
                                    report = tango.clearTimeout;
                                    zulu = _closure2_slot4;
                                    zulu = zulu.current;
                                    zulu = report.bind(entity)(zulu);
                                    zulu = _closure2_slot4;
                                    report = tango.setTimeout;
                                    tango = _closure2_slot3;
                                    mike = function() {
                                        zulu = _closure2_slot5;
                                        mike = undefined;
                                        entity = {};
                                        entity = zulu.bind(mike)(entity);
                                        return entity;
                                    };
                                    mike = report.bind(entity)(mike, tango);
                                    zulu['current'] = mike;
 177:
                                    return entity;
                                }
                            };
                            report = _closure2_slot1;
                            sizing = _closure3_slot2;
                            result = undefined;
                            output = tango;
                            kilo = options;
                            backup = golf;
                            verify = result[report](output, sizing, kilo, backup, foxtrot);
                            zulu = {};
                            offset = _closure3_slot2;
                            zulu['item'] = offset;
                            zulu['children'] = verify;
                            zulu['state'] = options;
                            zulu['cleanUp'] = golf;
                            zulu['renderItem'] = report;
                            oscar = zulu;
 309:
                            report = _closure3_slot1;
                            zulu = report.set;
                            zulu = zulu.bind(report)(tango, oscar);
                            zulu = _closure3_slot0;
                            mike = zulu.delete;
                            mike = mike.bind(zulu)(tango);
                            return entity;
                        }
                    };
                    tango = _closure1_slot6;
                    mike = _closure2_slot0;
                    verify = tango.bind(oscar)(mike);
                    tango = verify.bind(oscar)();
                    mike = tango.done;
                    if(mike) { _fun48737_ip = 171; continue _fun48737 }
 143:
                    mike = tango.value;
                    var _closure3_slot2 = mike;
                    mike = offset.bind(oscar)();
                    romeo = verify.bind(oscar)();
                    mike = romeo.done;
                    tango = romeo;
                    if(!mike) { _fun48737_ip = 143; continue _fun48737 }
 171:
                    mike = _closure1_slot6;
                    tango = mike.bind(oscar)(zulu);
                    zulu = tango.bind(oscar)();
                    mike = zulu.done;
                    if(mike) { _fun48737_ip = 392; continue _fun48737 }
 195:
                    offset = zulu.value;
                    mike = entity.get;
                    romeo = mike.bind(entity)(offset);
                    if(!(golf != romeo)) { _fun48737_ip = 374; continue _fun48737 }
 217:
                    verify = romeo.state;
                    mike = _closure1_slot4;
                    mike = mike.YEETED;
                    if(!(verify === mike)) { _fun48737_ip = 263; continue _fun48737 }
 236:
                    verify = romeo.renderItem;
                    mike = _closure2_slot1;
                    if(!(verify === mike)) { _fun48737_ip = 263; continue _fun48737 }
 250:
                    mike = entity.set;
                    mike = mike.bind(entity)(offset, romeo);
                    _fun48737_ip = 374; continue _fun48737;
 263:
                    mike = romeo.item;
                    yankee = romeo.cleanUp;
                    verify = {};
                    verify['item'] = mike;
                    mike = _closure2_slot1;
                    output = romeo.item;
                    foxtrot = _closure1_slot4;
                    sizing = foxtrot.YEETED;
                    kilo = romeo.cleanUp;
                    echo = undefined;
                    result = offset;
                    romeo = echo[mike](result, output, sizing, kilo, backup);
                    verify['children'] = romeo;
                    romeo = _closure1_slot4;
                    romeo = romeo.YEETED;
                    verify['state'] = romeo;
                    verify['cleanUp'] = yankee;
                    verify['renderItem'] = mike;
                    mike = verify.children;
                    if(!(golf == mike)) { _fun48737_ip = 363; continue _fun48737 }
 351:
                    mike = entity.delete;
                    mike = mike.bind(entity)(offset);
                    _fun48737_ip = 374; continue _fun48737;
 363:
                    mike = entity.set;
                    mike = mike.bind(entity)(offset, verify);
 374:
                    verify = tango.bind(oscar)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun48737_ip = 195; continue _fun48737 }
 392:
                    return entity;
                }
            };
            zulu = verify.bind(romeo)(zulu, oscar);
            _closure2_slot7 = zulu;
            romeo = _closure1_slot1;
            verify = romeo.useInsertionEffect;
            oscar = new Array(1);
            oscar[0] = zulu;
            mike = function() {
                mike = _closure2_slot6;
                entity = _closure2_slot7;
                mike['current'] = entity;
                entity = function() {
                    _fun48742: for(var _fun48742_ip = 0; ; ) switch(_fun48742_ip) {
 0:
                        entity = _closure2_slot6;
                        zulu = entity.current;
                        entity = null;
                        mike = entity == zulu;
                        entity = undefined;
                        if(mike) { _fun48742_ip = 33; continue _fun48742 }
 23:
                        mike = zulu.clear;
                        entity = mike.bind(zulu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            mike = verify.bind(romeo)(mike, oscar);
            oscar = new Array(0);
            mike = _closure1_slot6;
            verify = mike.bind(tango)(zulu);
            zulu = verify.bind(tango)();
            mike = zulu.done;
            if(mike) { _fun48734_ip = 336; continue _fun48734 }
 287:
            romeo = zulu.value;
            mike = _closure1_slot0;
            mike = mike.bind(tango)(romeo, yankee);
            mike = mike[offset];
            romeo = oscar.push;
            mike = mike.children;
            mike = romeo.bind(oscar)(mike);
            romeo = verify.bind(tango)();
            mike = romeo.done;
            zulu = romeo;
            if(!mike) { _fun48734_ip = 287; continue _fun48734 }
 336:
            zulu = _closure1_slot3;
            mike = _closure1_slot2;
            entity = {};
            offset = oscar.length;
            verify = 0;
            verify = offset > verify;
            report = null;
            if(!verify) { _fun48734_ip = 368; continue _fun48734 }
 362:
            report = golf.bind(tango)(oscar, options);
 368:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = function() { // Original name: getSingleItemKey
        entity = 'key';
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, report);
    yankee = 0;
    oscar = options[yankee];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(oscar);
    var _closure1_slot0 = report;
    offset = 1;
    oscar = options[offset];
    report = argCorge;
    report = report.bind(entity)(oscar);
    var _closure1_slot1 = report;
    verify = 2;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot2 = report;
    report = options[verify];
    report = golf.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = {};
    report['MOUNTED'] = yankee;
    oscar = 'MOUNTED';
    report[yankee] = oscar;
    report['ENTERED'] = offset;
    oscar = 'ENTERED';
    report[offset] = oscar;
    report['YEETED'] = verify;
    oscar = 'YEETED';
    report[verify] = oscar;
    var _closure1_slot4 = report;
    oscar = {};
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'design/components/TransitionGroup/TransitionGroup.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['TransitionStates'] = report;
    zulu['TransitionGroup'] = tango;
    mike = function(argFoo) { // Original name: TransitionItem
        entity = argFoo;
        golf = entity.item;
        var _closure2_slot0 = golf;
        report = entity.renderItem;
        oscar = _closure1_slot1;
        tango = oscar.useMemo;
        zulu = new Array(1);
        zulu[0] = golf;
        mike = function() {
            _fun48745: for(var _fun48745_ip = 0; ; ) switch(_fun48745_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun48745_ip = 19; continue _fun48745 }
 13:
                entity = new Array(0);
                _fun48745_ip = 34; continue _fun48745;
 19:
                zulu = _closure2_slot0;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 34:
                return entity;
            }
        };
        oscar = tango.bind(oscar)(mike, zulu);
        tango = _closure1_slot3;
        zulu = _closure1_slot9;
        mike = {};
        mike['items'] = oscar;
        mike['renderItem'] = report;
        entity = _closure1_slot10;
        mike['getItemKey'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['TransitionItem'] = mike;
    return entity;
})();