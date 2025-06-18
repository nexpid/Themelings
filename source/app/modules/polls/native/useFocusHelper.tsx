// app/modules/polls/native/useFocusHelper.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    oscard = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(tangon);
    var _closure1_slot2 = oscard;
    tangon = 1;
    tangon = report[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    golfie = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = function() { // Original name: FocusHelperState
        zuuluu = this;
        tangon = _closure1_slot3;
        michal = _closure1_slot7;
        entity = undefined;
        michal = tangon.bind(entity)(zuuluu, michal);
        michal = {};
        zuuluu['refsByKey'] = michal;
        michal = new Array(0);
        zuuluu['keyOrder'] = michal;
        return entity;
    };
    var _closure1_slot7 = tangon;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = function() {
        tangon = _closure1_slot2;
        zuuluu = function() { // Original name: FocusHelperImpl
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            tangon = _closure1_slot5;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            verify = report;
            tangon = new verify[tangon](option);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['validState'] = tangon;
            tangon = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.validState;
                    report = entity.refsByKey;
                    tangon = entity.keyOrder;
                    foxtra = report;
                    entity = undefined;
                    verify = true;
                    zuuluu = null;
                    option = undefined;
                    golfie = undefined;
                    for(offset in foxtra)
 46:
                    {
                        golfie = undefined;
 57:
                        kiloes = offset;
                        sizing = report[kiloes];
                        output = zuuluu == sizing;
                        oscard = undefined;
                        if(output) { _fun00002_ip = 103; continue _fun00001 }
 73:
                        output = sizing.current;
                        sizing = zuuluu == output;
                        option = output;
                        oscard = undefined;
                        if(sizing) { _fun00002_ip = 103; continue _fun00001 }
 90:
                        sizing = output.isFocused;
                        oscard = sizing.bind(output)();
                        option = output;
 103:
                        golfie = kiloes;
                        if(verify !== oscard) { _fun00002_ip = 46; continue _fun00001 }
                    }
 110:
                    if(!(zuuluu != golfie)) { _fun00002_ip = 247; continue _fun00001 }
 117:
                    oscard = tangon.indexOf;
                    golfie = oscard.bind(tangon)(golfie);
                    oscard = -1;
                    if(!(oscard !== golfie)) { _fun00002_ip = 219; continue _fun00001 }
 138:
                    oscard = tangon.length;
                    tangon = 1;
                    oscard = oscard - tangon;
                    if(!(!(golfie >= oscard))) { _fun00002_ip = 219; continue _fun00001 }
 154:
                    oscard = _closure3_slot0;
                    oscard = oscard.validState;
                    oscard = oscard.keyOrder;
                    tangon = golfie + tangon;
                    tangon = oscard[tangon];
                    oscard = report[tangon];
                    tangon = zuuluu == oscard;
                    report = oscard;
                    if(tangon) { _fun00002_ip = 204; continue _fun00001 }
 192:
                    oscard = oscard.current;
                    tangon = zuuluu == oscard;
                    report = oscard;
 204:
                    if(tangon) { _fun00002_ip = 247; continue _fun00001 }
 207:
                    tangon = report.focus;
                    tangon = tangon.bind(report)();
                    _fun00002_ip = 247; continue _fun00001;
 219:
                    tangon = _closure3_slot0;
                    tangon = tangon.onAddAnswer;
                    if(!(zuuluu != tangon)) { _fun00002_ip = 247; continue _fun00001 }
 233:
                    zuuluu = tangon.call;
                    michal = _closure3_slot0;
                    michal = zuuluu.bind(tangon)(michal);
 247:
                    return entity;
                }
            };
            zuuluu['focusNext'] = tangon;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure3_slot0;
                    entity = entity.validState;
                    michal = entity.refsByKey;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    tangon = null;
                    entity = tangon == zuuluu;
                    michal = zuuluu;
                    if(entity) { _fun00004_ip = 50; continue _fun00003 }
 38:
                    zuuluu = zuuluu.current;
                    entity = tangon == zuuluu;
                    michal = zuuluu;
 50:
                    if(entity) { _fun00004_ip = 63; continue _fun00003 }
 53:
                    entity = michal.focus;
                    entity = entity.bind(michal)();
 63:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['focus'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'restartState';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = _closure1_slot5;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            michal = entity instanceof Object ? entity : michal;
            entity = this;
            entity['pendingState'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'commitState';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = michal.pendingState;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00006_ip = 21; continue _fun00005 }
 15:
                michal['validState'] = entity;
 21:
                entity = undefined;
                michal['pendingState'] = entity;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'refWithKey';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = this;
                zuuluu = entity.pendingState;
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 3;
                entity = oscard[entity];
                option = undefined;
                golfie = report.bind(option)(entity);
                report = null;
                oscard = report != zuuluu;
                entity = 'Called refWithKey without a valid state';
                entity = golfie.bind(option)(oscard, entity);
                oscard = zuuluu.keyOrder;
                entity = oscard.push;
                entity = entity.bind(oscard)(tangon);
                entity = zuuluu.refsByKey;
                entity = entity[tangon];
                if(!(report == entity)) { _fun00008_ip = 111; continue _fun00007 }
 85:
                report = _closure1_slot4;
                michal = report.createRef;
                michal = michal.bind(report)();
                zuuluu = zuuluu.refsByKey;
                zuuluu[tangon] = michal;
                return michal;
 111:
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot6 = tangon;
    tangon = 5;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/native/useFocusHelper.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useFocusHelper
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = arguments[0];
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 13; continue _fun00009 }
 11:
            entity = {};
 13:
            entity = entity.onAddAnswer;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = report;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 4;
            entity = oscard[entity];
            tangon = tangon.bind(report)(entity);
            entity = function() {
                entity = _closure1_slot6;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                zuuluu = michal;
                entity = new zuuluu[entity](michal);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            _closure2_slot1 = entity;
            tangon = entity.restartState;
            tangon = tangon.bind(entity)();
            tangon = _closure1_slot4;
            zuuluu = tangon.useEffect;
            michal = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                zuuluu['onAddAnswer'] = michal;
                michal = _closure2_slot1;
                entity = michal.commitState;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();