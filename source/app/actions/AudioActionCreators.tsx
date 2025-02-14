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
        _fun52689: for(var _fun52689_ip = 0; ; ) switch(_fun52689_ip) {
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
            if(!zulu) { _fun52689_ip = 53; continue _fun52689 }
 48:
            entity = mike.name;
 53:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackDeviceChanged
        _fun52690: for(var _fun52690_ip = 0; ; ) switch(_fun52690_ip) {
 0:
            mike = argFoo;
            echo = argBar;
            backup = argBaz;
            zulu = arguments[4];
            entity = undefined;
            if(!(zulu === entity)) { _fun52690_ip = 20; continue _fun52690 }
 18:
            zulu = {};
 20:
            yankee = zulu.location;
            offset = zulu.analyticsLocations;
            if(!(echo !== backup)) { _fun52690_ip = 328; continue _fun52690 }
 38:
            tango = _closure1_slot7;
            zulu = tango.getVoiceChannelId;
            report = zulu.bind(tango)();
            options = null;
            zulu = options != report;
            verify = null;
            if(!zulu) { _fun52690_ip = 80; continue _fun52690 }
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
            if(!source) { _fun52690_ip = 202; continue _fun52690 }
 197:
            foxtrot = update.name;
 202:
            foxtrot = kilo.bind(result)(echo, foxtrot);
            mike['device_from_name'] = foxtrot;
            kilo = _closure1_slot4;
            foxtrot = kilo.getCertifiedDeviceName;
            result = options != output;
            if(!result) { _fun52690_ip = 237; continue _fun52690 }
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
            if(offset) { _fun52690_ip = 307; continue _fun52690 }
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
        _fun52695: for(var _fun52695_ip = 0; ; ) switch(_fun52695_ip) {
 0:
            entity = arguments[0];
            options = this;
            tango = undefined;
            if(!(entity === tango)) { _fun52695_ip = 14; continue _fun52695 }
 12:
            entity = {};
 14:
            golf = entity.context;
            if(!(golf === tango)) { _fun52695_ip = 36; continue _fun52695 }
 23:
            mike = _closure1_slot10;
            golf = mike.DEFAULT;
 36:
            oscar = entity.syncRemote;
            if(!(oscar === tango)) { _fun52695_ip = 48; continue _fun52695 }
 46:
            oscar = true;
 48:
            offset = entity.usedKeybind;
            if(!(offset === tango)) { _fun52695_ip = 60; continue _fun52695 }
 58:
            offset = false;
 60:
            report = entity.playSoundEffect;
            if(!(report === tango)) { _fun52695_ip = 72; continue _fun52695 }
 70:
            report = true;
 72:
            verify = entity.location;
            entity = _closure1_slot11;
            entity = entity.bind(tango)();
            if(entity) { _fun52695_ip = 202; continue _fun52695 }
 91:
            zulu = _closure1_slot12;
            entity = {};
            entity['usedKeybind'] = offset;
            entity['location'] = verify;
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot6;
            entity = zulu.isEnabled;
            entity = entity.bind(zulu)();
            if(entity) { _fun52695_ip = 143; continue _fun52695 }
 128:
            zulu = options.enable;
            entity = true;
            entity = zulu.bind(options)(entity);
            _fun52695_ip = 200; continue _fun52695;
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
            _fun52695_ip = 220; continue _fun52695;
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
        _fun52696: for(var _fun52696_ip = 0; ; ) switch(_fun52696_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52696_ip = 73; continue _fun52696 }
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
        _fun52697: for(var _fun52697_ip = 0; ; ) switch(_fun52697_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52697_ip = 66; continue _fun52697 }
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
        _fun52698: for(var _fun52698_ip = 0; ; ) switch(_fun52698_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun52698_ip = 11; continue _fun52698 }
 9:
            mike = {};
 11:
            oscar = mike.context;
            if(!(oscar === entity)) { _fun52698_ip = 33; continue _fun52698 }
 20:
            zulu = _closure1_slot10;
            oscar = zulu.DEFAULT;
 33:
            report = mike.syncRemote;
            if(!(report === entity)) { _fun52698_ip = 45; continue _fun52698 }
 43:
            report = true;
 45:
            options = mike.usedKeybind;
            if(!(options === entity)) { _fun52698_ip = 57; continue _fun52698 }
 55:
            options = false;
 57:
            golf = mike.location;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52698_ip = 145; continue _fun52698 }
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
        _fun52699: for(var _fun52699_ip = 0; ; ) switch(_fun52699_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun52699_ip = 22; continue _fun52699 }
 9:
            mike = _closure1_slot10;
            report = mike.DEFAULT;
 22:
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52699_ip = 87; continue _fun52699 }
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
        _fun52700: for(var _fun52700_ip = 0; ; ) switch(_fun52700_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun52700_ip = 22; continue _fun52700 }
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
        _fun52701: for(var _fun52701_ip = 0; ; ) switch(_fun52701_ip) {
 0:
            golf = arguments[2];
            oscar = arguments[3];
            report = arguments[4];
            entity = undefined;
            if(!(golf === entity)) { _fun52701_ip = 28; continue _fun52701 }
 15:
            mike = _closure1_slot10;
            golf = mike.DEFAULT;
 28:
            if(!(oscar === entity)) { _fun52701_ip = 34; continue _fun52701 }
 32:
            oscar = true;
 34:
            if(!(report === entity)) { _fun52701_ip = 40; continue _fun52701 }
 38:
            report = false;
 40:
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52701_ip = 123; continue _fun52701 }
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
        _fun52702: for(var _fun52702_ip = 0; ; ) switch(_fun52702_ip) {
 0:
            options = arguments[2];
            entity = undefined;
            if(!(options === entity)) { _fun52702_ip = 22; continue _fun52702 }
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
        _fun52703: for(var _fun52703_ip = 0; ; ) switch(_fun52703_ip) {
 0:
            report = arguments[3];
            entity = undefined;
            if(!(report === entity)) { _fun52703_ip = 22; continue _fun52703 }
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
        _fun52704: for(var _fun52704_ip = 0; ; ) switch(_fun52704_ip) {
 0:
            romeo = argFoo;
            golf = arguments[1];
            verify = arguments[2];
            mike = arguments[3];
            entity = undefined;
            if(!(golf === entity)) { _fun52704_ip = 20; continue _fun52704 }
 18:
            golf = {};
 20:
            if(!(verify === entity)) { _fun52704_ip = 37; continue _fun52704 }
 24:
            zulu = _closure1_slot10;
            verify = zulu.DEFAULT;
 37:
            if(!(mike === entity)) { _fun52704_ip = 43; continue _fun52704 }
 41:
            mike = {};
 43:
            yankee = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52704_ip = 615; continue _fun52704 }
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
            if(!(romeo === zulu)) { _fun52704_ip = 434; continue _fun52704 }
 176:
            zulu = _closure1_slot8;
            zulu = zulu.VOICE_ACTIVITY;
            if(!(romeo === zulu)) { _fun52704_ip = 615; continue _fun52704 }
 193:
            if(!(options !== golf)) { _fun52704_ip = 615; continue _fun52704 }
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
            if(!zulu) { _fun52704_ip = 287; continue _fun52704 }
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
            if(sizing) { _fun52704_ip = 351; continue _fun52704 }
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
            _fun52704_ip = 615; continue _fun52704;
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
            if(!zulu) { _fun52704_ip = 521; continue _fun52704 }
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
            if(yankee) { _fun52704_ip = 589; continue _fun52704 }
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
        _fun52705: for(var _fun52705_ip = 0; ; ) switch(_fun52705_ip) {
 0:
            verify = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun52705_ip = 14; continue _fun52705 }
 12:
            mike = {};
 14:
            options = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52705_ip = 195; continue _fun52705 }
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
            if(!zulu) { _fun52705_ip = 123; continue _fun52705 }
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
            if(options) { _fun52705_ip = 184; continue _fun52705 }
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
        _fun52706: for(var _fun52706_ip = 0; ; ) switch(_fun52706_ip) {
 0:
            verify = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun52706_ip = 14; continue _fun52706 }
 12:
            mike = {};
 14:
            options = mike.analyticsLocations;
            zulu = _closure1_slot11;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52706_ip = 193; continue _fun52706 }
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
            if(!zulu) { _fun52706_ip = 121; continue _fun52706 }
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
            if(options) { _fun52706_ip = 182; continue _fun52706 }
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
        _fun52707: for(var _fun52707_ip = 0; ; ) switch(_fun52707_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun52707_ip = 14; continue _fun52707 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun52707_ip = 156; continue _fun52707 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun52707_ip = 49; continue _fun52707 }
 45:
            if(!(tango != zulu)) { _fun52707_ip = 110; continue _fun52707 }
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
        _fun52708: for(var _fun52708_ip = 0; ; ) switch(_fun52708_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun52708_ip = 14; continue _fun52708 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun52708_ip = 156; continue _fun52708 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun52708_ip = 49; continue _fun52708 }
 45:
            if(!(tango != zulu)) { _fun52708_ip = 110; continue _fun52708 }
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
        _fun52709: for(var _fun52709_ip = 0; ; ) switch(_fun52709_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun52709_ip = 14; continue _fun52709 }
 12:
            mike = {};
 14:
            verify = mike.location;
            zulu = mike.analyticsLocations;
            tango = _closure1_slot11;
            tango = tango.bind(entity)();
            if(tango) { _fun52709_ip = 154; continue _fun52709 }
 39:
            tango = null;
            if(!(tango == verify)) { _fun52709_ip = 49; continue _fun52709 }
 45:
            if(!(tango != zulu)) { _fun52709_ip = 108; continue _fun52709 }
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
        _fun52710: for(var _fun52710_ip = 0; ; ) switch(_fun52710_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52710_ip = 72; continue _fun52710 }
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
        _fun52711: for(var _fun52711_ip = 0; ; ) switch(_fun52711_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52711_ip = 104; continue _fun52711 }
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
        _fun52712: for(var _fun52712_ip = 0; ; ) switch(_fun52712_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52712_ip = 107; continue _fun52712 }
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
        _fun52713: for(var _fun52713_ip = 0; ; ) switch(_fun52713_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52713_ip = 65; continue _fun52713 }
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
        _fun52714: for(var _fun52714_ip = 0; ; ) switch(_fun52714_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52714_ip = 72; continue _fun52714 }
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
        _fun52715: for(var _fun52715_ip = 0; ; ) switch(_fun52715_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52715_ip = 114; continue _fun52715 }
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
        _fun52716: for(var _fun52716_ip = 0; ; ) switch(_fun52716_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52716_ip = 72; continue _fun52716 }
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
        _fun52717: for(var _fun52717_ip = 0; ; ) switch(_fun52717_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52717_ip = 106; continue _fun52717 }
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
        _fun52718: for(var _fun52718_ip = 0; ; ) switch(_fun52718_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52718_ip = 102; continue _fun52718 }
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
        _fun52719: for(var _fun52719_ip = 0; ; ) switch(_fun52719_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            report = argBaz;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52719_ip = 248; continue _fun52719 }
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
            if(!(options === golf)) { _fun52719_ip = 158; continue _fun52719 }
 80:
            if(!(verify === oscar)) { _fun52719_ip = 123; continue _fun52719 }
 84:
            if(!(offset !== report)) { _fun52719_ip = 191; continue _fun52719 }
 88:
            tango = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 11;
            zulu = yankee[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 'global_attenuation_for_other_speak_enabled';
            zulu = tango.bind(entity)(zulu, report, offset);
            _fun52719_ip = 191; continue _fun52719;
 123:
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 11;
            zulu = offset[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 'global_attenuation_for_self_speak_enabled';
            zulu = tango.bind(entity)(zulu, oscar, verify);
            _fun52719_ip = 191; continue _fun52719;
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
        _fun52720: for(var _fun52720_ip = 0; ; ) switch(_fun52720_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52720_ip = 104; continue _fun52720 }
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
        _fun52721: for(var _fun52721_ip = 0; ; ) switch(_fun52721_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52721_ip = 58; continue _fun52721 }
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
        _fun52722: for(var _fun52722_ip = 0; ; ) switch(_fun52722_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52722_ip = 106; continue _fun52722 }
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
                _fun52725: for(var _fun52725_ip = 0; ; ) switch(_fun52725_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun52725_ip = 148; continue _fun52725 }
 10:
                    zulu = _closure1_slot11;
                    mike = undefined;
                    zulu = zulu.bind(mike)();
                    if(zulu) { _fun52725_ip = 145; continue _fun52725 }
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
                    if(report) { _fun52725_ip = 142; continue _fun52725 }
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
                    _fun52725_ip = 145; continue _fun52725;
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
        _fun52726: for(var _fun52726_ip = 0; ; ) switch(_fun52726_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52726_ip = 106; continue _fun52726 }
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
        _fun52727: for(var _fun52727_ip = 0; ; ) switch(_fun52727_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52727_ip = 104; continue _fun52727 }
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
        _fun52728: for(var _fun52728_ip = 0; ; ) switch(_fun52728_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52728_ip = 106; continue _fun52728 }
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
                _fun52731: for(var _fun52731_ip = 0; ; ) switch(_fun52731_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun52731_ip = 147; continue _fun52731 }
 10:
                    zulu = _closure1_slot11;
                    mike = undefined;
                    zulu = zulu.bind(mike)();
                    if(zulu) { _fun52731_ip = 144; continue _fun52731 }
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
                    if(report) { _fun52731_ip = 141; continue _fun52731 }
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
                    _fun52731_ip = 144; continue _fun52731;
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
        _fun52733: for(var _fun52733_ip = 0; ; ) switch(_fun52733_ip) {
 0:
            report = argFoo;
            zulu = null;
            tango = zulu == report;
            entity = undefined;
            mike = undefined;
            if(tango) { _fun52733_ip = 22; continue _fun52733 }
 16:
            mike = report.qualityOptions;
 22:
            if(!(zulu != mike)) { _fun52733_ip = 98; continue _fun52733 }
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
        _fun52734: for(var _fun52734_ip = 0; ; ) switch(_fun52734_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52734_ip = 106; continue _fun52734 }
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
        _fun52735: for(var _fun52735_ip = 0; ; ) switch(_fun52735_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52735_ip = 106; continue _fun52735 }
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
        _fun52736: for(var _fun52736_ip = 0; ; ) switch(_fun52736_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52736_ip = 60; continue _fun52736 }
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
        _fun52737: for(var _fun52737_ip = 0; ; ) switch(_fun52737_ip) {
 0:
            zulu = _closure1_slot11;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(zulu) { _fun52737_ip = 65; continue _fun52737 }
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