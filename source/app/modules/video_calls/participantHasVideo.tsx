// app/modules/video_calls/participantHasVideo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: participantHasVideo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            entity = _closure1_slot4;
            entity = entity.ACTIVITY;
            entity = tangon !== entity;
            if(!entity) { _fun00002_ip = 47; continue _fun00001 }
 28:
            report = zuuluu.type;
            tangon = _closure1_slot4;
            tangon = tangon.PRESENCE_EMBEDDED_ACTIVITY;
            entity = report !== tangon;
 47:
            if(!entity) { _fun00002_ip = 114; continue _fun00001 }
 50:
            michal = _closure1_slot5;
            tangon = undefined;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00002_ip = 99; continue _fun00001 }
 64:
            report = zuuluu.voiceState;
            michal = null;
            oscard = michal == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 87; continue _fun00001 }
 81:
            tangon = report.selfVideo;
 87:
            michal = michal != tangon;
            if(!michal) { _fun00002_ip = 97; continue _fun00001 }
 94:
            michal = tangon;
 97:
            _fun00002_ip = 111; continue _fun00001;
 99:
            tangon = zuuluu.streamId;
            zuuluu = null;
            michal = zuuluu != tangon;
 111:
            entity = michal;
 114:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function(argFoo) { // Original name: canRenderParticipantVideo
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golfie = arguments[1];
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00004_ip = 19; continue _fun00003 }
 12:
            golfie = _closure1_slot3;
 19:
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00004_ip = 138; continue _fun00003 }
 28:
            michal = _closure1_slot7;
            michal = michal.bind(oscard)(report);
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00004_ip = 135; continue _fun00003 }
 49:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.bind(oscard)(report);
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00004_ip = 92; continue _fun00003 }
 64:
            option = report.user;
            verify = option.id;
            offset = _closure1_slot2;
            option = offset.getId;
            option = option.bind(offset)();
            zuuluu = verify !== option;
 92:
            if(!zuuluu) { _fun00004_ip = 132; continue _fun00003 }
 95:
            tangon = _closure1_slot6;
            tangon = tangon.bind(oscard)(report);
            tangon = !tangon;
            if(tangon) { _fun00004_ip = 129; continue _fun00003 }
 110:
            oscard = golfie.isLocalVideoDisabled;
            report = report.id;
            report = oscard.bind(golfie)(report);
            tangon = !report;
 129:
            zuuluu = tangon;
 132:
            michal = zuuluu;
 135:
            entity = michal;
 138:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ParticipantTypes;
    var _closure1_slot4 = verify;
    verify = oscard.isStreamParticipant;
    var _closure1_slot5 = verify;
    oscard = oscard.isUserParticipant;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/video_calls/participantHasVideo.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['canRenderParticipantVideo'] = tangon;
    michal = function(argFoo) { // Original name: useCanRenderParticipantVideo
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot8;
            zuuluu = _closure2_slot0;
            michal = _closure1_slot3;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCanRenderParticipantVideo'] = michal;
    return entity;
})();