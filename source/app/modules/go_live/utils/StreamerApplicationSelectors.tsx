// app/modules/go_live/utils/StreamerApplicationSelectors.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: _findPlayingActivity
        entity = argFoo;
        michal = entity.type;
        entity = _closure1_slot4;
        entity = entity.PLAYING;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot5 = entity;
    oscard = function(argFoo, argBar) { // Original name: getStreamerActivityByUserId
        tangon = argBar;
        zuuluu = tangon.findActivity;
        michal = _closure1_slot5;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = oscard;
    report = function(argFoo, argBar) { // Original name: getStreamerActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            zuuluu = entity != michal;
            if(!zuuluu) { _fun00002_ip = 36; continue _fun00001 }
 12:
            report = _closure1_slot6;
            tangon = michal.ownerId;
            zuuluu = undefined;
            michal = argBar;
            entity = report.bind(zuuluu)(tangon, michal);
 36:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function(argFoo, argBar) { // Original name: getStreamerApplication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 62; continue _fun00003 }
 9:
            tangon = _closure1_slot7;
            zuuluu = undefined;
            michal = argBar;
            tangon = tangon.bind(zuuluu)(report, michal);
            zuuluu = entity == tangon;
            michal = null;
            if(zuuluu) { _fun00004_ip = 60; continue _fun00003 }
 36:
            zuuluu = {};
            report = tangon.application_id;
            zuuluu['id'] = report;
            tangon = tangon.name;
            zuuluu['name'] = tangon;
            michal = zuuluu;
 60:
            return michal;
 62:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = function(argFoo, argBar) { // Original name: streamApplicationEqualityCheck
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = oscard === report;
            if(entity) { _fun00006_ip = 63; continue _fun00005 }
 13:
            zuuluu = null;
            michal = zuuluu != oscard;
            if(!michal) { _fun00006_ip = 26; continue _fun00005 }
 22:
            michal = zuuluu != report;
 26:
            if(!michal) { _fun00006_ip = 60; continue _fun00005 }
 29:
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 2;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = golfie.bind(tangon)(zuuluu);
            michal = zuuluu.bind(tangon)(oscard, report);
 60:
            entity = michal;
 63:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ActivityTypes;
    var _closure1_slot4 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/go_live/utils/StreamerApplicationSelectors.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getStreamerActivityByUserId'] = oscard;
    zuuluu['getStreamerActivity'] = report;
    zuuluu['getStreamerApplication'] = tangon;
    michal = function(argFoo) { // Original name: useGetStreamApplication
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        option = _closure1_slot9;
        offset = function() {
            tangon = _closure1_slot8;
            zuuluu = _closure2_slot0;
            michal = _closure1_slot3;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        romeon = oscard;
        yankee = tangon;
        verify = zuuluu;
        entity = romeon[report](yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['useGetStreamApplication'] = michal;
    return entity;
})();