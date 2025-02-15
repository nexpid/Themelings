// app/actions/AudioActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: getInputDeviceName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot6;
            mike = zulu.getInputDevices;
            mike = mike.bind(zulu)();
            zulu = _closure1_slot6;
            entity = zulu.getInputDeviceId;
            entity = entity.bind(zulu)();
            mike = mike[entity];
            entity = null;
            zulu = entity != mike;
            entity = '';
            if(!zulu) { _fun00002_ip = 53; continue _fun00001 }
 48:
            entity = mike.name;
 53:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackDeviceChanged
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            echo = argBar;
            backup = argBaz;
            zulu = arguments[4];
            entity = undefined;
            if(!(zulu === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            zulu = {};
 20:
            yankee = zulu.location;
            offset = zulu.analyticsLocations;
            if(!(echo !== backup)) { _fun00004_ip = 328; continue _fun00003 }
 38:
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            options = null;
            zulu = options != report;
            verify = null;
            if(!zulu) { _fun00004_ip = 80; continue _fun00003 }
 66:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            verify = zulu.bind(tango)(report);
 80:
            update = mike[echo];
            output = mike[backup];
            zulu = _closure1_slot6;
            mike = zulu.getMediaEngine;
            zulu = mike.bind(zulu)();
            mike = zulu.getAudioSubsystem;
            golf = mike.bind(zulu)();
            zulu = _closure1_slot6;
            mike = zulu.getMediaEngine;
            zulu = mike.bind(zulu)();
            mike = zulu.getAudioLayer;
            oscar = mike.bind(zulu)();
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot9;
            zulu = mike.MEDIA_DEVICE_CHANGED;
            mike = {};
            result = _closure1_slot4;
            kilo = result.getCertifiedDeviceName;
            source = options != update;
            sizing = '';
            foxtrot = sizing;
            if(!source) { _fun00004_ip = 202; continue _fun00003 }
 197:
            foxtrot = update.name;
 202:
            foxtrot = kilo.bind(result)(echo, foxtrot);
            mike['device_from_name'] = foxtrot;
            kilo = _closure1_slot4;
            foxtrot = kilo.getCertifiedDeviceName;
            result = options != output;
            if(!result) { _fun00004_ip = 237; continue _fun00003 }
 232:
            sizing = output.name;
 237:
            foxtrot = foxtrot.bind(kilo)(backup, sizing);
            mike['device_to_name'] = foxtrot;
            foxtrot = argCorge;
            mike['device_type'] = foxtrot;
            foxtrot = _closure1_slot4;
            romeo = foxtrot.isCertified;
            romeo = romeo.bind(foxtrot)(backup);
            mike['device_is_certified'] = romeo;
            mike['location'] = yankee;
            mike['location_stack'] = offset;
            offset = options == verify;
            options = undefined;
            if(offset) { _fun00004_ip = 307; continue _fun00003 }
 302:
            options = verify.type;
 307:
            mike['voice_channel_type'] = options;
            mike['audio_subsystem'] = golf;
            mike['audio_layer'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 328:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.InputModes;
    var _closure1_slot8 = golf;
    mike = mike.AnalyticEvents;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.SoundOutputChannel;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.MediaEngineContextTypes;
    var _closure1_slot10 = mike;
    golf = {};
    mike = function() { // Original name: isNotSupported
        entity = false;
        return entity;
    };
    golf['isNotSupported'] = mike;
    mike = function() { // Original name: enable
        entity = global;
        zulu = entity.Promise;
        mike = zulu.resolve;
        entity = true;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['enable'] = mike;
    mike = function() { // Original name: trackToggleSelfMute
        entity = undefined;
        return entity;
    };
    golf['trackToggleSelfMute'] = mike;
    mike = function() { // Original name: trackToggleSelfDeaf
        entity = undefined;
        return entity;
    };
    golf['trackToggleSelfDeaf'] = mike;
    mike = golf.isNotSupported;
    var _closure1_slot11 = mike;
    mike = golf.trackToggleSelfMute;
    var _closure1_slot12 = mike;
    mike = golf.trackToggleSelfDeaf;
    var _closure1_slot13 = mike;
    mike = {};
    golf = golf.enable;
    mike['enable'] = golf;
    golf = function() { // Original name: toggleSelfMute
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            options = this;
            tango = undefined;
            if(!(entity === tango)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            entity = {};
 14:
            golf = entity.context;
            if(!(golf === tango)) { _fun00006_ip = 36; continue _fun00005 }
 23:
            mike = _closure1_slot10;
            golf = mike.DEFAULT;
 36:
            oscar = entity.syncRemote;
            if(!(oscar === tango)) { _fun00006_ip = 48; continue _fun00005 }
 46:
            oscar = true;
 48:
            offset = entity.usedKeybind;
            if(!(offset === tango)) { _fun00006_ip = 60; continue _fun00005 }
 58:
            offset = false;
 60:
            report = entity.playSoundEffect;
            if(!(report === tango)) { _fun00006_ip = 72; continue _fun00005 }
 70:
            report = true;
 72:
            verify = entity.location;
            entity = _closure1_slot11;
            entity = entity.bind(tango)();
            if(entity) { _fun00006_ip = 202; continue _fun00005 }
 91:
            zulu = _closure1_slot12;
            entity = {};
            entity['usedKeybind'] = offset;
            entity['location'] = verify;
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot6;
            entity = zulu.isEnabled;
            entity = entity.bind(zulu)();
            if(entity) { _fun00006_ip = 143; continue _fun00005 }
 128:
            zulu = options.enable;
            entity = true;
            entity = zulu.bind(options)(entity);
            _fun00006_ip = 200; continue _fun00005;
 143:
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 9;
            mike = options[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'AUDIO_TOGGLE_SELF_MUTE';
            mike['type'] = options;
            mike['context'] = golf;
            mike['syncRemote'] = oscar;
            report = !report;
            mike['skipMuteUnmuteSoundEffect'] = report;
            entity = zulu.bind(tango)(mike);
 200:
            _fun00006_ip = 220; continue _fun00005;
 202:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 220:
            return entity;
        }
    };
    mike['toggleSelfMute'] = golf;
    golf = function(argFoo, argBar) { // Original name: setSelfMute
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00008_ip = 73; continue _fun00007 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_SELF_MUTE';
            mike['type'] = report;
            report = argFoo;
            mike['context'] = report;
            report = argBar;
            mike['mute'] = report;
            mike = zulu.bind(tango)(mike);
 73:
            return entity;
        }
    };
    mike['setSelfMute'] = golf;
    golf = function(argFoo) { // Original name: setTemporarySelfMute
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00010_ip = 66; continue _fun00009 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_TEMPORARY_SELF_MUTE';
            mike['type'] = report;
            report = argFoo;
            mike['mute'] = report;
            mike = zulu.bind(tango)(mike);
 66:
            return entity;
        }
    };
    mike['setTemporarySelfMute'] = golf;
    golf = function() { // Original name: toggleSelfDeaf
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00012_ip = 11; continue _fun00011 }
 9:
            mike = {};
 11:
            oscar = mike.context;
            if(!(oscar === entity)) { _fun00012_ip = 33; continue _fun00011 }
 20:
            zulu = _closure1_slot10;
            oscar = zulu.DEFAULT;
 33:
            report = mike.syncRemote;
            if(!(report === entity)) { _fun00012_ip = 45; continue _fun00011 }
 43:
            report = true;
 45:
            options = mike.usedKeybind;
            if(!(options === entity)) { _fun00012_ip = 57; continue _fun00011 }
 55:
            options = false;
 57:
            golf = mike.location;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00012_ip = 145; continue _fun00011 }
 76:
            tango = _closure1_slot13;
            zulu = {};
            zulu['usedKeybind'] = options;
            zulu['location'] = golf;
            zulu = tango.bind(entity)(zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'AUDIO_TOGGLE_SELF_DEAF';
            mike['type'] = golf;
            mike['context'] = oscar;
            mike['syncRemote'] = report;
            mike = zulu.bind(tango)(mike);
 145:
            return entity;
        }
    };
    mike['toggleSelfDeaf'] = golf;
    golf = function(argFoo) { // Original name: toggleLocalMute
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00014_ip = 22; continue _fun00013 }
 9:
            mike = _closure1_slot10;
            report = mike.DEFAULT;
 22:
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00014_ip = 87; continue _fun00013 }
 36:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_TOGGLE_LOCAL_MUTE';
            mike['type'] = oscar;
            mike['context'] = report;
            report = argFoo;
            mike['userId'] = report;
            mike = zulu.bind(tango)(mike);
 87:
            return entity;
        }
    };
    mike['toggleLocalMute'] = golf;
    golf = function(argFoo) { // Original name: toggleLocalSoundboardMute
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00016_ip = 22; continue _fun00015 }
 9:
            mike = _closure1_slot10;
            report = mike.DEFAULT;
 22:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE';
            mike['type'] = oscar;
            mike['context'] = report;
            report = argFoo;
            mike['userId'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['toggleLocalSoundboardMute'] = golf;
    golf = function(argFoo, argBar) { // Original name: setDisableLocalVideo
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golf = arguments[2];
            oscar = arguments[3];
            report = arguments[4];
            entity = undefined;
            if(!(golf === entity)) { _fun00018_ip = 28; continue _fun00017 }
 15:
            mike = _closure1_slot10;
            golf = mike.DEFAULT;
 28:
            if(!(oscar === entity)) { _fun00018_ip = 34; continue _fun00017 }
 32:
            oscar = true;
 34:
            if(!(report === entity)) { _fun00018_ip = 40; continue _fun00017 }
 38:
            report = false;
 40:
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00018_ip = 123; continue _fun00017 }
 54:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'AUDIO_SET_LOCAL_VIDEO_DISABLED';
            mike['type'] = options;
            mike['context'] = golf;
            golf = argFoo;
            mike['userId'] = golf;
            golf = argBar;
            mike['videoToggleState'] = golf;
            mike['persist'] = oscar;
            mike['isAutomatic'] = report;
            mike = zulu.bind(tango)(mike);
 123:
            return entity;
        }
    };
    mike['setDisableLocalVideo'] = golf;
    golf = function(argFoo, argBar) { // Original name: setLocalVolume
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            options = arguments[2];
            entity = undefined;
            if(!(options === entity)) { _fun00020_ip = 22; continue _fun00019 }
 9:
            mike = _closure1_slot10;
            options = mike.DEFAULT;
 22:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_LOCAL_VOLUME';
            mike['type'] = oscar;
            mike['context'] = options;
            oscar = argFoo;
            mike['userId'] = oscar;
            oscar = _closure1_slot0;
            report = 10;
            report = golf[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.snapVolumeToDefault;
            report = argBar;
            report = oscar.bind(golf)(report, options);
            mike['volume'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['setLocalVolume'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setLocalPan
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = arguments[3];
            entity = undefined;
            if(!(report === entity)) { _fun00022_ip = 22; continue _fun00021 }
 9:
            mike = _closure1_slot10;
            report = mike.DEFAULT;
 22:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_LOCAL_PAN';
            mike['type'] = oscar;
            mike['context'] = report;
            report = argFoo;
            mike['userId'] = report;
            report = argBar;
            mike['left'] = report;
            report = argBaz;
            mike['right'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['setLocalPan'] = golf;
    golf = function(argFoo) { // Original name: setMode
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            romeo = argFoo;
            golf = arguments[1];
            verify = arguments[2];
            mike = arguments[3];
            entity = undefined;
            if(!(golf === entity)) { _fun00024_ip = 20; continue _fun00023 }
 18:
            golf = {};
 20:
            if(!(verify === entity)) { _fun00024_ip = 37; continue _fun00023 }
 24:
            zulu = _closure1_slot10;
            verify = zulu.DEFAULT;
 37:
            if(!(mike === entity)) { _fun00024_ip = 43; continue _fun00023 }
 41:
            mike = {};
 43:
            yankee = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00024_ip = 615; continue _fun00023 }
 66:
            tango = _closure1_slot6;
            zulu = tango.getMode;
            zulu = zulu.bind(tango)();
            report = _closure1_slot6;
            tango = report.getModeOptions;
            options = tango.bind(report)(verify);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 9;
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.dispatch;
            tango = {};
            offset = 'AUDIO_SET_MODE';
            tango['type'] = offset;
            tango['context'] = verify;
            tango['mode'] = romeo;
            verify = {};
            result = verify;
            output = options;
            offset = copyDataProperties(result, output);
            result = verify;
            output = golf;
            offset = copyDataProperties(result, output);
            tango['options'] = verify;
            tango = report.bind(oscar)(tango);
            if(!(romeo === zulu)) { _fun00024_ip = 434; continue _fun00023 }
 176:
            zulu = _closure1_slot8;
            zulu = zulu.VOICE_ACTIVITY;
            if(!(romeo === zulu)) { _fun00024_ip = 615; continue _fun00023 }
 193:
            if(!(options !== golf)) { _fun00024_ip = 615; continue _fun00023 }
 200:
            tango = _closure1_slot6;
            zulu = tango.getMediaEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getAudioSubsystem;
            offset = zulu.bind(tango)();
            tango = _closure1_slot6;
            zulu = tango.getMediaEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getAudioLayer;
            verify = zulu.bind(tango)();
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            backup = null;
            zulu = backup != report;
            kilo = null;
            if(!zulu) { _fun00024_ip = 287; continue _fun00023 }
 273:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            kilo = zulu.bind(tango)(report);
 287:
            zulu = _closure1_slot14;
            foxtrot = zulu.bind(entity)();
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            oscar = tango.bind(entity)(zulu);
            report = oscar.track;
            zulu = _closure1_slot9;
            tango = zulu.VOICE_ACTIVITY_THRESHOLD_CHANGED;
            zulu = {};
            zulu['location_stack'] = yankee;
            sizing = backup == kilo;
            backup = undefined;
            if(sizing) { _fun00024_ip = 351; continue _fun00023 }
 346:
            backup = kilo.type;
 351:
            zulu['voice_channel_type'] = backup;
            zulu['input_device_name'] = foxtrot;
            zulu['audio_subsystem'] = offset;
            zulu['audio_layer'] = verify;
            verify = options.threshold;
            zulu['old_threshold'] = verify;
            verify = golf.threshold;
            zulu['new_threshold'] = verify;
            options = options.autoThreshold;
            zulu['old_auto_threshold'] = options;
            golf = golf.autoThreshold;
            zulu['new_auto_threshold'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            _fun00024_ip = 615; continue _fun00023;
 434:
            tango = _closure1_slot6;
            zulu = tango.getMediaEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getAudioSubsystem;
            golf = zulu.bind(tango)();
            tango = _closure1_slot6;
            zulu = tango.getMediaEngine;
            tango = zulu.bind(tango)();
            zulu = tango.getAudioLayer;
            oscar = zulu.bind(tango)();
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            verify = null;
            zulu = verify != report;
            offset = null;
            if(!zulu) { _fun00024_ip = 521; continue _fun00023 }
 507:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            offset = zulu.bind(tango)(report);
 521:
            zulu = _closure1_slot14;
            options = zulu.bind(entity)();
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot9;
            zulu = mike.VOICE_ACTIVATION_MODE_CHANGED;
            mike = {};
            mike['mode'] = romeo;
            mike['location_stack'] = yankee;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00024_ip = 589; continue _fun00023 }
 584:
            verify = offset.type;
 589:
            mike['voice_channel_type'] = verify;
            mike['input_device_name'] = options;
            mike['audio_subsystem'] = golf;
            mike['audio_layer'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 615:
            return entity;
        }
    };
    mike['setMode'] = golf;
    golf = function(argFoo) { // Original name: setInputVolume
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            verify = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00026_ip = 14; continue _fun00025 }
 12:
            mike = {};
 14:
            options = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00026_ip = 195; continue _fun00025 }
 37:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.dispatch;
            zulu = {};
            oscar = 'AUDIO_SET_INPUT_VOLUME';
            zulu['type'] = oscar;
            zulu['volume'] = verify;
            zulu = tango.bind(report)(zulu);
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            oscar = null;
            zulu = oscar != report;
            golf = null;
            if(!zulu) { _fun00026_ip = 123; continue _fun00025 }
 109:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            golf = zulu.bind(tango)(report);
 123:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot9;
            zulu = mike.MEDIA_INPUT_VOLUME_CHANGED;
            mike = {};
            mike['volume'] = verify;
            mike['location_stack'] = options;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun00026_ip = 184; continue _fun00025 }
 179:
            oscar = golf.type;
 184:
            mike['voice_channel_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 195:
            return entity;
        }
    };
    mike['setInputVolume'] = golf;
    golf = function(argFoo) { // Original name: setOutputVolume
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            verify = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00028_ip = 14; continue _fun00027 }
 12:
            mike = {};
 14:
            options = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00028_ip = 193; continue _fun00027 }
 37:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.dispatch;
            zulu = {};
            oscar = 'AUDIO_SET_OUTPUT_VOLUME';
            zulu['type'] = oscar;
            zulu['volume'] = verify;
            zulu = tango.bind(report)(zulu);
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            oscar = null;
            zulu = oscar != report;
            golf = null;
            if(!zulu) { _fun00028_ip = 121; continue _fun00027 }
 107:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            golf = zulu.bind(tango)(report);
 121:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot9;
            zulu = mike.MEDIA_OUTPUT_VOLUME_CHANGED;
            mike = {};
            mike['volume'] = verify;
            mike['location_stack'] = options;
            options = oscar == golf;
            oscar = undefined;
            if(options) { _fun00028_ip = 182; continue _fun00027 }
 177:
            oscar = golf.type;
 182:
            mike['voice_channel_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 193:
            return entity;
        }
    };
    mike['setOutputVolume'] = golf;
    golf = function(argFoo) { // Original name: setInputDevice
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00030_ip = 14; continue _fun00029 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun00030_ip = 156; continue _fun00029 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun00030_ip = 49; continue _fun00029 }
 45:
            if(!(tango != zulu)) { _fun00030_ip = 110; continue _fun00029 }
 49:
            options = _closure1_slot15;
            oscar = _closure1_slot6;
            tango = oscar.getInputDevices;
            backup = tango.bind(oscar)();
            oscar = _closure1_slot6;
            tango = oscar.getInputDeviceId;
            foxtrot = tango.bind(oscar)();
            tango = {};
            tango['location'] = verify;
            tango['analyticsLocations'] = zulu;
            yankee = 'Audio Input';
            kilo = undefined;
            romeo = report;
            offset = tango;
            zulu = kilo[options](backup, foxtrot, romeo, yankee, offset, verify);
 110:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_INPUT_DEVICE';
            mike['type'] = oscar;
            mike['id'] = report;
            mike = zulu.bind(tango)(mike);
 156:
            return entity;
        }
    };
    mike['setInputDevice'] = golf;
    golf = function(argFoo) { // Original name: setOutputDevice
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00032_ip = 14; continue _fun00031 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun00032_ip = 156; continue _fun00031 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun00032_ip = 49; continue _fun00031 }
 45:
            if(!(tango != zulu)) { _fun00032_ip = 110; continue _fun00031 }
 49:
            options = _closure1_slot15;
            oscar = _closure1_slot6;
            tango = oscar.getOutputDevices;
            backup = tango.bind(oscar)();
            oscar = _closure1_slot6;
            tango = oscar.getOutputDeviceId;
            foxtrot = tango.bind(oscar)();
            tango = {};
            tango['location'] = verify;
            tango['analyticsLocations'] = zulu;
            yankee = 'Audio Output';
            kilo = undefined;
            romeo = report;
            offset = tango;
            zulu = kilo[options](backup, foxtrot, romeo, yankee, offset, verify);
 110:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_OUTPUT_DEVICE';
            mike['type'] = oscar;
            mike['id'] = report;
            mike = zulu.bind(tango)(mike);
 156:
            return entity;
        }
    };
    mike['setOutputDevice'] = golf;
    golf = function(argFoo) { // Original name: setVideoDevice
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun00034_ip = 14; continue _fun00033 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun00034_ip = 154; continue _fun00033 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun00034_ip = 49; continue _fun00033 }
 45:
            if(!(tango != zulu)) { _fun00034_ip = 108; continue _fun00033 }
 49:
            options = _closure1_slot15;
            oscar = _closure1_slot6;
            tango = oscar.getVideoDevices;
            backup = tango.bind(oscar)();
            oscar = _closure1_slot6;
            tango = oscar.getVideoDeviceId;
            foxtrot = tango.bind(oscar)();
            tango = {};
            tango['location'] = verify;
            tango['analyticsLocations'] = zulu;
            yankee = 'Video';
            kilo = undefined;
            romeo = report;
            offset = tango;
            zulu = kilo[options](backup, foxtrot, romeo, yankee, offset, verify);
 108:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_VIDEO_DEVICE';
            mike['type'] = oscar;
            mike['id'] = report;
            mike = zulu.bind(tango)(mike);
 154:
            return entity;
        }
    };
    mike['setVideoDevice'] = golf;
    golf = function(argFoo, argBar) { // Original name: setEchoCancellation
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00036_ip = 72; continue _fun00035 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_ECHO_CANCELLATION';
            mike['type'] = report;
            report = argFoo;
            mike['enabled'] = report;
            report = argBar;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
 72:
            return entity;
        }
    };
    mike['setEchoCancellation'] = golf;
    golf = function(argFoo) { // Original name: setSidechainCompression
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00038_ip = 104; continue _fun00037 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getSidechainCompression;
            oscar = mike.bind(oscar)();
            mike = 'stream_attenuation_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_SIDECHAIN_COMPRESSION';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 104:
            return entity;
        }
    };
    mike['setSidechainCompression'] = golf;
    golf = function(argFoo) { // Original name: setSidechainCompressionStrength
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00040_ip = 107; continue _fun00039 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getSidechainCompressionStrength;
            oscar = mike.bind(oscar)();
            mike = 'stream_attenuation_strength';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH';
            mike['type'] = oscar;
            mike['strength'] = report;
            mike = zulu.bind(tango)(mike);
 107:
            return entity;
        }
    };
    mike['setSidechainCompressionStrength'] = golf;
    golf = function(argFoo) { // Original name: setLoopback
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00042_ip = 65; continue _fun00041 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_LOOPBACK';
            mike['type'] = report;
            report = argFoo;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 65:
            return entity;
        }
    };
    mike['setLoopback'] = golf;
    golf = function(argFoo, argBar) { // Original name: setNoiseSuppression
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00044_ip = 72; continue _fun00043 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_NOISE_SUPPRESSION';
            mike['type'] = report;
            report = argFoo;
            mike['enabled'] = report;
            report = argBar;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
 72:
            return entity;
        }
    };
    mike['setNoiseSuppression'] = golf;
    golf = function(argFoo, argBar) { // Original name: setNoiseCancellation
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00046_ip = 114; continue _fun00045 }
 22:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            golf = tango[mike];
            verify = zulu.bind(entity)(golf);
            options = verify.dispatch;
            golf = {};
            offset = 'AUDIO_SET_NOISE_CANCELLATION';
            golf['type'] = offset;
            golf['enabled'] = oscar;
            golf['location'] = report;
            golf = options.bind(verify)(golf);
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'AUDIO_SET_NOISE_SUPPRESSION';
            mike['type'] = golf;
            oscar = !oscar;
            mike['enabled'] = oscar;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
 114:
            return entity;
        }
    };
    mike['setNoiseCancellation'] = golf;
    golf = function(argFoo, argBar) { // Original name: setAutomaticGainControl
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00048_ip = 72; continue _fun00047 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL';
            mike['type'] = report;
            report = argFoo;
            mike['enabled'] = report;
            report = argBar;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
 72:
            return entity;
        }
    };
    mike['setAutomaticGainControl'] = golf;
    golf = function(argFoo) { // Original name: setExperimentalEncoders
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00050_ip = 106; continue _fun00049 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getExperimentalEncoders;
            oscar = mike.bind(oscar)();
            mike = 'experimental_encoders_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setExperimentalEncoders'] = golf;
    golf = function(argFoo) { // Original name: setHardwareEncoding
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00052_ip = 102; continue _fun00051 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getHardwareEncoding;
            oscar = mike.bind(oscar)();
            mike = 'hardware_acceleration_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_HARDWARE_ENCODING';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 102:
            return entity;
        }
    };
    mike['setHardwareEncoding'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: setAttenuation
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            report = argBaz;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00054_ip = 248; continue _fun00053 }
 28:
            tango = _closure1_slot6;
            zulu = tango.getAttenuation;
            options = zulu.bind(tango)();
            tango = _closure1_slot6;
            zulu = tango.getAttenuateWhileSpeakingSelf;
            verify = zulu.bind(tango)();
            tango = _closure1_slot6;
            zulu = tango.getAttenuateWhileSpeakingOthers;
            offset = zulu.bind(tango)();
            if(!(options === golf)) { _fun00054_ip = 158; continue _fun00053 }
 80:
            if(!(verify === oscar)) { _fun00054_ip = 123; continue _fun00053 }
 84:
            if(!(offset !== report)) { _fun00054_ip = 191; continue _fun00053 }
 88:
            tango = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 11;
            zulu = yankee[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 'global_attenuation_for_other_speak_enabled';
            zulu = tango.bind(entity)(zulu, report, offset);
            _fun00054_ip = 191; continue _fun00053;
 123:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 11;
            zulu = offset[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 'global_attenuation_for_self_speak_enabled';
            zulu = tango.bind(entity)(zulu, oscar, verify);
            _fun00054_ip = 191; continue _fun00053;
 158:
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 11;
            zulu = verify[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 'global_attenuation_strength';
            zulu = tango.bind(entity)(zulu, golf, options);
 191:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'AUDIO_SET_ATTENUATION';
            mike['type'] = options;
            mike['attenuation'] = golf;
            mike['attenuateWhileSpeakingSelf'] = oscar;
            mike['attenuateWhileSpeakingOthers'] = report;
            mike = zulu.bind(tango)(mike);
 248:
            return entity;
        }
    };
    mike['setAttenuation'] = golf;
    golf = function(argFoo) { // Original name: setQoS
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00056_ip = 104; continue _fun00055 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getQoS;
            oscar = mike.bind(oscar)();
            mike = 'quality_of_service_packets_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_QOS';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 104:
            return entity;
        }
    };
    mike['setQoS'] = golf;
    golf = function() { // Original name: reset
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00058_ip = 58; continue _fun00057 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'AUDIO_RESET';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
 58:
            return entity;
        }
    };
    mike['reset'] = golf;
    golf = function(argFoo) { // Original name: setSilenceWarning
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00060_ip = 106; continue _fun00059 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getEnableSilenceWarning;
            oscar = mike.bind(oscar)();
            mike = 'silence_warning_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'AUDIO_SET_DISPLAY_SILENCE_WARNING';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setSilenceWarning'] = golf;
    golf = function(argFoo) { // Original name: setDebugLogging
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00062_ip = 148; continue _fun00061 }
 10:
                    zulu = _closure1_slot11;
                    mike = undefined;
                    zulu = zulu.bind(mike)();
                    if(zulu) { _fun00062_ip = 145; continue _fun00061 }
 26:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 11;
                    zulu = oscar[zulu];
                    options = report.bind(mike)(zulu);
                    oscar = _closure2_slot0;
                    report = _closure1_slot6;
                    zulu = report.getDebugLogging;
                    report = zulu.bind(report)();
                    zulu = 'debug_logging_enabled';
                    zulu = options.bind(mike)(zulu, oscar, report);
                    SaveGenerator(address=84);
 82:
                    return zulu;
 84:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00062_ip = 142; continue _fun00061 }
 90:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'AUDIO_SET_DEBUG_LOGGING';
                    tango['type'] = options;
                    golf = _closure2_slot0;
                    tango['enabled'] = golf;
                    tango = report.bind(oscar)(tango);
                    _fun00062_ip = 145; continue _fun00061;
 142:
                    return zulu;
 145:
                    return mike;
 148:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['setDebugLogging'] = golf;
    golf = function(argFoo) { // Original name: setVideoHook
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00064_ip = 106; continue _fun00063 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getVideoHook;
            oscar = mike.bind(oscar)();
            mike = 'video_hook_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_VIDEO_HOOK';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setVideoHook'] = golf;
    golf = function(argFoo) { // Original name: setExperimentalSoundshare
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00066_ip = 104; continue _fun00065 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getExperimentalSoundshare;
            oscar = mike.bind(oscar)();
            mike = 'experimental_soundshare_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 104:
            return entity;
        }
    };
    mike['setExperimentalSoundshare'] = golf;
    golf = function(argFoo) { // Original name: setUseSystemScreensharePicker
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00068_ip = 106; continue _fun00067 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getUseSystemScreensharePicker;
            oscar = mike.bind(oscar)();
            mike = 'system_screenshare_picker_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setUseSystemScreensharePicker'] = golf;
    golf = function(argFoo) { // Original name: setAudioSubsystem
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00070_ip = 147; continue _fun00069 }
 10:
                    zulu = _closure1_slot11;
                    mike = undefined;
                    zulu = zulu.bind(mike)();
                    if(zulu) { _fun00070_ip = 144; continue _fun00069 }
 26:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 11;
                    zulu = oscar[zulu];
                    options = report.bind(mike)(zulu);
                    oscar = _closure2_slot0;
                    report = _closure1_slot6;
                    zulu = report.getAudioSubsystem;
                    report = zulu.bind(report)();
                    zulu = 'audio_subsystem';
                    zulu = options.bind(mike)(zulu, oscar, report);
                    SaveGenerator(address=82);
 80:
                    return zulu;
 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00070_ip = 141; continue _fun00069 }
 88:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 9;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'AUDIO_SET_SUBSYSTEM';
                    tango['type'] = options;
                    golf = _closure2_slot0;
                    tango['subsystem'] = golf;
                    tango = report.bind(oscar)(tango);
                    _fun00070_ip = 144; continue _fun00069;
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['setAudioSubsystem'] = golf;
    golf = function(argFoo) { // Original name: setVideoEnabled
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 12;
        zulu = tango[entity];
        entity = undefined;
        report = report.bind(entity)(zulu);
        zulu = report.applyInitialVideoBackgroundOption;
        zulu = zulu.bind(report)();
        zulu = _closure1_slot1;
        mike = 9;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'MEDIA_ENGINE_SET_VIDEO_ENABLED';
        mike['type'] = report;
        report = argFoo;
        mike['enabled'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setVideoEnabled'] = golf;
    golf = function(argFoo) { // Original name: setGoLiveSource
        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
            report = argFoo;
            zulu = null;
            tango = zulu == report;
            entity = undefined;
            mike = undefined;
            if(tango) { _fun00072_ip = 22; continue _fun00071 }
 16:
            mike = report.qualityOptions;
 22:
            if(!(zulu != mike)) { _fun00072_ip = 98; continue _fun00071 }
 26:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            golf = zulu.bind(entity)(mike);
            oscar = golf.trackStreamSettingsUpdate;
            mike = report.qualityOptions;
            tango = mike.preset;
            mike = report.qualityOptions;
            zulu = mike.resolution;
            mike = report.qualityOptions;
            mike = mike.frameRate;
            mike = oscar.bind(golf)(tango, zulu, mike);
 98:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
            mike['type'] = oscar;
            mike['settings'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['setGoLiveSource'] = golf;
    golf = function(argFoo) { // Original name: setOpenH264
        _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00074_ip = 106; continue _fun00073 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getOpenH264;
            oscar = mike.bind(oscar)();
            mike = 'open_h264_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_OPEN_H264';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setOpenH264'] = golf;
    golf = function(argFoo) { // Original name: setAecDump
        _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00076_ip = 106; continue _fun00075 }
 19:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            oscar = 11;
            oscar = tango[oscar];
            golf = zulu.bind(entity)(oscar);
            oscar = _closure1_slot6;
            mike = oscar.getAecDump;
            oscar = mike.bind(oscar)();
            mike = 'diagnostic_audio_recording_enabled';
            mike = golf.bind(entity)(mike, report, oscar);
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'MEDIA_ENGINE_SET_AEC_DUMP';
            mike['type'] = oscar;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 106:
            return entity;
        }
    };
    mike['setAecDump'] = golf;
    golf = function() { // Original name: interact
        _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00078_ip = 60; continue _fun00077 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {'type': 'MEDIA_ENGINE_INTERACTION_REQUIRED', 'required': false};
            mike = zulu.bind(tango)(mike);
 60:
            return entity;
        }
    };
    mike['interact'] = golf;
    tango = function(argFoo) { // Original name: setEnableHardwareMuteNotice
        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun00080_ip = 65; continue _fun00079 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE';
            mike['type'] = report;
            report = argFoo;
            mike['enabled'] = report;
            mike = zulu.bind(tango)(mike);
 65:
            return entity;
        }
    };
    mike['setEnableHardwareMuteNotice'] = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/AudioActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();