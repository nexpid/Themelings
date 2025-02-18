// app/modules/media_channel/MediaPostEmbedManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: resolveMediaPostEmbeds
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golfie = entity.embeds;
            zuuluu = null;
            report = zuuluu == golfie;
            entity = undefined;
            tangon = undefined;
            if(report) { _fun00006_ip = 45; continue _fun00005 }
 28:
            oscard = golfie.filter;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 10;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.MessageEmbedTypes;
                entity = entity.POST_PREVIEW;
                entity = michal === entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(report);
 45:
            zuuluu = zuuluu != tangon;
            if(!zuuluu) { _fun00006_ip = 63; continue _fun00005 }
 52:
            oscard = tangon.length;
            report = 0;
            zuuluu = report !== oscard;
 63:
            if(!zuuluu) { _fun00006_ip = 83; continue _fun00005 }
 66:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = entity.url;
                    oscard = null;
                    if(!(oscard != michal)) { _fun00008_ip = 431; continue _fun00007 }
 17:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    report = report.bind(tangon)(zuuluu);
                    zuuluu = report.isEligibleForGuildMediaChannelPostPreviewEmbed;
                    zuuluu = zuuluu.bind(report)();
                    if(!zuuluu) { _fun00008_ip = 431; continue _fun00007 }
 58:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = golfie[zuuluu];
                    report = report.bind(tangon)(zuuluu);
                    zuuluu = report.getMediaPostEmbedChannelPath;
                    entity = entity.url;
                    entity = zuuluu.bind(report)(entity);
                    if(!(oscard != entity)) { _fun00008_ip = 431; continue _fun00007 }
 101:
                    report = oscard == entity;
                    zuuluu = undefined;
                    if(report) { _fun00008_ip = 116; continue _fun00007 }
 110:
                    zuuluu = entity.threadId;
 116:
                    if(!(oscard != zuuluu)) { _fun00008_ip = 431; continue _fun00007 }
 123:
                    report = oscard == entity;
                    zuuluu = undefined;
                    if(report) { _fun00008_ip = 137; continue _fun00007 }
 132:
                    zuuluu = entity.channelId;
 137:
                    if(!(oscard != zuuluu)) { _fun00008_ip = 431; continue _fun00007 }
 144:
                    golfie = _closure1_slot11;
                    report = golfie.getEmbedFetchState;
                    zuuluu = entity.threadId;
                    report = report.bind(golfie)(zuuluu);
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.NOT_FETCHED;
                    if(!(report === zuuluu)) { _fun00008_ip = 431; continue _fun00007 }
 182:
                    golfie = _closure1_slot14;
                    report = golfie.has;
                    zuuluu = entity.threadId;
                    zuuluu = report.bind(golfie)(zuuluu);
                    if(zuuluu) { _fun00008_ip = 431; continue _fun00007 }
 208:
                    golfie = _closure1_slot14;
                    report = golfie.add;
                    zuuluu = entity.threadId;
                    zuuluu = report.bind(golfie)(zuuluu);
                    report = _closure1_slot9;
                    zuuluu = report.getId;
                    option = zuuluu.bind(report)();
                    golfie = _closure1_slot10;
                    report = golfie.isMember;
                    verify = oscard == entity;
                    zuuluu = undefined;
                    if(verify) { _fun00008_ip = 266; continue _fun00007 }
 261:
                    zuuluu = entity.guildId;
 266:
                    report = report.bind(golfie)(zuuluu, option);
                    verify = _closure1_slot8;
                    option = verify.isChannelGated;
                    golfie = entity.guildId;
                    zuuluu = entity.channelId;
                    option = option.bind(verify)(golfie, zuuluu);
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = verify[zuuluu];
                    verify = golfie.bind(tangon)(zuuluu);
                    golfie = verify.hasFlag;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.flags;
                    offset = oscard != zuuluu;
                    oscard = 0;
                    if(!offset) { _fun00008_ip = 348; continue _fun00007 }
 345:
                    oscard = zuuluu;
 348:
                    zuuluu = _closure1_slot13;
                    zuuluu = zuuluu.IS_CROSSPOST;
                    oscard = golfie.bind(verify)(oscard, zuuluu);
                    zuuluu = report;
                    if(!zuuluu) { _fun00008_ip = 376; continue _fun00007 }
 370:
                    golfie = false;
                    zuuluu = golfie === option;
 376:
                    if(zuuluu) { _fun00008_ip = 391; continue _fun00007 }
 379:
                    report = !report;
                    if(!report) { _fun00008_ip = 388; continue _fun00007 }
 385:
                    report = oscard;
 388:
                    zuuluu = report;
 391:
                    if(zuuluu) { _fun00008_ip = 431; continue _fun00007 }
 394:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 14;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.fetchMediaPostEmbed;
                    entity = entity.threadId;
                    entity = michal.bind(zuuluu)(entity);
 431:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 83:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    verify = oscard[option];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot11 = verify;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.FetchState;
    var _closure1_slot12 = option;
    option = 9;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.MessageFlags;
    var _closure1_slot13 = option;
    tangon = tangon.Set;
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    backup = option;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot14 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function() { // Original name: MediaPostEmbedManager
            tangon = this;
            entity = _closure1_slot3;
            zuuluu = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(tangon, zuuluu);
            entity = _closure1_slot15;
            entity = entity.bind(report)(tangon, zuuluu);
            zuuluu = {};
            tangon = entity.handleLoadThreadsSuccess;
            zuuluu['LOAD_THREADS_SUCCESS'] = tangon;
            tangon = entity.handleLoadThreadsSuccess;
            zuuluu['LOAD_ARCHIVED_THREADS_SUCCESS'] = tangon;
            tangon = entity.handleLoadForumPosts;
            zuuluu['LOAD_FORUM_POSTS'] = tangon;
            entity['actions'] = zuuluu;
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot17;
            michal = {};
            oscard = function() { // Original name: onBeforeBatch
                michal = _closure1_slot14;
                entity = michal.clear;
                entity = entity.bind(michal)();
                return entity;
            };
            michal['onBeforeBatch'] = oscard;
            michal = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'handleLoadThreadsSuccess';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.firstMessages;
                entity = null;
                if(!(entity != zuuluu)) { _fun00010_ip = 59; continue _fun00009 }
 15:
                tangon = _closure1_slot14;
                michal = tangon.clear;
                michal = michal.bind(tangon)();
                if(!(entity != zuuluu)) { _fun00010_ip = 55; continue _fun00009 }
 36:
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot17;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 55:
                entity = undefined;
                return entity;
 59:
                entity = false;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'handleLoadForumPosts';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            zuuluu = entity.threads;
            michal = _closure1_slot14;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = global;
            michal = entity.Object;
            entity = michal.values;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.first_message;
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00012_ip = 34; continue _fun00011 }
 18:
                    zuuluu = _closure1_slot17;
                    michal = undefined;
                    zuuluu = zuuluu.bind(michal)(tangon);
                    entity = undefined;
 34:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    backup = tangon;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/MediaPostEmbedManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();