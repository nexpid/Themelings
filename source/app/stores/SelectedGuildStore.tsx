// app/stores/SelectedGuildStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
            _closure1_slot15 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    verify = function() { // Original name: handleConnectionOpen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = null;
            zuuluu = michal != zuuluu;
            if(!zuuluu) { _fun00004_ip = 38; continue _fun00003 }
 16:
            oscard = _closure1_slot10;
            report = oscard.getGuild;
            tangon = _closure1_slot12;
            tangon = report.bind(oscard)(tangon);
            zuuluu = michal == tangon;
 38:
            if(!zuuluu) { _fun00004_ip = 64; continue _fun00003 }
 41:
            oscard = _closure1_slot7;
            report = oscard.getRequest;
            tangon = _closure1_slot12;
            tangon = report.bind(oscard)(tangon);
            zuuluu = michal == tangon;
 64:
            if(!zuuluu) { _fun00004_ip = 71; continue _fun00003 }
 67:
            _closure1_slot12 = michal;
 71:
            zuuluu = _closure1_slot13;
            zuuluu = michal != zuuluu;
            if(!zuuluu) { _fun00004_ip = 104; continue _fun00003 }
 82:
            oscard = _closure1_slot10;
            report = oscard.getGuild;
            tangon = _closure1_slot13;
            tangon = report.bind(oscard)(tangon);
            zuuluu = michal == tangon;
 104:
            if(!zuuluu) { _fun00004_ip = 130; continue _fun00003 }
 107:
            oscard = _closure1_slot7;
            report = oscard.getRequest;
            tangon = _closure1_slot13;
            tangon = report.bind(oscard)(tangon);
            zuuluu = michal == tangon;
 130:
            if(!zuuluu) { _fun00004_ip = 137; continue _fun00003 }
 133:
            _closure1_slot13 = michal;
 137:
            zuuluu = _closure1_slot17;
            michal = _closure1_slot12;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    var _closure1_slot16 = verify;
    entity = function(argFoo) { // Original name: updateLastSelectedGuildMillis
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 37; continue _fun00005 }
 9:
            michal = _closure1_slot14;
            entity = global;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            michal[zuuluu] = entity;
 37:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleGuildRemove
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            entity = _closure1_slot14;
            entity = delete entity[tangon];
            zuuluu = _closure1_slot13;
            entity = false;
            if(!(zuuluu === tangon)) { _fun00008_ip = 38; continue _fun00007 }
 30:
            zuuluu = null;
            _closure1_slot13 = zuuluu;
            entity = true;
 38:
            zuuluu = _closure1_slot12;
            if(!(zuuluu === tangon)) { _fun00008_ip = 218; continue _fun00007 }
 49:
            zuuluu = global;
            oscard = zuuluu.Object;
            tangon = oscard.values;
            golfie = _closure1_slot10;
            zuuluu = golfie.getGuilds;
            zuuluu = zuuluu.bind(golfie)();
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal !== entity;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00008_ip = 154; continue _fun00007 }
 103:
            _closure1_slot12 = zuuluu;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(tangon);
            tangon = oscard.replaceWith;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.ME;
            zuuluu = tangon.bind(oscard)(zuuluu);
            entity = true;
            _fun00008_ip = 218; continue _fun00007;
 154:
            zuuluu = michal.id;
            _closure1_slot12 = zuuluu;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = oscard.bind(zuuluu)(tangon);
            zuuluu = tangon.replaceWith;
            oscard = _closure1_slot11;
            report = oscard.CHANNEL;
            michal = michal.id;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            entity = true;
 218:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Routes;
    var _closure1_slot11 = michal;
    michal = null;
    var _closure1_slot12 = michal;
    var _closure1_slot13 = michal;
    michal = {};
    var _closure1_slot14 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: SelectedGuildStore
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                golfie = this;
                zuuluu = golfie.mustEmitChanges;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    entity = 'CONNECTION_OPEN';
                    entity = entity !== michal;
                    return entity;
                };
                entity = zuuluu.bind(golfie)(entity);
                oscard = golfie.waitFor;
                report = _closure1_slot10;
                tangon = _closure1_slot8;
                entity = _closure1_slot9;
                entity = oscard.bind(golfie)(report, tangon, entity);
                tangon = null;
                oscard = tangon == michal;
                entity = undefined;
                report = undefined;
                if(oscard) { _fun00012_ip = 71; continue _fun00011 }
 65:
                report = michal.selectedGuildTimestampMillis;
 71:
                if(!(tangon == report)) { _fun00012_ip = 77; continue _fun00011 }
 75:
                report = {};
 77:
                _closure1_slot14 = report;
                report = tangon == michal;
                oscard = undefined;
                if(report) { _fun00012_ip = 96; continue _fun00011 }
 90:
                oscard = michal.selectedGuildId;
 96:
                golfie = tangon != oscard;
                report = null;
                if(!golfie) { _fun00012_ip = 108; continue _fun00011 }
 105:
                report = oscard;
 108:
                _closure1_slot12 = report;
                oscard = tangon == michal;
                report = undefined;
                if(oscard) { _fun00012_ip = 127; continue _fun00011 }
 121:
                report = michal.lastSelectedGuildId;
 127:
                oscard = tangon != report;
                michal = null;
                if(!oscard) { _fun00012_ip = 139; continue _fun00011 }
 136:
                michal = report;
 139:
                _closure1_slot13 = michal;
                michal = _closure1_slot9;
                golfie = michal.lastNonVoiceRoute;
                yankee = _closure1_slot0;
                romeon = _closure1_slot1;
                michal = 11;
                michal = romeon[michal];
                oscard = yankee.bind(entity)(michal);
                report = oscard.matchPath;
                michal = {};
                offset = _closure1_slot11;
                verify = offset.CHANNEL;
                option = 12;
                option = romeon[option];
                option = yankee.bind(entity)(option);
                yankee = option.RouteParam;
                option = yankee.guildId;
                option = option.bind(yankee)();
                option = verify.bind(offset)(option);
                michal['path'] = option;
                report = report.bind(oscard)(golfie, michal);
                oscard = tangon == report;
                michal = undefined;
                if(oscard) { _fun00012_ip = 263; continue _fun00011 }
 243:
                report = report.params;
                oscard = tangon == report;
                michal = undefined;
                if(oscard) { _fun00012_ip = 263; continue _fun00011 }
 258:
                michal = report.guildId;
 263:
                tangon = tangon != michal;
                if(!tangon) { _fun00012_ip = 278; continue _fun00011 }
 270:
                report = _closure1_slot12;
                tangon = michal !== report;
 278:
                if(!tangon) { _fun00012_ip = 285; continue _fun00011 }
 281:
                _closure1_slot12 = michal;
 285:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot14;
            entity['selectedGuildTimestampMillis'] = zuuluu;
            zuuluu = _closure1_slot12;
            entity['selectedGuildId'] = zuuluu;
            michal = _closure1_slot13;
            entity['lastSelectedGuildId'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLastSelectedGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getLastSelectedTimestamp';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot12;
                entity = -1;
                if(!(tangon !== zuuluu)) { _fun00014_ip = 28; continue _fun00013 }
 20:
                michal = _closure1_slot14;
                entity = michal[zuuluu];
 28:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SelectedGuildStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 14;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        entity = entity.selectedGuildId;
        _closure1_slot12 = entity;
        entity = undefined;
        _closure1_slot13 = entity;
        michal = _closure1_slot16;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelSelect
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            entity = _closure1_slot12;
            if(!(entity !== zuuluu)) { _fun00016_ip = 55; continue _fun00015 }
 19:
            tangon = _closure1_slot17;
            report = _closure1_slot12;
            entity = undefined;
            report = tangon.bind(entity)(report);
            tangon = tangon.bind(entity)(zuuluu);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00016_ip = 49; continue _fun00015 }
 45:
            _closure1_slot13 = zuuluu;
 49:
            _closure1_slot12 = zuuluu;
            return entity;
 55:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = verify;
    verify = function(argFoo) { // Original name: handleGuildMemberRemove
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            entity = entity.user;
            zuuluu = entity.id;
            report = _closure1_slot8;
            entity = report.getId;
            entity = entity.bind(report)();
            entity = zuuluu === entity;
            if(!entity) { _fun00018_ip = 53; continue _fun00017 }
 42:
            zuuluu = _closure1_slot18;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 53:
            return entity;
        }
    };
    michal['GUILD_MEMBER_REMOVE'] = verify;
    verify = function(argFoo) { // Original name: handleGuildDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            entity = entity.guild;
            tangon = entity.id;
            michal = entity.unavailable;
            entity = true;
            entity = entity !== michal;
            if(!entity) { _fun00020_ip = 42; continue _fun00019 }
 28:
            zuuluu = _closure1_slot18;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 42:
            return entity;
        }
    };
    michal['GUILD_DELETE'] = verify;
    tangon = function() { // Original name: handleLogout
        entity = null;
        _closure1_slot12 = entity;
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SelectedGuildStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = -1;
    zuuluu['SELECTED_GUILD_TIMESTAMP_NOW'] = michal;
    return entity;
})();