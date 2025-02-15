// app/modules/status_bar/native/components/StatusBar.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot8;
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
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
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
    tango = report.bind(entity)(tango);
    tango = tango.StatusBar;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: StatusBarAndroid
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot7;
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
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            report = tango.bind(entity)(mike);
            tango = report.pushStackEntry;
            mike = zulu.props;
            mike = tango.bind(report)(mike);
            zulu['_stackEntry'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'componentDidUpdate';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            oscar = tango.bind(entity)(mike);
            report = oscar.replaceStackEntry;
            tango = zulu._stackEntry;
            mike = zulu.props;
            mike = report.bind(oscar)(tango, mike);
            zulu['_stackEntry'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'componentWillUnmount';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            report = tango.bind(entity)(mike);
            tango = report.popStackEntry;
            mike = zulu._stackEntry;
            mike = tango.bind(report)(mike);
            mike = null;
            zulu['_stackEntry'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/status_bar/native/components/StatusBar.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();