// app/modules/build_overrides/BuildOverrideStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
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
            entity = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    romeo = 0;
    mike = golf[romeo];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    yankee = 1;
    mike = golf[yankee];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    offset = 2;
    mike = golf[offset];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    verify = 3;
    mike = golf[verify];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = {};
    mike['NotResolved'] = romeo;
    tango = 'NotResolved';
    mike[romeo] = tango;
    mike['Resolving'] = yankee;
    tango = 'Resolving';
    mike[yankee] = tango;
    mike['Resolved'] = offset;
    tango = 'Resolved';
    mike[offset] = tango;
    mike['Invalid'] = verify;
    tango = 'Invalid';
    mike[verify] = tango;
    var _closure1_slot8 = mike;
    tango = mike.NotResolved;
    var _closure1_slot9 = tango;
    tango = null;
    var _closure1_slot10 = tango;
    tango = {};
    var _closure1_slot11 = tango;
    tango = 7;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: BuildOverrideStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'getCurrentBuildOverride';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = function() { // Original name: resolveCurrentOverrideIfNecessary
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot9;
                    mike = _closure1_slot8;
                    mike = mike.NotResolved;
                    if(!(zulu === mike)) { _fun00006_ip = 84; continue _fun00005 }
 21:
                    mike = _closure1_slot8;
                    mike = mike.Resolving;
                    _closure1_slot9 = mike;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.getBuildOverride;
                    zulu = entity.bind(mike)();
                    mike = zulu.then;
                    entity = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'CURRENT_BUILD_OVERRIDE_RESOLVED';
                        mike['type'] = report;
                        report = argFoo;
                        mike['overrides'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            entity = mike.bind(entity)();
            entity = {};
            zulu = _closure1_slot9;
            entity['state'] = zulu;
            mike = _closure1_slot10;
            entity['overrides'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getBuildOverride';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            zulu = function(argFoo) { // Original name: resolveBuildOverrideIfNecessary
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    options = argFoo;
                    var _closure4_slot0 = options;
                    mike = _closure1_slot11;
                    mike = options in mike;
                    if(mike) { _fun00008_ip = 236; continue _fun00007 }
 26:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    oscar = 5;
                    mike = mike[oscar];
                    report = undefined;
                    tango = tango.bind(report)(mike);
                    mike = tango.validateURL;
                    mike = mike.bind(tango)(options);
                    tango = null;
                    if(!(tango == mike)) { _fun00008_ip = 112; continue _fun00007 }
 65:
                    tango = {};
                    yankee = _closure1_slot11;
                    romeo = tango;
                    golf = copyDataProperties(romeo, yankee);
                    golf = {};
                    golf['url'] = options;
                    verify = _closure1_slot8;
                    verify = verify.Invalid;
                    golf['state'] = verify;
                    tango[options] = golf;
                    _closure1_slot11 = tango;
                    _fun00008_ip = 236; continue _fun00007;
 112:
                    tango = {};
                    yankee = _closure1_slot11;
                    romeo = tango;
                    golf = copyDataProperties(romeo, yankee);
                    golf = {};
                    golf['url'] = options;
                    verify = mike.url;
                    golf['validatedURL'] = verify;
                    verify = global;
                    offset = verify.String;
                    verify = mike.payload;
                    verify = offset.bind(report)(verify);
                    golf['payload'] = verify;
                    verify = _closure1_slot8;
                    verify = verify.Resolving;
                    golf['state'] = verify;
                    tango[options] = golf;
                    _closure1_slot11 = tango;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.getBuildOverrideMeta;
                    mike = mike.url;
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.dispatch;
                        mike = {};
                        report = 'BUILD_OVERRIDE_RESOLVED';
                        mike['type'] = report;
                        report = _closure4_slot0;
                        mike['url'] = report;
                        report = argFoo;
                        mike['override'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 236:
                    entity = undefined;
                    return entity;
                }
            };
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = _closure1_slot11;
            entity = entity[mike];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getBuildOverrides';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'BuildOverrideStore';
    verify['displayName'] = tango;
    tango = 6;
    tango = golf[tango];
    kilo = options.bind(entity)(tango);
    tango = {};
    offset = function(argFoo) { // Original name: handleBuildOverrideResolved
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tango = entity.url;
            oscar = entity.override;
            entity = null;
            if(!(entity != oscar)) { _fun00010_ip = 35; continue _fun00009 }
 20:
            entity = _closure1_slot8;
            golf = entity.Resolved;
            _fun00010_ip = 48; continue _fun00009;
 35:
            entity = _closure1_slot8;
            golf = entity.Invalid;
 48:
            mike = {};
            options = _closure1_slot11;
            verify = mike;
            zulu = copyDataProperties(verify, options);
            zulu = {};
            report = _closure1_slot11;
            options = report[tango];
            verify = zulu;
            report = copyDataProperties(verify, options);
            report = 'state';
            zulu[report] = golf;
            report = 'override';
            zulu[report] = oscar;
            mike[tango] = zulu;
            _closure1_slot11 = mike;
            entity = undefined;
            return entity;
        }
    };
    tango['BUILD_OVERRIDE_RESOLVED'] = offset;
    report = function(argFoo) { // Original name: handleCurrentBuildOverrideResolved
        entity = argFoo;
        mike = entity.overrides;
        zulu = _closure1_slot8;
        zulu = zulu.Resolved;
        _closure1_slot9 = zulu;
        _closure1_slot10 = mike;
        entity = undefined;
        return entity;
    };
    tango['CURRENT_BUILD_OVERRIDE_RESOLVED'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    sizing = report;
    backup = tango;
    tango = new sizing[verify](kilo, backup, foxtrot);
    tango = tango instanceof Object ? tango : report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/build_overrides/BuildOverrideStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['State'] = mike;
    return entity;
})();