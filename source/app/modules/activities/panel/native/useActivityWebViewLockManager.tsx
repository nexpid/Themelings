// app/modules/activities/panel/native/useActivityWebViewLockManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot6;
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
            golf = _closure1_slot6;
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
    var _closure1_slot5 = entity;
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
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/useActivityWebViewLockManager.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useActivityWebViewLockManager
        zulu = _closure1_slot4;
        mike = zulu.useState;
        entity = function() {
            mike = function(argFoo) { // Original name: getCanRender
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure3_slot1;
                    zulu = entity.size;
                    entity = 0;
                    entity = entity === zulu;
                    if(entity) { _fun00008_ip = 66; continue _fun00007 }
 21:
                    zulu = _closure3_slot1;
                    mike = zulu.values;
                    zulu = mike.bind(zulu)();
                    mike = zulu.next;
                    mike = mike.bind(zulu)();
                    zulu = null;
                    tango = zulu == mike;
                    zulu = undefined;
                    if(tango) { _fun00008_ip = 59; continue _fun00007 }
 54:
                    zulu = mike.value;
 59:
                    mike = argFoo;
                    entity = zulu === mike;
 66:
                    return entity;
                }
            };
            var _closure3_slot3 = mike;
            mike = function() { // Original name: queueRenderUpdate
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure3_slot0;
                    entity = null;
                    if(!(entity == zulu)) { _fun00010_ip = 54; continue _fun00009 }
 13:
                    entity = global;
                    zulu = entity.Promise;
                    entity = zulu.resolve;
                    tango = entity.bind(zulu)();
                    zulu = tango.then;
                    entity = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            tango = _closure1_slot5;
                            zulu = _closure3_slot2;
                            entity = undefined;
                            options = tango.bind(entity)(zulu);
                            tango = options.bind(entity)();
                            zulu = tango.done;
                            golf = 2;
                            oscar = 0;
                            report = 1;
                            if(zulu) { _fun00012_ip = 136; continue _fun00011 }
 41:
                            offset = tango.value;
                            zulu = _closure1_slot3;
                            zulu = zulu.bind(entity)(offset, golf);
                            backup = zulu[oscar];
                            zulu = zulu[report];
                            yankee = zulu.canRender;
                            offset = zulu.callback;
                            zulu = _closure3_slot3;
                            zulu = zulu.bind(entity)(backup);
                            if(!(zulu !== yankee)) { _fun00012_ip = 121; continue _fun00011 }
 89:
                            foxtrot = _closure3_slot2;
                            romeo = foxtrot.set;
                            yankee = {};
                            yankee['canRender'] = zulu;
                            yankee['callback'] = offset;
                            yankee = romeo.bind(foxtrot)(backup, yankee);
                            zulu = offset.bind(entity)(zulu);
 121:
                            offset = options.bind(entity)();
                            zulu = offset.done;
                            tango = offset;
                            if(!zulu) { _fun00012_ip = 41; continue _fun00011 }
 136:
                            _closure3_slot0 = entity;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity);
                    var _closure3_slot0 = entity;
 54:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot4 = mike;
            mike = global;
            zulu = mike.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            report = tango;
            zulu = new report[zulu](tango);
            zulu = zulu instanceof Object ? zulu : tango;
            var _closure3_slot1 = zulu;
            mike = mike.Map;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            report = zulu;
            mike = new report[mike](tango);
            mike = mike instanceof Object ? mike : zulu;
            var _closure3_slot2 = mike;
            entity = function() {
                report = _closure1_slot4;
                zulu = report.useId;
                golf = zulu.bind(report)();
                var _closure4_slot0 = golf;
                tango = report.useState;
                zulu = function() {
                    zulu = _closure3_slot3;
                    mike = _closure4_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                oscar = tango.bind(report)(zulu);
                tango = _closure1_slot3;
                zulu = undefined;
                entity = 2;
                tango = tango.bind(zulu)(oscar, entity);
                entity = 0;
                entity = tango[entity];
                zulu = 1;
                oscar = tango[zulu];
                var _closure4_slot1 = oscar;
                options = report.useInsertionEffect;
                tango = new Array(1);
                tango[0] = golf;
                zulu = function() {
                    mike = _closure3_slot1;
                    entity = mike.add;
                    tango = _closure4_slot0;
                    entity = entity.bind(mike)(tango);
                    zulu = _closure3_slot2;
                    mike = zulu.set;
                    entity = {};
                    oscar = _closure4_slot1;
                    entity['callback'] = oscar;
                    oscar = _closure3_slot3;
                    report = undefined;
                    report = oscar.bind(report)(tango);
                    entity['canRender'] = report;
                    entity = mike.bind(zulu)(tango, entity);
                    entity = function() {
                        tango = _closure3_slot1;
                        mike = tango.delete;
                        zulu = _closure4_slot0;
                        mike = mike.bind(tango)(zulu);
                        mike = _closure3_slot2;
                        entity = mike.delete;
                        entity = entity.bind(mike)(zulu);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                };
                zulu = options.bind(report)(zulu, tango);
                tango = report.useLayoutEffect;
                zulu = new Array(2);
                zulu[0] = golf;
                zulu[1] = oscar;
                mike = function() {
                    mike = _closure3_slot4;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    entity = function() {
                        mike = _closure3_slot4;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    return entity;
                };
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            return entity;
        };
        mike = mike.bind(zulu)(entity);
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useLockedWebView
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 2;
        zulu = verify[zulu];
        tango = undefined;
        oscar = report.bind(tango)(zulu);
        report = oscar.useSharedValue;
        zulu = false;
        zulu = report.bind(oscar)(zulu);
        var _closure2_slot1 = zulu;
        oscar = _closure1_slot4;
        report = oscar.useContext;
        options = _closure1_slot1;
        mike = 3;
        mike = verify[mike];
        mike = options.bind(tango)(mike);
        mike = report.bind(oscar)(mike);
        mike = mike.useActivityWebViewLock;
        mike = mike.bind(tango)();
        var _closure2_slot2 = mike;
        report = oscar.useEffect;
        tango = new Array(3);
        tango[0] = zulu;
        tango[1] = golf;
        tango[2] = mike;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = _closure2_slot0;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 4;
                zulu = zulu[entity];
                entity = undefined;
                zulu = report.bind(entity)(zulu);
                zulu = zulu.TransitionStates;
                zulu = zulu.YEETED;
                if(!(tango !== zulu)) { _fun00014_ip = 55; continue _fun00013 }
 48:
                zulu = _closure2_slot2;
                if(zulu) { _fun00014_ip = 73; continue _fun00013 }
 55:
                report = _closure2_slot1;
                tango = report.set;
                zulu = false;
                zulu = tango.bind(report)(zulu);
                _fun00014_ip = 89; continue _fun00013;
 73:
                tango = _closure2_slot1;
                zulu = tango.set;
                mike = true;
                mike = zulu.bind(tango)(mike);
 89:
                return entity;
            }
        };
        entity = report.bind(oscar)(entity, tango);
        entity = {};
        entity['shown'] = zulu;
        entity['renderWebView'] = mike;
        return entity;
    };
    zulu['useLockedWebView'] = mike;
    return entity;
})();