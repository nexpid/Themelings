// app/hooks/useIsSpeaking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _checkIsSpeaking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            michal = argBaz;
            if(entity) { _fun00002_ip = 15; continue _fun00001 }
 12:
            entity = zuuluu;
 15:
            if(entity) { _fun00002_ip = 21; continue _fun00001 }
 18:
            entity = michal;
 21:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'hooks/useIsSpeaking.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsSpeaking
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.userId;
            var _closure2_slot0 = michal;
            michal = zuuluu.checkSoundSharing;
            report = undefined;
            if(!(michal === report)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            michal = false;
 28:
            var _closure2_slot1 = michal;
            michal = zuuluu.checkSoundboardSounds;
            if(!(michal === report)) { _fun00004_ip = 44; continue _fun00003 }
 42:
            michal = true;
 44:
            var _closure2_slot2 = michal;
            michal = zuuluu.checkIsMuted;
            if(!(michal === report)) { _fun00004_ip = 60; continue _fun00003 }
 58:
            michal = false;
 60:
            zuuluu = zuuluu.context;
            var _closure2_slot3 = zuuluu;
            var _closure2_slot4 = report;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            verify = 4;
            zuuluu = zuuluu[verify];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot5;
            tangon = new Array(2);
            tangon[0] = zuuluu;
            zuuluu = _closure1_slot3;
            tangon[1] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot3;
                    entity = zuuluu.getVoiceChannelId;
                    report = entity.bind(zuuluu)();
                    entity = null;
                    zuuluu = entity != report;
                    if(!zuuluu) { _fun00006_ip = 49; continue _fun00005 }
 26:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getVoiceStateForChannel;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(report, michal);
 49:
                    return entity;
                }
            };
            golfie = golfie.bind(option)(tangon, zuuluu);
            if(!michal) { _fun00004_ip = 176; continue _fun00003 }
 135:
            tangon = null;
            option = tangon == golfie;
            zuuluu = undefined;
            if(option) { _fun00004_ip = 152; continue _fun00003 }
 146:
            zuuluu = golfie.mute;
 152:
            if(zuuluu) { _fun00004_ip = 173; continue _fun00003 }
 155:
            option = tangon == golfie;
            tangon = undefined;
            if(option) { _fun00004_ip = 170; continue _fun00003 }
 164:
            tangon = golfie.selfMute;
 170:
            zuuluu = tangon;
 173:
            michal = zuuluu;
 176:
            _closure2_slot4 = michal;
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = golfie[verify];
            yankee = option.bind(report)(michal);
            offset = yankee.useStateFromStores;
            michal = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = michal;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = _closure1_slot4;
                    tangon = report.isSpeaking;
                    zuuluu = _closure2_slot0;
                    entity = _closure2_slot3;
                    entity = tangon.bind(report)(zuuluu, entity);
                    if(!entity) { _fun00008_ip = 40; continue _fun00007 }
 33:
                    michal = _closure2_slot4;
                    entity = !michal;
 40:
                    return entity;
                }
            };
            tangon = offset.bind(yankee)(tangon, zuuluu);
            zuuluu = golfie[verify];
            yankee = option.bind(report)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.isSoundSharing;
                    entity = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(entity);
                    if(!entity) { _fun00010_ip = 32; continue _fun00009 }
 28:
                    entity = _closure2_slot1;
 32:
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(zuuluu, michal);
            michal = _closure1_slot6;
            golfie = golfie[verify];
            option = option.bind(report)(golfie);
            golfie = option.useStateFromStores;
            verify = _closure1_slot2;
            oscard = new Array(1);
            oscard[0] = verify;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.isUserPlayingSounds;
                    entity = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(entity);
                    if(!entity) { _fun00012_ip = 32; continue _fun00011 }
 28:
                    entity = _closure2_slot2;
 32:
                    return entity;
                }
            };
            entity = golfie.bind(option)(oscard, entity);
            entity = michal.bind(report)(tangon, entity, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getIsSpeaking
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = arguments[1];
            option = tangon.userId;
            entity = tangon.checkSoundSharing;
            report = undefined;
            if(!(entity === report)) { _fun00014_ip = 25; continue _fun00013 }
 23:
            entity = false;
 25:
            oscard = tangon.checkSoundboardSounds;
            if(!(oscard === report)) { _fun00014_ip = 37; continue _fun00013 }
 35:
            oscard = true;
 37:
            michal = tangon.checkIsMuted;
            if(!(michal === report)) { _fun00014_ip = 49; continue _fun00013 }
 47:
            michal = false;
 49:
            verify = tangon.context;
            if(!(zuuluu === report)) { _fun00014_ip = 100; continue _fun00013 }
 58:
            offset = _closure1_slot5;
            tangon = new Array(4);
            tangon[0] = offset;
            offset = _closure1_slot3;
            tangon[1] = offset;
            offset = _closure1_slot4;
            tangon[2] = offset;
            golfie = _closure1_slot2;
            tangon[3] = golfie;
            zuuluu = tangon;
 100:
            romeon = zuuluu;
            tangon = romeon[Symbol.iterator];
            romeon = tangon().next;
            zuuluu = romeon().value;
            golfie = tangon;
            yankee = golfie === report;
            foxtra = undefined;
            if(yankee) { _fun00014_ip = 125; continue _fun00013 }
 122:
            foxtra = zuuluu;
 125:
            offset = undefined;
            if(yankee) { _fun00014_ip = 155; continue _fun00013 }
 130:
            golfie = romeon().value;
            zuuluu = tangon;
            zuuluu = zuuluu === report;
            offset = undefined;
            yankee = zuuluu;
            if(zuuluu) { _fun00014_ip = 155; continue _fun00013 }
 149:
            offset = golfie;
            yankee = zuuluu;
 155:
            zuuluu = undefined;
            if(yankee) { _fun00014_ip = 185; continue _fun00013 }
 160:
            backup = romeon().value;
            golfie = tangon;
            golfie = golfie === report;
            zuuluu = undefined;
            yankee = golfie;
            if(golfie) { _fun00014_ip = 185; continue _fun00013 }
 179:
            zuuluu = backup;
            yankee = golfie;
 185:
            golfie = undefined;
            if(yankee) { _fun00014_ip = 215; continue _fun00013 }
 190:
            backup = romeon().value;
            romeon = tangon;
            romeon = romeon === report;
            golfie = undefined;
            yankee = romeon;
            if(romeon) { _fun00014_ip = 215; continue _fun00013 }
 209:
            golfie = backup;
            yankee = romeon;
 215:
            if(yankee) { _fun00014_ip = 221; continue _fun00013 }
 218:
            tangon.return();
 221:
            tangon = offset.getVoiceChannelId;
            romeon = tangon.bind(offset)();
            offset = null;
            tangon = offset != romeon;
            yankee = null;
            if(!tangon) { _fun00014_ip = 254; continue _fun00013 }
 242:
            tangon = foxtra.getVoiceStateForChannel;
            yankee = tangon.bind(foxtra)(romeon, option);
 254:
            if(!michal) { _fun00014_ip = 296; continue _fun00013 }
 257:
            romeon = offset == yankee;
            tangon = undefined;
            if(romeon) { _fun00014_ip = 272; continue _fun00013 }
 266:
            tangon = yankee.mute;
 272:
            if(tangon) { _fun00014_ip = 293; continue _fun00013 }
 275:
            romeon = offset == yankee;
            offset = undefined;
            if(romeon) { _fun00014_ip = 290; continue _fun00013 }
 284:
            offset = yankee.selfMute;
 290:
            tangon = offset;
 293:
            michal = tangon;
 296:
            tangon = zuuluu.isSpeaking;
            tangon = tangon.bind(zuuluu)(option, verify);
            if(!tangon) { _fun00014_ip = 314; continue _fun00013 }
 311:
            tangon = !michal;
 314:
            michal = zuuluu.isSoundSharing;
            zuuluu = michal.bind(zuuluu)(option);
            if(!zuuluu) { _fun00014_ip = 331; continue _fun00013 }
 328:
            zuuluu = entity;
 331:
            michal = _closure1_slot6;
            entity = golfie.isUserPlayingSounds;
            entity = entity.bind(golfie)(option);
            if(!entity) { _fun00014_ip = 355; continue _fun00013 }
 352:
            entity = oscard;
 355:
            entity = michal.bind(report)(tangon, entity, zuuluu);
            return entity;
        }
    };
    zuuluu['getIsSpeaking'] = michal;
    return entity;
})();