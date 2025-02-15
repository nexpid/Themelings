// app/components_native/common/CountDown.tsx
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
            entity = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = tango.Component;
    mike = function(argFoo) {
        tango = function() { // Original name: CountDown
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            entity = global;
            report = entity.setInterval;
            entity = undefined;
            tango = function() {
                mike = _closure3_slot0;
                entity = mike.forceUpdate;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = 1000;
            mike = report.bind(entity)(tango, mike);
            zulu['_interval'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'componentWillUnmount';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.clearRefreshInterval;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'clearRefreshInterval';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zulu = entity._interval;
                mike = null;
                if(!(mike != zulu)) { _fun00006_ip = 36; continue _fun00005 }
 15:
                mike = global;
                zulu = mike.clearInterval;
                mike = entity._interval;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 36:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                offset = this;
                mike = offset.props;
                report = mike.postDeadlineText;
                oscar = mike.style;
                options = mike.deadline;
                entity = mike.withUnits;
                tango = mike.freezeAtRemainingSeconds;
                mike = null;
                zulu = mike != entity;
                if(!zulu) { _fun00008_ip = 53; continue _fun00007 }
 50:
                zulu = entity;
 53:
                entity = inf;
                if(!(options !== entity)) { _fun00008_ip = 853; continue _fun00007 }
 70:
                entity = global;
                romeo = entity.Math;
                yankee = romeo.max;
                golf = entity.Number;
                verify = undefined;
                options = golf.bind(verify)(options);
                foxtrot = entity.Date;
                golf = foxtrot.now;
                golf = golf.bind(foxtrot)();
                options = options - golf;
                golf = 0;
                yankee = yankee.bind(romeo)(golf, options);
                options = 1000;
                romeo = yankee / options;
                options = mike != tango;
                if(!options) { _fun00008_ip = 144; continue _fun00007 }
 140:
                options = romeo <= tango;
 144:
                if(!options) { _fun00008_ip = 160; continue _fun00007 }
 147:
                options = offset.clearRefreshInterval;
                options = options.bind(offset)();
                romeo = tango;
 160:
                if(!(romeo >= golf)) { _fun00008_ip = 171; continue _fun00007 }
 164:
                if(!(mike == report)) { _fun00008_ip = 913; continue _fun00007 }
 171:
                yankee = entity.Math;
                offset = yankee.floor;
                foxtrot = _closure1_slot1;
                backup = _closure1_slot2;
                tango = 8;
                options = backup[tango];
                options = foxtrot.bind(verify)(options);
                options = options.Seconds;
                options = options.DAY;
                options = romeo / options;
                offset = offset.bind(yankee)(options);
                options = new Array(4);
                options[0] = offset;
                kilo = entity.Math;
                yankee = kilo.floor;
                offset = backup[tango];
                offset = foxtrot.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.DAY;
                romeo = romeo % offset;
                offset = backup[tango];
                offset = foxtrot.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.HOUR;
                offset = romeo / offset;
                offset = yankee.bind(kilo)(offset);
                options[1] = offset;
                kilo = entity.Math;
                yankee = kilo.floor;
                offset = backup[tango];
                offset = foxtrot.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.HOUR;
                romeo = romeo % offset;
                offset = backup[tango];
                offset = foxtrot.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.MINUTE;
                offset = romeo / offset;
                offset = yankee.bind(kilo)(offset);
                options[2] = offset;
                yankee = entity.Math;
                offset = yankee.floor;
                tango = backup[tango];
                tango = foxtrot.bind(verify)(tango);
                tango = tango.Seconds;
                tango = tango.MINUTE;
                tango = romeo % tango;
                tango = offset.bind(yankee)(tango);
                options[3] = tango;
                tango = options[golf];
                backup = 0;
                if(!(backup === tango)) { _fun00008_ip = 446; continue _fun00007 }
 433:
                tango = options.shift;
                tango = tango.bind(options)();
                backup = 1;
 446:
                golf = options.map;
                tango = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tango = argFoo;
                        mike = 10;
                        entity = tango;
                        if(!(entity < mike)) { _fun00010_ip = 37; continue _fun00009 }
 13:
                        mike = global;
                        mike = mike.HermesInternal;
                        zulu = mike.concat;
                        mike = '0';
                        entity = zulu.bind(mike)(tango);
 37:
                        return entity;
                    }
                };
                golf = golf.bind(options)(tango);
                tango = golf.join;
                foxtrot = ':';
                kilo = tango.bind(golf)(foxtrot);
                report = kilo;
                if(!zulu) { _fun00008_ip = 913; continue _fun00007 }
 488:
                options = _closure1_slot0;
                offset = _closure1_slot2;
                mike = 7;
                zulu = offset[mike];
                zulu = options.bind(verify)(zulu);
                golf = zulu.intl;
                tango = golf.string;
                zulu = offset[mike];
                zulu = options.bind(verify)(zulu);
                zulu = zulu.t;
                zulu = zulu.QJyuxc;
                tango = tango.bind(golf)(zulu);
                zulu = new Array(4);
                zulu[0] = tango;
                tango = offset[mike];
                tango = options.bind(verify)(tango);
                yankee = tango.intl;
                golf = yankee.string;
                tango = offset[mike];
                tango = options.bind(verify)(tango);
                tango = tango.t;
                tango = tango.1LyF1t;
                tango = golf.bind(yankee)(tango);
                zulu[1] = tango;
                tango = offset[mike];
                tango = options.bind(verify)(tango);
                yankee = tango.intl;
                golf = yankee.string;
                tango = offset[mike];
                tango = options.bind(verify)(tango);
                tango = tango.t;
                tango = tango.n7dksL;
                tango = golf.bind(yankee)(tango);
                zulu[2] = tango;
                tango = offset[mike];
                tango = options.bind(verify)(tango);
                golf = tango.intl;
                tango = golf.string;
                mike = offset[mike];
                mike = options.bind(verify)(mike);
                mike = mike.t;
                mike = mike.6m/6nJ;
                mike = tango.bind(golf)(mike);
                zulu[3] = mike;
                mike = kilo.indexOf;
                golf = mike.bind(kilo)(foxtrot);
                romeo = -1;
                tango = kilo;
                mike = backup;
                if(!(romeo !== golf)) { _fun00008_ip = 826; continue _fun00007 }
 721:
                golf = zulu.length;
                yankee = '';
                offset = ' ';
                verify = kilo;
                options = backup;
                tango = verify;
                mike = options;
                if(!(mike < golf)) { _fun00008_ip = 826; continue _fun00007 }
 750:
                backup = verify.replace;
                kilo = zulu[options];
                golf = entity.HermesInternal;
                golf = golf.concat;
                golf = golf.bind(yankee)(kilo, offset);
                kilo = backup.bind(verify)(foxtrot, golf);
                backup = options + 1;
                golf = kilo.indexOf;
                golf = golf.bind(kilo)(foxtrot);
                tango = kilo;
                mike = backup;
                if(!(romeo !== golf)) { _fun00008_ip = 826; continue _fun00007 }
 805:
                golf = zulu.length;
                verify = kilo;
                options = backup;
                tango = verify;
                mike = options;
                if(mike < golf) { _fun00008_ip = 750; continue _fun00007 }
 826:
                zulu = zulu[mike];
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '';
                report = mike.bind(entity)(tango, zulu);
                _fun00008_ip = 913; continue _fun00007;
 853:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 7;
                mike = options[entity];
                tango = undefined;
                mike = golf.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = options[entity];
                entity = golf.bind(tango)(entity);
                entity = entity.t;
                entity = entity.PqEzn5;
                report = mike.bind(zulu)(entity);
 913:
                tango = _closure1_slot8;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.Text;
                entity = {'tabularNumbers': true, 'variant': 'text-md/semibold'};
                entity['style'] = oscar;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/common/CountDown.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();