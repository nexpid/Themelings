// app/modules/polls/native/useFocusHelper.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    oscar = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    oscar = golf.bind(entity)(tango);
    var _closure1_slot2 = oscar;
    tango = 1;
    tango = report[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    golf = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = function() { // Original name: FocusHelperState
        zulu = this;
        tango = _closure1_slot3;
        mike = _closure1_slot7;
        entity = undefined;
        mike = tango.bind(entity)(zulu, mike);
        mike = {};
        zulu['refsByKey'] = mike;
        mike = new Array(0);
        zulu['keyOrder'] = mike;
        return entity;
    };
    var _closure1_slot7 = tango;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = function() {
        tango = _closure1_slot2;
        zulu = function() { // Original name: FocusHelperImpl
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            tango = _closure1_slot5;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            verify = report;
            tango = new verify[tango](options);
            tango = tango instanceof Object ? tango : report;
            zulu['validState'] = tango;
            tango = function() {
                _fun119412: for(var _fun119412_ip = 0; ; ) switch(_fun119412_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.validState;
                    report = entity.refsByKey;
                    tango = entity.keyOrder;
                    foxtrot = report;
                    entity = undefined;
                    verify = true;
                    zulu = null;
                    options = undefined;
                    golf = undefined;
                    for(offset in foxtrot)
 46:
                    {
                        golf = undefined;
 57:
                        kilo = offset;
                        sizing = report[kilo];
                        output = zulu == sizing;
                        oscar = undefined;
                        if(output) { _fun119412_ip = 103; continue _fun119412 }
 73:
                        output = sizing.current;
                        sizing = zulu == output;
                        options = output;
                        oscar = undefined;
                        if(sizing) { _fun119412_ip = 103; continue _fun119412 }
 90:
                        sizing = output.isFocused;
                        oscar = sizing.bind(output)();
                        options = output;
 103:
                        golf = kilo;
                        if(verify !== oscar) { _fun119412_ip = 46; continue _fun119412 }
                    }
 110:
                    if(!(zulu != golf)) { _fun119412_ip = 246; continue _fun119412 }
 117:
                    oscar = tango.indexOf;
                    golf = oscar.bind(tango)(golf);
                    oscar = -1;
                    if(!(oscar !== golf)) { _fun119412_ip = 218; continue _fun119412 }
 137:
                    oscar = tango.length;
                    tango = 1;
                    oscar = oscar - tango;
                    if(!(!(golf >= oscar))) { _fun119412_ip = 218; continue _fun119412 }
 153:
                    oscar = _closure3_slot0;
                    oscar = oscar.validState;
                    oscar = oscar.keyOrder;
                    tango = golf + tango;
                    tango = oscar[tango];
                    oscar = report[tango];
                    tango = zulu == oscar;
                    report = oscar;
                    if(tango) { _fun119412_ip = 203; continue _fun119412 }
 191:
                    oscar = oscar.current;
                    tango = zulu == oscar;
                    report = oscar;
 203:
                    if(tango) { _fun119412_ip = 246; continue _fun119412 }
 206:
                    tango = report.focus;
                    tango = tango.bind(report)();
                    _fun119412_ip = 246; continue _fun119412;
 218:
                    tango = _closure3_slot0;
                    tango = tango.onAddAnswer;
                    if(!(zulu != tango)) { _fun119412_ip = 246; continue _fun119412 }
 232:
                    zulu = tango.call;
                    mike = _closure3_slot0;
                    mike = zulu.bind(tango)(mike);
 246:
                    return entity;
                }
            };
            zulu['focusNext'] = tango;
            mike = function(argFoo) {
                _fun119413: for(var _fun119413_ip = 0; ; ) switch(_fun119413_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.validState;
                    mike = entity.refsByKey;
                    entity = argFoo;
                    zulu = mike[entity];
                    tango = null;
                    entity = tango == zulu;
                    mike = zulu;
                    if(entity) { _fun119413_ip = 50; continue _fun119413 }
 38:
                    zulu = zulu.current;
                    entity = tango == zulu;
                    mike = zulu;
 50:
                    if(entity) { _fun119413_ip = 63; continue _fun119413 }
 53:
                    entity = mike.focus;
                    entity = entity.bind(mike)();
 63:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['focus'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'restartState';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = _closure1_slot5;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            zulu = mike;
            entity = new zulu[entity](mike);
            mike = entity instanceof Object ? entity : mike;
            entity = this;
            entity['pendingState'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'commitState';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun119415: for(var _fun119415_ip = 0; ; ) switch(_fun119415_ip) {
 0:
                mike = this;
                entity = mike.pendingState;
                zulu = null;
                if(!(zulu != entity)) { _fun119415_ip = 21; continue _fun119415 }
 15:
                mike['validState'] = entity;
 21:
                entity = undefined;
                mike['pendingState'] = entity;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'refWithKey';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun119416: for(var _fun119416_ip = 0; ; ) switch(_fun119416_ip) {
 0:
                tango = argFoo;
                entity = this;
                zulu = entity.pendingState;
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 3;
                entity = oscar[entity];
                options = undefined;
                golf = report.bind(options)(entity);
                report = null;
                oscar = report != zulu;
                entity = 'Called refWithKey without a valid state';
                entity = golf.bind(options)(oscar, entity);
                oscar = zulu.keyOrder;
                entity = oscar.push;
                entity = entity.bind(oscar)(tango);
                entity = zulu.refsByKey;
                entity = entity[tango];
                if(!(report == entity)) { _fun119416_ip = 111; continue _fun119416 }
 85:
                report = _closure1_slot4;
                mike = report.createRef;
                mike = mike.bind(report)();
                zulu = zulu.refsByKey;
                zulu[tango] = mike;
                return mike;
 111:
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot6 = tango;
    tango = 5;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/native/useFocusHelper.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useFocusHelper
        _fun119417: for(var _fun119417_ip = 0; ; ) switch(_fun119417_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun119417_ip = 13; continue _fun119417 }
 11:
            entity = {};
 13:
            entity = entity.onAddAnswer;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = report;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 4;
            entity = oscar[entity];
            tango = tango.bind(report)(entity);
            entity = function() {
                entity = _closure1_slot6;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                zulu = mike;
                entity = new zulu[entity](mike);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            entity = tango.bind(report)(entity);
            _closure2_slot1 = entity;
            tango = entity.restartState;
            tango = tango.bind(entity)();
            tango = _closure1_slot4;
            zulu = tango.useEffect;
            mike = function() {
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                zulu['onAddAnswer'] = mike;
                mike = _closure2_slot1;
                entity = mike.commitState;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();