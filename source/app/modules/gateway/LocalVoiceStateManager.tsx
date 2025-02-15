// app/modules/gateway/LocalVoiceStateManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot18;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot18 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ApplicationStreamStates;
    var _closure1_slot14 = options;
    options = tango.ChannelTypes;
    var _closure1_slot15 = options;
    tango = tango.VoiceFlags;
    var _closure1_slot16 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: LocalVoiceStateManager
            tango = this;
            report = _closure1_slot3;
            zulu = _closure2_slot0;
            mike = undefined;
            report = report.bind(mike)(tango, zulu);
            entity = _closure1_slot17;
            entity = entity.bind(mike)(tango, zulu);
            mike = argFoo;
            entity['socket'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'guildId';
        report['key'] = entity;
        entity = function() { // Original name: get
            mike = this;
            entity = mike.getState;
            entity = entity.bind(mike)();
            entity = entity.guildId;
            return entity;
        };
        report['get'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'channelId';
        report['key'] = golf;
        golf = function() { // Original name: get
            mike = this;
            entity = mike.getState;
            entity = entity.bind(mike)();
            entity = entity.channelId;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'computeVoiceFlags';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 12;
                mike = report[mike];
                oscar = undefined;
                mike = tango.bind(oscar)(mike);
                zulu = mike.ClipsAllowVoiceRecording;
                mike = zulu.getSetting;
                offset = mike.bind(zulu)();
                golf = 13;
                mike = report[golf];
                verify = tango.bind(oscar)(mike);
                options = verify.setFlag;
                mike = _closure1_slot16;
                zulu = mike.ALLOW_VOICE_RECORDING;
                mike = 0;
                verify = options.bind(verify)(mike, zulu, offset);
                zulu = _closure1_slot1;
                mike = 14;
                mike = report[mike];
                zulu = zulu.bind(oscar)(mike);
                mike = _closure1_slot12;
                mike = zulu.bind(oscar)(mike);
                zulu = 15;
                zulu = report[zulu];
                tango = tango.bind(oscar)(zulu);
                zulu = tango.areClipsEnabled;
                options = zulu.bind(tango)();
                if(!options) { _fun00006_ip = 148; continue _fun00005 }
 128:
                tango = _closure1_slot8;
                zulu = tango.getSettings;
                zulu = zulu.bind(tango)();
                options = zulu.clipsEnabled;
 148:
                if(!options) { _fun00006_ip = 243; continue _fun00005 }
 151:
                tango = _closure1_slot10;
                zulu = tango.getCurrentUserActiveStream;
                zulu = zulu.bind(tango)();
                report = null;
                offset = report == zulu;
                tango = undefined;
                if(offset) { _fun00006_ip = 181; continue _fun00005 }
 176:
                tango = zulu.state;
 181:
                zulu = _closure1_slot14;
                zulu = zulu.ACTIVE;
                zulu = tango === zulu;
                if(zulu) { _fun00006_ip = 240; continue _fun00005 }
 198:
                offset = _closure1_slot10;
                tango = offset.getCurrentUserActiveStream;
                tango = tango.bind(offset)();
                offset = report == tango;
                report = undefined;
                if(offset) { _fun00006_ip = 226; continue _fun00005 }
 221:
                report = tango.state;
 226:
                tango = _closure1_slot14;
                tango = tango.PAUSED;
                zulu = report === tango;
 240:
                options = zulu;
 243:
                tango = _closure1_slot8;
                zulu = tango.isDecoupledGameClippingEnabled;
                zulu = zulu.bind(tango)();
                offset = mike;
                if(!mike) { _fun00006_ip = 283; continue _fun00005 }
 263:
                report = _closure1_slot8;
                tango = report.getSettings;
                tango = tango.bind(report)();
                offset = tango.decoupledClipsEnabled;
 283:
                if(!offset) { _fun00006_ip = 321; continue _fun00005 }
 286:
                report = _closure1_slot9;
                tango = report.getVisibleGame;
                yankee = tango.bind(report)();
                report = null;
                romeo = report == yankee;
                tango = undefined;
                if(romeo) { _fun00006_ip = 317; continue _fun00005 }
 311:
                tango = yankee.windowHandle;
 317:
                offset = report != tango;
 321:
                if(!offset) { _fun00006_ip = 327; continue _fun00005 }
 324:
                offset = zulu;
 327:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[golf];
                report = tango.bind(oscar)(zulu);
                tango = report.setFlag;
                zulu = _closure1_slot16;
                zulu = zulu.CLIPS_ENABLED;
                if(options) { _fun00006_ip = 366; continue _fun00005 }
 363:
                options = offset;
 366:
                report = tango.bind(report)(verify, zulu, options);
                tango = _closure1_slot1;
                options = _closure1_slot2;
                zulu = 16;
                zulu = options[zulu];
                verify = tango.bind(oscar)(zulu);
                options = verify.getCurrentConfig;
                tango = {};
                zulu = 'computeVoiceFlags';
                tango['location'] = zulu;
                zulu = {};
                offset = false;
                zulu['autoTrackExposure'] = offset;
                zulu = options.bind(verify)(tango, zulu);
                tango = zulu.enableViewerClipping;
                if(!tango) { _fun00006_ip = 438; continue _fun00005 }
 435:
                tango = mike;
 438:
                if(!tango) { _fun00006_ip = 461; continue _fun00005 }
 441:
                zulu = _closure1_slot8;
                mike = zulu.getSettings;
                mike = mike.bind(zulu)();
                tango = mike.viewerClipsEnabled;
 461:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[golf];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.setFlag;
                entity = _closure1_slot16;
                entity = entity.ALLOW_ANY_VIEWER_CLIPS;
                entity = mike.bind(zulu)(report, entity, tango);
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getInitialState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {'guildId': null, 'channelId': null, 'selfMute': null, 'selfDeaf': null, 'selfVideo': null, 'preferredRegion': null, 'preferredRegions': null, 'videoStreamParameters': null, 'flags': 0};
            zulu = _closure1_slot12;
            mike = zulu.isSelfMute;
            mike = mike.bind(zulu)();
            entity['selfMute'] = mike;
            mike = zulu.isSelfDeaf;
            mike = mike.bind(zulu)();
            entity['selfDeaf'] = mike;
            mike = zulu.isVideoEnabled;
            mike = mike.bind(zulu)();
            entity['selfVideo'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getNextState';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            zulu = this;
            tango = entity.guildId;
            mike = entity.channelId;
            entity = {};
            entity['guildId'] = tango;
            entity['channelId'] = mike;
            tango = _closure1_slot12;
            report = tango.isSelfMute;
            report = report.bind(tango)();
            entity['selfMute'] = report;
            report = tango.isSelfDeaf;
            report = report.bind(tango)();
            entity['selfDeaf'] = report;
            report = tango.isVideoEnabled;
            report = report.bind(tango)();
            entity['selfVideo'] = report;
            report = _closure1_slot13;
            mike = report.getPreferredRegion;
            mike = mike.bind(report)();
            entity['preferredRegion'] = mike;
            mike = report.getPreferredRegions;
            mike = mike.bind(report)();
            entity['preferredRegions'] = mike;
            mike = tango.getVideoStreamParameters;
            mike = mike.bind(tango)();
            entity['videoStreamParameters'] = mike;
            mike = zulu.computeVoiceFlags;
            mike = mike.bind(zulu)();
            entity['flags'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'shouldCommit';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.socket;
            entity = mike.isSessionEstablished;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'didCommit';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                mike = this;
                foxtrot = entity.guildId;
                romeo = entity.channelId;
                yankee = entity.selfMute;
                offset = entity.selfDeaf;
                verify = entity.selfVideo;
                options = entity.preferredRegion;
                golf = entity.preferredRegions;
                oscar = entity.videoStreamParameters;
                report = entity.flags;
                entity = undefined;
                if(!(report === entity)) { _fun00008_ip = 65; continue _fun00007 }
 63:
                report = 0;
 65:
                if(!verify) { _fun00008_ip = 115; continue _fun00007 }
 68:
                backup = _closure1_slot11;
                tango = backup.getChannel;
                backup = tango.bind(backup)(romeo);
                tango = null;
                kilo = tango == backup;
                tango = undefined;
                if(kilo) { _fun00008_ip = 101; continue _fun00007 }
 96:
                tango = backup.type;
 101:
                zulu = _closure1_slot15;
                zulu = zulu.GUILD_STAGE_VOICE;
                if(!(tango !== zulu)) { _fun00008_ip = 173; continue _fun00007 }
 115:
                backup = mike.socket;
                tango = backup.voiceStateUpdate;
                zulu = {};
                zulu['guildId'] = foxtrot;
                zulu['channelId'] = romeo;
                zulu['selfMute'] = yankee;
                zulu['selfDeaf'] = offset;
                zulu['selfVideo'] = verify;
                zulu['preferredRegion'] = options;
                zulu['preferredRegions'] = golf;
                zulu['flags'] = report;
                zulu = tango.bind(backup)(zulu);
                _fun00008_ip = 234; continue _fun00007;
 173:
                tango = mike.socket;
                zulu = tango.voiceStateUpdate;
                mike = {};
                mike['guildId'] = foxtrot;
                mike['channelId'] = romeo;
                mike['selfMute'] = yankee;
                mike['selfDeaf'] = offset;
                mike['selfVideo'] = verify;
                mike['preferredRegion'] = options;
                mike['preferredRegions'] = golf;
                mike['videoStreamParameters'] = oscar;
                mike['flags'] = report;
                mike = zulu.bind(tango)(mike);
 234:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/LocalVoiceStateManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();