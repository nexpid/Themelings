// discord_common/js/packages/media-engine/BaseConnection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    tango = argBar;
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun50744: for(var _fun50744_ip = 0; ; ) switch(_fun50744_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun50744_ip = 46; continue _fun50744 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun50744_ip = 55; continue _fun50744 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun50744_ip = 343; continue _fun50744 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun50744_ip = 323; continue _fun50744 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun50744_ip = 283; continue _fun50744 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun50744_ip = 270; continue _fun50744 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun50744_ip = 163; continue _fun50744 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun50744_ip = 179; continue _fun50744 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun50744_ip = 249; continue _fun50744 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun50744_ip = 249; continue _fun50744 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun50744_ip = 234; continue _fun50744 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun50744_ip = 247; continue _fun50744 }
 234:
            verify = _closure1_slot18;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun50744_ip = 265; continue _fun50744;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun50744_ip = 283; continue _fun50744;
 270:
            golf = _closure1_slot18;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun50744_ip = 323; continue _fun50744 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun50744_ip = 330; continue _fun50744 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun50745: for(var _fun50745_ip = 0; ; ) switch(_fun50745_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun50745_ip = 56; continue _fun50745 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun50745_ip = 67; continue _fun50745;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun50746: for(var _fun50746_ip = 0; ; ) switch(_fun50746_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun50746_ip = 23; continue _fun50746 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun50746_ip = 33; continue _fun50746 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun50746_ip = 70; continue _fun50746 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun50746_ip = 55; continue _fun50746 }
 70:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun50747: for(var _fun50747_ip = 0; ; ) switch(_fun50747_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun50747_ip = 48; continue _fun50747 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun50747_ip = 86; continue _fun50747;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun50748: for(var _fun50748_ip = 0; ; ) switch(_fun50748_ip) {
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
 70: // try_end0
            _fun50748_ip = 74; continue _fun50748;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, oscar);
    oscar = 0;
    options = report[oscar];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = report[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = report[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = report[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = report[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = report[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = report[options];
    options = tango.bind(entity)(options);
    verify = options.ConnectionStates;
    var _closure1_slot9 = verify;
    verify = options.DEFAULT_VOICE_BITRATE;
    var _closure1_slot10 = verify;
    verify = options.MediaTypes;
    var _closure1_slot11 = verify;
    verify = options.ResolutionTypes;
    var _closure1_slot12 = verify;
    verify = options.MediaEngineContextTypes;
    var _closure1_slot13 = verify;
    verify = options.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot14 = verify;
    options = options.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = options;
    var _closure1_slot16 = oscar;
    oscar = 11;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    mike = function(argFoo) {
        tango = function(argFoo, argBar) { // Original name: BaseConnection
            golf = argFoo;
            report = this;
            entity = _closure1_slot4;
            zulu = _closure2_slot1;
            tango = undefined;
            entity = entity.bind(tango)(report, zulu);
            entity = _closure1_slot19;
            entity = entity.bind(tango)(report, zulu);
            zulu = _closure1_slot16;
            report = parseFloat(zulu);
            zulu = report + 1;
            _closure1_slot16 = zulu;
            zulu = 'WebRTC-';
            zulu = zulu + report;
            entity['mediaEngineConnectionId'] = zulu;
            report = false;
            entity['destroyed'] = report;
            zulu = 0;
            entity['audioSSRC'] = zulu;
            entity['selfDeaf'] = report;
            entity['selfMute'] = report;
            zulu = {};
            entity['localMutes'] = zulu;
            zulu = {};
            entity['disabledLocalVideos'] = zulu;
            zulu = {};
            entity['localVolumes'] = zulu;
            entity['isActiveOutputSinksEnabled'] = report;
            zulu = global;
            oscar = zulu.Map;
            options = oscar.prototype;
            options = Object.create(options, {constructor: {value: oscar}});
            yankee = options;
            oscar = new yankee[oscar](offset);
            oscar = oscar instanceof Object ? oscar : options;
            entity['activeOutputSinks'] = oscar;
            entity['videoSupported'] = report;
            entity['useElectronVideo'] = report;
            oscar = _closure1_slot10;
            entity['voiceBitrate'] = oscar;
            oscar = _closure1_slot14;
            entity['remoteSinkWantsMaxFramerate'] = oscar;
            oscar = zulu.Set;
            options = oscar.prototype;
            options = Object.create(options, {constructor: {value: oscar}});
            yankee = options;
            oscar = new yankee[oscar](offset);
            oscar = oscar instanceof Object ? oscar : options;
            entity['wantsPriority'] = oscar;
            oscar = {};
            entity['localSpeakingFlags'] = oscar;
            entity['videoReady'] = report;
            report = new Array(0);
            entity['videoStreamParameters'] = report;
            report = {};
            oscar = 100;
            report['any'] = oscar;
            entity['remoteVideoSinkWants'] = report;
            report = {};
            report['any'] = oscar;
            entity['localVideoSinkWants'] = report;
            report = _closure1_slot9;
            report = report.CONNECTING;
            entity['connectionState'] = report;
            report = function() {
                entity = undefined;
                return entity;
            };
            entity['onDesktopEncodingOptionsSet'] = report;
            zulu = zulu.Set;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            yankee = report;
            zulu = new yankee[zulu](offset);
            zulu = zulu instanceof Object ? zulu : report;
            entity['experimentFlags'] = zulu;
            entity['context'] = golf;
            zulu = argBar;
            entity['userId'] = zulu;
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.VideoQualityManager;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            yankee = oscar;
            offset = golf;
            verify = entity;
            mike = new yankee[mike](offset, verify, options);
            mike = mike instanceof Object ? mike : oscar;
            entity['videoQualityManager'] = mike;
            mike = 8;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.default;
            verify = entity.videoQualityManager;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            yankee = zulu;
            offset = entity;
            mike = new yankee[tango](offset, verify, options);
            mike = mike instanceof Object ? mike : zulu;
            entity['framerateReducer'] = mike;
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot8;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot5;
        report = {};
        entity = 'destroy';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            entity = true;
            zulu['destroyed'] = entity;
            mike = zulu.framerateReducer;
            entity = mike.destroy;
            entity = entity.bind(mike)();
            tango = zulu.setConnectionState;
            mike = _closure1_slot9;
            mike = mike.DISCONNECTED;
            mike = tango.bind(zulu)(mike);
            tango = zulu.emit;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = report.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            mike = mike.Destroy;
            mike = tango.bind(zulu)(mike, zulu);
            mike = zulu.removeAllListeners;
            mike = mike.bind(zulu)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(27);
        entity[0] = report;
        report = {};
        options = 'getLocalMute';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50755: for(var _fun50755_ip = 0; ; ) switch(_fun50755_ip) {
 0:
                entity = this;
                mike = entity.localMutes;
                entity = argFoo;
                entity = mike[entity];
                if(entity) { _fun50755_ip = 21; continue _fun50755 }
 19:
                entity = false;
 21:
                return entity;
            }
        };
        report['value'] = options;
        entity[1] = report;
        report = {};
        options = 'getLocalVideoDisabled';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50756: for(var _fun50756_ip = 0; ; ) switch(_fun50756_ip) {
 0:
                entity = this;
                mike = entity.disabledLocalVideos;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun50756_ip = 28; continue _fun50756 }
 25:
                entity = mike;
 28:
                return entity;
            }
        };
        report['value'] = options;
        entity[2] = report;
        report = {};
        options = 'setLocalVideoDisabled';
        report['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            oscar = argFoo;
            report = argBar;
            tango = this;
            entity = tango.disabledLocalVideos;
            entity[oscar] = report;
            zulu = tango.emit;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            mike = mike.LocalVideoDisabled;
            mike = zulu.bind(tango)(mike, oscar, report);
            return entity;
        };
        report['value'] = options;
        entity[3] = report;
        report = {};
        options = 'getHasActiveVideoOutputSink';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50758: for(var _fun50758_ip = 0; ; ) switch(_fun50758_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = mike.activeOutputSinks;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(!entity) { _fun50758_ip = 52; continue _fun50758 }
 25:
                zulu = mike.activeOutputSinks;
                mike = zulu.get;
                mike = mike.bind(zulu)(tango);
                zulu = mike.size;
                mike = 0;
                entity = zulu > mike;
 52:
                return entity;
            }
        };
        report['value'] = options;
        entity[4] = report;
        report = {};
        options = 'setHasActiveVideoOutputSink';
        report['key'] = options;
        options = function(argFoo, argBar, argBaz) { // Original name: value
            _fun50759: for(var _fun50759_ip = 0; ; ) switch(_fun50759_ip) {
 0:
                report = argFoo;
                zulu = argBaz;
                tango = this;
                entity = tango.getHasActiveVideoOutputSink;
                entity = entity.bind(tango)(report);
                oscar = tango.activeOutputSinks;
                mike = oscar.get;
                oscar = mike.bind(oscar)(report);
                mike = null;
                if(!(mike == oscar)) { _fun50759_ip = 70; continue _fun50759 }
 42:
                mike = global;
                mike = mike.Set;
                golf = mike.prototype;
                golf = Object.create(golf, {constructor: {value: mike}});
                yankee = golf;
                mike = new yankee[mike](offset);
                oscar = mike instanceof Object ? mike : golf;
 70:
                mike = argBar;
                if(mike) { _fun50759_ip = 88; continue _fun50759 }
 76:
                mike = oscar.delete;
                mike = mike.bind(oscar)(zulu);
                _fun50759_ip = 98; continue _fun50759;
 88:
                mike = oscar.add;
                mike = mike.bind(oscar)(zulu);
 98:
                zulu = tango.activeOutputSinks;
                mike = zulu.set;
                mike = mike.bind(zulu)(report, oscar);
                mike = tango.getHasActiveVideoOutputSink;
                zulu = mike.bind(tango)(report);
                mike = true;
                tango['isActiveOutputSinksEnabled'] = mike;
                if(!(entity !== zulu)) { _fun50759_ip = 188; continue _fun50759 }
 138:
                mike = tango.emit;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 9;
                oscar = oscar[entity];
                entity = undefined;
                entity = golf.bind(entity)(oscar);
                entity = entity.BaseConnectionEvent;
                entity = entity.ActiveSinksChange;
                entity = mike.bind(tango)(entity, report, zulu);
 188:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[5] = report;
        report = {};
        options = 'getActiveOutputSinkTrackingEnabled';
        report['key'] = options;
        options = function() { // Original name: value
            entity = this;
            entity = entity.isActiveOutputSinksEnabled;
            return entity;
        };
        report['value'] = options;
        entity[6] = report;
        report = {};
        options = 'setUseElectronVideo';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['useElectronVideo'] = mike;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[7] = report;
        report = {};
        options = 'setClipRecordUser';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[8] = report;
        report = {};
        options = 'setViewerSideClip';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[9] = report;
        report = {};
        options = 'setRemoteAudioHistory';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[10] = report;
        report = {};
        options = 'setClipsKeyFrameInterval';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[11] = report;
        report = {};
        options = 'setQualityDecoupling';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[12] = report;
        report = {};
        options = 'presentDesktopSourcePicker';
        report['key'] = options;
        options = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[13] = report;
        report = {};
        options = 'getStreamParameters';
        report['key'] = options;
        options = function() { // Original name: value
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 10;
            entity = zulu[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = this;
            entity = entity.videoStreamParameters;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = options;
        entity[14] = report;
        report = {};
        options = 'setExperimentFlag';
        report['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun50769: for(var _fun50769_ip = 0; ; ) switch(_fun50769_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.experimentFlags;
                entity = argBar;
                if(entity) { _fun50769_ip = 30; continue _fun50769 }
 18:
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
                _fun50769_ip = 40; continue _fun50769;
 30:
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
 40:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[15] = report;
        report = {};
        options = 'setConnectionState';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            entity = argFoo;
            report = this;
            tango = report.logger;
            zulu = tango.info;
            options = report.connectionState;
            mike = global;
            mike = mike.HermesInternal;
            golf = mike.concat;
            oscar = 'Connection state change: ';
            mike = ' => ';
            mike = golf.bind(oscar)(options, mike, entity);
            mike = zulu.bind(tango)(mike);
            report['connectionState'] = entity;
            tango = report.emit;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            zulu = mike.ConnectionStateChange;
            mike = report.connectionState;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = options;
        entity[16] = report;
        report = {};
        options = 'updateVideoQuality';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50771: for(var _fun50771_ip = 0; ; ) switch(_fun50771_ip) {
 0:
                report = this;
                tango = report.videoStreamParameters;
                mike = tango.findIndex;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.quality;
                    entity = 100;
                    entity = entity === mike;
                    return entity;
                };
                result = mike.bind(tango)(entity);
                entity = -1;
                if(!(entity === result)) { _fun50771_ip = 39; continue _fun50771 }
 37:
                result = 0;
 39:
                tango = report.applyQualityConstraints;
                entity = report.videoStreamParameters;
                entity = entity[result];
                mike = entity.ssrc;
                entity = {};
                entity = tango.bind(report)(entity, mike);
                tango = entity.quality;
                golf = entity.constraints;
                verify = _closure1_slot1;
                entity = _closure1_slot2;
                options = 10;
                oscar = entity[options];
                entity = undefined;
                verify = verify.bind(entity)(oscar);
                oscar = report.videoStreamParameters;
                oscar = verify.bind(entity)(oscar);
                output = null;
                if(!(output != tango)) { _fun50771_ip = 237; continue _fun50771 }
 123:
                offset = oscar[result];
                verify = tango.bitrateMax;
                offset['maxBitrate'] = verify;
                offset = oscar[result];
                verify = tango.bitrateMin;
                offset['minBitrate'] = verify;
                offset = oscar[result];
                yankee = tango.bitrateTarget;
                romeo = output != yankee;
                verify = 0;
                if(!romeo) { _fun50771_ip = 177; continue _fun50771 }
 174:
                verify = yankee;
 177:
                offset['targetBitrate'] = verify;
                verify = tango.encode;
                if(!(output != verify)) { _fun50771_ip = 237; continue _fun50771 }
 193:
                offset = oscar[result];
                verify = tango.encode;
                verify = verify.pixelCount;
                offset['maxPixelCount'] = verify;
                offset = oscar[result];
                verify = tango.encode;
                verify = verify.framerate;
                offset['maxFrameRate'] = verify;
 237:
                report['videoStreamParameters'] = oscar;
                oscar = report.videoStreamParameters;
                oscar = oscar.length;
                offset = 0;
                oscar = offset < oscar;
                sizing = 100;
                kilo = tango;
                backup = golf;
                foxtrot = 0;
                romeo = undefined;
                yankee = undefined;
                verify = undefined;
                tango = kilo;
                golf = backup;
                if(!oscar) { _fun50771_ip = 590; continue _fun50771 }
 289:
                update = kilo;
                echo = backup;
                source = romeo;
                if(!(foxtrot !== result)) { _fun50771_ip = 554; continue _fun50771 }
 305:
                vacuum = report.applyQualityConstraints;
                oscar = report.videoStreamParameters;
                oscar = oscar[foxtrot];
                control = oscar.ssrc;
                oscar = {};
                oscar = vacuum.bind(report)(oscar, control);
                control = oscar.quality;
                oscar = oscar.constraints;
                if(!(output != control)) { _fun50771_ip = 504; continue _fun50771 }
 354:
                vacuum = report.videoStreamParameters;
                sequence = vacuum[foxtrot];
                vacuum = control.bitrateMax;
                sequence['maxBitrate'] = vacuum;
                vacuum = report.videoStreamParameters;
                sequence = vacuum[foxtrot];
                vacuum = control.bitrateMin;
                sequence['minBitrate'] = vacuum;
                vacuum = report.videoStreamParameters;
                config = vacuum[foxtrot];
                vacuum = control.bitrateTarget;
                record = output != vacuum;
                sequence = 0;
                if(!record) { _fun50771_ip = 426; continue _fun50771 }
 423:
                sequence = vacuum;
 426:
                config['targetBitrate'] = sequence;
                sequence = control.encode;
                romeo = vacuum;
                if(!(output != sequence)) { _fun50771_ip = 504; continue _fun50771 }
 445:
                sequence = report.videoStreamParameters;
                config = sequence[foxtrot];
                sequence = control.encode;
                sequence = sequence.pixelCount;
                config['maxPixelCount'] = sequence;
                sequence = report.videoStreamParameters;
                config = sequence[foxtrot];
                sequence = control.encode;
                sequence = sequence.framerate;
                config['maxFrameRate'] = sequence;
                romeo = vacuum;
 504:
                vacuum = report.videoStreamParameters;
                vacuum = vacuum[foxtrot];
                vacuum = vacuum.quality;
                update = kilo;
                echo = backup;
                source = romeo;
                yankee = control;
                verify = oscar;
                if(!(sizing === vacuum)) { _fun50771_ip = 554; continue _fun50771 }
 539:
                update = control;
                echo = oscar;
                source = romeo;
                yankee = update;
                verify = echo;
 554:
                foxtrot = foxtrot + 1;
                oscar = report.videoStreamParameters;
                oscar = oscar.length;
                kilo = update;
                backup = echo;
                romeo = source;
                tango = kilo;
                golf = backup;
                if(foxtrot < oscar) { _fun50771_ip = 289; continue _fun50771 }
 590:
                oscar = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[options];
                oscar = oscar.bind(entity)(mike);
                mike = report.videoStreamParameters;
                mike = oscar.bind(entity)(mike);
                golf['streamParameters'] = mike;
                mike = global;
                options = mike.Math;
                oscar = options.max;
                yankee = report.videoStreamParameters;
                verify = yankee.map;
                zulu = function(argFoo) {
                    _fun50773: for(var _fun50773_ip = 0; ; ) switch(_fun50773_ip) {
 0:
                        entity = argFoo;
                        mike = entity.maxPixelCount;
                        entity = null;
                        zulu = entity != mike;
                        entity = 0;
                        if(!zulu) { _fun50773_ip = 23; continue _fun50773 }
 20:
                        entity = mike;
 23:
                        return entity;
                    }
                };
                papa = verify.bind(yankee)(zulu);
                zulu = new Array(0);
                target = zulu;
                context = 0;
                verify = arraySpread(target, papa, context);
                target = oscar;
                papa = zulu;
                context = options;
                zulu = apply(target, papa, context);
                golf['remoteSinkWantsPixelCount'] = zulu;
                oscar = report.pickProperties;
                zulu = argFoo;
                zulu = oscar.bind(report)(golf, zulu);
                golf = report.logger;
                oscar = golf.info;
                offset = mike.JSON;
                verify = offset.stringify;
                options = 4;
                verify = verify.bind(offset)(zulu, entity, options);
                mike = mike.HermesInternal;
                options = mike.concat;
                mike = 'updateVideoQuality: ';
                mike = options.bind(mike)(verify);
                mike = oscar.bind(golf)(mike);
                mike = report.updateVideoQualityCore;
                mike = mike.bind(report)(zulu, tango);
                return entity;
            }
        };
        report['value'] = options;
        entity[17] = report;
        report = {};
        options = 'applyVideoQualityMode';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50774: for(var _fun50774_ip = 0; ; ) switch(_fun50774_ip) {
 0:
                mike = this;
                tango = mike.context;
                zulu = _closure1_slot13;
                zulu = zulu.DEFAULT;
                if(!(tango === zulu)) { _fun50774_ip = 87; continue _fun50774 }
 25:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                zulu = entity.VIDEO_QUALITY_MODES_TO_OVERWRITES;
                entity = argFoo;
                tango = zulu[entity];
                zulu = mike.videoQualityManager;
                entity = zulu.setQualityOverwrite;
                entity = entity.bind(zulu)(tango);
                entity = mike.updateVideoQuality;
                entity = entity.bind(mike)();
 87:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = options;
        entity[18] = report;
        report = {};
        options = 'overwriteQualityForTesting';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            mike = this;
            tango = mike.videoQualityManager;
            zulu = tango.setQualityOverwrite;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            entity = mike.updateVideoQuality;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[19] = report;
        report = {};
        options = 'configureGoLiveSimulcast';
        report['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            entity = this;
            tango = entity.videoQualityManager;
            zulu = tango.configGoLiveSimulcast;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[20] = report;
        report = {};
        options = 'applyQualityConstraints';
        report['key'] = options;
        options = function() { // Original name: value
            _fun50777: for(var _fun50777_ip = 0; ; ) switch(_fun50777_ip) {
 0:
                tango = arguments[0];
                entity = undefined;
                if(!(tango === entity)) { _fun50777_ip = 11; continue _fun50777 }
 9:
                tango = {};
 11:
                entity = this;
                zulu = entity.videoQualityManager;
                mike = zulu.applyQualityConstraints;
                entity = arguments[1];
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        report['value'] = options;
        entity[21] = report;
        report = {};
        options = 'pickProperties';
        report['key'] = options;
        options = function(argFoo, argBar) { // Original name: value
            _fun50778: for(var _fun50778_ip = 0; ; ) switch(_fun50778_ip) {
 0:
                entity = argFoo;
                tango = argBar;
                mike = null;
                if(!(mike != tango)) { _fun50778_ip = 74; continue _fun50778 }
 12:
                if(!(mike != entity)) { _fun50778_ip = 74; continue _fun50778 }
 16:
                mike = {};
                zulu = _closure1_slot17;
                oscar = undefined;
                report = zulu.bind(oscar)(tango);
                tango = report.bind(oscar)();
                zulu = tango.done;
                if(zulu) { _fun50778_ip = 72; continue _fun50778 }
 44:
                golf = tango.value;
                zulu = entity[golf];
                mike[golf] = zulu;
                golf = report.bind(oscar)();
                zulu = golf.done;
                tango = golf;
                if(!zulu) { _fun50778_ip = 44; continue _fun50778 }
 72:
                return mike;
 74:
                return entity;
            }
        };
        report['value'] = options;
        entity[22] = report;
        report = {};
        options = 'initializeStreamParameters';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            report = argFoo;
            mike = this;
            var _closure3_slot0 = mike;
            tango = report.filter;
            zulu = function(argFoo) {
                _fun50780: for(var _fun50780_ip = 0; ; ) switch(_fun50780_ip) {
 0:
                    mike = argFoo;
                    tango = mike.type;
                    entity = _closure1_slot11;
                    entity = entity.VIDEO;
                    entity = tango === entity;
                    if(entity) { _fun50780_ip = 47; continue _fun50780 }
 28:
                    tango = mike.type;
                    zulu = _closure1_slot11;
                    zulu = zulu.SCREEN;
                    entity = tango === zulu;
 47:
                    if(!entity) { _fun50780_ip = 67; continue _fun50780 }
 50:
                    mike = mike.rid;
                    zulu = 'string';
                    mike = typeof mike;
                    entity = zulu === mike;
 67:
                    return entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.map;
            entity = function(argFoo) {
                _fun50781: for(var _fun50781_ip = 0; ; ) switch(_fun50781_ip) {
 0:
                    mike = argFoo;
                    entity = _closure3_slot0;
                    tango = entity.videoQualityManager;
                    zulu = tango.getQuality;
                    entity = mike.ssrc;
                    tango = zulu.bind(tango)(entity);
                    entity = {};
                    zulu = mike.type;
                    entity['type'] = zulu;
                    zulu = mike.active;
                    entity['active'] = zulu;
                    zulu = mike.rid;
                    entity['rid'] = zulu;
                    zulu = mike.ssrc;
                    entity['ssrc'] = zulu;
                    zulu = mike.rtxSsrc;
                    entity['rtxSsrc'] = zulu;
                    zulu = mike.quality;
                    entity['quality'] = zulu;
                    oscar = mike.quality;
                    report = null;
                    golf = report != oscar;
                    zulu = 100;
                    mike = zulu;
                    if(!golf) { _fun50781_ip = 123; continue _fun50781 }
 120:
                    mike = oscar;
 123:
                    if(!(!(mike < zulu))) { _fun50781_ip = 135; continue _fun50781 }
 127:
                    mike = tango.bitrateMax;
                    _fun50781_ip = 148; continue _fun50781;
 135:
                    oscar = tango.bitrateMax;
                    zulu = 4;
                    mike = oscar / zulu;
 148:
                    entity['maxBitrate'] = mike;
                    oscar = tango.capture;
                    golf = report == oscar;
                    mike = undefined;
                    if(golf) { _fun50781_ip = 174; continue _fun50781 }
 168:
                    mike = oscar.framerate;
 174:
                    entity['maxFrameRate'] = mike;
                    mike = {};
                    oscar = _closure1_slot12;
                    oscar = oscar.FIXED;
                    mike['type'] = oscar;
                    golf = tango.capture;
                    options = report == golf;
                    oscar = undefined;
                    if(options) { _fun50781_ip = 218; continue _fun50781 }
 213:
                    oscar = golf.width;
 218:
                    mike['width'] = oscar;
                    tango = tango.capture;
                    report = report == tango;
                    zulu = undefined;
                    if(report) { _fun50781_ip = 242; continue _fun50781 }
 237:
                    zulu = tango.height;
 242:
                    mike['height'] = zulu;
                    entity['maxResolution'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            mike['videoStreamParameters'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = options;
        entity[23] = report;
        report = {};
        options = 'getLocalWant';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            _fun50782: for(var _fun50782_ip = 0; ; ) switch(_fun50782_ip) {
 0:
                golf = argFoo;
                mike = this;
                var _closure3_slot0 = golf;
                tango = mike.videoStreamParameters;
                zulu = tango.some;
                entity = function(argFoo) {
                    _fun50783: for(var _fun50783_ip = 0; ; ) switch(_fun50783_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.ssrc;
                        entity = _closure3_slot0;
                        entity = zulu === entity;
                        if(!entity) { _fun50783_ip = 40; continue _fun50783 }
 23:
                        zulu = mike.quality;
                        mike = _closure1_slot15;
                        entity = zulu === mike;
 40:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                if(entity) { _fun50782_ip = 43; continue _fun50782 }
 37:
                zulu = undefined;
                entity = zulu === golf;
 43:
                tango = mike.context;
                zulu = _closure1_slot13;
                zulu = zulu.DEFAULT;
                tango = tango === zulu;
                if(tango) { _fun50782_ip = 71; continue _fun50782 }
 68:
                tango = entity;
 71:
                oscar = mike.remoteVideoSinkWants;
                report = null;
                if(!(report == golf)) { _fun50782_ip = 113; continue _fun50782 }
 83:
                zulu = mike.videoStreamParameters;
                entity = 0;
                zulu = zulu[entity];
                options = report == zulu;
                entity = undefined;
                if(options) { _fun50782_ip = 110; continue _fun50782 }
 104:
                entity = zulu.ssrc;
 110:
                golf = entity;
 113:
                options = report != golf;
                zulu = 0;
                entity = 0;
                if(!options) { _fun50782_ip = 127; continue _fun50782 }
 124:
                entity = golf;
 127:
                entity = oscar[entity];
                if(!(report != entity)) { _fun50782_ip = 139; continue _fun50782 }
 135:
                if(!(!(entity > zulu))) { _fun50782_ip = 175; continue _fun50782 }
 139:
                mike = mike.remoteVideoSinkWants;
                mike = mike.any;
                if(!(report != mike)) { _fun50782_ip = 162; continue _fun50782 }
 155:
                if(!(mike > zulu)) { _fun50782_ip = 162; continue _fun50782 }
 159:
                if(tango) { _fun50782_ip = 173; continue _fun50782 }
 162:
                zulu = 0;
                if(!tango) { _fun50782_ip = 170; continue _fun50782 }
 167:
                zulu = 100;
 170:
                mike = zulu;
 173:
                return mike;
 175:
                return entity;
            }
        };
        report['value'] = options;
        entity[24] = report;
        report = {};
        options = 'getRemoteVideoSinkWants';
        report['key'] = options;
        options = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.remoteVideoSinkWants;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = options;
        entity[25] = report;
        report = {};
        options = 'emitStats';
        report['key'] = options;
        options = _closure1_slot3;
        golf = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun50786: for(var _fun50786_ip = 0; ; ) switch(_fun50786_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun50786_ip = 91; continue _fun50786 }
 10:
                    mike = report.getStats;
                    mike = mike.bind(report)();
                    SaveGenerator(address=24);
 22:
                    return mike;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun50786_ip = 88; continue _fun50786 }
 30:
                    zulu = null;
                    if(!(zulu != mike)) { _fun50786_ip = 85; continue _fun50786 }
 36:
                    tango = report.emit;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 9;
                    oscar = oscar[zulu];
                    zulu = undefined;
                    zulu = golf.bind(zulu)(oscar);
                    zulu = zulu.BaseConnectionEvent;
                    zulu = zulu.Stats;
                    zulu = tango.bind(report)(zulu, mike);
 85:
                    return mike;
 88:
                    return mike;
 91:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        oscar = function() { // Original name: emitStats
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = oscar;
        entity[26] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(oscar);
    oscar = 12;
    oscar = report[oscar];
    options = tango.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = '../discord_common/js/packages/media-engine/BaseConnection.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = mike;
    mike = 9;
    mike = report[mike];
    mike = tango.bind(entity)(mike);
    mike = mike.BaseConnectionEvent;
    zulu['BaseConnectionEvent'] = mike;
    return entity;
})();