// app/modules/voice_panel/native/utils/calculatePIPState.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelModes;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ParticipantTypes;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/utils/calculatePIPState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: calculatePIPState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            backup = argBar;
            entity = argGra;
            michal = entity.focusedId;
            offset = null;
            option = offset != michal;
            if(!option) { _fun00002_ip = 77; continue _fun00001 }
 24:
            report = _closure1_slot2;
            tangon = report.getParticipant;
            zuuluu = entity.focusedId;
            tangon = tangon.bind(report)(oscard, zuuluu);
            report = offset == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 63; continue _fun00001 }
 58:
            zuuluu = tangon.type;
 63:
            michal = _closure1_slot5;
            michal = michal.ACTIVITY;
            option = zuuluu === michal;
 77:
            michal = global;
            michal = michal.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            update = zuuluu;
            michal = new update[michal](echoed);
            report = michal instanceof Object ? michal : zuuluu;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentUserActiveStream;
            golfie = michal.bind(zuuluu)();
            if(!(offset != golfie)) { _fun00002_ip = 169; continue _fun00001 }
 126:
            zuuluu = report.add;
            yankee = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 4;
            tangon = tangon[michal];
            michal = undefined;
            tangon = yankee.bind(michal)(tangon);
            michal = tangon.encodeStreamKey;
            michal = michal.bind(tangon)(golfie);
            michal = zuuluu.bind(report)(michal);
 169:
            zuuluu = entity.mode;
            michal = _closure1_slot4;
            michal = michal.PANEL;
            golfie = zuuluu === michal;
            michal = entity.focusedId;
            michal = offset != michal;
            if(!michal) { _fun00002_ip = 204; continue _fun00001 }
 201:
            michal = golfie;
 204:
            if(!michal) { _fun00002_ip = 223; continue _fun00001 }
 207:
            zuuluu = report.add;
            michal = entity.focusedId;
            michal = zuuluu.bind(report)(michal);
 223:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            romeon = 5;
            michal = michal[romeon];
            yankee = undefined;
            tangon = zuuluu.bind(yankee)(michal);
            zuuluu = tangon.computePIPParticipantToShow;
            michal = {};
            michal['channelId'] = oscard;
            oscard = argBaz;
            michal['lastParticipantId'] = oscard;
            oscard = argCor;
            michal['speakingUserId'] = oscard;
            oscard = entity.focusedId;
            michal['focusedParticipantId'] = oscard;
            michal['blockList'] = report;
            report = entity.mode;
            michal['panelMode'] = report;
            report = entity.showSecondaryPIP;
            michal['showSecondaryPIP'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = offset == zuuluu;
            tangon = undefined;
            if(michal) { _fun00002_ip = 329; continue _fun00001 }
 324:
            tangon = zuuluu.type;
 329:
            michal = _closure1_slot5;
            michal = michal.STREAM;
            oscard = tangon !== michal;
            if(!oscard) { _fun00002_ip = 374; continue _fun00001 }
 346:
            michal = offset == zuuluu;
            tangon = undefined;
            if(michal) { _fun00002_ip = 360; continue _fun00001 }
 355:
            tangon = zuuluu.type;
 360:
            michal = _closure1_slot5;
            michal = michal.ACTIVITY;
            oscard = tangon !== michal;
 374:
            if(!oscard) { _fun00002_ip = 417; continue _fun00001 }
 377:
            michal = entity.focusedId;
            michal = offset == michal;
            if(michal) { _fun00002_ip = 414; continue _fun00001 }
 390:
            tangon = offset == zuuluu;
            report = undefined;
            if(tangon) { _fun00002_ip = 404; continue _fun00001 }
 399:
            report = zuuluu.id;
 404:
            tangon = entity.focusedId;
            michal = report !== tangon;
 414:
            oscard = michal;
 417:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[romeon];
            report = tangon.bind(yankee)(michal);
            tangon = report.computePIPSize;
            foxtra = backup.getTargetDimensions;
            kiloes = offset == zuuluu;
            michal = undefined;
            if(kiloes) { _fun00002_ip = 460; continue _fun00001 }
 455:
            michal = zuuluu.id;
 460:
            michal = foxtra.bind(backup)(michal);
            if(!(offset == michal)) { _fun00002_ip = 492; continue _fun00001 }
 469:
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            verify = verify[romeon];
            verify = offset.bind(yankee)(verify);
            michal = verify.SquarePIPReferenceDimensions;
 492:
            if(!golfie) { _fun00002_ip = 498; continue _fun00001 }
 495:
            golfie = option;
 498:
            sizing = entity.showSecondaryPIP;
            update = report;
            echoed = michal;
            result = oscard;
            output = golfie;
            michal = update[tangon](echoed, result, output, sizing, kiloes);
            entity = {};
            entity['participant'] = zuuluu;
            entity['dimensions'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();