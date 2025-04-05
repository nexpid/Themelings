// app/uikit-native/ProgressCircle.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.View;
    var _closure1_slot8 = verify;
    offset = golfie.StyleSheet;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.jsx;
    var _closure1_slot9 = verify;
    golfie = golfie.jsxs;
    var _closure1_slot10 = golfie;
    verify = offset.create;
    golfie = {};
    yankee = {'alignItems': 'center', 'justifyContent': 'center'};
    golfie['progressCircle'] = yankee;
    yankee = {'position': 'absolute', 'width': '100%', 'height': '100%'};
    golfie['circle'] = yankee;
    yankee = {'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    golfie['circleOverlay'] = yankee;
    golfie = verify.bind(offset)(golfie);
    var _closure1_slot11 = golfie;
    tangon = tangon.Component;
    michal = function(argFoo) {
        tangon = function() { // Original name: ProgressCircle
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
                entity = _closure1_slot12;
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
        entity = 'renderCircle';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            entity = entity.props;
            oscard = entity.percent;
            golfie = entity.color;
            foxtra = entity.size;
            backup = entity.strokeWidth;
            yankee = global;
            zuuluu = yankee.Math;
            michal = zuuluu.min;
            report = yankee.Math;
            tangon = report.max;
            entity = 0;
            entity = tangon.bind(report)(oscard, entity);
            offset = 100;
            option = michal.bind(zuuluu)(entity, offset);
            entity = foxtra - backup;
            romeon = 2;
            kiloes = entity / romeon;
            entity = yankee.Math;
            entity = entity.PI;
            entity = kiloes * entity;
            verify = entity * romeon;
            tangon = _closure1_slot9;
            michal = _closure1_slot1;
            output = _closure1_slot2;
            report = 8;
            entity = output[report];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            sizing = yankee.HermesInternal;
            echoed = sizing.concat;
            result = '0 0 ';
            sizing = ' ';
            result = echoed.bind(result)(foxtra, sizing, foxtra);
            entity['viewBox'] = result;
            result = _closure1_slot11;
            result = result.circle;
            entity['style'] = result;
            oscard = _closure1_slot0;
            report = output[report];
            report = oscard.bind(zuuluu)(report);
            oscard = report.Circle;
            report = {};
            output = 'none';
            report['fill'] = output;
            output = foxtra / romeon;
            report['cx'] = output;
            output = foxtra / romeon;
            report['cy'] = output;
            report['r'] = kiloes;
            report['strokeWidth'] = backup;
            backup = 'round';
            report['strokeLinecap'] = backup;
            vacuum = foxtra / romeon;
            source = foxtra / romeon;
            yankee = yankee.HermesInternal;
            foxtra = yankee.concat;
            sequen = 'rotate(-90 ';
            update = ')';
            ctrled = sizing;
            yankee = sequen[foxtra](vacuum, ctrled, source, update, echoed);
            report['transform'] = yankee;
            report['stroke'] = golfie;
            golfie = {};
            golfie['strokeDasharray'] = verify;
            offset = option / offset;
            option = 1;
            option = option - offset;
            option = option * verify;
            golfie['strokeDashoffset'] = option;
            report['style'] = golfie;
            report = tangon.bind(zuuluu)(oscard, report);
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = this;
                entity = report.props;
                golfie = entity.style;
                oscard = entity.children;
                tangon = _closure1_slot10;
                zuuluu = _closure1_slot8;
                michal = {};
                entity = _closure1_slot11;
                option = entity.progressCircle;
                entity = new Array(2);
                entity[0] = option;
                entity[1] = golfie;
                michal['style'] = entity;
                entity = report.renderCircle;
                report = entity.bind(report)();
                entity = new Array(2);
                entity[0] = report;
                report = null;
                golfie = report != oscard;
                if(!golfie) { _fun00006_ip = 122; continue _fun00005 }
 86:
                verify = _closure1_slot9;
                option = _closure1_slot8;
                golfie = {};
                offset = _closure1_slot11;
                offset = offset.circleOverlay;
                golfie['style'] = offset;
                golfie['children'] = oscard;
                oscard = undefined;
                report = verify.bind(oscard)(option, golfie);
 122:
                entity[1] = report;
                michal['children'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = {'size': 20, 'strokeWidth': 0.9};
    golfie = 9;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.unsafe_rawColors;
    golfie = golfie.GUILD_BOOSTING_PINK;
    tangon['color'] = golfie;
    michal['defaultProps'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/ProgressCircle.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();