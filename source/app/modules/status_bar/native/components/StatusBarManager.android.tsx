// app/modules/status_bar/native/components/StatusBarManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusBar;
    var _closure1_slot4 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: StatusBarManager
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = new Array(0);
            zulu['propsStack'] = mike;
            mike = null;
            zulu['updateImmediate'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'pushStackEntry';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            mike = argFoo;
            zulu = this;
            entity = {};
            tango = mike.hidden;
            entity['hidden'] = tango;
            mike = mike.barStyle;
            entity['barStyle'] = mike;
            tango = zulu.propsStack;
            mike = tango.push;
            mike = mike.bind(tango)(entity);
            mike = zulu.updatePropsStack;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'popStackEntry';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun73355: for(var _fun73355_ip = 0; ; ) switch(_fun73355_ip) {
 0:
                oscar = argFoo;
                mike = this;
                entity = null;
                zulu = entity != oscar;
                entity = -1;
                report = entity;
                if(!zulu) { _fun73355_ip = 40; continue _fun73355 }
 24:
                tango = mike.propsStack;
                zulu = tango.indexOf;
                report = zulu.bind(tango)(oscar);
 40:
                if(!(entity !== report)) { _fun73355_ip = 75; continue _fun73355 }
 44:
                tango = mike.propsStack;
                zulu = tango.splice;
                entity = 1;
                entity = zulu.bind(tango)(report, entity);
                entity = mike.updatePropsStack;
                entity = entity.bind(mike)();
 75:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'replaceStackEntry';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun73356: for(var _fun73356_ip = 0; ; ) switch(_fun73356_ip) {
 0:
                golf = argFoo;
                mike = argBar;
                zulu = this;
                entity = {};
                tango = mike.hidden;
                entity['hidden'] = tango;
                mike = mike.barStyle;
                entity['barStyle'] = mike;
                mike = null;
                report = mike != golf;
                mike = -1;
                tango = mike;
                if(!report) { _fun73356_ip = 67; continue _fun73356 }
 51:
                oscar = zulu.propsStack;
                report = oscar.indexOf;
                tango = report.bind(oscar)(golf);
 67:
                if(!(mike !== tango)) { _fun73356_ip = 81; continue _fun73356 }
 71:
                mike = zulu.propsStack;
                mike[tango] = entity;
 81:
                mike = zulu.updatePropsStack;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'updatePropsStack';
        entity['key'] = oscar;
        report = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            tango = global;
            oscar = tango.clearImmediate;
            report = zulu.updateImmediate;
            entity = undefined;
            report = oscar.bind(entity)(report);
            tango = tango.setImmediate;
            mike = function() {
                tango = _closure1_slot0;
                report = _closure1_slot1;
                entity = 3;
                mike = report[entity];
                entity = undefined;
                golf = tango.bind(entity)(mike);
                oscar = golf.merge;
                mike = new Array(1);
                options = {'hidden': false, 'barStyle': 'default'};
                mike[0] = options;
                options = _closure3_slot0;
                yankee = options.propsStack;
                offset = 1;
                romeo = mike;
                options = arraySpread(romeo, yankee, offset);
                romeo = oscar;
                yankee = mike;
                offset = golf;
                mike = apply(romeo, yankee, offset);
                golf = mike.barStyle;
                mike = mike.hidden;
                oscar = _closure1_slot4;
                zulu = oscar.setBarStyle;
                zulu = zulu.bind(oscar)(golf);
                zulu = 4;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.setStatusBarVisible;
                mike = !mike;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = tango.bind(entity)(mike);
            zulu['updateImmediate'] = mike;
            return entity;
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/status_bar/native/components/StatusBarManager.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();