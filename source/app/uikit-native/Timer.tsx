// app/uikit-native/Timer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot8 = golfie;
    tangon = tangon.PureComponent;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: Timer
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                golfie = this;
                zuuluu = _closure1_slot3;
                oscard = _closure2_slot0;
                report = undefined;
                zuuluu = zuuluu.bind(report)(golfie, oscard);
                zuuluu = _closure1_slot9;
                entity = new Array(1);
                entity[0] = tangon;
                entity = zuuluu.bind(report)(golfie, oscard, entity);
                var _closure3_slot0 = entity;
                zuuluu = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure3_slot0;
                        tangon = michal.state;
                        zuuluu = tangon.seconds;
                        michal = tangon.minutes;
                        option = tangon.hours;
                        golfie = 1;
                        oscard = zuuluu + golfie;
                        verify = 60;
                        report = michal;
                        tangon = option;
                        if(!(oscard >= verify)) { _fun00008_ip = 75; continue _fun00007 }
 50:
                        zuuluu = michal + golfie;
                        michal = option;
                        if(!(zuuluu >= verify)) { _fun00008_ip = 67; continue _fun00007 }
 61:
                        michal = option + golfie;
                        zuuluu = 0;
 67:
                        oscard = 0;
                        report = zuuluu;
                        tangon = michal;
 75:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.setState;
                        entity = {};
                        entity['seconds'] = oscard;
                        entity['minutes'] = report;
                        entity['hours'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_incrementSecond'] = zuuluu;
                michal = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal.state;
                        michal = zuuluu.seconds;
                        offset = zuuluu.minutes;
                        option = zuuluu.hours;
                        verify = 1;
                        tangon = michal - verify;
                        oscard = offset;
                        report = option;
                        golfie = tangon;
                        if(!(golfie < verify)) { _fun00010_ip = 105; continue _fun00009 }
 50:
                        if(!(!(offset >= verify))) { _fun00010_ip = 86; continue _fun00009 }
 54:
                        yankee = offset < verify;
                        if(!yankee) { _fun00010_ip = 65; continue _fun00009 }
 61:
                        yankee = option >= verify;
 65:
                        zuuluu = offset;
                        michal = option;
                        if(!yankee) { _fun00010_ip = 84; continue _fun00009 }
 74:
                        michal = option - verify;
                        tangon = 59;
                        zuuluu = tangon;
 84:
                        _fun00010_ip = 96; continue _fun00009;
 86:
                        zuuluu = offset - verify;
                        tangon = 59;
                        michal = option;
 96:
                        golfie = tangon;
                        oscard = zuuluu;
                        report = michal;
 105:
                        michal = 0;
                        if(!(!(golfie <= michal))) { _fun00010_ip = 145; continue _fun00009 }
 111:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.setState;
                        michal = {};
                        michal['seconds'] = golfie;
                        michal['minutes'] = oscard;
                        michal['hours'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00010_ip = 197; continue _fun00009;
 145:
                        michal = global;
                        tangon = michal.clearInterval;
                        entity = _closure3_slot0;
                        zuuluu = entity._timerId;
                        michal = undefined;
                        zuuluu = tangon.bind(michal)(zuuluu);
                        zuuluu = null;
                        entity['_timerId'] = zuuluu;
                        entity = entity.props;
                        entity = entity.onComplete;
                        if(!(zuuluu != entity)) { _fun00010_ip = 197; continue _fun00009 }
 193:
                        entity = entity.bind(michal)();
 197:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_decrementSecond'] = michal;
                oscard = tangon.seconds;
                zuuluu = tangon.minutes;
                michal = tangon.hours;
                yankee = tangon.timestamp;
                report = null;
                option = oscard;
                golfie = zuuluu;
                tangon = michal;
                if(!(report != yankee)) { _fun00006_ip = 273; continue _fun00005 }
 121:
                offset = 0;
                option = oscard;
                golfie = zuuluu;
                tangon = michal;
                if(!(yankee > offset)) { _fun00006_ip = 273; continue _fun00005 }
 139:
                verify = global;
                oscard = verify.Math;
                zuuluu = oscard.max;
                romeon = verify.Date;
                michal = romeon.now;
                michal = michal.bind(romeon)();
                michal = michal - yankee;
                zuuluu = zuuluu.bind(oscard)(offset, michal);
                michal = 1000;
                zuuluu = zuuluu / michal;
                yankee = verify.Math;
                offset = yankee.floor;
                michal = 86400;
                oscard = zuuluu % michal;
                zuuluu = 3600;
                michal = oscard / zuuluu;
                tangon = offset.bind(yankee)(michal);
                romeon = verify.Math;
                offset = romeon.floor;
                yankee = oscard % zuuluu;
                oscard = 60;
                zuuluu = yankee / oscard;
                golfie = offset.bind(romeon)(zuuluu);
                offset = verify.Math;
                verify = offset.floor;
                oscard = yankee % oscard;
                option = verify.bind(offset)(oscard);
 273:
                michal = {};
                verify = report != option;
                oscard = 0;
                if(!verify) { _fun00006_ip = 287; continue _fun00005 }
 284:
                oscard = option;
 287:
                michal['seconds'] = oscard;
                option = report != golfie;
                oscard = 0;
                if(!option) { _fun00006_ip = 304; continue _fun00005 }
 301:
                oscard = golfie;
 304:
                michal['minutes'] = oscard;
                report = report != tangon;
                zuuluu = 0;
                if(!report) { _fun00006_ip = 321; continue _fun00005 }
 318:
                zuuluu = tangon;
 321:
                michal['hours'] = zuuluu;
                entity['state'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.props;
                entity = entity.countdown;
                zuuluu = global;
                report = zuuluu.setInterval;
                if(entity) { _fun00012_ip = 53; continue _fun00011 }
 25:
                tangon = michal._incrementSecond;
                zuuluu = undefined;
                entity = 1000;
                entity = report.bind(zuuluu)(tangon, entity);
                michal['_timerId'] = entity;
                _fun00012_ip = 79; continue _fun00011;
 53:
                tangon = michal._decrementSecond;
                zuuluu = undefined;
                entity = 1000;
                entity = report.bind(zuuluu)(tangon, entity);
                michal['_timerId'] = entity;
 79:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'componentWillUnmount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            entity = global;
            tangon = entity.clearInterval;
            michal = zuuluu._timerId;
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = null;
            zuuluu['_timerId'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.props;
                report = entity.style;
                michal = entity.hideHours;
                entity = entity.hideMinutes;
                tangon = zuuluu.state;
                zuuluu = tangon.seconds;
                oscard = tangon.minutes;
                verify = tangon.hours;
                if(!michal) { _fun00014_ip = 61; continue _fun00013 }
 51:
                option = '';
                michal = 0;
                if(!(michal !== verify)) { _fun00014_ip = 146; continue _fun00013 }
 61:
                tangon = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 7;
                michal = golfie[michal];
                golfie = undefined;
                yankee = tangon.bind(golfie)(michal);
                offset = yankee.padStart;
                michal = global;
                tangon = michal.String;
                verify = tangon.bind(golfie)(verify);
                golfie = 2;
                tangon = '0';
                verify = offset.bind(yankee)(verify, golfie, tangon);
                michal = michal.HermesInternal;
                golfie = michal.concat;
                tangon = '';
                michal = ':';
                option = golfie.bind(tangon)(verify, michal);
 146:
                if(!entity) { _fun00014_ip = 159; continue _fun00013 }
 149:
                golfie = '';
                entity = 0;
                if(!(entity !== oscard)) { _fun00014_ip = 244; continue _fun00013 }
 159:
                michal = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 7;
                entity = tangon[entity];
                tangon = undefined;
                offset = michal.bind(tangon)(entity);
                verify = offset.padStart;
                entity = global;
                michal = entity.String;
                oscard = michal.bind(tangon)(oscard);
                tangon = 2;
                michal = '0';
                oscard = verify.bind(offset)(oscard, tangon, michal);
                entity = entity.HermesInternal;
                tangon = entity.concat;
                michal = '';
                entity = ':';
                golfie = tangon.bind(michal)(oscard, entity);
 244:
                entity = option.length;
                michal = 0;
                if(!(!(entity > michal))) { _fun00014_ip = 267; continue _fun00013 }
 255:
                entity = golfie.length;
                oscard = zuuluu;
                if(!(entity > michal)) { _fun00014_ip = 327; continue _fun00013 }
 267:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                entity = michal[entity];
                michal = undefined;
                verify = tangon.bind(michal)(entity);
                tangon = verify.padStart;
                entity = global;
                entity = entity.String;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = 2;
                entity = '0';
                oscard = tangon.bind(verify)(zuuluu, michal, entity);
 327:
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.LegacyText;
                entity = {};
                entity['style'] = report;
                report = 'timer';
                entity['accessibilityRole'] = report;
                report = new Array(3);
                report[0] = option;
                report[1] = golfie;
                report[2] = oscard;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = {'hideMinutes': false, 'hideHours': false};
    michal['defaultProps'] = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/Timer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();