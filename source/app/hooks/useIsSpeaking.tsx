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
            entity = argFoo;
            option = entity.userId;
            michal = entity.checkSoundSharing;
            report = undefined;
            if(!(michal === report)) { _fun00014_ip = 22; continue _fun00013 }
 20:
            michal = false;
 22:
            oscard = entity.checkSoundboardSounds;
            if(!(oscard === report)) { _fun00014_ip = 34; continue _fun00013 }
 32:
            oscard = true;
 34:
            zuuluu = entity.checkIsMuted;
            if(!(zuuluu === report)) { _fun00014_ip = 46; continue _fun00013 }
 44:
            zuuluu = false;
 46:
            verify = entity.context;
            golfie = _closure1_slot3;
            tangon = golfie.getVoiceChannelId;
            romeon = tangon.bind(golfie)();
            golfie = null;
            tangon = golfie != romeon;
            offset = null;
            if(!tangon) { _fun00014_ip = 95; continue _fun00013 }
 79:
            yankee = _closure1_slot5;
            tangon = yankee.getVoiceStateForChannel;
            offset = tangon.bind(yankee)(romeon, option);
 95:
            if(!zuuluu) { _fun00014_ip = 137; continue _fun00013 }
 98:
            yankee = golfie == offset;
            tangon = undefined;
            if(yankee) { _fun00014_ip = 113; continue _fun00013 }
 107:
            tangon = offset.mute;
 113:
            if(tangon) { _fun00014_ip = 134; continue _fun00013 }
 116:
            yankee = golfie == offset;
            golfie = undefined;
            if(yankee) { _fun00014_ip = 131; continue _fun00013 }
 125:
            golfie = offset.selfMute;
 131:
            tangon = golfie;
 134:
            zuuluu = tangon;
 137:
            golfie = _closure1_slot4;
            tangon = golfie.isSpeaking;
            tangon = tangon.bind(golfie)(option, verify);
            if(!tangon) { _fun00014_ip = 159; continue _fun00013 }
 156:
            tangon = !zuuluu;
 159:
            golfie = _closure1_slot4;
            zuuluu = golfie.isSoundSharing;
            zuuluu = zuuluu.bind(golfie)(option);
            if(!zuuluu) { _fun00014_ip = 180; continue _fun00013 }
 177:
            zuuluu = michal;
 180:
            michal = _closure1_slot6;
            golfie = _closure1_slot2;
            entity = golfie.isUserPlayingSounds;
            entity = entity.bind(golfie)(option);
            if(!entity) { _fun00014_ip = 205; continue _fun00013 }
 202:
            entity = oscard;
 205:
            entity = michal.bind(report)(tangon, entity, zuuluu);
            return entity;
        }
    };
    zuuluu['getIsSpeaking'] = michal;
    return entity;
})();