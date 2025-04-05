// app/modules/forums/ForumActivePostStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
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
            _closure1_slot28 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: getLastMessageId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot12;
            michal = zuuluu.lastMessageId;
            michal = michal.bind(zuuluu)(entity);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00004_ip = 30; continue _fun00003 }
 27:
            entity = michal;
 30:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: getSortFunction
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                verify = argFoo;
                report = argBar;
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                oscard = 13;
                entity = entity[oscard];
                option = undefined;
                michal = michal.bind(option)(entity);
                entity = michal.isForumPostPinned;
                michal = entity.bind(michal)(verify);
                entity = -1;
                if(michal) { _fun00006_ip = 220; continue _fun00005 }
 54:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[oscard];
                zuuluu = zuuluu.bind(option)(michal);
                michal = zuuluu.isForumPostPinned;
                zuuluu = michal.bind(zuuluu)(report);
                michal = 1;
                if(zuuluu) { _fun00006_ip = 217; continue _fun00005 }
 91:
                oscard = _closure2_slot0;
                golfie = _closure1_slot0;
                offset = _closure1_slot2;
                zuuluu = 11;
                zuuluu = offset[zuuluu];
                zuuluu = golfie.bind(option)(zuuluu);
                zuuluu = zuuluu.ThreadSortOrder;
                zuuluu = zuuluu.LATEST_ACTIVITY;
                if(!(oscard !== zuuluu)) { _fun00006_ip = 168; continue _fun00005 }
 134:
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 14;
                zuuluu = golfie[zuuluu];
                oscard = oscard.bind(option)(zuuluu);
                zuuluu = oscard.compare;
                zuuluu = zuuluu.bind(oscard)(report, verify);
                _fun00006_ip = 214; continue _fun00005;
 168:
                golfie = _closure1_slot1;
                offset = _closure1_slot2;
                oscard = 14;
                oscard = offset[oscard];
                golfie = golfie.bind(option)(oscard);
                oscard = golfie.compare;
                tangon = _closure1_slot29;
                report = tangon.bind(option)(report);
                tangon = tangon.bind(option)(verify);
                zuuluu = oscard.bind(golfie)(report, tangon);
 214:
                michal = zuuluu;
 217:
                entity = michal;
 220:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: resetState
        entity = new Array(0);
        _closure1_slot21 = entity;
        entity = null;
        var _closure1_slot14 = entity;
        _closure1_slot17 = entity;
        entity = global;
        entity = entity.Set;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        offset = zuuluu;
        entity = new offset[entity](verify);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot18 = entity;
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        entity = 11;
        zuuluu = report[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        zuuluu = zuuluu.ThreadSortOrder;
        zuuluu = zuuluu.LATEST_ACTIVITY;
        _closure1_slot19 = zuuluu;
        zuuluu = 0;
        _closure1_slot20 = zuuluu;
        zuuluu = new Array(0);
        _closure1_slot23 = zuuluu;
        tangon = _closure1_slot1;
        zuuluu = 12;
        oscard = report[zuuluu];
        option = tangon.bind(entity)(oscard);
        golfie = option.chain;
        oscard = _closure1_slot15;
        oscard = golfie.bind(option)(oscard);
        _closure1_slot24 = oscard;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.chain;
        zuuluu = _closure1_slot15;
        zuuluu = tangon.bind(report)(zuuluu);
        _closure1_slot25 = zuuluu;
        tangon = _closure1_slot27;
        zuuluu = tangon.clear;
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = _closure1_slot26;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot31 = entity;
    report = function() { // Original name: maybeRebuildState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot13;
            michal = zuuluu.getChannelId;
            report = michal.bind(zuuluu)();
            michal = null;
            if(!(michal != report)) { _fun00008_ip = 76; continue _fun00007 }
 23:
            tangon = _closure1_slot11;
            zuuluu = tangon.getChannel;
            zuuluu = zuuluu.bind(tangon)(report);
            if(!(michal != zuuluu)) { _fun00008_ip = 76; continue _fun00007 }
 41:
            michal = zuuluu.isForumLikeChannel;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00008_ip = 76; continue _fun00007 }
 54:
            tangon = _closure1_slot32;
            zuuluu = {};
            michal = true;
            zuuluu['refreshThreadIds'] = michal;
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            return michal;
 76:
            michal = _closure1_slot31;
            entity = undefined;
            entity = michal.bind(entity)();
            entity = false;
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: rebuildState
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            report = _closure1_slot11;
            tangon = report.getChannel;
            entity = _closure1_slot17;
            tangon = tangon.bind(report)(entity);
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 612; continue _fun00009 }
 35:
            report = entity != golfie;
            if(!report) { _fun00010_ip = 48; continue _fun00009 }
 42:
            report = golfie.refreshThreadIds;
 48:
            if(!report) { _fun00010_ip = 126; continue _fun00009 }
 51:
            report = global;
            oscard = report.Object;
            report = oscard.values;
            offset = _closure1_slot8;
            verify = offset.getThreadsForParent;
            option = tangon.guild_id;
            tangon = tangon.id;
            tangon = verify.bind(offset)(option, tangon);
            oscard = report.bind(oscard)(tangon);
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            _closure1_slot23 = tangon;
            tangon = 0;
            _closure1_slot20 = tangon;
            tangon = true;
            _closure1_slot22 = tangon;
 126:
            tangon = _closure1_slot26;
            tangon = tangon.size;
            oscard = 0;
            if(!(oscard !== tangon)) { _fun00010_ip = 178; continue _fun00009 }
 141:
            option = _closure1_slot23;
            report = option.filter;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot26;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            tangon = report.bind(option)(tangon);
            _closure1_slot23 = tangon;
            report = _closure1_slot26;
            tangon = report.clear;
            tangon = tangon.bind(report)();
 178:
            tangon = _closure1_slot27;
            tangon = tangon.size;
            if(!(oscard !== tangon)) { _fun00010_ip = 284; continue _fun00009 }
 191:
            tangon = global;
            option = tangon.Array;
            report = option.from;
            offset = tangon.Set;
            sizing = _closure1_slot23;
            tangon = new Array(0);
            output = tangon;
            kiloes = 0;
            kiloes = arraySpread(output, sizing, kiloes);
            sizing = _closure1_slot27;
            output = tangon;
            verify = arraySpread(output, sizing, kiloes);
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            result = verify;
            output = tangon;
            tangon = new result[offset](output, sizing);
            tangon = tangon instanceof Object ? tangon : verify;
            tangon = report.bind(option)(tangon);
            _closure1_slot23 = tangon;
            report = _closure1_slot27;
            tangon = report.clear;
            tangon = tangon.bind(report)();
 284:
            tangon = entity != golfie;
            if(!tangon) { _fun00010_ip = 297; continue _fun00009 }
 291:
            tangon = golfie.refreshThreadIds;
 297:
            if(tangon) { _fun00010_ip = 316; continue _fun00009 }
 300:
            report = entity != golfie;
            if(!report) { _fun00010_ip = 313; continue _fun00009 }
 307:
            report = golfie.sortThreadIds;
 313:
            tangon = report;
 316:
            if(!tangon) { _fun00010_ip = 476; continue _fun00009 }
 322:
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 12;
            tangon = yankee[report];
            verify = undefined;
            offset = golfie.bind(verify)(tangon);
            option = offset.chain;
            tangon = _closure1_slot23;
            backup = option.bind(offset)(tangon);
            foxtra = backup.sort;
            option = _closure1_slot30;
            offset = _closure1_slot0;
            tangon = 11;
            romeon = yankee[tangon];
            romeon = offset.bind(verify)(romeon);
            romeon = romeon.ThreadSortOrder;
            romeon = romeon.LATEST_ACTIVITY;
            romeon = option.bind(verify)(romeon);
            romeon = foxtra.bind(backup)(romeon);
            _closure1_slot25 = romeon;
            report = yankee[report];
            romeon = golfie.bind(verify)(report);
            golfie = romeon.chain;
            report = _closure1_slot23;
            golfie = golfie.bind(romeon)(report);
            report = golfie.sort;
            tangon = yankee[tangon];
            tangon = offset.bind(verify)(tangon);
            tangon = tangon.ThreadSortOrder;
            tangon = tangon.CREATION_DATE;
            tangon = option.bind(verify)(tangon);
            tangon = report.bind(golfie)(tangon);
            _closure1_slot24 = tangon;
 476:
            report = _closure1_slot19;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 11;
            tangon = option[tangon];
            verify = undefined;
            tangon = golfie.bind(verify)(tangon);
            tangon = tangon.ThreadSortOrder;
            tangon = tangon.LATEST_ACTIVITY;
            if(!(report !== tangon)) { _fun00010_ip = 524; continue _fun00009 }
 518:
            report = _closure1_slot24;
            _fun00010_ip = 528; continue _fun00009;
 524:
            report = _closure1_slot25;
 528:
            tangon = report.value;
            golfie = tangon.bind(report)();
            tangon = _closure1_slot18;
            tangon = tangon.size;
            report = golfie;
            if(!(oscard !== tangon)) { _fun00010_ip = 577; continue _fun00009 }
 553:
            oscard = golfie.filter;
            option = _closure1_slot18;
            tangon = function(argFoo) { // Original name: getFilterFunction
                michal = argFoo;
                var _closure3_slot0 = michal;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zuuluu = _closure1_slot11;
                        michal = zuuluu.getChannel;
                        entity = argFoo;
                        michal = michal.bind(zuuluu)(entity);
                        entity = null;
                        zuuluu = entity == michal;
                        tangon = undefined;
                        if(zuuluu) { _fun00012_ip = 37; continue _fun00011 }
 31:
                        tangon = michal.appliedTags;
 37:
                        entity = entity != tangon;
                        if(!entity) { _fun00012_ip = 55; continue _fun00011 }
 44:
                        zuuluu = tangon.length;
                        michal = 0;
                        entity = michal !== zuuluu;
 55:
                        if(!entity) { _fun00012_ip = 76; continue _fun00011 }
 58:
                        zuuluu = tangon.some;
                        michal = function(argFoo) {
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.has;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(michal);
 76:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = tangon.bind(verify)(option);
            report = oscard.bind(golfie)(tangon);
 577:
            _closure1_slot21 = report;
            tangon = report.find;
            zuuluu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getCount;
                    entity = argFoo;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    entity = entity === zuuluu;
                    if(entity) { _fun00014_ip = 36; continue _fun00013 }
 30:
                    michal = 0;
                    entity = michal === zuuluu;
 36:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = entity == zuuluu;
            entity = null;
            if(tangon) { _fun00010_ip = 608; continue _fun00009 }
 605:
            entity = zuuluu;
 608:
            _closure1_slot14 = entity;
 612:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    tangon = global;
    yankee = tangon.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    verify = 0;
    offset = golfie[verify];
    entity = undefined;
    offset = option.bind(entity)(offset);
    var _closure1_slot3 = offset;
    offset = 1;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 2;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot5 = offset;
    offset = 3;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 4;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 8;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot11 = offset;
    offset = 9;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot12 = offset;
    offset = 10;
    offset = golfie[offset];
    offset = option.bind(entity)(offset);
    var _closure1_slot13 = offset;
    yankee = new Array(0);
    var _closure1_slot15 = yankee;
    offset = null;
    var _closure1_slot16 = offset;
    var _closure1_slot17 = offset;
    offset = tangon.Set;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    sizing = romeon;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot18 = offset;
    offset = 11;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.ThreadSortOrder;
    offset = offset.LATEST_ACTIVITY;
    var _closure1_slot19 = offset;
    var _closure1_slot20 = verify;
    verify = new Array(0);
    var _closure1_slot21 = verify;
    verify = false;
    var _closure1_slot22 = verify;
    verify = new Array(0);
    var _closure1_slot23 = verify;
    verify = 12;
    offset = golfie[verify];
    romeon = option.bind(entity)(offset);
    offset = romeon.chain;
    offset = offset.bind(romeon)(yankee);
    var _closure1_slot24 = offset;
    verify = golfie[verify];
    offset = option.bind(entity)(verify);
    verify = offset.chain;
    verify = verify.bind(offset)(yankee);
    var _closure1_slot25 = verify;
    verify = tangon.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    sizing = offset;
    verify = new sizing[verify](kiloes);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot26 = verify;
    tangon = tangon.Set;
    verify = tangon.prototype;
    verify = Object.create(verify, {constructor: {value: tangon}});
    sizing = verify;
    tangon = new sizing[tangon](kiloes);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot27 = tangon;
    tangon = 16;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: ForumActivePostStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot28;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            oscard = this;
            report = oscard.waitFor;
            offset = _closure1_slot11;
            verify = _closure1_slot8;
            option = _closure1_slot13;
            golfie = _closure1_slot12;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getNewThreadCount';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getCanAckThreads';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getThreadIds';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                golfie = argFoo;
                report = argBar;
                option = argBaz;
                oscard = _closure1_slot17;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 15;
                michal = tangon[michal];
                tangon = undefined;
                verify = zuuluu.bind(tangon)(michal);
                zuuluu = verify.areSetsEqual;
                michal = _closure1_slot18;
                michal = zuuluu.bind(verify)(option, michal);
                michal = !michal;
                zuuluu = _closure1_slot19;
                _closure1_slot17 = golfie;
                _closure1_slot18 = option;
                _closure1_slot19 = report;
                if(!(golfie === oscard)) { _fun00018_ip = 114; continue _fun00017 }
 77:
                if(!(report === zuuluu)) { _fun00018_ip = 94; continue _fun00017 }
 81:
                if(!michal) { _fun00018_ip = 132; continue _fun00017 }
 84:
                michal = _closure1_slot32;
                michal = michal.bind(tangon)();
                _fun00018_ip = 132; continue _fun00017;
 94:
                zuuluu = _closure1_slot32;
                michal = {};
                report = true;
                michal['sortThreadIds'] = report;
                michal = zuuluu.bind(tangon)(michal);
                _fun00018_ip = 132; continue _fun00017;
 114:
                zuuluu = _closure1_slot32;
                michal = {};
                report = true;
                michal['refreshThreadIds'] = report;
                michal = zuuluu.bind(tangon)(michal);
 132:
                entity = _closure1_slot21;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getCurrentThreadIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getAndDeleteMostRecentUserCreatedThreadId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            michal = null;
            _closure1_slot16 = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getFirstNoReplyThreadId';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'ForumActivePostStore';
    verify['displayName'] = tangon;
    tangon = 17;
    tangon = golfie[tangon];
    kiloes = option.bind(entity)(tangon);
    tangon = {};
    tangon['CONNECTION_OPEN'] = report;
    tangon['OVERLAY_INITIALIZE'] = report;
    tangon['GUILD_CREATE'] = report;
    tangon['CHANNEL_SELECT'] = report;
    report = function(argFoo) { // Original name: handleChannelDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zuuluu = entity.parent_id;
            michal = null;
            if(!(michal != zuuluu)) { _fun00020_ip = 49; continue _fun00019 }
 20:
            zuuluu = entity.parent_id;
            michal = _closure1_slot17;
            if(!(zuuluu === michal)) { _fun00020_ip = 49; continue _fun00019 }
 37:
            michal = _closure1_slot31;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 49:
            entity = false;
            return entity;
        }
    };
    tangon['CHANNEL_DELETE'] = report;
    report = function(argFoo) { // Original name: handleThreadListSync
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            entity = _closure1_slot17;
            michal = null;
            entity = michal != entity;
            if(!entity) { _fun00022_ip = 88; continue _fun00021 }
 24:
            golfie = _closure1_slot11;
            oscard = golfie.getChannel;
            zuuluu = _closure1_slot17;
            oscard = oscard.bind(golfie)(zuuluu);
            golfie = michal == oscard;
            zuuluu = undefined;
            michal = undefined;
            if(golfie) { _fun00022_ip = 58; continue _fun00021 }
 53:
            michal = oscard.guild_id;
 58:
            michal = report === michal;
            if(!michal) { _fun00022_ip = 85; continue _fun00021 }
 65:
            report = _closure1_slot32;
            tangon = {};
            oscard = true;
            tangon['refreshThreadIds'] = oscard;
            tangon = report.bind(zuuluu)(tangon);
            michal = undefined;
 85:
            entity = michal;
 88:
            return entity;
        }
    };
    tangon['THREAD_LIST_SYNC'] = report;
    report = function(argFoo) { // Original name: handleThreadCreate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            michal = entity.isNewlyCreated;
            tangon = zuuluu.parent_id;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00024_ip = 46; continue _fun00023 }
 29:
            report = zuuluu.parent_id;
            tangon = _closure1_slot17;
            entity = report === tangon;
 46:
            if(!entity) { _fun00024_ip = 118; continue _fun00023 }
 49:
            tangon = !michal;
            michal = !tangon;
            if(tangon) { _fun00024_ip = 115; continue _fun00023 }
 58:
            report = zuuluu.ownerId;
            golfie = _closure1_slot10;
            tangon = golfie.getId;
            tangon = tangon.bind(golfie)();
            if(!(report === tangon)) { _fun00024_ip = 96; continue _fun00023 }
 85:
            zuuluu = zuuluu.id;
            _closure1_slot16 = zuuluu;
            _fun00024_ip = 113; continue _fun00023;
 96:
            tangon = _closure1_slot20;
            tangon = parseFloat(tangon);
            report = tangon + 1;
            _closure1_slot20 = report;
            zuuluu = tangon;
 113:
            michal = undefined;
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    tangon['THREAD_CREATE'] = report;
    report = function(argFoo) { // Original name: handleThreadUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            michal = zuuluu.parent_id;
            entity = null;
            if(!(entity != michal)) { _fun00026_ip = 194; continue _fun00025 }
 23:
            tangon = zuuluu.parent_id;
            entity = _closure1_slot17;
            if(!(tangon === entity)) { _fun00026_ip = 194; continue _fun00025 }
 43:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 13;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.isForumPostPinned;
            tangon = zuuluu.id;
            report = report.bind(oscard)(tangon);
            golfie = _closure1_slot27;
            oscard = golfie.has;
            tangon = zuuluu.id;
            tangon = oscard.bind(golfie)(tangon);
            if(!report) { _fun00026_ip = 145; continue _fun00025 }
 103:
            if(tangon) { _fun00026_ip = 145; continue _fun00025 }
 106:
            option = _closure1_slot27;
            golfie = option.add;
            oscard = zuuluu.id;
            oscard = golfie.bind(option)(oscard);
            golfie = _closure1_slot32;
            oscard = {};
            option = true;
            oscard['sortThreadIds'] = option;
            oscard = golfie.bind(entity)(oscard);
            _fun00026_ip = 188; continue _fun00025;
 145:
            if(report) { _fun00026_ip = 190; continue _fun00025 }
 148:
            if(!tangon) { _fun00026_ip = 190; continue _fun00025 }
 151:
            report = _closure1_slot27;
            tangon = report.delete;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot32;
            michal = {};
            tangon = true;
            michal['sortThreadIds'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 188:
            return entity;
 190:
            entity = false;
            return entity;
 194:
            entity = false;
            return entity;
        }
    };
    tangon['THREAD_UPDATE'] = report;
    report = function(argFoo) { // Original name: handleThreadDelete
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            zuuluu = michal.parent_id;
            entity = null;
            if(!(entity != zuuluu)) { _fun00028_ip = 78; continue _fun00027 }
 20:
            tangon = michal.parent_id;
            zuuluu = _closure1_slot17;
            if(!(tangon === zuuluu)) { _fun00028_ip = 78; continue _fun00027 }
 37:
            tangon = _closure1_slot26;
            zuuluu = tangon.add;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot32;
            michal = {};
            entity = true;
            michal['sortThreadIds'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 78:
            entity = false;
            return entity;
        }
    };
    tangon['THREAD_DELETE'] = report;
    report = function(argFoo) { // Original name: handleResortThreads
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            entity = null;
            if(!(entity != zuuluu)) { _fun00030_ip = 47; continue _fun00029 }
 14:
            michal = _closure1_slot17;
            if(!(zuuluu === michal)) { _fun00030_ip = 47; continue _fun00029 }
 25:
            zuuluu = _closure1_slot32;
            michal = {};
            entity = true;
            michal['refreshThreadIds'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    tangon['RESORT_THREADS'] = report;
    report = function(argFoo) { // Original name: handleChannelAck
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            entity = null;
            if(!(entity != zuuluu)) { _fun00032_ip = 35; continue _fun00031 }
 14:
            entity = _closure1_slot17;
            if(!(zuuluu === entity)) { _fun00032_ip = 35; continue _fun00031 }
 25:
            entity = false;
            _closure1_slot22 = entity;
            entity = undefined;
            return entity;
 35:
            entity = false;
            return entity;
        }
    };
    tangon['CHANNEL_ACK'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    sizing = report;
    backup = tangon;
    tangon = new sizing[verify](kiloes, backup, foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 18;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forums/ForumActivePostStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: computeThreadIdsSnapshot
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            tangon = _closure1_slot11;
            zuuluu = tangon.getChannel;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00034_ip = 115; continue _fun00033 }
 26:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            golfie = _closure1_slot8;
            oscard = golfie.getThreadsForParent;
            report = michal.guild_id;
            michal = michal.id;
            michal = oscard.bind(golfie)(report, michal);
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.sort;
            report = _closure1_slot30;
            tangon = _closure1_slot19;
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = michal.bind(zuuluu)(entity);
            _fun00034_ip = 119; continue _fun00033;
 115:
            entity = new Array(0);
 119:
            return entity;
        }
    };
    zuuluu['computeThreadIdsSnapshot'] = michal;
    return entity;
})();