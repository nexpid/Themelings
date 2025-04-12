// app/actions/AudioActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: getInputDeviceName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getInputDevices;
            michal = michal.bind(zuuluu)();
            zuuluu = _closure1_slot6;
            entity = zuuluu.getInputDeviceId;
            entity = entity.bind(zuuluu)();
            michal = michal[entity];
            entity = null;
            zuuluu = entity != michal;
            entity = '';
            if(!zuuluu) { _fun00002_ip = 53; continue _fun00001 }
 48:
            entity = michal.name;
 53:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: trackDeviceChanged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            echoed = argBar;
            backup = argBaz;
            zuuluu = arguments[4];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            zuuluu = {};
 20:
            yankee = zuuluu.location;
            offset = zuuluu.analyticsLocations;
            if(!(echoed !== backup)) { _fun00004_ip = 328; continue _fun00003 }
 38:
            tangon = _closure1_slot7;
            zuuluu = tangon.getVoiceChannelId;
            report = zuuluu.bind(tangon)();
            option = null;
            zuuluu = option != report;
            verify = null;
            if(!zuuluu) { _fun00004_ip = 80; continue _fun00003 }
 66:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            verify = zuuluu.bind(tangon)(report);
 80:
            update = michal[echoed];
            output = michal[backup];
            zuuluu = _closure1_slot6;
            michal = zuuluu.getMediaEngine;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.getAudioSubsystem;
            golfie = michal.bind(zuuluu)();
            zuuluu = _closure1_slot6;
            michal = zuuluu.getMediaEngine;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.getAudioLayer;
            oscard = michal.bind(zuuluu)();
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot10;
            zuuluu = michal.MEDIA_DEVICE_CHANGED;
            michal = {};
            result = _closure1_slot4;
            kiloes = result.getCertifiedDeviceName;
            source = option != update;
            sizing = '';
            foxtra = sizing;
            if(!source) { _fun00004_ip = 202; continue _fun00003 }
 197:
            foxtra = update.name;
 202:
            foxtra = kiloes.bind(result)(echoed, foxtra);
            michal['device_from_name'] = foxtra;
            kiloes = _closure1_slot4;
            foxtra = kiloes.getCertifiedDeviceName;
            result = option != output;
            if(!result) { _fun00004_ip = 237; continue _fun00003 }
 232:
            sizing = output.name;
 237:
            foxtra = foxtra.bind(kiloes)(backup, sizing);
            michal['device_to_name'] = foxtra;
            foxtra = argCor;
            michal['device_type'] = foxtra;
            foxtra = _closure1_slot4;
            romeon = foxtra.isCertified;
            romeon = romeon.bind(foxtra)(backup);
            michal['device_is_certified'] = romeon;
            michal['location'] = yankee;
            michal['location_stack'] = offset;
            offset = option == verify;
            option = undefined;
            if(offset) { _fun00004_ip = 307; continue _fun00003 }
 302:
            option = verify.type;
 307:
            michal['voice_channel_type'] = option;
            michal['audio_subsystem'] = golfie;
            michal['audio_layer'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 328:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.InputModes;
    var _closure1_slot9 = option;
    michal = michal.AnalyticEvents;
    var _closure1_slot10 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.SoundOutputChannel;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.MediaEngineContextTypes;
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    option = golfie.bind(entity)(michal);
    michal = option.prototype;
    golfie = Object.create(michal, {constructor: {value: option}});
    romeon = 'AudioActionCreators';
    foxtra = golfie;
    michal = new foxtra[option](romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot12 = michal;
    golfie = {};
    michal = function() { // Original name: isNotSupported
        entity = false;
        return entity;
    };
    golfie['isNotSupported'] = michal;
    michal = function() { // Original name: enable
        entity = global;
        zuuluu = entity.Promise;
        michal = zuuluu.resolve;
        entity = true;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['enable'] = michal;
    michal = function() { // Original name: trackToggleSelfMute
        entity = undefined;
        return entity;
    };
    golfie['trackToggleSelfMute'] = michal;
    michal = function() { // Original name: trackToggleSelfDeaf
        entity = undefined;
        return entity;
    };
    golfie['trackToggleSelfDeaf'] = michal;
    michal = golfie.isNotSupported;
    var _closure1_slot13 = michal;
    michal = golfie.trackToggleSelfMute;
    var _closure1_slot14 = michal;
    michal = golfie.trackToggleSelfDeaf;
    var _closure1_slot15 = michal;
    michal = {};
    golfie = golfie.enable;
    michal['enable'] = golfie;
    golfie = function() { // Original name: toggleSelfMute
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            option = this;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            entity = {};
 14:
            golfie = entity.context;
            if(!(golfie === tangon)) { _fun00006_ip = 36; continue _fun00005 }
 23:
            michal = _closure1_slot11;
            golfie = michal.DEFAULT;
 36:
            oscard = entity.syncRemote;
            if(!(oscard === tangon)) { _fun00006_ip = 48; continue _fun00005 }
 46:
            oscard = true;
 48:
            offset = entity.usedKeybind;
            if(!(offset === tangon)) { _fun00006_ip = 60; continue _fun00005 }
 58:
            offset = false;
 60:
            report = entity.playSoundEffect;
            if(!(report === tangon)) { _fun00006_ip = 72; continue _fun00005 }
 70:
            report = true;
 72:
            verify = entity.location;
            entity = _closure1_slot13;
            entity = entity.bind(tangon)();
            if(entity) { _fun00006_ip = 278; continue _fun00005 }
 94:
            zuuluu = _closure1_slot14;
            entity = {};
            entity['usedKeybind'] = offset;
            entity['location'] = verify;
            entity = zuuluu.bind(tangon)(entity);
            if(!report) { _fun00006_ip = 134; continue _fun00005 }
 117:
            zuuluu = _closure1_slot6;
            entity = zuuluu.hasActiveCallKitCall;
            entity = entity.bind(zuuluu)();
            report = !entity;
 134:
            zuuluu = _closure1_slot8;
            entity = zuuluu.getCurrentUser;
            verify = entity.bind(zuuluu)();
            entity = null;
            entity = entity != verify;
            if(!entity) { _fun00006_ip = 166; continue _fun00005 }
 156:
            zuuluu = verify.isStaff;
            entity = zuuluu.bind(verify)();
 166:
            if(!entity) { _fun00006_ip = 190; continue _fun00005 }
 169:
            verify = _closure1_slot12;
            zuuluu = verify.info;
            entity = 'Toggling self mute';
            entity = zuuluu.bind(verify)(entity);
 190:
            zuuluu = _closure1_slot6;
            entity = zuuluu.isEnabled;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00006_ip = 222; continue _fun00005 }
 207:
            zuuluu = option.enable;
            entity = true;
            entity = zuuluu.bind(option)(entity);
            _fun00006_ip = 276; continue _fun00005;
 222:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 11;
            michal = option[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'AUDIO_TOGGLE_SELF_MUTE';
            michal['type'] = option;
            michal['context'] = golfie;
            michal['syncRemote'] = oscard;
            michal['playSoundEffect'] = report;
            entity = zuuluu.bind(tangon)(michal);
 276:
            _fun00006_ip = 296; continue _fun00005;
 278:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)();
 296:
            return entity;
        }
    };
    michal['toggleSelfMute'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setSelfMute
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argBar;
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            report = true;
 14:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00008_ip = 167; continue _fun00007 }
 31:
            if(!report) { _fun00008_ip = 51; continue _fun00007 }
 34:
            tangon = _closure1_slot6;
            zuuluu = tangon.hasActiveCallKitCall;
            zuuluu = zuuluu.bind(tangon)();
            report = !zuuluu;
 51:
            tangon = _closure1_slot8;
            zuuluu = tangon.getCurrentUser;
            golfie = zuuluu.bind(tangon)();
            zuuluu = null;
            zuuluu = zuuluu != golfie;
            if(!zuuluu) { _fun00008_ip = 83; continue _fun00007 }
 73:
            tangon = golfie.isStaff;
            zuuluu = tangon.bind(golfie)();
 83:
            if(!zuuluu) { _fun00008_ip = 108; continue _fun00007 }
 86:
            golfie = _closure1_slot12;
            tangon = golfie.info;
            zuuluu = 'Setting self mute';
            zuuluu = tangon.bind(golfie)(zuuluu, oscard);
 108:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'AUDIO_SET_SELF_MUTE';
            michal['type'] = golfie;
            golfie = argFoo;
            michal['context'] = golfie;
            michal['mute'] = oscard;
            michal['playSoundEffect'] = report;
            michal = zuuluu.bind(tangon)(michal);
 167:
            return entity;
        }
    };
    michal['setSelfMute'] = golfie;
    golfie = function(argFoo) { // Original name: setTemporarySelfMute
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00010_ip = 123; continue _fun00009 }
 19:
            tangon = _closure1_slot8;
            zuuluu = tangon.getCurrentUser;
            oscard = zuuluu.bind(tangon)();
            zuuluu = null;
            zuuluu = zuuluu != oscard;
            if(!zuuluu) { _fun00010_ip = 51; continue _fun00009 }
 41:
            tangon = oscard.isStaff;
            zuuluu = tangon.bind(oscard)();
 51:
            if(!zuuluu) { _fun00010_ip = 76; continue _fun00009 }
 54:
            oscard = _closure1_slot12;
            tangon = oscard.info;
            zuuluu = 'Setting temporary self mute';
            zuuluu = tangon.bind(oscard)(zuuluu, report);
 76:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_TEMPORARY_SELF_MUTE';
            michal['type'] = oscard;
            michal['mute'] = report;
            michal = zuuluu.bind(tangon)(michal);
 123:
            return entity;
        }
    };
    michal['setTemporarySelfMute'] = golfie;
    golfie = function() { // Original name: toggleSelfDeaf
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00012_ip = 11; continue _fun00011 }
 9:
            michal = {};
 11:
            oscard = michal.context;
            if(!(oscard === entity)) { _fun00012_ip = 33; continue _fun00011 }
 20:
            zuuluu = _closure1_slot11;
            oscard = zuuluu.DEFAULT;
 33:
            report = michal.syncRemote;
            if(!(report === entity)) { _fun00012_ip = 45; continue _fun00011 }
 43:
            report = true;
 45:
            option = michal.usedKeybind;
            if(!(option === entity)) { _fun00012_ip = 57; continue _fun00011 }
 55:
            option = false;
 57:
            golfie = michal.location;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00012_ip = 145; continue _fun00011 }
 76:
            tangon = _closure1_slot15;
            zuuluu = {};
            zuuluu['usedKeybind'] = option;
            zuuluu['location'] = golfie;
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'AUDIO_TOGGLE_SELF_DEAF';
            michal['type'] = golfie;
            michal['context'] = oscard;
            michal['syncRemote'] = report;
            michal = zuuluu.bind(tangon)(michal);
 145:
            return entity;
        }
    };
    michal['toggleSelfDeaf'] = golfie;
    golfie = function(argFoo) { // Original name: toggleLocalMute
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00014_ip = 22; continue _fun00013 }
 9:
            michal = _closure1_slot11;
            report = michal.DEFAULT;
 22:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00014_ip = 87; continue _fun00013 }
 36:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_TOGGLE_LOCAL_MUTE';
            michal['type'] = oscard;
            michal['context'] = report;
            report = argFoo;
            michal['userId'] = report;
            michal = zuuluu.bind(tangon)(michal);
 87:
            return entity;
        }
    };
    michal['toggleLocalMute'] = golfie;
    golfie = function(argFoo) { // Original name: toggleLocalSoundboardMute
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00016_ip = 22; continue _fun00015 }
 9:
            michal = _closure1_slot11;
            report = michal.DEFAULT;
 22:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE';
            michal['type'] = oscard;
            michal['context'] = report;
            report = argFoo;
            michal['userId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['toggleLocalSoundboardMute'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setDisableLocalVideo
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golfie = arguments[2];
            oscard = arguments[3];
            report = arguments[4];
            entity = undefined;
            if(!(golfie === entity)) { _fun00018_ip = 28; continue _fun00017 }
 15:
            michal = _closure1_slot11;
            golfie = michal.DEFAULT;
 28:
            if(!(oscard === entity)) { _fun00018_ip = 34; continue _fun00017 }
 32:
            oscard = true;
 34:
            if(!(report === entity)) { _fun00018_ip = 40; continue _fun00017 }
 38:
            report = false;
 40:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00018_ip = 123; continue _fun00017 }
 54:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'AUDIO_SET_LOCAL_VIDEO_DISABLED';
            michal['type'] = option;
            michal['context'] = golfie;
            golfie = argFoo;
            michal['userId'] = golfie;
            golfie = argBar;
            michal['videoToggleState'] = golfie;
            michal['persist'] = oscard;
            michal['isAutomatic'] = report;
            michal = zuuluu.bind(tangon)(michal);
 123:
            return entity;
        }
    };
    michal['setDisableLocalVideo'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setLocalVolume
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            option = arguments[2];
            entity = undefined;
            if(!(option === entity)) { _fun00020_ip = 22; continue _fun00019 }
 9:
            michal = _closure1_slot11;
            option = michal.DEFAULT;
 22:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 11;
            michal = golfie[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_LOCAL_VOLUME';
            michal['type'] = oscard;
            michal['context'] = option;
            oscard = argFoo;
            michal['userId'] = oscard;
            oscard = _closure1_slot0;
            report = 12;
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.snapVolumeToDefault;
            report = argBar;
            report = oscard.bind(golfie)(report, option);
            michal['volume'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['setLocalVolume'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setLocalPan
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = arguments[3];
            entity = undefined;
            if(!(report === entity)) { _fun00022_ip = 22; continue _fun00021 }
 9:
            michal = _closure1_slot11;
            report = michal.DEFAULT;
 22:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_LOCAL_PAN';
            michal['type'] = oscard;
            michal['context'] = report;
            report = argFoo;
            michal['userId'] = report;
            report = argBar;
            michal['left'] = report;
            report = argBaz;
            michal['right'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['setLocalPan'] = golfie;
    golfie = function(argFoo) { // Original name: setMode
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            romeon = argFoo;
            golfie = arguments[1];
            verify = arguments[2];
            michal = arguments[3];
            entity = undefined;
            if(!(golfie === entity)) { _fun00024_ip = 20; continue _fun00023 }
 18:
            golfie = {};
 20:
            if(!(verify === entity)) { _fun00024_ip = 37; continue _fun00023 }
 24:
            zuuluu = _closure1_slot11;
            verify = zuuluu.DEFAULT;
 37:
            if(!(michal === entity)) { _fun00024_ip = 43; continue _fun00023 }
 41:
            michal = {};
 43:
            yankee = michal.analyticsLocations;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00024_ip = 615; continue _fun00023 }
 66:
            tangon = _closure1_slot6;
            zuuluu = tangon.getMode;
            zuuluu = zuuluu.bind(tangon)();
            report = _closure1_slot6;
            tangon = report.getModeOptions;
            option = tangon.bind(report)(verify);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 11;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.dispatch;
            tangon = {};
            offset = 'AUDIO_SET_MODE';
            tangon['type'] = offset;
            tangon['context'] = verify;
            tangon['mode'] = romeon;
            verify = {};
            result = verify;
            output = option;
            offset = copyDataProperties(result, output);
            result = verify;
            output = golfie;
            offset = copyDataProperties(result, output);
            tangon['options'] = verify;
            tangon = report.bind(oscard)(tangon);
            if(!(romeon === zuuluu)) { _fun00024_ip = 434; continue _fun00023 }
 176:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.VOICE_ACTIVITY;
            if(!(romeon === zuuluu)) { _fun00024_ip = 615; continue _fun00023 }
 193:
            if(!(option !== golfie)) { _fun00024_ip = 615; continue _fun00023 }
 200:
            tangon = _closure1_slot6;
            zuuluu = tangon.getMediaEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getAudioSubsystem;
            offset = zuuluu.bind(tangon)();
            tangon = _closure1_slot6;
            zuuluu = tangon.getMediaEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getAudioLayer;
            verify = zuuluu.bind(tangon)();
            tangon = _closure1_slot7;
            zuuluu = tangon.getVoiceChannelId;
            report = zuuluu.bind(tangon)();
            backup = null;
            zuuluu = backup != report;
            kiloes = null;
            if(!zuuluu) { _fun00024_ip = 287; continue _fun00023 }
 273:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            kiloes = zuuluu.bind(tangon)(report);
 287:
            zuuluu = _closure1_slot16;
            foxtra = zuuluu.bind(entity)();
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.track;
            zuuluu = _closure1_slot10;
            tangon = zuuluu.VOICE_ACTIVITY_THRESHOLD_CHANGED;
            zuuluu = {};
            zuuluu['location_stack'] = yankee;
            sizing = backup == kiloes;
            backup = undefined;
            if(sizing) { _fun00024_ip = 351; continue _fun00023 }
 346:
            backup = kiloes.type;
 351:
            zuuluu['voice_channel_type'] = backup;
            zuuluu['input_device_name'] = foxtra;
            zuuluu['audio_subsystem'] = offset;
            zuuluu['audio_layer'] = verify;
            verify = option.threshold;
            zuuluu['old_threshold'] = verify;
            verify = golfie.threshold;
            zuuluu['new_threshold'] = verify;
            option = option.autoThreshold;
            zuuluu['old_auto_threshold'] = option;
            golfie = golfie.autoThreshold;
            zuuluu['new_auto_threshold'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            _fun00024_ip = 615; continue _fun00023;
 434:
            tangon = _closure1_slot6;
            zuuluu = tangon.getMediaEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getAudioSubsystem;
            golfie = zuuluu.bind(tangon)();
            tangon = _closure1_slot6;
            zuuluu = tangon.getMediaEngine;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.getAudioLayer;
            oscard = zuuluu.bind(tangon)();
            tangon = _closure1_slot7;
            zuuluu = tangon.getVoiceChannelId;
            report = zuuluu.bind(tangon)();
            verify = null;
            zuuluu = verify != report;
            offset = null;
            if(!zuuluu) { _fun00024_ip = 521; continue _fun00023 }
 507:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            offset = zuuluu.bind(tangon)(report);
 521:
            zuuluu = _closure1_slot16;
            option = zuuluu.bind(entity)();
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot10;
            zuuluu = michal.VOICE_ACTIVATION_MODE_CHANGED;
            michal = {};
            michal['mode'] = romeon;
            michal['location_stack'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00024_ip = 589; continue _fun00023 }
 584:
            verify = offset.type;
 589:
            michal['voice_channel_type'] = verify;
            michal['input_device_name'] = option;
            michal['audio_subsystem'] = golfie;
            michal['audio_layer'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 615:
            return entity;
        }
    };
    michal['setMode'] = golfie;
    golfie = function(argFoo) { // Original name: setInputVolume
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            verify = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00026_ip = 14; continue _fun00025 }
 12:
            michal = {};
 14:
            option = michal.analyticsLocations;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00026_ip = 195; continue _fun00025 }
 37:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 11;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.dispatch;
            zuuluu = {};
            oscard = 'AUDIO_SET_INPUT_VOLUME';
            zuuluu['type'] = oscard;
            zuuluu['volume'] = verify;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot7;
            zuuluu = tangon.getVoiceChannelId;
            report = zuuluu.bind(tangon)();
            oscard = null;
            zuuluu = oscard != report;
            golfie = null;
            if(!zuuluu) { _fun00026_ip = 123; continue _fun00025 }
 109:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            golfie = zuuluu.bind(tangon)(report);
 123:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot10;
            zuuluu = michal.MEDIA_INPUT_VOLUME_CHANGED;
            michal = {};
            michal['volume'] = verify;
            michal['location_stack'] = option;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00026_ip = 184; continue _fun00025 }
 179:
            oscard = golfie.type;
 184:
            michal['voice_channel_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 195:
            return entity;
        }
    };
    michal['setInputVolume'] = golfie;
    golfie = function(argFoo) { // Original name: setOutputVolume
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            verify = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00028_ip = 14; continue _fun00027 }
 12:
            michal = {};
 14:
            option = michal.analyticsLocations;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00028_ip = 193; continue _fun00027 }
 37:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 11;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.dispatch;
            zuuluu = {};
            oscard = 'AUDIO_SET_OUTPUT_VOLUME';
            zuuluu['type'] = oscard;
            zuuluu['volume'] = verify;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = _closure1_slot7;
            zuuluu = tangon.getVoiceChannelId;
            report = zuuluu.bind(tangon)();
            oscard = null;
            zuuluu = oscard != report;
            golfie = null;
            if(!zuuluu) { _fun00028_ip = 121; continue _fun00027 }
 107:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            golfie = zuuluu.bind(tangon)(report);
 121:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot10;
            zuuluu = michal.MEDIA_OUTPUT_VOLUME_CHANGED;
            michal = {};
            michal['volume'] = verify;
            michal['location_stack'] = option;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00028_ip = 182; continue _fun00027 }
 177:
            oscard = golfie.type;
 182:
            michal['voice_channel_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 193:
            return entity;
        }
    };
    michal['setOutputVolume'] = golfie;
    golfie = function(argFoo) { // Original name: setInputDevice
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00030_ip = 14; continue _fun00029 }
 12:
            michal = {};
 14:
            verify = michal.location;
            zuuluu = michal.analyticsLocations;
            tangon = _closure1_slot13;
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00030_ip = 154; continue _fun00029 }
 39:
            tangon = null;
            if(!(tangon == verify)) { _fun00030_ip = 49; continue _fun00029 }
 45:
            if(!(tangon != zuuluu)) { _fun00030_ip = 110; continue _fun00029 }
 49:
            option = _closure1_slot17;
            oscard = _closure1_slot6;
            tangon = oscard.getInputDevices;
            backup = tangon.bind(oscard)();
            oscard = _closure1_slot6;
            tangon = oscard.getInputDeviceId;
            foxtra = tangon.bind(oscard)();
            tangon = {};
            tangon['location'] = verify;
            tangon['analyticsLocations'] = zuuluu;
            yankee = 'Audio Input';
            kiloes = undefined;
            romeon = report;
            offset = tangon;
            zuuluu = kiloes[option](backup, foxtra, romeon, yankee, offset, verify);
 110:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_INPUT_DEVICE';
            michal['type'] = oscard;
            michal['id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 154:
            return entity;
        }
    };
    michal['setInputDevice'] = golfie;
    golfie = function(argFoo) { // Original name: setOutputDevice
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00032_ip = 14; continue _fun00031 }
 12:
            michal = {};
 14:
            verify = michal.location;
            zuuluu = michal.analyticsLocations;
            tangon = _closure1_slot13;
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00032_ip = 154; continue _fun00031 }
 39:
            tangon = null;
            if(!(tangon == verify)) { _fun00032_ip = 49; continue _fun00031 }
 45:
            if(!(tangon != zuuluu)) { _fun00032_ip = 110; continue _fun00031 }
 49:
            option = _closure1_slot17;
            oscard = _closure1_slot6;
            tangon = oscard.getOutputDevices;
            backup = tangon.bind(oscard)();
            oscard = _closure1_slot6;
            tangon = oscard.getOutputDeviceId;
            foxtra = tangon.bind(oscard)();
            tangon = {};
            tangon['location'] = verify;
            tangon['analyticsLocations'] = zuuluu;
            yankee = 'Audio Output';
            kiloes = undefined;
            romeon = report;
            offset = tangon;
            zuuluu = kiloes[option](backup, foxtra, romeon, yankee, offset, verify);
 110:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_OUTPUT_DEVICE';
            michal['type'] = oscard;
            michal['id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 154:
            return entity;
        }
    };
    michal['setOutputDevice'] = golfie;
    golfie = function(argFoo) { // Original name: setVideoDevice
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00034_ip = 14; continue _fun00033 }
 12:
            michal = {};
 14:
            verify = michal.location;
            zuuluu = michal.analyticsLocations;
            tangon = _closure1_slot13;
            tangon = tangon.bind(entity)();
            if(tangon) { _fun00034_ip = 154; continue _fun00033 }
 39:
            tangon = null;
            if(!(tangon == verify)) { _fun00034_ip = 49; continue _fun00033 }
 45:
            if(!(tangon != zuuluu)) { _fun00034_ip = 108; continue _fun00033 }
 49:
            option = _closure1_slot17;
            oscard = _closure1_slot6;
            tangon = oscard.getVideoDevices;
            backup = tangon.bind(oscard)();
            oscard = _closure1_slot6;
            tangon = oscard.getVideoDeviceId;
            foxtra = tangon.bind(oscard)();
            tangon = {};
            tangon['location'] = verify;
            tangon['analyticsLocations'] = zuuluu;
            yankee = 'Video';
            kiloes = undefined;
            romeon = report;
            offset = tangon;
            zuuluu = kiloes[option](backup, foxtra, romeon, yankee, offset, verify);
 108:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_VIDEO_DEVICE';
            michal['type'] = oscard;
            michal['id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 154:
            return entity;
        }
    };
    michal['setVideoDevice'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setEchoCancellation
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00036_ip = 72; continue _fun00035 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUDIO_SET_ECHO_CANCELLATION';
            michal['type'] = report;
            report = argFoo;
            michal['enabled'] = report;
            report = argBar;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
 72:
            return entity;
        }
    };
    michal['setEchoCancellation'] = golfie;
    golfie = function(argFoo) { // Original name: setSidechainCompression
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00038_ip = 14; continue _fun00037 }
 12:
            michal = {};
 14:
            option = michal.analyticsLocations;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00038_ip = 124; continue _fun00037 }
 34:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getSidechainCompression;
            offset = michal.bind(oscard)();
            romeon = 'stream_attenuation_enabled';
            foxtra = undefined;
            yankee = report;
            verify = option;
            michal = foxtra[golfie](romeon, yankee, offset, verify, option);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_SIDECHAIN_COMPRESSION';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 124:
            return entity;
        }
    };
    michal['setSidechainCompression'] = golfie;
    golfie = function(argFoo) { // Original name: setSidechainCompressionStrength
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            report = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00040_ip = 14; continue _fun00039 }
 12:
            michal = {};
 14:
            option = michal.analyticsLocations;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00040_ip = 127; continue _fun00039 }
 34:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getSidechainCompressionStrength;
            offset = michal.bind(oscard)();
            romeon = 'stream_attenuation_strength';
            foxtra = undefined;
            yankee = report;
            verify = option;
            michal = foxtra[golfie](romeon, yankee, offset, verify, option);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH';
            michal['type'] = oscard;
            michal['strength'] = report;
            michal = zuuluu.bind(tangon)(michal);
 127:
            return entity;
        }
    };
    michal['setSidechainCompressionStrength'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setLoopback
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00042_ip = 73; continue _fun00041 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUDIO_SET_LOOPBACK';
            michal['type'] = report;
            report = argFoo;
            michal['loopbackReason'] = report;
            report = argBar;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 73:
            return entity;
        }
    };
    michal['setLoopback'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setNoiseSuppression
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00044_ip = 72; continue _fun00043 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUDIO_SET_NOISE_SUPPRESSION';
            michal['type'] = report;
            report = argFoo;
            michal['enabled'] = report;
            report = argBar;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
 72:
            return entity;
        }
    };
    michal['setNoiseSuppression'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setNoiseCancellation
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00046_ip = 114; continue _fun00045 }
 22:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            golfie = tangon[michal];
            verify = zuuluu.bind(entity)(golfie);
            option = verify.dispatch;
            golfie = {};
            offset = 'AUDIO_SET_NOISE_CANCELLATION';
            golfie['type'] = offset;
            golfie['enabled'] = oscard;
            golfie['location'] = report;
            golfie = option.bind(verify)(golfie);
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'AUDIO_SET_NOISE_SUPPRESSION';
            michal['type'] = golfie;
            oscard = !oscard;
            michal['enabled'] = oscard;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
 114:
            return entity;
        }
    };
    michal['setNoiseCancellation'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setAutomaticGainControl
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00048_ip = 72; continue _fun00047 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL';
            michal['type'] = report;
            report = argFoo;
            michal['enabled'] = report;
            report = argBar;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
 72:
            return entity;
        }
    };
    michal['setAutomaticGainControl'] = golfie;
    golfie = function(argFoo) { // Original name: setExperimentalEncoders
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00050_ip = 106; continue _fun00049 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getExperimentalEncoders;
            oscard = michal.bind(oscard)();
            michal = 'experimental_encoders_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['setExperimentalEncoders'] = golfie;
    golfie = function(argFoo) { // Original name: setHardwareEncoding
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00052_ip = 102; continue _fun00051 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getHardwareEncoding;
            oscard = michal.bind(oscard)();
            michal = 'hardware_acceleration_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_HARDWARE_ENCODING';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 102:
            return entity;
        }
    };
    michal['setHardwareEncoding'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setAttenuation
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            report = argBaz;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00054_ip = 248; continue _fun00053 }
 28:
            tangon = _closure1_slot6;
            zuuluu = tangon.getAttenuation;
            option = zuuluu.bind(tangon)();
            tangon = _closure1_slot6;
            zuuluu = tangon.getAttenuateWhileSpeakingSelf;
            verify = zuuluu.bind(tangon)();
            tangon = _closure1_slot6;
            zuuluu = tangon.getAttenuateWhileSpeakingOthers;
            offset = zuuluu.bind(tangon)();
            if(!(option === golfie)) { _fun00054_ip = 158; continue _fun00053 }
 80:
            if(!(verify === oscard)) { _fun00054_ip = 123; continue _fun00053 }
 84:
            if(!(offset !== report)) { _fun00054_ip = 191; continue _fun00053 }
 88:
            tangon = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 13;
            zuuluu = yankee[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 'global_attenuation_for_other_speak_enabled';
            zuuluu = tangon.bind(entity)(zuuluu, report, offset);
            _fun00054_ip = 191; continue _fun00053;
 123:
            tangon = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 13;
            zuuluu = offset[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 'global_attenuation_for_self_speak_enabled';
            zuuluu = tangon.bind(entity)(zuuluu, oscard, verify);
            _fun00054_ip = 191; continue _fun00053;
 158:
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 'global_attenuation_strength';
            zuuluu = tangon.bind(entity)(zuuluu, golfie, option);
 191:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'AUDIO_SET_ATTENUATION';
            michal['type'] = option;
            michal['attenuation'] = golfie;
            michal['attenuateWhileSpeakingSelf'] = oscard;
            michal['attenuateWhileSpeakingOthers'] = report;
            michal = zuuluu.bind(tangon)(michal);
 248:
            return entity;
        }
    };
    michal['setAttenuation'] = golfie;
    golfie = function(argFoo) { // Original name: setQoS
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00056_ip = 104; continue _fun00055 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getQoS;
            oscard = michal.bind(oscard)();
            michal = 'quality_of_service_packets_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_QOS';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 104:
            return entity;
        }
    };
    michal['setQoS'] = golfie;
    golfie = function() { // Original name: reset
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00058_ip = 58; continue _fun00057 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'AUDIO_RESET';
            michal['type'] = report;
            michal = zuuluu.bind(tangon)(michal);
 58:
            return entity;
        }
    };
    michal['reset'] = golfie;
    golfie = function(argFoo) { // Original name: setSilenceWarning
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00060_ip = 104; continue _fun00059 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getEnableSilenceWarning;
            oscard = michal.bind(oscard)();
            michal = 'silence_warning_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'AUDIO_SET_DISPLAY_SILENCE_WARNING';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 104:
            return entity;
        }
    };
    michal['setSilenceWarning'] = golfie;
    golfie = function(argFoo) { // Original name: setDebugLogging
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00062_ip = 148; continue _fun00061 }
 10:
                    zuuluu = _closure1_slot13;
                    michal = undefined;
                    zuuluu = zuuluu.bind(michal)();
                    if(zuuluu) { _fun00062_ip = 145; continue _fun00061 }
 26:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = oscard[zuuluu];
                    option = report.bind(michal)(zuuluu);
                    oscard = _closure2_slot0;
                    report = _closure1_slot6;
                    zuuluu = report.getDebugLogging;
                    report = zuuluu.bind(report)();
                    zuuluu = 'debug_logging_enabled';
                    zuuluu = option.bind(michal)(zuuluu, oscard, report);
                    SaveGenerator(address=84);
 82:
                    return zuuluu;
 84:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00062_ip = 142; continue _fun00061 }
 90:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 11;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'AUDIO_SET_DEBUG_LOGGING';
                    tangon['type'] = option;
                    golfie = _closure2_slot0;
                    tangon['enabled'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    _fun00062_ip = 145; continue _fun00061;
 142:
                    return zuuluu;
 145:
                    return michal;
 148:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['setDebugLogging'] = golfie;
    golfie = function(argFoo) { // Original name: setVideoHook
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00064_ip = 106; continue _fun00063 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getVideoHook;
            oscard = michal.bind(oscard)();
            michal = 'video_hook_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_VIDEO_HOOK';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['setVideoHook'] = golfie;
    golfie = function(argFoo) { // Original name: setExperimentalSoundshare
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00066_ip = 104; continue _fun00065 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getExperimentalSoundshare;
            oscard = michal.bind(oscard)();
            michal = 'experimental_soundshare_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 104:
            return entity;
        }
    };
    michal['setExperimentalSoundshare'] = golfie;
    golfie = function(argFoo) { // Original name: setUseSystemScreensharePicker
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00068_ip = 106; continue _fun00067 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getUseSystemScreensharePicker;
            oscard = michal.bind(oscard)();
            michal = 'system_screenshare_picker_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['setUseSystemScreensharePicker'] = golfie;
    golfie = function(argFoo) { // Original name: setAudioSubsystem
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00070_ip = 147; continue _fun00069 }
 10:
                    zuuluu = _closure1_slot13;
                    michal = undefined;
                    zuuluu = zuuluu.bind(michal)();
                    if(zuuluu) { _fun00070_ip = 144; continue _fun00069 }
 26:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = oscard[zuuluu];
                    option = report.bind(michal)(zuuluu);
                    oscard = _closure2_slot0;
                    report = _closure1_slot6;
                    zuuluu = report.getAudioSubsystem;
                    report = zuuluu.bind(report)();
                    zuuluu = 'audio_subsystem';
                    zuuluu = option.bind(michal)(zuuluu, oscard, report);
                    SaveGenerator(address=82);
 80:
                    return zuuluu;
 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00070_ip = 141; continue _fun00069 }
 88:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 11;
                    tangon = oscard[tangon];
                    oscard = report.bind(michal)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'AUDIO_SET_SUBSYSTEM';
                    tangon['type'] = option;
                    golfie = _closure2_slot0;
                    tangon['subsystem'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    _fun00070_ip = 144; continue _fun00069;
 141:
                    return zuuluu;
 144:
                    return michal;
 147:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['setAudioSubsystem'] = golfie;
    golfie = function(argFoo) { // Original name: setVideoEnabled
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 14;
        zuuluu = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(zuuluu);
        zuuluu = report.applyInitialVideoBackgroundOption;
        zuuluu = zuuluu.bind(report)();
        zuuluu = _closure1_slot1;
        michal = 11;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'MEDIA_ENGINE_SET_VIDEO_ENABLED';
        michal['type'] = report;
        report = argFoo;
        michal['enabled'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setVideoEnabled'] = golfie;
    golfie = function(argFoo) { // Original name: setGoLiveSource
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            report = argFoo;
            zuuluu = null;
            tangon = zuuluu == report;
            entity = undefined;
            michal = undefined;
            if(tangon) { _fun00072_ip = 22; continue _fun00071 }
 16:
            michal = report.qualityOptions;
 22:
            if(!(zuuluu != michal)) { _fun00072_ip = 98; continue _fun00071 }
 26:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 15;
            michal = tangon[michal];
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.trackStreamSettingsUpdate;
            michal = report.qualityOptions;
            tangon = michal.preset;
            michal = report.qualityOptions;
            zuuluu = michal.resolution;
            michal = report.qualityOptions;
            michal = michal.frameRate;
            michal = oscard.bind(golfie)(tangon, zuuluu, michal);
 98:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
            michal['type'] = oscard;
            michal['settings'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['setGoLiveSource'] = golfie;
    golfie = function(argFoo) { // Original name: setOpenH264
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00074_ip = 106; continue _fun00073 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getOpenH264;
            oscard = michal.bind(oscard)();
            michal = 'open_h264_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_OPEN_H264';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['setOpenH264'] = golfie;
    golfie = function(argFoo) { // Original name: setAecDump
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00076_ip = 106; continue _fun00075 }
 19:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            oscard = 13;
            oscard = tangon[oscard];
            golfie = zuuluu.bind(entity)(oscard);
            oscard = _closure1_slot6;
            michal = oscard.getAecDump;
            oscard = michal.bind(oscard)();
            michal = 'diagnostic_audio_recording_enabled';
            michal = golfie.bind(entity)(michal, report, oscard);
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'MEDIA_ENGINE_SET_AEC_DUMP';
            michal['type'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 106:
            return entity;
        }
    };
    michal['setAecDump'] = golfie;
    golfie = function() { // Original name: interact
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00078_ip = 60; continue _fun00077 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {'type': 'MEDIA_ENGINE_INTERACTION_REQUIRED', 'required': false};
            michal = zuuluu.bind(tangon)(michal);
 60:
            return entity;
        }
    };
    michal['interact'] = golfie;
    tangon = function(argFoo) { // Original name: setEnableHardwareMuteNotice
        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
            zuuluu = _closure1_slot13;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            if(zuuluu) { _fun00080_ip = 65; continue _fun00079 }
 16:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE';
            michal['type'] = report;
            report = argFoo;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
 65:
            return entity;
        }
    };
    michal['setEnableHardwareMuteNotice'] = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/AudioActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();