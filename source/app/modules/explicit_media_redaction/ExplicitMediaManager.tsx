// app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: createCompositeKey
        entity = argFoo;
        report = entity.channel_id;
        tangon = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = ':';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: resetManager
        entity = global;
        tangon = entity.Object;
        zuuluu = tangon.values;
        entity = _closure1_slot19;
        tangon = zuuluu.bind(tangon)(entity);
        zuuluu = tangon.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.timeout;
            entity = global;
            michal = entity.clearTimeout;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity);
        entity = {};
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeCancelTimeout
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            entity = option.id;
            tangon = null;
            if(!(tangon != entity)) { _fun00004_ip = 115; continue _fun00003 }
 14:
            entity = option.channel_id;
            if(!(tangon != entity)) { _fun00004_ip = 115; continue _fun00003 }
 23:
            michal = _closure1_slot22;
            report = undefined;
            michal = michal.bind(report)(option);
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu[michal];
            if(!(tangon == zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 49:
            zuuluu = false;
            return zuuluu;
 53:
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu[michal];
            tangon = zuuluu.timeout;
            golfie = zuuluu.setAt;
            oscard = function(argFoo, argBar, argBaz) { // Original name: handleMediaScanCompleteReporting
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    romeon = argFoo;
                    report = argBar;
                    golfie = _closure1_slot0;
                    entity = _closure1_slot2;
                    tangon = 15;
                    oscard = entity[tangon];
                    entity = undefined;
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.TimeoutCancelSource;
                    oscard = oscard.UPDATE;
                    if(!(report === oscard)) { _fun00006_ip = 200; continue _fun00005 }
 52:
                    yankee = romeon.attachments;
                    oscard = null;
                    if(!(oscard == yankee)) { _fun00006_ip = 68; continue _fun00005 }
 64:
                    yankee = new Array(0);
 68:
                    offset = romeon.embeds;
                    if(!(oscard == offset)) { _fun00006_ip = 82; continue _fun00005 }
 78:
                    offset = new Array(0);
 82:
                    golfie = yankee.filter;
                    oscard = function(argFoo) {
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        entity = 16;
                        entity = option[entity];
                        oscard = undefined;
                        tangon = golfie.bind(oscard)(entity);
                        zuuluu = tangon.isMediaFlaggedForHarmType;
                        entity = 17;
                        entity = option[entity];
                        entity = golfie.bind(oscard)(entity);
                        entity = entity.ContentHarmType;
                        michal = entity.EXPLICIT;
                        entity = {};
                        report = 18;
                        report = option[report];
                        report = golfie.bind(oscard)(report);
                        report = report.ObscuredMediaTypes;
                        report = report.Attachment;
                        entity['type'] = report;
                        report = argFoo;
                        entity['media'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    verify = golfie.bind(yankee)(oscard);
                    oscard = offset.filter;
                    zuuluu = function(argFoo) {
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        entity = 16;
                        entity = option[entity];
                        oscard = undefined;
                        tangon = golfie.bind(oscard)(entity);
                        zuuluu = tangon.isMediaFlaggedForHarmType;
                        entity = 17;
                        entity = option[entity];
                        entity = golfie.bind(oscard)(entity);
                        entity = entity.ContentHarmType;
                        michal = entity.EXPLICIT;
                        entity = {};
                        report = 18;
                        report = option[report];
                        report = golfie.bind(oscard)(report);
                        report = report.ObscuredMediaTypes;
                        report = report.Embed;
                        entity['type'] = report;
                        report = argFoo;
                        entity['media'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    option = oscard.bind(offset)(zuuluu);
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[tangon];
                    golfie = oscard.bind(entity)(zuuluu);
                    oscard = golfie.trackExplicitMediaScanComplete;
                    zuuluu = {};
                    foxtra = romeon.id;
                    zuuluu['messageId'] = foxtra;
                    romeon = romeon.channel_id;
                    zuuluu['channelId'] = romeon;
                    yankee = yankee.length;
                    zuuluu['numOfAttachments'] = yankee;
                    offset = offset.length;
                    zuuluu['numOfEmbeds'] = offset;
                    verify = verify.length;
                    zuuluu['numOfExplicitAttachments'] = verify;
                    option = option.length;
                    zuuluu['numOfExplicitEmbeds'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
 200:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[tangon];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackScanTiming;
                    michal = argBaz;
                    michal = zuuluu.bind(tangon)(michal, report);
                    return entity;
                }
            };
            zuuluu = argBar;
            zuuluu = oscard.bind(report)(option, zuuluu, golfie);
            zuuluu = global;
            zuuluu = zuuluu.clearTimeout;
            zuuluu = zuuluu.bind(report)(tangon);
            entity = _closure1_slot19;
            entity = delete entity[michal];
            entity = true;
            return entity;
 115:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: withoutScheduledTimeout
        tangon = _closure1_slot22;
        zuuluu = undefined;
        michal = argFoo;
        michal = tangon.bind(zuuluu)(michal);
        entity = _closure1_slot19;
        michal = entity[michal];
        entity = null;
        entity = entity == michal;
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: handleUnscannedMessages
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            tangon = argBar;
            oscard = null;
            zuuluu = tangon;
            if(!(oscard == zuuluu)) { _fun00008_ip = 19; continue _fun00007 }
 17:
            zuuluu = {};
 19:
            golfie = zuuluu.forceBatchScan;
            entity = undefined;
            report = entity !== golfie;
            if(!report) { _fun00008_ip = 37; continue _fun00007 }
 34:
            report = golfie;
 37:
            golfie = zuuluu.jitter;
            zuuluu = entity !== golfie;
            if(!zuuluu) { _fun00008_ip = 53; continue _fun00007 }
 50:
            zuuluu = golfie;
 53:
            if(!(oscard != tangon)) { _fun00008_ip = 66; continue _fun00007 }
 57:
            tangon = tangon.isMessageUpdate;
            if(tangon) { _fun00008_ip = 85; continue _fun00007 }
 66:
            oscard = option.filter;
            tangon = _closure1_slot25;
            tangon = oscard.bind(option)(tangon);
            _fun00008_ip = 117; continue _fun00007;
 85:
            golfie = option.filter;
            oscard = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.hasUnscannedMedia;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = golfie.bind(option)(oscard);
            golfie = option.filter;
            oscard = _closure1_slot25;
            tangon = golfie.bind(option)(oscard);
 117:
            var _closure2_slot0 = tangon;
            golfie = tangon.forEach;
            oscard = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    zuuluu = _closure1_slot22;
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(tangon);
                    zuuluu = _closure1_slot19;
                    oscard = zuuluu[tangon];
                    zuuluu = null;
                    if(!(zuuluu == oscard)) { _fun00010_ip = 165; continue _fun00009 }
 40:
                    oscard = _closure1_slot1;
                    offset = _closure1_slot2;
                    zuuluu = 21;
                    zuuluu = offset[zuuluu];
                    golfie = oscard.bind(entity)(zuuluu);
                    oscard = golfie.increment;
                    zuuluu = {};
                    verify = _closure1_slot0;
                    option = 22;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    option = option.MetricEvents;
                    option = option.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE;
                    zuuluu['name'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = _closure1_slot19;
                    michal = {};
                    oscard = global;
                    option = oscard.Date;
                    golfie = option.now;
                    golfie = golfie.bind(option)();
                    michal['setAt'] = golfie;
                    golfie = oscard.setTimeout;
                    oscard = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = _closure3_slot0;
                            tangon = _closure1_slot24;
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            oscard = 15;
                            zuuluu = entity[oscard];
                            entity = undefined;
                            zuuluu = golfie.bind(entity)(zuuluu);
                            zuuluu = zuuluu.TimeoutCancelSource;
                            zuuluu = zuuluu.TIMEOUT;
                            zuuluu = tangon.bind(entity)(report, zuuluu);
                            if(!zuuluu) { _fun00012_ip = 243; continue _fun00011 }
 60:
                            option = _closure1_slot13;
                            golfie = option.getMessage;
                            tangon = report.channel_id;
                            zuuluu = report.id;
                            verify = golfie.bind(option)(tangon, zuuluu);
                            zuuluu = null;
                            if(!(zuuluu != verify)) { _fun00012_ip = 185; continue _fun00011 }
 92:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            golfie = 16;
                            golfie = zuuluu[golfie];
                            option = tangon.bind(entity)(golfie);
                            golfie = option.getUnscannedMediaIds;
                            golfie = golfie.bind(option)(verify);
                            option = golfie.attachmentIds;
                            golfie = golfie.embedIds;
                            zuuluu = zuuluu[oscard];
                            oscard = tangon.bind(entity)(zuuluu);
                            tangon = oscard.trackScanningTimedOut;
                            zuuluu = {};
                            verify = report.channel_id;
                            zuuluu['channelId'] = verify;
                            verify = report.id;
                            zuuluu['messageId'] = verify;
                            zuuluu['attachmentIds'] = option;
                            zuuluu['embedIds'] = golfie;
                            zuuluu = tangon.bind(oscard)(zuuluu);
 185:
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 19;
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.dispatch;
                            michal = {};
                            oscard = 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT';
                            michal['type'] = oscard;
                            oscard = report.id;
                            michal['messageId'] = oscard;
                            report = report.channel_id;
                            michal['channelId'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 243:
                            return entity;
                        }
                    };
                    report = 3000;
                    report = golfie.bind(entity)(oscard, report);
                    michal['timeout'] = report;
                    zuuluu[tangon] = michal;
 165:
                    return entity;
                }
            };
            oscard = golfie.bind(tangon)(oscard);
            if(report) { _fun00008_ip = 194; continue _fun00007 }
 139:
            oscard = global;
            option = oscard.Set;
            golfie = tangon.map;
            oscard = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            yankee = golfie.bind(tangon)(oscard);
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            romeon = golfie;
            oscard = new romeon[option](yankee, offset);
            oscard = oscard instanceof Object ? oscard : golfie;
            golfie = oscard.size;
            oscard = 1;
            report = golfie > oscard;
 194:
            var _closure2_slot1 = report;
            if(zuuluu) { _fun00008_ip = 216; continue _fun00007 }
 201:
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.bind(entity)(tangon, report);
            _fun00008_ip = 261; continue _fun00007;
 216:
            zuuluu = global;
            tangon = zuuluu.setTimeout;
            report = zuuluu.Math;
            zuuluu = report.random;
            report = zuuluu.bind(report)();
            zuuluu = 800;
            zuuluu = zuuluu * report;
            michal = function() {
                tangon = _closure2_slot0;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = _closure1_slot19;
                    tangon = _closure1_slot22;
                    zuuluu = undefined;
                    entity = argFoo;
                    entity = tangon.bind(zuuluu)(entity);
                    michal = michal[entity];
                    entity = null;
                    entity = entity != michal;
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot20;
                michal = _closure2_slot1;
                entity = undefined;
                michal = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            michal = tangon.bind(entity)(michal, zuuluu);
 261:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: aggregateExplicitMediaCounts
        report = argFoo;
        zuuluu = {};
        var _closure2_slot0 = zuuluu;
        michal = {};
        var _closure2_slot1 = michal;
        tangon = report.forEach;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure2_slot0;
                entity = tangon.channel_id;
                entity = zuuluu[entity];
                report = null;
                if(!(report == entity)) { _fun00014_ip = 50; continue _fun00013 }
 27:
                golfie = _closure2_slot0;
                zuuluu = tangon.channel_id;
                entity = {'numOfAttachments': 0, 'numOfAttachmentsPendingScan': 0, 'numOfEmbeds': 0, 'numOfEmbedsPendingScan': 0};
                golfie[zuuluu] = entity;
 50:
                zuuluu = _closure2_slot1;
                entity = tangon.id;
                entity = zuuluu[entity];
                if(!(report == entity)) { _fun00014_ip = 105; continue _fun00013 }
 67:
                golfie = _closure2_slot1;
                zuuluu = tangon.id;
                entity = {'channelId': null, 'numOfAttachments': 0, 'numOfGoreAttachments': 0, 'numOfExplicitAttachments': 0, 'numOfEmbeds': 0, 'numOfGoreEmbeds': 0, 'numOfExplicitEmbeds': 0};
                option = tangon.channel_id;
                entity['channelId'] = option;
                golfie[zuuluu] = entity;
 105:
                zuuluu = tangon.attachments;
                option = report == zuuluu;
                entity = undefined;
                golfie = undefined;
                if(option) { _fun00014_ip = 127; continue _fun00013 }
 122:
                golfie = zuuluu.length;
 127:
                option = report != golfie;
                verify = 0;
                if(!option) { _fun00014_ip = 139; continue _fun00013 }
 136:
                verify = golfie;
 139:
                option = tangon.embeds;
                offset = report == option;
                golfie = undefined;
                if(offset) { _fun00014_ip = 159; continue _fun00013 }
 154:
                golfie = option.length;
 159:
                offset = report != golfie;
                option = 0;
                if(!offset) { _fun00014_ip = 171; continue _fun00013 }
 168:
                option = golfie;
 171:
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                golfie = 16;
                golfie = yankee[golfie];
                offset = offset.bind(entity)(golfie);
                golfie = offset.getUnscannedMediaIds;
                golfie = golfie.bind(offset)(tangon);
                yankee = golfie.attachmentIds;
                golfie = golfie.embedIds;
                romeon = _closure2_slot0;
                offset = tangon.channel_id;
                offset = romeon[offset];
                romeon = offset.numOfAttachments;
                romeon = romeon + verify;
                offset['numOfAttachments'] = romeon;
                romeon = offset.numOfEmbeds;
                romeon = romeon + option;
                offset['numOfEmbeds'] = romeon;
                romeon = offset.numOfAttachmentsPendingScan;
                yankee = yankee.length;
                yankee = romeon + yankee;
                offset['numOfAttachmentsPendingScan'] = yankee;
                yankee = offset.numOfEmbedsPendingScan;
                golfie = golfie.length;
                golfie = yankee + golfie;
                offset['numOfEmbedsPendingScan'] = golfie;
                golfie = _closure2_slot1;
                michal = tangon.id;
                michal = golfie[michal];
                golfie = michal.numOfAttachments;
                golfie = golfie + verify;
                michal['numOfAttachments'] = golfie;
                golfie = michal.numOfEmbeds;
                golfie = golfie + option;
                michal['numOfEmbeds'] = golfie;
                offset = tangon.attachments;
                golfie = report == offset;
                option = undefined;
                if(golfie) { _fun00014_ip = 384; continue _fun00013 }
 364:
                verify = offset.filter;
                golfie = function(argFoo) {
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    entity = option[entity];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(entity);
                    zuuluu = tangon.isMediaFlaggedForHarmType;
                    entity = 17;
                    entity = option[entity];
                    entity = golfie.bind(oscard)(entity);
                    entity = entity.ContentHarmType;
                    michal = entity.EXPLICIT;
                    entity = {};
                    report = 18;
                    report = option[report];
                    report = golfie.bind(oscard)(report);
                    report = report.ObscuredMediaTypes;
                    report = report.Attachment;
                    entity['type'] = report;
                    report = argFoo;
                    entity['media'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                golfie = verify.bind(offset)(golfie);
                option = golfie.length;
 384:
                verify = report != option;
                golfie = 0;
                if(!verify) { _fun00014_ip = 396; continue _fun00013 }
 393:
                golfie = option;
 396:
                michal['numOfExplicitAttachments'] = golfie;
                offset = tangon.embeds;
                golfie = report == offset;
                option = undefined;
                if(golfie) { _fun00014_ip = 437; continue _fun00013 }
 417:
                verify = offset.filter;
                golfie = function(argFoo) {
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    entity = option[entity];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(entity);
                    zuuluu = tangon.isMediaFlaggedForHarmType;
                    entity = 17;
                    entity = option[entity];
                    entity = golfie.bind(oscard)(entity);
                    entity = entity.ContentHarmType;
                    michal = entity.EXPLICIT;
                    entity = {};
                    report = 18;
                    report = option[report];
                    report = golfie.bind(oscard)(report);
                    report = report.ObscuredMediaTypes;
                    report = report.Embed;
                    entity['type'] = report;
                    report = argFoo;
                    entity['media'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                golfie = verify.bind(offset)(golfie);
                option = golfie.length;
 437:
                verify = report != option;
                golfie = 0;
                if(!verify) { _fun00014_ip = 449; continue _fun00013 }
 446:
                golfie = option;
 449:
                michal['numOfExplicitEmbeds'] = golfie;
                offset = tangon.attachments;
                golfie = report == offset;
                option = undefined;
                if(golfie) { _fun00014_ip = 490; continue _fun00013 }
 470:
                verify = offset.filter;
                golfie = function(argFoo) {
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    entity = option[entity];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(entity);
                    zuuluu = tangon.isMediaFlaggedForHarmType;
                    entity = 17;
                    entity = option[entity];
                    entity = golfie.bind(oscard)(entity);
                    entity = entity.ContentHarmType;
                    michal = entity.GORE;
                    entity = {};
                    report = 18;
                    report = option[report];
                    report = golfie.bind(oscard)(report);
                    report = report.ObscuredMediaTypes;
                    report = report.Attachment;
                    entity['type'] = report;
                    report = argFoo;
                    entity['media'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                golfie = verify.bind(offset)(golfie);
                option = golfie.length;
 490:
                verify = report != option;
                golfie = 0;
                if(!verify) { _fun00014_ip = 502; continue _fun00013 }
 499:
                golfie = option;
 502:
                michal['numOfGoreAttachments'] = golfie;
                option = tangon.embeds;
                golfie = report == option;
                tangon = undefined;
                if(golfie) { _fun00014_ip = 543; continue _fun00013 }
 523:
                golfie = option.filter;
                oscard = function(argFoo) {
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 16;
                    entity = option[entity];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(entity);
                    zuuluu = tangon.isMediaFlaggedForHarmType;
                    entity = 17;
                    entity = option[entity];
                    entity = golfie.bind(oscard)(entity);
                    entity = entity.ContentHarmType;
                    michal = entity.GORE;
                    entity = {};
                    report = 18;
                    report = option[report];
                    report = golfie.bind(oscard)(report);
                    report = report.ObscuredMediaTypes;
                    report = report.Embed;
                    entity['type'] = report;
                    report = argFoo;
                    entity['media'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                oscard = golfie.bind(option)(oscard);
                tangon = oscard.length;
 543:
                report = report != tangon;
                zuuluu = 0;
                if(!report) { _fun00014_ip = 555; continue _fun00013 }
 552:
                zuuluu = tangon;
 555:
                michal['numOfGoreEmbeds'] = zuuluu;
                return entity;
            }
        };
        entity = tangon.bind(report)(entity);
        entity = {};
        entity['channelLookup'] = zuuluu;
        entity['messageLookup'] = michal;
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: processMessagesFromAction
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = function(argFoo) { // Original name: getScanningAttributesForMessages
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.filter;
                    entity = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            tangon = argFoo;
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 23;
                            entity = oscard[entity];
                            zuuluu = undefined;
                            michal = report.bind(zuuluu)(entity);
                            entity = michal.hasAttachmentsEmbedsComponentsOrSnapshots;
                            entity = entity.bind(michal)(tangon);
                            michal = 16;
                            michal = oscard[michal];
                            zuuluu = report.bind(zuuluu)(michal);
                            michal = zuuluu.getEnabledHarmTypesForMessage;
                            zuuluu = michal.bind(zuuluu)(tangon);
                            michal = 0;
                            michal = michal !== zuuluu;
                            if(!entity) { _fun00020_ip = 74; continue _fun00019 }
 71:
                            entity = michal;
 74:
                            return entity;
                        }
                    };
                    report = michal.bind(tangon)(entity);
                    michal = tangon.map;
                    entity = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            zuuluu = null;
                            if(!(zuuluu != entity)) { _fun00022_ip = 118; continue _fun00021 }
 9:
                            michal = 'referenced_message';
                            michal = michal in entity;
                            if(!michal) { _fun00022_ip = 118; continue _fun00021 }
 20:
                            michal = entity.referenced_message;
                            if(!(zuuluu != michal)) { _fun00022_ip = 118; continue _fun00021 }
 30:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 23;
                            zuuluu = tangon[zuuluu];
                            tangon = undefined;
                            oscard = report.bind(tangon)(zuuluu);
                            report = oscard.hasAttachmentsEmbedsComponentsOrSnapshots;
                            zuuluu = entity.referenced_message;
                            zuuluu = report.bind(oscard)(zuuluu);
                            if(!zuuluu) { _fun00022_ip = 118; continue _fun00021 }
 75:
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 16;
                            michal = report[michal];
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.getEnabledHarmTypesForMessage;
                            michal = entity.referenced_message;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = 0;
                            if(!(michal === zuuluu)) { _fun00022_ip = 122; continue _fun00021 }
 118:
                            michal = undefined;
                            return michal;
 122:
                            entity = entity.referenced_message;
                            return entity;
                        }
                    };
                    tangon = michal.bind(tangon)(entity);
                    michal = tangon.filter;
                    entity = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    tangon = michal.bind(tangon)(entity);
                    entity = tangon.length;
                    michal = 0;
                    oscard = report;
                    if(!(entity > michal)) { _fun00018_ip = 93; continue _fun00017 }
 64:
                    entity = new Array(0);
                    verify = entity;
                    option = report;
                    golfie = 0;
                    golfie = arraySpread(verify, option, golfie);
                    verify = entity;
                    option = tangon;
                    michal = arraySpread(verify, option, golfie);
                    oscard = entity;
 93:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 24;
                    michal = tangon[michal];
                    tangon = undefined;
                    report = report.bind(tangon)(michal);
                    michal = function(argFoo, argBar) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zuuluu = argFoo;
                            michal = argBar;
                            tangon = zuuluu.id;
                            entity = michal.id;
                            entity = tangon === entity;
                            if(!entity) { _fun00024_ip = 37; continue _fun00023 }
 23:
                            zuuluu = zuuluu.channel_id;
                            michal = michal.channel_id;
                            entity = zuuluu === michal;
 37:
                            return entity;
                        }
                    };
                    michal = report.bind(tangon)(oscard, michal);
                    report = michal.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 16;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hasUnscannedMedia;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = report.bind(michal)(zuuluu);
                    entity = _closure1_slot27;
                    michal = entity.bind(tangon)(michal);
                    entity = {};
                    entity['messagesPendingScan'] = zuuluu;
                    zuuluu = michal.messageLookup;
                    entity['attributesByMessageId'] = zuuluu;
                    michal = michal.channelLookup;
                    entity['attributesByChannelId'] = michal;
                    return entity;
                }
            };
            report = undefined;
            michal = argFoo;
            michal = zuuluu.bind(report)(michal);
            tangon = michal.messagesPendingScan;
            offset = michal.attributesByChannelId;
            golfie = michal.attributesByMessageId;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            option = 25;
            zuuluu = verify[option];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.entries;
            offset = zuuluu.bind(oscard)(offset);
            oscard = offset.forEach;
            zuuluu = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    report = tangon().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    oscard = undefined;
                    if(zuuluu) { _fun00026_ip = 27; continue _fun00025 }
 24:
                    oscard = report;
 27:
                    report = undefined;
                    if(zuuluu) { _fun00026_ip = 57; continue _fun00025 }
 32:
                    golfie = tangon().value;
                    tangon = michal;
                    tangon = tangon === entity;
                    report = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00026_ip = 57; continue _fun00025 }
 51:
                    report = golfie;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00026_ip = 63; continue _fun00025 }
 60:
                    michal.return();
 63:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackExplicitMediaRedactableMessagedLoaded;
                    michal = {};
                    michal['channelId'] = oscard;
                    oscard = report.numOfAttachments;
                    michal['numOfAttachments'] = oscard;
                    oscard = report.numOfAttachmentsPendingScan;
                    michal['numOfAttachmentsPendingScan'] = oscard;
                    oscard = report.numOfEmbeds;
                    michal['numOfEmbeds'] = oscard;
                    report = report.numOfEmbedsPendingScan;
                    michal['numOfEmbedsPendingScan'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            zuuluu = oscard.bind(offset)(zuuluu);
            oscard = _closure1_slot0;
            zuuluu = 26;
            zuuluu = verify[zuuluu];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.isEligibleForObscuredMessageLoadExperiment;
            zuuluu = zuuluu.bind(oscard)();
            if(!zuuluu) { _fun00016_ip = 156; continue _fun00015 }
 113:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            oscard = oscard.bind(report)(zuuluu);
            zuuluu = oscard.entries;
            oscard = zuuluu.bind(oscard)(golfie);
            zuuluu = oscard.forEach;
            entity = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    report = tangon().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    oscard = undefined;
                    if(zuuluu) { _fun00028_ip = 27; continue _fun00027 }
 24:
                    oscard = report;
 27:
                    report = undefined;
                    if(zuuluu) { _fun00028_ip = 57; continue _fun00027 }
 32:
                    golfie = tangon().value;
                    tangon = michal;
                    tangon = tangon === entity;
                    report = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00028_ip = 57; continue _fun00027 }
 51:
                    report = golfie;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00028_ip = 63; continue _fun00027 }
 60:
                    michal.return();
 63:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackRedactableMessageLoaded;
                    michal = {};
                    michal['messageId'] = oscard;
                    oscard = report.channelId;
                    michal['channelId'] = oscard;
                    oscard = report.numOfAttachments;
                    michal['numOfAttachments'] = oscard;
                    oscard = report.numOfGoreAttachments;
                    michal['numOfGoreAttachments'] = oscard;
                    oscard = report.numOfExplicitAttachments;
                    michal['numOfExplicitAttachments'] = oscard;
                    oscard = report.numOfEmbeds;
                    michal['numOfEmbeds'] = oscard;
                    oscard = report.numOfGoreEmbeds;
                    michal['numOfGoreEmbeds'] = oscard;
                    report = report.numOfExplicitEmbeds;
                    michal['numOfExplicitEmbeds'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = zuuluu.bind(oscard)(entity);
 156:
            zuuluu = tangon.length;
            entity = 0;
            entity = zuuluu > entity;
            if(!entity) { _fun00016_ip = 185; continue _fun00015 }
 170:
            zuuluu = _closure1_slot26;
            michal = argBar;
            michal = zuuluu.bind(report)(tangon, michal);
            entity = true;
 185:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: processChannelMessagesFromAction
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            zuuluu = function(argFoo) { // Original name: getScanningAttributesForChannelMessages
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.filter;
                    entity = function(argFoo) {
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 23;
                            entity = report[entity];
                            report = undefined;
                            zuuluu = zuuluu.bind(report)(entity);
                            entity = zuuluu.hasAttachmentsEmbedsComponentsOrSnapshots;
                            entity = entity.bind(zuuluu)(tangon);
                            if(!entity) { _fun00034_ip = 79; continue _fun00033 }
 42:
                            zuuluu = _closure1_slot0;
                            oscard = _closure1_slot2;
                            michal = 16;
                            michal = oscard[michal];
                            zuuluu = zuuluu.bind(report)(michal);
                            michal = zuuluu.getEnabledHarmTypesForMessage;
                            zuuluu = michal.bind(zuuluu)(tangon);
                            michal = 0;
                            entity = michal !== zuuluu;
 79:
                            return entity;
                        }
                    };
                    report = michal.bind(tangon)(entity);
                    michal = tangon.map;
                    entity = function(argFoo) {
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            entity = argFoo;
                            report = _closure1_slot17;
                            tangon = report.has;
                            zuuluu = entity.type;
                            zuuluu = tangon.bind(report)(zuuluu);
                            if(!zuuluu) { _fun00036_ip = 178; continue _fun00035 }
 31:
                            zuuluu = entity.messageReference;
                            tangon = null;
                            if(!(tangon != zuuluu)) { _fun00036_ip = 178; continue _fun00035 }
 46:
                            report = _closure1_slot8;
                            zuuluu = report.getMessageByReference;
                            entity = entity.messageReference;
                            entity = zuuluu.bind(report)(entity);
                            report = entity.state;
                            zuuluu = _closure1_slot9;
                            zuuluu = zuuluu.LOADED;
                            if(!(report === zuuluu)) { _fun00036_ip = 178; continue _fun00035 }
 86:
                            zuuluu = entity.message;
                            if(!(tangon != zuuluu)) { _fun00036_ip = 178; continue _fun00035 }
 95:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 23;
                            zuuluu = tangon[zuuluu];
                            tangon = undefined;
                            oscard = report.bind(tangon)(zuuluu);
                            report = oscard.hasAttachmentsEmbedsComponentsOrSnapshots;
                            zuuluu = entity.message;
                            zuuluu = report.bind(oscard)(zuuluu);
                            if(!zuuluu) { _fun00036_ip = 178; continue _fun00035 }
 136:
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 16;
                            michal = report[michal];
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.getEnabledHarmTypesForMessage;
                            michal = entity.message;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = 0;
                            if(!(michal === zuuluu)) { _fun00036_ip = 182; continue _fun00035 }
 178:
                            michal = undefined;
                            return michal;
 182:
                            entity = entity.message;
                            return entity;
                        }
                    };
                    tangon = michal.bind(tangon)(entity);
                    michal = tangon.filter;
                    entity = function(argFoo) {
                        michal = null;
                        entity = argFoo;
                        entity = michal != entity;
                        return entity;
                    };
                    tangon = michal.bind(tangon)(entity);
                    entity = tangon.length;
                    michal = 0;
                    oscard = report;
                    if(!(entity > michal)) { _fun00032_ip = 93; continue _fun00031 }
 64:
                    entity = new Array(0);
                    verify = entity;
                    option = report;
                    golfie = 0;
                    golfie = arraySpread(verify, option, golfie);
                    verify = entity;
                    option = tangon;
                    michal = arraySpread(verify, option, golfie);
                    oscard = entity;
 93:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 24;
                    michal = tangon[michal];
                    tangon = undefined;
                    report = report.bind(tangon)(michal);
                    michal = function(argFoo, argBar) {
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            zuuluu = argFoo;
                            michal = argBar;
                            tangon = zuuluu.id;
                            entity = michal.id;
                            entity = tangon === entity;
                            if(!entity) { _fun00038_ip = 37; continue _fun00037 }
 23:
                            zuuluu = zuuluu.channel_id;
                            michal = michal.channel_id;
                            entity = zuuluu === michal;
 37:
                            return entity;
                        }
                    };
                    michal = report.bind(tangon)(oscard, michal);
                    report = michal.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 16;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hasUnscannedMedia;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = report.bind(michal)(zuuluu);
                    entity = _closure1_slot27;
                    michal = entity.bind(tangon)(michal);
                    entity = {};
                    entity['messagesPendingScan'] = zuuluu;
                    zuuluu = michal.channelLookup;
                    entity['attributesByChannelId'] = zuuluu;
                    michal = michal.messageLookup;
                    entity['attributesByMessageId'] = michal;
                    return entity;
                }
            };
            tangon = undefined;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.messagesPendingScan;
            offset = michal.attributesByChannelId;
            golfie = michal.attributesByMessageId;
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            option = 25;
            report = verify[option];
            oscard = oscard.bind(tangon)(report);
            report = oscard.entries;
            offset = report.bind(oscard)(offset);
            oscard = offset.forEach;
            report = function(argFoo) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    report = tangon().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    oscard = undefined;
                    if(zuuluu) { _fun00040_ip = 27; continue _fun00039 }
 24:
                    oscard = report;
 27:
                    report = undefined;
                    if(zuuluu) { _fun00040_ip = 57; continue _fun00039 }
 32:
                    golfie = tangon().value;
                    tangon = michal;
                    tangon = tangon === entity;
                    report = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00040_ip = 57; continue _fun00039 }
 51:
                    report = golfie;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00040_ip = 63; continue _fun00039 }
 60:
                    michal.return();
 63:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackExplicitMediaRedactableMessagedLoaded;
                    michal = {};
                    michal['channelId'] = oscard;
                    oscard = report.numOfAttachments;
                    michal['numOfAttachments'] = oscard;
                    oscard = report.numOfAttachmentsPendingScan;
                    michal['numOfAttachmentsPendingScan'] = oscard;
                    oscard = report.numOfEmbeds;
                    michal['numOfEmbeds'] = oscard;
                    report = report.numOfEmbedsPendingScan;
                    michal['numOfEmbedsPendingScan'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            report = oscard.bind(offset)(report);
            oscard = _closure1_slot0;
            report = 26;
            report = verify[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.isEligibleForObscuredMessageLoadExperiment;
            report = report.bind(oscard)();
            if(!report) { _fun00030_ip = 156; continue _fun00029 }
 113:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            report = report[option];
            oscard = oscard.bind(tangon)(report);
            report = oscard.entries;
            oscard = report.bind(oscard)(golfie);
            report = oscard.forEach;
            entity = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon[Symbol.iterator];
                    tangon = michal().next;
                    report = tangon().value;
                    zuuluu = michal;
                    entity = undefined;
                    zuuluu = zuuluu === entity;
                    oscard = undefined;
                    if(zuuluu) { _fun00042_ip = 27; continue _fun00041 }
 24:
                    oscard = report;
 27:
                    report = undefined;
                    if(zuuluu) { _fun00042_ip = 57; continue _fun00041 }
 32:
                    golfie = tangon().value;
                    tangon = michal;
                    tangon = tangon === entity;
                    report = undefined;
                    zuuluu = tangon;
                    if(tangon) { _fun00042_ip = 57; continue _fun00041 }
 51:
                    report = golfie;
                    zuuluu = tangon;
 57:
                    if(zuuluu) { _fun00042_ip = 63; continue _fun00041 }
 60:
                    michal.return();
 63:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.trackRedactableMessageLoaded;
                    michal = {};
                    michal['messageId'] = oscard;
                    oscard = report.channelId;
                    michal['channelId'] = oscard;
                    oscard = report.numOfAttachments;
                    michal['numOfAttachments'] = oscard;
                    oscard = report.numOfGoreAttachments;
                    michal['numOfGoreAttachments'] = oscard;
                    oscard = report.numOfExplicitAttachments;
                    michal['numOfExplicitAttachments'] = oscard;
                    oscard = report.numOfEmbeds;
                    michal['numOfEmbeds'] = oscard;
                    oscard = report.numOfGoreEmbeds;
                    michal['numOfGoreEmbeds'] = oscard;
                    report = report.numOfExplicitEmbeds;
                    michal['numOfExplicitEmbeds'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = report.bind(oscard)(entity);
 156:
            report = zuuluu.length;
            entity = 0;
            entity = report > entity;
            if(!entity) { _fun00030_ip = 181; continue _fun00029 }
 170:
            michal = _closure1_slot26;
            michal = michal.bind(tangon)(zuuluu);
            entity = true;
 181:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: handleMessageUpdate
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            zuuluu = michal.channel_id;
            entity = null;
            if(!(entity != zuuluu)) { _fun00044_ip = 521; continue _fun00043 }
 22:
            zuuluu = michal.id;
            if(!(entity != zuuluu)) { _fun00044_ip = 521; continue _fun00043 }
 34:
            zuuluu = michal.author;
            tangon = entity == zuuluu;
            report = undefined;
            oscard = undefined;
            if(tangon) { _fun00044_ip = 56; continue _fun00043 }
 51:
            oscard = zuuluu.id;
 56:
            golfie = _closure1_slot10;
            tangon = golfie.getId;
            tangon = tangon.bind(golfie)();
            if(!(oscard !== tangon)) { _fun00044_ip = 521; continue _fun00043 }
 80:
            tangon = michal.embeds;
            if(!(entity == tangon)) { _fun00044_ip = 103; continue _fun00043 }
 90:
            tangon = michal.attachments;
            if(!(entity != tangon)) { _fun00044_ip = 517; continue _fun00043 }
 103:
            oscard = michal.embeds;
            golfie = entity == oscard;
            tangon = undefined;
            if(golfie) { _fun00044_ip = 123; continue _fun00043 }
 118:
            tangon = oscard.length;
 123:
            oscard = 0;
            if(!(oscard === tangon)) { _fun00044_ip = 156; continue _fun00043 }
 129:
            golfie = michal.attachments;
            option = entity == golfie;
            tangon = undefined;
            if(option) { _fun00044_ip = 149; continue _fun00043 }
 144:
            tangon = golfie.length;
 149:
            if(!(oscard !== tangon)) { _fun00044_ip = 513; continue _fun00043 }
 156:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = 16;
            tangon = tangon[oscard];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.hasUnscannedMedia;
            tangon = tangon.bind(golfie)(michal);
            if(tangon) { _fun00044_ip = 400; continue _fun00043 }
 193:
            verify = _closure1_slot13;
            option = verify.getMessage;
            golfie = michal.channel_id;
            tangon = michal.id;
            golfie = option.bind(verify)(golfie, tangon);
            if(!(entity == golfie)) { _fun00044_ip = 249; continue _fun00043 }
 223:
            offset = _closure1_slot16;
            verify = offset.getMessage;
            option = michal.id;
            tangon = michal.channel_id;
            golfie = verify.bind(offset)(option, tangon);
 249:
            if(!(entity == golfie)) { _fun00044_ip = 296; continue _fun00043 }
 253:
            offset = _closure1_slot8;
            verify = offset.getMessage;
            option = michal.channel_id;
            tangon = michal.id;
            option = verify.bind(offset)(option, tangon);
            verify = entity == option;
            tangon = undefined;
            if(verify) { _fun00044_ip = 293; continue _fun00043 }
 288:
            tangon = option.message;
 293:
            golfie = tangon;
 296:
            tangon = entity == golfie;
            if(tangon) { _fun00044_ip = 355; continue _fun00043 }
 303:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = yankee[oscard];
            verify = offset.bind(report)(oscard);
            option = verify.hasUnscannedMedia;
            oscard = 27;
            oscard = yankee[oscard];
            offset = offset.bind(report)(oscard);
            oscard = offset.updateMessageRecord;
            oscard = oscard.bind(offset)(golfie, michal);
            tangon = option.bind(verify)(oscard);
 355:
            if(tangon) { _fun00044_ip = 400; continue _fun00043 }
 358:
            oscard = _closure1_slot24;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 15;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            tangon = tangon.TimeoutCancelSource;
            tangon = tangon.UPDATE;
            tangon = oscard.bind(report)(golfie, tangon);
 400:
            oscard = _closure1_slot14;
            tangon = oscard.getChannelId;
            golfie = tangon.bind(oscard)();
            oscard = _closure1_slot11;
            tangon = oscard.getCurrentSidebarChannelId;
            oscard = tangon.bind(oscard)(golfie);
            tangon = michal.channel_id;
            if(!(tangon !== golfie)) { _fun00044_ip = 451; continue _fun00043 }
 438:
            tangon = michal.channel_id;
            if(!(tangon !== oscard)) { _fun00044_ip = 451; continue _fun00043 }
 447:
            tangon = false;
            return tangon;
 451:
            golfie = _closure1_slot13;
            oscard = golfie.getMessage;
            tangon = michal.channel_id;
            michal = michal.id;
            michal = oscard.bind(golfie)(tangon, michal);
            entity = entity != michal;
            if(!entity) { _fun00044_ip = 511; continue _fun00043 }
 484:
            tangon = _closure1_slot28;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = {};
            oscard = true;
            michal['isMessageUpdate'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 511:
            return entity;
 513:
            entity = false;
            return entity;
 517:
            entity = false;
            return entity;
 521:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: handleMessageCreate
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            michal = argFoo;
            oscard = michal.channelId;
            entity = michal.message;
            zuuluu = michal.optimistic;
            michal = michal.isPushNotification;
            if(zuuluu) { _fun00046_ip = 253; continue _fun00045 }
 31:
            if(michal) { _fun00046_ip = 253; continue _fun00045 }
 37:
            golfie = null;
            if(!(golfie != oscard)) { _fun00046_ip = 253; continue _fun00045 }
 46:
            michal = entity.author;
            zuuluu = golfie == michal;
            tangon = undefined;
            report = undefined;
            if(zuuluu) { _fun00046_ip = 68; continue _fun00045 }
 63:
            report = michal.id;
 68:
            option = _closure1_slot10;
            zuuluu = option.getId;
            zuuluu = zuuluu.bind(option)();
            if(!(report !== zuuluu)) { _fun00046_ip = 253; continue _fun00045 }
 92:
            report = _closure1_slot14;
            zuuluu = report.getChannelId;
            option = zuuluu.bind(report)();
            report = _closure1_slot11;
            zuuluu = report.getCurrentSidebarChannelId;
            report = zuuluu.bind(report)(option);
            verify = _closure1_slot12;
            zuuluu = verify.getChannel;
            zuuluu = zuuluu.bind(verify)(oscard);
            if(!(oscard !== option)) { _fun00046_ip = 143; continue _fun00045 }
 139:
            if(!(oscard === report)) { _fun00046_ip = 249; continue _fun00045 }
 143:
            report = golfie == zuuluu;
            oscard = undefined;
            if(report) { _fun00046_ip = 162; continue _fun00045 }
 152:
            report = zuuluu.isPrivate;
            oscard = report.bind(zuuluu)();
 162:
            report = golfie == oscard;
            if(report) { _fun00046_ip = 172; continue _fun00045 }
 169:
            report = oscard;
 172:
            option = golfie == zuuluu;
            oscard = undefined;
            if(option) { _fun00046_ip = 187; continue _fun00045 }
 181:
            oscard = zuuluu.memberCount;
 187:
            oscard = golfie == oscard;
            if(oscard) { _fun00046_ip = 216; continue _fun00045 }
 194:
            option = golfie == zuuluu;
            golfie = undefined;
            if(option) { _fun00046_ip = 209; continue _fun00045 }
 203:
            golfie = zuuluu.memberCount;
 209:
            zuuluu = 100;
            oscard = golfie > zuuluu;
 216:
            zuuluu = _closure1_slot28;
            michal = new Array(1);
            michal[0] = entity;
            entity = {};
            if(!report) { _fun00046_ip = 236; continue _fun00045 }
 233:
            report = oscard;
 236:
            entity['jitter'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 249:
            entity = false;
            return entity;
 253:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: handleMessagesLoad
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            tangon = entity.messages;
            entity = null;
            if(!(entity != report)) { _fun00048_ip = 83; continue _fun00047 }
 20:
            if(!(entity != tangon)) { _fun00048_ip = 83; continue _fun00047 }
 24:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            entity = entity.bind(zuuluu)();
            oscard = _closure1_slot11;
            zuuluu = oscard.getCurrentSidebarChannelId;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = report === entity;
            if(entity) { _fun00048_ip = 67; continue _fun00047 }
 63:
            entity = report === zuuluu;
 67:
            if(!entity) { _fun00048_ip = 81; continue _fun00047 }
 70:
            zuuluu = _closure1_slot28;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 81:
            return entity;
 83:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleSearchFinish
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            report = entity.messages;
            entity = null;
            if(!(entity != report)) { _fun00050_ip = 81; continue _fun00049 }
 15:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 28;
            michal = oscard[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            report = michal.bind(zuuluu)(report);
            michal = _closure1_slot28;
            entity = 24;
            entity = oscard[entity];
            tangon = tangon.bind(zuuluu)(entity);
            entity = function(argFoo, argBar) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    tangon = zuuluu.id;
                    entity = michal.id;
                    entity = tangon === entity;
                    if(!entity) { _fun00052_ip = 37; continue _fun00051 }
 23:
                    zuuluu = zuuluu.channel_id;
                    michal = michal.channel_id;
                    entity = zuuluu === michal;
 37:
                    return entity;
                }
            };
            entity = tangon.bind(zuuluu)(report, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
 81:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleLoadPinnedMessages
        entity = argFoo;
        tangon = entity.pins;
        zuuluu = _closure1_slot28;
        michal = tangon.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.message;
            return entity;
        };
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleForumPostsLoad
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            option = entity.threads;
            var _closure2_slot0 = option;
            entity = null;
            entity = entity != option;
            if(!entity) { _fun00054_ip = 112; continue _fun00053 }
 29:
            oscard = _closure1_slot15;
            michal = oscard.getGuildId;
            michal = michal.bind(oscard)();
            michal = michal === report;
            if(!michal) { _fun00054_ip = 109; continue _fun00053 }
 53:
            report = _closure1_slot28;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 25;
            oscard = oscard[tangon];
            tangon = undefined;
            golfie = golfie.bind(tangon)(oscard);
            oscard = golfie.keys;
            golfie = oscard.bind(golfie)(option);
            oscard = golfie.map;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = michal[entity];
                entity = entity.first_message;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal = report.bind(tangon)(zuuluu);
 109:
            entity = michal;
 112:
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleThreadsLoad
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            oscard = entity.firstMessages;
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00056_ip = 74; continue _fun00055 }
 23:
            report = _closure1_slot15;
            michal = report.getGuildId;
            michal = michal.bind(report)();
            tangon = michal !== tangon;
            michal = !tangon;
            if(tangon) { _fun00056_ip = 71; continue _fun00055 }
 50:
            report = _closure1_slot28;
            tangon = {};
            zuuluu = true;
            tangon['forceBatchScan'] = zuuluu;
            zuuluu = undefined;
            michal = report.bind(zuuluu)(oscard, tangon);
 71:
            entity = michal;
 74:
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleSidebarViewChannel
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00058_ip = 31; continue _fun00057 }
 17:
            zuuluu = _closure1_slot41;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 31:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 29;
            entity = tangon[entity];
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            entity = michal.isEligibleForSafetyXPHoldoutExperiment;
            entity = entity.bind(michal)();
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00060_ip = 88; continue _fun00059 }
 52:
            oscard = _closure1_slot14;
            michal = oscard.getChannelId;
            michal = michal.bind(oscard)();
            oscard = report !== michal;
            michal = !oscard;
            if(oscard) { _fun00060_ip = 85; continue _fun00059 }
 76:
            zuuluu = _closure1_slot41;
            michal = zuuluu.bind(tangon)(report);
 85:
            entity = michal;
 88:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsUpdate
        _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
            michal = argFoo;
            entity = michal.settings;
            michal = michal.local;
            if(!michal) { _fun00062_ip = 76; continue _fun00061 }
 18:
            zuuluu = entity.type;
            entity = _closure1_slot18;
            entity = entity.PRELOADED_USER_SETTINGS;
            if(!(zuuluu === entity)) { _fun00062_ip = 76; continue _fun00061 }
 40:
            zuuluu = _closure1_slot14;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00062_ip = 74; continue _fun00061 }
 63:
            zuuluu = _closure1_slot41;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 74:
            return entity;
 76:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: handleVoiceChannelChatOpen
        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            entity = entity.chatOpen;
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00064_ip = 37; continue _fun00063 }
 23:
            zuuluu = _closure1_slot41;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 37:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: maybeScanMessagesForChannelId
        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
            tangon = _closure1_slot13;
            zuuluu = tangon.getMessages;
            entity = argFoo;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.length;
            entity = 0;
            entity = entity !== zuuluu;
            if(!entity) { _fun00066_ip = 46; continue _fun00065 }
 35:
            zuuluu = _closure1_slot29;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 46:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReferencedMessageState;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsTypes;
    var _closure1_slot18 = tangon;
    tangon = {};
    var _closure1_slot19 = tangon;
    tangon = function(argFoo, argBar) { // Original name: sendForScanning
        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.length;
            entity = 0;
            if(!(entity !== michal)) { _fun00068_ip = 96; continue _fun00067 }
 14:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 20;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            tangon = argBar;
            if(tangon) { _fun00068_ip = 85; continue _fun00067 }
 45:
            report = michal.sendMessagesForScanning;
            entity = zuuluu[entity];
            tangon = entity.channel_id;
            oscard = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            entity = oscard.bind(zuuluu)(entity);
            entity = report.bind(michal)(tangon, entity);
            _fun00068_ip = 96; continue _fun00067;
 85:
            entity = michal.sendMultiChannelMessagesForScanning;
            entity = entity.bind(michal)(zuuluu);
 96:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ExplicitMediaManager
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot4;
                michal = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot21;
                entity = entity.bind(tangon)();
                if(entity) { _fun00070_ip = 84; continue _fun00069 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00070_ip = 118; continue _fun00069;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(tangon)(report, entity);
                michal = {};
                tangon = _closure1_slot32;
                michal['LOAD_MESSAGES_SUCCESS'] = tangon;
                tangon = _closure1_slot35;
                michal['LOAD_FORUM_POSTS'] = tangon;
                tangon = _closure1_slot36;
                michal['LOAD_THREADS_SUCCESS'] = tangon;
                michal['LOAD_ARCHIVED_THREADS_SUCCESS'] = tangon;
                tangon = _closure1_slot37;
                michal['SIDEBAR_VIEW_CHANNEL'] = tangon;
                tangon = _closure1_slot31;
                michal['MESSAGE_CREATE'] = tangon;
                tangon = _closure1_slot30;
                michal['MESSAGE_UPDATE'] = tangon;
                tangon = _closure1_slot23;
                michal['LOGOUT'] = tangon;
                tangon = _closure1_slot33;
                michal['SEARCH_FINISH'] = tangon;
                michal['MOD_VIEW_SEARCH_FINISH'] = tangon;
                tangon = _closure1_slot38;
                michal['CHANNEL_SELECT'] = tangon;
                tangon = _closure1_slot34;
                michal['LOAD_PINNED_MESSAGES_SUCCESS'] = tangon;
                tangon = _closure1_slot39;
                michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
                zuuluu = _closure1_slot40;
                michal['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/explicit_media_redaction/ExplicitMediaManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 3000;
    zuuluu['MESSAGE_SCAN_TIMEOUT'] = michal;
    michal = 800;
    zuuluu['MAX_TIMEOUT_FOR_JITTER'] = michal;
    return entity;
})();