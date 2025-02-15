// discord_common/js/packages/flux/connectStores.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    entity = function(argFoo) { // Original name: getDisplayName
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = zulu.displayName;
            entity = null;
            if(!(entity == mike)) { _fun00006_ip = 19; continue _fun00005 }
 14:
            mike = zulu.name;
 19:
            zulu = entity != mike;
            entity = '<Unknown>';
            if(!zulu) { _fun00006_ip = 35; continue _fun00005 }
 32:
            entity = mike;
 35:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: memoizeGetStateFromStores
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = null;
        var _closure2_slot1 = entity;
        var _closure2_slot2 = entity;
        zulu = function(argFoo) { // Original name: getCachedResult
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                entity = _closure2_slot1;
                report = null;
                if(!(report != entity)) { _fun00008_ip = 62; continue _fun00007 }
 16:
                entity = _closure2_slot2;
                if(!(report != entity)) { _fun00008_ip = 62; continue _fun00007 }
 24:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 9;
                entity = oscar[entity];
                oscar = undefined;
                tango = tango.bind(oscar)(entity);
                entity = _closure2_slot1;
                entity = tango.bind(oscar)(entity, zulu);
                if(entity) { _fun00008_ip = 138; continue _fun00007 }
 62:
                entity = _closure2_slot1;
                tango = report != entity;
                entity = null;
                if(!tango) { _fun00008_ip = 136; continue _fun00007 }
 75:
                tango = _closure2_slot2;
                tango = report != tango;
                entity = null;
                if(!tango) { _fun00008_ip = 136; continue _fun00007 }
 88:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                golf = undefined;
                oscar = oscar.bind(golf)(tango);
                tango = _closure2_slot1;
                tango = oscar.bind(golf)(tango, zulu);
                entity = null;
                if(!tango) { _fun00008_ip = 136; continue _fun00007 }
 128:
                _closure2_slot1 = zulu;
                entity = _closure2_slot2;
 136:
                _fun00008_ip = 142; continue _fun00007;
 138:
                entity = _closure2_slot2;
 142:
                return entity;
            }
        };
        var _closure2_slot3 = zulu;
        entity = function(argFoo) { // Original name: memoizedFunction
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                entity = _closure2_slot3;
                tango = undefined;
                entity = entity.bind(tango)(report);
                mike = null;
                if(!(mike == entity)) { _fun00010_ip = 43; continue _fun00009 }
 23:
                mike = _closure2_slot0;
                _closure2_slot1 = report;
                mike = mike.bind(tango)(report);
                _closure2_slot2 = mike;
                entity = mike;
 43:
                return entity;
            }
        };
        entity['getCachedResult'] = zulu;
        mike = function() {
            entity = null;
            _closure2_slot1 = entity;
            _closure2_slot2 = entity;
            entity = undefined;
            return entity;
        };
        entity['clear'] = mike;
        return entity;
    };
    var _closure1_slot13 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/connectStores.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: connectStores
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            tango = argBar;
            entity = argBaz;
            zulu = null;
            if(!(zulu != entity)) { _fun00012_ip = 26; continue _fun00011 }
 17:
            entity = entity.forwardRef;
            if(entity) { _fun00012_ip = 41; continue _fun00011 }
 26:
            zulu = function(argFoo, argBar) { // Original name: connectStoresWithoutRef
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = argBar;
                var _closure3_slot1 = mike;
                entity = function(argFoo) {
                    report = argFoo;
                    var _closure4_slot0 = report;
                    mike = _closure1_slot12;
                    tango = undefined;
                    golf = mike.bind(tango)(report);
                    mike = global;
                    mike = mike.HermesInternal;
                    oscar = mike.concat;
                    report = 'FluxContainer(';
                    mike = ')';
                    mike = oscar.bind(report)(golf, mike);
                    var _closure4_slot1 = mike;
                    zulu = _closure1_slot8;
                    zulu = zulu.Component;
                    entity = function(argFoo) {
                        tango = function(argFoo) { // Original name: FluxContainer
                            golf = this;
                            romeo = 0;
                            options = copyRestArgs(romeo);
                            entity = _closure1_slot3;
                            report = _closure5_slot0;
                            oscar = undefined;
                            entity = entity.bind(oscar)(golf, report);
                            zulu = _closure1_slot10;
                            entity = new Array(0);
                            romeo = entity;
                            yankee = options;
                            offset = 0;
                            options = arraySpread(romeo, yankee, offset);
                            entity = zulu.bind(oscar)(golf, report, entity);
                            var _closure6_slot0 = entity;
                            golf = _closure1_slot13;
                            report = _closure3_slot1;
                            report = golf.bind(oscar)(report);
                            entity['memoizedGetStateFromStores'] = report;
                            report = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 8;
                            tango = golf[tango];
                            tango = report.bind(oscar)(tango);
                            report = tango.BatchedStoreListener;
                            romeo = _closure3_slot0;
                            zulu = report.prototype;
                            zulu = Object.create(zulu, {constructor: {value: report}});
                            yankee = function() {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    mike = _closure6_slot0;
                                    tango = mike.memoizedGetStateFromStores;
                                    zulu = tango.getCachedResult;
                                    mike = mike.props;
                                    oscar = zulu.bind(tango)(mike);
                                    mike = null;
                                    mike = mike != oscar;
                                    if(!mike) { _fun00014_ip = 105; continue _fun00013 }
 38:
                                    options = _closure6_slot0;
                                    tango = options.memoizedGetStateFromStores;
                                    zulu = tango.clear;
                                    zulu = zulu.bind(tango)();
                                    tango = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zulu = 9;
                                    zulu = report[zulu];
                                    report = undefined;
                                    tango = tango.bind(report)(zulu);
                                    golf = options.memoizedGetStateFromStores;
                                    zulu = options.props;
                                    zulu = golf.bind(options)(zulu);
                                    mike = tango.bind(report)(zulu, oscar);
 105:
                                    if(mike) { _fun00014_ip = 122; continue _fun00013 }
 108:
                                    mike = _closure6_slot0;
                                    entity = mike.forceUpdate;
                                    entity = entity.bind(mike)();
 122:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtrot = zulu;
                            mike = new foxtrot[report](romeo, yankee, offset);
                            mike = mike instanceof Object ? mike : zulu;
                            entity['listener'] = mike;
                            return entity;
                        };
                        var _closure5_slot0 = tango;
                        report = _closure1_slot7;
                        zulu = undefined;
                        mike = argFoo;
                        mike = report.bind(zulu)(tango, mike);
                        mike = _closure1_slot4;
                        report = {};
                        entity = 'componentDidMount';
                        report['key'] = entity;
                        entity = function() { // Original name: value
                            entity = this;
                            zulu = entity.listener;
                            mike = zulu.attach;
                            entity = _closure4_slot1;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = entity;
                        entity = new Array(3);
                        entity[0] = report;
                        report = {};
                        golf = 'componentWillUnmount';
                        report['key'] = golf;
                        golf = function() { // Original name: value
                            entity = this;
                            zulu = entity.listener;
                            mike = zulu.detach;
                            mike = mike.bind(zulu)();
                            mike = entity.memoizedGetStateFromStores;
                            entity = mike.clear;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = golf;
                        entity[1] = report;
                        report = {};
                        golf = 'render';
                        report['key'] = golf;
                        oscar = function() { // Original name: value
                            report = this;
                            mike = report.memoizedGetStateFromStores;
                            entity = report.props;
                            entity = mike.bind(report)(entity);
                            tango = _closure1_slot9;
                            zulu = _closure4_slot0;
                            mike = {};
                            oscar = report.props;
                            golf = mike;
                            report = copyDataProperties(golf, oscar);
                            golf = mike;
                            oscar = entity;
                            entity = copyDataProperties(golf, oscar);
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        report['value'] = oscar;
                        entity[2] = report;
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
                    };
                    entity = entity.bind(tango)(zulu);
                    entity['displayName'] = mike;
                    return entity;
                };
                return entity;
            };
            entity = undefined;
            entity = zulu.bind(entity)(report, tango);
            _fun00012_ip = 54; continue _fun00011;
 41:
            zulu = function(argFoo, argBar) { // Original name: connectStoresWithRef
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = argBar;
                var _closure3_slot1 = mike;
                entity = function(argFoo) {
                    tango = argFoo;
                    var _closure4_slot0 = tango;
                    mike = _closure1_slot12;
                    options = undefined;
                    golf = mike.bind(options)(tango);
                    mike = global;
                    tango = mike.HermesInternal;
                    oscar = tango.concat;
                    tango = 'FluxContainer(';
                    report = ')';
                    tango = oscar.bind(tango)(golf, report);
                    var _closure4_slot1 = tango;
                    oscar = _closure1_slot8;
                    golf = oscar.Component;
                    zulu = function(argFoo) {
                        tango = function(argFoo) { // Original name: FluxContainer
                            golf = this;
                            romeo = 0;
                            options = copyRestArgs(romeo);
                            entity = _closure1_slot3;
                            report = _closure5_slot0;
                            oscar = undefined;
                            entity = entity.bind(oscar)(golf, report);
                            zulu = _closure1_slot10;
                            entity = new Array(0);
                            romeo = entity;
                            yankee = options;
                            offset = 0;
                            options = arraySpread(romeo, yankee, offset);
                            entity = zulu.bind(oscar)(golf, report, entity);
                            var _closure6_slot0 = entity;
                            golf = _closure1_slot13;
                            report = _closure3_slot1;
                            report = golf.bind(oscar)(report);
                            entity['memoizedGetStateFromStores'] = report;
                            report = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 8;
                            tango = golf[tango];
                            tango = report.bind(oscar)(tango);
                            report = tango.BatchedStoreListener;
                            romeo = _closure3_slot0;
                            zulu = report.prototype;
                            zulu = Object.create(zulu, {constructor: {value: report}});
                            yankee = function() {
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    mike = _closure6_slot0;
                                    tango = mike.memoizedGetStateFromStores;
                                    zulu = tango.getCachedResult;
                                    mike = mike.props;
                                    mike = mike.childProps;
                                    oscar = zulu.bind(tango)(mike);
                                    mike = null;
                                    mike = mike != oscar;
                                    if(!mike) { _fun00016_ip = 117; continue _fun00015 }
 44:
                                    options = _closure6_slot0;
                                    tango = options.memoizedGetStateFromStores;
                                    zulu = tango.clear;
                                    zulu = zulu.bind(tango)();
                                    tango = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zulu = 9;
                                    zulu = report[zulu];
                                    report = undefined;
                                    tango = tango.bind(report)(zulu);
                                    golf = options.memoizedGetStateFromStores;
                                    zulu = options.props;
                                    zulu = zulu.childProps;
                                    zulu = golf.bind(options)(zulu);
                                    mike = tango.bind(report)(zulu, oscar);
 117:
                                    if(mike) { _fun00016_ip = 134; continue _fun00015 }
 120:
                                    mike = _closure6_slot0;
                                    entity = mike.forceUpdate;
                                    entity = entity.bind(mike)();
 134:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            foxtrot = zulu;
                            mike = new foxtrot[report](romeo, yankee, offset);
                            mike = mike instanceof Object ? mike : zulu;
                            entity['listener'] = mike;
                            return entity;
                        };
                        var _closure5_slot0 = tango;
                        report = _closure1_slot7;
                        zulu = undefined;
                        mike = argFoo;
                        mike = report.bind(zulu)(tango, mike);
                        mike = _closure1_slot4;
                        report = {};
                        entity = 'componentDidMount';
                        report['key'] = entity;
                        entity = function() { // Original name: value
                            entity = this;
                            zulu = entity.listener;
                            mike = zulu.attach;
                            entity = _closure4_slot1;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = entity;
                        entity = new Array(3);
                        entity[0] = report;
                        report = {};
                        golf = 'componentWillUnmount';
                        report['key'] = golf;
                        golf = function() { // Original name: value
                            entity = this;
                            zulu = entity.listener;
                            mike = zulu.detach;
                            mike = mike.bind(zulu)();
                            mike = entity.memoizedGetStateFromStores;
                            entity = mike.clear;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        };
                        report['value'] = golf;
                        entity[1] = report;
                        report = {};
                        golf = 'render';
                        report['key'] = golf;
                        oscar = function() { // Original name: value
                            mike = this;
                            entity = mike.props;
                            oscar = entity.forwardedConnectStoresRef;
                            report = entity.childProps;
                            entity = mike.memoizedGetStateFromStores;
                            entity = entity.bind(mike)(report);
                            tango = _closure1_slot9;
                            zulu = _closure4_slot0;
                            mike = {};
                            mike['ref'] = oscar;
                            options = mike;
                            golf = report;
                            report = copyDataProperties(options, golf);
                            options = mike;
                            golf = entity;
                            entity = copyDataProperties(options, golf);
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        report['value'] = oscar;
                        entity[2] = report;
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
                    };
                    zulu = zulu.bind(options)(golf);
                    var _closure4_slot2 = zulu;
                    zulu['displayName'] = tango;
                    zulu = oscar.forwardRef;
                    entity = function(argFoo, argBar) {
                        tango = _closure1_slot9;
                        zulu = _closure4_slot2;
                        mike = {};
                        entity = argFoo;
                        mike['childProps'] = entity;
                        entity = argBar;
                        mike['forwardedConnectStoresRef'] = entity;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity = zulu.bind(oscar)(entity);
                    mike = mike.HermesInternal;
                    zulu = mike.concat;
                    mike = 'ForwardRef(';
                    mike = zulu.bind(mike)(tango, report);
                    entity['displayName'] = mike;
                    return entity;
                };
                return entity;
            };
            mike = undefined;
            entity = zulu.bind(mike)(report, tango);
 54:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();