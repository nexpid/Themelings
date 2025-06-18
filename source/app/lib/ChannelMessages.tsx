// app/lib/ChannelMessages.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar) { // Original name: mergeMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            zuuluu = michal.get;
            entity = tangon.id;
            entity = zuuluu.bind(michal)(entity);
            option = null;
            if(!(option != entity)) { _fun00002_ip = 189; continue _fun00001 }
 30:
            zuuluu = entity.editedTimestamp;
            zuuluu = option != zuuluu;
            report = 0;
            if(!zuuluu) { _fun00002_ip = 54; continue _fun00001 }
 45:
            zuuluu = entity.editedTimestamp;
            report = zuuluu - 0;
 54:
            zuuluu = tangon.edited_timestamp;
            golfie = option != zuuluu;
            zuuluu = 0;
            if(!golfie) { _fun00002_ip = 106; continue _fun00001 }
 69:
            golfie = global;
            offset = golfie.Date;
            yankee = tangon.edited_timestamp;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeon = verify;
            golfie = new romeon[offset](yankee, offset);
            golfie = golfie instanceof Object ? golfie : verify;
            zuuluu = golfie - 0;
 106:
            zuuluu = zuuluu > report;
            if(zuuluu) { _fun00002_ip = 160; continue _fun00001 }
 113:
            report = entity.embeds;
            report = report.length;
            verify = tangon.embeds;
            offset = option == verify;
            golfie = undefined;
            if(offset) { _fun00002_ip = 144; continue _fun00001 }
 139:
            golfie = verify.length;
 144:
            option = option != golfie;
            oscard = 0;
            if(!option) { _fun00002_ip = 156; continue _fun00001 }
 153:
            oscard = golfie;
 156:
            zuuluu = report < oscard;
 160:
            if(zuuluu) { _fun00002_ip = 177; continue _fun00001 }
 163:
            oscard = entity.content;
            report = tangon.content;
            zuuluu = oscard !== report;
 177:
            if(zuuluu) { _fun00002_ip = 189; continue _fun00001 }
 180:
            michal = michal.cached;
            if(!michal) { _fun00002_ip = 225; continue _fun00001 }
 189:
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.createMessageRecord;
            entity = michal.bind(zuuluu)(tangon);
 225:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot6 = option;
    option = tangon.MAX_LOADED_MESSAGES;
    var _closure1_slot7 = option;
    option = tangon.MAX_MESSAGE_CACHE_SIZE;
    var _closure1_slot8 = option;
    option = tangon.TRUNCATED_MESSAGE_VIEW_SIZE;
    var _closure1_slot9 = option;
    tangon = tangon.MessageStates;
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    option = report.bind(entity)(tangon);
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    romeon = 'ChannelMessages';
    foxtra = report;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot11 = tangon;
    tangon = function() {
        tangon = function(argFoo) { // Original name: MessageCache
            zuuluu = this;
            tangon = _closure1_slot4;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['_messages'] = michal;
            michal = {};
            zuuluu['_map'] = michal;
            michal = false;
            zuuluu['_wasAtEdge'] = michal;
            michal = argFoo;
            zuuluu['_isCacheBefore'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot5;
        entity = {};
        michal = 'clone';
        entity['key'] = michal;
        michal = function() { // Original name: clone
            michal = this;
            tangon = _closure2_slot0;
            option = michal._isCacheBefore;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            verify = zuuluu;
            entity = new verify[tangon](option, golfie);
            entity = entity instanceof Object ? entity : zuuluu;
            zuuluu = {};
            golfie = michal._map;
            option = zuuluu;
            tangon = copyDataProperties(option, golfie);
            entity['_map'] = zuuluu;
            golfie = michal._messages;
            zuuluu = new Array(0);
            oscard = 0;
            option = zuuluu;
            tangon = arraySpread(option, golfie, oscard);
            entity['_messages'] = zuuluu;
            michal = michal._wasAtEdge;
            entity['_wasAtEdge'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(14);
        michal[0] = entity;
        entity = {};
        oscard = 'wasAtEdge';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._wasAtEdge;
            return entity;
        };
        entity['get'] = oscard;
        oscard = function(argFoo) { // Original name: set
            michal = argFoo;
            entity = this;
            entity['_wasAtEdge'] = michal;
            entity = undefined;
            return entity;
        };
        entity['set'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'length';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._messages;
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = {};
            michal['_map'] = entity;
            entity = new Array(0);
            michal['_messages'] = entity;
            entity = false;
            michal['_wasAtEdge'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'remove';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot1;
            report = _closure1_slot3;
            entity = 6;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.filter;
            report = michal._messages;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure3_slot0;
                entity = michal !== entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(report, tangon);
            michal['_messages'] = tangon;
            michal = michal._map;
            michal = delete michal[zuuluu];
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'removeMany';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            golfie = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            var _closure3_slot1 = golfie;
            report = _closure1_slot1;
            tangon = _closure1_slot3;
            entity = 6;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.each;
            tangon = function(argFoo) {
                entity = _closure3_slot0;
                michal = entity._map;
                entity = argFoo;
                entity = delete michal[entity];
                entity = undefined;
                return entity;
            };
            tangon = report.bind(oscard)(golfie, tangon);
            report = zuuluu._messages;
            tangon = report.filter;
            michal = function(argFoo) {
                zuuluu = _closure3_slot1;
                michal = zuuluu.indexOf;
                entity = argFoo;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = -1;
                entity = entity === michal;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            zuuluu['_messages'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'replace';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                entity = this;
                michal = entity._map;
                report = michal[tangon];
                michal = null;
                if(!(michal != report)) { _fun00004_ip = 77; continue _fun00003 }
 25:
                michal = entity._map;
                michal = delete michal[tangon];
                tangon = entity._map;
                michal = zuuluu.id;
                tangon[michal] = zuuluu;
                michal = entity._messages;
                tangon = entity._messages;
                entity = tangon.indexOf;
                entity = entity.bind(tangon)(report);
                michal[entity] = zuuluu;
 77:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'update';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zuuluu = entity._map;
                michal = argFoo;
                report = zuuluu[michal];
                michal = null;
                if(!(michal != report)) { _fun00006_ip = 74; continue _fun00005 }
 22:
                zuuluu = argBar;
                michal = undefined;
                zuuluu = zuuluu.bind(michal)(report);
                tangon = entity._map;
                michal = report.id;
                tangon[michal] = zuuluu;
                michal = entity._messages;
                tangon = entity._messages;
                entity = tangon.indexOf;
                entity = entity.bind(tangon)(report);
                michal[entity] = zuuluu;
 74:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'has';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity._map;
            entity = argFoo;
            michal = michal[entity];
            entity = null;
            entity = entity != michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity._map;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'forEach';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity._messages;
            zuuluu = tangon.forEach;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'cache';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                zuuluu = arguments[1];
                michal = this;
                var _closure3_slot0 = michal;
                tangon = undefined;
                if(!(zuuluu === tangon)) { _fun00008_ip = 23; continue _fun00007 }
 21:
                zuuluu = false;
 23:
                oscard = michal.length;
                golfie = 0;
                if(!(golfie === oscard)) { _fun00008_ip = 40; continue _fun00007 }
 34:
                michal['_wasAtEdge'] = zuuluu;
 40:
                zuuluu = michal._messages;
                oscard = zuuluu.length;
                zuuluu = report.length;
                option = oscard + zuuluu;
                oscard = _closure1_slot8;
                if(!(option > oscard)) { _fun00008_ip = 187; continue _fun00007 }
 71:
                oscard = false;
                michal['_wasAtEdge'] = oscard;
                option = report.length;
                oscard = _closure1_slot8;
                if(!(!(option > oscard))) { _fun00008_ip = 295; continue _fun00007 }
 95:
                option = _closure1_slot8;
                oscard = report.length;
                romeon = option - oscard;
                oscard = michal._isCacheBefore;
                verify = michal._messages;
                option = verify.slice;
                if(oscard) { _fun00008_ip = 142; continue _fun00007 }
 128:
                oscard = option.bind(verify)(golfie, romeon);
                michal['_messages'] = oscard;
                _fun00008_ip = 187; continue _fun00007;
 142:
                oscard = global;
                yankee = oscard.Math;
                offset = yankee.max;
                oscard = michal._messages;
                oscard = oscard.length;
                oscard = oscard - romeon;
                oscard = offset.bind(yankee)(oscard, golfie);
                oscard = option.bind(verify)(oscard);
                michal['_messages'] = oscard;
 187:
                oscard = michal._isCacheBefore;
                option = new Array(0);
                if(oscard) { _fun00008_ip = 230; continue _fun00007 }
 200:
                kiloes = option;
                backup = report;
                foxtra = 0;
                foxtra = arraySpread(kiloes, backup, foxtra);
                backup = michal._messages;
                kiloes = option;
                oscard = arraySpread(kiloes, backup, foxtra);
                oscard = option;
                _fun00008_ip = 258; continue _fun00007;
 230:
                backup = michal._messages;
                kiloes = option;
                foxtra = 0;
                foxtra = arraySpread(kiloes, backup, foxtra);
                kiloes = option;
                backup = report;
                verify = arraySpread(kiloes, backup, foxtra);
                oscard = option;
 258:
                michal['_messages'] = oscard;
                oscard = {};
                michal['_map'] = oscard;
                verify = michal._messages;
                option = verify.forEach;
                oscard = function(argFoo) {
                    entity = argFoo;
                    michal = _closure3_slot0;
                    zuuluu = michal._map;
                    michal = entity.id;
                    zuuluu[michal] = entity;
                    return entity;
                };
                oscard = option.bind(verify)(oscard);
                return tangon;
 295:
                oscard = michal._isCacheBefore;
                tangon = report.slice;
                if(oscard) { _fun00008_ip = 327; continue _fun00007 }
 309:
                oscard = _closure1_slot8;
                oscard = tangon.bind(report)(golfie, oscard);
                michal['_messages'] = oscard;
                _fun00008_ip = 351; continue _fun00007;
 327:
                oscard = report.length;
                zuuluu = _closure1_slot8;
                zuuluu = oscard - zuuluu;
                zuuluu = tangon.bind(report)(zuuluu);
                michal['_messages'] = zuuluu;
 351:
                zuuluu = {};
                michal['_map'] = zuuluu;
                zuuluu = michal._messages;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = _closure3_slot0;
                    zuuluu = michal._map;
                    michal = entity.id;
                    zuuluu[michal] = entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'extractAll';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            entity = zuuluu._messages;
            michal = new Array(0);
            zuuluu['_messages'] = michal;
            michal = {};
            zuuluu['_map'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'extract';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = tangon._isCacheBefore;
                zuuluu = global;
                golfie = zuuluu.Math;
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 29:
                zuuluu = golfie.min;
                entity = tangon.length;
                oscard = zuuluu.bind(golfie)(report, entity);
                zuuluu = tangon._messages;
                entity = zuuluu.slice;
                option = 0;
                entity = entity.bind(zuuluu)(option, oscard);
                oscard = tangon._messages;
                zuuluu = oscard.splice;
                zuuluu = zuuluu.bind(oscard)(option, report);
                _fun00010_ip = 145; continue _fun00009;
 84:
                oscard = golfie.max;
                zuuluu = tangon.length;
                report = zuuluu - report;
                zuuluu = 0;
                oscard = oscard.bind(golfie)(report, zuuluu);
                golfie = tangon.length;
                report = tangon._messages;
                zuuluu = report.slice;
                entity = zuuluu.bind(report)(oscard, golfie);
                report = tangon._messages;
                tangon = report.splice;
                tangon = tangon.bind(report)(oscard);
 145:
                zuuluu = entity.forEach;
                michal = function(argFoo) {
                    entity = _closure3_slot0;
                    michal = entity._map;
                    entity = argFoo;
                    entity = entity.id;
                    entity = delete michal[entity];
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        entity['value'] = report;
        michal[13] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot12 = tangon;
    tangon = function() {
        report = function(argFoo) { // Original name: ChannelMessages
            zuuluu = this;
            report = _closure1_slot4;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            report = false;
            zuuluu['ready'] = report;
            zuuluu['cached'] = report;
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            tangon = 7;
            tangon = golfie[tangon];
            tangon = oscard.bind(entity)(tangon);
            tangon = tangon.JumpTypes;
            tangon = tangon.ANIMATED;
            zuuluu['jumpType'] = tangon;
            oscard = null;
            zuuluu['jumpTargetId'] = oscard;
            golfie = 0;
            zuuluu['jumpTargetOffset'] = golfie;
            option = 1;
            zuuluu['jumpSequenceId'] = option;
            zuuluu['jumped'] = report;
            zuuluu['jumpedToPresent'] = report;
            tangon = true;
            zuuluu['jumpFlash'] = tangon;
            zuuluu['jumpReturnTargetId'] = oscard;
            zuuluu['focusTargetId'] = oscard;
            zuuluu['focusSequenceId'] = option;
            zuuluu['initialScrollSequenceId'] = golfie;
            zuuluu['hasMoreBefore'] = tangon;
            zuuluu['hasMoreAfter'] = report;
            zuuluu['loadingMore'] = report;
            zuuluu['revealedMessageId'] = oscard;
            zuuluu['hasFetched'] = report;
            zuuluu['error'] = report;
            oscard = new Array(0);
            zuuluu['_array'] = oscard;
            michal = _closure1_slot12;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            romeon = oscard;
            yankee = true;
            tangon = new romeon[michal](yankee, offset);
            tangon = tangon instanceof Object ? tangon : oscard;
            zuuluu['_before'] = tangon;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            romeon = tangon;
            yankee = false;
            michal = new romeon[michal](yankee, offset);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_after'] = michal;
            michal = {};
            zuuluu['_map'] = michal;
            michal = argFoo;
            zuuluu['channelId'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot5;
        entity = {};
        michal = 'mutate';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                report = arguments[1];
                tangon = this;
                michal = undefined;
                if(!(report === michal)) { _fun00012_ip = 17; continue _fun00011 }
 15:
                report = false;
 17:
                golfie = _closure2_slot0;
                romeon = tangon.channelId;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                foxtra = oscard;
                entity = new foxtra[golfie](romeon, yankee);
                entity = entity instanceof Object ? entity : oscard;
                verify = tangon._array;
                if(report) { _fun00012_ip = 63; continue _fun00011 }
 58:
                oscard = verify;
                _fun00012_ip = 82; continue _fun00011;
 63:
                golfie = new Array(0);
                offset = 0;
                romeon = golfie;
                yankee = verify;
                option = arraySpread(romeon, yankee, offset);
                oscard = golfie;
 82:
                entity['_array'] = oscard;
                option = tangon._map;
                if(report) { _fun00012_ip = 102; continue _fun00011 }
 97:
                oscard = option;
                _fun00012_ip = 117; continue _fun00011;
 102:
                golfie = {};
                romeon = golfie;
                yankee = option;
                option = copyDataProperties(romeon, yankee);
                oscard = golfie;
 117:
                entity['_map'] = oscard;
                option = tangon._after;
                if(report) { _fun00012_ip = 137; continue _fun00011 }
 132:
                oscard = option;
                _fun00012_ip = 147; continue _fun00011;
 137:
                golfie = option.clone;
                oscard = golfie.bind(option)();
 147:
                entity['_after'] = oscard;
                golfie = tangon._before;
                if(report) { _fun00012_ip = 167; continue _fun00011 }
 162:
                report = golfie;
                _fun00012_ip = 177; continue _fun00011;
 167:
                oscard = golfie.clone;
                report = oscard.bind(golfie)();
 177:
                entity['_before'] = report;
                report = global;
                report = report.Function;
                report = zuuluu instanceof report;
                if(report) { _fun00012_ip = 823; continue _fun00011 }
 201:
                oscard = 'object';
                report = typeof zuuluu;
                if(!(oscard === report)) { _fun00012_ip = 1055; continue _fun00011 }
 215:
                report = zuuluu.ready;
                if(!(michal === report)) { _fun00012_ip = 233; continue _fun00011 }
 225:
                report = tangon.ready;
                _fun00012_ip = 245; continue _fun00011;
 233:
                golfie = zuuluu.ready;
                oscard = true;
                report = oscard === golfie;
 245:
                entity['ready'] = report;
                report = zuuluu.jumpType;
                if(!(michal === report)) { _fun00012_ip = 269; continue _fun00011 }
 261:
                report = tangon.jumpType;
                _fun00012_ip = 275; continue _fun00011;
 269:
                report = zuuluu.jumpType;
 275:
                entity['jumpType'] = report;
                report = zuuluu.jumpTargetId;
                if(!(michal === report)) { _fun00012_ip = 299; continue _fun00011 }
 291:
                report = tangon.jumpTargetId;
                _fun00012_ip = 305; continue _fun00011;
 299:
                report = zuuluu.jumpTargetId;
 305:
                entity['jumpTargetId'] = report;
                report = zuuluu.jumpTargetOffset;
                if(!(michal === report)) { _fun00012_ip = 329; continue _fun00011 }
 321:
                report = tangon.jumpTargetOffset;
                _fun00012_ip = 335; continue _fun00011;
 329:
                report = zuuluu.jumpTargetOffset;
 335:
                entity['jumpTargetOffset'] = report;
                report = zuuluu.jumpSequenceId;
                if(!(michal === report)) { _fun00012_ip = 359; continue _fun00011 }
 351:
                report = tangon.jumpSequenceId;
                _fun00012_ip = 365; continue _fun00011;
 359:
                report = zuuluu.jumpSequenceId;
 365:
                entity['jumpSequenceId'] = report;
                report = zuuluu.jumped;
                if(!(michal === report)) { _fun00012_ip = 389; continue _fun00011 }
 381:
                report = tangon.jumped;
                _fun00012_ip = 401; continue _fun00011;
 389:
                golfie = zuuluu.jumped;
                oscard = true;
                report = oscard === golfie;
 401:
                entity['jumped'] = report;
                report = zuuluu.jumpedToPresent;
                if(!(michal === report)) { _fun00012_ip = 425; continue _fun00011 }
 417:
                report = tangon.jumpedToPresent;
                _fun00012_ip = 437; continue _fun00011;
 425:
                golfie = zuuluu.jumpedToPresent;
                oscard = true;
                report = oscard === golfie;
 437:
                entity['jumpedToPresent'] = report;
                report = zuuluu.jumpFlash;
                if(!(michal === report)) { _fun00012_ip = 461; continue _fun00011 }
 453:
                report = tangon.jumpFlash;
                _fun00012_ip = 473; continue _fun00011;
 461:
                golfie = zuuluu.jumpFlash;
                oscard = true;
                report = oscard === golfie;
 473:
                entity['jumpFlash'] = report;
                report = zuuluu.jumpReturnTargetId;
                if(!(michal === report)) { _fun00012_ip = 497; continue _fun00011 }
 489:
                report = tangon.jumpReturnTargetId;
                _fun00012_ip = 503; continue _fun00011;
 497:
                report = zuuluu.jumpReturnTargetId;
 503:
                entity['jumpReturnTargetId'] = report;
                report = zuuluu.focusTargetId;
                if(!(michal === report)) { _fun00012_ip = 527; continue _fun00011 }
 519:
                report = tangon.focusTargetId;
                _fun00012_ip = 533; continue _fun00011;
 527:
                report = zuuluu.focusTargetId;
 533:
                entity['focusTargetId'] = report;
                report = zuuluu.focusSequenceId;
                if(!(michal === report)) { _fun00012_ip = 557; continue _fun00011 }
 549:
                report = tangon.focusSequenceId;
                _fun00012_ip = 563; continue _fun00011;
 557:
                report = zuuluu.focusSequenceId;
 563:
                entity['focusSequenceId'] = report;
                report = zuuluu.hasMoreBefore;
                if(!(michal === report)) { _fun00012_ip = 587; continue _fun00011 }
 579:
                report = tangon.hasMoreBefore;
                _fun00012_ip = 599; continue _fun00011;
 587:
                golfie = zuuluu.hasMoreBefore;
                oscard = true;
                report = oscard === golfie;
 599:
                entity['hasMoreBefore'] = report;
                report = zuuluu.hasMoreAfter;
                if(!(michal === report)) { _fun00012_ip = 623; continue _fun00011 }
 615:
                report = tangon.hasMoreAfter;
                _fun00012_ip = 635; continue _fun00011;
 623:
                golfie = zuuluu.hasMoreAfter;
                oscard = true;
                report = oscard === golfie;
 635:
                entity['hasMoreAfter'] = report;
                report = zuuluu.loadingMore;
                if(!(michal === report)) { _fun00012_ip = 659; continue _fun00011 }
 651:
                report = tangon.loadingMore;
                _fun00012_ip = 665; continue _fun00011;
 659:
                report = zuuluu.loadingMore;
 665:
                entity['loadingMore'] = report;
                report = zuuluu.revealedMessageId;
                if(!(michal === report)) { _fun00012_ip = 689; continue _fun00011 }
 681:
                report = tangon.revealedMessageId;
                _fun00012_ip = 695; continue _fun00011;
 689:
                report = zuuluu.revealedMessageId;
 695:
                entity['revealedMessageId'] = report;
                report = zuuluu.cached;
                if(!(michal === report)) { _fun00012_ip = 719; continue _fun00011 }
 711:
                report = tangon.cached;
                _fun00012_ip = 725; continue _fun00011;
 719:
                report = zuuluu.cached;
 725:
                entity['cached'] = report;
                report = zuuluu.hasFetched;
                if(!(michal === report)) { _fun00012_ip = 749; continue _fun00011 }
 741:
                report = tangon.hasFetched;
                _fun00012_ip = 755; continue _fun00011;
 749:
                report = zuuluu.hasFetched;
 755:
                entity['hasFetched'] = report;
                report = zuuluu.error;
                if(!(michal === report)) { _fun00012_ip = 777; continue _fun00011 }
 770:
                report = tangon.error;
                _fun00012_ip = 782; continue _fun00011;
 777:
                report = zuuluu.error;
 782:
                entity['error'] = report;
                report = zuuluu.initialScrollSequenceId;
                if(!(michal === report)) { _fun00012_ip = 806; continue _fun00011 }
 798:
                report = tangon.initialScrollSequenceId;
                _fun00012_ip = 812; continue _fun00011;
 806:
                report = zuuluu.initialScrollSequenceId;
 812:
                entity['initialScrollSequenceId'] = report;
                _fun00012_ip = 1055; continue _fun00011;
 823:
                report = tangon.ready;
                entity['ready'] = report;
                report = tangon.jumpType;
                entity['jumpType'] = report;
                report = tangon.jumpTargetId;
                entity['jumpTargetId'] = report;
                report = tangon.jumpTargetOffset;
                entity['jumpTargetOffset'] = report;
                report = tangon.jumpSequenceId;
                entity['jumpSequenceId'] = report;
                report = tangon.jumped;
                entity['jumped'] = report;
                report = tangon.jumpedToPresent;
                entity['jumpedToPresent'] = report;
                report = tangon.jumpFlash;
                entity['jumpFlash'] = report;
                report = tangon.jumpReturnTargetId;
                entity['jumpReturnTargetId'] = report;
                report = tangon.focusTargetId;
                entity['focusTargetId'] = report;
                report = tangon.focusSequenceId;
                entity['focusSequenceId'] = report;
                report = tangon.hasMoreBefore;
                entity['hasMoreBefore'] = report;
                report = tangon.hasMoreAfter;
                entity['hasMoreAfter'] = report;
                report = tangon.loadingMore;
                entity['loadingMore'] = report;
                report = tangon.revealedMessageId;
                entity['revealedMessageId'] = report;
                report = tangon.cached;
                entity['cached'] = report;
                report = tangon.hasFetched;
                entity['hasFetched'] = report;
                report = tangon.error;
                entity['error'] = report;
                tangon = tangon.initialScrollSequenceId;
                entity['initialScrollSequenceId'] = tangon;
                michal = zuuluu.bind(michal)(entity);
 1055:
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu = new Array(45);
        zuuluu[0] = entity;
        entity = {};
        michal = 'length';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity._array;
            entity = entity.length;
            return entity;
        };
        entity['get'] = michal;
        zuuluu[1] = entity;
        entity = {};
        michal = 'toArray';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            report = entity._array;
            entity = new Array(0);
            tangon = 0;
            oscard = entity;
            michal = arraySpread(oscard, report, tangon);
            return entity;
        };
        entity['value'] = michal;
        zuuluu[2] = entity;
        entity = {};
        michal = 'forEach';
        entity['key'] = michal;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                option = argFoo;
                golfie = argBar;
                michal = arguments[2];
                entity = undefined;
                if(!(michal === entity)) { _fun00014_ip = 17; continue _fun00013 }
 15:
                michal = false;
 17:
                zuuluu = this;
                oscard = zuuluu._array;
                if(michal) { _fun00014_ip = 42; continue _fun00013 }
 29:
                michal = oscard.forEach;
                michal = michal.bind(oscard)(option, golfie);
                _fun00014_ip = 112; continue _fun00013;
 42:
                zuuluu = oscard.length;
                michal = 1;
                zuuluu = zuuluu - michal;
                report = 0;
                if(!(zuuluu >= report)) { _fun00014_ip = 112; continue _fun00013 }
 60:
                tangon = option.call;
                michal = oscard[zuuluu];
                michal = tangon.bind(option)(golfie, michal, zuuluu);
                tangon = false;
                if(!(tangon !== michal)) { _fun00014_ip = 112; continue _fun00013 }
 82:
                verify = zuuluu - 1;
                if(!(verify >= report)) { _fun00014_ip = 112; continue _fun00013 }
 89:
                offset = option.call;
                michal = oscard[verify];
                michal = offset.bind(option)(golfie, michal, verify);
                zuuluu = verify;
                if(tangon !== michal) { _fun00014_ip = 82; continue _fun00013 }
 112:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[3] = entity;
        entity = {};
        golfie = 'reduce';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity._array;
            zuuluu = tangon.reduce;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[4] = entity;
        entity = {};
        golfie = 'some';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity._array;
            zuuluu = tangon.some;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[5] = entity;
        entity = {};
        golfie = 'filter';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity._array;
            zuuluu = tangon.filter;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[6] = entity;
        entity = {};
        golfie = 'forAll';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            zuuluu = argBar;
            entity = this;
            report = entity._before;
            michal = report.forEach;
            michal = michal.bind(report)(tangon, zuuluu);
            report = entity._array;
            michal = report.forEach;
            michal = michal.bind(report)(tangon, zuuluu);
            michal = entity._after;
            entity = michal.forEach;
            entity = entity.bind(michal)(tangon, zuuluu);
            entity = undefined;
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[7] = entity;
        entity = {};
        golfie = 'findOldest';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                michal = this;
                tangon = _closure1_slot1;
                entity = _closure1_slot3;
                golfie = 6;
                entity = entity[golfie];
                oscard = undefined;
                option = tangon.bind(oscard)(entity);
                tangon = option.find;
                entity = michal._before;
                entity = entity._messages;
                entity = tangon.bind(option)(entity, report);
                tangon = null;
                if(!(tangon == entity)) { _fun00016_ip = 94; continue _fun00015 }
 60:
                verify = _closure1_slot1;
                option = _closure1_slot3;
                option = option[golfie];
                offset = verify.bind(oscard)(option);
                verify = offset.find;
                option = michal._array;
                entity = verify.bind(offset)(option, report);
 94:
                if(!(tangon == entity)) { _fun00016_ip = 138; continue _fun00015 }
 98:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu[golfie];
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.find;
                michal = michal._after;
                michal = michal._messages;
                entity = zuuluu.bind(tangon)(michal, report);
 138:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[8] = entity;
        entity = {};
        golfie = 'findNewest';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                michal = this;
                tangon = _closure1_slot1;
                entity = _closure1_slot3;
                golfie = 6;
                entity = entity[golfie];
                oscard = undefined;
                option = tangon.bind(oscard)(entity);
                tangon = option.findLast;
                entity = michal._after;
                entity = entity._messages;
                entity = tangon.bind(option)(entity, report);
                tangon = null;
                if(!(tangon == entity)) { _fun00018_ip = 96; continue _fun00017 }
 61:
                verify = _closure1_slot1;
                option = _closure1_slot3;
                option = option[golfie];
                offset = verify.bind(oscard)(option);
                verify = offset.findLast;
                option = michal._array;
                entity = verify.bind(offset)(option, report);
 96:
                if(!(tangon == entity)) { _fun00018_ip = 141; continue _fun00017 }
 100:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu[golfie];
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = tangon.findLast;
                michal = michal._before;
                michal = michal._messages;
                entity = zuuluu.bind(tangon)(michal, report);
 141:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[9] = entity;
        entity = {};
        golfie = 'map';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            entity = this;
            tangon = entity._array;
            zuuluu = tangon.map;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[10] = entity;
        entity = {};
        golfie = 'first';
        entity['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity._array;
            entity = 0;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[11] = entity;
        entity = {};
        golfie = 'last';
        entity['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity._array;
            entity = entity._array;
            zuuluu = entity.length;
            entity = 1;
            entity = zuuluu - entity;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[12] = entity;
        entity = {};
        option = 'get';
        entity['key'] = option;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = argFoo;
                michal = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00020_ip = 17; continue _fun00019 }
 15:
                michal = false;
 17:
                entity = zuuluu._map;
                oscard = entity[report];
                tangon = null;
                entity = oscard;
                if(!(tangon == oscard)) { _fun00020_ip = 81; continue _fun00019 }
 36:
                entity = oscard;
                if(!michal) { _fun00020_ip = 81; continue _fun00019 }
 42:
                oscard = zuuluu._before;
                michal = oscard.get;
                michal = michal.bind(oscard)(report);
                if(!(tangon == michal)) { _fun00020_ip = 78; continue _fun00019 }
 62:
                tangon = zuuluu._after;
                zuuluu = tangon.get;
                michal = zuuluu.bind(tangon)(report);
 78:
                entity = michal;
 81:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[13] = entity;
        entity = {};
        golfie = 'getByIndex';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            michal = entity._array;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[14] = entity;
        entity = {};
        golfie = 'getAfter';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = this;
                michal = tangon.get;
                entity = argFoo;
                report = michal.bind(tangon)(entity);
                entity = null;
                if(!(entity != report)) { _fun00022_ip = 85; continue _fun00021 }
 22:
                zuuluu = tangon._array;
                michal = zuuluu.indexOf;
                report = michal.bind(zuuluu)(report);
                zuuluu = -1;
                michal = null;
                if(!(zuuluu !== report)) { _fun00022_ip = 83; continue _fun00021 }
 51:
                oscard = tangon.length;
                zuuluu = 1;
                oscard = oscard - zuuluu;
                michal = null;
                if(!(report !== oscard)) { _fun00022_ip = 83; continue _fun00021 }
 69:
                tangon = tangon._array;
                zuuluu = report + zuuluu;
                michal = tangon[zuuluu];
 83:
                return michal;
 85:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[15] = entity;
        entity = {};
        golfie = 'getManyAfter';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                option = argBar;
                golfie = argBaz;
                oscard = this;
                michal = oscard.get;
                entity = argFoo;
                tangon = michal.bind(oscard)(entity);
                entity = null;
                if(!(entity != tangon)) { _fun00024_ip = 184; continue _fun00023 }
 31:
                zuuluu = oscard._array;
                michal = zuuluu.indexOf;
                report = michal.bind(zuuluu)(tangon);
                zuuluu = -1;
                if(!(zuuluu !== report)) { _fun00024_ip = 182; continue _fun00023 }
 61:
                michal = new Array(0);
                tangon = 1;
                verify = report + tangon;
                tangon = oscard.length;
                if(!(verify < tangon)) { _fun00024_ip = 180; continue _fun00023 }
 81:
                report = zuuluu === option;
                tangon = verify;
                if(report) { _fun00024_ip = 103; continue _fun00023 }
 91:
                zuuluu = michal.length;
                tangon = verify;
                if(!(zuuluu < option)) { _fun00024_ip = 180; continue _fun00023 }
 103:
                zuuluu = entity == golfie;
                if(zuuluu) { _fun00024_ip = 127; continue _fun00023 }
 110:
                verify = oscard._array;
                offset = verify[tangon];
                verify = undefined;
                zuuluu = golfie.bind(verify)(offset);
 127:
                if(!zuuluu) { _fun00024_ip = 150; continue _fun00023 }
 130:
                verify = michal.push;
                zuuluu = oscard._array;
                zuuluu = zuuluu[tangon];
                zuuluu = verify.bind(michal)(zuuluu);
 150:
                verify = tangon + 1;
                zuuluu = oscard.length;
                if(!(verify < zuuluu)) { _fun00024_ip = 180; continue _fun00023 }
 162:
                tangon = verify;
                if(report) { _fun00024_ip = 103; continue _fun00023 }
 168:
                zuuluu = michal.length;
                tangon = verify;
                if(zuuluu < option) { _fun00024_ip = 103; continue _fun00023 }
 180:
                return michal;
 182:
                return entity;
 184:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[16] = entity;
        entity = {};
        golfie = 'getManyBefore';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                verify = argBar;
                option = argBaz;
                golfie = this;
                michal = golfie.get;
                entity = argFoo;
                tangon = michal.bind(golfie)(entity);
                entity = null;
                if(!(entity != tangon)) { _fun00026_ip = 174; continue _fun00025 }
 31:
                zuuluu = golfie._array;
                michal = zuuluu.indexOf;
                report = michal.bind(zuuluu)(tangon);
                zuuluu = -1;
                if(!(zuuluu !== report)) { _fun00026_ip = 172; continue _fun00025 }
 58:
                michal = new Array(0);
                tangon = 1;
                offset = report - tangon;
                oscard = 0;
                if(!(offset >= oscard)) { _fun00026_ip = 170; continue _fun00025 }
 75:
                report = zuuluu === verify;
                tangon = offset;
                if(report) { _fun00026_ip = 97; continue _fun00025 }
 85:
                zuuluu = michal.length;
                tangon = offset;
                if(!(zuuluu < verify)) { _fun00026_ip = 170; continue _fun00025 }
 97:
                zuuluu = entity == option;
                if(zuuluu) { _fun00026_ip = 121; continue _fun00025 }
 104:
                offset = golfie._array;
                yankee = offset[tangon];
                offset = undefined;
                zuuluu = option.bind(offset)(yankee);
 121:
                if(!zuuluu) { _fun00026_ip = 145; continue _fun00025 }
 124:
                offset = michal.unshift;
                zuuluu = golfie._array;
                zuuluu = zuuluu[tangon];
                zuuluu = offset.bind(michal)(zuuluu);
 145:
                offset = tangon - 1;
                if(!(offset >= oscard)) { _fun00026_ip = 170; continue _fun00025 }
 152:
                tangon = offset;
                if(report) { _fun00026_ip = 97; continue _fun00025 }
 158:
                zuuluu = michal.length;
                tangon = offset;
                if(zuuluu < verify) { _fun00026_ip = 97; continue _fun00025 }
 170:
                return michal;
 172:
                return entity;
 174:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[17] = entity;
        entity = {};
        golfie = 'has';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                oscard = argFoo;
                michal = arguments[1];
                tangon = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00028_ip = 17; continue _fun00027 }
 15:
                michal = true;
 17:
                entity = tangon._map;
                zuuluu = entity[oscard];
                entity = null;
                entity = entity != zuuluu;
                if(entity) { _fun00028_ip = 80; continue _fun00027 }
 36:
                if(!michal) { _fun00028_ip = 77; continue _fun00027 }
 39:
                report = tangon._before;
                zuuluu = report.has;
                zuuluu = zuuluu.bind(report)(oscard);
                if(zuuluu) { _fun00028_ip = 74; continue _fun00027 }
 58:
                report = tangon._after;
                tangon = report.has;
                zuuluu = tangon.bind(report)(oscard);
 74:
                michal = zuuluu;
 77:
                entity = michal;
 80:
                return entity;
            }
        };
        entity['value'] = golfie;
        zuuluu[18] = entity;
        entity = {};
        golfie = 'indexOf';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = -1;
            var _closure3_slot1 = michal;
            michal = this;
            tangon = michal._array;
            zuuluu = tangon.find;
            michal = function(argFoo, argBar) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00030_ip = 31; continue _fun00029 }
 22:
                    michal = argBar;
                    _closure3_slot1 = michal;
                    entity = true;
 31:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure3_slot1;
            return entity;
        };
        entity['value'] = golfie;
        zuuluu[19] = entity;
        entity = {};
        golfie = 'hasPresent';
        entity['key'] = golfie;
        verify = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = this;
                entity = michal._after;
                zuuluu = entity.length;
                entity = 0;
                entity = zuuluu > entity;
                if(!entity) { _fun00032_ip = 35; continue _fun00031 }
 23:
                zuuluu = michal._after;
                entity = zuuluu.wasAtEdge;
 35:
                if(entity) { _fun00032_ip = 47; continue _fun00031 }
 38:
                michal = michal.hasMoreAfter;
                entity = !michal;
 47:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[20] = entity;
        entity = {};
        verify = 'hasBeforeCached';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                michal = this;
                entity = michal.length;
                zuuluu = 0;
                if(!(entity > zuuluu)) { _fun00034_ip = 29; continue _fun00033 }
 14:
                entity = michal._before;
                entity = entity.length;
                if(!(!(entity > zuuluu))) { _fun00034_ip = 33; continue _fun00033 }
 29:
                entity = false;
                return entity;
 33:
                entity = michal.first;
                michal = entity.bind(michal)();
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00034_ip = 64; continue _fun00033 }
 52:
                zuuluu = michal.id;
                michal = argFoo;
                entity = zuuluu === michal;
 64:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[21] = entity;
        entity = {};
        verify = 'hasAfterCached';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                michal = this;
                entity = michal.length;
                zuuluu = 0;
                if(!(entity > zuuluu)) { _fun00036_ip = 29; continue _fun00035 }
 14:
                entity = michal._after;
                entity = entity.length;
                if(!(!(entity > zuuluu))) { _fun00036_ip = 33; continue _fun00035 }
 29:
                entity = false;
                return entity;
 33:
                entity = michal.last;
                michal = entity.bind(michal)();
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00036_ip = 64; continue _fun00035 }
 52:
                zuuluu = michal.id;
                michal = argFoo;
                entity = zuuluu === michal;
 64:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[22] = entity;
        entity = {};
        verify = 'update';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tangon = argFoo;
                oscard = argBar;
                report = this;
                var _closure3_slot0 = tangon;
                var _closure3_slot1 = oscard;
                entity = report._map;
                zuuluu = entity[tangon];
                var _closure3_slot2 = zuuluu;
                entity = null;
                if(!(entity != zuuluu)) { _fun00038_ip = 71; continue _fun00037 }
 39:
                entity = undefined;
                entity = oscard.bind(entity)(zuuluu);
                var _closure3_slot3 = entity;
                oscard = report.mutate;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    oscard = michal._map;
                    report = _closure3_slot2;
                    tangon = report.id;
                    zuuluu = _closure3_slot3;
                    oscard[tangon] = zuuluu;
                    zuuluu = michal._array;
                    tangon = michal._array;
                    michal = tangon.indexOf;
                    michal = michal.bind(tangon)(report);
                    entity = _closure3_slot3;
                    zuuluu[michal] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = oscard.bind(report)(zuuluu, entity);
                return entity;
 71:
                zuuluu = report._before;
                entity = zuuluu.has;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00038_ip = 133; continue _fun00037 }
 90:
                zuuluu = report._after;
                entity = zuuluu.has;
                zuuluu = entity.bind(zuuluu)(tangon);
                entity = report;
                if(!zuuluu) { _fun00038_ip = 131; continue _fun00037 }
 112:
                oscard = report.mutate;
                tangon = function(argFoo) {
                    entity = argFoo;
                    tangon = entity._after;
                    zuuluu = tangon.update;
                    michal = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu = true;
                entity = oscard.bind(report)(tangon, zuuluu);
 131:
                _fun00038_ip = 152; continue _fun00037;
 133:
                tangon = report.mutate;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    tangon = entity._before;
                    zuuluu = tangon.update;
                    michal = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                michal = true;
                entity = tangon.bind(report)(zuuluu, michal);
 152:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[23] = entity;
        entity = {};
        verify = 'replace';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                report = argFoo;
                oscard = this;
                var _closure3_slot0 = report;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = oscard._map;
                michal = entity[report];
                var _closure3_slot2 = michal;
                entity = null;
                if(!(entity != michal)) { _fun00040_ip = 60; continue _fun00039 }
 39:
                tangon = oscard.mutate;
                michal = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = tangon._map;
                    michal = _closure3_slot0;
                    michal = delete zuuluu[michal];
                    report = tangon._map;
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.id;
                    report[michal] = zuuluu;
                    michal = tangon._array;
                    report = tangon._array;
                    tangon = report.indexOf;
                    entity = _closure3_slot2;
                    entity = tangon.bind(report)(entity);
                    michal[entity] = zuuluu;
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = tangon.bind(oscard)(michal, entity);
                _fun00040_ip = 144; continue _fun00039;
 60:
                tangon = oscard._before;
                michal = tangon.has;
                michal = michal.bind(tangon)(report);
                if(michal) { _fun00040_ip = 122; continue _fun00039 }
 79:
                tangon = oscard._after;
                michal = tangon.has;
                tangon = michal.bind(tangon)(report);
                michal = oscard;
                if(!tangon) { _fun00040_ip = 120; continue _fun00039 }
 101:
                golfie = oscard.mutate;
                report = function(argFoo) {
                    entity = argFoo;
                    tangon = entity._after;
                    zuuluu = tangon.replace;
                    michal = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                tangon = true;
                michal = golfie.bind(oscard)(report, tangon);
 120:
                _fun00040_ip = 141; continue _fun00039;
 122:
                report = oscard.mutate;
                tangon = function(argFoo) {
                    entity = argFoo;
                    tangon = entity._before;
                    zuuluu = tangon.replace;
                    michal = _closure3_slot0;
                    entity = _closure3_slot1;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu = true;
                michal = report.bind(oscard)(tangon, zuuluu);
 141:
                entity = michal;
 144:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[24] = entity;
        entity = {};
        verify = 'remove';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = tangon.mutate;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity._map;
                zuuluu = _closure3_slot0;
                michal = delete michal[zuuluu];
                report = entity._array;
                tangon = report.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = michal !== entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                entity['_array'] = michal;
                tangon = entity._before;
                michal = tangon.remove;
                michal = michal.bind(tangon)(zuuluu);
                michal = entity._after;
                entity = michal.remove;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
            };
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = verify;
        zuuluu[25] = entity;
        entity = {};
        verify = 'removeMany';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                tangon = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = tangon;
                zuuluu = tangon.some;
                entity = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = report;
                if(!zuuluu) { _fun00042_ip = 57; continue _fun00041 }
 38:
                tangon = report.mutate;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    report = _closure1_slot1;
                    tangon = _closure1_slot3;
                    entity = 6;
                    tangon = tangon[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.each;
                    tangon = _closure3_slot1;
                    report = function(argFoo) {
                        entity = _closure4_slot0;
                        michal = entity._map;
                        entity = argFoo;
                        entity = delete michal[entity];
                        entity = undefined;
                        return entity;
                    };
                    report = oscard.bind(golfie)(tangon, report);
                    oscard = michal._array;
                    report = oscard.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.indexOf;
                        entity = argFoo;
                        entity = entity.id;
                        michal = michal.bind(zuuluu)(entity);
                        entity = -1;
                        entity = entity === michal;
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(zuuluu);
                    michal['_array'] = zuuluu;
                    report = michal._before;
                    zuuluu = report.removeMany;
                    zuuluu = zuuluu.bind(report)(tangon);
                    zuuluu = michal._after;
                    michal = zuuluu.removeMany;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                };
                michal = true;
                entity = tangon.bind(report)(zuuluu, michal);
 57:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[26] = entity;
        entity = {};
        verify = 'merge';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                report = arguments[1];
                michal = arguments[2];
                tangon = this;
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                zuuluu = undefined;
                if(!(report === zuuluu)) { _fun00044_ip = 26; continue _fun00043 }
 24:
                report = false;
 26:
                var _closure3_slot1 = report;
                if(!(michal === zuuluu)) { _fun00044_ip = 36; continue _fun00043 }
 34:
                michal = false;
 36:
                var _closure3_slot2 = michal;
                zuuluu = tangon.mutate;
                michal = function(argFoo) {
                    report = argFoo;
                    tangon = report._merge;
                    zuuluu = _closure3_slot0;
                    michal = _closure3_slot1;
                    entity = _closure3_slot2;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    entity = undefined;
                    return entity;
                };
                entity = true;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[27] = entity;
        entity = {};
        verify = '_merge';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                golfie = argFoo;
                michal = arguments[1];
                tangon = arguments[2];
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                entity = undefined;
                if(!(michal === entity)) { _fun00046_ip = 26; continue _fun00045 }
 24:
                michal = false;
 26:
                if(!(tangon === entity)) { _fun00046_ip = 32; continue _fun00045 }
 30:
                tangon = false;
 32:
                oscard = golfie.filter;
                report = function(argFoo) {
                    _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                        tangon = argFoo;
                        entity = _closure3_slot0;
                        report = entity._map;
                        zuuluu = tangon.id;
                        oscard = report[zuuluu];
                        zuuluu = entity._map;
                        entity = tangon.id;
                        zuuluu[entity] = tangon;
                        entity = null;
                        entity = entity == oscard;
                        if(entity) { _fun00048_ip = 82; continue _fun00047 }
 49:
                        michal = _closure3_slot0;
                        zuuluu = michal._array;
                        report = michal._array;
                        michal = report.indexOf;
                        michal = michal.bind(report)(oscard);
                        zuuluu[michal] = tangon;
                        entity = false;
 82:
                        return entity;
                    }
                };
                oscard = oscard.bind(golfie)(report);
                if(!tangon) { _fun00046_ip = 77; continue _fun00045 }
 50:
                if(michal) { _fun00046_ip = 61; continue _fun00045 }
 53:
                report = zuuluu._after;
                _fun00046_ip = 67; continue _fun00045;
 61:
                report = zuuluu._before;
 67:
                tangon = report.clear;
                tangon = tangon.bind(report)();
 77:
                tangon = new Array(0);
                if(michal) { _fun00046_ip = 114; continue _fun00045 }
 84:
                verify = zuuluu._array;
                offset = tangon;
                option = 0;
                option = arraySpread(offset, verify, option);
                offset = tangon;
                verify = oscard;
                michal = arraySpread(offset, verify, option);
                michal = tangon;
                _fun00046_ip = 142; continue _fun00045;
 114:
                offset = tangon;
                verify = oscard;
                option = 0;
                option = arraySpread(offset, verify, option);
                verify = zuuluu._array;
                offset = tangon;
                report = arraySpread(offset, verify, option);
                michal = tangon;
 142:
                zuuluu['_array'] = michal;
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[28] = entity;
        entity = {};
        verify = 'mergeDelta';
        entity['key'] = verify;
        verify = function() { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                oscard = arguments[0];
                report = arguments[1];
                michal = arguments[2];
                zuuluu = this;
                tangon = undefined;
                if(!(oscard === tangon)) { _fun00050_ip = 24; continue _fun00049 }
 20:
                oscard = new Array(0);
 24:
                var _closure3_slot0 = oscard;
                if(!(report === tangon)) { _fun00050_ip = 36; continue _fun00049 }
 32:
                report = new Array(0);
 36:
                var _closure3_slot1 = report;
                if(!(michal === tangon)) { _fun00050_ip = 48; continue _fun00049 }
 44:
                michal = new Array(0);
 48:
                var _closure3_slot2 = michal;
                michal = zuuluu.mutate;
                entity = function(argFoo) {
                    michal = argFoo;
                    tangon = michal._before;
                    zuuluu = tangon.clear;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = michal._after;
                    zuuluu = tangon.clear;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = global;
                    oscard = zuuluu.Set;
                    offset = _closure3_slot2;
                    report = oscard.prototype;
                    report = Object.create(report, {constructor: {value: oscard}});
                    yankee = report;
                    tangon = new yankee[oscard](offset, verify);
                    tangon = tangon instanceof Object ? tangon : report;
                    var _closure4_slot0 = tangon;
                    golfie = _closure3_slot0;
                    report = golfie.forEach;
                    tangon = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.add;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = report.bind(golfie)(tangon);
                    option = _closure3_slot1;
                    tangon = option.forEach;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.add;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = tangon.bind(option)(zuuluu);
                    report = michal._array;
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure4_slot0;
                        michal = zuuluu.has;
                        entity = argFoo;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    oscard = tangon.bind(report)(zuuluu);
                    report = oscard.concat;
                    tangon = golfie.map;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.createMessageRecord;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = tangon.bind(golfie)(zuuluu);
                    golfie = option.map;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.createMessageRecord;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    zuuluu = golfie.bind(option)(zuuluu);
                    tangon = report.bind(oscard)(tangon, zuuluu);
                    zuuluu = tangon.sort;
                    entity = function(argFoo, argBar) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    michal['_array'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[29] = entity;
        entity = {};
        verify = '_clearMessages';
        entity['key'] = verify;
        verify = function() { // Original name: value
            michal = this;
            entity = new Array(0);
            michal['_array'] = entity;
            entity = {};
            michal['_map'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = verify;
        zuuluu[30] = entity;
        entity = {};
        verify = 'reset';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = zuuluu.mutate;
            entity = function(argFoo) {
                entity = argFoo;
                var _closure4_slot0 = entity;
                tangon = _closure3_slot0;
                entity['_array'] = tangon;
                zuuluu = {};
                entity['_map'] = zuuluu;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = _closure4_slot0;
                    zuuluu = michal._map;
                    michal = entity.id;
                    zuuluu[michal] = entity;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = entity._before;
                michal = zuuluu.clear;
                michal = michal.bind(zuuluu)();
                michal = entity._after;
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = verify;
        zuuluu[31] = entity;
        entity = {};
        verify = 'truncateTop';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                report = arguments[1];
                tangon = this;
                entity = undefined;
                if(!(report === entity)) { _fun00052_ip = 16; continue _fun00051 }
 14:
                report = true;
 16:
                var _closure3_slot0 = entity;
                entity = tangon._array;
                zuuluu = entity.length;
                entity = argFoo;
                oscard = zuuluu - entity;
                _closure3_slot0 = oscard;
                zuuluu = 0;
                entity = tangon;
                if(!(!(oscard <= zuuluu))) { _fun00052_ip = 68; continue _fun00051 }
 51:
                zuuluu = tangon.mutate;
                michal = function(argFoo) {
                    _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                        michal = argFoo;
                        zuuluu = _closure3_slot0;
                        option = 0;
                        zuuluu = option < zuuluu;
                        tangon = 0;
                        if(!zuuluu) { _fun00054_ip = 57; continue _fun00053 }
 21:
                        report = michal._map;
                        zuuluu = michal._array;
                        zuuluu = zuuluu[tangon];
                        zuuluu = zuuluu.id;
                        zuuluu = delete report[zuuluu];
                        tangon = tangon + 1;
                        zuuluu = _closure3_slot0;
                        if(tangon < zuuluu) { _fun00054_ip = 21; continue _fun00053 }
 57:
                        oscard = michal._before;
                        report = oscard.cache;
                        golfie = michal._array;
                        tangon = golfie.slice;
                        zuuluu = _closure3_slot0;
                        tangon = tangon.bind(golfie)(option, zuuluu);
                        zuuluu = michal.hasMoreBefore;
                        zuuluu = !zuuluu;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        tangon = michal._array;
                        zuuluu = tangon.slice;
                        entity = _closure3_slot0;
                        entity = zuuluu.bind(tangon)(entity);
                        michal['_array'] = entity;
                        entity = true;
                        michal['hasMoreBefore'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, report);
 68:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[32] = entity;
        entity = {};
        verify = 'truncateBottom';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            entity = this;
            return entity;
        };
        entity['value'] = verify;
        zuuluu[33] = entity;
        entity = {};
        verify = 'jumpToPresent';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = tangon.mutate;
            michal = function(argFoo) {
                michal = argFoo;
                zuuluu = michal._after;
                entity = zuuluu.extractAll;
                golfie = entity.bind(zuuluu)();
                entity = false;
                michal['hasMoreAfter'] = entity;
                zuuluu = global;
                oscard = zuuluu.Math;
                tangon = oscard.max;
                report = golfie.length;
                zuuluu = _closure3_slot0;
                zuuluu = report - zuuluu;
                report = 0;
                oscard = tangon.bind(oscard)(zuuluu, report);
                zuuluu = golfie.slice;
                tangon = zuuluu.bind(golfie)(oscard);
                zuuluu = golfie.splice;
                zuuluu = zuuluu.bind(golfie)(oscard);
                option = michal._before;
                oscard = option.cache;
                zuuluu = michal._array;
                zuuluu = oscard.bind(option)(zuuluu);
                oscard = michal._before;
                zuuluu = oscard.cache;
                zuuluu = zuuluu.bind(oscard)(golfie);
                zuuluu = michal._clearMessages;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = michal._merge;
                zuuluu = zuuluu.bind(michal)(tangon);
                zuuluu = michal._before;
                zuuluu = zuuluu.length;
                zuuluu = zuuluu > report;
                michal['hasMoreBefore'] = zuuluu;
                zuuluu = true;
                michal['jumped'] = zuuluu;
                tangon = null;
                michal['jumpTargetId'] = tangon;
                michal['jumpTargetOffset'] = report;
                michal['jumpedToPresent'] = zuuluu;
                michal['jumpFlash'] = entity;
                michal['jumpReturnTargetId'] = tangon;
                report = michal.jumpSequenceId;
                tangon = 1;
                tangon = report + tangon;
                michal['jumpSequenceId'] = tangon;
                michal['ready'] = zuuluu;
                michal['loadingMore'] = entity;
                entity = undefined;
                return entity;
            };
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = verify;
        zuuluu[34] = entity;
        entity = {};
        verify = 'jumpToMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                report = arguments[1];
                michal = arguments[3];
                tangon = this;
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                zuuluu = undefined;
                if(!(report === zuuluu)) { _fun00056_ip = 26; continue _fun00055 }
 24:
                report = true;
 26:
                var _closure3_slot1 = report;
                report = arguments[2];
                var _closure3_slot2 = report;
                if(!(michal === zuuluu)) { _fun00056_ip = 43; continue _fun00055 }
 41:
                michal = null;
 43:
                var _closure3_slot3 = michal;
                michal = arguments[4];
                var _closure3_slot4 = michal;
                zuuluu = tangon.mutate;
                michal = function(argFoo) {
                    _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                        michal = argFoo;
                        zuuluu = true;
                        michal['jumped'] = zuuluu;
                        entity = false;
                        michal['jumpedToPresent'] = entity;
                        report = _closure3_slot4;
                        option = null;
                        if(!(option == report)) { _fun00058_ip = 71; continue _fun00057 }
 32:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot3;
                        report = 7;
                        oscard = oscard[report];
                        report = undefined;
                        report = golfie.bind(report)(oscard);
                        report = report.JumpTypes;
                        report = report.ANIMATED;
                        _fun00058_ip = 75; continue _fun00057;
 71:
                        report = _closure3_slot4;
 75:
                        michal['jumpType'] = report;
                        report = _closure3_slot0;
                        michal['jumpTargetId'] = report;
                        oscard = option != report;
                        report = 0;
                        if(!oscard) { _fun00058_ip = 117; continue _fun00057 }
 100:
                        oscard = _closure3_slot2;
                        oscard = option != oscard;
                        report = 0;
                        if(!oscard) { _fun00058_ip = 117; continue _fun00057 }
 113:
                        report = _closure3_slot2;
 117:
                        michal['jumpTargetOffset'] = report;
                        oscard = michal.jumpSequenceId;
                        report = 1;
                        report = oscard + report;
                        michal['jumpSequenceId'] = report;
                        report = _closure3_slot1;
                        michal['jumpFlash'] = report;
                        tangon = _closure3_slot3;
                        michal['jumpReturnTargetId'] = tangon;
                        michal['ready'] = zuuluu;
                        michal['loadingMore'] = entity;
                        entity = undefined;
                        return entity;
                    }
                };
                entity = false;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[35] = entity;
        entity = {};
        verify = 'focusOnMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = tangon.mutate;
            michal = function(argFoo) {
                michal = argFoo;
                entity = _closure3_slot0;
                michal['focusTargetId'] = entity;
                zuuluu = michal.focusSequenceId;
                entity = 1;
                entity = zuuluu + entity;
                michal['focusSequenceId'] = entity;
                entity = true;
                michal['ready'] = entity;
                entity = false;
                michal['loadingMore'] = entity;
                entity = undefined;
                return entity;
            };
            entity = false;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = verify;
        zuuluu[36] = entity;
        entity = {};
        verify = 'loadFromCache';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            zuuluu = tangon.mutate;
            michal = function(argFoo) {
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    michal = argFoo;
                    entity = _closure3_slot0;
                    if(entity) { _fun00060_ip = 21; continue _fun00059 }
 13:
                    tangon = michal._after;
                    _fun00060_ip = 27; continue _fun00059;
 21:
                    tangon = michal._before;
 27:
                    oscard = michal._merge;
                    report = tangon.extract;
                    entity = _closure3_slot1;
                    report = report.bind(tangon)(entity);
                    entity = _closure3_slot0;
                    entity = oscard.bind(michal)(report, entity);
                    report = tangon.length;
                    entity = 0;
                    entity = report > entity;
                    if(entity) { _fun00060_ip = 81; continue _fun00059 }
 72:
                    tangon = tangon.wasAtEdge;
                    entity = !tangon;
 81:
                    zuuluu = _closure3_slot0;
                    if(zuuluu) { _fun00060_ip = 96; continue _fun00059 }
 88:
                    michal['hasMoreAfter'] = entity;
                    _fun00060_ip = 102; continue _fun00059;
 96:
                    michal['hasMoreBefore'] = entity;
 102:
                    entity = true;
                    michal['ready'] = entity;
                    entity = false;
                    michal['loadingMore'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = verify;
        zuuluu[37] = entity;
        entity = {};
        verify = 'truncate';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                report = this;
                tangon = report.length;
                michal = _closure1_slot7;
                entity = report;
                if(!(!(tangon <= michal))) { _fun00062_ip = 72; continue _fun00061 }
 22:
                michal = argFoo;
                if(michal) { _fun00062_ip = 54; continue _fun00061 }
 28:
                tangon = argBar;
                michal = report;
                if(!tangon) { _fun00062_ip = 52; continue _fun00061 }
 37:
                oscard = report.truncateTop;
                tangon = _closure1_slot9;
                michal = oscard.bind(report)(tangon);
 52:
                _fun00062_ip = 69; continue _fun00061;
 54:
                tangon = report.truncateBottom;
                zuuluu = _closure1_slot9;
                michal = tangon.bind(report)(zuuluu);
 69:
                entity = michal;
 72:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[38] = entity;
        entity = {};
        verify = 'receiveMessage';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                entity = argFoo;
                zuuluu = arguments[1];
                tangon = this;
                golfie = undefined;
                if(!(zuuluu === golfie)) { _fun00064_ip = 17; continue _fun00063 }
 15:
                zuuluu = true;
 17:
                michal = entity.nonce;
                oscard = null;
                report = oscard == michal;
                michal = null;
                if(report) { _fun00064_ip = 53; continue _fun00063 }
 34:
                verify = tangon.get;
                option = entity.nonce;
                report = true;
                michal = verify.bind(tangon)(option, report);
 53:
                if(!(oscard != michal)) { _fun00064_ip = 170; continue _fun00063 }
 57:
                report = entity.author;
                verify = oscard == report;
                option = undefined;
                if(verify) { _fun00064_ip = 77; continue _fun00063 }
 72:
                option = report.id;
 77:
                verify = michal.author;
                offset = oscard == verify;
                report = undefined;
                if(offset) { _fun00064_ip = 97; continue _fun00063 }
 92:
                report = verify.id;
 97:
                if(!(option !== report)) { _fun00064_ip = 142; continue _fun00063 }
 101:
                report = entity.interaction;
                if(!(oscard != report)) { _fun00064_ip = 170; continue _fun00063 }
 111:
                report = entity.interaction;
                report = report.user;
                option = report.id;
                report = michal.author;
                report = report.id;
                if(!(option === report)) { _fun00064_ip = 170; continue _fun00063 }
 142:
                report = entity.nonce;
                if(!(oscard != report)) { _fun00064_ip = 170; continue _fun00063 }
 152:
                option = michal.id;
                report = entity.nonce;
                if(!(option !== report)) { _fun00064_ip = 394; continue _fun00063 }
 170:
                report = tangon.hasMoreAfter;
                if(report) { _fun00064_ip = 363; continue _fun00063 }
 182:
                verify = _closure1_slot1;
                offset = _closure1_slot3;
                option = 9;
                option = offset[option];
                romeon = verify.bind(golfie)(option);
                yankee = romeon.getCurrentConfig;
                verify = {};
                option = '2ecb25_1';
                verify['location'] = option;
                option = {};
                offset = false;
                option['autoTrackExposure'] = offset;
                option = yankee.bind(romeon)(verify, option);
                option = option.enabled;
                if(option) { _fun00064_ip = 258; continue _fun00063 }
 246:
                option = _closure1_slot13;
                yankee = option.bind(golfie)(tangon, entity);
                _fun00064_ip = 289; continue _fun00063;
 258:
                verify = _closure1_slot0;
                romeon = _closure1_slot3;
                option = 5;
                option = romeon[option];
                verify = verify.bind(golfie)(option);
                option = verify.createMessageRecord;
                yankee = option.bind(verify)(entity);
 289:
                verify = tangon.merge;
                option = new Array(1);
                option[0] = yankee;
                verify = verify.bind(tangon)(option);
                if(zuuluu) { _fun00064_ip = 345; continue _fun00063 }
 311:
                yankee = tangon.length;
                option = _closure1_slot7;
                zuuluu = verify;
                if(!(yankee > option)) { _fun00064_ip = 343; continue _fun00063 }
 327:
                yankee = verify.truncateBottom;
                option = _closure1_slot6;
                zuuluu = yankee.bind(verify)(option, offset);
 343:
                _fun00064_ip = 361; continue _fun00063;
 345:
                option = verify.truncateTop;
                report = _closure1_slot6;
                zuuluu = option.bind(verify)(report, offset);
 361:
                return zuuluu;
 363:
                zuuluu = tangon._after;
                zuuluu = zuuluu.wasAtEdge;
                if(!zuuluu) { _fun00064_ip = 392; continue _fun00063 }
 378:
                report = tangon._after;
                zuuluu = false;
                report['wasAtEdge'] = zuuluu;
 392:
                return tangon;
 394:
                report = _closure1_slot0;
                option = _closure1_slot3;
                zuuluu = 5;
                zuuluu = option[zuuluu];
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.createMessageRecord;
                zuuluu = zuuluu.bind(report)(entity);
                report = michal.interactionData;
                if(!(oscard != report)) { _fun00064_ip = 450; continue _fun00063 }
 438:
                michal = michal.interactionData;
                zuuluu['interactionData'] = michal;
 450:
                michal = tangon.replace;
                entity = entity.nonce;
                entity = michal.bind(tangon)(entity, zuuluu);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[39] = entity;
        entity = {};
        verify = 'receivePushNotification';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                golfie = argFoo;
                oscard = this;
                entity = golfie.nonce;
                zuuluu = null;
                entity = zuuluu == entity;
                michal = null;
                if(entity) { _fun00066_ip = 42; continue _fun00065 }
 23:
                report = oscard.get;
                tangon = golfie.nonce;
                entity = true;
                michal = report.bind(oscard)(tangon, entity);
 42:
                entity = oscard;
                if(!(zuuluu == michal)) { _fun00066_ip = 108; continue _fun00065 }
 49:
                zuuluu = oscard.mutate;
                michal = {'ready': true, 'cached': true};
                tangon = zuuluu.bind(oscard)(michal);
                zuuluu = tangon.merge;
                report = _closure1_slot13;
                michal = undefined;
                report = report.bind(michal)(oscard, golfie);
                michal = new Array(1);
                michal[0] = report;
                entity = zuuluu.bind(tangon)(michal);
 108:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[40] = entity;
        entity = {};
        verify = 'receiveReactionInAppNotification';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                golfie = argFoo;
                oscard = this;
                entity = golfie.nonce;
                zuuluu = null;
                entity = zuuluu == entity;
                michal = null;
                if(entity) { _fun00068_ip = 42; continue _fun00067 }
 23:
                report = oscard.get;
                tangon = golfie.nonce;
                entity = true;
                michal = report.bind(oscard)(tangon, entity);
 42:
                entity = oscard;
                if(!(zuuluu == michal)) { _fun00068_ip = 108; continue _fun00067 }
 49:
                zuuluu = oscard.mutate;
                michal = {'ready': true, 'cached': true};
                tangon = zuuluu.bind(oscard)(michal);
                zuuluu = tangon.merge;
                report = _closure1_slot13;
                michal = undefined;
                report = report.bind(michal)(oscard, golfie);
                michal = new Array(1);
                michal[0] = report;
                entity = zuuluu.bind(tangon)(michal);
 108:
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[41] = entity;
        entity = {};
        verify = 'loadStart';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                michal = zuuluu.mutate;
                entity = {};
                tangon = true;
                entity['loadingMore'] = tangon;
                tangon = null;
                oscard = tangon != report;
                entity['jumped'] = oscard;
                oscard = tangon == report;
                option = undefined;
                if(oscard) { _fun00070_ip = 47; continue _fun00069 }
 41:
                option = report.present;
 47:
                oscard = tangon != option;
                if(!oscard) { _fun00070_ip = 57; continue _fun00069 }
 54:
                oscard = option;
 57:
                entity['jumpedToPresent'] = oscard;
                oscard = tangon == report;
                option = undefined;
                if(oscard) { _fun00070_ip = 76; continue _fun00069 }
 71:
                option = report.messageId;
 76:
                verify = tangon != option;
                oscard = null;
                if(!verify) { _fun00070_ip = 88; continue _fun00069 }
 85:
                oscard = option;
 88:
                entity['jumpTargetId'] = oscard;
                oscard = tangon == report;
                option = undefined;
                if(oscard) { _fun00070_ip = 108; continue _fun00069 }
 102:
                option = report.offset;
 108:
                verify = tangon != option;
                oscard = 0;
                if(!verify) { _fun00070_ip = 120; continue _fun00069 }
 117:
                oscard = option;
 120:
                entity['jumpTargetOffset'] = oscard;
                oscard = tangon == report;
                golfie = undefined;
                if(oscard) { _fun00070_ip = 140; continue _fun00069 }
 134:
                golfie = report.returnMessageId;
 140:
                option = tangon != golfie;
                oscard = null;
                if(!option) { _fun00070_ip = 152; continue _fun00069 }
 149:
                oscard = golfie;
 152:
                entity['jumpReturnTargetId'] = oscard;
                tangon = tangon == report;
                if(!tangon) { _fun00070_ip = 170; continue _fun00069 }
 164:
                tangon = zuuluu.ready;
 170:
                entity['ready'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[42] = entity;
        entity = {};
        verify = 'loadComplete';
        entity['key'] = verify;
        verify = function(argFoo) { // Original name: value
            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                oscard = argFoo;
                sizing = this;
                var _closure3_slot0 = sizing;
                record = oscard.newMessages;
                zuuluu = new Array(0);
                result = 0;
                cntext = zuuluu;
                config = 0;
                michal = arraySpread(cntext, record, config);
                michal = oscard.isBefore;
                romeon = null;
                verify = romeon != michal;
                if(!verify) { _fun00072_ip = 51; continue _fun00071 }
 48:
                verify = michal;
 51:
                michal = oscard.isAfter;
                foxtra = romeon != michal;
                if(!foxtra) { _fun00072_ip = 67; continue _fun00071 }
 64:
                foxtra = michal;
 67:
                michal = oscard.jump;
                tangon = romeon != michal;
                yankee = null;
                if(!tangon) { _fun00072_ip = 85; continue _fun00071 }
 82:
                yankee = michal;
 85:
                michal = oscard.hasMoreBefore;
                backup = romeon != michal;
                if(!backup) { _fun00072_ip = 101; continue _fun00071 }
 98:
                backup = michal;
 101:
                michal = oscard.hasMoreAfter;
                offset = romeon != michal;
                if(!offset) { _fun00072_ip = 117; continue _fun00071 }
 114:
                offset = michal;
 117:
                michal = oscard.avoidInitialScroll;
                option = romeon != michal;
                if(!option) { _fun00072_ip = 133; continue _fun00071 }
 130:
                option = michal;
 133:
                michal = oscard.cached;
                golfie = romeon != michal;
                if(!golfie) { _fun00072_ip = 149; continue _fun00071 }
 146:
                golfie = michal;
 149:
                report = _closure1_slot1;
                echoed = _closure1_slot3;
                michal = 6;
                michal = echoed[michal];
                kiloes = undefined;
                michal = report.bind(kiloes)(michal);
                zuuluu = michal.bind(kiloes)(zuuluu);
                michal = zuuluu.reverse;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.map;
                michal = 9;
                michal = echoed[michal];
                source = report.bind(kiloes)(michal);
                update = source.getCurrentConfig;
                echoed = {};
                michal = '2ecb25_2';
                echoed['location'] = michal;
                michal = {};
                report = false;
                michal['autoTrackExposure'] = report;
                michal = update.bind(source)(echoed, michal);
                michal = michal.enabled;
                if(michal) { _fun00072_ip = 254; continue _fun00071 }
 247:
                michal = function(argFoo) {
                    tangon = _closure1_slot13;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                };
                _fun00072_ip = 259; continue _fun00071;
 254:
                michal = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.createMessageRecord;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
 259:
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.value;
                tangon = michal.bind(zuuluu)();
                if(verify) { _fun00072_ip = 279; continue _fun00071 }
 276:
                if(!foxtra) { _fun00072_ip = 295; continue _fun00071 }
 279:
                if(!(romeon == yankee)) { _fun00072_ip = 295; continue _fun00071 }
 283:
                michal = sizing.ready;
                if(michal) { _fun00072_ip = 631; continue _fun00071 }
 295:
                echoed = sizing._array;
                zuuluu = echoed.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.state;
                    entity = _closure1_slot10;
                    entity = entity.SENDING;
                    entity = michal === entity;
                    return entity;
                };
                michal = zuuluu.bind(echoed)(michal);
                echoed = sizing._array;
                zuuluu = echoed.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.state;
                    entity = _closure1_slot10;
                    entity = entity.SEND_FAILED;
                    entity = michal === entity;
                    return entity;
                };
                echoed = zuuluu.bind(echoed)(entity);
                entity = michal.length;
                zuuluu = entity > result;
                if(zuuluu) { _fun00072_ip = 358; continue _fun00071 }
 349:
                entity = echoed.length;
                zuuluu = entity > result;
 358:
                entity = sizing.reset;
                entity = entity.bind(sizing)(tangon);
                if(!zuuluu) { _fun00072_ip = 569; continue _fun00071 }
 375:
                if(verify) { _fun00072_ip = 569; continue _fun00071 }
 381:
                if(foxtra) { _fun00072_ip = 569; continue _fun00071 }
 387:
                update = romeon == yankee;
                zuuluu = undefined;
                if(update) { _fun00072_ip = 401; continue _fun00071 }
 396:
                zuuluu = yankee.messageId;
 401:
                if(!(romeon == zuuluu)) { _fun00072_ip = 569; continue _fun00071 }
 408:
                update = romeon == yankee;
                zuuluu = undefined;
                if(update) { _fun00072_ip = 423; continue _fun00071 }
 417:
                zuuluu = yankee.offset;
 423:
                if(!(romeon == zuuluu)) { _fun00072_ip = 569; continue _fun00071 }
 430:
                zuuluu = echoed.length;
                update = entity;
                if(!(zuuluu > result)) { _fun00072_ip = 497; continue _fun00071 }
 442:
                ctrled = _closure1_slot11;
                source = ctrled.info;
                sequen = sizing.channelId;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                vacuum = zuuluu.concat;
                zuuluu = 'loadComplete: merging with SEND_FAILED messages for channelId=';
                zuuluu = vacuum.bind(zuuluu)(sequen);
                zuuluu = source.bind(ctrled)(zuuluu);
                zuuluu = entity.merge;
                update = zuuluu.bind(entity)(echoed);
 497:
                echoed = michal.length;
                zuuluu = update;
                if(!(echoed > result)) { _fun00072_ip = 646; continue _fun00071 }
 512:
                ctrled = _closure1_slot11;
                source = ctrled.info;
                sequen = sizing.channelId;
                echoed = global;
                echoed = echoed.HermesInternal;
                vacuum = echoed.concat;
                echoed = 'loadComplete: merging with SENDING messages for channelId=';
                echoed = vacuum.bind(echoed)(sequen);
                echoed = source.bind(ctrled)(echoed);
                echoed = update.merge;
                zuuluu = echoed.bind(update)(michal);
                _fun00072_ip = 646; continue _fun00071;
 569:
                update = _closure1_slot11;
                echoed = update.info;
                sequen = sizing.channelId;
                vacuum = michal.length;
                michal = global;
                michal = michal.HermesInternal;
                ctrled = michal.concat;
                source = 'loadComplete: resetting state for channelId=';
                michal = ', sending.length=';
                michal = ctrled.bind(source)(sequen, michal, vacuum);
                michal = echoed.bind(update)(michal);
                zuuluu = entity;
                _fun00072_ip = 646; continue _fun00071;
 631:
                michal = sizing.merge;
                entity = true;
                zuuluu = michal.bind(sizing)(tangon, verify, entity);
 646:
                tangon = !golfie;
                if(!tangon) { _fun00072_ip = 658; continue _fun00071 }
 652:
                tangon = zuuluu.cached;
 658:
                if(!tangon) { _fun00072_ip = 664; continue _fun00071 }
 661:
                tangon = !option;
 664:
                michal = zuuluu.mutate;
                entity = {'ready': true, 'loadingMore': false};
                echoed = romeon == yankee;
                sizing = undefined;
                if(echoed) { _fun00072_ip = 699; continue _fun00071 }
 693:
                sizing = yankee.jumpType;
 699:
                if(!(romeon == sizing)) { _fun00072_ip = 735; continue _fun00071 }
 703:
                echoed = _closure1_slot0;
                update = _closure1_slot3;
                output = 7;
                output = update[output];
                output = echoed.bind(kiloes)(output);
                output = output.JumpTypes;
                sizing = output.ANIMATED;
 735:
                entity['jumpType'] = sizing;
                sizing = romeon == yankee;
                output = undefined;
                if(sizing) { _fun00072_ip = 755; continue _fun00071 }
 749:
                output = yankee.flash;
 755:
                sizing = romeon != output;
                if(!sizing) { _fun00072_ip = 765; continue _fun00071 }
 762:
                sizing = output;
 765:
                entity['jumpFlash'] = sizing;
                sizing = romeon != yankee;
                entity['jumped'] = sizing;
                sizing = romeon == yankee;
                output = undefined;
                if(sizing) { _fun00072_ip = 794; continue _fun00071 }
 788:
                output = yankee.present;
 794:
                sizing = romeon != output;
                if(!sizing) { _fun00072_ip = 804; continue _fun00071 }
 801:
                sizing = output;
 804:
                entity['jumpedToPresent'] = sizing;
                sizing = romeon == yankee;
                output = undefined;
                if(sizing) { _fun00072_ip = 823; continue _fun00071 }
 818:
                output = yankee.messageId;
 823:
                echoed = romeon != output;
                sizing = null;
                if(!echoed) { _fun00072_ip = 835; continue _fun00071 }
 832:
                sizing = output;
 835:
                entity['jumpTargetId'] = sizing;
                output = romeon != yankee;
                sizing = 0;
                if(!output) { _fun00072_ip = 884; continue _fun00071 }
 849:
                output = yankee.messageId;
                output = romeon != output;
                sizing = 0;
                if(!output) { _fun00072_ip = 884; continue _fun00071 }
 863:
                output = yankee.offset;
                output = romeon != output;
                sizing = 0;
                if(!output) { _fun00072_ip = 884; continue _fun00071 }
 878:
                sizing = yankee.offset;
 884:
                entity['jumpTargetOffset'] = sizing;
                if(!(romeon != yankee)) { _fun00072_ip = 911; continue _fun00071 }
 893:
                if(option) { _fun00072_ip = 911; continue _fun00071 }
 896:
                sizing = zuuluu.jumpSequenceId;
                option = 1;
                option = sizing + option;
                _fun00072_ip = 917; continue _fun00071;
 911:
                option = zuuluu.jumpSequenceId;
 917:
                entity['jumpSequenceId'] = option;
                option = romeon == yankee;
                kiloes = undefined;
                if(option) { _fun00072_ip = 937; continue _fun00071 }
 931:
                kiloes = yankee.returnMessageId;
 937:
                sizing = romeon != kiloes;
                option = null;
                if(!sizing) { _fun00072_ip = 949; continue _fun00071 }
 946:
                option = kiloes;
 949:
                entity['jumpReturnTargetId'] = option;
                option = backup;
                if(!(romeon == yankee)) { _fun00072_ip = 973; continue _fun00071 }
 961:
                option = backup;
                if(!foxtra) { _fun00072_ip = 973; continue _fun00071 }
 967:
                option = zuuluu.hasMoreBefore;
 973:
                entity['hasMoreBefore'] = option;
                option = offset;
                if(!(romeon == yankee)) { _fun00072_ip = 997; continue _fun00071 }
 985:
                option = offset;
                if(!verify) { _fun00072_ip = 997; continue _fun00071 }
 991:
                option = zuuluu.hasMoreAfter;
 997:
                entity['hasMoreAfter'] = option;
                entity['cached'] = golfie;
                oscard = oscard.hasFetched;
                entity['hasFetched'] = oscard;
                entity['error'] = report;
                oscard = zuuluu.initialScrollSequenceId;
                if(tangon) { _fun00072_ip = 1036; continue _fun00071 }
 1031:
                tangon = oscard;
                _fun00072_ip = 1043; continue _fun00071;
 1036:
                report = 1;
                tangon = oscard + report;
 1043:
                entity['initialScrollSequenceId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[43] = entity;
        entity = {};
        verify = 'addCachedMessages';
        entity['key'] = verify;
        verify = function(argFoo, argBar) { // Original name: value
            _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                tangon = argFoo;
                oscard = argBar;
                report = this;
                var _closure3_slot0 = report;
                golfie = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 10;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = golfie.bind(michal)(zuuluu);
                michal = zuuluu.requireSortedDescending;
                michal = michal.bind(zuuluu)(tangon);
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    tangon = _closure1_slot13;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.reverse;
                michal = michal.bind(zuuluu)();
                var _closure3_slot1 = michal;
                golfie = report._array;
                tangon = golfie.filter;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure4_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
                tangon = tangon.bind(golfie)(zuuluu);
                zuuluu = tangon.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot2;
                    michal = _closure1_slot3;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.insert;
                    zuuluu = _closure3_slot1;
                    michal = argFoo;
                    entity = function(argFoo, argBar) {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.compare;
                        entity = argFoo;
                        michal = entity.id;
                        entity = argBar;
                        entity = entity.id;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity);
                tangon = !oscard;
                if(!tangon) { _fun00074_ip = 128; continue _fun00073 }
 122:
                tangon = report.cached;
 128:
                entity = report.reset;
                zuuluu = entity.bind(report)(michal);
                michal = zuuluu.mutate;
                entity = {'ready': true, 'cached': null, 'error': false};
                entity['cached'] = oscard;
                oscard = report.initialScrollSequenceId;
                if(tangon) { _fun00074_ip = 179; continue _fun00073 }
 174:
                tangon = oscard;
                _fun00074_ip = 186; continue _fun00073;
 179:
                report = 1;
                tangon = oscard + report;
 186:
                entity['initialScrollSequenceId'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = verify;
        zuuluu[44] = entity;
        entity = {};
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.forEach;
            michal = _closure2_slot0;
            zuuluu = michal._channelMessages;
            michal = argFoo;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(7);
        michal[0] = entity;
        entity = {};
        entity['key'] = option;
        option = function(argFoo) { // Original name: value
            entity = _closure2_slot0;
            michal = entity._channelMessages;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = option;
        michal[1] = entity;
        entity = {};
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00076_ip = 39; continue _fun00075 }
 29:
                michal = zuuluu.hasPresent;
                entity = michal.bind(zuuluu)();
 39:
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[2] = entity;
        entity = {};
        golfie = 'getOrCreate';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                tangon = argFoo;
                entity = _closure2_slot0;
                entity = entity._channelMessages;
                entity = entity[tangon];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00078_ip = 66; continue _fun00077 }
 26:
                zuuluu = _closure2_slot0;
                michal = zuuluu.prototype;
                report = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = report;
                oscard = tangon;
                michal = new golfie[zuuluu](oscard, report);
                michal = michal instanceof Object ? michal : report;
                zuuluu = zuuluu._channelMessages;
                zuuluu[tangon] = michal;
                entity = michal;
 66:
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[3] = entity;
        entity = {};
        golfie = 'clear';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = _closure2_slot0;
            michal = entity._channelMessages;
            entity = argFoo;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = golfie;
        michal[4] = entity;
        entity = {};
        golfie = 'clearCache';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                zuuluu = this;
                entity = _closure2_slot0;
                michal = entity._channelMessages;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                if(!(entity != michal)) { _fun00080_ip = 72; continue _fun00079 }
 29:
                tangon = michal._before;
                entity = tangon.clear;
                entity = entity.bind(tangon)();
                tangon = michal._after;
                entity = tangon.clear;
                entity = entity.bind(tangon)();
                entity = zuuluu.commit;
                entity = entity.bind(zuuluu)(michal);
 72:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[5] = entity;
        entity = {};
        golfie = 'commit';
        entity['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            entity = _closure2_slot0;
            michal = entity._channelMessages;
            entity = zuuluu.channelId;
            michal[entity] = zuuluu;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = {};
    tangon['_channelMessages'] = report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/ChannelMessages.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) {
        zuuluu = argFoo;
        michal = zuuluu.flatMap;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity._array;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['flatMapChannelMessages'] = michal;
    return entity;
})();