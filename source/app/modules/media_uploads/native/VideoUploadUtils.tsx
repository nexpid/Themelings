// app/modules/media_uploads/native/VideoUploadUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    oscar = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    tango = function(argFoo, argBar) { // Original name: calculateTargetDimensions
        _fun56886: for(var _fun56886_ip = 0; ; ) switch(_fun56886_ip) {
 0:
            entity = argFoo;
            options = argBar;
            zulu = entity.width;
            mike = entity.height;
            mike = zulu / mike;
            tango = entity.width;
            zulu = entity.height;
            if(!(!(tango > zulu))) { _fun56886_ip = 86; continue _fun56886 }
 34:
            zulu = global;
            oscar = zulu.Math;
            report = oscar.min;
            tango = entity.width;
            tango = report.bind(oscar)(options, tango);
            oscar = zulu.Math;
            report = oscar.round;
            zulu = tango / mike;
            zulu = report.bind(oscar)(zulu);
            golf = tango;
            tango = zulu;
            _fun56886_ip = 133; continue _fun56886;
 86:
            zulu = global;
            oscar = zulu.Math;
            report = oscar.min;
            entity = entity.height;
            entity = report.bind(oscar)(options, entity);
            report = zulu.Math;
            zulu = report.round;
            mike = entity * mike;
            golf = zulu.bind(report)(mike);
            tango = entity;
 133:
            entity = {};
            mike = 2;
            oscar = golf % mike;
            report = 0;
            zulu = golf;
            if(!(oscar !== report)) { _fun56886_ip = 158; continue _fun56886 }
 151:
            oscar = 1;
            zulu = golf + oscar;
 158:
            entity['width'] = zulu;
            zulu = tango % mike;
            mike = tango;
            if(!(zulu !== report)) { _fun56886_ip = 180; continue _fun56886 }
 173:
            zulu = 1;
            mike = tango + zulu;
 180:
            entity['height'] = mike;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = verify[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = verify[report];
    report = options.bind(entity)(report);
    report = report.VideoCompressionQuality;
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    golf = oscar.bind(entity)(report);
    report = golf.prototype;
    oscar = Object.create(report, {constructor: {value: golf}});
    backup = 'VideoUploadUtils.tsx';
    kilo = oscar;
    report = new kilo[golf](backup, foxtrot);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot6 = report;
    report = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar, argBaz) { // Original name: VideoQualityTarget
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['value'] = mike;
            mike = argBar;
            zulu['targetResolution'] = mike;
            mike = argBaz;
            zulu['targetBitrate'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'toString';
        entity['key'] = report;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.value;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    oscar = report.bind(entity)();
    var _closure1_slot2 = oscar;
    report = oscar.prototype;
    golf = Object.create(report, {constructor: {value: oscar}});
    backup = 'very_low';
    yankee = 360;
    romeo = 800000;
    kilo = golf;
    foxtrot = yankee;
    report = new kilo[oscar](backup, foxtrot, romeo, yankee);
    report = report instanceof Object ? report : golf;
    oscar['VERY_LOW'] = report;
    report = oscar.prototype;
    golf = Object.create(report, {constructor: {value: oscar}});
    backup = 'low';
    romeo = 1200000;
    kilo = golf;
    report = new kilo[oscar](backup, foxtrot, romeo, yankee);
    report = report instanceof Object ? report : golf;
    oscar['LOW'] = report;
    report = oscar.prototype;
    golf = Object.create(report, {constructor: {value: oscar}});
    backup = 'medium';
    foxtrot = 480;
    romeo = 2000000;
    kilo = golf;
    report = new kilo[oscar](backup, foxtrot, romeo, yankee);
    report = report instanceof Object ? report : golf;
    oscar['MEDIUM'] = report;
    report = oscar.prototype;
    golf = Object.create(report, {constructor: {value: oscar}});
    backup = 'high';
    foxtrot = 720;
    romeo = 2500000;
    kilo = golf;
    report = new kilo[oscar](backup, foxtrot, romeo, yankee);
    report = report instanceof Object ? report : golf;
    oscar['HIGH'] = report;
    report = oscar.prototype;
    golf = Object.create(report, {constructor: {value: oscar}});
    backup = 'very_high';
    foxtrot = 1080;
    romeo = 7000000;
    kilo = golf;
    report = new kilo[oscar](backup, foxtrot, romeo, yankee);
    report = report instanceof Object ? report : golf;
    oscar['VERY_HIGH'] = report;
    report = function(argFoo) {
        _fun56890: for(var _fun56890_ip = 0; ; ) switch(_fun56890_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot5;
            mike = mike.VERY_LOW;
            if(!(mike !== report)) { _fun56890_ip = 182; continue _fun56890 }
 23:
            mike = _closure1_slot5;
            mike = mike.LOW;
            if(!(mike !== report)) { _fun56890_ip = 170; continue _fun56890 }
 40:
            mike = _closure1_slot5;
            mike = mike.MEDIUM;
            if(!(mike !== report)) { _fun56890_ip = 158; continue _fun56890 }
 54:
            mike = _closure1_slot5;
            mike = mike.HIGH;
            if(!(mike !== report)) { _fun56890_ip = 146; continue _fun56890 }
 68:
            mike = _closure1_slot5;
            mike = mike.VERY_HIGH;
            if(!(mike !== report)) { _fun56890_ip = 134; continue _fun56890 }
 82:
            mike = global;
            tango = mike.Error;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'Unknown compression quality: ';
            oscar = zulu.bind(mike)(report);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            golf = zulu;
            mike = new golf[tango](oscar, report);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 134:
            mike = _closure1_slot2;
            mike = mike.VERY_HIGH;
            return mike;
 146:
            mike = _closure1_slot2;
            mike = mike.HIGH;
            return mike;
 158:
            mike = _closure1_slot2;
            mike = mike.MEDIUM;
            return mike;
 170:
            mike = _closure1_slot2;
            mike = mike.LOW;
            return mike;
 182:
            entity = _closure1_slot2;
            entity = entity.VERY_LOW;
            return entity;
        }
    };
    oscar['fromCompressionQuality'] = report;
    report = {'bitrateFloor': 300000, 'createHDR': false, 'frameRate': 30, 'keyFrameIntervalSeconds': 3, 'rotationDegrees': 0, 'skipVideoTranscode': false, 'targetBitrate': null, 'targetHeight': 480, 'targetWidth': 640, 'useHEVC': false, 'videoQuality': null, 'hevcIsSupported': false};
    golf = oscar.MEDIUM;
    golf = golf.targetBitrate;
    report['targetBitrate'] = golf;
    golf = oscar.MEDIUM;
    report['videoQuality'] = golf;
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/media_uploads/native/VideoUploadUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = {'HEVC': 0.8, 'DEFAULT': 1};
    zulu['VIDEO_CODEC_SCALE_FACTORS'] = golf;
    zulu['VideoQualityTarget'] = oscar;
    zulu['DEFAULT_VIDEO_ENCODING_CONFIG'] = report;
    report = function(argFoo) { // Original name: calculateKeyFrameInterval
        _fun56891: for(var _fun56891_ip = 0; ; ) switch(_fun56891_ip) {
 0:
            entity = 2;
            mike = argFoo;
            if(!mike) { _fun56891_ip = 12; continue _fun56891 }
 9:
            entity = 3;
 12:
            return entity;
        }
    };
    zulu['calculateKeyFrameInterval'] = report;
    zulu['calculateTargetDimensions'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: canSkipVideoTranscode
        _fun56892: for(var _fun56892_ip = 0; ; ) switch(_fun56892_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            report = argBaz;
            tango = argCorge;
            zulu = null;
            if(!(zulu != report)) { _fun56892_ip = 29; continue _fun56892 }
 18:
            if(!(zulu != tango)) { _fun56892_ip = 29; continue _fun56892 }
 22:
            if(!(!(report > tango))) { _fun56892_ip = 194; continue _fun56892 }
 29:
            oscar = _closure1_slot7;
            report = entity.targetResolution;
            tango = undefined;
            tango = oscar.bind(tango)(mike, report);
            report = global;
            options = report.Math;
            golf = options.round;
            oscar = mike.width;
            golf = golf.bind(options)(oscar);
            options = report.Math;
            oscar = options.round;
            report = mike.height;
            oscar = oscar.bind(options)(report);
            report = tango.width;
            report = golf <= report;
            if(!report) { _fun56892_ip = 115; continue _fun56892 }
 106:
            tango = tango.height;
            report = oscar <= tango;
 115:
            tango = mike.bitRate;
            entity = entity.targetBitrate;
            tango = tango <= entity;
            entity = !report;
            if(!report) { _fun56892_ip = 140; continue _fun56892 }
 137:
            entity = !tango;
 140:
            if(entity) { _fun56892_ip = 152; continue _fun56892 }
 143:
            tango = mike.format;
            entity = zulu == tango;
 152:
            if(entity) { _fun56892_ip = 189; continue _fun56892 }
 155:
            report = mike.format;
            tango = report.match;
            mike = /(avc1|hvc1|video\\/(avc|hevc))/i;
            mike = tango.bind(report)(mike);
            entity = zulu === mike;
 189:
            entity = !entity;
            return entity;
 194:
            entity = false;
            return entity;
        }
    };
    zulu['canSkipVideoTranscode'] = tango;
    tango = function(argFoo) { // Original name: logSourceMetadata
        _fun56893: for(var _fun56893_ip = 0; ; ) switch(_fun56893_ip) {
 0:
            tango = argFoo;
            entity = tango.format;
            mike = null;
            entity = mike != entity;
            options = 'unknown';
            if(!entity) { _fun56893_ip = 56; continue _fun56893 }
 21:
            zulu = tango.format;
            entity = {'hvc1': 'hvc1 (HEVC)', 'avc1': 'avc1 (H.264)'};
            entity = entity[zulu];
            if(!(mike == entity)) { _fun56893_ip = 53; continue _fun56893 }
 48:
            entity = tango.format;
 53:
            options = entity;
 56:
            oscar = _closure1_slot6;
            zulu = oscar.info;
            entity = 'Video Source Metadata:';
            entity = zulu.bind(oscar)(entity);
            report = oscar.info;
            entity = global;
            zulu = entity.HermesInternal;
            golf = zulu.concat;
            zulu = '- Codec: ';
            zulu = golf.bind(zulu)(options);
            zulu = report.bind(oscar)(zulu);
            report = oscar.info;
            offset = tango.width;
            verify = tango.height;
            zulu = entity.HermesInternal;
            options = zulu.concat;
            golf = '- Dimensions: ';
            zulu = 'x';
            zulu = options.bind(golf)(offset, zulu, verify);
            zulu = report.bind(oscar)(zulu);
            report = oscar.info;
            verify = tango.bitRate;
            zulu = entity.HermesInternal;
            options = zulu.concat;
            golf = '- Bitrate: ';
            zulu = ' bps';
            zulu = options.bind(golf)(verify, zulu);
            zulu = report.bind(oscar)(zulu);
            report = oscar.info;
            verify = tango.frameRate;
            zulu = entity.HermesInternal;
            options = zulu.concat;
            golf = '- Frame Rate: ';
            zulu = ' fps';
            zulu = options.bind(golf)(verify, zulu);
            zulu = report.bind(oscar)(zulu);
            report = oscar.info;
            zulu = tango.isHDRContent;
            golf = 'No';
            if(!zulu) { _fun56893_ip = 283; continue _fun56893 }
 277:
            golf = 'Yes';
 283:
            zulu = '- HDR: ';
            zulu = zulu + golf;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot6;
            report = zulu.info;
            golf = tango.rotationDegrees;
            mike = entity.HermesInternal;
            oscar = mike.concat;
            mike = '- Rotation Degrees: ';
            mike = oscar.bind(mike)(golf);
            mike = report.bind(zulu)(mike);
            report = zulu.info;
            golf = tango.sourceProfile;
            mike = entity.HermesInternal;
            oscar = mike.concat;
            mike = '- Profile: ';
            mike = oscar.bind(mike)(golf);
            mike = report.bind(zulu)(mike);
            report = zulu.info;
            golf = tango.sourceLevel;
            mike = entity.HermesInternal;
            oscar = mike.concat;
            mike = '- Level: ';
            mike = oscar.bind(mike)(golf);
            mike = report.bind(zulu)(mike);
            mike = zulu.info;
            oscar = tango.durationMs;
            entity = entity.HermesInternal;
            report = entity.concat;
            tango = '- Duration: ';
            entity = ' ms';
            entity = report.bind(tango)(oscar, entity);
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['logSourceMetadata'] = tango;
    tango = function(argFoo) { // Original name: logEncoderSettings
        _fun56894: for(var _fun56894_ip = 0; ; ) switch(_fun56894_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot6;
            zulu = golf.info;
            entity = 'Encoder Video Quality Settings:';
            entity = zulu.bind(golf)(entity);
            tango = golf.info;
            report = mike.videoQuality;
            options = null;
            zulu = options == report;
            entity = undefined;
            offset = undefined;
            if(zulu) { _fun56894_ip = 61; continue _fun56894 }
 52:
            zulu = report.toString;
            offset = zulu.bind(report)();
 61:
            report = global;
            zulu = report.HermesInternal;
            verify = zulu.concat;
            zulu = '- Compression Quality: ';
            zulu = verify.bind(zulu)(offset);
            zulu = tango.bind(golf)(zulu);
            golf = _closure1_slot6;
            tango = golf.info;
            zulu = mike.videoQuality;
            verify = options == zulu;
            yankee = undefined;
            if(verify) { _fun56894_ip = 121; continue _fun56894 }
 115:
            yankee = zulu.targetResolution;
 121:
            zulu = report.HermesInternal;
            offset = zulu.concat;
            verify = '- Compression Quality Target Resolution: ';
            zulu = 'p';
            zulu = offset.bind(verify)(yankee, zulu);
            zulu = tango.bind(golf)(zulu);
            golf = _closure1_slot6;
            tango = golf.info;
            zulu = mike.videoQuality;
            options = options == zulu;
            verify = undefined;
            if(options) { _fun56894_ip = 184; continue _fun56894 }
 178:
            verify = zulu.targetBitrate;
 184:
            zulu = report.HermesInternal;
            options = zulu.concat;
            zulu = '- Compression Quality Max Bitrate: ';
            romeo = ' bps';
            zulu = options.bind(zulu)(verify, romeo);
            zulu = tango.bind(golf)(zulu);
            golf = _closure1_slot6;
            tango = golf.info;
            zulu = 'Encoder Video Transcoding Settings:';
            zulu = tango.bind(golf)(zulu);
            golf = mike.skipVideoTranscode;
            tango = _closure1_slot6;
            zulu = tango.info;
            if(golf) { _fun56894_ip = 610; continue _fun56894 }
 261:
            golf = mike.useHEVC;
            options = 'avc1 (H.264)';
            if(!golf) { _fun56894_ip = 282; continue _fun56894 }
 276:
            options = 'hvc1 (HEVC)';
 282:
            golf = '- Codec: ';
            golf = golf + options;
            golf = zulu.bind(tango)(golf);
            offset = _closure1_slot6;
            options = offset.info;
            backup = mike.targetWidth;
            foxtrot = mike.targetHeight;
            golf = report.HermesInternal;
            yankee = golf.concat;
            verify = '- Dimensions: ';
            golf = 'x';
            golf = yankee.bind(verify)(backup, golf, foxtrot);
            golf = options.bind(offset)(golf);
            options = offset.info;
            yankee = mike.targetBitrate;
            golf = report.HermesInternal;
            verify = golf.concat;
            golf = '- Bitrate: ';
            golf = verify.bind(golf)(yankee, romeo);
            golf = options.bind(offset)(golf);
            options = offset.info;
            romeo = mike.frameRate;
            golf = report.HermesInternal;
            yankee = golf.concat;
            verify = '- Frame Rate: ';
            golf = ' fps';
            golf = yankee.bind(verify)(romeo, golf);
            golf = options.bind(offset)(golf);
            options = offset.info;
            romeo = mike.keyFrameIntervalSeconds;
            golf = report.HermesInternal;
            yankee = golf.concat;
            verify = '- Key Frame Interval: ';
            golf = ' seconds';
            golf = yankee.bind(verify)(romeo, golf);
            golf = options.bind(offset)(golf);
            verify = offset.info;
            options = mike.createHDR;
            golf = 'No';
            yankee = golf;
            if(!options) { _fun56894_ip = 514; continue _fun56894 }
 508:
            yankee = 'Yes';
 514:
            options = '- Create HDR: ';
            options = options + yankee;
            options = verify.bind(offset)(options);
            oscar = _closure1_slot6;
            options = oscar.info;
            offset = mike.rotationDegrees;
            report = report.HermesInternal;
            verify = report.concat;
            report = '- Rotation Degrees: ';
            report = verify.bind(report)(offset);
            report = options.bind(oscar)(report);
            report = oscar.info;
            mike = mike.hevcIsSupported;
            if(!mike) { _fun56894_ip = 593; continue _fun56894 }
 587:
            golf = 'Yes';
 593:
            mike = '- HEVC Supported: ';
            mike = mike + golf;
            mike = report.bind(oscar)(mike);
            _fun56894_ip = 621; continue _fun56894;
 610:
            mike = '- Skip Video Transcode: Yes';
            mike = zulu.bind(tango)(mike);
 621:
            return entity;
        }
    };
    zulu['logEncoderSettings'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: calculateOptimalBitrate
        _fun56895: for(var _fun56895_ip = 0; ; ) switch(_fun56895_ip) {
 0:
            entity = argGrault;
            mike = argFoo;
            tango = mike.bitRate;
            mike = null;
            report = tango;
            if(!(mike !== entity)) { _fun56895_ip = 173; continue _fun56895 }
 24:
            oscar = entity.thermalState;
            golf = _closure1_slot0;
            mike = _closure1_slot1;
            verify = 4;
            mike = mike[verify];
            options = undefined;
            mike = golf.bind(options)(mike);
            mike = mike.ThermalState;
            mike = mike.SERIOUS;
            mike = oscar !== mike;
            if(!mike) { _fun56895_ip = 113; continue _fun56895 }
 74:
            oscar = entity.thermalState;
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[verify];
            zulu = golf.bind(options)(zulu);
            zulu = zulu.ThermalState;
            zulu = zulu.CRITICAL;
            mike = oscar !== zulu;
 113:
            zulu = tango;
            if(mike) { _fun56895_ip = 133; continue _fun56895 }
 119:
            mike = 0.8;
            zulu = tango * mike;
 133:
            tango = entity.batteryLevel;
            mike = 0.3;
            entity = zulu;
            if(!(tango < mike)) { _fun56895_ip = 170; continue _fun56895 }
 156:
            mike = 0.9;
            entity = zulu * mike;
 170:
            report = entity;
 173:
            entity = global;
            tango = entity.Math;
            zulu = tango.max;
            mike = argCorge;
            tango = zulu.bind(tango)(report, mike);
            mike = argBaz;
            zulu = mike.targetBitrate;
            mike = argBar;
            zulu = zulu * mike;
            mike = entity.Math;
            entity = mike.min;
            entity = entity.bind(mike)(tango, zulu);
            return entity;
        }
    };
    zulu['calculateOptimalBitrate'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: shouldUseHEVC
        _fun56896: for(var _fun56896_ip = 0; ; ) switch(_fun56896_ip) {
 0:
            entity = argBar;
            mike = !entity;
            if(mike) { _fun56896_ip = 15; continue _fun56896 }
 9:
            entity = argBaz;
            mike = !entity;
 15:
            entity = !mike;
            if(mike) { _fun56896_ip = 48; continue _fun56896 }
 21:
            mike = argCorge;
            mike = !mike;
            if(mike) { _fun56896_ip = 45; continue _fun56896 }
 30:
            zulu = argFoo;
            tango = zulu.rotationDegrees;
            zulu = 0;
            mike = zulu === tango;
 45:
            entity = mike;
 48:
            return entity;
        }
    };
    zulu['shouldUseHEVC'] = mike;
    return entity;
})();