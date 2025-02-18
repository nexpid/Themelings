// app/modules/voice_panel/native/utils/VoiceStateIconUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: isStableVoiceStateEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = oscard === report;
            if(entity) { _fun00002_ip = 63; continue _fun00001 }
 13:
            zuuluu = null;
            michal = zuuluu != oscard;
            if(!michal) { _fun00002_ip = 26; continue _fun00001 }
 22:
            michal = zuuluu != report;
 26:
            if(!michal) { _fun00002_ip = 60; continue _fun00001 }
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
    var _closure1_slot7 = entity;
    report = function(argFoo, argBar) { // Original name: useStableVoiceParticipant
        option = argFoo;
        golfie = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot3;
        tangon = new Array(2);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot4;
        tangon[1] = zuuluu;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        verify = _closure1_slot7;
        yankee = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 44; continue _fun00003 }
 13:
                oscard = _closure1_slot4;
                report = oscard.getVoiceState;
                tangon = _closure2_slot1;
                michal = _closure2_slot0;
                michal = report.bind(oscard)(tangon, michal);
                if(!(entity == michal)) { _fun00004_ip = 48; continue _fun00003 }
 44:
                entity = undefined;
                return entity;
 48:
                entity = {};
                tangon = michal.deaf;
                entity['deaf'] = tangon;
                tangon = michal.selfDeaf;
                entity['selfDeaf'] = tangon;
                tangon = michal.mute;
                entity['mute'] = tangon;
                report = _closure1_slot3;
                tangon = report.isLocalMute;
                zuuluu = michal.userId;
                zuuluu = tangon.bind(report)(zuuluu);
                entity['isLocalMute'] = zuuluu;
                michal = michal.selfMute;
                entity['selfMute'] = michal;
                return entity;
            }
        };
        foxtra = oscard;
        romeon = tangon;
        offset = zuuluu;
        entity = foxtra[report](romeon, yankee, offset, verify, option);
        return entity;
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo, argBar) { // Original name: useStableVideoState
        oscard = argFoo;
        golfie = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        option = _closure1_slot3;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        michal = _closure1_slot4;
        zuuluu[1] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                tangon = michal != zuuluu;
                zuuluu = undefined;
                if(!tangon) { _fun00006_ip = 45; continue _fun00005 }
 18:
                golfie = _closure1_slot4;
                oscard = golfie.getVoiceState;
                report = _closure2_slot1;
                tangon = _closure2_slot0;
                zuuluu = oscard.bind(golfie)(report, tangon);
 45:
                entity = _closure2_slot0;
                if(!(michal != entity)) { _fun00006_ip = 139; continue _fun00005 }
 53:
                if(!(michal != zuuluu)) { _fun00006_ip = 139; continue _fun00005 }
 57:
                oscard = _closure1_slot3;
                report = oscard.isLocalVideoDisabled;
                entity = zuuluu.userId;
                report = report.bind(oscard)(entity);
                entity = {};
                oscard = zuuluu.selfVideo;
                entity['selfVideo'] = oscard;
                michal = null;
                if(!report) { _fun00006_ip = 132; continue _fun00005 }
 98:
                report = _closure1_slot3;
                tangon = report.isLocalVideoAutoDisabled;
                zuuluu = zuuluu.userId;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = 'manual';
                if(!tangon) { _fun00006_ip = 129; continue _fun00005 }
 125:
                zuuluu = 'auto';
 129:
                michal = zuuluu;
 132:
                entity['localVideoDisabledState'] = michal;
                return entity;
 139:
                entity = {'selfVideo': false, 'localVideoDisabledState': null};
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot9 = tangon;
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, oscard);
    backup = 0;
    oscard = offset[backup];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    foxtra = 1;
    oscard = offset[foxtra];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    golfie = {};
    golfie['DEAFENED_SERVER'] = backup;
    oscard = 'DEAFENED_SERVER';
    golfie[backup] = oscard;
    golfie['DEAFENED'] = foxtra;
    oscard = 'DEAFENED';
    golfie[foxtra] = oscard;
    romeon = 2;
    golfie['MUTED_SERVER'] = romeon;
    oscard = 'MUTED_SERVER';
    golfie[romeon] = oscard;
    option = 3;
    golfie['MUTED_LOCAL'] = option;
    oscard = 'MUTED_LOCAL';
    golfie[option] = oscard;
    option = 4;
    golfie['MUTED'] = option;
    oscard = 'MUTED';
    golfie[option] = oscard;
    var _closure1_slot5 = golfie;
    oscard = {};
    oscard['VIDEO_DISABLED_LOCAL_AUTO'] = backup;
    yankee = 'VIDEO_DISABLED_LOCAL_AUTO';
    oscard[backup] = yankee;
    oscard['VIDEO_DISABLED_LOCAL'] = foxtra;
    yankee = 'VIDEO_DISABLED_LOCAL';
    oscard[foxtra] = yankee;
    oscard['VIDEO_ACTIVE'] = romeon;
    yankee = 'VIDEO_ACTIVE';
    oscard[romeon] = yankee;
    var _closure1_slot6 = oscard;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/voice_panel/native/utils/VoiceStateIconUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['MuteDeafenIconState'] = golfie;
    zuuluu['VideoIconState'] = oscard;
    zuuluu['useStableVoiceParticipant'] = report;
    report = function(argFoo, argBar) { // Original name: useMuteDeafenIconState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = _closure1_slot8;
            tangon = undefined;
            michal = argFoo;
            entity = argBar;
            tangon = report.bind(tangon)(michal, entity);
            michal = null;
            report = michal == tangon;
            entity = null;
            if(report) { _fun00008_ip = 140; continue _fun00007 }
 32:
            report = tangon.deaf;
            if(report) { _fun00008_ip = 127; continue _fun00007 }
 41:
            report = tangon.selfDeaf;
            if(report) { _fun00008_ip = 115; continue _fun00007 }
 50:
            report = tangon.mute;
            if(report) { _fun00008_ip = 103; continue _fun00007 }
 59:
            report = tangon.isLocalMute;
            if(report) { _fun00008_ip = 91; continue _fun00007 }
 68:
            tangon = tangon.selfMute;
            michal = null;
            if(!tangon) { _fun00008_ip = 89; continue _fun00007 }
 79:
            tangon = _closure1_slot5;
            michal = tangon.MUTED;
 89:
            _fun00008_ip = 101; continue _fun00007;
 91:
            tangon = _closure1_slot5;
            michal = tangon.MUTED_LOCAL;
 101:
            _fun00008_ip = 113; continue _fun00007;
 103:
            tangon = _closure1_slot5;
            michal = tangon.MUTED_SERVER;
 113:
            _fun00008_ip = 125; continue _fun00007;
 115:
            tangon = _closure1_slot5;
            michal = tangon.DEAFENED;
 125:
            _fun00008_ip = 137; continue _fun00007;
 127:
            zuuluu = _closure1_slot5;
            michal = zuuluu.DEAFENED_SERVER;
 137:
            entity = michal;
 140:
            return entity;
        }
    };
    zuuluu['useMuteDeafenIconState'] = report;
    zuuluu['useStableVideoState'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useVideoIconState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = _closure1_slot9;
            zuuluu = undefined;
            michal = argFoo;
            entity = argBar;
            zuuluu = report.bind(zuuluu)(michal, entity);
            michal = null;
            report = michal == zuuluu;
            entity = null;
            if(report) { _fun00010_ip = 111; continue _fun00009 }
 32:
            report = zuuluu.selfVideo;
            michal = null;
            if(!report) { _fun00010_ip = 108; continue _fun00009 }
 43:
            oscard = zuuluu.localVideoDisabledState;
            report = 'auto';
            if(!(report !== oscard)) { _fun00010_ip = 95; continue _fun00009 }
 57:
            report = zuuluu.localVideoDisabledState;
            zuuluu = 'manual';
            if(!(zuuluu !== report)) { _fun00010_ip = 83; continue _fun00009 }
 71:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.VIDEO_ACTIVE;
            _fun00010_ip = 93; continue _fun00009;
 83:
            report = _closure1_slot6;
            zuuluu = report.VIDEO_DISABLED_LOCAL;
 93:
            _fun00010_ip = 105; continue _fun00009;
 95:
            tangon = _closure1_slot6;
            zuuluu = tangon.VIDEO_DISABLED_LOCAL_AUTO;
 105:
            michal = zuuluu;
 108:
            entity = michal;
 111:
            return entity;
        }
    };
    zuuluu['useVideoIconState'] = michal;
    return entity;
})();