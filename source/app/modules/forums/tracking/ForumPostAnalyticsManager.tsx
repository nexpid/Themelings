// app/modules/forums/tracking/ForumPostAnalyticsManager.tsx
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
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: ForumPostAnalyticsManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot11;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = {};
            entity['readStateSnapshots'] = zuuluu;
            zuuluu = {};
            tangon = function(argFoo) { // Original name: CHANNEL_SELECT
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleChannelSelect;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['CHANNEL_SELECT'] = tangon;
            tangon = function(argFoo) { // Original name: THREAD_CREATE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleThreadCreate;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['THREAD_CREATE'] = tangon;
            entity['actions'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.channelId;
                    michal = null;
                    if(!(michal != tangon)) { _fun00006_ip = 83; continue _fun00005 }
 14:
                    zuuluu = _closure1_slot10;
                    entity = zuuluu.getChannel;
                    entity = entity.bind(zuuluu)(tangon);
                    michal = michal != entity;
                    if(!michal) { _fun00006_ip = 48; continue _fun00005 }
 38:
                    zuuluu = entity.isForumLikeChannel;
                    michal = zuuluu.bind(entity)();
 48:
                    if(!michal) { _fun00006_ip = 83; continue _fun00005 }
 51:
                    zuuluu = _closure3_slot0;
                    michal = {};
                    zuuluu['readStateSnapshots'] = michal;
                    michal = zuuluu.processForumChannel;
                    entity = entity.guild_id;
                    entity = michal.bind(zuuluu)(entity, tangon);
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelSelect'] = zuuluu;
            zuuluu = function(argFoo, argBar) {
                report = _closure1_slot8;
                tangon = report.getThreadsForParent;
                zuuluu = argFoo;
                michal = argBar;
                tangon = tangon.bind(report)(zuuluu, michal);
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.keys;
                tangon = michal.bind(zuuluu)(tangon);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getForumPostReadStatesById;
                        zuuluu = michal.bind(zuuluu)(tangon);
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 62; continue _fun00007 }
 45:
                        michal = _closure3_slot0;
                        michal = michal.readStateSnapshots;
                        michal[tangon] = zuuluu;
 62:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['processForumChannel'] = zuuluu;
            michal = function(argFoo) {
                entity = _closure3_slot0;
                michal = entity.readStateSnapshots;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            entity['getReadStateSnapshotAnalytics'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = 'handleThreadCreate';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.channel;
                michal = entity.isForumPost;
                michal = michal.bind(entity)();
                if(!michal) { _fun00010_ip = 81; continue _fun00009 }
 21:
                report = entity.ownerId;
                zuuluu = _closure1_slot9;
                michal = zuuluu.getId;
                tangon = michal.bind(zuuluu)();
                michal = this;
                zuuluu = michal.readStateSnapshots;
                michal = entity.id;
                entity = {};
                tangon = report === tangon;
                tangon = !tangon;
                entity['isNew'] = tangon;
                entity['hasUnreads'] = tangon;
                zuuluu[michal] = entity;
 81:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/tracking/ForumPostAnalyticsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();