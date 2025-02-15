// app/uikit-native/HomeIndicator.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun73370: for(var _fun73370_ip = 0; ; ) switch(_fun73370_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun73370_ip = 51; continue _fun73370 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun73370_ip = 92; continue _fun73370;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun73370_ip = 71; continue _fun73370 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun73371: for(var _fun73371_ip = 0; ; ) switch(_fun73371_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun73371_ip = 76; continue _fun73371;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: createStackEntry
        mike = argFoo;
        entity = {};
        zulu = mike.prefersHidden;
        entity['prefersHidden'] = zulu;
        mike = mike.prefersDeferringSystemGestures;
        entity['prefersDeferringSystemGestures'] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    report = golf[mike];
    mike = argCorge;
    report = mike.bind(entity)(report);
    mike = 6;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.NativeModules;
    var _closure1_slot8 = mike;
    mike = 7;
    mike = golf[mike];
    verify = oscar.bind(entity)(mike);
    options = verify.create;
    mike = function() {
        entity = {};
        mike = false;
        entity['autoHideHomeIndicator'] = mike;
        return entity;
    };
    mike = options.bind(verify)(mike);
    var _closure1_slot9 = mike;
    report = report.Component;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: HomeIndicator
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot10;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = null;
            entity['_stackEntry'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        zulu = _closure1_slot7;
        tango = undefined;
        mike = argFoo;
        mike = zulu.bind(tango)(report, mike);
        zulu = _closure1_slot4;
        entity = {};
        mike = 'componentDidMount';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            tango = _closure2_slot0;
            zulu = tango.pushStackEntry;
            entity = mike.props;
            entity = zulu.bind(tango)(entity);
            mike['_stackEntry'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'componentDidUpdate';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            report = _closure2_slot0;
            tango = report.replaceStackEntry;
            zulu = mike._stackEntry;
            entity = mike.props;
            entity = tango.bind(report)(zulu, entity);
            mike['_stackEntry'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'componentWillUnmount';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            tango = _closure2_slot0;
            zulu = tango.popStackEntry;
            entity = mike._stackEntry;
            entity = zulu.bind(tango)(entity);
            entity = null;
            mike['_stackEntry'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'render';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = null;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        oscar = {};
        entity = 'pushStackEntry';
        oscar['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot12;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            zulu = _closure2_slot0;
            tango = zulu._propsStack;
            mike = tango.push;
            mike = mike.bind(tango)(entity);
            mike = zulu._updatePropsStack;
            mike = mike.bind(zulu)();
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(4);
        entity[0] = oscar;
        oscar = {};
        options = 'popStackEntry';
        oscar['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun73383: for(var _fun73383_ip = 0; ; ) switch(_fun73383_ip) {
 0:
                tango = argFoo;
                entity = null;
                mike = entity != tango;
                entity = -1;
                report = entity;
                if(!mike) { _fun73383_ip = 44; continue _fun73383 }
 21:
                mike = _closure2_slot0;
                zulu = mike._propsStack;
                mike = zulu.indexOf;
                report = mike.bind(zulu)(tango);
 44:
                if(!(entity !== report)) { _fun73383_ip = 86; continue _fun73383 }
 48:
                mike = _closure2_slot0;
                tango = mike._propsStack;
                zulu = tango.splice;
                entity = 1;
                entity = zulu.bind(tango)(report, entity);
                entity = mike._updatePropsStack;
                entity = entity.bind(mike)();
 86:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = options;
        entity[1] = oscar;
        oscar = {};
        options = 'replaceStackEntry';
        oscar['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun73384: for(var _fun73384_ip = 0; ; ) switch(_fun73384_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot12;
                mike = undefined;
                entity = argBar;
                entity = zulu.bind(mike)(entity);
                mike = null;
                tango = mike != oscar;
                mike = -1;
                zulu = mike;
                if(!tango) { _fun73384_ip = 61; continue _fun73384 }
 38:
                tango = _closure2_slot0;
                report = tango._propsStack;
                tango = report.indexOf;
                zulu = tango.bind(report)(oscar);
 61:
                if(!(mike !== zulu)) { _fun73384_ip = 82; continue _fun73384 }
 65:
                mike = _closure2_slot0;
                mike = mike._propsStack;
                mike[zulu] = entity;
 82:
                zulu = _closure2_slot0;
                mike = zulu._updatePropsStack;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        oscar['value'] = options;
        entity[2] = oscar;
        oscar = {};
        options = '_updatePropsStack';
        oscar['key'] = options;
        golf = function() { // Original name: value
            mike = global;
            report = mike.clearImmediate;
            zulu = _closure2_slot0;
            tango = zulu._updateImmediate;
            entity = undefined;
            tango = report.bind(entity)(tango);
            tango = mike.setImmediate;
            mike = function() {
                _fun73386: for(var _fun73386_ip = 0; ; ) switch(_fun73386_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity._propsStack;
                    entity = entity._propsStack;
                    zulu = entity.length;
                    entity = 1;
                    entity = zulu - entity;
                    zulu = mike[entity];
                    entity = null;
                    if(!(entity == zulu)) { _fun73386_ip = 45; continue _fun73386 }
 43:
                    zulu = {};
 45:
                    report = zulu.prefersHidden;
                    entity = undefined;
                    mike = entity !== report;
                    if(!mike) { _fun73386_ip = 63; continue _fun73386 }
 60:
                    mike = report;
 63:
                    var _closure4_slot0 = mike;
                    zulu = zulu.prefersDeferringSystemGestures;
                    oscar = entity !== zulu;
                    if(!oscar) { _fun73386_ip = 83; continue _fun73386 }
 80:
                    oscar = zulu;
 83:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    options = 8;
                    options = golf[options];
                    verify = report.bind(entity)(options);
                    options = verify.batchUpdates;
                    tango = function() {
                        zulu = _closure1_slot9;
                        mike = zulu.setState;
                        entity = {};
                        tango = _closure4_slot0;
                        entity['autoHideHomeIndicator'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = options.bind(verify)(tango);
                    tango = 9;
                    tango = golf[tango];
                    report = report.bind(entity)(tango);
                    tango = report.isAndroid;
                    tango = tango.bind(report)();
                    if(tango) { _fun73386_ip = 205; continue _fun73386 }
 148:
                    tango = _closure1_slot8;
                    tango = tango.DCDHomeIndicator;
                    if(!tango) { _fun73386_ip = 241; continue _fun73386 }
 161:
                    tango = _closure1_slot8;
                    golf = tango.DCDHomeIndicator;
                    report = golf.setPrefersAutoHidden;
                    report = report.bind(golf)(mike);
                    report = tango.DCDHomeIndicator;
                    tango = report.setPrefersDeferringSystemGestures;
                    tango = tango.bind(report)(oscar);
                    _fun73386_ip = 241; continue _fun73386;
 205:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 10;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.setNavigationBarVisible;
                    mike = !mike;
                    mike = zulu.bind(tango)(mike);
 241:
                    return entity;
                }
            };
            mike = tango.bind(entity)(mike);
            zulu['_updateImmediate'] = mike;
            return entity;
        };
        oscar['value'] = golf;
        entity[3] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    tango = tango.bind(entity)(report);
    report = {'prefersHidden': false, 'prefersDeferringSystemGestures': false};
    tango['defaultProps'] = report;
    report = new Array(0);
    tango['_propsStack'] = report;
    report = null;
    tango['_updateImmediate'] = report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/HomeIndicator.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['useHomeIndicatorStore'] = mike;
    return entity;
})();