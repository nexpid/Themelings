// app/modules/masked_link/SharedStateUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: useUrlParts
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {};
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            tangon = oscard[michal];
            zuuluu = undefined;
            option = report.bind(zuuluu)(tangon);
            golfie = option.getProtocol;
            tangon = _closure2_slot0;
            golfie = golfie.bind(option)(tangon);
            entity['protocol'] = golfie;
            michal = oscard[michal];
            zuuluu = report.bind(zuuluu)(michal);
            michal = zuuluu.getHostname;
            michal = michal.bind(zuuluu)(tangon);
            entity['hostname'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        option = entity.protocol;
        golfie = entity.hostname;
        entity = {};
        entity['protocol'] = option;
        entity['hostname'] = golfie;
        tangon = report.replace;
        michal = global;
        michal = michal.HermesInternal;
        oscard = michal.concat;
        zuuluu = '';
        michal = '//';
        michal = oscard.bind(zuuluu)(option, michal, golfie);
        michal = tangon.bind(report)(michal, zuuluu);
        entity['theRestOfTheUrl'] = michal;
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/masked_link/SharedStateUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useUrlParts'] = tangon;
    michal = function(argFoo) { // Original name: useModalState
        michal = argFoo;
        kiloes = michal.url;
        var _closure2_slot0 = kiloes;
        backup = michal.trustUrl;
        var _closure2_slot1 = backup;
        zuuluu = michal.onConfirm;
        var _closure2_slot2 = zuuluu;
        romeon = michal.onCancel;
        var _closure2_slot3 = romeon;
        yankee = michal.onClose;
        var _closure2_slot4 = yankee;
        oscard = _closure1_slot3;
        report = oscard.useState;
        tangon = false;
        oscard = report.bind(oscard)(tangon);
        report = _closure1_slot2;
        golfie = undefined;
        tangon = 2;
        oscard = report.bind(golfie)(oscard, tangon);
        tangon = 0;
        report = oscard[tangon];
        var _closure2_slot5 = report;
        tangon = 1;
        tangon = oscard[tangon];
        oscard = _closure1_slot4;
        oscard = oscard.bind(golfie)(kiloes);
        option = oscard.protocol;
        golfie = oscard.hostname;
        oscard = oscard.theRestOfTheUrl;
        foxtra = _closure1_slot3;
        offset = foxtra.useCallback;
        verify = new Array(5);
        verify[0] = kiloes;
        verify[1] = report;
        verify[2] = backup;
        verify[3] = zuuluu;
        verify[4] = yankee;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot5;
                if(!michal) { _fun00002_ip = 25; continue _fun00001 }
 10:
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot0;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
 25:
                zuuluu = _closure2_slot4;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 45; continue _fun00001 }
 35:
                zuuluu = _closure2_slot4;
                michal = undefined;
                michal = zuuluu.bind(michal)();
 45:
                michal = _closure2_slot2;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            }
        };
        zuuluu = offset.bind(foxtra)(zuuluu, verify);
        offset = _closure1_slot3;
        verify = offset.useCallback;
        michal = new Array(2);
        michal[0] = romeon;
        michal[1] = yankee;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot4;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                zuuluu = _closure2_slot4;
                michal = undefined;
                michal = zuuluu.bind(michal)();
 23:
                michal = _closure2_slot3;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            }
        };
        michal = verify.bind(offset)(entity, michal);
        entity = {};
        entity['protocol'] = option;
        entity['hostname'] = golfie;
        entity['theRestOfTheUrl'] = oscard;
        entity['shouldTrustUrl'] = report;
        entity['setShouldTrustUrl'] = tangon;
        entity['handleConfirm'] = zuuluu;
        entity['handleCancel'] = michal;
        return entity;
    };
    zuuluu['useModalState'] = michal;
    return entity;
})();