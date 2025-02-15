// discord_common/js/packages/media-engine/VideoQualityManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    tango = global;
    offset = tango.Object;
    oscar = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot2 = report;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.defaultVideoQualityOptions;
    var _closure1_slot4 = golf;
    golf = oscar.MediaEngineContextTypes;
    var _closure1_slot5 = golf;
    offset = oscar.VideoQualityMode;
    golf = oscar.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot6 = golf;
    golf = oscar.DESKTOP_LOW_QUALITY_STREAM_MAX_BITRATE;
    var _closure1_slot7 = golf;
    golf = oscar.DESKTOP_LOW_QUALITY_STREAM_MIN_BITRATE;
    var _closure1_slot8 = golf;
    golf = oscar.VIDEO_QUALITY_GOLIVE_LQ_WIDTH;
    var _closure1_slot9 = golf;
    golf = oscar.VIDEO_QUALITY_GOLIVE_LQ_HEIGHT;
    var _closure1_slot10 = golf;
    oscar = oscar.VIDEO_QUALITY_GOLIVE_LQ_FRAMERATE;
    var _closure1_slot11 = oscar;
    golf = tango.Object;
    oscar = golf.freeze;
    tango = {};
    romeo = offset.AUTO;
    yankee = {};
    tango[romeo] = yankee;
    yankee = offset.FULL;
    offset = {};
    romeo = {'width': 1280, 'height': 720};
    offset['encode'] = romeo;
    tango[yankee] = offset;
    oscar = oscar.bind(golf)(tango);
    tango = function(argFoo) { // Original name: WantsVideoQuality
        _fun50711: for(var _fun50711_ip = 0; ; ) switch(_fun50711_ip) {
 0:
            mike = argFoo;
            zulu = this;
            oscar = _closure1_slot3;
            tango = _closure1_slot14;
            entity = undefined;
            tango = oscar.bind(entity)(zulu, tango);
            tango = mike.capture;
            oscar = null;
            if(!(oscar == tango)) { _fun50711_ip = 50; continue _fun50711 }
 37:
            tango = mike.encode;
            if(!(oscar != tango)) { _fun50711_ip = 202; continue _fun50711 }
 50:
            tango = mike.capture;
            golf = oscar == tango;
            tango = undefined;
            if(golf) { _fun50711_ip = 95; continue _fun50711 }
 65:
            verify = _closure1_slot13;
            yankee = mike.capture;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            romeo = options;
            golf = new romeo[verify](yankee, offset);
            tango = golf instanceof Object ? golf : options;
 95:
            zulu['capture'] = tango;
            tango = mike.encode;
            oscar = oscar == tango;
            tango = undefined;
            if(oscar) { _fun50711_ip = 146; continue _fun50711 }
 116:
            golf = _closure1_slot13;
            yankee = mike.encode;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            romeo = oscar;
            report = new romeo[golf](yankee, offset);
            tango = report instanceof Object ? report : oscar;
 146:
            zulu['encode'] = tango;
            tango = mike.bitrateMin;
            zulu['bitrateMin'] = tango;
            tango = mike.bitrateMax;
            zulu['bitrateMax'] = tango;
            tango = mike.bitrateTarget;
            zulu['bitrateTarget'] = tango;
            mike = mike.localWant;
            zulu['localWant'] = mike;
            return entity;
 202:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            yankee = 'Invalid arguments.';
            romeo = mike;
            entity = new romeo[zulu](yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot14 = tango;
    report = report.bind(entity)(tango);
    var _closure1_slot12 = report;
    tango = function() {
        report = _closure1_slot2;
        tango = function(argFoo) { // Original name: VideoQuality
            mike = argFoo;
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = mike.width;
            zulu['width'] = tango;
            tango = mike.height;
            zulu['height'] = tango;
            tango = mike.framerate;
            zulu['framerate'] = tango;
            tango = mike.width;
            mike = mike.height;
            mike = tango * mike;
            zulu['pixelCount'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        entity = {};
        zulu = 'equals';
        entity['key'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: value
            _fun50714: for(var _fun50714_ip = 0; ; ) switch(_fun50714_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = null;
                entity = zulu == report;
                if(!entity) { _fun50714_ip = 19; continue _fun50714 }
 15:
                entity = zulu == tango;
 19:
                if(entity) { _fun50714_ip = 92; continue _fun50714 }
 22:
                mike = zulu != report;
                if(!mike) { _fun50714_ip = 33; continue _fun50714 }
 29:
                mike = zulu != tango;
 33:
                if(!mike) { _fun50714_ip = 89; continue _fun50714 }
 36:
                oscar = report.width;
                zulu = tango.width;
                zulu = oscar === zulu;
                if(!zulu) { _fun50714_ip = 67; continue _fun50714 }
 53:
                golf = report.height;
                oscar = tango.height;
                zulu = golf === oscar;
 67:
                if(!zulu) { _fun50714_ip = 86; continue _fun50714 }
 70:
                report = report.framerate;
                tango = tango.framerate;
                zulu = report === tango;
 86:
                mike = zulu;
 89:
                entity = mike;
 92:
                return entity;
            }
        };
        entity['value'] = zulu;
        zulu = new Array(2);
        zulu[0] = entity;
        entity = {};
        oscar = 'extend';
        entity['key'] = oscar;
        mike = function(argFoo, argBar) { // Original name: value
            _fun50715: for(var _fun50715_ip = 0; ; ) switch(_fun50715_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                options = null;
                if(!(options != mike)) { _fun50715_ip = 181; continue _fun50715 }
 15:
                if(!(options != entity)) { _fun50715_ip = 179; continue _fun50715 }
 22:
                tango = options == entity;
                zulu = undefined;
                if(tango) { _fun50715_ip = 36; continue _fun50715 }
 31:
                zulu = entity.width;
 36:
                if(!(options == zulu)) { _fun50715_ip = 57; continue _fun50715 }
 40:
                report = options == mike;
                tango = undefined;
                if(report) { _fun50715_ip = 54; continue _fun50715 }
 49:
                tango = mike.width;
 54:
                zulu = tango;
 57:
                oscar = options != zulu;
                tango = 0;
                if(!oscar) { _fun50715_ip = 69; continue _fun50715 }
 66:
                tango = zulu;
 69:
                oscar = options == entity;
                zulu = undefined;
                if(oscar) { _fun50715_ip = 83; continue _fun50715 }
 78:
                zulu = entity.height;
 83:
                if(!(options == zulu)) { _fun50715_ip = 104; continue _fun50715 }
 87:
                verify = options == mike;
                oscar = undefined;
                if(verify) { _fun50715_ip = 101; continue _fun50715 }
 96:
                oscar = mike.height;
 101:
                zulu = oscar;
 104:
                oscar = options != zulu;
                report = 0;
                if(!oscar) { _fun50715_ip = 116; continue _fun50715 }
 113:
                report = zulu;
 116:
                zulu = {};
                zulu['width'] = tango;
                zulu['height'] = report;
                verify = options == entity;
                oscar = undefined;
                if(verify) { _fun50715_ip = 141; continue _fun50715 }
 135:
                oscar = entity.framerate;
 141:
                if(!(options == oscar)) { _fun50715_ip = 163; continue _fun50715 }
 145:
                options = options == mike;
                golf = undefined;
                if(options) { _fun50715_ip = 160; continue _fun50715 }
 154:
                golf = mike.framerate;
 160:
                oscar = golf;
 163:
                zulu['framerate'] = oscar;
                tango = tango * report;
                zulu['pixelCount'] = tango;
                return zulu;
 179:
                return mike;
 181:
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[1] = entity;
        mike = undefined;
        entity = null;
        entity = report.bind(mike)(tango, entity, zulu);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot13 = tango;
    mike = function() {
        tango = _closure1_slot2;
        zulu = function(argFoo, argBar) { // Original name: VideoQualityManager
            _fun50717: for(var _fun50717_ip = 0; ; ) switch(_fun50717_ip) {
 0:
                golf = arguments[2];
                zulu = this;
                entity = undefined;
                if(!(golf === entity)) { _fun50717_ip = 19; continue _fun50717 }
 12:
                golf = _closure1_slot4;
 19:
                report = _closure1_slot3;
                tango = _closure2_slot0;
                tango = report.bind(entity)(zulu, tango);
                tango = argFoo;
                zulu['contextType'] = tango;
                tango = argBar;
                zulu['connection'] = tango;
                zulu['options'] = golf;
                tango = false;
                zulu['isMuted'] = tango;
                oscar = zulu.contextType;
                report = _closure1_slot5;
                report = report.STREAM;
                report = oscar === report;
                zulu['isStreamContext'] = report;
                oscar = _closure1_slot0;
                options = _closure1_slot1;
                report = 3;
                report = options[report];
                report = oscar.bind(entity)(report);
                report = report.MediaSinkWantsLadder;
                oscar = report.prototype;
                oscar = Object.create(oscar, {constructor: {value: report}});
                yankee = oscar;
                offset = golf;
                report = new yankee[report](offset, verify);
                report = report instanceof Object ? report : oscar;
                zulu['ladder'] = report;
                report = zulu.getDefaultGoliveQuality;
                report = report.bind(zulu)();
                zulu['goliveMaxQuality'] = report;
                zulu['goliveSimulcastEnabled'] = tango;
                mike = _closure1_slot7;
                zulu['goliveSimulcastLQBitrateMax'] = mike;
                zulu['goliveSimulcastLQBitrateTarget'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getQuality';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun50718: for(var _fun50718_ip = 0; ; ) switch(_fun50718_ip) {
 0:
                report = this;
                zulu = report.connection;
                mike = zulu.getLocalWant;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = report.isStreamContext;
                if(entity) { _fun50718_ip = 45; continue _fun50718 }
 32:
                entity = report.getVideoQuality;
                zulu = entity.bind(report)(mike);
                _fun50718_ip = 58; continue _fun50718;
 45:
                entity = report.getGoliveQuality;
                zulu = entity.bind(report)(mike);
 58:
                mike = report.qualityOverwrite;
                oscar = null;
                entity = zulu;
                if(!(oscar != mike)) { _fun50718_ip = 278; continue _fun50718 }
 76:
                tango = _closure1_slot12;
                mike = {};
                yankee = _closure1_slot13;
                offset = yankee.extend;
                verify = zulu.encode;
                options = report.qualityOverwrite;
                options = options.encode;
                options = offset.bind(yankee)(verify, options);
                mike['encode'] = options;
                offset = _closure1_slot13;
                verify = offset.extend;
                options = zulu.capture;
                golf = report.qualityOverwrite;
                golf = golf.capture;
                golf = verify.bind(offset)(options, golf);
                mike['capture'] = golf;
                golf = report.qualityOverwrite;
                golf = golf.bitrateMin;
                if(!(oscar == golf)) { _fun50718_ip = 185; continue _fun50718 }
 179:
                golf = zulu.bitrateMin;
 185:
                mike['bitrateMin'] = golf;
                golf = report.qualityOverwrite;
                golf = golf.bitrateMax;
                if(!(oscar == golf)) { _fun50718_ip = 212; continue _fun50718 }
 206:
                golf = zulu.bitrateMax;
 212:
                mike['bitrateMax'] = golf;
                report = report.qualityOverwrite;
                report = report.bitrateTarget;
                if(!(oscar == report)) { _fun50718_ip = 239; continue _fun50718 }
 233:
                report = zulu.bitrateTarget;
 239:
                mike['bitrateTarget'] = report;
                zulu = zulu.localWant;
                mike['localWant'] = zulu;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                backup = zulu;
                foxtrot = mike;
                mike = new backup[tango](foxtrot, romeo);
                entity = mike instanceof Object ? mike : zulu;
 278:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'applyQualityConstraints';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun50719: for(var _fun50719_ip = 0; ; ) switch(_fun50719_ip) {
 0:
                mike = argFoo;
                tango = this;
                zulu = tango.getQuality;
                entity = argBar;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.capture;
                report = null;
                if(!(report != entity)) { _fun50719_ip = 106; continue _fun50719 }
 32:
                entity = zulu.capture;
                entity = entity.width;
                mike['encodingVideoWidth'] = entity;
                entity = zulu.capture;
                entity = entity.height;
                mike['encodingVideoHeight'] = entity;
                entity = zulu.capture;
                entity = entity.framerate;
                mike['encodingVideoFrameRate'] = entity;
                entity = zulu.capture;
                entity = entity.framerate;
                mike['captureVideoFrameRate'] = entity;
 106:
                entity = zulu.encode;
                if(!(report != entity)) { _fun50719_ip = 152; continue _fun50719 }
 116:
                entity = zulu.encode;
                entity = entity.framerate;
                mike['remoteSinkWantsMaxFramerate'] = entity;
                entity = zulu.encode;
                entity = entity.pixelCount;
                mike['remoteSinkWantsPixelCount'] = entity;
 152:
                entity = zulu.bitrateTarget;
                if(!(report == entity)) { _fun50719_ip = 176; continue _fun50719 }
 162:
                entity = zulu.bitrateMax;
                mike['encodingVideoBitRate'] = entity;
                _fun50719_ip = 188; continue _fun50719;
 176:
                entity = zulu.bitrateTarget;
                mike['encodingVideoBitRate'] = entity;
 188:
                entity = zulu.bitrateMin;
                mike['encodingVideoMinBitRate'] = entity;
                entity = zulu.bitrateMax;
                mike['encodingVideoMaxBitRate'] = entity;
                entity = mike.encodingVideoBitRate;
                entity = report != entity;
                if(!entity) { _fun50719_ip = 235; continue _fun50719 }
 225:
                tango = mike.encodingVideoMaxBitRate;
                entity = report != tango;
 235:
                if(!entity) { _fun50719_ip = 275; continue _fun50719 }
 238:
                entity = global;
                oscar = entity.Math;
                report = oscar.min;
                tango = mike.encodingVideoBitRate;
                entity = mike.encodingVideoMaxBitRate;
                entity = report.bind(oscar)(tango, entity);
                mike['encodingVideoBitRate'] = entity;
 275:
                entity = {};
                entity['quality'] = zulu;
                entity['constraints'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setQualityOverwrite';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['qualityOverwrite'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'setGoliveQuality';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun50721: for(var _fun50721_ip = 0; ; ) switch(_fun50721_ip) {
 0:
                zulu = argFoo;
                mike = this;
                tango = _closure1_slot12;
                entity = {};
                verify = _closure1_slot13;
                options = verify.extend;
                oscar = mike.goliveMaxQuality;
                golf = oscar.capture;
                oscar = zulu.capture;
                oscar = options.bind(verify)(golf, oscar);
                entity['capture'] = oscar;
                options = _closure1_slot13;
                golf = options.extend;
                report = mike.goliveMaxQuality;
                oscar = report.encode;
                report = zulu.encode;
                report = golf.bind(options)(oscar, report);
                entity['encode'] = report;
                oscar = zulu.bitrateMin;
                report = null;
                if(!(report == oscar)) { _fun50721_ip = 117; continue _fun50721 }
 105:
                golf = mike.goliveMaxQuality;
                oscar = golf.bitrateMin;
 117:
                entity['bitrateMin'] = oscar;
                oscar = zulu.bitrateMax;
                if(!(report == oscar)) { _fun50721_ip = 144; continue _fun50721 }
 132:
                golf = mike.goliveMaxQuality;
                oscar = golf.bitrateMax;
 144:
                entity['bitrateMax'] = oscar;
                zulu = zulu.bitrateTarget;
                if(!(report == zulu)) { _fun50721_ip = 171; continue _fun50721 }
 159:
                report = mike.goliveMaxQuality;
                zulu = report.bitrateTarget;
 171:
                entity['bitrateTarget'] = zulu;
                zulu = mike.goliveMaxQuality;
                zulu = zulu.localWant;
                entity['localWant'] = zulu;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                romeo = zulu;
                yankee = entity;
                entity = new romeo[tango](yankee, offset);
                entity = entity instanceof Object ? entity : zulu;
                mike['goliveMaxQuality'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'configGoLiveSimulcast';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = argBar;
            entity = this;
            zulu = argFoo;
            entity['goliveSimulcastEnabled'] = zulu;
            entity['goliveSimulcastLQBitrateMax'] = mike;
            entity['goliveSimulcastLQBitrateTarget'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'setGoLiveSimulcastLQTargetBitrate';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['goliveSimulcastLQBitrateTarget'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'shouldEnableGoliveSimulcastForHqQuality';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun50724: for(var _fun50724_ip = 0; ; ) switch(_fun50724_ip) {
 0:
                zulu = argFoo;
                entity = this;
                entity = entity.goliveSimulcastEnabled;
                mike = !entity;
                entity = !mike;
                if(mike) { _fun50724_ip = 83; continue _fun50724 }
 21:
                mike = zulu.width;
                report = 0;
                mike = report === mike;
                if(!mike) { _fun50724_ip = 44; continue _fun50724 }
 35:
                tango = zulu.height;
                mike = report === tango;
 44:
                if(mike) { _fun50724_ip = 80; continue _fun50724 }
 47:
                tango = zulu.width;
                zulu = zulu.height;
                tango = tango * zulu;
                report = _closure1_slot9;
                zulu = _closure1_slot10;
                zulu = report * zulu;
                mike = tango > zulu;
 80:
                entity = mike;
 83:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getVideoQuality';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun50725: for(var _fun50725_ip = 0; ; ) switch(_fun50725_ip) {
 0:
                mike = argFoo;
                tango = this;
                zulu = tango.ladder;
                entity = zulu.getResolution;
                oscar = entity.bind(zulu)(mike);
                entity = tango.options;
                entity = entity.videoBitrate;
                zulu = entity.min;
                entity = oscar.budgetPortion;
                offset = zulu * entity;
                entity = tango.options;
                entity = entity.videoBitrate;
                zulu = entity.max;
                entity = oscar.budgetPortion;
                golf = zulu * entity;
                entity = tango.isMuted;
                if(entity) { _fun50725_ip = 94; continue _fun50725 }
 86:
                options = oscar.framerate;
                _fun50725_ip = 100; continue _fun50725;
 94:
                options = oscar.mutedFramerate;
 100:
                zulu = _closure1_slot12;
                entity = {};
                report = {};
                romeo = report;
                yankee = oscar;
                oscar = copyDataProperties(romeo, yankee);
                oscar = 'framerate';
                report[oscar] = options;
                entity['encode'] = report;
                report = {};
                oscar = tango.options;
                oscar = oscar.videoCapture;
                oscar = oscar.width;
                report['width'] = oscar;
                oscar = tango.options;
                oscar = oscar.videoCapture;
                oscar = oscar.height;
                report['height'] = oscar;
                oscar = tango.options;
                oscar = oscar.videoCapture;
                oscar = oscar.framerate;
                report['framerate'] = oscar;
                entity['capture'] = report;
                report = global;
                verify = report.Math;
                options = verify.max;
                oscar = tango.options;
                oscar = oscar.videoBitrateFloor;
                oscar = options.bind(verify)(offset, oscar);
                entity['bitrateMin'] = oscar;
                oscar = report.Math;
                report = oscar.max;
                tango = tango.options;
                tango = tango.videoBitrateFloor;
                tango = report.bind(oscar)(golf, tango);
                entity['bitrateMax'] = tango;
                entity['localWant'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                foxtrot = mike;
                romeo = entity;
                entity = new foxtrot[zulu](romeo, yankee);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getGoliveQuality';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun50726: for(var _fun50726_ip = 0; ; ) switch(_fun50726_ip) {
 0:
                zulu = this;
                entity = zulu.goliveSimulcastEnabled;
                if(!entity) { _fun50726_ip = 22; continue _fun50726 }
 12:
                mike = argFoo;
                entity = 100;
                if(!(!(mike < entity))) { _fun50726_ip = 30; continue _fun50726 }
 22:
                entity = zulu.goliveMaxQuality;
                _fun50726_ip = 42; continue _fun50726;
 30:
                mike = zulu.getGoliveLQQuality;
                entity = mike.bind(zulu)();
 42:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getDefaultGoliveQuality';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            zulu = _closure1_slot12;
            entity = {};
            tango = {'width': 1280, 'height': 720};
            report = _closure1_slot6;
            tango['framerate'] = report;
            entity['capture'] = tango;
            tango = {'width': 1280, 'height': 720, 'framerate': null, 'pixelCount': 921600};
            tango['framerate'] = report;
            entity['encode'] = tango;
            tango = mike.options;
            tango = tango.desktopBitrate;
            tango = tango.min;
            entity['bitrateMin'] = tango;
            tango = mike.options;
            tango = tango.desktopBitrate;
            tango = tango.max;
            entity['bitrateMax'] = tango;
            mike = mike.options;
            mike = mike.desktopBitrate;
            mike = mike.target;
            entity['bitrateTarget'] = mike;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            options = mike;
            golf = entity;
            entity = new options[zulu](golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getGoliveLQQuality';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun50728: for(var _fun50728_ip = 0; ; ) switch(_fun50728_ip) {
 0:
                mike = this;
                entity = global;
                golf = entity.Math;
                oscar = golf.min;
                report = _closure1_slot9;
                zulu = mike.goliveMaxQuality;
                options = zulu.encode;
                romeo = null;
                offset = romeo == options;
                zulu = undefined;
                if(offset) { _fun50728_ip = 51; continue _fun50728 }
 46:
                zulu = options.width;
 51:
                if(!(romeo == zulu)) { _fun50728_ip = 59; continue _fun50728 }
 55:
                zulu = _closure1_slot9;
 59:
                golf = oscar.bind(golf)(report, zulu);
                options = entity.Math;
                oscar = options.min;
                report = _closure1_slot10;
                zulu = mike.goliveMaxQuality;
                offset = zulu.encode;
                yankee = romeo == offset;
                zulu = undefined;
                if(yankee) { _fun50728_ip = 106; continue _fun50728 }
 101:
                zulu = offset.height;
 106:
                if(!(romeo == zulu)) { _fun50728_ip = 114; continue _fun50728 }
 110:
                zulu = _closure1_slot10;
 114:
                oscar = oscar.bind(options)(report, zulu);
                offset = entity.Math;
                options = offset.min;
                report = _closure1_slot11;
                zulu = mike.goliveMaxQuality;
                yankee = zulu.encode;
                foxtrot = romeo == yankee;
                zulu = undefined;
                if(foxtrot) { _fun50728_ip = 162; continue _fun50728 }
 156:
                zulu = yankee.framerate;
 162:
                if(!(romeo == zulu)) { _fun50728_ip = 170; continue _fun50728 }
 166:
                zulu = _closure1_slot11;
 170:
                options = options.bind(offset)(report, zulu);
                yankee = entity.Math;
                offset = yankee.min;
                report = _closure1_slot9;
                zulu = mike.goliveMaxQuality;
                foxtrot = zulu.capture;
                backup = romeo == foxtrot;
                zulu = undefined;
                if(backup) { _fun50728_ip = 217; continue _fun50728 }
 212:
                zulu = foxtrot.width;
 217:
                if(!(romeo == zulu)) { _fun50728_ip = 225; continue _fun50728 }
 221:
                zulu = _closure1_slot9;
 225:
                yankee = offset.bind(yankee)(report, zulu);
                foxtrot = entity.Math;
                offset = foxtrot.min;
                report = _closure1_slot10;
                zulu = mike.goliveMaxQuality;
                backup = zulu.capture;
                kilo = romeo == backup;
                zulu = undefined;
                if(kilo) { _fun50728_ip = 272; continue _fun50728 }
 267:
                zulu = backup.height;
 272:
                if(!(romeo == zulu)) { _fun50728_ip = 280; continue _fun50728 }
 276:
                zulu = _closure1_slot10;
 280:
                offset = offset.bind(foxtrot)(report, zulu);
                report = entity.Math;
                zulu = report.min;
                entity = _closure1_slot11;
                foxtrot = mike.goliveMaxQuality;
                foxtrot = foxtrot.capture;
                backup = romeo == foxtrot;
                verify = undefined;
                if(backup) { _fun50728_ip = 328; continue _fun50728 }
 322:
                verify = foxtrot.framerate;
 328:
                if(!(romeo == verify)) { _fun50728_ip = 336; continue _fun50728 }
 332:
                verify = _closure1_slot11;
 336:
                verify = zulu.bind(report)(entity, verify);
                zulu = _closure1_slot12;
                entity = {};
                report = {};
                report['width'] = yankee;
                report['height'] = offset;
                report['framerate'] = verify;
                entity['capture'] = report;
                report = {};
                report['width'] = golf;
                report['height'] = oscar;
                report['framerate'] = options;
                oscar = golf * oscar;
                report['pixelCount'] = oscar;
                entity['encode'] = report;
                tango = _closure1_slot8;
                entity['bitrateMin'] = tango;
                tango = mike.goliveSimulcastLQBitrateMax;
                entity['bitrateMax'] = tango;
                mike = mike.goliveSimulcastLQBitrateTarget;
                entity['bitrateTarget'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                result = mike;
                output = entity;
                entity = new result[zulu](output, sizing);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    golf = 4;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = '../discord_common/js/packages/media-engine/VideoQualityManager.tsx';
    golf = options.bind(verify)(golf);
    zulu['VIDEO_QUALITY_MODES_TO_OVERWRITES'] = oscar;
    zulu['WantsVideoQuality'] = report;
    zulu['VideoQuality'] = tango;
    zulu['VideoQualityManager'] = mike;
    return entity;
})();