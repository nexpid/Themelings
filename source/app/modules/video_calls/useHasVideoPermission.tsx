// app/modules/video_calls/useHasVideoPermission.tsx
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/useHasVideoPermission.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useHasVideoPermission
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 88; continue _fun00001 }
 16:
                zuuluu = _closure2_slot0;
                michal = zuuluu.isPrivate;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00002_ip = 85; continue _fun00001 }
 33:
                golfie = _closure1_slot0;
                oscard = _closure1_slot1;
                report = 3;
                oscard = oscard[report];
                report = undefined;
                option = golfie.bind(report)(oscard);
                golfie = option.canStreamInChannel;
                romeon = _closure2_slot0;
                yankee = _closure1_slot2;
                offset = _closure1_slot3;
                verify = false;
                foxtra = option;
                michal = foxtra[golfie](romeon, yankee, offset, verify, option);
 85:
                entity = michal;
 88:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getVideoPermission
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            entity = golfie.isPrivate;
            entity = entity.bind(golfie)();
            if(entity) { _fun00004_ip = 67; continue _fun00003 }
 16:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.canStreamInChannel;
            offset = _closure1_slot2;
            verify = _closure1_slot3;
            option = false;
            romeon = oscard;
            yankee = golfie;
            entity = romeon[report](yankee, offset, verify, option, golfie);
 67:
            return entity;
        }
    };
    zuuluu['getVideoPermission'] = michal;
    return entity;
})();