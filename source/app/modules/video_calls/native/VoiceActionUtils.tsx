// app/modules/video_calls/native/VoiceActionUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: NOOP
        entity = undefined;
        return entity;
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    tangon = {};
    golfie = 0;
    tangon['SERVER_MUTE'] = golfie;
    entity = 'SERVER_MUTE';
    tangon[golfie] = entity;
    entity = 1;
    tangon['SUPPRESS'] = entity;
    golfie = 'SUPPRESS';
    tangon[entity] = golfie;
    option = 2;
    tangon['SELF_MUTE'] = option;
    golfie = 'SELF_MUTE';
    tangon[option] = golfie;
    option = 3;
    tangon['NONE'] = option;
    golfie = 'NONE';
    tangon[option] = golfie;
    var _closure1_slot2 = tangon;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/native/VoiceActionUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['DominantMuteState'] = tangon;
    tangon = function(argFoo) { // Original name: createMuteHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            golfie = undefined;
            if(!(entity === golfie)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = false;
 14:
            michal = _closure1_slot2;
            michal = michal.NONE;
            zuuluu = report.selfMute;
            if(!zuuluu) { _fun00002_ip = 46; continue _fun00001 }
 36:
            zuuluu = _closure1_slot2;
            michal = zuuluu.SELF_MUTE;
 46:
            if(entity) { _fun00002_ip = 76; continue _fun00001 }
 49:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 0;
            entity = oscard[entity];
            entity = zuuluu.bind(golfie)(entity);
            zuuluu = entity.handleToggleSelfMute;
            _fun00002_ip = 80; continue _fun00001;
 76:
            zuuluu = _closure1_slot3;
 80:
            entity = report.suppress;
            if(!entity) { _fun00002_ip = 124; continue _fun00001 }
 89:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            entity = 0;
            entity = option[entity];
            entity = oscard.bind(golfie)(entity);
            zuuluu = entity.showSuppressedAlert;
            oscard = _closure1_slot2;
            michal = oscard.SUPPRESS;
 124:
            entity = report.mute;
            if(!entity) { _fun00002_ip = 168; continue _fun00001 }
 133:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            entity = 0;
            entity = option[entity];
            entity = oscard.bind(golfie)(entity);
            zuuluu = entity.showServerMuteAlert;
            tangon = _closure1_slot2;
            michal = tangon.SERVER_MUTE;
 168:
            entity = {};
            tangon = report.selfMute;
            if(tangon) { _fun00002_ip = 185; continue _fun00001 }
 179:
            tangon = report.mute;
 185:
            if(tangon) { _fun00002_ip = 194; continue _fun00001 }
 188:
            tangon = report.suppress;
 194:
            entity['mute'] = tangon;
            entity['onPress'] = zuuluu;
            entity['dominantMuteState'] = michal;
            return entity;
        }
    };
    zuuluu['createMuteHandler'] = tangon;
    michal = function(argFoo) { // Original name: createDeafHandler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = 0;
            michal = michal[oscard];
            report = undefined;
            michal = zuuluu.bind(report)(michal);
            michal = michal.handleToggleSelfDeaf;
            zuuluu = tangon.deaf;
            if(!zuuluu) { _fun00004_ip = 65; continue _fun00003 }
 42:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            entity = zuuluu.bind(report)(entity);
            michal = entity.showServerDeafenAlert;
 65:
            entity = {};
            zuuluu = tangon.selfDeaf;
            if(zuuluu) { _fun00004_ip = 82; continue _fun00003 }
 76:
            zuuluu = tangon.deaf;
 82:
            entity['deaf'] = zuuluu;
            entity['onPress'] = michal;
            return entity;
        }
    };
    zuuluu['createDeafHandler'] = michal;
    return entity;
})();