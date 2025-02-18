// app/modules/video_calls/native/useIsVideoMode.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: isVideoMode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[0];
            golfie = arguments[1];
            report = arguments[2];
            oscard = arguments[3];
            tangon = arguments[4];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 28; continue _fun00001 }
 21:
            zuuluu = _closure1_slot3;
 28:
            if(!(golfie === entity)) { _fun00002_ip = 39; continue _fun00001 }
 32:
            golfie = _closure1_slot5;
 39:
            if(!(report === entity)) { _fun00002_ip = 50; continue _fun00001 }
 43:
            report = _closure1_slot2;
 50:
            if(!(oscard === entity)) { _fun00002_ip = 61; continue _fun00001 }
 54:
            oscard = _closure1_slot6;
 61:
            if(!(tangon === entity)) { _fun00002_ip = 72; continue _fun00001 }
 65:
            tangon = _closure1_slot4;
 72:
            michal = zuuluu.getChannel;
            entity = golfie.getVoiceChannelId;
            entity = entity.bind(golfie)();
            zuuluu = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 157; continue _fun00001 }
 101:
            michal = report.getAllActiveStreams;
            michal = michal.bind(report)();
            report = michal.length;
            michal = 0;
            michal = report > michal;
            if(michal) { _fun00002_ip = 141; continue _fun00001 }
 125:
            report = oscard.hasVideo;
            zuuluu = zuuluu.id;
            michal = report.bind(oscard)(zuuluu);
 141:
            if(michal) { _fun00002_ip = 154; continue _fun00001 }
 144:
            zuuluu = tangon.isVideoEnabled;
            michal = zuuluu.bind(tangon)();
 154:
            entity = michal;
 157:
            return entity;
        }
    };
    var _closure1_slot7 = michal;
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
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/native/useIsVideoMode.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: _default
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(5);
        michal[0] = report;
        report = _closure1_slot5;
        michal[1] = report;
        report = _closure1_slot4;
        michal[2] = report;
        report = _closure1_slot6;
        michal[3] = report;
        entity = _closure1_slot2;
        michal[4] = entity;
        entity = function() {
            golfie = _closure1_slot7;
            romeon = _closure1_slot3;
            yankee = _closure1_slot5;
            offset = _closure1_slot2;
            verify = _closure1_slot6;
            option = _closure1_slot4;
            foxtra = undefined;
            entity = foxtra[golfie](romeon, yankee, offset, verify, option, golfie);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['isVideoMode'] = michal;
    return entity;
})();