// app/uikit-native/Timer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun104151: for(var _fun104151_ip = 0; ; ) switch(_fun104151_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun104151_ip = 51; continue _fun104151 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun104151_ip = 92; continue _fun104151;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun104151_ip = 71; continue _fun104151 }
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
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun104152: for(var _fun104152_ip = 0; ; ) switch(_fun104152_ip) {
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
            _fun104152_ip = 76; continue _fun104152;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot8 = golf;
    tango = tango.PureComponent;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: Timer
            _fun104156: for(var _fun104156_ip = 0; ; ) switch(_fun104156_ip) {
 0:
                tango = argFoo;
                golf = this;
                zulu = _closure1_slot3;
                oscar = _closure2_slot0;
                report = undefined;
                zulu = zulu.bind(report)(golf, oscar);
                zulu = _closure1_slot9;
                entity = new Array(1);
                entity[0] = tango;
                entity = zulu.bind(report)(golf, oscar, entity);
                var _closure3_slot0 = entity;
                zulu = function() {
                    _fun104157: for(var _fun104157_ip = 0; ; ) switch(_fun104157_ip) {
 0:
                        mike = _closure3_slot0;
                        tango = mike.state;
                        zulu = tango.seconds;
                        mike = tango.minutes;
                        options = tango.hours;
                        golf = 1;
                        oscar = zulu + golf;
                        verify = 60;
                        report = mike;
                        tango = options;
                        if(!(oscar >= verify)) { _fun104157_ip = 75; continue _fun104157 }
 50:
                        zulu = mike + golf;
                        mike = options;
                        if(!(zulu >= verify)) { _fun104157_ip = 67; continue _fun104157 }
 61:
                        mike = options + golf;
                        zulu = 0;
 67:
                        oscar = 0;
                        report = zulu;
                        tango = mike;
 75:
                        zulu = _closure3_slot0;
                        mike = zulu.setState;
                        entity = {};
                        entity['seconds'] = oscar;
                        entity['minutes'] = report;
                        entity['hours'] = tango;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_incrementSecond'] = zulu;
                mike = function() {
                    _fun104158: for(var _fun104158_ip = 0; ; ) switch(_fun104158_ip) {
 0:
                        mike = _closure3_slot0;
                        zulu = mike.state;
                        mike = zulu.seconds;
                        offset = zulu.minutes;
                        options = zulu.hours;
                        verify = 1;
                        tango = mike - verify;
                        oscar = offset;
                        report = options;
                        golf = tango;
                        if(!(golf < verify)) { _fun104158_ip = 105; continue _fun104158 }
 50:
                        if(!(!(offset >= verify))) { _fun104158_ip = 86; continue _fun104158 }
 54:
                        yankee = offset < verify;
                        if(!yankee) { _fun104158_ip = 65; continue _fun104158 }
 61:
                        yankee = options >= verify;
 65:
                        zulu = offset;
                        mike = options;
                        if(!yankee) { _fun104158_ip = 84; continue _fun104158 }
 74:
                        mike = options - verify;
                        tango = 59;
                        zulu = tango;
 84:
                        _fun104158_ip = 96; continue _fun104158;
 86:
                        zulu = offset - verify;
                        tango = 59;
                        mike = options;
 96:
                        golf = tango;
                        oscar = zulu;
                        report = mike;
 105:
                        mike = 0;
                        if(!(!(golf <= mike))) { _fun104158_ip = 145; continue _fun104158 }
 111:
                        tango = _closure3_slot0;
                        zulu = tango.setState;
                        mike = {};
                        mike['seconds'] = golf;
                        mike['minutes'] = oscar;
                        mike['hours'] = report;
                        mike = zulu.bind(tango)(mike);
                        _fun104158_ip = 197; continue _fun104158;
 145:
                        mike = global;
                        tango = mike.clearInterval;
                        entity = _closure3_slot0;
                        zulu = entity._timerId;
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        zulu = null;
                        entity['_timerId'] = zulu;
                        entity = entity.props;
                        entity = entity.onComplete;
                        if(!(zulu != entity)) { _fun104158_ip = 197; continue _fun104158 }
 193:
                        entity = entity.bind(mike)();
 197:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_decrementSecond'] = mike;
                oscar = tango.seconds;
                zulu = tango.minutes;
                mike = tango.hours;
                yankee = tango.timestamp;
                report = null;
                options = oscar;
                golf = zulu;
                tango = mike;
                if(!(report != yankee)) { _fun104156_ip = 273; continue _fun104156 }
 121:
                offset = 0;
                options = oscar;
                golf = zulu;
                tango = mike;
                if(!(yankee > offset)) { _fun104156_ip = 273; continue _fun104156 }
 139:
                verify = global;
                oscar = verify.Math;
                zulu = oscar.max;
                romeo = verify.Date;
                mike = romeo.now;
                mike = mike.bind(romeo)();
                mike = mike - yankee;
                zulu = zulu.bind(oscar)(offset, mike);
                mike = 1000;
                zulu = zulu / mike;
                yankee = verify.Math;
                offset = yankee.floor;
                mike = 86400;
                oscar = zulu % mike;
                zulu = 3600;
                mike = oscar / zulu;
                tango = offset.bind(yankee)(mike);
                romeo = verify.Math;
                offset = romeo.floor;
                yankee = oscar % zulu;
                oscar = 60;
                zulu = yankee / oscar;
                golf = offset.bind(romeo)(zulu);
                offset = verify.Math;
                verify = offset.floor;
                oscar = yankee % oscar;
                options = verify.bind(offset)(oscar);
 273:
                mike = {};
                verify = report != options;
                oscar = 0;
                if(!verify) { _fun104156_ip = 287; continue _fun104156 }
 284:
                oscar = options;
 287:
                mike['seconds'] = oscar;
                options = report != golf;
                oscar = 0;
                if(!options) { _fun104156_ip = 304; continue _fun104156 }
 301:
                oscar = golf;
 304:
                mike['minutes'] = oscar;
                report = report != tango;
                zulu = 0;
                if(!report) { _fun104156_ip = 321; continue _fun104156 }
 318:
                zulu = tango;
 321:
                mike['hours'] = zulu;
                entity['state'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun104159: for(var _fun104159_ip = 0; ; ) switch(_fun104159_ip) {
 0:
                mike = this;
                entity = mike.props;
                entity = entity.countdown;
                zulu = global;
                report = zulu.setInterval;
                if(entity) { _fun104159_ip = 53; continue _fun104159 }
 25:
                tango = mike._incrementSecond;
                zulu = undefined;
                entity = 1000;
                entity = report.bind(zulu)(tango, entity);
                mike['_timerId'] = entity;
                _fun104159_ip = 79; continue _fun104159;
 53:
                tango = mike._decrementSecond;
                zulu = undefined;
                entity = 1000;
                entity = report.bind(zulu)(tango, entity);
                mike['_timerId'] = entity;
 79:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'componentWillUnmount';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = this;
            entity = global;
            tango = entity.clearInterval;
            mike = zulu._timerId;
            entity = undefined;
            mike = tango.bind(entity)(mike);
            mike = null;
            zulu['_timerId'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun104161: for(var _fun104161_ip = 0; ; ) switch(_fun104161_ip) {
 0:
                zulu = this;
                entity = zulu.props;
                report = entity.style;
                mike = entity.hideHours;
                entity = entity.hideMinutes;
                tango = zulu.state;
                zulu = tango.seconds;
                oscar = tango.minutes;
                verify = tango.hours;
                if(!mike) { _fun104161_ip = 61; continue _fun104161 }
 51:
                options = '';
                mike = 0;
                if(!(mike !== verify)) { _fun104161_ip = 146; continue _fun104161 }
 61:
                tango = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 7;
                mike = golf[mike];
                golf = undefined;
                yankee = tango.bind(golf)(mike);
                offset = yankee.padStart;
                mike = global;
                tango = mike.String;
                verify = tango.bind(golf)(verify);
                golf = 2;
                tango = '0';
                verify = offset.bind(yankee)(verify, golf, tango);
                mike = mike.HermesInternal;
                golf = mike.concat;
                tango = '';
                mike = ':';
                options = golf.bind(tango)(verify, mike);
 146:
                if(!entity) { _fun104161_ip = 159; continue _fun104161 }
 149:
                golf = '';
                entity = 0;
                if(!(entity !== oscar)) { _fun104161_ip = 244; continue _fun104161 }
 159:
                mike = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 7;
                entity = tango[entity];
                tango = undefined;
                offset = mike.bind(tango)(entity);
                verify = offset.padStart;
                entity = global;
                mike = entity.String;
                oscar = mike.bind(tango)(oscar);
                tango = 2;
                mike = '0';
                oscar = verify.bind(offset)(oscar, tango, mike);
                entity = entity.HermesInternal;
                tango = entity.concat;
                mike = '';
                entity = ':';
                golf = tango.bind(mike)(oscar, entity);
 244:
                entity = options.length;
                mike = 0;
                if(!(!(entity > mike))) { _fun104161_ip = 267; continue _fun104161 }
 255:
                entity = golf.length;
                oscar = zulu;
                if(!(entity > mike)) { _fun104161_ip = 327; continue _fun104161 }
 267:
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                entity = mike[entity];
                mike = undefined;
                verify = tango.bind(mike)(entity);
                tango = verify.padStart;
                entity = global;
                entity = entity.String;
                zulu = entity.bind(mike)(zulu);
                mike = 2;
                entity = '0';
                oscar = tango.bind(verify)(zulu, mike, entity);
 327:
                tango = _closure1_slot8;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.LegacyText;
                entity = {};
                entity['style'] = report;
                report = 'timer';
                entity['accessibilityRole'] = report;
                report = new Array(3);
                report[0] = options;
                report[1] = golf;
                report[2] = oscar;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = {'hideMinutes': false, 'hideHours': false};
    mike['defaultProps'] = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/Timer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();