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
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = offset == zuuluu;
            tangon = undefined;
            if(michal) { _fun00002_ip = 318; continue _fun00001 }
 313:
            tangon = zuuluu.type;
 318:
            michal = _closure1_slot5;
            michal = michal.STREAM;
            oscard = tangon !== michal;
            if(!oscard) { _fun00002_ip = 363; continue _fun00001 }
 335:
            michal = offset == zuuluu;
            tangon = undefined;
            if(michal) { _fun00002_ip = 349; continue _fun00001 }
 344:
            tangon = zuuluu.type;
 349:
            michal = _closure1_slot5;
            michal = michal.ACTIVITY;
            oscard = tangon !== michal;
 363:
            if(!oscard) { _fun00002_ip = 406; continue _fun00001 }
 366:
            michal = entity.focusedId;
            michal = offset == michal;
            if(michal) { _fun00002_ip = 403; continue _fun00001 }
 379:
            tangon = offset == zuuluu;
            report = undefined;
            if(tangon) { _fun00002_ip = 393; continue _fun00001 }
 388:
            report = zuuluu.id;
 393:
            tangon = entity.focusedId;
            michal = report !== tangon;
 403:
            oscard = michal;
 406:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[romeon];
            report = tangon.bind(yankee)(michal);
            tangon = report.computePIPSize;
            foxtra = backup.getTargetDimensions;
            kiloes = offset == zuuluu;
            michal = undefined;
            if(kiloes) { _fun00002_ip = 449; continue _fun00001 }
 444:
            michal = zuuluu.id;
 449:
            michal = foxtra.bind(backup)(michal);
            if(!(offset == michal)) { _fun00002_ip = 481; continue _fun00001 }
 458:
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            verify = verify[romeon];
            verify = offset.bind(yankee)(verify);
            michal = verify.SquarePIPReferenceDimensions;
 481:
            if(!golfie) { _fun00002_ip = 487; continue _fun00001 }
 484:
            golfie = option;
 487:
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