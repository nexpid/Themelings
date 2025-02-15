// app/uikit-native/ProgressCircle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
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
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.View;
    var _closure1_slot8 = verify;
    offset = golf.StyleSheet;
    golf = 7;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot9 = verify;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot10 = golf;
    verify = offset.create;
    golf = {};
    yankee = {'alignItems': 'center', 'justifyContent': 'center'};
    golf['progressCircle'] = yankee;
    yankee = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    golf['circle'] = yankee;
    yankee = {'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    golf['circleOverlay'] = yankee;
    golf = verify.bind(offset)(golf);
    var _closure1_slot11 = golf;
    tango = tango.Component;
    mike = function(argFoo) {
        tango = function() { // Original name: ProgressCircle
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
        entity = 'renderCircle';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            entity = entity.props;
            oscar = entity.percent;
            golf = entity.color;
            foxtrot = entity.size;
            backup = entity.strokeWidth;
            yankee = global;
            zulu = yankee.Math;
            mike = zulu.min;
            report = yankee.Math;
            tango = report.max;
            entity = 0;
            entity = tango.bind(report)(oscar, entity);
            offset = 100;
            options = mike.bind(zulu)(entity, offset);
            entity = foxtrot - backup;
            romeo = 2;
            kilo = entity / romeo;
            entity = yankee.Math;
            entity = entity.PI;
            entity = kilo * entity;
            verify = entity * romeo;
            tango = _closure1_slot9;
            mike = _closure1_slot1;
            output = _closure1_slot2;
            report = 8;
            entity = output[report];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            sizing = yankee.HermesInternal;
            echo = sizing.concat;
            result = '0 0 ';
            sizing = ' ';
            result = echo.bind(result)(foxtrot, sizing, foxtrot);
            entity['viewBox'] = result;
            result = _closure1_slot11;
            result = result.circle;
            entity['style'] = result;
            oscar = _closure1_slot0;
            report = output[report];
            report = oscar.bind(zulu)(report);
            oscar = report.Circle;
            report = {};
            output = 'none';
            report['fill'] = output;
            output = foxtrot / romeo;
            report['cx'] = output;
            output = foxtrot / romeo;
            report['cy'] = output;
            report['r'] = kilo;
            report['strokeWidth'] = backup;
            backup = 'round';
            report['strokeLinecap'] = backup;
            vacuum = foxtrot / romeo;
            source = foxtrot / romeo;
            yankee = yankee.HermesInternal;
            foxtrot = yankee.concat;
            sequence = 'rotate(-90 ';
            update = ')';
            control = sizing;
            yankee = sequence[foxtrot](vacuum, control, source, update, echo);
            report['transform'] = yankee;
            report['stroke'] = golf;
            golf = {};
            golf['strokeDasharray'] = verify;
            offset = options / offset;
            options = 1;
            options = options - offset;
            options = options * verify;
            golf['strokeDashoffset'] = options;
            report['style'] = golf;
            report = tango.bind(zulu)(oscar, report);
            entity['children'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = this;
                entity = report.props;
                golf = entity.style;
                oscar = entity.children;
                tango = _closure1_slot10;
                zulu = _closure1_slot8;
                mike = {};
                entity = _closure1_slot11;
                options = entity.progressCircle;
                entity = new Array(2);
                entity[0] = options;
                entity[1] = golf;
                mike['style'] = entity;
                entity = report.renderCircle;
                report = entity.bind(report)();
                entity = new Array(2);
                entity[0] = report;
                report = null;
                golf = report != oscar;
                if(!golf) { _fun00006_ip = 122; continue _fun00005 }
 86:
                verify = _closure1_slot9;
                options = _closure1_slot8;
                golf = {};
                offset = _closure1_slot11;
                offset = offset.circleOverlay;
                golf['style'] = offset;
                golf['children'] = oscar;
                oscar = undefined;
                report = verify.bind(oscar)(options, golf);
 122:
                entity[1] = report;
                mike['children'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = {'size': 20, 'strokeWidth': 0.9};
    golf = 9;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    golf = golf.unsafe_rawColors;
    golf = golf.GUILD_BOOSTING_PINK;
    tango['color'] = golf;
    mike['defaultProps'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/ProgressCircle.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();