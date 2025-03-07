// app/stores/SelfPresenceStore.tsx
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
            entity = _closure1_slot30;
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
    var _closure1_slot29 = entity;
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
            _closure1_slot30 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: shouldShowApplicationActivity
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 14;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.shouldShareApplicationActivity;
        michal = _closure1_slot12;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: shouldShowActivity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.type;
            entity = _closure1_slot18;
            entity = entity.LISTENING;
            if(!(entity !== tangon)) { _fun00006_ip = 213; continue _fun00005 }
 28:
            entity = _closure1_slot18;
            entity = entity.PLAYING;
            if(!(entity !== tangon)) { _fun00006_ip = 100; continue _fun00005 }
 42:
            entity = _closure1_slot18;
            entity = entity.STREAMING;
            if(!(entity !== tangon)) { _fun00006_ip = 66; continue _fun00005 }
 56:
            entity = _closure1_slot18;
            entity = entity.WATCHING;
 66:
            tangon = zuuluu.application_id;
            entity = null;
            entity = entity == tangon;
            if(entity) { _fun00006_ip = 98; continue _fun00005 }
 81:
            oscard = _closure1_slot31;
            report = zuuluu.application_id;
            tangon = undefined;
            entity = oscard.bind(tangon)(report);
 98:
            return entity;
 100:
            tangon = zuuluu.application_id;
            entity = null;
            if(!(entity == tangon)) { _fun00006_ip = 194; continue _fun00005 }
 112:
            oscard = zuuluu.name;
            report = _closure1_slot10;
            tangon = report.getGameByName;
            tangon = tangon.bind(report)(oscard);
            if(!(entity == tangon)) { _fun00006_ip = 176; continue _fun00005 }
 136:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            entity = oscard.bind(entity)(report);
            report = entity.ShowCurrentGame;
            entity = report.getSetting;
            entity = entity.bind(report)();
            _fun00006_ip = 192; continue _fun00005;
 176:
            oscard = _closure1_slot31;
            report = tangon.id;
            tangon = undefined;
            entity = oscard.bind(tangon)(report);
 192:
            _fun00006_ip = 211; continue _fun00005;
 194:
            oscard = _closure1_slot31;
            report = zuuluu.application_id;
            tangon = undefined;
            entity = oscard.bind(tangon)(report);
 211:
            return entity;
 213:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.bind(report)(zuuluu);
            if(entity) { _fun00006_ip = 275; continue _fun00005 }
 243:
            tangon = zuuluu.application_id;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 273; continue _fun00005 }
 258:
            tangon = _closure1_slot31;
            zuuluu = zuuluu.application_id;
            entity = tangon.bind(report)(zuuluu);
 273:
            _fun00006_ip = 289; continue _fun00005;
 275:
            zuuluu = _closure1_slot8;
            michal = zuuluu.shouldShowActivity;
            entity = michal.bind(zuuluu)();
 289:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    verify = function() { // Original name: handleUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot11;
            entity = tangon.getIdleSince;
            tangon = entity.bind(tangon)();
            entity = null;
            report = entity != tangon;
            oscard = 0;
            entity = 0;
            if(!report) { _fun00008_ip = 35; continue _fun00007 }
 32:
            entity = tangon;
 35:
            _closure1_slot22 = entity;
            tangon = _closure1_slot11;
            entity = tangon.isAFK;
            entity = entity.bind(tangon)();
            _closure1_slot24 = entity;
            entity = _closure1_slot25;
            if(entity) { _fun00008_ip = 157; continue _fun00007 }
 66:
            entity = _closure1_slot19;
            if(entity) { _fun00008_ip = 141; continue _fun00007 }
 73:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            tangon = entity.StatusSetting;
            entity = tangon.getSetting;
            entity = entity.bind(tangon)();
            tangon = _closure1_slot17;
            tangon = tangon.UNKNOWN;
            if(!(entity === tangon)) { _fun00008_ip = 135; continue _fun00007 }
 125:
            tangon = _closure1_slot17;
            entity = tangon.ONLINE;
 135:
            _closure1_slot20 = entity;
            _fun00008_ip = 165; continue _fun00007;
 141:
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            _closure1_slot20 = entity;
            _fun00008_ip = 165; continue _fun00007;
 157:
            entity = _closure1_slot21;
            _closure1_slot20 = entity;
 165:
            tangon = _closure1_slot20;
            entity = _closure1_slot17;
            entity = entity.ONLINE;
            entity = tangon === entity;
            if(!entity) { _fun00008_ip = 194; continue _fun00007 }
 186:
            tangon = _closure1_slot22;
            entity = tangon > oscard;
 194:
            if(!entity) { _fun00008_ip = 211; continue _fun00007 }
 197:
            entity = _closure1_slot17;
            entity = entity.IDLE;
            _closure1_slot20 = entity;
 211:
            entity = _closure1_slot25;
            if(entity) { _fun00008_ip = 266; continue _fun00007 }
 218:
            tangon = _closure1_slot20;
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            if(!(tangon !== entity)) { _fun00008_ip = 266; continue _fun00007 }
 236:
            tangon = _closure1_slot13;
            entity = tangon.getActivities;
            report = entity.bind(tangon)();
            tangon = report.filter;
            entity = _closure1_slot32;
            report = tangon.bind(report)(entity);
            _fun00008_ip = 270; continue _fun00007;
 266:
            report = new Array(0);
 270:
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 17;
            tangon = tangon[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(tangon);
            tangon = _closure1_slot23;
            golfie = golfie.bind(entity)(tangon, report);
            tangon = false;
            if(golfie) { _fun00008_ip = 313; continue _fun00007 }
 307:
            _closure1_slot23 = report;
            tangon = true;
 313:
            golfie = _closure1_slot16;
            report = golfie.getRemoteActivities;
            report = report.bind(golfie)();
            golfie = _closure1_slot26;
            if(!(golfie !== report)) { _fun00008_ip = 343; continue _fun00007 }
 337:
            _closure1_slot26 = report;
            tangon = true;
 343:
            golfie = _closure1_slot16;
            report = golfie.getHiddenActivities;
            report = report.bind(golfie)();
            golfie = _closure1_slot27;
            if(!(golfie !== report)) { _fun00008_ip = 369; continue _fun00007 }
 365:
            _closure1_slot27 = report;
 369:
            if(!tangon) { _fun00008_ip = 484; continue _fun00007 }
 372:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 18;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            yankee = _closure1_slot23;
            golfie = new Array(0);
            romeon = golfie;
            offset = 0;
            offset = arraySpread(romeon, yankee, offset);
            verify = _closure1_slot26;
            option = verify.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot18;
                entity = entity.CUSTOM_STATUS;
                entity = michal !== entity;
                return entity;
            };
            yankee = option.bind(verify)(tangon);
            romeon = golfie;
            tangon = arraySpread(romeon, yankee, offset);
            oscard = golfie.sort;
            tangon = _closure1_slot15;
            tangon = oscard.bind(golfie)(tangon);
            report = report.bind(entity)(tangon);
            tangon = report.uniqBy;
            michal = function(argFoo) {
                entity = argFoo;
                yankee = entity.type;
                verify = entity.application_id;
                golfie = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                romeon = '';
                entity = ':';
                offset = entity;
                option = entity;
                entity = romeon[zuuluu](yankee, offset, verify, option, golfie, oscard);
                return entity;
            };
            tangon = tangon.bind(report)(michal);
            michal = tangon.value;
            michal = michal.bind(tangon)();
            _closure1_slot28 = michal;
 484:
            return entity;
        }
    };
    var _closure1_slot33 = verify;
    offset = function() { // Original name: handleConnectionOpen
        entity = false;
        _closure1_slot25 = entity;
        entity = _closure1_slot17;
        entity = entity.UNKNOWN;
        _closure1_slot21 = entity;
        zuuluu = _closure1_slot33;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        report = _closure1_slot14;
        tangon = report.setCurrentUserOnConnectionOpen;
        zuuluu = _closure1_slot20;
        michal = _closure1_slot28;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot34 = offset;
    michal = global;
    foxtra = michal.Object;
    romeon = foxtra.defineProperty;
    yankee = {};
    option = true;
    yankee['value'] = option;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, yankee);
    romeon = 0;
    yankee = oscard[romeon];
    entity = undefined;
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    yankee = 1;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot4 = yankee;
    yankee = 2;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot5 = yankee;
    yankee = 3;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot6 = yankee;
    yankee = 4;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot7 = yankee;
    yankee = 5;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 6;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 7;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot10 = yankee;
    yankee = 8;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot11 = yankee;
    yankee = 9;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 10;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot13 = yankee;
    yankee = 11;
    foxtra = oscard[yankee];
    foxtra = golfie.bind(entity)(foxtra);
    var _closure1_slot14 = foxtra;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.sortActivity;
    var _closure1_slot15 = yankee;
    yankee = 12;
    yankee = oscard[yankee];
    yankee = golfie.bind(entity)(yankee);
    var _closure1_slot16 = yankee;
    yankee = 13;
    yankee = oscard[yankee];
    yankee = report.bind(entity)(yankee);
    foxtra = yankee.StatusTypes;
    var _closure1_slot17 = foxtra;
    yankee = yankee.ActivityTypes;
    var _closure1_slot18 = yankee;
    yankee = false;
    var _closure1_slot19 = yankee;
    backup = foxtra.ONLINE;
    var _closure1_slot20 = backup;
    foxtra = foxtra.UNKNOWN;
    var _closure1_slot21 = foxtra;
    var _closure1_slot22 = romeon;
    romeon = new Array(0);
    var _closure1_slot23 = romeon;
    var _closure1_slot24 = yankee;
    var _closure1_slot25 = option;
    romeon = michal.Object;
    yankee = romeon.freeze;
    option = new Array(0);
    option = yankee.bind(romeon)(option);
    var _closure1_slot26 = option;
    yankee = michal.Object;
    option = yankee.freeze;
    michal = new Array(0);
    michal = option.bind(yankee)(michal);
    var _closure1_slot27 = michal;
    michal = new Array(0);
    var _closure1_slot28 = michal;
    michal = 19;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SelfPresenceStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot29;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
            yankee = _closure1_slot12;
            offset = _closure1_slot10;
            sizing = tangon;
            michal = sizing[verify](kiloes, backup, foxtra, romeon, yankee, offset, verify);
            zuuluu = tangon.syncWith;
            report = _closure1_slot13;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot33;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'getLocalPresence';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            zuuluu = _closure1_slot20;
            entity['status'] = zuuluu;
            zuuluu = _closure1_slot22;
            entity['since'] = zuuluu;
            zuuluu = _closure1_slot23;
            entity['activities'] = zuuluu;
            michal = _closure1_slot24;
            entity['afk'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getStatus';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getActivities';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = arguments[0];
                michal = undefined;
                if(!(entity === michal)) { _fun00010_ip = 11; continue _fun00009 }
 9:
                entity = true;
 11:
                if(entity) { _fun00010_ip = 23; continue _fun00009 }
 17:
                entity = _closure1_slot23;
                _fun00010_ip = 27; continue _fun00009;
 23:
                entity = _closure1_slot28;
 27:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getHiddenActivities';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot27;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getPrimaryActivity';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = arguments[0];
                michal = undefined;
                if(!(entity === michal)) { _fun00012_ip = 11; continue _fun00011 }
 9:
                entity = true;
 11:
                if(entity) { _fun00012_ip = 29; continue _fun00011 }
 17:
                zuuluu = _closure1_slot23;
                entity = 0;
                entity = zuuluu[entity];
                _fun00012_ip = 39; continue _fun00011;
 29:
                zuuluu = _closure1_slot28;
                michal = 0;
                entity = zuuluu[michal];
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getApplicationActivity';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = arguments[1];
                zuuluu = this;
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = undefined;
                if(!(tangon === michal)) { _fun00014_ip = 23; continue _fun00013 }
 21:
                tangon = true;
 23:
                michal = zuuluu.findActivity;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.application_id;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'findActivity';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = arguments[1];
                michal = this;
                entity = undefined;
                if(!(zuuluu === entity)) { _fun00016_ip = 14; continue _fun00015 }
 12:
                zuuluu = true;
 14:
                entity = michal.getActivities;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.find;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'SelfPresenceStore';
    option['displayName'] = michal;
    michal = 20;
    michal = oscard[michal];
    output = golfie.bind(entity)(michal);
    michal = {};
    michal['START_SESSION'] = verify;
    yankee = function() { // Original name: handleConnectionOpenTracked
        michal = _closure1_slot34;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['CONNECTION_OPEN'] = yankee;
    michal['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    michal['OVERLAY_INITIALIZE'] = offset;
    michal['CONNECTION_CLOSED'] = verify;
    michal['IDLE'] = verify;
    michal['AFK'] = verify;
    michal['RUNNING_GAMES_CHANGE'] = verify;
    michal['STREAMING_UPDATE'] = verify;
    michal['USER_SETTINGS_PROTO_UPDATE'] = verify;
    michal['LOCAL_ACTIVITY_UPDATE'] = verify;
    michal['SPOTIFY_PLAYER_STATE'] = verify;
    michal['SPOTIFY_PLAYER_PLAY'] = verify;
    michal['USER_CONNECTIONS_UPDATE'] = verify;
    michal['SESSIONS_REPLACE'] = verify;
    michal['RPC_APP_DISCONNECTED'] = verify;
    michal['LIBRARY_FETCH_SUCCESS'] = verify;
    michal['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = verify;
    verify = function() { // Original name: handleLogout
        michal = true;
        _closure1_slot25 = michal;
        michal = _closure1_slot20;
        _closure1_slot21 = michal;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleForceInvisible
        entity = argFoo;
        michal = entity.invisible;
        _closure1_slot19 = michal;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['FORCE_INVISIBLE'] = verify;
    tangon = function() { // Original name: handleWindowFocus
        michal = false;
        _closure1_slot19 = michal;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['WINDOW_FOCUS'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    result = tangon;
    sizing = michal;
    michal = new result[option](output, sizing, kiloes);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SelfPresenceStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();