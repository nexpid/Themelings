// app/modules/voice_messages/downsampleWaveform.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_messages/downsampleWaveform.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: downsampleWaveform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            option = 0;
            michal = michal[option];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            michal = entity.length;
            zuuluu = michal >= verify;
            michal = 'Waveform smaller than samples';
            michal = tangon.bind(report)(zuuluu, michal);
            michal = entity.length;
            if(!(michal !== verify)) { _fun00002_ip = 230; continue _fun00001 }
 63:
            michal = entity.length;
            golfie = michal / verify;
            michal = new Array(0);
            zuuluu = michal.length;
            zuuluu = zuuluu < verify;
            oscard = global;
            report = 1;
            tangon = 0;
            if(!zuuluu) { _fun00002_ip = 228; continue _fun00001 }
 98:
            yankee = oscard.Math;
            offset = yankee.round;
            zuuluu = michal.length;
            zuuluu = zuuluu + report;
            zuuluu = zuuluu * golfie;
            offset = offset.bind(yankee)(zuuluu);
            yankee = tangon < offset;
            romeon = 0;
            zuuluu = 0;
            if(!yankee) { _fun00002_ip = 203; continue _fun00001 }
 138:
            yankee = entity.length;
            yankee = tangon < yankee;
            backup = 0;
            foxtra = 0;
            romeon = 0;
            zuuluu = 0;
            if(!yankee) { _fun00002_ip = 203; continue _fun00001 }
 158:
            yankee = entity[tangon];
            sizing = backup + yankee;
            kiloes = foxtra + 1;
            tangon = tangon + 1;
            romeon = sizing;
            zuuluu = kiloes;
            if(!(tangon < offset)) { _fun00002_ip = 203; continue _fun00001 }
 182:
            yankee = entity.length;
            backup = sizing;
            foxtra = kiloes;
            romeon = backup;
            zuuluu = foxtra;
            if(tangon < yankee) { _fun00002_ip = 158; continue _fun00001 }
 203:
            yankee = michal.length;
            zuuluu = romeon / zuuluu;
            michal[yankee] = zuuluu;
            zuuluu = michal.length;
            tangon = offset;
            if(zuuluu < verify) { _fun00002_ip = 98; continue _fun00001 }
 228:
            return michal;
 230:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();