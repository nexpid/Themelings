// app/modules/voice_panel/native/hooks/useCanConnect.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useCanConnect.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCanConnect
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot2;
        zuuluu = new Array(4);
        zuuluu[0] = golfie;
        golfie = _closure1_slot4;
        zuuluu[1] = golfie;
        golfie = _closure1_slot3;
        zuuluu[2] = golfie;
        michal = _closure1_slot5;
        zuuluu[3] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot2;
                michal = tangon.getChannel;
                entity = _closure2_slot0;
                golfie = michal.bind(tangon)(entity);
                entity = {};
                michal = null;
                tangon = michal != golfie;
                if(!tangon) { _fun00002_ip = 77; continue _fun00001 }
 35:
                report = golfie.isPrivate;
                report = report.bind(golfie)();
                if(report) { _fun00002_ip = 74; continue _fun00001 }
 48:
                verify = _closure1_slot4;
                option = verify.can;
                oscard = _closure1_slot6;
                oscard = oscard.CONNECT;
                report = option.bind(verify)(oscard, golfie);
 74:
                tangon = report;
 77:
                entity['canConnect'] = tangon;
                michal = michal == golfie;
                if(michal) { _fun00002_ip = 132; continue _fun00001 }
 89:
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                tangon = 6;
                report = report[tangon];
                tangon = undefined;
                oscard = oscard.bind(tangon)(report);
                report = oscard.isChannelFull;
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot3;
                michal = report.bind(oscard)(golfie, tangon, zuuluu);
 132:
                entity['isAtMaxCapacity'] = michal;
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();