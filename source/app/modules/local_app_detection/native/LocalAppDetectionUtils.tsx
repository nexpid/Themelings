// app/modules/local_app_detection/native/LocalAppDetectionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo) { // Original name: getDetectableAppScheme
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.DetectableAppNames;
            zuuluu = michal.ROBLOX;
            michal = argFoo;
            if(!(michal !== zuuluu)) { _fun00008_ip = 46; continue _fun00007 }
 44:
            return entity;
 46:
            entity = 'roblox';
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = function() { // Original name: _detectLocalApps
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 262; continue _fun00009 }
 10:
                    oscard = {};
                    report = _closure1_slot4;
                    tangon = report.hasConsented;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.PERSONALIZATION;
                    zuuluu = tangon.bind(report)(zuuluu);
                    if(!zuuluu) { _fun00010_ip = 210; continue _fun00009 }
 46:
                    tangon = _closure1_slot7;
                    offset = undefined;
                    zuuluu = argFoo;
                    verify = tangon.bind(offset)(zuuluu);
                    tangon = verify.bind(offset)();
                    zuuluu = tangon.done;
                    option = 5;
                    golfie = 4;
                    report = tangon;
                    if(zuuluu) { _fun00010_ip = 210; continue _fun00009 }
 84:
                    tangon = report.value;
                    zuuluu = _closure1_slot9;
                    backup = zuuluu.bind(offset)(tangon);
                    yankee = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    yankee = yankee.bind(offset)(zuuluu);
                    zuuluu = yankee.canOpenUrlScheme;
                    zuuluu = zuuluu.bind(yankee)(backup);
                    SaveGenerator(address=130);
 128:
                    return zuuluu;
 130:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(yankee) { _fun00010_ip = 207; continue _fun00009 }
 136:
                    oscard[tangon] = zuuluu;
                    yankee = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    foxtra = yankee.bind(offset)(tangon);
                    romeon = foxtra.track;
                    tangon = _closure1_slot5;
                    yankee = tangon.CAN_OPEN_URL_REQUESTED;
                    tangon = {};
                    tangon['scheme'] = backup;
                    tangon['result'] = zuuluu;
                    tangon = romeon.bind(foxtra)(yankee, tangon);
                    yankee = verify.bind(offset)();
                    tangon = yankee.done;
                    report = yankee;
                    if(tangon) { _fun00010_ip = 210; continue _fun00009 }
 205:
                    _fun00010_ip = 84; continue _fun00009;
 207:
                    return zuuluu;
 210:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'LOCAL_APP_DETECTION_COMPLETE';
                    zuuluu['type'] = golfie;
                    zuuluu['result'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 262:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AnalyticEvents;
    var _closure1_slot5 = option;
    report = report.Consents;
    var _closure1_slot6 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/local_app_detection/native/LocalAppDetectionUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getDetectableAppScheme'] = tangon;
    michal = function() { // Original name: detectLocalApps
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['detectLocalApps'] = michal;
    return entity;
})();