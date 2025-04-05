// app/components_native/common/CountDown.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    golfie = golfie.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.Component;
    michal = function(argFoo) {
        tangon = function() { // Original name: CountDown
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot9;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
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
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            entity = global;
            report = entity.setInterval;
            entity = undefined;
            tangon = function() {
                michal = _closure3_slot0;
                entity = michal.forceUpdate;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = 1000;
            michal = report.bind(entity)(tangon, michal);
            zuuluu['_interval'] = michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'componentWillUnmount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.clearRefreshInterval;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'clearRefreshInterval';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zuuluu = entity._interval;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 36; continue _fun00005 }
 15:
                michal = global;
                zuuluu = michal.clearInterval;
                michal = entity._interval;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 36:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                offset = this;
                michal = offset.props;
                report = michal.postDeadlineText;
                oscard = michal.style;
                option = michal.deadline;
                entity = michal.withUnits;
                tangon = michal.freezeAtRemainingSeconds;
                michal = null;
                zuuluu = michal != entity;
                if(!zuuluu) { _fun00008_ip = 53; continue _fun00007 }
 50:
                zuuluu = entity;
 53:
                entity = inf;
                if(!(option !== entity)) { _fun00008_ip = 855; continue _fun00007 }
 70:
                entity = global;
                romeon = entity.Math;
                yankee = romeon.max;
                golfie = entity.Number;
                verify = undefined;
                option = golfie.bind(verify)(option);
                foxtra = entity.Date;
                golfie = foxtra.now;
                golfie = golfie.bind(foxtra)();
                option = option - golfie;
                golfie = 0;
                yankee = yankee.bind(romeon)(golfie, option);
                option = 1000;
                romeon = yankee / option;
                option = michal != tangon;
                if(!option) { _fun00008_ip = 144; continue _fun00007 }
 140:
                option = romeon <= tangon;
 144:
                if(!option) { _fun00008_ip = 160; continue _fun00007 }
 147:
                option = offset.clearRefreshInterval;
                option = option.bind(offset)();
                romeon = tangon;
 160:
                if(!(romeon >= golfie)) { _fun00008_ip = 171; continue _fun00007 }
 164:
                if(!(michal == report)) { _fun00008_ip = 915; continue _fun00007 }
 171:
                yankee = entity.Math;
                offset = yankee.floor;
                foxtra = _closure1_slot1;
                backup = _closure1_slot2;
                tangon = 8;
                option = backup[tangon];
                option = foxtra.bind(verify)(option);
                option = option.Seconds;
                option = option.DAY;
                option = romeon / option;
                offset = offset.bind(yankee)(option);
                option = new Array(4);
                option[0] = offset;
                kiloes = entity.Math;
                yankee = kiloes.floor;
                offset = backup[tangon];
                offset = foxtra.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.DAY;
                romeon = romeon % offset;
                offset = backup[tangon];
                offset = foxtra.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.HOUR;
                offset = romeon / offset;
                offset = yankee.bind(kiloes)(offset);
                option[1] = offset;
                kiloes = entity.Math;
                yankee = kiloes.floor;
                offset = backup[tangon];
                offset = foxtra.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.HOUR;
                romeon = romeon % offset;
                offset = backup[tangon];
                offset = foxtra.bind(verify)(offset);
                offset = offset.Seconds;
                offset = offset.MINUTE;
                offset = romeon / offset;
                offset = yankee.bind(kiloes)(offset);
                option[2] = offset;
                yankee = entity.Math;
                offset = yankee.floor;
                tangon = backup[tangon];
                tangon = foxtra.bind(verify)(tangon);
                tangon = tangon.Seconds;
                tangon = tangon.MINUTE;
                tangon = romeon % tangon;
                tangon = offset.bind(yankee)(tangon);
                option[3] = tangon;
                tangon = option[golfie];
                backup = 0;
                if(!(backup === tangon)) { _fun00008_ip = 446; continue _fun00007 }
 433:
                tangon = option.shift;
                tangon = tangon.bind(option)();
                backup = 1;
 446:
                golfie = option.map;
                tangon = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = argFoo;
                        michal = 10;
                        entity = tangon;
                        if(!(entity < michal)) { _fun00010_ip = 37; continue _fun00009 }
 13:
                        michal = global;
                        michal = michal.HermesInternal;
                        zuuluu = michal.concat;
                        michal = '0';
                        entity = zuuluu.bind(michal)(tangon);
 37:
                        return entity;
                    }
                };
                golfie = golfie.bind(option)(tangon);
                tangon = golfie.join;
                foxtra = ':';
                kiloes = tangon.bind(golfie)(foxtra);
                report = kiloes;
                if(!zuuluu) { _fun00008_ip = 915; continue _fun00007 }
 486:
                option = _closure1_slot0;
                offset = _closure1_slot2;
                michal = 7;
                zuuluu = offset[michal];
                zuuluu = option.bind(verify)(zuuluu);
                golfie = zuuluu.intl;
                tangon = golfie.string;
                zuuluu = offset[michal];
                zuuluu = option.bind(verify)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.QJyuxc;
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = new Array(4);
                zuuluu[0] = tangon;
                tangon = offset[michal];
                tangon = option.bind(verify)(tangon);
                yankee = tangon.intl;
                golfie = yankee.string;
                tangon = offset[michal];
                tangon = option.bind(verify)(tangon);
                tangon = tangon.t;
                tangon = tangon.1LyF1t;
                tangon = golfie.bind(yankee)(tangon);
                zuuluu[1] = tangon;
                tangon = offset[michal];
                tangon = option.bind(verify)(tangon);
                yankee = tangon.intl;
                golfie = yankee.string;
                tangon = offset[michal];
                tangon = option.bind(verify)(tangon);
                tangon = tangon.t;
                tangon = tangon.n7dksL;
                tangon = golfie.bind(yankee)(tangon);
                zuuluu[2] = tangon;
                tangon = offset[michal];
                tangon = option.bind(verify)(tangon);
                golfie = tangon.intl;
                tangon = golfie.string;
                michal = offset[michal];
                michal = option.bind(verify)(michal);
                michal = michal.t;
                michal = michal.6m/6nJ;
                michal = tangon.bind(golfie)(michal);
                zuuluu[3] = michal;
                michal = kiloes.indexOf;
                golfie = michal.bind(kiloes)(foxtra);
                romeon = -1;
                tangon = kiloes;
                michal = backup;
                if(!(romeon !== golfie)) { _fun00008_ip = 828; continue _fun00007 }
 723:
                golfie = zuuluu.length;
                yankee = '';
                offset = ' ';
                verify = kiloes;
                option = backup;
                tangon = verify;
                michal = option;
                if(!(michal < golfie)) { _fun00008_ip = 828; continue _fun00007 }
 752:
                backup = verify.replace;
                kiloes = zuuluu[option];
                golfie = entity.HermesInternal;
                golfie = golfie.concat;
                golfie = golfie.bind(yankee)(kiloes, offset);
                kiloes = backup.bind(verify)(foxtra, golfie);
                backup = option + 1;
                golfie = kiloes.indexOf;
                golfie = golfie.bind(kiloes)(foxtra);
                tangon = kiloes;
                michal = backup;
                if(!(romeon !== golfie)) { _fun00008_ip = 828; continue _fun00007 }
 807:
                golfie = zuuluu.length;
                verify = kiloes;
                option = backup;
                tangon = verify;
                michal = option;
                if(michal < golfie) { _fun00008_ip = 752; continue _fun00007 }
 828:
                zuuluu = zuuluu[michal];
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '';
                report = michal.bind(entity)(tangon, zuuluu);
                _fun00008_ip = 915; continue _fun00007;
 855:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 7;
                michal = option[entity];
                tangon = undefined;
                michal = golfie.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = option[entity];
                entity = golfie.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.PqEzn5;
                report = michal.bind(zuuluu)(entity);
 915:
                tangon = _closure1_slot8;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'tabularNumbers': true, 'variant': 'text-md/semibold'};
                entity['style'] = oscard;
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/common/CountDown.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();