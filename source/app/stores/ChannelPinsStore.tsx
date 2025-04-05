// app/stores/ChannelPinsStore.tsx
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
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
    entity = function(argFoo) { // Original name: createChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            golfie = arguments[1];
            zuuluu = arguments[2];
            michal = arguments[3];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 22; continue _fun00003 }
 18:
            golfie = new Array(0);
 22:
            if(!(zuuluu === entity)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            zuuluu = false;
 28:
            if(!(michal === entity)) { _fun00004_ip = 34; continue _fun00003 }
 32:
            michal = false;
 34:
            tangon = _closure1_slot9;
            entity = tangon.getChannel;
            oscard = entity.bind(tangon)(report);
            tangon = null;
            entity = tangon != oscard;
            if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
            entity = oscard.getGuildId;
            tangon = entity.bind(oscard)();
 70:
            entity = {};
            entity['id'] = report;
            oscard = golfie.map;
            report = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.createMessageRecord;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['messages'] = report;
            entity['guildId'] = tangon;
            entity['loaded'] = zuuluu;
            entity['loading'] = michal;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    offset = function(argFoo) { // Original name: handleDeleteChannel
        entity = argFoo;
        entity = entity.channel;
        michal = _closure1_slot15;
        entity = entity.id;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    verify = function() { // Original name: handleRelationshipUpdate
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 13;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.forEach;
        zuuluu = _closure1_slot15;
        michal = function(argFoo) {
            michal = argFoo;
            tangon = michal.messages;
            zuuluu = tangon.map;
            entity = function(argFoo) {
                report = argFoo;
                tangon = report.set;
                zuuluu = _closure1_slot13;
                michal = zuuluu.isBlockedForMessage;
                zuuluu = michal.bind(zuuluu)(report);
                michal = 'blocked';
                tangon = tangon.bind(report)(michal, zuuluu);
                zuuluu = tangon.set;
                michal = _closure1_slot13;
                entity = michal.isIgnoredForMessage;
                michal = entity.bind(michal)(report);
                entity = 'ignored';
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['messages'] = entity;
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, michal);
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
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = {};
    var _closure1_slot15 = michal;
    michal = 15;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ChannelPinsStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                entity = _closure1_slot16;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
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
            option = this;
            golfie = option.waitFor;
            backup = _closure1_slot9;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot10;
            yankee = _closure1_slot12;
            offset = _closure1_slot14;
            verify = _closure1_slot8;
            kiloes = option;
            entity = kiloes[golfie](backup, foxtra, romeon, yankee, offset, verify, option);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getPinnedMessages';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure1_slot15;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity != michal;
                entity = undefined;
                if(!zuuluu) { _fun00008_ip = 28; continue _fun00007 }
 25:
                entity = michal;
 28:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'loaded';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure1_slot15;
                tangon = entity[zuuluu];
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00010_ip = 37; continue _fun00009 }
 23:
                michal = _closure1_slot15;
                michal = michal[zuuluu];
                entity = michal.loaded;
 37:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ChannelPinsStore';
    option['displayName'] = michal;
    michal = 16;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    yankee = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot15 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = yankee;
    yankee = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        var _closure2_slot0 = entity;
        report = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 13;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = _closure1_slot15;
        report = report.bind(entity)(tangon);
        tangon = report.filter;
        michal = function(argFoo) {
            entity = argFoo;
            michal = entity.guildId;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = michal !== entity;
            return entity;
        };
        report = tangon.bind(report)(michal);
        tangon = report.keyBy;
        michal = 'id';
        tangon = tangon.bind(report)(michal);
        michal = tangon.value;
        michal = michal.bind(tangon)();
        _closure1_slot15 = michal;
        return entity;
    };
    michal['GUILD_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageUpdate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            michal = michal.id;
            var _closure2_slot0 = michal;
            michal = entity.message;
            zuuluu = michal.channel_id;
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00012_ip = 632; continue _fun00011 }
 38:
            report = _closure1_slot15;
            report = report[zuuluu];
            if(!(oscard == report)) { _fun00012_ip = 71; continue _fun00011 }
 53:
            golfie = entity.message;
            golfie = golfie.pinned;
            if(golfie) { _fun00012_ip = 71; continue _fun00011 }
 67:
            golfie = false;
            return golfie;
 71:
            golfie = entity.message;
            golfie = golfie.author;
            if(!(oscard == golfie)) { _fun00012_ip = 244; continue _fun00011 }
 89:
            if(!(oscard != report)) { _fun00012_ip = 588; continue _fun00011 }
 96:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 13;
            golfie = verify[golfie];
            yankee = undefined;
            offset = option.bind(yankee)(golfie);
            verify = offset.findIndex;
            option = report.messages;
            golfie = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(option, golfie);
            golfie = 0;
            if(!(verify >= golfie)) { _fun00012_ip = 588; continue _fun00011 }
 152:
            golfie = report.messages;
            option = golfie[verify];
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 12;
            golfie = romeon[golfie];
            yankee = offset.bind(yankee)(golfie);
            offset = yankee.updateMessageRecord;
            golfie = entity.message;
            golfie = offset.bind(yankee)(option, golfie);
            if(!(golfie !== option)) { _fun00012_ip = 588; continue _fun00011 }
 206:
            offset = report.messages;
            option = offset.slice;
            option = option.bind(offset)();
            option[verify] = golfie;
            golfie = _closure1_slot15;
            golfie = golfie[zuuluu];
            golfie['messages'] = option;
            _fun00012_ip = 588; continue _fun00011;
 244:
            golfie = entity.message;
            golfie = golfie.pinned;
            if(golfie) { _fun00012_ip = 383; continue _fun00011 }
 261:
            if(!(oscard != report)) { _fun00012_ip = 379; continue _fun00011 }
 265:
            verify = _closure1_slot1;
            option = _closure1_slot2;
            golfie = 13;
            option = option[golfie];
            golfie = undefined;
            yankee = verify.bind(golfie)(option);
            offset = yankee.findIndex;
            verify = report.messages;
            option = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            yankee = offset.bind(yankee)(verify, option);
            option = -1;
            if(!(option !== yankee)) { _fun00012_ip = 377; continue _fun00011 }
 322:
            verify = report.messages;
            option = verify.slice;
            option = option.bind(verify)();
            report['messages'] = option;
            offset = report.messages;
            verify = offset.splice;
            option = 1;
            option = verify.bind(offset)(yankee, option);
            option = _closure1_slot15;
            option[zuuluu] = report;
            _fun00012_ip = 588; continue _fun00011;
 377:
            return golfie;
 379:
            golfie = undefined;
            return golfie;
 383:
            if(!(oscard != report)) { _fun00012_ip = 592; continue _fun00011 }
 390:
            golfie = report.messages;
            oscard = golfie.slice;
            oscard = oscard.bind(golfie)();
            report['messages'] = oscard;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 13;
            oscard = option[oscard];
            verify = undefined;
            option = golfie.bind(verify)(oscard);
            golfie = option.findIndex;
            oscard = report.messages;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            golfie = golfie.bind(option)(oscard, tangon);
            tangon = -1;
            if(!(tangon !== golfie)) { _fun00012_ip = 527; continue _fun00011 }
 468:
            oscard = report.messages;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 12;
            tangon = offset[tangon];
            yankee = option.bind(verify)(tangon);
            offset = yankee.updateMessageRecord;
            tangon = report.messages;
            option = tangon[golfie];
            tangon = entity.message;
            tangon = offset.bind(yankee)(option, tangon);
            oscard[golfie] = tangon;
            _fun00012_ip = 580; continue _fun00011;
 527:
            golfie = report.messages;
            oscard = golfie.unshift;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 12;
            tangon = offset[tangon];
            verify = option.bind(verify)(tangon);
            option = verify.createMessageRecord;
            tangon = entity.message;
            tangon = option.bind(verify)(tangon);
            tangon = oscard.bind(golfie)(tangon);
 580:
            tangon = _closure1_slot15;
            tangon[zuuluu] = report;
 588:
            tangon = undefined;
            return tangon;
 592:
            oscard = _closure1_slot17;
            entity = entity.message;
            report = new Array(1);
            report[0] = entity;
            tangon = undefined;
            entity = false;
            entity = oscard.bind(tangon)(zuuluu, report, entity);
            michal = _closure1_slot15;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
 632:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.id;
            var _closure2_slot0 = zuuluu;
            report = entity.channelId;
            entity = _closure1_slot15;
            zuuluu = entity[report];
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00014_ip = 134; continue _fun00013 }
 39:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            oscard = 13;
            golfie = golfie[oscard];
            oscard = undefined;
            option = option.bind(oscard)(golfie);
            golfie = option.remove;
            oscard = zuuluu.messages;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = golfie.bind(option)(oscard, michal);
            oscard = michal.length;
            michal = 0;
            michal = michal !== oscard;
            if(!michal) { _fun00014_ip = 131; continue _fun00013 }
 100:
            golfie = zuuluu.messages;
            oscard = golfie.slice;
            oscard = oscard.bind(golfie)();
            zuuluu['messages'] = oscard;
            tangon = _closure1_slot15;
            tangon[report] = zuuluu;
            michal = undefined;
 131:
            entity = michal;
 134:
            return entity;
        }
    };
    michal['MESSAGE_DELETE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageDeleteBulk
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.ids;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.channelId;
            michal = _closure1_slot15;
            michal = michal[zuuluu];
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00016_ip = 66; continue _fun00015 }
 37:
            tangon = michal.messages;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.indexOf;
                entity = argFoo;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = -1;
                entity = entity === michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['messages'] = entity;
 66:
            entity = undefined;
            return entity;
        }
    };
    michal['MESSAGE_DELETE_BULK'] = yankee;
    yankee = function(argFoo) { // Original name: handleLoadPinMessages
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = _closure1_slot15;
        golfie = _closure1_slot17;
        entity = undefined;
        offset = new Array(0);
        verify = false;
        option = true;
        romeon = undefined;
        yankee = tangon;
        michal = romeon[golfie](yankee, offset, verify, option, golfie);
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['LOAD_PINNED_MESSAGES'] = yankee;
    yankee = function(argFoo) { // Original name: handlePinMessagesLoaded
        entity = argFoo;
        tangon = entity.channelId;
        oscard = entity.messages;
        zuuluu = _closure1_slot15;
        report = _closure1_slot17;
        entity = undefined;
        michal = true;
        michal = report.bind(entity)(tangon, oscard, michal);
        zuuluu[tangon] = michal;
        return entity;
    };
    michal['LOAD_PINNED_MESSAGES_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handlePinMessagesFailed
        entity = argFoo;
        michal = entity.channelId;
        entity = _closure1_slot15;
        entity = delete entity[michal];
        entity = undefined;
        return entity;
    };
    michal['LOAD_PINNED_MESSAGES_FAILURE'] = yankee;
    michal['CHANNEL_DELETE'] = offset;
    michal['THREAD_DELETE'] = offset;
    michal['RELATIONSHIP_ADD'] = verify;
    michal['RELATIONSHIP_REMOVE'] = verify;
    michal['RELATIONSHIP_UPDATE'] = verify;
    tangon = function(argFoo) { // Original name: handleScanTimeout
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.messageId;
            var _closure2_slot0 = michal;
            zuuluu = entity.channelId;
            michal = _closure1_slot15;
            michal = michal[zuuluu];
            report = null;
            if(!(report != michal)) { _fun00018_ip = 176; continue _fun00017 }
 39:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 13;
            report = golfie[report];
            option = undefined;
            golfie = oscard.bind(option)(report);
            oscard = golfie.findIndex;
            report = michal.messages;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            oscard = oscard.bind(golfie)(report, tangon);
            tangon = -1;
            if(!(tangon !== oscard)) { _fun00018_ip = 176; continue _fun00017 }
 96:
            report = michal.messages;
            tangon = report.slice;
            tangon = tangon.bind(report)();
            michal['messages'] = tangon;
            report = michal.messages;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 14;
            tangon = verify[tangon];
            option = golfie.bind(option)(tangon);
            golfie = option.handleExplicitMediaScanTimeoutForMessage;
            tangon = michal.messages;
            tangon = tangon[oscard];
            tangon = golfie.bind(option)(tangon);
            report[oscard] = tangon;
            entity = _closure1_slot15;
            entity[zuuluu] = michal;
 176:
            entity = undefined;
            return entity;
        }
    };
    michal['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/ChannelPinsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();