// app/modules/media_uploads/native/VideoUploadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    option = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    tangon = function(argFoo, argBar) { // Original name: calculateTargetDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = argBar;
            zuuluu = entity.width;
            michal = entity.height;
            michal = zuuluu / michal;
            tangon = entity.width;
            zuuluu = entity.height;
            if(!(!(tangon > zuuluu))) { _fun00002_ip = 86; continue _fun00001 }
 34:
            zuuluu = global;
            oscard = zuuluu.Math;
            report = oscard.min;
            tangon = entity.width;
            tangon = report.bind(oscard)(option, tangon);
            oscard = zuuluu.Math;
            report = oscard.round;
            zuuluu = tangon / michal;
            zuuluu = report.bind(oscard)(zuuluu);
            golfie = tangon;
            tangon = zuuluu;
            _fun00002_ip = 133; continue _fun00001;
 86:
            zuuluu = global;
            oscard = zuuluu.Math;
            report = oscard.min;
            entity = entity.height;
            entity = report.bind(oscard)(option, entity);
            report = zuuluu.Math;
            zuuluu = report.round;
            michal = entity * michal;
            golfie = zuuluu.bind(report)(michal);
            tangon = entity;
 133:
            entity = {};
            michal = 2;
            oscard = golfie % michal;
            report = 0;
            zuuluu = golfie;
            if(!(oscard !== report)) { _fun00002_ip = 158; continue _fun00001 }
 151:
            oscard = 1;
            zuuluu = golfie + oscard;
 158:
            entity['width'] = zuuluu;
            zuuluu = tangon % michal;
            michal = tangon;
            if(!(zuuluu !== report)) { _fun00002_ip = 180; continue _fun00001 }
 173:
            zuuluu = 1;
            michal = tangon + zuuluu;
 180:
            entity['height'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = verify[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = verify[report];
    report = option.bind(entity)(report);
    report = report.VideoCompressionQuality;
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    golfie = oscard.bind(entity)(report);
    report = golfie.prototype;
    oscard = Object.create(report, {constructor: {value: golfie}});
    backup = 'VideoUploadUtils.tsx';
    kiloes = oscard;
    report = new kiloes[golfie](backup, foxtra);
    report = report instanceof Object ? report : oscard;
    var _closure1_slot6 = report;
    report = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: VideoQualityTarget
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['value'] = michal;
            michal = argBar;
            zuuluu['targetResolution'] = michal;
            michal = argBaz;
            zuuluu['targetBitrate'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'toString';
        entity['key'] = report;
        michal = function() { // Original name: value
            entity = this;
            entity = entity.value;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    oscard = report.bind(entity)();
    var _closure1_slot2 = oscard;
    report = oscard.prototype;
    golfie = Object.create(report, {constructor: {value: oscard}});
    backup = 'very_low';
    yankee = 360;
    romeon = 800000;
    kiloes = golfie;
    foxtra = yankee;
    report = new kiloes[oscard](backup, foxtra, romeon, yankee);
    report = report instanceof Object ? report : golfie;
    oscard['VERY_LOW'] = report;
    report = oscard.prototype;
    golfie = Object.create(report, {constructor: {value: oscard}});
    backup = 'low';
    romeon = 1200000;
    kiloes = golfie;
    report = new kiloes[oscard](backup, foxtra, romeon, yankee);
    report = report instanceof Object ? report : golfie;
    oscard['LOW'] = report;
    report = oscard.prototype;
    golfie = Object.create(report, {constructor: {value: oscard}});
    backup = 'medium';
    foxtra = 480;
    romeon = 2000000;
    kiloes = golfie;
    report = new kiloes[oscard](backup, foxtra, romeon, yankee);
    report = report instanceof Object ? report : golfie;
    oscard['MEDIUM'] = report;
    report = oscard.prototype;
    golfie = Object.create(report, {constructor: {value: oscard}});
    backup = 'high';
    foxtra = 720;
    romeon = 2500000;
    kiloes = golfie;
    report = new kiloes[oscard](backup, foxtra, romeon, yankee);
    report = report instanceof Object ? report : golfie;
    oscard['HIGH'] = report;
    report = oscard.prototype;
    golfie = Object.create(report, {constructor: {value: oscard}});
    backup = 'very_high';
    foxtra = 1080;
    romeon = 7000000;
    kiloes = golfie;
    report = new kiloes[oscard](backup, foxtra, romeon, yankee);
    report = report instanceof Object ? report : golfie;
    oscard['VERY_HIGH'] = report;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot5;
            michal = michal.VERY_LOW;
            if(!(michal !== report)) { _fun00004_ip = 182; continue _fun00003 }
 23:
            michal = _closure1_slot5;
            michal = michal.LOW;
            if(!(michal !== report)) { _fun00004_ip = 170; continue _fun00003 }
 40:
            michal = _closure1_slot5;
            michal = michal.MEDIUM;
            if(!(michal !== report)) { _fun00004_ip = 158; continue _fun00003 }
 54:
            michal = _closure1_slot5;
            michal = michal.HIGH;
            if(!(michal !== report)) { _fun00004_ip = 146; continue _fun00003 }
 68:
            michal = _closure1_slot5;
            michal = michal.VERY_HIGH;
            if(!(michal !== report)) { _fun00004_ip = 134; continue _fun00003 }
 82:
            michal = global;
            tangon = michal.Error;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'Unknown compression quality: ';
            oscard = zuuluu.bind(michal)(report);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            golfie = zuuluu;
            michal = new golfie[tangon](oscard, report);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 134:
            michal = _closure1_slot2;
            michal = michal.VERY_HIGH;
            return michal;
 146:
            michal = _closure1_slot2;
            michal = michal.HIGH;
            return michal;
 158:
            michal = _closure1_slot2;
            michal = michal.MEDIUM;
            return michal;
 170:
            michal = _closure1_slot2;
            michal = michal.LOW;
            return michal;
 182:
            entity = _closure1_slot2;
            entity = entity.VERY_LOW;
            return entity;
        }
    };
    oscard['fromCompressionQuality'] = report;
    report = {'bitrateFloor': 300000, 'createHDR': false, 'frameRate': 30, 'keyFrameIntervalSeconds': 3, 'rotationDegrees': 0, 'skipVideoTranscode': false, 'targetBitrate': null, 'targetHeight': 480, 'targetWidth': 640, 'useHEVC': false, 'videoQuality': null, 'hevcIsSupported': false};
    golfie = oscard.MEDIUM;
    golfie = golfie.targetBitrate;
    report['targetBitrate'] = golfie;
    golfie = oscard.MEDIUM;
    report['videoQuality'] = golfie;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/media_uploads/native/VideoUploadUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = {'HEVC': 0.8, 'DEFAULT': 1};
    zuuluu['VIDEO_CODEC_SCALE_FACTORS'] = golfie;
    zuuluu['VideoQualityTarget'] = oscard;
    zuuluu['DEFAULT_VIDEO_ENCODING_CONFIG'] = report;
    report = function(argFoo) { // Original name: calculateKeyFrameInterval
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = 2;
            michal = argFoo;
            if(!michal) { _fun00006_ip = 12; continue _fun00005 }
 9:
            entity = 3;
 12:
            return entity;
        }
    };
    zuuluu['calculateKeyFrameInterval'] = report;
    zuuluu['calculateTargetDimensions'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: canSkipVideoTranscode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            report = argBaz;
            tangon = argCor;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00008_ip = 29; continue _fun00007 }
 18:
            if(!(zuuluu != tangon)) { _fun00008_ip = 29; continue _fun00007 }
 22:
            if(!(!(report > tangon))) { _fun00008_ip = 194; continue _fun00007 }
 29:
            oscard = _closure1_slot7;
            report = entity.targetResolution;
            tangon = undefined;
            tangon = oscard.bind(tangon)(michal, report);
            report = global;
            option = report.Math;
            golfie = option.round;
            oscard = michal.width;
            golfie = golfie.bind(option)(oscard);
            option = report.Math;
            oscard = option.round;
            report = michal.height;
            oscard = oscard.bind(option)(report);
            report = tangon.width;
            report = golfie <= report;
            if(!report) { _fun00008_ip = 115; continue _fun00007 }
 106:
            tangon = tangon.height;
            report = oscard <= tangon;
 115:
            tangon = michal.bitRate;
            entity = entity.targetBitrate;
            tangon = tangon <= entity;
            entity = !report;
            if(!report) { _fun00008_ip = 140; continue _fun00007 }
 137:
            entity = !tangon;
 140:
            if(entity) { _fun00008_ip = 152; continue _fun00007 }
 143:
            tangon = michal.format;
            entity = zuuluu == tangon;
 152:
            if(entity) { _fun00008_ip = 189; continue _fun00007 }
 155:
            report = michal.format;
            tangon = report.match;
            michal = /(avc1|hvc1|video\\/(avc|hevc))/i;
            michal = tangon.bind(report)(michal);
            entity = zuuluu === michal;
 189:
            entity = !entity;
            return entity;
 194:
            entity = false;
            return entity;
        }
    };
    zuuluu['canSkipVideoTranscode'] = tangon;
    tangon = function(argFoo) { // Original name: logSourceMetadata
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = tangon.format;
            michal = null;
            entity = michal != entity;
            option = 'unknown';
            if(!entity) { _fun00010_ip = 56; continue _fun00009 }
 21:
            zuuluu = tangon.format;
            entity = {'hvc1': 'hvc1 (HEVC)', 'avc1': 'avc1 (H.264)'};
            entity = entity[zuuluu];
            if(!(michal == entity)) { _fun00010_ip = 53; continue _fun00009 }
 48:
            entity = tangon.format;
 53:
            option = entity;
 56:
            oscard = _closure1_slot6;
            zuuluu = oscard.info;
            entity = 'Video Source Metadata:';
            entity = zuuluu.bind(oscard)(entity);
            report = oscard.info;
            entity = global;
            zuuluu = entity.HermesInternal;
            golfie = zuuluu.concat;
            zuuluu = '- Codec: ';
            zuuluu = golfie.bind(zuuluu)(option);
            zuuluu = report.bind(oscard)(zuuluu);
            report = oscard.info;
            offset = tangon.width;
            verify = tangon.height;
            zuuluu = entity.HermesInternal;
            option = zuuluu.concat;
            golfie = '- Dimensions: ';
            zuuluu = 'x';
            zuuluu = option.bind(golfie)(offset, zuuluu, verify);
            zuuluu = report.bind(oscard)(zuuluu);
            report = oscard.info;
            verify = tangon.bitRate;
            zuuluu = entity.HermesInternal;
            option = zuuluu.concat;
            golfie = '- Bitrate: ';
            zuuluu = ' bps';
            zuuluu = option.bind(golfie)(verify, zuuluu);
            zuuluu = report.bind(oscard)(zuuluu);
            report = oscard.info;
            verify = tangon.frameRate;
            zuuluu = entity.HermesInternal;
            option = zuuluu.concat;
            golfie = '- Frame Rate: ';
            zuuluu = ' fps';
            zuuluu = option.bind(golfie)(verify, zuuluu);
            zuuluu = report.bind(oscard)(zuuluu);
            report = oscard.info;
            zuuluu = tangon.isHDRContent;
            golfie = 'No';
            if(!zuuluu) { _fun00010_ip = 283; continue _fun00009 }
 277:
            golfie = 'Yes';
 283:
            zuuluu = '- HDR: ';
            zuuluu = zuuluu + golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot6;
            report = zuuluu.info;
            golfie = tangon.rotationDegrees;
            michal = entity.HermesInternal;
            oscard = michal.concat;
            michal = '- Rotation Degrees: ';
            michal = oscard.bind(michal)(golfie);
            michal = report.bind(zuuluu)(michal);
            report = zuuluu.info;
            golfie = tangon.sourceProfile;
            michal = entity.HermesInternal;
            oscard = michal.concat;
            michal = '- Profile: ';
            michal = oscard.bind(michal)(golfie);
            michal = report.bind(zuuluu)(michal);
            report = zuuluu.info;
            golfie = tangon.sourceLevel;
            michal = entity.HermesInternal;
            oscard = michal.concat;
            michal = '- Level: ';
            michal = oscard.bind(michal)(golfie);
            michal = report.bind(zuuluu)(michal);
            michal = zuuluu.info;
            oscard = tangon.durationMs;
            entity = entity.HermesInternal;
            report = entity.concat;
            tangon = '- Duration: ';
            entity = ' ms';
            entity = report.bind(tangon)(oscard, entity);
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['logSourceMetadata'] = tangon;
    tangon = function(argFoo) { // Original name: logEncoderSettings
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            golfie = _closure1_slot6;
            zuuluu = golfie.info;
            entity = 'Encoder Video Quality Settings:';
            entity = zuuluu.bind(golfie)(entity);
            tangon = golfie.info;
            report = michal.videoQuality;
            option = null;
            zuuluu = option == report;
            entity = undefined;
            offset = undefined;
            if(zuuluu) { _fun00012_ip = 61; continue _fun00011 }
 52:
            zuuluu = report.toString;
            offset = zuuluu.bind(report)();
 61:
            report = global;
            zuuluu = report.HermesInternal;
            verify = zuuluu.concat;
            zuuluu = '- Compression Quality: ';
            zuuluu = verify.bind(zuuluu)(offset);
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot6;
            tangon = golfie.info;
            zuuluu = michal.videoQuality;
            verify = option == zuuluu;
            yankee = undefined;
            if(verify) { _fun00012_ip = 121; continue _fun00011 }
 115:
            yankee = zuuluu.targetResolution;
 121:
            zuuluu = report.HermesInternal;
            offset = zuuluu.concat;
            verify = '- Compression Quality Target Resolution: ';
            zuuluu = 'p';
            zuuluu = offset.bind(verify)(yankee, zuuluu);
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot6;
            tangon = golfie.info;
            zuuluu = michal.videoQuality;
            option = option == zuuluu;
            verify = undefined;
            if(option) { _fun00012_ip = 184; continue _fun00011 }
 178:
            verify = zuuluu.targetBitrate;
 184:
            zuuluu = report.HermesInternal;
            option = zuuluu.concat;
            zuuluu = '- Compression Quality Max Bitrate: ';
            romeon = ' bps';
            zuuluu = option.bind(zuuluu)(verify, romeon);
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = _closure1_slot6;
            tangon = golfie.info;
            zuuluu = 'Encoder Video Transcoding Settings:';
            zuuluu = tangon.bind(golfie)(zuuluu);
            golfie = michal.skipVideoTranscode;
            tangon = _closure1_slot6;
            zuuluu = tangon.info;
            if(golfie) { _fun00012_ip = 610; continue _fun00011 }
 261:
            golfie = michal.useHEVC;
            option = 'avc1 (H.264)';
            if(!golfie) { _fun00012_ip = 282; continue _fun00011 }
 276:
            option = 'hvc1 (HEVC)';
 282:
            golfie = '- Codec: ';
            golfie = golfie + option;
            golfie = zuuluu.bind(tangon)(golfie);
            offset = _closure1_slot6;
            option = offset.info;
            backup = michal.targetWidth;
            foxtra = michal.targetHeight;
            golfie = report.HermesInternal;
            yankee = golfie.concat;
            verify = '- Dimensions: ';
            golfie = 'x';
            golfie = yankee.bind(verify)(backup, golfie, foxtra);
            golfie = option.bind(offset)(golfie);
            option = offset.info;
            yankee = michal.targetBitrate;
            golfie = report.HermesInternal;
            verify = golfie.concat;
            golfie = '- Bitrate: ';
            golfie = verify.bind(golfie)(yankee, romeon);
            golfie = option.bind(offset)(golfie);
            option = offset.info;
            romeon = michal.frameRate;
            golfie = report.HermesInternal;
            yankee = golfie.concat;
            verify = '- Frame Rate: ';
            golfie = ' fps';
            golfie = yankee.bind(verify)(romeon, golfie);
            golfie = option.bind(offset)(golfie);
            option = offset.info;
            romeon = michal.keyFrameIntervalSeconds;
            golfie = report.HermesInternal;
            yankee = golfie.concat;
            verify = '- Key Frame Interval: ';
            golfie = ' seconds';
            golfie = yankee.bind(verify)(romeon, golfie);
            golfie = option.bind(offset)(golfie);
            verify = offset.info;
            option = michal.createHDR;
            golfie = 'No';
            yankee = golfie;
            if(!option) { _fun00012_ip = 514; continue _fun00011 }
 508:
            yankee = 'Yes';
 514:
            option = '- Create HDR: ';
            option = option + yankee;
            option = verify.bind(offset)(option);
            oscard = _closure1_slot6;
            option = oscard.info;
            offset = michal.rotationDegrees;
            report = report.HermesInternal;
            verify = report.concat;
            report = '- Rotation Degrees: ';
            report = verify.bind(report)(offset);
            report = option.bind(oscard)(report);
            report = oscard.info;
            michal = michal.hevcIsSupported;
            if(!michal) { _fun00012_ip = 593; continue _fun00011 }
 587:
            golfie = 'Yes';
 593:
            michal = '- HEVC Supported: ';
            michal = michal + golfie;
            michal = report.bind(oscard)(michal);
            _fun00012_ip = 621; continue _fun00011;
 610:
            michal = '- Skip Video Transcode: Yes';
            michal = zuuluu.bind(tangon)(michal);
 621:
            return entity;
        }
    };
    zuuluu['logEncoderSettings'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: calculateOptimalBitrate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argGra;
            michal = argFoo;
            tangon = michal.bitRate;
            michal = null;
            report = tangon;
            if(!(michal !== entity)) { _fun00014_ip = 173; continue _fun00013 }
 24:
            oscard = entity.thermalState;
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            verify = 4;
            michal = michal[verify];
            option = undefined;
            michal = golfie.bind(option)(michal);
            michal = michal.ThermalState;
            michal = michal.SERIOUS;
            michal = oscard !== michal;
            if(!michal) { _fun00014_ip = 113; continue _fun00013 }
 74:
            oscard = entity.thermalState;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[verify];
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = zuuluu.ThermalState;
            zuuluu = zuuluu.CRITICAL;
            michal = oscard !== zuuluu;
 113:
            zuuluu = tangon;
            if(michal) { _fun00014_ip = 133; continue _fun00013 }
 119:
            michal = 0.8;
            zuuluu = tangon * michal;
 133:
            tangon = entity.batteryLevel;
            michal = 0.3;
            entity = zuuluu;
            if(!(tangon < michal)) { _fun00014_ip = 170; continue _fun00013 }
 156:
            michal = 0.9;
            entity = zuuluu * michal;
 170:
            report = entity;
 173:
            entity = global;
            tangon = entity.Math;
            zuuluu = tangon.max;
            michal = argCor;
            tangon = zuuluu.bind(tangon)(report, michal);
            michal = argBaz;
            zuuluu = michal.targetBitrate;
            michal = argBar;
            zuuluu = zuuluu * michal;
            michal = entity.Math;
            entity = michal.min;
            entity = entity.bind(michal)(tangon, zuuluu);
            return entity;
        }
    };
    zuuluu['calculateOptimalBitrate'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: shouldUseHEVC
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argBar;
            michal = !entity;
            if(michal) { _fun00016_ip = 15; continue _fun00015 }
 9:
            entity = argBaz;
            michal = !entity;
 15:
            entity = !michal;
            if(michal) { _fun00016_ip = 48; continue _fun00015 }
 21:
            michal = argCor;
            michal = !michal;
            if(michal) { _fun00016_ip = 45; continue _fun00015 }
 30:
            zuuluu = argFoo;
            tangon = zuuluu.rotationDegrees;
            zuuluu = 0;
            michal = zuuluu === tangon;
 45:
            entity = michal;
 48:
            return entity;
        }
    };
    zuuluu['shouldUseHEVC'] = michal;
    return entity;
})();