// app/modules/guild_home/ActiveChannelsStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
            _closure1_slot15 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: resetStore
        entity = {};
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = {};
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: truncateOldMessageData
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot12;
            option = entity[zuuluu];
            entity = null;
            if(!(entity != option)) { _fun00004_ip = 230; continue _fun00003 }
 25:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            entity = 8;
            entity = report[entity];
            verify = undefined;
            yankee = oscard.bind(verify)(entity);
            offset = yankee.fromTimestamp;
            entity = global;
            romeon = entity.Date;
            golfie = romeon.now;
            romeon = golfie.bind(romeon)();
            golfie = _closure1_slot10;
            golfie = romeon - golfie;
            golfie = offset.bind(yankee)(golfie);
            var _closure2_slot0 = golfie;
            offset = 9;
            report = report[offset];
            oscard = oscard.bind(verify)(report);
            report = oscard.findIndex;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.compare;
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal, entity);
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            golfie = report.bind(oscard)(option, tangon);
            tangon = -1;
            if(!(tangon !== golfie)) { _fun00004_ip = 195; continue _fun00003 }
 128:
            oscard = entity.Math;
            report = oscard.max;
            yankee = option.length;
            tangon = 26;
            tangon = yankee - tangon;
            golfie = report.bind(oscard)(golfie, tangon);
            report = _closure1_slot12;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[offset];
            oscard = oscard.bind(verify)(tangon);
            tangon = oscard.slice;
            tangon = tangon.bind(oscard)(option, golfie);
            report[zuuluu] = tangon;
            _fun00004_ip = 207; continue _fun00003;
 195:
            report = _closure1_slot12;
            tangon = new Array(0);
            report[zuuluu] = tangon;
 207:
            michal = _closure1_slot13;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            michal[zuuluu] = entity;
 230:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: addMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argBar;
            tangon = _closure1_slot11;
            zuuluu = argFoo;
            tangon = tangon[zuuluu];
            zuuluu = tangon.add;
            zuuluu = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot13;
            oscard = zuuluu[michal];
            tangon = null;
            zuuluu = tangon == oscard;
            if(zuuluu) { _fun00006_ip = 75; continue _fun00005 }
 44:
            report = 300000;
            oscard = oscard + report;
            report = global;
            golfie = report.Date;
            report = golfie.now;
            report = report.bind(golfie)();
            zuuluu = oscard > report;
 75:
            if(!zuuluu) { _fun00006_ip = 89; continue _fun00005 }
 78:
            report = _closure1_slot17;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(michal);
 89:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu[michal];
            if(!(tangon == zuuluu)) { _fun00006_ip = 113; continue _fun00005 }
 101:
            tangon = _closure1_slot12;
            zuuluu = new Array(0);
            tangon[michal] = zuuluu;
 113:
            entity = _closure1_slot12;
            zuuluu = entity[michal];
            michal = zuuluu.push;
            entity = {};
            tangon = argBaz;
            entity['id'] = tangon;
            tangon = argCor;
            entity['userId'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    verify = function(argFoo) { // Original name: handleChannelDelete
        entity = argFoo;
        entity = entity.channel;
        tangon = _closure1_slot12;
        zuuluu = entity.id;
        zuuluu = delete tangon[zuuluu];
        michal = _closure1_slot13;
        entity = entity.id;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
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
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.isGuildHomeChannel;
    var _closure1_slot9 = michal;
    michal = 900000;
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = {};
    var _closure1_slot14 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ActiveChannelsStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot15;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
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
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'getActiveChannelsFetchStatus';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot14;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'getActiveChannelIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot11;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getChannelMessageData';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'shouldFetch';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = _closure1_slot11;
                entity = entity[tangon];
                michal = null;
                entity = michal == entity;
                if(!entity) { _fun00010_ip = 47; continue _fun00009 }
 23:
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu[tangon];
                michal = michal != zuuluu;
                if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 38:
                michal = zuuluu.loading;
 44:
                entity = !michal;
 47:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ActiveChannelsStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleRefreshChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            tangon = entity.guildId;
            michal = _closure1_slot9;
            entity = undefined;
            michal = michal.bind(entity)(oscard);
            if(!michal) { _fun00012_ip = 209; continue _fun00011 }
 35:
            michal = null;
            if(!(michal != tangon)) { _fun00012_ip = 209; continue _fun00011 }
 44:
            oscard = _closure1_slot11;
            offset = oscard[tangon];
            if(!(michal != offset)) { _fun00012_ip = 205; continue _fun00011 }
 59:
            oscard = offset.forEach;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot17;
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    tangon = _closure1_slot12;
                    tangon = tangon[zuuluu];
                    report = null;
                    oscard = report == tangon;
                    report = undefined;
                    if(oscard) { _fun00014_ip = 41; continue _fun00013 }
 36:
                    report = tangon.length;
 41:
                    tangon = 0;
                    if(!(tangon === report)) { _fun00014_ip = 55; continue _fun00013 }
 47:
                    michal = _closure1_slot12;
                    michal = delete michal[zuuluu];
 55:
                    return entity;
                }
            };
            michal = oscard.bind(offset)(michal);
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            michal = golfie[michal];
            option = oscard.bind(entity)(michal);
            golfie = option.chain;
            michal = global;
            verify = michal.Array;
            oscard = verify.from;
            oscard = oscard.bind(verify)(offset);
            option = golfie.bind(option)(oscard);
            golfie = option.filter;
            oscard = function(argFoo) {
                michal = _closure1_slot12;
                entity = argFoo;
                entity = entity in michal;
                return entity;
            };
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.sortBy;
            report = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure1_slot12;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00016_ip = 30; continue _fun00015 }
 25:
                    michal = zuuluu.length;
 30:
                    zuuluu = entity != michal;
                    entity = 0;
                    if(!zuuluu) { _fun00016_ip = 42; continue _fun00015 }
 39:
                    entity = michal;
 42:
                    entity = -entity;
                    return entity;
                }
            };
            oscard = oscard.bind(golfie)(report);
            report = oscard.value;
            yankee = report.bind(oscard)();
            zuuluu = _closure1_slot11;
            michal = michal.Set;
            report = michal.prototype;
            report = Object.create(report, {constructor: {value: michal}});
            romeon = report;
            michal = new romeon[michal](yankee, offset);
            michal = michal instanceof Object ? michal : report;
            zuuluu[tangon] = michal;
            return entity;
 205:
            entity = false;
            return entity;
 209:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleMessageCreate
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            option = entity.channelId;
            tangon = entity.message;
            michal = entity.optimistic;
            entity = entity.isPushNotification;
            if(michal) { _fun00018_ip = 139; continue _fun00017 }
 28:
            if(entity) { _fun00018_ip = 139; continue _fun00017 }
 31:
            michal = _closure1_slot7;
            entity = michal.getChannel;
            entity = entity.bind(michal)(option);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00018_ip = 135; continue _fun00017 }
 54:
            golfie = entity.guild_id;
            entity = zuuluu != golfie;
            if(!entity) { _fun00018_ip = 133; continue _fun00017 }
 66:
            michal = _closure1_slot11;
            michal = michal[golfie];
            michal = zuuluu != michal;
            if(!michal) { _fun00018_ip = 130; continue _fun00017 }
 81:
            oscard = _closure1_slot18;
            report = tangon.id;
            verify = tangon.author;
            offset = zuuluu == verify;
            tangon = undefined;
            if(offset) { _fun00018_ip = 110; continue _fun00017 }
 105:
            tangon = verify.id;
 110:
            kiloes = undefined;
            backup = golfie;
            foxtra = option;
            romeon = report;
            yankee = tangon;
            tangon = kiloes[oscard](backup, foxtra, romeon, yankee, offset);
            michal = undefined;
 130:
            entity = michal;
 133:
            return entity;
 135:
            entity = false;
            return entity;
 139:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        michal = _closure1_slot11;
        entity = entity.id;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    michal['GUILD_DELETE'] = offset;
    michal['CHANNEL_DELETE'] = verify;
    michal['THREAD_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleActiveChannelsFetchStart
        entity = argFoo;
        zuuluu = entity.guildId;
        michal = _closure1_slot14;
        entity = {'loading': true, 'error': null};
        tangon = global;
        report = tangon.Date;
        tangon = report.now;
        tangon = tangon.bind(report)();
        entity['fetchedAt'] = tangon;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['ACTIVE_CHANNELS_FETCH_START'] = verify;
    verify = function(argFoo) { // Original name: handleActiveChannelsFetchSuccess
        michal = argFoo;
        report = michal.guildId;
        var _closure2_slot0 = report;
        zuuluu = michal.channels;
        golfie = _closure1_slot14;
        oscard = {'loading': false, 'error': null};
        michal = global;
        verify = michal.Date;
        option = verify.now;
        option = option.bind(verify)();
        oscard['fetchedAt'] = option;
        golfie[report] = oscard;
        tangon = _closure1_slot11;
        michal = michal.Set;
        oscard = michal.prototype;
        oscard = Object.create(oscard, {constructor: {value: michal}});
        yankee = oscard;
        michal = new yankee[michal](offset);
        michal = michal instanceof Object ? michal : oscard;
        tangon[report] = michal;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            michal = argFoo;
            zuuluu = michal.channel_id;
            var _closure3_slot0 = zuuluu;
            zuuluu = michal.messages;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                entity = argFoo;
                oscard = _closure1_slot18;
                offset = _closure2_slot0;
                verify = _closure3_slot0;
                option = entity.message_id;
                golfie = entity.user_id;
                entity = undefined;
                yankee = undefined;
                michal = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['ACTIVE_CHANNELS_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleActiveChannelsFetchFailure
        entity = argFoo;
        zuuluu = entity.guildId;
        tangon = entity.error;
        michal = _closure1_slot14;
        entity = {'loading': false, 'error': null, 'fetchedAt': null};
        entity['error'] = tangon;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['ACTIVE_CHANNELS_FETCH_FAILURE'] = verify;
    tangon = function() { // Original name: handleConnectionOpen
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = _closure1_slot8;
            entity = zuuluu.getGuildId;
            report = entity.bind(zuuluu)();
            entity = null;
            if(!(entity == report)) { _fun00020_ip = 38; continue _fun00019 }
 23:
            tangon = _closure1_slot16;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)();
            _fun00020_ip = 206; continue _fun00019;
 38:
            zuuluu = _closure1_slot14;
            oscard = zuuluu[report];
            zuuluu = _closure1_slot11;
            tangon = zuuluu[report];
            golfie = global;
            verify = golfie.Array;
            option = verify.from;
            zuuluu = tangon;
            if(!(entity == zuuluu)) { _fun00020_ip = 78; continue _fun00019 }
 74:
            zuuluu = new Array(0);
 78:
            offset = option.bind(verify)(zuuluu);
            verify = offset.reduce;
            option = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    zuuluu = argBar;
                    michal = _closure1_slot12;
                    michal = michal[zuuluu];
                    tangon = null;
                    if(!(tangon == michal)) { _fun00022_ip = 27; continue _fun00021 }
 23:
                    michal = new Array(0);
 27:
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            zuuluu = {};
            zuuluu = verify.bind(offset)(option, zuuluu);
            verify = _closure1_slot16;
            option = undefined;
            verify = verify.bind(option)();
            verify = golfie.Date;
            golfie = verify.now;
            golfie = golfie.bind(verify)();
            verify = entity == oscard;
            if(verify) { _fun00020_ip = 144; continue _fun00019 }
 138:
            option = oscard.fetchedAt;
 144:
            verify = entity != option;
            entity = 0;
            if(!verify) { _fun00020_ip = 156; continue _fun00019 }
 153:
            entity = option;
 156:
            golfie = golfie - entity;
            entity = _closure1_slot10;
            if(!(golfie < entity)) { _fun00020_ip = 206; continue _fun00019 }
 168:
            entity = {};
            entity[report] = oscard;
            _closure1_slot14 = entity;
            entity = {};
            entity[report] = tangon;
            _closure1_slot11 = entity;
            entity = {};
            romeon = entity;
            yankee = zuuluu;
            zuuluu = copyDataProperties(romeon, yankee);
            _closure1_slot12 = entity;
 206:
            entity = undefined;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = tangon;
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
    tangon = 'modules/guild_home/ActiveChannelsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 26;
    zuuluu['MAX_STORED_MESSAGES'] = michal;
    return entity;
})();