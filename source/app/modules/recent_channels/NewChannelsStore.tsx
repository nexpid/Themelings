// app/modules/recent_channels/NewChannelsStore.tsx
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
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar) { // Original name: maybeAckViewedChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            golfie = argBar;
            var _closure2_slot0 = golfie;
            zuuluu = _closure1_slot21;
            option = zuuluu[oscard];
            report = null;
            zuuluu = report != option;
            if(!zuuluu) { _fun00004_ip = 36; continue _fun00003 }
 32:
            zuuluu = report != golfie;
 36:
            if(!zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 39:
            tangon = option.has;
            zuuluu = tangon.bind(option)(golfie);
 49:
            if(!zuuluu) { _fun00004_ip = 170; continue _fun00003 }
 52:
            tangon = _closure1_slot16;
            zuuluu = tangon.isOptInEnabled;
            zuuluu = zuuluu.bind(tangon)(oscard);
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00004_ip = 107; continue _fun00003 }
 73:
            oscard = _closure1_slot10;
            tangon = oscard.getChannel;
            option = tangon.bind(oscard)(golfie);
            tangon = report != option;
            if(!tangon) { _fun00004_ip = 104; continue _fun00003 }
 94:
            oscard = option.isThread;
            tangon = oscard.bind(option)();
 104:
            zuuluu = tangon;
 107:
            if(zuuluu) { _fun00004_ip = 129; continue _fun00003 }
 110:
            oscard = _closure1_slot15;
            tangon = oscard.ackMessageId;
            tangon = tangon.bind(oscard)(golfie);
            zuuluu = report != tangon;
 129:
            if(zuuluu) { _fun00004_ip = 170; continue _fun00003 }
 132:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 16;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.wait;
            entity = function() {
                zuuluu = _closure1_slot0;
                option = _closure1_slot2;
                michal = 17;
                michal = option[michal];
                golfie = undefined;
                oscard = zuuluu.bind(golfie)(michal);
                report = oscard.ack;
                tangon = _closure2_slot0;
                zuuluu = {};
                michal = _closure1_slot17;
                michal = michal.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED;
                zuuluu['object'] = michal;
                michal = _closure1_slot18;
                michal = michal.ACK_AUTOMATIC;
                zuuluu['objectType'] = michal;
                michal = _closure1_slot1;
                entity = 18;
                entity = option[entity];
                michal = michal.bind(golfie)(entity);
                entity = michal.atPreviousMillisecond;
                verify = entity.bind(michal)(tangon);
                backup = oscard;
                foxtra = tangon;
                romeon = zuuluu;
                yankee = true;
                offset = true;
                entity = backup[report](foxtra, romeon, yankee, offset, verify, option);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 170:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: initializeNewChannels
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            entity = _closure1_slot21;
            report = entity[zuuluu];
            entity = null;
            if(!(entity == report)) { _fun00006_ip = 281; continue _fun00005 }
 29:
            oscard = _closure1_slot11;
            report = oscard.getChannels;
            oscard = report.bind(oscard)(zuuluu);
            report = _closure1_slot12;
            golfie = oscard[report];
            oscard = golfie.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            option = oscard.bind(golfie)(report);
            golfie = _closure1_slot13;
            oscard = golfie.getMember;
            verify = _closure1_slot9;
            report = verify.getId;
            report = report.bind(verify)();
            report = oscard.bind(golfie)(zuuluu, report);
            oscard = entity == report;
            golfie = undefined;
            if(oscard) { _fun00006_ip = 112; continue _fun00005 }
 106:
            golfie = report.joinedAt;
 112:
            if(!(entity != golfie)) { _fun00006_ip = 281; continue _fun00005 }
 119:
            oscard = _closure1_slot21;
            entity = global;
            report = entity.Set;
            verify = report.prototype;
            verify = Object.create(verify, {constructor: {value: report}});
            romeon = verify;
            report = new romeon[report](yankee);
            report = report instanceof Object ? report : verify;
            oscard[zuuluu] = report;
            report = entity.Date;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            romeon = oscard;
            yankee = golfie;
            report = new romeon[report](yankee, offset);
            oscard = report instanceof Object ? report : oscard;
            report = oscard.getTime;
            report = report.bind(oscard)();
            var _closure2_slot1 = report;
            oscard = option.length;
            report = 0;
            if(!(report !== oscard)) { _fun00006_ip = 281; continue _fun00005 }
 209:
            report = _closure1_slot21;
            golfie = entity.Set;
            oscard = option.filter;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 18;
                    entity = tangon[entity];
                    option = undefined;
                    zuuluu = zuuluu.bind(option)(entity);
                    entity = zuuluu.extractTimestamp;
                    tangon = entity.bind(zuuluu)(report);
                    zuuluu = _closure1_slot15;
                    entity = zuuluu.getTrackedAckMessageId;
                    zuuluu = entity.bind(zuuluu)(report);
                    entity = null;
                    entity = entity == zuuluu;
                    if(!entity) { _fun00008_ip = 120; continue _fun00007 }
 63:
                    zuuluu = global;
                    oscard = zuuluu.Date;
                    zuuluu = oscard.now;
                    oscard = zuuluu.bind(oscard)();
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = verify[zuuluu];
                    zuuluu = golfie.bind(option)(zuuluu);
                    zuuluu = zuuluu.Millis;
                    zuuluu = zuuluu.WEEK;
                    zuuluu = oscard - zuuluu;
                    entity = tangon > zuuluu;
 120:
                    if(!entity) { _fun00008_ip = 149; continue _fun00007 }
 123:
                    golfie = _closure1_slot8;
                    oscard = golfie.getGuildRecentsDismissedAt;
                    zuuluu = _closure2_slot0;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    entity = tangon > zuuluu;
 149:
                    if(!entity) { _fun00008_ip = 163; continue _fun00007 }
 152:
                    zuuluu = _closure2_slot1;
                    entity = tangon > zuuluu;
 163:
                    if(!entity) { _fun00008_ip = 192; continue _fun00007 }
 166:
                    tangon = _closure1_slot16;
                    zuuluu = tangon.isChannelOrParentOptedIn;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal, report);
                    entity = !michal;
 192:
                    return entity;
                }
            };
            yankee = oscard.bind(option)(tangon);
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            romeon = oscard;
            tangon = new romeon[golfie](yankee, offset);
            tangon = tangon instanceof Object ? tangon : oscard;
            report[zuuluu] = tangon;
            michal = _closure1_slot22;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            michal[zuuluu] = entity;
 281:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: pruneNewChannels
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 18;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.keys;
        michal = _closure1_slot21;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            tangon = _closure1_slot21;
            verify = tangon[zuuluu];
            michal = _closure1_slot21;
            tangon = global;
            report = tangon.Set;
            oscard = new Array(0);
            option = 0;
            offset = oscard;
            tangon = arraySpread(offset, verify, option);
            tangon = oscard.filter;
            entity = function(argFoo) {
                tangon = _closure1_slot16;
                zuuluu = tangon.isChannelOrParentOptedIn;
                michal = _closure3_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = !entity;
                return entity;
            };
            offset = tangon.bind(oscard)(entity);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            yankee = tangon;
            entity = new yankee[report](offset, verify);
            entity = entity instanceof Object ? entity : tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    michal = global;
    offset = michal.Object;
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
    option = option.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot12 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot13 = option;
    option = 10;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot14 = option;
    option = 11;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot15 = option;
    option = 12;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot16 = option;
    option = 13;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.AnalyticsObjects;
    var _closure1_slot17 = verify;
    verify = option.AnalyticsObjectTypes;
    var _closure1_slot18 = verify;
    option = option.GuildFeatures;
    var _closure1_slot19 = option;
    michal = michal.Set;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    backup = option;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot20 = michal;
    michal = {};
    var _closure1_slot21 = michal;
    michal = {};
    var _closure1_slot22 = michal;
    michal = 19;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: NewChannelsStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
                entity = _closure1_slot23;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00010_ip = 105; continue _fun00009;
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
            verify = tangon.waitFor;
            kiloes = _closure1_slot11;
            backup = _closure1_slot9;
            foxtra = _closure1_slot13;
            romeon = _closure1_slot16;
            yankee = _closure1_slot15;
            offset = _closure1_slot8;
            sizing = tangon;
            michal = sizing[verify](kiloes, backup, foxtra, romeon, yankee, offset, verify);
            zuuluu = tangon.syncWith;
            report = _closure1_slot16;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot26;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getNewChannelIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                michal = null;
                entity = michal != zuuluu;
                if(!entity) { _fun00012_ip = 27; continue _fun00011 }
 12:
                tangon = _closure1_slot21;
                tangon = tangon[zuuluu];
                entity = michal == tangon;
 27:
                if(!entity) { _fun00012_ip = 44; continue _fun00011 }
 30:
                tangon = _closure1_slot25;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
 44:
                if(!(michal != zuuluu)) { _fun00012_ip = 63; continue _fun00011 }
 48:
                entity = _closure1_slot21;
                entity = entity[zuuluu];
                if(!(michal == entity)) { _fun00012_ip = 70; continue _fun00011 }
 63:
                entity = _closure1_slot20;
 70:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'shouldIndicateNewChannel';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                oscard = argBar;
                tangon = null;
                if(!(tangon != report)) { _fun00014_ip = 156; continue _fun00013 }
 15:
                michal = _closure1_slot14;
                entity = michal.getGuild;
                option = entity.bind(michal)(report);
                michal = tangon == option;
                if(michal) { _fun00014_ip = 63; continue _fun00013 }
 39:
                golfie = option.hasFeature;
                entity = _closure1_slot19;
                entity = entity.COMMUNITY;
                entity = golfie.bind(option)(entity);
                michal = !entity;
 63:
                entity = !michal;
                if(michal) { _fun00014_ip = 154; continue _fun00013 }
 69:
                michal = tangon != report;
                if(!michal) { _fun00014_ip = 88; continue _fun00013 }
 76:
                golfie = _closure1_slot21;
                golfie = golfie[report];
                michal = tangon == golfie;
 88:
                if(!michal) { _fun00014_ip = 102; continue _fun00013 }
 91:
                golfie = _closure1_slot25;
                michal = undefined;
                michal = golfie.bind(michal)(report);
 102:
                michal = _closure1_slot21;
                golfie = michal[report];
                report = tangon == golfie;
                michal = undefined;
                if(report) { _fun00014_ip = 129; continue _fun00013 }
 119:
                report = golfie.has;
                michal = report.bind(golfie)(oscard);
 129:
                if(!michal) { _fun00014_ip = 151; continue _fun00013 }
 132:
                report = _closure1_slot15;
                zuuluu = report.getTrackedAckMessageId;
                zuuluu = zuuluu.bind(report)(oscard);
                michal = tangon == zuuluu;
 151:
                entity = michal;
 154:
                return entity;
 156:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'NewChannelsStore';
    option['displayName'] = michal;
    michal = 16;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleBulkClearRecents
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            var _closure2_slot0 = michal;
            report = entity.channelIds;
            tangon = _closure1_slot21;
            oscard = tangon[michal];
            tangon = null;
            if(!(tangon != oscard)) { _fun00016_ip = 83; continue _fun00015 }
 37:
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                michal = _closure1_slot21;
                entity = _closure2_slot0;
                zuuluu = michal[entity];
                michal = zuuluu.delete;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot21;
            zuuluu = zuuluu[michal];
            tangon = zuuluu.size;
            zuuluu = 0;
            if(!(zuuluu === tangon)) { _fun00016_ip = 79; continue _fun00015 }
 71:
            entity = _closure1_slot21;
            entity = delete entity[michal];
 79:
            entity = undefined;
            return entity;
 83:
            entity = false;
            return entity;
        }
    };
    michal['BULK_CLEAR_RECENTS'] = verify;
    verify = function() { // Original name: CHANNEL_ACK
        entity = true;
        return entity;
    };
    michal['CHANNEL_ACK'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            option = entity.channelId;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00018_ip = 143; continue _fun00017 }
 22:
            tangon = _closure1_slot21;
            tangon = tangon[report];
            if(!(michal != tangon)) { _fun00018_ip = 127; continue _fun00017 }
 37:
            tangon = _closure1_slot22;
            oscard = tangon[report];
            tangon = global;
            golfie = tangon.Date;
            tangon = golfie.now;
            verify = tangon.bind(golfie)();
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 14;
            tangon = golfie[tangon];
            golfie = undefined;
            tangon = offset.bind(golfie)(tangon);
            tangon = tangon.Millis;
            tangon = tangon.HOUR;
            tangon = verify - tangon;
            if(!(!(oscard < tangon))) { _fun00018_ip = 127; continue _fun00017 }
 104:
            oscard = michal != option;
            michal = false;
            if(!oscard) { _fun00018_ip = 140; continue _fun00017 }
 113:
            oscard = _closure1_slot24;
            oscard = oscard.bind(golfie)(report, option);
            michal = false;
            _fun00018_ip = 140; continue _fun00017;
 127:
            tangon = _closure1_slot25;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(report);
            michal = true;
 140:
            entity = michal;
 143:
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleSidebarViewChannel
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = entity.channelId;
            report = entity.sidebarType;
            entity = null;
            entity = entity == tangon;
            if(entity) { _fun00020_ip = 69; continue _fun00019 }
 28:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 15;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            michal = michal.SidebarType;
            michal = michal.VIEW_CHANNEL;
            entity = report !== michal;
 69:
            if(entity) { _fun00020_ip = 87; continue _fun00019 }
 72:
            michal = _closure1_slot24;
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
 87:
            entity = false;
            return entity;
        }
    };
    michal['SIDEBAR_VIEW_CHANNEL'] = verify;
    verify = function(argFoo) { // Original name: handleSidebarViewGuild
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            zuuluu = entity.baseChannelId;
            entity = null;
            if(!(entity != tangon)) { _fun00022_ip = 35; continue _fun00021 }
 20:
            michal = _closure1_slot24;
            entity = undefined;
            entity = michal.bind(entity)(tangon, zuuluu);
 35:
            entity = false;
            return entity;
        }
    };
    michal['SIDEBAR_VIEW_GUILD'] = verify;
    verify = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        michal = _closure1_slot21;
        entity = entity.id;
        entity = delete michal[entity];
        entity = undefined;
        return entity;
    };
    michal['GUILD_DELETE'] = verify;
    tangon = function(argFoo) { // Original name: handleChannelCreate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            michal = entity.isVocal;
            michal = michal.bind(entity)();
            if(michal) { _fun00024_ip = 112; continue _fun00023 }
 21:
            report = _closure1_slot21;
            tangon = entity.guild_id;
            oscard = _closure1_slot21;
            zuuluu = entity.guild_id;
            zuuluu = oscard[zuuluu];
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00024_ip = 80; continue _fun00023 }
 52:
            oscard = global;
            oscard = oscard.Set;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            verify = golfie;
            oscard = new verify[oscard](option);
            zuuluu = oscard instanceof Object ? oscard : golfie;
 80:
            report[tangon] = zuuluu;
            zuuluu = _closure1_slot21;
            michal = entity.guild_id;
            zuuluu = zuuluu[michal];
            michal = zuuluu.add;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
 112:
            entity = undefined;
            return entity;
        }
    };
    michal['CHANNEL_CREATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/recent_channels/NewChannelsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();