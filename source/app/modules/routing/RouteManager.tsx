// app/modules/routing/RouteManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun110149: for(var _fun110149_ip = 0; ; ) switch(_fun110149_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun110149_ip = 46; continue _fun110149 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun110149_ip = 55; continue _fun110149 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun110149_ip = 345; continue _fun110149 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun110149_ip = 323; continue _fun110149 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun110149_ip = 283; continue _fun110149 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun110149_ip = 270; continue _fun110149 }
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
            if(!golf) { _fun110149_ip = 163; continue _fun110149 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun110149_ip = 179; continue _fun110149 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun110149_ip = 249; continue _fun110149 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun110149_ip = 249; continue _fun110149 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun110149_ip = 234; continue _fun110149 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun110149_ip = 247; continue _fun110149 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun110149_ip = 265; continue _fun110149;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun110149_ip = 283; continue _fun110149;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun110149_ip = 323; continue _fun110149 }
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
            if(!tango) { _fun110149_ip = 330; continue _fun110149 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun110150: for(var _fun110150_ip = 0; ; ) switch(_fun110150_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun110150_ip = 56; continue _fun110150 }
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
                    _fun110150_ip = 67; continue _fun110150;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun110151: for(var _fun110151_ip = 0; ; ) switch(_fun110151_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun110151_ip = 23; continue _fun110151 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun110151_ip = 33; continue _fun110151 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun110151_ip = 70; continue _fun110151 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun110151_ip = 55; continue _fun110151 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: RouteManager
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = global;
            report = tango.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            verify = oscar;
            report = new verify[report](options);
            report = report instanceof Object ? report : oscar;
            zulu['rewrites'] = report;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            verify = report;
            tango = new verify[tango](options);
            tango = tango instanceof Object ? tango : report;
            zulu['listeners'] = tango;
            tango = 0;
            zulu['routeChangeCount'] = tango;
            tango = -1;
            zulu['timer'] = tango;
            tango = false;
            zulu['connected'] = tango;
            tango = function() {
                _fun110154: for(var _fun110154_ip = 0; ; ) switch(_fun110154_ip) {
 0:
                    zulu = _closure1_slot4;
                    mike = zulu.isConnected;
                    report = mike.bind(zulu)();
                    zulu = report;
                    if(!zulu) { _fun110154_ip = 39; continue _fun110154 }
 23:
                    mike = _closure3_slot0;
                    mike = mike.connected;
                    zulu = !mike;
 39:
                    tango = _closure3_slot0;
                    tango['connected'] = report;
                    if(!zulu) { _fun110154_ip = 122; continue _fun110154 }
 55:
                    tango = _closure3_slot0;
                    mike = 0;
                    tango['routeChangeCount'] = mike;
                    zulu = tango.executeRouteRewrites;
                    report = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    entity = mike.getHistory;
                    entity = entity.bind(mike)();
                    mike = entity.location;
                    entity = 'REPLACE';
                    entity = zulu.bind(tango)(mike, entity);
 122:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleConnectionChange'] = tango;
            tango = function(argFoo, argBar) {
                _fun110155: for(var _fun110155_ip = 0; ; ) switch(_fun110155_ip) {
 0:
                    yankee = argFoo;
                    offset = argBar;
                    tango = yankee;
                    report = offset;
                    entity = undefined;
                    oscar = undefined;
                    golf = undefined;
                    options = undefined;
                    verify = _closure3_slot0;
                    zulu = verify.executeRouteRewrites;
                    zulu = zulu.bind(verify)(yankee, offset);
                    if(zulu) { _fun110155_ip = 278; continue _fun110155 }
 45:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot1;
                    verify = 6;
                    verify = yankee[verify];
                    yankee = offset.bind(entity)(verify);
                    offset = yankee.convertRouteToNavigation;
                    verify = tango;
                    verify = offset.bind(yankee)(verify);
                    if(verify) { _fun110155_ip = 131; continue _fun110155 }
 85:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot1;
                    verify = 5;
                    verify = yankee[verify];
                    yankee = offset.bind(entity)(verify);
                    offset = yankee.replaceWith;
                    verify = _closure1_slot6;
                    verify = verify.ME;
                    verify = offset.bind(yankee)(verify);
                    _fun110155_ip = 278; continue _fun110155;
 131:
                    offset = _closure1_slot5;
                    verify = offset.getState;
                    yankee = verify.bind(offset)();
                    offset = yankee.basePath;
                    verify = tango;
                    verify = verify.pathname;
                    if(!(offset !== verify)) { _fun110155_ip = 184; continue _fun110155 }
 164:
                    offset = yankee.resetPath;
                    verify = tango;
                    verify = verify.pathname;
                    verify = offset.bind(yankee)(verify);
 184:
                    verify = _closure1_slot7;
                    zulu = _closure3_slot0;
                    zulu = zulu.listeners;
                    zulu = verify.bind(entity)(zulu);
                    golf = zulu;
                    zulu = zulu.bind(entity)();
                    oscar = zulu;
                    zulu = zulu.done;
                    if(zulu) { _fun110155_ip = 266; continue _fun110155 }
 221:
                    zulu = oscar;
                    options = zulu.value;
 229: // try_start_0
                    offset = options;
                    verify = tango;
                    zulu = report;
                    zulu = offset.bind(entity)(verify, zulu);
 244: // try_end0
                    _fun110155_ip = 248; continue _fun110155;
 246: // catch_target0
                    CatchBlockStart(arg_register=2);
 248:
                    zulu = golf;
                    zulu = zulu.bind(entity)();
                    oscar = zulu;
                    zulu = zulu.done;
                    if(!zulu) { _fun110155_ip = 221; continue _fun110155 }
 266:
                    zulu = _closure3_slot0;
                    mike = 0;
                    zulu['routeChangeCount'] = mike;
 278:
                    return entity;
                }
            };
            zulu['handleRouteChange'] = tango;
            tango = function(argFoo) {
                _fun110156: for(var _fun110156_ip = 0; ; ) switch(_fun110156_ip) {
 0:
                    entity = argFoo;
                    mike = entity.path;
                    entity = null;
                    if(!(entity == mike)) { _fun110156_ip = 49; continue _fun110156 }
 15:
                    if(!(entity == mike)) { _fun110156_ip = 104; continue _fun110156 }
 19:
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure3_slot0;
                    mike = entity.timer;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    _fun110156_ip = 104; continue _fun110156;
 49:
                    entity = global;
                    tango = entity.clearTimeout;
                    mike = _closure3_slot0;
                    zulu = mike.timer;
                    report = undefined;
                    zulu = tango.bind(report)(zulu);
                    tango = entity.setTimeout;
                    zulu = mike.flushRoute;
                    entity = 200;
                    entity = tango.bind(report)(zulu, entity);
                    mike['timer'] = entity;
 104:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleKeybindRouteChange'] = tango;
            mike = function() {
                _fun110157: for(var _fun110157_ip = 0; ; ) switch(_fun110157_ip) {
 0:
                    entity = global;
                    zulu = entity.clearTimeout;
                    entity = _closure3_slot0;
                    mike = entity.timer;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = _closure1_slot5;
                    mike = tango.getState;
                    mike = mike.bind(tango)();
                    report = mike.path;
                    tango = null;
                    if(!(tango != report)) { _fun110157_ip = 94; continue _fun110157 }
 57:
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    zulu = 5;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.transitionTo;
                    mike = mike.path;
                    mike = zulu.bind(tango)(mike);
 94:
                    return entity;
                }
            };
            zulu['flushRoute'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = mike.cleanup;
            entity = entity.bind(mike)();
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 5;
            golf = oscar[tango];
            entity = undefined;
            options = report.bind(entity)(golf);
            golf = options.getHistory;
            verify = golf.bind(options)();
            options = verify.listen;
            golf = mike.handleRouteChange;
            golf = options.bind(verify)(golf);
            mike['unlistenHistory'] = golf;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.getHistory;
            tango = tango.bind(report)();
            tango = tango.location;
            golf = tango.pathname;
            oscar = _closure1_slot5;
            tango = oscar.getState;
            report = tango.bind(oscar)();
            tango = report.resetPath;
            tango = tango.bind(report)(golf);
            report = oscar.subscribe;
            tango = mike.handleKeybindRouteChange;
            tango = report.bind(oscar)(tango);
            mike['unlistenKeyboardChange'] = tango;
            tango = _closure1_slot4;
            zulu = tango.addChangeListener;
            mike = mike.handleConnectionChange;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'executeRouteRewrites';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun110159: for(var _fun110159_ip = 0; ; ) switch(_fun110159_ip) {
 0:
                yankee = argFoo;
                verify = argBar;
                entity = this;
                zulu = entity.routeChangeCount;
                mike = 1;
                mike = zulu + mike;
                entity['routeChangeCount'] = mike;
                zulu = entity.routeChangeCount;
                mike = 10;
                if(!(!(zulu < mike))) { _fun110159_ip = 77; continue _fun110159 }
 41:
                mike = global;
                tango = mike.Error;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                backup = 'RouteManager: Something has gone horribly wrong with rewrites';
                kilo = zulu;
                mike = new kilo[tango](backup, foxtrot);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 77:
                zulu = _closure1_slot7;
                entity = entity.rewrites;
                tango = undefined;
                options = zulu.bind(tango)(entity);
                zulu = options.bind(tango)();
                entity = zulu.done;
                report = 5;
                golf = null;
                oscar = zulu;
                if(entity) { _fun110159_ip = 295; continue _fun110159 }
 120:
                entity = oscar.value;
                offset = _closure1_slot0;
                zulu = _closure1_slot1;
                zulu = zulu[report];
                offset = offset.bind(tango)(zulu);
                zulu = offset.getHistory;
                zulu = zulu.bind(offset)();
                zulu = zulu.location;
                offset = zulu.pathname;
                entity = entity.bind(tango)(yankee, verify);
                if(!(golf == entity)) { _fun110159_ip = 190; continue _fun110159 }
 173:
                romeo = options.bind(tango)();
                zulu = romeo.done;
                oscar = romeo;
                if(zulu) { _fun110159_ip = 295; continue _fun110159 }
 188:
                _fun110159_ip = 120; continue _fun110159;
 190:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                oscar = 7;
                oscar = mike[oscar];
                options = zulu.bind(tango)(oscar);
                golf = options.addBreadcrumb;
                oscar = {};
                verify = 'RouteManager.handleRouteChange: A route rewrite is replacing the current route';
                oscar['message'] = verify;
                verify = {};
                yankee = entity.path;
                verify['replacePath'] = yankee;
                verify['previousPath'] = offset;
                oscar['data'] = verify;
                oscar = golf.bind(options)(oscar);
                mike = mike[report];
                tango = zulu.bind(tango)(mike);
                zulu = tango.replaceWith;
                mike = entity.path;
                entity = entity.state;
                entity = zulu.bind(tango)(mike, entity);
                entity = true;
                return entity;
 295:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'cleanup';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun110160: for(var _fun110160_ip = 0; ; ) switch(_fun110160_ip) {
 0:
                mike = this;
                tango = mike.unlistenHistory;
                zulu = null;
                if(!(zulu != tango)) { _fun110160_ip = 25; continue _fun110160 }
 15:
                entity = tango.call;
                entity = entity.bind(tango)(mike);
 25:
                entity = undefined;
                mike['unlistenHistory'] = entity;
                tango = mike.unlistenKeyboardChange;
                if(!(zulu != tango)) { _fun110160_ip = 53; continue _fun110160 }
 43:
                zulu = tango.call;
                zulu = zulu.bind(tango)(mike);
 53:
                mike['unlistenKeyboardChange'] = entity;
                tango = _closure1_slot4;
                zulu = tango.removeChangeListener;
                mike = mike.handleConnectionChange;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'addRouteChangeListener';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun110161: for(var _fun110161_ip = 0; ; ) switch(_fun110161_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = tango;
                report = mike.unlistenHistory;
                zulu = null;
                if(!(zulu != report)) { _fun110161_ip = 80; continue _fun110161 }
 28:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 5;
                zulu = oscar[zulu];
                oscar = undefined;
                report = report.bind(oscar)(zulu);
                zulu = report.getHistory;
                zulu = zulu.bind(report)();
                report = zulu.location;
                zulu = 'REPLACE';
                zulu = tango.bind(oscar)(report, zulu);
 80:
                zulu = mike.listeners;
                mike = zulu.add;
                mike = mike.bind(zulu)(tango);
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.removeRouteChangeListener;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'addRouteRewriter';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun110163: for(var _fun110163_ip = 0; ; ) switch(_fun110163_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = tango;
                zulu = mike.unlistenHistory;
                oscar = null;
                if(!(oscar != zulu)) { _fun110163_ip = 142; continue _fun110163 }
 28:
                offset = _closure1_slot0;
                zulu = _closure1_slot1;
                options = 5;
                verify = zulu[options];
                golf = undefined;
                yankee = offset.bind(golf)(verify);
                verify = yankee.getHistory;
                verify = verify.bind(yankee)();
                verify = verify.location;
                zulu = zulu[options];
                offset = offset.bind(golf)(zulu);
                zulu = offset.getHistory;
                zulu = zulu.bind(offset)();
                zulu = zulu.action;
                zulu = tango.bind(golf)(verify, zulu);
                if(!(oscar != zulu)) { _fun110163_ip = 142; continue _fun110163 }
 102:
                oscar = _closure1_slot0;
                report = _closure1_slot1;
                report = report[options];
                golf = oscar.bind(golf)(report);
                oscar = golf.replaceWith;
                report = zulu.path;
                zulu = zulu.state;
                zulu = oscar.bind(golf)(report, zulu);
 142:
                zulu = mike.rewrites;
                mike = zulu.add;
                mike = mike.bind(zulu)(tango);
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.removeRouteRewriter;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'removeRouteChangeListener';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.listeners;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'removeRouteRewriter';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.rewrites;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getHistory';
        entity['key'] = oscar;
        report = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getHistory;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    report = Object.create(tango, {constructor: {value: mike}});
    foxtrot = report;
    tango = new foxtrot[mike](romeo);
    tango = tango instanceof Object ? tango : report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/routing/RouteManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['RouteManager'] = mike;
    return entity;
})();