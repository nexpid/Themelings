// app/stores/SelfPresenceStore.tsx
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            report = undefined;
            option = tangon.bind(report)(entity);
            golfie = option.hasFlag;
            entity = zuuluu.flags;
            tangon = null;
            verify = tangon != entity;
            oscard = 0;
            if(!verify) { _fun00004_ip = 53; continue _fun00003 }
 50:
            oscard = entity;
 53:
            entity = _closure1_slot18;
            entity = entity.CONTEXTLESS;
            entity = golfie.bind(option)(oscard, entity);
            if(entity) { _fun00004_ip = 344; continue _fun00003 }
 75:
            oscard = zuuluu.type;
            entity = _closure1_slot19;
            entity = entity.LISTENING;
            if(!(entity !== oscard)) { _fun00004_ip = 270; continue _fun00003 }
 97:
            entity = _closure1_slot19;
            entity = entity.PLAYING;
            if(!(entity !== oscard)) { _fun00004_ip = 165; continue _fun00003 }
 111:
            entity = _closure1_slot19;
            entity = entity.STREAMING;
            if(!(entity !== oscard)) { _fun00004_ip = 135; continue _fun00003 }
 125:
            entity = _closure1_slot19;
            entity = entity.WATCHING;
 135:
            entity = zuuluu.application_id;
            entity = tangon == entity;
            if(entity) { _fun00004_ip = 163; continue _fun00003 }
 148:
            golfie = _closure1_slot31;
            oscard = zuuluu.application_id;
            entity = golfie.bind(report)(oscard);
 163:
            return entity;
 165:
            entity = zuuluu.application_id;
            if(!(tangon == entity)) { _fun00004_ip = 253; continue _fun00003 }
 175:
            golfie = zuuluu.name;
            oscard = _closure1_slot10;
            entity = oscard.getGameByName;
            oscard = entity.bind(oscard)(golfie);
            if(!(tangon == oscard)) { _fun00004_ip = 237; continue _fun00003 }
 199:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 15;
            entity = option[entity];
            entity = golfie.bind(report)(entity);
            golfie = entity.ShowCurrentGame;
            entity = golfie.getSetting;
            entity = entity.bind(golfie)();
            _fun00004_ip = 251; continue _fun00003;
 237:
            golfie = _closure1_slot31;
            oscard = oscard.id;
            entity = golfie.bind(report)(oscard);
 251:
            _fun00004_ip = 268; continue _fun00003;
 253:
            golfie = _closure1_slot31;
            oscard = zuuluu.application_id;
            entity = golfie.bind(report)(oscard);
 268:
            return entity;
 270:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 17;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.bind(report)(zuuluu);
            if(entity) { _fun00004_ip = 328; continue _fun00003 }
 298:
            entity = zuuluu.application_id;
            entity = tangon != entity;
            if(!entity) { _fun00004_ip = 326; continue _fun00003 }
 311:
            tangon = _closure1_slot31;
            zuuluu = zuuluu.application_id;
            entity = tangon.bind(report)(zuuluu);
 326:
            _fun00004_ip = 342; continue _fun00003;
 328:
            zuuluu = _closure1_slot8;
            michal = zuuluu.shouldShowActivity;
            entity = michal.bind(zuuluu)();
 342:
            return entity;
 344:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    verify = function() { // Original name: handleUpdate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot11;
            entity = tangon.getIdleSince;
            tangon = entity.bind(tangon)();
            entity = null;
            report = entity != tangon;
            oscard = 0;
            entity = 0;
            if(!report) { _fun00006_ip = 35; continue _fun00005 }
 32:
            entity = tangon;
 35:
            _closure1_slot23 = entity;
            tangon = _closure1_slot11;
            entity = tangon.isAFK;
            entity = entity.bind(tangon)();
            _closure1_slot25 = entity;
            entity = _closure1_slot26;
            if(entity) { _fun00006_ip = 155; continue _fun00005 }
 64:
            entity = _closure1_slot20;
            if(entity) { _fun00006_ip = 139; continue _fun00005 }
 71:
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
            if(!(entity === tangon)) { _fun00006_ip = 133; continue _fun00005 }
 123:
            tangon = _closure1_slot17;
            entity = tangon.ONLINE;
 133:
            _closure1_slot21 = entity;
            _fun00006_ip = 163; continue _fun00005;
 139:
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            _closure1_slot21 = entity;
            _fun00006_ip = 163; continue _fun00005;
 155:
            entity = _closure1_slot22;
            _closure1_slot21 = entity;
 163:
            tangon = _closure1_slot21;
            entity = _closure1_slot17;
            entity = entity.ONLINE;
            entity = tangon === entity;
            if(!entity) { _fun00006_ip = 192; continue _fun00005 }
 184:
            tangon = _closure1_slot23;
            entity = tangon > oscard;
 192:
            if(!entity) { _fun00006_ip = 209; continue _fun00005 }
 195:
            entity = _closure1_slot17;
            entity = entity.IDLE;
            _closure1_slot21 = entity;
 209:
            entity = _closure1_slot26;
            if(entity) { _fun00006_ip = 264; continue _fun00005 }
 216:
            tangon = _closure1_slot21;
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            if(!(tangon !== entity)) { _fun00006_ip = 264; continue _fun00005 }
 234:
            tangon = _closure1_slot13;
            entity = tangon.getActivities;
            report = entity.bind(tangon)();
            tangon = report.filter;
            entity = _closure1_slot32;
            report = tangon.bind(report)(entity);
            _fun00006_ip = 268; continue _fun00005;
 264:
            report = new Array(0);
 268:
            golfie = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 18;
            tangon = tangon[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(tangon);
            tangon = _closure1_slot24;
            golfie = golfie.bind(entity)(tangon, report);
            tangon = false;
            if(golfie) { _fun00006_ip = 311; continue _fun00005 }
 305:
            _closure1_slot24 = report;
            tangon = true;
 311:
            golfie = _closure1_slot16;
            report = golfie.getRemoteActivities;
            report = report.bind(golfie)();
            golfie = _closure1_slot27;
            if(!(golfie !== report)) { _fun00006_ip = 341; continue _fun00005 }
 335:
            _closure1_slot27 = report;
            tangon = true;
 341:
            golfie = _closure1_slot16;
            report = golfie.getHiddenActivities;
            report = report.bind(golfie)();
            golfie = _closure1_slot28;
            if(!(golfie !== report)) { _fun00006_ip = 367; continue _fun00005 }
 363:
            _closure1_slot28 = report;
 367:
            if(!tangon) { _fun00006_ip = 482; continue _fun00005 }
 370:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 19;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            yankee = _closure1_slot24;
            golfie = new Array(0);
            romeon = golfie;
            offset = 0;
            offset = arraySpread(romeon, yankee, offset);
            verify = _closure1_slot27;
            option = verify.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot19;
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
            _closure1_slot29 = michal;
 482:
            return entity;
        }
    };
    var _closure1_slot33 = verify;
    offset = function() { // Original name: handleConnectionOpen
        entity = false;
        _closure1_slot26 = entity;
        entity = _closure1_slot17;
        entity = entity.UNKNOWN;
        _closure1_slot22 = entity;
        zuuluu = _closure1_slot33;
        entity = undefined;
        zuuluu = zuuluu.bind(entity)();
        report = _closure1_slot14;
        tangon = report.setCurrentUserOnConnectionOpen;
        zuuluu = _closure1_slot21;
        michal = _closure1_slot29;
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
    backup = yankee.ActivityFlags;
    var _closure1_slot18 = backup;
    yankee = yankee.ActivityTypes;
    var _closure1_slot19 = yankee;
    yankee = false;
    var _closure1_slot20 = yankee;
    backup = foxtra.ONLINE;
    var _closure1_slot21 = backup;
    foxtra = foxtra.UNKNOWN;
    var _closure1_slot22 = foxtra;
    var _closure1_slot23 = romeon;
    romeon = new Array(0);
    var _closure1_slot24 = romeon;
    var _closure1_slot25 = yankee;
    var _closure1_slot26 = option;
    romeon = michal.Object;
    yankee = romeon.freeze;
    option = new Array(0);
    option = yankee.bind(romeon)(option);
    var _closure1_slot27 = option;
    yankee = michal.Object;
    option = yankee.freeze;
    michal = new Array(0);
    michal = option.bind(yankee)(michal);
    var _closure1_slot28 = michal;
    michal = new Array(0);
    var _closure1_slot29 = michal;
    michal = 20;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SelfPresenceStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
                entity = _closure1_slot30;
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
            zuuluu = _closure1_slot21;
            entity['status'] = zuuluu;
            zuuluu = _closure1_slot23;
            entity['since'] = zuuluu;
            zuuluu = _closure1_slot24;
            entity['activities'] = zuuluu;
            michal = _closure1_slot25;
            entity['afk'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getStatus';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot21;
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
                entity = _closure1_slot24;
                _fun00010_ip = 27; continue _fun00009;
 23:
                entity = _closure1_slot29;
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
            entity = _closure1_slot28;
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
                zuuluu = _closure1_slot24;
                entity = 0;
                entity = zuuluu[entity];
                _fun00012_ip = 39; continue _fun00011;
 29:
                zuuluu = _closure1_slot29;
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
    michal = 21;
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
        _closure1_slot26 = michal;
        michal = _closure1_slot21;
        _closure1_slot22 = michal;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleForceInvisible
        entity = argFoo;
        michal = entity.invisible;
        _closure1_slot20 = michal;
        michal = _closure1_slot33;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['FORCE_INVISIBLE'] = verify;
    tangon = function() { // Original name: handleWindowFocus
        michal = false;
        _closure1_slot20 = michal;
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
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SelfPresenceStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();