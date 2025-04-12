// app/modules/go_live/useStreamError.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    verify = 0;
    golfie = oscard[verify];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    golfie = {};
    tangon = 1;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.AVError;
    option = option.STREAM_SOUNDSHARE_FAILED;
    golfie[option] = verify;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.AVError;
    option = option.STREAM_SEND_HIGH_PACKET_LOSS;
    golfie[option] = tangon;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.AVError;
    option = option.STREAM_VIEW_HIGH_PACKET_LOSS;
    golfie[option] = tangon;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.AVError;
    option = option.STREAM_SEND_LOW_FPS;
    verify = 2;
    golfie[option] = verify;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.AVError;
    option = option.STREAM_VIEW_LOW_FPS;
    golfie[option] = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AVError;
    option = tangon.STREAM_BAD_NETWORK_QUALITY;
    tangon = 3;
    golfie[option] = tangon;
    var _closure1_slot3 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/useStreamError.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useStreamError
        michal = argFoo;
        oscard = michal.id;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot2;
                michal = zuuluu.getActiveErrors;
                report = michal.bind(zuuluu)();
                michal = global;
                tangon = michal.Array;
                zuuluu = tangon.from;
                michal = report.values;
                michal = michal.bind(report)();
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        entity = 'streamKey';
                        entity = entity in michal;
                        if(!entity) { _fun00004_ip = 31; continue _fun00003 }
 14:
                        tangon = michal.streamKey;
                        zuuluu = _closure2_slot0;
                        entity = tangon === zuuluu;
 31:
                        if(!entity) { _fun00004_ip = 56; continue _fun00003 }
 34:
                        zuuluu = _closure1_slot3;
                        michal = michal.type;
                        zuuluu = zuuluu[michal];
                        michal = null;
                        entity = michal != zuuluu;
 56:
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.sort;
                entity = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure1_slot3;
                        entity = argFoo;
                        entity = entity.type;
                        report = michal[entity];
                        tangon = null;
                        oscard = tangon != report;
                        entity = 0;
                        if(!oscard) { _fun00006_ip = 33; continue _fun00005 }
 30:
                        entity = report;
 33:
                        report = _closure1_slot3;
                        zuuluu = argBar;
                        zuuluu = zuuluu.type;
                        zuuluu = report[zuuluu];
                        tangon = tangon != zuuluu;
                        michal = 0;
                        if(!tangon) { _fun00006_ip = 61; continue _fun00005 }
 58:
                        michal = zuuluu;
 61:
                        entity = entity - michal;
                        return entity;
                    }
                };
                michal = michal.bind(zuuluu)(entity);
                entity = 0;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00002_ip = 103; continue _fun00001 }
 98:
                entity = michal.type;
 103:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();