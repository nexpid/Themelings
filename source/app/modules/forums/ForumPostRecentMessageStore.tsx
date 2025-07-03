// app/modules/forums/ForumPostRecentMessageStore.tsx
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: isValidMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot8;
            tangon = report.getChannel;
            oscard = null;
            option = oscard == entity;
            golfie = undefined;
            zuuluu = undefined;
            if(option) { _fun00004_ip = 33; continue _fun00003 }
 28:
            zuuluu = entity.channel_id;
 33:
            zuuluu = tangon.bind(report)(zuuluu);
            if(!(oscard != zuuluu)) { _fun00004_ip = 154; continue _fun00003 }
 42:
            tangon = zuuluu.isForumPost;
            tangon = tangon.bind(zuuluu)();
            if(!tangon) { _fun00004_ip = 154; continue _fun00003 }
 55:
            tangon = _closure1_slot10;
            zuuluu = zuuluu.id;
            report = tangon[zuuluu];
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = zuuluu.bind(golfie)(michal);
            zuuluu = tangon.compare;
            option = oscard == entity;
            michal = undefined;
            if(option) { _fun00004_ip = 108; continue _fun00003 }
 103:
            michal = entity.id;
 108:
            option = oscard == report;
            entity = undefined;
            if(option) { _fun00004_ip = 136; continue _fun00003 }
 117:
            report = report.message;
            oscard = oscard == report;
            entity = undefined;
            if(oscard) { _fun00004_ip = 136; continue _fun00003 }
 131:
            entity = report.id;
 136:
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = -1;
            entity = michal > entity;
            return entity;
 154:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: set
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argBar;
            michal = null;
            entity = michal == tangon;
            if(entity) { _fun00006_ip = 48; continue _fun00005 }
 12:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 8;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.createMessageRecord;
            michal = entity.bind(zuuluu)(tangon);
 48:
            tangon = _closure1_slot10;
            zuuluu = {};
            entity = true;
            zuuluu['loaded'] = entity;
            zuuluu['message'] = michal;
            michal = argFoo;
            tangon[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getMessageState
        michal = _closure1_slot10;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot14;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            zuuluu = null;
            zuuluu = zuuluu == michal;
            if(zuuluu) { _fun00008_ip = 31; continue _fun00007 }
 26:
            entity = michal.message;
 31:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tangon = function(argFoo) { // Original name: handleLoadThreadsSuccess
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            report = michal.threads;
            tangon = michal.mostRecentMessages;
            zuuluu = report.forEach;
            michal = function(argFoo) {
                tangon = _closure1_slot13;
                entity = argFoo;
                zuuluu = entity.id;
                michal = undefined;
                entity = null;
                entity = tangon.bind(michal)(zuuluu, entity);
                entity = true;
                return entity;
            };
            michal = zuuluu.bind(report)(michal);
            michal = null;
            if(!(michal != tangon)) { _fun00010_ip = 94; continue _fun00009 }
 38:
            zuuluu = tangon.filter;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            report = report[michal];
            michal = undefined;
            michal = oscard.bind(michal)(report);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure1_slot13;
                michal = tangon.channel_id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal, tangon);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 94:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ForumPostRecentMessageStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                entity = _closure1_slot11;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 69; continue _fun00011 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00012_ip = 105; continue _fun00011;
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
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot8;
            entity = _closure1_slot9;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getMessageState';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = argFoo;
                zuuluu = _closure1_slot10;
                zuuluu = michal in zuuluu;
                if(zuuluu) { _fun00014_ip = 39; continue _fun00013 }
 17:
                tangon = _closure1_slot10;
                zuuluu = {'loaded': false, 'message': null};
                tangon[michal] = zuuluu;
 39:
                entity = _closure1_slot10;
                entity = entity[michal];
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ForumPostRecentMessageStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleMessageCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            entity = tangon.isPushNotification;
            entity = !entity;
            if(!entity) { _fun00016_ip = 157; continue _fun00015 }
 18:
            oscard = _closure1_slot12;
            michal = tangon.message;
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(michal);
            michal = !oscard;
            michal = !michal;
            if(!oscard) { _fun00016_ip = 154; continue _fun00015 }
 46:
            oscard = tangon.message;
            golfie = oscard.channel_id;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 7;
            oscard = verify[oscard];
            verify = option.bind(zuuluu)(oscard);
            option = verify.castMessageIdAsChannelId;
            oscard = tangon.message;
            oscard = oscard.id;
            oscard = option.bind(verify)(oscard);
            if(!(golfie !== oscard)) { _fun00016_ip = 130; continue _fun00015 }
 101:
            option = _closure1_slot13;
            oscard = tangon.message;
            golfie = oscard.channel_id;
            oscard = tangon.message;
            oscard = option.bind(zuuluu)(golfie, oscard);
            michal = undefined;
            _fun00016_ip = 154; continue _fun00015;
 130:
            oscard = _closure1_slot13;
            tangon = tangon.message;
            report = tangon.channel_id;
            tangon = null;
            tangon = oscard.bind(zuuluu)(report, tangon);
            michal = undefined;
 154:
            entity = michal;
 157:
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleMessageUpdate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot12;
            entity = zuuluu.message;
            yankee = undefined;
            michal = michal.bind(yankee)(entity);
            entity = !michal;
            entity = !entity;
            if(!michal) { _fun00018_ip = 178; continue _fun00017 }
 34:
            michal = zuuluu.message;
            tangon = michal.channel_id;
            michal = zuuluu.message;
            michal = michal.id;
            michal = tangon !== michal;
            if(!michal) { _fun00018_ip = 175; continue _fun00017 }
 61:
            tangon = zuuluu.message;
            oscard = tangon.channel_id;
            offset = zuuluu.message;
            zuuluu = _closure1_slot14;
            option = zuuluu.bind(yankee)(oscard);
            zuuluu = _closure1_slot15;
            verify = zuuluu.bind(yankee)(oscard);
            tangon = null;
            zuuluu = tangon != option;
            if(!zuuluu) { _fun00018_ip = 107; continue _fun00017 }
 103:
            zuuluu = tangon != verify;
 107:
            if(!zuuluu) { _fun00018_ip = 173; continue _fun00017 }
 110:
            report = _closure1_slot10;
            tangon = {};
            backup = tangon;
            foxtra = option;
            option = copyDataProperties(backup, foxtra);
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 8;
            golfie = romeon[golfie];
            option = option.bind(yankee)(golfie);
            golfie = option.updateMessageRecord;
            option = golfie.bind(option)(verify, offset);
            golfie = 'message';
            tangon[golfie] = option;
            report[oscard] = tangon;
            zuuluu = true;
 173:
            michal = undefined;
 175:
            entity = michal;
 178:
            return entity;
        }
    };
    michal['MESSAGE_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleMessageDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = entity.id;
            report = _closure1_slot15;
            entity = undefined;
            report = report.bind(entity)(zuuluu);
            oscard = null;
            oscard = oscard == report;
            if(oscard) { _fun00020_ip = 41; continue _fun00019 }
 36:
            entity = report.id;
 41:
            entity = entity === tangon;
            if(!entity) { _fun00020_ip = 58; continue _fun00019 }
 48:
            michal = _closure1_slot10;
            michal = delete michal[zuuluu];
            entity = true;
 58:
            return entity;
        }
    };
    michal['MESSAGE_DELETE'] = offset;
    verify = function(argFoo) { // Original name: handlePostChannelLoadData
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            option = entity.threads;
            oscard = option;
            entity = undefined;
            for(zuuluu in oscard)
 25:
            {
 34:
                yankee = zuuluu;
                offset = _closure1_slot13;
                verify = option[yankee];
                verify = verify.most_recent_message;
                verify = offset.bind(entity)(yankee, verify);
                _fun00022_ip = 25; continue _fun00021;
            }
 59:
            return entity;
        }
    };
    michal['LOAD_FORUM_POSTS'] = verify;
    michal['LOAD_ARCHIVED_THREADS_SUCCESS'] = tangon;
    michal['LOAD_THREADS_SUCCESS'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/ForumPostRecentMessageStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();