// app/modules/forwarding/native/ForwardModalUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/native/ForwardModalUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 'forward-modal';
    zuuluu['FORWARD_MODAL_KEY'] = tangon;
    tangon = function(argFoo) { // Original name: openForwardModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.message;
            zuuluu = michal.source;
            verify = michal.initialSelectedDestinations;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 29; continue _fun00001 }
 25:
            verify = new Array(0);
 29:
            option = michal.forwardOptions;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            golfie = tangon.bind(entity)(michal);
            michal = golfie.dismissKeyboard;
            michal = michal.bind(golfie)();
            michal = 3;
            michal = oscard[michal];
            romeon = tangon.bind(entity)(michal);
            yankee = romeon.trackForwardStart;
            golfie = offset.channel_id;
            michal = offset.id;
            michal = yankee.bind(romeon)(golfie, michal, zuuluu);
            michal = 4;
            michal = oscard[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.getIsWindowLarge;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00002_ip = 158; continue _fun00001 }
 128:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 5;
            tangon = golfie[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.isIOS;
            michal = tangon.bind(oscard)();
 158:
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 6;
            oscard = tangon[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.pushLazy;
            yankee = _closure1_slot0;
            report = 8;
            report = tangon[report];
            yankee = yankee.bind(entity)(report);
            report = 7;
            report = tangon[report];
            tangon = tangon.paths;
            report = yankee.bind(entity)(report, tangon);
            tangon = {};
            tangon['message'] = offset;
            tangon['initialSelectedDestinations'] = verify;
            tangon['forwardOptions'] = option;
            tangon['source'] = zuuluu;
            zuuluu = undefined;
            if(michal) { _fun00002_ip = 257; continue _fun00001 }
 243:
            michal = {};
            option = 'modal';
            michal['presentation'] = option;
            zuuluu = michal;
 257:
            backup = 'forward-modal';
            output = golfie;
            sizing = report;
            kiloes = tangon;
            foxtra = zuuluu;
            michal = output[oscard](sizing, kiloes, backup, foxtra, romeon);
            return entity;
        }
    };
    zuuluu['openForwardModal'] = tangon;
    tangon = function() { // Original name: closeForwardModal
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.popWithKey;
        michal = 'forward-modal';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['closeForwardModal'] = tangon;
    michal = function(argFoo) { // Original name: showForwardFailedAlertModal
        entity = argFoo;
        verify = entity.message;
        option = entity.failedDestinations;
        golfie = entity.forwardOptions;
        tangon = _closure1_slot3;
        zuuluu = tangon.lazy;
        entity = function() {
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 8;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 9;
            michal = entity[michal];
            entity = entity.paths;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 10;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.openAlert;
        zuuluu = _closure1_slot4;
        michal = {};
        michal['message'] = verify;
        michal['failedDestinations'] = option;
        michal['forwardOptions'] = golfie;
        zuuluu = zuuluu.bind(entity)(oscard, michal);
        michal = 'forward-failed-alert-modal';
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['showForwardFailedAlertModal'] = michal;
    return entity;
})();