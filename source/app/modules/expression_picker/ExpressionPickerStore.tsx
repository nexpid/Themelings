// app/modules/expression_picker/ExpressionPickerStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    mike = global;
    golf = mike.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    report = report.ExpressionPickerViewType;
    var _closure1_slot2 = report;
    oscar = mike.Object;
    report = oscar.freeze;
    mike = {'activeView': null, 'lastActiveView': null, 'activeViewType': null, 'searchQuery': '', 'isSearchSuggestion': false};
    golf = 1;
    offset = verify[golf];
    golf = argBaz;
    offset = golf.bind(entity)(offset);
    golf = 'uid_';
    golf = offset.bind(entity)(golf);
    mike['pickerId'] = golf;
    mike = report.bind(oscar)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = verify[mike];
    report = options.bind(entity)(mike);
    mike = report.createWithEqualityFn;
    report = mike.bind(report)();
    mike = 3;
    mike = verify[mike];
    offset = options.bind(entity)(mike);
    golf = offset.persist;
    oscar = {};
    mike = 'expression-picker-last-active-view';
    oscar['name'] = mike;
    mike = function(argFoo) { // Original name: partialize
        entity = {};
        mike = argFoo;
        mike = mike.lastActiveView;
        entity['lastActiveView'] = mike;
        return entity;
    };
    oscar['partialize'] = mike;
    mike = function() {
        entity = _closure1_slot3;
        return entity;
    };
    mike = golf.bind(offset)(mike, oscar);
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    oscar = function(argFoo, argBar) { // Original name: openExpressionPicker
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = {};
            report = _closure2_slot0;
            entity['activeView'] = report;
            tango = _closure2_slot1;
            entity['activeViewType'] = tango;
            tango = zulu.getState;
            tango = tango.bind(zulu)();
            tango = tango.activeView;
            entity['lastActiveView'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot5 = oscar;
    report = function(argFoo) { // Original name: closeExpressionPicker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot4;
            entity = tango.getState;
            tango = entity.bind(tango)();
            var _closure2_slot0 = tango;
            entity = undefined;
            report = entity !== golf;
            if(!report) { _fun00002_ip = 45; continue _fun00001 }
 35:
            oscar = tango.activeViewType;
            report = golf !== oscar;
 45:
            if(report) { _fun00002_ip = 98; continue _fun00001 }
 48:
            report = tango.activeView;
            tango = null;
            if(!(tango !== report)) { _fun00002_ip = 98; continue _fun00001 }
 60:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = {'activeView': null, 'activeViewType': null};
                tango = _closure2_slot0;
                tango = tango.activeView;
                entity['lastActiveView'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 98:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/expression_picker/ExpressionPickerStore.tsx';
    golf = options.bind(verify)(golf);
    zulu['openExpressionPicker'] = oscar;
    zulu['closeExpressionPicker'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot4;
            mike = zulu.getState;
            zulu = mike.bind(zulu)();
            tango = zulu.activeView;
            mike = null;
            if(!(mike != tango)) { _fun00004_ip = 41; continue _fun00003 }
 29:
            report = _closure1_slot6;
            tango = undefined;
            tango = report.bind(tango)();
            _fun00004_ip = 76; continue _fun00003;
 41:
            tango = _closure1_slot5;
            zulu = zulu.lastActiveView;
            if(!(mike == zulu)) { _fun00004_ip = 65; continue _fun00003 }
 55:
            entity = _closure1_slot2;
            zulu = entity.EMOJI;
 65:
            mike = undefined;
            entity = argFoo;
            entity = tango.bind(mike)(zulu, entity);
 76:
            entity = undefined;
            return entity;
        }
    };
    zulu['toggleMultiExpressionPicker'] = report;
    report = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot4;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.activeView;
            if(!(mike !== report)) { _fun00006_ip = 47; continue _fun00005 }
 30:
            tango = _closure1_slot5;
            zulu = undefined;
            mike = argBar;
            mike = tango.bind(zulu)(report, mike);
            _fun00006_ip = 57; continue _fun00005;
 47:
            mike = _closure1_slot6;
            entity = undefined;
            entity = mike.bind(entity)();
 57:
            entity = undefined;
            return entity;
        }
    };
    zulu['toggleExpressionPicker'] = report;
    report = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = {};
            tango = _closure2_slot0;
            entity['activeView'] = tango;
            tango = zulu.getState;
            tango = tango.bind(zulu)();
            tango = tango.activeView;
            entity['lastActiveView'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setExpressionPickerView'] = report;
    tango = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zulu === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            zulu = false;
 20:
            var _closure2_slot1 = zulu;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = {};
                report = _closure2_slot0;
                entity['searchQuery'] = report;
                tango = _closure2_slot1;
                entity['isSearchSuggestion'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setSearchQuery'] = tango;
    zulu['useExpressionPickerStore'] = mike;
    return entity;
})();