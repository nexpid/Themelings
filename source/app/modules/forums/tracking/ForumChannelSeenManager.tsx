// app/modules/forums/tracking/ForumChannelSeenManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
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
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: getForumPostSeenManagerId
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.AnalyticsFeedTypes;
        report = entity.FORUM_CHANNEL;
        entity = global;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        zuuluu = '';
        michal = '_';
        entity = argFoo;
        entity = tangon.bind(zuuluu)(report, michal, entity);
        return entity;
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.AnalyticsFeedItemSeenManager;
    report = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ForumChannelSeenManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                option = this;
                zuuluu = entity.guildId;
                tangon = entity.channelId;
                offset = entity.windowId;
                verify = entity.isPaused;
                entity = _closure1_slot3;
                golfie = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(option, golfie);
                entity = {};
                entity['windowId'] = offset;
                entity['isPaused'] = verify;
                verify = _closure1_slot8;
                verify = verify.bind(report)(tangon);
                entity['id'] = verify;
                foxtra = new Array(1);
                foxtra[0] = entity;
                entity = _closure1_slot5;
                romeon = entity.bind(report)(golfie);
                golfie = _closure1_slot4;
                entity = _closure1_slot7;
                entity = entity.bind(report)();
                if(entity) { _fun00004_ip = 122; continue _fun00003 }
 109:
                entity = romeon.apply;
                entity = entity.bind(romeon)(option, foxtra);
                _fun00004_ip = 156; continue _fun00003;
 122:
                verify = global;
                yankee = verify.Reflect;
                offset = yankee.construct;
                verify = _closure1_slot5;
                verify = verify.bind(report)(option);
                verify = verify.constructor;
                entity = offset.bind(yankee)(romeon, foxtra, verify);
 156:
                entity = golfie.bind(report)(option, entity);
                var _closure3_slot0 = entity;
                oscard = function(argFoo) {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.trackedFeedItems;
                    report = tangon.channelId;
                    michal = {};
                    oscard = tangon.guildId;
                    michal['guildId'] = oscard;
                    michal['channelId'] = report;
                    tangon = tangon.sessionId;
                    michal['sessionId'] = tangon;
                    michal['trackedFeedItems'] = zuuluu;
                    tangon = null;
                    zuuluu = argFoo;
                    zuuluu = tangon != zuuluu;
                    michal['isForcedFlush'] = zuuluu;
                    var _closure4_slot0 = michal;
                    entity = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = _closure4_slot0;
                            option = entity.guildId;
                            golfie = entity.channelId;
                            oscard = entity.sessionId;
                            yankee = entity.trackedFeedItems;
                            offset = entity.isForcedFlush;
                            report = new Array(0);
                            tangon = new Array(0);
                            entity = global;
                            michal = entity.Object;
                            entity = michal.keys;
                            verify = entity.bind(michal)(yankee);
                            entity = verify.length;
                            michal = 0;
                            entity = michal < entity;
                            zuuluu = 0;
                            if(!entity) { _fun00006_ip = 134; continue _fun00005 }
 77:
                            foxtra = verify[zuuluu];
                            romeon = yankee[foxtra];
                            entity = romeon.computeSeenTimeDestructive;
                            romeon = entity.bind(romeon)(offset);
                            if(!(romeon > michal)) { _fun00006_ip = 122; continue _fun00005 }
 102:
                            entity = report.push;
                            entity = entity.bind(report)(foxtra);
                            entity = tangon.push;
                            entity = entity.bind(tangon)(romeon);
 122:
                            zuuluu = zuuluu + 1;
                            entity = verify.length;
                            if(zuuluu < entity) { _fun00006_ip = 77; continue _fun00005 }
 134:
                            entity = report.length;
                            if(!(michal !== entity)) { _fun00006_ip = 204; continue _fun00005 }
 143:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            entity = 7;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.trackForumChannelSeenBatch;
                            entity = {};
                            entity['guildId'] = option;
                            entity['channelId'] = golfie;
                            entity['sessionId'] = oscard;
                            entity['postIds'] = report;
                            entity['additionalTimes'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 204:
                            entity = undefined;
                            return entity;
                        }
                    };
                    return entity;
                };
                entity['createFlushSeenItemsFunction'] = oscard;
                entity['guildId'] = zuuluu;
                entity['channelId'] = tangon;
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 8;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.getForumChannelSessionId;
                michal = michal.bind(zuuluu)(tangon);
                entity['sessionId'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    report = report.bind(entity)(oscard);
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/forums/tracking/ForumChannelSeenManager.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['getForumPostSeenManagerId'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: markForumPostItemAsSeen
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.markAnalyticsFeedItemSeen;
        zuuluu = _closure1_slot8;
        michal = argFoo;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = argBar;
        michal = argBaz;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['markForumPostItemAsSeen'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: markForumPostItemAsUnseen
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 6;
        zuuluu = zuuluu[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.markAnalyticsFeedItemUnseen;
        zuuluu = _closure1_slot8;
        michal = argFoo;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = argBar;
        michal = argBaz;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['markForumPostItemAsUnseen'] = michal;
    return entity;
})();