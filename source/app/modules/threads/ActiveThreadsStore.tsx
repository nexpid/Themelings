// app/modules/threads/ActiveThreadsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: threadStateFromChannel
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        michal = michal.parent_id;
        entity['parentId'] = michal;
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: deleteGuildThreads
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot10;
            zuuluu = michal in zuuluu;
            if(!zuuluu) { _fun00004_ip = 25; continue _fun00003 }
 17:
            entity = _closure1_slot10;
            entity = delete entity[michal];
 25:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: storeThreads
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = entity.threads;
            zuuluu = null;
            zuuluu = zuuluu != tangon;
            if(!zuuluu) { _fun00006_ip = 41; continue _fun00005 }
 24:
            tangon = entity.threads;
            report = tangon.length;
            tangon = 0;
            zuuluu = report > tangon;
 41:
            if(!zuuluu) { _fun00006_ip = 98; continue _fun00005 }
 44:
            report = _closure1_slot10;
            tangon = entity.id;
            zuuluu = {};
            report[tangon] = zuuluu;
            report = entity.threads;
            tangon = report.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.type;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = _closure1_slot17;
                entity = _closure2_slot0;
                zuuluu = entity.id;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 98:
            michal = entity.hasThreadsSubscription;
            if(!michal) { _fun00006_ip = 129; continue _fun00005 }
 107:
            zuuluu = _closure1_slot11;
            michal = zuuluu.add;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
 129:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: storeThread
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            michal = _closure1_slot10;
            oscard = michal[tangon];
            zuuluu = report.parent_id;
            michal = zuuluu in oscard;
            if(michal) { _fun00008_ip = 36; continue _fun00007 }
 30:
            michal = {};
            oscard[zuuluu] = michal;
 36:
            michal = _closure1_slot10;
            michal = michal[tangon];
            tangon = michal[zuuluu];
            zuuluu = report.id;
            michal = _closure1_slot14;
            entity = undefined;
            michal = michal.bind(entity)(report);
            tangon[zuuluu] = michal;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    verify = function(argFoo) { // Original name: handleThreadCreateOrUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            report = _closure1_slot7;
            tangon = report.has;
            michal = zuuluu.type;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00010_ip = 37; continue _fun00009 }
 33:
            michal = false;
            return michal;
 37:
            report = zuuluu.threadMetadata;
            tangon = null;
            golfie = tangon == report;
            michal = undefined;
            oscard = undefined;
            if(golfie) { _fun00010_ip = 62; continue _fun00009 }
 56:
            oscard = report.archived;
 62:
            report = true;
            if(!(report !== oscard)) { _fun00010_ip = 163; continue _fun00009 }
 68:
            oscard = _closure1_slot10;
            report = zuuluu.guild_id;
            offset = oscard[report];
            if(!(tangon == offset)) { _fun00010_ip = 87; continue _fun00009 }
 85:
            offset = {};
 87:
            oscard = _closure1_slot10;
            report = zuuluu.guild_id;
            tangon = {};
            romeon = tangon;
            yankee = offset;
            golfie = copyDataProperties(romeon, yankee);
            option = zuuluu.parent_id;
            golfie = {};
            verify = zuuluu.parent_id;
            yankee = offset[verify];
            romeon = golfie;
            verify = copyDataProperties(romeon, yankee);
            offset = zuuluu.id;
            verify = _closure1_slot14;
            verify = verify.bind(michal)(zuuluu);
            golfie[offset] = verify;
            tangon[option] = golfie;
            oscard[report] = tangon;
            return michal;
 163:
            entity = _closure1_slot18;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: deleteThread
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            option = entity.guild_id;
            golfie = entity.parent_id;
            verify = entity.id;
            michal = null;
            entity = michal != option;
            if(!entity) { _fun00012_ip = 32; continue _fun00011 }
 28:
            entity = michal != golfie;
 32:
            if(!entity) { _fun00012_ip = 229; continue _fun00011 }
 38:
            michal = _closure1_slot10;
            michal = option in michal;
            if(!michal) { _fun00012_ip = 226; continue _fun00011 }
 55:
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu[option];
            zuuluu = golfie in zuuluu;
            if(!zuuluu) { _fun00012_ip = 223; continue _fun00011 }
 73:
            tangon = _closure1_slot10;
            tangon = tangon[option];
            tangon = tangon[golfie];
            tangon = verify in tangon;
            if(!tangon) { _fun00012_ip = 220; continue _fun00011 }
 95:
            offset = _closure1_slot10;
            report = {};
            foxtra = offset[option];
            backup = report;
            yankee = copyDataProperties(backup, foxtra);
            yankee = {};
            romeon = _closure1_slot10;
            romeon = romeon[option];
            foxtra = romeon[golfie];
            backup = yankee;
            romeon = copyDataProperties(backup, foxtra);
            report[golfie] = yankee;
            offset[option] = report;
            report = _closure1_slot10;
            report = report[option];
            report = report[golfie];
            report = delete report[verify];
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            report = 7;
            verify = verify[report];
            report = undefined;
            offset = offset.bind(report)(verify);
            verify = offset.isEmpty;
            report = _closure1_slot10;
            report = report[option];
            report = report[golfie];
            report = verify.bind(offset)(report);
            if(!report) { _fun00012_ip = 218; continue _fun00011 }
 206:
            oscard = _closure1_slot10;
            oscard = oscard[option];
            report = delete oscard[golfie];
 218:
            tangon = undefined;
 220:
            zuuluu = tangon;
 223:
            michal = zuuluu;
 226:
            entity = michal;
 229:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    offset = option.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = offset;
    option = option.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot9 = option;
    option = {};
    var _closure1_slot10 = option;
    michal = michal.Set;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    kiloes = option;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ActiveThreadsStore
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00014_ip = 69; continue _fun00013 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00014_ip = 105; continue _fun00013;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot9;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'isActive';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                report = this;
                zuuluu = null;
                entity = zuuluu != oscard;
                if(!entity) { _fun00016_ip = 41; continue _fun00015 }
 15:
                tangon = report.getThreadsForParent;
                michal = argBar;
                tangon = tangon.bind(report)(oscard, michal);
                michal = argBaz;
                michal = tangon[michal];
                entity = zuuluu != michal;
 41:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getThreadsForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot10;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00018_ip = 24; continue _fun00017 }
 20:
                entity = _closure1_slot12;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getThreadsForParent';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getThreadsForGuild;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = argBar;
                entity = michal[entity];
                michal = null;
                if(!(michal == entity)) { _fun00020_ip = 37; continue _fun00019 }
 30:
                entity = _closure1_slot12;
 37:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hasThreadsForChannel';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            oscard = this;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isEmpty;
            report = oscard.getThreadsForParent;
            tangon = argFoo;
            entity = argBar;
            entity = report.bind(oscard)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'forEachGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 8;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.keys;
            zuuluu = _closure1_slot10;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure3_slot0;
                entity = _closure1_slot10;
                michal = entity[tangon];
                entity = undefined;
                michal = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'hasLoaded';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot11;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ActiveThreadsStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        michal = {};
        _closure1_slot10 = michal;
        michal = _closure1_slot11;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = argFoo;
        zuuluu = entity.guilds;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot16;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        tangon = entity.channels;
        zuuluu = {};
        _closure1_slot10 = zuuluu;
        report = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = report.bind(entity)(zuuluu);
        report = zuuluu.bind(entity)(tangon);
        tangon = report.filter;
        zuuluu = function(argFoo) {
            zuuluu = _closure1_slot8;
            michal = zuuluu.has;
            entity = argFoo;
            entity = entity.type;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = tangon.bind(report)(zuuluu);
        tangon = report.groupBy;
        zuuluu = 'guild_id';
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.forEach;
        michal = function(argFoo, argBar) {
            zuuluu = argFoo;
            report = argBar;
            var _closure3_slot0 = report;
            tangon = _closure1_slot10;
            michal = {};
            tangon[report] = michal;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                tangon = _closure1_slot17;
                zuuluu = _closure3_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        zuuluu = entity.guild;
        report = _closure1_slot15;
        tangon = zuuluu.id;
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        michal = _closure1_slot16;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['GUILD_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        zuuluu = _closure1_slot15;
        michal = entity.id;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['GUILD_DELETE'] = offset;
    michal['THREAD_CREATE'] = verify;
    michal['THREAD_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleThreadListSync
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            verify = michal.guildId;
            var _closure2_slot0 = verify;
            zuuluu = michal.threads;
            tangon = michal.channelIds;
            michal = null;
            if(!(michal == tangon)) { _fun00022_ip = 49; continue _fun00021 }
 32:
            tangon = _closure1_slot11;
            michal = tangon.add;
            michal = michal.bind(tangon)(verify);
 49:
            offset = _closure1_slot10;
            michal = {};
            backup = offset[verify];
            kiloes = michal;
            yankee = copyDataProperties(kiloes, backup);
            offset[verify] = michal;
            michal = _closure1_slot10;
            golfie = michal[verify];
            for(michal in golfie)
 89:
            {
 98:
                romeon = michal;
                offset = _closure1_slot10;
                yankee = offset[verify];
                offset = {};
                foxtra = _closure1_slot10;
                foxtra = foxtra[verify];
                backup = foxtra[romeon];
                kiloes = offset;
                foxtra = copyDataProperties(kiloes, backup);
                yankee[romeon] = offset;
                _fun00022_ip = 89; continue _fun00021;
            }
 136:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                tangon = _closure1_slot17;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    michal['THREAD_LIST_SYNC'] = verify;
    verify = function(argFoo) { // Original name: handleThreadDelete
        entity = argFoo;
        zuuluu = entity.channel;
        michal = _closure1_slot18;
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['THREAD_DELETE'] = verify;
    tangon = function(argFoo) { // Original name: handleChannelDelete
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zuuluu = entity.guild_id;
            michal = null;
            if(!(michal != zuuluu)) { _fun00024_ip = 99; continue _fun00023 }
 19:
            tangon = entity.guild_id;
            zuuluu = _closure1_slot10;
            zuuluu = tangon in zuuluu;
            if(!zuuluu) { _fun00024_ip = 99; continue _fun00023 }
 38:
            report = _closure1_slot10;
            tangon = entity.guild_id;
            zuuluu = {};
            golfie = _closure1_slot10;
            oscard = entity.guild_id;
            option = golfie[oscard];
            verify = zuuluu;
            oscard = copyDataProperties(verify, option);
            report[tangon] = zuuluu;
            zuuluu = _closure1_slot10;
            michal = entity.guild_id;
            michal = zuuluu[michal];
            entity = entity.id;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_DELETE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/ActiveThreadsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();