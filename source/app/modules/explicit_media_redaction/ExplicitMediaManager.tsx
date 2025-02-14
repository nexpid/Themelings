// app/modules/explicit_media_redaction/ExplicitMediaManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun58506: for(var _fun58506_ip = 0; ; ) switch(_fun58506_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot25;
            entity = entity.bind(zulu)();
            if(entity) { _fun58506_ip = 51; continue _fun58506 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun58506_ip = 92; continue _fun58506;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun58506_ip = 71; continue _fun58506 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun58507: for(var _fun58507_ip = 0; ; ) switch(_fun58507_ip) {
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
            _fun58507_ip = 74; continue _fun58507;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot25 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: createCompositeKey
        entity = argFoo;
        report = entity.channel_id;
        tango = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = ':';
        entity = zulu.bind(mike)(report, entity, tango);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: resetManager
        entity = global;
        tango = entity.Object;
        zulu = tango.values;
        entity = _closure1_slot22;
        tango = zulu.bind(tango)(entity);
        zulu = tango.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.timeout;
            entity = global;
            mike = entity.clearTimeout;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        entity = zulu.bind(tango)(entity);
        entity = {};
        _closure1_slot22 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeCancelTimeout
        _fun58513: for(var _fun58513_ip = 0; ; ) switch(_fun58513_ip) {
 0:
            oscar = argFoo;
            entity = oscar.id;
            tango = null;
            if(!(tango != entity)) { _fun58513_ip = 108; continue _fun58513 }
 14:
            entity = oscar.channel_id;
            if(!(tango != entity)) { _fun58513_ip = 108; continue _fun58513 }
 23:
            mike = _closure1_slot26;
            report = undefined;
            mike = mike.bind(report)(oscar);
            zulu = _closure1_slot22;
            zulu = zulu[mike];
            if(!(tango == zulu)) { _fun58513_ip = 53; continue _fun58513 }
 49:
            zulu = false;
            return zulu;
 53:
            zulu = _closure1_slot22;
            zulu = zulu[mike];
            tango = zulu.timeout;
            zulu = global;
            zulu = zulu.clearTimeout;
            zulu = zulu.bind(report)(tango);
            tango = function(argFoo, argBar) { // Original name: handleMediaScanCompleteReporting
                _fun58514: for(var _fun58514_ip = 0; ; ) switch(_fun58514_ip) {
 0:
                    foxtrot = argFoo;
                    report = argBar;
                    tango = _closure1_slot26;
                    entity = undefined;
                    oscar = tango.bind(entity)(foxtrot);
                    tango = _closure1_slot22;
                    tango = tango[oscar];
                    tango = tango.setAt;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 16;
                    golf = golf[oscar];
                    golf = options.bind(entity)(golf);
                    golf = golf.TimeoutCancelSource;
                    golf = golf.UPDATE;
                    if(!(report === golf)) { _fun58514_ip = 223; continue _fun58514 }
 75:
                    romeo = foxtrot.attachments;
                    golf = null;
                    if(!(golf == romeo)) { _fun58514_ip = 91; continue _fun58514 }
 87:
                    romeo = new Array(0);
 91:
                    yankee = foxtrot.embeds;
                    if(!(golf == yankee)) { _fun58514_ip = 105; continue _fun58514 }
 101:
                    yankee = new Array(0);
 105:
                    options = romeo.filter;
                    golf = function(argFoo) {
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        entity = 16;
                        mike = golf[entity];
                        report = undefined;
                        tango = oscar.bind(report)(mike);
                        zulu = tango.isMediaObscured;
                        mike = {};
                        entity = golf[entity];
                        entity = oscar.bind(report)(entity);
                        entity = entity.ObscuredMediaTypes;
                        entity = entity.Attachment;
                        mike['type'] = entity;
                        entity = argFoo;
                        mike['media'] = entity;
                        entity = true;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    offset = options.bind(romeo)(golf);
                    golf = yankee.filter;
                    zulu = function(argFoo) {
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        entity = 16;
                        mike = golf[entity];
                        report = undefined;
                        tango = oscar.bind(report)(mike);
                        zulu = tango.isMediaObscured;
                        mike = {};
                        entity = golf[entity];
                        entity = oscar.bind(report)(entity);
                        entity = entity.ObscuredMediaTypes;
                        entity = entity.Embed;
                        mike['type'] = entity;
                        entity = argFoo;
                        mike['media'] = entity;
                        entity = true;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    verify = golf.bind(yankee)(zulu);
                    golf = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    options = golf.bind(entity)(zulu);
                    golf = options.trackExplicitMediaScanComplete;
                    zulu = {};
                    backup = foxtrot.id;
                    zulu['messageId'] = backup;
                    foxtrot = foxtrot.channel_id;
                    zulu['channelId'] = foxtrot;
                    romeo = romeo.length;
                    zulu['numOfAttachments'] = romeo;
                    yankee = yankee.length;
                    zulu['numOfEmbeds'] = yankee;
                    offset = offset.length;
                    zulu['numOfExplicitAttachments'] = offset;
                    verify = verify.length;
                    zulu['numOfExplicitEmbeds'] = verify;
                    zulu = golf.bind(options)(zulu);
 223:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.trackScanTiming;
                    mike = mike.bind(zulu)(tango, report);
                    return entity;
                }
            };
            zulu = argBar;
            zulu = tango.bind(report)(oscar, zulu);
            entity = _closure1_slot22;
            entity = delete entity[mike];
            entity = true;
            return entity;
 108:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: handleUnscannedMessages
        _fun58517: for(var _fun58517_ip = 0; ; ) switch(_fun58517_ip) {
 0:
            options = argFoo;
            oscar = argBar;
            golf = null;
            zulu = oscar;
            if(!(golf == zulu)) { _fun58517_ip = 19; continue _fun58517 }
 17:
            zulu = {};
 19:
            tango = zulu.forceBatchScan;
            entity = undefined;
            report = entity !== tango;
            if(!report) { _fun58517_ip = 37; continue _fun58517 }
 34:
            report = tango;
 37:
            tango = zulu.jitter;
            zulu = entity !== tango;
            if(!zulu) { _fun58517_ip = 53; continue _fun58517 }
 50:
            zulu = tango;
 53:
            tango = options;
            if(!(golf != oscar)) { _fun58517_ip = 111; continue _fun58517 }
 60:
            oscar = oscar.isMessageUpdate;
            tango = options;
            if(!oscar) { _fun58517_ip = 111; continue _fun58517 }
 72:
            golf = options.filter;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 17;
            oscar = offset[oscar];
            oscar = verify.bind(entity)(oscar);
            oscar = oscar.hasUnscannedAttachmentsOrEmbedsForTimeout;
            tango = golf.bind(options)(oscar);
 111:
            var _closure2_slot0 = tango;
            golf = tango.forEach;
            oscar = function(argFoo) {
                _fun58518: for(var _fun58518_ip = 0; ; ) switch(_fun58518_ip) {
 0:
                    zulu = argFoo;
                    var _closure3_slot0 = zulu;
                    mike = _closure1_slot26;
                    entity = undefined;
                    tango = mike.bind(entity)(zulu);
                    mike = _closure1_slot22;
                    zulu = mike[tango];
                    mike = null;
                    if(!(mike == zulu)) { _fun58518_ip = 163; continue _fun58518 }
 40:
                    zulu = _closure1_slot1;
                    offset = _closure1_slot2;
                    mike = 20;
                    mike = offset[mike];
                    golf = zulu.bind(entity)(mike);
                    zulu = golf.increment;
                    mike = {};
                    verify = _closure1_slot0;
                    options = 21;
                    options = offset[options];
                    options = verify.bind(entity)(options);
                    options = options.MetricEvents;
                    options = options.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE;
                    mike['name'] = options;
                    mike = zulu.bind(golf)(mike);
                    zulu = _closure1_slot22;
                    mike = {};
                    golf = global;
                    verify = golf.Date;
                    options = verify.now;
                    options = options.bind(verify)();
                    mike['setAt'] = options;
                    golf = golf.setTimeout;
                    oscar = _closure1_slot20;
                    report = function() {
                        _fun58519: for(var _fun58519_ip = 0; ; ) switch(_fun58519_ip) {
 0:
                            report = _closure3_slot0;
                            oscar = _closure1_slot28;
                            golf = _closure1_slot0;
                            entity = _closure1_slot2;
                            zulu = 16;
                            tango = entity[zulu];
                            entity = undefined;
                            tango = golf.bind(entity)(tango);
                            tango = tango.TimeoutCancelSource;
                            tango = tango.TIMEOUT;
                            tango = oscar.bind(entity)(report, tango);
                            if(!tango) { _fun58519_ip = 233; continue _fun58519 }
 60:
                            options = _closure1_slot13;
                            golf = options.getMessage;
                            oscar = report.channel_id;
                            tango = report.id;
                            verify = golf.bind(options)(oscar, tango);
                            oscar = _closure1_slot0;
                            tango = _closure1_slot2;
                            golf = 17;
                            golf = tango[golf];
                            options = oscar.bind(entity)(golf);
                            golf = options.getUnscannedAttachmentsAndEmbedIdsForTimeout;
                            golf = golf.bind(options)(verify);
                            verify = golf.attachmentIds;
                            options = golf.embedIds;
                            zulu = tango[zulu];
                            golf = oscar.bind(entity)(zulu);
                            oscar = golf.trackScanningTimedOut;
                            zulu = {};
                            offset = report.channel_id;
                            zulu['channelId'] = offset;
                            offset = report.id;
                            zulu['messageId'] = offset;
                            zulu['attachmentIds'] = verify;
                            zulu['embedIds'] = options;
                            zulu = oscar.bind(golf)(zulu);
                            zulu = _closure1_slot1;
                            mike = 18;
                            mike = tango[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.dispatch;
                            mike = {};
                            oscar = 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT';
                            mike['type'] = oscar;
                            oscar = report.id;
                            mike['messageId'] = oscar;
                            report = report.channel_id;
                            mike['channelId'] = report;
                            mike = zulu.bind(tango)(mike);
 233:
                            return entity;
                        }
                    };
                    report = golf.bind(entity)(report, oscar);
                    mike['timeout'] = report;
                    zulu[tango] = mike;
 163:
                    return entity;
                }
            };
            oscar = golf.bind(tango)(oscar);
            if(report) { _fun58517_ip = 188; continue _fun58517 }
 133:
            oscar = global;
            options = oscar.Set;
            golf = tango.map;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.channel_id;
                return entity;
            };
            romeo = golf.bind(tango)(oscar);
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            foxtrot = golf;
            oscar = new foxtrot[options](romeo, yankee);
            oscar = oscar instanceof Object ? oscar : golf;
            golf = oscar.size;
            oscar = 1;
            report = golf > oscar;
 188:
            var _closure2_slot1 = report;
            if(zulu) { _fun58517_ip = 210; continue _fun58517 }
 195:
            zulu = _closure1_slot23;
            zulu = zulu.bind(entity)(tango, report);
            _fun58517_ip = 256; continue _fun58517;
 210:
            zulu = global;
            tango = zulu.setTimeout;
            report = zulu.Math;
            zulu = report.random;
            report = zulu.bind(report)();
            zulu = _closure1_slot21;
            zulu = report * zulu;
            mike = function() {
                tango = _closure2_slot0;
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = _closure1_slot22;
                    tango = _closure1_slot26;
                    zulu = undefined;
                    entity = argFoo;
                    entity = tango.bind(zulu)(entity);
                    mike = mike[entity];
                    entity = null;
                    entity = entity != mike;
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = _closure1_slot23;
                mike = _closure2_slot1;
                entity = undefined;
                mike = zulu.bind(entity)(tango, mike);
                return entity;
            };
            mike = tango.bind(entity)(mike, zulu);
 256:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: aggregateCountsOnChannelId
        tango = argFoo;
        mike = _closure1_slot17;
        mike = mike.validContentScanVersion;
        var _closure2_slot0 = mike;
        zulu = tango.reduce;
        mike = function(argFoo, argBar) {
            _fun58524: for(var _fun58524_ip = 0; ; ) switch(_fun58524_ip) {
 0:
                tango = argFoo;
                mike = argBar;
                entity = mike.channel_id;
                entity = tango[entity];
                golf = null;
                if(!(golf == entity)) { _fun58524_ip = 42; continue _fun58524 }
 23:
                zulu = mike.channel_id;
                entity = {'numOfAttachments': 0, 'numOfAttachmentsPendingScan': 0, 'numOfEmbeds': 0, 'numOfEmbedsPendingScan': 0};
                tango[zulu] = entity;
 42:
                entity = mike.channel_id;
                zulu = tango[entity];
                oscar = zulu.numOfAttachments;
                entity = mike.attachments;
                report = golf == entity;
                verify = undefined;
                if(report) { _fun58524_ip = 77; continue _fun58524 }
 72:
                verify = entity.length;
 77:
                offset = golf != verify;
                entity = 0;
                if(!offset) { _fun58524_ip = 89; continue _fun58524 }
 86:
                entity = verify;
 89:
                entity = oscar + entity;
                zulu['numOfAttachments'] = entity;
                oscar = zulu.numOfEmbeds;
                entity = mike.embeds;
                offset = golf == entity;
                verify = undefined;
                if(offset) { _fun58524_ip = 125; continue _fun58524 }
 120:
                verify = entity.length;
 125:
                offset = golf != verify;
                entity = 0;
                if(!offset) { _fun58524_ip = 137; continue _fun58524 }
 134:
                entity = verify;
 137:
                entity = oscar + entity;
                zulu['numOfEmbeds'] = entity;
                oscar = zulu.numOfAttachmentsPendingScan;
                romeo = mike.attachments;
                entity = golf == romeo;
                verify = undefined;
                if(entity) { _fun58524_ip = 188; continue _fun58524 }
 168:
                offset = romeo.filter;
                entity = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 17;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.shouldScanAttachment;
                    mike = _closure2_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = offset.bind(romeo)(entity);
                verify = entity.length;
 188:
                offset = golf != verify;
                entity = 0;
                if(!offset) { _fun58524_ip = 200; continue _fun58524 }
 197:
                entity = verify;
 200:
                entity = oscar + entity;
                zulu['numOfAttachmentsPendingScan'] = entity;
                entity = zulu.numOfEmbedsPendingScan;
                verify = golf == mike;
                oscar = undefined;
                if(verify) { _fun58524_ip = 260; continue _fun58524 }
 225:
                offset = mike.embeds;
                verify = golf == offset;
                oscar = undefined;
                if(verify) { _fun58524_ip = 260; continue _fun58524 }
 240:
                verify = offset.filter;
                options = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 17;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.shouldScanEmbed;
                    mike = _closure2_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                options = verify.bind(offset)(options);
                oscar = options.length;
 260:
                golf = golf != oscar;
                report = 0;
                if(!golf) { _fun58524_ip = 272; continue _fun58524 }
 269:
                report = oscar;
 272:
                entity = entity + report;
                zulu['numOfEmbedsPendingScan'] = entity;
                entity = {};
                backup = entity;
                foxtrot = tango;
                tango = copyDataProperties(backup, foxtrot);
                mike = mike.channel_id;
                entity[mike] = zulu;
                return entity;
            }
        };
        entity = {};
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: processMessagesFromAction
        _fun58527: for(var _fun58527_ip = 0; ; ) switch(_fun58527_ip) {
 0:
            zulu = function(argFoo) { // Original name: getScanningAttributesForMessages
                _fun58528: for(var _fun58528_ip = 0; ; ) switch(_fun58528_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        _fun58529: for(var _fun58529_ip = 0; ; ) switch(_fun58529_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 17;
                            entity = report[entity];
                            report = undefined;
                            zulu = zulu.bind(report)(entity);
                            entity = zulu.hasAttachmentsEmbedsOrSnapshots;
                            entity = entity.bind(zulu)(tango);
                            if(!entity) { _fun58529_ip = 73; continue _fun58529 }
 42:
                            zulu = _closure1_slot0;
                            oscar = _closure1_slot2;
                            mike = 16;
                            mike = oscar[mike];
                            zulu = zulu.bind(report)(mike);
                            mike = zulu.shouldRedactExplicitContent;
                            entity = mike.bind(zulu)(tango);
 73:
                            return entity;
                        }
                    };
                    tango = mike.bind(zulu)(entity);
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun58530: for(var _fun58530_ip = 0; ; ) switch(_fun58530_ip) {
 0:
                            entity = argFoo;
                            zulu = null;
                            if(!(zulu != entity)) { _fun58530_ip = 115; continue _fun58530 }
 9:
                            mike = 'referenced_message';
                            mike = mike in entity;
                            if(!mike) { _fun58530_ip = 115; continue _fun58530 }
 20:
                            mike = entity.referenced_message;
                            if(!(zulu != mike)) { _fun58530_ip = 115; continue _fun58530 }
 30:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 17;
                            zulu = tango[zulu];
                            tango = undefined;
                            oscar = report.bind(tango)(zulu);
                            report = oscar.hasAttachmentsEmbedsOrSnapshots;
                            zulu = entity.referenced_message;
                            zulu = report.bind(oscar)(zulu);
                            if(!zulu) { _fun58530_ip = 115; continue _fun58530 }
 75:
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 16;
                            mike = report[mike];
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.shouldRedactExplicitContent;
                            mike = entity.referenced_message;
                            mike = zulu.bind(tango)(mike);
                            if(mike) { _fun58530_ip = 119; continue _fun58530 }
 115:
                            mike = undefined;
                            return mike;
 119:
                            entity = entity.referenced_message;
                            return entity;
                        }
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        mike = null;
                        entity = argFoo;
                        entity = mike != entity;
                        return entity;
                    };
                    zulu = mike.bind(zulu)(entity);
                    entity = zulu.length;
                    mike = 0;
                    oscar = tango;
                    if(!(entity > mike)) { _fun58528_ip = 93; continue _fun58528 }
 64:
                    entity = new Array(0);
                    verify = entity;
                    options = tango;
                    golf = 0;
                    golf = arraySpread(verify, options, golf);
                    verify = entity;
                    options = zulu;
                    mike = arraySpread(verify, options, golf);
                    oscar = entity;
 93:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 22;
                    entity = tango[entity];
                    tango = undefined;
                    zulu = zulu.bind(tango)(entity);
                    entity = function(argFoo, argBar) {
                        _fun58532: for(var _fun58532_ip = 0; ; ) switch(_fun58532_ip) {
 0:
                            zulu = argFoo;
                            mike = argBar;
                            tango = zulu.id;
                            entity = mike.id;
                            entity = tango === entity;
                            if(!entity) { _fun58532_ip = 37; continue _fun58532 }
 23:
                            zulu = zulu.channel_id;
                            mike = mike.channel_id;
                            entity = zulu === mike;
 37:
                            return entity;
                        }
                    };
                    zulu = zulu.bind(tango)(oscar, entity);
                    entity = {};
                    oscar = zulu.filter;
                    report = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hasAttachmentsOrEmbedsRequiringScan;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(zulu)(report);
                    entity['messagesPendingScan'] = report;
                    mike = _closure1_slot30;
                    mike = mike.bind(tango)(zulu);
                    entity['attributesByChannelId'] = mike;
                    return entity;
                }
            };
            report = undefined;
            mike = argFoo;
            mike = zulu.bind(report)(mike);
            tango = mike.messagesPendingScan;
            golf = mike.attributesByChannelId;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 23;
            zulu = options[zulu];
            oscar = oscar.bind(report)(zulu);
            zulu = oscar.entries;
            oscar = zulu.bind(oscar)(golf);
            zulu = oscar.forEach;
            entity = function(argFoo) {
                _fun58534: for(var _fun58534_ip = 0; ; ) switch(_fun58534_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    report = tango().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    oscar = undefined;
                    if(zulu) { _fun58534_ip = 27; continue _fun58534 }
 24:
                    oscar = report;
 27:
                    report = undefined;
                    if(zulu) { _fun58534_ip = 57; continue _fun58534 }
 32:
                    golf = tango().value;
                    tango = mike;
                    tango = tango === entity;
                    report = undefined;
                    zulu = tango;
                    if(tango) { _fun58534_ip = 57; continue _fun58534 }
 51:
                    report = golf;
                    zulu = tango;
 57:
                    if(zulu) { _fun58534_ip = 63; continue _fun58534 }
 60:
                    mike.return();
 63:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.trackExplicitMediaRedactableMessagedLoaded;
                    mike = {};
                    mike['channelId'] = oscar;
                    oscar = report.numOfAttachments;
                    mike['numOfAttachments'] = oscar;
                    oscar = report.numOfAttachmentsPendingScan;
                    mike['numOfAttachmentsPendingScan'] = oscar;
                    oscar = report.numOfEmbeds;
                    mike['numOfEmbeds'] = oscar;
                    report = report.numOfEmbedsPendingScan;
                    mike['numOfEmbedsPendingScan'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = zulu.bind(oscar)(entity);
            zulu = tango.length;
            entity = 0;
            entity = zulu > entity;
            if(!entity) { _fun58527_ip = 107; continue _fun58527 }
 92:
            zulu = _closure1_slot29;
            mike = argBar;
            mike = zulu.bind(report)(tango, mike);
            entity = true;
 107:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: processChannelMessagesFromAction
        _fun58535: for(var _fun58535_ip = 0; ; ) switch(_fun58535_ip) {
 0:
            zulu = function(argFoo) { // Original name: getScanningAttributesForChannelMessages
                _fun58536: for(var _fun58536_ip = 0; ; ) switch(_fun58536_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        _fun58537: for(var _fun58537_ip = 0; ; ) switch(_fun58537_ip) {
 0:
                            tango = argFoo;
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 17;
                            entity = report[entity];
                            report = undefined;
                            zulu = zulu.bind(report)(entity);
                            entity = zulu.hasAttachmentsEmbedsOrSnapshots;
                            entity = entity.bind(zulu)(tango);
                            if(!entity) { _fun58537_ip = 73; continue _fun58537 }
 42:
                            zulu = _closure1_slot0;
                            oscar = _closure1_slot2;
                            mike = 16;
                            mike = oscar[mike];
                            zulu = zulu.bind(report)(mike);
                            mike = zulu.shouldRedactExplicitContent;
                            entity = mike.bind(zulu)(tango);
 73:
                            return entity;
                        }
                    };
                    tango = mike.bind(zulu)(entity);
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun58538: for(var _fun58538_ip = 0; ; ) switch(_fun58538_ip) {
 0:
                            entity = argFoo;
                            report = _closure1_slot18;
                            tango = report.has;
                            zulu = entity.type;
                            zulu = tango.bind(report)(zulu);
                            if(!zulu) { _fun58538_ip = 175; continue _fun58538 }
 31:
                            zulu = entity.messageReference;
                            tango = null;
                            if(!(tango != zulu)) { _fun58538_ip = 175; continue _fun58538 }
 46:
                            report = _closure1_slot8;
                            zulu = report.getMessageByReference;
                            entity = entity.messageReference;
                            entity = zulu.bind(report)(entity);
                            report = entity.state;
                            zulu = _closure1_slot9;
                            zulu = zulu.LOADED;
                            if(!(report === zulu)) { _fun58538_ip = 175; continue _fun58538 }
 86:
                            zulu = entity.message;
                            if(!(tango != zulu)) { _fun58538_ip = 175; continue _fun58538 }
 95:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 17;
                            zulu = tango[zulu];
                            tango = undefined;
                            oscar = report.bind(tango)(zulu);
                            report = oscar.hasAttachmentsEmbedsOrSnapshots;
                            zulu = entity.message;
                            zulu = report.bind(oscar)(zulu);
                            if(!zulu) { _fun58538_ip = 175; continue _fun58538 }
 136:
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 16;
                            mike = report[mike];
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.shouldRedactExplicitContent;
                            mike = entity.message;
                            mike = zulu.bind(tango)(mike);
                            if(mike) { _fun58538_ip = 179; continue _fun58538 }
 175:
                            mike = undefined;
                            return mike;
 179:
                            entity = entity.message;
                            return entity;
                        }
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        mike = null;
                        entity = argFoo;
                        entity = mike != entity;
                        return entity;
                    };
                    zulu = mike.bind(zulu)(entity);
                    entity = zulu.length;
                    mike = 0;
                    oscar = tango;
                    if(!(entity > mike)) { _fun58536_ip = 93; continue _fun58536 }
 64:
                    entity = new Array(0);
                    verify = entity;
                    options = tango;
                    golf = 0;
                    golf = arraySpread(verify, options, golf);
                    verify = entity;
                    options = zulu;
                    mike = arraySpread(verify, options, golf);
                    oscar = entity;
 93:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    entity = 22;
                    entity = tango[entity];
                    tango = undefined;
                    zulu = zulu.bind(tango)(entity);
                    entity = function(argFoo, argBar) {
                        _fun58540: for(var _fun58540_ip = 0; ; ) switch(_fun58540_ip) {
 0:
                            zulu = argFoo;
                            mike = argBar;
                            tango = zulu.id;
                            entity = mike.id;
                            entity = tango === entity;
                            if(!entity) { _fun58540_ip = 37; continue _fun58540 }
 23:
                            zulu = zulu.channel_id;
                            mike = mike.channel_id;
                            entity = zulu === mike;
 37:
                            return entity;
                        }
                    };
                    zulu = zulu.bind(tango)(oscar, entity);
                    entity = {};
                    oscar = zulu.filter;
                    report = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hasAttachmentsOrEmbedsRequiringScan;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = oscar.bind(zulu)(report);
                    entity['messagesPendingScan'] = report;
                    mike = _closure1_slot30;
                    mike = mike.bind(tango)(zulu);
                    entity['attributesByChannelId'] = mike;
                    return entity;
                }
            };
            tango = undefined;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            zulu = mike.messagesPendingScan;
            golf = mike.attributesByChannelId;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 23;
            report = options[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.entries;
            oscar = report.bind(oscar)(golf);
            report = oscar.forEach;
            entity = function(argFoo) {
                _fun58542: for(var _fun58542_ip = 0; ; ) switch(_fun58542_ip) {
 0:
                    tango = argFoo;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    report = tango().value;
                    zulu = mike;
                    entity = undefined;
                    zulu = zulu === entity;
                    oscar = undefined;
                    if(zulu) { _fun58542_ip = 27; continue _fun58542 }
 24:
                    oscar = report;
 27:
                    report = undefined;
                    if(zulu) { _fun58542_ip = 57; continue _fun58542 }
 32:
                    golf = tango().value;
                    tango = mike;
                    tango = tango === entity;
                    report = undefined;
                    zulu = tango;
                    if(tango) { _fun58542_ip = 57; continue _fun58542 }
 51:
                    report = golf;
                    zulu = tango;
 57:
                    if(zulu) { _fun58542_ip = 63; continue _fun58542 }
 60:
                    mike.return();
 63:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 16;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.trackExplicitMediaRedactableMessagedLoaded;
                    mike = {};
                    mike['channelId'] = oscar;
                    oscar = report.numOfAttachments;
                    mike['numOfAttachments'] = oscar;
                    oscar = report.numOfAttachmentsPendingScan;
                    mike['numOfAttachmentsPendingScan'] = oscar;
                    oscar = report.numOfEmbeds;
                    mike['numOfEmbeds'] = oscar;
                    report = report.numOfEmbedsPendingScan;
                    mike['numOfEmbedsPendingScan'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = report.bind(oscar)(entity);
            report = zulu.length;
            entity = 0;
            entity = report > entity;
            if(!entity) { _fun58535_ip = 103; continue _fun58535 }
 92:
            mike = _closure1_slot29;
            mike = mike.bind(tango)(zulu);
            entity = true;
 103:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleMessageUpdate
        _fun58543: for(var _fun58543_ip = 0; ; ) switch(_fun58543_ip) {
 0:
            entity = argFoo;
            mike = entity.message;
            zulu = mike.channel_id;
            entity = null;
            if(!(entity != zulu)) { _fun58543_ip = 521; continue _fun58543 }
 22:
            zulu = mike.id;
            if(!(entity != zulu)) { _fun58543_ip = 521; continue _fun58543 }
 34:
            zulu = mike.author;
            tango = entity == zulu;
            report = undefined;
            oscar = undefined;
            if(tango) { _fun58543_ip = 56; continue _fun58543 }
 51:
            oscar = zulu.id;
 56:
            golf = _closure1_slot10;
            tango = golf.getId;
            tango = tango.bind(golf)();
            if(!(oscar !== tango)) { _fun58543_ip = 521; continue _fun58543 }
 80:
            tango = mike.embeds;
            if(!(entity == tango)) { _fun58543_ip = 103; continue _fun58543 }
 90:
            tango = mike.attachments;
            if(!(entity != tango)) { _fun58543_ip = 517; continue _fun58543 }
 103:
            oscar = mike.embeds;
            golf = entity == oscar;
            tango = undefined;
            if(golf) { _fun58543_ip = 123; continue _fun58543 }
 118:
            tango = oscar.length;
 123:
            oscar = 0;
            if(!(oscar === tango)) { _fun58543_ip = 156; continue _fun58543 }
 129:
            golf = mike.attachments;
            options = entity == golf;
            tango = undefined;
            if(options) { _fun58543_ip = 149; continue _fun58543 }
 144:
            tango = golf.length;
 149:
            if(!(oscar !== tango)) { _fun58543_ip = 513; continue _fun58543 }
 156:
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = 17;
            tango = tango[oscar];
            golf = golf.bind(report)(tango);
            tango = golf.hasUnscannedAttachmentsOrEmbedsForTimeout;
            tango = tango.bind(golf)(mike);
            if(tango) { _fun58543_ip = 400; continue _fun58543 }
 193:
            verify = _closure1_slot13;
            options = verify.getMessage;
            golf = mike.channel_id;
            tango = mike.id;
            golf = options.bind(verify)(golf, tango);
            if(!(entity == golf)) { _fun58543_ip = 249; continue _fun58543 }
 223:
            offset = _closure1_slot16;
            verify = offset.getMessage;
            options = mike.id;
            tango = mike.channel_id;
            golf = verify.bind(offset)(options, tango);
 249:
            if(!(entity == golf)) { _fun58543_ip = 296; continue _fun58543 }
 253:
            offset = _closure1_slot8;
            verify = offset.getMessage;
            options = mike.channel_id;
            tango = mike.id;
            options = verify.bind(offset)(options, tango);
            verify = entity == options;
            tango = undefined;
            if(verify) { _fun58543_ip = 293; continue _fun58543 }
 288:
            tango = options.message;
 293:
            golf = tango;
 296:
            tango = entity == golf;
            if(tango) { _fun58543_ip = 355; continue _fun58543 }
 303:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = yankee[oscar];
            verify = offset.bind(report)(oscar);
            options = verify.hasUnscannedAttachmentsOrEmbedsForTimeout;
            oscar = 24;
            oscar = yankee[oscar];
            offset = offset.bind(report)(oscar);
            oscar = offset.updateMessageRecord;
            oscar = oscar.bind(offset)(golf, mike);
            tango = options.bind(verify)(oscar);
 355:
            if(tango) { _fun58543_ip = 400; continue _fun58543 }
 358:
            oscar = _closure1_slot28;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 16;
            tango = verify[tango];
            tango = options.bind(report)(tango);
            tango = tango.TimeoutCancelSource;
            tango = tango.UPDATE;
            tango = oscar.bind(report)(golf, tango);
 400:
            oscar = _closure1_slot14;
            tango = oscar.getChannelId;
            golf = tango.bind(oscar)();
            oscar = _closure1_slot11;
            tango = oscar.getCurrentSidebarChannelId;
            oscar = tango.bind(oscar)(golf);
            tango = mike.channel_id;
            if(!(tango !== golf)) { _fun58543_ip = 451; continue _fun58543 }
 438:
            tango = mike.channel_id;
            if(!(tango !== oscar)) { _fun58543_ip = 451; continue _fun58543 }
 447:
            tango = false;
            return tango;
 451:
            golf = _closure1_slot13;
            oscar = golf.getMessage;
            tango = mike.channel_id;
            mike = mike.id;
            mike = oscar.bind(golf)(tango, mike);
            entity = entity != mike;
            if(!entity) { _fun58543_ip = 511; continue _fun58543 }
 484:
            tango = _closure1_slot31;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = {};
            oscar = true;
            mike['isMessageUpdate'] = oscar;
            entity = tango.bind(report)(zulu, mike);
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
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleMessageCreate
        _fun58544: for(var _fun58544_ip = 0; ; ) switch(_fun58544_ip) {
 0:
            mike = argFoo;
            oscar = mike.channelId;
            entity = mike.message;
            zulu = mike.optimistic;
            mike = mike.isPushNotification;
            if(zulu) { _fun58544_ip = 253; continue _fun58544 }
 31:
            if(mike) { _fun58544_ip = 253; continue _fun58544 }
 37:
            golf = null;
            if(!(golf != oscar)) { _fun58544_ip = 253; continue _fun58544 }
 46:
            mike = entity.author;
            zulu = golf == mike;
            tango = undefined;
            report = undefined;
            if(zulu) { _fun58544_ip = 68; continue _fun58544 }
 63:
            report = mike.id;
 68:
            options = _closure1_slot10;
            zulu = options.getId;
            zulu = zulu.bind(options)();
            if(!(report !== zulu)) { _fun58544_ip = 253; continue _fun58544 }
 92:
            report = _closure1_slot14;
            zulu = report.getChannelId;
            options = zulu.bind(report)();
            report = _closure1_slot11;
            zulu = report.getCurrentSidebarChannelId;
            report = zulu.bind(report)(options);
            verify = _closure1_slot12;
            zulu = verify.getChannel;
            zulu = zulu.bind(verify)(oscar);
            if(!(oscar !== options)) { _fun58544_ip = 143; continue _fun58544 }
 139:
            if(!(oscar === report)) { _fun58544_ip = 249; continue _fun58544 }
 143:
            report = golf == zulu;
            oscar = undefined;
            if(report) { _fun58544_ip = 162; continue _fun58544 }
 152:
            report = zulu.isPrivate;
            oscar = report.bind(zulu)();
 162:
            report = golf == oscar;
            if(report) { _fun58544_ip = 172; continue _fun58544 }
 169:
            report = oscar;
 172:
            options = golf == zulu;
            oscar = undefined;
            if(options) { _fun58544_ip = 187; continue _fun58544 }
 181:
            oscar = zulu.memberCount;
 187:
            oscar = golf == oscar;
            if(oscar) { _fun58544_ip = 216; continue _fun58544 }
 194:
            options = golf == zulu;
            golf = undefined;
            if(options) { _fun58544_ip = 209; continue _fun58544 }
 203:
            golf = zulu.memberCount;
 209:
            zulu = 100;
            oscar = golf > zulu;
 216:
            zulu = _closure1_slot31;
            mike = new Array(1);
            mike[0] = entity;
            entity = {};
            if(!report) { _fun58544_ip = 236; continue _fun58544 }
 233:
            report = oscar;
 236:
            entity['jitter'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 249:
            entity = false;
            return entity;
 253:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleMessagesLoad
        _fun58545: for(var _fun58545_ip = 0; ; ) switch(_fun58545_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            tango = entity.messages;
            entity = null;
            if(!(entity != report)) { _fun58545_ip = 83; continue _fun58545 }
 20:
            if(!(entity != tango)) { _fun58545_ip = 83; continue _fun58545 }
 24:
            zulu = _closure1_slot14;
            entity = zulu.getChannelId;
            entity = entity.bind(zulu)();
            oscar = _closure1_slot11;
            zulu = oscar.getCurrentSidebarChannelId;
            zulu = zulu.bind(oscar)(entity);
            entity = report === entity;
            if(entity) { _fun58545_ip = 67; continue _fun58545 }
 63:
            entity = report === zulu;
 67:
            if(!entity) { _fun58545_ip = 81; continue _fun58545 }
 70:
            zulu = _closure1_slot31;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 81:
            return entity;
 83:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleSearchFinishOrPinsLoad
        _fun58546: for(var _fun58546_ip = 0; ; ) switch(_fun58546_ip) {
 0:
            entity = argFoo;
            report = entity.messages;
            entity = null;
            if(!(entity != report)) { _fun58546_ip = 81; continue _fun58546 }
 15:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 25;
            mike = oscar[mike];
            zulu = undefined;
            mike = tango.bind(zulu)(mike);
            report = mike.bind(zulu)(report);
            mike = _closure1_slot31;
            entity = 22;
            entity = oscar[entity];
            tango = tango.bind(zulu)(entity);
            entity = function(argFoo, argBar) {
                _fun58547: for(var _fun58547_ip = 0; ; ) switch(_fun58547_ip) {
 0:
                    zulu = argFoo;
                    mike = argBar;
                    tango = zulu.id;
                    entity = mike.id;
                    entity = tango === entity;
                    if(!entity) { _fun58547_ip = 37; continue _fun58547 }
 23:
                    zulu = zulu.channel_id;
                    mike = mike.channel_id;
                    entity = zulu === mike;
 37:
                    return entity;
                }
            };
            entity = tango.bind(zulu)(report, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
 81:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleForumPostsLoad
        _fun58548: for(var _fun58548_ip = 0; ; ) switch(_fun58548_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            options = entity.threads;
            var _closure2_slot0 = options;
            entity = null;
            entity = entity != options;
            if(!entity) { _fun58548_ip = 112; continue _fun58548 }
 29:
            oscar = _closure1_slot15;
            mike = oscar.getGuildId;
            mike = mike.bind(oscar)();
            mike = mike === report;
            if(!mike) { _fun58548_ip = 109; continue _fun58548 }
 53:
            report = _closure1_slot31;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 23;
            oscar = oscar[tango];
            tango = undefined;
            golf = golf.bind(tango)(oscar);
            oscar = golf.keys;
            golf = oscar.bind(golf)(options);
            oscar = golf.map;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = mike[entity];
                entity = entity.first_message;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            mike = report.bind(tango)(zulu);
 109:
            entity = mike;
 112:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleThreadsLoad
        _fun58550: for(var _fun58550_ip = 0; ; ) switch(_fun58550_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.firstMessages;
            entity = null;
            entity = entity != oscar;
            if(!entity) { _fun58550_ip = 74; continue _fun58550 }
 23:
            report = _closure1_slot15;
            mike = report.getGuildId;
            mike = mike.bind(report)();
            tango = mike !== tango;
            mike = !tango;
            if(tango) { _fun58550_ip = 71; continue _fun58550 }
 50:
            report = _closure1_slot31;
            tango = {};
            zulu = true;
            tango['forceBatchScan'] = zulu;
            zulu = undefined;
            mike = report.bind(zulu)(oscar, tango);
 71:
            entity = mike;
 74:
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun58551: for(var _fun58551_ip = 0; ; ) switch(_fun58551_ip) {
 0:
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 26;
            entity = tango[entity];
            report = undefined;
            mike = mike.bind(report)(entity);
            entity = mike.isEligibleForSafetyXPHoldoutExperiment;
            entity = entity.bind(mike)();
            entity = argFoo;
            tango = entity.channelId;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun58551_ip = 88; continue _fun58551 }
 52:
            oscar = _closure1_slot14;
            mike = oscar.getChannelId;
            mike = mike.bind(oscar)();
            oscar = tango !== mike;
            mike = !oscar;
            if(oscar) { _fun58551_ip = 85; continue _fun58551 }
 76:
            zulu = _closure1_slot42;
            mike = zulu.bind(report)(tango);
 85:
            entity = mike;
 88:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsUpdate
        _fun58552: for(var _fun58552_ip = 0; ; ) switch(_fun58552_ip) {
 0:
            mike = argFoo;
            entity = mike.settings;
            mike = mike.local;
            if(!mike) { _fun58552_ip = 76; continue _fun58552 }
 18:
            zulu = entity.type;
            entity = _closure1_slot19;
            entity = entity.PRELOADED_USER_SETTINGS;
            if(!(zulu === entity)) { _fun58552_ip = 76; continue _fun58552 }
 40:
            zulu = _closure1_slot14;
            entity = zulu.getChannelId;
            tango = entity.bind(zulu)();
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun58552_ip = 74; continue _fun58552 }
 63:
            zulu = _closure1_slot42;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 74:
            return entity;
 76:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleVoiceChannelChatOpen
        _fun58553: for(var _fun58553_ip = 0; ; ) switch(_fun58553_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            entity = entity.chatOpen;
            mike = !entity;
            entity = !mike;
            if(mike) { _fun58553_ip = 37; continue _fun58553 }
 23:
            zulu = _closure1_slot42;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 37:
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: maybeScanMessagesForChannelId
        _fun58554: for(var _fun58554_ip = 0; ; ) switch(_fun58554_ip) {
 0:
            tango = _closure1_slot13;
            zulu = tango.getMessages;
            entity = argFoo;
            tango = zulu.bind(tango)(entity);
            zulu = tango.length;
            entity = 0;
            entity = entity !== zulu;
            if(!entity) { _fun58554_ip = 46; continue _fun58554 }
 35:
            zulu = _closure1_slot32;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 46:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = global;
    oscar = entity.Object;
    tango = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(oscar)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    tango = options[mike];
    tango = verify.bind(entity)(tango);
    var _closure1_slot8 = tango;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.ReferencedMessageState;
    var _closure1_slot9 = mike;
    mike = 6;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot10 = mike;
    mike = 7;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot11 = mike;
    mike = 8;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot12 = mike;
    mike = 9;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot13 = mike;
    mike = 10;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot14 = mike;
    mike = 11;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot15 = mike;
    mike = 12;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot16 = mike;
    mike = 13;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot17 = mike;
    mike = 14;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot18 = mike;
    mike = 15;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.UserSettingsTypes;
    var _closure1_slot19 = mike;
    tango = 3000;
    var _closure1_slot20 = tango;
    mike = 800;
    var _closure1_slot21 = mike;
    oscar = {};
    var _closure1_slot22 = oscar;
    oscar = function(argFoo, argBar) { // Original name: sendForScanning
        _fun58555: for(var _fun58555_ip = 0; ; ) switch(_fun58555_ip) {
 0:
            zulu = argFoo;
            mike = zulu.length;
            entity = 0;
            if(!(entity !== mike)) { _fun58555_ip = 96; continue _fun58555 }
 14:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 19;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            tango = argBar;
            if(tango) { _fun58555_ip = 85; continue _fun58555 }
 45:
            report = mike.sendMessagesForScanning;
            entity = zulu[entity];
            tango = entity.channel_id;
            oscar = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            entity = oscar.bind(zulu)(entity);
            entity = report.bind(mike)(tango, entity);
            _fun58555_ip = 96; continue _fun58555;
 85:
            entity = mike.sendMultiChannelMessagesForScanning;
            entity = entity.bind(mike)(zulu);
 96:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = oscar;
    oscar = 27;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    report = function(argFoo) {
        zulu = function(argFoo) { // Original name: ExplicitMediaManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot24;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot35;
            mike['LOAD_MESSAGES_SUCCESS'] = tango;
            tango = _closure1_slot37;
            mike['LOAD_FORUM_POSTS'] = tango;
            tango = _closure1_slot38;
            mike['LOAD_THREADS_SUCCESS'] = tango;
            mike['LOAD_ARCHIVED_THREADS_SUCCESS'] = tango;
            tango = _closure1_slot34;
            mike['MESSAGE_CREATE'] = tango;
            tango = _closure1_slot33;
            mike['MESSAGE_UPDATE'] = tango;
            tango = _closure1_slot27;
            mike['LOGOUT'] = tango;
            tango = _closure1_slot36;
            mike['SEARCH_FINISH'] = tango;
            mike['MOD_VIEW_SEARCH_FINISH'] = tango;
            report = _closure1_slot39;
            mike['CHANNEL_SELECT'] = report;
            mike['LOAD_PINNED_MESSAGES_SUCCESS'] = tango;
            tango = _closure1_slot40;
            mike['USER_SETTINGS_PROTO_UPDATE'] = tango;
            zulu = _closure1_slot41;
            mike['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    report = report.bind(entity)(oscar);
    oscar = report.prototype;
    oscar = Object.create(oscar, {constructor: {value: report}});
    foxtrot = oscar;
    report = new foxtrot[report](romeo);
    report = report instanceof Object ? report : oscar;
    oscar = 28;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/explicit_media_redaction/ExplicitMediaManager.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['MESSAGE_SCAN_TIMEOUT'] = tango;
    zulu['MAX_TIMEOUT_FOR_JITTER'] = mike;
    return entity;
})();