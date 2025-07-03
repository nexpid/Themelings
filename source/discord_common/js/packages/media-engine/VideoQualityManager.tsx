// discord_common/js/packages/media-engine/VideoQualityManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    tangon = global;
    offset = tangon.Object;
    oscard = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot2 = report;
    oscard = 1;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.defaultVideoQualityOptions;
    var _closure1_slot4 = golfie;
    golfie = oscard.MediaEngineContextTypes;
    var _closure1_slot5 = golfie;
    offset = oscard.VideoQualityMode;
    golfie = oscard.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot6 = golfie;
    golfie = oscard.DESKTOP_LOW_QUALITY_STREAM_MAX_BITRATE;
    var _closure1_slot7 = golfie;
    golfie = oscard.DESKTOP_LOW_QUALITY_STREAM_MIN_BITRATE;
    var _closure1_slot8 = golfie;
    golfie = oscard.VIDEO_QUALITY_GOLIVE_LQ_WIDTH;
    var _closure1_slot9 = golfie;
    golfie = oscard.VIDEO_QUALITY_GOLIVE_LQ_HEIGHT;
    var _closure1_slot10 = golfie;
    oscard = oscard.VIDEO_QUALITY_GOLIVE_LQ_FRAMERATE;
    var _closure1_slot11 = oscard;
    golfie = tangon.Object;
    oscard = golfie.freeze;
    tangon = {};
    romeon = offset.AUTO;
    yankee = {};
    tangon[romeon] = yankee;
    yankee = offset.FULL;
    offset = {};
    romeon = {'width': 1280, 'height': 720};
    offset['encode'] = romeon;
    tangon[yankee] = offset;
    oscard = oscard.bind(golfie)(tangon);
    tangon = function(argFoo) { // Original name: WantsVideoQuality
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = this;
            oscard = _closure1_slot3;
            tangon = _closure1_slot14;
            entity = undefined;
            tangon = oscard.bind(entity)(zuuluu, tangon);
            tangon = michal.capture;
            oscard = null;
            if(!(oscard == tangon)) { _fun00002_ip = 50; continue _fun00001 }
 37:
            tangon = michal.encode;
            if(!(oscard != tangon)) { _fun00002_ip = 202; continue _fun00001 }
 50:
            tangon = michal.capture;
            golfie = oscard == tangon;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 95; continue _fun00001 }
 65:
            verify = _closure1_slot13;
            yankee = michal.capture;
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            romeon = option;
            golfie = new romeon[verify](yankee, offset);
            tangon = golfie instanceof Object ? golfie : option;
 95:
            zuuluu['capture'] = tangon;
            tangon = michal.encode;
            oscard = oscard == tangon;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 146; continue _fun00001 }
 116:
            golfie = _closure1_slot13;
            yankee = michal.encode;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            romeon = oscard;
            report = new romeon[golfie](yankee, offset);
            tangon = report instanceof Object ? report : oscard;
 146:
            zuuluu['encode'] = tangon;
            tangon = michal.bitrateMin;
            zuuluu['bitrateMin'] = tangon;
            tangon = michal.bitrateMax;
            zuuluu['bitrateMax'] = tangon;
            tangon = michal.bitrateTarget;
            zuuluu['bitrateTarget'] = tangon;
            michal = michal.localWant;
            zuuluu['localWant'] = michal;
            return entity;
 202:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            yankee = 'Invalid arguments.';
            romeon = michal;
            entity = new romeon[zuuluu](yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot14 = tangon;
    report = report.bind(entity)(tangon);
    var _closure1_slot12 = report;
    tangon = function() {
        report = _closure1_slot2;
        tangon = function(argFoo) { // Original name: VideoQuality
            michal = argFoo;
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = michal.width;
            zuuluu['width'] = tangon;
            tangon = michal.height;
            zuuluu['height'] = tangon;
            tangon = michal.framerate;
            zuuluu['framerate'] = tangon;
            tangon = michal.width;
            michal = michal.height;
            michal = tangon * michal;
            zuuluu['pixelCount'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        entity = {};
        zuuluu = 'equals';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                zuuluu = null;
                entity = zuuluu == report;
                if(!entity) { _fun00004_ip = 19; continue _fun00003 }
 15:
                entity = zuuluu == tangon;
 19:
                if(entity) { _fun00004_ip = 92; continue _fun00003 }
 22:
                michal = zuuluu != report;
                if(!michal) { _fun00004_ip = 33; continue _fun00003 }
 29:
                michal = zuuluu != tangon;
 33:
                if(!michal) { _fun00004_ip = 89; continue _fun00003 }
 36:
                oscard = report.width;
                zuuluu = tangon.width;
                zuuluu = oscard === zuuluu;
                if(!zuuluu) { _fun00004_ip = 67; continue _fun00003 }
 53:
                golfie = report.height;
                oscard = tangon.height;
                zuuluu = golfie === oscard;
 67:
                if(!zuuluu) { _fun00004_ip = 86; continue _fun00003 }
 70:
                report = report.framerate;
                tangon = tangon.framerate;
                zuuluu = report === tangon;
 86:
                michal = zuuluu;
 89:
                entity = michal;
 92:
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(2);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'extend';
        entity['key'] = oscard;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                option = null;
                if(!(option != michal)) { _fun00006_ip = 181; continue _fun00005 }
 15:
                if(!(option != entity)) { _fun00006_ip = 179; continue _fun00005 }
 22:
                tangon = option == entity;
                zuuluu = undefined;
                if(tangon) { _fun00006_ip = 36; continue _fun00005 }
 31:
                zuuluu = entity.width;
 36:
                if(!(option == zuuluu)) { _fun00006_ip = 57; continue _fun00005 }
 40:
                report = option == michal;
                tangon = undefined;
                if(report) { _fun00006_ip = 54; continue _fun00005 }
 49:
                tangon = michal.width;
 54:
                zuuluu = tangon;
 57:
                oscard = option != zuuluu;
                tangon = 0;
                if(!oscard) { _fun00006_ip = 69; continue _fun00005 }
 66:
                tangon = zuuluu;
 69:
                oscard = option == entity;
                zuuluu = undefined;
                if(oscard) { _fun00006_ip = 83; continue _fun00005 }
 78:
                zuuluu = entity.height;
 83:
                if(!(option == zuuluu)) { _fun00006_ip = 104; continue _fun00005 }
 87:
                verify = option == michal;
                oscard = undefined;
                if(verify) { _fun00006_ip = 101; continue _fun00005 }
 96:
                oscard = michal.height;
 101:
                zuuluu = oscard;
 104:
                oscard = option != zuuluu;
                report = 0;
                if(!oscard) { _fun00006_ip = 116; continue _fun00005 }
 113:
                report = zuuluu;
 116:
                zuuluu = {};
                zuuluu['width'] = tangon;
                zuuluu['height'] = report;
                verify = option == entity;
                oscard = undefined;
                if(verify) { _fun00006_ip = 141; continue _fun00005 }
 135:
                oscard = entity.framerate;
 141:
                if(!(option == oscard)) { _fun00006_ip = 163; continue _fun00005 }
 145:
                option = option == michal;
                golfie = undefined;
                if(option) { _fun00006_ip = 160; continue _fun00005 }
 154:
                golfie = michal.framerate;
 160:
                oscard = golfie;
 163:
                zuuluu['framerate'] = oscard;
                tangon = tangon * report;
                zuuluu['pixelCount'] = tangon;
                return zuuluu;
 179:
                return michal;
 181:
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[1] = entity;
        michal = undefined;
        entity = null;
        entity = report.bind(michal)(tangon, entity, zuuluu);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot13 = tangon;
    michal = function() {
        tangon = _closure1_slot2;
        zuuluu = function(argFoo, argBar) { // Original name: VideoQualityManager
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golfie = arguments[2];
                zuuluu = this;
                entity = undefined;
                if(!(golfie === entity)) { _fun00008_ip = 19; continue _fun00007 }
 12:
                golfie = _closure1_slot4;
 19:
                report = _closure1_slot3;
                tangon = _closure2_slot0;
                tangon = report.bind(entity)(zuuluu, tangon);
                tangon = argFoo;
                zuuluu['contextType'] = tangon;
                tangon = argBar;
                zuuluu['connection'] = tangon;
                zuuluu['options'] = golfie;
                tangon = false;
                zuuluu['isMuted'] = tangon;
                oscard = zuuluu.contextType;
                report = _closure1_slot5;
                report = report.STREAM;
                report = oscard === report;
                zuuluu['isStreamContext'] = report;
                oscard = _closure1_slot0;
                option = _closure1_slot1;
                report = 3;
                report = option[report];
                report = oscard.bind(entity)(report);
                report = report.MediaSinkWantsLadder;
                oscard = report.prototype;
                oscard = Object.create(oscard, {constructor: {value: report}});
                yankee = oscard;
                offset = golfie;
                report = new yankee[report](offset, verify);
                report = report instanceof Object ? report : oscard;
                zuuluu['ladder'] = report;
                report = zuuluu.getDefaultGoliveQuality;
                report = report.bind(zuuluu)();
                zuuluu['goliveMaxQuality'] = report;
                zuuluu['goliveSimulcastEnabled'] = tangon;
                zuuluu['goliveUsePixelCounts'] = tangon;
                michal = _closure1_slot7;
                zuuluu['goliveSimulcastLQBitrateMax'] = michal;
                zuuluu['goliveSimulcastLQBitrateTarget'] = michal;
                michal = {};
                zuuluu['lastGoLivePixelCount'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getQuality';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                golfie = argFoo;
                report = this;
                michal = report.connection;
                entity = michal.getLocalWant;
                tangon = entity.bind(michal)(golfie);
                oscard = null;
                entity = oscard != golfie;
                option = 0;
                michal = 0;
                if(!entity) { _fun00010_ip = 168; continue _fun00009 }
 41:
                zuuluu = report.connection;
                entity = zuuluu.getRemoteVideoSinkPixelCount;
                offset = entity.bind(zuuluu)(golfie);
                entity = report.lastGoLivePixelCount;
                zuuluu = entity[golfie];
                entity = offset;
                if(!(oscard != zuuluu)) { _fun00010_ip = 155; continue _fun00009 }
 77:
                zuuluu = report.lastGoLivePixelCount;
                zuuluu = zuuluu[golfie];
                entity = offset;
                if(!(zuuluu > option)) { _fun00010_ip = 155; continue _fun00009 }
 94:
                zuuluu = report.lastGoLivePixelCount;
                zuuluu = zuuluu[golfie];
                verify = offset / zuuluu;
                option = 1.05;
                zuuluu = offset;
                if(!(!(verify > option))) { _fun00010_ip = 152; continue _fun00009 }
 125:
                option = 0.95;
                zuuluu = offset;
                if(!(!(verify < option))) { _fun00010_ip = 152; continue _fun00009 }
 142:
                option = report.lastGoLivePixelCount;
                zuuluu = option[golfie];
 152:
                entity = zuuluu;
 155:
                zuuluu = report.lastGoLivePixelCount;
                zuuluu[golfie] = entity;
                michal = entity;
 168:
                entity = report.isStreamContext;
                if(entity) { _fun00010_ip = 190; continue _fun00009 }
 177:
                entity = report.getVideoQuality;
                zuuluu = entity.bind(report)(tangon);
                _fun00010_ip = 204; continue _fun00009;
 190:
                entity = report.getGoliveQuality;
                zuuluu = entity.bind(report)(tangon, michal);
 204:
                michal = report.qualityOverwrite;
                entity = zuuluu;
                if(!(oscard != michal)) { _fun00010_ip = 422; continue _fun00009 }
 220:
                tangon = _closure1_slot12;
                michal = {};
                yankee = _closure1_slot13;
                offset = yankee.extend;
                verify = zuuluu.encode;
                option = report.qualityOverwrite;
                option = option.encode;
                option = offset.bind(yankee)(verify, option);
                michal['encode'] = option;
                offset = _closure1_slot13;
                verify = offset.extend;
                option = zuuluu.capture;
                golfie = report.qualityOverwrite;
                golfie = golfie.capture;
                golfie = verify.bind(offset)(option, golfie);
                michal['capture'] = golfie;
                golfie = report.qualityOverwrite;
                golfie = golfie.bitrateMin;
                if(!(oscard == golfie)) { _fun00010_ip = 329; continue _fun00009 }
 323:
                golfie = zuuluu.bitrateMin;
 329:
                michal['bitrateMin'] = golfie;
                golfie = report.qualityOverwrite;
                golfie = golfie.bitrateMax;
                if(!(oscard == golfie)) { _fun00010_ip = 356; continue _fun00009 }
 350:
                golfie = zuuluu.bitrateMax;
 356:
                michal['bitrateMax'] = golfie;
                report = report.qualityOverwrite;
                report = report.bitrateTarget;
                if(!(oscard == report)) { _fun00010_ip = 383; continue _fun00009 }
 377:
                report = zuuluu.bitrateTarget;
 383:
                michal['bitrateTarget'] = report;
                zuuluu = zuuluu.localWant;
                michal['localWant'] = zuuluu;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                backup = zuuluu;
                foxtra = michal;
                michal = new backup[tangon](foxtra, romeon);
                entity = michal instanceof Object ? michal : zuuluu;
 422:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(12);
        michal[0] = entity;
        entity = {};
        oscard = 'applyQualityConstraints';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                tangon = this;
                zuuluu = tangon.getQuality;
                entity = argBar;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.capture;
                report = null;
                if(!(report != entity)) { _fun00012_ip = 110; continue _fun00011 }
 32:
                entity = zuuluu.capture;
                entity = entity.width;
                michal['encodingVideoWidth'] = entity;
                entity = zuuluu.capture;
                entity = entity.height;
                michal['encodingVideoHeight'] = entity;
                entity = zuuluu.capture;
                entity = entity.framerate;
                michal['encodingVideoFrameRate'] = entity;
                entity = zuuluu.capture;
                entity = entity.framerate;
                michal['captureVideoFrameRate'] = entity;
 110:
                entity = zuuluu.encode;
                if(!(report != entity)) { _fun00012_ip = 156; continue _fun00011 }
 120:
                entity = zuuluu.encode;
                entity = entity.framerate;
                michal['remoteSinkWantsMaxFramerate'] = entity;
                entity = zuuluu.encode;
                entity = entity.pixelCount;
                michal['remoteSinkWantsPixelCount'] = entity;
 156:
                entity = zuuluu.bitrateTarget;
                if(!(report == entity)) { _fun00012_ip = 180; continue _fun00011 }
 166:
                entity = zuuluu.bitrateMax;
                michal['encodingVideoBitRate'] = entity;
                _fun00012_ip = 192; continue _fun00011;
 180:
                entity = zuuluu.bitrateTarget;
                michal['encodingVideoBitRate'] = entity;
 192:
                entity = zuuluu.bitrateMin;
                michal['encodingVideoMinBitRate'] = entity;
                entity = zuuluu.bitrateMax;
                michal['encodingVideoMaxBitRate'] = entity;
                entity = michal.encodingVideoBitRate;
                entity = report != entity;
                if(!entity) { _fun00012_ip = 239; continue _fun00011 }
 229:
                tangon = michal.encodingVideoMaxBitRate;
                entity = report != tangon;
 239:
                if(!entity) { _fun00012_ip = 279; continue _fun00011 }
 242:
                entity = global;
                oscard = entity.Math;
                report = oscard.min;
                tangon = michal.encodingVideoBitRate;
                entity = michal.encodingVideoMaxBitRate;
                entity = report.bind(oscard)(tangon, entity);
                michal['encodingVideoBitRate'] = entity;
 279:
                entity = {};
                entity['quality'] = zuuluu;
                entity['constraints'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'setQualityOverwrite';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['qualityOverwrite'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'setGoliveQuality';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                tangon = _closure1_slot12;
                entity = {};
                verify = _closure1_slot13;
                option = verify.extend;
                oscard = michal.goliveMaxQuality;
                golfie = oscard.capture;
                oscard = zuuluu.capture;
                oscard = option.bind(verify)(golfie, oscard);
                entity['capture'] = oscard;
                option = _closure1_slot13;
                golfie = option.extend;
                report = michal.goliveMaxQuality;
                oscard = report.encode;
                report = zuuluu.encode;
                report = golfie.bind(option)(oscard, report);
                entity['encode'] = report;
                oscard = zuuluu.bitrateMin;
                report = null;
                if(!(report == oscard)) { _fun00014_ip = 117; continue _fun00013 }
 105:
                golfie = michal.goliveMaxQuality;
                oscard = golfie.bitrateMin;
 117:
                entity['bitrateMin'] = oscard;
                oscard = zuuluu.bitrateMax;
                if(!(report == oscard)) { _fun00014_ip = 144; continue _fun00013 }
 132:
                golfie = michal.goliveMaxQuality;
                oscard = golfie.bitrateMax;
 144:
                entity['bitrateMax'] = oscard;
                zuuluu = zuuluu.bitrateTarget;
                if(!(report == zuuluu)) { _fun00014_ip = 171; continue _fun00013 }
 159:
                report = michal.goliveMaxQuality;
                zuuluu = report.bitrateTarget;
 171:
                entity['bitrateTarget'] = zuuluu;
                zuuluu = michal.goliveMaxQuality;
                zuuluu = zuuluu.localWant;
                entity['localWant'] = zuuluu;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                romeon = zuuluu;
                yankee = entity;
                entity = new romeon[tangon](yankee, offset);
                entity = entity instanceof Object ? entity : zuuluu;
                michal['goliveMaxQuality'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'configGoLiveSimulcast';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = argBar;
            entity = this;
            zuuluu = argFoo;
            entity['goliveSimulcastEnabled'] = zuuluu;
            entity['goliveSimulcastLQBitrateMax'] = michal;
            entity['goliveSimulcastLQBitrateTarget'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'setGoLiveSimulcastLQTargetBitrate';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['goliveSimulcastLQBitrateTarget'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'shouldEnableGoliveSimulcastForHqQuality';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                entity = entity.goliveSimulcastEnabled;
                michal = !entity;
                entity = !michal;
                if(michal) { _fun00016_ip = 83; continue _fun00015 }
 21:
                michal = zuuluu.width;
                report = 0;
                michal = report === michal;
                if(!michal) { _fun00016_ip = 44; continue _fun00015 }
 35:
                tangon = zuuluu.height;
                michal = report === tangon;
 44:
                if(michal) { _fun00016_ip = 80; continue _fun00015 }
 47:
                tangon = zuuluu.width;
                zuuluu = zuuluu.height;
                tangon = tangon * zuuluu;
                report = _closure1_slot9;
                zuuluu = _closure1_slot10;
                zuuluu = report * zuuluu;
                michal = tangon > zuuluu;
 80:
                entity = michal;
 83:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'setGoLiveUsePixelCounts';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['goliveUsePixelCounts'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getVideoQuality';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                tangon = this;
                zuuluu = tangon.ladder;
                entity = zuuluu.getResolution;
                oscard = entity.bind(zuuluu)(michal);
                entity = tangon.options;
                entity = entity.videoBitrate;
                zuuluu = entity.min;
                entity = oscard.budgetPortion;
                offset = zuuluu * entity;
                entity = tangon.options;
                entity = entity.videoBitrate;
                zuuluu = entity.max;
                entity = oscard.budgetPortion;
                golfie = zuuluu * entity;
                entity = tangon.isMuted;
                if(entity) { _fun00018_ip = 94; continue _fun00017 }
 86:
                option = oscard.framerate;
                _fun00018_ip = 100; continue _fun00017;
 94:
                option = oscard.mutedFramerate;
 100:
                zuuluu = _closure1_slot12;
                entity = {};
                report = {};
                romeon = report;
                yankee = oscard;
                oscard = copyDataProperties(romeon, yankee);
                oscard = 'framerate';
                report[oscard] = option;
                entity['encode'] = report;
                report = {};
                oscard = tangon.options;
                oscard = oscard.videoCapture;
                oscard = oscard.width;
                report['width'] = oscard;
                oscard = tangon.options;
                oscard = oscard.videoCapture;
                oscard = oscard.height;
                report['height'] = oscard;
                oscard = tangon.options;
                oscard = oscard.videoCapture;
                oscard = oscard.framerate;
                report['framerate'] = oscard;
                entity['capture'] = report;
                report = global;
                verify = report.Math;
                option = verify.max;
                oscard = tangon.options;
                oscard = oscard.videoBitrateFloor;
                oscard = option.bind(verify)(offset, oscard);
                entity['bitrateMin'] = oscard;
                oscard = report.Math;
                report = oscard.max;
                tangon = tangon.options;
                tangon = tangon.videoBitrateFloor;
                tangon = report.bind(oscard)(golfie, tangon);
                entity['bitrateMax'] = tangon;
                entity['localWant'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                foxtra = michal;
                romeon = entity;
                entity = new foxtra[zuuluu](romeon, yankee);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'getGoliveQuality';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = michal.goliveSimulcastEnabled;
                if(!entity) { _fun00020_ip = 25; continue _fun00019 }
 15:
                entity = 100;
                if(!(!(zuuluu < entity))) { _fun00020_ip = 558; continue _fun00019 }
 25:
                entity = michal.goliveMaxQuality;
                entity = entity.encode;
                golfie = null;
                oscard = golfie == entity;
                tangon = undefined;
                if(oscard) { _fun00020_ip = 54; continue _fun00019 }
 48:
                tangon = entity.pixelCount;
 54:
                option = golfie != tangon;
                entity = 1;
                oscard = entity;
                if(!option) { _fun00020_ip = 70; continue _fun00019 }
 67:
                oscard = tangon;
 70:
                tangon = argBar;
                kiloes = tangon / oscard;
                if(!(!(kiloes >= entity))) { _fun00020_ip = 550; continue _fun00019 }
 84:
                entity = 0;
                if(!(!(kiloes <= entity))) { _fun00020_ip = 550; continue _fun00019 }
 93:
                entity = michal.goliveUsePixelCounts;
                if(!entity) { _fun00020_ip = 550; continue _fun00019 }
 105:
                entity = michal.goliveMaxQuality;
                entity = entity.bitrateMin;
                foxtra = entity * kiloes;
                entity = michal.goliveMaxQuality;
                entity = entity.bitrateMax;
                romeon = entity * kiloes;
                entity = michal.goliveMaxQuality;
                entity = entity.bitrateTarget;
                entity = golfie != entity;
                verify = undefined;
                if(!entity) { _fun00020_ip = 174; continue _fun00019 }
 158:
                entity = michal.goliveMaxQuality;
                entity = entity.bitrateTarget;
                verify = entity * kiloes;
 174:
                entity = michal.goliveMaxQuality;
                entity = entity.encode;
                entity = golfie != entity;
                oscard = undefined;
                if(!entity) { _fun00020_ip = 382; continue _fun00019 }
 198:
                entity = global;
                offset = entity.Math;
                option = offset.ceil;
                tangon = michal.goliveMaxQuality;
                tangon = tangon.encode;
                yankee = tangon.width;
                backup = entity.Math;
                tangon = backup.sqrt;
                tangon = tangon.bind(backup)(kiloes);
                tangon = yankee * tangon;
                offset = option.bind(offset)(tangon);
                option = entity.Math;
                tangon = option.ceil;
                yankee = michal.goliveMaxQuality;
                yankee = yankee.encode;
                yankee = yankee.height;
                backup = entity.Math;
                entity = backup.sqrt;
                entity = entity.bind(backup)(kiloes);
                entity = yankee * entity;
                tangon = tangon.bind(option)(entity);
                option = _closure1_slot13;
                entity = {};
                entity['width'] = offset;
                entity['height'] = tangon;
                yankee = michal.goliveMaxQuality;
                yankee = yankee.encode;
                yankee = yankee.framerate;
                entity['framerate'] = yankee;
                tangon = offset * tangon;
                entity['pixelCount'] = tangon;
                tangon = option.prototype;
                tangon = Object.create(tangon, {constructor: {value: option}});
                result = tangon;
                output = entity;
                entity = new result[option](output, sizing);
                oscard = entity instanceof Object ? entity : tangon;
 382:
                tangon = _closure1_slot12;
                entity = {};
                entity['encode'] = oscard;
                oscard = michal.goliveMaxQuality;
                oscard = oscard.capture;
                entity['capture'] = oscard;
                oscard = global;
                yankee = oscard.Math;
                offset = yankee.max;
                option = michal.options;
                option = option.videoBitrateFloor;
                option = offset.bind(yankee)(foxtra, option);
                entity['bitrateMin'] = option;
                yankee = oscard.Math;
                offset = yankee.max;
                option = michal.options;
                option = option.videoBitrateFloor;
                option = offset.bind(yankee)(romeon, option);
                entity['bitrateMax'] = option;
                report = undefined;
                if(!(golfie != verify)) { _fun00020_ip = 515; continue _fun00019 }
 487:
                option = oscard.Math;
                golfie = option.max;
                oscard = michal.options;
                oscard = oscard.videoBitrateFloor;
                report = golfie.bind(option)(verify, oscard);
 515:
                entity['bitrateTarget'] = report;
                entity['localWant'] = zuuluu;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                result = zuuluu;
                output = entity;
                entity = new result[tangon](output, sizing);
                entity = entity instanceof Object ? entity : zuuluu;
                return entity;
 550:
                entity = michal.goliveMaxQuality;
                return entity;
 558:
                entity = michal.getGoliveLQQuality;
                entity = entity.bind(michal)();
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getDefaultGoliveQuality';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            zuuluu = _closure1_slot12;
            entity = {};
            tangon = {'width': 1280, 'height': 720};
            report = _closure1_slot6;
            tangon['framerate'] = report;
            entity['capture'] = tangon;
            tangon = {'width': 1280, 'height': 720, 'framerate': null, 'pixelCount': 921600};
            tangon['framerate'] = report;
            entity['encode'] = tangon;
            tangon = michal.options;
            tangon = tangon.desktopBitrate;
            tangon = tangon.min;
            entity['bitrateMin'] = tangon;
            tangon = michal.options;
            tangon = tangon.desktopBitrate;
            tangon = tangon.max;
            entity['bitrateMax'] = tangon;
            michal = michal.options;
            michal = michal.desktopBitrate;
            michal = michal.target;
            entity['bitrateTarget'] = michal;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            golfie = entity;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'getGoliveLQQuality';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = this;
                entity = global;
                golfie = entity.Math;
                oscard = golfie.min;
                report = _closure1_slot9;
                zuuluu = michal.goliveMaxQuality;
                option = zuuluu.encode;
                romeon = null;
                offset = romeon == option;
                zuuluu = undefined;
                if(offset) { _fun00022_ip = 51; continue _fun00021 }
 46:
                zuuluu = option.width;
 51:
                if(!(romeon == zuuluu)) { _fun00022_ip = 59; continue _fun00021 }
 55:
                zuuluu = _closure1_slot9;
 59:
                golfie = oscard.bind(golfie)(report, zuuluu);
                option = entity.Math;
                oscard = option.min;
                report = _closure1_slot10;
                zuuluu = michal.goliveMaxQuality;
                offset = zuuluu.encode;
                yankee = romeon == offset;
                zuuluu = undefined;
                if(yankee) { _fun00022_ip = 106; continue _fun00021 }
 101:
                zuuluu = offset.height;
 106:
                if(!(romeon == zuuluu)) { _fun00022_ip = 114; continue _fun00021 }
 110:
                zuuluu = _closure1_slot10;
 114:
                oscard = oscard.bind(option)(report, zuuluu);
                offset = entity.Math;
                option = offset.min;
                report = _closure1_slot11;
                zuuluu = michal.goliveMaxQuality;
                yankee = zuuluu.encode;
                foxtra = romeon == yankee;
                zuuluu = undefined;
                if(foxtra) { _fun00022_ip = 162; continue _fun00021 }
 156:
                zuuluu = yankee.framerate;
 162:
                if(!(romeon == zuuluu)) { _fun00022_ip = 170; continue _fun00021 }
 166:
                zuuluu = _closure1_slot11;
 170:
                option = option.bind(offset)(report, zuuluu);
                yankee = entity.Math;
                offset = yankee.min;
                report = _closure1_slot9;
                zuuluu = michal.goliveMaxQuality;
                foxtra = zuuluu.capture;
                backup = romeon == foxtra;
                zuuluu = undefined;
                if(backup) { _fun00022_ip = 217; continue _fun00021 }
 212:
                zuuluu = foxtra.width;
 217:
                if(!(romeon == zuuluu)) { _fun00022_ip = 225; continue _fun00021 }
 221:
                zuuluu = _closure1_slot9;
 225:
                yankee = offset.bind(yankee)(report, zuuluu);
                foxtra = entity.Math;
                offset = foxtra.min;
                report = _closure1_slot10;
                zuuluu = michal.goliveMaxQuality;
                backup = zuuluu.capture;
                kiloes = romeon == backup;
                zuuluu = undefined;
                if(kiloes) { _fun00022_ip = 272; continue _fun00021 }
 267:
                zuuluu = backup.height;
 272:
                if(!(romeon == zuuluu)) { _fun00022_ip = 280; continue _fun00021 }
 276:
                zuuluu = _closure1_slot10;
 280:
                offset = offset.bind(foxtra)(report, zuuluu);
                report = entity.Math;
                zuuluu = report.min;
                entity = _closure1_slot11;
                foxtra = michal.goliveMaxQuality;
                foxtra = foxtra.capture;
                backup = romeon == foxtra;
                verify = undefined;
                if(backup) { _fun00022_ip = 328; continue _fun00021 }
 322:
                verify = foxtra.framerate;
 328:
                if(!(romeon == verify)) { _fun00022_ip = 336; continue _fun00021 }
 332:
                verify = _closure1_slot11;
 336:
                verify = zuuluu.bind(report)(entity, verify);
                zuuluu = _closure1_slot12;
                entity = {};
                report = {};
                report['width'] = yankee;
                report['height'] = offset;
                report['framerate'] = verify;
                entity['capture'] = report;
                report = {};
                report['width'] = golfie;
                report['height'] = oscard;
                report['framerate'] = option;
                oscard = golfie * oscard;
                report['pixelCount'] = oscard;
                entity['encode'] = report;
                tangon = _closure1_slot8;
                entity['bitrateMin'] = tangon;
                tangon = michal.goliveSimulcastLQBitrateMax;
                entity['bitrateMax'] = tangon;
                michal = michal.goliveSimulcastLQBitrateTarget;
                entity['bitrateTarget'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                result = michal;
                output = entity;
                entity = new result[zuuluu](output, sizing);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[11] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    golfie = 4;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = '../discord_common/js/packages/media-engine/VideoQualityManager.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['VIDEO_QUALITY_MODES_TO_OVERWRITES'] = oscard;
    zuuluu['WantsVideoQuality'] = report;
    zuuluu['VideoQuality'] = tangon;
    zuuluu['VideoQualityManager'] = michal;
    return entity;
})();