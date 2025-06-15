// app/stores/views/PrivateChannelSortStore.tsx
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
            _closure1_slot22 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: makeSortedChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = arguments[1];
            option = undefined;
            if(!(michal === option)) { _fun00004_ip = 165; continue _fun00003 }
 15:
            oscard = _closure1_slot13;
            report = oscard.lastMessageId;
            entity = zuuluu.id;
            report = report.bind(oscard)(entity);
            golfie = null;
            if(!(golfie == report)) { _fun00004_ip = 50; continue _fun00003 }
 44:
            report = zuuluu.lastMessageId;
 50:
            if(!(golfie == report)) { _fun00004_ip = 59; continue _fun00003 }
 54:
            report = zuuluu.id;
 59:
            oscard = zuuluu.isMessageRequestTimestamp;
            entity = report;
            if(!(golfie != oscard)) { _fun00004_ip = 162; continue _fun00003 }
 72:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 15;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            oscard = tangon.bind(option)(oscard);
            tangon = oscard.valueOf;
            yankee = tangon.bind(oscard)();
            oscard = 13;
            tangon = verify[oscard];
            offset = golfie.bind(option)(tangon);
            tangon = offset.fromTimestamp;
            tangon = tangon.bind(offset)(yankee);
            oscard = verify[oscard];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.compare;
            golfie = oscard.bind(golfie)(report, tangon);
            oscard = 0;
            if(!(golfie > oscard)) { _fun00004_ip = 159; continue _fun00003 }
 156:
            tangon = report;
 159:
            entity = tangon;
 162:
            michal = entity;
 165:
            entity = {};
            tangon = zuuluu.id;
            entity['channelId'] = tangon;
            entity['lastMessageId'] = michal;
            oscard = _closure1_slot14;
            report = oscard.isMessagesFavorite;
            michal = zuuluu.id;
            michal = report.bind(oscard)(michal);
            entity['isFavorite'] = michal;
            oscard = _closure1_slot8;
            report = oscard.isMessageRequest;
            michal = zuuluu.id;
            michal = report.bind(oscard)(michal);
            if(michal) { _fun00004_ip = 252; continue _fun00003 }
 232:
            report = _closure1_slot9;
            tangon = report.isSpam;
            zuuluu = zuuluu.id;
            michal = tangon.bind(report)(zuuluu);
 252:
            entity['isRequest'] = michal;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    offset = function() { // Original name: handleConnectionOpen
        zuuluu = _closure1_slot17;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        michal = global;
        zuuluu = michal.Object;
        michal = zuuluu.values;
        tangon = _closure1_slot11;
        entity = tangon.getMutablePrivateChannels;
        entity = entity.bind(tangon)();
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            oscard = argFoo;
            report = _closure1_slot17;
            tangon = report.set;
            zuuluu = oscard.id;
            michal = _closure1_slot23;
            entity = undefined;
            michal = michal.bind(entity)(oscard);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot24 = offset;
    verify = function() { // Original name: handleCacheLoaded
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot11;
            entity = michal.getMutablePrivateChannels;
            golfie = entity.bind(michal)();
            report = golfie;
            entity = undefined;
            for(michal in report)
 30:
            {
 39:
                romeon = michal;
                yankee = _closure1_slot17;
                offset = yankee.set;
                foxtra = _closure1_slot23;
                verify = golfie[romeon];
                verify = foxtra.bind(entity)(verify);
                verify = offset.bind(yankee)(romeon, verify);
                _fun00006_ip = 30; continue _fun00005;
            }
 72:
            return entity;
        }
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
    michal = report.bind(entity)(michal);
    michal = michal.isPrivate;
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
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot15 = michal;
    michal = {};
    option = 'DEFAULT';
    michal['DEFAULT'] = option;
    option = 'FAVORITE';
    michal['FAVORITE'] = option;
    var _closure1_slot16 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    romeon = michal.SecondaryIndexMap;
    michal = romeon.prototype;
    option = Object.create(michal, {constructor: {value: romeon}});
    kiloes = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.isRequest;
            michal = michal.isFavorite;
            if(entity) { _fun00008_ip = 52; continue _fun00007 }
 18:
            entity = _closure1_slot16;
            if(michal) { _fun00008_ip = 36; continue _fun00007 }
 28:
            michal = entity.DEFAULT;
            _fun00008_ip = 42; continue _fun00007;
 36:
            michal = entity.FAVORITE;
 42:
            entity = new Array(1);
            entity[0] = michal;
            _fun00008_ip = 56; continue _fun00007;
 52:
            entity = new Array(0);
 56:
            return entity;
        }
    };
    backup = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.lastMessageId;
        tangon = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        entity = michal.extractTimestamp;
        entity = entity.bind(michal)(zuuluu);
        entity = -entity;
        return entity;
    };
    sizing = option;
    michal = new sizing[romeon](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot17 = michal;
    michal = new Array(0);
    var _closure1_slot18 = michal;
    michal = new Array(0);
    var _closure1_slot19 = michal;
    michal = new Array(0);
    var _closure1_slot20 = michal;
    michal = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = _closure1_slot17;
            report = oscard.values;
            michal = _closure1_slot16;
            tangon = michal.FAVORITE;
            tangon = report.bind(oscard)(tangon);
            oscard = _closure1_slot17;
            report = oscard.values;
            michal = michal.DEFAULT;
            michal = report.bind(oscard)(michal);
            report = _closure1_slot18;
            report = report === tangon;
            if(!report) { _fun00010_ip = 68; continue _fun00009 }
 60:
            oscard = _closure1_slot19;
            report = oscard === michal;
 68:
            if(report) { _fun00010_ip = 121; continue _fun00009 }
 71:
            report = new Array(0);
            _closure1_slot20 = report;
            oscard = tangon.forEach;
            report = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.channelId;
                michal = _closure1_slot20;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            report = oscard.bind(tangon)(report);
            _closure1_slot18 = tangon;
            tangon = michal.forEach;
            zuuluu = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.channelId;
                michal = _closure1_slot20;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            zuuluu = tangon.bind(michal)(zuuluu);
            _closure1_slot19 = michal;
 121:
            entity = _closure1_slot20;
            return entity;
        }
    };
    var _closure1_slot21 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: PrivateChannelSortStore
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
                entity = _closure1_slot22;
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
            option = tangon.waitFor;
            foxtra = _closure1_slot11;
            romeon = _closure1_slot12;
            yankee = _closure1_slot15;
            offset = _closure1_slot8;
            verify = _closure1_slot14;
            backup = tangon;
            michal = backup[option](foxtra, romeon, yankee, offset, verify, option);
            zuuluu = tangon.syncWith;
            report = _closure1_slot14;
            michal = new Array(2);
            michal[0] = report;
            report = _closure1_slot8;
            michal[1] = report;
            entity = _closure1_slot24;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getPrivateChannelIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot21;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getSortedChannels';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            report = _closure1_slot17;
            tangon = report.values;
            michal = _closure1_slot16;
            entity = michal.FAVORITE;
            tangon = tangon.bind(report)(entity);
            entity = new Array(2);
            entity[0] = tangon;
            tangon = _closure1_slot17;
            zuuluu = tangon.values;
            michal = michal.DEFAULT;
            michal = zuuluu.bind(tangon)(michal);
            entity[1] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'serializeForOverlay';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = {};
            var _closure3_slot0 = entity;
            tangon = _closure1_slot17;
            zuuluu = tangon.values;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.channelId;
                michal = entity.lastMessageId;
                entity = _closure3_slot0;
                entity[zuuluu] = michal;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'PrivateChannelSortStore';
    option['displayName'] = michal;
    michal = 18;
    michal = oscard[michal];
    kiloes = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = offset;
    michal['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    michal['OVERLAY_INITIALIZE'] = offset;
    michal['CACHE_LOADED'] = verify;
    michal['CACHE_LOADED_LAZY'] = verify;
    verify = function(argFoo) { // Original name: handleChannelUpdates
        entity = argFoo;
        zuuluu = entity.channels;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                tangon = _closure1_slot10;
                zuuluu = oscard.type;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                if(zuuluu) { _fun00014_ip = 44; continue _fun00013 }
 25:
                golfie = _closure1_slot17;
                report = golfie.has;
                tangon = oscard.id;
                zuuluu = report.bind(golfie)(tangon);
 44:
                if(!zuuluu) { _fun00014_ip = 76; continue _fun00013 }
 47:
                report = _closure1_slot17;
                tangon = report.set;
                zuuluu = oscard.id;
                michal = _closure1_slot23;
                michal = michal.bind(entity)(oscard);
                michal = tangon.bind(report)(zuuluu, michal);
 76:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['CHANNEL_UPDATES'] = verify;
    verify = function(argFoo) { // Original name: handleChannelCreate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            option = entity.channel;
            michal = _closure1_slot10;
            entity = option.type;
            golfie = undefined;
            entity = michal.bind(golfie)(entity);
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00016_ip = 108; continue _fun00015 }
 36:
            tangon = option.id;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 16;
            michal = oscard[michal];
            michal = report.bind(golfie)(michal);
            michal = michal.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            michal = tangon !== michal;
            if(!michal) { _fun00016_ip = 105; continue _fun00015 }
 74:
            oscard = _closure1_slot17;
            report = oscard.set;
            tangon = option.id;
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.bind(golfie)(option);
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = undefined;
 105:
            entity = michal;
 108:
            return entity;
        }
    };
    michal['CHANNEL_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        zuuluu = _closure1_slot17;
        michal = zuuluu.delete;
        entity = entity.id;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['CHANNEL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleMessageCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            michal = entity.message;
            zuuluu = _closure1_slot17;
            entity = zuuluu.has;
            entity = entity.bind(zuuluu)(report);
            if(entity) { _fun00018_ip = 37; continue _fun00017 }
 33:
            entity = false;
            return entity;
 37:
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            option = entity.bind(zuuluu)(report);
            entity = null;
            entity = entity != option;
            if(!entity) { _fun00018_ip = 92; continue _fun00017 }
 60:
            tangon = _closure1_slot17;
            zuuluu = tangon.set;
            golfie = _closure1_slot23;
            oscard = michal.id;
            michal = undefined;
            michal = golfie.bind(michal)(option, oscard);
            entity = zuuluu.bind(tangon)(report, michal);
 92:
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        entity = entity.guild;
        zuuluu = entity.id;
        michal = _closure1_slot17;
        entity = michal.delete;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal['GUILD_CREATE'] = verify;
    tangon = function() { // Original name: handleLogout
        michal = _closure1_slot17;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    sizing = tangon;
    backup = michal;
    michal = new sizing[option](kiloes, backup, foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/views/PrivateChannelSortStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();